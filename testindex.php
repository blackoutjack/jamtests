<?php
error_reporting(E_ALL);

$err = '';
define(COLUMN_HEIGHT, 12);

$appname = basename(getcwd());
include "auto.php";

function getSubArray($parent, $idx) {
  $sub = null;
  if (array_key_exists($idx, $parent)) {
    $sub = $parent[$idx];
  } else {
    $sub = array();
  }
  return $sub; 
}

$IGNORE_FILES = array(
  '.', '..', 'libTx.js', 'auto.js', 'auto.php', 'autoextra.js',
  'actions.txt', 'index.php', 'test.php', '.svn'
);

// Filter out ancillary files.
$allfiles = scandir(".");
$sourcefiles = array();
$sourcedirs = array();
foreach ($allfiles as $fl) {
  if (array_search($fl, $IGNORE_FILES) !== false) continue;

  if (is_dir($fl)) {
    if (strpos($fl, 'source-') === 0) {
      // Note each source directory.
      $sourcedirs[] = $fl;
    }
  } else {
    if (strpos($fl, $appname.'.') === 0) {
      $back = substr($fl, strlen($appname) + 1);

      $parts = explode('.', $back);
      $len = sizeof($parts);
      if ($len < 1) continue; // Shouldn't happen.
      $ext = $parts[$len - 1];

      if ($ext !== 'js' && $ext !== 'html') continue;

      $sourcefiles[] = $fl;
    }
  }
}

// Collect the source information into a structured array.
$polinfo = array();
$htmlinfo = array('main' => array());
$htmlsolo = array();
foreach ($sourcefiles as $fl) {
  $back = substr($fl, strlen($appname) + 1);
  $parts = explode('.', $back);
  $len = sizeof($parts);
  $ext = $parts[$len-1];

  // Get the 2nd-to-last part (or use "main").
  $desc = $len > 1 ? $parts[$len-2] : 'main';
  if ($ext === 'html') {
    if ($desc === 'head' || $desc === 'body') {
      $role = $desc;
      if ($len > 2) {
        $descparts = array_slice($parts, 0, $len - 2);
        $desc = implode('.', $descparts);
      } else {
        $desc = 'main';
      }
      $htmlinfo[$desc] = getSubArray($htmlinfo, $desc);
      $htmlinfo[$desc][$role] = $fl;
    } else {
      if ($len > 1) {
        $descparts = array_slice($parts, 0, $len - 1);
        $desc = implode('.', $descparts);
      } else {
        $desc = 'main';
      }
      $htmlsolo[$desc] = getSubArray($htmlsolo, $desc);
      $htmlsolo[$desc]['html'] = $fl;
    }
  }
  if ($ext == 'js' && $desc == 'policy') {
    if ($len > 2) {
      // Slice off 'policy' and 'js'.
      $descparts = array_slice($parts, 0, $len - 2);
      $desc = implode('.', $descparts);
    } else {
      $desc = 'main';
    }
    $polinfo[$desc] = $fl;
  }
}

$srcinfo = array();
foreach ($sourcedirs as $sourcedir) {
  $desc = substr($sourcedir, strlen('source-'));
  // %%% Eventually want to go recursive instead of just first-level.
  $srcfiles = scandir($sourcedir);

  $subinfo = array();
  foreach ($srcfiles as $src) {
    $srcpath = $sourcedir.'/'.$src;
    if (file_exists($srcpath) && !is_dir($srcpath)) {
      if (substr($srcpath, strlen($srcpath) - 3) === '.js') {
        $subinfo[] = $srcpath;
      }
    }
  }

  $srcinfo[$desc] = getSubArray($srcinfo, $desc);
  $srcinfo[$desc]['source'] = $subinfo;
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

function maybeBreakLinks() {
  static $linkcnt = 0;
  $ret = '';
  $linkmod = $linkcnt % COLUMN_HEIGHT;
  if ($linkcnt !== 0 && $linkmod === 0) {
    $ret .= '</div><div class="linkcol">';
  }
  $linkcnt++;

  return $ret;
}

function getSourceLink($info, $hrefbase, $name, $lib) {
  $text = "source: ".$name;
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
  $html = maybeBreakLinks();
  $html .= '<a id="'.$name.'" href="'.$href.'">'.$text.'</a>';
  return $html;
}

function getHTMLLink($info, $name) {
  $html = maybeBreakLinks();
  $html .= '<a href="'.$info['html'].'">'.$name.'</a>';
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

function findPolicies($info, $key) {
  $ret = array();

  $keyparts = explode('.', $key);
  $keylen = sizeof($keyparts);
  if ($keyparts[$keylen - 1] == 'profile') {
    $keyparts = array_slice($keyparts, 0, $keylen - 2);
  } else {
    $keyparts = array_slice($keyparts, 0, $keylen - 1);
  }
  $key = implode('.', $keyparts);

  foreach ($info as $pkey => $pol) {
    if (strpos($pkey, $key) > -1) {
      $pnub = str_replace($key, '', $pkey);
      $pnub = trim($pnub, '.');
      $ret[$pnub] = $info[$pkey];
    }
  }

  if (sizeof($ret) == 0) {
    if (isset($info['main'])) {
      $ret['main'] = $info['main'];
    } else {
      $ret['main'] = null;
    }
  }
  return $ret;
}

?>
<html lang="en">
  <head>
    <title>JAMScript Test Index</title>
    <meta charset="UTF-8" />
    <style type="text/css" >
      .linkcol {
        padding: 10px;
        float: left;
        font-family: courier new;
      }
      .linkcol a {
        text-decoration: none;
      }
      .linkcol a:hover {
        text-decoration: underline;
      }
    </style>
  </head>
  <body>
    <h1><?=$appname?> test cases</h1>
<?

$hrefbase = 'test.php';

$linksrcs = array();
foreach ($srcinfo as $okey => $sub) {
  if (isset($sub['source'])) {
    $policies = findPolicies($polinfo, $okey);

    foreach ($policies as $pkey => $pol) {
      $key = $okey;
      if ($pol == null) {
        unset($sub['policy']);
      } else {
        $sub['policy'] = $pol;
        if ($pkey != 'main' && $pkey != '') {
          $key = $pkey.'.'.$okey;
        }
      }

      foreach ($htmlinfo as $hkey => $hsub) {
        $sub['head'] = findFile($htmlinfo, 'head', $okey);
        $sub['body'] = findFile($htmlinfo, 'body', $okey);
        if ($hkey == 'main') {
          $dkey = $key;
        } else {
          $dkey = $hkey.'.'.$key;
        }

        // Suppress the library if there's no policy.
        $lib = isset($sub['policy']);
        array_push($linksrcs, getSourceLink($sub, $hrefbase, $dkey, $lib));
      }
    }
  }
}

foreach ($htmlsolo as $key => $sub) {
  // Link to the stand-alone HTML file.
  $text = "html: ".$sub['html'];
  array_push($linksrcs, getHTMLLink($sub, $text));
}

$linksrc = implode('<br/>', $linksrcs);

if ($err) {
?>
    <p class="error"><pre><?=$err?></pre></p>
<?
}

if (!$linksrc) {
  $err .= "WARNING: $appname has no test cases.\n";
} else {
?>
    <div class="linkcol"><?=$linksrc?></div>
<?
}

if (isset($autoscript)) {
?>
    <?=$autoscript?>
<?
}
?>
  </body>
</html>
