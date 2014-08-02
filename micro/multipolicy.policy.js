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
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(states[2] && node.type === "write" && node.id === "src" && JAM.instanceof(node.obj, _HTMLElement)) {
        commit = false;
        break
      }
      if(states[1] && !states[2] && node.type === "call" && JAM.identical(node.value, _HTMLDocument_prototype_createElement)) {
        states[2] = true
      }
      if(states[1] && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(states[1] && node.type === "call" && JAM.identical(node.value, _HTMLDocument_prototype_write)) {
        commit = false;
        break
      }
      if(!states[1] && node.type === "read" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        states[1] = true
      }
      if(!states[1] && node.type === "call" && JAM.identical(node.value, _HTMLDocument_prototype_getElementById)) {
        states[1] = true
      }
    }
    if(commit) {
      JAM.process(tx)
    }else {
      JAM.prevent(tx)
    }
  }
  pFull.subsumedBy = pFull;
  Object.freeze(pFull);
  function pB66E1E6A02EE17375C126A2C8AC7D7F8CC6B0C12(tx) {
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len && !states[1];i++) {
      var node = as[i];
      if(!states[1] && node.type === "read" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        states[1] = true
      }
    }
    JAM.process(tx)
  }
  pB66E1E6A02EE17375C126A2C8AC7D7F8CC6B0C12.subsumedBy = pFull;
  Object.freeze(pB66E1E6A02EE17375C126A2C8AC7D7F8CC6B0C12);
  function p7A76F4A052B00CB8470C5456FB7E9CD32CA4843C(tx) {
    if(states[1]) {
      var as = tx.getActionSequence();
      var len = as.length;
      for(var i = 0;i < len && !states[2];i++) {
        var node = as[i];
        if(states[1] && !states[2] && node.type === "call" && JAM.identical(node.value, _HTMLDocument_prototype_createElement)) {
          states[2] = true
        }
      }
    }
    JAM.process(tx)
  }
  p7A76F4A052B00CB8470C5456FB7E9CD32CA4843C.subsumedBy = pFull;
  Object.freeze(p7A76F4A052B00CB8470C5456FB7E9CD32CA4843C);
  function pF87540E947B0B5FFDF4D142ACFD250D318FB96BE(tx) {
    var commit = true;
    if(states[2]) {
      var as = tx.getActionSequence();
      var len = as.length;
      for(var i = 0;i < len;i++) {
        var node = as[i];
        if(states[2] && node.type === "write" && node.id === "src" && JAM.instanceof(node.obj, _HTMLElement)) {
          commit = false;
          break
        }
      }
    }
    if(commit) {
      JAM.process(tx)
    }else {
      JAM.prevent(tx)
    }
  }
  pF87540E947B0B5FFDF4D142ACFD250D318FB96BE.subsumedBy = pFull;
  Object.freeze(pF87540E947B0B5FFDF4D142ACFD250D318FB96BE);
  function p425E08A28862414CF7130381FE99A660F52DB811(tx) {
    var commit = true;
    if(states[1]) {
      var as = tx.getActionSequence();
      var len = as.length;
      for(var i = 0;i < len;i++) {
        var node = as[i];
        if(states[1] && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
          commit = false;
          break
        }
      }
    }
    if(commit) {
      JAM.process(tx)
    }else {
      JAM.prevent(tx)
    }
  }
  p425E08A28862414CF7130381FE99A660F52DB811.subsumedBy = pFull;
  Object.freeze(p425E08A28862414CF7130381FE99A660F52DB811);
  function pA08CEDA442E424AE71BF7DCC829F61A509D2BF14(tx) {
    var commit = true;
    if(states[1]) {
      var as = tx.getActionSequence();
      var len = as.length;
      for(var i = 0;i < len;i++) {
        var node = as[i];
        if(states[1] && node.type === "call" && JAM.identical(node.value, _HTMLDocument_prototype_write)) {
          commit = false;
          break
        }
      }
    }
    if(commit) {
      JAM.process(tx)
    }else {
      JAM.prevent(tx)
    }
  }
  pA08CEDA442E424AE71BF7DCC829F61A509D2BF14.subsumedBy = pFull;
  Object.freeze(pA08CEDA442E424AE71BF7DCC829F61A509D2BF14);
  function p76F930B34187247043082CAF9881927B310E8F56(tx) {
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len && !states[1];i++) {
      var node = as[i];
      if(!states[1] && node.type === "call" && JAM.identical(node.value, _HTMLDocument_prototype_getElementById)) {
        states[1] = true
      }
    }
    JAM.process(tx)
  }
  p76F930B34187247043082CAF9881927B310E8F56.subsumedBy = pFull;
  Object.freeze(p76F930B34187247043082CAF9881927B310E8F56);
  return{pB66E1E6A02EE17375C126A2C8AC7D7F8CC6B0C12:pB66E1E6A02EE17375C126A2C8AC7D7F8CC6B0C12, p7A76F4A052B00CB8470C5456FB7E9CD32CA4843C:p7A76F4A052B00CB8470C5456FB7E9CD32CA4843C, pF87540E947B0B5FFDF4D142ACFD250D318FB96BE:pF87540E947B0B5FFDF4D142ACFD250D318FB96BE, p425E08A28862414CF7130381FE99A660F52DB811:p425E08A28862414CF7130381FE99A660F52DB811, pA08CEDA442E424AE71BF7DCC829F61A509D2BF14:pA08CEDA442E424AE71BF7DCC829F61A509D2BF14, p76F930B34187247043082CAF9881927B310E8F56:p76F930B34187247043082CAF9881927B310E8F56, 
  pFull:pFull}
}()