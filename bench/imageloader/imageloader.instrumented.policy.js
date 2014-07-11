var policy = function() {
  var states = [0];
  var _document = document;
  function processAll(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "read" && JAM.identical(node.obj, _document) && node.id === "write") {
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
  function processD1AC21BB80EC25700F3E2B60070EE2799345578F(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "read" && JAM.identical(node.obj, _document) && node.id === "write") {
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
  processD1AC21BB80EC25700F3E2B60070EE2799345578F.subsumedBy = processAll;
  Object.freeze(processD1AC21BB80EC25700F3E2B60070EE2799345578F);
  return{introspectors:{processD1AC21BB80EC25700F3E2B60070EE2799345578F:processD1AC21BB80EC25700F3E2B60070EE2799345578F, processAll:processAll}}
}()