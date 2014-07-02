function runTest() {

  JAM.startProfile('load');
function Stack(){function v2(){var v3=this.discs;return v3=v3.join(",")}function v1(){var v4=this.discs,v4=JAMScript.call(v4.pop,v4,[]),v6=Infinity===v4;return v6?(console.log("Attempting to pop the base"),v6=this.discs,JAMScript.call(v6.push,v6,[v4]),!1):v4}function v0(disc){var v23=typeof disc;if(v23="number"!=v23)return disc="Invalid disc type: "+disc,console.log(disc),!1;var v23=NaN===disc,v29=!v23;v29&&(v23=Infinity===disc,v29=!v23)&&(v23=-Infinity,v23=disc===v23);if(v23)return disc="Invalid disc number: "+
  disc,console.log(disc),!1;v29=v23=this.discs;v29=v29.length;v29-=1;v23=v23[v29];if(v23=disc>v23)return disc="Invalid disc ordering: "+disc,disc+=" > ",v29=v23=this.discs,v29=v29.length,v29-=1,v23=v23[v29],disc+=v23,console.log(disc),!1;v23=this.discs;JAMScript.call(v23.push,v23,[disc]);return!0}this.discs=[Infinity];this.push=v0;this.pop=v1;this.toString=v2}
  function move(n,from,to,using){var ok=!0,v14=0==n;if(v14)return ok;ok=n-1;ok=move(ok,from,using,to);if(ok=!ok)return!1;ok=JAMScript.call(from.pop,from,[]);if(v14=!1===ok)return!1;JAMScript.call(to.push,to,[ok]);n-=1;return ok=move(n,using,to,from)}for(var initialStack=new Stack,targetStack=new Stack,auxStack=new Stack,num=20,i=num,v19=0<i;v19;)JAMScript.call(initialStack.push,initialStack,[i]),i-=1,v19=0<i;var done=move(num,initialStack,targetStack,auxStack),v20="Initial: "+initialStack;alert(v20);
  var v21="Aux: "+auxStack;alert(v21);var v22="Target: "+targetStack;alert(v22);

  JAM.stopProfile('load');

  return "Target tower should contain all discs, in order.";
}
