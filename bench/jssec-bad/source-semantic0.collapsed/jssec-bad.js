function snipDisplay(c, p) {
  var v1;
  if (document.getElementById(c).checked == true) {
    var v13 = document.getElementById(p).style;
    introspect(JAM.policy.p1) {
      v1 = v13.display = "block";
    }
  } else {
    var v14 = document.getElementById(p).style;
    introspect(JAM.policy.p1) {
      v1 = v14.displayx = "none";
    }
  }
  v1;
  return;
}
function initSnippets() {
  function v0() {
    snipDisplay("c1", "s1");
    return;
  }
  var d = document;
  var v2 = document.getElementById("c1");
  introspect(JAM.policy.p1) {
    v2.onclick = v0;
  }
  return;
}
function snapDisplay(c$$1) {
  var d$$1 = document;
  if (document.getElementById(c$$1).innerHTML == "Show All") {
    var v3 = document.getElementById(c$$1);
    introspect(JAM.policy.p1) {
      v3.innerHTML = "Hide All";
    }
    var i$$1 = 1;
    var v6 = i$$1 <= 31;
    for (;v6;) {
      var v4 = document.getElementById("c" + i$$1);
      introspect(JAM.policy.p1) {
        v4.checked = true;
      }
      var v5 = document.getElementById("s" + i$$1).style;
      introspect(JAM.policy.p1) {
        v5.display = "block";
      }
      i$$1++;
      v6 = i$$1 <= 31;
    }
  } else {
    var v7 = document.getElementById(c$$1);
    introspect(JAM.policy.p1) {
      v7.innerHTML = "Show All";
    }
    i$$1 = 1;
    var v10 = i$$1 <= 31;
    for (;v10;) {
      var v8 = document.getElementById("c" + i$$1);
      introspect(JAM.policy.p1) {
        v8.checked = false;
      }
      var v9 = document.getElementById("s" + i$$1).style;
      introspect(JAM.policy.p1) {
        v9.display = "none";
      }
      i$$1++;
      v10 = i$$1 <= 31;
    }
  }
  return;
}
initSnippets();
document.getElementById("c1").onclick()
