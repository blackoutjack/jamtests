function runTest() {

  JAM.startProfile('load');
  function f(){cnt+=1;return 3}var cnt=10,a=[4,6,8,10,12],i=2,b,v0=f();b=JAM.set(a,v0,a[v0]+1,JAM.policy.p1);alert("a: "+a+" b: "+b+" i: "+i+" cnt: "+cnt)

  JAM.stopProfile('load');

  return b === 11 && i === 2 && cnt === 11;
}
