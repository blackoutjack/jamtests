var policy = function() {
  var states = [0];
  var _HTMLAudioElement = HTMLAudioElement;
  var _RegExp_prototype_test = RegExp.prototype.test;
  var __RegExp_prototype_test_call_bind__RegExp_prototype_test_ = _RegExp_prototype_test.call.bind(_RegExp_prototype_test);
  var _HTMLFrameElement = HTMLFrameElement;
  var _HTMLIFrameElement = HTMLIFrameElement;
  var _HTMLImageElement = HTMLImageElement;
  var _HTMLInputElement = HTMLInputElement;
  var _HTMLScriptElement = HTMLScriptElement;
  var _HTMLSourceElement = HTMLSourceElement;
  var _HTMLVideoElement = HTMLVideoElement;
  var _HTMLFormElement = HTMLFormElement;
  var _HTMLDocument = HTMLDocument;
  var _HTMLElement = HTMLElement;
  var _Window = Window;
  var _HTMLDocument_prototype_write = HTMLDocument.prototype.write;
  var _HTMLDocument_prototype_writeln = HTMLDocument.prototype.writeln;
  var _XMLHttpRequest_prototype_open = XMLHttpRequest.prototype.open;
  var _Window_prototype_open = Window.prototype.open;
  var _Window_prototype_openDialog = Window.prototype.openDialog;
  var _Window_prototype_postMessage = Window.prototype.postMessage;
  var _WebSocket_prototype_send = WebSocket.prototype.send;
  var _HTMLFormElement_prototype_submit = HTMLFormElement.prototype.submit;
  var _HTMLAudioElement_prototype_setAttribute = HTMLAudioElement.prototype.setAttribute;
  var _HTMLFrameElement_prototype_setAttribute = HTMLFrameElement.prototype.setAttribute;
  var _HTMLIFrameElement_prototype_setAttribute = HTMLIFrameElement.prototype.setAttribute;
  var _HTMLImageElement_prototype_setAttribute = HTMLImageElement.prototype.setAttribute;
  var _HTMLInputElement_prototype_setAttribute = HTMLInputElement.prototype.setAttribute;
  var _HTMLScriptElement_prototype_setAttribute = HTMLScriptElement.prototype.setAttribute;
  var _HTMLSourceElement_prototype_setAttribute = HTMLSourceElement.prototype.setAttribute;
  var _HTMLVideoElement_prototype_setAttribute = HTMLVideoElement.prototype.setAttribute;
  var _HTMLFormElement_prototype_setAttribute = HTMLFormElement.prototype.setAttribute;
  function processAll(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "write" && (node.id === "src" && JAM.instanceof(node.obj, _HTMLAudioElement) && node.argc > 1 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.args[1]) || node.id === "src" && JAM.instanceof(node.obj, _HTMLFrameElement) && node.argc > 1 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.args[1]) || node.id === "src" && JAM.instanceof(node.obj, _HTMLIFrameElement) && node.argc > 1 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, 
      node.args[1]) || node.id === "src" && JAM.instanceof(node.obj, _HTMLImageElement) && node.argc > 1 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.args[1]) || node.id === "src" && JAM.instanceof(node.obj, _HTMLInputElement) && node.argc > 1 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.args[1]) || node.id === "src" && JAM.instanceof(node.obj, _HTMLScriptElement) && node.argc > 1 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, 
      node.args[1]) || node.id === "src" && JAM.instanceof(node.obj, _HTMLSourceElement) && node.argc > 1 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.args[1]) || node.id === "src" && JAM.instanceof(node.obj, _HTMLVideoElement) && node.argc > 1 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.args[1]) || node.id === "action" && JAM.instanceof(node.obj, _HTMLFormElement) || node.id === "cookie" && JAM.instanceof(node.obj, 
      _HTMLDocument) || node.id === "href" && JAM.instanceof(node.obj, _HTMLElement) || node.id === "innerHTML" && JAM.instanceof(node.obj, _HTMLElement) || node.id === "location" && JAM.instanceof(node.obj, _Window))) {
        commit = false;
        break
      }
      if(node.type === "call" && (JAM.identical(node.value, _HTMLDocument_prototype_write) && node.argc > 0 && typeof node.args[0] === "string" || JAM.identical(node.value, _HTMLDocument_prototype_writeln) && node.argc > 0 && typeof node.args[0] === "string" || JAM.identical(node.value, _XMLHttpRequest_prototype_open) || JAM.identical(node.value, _Window_prototype_open) || JAM.identical(node.value, _Window_prototype_openDialog) || JAM.identical(node.value, _Window_prototype_postMessage) || JAM.identical(node.value, 
      _WebSocket_prototype_send) || JAM.identical(node.value, _HTMLFormElement_prototype_submit) || JAM.identical(node.value, _HTMLAudioElement_prototype_setAttribute) && JAM.identical(node.args[0], "src") && node.argc > 1 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.args[1]) || JAM.identical(node.value, _HTMLFrameElement_prototype_setAttribute) && JAM.identical(node.args[0], "src") && node.argc > 1 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, 
      node.args[1]) || JAM.identical(node.value, _HTMLIFrameElement_prototype_setAttribute) && JAM.identical(node.args[0], "src") && node.argc > 1 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.args[1]) || JAM.identical(node.value, _HTMLImageElement_prototype_setAttribute) && JAM.identical(node.args[0], "src") && node.argc > 1 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.args[1]) || JAM.identical(node.value, _HTMLInputElement_prototype_setAttribute) && 
      JAM.identical(node.args[0], "src") && node.argc > 1 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.args[1]) || JAM.identical(node.value, _HTMLScriptElement_prototype_setAttribute) && JAM.identical(node.args[0], "src") && node.argc > 1 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.args[1]) || JAM.identical(node.value, _HTMLSourceElement_prototype_setAttribute) && JAM.identical(node.args[0], "src") && node.argc > 1 && 
      __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.args[1]) || JAM.identical(node.value, _HTMLVideoElement_prototype_setAttribute) && JAM.identical(node.args[0], "src") && node.argc > 1 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.args[1]) || JAM.identical(node.value, _HTMLFormElement_prototype_setAttribute) && JAM.identical(node.args[0], "action"))) {
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
  function process89004054686C83758C6B18A8AD311DC614EC9F6CA12E3543236A5F4B072E49D0B623F994FA6C33DBBFA32E4D464B3090580E3FAFD8D3B1D849C358EEF07F13CF448240F0D3197A26473C002F2C5CCAB1BA5399D8E7D3D1AA6D0C5E7749A2F3E7CE92212F6198D491218F16EA3F9E4E624F36B5C3254BA63D9435C3BAB276080661CCA58203D8FD98721CA0DC796F7BF072951571C0F1E73C684330C7FACD94FF(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "write" && (node.id === "src" && JAM.instanceof(node.obj, _HTMLAudioElement) && node.argc > 1 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.args[1]) || node.id === "src" && JAM.instanceof(node.obj, _HTMLFrameElement) && node.argc > 1 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.args[1]) || node.id === "src" && JAM.instanceof(node.obj, _HTMLIFrameElement) && node.argc > 1 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, 
      node.args[1]) || node.id === "src" && JAM.instanceof(node.obj, _HTMLImageElement) && node.argc > 1 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.args[1]) || node.id === "src" && JAM.instanceof(node.obj, _HTMLInputElement) && node.argc > 1 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.args[1]) || node.id === "src" && JAM.instanceof(node.obj, _HTMLScriptElement) && node.argc > 1 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, 
      node.args[1]) || node.id === "src" && JAM.instanceof(node.obj, _HTMLSourceElement) && node.argc > 1 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.args[1]) || node.id === "src" && JAM.instanceof(node.obj, _HTMLVideoElement) && node.argc > 1 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.args[1]))) {
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
  function processA98284F1B24AB1A68B0D2C69F6BD9F95DCC86019D4CAEEA06E90AF66C88F54F9FF2AD259E26AC4F8C6BD08F4643AFC435CEA3BC1F2234D4283B1AEE12C038881DBFB530F3490FD3C71D2445C3035B17E31BC9645E07FAA4E7F8A6E0AF32E553DEE067EB73B18BCC4F74ADDDD41BED8B94FFBF9B28F38F8A62D71FF9A19D8DAA05734537599A07057D068244DB47EA563428BC92F9D53E780E695E189275DCE11(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "call" && (JAM.identical(node.value, _HTMLDocument_prototype_write) && node.argc > 0 && typeof node.args[0] === "string" || JAM.identical(node.value, _HTMLDocument_prototype_writeln) && node.argc > 0 && typeof node.args[0] === "string" || JAM.identical(node.value, _XMLHttpRequest_prototype_open) || JAM.identical(node.value, _Window_prototype_open) || JAM.identical(node.value, _Window_prototype_openDialog) || JAM.identical(node.value, _Window_prototype_postMessage) || JAM.identical(node.value, 
      _WebSocket_prototype_send) || JAM.identical(node.value, _HTMLFormElement_prototype_submit))) {
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
  function processA98284F1B24AB1A68B0D2C69F6BD9F95DCC86019D4CAEEA06E90AF66C88F54F9FF2AD259E26AC4F8C6BD08F4643AFC435CEA3BC1F2234D4283B1AEE12C038881DBFB530F3490FD3C71D2445C3035B17E31BC9645E07FAA4E7F8A6E0AF32E553DEE067EB73B18BCC4F74ADDDD41BED8B94FFBF9B28F38F8A62D71FF9A19D8DAA05734537599A07057D068244DB47EA563428BC92F9D53E780E695E189275DCE11263346CA1E8BAD5FA49D1059D9594EC388E6588D(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "call" && (JAM.identical(node.value, _HTMLDocument_prototype_write) && node.argc > 0 && typeof node.args[0] === "string" || JAM.identical(node.value, _HTMLDocument_prototype_writeln) && node.argc > 0 && typeof node.args[0] === "string" || JAM.identical(node.value, _XMLHttpRequest_prototype_open) || JAM.identical(node.value, _Window_prototype_open) || JAM.identical(node.value, _Window_prototype_openDialog) || JAM.identical(node.value, _Window_prototype_postMessage) || JAM.identical(node.value, 
      _WebSocket_prototype_send) || JAM.identical(node.value, _HTMLFormElement_prototype_submit) || JAM.identical(node.value, _HTMLFormElement_prototype_setAttribute) && JAM.identical(node.args[0], "action"))) {
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
  return{introspectors:{process89004054686C83758C6B18A8AD311DC614EC9F6CA12E3543236A5F4B072E49D0B623F994FA6C33DBBFA32E4D464B3090580E3FAFD8D3B1D849C358EEF07F13CF448240F0D3197A26473C002F2C5CCAB1BA5399D8E7D3D1AA6D0C5E7749A2F3E7CE92212F6198D491218F16EA3F9E4E624F36B5C3254BA63D9435C3BAB276080661CCA58203D8FD98721CA0DC796F7BF072951571C0F1E73C684330C7FACD94FF:process89004054686C83758C6B18A8AD311DC614EC9F6CA12E3543236A5F4B072E49D0B623F994FA6C33DBBFA32E4D464B3090580E3FAFD8D3B1D849C358EEF07F13CF448240F0D3197A26473C002F2C5CCAB1BA5399D8E7D3D1AA6D0C5E7749A2F3E7CE92212F6198D491218F16EA3F9E4E624F36B5C3254BA63D9435C3BAB276080661CCA58203D8FD98721CA0DC796F7BF072951571C0F1E73C684330C7FACD94FF, 
  processA98284F1B24AB1A68B0D2C69F6BD9F95DCC86019D4CAEEA06E90AF66C88F54F9FF2AD259E26AC4F8C6BD08F4643AFC435CEA3BC1F2234D4283B1AEE12C038881DBFB530F3490FD3C71D2445C3035B17E31BC9645E07FAA4E7F8A6E0AF32E553DEE067EB73B18BCC4F74ADDDD41BED8B94FFBF9B28F38F8A62D71FF9A19D8DAA05734537599A07057D068244DB47EA563428BC92F9D53E780E695E189275DCE11:processA98284F1B24AB1A68B0D2C69F6BD9F95DCC86019D4CAEEA06E90AF66C88F54F9FF2AD259E26AC4F8C6BD08F4643AFC435CEA3BC1F2234D4283B1AEE12C038881DBFB530F3490FD3C71D2445C3035B17E31BC9645E07FAA4E7F8A6E0AF32E553DEE067EB73B18BCC4F74ADDDD41BED8B94FFBF9B28F38F8A62D71FF9A19D8DAA05734537599A07057D068244DB47EA563428BC92F9D53E780E695E189275DCE11, 
  processA98284F1B24AB1A68B0D2C69F6BD9F95DCC86019D4CAEEA06E90AF66C88F54F9FF2AD259E26AC4F8C6BD08F4643AFC435CEA3BC1F2234D4283B1AEE12C038881DBFB530F3490FD3C71D2445C3035B17E31BC9645E07FAA4E7F8A6E0AF32E553DEE067EB73B18BCC4F74ADDDD41BED8B94FFBF9B28F38F8A62D71FF9A19D8DAA05734537599A07057D068244DB47EA563428BC92F9D53E780E695E189275DCE11263346CA1E8BAD5FA49D1059D9594EC388E6588D:processA98284F1B24AB1A68B0D2C69F6BD9F95DCC86019D4CAEEA06E90AF66C88F54F9FF2AD259E26AC4F8C6BD08F4643AFC435CEA3BC1F2234D4283B1AEE12C038881DBFB530F3490FD3C71D2445C3035B17E31BC9645E07FAA4E7F8A6E0AF32E553DEE067EB73B18BCC4F74ADDDD41BED8B94FFBF9B28F38F8A62D71FF9A19D8DAA05734537599A07057D068244DB47EA563428BC92F9D53E780E695E189275DCE11263346CA1E8BAD5FA49D1059D9594EC388E6588D, 
  processAll:processAll}}
}()