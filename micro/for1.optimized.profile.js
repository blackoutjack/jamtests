function runTest() {

  JAM.startProfile('load');
for(var i=0;;){var v0=5<i;if(v0)break;i+=1};

  JAM.stopProfile('load');

  return i === 6;
}
