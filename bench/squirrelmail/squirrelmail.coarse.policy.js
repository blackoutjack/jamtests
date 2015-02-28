var policy = function() {
  var _HTMLElement = HTMLElement;
  function pFull(tx) {
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
  pFull.subsumedBy = pFull;
  pFull.itype = "write";
  Object.freeze(pFull);
  return {pFull:pFull};
}()