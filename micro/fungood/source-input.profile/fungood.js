x = 3;

  JAM.startProfile('load');
  function f() {
    return 4;
}

  JAM.stopProfile('load');


x = f(); 
