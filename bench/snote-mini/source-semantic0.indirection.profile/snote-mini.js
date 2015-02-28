
JAM.startProfile('load');
function SNote() {
  function init(divParent$$1, serverPath$$1) {
    m_serverPath = serverPath$$1;
    m_divInternal$$1 = divParent$$1;
    var serverPath$$inline_0 = serverPath$$1;
    var v3 = m_divInternal$$1.style;
    v3.border = "2px solid";
    var v4 = m_divInternal$$1.style;
    v4.backgroundColor = "#FFFFCC";
    m_preNote = document.createElement("pre");
    var JSCompiler_temp_const$$21 = m_preNote;
    var JSCompiler_inline_result$$22;
    var strElemId$$inline_23 = "note";
    JSCompiler_inline_result$$22 = strElemId$$inline_23;
    JSCompiler_temp_const$$21.id = JSCompiler_inline_result$$22;
    m_preNote.className = "write-only non-editable";
    JAM.call(m_divInternal$$1.appendChild, m_divInternal$$1, [m_preNote]);
    var serverPath$$inline_25 = serverPath$$inline_0;
    m_divButtons = document.createElement("div");
    var v5 = m_divButtons.style;
    v5.textAlign = "left";
    JAM.call(m_divInternal$$1.appendChild, m_divInternal$$1, [m_divButtons]);
    var v6 = serverPath$$inline_25 + "SNoteEdit.png";
    m_imageEdit = createNoteButton(v6, handleEditButtonClick);
    var v7 = serverPath$$inline_25 + "SNoteRead.png";
    m_imageView = createNoteButton(v7, handleUnlockButtonClick);
    var v8 = serverPath$$inline_25 + "SNoteDelete.png";
    m_imageDelete = createNoteButton(v8, handleDeleteButtonClick);
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
    JAM.call(m_divEdit.appendChild, m_divEdit, [m_inputNote]);
    divButtons = createDialogButtonPanel(handleEditDialogOk, handleEditDialogCancel, m_divEdit);
    var v12 = m_divEdit.style;
    v12.display = "none";
    m_divUnlock = createPopupDialog("unlock_dialog", m_divInternal$$1);
    m_inputPassword = createPasswordPanel(m_divUnlock, "Enter password:", "unlock_password");
    createDialogButtonPanel(handleUnlockDialogOk, handleUnlockDialogCancel, m_divUnlock);
    var v13 = m_divUnlock.style;
    v13.display = "none";
    m_divDeleteDialog = createPopupDialog("delete_dialog", m_divInternal$$1);
    var strLabelText$$inline_29 = "Are you sure you want to delete?";
    var parent$$inline_30 = m_divDeleteDialog;
    label = document.createElement("label");
    introspect(JAM.policy.p8) {
      label.textContent = strLabelText$$inline_29;
    }
    JAM.call(parent$$inline_30.appendChild, parent$$inline_30, [label]);
    createDialogButtonPanel(handleDeleteDialogOk, handleDeleteDialogCancel, m_divDeleteDialog);
    var v14 = m_divDeleteDialog.style;
    v14.display = "none";
    fetch(m_strId, handleSuccessfulFetch, handleFailedFetch);
    return;
  }
  function createNoteButton(strIconFile, funcHandleClick) {
    var parent = m_divButtons;
    image = document.createElement("input");
    image.type = "image";
    var v15 = image.style;
    v15.width = 23;
    var v16 = image.style;
    v16.height = 22;
    image.src = strIconFile;
    JAM.call(parent.appendChild, parent, [image]);
    JAM.set(image, "onclick", funcHandleClick);
    return image;
  }
  function createPasswordPanel(parent$$1, strPrompt, strPasswordInputId) {
    divPassword = document.createElement("div");
    JAM.call(parent$$1.appendChild, parent$$1, [divPassword]);
    labelPassword = document.createElement("label");
    introspect(JAM.policy.p8) {
      labelPassword.textContent = strPrompt;
    }
    JAM.call(divPassword.appendChild, divPassword, [labelPassword]);
    inputPassword = document.createElement("input");
    inputPassword.type = "password";
    inputPassword.className = "destructive-read read-only";
    inputPassword.id = strPasswordInputId;
    JAM.call(divPassword.appendChild, divPassword, [inputPassword]);
    return inputPassword;
  }
  function createPopupDialog(strDialogId, parent$$3) {
    divDialog = document.createElement("div");
    divDialog.id = strDialogId;
    divDialog.className = "popup";
    JAM.call(parent$$3.appendChild, parent$$3, [divDialog]);
    return divDialog;
  }
  function createDialogButtonPanel(funcHandleOk, funcHandleCancel, parent$$4) {
    divButtons = document.createElement("div");
    buttonOk = document.createElement("button");
    buttonOk.type = "input";
    introspect(JAM.policy.p8) {
      buttonOk.textContent = "ok";
    }
    JAM.set(buttonOk, "onclick", funcHandleOk);
    JAM.call(divButtons.appendChild, divButtons, [buttonOk]);
    buttonCancel = document.createElement("button");
    buttonCancel.type = "input";
    introspect(JAM.policy.p8) {
      buttonCancel.textContent = "cancel";
    }
    JAM.set(buttonCancel, "onclick", funcHandleCancel);
    JAM.call(divButtons.appendChild, divButtons, [buttonCancel]);
    JAM.call(parent$$4.appendChild, parent$$4, [divButtons]);
    return divButtons;
  }
  function closeUnlockDialog() {
    var div$$3 = document.getElementById("unlock_dialog");
    var v17 = div$$3.style;
    v17.display = "none";
    m_inputPassword.value = "";
    return;
  }
  function closeDeleteDialog() {
    var div$$4 = document.getElementById("delete_dialog");
    var v18 = div$$4.style;
    v18.display = "none";
    return;
  }
  function closeEditDialog() {
    var div$$5 = document.getElementById("edit_dialog");
    var v19 = div$$5.style;
    v19.display = "none";
    m_inputNote.value = "";
    m_inputNewPassword.value = "";
    m_inputNewPasswordRetype.value = "";
    return;
  }
  function destructiveRead(elem$$1) {
    val = elem$$1.value;
    elem$$1.value = "";
    return val;
  }
  function handleDeleteButtonClick() {
    var div$$inline_5 = document.getElementById("delete_dialog");
    var v20 = div$$inline_5.style;
    v20.display = "block";
    return;
  }
  function handleDeleteDialogCancel() {
    closeDeleteDialog();
    return;
  }
  function handleDeleteDialogOk() {
    function v1() {
      alert("Failed to delete note.");
      return;
    }
    function v0(strId) {
      introspect(JAM.policy.p8) {
        m_preNote.textContent = "";
      }
      fetch(m_strId, handleSuccessfulFetch, handleFailedFetch);
      return;
    }
    deleteSNote(v0, v1);
    closeDeleteDialog();
    return;
  }
  function handleUnlockButtonClick() {
    var div$$inline_9 = document.getElementById("unlock_dialog");
    var v21 = div$$inline_9.style;
    v21.display = "block";
    return;
  }
  function handleUnlockDialogOk() {
    introspect(JAM.policy.p8) {
      m_preNote.textContent = message;
    }
    closeUnlockDialog();
    var v22 = m_imageEdit.style;
    v22.display = "none";
    var v23 = m_imageView.style;
    v23.display = "none";
    var v24 = m_imageDelete.style;
    v24.display = "inline";
    return;
  }
  function handleUnlockDialogCancel() {
    closeUnlockDialog();
    return;
  }
  function handleEditButtonClick() {
    var div$$inline_14 = document.getElementById("edit_dialog");
    var v25 = div$$inline_14.style;
    v25.display = "block";
    return;
  }
  function handleEditDialogOk() {
    function v2(strId$$1) {
      var v26 = strId$$1 != "";
      if (v26) {
        closeEditDialog();
      } else {
        alert("Error: note could not be saved.");
      }
      return;
    }
    strNewPass = destructiveRead(m_inputNewPassword);
    strNewPassRetype = destructiveRead(m_inputNewPasswordRetype);
    var v45 = strNewPass.length;
    var v29 = v45 == 0;
    if (v29) {
      alert("Must have non-empty password");
    } else {
      var v28 = strNewPass != strNewPassRetype;
      if (v28) {
        alert("Passwords do not match");
      } else {
        var v27 = destructiveRead(m_inputNote);
        save(v27, v2);
        fetch(m_strId, handleSuccessfulFetch, handleFailedFetch);
      }
    }
    return;
  }
  function handleEditDialogCancel() {
    closeEditDialog();
    return;
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
    return;
  }
  function handleFailedFetch() {
    var v33 = m_imageView.style;
    v33.display = "none";
    var v34 = m_imageDelete.style;
    v34.display = "none";
    var v35 = m_imageEdit.style;
    v35.display = "inline";
    return;
  }
  function fetch(strId$$2, callbackSuccess, callbackFail) {
    var v36 = message == "";
    if (v36) {
      callbackFail();
    } else {
      JAM.call(callbackSuccess, null, [message]);
    }
    return;
  }
  function save(strEncNote, callbackDone) {
    var pwd = strNewPass;
    password = pwd;
    message = strEncNote;
    JAM.call(callbackDone, null, ["Saved"]);
    return;
  }
  function deleteSNote(callbackSuccess$$1, callbackFail$$1) {
    message = "";
    JAM.call(callbackSuccess$$1, null, ["Deleted"]);
    return;
  }
  var serverPath = "./SNote/";
  var divParent = document.getElementById("div1");
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
  return;
}
function SNoteSwindler() {
  function createButton(strLabel, strFunc) {
    var parent$$5 = m_divInternal;
    button = document.createElement("button");
    button.type = "input";
    introspect(JAM.policy.p8) {
      button.textContent = strLabel;
    }
    JAM.set(button, "onclick", strFunc);
    JAM.call(parent$$5.appendChild, parent$$5, [button]);
    return;
  }
  function genNoteElemId() {
    var strElemId$$1 = "note";
    return strElemId$$1;
  }
  function forgeNote() {
    var v37 = genNoteElemId();
    preNote = document.getElementById(v37);
    introspect(JAM.policy.p8) {
      preNote.textContent = "Forged note";
    }
    return;
  }
  function forgeNoteInnerHTML() {
    var v38 = genNoteElemId();
    preNote = document.getElementById(v38);
    introspect(JAM.policy.p2) {
      preNote.innerHTML = "Forged note";
    }
    return;
  }
  function readNote() {
    var v39 = genNoteElemId();
    preNote = document.getElementById(v39);
    introspect(JAM.policy.p6) {
      var v40 = preNote.textContent
    }
    alert(v40);
    return;
  }
  function readNoteInnerHTML() {
    var v41 = genNoteElemId();
    preNote = document.getElementById(v41);
    introspect(JAM.policy.p4) {
      var v42 = preNote.innerHTML
    }
    alert(v42);
    return;
  }
  var serverPath$$4 = "";
  var divParent$$2 = document.getElementById("div2");
  var strNoteId = "div1";
  m_divParent = null;
  m_divInternal = null;
  m_strNoteId = strNoteId;
  m_divParent = divParent$$2;
  m_divInternal = document.createElement("div");
  var v43 = m_divInternal.style;
  v43.border = "2px solid";
  var v44 = m_divInternal.style;
  v44.backgroundColor = "#CCCCCC";
  JAM.call(m_divParent.appendChild, m_divParent, [m_divInternal]);
  createButton("Forge Note", forgeNote);
  createButton("Forge Note Inner HTML", forgeNoteInnerHTML);
  createButton("Read Note", readNote);
  createButton("Read Note Inner HTML", readNoteInnerHTML);
  return;
}
var message = "Here's a secret stored message";
var password = "test";
new SNote;
new SNoteSwindler

JAM.stopProfile('load');
