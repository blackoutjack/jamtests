function runTest() {

  JAM.startProfile('load');
  var i=x=0,v1=4>i;lbl:for(;v1;){introspect(JAM.policy.p1)x+=1;if(1==i)break lbl;i+=1;v1=4>i}

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
