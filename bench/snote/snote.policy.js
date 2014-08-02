var policy = function() {
  var states = [true, false, false];
  function pFull(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "write" && (node.id === "textContent" && JAM.identical(node.obj["className"], "destructive-read read-only") || node.id === "innerHTML")) {
        commit = false;
        break
      }
      if(node.type === "read" && (node.id === "textContent" && JAM.identical(node.obj["className"], "write-only non-editable") || node.id === "innerHTML")) {
        commit = false;
        break
      }
      if(states[1] && node.type === "read" && node.id === "textContent" && JAM.identical(node.obj["className"], "destructive-read read-only")) {
        commit = false;
        break
      }
      if(!states[1] && node.type === "read" && node.id === "textContent" && JAM.identical(node.obj["className"], "destructive-read read-only")) {
        states[1] = true
      }
      if(states[2] && node.type === "write" && node.id === "textContent" && JAM.identical(node.obj["className"], "write-only non-editable")) {
        commit = false;
        break
      }
      if(!states[2] && node.type === "write" && node.id === "textContent" && JAM.identical(node.obj["className"], "write-only non-editable")) {
        states[2] = true
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
  function p60BC769F7FE69A3D16A7359015C19BE54348D76E510AD27954A2595FF3D635DFFE9522029FA0A17D643B7C49AB8946BE23E67884C2A1A1A95BFE0CBF(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "write" && node.id === "textContent" && JAM.identical(node.obj["className"], "destructive-read read-only")) {
        commit = false;
        break
      }
      if(states[2] && node.type === "write" && node.id === "textContent" && JAM.identical(node.obj["className"], "write-only non-editable")) {
        commit = false;
        break
      }
      if(!states[2] && node.type === "write" && node.id === "textContent" && JAM.identical(node.obj["className"], "write-only non-editable")) {
        states[2] = true
      }
    }
    if(commit) {
      JAM.process(tx)
    }else {
      JAM.prevent(tx)
    }
  }
  p60BC769F7FE69A3D16A7359015C19BE54348D76E510AD27954A2595FF3D635DFFE9522029FA0A17D643B7C49AB8946BE23E67884C2A1A1A95BFE0CBF.subsumedBy = pFull;
  Object.freeze(p60BC769F7FE69A3D16A7359015C19BE54348D76E510AD27954A2595FF3D635DFFE9522029FA0A17D643B7C49AB8946BE23E67884C2A1A1A95BFE0CBF);
  function p60BC769F7FE69A3D16A7359015C19BE54348D76EC51DDFC22C8571C0FE27B1BC0B7671157BDF992D02BEB9B7B2358FCBE710EE3EF4F98E5DB6FF7E1429142370413EC1F7A49F60B32ADBDF99B2C2500D41323F239D1C8F39E2D0E44249CC80F53BBDDF0D083CCCB7BDF4957FF03A722A119BF94D894180EE510AD27954A2595FF3D635DFFE9522029FA0A17D643B7C49AB8946BE23E67884C2A1A1A95BFE0CBF(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "write" && (node.id === "textContent" && JAM.identical(node.obj["className"], "destructive-read read-only") || node.id === "innerHTML")) {
        commit = false;
        break
      }
      if(node.type === "read" && (node.id === "textContent" && JAM.identical(node.obj["className"], "write-only non-editable") || node.id === "innerHTML")) {
        commit = false;
        break
      }
      if(states[1] && node.type === "read" && node.id === "textContent" && JAM.identical(node.obj["className"], "destructive-read read-only")) {
        commit = false;
        break
      }
      if(!states[1] && node.type === "read" && node.id === "textContent" && JAM.identical(node.obj["className"], "destructive-read read-only")) {
        states[1] = true
      }
      if(states[2] && node.type === "write" && node.id === "textContent" && JAM.identical(node.obj["className"], "write-only non-editable")) {
        commit = false;
        break
      }
      if(!states[2] && node.type === "write" && node.id === "textContent" && JAM.identical(node.obj["className"], "write-only non-editable")) {
        states[2] = true
      }
    }
    if(commit) {
      JAM.process(tx)
    }else {
      JAM.prevent(tx)
    }
  }
  p60BC769F7FE69A3D16A7359015C19BE54348D76EC51DDFC22C8571C0FE27B1BC0B7671157BDF992D02BEB9B7B2358FCBE710EE3EF4F98E5DB6FF7E1429142370413EC1F7A49F60B32ADBDF99B2C2500D41323F239D1C8F39E2D0E44249CC80F53BBDDF0D083CCCB7BDF4957FF03A722A119BF94D894180EE510AD27954A2595FF3D635DFFE9522029FA0A17D643B7C49AB8946BE23E67884C2A1A1A95BFE0CBF.subsumedBy = pFull;
  Object.freeze(p60BC769F7FE69A3D16A7359015C19BE54348D76EC51DDFC22C8571C0FE27B1BC0B7671157BDF992D02BEB9B7B2358FCBE710EE3EF4F98E5DB6FF7E1429142370413EC1F7A49F60B32ADBDF99B2C2500D41323F239D1C8F39E2D0E44249CC80F53BBDDF0D083CCCB7BDF4957FF03A722A119BF94D894180EE510AD27954A2595FF3D635DFFE9522029FA0A17D643B7C49AB8946BE23E67884C2A1A1A95BFE0CBF);
  function p60BC769F7FE69A3D16A7359015C19BE54348D76EC51DDFC22C8571C0FE27B1BC0B7671157BDF992D510AD27954A2595FF3D635DFFE9522029FA0A17D643B7C49AB8946BE23E67884C2A1A1A95BFE0CBF(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "write" && (node.id === "textContent" && JAM.identical(node.obj["className"], "destructive-read read-only") || node.id === "innerHTML")) {
        commit = false;
        break
      }
      if(states[2] && node.type === "write" && node.id === "textContent" && JAM.identical(node.obj["className"], "write-only non-editable")) {
        commit = false;
        break
      }
      if(!states[2] && node.type === "write" && node.id === "textContent" && JAM.identical(node.obj["className"], "write-only non-editable")) {
        states[2] = true
      }
    }
    if(commit) {
      JAM.process(tx)
    }else {
      JAM.prevent(tx)
    }
  }
  p60BC769F7FE69A3D16A7359015C19BE54348D76EC51DDFC22C8571C0FE27B1BC0B7671157BDF992D510AD27954A2595FF3D635DFFE9522029FA0A17D643B7C49AB8946BE23E67884C2A1A1A95BFE0CBF.subsumedBy = pFull;
  Object.freeze(p60BC769F7FE69A3D16A7359015C19BE54348D76EC51DDFC22C8571C0FE27B1BC0B7671157BDF992D510AD27954A2595FF3D635DFFE9522029FA0A17D643B7C49AB8946BE23E67884C2A1A1A95BFE0CBF);
  function pC51DDFC22C8571C0FE27B1BC0B7671157BDF992D(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "write" && node.id === "innerHTML") {
        commit = false;
        break
      }
    }
    if(commit) {
      JAM.process(tx)
    }else {
      JAM.prevent(tx)
    }
  }
  pC51DDFC22C8571C0FE27B1BC0B7671157BDF992D.subsumedBy = pFull;
  Object.freeze(pC51DDFC22C8571C0FE27B1BC0B7671157BDF992D);
  function p02BEB9B7B2358FCBE710EE3EF4F98E5DB6FF7E1429142370413EC1F7A49F60B32ADBDF99B2C2500D41323F239D1C8F39E2D0E44249CC80F53BBDDF0D083CCCB7BDF4957FF03A722A119BF94D894180EE(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "read" && (node.id === "textContent" && JAM.identical(node.obj["className"], "write-only non-editable") || node.id === "innerHTML")) {
        commit = false;
        break
      }
      if(states[1] && node.type === "read" && node.id === "textContent" && JAM.identical(node.obj["className"], "destructive-read read-only")) {
        commit = false;
        break
      }
      if(!states[1] && node.type === "read" && node.id === "textContent" && JAM.identical(node.obj["className"], "destructive-read read-only")) {
        states[1] = true
      }
    }
    if(commit) {
      JAM.process(tx)
    }else {
      JAM.prevent(tx)
    }
  }
  p02BEB9B7B2358FCBE710EE3EF4F98E5DB6FF7E1429142370413EC1F7A49F60B32ADBDF99B2C2500D41323F239D1C8F39E2D0E44249CC80F53BBDDF0D083CCCB7BDF4957FF03A722A119BF94D894180EE.subsumedBy = pFull;
  Object.freeze(p02BEB9B7B2358FCBE710EE3EF4F98E5DB6FF7E1429142370413EC1F7A49F60B32ADBDF99B2C2500D41323F239D1C8F39E2D0E44249CC80F53BBDDF0D083CCCB7BDF4957FF03A722A119BF94D894180EE);
  function p02BEB9B7B2358FCBE710EE3EF4F98E5DB6FF7E1441323F239D1C8F39E2D0E44249CC80F53BBDDF0D083CCCB7BDF4957FF03A722A119BF94D894180EE(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "read" && node.id === "textContent" && JAM.identical(node.obj["className"], "write-only non-editable")) {
        commit = false;
        break
      }
      if(states[1] && node.type === "read" && node.id === "textContent" && JAM.identical(node.obj["className"], "destructive-read read-only")) {
        commit = false;
        break
      }
      if(!states[1] && node.type === "read" && node.id === "textContent" && JAM.identical(node.obj["className"], "destructive-read read-only")) {
        states[1] = true
      }
    }
    if(commit) {
      JAM.process(tx)
    }else {
      JAM.prevent(tx)
    }
  }
  p02BEB9B7B2358FCBE710EE3EF4F98E5DB6FF7E1441323F239D1C8F39E2D0E44249CC80F53BBDDF0D083CCCB7BDF4957FF03A722A119BF94D894180EE.subsumedBy = pFull;
  Object.freeze(p02BEB9B7B2358FCBE710EE3EF4F98E5DB6FF7E1441323F239D1C8F39E2D0E44249CC80F53BBDDF0D083CCCB7BDF4957FF03A722A119BF94D894180EE);
  function p29142370413EC1F7A49F60B32ADBDF99B2C2500D(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "read" && node.id === "innerHTML") {
        commit = false;
        break
      }
    }
    if(commit) {
      JAM.process(tx)
    }else {
      JAM.prevent(tx)
    }
  }
  p29142370413EC1F7A49F60B32ADBDF99B2C2500D.subsumedBy = pFull;
  Object.freeze(p29142370413EC1F7A49F60B32ADBDF99B2C2500D);
  return{p60BC769F7FE69A3D16A7359015C19BE54348D76E510AD27954A2595FF3D635DFFE9522029FA0A17D643B7C49AB8946BE23E67884C2A1A1A95BFE0CBF:p60BC769F7FE69A3D16A7359015C19BE54348D76E510AD27954A2595FF3D635DFFE9522029FA0A17D643B7C49AB8946BE23E67884C2A1A1A95BFE0CBF, p60BC769F7FE69A3D16A7359015C19BE54348D76EC51DDFC22C8571C0FE27B1BC0B7671157BDF992D02BEB9B7B2358FCBE710EE3EF4F98E5DB6FF7E1429142370413EC1F7A49F60B32ADBDF99B2C2500D41323F239D1C8F39E2D0E44249CC80F53BBDDF0D083CCCB7BDF4957FF03A722A119BF94D894180EE510AD27954A2595FF3D635DFFE9522029FA0A17D643B7C49AB8946BE23E67884C2A1A1A95BFE0CBF:p60BC769F7FE69A3D16A7359015C19BE54348D76EC51DDFC22C8571C0FE27B1BC0B7671157BDF992D02BEB9B7B2358FCBE710EE3EF4F98E5DB6FF7E1429142370413EC1F7A49F60B32ADBDF99B2C2500D41323F239D1C8F39E2D0E44249CC80F53BBDDF0D083CCCB7BDF4957FF03A722A119BF94D894180EE510AD27954A2595FF3D635DFFE9522029FA0A17D643B7C49AB8946BE23E67884C2A1A1A95BFE0CBF, 
  p60BC769F7FE69A3D16A7359015C19BE54348D76EC51DDFC22C8571C0FE27B1BC0B7671157BDF992D510AD27954A2595FF3D635DFFE9522029FA0A17D643B7C49AB8946BE23E67884C2A1A1A95BFE0CBF:p60BC769F7FE69A3D16A7359015C19BE54348D76EC51DDFC22C8571C0FE27B1BC0B7671157BDF992D510AD27954A2595FF3D635DFFE9522029FA0A17D643B7C49AB8946BE23E67884C2A1A1A95BFE0CBF, pC51DDFC22C8571C0FE27B1BC0B7671157BDF992D:pC51DDFC22C8571C0FE27B1BC0B7671157BDF992D, p02BEB9B7B2358FCBE710EE3EF4F98E5DB6FF7E1429142370413EC1F7A49F60B32ADBDF99B2C2500D41323F239D1C8F39E2D0E44249CC80F53BBDDF0D083CCCB7BDF4957FF03A722A119BF94D894180EE:p02BEB9B7B2358FCBE710EE3EF4F98E5DB6FF7E1429142370413EC1F7A49F60B32ADBDF99B2C2500D41323F239D1C8F39E2D0E44249CC80F53BBDDF0D083CCCB7BDF4957FF03A722A119BF94D894180EE, 
  p02BEB9B7B2358FCBE710EE3EF4F98E5DB6FF7E1441323F239D1C8F39E2D0E44249CC80F53BBDDF0D083CCCB7BDF4957FF03A722A119BF94D894180EE:p02BEB9B7B2358FCBE710EE3EF4F98E5DB6FF7E1441323F239D1C8F39E2D0E44249CC80F53BBDDF0D083CCCB7BDF4957FF03A722A119BF94D894180EE, p29142370413EC1F7A49F60B32ADBDF99B2C2500D:p29142370413EC1F7A49F60B32ADBDF99B2C2500D, pFull:pFull}
}()