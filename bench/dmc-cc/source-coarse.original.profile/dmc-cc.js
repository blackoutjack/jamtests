
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
var dtCh = "/";
var minYear = 1900;
var maxYear = 2100;
function isInteger(s$$2) {
  var i$$1;
  i$$1 = 0;
  for (;i$$1 < s$$2.length;i$$1++) {
    var c = s$$2.charAt(i$$1);
    if (c < "0" || c > "9") {
      return false;
    }
  }
  return true;
}
function stripCharsInBag(s$$3, bag) {
  var i$$2;
  var returnString = "";
  i$$2 = 0;
  for (;i$$2 < s$$3.length;i$$2++) {
    var c$$1 = s$$3.charAt(i$$2);
    if (bag.indexOf(c$$1) == -1) {
      returnString += c$$1;
    }
  }
  return returnString;
}
function daysInFebruary(year$$2) {
  return year$$2 % 4 == 0 && (!(year$$2 % 100 == 0) || year$$2 % 400 == 0) ? 29 : 28;
}
function DaysArray(n$$1) {
  var i$$3 = 1;
  for (;i$$3 <= n$$1;i$$3++) {
    this[i$$3] = 31;
    if (i$$3 == 4 || i$$3 == 6 || i$$3 == 9 || i$$3 == 11) {
      this[i$$3] = 30;
    }
    if (i$$3 == 2) {
      this[i$$3] = 29;
    }
  }
  return this;
}
function isDate(dtStr) {
  var daysInMonth = DaysArray(12);
  var pos1 = dtStr.indexOf(dtCh);
  var pos2 = dtStr.indexOf(dtCh, pos1 + 1);
  var strMonth = dtStr.substring(0, pos1);
  var strDay = dtStr.substring(pos1 + 1, pos2);
  var strYear = dtStr.substring(pos2 + 1);
  strYr = strYear;
  if (strDay.charAt(0) == "0" && strDay.length > 1) {
    strDay = strDay.substring(1);
  }
  if (strMonth.charAt(0) == "0" && strMonth.length > 1) {
    strMonth = strMonth.substring(1);
  }
  var i$$4 = 1;
  for (;i$$4 <= 3;i$$4++) {
    if (strYr.charAt(0) == "0" && strYr.length > 1) {
      strYr = strYr.substring(1);
    }
  }
  month = parseInt(strMonth);
  day = parseInt(strDay);
  year = parseInt(strYr);
  if (pos1 == -1 || pos2 == -1) {
    alert("The date format should be : mm/dd/yyyy");
    return false;
  }
  if (strMonth.length < 1 || month < 1 || month > 12) {
    alert("Please enter a valid month");
    return false;
  }
  if (strDay.length < 1 || day < 1 || day > 31 || month == 2 && day > daysInFebruary(year) || day > daysInMonth[month]) {
    alert("Please enter a valid day");
    return false;
  }
  if (strYear.length != 4 || year == 0 || year < minYear || year > maxYear) {
    alert("Please enter a valid 4 digit year between " + minYear + " and " + maxYear);
    return false;
  }
  if (dtStr.indexOf(dtCh, pos2 + 1) != -1 || isInteger(stripCharsInBag(dtStr, dtCh)) == false) {
    alert("Please enter a valid date");
    return false;
  }
  return true;
}
function check_dept_netid() {
  if (!isan(document.myForm4a.net_id.value)) {
    alert("Please enter a 10 digit UW ID Number");
    return false;
  } else {
    if (document.myForm4a.net_id.value.length != 10) {
      alert("Please enter a 10 digit UW ID Number");
      return false;
    } else {
      return true;
    }
  }
}
function check_pers_netid() {
  if (!isan(document.myForm.id.value)) {
    alert("Please enter a 10 digit UW ID Number");
    return false;
  } else {
    if (document.myForm.id.value.length != 10) {
      alert("Please enter a 10 digit UW ID Number");
      return false;
    } else {
      return true;
    }
  }
}
function isan(string) {
  if (string.length == 0) {
    return false;
  }
  var i$$5 = 0;
  for (;i$$5 < string.length;i$$5++) {
    if (string.substring(i$$5, i$$5 + 1) < "0" || string.substring(i$$5, i$$5 + 1) > "9") {
      return false;
    }
  }
  return true;
}

}

JAM.stopProfile('load');
