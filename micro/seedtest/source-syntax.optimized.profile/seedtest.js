function runTest() {

  JAM.startProfile('load');
  var a=0,b=1,d="fine",e=4,c=[];introspect(JAM.policy.p1)c[a]=0;introspect(JAM.policy.p1)c[b]=1;JAM.set(c,d,3,JAM.policy.p1);introspect(JAM.policy.p1)c[e]=4

  JAM.stopProfile('load');

  return c.fine === 3;
}
