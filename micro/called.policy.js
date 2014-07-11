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
  function processD5795DFA086639893C72614AC0D6E60E856B441D(node) {
    var commit = true;
    if(node.type === "call" && JAM.identical(node.value, _HTMLDocument_prototype_getElementById)) {
      commit = false
    }
    return commit
  }
  Object.freeze(processD5795DFA086639893C72614AC0D6E60E856B441D);
  return{introspectors:{processD5795DFA086639893C72614AC0D6E60E856B441D:processD5795DFA086639893C72614AC0D6E60E856B441D, processAll:processAll}}
}()