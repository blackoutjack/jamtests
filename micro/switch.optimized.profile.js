function runTest() {

  JAM.startProfile('load');
  x=JAM.call(Math.floor,Math,[4*Math.random()]);switch(x){case 0:introspect(JAM.policy.p1)x+=1;break;case 1:introspect(JAM.policy.p1)x-=1;break;case 2:introspect(JAM.policy.p1)x+=1;break;case 3:introspect(JAM.policy.p1)x-=1;break;default:alert("ERROR")};

  JAM.stopProfile('load');

  return x !== 2;
}
