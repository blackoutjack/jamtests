<?php

require 'ValidateInput.php';
require 'JSONHelper.php';

DeleteSNote($_REQUEST["snoteHandle"]);

function DeleteSNote($strHandle) {

  $arrResponse = array("bSuccess" => false,
		       "strHandle" => $strHandle);

  $strFileNameSNote = "Blobs/$strHandle";
  if(IsValidSNoteHandle($strHandle)) {
    if(file_exists($strFileNameSNote)) {
      unlink($strFileNameSNote);
      $arrResponse["bSuccess"] = true;
    }
  }
  
  // Print out the handle to the note in the response
  print json_encode($arrResponse); 
}
 
?>
