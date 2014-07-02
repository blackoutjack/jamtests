<?php

include("RenderWidget.php");

$wgExtensionCredits['other'][] = array(
	'path' => __FILE__,
	'name' => 'MWWidget',
	'version' => 'Experimental',
	'author' => array( 'Experimental' ),
	'url' => '',
	'descriptionmsg' => 'mwwidget-desc',
);

$wgExtensionMessagesFiles['MWWidget'] = 
	dirname( __FILE__ ) . '/MWWidget.i18n.php';

$wgHooks['ParserFirstCallInit'][] = 'efWidgetParserFunction_Initialize';
 
$wgHooks['LanguageGetMagic'][] = 'efWidgetParserFunction_RegisterMagicWords';

$wgHooks['BeforePageDisplay'][] = 'efWidgetBeforePageDisplay';

$wgHooks['EditPageBeforeEditToolbar'][] = 'efWidgetEditPageBeforeEditToolbar';

///////////////////////////////////////////////
// Register resources needed by the extension
///////////////////////////////////////////////
$wgResourceModules['ext.MWWidget'] = 
  array(
	'styles' => array('resources/jquery.ui/themes/default/jquery.ui.core.css', 
			  'resources/jquery.ui/themes/default/jquery.ui.dialog.css',
			  'resources/jquery.ui/themes/default/jquery.ui.theme.css',
			  'resources/jquery.ui/themes/default/jquery.ui.button.css'),

	'scripts' => array('resources/jquery.ui/jquery.ui.core.js', 
                      'resources/jquery.ui/jquery.ui.widget.js', 
                      'resources/jquery.ui/jquery.ui.dialog.js', 
		      'extensions/MWWidget/RenderWidget.js',
		      'extensions/MWWidget/MWWidgetLog.js',
		      'extensions/MWWidget/MWWidgets.js')
);

function efWidgetBeforePageDisplay(OutputPage &$out, Skin &$skin) {
   $out->addModules('ext.MWWidget'); 
   return true;
}

// Tell MediaWiki that the parser function exists.
function efWidgetParserFunction_Initialize(&$parser) {
   $parser->setFunctionHook('widget', 'efWidgetParserFunction_Render');
   return true;
}
 
// Tell MediaWiki which magic words can invoke the parser function.
function efWidgetParserFunction_RegisterMagicWords(&$magicWords, $langCode) {
   $magicWords['widget'] = array(0, 'widget');
   return true;
 
}
 
// Render the output of the parser function.
function efWidgetParserFunction_Render($parser, $param1='', $param2='') {
   return array( RenderWidget($param1, $param2), 
      'noparse' => false, 
      'isHTML' => true );
}

function efWidgetEditPageBeforeEditToolbar(&$toolbar) {
  $toolbar .= "\n<script>var bInMWEditorMode = true;</script>\n";
  return true;
}

?>
