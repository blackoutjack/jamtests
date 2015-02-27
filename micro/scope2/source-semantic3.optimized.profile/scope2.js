
JAM.startProfile('load');
function f(p){alert(p)}function c(){this.m=f}var o=new c,a=JAM.call(o.m,o,["ok"])

JAM.log("Result: " + (a === undefined));

JAM.stopProfile('load');
