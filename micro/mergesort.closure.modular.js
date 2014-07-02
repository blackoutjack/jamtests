function runTest() {
introspect(JAMScript.introspectors.processAll) {
  function merge(left$$2, right$$2) {
    var result = [];
    for(;left$$2.length > 0 || right$$2.length > 0;) {
      if(left$$2.length > 0 && right$$2.length > 0) {
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
    for(;i$$2 < mid;i$$2++) {
      left$$3.push(a[i$$2])
    }
    var j = mid;
    for(;j < a.length;j++) {
      right$$3.push(a[j])
    }
    left$$3 = mergeSort(left$$3);
    right$$3 = mergeSort(right$$3);
    return merge(left$$3, right$$3)
  }
  var cnt = 4;
  var vals = [];
  var i = 0;
  for(;i < cnt;i++) {
    vals.push(Math.random() * 10)
  }
  var sorted = mergeSort(vals);

  }

  return sorted[1] === sorted.sort()[1];
}
