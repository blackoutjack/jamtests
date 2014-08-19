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
      if(node.type === "read" && (node.id === "write" && JAM.instanceof(node.obj, _HTMLDocument) || node.id === "writeln" && JAM.instanceof(node.obj, _HTMLDocument) || node.id === "open" && JAM.instanceof(node.obj, _XMLHttpRequest) || node.id === "open" && JAM.instanceof(node.obj, _Window) || node.id === "openDialog" && JAM.instanceof(node.obj, _Window) || node.id === "postMessage" && JAM.instanceof(node.obj, _Window) || node.id === "send" && JAM.instanceof(node.obj, _WebSocket) || node.id === "submit" && 
      JAM.instanceof(node.obj, _HTMLFormElement) || node.id === "setAttribute" && true && JAM.identical(node.id, "src") || node.id === "setAttribute" && true && JAM.identical(node.id, "action"))) {
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
  function p1(tx) {
    var commit = true;
    var as = tx.getWriteSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.id === "src" && JAM.instanceof(node.obj, _HTMLElement) && !JAM.identical(node.value, "plaintext-test.png")) {
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
  p1.itype = "write";
  Object.freeze(p1);
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
  function p18(tx) {
    var commit = true;
    var as = tx.getReadSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.id === "write" && JAM.instanceof(node.obj, _HTMLDocument) || node.id === "writeln" && JAM.instanceof(node.obj, _HTMLDocument) || node.id === "open" && JAM.instanceof(node.obj, _XMLHttpRequest) || node.id === "open" && JAM.instanceof(node.obj, _Window) || node.id === "openDialog" && JAM.instanceof(node.obj, _Window) || node.id === "postMessage" && JAM.instanceof(node.obj, _Window) || node.id === "send" && JAM.instanceof(node.obj, _WebSocket) || node.id === "submit" && JAM.instanceof(node.obj, 
      _HTMLFormElement) || node.id === "setAttribute" && true && JAM.identical(node.id, "src") || node.id === "setAttribute" && true && JAM.identical(node.id, "action")) {
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
  p18.subsumedBy = pFull;
  p18.itype = "read";
  Object.freeze(p18);
  function p17(tx) {
    var commit = true;
    var as = tx.getReadSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.id === "setAttribute" && true && JAM.identical(node.id, "src") || node.id === "setAttribute" && true && JAM.identical(node.id, "action")) {
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
  p17.subsumedBy = pFull;
  p17.itype = "read";
  Object.freeze(p17);
  return{p1:p1, p6:p6, p18:p18, p17:p17, pFull:pFull, woven:true}
}()