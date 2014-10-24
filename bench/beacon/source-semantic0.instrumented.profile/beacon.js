
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
      c$$2 = c$$2 + 1;
      v3 = c$$2 < d$$2;
    }
    b$$3 = _comscore = [];
    return;
  }
  function k$$1(b$$2) {
    function v0() {
      var b$$inline_1 = j$$2;
      var v95 = this.src;
      introspect(JAM.policy.p3) {
        var v79 = v95.indexOf("c1=2")
      }
      var v51 = v79 < 0;
      var v81 = !v51;
      if (v81) {
        var v96 = b$$inline_1.d;
        var v80 = v96.createElement;
        v51 = !v80;
      }
      var v22 = v51;
      var v8 = !v22;
      if (v8) {
        var v23 = b$$inline_1.force_script_extension;
        var v53 = !v23;
        if (v53) {
          var v82 = this[h$$5];
          var v52 = v82 == 2;
          if (v52) {
            var v83 = this.height;
            introspect(JAM.policy.p3) {
              var v110 = f$$1.random()
            }
            var v97 = v110 * 100;
            introspect(JAM.policy.p3) {
              var v84 = f$$1.round(v97)
            }
            v52 = v83 > v84;
          }
          v23 = v52;
        }
        var v7 = v23;
        if (v7) {
          var v4 = b$$inline_1.d;
          introspect(JAM.policy.p3) {
            var c$$inline_2 = v4.createElement(g$$1)
          }
          var v24 = b$$inline_1.d;
          introspect(JAM.policy.p3) {
            var v5 = v24.getElementsByTagName(g$$1)
          }
          var d$$inline_3 = v5[0];
          var v54 = b$$inline_1.script_extension_url;
          var v85 = !v54;
          if (v85) {
            v54 = e$$5;
          }
          var v25 = v54;
          var v86 = this.src;
          introspect(JAM.policy.p3) {
            var v55 = v86.match(i$$2)
          }
          var v26 = v55[1];
          var v6 = [v25, "?", "c2=", v26];
          introspect(JAM.policy.p3) {
            var j$$inline_4 = v6.join("")
          }
          if (d$$inline_3) {
            c$$inline_2.src = j$$inline_4;
            c$$inline_2.async = !0;
            var v56 = d$$inline_3.parentNode;
            introspect(JAM.policy.p3) {
              v56.insertBefore(c$$inline_2, d$$inline_3);
            }
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
          var v87 = b$$2[l$$2];
          introspect(JAM.policy.p3) {
            var v59 = c$$1(v87)
          }
          introspect(JAM.policy.p2) {
            v29[v30] = v58 + v59;
          }
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
        introspect(JAM.policy.p3) {
          var v12 = v36.replace(/&amp;/, "&")
        }
        introspect(JAM.policy.p3) {
          i$$3 = v12.split("&");
        }
        l$$2 = 0;
        var n$$2 = i$$3[a$$1];
        var o$$1;
        var v13 = l$$2 < n$$2;
        for (;v13;) {
          var v37 = i$$3[l$$2];
          introspect(JAM.policy.p3) {
            o$$1 = v37.split("=");
          }
          var v67 = o$$1[a$$1];
          var v38 = v67 == 2;
          if (v38) {
            var v68 = f$$2;
            var v69 = f$$2[a$$1];
            var v98 = o$$1[0];
            var v88 = v98 + "=";
            var v99 = o$$1[1];
            introspect(JAM.policy.p3) {
              var v89 = c$$1(v99)
            }
            introspect(JAM.policy.p2) {
              v68[v69] = v88 + v89;
            }
          }
          l$$2 = l$$2 + 1;
          v13 = l$$2 < n$$2;
        }
      }
      var v70;
      var v120 = j$$2.d;
      var v111 = v120.URL;
      introspect(JAM.policy.p3) {
        var v100 = v111.charAt(4)
      }
      var v90 = v100 == "s";
      if (v90) {
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
      introspect(JAM.policy.p3) {
        var v72 = f$$2.join("&")
      }
      introspect(JAM.policy.p3) {
        var v41 = v72.replace(/&$/, "")
      }
      e$$6 = ["http", v39, d$$1, "/b?", v40, v41];
      introspect(JAM.policy.p3) {
        var v42 = e$$6.join("")
      }
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
  introspect(JAM.policy.p3) {
    var v46 = e$$4[g](c)
  }
  var v20 = v46 + 1;
  if (v20) {
    p = 0;
    introspect(JAM.policy.p3) {
      o = e$$4.split(";");
    }
    q = o[i$$1];
    var v19 = p < q;
    for (;v19;) {
      var v47 = o[p];
      introspect(JAM.policy.p3) {
        n$$1 = v47[g](c);
      }
      var v48 = n$$1 + 1;
      if (v48) {
        var v74 = m;
        var v101 = o[p];
        var v112 = c[i$$1];
        var v102 = n$$1 + v112;
        introspect(JAM.policy.p3) {
          var v91 = v101[h$$4](v102)
        }
        var v75 = unescape(v91);
        f = v74 + v75;
      }
      p = p + 1;
      v19 = p < q;
    }
  }
  var v92 = a;
  var v142 = l + "_t=";
  var v145 = new Date;
  var v143 = +v145;
  var v139 = v142 + v143;
  var v137 = v139 + l;
  var v135 = v137 + "c=";
  var v140 = d.characterSet;
  var v144 = !v140;
  if (v144) {
    v140 = d.defaultCharset;
  }
  var v138 = v140;
  var v141 = !v138;
  if (v141) {
    v138 = "";
  }
  var v136 = v138;
  var v133 = v135 + v136;
  var v131 = v133 + "&c8=";
  var v134 = d.title;
  introspect(JAM.policy.p3) {
    var v132 = s$$2(v134)
  }
  var v130 = v131 + v132;
  var v126 = v130 + f;
  var v121 = v126 + "&c7=";
  var v127 = d.URL;
  introspect(JAM.policy.p3) {
    var v122 = s$$2(v127)
  }
  var v113 = v121 + v122;
  var v103 = v113 + "&c9=";
  var v114 = d.referrer;
  introspect(JAM.policy.p3) {
    var v104 = s$$2(v114)
  }
  var v93 = v103 + v104;
  a = v92 + v93;
  var v105 = a[i$$1];
  var v94 = v105 > j;
  if (v94) {
    introspect(JAM.policy.p3) {
      var v106 = a[g](m)
    }
    v94 = v106 > 0;
  }
  var v76 = v94;
  if (v76) {
    var v115 = j - 8;
    introspect(JAM.policy.p3) {
      var v107 = a[h$$4](0, v115)
    }
    introspect(JAM.policy.p3) {
      k = v107.lastIndexOf(m);
    }
    introspect(JAM.policy.p3) {
      var v128 = a[h$$4](0, k)
    }
    var v123 = v128 + l;
    var v116 = v123 + "cut=";
    var v129 = k + 1;
    introspect(JAM.policy.p3) {
      var v124 = a[h$$4](v129)
    }
    introspect(JAM.policy.p3) {
      var v117 = s$$2(v124)
    }
    var v108 = v116 + v117;
    introspect(JAM.policy.p3) {
      a = v108[h$$4](0, j);
    }
  }
  var v49;
  var v77 = d.images;
  if (v77) {
    n$$1 = new Image;
    var v118 = r.ns_p;
    var v125 = !v118;
    if (v125) {
      ns_p = n$$1;
    }
    var v119 = typeof b;
    var v109 = v119 == "function";
    if (v109) {
      n$$1.onload = n$$1.onerror = b;
    }
    v49 = n$$1.src = a;
  } else {
    introspect(JAM.policy.p3) {
      v49 = d.write("<", "p", "><", 'img src="', a, '" height="1" width="1" alt="*"', "><", "/p", ">");
    }
  }
  v49;
  return;
}
var _comscore = _comscore || [];
var v21 = {c1:"2", c2:"6770185"};
introspect(JAM.policy.p3) {
  _comscore.push(v21);
}
var v78 = typeof _comscore;
var v50 = v78 == "undefined";
if (v50) {
  _comscore = [];
}
v1()

JAM.stopProfile('load');
