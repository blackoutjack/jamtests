var policy = function() {
  var _HTMLDocument_prototype_createElement = HTMLDocument.prototype.createElement;
  var _HTMLDocument_prototype_write = HTMLDocument.prototype.write;
  function pFull(tx) {
    var commit = true;
    var as = tx.getCallSequence();
    var len = as.length;
    for (var i = 0;i < len;i++) {
      var node = as[i];
      if (JAM.identical(node.value, _HTMLDocument_prototype_createElement) || JAM.identical(node.value, _HTMLDocument_prototype_write)) {
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
  pFull.itype = "invoke";
  Object.freeze(pFull);
  return{pFull:pFull};
}()