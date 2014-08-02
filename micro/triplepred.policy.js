var policy = function() {
  var states = [true, false];
  function pFull(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(states[1] && node.type === "write" && node.id === "x" && JAM.identical(node.value, 3)) {
        commit = false;
        break
      }
      if(!states[1] && node.type === "write" && node.id === "x" && JAM.identical(node.value, 3)) {
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
  function p0A9DE48654C3C7B21CDBDB4D97140E0D07DBBC9640D23A24DAEA6B10B8F5D449254A7CCB7EA66B34(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(states[1] && node.type === "write" && node.id === "x" && JAM.identical(node.value, 3)) {
        commit = false;
        break
      }
      if(!states[1] && node.type === "write" && node.id === "x" && JAM.identical(node.value, 3)) {
        states[1] = true
      }
    }
    if(commit) {
      JAM.process(tx)
    }else {
      JAM.prevent(tx)
    }
  }
  p0A9DE48654C3C7B21CDBDB4D97140E0D07DBBC9640D23A24DAEA6B10B8F5D449254A7CCB7EA66B34.subsumedBy = pFull;
  Object.freeze(p0A9DE48654C3C7B21CDBDB4D97140E0D07DBBC9640D23A24DAEA6B10B8F5D449254A7CCB7EA66B34);
  return{p0A9DE48654C3C7B21CDBDB4D97140E0D07DBBC9640D23A24DAEA6B10B8F5D449254A7CCB7EA66B34:p0A9DE48654C3C7B21CDBDB4D97140E0D07DBBC9640D23A24DAEA6B10B8F5D449254A7CCB7EA66B34, pFull:pFull}
}()