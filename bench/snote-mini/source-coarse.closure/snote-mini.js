introspect(JAM.policy.pFull) {
function SNote() {
  var serverPath = "./SNote/";
  var divParent = document.getElementById("div1");
  function init(divParent$$1, serverPath$$1) {
    m_serverPath = serverPath$$1;
    m_divInternal$$1 = divParent$$1;
    var serverPath$$inline_0 = serverPath$$1;
    m_divInternal$$1.style.border = "2px solid";
    m_divInternal$$1.style.backgroundColor = "#FFFFCC";
    m_preNote = document.createElement("pre");
    var JSCompiler_temp_const$$21 = m_preNote;
    var JSCompiler_inline_result$$22;
    var strElemId$$inline_23 = "note";
    JSCompiler_inline_result$$22 = strElemId$$inline_23;
    JSCompiler_temp_const$$21.id = JSCompiler_inline_result$$22;
    m_preNote.className = "write-only non-editable";
    m_divInternal$$1.appendChild(m_preNote);
    var serverPath$$inline_25 = serverPath$$inline_0;
    m_divButtons = document.createElement("div");
    m_divButtons.style.textAlign = "left";
    m_divInternal$$1.appendChild(m_divButtons);
    m_imageEdit = createNoteButton(serverPath$$inline_25 + "SNoteEdit.png", handleEditButtonClick);
    m_imageView = createNoteButton(serverPath$$inline_25 + "SNoteRead.png", handleUnlockButtonClick);
    m_imageDelete = createNoteButton(serverPath$$inline_25 + "SNoteDelete.png", handleDeleteButtonClick);
    m_divEdit = createPopupDialog("edit_dialog", m_divInternal$$1);
    m_divEdit.style.width = 400;
    m_inputNewPassword = createPasswordPanel(m_divEdit, "Enter password:", "edit_password");
    m_inputNewPasswordRetype = createPasswordPanel(m_divEdit, "Retype password:", "edit_password_retype");
    m_inputNote = document.createElement("textarea");
    m_inputNote.style.width = 350;
    m_inputNote.style.height = 200;
    m_inputNote.className = "destructive-read read-only";
    m_inputNote.id = "edit_note_input";
    m_divEdit.appendChild(m_inputNote);
    divButtons = createDialogButtonPanel(handleEditDialogOk, handleEditDialogCancel, m_divEdit);
    m_divEdit.style.display = "none";
    m_divUnlock = createPopupDialog("unlock_dialog", m_divInternal$$1);
    m_inputPassword = createPasswordPanel(m_divUnlock, "Enter password:", "unlock_password");
    createDialogButtonPanel(handleUnlockDialogOk, handleUnlockDialogCancel, m_divUnlock);
    m_divUnlock.style.display = "none";
    m_divDeleteDialog = createPopupDialog("delete_dialog", m_divInternal$$1);
    var strLabelText$$inline_29 = "Are you sure you want to delete?";
    var parent$$inline_30 = m_divDeleteDialog;
    label = document.createElement("label");
    label.textContent = strLabelText$$inline_29;
    parent$$inline_30.appendChild(label);
    createDialogButtonPanel(handleDeleteDialogOk, handleDeleteDialogCancel, m_divDeleteDialog);
    m_divDeleteDialog.style.display = "none";
    fetch(m_strId, handleSuccessfulFetch, handleFailedFetch);
  }
  function createNoteButton(strIconFile, funcHandleClick) {
    var parent = m_divButtons;
    image = document.createElement("input");
    image.type = "image";
    image.style.width = 23;
    image.style.height = 22;
    image.src = strIconFile;
    parent.appendChild(image);
    image.onclick = funcHandleClick;
    return image;
  }
  function createPasswordPanel(parent$$1, strPrompt, strPasswordInputId) {
    divPassword = document.createElement("div");
    parent$$1.appendChild(divPassword);
    labelPassword = document.createElement("label");
    labelPassword.textContent = strPrompt;
    divPassword.appendChild(labelPassword);
    inputPassword = document.createElement("input");
    inputPassword.type = "password";
    inputPassword.className = "destructive-read read-only";
    inputPassword.id = strPasswordInputId;
    divPassword.appendChild(inputPassword);
    return inputPassword;
  }
  function createPopupDialog(strDialogId, parent$$3) {
    divDialog = document.createElement("div");
    divDialog.id = strDialogId;
    divDialog.className = "popup";
    parent$$3.appendChild(divDialog);
    return divDialog;
  }
  function createDialogButtonPanel(funcHandleOk, funcHandleCancel, parent$$4) {
    divButtons = document.createElement("div");
    buttonOk = document.createElement("button");
    buttonOk.type = "input";
    buttonOk.textContent = "ok";
    buttonOk.onclick = funcHandleOk;
    divButtons.appendChild(buttonOk);
    buttonCancel = document.createElement("button");
    buttonCancel.type = "input";
    buttonCancel.textContent = "cancel";
    buttonCancel.onclick = funcHandleCancel;
    divButtons.appendChild(buttonCancel);
    parent$$4.appendChild(divButtons);
    return divButtons;
  }
  function closeUnlockDialog() {
    var div$$3 = document.getElementById("unlock_dialog");
    div$$3.style.display = "none";
    m_inputPassword.value = "";
  }
  function closeDeleteDialog() {
    var div$$4 = document.getElementById("delete_dialog");
    div$$4.style.display = "none";
  }
  function closeEditDialog() {
    var div$$5 = document.getElementById("edit_dialog");
    div$$5.style.display = "none";
    m_inputNote.value = "";
    m_inputNewPassword.value = "";
    m_inputNewPasswordRetype.value = "";
  }
  function destructiveRead(elem$$1) {
    val = elem$$1.value;
    elem$$1.value = "";
    return val;
  }
  function handleDeleteButtonClick() {
    var div$$inline_5 = document.getElementById("delete_dialog");
    div$$inline_5.style.display = "block";
  }
  function handleDeleteDialogCancel() {
    closeDeleteDialog();
  }
  function handleDeleteDialogOk() {
    deleteSNote(function(strId) {
      m_preNote.textContent = "";
      fetch(m_strId, handleSuccessfulFetch, handleFailedFetch);
    }, function() {
      alert("Failed to delete note.");
    });
    closeDeleteDialog();
  }
  function handleUnlockButtonClick() {
    var div$$inline_9 = document.getElementById("unlock_dialog");
    div$$inline_9.style.display = "block";
  }
  function handleUnlockDialogOk() {
    m_preNote.textContent = message;
    closeUnlockDialog();
    m_imageEdit.style.display = "none";
    m_imageView.style.display = "none";
    m_imageDelete.style.display = "inline";
  }
  function handleUnlockDialogCancel() {
    closeUnlockDialog();
  }
  function handleEditButtonClick() {
    var div$$inline_14 = document.getElementById("edit_dialog");
    div$$inline_14.style.display = "block";
  }
  function handleEditDialogOk() {
    strNewPass = destructiveRead(m_inputNewPassword);
    strNewPassRetype = destructiveRead(m_inputNewPasswordRetype);
    if (strNewPass.length == 0) {
      alert("Must have non-empty password");
    } else {
      if (strNewPass != strNewPassRetype) {
        alert("Passwords do not match");
      } else {
        save(destructiveRead(m_inputNote), function(strId$$1) {
          if (strId$$1 != "") {
            closeEditDialog();
          } else {
            alert("Error: note could not be saved.");
          }
        });
        fetch(m_strId, handleSuccessfulFetch, handleFailedFetch);
      }
    }
  }
  function handleEditDialogCancel() {
    closeEditDialog();
  }
  function handleSuccessfulFetch(strCipherText) {
    m_strCipherText = strCipherText;
    m_imageEdit.style.display = "none";
    m_imageDelete.style.display = "none";
    m_imageView.style.display = "inline";
    closeEditDialog();
  }
  function handleFailedFetch() {
    m_imageView.style.display = "none";
    m_imageDelete.style.display = "none";
    m_imageEdit.style.display = "inline";
  }
  function fetch(strId$$2, callbackSuccess, callbackFail) {
    if (message == "") {
      callbackFail();
    } else {
      callbackSuccess(message);
    }
  }
  function save(strEncNote, callbackDone) {
    var pwd = strNewPass;
    password = pwd;
    message = strEncNote;
    callbackDone("Saved");
  }
  function deleteSNote(callbackSuccess$$1, callbackFail$$1) {
    message = "";
    callbackSuccess$$1("Deleted");
  }
  var m_strId = divParent.id;
  var m_strCipherText = null;
  var m_serverPath = null;
  var m_divInternal$$1 = null;
  var m_preNote = null;
  var m_imageEdit = null;
  var m_imageView = null;
  var m_divEdit = null;
  var m_labelMismatchedPasswords = null;
  var m_inputNewPassword = null;
  var m_inputNewPasswordRetype = null;
  var m_inputNote = null;
  var m_divPassword = null;
  var m_inputPassword = null;
  init(divParent, serverPath);
}
function SNoteSwindler() {
  var serverPath$$4 = "";
  var divParent$$2 = document.getElementById("div2");
  var strNoteId = "div1";
  function createButton(strLabel, strFunc) {
    var parent$$5 = m_divInternal;
    button = document.createElement("button");
    button.type = "input";
    button.textContent = strLabel;
    button.onclick = strFunc;
    parent$$5.appendChild(button);
  }
  function genNoteElemId() {
    var strElemId$$1 = "note";
    return strElemId$$1;
  }
  function forgeNote() {
    preNote = document.getElementById(genNoteElemId());
    preNote.textContent = "Forged note";
  }
  function forgeNoteInnerHTML() {
    preNote = document.getElementById(genNoteElemId());
    preNote.innerHTML = "Forged note";
  }
  function readNote() {
    preNote = document.getElementById(genNoteElemId());
    alert(preNote.textContent);
  }
  function readNoteInnerHTML() {
    preNote = document.getElementById(genNoteElemId());
    alert(preNote.innerHTML);
  }
  m_divParent = null;
  m_divInternal = null;
  m_strNoteId = strNoteId;
  m_divParent = divParent$$2;
  m_divInternal = document.createElement("div");
  m_divInternal.style.border = "2px solid";
  m_divInternal.style.backgroundColor = "#CCCCCC";
  m_divParent.appendChild(m_divInternal);
  createButton("Forge Note", forgeNote);
  createButton("Forge Note Inner HTML", forgeNoteInnerHTML);
  createButton("Read Note", readNote);
  createButton("Read Note Inner HTML", readNoteInnerHTML);
}
var message = "Here's a secret stored message";
var password = "test";
new SNote;
new SNoteSwindler

}
