function runTest() {

  JAM.startProfile('load');
var a=0,b=1,d="fine",e=4,c=[];c[a]=0;c[b]=1;JAMScript.set(c,d,3);c[e]=4;

  JAM.stopProfile('load');

  return c.fine === 3;
}
