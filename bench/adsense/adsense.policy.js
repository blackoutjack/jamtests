var policy = function() {
  var states = [0];
  var _document = document;
  var _HTMLDocument = HTMLDocument;
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
      if(!s1 && node.type === "read" && (node.id === "getElementById" && JAM.instanceof(node.obj, _HTMLDocument) || node.id === "getElementsByTagName" && JAM.instanceof(node.obj, _HTMLDocument))) {
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
  function processD1B26E82C3C7C4AA5A6D93F7A0110D043B1A982F(tx) {
    var s1 = states.indexOf(1) > -1;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len && !s1;i++) {
      var node = as[i];
      if(!s1 && node.type === "read" && node.id === "getElementById" && JAM.instanceof(node.obj, _HTMLDocument)) {
        s1 = true;
        states.push(1)
      }
    }
    JAMScript.process(tx)
  }
  processD1B26E82C3C7C4AA5A6D93F7A0110D043B1A982F.subsumedBy = processAll;
  Object.freeze(processD1B26E82C3C7C4AA5A6D93F7A0110D043B1A982F);
  function processD1B26E82C3C7C4AA5A6D93F7A0110D043B1A982FE656B7690429FFEA4A12C73E95B66185D91EBB72(tx) {
    var s1 = states.indexOf(1) > -1;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len && !s1;i++) {
      var node = as[i];
      if(!s1 && node.type === "read" && (node.id === "getElementById" && JAM.instanceof(node.obj, _HTMLDocument) || node.id === "getElementsByTagName" && JAM.instanceof(node.obj, _HTMLDocument))) {
        s1 = true;
        states.push(1)
      }
    }
    JAMScript.process(tx)
  }
  processD1B26E82C3C7C4AA5A6D93F7A0110D043B1A982FE656B7690429FFEA4A12C73E95B66185D91EBB72.subsumedBy = processAll;
  Object.freeze(processD1B26E82C3C7C4AA5A6D93F7A0110D043B1A982FE656B7690429FFEA4A12C73E95B66185D91EBB72);
  function process425E08A28862414CF7130381FE99A660F52DB811D1B26E82C3C7C4AA5A6D93F7A0110D043B1A982FE656B7690429FFEA4A12C73E95B66185D91EBB72(tx) {
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
      if(!s1 && node.type === "read" && (node.id === "getElementById" && JAM.instanceof(node.obj, _HTMLDocument) || node.id === "getElementsByTagName" && JAM.instanceof(node.obj, _HTMLDocument))) {
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
  process425E08A28862414CF7130381FE99A660F52DB811D1B26E82C3C7C4AA5A6D93F7A0110D043B1A982FE656B7690429FFEA4A12C73E95B66185D91EBB72.subsumedBy = processAll;
  Object.freeze(process425E08A28862414CF7130381FE99A660F52DB811D1B26E82C3C7C4AA5A6D93F7A0110D043B1A982FE656B7690429FFEA4A12C73E95B66185D91EBB72);
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
  function processE656B7690429FFEA4A12C73E95B66185D91EBB72(tx) {
    var s1 = states.indexOf(1) > -1;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len && !s1;i++) {
      var node = as[i];
      if(!s1 && node.type === "read" && node.id === "getElementsByTagName" && JAM.instanceof(node.obj, _HTMLDocument)) {
        s1 = true;
        states.push(1)
      }
    }
    JAMScript.process(tx)
  }
  processE656B7690429FFEA4A12C73E95B66185D91EBB72.subsumedBy = processAll;
  Object.freeze(processE656B7690429FFEA4A12C73E95B66185D91EBB72);
  return{introspectors:{processD1B26E82C3C7C4AA5A6D93F7A0110D043B1A982F:processD1B26E82C3C7C4AA5A6D93F7A0110D043B1A982F, processD1B26E82C3C7C4AA5A6D93F7A0110D043B1A982FE656B7690429FFEA4A12C73E95B66185D91EBB72:processD1B26E82C3C7C4AA5A6D93F7A0110D043B1A982FE656B7690429FFEA4A12C73E95B66185D91EBB72, process425E08A28862414CF7130381FE99A660F52DB811D1B26E82C3C7C4AA5A6D93F7A0110D043B1A982FE656B7690429FFEA4A12C73E95B66185D91EBB72:process425E08A28862414CF7130381FE99A660F52DB811D1B26E82C3C7C4AA5A6D93F7A0110D043B1A982FE656B7690429FFEA4A12C73E95B66185D91EBB72, 
  process425E08A28862414CF7130381FE99A660F52DB811:process425E08A28862414CF7130381FE99A660F52DB811, processE656B7690429FFEA4A12C73E95B66185D91EBB72:processE656B7690429FFEA4A12C73E95B66185D91EBB72, processAll:processAll}}
}()