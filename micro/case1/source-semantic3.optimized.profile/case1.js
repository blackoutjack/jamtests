function runTest() {

  JAM.startProfile('load');
  x=1;switch(x){case 1:y=x,alert(x);default:alert(x+1)}

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
