function runTest() {

  JAM.startProfile('load');
  function g(){try{if(x)return;x=4}finally{introspect(JAM.policy.p1)x=2}x=1}x=3;g();JAM.call(print,null,[x]);

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
