var elt = document.createElement("script");

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  // Confirmed that using |setAttribute| in the following way does not
// cause parsing/insertion of the value.
//elt.setAttribute("innerHTML", "x = 2; alert('gotcha');");
// So just convert this to a more standard |innerHTML| test.

  }

  JAM.stopProfile('load');

elt.innerHTML = "x = 2; alert('gotcha');";
document.body.appendChild(elt);
