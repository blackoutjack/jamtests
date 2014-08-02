var policy = function() {
  var _HTMLElement = HTMLElement;
  var _Window = Window;
  function pFull(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "read" && (node.id === "appendChild" && JAM.instanceof(node.obj, _HTMLElement) || node.id === "eval" && JAM.instanceof(node.obj, _Window))) {
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
  function p16BCDEB6D8ADCB1A174032B6FB820352D3BD5688DDA4C023E539FA2A78CEFDA9003FE6936D0D2125(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "read" && (node.id === "appendChild" && JAM.instanceof(node.obj, _HTMLElement) || node.id === "eval" && JAM.instanceof(node.obj, _Window))) {
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
  p16BCDEB6D8ADCB1A174032B6FB820352D3BD5688DDA4C023E539FA2A78CEFDA9003FE6936D0D2125.subsumedBy = pFull;
  Object.freeze(p16BCDEB6D8ADCB1A174032B6FB820352D3BD5688DDA4C023E539FA2A78CEFDA9003FE6936D0D2125);
  return{p16BCDEB6D8ADCB1A174032B6FB820352D3BD5688DDA4C023E539FA2A78CEFDA9003FE6936D0D2125:p16BCDEB6D8ADCB1A174032B6FB820352D3BD5688DDA4C023E539FA2A78CEFDA9003FE6936D0D2125, pFull:pFull}
}()