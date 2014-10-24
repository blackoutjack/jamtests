var policy = function() {
  var states = [true, false, false];
  var _HTMLElement = HTMLElement;
  var _HTMLDocument_prototype_createElement = HTMLDocument.prototype.createElement;
  var _document = document;
  var _HTMLDocument_prototype_write = HTMLDocument.prototype.write;
  var _HTMLDocument_prototype_getElementById = HTMLDocument.prototype.getElementById;
  function pFull(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for (var i = 0;i < len;i++) {
      var node = as[i];
      if (states[2] && node.type === "write" && (node.id === "src" && JAM.instanceof(node.obj, _HTMLElement))) {
        commit = false;
        break;
      }
      if (states[1] && !states[2] && node.type === "invoke" && JAM.identical(node.value, _HTMLDocument_prototype_createElement)) {
        states[2] = true;
      }
      if (states[1] && node.type === "write" && (JAM.identical(node.obj, _document) && node.id === "cookie")) {
        commit = false;
        break;
      }
      if (states[1] && node.type === "invoke" && JAM.identical(node.value, _HTMLDocument_prototype_write)) {
        commit = false;
        break;
      }
      if (!states[1] && node.type === "read" && (JAM.identical(node.obj, _document) && node.id === "cookie")) {
        states[1] = true;
      }
      if (!states[1] && node.type === "invoke" && JAM.identical(node.value, _HTMLDocument_prototype_getElementById)) {
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
  Object.freeze(pFull);
  return{pFull:pFull};
}()