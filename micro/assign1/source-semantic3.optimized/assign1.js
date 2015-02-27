var a=0,b=10,c=20,a=b+=c+=2;alert("a: "+a+" b: "+b+" c: "+c)

JAM.log("Result: " + (a === 32 && b === 32 && c === 22));
