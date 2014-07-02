function runTest() {

  JAM.startProfile('load');
var f=JAMScript.new(Function,["x = 2"]);JAMScript.call(f,null,[]);

  JAM.stopProfile('load');

  return typeof x === "undefined";
}
