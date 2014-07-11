var policy = function() {
  var states = [0];
  var _XMLHttpRequest_prototype_open = XMLHttpRequest.prototype.open;
  function processAll(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "call" && JAM.identical(node.value, _XMLHttpRequest_prototype_open)) {
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
  function processC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE1(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "call" && JAM.identical(node.value, _XMLHttpRequest_prototype_open)) {
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
  processC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE1.subsumedBy = processAll;
  Object.freeze(processC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE1);
  return{introspectors:{processC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE1:processC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE1, processAll:processAll}}
}()