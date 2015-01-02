introspect(JAM.policy.pFull) {
function merge(left$$1, right$$1) {
  var result = [];
  for (;left$$1.length > 0 || right$$1.length > 0;) {
    if (left$$1.length > 0 && right$$1.length > 0) {
      var l0 = left$$1[0];
      var r0$$1 = right$$1[0];
      if (l0 <= r0$$1) {
        result.push(l0);
        left$$1.shift();
      } else {
        result.push(r0$$1);
        right$$1.shift();
      }
    } else {
      if (left$$1.length > 0) {
        result.push(left$$1.shift());
      } else {
        if (right$$1.length > 0) {
          result.push(right$$1.shift());
        }
      }
    }
  }
  return result;
}
function mergeSort(a) {
  if (a.length <= 1) {
    return a;
  }
  var left$$2 = [];
  var right$$2 = [];
  var mid = a.length / 2;
  var i$$2 = 0;
  for (;i$$2 < mid;i$$2++) {
    left$$2.push(a[i$$2]);
  }
  var j = mid;
  for (;j < a.length;j++) {
    right$$2.push(a[j]);
  }
  left$$2 = mergeSort(left$$2);
  right$$2 = mergeSort(right$$2);
  return merge(left$$2, right$$2);
}
var cnt = 4;
var vals = [];
var i = 0;
for (;i < cnt;i++) {
  vals.push(Math.random() * 10);
}
var sorted = mergeSort(vals)

JAM.log("Result: " + " + respred ");

}
