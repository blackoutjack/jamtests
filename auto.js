
function doApp(applist, appidx) {
  if (appidx < applist.length) {
    var href = applist[appidx];
    location.href = href;
  }
}

function doTestCase(test, testidx, appidx, wait) {
  var link = document.getElementById(test);
  if (link) {
    var url = link.href;
    url += '&autoindex=' + testidx;
    url += '&auto=1';
    url += '&autoapp=' + appidx;
    url += '&autowait=' + wait;
    location.href = url;
  } else {
    alert('Test case not found: ' + test);
  }
}

function replaceParameterValue(url, param, newval) {
  var idx = url.indexOf(param + '=');
  if (idx == -1) {
    var idx2 = url.indexOf('?');
    url += idx2 == -1 ? '?' : '&';
    return url + param + '=' + newval;
  } else {
    var chars = 0;
    var vstart = idx + param.length + 1;
    for (var i=vstart; i<url.length; i++) { 
      var c = url.charAt(i);
      if (c == '&') break;
      chars++;
    }
    var u0 = url.substring(0, vstart);
    var u1 = url.substring(vstart + chars);
    return u0 + newval + u1;
  }
}

function goBackUp(appidx, wait) {
  var loc = location.href;
  // Strip the parameter string.
  var paramstart = loc.indexOf('?');
  if (paramstart > -1) {
    loc = loc.substring(0, paramstart);
  }
  var slash = loc.lastIndexOf('/');
  var up = loc.substring(0, slash);
  // Strip another level if there was a trailing slash.
  if (slash == up.length) {
    slash = up.lastIndexOf('/');
    up = up.substring(0, slash);
  }
  up += "?auto=1";
  up += "&autoapp=" + appidx;
  up += "&autowait=" + wait;

  location.href = up;
}

function goToPage(url, param, newval) {
  if (param) {
    url = replaceParameterValue(url, param, newval);
  }
  //alert(url);
  location.href = url;
}

function doTestButton(eltid) {
  var btn = document.getElementById(eltid);
  if (btn) {
    btn.click();
  }
}

