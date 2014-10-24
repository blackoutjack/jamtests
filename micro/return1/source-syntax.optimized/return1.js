function runTest() {
  function g(){try{if(x)return;introspect(JAM.policy.p1)x=4}finally{introspect(JAM.policy.p1)x=2}introspect(JAM.policy.p1)x=1}introspect(JAM.policy.p1)x=3;g();print(x)

  return "RESULT NOT SPECIFIED";
}
