var policy = function() {
  var states = [0];
  var _XMLHttpRequest = XMLHttpRequest;
  function processAll(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "read" && node.id === "open" && JAM.instanceof(node.obj, _XMLHttpRequest)) {
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
  function processC545F199BE443C5FB0DC91C55134FB746FD8B074(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "read" && node.id === "open" && JAM.instanceof(node.obj, _XMLHttpRequest)) {
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
  return{introspectors:{processC545F199BE443C5FB0DC91C55134FB746FD8B074:processC545F199BE443C5FB0DC91C55134FB746FD8B074, processAll:processAll}}
}()