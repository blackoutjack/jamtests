function v3(callback$$26, target$$27, ports$$1, timeout$$1) {
  index = 0;
  var v16 = ports$$1.length;
  var v6 = index < v16;
  for (;v6;) {
    var v4 = AttackAPI.PortScanner;
    var v5 = ports$$1[index];
    JAM.call(v4.scanPort, v4, [callback$$26, target$$27, v5, timeout$$1]);
    index = index + 1;
    var v17 = ports$$1.length;
    v6 = index < v17;
  }
  return;
}
function v2(callback$$25, target$$26, port, timeout) {
  function v1() {
    var v7 = !img$$2;
    if (v7) {
      return;
    }
    img$$2 = undefined;
    JAM.call(callback$$25, null, [target$$26, port, "closed"]);
    return;
  }
  function v0() {
    var v8 = !img$$2;
    if (v8) {
      return;
    }
    img$$2 = undefined;
    JAM.call(callback$$25, null, [target$$26, port, "open"]);
    return;
  }
  var v9;
  var v18 = timeout == null;
  if (v18) {
    v9 = 100;
  } else {
    v9 = timeout;
  }
  timeout = v9;
  var img$$2 = new Image;
  JAM.set(img$$2, "onerror", v0);
  JAM.set(img$$2, "onload", img$$2.onerror);
  var v19 = "http://" + target$$26;
  var v10 = v19 + ":";
  introspect(JAM.policy.p1) {
    img$$2.src = v10 + port;
  }
  JAM.call(setTimeout, null, [v1, timeout]);
  return;
}
function cb(tgt, p, res) {
  var v22 = tgt + ":";
  var v21 = v22 + p;
  var v20 = v21 + " ";
  var v11 = v20 + res;
  console.log(v11);
  return;
}
var AttackAPI = {version:"0.1", author:"Petko Petkov (architect)", homepage:"http://www.gnucitizen.org"};
AttackAPI.PortScanner = {};
var v12 = AttackAPI.PortScanner;
v12.scanPort = v2;
var v13 = AttackAPI.PortScanner;
v13.scanTarget = v3;
var v14 = AttackAPI.PortScanner;
var v15 = [20, 21, 22, 23, 24, 100, 101, 102, 103];
JAM.call(v14.scanTarget, v14, [cb, "localhost", v15, 1E3])
