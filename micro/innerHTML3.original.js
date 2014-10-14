function runTest() {
  JAM.set(document.getElementById("frameparent"), "innerHTML", "");
  JAM.set(document.getElementById("frameparent"), "innerHTML", "<iframe id='testframe'>");
  return true;
}
