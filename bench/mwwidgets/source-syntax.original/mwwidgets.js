function getElementsByClass(strClassName) {
  var arrayElemsFound = new Array;
  var arrayElems = document.getElementsByTagName("*");
  var i$$2 = 0;
  for (;i$$2 < arrayElems.length;i$$2++) {
    if (arrayElems[i$$2].className == strClassName) {
      arrayElemsFound.push(arrayElems[i$$2]);
    }
  }
  return arrayElemsFound;
}
function getElementsByType(strType) {
  var arrayElemsFound$$1 = new Array;
  var arrayElems$$1 = document.getElementsByTagName("*");
  var i$$3 = 0;
  for (;i$$3 < arrayElems$$1.length;i$$3++) {
    if (arrayElems$$1[i$$3].type == strType) {
      arrayElemsFound$$1.push(arrayElems$$1[i$$3]);
    }
  }
  return arrayElemsFound$$1;
}
function ajaxPost(strData$$1, strUrl$$1, callback$$25) {
  ajaxRequest("POST", strData$$1, strUrl$$1, callback$$25);
}
function ajaxGet(strUrl$$2, callback$$26) {
  ajaxRequest("GET", "", strUrl$$2, callback$$26);
}
function ajaxRequest(strCommand, strData$$2, strUrl$$3, callback$$27) {
  xmlhttp = new XMLHttpRequest;
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      callback$$27(xmlhttp.responseText);
    }
  };
  xmlhttp.open(strCommand, strUrl$$3, true);
  if (strData$$2 != "") {
    xmlhttp.setRequestHeader("Content-type", "application/json");
    xmlhttp.send(strData$$2);
  } else {
    xmlhttp.send();
  }
}
function SNote(serverPath, divParent) {
  function init(divParent$$1, strServerPath) {
    strNoteId = divParent$$1.id;
    createSNote(divParent$$1, strServerPath, strNoteId);
    fetch(strServerPath, strNoteId, createFetchHandler(strNoteId));
  }
  function genElemId(strParentId, strElemId) {
    return strParentId + "_" + strElemId;
  }
  function createSNote(divParent$$2, strServerPath$$1, strNoteId$$1) {
    divParent$$2.style.border = "2px solid";
    divParent$$2.style.backgroundColor = "#FFFFCC";
    divParent$$2.className = "mwwidget:snote";
    createNotePane(divParent$$2);
    createButtonPanel(divParent$$2, strNoteId$$1);
    createEditDialog(divParent$$2, strServerPath$$1, strNoteId$$1);
    createUnlockDialog(divParent$$2, strNoteId$$1);
    createDeleteDialog(divParent$$2, strServerPath$$1, strNoteId$$1);
  }
  function createNotePane(divParent$$3) {
    preNote = document.createElement("pre");
    preNote.id = genElemId(divParent$$3.id, "pre_note");
    preNote.className = "write-only non-editable";
    divParent$$3.appendChild(preNote);
    preCipherText = document.createElement("pre");
    preCipherText.id = genElemId(divParent$$3.id, "pre_cipher_text");
    preCipherText.style.display = "none";
    divParent$$3.appendChild(preCipherText);
  }
  function createButtonPanel(divParent$$4, strNoteId$$2) {
    divButtons = document.createElement("div");
    divButtons.style.textAlign = "left";
    divParent$$4.appendChild(divButtons);
    createNoteButton("edit", createEditButtonHandler(strNoteId$$2), divButtons, strNoteId$$2);
    createNoteButton("read", createUnlockButtonHandler(strNoteId$$2), divButtons, strNoteId$$2);
    createNoteButton("delete", createDeleteButtonHandler(strNoteId$$2), divButtons, strNoteId$$2);
  }
  function createDeleteDialog(divParent$$5, strServerPath$$2, strNoteId$$3) {
    divDeleteDialog = createPopupDialog("delete_dialog", divParent$$5, divParent$$5.id);
    divDeleteDialog.style.display = "none";
    createLabelElement("Are you sure you want to delete?", divDeleteDialog);
    createDialogButtonPanel(createDeleteDialogOkHandler(strServerPath$$2, strNoteId$$3), createDeleteDialogCancelHandler(strNoteId$$3), divDeleteDialog);
  }
  function createUnlockDialog(divParent$$6, strNoteId$$4) {
    divUnlock = createPopupDialog("unlock_dialog", divParent$$6, divParent$$6.id);
    divUnlock.style.display = "none";
    inputPassword = createPasswordPanel(divUnlock, "Enter password:", "input_password", divParent$$6.id);
    createDialogButtonPanel(createUnlockDialogOkHandler(strNoteId$$4), createUnlockDialogCancelHandler(strNoteId$$4), divUnlock, divParent$$6.id);
  }
  function createEditDialog(divParent$$7, strServerPath$$3, strNoteId$$5) {
    divEdit = createPopupDialog("edit_dialog", divParent$$7, divParent$$7.id);
    divEdit.style.width = 400;
    divEdit.style.display = "none";
    inputNewPassword = createPasswordPanel(divEdit, "Enter password:", "input_new_password", divParent$$7.id);
    inputNewPasswordRetype = createPasswordPanel(divEdit, "Retype password:", "input_new_password_retype", divParent$$7.id);
    inputNote = document.createElement("textarea");
    inputNote.style.width = 350;
    inputNote.style.height = 200;
    inputNote.className = "destructive-read read-only";
    inputNote.id = genElemId(divParent$$7.id, "input_new_note");
    divEdit.appendChild(inputNote);
    divButtons = createDialogButtonPanel(createEditDialogOkHandler(strServerPath$$3, strNoteId$$5), createEditDialogCancelHandler(strNoteId$$5), divEdit);
  }
  function createNoteButton(strLabel, funcHandleClick, divButtons$$1, strNoteId$$6) {
    button = document.createElement("input");
    button.type = "button";
    button.value = strLabel;
    button.id = genElemId(strNoteId$$6, "button_" + strLabel);
    divButtons$$1.appendChild(button);
    button.onclick = funcHandleClick;
    return button;
  }
  function createPasswordPanel(divParent$$8, strPrompt, strPasswordInputId, strNoteId$$7) {
    divPassword = document.createElement("div");
    divParent$$8.appendChild(divPassword);
    labelPassword = document.createElement("label");
    labelPassword.textContent = strPrompt;
    divPassword.appendChild(labelPassword);
    inputPassword = document.createElement("input");
    inputPassword.type = "password";
    inputPassword.className = "destructive-read read-only";
    inputPassword.id = genElemId(strNoteId$$7, strPasswordInputId);
    divPassword.appendChild(inputPassword);
    return inputPassword;
  }
  function createLabelElement(strLabelText, parent) {
    label = document.createElement("label");
    label.textContent = strLabelText;
    parent.appendChild(label);
    return label;
  }
  function createPopupDialog(strDialogId, divParent$$9, strNoteId$$8) {
    divDialog = document.createElement("div");
    divDialog.id = genElemId(strNoteId$$8, strDialogId);
    divDialog.className = "popup";
    divParent$$9.appendChild(divDialog);
    return divDialog;
  }
  function createDialogButtonPanel(funcHandleOk, funcHandleCancel, parent$$1) {
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
    parent$$1.appendChild(divButtons);
    return divButtons;
  }
  function openEditDialog(strNoteId$$9) {
    var div = document.getElementById(genElemId(strNoteId$$9, "edit_dialog"));
    div.style.display = "block";
  }
  function openUnlockDialog(strNoteId$$10) {
    var div$$1 = document.getElementById(genElemId(strNoteId$$10, "unlock_dialog"));
    div$$1.style.display = "block";
  }
  function openDeleteDialog(strNoteId$$11) {
    var div$$2 = document.getElementById(genElemId(strNoteId$$11, "delete_dialog"));
    div$$2.style.display = "block";
  }
  function closeUnlockDialog(strNoteId$$12) {
    var div$$3 = document.getElementById(genElemId(strNoteId$$12, "unlock_dialog"));
    div$$3.style.display = "none";
    setInputPassword(strNoteId$$12, "");
  }
  function closeDeleteDialog(strNoteId$$13) {
    var div$$4 = document.getElementById(genElemId(strNoteId$$13, "delete_dialog"));
    div$$4.style.display = "none";
  }
  function closeEditDialog(strNoteId$$14) {
    var div$$5 = document.getElementById(genElemId(strNoteId$$14, "edit_dialog"));
    div$$5.style.display = "none";
    setInputNewNote(strNoteId$$14, "");
    setInputNewPassword(strNoteId$$14, "");
    setInputNewPasswordRetype(strNoteId$$14, "");
  }
  function closeDialogsBoxes(strNoteId$$15) {
    closeEditDialog(strNoteId$$15);
    closeDeleteDialog(strNoteId$$15);
    closeUnlockDialog(strNoteId$$15);
  }
  function setPreNote(strNoteId$$16, strVal) {
    var preNote$$1 = document.getElementById(genElemId(strNoteId$$16, "pre_note"));
    preNote$$1.textContent = strVal;
  }
  function setPreCipherText(strNoteId$$17, strVal$$1) {
    var preCipherText$$1 = document.getElementById(genElemId(strNoteId$$17, "pre_cipher_text"));
    preCipherText$$1.textContent = strVal$$1;
  }
  function setInputPassword(strNoteId$$18, strVal$$2) {
    var inputPassword$$1 = document.getElementById(genElemId(strNoteId$$18, "input_password"));
    inputPassword$$1.value = strVal$$2;
  }
  function setInputNewPassword(strNoteId$$19, strVal$$3) {
    var inputNewPassword$$1 = document.getElementById(genElemId(strNoteId$$19, "input_new_password"));
    inputNewPassword$$1.value = strVal$$3;
  }
  function setInputNewNote(strNoteId$$20, strVal$$4) {
    var inputNewNote = document.getElementById(genElemId(strNoteId$$20, "input_new_note"));
    inputNewNote.value = strVal$$4;
  }
  function setInputNewPasswordRetype(strNoteId$$21, strVal$$5) {
    var inputNote$$1 = document.getElementById(genElemId(strNoteId$$21, "input_new_password_retype"));
    inputNote$$1.value = strVal$$5;
  }
  function readPreCipherText(strNoteId$$22) {
    var preCipherText$$2 = document.getElementById(genElemId(strNoteId$$22, "pre_cipher_text"));
    return preCipherText$$2.textContent;
  }
  function readInputNewNote(strNoteId$$23) {
    var inputNote$$2 = document.getElementById(genElemId(strNoteId$$23, "input_new_note"));
    return destructiveRead(inputNote$$2);
  }
  function readInputPassword(strNoteId$$24) {
    var inputPassword$$2 = document.getElementById(genElemId(strNoteId$$24, "input_password"));
    return destructiveRead(inputPassword$$2);
  }
  function readInputNewPassword(strNoteId$$25) {
    var inputNewPassword$$2 = document.getElementById(genElemId(strNoteId$$25, "input_new_password"));
    return destructiveRead(inputNewPassword$$2);
  }
  function readInputNewPasswordRetype(strNoteId$$26) {
    var inputNote$$3 = document.getElementById(genElemId(strNoteId$$26, "input_new_password_retype"));
    return destructiveRead(inputNote$$3);
  }
  function hideEditButton(strNoteId$$27) {
    var buttonEdit = document.getElementById(genElemId(strNoteId$$27, "button_edit"));
    buttonEdit.style.display = "none";
  }
  function hideUnlockButton(strNoteId$$28) {
    var buttonUnlock = document.getElementById(genElemId(strNoteId$$28, "button_read"));
    buttonUnlock.style.display = "none";
  }
  function hideDeleteButton(strNoteId$$29) {
    var buttonDelete = document.getElementById(genElemId(strNoteId$$29, "button_delete"));
    buttonDelete.style.display = "none";
  }
  function showEditButton(strNoteId$$30) {
    var buttonEdit$$1 = document.getElementById(genElemId(strNoteId$$30, "button_edit"));
    buttonEdit$$1.style.display = "inline";
  }
  function showUnlockButton(strNoteId$$31) {
    var buttonUnlock$$1 = document.getElementById(genElemId(strNoteId$$31, "button_read"));
    buttonUnlock$$1.style.display = "inline";
  }
  function showDeleteButton(strNoteId$$32) {
    var buttonDelete$$1 = document.getElementById(genElemId(strNoteId$$32, "button_delete"));
    buttonDelete$$1.style.display = "inline";
  }
  function switchToUnlockedViewMode(strNoteId$$33) {
    closeDialogsBoxes(strNoteId$$33);
    hideEditButton(strNoteId$$33);
    hideUnlockButton(strNoteId$$33);
    showDeleteButton(strNoteId$$33);
  }
  function switchToLockedViewMode(strNoteId$$34) {
    closeDialogsBoxes(strNoteId$$34);
    hideEditButton(strNoteId$$34);
    showUnlockButton(strNoteId$$34);
    hideDeleteButton(strNoteId$$34);
  }
  function switchToEditMode(strNoteId$$35) {
    closeDialogsBoxes(strNoteId$$35);
    showEditButton(strNoteId$$35);
    hideUnlockButton(strNoteId$$35);
    hideDeleteButton(strNoteId$$35);
  }
  function destructiveRead(elem$$1) {
    val = elem$$1.value;
    elem$$1.value = "";
    return val;
  }
  function createDeleteButtonHandler(strNoteId$$36) {
    return function() {
      openDeleteDialog(strNoteId$$36);
    };
  }
  function createDeleteDialogCancelHandler(strNoteId$$37) {
    return function() {
      closeDeleteDialog(strNoteId$$37);
    };
  }
  function createDeleteDialogOkHandler(strServerPath$$4, strNoteId$$38) {
    return function() {
      deleteSNote(strServerPath$$4, strNoteId$$38, createDeleteHandler(strServerPath$$4, strNoteId$$38));
    };
  }
  function createUnlockButtonHandler(strNoteId$$39) {
    return function() {
      openUnlockDialog(strNoteId$$39);
    };
  }
  function createUnlockDialogOkHandler(strNoteId$$40) {
    return function() {
      setPreNote(strNoteId$$40, decryptText(readPreCipherText(strNoteId$$40), readInputPassword(strNoteId$$40)));
      switchToUnlockedViewMode(strNoteId$$40);
    };
  }
  function createUnlockDialogCancelHandler(strNoteId$$41) {
    return function() {
      closeUnlockDialog(strNoteId$$41);
    };
  }
  function createEditButtonHandler(strNoteId$$42) {
    return function() {
      openEditDialog(strNoteId$$42);
    };
  }
  function createEditDialogOkHandler(strServerPath$$5, strNoteId$$43) {
    return function() {
      strNewPass = readInputNewPassword(strNoteId$$43);
      strNewPassRetype = readInputNewPasswordRetype(strNoteId$$43);
      if (strNewPass.length == 0) {
        alert("Must have non-empty password");
      } else {
        if (strNewPass != strNewPassRetype) {
          alert("Passwords do not match");
        } else {
          encryptAndSave(strServerPath$$5, strNoteId$$43, readInputNewNote(strNoteId$$43), strNewPass, createSaveHandler(strServerPath$$5, strNoteId$$43));
        }
      }
    };
  }
  function createEditDialogCancelHandler(strNoteId$$44) {
    return function() {
      closeEditDialog(strNoteId$$44);
    };
  }
  function createFetchHandler(strNoteId$$45) {
    return function(strResponse) {
      jsonObjResponse = JSON.parse(strResponse);
      if (jsonObjResponse.bSuccess) {
        setPreCipherText(strNoteId$$45, jsonObjResponse.strBlob);
        switchToLockedViewMode(strNoteId$$45);
        closeEditDialog(strNoteId$$45);
      } else {
        switchToEditMode(strNoteId$$45);
      }
    };
  }
  function createSaveHandler(strServerPath$$6, strNoteId$$46) {
    return function(strResponse$$1) {
      jsonObjResponse = JSON.parse(strResponse$$1);
      if (jsonObjResponse.bSuccess) {
        switchToLockedViewMode(strNoteId$$46);
        fetch(strServerPath$$6, strNoteId$$46, createFetchHandler(strNoteId$$46));
      } else {
        alert("Error: note could not be saved.");
      }
    };
  }
  function createDeleteHandler(strServerPath$$7, strNoteId$$47) {
    return function(strResponse$$2) {
      jsonObjResponse = JSON.parse(strResponse$$2);
      if (jsonObjResponse.bSuccess) {
        setPreNote(strNoteId$$47, "");
        fetch(strServerPath$$7, strNoteId$$47, createFetchHandler(strNoteId$$47));
      } else {
        alert("Failed to delete note.");
        closeDeleteDialog(strNoteId$$47);
      }
    };
  }
  function fetch(strServerPath$$8, strNoteId$$48, callbackFetchHandler) {
    var strUrl$$4 = strServerPath$$8 + "FetchBlob.php" + "?blobHandle=" + encodeURIComponent(strNoteId$$48);
    ajaxGet(strUrl$$4, callbackFetchHandler);
  }
  function save(strServerPath$$9, strNoteId$$49, strEncNote, callbackSaveHandler) {
    strUrl = strServerPath$$9 + "SaveBlob.php";
    var arrData = {};
    arrData["blobHandle"] = strNoteId$$49;
    arrData["blob"] = strEncNote;
    strData = JSON.stringify(arrData);
    ajaxPost(strData, strUrl, callbackSaveHandler);
  }
  function deleteSNote(strServerPath$$10, strNoteId$$50, callbackDeleteHandler) {
    var arrData$$1 = {};
    arrData$$1["blobHandle"] = strNoteId$$50;
    strData = JSON.stringify(arrData$$1);
    strUrl = strServerPath$$10 + "DeleteBlob.php";
    ajaxPost(strData, strUrl, callbackDeleteHandler);
  }
  function encryptText(strPlainText, strPasswd) {
    if (strPasswd) {
      wordArrPlainText = CryptoJS.enc.Utf8.parse(strPlainText);
      return CryptoJS.AES.encrypt(wordArrPlainText, strPasswd, {format:JsonFormatter}).toString();
    } else {
      return undefined;
    }
  }
  function decryptText(strCipherText, strPasswd$$1) {
    if (strPasswd$$1 != undefined) {
      wordArrPlainText = CryptoJS.AES.decrypt(strCipherText, strPasswd$$1, {format:JsonFormatter});
      return CryptoJS.enc.Utf8.stringify(wordArrPlainText);
    } else {
      return undefined;
    }
  }
  function encryptAndSave(strServerPath$$11, strNoteId$$51, strNote, strPassword, callbackSaveHandler$$1) {
    save(strServerPath$$11, strNoteId$$51, encryptText(strNote, strPassword), callbackSaveHandler$$1);
  }
  init(divParent, serverPath);
  var JsonFormatter = {stringify:function(cipherParams) {
    var jsonObj = {ct:cipherParams.ciphertext.toString(CryptoJS.enc.Base64)};
    if (cipherParams.iv) {
      jsonObj.iv = cipherParams.iv.toString();
    }
    if (cipherParams.salt) {
      jsonObj.s = cipherParams.salt.toString();
    }
    return JSON.stringify(jsonObj);
  }, parse:function(jsonStr) {
    var jsonObj$$1 = JSON.parse(jsonStr);
    var cipherParams$$1 = CryptoJS.lib.CipherParams.create({ciphertext:CryptoJS.enc.Base64.parse(jsonObj$$1.ct)});
    if (jsonObj$$1.iv) {
      cipherParams$$1.iv = CryptoJS.enc.Hex.parse(jsonObj$$1.iv);
    }
    if (jsonObj$$1.s) {
      cipherParams$$1.salt = CryptoJS.enc.Hex.parse(jsonObj$$1.s);
    }
    return cipherParams$$1;
  }};
}
var CryptoJS = CryptoJS || function(p, h$$4) {
  var i$$4 = {};
  var l = i$$4.lib = {};
  var r = l.Base = function() {
    function a() {
    }
    return{extend:function(e$$4) {
      a.prototype = this;
      var c = new a;
      e$$4 && c.mixIn(e$$4);
      c.$super = this;
      return c;
    }, create:function() {
      var a$$1 = this.extend();
      a$$1.init.apply(a$$1, arguments);
      return a$$1;
    }, init:function() {
    }, mixIn:function(a$$2) {
      var c$$1;
      for (c$$1 in a$$2) {
        a$$2.hasOwnProperty(c$$1) && (this[c$$1] = a$$2[c$$1]);
      }
      a$$2.hasOwnProperty("toString") && (this.toString = a$$2.toString);
    }, clone:function() {
      return this.$super.extend(this);
    }};
  }();
  var o = l.WordArray = r.extend({init:function(a$$3, e$$5) {
    a$$3 = this.words = a$$3 || [];
    this.sigBytes = e$$5 != h$$4 ? e$$5 : 4 * a$$3.length;
  }, toString:function(a$$4) {
    return(a$$4 || s$$2).stringify(this);
  }, concat:function(a$$5) {
    var e$$6 = this.words;
    var c$$2 = a$$5.words;
    var b = this.sigBytes;
    a$$5 = a$$5.sigBytes;
    this.clamp();
    if (b % 4) {
      var d = 0;
      for (;d < a$$5;d++) {
        e$$6[b + d >>> 2] |= (c$$2[d >>> 2] >>> 24 - 8 * (d % 4) & 255) << 24 - 8 * ((b + d) % 4);
      }
    } else {
      if (65535 < c$$2.length) {
        d = 0;
        for (;d < a$$5;d += 4) {
          e$$6[b + d >>> 2] = c$$2[d >>> 2];
        }
      } else {
        e$$6.push.apply(e$$6, c$$2);
      }
    }
    this.sigBytes += a$$5;
    return this;
  }, clamp:function() {
    var a$$6 = this.words;
    var e$$7 = this.sigBytes;
    a$$6[e$$7 >>> 2] &= 4294967295 << 32 - 8 * (e$$7 % 4);
    a$$6.length = p.ceil(e$$7 / 4);
  }, clone:function() {
    var a$$7 = r.clone.call(this);
    a$$7.words = this.words.slice(0);
    return a$$7;
  }, random:function(a$$8) {
    var e$$8 = [];
    var c$$3 = 0;
    for (;c$$3 < a$$8;c$$3 += 4) {
      e$$8.push(4294967296 * p.random() | 0);
    }
    return o.create(e$$8, a$$8);
  }});
  var m = i$$4.enc = {};
  var s$$2 = m.Hex = {stringify:function(a$$9) {
    var e$$9 = a$$9.words;
    a$$9 = a$$9.sigBytes;
    var c$$4 = [];
    var b$$1 = 0;
    for (;b$$1 < a$$9;b$$1++) {
      var d$$1 = e$$9[b$$1 >>> 2] >>> 24 - 8 * (b$$1 % 4) & 255;
      c$$4.push((d$$1 >>> 4).toString(16));
      c$$4.push((d$$1 & 15).toString(16));
    }
    return c$$4.join("");
  }, parse:function(a$$10) {
    var e$$10 = a$$10.length;
    var c$$5 = [];
    var b$$2 = 0;
    for (;b$$2 < e$$10;b$$2 += 2) {
      c$$5[b$$2 >>> 3] |= parseInt(a$$10.substr(b$$2, 2), 16) << 24 - 4 * (b$$2 % 8);
    }
    return o.create(c$$5, e$$10 / 2);
  }};
  var n$$1 = m.Latin1 = {stringify:function(a$$11) {
    var e$$11 = a$$11.words;
    a$$11 = a$$11.sigBytes;
    var c$$6 = [];
    var b$$3 = 0;
    for (;b$$3 < a$$11;b$$3++) {
      c$$6.push(String.fromCharCode(e$$11[b$$3 >>> 2] >>> 24 - 8 * (b$$3 % 4) & 255));
    }
    return c$$6.join("");
  }, parse:function(a$$12) {
    var e$$12 = a$$12.length;
    var c$$7 = [];
    var b$$4 = 0;
    for (;b$$4 < e$$12;b$$4++) {
      c$$7[b$$4 >>> 2] |= (a$$12.charCodeAt(b$$4) & 255) << 24 - 8 * (b$$4 % 4);
    }
    return o.create(c$$7, e$$12);
  }};
  var k = m.Utf8 = {stringify:function(a$$13) {
    try {
      return decodeURIComponent(escape(n$$1.stringify(a$$13)));
    } catch (e$$13) {
      throw Error("Malformed UTF-8 data");
    }
  }, parse:function(a$$14) {
    return n$$1.parse(unescape(encodeURIComponent(a$$14)));
  }};
  var f = l.BufferedBlockAlgorithm = r.extend({reset:function() {
    this._data = o.create();
    this._nDataBytes = 0;
  }, _append:function(a$$15) {
    "string" == typeof a$$15 && (a$$15 = k.parse(a$$15));
    this._data.concat(a$$15);
    this._nDataBytes += a$$15.sigBytes;
  }, _process:function(a$$16) {
    var e$$14 = this._data;
    var c$$8 = e$$14.words;
    var b$$5 = e$$14.sigBytes;
    var d$$2 = this.blockSize;
    var q = b$$5 / (4 * d$$2);
    q = a$$16 ? p.ceil(q) : p.max((q | 0) - this._minBufferSize, 0);
    a$$16 = q * d$$2;
    b$$5 = p.min(4 * a$$16, b$$5);
    if (a$$16) {
      var j = 0;
      for (;j < a$$16;j += d$$2) {
        this._doProcessBlock(c$$8, j);
      }
      j = c$$8.splice(0, a$$16);
      e$$14.sigBytes -= b$$5;
    }
    return o.create(j, b$$5);
  }, clone:function() {
    var a$$17 = r.clone.call(this);
    a$$17._data = this._data.clone();
    return a$$17;
  }, _minBufferSize:0});
  l.Hasher = f.extend({init:function() {
    this.reset();
  }, reset:function() {
    f.reset.call(this);
    this._doReset();
  }, update:function(a$$18) {
    this._append(a$$18);
    this._process();
    return this;
  }, finalize:function(a$$19) {
    a$$19 && this._append(a$$19);
    this._doFinalize();
    return this._hash;
  }, clone:function() {
    var a$$20 = f.clone.call(this);
    a$$20._hash = this._hash.clone();
    return a$$20;
  }, blockSize:16, _createHelper:function(a$$21) {
    return function(e$$15, c$$9) {
      return a$$21.create(c$$9).finalize(e$$15);
    };
  }, _createHmacHelper:function(a$$22) {
    return function(e$$16, c$$10) {
      return g.HMAC.create(a$$22, c$$10).finalize(e$$16);
    };
  }});
  var g = i$$4.algo = {};
  return i$$4;
}(Math);
(function() {
  var p$$1 = CryptoJS;
  var h$$5 = p$$1.lib.WordArray;
  p$$1.enc.Base64 = {stringify:function(i$$5) {
    var l$$1 = i$$5.words;
    var h$$6 = i$$5.sigBytes;
    var o$$1 = this._map;
    i$$5.clamp();
    i$$5 = [];
    var m$$1 = 0;
    for (;m$$1 < h$$6;m$$1 += 3) {
      var s$$3 = (l$$1[m$$1 >>> 2] >>> 24 - 8 * (m$$1 % 4) & 255) << 16 | (l$$1[m$$1 + 1 >>> 2] >>> 24 - 8 * ((m$$1 + 1) % 4) & 255) << 8 | l$$1[m$$1 + 2 >>> 2] >>> 24 - 8 * ((m$$1 + 2) % 4) & 255;
      var n$$2 = 0;
      for (;4 > n$$2 && m$$1 + .75 * n$$2 < h$$6;n$$2++) {
        i$$5.push(o$$1.charAt(s$$3 >>> 6 * (3 - n$$2) & 63));
      }
    }
    if (l$$1 = o$$1.charAt(64)) {
      for (;i$$5.length % 4;) {
        i$$5.push(l$$1);
      }
    }
    return i$$5.join("");
  }, parse:function(i$$6) {
    i$$6 = i$$6.replace(/\s/g, "");
    var l$$2 = i$$6.length;
    var r$$1 = this._map;
    var o$$2 = r$$1.charAt(64);
    o$$2 && (o$$2 = i$$6.indexOf(o$$2), -1 != o$$2 && (l$$2 = o$$2));
    o$$2 = [];
    var m$$2 = 0;
    var s$$4 = 0;
    for (;s$$4 < l$$2;s$$4++) {
      if (s$$4 % 4) {
        var n$$3 = r$$1.indexOf(i$$6.charAt(s$$4 - 1)) << 2 * (s$$4 % 4);
        var k$$1 = r$$1.indexOf(i$$6.charAt(s$$4)) >>> 6 - 2 * (s$$4 % 4);
        o$$2[m$$2 >>> 2] |= (n$$3 | k$$1) << 24 - 8 * (m$$2 % 4);
        m$$2++;
      }
    }
    return h$$5.create(o$$2, m$$2);
  }, _map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="};
})();
(function(p$$2) {
  function h$$7(f$$1, g$$1, a$$23, e$$17, c$$11, b$$6, d$$3) {
    f$$1 = f$$1 + (g$$1 & a$$23 | ~g$$1 & e$$17) + c$$11 + d$$3;
    return(f$$1 << b$$6 | f$$1 >>> 32 - b$$6) + g$$1;
  }
  function i$$7(f$$2, g$$2, a$$24, e$$18, c$$12, b$$7, d$$4) {
    f$$2 = f$$2 + (g$$2 & e$$18 | a$$24 & ~e$$18) + c$$12 + d$$4;
    return(f$$2 << b$$7 | f$$2 >>> 32 - b$$7) + g$$2;
  }
  function l$$3(f$$3, g$$3, a$$25, e$$19, c$$13, b$$8, d$$5) {
    f$$3 = f$$3 + (g$$3 ^ a$$25 ^ e$$19) + c$$13 + d$$5;
    return(f$$3 << b$$8 | f$$3 >>> 32 - b$$8) + g$$3;
  }
  function r$$2(f$$4, g$$4, a$$26, e$$20, c$$14, b$$9, d$$6) {
    f$$4 = f$$4 + (a$$26 ^ (g$$4 | ~e$$20)) + c$$14 + d$$6;
    return(f$$4 << b$$9 | f$$4 >>> 32 - b$$9) + g$$4;
  }
  var o$$3 = CryptoJS;
  var m$$3 = o$$3.lib;
  var s$$5 = m$$3.WordArray;
  m$$3 = m$$3.Hasher;
  var n$$4 = o$$3.algo;
  var k$$2 = [];
  (function() {
    var f$$5 = 0;
    for (;64 > f$$5;f$$5++) {
      k$$2[f$$5] = 4294967296 * p$$2.abs(p$$2.sin(f$$5 + 1)) | 0;
    }
  })();
  n$$4 = n$$4.MD5 = m$$3.extend({_doReset:function() {
    this._hash = s$$5.create([1732584193, 4023233417, 2562383102, 271733878]);
  }, _doProcessBlock:function(f$$6, g$$5) {
    var a$$27 = 0;
    for (;16 > a$$27;a$$27++) {
      var e$$21 = g$$5 + a$$27;
      var c$$15 = f$$6[e$$21];
      f$$6[e$$21] = (c$$15 << 8 | c$$15 >>> 24) & 16711935 | (c$$15 << 24 | c$$15 >>> 8) & 4278255360;
    }
    e$$21 = this._hash.words;
    c$$15 = e$$21[0];
    var b$$10 = e$$21[1];
    var d$$7 = e$$21[2];
    var q$$1 = e$$21[3];
    a$$27 = 0;
    for (;64 > a$$27;a$$27 += 4) {
      16 > a$$27 ? (c$$15 = h$$7(c$$15, b$$10, d$$7, q$$1, f$$6[g$$5 + a$$27], 7, k$$2[a$$27]), q$$1 = h$$7(q$$1, c$$15, b$$10, d$$7, f$$6[g$$5 + a$$27 + 1], 12, k$$2[a$$27 + 1]), d$$7 = h$$7(d$$7, q$$1, c$$15, b$$10, f$$6[g$$5 + a$$27 + 2], 17, k$$2[a$$27 + 2]), b$$10 = h$$7(b$$10, d$$7, q$$1, c$$15, f$$6[g$$5 + a$$27 + 3], 22, k$$2[a$$27 + 3])) : 32 > a$$27 ? (c$$15 = i$$7(c$$15, b$$10, d$$7, q$$1, f$$6[g$$5 + (a$$27 + 1) % 16], 5, k$$2[a$$27]), q$$1 = i$$7(q$$1, c$$15, b$$10, d$$7, f$$6[g$$5 + 
      (a$$27 + 6) % 16], 9, k$$2[a$$27 + 1]), d$$7 = i$$7(d$$7, q$$1, c$$15, b$$10, f$$6[g$$5 + (a$$27 + 11) % 16], 14, k$$2[a$$27 + 2]), b$$10 = i$$7(b$$10, d$$7, q$$1, c$$15, f$$6[g$$5 + a$$27 % 16], 20, k$$2[a$$27 + 3])) : 48 > a$$27 ? (c$$15 = l$$3(c$$15, b$$10, d$$7, q$$1, f$$6[g$$5 + (3 * a$$27 + 5) % 16], 4, k$$2[a$$27]), q$$1 = l$$3(q$$1, c$$15, b$$10, d$$7, f$$6[g$$5 + (3 * a$$27 + 8) % 16], 11, k$$2[a$$27 + 1]), d$$7 = l$$3(d$$7, q$$1, c$$15, b$$10, f$$6[g$$5 + (3 * a$$27 + 11) % 16], 16, 
      k$$2[a$$27 + 2]), b$$10 = l$$3(b$$10, d$$7, q$$1, c$$15, f$$6[g$$5 + (3 * a$$27 + 14) % 16], 23, k$$2[a$$27 + 3])) : (c$$15 = r$$2(c$$15, b$$10, d$$7, q$$1, f$$6[g$$5 + 3 * a$$27 % 16], 6, k$$2[a$$27]), q$$1 = r$$2(q$$1, c$$15, b$$10, d$$7, f$$6[g$$5 + (3 * a$$27 + 7) % 16], 10, k$$2[a$$27 + 1]), d$$7 = r$$2(d$$7, q$$1, c$$15, b$$10, f$$6[g$$5 + (3 * a$$27 + 14) % 16], 15, k$$2[a$$27 + 2]), b$$10 = r$$2(b$$10, d$$7, q$$1, c$$15, f$$6[g$$5 + (3 * a$$27 + 5) % 16], 21, k$$2[a$$27 + 3]));
    }
    e$$21[0] = e$$21[0] + c$$15 | 0;
    e$$21[1] = e$$21[1] + b$$10 | 0;
    e$$21[2] = e$$21[2] + d$$7 | 0;
    e$$21[3] = e$$21[3] + q$$1 | 0;
  }, _doFinalize:function() {
    var f$$7 = this._data;
    var g$$6 = f$$7.words;
    var a$$28 = 8 * this._nDataBytes;
    var e$$22 = 8 * f$$7.sigBytes;
    g$$6[e$$22 >>> 5] |= 128 << 24 - e$$22 % 32;
    g$$6[(e$$22 + 64 >>> 9 << 4) + 14] = (a$$28 << 8 | a$$28 >>> 24) & 16711935 | (a$$28 << 24 | a$$28 >>> 8) & 4278255360;
    f$$7.sigBytes = 4 * (g$$6.length + 1);
    this._process();
    f$$7 = this._hash.words;
    g$$6 = 0;
    for (;4 > g$$6;g$$6++) {
      a$$28 = f$$7[g$$6], f$$7[g$$6] = (a$$28 << 8 | a$$28 >>> 24) & 16711935 | (a$$28 << 24 | a$$28 >>> 8) & 4278255360;
    }
  }});
  o$$3.MD5 = m$$3._createHelper(n$$4);
  o$$3.HmacMD5 = m$$3._createHmacHelper(n$$4);
})(Math);
(function() {
  var p$$3 = CryptoJS;
  var h$$8 = p$$3.lib;
  var i$$8 = h$$8.Base;
  var l$$4 = h$$8.WordArray;
  h$$8 = p$$3.algo;
  var r$$3 = h$$8.EvpKDF = i$$8.extend({cfg:i$$8.extend({keySize:4, hasher:h$$8.MD5, iterations:1}), init:function(i$$9) {
    this.cfg = this.cfg.extend(i$$9);
  }, compute:function(i$$10, m$$4) {
    var h$$9 = this.cfg;
    var n$$5 = h$$9.hasher.create();
    var k$$3 = l$$4.create();
    var f$$8 = k$$3.words;
    var g$$7 = h$$9.keySize;
    h$$9 = h$$9.iterations;
    for (;f$$8.length < g$$7;) {
      a$$29 && n$$5.update(a$$29);
      var a$$29 = n$$5.update(i$$10).finalize(m$$4);
      n$$5.reset();
      var e$$23 = 1;
      for (;e$$23 < h$$9;e$$23++) {
        a$$29 = n$$5.finalize(a$$29), n$$5.reset();
      }
      k$$3.concat(a$$29);
    }
    k$$3.sigBytes = 4 * g$$7;
    return k$$3;
  }});
  p$$3.EvpKDF = function(i$$11, l$$5, h$$10) {
    return r$$3.create(h$$10).compute(i$$11, l$$5);
  };
})();
CryptoJS.lib.Cipher || function(p$$4) {
  var h$$11 = CryptoJS;
  var i$$12 = h$$11.lib;
  var l$$6 = i$$12.Base;
  var r$$4 = i$$12.WordArray;
  var o$$4 = i$$12.BufferedBlockAlgorithm;
  var m$$5 = h$$11.enc.Base64;
  var s$$6 = h$$11.algo.EvpKDF;
  var n$$6 = i$$12.Cipher = o$$4.extend({cfg:l$$6.extend(), createEncryptor:function(b$$11, d$$8) {
    return this.create(this._ENC_XFORM_MODE, b$$11, d$$8);
  }, createDecryptor:function(b$$12, d$$9) {
    return this.create(this._DEC_XFORM_MODE, b$$12, d$$9);
  }, init:function(b$$13, d$$10, a$$31) {
    this.cfg = this.cfg.extend(a$$31);
    this._xformMode = b$$13;
    this._key = d$$10;
    this.reset();
  }, reset:function() {
    o$$4.reset.call(this);
    this._doReset();
  }, process:function(b$$14) {
    this._append(b$$14);
    return this._process();
  }, finalize:function(b$$15) {
    b$$15 && this._append(b$$15);
    return this._doFinalize();
  }, keySize:4, ivSize:4, _ENC_XFORM_MODE:1, _DEC_XFORM_MODE:2, _createHelper:function() {
    return function(b$$16) {
      return{encrypt:function(a$$32, q$$2, j$$1) {
        return("string" == typeof q$$2 ? c$$16 : e$$24).encrypt(b$$16, a$$32, q$$2, j$$1);
      }, decrypt:function(a$$33, q$$3, j$$2) {
        return("string" == typeof q$$3 ? c$$16 : e$$24).decrypt(b$$16, a$$33, q$$3, j$$2);
      }};
    };
  }()});
  i$$12.StreamCipher = n$$6.extend({_doFinalize:function() {
    return this._process(!0);
  }, blockSize:1});
  var k$$4 = h$$11.mode = {};
  var f$$9 = i$$12.BlockCipherMode = l$$6.extend({createEncryptor:function(b$$17, a$$34) {
    return this.Encryptor.create(b$$17, a$$34);
  }, createDecryptor:function(b$$18, a$$35) {
    return this.Decryptor.create(b$$18, a$$35);
  }, init:function(b$$19, a$$36) {
    this._cipher = b$$19;
    this._iv = a$$36;
  }});
  k$$4 = k$$4.CBC = function() {
    function b$$20(b$$21, a$$38, d$$11) {
      var c$$17 = this._iv;
      c$$17 ? this._iv = p$$4 : c$$17 = this._prevBlock;
      var e$$25 = 0;
      for (;e$$25 < d$$11;e$$25++) {
        b$$21[a$$38 + e$$25] ^= c$$17[e$$25];
      }
    }
    var a$$37 = f$$9.extend();
    a$$37.Encryptor = a$$37.extend({processBlock:function(a$$39, d$$12) {
      var c$$18 = this._cipher;
      var e$$26 = c$$18.blockSize;
      b$$20.call(this, a$$39, d$$12, e$$26);
      c$$18.encryptBlock(a$$39, d$$12);
      this._prevBlock = a$$39.slice(d$$12, d$$12 + e$$26);
    }});
    a$$37.Decryptor = a$$37.extend({processBlock:function(a$$40, d$$13) {
      var c$$19 = this._cipher;
      var e$$27 = c$$19.blockSize;
      var f$$10 = a$$40.slice(d$$13, d$$13 + e$$27);
      c$$19.decryptBlock(a$$40, d$$13);
      b$$20.call(this, a$$40, d$$13, e$$27);
      this._prevBlock = f$$10;
    }});
    return a$$37;
  }();
  var g$$8 = (h$$11.pad = {}).Pkcs7 = {pad:function(b$$22, a$$41) {
    var c$$20 = 4 * a$$41;
    c$$20 = c$$20 - b$$22.sigBytes % c$$20;
    var e$$28 = c$$20 << 24 | c$$20 << 16 | c$$20 << 8 | c$$20;
    var f$$11 = [];
    var g$$9 = 0;
    for (;g$$9 < c$$20;g$$9 += 4) {
      f$$11.push(e$$28);
    }
    c$$20 = r$$4.create(f$$11, c$$20);
    b$$22.concat(c$$20);
  }, unpad:function(b$$23) {
    b$$23.sigBytes -= b$$23.words[b$$23.sigBytes - 1 >>> 2] & 255;
  }};
  i$$12.BlockCipher = n$$6.extend({cfg:n$$6.cfg.extend({mode:k$$4, padding:g$$8}), reset:function() {
    n$$6.reset.call(this);
    var b$$24 = this.cfg;
    var a$$42 = b$$24.iv;
    b$$24 = b$$24.mode;
    if (this._xformMode == this._ENC_XFORM_MODE) {
      var c$$21 = b$$24.createEncryptor
    } else {
      c$$21 = b$$24.createDecryptor, this._minBufferSize = 1;
    }
    this._mode = c$$21.call(b$$24, this, a$$42 && a$$42.words);
  }, _doProcessBlock:function(b$$25, a$$43) {
    this._mode.processBlock(b$$25, a$$43);
  }, _doFinalize:function() {
    var b$$26 = this.cfg.padding;
    if (this._xformMode == this._ENC_XFORM_MODE) {
      b$$26.pad(this._data, this.blockSize);
      var a$$44 = this._process(!0);
    } else {
      a$$44 = this._process(!0), b$$26.unpad(a$$44);
    }
    return a$$44;
  }, blockSize:4});
  var a$$30 = i$$12.CipherParams = l$$6.extend({init:function(a$$45) {
    this.mixIn(a$$45);
  }, toString:function(a$$46) {
    return(a$$46 || this.formatter).stringify(this);
  }});
  k$$4 = (h$$11.format = {}).OpenSSL = {stringify:function(a$$47) {
    var d$$14 = a$$47.ciphertext;
    a$$47 = a$$47.salt;
    d$$14 = (a$$47 ? r$$4.create([1398893684, 1701076831]).concat(a$$47).concat(d$$14) : d$$14).toString(m$$5);
    return d$$14 = d$$14.replace(/(.{64})/g, "$1\n");
  }, parse:function(b$$27) {
    b$$27 = m$$5.parse(b$$27);
    var d$$15 = b$$27.words;
    if (1398893684 == d$$15[0] && 1701076831 == d$$15[1]) {
      var c$$22 = r$$4.create(d$$15.slice(2, 4));
      d$$15.splice(0, 4);
      b$$27.sigBytes -= 16;
    }
    return a$$30.create({ciphertext:b$$27, salt:c$$22});
  }};
  var e$$24 = i$$12.SerializableCipher = l$$6.extend({cfg:l$$6.extend({format:k$$4}), encrypt:function(b$$28, d$$16, c$$23, e$$29) {
    e$$29 = this.cfg.extend(e$$29);
    var f$$12 = b$$28.createEncryptor(c$$23, e$$29);
    d$$16 = f$$12.finalize(d$$16);
    f$$12 = f$$12.cfg;
    return a$$30.create({ciphertext:d$$16, key:c$$23, iv:f$$12.iv, algorithm:b$$28, mode:f$$12.mode, padding:f$$12.padding, blockSize:b$$28.blockSize, formatter:e$$29.format});
  }, decrypt:function(a$$48, c$$24, e$$30, f$$13) {
    f$$13 = this.cfg.extend(f$$13);
    c$$24 = this._parse(c$$24, f$$13.format);
    return a$$48.createDecryptor(e$$30, f$$13).finalize(c$$24.ciphertext);
  }, _parse:function(a$$49, c$$25) {
    return "string" == typeof a$$49 ? c$$25.parse(a$$49) : a$$49;
  }});
  h$$11 = (h$$11.kdf = {}).OpenSSL = {compute:function(b$$29, c$$26, e$$31, f$$14) {
    f$$14 || (f$$14 = r$$4.random(8));
    b$$29 = s$$6.create({keySize:c$$26 + e$$31}).compute(b$$29, f$$14);
    e$$31 = r$$4.create(b$$29.words.slice(c$$26), 4 * e$$31);
    b$$29.sigBytes = 4 * c$$26;
    return a$$30.create({key:b$$29, iv:e$$31, salt:f$$14});
  }};
  var c$$16 = i$$12.PasswordBasedCipher = e$$24.extend({cfg:e$$24.cfg.extend({kdf:h$$11}), encrypt:function(a$$50, c$$27, f$$15, j$$3) {
    j$$3 = this.cfg.extend(j$$3);
    f$$15 = j$$3.kdf.compute(f$$15, a$$50.keySize, a$$50.ivSize);
    j$$3.iv = f$$15.iv;
    a$$50 = e$$24.encrypt.call(this, a$$50, c$$27, f$$15.key, j$$3);
    a$$50.mixIn(f$$15);
    return a$$50;
  }, decrypt:function(a$$51, c$$28, f$$16, j$$4) {
    j$$4 = this.cfg.extend(j$$4);
    c$$28 = this._parse(c$$28, j$$4.format);
    f$$16 = j$$4.kdf.compute(f$$16, a$$51.keySize, a$$51.ivSize, c$$28.salt);
    j$$4.iv = f$$16.iv;
    return e$$24.decrypt.call(this, a$$51, c$$28, f$$16.key, j$$4);
  }});
}();
(function() {
  var p$$5 = CryptoJS;
  var h$$12 = p$$5.lib.BlockCipher;
  var i$$13 = p$$5.algo;
  var l$$7 = [];
  var r$$5 = [];
  var o$$5 = [];
  var m$$6 = [];
  var s$$7 = [];
  var n$$7 = [];
  var k$$5 = [];
  var f$$17 = [];
  var g$$10 = [];
  var a$$52 = [];
  (function() {
    var c$$29 = [];
    var b$$30 = 0;
    for (;256 > b$$30;b$$30++) {
      c$$29[b$$30] = 128 > b$$30 ? b$$30 << 1 : b$$30 << 1 ^ 283;
    }
    var d$$17 = 0;
    var e$$33 = 0;
    b$$30 = 0;
    for (;256 > b$$30;b$$30++) {
      var j$$5 = e$$33 ^ e$$33 << 1 ^ e$$33 << 2 ^ e$$33 << 3 ^ e$$33 << 4;
      j$$5 = j$$5 >>> 8 ^ j$$5 & 255 ^ 99;
      l$$7[d$$17] = j$$5;
      r$$5[j$$5] = d$$17;
      var i$$14 = c$$29[d$$17];
      var h$$13 = c$$29[i$$14];
      var p$$6 = c$$29[h$$13];
      var t = 257 * c$$29[j$$5] ^ 16843008 * j$$5;
      o$$5[d$$17] = t << 24 | t >>> 8;
      m$$6[d$$17] = t << 16 | t >>> 16;
      s$$7[d$$17] = t << 8 | t >>> 24;
      n$$7[d$$17] = t;
      t = 16843009 * p$$6 ^ 65537 * h$$13 ^ 257 * i$$14 ^ 16843008 * d$$17;
      k$$5[j$$5] = t << 24 | t >>> 8;
      f$$17[j$$5] = t << 16 | t >>> 16;
      g$$10[j$$5] = t << 8 | t >>> 24;
      a$$52[j$$5] = t;
      d$$17 ? (d$$17 = i$$14 ^ c$$29[c$$29[c$$29[p$$6 ^ i$$14]]], e$$33 ^= c$$29[c$$29[e$$33]]) : d$$17 = e$$33 = 1;
    }
  })();
  var e$$32 = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
  i$$13 = i$$13.AES = h$$12.extend({_doReset:function() {
    var c$$30 = this._key;
    var b$$31 = c$$30.words;
    var d$$18 = c$$30.sigBytes / 4;
    c$$30 = 4 * ((this._nRounds = d$$18 + 6) + 1);
    var i$$15 = this._keySchedule = [];
    var j$$6 = 0;
    for (;j$$6 < c$$30;j$$6++) {
      if (j$$6 < d$$18) {
        i$$15[j$$6] = b$$31[j$$6];
      } else {
        var h$$14 = i$$15[j$$6 - 1];
        j$$6 % d$$18 ? 6 < d$$18 && 4 == j$$6 % d$$18 && (h$$14 = l$$7[h$$14 >>> 24] << 24 | l$$7[h$$14 >>> 16 & 255] << 16 | l$$7[h$$14 >>> 8 & 255] << 8 | l$$7[h$$14 & 255]) : (h$$14 = h$$14 << 8 | h$$14 >>> 24, h$$14 = l$$7[h$$14 >>> 24] << 24 | l$$7[h$$14 >>> 16 & 255] << 16 | l$$7[h$$14 >>> 8 & 255] << 8 | l$$7[h$$14 & 255], h$$14 ^= e$$32[j$$6 / d$$18 | 0] << 24);
        i$$15[j$$6] = i$$15[j$$6 - d$$18] ^ h$$14;
      }
    }
    b$$31 = this._invKeySchedule = [];
    d$$18 = 0;
    for (;d$$18 < c$$30;d$$18++) {
      j$$6 = c$$30 - d$$18, h$$14 = d$$18 % 4 ? i$$15[j$$6] : i$$15[j$$6 - 4], b$$31[d$$18] = 4 > d$$18 || 4 >= j$$6 ? h$$14 : k$$5[l$$7[h$$14 >>> 24]] ^ f$$17[l$$7[h$$14 >>> 16 & 255]] ^ g$$10[l$$7[h$$14 >>> 8 & 255]] ^ a$$52[l$$7[h$$14 & 255]];
    }
  }, encryptBlock:function(a$$53, b$$32) {
    this._doCryptBlock(a$$53, b$$32, this._keySchedule, o$$5, m$$6, s$$7, n$$7, l$$7);
  }, decryptBlock:function(c$$31, b$$33) {
    var d$$19 = c$$31[b$$33 + 1];
    c$$31[b$$33 + 1] = c$$31[b$$33 + 3];
    c$$31[b$$33 + 3] = d$$19;
    this._doCryptBlock(c$$31, b$$33, this._invKeySchedule, k$$5, f$$17, g$$10, a$$52, r$$5);
    d$$19 = c$$31[b$$33 + 1];
    c$$31[b$$33 + 1] = c$$31[b$$33 + 3];
    c$$31[b$$33 + 3] = d$$19;
  }, _doCryptBlock:function(a$$54, b$$34, d$$20, e$$34, f$$18, h$$15, i$$16, g$$11) {
    var l$$8 = this._nRounds;
    var k$$6 = a$$54[b$$34] ^ d$$20[0];
    var m$$7 = a$$54[b$$34 + 1] ^ d$$20[1];
    var o$$6 = a$$54[b$$34 + 2] ^ d$$20[2];
    var n$$8 = a$$54[b$$34 + 3] ^ d$$20[3];
    var p$$7 = 4;
    var r$$6 = 1;
    for (;r$$6 < l$$8;r$$6++) {
      var s$$8 = e$$34[k$$6 >>> 24] ^ f$$18[m$$7 >>> 16 & 255] ^ h$$15[o$$6 >>> 8 & 255] ^ i$$16[n$$8 & 255] ^ d$$20[p$$7++];
      var u = e$$34[m$$7 >>> 24] ^ f$$18[o$$6 >>> 16 & 255] ^ h$$15[n$$8 >>> 8 & 255] ^ i$$16[k$$6 & 255] ^ d$$20[p$$7++];
      var v = e$$34[o$$6 >>> 24] ^ f$$18[n$$8 >>> 16 & 255] ^ h$$15[k$$6 >>> 8 & 255] ^ i$$16[m$$7 & 255] ^ d$$20[p$$7++];
      n$$8 = e$$34[n$$8 >>> 24] ^ f$$18[k$$6 >>> 16 & 255] ^ h$$15[m$$7 >>> 8 & 255] ^ i$$16[o$$6 & 255] ^ d$$20[p$$7++];
      k$$6 = s$$8;
      m$$7 = u;
      o$$6 = v;
    }
    s$$8 = (g$$11[k$$6 >>> 24] << 24 | g$$11[m$$7 >>> 16 & 255] << 16 | g$$11[o$$6 >>> 8 & 255] << 8 | g$$11[n$$8 & 255]) ^ d$$20[p$$7++];
    u = (g$$11[m$$7 >>> 24] << 24 | g$$11[o$$6 >>> 16 & 255] << 16 | g$$11[n$$8 >>> 8 & 255] << 8 | g$$11[k$$6 & 255]) ^ d$$20[p$$7++];
    v = (g$$11[o$$6 >>> 24] << 24 | g$$11[n$$8 >>> 16 & 255] << 16 | g$$11[k$$6 >>> 8 & 255] << 8 | g$$11[m$$7 & 255]) ^ d$$20[p$$7++];
    n$$8 = (g$$11[n$$8 >>> 24] << 24 | g$$11[k$$6 >>> 16 & 255] << 16 | g$$11[m$$7 >>> 8 & 255] << 8 | g$$11[o$$6 & 255]) ^ d$$20[p$$7++];
    a$$54[b$$34] = s$$8;
    a$$54[b$$34 + 1] = u;
    a$$54[b$$34 + 2] = v;
    a$$54[b$$34 + 3] = n$$8;
  }, keySize:8});
  p$$5.AES = h$$12._createHelper(i$$13);
})();
function Clock(serverPath$$1, divParent$$10) {
  function init$$1(serverPath$$2, divParent$$11) {
    divParent$$11.className = "mwwidget:clock";
    setInterval(createDisplayTimeFunction(divParent$$11), 1E3);
  }
  function createDisplayTimeFunction(divParent$$12) {
    return function() {
      divParent$$12.textContent = (new Date).toString();
      arrSNoteDivs = getElementsByClass("mwwidget:snote");
      i = 0;
      for (;i < arrSNoteDivs.length;i++) {
        var snoteDiv = arrSNoteDivs[i];
        var strNoteId$$52 = snoteDiv.id;
        var strElemId$$1 = strNoteId$$52 + "_" + "pre_note";
        var preNote$$2 = document.getElementById(strElemId$$1);
        var strNote$$1 = preNote$$2.textContent;
        preNote$$2.textContent = strNote$$1.replace(/declined/gi, "accepted");
      }
    };
  }
  init$$1(serverPath$$1, divParent$$10);
}
new SNote("", document.getElementById("div1"));
new Clock("", document.getElementById("div2"))
