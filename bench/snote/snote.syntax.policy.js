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
  function p21(tx) {
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
  p21.subsumedBy = pFull;
  Object.freeze(p21);
  function p22(tx) {
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
  p22.subsumedBy = pFull;
  Object.freeze(p22);
  function p9(tx) {
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
  p9.subsumedBy = pFull;
  Object.freeze(p9);
  function p15(tx) {
    var commit = true;
    var as = tx.getReadSequence();
    var len = as.length;
    for (var i = 0;i < len;i++) {
      var node = as[i];
      if (node.id === "textContent" && JAM.identical(node.obj["className"], "write-only non-editable") || node.id === "innerHTML") {
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
  p15.subsumedBy = pFull;
  p15.itype = "read";
  Object.freeze(p15);
  function p18(tx) {
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
  p18.subsumedBy = pFull;
  p18.itype = "read";
  Object.freeze(p18);
  function p10(tx) {
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
  p10.subsumedBy = pFull;
  p10.itype = "read";
  Object.freeze(p10);
  return{p21:p21, p22:p22, p9:p9, p15:p15, p18:p18, p10:p10, pFull:pFull, woven:true};
}()