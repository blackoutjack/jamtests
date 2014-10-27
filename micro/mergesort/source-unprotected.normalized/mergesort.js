function runTest() {
  function merge(left$$1, right$$1) {
    var result = [];
    var v24 = left$$1.length;
    var v15 = v24 > 0;
    var v26 = !v15;
    if (v26) {
      var v25 = right$$1.length;
      v15 = v25 > 0;
    }
    var v6 = v15;
    for (;v6;) {
      var v27 = left$$1.length;
      var v16 = v27 > 0;
      if (v16) {
        var v28 = right$$1.length;
        v16 = v28 > 0;
      }
      var v5 = v16;
      if (v5) {
        var l0 = left$$1[0];
        var r0$$1 = right$$1[0];
        var v0 = l0 <= r0$$1;
        if (v0) {
          result.push(l0);
          left$$1.shift();
        } else {
          result.push(r0$$1);
          right$$1.shift();
        }
      } else {
        var v17 = left$$1.length;
        var v4 = v17 > 0;
        if (v4) {
          var v1 = left$$1.shift();
          result.push(v1);
        } else {
          var v18 = right$$1.length;
          var v3 = v18 > 0;
          if (v3) {
            var v2 = right$$1.shift();
            result.push(v2);
          }
        }
      }
      var v29 = left$$1.length;
      var v19 = v29 > 0;
      var v31 = !v19;
      if (v31) {
        var v30 = right$$1.length;
        v19 = v30 > 0;
      }
      v6 = v19;
    }
    return result;
  }
  function mergeSort(a) {
    var v20 = a.length;
    var v7 = v20 <= 1;
    if (v7) {
      return a;
    }
    var left$$2 = [];
    var right$$2 = [];
    var v8 = a.length;
    var mid = v8 / 2;
    var i$$2 = 0;
    var v10 = i$$2 < mid;
    for (;v10;) {
      var v9 = a[i$$2];
      left$$2.push(v9);
      i$$2 = i$$2 + 1;
      v10 = i$$2 < mid;
    }
    var j = mid;
    var v21 = a.length;
    var v12 = j < v21;
    for (;v12;) {
      var v11 = a[j];
      right$$2.push(v11);
      j = j + 1;
      var v22 = a.length;
      v12 = j < v22;
    }
    left$$2 = mergeSort(left$$2);
    right$$2 = mergeSort(right$$2);
    return merge(left$$2, right$$2);
  }
  var cnt = 4;
  var vals = [];
  var i = 0;
  var v14 = i < cnt;
  for (;v14;) {
    var v23 = Math.random();
    var v13 = v23 * 10;
    vals.push(v13);
    i = i + 1;
    v14 = i < cnt;
  }
  var sorted = mergeSort(vals)

  return sorted[1] === sorted.sort()[1];
}
