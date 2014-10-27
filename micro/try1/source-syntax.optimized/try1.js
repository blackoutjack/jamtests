function runTest() {
  try{introspect(JAM.policy.p1)x=2}finally{introspect(JAM.policy.p1)x=3}

  return x === 3;
}
