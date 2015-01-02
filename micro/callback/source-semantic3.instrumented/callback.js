function f() {
  introspect(JAM.policy.p1) {
    x = 2;
  }
  return;
}
setTimeout(f, 1E3)

JAM.log("Result: " + " + respred ");
