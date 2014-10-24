
JAM.startProfile('load');
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
  JAM.set(window, "onload", v0);
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
    var v10 = JAM.call(P_A_C_K_E_R.detect, P_A_C_K_E_R, [stripped_source], JAM.policy.p1);
    if (v10) {
      unpacked = JAM.call(P_A_C_K_E_R.unpack, P_A_C_K_E_R, [stripped_source], JAM.policy.p1);
      var v9 = unpacked !== stripped_source;
      if (v9) {
        return unpacker_filter(unpacked);
      }
    }
    var v12 = JAM.call(EscapedBookmarklet.detect, EscapedBookmarklet, [source$$1], JAM.policy.p1);
    if (v12) {
      unpacked = JAM.call(EscapedBookmarklet.unpack, EscapedBookmarklet, [source$$1], JAM.policy.p1);
      var v11 = unpacked !== stripped_source;
      if (v11) {
        return unpacker_filter(unpacked);
      }
    }
    var v14 = JAM.call(JavascriptObfuscator.detect, JavascriptObfuscator, [stripped_source], JAM.policy.p1);
    if (v14) {
      unpacked = JAM.call(JavascriptObfuscator.unpack, JavascriptObfuscator, [stripped_source], JAM.policy.p1);
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
  var v36 = JAM.call(document.getElementById, document, ["content"], JAM.policy.p1);
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
    var v23 = JAM.call(document.getElementById, document, ["content"], JAM.policy.p1);
    var v48 = JAM.call(style_html, null, [js_source, indent_size, indent_char, 80, brace_style$$1], JAM.policy.p1);
    v23.value = v48;
  } else {
    var v24 = JAM.call(document.getElementById, document, ["content"], JAM.policy.p1);
    var v38 = unpacker_filter(js_source);
    var v39 = {indent_size:indent_size, indent_char:indent_char, preserve_newlines:preserve_newlines, brace_style:brace_style$$1, keep_array_indentation:keep_array_indentation, space_after_anon_function:true};
    var v49 = JAM.call(js_beautify, null, [v38, v39], JAM.policy.p1);
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
  var res = JAM.call(reg.exec, reg, [v28], JAM.policy.p1);
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
  JAM.call(run_beautifier_tests, null, [st], JAM.policy.p1);
  JAM.call(JavascriptObfuscator.run_tests, JavascriptObfuscator, [st], JAM.policy.p1);
  JAM.call(P_A_C_K_E_R.run_tests, P_A_C_K_E_R, [st], JAM.policy.p1);
  JAM.call(EscapedBookmarklet.run_tests, EscapedBookmarklet, [st], JAM.policy.p1);
  var v42 = document.getElementById("testresults");
  var v30 = v42.style;
  v30.display = "block";
  var v31 = document.getElementById("testresults");
  var v50 = st.results();
  JAM.set(v31, "innerHTML", v50);
  return;
}
add_onload_function(v1);
do_js_beautify()

JAM.stopProfile('load');
