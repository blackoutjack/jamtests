function runTest() {

  JAM.startProfile('load');
var y="tab|\u0019|tab",x=y;

  JAM.stopProfile('load');

  return x === "tab|\u0019|tab";
}
