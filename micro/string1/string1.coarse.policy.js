var policy = function() {
  var _String_prototype_startsWith = String.prototype.startsWith;
  var __String_prototype_startsWith_call_bind__String_prototype_startsWith_ = _String_prototype_startsWith.call.bind(_String_prototype_startsWith);
  function pFull(tx) {
    var commit = true;
    var as = tx.getWriteSequence();
    var len = as.length;
    for (var i = 0;i < len;i++) {
      var node = as[i];
      if (node.id === "src" && __String_prototype_startsWith_call_bind__String_prototype_startsWith_(node.value, "http")) {
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
  pFull.itype = "write";
  Object.freeze(pFull);
  return{pFull:pFull};
}()