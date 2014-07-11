<?php
error_reporting(E_ALL);

$err = '';

$auto = isset($_REQUEST['auto']) ? !!$_REQUEST['auto'] : false;
$autoindex = (isset($_REQUEST['autoindex']) && is_numeric($_REQUEST['autoindex'])) ? $_REQUEST['autoindex'] : 0;
$autowait = (isset($_REQUEST['autowait']) && is_numeric($_REQUEST['autowait'])) ? $_REQUEST['autowait'] : 1000;
$autoapp = (isset($_REQUEST['autoapp']) && is_numeric($_REQUEST['autoapp'])) ? $_REQUEST['autoapp'] : 0;

$autotests = array('original', 'transformed', 'original.modular', 'original.profile', 'transformed.profile', 'original.modular.profile');

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

  $desc = $len > 2 ? $parts[$len-2] : '';

  $info = getSubArray($fls, $app);

  if ($ext == 'js') {
    $key = null;
    if ($desc == 'policy') {
      if ($len == 3) {
        $key = 'main';
      } else {
        $keyparts = array_slice($parts, 1, $len-3);
        $key = implode('.', $keyparts);
      }
      $info[$key] = getSubArray($info, $key);
      $info[$key]['policy'] = $fl;
    } else {
      if ($len == 2) {
        $key = 'main';
      } else {
        $keyparts = array_slice($parts, 1, $len-2);
        $key = implode('.', $keyparts);
      }
      $info[$key] = getSubArray($info, $key);
      $info[$key]['js'] = $fl;
    }
  } else if ($ext == 'html') {
    // %%% Maybe want to allow per-source HTML also.
    if ($desc == 'head') {
      $info['head'] = $fl;
    } else if ($len == 2) {
      $info['html'] = $fl;
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

function appendScriptLink($html, $info, $hrefbase, $extra, $name) {
  $jsparam = getParamText($info, 'js', 'script', true);
  $polparam = getParamText($info, 'policy', 'policy', false);
  $params = $jsparam.$polparam;
  if ($params) {
    $href = $hrefbase.$params.$extra;
    if ($html) $html .= ' | ';
    $html .= '<a id="'.$name.'" href="'.$href.'">'.$name.'</a>';
  }
  return $html;
}

function findPolicy($info, $key) {
  $sub = $info[$key];
  if (isset($sub['policy'])) return $sub['policy'];
  if ($key == 'original' || $key == 'original.profile') {
    return '0';
  }

  $keyparts = explode('.', $key);
  for ($i=sizeof($keyparts)-1; $i>=0; $i--) {
    $subkey = $keyparts[$i];
    if (isset($info[$subkey]) and isset($info[$subkey]['policy'])) {
      return $info[$subkey]['policy'];
    }
  }

  if (isset($info['main']) and isset($info['main']['policy'])) {
    return $info['main']['policy'];
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

  $linksrc = '';

  $htmlparam = getParamText($info, 'html', 'html', false);
  $headparam = getParamText($info, 'head', 'head', false);

  $extraparams = $htmlparam.$headparam;
  $linksrc = '';
  foreach ($info as $key => $sub) {
    if ($key == 'html' or $key == 'head') continue;
    if (!isset($sub['js'])) continue;

    $sub['policy'] = findPolicy($info, $key);

    $linksrc = appendScriptLink($linksrc, $sub, $hrefbase, $extraparams, $key);
  }

  if (!$linksrc) {
    $err .= "WARNING: $app has no JavaScript source.\n";
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
      foreach ($autotests as $at) {
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
