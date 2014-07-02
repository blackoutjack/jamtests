var policy = function() {
  var states = [0];
  var _HTMLElement = HTMLElement;
  var _String_prototype_startsWith = String.prototype.startsWith;
  var __String_prototype_startsWith_call_bind__String_prototype_startsWith_ = _String_prototype_startsWith.call.bind(_String_prototype_startsWith);
  function processAll(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "write" && node.id === "src" && JAM.instanceof(node.obj, _HTMLElement) && __String_prototype_startsWith_call_bind__String_prototype_startsWith_(node.value, "http")) {
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
  function process8A9400208C24F3EAF9195E429B8E1C6C4C412B95(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "write" && node.id === "src" && JAM.instanceof(node.obj, _HTMLElement) && __String_prototype_startsWith_call_bind__String_prototype_startsWith_(node.value, "http")) {
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
  return{introspectors:{process8A9400208C24F3EAF9195E429B8E1C6C4C412B95:process8A9400208C24F3EAF9195E429B8E1C6C4C412B95, processAll:processAll}}
}()