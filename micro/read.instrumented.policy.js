var policy = function() {
  var states = [0];
  var _document = document;
  function processAll(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "read" && JAM.identical(node.obj, _document) && node.id === "cookie") {
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
  function process9BEA8110656EA88D0164D65AC8F05610035C05FE(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "read" && JAM.identical(node.obj, _document) && node.id === "cookie") {
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
  process9BEA8110656EA88D0164D65AC8F05610035C05FE.subsumedBy = processAll;
  Object.freeze(process9BEA8110656EA88D0164D65AC8F05610035C05FE);
  return{introspectors:{process9BEA8110656EA88D0164D65AC8F05610035C05FE:process9BEA8110656EA88D0164D65AC8F05610035C05FE, processAll:processAll}}
}()