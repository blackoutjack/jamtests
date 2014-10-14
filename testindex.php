<?php
error_reporting(E_ALL);

$err = '';

$auto = isset($_REQUEST['auto']) ? !!$_REQUEST['auto'] : false;
$autoindex = (isset($_REQUEST['autoindex']) && is_numeric($_REQUEST['autoindex'])) ? $_REQUEST['autoindex'] : 0;
$autowait = (isset($_REQUEST['autowait']) && is_numeric($_REQUEST['autowait'])) ? $_REQUEST['autowait'] : 1000;
$autoapp = (isset($_REQUEST['autoapp']) && is_numeric($_REQUEST['autoapp'])) ? $_REQUEST['autoapp'] : 0;

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

$fls = array();
$allfiles = scandir(".");
foreach ($allfiles as $fl) {

  if ($fl == 'libTx.js') continue;
  if ($fl == 'auto.js') continue;
  if ($fl == 'autoextra.js') continue;
  if ($fl == 'actions.txt') continue;
  if ($fl == '.') continue;
  if ($fl == '..') continue;
  if ($fl == 'index.php') continue;
  if ($fl == 'test.php') continue;
  if ($fl == '.svn') continue;

  $parts = explode('.', $fl);
  $len = sizeof($parts);
  if ($len < 2) continue;

  $app = $parts[0];
  if ($app == '') continue; // .swp files, etc.

  $ext = $parts[$len-1];
  if ($ext == 'png') continue;
  if ($ext == 'gif') continue;
  if ($ext == 'jpg') continue;
  if ($ext == 'css') continue;
  if ($ext == 'php') continue;
  if ($ext == 'txt') continue;

  $info = getSubArray($fls, $app);

  $desc = $len > 2 ? $parts[$len-2] : 'main';
  if ($ext == 'js') {
    if ($desc == 'policy') {
      if ($len > 3) {
        $descparts = array_slice($parts, 1, $len-3);
        $desc = implode('.', $descparts);
      } else {
        $desc = 'main';
      }
      $info[$desc] = getSubArray($info, $desc);
      $info[$desc]['policy'] = $fl;
    } else {
      if ($len > 2) {
        $descparts = array_slice($parts, 1, $len-2);
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
      if ($len > 3) {
        $descparts = array_slice($parts, 1, $len-3);
        $desc = implode('.', $descparts);
      } else {
        $desc = 'main';
      }
      $info[$desc] = getSubArray($info, $desc);
      $info[$desc][$role] = $fl;
    } else {
      if ($len > 2) {
        $descparts = array_slice($parts, 1, $len-2);
        $desc = implode('.', $descparts);
      } else {
        $desc = 'main';
      }
      $info[$desc] = getSubArray($info, $desc);
      $info[$desc]['html'] = $fl;
    }
  }

  // Thanks, terrible PHP semantics.
  $fls[$app] = $info;
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

foreach ($fls as $app => $info) { 
  $hrefbase = 'test.php';

  $linksrcs = array();
  foreach ($info as $key => $sub) {
    if (isset($sub['js'])) {
      if ($key == 'original' || $key == 'original.profile') {
        // Only add a policy for these if specified.
      } else {
        $sub['policy'] = findFile($info, 'policy', $key);
      }
      // Suppress the library if there's no policy.
      // %%% Will this break some microbenchmarks?
      $sub['head'] = findFile($info, 'head', $key);
      $sub['body'] = findFile($info, 'body', $key);

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
    $err .= "WARNING: $app has no test case.\n";
  } else {
?>
    <li><?=$app.': '.$linksrc?></li>
<?
  }
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
      $applen = strlen($app);
      $isbig = $applen > 9 && substr($app, 0, 5) == 'sms2-'
        && substr($app, $applen - 4) == '-big';
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
