function runTest() {
x=1;var e=eval,v0=["x = 2"];JAMScript.call(e.apply,e,[null,v0]);alert(x);

  return x === 1;
}
