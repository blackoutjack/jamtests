function runTest() {
  function f(){alert("CNT: "+cnt);return cnt++}var cnt=0,i=0;out:for(;;){switch(i){case f():alert("GOT 0");break;case f():alert("GOT 1");break;case f():alert("GOT 2");break;case f():alert("GOT 3");break;default:alert("GOT DEFAULT");break out}i*=2}

  return "RESULT NOT SPECIFIED";
}
