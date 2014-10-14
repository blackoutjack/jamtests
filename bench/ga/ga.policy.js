var policy = function() {
  var _HTMLDocument_prototype_createElement = HTMLDocument.prototype.createElement;
  var _HTMLDocument_prototype_write = HTMLDocument.prototype.write;
  function pFull(tx) {
    var commit = true;
    var as = tx.getCallSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(JAM.identical(node.value, _HTMLDocument_prototype_createElement) && node.argc > 0 && JAM.identical(node.args[0], "script") || JAM.identical(node.value, _HTMLDocument_prototype_write) && node.argc > 0 && !JAM.identical(node.args[0], undefined)) {
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
  pFull.itype = "call";
  Object.freeze(pFull);
  function p2(tx) {
    var commit = true;
    var as = tx.getCallSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(JAM.identical(node.value, _HTMLDocument_prototype_createElement) && node.argc > 0 && JAM.identical(node.args[0], "script") || JAM.identical(node.value, _HTMLDocument_prototype_write) && node.argc > 0 && !JAM.identical(node.args[0], undefined)) {
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
  p2.subsumedBy = pFull;
  p2.itype = "call";
  Object.freeze(p2);
  function p3(tx) {
    var commit = true;
    var as = tx.getCallSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(JAM.identical(node.value, _HTMLDocument_prototype_write) && node.argc > 0 && !JAM.identical(node.args[0], undefined)) {
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
  p3.subsumedBy = pFull;
  p3.itype = "call";
  Object.freeze(p3);
  return{p2:p2, p3:p3, pFull:pFull, woven:true}
}()