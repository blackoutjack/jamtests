function runTest() {
for(var a=[0,1,2,3,4,5,6],b,i=0,v3=a.length,v2=i<v3;v2;){var idx=i,v0=idx;a[v0]=idx+=1;b=a[v0];var v14="i: "+i,v13=v14+" b: ",v12=v13+b,v11=v12+" idx: ",v10=v11+idx,v8=v10+" a[idx]: ",v9=a[idx],v7=v8+v9,v4=v7+" a[i]: ",v5=a[i],v1=v4+v5;alert(v1);var i=i+1,v6=a.length,v2=i<v6};

  return i === 7 && b === 7 && idx === 7 && a[idx] === undefined && a[i] === undefined;
}
