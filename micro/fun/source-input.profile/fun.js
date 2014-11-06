x = 3;

  JAM.startProfile('load');
  function f() {
    return 2;
}

  JAM.stopProfile('load');


x = f(); 
