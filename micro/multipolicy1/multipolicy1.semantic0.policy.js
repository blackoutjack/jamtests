var policy = function() {
  var _HTMLElement = HTMLElement;
  var _HTMLDocument = HTMLDocument;
  function pFull(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for (var i = 0;i < len;i++) {
      var node = as[i];
      if (node.type === "write" && (node.id === "src" && JAM.instanceof(node.obj, _HTMLElement) && !JAM.identical(node.value, "plaintext-test.png") || node.id === "innerHTML" || node.id === "cookie" && JAM.instanceof(node.obj, _HTMLDocument))) {
        commit = false;
        break;
      }
      if (node.type === "read" && (node.id === "write" && JAM.instanceof(node.obj, _HTMLDocument))) {
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
  pFull.subsumedBy = pFull;
  Object.freeze(pFull);
  function p4(tx) {
    var commit = true;
    var as = tx.getWriteSequence();
    var len = as.length;
    for (var i = 0;i < len;i++) {
      var node = as[i];
      if (node.id === "src" && JAM.instanceof(node.obj, _HTMLElement) && !JAM.identical(node.value, "plaintext-test.png") || node.id === "innerHTML" || node.id === "cookie" && JAM.instanceof(node.obj, _HTMLDocument)) {
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
  p4.subsumedBy = pFull;
  p4.itype = "write";
  Object.freeze(p4);
  function p3(tx) {
    var commit = true;
    var as = tx.getWriteSequence();
    var len = as.length;
    for (var i = 0;i < len;i++) {
      var node = as[i];
      if (node.id === "cookie" && JAM.instanceof(node.obj, _HTMLDocument)) {
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
  p3.subsumedBy = pFull;
  p3.itype = "write";
  Object.freeze(p3);
  function p5(tx) {
    var commit = true;
    var as = tx.getReadSequence();
    var len = as.length;
    for (var i = 0;i < len;i++) {
      var node = as[i];
      if (node.id === "write" && JAM.instanceof(node.obj, _HTMLDocument)) {
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
  p5.subsumedBy = pFull;
  p5.itype = "read";
  Object.freeze(p5);
  return{p4:p4, p3:p3, p5:p5, pFull:pFull, woven:true};
}()