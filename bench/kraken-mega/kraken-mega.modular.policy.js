var policy = function() {
  var states = [0];
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
  function processAll(tx) {
    var commit = true;
    var s1 = states.indexOf(1) > -1;
    var s2 = states.indexOf(2) > -1;
    var s3 = states.indexOf(3) > -1;
    var s4 = states.indexOf(4) > -1;
    var s5 = states.indexOf(5) > -1;
    var s6 = states.indexOf(6) > -1;
    var s7 = states.indexOf(7) > -1;
    var s8 = states.indexOf(8) > -1;
    var s30 = states.indexOf(30) > -1;
    var s29 = states.indexOf(29) > -1;
    var s28 = states.indexOf(28) > -1;
    var s27 = states.indexOf(27) > -1;
    var s26 = states.indexOf(26) > -1;
    var s25 = states.indexOf(25) > -1;
    var s24 = states.indexOf(24) > -1;
    var s23 = states.indexOf(23) > -1;
    var s22 = states.indexOf(22) > -1;
    var s21 = states.indexOf(21) > -1;
    var s20 = states.indexOf(20) > -1;
    var s19 = states.indexOf(19) > -1;
    var s18 = states.indexOf(18) > -1;
    var s17 = states.indexOf(17) > -1;
    var s16 = states.indexOf(16) > -1;
    var s15 = states.indexOf(15) > -1;
    var s14 = states.indexOf(14) > -1;
    var s13 = states.indexOf(13) > -1;
    var s12 = states.indexOf(12) > -1;
    var s11 = states.indexOf(11) > -1;
    var s10 = states.indexOf(10) > -1;
    var s9 = states.indexOf(9) > -1;
    var s31 = states.indexOf(31) > -1;
    var s32 = states.indexOf(32) > -1;
    var s33 = states.indexOf(33) > -1;
    var s34 = states.indexOf(34) > -1;
    var s35 = states.indexOf(35) > -1;
    var s36 = states.indexOf(36) > -1;
    var s37 = states.indexOf(37) > -1;
    var s38 = states.indexOf(38) > -1;
    var s39 = states.indexOf(39) > -1;
    var s40 = states.indexOf(40) > -1;
    var s41 = states.indexOf(41) > -1;
    var s42 = states.indexOf(42) > -1;
    var s43 = states.indexOf(43) > -1;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(s1 && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(!s1 && node.type === "read" && (node.id === "getElementById" && JAM.instanceof(node.obj, _HTMLDocument) || node.id === "getElementsByTagName" && JAM.instanceof(node.obj, _HTMLDocument))) {
        s1 = true;
        states.push(1)
      }
      if(node.type === "read" && (node.id === "cookie" && JAM.instanceof(node.obj, _HTMLDocument) || node.id === "textContent" && JAM.identical(node.obj["className"], "write-only non-editable"))) {
        commit = false;
        break
      }
      if(s2 && node.type === "write" && !JAM.identical(_location["href"], "http://localhost/")) {
        commit = false;
        break
      }
      if(!s2 && node.type === "write" && JAM.identical(_location["href"], "http://localhost/")) {
        s2 = true;
        states.push(2)
      }
      if(node.type === "call" && JAM.identical(node.value, _HTMLDocument_prototype_write) && !JAM.identical(node.args[0], undefined)) {
        commit = false;
        break
      }
      if(s3 && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(!s3 && node.type === "call" && JAM.identical(node.value, _Storage_prototype_getItem)) {
        s3 = true;
        states.push(3)
      }
      if(s4 && node.type === "write" && node.id === "src" && JAM.instanceof(node.obj, _HTMLElement)) {
        commit = false;
        break
      }
      if(!s4 && node.type === "call" && JAM.identical(node.value, _HTMLDocument_prototype_getElementById) && JAM.identical(node.args[0], "content")) {
        s4 = true;
        states.push(4)
      }
      if(node.type === "write" && (true && JAM.instanceof(node.obj, _CSSStyleDeclaration) && !JAM.identical(node.id, "display") || node.id === "textContent" && JAM.identical(node.obj["className"], "destructive-read read-only") || node.id === "x" && JAM.identical(node.value, 2) && node.id === "y" && JAM.identical(node.value, 3))) {
        commit = false;
        break
      }
      if(s5 && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(!s5 && node.type === "write" && node.id === "jam#setCookieSentinel" && JAM.identical(node.value, true)) {
        s5 = true;
        states.push(5)
      }
      if(s6 && node.type === "read" && node.id === "textContent" && JAM.identical(node.obj["className"], "destructive-read read-only")) {
        commit = false;
        break
      }
      if(!s6 && node.type === "read" && node.id === "textContent" && JAM.identical(node.obj["className"], "destructive-read read-only")) {
        s6 = true;
        states.push(6)
      }
      if(s7 && node.type === "write" && node.id === "textContent" && JAM.identical(node.obj["className"], "write-only non-editable")) {
        commit = false;
        break
      }
      if(!s7 && node.type === "write" && node.id === "textContent" && JAM.identical(node.obj["className"], "write-only non-editable")) {
        s7 = true;
        states.push(7)
      }
      if(s8 && node.type === "write" && node.id === "x" && JAM.identical(node.value, 2E6)) {
        commit = false;
        break
      }
      if(!s8 && node.type === "write" && node.id === "x" && JAM.identical(node.value, 2E6)) {
        s8 = true;
        states.push(8)
      }
      if(s30 && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(s29 && !s30 && node.type === "write" && node.id === "innerHTML") {
        s30 = true;
        states.push(30)
      }
      if(s28 && !s29 && node.type === "read" && node.id === "switch") {
        s29 = true;
        states.push(29)
      }
      if(s27 && !s28 && node.type === "read" && JAM.identical(node.obj, _document) && node.id === "write") {
        s28 = true;
        states.push(28)
      }
      if(s26 && !s27 && node.type === "write" && node.id === "innerHTML") {
        s27 = true;
        states.push(27)
      }
      if(s25 && !s26 && node.type === "read" && node.id === "switch") {
        s26 = true;
        states.push(26)
      }
      if(s24 && !s25 && node.type === "read" && JAM.identical(node.obj, _document) && node.id === "write") {
        s25 = true;
        states.push(25)
      }
      if(s23 && !s24 && node.type === "write" && node.id === "innerHTML") {
        s24 = true;
        states.push(24)
      }
      if(s22 && !s23 && node.type === "read" && node.id === "switch") {
        s23 = true;
        states.push(23)
      }
      if(s21 && !s22 && node.type === "read" && JAM.identical(node.obj, _document) && node.id === "write") {
        s22 = true;
        states.push(22)
      }
      if(s20 && !s21 && node.type === "write" && node.id === "innerHTML") {
        s21 = true;
        states.push(21)
      }
      if(s19 && !s20 && node.type === "read" && node.id === "switch") {
        s20 = true;
        states.push(20)
      }
      if(s18 && !s19 && node.type === "read" && JAM.identical(node.obj, _document) && node.id === "write") {
        s19 = true;
        states.push(19)
      }
      if(s17 && !s18 && node.type === "write" && node.id === "innerHTML") {
        s18 = true;
        states.push(18)
      }
      if(s16 && !s17 && node.type === "read" && node.id === "switch") {
        s17 = true;
        states.push(17)
      }
      if(s15 && !s16 && node.type === "read" && JAM.identical(node.obj, _document) && node.id === "write") {
        s16 = true;
        states.push(16)
      }
      if(s14 && !s15 && node.type === "write" && node.id === "innerHTML") {
        s15 = true;
        states.push(15)
      }
      if(s13 && !s14 && node.type === "read" && node.id === "switch") {
        s14 = true;
        states.push(14)
      }
      if(s12 && !s13 && node.type === "read" && JAM.identical(node.obj, _document) && node.id === "write") {
        s13 = true;
        states.push(13)
      }
      if(s11 && !s12 && node.type === "write" && node.id === "innerHTML") {
        s12 = true;
        states.push(12)
      }
      if(s10 && !s11 && node.type === "read" && node.id === "switch") {
        s11 = true;
        states.push(11)
      }
      if(s9 && !s10 && node.type === "read" && JAM.identical(node.obj, _document) && node.id === "write") {
        s10 = true;
        states.push(10)
      }
      if(!s9 && node.type === "read" && node.id === "eval" && JAM.instanceof(node.obj, _Window)) {
        s9 = true;
        states.push(9)
      }
      if(s31 && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(!s31 && node.type === "write" && node.id === "location" && JAM.instanceof(node.obj, _Window)) {
        s31 = true;
        states.push(31)
      }
      if(s32 && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(!s32 && node.type === "write" && node.id === "href" && JAM.instanceof(node.obj, _HTMLElement)) {
        s32 = true;
        states.push(32)
      }
      if(s33 && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(!s33 && node.type === "write" && node.id === "cookie" && JAM.instanceof(node.obj, _HTMLDocument)) {
        s33 = true;
        states.push(33)
      }
      if(s34 && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(!s34 && node.type === "write" && node.id === "action" && JAM.instanceof(node.obj, _HTMLFormElement)) {
        s34 = true;
        states.push(34)
      }
      if(s35 && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(!s35 && node.type === "read" && node.id === "open" && JAM.instanceof(node.obj, _XMLHttpRequest)) {
        s35 = true;
        states.push(35)
      }
      if(s36 && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(!s36 && node.type === "read" && node.id === "openDialog" && JAM.instanceof(node.obj, _Window)) {
        s36 = true;
        states.push(36)
      }
      if(s37 && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(!s37 && node.type === "read" && node.id === "postMessage" && JAM.instanceof(node.obj, _Window)) {
        s37 = true;
        states.push(37)
      }
      if(s38 && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(!s38 && node.type === "read" && node.id === "send" && JAM.instanceof(node.obj, _WebSocket)) {
        s38 = true;
        states.push(38)
      }
      if(s39 && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(!s39 && node.type === "read" && node.id === "submit" && JAM.instanceof(node.obj, _HTMLFormElement)) {
        s39 = true;
        states.push(39)
      }
      if(s40 && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(!s40 && node.type === "read" && node.id === "appendChild" && JAM.instanceof(node.obj, _HTMLElement)) {
        s40 = true;
        states.push(40)
      }
      if(s41 && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(!s41 && node.type === "write" && node.id === "src" && JAM.instanceof(node.obj, _HTMLElement)) {
        s41 = true;
        states.push(41)
      }
      if(s42 && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(!s42 && node.type === "call" && JAM.identical(node.value, _HTMLDocument_prototype_write) && node.argc > 0 && typeof node.args[0] === "string" && __String_prototype_indexOf_call_bind__String_prototype_indexOf_(node.args[0], "script") > -1) {
        s42 = true;
        states.push(42)
      }
      if(s43 && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(!s43 && node.type === "call" && JAM.identical(node.value, _HTMLDocument_prototype_createElement) && JAM.identical(node.args[0], "script")) {
        s43 = true;
        states.push(43)
      }
    }
    if(commit) {
      JAMScript.process(tx)
    }else {
      JAMScript.prevent(tx)
    }
  }
  return{introspectors:{processAll:processAll}}
}()