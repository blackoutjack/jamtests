<?php

    require 'Validate.php';
    require 'JSONHelper.php';

    FetchBlob($_GET['blobHandle']);

    function FetchBlob($strBlobHandle) {
       $arrResponse = FetchBlobFromFile($strBlobHandle);
       print json_encode($arrResponse); 
    }
	
    function FetchBlobFromFile($strBlobHandle) {
 
       $arrResponse = array("bSuccess" => false, 
          "strBlob" => "");

       $strFileNameBlob = "Blobs/$strBlobHandle";
       if(IsValidBlobHandle($strBlobHandle)) {
	 if(file_exists($strFileNameBlob)) {
	   if(($fileBlob = fopen($strFileNameBlob,"rb")) 
              != FALSE) {
             
             if(($strBlob = fread($fileBlob, 
                filesize($strFileNameBlob))) != FALSE) {
	       $arrResponse["strBlob"] = $strBlob;
               $arrResponse["bSuccess"] = true;
             }

             fclose($fileBlob);
	   }
	 }
       }
       return $arrResponse;
    }
?>
