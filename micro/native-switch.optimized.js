function runTest() {
  document.getElementById=document.getElementsByTagName;var elt=JAM.call(document.getElementById,document,["ok"]);

  return elt instanceof HTMLCollection;
}
