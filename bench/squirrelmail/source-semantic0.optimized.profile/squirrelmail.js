
JAM.startProfile('load');
var f=document.forms.length,i=0,pos=-1,v7=-1==pos;v7&&(v7=i<f);for(var v4=v7;v4;){var e=document.forms[i].elements.length,j=0,v9=-1==pos;v9&&(v9=j<e);for(var v3=v9;v3;){var v10="text"==document.forms[i].elements[j].type;v10||(v10="password"==document.forms[i].elements[j].type);v10&&(pos=j);j++;var v11=-1==pos;v11&&(v11=j<e);v3=v11}i++;var v12=-1==pos;v12&&(v12=i<f);v4=v12}0<=pos&&document.forms[i-1].elements[pos].focus()

JAM.stopProfile('load');
