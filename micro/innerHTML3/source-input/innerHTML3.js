var elt = document.getElementById("section");
introspect(pol) {
  elt.innerHTML = "<input onclick='alert(\"gotcha\")' type='button' value='try it' />";
}

