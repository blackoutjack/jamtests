function runTest() {

  JAM.startProfile('load');
  try{introspect(JAM.policy.p1)x=2}finally{introspect(JAM.policy.p1)x=3}

  JAM.stopProfile('load');

  return x === 3;
}
