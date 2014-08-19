var policy = function() {
  var states = [true, false, false];
  function pFull(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "write" && (node.id === "textContent" && JAM.identical(node.obj["className"], "destructive-read read-only") || node.id === "innerHTML")) {
        commit = false;
        break
      }
      if(node.type === "read" && (node.id === "textContent" && JAM.identical(node.obj["className"], "write-only non-editable") || node.id === "innerHTML")) {
        commit = false;
        break
      }
      if(states[1] && node.type === "read" && node.id === "textContent" && JAM.identical(node.obj["className"], "destructive-read read-only")) {
        commit = false;
        break
      }
      if(!states[1] && node.type === "read" && node.id === "textContent" && JAM.identical(node.obj["className"], "destructive-read read-only")) {
        states[1] = true
      }
      if(states[2] && node.type === "write" && node.id === "textContent" && JAM.identical(node.obj["className"], "write-only non-editable")) {
        commit = false;
        break
      }
      if(!states[2] && node.type === "write" && node.id === "textContent" && JAM.identical(node.obj["className"], "write-only non-editable")) {
        states[2] = true
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
  function p17(tx) {
    var commit = true;
    var as = tx.getWriteSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.id === "textContent" && JAM.identical(node.obj["className"], "destructive-read read-only")) {
        commit = false;
        break
      }
      if(states[2] && node.id === "textContent" && JAM.identical(node.obj["className"], "write-only non-editable")) {
        commit = false;
        break
      }
      if(!states[2] && node.id === "textContent" && JAM.identical(node.obj["className"], "write-only non-editable")) {
        states[2] = true
      }
    }
    if(commit) {
      JAM.process(tx)
    }else {
      JAM.prevent(tx)
    }
  }
  p17.subsumedBy = pFull;
  p17.itype = "write";
  Object.freeze(p17);
  function p19(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "write" && (node.id === "textContent" && JAM.identical(node.obj["className"], "destructive-read read-only") || node.id === "innerHTML")) {
        commit = false;
        break
      }
      if(node.type === "read" && (node.id === "textContent" && JAM.identical(node.obj["className"], "write-only non-editable") || node.id === "innerHTML")) {
        commit = false;
        break
      }
      if(states[1] && node.type === "read" && node.id === "textContent" && JAM.identical(node.obj["className"], "destructive-read read-only")) {
        commit = false;
        break
      }
      if(!states[1] && node.type === "read" && node.id === "textContent" && JAM.identical(node.obj["className"], "destructive-read read-only")) {
        states[1] = true
      }
      if(states[2] && node.type === "write" && node.id === "textContent" && JAM.identical(node.obj["className"], "write-only non-editable")) {
        commit = false;
        break
      }
      if(!states[2] && node.type === "write" && node.id === "textContent" && JAM.identical(node.obj["className"], "write-only non-editable")) {
        states[2] = true
      }
    }
    if(commit) {
      JAM.process(tx)
    }else {
      JAM.prevent(tx)
    }
  }
  p19.subsumedBy = pFull;
  Object.freeze(p19);
  function p18(tx) {
    var commit = true;
    var as = tx.getWriteSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.id === "textContent" && JAM.identical(node.obj["className"], "destructive-read read-only") || node.id === "innerHTML") {
        commit = false;
        break
      }
      if(states[2] && node.id === "textContent" && JAM.identical(node.obj["className"], "write-only non-editable")) {
        commit = false;
        break
      }
      if(!states[2] && node.id === "textContent" && JAM.identical(node.obj["className"], "write-only non-editable")) {
        states[2] = true
      }
    }
    if(commit) {
      JAM.process(tx)
    }else {
      JAM.prevent(tx)
    }
  }
  p18.subsumedBy = pFull;
  p18.itype = "write";
  Object.freeze(p18);
  function p3(tx) {
    var commit = true;
    var as = tx.getWriteSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.id === "innerHTML") {
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
  p3.itype = "write";
  Object.freeze(p3);
  function p12(tx) {
    var commit = true;
    var as = tx.getReadSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.id === "textContent" && JAM.identical(node.obj["className"], "write-only non-editable") || node.id === "innerHTML") {
        commit = false;
        break
      }
      if(states[1] && node.id === "textContent" && JAM.identical(node.obj["className"], "destructive-read read-only")) {
        commit = false;
        break
      }
      if(!states[1] && node.id === "textContent" && JAM.identical(node.obj["className"], "destructive-read read-only")) {
        states[1] = true
      }
    }
    if(commit) {
      JAM.process(tx)
    }else {
      JAM.prevent(tx)
    }
  }
  p12.subsumedBy = pFull;
  p12.itype = "read";
  Object.freeze(p12);
  function p11(tx) {
    var commit = true;
    var as = tx.getReadSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.id === "textContent" && JAM.identical(node.obj["className"], "write-only non-editable")) {
        commit = false;
        break
      }
      if(states[1] && node.id === "textContent" && JAM.identical(node.obj["className"], "destructive-read read-only")) {
        commit = false;
        break
      }
      if(!states[1] && node.id === "textContent" && JAM.identical(node.obj["className"], "destructive-read read-only")) {
        states[1] = true
      }
    }
    if(commit) {
      JAM.process(tx)
    }else {
      JAM.prevent(tx)
    }
  }
  p11.subsumedBy = pFull;
  p11.itype = "read";
  Object.freeze(p11);
  return{p17:p17, p19:p19, p18:p18, p3:p3, p12:p12, p11:p11, pFull:pFull, woven:true}
}()