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
      if(!states[1] && node.type === "call" && JAM.identical(node.value, _HTMLDocument_prototype_getElementById) && node.argc > 0 && JAM.identical(node.args[0], "content")) {
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
  function p1(tx) {
    var as = tx.getCallSequence();
    var len = as.length;
    for(var i = 0;i < len && !states[1];i++) {
      var node = as[i];
      if(!states[1] && JAM.identical(node.value, _HTMLDocument_prototype_getElementById) && node.argc > 0 && JAM.identical(node.args[0], "content")) {
        states[1] = true
      }
    }
    JAM.process(tx)
  }
  p1.subsumedBy = pFull;
  p1.itype = "call";
  Object.freeze(p1);
  return{p1:p1, pFull:pFull, woven:true}
}()