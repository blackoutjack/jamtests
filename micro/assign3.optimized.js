function runTest() {
function f(){cnt+=1;return 3}var cnt=10,a=[4,6,8,10,12],i=2,b,v0=f(),v3=a[v0];b=JAMScript.set(a,v0,v3+1);var v8="a: "+a,v7=v8+" b: ",v6=v7+b,v5=v6+" i: ",v4=v5+i,v2=v4+" cnt: ",v1=v2+cnt;alert(v1);

  return b === 11 && i === 2 && cnt === 11;
}
