var policy = function() {
  var states = [0];
  var _HTMLElement = HTMLElement;
  var _HTMLDocument = HTMLDocument;
  var _Window = Window;
  var _HTMLFormElement = HTMLFormElement;
  var _XMLHttpRequest_prototype_open = XMLHttpRequest.prototype.open;
  var _Window_prototype_open = Window.prototype.open;
  var _Window_prototype_openDialog = Window.prototype.openDialog;
  var _Window_prototype_postMessage = Window.prototype.postMessage;
  var _WebSocket_prototype_send = WebSocket.prototype.send;
  var _HTMLFormElement_prototype_submit = HTMLFormElement.prototype.submit;
  var _HTMLDocument_prototype_write = HTMLDocument.prototype.write;
  var _String_prototype_indexOf = String.prototype.indexOf;
  var __String_prototype_indexOf_call_bind__String_prototype_indexOf_ = _String_prototype_indexOf.call.bind(_String_prototype_indexOf);
  var _HTMLDocument_prototype_writeln = HTMLDocument.prototype.writeln;
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
      if(node.type === "call" && (JAM.identical(node.value, _XMLHttpRequest_prototype_open) || JAM.identical(node.value, _Window_prototype_open) && !JAM.identical(node.args[0], "") || JAM.identical(node.value, _Window_prototype_openDialog) || JAM.identical(node.value, _Window_prototype_postMessage) || JAM.identical(node.value, _WebSocket_prototype_send) || JAM.identical(node.value, _HTMLFormElement_prototype_submit) || JAM.identical(node.value, _HTMLDocument_prototype_write) && node.argc > 0 && typeof node.args[0] === 
      "string" && __String_prototype_indexOf_call_bind__String_prototype_indexOf_(node.args[0], "script") > -1 || JAM.identical(node.value, _HTMLDocument_prototype_writeln))) {
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
  function processC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE136D9705D71A7FB9684D39EBC255D1A6934D1D24A31BC9645E07FAA4E7F8A6E0AF32E553DEE067EB73B18BCC4F74ADDDD41BED8B94FFBF9B28F38F8A62D71FF9A19D8DAA05734537599A07057D068244DB47EA563428BC92F9D53E780E695E189275DCE11D141CC1A5BDCB80FA20F69CC89B52C77453BF7C9(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "call" && (JAM.identical(node.value, _XMLHttpRequest_prototype_open) || JAM.identical(node.value, _Window_prototype_open) && !JAM.identical(node.args[0], "") || JAM.identical(node.value, _Window_prototype_openDialog) || JAM.identical(node.value, _Window_prototype_postMessage) || JAM.identical(node.value, _WebSocket_prototype_send) || JAM.identical(node.value, _HTMLFormElement_prototype_submit) || JAM.identical(node.value, _HTMLDocument_prototype_writeln))) {
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
  function processC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE131BC9645E07FAA4E7F8A6E0AF32E553DEE067EB73B18BCC4F74ADDDD41BED8B94FFBF9B28F38F8A62D71FF9A19D8DAA05734537599A07057D068244DB47EA563428BC92F9D53E780E695E189275DCE11D141CC1A5BDCB80FA20F69CC89B52C77453BF7C9(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "call" && (JAM.identical(node.value, _XMLHttpRequest_prototype_open) || JAM.identical(node.value, _Window_prototype_openDialog) || JAM.identical(node.value, _Window_prototype_postMessage) || JAM.identical(node.value, _WebSocket_prototype_send) || JAM.identical(node.value, _HTMLFormElement_prototype_submit) || JAM.identical(node.value, _HTMLDocument_prototype_writeln))) {
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
  function processC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE136D9705D71A7FB9684D39EBC255D1A6934D1D24A31BC9645E07FAA4E7F8A6E0AF32E553DEE067EB73B18BCC4F74ADDDD41BED8B94FFBF9B28F38F8A62D71FF9A19D8DAA05734537599A07057D068244DB47EA563428BC92F9D53E780E695E189275DCE11BEAFBB2FD8125A1CE4C97F75106BD93D0D091F0CD141CC1A5BDCB80FA20F69CC89B52C77453BF7C9(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "call" && (JAM.identical(node.value, _XMLHttpRequest_prototype_open) || JAM.identical(node.value, _Window_prototype_open) && !JAM.identical(node.args[0], "") || JAM.identical(node.value, _Window_prototype_openDialog) || JAM.identical(node.value, _Window_prototype_postMessage) || JAM.identical(node.value, _WebSocket_prototype_send) || JAM.identical(node.value, _HTMLFormElement_prototype_submit) || JAM.identical(node.value, _HTMLDocument_prototype_write) && node.argc > 0 && typeof node.args[0] === 
      "string" && __String_prototype_indexOf_call_bind__String_prototype_indexOf_(node.args[0], "script") > -1 || JAM.identical(node.value, _HTMLDocument_prototype_writeln))) {
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
  return{introspectors:{processC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE136D9705D71A7FB9684D39EBC255D1A6934D1D24A31BC9645E07FAA4E7F8A6E0AF32E553DEE067EB73B18BCC4F74ADDDD41BED8B94FFBF9B28F38F8A62D71FF9A19D8DAA05734537599A07057D068244DB47EA563428BC92F9D53E780E695E189275DCE11D141CC1A5BDCB80FA20F69CC89B52C77453BF7C9:processC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE136D9705D71A7FB9684D39EBC255D1A6934D1D24A31BC9645E07FAA4E7F8A6E0AF32E553DEE067EB73B18BCC4F74ADDDD41BED8B94FFBF9B28F38F8A62D71FF9A19D8DAA05734537599A07057D068244DB47EA563428BC92F9D53E780E695E189275DCE11D141CC1A5BDCB80FA20F69CC89B52C77453BF7C9, 
  processC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE131BC9645E07FAA4E7F8A6E0AF32E553DEE067EB73B18BCC4F74ADDDD41BED8B94FFBF9B28F38F8A62D71FF9A19D8DAA05734537599A07057D068244DB47EA563428BC92F9D53E780E695E189275DCE11D141CC1A5BDCB80FA20F69CC89B52C77453BF7C9:processC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE131BC9645E07FAA4E7F8A6E0AF32E553DEE067EB73B18BCC4F74ADDDD41BED8B94FFBF9B28F38F8A62D71FF9A19D8DAA05734537599A07057D068244DB47EA563428BC92F9D53E780E695E189275DCE11D141CC1A5BDCB80FA20F69CC89B52C77453BF7C9, processC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE136D9705D71A7FB9684D39EBC255D1A6934D1D24A31BC9645E07FAA4E7F8A6E0AF32E553DEE067EB73B18BCC4F74ADDDD41BED8B94FFBF9B28F38F8A62D71FF9A19D8DAA05734537599A07057D068244DB47EA563428BC92F9D53E780E695E189275DCE11BEAFBB2FD8125A1CE4C97F75106BD93D0D091F0CD141CC1A5BDCB80FA20F69CC89B52C77453BF7C9:processC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE136D9705D71A7FB9684D39EBC255D1A6934D1D24A31BC9645E07FAA4E7F8A6E0AF32E553DEE067EB73B18BCC4F74ADDDD41BED8B94FFBF9B28F38F8A62D71FF9A19D8DAA05734537599A07057D068244DB47EA563428BC92F9D53E780E695E189275DCE11BEAFBB2FD8125A1CE4C97F75106BD93D0D091F0CD141CC1A5BDCB80FA20F69CC89B52C77453BF7C9, 
  processAll:processAll}}
}()