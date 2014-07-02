var policy = function() {
  var states = [0];
  var _HTMLDocument_prototype_createElement = HTMLDocument.prototype.createElement;
  var _HTMLDocument_prototype_write = HTMLDocument.prototype.write;
  function processAll(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "call" && (JAM.identical(node.value, _HTMLDocument_prototype_createElement) && JAM.identical(node.args[0], "script") || JAM.identical(node.value, _HTMLDocument_prototype_write) && !JAM.identical(node.args[0], undefined))) {
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
  function process0FFB1518291BEE7C5744977B581D549C9B6BD5A04CDAF44D89391C6FE13FBBD6677C6DE0505D675A(node) {
    var commit = true;
    if(node.type === "call" && (JAM.identical(node.value, _HTMLDocument_prototype_createElement) && JAM.identical(node.args[0], "script") || JAM.identical(node.value, _HTMLDocument_prototype_write) && !JAM.identical(node.args[0], undefined))) {
      commit = false
    }
    return commit
  }
  function process4CDAF44D89391C6FE13FBBD6677C6DE0505D675A(node) {
    var commit = true;
    if(node.type === "call" && JAM.identical(node.value, _HTMLDocument_prototype_write) && !JAM.identical(node.args[0], undefined)) {
      commit = false
    }
    return commit
  }
  return{introspectors:{process0FFB1518291BEE7C5744977B581D549C9B6BD5A04CDAF44D89391C6FE13FBBD6677C6DE0505D675A:process0FFB1518291BEE7C5744977B581D549C9B6BD5A04CDAF44D89391C6FE13FBBD6677C6DE0505D675A, process4CDAF44D89391C6FE13FBBD6677C6DE0505D675A:process4CDAF44D89391C6FE13FBBD6677C6DE0505D675A, processAll:processAll}}
}()