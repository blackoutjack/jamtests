var policy = function() {
  function pFull(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "write" && node.id === "textContent" && JAM.identical(node.obj["className"], "read-only")) {
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
  function p6FC57D54E3DC1AB1C47F352EDE6E2B7366E67743(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "write" && node.id === "textContent" && JAM.identical(node.obj["className"], "read-only")) {
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
  p6FC57D54E3DC1AB1C47F352EDE6E2B7366E67743.subsumedBy = pFull;
  Object.freeze(p6FC57D54E3DC1AB1C47F352EDE6E2B7366E67743);
  return{p6FC57D54E3DC1AB1C47F352EDE6E2B7366E67743:p6FC57D54E3DC1AB1C47F352EDE6E2B7366E67743, pFull:pFull}
}()