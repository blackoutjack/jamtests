var policy = function() {
  var _HTMLElement = HTMLElement;
  var _Window = Window;
  var _HTMLDocument = HTMLDocument;
  function pFull(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for (var i = 0;i < len;i++) {
      var node = as[i];
      if (node.type === "write" && (node.id === "src" && JAM.instanceof(node.obj, _HTMLElement) || node.id === "location" && JAM.instanceof(node.obj, _Window))) {
        commit = false;
        break;
      }
      if (node.type === "read" && (node.id === "cookie" && JAM.instanceof(node.obj, _HTMLDocument))) {
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
  function p2(tx) {
    var commit = true;
    var as = tx.getWriteSequence();
    var len = as.length;
    for (var i = 0;i < len;i++) {
      var node = as[i];
      if (node.id === "src" && JAM.instanceof(node.obj, _HTMLElement) || node.id === "location" && JAM.instanceof(node.obj, _Window)) {
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
  p2.subsumedBy = pFull;
  p2.itype = "write";
  Object.freeze(p2);
  function p1(tx) {
    var commit = true;
    var as = tx.getWriteSequence();
    var len = as.length;
    for (var i = 0;i < len;i++) {
      var node = as[i];
      if (node.id === "src" && JAM.instanceof(node.obj, _HTMLElement)) {
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
  p1.subsumedBy = pFull;
  p1.itype = "write";
  Object.freeze(p1);
  function p4(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for (var i = 0;i < len;i++) {
      var node = as[i];
      if (node.type === "write" && (node.id === "src" && JAM.instanceof(node.obj, _HTMLElement) || node.id === "location" && JAM.instanceof(node.obj, _Window))) {
        commit = false;
        break;
      }
      if (node.type === "read" && (node.id === "cookie" && JAM.instanceof(node.obj, _HTMLDocument))) {
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
  Object.freeze(p4);
  function p3(tx) {
    var commit = true;
    var as = tx.getReadSequence();
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
  p3.itype = "read";
  Object.freeze(p3);
  return{p2:p2, p1:p1, p4:p4, p3:p3, pFull:pFull, woven:true};
}()