introspect(JAM.policy.p9) {
  var a = document.getElementById("ok")
}
introspect(JAM.policy.p1) {
  var b = document.cookie
}
introspect(JAM.policy.p4) {
  document.cookie = "other";
}
introspect(JAM.policy.p2) {
  var c = document.createElement("img")
}
introspect(JAM.policy.p3) {
  c.src = b;
}
introspect(JAM.policy.p6) {
  document.write(b);
}

JAM.log("Result: " + " + respred ");
