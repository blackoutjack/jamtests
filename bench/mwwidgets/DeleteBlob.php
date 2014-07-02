<?php

require 'Validate.php';
require 'JSONHelper.php';

DeleteBlob(file_get_contents('php://input'));

function DeleteBlob($strJSON) {

  $arrResponse = array("bSuccess" => false,
		       "strHandle" => $strHandle);

  $arrJSON = json_decode($strJSON, true);
  $strHandle = $arrJSON["blobHandle"];

  $strFileNameBlob = "Blobs/$strHandle";
  if(IsValidBlobHandle($strHandle)) {
    if(file_exists($strFileNameBlob)) {
      unlink($strFileNameBlob);
      $arrResponse["bSuccess"] = true;
    }
  }
  
  // Print out the handle to the note in the response
  print json_encode($arrResponse); 
}
 
?>
