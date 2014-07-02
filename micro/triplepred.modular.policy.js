var policy = function() {
  var states = [0];
  function processAll(tx) {
    var commit = true;
    var s1 = states.indexOf(1) > -1;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(s1 && node.type === "write" && node.id === "x" && JAM.identical(node.value, 3)) {
        commit = false;
        break
      }
      if(!s1 && node.type === "write" && node.id === "x" && JAM.identical(node.value, 3)) {
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
  return{introspectors:{processAll:processAll}}
}()