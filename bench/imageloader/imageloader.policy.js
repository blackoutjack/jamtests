var policy = function() {
  var _document = document;
  function pFull(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "read" && JAM.identical(node.obj, _document) && node.id === "write") {
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
  function pD1AC21BB80EC25700F3E2B60070EE2799345578F(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "read" && JAM.identical(node.obj, _document) && node.id === "write") {
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
  pD1AC21BB80EC25700F3E2B60070EE2799345578F.subsumedBy = pFull;
  Object.freeze(pD1AC21BB80EC25700F3E2B60070EE2799345578F);
  return{pD1AC21BB80EC25700F3E2B60070EE2799345578F:pD1AC21BB80EC25700F3E2B60070EE2799345578F, pFull:pFull}
}()