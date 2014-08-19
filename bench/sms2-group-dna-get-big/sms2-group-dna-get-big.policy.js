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
  function p5(tx) {
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
  p5.subsumedBy = pFull;
  p5.itype = "read";
  Object.freeze(p5);
  function p1(tx) {
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
  p1.subsumedBy = pFull;
  p1.itype = "read";
  Object.freeze(p1);
  return{p5:p5, p1:p1, pFull:pFull, woven:true}
}()