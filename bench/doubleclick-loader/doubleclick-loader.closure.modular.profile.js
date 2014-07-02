
JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
function rtmItURL() {
  var ifrmURL = window.location.href;
  var msgId = getURLParameter(ifrmURL, ";eb_trk=", ";");
  var siteId = getURLParameter(ifrmURL, "i/ebay.", ".");
  var cguid = getURLParameter(ifrmURL, ";cg=", ";");
  var isSecure = getURLParameter(ifrmURL, "ht", "://");
  var rtmItURL$$1 = "";
  if(siteId && msgId) {
    if(cguid) {
      if(isSecure && isSecure == "tps") {
        rtmItURL$$1 = "https://srv." + siteId + ".ebayrtm.com/rtm?RtmIt&ite=4&m=" + msgId + "&cg=" + cguid + "&ord=" + Math.random()
      }else {
        rtmItURL$$1 = "http://srx." + siteId + ".ebayrtm.com/rtm?RtmIt&ite=4&m=" + msgId + "&cg=" + cguid + "&ord=" + Math.random()
      }
    }else {
      if(isSecure && isSecure == "tps") {
        rtmItURL$$1 = "https://srv." + siteId + ".ebayrtm.com/rtm?RtmIt&ite=4&m=" + msgId + "&ord=" + Math.random()
      }else {
        rtmItURL$$1 = "http://srx." + siteId + ".ebayrtm.com/rtm?RtmIt&ite=4&m=" + msgId + "&ord=" + Math.random()
      }
    }
    document.createElement("img").src = rtmItURL$$1
  }
}
function getURLParameter(url$$3, name$$31, delimiter) {
  var p = name$$31;
  var n$$1 = p.length;
  var i$$1 = url$$3.indexOf(p);
  var v;
  var s$$2;
  var e$$4;
  var h$$4;
  if(i$$1 > -1) {
    s$$2 = i$$1 + n$$1;
    e$$4 = url$$3.indexOf(delimiter, s$$2);
    h$$4 = url$$3.indexOf("#", s$$2);
    if(e$$4 == -1) {
      e$$4 = url$$3.length
    }
    if(h$$4 > -1 && h$$4 < e$$4) {
      e$$4 = h$$4
    }
    v = url$$3.substring(s$$2, e$$4)
  }
  if(v == "ebaymt") {
    v = "ebaymotors"
  }else {
    if(v == "ebayus") {
      v = "main"
    }
  }
  return v
}
rtmItURL();

}

JAM.stopProfile('load');
