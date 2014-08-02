var policy = function() {
  var states = [true, false];
  function pFull(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(states[1] && node.type === "write" && node.id === "x" && JAM.identical(node.value, 2)) {
        commit = false;
        break
      }
      if(!states[1] && node.type === "write" && node.id === "x" && JAM.identical(node.value, 2)) {
        states[1] = true
      }
    }
    if(commit) {
      JAM.process(tx)
    }else {
      JAM.prevent(tx)
    }
  }
  pFull.subsumedBy = pFull;
  Object.freeze(pFull);
  function p8DB99BF1222CB7BDCA5A549F4993340663A66BAA2CFB7BC756B67B61B77FE6A02E61FD2CA839CC5F(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(states[1] && node.type === "write" && node.id === "x" && JAM.identical(node.value, 2)) {
        commit = false;
        break
      }
      if(!states[1] && node.type === "write" && node.id === "x" && JAM.identical(node.value, 2)) {
        states[1] = true
      }
    }
    if(commit) {
      JAM.process(tx)
    }else {
      JAM.prevent(tx)
    }
  }
  p8DB99BF1222CB7BDCA5A549F4993340663A66BAA2CFB7BC756B67B61B77FE6A02E61FD2CA839CC5F.subsumedBy = pFull;
  Object.freeze(p8DB99BF1222CB7BDCA5A549F4993340663A66BAA2CFB7BC756B67B61B77FE6A02E61FD2CA839CC5F);
  return{p8DB99BF1222CB7BDCA5A549F4993340663A66BAA2CFB7BC756B67B61B77FE6A02E61FD2CA839CC5F:p8DB99BF1222CB7BDCA5A549F4993340663A66BAA2CFB7BC756B67B61B77FE6A02E61FD2CA839CC5F, pFull:pFull}
}()