function runTest() {
function v0(){JAMScript.call(notanid,null,[])}try{alert("OK1");var f=v0;JAMScript.call(f,null,[])}catch(ex){var v7=ex.name,v3=v7+": ",v4=ex.message,v1=v3+v4;console.error(v1)}try{alert("OK2")}catch(ex$$1){var v8=ex$$1.name,v5=v8+": ",v6=ex$$1.message,v2=v5+v6;console.error(v2)};

  return "\"OK1\" and \"OK2\" should be alerted";
}
