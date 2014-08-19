<?php
error_reporting(E_ALL);

$err = '';

// Disable or enable some application if we're testing performance.
define('PERFORMANCE', 1);
// How many times to cycle through the apps. 0 means indefinitely.
define('CYCLES', 10);

$auto = isset($_REQUEST['auto']) ? !!$_REQUEST['auto'] : false;
$autoapp = (isset($_REQUEST['autoapp']) && is_numeric($_REQUEST['autoapp'])) ? $_REQUEST['autoapp'] : 0;
$autowait = (isset($_REQUEST['autowait']) && is_numeric($_REQUEST['autowait'])) ? $_REQUEST['autowait'] : 1000;

$apps = array();
$allfiles = scandir(".");
foreach ($allfiles as $fl) {

  if (!is_dir($fl)) continue;
  if ($fl == '.') continue;
  if ($fl == '..') continue;
  if ($fl == '.svn') continue;
  if ($fl == 'sms2') continue;
  if ($fl == 'sms2-template') continue;
  if ($fl == 'txjs') continue;
  if ($fl == 'kraken-results') continue;
  if ($fl == 'jsbench-yahoo-firefox-urem-eval') continue;
  
  // Tests disabled for lack of good test cases.
  if ($fl == 'jsbeautifier') continue;
  if ($fl == 'jsqrcode-mal') continue;
  if ($fl == 'jssec') continue;
  if ($fl == 'jssec-bad') continue;
  if ($fl == 'snote-mini') continue;

    // Tests disabled for semantic divergence.
    if ($fl == 'jsbench-twitter-chrome-urem') continue;
    if ($fl == 'jsbench-yahoo-chrome-urem') continue;
    if ($fl == 'jsbench-yahoo-firefox-urem') continue;
    if ($fl == 'jsbench-yahoo-safari-urem') continue;
    if ($fl == 'googlemaps') continue;
    if ($fl == 'octane') continue;
    //if ($fl == 'kraken') continue;
    //if ($fl == 'sunspider') continue;
  
    // Tests disabled because they are redundant.
    if ($fl == 'kraken-mega') continue;
    if ($fl == 'kraken-mega2') continue;
    if ($fl == 'octane-codeload') continue;
    if ($fl == 'octane-crypto') continue;
    if ($fl == 'octane-eb') continue;
    if ($fl == 'octane-gb') continue;
    if ($fl == 'octane-mandreel') continue;
    if ($fl == 'octane-pdf') continue;
    if ($fl == 'octane-typescript') continue;
    if ($fl == 'octane-zlib') continue;
    if ($fl == 'octane-zlib-eval') continue;
    if ($fl == 'sunspider-mega') continue;
    if ($fl == 'sunspider-mega2') continue;
    if ($fl == 'squirrelmail-bad') continue;

  if (substr($fl, 0, 5) == 'sms2-' && substr($fl, strlen($fl) - 5) == '-call') continue;
  if (substr($fl, 0, 5) == 'sms2-' && substr($fl, strlen($fl) - 4) == '-get') continue;
  if (PERFORMANCE) {
    if ($fl == 'adsense-call') continue;
    if ($fl == 'jsqrcode-get') continue;
    if (substr($fl, 0, 5) == 'sms2-' && substr($fl, strlen($fl) - 9) == '-call-big') continue;
    if (substr($fl, 0, 5) == 'sms2-' && substr($fl, strlen($fl) - 8) == '-get-big') continue;
  } else {
    // For correctness tests, skip "big" input.
    if (substr($fl, strlen($fl) - 4) == '-big') continue;
  }

  $apps[] = $fl;
}

?>
<html lang="en">
  <head>
    <title>JAMScript Application Index</title>
    <meta charset="UTF-8" />
  </head>
  <body>
    <h1>Applications</h1>
    <ul>
<?

$applinks = array();
$tabidx = 0;
foreach ($apps as $app) { 
  $href = "./$app";
  if ($auto) {
    $href .= "?auto=$auto";
    if ($autoapp) {
      $href .= "&autoapp=$autoapp";
    }
    $href .= "&autowait=$autowait";
    if ($autofn) {
      
    }
  }
  $applinks[] = $href;
?>
    <li><a href="<?=$href?>" tabindex="<?=$tabidx?>" ><?=$app?></a></li>
<?
  $tabidx++;
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
  // Cut off execution if we've reached the end.
  $appcnt = sizeof($applinks);
  $appidx = $autoapp % $appcnt;
  if (CYCLES && $autoapp / $appcnt >= CYCLES) {
?>
    <p>Done with all apps</p>
    <iframe src="http://richjoiner.com/audio/Chicken%20Bridge%20Rd.ogg"></iframe>
<?
  } else {
?>
    <script src="../auto.js"></script>
    <script>
      var apps = [
<?
      foreach ($applinks as $applink) {
?>
        '<?=$applink?>',
<?
      }
?>
      ];
      // No reason to wait on this screen.
      doApp(apps, <?=$appidx?>);
    </script>
<?
  }
}
?>
<!--<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d51697.00730621798!2d-79.03929095!3d35.920958999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1394561109265" width="600" height="450" frameborder="0" style="border:0"></iframe>
<iframe width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps?t=m&amp;ie=UTF8&amp;ll=35.884528,-78.927883&amp;spn=0.253125,0.528374&amp;z=12&amp;output=embed"></iframe><br /><small><a href="https://www.google.com/maps?t=m&amp;ie=UTF8&amp;ll=35.884528,-78.927883&amp;spn=0.253125,0.528374&amp;z=12&amp;source=embed" style="color:#0000FF;text-align:left">View Larger Map</a></small>-->
  </body>
</html>

