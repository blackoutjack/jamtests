var policy = function() {
  var _HTMLDocument_prototype_write = HTMLDocument.prototype.write;
  var _String_prototype_indexOf = String.prototype.indexOf;
  var __String_prototype_indexOf_call_bind__String_prototype_indexOf_ = _String_prototype_indexOf.call.bind(_String_prototype_indexOf);
  function pFull(tx) {
    var commit = true;
    var as = tx.getInvokeSequence();
    var len = as.length;
    for (var i = 0;i < len;i++) {
      var node = as[i];
      if (JAM.identical(node.value, _HTMLDocument_prototype_write) && (node.argc > 0 && typeof node.args[0] === "string" && __String_prototype_indexOf_call_bind__String_prototype_indexOf_(node.args[0], "script") > -1)) {
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
  return{pFull:pFull};
}()