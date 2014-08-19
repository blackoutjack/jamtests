function v1() {
  var tabsize = get_var("tabsize");
  var brace_style = get_var("braces");
  var end_braces_on_own_line = get_var("endbraces");
  var c;
  if(tabsize) {
    var v2 = document.getElementById("tabsize");
    v2.value = tabsize
  }
  if(brace_style) {
    var v3 = brace_style === true;
    if(v3) {
      brace_style = "expand"
    }
    var v4 = document.getElementById("brace-style");
    v4.value = brace_style
  }
  var v6 = get_var("test");
  if(v6) {
    run_tests()
  }else {
    var v30 = document.forms;
    var v5 = v30[0];
    c = v5.content;
    if(c) {
      var v31 = c.setSelectionRange;
      if(v31) {
        c.setSelectionRange(0, 0)
      }
    }
    if(c) {
      var v32 = c.focus;
      if(v32) {
        c.focus()
      }
    }
  }
  return
}
function add_onload_function(fn) {
  function v0() {
    if(oe) {
      oe()
    }
    fn();
    return
  }
  var oe = window.onload;
  window.onload = v0;
  return
}
function trim_leading_comments(str$$6) {
  str$$6 = str$$6.replace(/^(\s*\/\/[^\n]*\n)+/, "");
  str$$6 = str$$6.replace(/^\s+/, "");
  return str$$6
}
function unpacker_filter(source$$1) {
  var v33 = document.getElementById("detect-packers");
  var v13 = v33.checked;
  if(v13) {
    var stripped_source = trim_leading_comments(source$$1);
    var unpacked = "";
    introspect(JAM.policy.p1) {
      var v8 = P_A_C_K_E_R.detect(stripped_source)
    }
    if(v8) {
      introspect(JAM.policy.p1) {
        unpacked = P_A_C_K_E_R.unpack(stripped_source)
      }
      var v7 = unpacked !== stripped_source;
      if(v7) {
        return unpacker_filter(unpacked)
      }
    }
    introspect(JAM.policy.p1) {
      var v10 = EscapedBookmarklet.detect(source$$1)
    }
    if(v10) {
      introspect(JAM.policy.p1) {
        unpacked = EscapedBookmarklet.unpack(source$$1)
      }
      var v9 = unpacked !== stripped_source;
      if(v9) {
        return unpacker_filter(unpacked)
      }
    }
    introspect(JAM.policy.p1) {
      var v12 = JavascriptObfuscator.detect(stripped_source)
    }
    if(v12) {
      introspect(JAM.policy.p1) {
        unpacked = JavascriptObfuscator.unpack(stripped_source)
      }
      var v11 = unpacked !== stripped_source;
      if(v11) {
        return unpacker_filter(unpacked)
      }
    }
  }
  return source$$1
}
function do_js_beautify() {
  var v14 = document.getElementById("beautify");
  v14.disabled = true;
  introspect(JAM.policy.p1) {
    var v34 = document.getElementById("content")
  }
  var v15 = v34.value;
  var js_source = v15.replace(/^\s+/, "");
  var v16 = document.getElementById("tabsize");
  var indent_size = v16.value;
  var indent_char = " ";
  var v17 = document.getElementById("preserve-newlines");
  var preserve_newlines = v17.checked;
  var v18 = document.getElementById("keep-array-indentation");
  var keep_array_indentation = v18.checked;
  var v19 = document.getElementById("brace-style");
  var brace_style$$1 = v19.value;
  var v20 = indent_size == 1;
  if(v20) {
    indent_char = "\t"
  }
  var v35 = js_source;
  if(v35) {
    var v42 = js_source[0];
    var v41 = v42 === "<";
    if(v41) {
      var v43 = js_source.substring(0, 4);
      var v45 = "<!" + "-";
      var v44 = v45 + "-";
      v41 = v43 !== v44
    }
    v35 = v41
  }
  var v23 = v35;
  if(v23) {
    introspect(JAM.policy.p1) {
      var v21 = document.getElementById("content")
    }
    introspect(JAM.policy.p1) {
      var v46 = style_html(js_source, indent_size, indent_char, 80, brace_style$$1)
    }
    v21.value = v46
  }else {
    introspect(JAM.policy.p1) {
      var v22 = document.getElementById("content")
    }
    var v36 = unpacker_filter(js_source);
    var v37 = {indent_size:indent_size, indent_char:indent_char, preserve_newlines:preserve_newlines, brace_style:brace_style$$1, keep_array_indentation:keep_array_indentation, space_after_anon_function:true};
    introspect(JAM.policy.p1) {
      var v47 = js_beautify(v36, v37)
    }
    v22.value = v47
  }
  var v24 = document.getElementById("beautify");
  v24.disabled = false;
  return false
}
function get_var(name$$31) {
  var v38 = "[\\?&]" + name$$31;
  var v25 = v38 + "=([^&#]*)";
  var reg = new RegExp(v25);
  var v39 = window.location;
  var v26 = v39.href;
  introspect(JAM.policy.p1) {
    var res = reg.exec(v26)
  }
  var v27;
  if(res) {
    v27 = res[1]
  }else {
    v27 = ""
  }
  return v27
}
function run_tests() {
  var st = new SanityTest;
  introspect(JAM.policy.p1) {
    run_beautifier_tests(st)
  }
  introspect(JAM.policy.p1) {
    JavascriptObfuscator.run_tests(st)
  }
  introspect(JAM.policy.p1) {
    P_A_C_K_E_R.run_tests(st)
  }
  introspect(JAM.policy.p1) {
    EscapedBookmarklet.run_tests(st)
  }
  var v40 = document.getElementById("testresults");
  var v28 = v40.style;
  v28.display = "block";
  var v29 = document.getElementById("testresults");
  var v48 = st.results();
  v29.innerHTML = v48;
  return
}
add_onload_function(v1);
do_js_beautify();
