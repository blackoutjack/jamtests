function runTest() {
  x=JAM.call(Math.floor,Math,[4*Math.random()]);switch(x){case 0:introspect(JAM.policy.p1)x++;break;case 1:introspect(JAM.policy.p1)x--;break;case 2:introspect(JAM.policy.p1)x++;break;case 3:introspect(JAM.policy.p1)x--;break;default:alert("ERROR")}

  return x !== 2;
}
