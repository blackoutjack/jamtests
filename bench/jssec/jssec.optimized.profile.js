
JAM.startProfile('load');
function snipDisplay(){var c="c1",p="s1",c=document.getElementById(c),c=c.checked;if(c=!0==c){p=document.getElementById(p);p=p.style;introspect(JAMScript.introspectors.processAF65661CDDA02BEF577B9796994F429B325DEECD)p.display="block"}else{p=document.getElementById(p);p=p.style;introspect(JAMScript.introspectors.processAF65661CDDA02BEF577B9796994F429B325DEECD)p.display="none"}}
function initSnippets(){function v0(){snipDisplay()}var v2=document.getElementById("c1");JAMScript.set(v2,"onclick",v0,JAMScript.introspectors.processAF65661CDDA02BEF577B9796994F429B325DEECD)}
function snapDisplay(c){var v24=document.getElementById(c),v24=v24.innerHTML;if(v24="Show All"==v24)for(c=document.getElementById(c),JAMScript.set(c,"innerHTML","Hide All",JAMScript.introspectors.processAF65661CDDA02BEF577B9796994F429B325DEECD),c=1,v24=31>=c;v24;){v24="c"+c;v24=document.getElementById(v24);introspect(JAMScript.introspectors.processAF65661CDDA02BEF577B9796994F429B325DEECD)v24.checked=!0;v24="s"+c;v24=document.getElementById(v24);v24=v24.style;introspect(JAMScript.introspectors.processAF65661CDDA02BEF577B9796994F429B325DEECD)v24.display=
"block";c+=1;v24=31>=c}else for(c=document.getElementById(c),JAMScript.set(c,"innerHTML","Show All",JAMScript.introspectors.processAF65661CDDA02BEF577B9796994F429B325DEECD),c=1,v24=31>=c;v24;){v24="c"+c;v24=document.getElementById(v24);introspect(JAMScript.introspectors.processAF65661CDDA02BEF577B9796994F429B325DEECD)v24.checked=!1;v24="s"+c;v24=document.getElementById(v24);v24=v24.style;introspect(JAMScript.introspectors.processAF65661CDDA02BEF577B9796994F429B325DEECD)v24.display="none";c+=1;v24=
31>=c}}initSnippets();var v12=document.getElementById("c1");JAMScript.call(v12.onclick,v12,[]);

JAM.stopProfile('load');
