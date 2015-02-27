<?php
error_reporting(E_ALL);
// Collect a list of script files and generate a title from the |script|
// and |sources[]| parameters.
$scripts = array();
$title = null;
$profile = false;

$script = isset($_REQUEST['script']) ? $_REQUEST['script'] : null;
if ($script) {
  $scripts[] = $script;
  if (substr_compare($script, ".js", -3) === 0) {
    $title = substr($script, 0, strlen($script) - 3);
  } else {
    $title = $script;
  }
  if (strpos($script, '.profile') > 0) {
    $profile = true;
  }
}

$sources = $_REQUEST['sources'];
if (is_array($sources)) {
  for ($i=0; $i<sizeof($sources); $i++) {
    $s = $sources[$i];
    $scripts[] = $s;
    if (is_null($title)) {
      if (substr_compare($s, ".js", -3) === 0) {
        $title = substr($s, 0, strlen($s) - 3);
      } else {
        $title = $s;
      }
    }
    if (strpos($s, '.profile') > 0) {
      $profile = true;
    }
  }
}

$err = null;
if (sizeof($scripts) == 0) {
  $err = "No 'script' or 'sources[]' parameter specified.";
}

// Apply JAM sandboxing through HTTP header.
$http = isset($_REQUEST['http']) ? (!$_REQUEST['http'] ? false : true) : false;
// Pass a falsy |lib| parameter to suppress libTx.js.
$lib = isset($_REQUEST['lib']) ? (!$_REQUEST['lib'] ? false : true) : true;
// Optional policy and html files
$policy = isset($_REQUEST['policy']) ? (!$_REQUEST['policy'] ? false : $_REQUEST['policy']) : false;
$body = isset($_REQUEST['body']) ? $_REQUEST['body'] : false;
$head = isset($_REQUEST['head']) ? $_REQUEST['head'] : false;
$auto = isset($_REQUEST['auto']) ? $_REQUEST['auto'] : false;
$autoindex = (isset($_REQUEST['autoindex']) && is_numeric($_REQUEST['autoindex'])) ? $_REQUEST['autoindex'] : 0;
$autowait = (isset($_REQUEST['autowait']) && is_numeric($_REQUEST['autowait'])) ? $_REQUEST['autowait'] : 1000;
$autoactions = array();

if (file_exists('actions.txt')) {
  $actiontxt = file_get_contents('actions.txt');
  $actionlns = explode("\n", $actiontxt);
  foreach ($actionlns as $action) {
    $action = trim($action);
    if ($action != "") {
      $autoactions[] = $action;
    }
  }
}

if ($http) {
  $includes = array();
  if ($policy) $includes[] = $policy;
  if ($lib) $includes[] = 'libTx.js';

  if (sizeof($includes) > 0) {
    header('JAM-Include: '.implode(',', $includes));
  }
  if ($policy) {
    header('JAM-Introspector: pFull');
  }
}
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>JAMScript - <?=$title?></title>
    <meta charset="UTF-8" />
<?
if ($auto) {
?>
    <script>
    // Don't want any dialogs during automated testing.
    alert = console.log;
    // This is here for auto.js to use.
    var AutoLib = (function() {
      var _bind = Function.prototype.bind;
      var _apply = Function.prototype.apply;
      var _bind_apply = _apply.bind(_bind);
      return {
        bind: function(f, args) {
          return _bind_apply(f, args);
        }
      }
    })();
    Object.freeze(AutoLib);
    </script>
<?
}
if ($profile) {
?>
    <script>JAM.startProfile('init');</script>
<?
}
if (!$http && $policy) {
?>
    <script src="<?=$policy?>"></script>
<?
}

if (!$http && $lib) {
?>
    <script src="libTx.js"></script>
<?
}
if ($profile) {
?>
    <script>JAM.stopProfile('init');</script>
<?
}
if ($head) {
  include $head;
}
?>
  </head>
  <body>
<?
if ($err) {
?>
    <p class="error"><?=$err?></p>
<?
} else {
  if ($body) {
    // Include the given HTML snippet.
    include $body;
  }
?>
    <div id="btndiv"></div>
    <p><pre id="log"></pre></p>
<?
  for ($i=0; $i<sizeof($scripts); $i++) {
    $s = $scripts[$i];
?>
    <script src="<?=$s?>"></script>
<?
  }
  if ($auto) {
?>
  <script src="auto.js"></script>
  <script>
    var actions = [
<?
    foreach ($autoactions as $act) {
?>
      typeof <?=$act?> === 'function' ? <?=$act?> : "<?=$act?>",
<?
    }
?>
      // AutoLib.bind is used here because a jsbench app seems to
      // clobber Function.prototype.bind.
      AutoLib.bind(goToPage, [null, document.referrer, 'autoindex', <?=$autoindex + 1?>])
    ];
    for (var i=0; i<actions.length; i++) {
      var action = actions[i];
      if (typeof action === 'function') {
        // Wait 1 period and run the function.
        setTimeout(action, <?=$autowait?> * (i + 1));
      } else {
        // Wait 1 period and click the button.
        setTimeout(doTestButton.bind(null, action), <?=$autowait?> * (i + 1));
      }
    }
  </script>
<?
  }
?>
  </body>
</html>
<?
}
?>
