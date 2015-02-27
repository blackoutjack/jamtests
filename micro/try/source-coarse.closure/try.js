introspect(JAM.policy.pFull) {
try {
  x = 1;
} catch (e$$4) {
  x = 2;
}

JAM.log("Result: " + (x === 1));

}
