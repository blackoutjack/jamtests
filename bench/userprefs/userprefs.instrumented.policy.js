var policy = function() {
  var states = [0];
  var _HTMLElement = HTMLElement;
  var _Window = Window;
  function processAll(tx) {
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
      JAMScript.process(tx)
    }else {
      JAMScript.prevent(tx)
    }
  }
  processAll.subsumedBy = processAll;
  Object.freeze(processAll);
  function process16BCDEB6D8ADCB1A174032B6FB820352D3BD5688DDA4C023E539FA2A78CEFDA9003FE6936D0D2125(tx) {
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
      JAMScript.process(tx)
    }else {
      JAMScript.prevent(tx)
    }
  }
  process16BCDEB6D8ADCB1A174032B6FB820352D3BD5688DDA4C023E539FA2A78CEFDA9003FE6936D0D2125.subsumedBy = processAll;
  Object.freeze(process16BCDEB6D8ADCB1A174032B6FB820352D3BD5688DDA4C023E539FA2A78CEFDA9003FE6936D0D2125);
  return{introspectors:{process16BCDEB6D8ADCB1A174032B6FB820352D3BD5688DDA4C023E539FA2A78CEFDA9003FE6936D0D2125:process16BCDEB6D8ADCB1A174032B6FB820352D3BD5688DDA4C023E539FA2A78CEFDA9003FE6936D0D2125, processAll:processAll}}
}()