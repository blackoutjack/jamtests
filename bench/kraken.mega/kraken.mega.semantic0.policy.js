var policy = function() {
  var states = [true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
  var _document = document;
  var _HTMLDocument = HTMLDocument;
  var _location = location;
  var _Storage_prototype_getItem = Storage.prototype.getItem;
  var _HTMLElement = HTMLElement;
  var _HTMLDocument_prototype_getElementById = HTMLDocument.prototype.getElementById;
  var _CSSStyleDeclaration = CSSStyleDeclaration;
  var _Window = Window;
  var _HTMLFormElement = HTMLFormElement;
  var _XMLHttpRequest = XMLHttpRequest;
  var _WebSocket = WebSocket;
  var _HTMLDocument_prototype_write = HTMLDocument.prototype.write;
  var _String_prototype_indexOf = String.prototype.indexOf;
  var __String_prototype_indexOf_call_bind__String_prototype_indexOf_ = _String_prototype_indexOf.call.bind(_String_prototype_indexOf);
  var _HTMLDocument_prototype_createElement = HTMLDocument.prototype.createElement;
  var _undefined = undefined;
  var _HTMLAudioElement = HTMLAudioElement;
  var _RegExp_prototype_test = RegExp.prototype.test;
  var __RegExp_prototype_test_call_bind__RegExp_prototype_test_ = _RegExp_prototype_test.call.bind(_RegExp_prototype_test);
  var _HTMLFrameElement = HTMLFrameElement;
  var _HTMLIFrameElement = HTMLIFrameElement;
  var _HTMLImageElement = HTMLImageElement;
  var _HTMLInputElement = HTMLInputElement;
  var _HTMLScriptElement = HTMLScriptElement;
  var _HTMLSourceElement = HTMLSourceElement;
  var _HTMLVideoElement = HTMLVideoElement;
  var _HTMLAudioElement_prototype_setAttribute = HTMLAudioElement.prototype.setAttribute;
  var _HTMLFrameElement_prototype_setAttribute = HTMLFrameElement.prototype.setAttribute;
  var _HTMLIFrameElement_prototype_setAttribute = HTMLIFrameElement.prototype.setAttribute;
  var _HTMLImageElement_prototype_setAttribute = HTMLImageElement.prototype.setAttribute;
  var _HTMLInputElement_prototype_setAttribute = HTMLInputElement.prototype.setAttribute;
  var _HTMLScriptElement_prototype_setAttribute = HTMLScriptElement.prototype.setAttribute;
  var _HTMLSourceElement_prototype_setAttribute = HTMLSourceElement.prototype.setAttribute;
  var _HTMLVideoElement_prototype_setAttribute = HTMLVideoElement.prototype.setAttribute;
  var _HTMLFormElement_prototype_setAttribute = HTMLFormElement.prototype.setAttribute;
  var _HTMLFormElement_prototype_submit = HTMLFormElement.prototype.submit;
  function pFull(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for (var i = 0;i < len;i++) {
      var node = as[i];
      if (states[1] && node.type === "write" && (JAM.identical(node.obj, _document) && node.id === "cookie")) {
        commit = false;
        break;
      }
      if (!states[1] && node.type === "read" && (node.id === "getElementById" && JAM.instanceof(node.obj, _HTMLDocument) || node.id === "getElementsByTagName" && JAM.instanceof(node.obj, _HTMLDocument))) {
        states[1] = true;
      }
      if (node.type === "read" && (node.id === "cookie" && JAM.instanceof(node.obj, _HTMLDocument) || node.id === "textContent" && node.obj["className"] === "write-only non-editable")) {
        commit = false;
        break;
      }
      if (states[3] && node.type === "write" && (JAM.identical(node.obj, _document) && node.id === "cookie")) {
        commit = false;
        break;
      }
      if (states[2] && !states[3] && node.type === "write" && _location["href"] !== "http://localhost/") {
        states[3] = true;
      }
      if (!states[2] && node.type === "write" && _location["href"] === "http://localhost/") {
        states[2] = true;
      }
      if (!states[3] && node.type === "invoke" && JAM.identical(node.value, _Storage_prototype_getItem)) {
        states[3] = true;
      }
      if (states[5] && node.type === "write" && (JAM.identical(node.obj, _document) && node.id === "cookie")) {
        commit = false;
        break;
      }
      if (states[4] && !states[5] && node.type === "write" && (node.id === "src" && JAM.instanceof(node.obj, _HTMLElement))) {
        states[5] = true;
      }
      if (!states[4] && node.type === "invoke" && (JAM.identical(node.value, _HTMLDocument_prototype_getElementById) && (node.argc > 0 && node.args[0] === "content"))) {
        states[4] = true;
      }
      if (node.type === "write" && (true && JAM.instanceof(node.obj, _CSSStyleDeclaration) && node.id !== "display" || node.id === "textContent" && node.obj["className"] === "destructive-read read-only" || node.id === "x" && node.value === 23456789 && (node.id === "y" && node.value === 3456789) && (node.id === "z" && node.value === 456789) && (node.id === "v" && node.value === 56789) && (node.id === "n" && node.value === 6789) && (node.id === "u" && node.value === 789) && (node.id === "f" && node.value === 
      89) && (node.id === "a" && node.value === 9) || node.id === "src" && JAM.instanceof(node.obj, _HTMLAudioElement) && (node.argc > 1 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.args[1])) || node.id === "src" && JAM.instanceof(node.obj, _HTMLFrameElement) && (node.argc > 1 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.args[1])) || node.id === "src" && JAM.instanceof(node.obj, _HTMLIFrameElement) && (node.argc > 1 && 
      __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.args[1])) || node.id === "src" && JAM.instanceof(node.obj, _HTMLImageElement) && (node.argc > 1 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.args[1])) || node.id === "src" && JAM.instanceof(node.obj, _HTMLInputElement) && (node.argc > 1 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.args[1])) || node.id === "src" && JAM.instanceof(node.obj, 
      _HTMLScriptElement) && (node.argc > 1 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.args[1])) || node.id === "src" && JAM.instanceof(node.obj, _HTMLSourceElement) && (node.argc > 1 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.args[1])) || node.id === "src" && JAM.instanceof(node.obj, _HTMLVideoElement) && (node.argc > 1 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.args[1])) || 
      node.id === "src" && JAM.instanceof(node.obj, _HTMLElement) && node.value !== "plaintext-test.png")) {
        commit = false;
        break;
      }
      if (!states[5] && node.type === "write" && (node.id === "jam#setCookieSentinel" && node.value === true)) {
        states[5] = true;
      }
      if (states[6] && node.type === "read" && (node.id === "textContent" && node.obj["className"] === "destructive-read read-only")) {
        commit = false;
        break;
      }
      if (!states[6] && node.type === "read" && (node.id === "textContent" && node.obj["className"] === "destructive-read read-only")) {
        states[6] = true;
      }
      if (states[7] && node.type === "write" && (node.id === "textContent" && node.obj["className"] === "write-only non-editable")) {
        commit = false;
        break;
      }
      if (!states[7] && node.type === "write" && (node.id === "textContent" && node.obj["className"] === "write-only non-editable")) {
        states[7] = true;
      }
      if (states[9] && node.type === "write" && (JAM.identical(node.obj, _document) && node.id === "cookie")) {
        commit = false;
        break;
      }
      if (states[8] && !states[9] && node.type === "write" && (node.id === "x" && node.value === 2E6)) {
        states[9] = true;
      }
      if (!states[8] && node.type === "write" && (node.id === "x" && node.value === 2E3)) {
        states[8] = true;
      }
      if (states[30] && !states[9] && node.type === "write" && node.id === "innerHTML") {
        states[9] = true;
      }
      if (states[29] && !states[30] && node.type === "read" && node.id === "switch") {
        states[30] = true;
      }
      if (states[28] && !states[29] && node.type === "read" && (JAM.identical(node.obj, _document) && node.id === "write")) {
        states[29] = true;
      }
      if (states[27] && !states[28] && node.type === "write" && node.id === "innerHTML") {
        states[28] = true;
      }
      if (states[26] && !states[27] && node.type === "read" && node.id === "switch") {
        states[27] = true;
      }
      if (states[25] && !states[26] && node.type === "read" && (JAM.identical(node.obj, _document) && node.id === "write")) {
        states[26] = true;
      }
      if (states[24] && !states[25] && node.type === "write" && node.id === "innerHTML") {
        states[25] = true;
      }
      if (states[23] && !states[24] && node.type === "read" && node.id === "switch") {
        states[24] = true;
      }
      if (states[22] && !states[23] && node.type === "read" && (JAM.identical(node.obj, _document) && node.id === "write")) {
        states[23] = true;
      }
      if (states[21] && !states[22] && node.type === "write" && node.id === "innerHTML") {
        states[22] = true;
      }
      if (states[20] && !states[21] && node.type === "read" && node.id === "switch") {
        states[21] = true;
      }
      if (states[19] && !states[20] && node.type === "read" && (JAM.identical(node.obj, _document) && node.id === "write")) {
        states[20] = true;
      }
      if (states[18] && !states[19] && node.type === "write" && node.id === "innerHTML") {
        states[19] = true;
      }
      if (states[17] && !states[18] && node.type === "read" && node.id === "switch") {
        states[18] = true;
      }
      if (states[16] && !states[17] && node.type === "read" && (JAM.identical(node.obj, _document) && node.id === "write")) {
        states[17] = true;
      }
      if (states[15] && !states[16] && node.type === "write" && node.id === "innerHTML") {
        states[16] = true;
      }
      if (states[14] && !states[15] && node.type === "read" && node.id === "switch") {
        states[15] = true;
      }
      if (states[13] && !states[14] && node.type === "read" && (JAM.identical(node.obj, _document) && node.id === "write")) {
        states[14] = true;
      }
      if (states[12] && !states[13] && node.type === "write" && node.id === "innerHTML") {
        states[13] = true;
      }
      if (states[11] && !states[12] && node.type === "read" && node.id === "switch") {
        states[12] = true;
      }
      if (states[10] && !states[11] && node.type === "read" && (JAM.identical(node.obj, _document) && node.id === "write")) {
        states[11] = true;
      }
      if (!states[10] && node.type === "read" && (node.id === "eval" && JAM.instanceof(node.obj, _Window))) {
        states[10] = true;
      }
      if (states[31] && node.type === "write" && (JAM.identical(node.obj, _document) && node.id === "cookie")) {
        commit = false;
        break;
      }
      if (!states[31] && node.type === "write" && (node.id === "location" && JAM.instanceof(node.obj, _Window))) {
        states[31] = true;
      }
      if (states[32] && node.type === "write" && (JAM.identical(node.obj, _document) && node.id === "cookie")) {
        commit = false;
        break;
      }
      if (!states[32] && node.type === "write" && (node.id === "href" && JAM.instanceof(node.obj, _HTMLElement))) {
        states[32] = true;
      }
      if (states[33] && node.type === "write" && (JAM.identical(node.obj, _document) && node.id === "cookie")) {
        commit = false;
        break;
      }
      if (!states[33] && node.type === "write" && (node.id === "cookie" && JAM.instanceof(node.obj, _HTMLDocument))) {
        states[33] = true;
      }
      if (states[34] && node.type === "write" && (JAM.identical(node.obj, _document) && node.id === "cookie")) {
        commit = false;
        break;
      }
      if (!states[34] && node.type === "write" && (node.id === "action" && JAM.instanceof(node.obj, _HTMLFormElement))) {
        states[34] = true;
      }
      if (states[35] && node.type === "write" && (JAM.identical(node.obj, _document) && node.id === "cookie")) {
        commit = false;
        break;
      }
      if (!states[35] && node.type === "read" && (node.id === "open" && JAM.instanceof(node.obj, _XMLHttpRequest))) {
        states[35] = true;
      }
      if (states[36] && node.type === "write" && (JAM.identical(node.obj, _document) && node.id === "cookie")) {
        commit = false;
        break;
      }
      if (!states[36] && node.type === "read" && (node.id === "openDialog" && JAM.instanceof(node.obj, _Window))) {
        states[36] = true;
      }
      if (states[37] && node.type === "write" && (JAM.identical(node.obj, _document) && node.id === "cookie")) {
        commit = false;
        break;
      }
      if (!states[37] && node.type === "read" && (node.id === "postMessage" && JAM.instanceof(node.obj, _Window))) {
        states[37] = true;
      }
      if (states[38] && node.type === "write" && (JAM.identical(node.obj, _document) && node.id === "cookie")) {
        commit = false;
        break;
      }
      if (!states[38] && node.type === "read" && (node.id === "send" && JAM.instanceof(node.obj, _WebSocket))) {
        states[38] = true;
      }
      if (states[39] && node.type === "write" && (JAM.identical(node.obj, _document) && node.id === "cookie")) {
        commit = false;
        break;
      }
      if (!states[39] && node.type === "read" && (node.id === "submit" && JAM.instanceof(node.obj, _HTMLFormElement))) {
        states[39] = true;
      }
      if (states[40] && node.type === "write" && (JAM.identical(node.obj, _document) && node.id === "cookie")) {
        commit = false;
        break;
      }
      if (!states[40] && node.type === "read" && (node.id === "appendChild" && JAM.instanceof(node.obj, _HTMLElement))) {
        states[40] = true;
      }
      if (states[41] && node.type === "write" && (JAM.identical(node.obj, _document) && node.id === "cookie")) {
        commit = false;
        break;
      }
      if (!states[41] && node.type === "write" && (node.id === "src" && JAM.instanceof(node.obj, _HTMLElement))) {
        states[41] = true;
      }
      if (states[42] && node.type === "write" && (JAM.identical(node.obj, _document) && node.id === "cookie")) {
        commit = false;
        break;
      }
      if (!states[42] && node.type === "invoke" && (JAM.identical(node.value, _HTMLDocument_prototype_write) && (node.argc > 0 && typeof node.args[0] === "string" && __String_prototype_indexOf_call_bind__String_prototype_indexOf_(node.args[0], "script") > -1))) {
        states[42] = true;
      }
      if (states[43] && node.type === "write" && (JAM.identical(node.obj, _document) && node.id === "cookie")) {
        commit = false;
        break;
      }
      if (!states[43] && node.type === "invoke" && (JAM.identical(node.value, _HTMLDocument_prototype_createElement) && (node.argc > 0 && node.args[0] === "script"))) {
        states[43] = true;
      }
      if (states[44] && node.type === "write" && (JAM.identical(node.obj, _document) && node.id === "cookie")) {
        commit = false;
        break;
      }
      if (!states[44] && node.type === "invoke" && (JAM.identical(node.value, _HTMLDocument_prototype_write) && (node.argc > 0 && node.args[0] !== _undefined))) {
        states[44] = true;
      }
      if (node.type === "invoke" && (JAM.identical(node.value, _HTMLAudioElement_prototype_setAttribute) && (node.argc > 0 && node.args[0] === "src") && (node.argc > 1 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.args[1])) || JAM.identical(node.value, _HTMLFrameElement_prototype_setAttribute) && (node.argc > 0 && node.args[0] === "src") && (node.argc > 1 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.args[1])) || JAM.identical(node.value, 
      _HTMLIFrameElement_prototype_setAttribute) && (node.argc > 0 && node.args[0] === "src") && (node.argc > 1 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.args[1])) || JAM.identical(node.value, _HTMLImageElement_prototype_setAttribute) && (node.argc > 0 && node.args[0] === "src") && (node.argc > 1 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.args[1])) || JAM.identical(node.value, _HTMLInputElement_prototype_setAttribute) && 
      (node.argc > 0 && node.args[0] === "src") && (node.argc > 1 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.args[1])) || JAM.identical(node.value, _HTMLScriptElement_prototype_setAttribute) && (node.argc > 0 && node.args[0] === "src") && (node.argc > 1 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.args[1])) || JAM.identical(node.value, _HTMLSourceElement_prototype_setAttribute) && (node.argc > 0 && node.args[0] === 
      "src") && (node.argc > 1 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.args[1])) || JAM.identical(node.value, _HTMLVideoElement_prototype_setAttribute) && (node.argc > 0 && node.args[0] === "src") && (node.argc > 1 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.args[1])))) {
        commit = false;
        break;
      }
      if (states[45] && node.type === "write" && (JAM.identical(node.obj, _document) && node.id === "cookie")) {
        commit = false;
        break;
      }
      if (!states[45] && node.type === "invoke" && (JAM.identical(node.value, _HTMLFormElement_prototype_setAttribute) && (node.argc > 0 && node.args[0] === "action"))) {
        states[45] = true;
      }
      if (states[46] && node.type === "write" && (JAM.identical(node.obj, _document) && node.id === "cookie")) {
        commit = false;
        break;
      }
      if (!states[46] && node.type === "invoke" && JAM.identical(node.value, _HTMLFormElement_prototype_submit)) {
        states[46] = true;
      }
      if (states[47] && node.type === "write" && (JAM.identical(node.obj, _document) && node.id === "cookie")) {
        commit = false;
        break;
      }
      if (!states[47] && node.type === "read" && (node.id === "setAttribute" && true && node.id === "src")) {
        states[47] = true;
      }
      if (states[48] && node.type === "write" && (JAM.identical(node.obj, _document) && node.id === "cookie")) {
        commit = false;
        break;
      }
      if (!states[48] && node.type === "read" && (node.id === "setAttribute" && true && node.id === "action")) {
        states[48] = true;
      }
      if (states[49] && node.type === "write" && (JAM.identical(node.obj, _document) && node.id === "cookie")) {
        commit = false;
        break;
      }
      if (!states[49] && node.type === "read" && (node.id === "appendChild" && JAM.instanceof(node.obj, _HTMLElement))) {
        states[49] = true;
      }
    }
    if (commit) {
      JAM.process(tx);
    } else {
      JAM.prevent(tx);
    }
  }
  pFull.subsumedBy = pFull;
  Object.freeze(pFull);
  function p110(tx) {
    var commit = true;
    var as = tx.getReadSequence();
    var len = as.length;
    for (var i = 0;i < len;i++) {
      var node = as[i];
      if (!states[1] && (node.id === "getElementById" && JAM.instanceof(node.obj, _HTMLDocument) || node.id === "getElementsByTagName" && JAM.instanceof(node.obj, _HTMLDocument))) {
        states[1] = true;
      }
      if (node.id === "cookie" && JAM.instanceof(node.obj, _HTMLDocument) || node.id === "textContent" && node.obj["className"] === "write-only non-editable") {
        commit = false;
        break;
      }
      if (states[6] && (node.id === "textContent" && node.obj["className"] === "destructive-read read-only")) {
        commit = false;
        break;
      }
      if (!states[6] && (node.id === "textContent" && node.obj["className"] === "destructive-read read-only")) {
        states[6] = true;
      }
      if (states[29] && !states[30] && node.id === "switch") {
        states[30] = true;
      }
      if (states[28] && !states[29] && (JAM.identical(node.obj, _document) && node.id === "write")) {
        states[29] = true;
      }
      if (states[26] && !states[27] && node.id === "switch") {
        states[27] = true;
      }
      if (states[25] && !states[26] && (JAM.identical(node.obj, _document) && node.id === "write")) {
        states[26] = true;
      }
      if (states[23] && !states[24] && node.id === "switch") {
        states[24] = true;
      }
      if (states[22] && !states[23] && (JAM.identical(node.obj, _document) && node.id === "write")) {
        states[23] = true;
      }
      if (states[20] && !states[21] && node.id === "switch") {
        states[21] = true;
      }
      if (states[19] && !states[20] && (JAM.identical(node.obj, _document) && node.id === "write")) {
        states[20] = true;
      }
      if (states[17] && !states[18] && node.id === "switch") {
        states[18] = true;
      }
      if (states[16] && !states[17] && (JAM.identical(node.obj, _document) && node.id === "write")) {
        states[17] = true;
      }
      if (states[14] && !states[15] && node.id === "switch") {
        states[15] = true;
      }
      if (states[13] && !states[14] && (JAM.identical(node.obj, _document) && node.id === "write")) {
        states[14] = true;
      }
      if (states[11] && !states[12] && node.id === "switch") {
        states[12] = true;
      }
      if (states[10] && !states[11] && (JAM.identical(node.obj, _document) && node.id === "write")) {
        states[11] = true;
      }
      if (!states[10] && (node.id === "eval" && JAM.instanceof(node.obj, _Window))) {
        states[10] = true;
      }
      if (!states[35] && (node.id === "open" && JAM.instanceof(node.obj, _XMLHttpRequest))) {
        states[35] = true;
      }
      if (!states[36] && (node.id === "openDialog" && JAM.instanceof(node.obj, _Window))) {
        states[36] = true;
      }
      if (!states[37] && (node.id === "postMessage" && JAM.instanceof(node.obj, _Window))) {
        states[37] = true;
      }
      if (!states[38] && (node.id === "send" && JAM.instanceof(node.obj, _WebSocket))) {
        states[38] = true;
      }
      if (!states[39] && (node.id === "submit" && JAM.instanceof(node.obj, _HTMLFormElement))) {
        states[39] = true;
      }
      if (!states[40] && (node.id === "appendChild" && JAM.instanceof(node.obj, _HTMLElement))) {
        states[40] = true;
      }
      if (!states[47] && (node.id === "setAttribute" && true && node.id === "src")) {
        states[47] = true;
      }
      if (!states[48] && (node.id === "setAttribute" && true && node.id === "action")) {
        states[48] = true;
      }
      if (!states[49] && (node.id === "appendChild" && JAM.instanceof(node.obj, _HTMLElement))) {
        states[49] = true;
      }
    }
    if (commit) {
      JAM.process(tx);
    } else {
      JAM.prevent(tx);
    }
  }
  p110.subsumedBy = pFull;
  p110.itype = "read";
  Object.freeze(p110);
  function p100(tx) {
    var as = tx.getActionSequence();
    var len = as.length;
    for (var i = 0;i < len && (!states[1] || !states[3] || !states[44] || !states[46]);i++) {
      var node = as[i];
      if (!states[1] && node.type === "read" && (node.id === "getElementById" && JAM.instanceof(node.obj, _HTMLDocument))) {
        states[1] = true;
      }
      if (!states[3] && node.type === "invoke" && JAM.identical(node.value, _Storage_prototype_getItem)) {
        states[3] = true;
      }
      if (!states[44] && node.type === "invoke" && (JAM.identical(node.value, _HTMLDocument_prototype_write) && (node.argc > 0 && node.args[0] !== _undefined))) {
        states[44] = true;
      }
      if (!states[46] && node.type === "invoke" && JAM.identical(node.value, _HTMLFormElement_prototype_submit)) {
        states[46] = true;
      }
    }
    JAM.process(tx);
  }
  p100.subsumedBy = pFull;
  Object.freeze(p100);
  function p103(tx) {
    var as = tx.getActionSequence();
    var len = as.length;
    for (var i = 0;i < len && (!states[1] || !states[3] || !states[4] || !states[42] || !states[43] || !states[44] || !states[45] || !states[46]);i++) {
      var node = as[i];
      if (!states[1] && node.type === "read" && (node.id === "getElementById" && JAM.instanceof(node.obj, _HTMLDocument))) {
        states[1] = true;
      }
      if (!states[3] && node.type === "invoke" && JAM.identical(node.value, _Storage_prototype_getItem)) {
        states[3] = true;
      }
      if (!states[4] && node.type === "invoke" && (JAM.identical(node.value, _HTMLDocument_prototype_getElementById) && (node.argc > 0 && node.args[0] === "content"))) {
        states[4] = true;
      }
      if (!states[42] && node.type === "invoke" && (JAM.identical(node.value, _HTMLDocument_prototype_write) && (node.argc > 0 && typeof node.args[0] === "string" && __String_prototype_indexOf_call_bind__String_prototype_indexOf_(node.args[0], "script") > -1))) {
        states[42] = true;
      }
      if (!states[43] && node.type === "invoke" && (JAM.identical(node.value, _HTMLDocument_prototype_createElement) && (node.argc > 0 && node.args[0] === "script"))) {
        states[43] = true;
      }
      if (!states[44] && node.type === "invoke" && (JAM.identical(node.value, _HTMLDocument_prototype_write) && (node.argc > 0 && node.args[0] !== _undefined))) {
        states[44] = true;
      }
      if (!states[45] && node.type === "invoke" && (JAM.identical(node.value, _HTMLFormElement_prototype_setAttribute) && (node.argc > 0 && node.args[0] === "action"))) {
        states[45] = true;
      }
      if (!states[46] && node.type === "invoke" && JAM.identical(node.value, _HTMLFormElement_prototype_submit)) {
        states[46] = true;
      }
    }
    JAM.process(tx);
  }
  p103.subsumedBy = pFull;
  Object.freeze(p103);
  function p111(tx) {
    var commit = true;
    var as = tx.getWriteSequence();
    var len = as.length;
    for (var i = 0;i < len;i++) {
      var node = as[i];
      if (states[1] && (JAM.identical(node.obj, _document) && node.id === "cookie")) {
        commit = false;
        break;
      }
      if (states[3] && (JAM.identical(node.obj, _document) && node.id === "cookie")) {
        commit = false;
        break;
      }
      if (states[5] && (JAM.identical(node.obj, _document) && node.id === "cookie")) {
        commit = false;
        break;
      }
      if (states[4] && !states[5] && (node.id === "src" && JAM.instanceof(node.obj, _HTMLElement))) {
        states[5] = true;
      }
      if (true && JAM.instanceof(node.obj, _CSSStyleDeclaration) && node.id !== "display" || node.id === "textContent" && node.obj["className"] === "destructive-read read-only" || node.id === "src" && JAM.instanceof(node.obj, _HTMLElement) && node.value !== "plaintext-test.png") {
        commit = false;
        break;
      }
      if (states[7] && (node.id === "textContent" && node.obj["className"] === "write-only non-editable")) {
        commit = false;
        break;
      }
      if (!states[7] && (node.id === "textContent" && node.obj["className"] === "write-only non-editable")) {
        states[7] = true;
      }
      if (states[9] && (JAM.identical(node.obj, _document) && node.id === "cookie")) {
        commit = false;
        break;
      }
      if (states[30] && !states[9] && node.id === "innerHTML") {
        states[9] = true;
      }
      if (states[27] && !states[28] && node.id === "innerHTML") {
        states[28] = true;
      }
      if (states[24] && !states[25] && node.id === "innerHTML") {
        states[25] = true;
      }
      if (states[21] && !states[22] && node.id === "innerHTML") {
        states[22] = true;
      }
      if (states[18] && !states[19] && node.id === "innerHTML") {
        states[19] = true;
      }
      if (states[15] && !states[16] && node.id === "innerHTML") {
        states[16] = true;
      }
      if (states[12] && !states[13] && node.id === "innerHTML") {
        states[13] = true;
      }
      if (states[31] && (JAM.identical(node.obj, _document) && node.id === "cookie")) {
        commit = false;
        break;
      }
      if (!states[31] && (node.id === "location" && JAM.instanceof(node.obj, _Window))) {
        states[31] = true;
      }
      if (states[32] && (JAM.identical(node.obj, _document) && node.id === "cookie")) {
        commit = false;
        break;
      }
      if (!states[32] && (node.id === "href" && JAM.instanceof(node.obj, _HTMLElement))) {
        states[32] = true;
      }
      if (states[33] && (JAM.identical(node.obj, _document) && node.id === "cookie")) {
        commit = false;
        break;
      }
      if (!states[33] && (node.id === "cookie" && JAM.instanceof(node.obj, _HTMLDocument))) {
        states[33] = true;
      }
      if (states[34] && (JAM.identical(node.obj, _document) && node.id === "cookie")) {
        commit = false;
        break;
      }
      if (!states[34] && (node.id === "action" && JAM.instanceof(node.obj, _HTMLFormElement))) {
        states[34] = true;
      }
      if (states[35] && (JAM.identical(node.obj, _document) && node.id === "cookie")) {
        commit = false;
        break;
      }
      if (states[36] && (JAM.identical(node.obj, _document) && node.id === "cookie")) {
        commit = false;
        break;
      }
      if (states[37] && (JAM.identical(node.obj, _document) && node.id === "cookie")) {
        commit = false;
        break;
      }
      if (states[38] && (JAM.identical(node.obj, _document) && node.id === "cookie")) {
        commit = false;
        break;
      }
      if (states[39] && (JAM.identical(node.obj, _document) && node.id === "cookie")) {
        commit = false;
        break;
      }
      if (states[40] && (JAM.identical(node.obj, _document) && node.id === "cookie")) {
        commit = false;
        break;
      }
      if (states[41] && (JAM.identical(node.obj, _document) && node.id === "cookie")) {
        commit = false;
        break;
      }
      if (!states[41] && (node.id === "src" && JAM.instanceof(node.obj, _HTMLElement))) {
        states[41] = true;
      }
      if (states[42] && (JAM.identical(node.obj, _document) && node.id === "cookie")) {
        commit = false;
        break;
      }
      if (states[43] && (JAM.identical(node.obj, _document) && node.id === "cookie")) {
        commit = false;
        break;
      }
      if (states[44] && (JAM.identical(node.obj, _document) && node.id === "cookie")) {
        commit = false;
        break;
      }
      if (states[45] && (JAM.identical(node.obj, _document) && node.id === "cookie")) {
        commit = false;
        break;
      }
      if (states[46] && (JAM.identical(node.obj, _document) && node.id === "cookie")) {
        commit = false;
        break;
      }
      if (states[47] && (JAM.identical(node.obj, _document) && node.id === "cookie")) {
        commit = false;
        break;
      }
      if (states[48] && (JAM.identical(node.obj, _document) && node.id === "cookie")) {
        commit = false;
        break;
      }
      if (states[49] && (JAM.identical(node.obj, _document) && node.id === "cookie")) {
        commit = false;
        break;
      }
    }
    if (commit) {
      JAM.process(tx);
    } else {
      JAM.prevent(tx);
    }
  }
  p111.subsumedBy = pFull;
  p111.itype = "write";
  Object.freeze(p111);
  function p101(tx) {
    var as = tx.getActionSequence();
    var len = as.length;
    for (var i = 0;i < len && (!states[3] || !states[35] || !states[46]);i++) {
      var node = as[i];
      if (!states[3] && node.type === "invoke" && JAM.identical(node.value, _Storage_prototype_getItem)) {
        states[3] = true;
      }
      if (!states[35] && node.type === "read" && (node.id === "open" && JAM.instanceof(node.obj, _XMLHttpRequest))) {
        states[35] = true;
      }
      if (!states[46] && node.type === "invoke" && JAM.identical(node.value, _HTMLFormElement_prototype_submit)) {
        states[46] = true;
      }
    }
    JAM.process(tx);
  }
  p101.subsumedBy = pFull;
  Object.freeze(p101);
  function p99(tx) {
    var as = tx.getActionSequence();
    var len = as.length;
    for (var i = 0;i < len && (!states[3] || !states[4] || !states[29] || !states[26] || !states[23] || !states[20] || !states[17] || !states[14] || !states[11] || !states[42] || !states[43] || !states[44] || !states[45] || !states[46]);i++) {
      var node = as[i];
      if (!states[3] && node.type === "invoke" && JAM.identical(node.value, _Storage_prototype_getItem)) {
        states[3] = true;
      }
      if (!states[4] && node.type === "invoke" && (JAM.identical(node.value, _HTMLDocument_prototype_getElementById) && (node.argc > 0 && node.args[0] === "content"))) {
        states[4] = true;
      }
      if (states[28] && !states[29] && node.type === "read" && (JAM.identical(node.obj, _document) && node.id === "write")) {
        states[29] = true;
      }
      if (states[25] && !states[26] && node.type === "read" && (JAM.identical(node.obj, _document) && node.id === "write")) {
        states[26] = true;
      }
      if (states[22] && !states[23] && node.type === "read" && (JAM.identical(node.obj, _document) && node.id === "write")) {
        states[23] = true;
      }
      if (states[19] && !states[20] && node.type === "read" && (JAM.identical(node.obj, _document) && node.id === "write")) {
        states[20] = true;
      }
      if (states[16] && !states[17] && node.type === "read" && (JAM.identical(node.obj, _document) && node.id === "write")) {
        states[17] = true;
      }
      if (states[13] && !states[14] && node.type === "read" && (JAM.identical(node.obj, _document) && node.id === "write")) {
        states[14] = true;
      }
      if (states[10] && !states[11] && node.type === "read" && (JAM.identical(node.obj, _document) && node.id === "write")) {
        states[11] = true;
      }
      if (!states[42] && node.type === "invoke" && (JAM.identical(node.value, _HTMLDocument_prototype_write) && (node.argc > 0 && typeof node.args[0] === "string" && __String_prototype_indexOf_call_bind__String_prototype_indexOf_(node.args[0], "script") > -1))) {
        states[42] = true;
      }
      if (!states[43] && node.type === "invoke" && (JAM.identical(node.value, _HTMLDocument_prototype_createElement) && (node.argc > 0 && node.args[0] === "script"))) {
        states[43] = true;
      }
      if (!states[44] && node.type === "invoke" && (JAM.identical(node.value, _HTMLDocument_prototype_write) && (node.argc > 0 && node.args[0] !== _undefined))) {
        states[44] = true;
      }
      if (!states[45] && node.type === "invoke" && (JAM.identical(node.value, _HTMLFormElement_prototype_setAttribute) && (node.argc > 0 && node.args[0] === "action"))) {
        states[45] = true;
      }
      if (!states[46] && node.type === "invoke" && JAM.identical(node.value, _HTMLFormElement_prototype_submit)) {
        states[46] = true;
      }
    }
    JAM.process(tx);
  }
  p99.subsumedBy = pFull;
  Object.freeze(p99);
  function p102(tx) {
    var as = tx.getCallSequence();
    var len = as.length;
    for (var i = 0;i < len && (!states[3] || !states[4] || !states[42] || !states[43] || !states[44] || !states[45] || !states[46]);i++) {
      var node = as[i];
      if (!states[3] && JAM.identical(node.value, _Storage_prototype_getItem)) {
        states[3] = true;
      }
      if (!states[4] && (JAM.identical(node.value, _HTMLDocument_prototype_getElementById) && (node.argc > 0 && node.args[0] === "content"))) {
        states[4] = true;
      }
      if (!states[42] && (JAM.identical(node.value, _HTMLDocument_prototype_write) && (node.argc > 0 && typeof node.args[0] === "string" && __String_prototype_indexOf_call_bind__String_prototype_indexOf_(node.args[0], "script") > -1))) {
        states[42] = true;
      }
      if (!states[43] && (JAM.identical(node.value, _HTMLDocument_prototype_createElement) && (node.argc > 0 && node.args[0] === "script"))) {
        states[43] = true;
      }
      if (!states[44] && (JAM.identical(node.value, _HTMLDocument_prototype_write) && (node.argc > 0 && node.args[0] !== _undefined))) {
        states[44] = true;
      }
      if (!states[45] && (JAM.identical(node.value, _HTMLFormElement_prototype_setAttribute) && (node.argc > 0 && node.args[0] === "action"))) {
        states[45] = true;
      }
      if (!states[46] && JAM.identical(node.value, _HTMLFormElement_prototype_submit)) {
        states[46] = true;
      }
    }
    JAM.process(tx);
  }
  p102.subsumedBy = pFull;
  p102.itype = "invoke";
  Object.freeze(p102);
  function p104(tx) {
    var as = tx.getCallSequence();
    var len = as.length;
    for (var i = 0;i < len && (!states[3] || !states[44] || !states[46]);i++) {
      var node = as[i];
      if (!states[3] && JAM.identical(node.value, _Storage_prototype_getItem)) {
        states[3] = true;
      }
      if (!states[44] && (JAM.identical(node.value, _HTMLDocument_prototype_write) && (node.argc > 0 && node.args[0] !== _undefined))) {
        states[44] = true;
      }
      if (!states[46] && JAM.identical(node.value, _HTMLFormElement_prototype_submit)) {
        states[46] = true;
      }
    }
    JAM.process(tx);
  }
  p104.subsumedBy = pFull;
  p104.itype = "invoke";
  Object.freeze(p104);
  function p55(tx) {
    var commit = true;
    var as = tx.getWriteSequence();
    var len = as.length;
    for (var i = 0;i < len;i++) {
      var node = as[i];
      if (true && JAM.instanceof(node.obj, _CSSStyleDeclaration) && node.id !== "display") {
        commit = false;
        break;
      }
      if (states[30] && !states[9] && node.id === "innerHTML") {
        states[9] = true;
      }
      if (states[27] && !states[28] && node.id === "innerHTML") {
        states[28] = true;
      }
      if (states[24] && !states[25] && node.id === "innerHTML") {
        states[25] = true;
      }
      if (states[21] && !states[22] && node.id === "innerHTML") {
        states[22] = true;
      }
      if (states[18] && !states[19] && node.id === "innerHTML") {
        states[19] = true;
      }
      if (states[15] && !states[16] && node.id === "innerHTML") {
        states[16] = true;
      }
      if (states[12] && !states[13] && node.id === "innerHTML") {
        states[13] = true;
      }
    }
    if (commit) {
      JAM.process(tx);
    } else {
      JAM.prevent(tx);
    }
  }
  p55.subsumedBy = pFull;
  p55.itype = "write";
  Object.freeze(p55);
  function p12(tx) {
    var commit = true;
    var as = tx.getWriteSequence();
    var len = as.length;
    for (var i = 0;i < len;i++) {
      var node = as[i];
      if (true && JAM.instanceof(node.obj, _CSSStyleDeclaration) && node.id !== "display") {
        commit = false;
        break;
      }
    }
    if (commit) {
      JAM.process(tx);
    } else {
      JAM.prevent(tx);
    }
  }
  p12.subsumedBy = pFull;
  p12.itype = "write";
  Object.freeze(p12);
  return{p110:p110, p100:p100, p103:p103, p111:p111, p101:p101, p99:p99, p102:p102, p104:p104, p55:p55, p12:p12, pFull:pFull, woven:true};
}()