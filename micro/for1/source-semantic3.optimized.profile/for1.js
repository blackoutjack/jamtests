function runTest() {

  JAM.startProfile('load');
  for(var i=0;!(5<i);)i++

  JAM.stopProfile('load');

  return i === 6;
}
