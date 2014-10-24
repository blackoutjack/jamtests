var policy = function() {
  var states = [true, false];
  function pFull(tx) {
    var commit = true;
    var as = tx.getWriteSequence();
    var len = as.length;
    for (var i = 0;i < len;i++) {
      var node = as[i];
      if (states[1] && (node.id === "x" && JAM.identical(node.value, 5))) {
        commit = false;
        break;
      }
      if (!states[1] && (node.id === "x" && JAM.identical(node.value, 2))) {
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
  function p3(tx) {
    var commit = true;
    if (states[1]) {
      var as = tx.getWriteSequence();
      var len = as.length;
      for (var i = 0;i < len;i++) {
        var node = as[i];
        if (states[1] && (node.id === "x" && JAM.identical(node.value, 5))) {
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
  function p1(tx) {
    var as = tx.getWriteSequence();
    var len = as.length;
    for (var i = 0;i < len && !states[1];i++) {
      var node = as[i];
      if (!states[1] && (node.id === "x" && JAM.identical(node.value, 2))) {
        states[1] = true;
      }
    }
    JAM.process(tx);
  }
  p1.subsumedBy = pFull;
  p1.itype = "write";
  Object.freeze(p1);
  return{p3:p3, p1:p1, pFull:pFull, woven:true};
}()