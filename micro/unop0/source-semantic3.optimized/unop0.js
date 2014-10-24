function runTest() {
  for(var a=[0,1,2,3,4,5,6],b,i=0,v2=i<a.length;v2;){var idx=i,v0=idx;a[v0]=idx+=1;b=a[v0];alert("i: "+i+" b: "+b+" idx: "+idx+" a[idx]: "+a[idx]+" a[i]: "+a[i]);i+=1;v2=i<a.length}

  return "RESULT NOT SPECIFIED";
}
