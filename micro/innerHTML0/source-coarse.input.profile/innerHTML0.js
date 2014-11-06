x = 1;

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  

  }

  JAM.stopProfile('load');

var elt = document.getElementById("test");
elt.innerHTML = "<script>x = 2</script>";
