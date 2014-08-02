var policy = function() {
  var states = [true, false];
  var _document = document;
  function pFull(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(states[1] && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(!states[1] && node.type === "write" && node.id === "setCookieSentinel" && JAM.identical(node.value, true)) {
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
  function p3F9F399AB000376076BBFF3A9A9C0103B23A9835(tx) {
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len && !states[1];i++) {
      var node = as[i];
      if(!states[1] && node.type === "write" && node.id === "setCookieSentinel" && JAM.identical(node.value, true)) {
        states[1] = true
      }
    }
    JAM.process(tx)
  }
  p3F9F399AB000376076BBFF3A9A9C0103B23A9835.subsumedBy = pFull;
  Object.freeze(p3F9F399AB000376076BBFF3A9A9C0103B23A9835);
  function p425E08A28862414CF7130381FE99A660F52DB811(tx) {
    var commit = true;
    if(states[1]) {
      var as = tx.getActionSequence();
      var len = as.length;
      for(var i = 0;i < len;i++) {
        var node = as[i];
        if(states[1] && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
          commit = false;
          break
        }
      }
    }
    if(commit) {
      JAM.process(tx)
    }else {
      JAM.prevent(tx)
    }
  }
  p425E08A28862414CF7130381FE99A660F52DB811.subsumedBy = pFull;
  Object.freeze(p425E08A28862414CF7130381FE99A660F52DB811);
  return{p3F9F399AB000376076BBFF3A9A9C0103B23A9835:p3F9F399AB000376076BBFF3A9A9C0103B23A9835, p425E08A28862414CF7130381FE99A660F52DB811:p425E08A28862414CF7130381FE99A660F52DB811, pFull:pFull}
}()