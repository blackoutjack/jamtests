
JAM.startProfile('load');
function runTest() {
  var div=document.createElement("div");introspect(JAM.process){JAM.set(div,"innerHTML","<a href='#'></a>");var v0=div.childNodes,d=v0[0]}alert("VALUE: "+d)

  return "The URL (with # appended) should be alerted";
}

JAM.stopProfile('load');
