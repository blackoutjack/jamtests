<?php

require 'ValidateInput.php';
require 'JSONHelper.php';

SaveEncryptedSNote($_REQUEST["snoteHandle"], 
		   $_REQUEST["snote"]);

function SaveEncryptedSNote($strHandle, $strSNote) {

  $arrResponse = array("bSuccess" => false,
		       "strHandle" => $strHandle);
  
  if(strlen($strSNote) > 0) {
    if(IsValidSNoteHandle($strHandle)) {
      if(($fileSNote = fopen("Blobs/$strHandle", 
			     'wb')) != false) {
	if(fwrite($fileSNote, $strSNote) != false) {
	  $arrResponse["bSuccess"] = true;
	}
	fclose($fileSNote);
      }
    }
  }
  
  // Print out the handle to the note in the response
  print json_encode($arrResponse); 
}
?>
