function runTest() {
function f(){prop="b";return 2}function g(){n=o;o={x:"other"};return-1}var o={a:5,b:7,c:"ok"},prop="a",n=null,v0=o,v1=prop,v10=f(),v11=g(),v5=v10+v11;JAMScript.set(v0,v1,v5+1);var v2="prop: "+prop;alert(v2);for(var q in n){var v12="n["+q,v6=v12+"]: ",v7=n[q],v3=v6+v7;alert(v3)}for(var p in o){var v13="o["+p,v8=v13+"]: ",v9=o[p],v4=v8+v9;alert(v4)};

  return prop === "b" && n["a"] === 2 && n["b"] === 7 && n["c"] === "ok" && o["x"] === "other";
}
