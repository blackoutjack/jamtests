var policy = function() {
  var _WebSocket = WebSocket;
  var _RegExp_prototype_test = RegExp.prototype.test;
  var __RegExp_prototype_test_call_bind__RegExp_prototype_test_ = _RegExp_prototype_test.call.bind(_RegExp_prototype_test);
  function pFull(tx) {
    var commit = true;
    var as = tx.getInvokeSequence();
    var len = as.length;
    for (var i = 0;i < len;i++) {
      var node = as[i];
      if (JAM.identical(node.value, _WebSocket) && (node.argc > 0 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^ws:\/\//i, node.args[0]))) {
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