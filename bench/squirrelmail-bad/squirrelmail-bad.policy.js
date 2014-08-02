var policy = function() {
  var _HTMLElement = HTMLElement;
  function pFull(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "write" && node.id === "src" && JAM.instanceof(node.obj, _HTMLElement)) {
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
  function pD0BBA7FAE07D4CAC3C07091FDFB8C6213A5ACAAB(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "write" && node.id === "src" && JAM.instanceof(node.obj, _HTMLElement)) {
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
  pD0BBA7FAE07D4CAC3C07091FDFB8C6213A5ACAAB.subsumedBy = pFull;
  Object.freeze(pD0BBA7FAE07D4CAC3C07091FDFB8C6213A5ACAAB);
  return{pD0BBA7FAE07D4CAC3C07091FDFB8C6213A5ACAAB:pD0BBA7FAE07D4CAC3C07091FDFB8C6213A5ACAAB, pFull:pFull}
}()