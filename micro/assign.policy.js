var policy = function() {
  var _document = document;
  function pFull(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
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
  function p2D796209C6C7E991CECC5A098DDB71DC2DB55178(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
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
  p2D796209C6C7E991CECC5A098DDB71DC2DB55178.subsumedBy = pFull;
  Object.freeze(p2D796209C6C7E991CECC5A098DDB71DC2DB55178);
  return{p2D796209C6C7E991CECC5A098DDB71DC2DB55178:p2D796209C6C7E991CECC5A098DDB71DC2DB55178, pFull:pFull}
}()