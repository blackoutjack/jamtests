var policy = function() {
  var states = [0];
  var _HTMLElement = HTMLElement;
  function processAll(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "write" && node.id === "innerHTML" && JAM.instanceof(node.obj, _HTMLElement)) {
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
  function processD4D25E04A23263FBD77B896710421141724AE95D(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "write" && node.id === "innerHTML" && JAM.instanceof(node.obj, _HTMLElement)) {
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
  processD4D25E04A23263FBD77B896710421141724AE95D.subsumedBy = processAll;
  Object.freeze(processD4D25E04A23263FBD77B896710421141724AE95D);
  return{introspectors:{processD4D25E04A23263FBD77B896710421141724AE95D:processD4D25E04A23263FBD77B896710421141724AE95D, processAll:processAll}}
}()