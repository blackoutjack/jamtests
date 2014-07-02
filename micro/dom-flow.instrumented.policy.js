var policy = function() {
  var states = [0];
  function processAll(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "write" && node.id === "textContent" && JAM.identical(node.obj["className"], "read-only")) {
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
  function process6FC57D54E3DC1AB1C47F352EDE6E2B7366E67743(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "write" && node.id === "textContent" && JAM.identical(node.obj["className"], "read-only")) {
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
  return{introspectors:{process6FC57D54E3DC1AB1C47F352EDE6E2B7366E67743:process6FC57D54E3DC1AB1C47F352EDE6E2B7366E67743, processAll:processAll}}
}()