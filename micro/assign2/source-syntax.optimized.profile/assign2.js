function runTest() {

  JAM.startProfile('load');
  var a=[4,6,8,10,12],b,i=0,v0=i,v2=a[i],v3=i+=1;introspect(JAM.policy.p1)b=a[v0]=v2+v3;alert("a: "+a+" b: "+b+" i: "+i)

  JAM.stopProfile('load');

  return b === 5 && i === 1;
}
