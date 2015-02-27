
JAM.startProfile('load');
function f(){cnt++;return 3}var cnt=10,a=[4,6,8,10,12],i=2,b,v0=f();b=JAM.set(a,v0,a[v0]+1);alert("a: "+a+" b: "+b+" i: "+i+" cnt: "+cnt)

JAM.log("Result: " + (b === 11 && i === 2 && cnt === 11));

JAM.stopProfile('load');
