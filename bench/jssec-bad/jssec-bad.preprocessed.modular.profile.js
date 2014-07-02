
JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
function snipDisplay(c, p) {
  var v1;
  var v27 = document.getElementById(c);
  var v21 = v27.checked;
  var v15 = v21 == true;
  if(v15) {
    var v22 = document.getElementById(p);
    var v13 = v22.style;
    v1 = v13.display = "block"
  }else {
    var v23 = document.getElementById(p);
    var v14 = v23.style;
    v1 = v14.displayx = "none"
  }
  v1;
  return
}
function initSnippets() {
  function v0() {
    snipDisplay("c1", "s1");
    return
  }
  var d = document;
  var v2 = document.getElementById("c1");
  v2.onclick = v0;
  return
}
function snapDisplay(c$$1) {
  var d$$1 = document;
  var v24 = document.getElementById(c$$1);
  var v16 = v24.innerHTML;
  var v11 = v16 == "Show All";
  if(v11) {
    var v3 = document.getElementById(c$$1);
    v3.innerHTML = "Hide All";
    var i$$1 = 1;
    var v6 = i$$1 <= 31;
    for(;v6;) {
      var v17 = "c" + i$$1;
      var v4 = document.getElementById(v17);
      v4.checked = true;
      var v25 = "s" + i$$1;
      var v18 = document.getElementById(v25);
      var v5 = v18.style;
      v5.display = "block";
      i$$1 = i$$1 + 1;
      v6 = i$$1 <= 31
    }
  }else {
    var v7 = document.getElementById(c$$1);
    v7.innerHTML = "Show All";
    i$$1 = 1;
    var v10 = i$$1 <= 31;
    for(;v10;) {
      var v19 = "c" + i$$1;
      var v8 = document.getElementById(v19);
      v8.checked = false;
      var v26 = "s" + i$$1;
      var v20 = document.getElementById(v26);
      var v9 = v20.style;
      v9.display = "none";
      i$$1 = i$$1 + 1;
      v10 = i$$1 <= 31
    }
  }
  return
}
initSnippets();
var v12 = document.getElementById("c1");
v12.onclick();

}

JAM.stopProfile('load');

