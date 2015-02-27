
JAM.startProfile('load');
window.postMessage("ok")

JAM.log("Result: " + ("HTTP request initiated by |postMessage| should be prevented"));

JAM.stopProfile('load');
