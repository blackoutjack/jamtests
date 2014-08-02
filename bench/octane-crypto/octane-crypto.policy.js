var policy = function() {
  var _XMLHttpRequest = XMLHttpRequest;
  function pFull(tx) {
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
      JAM.process(tx)
    }else {
      JAM.prevent(tx)
    }
  }
  pFull.subsumedBy = pFull;
  Object.freeze(pFull);
  function pC545F199BE443C5FB0DC91C55134FB746FD8B074(tx) {
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
      JAM.process(tx)
    }else {
      JAM.prevent(tx)
    }
  }
  pC545F199BE443C5FB0DC91C55134FB746FD8B074.subsumedBy = pFull;
  Object.freeze(pC545F199BE443C5FB0DC91C55134FB746FD8B074);
  return{pC545F199BE443C5FB0DC91C55134FB746FD8B074:pC545F199BE443C5FB0DC91C55134FB746FD8B074, pFull:pFull}
}()