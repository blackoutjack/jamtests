var policy = function() {
  var states = [0];
  var _document = document;
  var _HTMLDocument = HTMLDocument;
  var _location = location;
  var _HTMLDocument_prototype_write = HTMLDocument.prototype.write;
  var _Storage_prototype_getItem = Storage.prototype.getItem;
  var _HTMLElement = HTMLElement;
  var _HTMLDocument_prototype_getElementById = HTMLDocument.prototype.getElementById;
  var _CSSStyleDeclaration = CSSStyleDeclaration;
  var _Window = Window;
  var _HTMLFormElement = HTMLFormElement;
  var _XMLHttpRequest = XMLHttpRequest;
  var _WebSocket = WebSocket;
  var _String_prototype_indexOf = String.prototype.indexOf;
  var __String_prototype_indexOf_call_bind__String_prototype_indexOf_ = _String_prototype_indexOf.call.bind(_String_prototype_indexOf);
  var _HTMLDocument_prototype_createElement = HTMLDocument.prototype.createElement;
  function processAll(tx) {
    var commit = true;
    var s1 = states.indexOf(1) > -1;
    var s2 = states.indexOf(2) > -1;
    var s3 = states.indexOf(3) > -1;
    var s4 = states.indexOf(4) > -1;
    var s5 = states.indexOf(5) > -1;
    var s6 = states.indexOf(6) > -1;
    var s7 = states.indexOf(7) > -1;
    var s8 = states.indexOf(8) > -1;
    var s30 = states.indexOf(30) > -1;
    var s29 = states.indexOf(29) > -1;
    var s28 = states.indexOf(28) > -1;
    var s27 = states.indexOf(27) > -1;
    var s26 = states.indexOf(26) > -1;
    var s25 = states.indexOf(25) > -1;
    var s24 = states.indexOf(24) > -1;
    var s23 = states.indexOf(23) > -1;
    var s22 = states.indexOf(22) > -1;
    var s21 = states.indexOf(21) > -1;
    var s20 = states.indexOf(20) > -1;
    var s19 = states.indexOf(19) > -1;
    var s18 = states.indexOf(18) > -1;
    var s17 = states.indexOf(17) > -1;
    var s16 = states.indexOf(16) > -1;
    var s15 = states.indexOf(15) > -1;
    var s14 = states.indexOf(14) > -1;
    var s13 = states.indexOf(13) > -1;
    var s12 = states.indexOf(12) > -1;
    var s11 = states.indexOf(11) > -1;
    var s10 = states.indexOf(10) > -1;
    var s9 = states.indexOf(9) > -1;
    var s31 = states.indexOf(31) > -1;
    var s32 = states.indexOf(32) > -1;
    var s33 = states.indexOf(33) > -1;
    var s34 = states.indexOf(34) > -1;
    var s35 = states.indexOf(35) > -1;
    var s36 = states.indexOf(36) > -1;
    var s37 = states.indexOf(37) > -1;
    var s38 = states.indexOf(38) > -1;
    var s39 = states.indexOf(39) > -1;
    var s40 = states.indexOf(40) > -1;
    var s41 = states.indexOf(41) > -1;
    var s42 = states.indexOf(42) > -1;
    var s43 = states.indexOf(43) > -1;
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
      if(node.type === "read" && (node.id === "cookie" && JAM.instanceof(node.obj, _HTMLDocument) || node.id === "textContent" && JAM.identical(node.obj["className"], "write-only non-editable"))) {
        commit = false;
        break
      }
      if(s2 && node.type === "write" && !JAM.identical(_location["href"], "http://localhost/")) {
        commit = false;
        break
      }
      if(!s2 && node.type === "write" && JAM.identical(_location["href"], "http://localhost/")) {
        s2 = true;
        states.push(2)
      }
      if(node.type === "call" && JAM.identical(node.value, _HTMLDocument_prototype_write) && !JAM.identical(node.args[0], undefined)) {
        commit = false;
        break
      }
      if(s3 && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(!s3 && node.type === "call" && JAM.identical(node.value, _Storage_prototype_getItem)) {
        s3 = true;
        states.push(3)
      }
      if(s4 && node.type === "write" && node.id === "src" && JAM.instanceof(node.obj, _HTMLElement)) {
        commit = false;
        break
      }
      if(!s4 && node.type === "call" && JAM.identical(node.value, _HTMLDocument_prototype_getElementById) && JAM.identical(node.args[0], "content")) {
        s4 = true;
        states.push(4)
      }
      if(node.type === "write" && (true && JAM.instanceof(node.obj, _CSSStyleDeclaration) && !JAM.identical(node.id, "display") || node.id === "textContent" && JAM.identical(node.obj["className"], "destructive-read read-only") || node.id === "x" && JAM.identical(node.value, 2) && node.id === "y" && JAM.identical(node.value, 3))) {
        commit = false;
        break
      }
      if(s5 && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(!s5 && node.type === "write" && node.id === "jam#setCookieSentinel" && JAM.identical(node.value, true)) {
        s5 = true;
        states.push(5)
      }
      if(s6 && node.type === "read" && node.id === "textContent" && JAM.identical(node.obj["className"], "destructive-read read-only")) {
        commit = false;
        break
      }
      if(!s6 && node.type === "read" && node.id === "textContent" && JAM.identical(node.obj["className"], "destructive-read read-only")) {
        s6 = true;
        states.push(6)
      }
      if(s7 && node.type === "write" && node.id === "textContent" && JAM.identical(node.obj["className"], "write-only non-editable")) {
        commit = false;
        break
      }
      if(!s7 && node.type === "write" && node.id === "textContent" && JAM.identical(node.obj["className"], "write-only non-editable")) {
        s7 = true;
        states.push(7)
      }
      if(s8 && node.type === "write" && node.id === "x" && JAM.identical(node.value, 2E6)) {
        commit = false;
        break
      }
      if(!s8 && node.type === "write" && node.id === "x" && JAM.identical(node.value, 2E6)) {
        s8 = true;
        states.push(8)
      }
      if(s30 && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(s29 && !s30 && node.type === "write" && node.id === "innerHTML") {
        s30 = true;
        states.push(30)
      }
      if(s28 && !s29 && node.type === "read" && node.id === "switch") {
        s29 = true;
        states.push(29)
      }
      if(s27 && !s28 && node.type === "read" && JAM.identical(node.obj, _document) && node.id === "write") {
        s28 = true;
        states.push(28)
      }
      if(s26 && !s27 && node.type === "write" && node.id === "innerHTML") {
        s27 = true;
        states.push(27)
      }
      if(s25 && !s26 && node.type === "read" && node.id === "switch") {
        s26 = true;
        states.push(26)
      }
      if(s24 && !s25 && node.type === "read" && JAM.identical(node.obj, _document) && node.id === "write") {
        s25 = true;
        states.push(25)
      }
      if(s23 && !s24 && node.type === "write" && node.id === "innerHTML") {
        s24 = true;
        states.push(24)
      }
      if(s22 && !s23 && node.type === "read" && node.id === "switch") {
        s23 = true;
        states.push(23)
      }
      if(s21 && !s22 && node.type === "read" && JAM.identical(node.obj, _document) && node.id === "write") {
        s22 = true;
        states.push(22)
      }
      if(s20 && !s21 && node.type === "write" && node.id === "innerHTML") {
        s21 = true;
        states.push(21)
      }
      if(s19 && !s20 && node.type === "read" && node.id === "switch") {
        s20 = true;
        states.push(20)
      }
      if(s18 && !s19 && node.type === "read" && JAM.identical(node.obj, _document) && node.id === "write") {
        s19 = true;
        states.push(19)
      }
      if(s17 && !s18 && node.type === "write" && node.id === "innerHTML") {
        s18 = true;
        states.push(18)
      }
      if(s16 && !s17 && node.type === "read" && node.id === "switch") {
        s17 = true;
        states.push(17)
      }
      if(s15 && !s16 && node.type === "read" && JAM.identical(node.obj, _document) && node.id === "write") {
        s16 = true;
        states.push(16)
      }
      if(s14 && !s15 && node.type === "write" && node.id === "innerHTML") {
        s15 = true;
        states.push(15)
      }
      if(s13 && !s14 && node.type === "read" && node.id === "switch") {
        s14 = true;
        states.push(14)
      }
      if(s12 && !s13 && node.type === "read" && JAM.identical(node.obj, _document) && node.id === "write") {
        s13 = true;
        states.push(13)
      }
      if(s11 && !s12 && node.type === "write" && node.id === "innerHTML") {
        s12 = true;
        states.push(12)
      }
      if(s10 && !s11 && node.type === "read" && node.id === "switch") {
        s11 = true;
        states.push(11)
      }
      if(s9 && !s10 && node.type === "read" && JAM.identical(node.obj, _document) && node.id === "write") {
        s10 = true;
        states.push(10)
      }
      if(!s9 && node.type === "read" && node.id === "eval" && JAM.instanceof(node.obj, _Window)) {
        s9 = true;
        states.push(9)
      }
      if(s31 && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(!s31 && node.type === "write" && node.id === "location" && JAM.instanceof(node.obj, _Window)) {
        s31 = true;
        states.push(31)
      }
      if(s32 && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(!s32 && node.type === "write" && node.id === "href" && JAM.instanceof(node.obj, _HTMLElement)) {
        s32 = true;
        states.push(32)
      }
      if(s33 && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(!s33 && node.type === "write" && node.id === "cookie" && JAM.instanceof(node.obj, _HTMLDocument)) {
        s33 = true;
        states.push(33)
      }
      if(s34 && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(!s34 && node.type === "write" && node.id === "action" && JAM.instanceof(node.obj, _HTMLFormElement)) {
        s34 = true;
        states.push(34)
      }
      if(s35 && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(!s35 && node.type === "read" && node.id === "open" && JAM.instanceof(node.obj, _XMLHttpRequest)) {
        s35 = true;
        states.push(35)
      }
      if(s36 && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(!s36 && node.type === "read" && node.id === "openDialog" && JAM.instanceof(node.obj, _Window)) {
        s36 = true;
        states.push(36)
      }
      if(s37 && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(!s37 && node.type === "read" && node.id === "postMessage" && JAM.instanceof(node.obj, _Window)) {
        s37 = true;
        states.push(37)
      }
      if(s38 && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(!s38 && node.type === "read" && node.id === "send" && JAM.instanceof(node.obj, _WebSocket)) {
        s38 = true;
        states.push(38)
      }
      if(s39 && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(!s39 && node.type === "read" && node.id === "submit" && JAM.instanceof(node.obj, _HTMLFormElement)) {
        s39 = true;
        states.push(39)
      }
      if(s40 && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(!s40 && node.type === "read" && node.id === "appendChild" && JAM.instanceof(node.obj, _HTMLElement)) {
        s40 = true;
        states.push(40)
      }
      if(s41 && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(!s41 && node.type === "write" && node.id === "src" && JAM.instanceof(node.obj, _HTMLElement)) {
        s41 = true;
        states.push(41)
      }
      if(s42 && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(!s42 && node.type === "call" && JAM.identical(node.value, _HTMLDocument_prototype_write) && node.argc > 0 && typeof node.args[0] === "string" && __String_prototype_indexOf_call_bind__String_prototype_indexOf_(node.args[0], "script") > -1) {
        s42 = true;
        states.push(42)
      }
      if(s43 && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(!s43 && node.type === "call" && JAM.identical(node.value, _HTMLDocument_prototype_createElement) && JAM.identical(node.args[0], "script")) {
        s43 = true;
        states.push(43)
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
  function processD1B26E82C3C7C4AA5A6D93F7A0110D043B1A982F4CDAF44D89391C6FE13FBBD6677C6DE0505D675A6FDE2E7025F368C3AE67F96C507DCB6901C6433F(tx) {
    var commit = true;
    var s1 = states.indexOf(1) > -1;
    var s3 = states.indexOf(3) > -1;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(!s1 && node.type === "read" && node.id === "getElementById" && JAM.instanceof(node.obj, _HTMLDocument)) {
        s1 = true;
        states.push(1)
      }
      if(node.type === "call" && JAM.identical(node.value, _HTMLDocument_prototype_write) && !JAM.identical(node.args[0], undefined)) {
        commit = false;
        break
      }
      if(!s3 && node.type === "call" && JAM.identical(node.value, _Storage_prototype_getItem)) {
        s3 = true;
        states.push(3)
      }
    }
    if(commit) {
      JAMScript.process(tx)
    }else {
      JAMScript.prevent(tx)
    }
  }
  processD1B26E82C3C7C4AA5A6D93F7A0110D043B1A982F4CDAF44D89391C6FE13FBBD6677C6DE0505D675A6FDE2E7025F368C3AE67F96C507DCB6901C6433F.subsumedBy = processAll;
  Object.freeze(processD1B26E82C3C7C4AA5A6D93F7A0110D043B1A982F4CDAF44D89391C6FE13FBBD6677C6DE0505D675A6FDE2E7025F368C3AE67F96C507DCB6901C6433F);
  function processD1B26E82C3C7C4AA5A6D93F7A0110D043B1A982FE656B7690429FFEA4A12C73E95B66185D91EBB7291CD5A17081957B5A666BECDD1ADC94436AACBCB02BEB9B7B2358FCBE710EE3EF4F98E5DB6FF7E1483983BA66852225133AFA2AF882CA0A5135A72DA17DF82182101A9717A23B264886502B4BFB90A3B0D93531F9287E5BDB8C39CE5D90E545857BDFE23F1D9A4029679C537F8C64D7662C775A81EFD320D1EE318ADCF4AD7927AFED326AD9BC4FBE6849B7E0332B9287CE82CF90291D4378493FEDC970D8441659475762E5A63A4EAC926C615906F1DB9B8268B7B791A0622645AEB8392B9A1B341AB05479255B3403D119CEE99B5C95B58238BE9BD63E2A8ADAFA4AF31880725D76D3B262A31FE68AD1150632BEAF68CBF57A0B46B01647F686CBEDC5153983299D40013D867A8D45F5B3E78605D1B39068A8C34DBE5B76F2DB2EF8A69BE43A5038ADABE8B0F5E068F924C548F7ED27D0F5529FF96DCE954A3A306F626734D630BF6806E7C54D8C07A454187D92976C52805C7A895CDB8798C4D5B27B65A881BEAB4E20525B10D3D1256178FEEA3CC002CA026A70767CF68B131221BDE18FBC1A1C7857C3236070C7FE98E8D5D24CF614130645C30BA0C6D250C4DCAE23B21B27EA242C4B32157FA7CF690F433156556DE24BAE25088A2180AD1B7B61C2D15D579DBE5632FD95875AA097B23954FE55D466475BF17B8A8413C2C91B79D1EC54D820A518CF5E83A163BA02F575ABE9257A9FA43(tx) {
    var commit = true;
    var s1 = states.indexOf(1) > -1;
    var s6 = states.indexOf(6) > -1;
    var s28 = states.indexOf(28) > -1;
    var s29 = states.indexOf(29) > -1;
    var s27 = states.indexOf(27) > -1;
    var s25 = states.indexOf(25) > -1;
    var s26 = states.indexOf(26) > -1;
    var s24 = states.indexOf(24) > -1;
    var s22 = states.indexOf(22) > -1;
    var s23 = states.indexOf(23) > -1;
    var s21 = states.indexOf(21) > -1;
    var s19 = states.indexOf(19) > -1;
    var s20 = states.indexOf(20) > -1;
    var s18 = states.indexOf(18) > -1;
    var s16 = states.indexOf(16) > -1;
    var s17 = states.indexOf(17) > -1;
    var s15 = states.indexOf(15) > -1;
    var s13 = states.indexOf(13) > -1;
    var s14 = states.indexOf(14) > -1;
    var s12 = states.indexOf(12) > -1;
    var s10 = states.indexOf(10) > -1;
    var s11 = states.indexOf(11) > -1;
    var s9 = states.indexOf(9) > -1;
    var s35 = states.indexOf(35) > -1;
    var s36 = states.indexOf(36) > -1;
    var s37 = states.indexOf(37) > -1;
    var s38 = states.indexOf(38) > -1;
    var s39 = states.indexOf(39) > -1;
    var s40 = states.indexOf(40) > -1;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(!s1 && node.type === "read" && (node.id === "getElementById" && JAM.instanceof(node.obj, _HTMLDocument) || node.id === "getElementsByTagName" && JAM.instanceof(node.obj, _HTMLDocument))) {
        s1 = true;
        states.push(1)
      }
      if(node.type === "read" && (node.id === "cookie" && JAM.instanceof(node.obj, _HTMLDocument) || node.id === "textContent" && JAM.identical(node.obj["className"], "write-only non-editable"))) {
        commit = false;
        break
      }
      if(s6 && node.type === "read" && node.id === "textContent" && JAM.identical(node.obj["className"], "destructive-read read-only")) {
        commit = false;
        break
      }
      if(!s6 && node.type === "read" && node.id === "textContent" && JAM.identical(node.obj["className"], "destructive-read read-only")) {
        s6 = true;
        states.push(6)
      }
      if(s28 && !s29 && node.type === "read" && node.id === "switch") {
        s29 = true;
        states.push(29)
      }
      if(s27 && !s28 && node.type === "read" && JAM.identical(node.obj, _document) && node.id === "write") {
        s28 = true;
        states.push(28)
      }
      if(s25 && !s26 && node.type === "read" && node.id === "switch") {
        s26 = true;
        states.push(26)
      }
      if(s24 && !s25 && node.type === "read" && JAM.identical(node.obj, _document) && node.id === "write") {
        s25 = true;
        states.push(25)
      }
      if(s22 && !s23 && node.type === "read" && node.id === "switch") {
        s23 = true;
        states.push(23)
      }
      if(s21 && !s22 && node.type === "read" && JAM.identical(node.obj, _document) && node.id === "write") {
        s22 = true;
        states.push(22)
      }
      if(s19 && !s20 && node.type === "read" && node.id === "switch") {
        s20 = true;
        states.push(20)
      }
      if(s18 && !s19 && node.type === "read" && JAM.identical(node.obj, _document) && node.id === "write") {
        s19 = true;
        states.push(19)
      }
      if(s16 && !s17 && node.type === "read" && node.id === "switch") {
        s17 = true;
        states.push(17)
      }
      if(s15 && !s16 && node.type === "read" && JAM.identical(node.obj, _document) && node.id === "write") {
        s16 = true;
        states.push(16)
      }
      if(s13 && !s14 && node.type === "read" && node.id === "switch") {
        s14 = true;
        states.push(14)
      }
      if(s12 && !s13 && node.type === "read" && JAM.identical(node.obj, _document) && node.id === "write") {
        s13 = true;
        states.push(13)
      }
      if(s10 && !s11 && node.type === "read" && node.id === "switch") {
        s11 = true;
        states.push(11)
      }
      if(s9 && !s10 && node.type === "read" && JAM.identical(node.obj, _document) && node.id === "write") {
        s10 = true;
        states.push(10)
      }
      if(!s9 && node.type === "read" && node.id === "eval" && JAM.instanceof(node.obj, _Window)) {
        s9 = true;
        states.push(9)
      }
      if(!s35 && node.type === "read" && node.id === "open" && JAM.instanceof(node.obj, _XMLHttpRequest)) {
        s35 = true;
        states.push(35)
      }
      if(!s36 && node.type === "read" && node.id === "openDialog" && JAM.instanceof(node.obj, _Window)) {
        s36 = true;
        states.push(36)
      }
      if(!s37 && node.type === "read" && node.id === "postMessage" && JAM.instanceof(node.obj, _Window)) {
        s37 = true;
        states.push(37)
      }
      if(!s38 && node.type === "read" && node.id === "send" && JAM.instanceof(node.obj, _WebSocket)) {
        s38 = true;
        states.push(38)
      }
      if(!s39 && node.type === "read" && node.id === "submit" && JAM.instanceof(node.obj, _HTMLFormElement)) {
        s39 = true;
        states.push(39)
      }
      if(!s40 && node.type === "read" && node.id === "appendChild" && JAM.instanceof(node.obj, _HTMLElement)) {
        s40 = true;
        states.push(40)
      }
    }
    if(commit) {
      JAMScript.process(tx)
    }else {
      JAMScript.prevent(tx)
    }
  }
  processD1B26E82C3C7C4AA5A6D93F7A0110D043B1A982FE656B7690429FFEA4A12C73E95B66185D91EBB7291CD5A17081957B5A666BECDD1ADC94436AACBCB02BEB9B7B2358FCBE710EE3EF4F98E5DB6FF7E1483983BA66852225133AFA2AF882CA0A5135A72DA17DF82182101A9717A23B264886502B4BFB90A3B0D93531F9287E5BDB8C39CE5D90E545857BDFE23F1D9A4029679C537F8C64D7662C775A81EFD320D1EE318ADCF4AD7927AFED326AD9BC4FBE6849B7E0332B9287CE82CF90291D4378493FEDC970D8441659475762E5A63A4EAC926C615906F1DB9B8268B7B791A0622645AEB8392B9A1B341AB05479255B3403D119CEE99B5C95B58238BE9BD63E2A8ADAFA4AF31880725D76D3B262A31FE68AD1150632BEAF68CBF57A0B46B01647F686CBEDC5153983299D40013D867A8D45F5B3E78605D1B39068A8C34DBE5B76F2DB2EF8A69BE43A5038ADABE8B0F5E068F924C548F7ED27D0F5529FF96DCE954A3A306F626734D630BF6806E7C54D8C07A454187D92976C52805C7A895CDB8798C4D5B27B65A881BEAB4E20525B10D3D1256178FEEA3CC002CA026A70767CF68B131221BDE18FBC1A1C7857C3236070C7FE98E8D5D24CF614130645C30BA0C6D250C4DCAE23B21B27EA242C4B32157FA7CF690F433156556DE24BAE25088A2180AD1B7B61C2D15D579DBE5632FD95875AA097B23954FE55D466475BF17B8A8413C2C91B79D1EC54D820A518CF5E83A163BA02F575ABE9257A9FA43.subsumedBy = 
  processAll;
  Object.freeze(processD1B26E82C3C7C4AA5A6D93F7A0110D043B1A982FE656B7690429FFEA4A12C73E95B66185D91EBB7291CD5A17081957B5A666BECDD1ADC94436AACBCB02BEB9B7B2358FCBE710EE3EF4F98E5DB6FF7E1483983BA66852225133AFA2AF882CA0A5135A72DA17DF82182101A9717A23B264886502B4BFB90A3B0D93531F9287E5BDB8C39CE5D90E545857BDFE23F1D9A4029679C537F8C64D7662C775A81EFD320D1EE318ADCF4AD7927AFED326AD9BC4FBE6849B7E0332B9287CE82CF90291D4378493FEDC970D8441659475762E5A63A4EAC926C615906F1DB9B8268B7B791A0622645AEB8392B9A1B341AB05479255B3403D119CEE99B5C95B58238BE9BD63E2A8ADAFA4AF31880725D76D3B262A31FE68AD1150632BEAF68CBF57A0B46B01647F686CBEDC5153983299D40013D867A8D45F5B3E78605D1B39068A8C34DBE5B76F2DB2EF8A69BE43A5038ADABE8B0F5E068F924C548F7ED27D0F5529FF96DCE954A3A306F626734D630BF6806E7C54D8C07A454187D92976C52805C7A895CDB8798C4D5B27B65A881BEAB4E20525B10D3D1256178FEEA3CC002CA026A70767CF68B131221BDE18FBC1A1C7857C3236070C7FE98E8D5D24CF614130645C30BA0C6D250C4DCAE23B21B27EA242C4B32157FA7CF690F433156556DE24BAE25088A2180AD1B7B61C2D15D579DBE5632FD95875AA097B23954FE55D466475BF17B8A8413C2C91B79D1EC54D820A518CF5E83A163BA02F575ABE9257A9FA43);
  function process425E08A28862414CF7130381FE99A660F52DB81129A03B8BB8FA94683D86040222E0A4E3140FC4DFB0C803E5B135162B6CEA9F33D761E5CF697C6648AF65661CDDA02BEF577B9796994F429B325DEECDC779E3150DAF20FA5569F74C4D8A59D524A8B7B460BC769F7FE69A3D16A7359015C19BE54348D76E987B99A50519229778F66F084EDA50254ABC348DA5E2ABAB44A1DE63360A228CB63B0B25682BE6EE07DBA2E748B97DAFA7B08E869D54E8390F67F3EB6AC94130B1D292416838E4C6B471EEC7CB2741C09D4FC353FBD4686E102EC1D9135CB58506D1AEF2FEA178F4547CBEA412D0DAC5210C48CC47C6A1D5F4F1815686F85C11F20ED3C6F8B9FF606DB7572205386E733612FB8B8AAEBE5370DD6F9E2BB8D909A9808634B9FF91AD8DB2ECF3BBC11227CB08F90CAEF3E6CE14E4F96CE3D38B5F95A88966F3190AAF612654FB3F3A03516CBDABC1425F50B400F4F63D50495009445AA01DA74D43C9259376978873C9DD612ADF2C90A1DD38A53C9B4A188E860B09D782779C7B03EB2FF1F02121C622D64336F1619851B56FD050CFD41F4B09134D4EE2571FD46103EE55A84AE8802567B4F98B67F455E807FC462A1E2F60E18218DF132673D9B06F3D39FD710BD5CDA112CC86AEB254DE18FCC78B183688CED6F0EDE2BFD0161BCB84792EDD6E4F8115C9B3B56C9BCC4CB173DC5DA7CBEDAC697EFB520100392CCAD10492F793C13E631453D4163198A218395AF58F8D92E8A55A9BE49A17D370677A047A61F6E77483583E3409CDEBD10E1B42664DBFDD147DE24C732CE568FB1709ADB7BBA5F7511329E3341A38E0D15C700BDB0AB7FDD686BF7E5FA1DF4A7F8257666C1DD206F93595E738CA90677481AA3421A310AD62B708501CF0CA01233B937F6AAB557BA07F42E2678A7B05EF331D5E08DAE189AC73D6D5DFF09E604649A9072EEC2F684093(tx) {
    var commit = true;
    var s1 = states.indexOf(1) > -1;
    var s3 = states.indexOf(3) > -1;
    var s4 = states.indexOf(4) > -1;
    var s5 = states.indexOf(5) > -1;
    var s7 = states.indexOf(7) > -1;
    var s30 = states.indexOf(30) > -1;
    var s29 = states.indexOf(29) > -1;
    var s26 = states.indexOf(26) > -1;
    var s27 = states.indexOf(27) > -1;
    var s23 = states.indexOf(23) > -1;
    var s24 = states.indexOf(24) > -1;
    var s20 = states.indexOf(20) > -1;
    var s21 = states.indexOf(21) > -1;
    var s17 = states.indexOf(17) > -1;
    var s18 = states.indexOf(18) > -1;
    var s14 = states.indexOf(14) > -1;
    var s15 = states.indexOf(15) > -1;
    var s11 = states.indexOf(11) > -1;
    var s12 = states.indexOf(12) > -1;
    var s31 = states.indexOf(31) > -1;
    var s32 = states.indexOf(32) > -1;
    var s33 = states.indexOf(33) > -1;
    var s34 = states.indexOf(34) > -1;
    var s35 = states.indexOf(35) > -1;
    var s36 = states.indexOf(36) > -1;
    var s37 = states.indexOf(37) > -1;
    var s38 = states.indexOf(38) > -1;
    var s39 = states.indexOf(39) > -1;
    var s40 = states.indexOf(40) > -1;
    var s41 = states.indexOf(41) > -1;
    var s42 = states.indexOf(42) > -1;
    var s43 = states.indexOf(43) > -1;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(s1 && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(s3 && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(s4 && node.type === "write" && node.id === "src" && JAM.instanceof(node.obj, _HTMLElement)) {
        commit = false;
        break
      }
      if(node.type === "write" && (true && JAM.instanceof(node.obj, _CSSStyleDeclaration) && !JAM.identical(node.id, "display") || node.id === "textContent" && JAM.identical(node.obj["className"], "destructive-read read-only"))) {
        commit = false;
        break
      }
      if(s5 && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(s7 && node.type === "write" && node.id === "textContent" && JAM.identical(node.obj["className"], "write-only non-editable")) {
        commit = false;
        break
      }
      if(!s7 && node.type === "write" && node.id === "textContent" && JAM.identical(node.obj["className"], "write-only non-editable")) {
        s7 = true;
        states.push(7)
      }
      if(s30 && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(s29 && !s30 && node.type === "write" && node.id === "innerHTML") {
        s30 = true;
        states.push(30)
      }
      if(s26 && !s27 && node.type === "write" && node.id === "innerHTML") {
        s27 = true;
        states.push(27)
      }
      if(s23 && !s24 && node.type === "write" && node.id === "innerHTML") {
        s24 = true;
        states.push(24)
      }
      if(s20 && !s21 && node.type === "write" && node.id === "innerHTML") {
        s21 = true;
        states.push(21)
      }
      if(s17 && !s18 && node.type === "write" && node.id === "innerHTML") {
        s18 = true;
        states.push(18)
      }
      if(s14 && !s15 && node.type === "write" && node.id === "innerHTML") {
        s15 = true;
        states.push(15)
      }
      if(s11 && !s12 && node.type === "write" && node.id === "innerHTML") {
        s12 = true;
        states.push(12)
      }
      if(s31 && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(!s31 && node.type === "write" && node.id === "location" && JAM.instanceof(node.obj, _Window)) {
        s31 = true;
        states.push(31)
      }
      if(s32 && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(!s32 && node.type === "write" && node.id === "href" && JAM.instanceof(node.obj, _HTMLElement)) {
        s32 = true;
        states.push(32)
      }
      if(s33 && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(!s33 && node.type === "write" && node.id === "cookie" && JAM.instanceof(node.obj, _HTMLDocument)) {
        s33 = true;
        states.push(33)
      }
      if(s34 && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(!s34 && node.type === "write" && node.id === "action" && JAM.instanceof(node.obj, _HTMLFormElement)) {
        s34 = true;
        states.push(34)
      }
      if(s35 && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(s36 && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(s37 && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(s38 && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(s39 && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(s40 && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(s41 && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(!s41 && node.type === "write" && node.id === "src" && JAM.instanceof(node.obj, _HTMLElement)) {
        s41 = true;
        states.push(41)
      }
      if(s42 && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
        commit = false;
        break
      }
      if(s43 && node.type === "write" && JAM.identical(node.obj, _document) && node.id === "cookie") {
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
  process425E08A28862414CF7130381FE99A660F52DB81129A03B8BB8FA94683D86040222E0A4E3140FC4DFB0C803E5B135162B6CEA9F33D761E5CF697C6648AF65661CDDA02BEF577B9796994F429B325DEECDC779E3150DAF20FA5569F74C4D8A59D524A8B7B460BC769F7FE69A3D16A7359015C19BE54348D76E987B99A50519229778F66F084EDA50254ABC348DA5E2ABAB44A1DE63360A228CB63B0B25682BE6EE07DBA2E748B97DAFA7B08E869D54E8390F67F3EB6AC94130B1D292416838E4C6B471EEC7CB2741C09D4FC353FBD4686E102EC1D9135CB58506D1AEF2FEA178F4547CBEA412D0DAC5210C48CC47C6A1D5F4F1815686F85C11F20ED3C6F8B9FF606DB7572205386E733612FB8B8AAEBE5370DD6F9E2BB8D909A9808634B9FF91AD8DB2ECF3BBC11227CB08F90CAEF3E6CE14E4F96CE3D38B5F95A88966F3190AAF612654FB3F3A03516CBDABC1425F50B400F4F63D50495009445AA01DA74D43C9259376978873C9DD612ADF2C90A1DD38A53C9B4A188E860B09D782779C7B03EB2FF1F02121C622D64336F1619851B56FD050CFD41F4B09134D4EE2571FD46103EE55A84AE8802567B4F98B67F455E807FC462A1E2F60E18218DF132673D9B06F3D39FD710BD5CDA112CC86AEB254DE18FCC78B183688CED6F0EDE2BFD0161BCB84792EDD6E4F8115C9B3B56C9BCC4CB173DC5DA7CBEDAC697EFB520100392CCAD10492F793C13E631453D4163198A218395AF58F8D92E8A55A9BE49A17D370677A047A61F6E77483583E3409CDEBD10E1B42664DBFDD147DE24C732CE568FB1709ADB7BBA5F7511329E3341A38E0D15C700BDB0AB7FDD686BF7E5FA1DF4A7F8257666C1DD206F93595E738CA90677481AA3421A310AD62B708501CF0CA01233B937F6AAB557BA07F42E2678A7B05EF331D5E08DAE189AC73D6D5DFF09E604649A9072EEC2F684093.subsumedBy = 
  processAll;
  Object.freeze(process425E08A28862414CF7130381FE99A660F52DB81129A03B8BB8FA94683D86040222E0A4E3140FC4DFB0C803E5B135162B6CEA9F33D761E5CF697C6648AF65661CDDA02BEF577B9796994F429B325DEECDC779E3150DAF20FA5569F74C4D8A59D524A8B7B460BC769F7FE69A3D16A7359015C19BE54348D76E987B99A50519229778F66F084EDA50254ABC348DA5E2ABAB44A1DE63360A228CB63B0B25682BE6EE07DBA2E748B97DAFA7B08E869D54E8390F67F3EB6AC94130B1D292416838E4C6B471EEC7CB2741C09D4FC353FBD4686E102EC1D9135CB58506D1AEF2FEA178F4547CBEA412D0DAC5210C48CC47C6A1D5F4F1815686F85C11F20ED3C6F8B9FF606DB7572205386E733612FB8B8AAEBE5370DD6F9E2BB8D909A9808634B9FF91AD8DB2ECF3BBC11227CB08F90CAEF3E6CE14E4F96CE3D38B5F95A88966F3190AAF612654FB3F3A03516CBDABC1425F50B400F4F63D50495009445AA01DA74D43C9259376978873C9DD612ADF2C90A1DD38A53C9B4A188E860B09D782779C7B03EB2FF1F02121C622D64336F1619851B56FD050CFD41F4B09134D4EE2571FD46103EE55A84AE8802567B4F98B67F455E807FC462A1E2F60E18218DF132673D9B06F3D39FD710BD5CDA112CC86AEB254DE18FCC78B183688CED6F0EDE2BFD0161BCB84792EDD6E4F8115C9B3B56C9BCC4CB173DC5DA7CBEDAC697EFB520100392CCAD10492F793C13E631453D4163198A218395AF58F8D92E8A55A9BE49A17D370677A047A61F6E77483583E3409CDEBD10E1B42664DBFDD147DE24C732CE568FB1709ADB7BBA5F7511329E3341A38E0D15C700BDB0AB7FDD686BF7E5FA1DF4A7F8257666C1DD206F93595E738CA90677481AA3421A310AD62B708501CF0CA01233B937F6AAB557BA07F42E2678A7B05EF331D5E08DAE189AC73D6D5DFF09E604649A9072EEC2F684093);
  function process4CDAF44D89391C6FE13FBBD6677C6DE0505D675A6FDE2E7025F368C3AE67F96C507DCB6901C6433F(tx) {
    var commit = true;
    var s3 = states.indexOf(3) > -1;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "call" && JAM.identical(node.value, _HTMLDocument_prototype_write) && !JAM.identical(node.args[0], undefined)) {
        commit = false;
        break
      }
      if(!s3 && node.type === "call" && JAM.identical(node.value, _Storage_prototype_getItem)) {
        s3 = true;
        states.push(3)
      }
    }
    if(commit) {
      JAMScript.process(tx)
    }else {
      JAMScript.prevent(tx)
    }
  }
  process4CDAF44D89391C6FE13FBBD6677C6DE0505D675A6FDE2E7025F368C3AE67F96C507DCB6901C6433F.subsumedBy = processAll;
  Object.freeze(process4CDAF44D89391C6FE13FBBD6677C6DE0505D675A6FDE2E7025F368C3AE67F96C507DCB6901C6433F);
  function process4CDAF44D89391C6FE13FBBD6677C6DE0505D675A6FDE2E7025F368C3AE67F96C507DCB6901C6433F1674A436F704F8D95B584538FA26F64E8920105FA3707BCCD36A41763F89C4262F8BC9A0E8F7B3ADAD512C4E0F6A02252F1E25F4870CE858E88CDD49(tx) {
    var commit = true;
    var s3 = states.indexOf(3) > -1;
    var s4 = states.indexOf(4) > -1;
    var s42 = states.indexOf(42) > -1;
    var s43 = states.indexOf(43) > -1;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "call" && JAM.identical(node.value, _HTMLDocument_prototype_write) && !JAM.identical(node.args[0], undefined)) {
        commit = false;
        break
      }
      if(!s3 && node.type === "call" && JAM.identical(node.value, _Storage_prototype_getItem)) {
        s3 = true;
        states.push(3)
      }
      if(!s4 && node.type === "call" && JAM.identical(node.value, _HTMLDocument_prototype_getElementById) && JAM.identical(node.args[0], "content")) {
        s4 = true;
        states.push(4)
      }
      if(!s42 && node.type === "call" && JAM.identical(node.value, _HTMLDocument_prototype_write) && node.argc > 0 && typeof node.args[0] === "string" && __String_prototype_indexOf_call_bind__String_prototype_indexOf_(node.args[0], "script") > -1) {
        s42 = true;
        states.push(42)
      }
      if(!s43 && node.type === "call" && JAM.identical(node.value, _HTMLDocument_prototype_createElement) && JAM.identical(node.args[0], "script")) {
        s43 = true;
        states.push(43)
      }
    }
    if(commit) {
      JAMScript.process(tx)
    }else {
      JAMScript.prevent(tx)
    }
  }
  process4CDAF44D89391C6FE13FBBD6677C6DE0505D675A6FDE2E7025F368C3AE67F96C507DCB6901C6433F1674A436F704F8D95B584538FA26F64E8920105FA3707BCCD36A41763F89C4262F8BC9A0E8F7B3ADAD512C4E0F6A02252F1E25F4870CE858E88CDD49.subsumedBy = processAll;
  Object.freeze(process4CDAF44D89391C6FE13FBBD6677C6DE0505D675A6FDE2E7025F368C3AE67F96C507DCB6901C6433F1674A436F704F8D95B584538FA26F64E8920105FA3707BCCD36A41763F89C4262F8BC9A0E8F7B3ADAD512C4E0F6A02252F1E25F4870CE858E88CDD49);
  function process4CDAF44D89391C6FE13FBBD6677C6DE0505D675A6FDE2E7025F368C3AE67F96C507DCB6901C6433F1674A436F704F8D95B584538FA26F64E8920105FF1D9A4029679C537F8C64D7662C775A81EFD320D0332B9287CE82CF90291D4378493FEDC970D84417B791A0622645AEB8392B9A1B341AB05479255B3AF31880725D76D3B262A31FE68AD1150632BEAF613D867A8D45F5B3E78605D1B39068A8C34DBE5B7548F7ED27D0F5529FF96DCE954A3A306F626734DA895CDB8798C4D5B27B65A881BEAB4E20525B10DA3707BCCD36A41763F89C4262F8BC9A0E8F7B3ADAD512C4E0F6A02252F1E25F4870CE858E88CDD49(tx) {
    var commit = true;
    var s3 = states.indexOf(3) > -1;
    var s4 = states.indexOf(4) > -1;
    var s27 = states.indexOf(27) > -1;
    var s28 = states.indexOf(28) > -1;
    var s24 = states.indexOf(24) > -1;
    var s25 = states.indexOf(25) > -1;
    var s21 = states.indexOf(21) > -1;
    var s22 = states.indexOf(22) > -1;
    var s18 = states.indexOf(18) > -1;
    var s19 = states.indexOf(19) > -1;
    var s15 = states.indexOf(15) > -1;
    var s16 = states.indexOf(16) > -1;
    var s12 = states.indexOf(12) > -1;
    var s13 = states.indexOf(13) > -1;
    var s9 = states.indexOf(9) > -1;
    var s10 = states.indexOf(10) > -1;
    var s42 = states.indexOf(42) > -1;
    var s43 = states.indexOf(43) > -1;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "call" && JAM.identical(node.value, _HTMLDocument_prototype_write) && !JAM.identical(node.args[0], undefined)) {
        commit = false;
        break
      }
      if(!s3 && node.type === "call" && JAM.identical(node.value, _Storage_prototype_getItem)) {
        s3 = true;
        states.push(3)
      }
      if(!s4 && node.type === "call" && JAM.identical(node.value, _HTMLDocument_prototype_getElementById) && JAM.identical(node.args[0], "content")) {
        s4 = true;
        states.push(4)
      }
      if(s27 && !s28 && node.type === "read" && JAM.identical(node.obj, _document) && node.id === "write") {
        s28 = true;
        states.push(28)
      }
      if(s24 && !s25 && node.type === "read" && JAM.identical(node.obj, _document) && node.id === "write") {
        s25 = true;
        states.push(25)
      }
      if(s21 && !s22 && node.type === "read" && JAM.identical(node.obj, _document) && node.id === "write") {
        s22 = true;
        states.push(22)
      }
      if(s18 && !s19 && node.type === "read" && JAM.identical(node.obj, _document) && node.id === "write") {
        s19 = true;
        states.push(19)
      }
      if(s15 && !s16 && node.type === "read" && JAM.identical(node.obj, _document) && node.id === "write") {
        s16 = true;
        states.push(16)
      }
      if(s12 && !s13 && node.type === "read" && JAM.identical(node.obj, _document) && node.id === "write") {
        s13 = true;
        states.push(13)
      }
      if(s9 && !s10 && node.type === "read" && JAM.identical(node.obj, _document) && node.id === "write") {
        s10 = true;
        states.push(10)
      }
      if(!s42 && node.type === "call" && JAM.identical(node.value, _HTMLDocument_prototype_write) && node.argc > 0 && typeof node.args[0] === "string" && __String_prototype_indexOf_call_bind__String_prototype_indexOf_(node.args[0], "script") > -1) {
        s42 = true;
        states.push(42)
      }
      if(!s43 && node.type === "call" && JAM.identical(node.value, _HTMLDocument_prototype_createElement) && JAM.identical(node.args[0], "script")) {
        s43 = true;
        states.push(43)
      }
    }
    if(commit) {
      JAMScript.process(tx)
    }else {
      JAMScript.prevent(tx)
    }
  }
  process4CDAF44D89391C6FE13FBBD6677C6DE0505D675A6FDE2E7025F368C3AE67F96C507DCB6901C6433F1674A436F704F8D95B584538FA26F64E8920105FF1D9A4029679C537F8C64D7662C775A81EFD320D0332B9287CE82CF90291D4378493FEDC970D84417B791A0622645AEB8392B9A1B341AB05479255B3AF31880725D76D3B262A31FE68AD1150632BEAF613D867A8D45F5B3E78605D1B39068A8C34DBE5B7548F7ED27D0F5529FF96DCE954A3A306F626734DA895CDB8798C4D5B27B65A881BEAB4E20525B10DA3707BCCD36A41763F89C4262F8BC9A0E8F7B3ADAD512C4E0F6A02252F1E25F4870CE858E88CDD49.subsumedBy = 
  processAll;
  Object.freeze(process4CDAF44D89391C6FE13FBBD6677C6DE0505D675A6FDE2E7025F368C3AE67F96C507DCB6901C6433F1674A436F704F8D95B584538FA26F64E8920105FF1D9A4029679C537F8C64D7662C775A81EFD320D0332B9287CE82CF90291D4378493FEDC970D84417B791A0622645AEB8392B9A1B341AB05479255B3AF31880725D76D3B262A31FE68AD1150632BEAF613D867A8D45F5B3E78605D1B39068A8C34DBE5B7548F7ED27D0F5529FF96DCE954A3A306F626734DA895CDB8798C4D5B27B65A881BEAB4E20525B10DA3707BCCD36A41763F89C4262F8BC9A0E8F7B3ADAD512C4E0F6A02252F1E25F4870CE858E88CDD49);
  function process6FDE2E7025F368C3AE67F96C507DCB6901C6433F(tx) {
    var s3 = states.indexOf(3) > -1;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len && !s3;i++) {
      var node = as[i];
      if(!s3 && node.type === "call" && JAM.identical(node.value, _Storage_prototype_getItem)) {
        s3 = true;
        states.push(3)
      }
    }
    JAMScript.process(tx)
  }
  process6FDE2E7025F368C3AE67F96C507DCB6901C6433F.subsumedBy = processAll;
  Object.freeze(process6FDE2E7025F368C3AE67F96C507DCB6901C6433F);
  function process6FDE2E7025F368C3AE67F96C507DCB6901C6433F1BDE18FBC1A1C7857C3236070C7FE98E8D5D24CF(tx) {
    var s3 = states.indexOf(3) > -1;
    var s35 = states.indexOf(35) > -1;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len && (!s3 || !s35);i++) {
      var node = as[i];
      if(!s3 && node.type === "call" && JAM.identical(node.value, _Storage_prototype_getItem)) {
        s3 = true;
        states.push(3)
      }
      if(!s35 && node.type === "read" && node.id === "open" && JAM.instanceof(node.obj, _XMLHttpRequest)) {
        s35 = true;
        states.push(35)
      }
    }
    JAMScript.process(tx)
  }
  process6FDE2E7025F368C3AE67F96C507DCB6901C6433F1BDE18FBC1A1C7857C3236070C7FE98E8D5D24CF.subsumedBy = processAll;
  Object.freeze(process6FDE2E7025F368C3AE67F96C507DCB6901C6433F1BDE18FBC1A1C7857C3236070C7FE98E8D5D24CF);
  function processAF65661CDDA02BEF577B9796994F429B325DEECD6AC94130B1D292416838E4C6B471EEC7CB2741C09D4FC353FBD4686E102EC1D9135CB58506D1AEF2FEA178F4547CBEA412D0DAC5210C48CC47C6A1D5F4F1815686F85C11F20ED3C6F8B9FF606DB7572205386E733612FB8B8AAEBE5370DD6F9E2BB8D909A9808634B9FF91AD8DB2ECF3BBC11227CB08F90CAEF3E6CE14E4F96CE3D38B5F95A88966F3190AAF(tx) {
    var commit = true;
    var s29 = states.indexOf(29) > -1;
    var s30 = states.indexOf(30) > -1;
    var s26 = states.indexOf(26) > -1;
    var s27 = states.indexOf(27) > -1;
    var s23 = states.indexOf(23) > -1;
    var s24 = states.indexOf(24) > -1;
    var s20 = states.indexOf(20) > -1;
    var s21 = states.indexOf(21) > -1;
    var s17 = states.indexOf(17) > -1;
    var s18 = states.indexOf(18) > -1;
    var s14 = states.indexOf(14) > -1;
    var s15 = states.indexOf(15) > -1;
    var s11 = states.indexOf(11) > -1;
    var s12 = states.indexOf(12) > -1;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "write" && true && JAM.instanceof(node.obj, _CSSStyleDeclaration) && !JAM.identical(node.id, "display")) {
        commit = false;
        break
      }
      if(s29 && !s30 && node.type === "write" && node.id === "innerHTML") {
        s30 = true;
        states.push(30)
      }
      if(s26 && !s27 && node.type === "write" && node.id === "innerHTML") {
        s27 = true;
        states.push(27)
      }
      if(s23 && !s24 && node.type === "write" && node.id === "innerHTML") {
        s24 = true;
        states.push(24)
      }
      if(s20 && !s21 && node.type === "write" && node.id === "innerHTML") {
        s21 = true;
        states.push(21)
      }
      if(s17 && !s18 && node.type === "write" && node.id === "innerHTML") {
        s18 = true;
        states.push(18)
      }
      if(s14 && !s15 && node.type === "write" && node.id === "innerHTML") {
        s15 = true;
        states.push(15)
      }
      if(s11 && !s12 && node.type === "write" && node.id === "innerHTML") {
        s12 = true;
        states.push(12)
      }
    }
    if(commit) {
      JAMScript.process(tx)
    }else {
      JAMScript.prevent(tx)
    }
  }
  processAF65661CDDA02BEF577B9796994F429B325DEECD6AC94130B1D292416838E4C6B471EEC7CB2741C09D4FC353FBD4686E102EC1D9135CB58506D1AEF2FEA178F4547CBEA412D0DAC5210C48CC47C6A1D5F4F1815686F85C11F20ED3C6F8B9FF606DB7572205386E733612FB8B8AAEBE5370DD6F9E2BB8D909A9808634B9FF91AD8DB2ECF3BBC11227CB08F90CAEF3E6CE14E4F96CE3D38B5F95A88966F3190AAF.subsumedBy = processAll;
  Object.freeze(processAF65661CDDA02BEF577B9796994F429B325DEECD6AC94130B1D292416838E4C6B471EEC7CB2741C09D4FC353FBD4686E102EC1D9135CB58506D1AEF2FEA178F4547CBEA412D0DAC5210C48CC47C6A1D5F4F1815686F85C11F20ED3C6F8B9FF606DB7572205386E733612FB8B8AAEBE5370DD6F9E2BB8D909A9808634B9FF91AD8DB2ECF3BBC11227CB08F90CAEF3E6CE14E4F96CE3D38B5F95A88966F3190AAF);
  function processAF65661CDDA02BEF577B9796994F429B325DEECD(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "write" && true && JAM.instanceof(node.obj, _CSSStyleDeclaration) && !JAM.identical(node.id, "display")) {
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
  processAF65661CDDA02BEF577B9796994F429B325DEECD.subsumedBy = processAll;
  Object.freeze(processAF65661CDDA02BEF577B9796994F429B325DEECD);
  return{introspectors:{processD1B26E82C3C7C4AA5A6D93F7A0110D043B1A982F4CDAF44D89391C6FE13FBBD6677C6DE0505D675A6FDE2E7025F368C3AE67F96C507DCB6901C6433F:processD1B26E82C3C7C4AA5A6D93F7A0110D043B1A982F4CDAF44D89391C6FE13FBBD6677C6DE0505D675A6FDE2E7025F368C3AE67F96C507DCB6901C6433F, processD1B26E82C3C7C4AA5A6D93F7A0110D043B1A982FE656B7690429FFEA4A12C73E95B66185D91EBB7291CD5A17081957B5A666BECDD1ADC94436AACBCB02BEB9B7B2358FCBE710EE3EF4F98E5DB6FF7E1483983BA66852225133AFA2AF882CA0A5135A72DA17DF82182101A9717A23B264886502B4BFB90A3B0D93531F9287E5BDB8C39CE5D90E545857BDFE23F1D9A4029679C537F8C64D7662C775A81EFD320D1EE318ADCF4AD7927AFED326AD9BC4FBE6849B7E0332B9287CE82CF90291D4378493FEDC970D8441659475762E5A63A4EAC926C615906F1DB9B8268B7B791A0622645AEB8392B9A1B341AB05479255B3403D119CEE99B5C95B58238BE9BD63E2A8ADAFA4AF31880725D76D3B262A31FE68AD1150632BEAF68CBF57A0B46B01647F686CBEDC5153983299D40013D867A8D45F5B3E78605D1B39068A8C34DBE5B76F2DB2EF8A69BE43A5038ADABE8B0F5E068F924C548F7ED27D0F5529FF96DCE954A3A306F626734D630BF6806E7C54D8C07A454187D92976C52805C7A895CDB8798C4D5B27B65A881BEAB4E20525B10D3D1256178FEEA3CC002CA026A70767CF68B131221BDE18FBC1A1C7857C3236070C7FE98E8D5D24CF614130645C30BA0C6D250C4DCAE23B21B27EA242C4B32157FA7CF690F433156556DE24BAE25088A2180AD1B7B61C2D15D579DBE5632FD95875AA097B23954FE55D466475BF17B8A8413C2C91B79D1EC54D820A518CF5E83A163BA02F575ABE9257A9FA43:processD1B26E82C3C7C4AA5A6D93F7A0110D043B1A982FE656B7690429FFEA4A12C73E95B66185D91EBB7291CD5A17081957B5A666BECDD1ADC94436AACBCB02BEB9B7B2358FCBE710EE3EF4F98E5DB6FF7E1483983BA66852225133AFA2AF882CA0A5135A72DA17DF82182101A9717A23B264886502B4BFB90A3B0D93531F9287E5BDB8C39CE5D90E545857BDFE23F1D9A4029679C537F8C64D7662C775A81EFD320D1EE318ADCF4AD7927AFED326AD9BC4FBE6849B7E0332B9287CE82CF90291D4378493FEDC970D8441659475762E5A63A4EAC926C615906F1DB9B8268B7B791A0622645AEB8392B9A1B341AB05479255B3403D119CEE99B5C95B58238BE9BD63E2A8ADAFA4AF31880725D76D3B262A31FE68AD1150632BEAF68CBF57A0B46B01647F686CBEDC5153983299D40013D867A8D45F5B3E78605D1B39068A8C34DBE5B76F2DB2EF8A69BE43A5038ADABE8B0F5E068F924C548F7ED27D0F5529FF96DCE954A3A306F626734D630BF6806E7C54D8C07A454187D92976C52805C7A895CDB8798C4D5B27B65A881BEAB4E20525B10D3D1256178FEEA3CC002CA026A70767CF68B131221BDE18FBC1A1C7857C3236070C7FE98E8D5D24CF614130645C30BA0C6D250C4DCAE23B21B27EA242C4B32157FA7CF690F433156556DE24BAE25088A2180AD1B7B61C2D15D579DBE5632FD95875AA097B23954FE55D466475BF17B8A8413C2C91B79D1EC54D820A518CF5E83A163BA02F575ABE9257A9FA43, 
  process425E08A28862414CF7130381FE99A660F52DB81129A03B8BB8FA94683D86040222E0A4E3140FC4DFB0C803E5B135162B6CEA9F33D761E5CF697C6648AF65661CDDA02BEF577B9796994F429B325DEECDC779E3150DAF20FA5569F74C4D8A59D524A8B7B460BC769F7FE69A3D16A7359015C19BE54348D76E987B99A50519229778F66F084EDA50254ABC348DA5E2ABAB44A1DE63360A228CB63B0B25682BE6EE07DBA2E748B97DAFA7B08E869D54E8390F67F3EB6AC94130B1D292416838E4C6B471EEC7CB2741C09D4FC353FBD4686E102EC1D9135CB58506D1AEF2FEA178F4547CBEA412D0DAC5210C48CC47C6A1D5F4F1815686F85C11F20ED3C6F8B9FF606DB7572205386E733612FB8B8AAEBE5370DD6F9E2BB8D909A9808634B9FF91AD8DB2ECF3BBC11227CB08F90CAEF3E6CE14E4F96CE3D38B5F95A88966F3190AAF612654FB3F3A03516CBDABC1425F50B400F4F63D50495009445AA01DA74D43C9259376978873C9DD612ADF2C90A1DD38A53C9B4A188E860B09D782779C7B03EB2FF1F02121C622D64336F1619851B56FD050CFD41F4B09134D4EE2571FD46103EE55A84AE8802567B4F98B67F455E807FC462A1E2F60E18218DF132673D9B06F3D39FD710BD5CDA112CC86AEB254DE18FCC78B183688CED6F0EDE2BFD0161BCB84792EDD6E4F8115C9B3B56C9BCC4CB173DC5DA7CBEDAC697EFB520100392CCAD10492F793C13E631453D4163198A218395AF58F8D92E8A55A9BE49A17D370677A047A61F6E77483583E3409CDEBD10E1B42664DBFDD147DE24C732CE568FB1709ADB7BBA5F7511329E3341A38E0D15C700BDB0AB7FDD686BF7E5FA1DF4A7F8257666C1DD206F93595E738CA90677481AA3421A310AD62B708501CF0CA01233B937F6AAB557BA07F42E2678A7B05EF331D5E08DAE189AC73D6D5DFF09E604649A9072EEC2F684093:process425E08A28862414CF7130381FE99A660F52DB81129A03B8BB8FA94683D86040222E0A4E3140FC4DFB0C803E5B135162B6CEA9F33D761E5CF697C6648AF65661CDDA02BEF577B9796994F429B325DEECDC779E3150DAF20FA5569F74C4D8A59D524A8B7B460BC769F7FE69A3D16A7359015C19BE54348D76E987B99A50519229778F66F084EDA50254ABC348DA5E2ABAB44A1DE63360A228CB63B0B25682BE6EE07DBA2E748B97DAFA7B08E869D54E8390F67F3EB6AC94130B1D292416838E4C6B471EEC7CB2741C09D4FC353FBD4686E102EC1D9135CB58506D1AEF2FEA178F4547CBEA412D0DAC5210C48CC47C6A1D5F4F1815686F85C11F20ED3C6F8B9FF606DB7572205386E733612FB8B8AAEBE5370DD6F9E2BB8D909A9808634B9FF91AD8DB2ECF3BBC11227CB08F90CAEF3E6CE14E4F96CE3D38B5F95A88966F3190AAF612654FB3F3A03516CBDABC1425F50B400F4F63D50495009445AA01DA74D43C9259376978873C9DD612ADF2C90A1DD38A53C9B4A188E860B09D782779C7B03EB2FF1F02121C622D64336F1619851B56FD050CFD41F4B09134D4EE2571FD46103EE55A84AE8802567B4F98B67F455E807FC462A1E2F60E18218DF132673D9B06F3D39FD710BD5CDA112CC86AEB254DE18FCC78B183688CED6F0EDE2BFD0161BCB84792EDD6E4F8115C9B3B56C9BCC4CB173DC5DA7CBEDAC697EFB520100392CCAD10492F793C13E631453D4163198A218395AF58F8D92E8A55A9BE49A17D370677A047A61F6E77483583E3409CDEBD10E1B42664DBFDD147DE24C732CE568FB1709ADB7BBA5F7511329E3341A38E0D15C700BDB0AB7FDD686BF7E5FA1DF4A7F8257666C1DD206F93595E738CA90677481AA3421A310AD62B708501CF0CA01233B937F6AAB557BA07F42E2678A7B05EF331D5E08DAE189AC73D6D5DFF09E604649A9072EEC2F684093, 
  process4CDAF44D89391C6FE13FBBD6677C6DE0505D675A6FDE2E7025F368C3AE67F96C507DCB6901C6433F:process4CDAF44D89391C6FE13FBBD6677C6DE0505D675A6FDE2E7025F368C3AE67F96C507DCB6901C6433F, process4CDAF44D89391C6FE13FBBD6677C6DE0505D675A6FDE2E7025F368C3AE67F96C507DCB6901C6433F1674A436F704F8D95B584538FA26F64E8920105FA3707BCCD36A41763F89C4262F8BC9A0E8F7B3ADAD512C4E0F6A02252F1E25F4870CE858E88CDD49:process4CDAF44D89391C6FE13FBBD6677C6DE0505D675A6FDE2E7025F368C3AE67F96C507DCB6901C6433F1674A436F704F8D95B584538FA26F64E8920105FA3707BCCD36A41763F89C4262F8BC9A0E8F7B3ADAD512C4E0F6A02252F1E25F4870CE858E88CDD49, 
  process4CDAF44D89391C6FE13FBBD6677C6DE0505D675A6FDE2E7025F368C3AE67F96C507DCB6901C6433F1674A436F704F8D95B584538FA26F64E8920105FF1D9A4029679C537F8C64D7662C775A81EFD320D0332B9287CE82CF90291D4378493FEDC970D84417B791A0622645AEB8392B9A1B341AB05479255B3AF31880725D76D3B262A31FE68AD1150632BEAF613D867A8D45F5B3E78605D1B39068A8C34DBE5B7548F7ED27D0F5529FF96DCE954A3A306F626734DA895CDB8798C4D5B27B65A881BEAB4E20525B10DA3707BCCD36A41763F89C4262F8BC9A0E8F7B3ADAD512C4E0F6A02252F1E25F4870CE858E88CDD49:process4CDAF44D89391C6FE13FBBD6677C6DE0505D675A6FDE2E7025F368C3AE67F96C507DCB6901C6433F1674A436F704F8D95B584538FA26F64E8920105FF1D9A4029679C537F8C64D7662C775A81EFD320D0332B9287CE82CF90291D4378493FEDC970D84417B791A0622645AEB8392B9A1B341AB05479255B3AF31880725D76D3B262A31FE68AD1150632BEAF613D867A8D45F5B3E78605D1B39068A8C34DBE5B7548F7ED27D0F5529FF96DCE954A3A306F626734DA895CDB8798C4D5B27B65A881BEAB4E20525B10DA3707BCCD36A41763F89C4262F8BC9A0E8F7B3ADAD512C4E0F6A02252F1E25F4870CE858E88CDD49, 
  process6FDE2E7025F368C3AE67F96C507DCB6901C6433F:process6FDE2E7025F368C3AE67F96C507DCB6901C6433F, process6FDE2E7025F368C3AE67F96C507DCB6901C6433F1BDE18FBC1A1C7857C3236070C7FE98E8D5D24CF:process6FDE2E7025F368C3AE67F96C507DCB6901C6433F1BDE18FBC1A1C7857C3236070C7FE98E8D5D24CF, processAF65661CDDA02BEF577B9796994F429B325DEECD6AC94130B1D292416838E4C6B471EEC7CB2741C09D4FC353FBD4686E102EC1D9135CB58506D1AEF2FEA178F4547CBEA412D0DAC5210C48CC47C6A1D5F4F1815686F85C11F20ED3C6F8B9FF606DB7572205386E733612FB8B8AAEBE5370DD6F9E2BB8D909A9808634B9FF91AD8DB2ECF3BBC11227CB08F90CAEF3E6CE14E4F96CE3D38B5F95A88966F3190AAF:processAF65661CDDA02BEF577B9796994F429B325DEECD6AC94130B1D292416838E4C6B471EEC7CB2741C09D4FC353FBD4686E102EC1D9135CB58506D1AEF2FEA178F4547CBEA412D0DAC5210C48CC47C6A1D5F4F1815686F85C11F20ED3C6F8B9FF606DB7572205386E733612FB8B8AAEBE5370DD6F9E2BB8D909A9808634B9FF91AD8DB2ECF3BBC11227CB08F90CAEF3E6CE14E4F96CE3D38B5F95A88966F3190AAF, 
  processAF65661CDDA02BEF577B9796994F429B325DEECD:processAF65661CDDA02BEF577B9796994F429B325DEECD, processAll:processAll}}
}()