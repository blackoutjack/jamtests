function runTest() {

  JAM.startProfile('load');
function f(){return this.indexOf("k")}var g=JAMScript.call(f.bind,f,["ok"]),v=JAMScript.call(g,null,[]);

  JAM.stopProfile('load');

  return v === 1;
}
