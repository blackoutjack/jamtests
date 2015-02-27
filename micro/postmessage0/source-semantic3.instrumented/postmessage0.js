introspect(JAM.policy.p1) {
  window.postMessage("ok");
}

JAM.log("Result: " + ("HTTP request initiated by |postMessage| should be prevented"));
