var policy = function() {
  var states = [0];
  function processAll(tx) {
    var commit = true;
    var s1 = states.indexOf(1) > -1;
    var s2 = states.indexOf(2) > -1;
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
      if(s1 && node.type === "read" && node.id === "textContent" && JAM.identical(node.obj["className"], "destructive-read read-only")) {
        commit = false;
        break
      }
      if(!s1 && node.type === "read" && node.id === "textContent" && JAM.identical(node.obj["className"], "destructive-read read-only")) {
        s1 = true;
        states.push(1)
      }
      if(s2 && node.type === "write" && node.id === "textContent" && JAM.identical(node.obj["className"], "write-only non-editable")) {
        commit = false;
        break
      }
      if(!s2 && node.type === "write" && node.id === "textContent" && JAM.identical(node.obj["className"], "write-only non-editable")) {
        s2 = true;
        states.push(2)
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
  function process60BC769F7FE69A3D16A7359015C19BE54348D76E510AD27954A2595FF3D635DFFE9522029FA0A17D643B7C49AB8946BE23E67884C2A1A1A95BFE0CBF(tx) {
    var commit = true;
    var s2 = states.indexOf(2) > -1;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "write" && node.id === "textContent" && JAM.identical(node.obj["className"], "destructive-read read-only")) {
        commit = false;
        break
      }
      if(s2 && node.type === "write" && node.id === "textContent" && JAM.identical(node.obj["className"], "write-only non-editable")) {
        commit = false;
        break
      }
      if(!s2 && node.type === "write" && node.id === "textContent" && JAM.identical(node.obj["className"], "write-only non-editable")) {
        s2 = true;
        states.push(2)
      }
    }
    if(commit) {
      JAMScript.process(tx)
    }else {
      JAMScript.prevent(tx)
    }
  }
  process60BC769F7FE69A3D16A7359015C19BE54348D76E510AD27954A2595FF3D635DFFE9522029FA0A17D643B7C49AB8946BE23E67884C2A1A1A95BFE0CBF.subsumedBy = processAll;
  Object.freeze(process60BC769F7FE69A3D16A7359015C19BE54348D76E510AD27954A2595FF3D635DFFE9522029FA0A17D643B7C49AB8946BE23E67884C2A1A1A95BFE0CBF);
  function process60BC769F7FE69A3D16A7359015C19BE54348D76EC51DDFC22C8571C0FE27B1BC0B7671157BDF992D02BEB9B7B2358FCBE710EE3EF4F98E5DB6FF7E1429142370413EC1F7A49F60B32ADBDF99B2C2500D41323F239D1C8F39E2D0E44249CC80F53BBDDF0D083CCCB7BDF4957FF03A722A119BF94D894180EE510AD27954A2595FF3D635DFFE9522029FA0A17D643B7C49AB8946BE23E67884C2A1A1A95BFE0CBF(tx) {
    var commit = true;
    var s1 = states.indexOf(1) > -1;
    var s2 = states.indexOf(2) > -1;
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
      if(s1 && node.type === "read" && node.id === "textContent" && JAM.identical(node.obj["className"], "destructive-read read-only")) {
        commit = false;
        break
      }
      if(!s1 && node.type === "read" && node.id === "textContent" && JAM.identical(node.obj["className"], "destructive-read read-only")) {
        s1 = true;
        states.push(1)
      }
      if(s2 && node.type === "write" && node.id === "textContent" && JAM.identical(node.obj["className"], "write-only non-editable")) {
        commit = false;
        break
      }
      if(!s2 && node.type === "write" && node.id === "textContent" && JAM.identical(node.obj["className"], "write-only non-editable")) {
        s2 = true;
        states.push(2)
      }
    }
    if(commit) {
      JAMScript.process(tx)
    }else {
      JAMScript.prevent(tx)
    }
  }
  process60BC769F7FE69A3D16A7359015C19BE54348D76EC51DDFC22C8571C0FE27B1BC0B7671157BDF992D02BEB9B7B2358FCBE710EE3EF4F98E5DB6FF7E1429142370413EC1F7A49F60B32ADBDF99B2C2500D41323F239D1C8F39E2D0E44249CC80F53BBDDF0D083CCCB7BDF4957FF03A722A119BF94D894180EE510AD27954A2595FF3D635DFFE9522029FA0A17D643B7C49AB8946BE23E67884C2A1A1A95BFE0CBF.subsumedBy = processAll;
  Object.freeze(process60BC769F7FE69A3D16A7359015C19BE54348D76EC51DDFC22C8571C0FE27B1BC0B7671157BDF992D02BEB9B7B2358FCBE710EE3EF4F98E5DB6FF7E1429142370413EC1F7A49F60B32ADBDF99B2C2500D41323F239D1C8F39E2D0E44249CC80F53BBDDF0D083CCCB7BDF4957FF03A722A119BF94D894180EE510AD27954A2595FF3D635DFFE9522029FA0A17D643B7C49AB8946BE23E67884C2A1A1A95BFE0CBF);
  function process60BC769F7FE69A3D16A7359015C19BE54348D76EC51DDFC22C8571C0FE27B1BC0B7671157BDF992D510AD27954A2595FF3D635DFFE9522029FA0A17D643B7C49AB8946BE23E67884C2A1A1A95BFE0CBF(tx) {
    var commit = true;
    var s2 = states.indexOf(2) > -1;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "write" && (node.id === "textContent" && JAM.identical(node.obj["className"], "destructive-read read-only") || node.id === "innerHTML")) {
        commit = false;
        break
      }
      if(s2 && node.type === "write" && node.id === "textContent" && JAM.identical(node.obj["className"], "write-only non-editable")) {
        commit = false;
        break
      }
      if(!s2 && node.type === "write" && node.id === "textContent" && JAM.identical(node.obj["className"], "write-only non-editable")) {
        s2 = true;
        states.push(2)
      }
    }
    if(commit) {
      JAMScript.process(tx)
    }else {
      JAMScript.prevent(tx)
    }
  }
  process60BC769F7FE69A3D16A7359015C19BE54348D76EC51DDFC22C8571C0FE27B1BC0B7671157BDF992D510AD27954A2595FF3D635DFFE9522029FA0A17D643B7C49AB8946BE23E67884C2A1A1A95BFE0CBF.subsumedBy = processAll;
  Object.freeze(process60BC769F7FE69A3D16A7359015C19BE54348D76EC51DDFC22C8571C0FE27B1BC0B7671157BDF992D510AD27954A2595FF3D635DFFE9522029FA0A17D643B7C49AB8946BE23E67884C2A1A1A95BFE0CBF);
  function processC51DDFC22C8571C0FE27B1BC0B7671157BDF992D(tx) {
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
      JAMScript.process(tx)
    }else {
      JAMScript.prevent(tx)
    }
  }
  processC51DDFC22C8571C0FE27B1BC0B7671157BDF992D.subsumedBy = processAll;
  Object.freeze(processC51DDFC22C8571C0FE27B1BC0B7671157BDF992D);
  function process02BEB9B7B2358FCBE710EE3EF4F98E5DB6FF7E1429142370413EC1F7A49F60B32ADBDF99B2C2500D41323F239D1C8F39E2D0E44249CC80F53BBDDF0D083CCCB7BDF4957FF03A722A119BF94D894180EE(tx) {
    var commit = true;
    var s1 = states.indexOf(1) > -1;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "read" && (node.id === "textContent" && JAM.identical(node.obj["className"], "write-only non-editable") || node.id === "innerHTML")) {
        commit = false;
        break
      }
      if(s1 && node.type === "read" && node.id === "textContent" && JAM.identical(node.obj["className"], "destructive-read read-only")) {
        commit = false;
        break
      }
      if(!s1 && node.type === "read" && node.id === "textContent" && JAM.identical(node.obj["className"], "destructive-read read-only")) {
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
  process02BEB9B7B2358FCBE710EE3EF4F98E5DB6FF7E1429142370413EC1F7A49F60B32ADBDF99B2C2500D41323F239D1C8F39E2D0E44249CC80F53BBDDF0D083CCCB7BDF4957FF03A722A119BF94D894180EE.subsumedBy = processAll;
  Object.freeze(process02BEB9B7B2358FCBE710EE3EF4F98E5DB6FF7E1429142370413EC1F7A49F60B32ADBDF99B2C2500D41323F239D1C8F39E2D0E44249CC80F53BBDDF0D083CCCB7BDF4957FF03A722A119BF94D894180EE);
  function process02BEB9B7B2358FCBE710EE3EF4F98E5DB6FF7E1441323F239D1C8F39E2D0E44249CC80F53BBDDF0D083CCCB7BDF4957FF03A722A119BF94D894180EE(tx) {
    var commit = true;
    var s1 = states.indexOf(1) > -1;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "read" && node.id === "textContent" && JAM.identical(node.obj["className"], "write-only non-editable")) {
        commit = false;
        break
      }
      if(s1 && node.type === "read" && node.id === "textContent" && JAM.identical(node.obj["className"], "destructive-read read-only")) {
        commit = false;
        break
      }
      if(!s1 && node.type === "read" && node.id === "textContent" && JAM.identical(node.obj["className"], "destructive-read read-only")) {
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
  process02BEB9B7B2358FCBE710EE3EF4F98E5DB6FF7E1441323F239D1C8F39E2D0E44249CC80F53BBDDF0D083CCCB7BDF4957FF03A722A119BF94D894180EE.subsumedBy = processAll;
  Object.freeze(process02BEB9B7B2358FCBE710EE3EF4F98E5DB6FF7E1441323F239D1C8F39E2D0E44249CC80F53BBDDF0D083CCCB7BDF4957FF03A722A119BF94D894180EE);
  return{introspectors:{process60BC769F7FE69A3D16A7359015C19BE54348D76E510AD27954A2595FF3D635DFFE9522029FA0A17D643B7C49AB8946BE23E67884C2A1A1A95BFE0CBF:process60BC769F7FE69A3D16A7359015C19BE54348D76E510AD27954A2595FF3D635DFFE9522029FA0A17D643B7C49AB8946BE23E67884C2A1A1A95BFE0CBF, process60BC769F7FE69A3D16A7359015C19BE54348D76EC51DDFC22C8571C0FE27B1BC0B7671157BDF992D02BEB9B7B2358FCBE710EE3EF4F98E5DB6FF7E1429142370413EC1F7A49F60B32ADBDF99B2C2500D41323F239D1C8F39E2D0E44249CC80F53BBDDF0D083CCCB7BDF4957FF03A722A119BF94D894180EE510AD27954A2595FF3D635DFFE9522029FA0A17D643B7C49AB8946BE23E67884C2A1A1A95BFE0CBF:process60BC769F7FE69A3D16A7359015C19BE54348D76EC51DDFC22C8571C0FE27B1BC0B7671157BDF992D02BEB9B7B2358FCBE710EE3EF4F98E5DB6FF7E1429142370413EC1F7A49F60B32ADBDF99B2C2500D41323F239D1C8F39E2D0E44249CC80F53BBDDF0D083CCCB7BDF4957FF03A722A119BF94D894180EE510AD27954A2595FF3D635DFFE9522029FA0A17D643B7C49AB8946BE23E67884C2A1A1A95BFE0CBF, 
  process60BC769F7FE69A3D16A7359015C19BE54348D76EC51DDFC22C8571C0FE27B1BC0B7671157BDF992D510AD27954A2595FF3D635DFFE9522029FA0A17D643B7C49AB8946BE23E67884C2A1A1A95BFE0CBF:process60BC769F7FE69A3D16A7359015C19BE54348D76EC51DDFC22C8571C0FE27B1BC0B7671157BDF992D510AD27954A2595FF3D635DFFE9522029FA0A17D643B7C49AB8946BE23E67884C2A1A1A95BFE0CBF, processC51DDFC22C8571C0FE27B1BC0B7671157BDF992D:processC51DDFC22C8571C0FE27B1BC0B7671157BDF992D, process02BEB9B7B2358FCBE710EE3EF4F98E5DB6FF7E1429142370413EC1F7A49F60B32ADBDF99B2C2500D41323F239D1C8F39E2D0E44249CC80F53BBDDF0D083CCCB7BDF4957FF03A722A119BF94D894180EE:process02BEB9B7B2358FCBE710EE3EF4F98E5DB6FF7E1429142370413EC1F7A49F60B32ADBDF99B2C2500D41323F239D1C8F39E2D0E44249CC80F53BBDDF0D083CCCB7BDF4957FF03A722A119BF94D894180EE, 
  process02BEB9B7B2358FCBE710EE3EF4F98E5DB6FF7E1441323F239D1C8F39E2D0E44249CC80F53BBDDF0D083CCCB7BDF4957FF03A722A119BF94D894180EE:process02BEB9B7B2358FCBE710EE3EF4F98E5DB6FF7E1441323F239D1C8F39E2D0E44249CC80F53BBDDF0D083CCCB7BDF4957FF03A722A119BF94D894180EE, processAll:processAll}}
}()