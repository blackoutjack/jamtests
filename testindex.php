<?php
error_reporting(E_ALL);

$err = '';

$auto = isset($_REQUEST['auto']) ? !!$_REQUEST['auto'] : false;
$autoindex = (isset($_REQUEST['autoindex']) && is_numeric($_REQUEST['autoindex'])) ? $_REQUEST['autoindex'] : 0;
$autowait = (isset($_REQUEST['autowait']) && is_numeric($_REQUEST['autowait'])) ? $_REQUEST['autowait'] : 1000;
$autoapp = (isset($_REQUEST['autoapp']) && is_numeric($_REQUEST['autoapp'])) ? $_REQUEST['autoapp'] : 0;

// Descriptors for various source versions.
$sourceversions = array('original', 'closure', 'normalized', 'instrumented', 'indirection', 'collapsed', 'optimized', 'full');

// Default set of variants to go through during automated testing.
$autotests = array('original', 'collapsed', 'original.modular', 'original.profile', 'collapsed.profile', 'original.modular.profile');
//$autotests = array('collapsed.profile', 'original.modular.profile');

// Use this for SMS2 "big" variants, since all static files are loaded.
$bigautotests = array('original.profile', 'collapsed.profile', 'original.modular.profile');

function getSubArray($parent, $idx) {
  $sub = null;
  if (array_key_exists($idx, $parent)) {
    $sub = $parent[$idx];
  } else {
    $sub = array();
  }
  return $sub; 
}

$appname = basename(getcwd());

// Filter out ancillary files.
$allfiles = scandir(".");
$sourcefiles = array();
$sourcedirs = array();
foreach ($allfiles as $fl) {
  if ($fl == '.') continue;
  if ($fl == '..') continue;
  if ($fl == 'libTx.js') continue;
  if ($fl == 'auto.js') continue;
  if ($fl == 'autoextra.js') continue;
  if ($fl == 'actions.txt') continue;
  if ($fl == 'index.php') continue;
  if ($fl == 'test.php') continue;
  if ($fl == '.svn') continue;

  if (is_dir($fl)) {
    if (strpos($fl, 'source-') == 0) {
      // Note each source directory.
      $sourcedirs[] = $fl;
    }
  } else {
    if (strpos($fl, $appname.'.') == 0) {
      $back = substr($fl, strlen($appname) + 1);

      $parts = explode('.', $back);
      $len = sizeof($parts);
      if ($len < 1) continue; // Shouldn't happen.
      $ext = $parts[$len - 1];

      if ($ext != 'js' && $ext != 'html') continue;

      $sourcefiles[] = $fl;
    }
  }
}

// Collect the source information into a structured array.
$info = array();

foreach ($sourcefiles as $fl) {
  $back = substr($fl, strlen($appname) + 1);
  $parts = explode('.', $back);
  $len = sizeof($parts);
  $ext = $parts[$len-1];

  // Get the 2nd-to-last part (or use "main").
  $desc = $len > 1 ? $parts[$len-2] : 'main';
  if ($ext == 'js') {
    if ($desc == 'policy') {
      if ($len > 2) {
        $descparts = array_slice($parts, 0, $len - 2);
        $desc = implode('.', $descparts);
      } else {
        $desc = 'main';
      }
      $info[$desc] = getSubArray($info, $desc);
      $info[$desc]['policy'] = $fl;
    } else {
      if ($len > 1) {
        $descparts = array_slice($parts, 0, $len - 1);
        $desc = implode('.', $descparts);
      } else {
        $desc = 'main';
      }
      $info[$desc] = getSubArray($info, $desc);
      $info[$desc]['js'] = $fl;
    }
  } else if ($ext == 'html') {
    if ($desc == 'head' || $desc == 'body') {
      $role = $desc;
      if ($len > 2) {
        $descparts = array_slice($parts, 0, $len - 2);
        $desc = implode('.', $descparts);
      } else {
        $desc = 'main';
      }
      $info[$desc] = getSubArray($info, $desc);
      $info[$desc][$role] = $fl;
    } else {
      if ($len > 1) {
        $descparts = array_slice($parts, 0, $len - 1);
        $desc = implode('.', $descparts);
      } else {
        $desc = 'main';
      }
      $info[$desc] = getSubArray($info, $desc);
      $info[$desc]['html'] = $fl;
    }
  }
}

foreach ($sourcedir as $dir) {
  $desc = substr($sourcedir, strlen('source-'));
  // %%% Eventually want to go recursive instead of just first-level.
  $srcfiles = scandir($sourcedir);

  $subinfo = array();
  foreach ($srcfiles as $src) {
    $srcpath = $sourcedir.'/'.$src;
    if (file_exists($srcpath) && !is_dir($srcpath)) {
      if (substr($srcpath, strlen($srcpath) - 3) == '.js') {
        $subinfo[] = $srcpath;
      }
    }
  }

  $info[$desc] = getSubArray($info, $desc);
  $info[$desc]['source'] = $subinfo;
}

function getParamText($info, $key, $param, $first=false) {
  if (!is_array($info)) echo "NOT ARRAY: ".$info.'<br/>';
  if (array_key_exists($key, $info)) {
    $param .= '='.$info[$key];
    if ($first) {
      $param = '?'.$param;
    } else {
      $param = '&'.$param;
    }
    return $param;
  }
  return "";
}

function getScriptLink($info, $hrefbase, $name, $lib) {
  $jsparam = getParamText($info, 'js', 'script', true);
  $polparam = getParamText($info, 'policy', 'policy', false);
  $headparam = getParamText($info, 'head', 'head', false);
  $bodyparam = getParamText($info, 'body', 'body', false);
  $params = $jsparam.$polparam.$headparam.$bodyparam;

  $href = $hrefbase.$params;
  if (!$lib) {
    $href .= '&lib=0';
  }
  $html = '<a id="'.$name.'" href="'.$href.'">'.$name.'</a>';
  return $html;
}

function getSourceLink($info, $hrefbase, $name, $lib) {
  $first = true;
  $srcparam = '';
  foreach ($info['source'] as $src) {
    $info['tmp'] = $src;
    $srcparam .= getParamText($info, 'tmp', 'sources[]', $first);
    $first = false;
  }
  $polparam = getParamText($info, 'policy', 'policy', false);
  $headparam = getParamText($info, 'head', 'head', false);
  $bodyparam = getParamText($info, 'body', 'body', false);
  $params = $srcparam.$polparam.$headparam.$bodyparam;

  $href = $hrefbase.$params;
  if (!$lib) {
    $href .= '&lib=0';
  }
  $html = '<a id="'.$name.'" href="'.$href.'">'.$name.'</a>';
  return $html;
}

function findFile($info, $filetype, $key) {
  $sub = $info[$key];
  if (isset($sub[$filetype])) return $sub[$filetype];

  $keyparts = explode('.', $key);
  for ($i=sizeof($keyparts)-1; $i>=0; $i--) {
    $subkey = $keyparts[$i];
    if (isset($info[$subkey]) and isset($info[$subkey][$filetype])) {
      return $info[$subkey][$filetype];
    }
  }

  if (isset($info['main']) and isset($info['main'][$filetype])) {
    return $info['main'][$filetype];
  }
}

?>
<html lang="en">
  <head>
    <title>JAMScript Test Index</title>
    <meta charset="UTF-8" />
  </head>
  <body>
    <h1>Test cases</h1>
    <ul>
<?

$hrefbase = 'test.php';

$linksrcs = array();
foreach ($info as $key => $sub) {
  if (isset($sub['js'])) {
    if ($key == 'original' || $key == 'original.profile') {
      // Only add a policy for these if specified.
    } else {
      $sub['policy'] = findFile($info, 'policy', $key);
    }
    // %%% Will this break some microbenchmarks?
    $sub['head'] = findFile($info, 'head', $key);
    $sub['body'] = findFile($info, 'body', $key);

    // Suppress the library if there's no policy.
    $lib = isset($sub['policy']);
    array_push($linksrcs, getScriptLink($sub, $hrefbase, $key, $lib));
  }
  if (isset($sub['source'])) {
    // %%% Eventually want to do something different here.
    if ($key == 'original' || $key == 'original.profile') {
      // Only add a policy for these if specified.
    } else {
      $sub['policy'] = findFile($info, 'policy', $key);
    }
    $sub['head'] = findFile($info, 'head', $key);
    $sub['body'] = findFile($info, 'body', $key);

    // Suppress the library if there's no policy.
    $lib = isset($sub['policy']);
    array_push($linksrcs, getScriptLink($sub, $hrefbase, $key, $lib));
  }
  if (isset($sub['html'])) {
    // Link to the stand-alone HTML file.
    array_push($linksrcs, '<a href="'.$sub['html'].'">'.$sub['html'].'</a>');
  }
}
$linksrc = implode(' | ', $linksrcs);

if (!$linksrc) {
  $err .= "WARNING: $appname has no test case.\n";
} else {
?>
    <li><?=$appname.': '.$linksrc?></li>
<?
}
?>
    </ul>
<?
if ($err) {
?>
    <p class="error"><pre><?=$err?></pre></p>
<?
}
if ($auto) {
?>
    <script src="auto.js"></script>
    <script>
      var tests = [
<?
      // Use different test cases for "big" inputs.
      $applen = strlen($appname);
      $isbig = $applen > 9 && substr($appname, 0, 5) == 'sms2-'
        && substr($appname, $applen - 4) == '-big';
      $ats = $isbig ? $bigautotests : $autotests;
      foreach ($ats as $at) {
?>
        '<?=$at?>',
<?
      }
?>
      ];
      if (<?=$autoindex?> >= tests.length) {
        goBackUp(<?=$autoapp?> + 1, <?=$autowait?>);
      } else {
        doTestCase(tests[<?=$autoindex?>], <?=$autoindex?>, <?=$autoapp?>, <?=$autowait?>);
      }
    </script>
<?
}
?>
  </body>
</html>
