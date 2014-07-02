var policy = function() {
  var states = [0];
  function processAll(tx) {
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
      JAMScript.process(tx)
    }else {
      JAMScript.prevent(tx)
    }
  }
  function process6CB626AF3B00A2806871E6DD34E13FD7B9D46DB2(tx) {
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
      JAMScript.process(tx)
    }else {
      JAMScript.prevent(tx)
    }
  }
  return{introspectors:{process6CB626AF3B00A2806871E6DD34E13FD7B9D46DB2:process6CB626AF3B00A2806871E6DD34E13FD7B9D46DB2, processAll:processAll}}
}()