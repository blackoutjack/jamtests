
JAM.startProfile('load');
function f(){return this.indexOf("k")}var g=JAM.call(f.bind,f,["ok"]),v=g()

JAM.log("Result: " + (v === 1));

JAM.stopProfile('load');
