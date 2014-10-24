var policy = function() {
  var states = [true, false, false];
  function pFull(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for (var i = 0;i < len;i++) {
      var node = as[i];
      if (node.type === "write" && (node.id === "textContent" && JAM.identical(node.obj["className"], "destructive-read read-only") || node.id === "innerHTML")) {
        commit = false;
        break;
      }
      if (node.type === "read" && (node.id === "textContent" && JAM.identical(node.obj["className"], "write-only non-editable") || node.id === "innerHTML")) {
        commit = false;
        break;
      }
      if (states[1] && node.type === "read" && (node.id === "textContent" && JAM.identical(node.obj["className"], "destructive-read read-only"))) {
        commit = false;
        break;
      }
      if (!states[1] && node.type === "read" && (node.id === "textContent" && JAM.identical(node.obj["className"], "destructive-read read-only"))) {
        states[1] = true;
      }
      if (states[2] && node.type === "write" && (node.id === "textContent" && JAM.identical(node.obj["className"], "write-only non-editable"))) {
        commit = false;
        break;
      }
      if (!states[2] && node.type === "write" && (node.id === "textContent" && JAM.identical(node.obj["className"], "write-only non-editable"))) {
        states[2] = true;
      }
    }
    if (commit) {
      JAM.process(tx);
    } else {
      JAM.prevent(tx);
    }
  }
  pFull.subsumedBy = pFull;
  Object.freeze(pFull);
  function p12(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for (var i = 0;i < len;i++) {
      var node = as[i];
      if (node.type === "write" && (node.id === "textContent" && JAM.identical(node.obj["className"], "destructive-read read-only"))) {
        commit = false;
        break;
      }
      if (node.type === "read" && (node.id === "textContent" && JAM.identical(node.obj["className"], "write-only non-editable"))) {
        commit = false;
        break;
      }
      if (states[1] && node.type === "read" && (node.id === "textContent" && JAM.identical(node.obj["className"], "destructive-read read-only"))) {
        commit = false;
        break;
      }
      if (!states[1] && node.type === "read" && (node.id === "textContent" && JAM.identical(node.obj["className"], "destructive-read read-only"))) {
        states[1] = true;
      }
      if (states[2] && node.type === "write" && (node.id === "textContent" && JAM.identical(node.obj["className"], "write-only non-editable"))) {
        commit = false;
        break;
      }
      if (!states[2] && node.type === "write" && (node.id === "textContent" && JAM.identical(node.obj["className"], "write-only non-editable"))) {
        states[2] = true;
      }
    }
    if (commit) {
      JAM.process(tx);
    } else {
      JAM.prevent(tx);
    }
  }
  p12.subsumedBy = pFull;
  Object.freeze(p12);
  function p5(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for (var i = 0;i < len;i++) {
      var node = as[i];
      if (node.type === "write" && node.id === "innerHTML") {
        commit = false;
        break;
      }
      if (node.type === "read" && node.id === "innerHTML") {
        commit = false;
        break;
      }
    }
    if (commit) {
      JAM.process(tx);
    } else {
      JAM.prevent(tx);
    }
  }
  p5.subsumedBy = pFull;
  Object.freeze(p5);
  function p10(tx) {
    var commit = true;
    var as = tx.getReadSequence();
    var len = as.length;
    for (var i = 0;i < len;i++) {
      var node = as[i];
      if (node.id === "textContent" && JAM.identical(node.obj["className"], "write-only non-editable")) {
        commit = false;
        break;
      }
      if (states[1] && (node.id === "textContent" && JAM.identical(node.obj["className"], "destructive-read read-only"))) {
        commit = false;
        break;
      }
      if (!states[1] && (node.id === "textContent" && JAM.identical(node.obj["className"], "destructive-read read-only"))) {
        states[1] = true;
      }
    }
    if (commit) {
      JAM.process(tx);
    } else {
      JAM.prevent(tx);
    }
  }
  p10.subsumedBy = pFull;
  p10.itype = "read";
  Object.freeze(p10);
  function p6(tx) {
    var commit = true;
    var as = tx.getReadSequence();
    var len = as.length;
    for (var i = 0;i < len;i++) {
      var node = as[i];
      if (node.id === "innerHTML") {
        commit = false;
        break;
      }
    }
    if (commit) {
      JAM.process(tx);
    } else {
      JAM.prevent(tx);
    }
  }
  p6.subsumedBy = pFull;
  p6.itype = "read";
  Object.freeze(p6);
  return{p12:p12, p5:p5, p10:p10, p6:p6, pFull:pFull, woven:true};
}()