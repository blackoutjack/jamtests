var policy = function() {
  var states = [true, false];
  var _document = document;
  var _HTMLDocument_prototype_getElementById = HTMLDocument.prototype.getElementById;
  var _HTMLDocument_prototype_getElementsByTagName = HTMLDocument.prototype.getElementsByTagName;
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
      if(!states[1] && node.type === "call" && (JAM.identical(node.value, _HTMLDocument_prototype_getElementById) || JAM.identical(node.value, _HTMLDocument_prototype_getElementsByTagName))) {
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
  function p76F930B34187247043082CAF9881927B310E8F564E301A1AA8BF2B7374C3F6541DC9BB72815A4493(tx) {
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len && !states[1];i++) {
      var node = as[i];
      if(!states[1] && node.type === "call" && (JAM.identical(node.value, _HTMLDocument_prototype_getElementById) || JAM.identical(node.value, _HTMLDocument_prototype_getElementsByTagName))) {
        states[1] = true
      }
    }
    JAM.process(tx)
  }
  p76F930B34187247043082CAF9881927B310E8F564E301A1AA8BF2B7374C3F6541DC9BB72815A4493.subsumedBy = pFull;
  Object.freeze(p76F930B34187247043082CAF9881927B310E8F564E301A1AA8BF2B7374C3F6541DC9BB72815A4493);
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
  return{p76F930B34187247043082CAF9881927B310E8F564E301A1AA8BF2B7374C3F6541DC9BB72815A4493:p76F930B34187247043082CAF9881927B310E8F564E301A1AA8BF2B7374C3F6541DC9BB72815A4493, p425E08A28862414CF7130381FE99A660F52DB811:p425E08A28862414CF7130381FE99A660F52DB811, pFull:pFull}
}()