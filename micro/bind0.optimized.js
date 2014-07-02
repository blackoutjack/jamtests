function runTest() {
function f(){return this.indexOf("k")}var g=JAMScript.call(f.bind,f,["ok"]),v=JAMScript.call(g,null,[]);

  return v === 1;
}
