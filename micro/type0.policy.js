var policy = function() {
  var _String_prototype_indexOf = String.prototype.indexOf;
  function pFull(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "call" && JAM.identical(node.value, _String_prototype_indexOf) && node.argc > 0 && typeof node.args[0] === "string") {
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
  function pF1BA71A55F9319E61520953F6A9F05F1A5D05A94(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "call" && JAM.identical(node.value, _String_prototype_indexOf) && node.argc > 0 && typeof node.args[0] === "string") {
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
  pF1BA71A55F9319E61520953F6A9F05F1A5D05A94.subsumedBy = pFull;
  Object.freeze(pF1BA71A55F9319E61520953F6A9F05F1A5D05A94);
  return{pF1BA71A55F9319E61520953F6A9F05F1A5D05A94:pF1BA71A55F9319E61520953F6A9F05F1A5D05A94, pFull:pFull}
}()