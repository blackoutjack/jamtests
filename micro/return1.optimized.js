function runTest() {
  function g(){try{if(x)return;x=4}finally{introspect(JAM.policy.p6CB626AF3B00A2806871E6DD34E13FD7B9D46DB2)x=2}x=1}x=3;g();JAM.call(print,null,[x]);

  return "RESULT NOT SPECIFIED";
}
