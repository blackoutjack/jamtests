var policy = function() {
  var _Window_prototype_open = Window.prototype.open;
  var _RegExp_prototype_test = RegExp.prototype.test;
  var __RegExp_prototype_test_call_bind__RegExp_prototype_test_ = _RegExp_prototype_test.call.bind(_RegExp_prototype_test);
  function pFull(tx) {
    var commit = true;
    var as = tx.getInvokeSequence();
    var len = as.length;
    for (var i = 0;i < len;i++) {
      var node = as[i];
      if (JAM.identical(node.value, _Window_prototype_open) && !(node.argc > 0 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^http:\/\/jamscript.*/i, node.args[0]))) {
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
      if (JAM.identical(node.value, _Window_prototype_open) && !(node.argc > 0 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^http:\/\/jamscript.*/i, node.args[0]))) {
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