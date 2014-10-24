var policy = function() {
  var _String_prototype_indexOf = String.prototype.indexOf;
  function pFull(tx) {
    var commit = true;
    var as = tx.getInvokeSequence();
    var len = as.length;
    for (var i = 0;i < len;i++) {
      var node = as[i];
      if (JAM.identical(node.value, _String_prototype_indexOf) && (node.argc > 0 && typeof node.args[0] === "string")) {
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
  pFull.itype = "invoke";
  Object.freeze(pFull);
  function p1(tx) {
    var commit = true;
    var as = tx.getInvokeSequence();
    var len = as.length;
    for (var i = 0;i < len;i++) {
      var node = as[i];
      if (JAM.identical(node.value, _String_prototype_indexOf) && (node.argc > 0 && typeof node.args[0] === "string")) {
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
  p1.subsumedBy = pFull;
  p1.itype = "invoke";
  Object.freeze(p1);
  return{p1:p1, pFull:pFull, woven:true};
}()