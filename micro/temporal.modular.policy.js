var policy = function() {
  var states = [true, false];
  function pFull(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(states[1] && node.type === "write" && node.id === "x" && JAM.identical(node.value, 5)) {
        commit = false;
        break
      }
      if(!states[1] && node.type === "write" && node.id === "x" && JAM.identical(node.value, 2)) {
        states[1] = true
      }
    }
    if(commit) {
      JAM.process(tx)
    }else {
      JAM.prevent(tx)
    }
  }
  pFull.subsumedBy = pFull;
  Object.freeze(pFull);
  return{pFull:pFull}
}()