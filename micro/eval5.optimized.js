function runTest() {
function f1(){for(var a=name,i=0,v1=2>i;v1;)v1=2*i,a[i]=letters[v1],i+=1,v1=2>i}function f2(){for(var a=name,i=0,v3=2>i;v3;){var v3=i+2,v5=2*i,v5=v5+1;a[v3]=letters[v5];i+=1;v3=2>i}}var letters=["e","a","v","l"],name=[];f1();f2();var name=name.join(""),f3=this[name],code="String.prototype.indexOf = String.prototype.toLowerCase";JAMScript.call(f3,null,[code]);var result=4;

  return result === "you've been eval'd";
}
