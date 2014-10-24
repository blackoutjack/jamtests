
JAM.startProfile('load');
function add_onload_function(fn) {
  var oe = window.onload;
  window.onload = function() {
    if (oe) {
      oe();
    }
    fn();
  };
}
add_onload_function(function() {
  var tabsize = get_var("tabsize");
  var brace_style = get_var("braces");
  var end_braces_on_own_line = get_var("endbraces");
  var c;
  if (tabsize) {
    document.getElementById("tabsize").value = tabsize;
  }
  if (brace_style) {
    if (brace_style === true) {
      brace_style = "expand";
    }
    document.getElementById("brace-style").value = brace_style;
  }
  if (get_var("test")) {
    run_tests();
  } else {
    c = document.forms[0].content;
    c && c.setSelectionRange && c.setSelectionRange(0, 0);
    c && c.focus && c.focus();
  }
});
function trim_leading_comments(str$$6) {
  str$$6 = str$$6.replace(/^(\s*\/\/[^\n]*\n)+/, "");
  str$$6 = str$$6.replace(/^\s+/, "");
  return str$$6;
}
function unpacker_filter(source$$1) {
  if (document.getElementById("detect-packers").checked) {
    var stripped_source = trim_leading_comments(source$$1);
    var unpacked = "";
    if (P_A_C_K_E_R.detect(stripped_source)) {
      unpacked = P_A_C_K_E_R.unpack(stripped_source);
      if (unpacked !== stripped_source) {
        return unpacker_filter(unpacked);
      }
    }
    if (EscapedBookmarklet.detect(source$$1)) {
      unpacked = EscapedBookmarklet.unpack(source$$1);
      if (unpacked !== stripped_source) {
        return unpacker_filter(unpacked);
      }
    }
    if (JavascriptObfuscator.detect(stripped_source)) {
      unpacked = JavascriptObfuscator.unpack(stripped_source);
      if (unpacked !== stripped_source) {
        return unpacker_filter(unpacked);
      }
    }
  }
  return source$$1;
}
function do_js_beautify() {
  document.getElementById("beautify").disabled = true;
  var js_source = document.getElementById("content").value.replace(/^\s+/, "");
  var indent_size = document.getElementById("tabsize").value;
  var indent_char = " ";
  var preserve_newlines = document.getElementById("preserve-newlines").checked;
  var keep_array_indentation = document.getElementById("keep-array-indentation").checked;
  var brace_style$$1 = document.getElementById("brace-style").value;
  if (indent_size == 1) {
    indent_char = "\t";
  }
  if (js_source && js_source[0] === "<" && js_source.substring(0, 4) !== "<!" + "-" + "-") {
    document.getElementById("content").value = style_html(js_source, indent_size, indent_char, 80, brace_style$$1);
  } else {
    document.getElementById("content").value = js_beautify(unpacker_filter(js_source), {indent_size:indent_size, indent_char:indent_char, preserve_newlines:preserve_newlines, brace_style:brace_style$$1, keep_array_indentation:keep_array_indentation, space_after_anon_function:true});
  }
  document.getElementById("beautify").disabled = false;
  return false;
}
function get_var(name$$30) {
  var reg = new RegExp("[\\?&]" + name$$30 + "=([^&#]*)");
  var res = reg.exec(window.location.href);
  return res ? res[1] : "";
}
function run_tests() {
  var st = new SanityTest;
  run_beautifier_tests(st);
  JavascriptObfuscator.run_tests(st);
  P_A_C_K_E_R.run_tests(st);
  EscapedBookmarklet.run_tests(st);
  document.getElementById("testresults").style.display = "block";
  document.getElementById("testresults").innerHTML = st.results();
}
do_js_beautify()

JAM.stopProfile('load');
