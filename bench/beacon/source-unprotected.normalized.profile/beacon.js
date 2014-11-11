
JAM.startProfile('load');
function v1() {
  function l$$1(b$$3) {
    b$$3 = b$$3 || _comscore;
    var c$$2 = 0;
    var d$$2 = b$$3[a$$1];
    var v3 = c$$2 < d$$2;
    for (;v3;) {
      var v2 = b$$3[c$$2];
      k$$1(v2);
      c$$2++;
      v3 = c$$2 < d$$2;
    }
    b$$3 = _comscore = [];
    return;
  }
  function k$$1(b$$2) {
    function v0() {
      var b$$inline_1 = j$$2;
      var v93 = this.src;
      var v78 = v93.indexOf("c1=2");
      var v51 = v78 < 0;
      var v80 = !v51;
      if (v80) {
        var v94 = b$$inline_1.d;
        var v79 = v94.createElement;
        v51 = !v79;
      }
      var v22 = v51;
      var v8 = !v22;
      if (v8) {
        var v23 = b$$inline_1.force_script_extension;
        var v53 = !v23;
        if (v53) {
          var v81 = this[h$$5];
          var v52 = v81 == 2;
          if (v52) {
            var v82 = this.height;
            var v108 = f$$1.random();
            var v95 = v108 * 100;
            var v83 = f$$1.round(v95);
            v52 = v82 > v83;
          }
          v23 = v52;
        }
        var v7 = v23;
        if (v7) {
          var v4 = b$$inline_1.d;
          var c$$inline_2 = v4.createElement(g$$1);
          var v24 = b$$inline_1.d;
          var v5 = v24.getElementsByTagName(g$$1);
          var d$$inline_3 = v5[0];
          var v54 = b$$inline_1.script_extension_url;
          var v84 = !v54;
          if (v84) {
            v54 = e$$5;
          }
          var v25 = v54;
          var v85 = this.src;
          var v55 = v85.match(i$$2);
          var v26 = v55[1];
          var v6 = [v25, "?", "c2=", v26];
          var j$$inline_4 = v6.join("");
          if (d$$inline_3) {
            c$$inline_2.src = j$$inline_4;
            c$$inline_2.async = !0;
            var v56 = d$$inline_3.parentNode;
            v56.insertBefore(c$$inline_2, d$$inline_3);
          }
        }
      }
      return;
    }
    var v27 = !b$$2;
    var v15 = !v27;
    if (v15) {
      var e$$6;
      var f$$2 = [];
      var g$$2;
      var h$$6 = 0;
      var i$$3;
      var j$$2;
      var k$$2 = "";
      var l$$2;
      for (l$$2 in b$$2) {
        var v9 = b$$2[l$$2];
        g$$2 = typeof v9;
        var v28 = g$$2 == "string";
        var v57 = !v28;
        if (v57) {
          v28 = g$$2 == "number";
        }
        var v10 = v28;
        if (v10) {
          var v29 = f$$2;
          var v30 = f$$2[a$$1];
          var v58 = l$$2 + "=";
          var v86 = b$$2[l$$2];
          var v59 = c$$1(v86);
          v29[v30] = v58 + v59;
          var v31;
          var v61 = l$$2 == "c2";
          if (v61) {
            v31 = k$$2 = b$$2[l$$2];
          } else {
            var v60 = l$$2 == "c1";
            if (v60) {
              v60 = h$$6 = 1;
            }
            v31 = v60;
          }
          v31;
        }
      }
      var v62 = f$$2[a$$1];
      var v32 = v62 <= 0;
      var v63 = !v32;
      if (v63) {
        v32 = k$$2 == "";
      }
      var v11 = v32;
      if (v11) {
        return;
      }
      var v33 = b$$2.options;
      var v64 = !v33;
      if (v64) {
        v33 = {};
      }
      j$$2 = v33;
      var v34 = j$$2.d;
      var v65 = !v34;
      if (v65) {
        v34 = document;
      }
      j$$2.d = v34;
      var v66 = j$$2.url_append;
      var v35 = typeof v66;
      var v14 = v35 == "string";
      if (v14) {
        var v36 = j$$2.url_append;
        var v12 = v36.replace(/&amp;/, "&");
        i$$3 = v12.split("&");
        l$$2 = 0;
        var n$$2 = i$$3[a$$1];
        var o$$1;
        var v13 = l$$2 < n$$2;
        for (;v13;) {
          var v37 = i$$3[l$$2];
          o$$1 = v37.split("=");
          var v67 = o$$1[a$$1];
          var v38 = v67 == 2;
          if (v38) {
            var v68 = f$$2;
            var v69 = f$$2[a$$1];
            var v96 = o$$1[0];
            var v87 = v96 + "=";
            var v97 = o$$1[1];
            var v88 = c$$1(v97);
            v68[v69] = v87 + v88;
          }
          l$$2++;
          v13 = l$$2 < n$$2;
        }
      }
      var v70;
      var v118 = j$$2.d;
      var v109 = v118.URL;
      var v98 = v109.charAt(4);
      var v89 = v98 == "s";
      if (v89) {
        v70 = "s://sb";
      } else {
        v70 = "://b";
      }
      var v39 = v70;
      var v71;
      if (h$$6) {
        v71 = "";
      } else {
        v71 = "c1=2&";
      }
      var v40 = v71;
      var v72 = f$$2.join("&");
      var v41 = v72.replace(/&$/, "");
      e$$6 = ["http", v39, d$$1, "/b?", v40, v41];
      var v42 = e$$6.join("");
      udm_(v42, v0);
    }
    return;
  }
  var a$$1 = "length";
  var b$$1 = self;
  var v16;
  var v43 = b$$1.encodeURIComponent;
  if (v43) {
    v16 = encodeURIComponent;
  } else {
    v16 = escape;
  }
  var c$$1 = v16;
  var d$$1 = ".scorecardresearch.com";
  var v17 = "//app" + d$$1;
  var e$$5 = v17 + "/s2e/invite";
  var f$$1 = Math;
  var g$$1 = "script";
  var h$$5 = "width";
  var i$$2 = /c2=(\d*)&/;
  var j$$1;
  l$$1();
  var v44;
  var v73 = j$$1 = b$$1.COMSCORE;
  if (v73) {
    j$$1.purge = l$$1;
    v44 = j$$1.beacon = k$$1;
  } else {
    v44 = COMSCORE = {purge:l$$1, beacon:k$$1};
  }
  v44;
  return;
}
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
  var v18 = r.encodeURIComponent;
  var v45 = !v18;
  if (v45) {
    v18 = escape;
  }
  var s$$2 = v18;
  var v46 = e$$4[g](c);
  var v20 = v46 + 1;
  if (v20) {
    p = 0;
    o = e$$4.split(";");
    q = o[i$$1];
    var v19 = p < q;
    for (;v19;) {
      var v47 = o[p];
      n$$1 = v47[g](c);
      var v48 = n$$1 + 1;
      if (v48) {
        var v99 = o[p];
        var v110 = c[i$$1];
        var v100 = n$$1 + v110;
        var v90 = v99[h$$4](v100);
        var v74 = unescape(v90);
        f = m + v74;
      }
      p++;
      v19 = p < q;
    }
  }
  var v140 = l + "_t=";
  var v143 = new Date;
  var v141 = +v143;
  var v137 = v140 + v141;
  var v135 = v137 + l;
  var v133 = v135 + "c=";
  var v138 = d.characterSet;
  var v142 = !v138;
  if (v142) {
    v138 = d.defaultCharset;
  }
  var v136 = v138;
  var v139 = !v136;
  if (v139) {
    v136 = "";
  }
  var v134 = v136;
  var v131 = v133 + v134;
  var v129 = v131 + "&c8=";
  var v132 = d.title;
  var v130 = s$$2(v132);
  var v128 = v129 + v130;
  var v124 = v128 + f;
  var v119 = v124 + "&c7=";
  var v125 = d.URL;
  var v120 = s$$2(v125);
  var v111 = v119 + v120;
  var v101 = v111 + "&c9=";
  var v112 = d.referrer;
  var v102 = s$$2(v112);
  var v91 = v101 + v102;
  a = a + v91;
  var v103 = a[i$$1];
  var v92 = v103 > j;
  if (v92) {
    var v104 = a[g](m);
    v92 = v104 > 0;
  }
  var v75 = v92;
  if (v75) {
    var v113 = j - 8;
    var v105 = a[h$$4](0, v113);
    k = v105.lastIndexOf(m);
    var v126 = a[h$$4](0, k);
    var v121 = v126 + l;
    var v114 = v121 + "cut=";
    var v127 = k + 1;
    var v122 = a[h$$4](v127);
    var v115 = s$$2(v122);
    var v106 = v114 + v115;
    a = v106[h$$4](0, j);
  }
  var v49;
  var v76 = d.images;
  if (v76) {
    n$$1 = new Image;
    var v116 = r.ns_p;
    var v123 = !v116;
    if (v123) {
      ns_p = n$$1;
    }
    var v117 = typeof b;
    var v107 = v117 == "function";
    if (v107) {
      n$$1.onload = n$$1.onerror = b;
    }
    v49 = n$$1.src = a;
  } else {
    v49 = d.write("<", "p", "><", 'img src="', a, '" height="1" width="1" alt="*"', "><", "/p", ">");
  }
  v49;
  return;
}
var _comscore = _comscore || [];
var v21 = {c1:"2", c2:"6770185"};
_comscore.push(v21);
var v77 = typeof _comscore;
var v50 = v77 == "undefined";
if (v50) {
  _comscore = [];
}
v1()

JAM.stopProfile('load');
