function v1() {
  var tabsize = get_var("tabsize");
  var brace_style = get_var("braces");
  var end_braces_on_own_line = get_var("endbraces");
  var c;
  if (tabsize) {
    var v2 = document.getElementById("tabsize");
    v2.value = tabsize;
  }
  if (brace_style) {
    var v3 = brace_style === true;
    if (v3) {
      brace_style = "expand";
    }
    var v4 = document.getElementById("brace-style");
    v4.value = brace_style;
  }
  var v8 = get_var("test");
  if (v8) {
    run_tests();
  } else {
    var v32 = document.forms;
    var v5 = v32[0];
    c = v5.content;
    var v33 = c;
    if (v33) {
      v33 = c.setSelectionRange;
    }
    var v6 = v33;
    if (v6) {
      c.setSelectionRange(0, 0);
    }
    var v34 = c;
    if (v34) {
      v34 = c.focus;
    }
    var v7 = v34;
    if (v7) {
      c.focus();
    }
  }
  return;
}
function add_onload_function(fn) {
  function v0() {
    if (oe) {
      oe();
    }
    fn();
    return;
  }
  var oe = window.onload;
  window.onload = v0;
  return;
}
function trim_leading_comments(str$$6) {
  str$$6 = str$$6.replace(/^(\s*\/\/[^\n]*\n)+/, "");
  str$$6 = str$$6.replace(/^\s+/, "");
  return str$$6;
}
function unpacker_filter(source$$1) {
  var v35 = document.getElementById("detect-packers");
  var v15 = v35.checked;
  if (v15) {
    var stripped_source = trim_leading_comments(source$$1);
    var unpacked = "";
    introspect(JAM.policy.p1) {
      var v10 = P_A_C_K_E_R.detect(stripped_source)
    }
    if (v10) {
      introspect(JAM.policy.p1) {
        unpacked = P_A_C_K_E_R.unpack(stripped_source);
      }
      var v9 = unpacked !== stripped_source;
      if (v9) {
        return unpacker_filter(unpacked);
      }
    }
    introspect(JAM.policy.p1) {
      var v12 = EscapedBookmarklet.detect(source$$1)
    }
    if (v12) {
      introspect(JAM.policy.p1) {
        unpacked = EscapedBookmarklet.unpack(source$$1);
      }
      var v11 = unpacked !== stripped_source;
      if (v11) {
        return unpacker_filter(unpacked);
      }
    }
    introspect(JAM.policy.p1) {
      var v14 = JavascriptObfuscator.detect(stripped_source)
    }
    if (v14) {
      introspect(JAM.policy.p1) {
        unpacked = JavascriptObfuscator.unpack(stripped_source);
      }
      var v13 = unpacked !== stripped_source;
      if (v13) {
        return unpacker_filter(unpacked);
      }
    }
  }
  return source$$1;
}
function do_js_beautify() {
  var v16 = document.getElementById("beautify");
  v16.disabled = true;
  introspect(JAM.policy.p1) {
    var v36 = document.getElementById("content")
  }
  var v17 = v36.value;
  var js_source = v17.replace(/^\s+/, "");
  var v18 = document.getElementById("tabsize");
  var indent_size = v18.value;
  var indent_char = " ";
  var v19 = document.getElementById("preserve-newlines");
  var preserve_newlines = v19.checked;
  var v20 = document.getElementById("keep-array-indentation");
  var keep_array_indentation = v20.checked;
  var v21 = document.getElementById("brace-style");
  var brace_style$$1 = v21.value;
  var v22 = indent_size == 1;
  if (v22) {
    indent_char = "\t";
  }
  var v43 = js_source;
  if (v43) {
    var v46 = js_source[0];
    v43 = v46 === "<";
  }
  var v37 = v43;
  if (v37) {
    var v44 = js_source.substring(0, 4);
    var v47 = "<!" + "-";
    var v45 = v47 + "-";
    v37 = v44 !== v45;
  }
  var v25 = v37;
  if (v25) {
    introspect(JAM.policy.p1) {
      var v23 = document.getElementById("content")
    }
    introspect(JAM.policy.p1) {
      var v48 = style_html(js_source, indent_size, indent_char, 80, brace_style$$1)
    }
    v23.value = v48;
  } else {
    introspect(JAM.policy.p1) {
      var v24 = document.getElementById("content")
    }
    var v38 = unpacker_filter(js_source);
    var v39 = {indent_size:indent_size, indent_char:indent_char, preserve_newlines:preserve_newlines, brace_style:brace_style$$1, keep_array_indentation:keep_array_indentation, space_after_anon_function:true};
    introspect(JAM.policy.p1) {
      var v49 = js_beautify(v38, v39)
    }
    v24.value = v49;
  }
  var v26 = document.getElementById("beautify");
  v26.disabled = false;
  return false;
}
function get_var(name$$30) {
  var v40 = "[\\?&]" + name$$30;
  var v27 = v40 + "=([^&#]*)";
  var reg = new RegExp(v27);
  var v41 = window.location;
  var v28 = v41.href;
  introspect(JAM.policy.p1) {
    var res = reg.exec(v28)
  }
  var v29;
  if (res) {
    v29 = res[1];
  } else {
    v29 = "";
  }
  return v29;
}
function run_tests() {
  var st = new SanityTest;
  introspect(JAM.policy.p1) {
    run_beautifier_tests(st);
  }
  introspect(JAM.policy.p1) {
    JavascriptObfuscator.run_tests(st);
  }
  introspect(JAM.policy.p1) {
    P_A_C_K_E_R.run_tests(st);
  }
  introspect(JAM.policy.p1) {
    EscapedBookmarklet.run_tests(st);
  }
  var v42 = document.getElementById("testresults");
  var v30 = v42.style;
  v30.display = "block";
  var v31 = document.getElementById("testresults");
  var v50 = st.results();
  v31.innerHTML = v50;
  return;
}
add_onload_function(v1);
do_js_beautify()
