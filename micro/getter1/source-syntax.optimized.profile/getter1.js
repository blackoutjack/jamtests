function runTest() {

  JAM.startProfile('load');
  function hello(){return"hello"}function v2(){function inner(){var f=JAM.isEval(eval)?eval("introspect(JAM.policy.pFull) { hello }"):JAM.call(eval,null,["hello"]);return f()+" whatever"}return"ok"+inner()}var a={};JAM.call(Object.defineProperty,Object,[a,"ok",{get:v2}]);alert(a.ok)

  JAM.stopProfile('load');

  return a.ok === "okhello whatever";
}
