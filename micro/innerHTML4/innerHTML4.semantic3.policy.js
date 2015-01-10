var policy = function() {
  var _HTMLElement = HTMLElement;
  var _RegExp_prototype_test = RegExp.prototype.test;
  var __RegExp_prototype_test_call_bind__RegExp_prototype_test_ = _RegExp_prototype_test.call.bind(_RegExp_prototype_test);
  function pFull(tx) {
    var commit = true;
    var as = tx.getWriteSequence();
    var len = as.length;
    for (var i = 0;i < len;i++) {
      var node = as[i];
      if (node.id === "innerHTML" && JAM.instanceof(node.obj, _HTMLElement) && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/<\w*img[^>]*src\w*=\w*.*>/i, node.value)) {
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
  pFull.itype = "write";
  Object.freeze(pFull);
  function p1(tx) {
    var commit = true;
    var as = tx.getWriteSequence();
    var len = as.length;
    for (var i = 0;i < len;i++) {
      var node = as[i];
      if (node.id === "innerHTML" && JAM.instanceof(node.obj, _HTMLElement) && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/<\w*img[^>]*src\w*=\w*.*>/i, node.value)) {
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
  p1.subsumedBy = pFull;
  p1.itype = "write";
  Object.freeze(p1);
  return{p1:p1, pFull:pFull, woven:true};
}()