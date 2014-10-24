var policy = function() {
  var states = [true, false];
  var _document = document;
  var _HTMLDocument = HTMLDocument;
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
    var as = tx.getReadSequence();
    var len = as.length;
    for (var i = 0;i < len && !states[1];i++) {
      var node = as[i];
      if (!states[1] && (node.id === "getElementById" && JAM.instanceof(node.obj, _HTMLDocument) || node.id === "getElementsByTagName" && JAM.instanceof(node.obj, _HTMLDocument))) {
        states[1] = true;
      }
    }
    JAM.process(tx);
  }
  p4.subsumedBy = pFull;
  p4.itype = "read";
  Object.freeze(p4);
  function p5(tx) {
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
    }
    if (commit) {
      JAM.process(tx);
    } else {
      JAM.prevent(tx);
    }
  }
  p5.subsumedBy = pFull;
  Object.freeze(p5);
  function p1(tx) {
    var as = tx.getReadSequence();
    var len = as.length;
    for (var i = 0;i < len && !states[1];i++) {
      var node = as[i];
      if (!states[1] && (node.id === "getElementById" && JAM.instanceof(node.obj, _HTMLDocument))) {
        states[1] = true;
      }
    }
    JAM.process(tx);
  }
  p1.subsumedBy = pFull;
  p1.itype = "read";
  Object.freeze(p1);
  function p3(tx) {
    var as = tx.getReadSequence();
    var len = as.length;
    for (var i = 0;i < len && !states[1];i++) {
      var node = as[i];
      if (!states[1] && (node.id === "getElementsByTagName" && JAM.instanceof(node.obj, _HTMLDocument))) {
        states[1] = true;
      }
    }
    JAM.process(tx);
  }
  p3.subsumedBy = pFull;
  p3.itype = "read";
  Object.freeze(p3);
  return{p4:p4, p5:p5, p1:p1, p3:p3, pFull:pFull, woven:true};
}()