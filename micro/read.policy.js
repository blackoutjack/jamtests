var policy = function() {
  var _document = document;
  function pFull(tx) {
    var commit = true;
    var as = tx.getReadSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(JAM.identical(node.obj, _document) && node.id === "cookie") {
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
  pFull.itype = "read";
  Object.freeze(pFull);
  function p1(tx) {
    var commit = true;
    var as = tx.getReadSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(JAM.identical(node.obj, _document) && node.id === "cookie") {
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
  p1.subsumedBy = pFull;
  p1.itype = "read";
  Object.freeze(p1);
  return{p1:p1, pFull:pFull, woven:true}
}()