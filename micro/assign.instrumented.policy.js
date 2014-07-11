var policy = function() {
  var states = [0];
  var _document = document;
  function processAll(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
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
  function process2D796209C6C7E991CECC5A098DDB71DC2DB55178(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
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
  process2D796209C6C7E991CECC5A098DDB71DC2DB55178.subsumedBy = processAll;
  Object.freeze(process2D796209C6C7E991CECC5A098DDB71DC2DB55178);
  return{introspectors:{process2D796209C6C7E991CECC5A098DDB71DC2DB55178:process2D796209C6C7E991CECC5A098DDB71DC2DB55178, processAll:processAll}}
}()