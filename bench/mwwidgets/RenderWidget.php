<?php
    require 'ValidateInput.php'; 

    function RenderWidget($strType, $strId) {
       if(IsValidWidgetId($strId)) {
          return "<div id=" . "\"" . $strId . "\" " . "class=\"mwwidget " . $strType . "\"></div>";
       } else {
          return "";
       }
    }
?>
