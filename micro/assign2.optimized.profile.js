function runTest() {

  JAM.startProfile('load');
var a=[4,6,8,10,12],b,i=0,v0=i,v2=a[i],v3=i+=1;b=a[v0]=v2+v3;var v7="a: "+a,v6=v7+" b: ",v5=v6+b,v4=v5+" i: ",v1=v4+i;alert(v1);

  JAM.stopProfile('load');

  return b === 5 && i === 1;
}
