function SNote(serverPath, divParent) {
  function init(divParent$$1, serverPath$$1) {
    m_serverPath = serverPath$$1;
    m_divInternal$$1 = divParent$$1;
    var serverPath$$inline_0 = serverPath$$1;
    var v3 = m_divInternal$$1.style;
    v3.border = "2px solid";
    var v4 = m_divInternal$$1.style;
    v4.backgroundColor = "#FFFFCC";
    m_preNote = document.createElement("pre");
    m_preNote.id = "note";
    m_preNote.className = "write-only non-editable";
    m_divInternal$$1.appendChild(m_preNote);
    var serverPath$$inline_21 = serverPath$$inline_0;
    m_divButtons = document.createElement("div");
    var v5 = m_divButtons.style;
    v5.textAlign = "left";
    m_divInternal$$1.appendChild(m_divButtons);
    var v6 = serverPath$$inline_21 + "SNoteEdit.png";
    m_imageEdit = createNoteButton(v6, handleEditButtonClick, m_divButtons);
    var v7 = serverPath$$inline_21 + "SNoteRead.png";
    m_imageView = createNoteButton(v7, handleUnlockButtonClick, m_divButtons);
    var v8 = serverPath$$inline_21 + "SNoteDelete.png";
    m_imageDelete = createNoteButton(v8, handleDeleteButtonClick, m_divButtons);
    m_divEdit = createPopupDialog("edit_dialog", m_divInternal$$1);
    var v9 = m_divEdit.style;
    v9.width = 400;
    m_inputNewPassword = createPasswordPanel(m_divEdit, "Enter password:", "edit_password");
    m_inputNewPasswordRetype = createPasswordPanel(m_divEdit, "Retype password:", "edit_password_retype");
    m_inputNote = document.createElement("textarea");
    var v10 = m_inputNote.style;
    v10.width = 350;
    var v11 = m_inputNote.style;
    v11.height = 200;
    m_inputNote.className = "destructive-read read-only";
    m_inputNote.id = "edit_note_input";
    m_divEdit.appendChild(m_inputNote);
    divButtons = createDialogButtonPanel(handleEditDialogOk, handleEditDialogCancel, m_divEdit);
    var v12 = m_divEdit.style;
    v12.display = "none";
    m_divUnlock = createPopupDialog("unlock_dialog", m_divInternal$$1);
    m_inputPassword = createPasswordPanel(m_divUnlock, "Enter password:", "unlock_password");
    createDialogButtonPanel(handleUnlockDialogOk, handleUnlockDialogCancel, m_divUnlock);
    var v13 = m_divUnlock.style;
    v13.display = "none";
    m_divDeleteDialog = createPopupDialog("delete_dialog", m_divInternal$$1);
    var parent$$inline_25 = m_divDeleteDialog;
    label = document.createElement("label");
    introspect(JAM.policy.p8) {
      label.textContent = "Are you sure you want to delete?"
    }
    parent$$inline_25.appendChild(label);
    createDialogButtonPanel(handleDeleteDialogOk, handleDeleteDialogCancel, m_divDeleteDialog);
    var v14 = m_divDeleteDialog.style;
    v14.display = "none";
    fetch(m_strId, handleSuccessfulFetch, handleFailedFetch);
    return
  }
  function createNoteButton(strIconFile, funcHandleClick, parent) {
    image = document.createElement("input");
    image.type = "image";
    var v15 = image.style;
    v15.width = 23;
    var v16 = image.style;
    v16.height = 22;
    image.src = strIconFile;
    parent.appendChild(image);
    image.onclick = funcHandleClick;
    return image
  }
  function createPasswordPanel(parent$$1, strPrompt, strPasswordInputId) {
    divPassword = document.createElement("div");
    parent$$1.appendChild(divPassword);
    labelPassword = document.createElement("label");
    introspect(JAM.policy.p8) {
      labelPassword.textContent = strPrompt
    }
    divPassword.appendChild(labelPassword);
    inputPassword = document.createElement("input");
    inputPassword.type = "password";
    inputPassword.className = "destructive-read read-only";
    inputPassword.id = strPasswordInputId;
    divPassword.appendChild(inputPassword);
    return inputPassword
  }
  function createPopupDialog(strDialogId, parent$$3) {
    divDialog = document.createElement("div");
    divDialog.id = strDialogId;
    divDialog.className = "popup";
    parent$$3.appendChild(divDialog);
    return divDialog
  }
  function createDialogButtonPanel(funcHandleOk, funcHandleCancel, parent$$4) {
    divButtons = document.createElement("div");
    buttonOk = document.createElement("button");
    buttonOk.type = "input";
    introspect(JAM.policy.p8) {
      buttonOk.textContent = "ok"
    }
    buttonOk.onclick = funcHandleOk;
    divButtons.appendChild(buttonOk);
    buttonCancel = document.createElement("button");
    buttonCancel.type = "input";
    introspect(JAM.policy.p8) {
      buttonCancel.textContent = "cancel"
    }
    buttonCancel.onclick = funcHandleCancel;
    divButtons.appendChild(buttonCancel);
    parent$$4.appendChild(divButtons);
    return divButtons
  }
  function closeUnlockDialog() {
    var div$$3 = document.getElementById("unlock_dialog");
    var v17 = div$$3.style;
    v17.display = "none";
    m_inputPassword.value = "";
    return
  }
  function closeDeleteDialog() {
    var div$$4 = document.getElementById("delete_dialog");
    var v18 = div$$4.style;
    v18.display = "none";
    return
  }
  function closeEditDialog() {
    var div$$5 = document.getElementById("edit_dialog");
    var v19 = div$$5.style;
    v19.display = "none";
    m_inputNote.value = "";
    m_inputNewPassword.value = "";
    m_inputNewPasswordRetype.value = "";
    return
  }
  function destructiveRead(elem$$1) {
    val = elem$$1.value;
    elem$$1.value = "";
    return val
  }
  function handleDeleteButtonClick() {
    var div$$inline_5 = document.getElementById("delete_dialog");
    var v20 = div$$inline_5.style;
    v20.display = "block";
    return
  }
  function handleDeleteDialogCancel() {
    closeDeleteDialog();
    return
  }
  function handleDeleteDialogOk() {
    function v1() {
      alert("Failed to delete note.");
      return
    }
    function v0(strId) {
      introspect(JAM.policy.p8) {
        m_preNote.textContent = ""
      }
      fetch(m_strId, handleSuccessfulFetch, handleFailedFetch);
      return
    }
    deleteSNote(v0, v1);
    closeDeleteDialog();
    return
  }
  function handleUnlockButtonClick() {
    var div$$inline_9 = document.getElementById("unlock_dialog");
    var v21 = div$$inline_9.style;
    v21.display = "block";
    return
  }
  function handleUnlockDialogOk() {
    introspect(JAM.policy.p8) {
      m_preNote.textContent = message
    }
    closeUnlockDialog();
    var v22 = m_imageEdit.style;
    v22.display = "none";
    var v23 = m_imageView.style;
    v23.display = "none";
    var v24 = m_imageDelete.style;
    v24.display = "inline";
    return
  }
  function handleUnlockDialogCancel() {
    closeUnlockDialog();
    return
  }
  function handleEditButtonClick() {
    var div$$inline_14 = document.getElementById("edit_dialog");
    var v25 = div$$inline_14.style;
    v25.display = "block";
    return
  }
  function handleEditDialogOk() {
    function v2(strId$$1) {
      var v26 = strId$$1 != "";
      if(v26) {
        closeEditDialog()
      }else {
        alert("Error: note could not be saved.")
      }
      return
    }
    strNewPass = destructiveRead(m_inputNewPassword);
    strNewPassRetype = destructiveRead(m_inputNewPasswordRetype);
    var v43 = strNewPass.length;
    var v29 = v43 == 0;
    if(v29) {
      alert("Must have non-empty password")
    }else {
      var v28 = strNewPass != strNewPassRetype;
      if(v28) {
        alert("Passwords do not match")
      }else {
        var v27 = destructiveRead(m_inputNote);
        save(v27, strNewPass, v2);
        fetch(m_strId, handleSuccessfulFetch, handleFailedFetch)
      }
    }
    return
  }
  function handleEditDialogCancel() {
    closeEditDialog();
    return
  }
  function handleSuccessfulFetch(strCipherText) {
    m_strCipherText = strCipherText;
    var v30 = m_imageEdit.style;
    v30.display = "none";
    var v31 = m_imageDelete.style;
    v31.display = "none";
    var v32 = m_imageView.style;
    v32.display = "inline";
    closeEditDialog();
    return
  }
  function handleFailedFetch() {
    var v33 = m_imageView.style;
    v33.display = "none";
    var v34 = m_imageDelete.style;
    v34.display = "none";
    var v35 = m_imageEdit.style;
    v35.display = "inline";
    return
  }
  function fetch(strId$$2, callbackSuccess, callbackFail) {
    var v36 = message == "";
    if(v36) {
      callbackFail()
    }else {
      callbackSuccess(message)
    }
    return
  }
  function save(strEncNote, pwd, callbackDone) {
    password = pwd;
    message = strEncNote;
    callbackDone("Saved");
    return
  }
  function deleteSNote(callbackSuccess$$1, callbackFail$$1) {
    message = "";
    callbackSuccess$$1("Deleted");
    return
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
  return
}
function SNoteSwindler(serverPath$$4, divParent$$2, strNoteId) {
  function createButton(strLabel, strFunc, parent$$5) {
    button = document.createElement("button");
    button.type = "input";
    introspect(JAM.policy.p8) {
      button.textContent = strLabel
    }
    button.onclick = strFunc;
    parent$$5.appendChild(button);
    return
  }
  function forgeNote() {
    preNote = document.getElementById("note");
    introspect(JAM.policy.p8) {
      preNote.textContent = "Forged note"
    }
    return
  }
  function forgeNoteInnerHTML() {
    preNote = document.getElementById("note");
    introspect(JAM.policy.p2) {
      preNote.innerHTML = "Forged note"
    }
    return
  }
  function readNote() {
    preNote = document.getElementById("note");
    introspect(JAM.policy.p6) {
      var v37 = preNote.textContent
    }
    alert(v37);
    return
  }
  function readNoteInnerHTML() {
    preNote = document.getElementById("note");
    introspect(JAM.policy.p4) {
      var v38 = preNote.innerHTML
    }
    alert(v38);
    return
  }
  m_divParent = null;
  m_divInternal = null;
  m_strNoteId = strNoteId;
  m_divParent = divParent$$2;
  m_divInternal = document.createElement("div");
  var v39 = m_divInternal.style;
  v39.border = "2px solid";
  var v40 = m_divInternal.style;
  v40.backgroundColor = "#CCCCCC";
  m_divParent.appendChild(m_divInternal);
  createButton("Forge Note", forgeNote, m_divInternal);
  createButton("Forge Note Inner HTML", forgeNoteInnerHTML, m_divInternal);
  createButton("Read Note", readNote, m_divInternal);
  createButton("Read Note Inner HTML", readNoteInnerHTML, m_divInternal);
  return
}
var message = "Here's a secret stored message";
var password = "test";
var v41 = document.getElementById("div1");
new SNote("./SNote/", v41);
var v42 = document.getElementById("div2");
new SNoteSwindler("", v42, "div1");
