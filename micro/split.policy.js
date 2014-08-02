var policy = function() {
  var _HTMLDocument_prototype_createElement = HTMLDocument.prototype.createElement;
  var _HTMLDocument_prototype_write = HTMLDocument.prototype.write;
  function pFull(tx) {
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
      JAM.process(tx)
    }else {
      JAM.prevent(tx)
    }
  }
  pFull.subsumedBy = pFull;
  Object.freeze(pFull);
  function p4E61D3C9E799EB3A777EE89D7018CA08390F879C(tx) {
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
      JAM.process(tx)
    }else {
      JAM.prevent(tx)
    }
  }
  p4E61D3C9E799EB3A777EE89D7018CA08390F879C.subsumedBy = pFull;
  Object.freeze(p4E61D3C9E799EB3A777EE89D7018CA08390F879C);
  function p2AC16C3A7F558F03B7589B0B341CC13E0A9FCA1E(tx) {
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
      JAM.process(tx)
    }else {
      JAM.prevent(tx)
    }
  }
  p2AC16C3A7F558F03B7589B0B341CC13E0A9FCA1E.subsumedBy = pFull;
  Object.freeze(p2AC16C3A7F558F03B7589B0B341CC13E0A9FCA1E);
  return{p4E61D3C9E799EB3A777EE89D7018CA08390F879C:p4E61D3C9E799EB3A777EE89D7018CA08390F879C, p2AC16C3A7F558F03B7589B0B341CC13E0A9FCA1E:p2AC16C3A7F558F03B7589B0B341CC13E0A9FCA1E, pFull:pFull}
}()