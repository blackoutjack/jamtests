var policy = function() {
  var states = [0];
  function processAll(tx) {
    var commit = true;
    var s1 = states.indexOf(1) > -1;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(s1 && node.type === "write" && node.id === "x" && JAM.identical(node.value, 2)) {
        commit = false;
        break
      }
      if(!s1 && node.type === "write" && node.id === "x" && JAM.identical(node.value, 2)) {
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
  function process8DB99BF1222CB7BDCA5A549F4993340663A66BAA2CFB7BC756B67B61B77FE6A02E61FD2CA839CC5F(tx) {
    var commit = true;
    var s1 = states.indexOf(1) > -1;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(s1 && node.type === "write" && node.id === "x" && JAM.identical(node.value, 2)) {
        commit = false;
        break
      }
      if(!s1 && node.type === "write" && node.id === "x" && JAM.identical(node.value, 2)) {
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
  return{introspectors:{process8DB99BF1222CB7BDCA5A549F4993340663A66BAA2CFB7BC756B67B61B77FE6A02E61FD2CA839CC5F:process8DB99BF1222CB7BDCA5A549F4993340663A66BAA2CFB7BC756B67B61B77FE6A02E61FD2CA839CC5F, processAll:processAll}}
}()