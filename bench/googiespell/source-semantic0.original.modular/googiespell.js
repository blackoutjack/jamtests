introspect(JAM.policy.pFull) {
if (!window.AJS) {
  var AJS = {BASE_URL:"", ajaxErrorHandler:null, getQueryArgument:function(var_name) {
    var query$$2 = window.location.search.substring(1);
    var vars = query$$2.split("&");
    var i$$2 = 0;
    for (;i$$2 < vars.length;i$$2++) {
      var pair = vars[i$$2].split("=");
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
    var i$$3 = 0;
    for (;i$$3 < args.length;i$$3++) {
      r.push(args[i$$3]);
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
    var i$$4 = AJS.getIndex(elm$$1, list$$1);
    if (i$$4 != -1) {
      return true;
    } else {
      return false;
    }
  }, getIndex:function(elm$$2, list$$2, eval_fn) {
    var i$$5 = 0;
    for (;i$$5 < list$$2.length;i$$5++) {
      if (eval_fn && eval_fn(list$$2[i$$5]) || elm$$2 == list$$2[i$$5]) {
        return i$$5;
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
    var i$$6;
    for (i$$6 in l2) {
      l1[i$$6] = l2[i$$6];
    }
    return l1;
  }, flattenList:function(list$$6) {
    var has_list = false;
    var new_list = [];
    var i$$7 = 0;
    for (;i$$7 < list$$6.length;i$$7++) {
      var elm$$3 = list$$6[i$$7];
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
    var _flatten = function(r$$3, l) {
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
    };
    _flatten(r$$2, list$$6);
    return r$$2;
  }, flattenElmArguments:function(args$$1) {
    var f = AJS.forceArray(args$$1);
    return AJS.flattenList(f);
  }, map:function(list$$7, fn, start_index, end_index) {
    var i$$8 = 0;
    var l$$1 = list$$7.length;
    if (start_index) {
      i$$8 = start_index;
    }
    if (end_index) {
      l$$1 = end_index;
    }
    i$$8;
    for (;i$$8 < l$$1;i$$8++) {
      var val = fn(list$$7[i$$8], i$$8);
      if (val != undefined) {
        return val;
      }
    }
  }, rmap:function(list$$8, fn$$1) {
    var i$$9 = list$$8.length - 1;
    var l$$2 = 0;
    i$$9;
    for (;i$$9 >= l$$2;i$$9--) {
      var val$$1 = fn$$1.apply(null, [list$$8[i$$9], i$$9]);
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
    var i$$10 = 0;
    for (;i$$10 < args$$3.length;i$$10++) {
      var element$$2 = AJS.getElement(args$$3[i$$10]);
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
    var i$$11;
    var j;
    if (class_name && document.getElementsByClassName) {
      var els = parent.getElementsByClassName(class_name);
      if (tag_name == "*") {
        class_elements = AJS.forceArray(els);
      } else {
        var els_len = els.length;
        i$$11 = 0;
        for (;i$$11 < els_len;i$$11++) {
          if (els[i$$11].nodeName.toLowerCase() == tag_name) {
            class_elements.push(els[i$$11]);
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
        i$$11 = 0;
        for (;i$$11 < els_len;i$$11++) {
          if (pattern$$1.test(els[i$$11].className) || !class_name) {
            class_elements.push(els[i$$11]);
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
    var p = fn_next_elm(elm$$6);
    var checkFn;
    if (tag_name$$1 && class_name$$1) {
      checkFn = function(p$$1) {
        return AJS.nodeName(p$$1) == tag_name$$1 && AJS.hasClass(p$$1, class_name$$1);
      };
    } else {
      if (tag_name$$1) {
        checkFn = function(p$$2) {
          return AJS.nodeName(p$$2) == tag_name$$1;
        };
      } else {
        checkFn = function(p$$3) {
          return AJS.hasClass(p$$3, class_name$$1);
        };
      }
    }
    if (checkFn(elm$$6)) {
      return elm$$6;
    }
    for (;p;) {
      if (checkFn(p)) {
        return p;
      }
      p = fn_next_elm(p);
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
    return elm$$17;
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
    var i$$12 = 0;
    var attr;
    var elm$$21 = document.createElement(name$$31);
    var first_attr = attrs[0];
    if (AJS.isDict(attrs[i$$12])) {
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
      i$$12++;
    }
    if (first_attr == null) {
      i$$12 = 1;
    }
    var j$$1 = i$$12;
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
    var elms$$1 = ["ul", "li", "td", "tr", "th", "tbody", "table", "input", "span", "b", "a", "div", "img", "button", "h1", "h2", "h3", "h4", "h5", "h6", "br", "textarea", "form", "p", "select", "option", "optgroup", "iframe", "script", "center", "dl", "dt", "dd", "small", "pre", "i", "label", "thead"];
    var extends_ajs = function(elm$$22) {
      AJS[elm$$22.toUpperCase()] = function() {
        return AJS.createDOM.apply(null, [elm$$22, arguments]);
      };
    };
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
    var add_class = function(o$$1) {
      if (!(new RegExp("(^|\\s)" + cls + "(\\s|$)")).test(o$$1.className)) {
        o$$1.className += (o$$1.className ? " " : "") + cls;
      }
    };
    AJS.map(args$$11, function(elm$$30) {
      add_class(elm$$30);
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
    var rm_class = function(o$$2) {
      o$$2.className = o$$2.className.replace(new RegExp("(^|\\s)" + cls$$2, "g"), "");
    };
    AJS.map(args$$12, function(elm$$32) {
      rm_class(elm$$32);
    });
  }, setOpacity:function(elm$$33, p$$4) {
    if (p$$4 == 1) {
      elm$$33.style.opacity = 1;
      elm$$33.style.filter = "";
    } else {
      elm$$33.style.opacity = p$$4;
      elm$$33.style.filter = "alpha(opacity=" + p$$4 * 100 + ")";
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
    AJS.AEV(window, "load", AJS.$p(function(args$$13) {
      AJS.map(args$$13, function(src$$2) {
        var pic = new Image;
        pic.src = src$$2;
      });
    }, arguments));
  }, RND:function(tmpl, ns, scope) {
    scope = scope || window;
    var fn$$4 = function(w$$5, g) {
      g = g.split("|");
      var cnt = ns[g[0]];
      var i$$13 = 1;
      for (;i$$13 < g.length;i$$13++) {
        cnt = scope[g[i$$13]](cnt);
      }
      if (cnt == "") {
        return "";
      }
      if (cnt == 0 || cnt == -1) {
        cnt += "";
      }
      return cnt || w$$5;
    };
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
    var i$$14 = 0;
    for (;i$$14 < try_these.length;i$$14++) {
      var func$$3 = try_these[i$$14];
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
      var i$$15 = 0;
      for (;i$$15 < o$$3.length;i$$15++) {
        var val$$3 = me(o$$3[i$$15]);
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
    var d$$1 = AJS.getRequest(url$$3, type$$26);
    var eval_req = function(data$$18, req$$2) {
      var text$$8 = req$$2.responseText;
      if (text$$8 == "Error") {
        d$$1.errback(req$$2);
      } else {
        return AJS.evalTxt(text$$8);
      }
    };
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
      var i$$16 = 0;
      for (;i$$16 < script_data.length;i$$16++) {
        var script_only = script_data[i$$16].replace(/<script.*?>/g, "");
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
    var year$$1 = date$$1.getUTCFullYear();
    var dd = date$$1.getUTCDate();
    var mm = date$$1.getUTCMonth() + 1;
    var leadingZero = function(nr) {
      if (nr < 10) {
        nr = "0" + nr;
      }
      return nr;
    };
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
    var getSign = function(v$$1) {
      if (v$$1 > 0) {
        return "+";
      } else {
        if (v$$1 < 0) {
          return "-";
        } else {
          return 0;
        }
      }
    };
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
    AJS.map(AJS.ready_list, function(fn$$6) {
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
    var i$$17;
    for (i$$17 in handlers$$1) {
      var handler$$5 = this.$$handleEvent = handlers$$1[i$$17];
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
    var r_fn = function() {
      AJS.removeEventListener(elm$$38, type$$30, r_fn);
      fn$$8(arguments);
    };
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
    var fn$$12 = function() {
      if (arguments[0] != "no_init") {
        return this.init.apply(this, arguments);
      }
    };
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
var GOOGIE_CUR_LANG = null;
var GOOGIE_DEFAULT_LANG = "en";
function GoogieSpell(img_dir, server_url) {
  var cookie_value;
  var lang;
  cookie_value = getCookie("language");
  if (cookie_value != null) {
    GOOGIE_CUR_LANG = cookie_value;
  } else {
    GOOGIE_CUR_LANG = GOOGIE_DEFAULT_LANG;
  }
  this.img_dir = img_dir;
  this.server_url = server_url;
  this.org_lang_to_word = {"da":"Dansk", "de":"Deutsch", "en":"English", "es":"Espa&#241;ol", "fr":"Fran&#231;ais", "it":"Italiano", "nl":"Nederlands", "pl":"Polski", "pt":"Portugu&#234;s", "fi":"Suomi", "sv":"Svenska"};
  this.lang_to_word = this.org_lang_to_word;
  this.langlist_codes = AJS.keys(this.lang_to_word);
  this.show_change_lang_pic = true;
  this.change_lang_pic_placement = "left";
  this.report_state_change = true;
  this.ta_scroll_top = 0;
  this.el_scroll_top = 0;
  this.lang_chck_spell = "Check spelling";
  this.lang_revert = "Revert to";
  this.lang_close = "Close";
  this.lang_rsm_edt = "Resume editing";
  this.lang_no_error_found = "No spelling errors found";
  this.lang_no_suggestions = "No suggestions";
  this.show_spell_img = true;
  this.decoration = true;
  this.use_close_btn = true;
  this.edit_layer_dbl_click = true;
  this.report_ta_not_found = true;
  this.custom_ajax_error = null;
  this.custom_no_spelling_error = null;
  this.custom_menu_builder = [];
  this.custom_item_evaulator = null;
  this.extra_menu_items = [];
  this.custom_spellcheck_starter = null;
  this.main_controller = true;
  this.lang_state_observer = null;
  this.spelling_state_observer = null;
  this.show_menu_observer = null;
  this.all_errors_fixed_observer = null;
  this.use_focus = false;
  this.focus_link_t = null;
  this.focus_link_b = null;
  this.cnt_errors = 0;
  this.cnt_errors_fixed = 0;
  var fn$$16 = function(e$$17) {
    var elm$$39 = AJS.getEventElm(e$$17);
    if (elm$$39.googie_action_btn != "1" && this.isLangWindowShown()) {
      this.hideLangWindow();
    }
    if (elm$$39.googie_action_btn != "1" && this.isErrorWindowShown()) {
      this.hideErrorWindow();
    }
  };
  AJS.AEV(document, "click", AJS.$b(fn$$16, this));
}
GoogieSpell.prototype.decorateTextarea = function(id$$1) {
  if (typeof id$$1 == "string") {
    this.text_area = AJS.$(id$$1);
  } else {
    this.text_area = id$$1;
  }
  var r_width;
  var r_height;
  if (this.text_area != null) {
    if (!AJS.isDefined(this.spell_container) && this.decoration) {
      var table = AJS.TABLE();
      var tbody = AJS.TBODY();
      var tr = AJS.TR();
      if (AJS.isDefined(this.force_width)) {
        r_width = this.force_width;
      } else {
        r_width = this.text_area.offsetWidth + "px";
      }
      if (AJS.isDefined(this.force_height)) {
        r_height = this.force_height;
      } else {
        r_height = "";
      }
      var spell_container = AJS.TD();
      this.spell_container = spell_container;
      tr.appendChild(spell_container);
      tbody.appendChild(tr);
      table.appendChild(tbody);
      AJS.insertBefore(table, this.text_area);
      AJS.setHeight(table, spell_container, r_height);
      AJS.setWidth(table, spell_container, r_width);
      spell_container.style.textAlign = "right";
    }
    this.checkSpellingState();
  } else {
    if (this.report_ta_not_found) {
      alert("Text area not found");
    }
  }
};
GoogieSpell.prototype.setSpellContainer = function(elm$$40) {
  this.spell_container = AJS.$(elm$$40);
};
GoogieSpell.prototype.setLanguages = function(lang_dict) {
  this.lang_to_word = lang_dict;
  this.langlist_codes = AJS.keys(lang_dict);
};
GoogieSpell.prototype.setForceWidthHeight = function(width$$9, height$$8) {
  this.force_width = width$$9;
  this.force_height = height$$8;
};
GoogieSpell.prototype.setDecoration = function(bool) {
  this.decoration = bool;
};
GoogieSpell.prototype.dontUseCloseButtons = function() {
  this.use_close_btn = false;
};
GoogieSpell.prototype.appendNewMenuItem = function(name$$33, call_back_fn, checker) {
  this.extra_menu_items.push([name$$33, call_back_fn, checker]);
};
GoogieSpell.prototype.appendCustomMenuBuilder = function(eval$$1, builder) {
  this.custom_menu_builder.push([eval$$1, builder]);
};
GoogieSpell.prototype.setFocus = function() {
  try {
    this.focus_link_b.focus();
    this.focus_link_t.focus();
    return true;
  } catch (e$$18) {
    return false;
  }
};
GoogieSpell.prototype.getValue = function(ta) {
  return ta.value;
};
GoogieSpell.prototype.setValue = function(ta$$1, value$$28) {
  ta$$1.value = value$$28;
};
GoogieSpell.prototype.setStateChanged = function(current_state) {
  this.state = current_state;
  if (this.spelling_state_observer != null && this.report_state_change) {
    this.spelling_state_observer(current_state, this);
  }
};
GoogieSpell.prototype.setReportStateChange = function(bool$$1) {
  this.report_state_change = bool$$1;
};
GoogieSpell.prototype.getGoogleUrl = function() {
  return this.server_url + GOOGIE_CUR_LANG;
};
GoogieSpell.escapeSepcial = function(val$$4) {
  return val$$4.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
};
GoogieSpell.createXMLReq = function(text$$9) {
  return'<?xml version="1.0" encoding="utf-8" ?><spellrequest textalreadyclipped="0" ignoredups="0" ignoredigits="1" ignoreallcaps="1"><text>' + text$$9 + "</text></spellrequest>";
};
GoogieSpell.prototype.spellCheck = function(ignore) {
  var me$$2 = this;
  this.cnt_errors_fixed = 0;
  this.cnt_errors = 0;
  this.setStateChanged("checking_spell");
  if (this.main_controller) {
    this.appendIndicator(this.spell_span);
  }
  this.error_links = [];
  this.ta_scroll_top = this.text_area.scrollTop;
  try {
    this.hideLangWindow();
  } catch (e$$19) {
  }
  this.ignore = ignore;
  if (this.getValue(this.text_area) == "" || ignore) {
    if (!me$$2.custom_no_spelling_error) {
      me$$2.flashNoSpellingErrorState();
    } else {
      me$$2.custom_no_spelling_error(me$$2);
    }
    me$$2.removeIndicator();
    return;
  }
  this.createEditLayer(this.text_area.offsetWidth, this.text_area.offsetHeight);
  this.createErrorWindow();
  AJS.getBody().appendChild(this.error_window);
  if (this.main_controller) {
    this.spell_span.onclick = null;
  }
  this.orginal_text = this.getValue(this.text_area);
  var d$$3 = AJS.getRequest(this.getGoogleUrl());
  var reqdone = function(res_txt) {
    var r_text = res_txt;
    me$$2.results = me$$2.parseResult(r_text);
    if (r_text.match(/<c.*>/) != null) {
      me$$2.showErrorsInIframe();
      me$$2.resumeEditingState();
    } else {
      if (!me$$2.custom_no_spelling_error) {
        me$$2.flashNoSpellingErrorState();
      } else {
        me$$2.custom_no_spelling_error(me$$2);
      }
    }
    me$$2.removeIndicator();
  };
  d$$3.addCallback(reqdone);
  reqdone = null;
  var reqfailed = function(res_txt$$1, req$$7) {
    if (me$$2.custom_ajax_error) {
      me$$2.custom_ajax_error(req$$7);
    } else {
      alert("An error was encountered on the server. Please try again later.");
    }
    if (me$$2.main_controller) {
      AJS.removeElement(me$$2.spell_span);
      me$$2.removeIndicator();
    }
    me$$2.checkSpellingState();
  };
  d$$3.addErrback(reqfailed);
  reqfailed = null;
  var req_text = GoogieSpell.escapeSepcial(this.orginal_text);
  d$$3.sendReq(GoogieSpell.createXMLReq(req_text));
};
GoogieSpell.prototype.parseResult = function(r_text$$1) {
  var re_split_attr_c = /\w+="(\d+|true)"/g;
  var re_split_text = /\t/g;
  var matched_c = r_text$$1.match(/<c[^>]*>[^<]*<\/c>/g);
  var results = new Array;
  if (matched_c == null) {
    return results;
  }
  var i$$18 = 0;
  for (;i$$18 < matched_c.length;i$$18++) {
    var item = new Array;
    this.errorFound();
    item["attrs"] = new Array;
    var split_c = matched_c[i$$18].match(re_split_attr_c);
    var j$$2 = 0;
    for (;j$$2 < split_c.length;j$$2++) {
      var c_attr = split_c[j$$2].split(/=/);
      var val$$5 = c_attr[1].replace(/"/g, "");
      if (val$$5 != "true") {
        item["attrs"][c_attr[0]] = parseInt(val$$5);
      } else {
        item["attrs"][c_attr[0]] = val$$5;
      }
    }
    item["suggestions"] = new Array;
    var only_text = matched_c[i$$18].replace(/<[^>]*>/g, "");
    var split_t = only_text.split(re_split_text);
    var k$$3 = 0;
    for (;k$$3 < split_t.length;k$$3++) {
      if (split_t[k$$3] != "") {
        item["suggestions"].push(split_t[k$$3]);
      }
    }
    results.push(item);
  }
  return results;
};
GoogieSpell.prototype.errorFixed = function() {
  this.cnt_errors_fixed++;
  if (this.all_errors_fixed_observer) {
    if (this.cnt_errors_fixed == this.cnt_errors) {
      this.hideErrorWindow();
      this.all_errors_fixed_observer();
    }
  }
};
GoogieSpell.prototype.errorFound = function() {
  this.cnt_errors++;
};
GoogieSpell.prototype.createErrorWindow = function() {
  this.error_window = AJS.DIV();
  this.error_window.className = "googie_window";
  this.error_window.googie_action_btn = "1";
};
GoogieSpell.prototype.isErrorWindowShown = function() {
  return this.error_window != null && this.error_window.style.visibility == "visible";
};
GoogieSpell.prototype.hideErrorWindow = function() {
  try {
    this.error_window.style.visibility = "hidden";
    if (this.error_window_iframe) {
      this.error_window_iframe.style.visibility = "hidden";
    }
  } catch (e$$20) {
  }
};
GoogieSpell.prototype.updateOrginalText = function(offset$$8, old_value, new_value, id$$2) {
  var part_1 = this.orginal_text.substring(0, offset$$8);
  var part_2 = this.orginal_text.substring(offset$$8 + old_value.length);
  this.orginal_text = part_1 + new_value + part_2;
  this.setValue(this.text_area, this.orginal_text);
  var add_2_offset = new_value.length - old_value.length;
  var j$$3 = 0;
  for (;j$$3 < this.results.length;j$$3++) {
    if (j$$3 != id$$2 && j$$3 > id$$2) {
      this.results[j$$3]["attrs"]["o"] += add_2_offset;
    }
  }
};
GoogieSpell.prototype.saveOldValue = function(elm$$41, old_value$$1) {
  elm$$41.is_changed = true;
  elm$$41.old_value = old_value$$1;
};
GoogieSpell.prototype.createListSeparator = function() {
  var e_col = AJS.TD(" ");
  e_col.googie_action_btn = "1";
  e_col.style.cursor = "default";
  e_col.style.fontSize = "3px";
  e_col.style.borderTop = "1px solid #ccc";
  e_col.style.paddingTop = "3px";
  return AJS.TR(e_col);
};
GoogieSpell.prototype.correctError = function(id$$3, elm$$42, l_elm, rm_pre_space) {
  var old_value$$2 = elm$$42.innerHTML;
  var new_value$$1 = l_elm.innerHTML;
  var offset$$9 = this.results[id$$3]["attrs"]["o"];
  if (rm_pre_space) {
    var pre_length = elm$$42.previousSibling.innerHTML;
    elm$$42.previousSibling.innerHTML = pre_length.slice(0, pre_length.length - 1);
    old_value$$2 = " " + old_value$$2;
    offset$$9--;
  }
  this.hideErrorWindow();
  this.updateOrginalText(offset$$9, old_value$$2, new_value$$1, id$$3);
  elm$$42.innerHTML = new_value$$1;
  elm$$42.style.color = "green";
  elm$$42.is_corrected = true;
  this.results[id$$3]["attrs"]["l"] = new_value$$1.length;
  if (!AJS.isDefined(elm$$42.old_value)) {
    this.saveOldValue(elm$$42, old_value$$2);
  }
  this.errorFixed();
};
GoogieSpell.prototype.showErrorWindow = function(elm$$43, id$$4) {
  if (this.show_menu_observer) {
    this.show_menu_observer(this);
  }
  var me$$3 = this;
  var abs_pos = AJS.absolutePosition(elm$$43);
  abs_pos.y -= this.edit_layer.scrollTop;
  this.error_window.style.visibility = "visible";
  AJS.setTop(this.error_window, abs_pos.y + 20);
  AJS.setLeft(this.error_window, abs_pos.x);
  var table$$1 = AJS.TABLE({"class":"googie_list"});
  table$$1.googie_action_btn = "1";
  var list$$11 = AJS.TBODY();
  var changed = false;
  if (this.custom_menu_builder != []) {
    var k$$4 = 0;
    for (;k$$4 < this.custom_menu_builder.length;k$$4++) {
      var eb = this.custom_menu_builder[k$$4];
      if (eb[0](this.results[id$$4])) {
        changed = eb[1](this, list$$11, elm$$43);
        break;
      }
    }
  }
  if (!changed) {
    var suggestions = this.results[id$$4]["suggestions"];
    var offset$$10 = this.results[id$$4]["attrs"]["o"];
    var len = this.results[id$$4]["attrs"]["l"];
    if (suggestions.length == 0) {
      var row = AJS.TR();
      var item$$1 = AJS.TD({"style":"cursor: default;"});
      var dummy = AJS.SPAN();
      dummy.innerHTML = this.lang_no_suggestions;
      AJS.ACN(item$$1, AJS.TN(dummy.innerHTML));
      item$$1.googie_action_btn = "1";
      row.appendChild(item$$1);
      list$$11.appendChild(row);
    }
    i = 0;
    for (;i < suggestions.length;i++) {
      row = AJS.TR();
      item$$1 = AJS.TD();
      dummy = AJS.SPAN();
      dummy.innerHTML = suggestions[i];
      var tre = AJS.TN(dummy.innerHTML);
      item$$1.appendChild(tre);
      var fn$$17 = function(e$$21) {
        var l_elm$$1 = AJS.getEventElm(e$$21);
        this.correctError(id$$4, elm$$43, l_elm$$1);
      };
      AJS.AEV(item$$1, "click", AJS.$b(fn$$17, this));
      var mytxfn1 = GoogieSpell.item_onmouseover;
      AJS.AEV(item$$1, "mouseover", mytxfn1);
      var mytxfn2 = GoogieSpell.item_onmouseout;
      AJS.AEV(item$$1, "mouseout", mytxfn2);
      row.appendChild(item$$1);
      list$$11.appendChild(row);
    }
    if (elm$$43.is_changed && elm$$43.innerHTML != elm$$43.old_value) {
      var old_value$$3 = elm$$43.old_value;
      var revert_row = AJS.TR();
      var revert = AJS.TD();
      mytxfn1 = GoogieSpell.item_onmouseover;
      AJS.AEV(revert, "mouseover", mytxfn1);
      mytxfn2 = GoogieSpell.item_onmouseout;
      AJS.AEV(revert, "mouseout", mytxfn2);
      var rev_span = AJS.SPAN({"class":"googie_list_revert"});
      rev_span.innerHTML = this.lang_revert + " " + old_value$$3;
      revert.appendChild(rev_span);
      fn$$17 = function(e$$22) {
        this.updateOrginalText(offset$$10, elm$$43.innerHTML, old_value$$3, id$$4);
        elm$$43.is_corrected = true;
        elm$$43.style.color = "#b91414";
        elm$$43.innerHTML = old_value$$3;
        this.hideErrorWindow();
      };
      AJS.AEV(revert, "click", AJS.$b(fn$$17, this));
      revert_row.appendChild(revert);
      list$$11.appendChild(revert_row);
    }
    var edit_row = AJS.TR();
    var edit = AJS.TD({"style":"cursor: default"});
    var edit_input = AJS.INPUT({"style":"width: 120px; margin:0; padding:0", "value":elm$$43.innerHTML});
    edit_input.googie_action_btn = "1";
    var onsub = function() {
      if (edit_input.value != "") {
        if (!AJS.isDefined(elm$$43.old_value)) {
          this.saveOldValue(elm$$43, elm$$43.innerHTML);
        }
        this.updateOrginalText(offset$$10, elm$$43.innerHTML, edit_input.value, id$$4);
        elm$$43.style.color = "green";
        elm$$43.is_corrected = true;
        elm$$43.innerHTML = edit_input.value;
        this.hideErrorWindow();
      }
      return false;
    };
    onsub = AJS.$b(onsub, this);
    var ok_pic = AJS.IMG({"src":this.img_dir + "ok.gif", "style":"width: 32px; height: 16px; margin-left: 2px; margin-right: 2px; cursor: pointer;"});
    var edit_form = AJS.FORM({"style":"margin: 0; padding: 0; cursor: default;"}, edit_input, ok_pic);
    edit_form.googie_action_btn = "1";
    edit.googie_action_btn = "1";
    AJS.AEV(edit_form, "submit", onsub);
    AJS.AEV(ok_pic, "click", onsub);
    edit.appendChild(edit_form);
    edit_row.appendChild(edit);
    list$$11.appendChild(edit_row);
    if (this.extra_menu_items.length > 0) {
      AJS.ACN(list$$11, this.createListSeparator());
    }
    var loop = function(i$$19) {
      if (i$$19 < me$$3.extra_menu_items.length) {
        var e_elm = me$$3.extra_menu_items[i$$19];
        if (!e_elm[2] || e_elm[2](elm$$43, me$$3)) {
          var e_row = AJS.TR();
          var e_col$$1 = AJS.TD(e_elm[0]);
          e_col$$1.onmouseover = GoogieSpell.item_onmouseover;
          e_col$$1.onmouseout = GoogieSpell.item_onmouseout;
          var fn$$18 = function() {
            return e_elm[1](elm$$43, me$$3);
          };
          AJS.AEV(e_col$$1, "click", fn$$18);
          AJS.ACN(e_row, e_col$$1);
          AJS.ACN(list$$11, e_row);
        }
        loop(i$$19 + 1);
      }
    };
    loop(0);
    loop = null;
    if (this.use_close_btn) {
      AJS.ACN(list$$11, this.createCloseButton(this.hideErrorWindow));
    }
  }
  table$$1.appendChild(list$$11);
  this.error_window.appendChild(table$$1);
  if (AJS.isIe() && !this.error_window_iframe) {
    var iframe = AJS.IFRAME({"style":"position: absolute; z-index: 0;"});
    AJS.ACN(AJS.getBody(), iframe);
    this.error_window_iframe = iframe;
  }
  if (AJS.isIe()) {
    iframe = this.error_window_iframe;
    AJS.setTop(iframe, this.error_window.offsetTop);
    AJS.setLeft(iframe, this.error_window.offsetLeft);
    AJS.setWidth(iframe, this.error_window.offsetWidth);
    AJS.setHeight(iframe, this.error_window.offsetHeight);
    iframe.style.visibility = "visible";
  }
  var link = this.createFocusLink("link");
  var a1 = AJS.TD({"style":"text-align: right; font-size: 1px; height: 1px; margin: 0; padding: 0;"}, link);
  var a2 = AJS.TR(a1);
  list$$11.appendChild(a2);
  link.focus();
};
GoogieSpell.prototype.createEditLayer = function(width$$10, height$$9) {
  this.edit_layer = AJS.DIV({"class":"googie_edit_layer"});
  this.edit_layer.className = this.text_area.className;
  this.edit_layer.style.border = "1px solid #999";
  this.edit_layer.style.backgroundColor = "#f7f7f7";
  this.edit_layer.style.padding = "3px";
  this.edit_layer.style.margin = "0px";
  AJS.setWidth(this.edit_layer, width$$10 - 8);
  if (AJS.nodeName(this.text_area) != "input" || this.getValue(this.text_area) == "") {
    this.edit_layer.style.overflow = "auto";
    AJS.setHeight(this.edit_layer, height$$9 - 6);
  } else {
    this.edit_layer.style.overflow = "hidden";
  }
  if (this.edit_layer_dbl_click) {
    var me$$4 = this;
    var fn$$19 = function(e$$23) {
      if (AJS.getEventElm(e$$23).className != "googie_link" && !me$$4.isErrorWindowShown()) {
        me$$4.resumeEditing();
        var fn1$$1 = function() {
          me$$4.text_area.focus();
          fn1$$1 = null;
        };
        setTimeout(fn1$$1, 10);
      }
      return false;
    };
    this.edit_layer.ondblclick = fn$$19;
    fn$$19 = null;
  }
};
GoogieSpell.prototype.resumeEditing = function() {
  this.setStateChanged("spell_check");
  this.switch_lan_pic.style.display = "inline";
  if (this.edit_layer) {
    this.el_scroll_top = this.edit_layer.scrollTop;
  }
  this.hideErrorWindow();
  if (this.main_controller) {
    this.spell_span.className = "googie_no_style";
  }
  if (!this.ignore) {
    try {
      this.edit_layer.parentNode.removeChild(this.edit_layer);
      if (this.use_focus) {
        AJS.removeElement(this.focus_link_t);
        AJS.removeElement(this.focus_link_b);
      }
    } catch (e$$24) {
    }
    AJS.showElement(this.text_area);
    if (this.el_scroll_top != undefined) {
      this.text_area.scrollTop = this.el_scroll_top;
    }
  }
  this.checkSpellingState(false);
};
GoogieSpell.prototype.createErrorLink = function(text$$10, id$$5) {
  var elm$$44 = AJS.SPAN({"class":"googie_link"});
  var me$$5 = this;
  var d$$4 = function(e$$25) {
    me$$5.showErrorWindow(elm$$44, id$$5);
    d$$4 = null;
    return false;
  };
  AJS.AEV(elm$$44, "click", d$$4);
  elm$$44.googie_action_btn = "1";
  elm$$44.g_id = id$$5;
  elm$$44.is_corrected = false;
  AJS.AEV(elm$$44, "contextmenu", d$$4);
  elm$$44.innerHTML = text$$10;
  return elm$$44;
};
GoogieSpell.createPart = function(txt_part) {
  if (txt_part == " ") {
    return AJS.TN(" ");
  }
  var result$$2 = AJS.SPAN();
  var is_first = true;
  var is_safari = navigator.userAgent.toLowerCase().indexOf("safari") != -1;
  var part = AJS.SPAN();
  txt_part = GoogieSpell.escapeSepcial(txt_part);
  txt_part = txt_part.replace(/\n/g, "<br>");
  txt_part = txt_part.replace(/    /g, " &nbsp;");
  txt_part = txt_part.replace(/^ /g, "&nbsp;");
  txt_part = txt_part.replace(/ $/g, "&nbsp;");
  part.innerHTML = txt_part;
  return part;
};
GoogieSpell.prototype.showErrorsInIframe = function() {
  var output = AJS.DIV();
  output.style.textAlign = "left";
  var pointer = 0;
  var results$$1 = this.results;
  if (results$$1.length > 0) {
    var i$$20 = 0;
    for (;i$$20 < results$$1.length;i$$20++) {
      var offset$$11 = results$$1[i$$20]["attrs"]["o"];
      var len$$1 = results$$1[i$$20]["attrs"]["l"];
      var part_1_text = this.orginal_text.substring(pointer, offset$$11);
      var part_1$$1 = GoogieSpell.createPart(part_1_text);
      output.appendChild(part_1$$1);
      pointer += offset$$11 - pointer;
      var err_link = this.createErrorLink(this.orginal_text.substr(offset$$11, len$$1), i$$20);
      this.error_links.push(err_link);
      output.appendChild(err_link);
      pointer += len$$1;
    }
    var part_2_text = this.orginal_text.substr(pointer, this.orginal_text.length);
    var part_2$$1 = GoogieSpell.createPart(part_2_text);
    output.appendChild(part_2$$1);
  } else {
    output.innerHTML = this.orginal_text;
  }
  var me$$6 = this;
  if (this.custom_item_evaulator) {
    AJS.map(this.error_links, function(elm$$45) {
      me$$6.custom_item_evaulator(me$$6, elm$$45);
    });
  }
  AJS.ACN(this.edit_layer, output);
  this.text_area_bottom = this.text_area.offsetTop + this.text_area.offsetHeight;
  AJS.hideElement(this.text_area);
  AJS.insertBefore(this.edit_layer, this.text_area);
  if (this.use_focus) {
    this.focus_link_t = this.createFocusLink("focus_t");
    this.focus_link_b = this.createFocusLink("focus_b");
    AJS.insertBefore(this.focus_link_t, this.edit_layer);
    AJS.insertAfter(this.focus_link_b, this.edit_layer);
  }
  this.edit_layer.scrollTop = this.ta_scroll_top;
};
GoogieSpell.prototype.createLangWindow = function() {
  this.language_window = AJS.DIV({"class":"googie_window"});
  AJS.setWidth(this.language_window, 100);
  this.language_window.googie_action_btn = "1";
  var table$$2 = AJS.TABLE({"class":"googie_list"});
  AJS.setWidth(table$$2, "100%");
  var list$$12 = AJS.TBODY();
  this.lang_elms = new Array;
  i = 0;
  for (;i < this.langlist_codes.length;i++) {
    var row$$1 = AJS.TR();
    var item$$2 = AJS.TD();
    item$$2.googieId = this.langlist_codes[i];
    this.lang_elms.push(item$$2);
    var lang_span = AJS.SPAN();
    lang_span.innerHTML = this.lang_to_word[this.langlist_codes[i]];
    item$$2.appendChild(AJS.TN(lang_span.innerHTML));
    var fn$$20 = function(e$$26) {
      var elm$$46 = AJS.getEventElm(e$$26);
      this.deHighlightCurSel();
      this.setCurrentLanguage(elm$$46.googieId);
      if (this.lang_state_observer != null) {
        this.lang_state_observer();
      }
      this.highlightCurSel();
      this.hideLangWindow();
    };
    AJS.AEV(item$$2, "click", AJS.$b(fn$$20, this));
    item$$2.onmouseover = function(e$$27) {
      var i_it = AJS.getEventElm(e$$27);
      if (i_it.className != "googie_list_selected") {
        i_it.className = "googie_list_onhover";
      }
    };
    item$$2.onmouseout = function(e$$28) {
      var i_it$$1 = AJS.getEventElm(e$$28);
      if (i_it$$1.className != "googie_list_selected") {
        i_it$$1.className = "googie_list_onout";
      }
    };
    row$$1.appendChild(item$$2);
    list$$12.appendChild(row$$1);
  }
  if (this.use_close_btn) {
    list$$12.appendChild(this.createCloseButton(this.hideLangWindow));
  }
  this.highlightCurSel();
  table$$2.appendChild(list$$12);
  this.language_window.appendChild(table$$2);
};
GoogieSpell.prototype.setCurrentLanguage = function(lan_code) {
  GOOGIE_CUR_LANG = lan_code;
  var now = new Date;
  now.setTime(now.getTime() + 365 * 24 * 60 * 60 * 1E3);
  setCookie("language", lan_code, now);
};
GoogieSpell.prototype.isLangWindowShown = function() {
  return this.language_window != null && this.language_window.style.visibility == "visible";
};
GoogieSpell.prototype.hideLangWindow = function() {
  try {
    this.language_window.style.visibility = "hidden";
    this.switch_lan_pic.className = "googie_lang_3d_on";
  } catch (e$$29) {
  }
};
GoogieSpell.prototype.deHighlightCurSel = function() {
  this.lang_cur_elm.className = "googie_list_onout";
};
GoogieSpell.prototype.highlightCurSel = function() {
  if (GOOGIE_CUR_LANG == null) {
    GOOGIE_CUR_LANG = GOOGIE_DEFAULT_LANG;
  }
  var i$$21 = 0;
  for (;i$$21 < this.lang_elms.length;i$$21++) {
    if (this.lang_elms[i$$21].googieId == GOOGIE_CUR_LANG) {
      this.lang_elms[i$$21].className = "googie_list_selected";
      this.lang_cur_elm = this.lang_elms[i$$21];
    } else {
      this.lang_elms[i$$21].className = "googie_list_onout";
    }
  }
};
GoogieSpell.prototype.showLangWindow = function(elm$$47, ofst_top, ofst_left) {
  if (this.show_menu_observer) {
    this.show_menu_observer(this);
  }
  if (!AJS.isDefined(ofst_top)) {
    ofst_top = 20;
  }
  if (!AJS.isDefined(ofst_left)) {
    ofst_left = 100;
  }
  this.createLangWindow();
  AJS.getBody().appendChild(this.language_window);
  var abs_pos$$1 = AJS.absolutePosition(elm$$47);
  AJS.showElement(this.language_window);
  AJS.setTop(this.language_window, abs_pos$$1.y + ofst_top);
  AJS.setLeft(this.language_window, abs_pos$$1.x + ofst_left - this.language_window.offsetWidth);
  this.highlightCurSel();
  this.language_window.style.visibility = "visible";
};
GoogieSpell.prototype.createChangeLangPic = function() {
  var img$$2 = AJS.IMG({"src":this.img_dir + "change_lang.gif", "alt":"Change language"});
  img$$2.googie_action_btn = "1";
  var switch_lan = AJS.SPAN({"class":"googie_lang_3d_on", "style":"padding-left: 6px;"}, img$$2);
  var fn$$21 = function(e$$30) {
    var elm$$48 = AJS.getEventElm(e$$30);
    if (AJS.nodeName(elm$$48) == "img") {
      elm$$48 = elm$$48.parentNode;
    }
    if (elm$$48.className == "googie_lang_3d_click") {
      elm$$48.className = "googie_lang_3d_on";
      this.hideLangWindow();
    } else {
      elm$$48.className = "googie_lang_3d_click";
      this.showLangWindow(switch_lan);
    }
  };
  AJS.AEV(switch_lan, "click", AJS.$b(fn$$21, this));
  return switch_lan;
};
GoogieSpell.prototype.createSpellDiv = function() {
  var chk_spell = AJS.SPAN({"class":"googie_check_spelling_link", "id":"googie_check_spelling_link"});
  chk_spell.innerHTML = this.lang_chck_spell;
  var spell_img = null;
  if (this.show_spell_img) {
    spell_img = AJS.IMG({"src":this.img_dir + "spellc.gif"});
  }
  return AJS.SPAN(spell_img, " ", chk_spell);
};
GoogieSpell.prototype.flashNoSpellingErrorState = function(on_finish) {
  var no_spell_errors;
  if (on_finish) {
    var fn$$22 = function() {
      on_finish();
      this.checkSpellingState();
    };
    no_spell_errors = fn$$22;
  } else {
    no_spell_errors = this.checkSpellingState;
  }
  this.setStateChanged("no_error_found");
  if (this.main_controller) {
    AJS.hideElement(this.switch_lan_pic);
    var dummy$$1 = AJS.IMG({"src":this.img_dir + "blank.gif", "style":"height: 16px; width: 1px;"});
    var rsm = AJS.SPAN();
    rsm.innerHTML = this.lang_no_error_found;
    AJS.RCN(this.spell_span, AJS.SPAN(dummy$$1, rsm));
    this.spell_span.className = "googie_check_spelling_ok";
    this.spell_span.style.textDecoration = "none";
    this.spell_span.style.cursor = "default";
    setTimeout(AJS.$b(no_spell_errors, this), 1200);
  }
};
GoogieSpell.prototype.resumeEditingState = function() {
  this.setStateChanged("resume_editing");
  if (this.main_controller) {
    AJS.hideElement(this.switch_lan_pic);
    var dummy$$2 = AJS.IMG({"src":this.img_dir + "blank.gif", "style":"height: 16px; width: 1px;"});
    var rsm$$1 = AJS.SPAN();
    rsm$$1.innerHTML = this.lang_rsm_edt;
    AJS.RCN(this.spell_span, AJS.SPAN(dummy$$2, rsm$$1));
    var fn$$23 = function(e$$31) {
      this.resumeEditing();
    };
    var myfn = AJS.$b(fn$$23, this);
    this.spell_span.addEventListener("click", myfn, false);
    this.spell_span.className = "googie_resume_editing";
  }
  try {
    this.edit_layer.scrollTop = this.ta_scroll_top;
  } catch (e$$32) {
  }
};
GoogieSpell.prototype.checkSpellingState = function(fire) {
  if (!AJS.isDefined(fire) || fire) {
    this.setStateChanged("spell_check");
  }
  if (this.show_change_lang_pic) {
    this.switch_lan_pic = this.createChangeLangPic();
  } else {
    this.switch_lan_pic = AJS.SPAN();
  }
  var span_chck = this.createSpellDiv();
  var fn$$24 = function() {
    this.spellCheck();
  };
  if (this.custom_spellcheck_starter) {
    span_chck.onclick = this.custom_spellcheck_starter;
  } else {
    var myfn$$1 = AJS.$b(fn$$24, this);
    AJS.AEV(span_chck, "click", myfn$$1);
  }
  this.spell_span = span_chck;
  if (this.main_controller) {
    if (this.change_lang_pic_placement == "left") {
      AJS.RCN(this.spell_container, span_chck, " ", this.switch_lan_pic);
    } else {
      AJS.RCN(this.spell_container, this.switch_lan_pic, " ", span_chck);
    }
  }
};
GoogieSpell.item_onmouseover = function(e$$33) {
  var elm$$49 = AJS.getEventElm(e$$33);
  if (elm$$49.className != "googie_list_revert" && elm$$49.className != "googie_list_close") {
    elm$$49.className = "googie_list_onhover";
  } else {
    elm$$49.parentNode.className = "googie_list_onhover";
  }
};
GoogieSpell.item_onmouseout = function(e$$34) {
  var elm$$50 = AJS.getEventElm(e$$34);
  if (elm$$50.className != "googie_list_revert" && elm$$50.className != "googie_list_close") {
    elm$$50.className = "googie_list_onout";
  } else {
    elm$$50.parentNode.className = "googie_list_onout";
  }
};
GoogieSpell.prototype.createCloseButton = function(c_fn) {
  return this.createButton(this.lang_close, "googie_list_close", AJS.$b(c_fn, this));
};
GoogieSpell.prototype.createButton = function(name$$34, css_class, c_fn$$1) {
  var btn_row = AJS.TR();
  var btn = AJS.TD();
  btn.onmouseover = GoogieSpell.item_onmouseover;
  btn.onmouseout = GoogieSpell.item_onmouseout;
  var spn_btn;
  if (css_class != "") {
    spn_btn = AJS.SPAN({"class":css_class});
    spn_btn.innerHTML = name$$34;
  } else {
    spn_btn = AJS.TN(name$$34);
  }
  btn.appendChild(spn_btn);
  AJS.AEV(btn, "click", c_fn$$1);
  btn_row.appendChild(btn);
  return btn_row;
};
GoogieSpell.prototype.removeIndicator = function(elm$$51) {
  try {
    AJS.removeElement(this.indicator);
  } catch (e$$35) {
  }
};
GoogieSpell.prototype.appendIndicator = function(elm$$52) {
  var img$$3 = AJS.IMG({"src":this.img_dir + "indicator.gif", "style":"margin-right: 5px;"});
  AJS.setWidth(img$$3, 16);
  AJS.setHeight(img$$3, 16);
  this.indicator = img$$3;
  img$$3.style.textDecoration = "none";
  try {
    AJS.insertBefore(img$$3, elm$$52);
  } catch (e$$36) {
  }
};
GoogieSpell.prototype.createFocusLink = function(name$$35) {
  return AJS.A({"href":"javascript:;", name:name$$35});
};
function setCookie(name$$36, value$$29, expires, path, domain, secure) {
  var curCookie = name$$36 + "=" + escape(value$$29) + (expires ? "; expires=" + expires.toGMTString() : "") + (path ? "; path=" + path : "") + (domain ? "; domain=" + domain : "") + (secure ? "; secure" : "");
  document.cookie = curCookie;
}
function getCookie(name$$37) {
  var dc = document.cookie;
  var prefix$$2 = name$$37 + "=";
  var begin$$11 = dc.indexOf("; " + prefix$$2);
  if (begin$$11 == -1) {
    begin$$11 = dc.indexOf(prefix$$2);
    if (begin$$11 != 0) {
      return null;
    }
  } else {
    begin$$11 += 2;
  }
  var end$$1 = document.cookie.indexOf(";", begin$$11);
  if (end$$1 == -1) {
    end$$1 = dc.length;
  }
  return unescape(dc.substring(begin$$11 + prefix$$2.length, end$$1));
}
var x = document.cookie;
var googie1 = new GoogieSpell("./", "./spell-check/spell-check.php?lang=");
googie1.decorateTextarea("ta1")

}
