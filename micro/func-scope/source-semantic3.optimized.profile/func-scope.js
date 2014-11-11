function runTest() {

  JAM.startProfile('load');
  function v1(){6>cnt&&(cnt++,g())}function v0(){3>cnt&&(cnt++,f())}var x=!0,f=v0,cnt=0,g=v1;f();g()

  JAM.stopProfile('load');

  return cnt === 6;
}
