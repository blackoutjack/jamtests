
JAM.startProfile('load');
function runTest() {
  var label=document.createElement("label");label.className="read-only";JAM.set(label,"textContent","Are you sure you want to delete?",JAM.policy.p1)

  return "RESULT NOT SPECIFIED";
}

JAM.stopProfile('load');
