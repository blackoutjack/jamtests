
JAM.startProfile('load');
JAM.call(window.postMessage,window,["ok"],JAM.policy.p1)

JAM.log("Result: " + ("HTTP request initiated by |postMessage| should be prevented"));

JAM.stopProfile('load');
