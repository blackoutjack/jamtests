
JAM.startProfile('load');
function merge(left,right){var result=[],v15=0<left.length;for(v15||(v15=0<right.length);v15;){(v15=0<left.length)&&(v15=0<right.length);if(v15){var v15=left[0],r0=right[0];v15<=r0?(result.push(v15),left.shift()):(result.push(r0),right.shift())}else 0<left.length?result.push(left.shift()):0<right.length&&result.push(right.shift());(v15=0<left.length)||(v15=0<right.length)}return result}
function mergeSort(a){if(1>=a.length)return a;for(var left=[],right=[],mid=a.length/2,i=0,v10=i<mid;v10;)left.push(a[i]),i++,v10=i<mid;for(i=mid<a.length;i;)right.push(a[mid]),mid++,i=mid<a.length;left=mergeSort(left);right=mergeSort(right);return merge(left,right)}for(var cnt=4,vals=[],i=0,v14=i<cnt;v14;)vals.push(10*Math.random()),i++,v14=i<cnt;var sorted=mergeSort(vals)

JAM.log("Result: " + (sorted[1] === sorted.sort()[1]));

JAM.stopProfile('load');
