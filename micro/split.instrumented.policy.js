var policy = function() {
  var states = [0];
  var _HTMLDocument_prototype_createElement = HTMLDocument.prototype.createElement;
  var _HTMLDocument_prototype_write = HTMLDocument.prototype.write;
  function processAll(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "call" && (JAM.identical(node.value, _HTMLDocument_prototype_createElement) || JAM.identical(node.value, _HTMLDocument_prototype_write))) {
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
  function process4E61D3C9E799EB3A777EE89D7018CA08390F879C(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "call" && JAM.identical(node.value, _HTMLDocument_prototype_createElement)) {
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
  function process2AC16C3A7F558F03B7589B0B341CC13E0A9FCA1E(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "call" && JAM.identical(node.value, _HTMLDocument_prototype_write)) {
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
  return{introspectors:{process4E61D3C9E799EB3A777EE89D7018CA08390F879C:process4E61D3C9E799EB3A777EE89D7018CA08390F879C, process2AC16C3A7F558F03B7589B0B341CC13E0A9FCA1E:process2AC16C3A7F558F03B7589B0B341CC13E0A9FCA1E, processAll:processAll}}
}()