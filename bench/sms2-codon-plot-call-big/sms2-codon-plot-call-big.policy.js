var policy = function() {
  var _HTMLElement = HTMLElement;
  var _HTMLDocument = HTMLDocument;
  var _Window = Window;
  var _HTMLFormElement = HTMLFormElement;
  var _XMLHttpRequest_prototype_open = XMLHttpRequest.prototype.open;
  var _Window_prototype_open = Window.prototype.open;
  var _Window_prototype_openDialog = Window.prototype.openDialog;
  var _Window_prototype_postMessage = Window.prototype.postMessage;
  var _WebSocket_prototype_send = WebSocket.prototype.send;
  var _HTMLFormElement_prototype_submit = HTMLFormElement.prototype.submit;
  var _HTMLDocument_prototype_write = HTMLDocument.prototype.write;
  var _String_prototype_indexOf = String.prototype.indexOf;
  var __String_prototype_indexOf_call_bind__String_prototype_indexOf_ = _String_prototype_indexOf.call.bind(_String_prototype_indexOf);
  var _HTMLDocument_prototype_writeln = HTMLDocument.prototype.writeln;
  function pFull(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "write" && (node.id === "src" && JAM.instanceof(node.obj, _HTMLElement) && !JAM.identical(node.value, "plaintext-test.png") || node.id === "href" && JAM.instanceof(node.obj, _HTMLElement) || node.id === "innerHTML" || node.id === "cookie" && JAM.instanceof(node.obj, _HTMLDocument) || node.id === "location" && JAM.instanceof(node.obj, _Window) || node.id === "action" && JAM.instanceof(node.obj, _HTMLFormElement))) {
        commit = false;
        break
      }
      if(node.type === "call" && (JAM.identical(node.value, _XMLHttpRequest_prototype_open) || JAM.identical(node.value, _Window_prototype_open) && node.argc > 0 && !JAM.identical(node.args[0], "") || JAM.identical(node.value, _Window_prototype_openDialog) || JAM.identical(node.value, _Window_prototype_postMessage) || JAM.identical(node.value, _WebSocket_prototype_send) || JAM.identical(node.value, _HTMLFormElement_prototype_submit) || JAM.identical(node.value, _HTMLDocument_prototype_write) && node.argc > 
      0 && typeof node.args[0] === "string" && __String_prototype_indexOf_call_bind__String_prototype_indexOf_(node.args[0], "script") > -1 || JAM.identical(node.value, _HTMLDocument_prototype_writeln))) {
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
  pFull.subsumedBy = pFull;
  Object.freeze(pFull);
  function p12(tx) {
    var commit = true;
    var as = tx.getCallSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(JAM.identical(node.value, _XMLHttpRequest_prototype_open) || JAM.identical(node.value, _Window_prototype_open) && node.argc > 0 && !JAM.identical(node.args[0], "") || JAM.identical(node.value, _Window_prototype_openDialog) || JAM.identical(node.value, _Window_prototype_postMessage) || JAM.identical(node.value, _WebSocket_prototype_send) || JAM.identical(node.value, _HTMLFormElement_prototype_submit) || JAM.identical(node.value, _HTMLDocument_prototype_writeln)) {
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
  p12.subsumedBy = pFull;
  p12.itype = "call";
  Object.freeze(p12);
  function p14(tx) {
    var commit = true;
    var as = tx.getCallSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(JAM.identical(node.value, _XMLHttpRequest_prototype_open) || JAM.identical(node.value, _Window_prototype_openDialog) || JAM.identical(node.value, _Window_prototype_postMessage) || JAM.identical(node.value, _WebSocket_prototype_send) || JAM.identical(node.value, _HTMLFormElement_prototype_submit) || JAM.identical(node.value, _HTMLDocument_prototype_writeln)) {
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
  p14.itype = "call";
  Object.freeze(p14);
  function p13(tx) {
    var commit = true;
    var as = tx.getCallSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(JAM.identical(node.value, _XMLHttpRequest_prototype_open) || JAM.identical(node.value, _Window_prototype_open) && node.argc > 0 && !JAM.identical(node.args[0], "") || JAM.identical(node.value, _Window_prototype_openDialog) || JAM.identical(node.value, _Window_prototype_postMessage) || JAM.identical(node.value, _WebSocket_prototype_send) || JAM.identical(node.value, _HTMLFormElement_prototype_submit) || JAM.identical(node.value, _HTMLDocument_prototype_write) && node.argc > 0 && typeof node.args[0] === 
      "string" && __String_prototype_indexOf_call_bind__String_prototype_indexOf_(node.args[0], "script") > -1 || JAM.identical(node.value, _HTMLDocument_prototype_writeln)) {
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
  p13.subsumedBy = pFull;
  p13.itype = "call";
  Object.freeze(p13);
  return{p12:p12, p14:p14, p13:p13, pFull:pFull, woven:true}
}()