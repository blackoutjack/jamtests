var policy = function() {
  var states = [0];
  function processAll(tx) {
    var commit = true;
    var s1 = states.indexOf(1) > -1;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(s1 && node.type === "write" && node.id === "x" && JAM.identical(node.value, 5)) {
        commit = false;
        break
      }
      if(!s1 && node.type === "write" && node.id === "x" && JAM.identical(node.value, 2)) {
        s1 = true;
        states.push(1)
      }
    }
    if(commit) {
      JAMScript.process(tx)
    }else {
      JAMScript.prevent(tx)
    }
  }
  function process2CFB7BC756B67B61B77FE6A02E61FD2CA839CC5F(tx) {
    var s1 = states.indexOf(1) > -1;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len && !s1;i++) {
      var node = as[i];
      if(!s1 && node.type === "write" && node.id === "x" && JAM.identical(node.value, 2)) {
        s1 = true;
        states.push(1)
      }
    }
    JAMScript.process(tx)
  }
  function process4E47677554DF5FF3E2D25414A4D4E67F96F8A65A(tx) {
    var commit = true;
    var s1 = states.indexOf(1) > -1;
    if(s1) {
      var as = tx.getActionSequence();
      var len = as.length;
      for(var i = 0;i < len;i++) {
        var node = as[i];
        if(s1 && node.type === "write" && node.id === "x" && JAM.identical(node.value, 5)) {
          commit = false;
          break
        }
      }
    }
    if(commit) {
      JAMScript.process(tx)
    }else {
      JAMScript.prevent(tx)
    }
  }
  return{introspectors:{process2CFB7BC756B67B61B77FE6A02E61FD2CA839CC5F:process2CFB7BC756B67B61B77FE6A02E61FD2CA839CC5F, process4E47677554DF5FF3E2D25414A4D4E67F96F8A65A:process4E47677554DF5FF3E2D25414A4D4E67F96F8A65A, processAll:processAll}}
}()