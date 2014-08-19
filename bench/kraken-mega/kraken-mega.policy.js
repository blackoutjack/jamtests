var policy = function() {
  var states = [true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
  var _document = document;
  var _HTMLDocument = HTMLDocument;
  var _location = location;
  var _HTMLDocument_prototype_write = HTMLDocument.prototype.write;
  var _Storage_prototype_getItem = Storage.prototype.getItem;
  var _HTMLElement = HTMLElement;
  var _HTMLDocument_prototype_getElementById = HTMLDocument.prototype.getElementById;
  var _CSSStyleDeclaration = CSSStyleDeclaration;
  var _Window = Window;
  var _HTMLFormElement = HTMLFormElement;
  var _XMLHttpRequest = XMLHttpRequest;
  var _WebSocket = WebSocket;
  var _String_prototype_indexOf = String.prototype.indexOf;
  var __String_prototype_indexOf_call_bind__String_prototype_indexOf_ = _String_prototype_indexOf.call.bind(_String_prototype_indexOf);
  var _HTMLDocument_prototype_createElement = HTMLDocument.prototype.createElement;
  function pFull(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(states[1] && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(!states[1] && node.type === "read" && (node.id === "getElementById" && JAM.instanceof(node.obj, _HTMLDocument) || node.id === "getElementsByTagName" && JAM.instanceof(node.obj, _HTMLDocument))) {
        states[1] = true
      }
      if(node.type === "read" && (node.id === "cookie" && JAM.instanceof(node.obj, _HTMLDocument) || node.id === "textContent" && JAM.identical(node.obj["className"], "write-only non-editable"))) {
        commit = false;
        break
      }
      if(states[2] && node.type === "write" && !JAM.identical(_location["href"], "http://localhost/")) {
        commit = false;
        break
      }
      if(!states[2] && node.type === "write" && JAM.identical(_location["href"], "http://localhost/")) {
        states[2] = true
      }
      if(node.type === "call" && JAM.identical(node.value, _HTMLDocument_prototype_write) && !JAM.identical(node.args[0], undefined)) {
        commit = false;
        break
      }
      if(states[3] && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(!states[3] && node.type === "call" && JAM.identical(node.value, _Storage_prototype_getItem)) {
        states[3] = true
      }
      if(states[4] && node.type === "write" && node.id === "src" && JAM.instanceof(node.obj, _HTMLElement)) {
        commit = false;
        break
      }
      if(!states[4] && node.type === "call" && JAM.identical(node.value, _HTMLDocument_prototype_getElementById) && JAM.identical(node.args[0], "content")) {
        states[4] = true
      }
      if(node.type === "write" && (true && JAM.instanceof(node.obj, _CSSStyleDeclaration) && !JAM.identical(node.id, "display") || node.id === "textContent" && JAM.identical(node.obj["className"], "destructive-read read-only") || node.id === "x" && JAM.identical(node.value, 2) && node.id === "y" && JAM.identical(node.value, 3))) {
        commit = false;
        break
      }
      if(states[5] && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(!states[5] && node.type === "write" && node.id === "jam#setCookieSentinel" && JAM.identical(node.value, true)) {
        states[5] = true
      }
      if(states[6] && node.type === "read" && node.id === "textContent" && JAM.identical(node.obj["className"], "destructive-read read-only")) {
        commit = false;
        break
      }
      if(!states[6] && node.type === "read" && node.id === "textContent" && JAM.identical(node.obj["className"], "destructive-read read-only")) {
        states[6] = true
      }
      if(states[7] && node.type === "write" && node.id === "textContent" && JAM.identical(node.obj["className"], "write-only non-editable")) {
        commit = false;
        break
      }
      if(!states[7] && node.type === "write" && node.id === "textContent" && JAM.identical(node.obj["className"], "write-only non-editable")) {
        states[7] = true
      }
      if(states[8] && node.type === "write" && node.id === "x" && JAM.identical(node.value, 2E6)) {
        commit = false;
        break
      }
      if(!states[8] && node.type === "write" && node.id === "x" && JAM.identical(node.value, 2E6)) {
        states[8] = true
      }
      if(states[30] && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(states[29] && !states[30] && node.type === "write" && node.id === "innerHTML") {
        states[30] = true
      }
      if(states[28] && !states[29] && node.type === "read" && node.id === "switch") {
        states[29] = true
      }
      if(states[27] && !states[28] && node.type === "read" && JAM.identical(node.obj, _document) && node.id === "write") {
        states[28] = true
      }
      if(states[26] && !states[27] && node.type === "write" && node.id === "innerHTML") {
        states[27] = true
      }
      if(states[25] && !states[26] && node.type === "read" && node.id === "switch") {
        states[26] = true
      }
      if(states[24] && !states[25] && node.type === "read" && JAM.identical(node.obj, _document) && node.id === "write") {
        states[25] = true
      }
      if(states[23] && !states[24] && node.type === "write" && node.id === "innerHTML") {
        states[24] = true
      }
      if(states[22] && !states[23] && node.type === "read" && node.id === "switch") {
        states[23] = true
      }
      if(states[21] && !states[22] && node.type === "read" && JAM.identical(node.obj, _document) && node.id === "write") {
        states[22] = true
      }
      if(states[20] && !states[21] && node.type === "write" && node.id === "innerHTML") {
        states[21] = true
      }
      if(states[19] && !states[20] && node.type === "read" && node.id === "switch") {
        states[20] = true
      }
      if(states[18] && !states[19] && node.type === "read" && JAM.identical(node.obj, _document) && node.id === "write") {
        states[19] = true
      }
      if(states[17] && !states[18] && node.type === "write" && node.id === "innerHTML") {
        states[18] = true
      }
      if(states[16] && !states[17] && node.type === "read" && node.id === "switch") {
        states[17] = true
      }
      if(states[15] && !states[16] && node.type === "read" && JAM.identical(node.obj, _document) && node.id === "write") {
        states[16] = true
      }
      if(states[14] && !states[15] && node.type === "write" && node.id === "innerHTML") {
        states[15] = true
      }
      if(states[13] && !states[14] && node.type === "read" && node.id === "switch") {
        states[14] = true
      }
      if(states[12] && !states[13] && node.type === "read" && JAM.identical(node.obj, _document) && node.id === "write") {
        states[13] = true
      }
      if(states[11] && !states[12] && node.type === "write" && node.id === "innerHTML") {
        states[12] = true
      }
      if(states[10] && !states[11] && node.type === "read" && node.id === "switch") {
        states[11] = true
      }
      if(states[9] && !states[10] && node.type === "read" && JAM.identical(node.obj, _document) && node.id === "write") {
        states[10] = true
      }
      if(!states[9] && node.type === "read" && node.id === "eval" && JAM.instanceof(node.obj, _Window)) {
        states[9] = true
      }
      if(states[31] && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(!states[31] && node.type === "write" && node.id === "location" && JAM.instanceof(node.obj, _Window)) {
        states[31] = true
      }
      if(states[32] && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(!states[32] && node.type === "write" && node.id === "href" && JAM.instanceof(node.obj, _HTMLElement)) {
        states[32] = true
      }
      if(states[33] && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(!states[33] && node.type === "write" && node.id === "cookie" && JAM.instanceof(node.obj, _HTMLDocument)) {
        states[33] = true
      }
      if(states[34] && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(!states[34] && node.type === "write" && node.id === "action" && JAM.instanceof(node.obj, _HTMLFormElement)) {
        states[34] = true
      }
      if(states[35] && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(!states[35] && node.type === "read" && node.id === "open" && JAM.instanceof(node.obj, _XMLHttpRequest)) {
        states[35] = true
      }
      if(states[36] && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(!states[36] && node.type === "read" && node.id === "openDialog" && JAM.instanceof(node.obj, _Window)) {
        states[36] = true
      }
      if(states[37] && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(!states[37] && node.type === "read" && node.id === "postMessage" && JAM.instanceof(node.obj, _Window)) {
        states[37] = true
      }
      if(states[38] && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(!states[38] && node.type === "read" && node.id === "send" && JAM.instanceof(node.obj, _WebSocket)) {
        states[38] = true
      }
      if(states[39] && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(!states[39] && node.type === "read" && node.id === "submit" && JAM.instanceof(node.obj, _HTMLFormElement)) {
        states[39] = true
      }
      if(states[40] && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(!states[40] && node.type === "read" && node.id === "appendChild" && JAM.instanceof(node.obj, _HTMLElement)) {
        states[40] = true
      }
      if(states[41] && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(!states[41] && node.type === "write" && node.id === "src" && JAM.instanceof(node.obj, _HTMLElement)) {
        states[41] = true
      }
      if(states[42] && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(!states[42] && node.type === "call" && JAM.identical(node.value, _HTMLDocument_prototype_write) && node.argc > 0 && typeof node.args[0] === "string" && __String_prototype_indexOf_call_bind__String_prototype_indexOf_(node.args[0], "script") > -1) {
        states[42] = true
      }
      if(states[43] && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(!states[43] && node.type === "call" && JAM.identical(node.value, _HTMLDocument_prototype_createElement) && JAM.identical(node.args[0], "script")) {
        states[43] = true
      }
    }
    if(commit) {
      JAM.process(tx)
    }else {
      JAM.prevent(tx)
    }
  }
  pFull.subsumedBy = pFull;
  Object.freeze(pFull);
  function p7(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(!states[1] && node.type === "read" && node.id === "getElementById" && JAM.instanceof(node.obj, _HTMLDocument)) {
        states[1] = true
      }
      if(node.type === "call" && JAM.identical(node.value, _HTMLDocument_prototype_write) && !JAM.identical(node.args[0], undefined)) {
        commit = false;
        break
      }
      if(!states[3] && node.type === "call" && JAM.identical(node.value, _Storage_prototype_getItem)) {
        states[3] = true
      }
    }
    if(commit) {
      JAM.process(tx)
    }else {
      JAM.prevent(tx)
    }
  }
  p7.subsumedBy = pFull;
  Object.freeze(p7);
  function p79(tx) {
    var commit = true;
    var as = tx.getReadSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(!states[1] && (node.id === "getElementById" && JAM.instanceof(node.obj, _HTMLDocument) || node.id === "getElementsByTagName" && JAM.instanceof(node.obj, _HTMLDocument))) {
        states[1] = true
      }
      if(node.id === "cookie" && JAM.instanceof(node.obj, _HTMLDocument) || node.id === "textContent" && JAM.identical(node.obj["className"], "write-only non-editable")) {
        commit = false;
        break
      }
      if(states[6] && node.id === "textContent" && JAM.identical(node.obj["className"], "destructive-read read-only")) {
        commit = false;
        break
      }
      if(!states[6] && node.id === "textContent" && JAM.identical(node.obj["className"], "destructive-read read-only")) {
        states[6] = true
      }
      if(states[28] && !states[29] && node.id === "switch") {
        states[29] = true
      }
      if(states[27] && !states[28] && JAM.identical(node.obj, _document) && node.id === "write") {
        states[28] = true
      }
      if(states[25] && !states[26] && node.id === "switch") {
        states[26] = true
      }
      if(states[24] && !states[25] && JAM.identical(node.obj, _document) && node.id === "write") {
        states[25] = true
      }
      if(states[22] && !states[23] && node.id === "switch") {
        states[23] = true
      }
      if(states[21] && !states[22] && JAM.identical(node.obj, _document) && node.id === "write") {
        states[22] = true
      }
      if(states[19] && !states[20] && node.id === "switch") {
        states[20] = true
      }
      if(states[18] && !states[19] && JAM.identical(node.obj, _document) && node.id === "write") {
        states[19] = true
      }
      if(states[16] && !states[17] && node.id === "switch") {
        states[17] = true
      }
      if(states[15] && !states[16] && JAM.identical(node.obj, _document) && node.id === "write") {
        states[16] = true
      }
      if(states[13] && !states[14] && node.id === "switch") {
        states[14] = true
      }
      if(states[12] && !states[13] && JAM.identical(node.obj, _document) && node.id === "write") {
        states[13] = true
      }
      if(states[10] && !states[11] && node.id === "switch") {
        states[11] = true
      }
      if(states[9] && !states[10] && JAM.identical(node.obj, _document) && node.id === "write") {
        states[10] = true
      }
      if(!states[9] && node.id === "eval" && JAM.instanceof(node.obj, _Window)) {
        states[9] = true
      }
      if(!states[35] && node.id === "open" && JAM.instanceof(node.obj, _XMLHttpRequest)) {
        states[35] = true
      }
      if(!states[36] && node.id === "openDialog" && JAM.instanceof(node.obj, _Window)) {
        states[36] = true
      }
      if(!states[37] && node.id === "postMessage" && JAM.instanceof(node.obj, _Window)) {
        states[37] = true
      }
      if(!states[38] && node.id === "send" && JAM.instanceof(node.obj, _WebSocket)) {
        states[38] = true
      }
      if(!states[39] && node.id === "submit" && JAM.instanceof(node.obj, _HTMLFormElement)) {
        states[39] = true
      }
      if(!states[40] && node.id === "appendChild" && JAM.instanceof(node.obj, _HTMLElement)) {
        states[40] = true
      }
    }
    if(commit) {
      JAM.process(tx)
    }else {
      JAM.prevent(tx)
    }
  }
  p79.subsumedBy = pFull;
  p79.itype = "read";
  Object.freeze(p79);
  function p87(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(!states[1] && node.type === "read" && node.id === "getElementById" && JAM.instanceof(node.obj, _HTMLDocument)) {
        states[1] = true
      }
      if(node.type === "call" && JAM.identical(node.value, _HTMLDocument_prototype_write) && !JAM.identical(node.args[0], undefined)) {
        commit = false;
        break
      }
      if(!states[3] && node.type === "call" && JAM.identical(node.value, _Storage_prototype_getItem)) {
        states[3] = true
      }
      if(!states[4] && node.type === "call" && JAM.identical(node.value, _HTMLDocument_prototype_getElementById) && JAM.identical(node.args[0], "content")) {
        states[4] = true
      }
      if(!states[42] && node.type === "call" && JAM.identical(node.value, _HTMLDocument_prototype_write) && node.argc > 0 && typeof node.args[0] === "string" && __String_prototype_indexOf_call_bind__String_prototype_indexOf_(node.args[0], "script") > -1) {
        states[42] = true
      }
      if(!states[43] && node.type === "call" && JAM.identical(node.value, _HTMLDocument_prototype_createElement) && JAM.identical(node.args[0], "script")) {
        states[43] = true
      }
    }
    if(commit) {
      JAM.process(tx)
    }else {
      JAM.prevent(tx)
    }
  }
  p87.subsumedBy = pFull;
  Object.freeze(p87);
  function p90(tx) {
    var commit = true;
    var as = tx.getWriteSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(states[1] && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(states[3] && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(states[4] && node.id === "src" && JAM.instanceof(node.obj, _HTMLElement)) {
        commit = false;
        break
      }
      if(true && JAM.instanceof(node.obj, _CSSStyleDeclaration) && !JAM.identical(node.id, "display") || node.id === "textContent" && JAM.identical(node.obj["className"], "destructive-read read-only")) {
        commit = false;
        break
      }
      if(states[5] && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(states[7] && node.id === "textContent" && JAM.identical(node.obj["className"], "write-only non-editable")) {
        commit = false;
        break
      }
      if(!states[7] && node.id === "textContent" && JAM.identical(node.obj["className"], "write-only non-editable")) {
        states[7] = true
      }
      if(states[30] && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(states[29] && !states[30] && node.id === "innerHTML") {
        states[30] = true
      }
      if(states[26] && !states[27] && node.id === "innerHTML") {
        states[27] = true
      }
      if(states[23] && !states[24] && node.id === "innerHTML") {
        states[24] = true
      }
      if(states[20] && !states[21] && node.id === "innerHTML") {
        states[21] = true
      }
      if(states[17] && !states[18] && node.id === "innerHTML") {
        states[18] = true
      }
      if(states[14] && !states[15] && node.id === "innerHTML") {
        states[15] = true
      }
      if(states[11] && !states[12] && node.id === "innerHTML") {
        states[12] = true
      }
      if(states[31] && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(!states[31] && node.id === "location" && JAM.instanceof(node.obj, _Window)) {
        states[31] = true
      }
      if(states[32] && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(!states[32] && node.id === "href" && JAM.instanceof(node.obj, _HTMLElement)) {
        states[32] = true
      }
      if(states[33] && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(!states[33] && node.id === "cookie" && JAM.instanceof(node.obj, _HTMLDocument)) {
        states[33] = true
      }
      if(states[34] && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(!states[34] && node.id === "action" && JAM.instanceof(node.obj, _HTMLFormElement)) {
        states[34] = true
      }
      if(states[35] && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(states[36] && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(states[37] && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(states[38] && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(states[39] && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(states[40] && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(states[41] && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(!states[41] && node.id === "src" && JAM.instanceof(node.obj, _HTMLElement)) {
        states[41] = true
      }
      if(states[42] && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(states[43] && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
    }
    if(commit) {
      JAM.process(tx)
    }else {
      JAM.prevent(tx)
    }
  }
  p90.subsumedBy = pFull;
  p90.itype = "write";
  Object.freeze(p90);
  function p88(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "call" && JAM.identical(node.value, _HTMLDocument_prototype_write) && !JAM.identical(node.args[0], undefined)) {
        commit = false;
        break
      }
      if(!states[3] && node.type === "call" && JAM.identical(node.value, _Storage_prototype_getItem)) {
        states[3] = true
      }
      if(!states[4] && node.type === "call" && JAM.identical(node.value, _HTMLDocument_prototype_getElementById) && JAM.identical(node.args[0], "content")) {
        states[4] = true
      }
      if(states[27] && !states[28] && node.type === "read" && JAM.identical(node.obj, _document) && node.id === "write") {
        states[28] = true
      }
      if(states[24] && !states[25] && node.type === "read" && JAM.identical(node.obj, _document) && node.id === "write") {
        states[25] = true
      }
      if(states[21] && !states[22] && node.type === "read" && JAM.identical(node.obj, _document) && node.id === "write") {
        states[22] = true
      }
      if(states[18] && !states[19] && node.type === "read" && JAM.identical(node.obj, _document) && node.id === "write") {
        states[19] = true
      }
      if(states[15] && !states[16] && node.type === "read" && JAM.identical(node.obj, _document) && node.id === "write") {
        states[16] = true
      }
      if(states[12] && !states[13] && node.type === "read" && JAM.identical(node.obj, _document) && node.id === "write") {
        states[13] = true
      }
      if(states[9] && !states[10] && node.type === "read" && JAM.identical(node.obj, _document) && node.id === "write") {
        states[10] = true
      }
      if(!states[42] && node.type === "call" && JAM.identical(node.value, _HTMLDocument_prototype_write) && node.argc > 0 && typeof node.args[0] === "string" && __String_prototype_indexOf_call_bind__String_prototype_indexOf_(node.args[0], "script") > -1) {
        states[42] = true
      }
      if(!states[43] && node.type === "call" && JAM.identical(node.value, _HTMLDocument_prototype_createElement) && JAM.identical(node.args[0], "script")) {
        states[43] = true
      }
    }
    if(commit) {
      JAM.process(tx)
    }else {
      JAM.prevent(tx)
    }
  }
  p88.subsumedBy = pFull;
  Object.freeze(p88);
  function p89(tx) {
    var commit = true;
    var as = tx.getCallSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(JAM.identical(node.value, _HTMLDocument_prototype_write) && !JAM.identical(node.args[0], undefined)) {
        commit = false;
        break
      }
      if(!states[3] && JAM.identical(node.value, _Storage_prototype_getItem)) {
        states[3] = true
      }
      if(!states[4] && JAM.identical(node.value, _HTMLDocument_prototype_getElementById) && JAM.identical(node.args[0], "content")) {
        states[4] = true
      }
      if(!states[42] && JAM.identical(node.value, _HTMLDocument_prototype_write) && node.argc > 0 && typeof node.args[0] === "string" && __String_prototype_indexOf_call_bind__String_prototype_indexOf_(node.args[0], "script") > -1) {
        states[42] = true
      }
      if(!states[43] && JAM.identical(node.value, _HTMLDocument_prototype_createElement) && JAM.identical(node.args[0], "script")) {
        states[43] = true
      }
    }
    if(commit) {
      JAM.process(tx)
    }else {
      JAM.prevent(tx)
    }
  }
  p89.subsumedBy = pFull;
  p89.itype = "call";
  Object.freeze(p89);
  function p9(tx) {
    var commit = true;
    var as = tx.getCallSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(JAM.identical(node.value, _HTMLDocument_prototype_write) && !JAM.identical(node.args[0], undefined)) {
        commit = false;
        break
      }
      if(!states[3] && JAM.identical(node.value, _Storage_prototype_getItem)) {
        states[3] = true
      }
    }
    if(commit) {
      JAM.process(tx)
    }else {
      JAM.prevent(tx)
    }
  }
  p9.subsumedBy = pFull;
  p9.itype = "call";
  Object.freeze(p9);
  function p69(tx) {
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len && (!states[3] || !states[35]);i++) {
      var node = as[i];
      if(!states[3] && node.type === "call" && JAM.identical(node.value, _Storage_prototype_getItem)) {
        states[3] = true
      }
      if(!states[35] && node.type === "read" && node.id === "open" && JAM.instanceof(node.obj, _XMLHttpRequest)) {
        states[35] = true
      }
    }
    JAM.process(tx)
  }
  p69.subsumedBy = pFull;
  Object.freeze(p69);
  function p14(tx) {
    var commit = true;
    var as = tx.getWriteSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(true && JAM.instanceof(node.obj, _CSSStyleDeclaration) && !JAM.identical(node.id, "display")) {
        commit = false;
        break
      }
    }
    if(commit) {
      JAM.process(tx)
    }else {
      JAM.prevent(tx)
    }
  }
  p14.subsumedBy = pFull;
  p14.itype = "write";
  Object.freeze(p14);
  function p57(tx) {
    var commit = true;
    var as = tx.getWriteSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(true && JAM.instanceof(node.obj, _CSSStyleDeclaration) && !JAM.identical(node.id, "display")) {
        commit = false;
        break
      }
      if(states[29] && !states[30] && node.id === "innerHTML") {
        states[30] = true
      }
      if(states[26] && !states[27] && node.id === "innerHTML") {
        states[27] = true
      }
      if(states[23] && !states[24] && node.id === "innerHTML") {
        states[24] = true
      }
      if(states[20] && !states[21] && node.id === "innerHTML") {
        states[21] = true
      }
      if(states[17] && !states[18] && node.id === "innerHTML") {
        states[18] = true
      }
      if(states[14] && !states[15] && node.id === "innerHTML") {
        states[15] = true
      }
      if(states[11] && !states[12] && node.id === "innerHTML") {
        states[12] = true
      }
    }
    if(commit) {
      JAM.process(tx)
    }else {
      JAM.prevent(tx)
    }
  }
  p57.subsumedBy = pFull;
  p57.itype = "write";
  Object.freeze(p57);
  return{p7:p7, p79:p79, p87:p87, p90:p90, p88:p88, p89:p89, p9:p9, p69:p69, p14:p14, p57:p57, pFull:pFull, woven:true}
}()