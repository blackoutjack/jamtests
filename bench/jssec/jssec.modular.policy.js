var policy = function() {
  var _CSSStyleDeclaration = CSSStyleDeclaration;
  function pFull(tx) {
    var commit = true;
    var as = tx.getWriteSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(true && JAM.instanceof(node.obj, _CSSStyleDeclaration) && !JAM.identical(node.id, "display")) {
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
  pFull.itype = "write";
  Object.freeze(pFull);
  return{pFull:pFull}
}()