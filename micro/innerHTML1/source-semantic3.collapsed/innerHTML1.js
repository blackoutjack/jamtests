var div = document.createElement("div");
introspect(JAM.process) {
  div.innerHTML = "<a href='#'></a>";
  var v0 = div.childNodes;
  var d = v0[0];
}
alert("VALUE: " + d)

JAM.log("Result: " + ("The URL (with # appended) should be alerted"));
