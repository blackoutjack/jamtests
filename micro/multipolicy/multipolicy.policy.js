var policy = function() {
  var states = [true, false, false];
  var _HTMLElement = HTMLElement;
  var _HTMLDocument_prototype_createElement = HTMLDocument.prototype.createElement;
  var _document = document;
  var _HTMLDocument_prototype_write = HTMLDocument.prototype.write;
  var _HTMLDocument_prototype_getElementById = HTMLDocument.prototype.getElementById;
  function pFull(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for (var i = 0;i < len;i++) {
      var node = as[i];
      if (states[2] && node.type === "write" && (node.id === "src" && JAM.instanceof(node.obj, _HTMLElement))) {
        commit = false;
        break;
      }
      if (states[1] && !states[2] && node.type === "invoke" && JAM.identical(node.value, _HTMLDocument_prototype_createElement)) {
        states[2] = true;
      }
      if (states[1] && node.type === "write" && (JAM.identical(node.obj, _document) && node.id === "cookie")) {
        commit = false;
        break;
      }
      if (states[1] && node.type === "invoke" && JAM.identical(node.value, _HTMLDocument_prototype_write)) {
        commit = false;
        break;
      }
      if (!states[1] && node.type === "read" && (JAM.identical(node.obj, _document) && node.id === "cookie")) {
        states[1] = true;
      }
      if (!states[1] && node.type === "invoke" && JAM.identical(node.value, _HTMLDocument_prototype_getElementById)) {
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
      if (!states[1] && (JAM.identical(node.obj, _document) && node.id === "cookie")) {
        states[1] = true;
      }
    }
    JAM.process(tx);
  }
  p1.subsumedBy = pFull;
  p1.itype = "read";
  Object.freeze(p1);
  function p2(tx) {
    if (states[1]) {
      var as = tx.getInvokeSequence();
      var len = as.length;
      for (var i = 0;i < len && !states[2];i++) {
        var node = as[i];
        if (states[1] && !states[2] && JAM.identical(node.value, _HTMLDocument_prototype_createElement)) {
          states[2] = true;
        }
      }
    }
    JAM.process(tx);
  }
  p2.subsumedBy = pFull;
  p2.itype = "invoke";
  Object.freeze(p2);
  function p3(tx) {
    var commit = true;
    if (states[2]) {
      var as = tx.getWriteSequence();
      var len = as.length;
      for (var i = 0;i < len;i++) {
        var node = as[i];
        if (states[2] && (node.id === "src" && JAM.instanceof(node.obj, _HTMLElement))) {
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
  p3.subsumedBy = pFull;
  p3.itype = "write";
  Object.freeze(p3);
  function p4(tx) {
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
  p4.subsumedBy = pFull;
  p4.itype = "write";
  Object.freeze(p4);
  function p5(tx) {
    var commit = true;
    if (states[1]) {
      var as = tx.getInvokeSequence();
      var len = as.length;
      for (var i = 0;i < len;i++) {
        var node = as[i];
        if (states[1] && JAM.identical(node.value, _HTMLDocument_prototype_write)) {
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
  p5.subsumedBy = pFull;
  p5.itype = "invoke";
  Object.freeze(p5);
  function p8(tx) {
    var as = tx.getInvokeSequence();
    var len = as.length;
    for (var i = 0;i < len && !states[1];i++) {
      var node = as[i];
      if (!states[1] && JAM.identical(node.value, _HTMLDocument_prototype_getElementById)) {
        states[1] = true;
      }
    }
    JAM.process(tx);
  }
  p8.subsumedBy = pFull;
  p8.itype = "invoke";
  Object.freeze(p8);
  return{p1:p1, p2:p2, p3:p3, p4:p4, p5:p5, p8:p8, pFull:pFull, woven:true};
}()