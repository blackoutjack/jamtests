var policy = function() {
  var _document = document;
  function pFull(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "read" && JAM.identical(node.obj, _document) && node.id === "cookie") {
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
  function p9BEA8110656EA88D0164D65AC8F05610035C05FE(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "read" && JAM.identical(node.obj, _document) && node.id === "cookie") {
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
  p9BEA8110656EA88D0164D65AC8F05610035C05FE.subsumedBy = pFull;
  Object.freeze(p9BEA8110656EA88D0164D65AC8F05610035C05FE);
  return{p9BEA8110656EA88D0164D65AC8F05610035C05FE:p9BEA8110656EA88D0164D65AC8F05610035C05FE, pFull:pFull}
}()