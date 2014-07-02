var policy = function() {
  var states = [0];
  var _document = document;
  var _HTMLDocument_prototype_getElementById = HTMLDocument.prototype.getElementById;
  var _HTMLDocument_prototype_getElementsByTagName = HTMLDocument.prototype.getElementsByTagName;
  function processAll(tx) {
    var commit = true;
    var s1 = states.indexOf(1) > -1;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(s1 && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(!s1 && node.type === "call" && (JAM.identical(node.value, _HTMLDocument_prototype_getElementById) || JAM.identical(node.value, _HTMLDocument_prototype_getElementsByTagName))) {
        s1 = true;
        states.push(1)
      }
    }
    if(commit) {
      JAMScript.process(tx)
    }else {
      JAMScript.prevent(tx)
    }
  }
  function process76F930B34187247043082CAF9881927B310E8F564E301A1AA8BF2B7374C3F6541DC9BB72815A4493(node) {
    var s1 = states.indexOf(1) > -1;
    if(!s1) {
      if(!s1 && node.type === "call" && (JAM.identical(node.value, _HTMLDocument_prototype_getElementById) || JAM.identical(node.value, _HTMLDocument_prototype_getElementsByTagName))) {
        s1 = true;
        states.push(1)
      }
    }
    return true
  }
  function processE96DC1A06663FB021BA567E6C73EA87B0883BB12(tx) {
    var commit = true;
    var s1 = states.indexOf(1) > -1;
    if(s1) {
      var as = tx.getActionSequence();
      var len = as.length;
      for(var i = 0;i < len;i++) {
        var node = as[i];
        if(s1 && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
          commit = false;
          break
        }
      }
    }
    if(commit) {
      JAMScript.process(tx)
    }else {
      JAMScript.prevent(tx)
    }
  }
  return{introspectors:{process76F930B34187247043082CAF9881927B310E8F564E301A1AA8BF2B7374C3F6541DC9BB72815A4493:process76F930B34187247043082CAF9881927B310E8F564E301A1AA8BF2B7374C3F6541DC9BB72815A4493, processE96DC1A06663FB021BA567E6C73EA87B0883BB12:processE96DC1A06663FB021BA567E6C73EA87B0883BB12, processAll:processAll}}
}()