function runTest() {
var a=0,b=10,c=20,v1=c+=2,a=b+=v1,v5="a: "+a,v4=v5+" b: ",v3=v4+b,v2=v3+" c: ",v0=v2+c;alert(v0);

  return a === 32 && b === 32 && c === 22;
}
