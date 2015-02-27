
JAM.startProfile('load');
document.getElementById=document.getElementsByTagName;var elt=JAM.call(document.getElementById,document,["ok"])

JAM.log("Result: " + (elt instanceof HTMLCollection));

JAM.stopProfile('load');
