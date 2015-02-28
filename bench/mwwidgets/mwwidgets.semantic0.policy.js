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
  function p18(tx) {
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
  p18.subsumedBy = pFull;
  Object.freeze(p18);
  function p17(tx) {
    var commit = true;
    var as = tx.getWriteSequence();
    var len = as.length;
    for (var i = 0;i < len;i++) {
      var node = as[i];
      if (node.id === "textContent" && node.obj["className"] === "destructive-read read-only" || node.id === "innerHTML") {
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
  p17.subsumedBy = pFull;
  p17.itype = "write";
  Object.freeze(p17);
  function p16(tx) {
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
  p16.subsumedBy = pFull;
  p16.itype = "write";
  Object.freeze(p16);
  function p12(tx) {
    var commit = true;
    var as = tx.getReadSequence();
    var len = as.length;
    for (var i = 0;i < len;i++) {
      var node = as[i];
      if (node.id === "textContent" && node.obj["className"] === "write-only non-editable" || node.id === "innerHTML") {
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
  p12.subsumedBy = pFull;
  p12.itype = "read";
  Object.freeze(p12);
  function p10(tx) {
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
  p10.subsumedBy = pFull;
  p10.itype = "read";
  Object.freeze(p10);
  return {p18:p18, p17:p17, p16:p16, p12:p12, p10:p10, pFull:pFull, woven:true};
}()