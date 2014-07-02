var policy = function() {
  var states = [0];
  var _HTMLElement = HTMLElement;
  var _Window = Window;
  var _HTMLDocument = HTMLDocument;
  function processAll(tx) {
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
      JAMScript.process(tx)
    }else {
      JAMScript.prevent(tx)
    }
  }
  function processD0BBA7FAE07D4CAC3C07091FDFB8C6213A5ACAAB8D73029A35D0B675A79D1B1E133053ADEDD6839E91CD5A17081957B5A666BECDD1ADC94436AACBCB(tx) {
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
      JAMScript.process(tx)
    }else {
      JAMScript.prevent(tx)
    }
  }
  function processD0BBA7FAE07D4CAC3C07091FDFB8C6213A5ACAAB8D73029A35D0B675A79D1B1E133053ADEDD6839E(tx) {
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
      JAMScript.process(tx)
    }else {
      JAMScript.prevent(tx)
    }
  }
  function processD0BBA7FAE07D4CAC3C07091FDFB8C6213A5ACAAB(tx) {
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
      JAMScript.process(tx)
    }else {
      JAMScript.prevent(tx)
    }
  }
  function process91CD5A17081957B5A666BECDD1ADC94436AACBCB(tx) {
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
      JAMScript.process(tx)
    }else {
      JAMScript.prevent(tx)
    }
  }
  return{introspectors:{processD0BBA7FAE07D4CAC3C07091FDFB8C6213A5ACAAB8D73029A35D0B675A79D1B1E133053ADEDD6839E91CD5A17081957B5A666BECDD1ADC94436AACBCB:processD0BBA7FAE07D4CAC3C07091FDFB8C6213A5ACAAB8D73029A35D0B675A79D1B1E133053ADEDD6839E91CD5A17081957B5A666BECDD1ADC94436AACBCB, processD0BBA7FAE07D4CAC3C07091FDFB8C6213A5ACAAB8D73029A35D0B675A79D1B1E133053ADEDD6839E:processD0BBA7FAE07D4CAC3C07091FDFB8C6213A5ACAAB8D73029A35D0B675A79D1B1E133053ADEDD6839E, processD0BBA7FAE07D4CAC3C07091FDFB8C6213A5ACAAB:processD0BBA7FAE07D4CAC3C07091FDFB8C6213A5ACAAB, 
  process91CD5A17081957B5A666BECDD1ADC94436AACBCB:process91CD5A17081957B5A666BECDD1ADC94436AACBCB, processAll:processAll}}
}()