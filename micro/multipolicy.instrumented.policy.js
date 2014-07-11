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
  processAll.subsumedBy = processAll;
  Object.freeze(processAll);
  function processB66E1E6A02EE17375C126A2C8AC7D7F8CC6B0C12(tx) {
    var s1 = states.indexOf(1) > -1;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len && !s1;i++) {
      var node = as[i];
      if(!s1 && node.type === "read" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        s1 = true;
        states.push(1)
      }
    }
    JAMScript.process(tx)
  }
  processB66E1E6A02EE17375C126A2C8AC7D7F8CC6B0C12.subsumedBy = processAll;
  Object.freeze(processB66E1E6A02EE17375C126A2C8AC7D7F8CC6B0C12);
  function process7A76F4A052B00CB8470C5456FB7E9CD32CA4843C(tx) {
    var s1 = states.indexOf(1) > -1;
    var s2 = states.indexOf(2) > -1;
    if(s1) {
      var as = tx.getActionSequence();
      var len = as.length;
      for(var i = 0;i < len && !s2;i++) {
        var node = as[i];
        if(s1 && !s2 && node.type === "call" && JAM.identical(node.value, _HTMLDocument_prototype_createElement)) {
          s2 = true;
          states.push(2)
        }
      }
    }
    JAMScript.process(tx)
  }
  process7A76F4A052B00CB8470C5456FB7E9CD32CA4843C.subsumedBy = processAll;
  Object.freeze(process7A76F4A052B00CB8470C5456FB7E9CD32CA4843C);
  function processF87540E947B0B5FFDF4D142ACFD250D318FB96BE(tx) {
    var commit = true;
    var s2 = states.indexOf(2) > -1;
    if(s2) {
      var as = tx.getActionSequence();
      var len = as.length;
      for(var i = 0;i < len;i++) {
        var node = as[i];
        if(s2 && node.type === "write" && node.id === "src" && JAM.instanceof(node.obj, _HTMLElement)) {
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
  processF87540E947B0B5FFDF4D142ACFD250D318FB96BE.subsumedBy = processAll;
  Object.freeze(processF87540E947B0B5FFDF4D142ACFD250D318FB96BE);
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
  function processA08CEDA442E424AE71BF7DCC829F61A509D2BF14(tx) {
    var commit = true;
    var s1 = states.indexOf(1) > -1;
    if(s1) {
      var as = tx.getActionSequence();
      var len = as.length;
      for(var i = 0;i < len;i++) {
        var node = as[i];
        if(s1 && node.type === "call" && JAM.identical(node.value, _HTMLDocument_prototype_write)) {
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
  processA08CEDA442E424AE71BF7DCC829F61A509D2BF14.subsumedBy = processAll;
  Object.freeze(processA08CEDA442E424AE71BF7DCC829F61A509D2BF14);
  function process76F930B34187247043082CAF9881927B310E8F56(tx) {
    var s1 = states.indexOf(1) > -1;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len && !s1;i++) {
      var node = as[i];
      if(!s1 && node.type === "call" && JAM.identical(node.value, _HTMLDocument_prototype_getElementById)) {
        s1 = true;
        states.push(1)
      }
    }
    JAMScript.process(tx)
  }
  process76F930B34187247043082CAF9881927B310E8F56.subsumedBy = processAll;
  Object.freeze(process76F930B34187247043082CAF9881927B310E8F56);
  return{introspectors:{processB66E1E6A02EE17375C126A2C8AC7D7F8CC6B0C12:processB66E1E6A02EE17375C126A2C8AC7D7F8CC6B0C12, process7A76F4A052B00CB8470C5456FB7E9CD32CA4843C:process7A76F4A052B00CB8470C5456FB7E9CD32CA4843C, processF87540E947B0B5FFDF4D142ACFD250D318FB96BE:processF87540E947B0B5FFDF4D142ACFD250D318FB96BE, process425E08A28862414CF7130381FE99A660F52DB811:process425E08A28862414CF7130381FE99A660F52DB811, processA08CEDA442E424AE71BF7DCC829F61A509D2BF14:processA08CEDA442E424AE71BF7DCC829F61A509D2BF14, 
  process76F930B34187247043082CAF9881927B310E8F56:process76F930B34187247043082CAF9881927B310E8F56, processAll:processAll}}
}()