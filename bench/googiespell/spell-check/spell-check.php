<?php

require_once('spell-check-library.php');
$content = "";
$options = array(
  "lang" => 'en',
  "maxSuggestions" => 10,
  "customDict" => 0,
  "charset" => 'utf-8',
  "textalreadyclipped" => 0,
  "ignoredups" => 0,
  "ignoreallcaps" => 0,
  "ignoredigits" => 0,
  "textalreadyclipped" =>0,
);

$txt = '';
$inTxt = 0;
function loadText($prsr, $data) {
  global $inTxt, $txt;
  if ($inTxt > 0) {
    $txt .= $data;
  }
}
function loadElement($prsr, $name, $attrs) {
  global $inTxt;
  if ($name == 'TEXT') {
    $inTxt++;
  } else if ($name == 'SPELLREQUEST') {
    //if (isset($attrs['textalreadyclipped'])) $options['textalreadyclipped'] = $attrs['textalreadyclipped'];
    //if (isset($attrs['ignoredups'])) $options['ignoredups'] = $attrs['ignoredups'];
    //if (isset($attrs['ignoredigits'])) $options['ignoredigits'] = $attrs['ignoredigits'];
    //if (isset($attrs['ignoreallcaps'])) $options['ignoreallcaps'] = $attrs['ignoreallcaps'];
  }
}
function finishElement($prsr, $name) {
  global $inTxt;
  if ($name == 'TEXT') {
    $inTxt--;
  }
}

header('Content-Type: text/xml; charset=UTF-8');

$parser = xml_parser_create();
xml_set_character_data_handler($parser, 'loadText');
xml_set_element_handler($parser, 'loadElement', 'finishElement');
xml_parse($parser, file_get_contents('php://input'));
xml_parser_free($parser);

$factory = new SpellChecker($options);

$spell = $factory->create(trim($txt));

echo $spell->toXML();

