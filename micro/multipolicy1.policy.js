var policy = function() {
  var states = [0];
  var _HTMLElement = HTMLElement;
  var _HTMLDocument = HTMLDocument;
  function processAll(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "write" && (node.id === "src" && JAM.instanceof(node.obj, _HTMLElement) && !JAM.identical(node.value, "plaintext-test.png") || node.id === "innerHTML" || node.id === "cookie" && JAM.instanceof(node.obj, _HTMLDocument))) {
        commit = false;
        break
      }
      if(node.type === "read" && node.id === "write" && JAM.instanceof(node.obj, _HTMLDocument)) {
        commit = false;
        break
      }
    }
    if(commit) {
      JAMScript.process(tx)
    }else {
      JAMScript.prevent(tx)
    }
  }
  processAll.subsumedBy = processAll;
  Object.freeze(processAll);
  function process352B9049850A13D6240C92FA86C9847A77C5E747C51DDFC22C8571C0FE27B1BC0B7671157BDF992D3D5BFF5DC7B69AF371F2F5D047B05F9905C5C251(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "write" && (node.id === "src" && JAM.instanceof(node.obj, _HTMLElement) && !JAM.identical(node.value, "plaintext-test.png") || node.id === "innerHTML" || node.id === "cookie" && JAM.instanceof(node.obj, _HTMLDocument))) {
        commit = false;
        break
      }
    }
    if(commit) {
      JAMScript.process(tx)
    }else {
      JAMScript.prevent(tx)
    }
  }
  process352B9049850A13D6240C92FA86C9847A77C5E747C51DDFC22C8571C0FE27B1BC0B7671157BDF992D3D5BFF5DC7B69AF371F2F5D047B05F9905C5C251.subsumedBy = processAll;
  Object.freeze(process352B9049850A13D6240C92FA86C9847A77C5E747C51DDFC22C8571C0FE27B1BC0B7671157BDF992D3D5BFF5DC7B69AF371F2F5D047B05F9905C5C251);
  function process3D5BFF5DC7B69AF371F2F5D047B05F9905C5C251(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "write" && node.id === "cookie" && JAM.instanceof(node.obj, _HTMLDocument)) {
        commit = false;
        break
      }
    }
    if(commit) {
      JAMScript.process(tx)
    }else {
      JAMScript.prevent(tx)
    }
  }
  process3D5BFF5DC7B69AF371F2F5D047B05F9905C5C251.subsumedBy = processAll;
  Object.freeze(process3D5BFF5DC7B69AF371F2F5D047B05F9905C5C251);
  return{introspectors:{process352B9049850A13D6240C92FA86C9847A77C5E747C51DDFC22C8571C0FE27B1BC0B7671157BDF992D3D5BFF5DC7B69AF371F2F5D047B05F9905C5C251:process352B9049850A13D6240C92FA86C9847A77C5E747C51DDFC22C8571C0FE27B1BC0B7671157BDF992D3D5BFF5DC7B69AF371F2F5D047B05F9905C5C251, process3D5BFF5DC7B69AF371F2F5D047B05F9905C5C251:process3D5BFF5DC7B69AF371F2F5D047B05F9905C5C251, processAll:processAll}}
}()