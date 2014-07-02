var policy = function() {
  var states = [0];
  var _HTMLElement = HTMLElement;
  var _HTMLDocument_prototype_getElementById = HTMLDocument.prototype.getElementById;
  function processAll(tx) {
    var commit = true;
    var s1 = states.indexOf(1) > -1;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(s1 && node.type === "write" && node.id === "src" && JAM.instanceof(node.obj, _HTMLElement)) {
        commit = false;
        break
      }
      if(!s1 && node.type === "call" && JAM.identical(node.value, _HTMLDocument_prototype_getElementById) && JAM.identical(node.args[0], "content")) {
        s1 = true;
        states.push(1)
      }
    }
    if(commit) {
      JAMScript.process(tx)
    }else {
      JAMScript.prevent(tx)
    }
  }
  function process750A7ECA0CEA34F16F7CDD3F0C47CDDFC768D4A5(node) {
    var s1 = states.indexOf(1) > -1;
    if(!s1) {
      if(!s1 && node.type === "call" && JAM.identical(node.value, _HTMLDocument_prototype_getElementById) && JAM.identical(node.args[0], "content")) {
        s1 = true;
        states.push(1)
      }
    }
    return true
  }
  return{introspectors:{process750A7ECA0CEA34F16F7CDD3F0C47CDDFC768D4A5:process750A7ECA0CEA34F16F7CDD3F0C47CDDFC768D4A5, processAll:processAll}}
}()