
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
function insertHeader() {
  AJS.DI(tmpl_header);
}
function insertMenu(current_page) {
  function create_item(cls$$3, name$$33) {
    var item = AJS.LI({"class":cls$$3});
    AJS.ACN(item, AJS.A({href:LINKS[cls$$3]}, name$$33));
    return item;
  }
  var menu = AJS.UL({id:"menu"});
  var items = [create_item("installation", "Installation"), create_item("examples", "Examples"), create_item("nrm_usage", "Normal usage"), create_item("adv_usage", "Advance usage"), create_item("cmpr", "Compressing GreyBox"), create_item("about", "About")];
  AJS.map(items, function(item$$1) {
    if (item$$1.className == current_page) {
      AJS.addClass(AJS.$bytc("a", null, item$$1)[0], "current");
    }
    AJS.ACN(menu, item$$1);
  });
  AJS.DI(menu);
}
function insertCode() {
  var code$$2 = AJS.join("\n", arguments);
  var result$$2 = "<pre><code>";
  code$$2 = code$$2.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  result$$2 += code$$2;
  result$$2 += "</code></pre>";
  document.write(result$$2);
}
var GB_ROOT_DIR = "./";
if (!window.AJS) {
  var AJS = {BASE_URL:"", ajaxErrorHandler:null, getQueryArgument:function(var_name) {
    var query$$2 = window.location.search.substring(1);
    var vars = query$$2.split("&");
    var i$$1 = 0;
    for (;i$$1 < vars.length;i$$1++) {
      var pair = vars[i$$1].split("=");
      if (pair[0] == var_name) {
        return pair[1];
      }
    }
    return null;
  }, _agent:navigator.userAgent.toLowerCase(), _agent_version:navigator.productSub, isIe:function() {
    return AJS._agent.indexOf("msie") != -1 && AJS._agent.indexOf("opera") == -1;
  }, isIe8:function() {
    return AJS._agent.indexOf("msie 8") != -1;
  }, isSafari:function(all) {
    if (all) {
      return AJS._agent.indexOf("khtml");
    }
    return AJS._agent.indexOf("khtml") != -1 && AJS._agent.match(/3\.\d\.\d safari/) == null;
  }, isOpera:function() {
    return AJS._agent.indexOf("opera") != -1;
  }, isMozilla:function() {
    return AJS._agent.indexOf("gecko") != -1 && AJS._agent_version >= 20030210;
  }, isMac:function() {
    return AJS._agent.indexOf("macintosh") != -1;
  }, isCamino:function() {
    return AJS._agent.indexOf("camino") != -1;
  }, createArray:function(v) {
    if (AJS.isArray(v) && !AJS.isString(v)) {
      return v;
    } else {
      if (!v) {
        return[];
      } else {
        return[v];
      }
    }
  }, forceArray:function(args) {
    var r = [];
    var i$$2 = 0;
    for (;i$$2 < args.length;i$$2++) {
      r.push(args[i$$2]);
    }
    return r;
  }, join:function(delim, list) {
    try {
      return list.join(delim);
    } catch (e$$5) {
      var r$$1 = list[0] || "";
      AJS.map(list, function(elm) {
        r$$1 += delim + elm;
      }, 1);
      return r$$1 + "";
    }
  }, isIn:function(elm$$1, list$$1) {
    var i$$3 = AJS.getIndex(elm$$1, list$$1);
    if (i$$3 != -1) {
      return true;
    } else {
      return false;
    }
  }, getIndex:function(elm$$2, list$$2, eval_fn) {
    var i$$4 = 0;
    for (;i$$4 < list$$2.length;i$$4++) {
      if (eval_fn && eval_fn(list$$2[i$$4]) || elm$$2 == list$$2[i$$4]) {
        return i$$4;
      }
    }
    return-1;
  }, getFirst:function(list$$3) {
    if (list$$3.length > 0) {
      return list$$3[0];
    } else {
      return null;
    }
  }, getLast:function(list$$4) {
    if (list$$4.length > 0) {
      return list$$4[list$$4.length - 1];
    } else {
      return null;
    }
  }, getRandom:function(list$$5) {
    return list$$5[Math.floor(Math.random() * list$$5.length)];
  }, update:function(l1, l2) {
    var i$$5;
    for (i$$5 in l2) {
      l1[i$$5] = l2[i$$5];
    }
    return l1;
  }, flattenList:function(list$$6) {
    function _flatten(r$$3, l) {
      AJS.map(l, function(o) {
        if (o == null) {
        } else {
          if (AJS.isArray(o)) {
            _flatten(r$$3, o);
          } else {
            r$$3.push(o);
          }
        }
      });
    }
    var has_list = false;
    var new_list = [];
    var i$$6 = 0;
    for (;i$$6 < list$$6.length;i$$6++) {
      var elm$$3 = list$$6[i$$6];
      if (AJS.isArray(elm$$3)) {
        has_list = true;
        break;
      }
      if (elm$$3 != null) {
        new_list.push(elm$$3);
      }
    }
    if (!has_list) {
      return new_list;
    }
    var r$$2 = [];
    _flatten(r$$2, list$$6);
    return r$$2;
  }, flattenElmArguments:function(args$$1) {
    var f = AJS.forceArray(args$$1);
    return AJS.flattenList(f);
  }, map:function(list$$7, fn, start_index, end_index) {
    var i$$7 = 0;
    var l$$1 = list$$7.length;
    if (start_index) {
      i$$7 = start_index;
    }
    if (end_index) {
      l$$1 = end_index;
    }
    for (;i$$7 < l$$1;i$$7++) {
      var val = fn(list$$7[i$$7], i$$7);
      if (val != undefined) {
        return val;
      }
    }
  }, rmap:function(list$$8, fn$$1) {
    var i$$8 = list$$8.length - 1;
    var l$$2 = 0;
    for (;i$$8 >= l$$2;i$$8--) {
      var val$$1 = fn$$1.apply(null, [list$$8[i$$8], i$$8]);
      if (val$$1 != undefined) {
        return val$$1;
      }
    }
  }, filter:function(list$$9, fn$$2, start_index$$1, end_index$$1) {
    var r$$4 = [];
    AJS.map(list$$9, function(elm$$4) {
      if (fn$$2(elm$$4)) {
        r$$4.push(elm$$4);
      }
    }, start_index$$1, end_index$$1);
    return r$$4;
  }, partial:function(fn$$3) {
    var args$$2 = AJS.$FA(arguments);
    args$$2.shift();
    return function() {
      args$$2 = args$$2.concat(AJS.$FA(arguments));
      return fn$$3.apply(window, args$$2);
    };
  }, getElement:function(id) {
    if (AJS.isString(id) || AJS.isNumber(id)) {
      return document.getElementById(id);
    } else {
      return id;
    }
  }, getElements:function() {
    var args$$3 = AJS.flattenElmArguments(arguments);
    var elements = new Array;
    var i$$9 = 0;
    for (;i$$9 < args$$3.length;i$$9++) {
      var element$$2 = AJS.getElement(args$$3[i$$9]);
      elements.push(element$$2);
    }
    return elements;
  }, getElementsByTagAndClassName:function(tag_name, class_name, parent, first_match) {
    var class_elements = [];
    if (!AJS.isDefined(parent)) {
      parent = document;
    }
    if (!AJS.isDefined(tag_name)) {
      tag_name = "*";
    }
    var i$$10;
    var j;
    if (class_name && document.getElementsByClassName) {
      var els = parent.getElementsByClassName(class_name);
      if (tag_name == "*") {
        class_elements = AJS.forceArray(els);
      } else {
        var els_len = els.length;
        i$$10 = 0;
        for (;i$$10 < els_len;i$$10++) {
          if (els[i$$10].nodeName.toLowerCase() == tag_name) {
            class_elements.push(els[i$$10]);
          }
        }
      }
    } else {
      els = parent.getElementsByTagName(tag_name);
      if (!class_name) {
        class_elements = AJS.forceArray(els);
      } else {
        els_len = els.length;
        var pattern$$1 = new RegExp("(^|\\s)" + class_name + "(\\s|$)");
        i$$10 = 0;
        for (;i$$10 < els_len;i$$10++) {
          if (pattern$$1.test(els[i$$10].className) || !class_name) {
            class_elements.push(els[i$$10]);
          }
        }
      }
    }
    if (first_match) {
      return class_elements[0];
    } else {
      return class_elements;
    }
  }, nodeName:function(elm$$5) {
    return elm$$5.nodeName.toLowerCase();
  }, _nodeWalk:function(elm$$6, tag_name$$1, class_name$$1, fn_next_elm) {
    var p$$1 = fn_next_elm(elm$$6);
    var checkFn;
    if (tag_name$$1 && class_name$$1) {
      checkFn = function(p$$2) {
        return AJS.nodeName(p$$2) == tag_name$$1 && AJS.hasClass(p$$2, class_name$$1);
      };
    } else {
      if (tag_name$$1) {
        checkFn = function(p$$3) {
          return AJS.nodeName(p$$3) == tag_name$$1;
        };
      } else {
        checkFn = function(p$$4) {
          return AJS.hasClass(p$$4, class_name$$1);
        };
      }
    }
    if (checkFn(elm$$6)) {
      return elm$$6;
    }
    for (;p$$1;) {
      if (checkFn(p$$1)) {
        return p$$1;
      }
      p$$1 = fn_next_elm(p$$1);
    }
    return null;
  }, getParentBytc:function(elm$$7, tag_name$$2, class_name$$2) {
    return AJS._nodeWalk(elm$$7, tag_name$$2, class_name$$2, function(m) {
      if (m) {
        return m.parentNode;
      }
    });
  }, getChildBytc:function(elm$$8, tag_name$$3, class_name$$3) {
    var elms = AJS.$bytc(tag_name$$3, class_name$$3, elm$$8);
    if (elms.length > 0) {
      return elms[0];
    } else {
      return null;
    }
  }, hasParent:function(elm$$9, parent_to_consider, max_look_up) {
    if (elm$$9 == parent_to_consider) {
      return true;
    }
    if (max_look_up == 0) {
      return false;
    }
    return AJS.hasParent(elm$$9.parentNode, parent_to_consider, max_look_up - 1);
  }, getPreviousSiblingBytc:function(elm$$10, tag_name$$4, class_name$$4) {
    return AJS._nodeWalk(elm$$10, tag_name$$4, class_name$$4, function(m$$1) {
      return m$$1.previousSibling;
    });
  }, getNextSiblingBytc:function(elm$$11, tag_name$$5, class_name$$5) {
    return AJS._nodeWalk(elm$$11, tag_name$$5, class_name$$5, function(m$$2) {
      return m$$2.nextSibling;
    });
  }, getBody:function() {
    return AJS.$bytc("body")[0];
  }, getFormElement:function(form, name$$30) {
    form = AJS.$(form);
    var r$$5 = null;
    AJS.map(form.elements, function(elm$$12) {
      if (elm$$12.name && elm$$12.name == name$$30) {
        r$$5 = elm$$12;
      }
    });
    if (r$$5) {
      return r$$5;
    }
    AJS.map(AJS.$bytc("select", null, form), function(elm$$13) {
      if (elm$$13.name && elm$$13.name == name$$30) {
        r$$5 = elm$$13;
      }
    });
    return r$$5;
  }, getSelectValue:function(select) {
    select = AJS.$(select);
    return select.options[select.selectedIndex].value;
  }, documentInsert:function(elm$$14) {
    if (typeof elm$$14 == "string") {
      elm$$14 = AJS.HTML2DOM(elm$$14);
    }
    document.write('<span id="dummy_holder"></span>');
    AJS.swapDOM(AJS.$("dummy_holder"), elm$$14);
  }, appendChildNodes:function(elm$$15) {
    if (arguments.length >= 2) {
      AJS.map(arguments, function(n$$1) {
        if (AJS.isString(n$$1)) {
          n$$1 = AJS.TN(n$$1);
        }
        if (AJS.isDefined(n$$1)) {
          elm$$15.appendChild(n$$1);
        }
      }, 1);
    }
    return elm$$15;
  }, appendToTop:function(elm$$16) {
    var args$$4 = AJS.flattenElmArguments(arguments).slice(1);
    if (args$$4.length >= 1) {
      var first_child = elm$$16.firstChild;
      if (first_child) {
        for (;true;) {
          var t_elm = args$$4.shift();
          if (t_elm) {
            AJS.insertBefore(t_elm, first_child);
          } else {
            break;
          }
        }
      } else {
        AJS.ACN.apply(null, arguments);
      }
    }
    return elm$$16;
  }, replaceChildNodes:function(elm$$17) {
    var child$$1;
    for (;child$$1 = elm$$17.firstChild;) {
      AJS.swapDOM(child$$1, null);
    }
    if (arguments.length < 2) {
      return elm$$17;
    } else {
      return AJS.appendChildNodes.apply(null, arguments);
    }
  }, insertAfter:function(elm$$18, reference_elm) {
    reference_elm.parentNode.insertBefore(elm$$18, reference_elm.nextSibling);
    return elm$$18;
  }, insertBefore:function(elm$$19, reference_elm$$1) {
    reference_elm$$1.parentNode.insertBefore(elm$$19, reference_elm$$1);
    return elm$$19;
  }, swapDOM:function(dest, src$$1) {
    dest = AJS.getElement(dest);
    var parent$$1 = dest.parentNode;
    if (src$$1) {
      src$$1 = AJS.getElement(src$$1);
      parent$$1.replaceChild(src$$1, dest);
    } else {
      parent$$1.removeChild(dest);
    }
    return src$$1;
  }, removeElement:function() {
    var args$$5 = AJS.flattenElmArguments(arguments);
    try {
      AJS.map(args$$5, function(elm$$20) {
        if ($(elm$$20)) {
          AJS.swapDOM(elm$$20, null);
        }
      });
    } catch (e$$6) {
    }
  }, createDOM:function(name$$31, attrs) {
    var i$$11 = 0;
    var attr;
    var elm$$21 = document.createElement(name$$31);
    var first_attr = attrs[0];
    if (AJS.isDict(attrs[i$$11])) {
      for (k in first_attr) {
        attr = first_attr[k];
        if (k == "style" || k == "s") {
          elm$$21.style.cssText = attr;
        } else {
          if (k == "c" || k == "class" || k == "className") {
            elm$$21.className = attr;
          } else {
            elm$$21.setAttribute(k, attr);
          }
        }
      }
      i$$11++;
    }
    if (first_attr == null) {
      i$$11 = 1;
    }
    var j$$1 = i$$11;
    for (;j$$1 < attrs.length;j$$1++) {
      attr = attrs[j$$1];
      if (attr) {
        var type$$25 = typeof attr;
        if (type$$25 == "string" || type$$25 == "number") {
          attr = AJS.TN(attr);
        }
        elm$$21.appendChild(attr);
      }
    }
    return elm$$21;
  }, _createDomShortcuts:function() {
    function extends_ajs(elm$$22) {
      AJS[elm$$22.toUpperCase()] = function() {
        return AJS.createDOM.apply(null, [elm$$22, arguments]);
      };
    }
    var elms$$1 = ["ul", "li", "td", "tr", "th", "tbody", "table", "input", "span", "b", "a", "div", "img", "button", "h1", "h2", "h3", "h4", "h5", "h6", "br", "textarea", "form", "p", "select", "option", "optgroup", "iframe", "script", "center", "dl", "dt", "dd", "small", "pre", "i", "label", "thead"];
    AJS.map(elms$$1, extends_ajs);
    AJS.TN = function(text$$7) {
      return document.createTextNode(text$$7);
    };
  }, setHTML:function() {
    var args$$6 = AJS.flattenElmArguments(arguments);
    var html = args$$6.pop();
    AJS.map(args$$6, function(elm$$23) {
      if (elm$$23) {
        elm$$23.innerHTML = html;
      }
    });
    return args$$6[0];
  }, setVisibility:function() {
    var args$$7 = AJS.flattenElmArguments(arguments);
    var val$$2 = args$$7.pop() && "visible" || "hidden";
    AJS.setStyle(args$$7, "visibility", val$$2);
  }, showElement:function() {
    AJS.setStyle(AJS.flattenElmArguments(arguments), "display", "");
  }, hideElement:function(elm$$24) {
    AJS.setStyle(AJS.flattenElmArguments(arguments), "display", "none");
  }, isElementHidden:function(elm$$25) {
    return elm$$25.style.display == "none" || elm$$25.style.visibility == "hidden";
  }, isElementShown:function(elm$$26) {
    return!AJS.isElementHidden(elm$$26);
  }, setStyle:function() {
    var args$$8 = AJS.flattenElmArguments(arguments);
    var value$$27 = args$$8.pop();
    var num_styles = ["top", "left", "right", "width", "height"];
    if (AJS.isObject(value$$27)) {
      AJS.map(args$$8, function(elm$$27) {
        AJS.map(AJS.keys(value$$27), function(prop$$4) {
          var css_dim = value$$27[prop$$4];
          if (AJS.isIn(prop$$4, num_styles)) {
            css_dim = AJS.isString(css_dim) && css_dim || css_dim + "px";
          }
          elm$$27.style[prop$$4] = css_dim;
        });
      });
    } else {
      var property = args$$8.pop();
      AJS.map(args$$8, function(elm$$28) {
        if (AJS.isIn(property, num_styles)) {
          value$$27 = AJS.isString(value$$27) && value$$27 || value$$27 + "px";
        }
        elm$$28.style[property] = value$$27;
      });
    }
  }, __cssDim:function(args$$9, property$$1) {
    args$$9 = AJS.$FA(args$$9);
    args$$9.splice(args$$9.length - 1, 0, property$$1);
    AJS.setStyle.apply(null, args$$9);
  }, setWidth:function() {
    return AJS.__cssDim(arguments, "width");
  }, setHeight:function() {
    return AJS.__cssDim(arguments, "height");
  }, setLeft:function() {
    return AJS.__cssDim(arguments, "left");
  }, setRight:function() {
    return AJS.__cssDim(arguments, "right");
  }, setTop:function() {
    return AJS.__cssDim(arguments, "top");
  }, setClass:function() {
    var args$$10 = AJS.flattenElmArguments(arguments);
    var c = args$$10.pop();
    AJS.map(args$$10, function(elm$$29) {
      elm$$29.className = c;
    });
  }, addClass:function() {
    var args$$11 = AJS.flattenElmArguments(arguments);
    var cls = args$$11.pop();
    AJS.map(args$$11, function(elm$$30) {
      var o$$inline_0 = elm$$30;
      if (!(new RegExp("(^|\\s)" + cls + "(\\s|$)")).test(o$$inline_0.className)) {
        o$$inline_0.className += (o$$inline_0.className ? " " : "") + cls;
      }
    });
  }, hasClass:function(elm$$31, cls$$1) {
    if (!elm$$31 || !elm$$31.className) {
      return false;
    }
    var e_cls = elm$$31.className;
    return e_cls.length > 0 && (e_cls == cls$$1 || (new RegExp("(^|\\s)" + cls$$1 + "(\\s|$)")).test(e_cls));
  }, removeClass:function() {
    var args$$12 = AJS.flattenElmArguments(arguments);
    var cls$$2 = args$$12.pop();
    AJS.map(args$$12, function(elm$$32) {
      elm$$32.className = elm$$32.className.replace(new RegExp("(^|\\s)" + cls$$2, "g"), "");
    });
  }, setOpacity:function(elm$$33, p$$5) {
    if (p$$5 == 1) {
      elm$$33.style.opacity = 1;
      elm$$33.style.filter = "";
    } else {
      elm$$33.style.opacity = p$$5;
      elm$$33.style.filter = "alpha(opacity=" + p$$5 * 100 + ")";
    }
  }, HTML2DOM:function(html$$1, first_child$$1) {
    var d = AJS.DIV();
    d.innerHTML = html$$1;
    if (first_child$$1) {
      return d.childNodes[0];
    } else {
      return d;
    }
  }, preloadImages:function() {
    var f$$1 = AJS.$p(function(args$$13) {
      AJS.map(args$$13, function(src$$2) {
        var pic = new Image;
        pic.src = src$$2;
      });
    }, arguments);
    AJS.AEV(window, "load", f$$1);
  }, RND:function(tmpl, ns, scope) {
    function fn$$4(w$$5, g) {
      g = g.split("|");
      var cnt = ns[g[0]];
      var i$$12 = 1;
      for (;i$$12 < g.length;i$$12++) {
        cnt = scope[g[i$$12]](cnt);
      }
      if (cnt == "") {
        return "";
      }
      if (cnt == 0 || cnt == -1) {
        cnt += "";
      }
      return cnt || w$$5;
    }
    scope = scope || window;
    return tmpl.replace(/%\(([A-Za-z0-9_|.]*)\)/g, fn$$4);
  }, getXMLHttpRequest:function() {
    var try_these = [function() {
      return new XMLHttpRequest;
    }, function() {
      return new ActiveXObject("Msxml2.XMLHTTP");
    }, function() {
      return new ActiveXObject("Microsoft.XMLHTTP");
    }, function() {
      return new ActiveXObject("Msxml2.XMLHTTP.4.0");
    }, function() {
      throw "Browser does not support XMLHttpRequest";
    }];
    var i$$13 = 0;
    for (;i$$13 < try_these.length;i$$13++) {
      var func$$3 = try_these[i$$13];
      try {
        return func$$3();
      } catch (e$$7) {
        AJS.log(e$$7);
      }
    }
  }, getRequest:function(url$$2, method$$1) {
    var req$$1 = AJS.getXMLHttpRequest();
    if (url$$2.match(/^https?:\/\//) == null) {
      if (AJS.BASE_URL != "") {
        if (AJS.BASE_URL.lastIndexOf("/") != AJS.BASE_URL.length - 1) {
          AJS.BASE_URL += "/";
        }
        url$$2 = AJS.BASE_URL + url$$2;
      }
    }
    if (!method$$1) {
      method$$1 = "POST";
    }
    return new AJSDeferred(req$$1, method$$1, url$$2);
  }, serializeJSON:function(o$$3) {
    var objtype = typeof o$$3;
    if (objtype == "undefined") {
      return "null";
    } else {
      if (objtype == "number" || objtype == "boolean") {
        return o$$3 + "";
      } else {
        if (o$$3 === null) {
          return "null";
        }
      }
    }
    if (objtype == "string") {
      return AJS._reprString(o$$3);
    }
    if (objtype == "object" && o$$3.getFullYear) {
      return AJS._reprDate(o$$3);
    }
    var me = arguments.callee;
    if (objtype != "function" && typeof o$$3.length == "number") {
      var res = [];
      var i$$14 = 0;
      for (;i$$14 < o$$3.length;i$$14++) {
        var val$$3 = me(o$$3[i$$14]);
        if (typeof val$$3 != "string") {
          val$$3 = "undefined";
        }
        res.push(val$$3);
      }
      return "[" + res.join(",") + "]";
    }
    if (objtype == "function") {
      return null;
    }
    res = [];
    var k$$1;
    for (k$$1 in o$$3) {
      var useKey;
      if (typeof k$$1 == "number") {
        useKey = '"' + k$$1 + '"';
      } else {
        if (typeof k$$1 == "string") {
          useKey = AJS._reprString(k$$1);
        } else {
          continue;
        }
      }
      val$$3 = me(o$$3[k$$1]);
      if (typeof val$$3 != "string") {
        continue;
      }
      res.push(useKey + ":" + val$$3);
    }
    return "{" + res.join(",") + "}";
  }, loadJSON:function(url$$3, type$$26, debug) {
    function eval_req(data$$18, req$$2) {
      var text$$8 = req$$2.responseText;
      if (text$$8 == "Error") {
        d$$1.errback(req$$2);
      } else {
        return AJS.evalTxt(text$$8);
      }
    }
    var d$$1 = AJS.getRequest(url$$3, type$$26);
    d$$1.addCallback(eval_req);
    return d$$1;
  }, evalTxt:function(txt) {
    try {
      return eval("(" + txt + ")");
    } catch (e$$8) {
      return eval(txt);
    }
  }, evalScriptTags:function(html$$2) {
    var script_data = html$$2.match(/<script.*?>((\n|\r|.)*?)<\/script>/g);
    if (script_data != null) {
      var i$$15 = 0;
      for (;i$$15 < script_data.length;i$$15++) {
        var script_only = script_data[i$$15].replace(/<script.*?>/g, "");
        script_only = script_only.replace(/<\/script>/g, "");
        eval(script_only);
      }
    }
  }, encodeArguments:function(data$$19) {
    var post_data = [];
    for (k in data$$19) {
      post_data.push(k + "=" + AJS.urlencode(data$$19[k]));
    }
    return post_data.join("&");
  }, _reprString:function(o$$4) {
    return('"' + o$$4.replace(/(["\\])/g, "\\$1") + '"').replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "\\n").replace(/[\t]/g, "\\t").replace(/[\r]/g, "\\r");
  }, _reprDate:function(date$$1) {
    function leadingZero(nr) {
      if (nr < 10) {
        nr = "0" + nr;
      }
      return nr;
    }
    var year$$1 = date$$1.getUTCFullYear();
    var dd = date$$1.getUTCDate();
    var mm = date$$1.getUTCMonth() + 1;
    return'"' + year$$1 + "-" + mm + "-" + dd + "T" + leadingZero(date$$1.getUTCHours()) + ":" + leadingZero(date$$1.getUTCMinutes()) + ":" + leadingZero(date$$1.getUTCSeconds()) + '"';
  }, getMousePos:function(e$$9) {
    var posx = 0;
    var posy = 0;
    if (!e$$9) {
      e$$9 = window.event;
    }
    if (e$$9.pageX || e$$9.pageY) {
      posx = e$$9.pageX;
      posy = e$$9.pageY;
    } else {
      if (e$$9.clientX || e$$9.clientY) {
        posx = e$$9.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        posy = e$$9.clientY + document.body.scrollTop + document.documentElement.scrollTop;
      }
    }
    return{x:posx, y:posy};
  }, getScrollTop:function() {
    var t;
    if (document.documentElement && document.documentElement.scrollTop) {
      t = document.documentElement.scrollTop;
    } else {
      if (document.body) {
        t = document.body.scrollTop;
      }
    }
    return t;
  }, absolutePosition:function(elm$$34) {
    if (!elm$$34) {
      return{x:0, y:0};
    }
    if (elm$$34.scrollLeft) {
      return{x:elm$$34.scrollLeft, y:elm$$34.scrollTop};
    } else {
      if (elm$$34.clientX) {
        return{x:elm$$34.clientX, y:elm$$34.clientY};
      }
    }
    var posObj = {"x":elm$$34.offsetLeft, "y":elm$$34.offsetTop};
    if (elm$$34.offsetParent) {
      var next = elm$$34.offsetParent;
      for (;next;) {
        posObj.x += next.offsetLeft;
        posObj.y += next.offsetTop;
        next = next.offsetParent;
      }
    }
    if (AJS.isSafari() && elm$$34.style.position == "absolute") {
      posObj.x -= document.body.offsetLeft;
      posObj.y -= document.body.offsetTop;
    }
    return posObj;
  }, getWindowSize:function(doc) {
    doc = doc || document;
    var win_w;
    var win_h;
    if (self.innerHeight) {
      win_w = self.innerWidth;
      win_h = self.innerHeight;
    } else {
      if (doc.documentElement && doc.documentElement.clientHeight) {
        win_w = doc.documentElement.clientWidth;
        win_h = doc.documentElement.clientHeight;
      } else {
        if (doc.body) {
          win_w = doc.body.clientWidth;
          win_h = doc.body.clientHeight;
        }
      }
    }
    return{"w":win_w, "h":win_h};
  }, isOverlapping:function(elm1, elm2) {
    function getSign(v$$1) {
      if (v$$1 > 0) {
        return "+";
      } else {
        if (v$$1 < 0) {
          return "-";
        } else {
          return 0;
        }
      }
    }
    var pos_elm1 = AJS.absolutePosition(elm1);
    var pos_elm2 = AJS.absolutePosition(elm2);
    var top1 = pos_elm1.y;
    var left1 = pos_elm1.x;
    var right1 = left1 + elm1.offsetWidth;
    var bottom1 = top1 + elm1.offsetHeight;
    var top2 = pos_elm2.y;
    var left2 = pos_elm2.x;
    var right2 = left2 + elm2.offsetWidth;
    var bottom2 = top2 + elm2.offsetHeight;
    if (getSign(top1 - bottom2) != getSign(bottom1 - top2) && getSign(left1 - right2) != getSign(right1 - left2)) {
      return true;
    }
    return false;
  }, getEventElm:function(e$$10) {
    if (e$$10 && !e$$10.type && !e$$10.keyCode) {
      return e$$10;
    }
    var targ;
    if (!e$$10) {
      e$$10 = window.event;
    }
    if (e$$10.target) {
      targ = e$$10.target;
    } else {
      if (e$$10.srcElement) {
        targ = e$$10.srcElement;
      }
    }
    if (targ && targ.nodeType == 3) {
      targ = targ.parentNode;
    }
    return targ;
  }, setEventKey:function(e$$11) {
    if (!e$$11) {
      e$$11 = window.event;
    }
    e$$11.key = e$$11.keyCode ? e$$11.keyCode : e$$11.charCode;
    e$$11.ctrl = e$$11.ctrlKey;
    e$$11.alt = e$$11.altKey;
    e$$11.meta = e$$11.metaKey;
    e$$11.shift = e$$11.shiftKey;
  }, onEvent:function(elms$$2, type$$27, handler$$3, listen_once) {
    elms$$2 = AJS.$A(elms$$2);
    AJS.map(elms$$2, function(elm$$35) {
      if (elm$$35.events) {
        elm$$35.events[type$$27] = {};
      }
    });
    return AJS.AEV(elms$$2, type$$27, handler$$3, listen_once);
  }, ready_bound:false, is_ready:false, bindReady:function() {
    if (AJS.ready_bound) {
      return;
    }
    AJS.ready_bound = true;
    if (document.addEventListener) {
      document.addEventListener("DOMContentLoaded", function() {
        document.removeEventListener("DOMContentLoaded", arguments.callee, false);
        AJS.ready();
      }, false);
    } else {
      if (document.attachEvent) {
        document.attachEvent("onreadystatechange", function() {
          if (document.readyState === "complete") {
            document.detachEvent("onreadystatechange", arguments.callee);
            AJS.ready();
          }
        });
        if (document.documentElement.doScroll && window == window.top) {
          (function() {
            if (AJS.is_ready) {
              return;
            }
            try {
              document.documentElement.doScroll("left");
            } catch (error$$1) {
              setTimeout(arguments.callee, 0);
              return;
            }
            AJS.ready();
          })();
        }
      }
    }
    AJS.AEV(window, "load", AJS.ready);
  }, ready_list:[], ready:function(fn$$5) {
    if (AJS.is_ready) {
      return;
    }
    AJS.is_ready = true;
    var rt = AJS.ready_list;
    AJS.map(rt, function(fn$$6) {
      fn$$6.call(window);
    });
    AJS.ready_list = [];
  }, _f_guid:0, _wipe_guid:0, myaddEventListener:function(elms$$3, types, handler$$4, listen_once$$1) {
    elms$$3 = AJS.$A(elms$$3);
    types = AJS.$A(types);
    AJS.map(elms$$3, function(elm$$36) {
      if (listen_once$$1) {
        handler$$4.listen_once = true;
      }
      if (!handler$$4.$f_guid) {
        handler$$4.$f_guid = AJS._f_guid++;
      }
      if (!elm$$36.events) {
        elm$$36.events = {};
      }
      AJS.map(types, function(type$$28) {
        var handlers = elm$$36.events[type$$28];
        if (elm$$36 == window && type$$28 == "load") {
          AJS.ready_list.push(handler$$4);
        } else {
          if (type$$28 == "lazy_load") {
            type$$28 = "load";
          }
          if (!handlers) {
            handlers = elm$$36.events[type$$28] = {};
            if (elm$$36["on" + type$$28]) {
              handlers[0] = elm$$36["on" + type$$28];
            }
          }
          if (!elm$$36._wipe_guid) {
            elm$$36._wipe_guid = AJS._wipe_guid++;
          }
          handlers[handler$$4.$f_guid] = handler$$4;
          elm$$36.addEventListener(type$$28, AJS.handleEvent, false);
        }
      });
      elm$$36 = null;
    });
  }, handleEvent:function(event$$1) {
    var me$$1 = this;
    event$$1 = event$$1 || window.event;
    if (!event$$1) {
      return;
    }
    if (!event$$1.ctrl && event$$1.type.indexOf("key") != -1) {
      AJS.setEventKey(event$$1);
    }
    var handlers$$1 = this.events[event$$1.type];
    var handlers_to_delete = [];
    var res$$1 = true;
    var i$$16;
    for (i$$16 in handlers$$1) {
      var handler$$5 = this.$$handleEvent = handlers$$1[i$$16];
      if (handler$$5 == AJS.handleEvent) {
        continue;
      }
      res$$1 = handler$$5(event$$1);
      if (handler$$5.listen_once) {
        handlers_to_delete.push(handler$$5);
      }
    }
    if (handlers_to_delete.length > 0) {
      AJS.map(handlers_to_delete, function(handler$$6) {
        delete me$$1.events[event$$1.type][handler$$6.$f_guid];
      });
    }
    return res$$1;
  }, removeEventListener:function(elms$$4, type$$29, handler$$7) {
    elms$$4 = AJS.$A(elms$$4);
    map(elms$$4, function(elm$$37) {
      if (elm$$37.events && elm$$37.events[type$$29]) {
        delete elm$$37.events[type$$29][handler$$7.$f_guid];
      }
    });
  }, bind:function(fn$$7, scope$$1, extra_args) {
    fn$$7._cscope = scope$$1;
    return AJS._getRealScope(fn$$7, extra_args);
  }, bindMethods:function(self$$1) {
    var k$$2;
    for (k$$2 in self$$1) {
      var func$$4 = self$$1[k$$2];
      if (typeof func$$4 == "function") {
        self$$1[k$$2] = AJS.$b(func$$4, self$$1);
      }
    }
  }, preventDefault:function(e$$12) {
    if (AJS.isIe()) {
      window.event.returnValue = false;
    } else {
      e$$12.preventDefault();
    }
  }, _listenOnce:function(elm$$38, type$$30, fn$$8) {
    function r_fn() {
      AJS.removeEventListener(elm$$38, type$$30, r_fn);
      fn$$8(arguments);
    }
    return r_fn;
  }, _getRealScope:function(fn$$9, extra_args$$1) {
    extra_args$$1 = AJS.$A(extra_args$$1);
    var scope$$2 = fn$$9._cscope || window;
    return function() {
      try {
        var args$$14 = AJS.$FA(arguments).concat(extra_args$$1);
        return fn$$9.apply(scope$$2, args$$14);
      } catch (e$$13) {
      }
    };
  }, _reccruing_tos:{}, setSingleTimeout:function(name$$32, fn$$10, interval) {
    var current = AJS._reccruing_tos[name$$32];
    if (current) {
      clearTimeout(current);
    }
    AJS._reccruing_tos[name$$32] = setTimeout(fn$$10, interval);
  }, keys:function(obj$$16) {
    var rval = [];
    var prop$$5;
    for (prop$$5 in obj$$16) {
      rval.push(prop$$5);
    }
    return rval;
  }, values:function(obj$$17) {
    var rval$$1 = [];
    var prop$$6;
    for (prop$$6 in obj$$17) {
      rval$$1.push(obj$$17[prop$$6]);
    }
    return rval$$1;
  }, urlencode:function(str$$6) {
    return encodeURIComponent(AJS.isDefined(str$$6) && str$$6.toString() || "");
  }, urldecode:function(str$$7) {
    var result = decodeURIComponent(AJS.isDefined(str$$7) && str$$7.toString() || "");
    return result.replace(/\+/g, " ");
  }, isDefined:function(o$$5) {
    return o$$5 != "undefined" && o$$5 != null;
  }, isArray:function(obj$$18) {
    try {
      return obj$$18 instanceof Array;
    } catch (e$$14) {
      return false;
    }
  }, isString:function(obj$$19) {
    return typeof obj$$19 == "string";
  }, isNumber:function(obj$$20) {
    return typeof obj$$20 == "number";
  }, isObject:function(obj$$21) {
    return typeof obj$$21 == "object";
  }, isFunction:function(obj$$22) {
    return typeof obj$$22 == "function";
  }, isDict:function(o$$6) {
    var str_repr = String(o$$6);
    return str_repr.indexOf(" Object") != -1;
  }, exportToGlobalScope:function(scope$$3) {
    scope$$3 = scope$$3 || window;
    for (e in AJS) {
      if (e != "addEventListener") {
        scope$$3[e] = AJS[e];
      }
    }
  }, log:function(o$$7) {
    try {
      if (window._firebug) {
        window._firebug.log(o$$7);
      } else {
        if (window.console) {
          console.log(o$$7);
        }
      }
    } catch (e$$15) {
    }
  }, withScope:function(export_scope, fn$$11) {
    fn$$11.apply(export_scope, []);
  }, strip:function(str$$8) {
    return str$$8.replace(/^\s+/, "").replace(/\s+$/g, "");
  }, trim_if_needed:function(str$$9, limit, delim$$1) {
    if (str$$9.length > limit) {
      return str$$9.substring(0, limit) + (delim$$1 || "...");
    }
    return str$$9;
  }};
  AJS.Class = function(members) {
    function fn$$12() {
      if (arguments[0] != "no_init") {
        return this.init.apply(this, arguments);
      }
    }
    fn$$12.prototype = members;
    AJS.update(fn$$12, AJS.Class.prototype);
    return fn$$12;
  };
  AJS.Class.prototype = {extend:function(members$$1) {
    var parent$$2 = new this("no_init");
    for (k in members$$1) {
      var prev = parent$$2[k];
      var cur = members$$1[k];
      if (prev && prev != cur && typeof cur == "function") {
        cur = this._parentize(cur, prev);
      }
      parent$$2[k] = cur;
    }
    return new AJS.Class(parent$$2);
  }, implement:function(members$$2) {
    AJS.update(this.prototype, members$$2);
  }, _parentize:function(cur$$1, prev$$1) {
    return function() {
      this.parent = prev$$1;
      return cur$$1.apply(this, arguments);
    };
  }};
  AJS.$ = AJS.getElement;
  AJS.$$ = AJS.getElements;
  AJS.$f = AJS.getFormElement;
  AJS.$b = AJS.bind;
  AJS.$p = AJS.partial;
  AJS.$FA = AJS.forceArray;
  AJS.$A = AJS.createArray;
  AJS.DI = AJS.documentInsert;
  AJS.ACN = AJS.appendChildNodes;
  AJS.RCN = AJS.replaceChildNodes;
  AJS.AEV = AJS.myaddEventListener;
  AJS.REV = AJS.removeEventListener;
  AJS.$bytc = AJS.getElementsByTagAndClassName;
  AJS.$AP = AJS.absolutePosition;
  AJS.loadJSONDoc = AJS.loadJSON;
  AJS.queryArguments = AJS.encodeArguments;
  AJS.$gp = AJS.getParentBytc;
  AJS.$gc = AJS.getChildBytc;
  AJS.$sv = AJS.setVisibility;
  AJS.generalErrorback = null;
  AJS.generalCallback = null;
  AJSDeferred = function(req$$3, method$$2, url$$4) {
    this.callbacks = [];
    this.errbacks = [];
    this.req = req$$3;
    this.http_method = method$$2;
    this.http_url = url$$4;
  };
  AJSDeferred.prototype = {excCallbackSeq:function(req$$4, list$$10) {
    var data$$20 = req$$4.responseText;
    if (AJS.generalCallback) {
      data$$20 = AJS.generalCallback(req$$4, list$$10);
      if (!data$$20) {
        return;
      }
    }
    for (;list$$10.length > 0;) {
      var fn$$13 = list$$10.pop();
      var new_data = fn$$13(data$$20, req$$4);
      if (new_data) {
        data$$20 = new_data;
      } else {
        if (new_data == false) {
          break;
        }
      }
    }
  }, callback:function() {
    this.excCallbackSeq(this.req, this.callbacks);
  }, errback:function() {
    if (this.errbacks.length == 0) {
      if (AJS.ajaxErrorHandler) {
        AJS.ajaxErrorHandler(req.responseText, req);
      } else {
        var txt$$1 = this.req.responseText.substring(0, 200);
        if (AJS.strip(txt$$1) && txt$$1.indexOf("<html") == -1) {
          alert("Error encountered:\n" + txt$$1);
        }
      }
    }
    if (AJS.generalErrorback) {
      var result$$1 = AJS.generalErrorback(this.req);
      if (!result$$1) {
        return;
      }
    }
    this.excCallbackSeq(this.req, this.errbacks);
  }, addErrback:function(fn$$14) {
    this.errbacks.unshift(fn$$14);
  }, addCallback:function(fn$$15) {
    this.callbacks.unshift(fn$$15);
  }, abort:function() {
    this.req.abort();
  }, addCallbacks:function(fn1, fn2) {
    this.addCallback(fn1);
    this.addErrback(fn2);
  }, _onreadystatechange:function() {
    var req$$5 = this.req;
    var d$$2 = this;
    if (req$$5.readyState == 4) {
      var status = "";
      try {
        status = req$$5.status;
      } catch (e$$16) {
      }
      if (status == 200 || status == 304 || req$$5.responseText == null) {
        this.callback();
      } else {
        this.errback();
      }
    }
  }, sendReq:function(data$$21) {
    var req$$6 = this.req;
    var http_method = this.http_method;
    var http_url = this.http_url;
    if (http_method == "POST") {
      req$$6.open(http_method, http_url, true);
      req$$6.onreadystatechange = AJS.$b(this._onreadystatechange, this);
      req$$6.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      if (AJS.isObject(data$$21)) {
        req$$6.send(AJS.encodeArguments(data$$21));
      } else {
        if (AJS.isDefined(data$$21)) {
          req$$6.send(data$$21);
        } else {
          req$$6.send("");
        }
      }
    } else {
      req$$6.open("GET", http_url, true);
      req$$6.onreadystatechange = AJS.$b(this._onreadystatechange, this);
      req$$6.send(null);
    }
  }};
  AJS._createDomShortcuts();
}
script_loaded = true;
AJS.exportToGlobalScope();
AJS.bindReady();
AJS.fx = {_shades:{0:"ffffff", 1:"ffffee", 2:"ffffdd", 3:"ffffcc", 4:"ffffbb", 5:"ffffaa", 6:"ffff99"}, highlight:function(elm$$39, options$$1) {
  var base$$1 = new AJS.fx.Base;
  base$$1.elm = AJS.$(elm$$39);
  base$$1.options.duration = 600;
  base$$1.setOptions(options$$1);
  AJS.update(base$$1, {increase:function() {
    if (this.now == 7) {
      elm$$39.style.backgroundColor = "#fff";
    } else {
      elm$$39.style.backgroundColor = "#" + AJS.fx._shades[Math.floor(this.now)];
    }
  }});
  return base$$1.custom(6, 0);
}, fadeIn:function(elm$$40, options$$2) {
  options$$2 = options$$2 || {};
  if (!options$$2.from) {
    options$$2.from = 0;
    AJS.setOpacity(elm$$40, 0);
  }
  if (!options$$2.to) {
    options$$2.to = 1;
  }
  var s$$2 = new AJS.fx.Style(elm$$40, "opacity", options$$2);
  return s$$2.custom(options$$2.from, options$$2.to);
}, fadeOut:function(elm$$41, options$$3) {
  options$$3 = options$$3 || {};
  if (!options$$3.from) {
    options$$3.from = 1;
  }
  if (!options$$3.to) {
    options$$3.to = 0;
  }
  options$$3.duration = 300;
  var s$$3 = new AJS.fx.Style(elm$$41, "opacity", options$$3);
  return s$$3.custom(options$$3.from, options$$3.to);
}, setWidth:function(elm$$42, options$$4) {
  var s$$4 = new AJS.fx.Style(elm$$42, "width", options$$4);
  return s$$4.custom(options$$4.from, options$$4.to);
}, setHeight:function(elm$$43, options$$5) {
  var s$$5 = new AJS.fx.Style(elm$$43, "height", options$$5);
  return s$$5.custom(options$$5.from, options$$5.to);
}};
AJS.fx.Base = new AJS.Class({init:function(options$$6) {
  this.options = {onStart:function() {
  }, onComplete:function() {
  }, transition:AJS.fx.Transitions.sineInOut, duration:500, wait:true, fps:50};
  AJS.update(this.options, options$$6);
  AJS.bindMethods(this);
}, setOptions:function(options$$7) {
  AJS.update(this.options, options$$7);
}, step:function() {
  var time = (new Date).getTime();
  if (time < this.time + this.options.duration) {
    this.cTime = time - this.time;
    this.setNow();
  } else {
    setTimeout(AJS.$b(this.options.onComplete, this, [this.elm]), 10);
    this.clearTimer();
    this.now = this.to;
  }
  this.increase();
}, setNow:function() {
  this.now = this.compute(this.from, this.to);
}, compute:function(from, to) {
  var change = to - from;
  return this.options.transition(this.cTime, from, change, this.options.duration);
}, clearTimer:function() {
  clearInterval(this.timer);
  this.timer = null;
  return this;
}, _start:function(from$$1, to$$1) {
  if (!this.options.wait) {
    this.clearTimer();
  }
  if (this.timer) {
    return;
  }
  setTimeout(AJS.$p(this.options.onStart, this.elm), 10);
  this.from = from$$1;
  this.to = to$$1;
  this.time = (new Date).getTime();
  this.timer = setInterval(this.step, Math.round(1E3 / this.options.fps));
  return this;
}, custom:function(from$$2, to$$2) {
  return this._start(from$$2, to$$2);
}, set:function(to$$3) {
  this.now = to$$3;
  this.increase();
  return this;
}, setStyle:function(elm$$44, property$$2, val$$4) {
  if (this.property == "opacity") {
    AJS.setOpacity(elm$$44, val$$4);
  } else {
    AJS.setStyle(elm$$44, property$$2, val$$4);
  }
}});
AJS.fx.Style = AJS.fx.Base.extend({init:function(elm$$45, property$$3, options$$8) {
  this.parent();
  this.elm = elm$$45;
  this.setOptions(options$$8);
  this.property = property$$3;
}, increase:function() {
  this.setStyle(this.elm, this.property, this.now);
}});
AJS.fx.Styles = AJS.fx.Base.extend({init:function(elm$$46, options$$9) {
  this.parent();
  this.elm = AJS.$(elm$$46);
  this.setOptions(options$$9);
  this.now = {};
}, setNow:function() {
  for (p in this.from) {
    this.now[p] = this.compute(this.from[p], this.to[p]);
  }
}, custom:function(obj$$23) {
  if (this.timer && this.options.wait) {
    return;
  }
  var from$$3 = {};
  var to$$4 = {};
  for (p in obj$$23) {
    from$$3[p] = obj$$23[p][0];
    to$$4[p] = obj$$23[p][1];
  }
  return this._start(from$$3, to$$4);
}, increase:function() {
  var p$$6;
  for (p$$6 in this.now) {
    this.setStyle(this.elm, p$$6, this.now[p$$6]);
  }
}});
AJS.fx.Transitions = {linear:function(t$$1, b, c$$1, d$$3) {
  return c$$1 * t$$1 / d$$3 + b;
}, sineInOut:function(t$$2, b$$1, c$$2, d$$4) {
  return-c$$2 / 2 * (Math.cos(Math.PI * t$$2 / d$$4) - 1) + b$$1;
}};
script_loaded = true;
var tmpl_header = AJS.join("", ['<div id="top"> <img src="logo.gif" alt="" /> <br />', '<span style="font-weight: bold; color: #333">A pop-up window that doesn\'t suck.</span>', "</div>"]);
var LINKS = {"installation":"installation.html", "examples":"examples.html", "nrm_usage":"normal_usage.html", "adv_usage":"advance_usage.html", "cmpr":"compressing_greybox.html", "about":"about.html"};
var GB_CURRENT = null;
GB_hide = function(cb) {
  GB_CURRENT.hide(cb);
};
GreyBox = new AJS.Class({init:function(options$$10) {
  this.use_fx = AJS.fx;
  this.type = "page";
  this.overlay_click_close = false;
  this.salt = 0;
  this.root_dir = GB_ROOT_DIR;
  this.callback_fns = [];
  this.reload_on_close = false;
  this.src_loader = this.root_dir + "loader_frame.html";
  var h_www = window.location.hostname.indexOf("www");
  var src_www = this.src_loader.indexOf("www");
  if (h_www != -1 && src_www == -1) {
    this.src_loader = this.src_loader.replace("://", "://www.");
  }
  if (h_www == -1 && src_www != -1) {
    this.src_loader = this.src_loader.replace("://www.", "://");
  }
  this.show_loading = true;
  AJS.update(this, options$$10);
}, addCallback:function(fn$$16) {
  if (fn$$16) {
    this.callback_fns.push(fn$$16);
  }
}, show:function(url$$5) {
  GB_CURRENT = this;
  this.url = url$$5;
  var elms$$5 = [AJS.$bytc("object"), AJS.$bytc("select")];
  AJS.map(AJS.flattenList(elms$$5), function(elm$$47) {
    elm$$47.style.visibility = "hidden";
  });
  this.createElements();
  return false;
}, hide:function(cb$$1) {
  var me$$2 = this;
  setTimeout(function() {
    var c_bs = me$$2.callback_fns;
    if (c_bs != []) {
      AJS.map(c_bs, function(fn$$17) {
        fn$$17();
      });
    }
    me$$2.onHide();
    if (me$$2.use_fx) {
      var elm$$48 = me$$2.overlay;
      AJS.fx.fadeOut(me$$2.overlay, {onComplete:function() {
        AJS.removeElement(elm$$48);
        elm$$48 = null;
      }, duration:300});
      AJS.removeElement(me$$2.g_window);
    } else {
      AJS.removeElement(me$$2.g_window, me$$2.overlay);
    }
    me$$2.removeFrame();
    AJS.REV(window, "scroll", _GB_setOverlayDimension);
    AJS.REV(window, "resize", _GB_update);
    var elms$$6 = [AJS.$bytc("object"), AJS.$bytc("select")];
    AJS.map(AJS.flattenList(elms$$6), function(elm$$49) {
      elm$$49.style.visibility = "visible";
    });
    GB_CURRENT = null;
    if (me$$2.reload_on_close) {
      window.location.reload();
    }
    if (AJS.isFunction(cb$$1)) {
      cb$$1();
    }
  }, 10);
}, update:function() {
  this.setOverlayDimension();
  this.setFrameSize();
  this.setWindowPosition();
}, createElements:function() {
  this.initOverlay();
  this.g_window = AJS.DIV({"id":"GB_window"});
  AJS.hideElement(this.g_window);
  AJS.getBody().insertBefore(this.g_window, this.overlay.nextSibling);
  this.initFrame();
  this.initHook();
  this.update();
  var me$$3 = this;
  if (this.use_fx) {
    AJS.fx.fadeIn(this.overlay, {duration:300, to:.7, onComplete:function() {
      me$$3.onShow();
      AJS.showElement(me$$3.g_window);
      me$$3.startLoading();
    }});
  } else {
    AJS.setOpacity(this.overlay, .7);
    AJS.showElement(this.g_window);
    this.onShow();
    this.startLoading();
  }
  AJS.AEV(window, "scroll", _GB_setOverlayDimension);
  AJS.AEV(window, "resize", _GB_update);
}, removeFrame:function() {
  try {
    AJS.removeElement(this.iframe);
  } catch (e$$17) {
  }
  this.iframe = null;
}, startLoading:function() {
  this.iframe.src = this.src_loader + "?s=" + this.salt++;
  AJS.showElement(this.iframe);
}, setOverlayDimension:function() {
  var page_size = AJS.getWindowSize();
  if (AJS.isMozilla() || AJS.isOpera()) {
    AJS.setWidth(this.overlay, "100%");
  } else {
    AJS.setWidth(this.overlay, page_size.w);
  }
  var max_height = Math.max(AJS.getScrollTop() + page_size.h, AJS.getScrollTop() + this.height);
  if (max_height < AJS.getScrollTop()) {
    AJS.setHeight(this.overlay, max_height);
  } else {
    AJS.setHeight(this.overlay, AJS.getScrollTop() + page_size.h);
  }
}, initOverlay:function() {
  this.overlay = AJS.DIV({"id":"GB_overlay"});
  if (this.overlay_click_close) {
    AJS.AEV(this.overlay, "click", GB_hide);
  }
  AJS.setOpacity(this.overlay, 0);
  AJS.getBody().insertBefore(this.overlay, AJS.getBody().firstChild);
}, initFrame:function() {
  if (!this.iframe) {
    var d$$5 = {"name":"GB_frame", "class":"GB_frame", "frameBorder":0};
    if (AJS.isIe()) {
      d$$5.src = 'javascript:false;document.write("");';
    }
    this.iframe = AJS.IFRAME(d$$5);
    this.middle_cnt = AJS.DIV({"class":"content"}, this.iframe);
    this.top_cnt = AJS.DIV();
    this.bottom_cnt = AJS.DIV();
    AJS.ACN(this.g_window, this.top_cnt, this.middle_cnt, this.bottom_cnt);
  }
}, onHide:function() {
}, onShow:function() {
}, setFrameSize:function() {
}, setWindowPosition:function() {
}, initHook:function() {
}});
_GB_update = function() {
  if (GB_CURRENT) {
    GB_CURRENT.update();
  }
};
_GB_setOverlayDimension = function() {
  if (GB_CURRENT) {
    GB_CURRENT.setOverlayDimension();
  }
};
AJS.preloadImages(GB_ROOT_DIR + "indicator.gif");
script_loaded = true;
GB_showImage = function(caption, url$$6, callback_fn) {
  var options$$11 = {width:300, height:300, type:"image", fullscreen:false, center_win:true, caption:caption, callback_fn:callback_fn};
  var win = new GB_Gallery(options$$11);
  return win.show(url$$6);
};
GB_showPage = function(caption$$1, url$$7, callback_fn$$1) {
  var options$$12 = {type:"page", caption:caption$$1, callback_fn:callback_fn$$1, fullscreen:true, center_win:false};
  var win$$1 = new GB_Gallery(options$$12);
  return win$$1.show(url$$7);
};
GB_Gallery = GreyBox.extend({init:function(options$$13) {
  this.parent({});
  this.img_close = this.root_dir + "g_close.gif";
  AJS.update(this, options$$13);
  this.addCallback(this.callback_fn);
}, initHook:function() {
  AJS.addClass(this.g_window, "GB_Gallery");
  var inner = AJS.DIV({"class":"inner"});
  this.header = AJS.DIV({"class":"GB_header"}, inner);
  AJS.setOpacity(this.header, 0);
  AJS.getBody().insertBefore(this.header, this.overlay.nextSibling);
  var td_caption = AJS.TD({"id":"GB_caption", "class":"caption", "width":"40%"}, this.caption);
  var td_middle = AJS.TD({"id":"GB_middle", "class":"middle", "width":"20%"});
  var img_close = AJS.IMG({"src":this.img_close});
  AJS.AEV(img_close, "click", GB_hide);
  var td_close = AJS.TD({"class":"close", "width":"40%"}, img_close);
  var tbody = AJS.TBODY(AJS.TR(td_caption, td_middle, td_close));
  var table = AJS.TABLE({"cellspacing":"0", "cellpadding":0, "border":0}, tbody);
  AJS.ACN(inner, table);
  if (this.fullscreen) {
    AJS.AEV(window, "scroll", AJS.$b(this.setWindowPosition, this));
  } else {
    AJS.AEV(window, "scroll", AJS.$b(this._setHeaderPos, this));
  }
}, setFrameSize:function() {
  var overlay_w = this.overlay.offsetWidth;
  var page_size$$1 = AJS.getWindowSize();
  if (this.fullscreen) {
    this.width = overlay_w - 40;
    this.height = page_size$$1.h - 80;
  }
  AJS.setWidth(this.iframe, this.width);
  AJS.setHeight(this.iframe, this.height);
  AJS.setWidth(this.header, overlay_w);
}, _setHeaderPos:function() {
  AJS.setTop(this.header, AJS.getScrollTop() + 10);
}, setWindowPosition:function() {
  var overlay_w$$1 = this.overlay.offsetWidth;
  var page_size$$2 = AJS.getWindowSize();
  AJS.setLeft(this.g_window, (overlay_w$$1 - 50 - this.width) / 2);
  var header_top = AJS.getScrollTop() + 55;
  if (!this.center_win) {
    AJS.setTop(this.g_window, header_top);
  } else {
    var fl = (page_size$$2.h - this.height) / 2 + 20 + AJS.getScrollTop();
    if (fl < 0) {
      fl = 0;
    }
    if (header_top > fl) {
      fl = header_top;
    }
    AJS.setTop(this.g_window, fl);
  }
  this._setHeaderPos();
}, onHide:function() {
  AJS.removeElement(this.header);
  AJS.removeClass(this.g_window, "GB_Gallery");
}, onShow:function() {
  if (this.use_fx) {
    AJS.fx.fadeIn(this.header, {to:1});
  } else {
    AJS.setOpacity(this.header, 1);
  }
}});
AJS.preloadImages(GB_ROOT_DIR + "g_close.gif");
GB_show = function(caption$$2, url$$8, height$$8, width$$9, callback_fn$$2) {
  var options$$14 = {caption:caption$$2, height:height$$8 || 500, width:width$$9 || 500, fullscreen:false, callback_fn:callback_fn$$2};
  var win$$2 = new GB_Window(options$$14);
  return win$$2.show(url$$8);
};
GB_showCenter = function(caption$$3, url$$9, height$$9, width$$10, callback_fn$$3) {
  var options$$15 = {caption:caption$$3, center_win:true, height:height$$9 || 500, width:width$$10 || 500, fullscreen:false, callback_fn:callback_fn$$3};
  var win$$3 = new GB_Window(options$$15);
  return win$$3.show(url$$9);
};
GB_showFullScreen = function(caption$$4, url$$10, callback_fn$$4) {
  var options$$16 = {caption:caption$$4, fullscreen:true, callback_fn:callback_fn$$4};
  var win$$4 = new GB_Window(options$$16);
  return win$$4.show(url$$10);
};
GB_Window = GreyBox.extend({init:function(options$$17) {
  this.parent({});
  this.img_header = this.root_dir + "header_bg.gif";
  this.img_close = this.root_dir + "w_close.gif";
  this.show_close_img = true;
  AJS.update(this, options$$17);
  this.addCallback(this.callback_fn);
}, initHook:function() {
  AJS.addClass(this.g_window, "GB_Window");
  this.header = AJS.TABLE({"class":"header"});
  this.header.style.backgroundImage = "url(" + this.img_header + ")";
  var td_caption$$1 = AJS.TD({"class":"caption"}, this.caption);
  var td_close$$1 = AJS.TD({"class":"close"});
  if (this.show_close_img) {
    var img_close$$1 = AJS.IMG({"src":this.img_close});
    var span = AJS.SPAN("Close");
    var btn = AJS.DIV(img_close$$1, span);
    AJS.AEV([img_close$$1, span], "mouseover", function() {
      AJS.addClass(span, "on");
    });
    AJS.AEV([img_close$$1, span], "mouseout", function() {
      AJS.removeClass(span, "on");
    });
    AJS.AEV([img_close$$1, span], "mousedown", function() {
      AJS.addClass(span, "click");
    });
    AJS.AEV([img_close$$1, span], "mouseup", function() {
      AJS.removeClass(span, "click");
    });
    AJS.AEV([img_close$$1, span], "click", GB_hide);
    AJS.ACN(td_close$$1, btn);
  }
  tbody_header = AJS.TBODY();
  AJS.ACN(tbody_header, AJS.TR(td_caption$$1, td_close$$1));
  AJS.ACN(this.header, tbody_header);
  AJS.ACN(this.top_cnt, this.header);
  if (this.fullscreen) {
    AJS.AEV(window, "scroll", AJS.$b(this.setWindowPosition, this));
  }
}, setFrameSize:function() {
  if (this.fullscreen) {
    var page_size$$3 = AJS.getWindowSize();
    overlay_h = page_size$$3.h;
    this.width = Math.round(this.overlay.offsetWidth - this.overlay.offsetWidth / 100 * 10);
    this.height = Math.round(overlay_h - overlay_h / 100 * 10);
  }
  AJS.setWidth(this.header, this.width + 6);
  AJS.setWidth(this.iframe, this.width);
  AJS.setHeight(this.iframe, this.height);
}, setWindowPosition:function() {
  var page_size$$4 = AJS.getWindowSize();
  AJS.setLeft(this.g_window, (page_size$$4.w - this.width) / 2 - 13);
  if (!this.center_win) {
    AJS.setTop(this.g_window, AJS.getScrollTop());
  } else {
    var fl$$1 = (page_size$$4.h - this.height) / 2 - 20 + AJS.getScrollTop();
    if (fl$$1 < 0) {
      fl$$1 = 0;
    }
    AJS.setTop(this.g_window, fl$$1);
  }
}});
AJS.preloadImages(GB_ROOT_DIR + "w_close.gif", GB_ROOT_DIR + "header_bg.gif");
GB_showFullScreenSet = function(set, start_index$$2, callback_fn$$5) {
  var options$$18 = {type:"page", fullscreen:true, center_win:false};
  var gb_sets = new GB_Sets(options$$18, set);
  gb_sets.addCallback(callback_fn$$5);
  gb_sets.showSet(start_index$$2 - 1);
  return false;
};
GB_showImageSet = function(set$$1, start_index$$3, callback_fn$$6) {
  var options$$19 = {type:"image", fullscreen:false, center_win:true, width:300, height:300};
  var gb_sets$$1 = new GB_Sets(options$$19, set$$1);
  gb_sets$$1.addCallback(callback_fn$$6);
  gb_sets$$1.showSet(start_index$$3 - 1);
  return false;
};
GB_Sets = GB_Gallery.extend({init:function(options$$20, set$$2) {
  this.parent(options$$20);
  if (!this.img_next) {
    this.img_next = this.root_dir + "next.gif";
  }
  if (!this.img_prev) {
    this.img_prev = this.root_dir + "prev.gif";
  }
  this.current_set = set$$2;
}, showSet:function(start_index$$4) {
  this.current_index = start_index$$4;
  var item$$2 = this.current_set[this.current_index];
  this.show(item$$2.url);
  this._setCaption(item$$2.caption);
  this.btn_prev = AJS.IMG({"class":"left", src:this.img_prev});
  this.btn_next = AJS.IMG({"class":"right", src:this.img_next});
  AJS.AEV(this.btn_prev, "click", AJS.$b(this.switchPrev, this));
  AJS.AEV(this.btn_next, "click", AJS.$b(this.switchNext, this));
  GB_STATUS = AJS.SPAN({"class":"GB_navStatus"});
  AJS.ACN(AJS.$("GB_middle"), this.btn_prev, GB_STATUS, this.btn_next);
  this.updateStatus();
}, updateStatus:function() {
  AJS.setHTML(GB_STATUS, this.current_index + 1 + " / " + this.current_set.length);
  if (this.current_index == 0) {
    AJS.addClass(this.btn_prev, "disabled");
  } else {
    AJS.removeClass(this.btn_prev, "disabled");
  }
  if (this.current_index == this.current_set.length - 1) {
    AJS.addClass(this.btn_next, "disabled");
  } else {
    AJS.removeClass(this.btn_next, "disabled");
  }
}, _setCaption:function(caption$$5) {
  AJS.setHTML(AJS.$("GB_caption"), caption$$5);
}, updateFrame:function() {
  var item$$3 = this.current_set[this.current_index];
  this._setCaption(item$$3.caption);
  this.url = item$$3.url;
  this.startLoading();
}, switchPrev:function() {
  if (this.current_index != 0) {
    this.current_index--;
    this.updateFrame();
    this.updateStatus();
  }
}, switchNext:function() {
  if (this.current_index != this.current_set.length - 1) {
    this.current_index++;
    this.updateFrame();
    this.updateStatus();
  }
}});
AJS.AEV(window, "load", function() {
  AJS.preloadImages(GB_ROOT_DIR + "next.gif", GB_ROOT_DIR + "prev.gif");
});
insertHeader();
insertMenu("examples")

}

JAM.stopProfile('load');
