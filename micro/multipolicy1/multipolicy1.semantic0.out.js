// multipolicy1.js
var b = 1;
introspect(JAM.policy.p3) {
  document.cookie++;
}
introspect(JAM.policy.p5) {
  a[b]++;
}
introspect(JAM.policy.p4) {
  a[c] = 10;
}
