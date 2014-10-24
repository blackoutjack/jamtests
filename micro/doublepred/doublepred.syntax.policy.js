var policy = function() {
  var states = [true, false];
  function pFull(tx) {
    var commit = true;
    var as = tx.getWriteSequence();
    var len = as.length;
    for (var i = 0;i < len;i++) {
      var node = as[i];
      if (states[1] && (node.id === "x" && (node.id === "x" && JAM.identical(node.value, 2)))) {
        commit = false;
        break;
      }
      if (!states[1] && (node.id === "x" && (node.id === "x" && JAM.identical(node.value, 2)))) {
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
  function p2(tx) {
    var commit = true;
    var as = tx.getWriteSequence();
    var len = as.length;
    for (var i = 0;i < len;i++) {
      var node = as[i];
      if (states[1] && (node.id === "x" && (node.id === "x" && JAM.identical(node.value, 2)))) {
        commit = false;
        break;
      }
      if (!states[1] && (node.id === "x" && (node.id === "x" && JAM.identical(node.value, 2)))) {
        states[1] = true;
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
  return{p2:p2, pFull:pFull, woven:true};
}()