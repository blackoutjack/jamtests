<?php

require 'Validate.php';
require 'JSONHelper.php';

SaveBlob(file_get_contents('php://input')); 

function SaveBlob($strJSON) {

  $arrResponse = array("bSuccess" => false,
		       "strHandle" => $strHandle);
 
  $arrBlob = json_decode($strJSON, true);  
  $strHandle = $arrBlob["blobHandle"];
  $strBlob = $arrBlob["blob"]; 

  if(strlen($strBlob) > 0) {
    if(IsValidBlobHandle($strHandle)) {
      if(($fileBlob = fopen("Blobs/$strHandle", 
			     'wb')) != false) {
	if(fwrite($fileBlob, $strBlob) != false) {
	  $arrResponse["bSuccess"] = true;
          $arrResponse["strHandle"] = $strHandle;
	}
	fclose($fileBlob);
      }
    }
  }
  
  // Print out the handle to the note in the response
  print json_encode($arrResponse); 
}
?>
