var policy = function() {
  function pFull(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "write" && node.id === "x" && JAM.identical(node.value, 2)) {
        commit = false;
        break
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
  function p6CB626AF3B00A2806871E6DD34E13FD7B9D46DB2(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "write" && node.id === "x" && JAM.identical(node.value, 2)) {
        commit = false;
        break
      }
    }
    if(commit) {
      JAM.process(tx)
    }else {
      JAM.prevent(tx)
    }
  }
  p6CB626AF3B00A2806871E6DD34E13FD7B9D46DB2.subsumedBy = pFull;
  Object.freeze(p6CB626AF3B00A2806871E6DD34E13FD7B9D46DB2);
  return{p6CB626AF3B00A2806871E6DD34E13FD7B9D46DB2:p6CB626AF3B00A2806871E6DD34E13FD7B9D46DB2, pFull:pFull}
}()