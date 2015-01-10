var policy = function() {
  var _HTMLElement_prototype_appendChild = HTMLElement.prototype.appendChild;
  var _undefined = undefined;
  var _RegExp_prototype_test = RegExp.prototype.test;
  var __RegExp_prototype_test_call_bind__RegExp_prototype_test_ = _RegExp_prototype_test.call.bind(_RegExp_prototype_test);
  function pFull(tx) {
    var commit = true;
    var as = tx.getCallSequence();
    var len = as.length;
    for (var i = 0;i < len;i++) {
      var node = as[i];
      if (JAM.identical(node.value, _HTMLElement_prototype_appendChild) && !__RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^HERE I AM$/, node.argc > 0 && node.args[0] !== _undefined && node.args[0] !== null && node.args[0]["innerHTML"])) {
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
  pFull.itype = "invoke";
  Object.freeze(pFull);
  return{pFull:pFull};
}()