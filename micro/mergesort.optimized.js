function runTest() {
function merge(left,right){var result=[],v24=left.length,v24=0<v24,v26=!v24;v26&&(v24=right.length,v24=0<v24);for(;v24;){v24=left.length;if(v24=0<v24)v24=right.length,v24=0<v24;if(v24){var v24=left[0],v26=right[0],v0=v24<=v26;v0?(result.push(v24),left.shift()):(result.push(v26),right.shift())}else if(v24=left.length,v24=0<v24)v24=left.shift(),result.push(v24);else if(v24=right.length,v24=0<v24)v24=right.shift(),result.push(v24);v24=left.length;v24=0<v24;if(v26=!v24)v24=right.length,v24=0<v24}return result}
  function mergeSort(a){var v20=a.length;if(v20=1>=v20)return a;for(var v20=[],right=[],v8=a.length,v8=v8/2,i=0,v10=i<v8;v10;)v10=a[i],v20.push(v10),i+=1,v10=i<v8;i=a.length;for(i=v8<i;i;)i=a[v8],right.push(i),v8+=1,i=a.length,i=v8<i;v20=mergeSort(v20);right=mergeSort(right);return merge(v20,right)}for(var cnt=4,vals=[],i=0,v14=i<cnt;v14;){var v23=Math.random(),v13=10*v23;vals.push(v13);i+=1;v14=i<cnt}var sorted=mergeSort(vals);

  return sorted[1] === sorted.sort()[1];
}
