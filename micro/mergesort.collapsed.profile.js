function runTest() {

  JAM.startProfile('load');
  function merge(left$$2, right$$2) {
    var result = [];
    var v15 = left$$2.length > 0;
    if(!v15) {
      v15 = right$$2.length > 0
    }
    var v6 = v15;
    for(;v6;) {
      var v16 = left$$2.length > 0;
      if(v16) {
        v16 = right$$2.length > 0
      }
      if(v16) {
        var l0 = left$$2[0];
        var r0$$1 = right$$2[0];
        if(l0 <= r0$$1) {
          result.push(l0);
          left$$2.shift()
        }else {
          result.push(r0$$1);
          right$$2.shift()
        }
      }else {
        if(left$$2.length > 0) {
          result.push(left$$2.shift())
        }else {
          if(right$$2.length > 0) {
            result.push(right$$2.shift())
          }
        }
      }
      var v19 = left$$2.length > 0;
      if(!v19) {
        v19 = right$$2.length > 0
      }
      v6 = v19
    }
    return result
  }
  function mergeSort(a) {
    if(a.length <= 1) {
      return a
    }
    var left$$3 = [];
    var right$$3 = [];
    var mid = a.length / 2;
    var i$$2 = 0;
    var v10 = i$$2 < mid;
    for(;v10;) {
      left$$3.push(a[i$$2]);
      i$$2 = i$$2 + 1;
      v10 = i$$2 < mid
    }
    var j = mid;
    var v12 = j < a.length;
    for(;v12;) {
      right$$3.push(a[j]);
      j = j + 1;
      v12 = j < a.length
    }
    left$$3 = mergeSort(left$$3);
    right$$3 = mergeSort(right$$3);
    return merge(left$$3, right$$3)
  }
  var cnt = 4;
  var vals = [];
  var i = 0;
  var v14 = i < cnt;
  for(;v14;) {
    vals.push(Math.random() * 10);
    i = i + 1;
    v14 = i < cnt
  }
  var sorted = mergeSort(vals);

  JAM.stopProfile('load');

  return sorted[1] === sorted.sort()[1];
}
