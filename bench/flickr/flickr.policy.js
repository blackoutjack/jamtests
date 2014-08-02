var policy = function() {
  var _Window_prototype_open = Window.prototype.open;
  var _RegExp_prototype_test = RegExp.prototype.test;
  var __RegExp_prototype_test_call_bind__RegExp_prototype_test_ = _RegExp_prototype_test.call.bind(_RegExp_prototype_test);
  function pFull(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "call" && JAM.identical(node.value, _Window_prototype_open) && !(node.argc > 0 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^http:\/\/jamscript.*/i, node.args[0]))) {
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
  function p68DCD5A3B6F708E10DB2D4E94C3DD418A4DE8ABC(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "call" && JAM.identical(node.value, _Window_prototype_open) && !(node.argc > 0 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^http:\/\/jamscript.*/i, node.args[0]))) {
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
  p68DCD5A3B6F708E10DB2D4E94C3DD418A4DE8ABC.subsumedBy = pFull;
  Object.freeze(p68DCD5A3B6F708E10DB2D4E94C3DD418A4DE8ABC);
  return{p68DCD5A3B6F708E10DB2D4E94C3DD418A4DE8ABC:p68DCD5A3B6F708E10DB2D4E94C3DD418A4DE8ABC, pFull:pFull}
}()