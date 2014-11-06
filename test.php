<?php
error_reporting(E_ALL);
// The |script| parameter is required.
$script = $_REQUEST['script'];
$sources = $_REQUEST['sources'];
if ($script) {
  if (substr_compare($script, ".js", -3) === 0) {
    $title = substr($script, 0, strlen($script) - 3);
  } else {
    $title = $script;
  }
} else if (is_array($sources)) {
  $script = $sources[0];
  if (substr_compare($script, ".js", -3) === 0) {
    $title = substr($script, 0, strlen($script) - 3);
  } else {
    $title = $script;
  }
} else {
  $err = "Please specify a 'script' parameter.";
}

// Pass a falsy |lib| parameter to suppress libTx.js.
$lib = isset($_REQUEST['lib']) ? (!$_REQUEST['lib'] ? false : true) : true;
// Optional policy and html files
$policy = isset($_REQUEST['policy']) ? (!$_REQUEST['policy'] ? false : $_REQUEST['policy']) : false;
$html = isset($_REQUEST['body']) ? $_REQUEST['body'] : false;
$head = isset($_REQUEST['head']) ? $_REQUEST['head'] : false;
$auto = isset($_REQUEST['auto']) ? $_REQUEST['auto'] : false;
$autoindex = (isset($_REQUEST['autoindex']) && is_numeric($_REQUEST['autoindex'])) ? $_REQUEST['autoindex'] : 0;
$autowait = (isset($_REQUEST['autowait']) && is_numeric($_REQUEST['autowait'])) ? $_REQUEST['autowait'] : 1000;
$autoactions = array();

$profile = false;
if (strpos($script, '.profile') > 0) {
  $profile = true;
}

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
?>
<html lang="en">
  <head>
    <title>JAMScript - <?=$title?></title>
    <meta charset="UTF-8" />
<?
if ($profile) {
?>
    <script>JAM.startProfile('init');</script>
<?
}
if ($policy) {
?>
    <script src="<?=$policy?>"></script>
<?
}

if ($lib) {
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
  if ($html) {
    // Include the given HTML snippet.
    include $html;
  }
?>
    <div id="btndiv"></div>
    <p><pre id="log"></pre></p>
    <script src="<?php echo $script; ?>"></script>
    <script>
      if (typeof runTest == "function") {
        var dodiv = document.getElementById('btndiv');
        var dobtn = document.createElement('input');
        dobtn.id = 'dobtn';
        dobtn.type = 'button';
        dobtn.onclick = function () {
          var result = runTest();
          JAM.log("Result: " + result);
        };
        dobtn.value = "Run test";
        dodiv.appendChild(dobtn);
        dobtn.focus();
      }
    </script>
<?
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
      // JAM.bind is used here because a jsbench app seems to
      // clobber Function.prototype.bind.
      JAM.bind(goToPage, [null, document.referrer, 'autoindex', <?=$autoindex + 1?>])
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
