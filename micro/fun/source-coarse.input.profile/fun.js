x = 3;

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  function f() {
    return 2;
}

  }

  JAM.stopProfile('load');


x = f(); 
