var policy = function() {
  var _HTMLElement = HTMLElement;
  var _Window = Window;
  function pFull(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "read" && (node.id === "appendChild" && JAM.instanceof(node.obj, _HTMLElement) || node.id === "eval" && JAM.instanceof(node.obj, _Window))) {
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
  return{pFull:pFull}
}()