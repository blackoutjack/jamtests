var policy = function() {
  var states = [0];
  var _String_prototype_indexOf = String.prototype.indexOf;
  function processAll(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "call" && JAM.identical(node.value, _String_prototype_indexOf) && node.argc > 0 && typeof node.args[0] === "string") {
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
  return{introspectors:{processAll:processAll}}
}()