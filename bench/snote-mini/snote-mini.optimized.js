function SNote(){var serverPath="./SNote/",divParent=v41;function init(divParent,serverPath){m_divInternal=divParent;var serverPath$$0=serverPath,v3=m_divInternal.style;v3.border="2px solid";v3=m_divInternal.style;v3.backgroundColor="#FFFFCC";m_preNote=document.createElement("pre");m_preNote.id="note";m_preNote.className="write-only non-editable";JAMScript.call(m_divInternal.appendChild,m_divInternal,[m_preNote]);m_divButtons=document.createElement("div");v3=m_divButtons.style;v3.textAlign="left";
JAMScript.call(m_divInternal.appendChild,m_divInternal,[m_divButtons]);v3=serverPath$$0+"SNoteEdit.png";m_imageEdit=createNoteButton(v3,handleEditButtonClick);v3=serverPath$$0+"SNoteRead.png";m_imageView=createNoteButton(v3,handleUnlockButtonClick);serverPath$$0+="SNoteDelete.png";m_imageDelete=createNoteButton(serverPath$$0,handleDeleteButtonClick);m_divEdit=createPopupDialog("edit_dialog",m_divInternal);serverPath$$0=m_divEdit.style;serverPath$$0.width=400;m_inputNewPassword=createPasswordPanel(m_divEdit,
"Enter password:","edit_password");m_inputNewPasswordRetype=createPasswordPanel(m_divEdit,"Retype password:","edit_password_retype");m_inputNote=document.createElement("textarea");serverPath$$0=m_inputNote.style;serverPath$$0.width=350;serverPath$$0=m_inputNote.style;serverPath$$0.height=200;m_inputNote.className="destructive-read read-only";m_inputNote.id="edit_note_input";JAMScript.call(m_divEdit.appendChild,m_divEdit,[m_inputNote]);divButtons=createDialogButtonPanel(handleEditDialogOk,handleEditDialogCancel,
m_divEdit);serverPath$$0=m_divEdit.style;serverPath$$0.display="none";m_divUnlock=createPopupDialog("unlock_dialog",m_divInternal);m_inputPassword=createPasswordPanel(m_divUnlock,"Enter password:","unlock_password");createDialogButtonPanel(handleUnlockDialogOk,handleUnlockDialogCancel,m_divUnlock);serverPath$$0=m_divUnlock.style;serverPath$$0.display="none";serverPath$$0=m_divDeleteDialog=createPopupDialog("delete_dialog",m_divInternal);label=document.createElement("label");JAMScript.set(label,"textContent",
"Are you sure you want to delete?",JAMScript.introspectors.process60BC769F7FE69A3D16A7359015C19BE54348D76E510AD27954A2595FF3D635DFFE9522029FA0A17D643B7C49AB8946BE23E67884C2A1A1A95BFE0CBF);JAMScript.call(serverPath$$0.appendChild,serverPath$$0,[label]);createDialogButtonPanel(handleDeleteDialogOk,handleDeleteDialogCancel,m_divDeleteDialog);serverPath$$0=m_divDeleteDialog.style;serverPath$$0.display="none";fetch(m_strId,handleSuccessfulFetch,handleFailedFetch)}function createNoteButton(strIconFile,
funcHandleClick){var parent=m_divButtons;image=document.createElement("input");image.type="image";var v15=image.style;v15.width=23;v15=image.style;v15.height=22;image.src=strIconFile;JAMScript.call(parent.appendChild,parent,[image]);JAMScript.set(image,"onclick",funcHandleClick);return image}function createPasswordPanel(parent,strPrompt,strPasswordInputId){divPassword=document.createElement("div");JAMScript.call(parent.appendChild,parent,[divPassword]);labelPassword=document.createElement("label");
JAMScript.set(labelPassword,"textContent",strPrompt,JAMScript.introspectors.process60BC769F7FE69A3D16A7359015C19BE54348D76E510AD27954A2595FF3D635DFFE9522029FA0A17D643B7C49AB8946BE23E67884C2A1A1A95BFE0CBF);JAMScript.call(divPassword.appendChild,divPassword,[labelPassword]);inputPassword=document.createElement("input");inputPassword.type="password";inputPassword.className="destructive-read read-only";inputPassword.id=strPasswordInputId;JAMScript.call(divPassword.appendChild,divPassword,[inputPassword]);
return inputPassword}function createPopupDialog(strDialogId,parent){divDialog=document.createElement("div");divDialog.id=strDialogId;divDialog.className="popup";JAMScript.call(parent.appendChild,parent,[divDialog]);return divDialog}function createDialogButtonPanel(funcHandleOk,funcHandleCancel,parent){divButtons=document.createElement("div");buttonOk=document.createElement("button");buttonOk.type="input";JAMScript.set(buttonOk,"textContent","ok",JAMScript.introspectors.process60BC769F7FE69A3D16A7359015C19BE54348D76E510AD27954A2595FF3D635DFFE9522029FA0A17D643B7C49AB8946BE23E67884C2A1A1A95BFE0CBF);
JAMScript.set(buttonOk,"onclick",funcHandleOk);JAMScript.call(divButtons.appendChild,divButtons,[buttonOk]);buttonCancel=document.createElement("button");buttonCancel.type="input";JAMScript.set(buttonCancel,"textContent","cancel",JAMScript.introspectors.process60BC769F7FE69A3D16A7359015C19BE54348D76E510AD27954A2595FF3D635DFFE9522029FA0A17D643B7C49AB8946BE23E67884C2A1A1A95BFE0CBF);JAMScript.set(buttonCancel,"onclick",funcHandleCancel);JAMScript.call(divButtons.appendChild,divButtons,[buttonCancel]);
JAMScript.call(parent.appendChild,parent,[divButtons]);return divButtons}function closeUnlockDialog(){var div=document.getElementById("unlock_dialog"),div=div.style;div.display="none";m_inputPassword.value=""}function closeDeleteDialog(){var div=document.getElementById("delete_dialog"),div=div.style;div.display="none"}function closeEditDialog(){var div=document.getElementById("edit_dialog"),div=div.style;div.display="none";m_inputNote.value="";m_inputNewPassword.value="";m_inputNewPasswordRetype.value=
""}function destructiveRead(elem){val=elem.value;elem.value="";return val}function handleDeleteButtonClick(){var div=document.getElementById("delete_dialog"),div=div.style;div.display="block"}function handleDeleteDialogCancel(){closeDeleteDialog()}function handleDeleteDialogOk(){function v1(){alert("Failed to delete note.")}function v0(strId){JAMScript.set(m_preNote,"textContent","",JAMScript.introspectors.process60BC769F7FE69A3D16A7359015C19BE54348D76E510AD27954A2595FF3D635DFFE9522029FA0A17D643B7C49AB8946BE23E67884C2A1A1A95BFE0CBF);
fetch(m_strId,handleSuccessfulFetch,handleFailedFetch)}deleteSNote(v0,v1);closeDeleteDialog()}function handleUnlockButtonClick(){var div=document.getElementById("unlock_dialog"),div=div.style;div.display="block"}function handleUnlockDialogOk(){JAMScript.set(m_preNote,"textContent",message,JAMScript.introspectors.process60BC769F7FE69A3D16A7359015C19BE54348D76E510AD27954A2595FF3D635DFFE9522029FA0A17D643B7C49AB8946BE23E67884C2A1A1A95BFE0CBF);closeUnlockDialog();var v22=m_imageEdit.style;v22.display=
"none";v22=m_imageView.style;v22.display="none";v22=m_imageDelete.style;v22.display="inline"}function handleUnlockDialogCancel(){closeUnlockDialog()}function handleEditButtonClick(){var div=document.getElementById("edit_dialog"),div=div.style;div.display="block"}function handleEditDialogOk(){function v2(strId){(strId=""!=strId)?closeEditDialog():alert("Error: note could not be saved.")}strNewPass=destructiveRead(m_inputNewPassword);strNewPassRetype=destructiveRead(m_inputNewPasswordRetype);var v43=
strNewPass.length;(v43=0==v43)?alert("Must have non-empty password"):(v43=strNewPass!=strNewPassRetype)?alert("Passwords do not match"):(v43=destructiveRead(m_inputNote),save(v43,v2),fetch(m_strId,handleSuccessfulFetch,handleFailedFetch))}function handleEditDialogCancel(){closeEditDialog()}function handleSuccessfulFetch(strCipherText){strCipherText=m_imageEdit.style;strCipherText.display="none";strCipherText=m_imageDelete.style;strCipherText.display="none";strCipherText=m_imageView.style;strCipherText.display=
"inline";closeEditDialog()}function handleFailedFetch(){var v33=m_imageView.style;v33.display="none";v33=m_imageDelete.style;v33.display="none";v33=m_imageEdit.style;v33.display="inline"}function fetch(strId,callbackSuccess,callbackFail){(strId=""==message)?JAMScript.call(callbackFail,null,[]):JAMScript.call(callbackSuccess,null,[message])}function save(strEncNote,callbackDone){var pwd=strNewPass;password=pwd;message=strEncNote;JAMScript.call(callbackDone,null,["Saved"])}function deleteSNote(callbackSuccess,
callbackFail){message="";JAMScript.call(callbackSuccess,null,["Deleted"])}var m_strId=divParent.id,m_divInternal=null,m_preNote=null,m_imageEdit=null,m_imageView=null,m_divEdit=null,m_inputNewPassword=null,m_inputNewPasswordRetype=null,m_inputNote=null,m_inputPassword=null;init(divParent,serverPath)}
function SNoteSwindler(){var divParent=v42,strNoteId="div1";function createButton(strLabel,strFunc){var parent=m_divInternal;button=document.createElement("button");button.type="input";JAMScript.set(button,"textContent",strLabel,JAMScript.introspectors.process60BC769F7FE69A3D16A7359015C19BE54348D76E510AD27954A2595FF3D635DFFE9522029FA0A17D643B7C49AB8946BE23E67884C2A1A1A95BFE0CBF);JAMScript.set(button,"onclick",strFunc);JAMScript.call(parent.appendChild,parent,[button])}function forgeNote(){preNote=
document.getElementById("note");JAMScript.set(preNote,"textContent","Forged note",JAMScript.introspectors.process60BC769F7FE69A3D16A7359015C19BE54348D76E510AD27954A2595FF3D635DFFE9522029FA0A17D643B7C49AB8946BE23E67884C2A1A1A95BFE0CBF)}function forgeNoteInnerHTML(){preNote=document.getElementById("note");JAMScript.set(preNote,"innerHTML","Forged note",JAMScript.introspectors.processC51DDFC22C8571C0FE27B1BC0B7671157BDF992D)}function readNote(){preNote=document.getElementById("note");introspect(JAMScript.introspectors.process02BEB9B7B2358FCBE710EE3EF4F98E5DB6FF7E1441323F239D1C8F39E2D0E44249CC80F53BBDDF0D083CCCB7BDF4957FF03A722A119BF94D894180EE)var v37=
preNote.textContent;alert(v37)}function readNoteInnerHTML(){preNote=document.getElementById("note");introspect(JAMScript.introspectors.process29142370413EC1F7A49F60B32ADBDF99B2C2500D)var v38=preNote.innerHTML;alert(v38)}m_divInternal=m_divParent=null;m_strNoteId=strNoteId;m_divParent=divParent;m_divInternal=document.createElement("div");divParent=m_divInternal.style;divParent.border="2px solid";divParent=m_divInternal.style;divParent.backgroundColor="#CCCCCC";JAMScript.call(m_divParent.appendChild,
m_divParent,[m_divInternal]);createButton("Forge Note",forgeNote);createButton("Forge Note Inner HTML",forgeNoteInnerHTML);createButton("Read Note",readNote);createButton("Read Note Inner HTML",readNoteInnerHTML)}var message="Here's a secret stored message",password="test",v41=document.getElementById("div1");new SNote;var v42=document.getElementById("div2");new SNoteSwindler;