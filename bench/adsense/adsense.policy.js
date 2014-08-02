var policy = function() {
  var states = [true, false];
  var _document = document;
  var _HTMLDocument = HTMLDocument;
  function pFull(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(states[1] && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(!states[1] && node.type === "read" && (node.id === "getElementById" && JAM.instanceof(node.obj, _HTMLDocument) || node.id === "getElementsByTagName" && JAM.instanceof(node.obj, _HTMLDocument))) {
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
  function pD1B26E82C3C7C4AA5A6D93F7A0110D043B1A982F(tx) {
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len && !states[1];i++) {
      var node = as[i];
      if(!states[1] && node.type === "read" && node.id === "getElementById" && JAM.instanceof(node.obj, _HTMLDocument)) {
        states[1] = true
      }
    }
    JAM.process(tx)
  }
  pD1B26E82C3C7C4AA5A6D93F7A0110D043B1A982F.subsumedBy = pFull;
  Object.freeze(pD1B26E82C3C7C4AA5A6D93F7A0110D043B1A982F);
  function pD1B26E82C3C7C4AA5A6D93F7A0110D043B1A982FE656B7690429FFEA4A12C73E95B66185D91EBB72(tx) {
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len && !states[1];i++) {
      var node = as[i];
      if(!states[1] && node.type === "read" && (node.id === "getElementById" && JAM.instanceof(node.obj, _HTMLDocument) || node.id === "getElementsByTagName" && JAM.instanceof(node.obj, _HTMLDocument))) {
        states[1] = true
      }
    }
    JAM.process(tx)
  }
  pD1B26E82C3C7C4AA5A6D93F7A0110D043B1A982FE656B7690429FFEA4A12C73E95B66185D91EBB72.subsumedBy = pFull;
  Object.freeze(pD1B26E82C3C7C4AA5A6D93F7A0110D043B1A982FE656B7690429FFEA4A12C73E95B66185D91EBB72);
  function p425E08A28862414CF7130381FE99A660F52DB811D1B26E82C3C7C4AA5A6D93F7A0110D043B1A982FE656B7690429FFEA4A12C73E95B66185D91EBB72(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(states[1] && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(!states[1] && node.type === "read" && (node.id === "getElementById" && JAM.instanceof(node.obj, _HTMLDocument) || node.id === "getElementsByTagName" && JAM.instanceof(node.obj, _HTMLDocument))) {
        states[1] = true
      }
    }
    if(commit) {
      JAM.process(tx)
    }else {
      JAM.prevent(tx)
    }
  }
  p425E08A28862414CF7130381FE99A660F52DB811D1B26E82C3C7C4AA5A6D93F7A0110D043B1A982FE656B7690429FFEA4A12C73E95B66185D91EBB72.subsumedBy = pFull;
  Object.freeze(p425E08A28862414CF7130381FE99A660F52DB811D1B26E82C3C7C4AA5A6D93F7A0110D043B1A982FE656B7690429FFEA4A12C73E95B66185D91EBB72);
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
  function pE656B7690429FFEA4A12C73E95B66185D91EBB72(tx) {
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len && !states[1];i++) {
      var node = as[i];
      if(!states[1] && node.type === "read" && node.id === "getElementsByTagName" && JAM.instanceof(node.obj, _HTMLDocument)) {
        states[1] = true
      }
    }
    JAM.process(tx)
  }
  pE656B7690429FFEA4A12C73E95B66185D91EBB72.subsumedBy = pFull;
  Object.freeze(pE656B7690429FFEA4A12C73E95B66185D91EBB72);
  return{pD1B26E82C3C7C4AA5A6D93F7A0110D043B1A982F:pD1B26E82C3C7C4AA5A6D93F7A0110D043B1A982F, pD1B26E82C3C7C4AA5A6D93F7A0110D043B1A982FE656B7690429FFEA4A12C73E95B66185D91EBB72:pD1B26E82C3C7C4AA5A6D93F7A0110D043B1A982FE656B7690429FFEA4A12C73E95B66185D91EBB72, p425E08A28862414CF7130381FE99A660F52DB811D1B26E82C3C7C4AA5A6D93F7A0110D043B1A982FE656B7690429FFEA4A12C73E95B66185D91EBB72:p425E08A28862414CF7130381FE99A660F52DB811D1B26E82C3C7C4AA5A6D93F7A0110D043B1A982FE656B7690429FFEA4A12C73E95B66185D91EBB72, 
  p425E08A28862414CF7130381FE99A660F52DB811:p425E08A28862414CF7130381FE99A660F52DB811, pE656B7690429FFEA4A12C73E95B66185D91EBB72:pE656B7690429FFEA4A12C73E95B66185D91EBB72, pFull:pFull}
}()