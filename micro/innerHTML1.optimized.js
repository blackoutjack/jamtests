function runTest() {
var div=document.createElement("div");JAMScript.set(div,"innerHTML","<a href='#'></a>",JAMScript.process);introspect(JAMScript.process)var v0=div.childNodes,d=v0[0];var v1="VALUE: "+d;alert(v1);

  return "The URL (with # appended) should be alerted";
}
