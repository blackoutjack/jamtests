var policy = function() {
  var _HTMLElement = HTMLElement;
  var _Window = Window;
  var _HTMLDocument = HTMLDocument;
  function pFull(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "write" && (node.id === "src" && JAM.instanceof(node.obj, _HTMLElement) || node.id === "location" && JAM.instanceof(node.obj, _Window))) {
        commit = false;
        break
      }
      if(node.type === "read" && node.id === "cookie" && JAM.instanceof(node.obj, _HTMLDocument)) {
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
  pFull.subsumedBy = pFull;
  Object.freeze(pFull);
  function pD0BBA7FAE07D4CAC3C07091FDFB8C6213A5ACAAB8D73029A35D0B675A79D1B1E133053ADEDD6839E91CD5A17081957B5A666BECDD1ADC94436AACBCB(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "write" && (node.id === "src" && JAM.instanceof(node.obj, _HTMLElement) || node.id === "location" && JAM.instanceof(node.obj, _Window))) {
        commit = false;
        break
      }
      if(node.type === "read" && node.id === "cookie" && JAM.instanceof(node.obj, _HTMLDocument)) {
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
  pD0BBA7FAE07D4CAC3C07091FDFB8C6213A5ACAAB8D73029A35D0B675A79D1B1E133053ADEDD6839E91CD5A17081957B5A666BECDD1ADC94436AACBCB.subsumedBy = pFull;
  Object.freeze(pD0BBA7FAE07D4CAC3C07091FDFB8C6213A5ACAAB8D73029A35D0B675A79D1B1E133053ADEDD6839E91CD5A17081957B5A666BECDD1ADC94436AACBCB);
  function pD0BBA7FAE07D4CAC3C07091FDFB8C6213A5ACAAB8D73029A35D0B675A79D1B1E133053ADEDD6839E(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "write" && (node.id === "src" && JAM.instanceof(node.obj, _HTMLElement) || node.id === "location" && JAM.instanceof(node.obj, _Window))) {
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
  pD0BBA7FAE07D4CAC3C07091FDFB8C6213A5ACAAB8D73029A35D0B675A79D1B1E133053ADEDD6839E.subsumedBy = pFull;
  Object.freeze(pD0BBA7FAE07D4CAC3C07091FDFB8C6213A5ACAAB8D73029A35D0B675A79D1B1E133053ADEDD6839E);
  function pD0BBA7FAE07D4CAC3C07091FDFB8C6213A5ACAAB(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "write" && node.id === "src" && JAM.instanceof(node.obj, _HTMLElement)) {
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
  pD0BBA7FAE07D4CAC3C07091FDFB8C6213A5ACAAB.subsumedBy = pFull;
  Object.freeze(pD0BBA7FAE07D4CAC3C07091FDFB8C6213A5ACAAB);
  function p91CD5A17081957B5A666BECDD1ADC94436AACBCB(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for(var i = 0;i < len;i++) {
      var node = as[i];
      if(node.type === "read" && node.id === "cookie" && JAM.instanceof(node.obj, _HTMLDocument)) {
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
  p91CD5A17081957B5A666BECDD1ADC94436AACBCB.subsumedBy = pFull;
  Object.freeze(p91CD5A17081957B5A666BECDD1ADC94436AACBCB);
  return{pD0BBA7FAE07D4CAC3C07091FDFB8C6213A5ACAAB8D73029A35D0B675A79D1B1E133053ADEDD6839E91CD5A17081957B5A666BECDD1ADC94436AACBCB:pD0BBA7FAE07D4CAC3C07091FDFB8C6213A5ACAAB8D73029A35D0B675A79D1B1E133053ADEDD6839E91CD5A17081957B5A666BECDD1ADC94436AACBCB, pD0BBA7FAE07D4CAC3C07091FDFB8C6213A5ACAAB8D73029A35D0B675A79D1B1E133053ADEDD6839E:pD0BBA7FAE07D4CAC3C07091FDFB8C6213A5ACAAB8D73029A35D0B675A79D1B1E133053ADEDD6839E, pD0BBA7FAE07D4CAC3C07091FDFB8C6213A5ACAAB:pD0BBA7FAE07D4CAC3C07091FDFB8C6213A5ACAAB, 
  p91CD5A17081957B5A666BECDD1ADC94436AACBCB:p91CD5A17081957B5A666BECDD1ADC94436AACBCB, pFull:pFull}
}()