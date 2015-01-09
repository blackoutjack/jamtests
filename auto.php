<?php

$auto = isset($_REQUEST['auto']) ? !!$_REQUEST['auto'] : false;

if ($auto) {
  $autoindex = (isset($_REQUEST['autoindex']) && is_numeric($_REQUEST['autoindex'])) ? $_REQUEST['autoindex'] : 0;
  $autowait = (isset($_REQUEST['autowait']) && is_numeric($_REQUEST['autowait'])) ? $_REQUEST['autowait'] : 1000;
  $autoapp = (isset($_REQUEST['autoapp']) && is_numeric($_REQUEST['autoapp'])) ? $_REQUEST['autoapp'] : 0;

  // Default set of variants to go through during automated testing.
  $autotests = array('input', 'semantic0.collapsed', 'coarse.input', 'input.profile', 'semantic0.collapsed.profile', 'coarse.input.profile');
  //$autotests = array('input', 'semantic0.instrumented', 'input.profile', 'semantic0.instrumented.profile');

  // Use this for SMS2 "big" variants, since all static files are loaded.
  $bigautotests = array('big.input.profile', 'big.semantic0.collapsed.profile', 'big.coarse.input.profile');
  //$bigautotests = array('big.input.profile', 'big.semantic0.instrumented.profile');

  ob_start();
?>
    <script src="auto.js"></script>
    <script>
      var tests = [
<?
  // Use additional test cases for "sms2" inputs.
  $applen = strlen($appname);
  $sms2 = $applen > 9 && substr($appname, 0, 5) === 'sms2-';
  $ats = $sms2 ? array_merge($autotests, $bigautotests) : $autotests;
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
  $autoscript = ob_get_clean();
}
?>
