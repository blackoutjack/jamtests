function runTest() {
  function partition(a, lo, hi) {
    var i$$2 = lo + 1;
    var j = hi;
    for (;true;) {
      for (;a[i$$2] < a[lo];) {
        ++i$$2;
        if (i$$2 == hi) {
          break;
        }
      }
      for (;a[lo] < a[j];) {
        --j;
        if (j == lo) {
          break;
        }
      }
      if (i$$2 >= j) {
        break;
      }
      var tmp1 = a[j];
      a[j] = a[i$$2];
      a[i$$2] = tmp1;
    }
    var tmp2 = a[j];
    a[j] = a[lo];
    a[lo] = tmp2;
    return j;
  }
  function quickSort(a$$1, lo$$1, hi$$1) {
    if (hi$$1 <= lo$$1) {
      return;
    }
    var p = partition(a$$1, lo$$1, hi$$1);
    quickSort(a$$1, lo$$1, p - 1);
    quickSort(a$$1, p + 1, hi$$1);
  }
  var cnt = 10;
  var vals = [];
  var i = 0;
  for (;i < cnt;i++) {
    vals.push(Math.random() * 10);
  }
  quickSort(vals, 0, vals.length - 1)

  return "RESULT NOT SPECIFIED";
}
