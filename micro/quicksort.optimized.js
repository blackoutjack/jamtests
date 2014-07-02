function runTest() {
function partition(a,lo,hi){for(var i=lo+1,j=hi;;){for(var v11=a[i],v12=a[lo],v11=v11<v12;v11;){i+=1;if(v11=i==hi)break;v11=a[i];v12=a[lo];v11=v11<v12}v11=a[lo];v12=a[j];for(v11=v11<v12;v11;){j-=1;if(v11=j==lo)break;v11=a[lo];v12=a[j];v11=v11<v12}if(v11=i>=j)break;v11=a[j];JAMScript.set(a,j,a[i]);JAMScript.set(a,i,v11)}hi=a[j];JAMScript.set(a,j,a[lo]);JAMScript.set(a,lo,hi);return j}
  function quickSort(a,lo,hi){var v5=hi<=lo;if(!v5){var v5=partition(a,lo,hi),v6=v5-1;quickSort(a,lo,v6);lo=v5+1;quickSort(a,lo,hi)}}for(var cnt=10,vals=[],i=0,v9=i<cnt;v9;){var v19=Math.random(),v8=10*v19;vals.push(v8);i+=1;v9=i<cnt}var v20=vals.length,v10=v20-1;quickSort(vals,0,v10);

  return vals[1] === (vals.sort() && vals[1]);
}
