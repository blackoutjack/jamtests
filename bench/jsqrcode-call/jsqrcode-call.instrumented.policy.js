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
      if(node.type === "write" && (node.id === "src" && JAM.instanceof(node.obj, _HTMLAudioElement) && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.value) || node.id === "src" && JAM.instanceof(node.obj, _HTMLFrameElement) && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.value) || node.id === "src" && JAM.instanceof(node.obj, _HTMLIFrameElement) && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, 
      node.value) || node.id === "src" && JAM.instanceof(node.obj, _HTMLImageElement) && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.value) || node.id === "src" && JAM.instanceof(node.obj, _HTMLInputElement) && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.value) || node.id === "src" && JAM.instanceof(node.obj, _HTMLScriptElement) && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.value) || 
      node.id === "src" && JAM.instanceof(node.obj, _HTMLSourceElement) && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.value) || node.id === "src" && JAM.instanceof(node.obj, _HTMLVideoElement) && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.value) || node.id === "action" && JAM.instanceof(node.obj, _HTMLFormElement) || node.id === "cookie" && JAM.instanceof(node.obj, _HTMLDocument) || node.id === "href" && JAM.instanceof(node.obj, 
      _HTMLElement) || node.id === "innerHTML" && JAM.instanceof(node.obj, _HTMLElement) || node.id === "location" && JAM.instanceof(node.obj, _Window))) {
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
  function process6AC6F67D0D0F873DBEB43A80554E0DD808ADF0977A49B0145BAB840DEE0EC3C3B7D95FF55C9D6A57BE985B0F9BD20FFE9471680B9E79EAF97D4383A007C8D78A577470F81145D1A487EE29DF3F46EF5ADE19FB4D0E93EF87D00C27570B2E7AEBF46E18BE9B7CF95FBA61CBC362D25EA3F411155048C605DC6B70FA808496B5BBA44D78182C6888F47F6980604BA6502520BB10D7B4C1502B61C6B8237CD0CCC69989B3C234729DDA7C0D11354CAD017B84EB04E83D5BFF5DC7B69AF371F2F5D047B05F9905C5C251FBD3A1264B9E51FB277A54E2B2676ECDC7756049D4D25E04A23263FBD77B896710421141724AE95D8D73029A35D0B675A79D1B1E133053ADEDD6839E(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "write" && (node.id === "src" && JAM.instanceof(node.obj, _HTMLAudioElement) && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.value) || node.id === "src" && JAM.instanceof(node.obj, _HTMLFrameElement) && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.value) || node.id === "src" && JAM.instanceof(node.obj, _HTMLIFrameElement) && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, 
      node.value) || node.id === "src" && JAM.instanceof(node.obj, _HTMLImageElement) && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.value) || node.id === "src" && JAM.instanceof(node.obj, _HTMLInputElement) && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.value) || node.id === "src" && JAM.instanceof(node.obj, _HTMLScriptElement) && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.value) || 
      node.id === "src" && JAM.instanceof(node.obj, _HTMLSourceElement) && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.value) || node.id === "src" && JAM.instanceof(node.obj, _HTMLVideoElement) && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.value) || node.id === "action" && JAM.instanceof(node.obj, _HTMLFormElement) || node.id === "cookie" && JAM.instanceof(node.obj, _HTMLDocument) || node.id === "href" && JAM.instanceof(node.obj, 
      _HTMLElement) || node.id === "innerHTML" && JAM.instanceof(node.obj, _HTMLElement) || node.id === "location" && JAM.instanceof(node.obj, _Window))) {
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
  function process6AC6F67D0D0F873DBEB43A80554E0DD808ADF0977A49B0145BAB840DEE0EC3C3B7D95FF55C9D6A57BE985B0F9BD20FFE9471680B9E79EAF97D4383A007C8D78A577470F81145D1A487EE29DF3F46EF5ADE19FB4D0E93EF87D00C27570B2E7AEBF46E18BE9B7CF95FBA61CBC362D25EA3F411155048C605DC6B70FA808496B5BBA44D78182C6888F47F6980604BA6502520BB10D7B4C1502B61C6B8237CD0CCC6(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "write" && (node.id === "src" && JAM.instanceof(node.obj, _HTMLAudioElement) && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.value) || node.id === "src" && JAM.instanceof(node.obj, _HTMLFrameElement) && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.value) || node.id === "src" && JAM.instanceof(node.obj, _HTMLIFrameElement) && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, 
      node.value) || node.id === "src" && JAM.instanceof(node.obj, _HTMLImageElement) && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.value) || node.id === "src" && JAM.instanceof(node.obj, _HTMLInputElement) && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.value) || node.id === "src" && JAM.instanceof(node.obj, _HTMLScriptElement) && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.value) || 
      node.id === "src" && JAM.instanceof(node.obj, _HTMLSourceElement) && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.value) || node.id === "src" && JAM.instanceof(node.obj, _HTMLVideoElement) && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.value))) {
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
  function processA98284F1B24AB1A68B0D2C69F6BD9F95DCC86019D4CAEEA06E90AF66C88F54F9FF2AD259E26AC4F8C6BD08F4643AFC435CEA3BC1F2234D4283B1AEE12C038881DBFB530F3490FD3C71D2445C3035B17E31BC9645E07FAA4E7F8A6E0AF32E553DEE067EB73B18BCC4F74ADDDD41BED8B94FFBF9B28F38F8A62D71FF9A19D8DAA05734537599A07057D068244DB47EA563428BC92F9D53E780E695E189275DCE11A214309D39094B367E9869404D74FF32F9E6480B786C3316045DD40AB2F2788BE026D7D5F6BEC3E0954ADF479D698E5827A6F6257E730E5DDE88A0FB893C21256E1ACD70D57A0BEE1B36844C20B1C7518B5A2FBE35346705E33501E66F0600EC1655BEF257E59C09EBDE014BC63CED2C4AD6709FF23A87C57E211351A93A4854B9300512FBB9C4E2BEDA0AB4FCE31396326A70C4103A954E964795946FFF6EC0263346CA1E8BAD5FA49D1059D9594EC388E6588D(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
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
  function processC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE12C038881DBFB530F3490FD3C71D2445C3035B17E31BC9645E07FAA4E7F8A6E0AF32E553DEE067EB73B18BCC4F74ADDDD41BED8B94FFBF9B28F38F8A62D71FF9A19D8DAA05734537599A07057D068244DB47EA563428BC92F9D53E780E695E189275DCE11(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "call" && (JAM.identical(node.value, _XMLHttpRequest_prototype_open) || JAM.identical(node.value, _Window_prototype_open) || JAM.identical(node.value, _Window_prototype_openDialog) || JAM.identical(node.value, _Window_prototype_postMessage) || JAM.identical(node.value, _WebSocket_prototype_send) || JAM.identical(node.value, _HTMLFormElement_prototype_submit))) {
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
  return{introspectors:{process6AC6F67D0D0F873DBEB43A80554E0DD808ADF0977A49B0145BAB840DEE0EC3C3B7D95FF55C9D6A57BE985B0F9BD20FFE9471680B9E79EAF97D4383A007C8D78A577470F81145D1A487EE29DF3F46EF5ADE19FB4D0E93EF87D00C27570B2E7AEBF46E18BE9B7CF95FBA61CBC362D25EA3F411155048C605DC6B70FA808496B5BBA44D78182C6888F47F6980604BA6502520BB10D7B4C1502B61C6B8237CD0CCC69989B3C234729DDA7C0D11354CAD017B84EB04E83D5BFF5DC7B69AF371F2F5D047B05F9905C5C251FBD3A1264B9E51FB277A54E2B2676ECDC7756049D4D25E04A23263FBD77B896710421141724AE95D8D73029A35D0B675A79D1B1E133053ADEDD6839E:process6AC6F67D0D0F873DBEB43A80554E0DD808ADF0977A49B0145BAB840DEE0EC3C3B7D95FF55C9D6A57BE985B0F9BD20FFE9471680B9E79EAF97D4383A007C8D78A577470F81145D1A487EE29DF3F46EF5ADE19FB4D0E93EF87D00C27570B2E7AEBF46E18BE9B7CF95FBA61CBC362D25EA3F411155048C605DC6B70FA808496B5BBA44D78182C6888F47F6980604BA6502520BB10D7B4C1502B61C6B8237CD0CCC69989B3C234729DDA7C0D11354CAD017B84EB04E83D5BFF5DC7B69AF371F2F5D047B05F9905C5C251FBD3A1264B9E51FB277A54E2B2676ECDC7756049D4D25E04A23263FBD77B896710421141724AE95D8D73029A35D0B675A79D1B1E133053ADEDD6839E, 
  process6AC6F67D0D0F873DBEB43A80554E0DD808ADF0977A49B0145BAB840DEE0EC3C3B7D95FF55C9D6A57BE985B0F9BD20FFE9471680B9E79EAF97D4383A007C8D78A577470F81145D1A487EE29DF3F46EF5ADE19FB4D0E93EF87D00C27570B2E7AEBF46E18BE9B7CF95FBA61CBC362D25EA3F411155048C605DC6B70FA808496B5BBA44D78182C6888F47F6980604BA6502520BB10D7B4C1502B61C6B8237CD0CCC6:process6AC6F67D0D0F873DBEB43A80554E0DD808ADF0977A49B0145BAB840DEE0EC3C3B7D95FF55C9D6A57BE985B0F9BD20FFE9471680B9E79EAF97D4383A007C8D78A577470F81145D1A487EE29DF3F46EF5ADE19FB4D0E93EF87D00C27570B2E7AEBF46E18BE9B7CF95FBA61CBC362D25EA3F411155048C605DC6B70FA808496B5BBA44D78182C6888F47F6980604BA6502520BB10D7B4C1502B61C6B8237CD0CCC6, 
  processA98284F1B24AB1A68B0D2C69F6BD9F95DCC86019D4CAEEA06E90AF66C88F54F9FF2AD259E26AC4F8C6BD08F4643AFC435CEA3BC1F2234D4283B1AEE12C038881DBFB530F3490FD3C71D2445C3035B17E31BC9645E07FAA4E7F8A6E0AF32E553DEE067EB73B18BCC4F74ADDDD41BED8B94FFBF9B28F38F8A62D71FF9A19D8DAA05734537599A07057D068244DB47EA563428BC92F9D53E780E695E189275DCE11A214309D39094B367E9869404D74FF32F9E6480B786C3316045DD40AB2F2788BE026D7D5F6BEC3E0954ADF479D698E5827A6F6257E730E5DDE88A0FB893C21256E1ACD70D57A0BEE1B36844C20B1C7518B5A2FBE35346705E33501E66F0600EC1655BEF257E59C09EBDE014BC63CED2C4AD6709FF23A87C57E211351A93A4854B9300512FBB9C4E2BEDA0AB4FCE31396326A70C4103A954E964795946FFF6EC0263346CA1E8BAD5FA49D1059D9594EC388E6588D:processA98284F1B24AB1A68B0D2C69F6BD9F95DCC86019D4CAEEA06E90AF66C88F54F9FF2AD259E26AC4F8C6BD08F4643AFC435CEA3BC1F2234D4283B1AEE12C038881DBFB530F3490FD3C71D2445C3035B17E31BC9645E07FAA4E7F8A6E0AF32E553DEE067EB73B18BCC4F74ADDDD41BED8B94FFBF9B28F38F8A62D71FF9A19D8DAA05734537599A07057D068244DB47EA563428BC92F9D53E780E695E189275DCE11A214309D39094B367E9869404D74FF32F9E6480B786C3316045DD40AB2F2788BE026D7D5F6BEC3E0954ADF479D698E5827A6F6257E730E5DDE88A0FB893C21256E1ACD70D57A0BEE1B36844C20B1C7518B5A2FBE35346705E33501E66F0600EC1655BEF257E59C09EBDE014BC63CED2C4AD6709FF23A87C57E211351A93A4854B9300512FBB9C4E2BEDA0AB4FCE31396326A70C4103A954E964795946FFF6EC0263346CA1E8BAD5FA49D1059D9594EC388E6588D, 
  processA98284F1B24AB1A68B0D2C69F6BD9F95DCC86019D4CAEEA06E90AF66C88F54F9FF2AD259E26AC4F8C6BD08F4643AFC435CEA3BC1F2234D4283B1AEE12C038881DBFB530F3490FD3C71D2445C3035B17E31BC9645E07FAA4E7F8A6E0AF32E553DEE067EB73B18BCC4F74ADDDD41BED8B94FFBF9B28F38F8A62D71FF9A19D8DAA05734537599A07057D068244DB47EA563428BC92F9D53E780E695E189275DCE11263346CA1E8BAD5FA49D1059D9594EC388E6588D:processA98284F1B24AB1A68B0D2C69F6BD9F95DCC86019D4CAEEA06E90AF66C88F54F9FF2AD259E26AC4F8C6BD08F4643AFC435CEA3BC1F2234D4283B1AEE12C038881DBFB530F3490FD3C71D2445C3035B17E31BC9645E07FAA4E7F8A6E0AF32E553DEE067EB73B18BCC4F74ADDDD41BED8B94FFBF9B28F38F8A62D71FF9A19D8DAA05734537599A07057D068244DB47EA563428BC92F9D53E780E695E189275DCE11263346CA1E8BAD5FA49D1059D9594EC388E6588D, 
  processA98284F1B24AB1A68B0D2C69F6BD9F95DCC86019D4CAEEA06E90AF66C88F54F9FF2AD259E26AC4F8C6BD08F4643AFC435CEA3BC1F2234D4283B1AEE12C038881DBFB530F3490FD3C71D2445C3035B17E31BC9645E07FAA4E7F8A6E0AF32E553DEE067EB73B18BCC4F74ADDDD41BED8B94FFBF9B28F38F8A62D71FF9A19D8DAA05734537599A07057D068244DB47EA563428BC92F9D53E780E695E189275DCE11:processA98284F1B24AB1A68B0D2C69F6BD9F95DCC86019D4CAEEA06E90AF66C88F54F9FF2AD259E26AC4F8C6BD08F4643AFC435CEA3BC1F2234D4283B1AEE12C038881DBFB530F3490FD3C71D2445C3035B17E31BC9645E07FAA4E7F8A6E0AF32E553DEE067EB73B18BCC4F74ADDDD41BED8B94FFBF9B28F38F8A62D71FF9A19D8DAA05734537599A07057D068244DB47EA563428BC92F9D53E780E695E189275DCE11, 
  processC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE12C038881DBFB530F3490FD3C71D2445C3035B17E31BC9645E07FAA4E7F8A6E0AF32E553DEE067EB73B18BCC4F74ADDDD41BED8B94FFBF9B28F38F8A62D71FF9A19D8DAA05734537599A07057D068244DB47EA563428BC92F9D53E780E695E189275DCE11:processC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE12C038881DBFB530F3490FD3C71D2445C3035B17E31BC9645E07FAA4E7F8A6E0AF32E553DEE067EB73B18BCC4F74ADDDD41BED8B94FFBF9B28F38F8A62D71FF9A19D8DAA05734537599A07057D068244DB47EA563428BC92F9D53E780E695E189275DCE11, processAll:processAll}}
}()