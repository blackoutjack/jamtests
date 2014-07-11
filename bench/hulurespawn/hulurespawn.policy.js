var policy = function() {
  var states = [0];
  var _document = document;
  var _Storage_prototype_getItem = Storage.prototype.getItem;
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
      if(!s1 && node.type === "call" && JAM.identical(node.value, _Storage_prototype_getItem)) {
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
  processAll.subsumedBy = processAll;
  Object.freeze(processAll);
  function process9C5FFCABA70857D69F2974E6410A585B5EFE64DC(node) {
    var s1 = states.indexOf(1) > -1;
    if(!s1) {
      if(!s1 && node.type === "call" && JAM.identical(node.value, _Storage_prototype_getItem)) {
        s1 = true;
        states.push(1)
      }
    }
    return true
  }
  Object.freeze(process9C5FFCABA70857D69F2974E6410A585B5EFE64DC);
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
  process425E08A28862414CF7130381FE99A660F52DB811.subsumedBy = processAll;
  Object.freeze(process425E08A28862414CF7130381FE99A660F52DB811);
  return{introspectors:{process9C5FFCABA70857D69F2974E6410A585B5EFE64DC:process9C5FFCABA70857D69F2974E6410A585B5EFE64DC, process425E08A28862414CF7130381FE99A660F52DB811:process425E08A28862414CF7130381FE99A660F52DB811, processAll:processAll}}
}()