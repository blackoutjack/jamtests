var policy = function() {
  var states = [0];
  var _HTMLElement = HTMLElement;
  var _HTMLDocument = HTMLDocument;
  var _Window = Window;
  var _HTMLFormElement = HTMLFormElement;
  var _XMLHttpRequest = XMLHttpRequest;
  var _WebSocket = WebSocket;
  function processAll(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "write" && (node.id === "src" && JAM.instanceof(node.obj, _HTMLElement) && !JAM.identical(node.value, "plaintext-test.png") || node.id === "href" && JAM.instanceof(node.obj, _HTMLElement) || node.id === "innerHTML" || node.id === "cookie" && JAM.instanceof(node.obj, _HTMLDocument) || node.id === "location" && JAM.instanceof(node.obj, _Window) || node.id === "action" && JAM.instanceof(node.obj, _HTMLFormElement))) {
        commit = false;
        break
      }
      if(node.type === "read" && (node.id === "write" && JAM.instanceof(node.obj, _HTMLDocument) || node.id === "writeln" && JAM.instanceof(node.obj, _HTMLDocument) || node.id === "open" && JAM.instanceof(node.obj, _XMLHttpRequest) || node.id === "open" && JAM.instanceof(node.obj, _Window) || node.id === "openDialog" && JAM.instanceof(node.obj, _Window) || node.id === "postMessage" && JAM.instanceof(node.obj, _Window) || node.id === "send" && JAM.instanceof(node.obj, _WebSocket) || node.id === "submit" && 
      JAM.instanceof(node.obj, _HTMLFormElement) || node.id === "setAttribute" && true && JAM.identical(node.id, "src") || node.id === "setAttribute" && true && JAM.identical(node.id, "action"))) {
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
  function process352B9049850A13D6240C92FA86C9847A77C5E747(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "write" && node.id === "src" && JAM.instanceof(node.obj, _HTMLElement) && !JAM.identical(node.value, "plaintext-test.png")) {
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
  process352B9049850A13D6240C92FA86C9847A77C5E747.subsumedBy = processAll;
  Object.freeze(process352B9049850A13D6240C92FA86C9847A77C5E747);
  function process352B9049850A13D6240C92FA86C9847A77C5E747FBD3A1264B9E51FB277A54E2B2676ECDC7756049C51DDFC22C8571C0FE27B1BC0B7671157BDF992D3D5BFF5DC7B69AF371F2F5D047B05F9905C5C2518D73029A35D0B675A79D1B1E133053ADEDD6839E9989B3C234729DDA7C0D11354CAD017B84EB04E8(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "write" && (node.id === "src" && JAM.instanceof(node.obj, _HTMLElement) && !JAM.identical(node.value, "plaintext-test.png") || node.id === "href" && JAM.instanceof(node.obj, _HTMLElement) || node.id === "innerHTML" || node.id === "cookie" && JAM.instanceof(node.obj, _HTMLDocument) || node.id === "location" && JAM.instanceof(node.obj, _Window) || node.id === "action" && JAM.instanceof(node.obj, _HTMLFormElement))) {
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
  process352B9049850A13D6240C92FA86C9847A77C5E747FBD3A1264B9E51FB277A54E2B2676ECDC7756049C51DDFC22C8571C0FE27B1BC0B7671157BDF992D3D5BFF5DC7B69AF371F2F5D047B05F9905C5C2518D73029A35D0B675A79D1B1E133053ADEDD6839E9989B3C234729DDA7C0D11354CAD017B84EB04E8.subsumedBy = processAll;
  Object.freeze(process352B9049850A13D6240C92FA86C9847A77C5E747FBD3A1264B9E51FB277A54E2B2676ECDC7756049C51DDFC22C8571C0FE27B1BC0B7671157BDF992D3D5BFF5DC7B69AF371F2F5D047B05F9905C5C2518D73029A35D0B675A79D1B1E133053ADEDD6839E9989B3C234729DDA7C0D11354CAD017B84EB04E8);
  function processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "read" && (node.id === "write" && JAM.instanceof(node.obj, _HTMLDocument) || node.id === "writeln" && JAM.instanceof(node.obj, _HTMLDocument) || node.id === "open" && JAM.instanceof(node.obj, _XMLHttpRequest) || node.id === "open" && JAM.instanceof(node.obj, _Window) || node.id === "openDialog" && JAM.instanceof(node.obj, _Window) || node.id === "postMessage" && JAM.instanceof(node.obj, _Window) || node.id === "send" && JAM.instanceof(node.obj, _WebSocket) || node.id === "submit" && 
      JAM.instanceof(node.obj, _HTMLFormElement) || node.id === "setAttribute" && true && JAM.identical(node.id, "src") || node.id === "setAttribute" && true && JAM.identical(node.id, "action"))) {
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
  processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9.subsumedBy = processAll;
  Object.freeze(processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9);
  function processCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "read" && (node.id === "setAttribute" && true && JAM.identical(node.id, "src") || node.id === "setAttribute" && true && JAM.identical(node.id, "action"))) {
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
  processCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9.subsumedBy = processAll;
  Object.freeze(processCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9);
  return{introspectors:{process352B9049850A13D6240C92FA86C9847A77C5E747:process352B9049850A13D6240C92FA86C9847A77C5E747, process352B9049850A13D6240C92FA86C9847A77C5E747FBD3A1264B9E51FB277A54E2B2676ECDC7756049C51DDFC22C8571C0FE27B1BC0B7671157BDF992D3D5BFF5DC7B69AF371F2F5D047B05F9905C5C2518D73029A35D0B675A79D1B1E133053ADEDD6839E9989B3C234729DDA7C0D11354CAD017B84EB04E8:process352B9049850A13D6240C92FA86C9847A77C5E747FBD3A1264B9E51FB277A54E2B2676ECDC7756049C51DDFC22C8571C0FE27B1BC0B7671157BDF992D3D5BFF5DC7B69AF371F2F5D047B05F9905C5C2518D73029A35D0B675A79D1B1E133053ADEDD6839E9989B3C234729DDA7C0D11354CAD017B84EB04E8, 
  processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9:processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9, 
  processCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9:processCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9, processAll:processAll}}
}()