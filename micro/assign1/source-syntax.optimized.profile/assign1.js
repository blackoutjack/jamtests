function runTest() {

  JAM.startProfile('load');
  var a=0,b=10,c=20,a=b+=c+=2;alert("a: "+a+" b: "+b+" c: "+c)

  JAM.stopProfile('load');

  return a === 32 && b === 32 && c === 22;
}
