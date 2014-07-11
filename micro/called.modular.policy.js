var policy = function() {
  var states = [0];
  var _HTMLDocument_prototype_getElementById = HTMLDocument.prototype.getElementById;
  function processAll(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "call" && JAM.identical(node.value, _HTMLDocument_prototype_getElementById)) {
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