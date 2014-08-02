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
  function p2CFB7BC756B67B61B77FE6A02E61FD2CA839CC5F(tx) {
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len && !states[1];i++) {
      var node = as[i];
      if(!states[1] && node.type === "write" && node.id === "x" && JAM.identical(node.value, 2)) {
        states[1] = true
      }
    }
    JAM.process(tx)
  }
  p2CFB7BC756B67B61B77FE6A02E61FD2CA839CC5F.subsumedBy = pFull;
  Object.freeze(p2CFB7BC756B67B61B77FE6A02E61FD2CA839CC5F);
  function p4E47677554DF5FF3E2D25414A4D4E67F96F8A65A(tx) {
    var commit = true;
    if(states[1]) {
      var as = tx.getActionSequence();
      var len = as.length;
      for(var i = 0;i < len;i++) {
        var node = as[i];
        if(states[1] && node.type === "write" && node.id === "x" && JAM.identical(node.value, 5)) {
          commit = false;
          break
        }
      }
    }
    if(commit) {
      JAM.process(tx)
    }else {
      JAM.prevent(tx)
    }
  }
  p4E47677554DF5FF3E2D25414A4D4E67F96F8A65A.subsumedBy = pFull;
  Object.freeze(p4E47677554DF5FF3E2D25414A4D4E67F96F8A65A);
  return{p2CFB7BC756B67B61B77FE6A02E61FD2CA839CC5F:p2CFB7BC756B67B61B77FE6A02E61FD2CA839CC5F, p4E47677554DF5FF3E2D25414A4D4E67F96F8A65A:p4E47677554DF5FF3E2D25414A4D4E67F96F8A65A, pFull:pFull}
}()