var policy = function() {
  var states = [0];
  var _document = document;
  function processAll(tx) {
    var commit = true;
    var s1 = states.indexOf(1) > -1;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(s1 && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(!s1 && node.type === "write" && node.id === "setCookieSentinel" && JAM.identical(node.value, true)) {
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
  function process3F9F399AB000376076BBFF3A9A9C0103B23A9835(tx) {
    var s1 = states.indexOf(1) > -1;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len && !s1;i++) {
      var node = as[i];
      if(!s1 && node.type === "write" && node.id === "setCookieSentinel" && JAM.identical(node.value, true)) {
        s1 = true;
        states.push(1)
      }
    }
    JAMScript.process(tx)
  }
  function process425E08A28862414CF7130381FE99A660F52DB811(tx) {
    var commit = true;
    var s1 = states.indexOf(1) > -1;
    if(s1) {
      var as = tx.getActionSequence();
      var len = as.length;
      for(var i = 0;i < len;i++) {
        var node = as[i];
        if(s1 && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
          commit = false;
          break
        }
      }
    }
    if(commit) {
      JAMScript.process(tx)
    }else {
      JAMScript.prevent(tx)
    }
  }
  return{introspectors:{process3F9F399AB000376076BBFF3A9A9C0103B23A9835:process3F9F399AB000376076BBFF3A9A9C0103B23A9835, process425E08A28862414CF7130381FE99A660F52DB811:process425E08A28862414CF7130381FE99A660F52DB811, processAll:processAll}}
}()