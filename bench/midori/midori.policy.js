var policy = function() {
  var states = [true, false];
  var _document = document;
  function pFull(tx) {
    var commit = true;
    var as = tx.getWriteSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(states[1] && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(!states[1] && node.id === "setCookieSentinel" && JAM.identical(node.value, true)) {
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
  pFull.itype = "write";
  Object.freeze(pFull);
  function p1(tx) {
    var as = tx.getWriteSequence();
    var len = as.length;
    for(var i = 0;i < len && !states[1];i++) {
      var node = as[i];
      if(!states[1] && node.id === "setCookieSentinel" && JAM.identical(node.value, true)) {
        states[1] = true
      }
    }
    JAM.process(tx)
  }
  p1.subsumedBy = pFull;
  p1.itype = "write";
  Object.freeze(p1);
  function p2(tx) {
    var commit = true;
    if(states[1]) {
      var as = tx.getWriteSequence();
      var len = as.length;
      for(var i = 0;i < len;i++) {
        var node = as[i];
        if(states[1] && JAM.identical(node.obj, _document) && node.id === "cookie") {
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
  p2.subsumedBy = pFull;
  p2.itype = "write";
  Object.freeze(p2);
  return{p1:p1, p2:p2, pFull:pFull, woven:true}
}()