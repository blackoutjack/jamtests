function runTest() {

  JAM.startProfile('load');
  var div=document.createElement("div");introspect(JAM.process){div.innerHTML="<a href='#'></a>";var v0=div.childNodes,d=v0[0]}alert("VALUE: "+d)

  JAM.stopProfile('load');

  return "The URL (with # appended) should be alerted";
}
