
JAM.startProfile('load');
function snipDisplay(){var c="c1",p="s1";if(1==document.getElementById(c).checked){c=document.getElementById(p).style;introspect(JAM.policy.p1)c.display="block"}else{c=document.getElementById(p).style;introspect(JAM.policy.p1)c.displayx="none"}}function initSnippets(){function v0(){snipDisplay()}JAM.set(document.getElementById("c1"),"onclick",v0,JAM.policy.p1)}
function snapDisplay(c){if("Show All"==document.getElementById(c).innerHTML){JAM.set(document.getElementById(c),"innerHTML","Hide All",JAM.policy.p1);c=1;for(var v6=31>=c;v6;){v6=document.getElementById("c"+c);introspect(JAM.policy.p1)v6.checked=!0;v6=document.getElementById("s"+c).style;introspect(JAM.policy.p1)v6.display="block";c+=1;v6=31>=c}}else for(JAM.set(document.getElementById(c),"innerHTML","Show All",JAM.policy.p1),c=1,v6=31>=c;v6;){v6=document.getElementById("c"+c);introspect(JAM.policy.p1)v6.checked=
!1;v6=document.getElementById("s"+c).style;introspect(JAM.policy.p1)v6.display="none";c+=1;v6=31>=c}}initSnippets();document.getElementById("c1").onclick()

JAM.stopProfile('load');
