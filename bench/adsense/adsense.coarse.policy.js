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
      if (!states[1] && (node.type === "call" || node.type === "construct") && (JAM.identical(node.value, _HTMLDocument_prototype_getElementById) || JAM.identical(node.value, _HTMLDocument_prototype_getElementsByTagName))) {
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
  return{pFull:pFull};
}()