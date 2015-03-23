<?php
error_reporting(E_ALL);

$errors = array();
define('COLUMN_HEIGHT', 12);
define('SCRIPT_INDEX_NAME', 'scripts.txt');

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
$scriptindex = null;
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
    if ($fl === SCRIPT_INDEX_NAME) {
      $scriptindex = array();
      $indexlines = file($fl);
      foreach ($indexlines as $ln) {
        $ln = trim($ln);
        if (substr($ln, 0, 1) == '#' || $ln == '') {
          // Skip comments
          continue;
        }
        $parts = explode(':', $ln);
        if (sizeof($parts) == 3) {
          $scriptindex[] = $parts;
        } else {
          $errors[] = "Invalid script index line: $ln\n";
        }
      }
    } else if (strpos($fl, $appname.'.') === 0) {
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
  
  $subinfo = array();
  if ($scriptindex == null) {
    // %%% May want to go recursive instead of just first-level.
    $srcfiles = scandir($sourcedir);
    foreach ($srcfiles as $src) {
      $srcpath = $sourcedir.'/'.$src;
      if (file_exists($srcpath) && !is_dir($srcpath)) {
        if (substr($srcpath, strlen($srcpath) - 3) === '.js') {
          $subinfo[] = $srcpath;
        }
      }
    }
  } else {
    $subinfo = array();
    foreach ($scriptindex as $srcparts) {
      $src = $srcparts[2];
      $srcpath = $sourcedir.'/'.$src;
      if (file_exists($srcpath) && !is_dir($srcpath)) {
        $subinfo[] = $srcpath;
      } else {
        $errors[] = "Source file is inaccessible: $srcpath";
      }
    }
  }
  $srcinfo[$desc] = getSubArray($srcinfo, $desc);
  $srcinfo[$desc]['source'] = $subinfo;
}

function getParamText($info, $key, $param, $first=false) {
  if (!is_array($info)) echo "NOT ARRAY: ".$info.'<br/>';
  if (array_key_exists($key, $info)) {
    $param .= '='.urlencode($info[$key]);
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

function findPolicies($info, $key) {
  $ret = array();

  // Remove the last part (in addition to a trailing "profile", if
  // present). The last part indicates the intermittant output stage,
  // which doesn't bear on which policy file to associate.
  $keyparts = explode('.', $key);
  $keylen = sizeof($keyparts);
  // Remove the "profile" segment.
  if ($keyparts[$keylen - 1] == 'profile') {
    $keyparts = array_slice($keyparts, 0, $keylen - 1);
  }
  // Remove the output stage indicator. (The conditional is because we
  // want to leave "input".
  if (sizeof($keyparts) > 1) {
    $keyparts = array_slice($keyparts, 0, $keylen - 1);
  }
  $key = implode('.', $keyparts);

  // Search for a policy file corresponding to the trimmed key.
  foreach ($info as $pkey => $pol) {
    if ($key === '' || strpos($pkey, $key) > -1) {
      $pnub = str_replace($key, '', $pkey);
      $pnub = trim($pnub, '.');
      $ret[$pnub] = $info[$pkey];
    }
  }

  // Don't use any policy.
  if (sizeof($ret) == 0) {
    $ret[$key] = null;
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

      $mainhtml = $htmlinfo['main'];
      foreach ($htmlinfo as $hkey => $hsub) {
        if (isset($hsub['head'])) {
          $sub['head'] = $hsub['head'];
        } else if ($hkey !== 'main' && isset($mainhtml['head'])) {
          $sub['head'] = $mainhtml['head'];
        }

        if (isset($hsub['body'])) {
          $sub['body'] = $hsub['body'];
        } else if ($hkey !== 'main' && isset($mainhtml['body'])) {
          $sub['body'] = $mainhtml['body'];
        }

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

if (!$linksrc) {
  $errors[] = "WARNING: $appname has no test cases.\n";
}

if (sizeof($errors) > 0) {
  $errtxt = htmlspecialchars(implode('<br/>', $errors));
?>
    <p class="error"><?=$errtxt?></p>
<?
}

if ($linksrc) {
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
