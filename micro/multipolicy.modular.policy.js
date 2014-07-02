var policy = function() {
  var states = [0];
  var _HTMLElement = HTMLElement;
  var _HTMLDocument_prototype_createElement = HTMLDocument.prototype.createElement;
  var _document = document;
  var _HTMLDocument_prototype_write = HTMLDocument.prototype.write;
  var _HTMLDocument_prototype_getElementById = HTMLDocument.prototype.getElementById;
  function processAll(tx) {
    var commit = true;
    var s2 = states.indexOf(2) > -1;
    var s1 = states.indexOf(1) > -1;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(s2 && node.type === "write" && node.id === "src" && JAM.instanceof(node.obj, _HTMLElement)) {
        commit = false;
        break
      }
      if(s1 && !s2 && node.type === "call" && JAM.identical(node.value, _HTMLDocument_prototype_createElement)) {
        s2 = true;
        states.push(2)
      }
      if(s1 && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(s1 && node.type === "call" && JAM.identical(node.value, _HTMLDocument_prototype_write)) {
        commit = false;
        break
      }
      if(!s1 && node.type === "read" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        s1 = true;
        states.push(1)
      }
      if(!s1 && node.type === "call" && JAM.identical(node.value, _HTMLDocument_prototype_getElementById)) {
        s1 = true;
        states.push(1)
      }
    }
    if(commit) {
      JAMScript.process(tx)
    }else {
      JAMScript.prevent(tx)
    }
  }
  return{introspectors:{processAll:processAll}}
}()