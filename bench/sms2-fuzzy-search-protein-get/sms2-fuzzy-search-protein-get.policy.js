var policy = function() {
  var _HTMLElement = HTMLElement;
  var _HTMLDocument = HTMLDocument;
  var _Window = Window;
  var _HTMLFormElement = HTMLFormElement;
  var _XMLHttpRequest = XMLHttpRequest;
  var _WebSocket = WebSocket;
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
      if(node.type === "read" && (node.id === "open" && JAM.instanceof(node.obj, _XMLHttpRequest) || node.id === "openDialog" && JAM.instanceof(node.obj, _Window) || node.id === "postMessage" && JAM.instanceof(node.obj, _Window) || node.id === "send" && JAM.instanceof(node.obj, _WebSocket) || node.id === "submit" && JAM.instanceof(node.obj, _HTMLFormElement))) {
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
  function p6(tx) {
    var commit = true;
    var as = tx.getWriteSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.id === "src" && JAM.instanceof(node.obj, _HTMLElement) && !JAM.identical(node.value, "plaintext-test.png") || node.id === "href" && JAM.instanceof(node.obj, _HTMLElement) || node.id === "innerHTML" || node.id === "cookie" && JAM.instanceof(node.obj, _HTMLDocument) || node.id === "location" && JAM.instanceof(node.obj, _Window) || node.id === "action" && JAM.instanceof(node.obj, _HTMLFormElement)) {
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
  p6.subsumedBy = pFull;
  p6.itype = "write";
  Object.freeze(p6);
  function p11(tx) {
    var commit = true;
    var as = tx.getReadSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.id === "open" && JAM.instanceof(node.obj, _XMLHttpRequest) || node.id === "openDialog" && JAM.instanceof(node.obj, _Window) || node.id === "postMessage" && JAM.instanceof(node.obj, _Window) || node.id === "send" && JAM.instanceof(node.obj, _WebSocket) || node.id === "submit" && JAM.instanceof(node.obj, _HTMLFormElement)) {
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
  p11.subsumedBy = pFull;
  p11.itype = "read";
  Object.freeze(p11);
  function p7(tx) {
    var commit = true;
    var as = tx.getReadSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.id === "open" && JAM.instanceof(node.obj, _XMLHttpRequest)) {
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
  p7.subsumedBy = pFull;
  p7.itype = "read";
  Object.freeze(p7);
  return{p6:p6, p11:p11, p7:p7, pFull:pFull, woven:true}
}()