function runTest() {
  function partition(a,lo,hi){for(var i=lo+1,j=hi;;){for(var v1=a[i]<a[lo];v1;){i+=1;if(i==hi)break;v1=a[i]<a[lo]}for(v1=a[lo]<a[j];v1;){j-=1;if(j==lo)break;v1=a[lo]<a[j]}if(i>=j)break;v1=a[j];JAM.set(a,j,a[i],JAM.policy.p1);JAM.set(a,i,v1,JAM.policy.p1)}hi=a[j];JAM.set(a,j,a[lo],JAM.policy.p1);JAM.set(a,lo,hi,JAM.policy.p1);return j}function quickSort(a,lo,hi){if(!(hi<=lo)){var p=partition(a,lo,hi);quickSort(a,lo,p-1);quickSort(a,p+1,hi)}}
  for(var cnt=10,vals=[],i=0,v9=i<cnt;v9;)vals.push(10*Math.random()),i+=1,v9=i<cnt;quickSort(vals,0,vals.length-1)

  return vals[1] === (vals.sort() && vals[1]);
}
