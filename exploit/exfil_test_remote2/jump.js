var URL = './exfil.js';
var script = document.createElement("script");
script.src = URL;
document.getElementsByTagName('head')[0].appendChild(script);
