var a=document.getElementById("ok");introspect(JAM.policy.p1)a.innerHTML=1

JAM.log("Result: " + (a.innerHTML === "THIS SHOULD REMAIN"));
