function runTest() {

  JAM.startProfile('load');
function hello(){return"hello"}function v2(){function inner(){var f=JAMScript.isEval(eval)?eval("introspect(JAMScript.introspectors.processAll) { hello }"):JAMScript.call(eval,null,["hello"]),f=JAMScript.call(f,null,[]);return f+" whatever"}var v1=inner();return"ok"+v1}var a={},v4={get:v2};JAMScript.call(Object.defineProperty,Object,[a,"ok",v4]);var v3=a.ok;alert(v3);

  JAM.stopProfile('load');

  return a.ok === "okhello whatever";
}
