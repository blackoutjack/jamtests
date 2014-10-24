
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
var _comscore = _comscore || [];
_comscore.push({c1:"2", c2:"6770185"});
function udm_(a, b) {
  var c = "comScore=";
  var d = document;
  var e$$4 = d.cookie;
  var f = "";
  var g = "indexOf";
  var h$$4 = "substring";
  var i$$1 = "length";
  var j = 2048;
  var k;
  var l = "&ns_";
  var m = "&";
  var n$$1;
  var o;
  var p;
  var q;
  var r = window;
  var s$$2 = r.encodeURIComponent || escape;
  if (e$$4[g](c) + 1) {
    p = 0, o = e$$4.split(";"), q = o[i$$1];
    for (;p < q;p++) {
      n$$1 = o[p][g](c), n$$1 + 1 && (f = m + unescape(o[p][h$$4](n$$1 + c[i$$1])));
    }
  }
  a += l + "_t=" + +new Date + l + "c=" + (d.characterSet || d.defaultCharset || "") + "&c8=" + s$$2(d.title) + f + "&c7=" + s$$2(d.URL) + "&c9=" + s$$2(d.referrer), a[i$$1] > j && a[g](m) > 0 && (k = a[h$$4](0, j - 8).lastIndexOf(m), a = (a[h$$4](0, k) + l + "cut=" + s$$2(a[h$$4](k + 1)))[h$$4](0, j)), d.images ? (n$$1 = new Image, r.ns_p || (ns_p = n$$1), typeof b == "function" && (n$$1.onload = n$$1.onerror = b), n$$1.src = a) : d.write("<", "p", "><", 'img src="', a, '" height="1" width="1" alt="*"', 
  "><", "/p", ">");
}
typeof _comscore == "undefined" && (_comscore = []), function() {
  var a$$1 = "length";
  var b$$1 = self;
  var c$$1 = b$$1.encodeURIComponent ? encodeURIComponent : escape;
  var d$$1 = ".scorecardresearch.com";
  var e$$5 = "//app" + d$$1 + "/s2e/invite";
  var f$$1 = Math;
  var g$$1 = "script";
  var h$$5 = "width";
  var i$$2 = /c2=(\d*)&/;
  var j$$1;
  var k$$1 = function(b$$2) {
    if (!!b$$2) {
      var e$$6;
      var f$$2 = [];
      var g$$2;
      var h$$6 = 0;
      var i$$3;
      var j$$2;
      var k$$2 = "";
      var l$$2;
      for (l$$2 in b$$2) {
        g$$2 = typeof b$$2[l$$2];
        if (g$$2 == "string" || g$$2 == "number") {
          f$$2[f$$2[a$$1]] = l$$2 + "=" + c$$1(b$$2[l$$2]), l$$2 == "c2" ? k$$2 = b$$2[l$$2] : l$$2 == "c1" && (h$$6 = 1);
        }
      }
      if (f$$2[a$$1] <= 0 || k$$2 == "") {
        return;
      }
      j$$2 = b$$2.options || {}, j$$2.d = j$$2.d || document;
      if (typeof j$$2.url_append == "string") {
        i$$3 = j$$2.url_append.replace(/&amp;/, "&").split("&");
        l$$2 = 0;
        var n$$2 = i$$3[a$$1];
        var o$$1;
        for (;l$$2 < n$$2;l$$2++) {
          o$$1 = i$$3[l$$2].split("="), o$$1[a$$1] == 2 && (f$$2[f$$2[a$$1]] = o$$1[0] + "=" + c$$1(o$$1[1]));
        }
      }
      e$$6 = ["http", j$$2.d.URL.charAt(4) == "s" ? "s://sb" : "://b", d$$1, "/b?", h$$6 ? "" : "c1=2&", f$$2.join("&").replace(/&$/, "")], udm_(e$$6.join(""), function() {
        m$$1(this, j$$2);
      });
    }
  };
  var l$$1 = function(b$$3) {
    b$$3 = b$$3 || _comscore;
    var c$$2 = 0;
    var d$$2 = b$$3[a$$1];
    for (;c$$2 < d$$2;c$$2++) {
      k$$1(b$$3[c$$2]);
    }
    b$$3 = _comscore = [];
  };
  var m$$1 = function(a$$2, b$$4) {
    if (!(a$$2.src.indexOf("c1=2") < 0 || !b$$4.d.createElement)) {
      if (b$$4.force_script_extension || a$$2[h$$5] == 2 && a$$2.height > f$$1.round(f$$1.random() * 100)) {
        var c$$3 = b$$4.d.createElement(g$$1);
        var d$$3 = b$$4.d.getElementsByTagName(g$$1)[0];
        var j$$3 = [b$$4.script_extension_url || e$$5, "?", "c2=", a$$2.src.match(i$$2)[1]].join("");
        d$$3 && (c$$3.src = j$$3, c$$3.async = !0, d$$3.parentNode.insertBefore(c$$3, d$$3));
      }
    }
  };
  l$$1(), (j$$1 = b$$1.COMSCORE) ? (j$$1.purge = l$$1, j$$1.beacon = k$$1) : COMSCORE = {purge:l$$1, beacon:k$$1};
}()

}

JAM.stopProfile('load');
