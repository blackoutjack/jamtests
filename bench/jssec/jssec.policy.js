var policy = function() {
  var _CSSStyleDeclaration = CSSStyleDeclaration;
  function pFull(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "write" && true && JAM.instanceof(node.obj, _CSSStyleDeclaration) && !JAM.identical(node.id, "display")) {
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
  function pAF65661CDDA02BEF577B9796994F429B325DEECD(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "write" && true && JAM.instanceof(node.obj, _CSSStyleDeclaration) && !JAM.identical(node.id, "display")) {
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
  pAF65661CDDA02BEF577B9796994F429B325DEECD.subsumedBy = pFull;
  Object.freeze(pAF65661CDDA02BEF577B9796994F429B325DEECD);
  return{pAF65661CDDA02BEF577B9796994F429B325DEECD:pAF65661CDDA02BEF577B9796994F429B325DEECD, pFull:pFull}
}()