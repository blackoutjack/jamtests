
JAM.startProfile('load');
var v0=document.forms,f=v0.length,i=0,pos=-1,v7=-1==pos;v7&&(v7=i<f);
for(var v4=v7;v4;){var v14=document.forms,v8=v14[i],v1=v8.elements,e=v1.length,j=0,v9=-1==pos;v9&&(v9=j<e);for(var v3=v9;v3;){var v27=document.forms,v25=v27[i],v23=v25.elements,v19=v23[j],v15=v19.type,v10="text"==v15,v17=!v10;if(v17)var v28=document.forms,v26=v28[i],v24=v26.elements,v20=v24[j],v16=v20.type,v10="password"==v16;var v2=v10;v2&&(pos=j);var j=j+1,v11=-1==pos;v11&&(v11=j<e);v3=v11}var i=i+1,v12=-1==pos;v12&&(v12=i<f);v4=v12}var v6=0<=pos;
if(v6){var v21=document.forms,v22=i-1,v18=v21[v22],v13=v18.elements,v5=v13[pos];v5.focus()};
JAM.stopProfile('load');

