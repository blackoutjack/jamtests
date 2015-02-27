var a = "ok";
introspect(JAM.policy.p1) {
  a.innerHTML = 1;
}

JAM.log("Result: " + (a.innerHTML === undefined));
