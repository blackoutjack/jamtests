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
  function p2(tx) {
    var commit = true;
    if (states[1]) {
      var as = tx.getWriteSequence();
      var len = as.length;
      for (var i = 0;i < len;i++) {
        var node = as[i];
        if (states[1] && (JAM.identical(node.obj, _document) && node.id === "cookie")) {
          commit = false;
          break;
        }
      }
    }
    if (commit) {
      JAM.process(tx);
    } else {
      JAM.prevent(tx);
    }
  }
  p2.subsumedBy = pFull;
  p2.itype = "write";
  Object.freeze(p2);
  function p6(tx) {
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
  p6.subsumedBy = pFull;
  p6.itype = "read";
  Object.freeze(p6);
  return{p1:p1, p4:p4, p5:p5, p2:p2, p6:p6, pFull:pFull, woven:true};
}()