function isInteger(s$$2) {
  var i$$1;
  i$$1 = 0;
  var v28 = s$$2.length;
  var v1 = i$$1 < v28;
  for (;v1;) {
    var c = s$$2.charAt(i$$1);
    var v29 = c < "0";
    var v53 = !v29;
    if (v53) {
      v29 = c > "9";
    }
    var v0 = v29;
    if (v0) {
      return false;
    }
    i$$1 = i$$1 + 1;
    var v30 = s$$2.length;
    v1 = i$$1 < v30;
  }
  return true;
}
function stripCharsInBag(s$$3, bag) {
  var i$$2;
  var returnString = "";
  i$$2 = 0;
  var v31 = s$$3.length;
  var v3 = i$$2 < v31;
  for (;v3;) {
    var c$$1 = s$$3.charAt(i$$2);
    var v32 = bag.indexOf(c$$1);
    var v2 = v32 == -1;
    if (v2) {
      returnString = returnString + c$$1;
    }
    i$$2 = i$$2 + 1;
    var v33 = s$$3.length;
    v3 = i$$2 < v33;
  }
  return returnString;
}
function daysInFebruary(year$$2) {
  var v4;
  var v82 = year$$2 % 4;
  var v54 = v82 == 0;
  if (v54) {
    var v115 = year$$2 % 100;
    var v101 = v115 == 0;
    var v83 = !v101;
    var v103 = !v83;
    if (v103) {
      var v102 = year$$2 % 400;
      v83 = v102 == 0;
    }
    v54 = v83;
  }
  var v34 = v54;
  if (v34) {
    v4 = 29;
  } else {
    v4 = 28;
  }
  return v4;
}
function DaysArray(n$$1) {
  var i$$3 = 1;
  var v7 = i$$3 <= n$$1;
  for (;v7;) {
    this[i$$3] = 31;
    var v84 = i$$3 == 4;
    var v104 = !v84;
    if (v104) {
      v84 = i$$3 == 6;
    }
    var v55 = v84;
    var v85 = !v55;
    if (v85) {
      v55 = i$$3 == 9;
    }
    var v35 = v55;
    var v56 = !v35;
    if (v56) {
      v35 = i$$3 == 11;
    }
    var v5 = v35;
    if (v5) {
      this[i$$3] = 30;
    }
    var v6 = i$$3 == 2;
    if (v6) {
      this[i$$3] = 29;
    }
    i$$3 = i$$3 + 1;
    v7 = i$$3 <= n$$1;
  }
  return this;
}
function isDate(dtStr) {
  var daysInMonth = DaysArray(12);
  var pos1 = dtStr.indexOf(dtCh);
  var v8 = pos1 + 1;
  var pos2 = JAM.call(dtStr.indexOf, dtStr, [dtCh, v8], JAM.policy.p1);
  var strMonth = JAM.call(dtStr.substring, dtStr, [0, pos1], JAM.policy.p1);
  var v9 = pos1 + 1;
  var strDay = JAM.call(dtStr.substring, dtStr, [v9, pos2], JAM.policy.p1);
  var v10 = pos2 + 1;
  var strYear = dtStr.substring(v10);
  strYr = strYear;
  var v57 = strDay.charAt(0);
  var v36 = v57 == "0";
  if (v36) {
    var v58 = strDay.length;
    v36 = v58 > 1;
  }
  var v11 = v36;
  if (v11) {
    strDay = strDay.substring(1);
  }
  var v59 = strMonth.charAt(0);
  var v37 = v59 == "0";
  if (v37) {
    var v60 = strMonth.length;
    v37 = v60 > 1;
  }
  var v12 = v37;
  if (v12) {
    strMonth = strMonth.substring(1);
  }
  var i$$4 = 1;
  var v14 = i$$4 <= 3;
  for (;v14;) {
    var v61 = strYr.charAt(0);
    var v38 = v61 == "0";
    if (v38) {
      var v62 = strYr.length;
      v38 = v62 > 1;
    }
    var v13 = v38;
    if (v13) {
      strYr = strYr.substring(1);
    }
    i$$4 = i$$4 + 1;
    v14 = i$$4 <= 3;
  }
  month = parseInt(strMonth);
  day = parseInt(strDay);
  year = parseInt(strYr);
  var v39 = pos1 == -1;
  var v63 = !v39;
  if (v63) {
    v39 = pos2 == -1;
  }
  var v15 = v39;
  if (v15) {
    alert("The date format should be : mm/dd/yyyy");
    return false;
  }
  var v86 = strMonth.length;
  var v64 = v86 < 1;
  var v87 = !v64;
  if (v87) {
    v64 = month < 1;
  }
  var v40 = v64;
  var v65 = !v40;
  if (v65) {
    v40 = month > 12;
  }
  var v16 = v40;
  if (v16) {
    alert("Please enter a valid month");
    return false;
  }
  var v116 = strDay.length;
  var v105 = v116 < 1;
  var v117 = !v105;
  if (v117) {
    v105 = day < 1;
  }
  var v88 = v105;
  var v106 = !v88;
  if (v106) {
    v88 = day > 31;
  }
  var v66 = v88;
  var v90 = !v66;
  if (v90) {
    var v89 = month == 2;
    if (v89) {
      var v107 = day;
      var v108 = daysInFebruary(year);
      v89 = v107 > v108;
    }
    v66 = v89;
  }
  var v41 = v66;
  var v68 = !v41;
  if (v68) {
    var v67 = daysInMonth[month];
    v41 = day > v67;
  }
  var v17 = v41;
  if (v17) {
    alert("Please enter a valid day");
    return false;
  }
  var v109 = strYear.length;
  var v91 = v109 != 4;
  var v110 = !v91;
  if (v110) {
    v91 = year == 0;
  }
  var v69 = v91;
  var v92 = !v69;
  if (v92) {
    v69 = year < minYear;
  }
  var v42 = v69;
  var v70 = !v42;
  if (v70) {
    v42 = year > maxYear;
  }
  var v19 = v42;
  if (v19) {
    var v71 = "Please enter a valid 4 digit year between " + minYear;
    var v43 = v71 + " and ";
    var v18 = v43 + maxYear;
    alert(v18);
    return false;
  }
  var v93 = pos2 + 1;
  var v72 = JAM.call(dtStr.indexOf, dtStr, [dtCh, v93], JAM.policy.p1);
  var v44 = v72 != -1;
  var v74 = !v44;
  if (v74) {
    var v94 = stripCharsInBag(dtStr, dtCh);
    var v73 = isInteger(v94);
    v44 = v73 == false;
  }
  var v20 = v44;
  if (v20) {
    alert("Please enter a valid date");
    return false;
  }
  return true;
}
function check_dept_netid() {
  var v111 = document.myForm4a;
  var v95 = v111.net_id;
  var v75 = v95.value;
  var v45 = isan(v75);
  var v22 = !v45;
  if (v22) {
    alert("Please enter a 10 digit UW ID Number");
    return false;
  } else {
    var v112 = document.myForm4a;
    var v96 = v112.net_id;
    var v76 = v96.value;
    var v46 = v76.length;
    var v21 = v46 != 10;
    if (v21) {
      alert("Please enter a 10 digit UW ID Number");
      return false;
    } else {
      return true;
    }
  }
  return;
}
function check_pers_netid() {
  var v113 = document.myForm;
  var v97 = v113.id;
  var v77 = v97.value;
  var v47 = isan(v77);
  var v24 = !v47;
  if (v24) {
    alert("Please enter a 10 digit UW ID Number");
    return false;
  } else {
    var v114 = document.myForm;
    var v98 = v114.id;
    var v78 = v98.value;
    var v48 = v78.length;
    var v23 = v48 != 10;
    if (v23) {
      alert("Please enter a 10 digit UW ID Number");
      return false;
    } else {
      return true;
    }
  }
  return;
}
function isan(string) {
  var v49 = string.length;
  var v25 = v49 == 0;
  if (v25) {
    return false;
  }
  var i$$5 = 0;
  var v50 = string.length;
  var v27 = i$$5 < v50;
  for (;v27;) {
    var v99 = i$$5 + 1;
    var v79 = JAM.call(string.substring, string, [i$$5, v99], JAM.policy.p1);
    var v51 = v79 < "0";
    var v81 = !v51;
    if (v81) {
      var v100 = i$$5 + 1;
      var v80 = JAM.call(string.substring, string, [i$$5, v100], JAM.policy.p1);
      v51 = v80 > "9";
    }
    var v26 = v51;
    if (v26) {
      return false;
    }
    i$$5 = i$$5 + 1;
    var v52 = string.length;
    v27 = i$$5 < v52;
  }
  return true;
}
var dtCh = "/";
var minYear = 1900;
var maxYear = 2100
