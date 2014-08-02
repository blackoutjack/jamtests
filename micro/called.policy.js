var policy = function() {
  var _HTMLDocument_prototype_getElementById = HTMLDocument.prototype.getElementById;
  function pFull(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "call" && JAM.identical(node.value, _HTMLDocument_prototype_getElementById)) {
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
  function pD5795DFA086639893C72614AC0D6E60E856B441D(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "call" && JAM.identical(node.value, _HTMLDocument_prototype_getElementById)) {
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
  pD5795DFA086639893C72614AC0D6E60E856B441D.subsumedBy = pFull;
  Object.freeze(pD5795DFA086639893C72614AC0D6E60E856B441D);
  return{pD5795DFA086639893C72614AC0D6E60E856B441D:pD5795DFA086639893C72614AC0D6E60E856B441D, pFull:pFull}
}()