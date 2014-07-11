var policy = function() {
  var states = [0];
  var _Window_prototype_open = Window.prototype.open;
  var _RegExp_prototype_test = RegExp.prototype.test;
  var __RegExp_prototype_test_call_bind__RegExp_prototype_test_ = _RegExp_prototype_test.call.bind(_RegExp_prototype_test);
  function processAll(tx) {
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
      JAMScript.process(tx)
    }else {
      JAMScript.prevent(tx)
    }
  }
  processAll.subsumedBy = processAll;
  Object.freeze(processAll);
  function process68DCD5A3B6F708E10DB2D4E94C3DD418A4DE8ABC(node) {
    var commit = true;
    if(node.type === "call" && JAM.identical(node.value, _Window_prototype_open) && !(node.argc > 0 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^http:\/\/jamscript.*/i, node.args[0]))) {
      commit = false
    }
    return commit
  }
  Object.freeze(process68DCD5A3B6F708E10DB2D4E94C3DD418A4DE8ABC);
  return{introspectors:{process68DCD5A3B6F708E10DB2D4E94C3DD418A4DE8ABC:process68DCD5A3B6F708E10DB2D4E94C3DD418A4DE8ABC, processAll:processAll}}
}()