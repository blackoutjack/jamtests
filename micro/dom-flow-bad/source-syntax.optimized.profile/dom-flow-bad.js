function runTest() {

  JAM.startProfile('load');
  var label=document.createElement("label");label.className="read-only";JAM.set(label,"textContent","Are you sure you want to delete?",JAM.policy.p1)

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
