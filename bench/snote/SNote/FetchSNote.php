<?php

    require 'ValidateInput.php';
    require 'JSONHelper.php';

    FetchEncryptedSNote($_GET['snotehandle']);

    function FetchEncryptedSNote($strSNoteHandle) {
       $arrResponse = FetchEncryptedSNoteFromFile($strSNoteHandle);
       print json_encode($arrResponse); 
    }
	
    function FetchEncryptedSNoteFromFile($strSNoteHandle) {
 
       $arrResponse = array("bSuccess" => false, 
          "strCipherText" => "");

       $strFileNameEncSNote = "Blobs/$strSNoteHandle";
       if(IsValidSNoteHandle($strSNoteHandle)) {
	 if(file_exists($strFileNameEncSNote)) {
	   if(($fileEncryptedSNote = fopen($strFileNameEncSNote,"rb")) 
              != FALSE) {
             
             if(($strCipherText = fread($fileEncryptedSNote, 
                filesize($strFileNameEncSNote))) != FALSE) {
	       $arrResponse["strCipherText"] = $strCipherText;
               $arrResponse["bSuccess"] = true;
             }

             fclose($fileEncryptedSNote);
	   }
	 }
       }
       return $arrResponse;
    }
?>
