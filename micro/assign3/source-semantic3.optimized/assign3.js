function runTest() {
  function f(){cnt+=1;return 3}var cnt=10,a=[4,6,8,10,12],i=2,b,v0=f();b=JAM.set(a,v0,a[v0]+1);alert("a: "+a+" b: "+b+" i: "+i+" cnt: "+cnt)

  return "RESULT NOT SPECIFIED";
}
