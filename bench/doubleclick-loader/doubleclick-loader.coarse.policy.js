var policy = function() {
  var states = [true, false];
  var _location = location;
  function pFull(tx) {
    var commit = true;
    var as = tx.getWriteSequence();
    var len = as.length;
    for (var i = 0;i < len;i++) {
      var node = as[i];
      if (states[1] && _location["href"] !== "http://localhost/") {
        commit = false;
        break;
      }
      if (!states[1] && _location["href"] === "http://localhost/") {
        states[1] = true;
      }
    }
    if (commit) {
      JAM.process(tx);
    } else {
      JAM.prevent(tx);
    }
  }
  pFull.subsumedBy = pFull;
  pFull.itype = "write";
  Object.freeze(pFull);
  return{pFull:pFull};
}()