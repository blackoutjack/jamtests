var policy = function() {
  var _HTMLElement = HTMLElement;
  function pFull(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "write" && node.id === "innerHTML" && JAM.instanceof(node.obj, _HTMLElement)) {
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
  function pD4D25E04A23263FBD77B896710421141724AE95D(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "write" && node.id === "innerHTML" && JAM.instanceof(node.obj, _HTMLElement)) {
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
  pD4D25E04A23263FBD77B896710421141724AE95D.subsumedBy = pFull;
  Object.freeze(pD4D25E04A23263FBD77B896710421141724AE95D);
  return{pD4D25E04A23263FBD77B896710421141724AE95D:pD4D25E04A23263FBD77B896710421141724AE95D, pFull:pFull}
}()