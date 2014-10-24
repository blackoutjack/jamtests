var policy = function() {
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
  var _Window = Window;
  var _HTMLDocument = HTMLDocument;
  var _HTMLElement = HTMLElement;
  var _HTMLDocument_prototype_write = HTMLDocument.prototype.write;
  var _HTMLDocument_prototype_writeln = HTMLDocument.prototype.writeln;
  var _XMLHttpRequest_prototype_open = XMLHttpRequest.prototype.open;
  var _Window_prototype_open = Window.prototype.open;
  var _undefined = undefined;
  var _Window_prototype_openDialog = Window.prototype.openDialog;
  var _WebSocket = WebSocket;
  var _HTMLAudioElement_prototype_setAttribute = HTMLAudioElement.prototype.setAttribute;
  var _HTMLFrameElement_prototype_setAttribute = HTMLFrameElement.prototype.setAttribute;
  var _HTMLIFrameElement_prototype_setAttribute = HTMLIFrameElement.prototype.setAttribute;
  var _HTMLImageElement_prototype_setAttribute = HTMLImageElement.prototype.setAttribute;
  var _HTMLInputElement_prototype_setAttribute = HTMLInputElement.prototype.setAttribute;
  var _HTMLScriptElement_prototype_setAttribute = HTMLScriptElement.prototype.setAttribute;
  var _HTMLSourceElement_prototype_setAttribute = HTMLSourceElement.prototype.setAttribute;
  var _HTMLVideoElement_prototype_setAttribute = HTMLVideoElement.prototype.setAttribute;
  var _HTMLFormElement_prototype_setAttribute = HTMLFormElement.prototype.setAttribute;
  function pFull(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for (var i = 0;i < len;i++) {
      var node = as[i];
      if (node.type === "write" && (node.id === "src" && JAM.instanceof(node.obj, _HTMLAudioElement) && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.value) || node.id === "src" && JAM.instanceof(node.obj, _HTMLFrameElement) && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.value) || node.id === "src" && JAM.instanceof(node.obj, _HTMLIFrameElement) && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, 
      node.value) || node.id === "src" && JAM.instanceof(node.obj, _HTMLImageElement) && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.value) || node.id === "src" && JAM.instanceof(node.obj, _HTMLInputElement) && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.value) || node.id === "src" && JAM.instanceof(node.obj, _HTMLScriptElement) && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.value) || 
      node.id === "src" && JAM.instanceof(node.obj, _HTMLSourceElement) && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.value) || node.id === "src" && JAM.instanceof(node.obj, _HTMLVideoElement) && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.value) || node.id === "action" && JAM.instanceof(node.obj, _HTMLFormElement) || node.id === "location" && JAM.instanceof(node.obj, _Window) || node.id === "cookie" && JAM.instanceof(node.obj, 
      _HTMLDocument) || node.id === "href" && JAM.instanceof(node.obj, _HTMLElement) || node.id === "innerHTML" && JAM.instanceof(node.obj, _HTMLElement))) {
        commit = false;
        break;
      }
      if (node.type === "invoke" && (JAM.identical(node.value, _HTMLDocument_prototype_write) && (node.argc > 0 && typeof node.args[0] === "string") || JAM.identical(node.value, _HTMLDocument_prototype_writeln) && (node.argc > 0 && typeof node.args[0] === "string") || JAM.identical(node.value, _XMLHttpRequest_prototype_open) && node.argc > 1 || JAM.identical(node.value, _Window_prototype_open) && (node.argc > 0 && !JAM.identical(node.args[0], _undefined)) || JAM.identical(node.value, _Window_prototype_openDialog) && 
      (node.argc > 0 && !JAM.identical(node.args[0], _undefined)) || JAM.identical(node.value, _WebSocket) && (node.argc > 0 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^ws:\/\//i, node.args[0])) || JAM.identical(node.value, _HTMLAudioElement_prototype_setAttribute) && (node.argc > 0 && JAM.identical(node.args[0], "src")) && (node.argc > 1 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.args[1])) || JAM.identical(node.value, _HTMLFrameElement_prototype_setAttribute) && 
      (node.argc > 0 && JAM.identical(node.args[0], "src")) && (node.argc > 1 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.args[1])) || JAM.identical(node.value, _HTMLIFrameElement_prototype_setAttribute) && (node.argc > 0 && JAM.identical(node.args[0], "src")) && (node.argc > 1 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.args[1])) || JAM.identical(node.value, _HTMLImageElement_prototype_setAttribute) && (node.argc > 
      0 && JAM.identical(node.args[0], "src")) && (node.argc > 1 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.args[1])) || JAM.identical(node.value, _HTMLInputElement_prototype_setAttribute) && (node.argc > 0 && JAM.identical(node.args[0], "src")) && (node.argc > 1 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.args[1])) || JAM.identical(node.value, _HTMLScriptElement_prototype_setAttribute) && (node.argc > 0 && JAM.identical(node.args[0], 
      "src")) && (node.argc > 1 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.args[1])) || JAM.identical(node.value, _HTMLSourceElement_prototype_setAttribute) && (node.argc > 0 && JAM.identical(node.args[0], "src")) && (node.argc > 1 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.args[1])) || JAM.identical(node.value, _HTMLVideoElement_prototype_setAttribute) && (node.argc > 0 && JAM.identical(node.args[0], "src")) && (node.argc > 
      1 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.args[1])) || JAM.identical(node.value, _HTMLFormElement_prototype_setAttribute) && (node.argc > 0 && JAM.identical(node.args[0], "action")))) {
        commit = false;
        break;
      }
      if (node.type === "read" && (node.id === "postMessage" && JAM.instanceof(node.obj, _Window))) {
        commit = false;
        break;
      }
    }
    if (commit) {
      JAM.process(tx);
    } else {
      JAM.prevent(tx);
    }
  }
  pFull.subsumedBy = pFull;
  Object.freeze(pFull);
  function p27(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for (var i = 0;i < len;i++) {
      var node = as[i];
      if (node.type === "write" && (node.id === "src" && JAM.instanceof(node.obj, _HTMLAudioElement) && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.value) || node.id === "src" && JAM.instanceof(node.obj, _HTMLFrameElement) && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.value) || node.id === "src" && JAM.instanceof(node.obj, _HTMLIFrameElement) && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, 
      node.value) || node.id === "src" && JAM.instanceof(node.obj, _HTMLImageElement) && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.value) || node.id === "src" && JAM.instanceof(node.obj, _HTMLInputElement) && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.value) || node.id === "src" && JAM.instanceof(node.obj, _HTMLScriptElement) && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.value) || 
      node.id === "src" && JAM.instanceof(node.obj, _HTMLSourceElement) && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.value) || node.id === "src" && JAM.instanceof(node.obj, _HTMLVideoElement) && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.value) || node.id === "action" && JAM.instanceof(node.obj, _HTMLFormElement) || node.id === "location" && JAM.instanceof(node.obj, _Window) || node.id === "cookie" && JAM.instanceof(node.obj, 
      _HTMLDocument) || node.id === "href" && JAM.instanceof(node.obj, _HTMLElement) || node.id === "innerHTML" && JAM.instanceof(node.obj, _HTMLElement))) {
        commit = false;
        break;
      }
      if (node.type === "read" && (node.id === "postMessage" && JAM.instanceof(node.obj, _Window))) {
        commit = false;
        break;
      }
    }
    if (commit) {
      JAM.process(tx);
    } else {
      JAM.prevent(tx);
    }
  }
  p27.subsumedBy = pFull;
  Object.freeze(p27);
  function p22(tx) {
    var commit = true;
    var as = tx.getCallSequence();
    var len = as.length;
    for (var i = 0;i < len;i++) {
      var node = as[i];
      if (JAM.identical(node.value, _HTMLDocument_prototype_write) && (node.argc > 0 && typeof node.args[0] === "string") || JAM.identical(node.value, _HTMLDocument_prototype_writeln) && (node.argc > 0 && typeof node.args[0] === "string") || JAM.identical(node.value, _Window_prototype_open) && (node.argc > 0 && !JAM.identical(node.args[0], _undefined)) || JAM.identical(node.value, _Window_prototype_openDialog) && (node.argc > 0 && !JAM.identical(node.args[0], _undefined))) {
        commit = false;
        break;
      }
    }
    if (commit) {
      JAM.process(tx);
    } else {
      JAM.prevent(tx);
    }
  }
  p22.subsumedBy = pFull;
  p22.itype = "invoke";
  Object.freeze(p22);
  function p38(tx) {
    var commit = true;
    var as = tx.getCallSequence();
    var len = as.length;
    for (var i = 0;i < len;i++) {
      var node = as[i];
      if (JAM.identical(node.value, _HTMLDocument_prototype_write) && (node.argc > 0 && typeof node.args[0] === "string") || JAM.identical(node.value, _HTMLDocument_prototype_writeln) && (node.argc > 0 && typeof node.args[0] === "string") || JAM.identical(node.value, _Window_prototype_open) && (node.argc > 0 && !JAM.identical(node.args[0], _undefined)) || JAM.identical(node.value, _Window_prototype_openDialog) && (node.argc > 0 && !JAM.identical(node.args[0], _undefined)) || JAM.identical(node.value, 
      _WebSocket) && (node.argc > 0 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^ws:\/\//i, node.args[0])) || JAM.identical(node.value, _HTMLFormElement_prototype_setAttribute) && (node.argc > 0 && JAM.identical(node.args[0], "action"))) {
        commit = false;
        break;
      }
    }
    if (commit) {
      JAM.process(tx);
    } else {
      JAM.prevent(tx);
    }
  }
  p38.subsumedBy = pFull;
  p38.itype = "invoke";
  Object.freeze(p38);
  function p39(tx) {
    var commit = true;
    var as = tx.getCallSequence();
    var len = as.length;
    for (var i = 0;i < len;i++) {
      var node = as[i];
      if (JAM.identical(node.value, _HTMLDocument_prototype_write) && (node.argc > 0 && typeof node.args[0] === "string") || JAM.identical(node.value, _HTMLDocument_prototype_writeln) && (node.argc > 0 && typeof node.args[0] === "string") || JAM.identical(node.value, _Window_prototype_open) && (node.argc > 0 && !JAM.identical(node.args[0], _undefined)) || JAM.identical(node.value, _Window_prototype_openDialog) && (node.argc > 0 && !JAM.identical(node.args[0], _undefined)) || JAM.identical(node.value, 
      _HTMLFormElement_prototype_setAttribute) && (node.argc > 0 && JAM.identical(node.args[0], "action"))) {
        commit = false;
        break;
      }
    }
    if (commit) {
      JAM.process(tx);
    } else {
      JAM.prevent(tx);
    }
  }
  p39.subsumedBy = pFull;
  p39.itype = "invoke";
  Object.freeze(p39);
  function p40(tx) {
    var commit = true;
    var as = tx.getCallSequence();
    var len = as.length;
    for (var i = 0;i < len;i++) {
      var node = as[i];
      if (JAM.identical(node.value, _HTMLDocument_prototype_write) && (node.argc > 0 && typeof node.args[0] === "string") || JAM.identical(node.value, _HTMLDocument_prototype_writeln) && (node.argc > 0 && typeof node.args[0] === "string") || JAM.identical(node.value, _XMLHttpRequest_prototype_open) && node.argc > 1 || JAM.identical(node.value, _Window_prototype_open) && (node.argc > 0 && !JAM.identical(node.args[0], _undefined)) || JAM.identical(node.value, _Window_prototype_openDialog) && (node.argc > 
      0 && !JAM.identical(node.args[0], _undefined)) || JAM.identical(node.value, _WebSocket) && (node.argc > 0 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^ws:\/\//i, node.args[0])) || JAM.identical(node.value, _HTMLFormElement_prototype_setAttribute) && (node.argc > 0 && JAM.identical(node.args[0], "action"))) {
        commit = false;
        break;
      }
    }
    if (commit) {
      JAM.process(tx);
    } else {
      JAM.prevent(tx);
    }
  }
  p40.subsumedBy = pFull;
  p40.itype = "invoke";
  Object.freeze(p40);
  function p41(tx) {
    var commit = true;
    var as = tx.getCallSequence();
    var len = as.length;
    for (var i = 0;i < len;i++) {
      var node = as[i];
      if (JAM.identical(node.value, _HTMLDocument_prototype_write) && (node.argc > 0 && typeof node.args[0] === "string") || JAM.identical(node.value, _HTMLDocument_prototype_writeln) && (node.argc > 0 && typeof node.args[0] === "string") || JAM.identical(node.value, _XMLHttpRequest_prototype_open) && node.argc > 1 || JAM.identical(node.value, _Window_prototype_open) && (node.argc > 0 && !JAM.identical(node.args[0], _undefined)) || JAM.identical(node.value, _Window_prototype_openDialog) && (node.argc > 
      0 && !JAM.identical(node.args[0], _undefined)) || JAM.identical(node.value, _WebSocket) && (node.argc > 0 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^ws:\/\//i, node.args[0])) || JAM.identical(node.value, _HTMLAudioElement_prototype_setAttribute) && (node.argc > 0 && JAM.identical(node.args[0], "src")) && (node.argc > 1 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.args[1])) || JAM.identical(node.value, _HTMLFrameElement_prototype_setAttribute) && 
      (node.argc > 0 && JAM.identical(node.args[0], "src")) && (node.argc > 1 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.args[1])) || JAM.identical(node.value, _HTMLIFrameElement_prototype_setAttribute) && (node.argc > 0 && JAM.identical(node.args[0], "src")) && (node.argc > 1 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.args[1])) || JAM.identical(node.value, _HTMLImageElement_prototype_setAttribute) && (node.argc > 
      0 && JAM.identical(node.args[0], "src")) && (node.argc > 1 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.args[1])) || JAM.identical(node.value, _HTMLInputElement_prototype_setAttribute) && (node.argc > 0 && JAM.identical(node.args[0], "src")) && (node.argc > 1 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.args[1])) || JAM.identical(node.value, _HTMLScriptElement_prototype_setAttribute) && (node.argc > 0 && JAM.identical(node.args[0], 
      "src")) && (node.argc > 1 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.args[1])) || JAM.identical(node.value, _HTMLSourceElement_prototype_setAttribute) && (node.argc > 0 && JAM.identical(node.args[0], "src")) && (node.argc > 1 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.args[1])) || JAM.identical(node.value, _HTMLVideoElement_prototype_setAttribute) && (node.argc > 0 && JAM.identical(node.args[0], "src")) && (node.argc > 
      1 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.args[1])) || JAM.identical(node.value, _HTMLFormElement_prototype_setAttribute) && (node.argc > 0 && JAM.identical(node.args[0], "action"))) {
        commit = false;
        break;
      }
    }
    if (commit) {
      JAM.process(tx);
    } else {
      JAM.prevent(tx);
    }
  }
  p41.subsumedBy = pFull;
  p41.itype = "invoke";
  Object.freeze(p41);
  function p23(tx) {
    var commit = true;
    var as = tx.getCallSequence();
    var len = as.length;
    for (var i = 0;i < len;i++) {
      var node = as[i];
      if (JAM.identical(node.value, _HTMLDocument_prototype_write) && (node.argc > 0 && typeof node.args[0] === "string") || JAM.identical(node.value, _HTMLDocument_prototype_writeln) && (node.argc > 0 && typeof node.args[0] === "string") || JAM.identical(node.value, _XMLHttpRequest_prototype_open) && node.argc > 1 || JAM.identical(node.value, _Window_prototype_open) && (node.argc > 0 && !JAM.identical(node.args[0], _undefined)) || JAM.identical(node.value, _Window_prototype_openDialog) && (node.argc > 
      0 && !JAM.identical(node.args[0], _undefined))) {
        commit = false;
        break;
      }
    }
    if (commit) {
      JAM.process(tx);
    } else {
      JAM.prevent(tx);
    }
  }
  p23.subsumedBy = pFull;
  p23.itype = "invoke";
  Object.freeze(p23);
  function p24(tx) {
    var commit = true;
    var as = tx.getCallSequence();
    var len = as.length;
    for (var i = 0;i < len;i++) {
      var node = as[i];
      if (JAM.identical(node.value, _XMLHttpRequest_prototype_open) && node.argc > 1 || JAM.identical(node.value, _Window_prototype_open) && (node.argc > 0 && !JAM.identical(node.args[0], _undefined)) || JAM.identical(node.value, _Window_prototype_openDialog) && (node.argc > 0 && !JAM.identical(node.args[0], _undefined))) {
        commit = false;
        break;
      }
    }
    if (commit) {
      JAM.process(tx);
    } else {
      JAM.prevent(tx);
    }
  }
  p24.subsumedBy = pFull;
  p24.itype = "invoke";
  Object.freeze(p24);
  function p25(tx) {
    var commit = true;
    var as = tx.getCallSequence();
    var len = as.length;
    for (var i = 0;i < len;i++) {
      var node = as[i];
      if (JAM.identical(node.value, _Window_prototype_open) && (node.argc > 0 && !JAM.identical(node.args[0], _undefined)) || JAM.identical(node.value, _Window_prototype_openDialog) && (node.argc > 0 && !JAM.identical(node.args[0], _undefined))) {
        commit = false;
        break;
      }
    }
    if (commit) {
      JAM.process(tx);
    } else {
      JAM.prevent(tx);
    }
  }
  p25.subsumedBy = pFull;
  p25.itype = "invoke";
  Object.freeze(p25);
  function p26(tx) {
    var commit = true;
    var as = tx.getReadSequence();
    var len = as.length;
    for (var i = 0;i < len;i++) {
      var node = as[i];
      if (node.id === "postMessage" && JAM.instanceof(node.obj, _Window)) {
        commit = false;
        break;
      }
    }
    if (commit) {
      JAM.process(tx);
    } else {
      JAM.prevent(tx);
    }
  }
  p26.subsumedBy = pFull;
  p26.itype = "read";
  Object.freeze(p26);
  return{p27:p27, p22:p22, p38:p38, p39:p39, p40:p40, p41:p41, p23:p23, p24:p24, p25:p25, p26:p26, pFull:pFull, woven:true};
}()