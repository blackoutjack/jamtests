var policy = function() {
  var _HTMLElement = HTMLElement;
  var _Window = Window;
  function pFull(tx) {
    var commit = true;
    var as = tx.getReadSequence();
    var len = as.length;
    for (var i = 0;i < len;i++) {
      var node = as[i];
      if (node.id === "appendChild" && JAM.instanceof(node.obj, _HTMLElement) || node.id === "eval" && JAM.instanceof(node.obj, _Window)) {
        commit = false;
        break;
      }
    }
    if (commit) {
      JAM.process(tx);
    } else {
      JAM.prevent(tx);
    }
  }
  pFull.subsumedBy = pFull;
  pFull.itype = "read";
  Object.freeze(pFull);
  function p2(tx) {
    var commit = true;
    var as = tx.getReadSequence();
    var len = as.length;
    for (var i = 0;i < len;i++) {
      var node = as[i];
      if (node.id === "appendChild" && JAM.instanceof(node.obj, _HTMLElement) || node.id === "eval" && JAM.instanceof(node.obj, _Window)) {
        commit = false;
        break;
      }
    }
    if (commit) {
      JAM.process(tx);
    } else {
      JAM.prevent(tx);
    }
  }
  p2.subsumedBy = pFull;
  p2.itype = "read";
  Object.freeze(p2);
  return{p2:p2, pFull:pFull, woven:true};
}()