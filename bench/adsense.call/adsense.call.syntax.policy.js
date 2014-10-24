var policy = function() {
  var states = [true, false];
  var _document = document;
  var _HTMLDocument_prototype_getElementById = HTMLDocument.prototype.getElementById;
  var _HTMLDocument_prototype_getElementsByTagName = HTMLDocument.prototype.getElementsByTagName;
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
      if (!states[1] && node.type === "invoke" && (JAM.identical(node.value, _HTMLDocument_prototype_getElementById) || JAM.identical(node.value, _HTMLDocument_prototype_getElementsByTagName))) {
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
    var as = tx.getCallSequence();
    var len = as.length;
    for (var i = 0;i < len && !states[1];i++) {
      var node = as[i];
      if (!states[1] && (JAM.identical(node.value, _HTMLDocument_prototype_getElementById) || JAM.identical(node.value, _HTMLDocument_prototype_getElementsByTagName))) {
        states[1] = true;
      }
    }
    JAM.process(tx);
  }
  p4.subsumedBy = pFull;
  p4.itype = "invoke";
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
      if (!states[1] && node.type === "invoke" && (JAM.identical(node.value, _HTMLDocument_prototype_getElementById) || JAM.identical(node.value, _HTMLDocument_prototype_getElementsByTagName))) {
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
  return{p4:p4, p5:p5, p2:p2, pFull:pFull, woven:true};
}()