var policy = function() {
  var states = [true, false, false];
  function pFull(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for (var i = 0;i < len;i++) {
      var node = as[i];
      if (node.type === "write" && (node.id === "textContent" && node.obj["className"] === "destructive-read read-only" || node.id === "innerHTML")) {
        commit = false;
        break;
      }
      if (node.type === "read" && (node.id === "textContent" && node.obj["className"] === "write-only non-editable" || node.id === "innerHTML")) {
        commit = false;
        break;
      }
      if (states[1] && node.type === "read" && (node.id === "textContent" && node.obj["className"] === "destructive-read read-only")) {
        commit = false;
        break;
      }
      if (!states[1] && node.type === "read" && (node.id === "textContent" && node.obj["className"] === "destructive-read read-only")) {
        states[1] = true;
      }
      if (states[2] && node.type === "write" && (node.id === "textContent" && node.obj["className"] === "write-only non-editable")) {
        commit = false;
        break;
      }
      if (!states[2] && node.type === "write" && (node.id === "textContent" && node.obj["className"] === "write-only non-editable")) {
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
  function p8(tx) {
    var commit = true;
    var as = tx.getWriteSequence();
    var len = as.length;
    for (var i = 0;i < len;i++) {
      var node = as[i];
      if (node.id === "textContent" && node.obj["className"] === "destructive-read read-only") {
        commit = false;
        break;
      }
      if (states[2] && (node.id === "textContent" && node.obj["className"] === "write-only non-editable")) {
        commit = false;
        break;
      }
      if (!states[2] && (node.id === "textContent" && node.obj["className"] === "write-only non-editable")) {
        states[2] = true;
      }
    }
    if (commit) {
      JAM.process(tx);
    } else {
      JAM.prevent(tx);
    }
  }
  p8.subsumedBy = pFull;
  p8.itype = "write";
  Object.freeze(p8);
  function p2(tx) {
    var commit = true;
    var as = tx.getWriteSequence();
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
  p2.subsumedBy = pFull;
  p2.itype = "write";
  Object.freeze(p2);
  function p6(tx) {
    var commit = true;
    var as = tx.getReadSequence();
    var len = as.length;
    for (var i = 0;i < len;i++) {
      var node = as[i];
      if (node.id === "textContent" && node.obj["className"] === "write-only non-editable") {
        commit = false;
        break;
      }
      if (states[1] && (node.id === "textContent" && node.obj["className"] === "destructive-read read-only")) {
        commit = false;
        break;
      }
      if (!states[1] && (node.id === "textContent" && node.obj["className"] === "destructive-read read-only")) {
        states[1] = true;
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
  function p4(tx) {
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
  p4.subsumedBy = pFull;
  p4.itype = "read";
  Object.freeze(p4);
  return{p8:p8, p2:p2, p6:p6, p4:p4, pFull:pFull, woven:true};
}()