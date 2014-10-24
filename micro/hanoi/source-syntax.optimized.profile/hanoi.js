function runTest() {

  JAM.startProfile('load');
  function Stack(){function v2(){var str=this.discs.join(",");return str}function v1(){var ret=this.discs.pop();if(Infinity===ret){console.log("Attempting to pop the base");var v5=this.discs;JAM.call(v5.push,v5,[ret]);return!1}return ret}function v0(disc){if("number"!=typeof disc)return console.log("Invalid disc type: "+disc),!1;var v28=NaN===disc;v28||(v28=Infinity===disc);v28||(v28=-Infinity===disc);if(v28)return console.log("Invalid disc number: "+disc),!1;if(disc>this.discs[this.discs.length-1])return console.log("Invalid disc ordering: "+
  disc+" > "+this.discs[this.discs.length-1]),!1;v28=this.discs;JAM.call(v28.push,v28,[disc]);return!0}this.discs=[Infinity];this.push=v0;this.pop=v1;this.toString=v2}function move(n,from,to,using){var ok=!0;if(0==n)return ok;ok=move(n-1,from,using,to);if(!ok)return!1;ok=from.pop();if(!1===ok)return!1;JAM.call(to.push,to,[ok]);return ok=move(n-1,using,to,from)}
  for(var initialStack=new Stack,targetStack=new Stack,auxStack=new Stack,num=20,i=num,v19=0<i;v19;)JAM.call(initialStack.push,initialStack,[i]),i-=1,v19=0<i;var done=move(num,initialStack,targetStack,auxStack);alert("Initial: "+initialStack);alert("Aux: "+auxStack);alert("Target: "+targetStack)

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
