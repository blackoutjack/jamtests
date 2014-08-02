var policy = function() {
  var states = [true, false];
  var _HTMLElement = HTMLElement;
  var _HTMLDocument_prototype_getElementById = HTMLDocument.prototype.getElementById;
  function pFull(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(states[1] && node.type === "write" && node.id === "src" && JAM.instanceof(node.obj, _HTMLElement)) {
        commit = false;
        break
      }
      if(!states[1] && node.type === "call" && JAM.identical(node.value, _HTMLDocument_prototype_getElementById) && JAM.identical(node.args[0], "content")) {
        states[1] = true
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
  function p750A7ECA0CEA34F16F7CDD3F0C47CDDFC768D4A5(tx) {
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len && !states[1];i++) {
      var node = as[i];
      if(!states[1] && node.type === "call" && JAM.identical(node.value, _HTMLDocument_prototype_getElementById) && JAM.identical(node.args[0], "content")) {
        states[1] = true
      }
    }
    JAM.process(tx)
  }
  p750A7ECA0CEA34F16F7CDD3F0C47CDDFC768D4A5.subsumedBy = pFull;
  Object.freeze(p750A7ECA0CEA34F16F7CDD3F0C47CDDFC768D4A5);
  return{p750A7ECA0CEA34F16F7CDD3F0C47CDDFC768D4A5:p750A7ECA0CEA34F16F7CDD3F0C47CDDFC768D4A5, pFull:pFull}
}()