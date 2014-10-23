var policy = function() {
  var states = [true, false];
  var _document = document;
  function pFull(tx) {
    var commit = true;
    var as = tx.getWriteSequence();
    var len = as.length;
    for (var i = 0;i < len;i++) {
      var node = as[i];
      if (states[1] && (JAM.identical(node.obj, _document) && node.id === "cookie")) {
        commit = false;
        break;
      }
      if (!states[1] && (node.id === "setCookieSentinel" && JAM.identical(node.value, true))) {
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
  pFull.itype = "write";
  Object.freeze(pFull);
  return{pFull:pFull};
}()