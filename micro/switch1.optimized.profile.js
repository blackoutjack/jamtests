function runTest() {

  JAM.startProfile('load');
function f(){var v0="CNT: "+cnt;alert(v0);return cnt++}var cnt=0,i=0;out:for(;;){switch(i){case f():alert("GOT 0");break;case f():alert("GOT 1");break;case f():alert("GOT 2");break;case f():alert("GOT 3");break;default:alert("GOT DEFAULT");break out}i*=2};

  JAM.stopProfile('load');

  return i === 0 && cnt === 5;
}
