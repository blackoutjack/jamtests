function runTest() {

  JAM.startProfile('load');
var v1=Math.random(),v0=4*v1;introspect(JAMScript.introspectors.process6CB626AF3B00A2806871E6DD34E13FD7B9D46DB2)x=Math.floor(v0);
  switch(x){case 0:introspect(JAMScript.introspectors.process6CB626AF3B00A2806871E6DD34E13FD7B9D46DB2)x+=1;break;case 1:introspect(JAMScript.introspectors.process6CB626AF3B00A2806871E6DD34E13FD7B9D46DB2)x-=1;break;case 2:introspect(JAMScript.introspectors.process6CB626AF3B00A2806871E6DD34E13FD7B9D46DB2)x+=1;break;case 3:introspect(JAMScript.introspectors.process6CB626AF3B00A2806871E6DD34E13FD7B9D46DB2)x-=1;break;default:alert("ERROR")};

  JAM.stopProfile('load');

  return x !== 2;
}
