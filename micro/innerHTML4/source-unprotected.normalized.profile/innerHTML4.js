
JAM.startProfile('load');
var elt = document.getElementById("note");
elt.innerHTML = "<p>This is a <b>p</b> element</p><Img src = 'http://www.blackoutjack.com/pics/TweekGhost.jpg' />"

JAM.log("Result: " + ("Retrieval of the image should be prevented"));

JAM.stopProfile('load');
