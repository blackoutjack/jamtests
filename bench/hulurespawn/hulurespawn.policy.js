var policy = function() {
  var states = [true, false];
  var _document = document;
  var _Storage_prototype_getItem = Storage.prototype.getItem;
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
      if(!states[1] && node.type === "call" && JAM.identical(node.value, _Storage_prototype_getItem)) {
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
  function p9C5FFCABA70857D69F2974E6410A585B5EFE64DC(tx) {
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len && !states[1];i++) {
      var node = as[i];
      if(!states[1] && node.type === "call" && JAM.identical(node.value, _Storage_prototype_getItem)) {
        states[1] = true
      }
    }
    JAM.process(tx)
  }
  p9C5FFCABA70857D69F2974E6410A585B5EFE64DC.subsumedBy = pFull;
  Object.freeze(p9C5FFCABA70857D69F2974E6410A585B5EFE64DC);
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
  return{p9C5FFCABA70857D69F2974E6410A585B5EFE64DC:p9C5FFCABA70857D69F2974E6410A585B5EFE64DC, p425E08A28862414CF7130381FE99A660F52DB811:p425E08A28862414CF7130381FE99A660F52DB811, pFull:pFull}
}()