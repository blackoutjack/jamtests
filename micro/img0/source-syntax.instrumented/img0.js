function runTest() {
  function v0() {
    var v5 = String.prototype;
    var v3 = v5.indexOf;
    var v1 = "indexOf 2: " + v3;
    alert(v1);
    return;
  }
  var html = "<img src='notapic.jpg' onerror='String.prototype.indexOf = false' />";
  var elt = document.getElementById("note");
  elt.innerHTML = html;
  var v6 = String.prototype;
  var v4 = v6.indexOf;
  var v2 = "indexOf 1: " + v4;
  alert(v2);
  setTimeout(v0, 1E3)

  return "1st pop-up should print the native function, and the 2nd should print 'false'";
}
