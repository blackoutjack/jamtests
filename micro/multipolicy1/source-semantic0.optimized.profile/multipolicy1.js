function runTest() {

  JAM.startProfile('load');
  var b=1,v0=document.cookie;introspect(JAM.policy.p3)document.cookie=v0+1;introspect(JAM.policy.p5)var v1=a[b];introspect(JAM.policy.p4)a[b]=v1+1;JAM.set(a,c,10,JAM.policy.p4)

  JAM.stopProfile('load');

  return "Expect an exception";
}
