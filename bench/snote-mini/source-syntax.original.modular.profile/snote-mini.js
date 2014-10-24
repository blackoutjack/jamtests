
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
var message = "Here's a secret stored message";
var password = "test";
function SNote(serverPath, divParent) {
  function init(divParent$$1, serverPath$$1) {
    m_serverPath = serverPath$$1;
    m_divInternal$$1 = divParent$$1;
    createSNote(serverPath$$1);
    fetch(m_strId, handleSuccessfulFetch, handleFailedFetch);
  }
  function createSNote(serverPath$$2) {
    m_divInternal$$1.style.border = "2px solid";
    m_divInternal$$1.style.backgroundColor = "#FFFFCC";
    m_preNote = document.createElement("pre");
    m_preNote.id = genElemId("note");
    m_preNote.className = "write-only non-editable";
    m_divInternal$$1.appendChild(m_preNote);
    createButtonPanel(serverPath$$2);
    createEditDialog();
    createUnlockDialog();
    createDeleteDialog();
  }
  function genElemId(strElemId) {
    return strElemId;
  }
  function createButtonPanel(serverPath$$3) {
    m_divButtons = document.createElement("div");
    m_divButtons.style.textAlign = "left";
    m_divInternal$$1.appendChild(m_divButtons);
    m_imageEdit = createNoteButton(serverPath$$3 + "SNoteEdit.png", handleEditButtonClick, m_divButtons);
    m_imageView = createNoteButton(serverPath$$3 + "SNoteRead.png", handleUnlockButtonClick, m_divButtons);
    m_imageDelete = createNoteButton(serverPath$$3 + "SNoteDelete.png", handleDeleteButtonClick, m_divButtons);
  }
  function createNoteButton(strIconFile, funcHandleClick, parent) {
    image = document.createElement("input");
    image.type = "image";
    image.style.width = 23;
    image.style.height = 22;
    image.src = strIconFile;
    parent.appendChild(image);
    image.onclick = funcHandleClick;
    return image;
  }
  function createEditDialog() {
    m_divEdit = createPopupDialog("edit_dialog", m_divInternal$$1);
    m_divEdit.style.width = 400;
    m_inputNewPassword = createPasswordPanel(m_divEdit, "Enter password:", "edit_password");
    m_inputNewPasswordRetype = createPasswordPanel(m_divEdit, "Retype password:", "edit_password_retype");
    m_inputNote = document.createElement("textarea");
    m_inputNote.style.width = 350;
    m_inputNote.style.height = 200;
    m_inputNote.className = "destructive-read read-only";
    m_inputNote.id = genElemId("edit_note_input");
    m_divEdit.appendChild(m_inputNote);
    divButtons = createDialogButtonPanel(handleEditDialogOk, handleEditDialogCancel, m_divEdit);
    m_divEdit.style.display = "none";
  }
  function createUnlockDialog() {
    m_divUnlock = createPopupDialog("unlock_dialog", m_divInternal$$1);
    m_inputPassword = createPasswordPanel(m_divUnlock, "Enter password:", "unlock_password");
    createDialogButtonPanel(handleUnlockDialogOk, handleUnlockDialogCancel, m_divUnlock);
    m_divUnlock.style.display = "none";
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
    inputPassword.id = genElemId(strPasswordInputId);
    divPassword.appendChild(inputPassword);
    return inputPassword;
  }
  function createDeleteDialog() {
    m_divDeleteDialog = createPopupDialog("delete_dialog", m_divInternal$$1);
    createLabelElement("Are you sure you want to delete?", m_divDeleteDialog);
    createDialogButtonPanel(handleDeleteDialogOk, handleDeleteDialogCancel, m_divDeleteDialog);
    m_divDeleteDialog.style.display = "none";
  }
  function createLabelElement(strLabelText, parent$$2) {
    label = document.createElement("label");
    label.textContent = strLabelText;
    parent$$2.appendChild(label);
    return label;
  }
  function createPopupDialog(strDialogId, parent$$3) {
    divDialog = document.createElement("div");
    divDialog.id = genElemId(strDialogId);
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
  function openEditDialog() {
    var div = document.getElementById("edit_dialog");
    div.style.display = "block";
  }
  function openUnlockDialog() {
    var div$$1 = document.getElementById("unlock_dialog");
    div$$1.style.display = "block";
  }
  function openDeleteDialog() {
    var div$$2 = document.getElementById("delete_dialog");
    div$$2.style.display = "block";
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
  function switchToUnlockedViewMode() {
    m_imageEdit.style.display = "none";
    m_imageView.style.display = "none";
    m_imageDelete.style.display = "inline";
  }
  function switchToLockedViewMode() {
    m_imageEdit.style.display = "none";
    m_imageDelete.style.display = "none";
    m_imageView.style.display = "inline";
  }
  function switchToEditMode() {
    m_imageView.style.display = "none";
    m_imageDelete.style.display = "none";
    m_imageEdit.style.display = "inline";
  }
  function displayNote(strPlainText) {
    m_preNote.textContent = strPlainText;
  }
  function destructiveRead(elem$$1) {
    val = elem$$1.value;
    elem$$1.value = "";
    return val;
  }
  function readPassword() {
    return destructiveRead(m_inputPassword);
  }
  function readNewPassword() {
    return destructiveRead(m_inputNewPassword);
  }
  function readNewPasswordRetype() {
    return destructiveRead(m_inputNewPasswordRetype);
  }
  function readInputNote() {
    return destructiveRead(m_inputNote);
  }
  function handleDeleteButtonClick() {
    openDeleteDialog();
  }
  function handleDeleteDialogCancel() {
    closeDeleteDialog();
  }
  function handleDeleteDialogOk() {
    deleteSNote(function(strId) {
      displayNote("");
      fetch(m_strId, handleSuccessfulFetch, handleFailedFetch);
    }, function() {
      alert("Failed to delete note.");
    });
    closeDeleteDialog();
  }
  function handleUnlockButtonClick() {
    openUnlockDialog();
  }
  function handleUnlockDialogOk() {
    displayNote(message);
    closeUnlockDialog();
    switchToUnlockedViewMode();
  }
  function handleUnlockDialogCancel() {
    closeUnlockDialog();
  }
  function handleEditButtonClick() {
    openEditDialog();
  }
  function handleEditDialogOk() {
    strNewPass = readNewPassword();
    strNewPassRetype = readNewPasswordRetype();
    if (strNewPass.length == 0) {
      alert("Must have non-empty password");
    } else {
      if (strNewPass != strNewPassRetype) {
        alert("Passwords do not match");
      } else {
        save(readInputNote(), strNewPass, function(strId$$1) {
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
    switchToLockedViewMode();
    closeEditDialog();
  }
  function handleFailedFetch() {
    switchToEditMode();
  }
  function fetch(strId$$2, callbackSuccess, callbackFail) {
    if (message == "") {
      callbackFail();
    } else {
      callbackSuccess(message);
    }
  }
  function save(strEncNote, pwd, callbackDone) {
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
function SNoteSwindler(serverPath$$4, divParent$$2, strNoteId) {
  function init$$1(serverPath$$5, divParent$$3) {
    m_divParent = divParent$$3;
    m_divInternal = document.createElement("div");
    m_divInternal.style.border = "2px solid";
    m_divInternal.style.backgroundColor = "#CCCCCC";
    m_divParent.appendChild(m_divInternal);
    createButton("Forge Note", forgeNote, m_divInternal);
    createButton("Forge Note Inner HTML", forgeNoteInnerHTML, m_divInternal);
    createButton("Read Note", readNote, m_divInternal);
    createButton("Read Note Inner HTML", readNoteInnerHTML, m_divInternal);
  }
  function createButton(strLabel, strFunc, parent$$5) {
    button = document.createElement("button");
    button.type = "input";
    button.textContent = strLabel;
    button.onclick = strFunc;
    parent$$5.appendChild(button);
  }
  function genNoteElemId(strElemId$$1) {
    return strElemId$$1;
  }
  function forgeNote() {
    preNote = document.getElementById(genNoteElemId("note"));
    preNote.textContent = "Forged note";
  }
  function forgeNoteInnerHTML() {
    preNote = document.getElementById(genNoteElemId("note"));
    preNote.innerHTML = "Forged note";
  }
  function readNote() {
    preNote = document.getElementById(genNoteElemId("note"));
    alert(preNote.textContent);
  }
  function readNoteInnerHTML() {
    preNote = document.getElementById(genNoteElemId("note"));
    alert(preNote.innerHTML);
  }
  m_divParent = null;
  m_divInternal = null;
  m_strNoteId = strNoteId;
  init$$1(serverPath$$4, divParent$$2);
}
new SNote("./SNote/", document.getElementById("div1"));
new SNoteSwindler("", document.getElementById("div2"), "div1")

}

JAM.stopProfile('load');
