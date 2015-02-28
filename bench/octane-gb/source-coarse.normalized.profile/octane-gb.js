
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
function v888() {
  var testTypedArray = new Uint8Array(1);
  testTypedArray[0] = -1;
  var v5545 = testTypedArray[0];
  testTypedArray[0] = v5545 >> 0;
  var v5546 = testTypedArray[0];
  var v889 = v5546 != 255;
  if (v889) {
    cout("Detected faulty math by your browser.", 2);
    return true;
  } else {
    return false;
  }
  return;
}
function v887(length$$20, defaultValue, numberType) {
  try {
    var v890 = settings[5];
    if (v890) {
      throw new Error("");
    }
    var v8427 = numberType != "float32";
    if (v8427) {
      v8427 = GameBoyWindow.opera;
    }
    var v5547 = v8427;
    if (v5547) {
      v5547 = this.checkForOperaMathBug();
    }
    var v891 = v5547;
    if (v891) {
      throw new Error("");
    }
    switch(numberType) {
      case "int8":
        var arrayHandle = new Int8Array(length$$20);
        break;
      case "uint8":
        arrayHandle = new Uint8Array(length$$20);
        break;
      case "int32":
        arrayHandle = new Int32Array(length$$20);
        break;
      case "float32":
        arrayHandle = new Float32Array(length$$20);
    }
    var v894 = defaultValue != 0;
    if (v894) {
      var index$$67 = 0;
      var v893 = index$$67 < length$$20;
      for (;v893;) {
        var v892 = index$$67;
        index$$67 = index$$67 + 1;
        arrayHandle[v892] = defaultValue;
        v893 = index$$67 < length$$20;
      }
    }
  } catch (error$$26) {
    var v5548 = error$$26.message;
    var v895 = "Could not convert an array to a typed array: " + v5548;
    cout(v895, 1);
    arrayHandle = [];
    index$$67 = 0;
    var v897 = index$$67 < length$$20;
    for (;v897;) {
      var v896 = index$$67;
      index$$67 = index$$67 + 1;
      arrayHandle[v896] = defaultValue;
      v897 = index$$67 < length$$20;
    }
  }
  return arrayHandle;
}
function v886(baseArray$$1) {
  try {
    var v5549 = !baseArray$$1;
    var v8429 = !v5549;
    if (v8429) {
      var v8428 = baseArray$$1.length;
      v5549 = !v8428;
    }
    var v898 = v5549;
    if (v898) {
      return [];
    }
    var arrayTemp = [];
    var index$$66 = 0;
    var v5550 = baseArray$$1.length;
    var v899 = index$$66 < v5550;
    for (;v899;) {
      arrayTemp[index$$66] = baseArray$$1[index$$66];
      ++index$$66;
      var v5551 = baseArray$$1.length;
      v899 = index$$66 < v5551;
    }
    return arrayTemp;
  } catch (error$$25) {
    var v5552 = error$$25.message;
    var v900 = "Conversion from a typed array failed: " + v5552;
    cout(v900, 1);
    return baseArray$$1;
  }
  return;
}
function v885(baseArray, memtype) {
  try {
    var v5553 = settings[5];
    var v8431 = !v5553;
    if (v8431) {
      var v9674 = memtype != "float32";
      if (v9674) {
        v9674 = GameBoyWindow.opera;
      }
      var v8430 = v9674;
      if (v8430) {
        v8430 = this.checkForOperaMathBug();
      }
      v5553 = v8430;
    }
    var v901 = v5553;
    if (v901) {
      return baseArray;
    }
    var v5554 = !baseArray;
    var v8433 = !v5554;
    if (v8433) {
      var v8432 = baseArray.length;
      v5554 = !v8432;
    }
    var v902 = v5554;
    if (v902) {
      return [];
    }
    var length$$19 = baseArray.length;
    switch(memtype) {
      case "uint8":
        var typedArrayTemp = new Uint8Array(length$$19);
        break;
      case "int8":
        typedArrayTemp = new Int8Array(length$$19);
        break;
      case "int32":
        typedArrayTemp = new Int32Array(length$$19);
        break;
      case "float32":
        typedArrayTemp = new Float32Array(length$$19);
    }
    var index$$65 = 0;
    var v903 = index$$65 < length$$19;
    for (;v903;) {
      typedArrayTemp[index$$65] = baseArray[index$$65];
      index$$65++;
      v903 = index$$65 < length$$19;
    }
    return typedArrayTemp;
  } catch (error$$24) {
    var v5555 = error$$24.message;
    var v904 = "Could not convert an array to a typed array: " + v5555;
    cout(v904, 1);
    return baseArray;
  }
  return;
}
function v884() {
  function v883(parentObj$$673, address$$167, data$$141) {
    var v908 = parentObj$$673.inBootstrap;
    if (v908) {
      var v905 = data$$141 & 1;
      parentObj$$673.cGBC = v905 == 0;
      var v9675 = parentObj$$673.name;
      var v9676 = parentObj$$673.gameCode;
      var v8434 = v9675 + v9676;
      var v9677 = parentObj$$673.ROM;
      var v8435 = v9677[323];
      var v5556 = v8434 + v8435;
      var v906 = v5556 == "Game and Watch 50";
      if (v906) {
        parentObj$$673.cGBC = true;
        cout("Created a boot exception for Game and Watch Gallery 2 (GBC ID byte is wrong on the cartridge).", 1);
      }
      var v5557 = parentObj$$673.cGBC;
      var v907 = "Booted to GBC Mode: " + v5557;
      cout(v907, 0);
    }
    var v909 = parentObj$$673.memory;
    v909[65388] = data$$141;
    return;
  }
  function v882(parentObj$$672, address$$166, data$$140) {
    cout("Boot ROM reads blocked: Bootstrap process has ended.", 0);
    parentObj$$672.inBootstrap = false;
    parentObj$$672.disableBootROM();
    var v910 = parentObj$$672.memory;
    v910[65360] = data$$140;
    return;
  }
  var v915 = this.inBootstrap;
  if (v915) {
    var v911 = this.memoryHighWriter;
    var v5558 = this.memoryWriter;
    v911[80] = v5558[65360] = v882;
    var v913 = this.cGBC;
    if (v913) {
      var v912 = this.memoryHighWriter;
      var v5559 = this.memoryWriter;
      v912[108] = v5559[65388] = v883;
    }
  } else {
    var v914 = this.memoryHighWriter;
    var v5560 = this.memoryWriter;
    v914[80] = v5560[65360] = this.cartIgnoreWrite;
  }
  return;
}
function v881() {
  function v880(parentObj$$671, address$$165, data$$139) {
    var v916 = parentObj$$671.memory;
    v916[65357] = data$$139;
    return;
  }
  function v879(parentObj$$670, address$$164, data$$138) {
    var v8436 = parentObj$$670.memory;
    var v5561 = v8436[65353];
    var v918 = v5561 != data$$138;
    if (v918) {
      parentObj$$670.midScanLineJIT();
      parentObj$$670.updateGBOBJPalette(4, data$$138);
      var v917 = parentObj$$670.memory;
      v917[65353] = data$$138;
    }
    return;
  }
  function v878(parentObj$$669, address$$163, data$$137) {
    var v8437 = parentObj$$669.memory;
    var v5562 = v8437[65352];
    var v920 = v5562 != data$$137;
    if (v920) {
      parentObj$$669.midScanLineJIT();
      parentObj$$669.updateGBOBJPalette(0, data$$137);
      var v919 = parentObj$$669.memory;
      v919[65352] = data$$137;
    }
    return;
  }
  function v877(parentObj$$668, address$$162, data$$136) {
    var v8438 = parentObj$$668.memory;
    var v5563 = v8438[65351];
    var v922 = v5563 != data$$136;
    if (v922) {
      parentObj$$668.midScanLineJIT();
      parentObj$$668.updateGBBGPalette(data$$136);
      var v921 = parentObj$$668.memory;
      v921[65351] = data$$136;
    }
    return;
  }
  function v876(parentObj$$667, address$$161, data$$135) {
    var v923 = parentObj$$667.memory;
    v923[65350] = data$$135;
    var v5564 = data$$135 > 127;
    if (v5564) {
      v5564 = data$$135 < 224;
    }
    var v940 = v5564;
    if (v940) {
      data$$135 = data$$135 << 8;
      address$$161 = 65024;
      var stat$$1 = parentObj$$667.modeSTAT;
      parentObj$$667.modeSTAT = 0;
      var newData$$1 = 0;
      var v5565 = address$$161 = address$$161 + 1;
      var v929 = v5565 < 65184;
      do {
        var v924 = parentObj$$667.memoryReader;
        var v925 = data$$135;
        data$$135 = data$$135 + 1;
        newData$$1 = v924[data$$135](parentObj$$667, v925);
        var v8439 = parentObj$$667.memory;
        var v5566 = v8439[address$$161];
        var v928 = newData$$1 != v5566;
        if (v928) {
          parentObj$$667.modeSTAT = stat$$1;
          parentObj$$667.graphicsJIT();
          parentObj$$667.modeSTAT = 0;
          var v926 = parentObj$$667.memory;
          var v927 = address$$161;
          address$$161 = address$$161 + 1;
          v926[v927] = newData$$1;
          break;
        }
        var v5567 = address$$161 = address$$161 + 1;
        v929 = v5567 < 65184;
      } while (v929);
      var v939 = address$$161 < 65184;
      if (v939) {
        var v938 = address$$161 < 65184;
        do {
          var v930 = parentObj$$667.memory;
          var v931 = address$$161;
          address$$161 = address$$161 + 1;
          var v5568 = parentObj$$667.memoryReader;
          var v5569 = data$$135;
          data$$135 = data$$135 + 1;
          var v10603 = v5568[data$$135](parentObj$$667, v5569);
          v930[v931] = v10603;
          var v932 = parentObj$$667.memory;
          var v933 = address$$161;
          address$$161 = address$$161 + 1;
          var v5570 = parentObj$$667.memoryReader;
          var v5571 = data$$135;
          data$$135 = data$$135 + 1;
          var v10604 = v5570[data$$135](parentObj$$667, v5571);
          v932[v933] = v10604;
          var v934 = parentObj$$667.memory;
          var v935 = address$$161;
          address$$161 = address$$161 + 1;
          var v5572 = parentObj$$667.memoryReader;
          var v5573 = data$$135;
          data$$135 = data$$135 + 1;
          var v10605 = v5572[data$$135](parentObj$$667, v5573);
          v934[v935] = v10605;
          var v936 = parentObj$$667.memory;
          var v937 = address$$161;
          address$$161 = address$$161 + 1;
          var v5574 = parentObj$$667.memoryReader;
          var v5575 = data$$135;
          data$$135 = data$$135 + 1;
          var v10606 = v5574[data$$135](parentObj$$667, v5575);
          v936[v937] = v10606;
          v938 = address$$161 < 65184;
        } while (v938);
      }
      parentObj$$667.modeSTAT = stat$$1;
    }
    return;
  }
  function v875(parentObj$$666, address$$160, data$$134) {
    var v941 = data$$134 & 64;
    parentObj$$666.LYCMatchTriggerSTAT = v941 == 64;
    var v942 = data$$134 & 32;
    parentObj$$666.mode2TriggerSTAT = v942 == 32;
    var v943 = data$$134 & 16;
    parentObj$$666.mode1TriggerSTAT = v943 == 16;
    var v944 = data$$134 & 8;
    parentObj$$666.mode0TriggerSTAT = v944 == 8;
    var v945 = parentObj$$666.memory;
    v945[65345] = data$$134 & 120;
    var v10222 = parentObj$$666.usedBootROM;
    var v9678 = !v10222;
    var v10224 = !v9678;
    if (v10224) {
      var v10223 = parentObj$$666.usedGBCBootROM;
      v9678 = !v10223;
    }
    var v8440 = v9678;
    if (v8440) {
      v8440 = parentObj$$666.LCDisOn;
    }
    var v5576 = v8440;
    if (v5576) {
      var v8441 = parentObj$$666.modeSTAT;
      v5576 = v8441 < 2;
    }
    var v946 = v5576;
    if (v946) {
      var v5577 = parentObj$$666.interruptsRequested;
      parentObj$$666.interruptsRequested = v5577 | 2;
      parentObj$$666.checkIRQMatching();
    }
    return;
  }
  function v874(parentObj$$665, address$$159, data$$133) {
    var v8442 = parentObj$$665.memory;
    var v5578 = v8442[65344];
    var v959 = v5578 != data$$133;
    if (v959) {
      parentObj$$665.midScanLineJIT();
      var temp_var$$22 = data$$133 > 127;
      var v5579 = parentObj$$665.LCDisOn;
      var v950 = temp_var$$22 != v5579;
      if (v950) {
        parentObj$$665.LCDisOn = temp_var$$22;
        var v947 = parentObj$$665.memory;
        var v8443 = v947[65345];
        v947[65345] = v8443 & 120;
        parentObj$$665.midScanlineOffset = -1;
        var v948 = parentObj$$665.memory;
        parentObj$$665.totalLinesPassed = parentObj$$665.currentX = parentObj$$665.queuedScanLines = parentObj$$665.lastUnrenderedLine = parentObj$$665.STATTracker = parentObj$$665.LCDTicks = parentObj$$665.actualScanLine = v948[65348] = 0;
        var v949 = parentObj$$665.LCDisOn;
        if (v949) {
          parentObj$$665.modeSTAT = 2;
          parentObj$$665.matchLYC();
          parentObj$$665.LCDCONTROL = parentObj$$665.LINECONTROL;
        } else {
          parentObj$$665.modeSTAT = 0;
          parentObj$$665.LCDCONTROL = parentObj$$665.DISPLAYOFFCONTROL;
          parentObj$$665.DisplayShowOff();
        }
        var v5580 = parentObj$$665.interruptsRequested;
        parentObj$$665.interruptsRequested = v5580 & 253;
      }
      var v951;
      var v8444 = data$$133 & 64;
      var v5581 = v8444 == 64;
      if (v5581) {
        v951 = 1024;
      } else {
        v951 = 0;
      }
      parentObj$$665.gfxWindowCHRBankPosition = v951;
      var v952 = data$$133 & 32;
      parentObj$$665.gfxWindowDisplay = v952 == 32;
      var v953;
      var v8445 = data$$133 & 16;
      var v5582 = v8445 == 16;
      if (v5582) {
        v953 = 0;
      } else {
        v953 = 128;
      }
      parentObj$$665.gfxBackgroundBankOffset = v953;
      var v954;
      var v8446 = data$$133 & 8;
      var v5583 = v8446 == 8;
      if (v5583) {
        v954 = 1024;
      } else {
        v954 = 0;
      }
      parentObj$$665.gfxBackgroundCHRBankPosition = v954;
      var v955 = data$$133 & 4;
      parentObj$$665.gfxSpriteNormalHeight = v955 == 0;
      var v956 = data$$133 & 2;
      parentObj$$665.gfxSpriteShow = v956 == 2;
      var v957 = data$$133 & 1;
      parentObj$$665.bgEnabled = v957 == 1;
      var v958 = parentObj$$665.memory;
      v958[65344] = data$$133;
    }
    return;
  }
  function v873(parentObj$$664, address$$158, data$$132) {
    var v5584 = data$$132 & 1;
    var v962 = v5584 == 1;
    if (v962) {
      var v960 = parentObj$$664.memory;
      v960[65282] = data$$132 & 127;
      parentObj$$664.serialTimer = 4096;
      parentObj$$664.serialShiftTimer = parentObj$$664.serialShiftTimerAllocated = 512;
    } else {
      var v961 = parentObj$$664.memory;
      v961[65282] = data$$132;
      parentObj$$664.serialShiftTimer = parentObj$$664.serialShiftTimerAllocated = parentObj$$664.serialTimer = 0;
    }
    return;
  }
  function v872(parentObj$$663, address$$157, data$$131) {
    var v963 = parentObj$$663.memory;
    v963[65396] = data$$131;
    return;
  }
  function v871(parentObj$$662, address$$156, data$$130) {
    var v8447 = parentObj$$662.memory;
    var v5585 = v8447[65361];
    var v964 = v5585 << 8;
    var v5586 = parentObj$$662.memory;
    var v965 = v5586[65362];
    var addressCheck = v964 | v965;
    var v9679 = parentObj$$662.hdmaRunning;
    var v8448 = !v9679;
    var v9680 = !v8448;
    if (v9680) {
      v8448 = addressCheck < 53248;
    }
    var v5587 = v8448;
    var v8449 = !v5587;
    if (v8449) {
      v5587 = addressCheck >= 57344;
    }
    var v969 = v5587;
    if (v969) {
      var v966 = data$$130 & 7;
      var v10607 = Math.max(v966, 1);
      parentObj$$662.gbcRamBank = v10607;
      var v8450 = parentObj$$662.gbcRamBank;
      var v5588 = v8450 - 1;
      var v967 = v5588 << 12;
      parentObj$$662.gbcRamBankPosition = v967 - 53248;
      var v968 = parentObj$$662.gbcRamBankPosition;
      parentObj$$662.gbcRamBankPositionECHO = v968 - 8192;
    }
    var v970 = parentObj$$662.memory;
    v970[65392] = data$$130;
    return;
  }
  function v870(parentObj$$661, address$$155, data$$129) {
    var v8451 = parentObj$$661.memory;
    var v5589 = v8451[65386];
    var v971 = v5589 & 63;
    parentObj$$661.updateGBCOBJPalette(v971, data$$129);
    var v8452 = parentObj$$661.memory;
    var v5590 = v8452[65386];
    var v976 = v5590 > 127;
    if (v976) {
      var v8453 = parentObj$$661.memory;
      var v5591 = v8453[65386];
      var v972 = v5591 + 1;
      var next$$1 = v972 & 63;
      var v973 = parentObj$$661.memory;
      v973[65386] = next$$1 | 128;
      var v974 = parentObj$$661.memory;
      var v5592 = parentObj$$661.gbcOBJRawPalette;
      v974[65387] = v5592[next$$1];
    } else {
      var v975 = parentObj$$661.memory;
      v975[65387] = data$$129;
    }
    return;
  }
  function v869(parentObj$$660, address$$154, data$$128) {
    var v977 = parentObj$$660.memory;
    var v5593 = parentObj$$660.gbcOBJRawPalette;
    var v5594 = data$$128 & 63;
    v977[65387] = v5593[v5594];
    var v978 = parentObj$$660.memory;
    v978[65386] = data$$128;
    return;
  }
  function v868(parentObj$$659, address$$153, data$$127) {
    var v8454 = parentObj$$659.memory;
    var v5595 = v8454[65384];
    var v979 = v5595 & 63;
    parentObj$$659.updateGBCBGPalette(v979, data$$127);
    var v8455 = parentObj$$659.memory;
    var v5596 = v8455[65384];
    var v984 = v5596 > 127;
    if (v984) {
      var v8456 = parentObj$$659.memory;
      var v5597 = v8456[65384];
      var v980 = v5597 + 1;
      var next = v980 & 63;
      var v981 = parentObj$$659.memory;
      v981[65384] = next | 128;
      var v982 = parentObj$$659.memory;
      var v5598 = parentObj$$659.gbcBGRawPalette;
      v982[65385] = v5598[next];
    } else {
      var v983 = parentObj$$659.memory;
      v983[65385] = data$$127;
    }
    return;
  }
  function v867(parentObj$$658, address$$152, data$$126) {
    var v985 = parentObj$$658.memory;
    var v5599 = parentObj$$658.gbcBGRawPalette;
    var v5600 = data$$126 & 63;
    v985[65385] = v5599[v5600];
    var v986 = parentObj$$658.memory;
    v986[65384] = data$$126;
    return;
  }
  function v866(parentObj$$657, address$$151, data$$125) {
    var v5601 = parentObj$$657.hdmaRunning;
    var v994 = !v5601;
    if (v994) {
      var v5602 = data$$125 & 128;
      var v990 = v5602 == 0;
      if (v990) {
        var v5603 = data$$125 & 127;
        var v987 = v5603 + 1;
        parentObj$$657.DMAWrite(v987);
        var v988 = parentObj$$657.memory;
        v988[65365] = 255;
      } else {
        parentObj$$657.hdmaRunning = true;
        var v989 = parentObj$$657.memory;
        v989[65365] = data$$125 & 127;
      }
    } else {
      var v5604 = data$$125 & 128;
      var v993 = v5604 == 0;
      if (v993) {
        parentObj$$657.hdmaRunning = false;
        var v991 = parentObj$$657.memory;
        var v8457 = v991[65365];
        v991[65365] = v8457 | 128;
      } else {
        var v992 = parentObj$$657.memory;
        v992[65365] = data$$125 & 127;
      }
    }
    return;
  }
  function v865(parentObj$$656, address$$150, data$$124) {
    var v5605 = parentObj$$656.hdmaRunning;
    var v996 = !v5605;
    if (v996) {
      var v995 = parentObj$$656.memory;
      v995[65364] = data$$124 & 240;
    }
    return;
  }
  function v864(parentObj$$655, address$$149, data$$123) {
    var v5606 = parentObj$$655.hdmaRunning;
    var v998 = !v5606;
    if (v998) {
      var v997 = parentObj$$655.memory;
      v997[65363] = data$$123 & 31;
    }
    return;
  }
  function v863(parentObj$$654, address$$148, data$$122) {
    var v5607 = parentObj$$654.hdmaRunning;
    var v1000 = !v5607;
    if (v1000) {
      var v999 = parentObj$$654.memory;
      v999[65362] = data$$122 & 240;
    }
    return;
  }
  function v862(parentObj$$653, address$$147, data$$121) {
    var v5608 = parentObj$$653.hdmaRunning;
    var v1002 = !v5608;
    if (v1002) {
      var v1001 = parentObj$$653.memory;
      v1001[65361] = data$$121;
    }
    return;
  }
  function v861(parentObj$$652, address$$146, data$$120) {
    parentObj$$652.currVRAMBank = data$$120 & 1;
    var v5609 = parentObj$$652.currVRAMBank;
    var v1003 = v5609 > 0;
    if (v1003) {
      parentObj$$652.BGCHRCurrentBank = parentObj$$652.BGCHRBank2;
    } else {
      parentObj$$652.BGCHRCurrentBank = parentObj$$652.BGCHRBank1;
    }
    return;
  }
  function v860(parentObj$$651, address$$145, data$$119) {
    var v1004 = parentObj$$651.memory;
    var v5610 = data$$119 & 127;
    var v9681 = parentObj$$651.memory;
    var v8458 = v9681[65357];
    var v5611 = v8458 & 128;
    v1004[65357] = v5610 | v5611;
    return;
  }
  function v859(parentObj$$650, address$$144, data$$118) {
    var v1005 = parentObj$$650.memory;
    v1005[65350] = data$$118;
    var v1022 = data$$118 < 224;
    if (v1022) {
      data$$118 = data$$118 << 8;
      address$$144 = 65024;
      var stat = parentObj$$650.modeSTAT;
      parentObj$$650.modeSTAT = 0;
      var newData = 0;
      var v5612 = address$$144 = address$$144 + 1;
      var v1011 = v5612 < 65184;
      do {
        var v1006 = parentObj$$650.memoryReader;
        var v1007 = data$$118;
        data$$118 = data$$118 + 1;
        newData = v1006[data$$118](parentObj$$650, v1007);
        var v8459 = parentObj$$650.memory;
        var v5613 = v8459[address$$144];
        var v1010 = newData != v5613;
        if (v1010) {
          parentObj$$650.modeSTAT = stat;
          parentObj$$650.graphicsJIT();
          parentObj$$650.modeSTAT = 0;
          var v1008 = parentObj$$650.memory;
          var v1009 = address$$144;
          address$$144 = address$$144 + 1;
          v1008[v1009] = newData;
          break;
        }
        var v5614 = address$$144 = address$$144 + 1;
        v1011 = v5614 < 65184;
      } while (v1011);
      var v1021 = address$$144 < 65184;
      if (v1021) {
        var v1020 = address$$144 < 65184;
        do {
          var v1012 = parentObj$$650.memory;
          var v1013 = address$$144;
          address$$144 = address$$144 + 1;
          var v5615 = parentObj$$650.memoryReader;
          var v5616 = data$$118;
          data$$118 = data$$118 + 1;
          var v10608 = v5615[data$$118](parentObj$$650, v5616);
          v1012[v1013] = v10608;
          var v1014 = parentObj$$650.memory;
          var v1015 = address$$144;
          address$$144 = address$$144 + 1;
          var v5617 = parentObj$$650.memoryReader;
          var v5618 = data$$118;
          data$$118 = data$$118 + 1;
          var v10609 = v5617[data$$118](parentObj$$650, v5618);
          v1014[v1015] = v10609;
          var v1016 = parentObj$$650.memory;
          var v1017 = address$$144;
          address$$144 = address$$144 + 1;
          var v5619 = parentObj$$650.memoryReader;
          var v5620 = data$$118;
          data$$118 = data$$118 + 1;
          var v10610 = v5619[data$$118](parentObj$$650, v5620);
          v1016[v1017] = v10610;
          var v1018 = parentObj$$650.memory;
          var v1019 = address$$144;
          address$$144 = address$$144 + 1;
          var v5621 = parentObj$$650.memoryReader;
          var v5622 = data$$118;
          data$$118 = data$$118 + 1;
          var v10611 = v5621[data$$118](parentObj$$650, v5622);
          v1018[v1019] = v10611;
          v1020 = address$$144 < 65184;
        } while (v1020);
      }
      parentObj$$650.modeSTAT = stat;
    }
    return;
  }
  function v858(parentObj$$649, address$$143, data$$117) {
    var v1023 = data$$117 & 64;
    parentObj$$649.LYCMatchTriggerSTAT = v1023 == 64;
    var v1024 = data$$117 & 32;
    parentObj$$649.mode2TriggerSTAT = v1024 == 32;
    var v1025 = data$$117 & 16;
    parentObj$$649.mode1TriggerSTAT = v1025 == 16;
    var v1026 = data$$117 & 8;
    parentObj$$649.mode0TriggerSTAT = v1026 == 8;
    var v1027 = parentObj$$649.memory;
    v1027[65345] = data$$117 & 120;
    return;
  }
  function v857(parentObj$$648, address$$142, data$$116) {
    var v8460 = parentObj$$648.memory;
    var v5623 = v8460[65344];
    var v1040 = v5623 != data$$116;
    if (v1040) {
      parentObj$$648.midScanLineJIT();
      var temp_var$$21 = data$$116 > 127;
      var v5624 = parentObj$$648.LCDisOn;
      var v1031 = temp_var$$21 != v5624;
      if (v1031) {
        parentObj$$648.LCDisOn = temp_var$$21;
        var v1028 = parentObj$$648.memory;
        var v8461 = v1028[65345];
        v1028[65345] = v8461 & 120;
        parentObj$$648.midScanlineOffset = -1;
        var v1029 = parentObj$$648.memory;
        parentObj$$648.totalLinesPassed = parentObj$$648.currentX = parentObj$$648.queuedScanLines = parentObj$$648.lastUnrenderedLine = parentObj$$648.STATTracker = parentObj$$648.LCDTicks = parentObj$$648.actualScanLine = v1029[65348] = 0;
        var v1030 = parentObj$$648.LCDisOn;
        if (v1030) {
          parentObj$$648.modeSTAT = 2;
          parentObj$$648.matchLYC();
          parentObj$$648.LCDCONTROL = parentObj$$648.LINECONTROL;
        } else {
          parentObj$$648.modeSTAT = 0;
          parentObj$$648.LCDCONTROL = parentObj$$648.DISPLAYOFFCONTROL;
          parentObj$$648.DisplayShowOff();
        }
        var v5625 = parentObj$$648.interruptsRequested;
        parentObj$$648.interruptsRequested = v5625 & 253;
      }
      var v1032;
      var v8462 = data$$116 & 64;
      var v5626 = v8462 == 64;
      if (v5626) {
        v1032 = 1024;
      } else {
        v1032 = 0;
      }
      parentObj$$648.gfxWindowCHRBankPosition = v1032;
      var v1033 = data$$116 & 32;
      parentObj$$648.gfxWindowDisplay = v1033 == 32;
      var v1034;
      var v8463 = data$$116 & 16;
      var v5627 = v8463 == 16;
      if (v5627) {
        v1034 = 0;
      } else {
        v1034 = 128;
      }
      parentObj$$648.gfxBackgroundBankOffset = v1034;
      var v1035;
      var v8464 = data$$116 & 8;
      var v5628 = v8464 == 8;
      if (v5628) {
        v1035 = 1024;
      } else {
        v1035 = 0;
      }
      parentObj$$648.gfxBackgroundCHRBankPosition = v1035;
      var v1036 = data$$116 & 4;
      parentObj$$648.gfxSpriteNormalHeight = v1036 == 0;
      var v1037 = data$$116 & 2;
      parentObj$$648.gfxSpriteShow = v1037 == 2;
      var v1038 = data$$116 & 1;
      parentObj$$648.BGPriorityEnabled = v1038 == 1;
      parentObj$$648.priorityFlaggingPathRebuild();
      var v1039 = parentObj$$648.memory;
      v1039[65344] = data$$116;
    }
    return;
  }
  function v856(parentObj$$647, address$$141, data$$115) {
    var v5629 = data$$115 & 1;
    var v1045 = v5629 == 1;
    if (v1045) {
      var v1041 = parentObj$$647.memory;
      v1041[65282] = data$$115 & 127;
      var v1042;
      var v8465 = data$$115 & 2;
      var v5630 = v8465 == 0;
      if (v5630) {
        v1042 = 4096;
      } else {
        v1042 = 128;
      }
      parentObj$$647.serialTimer = v1042;
      var v1043;
      var v8466 = data$$115 & 2;
      var v5631 = v8466 == 0;
      if (v5631) {
        v1043 = 512;
      } else {
        v1043 = 16;
      }
      parentObj$$647.serialShiftTimer = parentObj$$647.serialShiftTimerAllocated = v1043;
    } else {
      var v1044 = parentObj$$647.memory;
      v1044[65282] = data$$115;
      parentObj$$647.serialShiftTimer = parentObj$$647.serialShiftTimerAllocated = parentObj$$647.serialTimer = 0;
    }
    return;
  }
  var v1080 = this.cGBC;
  if (v1080) {
    var v1046 = this.memoryHighWriter;
    var v5632 = this.memoryWriter;
    v1046[2] = v5632[65282] = v856;
    var v1047 = this.memoryHighWriter;
    var v5633 = this.memoryWriter;
    v1047[64] = v5633[65344] = v857;
    var v1048 = this.memoryHighWriter;
    var v5634 = this.memoryWriter;
    v1048[65] = v5634[65345] = v858;
    var v1049 = this.memoryHighWriter;
    var v5635 = this.memoryWriter;
    v1049[70] = v5635[65350] = v859;
    var v1050 = this.memoryHighWriter;
    var v5636 = this.memoryWriter;
    v1050[77] = v5636[65357] = v860;
    var v1051 = this.memoryHighWriter;
    var v5637 = this.memoryWriter;
    v1051[79] = v5637[65359] = v861;
    var v1052 = this.memoryHighWriter;
    var v5638 = this.memoryWriter;
    v1052[81] = v5638[65361] = v862;
    var v1053 = this.memoryHighWriter;
    var v5639 = this.memoryWriter;
    v1053[82] = v5639[65362] = v863;
    var v1054 = this.memoryHighWriter;
    var v5640 = this.memoryWriter;
    v1054[83] = v5640[65363] = v864;
    var v1055 = this.memoryHighWriter;
    var v5641 = this.memoryWriter;
    v1055[84] = v5641[65364] = v865;
    var v1056 = this.memoryHighWriter;
    var v5642 = this.memoryWriter;
    v1056[85] = v5642[65365] = v866;
    var v1057 = this.memoryHighWriter;
    var v5643 = this.memoryWriter;
    v1057[104] = v5643[65384] = v867;
    var v1058 = this.memoryHighWriter;
    var v5644 = this.memoryWriter;
    v1058[105] = v5644[65385] = v868;
    var v1059 = this.memoryHighWriter;
    var v5645 = this.memoryWriter;
    v1059[106] = v5645[65386] = v869;
    var v1060 = this.memoryHighWriter;
    var v5646 = this.memoryWriter;
    v1060[107] = v5646[65387] = v870;
    var v1061 = this.memoryHighWriter;
    var v5647 = this.memoryWriter;
    v1061[112] = v5647[65392] = v871;
    var v1062 = this.memoryHighWriter;
    var v5648 = this.memoryWriter;
    v1062[116] = v5648[65396] = v872;
  } else {
    var v1063 = this.memoryHighWriter;
    var v5649 = this.memoryWriter;
    v1063[2] = v5649[65282] = v873;
    var v1064 = this.memoryHighWriter;
    var v5650 = this.memoryWriter;
    v1064[64] = v5650[65344] = v874;
    var v1065 = this.memoryHighWriter;
    var v5651 = this.memoryWriter;
    v1065[65] = v5651[65345] = v875;
    var v1066 = this.memoryHighWriter;
    var v5652 = this.memoryWriter;
    v1066[70] = v5652[65350] = v876;
    var v1067 = this.memoryHighWriter;
    var v5653 = this.memoryWriter;
    v1067[71] = v5653[65351] = v877;
    var v1068 = this.memoryHighWriter;
    var v5654 = this.memoryWriter;
    v1068[72] = v5654[65352] = v878;
    var v1069 = this.memoryHighWriter;
    var v5655 = this.memoryWriter;
    v1069[73] = v5655[65353] = v879;
    var v1070 = this.memoryHighWriter;
    var v5656 = this.memoryWriter;
    v1070[77] = v5656[65357] = v880;
    var v1071 = this.memoryHighWriter;
    var v5657 = this.memoryWriter;
    v1071[79] = v5657[65359] = this.cartIgnoreWrite;
    var v1072 = this.memoryHighWriter;
    var v5658 = this.memoryWriter;
    v1072[85] = v5658[65365] = this.cartIgnoreWrite;
    var v1073 = this.memoryHighWriter;
    var v5659 = this.memoryWriter;
    v1073[104] = v5659[65384] = this.cartIgnoreWrite;
    var v1074 = this.memoryHighWriter;
    var v5660 = this.memoryWriter;
    v1074[105] = v5660[65385] = this.cartIgnoreWrite;
    var v1075 = this.memoryHighWriter;
    var v5661 = this.memoryWriter;
    v1075[106] = v5661[65386] = this.cartIgnoreWrite;
    var v1076 = this.memoryHighWriter;
    var v5662 = this.memoryWriter;
    v1076[107] = v5662[65387] = this.cartIgnoreWrite;
    var v1077 = this.memoryHighWriter;
    var v5663 = this.memoryWriter;
    v1077[108] = v5663[65388] = this.cartIgnoreWrite;
    var v1078 = this.memoryHighWriter;
    var v5664 = this.memoryWriter;
    v1078[112] = v5664[65392] = this.cartIgnoreWrite;
    var v1079 = this.memoryHighWriter;
    var v5665 = this.memoryWriter;
    v1079[116] = v5665[65396] = this.cartIgnoreWrite;
  }
  return;
}
function v855() {
  function v854(parentObj$$646, address$$140, data$$114) {
    parentObj$$646.interruptsEnabled = data$$114;
    parentObj$$646.checkIRQMatching();
    return;
  }
  function v853(parentObj$$645, address$$139, data$$113) {
    var v1081 = parentObj$$645.memory;
    v1081[65397] = data$$113;
    return;
  }
  function v852(parentObj$$644, address$$138, data$$112) {
    var v1082 = parentObj$$644.memory;
    v1082[65395] = data$$112;
    return;
  }
  function v851(parentObj$$643, address$$137, data$$111) {
    var v1083 = parentObj$$643.memory;
    v1083[65394] = data$$111;
    return;
  }
  function v850(parentObj$$642, address$$136, data$$110) {
    var v8467 = parentObj$$642.memory;
    var v5666 = v8467[65355];
    var v1085 = v5666 != data$$110;
    if (v1085) {
      parentObj$$642.midScanLineJIT();
      var v1084 = parentObj$$642.memory;
      v1084[65355] = data$$110;
      parentObj$$642.windowX = data$$110 - 7;
    }
    return;
  }
  function v849(parentObj$$641, address$$135, data$$109) {
    var v5667 = parentObj$$641.windowY;
    var v1086 = v5667 != data$$109;
    if (v1086) {
      parentObj$$641.midScanLineJIT();
      parentObj$$641.windowY = data$$109;
    }
    return;
  }
  function v848(parentObj$$640, address$$134, data$$108) {
    var v8468 = parentObj$$640.memory;
    var v5668 = v8468[65349];
    var v1089 = v5668 != data$$108;
    if (v1089) {
      var v1087 = parentObj$$640.memory;
      v1087[65349] = data$$108;
      var v1088 = parentObj$$640.LCDisOn;
      if (v1088) {
        parentObj$$640.matchLYC();
      }
    }
    return;
  }
  function v847(parentObj$$639, address$$133, data$$107) {
    var v1091 = parentObj$$639.LCDisOn;
    if (v1091) {
      parentObj$$639.modeSTAT = 2;
      parentObj$$639.midScanlineOffset = -1;
      var v1090 = parentObj$$639.memory;
      parentObj$$639.totalLinesPassed = parentObj$$639.currentX = parentObj$$639.queuedScanLines = parentObj$$639.lastUnrenderedLine = parentObj$$639.LCDTicks = parentObj$$639.STATTracker = parentObj$$639.actualScanLine = v1090[65348] = 0;
    }
    return;
  }
  function v846(parentObj$$638, address$$132, data$$106) {
    var v5669 = parentObj$$638.backgroundX;
    var v1092 = v5669 != data$$106;
    if (v1092) {
      parentObj$$638.midScanLineJIT();
      parentObj$$638.backgroundX = data$$106;
    }
    return;
  }
  function v845(parentObj$$637, address$$131, data$$105) {
    var v5670 = parentObj$$637.backgroundY;
    var v1093 = v5670 != data$$105;
    if (v1093) {
      parentObj$$637.midScanLineJIT();
      parentObj$$637.backgroundY = data$$105;
    }
    return;
  }
  function v844(parentObj$$636, address$$130, data$$104) {
    parentObj$$636.channel3WriteRAM(15, data$$104);
    return;
  }
  function v843(parentObj$$635, address$$129, data$$103) {
    parentObj$$635.channel3WriteRAM(14, data$$103);
    return;
  }
  function v842(parentObj$$634, address$$128, data$$102) {
    parentObj$$634.channel3WriteRAM(13, data$$102);
    return;
  }
  function v841(parentObj$$633, address$$127, data$$101) {
    parentObj$$633.channel3WriteRAM(12, data$$101);
    return;
  }
  function v840(parentObj$$632, address$$126, data$$100) {
    parentObj$$632.channel3WriteRAM(11, data$$100);
    return;
  }
  function v839(parentObj$$631, address$$125, data$$99) {
    parentObj$$631.channel3WriteRAM(10, data$$99);
    return;
  }
  function v838(parentObj$$630, address$$124, data$$98) {
    parentObj$$630.channel3WriteRAM(9, data$$98);
    return;
  }
  function v837(parentObj$$629, address$$123, data$$97) {
    parentObj$$629.channel3WriteRAM(8, data$$97);
    return;
  }
  function v836(parentObj$$628, address$$122, data$$96) {
    parentObj$$628.channel3WriteRAM(7, data$$96);
    return;
  }
  function v835(parentObj$$627, address$$121, data$$95) {
    parentObj$$627.channel3WriteRAM(6, data$$95);
    return;
  }
  function v834(parentObj$$626, address$$120, data$$94) {
    parentObj$$626.channel3WriteRAM(5, data$$94);
    return;
  }
  function v833(parentObj$$625, address$$119, data$$93) {
    parentObj$$625.channel3WriteRAM(4, data$$93);
    return;
  }
  function v832(parentObj$$624, address$$118, data$$92) {
    parentObj$$624.channel3WriteRAM(3, data$$92);
    return;
  }
  function v831(parentObj$$623, address$$117, data$$91) {
    parentObj$$623.channel3WriteRAM(2, data$$91);
    return;
  }
  function v830(parentObj$$622, address$$116, data$$90) {
    parentObj$$622.channel3WriteRAM(1, data$$90);
    return;
  }
  function v829(parentObj$$621, address$$115, data$$89) {
    parentObj$$621.channel3WriteRAM(0, data$$89);
    return;
  }
  function v828(parentObj$$620, address$$114, data$$88) {
    parentObj$$620.audioJIT();
    var v8469 = parentObj$$620.soundMasterEnabled;
    var v5671 = !v8469;
    if (v5671) {
      v5671 = data$$88 > 127;
    }
    var v1099 = v5671;
    if (v1099) {
      var v1094 = parentObj$$620.memory;
      v1094[65318] = 128;
      parentObj$$620.soundMasterEnabled = true;
      parentObj$$620.initializeAudioStartState();
    } else {
      var v5672 = parentObj$$620.soundMasterEnabled;
      if (v5672) {
        v5672 = data$$88 < 128;
      }
      var v1098 = v5672;
      if (v1098) {
        var v1095 = parentObj$$620.memory;
        v1095[65318] = 0;
        parentObj$$620.soundMasterEnabled = false;
        var index$$64 = 65296;
        var v1097 = index$$64 < 65318;
        for (;v1097;) {
          var v1096 = parentObj$$620.memoryWriter;
          v1096[index$$64](parentObj$$620, index$$64, 0);
          index$$64++;
          v1097 = index$$64 < 65318;
        }
      }
    }
    return;
  }
  function v827(parentObj$$619, address$$113, data$$87) {
    var v5673 = parentObj$$619.soundMasterEnabled;
    if (v5673) {
      var v9682 = parentObj$$619.memory;
      var v8470 = v9682[65317];
      v5673 = v8470 != data$$87;
    }
    var v1108 = v5673;
    if (v1108) {
      parentObj$$619.audioJIT();
      var v1100 = parentObj$$619.memory;
      v1100[65317] = data$$87;
      var v1101 = data$$87 & 1;
      parentObj$$619.rightChannel1 = v1101 == 1;
      var v1102 = data$$87 & 2;
      parentObj$$619.rightChannel2 = v1102 == 2;
      var v1103 = data$$87 & 4;
      parentObj$$619.rightChannel3 = v1103 == 4;
      var v1104 = data$$87 & 8;
      parentObj$$619.rightChannel4 = v1104 == 8;
      var v1105 = data$$87 & 16;
      parentObj$$619.leftChannel1 = v1105 == 16;
      var v1106 = data$$87 & 32;
      parentObj$$619.leftChannel2 = v1106 == 32;
      var v1107 = data$$87 & 64;
      parentObj$$619.leftChannel3 = v1107 == 64;
      parentObj$$619.leftChannel4 = data$$87 > 127;
      parentObj$$619.channel1OutputLevelCache();
      parentObj$$619.channel2OutputLevelCache();
      parentObj$$619.channel3OutputLevelCache();
      parentObj$$619.channel4OutputLevelCache();
    }
    return;
  }
  function v826(parentObj$$618, address$$112, data$$86) {
    var v5674 = parentObj$$618.soundMasterEnabled;
    if (v5674) {
      var v9683 = parentObj$$618.memory;
      var v8471 = v9683[65316];
      v5674 = v8471 != data$$86;
    }
    var v1112 = v5674;
    if (v1112) {
      parentObj$$618.audioJIT();
      var v1109 = parentObj$$618.memory;
      v1109[65316] = data$$86;
      var v5675 = data$$86 >> 4;
      var v1110 = v5675 & 7;
      parentObj$$618.VinLeftChannelMasterVolume = v1110 + 1;
      var v1111 = data$$86 & 7;
      parentObj$$618.VinRightChannelMasterVolume = v1111 + 1;
      parentObj$$618.mixerOutputLevelCache();
    }
    return;
  }
  function v825(parentObj$$617, address$$111, data$$85) {
    var v1123 = parentObj$$617.soundMasterEnabled;
    if (v1123) {
      parentObj$$617.audioJIT();
      var v1113 = parentObj$$617.memory;
      v1113[65315] = data$$85;
      var v1114 = data$$85 & 64;
      parentObj$$617.channel4consecutive = v1114 == 0;
      var v1122 = data$$85 > 127;
      if (v1122) {
        var v1115 = parentObj$$617.memory;
        var nr42 = v1115[65313];
        parentObj$$617.channel4envelopeVolume = nr42 >> 4;
        var v1116 = parentObj$$617.channel4envelopeVolume;
        var v1117 = parentObj$$617.channel4VolumeShifter;
        parentObj$$617.channel4currentVolume = v1116 << v1117;
        var v1118 = nr42 & 7;
        parentObj$$617.channel4envelopeSweepsLast = v1118 - 1;
        var v5676 = parentObj$$617.channel4totalLength;
        var v1119 = v5676 == 0;
        if (v1119) {
          parentObj$$617.channel4totalLength = 64;
        }
        var v5677 = data$$85 & 64;
        var v1121 = v5677 == 64;
        if (v1121) {
          var v1120 = parentObj$$617.memory;
          var v8472 = v1120[65318];
          v1120[65318] = v8472 | 8;
        }
      }
      parentObj$$617.channel4EnableCheck();
    }
    return;
  }
  function v824(parentObj$$616, address$$110, data$$84) {
    var v1133 = parentObj$$616.soundMasterEnabled;
    if (v1133) {
      parentObj$$616.audioJIT();
      var v8473 = data$$84 & 7;
      var v5678 = v8473 << 4;
      var v1124 = Math.max(v5678, 8);
      var v1125 = data$$84 >> 4;
      parentObj$$616.channel4FrequencyPeriod = v1124 << v1125;
      var bitWidth = data$$84 & 8;
      var v8474 = bitWidth == 8;
      if (v8474) {
        var v9684 = parentObj$$616.channel4BitRange;
        v8474 = v9684 == 32767;
      }
      var v5679 = v8474;
      var v8476 = !v5679;
      if (v8476) {
        var v8475 = bitWidth == 0;
        if (v8475) {
          var v9685 = parentObj$$616.channel4BitRange;
          v8475 = v9685 == 127;
        }
        v5679 = v8475;
      }
      var v1131 = v5679;
      if (v1131) {
        parentObj$$616.channel4lastSampleLookup = 0;
        var v1126;
        var v5680 = bitWidth == 8;
        if (v5680) {
          v1126 = 127;
        } else {
          v1126 = 32767;
        }
        parentObj$$616.channel4BitRange = v1126;
        var v1127;
        var v5681 = bitWidth == 8;
        if (v5681) {
          v1127 = 7;
        } else {
          v1127 = 15;
        }
        parentObj$$616.channel4VolumeShifter = v1127;
        var v1128 = parentObj$$616.channel4envelopeVolume;
        var v1129 = parentObj$$616.channel4VolumeShifter;
        parentObj$$616.channel4currentVolume = v1128 << v1129;
        var v1130;
        var v5682 = bitWidth == 8;
        if (v5682) {
          v1130 = parentObj$$616.LSFR7Table;
        } else {
          v1130 = parentObj$$616.LSFR15Table;
        }
        parentObj$$616.noiseSampleTable = v1130;
      }
      var v1132 = parentObj$$616.memory;
      v1132[65314] = data$$84;
      parentObj$$616.channel4UpdateCache();
    }
    return;
  }
  function v823(parentObj$$615, address$$109, data$$83) {
    var v1145 = parentObj$$615.soundMasterEnabled;
    if (v1145) {
      parentObj$$615.audioJIT();
      var v5683 = parentObj$$615.channel4Enabled;
      if (v5683) {
        var v8477 = parentObj$$615.channel4envelopeSweeps;
        v5683 = v8477 == 0;
      }
      var v1142 = v5683;
      if (v1142) {
        var v10225 = parentObj$$615.memory;
        var v9686 = v10225[65313];
        var v8478 = v9686 ^ data$$83;
        var v5684 = v8478 & 8;
        var v1139 = v5684 == 8;
        if (v1139) {
          var v9687 = parentObj$$615.memory;
          var v8479 = v9687[65313];
          var v5685 = v8479 & 8;
          var v1135 = v5685 == 0;
          if (v1135) {
            var v9688 = parentObj$$615.memory;
            var v8480 = v9688[65313];
            var v5686 = v8480 & 7;
            var v1134 = v5686 == 7;
            if (v1134) {
              var v5687 = parentObj$$615.channel4envelopeVolume;
              parentObj$$615.channel4envelopeVolume = v5687 + 2;
            } else {
              ++parentObj$$615.channel4envelopeVolume;
            }
          }
          var v5688 = parentObj$$615.channel4envelopeVolume;
          var v1136 = 16 - v5688;
          parentObj$$615.channel4envelopeVolume = v1136 & 15;
        } else {
          var v9689 = parentObj$$615.memory;
          var v8481 = v9689[65313];
          var v5689 = v8481 & 15;
          var v1138 = v5689 == 8;
          if (v1138) {
            var v5690 = parentObj$$615.channel4envelopeVolume;
            var v1137 = 1 + v5690;
            parentObj$$615.channel4envelopeVolume = v1137 & 15;
          }
        }
        var v1140 = parentObj$$615.channel4envelopeVolume;
        var v1141 = parentObj$$615.channel4VolumeShifter;
        parentObj$$615.channel4currentVolume = v1140 << v1141;
      }
      var v1143 = data$$83 & 8;
      parentObj$$615.channel4envelopeType = v1143 == 8;
      var v1144 = parentObj$$615.memory;
      v1144[65313] = data$$83;
      parentObj$$615.channel4UpdateCache();
      parentObj$$615.channel4VolumeEnableCheck();
    }
    return;
  }
  function v822(parentObj$$614, address$$108, data$$82) {
    var v5691 = parentObj$$614.soundMasterEnabled;
    var v8483 = !v5691;
    if (v8483) {
      var v8482 = parentObj$$614.cGBC;
      v5691 = !v8482;
    }
    var v1149 = v5691;
    if (v1149) {
      var v1146 = parentObj$$614.soundMasterEnabled;
      if (v1146) {
        parentObj$$614.audioJIT();
      }
      var v1147 = data$$82 & 63;
      parentObj$$614.channel4totalLength = 64 - v1147;
      var v1148 = parentObj$$614.memory;
      v1148[65312] = data$$82 | 192;
      parentObj$$614.channel4EnableCheck();
    }
    return;
  }
  function v821(parentObj$$613, address$$107, data$$81) {
    var v1159 = parentObj$$613.soundMasterEnabled;
    if (v1159) {
      parentObj$$613.audioJIT();
      var v1153 = data$$81 > 127;
      if (v1153) {
        var v5692 = parentObj$$613.channel3totalLength;
        var v1150 = v5692 == 0;
        if (v1150) {
          parentObj$$613.channel3totalLength = 256;
        }
        parentObj$$613.channel3lastSampleLookup = 0;
        var v5693 = data$$81 & 64;
        var v1152 = v5693 == 64;
        if (v1152) {
          var v1151 = parentObj$$613.memory;
          var v8484 = v1151[65318];
          v1151[65318] = v8484 | 4;
        }
      }
      var v1154 = data$$81 & 64;
      parentObj$$613.channel3consecutive = v1154 == 0;
      var v5694 = data$$81 & 7;
      var v1155 = v5694 << 8;
      var v5695 = parentObj$$613.channel3frequency;
      var v1156 = v5695 & 255;
      parentObj$$613.channel3frequency = v1155 | v1156;
      var v5696 = parentObj$$613.channel3frequency;
      var v1157 = 2048 - v5696;
      parentObj$$613.channel3FrequencyPeriod = v1157 << 1;
      var v1158 = parentObj$$613.memory;
      v1158[65310] = data$$81 & 64;
      parentObj$$613.channel3EnableCheck();
    }
    return;
  }
  function v820(parentObj$$612, address$$106, data$$80) {
    var v1163 = parentObj$$612.soundMasterEnabled;
    if (v1163) {
      parentObj$$612.audioJIT();
      var v5697 = parentObj$$612.channel3frequency;
      var v1160 = v5697 & 1792;
      parentObj$$612.channel3frequency = v1160 | data$$80;
      var v5698 = parentObj$$612.channel3frequency;
      var v1161 = 2048 - v5698;
      parentObj$$612.channel3FrequencyPeriod = v1161 << 1;
      var v1162 = parentObj$$612.memory;
      v1162[65309] = data$$80;
    }
    return;
  }
  function v819(parentObj$$611, address$$105, data$$79) {
    var v1166 = parentObj$$611.soundMasterEnabled;
    if (v1166) {
      parentObj$$611.audioJIT();
      data$$79 = data$$79 & 96;
      var v1164 = parentObj$$611.memory;
      v1164[65308] = data$$79;
      var v1165;
      var v5700 = data$$79 == 0;
      if (v5700) {
        v1165 = 4;
      } else {
        var v5699 = data$$79 >> 5;
        v1165 = v5699 - 1;
      }
      parentObj$$611.channel3patternType = v1165;
    }
    return;
  }
  function v818(parentObj$$610, address$$104, data$$78) {
    var v5701 = parentObj$$610.soundMasterEnabled;
    var v8486 = !v5701;
    if (v8486) {
      var v8485 = parentObj$$610.cGBC;
      v5701 = !v8485;
    }
    var v1169 = v5701;
    if (v1169) {
      var v1167 = parentObj$$610.soundMasterEnabled;
      if (v1167) {
        parentObj$$610.audioJIT();
      }
      parentObj$$610.channel3totalLength = 256 - data$$78;
      var v1168 = parentObj$$610.memory;
      v1168[65307] = data$$78;
      parentObj$$610.channel3EnableCheck();
    }
    return;
  }
  function v817(parentObj$$609, address$$103, data$$77) {
    var v1174 = parentObj$$609.soundMasterEnabled;
    if (v1174) {
      parentObj$$609.audioJIT();
      var v8487 = parentObj$$609.channel3canPlay;
      var v5702 = !v8487;
      if (v5702) {
        v5702 = data$$77 >= 128;
      }
      var v1170 = v5702;
      if (v1170) {
        parentObj$$609.channel3lastSampleLookup = 0;
        parentObj$$609.channel3UpdateCache();
      }
      parentObj$$609.channel3canPlay = data$$77 > 127;
      var v8488 = parentObj$$609.channel3canPlay;
      if (v8488) {
        var v10226 = parentObj$$609.memory;
        var v9690 = v10226[65306];
        v8488 = v9690 > 127;
      }
      var v5703 = v8488;
      if (v5703) {
        var v8489 = parentObj$$609.channel3consecutive;
        v5703 = !v8489;
      }
      var v1172 = v5703;
      if (v1172) {
        var v1171 = parentObj$$609.memory;
        var v8490 = v1171[65318];
        v1171[65318] = v8490 | 4;
      }
      var v1173 = parentObj$$609.memory;
      v1173[65306] = data$$77 & 128;
    }
    return;
  }
  function v816(parentObj$$608, address$$102, data$$76) {
    var v1186 = parentObj$$608.soundMasterEnabled;
    if (v1186) {
      parentObj$$608.audioJIT();
      var v1180 = data$$76 > 127;
      if (v1180) {
        var v1175 = parentObj$$608.memory;
        var nr22 = v1175[65303];
        parentObj$$608.channel2envelopeVolume = nr22 >> 4;
        parentObj$$608.channel2OutputLevelCache();
        var v1176 = nr22 & 7;
        parentObj$$608.channel2envelopeSweepsLast = v1176 - 1;
        var v5704 = parentObj$$608.channel2totalLength;
        var v1177 = v5704 == 0;
        if (v1177) {
          parentObj$$608.channel2totalLength = 64;
        }
        var v5705 = data$$76 & 64;
        var v1179 = v5705 == 64;
        if (v1179) {
          var v1178 = parentObj$$608.memory;
          var v8491 = v1178[65318];
          v1178[65318] = v8491 | 2;
        }
      }
      var v1181 = data$$76 & 64;
      parentObj$$608.channel2consecutive = v1181 == 0;
      var v5706 = data$$76 & 7;
      var v1182 = v5706 << 8;
      var v5707 = parentObj$$608.channel2frequency;
      var v1183 = v5707 & 255;
      parentObj$$608.channel2frequency = v1182 | v1183;
      var v5708 = parentObj$$608.channel2frequency;
      var v1184 = 2048 - v5708;
      parentObj$$608.channel2FrequencyTracker = v1184 << 2;
      var v1185 = parentObj$$608.memory;
      v1185[65305] = data$$76 & 64;
      parentObj$$608.channel2EnableCheck();
    }
    return;
  }
  function v815(parentObj$$607, address$$101, data$$75) {
    var v1190 = parentObj$$607.soundMasterEnabled;
    if (v1190) {
      parentObj$$607.audioJIT();
      var v5709 = parentObj$$607.channel2frequency;
      var v1187 = v5709 & 1792;
      parentObj$$607.channel2frequency = v1187 | data$$75;
      var v5710 = parentObj$$607.channel2frequency;
      var v1188 = 2048 - v5710;
      parentObj$$607.channel2FrequencyTracker = v1188 << 2;
      var v1189 = parentObj$$607.memory;
      v1189[65304] = data$$75;
    }
    return;
  }
  function v814(parentObj$$606, address$$100, data$$74) {
    var v1200 = parentObj$$606.soundMasterEnabled;
    if (v1200) {
      parentObj$$606.audioJIT();
      var v5711 = parentObj$$606.channel2Enabled;
      if (v5711) {
        var v8492 = parentObj$$606.channel2envelopeSweeps;
        v5711 = v8492 == 0;
      }
      var v1197 = v5711;
      if (v1197) {
        var v10227 = parentObj$$606.memory;
        var v9691 = v10227[65303];
        var v8493 = v9691 ^ data$$74;
        var v5712 = v8493 & 8;
        var v1196 = v5712 == 8;
        if (v1196) {
          var v9692 = parentObj$$606.memory;
          var v8494 = v9692[65303];
          var v5713 = v8494 & 8;
          var v1192 = v5713 == 0;
          if (v1192) {
            var v9693 = parentObj$$606.memory;
            var v8495 = v9693[65303];
            var v5714 = v8495 & 7;
            var v1191 = v5714 == 7;
            if (v1191) {
              var v5715 = parentObj$$606.channel2envelopeVolume;
              parentObj$$606.channel2envelopeVolume = v5715 + 2;
            } else {
              ++parentObj$$606.channel2envelopeVolume;
            }
          }
          var v5716 = parentObj$$606.channel2envelopeVolume;
          var v1193 = 16 - v5716;
          parentObj$$606.channel2envelopeVolume = v1193 & 15;
        } else {
          var v9694 = parentObj$$606.memory;
          var v8496 = v9694[65303];
          var v5717 = v8496 & 15;
          var v1195 = v5717 == 8;
          if (v1195) {
            var v5718 = parentObj$$606.channel2envelopeVolume;
            var v1194 = 1 + v5718;
            parentObj$$606.channel2envelopeVolume = v1194 & 15;
          }
        }
        parentObj$$606.channel2OutputLevelCache();
      }
      var v1198 = data$$74 & 8;
      parentObj$$606.channel2envelopeType = v1198 == 8;
      var v1199 = parentObj$$606.memory;
      v1199[65303] = data$$74;
      parentObj$$606.channel2VolumeEnableCheck();
    }
    return;
  }
  function v813(parentObj$$605, address$$99, data$$73) {
    var v5719 = parentObj$$605.soundMasterEnabled;
    var v8498 = !v5719;
    if (v8498) {
      var v8497 = parentObj$$605.cGBC;
      v5719 = !v8497;
    }
    var v1206 = v5719;
    if (v1206) {
      var v1201 = parentObj$$605.soundMasterEnabled;
      if (v1201) {
        parentObj$$605.audioJIT();
      } else {
        data$$73 = data$$73 & 63;
      }
      var v1202 = parentObj$$605.dutyLookup;
      var v1203 = data$$73 >> 6;
      parentObj$$605.channel2CachedDuty = v1202[v1203];
      var v1204 = data$$73 & 63;
      parentObj$$605.channel2totalLength = 64 - v1204;
      var v1205 = parentObj$$605.memory;
      v1205[65302] = data$$73 & 192;
      parentObj$$605.channel2EnableCheck();
    }
    return;
  }
  function v812(parentObj$$604, address$$98, data$$72) {
    var v1221 = parentObj$$604.soundMasterEnabled;
    if (v1221) {
      parentObj$$604.audioJIT();
      var v1207 = data$$72 & 64;
      parentObj$$604.channel1consecutive = v1207 == 0;
      var v5720 = data$$72 & 7;
      var v1208 = v5720 << 8;
      var v5721 = parentObj$$604.channel1frequency;
      var v1209 = v5721 & 255;
      parentObj$$604.channel1frequency = v1208 | v1209;
      var v5722 = parentObj$$604.channel1frequency;
      var v1210 = 2048 - v5722;
      parentObj$$604.channel1FrequencyTracker = v1210 << 2;
      var v1219 = data$$72 > 127;
      if (v1219) {
        parentObj$$604.channel1timeSweep = parentObj$$604.channel1lastTimeSweep;
        parentObj$$604.channel1numSweep = parentObj$$604.channel1frequencySweepDivider;
        var v1211 = parentObj$$604.memory;
        var nr12 = v1211[65298];
        parentObj$$604.channel1envelopeVolume = nr12 >> 4;
        parentObj$$604.channel1OutputLevelCache();
        var v1212 = nr12 & 7;
        parentObj$$604.channel1envelopeSweepsLast = v1212 - 1;
        var v5723 = parentObj$$604.channel1totalLength;
        var v1213 = v5723 == 0;
        if (v1213) {
          parentObj$$604.channel1totalLength = 64;
        }
        var v8499 = parentObj$$604.channel1lastTimeSweep;
        var v5724 = v8499 > 0;
        var v8501 = !v5724;
        if (v8501) {
          var v8500 = parentObj$$604.channel1frequencySweepDivider;
          v5724 = v8500 > 0;
        }
        var v1216 = v5724;
        if (v1216) {
          var v1214 = parentObj$$604.memory;
          var v8502 = v1214[65318];
          v1214[65318] = v8502 | 1;
        } else {
          var v1215 = parentObj$$604.memory;
          var v8503 = v1215[65318];
          v1215[65318] = v8503 & 254;
        }
        var v5725 = data$$72 & 64;
        var v1218 = v5725 == 64;
        if (v1218) {
          var v1217 = parentObj$$604.memory;
          var v8504 = v1217[65318];
          v1217[65318] = v8504 | 1;
        }
        parentObj$$604.channel1ShadowFrequency = parentObj$$604.channel1frequency;
        parentObj$$604.channel1SweepFault = false;
        parentObj$$604.runAudioSweep();
      }
      parentObj$$604.channel1EnableCheck();
      var v1220 = parentObj$$604.memory;
      v1220[65300] = data$$72 & 64;
    }
    return;
  }
  function v811(parentObj$$603, address$$97, data$$71) {
    var v1225 = parentObj$$603.soundMasterEnabled;
    if (v1225) {
      parentObj$$603.audioJIT();
      var v5726 = parentObj$$603.channel1frequency;
      var v1222 = v5726 & 1792;
      parentObj$$603.channel1frequency = v1222 | data$$71;
      var v5727 = parentObj$$603.channel1frequency;
      var v1223 = 2048 - v5727;
      parentObj$$603.channel1FrequencyTracker = v1223 << 2;
      var v1224 = parentObj$$603.memory;
      v1224[65299] = data$$71;
    }
    return;
  }
  function v810(parentObj$$602, address$$96, data$$70) {
    var v1235 = parentObj$$602.soundMasterEnabled;
    if (v1235) {
      parentObj$$602.audioJIT();
      var v5728 = parentObj$$602.channel1Enabled;
      if (v5728) {
        var v8505 = parentObj$$602.channel1envelopeSweeps;
        v5728 = v8505 == 0;
      }
      var v1232 = v5728;
      if (v1232) {
        var v10228 = parentObj$$602.memory;
        var v9695 = v10228[65298];
        var v8506 = v9695 ^ data$$70;
        var v5729 = v8506 & 8;
        var v1231 = v5729 == 8;
        if (v1231) {
          var v9696 = parentObj$$602.memory;
          var v8507 = v9696[65298];
          var v5730 = v8507 & 8;
          var v1227 = v5730 == 0;
          if (v1227) {
            var v9697 = parentObj$$602.memory;
            var v8508 = v9697[65298];
            var v5731 = v8508 & 7;
            var v1226 = v5731 == 7;
            if (v1226) {
              var v5732 = parentObj$$602.channel1envelopeVolume;
              parentObj$$602.channel1envelopeVolume = v5732 + 2;
            } else {
              ++parentObj$$602.channel1envelopeVolume;
            }
          }
          var v5733 = parentObj$$602.channel1envelopeVolume;
          var v1228 = 16 - v5733;
          parentObj$$602.channel1envelopeVolume = v1228 & 15;
        } else {
          var v9698 = parentObj$$602.memory;
          var v8509 = v9698[65298];
          var v5734 = v8509 & 15;
          var v1230 = v5734 == 8;
          if (v1230) {
            var v5735 = parentObj$$602.channel1envelopeVolume;
            var v1229 = 1 + v5735;
            parentObj$$602.channel1envelopeVolume = v1229 & 15;
          }
        }
        parentObj$$602.channel1OutputLevelCache();
      }
      var v1233 = data$$70 & 8;
      parentObj$$602.channel1envelopeType = v1233 == 8;
      var v1234 = parentObj$$602.memory;
      v1234[65298] = data$$70;
      parentObj$$602.channel1VolumeEnableCheck();
    }
    return;
  }
  function v809(parentObj$$601, address$$95, data$$69) {
    var v5736 = parentObj$$601.soundMasterEnabled;
    var v8511 = !v5736;
    if (v8511) {
      var v8510 = parentObj$$601.cGBC;
      v5736 = !v8510;
    }
    var v1241 = v5736;
    if (v1241) {
      var v1236 = parentObj$$601.soundMasterEnabled;
      if (v1236) {
        parentObj$$601.audioJIT();
      } else {
        data$$69 = data$$69 & 63;
      }
      var v1237 = parentObj$$601.dutyLookup;
      var v1238 = data$$69 >> 6;
      parentObj$$601.channel1CachedDuty = v1237[v1238];
      var v1239 = data$$69 & 63;
      parentObj$$601.channel1totalLength = 64 - v1239;
      var v1240 = parentObj$$601.memory;
      v1240[65297] = data$$69 & 192;
      parentObj$$601.channel1EnableCheck();
    }
    return;
  }
  function v808(parentObj$$600, address$$94, data$$68) {
    var v1247 = parentObj$$600.soundMasterEnabled;
    if (v1247) {
      parentObj$$600.audioJIT();
      var v5737 = parentObj$$600.channel1decreaseSweep;
      if (v5737) {
        var v8512 = data$$68 & 8;
        v5737 = v8512 == 0;
      }
      var v1243 = v5737;
      if (v1243) {
        var v5738 = parentObj$$600.channel1numSweep;
        var v5739 = parentObj$$600.channel1frequencySweepDivider;
        var v1242 = v5738 != v5739;
        if (v1242) {
          parentObj$$600.channel1SweepFault = true;
        }
      }
      var v1244 = data$$68 & 112;
      parentObj$$600.channel1lastTimeSweep = v1244 >> 4;
      parentObj$$600.channel1frequencySweepDivider = data$$68 & 7;
      var v1245 = data$$68 & 8;
      parentObj$$600.channel1decreaseSweep = v1245 == 8;
      var v1246 = parentObj$$600.memory;
      v1246[65296] = data$$68;
      parentObj$$600.channel1EnableCheck();
    }
    return;
  }
  function v807(parentObj$$599, address$$93, data$$67) {
    parentObj$$599.interruptsRequested = data$$67;
    parentObj$$599.checkIRQMatching();
    return;
  }
  function v806(parentObj$$598, address$$92, data$$66) {
    var v1248 = parentObj$$598.memory;
    v1248[65287] = data$$66 & 7;
    var v1249 = data$$66 & 4;
    parentObj$$598.TIMAEnabled = v1249 == 4;
    var v8513;
    var v10229 = data$$66 & 3;
    var v9699 = v10229 != 0;
    if (v9699) {
      v8513 = data$$66 & 3;
    } else {
      v8513 = 4;
    }
    var v5740 = v8513;
    var v1250 = Math.pow(4, v5740);
    parentObj$$598.TACClocker = v1250 << 2;
    return;
  }
  function v805(parentObj$$597, address$$91, data$$65) {
    var v1251 = parentObj$$597.memory;
    v1251[65286] = data$$65;
    return;
  }
  function v804(parentObj$$596, address$$90, data$$64) {
    var v1252 = parentObj$$596.memory;
    v1252[65285] = data$$64;
    return;
  }
  function v803(parentObj$$595, address$$89, data$$63) {
    var v5741 = parentObj$$595.DIVTicks;
    parentObj$$595.DIVTicks = v5741 & 255;
    var v1253 = parentObj$$595.memory;
    v1253[65284] = 0;
    return;
  }
  function v802(parentObj$$594, address$$88, data$$62) {
    var v8514 = parentObj$$594.memory;
    var v5742 = v8514[65282];
    var v1255 = v5742 < 128;
    if (v1255) {
      var v1254 = parentObj$$594.memory;
      v1254[65281] = data$$62;
    }
    return;
  }
  function v801(parentObj$$593, address$$87, data$$61) {
    var v1256 = parentObj$$593.memory;
    var v5743 = data$$61 & 48;
    var v9700;
    var v10445 = data$$61 & 32;
    var v10231 = v10445 == 0;
    if (v10231) {
      var v10230 = parentObj$$593.JoyPad;
      v9700 = v10230 >> 4;
    } else {
      v9700 = 15;
    }
    var v8515 = v9700;
    var v9701;
    var v10446 = data$$61 & 16;
    var v10233 = v10446 == 0;
    if (v10233) {
      var v10232 = parentObj$$593.JoyPad;
      v9701 = v10232 & 15;
    } else {
      v9701 = 15;
    }
    var v8516 = v9701;
    var v5744 = v8515 & v8516;
    v1256[65280] = v5743 | v5744;
    return;
  }
  var v1257 = this.memoryHighWriter;
  var v5745 = this.memoryWriter;
  v1257[0] = v5745[65280] = v801;
  var v1258 = this.memoryHighWriter;
  var v5746 = this.memoryWriter;
  v1258[1] = v5746[65281] = v802;
  var v1259 = this.memoryHighWriter;
  var v5747 = this.memoryWriter;
  v1259[4] = v5747[65284] = v803;
  var v1260 = this.memoryHighWriter;
  var v5748 = this.memoryWriter;
  v1260[5] = v5748[65285] = v804;
  var v1261 = this.memoryHighWriter;
  var v5749 = this.memoryWriter;
  v1261[6] = v5749[65286] = v805;
  var v1262 = this.memoryHighWriter;
  var v5750 = this.memoryWriter;
  v1262[7] = v5750[65287] = v806;
  var v1263 = this.memoryHighWriter;
  var v5751 = this.memoryWriter;
  v1263[15] = v5751[65295] = v807;
  var v1264 = this.memoryHighWriter;
  var v5752 = this.memoryWriter;
  v1264[16] = v5752[65296] = v808;
  var v1265 = this.memoryHighWriter;
  var v5753 = this.memoryWriter;
  v1265[17] = v5753[65297] = v809;
  var v1266 = this.memoryHighWriter;
  var v5754 = this.memoryWriter;
  v1266[18] = v5754[65298] = v810;
  var v1267 = this.memoryHighWriter;
  var v5755 = this.memoryWriter;
  v1267[19] = v5755[65299] = v811;
  var v1268 = this.memoryHighWriter;
  var v5756 = this.memoryWriter;
  v1268[20] = v5756[65300] = v812;
  var v1269 = this.memoryHighWriter;
  var v5757 = this.memoryWriter;
  v1269[22] = v5757[65302] = v813;
  var v1270 = this.memoryHighWriter;
  var v5758 = this.memoryWriter;
  v1270[23] = v5758[65303] = v814;
  var v1271 = this.memoryHighWriter;
  var v5759 = this.memoryWriter;
  v1271[24] = v5759[65304] = v815;
  var v1272 = this.memoryHighWriter;
  var v5760 = this.memoryWriter;
  v1272[25] = v5760[65305] = v816;
  var v1273 = this.memoryHighWriter;
  var v5761 = this.memoryWriter;
  v1273[26] = v5761[65306] = v817;
  var v1274 = this.memoryHighWriter;
  var v5762 = this.memoryWriter;
  v1274[27] = v5762[65307] = v818;
  var v1275 = this.memoryHighWriter;
  var v5763 = this.memoryWriter;
  v1275[28] = v5763[65308] = v819;
  var v1276 = this.memoryHighWriter;
  var v5764 = this.memoryWriter;
  v1276[29] = v5764[65309] = v820;
  var v1277 = this.memoryHighWriter;
  var v5765 = this.memoryWriter;
  v1277[30] = v5765[65310] = v821;
  var v1278 = this.memoryHighWriter;
  var v5766 = this.memoryWriter;
  v1278[32] = v5766[65312] = v822;
  var v1279 = this.memoryHighWriter;
  var v5767 = this.memoryWriter;
  v1279[33] = v5767[65313] = v823;
  var v1280 = this.memoryHighWriter;
  var v5768 = this.memoryWriter;
  v1280[34] = v5768[65314] = v824;
  var v1281 = this.memoryHighWriter;
  var v5769 = this.memoryWriter;
  v1281[35] = v5769[65315] = v825;
  var v1282 = this.memoryHighWriter;
  var v5770 = this.memoryWriter;
  v1282[36] = v5770[65316] = v826;
  var v1283 = this.memoryHighWriter;
  var v5771 = this.memoryWriter;
  v1283[37] = v5771[65317] = v827;
  var v1284 = this.memoryHighWriter;
  var v5772 = this.memoryWriter;
  v1284[38] = v5772[65318] = v828;
  var v1285 = this.memoryHighWriter;
  var v5773 = this.memoryWriter;
  v1285[39] = v5773[65319] = this.cartIgnoreWrite;
  var v1286 = this.memoryHighWriter;
  var v5774 = this.memoryWriter;
  v1286[40] = v5774[65320] = this.cartIgnoreWrite;
  var v1287 = this.memoryHighWriter;
  var v5775 = this.memoryWriter;
  v1287[41] = v5775[65321] = this.cartIgnoreWrite;
  var v1288 = this.memoryHighWriter;
  var v5776 = this.memoryWriter;
  v1288[42] = v5776[65322] = this.cartIgnoreWrite;
  var v1289 = this.memoryHighWriter;
  var v5777 = this.memoryWriter;
  v1289[43] = v5777[65323] = this.cartIgnoreWrite;
  var v1290 = this.memoryHighWriter;
  var v5778 = this.memoryWriter;
  v1290[44] = v5778[65324] = this.cartIgnoreWrite;
  var v1291 = this.memoryHighWriter;
  var v5779 = this.memoryWriter;
  v1291[45] = v5779[65325] = this.cartIgnoreWrite;
  var v1292 = this.memoryHighWriter;
  var v5780 = this.memoryWriter;
  v1292[46] = v5780[65326] = this.cartIgnoreWrite;
  var v1293 = this.memoryHighWriter;
  var v5781 = this.memoryWriter;
  v1293[47] = v5781[65327] = this.cartIgnoreWrite;
  var v1294 = this.memoryHighWriter;
  var v5782 = this.memoryWriter;
  v1294[48] = v5782[65328] = v829;
  var v1295 = this.memoryHighWriter;
  var v5783 = this.memoryWriter;
  v1295[49] = v5783[65329] = v830;
  var v1296 = this.memoryHighWriter;
  var v5784 = this.memoryWriter;
  v1296[50] = v5784[65330] = v831;
  var v1297 = this.memoryHighWriter;
  var v5785 = this.memoryWriter;
  v1297[51] = v5785[65331] = v832;
  var v1298 = this.memoryHighWriter;
  var v5786 = this.memoryWriter;
  v1298[52] = v5786[65332] = v833;
  var v1299 = this.memoryHighWriter;
  var v5787 = this.memoryWriter;
  v1299[53] = v5787[65333] = v834;
  var v1300 = this.memoryHighWriter;
  var v5788 = this.memoryWriter;
  v1300[54] = v5788[65334] = v835;
  var v1301 = this.memoryHighWriter;
  var v5789 = this.memoryWriter;
  v1301[55] = v5789[65335] = v836;
  var v1302 = this.memoryHighWriter;
  var v5790 = this.memoryWriter;
  v1302[56] = v5790[65336] = v837;
  var v1303 = this.memoryHighWriter;
  var v5791 = this.memoryWriter;
  v1303[57] = v5791[65337] = v838;
  var v1304 = this.memoryHighWriter;
  var v5792 = this.memoryWriter;
  v1304[58] = v5792[65338] = v839;
  var v1305 = this.memoryHighWriter;
  var v5793 = this.memoryWriter;
  v1305[59] = v5793[65339] = v840;
  var v1306 = this.memoryHighWriter;
  var v5794 = this.memoryWriter;
  v1306[60] = v5794[65340] = v841;
  var v1307 = this.memoryHighWriter;
  var v5795 = this.memoryWriter;
  v1307[61] = v5795[65341] = v842;
  var v1308 = this.memoryHighWriter;
  var v5796 = this.memoryWriter;
  v1308[62] = v5796[65342] = v843;
  var v1309 = this.memoryHighWriter;
  var v5797 = this.memoryWriter;
  v1309[63] = v5797[65343] = v844;
  var v1310 = this.memoryHighWriter;
  var v5798 = this.memoryWriter;
  v1310[66] = v5798[65346] = v845;
  var v1311 = this.memoryHighWriter;
  var v5799 = this.memoryWriter;
  v1311[67] = v5799[65347] = v846;
  var v1312 = this.memoryHighWriter;
  var v5800 = this.memoryWriter;
  v1312[68] = v5800[65348] = v847;
  var v1313 = this.memoryHighWriter;
  var v5801 = this.memoryWriter;
  v1313[69] = v5801[65349] = v848;
  var v1314 = this.memoryHighWriter;
  var v5802 = this.memoryWriter;
  v1314[74] = v5802[65354] = v849;
  var v1315 = this.memoryHighWriter;
  var v5803 = this.memoryWriter;
  v1315[75] = v5803[65355] = v850;
  var v1316 = this.memoryHighWriter;
  var v5804 = this.memoryWriter;
  v1316[114] = v5804[65394] = v851;
  var v1317 = this.memoryHighWriter;
  var v5805 = this.memoryWriter;
  v1317[115] = v5805[65395] = v852;
  var v1318 = this.memoryHighWriter;
  var v5806 = this.memoryWriter;
  v1318[117] = v5806[65397] = v853;
  var v1319 = this.memoryHighWriter;
  var v5807 = this.memoryWriter;
  v1319[118] = v5807[65398] = this.cartIgnoreWrite;
  var v1320 = this.memoryHighWriter;
  var v5808 = this.memoryWriter;
  v1320[119] = v5808[65399] = this.cartIgnoreWrite;
  var v1321 = this.memoryHighWriter;
  var v5809 = this.memoryWriter;
  v1321[255] = v5809[65535] = v854;
  this.recompileModelSpecificIOWriteHandling();
  this.recompileBootIOWriteHandling();
  return;
}
function v800(tilesToTransfer) {
  var v5810 = this.halt;
  var v1322 = !v5810;
  if (v1322) {
    var v5811 = this.CPUTicks;
    var v9702 = tilesToTransfer << 5;
    var v9703 = this.doubleSpeedShifter;
    var v8517 = v9702 << v9703;
    var v5812 = 4 | v8517;
    this.CPUTicks = v5811 + v5812;
  }
  var v8518 = this.memory;
  var v5813 = v8518[65361];
  var v1323 = v5813 << 8;
  var v5814 = this.memory;
  var v1324 = v5814[65362];
  var source$$1 = v1323 | v1324;
  var v8519 = this.memory;
  var v5815 = v8519[65363];
  var v1325 = v5815 << 8;
  var v5816 = this.memory;
  var v1326 = v5816[65364];
  var destination = v1325 | v1326;
  var memoryReader = this.memoryReader;
  this.graphicsJIT();
  var memory = this.memory;
  var v5817 = this.currVRAMBank;
  var v1429 = v5817 == 0;
  if (v1429) {
    var v1377 = tilesToTransfer > 0;
    do {
      var v1376 = destination < 6144;
      if (v1376) {
        var v1327 = 32768 | destination;
        var v5818 = source$$1;
        source$$1 = source$$1 + 1;
        var v10612 = memoryReader[source$$1](this, v5818);
        memory[v1327] = v10612;
        var v1328 = 32769 | destination;
        var v5819 = source$$1;
        source$$1 = source$$1 + 1;
        var v10613 = memoryReader[source$$1](this, v5819);
        memory[v1328] = v10613;
        var v1329 = 32770 | destination;
        var v5820 = source$$1;
        source$$1 = source$$1 + 1;
        var v10614 = memoryReader[source$$1](this, v5820);
        memory[v1329] = v10614;
        var v1330 = 32771 | destination;
        var v5821 = source$$1;
        source$$1 = source$$1 + 1;
        var v10615 = memoryReader[source$$1](this, v5821);
        memory[v1330] = v10615;
        var v1331 = 32772 | destination;
        var v5822 = source$$1;
        source$$1 = source$$1 + 1;
        var v10616 = memoryReader[source$$1](this, v5822);
        memory[v1331] = v10616;
        var v1332 = 32773 | destination;
        var v5823 = source$$1;
        source$$1 = source$$1 + 1;
        var v10617 = memoryReader[source$$1](this, v5823);
        memory[v1332] = v10617;
        var v1333 = 32774 | destination;
        var v5824 = source$$1;
        source$$1 = source$$1 + 1;
        var v10618 = memoryReader[source$$1](this, v5824);
        memory[v1333] = v10618;
        var v1334 = 32775 | destination;
        var v5825 = source$$1;
        source$$1 = source$$1 + 1;
        var v10619 = memoryReader[source$$1](this, v5825);
        memory[v1334] = v10619;
        var v1335 = 32776 | destination;
        var v5826 = source$$1;
        source$$1 = source$$1 + 1;
        var v10620 = memoryReader[source$$1](this, v5826);
        memory[v1335] = v10620;
        var v1336 = 32777 | destination;
        var v5827 = source$$1;
        source$$1 = source$$1 + 1;
        var v10621 = memoryReader[source$$1](this, v5827);
        memory[v1336] = v10621;
        var v1337 = 32778 | destination;
        var v5828 = source$$1;
        source$$1 = source$$1 + 1;
        var v10622 = memoryReader[source$$1](this, v5828);
        memory[v1337] = v10622;
        var v1338 = 32779 | destination;
        var v5829 = source$$1;
        source$$1 = source$$1 + 1;
        var v10623 = memoryReader[source$$1](this, v5829);
        memory[v1338] = v10623;
        var v1339 = 32780 | destination;
        var v5830 = source$$1;
        source$$1 = source$$1 + 1;
        var v10624 = memoryReader[source$$1](this, v5830);
        memory[v1339] = v10624;
        var v1340 = 32781 | destination;
        var v5831 = source$$1;
        source$$1 = source$$1 + 1;
        var v10625 = memoryReader[source$$1](this, v5831);
        memory[v1340] = v10625;
        var v1341 = 32782 | destination;
        var v5832 = source$$1;
        source$$1 = source$$1 + 1;
        var v10626 = memoryReader[source$$1](this, v5832);
        memory[v1341] = v10626;
        var v1342 = 32783 | destination;
        var v5833 = source$$1;
        source$$1 = source$$1 + 1;
        var v10627 = memoryReader[source$$1](this, v5833);
        memory[v1342] = v10627;
        this.generateGBCTileBank1(destination);
        destination = destination + 16;
      } else {
        destination = destination & 2032;
        var v1343 = this.BGCHRBank1;
        var v1344 = destination;
        destination = destination + 1;
        var v5834 = source$$1;
        source$$1 = source$$1 + 1;
        var v10628 = memoryReader[source$$1](this, v5834);
        v1343[v1344] = v10628;
        var v1345 = this.BGCHRBank1;
        var v1346 = destination;
        destination = destination + 1;
        var v5835 = source$$1;
        source$$1 = source$$1 + 1;
        var v10629 = memoryReader[source$$1](this, v5835);
        v1345[v1346] = v10629;
        var v1347 = this.BGCHRBank1;
        var v1348 = destination;
        destination = destination + 1;
        var v5836 = source$$1;
        source$$1 = source$$1 + 1;
        var v10630 = memoryReader[source$$1](this, v5836);
        v1347[v1348] = v10630;
        var v1349 = this.BGCHRBank1;
        var v1350 = destination;
        destination = destination + 1;
        var v5837 = source$$1;
        source$$1 = source$$1 + 1;
        var v10631 = memoryReader[source$$1](this, v5837);
        v1349[v1350] = v10631;
        var v1351 = this.BGCHRBank1;
        var v1352 = destination;
        destination = destination + 1;
        var v5838 = source$$1;
        source$$1 = source$$1 + 1;
        var v10632 = memoryReader[source$$1](this, v5838);
        v1351[v1352] = v10632;
        var v1353 = this.BGCHRBank1;
        var v1354 = destination;
        destination = destination + 1;
        var v5839 = source$$1;
        source$$1 = source$$1 + 1;
        var v10633 = memoryReader[source$$1](this, v5839);
        v1353[v1354] = v10633;
        var v1355 = this.BGCHRBank1;
        var v1356 = destination;
        destination = destination + 1;
        var v5840 = source$$1;
        source$$1 = source$$1 + 1;
        var v10634 = memoryReader[source$$1](this, v5840);
        v1355[v1356] = v10634;
        var v1357 = this.BGCHRBank1;
        var v1358 = destination;
        destination = destination + 1;
        var v5841 = source$$1;
        source$$1 = source$$1 + 1;
        var v10635 = memoryReader[source$$1](this, v5841);
        v1357[v1358] = v10635;
        var v1359 = this.BGCHRBank1;
        var v1360 = destination;
        destination = destination + 1;
        var v5842 = source$$1;
        source$$1 = source$$1 + 1;
        var v10636 = memoryReader[source$$1](this, v5842);
        v1359[v1360] = v10636;
        var v1361 = this.BGCHRBank1;
        var v1362 = destination;
        destination = destination + 1;
        var v5843 = source$$1;
        source$$1 = source$$1 + 1;
        var v10637 = memoryReader[source$$1](this, v5843);
        v1361[v1362] = v10637;
        var v1363 = this.BGCHRBank1;
        var v1364 = destination;
        destination = destination + 1;
        var v5844 = source$$1;
        source$$1 = source$$1 + 1;
        var v10638 = memoryReader[source$$1](this, v5844);
        v1363[v1364] = v10638;
        var v1365 = this.BGCHRBank1;
        var v1366 = destination;
        destination = destination + 1;
        var v5845 = source$$1;
        source$$1 = source$$1 + 1;
        var v10639 = memoryReader[source$$1](this, v5845);
        v1365[v1366] = v10639;
        var v1367 = this.BGCHRBank1;
        var v1368 = destination;
        destination = destination + 1;
        var v5846 = source$$1;
        source$$1 = source$$1 + 1;
        var v10640 = memoryReader[source$$1](this, v5846);
        v1367[v1368] = v10640;
        var v1369 = this.BGCHRBank1;
        var v1370 = destination;
        destination = destination + 1;
        var v5847 = source$$1;
        source$$1 = source$$1 + 1;
        var v10641 = memoryReader[source$$1](this, v5847);
        v1369[v1370] = v10641;
        var v1371 = this.BGCHRBank1;
        var v1372 = destination;
        destination = destination + 1;
        var v5848 = source$$1;
        source$$1 = source$$1 + 1;
        var v10642 = memoryReader[source$$1](this, v5848);
        v1371[v1372] = v10642;
        var v1373 = this.BGCHRBank1;
        var v1374 = destination;
        destination = destination + 1;
        var v5849 = source$$1;
        source$$1 = source$$1 + 1;
        var v10643 = memoryReader[source$$1](this, v5849);
        v1373[v1374] = v10643;
        var v1375 = destination + 6144;
        destination = v1375 & 8176;
      }
      source$$1 = source$$1 & 65520;
      --tilesToTransfer;
      v1377 = tilesToTransfer > 0;
    } while (v1377);
  } else {
    var VRAM = this.VRAM;
    var v1428 = tilesToTransfer > 0;
    do {
      var v1427 = destination < 6144;
      if (v1427) {
        var v1378 = source$$1;
        source$$1 = source$$1 + 1;
        var v10644 = memoryReader[source$$1](this, v1378);
        VRAM[destination] = v10644;
        var v1379 = destination | 1;
        var v5850 = source$$1;
        source$$1 = source$$1 + 1;
        var v10645 = memoryReader[source$$1](this, v5850);
        VRAM[v1379] = v10645;
        var v1380 = destination | 2;
        var v5851 = source$$1;
        source$$1 = source$$1 + 1;
        var v10646 = memoryReader[source$$1](this, v5851);
        VRAM[v1380] = v10646;
        var v1381 = destination | 3;
        var v5852 = source$$1;
        source$$1 = source$$1 + 1;
        var v10647 = memoryReader[source$$1](this, v5852);
        VRAM[v1381] = v10647;
        var v1382 = destination | 4;
        var v5853 = source$$1;
        source$$1 = source$$1 + 1;
        var v10648 = memoryReader[source$$1](this, v5853);
        VRAM[v1382] = v10648;
        var v1383 = destination | 5;
        var v5854 = source$$1;
        source$$1 = source$$1 + 1;
        var v10649 = memoryReader[source$$1](this, v5854);
        VRAM[v1383] = v10649;
        var v1384 = destination | 6;
        var v5855 = source$$1;
        source$$1 = source$$1 + 1;
        var v10650 = memoryReader[source$$1](this, v5855);
        VRAM[v1384] = v10650;
        var v1385 = destination | 7;
        var v5856 = source$$1;
        source$$1 = source$$1 + 1;
        var v10651 = memoryReader[source$$1](this, v5856);
        VRAM[v1385] = v10651;
        var v1386 = destination | 8;
        var v5857 = source$$1;
        source$$1 = source$$1 + 1;
        var v10652 = memoryReader[source$$1](this, v5857);
        VRAM[v1386] = v10652;
        var v1387 = destination | 9;
        var v5858 = source$$1;
        source$$1 = source$$1 + 1;
        var v10653 = memoryReader[source$$1](this, v5858);
        VRAM[v1387] = v10653;
        var v1388 = destination | 10;
        var v5859 = source$$1;
        source$$1 = source$$1 + 1;
        var v10654 = memoryReader[source$$1](this, v5859);
        VRAM[v1388] = v10654;
        var v1389 = destination | 11;
        var v5860 = source$$1;
        source$$1 = source$$1 + 1;
        var v10655 = memoryReader[source$$1](this, v5860);
        VRAM[v1389] = v10655;
        var v1390 = destination | 12;
        var v5861 = source$$1;
        source$$1 = source$$1 + 1;
        var v10656 = memoryReader[source$$1](this, v5861);
        VRAM[v1390] = v10656;
        var v1391 = destination | 13;
        var v5862 = source$$1;
        source$$1 = source$$1 + 1;
        var v10657 = memoryReader[source$$1](this, v5862);
        VRAM[v1391] = v10657;
        var v1392 = destination | 14;
        var v5863 = source$$1;
        source$$1 = source$$1 + 1;
        var v10658 = memoryReader[source$$1](this, v5863);
        VRAM[v1392] = v10658;
        var v1393 = destination | 15;
        var v5864 = source$$1;
        source$$1 = source$$1 + 1;
        var v10659 = memoryReader[source$$1](this, v5864);
        VRAM[v1393] = v10659;
        this.generateGBCTileBank2(destination);
        destination = destination + 16;
      } else {
        destination = destination & 2032;
        var v1394 = this.BGCHRBank2;
        var v1395 = destination;
        destination = destination + 1;
        var v5865 = source$$1;
        source$$1 = source$$1 + 1;
        var v10660 = memoryReader[source$$1](this, v5865);
        v1394[v1395] = v10660;
        var v1396 = this.BGCHRBank2;
        var v1397 = destination;
        destination = destination + 1;
        var v5866 = source$$1;
        source$$1 = source$$1 + 1;
        var v10661 = memoryReader[source$$1](this, v5866);
        v1396[v1397] = v10661;
        var v1398 = this.BGCHRBank2;
        var v1399 = destination;
        destination = destination + 1;
        var v5867 = source$$1;
        source$$1 = source$$1 + 1;
        var v10662 = memoryReader[source$$1](this, v5867);
        v1398[v1399] = v10662;
        var v1400 = this.BGCHRBank2;
        var v1401 = destination;
        destination = destination + 1;
        var v5868 = source$$1;
        source$$1 = source$$1 + 1;
        var v10663 = memoryReader[source$$1](this, v5868);
        v1400[v1401] = v10663;
        var v1402 = this.BGCHRBank2;
        var v1403 = destination;
        destination = destination + 1;
        var v5869 = source$$1;
        source$$1 = source$$1 + 1;
        var v10664 = memoryReader[source$$1](this, v5869);
        v1402[v1403] = v10664;
        var v1404 = this.BGCHRBank2;
        var v1405 = destination;
        destination = destination + 1;
        var v5870 = source$$1;
        source$$1 = source$$1 + 1;
        var v10665 = memoryReader[source$$1](this, v5870);
        v1404[v1405] = v10665;
        var v1406 = this.BGCHRBank2;
        var v1407 = destination;
        destination = destination + 1;
        var v5871 = source$$1;
        source$$1 = source$$1 + 1;
        var v10666 = memoryReader[source$$1](this, v5871);
        v1406[v1407] = v10666;
        var v1408 = this.BGCHRBank2;
        var v1409 = destination;
        destination = destination + 1;
        var v5872 = source$$1;
        source$$1 = source$$1 + 1;
        var v10667 = memoryReader[source$$1](this, v5872);
        v1408[v1409] = v10667;
        var v1410 = this.BGCHRBank2;
        var v1411 = destination;
        destination = destination + 1;
        var v5873 = source$$1;
        source$$1 = source$$1 + 1;
        var v10668 = memoryReader[source$$1](this, v5873);
        v1410[v1411] = v10668;
        var v1412 = this.BGCHRBank2;
        var v1413 = destination;
        destination = destination + 1;
        var v5874 = source$$1;
        source$$1 = source$$1 + 1;
        var v10669 = memoryReader[source$$1](this, v5874);
        v1412[v1413] = v10669;
        var v1414 = this.BGCHRBank2;
        var v1415 = destination;
        destination = destination + 1;
        var v5875 = source$$1;
        source$$1 = source$$1 + 1;
        var v10670 = memoryReader[source$$1](this, v5875);
        v1414[v1415] = v10670;
        var v1416 = this.BGCHRBank2;
        var v1417 = destination;
        destination = destination + 1;
        var v5876 = source$$1;
        source$$1 = source$$1 + 1;
        var v10671 = memoryReader[source$$1](this, v5876);
        v1416[v1417] = v10671;
        var v1418 = this.BGCHRBank2;
        var v1419 = destination;
        destination = destination + 1;
        var v5877 = source$$1;
        source$$1 = source$$1 + 1;
        var v10672 = memoryReader[source$$1](this, v5877);
        v1418[v1419] = v10672;
        var v1420 = this.BGCHRBank2;
        var v1421 = destination;
        destination = destination + 1;
        var v5878 = source$$1;
        source$$1 = source$$1 + 1;
        var v10673 = memoryReader[source$$1](this, v5878);
        v1420[v1421] = v10673;
        var v1422 = this.BGCHRBank2;
        var v1423 = destination;
        destination = destination + 1;
        var v5879 = source$$1;
        source$$1 = source$$1 + 1;
        var v10674 = memoryReader[source$$1](this, v5879);
        v1422[v1423] = v10674;
        var v1424 = this.BGCHRBank2;
        var v1425 = destination;
        destination = destination + 1;
        var v5880 = source$$1;
        source$$1 = source$$1 + 1;
        var v10675 = memoryReader[source$$1](this, v5880);
        v1424[v1425] = v10675;
        var v1426 = destination + 6144;
        destination = v1426 & 8176;
      }
      source$$1 = source$$1 & 65520;
      --tilesToTransfer;
      v1428 = tilesToTransfer > 0;
    } while (v1428);
  }
  memory[65361] = source$$1 >> 8;
  memory[65362] = source$$1 & 240;
  memory[65363] = destination >> 8;
  memory[65364] = destination & 240;
  return;
}
function v799(parentObj$$592, address$$86, data$$60) {
  var v5881 = parentObj$$592.modeSTAT;
  var v1432 = v5881 < 3;
  if (v1432) {
    address$$86 = address$$86 & 2047;
    var v8520 = parentObj$$592.BGCHRCurrentBank;
    var v5882 = v8520[address$$86];
    var v1431 = v5882 != data$$60;
    if (v1431) {
      parentObj$$592.graphicsJIT();
      var v1430 = parentObj$$592.BGCHRCurrentBank;
      v1430[address$$86] = data$$60;
    }
  }
  return;
}
function v798(parentObj$$591, address$$85, data$$59) {
  var v5883 = parentObj$$591.modeSTAT;
  var v1435 = v5883 < 3;
  if (v1435) {
    address$$85 = address$$85 & 2047;
    var v8521 = parentObj$$591.BGCHRBank1;
    var v5884 = v8521[address$$85];
    var v1434 = v5884 != data$$59;
    if (v1434) {
      parentObj$$591.graphicsJIT();
      var v1433 = parentObj$$591.BGCHRBank1;
      v1433[address$$85] = data$$59;
    }
  }
  return;
}
function v797(parentObj$$590, address$$84, data$$58) {
  var v5885 = parentObj$$590.modeSTAT;
  var v1441 = v5885 < 3;
  if (v1441) {
    var v5886 = parentObj$$590.currVRAMBank;
    var v1440 = v5886 == 0;
    if (v1440) {
      var v8522 = parentObj$$590.memory;
      var v5887 = v8522[address$$84];
      var v1437 = v5887 != data$$58;
      if (v1437) {
        parentObj$$590.graphicsJIT();
        var v1436 = parentObj$$590.memory;
        v1436[address$$84] = data$$58;
        parentObj$$590.generateGBCTileLineBank1(address$$84);
      }
    } else {
      address$$84 = address$$84 & 8191;
      var v8523 = parentObj$$590.VRAM;
      var v5888 = v8523[address$$84];
      var v1439 = v5888 != data$$58;
      if (v1439) {
        parentObj$$590.graphicsJIT();
        var v1438 = parentObj$$590.VRAM;
        v1438[address$$84] = data$$58;
        parentObj$$590.generateGBCTileLineBank2(address$$84);
      }
    }
  }
  return;
}
function v796(parentObj$$589, address$$83, data$$57) {
  var v5889 = parentObj$$589.modeSTAT;
  var v1444 = v5889 < 3;
  if (v1444) {
    var v8524 = parentObj$$589.memory;
    var v5890 = v8524[address$$83];
    var v1443 = v5890 != data$$57;
    if (v1443) {
      parentObj$$589.graphicsJIT();
      var v1442 = parentObj$$589.memory;
      v1442[address$$83] = data$$57;
      parentObj$$589.generateGBTileLine(address$$83);
    }
  }
  return;
}
function v795(parentObj$$588, address$$82, data$$56) {
  var v5891 = parentObj$$588.modeSTAT;
  var v1447 = v5891 < 3;
  if (v1447) {
    var v8525 = parentObj$$588.memory;
    var v5892 = v8525[address$$82];
    var v1446 = v5892 != data$$56;
    if (v1446) {
      parentObj$$588.graphicsJIT();
      var v1445 = parentObj$$588.memory;
      v1445[address$$82] = data$$56;
      parentObj$$588.generateGBOAMTileLine(address$$82);
    }
  }
  return;
}
function v794(parentObj$$587, address$$81, data$$55) {
  var v1448 = parentObj$$587.memory;
  var v1449 = address$$81 - 8192;
  v1448[v1449] = data$$55;
  return;
}
function v793(parentObj$$586, address$$80, data$$54) {
  var v1450 = parentObj$$586.GBCMemory;
  var v5893 = parentObj$$586.gbcRamBankPositionECHO;
  var v1451 = address$$80 + v5893;
  v1450[v1451] = data$$54;
  return;
}
function v792(parentObj$$585, address$$79, data$$53) {
  var v5894 = parentObj$$585.modeSTAT;
  var v1454 = v5894 < 2;
  if (v1454) {
    var v8526 = parentObj$$585.memory;
    var v5895 = v8526[address$$79];
    var v1453 = v5895 != data$$53;
    if (v1453) {
      parentObj$$585.graphicsJIT();
      var v1452 = parentObj$$585.memory;
      v1452[address$$79] = data$$53;
    }
  }
  return;
}
function v791(parentObj$$584, address$$78, data$$52) {
  var v1455 = parentObj$$584.GBCMemory;
  var v5896 = parentObj$$584.gbcRamBankPosition;
  var v1456 = address$$78 + v5896;
  v1455[v1456] = data$$52;
  return;
}
function v790(parentObj$$583, address$$77, data$$51) {
  var v5897 = parentObj$$583.MBCRAMBanksEnabled;
  var v8527 = !v5897;
  if (v8527) {
    v5897 = settings[10];
  }
  var v1472 = v5897;
  if (v1472) {
    var v1471 = parentObj$$583.currMBCRAMBank;
    switch(v1471) {
      case 0:
      ;
      case 1:
      ;
      case 2:
      ;
      case 3:
        var v1457 = parentObj$$583.MBCRam;
        var v5898 = parentObj$$583.currMBCRAMBankPosition;
        var v1458 = address$$77 + v5898;
        v1457[v1458] = data$$51;
        break;
      case 8:
        var v1460 = data$$51 < 60;
        if (v1460) {
          parentObj$$583.RTCSeconds = data$$51;
        } else {
          var v9704 = parentObj$$583.currMBCRAMBank;
          var v8528 = "(Bank #" + v9704;
          var v5899 = v8528 + ") RTC write out of range: ";
          var v1459 = v5899 + data$$51;
          cout(v1459, 1);
        }
        break;
      case 9:
        var v1462 = data$$51 < 60;
        if (v1462) {
          parentObj$$583.RTCMinutes = data$$51;
        } else {
          var v9705 = parentObj$$583.currMBCRAMBank;
          var v8529 = "(Bank #" + v9705;
          var v5900 = v8529 + ") RTC write out of range: ";
          var v1461 = v5900 + data$$51;
          cout(v1461, 1);
        }
        break;
      case 10:
        var v1464 = data$$51 < 24;
        if (v1464) {
          parentObj$$583.RTCHours = data$$51;
        } else {
          var v9706 = parentObj$$583.currMBCRAMBank;
          var v8530 = "(Bank #" + v9706;
          var v5901 = v8530 + ") RTC write out of range: ";
          var v1463 = v5901 + data$$51;
          cout(v1463, 1);
        }
        break;
      case 11:
        var v1465 = data$$51 & 255;
        var v5902 = parentObj$$583.RTCDays;
        var v1466 = v5902 & 256;
        parentObj$$583.RTCDays = v1465 | v1466;
        break;
      case 12:
        parentObj$$583.RTCDayOverFlow = data$$51 > 127;
        var v1467 = data$$51 & 64;
        parentObj$$583.RTCHalt = v1467 == 64;
        var v5903 = data$$51 & 1;
        var v1468 = v5903 << 8;
        var v5904 = parentObj$$583.RTCDays;
        var v1469 = v5904 & 255;
        parentObj$$583.RTCDays = v1468 | v1469;
        break;
      default:
        var v5905 = parentObj$$583.currMBCRAMBank;
        var v1470 = "Invalid MBC3 bank address selected: " + v5905;
        cout(v1470, 0);
    }
  }
  return;
}
function v789(parentObj$$582, address$$76, data$$50) {
  var v5906 = parentObj$$582.MBCRAMBanksEnabled;
  var v8531 = !v5906;
  if (v8531) {
    v5906 = settings[10];
  }
  var v1475 = v5906;
  if (v1475) {
    var v1473 = parentObj$$582.MBCRam;
    var v5907 = parentObj$$582.currMBCRAMBankPosition;
    var v1474 = address$$76 + v5907;
    v1473[v1474] = data$$50;
  }
  return;
}
function v788(parentObj$$581, address$$75, data$$49) {
  var v1476 = parentObj$$581.memory;
  var v1477 = 65280 | address$$75;
  v1476[v1477] = data$$49;
  return;
}
function v787(parentObj$$580, address$$74, data$$48) {
  var v1478 = parentObj$$580.memory;
  v1478[address$$74] = data$$48;
  return;
}
function v786(parentObj$$579, address$$73, data$$47) {
  return;
}
function v785(parentObj$$578, address$$72, data$$46) {
  parentObj$$578.currMBCRAMBank = data$$46 & 3;
  var v5908 = parentObj$$578.currMBCRAMBank;
  var v1479 = v5908 << 13;
  parentObj$$578.currMBCRAMBankPosition = v1479 - 40960;
  return;
}
function v784(parentObj$$577, address$$71, data$$45) {
  parentObj$$577.currMBCRAMBank = data$$45 & 3;
  var v5909 = parentObj$$577.currMBCRAMBank;
  var v1480 = v5909 << 13;
  parentObj$$577.currMBCRAMBankPosition = v1480 - 40960;
  return;
}
function v783(parentObj$$576, address$$70, data$$44) {
  parentObj$$576.currMBCRAMBank = data$$44 & 15;
  var v5910 = parentObj$$576.currMBCRAMBank;
  var v1481 = v5910 << 13;
  parentObj$$576.currMBCRAMBankPosition = v1481 - 40960;
  return;
}
function v782(parentObj$$575, address$$69, data$$43) {
  var v5911 = data$$43 & 1;
  var v1482 = v5911 << 8;
  var v5912 = parentObj$$575.ROMBank1offs;
  var v1483 = v5912 & 255;
  parentObj$$575.ROMBank1offs = v1482 | v1483;
  parentObj$$575.setCurrentMBC5ROMBank();
  return;
}
function v781(parentObj$$574, address$$68, data$$42) {
  var v5913 = parentObj$$574.ROMBank1offs;
  var v1484 = v5913 & 256;
  parentObj$$574.ROMBank1offs = v1484 | data$$42;
  parentObj$$574.setCurrentMBC5ROMBank();
  return;
}
function v780(parentObj$$573, address$$67, data$$41) {
  var v1489 = data$$41 == 0;
  if (v1489) {
    parentObj$$573.RTCisLatched = false;
  } else {
    var v5914 = parentObj$$573.RTCisLatched;
    var v1488 = !v5914;
    if (v1488) {
      parentObj$$573.RTCisLatched = true;
      var v1485 = parentObj$$573.RTCSeconds;
      parentObj$$573.latchedSeconds = v1485 | 0;
      parentObj$$573.latchedMinutes = parentObj$$573.RTCMinutes;
      parentObj$$573.latchedHours = parentObj$$573.RTCHours;
      var v1486 = parentObj$$573.RTCDays;
      parentObj$$573.latchedLDays = v1486 & 255;
      var v1487 = parentObj$$573.RTCDays;
      parentObj$$573.latchedHDays = v1487 >> 8;
    }
  }
  return;
}
function v779(parentObj$$572, address$$66, data$$40) {
  parentObj$$572.currMBCRAMBank = data$$40;
  var v1491 = data$$40 < 4;
  if (v1491) {
    var v5915 = parentObj$$572.currMBCRAMBank;
    var v1490 = v5915 << 13;
    parentObj$$572.currMBCRAMBankPosition = v1490 - 40960;
  }
  return;
}
function v778(parentObj$$571, address$$65, data$$39) {
  parentObj$$571.ROMBank1offs = data$$39 & 127;
  parentObj$$571.setCurrentMBC2AND3ROMBank();
  return;
}
function v777(parentObj$$570, address$$64, data$$38) {
  parentObj$$570.ROMBank1offs = data$$38 & 15;
  parentObj$$570.setCurrentMBC2AND3ROMBank();
  return;
}
function v776(parentObj$$569, address$$63, data$$37) {
  var v1492 = data$$37 & 1;
  parentObj$$569.MBC1Mode = v1492 == 1;
  var v1493 = parentObj$$569.MBC1Mode;
  if (v1493) {
    var v5916 = parentObj$$569.ROMBank1offs;
    parentObj$$569.ROMBank1offs = v5916 & 31;
    parentObj$$569.setCurrentMBC1ROMBank();
  } else {
    parentObj$$569.currMBCRAMBank = 0;
    parentObj$$569.currMBCRAMBankPosition = -40960;
  }
  return;
}
function v775(parentObj$$568, address$$62, data$$36) {
  var v1497 = parentObj$$568.MBC1Mode;
  if (v1497) {
    parentObj$$568.currMBCRAMBank = data$$36 & 3;
    var v5917 = parentObj$$568.currMBCRAMBank;
    var v1494 = v5917 << 13;
    parentObj$$568.currMBCRAMBankPosition = v1494 - 40960;
  } else {
    var v5918 = data$$36 & 3;
    var v1495 = v5918 << 5;
    var v5919 = parentObj$$568.ROMBank1offs;
    var v1496 = v5919 & 31;
    parentObj$$568.ROMBank1offs = v1495 | v1496;
    parentObj$$568.setCurrentMBC1ROMBank();
  }
  return;
}
function v774(parentObj$$567, address$$61, data$$35) {
  var v5920 = parentObj$$567.ROMBank1offs;
  var v1498 = v5920 & 96;
  var v1499 = data$$35 & 31;
  parentObj$$567.ROMBank1offs = v1498 | v1499;
  parentObj$$567.setCurrentMBC1ROMBank();
  return;
}
function v773(parentObj$$566, address$$60, data$$34) {
  var v1500 = data$$34 & 15;
  parentObj$$566.MBCRAMBanksEnabled = v1500 == 10;
  return;
}
function v772() {
  var index$$63 = 0;
  var v1572 = index$$63 <= 65535;
  for (;v1572;) {
    var v1571 = index$$63 < 32768;
    if (v1571) {
      var v1541 = this.cMBC1;
      if (v1541) {
        var v1507 = index$$63 < 8192;
        if (v1507) {
          var v1501 = this.memoryWriter;
          v1501[index$$63] = this.MBCWriteEnable;
        } else {
          var v1506 = index$$63 < 16384;
          if (v1506) {
            var v1502 = this.memoryWriter;
            v1502[index$$63] = this.MBC1WriteROMBank;
          } else {
            var v1505 = index$$63 < 24576;
            if (v1505) {
              var v1503 = this.memoryWriter;
              v1503[index$$63] = this.MBC1WriteRAMBank;
            } else {
              var v1504 = this.memoryWriter;
              v1504[index$$63] = this.MBC1WriteType;
            }
          }
        }
      } else {
        var v1540 = this.cMBC2;
        if (v1540) {
          var v1512 = index$$63 < 4096;
          if (v1512) {
            var v1508 = this.memoryWriter;
            v1508[index$$63] = this.MBCWriteEnable;
          } else {
            var v5921 = index$$63 >= 8448;
            if (v5921) {
              v5921 = index$$63 < 8704;
            }
            var v1511 = v5921;
            if (v1511) {
              var v1509 = this.memoryWriter;
              v1509[index$$63] = this.MBC2WriteROMBank;
            } else {
              var v1510 = this.memoryWriter;
              v1510[index$$63] = this.cartIgnoreWrite;
            }
          }
        } else {
          var v1539 = this.cMBC3;
          if (v1539) {
            var v1519 = index$$63 < 8192;
            if (v1519) {
              var v1513 = this.memoryWriter;
              v1513[index$$63] = this.MBCWriteEnable;
            } else {
              var v1518 = index$$63 < 16384;
              if (v1518) {
                var v1514 = this.memoryWriter;
                v1514[index$$63] = this.MBC3WriteROMBank;
              } else {
                var v1517 = index$$63 < 24576;
                if (v1517) {
                  var v1515 = this.memoryWriter;
                  v1515[index$$63] = this.MBC3WriteRAMBank;
                } else {
                  var v1516 = this.memoryWriter;
                  v1516[index$$63] = this.MBC3WriteRTCLatch;
                }
              }
            }
          } else {
            var v8532 = this.cMBC5;
            var v9707 = !v8532;
            if (v9707) {
              v8532 = this.cRUMBLE;
            }
            var v5922 = v8532;
            var v8533 = !v5922;
            if (v8533) {
              v5922 = this.cMBC7;
            }
            var v1538 = v5922;
            if (v1538) {
              var v1528 = index$$63 < 8192;
              if (v1528) {
                var v1520 = this.memoryWriter;
                v1520[index$$63] = this.MBCWriteEnable;
              } else {
                var v1527 = index$$63 < 12288;
                if (v1527) {
                  var v1521 = this.memoryWriter;
                  v1521[index$$63] = this.MBC5WriteROMBankLow;
                } else {
                  var v1526 = index$$63 < 16384;
                  if (v1526) {
                    var v1522 = this.memoryWriter;
                    v1522[index$$63] = this.MBC5WriteROMBankHigh;
                  } else {
                    var v1525 = index$$63 < 24576;
                    if (v1525) {
                      var v1523 = this.memoryWriter;
                      var v5923;
                      var v8534 = this.cRUMBLE;
                      if (v8534) {
                        v5923 = this.RUMBLEWriteRAMBank;
                      } else {
                        v5923 = this.MBC5WriteRAMBank;
                      }
                      v1523[index$$63] = v5923;
                    } else {
                      var v1524 = this.memoryWriter;
                      v1524[index$$63] = this.cartIgnoreWrite;
                    }
                  }
                }
              }
            } else {
              var v1537 = this.cHuC3;
              if (v1537) {
                var v1535 = index$$63 < 8192;
                if (v1535) {
                  var v1529 = this.memoryWriter;
                  v1529[index$$63] = this.MBCWriteEnable;
                } else {
                  var v1534 = index$$63 < 16384;
                  if (v1534) {
                    var v1530 = this.memoryWriter;
                    v1530[index$$63] = this.MBC3WriteROMBank;
                  } else {
                    var v1533 = index$$63 < 24576;
                    if (v1533) {
                      var v1531 = this.memoryWriter;
                      v1531[index$$63] = this.HuC3WriteRAMBank;
                    } else {
                      var v1532 = this.memoryWriter;
                      v1532[index$$63] = this.cartIgnoreWrite;
                    }
                  }
                }
              } else {
                var v1536 = this.memoryWriter;
                v1536[index$$63] = this.cartIgnoreWrite;
              }
            }
          }
        }
      }
    } else {
      var v1570 = index$$63 < 36864;
      if (v1570) {
        var v1542 = this.memoryWriter;
        var v5924;
        var v8535 = this.cGBC;
        if (v8535) {
          v5924 = this.VRAMGBCDATAWrite;
        } else {
          v5924 = this.VRAMGBDATAWrite;
        }
        v1542[index$$63] = v5924;
      } else {
        var v1569 = index$$63 < 38912;
        if (v1569) {
          var v1543 = this.memoryWriter;
          var v5925;
          var v8536 = this.cGBC;
          if (v8536) {
            v5925 = this.VRAMGBCDATAWrite;
          } else {
            v5925 = this.VRAMGBDATAUpperWrite;
          }
          v1543[index$$63] = v5925;
        } else {
          var v1568 = index$$63 < 40960;
          if (v1568) {
            var v1544 = this.memoryWriter;
            var v5926;
            var v8537 = this.cGBC;
            if (v8537) {
              v5926 = this.VRAMGBCCHRMAPWrite;
            } else {
              v5926 = this.VRAMGBCHRMAPWrite;
            }
            v1544[index$$63] = v5926;
          } else {
            var v1567 = index$$63 < 49152;
            if (v1567) {
              var v9708 = this.numRAMBanks;
              var v9709 = 1 / 16;
              var v8538 = v9708 == v9709;
              if (v8538) {
                v8538 = index$$63 < 41472;
              }
              var v5927 = v8538;
              var v8540 = !v5927;
              if (v8540) {
                var v8539 = this.numRAMBanks;
                v5927 = v8539 >= 1;
              }
              var v1549 = v5927;
              if (v1549) {
                var v5928 = this.cMBC3;
                var v1547 = !v5928;
                if (v1547) {
                  var v1545 = this.memoryWriter;
                  v1545[index$$63] = this.memoryWriteMBCRAM;
                } else {
                  var v1546 = this.memoryWriter;
                  v1546[index$$63] = this.memoryWriteMBC3RAM;
                }
              } else {
                var v1548 = this.memoryWriter;
                v1548[index$$63] = this.cartIgnoreWrite;
              }
            } else {
              var v1566 = index$$63 < 57344;
              if (v1566) {
                var v5929 = this.cGBC;
                if (v5929) {
                  v5929 = index$$63 >= 53248;
                }
                var v1552 = v5929;
                if (v1552) {
                  var v1550 = this.memoryWriter;
                  v1550[index$$63] = this.memoryWriteGBCRAM;
                } else {
                  var v1551 = this.memoryWriter;
                  v1551[index$$63] = this.memoryWriteNormal;
                }
              } else {
                var v1565 = index$$63 < 65024;
                if (v1565) {
                  var v5930 = this.cGBC;
                  if (v5930) {
                    v5930 = index$$63 >= 61440;
                  }
                  var v1555 = v5930;
                  if (v1555) {
                    var v1553 = this.memoryWriter;
                    v1553[index$$63] = this.memoryWriteECHOGBCRAM;
                  } else {
                    var v1554 = this.memoryWriter;
                    v1554[index$$63] = this.memoryWriteECHONormal;
                  }
                } else {
                  var v1564 = index$$63 <= 65184;
                  if (v1564) {
                    var v1556 = this.memoryWriter;
                    v1556[index$$63] = this.memoryWriteOAMRAM;
                  } else {
                    var v1563 = index$$63 < 65280;
                    if (v1563) {
                      var v1559 = this.cGBC;
                      if (v1559) {
                        var v1557 = this.memoryWriter;
                        v1557[index$$63] = this.memoryWriteNormal;
                      } else {
                        var v1558 = this.memoryWriter;
                        v1558[index$$63] = this.cartIgnoreWrite;
                      }
                    } else {
                      var v1560 = this.memoryWriter;
                      v1560[index$$63] = this.memoryWriteNormal;
                      var v1561 = this.memoryHighWriter;
                      var v1562 = index$$63 & 255;
                      v1561[v1562] = this.memoryHighWriteNormal;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    index$$63++;
    v1572 = index$$63 <= 65535;
  }
  this.registerWriteJumpCompile();
  return;
}
function v771(address$$59, data$$33) {
  var v1573 = this.memoryHighWriter;
  v1573[address$$59](this, address$$59, data$$33);
  return;
}
function v770(address$$58, data$$32) {
  var v1574 = this.memoryWriter;
  v1574[address$$58](this, address$$58, data$$32);
  return;
}
function v769() {
  var v8541 = this.ROMBank1offs;
  var v8542 = this.ROMBankEdge;
  var v5931 = v8541 % v8542;
  var v1575 = v5931 - 1;
  this.currentROMBank = v1575 << 14;
  return;
}
function v768() {
  var v9710 = this.ROMBank1offs;
  var v9711 = this.ROMBankEdge;
  var v8543 = v9710 % v9711;
  var v5932 = v8543 - 1;
  var v1576 = Math.max(v5932, 0);
  this.currentROMBank = v1576 << 14;
  return;
}
function v767() {
  var v1579 = this.ROMBank1offs;
  switch(v1579) {
    case 0:
    ;
    case 32:
    ;
    case 64:
    ;
    case 96:
      var v5933 = this.ROMBank1offs;
      var v5934 = this.ROMBankEdge;
      var v1577 = v5933 % v5934;
      this.currentROMBank = v1577 << 14;
      break;
    default:
      var v8544 = this.ROMBank1offs;
      var v8545 = this.ROMBankEdge;
      var v5935 = v8544 % v8545;
      var v1578 = v5935 - 1;
      this.currentROMBank = v1578 << 14;
  }
  return;
}
function v766(parentObj$$565, address$$57) {
  var v1580;
  var v8546 = parentObj$$565.modeSTAT;
  var v5938 = v8546 > 2;
  if (v5938) {
    v1580 = 255;
  } else {
    var v5936 = parentObj$$565.BGCHRBank1;
    var v5937 = address$$57 & 2047;
    v1580 = v5936[v5937];
  }
  return v1580;
}
function v765(parentObj$$564, address$$56) {
  var v1581;
  var v8547 = parentObj$$564.modeSTAT;
  var v5941 = v8547 > 2;
  if (v5941) {
    v1581 = 255;
  } else {
    var v5939 = parentObj$$564.BGCHRCurrentBank;
    var v5940 = address$$56 & 2047;
    v1581 = v5939[v5940];
  }
  return v1581;
}
function v764(parentObj$$563, address$$55) {
  var v1582;
  var v8548 = parentObj$$563.modeSTAT;
  var v5943 = v8548 > 2;
  if (v5943) {
    v1582 = 255;
  } else {
    var v5942 = parentObj$$563.memory;
    v1582 = v5942[address$$55];
  }
  return v1582;
}
function v763(parentObj$$562, address$$54) {
  var v1583;
  var v8549 = parentObj$$562.modeSTAT;
  var v5945 = v8549 > 2;
  if (v5945) {
    v1583 = 255;
  } else {
    var v5944;
    var v9712 = parentObj$$562.currVRAMBank;
    var v8553 = v9712 == 0;
    if (v8553) {
      var v8550 = parentObj$$562.memory;
      v5944 = v8550[address$$54];
    } else {
      var v8551 = parentObj$$562.VRAM;
      var v8552 = address$$54 & 8191;
      v5944 = v8551[v8552];
    }
    v1583 = v5944;
  }
  return v1583;
}
function v762(parentObj$$561, address$$53) {
  return 255;
}
function v761(parentObj$$560, address$$52) {
  var v1584 = parentObj$$560.memory;
  var v1585 = address$$52 - 8192;
  return v1584[v1585];
}
function v760(parentObj$$559, address$$51) {
  var v1586 = parentObj$$559.GBCMemory;
  var v5946 = parentObj$$559.gbcRamBankPositionECHO;
  var v1587 = address$$51 + v5946;
  return v1586[v1587];
}
function v759(parentObj$$558, address$$50) {
  var v1588;
  var v8554 = parentObj$$558.modeSTAT;
  var v5948 = v8554 > 1;
  if (v5948) {
    v1588 = 255;
  } else {
    var v5947 = parentObj$$558.memory;
    v1588 = v5947[address$$50];
  }
  return v1588;
}
function v758(parentObj$$557, address$$49) {
  var v1589 = parentObj$$557.GBCMemory;
  var v5949 = parentObj$$557.gbcRamBankPosition;
  var v1590 = address$$49 + v5949;
  return v1589[v1590];
}
function v757(parentObj$$556, address$$48) {
  var v5950 = parentObj$$556.MBCRAMBanksEnabled;
  var v8555 = !v5950;
  if (v8555) {
    v5950 = settings[10];
  }
  var v1596 = v5950;
  if (v1596) {
    var v1595 = parentObj$$556.currMBCRAMBank;
    switch(v1595) {
      case 0:
      ;
      case 1:
      ;
      case 2:
      ;
      case 3:
        var v1591 = parentObj$$556.MBCRam;
        var v5951 = parentObj$$556.currMBCRAMBankPosition;
        var v1592 = address$$48 + v5951;
        return v1591[v1592];
      case 8:
        return parentObj$$556.latchedSeconds;
      case 9:
        return parentObj$$556.latchedMinutes;
      case 10:
        return parentObj$$556.latchedHours;
      case 11:
        return parentObj$$556.latchedLDays;
      case 12:
        var v8556;
        var v9713 = parentObj$$556.RTCDayOverFlow;
        if (v9713) {
          v8556 = 128;
        } else {
          v8556 = 0;
        }
        var v5952 = v8556;
        var v8557;
        var v9714 = parentObj$$556.RTCHALT;
        if (v9714) {
          v8557 = 64;
        } else {
          v8557 = 0;
        }
        var v5953 = v8557;
        var v1593 = v5952 + v5953;
        var v1594 = parentObj$$556.latchedHDays;
        return v1593 + v1594;
    }
  }
  return 255;
}
function v756(parentObj$$555, address$$47) {
  var v5954 = parentObj$$555.MBCRAMBanksEnabled;
  var v8558 = !v5954;
  if (v8558) {
    v5954 = settings[10];
  }
  var v1599 = v5954;
  if (v1599) {
    switch(address$$47) {
      case 40960:
      ;
      case 41056:
      ;
      case 41072:
        return 0;
      case 41088:
        return 0;
      case 41040:
        return parentObj$$555.highY;
      case 41024:
        return parentObj$$555.lowY;
      case 41008:
        return parentObj$$555.highX;
      case 40992:
        return parentObj$$555.lowX;
      default:
        var v1597 = parentObj$$555.MBCRam;
        var v5955 = parentObj$$555.currMBCRAMBankPosition;
        var v1598 = address$$47 + v5955;
        return v1597[v1598];
    }
  }
  return 255;
}
function v755(parentObj$$554, address$$46) {
  var v5956 = parentObj$$554.MBCRAMBanksEnabled;
  var v8559 = !v5956;
  if (v8559) {
    v5956 = settings[10];
  }
  var v1602 = v5956;
  if (v1602) {
    var v1600 = parentObj$$554.MBCRam;
    var v5957 = parentObj$$554.currMBCRAMBankPosition;
    var v1601 = address$$46 + v5957;
    return v1600[v1601];
  }
  return 255;
}
function v754(parentObj$$553, address$$45) {
  var v1603 = parentObj$$553.ROM;
  var v5958 = parentObj$$553.currentROMBank;
  var v1604 = v5958 + address$$45;
  return v1603[v1604];
}
function v753(parentObj$$552, address$$44) {
  var v1605 = parentObj$$552.memory;
  var v1606 = 65280 | address$$44;
  return v1605[v1606];
}
function v752(parentObj$$551, address$$43) {
  var v1607 = parentObj$$551.memory;
  return v1607[address$$43];
}
function v751() {
  function v750(parentObj$$550, address$$42) {
    return parentObj$$550.interruptsEnabled;
  }
  function v749(parentObj$$549, address$$41) {
    return 0;
  }
  function v748(parentObj$$548, address$$40) {
    var v5959 = parentObj$$548.memory;
    var v1608 = v5959[65397];
    return 143 | v1608;
  }
  function v747(parentObj$$547, address$$39) {
    var v5960 = parentObj$$547.memory;
    var v1609 = v5960[65392];
    return 64 | v1609;
  }
  function v746(parentObj$$546, address$$38) {
    var v5961 = parentObj$$546.memory;
    var v1610 = v5961[65388];
    return 254 | v1610;
  }
  function v745(parentObj$$545, address$$37) {
    var v5962;
    var v10234 = parentObj$$545.memory;
    var v9715 = v10234[65366];
    var v8562 = v9715 >= 192;
    if (v8562) {
      var v10235 = parentObj$$545.memory;
      var v9716 = v10235[65366];
      var v8560 = v9716 & 193;
      v5962 = 2 | v8560;
    } else {
      var v9717 = parentObj$$545.memory;
      var v8561 = v9717[65366];
      v5962 = v8561 & 195;
    }
    var v1611 = v5962;
    return 60 | v1611;
  }
  function v744(parentObj$$544, address$$36) {
    var v8563 = parentObj$$544.LCDisOn;
    var v5963 = !v8563;
    if (v5963) {
      v5963 = parentObj$$544.hdmaRunning;
    }
    var v1614 = v5963;
    if (v1614) {
      var v9718 = parentObj$$544.memory;
      var v8564 = v9718[65365];
      var v5964 = v8564 & 127;
      var v1612 = v5964 + 1;
      parentObj$$544.DMAWrite(v1612);
      var v1613 = parentObj$$544.memory;
      v1613[65365] = 255;
      parentObj$$544.hdmaRunning = false;
    }
    var v1615 = parentObj$$544.memory;
    return v1615[65365];
  }
  function v743(parentObj$$543, address$$35) {
    return parentObj$$543.currVRAMBank;
  }
  function v742(parentObj$$542, address$$34) {
    return parentObj$$542.windowY;
  }
  function v741(parentObj$$541, address$$33) {
    var v1616;
    var v5966 = parentObj$$541.LCDisOn;
    if (v5966) {
      var v5965 = parentObj$$541.memory;
      v1616 = v5965[65348];
    } else {
      v1616 = 0;
    }
    return v1616;
  }
  function v740(parentObj$$540, address$$32) {
    return parentObj$$540.backgroundX;
  }
  function v739(parentObj$$539, address$$31) {
    return parentObj$$539.backgroundY;
  }
  function v738(parentObj$$538, address$$30) {
    var v8565 = parentObj$$538.memory;
    var v5967 = v8565[65345];
    var v1617 = 128 | v5967;
    var v1618 = parentObj$$538.modeSTAT;
    return v1617 | v1618;
  }
  function v737(parentObj$$537, address$$29) {
    var v1619;
    var v5972 = parentObj$$537.channel3canPlay;
    if (v5972) {
      var v5968 = parentObj$$537.memory;
      var v9719 = parentObj$$537.channel3lastSampleLookup;
      var v8566 = v9719 >> 1;
      var v5969 = 65280 | v8566;
      v1619 = v5968[v5969];
    } else {
      var v5970 = parentObj$$537.memory;
      var v5971 = 65280 | address$$29;
      v1619 = v5970[v5971];
    }
    return v1619;
  }
  function v736(parentObj$$536, address$$28) {
    var v1620;
    var v5976 = parentObj$$536.channel3canPlay;
    if (v5976) {
      var v5973 = parentObj$$536.memory;
      var v9720 = parentObj$$536.channel3lastSampleLookup;
      var v8567 = v9720 >> 1;
      var v5974 = 65280 | v8567;
      v1620 = v5973[v5974];
    } else {
      var v5975 = parentObj$$536.memory;
      v1620 = v5975[address$$28];
    }
    return v1620;
  }
  function v735(parentObj$$535, address$$27) {
    parentObj$$535.audioJIT();
    var v5977 = parentObj$$535.memory;
    var v1621 = v5977[65318];
    return 112 | v1621;
  }
  function v734(parentObj$$534, address$$26) {
    var v5978 = parentObj$$534.memory;
    var v1622 = v5978[65315];
    return 191 | v1622;
  }
  function v733(parentObj$$533, address$$25) {
    var v5979 = parentObj$$533.memory;
    var v1623 = v5979[65310];
    return 191 | v1623;
  }
  function v732(parentObj$$532, address$$24) {
    return 255;
  }
  function v731(parentObj$$531, address$$23) {
    var v5980 = parentObj$$531.memory;
    var v1624 = v5980[65308];
    return 159 | v1624;
  }
  function v730(parentObj$$530, address$$22) {
    var v5981 = parentObj$$530.memory;
    var v1625 = v5981[65306];
    return 127 | v1625;
  }
  function v729(parentObj$$529, address$$21) {
    var v5982 = parentObj$$529.memory;
    var v1626 = v5982[65305];
    return 191 | v1626;
  }
  function v728(parentObj$$528, address$$20) {
    var v5983 = parentObj$$528.memory;
    var v1627 = v5983[65302];
    return 63 | v1627;
  }
  function v727(parentObj$$527, address$$19) {
    var v5984 = parentObj$$527.memory;
    var v1628 = v5984[65300];
    return 191 | v1628;
  }
  function v726(parentObj$$526, address$$18) {
    var v5985 = parentObj$$526.memory;
    var v1629 = v5985[65297];
    return 63 | v1629;
  }
  function v725(parentObj$$525, address$$17) {
    var v5986 = parentObj$$525.memory;
    var v1630 = v5986[65296];
    return 128 | v1630;
  }
  function v724(parentObj$$524, address$$16) {
    var v1631 = parentObj$$524.interruptsRequested;
    return 224 | v1631;
  }
  function v723(parentObj$$523, address$$15) {
    var v5987 = parentObj$$523.memory;
    var v1632 = v5987[65287];
    return 248 | v1632;
  }
  function v722(parentObj$$522, address$$14) {
    var v1633 = parentObj$$522.memory;
    var v9721 = parentObj$$522.memory;
    var v8568 = v9721[65284];
    var v9722 = parentObj$$522.DIVTicks;
    var v8569 = v9722 >> 8;
    var v5988 = v8568 + v8569;
    v1633[65284] = v5988 & 255;
    var v5989 = parentObj$$522.DIVTicks;
    parentObj$$522.DIVTicks = v5989 & 255;
    var v1634 = parentObj$$522.memory;
    return v1634[65284];
  }
  function v721(parentObj$$521, address$$13) {
    var v5990;
    var v9723 = parentObj$$521.serialTimer;
    var v8570 = v9723 <= 0;
    if (v8570) {
      v5990 = 126;
    } else {
      v5990 = 254;
    }
    var v1635 = v5990;
    var v5991 = parentObj$$521.memory;
    var v1636 = v5991[65282];
    return v1635 | v1636;
  }
  function v720(parentObj$$520, address$$12) {
    var v5992;
    var v9724 = parentObj$$520.serialTimer;
    var v8571 = v9724 <= 0;
    if (v8571) {
      v5992 = 124;
    } else {
      v5992 = 252;
    }
    var v1637 = v5992;
    var v5993 = parentObj$$520.memory;
    var v1638 = v5993[65282];
    return v1637 | v1638;
  }
  function v719(parentObj$$519, address$$11) {
    var v1639;
    var v9725 = parentObj$$519.memory;
    var v8572 = v9725[65282];
    var v5995 = v8572 < 128;
    if (v5995) {
      var v5994 = parentObj$$519.memory;
      v1639 = v5994[65281];
    } else {
      v1639 = 255;
    }
    return v1639;
  }
  function v718(parentObj$$518, address$$10) {
    var v5996 = parentObj$$518.memory;
    var v1640 = v5996[65280];
    return 192 | v1640;
  }
  var index$$62 = 0;
  var v1727 = index$$62 <= 65535;
  for (;v1727;) {
    var v1726 = index$$62 < 16384;
    if (v1726) {
      var v1641 = this.memoryReader;
      v1641[index$$62] = this.memoryReadNormal;
    } else {
      var v1725 = index$$62 < 32768;
      if (v1725) {
        var v1642 = this.memoryReader;
        v1642[index$$62] = this.memoryReadROM;
      } else {
        var v1724 = index$$62 < 38912;
        if (v1724) {
          var v1643 = this.memoryReader;
          var v5997;
          var v8573 = this.cGBC;
          if (v8573) {
            v5997 = this.VRAMDATAReadCGBCPU;
          } else {
            v5997 = this.VRAMDATAReadDMGCPU;
          }
          v1643[index$$62] = v5997;
        } else {
          var v1723 = index$$62 < 40960;
          if (v1723) {
            var v1644 = this.memoryReader;
            var v5998;
            var v8574 = this.cGBC;
            if (v8574) {
              v5998 = this.VRAMCHRReadCGBCPU;
            } else {
              v5998 = this.VRAMCHRReadDMGCPU;
            }
            v1644[index$$62] = v5998;
          } else {
            var v5999 = index$$62 >= 40960;
            if (v5999) {
              v5999 = index$$62 < 49152;
            }
            var v1722 = v5999;
            if (v1722) {
              var v9726 = this.numRAMBanks;
              var v9727 = 1 / 16;
              var v8575 = v9726 == v9727;
              if (v8575) {
                v8575 = index$$62 < 41472;
              }
              var v6000 = v8575;
              var v8577 = !v6000;
              if (v8577) {
                var v8576 = this.numRAMBanks;
                v6000 = v8576 >= 1;
              }
              var v1651 = v6000;
              if (v1651) {
                var v1649 = this.cMBC7;
                if (v1649) {
                  var v1645 = this.memoryReader;
                  v1645[index$$62] = this.memoryReadMBC7;
                } else {
                  var v6001 = this.cMBC3;
                  var v1648 = !v6001;
                  if (v1648) {
                    var v1646 = this.memoryReader;
                    v1646[index$$62] = this.memoryReadMBC;
                  } else {
                    var v1647 = this.memoryReader;
                    v1647[index$$62] = this.memoryReadMBC3;
                  }
                }
              } else {
                var v1650 = this.memoryReader;
                v1650[index$$62] = this.memoryReadBAD;
              }
            } else {
              var v6002 = index$$62 >= 49152;
              if (v6002) {
                v6002 = index$$62 < 57344;
              }
              var v1721 = v6002;
              if (v1721) {
                var v8578 = this.cGBC;
                var v6003 = !v8578;
                var v8579 = !v6003;
                if (v8579) {
                  v6003 = index$$62 < 53248;
                }
                var v1654 = v6003;
                if (v1654) {
                  var v1652 = this.memoryReader;
                  v1652[index$$62] = this.memoryReadNormal;
                } else {
                  var v1653 = this.memoryReader;
                  v1653[index$$62] = this.memoryReadGBCMemory;
                }
              } else {
                var v6004 = index$$62 >= 57344;
                if (v6004) {
                  v6004 = index$$62 < 65024;
                }
                var v1720 = v6004;
                if (v1720) {
                  var v8580 = this.cGBC;
                  var v6005 = !v8580;
                  var v8581 = !v6005;
                  if (v8581) {
                    v6005 = index$$62 < 61440;
                  }
                  var v1657 = v6005;
                  if (v1657) {
                    var v1655 = this.memoryReader;
                    v1655[index$$62] = this.memoryReadECHONormal;
                  } else {
                    var v1656 = this.memoryReader;
                    v1656[index$$62] = this.memoryReadECHOGBCMemory;
                  }
                } else {
                  var v1719 = index$$62 < 65184;
                  if (v1719) {
                    var v1658 = this.memoryReader;
                    v1658[index$$62] = this.memoryReadOAM;
                  } else {
                    var v8582 = this.cGBC;
                    if (v8582) {
                      v8582 = index$$62 >= 65184;
                    }
                    var v6006 = v8582;
                    if (v6006) {
                      v6006 = index$$62 < 65280;
                    }
                    var v1718 = v6006;
                    if (v1718) {
                      var v1659 = this.memoryReader;
                      v1659[index$$62] = this.memoryReadNormal;
                    } else {
                      var v1717 = index$$62 >= 65280;
                      if (v1717) {
                        switch(index$$62) {
                          case 65280:
                            var v1660 = this.memoryHighReader;
                            var v6007 = this.memoryReader;
                            v1660[0] = v6007[65280] = v718;
                            break;
                          case 65281:
                            var v1661 = this.memoryHighReader;
                            var v6008 = this.memoryReader;
                            v1661[1] = v6008[65281] = v719;
                            break;
                          case 65282:
                            var v1664 = this.cGBC;
                            if (v1664) {
                              var v1662 = this.memoryHighReader;
                              var v6009 = this.memoryReader;
                              v1662[2] = v6009[65282] = v720;
                            } else {
                              var v1663 = this.memoryHighReader;
                              var v6010 = this.memoryReader;
                              v1663[2] = v6010[65282] = v721;
                            }
                            break;
                          case 65284:
                            var v1665 = this.memoryHighReader;
                            var v6011 = this.memoryReader;
                            v1665[4] = v6011[65284] = v722;
                            break;
                          case 65287:
                            var v1666 = this.memoryHighReader;
                            var v6012 = this.memoryReader;
                            v1666[7] = v6012[65287] = v723;
                            break;
                          case 65295:
                            var v1667 = this.memoryHighReader;
                            var v6013 = this.memoryReader;
                            v1667[15] = v6013[65295] = v724;
                            break;
                          case 65296:
                            var v1668 = this.memoryHighReader;
                            var v6014 = this.memoryReader;
                            v1668[16] = v6014[65296] = v725;
                            break;
                          case 65297:
                            var v1669 = this.memoryHighReader;
                            var v6015 = this.memoryReader;
                            v1669[17] = v6015[65297] = v726;
                            break;
                          case 65299:
                            var v1670 = this.memoryHighReader;
                            var v6016 = this.memoryReader;
                            v1670[19] = v6016[65299] = this.memoryReadBAD;
                            break;
                          case 65300:
                            var v1671 = this.memoryHighReader;
                            var v6017 = this.memoryReader;
                            v1671[20] = v6017[65300] = v727;
                            break;
                          case 65302:
                            var v1672 = this.memoryHighReader;
                            var v6018 = this.memoryReader;
                            v1672[22] = v6018[65302] = v728;
                            break;
                          case 65304:
                            var v1673 = this.memoryHighReader;
                            var v6019 = this.memoryReader;
                            v1673[24] = v6019[65304] = this.memoryReadBAD;
                            break;
                          case 65305:
                            var v1674 = this.memoryHighReader;
                            var v6020 = this.memoryReader;
                            v1674[25] = v6020[65305] = v729;
                            break;
                          case 65306:
                            var v1675 = this.memoryHighReader;
                            var v6021 = this.memoryReader;
                            v1675[26] = v6021[65306] = v730;
                            break;
                          case 65307:
                            var v1676 = this.memoryHighReader;
                            var v6022 = this.memoryReader;
                            v1676[27] = v6022[65307] = this.memoryReadBAD;
                            break;
                          case 65308:
                            var v1677 = this.memoryHighReader;
                            var v6023 = this.memoryReader;
                            v1677[28] = v6023[65308] = v731;
                            break;
                          case 65309:
                            var v1678 = this.memoryHighReader;
                            var v6024 = this.memoryReader;
                            v1678[29] = v6024[65309] = v732;
                            break;
                          case 65310:
                            var v1679 = this.memoryHighReader;
                            var v6025 = this.memoryReader;
                            v1679[30] = v6025[65310] = v733;
                            break;
                          case 65311:
                          ;
                          case 65312:
                            var v1680 = this.memoryHighReader;
                            var v1681 = index$$62 & 255;
                            var v6026 = this.memoryReader;
                            v1680[v1681] = v6026[index$$62] = this.memoryReadBAD;
                            break;
                          case 65315:
                            var v1682 = this.memoryHighReader;
                            var v6027 = this.memoryReader;
                            v1682[35] = v6027[65315] = v734;
                            break;
                          case 65318:
                            var v1683 = this.memoryHighReader;
                            var v6028 = this.memoryReader;
                            v1683[38] = v6028[65318] = v735;
                            break;
                          case 65319:
                          ;
                          case 65320:
                          ;
                          case 65321:
                          ;
                          case 65322:
                          ;
                          case 65323:
                          ;
                          case 65324:
                          ;
                          case 65325:
                          ;
                          case 65326:
                          ;
                          case 65327:
                            var v1684 = this.memoryHighReader;
                            var v1685 = index$$62 & 255;
                            var v6029 = this.memoryReader;
                            v1684[v1685] = v6029[index$$62] = this.memoryReadBAD;
                            break;
                          case 65328:
                          ;
                          case 65329:
                          ;
                          case 65330:
                          ;
                          case 65331:
                          ;
                          case 65332:
                          ;
                          case 65333:
                          ;
                          case 65334:
                          ;
                          case 65335:
                          ;
                          case 65336:
                          ;
                          case 65337:
                          ;
                          case 65338:
                          ;
                          case 65339:
                          ;
                          case 65340:
                          ;
                          case 65341:
                          ;
                          case 65342:
                          ;
                          case 65343:
                            var v1686 = this.memoryReader;
                            v1686[index$$62] = v736;
                            var v1687 = this.memoryHighReader;
                            var v1688 = index$$62 & 255;
                            v1687[v1688] = v737;
                            break;
                          case 65345:
                            var v1689 = this.memoryHighReader;
                            var v6030 = this.memoryReader;
                            v1689[65] = v6030[65345] = v738;
                            break;
                          case 65346:
                            var v1690 = this.memoryHighReader;
                            var v6031 = this.memoryReader;
                            v1690[66] = v6031[65346] = v739;
                            break;
                          case 65347:
                            var v1691 = this.memoryHighReader;
                            var v6032 = this.memoryReader;
                            v1691[67] = v6032[65347] = v740;
                            break;
                          case 65348:
                            var v1692 = this.memoryHighReader;
                            var v6033 = this.memoryReader;
                            v1692[68] = v6033[65348] = v741;
                            break;
                          case 65354:
                            var v1693 = this.memoryHighReader;
                            var v6034 = this.memoryReader;
                            v1693[74] = v6034[65354] = v742;
                            break;
                          case 65359:
                            var v1694 = this.memoryHighReader;
                            var v6035 = this.memoryReader;
                            v1694[79] = v6035[65359] = v743;
                            break;
                          case 65365:
                            var v1698 = this.cGBC;
                            if (v1698) {
                              var v1695 = this.memoryHighReader;
                              var v6036 = this.memoryReader;
                              v1695[85] = v6036[65365] = v744;
                            } else {
                              var v1696 = this.memoryReader;
                              v1696[65365] = this.memoryReadNormal;
                              var v1697 = this.memoryHighReader;
                              v1697[85] = this.memoryHighReadNormal;
                            }
                            break;
                          case 65366:
                            var v1702 = this.cGBC;
                            if (v1702) {
                              var v1699 = this.memoryHighReader;
                              var v6037 = this.memoryReader;
                              v1699[86] = v6037[65366] = v745;
                            } else {
                              var v1700 = this.memoryReader;
                              v1700[65366] = this.memoryReadNormal;
                              var v1701 = this.memoryHighReader;
                              v1701[86] = this.memoryHighReadNormal;
                            }
                            break;
                          case 65388:
                            var v1705 = this.cGBC;
                            if (v1705) {
                              var v1703 = this.memoryHighReader;
                              var v6038 = this.memoryReader;
                              v1703[108] = v6038[65388] = v746;
                            } else {
                              var v1704 = this.memoryHighReader;
                              var v6039 = this.memoryReader;
                              v1704[108] = v6039[65388] = this.memoryReadBAD;
                            }
                            break;
                          case 65392:
                            var v1708 = this.cGBC;
                            if (v1708) {
                              var v1706 = this.memoryHighReader;
                              var v6040 = this.memoryReader;
                              v1706[112] = v6040[65392] = v747;
                            } else {
                              var v1707 = this.memoryHighReader;
                              var v6041 = this.memoryReader;
                              v1707[112] = v6041[65392] = this.memoryReadBAD;
                            }
                            break;
                          case 65397:
                            var v1709 = this.memoryHighReader;
                            var v6042 = this.memoryReader;
                            v1709[117] = v6042[65397] = v748;
                            break;
                          case 65398:
                          ;
                          case 65399:
                            var v1710 = this.memoryHighReader;
                            var v1711 = index$$62 & 255;
                            var v6043 = this.memoryReader;
                            v1710[v1711] = v6043[index$$62] = v749;
                            break;
                          case 65535:
                            var v1712 = this.memoryHighReader;
                            var v6044 = this.memoryReader;
                            v1712[255] = v6044[65535] = v750;
                            break;
                          default:
                            var v1713 = this.memoryReader;
                            v1713[index$$62] = this.memoryReadNormal;
                            var v1714 = this.memoryHighReader;
                            var v1715 = index$$62 & 255;
                            v1714[v1715] = this.memoryHighReadNormal;
                        }
                      } else {
                        var v1716 = this.memoryReader;
                        v1716[index$$62] = this.memoryReadBAD;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    index$$62++;
    v1727 = index$$62 <= 65535;
  }
  return;
}
function v717(address$$9) {
  var v1728 = this.memoryHighReader;
  return v1728[address$$9](this, address$$9);
}
function v716(address$$8) {
  var v1729 = this.memoryReader;
  return v1729[address$$8](this, address$$8);
}
function v715() {
  var v6045 = this.halt;
  var v1757 = !v6045;
  if (v1757) {
    this.halt = true;
    var currentClocks = -1;
    var temp_var$$20 = 0;
    var v1750 = this.LCDisOn;
    if (v1750) {
      var v8583 = this.interruptsEnabled;
      var v6046 = v8583 & 1;
      var v1732 = v6046 == 1;
      if (v1732) {
        var v10236;
        var v10568 = this.modeSTAT;
        var v10447 = v10568 == 1;
        if (v10447) {
          v10236 = 298;
        } else {
          v10236 = 144;
        }
        var v9728 = v10236;
        var v9729 = this.actualScanLine;
        var v8584 = v9728 - v9729;
        var v6047 = 456 * v8584;
        var v6048 = this.LCDTicks;
        var v1730 = v6047 - v6048;
        var v1731 = this.doubleSpeedShifter;
        currentClocks = v1730 << v1731;
      }
      var v8585 = this.interruptsEnabled;
      var v6049 = v8585 & 2;
      var v1749 = v6049 == 2;
      if (v1749) {
        var v1736 = this.mode0TriggerSTAT;
        if (v1736) {
          var v6050 = this.clocksUntilMode0();
          var v6051 = this.LCDTicks;
          var v1733 = v6050 - v6051;
          var v1734 = this.doubleSpeedShifter;
          temp_var$$20 = v1733 << v1734;
          var v6052 = temp_var$$20 <= currentClocks;
          var v8586 = !v6052;
          if (v8586) {
            v6052 = currentClocks == -1;
          }
          var v1735 = v6052;
          if (v1735) {
            currentClocks = temp_var$$20;
          }
        }
        var v6053 = this.mode1TriggerSTAT;
        if (v6053) {
          var v9730 = this.interruptsEnabled;
          var v8587 = v9730 & 1;
          v6053 = v8587 == 0;
        }
        var v1740 = v6053;
        if (v1740) {
          var v10237;
          var v10569 = this.modeSTAT;
          var v10448 = v10569 == 1;
          if (v10448) {
            v10237 = 298;
          } else {
            v10237 = 144;
          }
          var v9731 = v10237;
          var v9732 = this.actualScanLine;
          var v8588 = v9731 - v9732;
          var v6054 = 456 * v8588;
          var v6055 = this.LCDTicks;
          var v1737 = v6054 - v6055;
          var v1738 = this.doubleSpeedShifter;
          temp_var$$20 = v1737 << v1738;
          var v6056 = temp_var$$20 <= currentClocks;
          var v8589 = !v6056;
          if (v8589) {
            v6056 = currentClocks == -1;
          }
          var v1739 = v6056;
          if (v1739) {
            currentClocks = temp_var$$20;
          }
        }
        var v1744 = this.mode2TriggerSTAT;
        if (v1744) {
          var v8590;
          var v10238 = this.actualScanLine;
          var v9734 = v10238 >= 143;
          if (v9734) {
            var v10239 = this.actualScanLine;
            var v9733 = 154 - v10239;
            v8590 = 456 * v9733;
          } else {
            v8590 = 456;
          }
          var v6057 = v8590;
          var v6058 = this.LCDTicks;
          var v1741 = v6057 - v6058;
          var v1742 = this.doubleSpeedShifter;
          temp_var$$20 = v1741 << v1742;
          var v6059 = temp_var$$20 <= currentClocks;
          var v8591 = !v6059;
          if (v8591) {
            v6059 = currentClocks == -1;
          }
          var v1743 = v6059;
          if (v1743) {
            currentClocks = temp_var$$20;
          }
        }
        var v6060 = this.LYCMatchTriggerSTAT;
        if (v6060) {
          var v9735 = this.memory;
          var v8592 = v9735[65349];
          v6060 = v8592 <= 153;
        }
        var v1748 = v6060;
        if (v1748) {
          var v6061 = this.clocksUntilLYCMatch();
          var v6062 = this.LCDTicks;
          var v1745 = v6061 - v6062;
          var v1746 = this.doubleSpeedShifter;
          temp_var$$20 = v1745 << v1746;
          var v6063 = temp_var$$20 <= currentClocks;
          var v8593 = !v6063;
          if (v8593) {
            v6063 = currentClocks == -1;
          }
          var v1747 = v6063;
          if (v1747) {
            currentClocks = temp_var$$20;
          }
        }
      }
    }
    var v6064 = this.TIMAEnabled;
    if (v6064) {
      var v9736 = this.interruptsEnabled;
      var v8594 = v9736 & 4;
      v6064 = v8594 == 4;
    }
    var v1754 = v6064;
    if (v1754) {
      var v9737 = this.memory;
      var v8595 = v9737[65285];
      var v6065 = 256 - v8595;
      var v6066 = this.TACClocker;
      var v1751 = v6065 * v6066;
      var v1752 = this.timerTicks;
      temp_var$$20 = v1751 - v1752;
      var v6067 = temp_var$$20 <= currentClocks;
      var v8596 = !v6067;
      if (v8596) {
        v6067 = currentClocks == -1;
      }
      var v1753 = v6067;
      if (v1753) {
        currentClocks = temp_var$$20;
      }
    }
    var v8597 = this.serialTimer;
    var v6068 = v8597 > 0;
    if (v6068) {
      var v9738 = this.interruptsEnabled;
      var v8598 = v9738 & 8;
      v6068 = v8598 == 8;
    }
    var v1756 = v6068;
    if (v1756) {
      var v8599 = this.serialTimer;
      var v6069 = v8599 <= currentClocks;
      var v8600 = !v6069;
      if (v8600) {
        v6069 = currentClocks == -1;
      }
      var v1755 = v6069;
      if (v1755) {
        currentClocks = this.serialTimer;
      }
    }
  } else {
    currentClocks = this.remainingClocks;
  }
  var v6070 = this.CPUCyclesTotal;
  var v6071 = this.emulatorTicks;
  var v1758 = v6070 - v6071;
  var v1759 = this.doubleSpeedShifter;
  var maxClocks = v1758 << v1759;
  var v1764 = currentClocks >= 0;
  if (v1764) {
    var v1763 = currentClocks <= maxClocks;
    if (v1763) {
      var v1760 = this.CPUTicks;
      var v10676 = Math.max(currentClocks, v1760);
      this.CPUTicks = v10676;
      this.updateCoreFull();
      this.halt = false;
      this.CPUTicks = 0;
    } else {
      var v1761 = this.CPUTicks;
      var v10677 = Math.max(maxClocks, v1761);
      this.CPUTicks = v10677;
      var v1762 = this.CPUTicks;
      this.remainingClocks = currentClocks - v1762;
    }
  } else {
    var v6072 = this.CPUTicks;
    this.CPUTicks = v6072 + maxClocks;
  }
  return;
}
function v714() {
  var v1766 = this.IME;
  if (v1766) {
    var v6073 = this.interruptsEnabled;
    var v6074 = this.interruptsRequested;
    var v1765 = v6073 & v6074;
    this.IRQLineMatched = v1765 & 31;
  }
  return;
}
function v713() {
  var bitShift = 0;
  var testbit = 1;
  var v1780 = bitShift < 5;
  do {
    var v8601 = this.IRQLineMatched;
    var v6075 = testbit & v8601;
    var v1778 = v6075 == testbit;
    if (v1778) {
      this.IME = false;
      var v6076 = this.interruptsRequested;
      this.interruptsRequested = v6076 - testbit;
      this.IRQLineMatched = 0;
      this.CPUTicks = 20;
      var v6077 = this.stackPointer;
      var v1767 = v6077 - 1;
      this.stackPointer = v1767 & 65535;
      var v1768 = this.memoryWriter;
      var v1769 = this.stackPointer;
      var v1770 = this.stackPointer;
      var v6078 = this.programCounter;
      var v1771 = v6078 >> 8;
      v1768[v1769](this, v1770, v1771);
      var v6079 = this.stackPointer;
      var v1772 = v6079 - 1;
      this.stackPointer = v1772 & 65535;
      var v1773 = this.memoryWriter;
      var v1774 = this.stackPointer;
      var v1775 = this.stackPointer;
      var v6080 = this.programCounter;
      var v1776 = v6080 & 255;
      v1773[v1774](this, v1775, v1776);
      var v1777 = bitShift << 3;
      this.programCounter = 64 | v1777;
      this.updateCore();
      return;
    }
    var v1779 = bitShift = bitShift + 1;
    testbit = 1 << v1779;
    v1780 = bitShift < 5;
  } while (v1780);
  return;
}
function v712() {
  this.graphicsJIT();
  this.renderMidScanLine();
  return;
}
function v711() {
  var v6081 = this.queuedScanLines;
  var v1782 = v6081 < 144;
  if (v1782) {
    ++this.queuedScanLines;
  } else {
    this.currentX = 0;
    this.midScanlineOffset = -1;
    var v6082 = this.lastUnrenderedLine;
    var v1781 = v6082 < 143;
    if (v1781) {
      ++this.lastUnrenderedLine;
    } else {
      this.lastUnrenderedLine = 0;
    }
  }
  return;
}
function v710() {
  var v6083 = this.queuedScanLines;
  var v1785 = v6083 > 0;
  for (;v1785;) {
    var v1783 = this.lastUnrenderedLine;
    this.renderScanLine(v1783);
    var v6084 = this.lastUnrenderedLine;
    var v1784 = v6084 < 143;
    if (v1784) {
      ++this.lastUnrenderedLine;
    } else {
      this.lastUnrenderedLine = 0;
    }
    --this.queuedScanLines;
    var v6085 = this.queuedScanLines;
    v1785 = v6085 > 0;
  }
  return;
}
function v709() {
  var v6086 = this.totalLinesPassed;
  var v6087 = this.queuedScanLines;
  this.totalLinesPassed = v6086 + v6087;
  this.graphicsJITScanlineGroup();
  return;
}
function v708() {
  var v1786 = this.LCDisOn;
  if (v1786) {
    this.totalLinesPassed = 0;
    this.graphicsJITScanlineGroup();
  }
  return;
}
function v707(address$$7) {
  var v8602 = this.memory;
  var v8603 = 1 | address$$7;
  var v6088 = v8602[v8603];
  var v1787 = v6088 << 8;
  var v6089 = this.memory;
  var v6090 = 40958 & address$$7;
  var v1788 = v6089[v6090];
  var lineCopy$$5 = v1787 | v1788;
  address$$7 = address$$7 & 8190;
  var v1789 = this.tileCache;
  var v1790 = address$$7 >> 4;
  var tileBlock1$$4 = v1789[v1790];
  var v1791 = this.tileCache;
  var v6091 = address$$7 >> 4;
  var v1792 = 512 | v6091;
  var tileBlock2$$4 = v1791[v1792];
  var v1793 = this.tileCache;
  var v6092 = address$$7 >> 4;
  var v1794 = 1024 | v6092;
  var tileBlock3$$4 = v1793[v1794];
  var v1795 = this.tileCache;
  var v6093 = address$$7 >> 4;
  var v1796 = 1536 | v6093;
  var tileBlock4$$4 = v1795[v1796];
  var v1797 = address$$7 & 14;
  address$$7 = v1797 << 2;
  var addressFlipped$$4 = 56 - address$$7;
  var v1798 = addressFlipped$$4 | 7;
  var v6094 = address$$7 | 7;
  var v9739 = lineCopy$$5 & 256;
  var v8604 = v9739 >> 7;
  var v8605 = lineCopy$$5 & 1;
  tileBlock4$$4[addressFlipped$$4] = tileBlock2$$4[address$$7] = tileBlock3$$4[v1798] = tileBlock1$$4[v6094] = v8604 | v8605;
  var v1799 = addressFlipped$$4 | 1;
  var v6095 = address$$7 | 1;
  var v8606 = addressFlipped$$4 | 6;
  var v9740 = address$$7 | 6;
  var v10449 = lineCopy$$5 & 512;
  var v10240 = v10449 >> 8;
  var v10450 = lineCopy$$5 & 2;
  var v10241 = v10450 >> 1;
  tileBlock4$$4[v1799] = tileBlock2$$4[v6095] = tileBlock3$$4[v8606] = tileBlock1$$4[v9740] = v10240 | v10241;
  var v1800 = addressFlipped$$4 | 2;
  var v6096 = address$$7 | 2;
  var v8607 = addressFlipped$$4 | 5;
  var v9741 = address$$7 | 5;
  var v10451 = lineCopy$$5 & 1024;
  var v10242 = v10451 >> 9;
  var v10452 = lineCopy$$5 & 4;
  var v10243 = v10452 >> 2;
  tileBlock4$$4[v1800] = tileBlock2$$4[v6096] = tileBlock3$$4[v8607] = tileBlock1$$4[v9741] = v10242 | v10243;
  var v1801 = addressFlipped$$4 | 3;
  var v6097 = address$$7 | 3;
  var v8608 = addressFlipped$$4 | 4;
  var v9742 = address$$7 | 4;
  var v10453 = lineCopy$$5 & 2048;
  var v10244 = v10453 >> 10;
  var v10454 = lineCopy$$5 & 8;
  var v10245 = v10454 >> 3;
  tileBlock4$$4[v1801] = tileBlock2$$4[v6097] = tileBlock3$$4[v8608] = tileBlock1$$4[v9742] = v10244 | v10245;
  var v1802 = addressFlipped$$4 | 4;
  var v6098 = address$$7 | 4;
  var v8609 = addressFlipped$$4 | 3;
  var v9743 = address$$7 | 3;
  var v10455 = lineCopy$$5 & 4096;
  var v10246 = v10455 >> 11;
  var v10456 = lineCopy$$5 & 16;
  var v10247 = v10456 >> 4;
  tileBlock4$$4[v1802] = tileBlock2$$4[v6098] = tileBlock3$$4[v8609] = tileBlock1$$4[v9743] = v10246 | v10247;
  var v1803 = addressFlipped$$4 | 5;
  var v6099 = address$$7 | 5;
  var v8610 = addressFlipped$$4 | 2;
  var v9744 = address$$7 | 2;
  var v10457 = lineCopy$$5 & 8192;
  var v10248 = v10457 >> 12;
  var v10458 = lineCopy$$5 & 32;
  var v10249 = v10458 >> 5;
  tileBlock4$$4[v1803] = tileBlock2$$4[v6099] = tileBlock3$$4[v8610] = tileBlock1$$4[v9744] = v10248 | v10249;
  var v1804 = addressFlipped$$4 | 6;
  var v6100 = address$$7 | 6;
  var v8611 = addressFlipped$$4 | 1;
  var v9745 = address$$7 | 1;
  var v10459 = lineCopy$$5 & 16384;
  var v10250 = v10459 >> 13;
  var v10460 = lineCopy$$5 & 64;
  var v10251 = v10460 >> 6;
  tileBlock4$$4[v1804] = tileBlock2$$4[v6100] = tileBlock3$$4[v8611] = tileBlock1$$4[v9745] = v10250 | v10251;
  var v1805 = addressFlipped$$4 | 7;
  var v6101 = address$$7 | 7;
  var v9746 = lineCopy$$5 & 32768;
  var v8612 = v9746 >> 14;
  var v9747 = lineCopy$$5 & 128;
  var v8613 = v9747 >> 7;
  tileBlock4$$4[v1805] = tileBlock2$$4[v6101] = tileBlock3$$4[addressFlipped$$4] = tileBlock1$$4[address$$7] = v8612 | v8613;
  return;
}
function v706(vramAddress$$1) {
  var address$$6 = vramAddress$$1 >> 4;
  var v1806 = this.tileCache;
  var v1807 = 2048 | address$$6;
  var tileBlock1$$3 = v1806[v1807];
  var v1808 = this.tileCache;
  var v1809 = 2560 | address$$6;
  var tileBlock2$$3 = v1808[v1809];
  var v1810 = this.tileCache;
  var v1811 = 3072 | address$$6;
  var tileBlock3$$3 = v1810[v1811];
  var v1812 = this.tileCache;
  var v1813 = 3584 | address$$6;
  var tileBlock4$$3 = v1812[v1813];
  var lineCopy$$4 = 0;
  address$$6 = 0;
  var addressFlipped$$3 = 56;
  var v1824 = addressFlipped$$3 > -1;
  do {
    var v8614 = this.VRAM;
    var v8615 = 1 | vramAddress$$1;
    var v6102 = v8614[v8615];
    var v1814 = v6102 << 8;
    var v6103 = this.VRAM;
    var v1815 = v6103[vramAddress$$1];
    lineCopy$$4 = v1814 | v1815;
    var v1816 = addressFlipped$$3 | 7;
    var v6104 = address$$6 | 7;
    var v9748 = lineCopy$$4 & 256;
    var v8616 = v9748 >> 7;
    var v8617 = lineCopy$$4 & 1;
    tileBlock4$$3[addressFlipped$$3] = tileBlock2$$3[address$$6] = tileBlock3$$3[v1816] = tileBlock1$$3[v6104] = v8616 | v8617;
    var v1817 = addressFlipped$$3 | 1;
    var v6105 = address$$6 | 1;
    var v8618 = addressFlipped$$3 | 6;
    var v9749 = address$$6 | 6;
    var v10461 = lineCopy$$4 & 512;
    var v10252 = v10461 >> 8;
    var v10462 = lineCopy$$4 & 2;
    var v10253 = v10462 >> 1;
    tileBlock4$$3[v1817] = tileBlock2$$3[v6105] = tileBlock3$$3[v8618] = tileBlock1$$3[v9749] = v10252 | v10253;
    var v1818 = addressFlipped$$3 | 2;
    var v6106 = address$$6 | 2;
    var v8619 = addressFlipped$$3 | 5;
    var v9750 = address$$6 | 5;
    var v10463 = lineCopy$$4 & 1024;
    var v10254 = v10463 >> 9;
    var v10464 = lineCopy$$4 & 4;
    var v10255 = v10464 >> 2;
    tileBlock4$$3[v1818] = tileBlock2$$3[v6106] = tileBlock3$$3[v8619] = tileBlock1$$3[v9750] = v10254 | v10255;
    var v1819 = addressFlipped$$3 | 3;
    var v6107 = address$$6 | 3;
    var v8620 = addressFlipped$$3 | 4;
    var v9751 = address$$6 | 4;
    var v10465 = lineCopy$$4 & 2048;
    var v10256 = v10465 >> 10;
    var v10466 = lineCopy$$4 & 8;
    var v10257 = v10466 >> 3;
    tileBlock4$$3[v1819] = tileBlock2$$3[v6107] = tileBlock3$$3[v8620] = tileBlock1$$3[v9751] = v10256 | v10257;
    var v1820 = addressFlipped$$3 | 4;
    var v6108 = address$$6 | 4;
    var v8621 = addressFlipped$$3 | 3;
    var v9752 = address$$6 | 3;
    var v10467 = lineCopy$$4 & 4096;
    var v10258 = v10467 >> 11;
    var v10468 = lineCopy$$4 & 16;
    var v10259 = v10468 >> 4;
    tileBlock4$$3[v1820] = tileBlock2$$3[v6108] = tileBlock3$$3[v8621] = tileBlock1$$3[v9752] = v10258 | v10259;
    var v1821 = addressFlipped$$3 | 5;
    var v6109 = address$$6 | 5;
    var v8622 = addressFlipped$$3 | 2;
    var v9753 = address$$6 | 2;
    var v10469 = lineCopy$$4 & 8192;
    var v10260 = v10469 >> 12;
    var v10470 = lineCopy$$4 & 32;
    var v10261 = v10470 >> 5;
    tileBlock4$$3[v1821] = tileBlock2$$3[v6109] = tileBlock3$$3[v8622] = tileBlock1$$3[v9753] = v10260 | v10261;
    var v1822 = addressFlipped$$3 | 6;
    var v6110 = address$$6 | 6;
    var v8623 = addressFlipped$$3 | 1;
    var v9754 = address$$6 | 1;
    var v10471 = lineCopy$$4 & 16384;
    var v10262 = v10471 >> 13;
    var v10472 = lineCopy$$4 & 64;
    var v10263 = v10472 >> 6;
    tileBlock4$$3[v1822] = tileBlock2$$3[v6110] = tileBlock3$$3[v8623] = tileBlock1$$3[v9754] = v10262 | v10263;
    var v1823 = addressFlipped$$3 | 7;
    var v6111 = address$$6 | 7;
    var v9755 = lineCopy$$4 & 32768;
    var v8624 = v9755 >> 14;
    var v9756 = lineCopy$$4 & 128;
    var v8625 = v9756 >> 7;
    tileBlock4$$3[v1823] = tileBlock2$$3[v6111] = tileBlock3$$3[addressFlipped$$3] = tileBlock1$$3[address$$6] = v8624 | v8625;
    address$$6 = address$$6 + 8;
    addressFlipped$$3 = addressFlipped$$3 - 8;
    vramAddress$$1 = vramAddress$$1 + 2;
    v1824 = addressFlipped$$3 > -1;
  } while (v1824);
  return;
}
function v705(address$$5) {
  var v8626 = this.VRAM;
  var v8627 = 1 | address$$5;
  var v6112 = v8626[v8627];
  var v1825 = v6112 << 8;
  var v6113 = this.VRAM;
  var v6114 = 8190 & address$$5;
  var v1826 = v6113[v6114];
  var lineCopy$$3 = v1825 | v1826;
  var v1827 = this.tileCache;
  var v6115 = address$$5 >> 4;
  var v1828 = 2048 | v6115;
  var tileBlock1$$2 = v1827[v1828];
  var v1829 = this.tileCache;
  var v6116 = address$$5 >> 4;
  var v1830 = 2560 | v6116;
  var tileBlock2$$2 = v1829[v1830];
  var v1831 = this.tileCache;
  var v6117 = address$$5 >> 4;
  var v1832 = 3072 | v6117;
  var tileBlock3$$2 = v1831[v1832];
  var v1833 = this.tileCache;
  var v6118 = address$$5 >> 4;
  var v1834 = 3584 | v6118;
  var tileBlock4$$2 = v1833[v1834];
  var v1835 = address$$5 & 14;
  address$$5 = v1835 << 2;
  var addressFlipped$$2 = 56 - address$$5;
  var v1836 = addressFlipped$$2 | 7;
  var v6119 = address$$5 | 7;
  var v9757 = lineCopy$$3 & 256;
  var v8628 = v9757 >> 7;
  var v8629 = lineCopy$$3 & 1;
  tileBlock4$$2[addressFlipped$$2] = tileBlock2$$2[address$$5] = tileBlock3$$2[v1836] = tileBlock1$$2[v6119] = v8628 | v8629;
  var v1837 = addressFlipped$$2 | 1;
  var v6120 = address$$5 | 1;
  var v8630 = addressFlipped$$2 | 6;
  var v9758 = address$$5 | 6;
  var v10473 = lineCopy$$3 & 512;
  var v10264 = v10473 >> 8;
  var v10474 = lineCopy$$3 & 2;
  var v10265 = v10474 >> 1;
  tileBlock4$$2[v1837] = tileBlock2$$2[v6120] = tileBlock3$$2[v8630] = tileBlock1$$2[v9758] = v10264 | v10265;
  var v1838 = addressFlipped$$2 | 2;
  var v6121 = address$$5 | 2;
  var v8631 = addressFlipped$$2 | 5;
  var v9759 = address$$5 | 5;
  var v10475 = lineCopy$$3 & 1024;
  var v10266 = v10475 >> 9;
  var v10476 = lineCopy$$3 & 4;
  var v10267 = v10476 >> 2;
  tileBlock4$$2[v1838] = tileBlock2$$2[v6121] = tileBlock3$$2[v8631] = tileBlock1$$2[v9759] = v10266 | v10267;
  var v1839 = addressFlipped$$2 | 3;
  var v6122 = address$$5 | 3;
  var v8632 = addressFlipped$$2 | 4;
  var v9760 = address$$5 | 4;
  var v10477 = lineCopy$$3 & 2048;
  var v10268 = v10477 >> 10;
  var v10478 = lineCopy$$3 & 8;
  var v10269 = v10478 >> 3;
  tileBlock4$$2[v1839] = tileBlock2$$2[v6122] = tileBlock3$$2[v8632] = tileBlock1$$2[v9760] = v10268 | v10269;
  var v1840 = addressFlipped$$2 | 4;
  var v6123 = address$$5 | 4;
  var v8633 = addressFlipped$$2 | 3;
  var v9761 = address$$5 | 3;
  var v10479 = lineCopy$$3 & 4096;
  var v10270 = v10479 >> 11;
  var v10480 = lineCopy$$3 & 16;
  var v10271 = v10480 >> 4;
  tileBlock4$$2[v1840] = tileBlock2$$2[v6123] = tileBlock3$$2[v8633] = tileBlock1$$2[v9761] = v10270 | v10271;
  var v1841 = addressFlipped$$2 | 5;
  var v6124 = address$$5 | 5;
  var v8634 = addressFlipped$$2 | 2;
  var v9762 = address$$5 | 2;
  var v10481 = lineCopy$$3 & 8192;
  var v10272 = v10481 >> 12;
  var v10482 = lineCopy$$3 & 32;
  var v10273 = v10482 >> 5;
  tileBlock4$$2[v1841] = tileBlock2$$2[v6124] = tileBlock3$$2[v8634] = tileBlock1$$2[v9762] = v10272 | v10273;
  var v1842 = addressFlipped$$2 | 6;
  var v6125 = address$$5 | 6;
  var v8635 = addressFlipped$$2 | 1;
  var v9763 = address$$5 | 1;
  var v10483 = lineCopy$$3 & 16384;
  var v10274 = v10483 >> 13;
  var v10484 = lineCopy$$3 & 64;
  var v10275 = v10484 >> 6;
  tileBlock4$$2[v1842] = tileBlock2$$2[v6125] = tileBlock3$$2[v8635] = tileBlock1$$2[v9763] = v10274 | v10275;
  var v1843 = addressFlipped$$2 | 7;
  var v6126 = address$$5 | 7;
  var v9764 = lineCopy$$3 & 32768;
  var v8636 = v9764 >> 14;
  var v9765 = lineCopy$$3 & 128;
  var v8637 = v9765 >> 7;
  tileBlock4$$2[v1843] = tileBlock2$$2[v6126] = tileBlock3$$2[addressFlipped$$2] = tileBlock1$$2[address$$5] = v8636 | v8637;
  return;
}
function v704(vramAddress) {
  var address$$4 = vramAddress >> 4;
  var v1844 = this.tileCache;
  var tileBlock1$$1 = v1844[address$$4];
  var v1845 = this.tileCache;
  var v1846 = 512 | address$$4;
  var tileBlock2$$1 = v1845[v1846];
  var v1847 = this.tileCache;
  var v1848 = 1024 | address$$4;
  var tileBlock3$$1 = v1847[v1848];
  var v1849 = this.tileCache;
  var v1850 = 1536 | address$$4;
  var tileBlock4$$1 = v1849[v1850];
  var lineCopy$$2 = 0;
  vramAddress = vramAddress | 32768;
  address$$4 = 0;
  var addressFlipped$$1 = 56;
  var v1861 = addressFlipped$$1 > -1;
  do {
    var v8638 = this.memory;
    var v8639 = 1 | vramAddress;
    var v6127 = v8638[v8639];
    var v1851 = v6127 << 8;
    var v6128 = this.memory;
    var v1852 = v6128[vramAddress];
    lineCopy$$2 = v1851 | v1852;
    var v1853 = addressFlipped$$1 | 7;
    var v6129 = address$$4 | 7;
    var v9766 = lineCopy$$2 & 256;
    var v8640 = v9766 >> 7;
    var v8641 = lineCopy$$2 & 1;
    tileBlock4$$1[addressFlipped$$1] = tileBlock2$$1[address$$4] = tileBlock3$$1[v1853] = tileBlock1$$1[v6129] = v8640 | v8641;
    var v1854 = addressFlipped$$1 | 1;
    var v6130 = address$$4 | 1;
    var v8642 = addressFlipped$$1 | 6;
    var v9767 = address$$4 | 6;
    var v10485 = lineCopy$$2 & 512;
    var v10276 = v10485 >> 8;
    var v10486 = lineCopy$$2 & 2;
    var v10277 = v10486 >> 1;
    tileBlock4$$1[v1854] = tileBlock2$$1[v6130] = tileBlock3$$1[v8642] = tileBlock1$$1[v9767] = v10276 | v10277;
    var v1855 = addressFlipped$$1 | 2;
    var v6131 = address$$4 | 2;
    var v8643 = addressFlipped$$1 | 5;
    var v9768 = address$$4 | 5;
    var v10487 = lineCopy$$2 & 1024;
    var v10278 = v10487 >> 9;
    var v10488 = lineCopy$$2 & 4;
    var v10279 = v10488 >> 2;
    tileBlock4$$1[v1855] = tileBlock2$$1[v6131] = tileBlock3$$1[v8643] = tileBlock1$$1[v9768] = v10278 | v10279;
    var v1856 = addressFlipped$$1 | 3;
    var v6132 = address$$4 | 3;
    var v8644 = addressFlipped$$1 | 4;
    var v9769 = address$$4 | 4;
    var v10489 = lineCopy$$2 & 2048;
    var v10280 = v10489 >> 10;
    var v10490 = lineCopy$$2 & 8;
    var v10281 = v10490 >> 3;
    tileBlock4$$1[v1856] = tileBlock2$$1[v6132] = tileBlock3$$1[v8644] = tileBlock1$$1[v9769] = v10280 | v10281;
    var v1857 = addressFlipped$$1 | 4;
    var v6133 = address$$4 | 4;
    var v8645 = addressFlipped$$1 | 3;
    var v9770 = address$$4 | 3;
    var v10491 = lineCopy$$2 & 4096;
    var v10282 = v10491 >> 11;
    var v10492 = lineCopy$$2 & 16;
    var v10283 = v10492 >> 4;
    tileBlock4$$1[v1857] = tileBlock2$$1[v6133] = tileBlock3$$1[v8645] = tileBlock1$$1[v9770] = v10282 | v10283;
    var v1858 = addressFlipped$$1 | 5;
    var v6134 = address$$4 | 5;
    var v8646 = addressFlipped$$1 | 2;
    var v9771 = address$$4 | 2;
    var v10493 = lineCopy$$2 & 8192;
    var v10284 = v10493 >> 12;
    var v10494 = lineCopy$$2 & 32;
    var v10285 = v10494 >> 5;
    tileBlock4$$1[v1858] = tileBlock2$$1[v6134] = tileBlock3$$1[v8646] = tileBlock1$$1[v9771] = v10284 | v10285;
    var v1859 = addressFlipped$$1 | 6;
    var v6135 = address$$4 | 6;
    var v8647 = addressFlipped$$1 | 1;
    var v9772 = address$$4 | 1;
    var v10495 = lineCopy$$2 & 16384;
    var v10286 = v10495 >> 13;
    var v10496 = lineCopy$$2 & 64;
    var v10287 = v10496 >> 6;
    tileBlock4$$1[v1859] = tileBlock2$$1[v6135] = tileBlock3$$1[v8647] = tileBlock1$$1[v9772] = v10286 | v10287;
    var v1860 = addressFlipped$$1 | 7;
    var v6136 = address$$4 | 7;
    var v9773 = lineCopy$$2 & 32768;
    var v8648 = v9773 >> 14;
    var v9774 = lineCopy$$2 & 128;
    var v8649 = v9774 >> 7;
    tileBlock4$$1[v1860] = tileBlock2$$1[v6136] = tileBlock3$$1[addressFlipped$$1] = tileBlock1$$1[address$$4] = v8648 | v8649;
    address$$4 = address$$4 + 8;
    addressFlipped$$1 = addressFlipped$$1 - 8;
    vramAddress = vramAddress + 2;
    v1861 = addressFlipped$$1 > -1;
  } while (v1861);
  return;
}
function v703(address$$3) {
  var v8650 = this.memory;
  var v8651 = 1 | address$$3;
  var v6137 = v8650[v8651];
  var v1862 = v6137 << 8;
  var v6138 = this.memory;
  var v6139 = 40958 & address$$3;
  var v1863 = v6138[v6139];
  var lineCopy$$1 = v1862 | v1863;
  address$$3 = address$$3 & 8190;
  var v1864 = this.tileCache;
  var v1865 = address$$3 >> 4;
  var tileBlock1 = v1864[v1865];
  var v1866 = this.tileCache;
  var v6140 = address$$3 >> 4;
  var v1867 = 512 | v6140;
  var tileBlock2 = v1866[v1867];
  var v1868 = this.tileCache;
  var v6141 = address$$3 >> 4;
  var v1869 = 1024 | v6141;
  var tileBlock3 = v1868[v1869];
  var v1870 = this.tileCache;
  var v6142 = address$$3 >> 4;
  var v1871 = 1536 | v6142;
  var tileBlock4 = v1870[v1871];
  var v1872 = address$$3 & 14;
  address$$3 = v1872 << 2;
  var addressFlipped = 56 - address$$3;
  var v1873 = addressFlipped | 7;
  var v6143 = address$$3 | 7;
  var v9775 = lineCopy$$1 & 256;
  var v8652 = v9775 >> 7;
  var v8653 = lineCopy$$1 & 1;
  tileBlock4[addressFlipped] = tileBlock2[address$$3] = tileBlock3[v1873] = tileBlock1[v6143] = v8652 | v8653;
  var v1874 = addressFlipped | 1;
  var v6144 = address$$3 | 1;
  var v8654 = addressFlipped | 6;
  var v9776 = address$$3 | 6;
  var v10497 = lineCopy$$1 & 512;
  var v10288 = v10497 >> 8;
  var v10498 = lineCopy$$1 & 2;
  var v10289 = v10498 >> 1;
  tileBlock4[v1874] = tileBlock2[v6144] = tileBlock3[v8654] = tileBlock1[v9776] = v10288 | v10289;
  var v1875 = addressFlipped | 2;
  var v6145 = address$$3 | 2;
  var v8655 = addressFlipped | 5;
  var v9777 = address$$3 | 5;
  var v10499 = lineCopy$$1 & 1024;
  var v10290 = v10499 >> 9;
  var v10500 = lineCopy$$1 & 4;
  var v10291 = v10500 >> 2;
  tileBlock4[v1875] = tileBlock2[v6145] = tileBlock3[v8655] = tileBlock1[v9777] = v10290 | v10291;
  var v1876 = addressFlipped | 3;
  var v6146 = address$$3 | 3;
  var v8656 = addressFlipped | 4;
  var v9778 = address$$3 | 4;
  var v10501 = lineCopy$$1 & 2048;
  var v10292 = v10501 >> 10;
  var v10502 = lineCopy$$1 & 8;
  var v10293 = v10502 >> 3;
  tileBlock4[v1876] = tileBlock2[v6146] = tileBlock3[v8656] = tileBlock1[v9778] = v10292 | v10293;
  var v1877 = addressFlipped | 4;
  var v6147 = address$$3 | 4;
  var v8657 = addressFlipped | 3;
  var v9779 = address$$3 | 3;
  var v10503 = lineCopy$$1 & 4096;
  var v10294 = v10503 >> 11;
  var v10504 = lineCopy$$1 & 16;
  var v10295 = v10504 >> 4;
  tileBlock4[v1877] = tileBlock2[v6147] = tileBlock3[v8657] = tileBlock1[v9779] = v10294 | v10295;
  var v1878 = addressFlipped | 5;
  var v6148 = address$$3 | 5;
  var v8658 = addressFlipped | 2;
  var v9780 = address$$3 | 2;
  var v10505 = lineCopy$$1 & 8192;
  var v10296 = v10505 >> 12;
  var v10506 = lineCopy$$1 & 32;
  var v10297 = v10506 >> 5;
  tileBlock4[v1878] = tileBlock2[v6148] = tileBlock3[v8658] = tileBlock1[v9780] = v10296 | v10297;
  var v1879 = addressFlipped | 6;
  var v6149 = address$$3 | 6;
  var v8659 = addressFlipped | 1;
  var v9781 = address$$3 | 1;
  var v10507 = lineCopy$$1 & 16384;
  var v10298 = v10507 >> 13;
  var v10508 = lineCopy$$1 & 64;
  var v10299 = v10508 >> 6;
  tileBlock4[v1879] = tileBlock2[v6149] = tileBlock3[v8659] = tileBlock1[v9781] = v10298 | v10299;
  var v1880 = addressFlipped | 7;
  var v6150 = address$$3 | 7;
  var v9782 = lineCopy$$1 & 32768;
  var v8660 = v9782 >> 14;
  var v9783 = lineCopy$$1 & 128;
  var v8661 = v9783 >> 7;
  tileBlock4[v1880] = tileBlock2[v6150] = tileBlock3[addressFlipped] = tileBlock1[address$$3] = v8660 | v8661;
  return;
}
function v702(address$$2) {
  var v8662 = this.memory;
  var v8663 = 1 | address$$2;
  var v6151 = v8662[v8663];
  var v1881 = v6151 << 8;
  var v6152 = this.memory;
  var v6153 = 40958 & address$$2;
  var v1882 = v6152[v6153];
  var lineCopy = v1881 | v1882;
  var v1883 = this.tileCache;
  var v6154 = address$$2 & 8176;
  var v1884 = v6154 >> 4;
  var tileBlock = v1883[v1884];
  var v1885 = address$$2 & 14;
  address$$2 = v1885 << 2;
  var v1886 = address$$2 | 7;
  var v8664 = lineCopy & 256;
  var v6155 = v8664 >> 7;
  var v6156 = lineCopy & 1;
  tileBlock[v1886] = v6155 | v6156;
  var v1887 = address$$2 | 6;
  var v8665 = lineCopy & 512;
  var v6157 = v8665 >> 8;
  var v8666 = lineCopy & 2;
  var v6158 = v8666 >> 1;
  tileBlock[v1887] = v6157 | v6158;
  var v1888 = address$$2 | 5;
  var v8667 = lineCopy & 1024;
  var v6159 = v8667 >> 9;
  var v8668 = lineCopy & 4;
  var v6160 = v8668 >> 2;
  tileBlock[v1888] = v6159 | v6160;
  var v1889 = address$$2 | 4;
  var v8669 = lineCopy & 2048;
  var v6161 = v8669 >> 10;
  var v8670 = lineCopy & 8;
  var v6162 = v8670 >> 3;
  tileBlock[v1889] = v6161 | v6162;
  var v1890 = address$$2 | 3;
  var v8671 = lineCopy & 4096;
  var v6163 = v8671 >> 11;
  var v8672 = lineCopy & 16;
  var v6164 = v8672 >> 4;
  tileBlock[v1890] = v6163 | v6164;
  var v1891 = address$$2 | 2;
  var v8673 = lineCopy & 8192;
  var v6165 = v8673 >> 12;
  var v8674 = lineCopy & 32;
  var v6166 = v8674 >> 5;
  tileBlock[v1891] = v6165 | v6166;
  var v1892 = address$$2 | 1;
  var v8675 = lineCopy & 16384;
  var v6167 = v8675 >> 13;
  var v8676 = lineCopy & 64;
  var v6168 = v8676 >> 6;
  tileBlock[v1892] = v6167 | v6168;
  var v6169 = lineCopy & 32768;
  var v1893 = v6169 >> 14;
  var v6170 = lineCopy & 128;
  var v1894 = v6170 >> 7;
  tileBlock[address$$2] = v1893 | v1894;
  return;
}
function v701(scanlineToRender$$9) {
  var v1941 = this.gfxSpriteShow;
  if (v1941) {
    var OAMAddress$$2 = 65024;
    var lineAdjusted$$2 = scanlineToRender$$9 + 16;
    var yoffset$$5 = 0;
    var xcoord$$1 = 0;
    var endX = 0;
    var xCounter = 0;
    var attrCode$$5 = 0;
    var palette$$5 = 0;
    var tile$$7 = null;
    var data$$31 = 0;
    var currentPixel$$1 = 0;
    var spriteCount$$2 = 0;
    var v1940 = this.gfxSpriteNormalHeight;
    if (v1940) {
      var v6171 = OAMAddress$$2 < 65184;
      if (v6171) {
        v6171 = spriteCount$$2 < 10;
      }
      var v1915 = v6171;
      for (;v1915;) {
        var v6172 = this.memory;
        var v1895 = v6172[OAMAddress$$2];
        yoffset$$5 = lineAdjusted$$2 - v1895;
        var v6173 = yoffset$$5 & 7;
        var v1914 = v6173 == yoffset$$5;
        if (v1914) {
          var v6174 = this.memory;
          var v6175 = OAMAddress$$2 | 1;
          var v1896 = v6174[v6175];
          xcoord$$1 = v1896 - 8;
          var v1897 = xcoord$$1 + 8;
          endX = Math.min(160, v1897);
          var v1898 = this.memory;
          var v1899 = OAMAddress$$2 | 3;
          attrCode$$5 = v1898[v1899];
          var v1900 = attrCode$$5 & 7;
          palette$$5 = v1900 << 2;
          var v1901 = this.tileCache;
          var v9784 = attrCode$$5 & 8;
          var v8677 = v9784 << 8;
          var v9785 = attrCode$$5 & 96;
          var v8678 = v9785 << 4;
          var v6176 = v8677 | v8678;
          var v8679 = this.memory;
          var v8680 = OAMAddress$$2 | 2;
          var v6177 = v8679[v8680];
          var v1902 = v6176 | v6177;
          tile$$7 = v1901[v1902];
          var v1903;
          var v6178 = xcoord$$1 > 0;
          if (v6178) {
            v1903 = xcoord$$1;
          } else {
            v1903 = 0;
          }
          xCounter = v1903;
          var v6179 = yoffset$$5 << 3;
          xcoord$$1 = xcoord$$1 - v6179;
          var v1904 = this.pixelStart;
          currentPixel$$1 = v1904 + xCounter;
          var v1913 = xCounter < endX;
          for (;v1913;) {
            var v8681 = this.frameBuffer;
            var v6180 = v8681[currentPixel$$1];
            var v1912 = v6180 >= 33554432;
            if (v1912) {
              var v1905 = xCounter - xcoord$$1;
              data$$31 = tile$$7[v1905];
              var v1907 = data$$31 > 0;
              if (v1907) {
                var v1906 = this.frameBuffer;
                var v6181 = this.gbcOBJPalette;
                var v6182 = palette$$5 | data$$31;
                v1906[currentPixel$$1] = v6181[v6182];
              }
            } else {
              var v8682 = this.frameBuffer;
              var v6183 = v8682[currentPixel$$1];
              var v1911 = v6183 < 16777216;
              if (v1911) {
                var v1908 = xCounter - xcoord$$1;
                data$$31 = tile$$7[v1908];
                var v6184 = data$$31 > 0;
                if (v6184) {
                  v6184 = attrCode$$5 < 128;
                }
                var v1910 = v6184;
                if (v1910) {
                  var v1909 = this.frameBuffer;
                  var v6185 = this.gbcOBJPalette;
                  var v6186 = palette$$5 | data$$31;
                  v1909[currentPixel$$1] = v6185[v6186];
                }
              }
            }
            ++xCounter;
            ++currentPixel$$1;
            v1913 = xCounter < endX;
          }
          ++spriteCount$$2;
        }
        OAMAddress$$2 = OAMAddress$$2 + 4;
        var v6187 = OAMAddress$$2 < 65184;
        if (v6187) {
          v6187 = spriteCount$$2 < 10;
        }
        v1915 = v6187;
      }
    } else {
      var v6188 = OAMAddress$$2 < 65184;
      if (v6188) {
        v6188 = spriteCount$$2 < 10;
      }
      var v1939 = v6188;
      for (;v1939;) {
        var v6189 = this.memory;
        var v1916 = v6189[OAMAddress$$2];
        yoffset$$5 = lineAdjusted$$2 - v1916;
        var v6190 = yoffset$$5 & 15;
        var v1938 = v6190 == yoffset$$5;
        if (v1938) {
          var v6191 = this.memory;
          var v6192 = OAMAddress$$2 | 1;
          var v1917 = v6191[v6192];
          xcoord$$1 = v1917 - 8;
          var v1918 = xcoord$$1 + 8;
          endX = Math.min(160, v1918);
          var v1919 = this.memory;
          var v1920 = OAMAddress$$2 | 3;
          attrCode$$5 = v1919[v1920];
          var v1921 = attrCode$$5 & 7;
          palette$$5 = v1921 << 2;
          var v6193 = attrCode$$5 & 64;
          var v8683 = yoffset$$5 << 3;
          var v6194 = 64 & v8683;
          var v1926 = v6193 == v6194;
          if (v1926) {
            var v1922 = this.tileCache;
            var v9786 = attrCode$$5 & 8;
            var v8684 = v9786 << 8;
            var v9787 = attrCode$$5 & 96;
            var v8685 = v9787 << 4;
            var v6195 = v8684 | v8685;
            var v9788 = this.memory;
            var v9789 = OAMAddress$$2 | 2;
            var v8686 = v9788[v9789];
            var v6196 = v8686 & 254;
            var v1923 = v6195 | v6196;
            tile$$7 = v1922[v1923];
          } else {
            var v1924 = this.tileCache;
            var v10300 = attrCode$$5 & 8;
            var v9790 = v10300 << 8;
            var v10301 = attrCode$$5 & 96;
            var v9791 = v10301 << 4;
            var v8687 = v9790 | v9791;
            var v9792 = this.memory;
            var v9793 = OAMAddress$$2 | 2;
            var v8688 = v9792[v9793];
            var v6197 = v8687 | v8688;
            var v1925 = v6197 | 1;
            tile$$7 = v1924[v1925];
          }
          var v1927;
          var v6198 = xcoord$$1 > 0;
          if (v6198) {
            v1927 = xcoord$$1;
          } else {
            v1927 = 0;
          }
          xCounter = v1927;
          var v8689 = yoffset$$5 & 7;
          var v6199 = v8689 << 3;
          xcoord$$1 = xcoord$$1 - v6199;
          var v1928 = this.pixelStart;
          currentPixel$$1 = v1928 + xCounter;
          var v1937 = xCounter < endX;
          for (;v1937;) {
            var v8690 = this.frameBuffer;
            var v6200 = v8690[currentPixel$$1];
            var v1936 = v6200 >= 33554432;
            if (v1936) {
              var v1929 = xCounter - xcoord$$1;
              data$$31 = tile$$7[v1929];
              var v1931 = data$$31 > 0;
              if (v1931) {
                var v1930 = this.frameBuffer;
                var v6201 = this.gbcOBJPalette;
                var v6202 = palette$$5 | data$$31;
                v1930[currentPixel$$1] = v6201[v6202];
              }
            } else {
              var v8691 = this.frameBuffer;
              var v6203 = v8691[currentPixel$$1];
              var v1935 = v6203 < 16777216;
              if (v1935) {
                var v1932 = xCounter - xcoord$$1;
                data$$31 = tile$$7[v1932];
                var v6204 = data$$31 > 0;
                if (v6204) {
                  v6204 = attrCode$$5 < 128;
                }
                var v1934 = v6204;
                if (v1934) {
                  var v1933 = this.frameBuffer;
                  var v6205 = this.gbcOBJPalette;
                  var v6206 = palette$$5 | data$$31;
                  v1933[currentPixel$$1] = v6205[v6206];
                }
              }
            }
            ++xCounter;
            ++currentPixel$$1;
            v1937 = xCounter < endX;
          }
          ++spriteCount$$2;
        }
        OAMAddress$$2 = OAMAddress$$2 + 4;
        var v6207 = OAMAddress$$2 < 65184;
        if (v6207) {
          v6207 = spriteCount$$2 < 10;
        }
        v1939 = v6207;
      }
    }
  }
  return;
}
function v700(scanlineToRender$$8, drawableRange) {
  var address$$1 = 65024;
  var spriteCount$$1 = 0;
  var diff = 0;
  var v6208 = address$$1 < 65184;
  if (v6208) {
    v6208 = spriteCount$$1 < 10;
  }
  var v1946 = v6208;
  for (;v1946;) {
    var v6209 = this.memory;
    var v1942 = v6209[address$$1];
    diff = scanlineToRender$$8 - v1942;
    var v6210 = diff & drawableRange;
    var v1945 = v6210 == diff;
    if (v1945) {
      var v1943 = this.OAMAddressCache;
      var v1944 = spriteCount$$1;
      spriteCount$$1 = spriteCount$$1 + 1;
      v1943[v1944] = address$$1;
    }
    address$$1 = address$$1 + 4;
    var v6211 = address$$1 < 65184;
    if (v6211) {
      v6211 = spriteCount$$1 < 10;
    }
    v1946 = v6211;
  }
  return spriteCount$$1;
}
function v699(scanlineToRender$$7) {
  var v2006 = this.gfxSpriteShow;
  if (v2006) {
    var lineAdjusted$$1 = scanlineToRender$$7 + 16;
    var OAMAddress$$1 = 65024;
    var yoffset$$4 = 0;
    var xcoord = 1;
    var xCoordStart = 0;
    var xCoordEnd = 0;
    var attrCode$$4 = 0;
    var palette$$4 = 0;
    var tile$$6 = null;
    var data$$30 = 0;
    var spriteCount = 0;
    var length$$18 = 0;
    var currentPixel = 0;
    var linePixel = 0;
    var v1949 = xcoord < 168;
    for (;v1949;) {
      var v1947 = this.sortBuffer;
      var v1948 = xcoord;
      xcoord = xcoord + 1;
      v1947[v1948] = 255;
      v1949 = xcoord < 168;
    }
    var v2005 = this.gfxSpriteNormalHeight;
    if (v2005) {
      length$$18 = this.findLowestSpriteDrawable(lineAdjusted$$1, 7);
      var v1975 = spriteCount < length$$18;
      for (;v1975;) {
        var v1950 = this.OAMAddressCache;
        OAMAddress$$1 = v1950[spriteCount];
        var v8692 = this.memory;
        var v6212 = v8692[OAMAddress$$1];
        var v1951 = lineAdjusted$$1 - v6212;
        yoffset$$4 = v1951 << 3;
        var v1952 = this.memory;
        var v1953 = OAMAddress$$1 | 3;
        attrCode$$4 = v1952[v1953];
        var v1954 = attrCode$$4 & 16;
        palette$$4 = v1954 >> 2;
        var v1955 = this.tileCache;
        var v8693 = attrCode$$4 & 96;
        var v6213 = v8693 << 4;
        var v8694 = this.memory;
        var v8695 = OAMAddress$$1 | 2;
        var v6214 = v8694[v8695];
        var v1956 = v6213 | v6214;
        tile$$6 = v1955[v1956];
        var v1957 = this.memory;
        var v1958 = OAMAddress$$1 | 1;
        linePixel = xCoordStart = v1957[v1958];
        var v1959 = 168 - linePixel;
        xCoordEnd = Math.min(v1959, 8);
        var v1960;
        var v6215 = linePixel > 7;
        if (v6215) {
          v1960 = 0;
        } else {
          v1960 = 8 - linePixel;
        }
        xcoord = v1960;
        var v1961 = this.pixelStart;
        var v6216;
        var v8696 = linePixel > 8;
        if (v8696) {
          v6216 = linePixel - 8;
        } else {
          v6216 = 0;
        }
        var v1962 = v6216;
        currentPixel = v1961 + v1962;
        var v1974 = xcoord < xCoordEnd;
        for (;v1974;) {
          var v8697 = this.sortBuffer;
          var v6217 = v8697[linePixel];
          var v1973 = v6217 > xCoordStart;
          if (v1973) {
            var v8698 = this.frameBuffer;
            var v6218 = v8698[currentPixel];
            var v1972 = v6218 >= 33554432;
            if (v1972) {
              var v1963 = yoffset$$4 | xcoord;
              data$$30 = tile$$6[v1963];
              var v1966 = data$$30 > 0;
              if (v1966) {
                var v1964 = this.frameBuffer;
                var v6219 = this.OBJPalette;
                var v6220 = palette$$4 | data$$30;
                v1964[currentPixel] = v6219[v6220];
                var v1965 = this.sortBuffer;
                v1965[linePixel] = xCoordStart;
              }
            } else {
              var v8699 = this.frameBuffer;
              var v6221 = v8699[currentPixel];
              var v1971 = v6221 < 16777216;
              if (v1971) {
                var v1967 = yoffset$$4 | xcoord;
                data$$30 = tile$$6[v1967];
                var v6222 = data$$30 > 0;
                if (v6222) {
                  v6222 = attrCode$$4 < 128;
                }
                var v1970 = v6222;
                if (v1970) {
                  var v1968 = this.frameBuffer;
                  var v6223 = this.OBJPalette;
                  var v6224 = palette$$4 | data$$30;
                  v1968[currentPixel] = v6223[v6224];
                  var v1969 = this.sortBuffer;
                  v1969[linePixel] = xCoordStart;
                }
              }
            }
          }
          ++xcoord;
          ++currentPixel;
          ++linePixel;
          v1974 = xcoord < xCoordEnd;
        }
        ++spriteCount;
        v1975 = spriteCount < length$$18;
      }
    } else {
      length$$18 = this.findLowestSpriteDrawable(lineAdjusted$$1, 15);
      var v2004 = spriteCount < length$$18;
      for (;v2004;) {
        var v1976 = this.OAMAddressCache;
        OAMAddress$$1 = v1976[spriteCount];
        var v8700 = this.memory;
        var v6225 = v8700[OAMAddress$$1];
        var v1977 = lineAdjusted$$1 - v6225;
        yoffset$$4 = v1977 << 3;
        var v1978 = this.memory;
        var v1979 = OAMAddress$$1 | 3;
        attrCode$$4 = v1978[v1979];
        var v1980 = attrCode$$4 & 16;
        palette$$4 = v1980 >> 2;
        var v6226 = attrCode$$4 & 64;
        var v6227 = 64 & yoffset$$4;
        var v1985 = v6226 == v6227;
        if (v1985) {
          var v1981 = this.tileCache;
          var v8701 = attrCode$$4 & 96;
          var v6228 = v8701 << 4;
          var v9794 = this.memory;
          var v9795 = OAMAddress$$1 | 2;
          var v8702 = v9794[v9795];
          var v6229 = v8702 & 254;
          var v1982 = v6228 | v6229;
          tile$$6 = v1981[v1982];
        } else {
          var v1983 = this.tileCache;
          var v9796 = attrCode$$4 & 96;
          var v8703 = v9796 << 4;
          var v9797 = this.memory;
          var v9798 = OAMAddress$$1 | 2;
          var v8704 = v9797[v9798];
          var v6230 = v8703 | v8704;
          var v1984 = v6230 | 1;
          tile$$6 = v1983[v1984];
        }
        yoffset$$4 = yoffset$$4 & 63;
        var v1986 = this.memory;
        var v1987 = OAMAddress$$1 | 1;
        linePixel = xCoordStart = v1986[v1987];
        var v1988 = 168 - linePixel;
        xCoordEnd = Math.min(v1988, 8);
        var v1989;
        var v6231 = linePixel > 7;
        if (v6231) {
          v1989 = 0;
        } else {
          v1989 = 8 - linePixel;
        }
        xcoord = v1989;
        var v1990 = this.pixelStart;
        var v6232;
        var v8705 = linePixel > 8;
        if (v8705) {
          v6232 = linePixel - 8;
        } else {
          v6232 = 0;
        }
        var v1991 = v6232;
        currentPixel = v1990 + v1991;
        var v2003 = xcoord < xCoordEnd;
        for (;v2003;) {
          var v8706 = this.sortBuffer;
          var v6233 = v8706[linePixel];
          var v2002 = v6233 > xCoordStart;
          if (v2002) {
            var v8707 = this.frameBuffer;
            var v6234 = v8707[currentPixel];
            var v2001 = v6234 >= 33554432;
            if (v2001) {
              var v1992 = yoffset$$4 | xcoord;
              data$$30 = tile$$6[v1992];
              var v1995 = data$$30 > 0;
              if (v1995) {
                var v1993 = this.frameBuffer;
                var v6235 = this.OBJPalette;
                var v6236 = palette$$4 | data$$30;
                v1993[currentPixel] = v6235[v6236];
                var v1994 = this.sortBuffer;
                v1994[linePixel] = xCoordStart;
              }
            } else {
              var v8708 = this.frameBuffer;
              var v6237 = v8708[currentPixel];
              var v2000 = v6237 < 16777216;
              if (v2000) {
                var v1996 = yoffset$$4 | xcoord;
                data$$30 = tile$$6[v1996];
                var v6238 = data$$30 > 0;
                if (v6238) {
                  v6238 = attrCode$$4 < 128;
                }
                var v1999 = v6238;
                if (v1999) {
                  var v1997 = this.frameBuffer;
                  var v6239 = this.OBJPalette;
                  var v6240 = palette$$4 | data$$30;
                  v1997[currentPixel] = v6239[v6240];
                  var v1998 = this.sortBuffer;
                  v1998[linePixel] = xCoordStart;
                }
              }
            }
          }
          ++xcoord;
          ++currentPixel;
          ++linePixel;
          v2003 = xcoord < xCoordEnd;
        }
        ++spriteCount;
        v2004 = spriteCount < length$$18;
      }
    }
  }
  return;
}
function v698(scanlineToRender$$6) {
  var v2075 = this.gfxWindowDisplay;
  if (v2075) {
    var v2007 = this.windowY;
    var scrollYAdjusted$$5 = scanlineToRender$$6 - v2007;
    var v2074 = scrollYAdjusted$$5 >= 0;
    if (v2074) {
      var v2008;
      var v8709 = this.windowX;
      var v6243 = v8709 > 0;
      if (v6243) {
        var v6241 = this.windowX;
        var v6242 = this.currentX;
        v2008 = v6241 + v6242;
      } else {
        v2008 = this.currentX;
      }
      var scrollXRangeAdjusted$$2 = v2008;
      var v2009 = this.pixelStart;
      var pixelPosition$$7 = v2009 + scrollXRangeAdjusted$$2;
      var v2010 = this.pixelStart;
      var v2011 = this.pixelEnd;
      var pixelPositionEnd$$5 = v2010 + v2011;
      var v2073 = pixelPosition$$7 < pixelPositionEnd$$5;
      if (v2073) {
        var v2012 = scrollYAdjusted$$5 & 7;
        var tileYLine$$5 = v2012 << 3;
        var v6244 = this.gfxWindowCHRBankPosition;
        var v8710 = scrollYAdjusted$$5 & 248;
        var v6245 = v8710 << 2;
        var v2013 = v6244 | v6245;
        var v6246 = this.currentX;
        var v2014 = v6246 >> 3;
        var tileNumber$$6 = v2013 + v2014;
        var v2015 = this.BGCHRBank1;
        var chrCode$$5 = v2015[tileNumber$$6];
        var v6247 = this.gfxBackgroundBankOffset;
        var v2016 = chrCode$$5 < v6247;
        if (v2016) {
          chrCode$$5 = chrCode$$5 | 256;
        }
        var v2017 = this.BGCHRBank2;
        var attrCode$$3 = v2017[tileNumber$$6];
        var v2018 = this.tileCache;
        var v9799 = attrCode$$3 & 8;
        var v8711 = v9799 << 8;
        var v9800 = attrCode$$3 & 96;
        var v8712 = v9800 << 4;
        var v6248 = v8711 | v8712;
        var v2019 = v6248 | chrCode$$5;
        var tile$$5 = v2018[v2019];
        var v2020 = attrCode$$3 & 7;
        var palette$$3 = v2020 << 2;
        var v6249 = this.windowX;
        var v2021 = scrollXRangeAdjusted$$2 - v6249;
        var texel$$5 = v2021 & 7;
        var v6250 = texel$$5 + pixelPositionEnd$$5;
        var v2022 = v6250 - pixelPosition$$7;
        scrollXRangeAdjusted$$2 = Math.min(8, v2022);
        var v2025 = texel$$5 < scrollXRangeAdjusted$$2;
        for (;v2025;) {
          var v2023 = this.frameBuffer;
          var v2024 = pixelPosition$$7;
          pixelPosition$$7 = pixelPosition$$7 + 1;
          var v6251 = this.gbcBGPalette;
          var v10302 = texel$$5;
          texel$$5 = texel$$5 + 1;
          var v9801 = tileYLine$$5 | v10302;
          var v8713 = tile$$5[v9801];
          var v6252 = palette$$3 | v8713;
          v2023[v2024] = v6251[v6252];
          v2025 = texel$$5 < scrollXRangeAdjusted$$2;
        }
        var v6253 = pixelPositionEnd$$5 - pixelPosition$$7;
        var v2026 = v6253 >> 3;
        scrollXRangeAdjusted$$2 = tileNumber$$6 + v2026;
        var v2050 = tileNumber$$6 < scrollXRangeAdjusted$$2;
        for (;v2050;) {
          var v2027 = this.BGCHRBank1;
          var v2028 = tileNumber$$6 = tileNumber$$6 + 1;
          chrCode$$5 = v2027[v2028];
          var v6254 = this.gfxBackgroundBankOffset;
          var v2029 = chrCode$$5 < v6254;
          if (v2029) {
            chrCode$$5 = chrCode$$5 | 256;
          }
          var v2030 = this.BGCHRBank2;
          attrCode$$3 = v2030[tileNumber$$6];
          var v2031 = this.tileCache;
          var v9802 = attrCode$$3 & 8;
          var v8714 = v9802 << 8;
          var v9803 = attrCode$$3 & 96;
          var v8715 = v9803 << 4;
          var v6255 = v8714 | v8715;
          var v2032 = v6255 | chrCode$$5;
          tile$$5 = v2031[v2032];
          var v2033 = attrCode$$3 & 7;
          palette$$3 = v2033 << 2;
          texel$$5 = tileYLine$$5;
          var v2034 = this.frameBuffer;
          var v2035 = pixelPosition$$7;
          pixelPosition$$7 = pixelPosition$$7 + 1;
          var v6256 = this.gbcBGPalette;
          var v9804 = texel$$5;
          texel$$5 = texel$$5 + 1;
          var v8716 = tile$$5[v9804];
          var v6257 = palette$$3 | v8716;
          v2034[v2035] = v6256[v6257];
          var v2036 = this.frameBuffer;
          var v2037 = pixelPosition$$7;
          pixelPosition$$7 = pixelPosition$$7 + 1;
          var v6258 = this.gbcBGPalette;
          var v9805 = texel$$5;
          texel$$5 = texel$$5 + 1;
          var v8717 = tile$$5[v9805];
          var v6259 = palette$$3 | v8717;
          v2036[v2037] = v6258[v6259];
          var v2038 = this.frameBuffer;
          var v2039 = pixelPosition$$7;
          pixelPosition$$7 = pixelPosition$$7 + 1;
          var v6260 = this.gbcBGPalette;
          var v9806 = texel$$5;
          texel$$5 = texel$$5 + 1;
          var v8718 = tile$$5[v9806];
          var v6261 = palette$$3 | v8718;
          v2038[v2039] = v6260[v6261];
          var v2040 = this.frameBuffer;
          var v2041 = pixelPosition$$7;
          pixelPosition$$7 = pixelPosition$$7 + 1;
          var v6262 = this.gbcBGPalette;
          var v9807 = texel$$5;
          texel$$5 = texel$$5 + 1;
          var v8719 = tile$$5[v9807];
          var v6263 = palette$$3 | v8719;
          v2040[v2041] = v6262[v6263];
          var v2042 = this.frameBuffer;
          var v2043 = pixelPosition$$7;
          pixelPosition$$7 = pixelPosition$$7 + 1;
          var v6264 = this.gbcBGPalette;
          var v9808 = texel$$5;
          texel$$5 = texel$$5 + 1;
          var v8720 = tile$$5[v9808];
          var v6265 = palette$$3 | v8720;
          v2042[v2043] = v6264[v6265];
          var v2044 = this.frameBuffer;
          var v2045 = pixelPosition$$7;
          pixelPosition$$7 = pixelPosition$$7 + 1;
          var v6266 = this.gbcBGPalette;
          var v9809 = texel$$5;
          texel$$5 = texel$$5 + 1;
          var v8721 = tile$$5[v9809];
          var v6267 = palette$$3 | v8721;
          v2044[v2045] = v6266[v6267];
          var v2046 = this.frameBuffer;
          var v2047 = pixelPosition$$7;
          pixelPosition$$7 = pixelPosition$$7 + 1;
          var v6268 = this.gbcBGPalette;
          var v9810 = texel$$5;
          texel$$5 = texel$$5 + 1;
          var v8722 = tile$$5[v9810];
          var v6269 = palette$$3 | v8722;
          v2046[v2047] = v6268[v6269];
          var v2048 = this.frameBuffer;
          var v2049 = pixelPosition$$7;
          pixelPosition$$7 = pixelPosition$$7 + 1;
          var v6270 = this.gbcBGPalette;
          var v8723 = tile$$5[texel$$5];
          var v6271 = palette$$3 | v8723;
          v2048[v2049] = v6270[v6271];
          v2050 = tileNumber$$6 < scrollXRangeAdjusted$$2;
        }
        var v2072 = pixelPosition$$7 < pixelPositionEnd$$5;
        if (v2072) {
          var v2051 = this.BGCHRBank1;
          var v2052 = tileNumber$$6 = tileNumber$$6 + 1;
          chrCode$$5 = v2051[v2052];
          var v6272 = this.gfxBackgroundBankOffset;
          var v2053 = chrCode$$5 < v6272;
          if (v2053) {
            chrCode$$5 = chrCode$$5 | 256;
          }
          var v2054 = this.BGCHRBank2;
          attrCode$$3 = v2054[tileNumber$$6];
          var v2055 = this.tileCache;
          var v9811 = attrCode$$3 & 8;
          var v8724 = v9811 << 8;
          var v9812 = attrCode$$3 & 96;
          var v8725 = v9812 << 4;
          var v6273 = v8724 | v8725;
          var v2056 = v6273 | chrCode$$5;
          tile$$5 = v2055[v2056];
          var v2057 = attrCode$$3 & 7;
          palette$$3 = v2057 << 2;
          var v2071 = pixelPositionEnd$$5 - pixelPosition$$7;
          switch(v2071) {
            case 7:
              var v2058 = this.frameBuffer;
              var v2059 = pixelPosition$$7 + 6;
              var v6274 = this.gbcBGPalette;
              var v9813 = tileYLine$$5 | 6;
              var v8726 = tile$$5[v9813];
              var v6275 = palette$$3 | v8726;
              v2058[v2059] = v6274[v6275];
            case 6:
              var v2060 = this.frameBuffer;
              var v2061 = pixelPosition$$7 + 5;
              var v6276 = this.gbcBGPalette;
              var v9814 = tileYLine$$5 | 5;
              var v8727 = tile$$5[v9814];
              var v6277 = palette$$3 | v8727;
              v2060[v2061] = v6276[v6277];
            case 5:
              var v2062 = this.frameBuffer;
              var v2063 = pixelPosition$$7 + 4;
              var v6278 = this.gbcBGPalette;
              var v9815 = tileYLine$$5 | 4;
              var v8728 = tile$$5[v9815];
              var v6279 = palette$$3 | v8728;
              v2062[v2063] = v6278[v6279];
            case 4:
              var v2064 = this.frameBuffer;
              var v2065 = pixelPosition$$7 + 3;
              var v6280 = this.gbcBGPalette;
              var v9816 = tileYLine$$5 | 3;
              var v8729 = tile$$5[v9816];
              var v6281 = palette$$3 | v8729;
              v2064[v2065] = v6280[v6281];
            case 3:
              var v2066 = this.frameBuffer;
              var v2067 = pixelPosition$$7 + 2;
              var v6282 = this.gbcBGPalette;
              var v9817 = tileYLine$$5 | 2;
              var v8730 = tile$$5[v9817];
              var v6283 = palette$$3 | v8730;
              v2066[v2067] = v6282[v6283];
            case 2:
              var v2068 = this.frameBuffer;
              var v2069 = pixelPosition$$7 + 1;
              var v6284 = this.gbcBGPalette;
              var v9818 = tileYLine$$5 | 1;
              var v8731 = tile$$5[v9818];
              var v6285 = palette$$3 | v8731;
              v2068[v2069] = v6284[v6285];
            case 1:
              var v2070 = this.frameBuffer;
              var v6286 = this.gbcBGPalette;
              var v8732 = tile$$5[tileYLine$$5];
              var v6287 = palette$$3 | v8732;
              v2070[pixelPosition$$7] = v6286[v6287];
          }
        }
      }
    }
  }
  return;
}
function v697(scanlineToRender$$5) {
  var v2147 = this.gfxWindowDisplay;
  if (v2147) {
    var v2076 = this.windowY;
    var scrollYAdjusted$$4 = scanlineToRender$$5 - v2076;
    var v2146 = scrollYAdjusted$$4 >= 0;
    if (v2146) {
      var v2077;
      var v8733 = this.windowX;
      var v6290 = v8733 > 0;
      if (v6290) {
        var v6288 = this.windowX;
        var v6289 = this.currentX;
        v2077 = v6288 + v6289;
      } else {
        v2077 = this.currentX;
      }
      var scrollXRangeAdjusted$$1 = v2077;
      var v2078 = this.pixelStart;
      var pixelPosition$$6 = v2078 + scrollXRangeAdjusted$$1;
      var v2079 = this.pixelStart;
      var v2080 = this.pixelEnd;
      var pixelPositionEnd$$4 = v2079 + v2080;
      var v2145 = pixelPosition$$6 < pixelPositionEnd$$4;
      if (v2145) {
        var v2081 = scrollYAdjusted$$4 & 7;
        var tileYLine$$4 = v2081 << 3;
        var v6291 = this.gfxWindowCHRBankPosition;
        var v8734 = scrollYAdjusted$$4 & 248;
        var v6292 = v8734 << 2;
        var v2082 = v6291 | v6292;
        var v6293 = this.currentX;
        var v2083 = v6293 >> 3;
        var tileNumber$$5 = v2082 + v2083;
        var v2084 = this.BGCHRBank1;
        var chrCode$$4 = v2084[tileNumber$$5];
        var v6294 = this.gfxBackgroundBankOffset;
        var v2085 = chrCode$$4 < v6294;
        if (v2085) {
          chrCode$$4 = chrCode$$4 | 256;
        }
        var v2086 = this.BGCHRBank2;
        var attrCode$$2 = v2086[tileNumber$$5];
        var v2087 = this.tileCache;
        var v9819 = attrCode$$2 & 8;
        var v8735 = v9819 << 8;
        var v9820 = attrCode$$2 & 96;
        var v8736 = v9820 << 4;
        var v6295 = v8735 | v8736;
        var v2088 = v6295 | chrCode$$4;
        var tile$$4 = v2087[v2088];
        var v6296 = attrCode$$2 & 7;
        var v2089 = v6296 << 2;
        var v6297 = attrCode$$2 & 128;
        var v2090 = v6297 >> 2;
        var palette$$2 = v2089 | v2090;
        var v6298 = this.windowX;
        var v2091 = scrollXRangeAdjusted$$1 - v6298;
        var texel$$4 = v2091 & 7;
        var v6299 = texel$$4 + pixelPositionEnd$$4;
        var v2092 = v6299 - pixelPosition$$6;
        scrollXRangeAdjusted$$1 = Math.min(8, v2092);
        var v2095 = texel$$4 < scrollXRangeAdjusted$$1;
        for (;v2095;) {
          var v2093 = this.frameBuffer;
          var v2094 = pixelPosition$$6;
          pixelPosition$$6 = pixelPosition$$6 + 1;
          var v6300 = this.gbcBGPalette;
          var v10303 = texel$$4;
          texel$$4 = texel$$4 + 1;
          var v9821 = tileYLine$$4 | v10303;
          var v8737 = tile$$4[v9821];
          var v6301 = palette$$2 | v8737;
          v2093[v2094] = v6300[v6301];
          v2095 = texel$$4 < scrollXRangeAdjusted$$1;
        }
        var v6302 = pixelPositionEnd$$4 - pixelPosition$$6;
        var v2096 = v6302 >> 3;
        scrollXRangeAdjusted$$1 = tileNumber$$5 + v2096;
        var v2121 = tileNumber$$5 < scrollXRangeAdjusted$$1;
        for (;v2121;) {
          var v2097 = this.BGCHRBank1;
          var v2098 = tileNumber$$5 = tileNumber$$5 + 1;
          chrCode$$4 = v2097[v2098];
          var v6303 = this.gfxBackgroundBankOffset;
          var v2099 = chrCode$$4 < v6303;
          if (v2099) {
            chrCode$$4 = chrCode$$4 | 256;
          }
          var v2100 = this.BGCHRBank2;
          attrCode$$2 = v2100[tileNumber$$5];
          var v2101 = this.tileCache;
          var v9822 = attrCode$$2 & 8;
          var v8738 = v9822 << 8;
          var v9823 = attrCode$$2 & 96;
          var v8739 = v9823 << 4;
          var v6304 = v8738 | v8739;
          var v2102 = v6304 | chrCode$$4;
          tile$$4 = v2101[v2102];
          var v6305 = attrCode$$2 & 7;
          var v2103 = v6305 << 2;
          var v6306 = attrCode$$2 & 128;
          var v2104 = v6306 >> 2;
          palette$$2 = v2103 | v2104;
          texel$$4 = tileYLine$$4;
          var v2105 = this.frameBuffer;
          var v2106 = pixelPosition$$6;
          pixelPosition$$6 = pixelPosition$$6 + 1;
          var v6307 = this.gbcBGPalette;
          var v9824 = texel$$4;
          texel$$4 = texel$$4 + 1;
          var v8740 = tile$$4[v9824];
          var v6308 = palette$$2 | v8740;
          v2105[v2106] = v6307[v6308];
          var v2107 = this.frameBuffer;
          var v2108 = pixelPosition$$6;
          pixelPosition$$6 = pixelPosition$$6 + 1;
          var v6309 = this.gbcBGPalette;
          var v9825 = texel$$4;
          texel$$4 = texel$$4 + 1;
          var v8741 = tile$$4[v9825];
          var v6310 = palette$$2 | v8741;
          v2107[v2108] = v6309[v6310];
          var v2109 = this.frameBuffer;
          var v2110 = pixelPosition$$6;
          pixelPosition$$6 = pixelPosition$$6 + 1;
          var v6311 = this.gbcBGPalette;
          var v9826 = texel$$4;
          texel$$4 = texel$$4 + 1;
          var v8742 = tile$$4[v9826];
          var v6312 = palette$$2 | v8742;
          v2109[v2110] = v6311[v6312];
          var v2111 = this.frameBuffer;
          var v2112 = pixelPosition$$6;
          pixelPosition$$6 = pixelPosition$$6 + 1;
          var v6313 = this.gbcBGPalette;
          var v9827 = texel$$4;
          texel$$4 = texel$$4 + 1;
          var v8743 = tile$$4[v9827];
          var v6314 = palette$$2 | v8743;
          v2111[v2112] = v6313[v6314];
          var v2113 = this.frameBuffer;
          var v2114 = pixelPosition$$6;
          pixelPosition$$6 = pixelPosition$$6 + 1;
          var v6315 = this.gbcBGPalette;
          var v9828 = texel$$4;
          texel$$4 = texel$$4 + 1;
          var v8744 = tile$$4[v9828];
          var v6316 = palette$$2 | v8744;
          v2113[v2114] = v6315[v6316];
          var v2115 = this.frameBuffer;
          var v2116 = pixelPosition$$6;
          pixelPosition$$6 = pixelPosition$$6 + 1;
          var v6317 = this.gbcBGPalette;
          var v9829 = texel$$4;
          texel$$4 = texel$$4 + 1;
          var v8745 = tile$$4[v9829];
          var v6318 = palette$$2 | v8745;
          v2115[v2116] = v6317[v6318];
          var v2117 = this.frameBuffer;
          var v2118 = pixelPosition$$6;
          pixelPosition$$6 = pixelPosition$$6 + 1;
          var v6319 = this.gbcBGPalette;
          var v9830 = texel$$4;
          texel$$4 = texel$$4 + 1;
          var v8746 = tile$$4[v9830];
          var v6320 = palette$$2 | v8746;
          v2117[v2118] = v6319[v6320];
          var v2119 = this.frameBuffer;
          var v2120 = pixelPosition$$6;
          pixelPosition$$6 = pixelPosition$$6 + 1;
          var v6321 = this.gbcBGPalette;
          var v8747 = tile$$4[texel$$4];
          var v6322 = palette$$2 | v8747;
          v2119[v2120] = v6321[v6322];
          v2121 = tileNumber$$5 < scrollXRangeAdjusted$$1;
        }
        var v2144 = pixelPosition$$6 < pixelPositionEnd$$4;
        if (v2144) {
          var v2122 = this.BGCHRBank1;
          var v2123 = tileNumber$$5 = tileNumber$$5 + 1;
          chrCode$$4 = v2122[v2123];
          var v6323 = this.gfxBackgroundBankOffset;
          var v2124 = chrCode$$4 < v6323;
          if (v2124) {
            chrCode$$4 = chrCode$$4 | 256;
          }
          var v2125 = this.BGCHRBank2;
          attrCode$$2 = v2125[tileNumber$$5];
          var v2126 = this.tileCache;
          var v9831 = attrCode$$2 & 8;
          var v8748 = v9831 << 8;
          var v9832 = attrCode$$2 & 96;
          var v8749 = v9832 << 4;
          var v6324 = v8748 | v8749;
          var v2127 = v6324 | chrCode$$4;
          tile$$4 = v2126[v2127];
          var v6325 = attrCode$$2 & 7;
          var v2128 = v6325 << 2;
          var v6326 = attrCode$$2 & 128;
          var v2129 = v6326 >> 2;
          palette$$2 = v2128 | v2129;
          var v2143 = pixelPositionEnd$$4 - pixelPosition$$6;
          switch(v2143) {
            case 7:
              var v2130 = this.frameBuffer;
              var v2131 = pixelPosition$$6 + 6;
              var v6327 = this.gbcBGPalette;
              var v9833 = tileYLine$$4 | 6;
              var v8750 = tile$$4[v9833];
              var v6328 = palette$$2 | v8750;
              v2130[v2131] = v6327[v6328];
            case 6:
              var v2132 = this.frameBuffer;
              var v2133 = pixelPosition$$6 + 5;
              var v6329 = this.gbcBGPalette;
              var v9834 = tileYLine$$4 | 5;
              var v8751 = tile$$4[v9834];
              var v6330 = palette$$2 | v8751;
              v2132[v2133] = v6329[v6330];
            case 5:
              var v2134 = this.frameBuffer;
              var v2135 = pixelPosition$$6 + 4;
              var v6331 = this.gbcBGPalette;
              var v9835 = tileYLine$$4 | 4;
              var v8752 = tile$$4[v9835];
              var v6332 = palette$$2 | v8752;
              v2134[v2135] = v6331[v6332];
            case 4:
              var v2136 = this.frameBuffer;
              var v2137 = pixelPosition$$6 + 3;
              var v6333 = this.gbcBGPalette;
              var v9836 = tileYLine$$4 | 3;
              var v8753 = tile$$4[v9836];
              var v6334 = palette$$2 | v8753;
              v2136[v2137] = v6333[v6334];
            case 3:
              var v2138 = this.frameBuffer;
              var v2139 = pixelPosition$$6 + 2;
              var v6335 = this.gbcBGPalette;
              var v9837 = tileYLine$$4 | 2;
              var v8754 = tile$$4[v9837];
              var v6336 = palette$$2 | v8754;
              v2138[v2139] = v6335[v6336];
            case 2:
              var v2140 = this.frameBuffer;
              var v2141 = pixelPosition$$6 + 1;
              var v6337 = this.gbcBGPalette;
              var v9838 = tileYLine$$4 | 1;
              var v8755 = tile$$4[v9838];
              var v6338 = palette$$2 | v8755;
              v2140[v2141] = v6337[v6338];
            case 1:
              var v2142 = this.frameBuffer;
              var v6339 = this.gbcBGPalette;
              var v8756 = tile$$4[tileYLine$$4];
              var v6340 = palette$$2 | v8756;
              v2142[pixelPosition$$6] = v6339[v6340];
          }
        }
      }
    }
  }
  return;
}
function v696(scanlineToRender$$4) {
  var v2207 = this.gfxWindowDisplay;
  if (v2207) {
    var v2148 = this.windowY;
    var scrollYAdjusted$$3 = scanlineToRender$$4 - v2148;
    var v2206 = scrollYAdjusted$$3 >= 0;
    if (v2206) {
      var v2149;
      var v8757 = this.windowX;
      var v6343 = v8757 > 0;
      if (v6343) {
        var v6341 = this.windowX;
        var v6342 = this.currentX;
        v2149 = v6341 + v6342;
      } else {
        v2149 = this.currentX;
      }
      var scrollXRangeAdjusted = v2149;
      var v2150 = this.pixelStart;
      var pixelPosition$$5 = v2150 + scrollXRangeAdjusted;
      var v2151 = this.pixelStart;
      var v2152 = this.pixelEnd;
      var pixelPositionEnd$$3 = v2151 + v2152;
      var v2205 = pixelPosition$$5 < pixelPositionEnd$$3;
      if (v2205) {
        var v2153 = scrollYAdjusted$$3 & 7;
        var tileYLine$$3 = v2153 << 3;
        var v6344 = this.gfxWindowCHRBankPosition;
        var v8758 = scrollYAdjusted$$3 & 248;
        var v6345 = v8758 << 2;
        var v2154 = v6344 | v6345;
        var v6346 = this.currentX;
        var v2155 = v6346 >> 3;
        var tileNumber$$4 = v2154 + v2155;
        var v2156 = this.BGCHRBank1;
        var chrCode$$3 = v2156[tileNumber$$4];
        var v6347 = this.gfxBackgroundBankOffset;
        var v2157 = chrCode$$3 < v6347;
        if (v2157) {
          chrCode$$3 = chrCode$$3 | 256;
        }
        var v2158 = this.tileCache;
        var tile$$3 = v2158[chrCode$$3];
        var v6348 = this.windowX;
        var v2159 = scrollXRangeAdjusted - v6348;
        var texel$$3 = v2159 & 7;
        var v6349 = texel$$3 + pixelPositionEnd$$3;
        var v2160 = v6349 - pixelPosition$$5;
        scrollXRangeAdjusted = Math.min(8, v2160);
        var v2163 = texel$$3 < scrollXRangeAdjusted;
        for (;v2163;) {
          var v2161 = this.frameBuffer;
          var v2162 = pixelPosition$$5;
          pixelPosition$$5 = pixelPosition$$5 + 1;
          var v6350 = this.BGPalette;
          var v9839 = texel$$3;
          texel$$3 = texel$$3 + 1;
          var v8759 = tileYLine$$3 | v9839;
          var v6351 = tile$$3[v8759];
          v2161[v2162] = v6350[v6351];
          v2163 = texel$$3 < scrollXRangeAdjusted;
        }
        var v6352 = pixelPositionEnd$$3 - pixelPosition$$5;
        var v2164 = v6352 >> 3;
        scrollXRangeAdjusted = tileNumber$$4 + v2164;
        var v2185 = tileNumber$$4 < scrollXRangeAdjusted;
        for (;v2185;) {
          var v2165 = this.BGCHRBank1;
          var v2166 = tileNumber$$4 = tileNumber$$4 + 1;
          chrCode$$3 = v2165[v2166];
          var v6353 = this.gfxBackgroundBankOffset;
          var v2167 = chrCode$$3 < v6353;
          if (v2167) {
            chrCode$$3 = chrCode$$3 | 256;
          }
          var v2168 = this.tileCache;
          tile$$3 = v2168[chrCode$$3];
          texel$$3 = tileYLine$$3;
          var v2169 = this.frameBuffer;
          var v2170 = pixelPosition$$5;
          pixelPosition$$5 = pixelPosition$$5 + 1;
          var v6354 = this.BGPalette;
          var v8760 = texel$$3;
          texel$$3 = texel$$3 + 1;
          var v6355 = tile$$3[v8760];
          v2169[v2170] = v6354[v6355];
          var v2171 = this.frameBuffer;
          var v2172 = pixelPosition$$5;
          pixelPosition$$5 = pixelPosition$$5 + 1;
          var v6356 = this.BGPalette;
          var v8761 = texel$$3;
          texel$$3 = texel$$3 + 1;
          var v6357 = tile$$3[v8761];
          v2171[v2172] = v6356[v6357];
          var v2173 = this.frameBuffer;
          var v2174 = pixelPosition$$5;
          pixelPosition$$5 = pixelPosition$$5 + 1;
          var v6358 = this.BGPalette;
          var v8762 = texel$$3;
          texel$$3 = texel$$3 + 1;
          var v6359 = tile$$3[v8762];
          v2173[v2174] = v6358[v6359];
          var v2175 = this.frameBuffer;
          var v2176 = pixelPosition$$5;
          pixelPosition$$5 = pixelPosition$$5 + 1;
          var v6360 = this.BGPalette;
          var v8763 = texel$$3;
          texel$$3 = texel$$3 + 1;
          var v6361 = tile$$3[v8763];
          v2175[v2176] = v6360[v6361];
          var v2177 = this.frameBuffer;
          var v2178 = pixelPosition$$5;
          pixelPosition$$5 = pixelPosition$$5 + 1;
          var v6362 = this.BGPalette;
          var v8764 = texel$$3;
          texel$$3 = texel$$3 + 1;
          var v6363 = tile$$3[v8764];
          v2177[v2178] = v6362[v6363];
          var v2179 = this.frameBuffer;
          var v2180 = pixelPosition$$5;
          pixelPosition$$5 = pixelPosition$$5 + 1;
          var v6364 = this.BGPalette;
          var v8765 = texel$$3;
          texel$$3 = texel$$3 + 1;
          var v6365 = tile$$3[v8765];
          v2179[v2180] = v6364[v6365];
          var v2181 = this.frameBuffer;
          var v2182 = pixelPosition$$5;
          pixelPosition$$5 = pixelPosition$$5 + 1;
          var v6366 = this.BGPalette;
          var v8766 = texel$$3;
          texel$$3 = texel$$3 + 1;
          var v6367 = tile$$3[v8766];
          v2181[v2182] = v6366[v6367];
          var v2183 = this.frameBuffer;
          var v2184 = pixelPosition$$5;
          pixelPosition$$5 = pixelPosition$$5 + 1;
          var v6368 = this.BGPalette;
          var v6369 = tile$$3[texel$$3];
          v2183[v2184] = v6368[v6369];
          v2185 = tileNumber$$4 < scrollXRangeAdjusted;
        }
        var v2204 = pixelPosition$$5 < pixelPositionEnd$$3;
        if (v2204) {
          var v2186 = this.BGCHRBank1;
          var v2187 = tileNumber$$4 = tileNumber$$4 + 1;
          chrCode$$3 = v2186[v2187];
          var v6370 = this.gfxBackgroundBankOffset;
          var v2188 = chrCode$$3 < v6370;
          if (v2188) {
            chrCode$$3 = chrCode$$3 | 256;
          }
          var v2189 = this.tileCache;
          tile$$3 = v2189[chrCode$$3];
          var v2203 = pixelPositionEnd$$3 - pixelPosition$$5;
          switch(v2203) {
            case 7:
              var v2190 = this.frameBuffer;
              var v2191 = pixelPosition$$5 + 6;
              var v6371 = this.BGPalette;
              var v8767 = tileYLine$$3 | 6;
              var v6372 = tile$$3[v8767];
              v2190[v2191] = v6371[v6372];
            case 6:
              var v2192 = this.frameBuffer;
              var v2193 = pixelPosition$$5 + 5;
              var v6373 = this.BGPalette;
              var v8768 = tileYLine$$3 | 5;
              var v6374 = tile$$3[v8768];
              v2192[v2193] = v6373[v6374];
            case 5:
              var v2194 = this.frameBuffer;
              var v2195 = pixelPosition$$5 + 4;
              var v6375 = this.BGPalette;
              var v8769 = tileYLine$$3 | 4;
              var v6376 = tile$$3[v8769];
              v2194[v2195] = v6375[v6376];
            case 4:
              var v2196 = this.frameBuffer;
              var v2197 = pixelPosition$$5 + 3;
              var v6377 = this.BGPalette;
              var v8770 = tileYLine$$3 | 3;
              var v6378 = tile$$3[v8770];
              v2196[v2197] = v6377[v6378];
            case 3:
              var v2198 = this.frameBuffer;
              var v2199 = pixelPosition$$5 + 2;
              var v6379 = this.BGPalette;
              var v8771 = tileYLine$$3 | 2;
              var v6380 = tile$$3[v8771];
              v2198[v2199] = v6379[v6380];
            case 2:
              var v2200 = this.frameBuffer;
              var v2201 = pixelPosition$$5 + 1;
              var v6381 = this.BGPalette;
              var v8772 = tileYLine$$3 | 1;
              var v6382 = tile$$3[v8772];
              v2200[v2201] = v6381[v6382];
            case 1:
              var v2202 = this.frameBuffer;
              var v6383 = this.BGPalette;
              var v6384 = tile$$3[tileYLine$$3];
              v2202[pixelPosition$$5] = v6383[v6384];
          }
        }
      }
    }
  }
  return;
}
function v695(scanlineToRender$$3) {
  var v6385 = this.backgroundY;
  var v2208 = v6385 + scanlineToRender$$3;
  var scrollYAdjusted$$2 = v2208 & 255;
  var v2209 = scrollYAdjusted$$2 & 7;
  var tileYLine$$2 = v2209 << 3;
  var v2210 = this.gfxBackgroundCHRBankPosition;
  var v6386 = scrollYAdjusted$$2 & 248;
  var v2211 = v6386 << 2;
  var tileYDown$$2 = v2210 | v2211;
  var v6387 = this.backgroundX;
  var v6388 = this.currentX;
  var v2212 = v6387 + v6388;
  var scrollXAdjusted$$2 = v2212 & 255;
  var v2213 = this.pixelStart;
  var v2214 = this.currentX;
  var pixelPosition$$4 = v2213 + v2214;
  var v2215 = this.pixelStart;
  var v6389;
  var v9840 = this.gfxWindowDisplay;
  if (v9840) {
    var v10509 = this.windowY;
    var v10304 = scanlineToRender$$3 - v10509;
    v9840 = v10304 >= 0;
  }
  var v8775 = v9840;
  if (v8775) {
    var v10305 = this.windowX;
    var v9841 = Math.max(v10305, 0);
    var v9842 = this.currentX;
    var v8773 = v9841 + v9842;
    var v8774 = this.pixelEnd;
    v6389 = Math.min(v8773, v8774);
  } else {
    v6389 = this.pixelEnd;
  }
  var v2216 = v6389;
  var pixelPositionEnd$$2 = v2215 + v2216;
  var v2217 = scrollXAdjusted$$2 >> 3;
  var tileNumber$$3 = tileYDown$$2 + v2217;
  var v2218 = this.BGCHRBank1;
  var chrCode$$2 = v2218[tileNumber$$3];
  var v6390 = this.gfxBackgroundBankOffset;
  var v2219 = chrCode$$2 < v6390;
  if (v2219) {
    chrCode$$2 = chrCode$$2 | 256;
  }
  var v2220 = this.BGCHRBank2;
  var attrCode$$1 = v2220[tileNumber$$3];
  var v2221 = this.tileCache;
  var v9843 = attrCode$$1 & 8;
  var v8776 = v9843 << 8;
  var v9844 = attrCode$$1 & 96;
  var v8777 = v9844 << 4;
  var v6391 = v8776 | v8777;
  var v2222 = v6391 | chrCode$$2;
  var tile$$2 = v2221[v2222];
  var v2223 = attrCode$$1 & 7;
  var palette$$1 = v2223 << 2;
  var texel$$2 = scrollXAdjusted$$2 & 7;
  var v8778 = texel$$2 < 8;
  if (v8778) {
    v8778 = pixelPosition$$4 < pixelPositionEnd$$2;
  }
  var v6392 = v8778;
  if (v6392) {
    v6392 = scrollXAdjusted$$2 < 256;
  }
  var v2226 = v6392;
  for (;v2226;) {
    var v2224 = this.frameBuffer;
    var v2225 = pixelPosition$$4;
    pixelPosition$$4 = pixelPosition$$4 + 1;
    var v6393 = this.gbcBGPalette;
    var v10306 = texel$$2;
    texel$$2 = texel$$2 + 1;
    var v9845 = tileYLine$$2 | v10306;
    var v8779 = tile$$2[v9845];
    var v6394 = palette$$1 | v8779;
    v2224[v2225] = v6393[v6394];
    ++scrollXAdjusted$$2;
    var v8780 = texel$$2 < 8;
    if (v8780) {
      v8780 = pixelPosition$$4 < pixelPositionEnd$$2;
    }
    var v6395 = v8780;
    if (v6395) {
      v6395 = scrollXAdjusted$$2 < 256;
    }
    v2226 = v6395;
  }
  var v6396 = pixelPositionEnd$$2 - pixelPosition$$4;
  var v6397 = 256 - scrollXAdjusted$$2;
  var v2227 = Math.min(v6396, v6397);
  var scrollXAdjustedAligned$$2 = v2227 >> 3;
  var v6398 = scrollXAdjustedAligned$$2 << 3;
  scrollXAdjusted$$2 = scrollXAdjusted$$2 + v6398;
  scrollXAdjustedAligned$$2 = scrollXAdjustedAligned$$2 + tileNumber$$3;
  var v2251 = tileNumber$$3 < scrollXAdjustedAligned$$2;
  for (;v2251;) {
    var v2228 = this.BGCHRBank1;
    var v2229 = tileNumber$$3 = tileNumber$$3 + 1;
    chrCode$$2 = v2228[v2229];
    var v6399 = this.gfxBackgroundBankOffset;
    var v2230 = chrCode$$2 < v6399;
    if (v2230) {
      chrCode$$2 = chrCode$$2 | 256;
    }
    var v2231 = this.BGCHRBank2;
    attrCode$$1 = v2231[tileNumber$$3];
    var v2232 = this.tileCache;
    var v9846 = attrCode$$1 & 8;
    var v8781 = v9846 << 8;
    var v9847 = attrCode$$1 & 96;
    var v8782 = v9847 << 4;
    var v6400 = v8781 | v8782;
    var v2233 = v6400 | chrCode$$2;
    tile$$2 = v2232[v2233];
    var v2234 = attrCode$$1 & 7;
    palette$$1 = v2234 << 2;
    texel$$2 = tileYLine$$2;
    var v2235 = this.frameBuffer;
    var v2236 = pixelPosition$$4;
    pixelPosition$$4 = pixelPosition$$4 + 1;
    var v6401 = this.gbcBGPalette;
    var v9848 = texel$$2;
    texel$$2 = texel$$2 + 1;
    var v8783 = tile$$2[v9848];
    var v6402 = palette$$1 | v8783;
    v2235[v2236] = v6401[v6402];
    var v2237 = this.frameBuffer;
    var v2238 = pixelPosition$$4;
    pixelPosition$$4 = pixelPosition$$4 + 1;
    var v6403 = this.gbcBGPalette;
    var v9849 = texel$$2;
    texel$$2 = texel$$2 + 1;
    var v8784 = tile$$2[v9849];
    var v6404 = palette$$1 | v8784;
    v2237[v2238] = v6403[v6404];
    var v2239 = this.frameBuffer;
    var v2240 = pixelPosition$$4;
    pixelPosition$$4 = pixelPosition$$4 + 1;
    var v6405 = this.gbcBGPalette;
    var v9850 = texel$$2;
    texel$$2 = texel$$2 + 1;
    var v8785 = tile$$2[v9850];
    var v6406 = palette$$1 | v8785;
    v2239[v2240] = v6405[v6406];
    var v2241 = this.frameBuffer;
    var v2242 = pixelPosition$$4;
    pixelPosition$$4 = pixelPosition$$4 + 1;
    var v6407 = this.gbcBGPalette;
    var v9851 = texel$$2;
    texel$$2 = texel$$2 + 1;
    var v8786 = tile$$2[v9851];
    var v6408 = palette$$1 | v8786;
    v2241[v2242] = v6407[v6408];
    var v2243 = this.frameBuffer;
    var v2244 = pixelPosition$$4;
    pixelPosition$$4 = pixelPosition$$4 + 1;
    var v6409 = this.gbcBGPalette;
    var v9852 = texel$$2;
    texel$$2 = texel$$2 + 1;
    var v8787 = tile$$2[v9852];
    var v6410 = palette$$1 | v8787;
    v2243[v2244] = v6409[v6410];
    var v2245 = this.frameBuffer;
    var v2246 = pixelPosition$$4;
    pixelPosition$$4 = pixelPosition$$4 + 1;
    var v6411 = this.gbcBGPalette;
    var v9853 = texel$$2;
    texel$$2 = texel$$2 + 1;
    var v8788 = tile$$2[v9853];
    var v6412 = palette$$1 | v8788;
    v2245[v2246] = v6411[v6412];
    var v2247 = this.frameBuffer;
    var v2248 = pixelPosition$$4;
    pixelPosition$$4 = pixelPosition$$4 + 1;
    var v6413 = this.gbcBGPalette;
    var v9854 = texel$$2;
    texel$$2 = texel$$2 + 1;
    var v8789 = tile$$2[v9854];
    var v6414 = palette$$1 | v8789;
    v2247[v2248] = v6413[v6414];
    var v2249 = this.frameBuffer;
    var v2250 = pixelPosition$$4;
    pixelPosition$$4 = pixelPosition$$4 + 1;
    var v6415 = this.gbcBGPalette;
    var v8790 = tile$$2[texel$$2];
    var v6416 = palette$$1 | v8790;
    v2249[v2250] = v6415[v6416];
    v2251 = tileNumber$$3 < scrollXAdjustedAligned$$2;
  }
  var v2309 = pixelPosition$$4 < pixelPositionEnd$$2;
  if (v2309) {
    var v2262 = scrollXAdjusted$$2 < 256;
    if (v2262) {
      var v2252 = this.BGCHRBank1;
      var v2253 = tileNumber$$3 = tileNumber$$3 + 1;
      chrCode$$2 = v2252[v2253];
      var v6417 = this.gfxBackgroundBankOffset;
      var v2254 = chrCode$$2 < v6417;
      if (v2254) {
        chrCode$$2 = chrCode$$2 | 256;
      }
      var v2255 = this.BGCHRBank2;
      attrCode$$1 = v2255[tileNumber$$3];
      var v2256 = this.tileCache;
      var v9855 = attrCode$$1 & 8;
      var v8791 = v9855 << 8;
      var v9856 = attrCode$$1 & 96;
      var v8792 = v9856 << 4;
      var v6418 = v8791 | v8792;
      var v2257 = v6418 | chrCode$$2;
      tile$$2 = v2256[v2257];
      var v2258 = attrCode$$1 & 7;
      palette$$1 = v2258 << 2;
      texel$$2 = tileYLine$$2 - 1;
      var v6419 = pixelPosition$$4 < pixelPositionEnd$$2;
      if (v6419) {
        v6419 = scrollXAdjusted$$2 < 256;
      }
      var v2261 = v6419;
      for (;v2261;) {
        var v2259 = this.frameBuffer;
        var v2260 = pixelPosition$$4;
        pixelPosition$$4 = pixelPosition$$4 + 1;
        var v6420 = this.gbcBGPalette;
        var v9857 = texel$$2 = texel$$2 + 1;
        var v8793 = tile$$2[v9857];
        var v6421 = palette$$1 | v8793;
        v2259[v2260] = v6420[v6421];
        ++scrollXAdjusted$$2;
        var v6422 = pixelPosition$$4 < pixelPositionEnd$$2;
        if (v6422) {
          v6422 = scrollXAdjusted$$2 < 256;
        }
        v2261 = v6422;
      }
    }
    var v6423 = pixelPositionEnd$$2 - pixelPosition$$4;
    var v2263 = v6423 >> 3;
    scrollXAdjustedAligned$$2 = v2263 + tileYDown$$2;
    var v2287 = tileYDown$$2 < scrollXAdjustedAligned$$2;
    for (;v2287;) {
      var v2264 = this.BGCHRBank1;
      chrCode$$2 = v2264[tileYDown$$2];
      var v6424 = this.gfxBackgroundBankOffset;
      var v2265 = chrCode$$2 < v6424;
      if (v2265) {
        chrCode$$2 = chrCode$$2 | 256;
      }
      var v2266 = this.BGCHRBank2;
      var v2267 = tileYDown$$2;
      tileYDown$$2 = tileYDown$$2 + 1;
      attrCode$$1 = v2266[v2267];
      var v2268 = this.tileCache;
      var v9858 = attrCode$$1 & 8;
      var v8794 = v9858 << 8;
      var v9859 = attrCode$$1 & 96;
      var v8795 = v9859 << 4;
      var v6425 = v8794 | v8795;
      var v2269 = v6425 | chrCode$$2;
      tile$$2 = v2268[v2269];
      var v2270 = attrCode$$1 & 7;
      palette$$1 = v2270 << 2;
      texel$$2 = tileYLine$$2;
      var v2271 = this.frameBuffer;
      var v2272 = pixelPosition$$4;
      pixelPosition$$4 = pixelPosition$$4 + 1;
      var v6426 = this.gbcBGPalette;
      var v9860 = texel$$2;
      texel$$2 = texel$$2 + 1;
      var v8796 = tile$$2[v9860];
      var v6427 = palette$$1 | v8796;
      v2271[v2272] = v6426[v6427];
      var v2273 = this.frameBuffer;
      var v2274 = pixelPosition$$4;
      pixelPosition$$4 = pixelPosition$$4 + 1;
      var v6428 = this.gbcBGPalette;
      var v9861 = texel$$2;
      texel$$2 = texel$$2 + 1;
      var v8797 = tile$$2[v9861];
      var v6429 = palette$$1 | v8797;
      v2273[v2274] = v6428[v6429];
      var v2275 = this.frameBuffer;
      var v2276 = pixelPosition$$4;
      pixelPosition$$4 = pixelPosition$$4 + 1;
      var v6430 = this.gbcBGPalette;
      var v9862 = texel$$2;
      texel$$2 = texel$$2 + 1;
      var v8798 = tile$$2[v9862];
      var v6431 = palette$$1 | v8798;
      v2275[v2276] = v6430[v6431];
      var v2277 = this.frameBuffer;
      var v2278 = pixelPosition$$4;
      pixelPosition$$4 = pixelPosition$$4 + 1;
      var v6432 = this.gbcBGPalette;
      var v9863 = texel$$2;
      texel$$2 = texel$$2 + 1;
      var v8799 = tile$$2[v9863];
      var v6433 = palette$$1 | v8799;
      v2277[v2278] = v6432[v6433];
      var v2279 = this.frameBuffer;
      var v2280 = pixelPosition$$4;
      pixelPosition$$4 = pixelPosition$$4 + 1;
      var v6434 = this.gbcBGPalette;
      var v9864 = texel$$2;
      texel$$2 = texel$$2 + 1;
      var v8800 = tile$$2[v9864];
      var v6435 = palette$$1 | v8800;
      v2279[v2280] = v6434[v6435];
      var v2281 = this.frameBuffer;
      var v2282 = pixelPosition$$4;
      pixelPosition$$4 = pixelPosition$$4 + 1;
      var v6436 = this.gbcBGPalette;
      var v9865 = texel$$2;
      texel$$2 = texel$$2 + 1;
      var v8801 = tile$$2[v9865];
      var v6437 = palette$$1 | v8801;
      v2281[v2282] = v6436[v6437];
      var v2283 = this.frameBuffer;
      var v2284 = pixelPosition$$4;
      pixelPosition$$4 = pixelPosition$$4 + 1;
      var v6438 = this.gbcBGPalette;
      var v9866 = texel$$2;
      texel$$2 = texel$$2 + 1;
      var v8802 = tile$$2[v9866];
      var v6439 = palette$$1 | v8802;
      v2283[v2284] = v6438[v6439];
      var v2285 = this.frameBuffer;
      var v2286 = pixelPosition$$4;
      pixelPosition$$4 = pixelPosition$$4 + 1;
      var v6440 = this.gbcBGPalette;
      var v8803 = tile$$2[texel$$2];
      var v6441 = palette$$1 | v8803;
      v2285[v2286] = v6440[v6441];
      v2287 = tileYDown$$2 < scrollXAdjustedAligned$$2;
    }
    var v2308 = pixelPosition$$4 < pixelPositionEnd$$2;
    if (v2308) {
      var v2288 = this.BGCHRBank1;
      chrCode$$2 = v2288[tileYDown$$2];
      var v6442 = this.gfxBackgroundBankOffset;
      var v2289 = chrCode$$2 < v6442;
      if (v2289) {
        chrCode$$2 = chrCode$$2 | 256;
      }
      var v2290 = this.BGCHRBank2;
      attrCode$$1 = v2290[tileYDown$$2];
      var v2291 = this.tileCache;
      var v9867 = attrCode$$1 & 8;
      var v8804 = v9867 << 8;
      var v9868 = attrCode$$1 & 96;
      var v8805 = v9868 << 4;
      var v6443 = v8804 | v8805;
      var v2292 = v6443 | chrCode$$2;
      tile$$2 = v2291[v2292];
      var v2293 = attrCode$$1 & 7;
      palette$$1 = v2293 << 2;
      var v2307 = pixelPositionEnd$$2 - pixelPosition$$4;
      switch(v2307) {
        case 7:
          var v2294 = this.frameBuffer;
          var v2295 = pixelPosition$$4 + 6;
          var v6444 = this.gbcBGPalette;
          var v9869 = tileYLine$$2 | 6;
          var v8806 = tile$$2[v9869];
          var v6445 = palette$$1 | v8806;
          v2294[v2295] = v6444[v6445];
        case 6:
          var v2296 = this.frameBuffer;
          var v2297 = pixelPosition$$4 + 5;
          var v6446 = this.gbcBGPalette;
          var v9870 = tileYLine$$2 | 5;
          var v8807 = tile$$2[v9870];
          var v6447 = palette$$1 | v8807;
          v2296[v2297] = v6446[v6447];
        case 5:
          var v2298 = this.frameBuffer;
          var v2299 = pixelPosition$$4 + 4;
          var v6448 = this.gbcBGPalette;
          var v9871 = tileYLine$$2 | 4;
          var v8808 = tile$$2[v9871];
          var v6449 = palette$$1 | v8808;
          v2298[v2299] = v6448[v6449];
        case 4:
          var v2300 = this.frameBuffer;
          var v2301 = pixelPosition$$4 + 3;
          var v6450 = this.gbcBGPalette;
          var v9872 = tileYLine$$2 | 3;
          var v8809 = tile$$2[v9872];
          var v6451 = palette$$1 | v8809;
          v2300[v2301] = v6450[v6451];
        case 3:
          var v2302 = this.frameBuffer;
          var v2303 = pixelPosition$$4 + 2;
          var v6452 = this.gbcBGPalette;
          var v9873 = tileYLine$$2 | 2;
          var v8810 = tile$$2[v9873];
          var v6453 = palette$$1 | v8810;
          v2302[v2303] = v6452[v6453];
        case 2:
          var v2304 = this.frameBuffer;
          var v2305 = pixelPosition$$4 + 1;
          var v6454 = this.gbcBGPalette;
          var v9874 = tileYLine$$2 | 1;
          var v8811 = tile$$2[v9874];
          var v6455 = palette$$1 | v8811;
          v2304[v2305] = v6454[v6455];
        case 1:
          var v2306 = this.frameBuffer;
          var v6456 = this.gbcBGPalette;
          var v8812 = tile$$2[tileYLine$$2];
          var v6457 = palette$$1 | v8812;
          v2306[pixelPosition$$4] = v6456[v6457];
      }
    }
  }
  return;
}
function v694(scanlineToRender$$2) {
  var v6458 = this.backgroundY;
  var v2310 = v6458 + scanlineToRender$$2;
  var scrollYAdjusted$$1 = v2310 & 255;
  var v2311 = scrollYAdjusted$$1 & 7;
  var tileYLine$$1 = v2311 << 3;
  var v2312 = this.gfxBackgroundCHRBankPosition;
  var v6459 = scrollYAdjusted$$1 & 248;
  var v2313 = v6459 << 2;
  var tileYDown$$1 = v2312 | v2313;
  var v6460 = this.backgroundX;
  var v6461 = this.currentX;
  var v2314 = v6460 + v6461;
  var scrollXAdjusted$$1 = v2314 & 255;
  var v2315 = this.pixelStart;
  var v2316 = this.currentX;
  var pixelPosition$$3 = v2315 + v2316;
  var v2317 = this.pixelStart;
  var v6462;
  var v9875 = this.gfxWindowDisplay;
  if (v9875) {
    var v10510 = this.windowY;
    var v10307 = scanlineToRender$$2 - v10510;
    v9875 = v10307 >= 0;
  }
  var v8815 = v9875;
  if (v8815) {
    var v10308 = this.windowX;
    var v9876 = Math.max(v10308, 0);
    var v9877 = this.currentX;
    var v8813 = v9876 + v9877;
    var v8814 = this.pixelEnd;
    v6462 = Math.min(v8813, v8814);
  } else {
    v6462 = this.pixelEnd;
  }
  var v2318 = v6462;
  var pixelPositionEnd$$1 = v2317 + v2318;
  var v2319 = scrollXAdjusted$$1 >> 3;
  var tileNumber$$2 = tileYDown$$1 + v2319;
  var v2320 = this.BGCHRBank1;
  var chrCode$$1 = v2320[tileNumber$$2];
  var v6463 = this.gfxBackgroundBankOffset;
  var v2321 = chrCode$$1 < v6463;
  if (v2321) {
    chrCode$$1 = chrCode$$1 | 256;
  }
  var v2322 = this.BGCHRBank2;
  var attrCode = v2322[tileNumber$$2];
  var v2323 = this.tileCache;
  var v9878 = attrCode & 8;
  var v8816 = v9878 << 8;
  var v9879 = attrCode & 96;
  var v8817 = v9879 << 4;
  var v6464 = v8816 | v8817;
  var v2324 = v6464 | chrCode$$1;
  var tile$$1 = v2323[v2324];
  var v6465 = attrCode & 7;
  var v2325 = v6465 << 2;
  var v6466 = attrCode & 128;
  var v2326 = v6466 >> 2;
  var palette = v2325 | v2326;
  var texel$$1 = scrollXAdjusted$$1 & 7;
  var v8818 = texel$$1 < 8;
  if (v8818) {
    v8818 = pixelPosition$$3 < pixelPositionEnd$$1;
  }
  var v6467 = v8818;
  if (v6467) {
    v6467 = scrollXAdjusted$$1 < 256;
  }
  var v2329 = v6467;
  for (;v2329;) {
    var v2327 = this.frameBuffer;
    var v2328 = pixelPosition$$3;
    pixelPosition$$3 = pixelPosition$$3 + 1;
    var v6468 = this.gbcBGPalette;
    var v10309 = texel$$1;
    texel$$1 = texel$$1 + 1;
    var v9880 = tileYLine$$1 | v10309;
    var v8819 = tile$$1[v9880];
    var v6469 = palette | v8819;
    v2327[v2328] = v6468[v6469];
    ++scrollXAdjusted$$1;
    var v8820 = texel$$1 < 8;
    if (v8820) {
      v8820 = pixelPosition$$3 < pixelPositionEnd$$1;
    }
    var v6470 = v8820;
    if (v6470) {
      v6470 = scrollXAdjusted$$1 < 256;
    }
    v2329 = v6470;
  }
  var v6471 = pixelPositionEnd$$1 - pixelPosition$$3;
  var v6472 = 256 - scrollXAdjusted$$1;
  var v2330 = Math.min(v6471, v6472);
  var scrollXAdjustedAligned$$1 = v2330 >> 3;
  var v6473 = scrollXAdjustedAligned$$1 << 3;
  scrollXAdjusted$$1 = scrollXAdjusted$$1 + v6473;
  scrollXAdjustedAligned$$1 = scrollXAdjustedAligned$$1 + tileNumber$$2;
  var v2355 = tileNumber$$2 < scrollXAdjustedAligned$$1;
  for (;v2355;) {
    var v2331 = this.BGCHRBank1;
    var v2332 = tileNumber$$2 = tileNumber$$2 + 1;
    chrCode$$1 = v2331[v2332];
    var v6474 = this.gfxBackgroundBankOffset;
    var v2333 = chrCode$$1 < v6474;
    if (v2333) {
      chrCode$$1 = chrCode$$1 | 256;
    }
    var v2334 = this.BGCHRBank2;
    attrCode = v2334[tileNumber$$2];
    var v2335 = this.tileCache;
    var v9881 = attrCode & 8;
    var v8821 = v9881 << 8;
    var v9882 = attrCode & 96;
    var v8822 = v9882 << 4;
    var v6475 = v8821 | v8822;
    var v2336 = v6475 | chrCode$$1;
    tile$$1 = v2335[v2336];
    var v6476 = attrCode & 7;
    var v2337 = v6476 << 2;
    var v6477 = attrCode & 128;
    var v2338 = v6477 >> 2;
    palette = v2337 | v2338;
    texel$$1 = tileYLine$$1;
    var v2339 = this.frameBuffer;
    var v2340 = pixelPosition$$3;
    pixelPosition$$3 = pixelPosition$$3 + 1;
    var v6478 = this.gbcBGPalette;
    var v9883 = texel$$1;
    texel$$1 = texel$$1 + 1;
    var v8823 = tile$$1[v9883];
    var v6479 = palette | v8823;
    v2339[v2340] = v6478[v6479];
    var v2341 = this.frameBuffer;
    var v2342 = pixelPosition$$3;
    pixelPosition$$3 = pixelPosition$$3 + 1;
    var v6480 = this.gbcBGPalette;
    var v9884 = texel$$1;
    texel$$1 = texel$$1 + 1;
    var v8824 = tile$$1[v9884];
    var v6481 = palette | v8824;
    v2341[v2342] = v6480[v6481];
    var v2343 = this.frameBuffer;
    var v2344 = pixelPosition$$3;
    pixelPosition$$3 = pixelPosition$$3 + 1;
    var v6482 = this.gbcBGPalette;
    var v9885 = texel$$1;
    texel$$1 = texel$$1 + 1;
    var v8825 = tile$$1[v9885];
    var v6483 = palette | v8825;
    v2343[v2344] = v6482[v6483];
    var v2345 = this.frameBuffer;
    var v2346 = pixelPosition$$3;
    pixelPosition$$3 = pixelPosition$$3 + 1;
    var v6484 = this.gbcBGPalette;
    var v9886 = texel$$1;
    texel$$1 = texel$$1 + 1;
    var v8826 = tile$$1[v9886];
    var v6485 = palette | v8826;
    v2345[v2346] = v6484[v6485];
    var v2347 = this.frameBuffer;
    var v2348 = pixelPosition$$3;
    pixelPosition$$3 = pixelPosition$$3 + 1;
    var v6486 = this.gbcBGPalette;
    var v9887 = texel$$1;
    texel$$1 = texel$$1 + 1;
    var v8827 = tile$$1[v9887];
    var v6487 = palette | v8827;
    v2347[v2348] = v6486[v6487];
    var v2349 = this.frameBuffer;
    var v2350 = pixelPosition$$3;
    pixelPosition$$3 = pixelPosition$$3 + 1;
    var v6488 = this.gbcBGPalette;
    var v9888 = texel$$1;
    texel$$1 = texel$$1 + 1;
    var v8828 = tile$$1[v9888];
    var v6489 = palette | v8828;
    v2349[v2350] = v6488[v6489];
    var v2351 = this.frameBuffer;
    var v2352 = pixelPosition$$3;
    pixelPosition$$3 = pixelPosition$$3 + 1;
    var v6490 = this.gbcBGPalette;
    var v9889 = texel$$1;
    texel$$1 = texel$$1 + 1;
    var v8829 = tile$$1[v9889];
    var v6491 = palette | v8829;
    v2351[v2352] = v6490[v6491];
    var v2353 = this.frameBuffer;
    var v2354 = pixelPosition$$3;
    pixelPosition$$3 = pixelPosition$$3 + 1;
    var v6492 = this.gbcBGPalette;
    var v8830 = tile$$1[texel$$1];
    var v6493 = palette | v8830;
    v2353[v2354] = v6492[v6493];
    v2355 = tileNumber$$2 < scrollXAdjustedAligned$$1;
  }
  var v2416 = pixelPosition$$3 < pixelPositionEnd$$1;
  if (v2416) {
    var v2367 = scrollXAdjusted$$1 < 256;
    if (v2367) {
      var v2356 = this.BGCHRBank1;
      var v2357 = tileNumber$$2 = tileNumber$$2 + 1;
      chrCode$$1 = v2356[v2357];
      var v6494 = this.gfxBackgroundBankOffset;
      var v2358 = chrCode$$1 < v6494;
      if (v2358) {
        chrCode$$1 = chrCode$$1 | 256;
      }
      var v2359 = this.BGCHRBank2;
      attrCode = v2359[tileNumber$$2];
      var v2360 = this.tileCache;
      var v9890 = attrCode & 8;
      var v8831 = v9890 << 8;
      var v9891 = attrCode & 96;
      var v8832 = v9891 << 4;
      var v6495 = v8831 | v8832;
      var v2361 = v6495 | chrCode$$1;
      tile$$1 = v2360[v2361];
      var v6496 = attrCode & 7;
      var v2362 = v6496 << 2;
      var v6497 = attrCode & 128;
      var v2363 = v6497 >> 2;
      palette = v2362 | v2363;
      texel$$1 = tileYLine$$1 - 1;
      var v6498 = pixelPosition$$3 < pixelPositionEnd$$1;
      if (v6498) {
        v6498 = scrollXAdjusted$$1 < 256;
      }
      var v2366 = v6498;
      for (;v2366;) {
        var v2364 = this.frameBuffer;
        var v2365 = pixelPosition$$3;
        pixelPosition$$3 = pixelPosition$$3 + 1;
        var v6499 = this.gbcBGPalette;
        var v9892 = texel$$1 = texel$$1 + 1;
        var v8833 = tile$$1[v9892];
        var v6500 = palette | v8833;
        v2364[v2365] = v6499[v6500];
        ++scrollXAdjusted$$1;
        var v6501 = pixelPosition$$3 < pixelPositionEnd$$1;
        if (v6501) {
          v6501 = scrollXAdjusted$$1 < 256;
        }
        v2366 = v6501;
      }
    }
    var v6502 = pixelPositionEnd$$1 - pixelPosition$$3;
    var v2368 = v6502 >> 3;
    scrollXAdjustedAligned$$1 = v2368 + tileYDown$$1;
    var v2393 = tileYDown$$1 < scrollXAdjustedAligned$$1;
    for (;v2393;) {
      var v2369 = this.BGCHRBank1;
      chrCode$$1 = v2369[tileYDown$$1];
      var v6503 = this.gfxBackgroundBankOffset;
      var v2370 = chrCode$$1 < v6503;
      if (v2370) {
        chrCode$$1 = chrCode$$1 | 256;
      }
      var v2371 = this.BGCHRBank2;
      var v2372 = tileYDown$$1;
      tileYDown$$1 = tileYDown$$1 + 1;
      attrCode = v2371[v2372];
      var v2373 = this.tileCache;
      var v9893 = attrCode & 8;
      var v8834 = v9893 << 8;
      var v9894 = attrCode & 96;
      var v8835 = v9894 << 4;
      var v6504 = v8834 | v8835;
      var v2374 = v6504 | chrCode$$1;
      tile$$1 = v2373[v2374];
      var v6505 = attrCode & 7;
      var v2375 = v6505 << 2;
      var v6506 = attrCode & 128;
      var v2376 = v6506 >> 2;
      palette = v2375 | v2376;
      texel$$1 = tileYLine$$1;
      var v2377 = this.frameBuffer;
      var v2378 = pixelPosition$$3;
      pixelPosition$$3 = pixelPosition$$3 + 1;
      var v6507 = this.gbcBGPalette;
      var v9895 = texel$$1;
      texel$$1 = texel$$1 + 1;
      var v8836 = tile$$1[v9895];
      var v6508 = palette | v8836;
      v2377[v2378] = v6507[v6508];
      var v2379 = this.frameBuffer;
      var v2380 = pixelPosition$$3;
      pixelPosition$$3 = pixelPosition$$3 + 1;
      var v6509 = this.gbcBGPalette;
      var v9896 = texel$$1;
      texel$$1 = texel$$1 + 1;
      var v8837 = tile$$1[v9896];
      var v6510 = palette | v8837;
      v2379[v2380] = v6509[v6510];
      var v2381 = this.frameBuffer;
      var v2382 = pixelPosition$$3;
      pixelPosition$$3 = pixelPosition$$3 + 1;
      var v6511 = this.gbcBGPalette;
      var v9897 = texel$$1;
      texel$$1 = texel$$1 + 1;
      var v8838 = tile$$1[v9897];
      var v6512 = palette | v8838;
      v2381[v2382] = v6511[v6512];
      var v2383 = this.frameBuffer;
      var v2384 = pixelPosition$$3;
      pixelPosition$$3 = pixelPosition$$3 + 1;
      var v6513 = this.gbcBGPalette;
      var v9898 = texel$$1;
      texel$$1 = texel$$1 + 1;
      var v8839 = tile$$1[v9898];
      var v6514 = palette | v8839;
      v2383[v2384] = v6513[v6514];
      var v2385 = this.frameBuffer;
      var v2386 = pixelPosition$$3;
      pixelPosition$$3 = pixelPosition$$3 + 1;
      var v6515 = this.gbcBGPalette;
      var v9899 = texel$$1;
      texel$$1 = texel$$1 + 1;
      var v8840 = tile$$1[v9899];
      var v6516 = palette | v8840;
      v2385[v2386] = v6515[v6516];
      var v2387 = this.frameBuffer;
      var v2388 = pixelPosition$$3;
      pixelPosition$$3 = pixelPosition$$3 + 1;
      var v6517 = this.gbcBGPalette;
      var v9900 = texel$$1;
      texel$$1 = texel$$1 + 1;
      var v8841 = tile$$1[v9900];
      var v6518 = palette | v8841;
      v2387[v2388] = v6517[v6518];
      var v2389 = this.frameBuffer;
      var v2390 = pixelPosition$$3;
      pixelPosition$$3 = pixelPosition$$3 + 1;
      var v6519 = this.gbcBGPalette;
      var v9901 = texel$$1;
      texel$$1 = texel$$1 + 1;
      var v8842 = tile$$1[v9901];
      var v6520 = palette | v8842;
      v2389[v2390] = v6519[v6520];
      var v2391 = this.frameBuffer;
      var v2392 = pixelPosition$$3;
      pixelPosition$$3 = pixelPosition$$3 + 1;
      var v6521 = this.gbcBGPalette;
      var v8843 = tile$$1[texel$$1];
      var v6522 = palette | v8843;
      v2391[v2392] = v6521[v6522];
      v2393 = tileYDown$$1 < scrollXAdjustedAligned$$1;
    }
    var v2415 = pixelPosition$$3 < pixelPositionEnd$$1;
    if (v2415) {
      var v2394 = this.BGCHRBank1;
      chrCode$$1 = v2394[tileYDown$$1];
      var v6523 = this.gfxBackgroundBankOffset;
      var v2395 = chrCode$$1 < v6523;
      if (v2395) {
        chrCode$$1 = chrCode$$1 | 256;
      }
      var v2396 = this.BGCHRBank2;
      attrCode = v2396[tileYDown$$1];
      var v2397 = this.tileCache;
      var v9902 = attrCode & 8;
      var v8844 = v9902 << 8;
      var v9903 = attrCode & 96;
      var v8845 = v9903 << 4;
      var v6524 = v8844 | v8845;
      var v2398 = v6524 | chrCode$$1;
      tile$$1 = v2397[v2398];
      var v6525 = attrCode & 7;
      var v2399 = v6525 << 2;
      var v6526 = attrCode & 128;
      var v2400 = v6526 >> 2;
      palette = v2399 | v2400;
      var v2414 = pixelPositionEnd$$1 - pixelPosition$$3;
      switch(v2414) {
        case 7:
          var v2401 = this.frameBuffer;
          var v2402 = pixelPosition$$3 + 6;
          var v6527 = this.gbcBGPalette;
          var v9904 = tileYLine$$1 | 6;
          var v8846 = tile$$1[v9904];
          var v6528 = palette | v8846;
          v2401[v2402] = v6527[v6528];
        case 6:
          var v2403 = this.frameBuffer;
          var v2404 = pixelPosition$$3 + 5;
          var v6529 = this.gbcBGPalette;
          var v9905 = tileYLine$$1 | 5;
          var v8847 = tile$$1[v9905];
          var v6530 = palette | v8847;
          v2403[v2404] = v6529[v6530];
        case 5:
          var v2405 = this.frameBuffer;
          var v2406 = pixelPosition$$3 + 4;
          var v6531 = this.gbcBGPalette;
          var v9906 = tileYLine$$1 | 4;
          var v8848 = tile$$1[v9906];
          var v6532 = palette | v8848;
          v2405[v2406] = v6531[v6532];
        case 4:
          var v2407 = this.frameBuffer;
          var v2408 = pixelPosition$$3 + 3;
          var v6533 = this.gbcBGPalette;
          var v9907 = tileYLine$$1 | 3;
          var v8849 = tile$$1[v9907];
          var v6534 = palette | v8849;
          v2407[v2408] = v6533[v6534];
        case 3:
          var v2409 = this.frameBuffer;
          var v2410 = pixelPosition$$3 + 2;
          var v6535 = this.gbcBGPalette;
          var v9908 = tileYLine$$1 | 2;
          var v8850 = tile$$1[v9908];
          var v6536 = palette | v8850;
          v2409[v2410] = v6535[v6536];
        case 2:
          var v2411 = this.frameBuffer;
          var v2412 = pixelPosition$$3 + 1;
          var v6537 = this.gbcBGPalette;
          var v9909 = tileYLine$$1 | 1;
          var v8851 = tile$$1[v9909];
          var v6538 = palette | v8851;
          v2411[v2412] = v6537[v6538];
        case 1:
          var v2413 = this.frameBuffer;
          var v6539 = this.gbcBGPalette;
          var v8852 = tile$$1[tileYLine$$1];
          var v6540 = palette | v8852;
          v2413[pixelPosition$$3] = v6539[v6540];
      }
    }
  }
  return;
}
function v693(scanlineToRender$$1) {
  var v6541 = this.backgroundY;
  var v2417 = v6541 + scanlineToRender$$1;
  var scrollYAdjusted = v2417 & 255;
  var v2418 = scrollYAdjusted & 7;
  var tileYLine = v2418 << 3;
  var v2419 = this.gfxBackgroundCHRBankPosition;
  var v6542 = scrollYAdjusted & 248;
  var v2420 = v6542 << 2;
  var tileYDown = v2419 | v2420;
  var v6543 = this.backgroundX;
  var v6544 = this.currentX;
  var v2421 = v6543 + v6544;
  var scrollXAdjusted = v2421 & 255;
  var v2422 = this.pixelStart;
  var v2423 = this.currentX;
  var pixelPosition$$2 = v2422 + v2423;
  var v2424 = this.pixelStart;
  var v6545;
  var v9910 = this.gfxWindowDisplay;
  if (v9910) {
    var v10511 = this.windowY;
    var v10310 = scanlineToRender$$1 - v10511;
    v9910 = v10310 >= 0;
  }
  var v8855 = v9910;
  if (v8855) {
    var v10311 = this.windowX;
    var v9911 = Math.max(v10311, 0);
    var v9912 = this.currentX;
    var v8853 = v9911 + v9912;
    var v8854 = this.pixelEnd;
    v6545 = Math.min(v8853, v8854);
  } else {
    v6545 = this.pixelEnd;
  }
  var v2425 = v6545;
  var pixelPositionEnd = v2424 + v2425;
  var v2426 = scrollXAdjusted >> 3;
  var tileNumber$$1 = tileYDown + v2426;
  var v2427 = this.BGCHRBank1;
  var chrCode = v2427[tileNumber$$1];
  var v6546 = this.gfxBackgroundBankOffset;
  var v2428 = chrCode < v6546;
  if (v2428) {
    chrCode = chrCode | 256;
  }
  var v2429 = this.tileCache;
  var tile = v2429[chrCode];
  var texel = scrollXAdjusted & 7;
  var v8856 = texel < 8;
  if (v8856) {
    v8856 = pixelPosition$$2 < pixelPositionEnd;
  }
  var v6547 = v8856;
  if (v6547) {
    v6547 = scrollXAdjusted < 256;
  }
  var v2432 = v6547;
  for (;v2432;) {
    var v2430 = this.frameBuffer;
    var v2431 = pixelPosition$$2;
    pixelPosition$$2 = pixelPosition$$2 + 1;
    var v6548 = this.BGPalette;
    var v9913 = texel;
    texel = texel + 1;
    var v8857 = tileYLine | v9913;
    var v6549 = tile[v8857];
    v2430[v2431] = v6548[v6549];
    ++scrollXAdjusted;
    var v8858 = texel < 8;
    if (v8858) {
      v8858 = pixelPosition$$2 < pixelPositionEnd;
    }
    var v6550 = v8858;
    if (v6550) {
      v6550 = scrollXAdjusted < 256;
    }
    v2432 = v6550;
  }
  var v6551 = pixelPositionEnd - pixelPosition$$2;
  var v6552 = 256 - scrollXAdjusted;
  var v2433 = Math.min(v6551, v6552);
  var scrollXAdjustedAligned = v2433 >> 3;
  var v6553 = scrollXAdjustedAligned << 3;
  scrollXAdjusted = scrollXAdjusted + v6553;
  scrollXAdjustedAligned = scrollXAdjustedAligned + tileNumber$$1;
  var v2454 = tileNumber$$1 < scrollXAdjustedAligned;
  for (;v2454;) {
    var v2434 = this.BGCHRBank1;
    var v2435 = tileNumber$$1 = tileNumber$$1 + 1;
    chrCode = v2434[v2435];
    var v6554 = this.gfxBackgroundBankOffset;
    var v2436 = chrCode < v6554;
    if (v2436) {
      chrCode = chrCode | 256;
    }
    var v2437 = this.tileCache;
    tile = v2437[chrCode];
    texel = tileYLine;
    var v2438 = this.frameBuffer;
    var v2439 = pixelPosition$$2;
    pixelPosition$$2 = pixelPosition$$2 + 1;
    var v6555 = this.BGPalette;
    var v8859 = texel;
    texel = texel + 1;
    var v6556 = tile[v8859];
    v2438[v2439] = v6555[v6556];
    var v2440 = this.frameBuffer;
    var v2441 = pixelPosition$$2;
    pixelPosition$$2 = pixelPosition$$2 + 1;
    var v6557 = this.BGPalette;
    var v8860 = texel;
    texel = texel + 1;
    var v6558 = tile[v8860];
    v2440[v2441] = v6557[v6558];
    var v2442 = this.frameBuffer;
    var v2443 = pixelPosition$$2;
    pixelPosition$$2 = pixelPosition$$2 + 1;
    var v6559 = this.BGPalette;
    var v8861 = texel;
    texel = texel + 1;
    var v6560 = tile[v8861];
    v2442[v2443] = v6559[v6560];
    var v2444 = this.frameBuffer;
    var v2445 = pixelPosition$$2;
    pixelPosition$$2 = pixelPosition$$2 + 1;
    var v6561 = this.BGPalette;
    var v8862 = texel;
    texel = texel + 1;
    var v6562 = tile[v8862];
    v2444[v2445] = v6561[v6562];
    var v2446 = this.frameBuffer;
    var v2447 = pixelPosition$$2;
    pixelPosition$$2 = pixelPosition$$2 + 1;
    var v6563 = this.BGPalette;
    var v8863 = texel;
    texel = texel + 1;
    var v6564 = tile[v8863];
    v2446[v2447] = v6563[v6564];
    var v2448 = this.frameBuffer;
    var v2449 = pixelPosition$$2;
    pixelPosition$$2 = pixelPosition$$2 + 1;
    var v6565 = this.BGPalette;
    var v8864 = texel;
    texel = texel + 1;
    var v6566 = tile[v8864];
    v2448[v2449] = v6565[v6566];
    var v2450 = this.frameBuffer;
    var v2451 = pixelPosition$$2;
    pixelPosition$$2 = pixelPosition$$2 + 1;
    var v6567 = this.BGPalette;
    var v8865 = texel;
    texel = texel + 1;
    var v6568 = tile[v8865];
    v2450[v2451] = v6567[v6568];
    var v2452 = this.frameBuffer;
    var v2453 = pixelPosition$$2;
    pixelPosition$$2 = pixelPosition$$2 + 1;
    var v6569 = this.BGPalette;
    var v6570 = tile[texel];
    v2452[v2453] = v6569[v6570];
    v2454 = tileNumber$$1 < scrollXAdjustedAligned;
  }
  var v2503 = pixelPosition$$2 < pixelPositionEnd;
  if (v2503) {
    var v2462 = scrollXAdjusted < 256;
    if (v2462) {
      var v2455 = this.BGCHRBank1;
      var v2456 = tileNumber$$1 = tileNumber$$1 + 1;
      chrCode = v2455[v2456];
      var v6571 = this.gfxBackgroundBankOffset;
      var v2457 = chrCode < v6571;
      if (v2457) {
        chrCode = chrCode | 256;
      }
      var v2458 = this.tileCache;
      tile = v2458[chrCode];
      texel = tileYLine - 1;
      var v6572 = pixelPosition$$2 < pixelPositionEnd;
      if (v6572) {
        v6572 = scrollXAdjusted < 256;
      }
      var v2461 = v6572;
      for (;v2461;) {
        var v2459 = this.frameBuffer;
        var v2460 = pixelPosition$$2;
        pixelPosition$$2 = pixelPosition$$2 + 1;
        var v6573 = this.BGPalette;
        var v8866 = texel = texel + 1;
        var v6574 = tile[v8866];
        v2459[v2460] = v6573[v6574];
        ++scrollXAdjusted;
        var v6575 = pixelPosition$$2 < pixelPositionEnd;
        if (v6575) {
          v6575 = scrollXAdjusted < 256;
        }
        v2461 = v6575;
      }
    }
    var v6576 = pixelPositionEnd - pixelPosition$$2;
    var v2463 = v6576 >> 3;
    scrollXAdjustedAligned = v2463 + tileYDown;
    var v2484 = tileYDown < scrollXAdjustedAligned;
    for (;v2484;) {
      var v2464 = this.BGCHRBank1;
      var v2465 = tileYDown;
      tileYDown = tileYDown + 1;
      chrCode = v2464[v2465];
      var v6577 = this.gfxBackgroundBankOffset;
      var v2466 = chrCode < v6577;
      if (v2466) {
        chrCode = chrCode | 256;
      }
      var v2467 = this.tileCache;
      tile = v2467[chrCode];
      texel = tileYLine;
      var v2468 = this.frameBuffer;
      var v2469 = pixelPosition$$2;
      pixelPosition$$2 = pixelPosition$$2 + 1;
      var v6578 = this.BGPalette;
      var v8867 = texel;
      texel = texel + 1;
      var v6579 = tile[v8867];
      v2468[v2469] = v6578[v6579];
      var v2470 = this.frameBuffer;
      var v2471 = pixelPosition$$2;
      pixelPosition$$2 = pixelPosition$$2 + 1;
      var v6580 = this.BGPalette;
      var v8868 = texel;
      texel = texel + 1;
      var v6581 = tile[v8868];
      v2470[v2471] = v6580[v6581];
      var v2472 = this.frameBuffer;
      var v2473 = pixelPosition$$2;
      pixelPosition$$2 = pixelPosition$$2 + 1;
      var v6582 = this.BGPalette;
      var v8869 = texel;
      texel = texel + 1;
      var v6583 = tile[v8869];
      v2472[v2473] = v6582[v6583];
      var v2474 = this.frameBuffer;
      var v2475 = pixelPosition$$2;
      pixelPosition$$2 = pixelPosition$$2 + 1;
      var v6584 = this.BGPalette;
      var v8870 = texel;
      texel = texel + 1;
      var v6585 = tile[v8870];
      v2474[v2475] = v6584[v6585];
      var v2476 = this.frameBuffer;
      var v2477 = pixelPosition$$2;
      pixelPosition$$2 = pixelPosition$$2 + 1;
      var v6586 = this.BGPalette;
      var v8871 = texel;
      texel = texel + 1;
      var v6587 = tile[v8871];
      v2476[v2477] = v6586[v6587];
      var v2478 = this.frameBuffer;
      var v2479 = pixelPosition$$2;
      pixelPosition$$2 = pixelPosition$$2 + 1;
      var v6588 = this.BGPalette;
      var v8872 = texel;
      texel = texel + 1;
      var v6589 = tile[v8872];
      v2478[v2479] = v6588[v6589];
      var v2480 = this.frameBuffer;
      var v2481 = pixelPosition$$2;
      pixelPosition$$2 = pixelPosition$$2 + 1;
      var v6590 = this.BGPalette;
      var v8873 = texel;
      texel = texel + 1;
      var v6591 = tile[v8873];
      v2480[v2481] = v6590[v6591];
      var v2482 = this.frameBuffer;
      var v2483 = pixelPosition$$2;
      pixelPosition$$2 = pixelPosition$$2 + 1;
      var v6592 = this.BGPalette;
      var v6593 = tile[texel];
      v2482[v2483] = v6592[v6593];
      v2484 = tileYDown < scrollXAdjustedAligned;
    }
    var v2502 = pixelPosition$$2 < pixelPositionEnd;
    if (v2502) {
      var v2485 = this.BGCHRBank1;
      chrCode = v2485[tileYDown];
      var v6594 = this.gfxBackgroundBankOffset;
      var v2486 = chrCode < v6594;
      if (v2486) {
        chrCode = chrCode | 256;
      }
      var v2487 = this.tileCache;
      tile = v2487[chrCode];
      var v2501 = pixelPositionEnd - pixelPosition$$2;
      switch(v2501) {
        case 7:
          var v2488 = this.frameBuffer;
          var v2489 = pixelPosition$$2 + 6;
          var v6595 = this.BGPalette;
          var v8874 = tileYLine | 6;
          var v6596 = tile[v8874];
          v2488[v2489] = v6595[v6596];
        case 6:
          var v2490 = this.frameBuffer;
          var v2491 = pixelPosition$$2 + 5;
          var v6597 = this.BGPalette;
          var v8875 = tileYLine | 5;
          var v6598 = tile[v8875];
          v2490[v2491] = v6597[v6598];
        case 5:
          var v2492 = this.frameBuffer;
          var v2493 = pixelPosition$$2 + 4;
          var v6599 = this.BGPalette;
          var v8876 = tileYLine | 4;
          var v6600 = tile[v8876];
          v2492[v2493] = v6599[v6600];
        case 4:
          var v2494 = this.frameBuffer;
          var v2495 = pixelPosition$$2 + 3;
          var v6601 = this.BGPalette;
          var v8877 = tileYLine | 3;
          var v6602 = tile[v8877];
          v2494[v2495] = v6601[v6602];
        case 3:
          var v2496 = this.frameBuffer;
          var v2497 = pixelPosition$$2 + 2;
          var v6603 = this.BGPalette;
          var v8878 = tileYLine | 2;
          var v6604 = tile[v8878];
          v2496[v2497] = v6603[v6604];
        case 2:
          var v2498 = this.frameBuffer;
          var v2499 = pixelPosition$$2 + 1;
          var v6605 = this.BGPalette;
          var v8879 = tileYLine | 1;
          var v6606 = tile[v8879];
          v2498[v2499] = v6605[v6606];
        case 1:
          var v2500 = this.frameBuffer;
          var v6607 = this.BGPalette;
          var v6608 = tile[tileYLine];
          v2500[pixelPosition$$2] = v6607[v6608];
      }
    }
  }
  return;
}
function v692(index$$61, data$$29) {
  var v8880 = this.gbcOBJRawPalette;
  var v6609 = v8880[index$$61];
  var v2508 = v6609 != data$$29;
  if (v2508) {
    var v2504 = this.gbcOBJRawPalette;
    v2504[index$$61] = data$$29;
    var v6610 = index$$61 & 6;
    var v2507 = v6610 > 0;
    if (v2507) {
      this.midScanLineJIT();
      var v2505 = this.gbcOBJPalette;
      var v2506 = index$$61 >> 1;
      var v10512 = this.gbcOBJRawPalette;
      var v10513 = index$$61 | 1;
      var v10312 = v10512[v10513];
      var v9914 = v10312 << 8;
      var v10313 = this.gbcOBJRawPalette;
      var v10314 = index$$61 & 62;
      var v9915 = v10313[v10314];
      var v8881 = v9914 | v9915;
      var v6611 = this.RGBTint(v8881);
      v2505[v2506] = 16777216 | v6611;
    }
  }
  return;
}
function v691(index$$60, data$$28) {
  var v8882 = this.gbcBGRawPalette;
  var v6612 = v8882[index$$60];
  var v2519 = v6612 != data$$28;
  if (v2519) {
    this.midScanLineJIT();
    var v2509 = this.gbcBGRawPalette;
    v2509[index$$60] = data$$28;
    var v6613 = index$$60 & 6;
    var v2518 = v6613 == 0;
    if (v2518) {
      var v10315 = this.gbcBGRawPalette;
      var v10316 = index$$60 | 1;
      var v9916 = v10315[v10316];
      var v8883 = v9916 << 8;
      var v9917 = this.gbcBGRawPalette;
      var v9918 = index$$60 & 62;
      var v8884 = v9917[v9918];
      var v6614 = v8883 | v8884;
      var v2510 = this.RGBTint(v6614);
      data$$28 = 33554432 | v2510;
      index$$60 = index$$60 >> 1;
      var v2511 = this.gbcBGPalette;
      v2511[index$$60] = data$$28;
      var v2512 = this.gbcBGPalette;
      var v2513 = 32 | index$$60;
      v2512[v2513] = 16777216 | data$$28;
    } else {
      var v9919 = this.gbcBGRawPalette;
      var v9920 = index$$60 | 1;
      var v8885 = v9919[v9920];
      var v6615 = v8885 << 8;
      var v8886 = this.gbcBGRawPalette;
      var v8887 = index$$60 & 62;
      var v6616 = v8886[v8887];
      var v2514 = v6615 | v6616;
      data$$28 = this.RGBTint(v2514);
      index$$60 = index$$60 >> 1;
      var v2515 = this.gbcBGPalette;
      v2515[index$$60] = data$$28;
      var v2516 = this.gbcBGPalette;
      var v2517 = 32 | index$$60;
      v2516[v2517] = 16777216 | data$$28;
    }
  }
  return;
}
function v690(index$$59, data$$27) {
  var v2520 = this.gbOBJColorizedPalette;
  var v2521 = index$$59 | 1;
  var v6617 = this.cachedOBJPaletteConversion;
  var v9921 = data$$27 >> 2;
  var v8888 = v9921 & 3;
  var v6618 = index$$59 | v8888;
  v2520[v2521] = v6617[v6618];
  var v2522 = this.gbOBJColorizedPalette;
  var v2523 = index$$59 | 2;
  var v6619 = this.cachedOBJPaletteConversion;
  var v9922 = data$$27 >> 4;
  var v8889 = v9922 & 3;
  var v6620 = index$$59 | v8889;
  v2522[v2523] = v6619[v6620];
  var v2524 = this.gbOBJColorizedPalette;
  var v2525 = index$$59 | 3;
  var v6621 = this.cachedOBJPaletteConversion;
  var v8890 = data$$27 >> 6;
  var v6622 = index$$59 | v8890;
  v2524[v2525] = v6621[v6622];
  return;
}
function v689(index$$58, data$$26) {
  var v2526 = this.gbOBJPalette;
  var v2527 = index$$58 | 1;
  var v6623 = this.colors;
  var v8891 = data$$26 >> 2;
  var v6624 = v8891 & 3;
  v2526[v2527] = v6623[v6624];
  var v2528 = this.gbOBJPalette;
  var v2529 = index$$58 | 2;
  var v6625 = this.colors;
  var v8892 = data$$26 >> 4;
  var v6626 = v8892 & 3;
  v2528[v2529] = v6625[v6626];
  var v2530 = this.gbOBJPalette;
  var v2531 = index$$58 | 3;
  var v6627 = this.colors;
  var v6628 = data$$26 >> 6;
  v2530[v2531] = v6627[v6628];
  return;
}
function v688(data$$25) {
  var v2532 = this.gbBGColorizedPalette;
  var v8893 = this.cachedBGPaletteConversion;
  var v8894 = data$$25 & 3;
  var v6629 = v8893[v8894];
  v2532[0] = v6629 | 33554432;
  var v2533 = this.gbBGColorizedPalette;
  var v6630 = this.cachedBGPaletteConversion;
  var v8895 = data$$25 >> 2;
  var v6631 = v8895 & 3;
  v2533[1] = v6630[v6631];
  var v2534 = this.gbBGColorizedPalette;
  var v6632 = this.cachedBGPaletteConversion;
  var v8896 = data$$25 >> 4;
  var v6633 = v8896 & 3;
  v2534[2] = v6632[v6633];
  var v2535 = this.gbBGColorizedPalette;
  var v6634 = this.cachedBGPaletteConversion;
  var v6635 = data$$25 >> 6;
  v2535[3] = v6634[v6635];
  return;
}
function v687(data$$24) {
  var v2536 = this.gbBGPalette;
  var v8897 = this.colors;
  var v8898 = data$$24 & 3;
  var v6636 = v8897[v8898];
  v2536[0] = v6636 | 33554432;
  var v2537 = this.gbBGPalette;
  var v6637 = this.colors;
  var v8899 = data$$24 >> 2;
  var v6638 = v8899 & 3;
  v2537[1] = v6637[v6638];
  var v2538 = this.gbBGPalette;
  var v6639 = this.colors;
  var v8900 = data$$24 >> 4;
  var v6640 = v8900 & 3;
  v2538[2] = v6639[v6640];
  var v2539 = this.gbBGPalette;
  var v6641 = this.colors;
  var v6642 = data$$24 >> 6;
  v2539[3] = v6641[v6642];
  return;
}
function v686() {
  var counter = 0;
  var v2542 = counter < 4;
  for (;v2542;) {
    var adjustedIndex = counter << 1;
    var v2540 = this.cachedBGPaletteConversion;
    var v10317 = this.gbcBGRawPalette;
    var v10318 = adjustedIndex | 1;
    var v9923 = v10317[v10318];
    var v8901 = v9923 << 8;
    var v9924 = this.gbcBGRawPalette;
    var v8902 = v9924[adjustedIndex];
    var v6643 = v8901 | v8902;
    var v10678 = this.RGBTint(v6643);
    v2540[counter] = v10678;
    var v2541 = this.cachedOBJPaletteConversion;
    var v10319 = this.gbcOBJRawPalette;
    var v10320 = adjustedIndex | 1;
    var v9925 = v10319[v10320];
    var v8903 = v9925 << 8;
    var v9926 = this.gbcOBJRawPalette;
    var v8904 = v9926[adjustedIndex];
    var v6644 = v8903 | v8904;
    var v10679 = this.RGBTint(v6644);
    v2541[counter] = v10679;
    counter++;
    v2542 = counter < 4;
  }
  counter = 4;
  var v2544 = counter < 8;
  for (;v2544;) {
    adjustedIndex = counter << 1;
    var v2543 = this.cachedOBJPaletteConversion;
    var v10321 = this.gbcOBJRawPalette;
    var v10322 = adjustedIndex | 1;
    var v9927 = v10321[v10322];
    var v8905 = v9927 << 8;
    var v9928 = this.gbcOBJRawPalette;
    var v8906 = v9928[adjustedIndex];
    var v6645 = v8905 | v8906;
    var v10680 = this.RGBTint(v6645);
    v2543[counter] = v10680;
    counter++;
    v2544 = counter < 8;
  }
  this.updateGBBGPalette = this.updateGBColorizedBGPalette;
  this.updateGBOBJPalette = this.updateGBColorizedOBJPalette;
  var v6646 = this.memory;
  var v2545 = v6646[65351];
  this.updateGBBGPalette(v2545);
  var v6647 = this.memory;
  var v2546 = v6647[65352];
  this.updateGBOBJPalette(0, v2546);
  var v6648 = this.memory;
  var v2547 = v6648[65353];
  this.updateGBOBJPalette(1, v2547);
  this.colorizedGBPalettes = true;
  return;
}
function v685(value$$28) {
  var r = value$$28 & 31;
  var v2548 = value$$28 >> 5;
  var g = v2548 & 31;
  var v2549 = value$$28 >> 10;
  var b = v2549 & 31;
  var v10514 = r * 13;
  var v10515 = g * 2;
  var v10323 = v10514 + v10515;
  var v9929 = v10323 + b;
  var v8907 = v9929 >> 1;
  var v6649 = v8907 << 16;
  var v9930 = g * 3;
  var v8908 = v9930 + b;
  var v6650 = v8908 << 9;
  var v2550 = v6649 | v6650;
  var v9931 = r * 3;
  var v9932 = g * 2;
  var v8909 = v9931 + v9932;
  var v8910 = b * 11;
  var v6651 = v8909 + v8910;
  var v2551 = v6651 >> 1;
  return v2550 | v2551;
}
function v684() {
  var v2552;
  var v6652 = this.LCDisOn;
  if (v6652) {
    v2552 = this.LINECONTROL;
  } else {
    v2552 = this.DISPLAYOFFCONTROL;
  }
  this.LCDCONTROL = v2552;
  var tileIndex = 0;
  var v6653 = this.cGBC;
  var v2558 = !v6653;
  if (v2558) {
    var v2553 = this.colorizedGBPalettes;
    if (v2553) {
      this.BGPalette = this.gbBGColorizedPalette;
      this.OBJPalette = this.gbOBJColorizedPalette;
      this.updateGBBGPalette = this.updateGBColorizedBGPalette;
      this.updateGBOBJPalette = this.updateGBColorizedOBJPalette;
    } else {
      this.BGPalette = this.gbBGPalette;
      this.OBJPalette = this.gbOBJPalette;
    }
    var v10681 = this.generateCacheArray(1792);
    this.tileCache = v10681;
    tileIndex = 32768;
    var v2554 = tileIndex < 36864;
    for (;v2554;) {
      this.generateGBOAMTileLine(tileIndex);
      tileIndex = tileIndex + 2;
      v2554 = tileIndex < 36864;
    }
    tileIndex = 36864;
    var v2555 = tileIndex < 38912;
    for (;v2555;) {
      this.generateGBTileLine(tileIndex);
      tileIndex = tileIndex + 2;
      v2555 = tileIndex < 38912;
    }
    var v10682 = this.getTypedArray(256, 0, "uint8");
    this.sortBuffer = v10682;
    var v10683 = this.getTypedArray(10, 0, "int32");
    this.OAMAddressCache = v10683;
  } else {
    var v2556;
    var v8911 = this.currVRAMBank;
    var v6654 = v8911 > 0;
    if (v6654) {
      v2556 = this.BGCHRBank2;
    } else {
      v2556 = this.BGCHRBank1;
    }
    this.BGCHRCurrentBank = v2556;
    var v10684 = this.generateCacheArray(3968);
    this.tileCache = v10684;
    var v2557 = tileIndex < 6144;
    for (;v2557;) {
      this.generateGBCTileBank1(tileIndex);
      this.generateGBCTileBank2(tileIndex);
      tileIndex = tileIndex + 16;
      v2557 = tileIndex < 6144;
    }
  }
  this.renderPathBuild();
  return;
}
function v683() {
  var v2559 = this.BGPriorityEnabled;
  if (v2559) {
    this.BGLayerRender = this.BGGBCLayerRender;
    this.WindowLayerRender = this.WindowGBCLayerRender;
  } else {
    this.BGLayerRender = this.BGGBCLayerRenderNoPriorityFlagging;
    this.WindowLayerRender = this.WindowGBCLayerRenderNoPriorityFlagging;
  }
  return;
}
function v682() {
  var v6655 = this.cGBC;
  var v2560 = !v6655;
  if (v2560) {
    this.BGLayerRender = this.BGGBLayerRender;
    this.WindowLayerRender = this.WindowGBLayerRender;
    this.SpriteLayerRender = this.SpriteGBLayerRender;
  } else {
    this.priorityFlaggingPathRebuild();
    this.SpriteLayerRender = this.SpriteGBCLayerRender;
  }
  return;
}
function v681() {
  cout("Stepping down from GBC mode.", 0);
  this.VRAM = this.GBCMemory = this.BGCHRCurrentBank = this.BGCHRBank2 = null;
  var v2561 = this.tileCache;
  v2561.length = 1792;
  var v2562 = settings[4];
  if (v2562) {
    var v10685 = this.getTypedArray(4, 0, "int32");
    this.gbBGColorizedPalette = v10685;
    var v10686 = this.getTypedArray(8, 0, "int32");
    this.gbOBJColorizedPalette = v10686;
    var v10687 = this.getTypedArray(4, 0, "int32");
    this.cachedBGPaletteConversion = v10687;
    var v10688 = this.getTypedArray(8, 0, "int32");
    this.cachedOBJPaletteConversion = v10688;
    this.BGPalette = this.gbBGColorizedPalette;
    this.OBJPalette = this.gbOBJColorizedPalette;
    this.gbOBJPalette = this.gbBGPalette = null;
    this.getGBCColor();
  } else {
    var v10689 = this.getTypedArray(8, 0, "int32");
    this.gbOBJPalette = v10689;
    var v10690 = this.getTypedArray(4, 0, "int32");
    this.gbBGPalette = v10690;
    this.BGPalette = this.gbBGPalette;
    this.OBJPalette = this.gbOBJPalette;
  }
  var v10691 = this.getTypedArray(256, 0, "uint8");
  this.sortBuffer = v10691;
  var v10692 = this.getTypedArray(10, 0, "int32");
  this.OAMAddressCache = v10692;
  this.renderPathBuild();
  this.memoryReadJumpCompile();
  this.memoryWriteJumpCompile();
  return;
}
function v680() {
  var v2563;
  var v6656 = this.LCDisOn;
  if (v6656) {
    v2563 = this.LINECONTROL;
  } else {
    v2563 = this.DISPLAYOFFCONTROL;
  }
  this.LCDCONTROL = v2563;
  var v2565 = this.cGBC;
  if (v2565) {
    var v10693 = this.getTypedArray(64, 0, "uint8");
    this.gbcOBJRawPalette = v10693;
    var v10694 = this.getTypedArray(64, 0, "uint8");
    this.gbcBGRawPalette = v10694;
    var v10695 = this.getTypedArray(32, 16777216, "int32");
    this.gbcOBJPalette = v10695;
    var v10696 = this.getTypedArray(64, 0, "int32");
    this.gbcBGPalette = v10696;
    var v10697 = this.getTypedArray(2048, 0, "uint8");
    this.BGCHRBank2 = v10697;
    var v2564;
    var v8912 = this.currVRAMBank;
    var v6657 = v8912 > 0;
    if (v6657) {
      v2564 = this.BGCHRBank2;
    } else {
      v2564 = this.BGCHRBank1;
    }
    this.BGCHRCurrentBank = v2564;
    var v10698 = this.generateCacheArray(3968);
    this.tileCache = v10698;
  } else {
    var v10699 = this.getTypedArray(8, 0, "int32");
    this.gbOBJPalette = v10699;
    var v10700 = this.getTypedArray(4, 0, "int32");
    this.gbBGPalette = v10700;
    this.BGPalette = this.gbBGPalette;
    this.OBJPalette = this.gbOBJPalette;
    var v10701 = this.generateCacheArray(1792);
    this.tileCache = v10701;
    var v10702 = this.getTypedArray(256, 0, "uint8");
    this.sortBuffer = v10702;
    var v10703 = this.getTypedArray(10, 0, "int32");
    this.OAMAddressCache = v10703;
  }
  this.renderPathBuild();
  return;
}
function v679() {
  var v8913 = this.actualScanLine;
  var v6658 = v8913 < 144;
  if (v6658) {
    var v8914 = this.modeSTAT;
    v6658 = v8914 == 3;
  }
  var v2582 = v6658;
  if (v2582) {
    var v6659 = this.midScanlineOffset;
    var v2567 = v6659 == -1;
    if (v2567) {
      var v2566 = this.backgroundX;
      this.midScanlineOffset = v2566 & 7;
    }
    var v6660 = this.LCDTicks;
    var v2581 = v6660 >= 82;
    if (v2581) {
      var v2568 = this.LCDTicks;
      this.pixelEnd = v2568 - 74;
      var v8915 = this.pixelEnd;
      var v8916 = this.midScanlineOffset;
      var v6661 = v8915 - v8916;
      var v8917 = this.pixelEnd;
      var v6662 = v8917 % 8;
      var v2569 = v6661 - v6662;
      var v10704 = Math.min(v2569, 160);
      this.pixelEnd = v10704;
      var v2580 = this.bgEnabled;
      if (v2580) {
        var v2570 = this.lastUnrenderedLine;
        this.pixelStart = v2570 * 160;
        var v2571 = this.lastUnrenderedLine;
        this.BGLayerRender(v2571);
        var v2572 = this.lastUnrenderedLine;
        this.WindowLayerRender(v2572);
      } else {
        var v6663 = this.lastUnrenderedLine;
        var v2573 = v6663 * 160;
        var v2574 = this.pixelEnd;
        var pixelLine$$1 = v2573 + v2574;
        var v2575;
        var v8918 = this.cGBC;
        var v9933 = !v8918;
        if (v9933) {
          v8918 = this.colorizedGBPalettes;
        }
        var v6664 = v8918;
        if (v6664) {
          v2575 = 16316664;
        } else {
          v2575 = 15728606;
        }
        var defaultColor$$1 = v2575;
        var v6665 = this.lastUnrenderedLine;
        var v2576 = v6665 * 160;
        var v2577 = this.currentX;
        var pixelPosition$$1 = v2576 + v2577;
        var v2579 = pixelPosition$$1 < pixelLine$$1;
        for (;v2579;) {
          var v2578 = this.frameBuffer;
          v2578[pixelPosition$$1] = defaultColor$$1;
          pixelPosition$$1++;
          v2579 = pixelPosition$$1 < pixelLine$$1;
        }
      }
      this.currentX = this.pixelEnd;
    }
  }
  return;
}
function v678(scanlineToRender) {
  this.pixelStart = scanlineToRender * 160;
  var v2589 = this.bgEnabled;
  if (v2589) {
    this.pixelEnd = 160;
    this.BGLayerRender(scanlineToRender);
    this.WindowLayerRender(scanlineToRender);
  } else {
    var v2583 = scanlineToRender + 1;
    var pixelLine = v2583 * 160;
    var v2584;
    var v8919 = this.cGBC;
    var v9934 = !v8919;
    if (v9934) {
      v8919 = this.colorizedGBPalettes;
    }
    var v6666 = v8919;
    if (v6666) {
      v2584 = 16316664;
    } else {
      v2584 = 15728606;
    }
    var defaultColor = v2584;
    var v2585 = scanlineToRender * 160;
    var v2586 = this.currentX;
    var pixelPosition = v2585 + v2586;
    var v2588 = pixelPosition < pixelLine;
    for (;v2588;) {
      var v2587 = this.frameBuffer;
      v2587[pixelPosition] = defaultColor;
      pixelPosition++;
      v2588 = pixelPosition < pixelLine;
    }
  }
  this.SpriteLayerRender(scanlineToRender);
  this.currentX = 0;
  this.midScanlineOffset = -1;
  return;
}
function v677() {
  var v6667 = this.offscreenRGBCount;
  var v2592 = v6667 > 0;
  if (v2592) {
    var v2590 = this.offscreenWidth;
    var v2591 = this.offscreenHeight;
    var v10705 = new Resize(160, 144, v2590, v2591, false, true);
    this.resizer = v10705;
  }
  return;
}
function v676() {
  var v2593 = this.resizer;
  var v2594 = this.swizzledFrame;
  return v2593.resize(v2594);
}
function v675() {
  var bufferIndex$$2 = 0;
  var frameBuffer$$2 = this.swizzledFrame;
  var v6668 = this.cGBC;
  var v8920 = !v6668;
  if (v8920) {
    v6668 = this.colorizedGBPalettes;
  }
  var v2601 = v6668;
  if (v2601) {
    var v2596 = bufferIndex$$2 < 69120;
    for (;v2596;) {
      var v2595 = bufferIndex$$2;
      bufferIndex$$2 = bufferIndex$$2 + 1;
      frameBuffer$$2[v2595] = 248;
      v2596 = bufferIndex$$2 < 69120;
    }
  } else {
    var v2600 = bufferIndex$$2 < 69120;
    for (;v2600;) {
      var v2597 = bufferIndex$$2;
      bufferIndex$$2 = bufferIndex$$2 + 1;
      frameBuffer$$2[v2597] = 239;
      var v2598 = bufferIndex$$2;
      bufferIndex$$2 = bufferIndex$$2 + 1;
      frameBuffer$$2[v2598] = 255;
      var v2599 = bufferIndex$$2;
      bufferIndex$$2 = bufferIndex$$2 + 1;
      frameBuffer$$2[v2599] = 222;
      v2600 = bufferIndex$$2 < 69120;
    }
  }
  return;
}
function v674() {
  var frameBuffer$$1 = this.frameBuffer;
  var swizzledFrame = this.swizzledFrame;
  var bufferIndex$$1 = 0;
  var canvasIndex$$1 = 0;
  var v2605 = canvasIndex$$1 < 69120;
  for (;v2605;) {
    var v2602 = canvasIndex$$1;
    canvasIndex$$1 = canvasIndex$$1 + 1;
    var v8921 = frameBuffer$$1[bufferIndex$$1];
    var v6669 = v8921 >> 16;
    swizzledFrame[v2602] = v6669 & 255;
    var v2603 = canvasIndex$$1;
    canvasIndex$$1 = canvasIndex$$1 + 1;
    var v8922 = frameBuffer$$1[bufferIndex$$1];
    var v6670 = v8922 >> 8;
    swizzledFrame[v2603] = v6670 & 255;
    var v2604 = canvasIndex$$1;
    canvasIndex$$1 = canvasIndex$$1 + 1;
    var v8923 = bufferIndex$$1;
    bufferIndex$$1 = bufferIndex$$1 + 1;
    var v6671 = frameBuffer$$1[v8923];
    swizzledFrame[v2604] = v6671 & 255;
    v2605 = canvasIndex$$1 < 69120;
  }
  return;
}
function v673() {
  var canvasRGBALength = this.offscreenRGBCount;
  var v2612 = canvasRGBALength > 0;
  if (v2612) {
    var v2606;
    var v6672 = canvasRGBALength == 92160;
    if (v6672) {
      v2606 = this.swizzledFrame;
    } else {
      v2606 = this.resizeFrameBuffer();
    }
    var frameBuffer = v2606;
    var v2607 = this.canvasBuffer;
    var canvasData = v2607.data;
    var bufferIndex = 0;
    var canvasIndex = 0;
    var v2611 = canvasIndex < canvasRGBALength;
    for (;v2611;) {
      var v2608 = canvasIndex;
      canvasIndex = canvasIndex + 1;
      var v6673 = bufferIndex;
      bufferIndex = bufferIndex + 1;
      canvasData[v2608] = frameBuffer[v6673];
      var v2609 = canvasIndex;
      canvasIndex = canvasIndex + 1;
      var v6674 = bufferIndex;
      bufferIndex = bufferIndex + 1;
      canvasData[v2609] = frameBuffer[v6674];
      var v2610 = canvasIndex;
      canvasIndex = canvasIndex + 1;
      var v6675 = bufferIndex;
      bufferIndex = bufferIndex + 1;
      canvasData[v2610] = frameBuffer[v6675];
      ++canvasIndex;
      v2611 = canvasIndex < canvasRGBALength;
    }
    this.graphicsBlit();
  }
  return;
}
function v672() {
  var v2613 = this.drewFrame;
  if (v2613) {
    this.dispatchDraw();
  }
  return;
}
function v671() {
  this.swizzleFrameBuffer();
  this.drewFrame = true;
  return;
}
function v670() {
  var v2620 = this.cTIMER;
  if (v2620) {
    var dateObj = new_Date();
    var newTime = dateObj.getTime();
    var v2614 = this.lastIteration;
    var timeElapsed = newTime - v2614;
    this.lastIteration = newTime;
    var v6676 = this.cTIMER;
    if (v6676) {
      var v8924 = this.RTCHALT;
      v6676 = !v8924;
    }
    var v2619 = v6676;
    if (v2619) {
      var v6677 = this.RTCSeconds;
      var v6678 = timeElapsed / 1E3;
      this.RTCSeconds = v6677 + v6678;
      var v6679 = this.RTCSeconds;
      var v2618 = v6679 >= 60;
      for (;v2618;) {
        var v6680 = this.RTCSeconds;
        this.RTCSeconds = v6680 - 60;
        ++this.RTCMinutes;
        var v6681 = this.RTCMinutes;
        var v2617 = v6681 >= 60;
        if (v2617) {
          var v6682 = this.RTCMinutes;
          this.RTCMinutes = v6682 - 60;
          ++this.RTCHours;
          var v6683 = this.RTCHours;
          var v2616 = v6683 >= 24;
          if (v2616) {
            var v6684 = this.RTCHours;
            this.RTCHours = v6684 - 24;
            ++this.RTCDays;
            var v6685 = this.RTCDays;
            var v2615 = v6685 >= 512;
            if (v2615) {
              var v6686 = this.RTCDays;
              this.RTCDays = v6686 - 512;
              this.RTCDayOverFlow = true;
            }
          }
        }
        var v6687 = this.RTCSeconds;
        v2618 = v6687 >= 60;
      }
    }
  }
  return;
}
function v669() {
  this.DMAWrite(1);
  var v2625 = this.halt;
  if (v2625) {
    var v8925 = this.LCDTicks;
    var v8926 = this.spriteCount;
    var v6688 = v8925 - v8926;
    var v9935 = this.doubleSpeedShifter;
    var v8927 = 4 >> v9935;
    var v6689 = v8927 | 32;
    var v2624 = v6688 < v6689;
    if (v2624) {
      var v8928 = this.spriteCount;
      var v6690 = 32 + v8928;
      var v6691 = this.doubleSpeedShifter;
      var v2621 = v6690 << v6691;
      this.CPUTicks = 4 + v2621;
      var v2622 = this.spriteCount;
      var v8929 = this.doubleSpeedShifter;
      var v6692 = 4 >> v8929;
      var v2623 = v6692 | 32;
      this.LCDTicks = v2622 + v2623;
    }
  } else {
    var v6693 = this.LCDTicks;
    var v9936 = this.doubleSpeedShifter;
    var v8930 = 4 >> v9936;
    var v6694 = v8930 | 32;
    this.LCDTicks = v6693 + v6694;
  }
  var v8931 = this.memory;
  var v6695 = v8931[65365];
  var v2627 = v6695 == 0;
  if (v2627) {
    this.hdmaRunning = false;
    var v2626 = this.memory;
    v2626[65365] = 255;
  } else {
    --this.memory[65365];
  }
  return;
}
function v668() {
  var v6696 = this.drewBlank;
  var v2628 = v6696 == 0;
  if (v2628) {
    this.clearFrameBuffer();
    this.drewFrame = true;
  }
  this.drewBlank = 2;
  return;
}
function v667() {
  function v666(parentObj$$517) {
    var v6697 = parentObj$$517.LCDTicks;
    var v2637 = v6697 >= 8;
    if (v2637) {
      var v8932 = parentObj$$517.STATTracker;
      var v6698 = v8932 != 4;
      if (v6698) {
        var v9937 = parentObj$$517.memory;
        var v8933 = v9937[65348];
        v6698 = v8933 == 153;
      }
      var v2634 = v6698;
      if (v2634) {
        var v2629 = parentObj$$517.memory;
        v2629[65348] = 0;
        var v8934 = parentObj$$517.memory;
        var v6699 = v8934[65349];
        var v2633 = v6699 == 0;
        if (v2633) {
          var v2630 = parentObj$$517.memory;
          var v8935 = v2630[65345];
          v2630[65345] = v8935 | 4;
          var v2631 = parentObj$$517.LYCMatchTriggerSTAT;
          if (v2631) {
            var v6700 = parentObj$$517.interruptsRequested;
            parentObj$$517.interruptsRequested = v6700 | 2;
            parentObj$$517.checkIRQMatching();
          }
        } else {
          var v2632 = parentObj$$517.memory;
          var v8936 = v2632[65345];
          v2632[65345] = v8936 & 123;
        }
        parentObj$$517.STATTracker = 4;
      }
      var v6701 = parentObj$$517.LCDTicks;
      var v2636 = v6701 >= 456;
      if (v2636) {
        var v6702 = parentObj$$517.LCDTicks;
        parentObj$$517.LCDTicks = v6702 - 456;
        parentObj$$517.STATTracker = parentObj$$517.actualScanLine = 0;
        var v2635 = parentObj$$517.LINECONTROL;
        v2635[0](parentObj$$517);
      }
    }
    return;
  }
  function v665(parentObj$$516) {
    var v6703 = parentObj$$516.LCDTicks;
    var v2644 = v6703 >= 456;
    if (v2644) {
      var v6704 = parentObj$$516.LCDTicks;
      parentObj$$516.LCDTicks = v6704 - 456;
      var v6705 = parentObj$$516.memory;
      var v9938 = parentObj$$516.memory;
      var v8937 = v9938[65348];
      parentObj$$516.actualScanLine = v6705[65348] = v8937 + 1;
      var v6706 = parentObj$$516.actualScanLine;
      var v8938 = parentObj$$516.memory;
      var v6707 = v8938[65349];
      var v2641 = v6706 == v6707;
      if (v2641) {
        var v2638 = parentObj$$516.memory;
        var v8939 = v2638[65345];
        v2638[65345] = v8939 | 4;
        var v2639 = parentObj$$516.LYCMatchTriggerSTAT;
        if (v2639) {
          var v6708 = parentObj$$516.interruptsRequested;
          parentObj$$516.interruptsRequested = v6708 | 2;
          parentObj$$516.checkIRQMatching();
        }
      } else {
        var v2640 = parentObj$$516.memory;
        var v8940 = v2640[65345];
        v2640[65345] = v8940 & 123;
      }
      var v2642 = parentObj$$516.LINECONTROL;
      var v2643 = parentObj$$516.actualScanLine;
      v2642[v2643](parentObj$$516);
    }
    return;
  }
  function v664(parentObj$$515) {
    var v6709 = parentObj$$515.LCDTicks;
    var v2660 = v6709 < 80;
    if (v2660) {
      parentObj$$515.scanLineMode2();
    } else {
      var v6710 = parentObj$$515.LCDTicks;
      var v2659 = v6710 < 252;
      if (v2659) {
        parentObj$$515.scanLineMode3();
      } else {
        var v6711 = parentObj$$515.LCDTicks;
        var v2658 = v6711 < 456;
        if (v2658) {
          parentObj$$515.scanLineMode0();
        } else {
          var v6712 = parentObj$$515.LCDTicks;
          parentObj$$515.LCDTicks = v6712 - 456;
          var v6713 = parentObj$$515.STATTracker;
          var v2649 = v6713 != 3;
          if (v2649) {
            var v6714 = parentObj$$515.STATTracker;
            var v2646 = v6714 != 2;
            if (v2646) {
              var v8941 = parentObj$$515.STATTracker;
              var v6715 = v8941 == 0;
              if (v6715) {
                v6715 = parentObj$$515.mode2TriggerSTAT;
              }
              var v2645 = v6715;
              if (v2645) {
                var v6716 = parentObj$$515.interruptsRequested;
                parentObj$$515.interruptsRequested = v6716 | 2;
              }
              parentObj$$515.incrementScanLineQueue();
            }
            var v2647 = parentObj$$515.hdmaRunning;
            if (v2647) {
              parentObj$$515.executeHDMA();
            }
            var v2648 = parentObj$$515.mode0TriggerSTAT;
            if (v2648) {
              var v6717 = parentObj$$515.interruptsRequested;
              parentObj$$515.interruptsRequested = v6717 | 2;
            }
          }
          var v2650 = parentObj$$515.memory;
          parentObj$$515.actualScanLine = v2650[65348] = 144;
          var v8942 = parentObj$$515.memory;
          var v6718 = v8942[65349];
          var v2654 = v6718 == 144;
          if (v2654) {
            var v2651 = parentObj$$515.memory;
            var v8943 = v2651[65345];
            v2651[65345] = v8943 | 4;
            var v2652 = parentObj$$515.LYCMatchTriggerSTAT;
            if (v2652) {
              var v6719 = parentObj$$515.interruptsRequested;
              parentObj$$515.interruptsRequested = v6719 | 2;
            }
          } else {
            var v2653 = parentObj$$515.memory;
            var v8944 = v2653[65345];
            v2653[65345] = v8944 & 123;
          }
          parentObj$$515.STATTracker = 0;
          parentObj$$515.modeSTAT = 1;
          var v6720 = parentObj$$515.interruptsRequested;
          var v8945;
          var v9939 = parentObj$$515.mode1TriggerSTAT;
          if (v9939) {
            v8945 = 3;
          } else {
            v8945 = 1;
          }
          var v6721 = v8945;
          parentObj$$515.interruptsRequested = v6720 | v6721;
          parentObj$$515.checkIRQMatching();
          var v6722 = parentObj$$515.drewBlank;
          var v2656 = v6722 == 0;
          if (v2656) {
            var v8946 = parentObj$$515.totalLinesPassed;
            var v6723 = v8946 < 144;
            var v8948 = !v6723;
            if (v8948) {
              var v9940 = parentObj$$515.totalLinesPassed;
              var v8947 = v9940 == 144;
              if (v8947) {
                var v9941 = parentObj$$515.midScanlineOffset;
                v8947 = v9941 > -1;
              }
              v6723 = v8947;
            }
            var v2655 = v6723;
            if (v2655) {
              parentObj$$515.graphicsJITVBlank();
              parentObj$$515.prepareFrame();
            }
          } else {
            --parentObj$$515.drewBlank;
          }
          var v2657 = parentObj$$515.LINECONTROL;
          v2657[144](parentObj$$515);
        }
      }
    }
    return;
  }
  function v663(parentObj$$514) {
    var v6724 = parentObj$$514.LCDTicks;
    var v2674 = v6724 < 80;
    if (v2674) {
      parentObj$$514.scanLineMode2();
    } else {
      var v6725 = parentObj$$514.LCDTicks;
      var v2673 = v6725 < 252;
      if (v2673) {
        parentObj$$514.scanLineMode3();
      } else {
        var v6726 = parentObj$$514.LCDTicks;
        var v2672 = v6726 < 456;
        if (v2672) {
          parentObj$$514.scanLineMode0();
        } else {
          var v6727 = parentObj$$514.LCDTicks;
          parentObj$$514.LCDTicks = v6727 - 456;
          var v6728 = parentObj$$514.STATTracker;
          var v2665 = v6728 != 3;
          if (v2665) {
            var v6729 = parentObj$$514.STATTracker;
            var v2662 = v6729 != 2;
            if (v2662) {
              var v8949 = parentObj$$514.STATTracker;
              var v6730 = v8949 == 0;
              if (v6730) {
                v6730 = parentObj$$514.mode2TriggerSTAT;
              }
              var v2661 = v6730;
              if (v2661) {
                var v6731 = parentObj$$514.interruptsRequested;
                parentObj$$514.interruptsRequested = v6731 | 2;
              }
              parentObj$$514.incrementScanLineQueue();
            }
            var v2663 = parentObj$$514.hdmaRunning;
            if (v2663) {
              parentObj$$514.executeHDMA();
            }
            var v2664 = parentObj$$514.mode0TriggerSTAT;
            if (v2664) {
              var v6732 = parentObj$$514.interruptsRequested;
              parentObj$$514.interruptsRequested = v6732 | 2;
            }
          }
          var v6733 = parentObj$$514.memory;
          var v9942 = parentObj$$514.memory;
          var v8950 = v9942[65348];
          parentObj$$514.actualScanLine = v6733[65348] = v8950 + 1;
          var v6734 = parentObj$$514.actualScanLine;
          var v8951 = parentObj$$514.memory;
          var v6735 = v8951[65349];
          var v2669 = v6734 == v6735;
          if (v2669) {
            var v2666 = parentObj$$514.memory;
            var v8952 = v2666[65345];
            v2666[65345] = v8952 | 4;
            var v2667 = parentObj$$514.LYCMatchTriggerSTAT;
            if (v2667) {
              var v6736 = parentObj$$514.interruptsRequested;
              parentObj$$514.interruptsRequested = v6736 | 2;
            }
          } else {
            var v2668 = parentObj$$514.memory;
            var v8953 = v2668[65345];
            v2668[65345] = v8953 & 123;
          }
          parentObj$$514.checkIRQMatching();
          parentObj$$514.STATTracker = 0;
          parentObj$$514.modeSTAT = 2;
          var v2670 = parentObj$$514.LINECONTROL;
          var v2671 = parentObj$$514.actualScanLine;
          v2670[v2671](parentObj$$514);
        }
      }
    }
    return;
  }
  var line$$3 = 0;
  var v2682 = line$$3 < 154;
  for (;v2682;) {
    var v2681 = line$$3 < 143;
    if (v2681) {
      var v2675 = this.LINECONTROL;
      v2675[line$$3] = v663;
    } else {
      var v2680 = line$$3 == 143;
      if (v2680) {
        var v2676 = this.LINECONTROL;
        v2676[143] = v664;
      } else {
        var v2679 = line$$3 < 153;
        if (v2679) {
          var v2677 = this.LINECONTROL;
          v2677[line$$3] = v665;
        } else {
          var v2678 = this.LINECONTROL;
          v2678[153] = v666;
        }
      }
    }
    ++line$$3;
    v2682 = line$$3 < 154;
  }
  return;
}
function v662() {
  this.updateCore();
  var v6737 = this.emulatorTicks;
  var v6738 = this.CPUCyclesTotal;
  var v2683 = v6737 >= v6738;
  if (v2683) {
    this.iterationEndRoutine();
  }
  return;
}
function v661() {
  var v6739 = this.LCDTicks;
  var v8954 = this.CPUTicks;
  var v8955 = this.doubleSpeedShifter;
  var v6740 = v8954 >> v8955;
  this.LCDTicks = v6739 + v6740;
  var v2684 = this.LCDCONTROL;
  var v2685 = this.actualScanLine;
  v2684[v2685](this);
  var v2686 = this.CPUTicks;
  var v2687 = this.doubleSpeedShifter;
  var timedTicks$$1 = v2686 >> v2687;
  var v6741 = this.audioTicks;
  this.audioTicks = v6741 + timedTicks$$1;
  var v6742 = this.emulatorTicks;
  this.emulatorTicks = v6742 + timedTicks$$1;
  var v6743 = this.DIVTicks;
  var v6744 = this.CPUTicks;
  this.DIVTicks = v6743 + v6744;
  var v2691 = this.TIMAEnabled;
  if (v2691) {
    var v6745 = this.timerTicks;
    var v6746 = this.CPUTicks;
    this.timerTicks = v6745 + v6746;
    var v6747 = this.timerTicks;
    var v6748 = this.TACClocker;
    var v2690 = v6747 >= v6748;
    for (;v2690;) {
      var v6749 = this.timerTicks;
      var v6750 = this.TACClocker;
      this.timerTicks = v6749 - v6750;
      var v9943 = this.memory;
      var v10516 = this.memory;
      var v10324 = v10516[65285];
      var v6751 = v9943[65285] = v10324 + 1;
      var v2689 = v6751 == 256;
      if (v2689) {
        var v2688 = this.memory;
        var v6752 = this.memory;
        v2688[65285] = v6752[65286];
        var v6753 = this.interruptsRequested;
        this.interruptsRequested = v6753 | 4;
        this.checkIRQMatching();
      }
      var v6754 = this.timerTicks;
      var v6755 = this.TACClocker;
      v2690 = v6754 >= v6755;
    }
  }
  var v6756 = this.serialTimer;
  var v2695 = v6756 > 0;
  if (v2695) {
    var v6757 = this.serialTimer;
    var v6758 = this.CPUTicks;
    this.serialTimer = v6757 - v6758;
    var v6759 = this.serialTimer;
    var v2692 = v6759 <= 0;
    if (v2692) {
      var v6760 = this.interruptsRequested;
      this.interruptsRequested = v6760 | 8;
      this.checkIRQMatching();
    }
    var v6761 = this.serialShiftTimer;
    var v6762 = this.CPUTicks;
    this.serialShiftTimer = v6761 - v6762;
    var v6763 = this.serialShiftTimer;
    var v2694 = v6763 <= 0;
    if (v2694) {
      this.serialShiftTimer = this.serialShiftTimerAllocated;
      var v2693 = this.memory;
      var v10325 = this.memory;
      var v9944 = v10325[65281];
      var v8956 = v9944 << 1;
      var v6764 = v8956 & 254;
      v2693[65281] = v6764 | 1;
    }
  }
  return;
}
function v660() {
  var v8957 = this.memory;
  var v6765 = v8957[65348];
  var v8958 = this.memory;
  var v6766 = v8958[65349];
  var v2699 = v6765 == v6766;
  if (v2699) {
    var v2696 = this.memory;
    var v8959 = v2696[65345];
    v2696[65345] = v8959 | 4;
    var v2697 = this.LYCMatchTriggerSTAT;
    if (v2697) {
      var v6767 = this.interruptsRequested;
      this.interruptsRequested = v6767 | 2;
      this.checkIRQMatching();
    }
  } else {
    var v2698 = this.memory;
    var v8960 = v2698[65345];
    v2698[65345] = v8960 & 123;
  }
  return;
}
function v659(line$$2) {
  this.spriteCount = 252;
  var v6768 = this.cGBC;
  if (v6768) {
    v6768 = this.gfxSpriteShow;
  }
  var v2704 = v6768;
  if (v2704) {
    var lineAdjusted = line$$2 + 16;
    var yoffset$$3 = 0;
    var v2700;
    var v6769 = this.gfxSpriteNormalHeight;
    if (v6769) {
      v2700 = 8;
    } else {
      v2700 = 16;
    }
    var yCap = v2700;
    var OAMAddress = 65024;
    var v6770 = OAMAddress < 65184;
    if (v6770) {
      var v8961 = this.spriteCount;
      v6770 = v8961 < 312;
    }
    var v2703 = v6770;
    for (;v2703;) {
      var v6771 = this.memory;
      var v2701 = v6771[OAMAddress];
      yoffset$$3 = lineAdjusted - v2701;
      var v6772 = yoffset$$3 > -1;
      if (v6772) {
        v6772 = yoffset$$3 < yCap;
      }
      var v2702 = v6772;
      if (v2702) {
        var v6773 = this.spriteCount;
        this.spriteCount = v6773 + 6;
      }
      OAMAddress = OAMAddress + 4;
      var v6774 = OAMAddress < 65184;
      if (v6774) {
        var v8962 = this.spriteCount;
        v6774 = v8962 < 312;
      }
      v2703 = v6774;
    }
  }
  return;
}
function v658() {
  var v2712 = this.modeSTAT;
  switch(v2712) {
    case 0:
      var v6775 = this.actualScanLine;
      var v2706 = v6775 == 143;
      if (v2706) {
        this.updateSpriteCount(0);
        var v2705 = this.spriteCount;
        return v2705 + 5016;
      }
      var v6776 = this.actualScanLine;
      var v2707 = v6776 + 1;
      this.updateSpriteCount(v2707);
      var v2708 = this.spriteCount;
      return v2708 + 456;
    case 2:
    ;
    case 3:
      var v2709 = this.actualScanLine;
      this.updateSpriteCount(v2709);
      return this.spriteCount;
    case 1:
      this.updateSpriteCount(0);
      var v2710 = this.spriteCount;
      var v8963 = this.actualScanLine;
      var v6777 = 154 - v8963;
      var v2711 = 456 * v6777;
      return v2710 + v2711;
  }
  return;
}
function v657() {
  var v8964 = this.memory;
  var v6778 = v8964[65349];
  var v2716 = v6778 != 0;
  if (v2716) {
    var v8965 = this.memory;
    var v6779 = v8965[65349];
    var v6780 = this.actualScanLine;
    var v2714 = v6779 > v6780;
    if (v2714) {
      var v8966 = this.memory;
      var v6781 = v8966[65349];
      var v6782 = this.actualScanLine;
      var v2713 = v6781 - v6782;
      return 456 * v2713;
    }
    var v8967 = this.actualScanLine;
    var v6783 = 154 - v8967;
    var v8968 = this.memory;
    var v6784 = v8968[65349];
    var v2715 = v6783 + v6784;
    return 456 * v2715;
  }
  var v8969;
  var v10517 = this.actualScanLine;
  var v10326 = v10517 == 153;
  if (v10326) {
    var v10570 = this.memory;
    var v10518 = v10570[65348];
    v10326 = v10518 == 0;
  }
  var v9946 = v10326;
  if (v9946) {
    v8969 = 154;
  } else {
    var v9945 = this.actualScanLine;
    v8969 = 153 - v9945;
  }
  var v6785 = v8969;
  var v2717 = 456 * v6785;
  return v2717 + 8;
}
function v656() {
  var v6786 = this.modeSTAT;
  var v2725 = v6786 != 0;
  if (v2725) {
    var v6787 = this.STATTracker;
    var v2721 = v6787 != 2;
    if (v2721) {
      var v6788 = this.STATTracker;
      var v2719 = v6788 == 0;
      if (v2719) {
        var v2718 = this.mode2TriggerSTAT;
        if (v2718) {
          var v6789 = this.interruptsRequested;
          this.interruptsRequested = v6789 | 2;
          this.checkIRQMatching();
        }
        this.modeSTAT = 3;
      }
      this.incrementScanLineQueue();
      var v2720 = this.actualScanLine;
      this.updateSpriteCount(v2720);
      this.STATTracker = 2;
    }
    var v6790 = this.LCDTicks;
    var v6791 = this.spriteCount;
    var v2724 = v6790 >= v6791;
    if (v2724) {
      var v2722 = this.hdmaRunning;
      if (v2722) {
        this.executeHDMA();
      }
      var v2723 = this.mode0TriggerSTAT;
      if (v2723) {
        var v6792 = this.interruptsRequested;
        this.interruptsRequested = v6792 | 2;
        this.checkIRQMatching();
      }
      this.STATTracker = 3;
      this.modeSTAT = 0;
    }
  }
  return;
}
function v655() {
  var v6793 = this.modeSTAT;
  var v2727 = v6793 != 3;
  if (v2727) {
    var v8970 = this.STATTracker;
    var v6794 = v8970 == 0;
    if (v6794) {
      v6794 = this.mode2TriggerSTAT;
    }
    var v2726 = v6794;
    if (v2726) {
      var v6795 = this.interruptsRequested;
      this.interruptsRequested = v6795 | 2;
      this.checkIRQMatching();
    }
    this.STATTracker = 1;
    this.modeSTAT = 3;
  }
  return;
}
function v654() {
  var v6796 = this.STATTracker;
  var v2729 = v6796 != 1;
  if (v2729) {
    var v2728 = this.mode2TriggerSTAT;
    if (v2728) {
      var v6797 = this.interruptsRequested;
      this.interruptsRequested = v6797 | 2;
      this.checkIRQMatching();
    }
    this.STATTracker = 1;
    this.modeSTAT = 2;
  }
  return;
}
function v653() {
  var v2730 = this.CPUCyclesTotalCurrent;
  var endModulus = v2730 % 4;
  var v6798 = this.CPUCyclesTotalBase;
  var v6799 = this.CPUCyclesTotalCurrent;
  var v2731 = v6798 + v6799;
  this.CPUCyclesTotal = v2731 - endModulus;
  this.CPUCyclesTotalCurrent = endModulus;
  return;
}
function v652() {
  this.CPUStopped = true;
  this.iterationEndRoutine();
  var v6800 = this.emulatorTicks;
  var v2732 = v6800 < 0;
  if (v2732) {
    var v6801 = this.audioTicks;
    var v6802 = this.emulatorTicks;
    this.audioTicks = v6801 - v6802;
    this.audioJIT();
  }
  return;
}
function v651() {
  var v8971 = this.stopEmulator;
  var v6803 = v8971 & 1;
  var v2734 = v6803 == 0;
  if (v2734) {
    this.audioJIT();
    var v2733 = this.memory;
    var v9947 = this.memory;
    var v8972 = v9947[65284];
    var v9948 = this.DIVTicks;
    var v8973 = v9948 >> 8;
    var v6804 = v8972 + v8973;
    v2733[65284] = v6804 & 255;
    var v6805 = this.DIVTicks;
    this.DIVTicks = v6805 & 255;
    var v6806 = this.stopEmulator;
    this.stopEmulator = v6806 | 1;
    var v6807 = this.emulatorTicks;
    var v6808 = this.CPUCyclesTotal;
    this.emulatorTicks = v6807 - v6808;
    var v6809 = this.CPUCyclesTotalCurrent;
    var v6810 = this.CPUCyclesTotalRoundoff;
    this.CPUCyclesTotalCurrent = v6809 + v6810;
    this.recalculateIterationClockLimit();
  }
  return;
}
function v650() {
  var opcodeToExecute = 0;
  var timedTicks = 0;
  var v6811 = this.stopEmulator;
  var v2759 = v6811 == 0;
  for (;v2759;) {
    var v2735 = this.IRQEnableDelay;
    switch(v2735) {
      case 1:
        this.IME = true;
        this.checkIRQMatching();
      case 2:
        --this.IRQEnableDelay;
    }
    var v6812 = this.IRQLineMatched;
    var v2736 = v6812 > 0;
    if (v2736) {
      this.launchIRQ();
    }
    var v2737 = this.memoryReader;
    var v2738 = this.programCounter;
    var v2739 = this.programCounter;
    opcodeToExecute = v2737[v2738](this, v2739);
    var v6813 = this.programCounter;
    var v2740 = v6813 + 1;
    this.programCounter = v2740 & 65535;
    var v2742 = this.skipPCIncrement;
    if (v2742) {
      var v6814 = this.programCounter;
      var v2741 = v6814 - 1;
      this.programCounter = v2741 & 65535;
      this.skipPCIncrement = false;
    }
    var v2743 = this.TICKTable;
    this.CPUTicks = v2743[opcodeToExecute];
    var v2744 = this.OPCODE;
    v2744[opcodeToExecute](this);
    var v6815 = this.LCDTicks;
    var v8974 = this.CPUTicks;
    var v8975 = this.doubleSpeedShifter;
    var v6816 = v8974 >> v8975;
    this.LCDTicks = v6815 + v6816;
    var v2745 = this.LCDCONTROL;
    var v2746 = this.actualScanLine;
    v2745[v2746](this);
    var v2747 = this.CPUTicks;
    var v2748 = this.doubleSpeedShifter;
    timedTicks = v2747 >> v2748;
    var v6817 = this.audioTicks;
    this.audioTicks = v6817 + timedTicks;
    var v6818 = this.emulatorTicks;
    this.emulatorTicks = v6818 + timedTicks;
    var v6819 = this.DIVTicks;
    var v6820 = this.CPUTicks;
    this.DIVTicks = v6819 + v6820;
    var v2752 = this.TIMAEnabled;
    if (v2752) {
      var v6821 = this.timerTicks;
      var v6822 = this.CPUTicks;
      this.timerTicks = v6821 + v6822;
      var v6823 = this.timerTicks;
      var v6824 = this.TACClocker;
      var v2751 = v6823 >= v6824;
      for (;v2751;) {
        var v6825 = this.timerTicks;
        var v6826 = this.TACClocker;
        this.timerTicks = v6825 - v6826;
        var v9949 = this.memory;
        var v10519 = this.memory;
        var v10327 = v10519[65285];
        var v6827 = v9949[65285] = v10327 + 1;
        var v2750 = v6827 == 256;
        if (v2750) {
          var v2749 = this.memory;
          var v6828 = this.memory;
          v2749[65285] = v6828[65286];
          var v6829 = this.interruptsRequested;
          this.interruptsRequested = v6829 | 4;
          this.checkIRQMatching();
        }
        var v6830 = this.timerTicks;
        var v6831 = this.TACClocker;
        v2751 = v6830 >= v6831;
      }
    }
    var v6832 = this.serialTimer;
    var v2756 = v6832 > 0;
    if (v2756) {
      var v6833 = this.serialTimer;
      var v6834 = this.CPUTicks;
      this.serialTimer = v6833 - v6834;
      var v6835 = this.serialTimer;
      var v2753 = v6835 <= 0;
      if (v2753) {
        var v6836 = this.interruptsRequested;
        this.interruptsRequested = v6836 | 8;
        this.checkIRQMatching();
      }
      var v6837 = this.serialShiftTimer;
      var v6838 = this.CPUTicks;
      this.serialShiftTimer = v6837 - v6838;
      var v6839 = this.serialShiftTimer;
      var v2755 = v6839 <= 0;
      if (v2755) {
        this.serialShiftTimer = this.serialShiftTimerAllocated;
        var v2754 = this.memory;
        var v10328 = this.memory;
        var v9950 = v10328[65281];
        var v8976 = v9950 << 1;
        var v6840 = v8976 & 254;
        v2754[65281] = v6840 | 1;
      }
    }
    var v6841 = this.emulatorTicks;
    var v6842 = this.CPUCyclesTotal;
    var v2757 = v6841 >= v6842;
    if (v2757) {
      this.iterationEndRoutine();
    }
    var v6843 = this.instructions;
    this.instructions = v6843 + 1;
    var v6844 = this.instructions;
    var v6845 = this.totalInstructions;
    var v2758 = v6844 > v6845;
    if (v2758) {
      this.iterationEndRoutine();
      var v6846 = this.stopEmulator;
      this.stopEmulator = v6846 | 2;
      checkFinalState();
    }
    var v6847 = this.stopEmulator;
    v2759 = v6847 == 0;
  }
  return;
}
function v649() {
  var v8977 = this.stopEmulator;
  var v6848 = v8977 & 2;
  var v2764 = v6848 == 0;
  if (v2764) {
    var v8978 = this.stopEmulator;
    var v6849 = v8978 & 1;
    var v2763 = v6849 == 1;
    if (v2763) {
      var v6850 = this.CPUStopped;
      var v2762 = !v6850;
      if (v2762) {
        this.stopEmulator = 0;
        this.drewFrame = false;
        this.audioUnderrunAdjustment();
        this.clockUpdate();
        var v6851 = this.halt;
        var v2761 = !v6851;
        if (v2761) {
          this.executeIteration();
        } else {
          this.CPUTicks = 0;
          this.calculateHALTPeriod();
          var v2760 = this.halt;
          if (v2760) {
            this.updateCoreFull();
          } else {
            this.executeIteration();
          }
        }
        this.requestDraw();
      } else {
        this.audioUnderrunAdjustment();
        var v6852 = this.audioTicks;
        var v6853 = this.CPUCyclesTotal;
        this.audioTicks = v6852 + v6853;
        this.audioJIT();
        var v6854 = this.stopEmulator;
        this.stopEmulator = v6854 | 1;
      }
    } else {
      cout("Iterator restarted a faulted core.", 2);
      pause();
    }
  }
  return;
}
function v648() {
  var v2765 = this.noiseSampleTable;
  var v6855 = this.channel4currentVolume;
  var v6856 = this.channel4lastSampleLookup;
  var v2766 = v6855 | v6856;
  this.cachedChannel4Sample = v2765[v2766];
  this.channel4OutputLevelCache();
  return;
}
function v647(address, data$$23) {
  var v2767 = this.channel3canPlay;
  if (v2767) {
    this.audioJIT();
  }
  var v2768 = this.memory;
  var v2769 = 65328 | address;
  v2768[v2769] = data$$23;
  address = address << 1;
  var v2770 = this.channel3PCM;
  v2770[address] = data$$23 >> 4;
  var v2771 = this.channel3PCM;
  var v2772 = address | 1;
  v2771[v2772] = data$$23 & 15;
  return;
}
function v646() {
  var v6857 = this.channel3PCM;
  var v6858 = this.channel3lastSampleLookup;
  var v2773 = v6857[v6858];
  var v2774 = this.channel3patternType;
  this.cachedChannel3Sample = v2773 >> v2774;
  this.channel3OutputLevelCache();
  return;
}
function v645() {
  var v10520 = this.channel1currentSampleLeftTrimary;
  var v10521 = this.channel2currentSampleLeftTrimary;
  var v10329 = v10520 + v10521;
  var v10330 = this.channel3currentSampleLeftSecondary;
  var v9951 = v10329 + v10330;
  var v9952 = this.channel4currentSampleLeftSecondary;
  var v8979 = v9951 + v9952;
  var v8980 = this.VinLeftChannelMasterVolume;
  var v6859 = v8979 * v8980;
  var v2775 = v6859 << 9;
  var v10331 = this.channel1currentSampleRightTrimary;
  var v10332 = this.channel2currentSampleRightTrimary;
  var v9953 = v10331 + v10332;
  var v9954 = this.channel3currentSampleRightSecondary;
  var v8981 = v9953 + v9954;
  var v8982 = this.channel4currentSampleRightSecondary;
  var v6860 = v8981 + v8982;
  var v6861 = this.VinRightChannelMasterVolume;
  var v2776 = v6860 * v6861;
  this.mixerOutputCache = v2775 + v2776;
  return;
}
function v644() {
  var v2777 = this.channel4Enabled;
  if (v2777) {
    this.channel4currentSampleLeftSecondary = this.channel4currentSampleLeft;
    this.channel4currentSampleRightSecondary = this.channel4currentSampleRight;
  } else {
    this.channel4currentSampleLeftSecondary = 0;
    this.channel4currentSampleRightSecondary = 0;
  }
  this.mixerOutputLevelCache();
  return;
}
function v643() {
  var v2778;
  var v6862 = this.leftChannel4;
  if (v6862) {
    v2778 = this.cachedChannel4Sample;
  } else {
    v2778 = 0;
  }
  this.channel4currentSampleLeft = v2778;
  var v2779;
  var v6863 = this.rightChannel4;
  if (v6863) {
    v2779 = this.cachedChannel4Sample;
  } else {
    v2779 = 0;
  }
  this.channel4currentSampleRight = v2779;
  this.channel4OutputLevelSecondaryCache();
  return;
}
function v642() {
  var v6864 = this.memory;
  var v2780 = v6864[65313];
  this.channel4canPlay = v2780 > 7;
  this.channel4EnableCheck();
  this.channel4OutputLevelSecondaryCache();
  return;
}
function v641() {
  var v6865 = this.channel4consecutive;
  var v8984 = !v6865;
  if (v8984) {
    var v8983 = this.channel4totalLength;
    v6865 = v8983 > 0;
  }
  var v2781 = v6865;
  if (v2781) {
    v2781 = this.channel4canPlay;
  }
  this.channel4Enabled = v2781;
  this.channel4OutputLevelSecondaryCache();
  return;
}
function v640() {
  var v2782 = this.channel3Enabled;
  if (v2782) {
    this.channel3currentSampleLeftSecondary = this.channel3currentSampleLeft;
    this.channel3currentSampleRightSecondary = this.channel3currentSampleRight;
  } else {
    this.channel3currentSampleLeftSecondary = 0;
    this.channel3currentSampleRightSecondary = 0;
  }
  this.mixerOutputLevelCache();
  return;
}
function v639() {
  var v2783;
  var v6866 = this.leftChannel3;
  if (v6866) {
    v2783 = this.cachedChannel3Sample;
  } else {
    v2783 = 0;
  }
  this.channel3currentSampleLeft = v2783;
  var v2784;
  var v6867 = this.rightChannel3;
  if (v6867) {
    v2784 = this.cachedChannel3Sample;
  } else {
    v2784 = 0;
  }
  this.channel3currentSampleRight = v2784;
  this.channel3OutputLevelSecondaryCache();
  return;
}
function v638() {
  var v2785 = this.channel3consecutive;
  var v6869 = !v2785;
  if (v6869) {
    var v6868 = this.channel3totalLength;
    v2785 = v6868 > 0;
  }
  this.channel3Enabled = v2785;
  this.channel3OutputLevelSecondaryCache();
  return;
}
function v637() {
  var v6870 = this.channel2CachedDuty;
  var v6871 = this.channel2DutyTracker;
  var v2786 = v6870[v6871];
  if (v2786) {
    this.channel2currentSampleLeftTrimary = this.channel2currentSampleLeftSecondary;
    this.channel2currentSampleRightTrimary = this.channel2currentSampleRightSecondary;
  } else {
    this.channel2currentSampleLeftTrimary = 0;
    this.channel2currentSampleRightTrimary = 0;
  }
  this.mixerOutputLevelCache();
  return;
}
function v636() {
  var v2787 = this.channel2Enabled;
  if (v2787) {
    this.channel2currentSampleLeftSecondary = this.channel2currentSampleLeft;
    this.channel2currentSampleRightSecondary = this.channel2currentSampleRight;
  } else {
    this.channel2currentSampleLeftSecondary = 0;
    this.channel2currentSampleRightSecondary = 0;
  }
  this.channel2OutputLevelTrimaryCache();
  return;
}
function v635() {
  var v2788;
  var v6872 = this.leftChannel2;
  if (v6872) {
    v2788 = this.channel2envelopeVolume;
  } else {
    v2788 = 0;
  }
  this.channel2currentSampleLeft = v2788;
  var v2789;
  var v6873 = this.rightChannel2;
  if (v6873) {
    v2789 = this.channel2envelopeVolume;
  } else {
    v2789 = 0;
  }
  this.channel2currentSampleRight = v2789;
  this.channel2OutputLevelSecondaryCache();
  return;
}
function v634() {
  var v6874 = this.memory;
  var v2790 = v6874[65303];
  this.channel2canPlay = v2790 > 7;
  this.channel2EnableCheck();
  this.channel2OutputLevelSecondaryCache();
  return;
}
function v633() {
  var v6875 = this.channel2consecutive;
  var v8986 = !v6875;
  if (v8986) {
    var v8985 = this.channel2totalLength;
    v6875 = v8985 > 0;
  }
  var v2791 = v6875;
  if (v2791) {
    v2791 = this.channel2canPlay;
  }
  this.channel2Enabled = v2791;
  this.channel2OutputLevelSecondaryCache();
  return;
}
function v632() {
  var v6876 = this.channel1CachedDuty;
  var v6877 = this.channel1DutyTracker;
  var v2792 = v6876[v6877];
  if (v2792) {
    this.channel1currentSampleLeftTrimary = this.channel1currentSampleLeftSecondary;
    this.channel1currentSampleRightTrimary = this.channel1currentSampleRightSecondary;
  } else {
    this.channel1currentSampleLeftTrimary = 0;
    this.channel1currentSampleRightTrimary = 0;
  }
  this.mixerOutputLevelCache();
  return;
}
function v631() {
  var v2793 = this.channel1Enabled;
  if (v2793) {
    this.channel1currentSampleLeftSecondary = this.channel1currentSampleLeft;
    this.channel1currentSampleRightSecondary = this.channel1currentSampleRight;
  } else {
    this.channel1currentSampleLeftSecondary = 0;
    this.channel1currentSampleRightSecondary = 0;
  }
  this.channel1OutputLevelTrimaryCache();
  return;
}
function v630() {
  var v2794;
  var v6878 = this.leftChannel1;
  if (v6878) {
    v2794 = this.channel1envelopeVolume;
  } else {
    v2794 = 0;
  }
  this.channel1currentSampleLeft = v2794;
  var v2795;
  var v6879 = this.rightChannel1;
  if (v6879) {
    v2795 = this.channel1envelopeVolume;
  } else {
    v2795 = 0;
  }
  this.channel1currentSampleRight = v2795;
  this.channel1OutputLevelSecondaryCache();
  return;
}
function v629() {
  var v6880 = this.memory;
  var v2796 = v6880[65298];
  this.channel1canPlay = v2796 > 7;
  this.channel1EnableCheck();
  this.channel1OutputLevelSecondaryCache();
  return;
}
function v628() {
  var v8987 = this.channel1consecutive;
  var v9956 = !v8987;
  if (v9956) {
    var v9955 = this.channel1totalLength;
    v8987 = v9955 > 0;
  }
  var v6881 = v8987;
  if (v6881) {
    var v8988 = this.channel1SweepFault;
    v6881 = !v8988;
  }
  var v2797 = v6881;
  if (v2797) {
    v2797 = this.channel1canPlay;
  }
  this.channel1Enabled = v2797;
  this.channel1OutputLevelSecondaryCache();
  return;
}
function v627() {
  var v9957 = this.channel1FrequencyCounter;
  var v6882 = this.channel1FrequencyCounter = v9957 - 1;
  var v2799 = v6882 == 0;
  if (v2799) {
    this.channel1FrequencyCounter = this.channel1FrequencyTracker;
    var v6883 = this.channel1DutyTracker;
    var v2798 = v6883 + 1;
    this.channel1DutyTracker = v2798 & 7;
    this.channel1OutputLevelTrimaryCache();
  }
  var v9958 = this.channel2FrequencyCounter;
  var v6884 = this.channel2FrequencyCounter = v9958 - 1;
  var v2801 = v6884 == 0;
  if (v2801) {
    this.channel2FrequencyCounter = this.channel2FrequencyTracker;
    var v6885 = this.channel2DutyTracker;
    var v2800 = v6885 + 1;
    this.channel2DutyTracker = v2800 & 7;
    this.channel2OutputLevelTrimaryCache();
  }
  var v9959 = this.channel3Counter;
  var v6886 = this.channel3Counter = v9959 - 1;
  var v2804 = v6886 == 0;
  if (v2804) {
    var v2803 = this.channel3canPlay;
    if (v2803) {
      var v6887 = this.channel3lastSampleLookup;
      var v2802 = v6887 + 1;
      this.channel3lastSampleLookup = v2802 & 31;
    }
    this.channel3Counter = this.channel3FrequencyPeriod;
    this.channel3UpdateCache();
  }
  var v9960 = this.channel4Counter;
  var v6888 = this.channel4Counter = v9960 - 1;
  var v2807 = v6888 == 0;
  if (v2807) {
    var v6889 = this.channel4lastSampleLookup;
    var v2805 = v6889 + 1;
    var v2806 = this.channel4BitRange;
    this.channel4lastSampleLookup = v2805 & v2806;
    this.channel4Counter = this.channel4FrequencyPeriod;
    this.channel4UpdateCache();
  }
  return;
}
function v626() {
  var v6890 = this.channel1envelopeSweepsLast;
  var v2812 = v6890 > -1;
  if (v2812) {
    var v6891 = this.channel1envelopeSweeps;
    var v2811 = v6891 > 0;
    if (v2811) {
      --this.channel1envelopeSweeps;
    } else {
      var v6892 = this.channel1envelopeType;
      var v2810 = !v6892;
      if (v2810) {
        var v6893 = this.channel1envelopeVolume;
        var v2808 = v6893 > 0;
        if (v2808) {
          --this.channel1envelopeVolume;
          this.channel1envelopeSweeps = this.channel1envelopeSweepsLast;
          this.channel1OutputLevelCache();
        } else {
          this.channel1envelopeSweepsLast = -1;
        }
      } else {
        var v6894 = this.channel1envelopeVolume;
        var v2809 = v6894 < 15;
        if (v2809) {
          ++this.channel1envelopeVolume;
          this.channel1envelopeSweeps = this.channel1envelopeSweepsLast;
          this.channel1OutputLevelCache();
        } else {
          this.channel1envelopeSweepsLast = -1;
        }
      }
    }
  }
  var v6895 = this.channel2envelopeSweepsLast;
  var v2817 = v6895 > -1;
  if (v2817) {
    var v6896 = this.channel2envelopeSweeps;
    var v2816 = v6896 > 0;
    if (v2816) {
      --this.channel2envelopeSweeps;
    } else {
      var v6897 = this.channel2envelopeType;
      var v2815 = !v6897;
      if (v2815) {
        var v6898 = this.channel2envelopeVolume;
        var v2813 = v6898 > 0;
        if (v2813) {
          --this.channel2envelopeVolume;
          this.channel2envelopeSweeps = this.channel2envelopeSweepsLast;
          this.channel2OutputLevelCache();
        } else {
          this.channel2envelopeSweepsLast = -1;
        }
      } else {
        var v6899 = this.channel2envelopeVolume;
        var v2814 = v6899 < 15;
        if (v2814) {
          ++this.channel2envelopeVolume;
          this.channel2envelopeSweeps = this.channel2envelopeSweepsLast;
          this.channel2OutputLevelCache();
        } else {
          this.channel2envelopeSweepsLast = -1;
        }
      }
    }
  }
  var v6900 = this.channel4envelopeSweepsLast;
  var v2826 = v6900 > -1;
  if (v2826) {
    var v6901 = this.channel4envelopeSweeps;
    var v2825 = v6901 > 0;
    if (v2825) {
      --this.channel4envelopeSweeps;
    } else {
      var v6902 = this.channel4envelopeType;
      var v2824 = !v6902;
      if (v2824) {
        var v6903 = this.channel4envelopeVolume;
        var v2820 = v6903 > 0;
        if (v2820) {
          var v8989 = this.channel4envelopeVolume;
          var v2818 = this.channel4envelopeVolume = v8989 - 1;
          var v2819 = this.channel4VolumeShifter;
          this.channel4currentVolume = v2818 << v2819;
          this.channel4envelopeSweeps = this.channel4envelopeSweepsLast;
          this.channel4UpdateCache();
        } else {
          this.channel4envelopeSweepsLast = -1;
        }
      } else {
        var v6904 = this.channel4envelopeVolume;
        var v2823 = v6904 < 15;
        if (v2823) {
          var v8990 = this.channel4envelopeVolume;
          var v2821 = this.channel4envelopeVolume = v8990 + 1;
          var v2822 = this.channel4VolumeShifter;
          this.channel4currentVolume = v2821 << v2822;
          this.channel4envelopeSweeps = this.channel4envelopeSweepsLast;
          this.channel4UpdateCache();
        } else {
          this.channel4envelopeSweepsLast = -1;
        }
      }
    }
  }
  return;
}
function v625() {
  var v6905 = this.channel1lastTimeSweep;
  var v2837 = v6905 > 0;
  if (v2837) {
    var v6906 = this.channel1frequencySweepDivider;
    var v2836 = v6906 > 0;
    if (v2836) {
      var v6907 = this.channel1numSweep;
      var v2835 = v6907 > 0;
      if (v2835) {
        --this.channel1numSweep;
        var v2834 = this.channel1decreaseSweep;
        if (v2834) {
          var v6908 = this.channel1ShadowFrequency;
          var v8991 = this.channel1ShadowFrequency;
          var v8992 = this.channel1frequencySweepDivider;
          var v6909 = v8991 >> v8992;
          this.channel1ShadowFrequency = v6908 - v6909;
          var v2827 = this.channel1ShadowFrequency;
          this.channel1frequency = v2827 & 2047;
          var v6910 = this.channel1frequency;
          var v2828 = 2048 - v6910;
          this.channel1FrequencyTracker = v2828 << 2;
        } else {
          var v6911 = this.channel1ShadowFrequency;
          var v8993 = this.channel1ShadowFrequency;
          var v8994 = this.channel1frequencySweepDivider;
          var v6912 = v8993 >> v8994;
          this.channel1ShadowFrequency = v6911 + v6912;
          this.channel1frequency = this.channel1ShadowFrequency;
          var v6913 = this.channel1ShadowFrequency;
          var v2833 = v6913 <= 2047;
          if (v2833) {
            var v6914 = this.channel1frequency;
            var v2829 = 2048 - v6914;
            this.channel1FrequencyTracker = v2829 << 2;
            var v8995 = this.channel1ShadowFrequency;
            var v9961 = this.channel1ShadowFrequency;
            var v9962 = this.channel1frequencySweepDivider;
            var v8996 = v9961 >> v9962;
            var v6915 = v8995 + v8996;
            var v2831 = v6915 > 2047;
            if (v2831) {
              this.channel1SweepFault = true;
              this.channel1EnableCheck();
              var v2830 = this.memory;
              var v8997 = v2830[65318];
              v2830[65318] = v8997 & 254;
            }
          } else {
            var v6916 = this.channel1frequency;
            this.channel1frequency = v6916 & 2047;
            this.channel1SweepFault = true;
            this.channel1EnableCheck();
            var v2832 = this.memory;
            var v8998 = v2832[65318];
            v2832[65318] = v8998 & 254;
          }
        }
      }
      this.channel1timeSweep = this.channel1lastTimeSweep;
    } else {
      this.channel1SweepFault = true;
      this.channel1EnableCheck();
    }
  }
  return;
}
function v624() {
  var v8999 = this.channel1SweepFault;
  var v6917 = !v8999;
  if (v6917) {
    var v9000 = this.channel1timeSweep;
    v6917 = v9000 > 0;
  }
  var v2839 = v6917;
  if (v2839) {
    var v9963 = this.channel1timeSweep;
    var v6918 = this.channel1timeSweep = v9963 - 1;
    var v2838 = v6918 == 0;
    if (v2838) {
      this.runAudioSweep();
    }
  }
  return;
}
function v623() {
  var v6919 = this.channel1totalLength;
  var v2842 = v6919 > 1;
  if (v2842) {
    --this.channel1totalLength;
  } else {
    var v6920 = this.channel1totalLength;
    var v2841 = v6920 == 1;
    if (v2841) {
      this.channel1totalLength = 0;
      this.channel1EnableCheck();
      var v2840 = this.memory;
      var v9001 = v2840[65318];
      v2840[65318] = v9001 & 254;
    }
  }
  var v6921 = this.channel2totalLength;
  var v2845 = v6921 > 1;
  if (v2845) {
    --this.channel2totalLength;
  } else {
    var v6922 = this.channel2totalLength;
    var v2844 = v6922 == 1;
    if (v2844) {
      this.channel2totalLength = 0;
      this.channel2EnableCheck();
      var v2843 = this.memory;
      var v9002 = v2843[65318];
      v2843[65318] = v9002 & 253;
    }
  }
  var v6923 = this.channel3totalLength;
  var v2848 = v6923 > 1;
  if (v2848) {
    --this.channel3totalLength;
  } else {
    var v6924 = this.channel3totalLength;
    var v2847 = v6924 == 1;
    if (v2847) {
      this.channel3totalLength = 0;
      this.channel3EnableCheck();
      var v2846 = this.memory;
      var v9003 = v2846[65318];
      v2846[65318] = v9003 & 251;
    }
  }
  var v6925 = this.channel4totalLength;
  var v2851 = v6925 > 1;
  if (v2851) {
    --this.channel4totalLength;
  } else {
    var v6926 = this.channel4totalLength;
    var v2850 = v6926 == 1;
    if (v2850) {
      this.channel4totalLength = 0;
      this.channel4EnableCheck();
      var v2849 = this.memory;
      var v9004 = v2849[65318];
      v2849[65318] = v9004 & 247;
    }
  }
  return;
}
function v622() {
  var v2852 = this.sequencePosition;
  var v9005 = this.sequencePosition;
  this.sequencePosition = v9005 + 1;
  switch(v2852) {
    case 0:
      this.clockAudioLength();
      break;
    case 2:
      this.clockAudioLength();
      this.clockAudioSweep();
      break;
    case 4:
      this.clockAudioLength();
      break;
    case 6:
      this.clockAudioLength();
      this.clockAudioSweep();
      break;
    case 7:
      this.clockAudioEnvelope();
      this.sequencePosition = 0;
  }
  return;
}
function v621() {
  var v2855 = settings[0];
  if (v2855) {
    var v2853 = this.audioTicks;
    this.generateAudio(v2853);
  } else {
    var v2854 = this.audioTicks;
    this.generateAudioFake(v2854);
  }
  this.audioTicks = 0;
  return;
}
function v620(numSamples$$1) {
  var v6927 = this.soundMasterEnabled;
  if (v6927) {
    var v9006 = this.CPUStopped;
    v6927 = !v9006;
  }
  var v2858 = v6927;
  if (v2858) {
    var v6928 = numSamples$$1 = numSamples$$1 - 1;
    var v2857 = v6928 > -1;
    for (;v2857;) {
      this.computeAudioChannels();
      var v9964 = this.sequencerClocks;
      var v6929 = this.sequencerClocks = v9964 - 1;
      var v2856 = v6929 == 0;
      if (v2856) {
        this.audioComputeSequencer();
        this.sequencerClocks = 8192;
      }
      var v6930 = numSamples$$1 = numSamples$$1 - 1;
      v2857 = v6930 > -1;
    }
  }
  return;
}
function v619(numSamples) {
  var v6931 = this.soundMasterEnabled;
  if (v6931) {
    var v9007 = this.CPUStopped;
    v6931 = !v9007;
  }
  var v2870 = v6931;
  if (v2870) {
    var samplesToGenerate = 0;
    var v2865 = numSamples > 0;
    for (;v2865;) {
      var v2859;
      var v9008 = this.sequencerClocks;
      var v6932 = numSamples < v9008;
      if (v6932) {
        v2859 = numSamples;
      } else {
        v2859 = this.sequencerClocks;
      }
      samplesToGenerate = v2859;
      var v6933 = this.sequencerClocks;
      this.sequencerClocks = v6933 - samplesToGenerate;
      numSamples = numSamples - samplesToGenerate;
      var v6934 = samplesToGenerate = samplesToGenerate - 1;
      var v2863 = v6934 > -1;
      for (;v2863;) {
        this.computeAudioChannels();
        var v2860 = this.currentBuffer;
        var v2861 = this.audioIndex;
        var v9009 = this.audioIndex;
        this.audioIndex = v9009 + 1;
        v2860[v2861] = this.mixerOutputCache;
        var v6935 = this.audioIndex;
        var v6936 = this.numSamplesTotal;
        var v2862 = v6935 == v6936;
        if (v2862) {
          this.audioIndex = 0;
          this.outputAudio();
        }
        var v6937 = samplesToGenerate = samplesToGenerate - 1;
        v2863 = v6937 > -1;
      }
      var v6938 = this.sequencerClocks;
      var v2864 = v6938 == 0;
      if (v2864) {
        this.audioComputeSequencer();
        this.sequencerClocks = 8192;
      }
      v2865 = numSamples > 0;
    }
  } else {
    var v6939 = numSamples = numSamples - 1;
    var v2869 = v6939 > -1;
    for (;v2869;) {
      var v2866 = this.currentBuffer;
      var v2867 = this.audioIndex;
      var v9010 = this.audioIndex;
      this.audioIndex = v9010 + 1;
      v2866[v2867] = 61680;
      var v6940 = this.audioIndex;
      var v6941 = this.numSamplesTotal;
      var v2868 = v6940 == v6941;
      if (v2868) {
        this.audioIndex = 0;
        this.outputAudio();
      }
      var v6942 = numSamples = numSamples - 1;
      v2869 = v6942 > -1;
    }
  }
  return;
}
function v618() {
  var sampleFactor = 0;
  var dirtySample = 0;
  var averageL = 0;
  var averageR = 0;
  var destinationPosition = 0;
  var divisor1 = settings[13];
  var divisor2 = divisor1 * 240;
  var sourcePosition = 0;
  var v6943 = this.numSamplesTotal;
  var v2878 = sourcePosition < v6943;
  for (;v2878;) {
    sampleFactor = averageL = averageR = 0;
    var v2873 = sampleFactor < divisor1;
    for (;v2873;) {
      var v2871 = this.currentBuffer;
      var v2872 = sourcePosition;
      sourcePosition = sourcePosition + 1;
      dirtySample = v2871[v2872];
      var v6944 = dirtySample >> 9;
      averageL = averageL + v6944;
      var v6945 = dirtySample & 511;
      averageR = averageR + v6945;
      ++sampleFactor;
      v2873 = sampleFactor < divisor1;
    }
    var v2874 = this.secondaryBuffer;
    var v2875 = destinationPosition;
    destinationPosition = destinationPosition + 1;
    var v6946 = averageL / divisor2;
    v2874[v2875] = v6946 - 1;
    var v2876 = this.secondaryBuffer;
    var v2877 = destinationPosition;
    destinationPosition = destinationPosition + 1;
    var v6947 = averageR / divisor2;
    v2876[v2877] = v6947 - 1;
    var v6948 = this.numSamplesTotal;
    v2878 = sourcePosition < v6948;
  }
  var v2879 = this.audioHandle;
  var v2880 = this.secondaryBuffer;
  v2879.writeAudioNoCallback(v2880);
  return;
}
function v617() {
  this.channel1FrequencyTracker = 8192;
  this.channel1DutyTracker = 0;
  var v2881 = this.dutyLookup;
  this.channel1CachedDuty = v2881[2];
  this.channel1totalLength = 0;
  this.channel1envelopeVolume = 0;
  this.channel1envelopeType = false;
  this.channel1envelopeSweeps = 0;
  this.channel1envelopeSweepsLast = 0;
  this.channel1consecutive = true;
  this.channel1frequency = 0;
  this.channel1SweepFault = false;
  this.channel1ShadowFrequency = 0;
  this.channel1timeSweep = 1;
  this.channel1lastTimeSweep = 0;
  this.channel1numSweep = 0;
  this.channel1frequencySweepDivider = 0;
  this.channel1decreaseSweep = false;
  this.channel2FrequencyTracker = 8192;
  this.channel2DutyTracker = 0;
  var v2882 = this.dutyLookup;
  this.channel2CachedDuty = v2882[2];
  this.channel2totalLength = 0;
  this.channel2envelopeVolume = 0;
  this.channel2envelopeType = false;
  this.channel2envelopeSweeps = 0;
  this.channel2envelopeSweepsLast = 0;
  this.channel2consecutive = true;
  this.channel2frequency = 0;
  this.channel3canPlay = false;
  this.channel3totalLength = 0;
  this.channel3patternType = 4;
  this.channel3frequency = 0;
  this.channel3consecutive = true;
  this.channel3Counter = 2048;
  this.channel4FrequencyPeriod = 8;
  this.channel4totalLength = 0;
  this.channel4envelopeVolume = 0;
  this.channel4currentVolume = 0;
  this.channel4envelopeType = false;
  this.channel4envelopeSweeps = 0;
  this.channel4envelopeSweepsLast = 0;
  this.channel4consecutive = true;
  this.channel4BitRange = 32767;
  this.noiseSampleTable = this.LSFR15Table;
  this.channel4VolumeShifter = 15;
  this.channel1FrequencyCounter = 8192;
  this.channel2FrequencyCounter = 8192;
  this.channel3Counter = 2048;
  this.channel3FrequencyPeriod = 2048;
  this.channel3lastSampleLookup = 0;
  this.channel4lastSampleLookup = 0;
  this.VinLeftChannelMasterVolume = 8;
  this.VinRightChannelMasterVolume = 8;
  this.mixerOutputCache = 0;
  this.sequencerClocks = 8192;
  this.sequencePosition = 0;
  this.channel4FrequencyPeriod = 8;
  this.channel4Counter = 8;
  this.cachedChannel3Sample = 0;
  this.cachedChannel4Sample = 0;
  this.channel1Enabled = false;
  this.channel2Enabled = false;
  this.channel3Enabled = false;
  this.channel4Enabled = false;
  this.channel1canPlay = false;
  this.channel2canPlay = false;
  this.channel4canPlay = false;
  this.channel1OutputLevelCache();
  this.channel2OutputLevelCache();
  this.channel3OutputLevelCache();
  this.channel4OutputLevelCache();
  return;
}
function v616() {
  var v2886 = settings[0];
  if (v2886) {
    var v2883 = this.bufferContainAmount;
    var v6949 = this.audioHandle;
    var v2884 = v6949.remainingBuffer();
    var underrunAmount = v2883 - v2884;
    var v2885 = underrunAmount > 0;
    if (v2885) {
      var v6950 = this.CPUCyclesTotalCurrent;
      var v9011 = underrunAmount >> 1;
      var v9012 = this.machineOut;
      var v6951 = v9011 * v9012;
      this.CPUCyclesTotalCurrent = v6950 + v6951;
      this.recalculateIterationClockLimit();
    }
  }
  return;
}
function v615() {
  var randomFactor = 1;
  var v10706 = this.getTypedArray(524288, 0, "int8");
  this.LSFR15Table = v10706;
  var LSFR = 32767;
  var LSFRShifted = 16383;
  var index$$57 = 0;
  var v2919 = index$$57 < 32768;
  for (;v2919;) {
    var v2887 = LSFR & 1;
    randomFactor = 1 - v2887;
    var v2888 = this.LSFR15Table;
    var v2889 = 32768 | index$$57;
    v2888[v2889] = randomFactor;
    var v2890 = this.LSFR15Table;
    var v2891 = 65536 | index$$57;
    v2890[v2891] = randomFactor * 2;
    var v2892 = this.LSFR15Table;
    var v2893 = 98304 | index$$57;
    v2892[v2893] = randomFactor * 3;
    var v2894 = this.LSFR15Table;
    var v2895 = 131072 | index$$57;
    v2894[v2895] = randomFactor * 4;
    var v2896 = this.LSFR15Table;
    var v2897 = 163840 | index$$57;
    v2896[v2897] = randomFactor * 5;
    var v2898 = this.LSFR15Table;
    var v2899 = 196608 | index$$57;
    v2898[v2899] = randomFactor * 6;
    var v2900 = this.LSFR15Table;
    var v2901 = 229376 | index$$57;
    v2900[v2901] = randomFactor * 7;
    var v2902 = this.LSFR15Table;
    var v2903 = 262144 | index$$57;
    v2902[v2903] = randomFactor * 8;
    var v2904 = this.LSFR15Table;
    var v2905 = 294912 | index$$57;
    v2904[v2905] = randomFactor * 9;
    var v2906 = this.LSFR15Table;
    var v2907 = 327680 | index$$57;
    v2906[v2907] = randomFactor * 10;
    var v2908 = this.LSFR15Table;
    var v2909 = 360448 | index$$57;
    v2908[v2909] = randomFactor * 11;
    var v2910 = this.LSFR15Table;
    var v2911 = 393216 | index$$57;
    v2910[v2911] = randomFactor * 12;
    var v2912 = this.LSFR15Table;
    var v2913 = 425984 | index$$57;
    v2912[v2913] = randomFactor * 13;
    var v2914 = this.LSFR15Table;
    var v2915 = 458752 | index$$57;
    v2914[v2915] = randomFactor * 14;
    var v2916 = this.LSFR15Table;
    var v2917 = 491520 | index$$57;
    v2916[v2917] = randomFactor * 15;
    LSFRShifted = LSFR >> 1;
    var v9013 = LSFRShifted ^ LSFR;
    var v6952 = v9013 & 1;
    var v2918 = v6952 << 14;
    LSFR = LSFRShifted | v2918;
    ++index$$57;
    v2919 = index$$57 < 32768;
  }
  var v10707 = this.getTypedArray(2048, 0, "int8");
  this.LSFR7Table = v10707;
  LSFR = 127;
  index$$57 = 0;
  var v2952 = index$$57 < 128;
  for (;v2952;) {
    var v2920 = LSFR & 1;
    randomFactor = 1 - v2920;
    var v2921 = this.LSFR7Table;
    var v2922 = 128 | index$$57;
    v2921[v2922] = randomFactor;
    var v2923 = this.LSFR7Table;
    var v2924 = 256 | index$$57;
    v2923[v2924] = randomFactor * 2;
    var v2925 = this.LSFR7Table;
    var v2926 = 384 | index$$57;
    v2925[v2926] = randomFactor * 3;
    var v2927 = this.LSFR7Table;
    var v2928 = 512 | index$$57;
    v2927[v2928] = randomFactor * 4;
    var v2929 = this.LSFR7Table;
    var v2930 = 640 | index$$57;
    v2929[v2930] = randomFactor * 5;
    var v2931 = this.LSFR7Table;
    var v2932 = 768 | index$$57;
    v2931[v2932] = randomFactor * 6;
    var v2933 = this.LSFR7Table;
    var v2934 = 896 | index$$57;
    v2933[v2934] = randomFactor * 7;
    var v2935 = this.LSFR7Table;
    var v2936 = 1024 | index$$57;
    v2935[v2936] = randomFactor * 8;
    var v2937 = this.LSFR7Table;
    var v2938 = 1152 | index$$57;
    v2937[v2938] = randomFactor * 9;
    var v2939 = this.LSFR7Table;
    var v2940 = 1280 | index$$57;
    v2939[v2940] = randomFactor * 10;
    var v2941 = this.LSFR7Table;
    var v2942 = 1408 | index$$57;
    v2941[v2942] = randomFactor * 11;
    var v2943 = this.LSFR7Table;
    var v2944 = 1536 | index$$57;
    v2943[v2944] = randomFactor * 12;
    var v2945 = this.LSFR7Table;
    var v2946 = 1664 | index$$57;
    v2945[v2946] = randomFactor * 13;
    var v2947 = this.LSFR7Table;
    var v2948 = 1792 | index$$57;
    v2947[v2948] = randomFactor * 14;
    var v2949 = this.LSFR7Table;
    var v2950 = 1920 | index$$57;
    v2949[v2950] = randomFactor * 15;
    LSFRShifted = LSFR >> 1;
    var v9014 = LSFRShifted ^ LSFR;
    var v6953 = v9014 & 1;
    var v2951 = v6953 << 6;
    LSFR = LSFRShifted | v2951;
    ++index$$57;
    v2952 = index$$57 < 128;
  }
  var v9015 = this.noiseSampleTable;
  var v6954 = !v9015;
  if (v6954) {
    var v9965 = this.memory;
    var v9016 = v9965.length;
    v6954 = v9016 == 65536;
  }
  var v2954 = v6954;
  if (v2954) {
    var v2953;
    var v10333 = this.memory;
    var v9966 = v10333[65314];
    var v9017 = v9966 & 8;
    var v6955 = v9017 == 8;
    if (v6955) {
      v2953 = this.LSFR7Table;
    } else {
      v2953 = this.LSFR15Table;
    }
    this.noiseSampleTable = v2953;
  }
  return;
}
function v614() {
  this.audioIndex = 0;
  var v9967 = this.sampleSize;
  var v9968 = settings[7];
  var v9018 = v9967 * v9968;
  var v9019 = settings[13];
  var v6956 = v9018 / v9019;
  var v2955 = Math.max(v6956, 4096);
  this.bufferContainAmount = v2955 << 1;
  var v6957 = this.sampleSize;
  var v9020 = this.sampleSize;
  var v9021 = settings[13];
  var v6958 = v9020 % v9021;
  var v2956 = v6957 - v6958;
  this.numSamplesTotal = v2956 | 0;
  var v2957 = this.numSamplesTotal;
  var v10708 = this.getTypedArray(v2957, 61680, "int32");
  this.currentBuffer = v10708;
  var v9022 = this.numSamplesTotal;
  var v6959 = v9022 << 1;
  var v6960 = settings[13];
  var v2958 = v6959 / v6960;
  var v10709 = this.getTypedArray(v2958, 0, "float32");
  this.secondaryBuffer = v10709;
  return;
}
function v613() {
  var v6961 = settings[0];
  if (v6961) {
    v6961 = this.audioHandle;
  }
  var v2961 = v6961;
  if (v2961) {
    try {
      var v2959 = this.audioHandle;
      var v2960 = settings[14];
      v2959.changeVolume(v2960);
    } catch (error$$23) {
    }
  }
  return;
}
function v612() {
  var v2962 = 4194304 / 1E3;
  var v2963 = settings[6];
  this.sampleSize = v2962 * v2963;
  this.machineOut = settings[13];
  var v2970 = settings[0];
  if (v2970) {
    try {
      var parentObj$$513 = this;
      var v6962 = settings[13];
      var v2964 = 4194304 / v6962;
      var v10334 = this.sampleSize;
      var v10335 = settings[8];
      var v9969 = v10334 * v10335;
      var v9970 = settings[13];
      var v9023 = v9969 / v9970;
      var v6963 = Math.max(v9023, 8192);
      var v2965 = v6963 << 1;
      var v2966 = settings[14];
      var v10710 = new XAudioServer(2, v2964, 0, v2965, null, v2966);
      this.audioHandle = v10710;
      this.initAudioBuffer();
    } catch (error$$21) {
      var v6964 = error$$21.message;
      var v2967 = "Audio system cannot run: " + v6964;
      cout(v2967, 2);
      settings[0] = false;
    }
  } else {
    var v2969 = this.audioHandle;
    if (v2969) {
      try {
        var v2968 = this.audioHandle;
        v2968.changeVolume(0);
      } catch (error$$22) {
      }
    }
  }
  return;
}
function v611(x$$48, y$$31) {
  x$$48 = x$$48 * -100;
  x$$48 = x$$48 + 2047;
  this.highX = x$$48 >> 8;
  this.lowX = x$$48 & 255;
  y$$31 = y$$31 * -100;
  y$$31 = y$$31 + 2047;
  this.highY = y$$31 >> 8;
  this.lowY = y$$31 & 255;
  return;
}
function v610(key$$14, down) {
  if (down) {
    var v6965 = this.JoyPad;
    var v9024 = 1 << key$$14;
    var v6966 = 255 ^ v9024;
    this.JoyPad = v6965 & v6966;
    var v9025 = this.cGBC;
    var v6967 = !v9025;
    if (v6967) {
      var v9971 = this.usedBootROM;
      var v9026 = !v9971;
      var v9973 = !v9026;
      if (v9973) {
        var v9972 = this.usedGBCBootROM;
        v9026 = !v9972;
      }
      v6967 = v9026;
    }
    var v2971 = v6967;
    if (v2971) {
      var v6968 = this.interruptsRequested;
      this.interruptsRequested = v6968 | 16;
      this.remainingClocks = 0;
      this.checkIRQMatching();
    }
  } else {
    var v6969 = this.JoyPad;
    var v6970 = 1 << key$$14;
    this.JoyPad = v6969 | v6970;
  }
  var v2972 = this.memory;
  var v9974 = this.memory;
  var v9027 = v9974[65280];
  var v6971 = v9027 & 48;
  var v9975;
  var v10587 = this.memory;
  var v10571 = v10587[65280];
  var v10522 = v10571 & 32;
  var v10337 = v10522 == 0;
  if (v10337) {
    var v10336 = this.JoyPad;
    v9975 = v10336 >> 4;
  } else {
    v9975 = 15;
  }
  var v9028 = v9975;
  var v9976;
  var v10588 = this.memory;
  var v10572 = v10588[65280];
  var v10523 = v10572 & 16;
  var v10339 = v10523 == 0;
  if (v10339) {
    var v10338 = this.JoyPad;
    v9976 = v10338 & 15;
  } else {
    v9976 = 15;
  }
  var v9029 = v9976;
  var v6972 = v9028 & v9029;
  v2972[65280] = v6971 + v6972;
  this.CPUStopped = false;
  return;
}
function v609() {
  var v9030 = this.offscreenWidth;
  var v9031 = this.onscreenWidth;
  var v6973 = v9030 == v9031;
  if (v6973) {
    var v9032 = this.offscreenHeight;
    var v9033 = this.onscreenHeight;
    v6973 = v9032 == v9033;
  }
  var v2981 = v6973;
  if (v2981) {
    var v2973 = this.drawContextOnscreen;
    var v2974 = this.canvasBuffer;
    v2973.putImageData(v2974, 0, 0);
  } else {
    var v2975 = this.drawContextOffscreen;
    var v2976 = this.canvasBuffer;
    v2975.putImageData(v2976, 0, 0);
    var v2977 = this.drawContextOnscreen;
    var v2978 = this.canvasOffscreen;
    var v2979 = this.onscreenWidth;
    var v2980 = this.onscreenHeight;
    v2977.drawImage(v2978, 0, 0, v2979, v2980);
  }
  return;
}
function v608() {
  this.recomputeDimension();
  var v6974 = this.offscreenRGBCount;
  var v2982 = v6974 != 92160;
  if (v2982) {
    this.compileResizeFrameBufferFunction();
  } else {
    this.resizer = null;
  }
  try {
    var v10711 = new GameBoyCanvas;
    this.canvasOffscreen = v10711;
    var v2983 = this.canvasOffscreen;
    v2983.width = this.offscreenWidth;
    var v2984 = this.canvasOffscreen;
    v2984.height = this.offscreenHeight;
    var v2985 = this.canvasOffscreen;
    var v10712 = v2985.getContext("2d");
    this.drawContextOffscreen = v10712;
    var v2986 = this.canvas;
    var v10713 = v2986.getContext("2d");
    this.drawContextOnscreen = v10713;
    try {
      var v2987 = this.drawContextOffscreen;
      var v2988 = this.offscreenWidth;
      var v2989 = this.offscreenHeight;
      var v10714 = v2987.createImageData(v2988, v2989);
      this.canvasBuffer = v10714;
    } catch (error$$19) {
      var v9034 = error$$19.message;
      var v6975 = 'Falling back to the getImageData initialization (Error "' + v9034;
      var v2990 = v6975 + '").';
      cout(v2990, 1);
      var v2991 = this.drawContextOffscreen;
      var v2992 = this.offscreenWidth;
      var v2993 = this.offscreenHeight;
      var v10715 = v2991.getImageData(0, 0, v2992, v2993);
      this.canvasBuffer = v10715;
    }
    var index$$56 = this.offscreenRGBCount;
    var v3002 = index$$56 > 0;
    for (;v3002;) {
      var v6976 = this.canvasBuffer;
      var v2994 = v6976.data;
      var v2995 = index$$56 = index$$56 - 4;
      v2994[v2995] = 248;
      var v6977 = this.canvasBuffer;
      var v2996 = v6977.data;
      var v2997 = index$$56 + 1;
      v2996[v2997] = 248;
      var v6978 = this.canvasBuffer;
      var v2998 = v6978.data;
      var v2999 = index$$56 + 2;
      v2998[v2999] = 248;
      var v6979 = this.canvasBuffer;
      var v3000 = v6979.data;
      var v3001 = index$$56 + 3;
      v3000[v3001] = 255;
      v3002 = index$$56 > 0;
    }
    this.graphicsBlit();
    var v6980 = this.canvas;
    var v3003 = v6980.style;
    v3003.visibility = "visible";
    var v6981 = this.swizzledFrame;
    var v3004 = v6981 == null;
    if (v3004) {
      var v10716 = this.getTypedArray(69120, 255, "uint8");
      this.swizzledFrame = v10716;
    }
    this.drewFrame = true;
    this.requestDraw();
  } catch (error$$20) {
    var v10524 = error$$20.message;
    var v10340 = "HTML5 Canvas support required: " + v10524;
    var v9977 = v10340 + "file: ";
    var v9978 = error$$20.fileName;
    var v9035 = v9977 + v9978;
    var v6982 = v9035 + ", line: ";
    var v6983 = error$$20.lineNumber;
    var v3005 = v6982 + v6983;
    throw new Error(v3005);
  }
  return;
}
function v607() {
  initNewCanvas();
  var v3006 = this.canvas;
  this.onscreenWidth = v3006.width;
  var v3007 = this.canvas;
  this.onscreenHeight = v3007.height;
  var v6984 = GameBoyWindow;
  if (v6984) {
    v6984 = GameBoyWindow.mozRequestAnimationFrame;
  }
  var v3012 = v6984;
  if (v3012) {
    var v3008 = this.canvas;
    var v6985;
    var v9979 = settings[12];
    var v9037 = !v9979;
    if (v9037) {
      v6985 = 160;
    } else {
      var v9036 = this.canvas;
      v6985 = v9036.width;
    }
    v3008.width = this.onscreenWidth = v6985;
    var v3009 = this.canvas;
    var v6986;
    var v9980 = settings[12];
    var v9039 = !v9980;
    if (v9039) {
      v6986 = 144;
    } else {
      var v9038 = this.canvas;
      v6986 = v9038.height;
    }
    v3009.height = this.onscreenHeight = v6986;
  } else {
    var v3010 = this.canvas;
    this.onscreenWidth = v3010.width;
    var v3011 = this.canvas;
    this.onscreenHeight = v3011.height;
  }
  var v3013;
  var v9040 = settings[12];
  var v6988 = !v9040;
  if (v6988) {
    v3013 = 160;
  } else {
    var v6987 = this.canvas;
    v3013 = v6987.width;
  }
  this.offscreenWidth = v3013;
  var v3014;
  var v9041 = settings[12];
  var v6990 = !v9041;
  if (v6990) {
    v3014 = 144;
  } else {
    var v6989 = this.canvas;
    v3014 = v6989.height;
  }
  this.offscreenHeight = v3014;
  var v6991 = this.offscreenWidth;
  var v6992 = this.offscreenHeight;
  var v3015 = v6991 * v6992;
  this.offscreenRGBCount = v3015 * 4;
  return;
}
function v606() {
  var v10341 = this.cMBC1;
  var v10525 = !v10341;
  if (v10525) {
    v10341 = this.cMBC2;
  }
  var v9981 = v10341;
  var v10342 = !v9981;
  if (v10342) {
    v9981 = this.cMBC3;
  }
  var v9042 = v9981;
  var v9982 = !v9042;
  if (v9982) {
    v9042 = this.cMBC5;
  }
  var v6993 = v9042;
  var v9043 = !v6993;
  if (v9043) {
    v6993 = this.cMBC7;
  }
  var v3016 = v6993;
  var v6994 = !v3016;
  if (v6994) {
    v3016 = this.cRUMBLE;
  }
  return v3016;
}
function v605() {
  var v3020 = this.cMBC2;
  if (v3020) {
    this.numRAMBanks = 1 / 16;
  } else {
    var v9983 = this.cMBC1;
    var v10343 = !v9983;
    if (v10343) {
      v9983 = this.cRUMBLE;
    }
    var v9044 = v9983;
    var v9984 = !v9044;
    if (v9984) {
      v9044 = this.cMBC3;
    }
    var v6995 = v9044;
    var v9045 = !v6995;
    if (v9045) {
      v6995 = this.cHuC3;
    }
    var v3019 = v6995;
    if (v3019) {
      this.numRAMBanks = 4;
    } else {
      var v3018 = this.cMBC5;
      if (v3018) {
        this.numRAMBanks = 16;
      } else {
        var v3017 = this.cSRAM;
        if (v3017) {
          this.numRAMBanks = 1;
        }
      }
    }
  }
  var v6996 = this.numRAMBanks;
  var v3025 = v6996 > 0;
  if (v3025) {
    var v6997 = this.MBCRAMUtilized();
    var v3021 = !v6997;
    if (v3021) {
      this.MBCRAMBanksEnabled = true;
    }
    var v3022;
    var v9985 = this.openMBC;
    var v9046 = typeof v9985;
    var v6999 = v9046 == "function";
    if (v6999) {
      var v6998 = this.name;
      v3022 = this.openMBC(v6998);
    } else {
      v3022 = [];
    }
    var MBCRam = v3022;
    var v7000 = MBCRam.length;
    var v3024 = v7000 > 0;
    if (v3024) {
      var v10717 = this.toTypedArray(MBCRam, "uint8");
      this.MBCRam = v10717;
    } else {
      var v7001 = this.numRAMBanks;
      var v3023 = v7001 * 8192;
      var v10718 = this.getTypedArray(v3023, 0, "uint8");
      this.MBCRam = v10718;
    }
  }
  var v9047 = this.numRAMBanks;
  var v7002 = v9047 * 8192;
  var v3026 = "Actual bytes of MBC RAM allocated: " + v7002;
  cout(v3026, 0);
  this.returnFromRTCState();
  var v3027 = this.cGBC;
  if (v3027) {
    var v10719 = this.getTypedArray(8192, 0, "uint8");
    this.VRAM = v10719;
    var v10720 = this.getTypedArray(28672, 0, "uint8");
    this.GBCMemory = v10720;
  }
  this.memoryReadJumpCompile();
  this.memoryWriteJumpCompile();
  return;
}
function v604() {
  var v3028 = 524288 / 125;
  var v3029 = settings[6];
  this.baseCPUCyclesPerIteration = v3028 * v3029;
  var v3030 = this.baseCPUCyclesPerIteration;
  this.CPUCyclesTotalRoundoff = v3030 % 4;
  var v7003 = this.baseCPUCyclesPerIteration;
  var v7004 = this.CPUCyclesTotalRoundoff;
  var v3031 = v7003 - v7004;
  this.CPUCyclesTotalBase = this.CPUCyclesTotal = v3031 | 0;
  this.CPUCyclesTotalCurrent = 0;
  return;
}
function v603() {
  var index$$55 = 0;
  var v3033 = index$$55 < 256;
  for (;v3033;) {
    var v3032 = this.memory;
    var v7005 = this.ROM;
    v3032[index$$55] = v7005[index$$55];
    ++index$$55;
    v3033 = index$$55 < 256;
  }
  var v3037 = this.usedGBCBootROM;
  if (v3037) {
    index$$55 = 512;
    var v3035 = index$$55 < 2304;
    for (;v3035;) {
      var v3034 = this.memory;
      var v7006 = this.ROM;
      v3034[index$$55] = v7006[index$$55];
      ++index$$55;
      v3035 = index$$55 < 2304;
    }
    var v7007 = this.cGBC;
    var v3036 = !v7007;
    if (v3036) {
      this.GBCtoGBModeAdjust();
    } else {
      this.recompileBootIOWriteHandling();
    }
  } else {
    this.recompileBootIOWriteHandling();
  }
  return;
}
function v602() {
  var index$$54 = 308;
  var v3039 = index$$54 < 319;
  for (;v3039;) {
    var v9048 = this.ROMImage;
    var v7008 = v9048.charCodeAt(index$$54);
    var v3038 = v7008 > 0;
    if (v3038) {
      var v7009 = this.name;
      var v9049 = this.ROMImage;
      var v7010 = v9049[index$$54];
      this.name = v7009 + v7010;
    }
    index$$54++;
    v3039 = index$$54 < 319;
  }
  index$$54 = 319;
  var v3041 = index$$54 < 323;
  for (;v3041;) {
    var v9050 = this.ROMImage;
    var v7011 = v9050.charCodeAt(index$$54);
    var v3040 = v7011 > 0;
    if (v3040) {
      var v7012 = this.gameCode;
      var v9051 = this.ROMImage;
      var v7013 = v9051[index$$54];
      this.gameCode = v7012 + v7013;
    }
    index$$54++;
    v3041 = index$$54 < 323;
  }
  var v10573 = this.name;
  var v10526 = "Game Title: " + v10573;
  var v10344 = v10526 + "[";
  var v10345 = this.gameCode;
  var v9986 = v10344 + v10345;
  var v9052 = v9986 + "][";
  var v9987 = this.ROMImage;
  var v9053 = v9987[323];
  var v7014 = v9052 + v9053;
  var v3042 = v7014 + "]";
  cout(v3042, 0);
  var v7015 = this.gameCode;
  var v3043 = "Game Code: " + v7015;
  cout(v3043, 0);
  var v3044 = this.ROM;
  this.cartridgeType = v3044[327];
  var v7016 = this.cartridgeType;
  var v3045 = "Cartridge type #" + v7016;
  cout(v3045, 0);
  var MBCType = "";
  var v3047 = this.cartridgeType;
  switch(v3047) {
    case 0:
      var v7017 = settings[9];
      var v3046 = !v7017;
      if (v3046) {
        MBCType = "ROM";
        break;
      }
    ;
    case 1:
      this.cMBC1 = true;
      MBCType = "MBC1";
      break;
    case 2:
      this.cMBC1 = true;
      this.cSRAM = true;
      MBCType = "MBC1 + SRAM";
      break;
    case 3:
      this.cMBC1 = true;
      this.cSRAM = true;
      this.cBATT = true;
      MBCType = "MBC1 + SRAM + BATT";
      break;
    case 5:
      this.cMBC2 = true;
      MBCType = "MBC2";
      break;
    case 6:
      this.cMBC2 = true;
      this.cBATT = true;
      MBCType = "MBC2 + BATT";
      break;
    case 8:
      this.cSRAM = true;
      MBCType = "ROM + SRAM";
      break;
    case 9:
      this.cSRAM = true;
      this.cBATT = true;
      MBCType = "ROM + SRAM + BATT";
      break;
    case 11:
      this.cMMMO1 = true;
      MBCType = "MMMO1";
      break;
    case 12:
      this.cMMMO1 = true;
      this.cSRAM = true;
      MBCType = "MMMO1 + SRAM";
      break;
    case 13:
      this.cMMMO1 = true;
      this.cSRAM = true;
      this.cBATT = true;
      MBCType = "MMMO1 + SRAM + BATT";
      break;
    case 15:
      this.cMBC3 = true;
      this.cTIMER = true;
      this.cBATT = true;
      MBCType = "MBC3 + TIMER + BATT";
      break;
    case 16:
      this.cMBC3 = true;
      this.cTIMER = true;
      this.cBATT = true;
      this.cSRAM = true;
      MBCType = "MBC3 + TIMER + BATT + SRAM";
      break;
    case 17:
      this.cMBC3 = true;
      MBCType = "MBC3";
      break;
    case 18:
      this.cMBC3 = true;
      this.cSRAM = true;
      MBCType = "MBC3 + SRAM";
      break;
    case 19:
      this.cMBC3 = true;
      this.cSRAM = true;
      this.cBATT = true;
      MBCType = "MBC3 + SRAM + BATT";
      break;
    case 25:
      this.cMBC5 = true;
      MBCType = "MBC5";
      break;
    case 26:
      this.cMBC5 = true;
      this.cSRAM = true;
      MBCType = "MBC5 + SRAM";
      break;
    case 27:
      this.cMBC5 = true;
      this.cSRAM = true;
      this.cBATT = true;
      MBCType = "MBC5 + SRAM + BATT";
      break;
    case 28:
      this.cRUMBLE = true;
      MBCType = "RUMBLE";
      break;
    case 29:
      this.cRUMBLE = true;
      this.cSRAM = true;
      MBCType = "RUMBLE + SRAM";
      break;
    case 30:
      this.cRUMBLE = true;
      this.cSRAM = true;
      this.cBATT = true;
      MBCType = "RUMBLE + SRAM + BATT";
      break;
    case 31:
      this.cCamera = true;
      MBCType = "GameBoy Camera";
      break;
    case 34:
      this.cMBC7 = true;
      this.cSRAM = true;
      this.cBATT = true;
      MBCType = "MBC7 + SRAM + BATT";
      break;
    case 253:
      this.cTAMA5 = true;
      MBCType = "TAMA5";
      break;
    case 254:
      this.cHuC3 = true;
      MBCType = "HuC3";
      break;
    case 255:
      this.cHuC1 = true;
      MBCType = "HuC1";
      break;
    default:
      MBCType = "Unknown";
      cout("Cartridge type is unknown.", 2);
      pause();
  }
  var v7018 = "Cartridge Type: " + MBCType;
  var v3048 = v7018 + ".";
  cout(v3048, 0);
  var v3049 = this.ROMBanks;
  var v7019 = this.ROM;
  var v3050 = v7019[328];
  this.numROMBanks = v3049[v3050];
  var v7020 = this.numROMBanks;
  var v3051 = v7020 + " ROM banks.";
  cout(v3051, 0);
  var v7021 = this.RAMBanks;
  var v9054 = this.ROM;
  var v7022 = v9054[329];
  var v3052 = v7021[v7022];
  switch(v3052) {
    case 0:
      cout("No RAM banking requested for allocation or MBC is of type 2.", 0);
      break;
    case 2:
      cout("1 RAM bank requested for allocation.", 0);
      break;
    case 3:
      cout("4 RAM banks requested for allocation.", 0);
      break;
    case 4:
      cout("16 RAM banks requested for allocation.", 0);
      break;
    default:
      cout("RAM bank amount requested is unknown, will use maximum allowed by specified MBC type.", 0);
  }
  var v7023 = this.usedBootROM;
  var v3057 = !v7023;
  if (v3057) {
    var v7024 = this.ROM;
    var v3056 = v7024[323];
    switch(v3056) {
      case 0:
        this.cGBC = false;
        cout("Only GB mode detected.", 0);
        break;
      case 50:
        var v9055 = settings[2];
        var v7025 = !v9055;
        if (v7025) {
          var v10346 = this.name;
          var v10347 = this.gameCode;
          var v9988 = v10346 + v10347;
          var v10348 = this.ROM;
          var v9989 = v10348[323];
          var v9056 = v9988 + v9989;
          v7025 = v9056 == "Game and Watch 50";
        }
        var v3053 = v7025;
        if (v3053) {
          this.cGBC = true;
          cout("Created a boot exception for Game and Watch Gallery 2 (GBC ID byte is wrong on the cartridge).", 1);
        } else {
          this.cGBC = false;
        }
        break;
      case 128:
        var v3054 = settings[2];
        this.cGBC = !v3054;
        cout("GB and GBC mode detected.", 0);
        break;
      case 192:
        this.cGBC = true;
        cout("Only GBC mode detected.", 0);
        break;
      default:
        this.cGBC = false;
        var v9990 = this.ROM;
        var v9057 = v9990[323];
        var v7026 = "Unknown GameBoy game type code #" + v9057;
        var v3055 = v7026 + ", defaulting to GB mode (Old games don't have a type code).";
        cout(v3055, 1);
    }
    this.inBootstrap = false;
    this.setupRAM();
    this.initSkipBootstrap();
    this.initializeAudioStartState();
  } else {
    this.cGBC = this.usedGBCBootROM;
    this.setupRAM();
    this.initBootstrap();
  }
  this.initializeModeSpecificArrays();
  var v3058 = this.ROM;
  var cOldLicense = v3058[331];
  var v9058 = this.ROM;
  var v7027 = v9058[324];
  var v3059 = v7027 & 65280;
  var v9059 = this.ROM;
  var v7028 = v9059[325];
  var v3060 = v7028 & 255;
  var cNewLicense = v3059 | v3060;
  var v3063 = cOldLicense != 51;
  if (v3063) {
    var v3061 = "Old style license code: " + cOldLicense;
    cout(v3061, 0);
  } else {
    var v3062 = "New style license code: " + cNewLicense;
    cout(v3062, 0);
  }
  this.ROMImage = "";
  return;
}
function v601() {
  var v9060 = this.ROMImage;
  var v7029 = v9060.length;
  var v3065 = v7029 > 0;
  if (v3065) {
    var v3064 = this.ROMImage;
    return v3064.length;
  }
  var v3066 = this.ROM;
  var length$$17 = v3066.length;
  var index$$53 = 0;
  var v3067 = index$$53 < length$$17;
  for (;v3067;) {
    var v7030 = this.ROMImage;
    var v9991 = this.ROM;
    var v9061 = v9991[index$$53];
    var v7031 = String.fromCharCode(v9061);
    this.ROMImage = v7030 + v7031;
    index$$53++;
    v3067 = index$$53 < length$$17;
  }
  return this.ROMImage;
}
function v600() {
  this.ROM = [];
  this.usedBootROM = settings[1];
  var v3068 = this.ROMImage;
  var maxLength = v3068.length;
  var v3069 = maxLength < 16384;
  if (v3069) {
    throw new Error("ROM image size too small.");
  }
  var v10721 = this.getTypedArray(maxLength, 0, "uint8");
  this.ROM = v10721;
  var romIndex = 0;
  var v3086 = this.usedBootROM;
  if (v3086) {
    var v7032 = settings[11];
    var v3081 = !v7032;
    if (v3081) {
      var v3072 = romIndex < 256;
      for (;v3072;) {
        var v3070 = this.memory;
        var v7033 = this.GBCBOOTROM;
        v3070[romIndex] = v7033[romIndex];
        var v3071 = this.ROM;
        var v9062 = this.ROMImage;
        var v7034 = v9062.charCodeAt(romIndex);
        v3071[romIndex] = v7034 & 255;
        ++romIndex;
        v3072 = romIndex < 256;
      }
      var v3074 = romIndex < 512;
      for (;v3074;) {
        var v3073 = this.memory;
        var v7035 = this.ROM;
        var v9992 = this.ROMImage;
        var v9063 = v9992.charCodeAt(romIndex);
        v3073[romIndex] = v7035[romIndex] = v9063 & 255;
        ++romIndex;
        v3074 = romIndex < 512;
      }
      var v3077 = romIndex < 2304;
      for (;v3077;) {
        var v3075 = this.memory;
        var v7036 = this.GBCBOOTROM;
        var v7037 = romIndex - 256;
        v3075[romIndex] = v7036[v7037];
        var v3076 = this.ROM;
        var v9064 = this.ROMImage;
        var v7038 = v9064.charCodeAt(romIndex);
        v3076[romIndex] = v7038 & 255;
        ++romIndex;
        v3077 = romIndex < 2304;
      }
      this.usedGBCBootROM = true;
    } else {
      var v3080 = romIndex < 256;
      for (;v3080;) {
        var v3078 = this.memory;
        var v7039 = this.GBBOOTROM;
        v3078[romIndex] = v7039[romIndex];
        var v3079 = this.ROM;
        var v9065 = this.ROMImage;
        var v7040 = v9065.charCodeAt(romIndex);
        v3079[romIndex] = v7040 & 255;
        ++romIndex;
        v3080 = romIndex < 256;
      }
    }
    var v3083 = romIndex < 16384;
    for (;v3083;) {
      var v3082 = this.memory;
      var v7041 = this.ROM;
      var v9993 = this.ROMImage;
      var v9066 = v9993.charCodeAt(romIndex);
      v3082[romIndex] = v7041[romIndex] = v9066 & 255;
      ++romIndex;
      v3083 = romIndex < 16384;
    }
  } else {
    var v3085 = romIndex < 16384;
    for (;v3085;) {
      var v3084 = this.memory;
      var v7042 = this.ROM;
      var v9994 = this.ROMImage;
      var v9067 = v9994.charCodeAt(romIndex);
      v3084[romIndex] = v7042[romIndex] = v9067 & 255;
      ++romIndex;
      v3085 = romIndex < 16384;
    }
  }
  var v3088 = romIndex < maxLength;
  for (;v3088;) {
    var v3087 = this.ROM;
    var v9068 = this.ROMImage;
    var v7043 = v9068.charCodeAt(romIndex);
    v3087[romIndex] = v7043 & 255;
    ++romIndex;
    v3088 = romIndex < maxLength;
  }
  var v9069 = this.ROM;
  var v7044 = v9069.length;
  var v3089 = v7044 / 16384;
  var v10722 = Math.floor(v3089);
  this.ROMBankEdge = v10722;
  this.interpretCartridge();
  this.checkIRQMatching();
  return;
}
function v599() {
  cout("Starting the selected boot ROM.", 0);
  this.programCounter = 0;
  this.stackPointer = 0;
  this.IME = false;
  this.LCDTicks = 0;
  this.DIVTicks = 0;
  this.registerA = 0;
  this.registerB = 0;
  this.registerC = 0;
  this.registerD = 0;
  this.registerE = 0;
  this.FZero = this.FSubtract = this.FHalfCarry = this.FCarry = false;
  this.registersHL = 0;
  this.leftChannel1 = false;
  this.leftChannel2 = false;
  this.leftChannel3 = false;
  this.leftChannel4 = false;
  this.rightChannel1 = false;
  this.rightChannel2 = false;
  this.rightChannel3 = false;
  this.rightChannel4 = false;
  this.channel2frequency = this.channel1frequency = 0;
  this.channel4consecutive = this.channel2consecutive = this.channel1consecutive = false;
  this.VinLeftChannelMasterVolume = 8;
  this.VinRightChannelMasterVolume = 8;
  var v3090 = this.memory;
  v3090[65280] = 15;
  return;
}
function v598() {
  var index$$52 = 255;
  var v3098 = index$$52 >= 0;
  for (;v3098;) {
    var v7045 = index$$52 >= 48;
    if (v7045) {
      v7045 = index$$52 < 64;
    }
    var v3097 = v7045;
    if (v3097) {
      var v3091 = 65280 | index$$52;
      var v7046 = this.ffxxDump;
      var v3092 = v7046[index$$52];
      this.memoryWrite(v3091, v3092);
    } else {
      switch(index$$52) {
        case 0:
        ;
        case 1:
        ;
        case 2:
        ;
        case 5:
        ;
        case 7:
        ;
        case 15:
        ;
        case 255:
          var v3093 = 65280 | index$$52;
          var v7047 = this.ffxxDump;
          var v3094 = v7047[index$$52];
          this.memoryWrite(v3093, v3094);
          break;
        default:
          var v3095 = this.memory;
          var v3096 = 65280 | index$$52;
          var v7048 = this.ffxxDump;
          v3095[v3096] = v7048[index$$52];
      }
    }
    --index$$52;
    v3098 = index$$52 >= 0;
  }
  var v3105 = this.cGBC;
  if (v3105) {
    var v3099 = this.memory;
    v3099[65388] = 254;
    var v3100 = this.memory;
    v3100[65396] = 254;
  } else {
    var v3101 = this.memory;
    v3101[65352] = 255;
    var v3102 = this.memory;
    v3102[65353] = 255;
    var v3103 = this.memory;
    v3103[65388] = 255;
    var v3104 = this.memory;
    v3104[65396] = 255;
  }
  cout("Starting without the GBC boot ROM.", 0);
  var v3106;
  var v7049 = this.cGBC;
  if (v7049) {
    v3106 = 17;
  } else {
    v3106 = 1;
  }
  this.registerA = v3106;
  this.registerB = 0;
  this.registerC = 19;
  this.registerD = 0;
  this.registerE = 216;
  this.FZero = true;
  this.FSubtract = false;
  this.FHalfCarry = true;
  this.FCarry = true;
  this.registersHL = 333;
  this.LCDCONTROL = this.LINECONTROL;
  this.IME = false;
  this.IRQLineMatched = 0;
  this.interruptsRequested = 225;
  this.interruptsEnabled = 0;
  this.hdmaRunning = false;
  this.CPUTicks = 12;
  this.STATTracker = 0;
  this.modeSTAT = 1;
  this.spriteCount = 252;
  this.LYCMatchTriggerSTAT = false;
  this.mode2TriggerSTAT = false;
  this.mode1TriggerSTAT = false;
  this.mode0TriggerSTAT = false;
  this.LCDisOn = true;
  this.channel1FrequencyTracker = 8192;
  this.channel1DutyTracker = 0;
  var v3107 = this.dutyLookup;
  this.channel1CachedDuty = v3107[2];
  this.channel1totalLength = 0;
  this.channel1envelopeVolume = 0;
  this.channel1envelopeType = false;
  this.channel1envelopeSweeps = 0;
  this.channel1envelopeSweepsLast = 0;
  this.channel1consecutive = true;
  this.channel1frequency = 1985;
  this.channel1SweepFault = true;
  this.channel1ShadowFrequency = 1985;
  this.channel1timeSweep = 1;
  this.channel1lastTimeSweep = 0;
  this.channel1numSweep = 0;
  this.channel1frequencySweepDivider = 0;
  this.channel1decreaseSweep = false;
  this.channel2FrequencyTracker = 8192;
  this.channel2DutyTracker = 0;
  var v3108 = this.dutyLookup;
  this.channel2CachedDuty = v3108[2];
  this.channel2totalLength = 0;
  this.channel2envelopeVolume = 0;
  this.channel2envelopeType = false;
  this.channel2envelopeSweeps = 0;
  this.channel2envelopeSweepsLast = 0;
  this.channel2consecutive = true;
  this.channel2frequency = 0;
  this.channel3canPlay = false;
  this.channel3totalLength = 0;
  this.channel3patternType = 4;
  this.channel3frequency = 0;
  this.channel3consecutive = true;
  this.channel3Counter = 1048;
  this.channel4FrequencyPeriod = 8;
  this.channel4totalLength = 0;
  this.channel4envelopeVolume = 0;
  this.channel4currentVolume = 0;
  this.channel4envelopeType = false;
  this.channel4envelopeSweeps = 0;
  this.channel4envelopeSweepsLast = 0;
  this.channel4consecutive = true;
  this.channel4BitRange = 32767;
  this.channel4VolumeShifter = 15;
  this.channel1FrequencyCounter = 512;
  this.channel2FrequencyCounter = 512;
  this.channel3Counter = 2048;
  this.channel3FrequencyPeriod = 2048;
  this.channel3lastSampleLookup = 0;
  this.channel4lastSampleLookup = 0;
  this.VinLeftChannelMasterVolume = 1;
  this.VinRightChannelMasterVolume = 1;
  this.soundMasterEnabled = true;
  this.leftChannel1 = true;
  this.leftChannel2 = true;
  this.leftChannel3 = true;
  this.leftChannel4 = true;
  this.rightChannel1 = true;
  this.rightChannel2 = true;
  this.rightChannel3 = false;
  this.rightChannel4 = false;
  this.DIVTicks = 27044;
  this.LCDTicks = 160;
  this.timerTicks = 0;
  this.TIMAEnabled = false;
  this.TACClocker = 1024;
  this.serialTimer = 0;
  this.serialShiftTimer = 0;
  this.serialShiftTimerAllocated = 0;
  this.IRQEnableDelay = 0;
  this.actualScanLine = 144;
  this.lastUnrenderedLine = 0;
  this.gfxWindowDisplay = false;
  this.gfxSpriteShow = false;
  this.gfxSpriteNormalHeight = true;
  this.bgEnabled = true;
  this.BGPriorityEnabled = true;
  this.gfxWindowCHRBankPosition = 0;
  this.gfxBackgroundCHRBankPosition = 0;
  this.gfxBackgroundBankOffset = 0;
  this.windowY = 0;
  this.windowX = 0;
  this.drewBlank = 0;
  this.midScanlineOffset = -1;
  this.currentX = 0;
  return;
}
function v597(tileAmount) {
  var tileArray = [];
  var tileNumber = 0;
  var v3110 = tileNumber < tileAmount;
  for (;v3110;) {
    var v3109 = tileNumber;
    tileNumber = tileNumber + 1;
    var v10723 = this.getTypedArray(64, 0, "uint8");
    tileArray[v3109] = v10723;
    v3110 = tileNumber < tileAmount;
  }
  return tileArray;
}
function v596() {
  var v10724 = this.getTypedArray(65536, 0, "uint8");
  this.memory = v10724;
  var v10725 = this.getTypedArray(23040, 16316664, "int32");
  this.frameBuffer = v10725;
  var v10726 = this.getTypedArray(2048, 0, "uint8");
  this.BGCHRBank1 = v10726;
  var v3111 = this.TICKTable;
  var v10727 = this.toTypedArray(v3111, "uint8");
  this.TICKTable = v10727;
  var v3112 = this.SecondaryTICKTable;
  var v10728 = this.toTypedArray(v3112, "uint8");
  this.SecondaryTICKTable = v10728;
  var v10729 = this.getTypedArray(32, 0, "int8");
  this.channel3PCM = v10729;
  return;
}
function v595() {
  this.initMemory();
  this.ROMLoad();
  this.initLCD();
  this.initSound();
  this.run();
  return;
}
function v594() {
  var v9995 = this.openRTC;
  var v9070 = typeof v9995;
  var v7050 = v9070 == "function";
  if (v7050) {
    v7050 = this.cTIMER;
  }
  var v3126 = v7050;
  if (v3126) {
    var v3113 = this.name;
    var rtcData = this.openRTC(v3113);
    var index$$51 = 0;
    var v3114 = index$$51;
    index$$51 = index$$51 + 1;
    this.lastIteration = rtcData[v3114];
    var v3115 = index$$51;
    index$$51 = index$$51 + 1;
    this.RTCisLatched = rtcData[v3115];
    var v3116 = index$$51;
    index$$51 = index$$51 + 1;
    this.latchedSeconds = rtcData[v3116];
    var v3117 = index$$51;
    index$$51 = index$$51 + 1;
    this.latchedMinutes = rtcData[v3117];
    var v3118 = index$$51;
    index$$51 = index$$51 + 1;
    this.latchedHours = rtcData[v3118];
    var v3119 = index$$51;
    index$$51 = index$$51 + 1;
    this.latchedLDays = rtcData[v3119];
    var v3120 = index$$51;
    index$$51 = index$$51 + 1;
    this.latchedHDays = rtcData[v3120];
    var v3121 = index$$51;
    index$$51 = index$$51 + 1;
    this.RTCSeconds = rtcData[v3121];
    var v3122 = index$$51;
    index$$51 = index$$51 + 1;
    this.RTCMinutes = rtcData[v3122];
    var v3123 = index$$51;
    index$$51 = index$$51 + 1;
    this.RTCHours = rtcData[v3123];
    var v3124 = index$$51;
    index$$51 = index$$51 + 1;
    this.RTCDays = rtcData[v3124];
    var v3125 = index$$51;
    index$$51 = index$$51 + 1;
    this.RTCDayOverFlow = rtcData[v3125];
    this.RTCHALT = rtcData[index$$51];
  }
  return;
}
function v593(returnedFrom) {
  var index$$50 = 0;
  var state$$1 = returnedFrom.slice(0);
  var v7051 = index$$50;
  index$$50 = index$$50 + 1;
  var v3127 = state$$1[v7051];
  var v10730 = this.toTypedArray(v3127, "uint8");
  this.ROM = v10730;
  var v9071 = this.ROM;
  var v7052 = v9071.length;
  var v3128 = v7052 / 16384;
  var v10731 = Math.floor(v3128);
  this.ROMBankEdge = v10731;
  var v3129 = index$$50;
  index$$50 = index$$50 + 1;
  this.inBootstrap = state$$1[v3129];
  var v3130 = index$$50;
  index$$50 = index$$50 + 1;
  this.registerA = state$$1[v3130];
  var v3131 = index$$50;
  index$$50 = index$$50 + 1;
  this.FZero = state$$1[v3131];
  var v3132 = index$$50;
  index$$50 = index$$50 + 1;
  this.FSubtract = state$$1[v3132];
  var v3133 = index$$50;
  index$$50 = index$$50 + 1;
  this.FHalfCarry = state$$1[v3133];
  var v3134 = index$$50;
  index$$50 = index$$50 + 1;
  this.FCarry = state$$1[v3134];
  var v3135 = index$$50;
  index$$50 = index$$50 + 1;
  this.registerB = state$$1[v3135];
  var v3136 = index$$50;
  index$$50 = index$$50 + 1;
  this.registerC = state$$1[v3136];
  var v3137 = index$$50;
  index$$50 = index$$50 + 1;
  this.registerD = state$$1[v3137];
  var v3138 = index$$50;
  index$$50 = index$$50 + 1;
  this.registerE = state$$1[v3138];
  var v3139 = index$$50;
  index$$50 = index$$50 + 1;
  this.registersHL = state$$1[v3139];
  var v3140 = index$$50;
  index$$50 = index$$50 + 1;
  this.stackPointer = state$$1[v3140];
  var v3141 = index$$50;
  index$$50 = index$$50 + 1;
  this.programCounter = state$$1[v3141];
  var v3142 = index$$50;
  index$$50 = index$$50 + 1;
  this.halt = state$$1[v3142];
  var v3143 = index$$50;
  index$$50 = index$$50 + 1;
  this.IME = state$$1[v3143];
  var v3144 = index$$50;
  index$$50 = index$$50 + 1;
  this.hdmaRunning = state$$1[v3144];
  var v3145 = index$$50;
  index$$50 = index$$50 + 1;
  this.CPUTicks = state$$1[v3145];
  var v3146 = index$$50;
  index$$50 = index$$50 + 1;
  this.doubleSpeedShifter = state$$1[v3146];
  var v7053 = index$$50;
  index$$50 = index$$50 + 1;
  var v3147 = state$$1[v7053];
  var v10732 = this.toTypedArray(v3147, "uint8");
  this.memory = v10732;
  var v7054 = index$$50;
  index$$50 = index$$50 + 1;
  var v3148 = state$$1[v7054];
  var v10733 = this.toTypedArray(v3148, "uint8");
  this.MBCRam = v10733;
  var v7055 = index$$50;
  index$$50 = index$$50 + 1;
  var v3149 = state$$1[v7055];
  var v10734 = this.toTypedArray(v3149, "uint8");
  this.VRAM = v10734;
  var v3150 = index$$50;
  index$$50 = index$$50 + 1;
  this.currVRAMBank = state$$1[v3150];
  var v7056 = index$$50;
  index$$50 = index$$50 + 1;
  var v3151 = state$$1[v7056];
  var v10735 = this.toTypedArray(v3151, "uint8");
  this.GBCMemory = v10735;
  var v3152 = index$$50;
  index$$50 = index$$50 + 1;
  this.MBC1Mode = state$$1[v3152];
  var v3153 = index$$50;
  index$$50 = index$$50 + 1;
  this.MBCRAMBanksEnabled = state$$1[v3153];
  var v3154 = index$$50;
  index$$50 = index$$50 + 1;
  this.currMBCRAMBank = state$$1[v3154];
  var v3155 = index$$50;
  index$$50 = index$$50 + 1;
  this.currMBCRAMBankPosition = state$$1[v3155];
  var v3156 = index$$50;
  index$$50 = index$$50 + 1;
  this.cGBC = state$$1[v3156];
  var v3157 = index$$50;
  index$$50 = index$$50 + 1;
  this.gbcRamBank = state$$1[v3157];
  var v3158 = index$$50;
  index$$50 = index$$50 + 1;
  this.gbcRamBankPosition = state$$1[v3158];
  var v3159 = index$$50;
  index$$50 = index$$50 + 1;
  this.ROMBank1offs = state$$1[v3159];
  var v3160 = index$$50;
  index$$50 = index$$50 + 1;
  this.currentROMBank = state$$1[v3160];
  var v3161 = index$$50;
  index$$50 = index$$50 + 1;
  this.cartridgeType = state$$1[v3161];
  var v3162 = index$$50;
  index$$50 = index$$50 + 1;
  this.name = state$$1[v3162];
  var v3163 = index$$50;
  index$$50 = index$$50 + 1;
  this.gameCode = state$$1[v3163];
  var v3164 = index$$50;
  index$$50 = index$$50 + 1;
  this.modeSTAT = state$$1[v3164];
  var v3165 = index$$50;
  index$$50 = index$$50 + 1;
  this.LYCMatchTriggerSTAT = state$$1[v3165];
  var v3166 = index$$50;
  index$$50 = index$$50 + 1;
  this.mode2TriggerSTAT = state$$1[v3166];
  var v3167 = index$$50;
  index$$50 = index$$50 + 1;
  this.mode1TriggerSTAT = state$$1[v3167];
  var v3168 = index$$50;
  index$$50 = index$$50 + 1;
  this.mode0TriggerSTAT = state$$1[v3168];
  var v3169 = index$$50;
  index$$50 = index$$50 + 1;
  this.LCDisOn = state$$1[v3169];
  var v3170 = index$$50;
  index$$50 = index$$50 + 1;
  this.gfxWindowCHRBankPosition = state$$1[v3170];
  var v3171 = index$$50;
  index$$50 = index$$50 + 1;
  this.gfxWindowDisplay = state$$1[v3171];
  var v3172 = index$$50;
  index$$50 = index$$50 + 1;
  this.gfxSpriteShow = state$$1[v3172];
  var v3173 = index$$50;
  index$$50 = index$$50 + 1;
  this.gfxSpriteNormalHeight = state$$1[v3173];
  var v3174 = index$$50;
  index$$50 = index$$50 + 1;
  this.gfxBackgroundCHRBankPosition = state$$1[v3174];
  var v3175 = index$$50;
  index$$50 = index$$50 + 1;
  this.gfxBackgroundBankOffset = state$$1[v3175];
  var v3176 = index$$50;
  index$$50 = index$$50 + 1;
  this.TIMAEnabled = state$$1[v3176];
  var v3177 = index$$50;
  index$$50 = index$$50 + 1;
  this.DIVTicks = state$$1[v3177];
  var v3178 = index$$50;
  index$$50 = index$$50 + 1;
  this.LCDTicks = state$$1[v3178];
  var v3179 = index$$50;
  index$$50 = index$$50 + 1;
  this.timerTicks = state$$1[v3179];
  var v3180 = index$$50;
  index$$50 = index$$50 + 1;
  this.TACClocker = state$$1[v3180];
  var v3181 = index$$50;
  index$$50 = index$$50 + 1;
  this.serialTimer = state$$1[v3181];
  var v3182 = index$$50;
  index$$50 = index$$50 + 1;
  this.serialShiftTimer = state$$1[v3182];
  var v3183 = index$$50;
  index$$50 = index$$50 + 1;
  this.serialShiftTimerAllocated = state$$1[v3183];
  var v3184 = index$$50;
  index$$50 = index$$50 + 1;
  this.IRQEnableDelay = state$$1[v3184];
  var v3185 = index$$50;
  index$$50 = index$$50 + 1;
  this.lastIteration = state$$1[v3185];
  var v3186 = index$$50;
  index$$50 = index$$50 + 1;
  this.cMBC1 = state$$1[v3186];
  var v3187 = index$$50;
  index$$50 = index$$50 + 1;
  this.cMBC2 = state$$1[v3187];
  var v3188 = index$$50;
  index$$50 = index$$50 + 1;
  this.cMBC3 = state$$1[v3188];
  var v3189 = index$$50;
  index$$50 = index$$50 + 1;
  this.cMBC5 = state$$1[v3189];
  var v3190 = index$$50;
  index$$50 = index$$50 + 1;
  this.cMBC7 = state$$1[v3190];
  var v3191 = index$$50;
  index$$50 = index$$50 + 1;
  this.cSRAM = state$$1[v3191];
  var v3192 = index$$50;
  index$$50 = index$$50 + 1;
  this.cMMMO1 = state$$1[v3192];
  var v3193 = index$$50;
  index$$50 = index$$50 + 1;
  this.cRUMBLE = state$$1[v3193];
  var v3194 = index$$50;
  index$$50 = index$$50 + 1;
  this.cCamera = state$$1[v3194];
  var v3195 = index$$50;
  index$$50 = index$$50 + 1;
  this.cTAMA5 = state$$1[v3195];
  var v3196 = index$$50;
  index$$50 = index$$50 + 1;
  this.cHuC3 = state$$1[v3196];
  var v3197 = index$$50;
  index$$50 = index$$50 + 1;
  this.cHuC1 = state$$1[v3197];
  var v3198 = index$$50;
  index$$50 = index$$50 + 1;
  this.drewBlank = state$$1[v3198];
  var v7057 = index$$50;
  index$$50 = index$$50 + 1;
  var v3199 = state$$1[v7057];
  var v10736 = this.toTypedArray(v3199, "int32");
  this.frameBuffer = v10736;
  var v3200 = index$$50;
  index$$50 = index$$50 + 1;
  this.bgEnabled = state$$1[v3200];
  var v3201 = index$$50;
  index$$50 = index$$50 + 1;
  this.BGPriorityEnabled = state$$1[v3201];
  var v3202 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1FrequencyTracker = state$$1[v3202];
  var v3203 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1FrequencyCounter = state$$1[v3203];
  var v3204 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1totalLength = state$$1[v3204];
  var v3205 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1envelopeVolume = state$$1[v3205];
  var v3206 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1envelopeType = state$$1[v3206];
  var v3207 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1envelopeSweeps = state$$1[v3207];
  var v3208 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1envelopeSweepsLast = state$$1[v3208];
  var v3209 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1consecutive = state$$1[v3209];
  var v3210 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1frequency = state$$1[v3210];
  var v3211 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1SweepFault = state$$1[v3211];
  var v3212 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1ShadowFrequency = state$$1[v3212];
  var v3213 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1timeSweep = state$$1[v3213];
  var v3214 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1lastTimeSweep = state$$1[v3214];
  var v3215 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1numSweep = state$$1[v3215];
  var v3216 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1frequencySweepDivider = state$$1[v3216];
  var v3217 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1decreaseSweep = state$$1[v3217];
  var v3218 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel2FrequencyTracker = state$$1[v3218];
  var v3219 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel2FrequencyCounter = state$$1[v3219];
  var v3220 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel2totalLength = state$$1[v3220];
  var v3221 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel2envelopeVolume = state$$1[v3221];
  var v3222 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel2envelopeType = state$$1[v3222];
  var v3223 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel2envelopeSweeps = state$$1[v3223];
  var v3224 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel2envelopeSweepsLast = state$$1[v3224];
  var v3225 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel2consecutive = state$$1[v3225];
  var v3226 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel2frequency = state$$1[v3226];
  var v3227 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel3canPlay = state$$1[v3227];
  var v3228 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel3totalLength = state$$1[v3228];
  var v3229 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel3patternType = state$$1[v3229];
  var v3230 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel3frequency = state$$1[v3230];
  var v3231 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel3consecutive = state$$1[v3231];
  var v7058 = index$$50;
  index$$50 = index$$50 + 1;
  var v3232 = state$$1[v7058];
  var v10737 = this.toTypedArray(v3232, "int8");
  this.channel3PCM = v10737;
  var v3233 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel4FrequencyPeriod = state$$1[v3233];
  var v3234 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel4lastSampleLookup = state$$1[v3234];
  var v3235 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel4totalLength = state$$1[v3235];
  var v3236 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel4envelopeVolume = state$$1[v3236];
  var v3237 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel4currentVolume = state$$1[v3237];
  var v3238 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel4envelopeType = state$$1[v3238];
  var v3239 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel4envelopeSweeps = state$$1[v3239];
  var v3240 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel4envelopeSweepsLast = state$$1[v3240];
  var v3241 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel4consecutive = state$$1[v3241];
  var v3242 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel4BitRange = state$$1[v3242];
  var v3243 = index$$50;
  index$$50 = index$$50 + 1;
  this.soundMasterEnabled = state$$1[v3243];
  var v3244 = index$$50;
  index$$50 = index$$50 + 1;
  this.VinLeftChannelMasterVolume = state$$1[v3244];
  var v3245 = index$$50;
  index$$50 = index$$50 + 1;
  this.VinRightChannelMasterVolume = state$$1[v3245];
  var v3246 = index$$50;
  index$$50 = index$$50 + 1;
  this.leftChannel1 = state$$1[v3246];
  var v3247 = index$$50;
  index$$50 = index$$50 + 1;
  this.leftChannel2 = state$$1[v3247];
  var v3248 = index$$50;
  index$$50 = index$$50 + 1;
  this.leftChannel3 = state$$1[v3248];
  var v3249 = index$$50;
  index$$50 = index$$50 + 1;
  this.leftChannel4 = state$$1[v3249];
  var v3250 = index$$50;
  index$$50 = index$$50 + 1;
  this.rightChannel1 = state$$1[v3250];
  var v3251 = index$$50;
  index$$50 = index$$50 + 1;
  this.rightChannel2 = state$$1[v3251];
  var v3252 = index$$50;
  index$$50 = index$$50 + 1;
  this.rightChannel3 = state$$1[v3252];
  var v3253 = index$$50;
  index$$50 = index$$50 + 1;
  this.rightChannel4 = state$$1[v3253];
  var v3254 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1currentSampleLeft = state$$1[v3254];
  var v3255 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1currentSampleRight = state$$1[v3255];
  var v3256 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel2currentSampleLeft = state$$1[v3256];
  var v3257 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel2currentSampleRight = state$$1[v3257];
  var v3258 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel3currentSampleLeft = state$$1[v3258];
  var v3259 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel3currentSampleRight = state$$1[v3259];
  var v3260 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel4currentSampleLeft = state$$1[v3260];
  var v3261 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel4currentSampleRight = state$$1[v3261];
  var v3262 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1currentSampleLeftSecondary = state$$1[v3262];
  var v3263 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1currentSampleRightSecondary = state$$1[v3263];
  var v3264 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel2currentSampleLeftSecondary = state$$1[v3264];
  var v3265 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel2currentSampleRightSecondary = state$$1[v3265];
  var v3266 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel3currentSampleLeftSecondary = state$$1[v3266];
  var v3267 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel3currentSampleRightSecondary = state$$1[v3267];
  var v3268 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel4currentSampleLeftSecondary = state$$1[v3268];
  var v3269 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel4currentSampleRightSecondary = state$$1[v3269];
  var v3270 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1currentSampleLeftTrimary = state$$1[v3270];
  var v3271 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1currentSampleRightTrimary = state$$1[v3271];
  var v3272 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel2currentSampleLeftTrimary = state$$1[v3272];
  var v3273 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel2currentSampleRightTrimary = state$$1[v3273];
  var v3274 = index$$50;
  index$$50 = index$$50 + 1;
  this.mixerOutputCache = state$$1[v3274];
  var v3275 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1DutyTracker = state$$1[v3275];
  var v3276 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1CachedDuty = state$$1[v3276];
  var v3277 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel2DutyTracker = state$$1[v3277];
  var v3278 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel2CachedDuty = state$$1[v3278];
  var v3279 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1Enabled = state$$1[v3279];
  var v3280 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel2Enabled = state$$1[v3280];
  var v3281 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel3Enabled = state$$1[v3281];
  var v3282 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel4Enabled = state$$1[v3282];
  var v3283 = index$$50;
  index$$50 = index$$50 + 1;
  this.sequencerClocks = state$$1[v3283];
  var v3284 = index$$50;
  index$$50 = index$$50 + 1;
  this.sequencePosition = state$$1[v3284];
  var v3285 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel3Counter = state$$1[v3285];
  var v3286 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel4Counter = state$$1[v3286];
  var v3287 = index$$50;
  index$$50 = index$$50 + 1;
  this.cachedChannel3Sample = state$$1[v3287];
  var v3288 = index$$50;
  index$$50 = index$$50 + 1;
  this.cachedChannel4Sample = state$$1[v3288];
  var v3289 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel3FrequencyPeriod = state$$1[v3289];
  var v3290 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel3lastSampleLookup = state$$1[v3290];
  var v3291 = index$$50;
  index$$50 = index$$50 + 1;
  this.actualScanLine = state$$1[v3291];
  var v3292 = index$$50;
  index$$50 = index$$50 + 1;
  this.lastUnrenderedLine = state$$1[v3292];
  var v3293 = index$$50;
  index$$50 = index$$50 + 1;
  this.queuedScanLines = state$$1[v3293];
  var v3294 = index$$50;
  index$$50 = index$$50 + 1;
  this.RTCisLatched = state$$1[v3294];
  var v3295 = index$$50;
  index$$50 = index$$50 + 1;
  this.latchedSeconds = state$$1[v3295];
  var v3296 = index$$50;
  index$$50 = index$$50 + 1;
  this.latchedMinutes = state$$1[v3296];
  var v3297 = index$$50;
  index$$50 = index$$50 + 1;
  this.latchedHours = state$$1[v3297];
  var v3298 = index$$50;
  index$$50 = index$$50 + 1;
  this.latchedLDays = state$$1[v3298];
  var v3299 = index$$50;
  index$$50 = index$$50 + 1;
  this.latchedHDays = state$$1[v3299];
  var v3300 = index$$50;
  index$$50 = index$$50 + 1;
  this.RTCSeconds = state$$1[v3300];
  var v3301 = index$$50;
  index$$50 = index$$50 + 1;
  this.RTCMinutes = state$$1[v3301];
  var v3302 = index$$50;
  index$$50 = index$$50 + 1;
  this.RTCHours = state$$1[v3302];
  var v3303 = index$$50;
  index$$50 = index$$50 + 1;
  this.RTCDays = state$$1[v3303];
  var v3304 = index$$50;
  index$$50 = index$$50 + 1;
  this.RTCDayOverFlow = state$$1[v3304];
  var v3305 = index$$50;
  index$$50 = index$$50 + 1;
  this.RTCHALT = state$$1[v3305];
  var v3306 = index$$50;
  index$$50 = index$$50 + 1;
  this.usedBootROM = state$$1[v3306];
  var v3307 = index$$50;
  index$$50 = index$$50 + 1;
  this.skipPCIncrement = state$$1[v3307];
  var v3308 = index$$50;
  index$$50 = index$$50 + 1;
  this.STATTracker = state$$1[v3308];
  var v3309 = index$$50;
  index$$50 = index$$50 + 1;
  this.gbcRamBankPositionECHO = state$$1[v3309];
  var v3310 = index$$50;
  index$$50 = index$$50 + 1;
  this.numRAMBanks = state$$1[v3310];
  var v3311 = index$$50;
  index$$50 = index$$50 + 1;
  this.windowY = state$$1[v3311];
  var v3312 = index$$50;
  index$$50 = index$$50 + 1;
  this.windowX = state$$1[v3312];
  var v7059 = index$$50;
  index$$50 = index$$50 + 1;
  var v3313 = state$$1[v7059];
  var v10738 = this.toTypedArray(v3313, "uint8");
  this.gbcOBJRawPalette = v10738;
  var v7060 = index$$50;
  index$$50 = index$$50 + 1;
  var v3314 = state$$1[v7060];
  var v10739 = this.toTypedArray(v3314, "uint8");
  this.gbcBGRawPalette = v10739;
  var v7061 = index$$50;
  index$$50 = index$$50 + 1;
  var v3315 = state$$1[v7061];
  var v10740 = this.toTypedArray(v3315, "int32");
  this.gbOBJPalette = v10740;
  var v7062 = index$$50;
  index$$50 = index$$50 + 1;
  var v3316 = state$$1[v7062];
  var v10741 = this.toTypedArray(v3316, "int32");
  this.gbBGPalette = v10741;
  var v7063 = index$$50;
  index$$50 = index$$50 + 1;
  var v3317 = state$$1[v7063];
  var v10742 = this.toTypedArray(v3317, "int32");
  this.gbcOBJPalette = v10742;
  var v7064 = index$$50;
  index$$50 = index$$50 + 1;
  var v3318 = state$$1[v7064];
  var v10743 = this.toTypedArray(v3318, "int32");
  this.gbcBGPalette = v10743;
  var v7065 = index$$50;
  index$$50 = index$$50 + 1;
  var v3319 = state$$1[v7065];
  var v10744 = this.toTypedArray(v3319, "int32");
  this.gbBGColorizedPalette = v10744;
  var v7066 = index$$50;
  index$$50 = index$$50 + 1;
  var v3320 = state$$1[v7066];
  var v10745 = this.toTypedArray(v3320, "int32");
  this.gbOBJColorizedPalette = v10745;
  var v7067 = index$$50;
  index$$50 = index$$50 + 1;
  var v3321 = state$$1[v7067];
  var v10746 = this.toTypedArray(v3321, "int32");
  this.cachedBGPaletteConversion = v10746;
  var v7068 = index$$50;
  index$$50 = index$$50 + 1;
  var v3322 = state$$1[v7068];
  var v10747 = this.toTypedArray(v3322, "int32");
  this.cachedOBJPaletteConversion = v10747;
  var v7069 = index$$50;
  index$$50 = index$$50 + 1;
  var v3323 = state$$1[v7069];
  var v10748 = this.toTypedArray(v3323, "uint8");
  this.BGCHRBank1 = v10748;
  var v7070 = index$$50;
  index$$50 = index$$50 + 1;
  var v3324 = state$$1[v7070];
  var v10749 = this.toTypedArray(v3324, "uint8");
  this.BGCHRBank2 = v10749;
  var v3325 = index$$50;
  index$$50 = index$$50 + 1;
  this.haltPostClocks = state$$1[v3325];
  var v3326 = index$$50;
  index$$50 = index$$50 + 1;
  this.interruptsRequested = state$$1[v3326];
  var v3327 = index$$50;
  index$$50 = index$$50 + 1;
  this.interruptsEnabled = state$$1[v3327];
  this.checkIRQMatching();
  var v3328 = index$$50;
  index$$50 = index$$50 + 1;
  this.remainingClocks = state$$1[v3328];
  var v3329 = index$$50;
  index$$50 = index$$50 + 1;
  this.colorizedGBPalettes = state$$1[v3329];
  var v3330 = index$$50;
  index$$50 = index$$50 + 1;
  this.backgroundY = state$$1[v3330];
  var v3331 = index$$50;
  index$$50 = index$$50 + 1;
  this.backgroundX = state$$1[v3331];
  this.CPUStopped = state$$1[index$$50];
  this.fromSaveState = true;
  var v3332 = this.TICKTable;
  var v10750 = this.toTypedArray(v3332, "uint8");
  this.TICKTable = v10750;
  var v3333 = this.SecondaryTICKTable;
  var v10751 = this.toTypedArray(v3333, "uint8");
  this.SecondaryTICKTable = v10751;
  this.initializeReferencesFromSaveState();
  this.memoryReadJumpCompile();
  this.memoryWriteJumpCompile();
  this.initLCD();
  this.initSound();
  var v3334;
  var v9072 = this.channel4BitRange;
  var v7071 = v9072 == 32767;
  if (v7071) {
    v3334 = this.LSFR15Table;
  } else {
    v3334 = this.LSFR7Table;
  }
  this.noiseSampleTable = v3334;
  var v3335;
  var v9073 = this.channel4BitRange;
  var v7072 = v9073 == 32767;
  if (v7072) {
    v3335 = 15;
  } else {
    v3335 = 7;
  }
  this.channel4VolumeShifter = v3335;
  return;
}
function v592() {
  var v7073 = this.ROM;
  var v3336 = this.fromTypedArray(v7073);
  var v3337 = this.inBootstrap;
  var v3338 = this.registerA;
  var v3339 = this.FZero;
  var v3340 = this.FSubtract;
  var v3341 = this.FHalfCarry;
  var v3342 = this.FCarry;
  var v3343 = this.registerB;
  var v3344 = this.registerC;
  var v3345 = this.registerD;
  var v3346 = this.registerE;
  var v3347 = this.registersHL;
  var v3348 = this.stackPointer;
  var v3349 = this.programCounter;
  var v3350 = this.halt;
  var v3351 = this.IME;
  var v3352 = this.hdmaRunning;
  var v3353 = this.CPUTicks;
  var v3354 = this.doubleSpeedShifter;
  var v7074 = this.memory;
  var v3355 = this.fromTypedArray(v7074);
  var v7075 = this.MBCRam;
  var v3356 = this.fromTypedArray(v7075);
  var v7076 = this.VRAM;
  var v3357 = this.fromTypedArray(v7076);
  var v3358 = this.currVRAMBank;
  var v7077 = this.GBCMemory;
  var v3359 = this.fromTypedArray(v7077);
  var v3360 = this.MBC1Mode;
  var v3361 = this.MBCRAMBanksEnabled;
  var v3362 = this.currMBCRAMBank;
  var v3363 = this.currMBCRAMBankPosition;
  var v3364 = this.cGBC;
  var v3365 = this.gbcRamBank;
  var v3366 = this.gbcRamBankPosition;
  var v3367 = this.ROMBank1offs;
  var v3368 = this.currentROMBank;
  var v3369 = this.cartridgeType;
  var v3370 = this.name;
  var v3371 = this.gameCode;
  var v3372 = this.modeSTAT;
  var v3373 = this.LYCMatchTriggerSTAT;
  var v3374 = this.mode2TriggerSTAT;
  var v3375 = this.mode1TriggerSTAT;
  var v3376 = this.mode0TriggerSTAT;
  var v3377 = this.LCDisOn;
  var v3378 = this.gfxWindowCHRBankPosition;
  var v3379 = this.gfxWindowDisplay;
  var v3380 = this.gfxSpriteShow;
  var v3381 = this.gfxSpriteNormalHeight;
  var v3382 = this.gfxBackgroundCHRBankPosition;
  var v3383 = this.gfxBackgroundBankOffset;
  var v3384 = this.TIMAEnabled;
  var v3385 = this.DIVTicks;
  var v3386 = this.LCDTicks;
  var v3387 = this.timerTicks;
  var v3388 = this.TACClocker;
  var v3389 = this.serialTimer;
  var v3390 = this.serialShiftTimer;
  var v3391 = this.serialShiftTimerAllocated;
  var v3392 = this.IRQEnableDelay;
  var v3393 = this.lastIteration;
  var v3394 = this.cMBC1;
  var v3395 = this.cMBC2;
  var v3396 = this.cMBC3;
  var v3397 = this.cMBC5;
  var v3398 = this.cMBC7;
  var v3399 = this.cSRAM;
  var v3400 = this.cMMMO1;
  var v3401 = this.cRUMBLE;
  var v3402 = this.cCamera;
  var v3403 = this.cTAMA5;
  var v3404 = this.cHuC3;
  var v3405 = this.cHuC1;
  var v3406 = this.drewBlank;
  var v7078 = this.frameBuffer;
  var v3407 = this.fromTypedArray(v7078);
  var v3408 = this.bgEnabled;
  var v3409 = this.BGPriorityEnabled;
  var v3410 = this.channel1FrequencyTracker;
  var v3411 = this.channel1FrequencyCounter;
  var v3412 = this.channel1totalLength;
  var v3413 = this.channel1envelopeVolume;
  var v3414 = this.channel1envelopeType;
  var v3415 = this.channel1envelopeSweeps;
  var v3416 = this.channel1envelopeSweepsLast;
  var v3417 = this.channel1consecutive;
  var v3418 = this.channel1frequency;
  var v3419 = this.channel1SweepFault;
  var v3420 = this.channel1ShadowFrequency;
  var v3421 = this.channel1timeSweep;
  var v3422 = this.channel1lastTimeSweep;
  var v3423 = this.channel1numSweep;
  var v3424 = this.channel1frequencySweepDivider;
  var v3425 = this.channel1decreaseSweep;
  var v3426 = this.channel2FrequencyTracker;
  var v3427 = this.channel2FrequencyCounter;
  var v3428 = this.channel2totalLength;
  var v3429 = this.channel2envelopeVolume;
  var v3430 = this.channel2envelopeType;
  var v3431 = this.channel2envelopeSweeps;
  var v3432 = this.channel2envelopeSweepsLast;
  var v3433 = this.channel2consecutive;
  var v3434 = this.channel2frequency;
  var v3435 = this.channel3canPlay;
  var v3436 = this.channel3totalLength;
  var v3437 = this.channel3patternType;
  var v3438 = this.channel3frequency;
  var v3439 = this.channel3consecutive;
  var v7079 = this.channel3PCM;
  var v3440 = this.fromTypedArray(v7079);
  var v3441 = this.channel4FrequencyPeriod;
  var v3442 = this.channel4lastSampleLookup;
  var v3443 = this.channel4totalLength;
  var v3444 = this.channel4envelopeVolume;
  var v3445 = this.channel4currentVolume;
  var v3446 = this.channel4envelopeType;
  var v3447 = this.channel4envelopeSweeps;
  var v3448 = this.channel4envelopeSweepsLast;
  var v3449 = this.channel4consecutive;
  var v3450 = this.channel4BitRange;
  var v3451 = this.soundMasterEnabled;
  var v3452 = this.VinLeftChannelMasterVolume;
  var v3453 = this.VinRightChannelMasterVolume;
  var v3454 = this.leftChannel1;
  var v3455 = this.leftChannel2;
  var v3456 = this.leftChannel3;
  var v3457 = this.leftChannel4;
  var v3458 = this.rightChannel1;
  var v3459 = this.rightChannel2;
  var v3460 = this.rightChannel3;
  var v3461 = this.rightChannel4;
  var v3462 = this.channel1currentSampleLeft;
  var v3463 = this.channel1currentSampleRight;
  var v3464 = this.channel2currentSampleLeft;
  var v3465 = this.channel2currentSampleRight;
  var v3466 = this.channel3currentSampleLeft;
  var v3467 = this.channel3currentSampleRight;
  var v3468 = this.channel4currentSampleLeft;
  var v3469 = this.channel4currentSampleRight;
  var v3470 = this.channel1currentSampleLeftSecondary;
  var v3471 = this.channel1currentSampleRightSecondary;
  var v3472 = this.channel2currentSampleLeftSecondary;
  var v3473 = this.channel2currentSampleRightSecondary;
  var v3474 = this.channel3currentSampleLeftSecondary;
  var v3475 = this.channel3currentSampleRightSecondary;
  var v3476 = this.channel4currentSampleLeftSecondary;
  var v3477 = this.channel4currentSampleRightSecondary;
  var v3478 = this.channel1currentSampleLeftTrimary;
  var v3479 = this.channel1currentSampleRightTrimary;
  var v3480 = this.channel2currentSampleLeftTrimary;
  var v3481 = this.channel2currentSampleRightTrimary;
  var v3482 = this.mixerOutputCache;
  var v3483 = this.channel1DutyTracker;
  var v3484 = this.channel1CachedDuty;
  var v3485 = this.channel2DutyTracker;
  var v3486 = this.channel2CachedDuty;
  var v3487 = this.channel1Enabled;
  var v3488 = this.channel2Enabled;
  var v3489 = this.channel3Enabled;
  var v3490 = this.channel4Enabled;
  var v3491 = this.sequencerClocks;
  var v3492 = this.sequencePosition;
  var v3493 = this.channel3Counter;
  var v3494 = this.channel4Counter;
  var v3495 = this.cachedChannel3Sample;
  var v3496 = this.cachedChannel4Sample;
  var v3497 = this.channel3FrequencyPeriod;
  var v3498 = this.channel3lastSampleLookup;
  var v3499 = this.actualScanLine;
  var v3500 = this.lastUnrenderedLine;
  var v3501 = this.queuedScanLines;
  var v3502 = this.RTCisLatched;
  var v3503 = this.latchedSeconds;
  var v3504 = this.latchedMinutes;
  var v3505 = this.latchedHours;
  var v3506 = this.latchedLDays;
  var v3507 = this.latchedHDays;
  var v3508 = this.RTCSeconds;
  var v3509 = this.RTCMinutes;
  var v3510 = this.RTCHours;
  var v3511 = this.RTCDays;
  var v3512 = this.RTCDayOverFlow;
  var v3513 = this.RTCHALT;
  var v3514 = this.usedBootROM;
  var v3515 = this.skipPCIncrement;
  var v3516 = this.STATTracker;
  var v3517 = this.gbcRamBankPositionECHO;
  var v3518 = this.numRAMBanks;
  var v3519 = this.windowY;
  var v3520 = this.windowX;
  var v7080 = this.gbcOBJRawPalette;
  var v3521 = this.fromTypedArray(v7080);
  var v7081 = this.gbcBGRawPalette;
  var v3522 = this.fromTypedArray(v7081);
  var v7082 = this.gbOBJPalette;
  var v3523 = this.fromTypedArray(v7082);
  var v7083 = this.gbBGPalette;
  var v3524 = this.fromTypedArray(v7083);
  var v7084 = this.gbcOBJPalette;
  var v3525 = this.fromTypedArray(v7084);
  var v7085 = this.gbcBGPalette;
  var v3526 = this.fromTypedArray(v7085);
  var v7086 = this.gbBGColorizedPalette;
  var v3527 = this.fromTypedArray(v7086);
  var v7087 = this.gbOBJColorizedPalette;
  var v3528 = this.fromTypedArray(v7087);
  var v7088 = this.cachedBGPaletteConversion;
  var v3529 = this.fromTypedArray(v7088);
  var v7089 = this.cachedOBJPaletteConversion;
  var v3530 = this.fromTypedArray(v7089);
  var v7090 = this.BGCHRBank1;
  var v3531 = this.fromTypedArray(v7090);
  var v7091 = this.BGCHRBank2;
  var v3532 = this.fromTypedArray(v7091);
  var v3533 = this.haltPostClocks;
  var v3534 = this.interruptsRequested;
  var v3535 = this.interruptsEnabled;
  var v3536 = this.remainingClocks;
  var v3537 = this.colorizedGBPalettes;
  var v3538 = this.backgroundY;
  var v3539 = this.backgroundX;
  var v3540 = this.CPUStopped;
  return [v3336, v3337, v3338, v3339, v3340, v3341, v3342, v3343, v3344, v3345, v3346, v3347, v3348, v3349, v3350, v3351, v3352, v3353, v3354, v3355, v3356, v3357, v3358, v3359, v3360, v3361, v3362, v3363, v3364, v3365, v3366, v3367, v3368, v3369, v3370, v3371, v3372, v3373, v3374, v3375, v3376, v3377, v3378, v3379, v3380, v3381, v3382, v3383, v3384, v3385, v3386, v3387, v3388, v3389, v3390, v3391, v3392, v3393, v3394, v3395, v3396, v3397, v3398, v3399, v3400, v3401, v3402, v3403, v3404, v3405, v3406, 
  v3407, v3408, v3409, v3410, v3411, v3412, v3413, v3414, v3415, v3416, v3417, v3418, v3419, v3420, v3421, v3422, v3423, v3424, v3425, v3426, v3427, v3428, v3429, v3430, v3431, v3432, v3433, v3434, v3435, v3436, v3437, v3438, v3439, v3440, v3441, v3442, v3443, v3444, v3445, v3446, v3447, v3448, v3449, v3450, v3451, v3452, v3453, v3454, v3455, v3456, v3457, v3458, v3459, v3460, v3461, v3462, v3463, v3464, v3465, v3466, v3467, v3468, v3469, v3470, v3471, v3472, v3473, v3474, v3475, v3476, v3477, v3478, 
  v3479, v3480, v3481, v3482, v3483, v3484, v3485, v3486, v3487, v3488, v3489, v3490, v3491, v3492, v3493, v3494, v3495, v3496, v3497, v3498, v3499, v3500, v3501, v3502, v3503, v3504, v3505, v3506, v3507, v3508, v3509, v3510, v3511, v3512, v3513, v3514, v3515, v3516, v3517, v3518, v3519, v3520, v3521, v3522, v3523, v3524, v3525, v3526, v3527, v3528, v3529, v3530, v3531, v3532, v3533, v3534, v3535, v3536, v3537, v3538, v3539, v3540];
}
function v591() {
  var v7092 = this.cTIMER;
  var v3554 = !v7092;
  if (v3554) {
    return [];
  } else {
    var v3541 = this.lastIteration;
    var v3542 = this.RTCisLatched;
    var v3543 = this.latchedSeconds;
    var v3544 = this.latchedMinutes;
    var v3545 = this.latchedHours;
    var v3546 = this.latchedLDays;
    var v3547 = this.latchedHDays;
    var v3548 = this.RTCSeconds;
    var v3549 = this.RTCMinutes;
    var v3550 = this.RTCHours;
    var v3551 = this.RTCDays;
    var v3552 = this.RTCDayOverFlow;
    var v3553 = this.RTCHALT;
    return [v3541, v3542, v3543, v3544, v3545, v3546, v3547, v3548, v3549, v3550, v3551, v3552, v3553];
  }
  return;
}
function v590() {
  var v9074 = this.cBATT;
  var v7093 = !v9074;
  var v9076 = !v7093;
  if (v9076) {
    var v9996 = this.MBCRam;
    var v9075 = v9996.length;
    v7093 = v9075 == 0;
  }
  var v3556 = v7093;
  if (v3556) {
    return [];
  } else {
    var v3555 = this.MBCRam;
    return this.fromTypedArray(v3555);
  }
  return;
}
function v589(parentObj$$512) {
  var v7094 = parentObj$$512.registerA;
  parentObj$$512.registerA = v7094 | 128;
  return;
}
function v588(parentObj$$511) {
  var v3557 = parentObj$$511.memoryWriter;
  var v3558 = parentObj$$511.registersHL;
  var v3559 = parentObj$$511.registersHL;
  var v9077 = parentObj$$511.memoryReader;
  var v9078 = parentObj$$511.registersHL;
  var v9079 = parentObj$$511.registersHL;
  var v7095 = v9077[v9078](parentObj$$511, v9079);
  var v3560 = v7095 | 128;
  v3557[v3558](parentObj$$511, v3559, v3560);
  return;
}
function v587(parentObj$$510) {
  var v7096 = parentObj$$510.registersHL;
  parentObj$$510.registersHL = v7096 | 128;
  return;
}
function v586(parentObj$$509) {
  var v7097 = parentObj$$509.registersHL;
  parentObj$$509.registersHL = v7097 | 32768;
  return;
}
function v585(parentObj$$508) {
  var v7098 = parentObj$$508.registerE;
  parentObj$$508.registerE = v7098 | 128;
  return;
}
function v584(parentObj$$507) {
  var v7099 = parentObj$$507.registerD;
  parentObj$$507.registerD = v7099 | 128;
  return;
}
function v583(parentObj$$506) {
  var v7100 = parentObj$$506.registerC;
  parentObj$$506.registerC = v7100 | 128;
  return;
}
function v582(parentObj$$505) {
  var v7101 = parentObj$$505.registerB;
  parentObj$$505.registerB = v7101 | 128;
  return;
}
function v581(parentObj$$504) {
  var v7102 = parentObj$$504.registerA;
  parentObj$$504.registerA = v7102 | 64;
  return;
}
function v580(parentObj$$503) {
  var v3561 = parentObj$$503.memoryWriter;
  var v3562 = parentObj$$503.registersHL;
  var v3563 = parentObj$$503.registersHL;
  var v9080 = parentObj$$503.memoryReader;
  var v9081 = parentObj$$503.registersHL;
  var v9082 = parentObj$$503.registersHL;
  var v7103 = v9080[v9081](parentObj$$503, v9082);
  var v3564 = v7103 | 64;
  v3561[v3562](parentObj$$503, v3563, v3564);
  return;
}
function v579(parentObj$$502) {
  var v7104 = parentObj$$502.registersHL;
  parentObj$$502.registersHL = v7104 | 64;
  return;
}
function v578(parentObj$$501) {
  var v7105 = parentObj$$501.registersHL;
  parentObj$$501.registersHL = v7105 | 16384;
  return;
}
function v577(parentObj$$500) {
  var v7106 = parentObj$$500.registerE;
  parentObj$$500.registerE = v7106 | 64;
  return;
}
function v576(parentObj$$499) {
  var v7107 = parentObj$$499.registerD;
  parentObj$$499.registerD = v7107 | 64;
  return;
}
function v575(parentObj$$498) {
  var v7108 = parentObj$$498.registerC;
  parentObj$$498.registerC = v7108 | 64;
  return;
}
function v574(parentObj$$497) {
  var v7109 = parentObj$$497.registerB;
  parentObj$$497.registerB = v7109 | 64;
  return;
}
function v573(parentObj$$496) {
  var v7110 = parentObj$$496.registerA;
  parentObj$$496.registerA = v7110 | 32;
  return;
}
function v572(parentObj$$495) {
  var v3565 = parentObj$$495.memoryWriter;
  var v3566 = parentObj$$495.registersHL;
  var v3567 = parentObj$$495.registersHL;
  var v9083 = parentObj$$495.memoryReader;
  var v9084 = parentObj$$495.registersHL;
  var v9085 = parentObj$$495.registersHL;
  var v7111 = v9083[v9084](parentObj$$495, v9085);
  var v3568 = v7111 | 32;
  v3565[v3566](parentObj$$495, v3567, v3568);
  return;
}
function v571(parentObj$$494) {
  var v7112 = parentObj$$494.registersHL;
  parentObj$$494.registersHL = v7112 | 32;
  return;
}
function v570(parentObj$$493) {
  var v7113 = parentObj$$493.registersHL;
  parentObj$$493.registersHL = v7113 | 8192;
  return;
}
function v569(parentObj$$492) {
  var v7114 = parentObj$$492.registerE;
  parentObj$$492.registerE = v7114 | 32;
  return;
}
function v568(parentObj$$491) {
  var v7115 = parentObj$$491.registerD;
  parentObj$$491.registerD = v7115 | 32;
  return;
}
function v567(parentObj$$490) {
  var v7116 = parentObj$$490.registerC;
  parentObj$$490.registerC = v7116 | 32;
  return;
}
function v566(parentObj$$489) {
  var v7117 = parentObj$$489.registerB;
  parentObj$$489.registerB = v7117 | 32;
  return;
}
function v565(parentObj$$488) {
  var v7118 = parentObj$$488.registerA;
  parentObj$$488.registerA = v7118 | 16;
  return;
}
function v564(parentObj$$487) {
  var v3569 = parentObj$$487.memoryWriter;
  var v3570 = parentObj$$487.registersHL;
  var v3571 = parentObj$$487.registersHL;
  var v9086 = parentObj$$487.memoryReader;
  var v9087 = parentObj$$487.registersHL;
  var v9088 = parentObj$$487.registersHL;
  var v7119 = v9086[v9087](parentObj$$487, v9088);
  var v3572 = v7119 | 16;
  v3569[v3570](parentObj$$487, v3571, v3572);
  return;
}
function v563(parentObj$$486) {
  var v7120 = parentObj$$486.registersHL;
  parentObj$$486.registersHL = v7120 | 16;
  return;
}
function v562(parentObj$$485) {
  var v7121 = parentObj$$485.registersHL;
  parentObj$$485.registersHL = v7121 | 4096;
  return;
}
function v561(parentObj$$484) {
  var v7122 = parentObj$$484.registerE;
  parentObj$$484.registerE = v7122 | 16;
  return;
}
function v560(parentObj$$483) {
  var v7123 = parentObj$$483.registerD;
  parentObj$$483.registerD = v7123 | 16;
  return;
}
function v559(parentObj$$482) {
  var v7124 = parentObj$$482.registerC;
  parentObj$$482.registerC = v7124 | 16;
  return;
}
function v558(parentObj$$481) {
  var v7125 = parentObj$$481.registerB;
  parentObj$$481.registerB = v7125 | 16;
  return;
}
function v557(parentObj$$480) {
  var v7126 = parentObj$$480.registerA;
  parentObj$$480.registerA = v7126 | 8;
  return;
}
function v556(parentObj$$479) {
  var v3573 = parentObj$$479.memoryWriter;
  var v3574 = parentObj$$479.registersHL;
  var v3575 = parentObj$$479.registersHL;
  var v9089 = parentObj$$479.memoryReader;
  var v9090 = parentObj$$479.registersHL;
  var v9091 = parentObj$$479.registersHL;
  var v7127 = v9089[v9090](parentObj$$479, v9091);
  var v3576 = v7127 | 8;
  v3573[v3574](parentObj$$479, v3575, v3576);
  return;
}
function v555(parentObj$$478) {
  var v7128 = parentObj$$478.registersHL;
  parentObj$$478.registersHL = v7128 | 8;
  return;
}
function v554(parentObj$$477) {
  var v7129 = parentObj$$477.registersHL;
  parentObj$$477.registersHL = v7129 | 2048;
  return;
}
function v553(parentObj$$476) {
  var v7130 = parentObj$$476.registerE;
  parentObj$$476.registerE = v7130 | 8;
  return;
}
function v552(parentObj$$475) {
  var v7131 = parentObj$$475.registerD;
  parentObj$$475.registerD = v7131 | 8;
  return;
}
function v551(parentObj$$474) {
  var v7132 = parentObj$$474.registerC;
  parentObj$$474.registerC = v7132 | 8;
  return;
}
function v550(parentObj$$473) {
  var v7133 = parentObj$$473.registerB;
  parentObj$$473.registerB = v7133 | 8;
  return;
}
function v549(parentObj$$472) {
  var v7134 = parentObj$$472.registerA;
  parentObj$$472.registerA = v7134 | 4;
  return;
}
function v548(parentObj$$471) {
  var v3577 = parentObj$$471.memoryWriter;
  var v3578 = parentObj$$471.registersHL;
  var v3579 = parentObj$$471.registersHL;
  var v9092 = parentObj$$471.memoryReader;
  var v9093 = parentObj$$471.registersHL;
  var v9094 = parentObj$$471.registersHL;
  var v7135 = v9092[v9093](parentObj$$471, v9094);
  var v3580 = v7135 | 4;
  v3577[v3578](parentObj$$471, v3579, v3580);
  return;
}
function v547(parentObj$$470) {
  var v7136 = parentObj$$470.registersHL;
  parentObj$$470.registersHL = v7136 | 4;
  return;
}
function v546(parentObj$$469) {
  var v7137 = parentObj$$469.registersHL;
  parentObj$$469.registersHL = v7137 | 1024;
  return;
}
function v545(parentObj$$468) {
  var v7138 = parentObj$$468.registerE;
  parentObj$$468.registerE = v7138 | 4;
  return;
}
function v544(parentObj$$467) {
  var v7139 = parentObj$$467.registerD;
  parentObj$$467.registerD = v7139 | 4;
  return;
}
function v543(parentObj$$466) {
  var v7140 = parentObj$$466.registerC;
  parentObj$$466.registerC = v7140 | 4;
  return;
}
function v542(parentObj$$465) {
  var v7141 = parentObj$$465.registerB;
  parentObj$$465.registerB = v7141 | 4;
  return;
}
function v541(parentObj$$464) {
  var v7142 = parentObj$$464.registerA;
  parentObj$$464.registerA = v7142 | 2;
  return;
}
function v540(parentObj$$463) {
  var v3581 = parentObj$$463.memoryWriter;
  var v3582 = parentObj$$463.registersHL;
  var v3583 = parentObj$$463.registersHL;
  var v9095 = parentObj$$463.memoryReader;
  var v9096 = parentObj$$463.registersHL;
  var v9097 = parentObj$$463.registersHL;
  var v7143 = v9095[v9096](parentObj$$463, v9097);
  var v3584 = v7143 | 2;
  v3581[v3582](parentObj$$463, v3583, v3584);
  return;
}
function v539(parentObj$$462) {
  var v7144 = parentObj$$462.registersHL;
  parentObj$$462.registersHL = v7144 | 2;
  return;
}
function v538(parentObj$$461) {
  var v7145 = parentObj$$461.registersHL;
  parentObj$$461.registersHL = v7145 | 512;
  return;
}
function v537(parentObj$$460) {
  var v7146 = parentObj$$460.registerE;
  parentObj$$460.registerE = v7146 | 2;
  return;
}
function v536(parentObj$$459) {
  var v7147 = parentObj$$459.registerD;
  parentObj$$459.registerD = v7147 | 2;
  return;
}
function v535(parentObj$$458) {
  var v7148 = parentObj$$458.registerC;
  parentObj$$458.registerC = v7148 | 2;
  return;
}
function v534(parentObj$$457) {
  var v7149 = parentObj$$457.registerB;
  parentObj$$457.registerB = v7149 | 2;
  return;
}
function v533(parentObj$$456) {
  var v7150 = parentObj$$456.registerA;
  parentObj$$456.registerA = v7150 | 1;
  return;
}
function v532(parentObj$$455) {
  var v3585 = parentObj$$455.memoryWriter;
  var v3586 = parentObj$$455.registersHL;
  var v3587 = parentObj$$455.registersHL;
  var v9098 = parentObj$$455.memoryReader;
  var v9099 = parentObj$$455.registersHL;
  var v9100 = parentObj$$455.registersHL;
  var v7151 = v9098[v9099](parentObj$$455, v9100);
  var v3588 = v7151 | 1;
  v3585[v3586](parentObj$$455, v3587, v3588);
  return;
}
function v531(parentObj$$454) {
  var v7152 = parentObj$$454.registersHL;
  parentObj$$454.registersHL = v7152 | 1;
  return;
}
function v530(parentObj$$453) {
  var v7153 = parentObj$$453.registersHL;
  parentObj$$453.registersHL = v7153 | 256;
  return;
}
function v529(parentObj$$452) {
  var v7154 = parentObj$$452.registerE;
  parentObj$$452.registerE = v7154 | 1;
  return;
}
function v528(parentObj$$451) {
  var v7155 = parentObj$$451.registerD;
  parentObj$$451.registerD = v7155 | 1;
  return;
}
function v527(parentObj$$450) {
  var v7156 = parentObj$$450.registerC;
  parentObj$$450.registerC = v7156 | 1;
  return;
}
function v526(parentObj$$449) {
  var v7157 = parentObj$$449.registerB;
  parentObj$$449.registerB = v7157 | 1;
  return;
}
function v525(parentObj$$448) {
  var v7158 = parentObj$$448.registerA;
  parentObj$$448.registerA = v7158 & 127;
  return;
}
function v524(parentObj$$447) {
  var v3589 = parentObj$$447.memoryWriter;
  var v3590 = parentObj$$447.registersHL;
  var v3591 = parentObj$$447.registersHL;
  var v9101 = parentObj$$447.memoryReader;
  var v9102 = parentObj$$447.registersHL;
  var v9103 = parentObj$$447.registersHL;
  var v7159 = v9101[v9102](parentObj$$447, v9103);
  var v3592 = v7159 & 127;
  v3589[v3590](parentObj$$447, v3591, v3592);
  return;
}
function v523(parentObj$$446) {
  var v7160 = parentObj$$446.registersHL;
  parentObj$$446.registersHL = v7160 & 65407;
  return;
}
function v522(parentObj$$445) {
  var v7161 = parentObj$$445.registersHL;
  parentObj$$445.registersHL = v7161 & 32767;
  return;
}
function v521(parentObj$$444) {
  var v7162 = parentObj$$444.registerE;
  parentObj$$444.registerE = v7162 & 127;
  return;
}
function v520(parentObj$$443) {
  var v7163 = parentObj$$443.registerD;
  parentObj$$443.registerD = v7163 & 127;
  return;
}
function v519(parentObj$$442) {
  var v7164 = parentObj$$442.registerC;
  parentObj$$442.registerC = v7164 & 127;
  return;
}
function v518(parentObj$$441) {
  var v7165 = parentObj$$441.registerB;
  parentObj$$441.registerB = v7165 & 127;
  return;
}
function v517(parentObj$$440) {
  var v7166 = parentObj$$440.registerA;
  parentObj$$440.registerA = v7166 & 191;
  return;
}
function v516(parentObj$$439) {
  var v3593 = parentObj$$439.memoryWriter;
  var v3594 = parentObj$$439.registersHL;
  var v3595 = parentObj$$439.registersHL;
  var v9104 = parentObj$$439.memoryReader;
  var v9105 = parentObj$$439.registersHL;
  var v9106 = parentObj$$439.registersHL;
  var v7167 = v9104[v9105](parentObj$$439, v9106);
  var v3596 = v7167 & 191;
  v3593[v3594](parentObj$$439, v3595, v3596);
  return;
}
function v515(parentObj$$438) {
  var v7168 = parentObj$$438.registersHL;
  parentObj$$438.registersHL = v7168 & 65471;
  return;
}
function v514(parentObj$$437) {
  var v7169 = parentObj$$437.registersHL;
  parentObj$$437.registersHL = v7169 & 49151;
  return;
}
function v513(parentObj$$436) {
  var v7170 = parentObj$$436.registerE;
  parentObj$$436.registerE = v7170 & 191;
  return;
}
function v512(parentObj$$435) {
  var v7171 = parentObj$$435.registerD;
  parentObj$$435.registerD = v7171 & 191;
  return;
}
function v511(parentObj$$434) {
  var v7172 = parentObj$$434.registerC;
  parentObj$$434.registerC = v7172 & 191;
  return;
}
function v510(parentObj$$433) {
  var v7173 = parentObj$$433.registerB;
  parentObj$$433.registerB = v7173 & 191;
  return;
}
function v509(parentObj$$432) {
  var v7174 = parentObj$$432.registerA;
  parentObj$$432.registerA = v7174 & 223;
  return;
}
function v508(parentObj$$431) {
  var v3597 = parentObj$$431.memoryWriter;
  var v3598 = parentObj$$431.registersHL;
  var v3599 = parentObj$$431.registersHL;
  var v9107 = parentObj$$431.memoryReader;
  var v9108 = parentObj$$431.registersHL;
  var v9109 = parentObj$$431.registersHL;
  var v7175 = v9107[v9108](parentObj$$431, v9109);
  var v3600 = v7175 & 223;
  v3597[v3598](parentObj$$431, v3599, v3600);
  return;
}
function v507(parentObj$$430) {
  var v7176 = parentObj$$430.registersHL;
  parentObj$$430.registersHL = v7176 & 65503;
  return;
}
function v506(parentObj$$429) {
  var v7177 = parentObj$$429.registersHL;
  parentObj$$429.registersHL = v7177 & 57343;
  return;
}
function v505(parentObj$$428) {
  var v7178 = parentObj$$428.registerE;
  parentObj$$428.registerE = v7178 & 223;
  return;
}
function v504(parentObj$$427) {
  var v7179 = parentObj$$427.registerD;
  parentObj$$427.registerD = v7179 & 223;
  return;
}
function v503(parentObj$$426) {
  var v7180 = parentObj$$426.registerC;
  parentObj$$426.registerC = v7180 & 223;
  return;
}
function v502(parentObj$$425) {
  var v7181 = parentObj$$425.registerB;
  parentObj$$425.registerB = v7181 & 223;
  return;
}
function v501(parentObj$$424) {
  var v7182 = parentObj$$424.registerA;
  parentObj$$424.registerA = v7182 & 239;
  return;
}
function v500(parentObj$$423) {
  var v3601 = parentObj$$423.memoryWriter;
  var v3602 = parentObj$$423.registersHL;
  var v3603 = parentObj$$423.registersHL;
  var v9110 = parentObj$$423.memoryReader;
  var v9111 = parentObj$$423.registersHL;
  var v9112 = parentObj$$423.registersHL;
  var v7183 = v9110[v9111](parentObj$$423, v9112);
  var v3604 = v7183 & 239;
  v3601[v3602](parentObj$$423, v3603, v3604);
  return;
}
function v499(parentObj$$422) {
  var v7184 = parentObj$$422.registersHL;
  parentObj$$422.registersHL = v7184 & 65519;
  return;
}
function v498(parentObj$$421) {
  var v7185 = parentObj$$421.registersHL;
  parentObj$$421.registersHL = v7185 & 61439;
  return;
}
function v497(parentObj$$420) {
  var v7186 = parentObj$$420.registerE;
  parentObj$$420.registerE = v7186 & 239;
  return;
}
function v496(parentObj$$419) {
  var v7187 = parentObj$$419.registerD;
  parentObj$$419.registerD = v7187 & 239;
  return;
}
function v495(parentObj$$418) {
  var v7188 = parentObj$$418.registerC;
  parentObj$$418.registerC = v7188 & 239;
  return;
}
function v494(parentObj$$417) {
  var v7189 = parentObj$$417.registerB;
  parentObj$$417.registerB = v7189 & 239;
  return;
}
function v493(parentObj$$416) {
  var v7190 = parentObj$$416.registerA;
  parentObj$$416.registerA = v7190 & 247;
  return;
}
function v492(parentObj$$415) {
  var v3605 = parentObj$$415.memoryWriter;
  var v3606 = parentObj$$415.registersHL;
  var v3607 = parentObj$$415.registersHL;
  var v9113 = parentObj$$415.memoryReader;
  var v9114 = parentObj$$415.registersHL;
  var v9115 = parentObj$$415.registersHL;
  var v7191 = v9113[v9114](parentObj$$415, v9115);
  var v3608 = v7191 & 247;
  v3605[v3606](parentObj$$415, v3607, v3608);
  return;
}
function v491(parentObj$$414) {
  var v7192 = parentObj$$414.registersHL;
  parentObj$$414.registersHL = v7192 & 65527;
  return;
}
function v490(parentObj$$413) {
  var v7193 = parentObj$$413.registersHL;
  parentObj$$413.registersHL = v7193 & 63487;
  return;
}
function v489(parentObj$$412) {
  var v7194 = parentObj$$412.registerE;
  parentObj$$412.registerE = v7194 & 247;
  return;
}
function v488(parentObj$$411) {
  var v7195 = parentObj$$411.registerD;
  parentObj$$411.registerD = v7195 & 247;
  return;
}
function v487(parentObj$$410) {
  var v7196 = parentObj$$410.registerC;
  parentObj$$410.registerC = v7196 & 247;
  return;
}
function v486(parentObj$$409) {
  var v7197 = parentObj$$409.registerB;
  parentObj$$409.registerB = v7197 & 247;
  return;
}
function v485(parentObj$$408) {
  var v7198 = parentObj$$408.registerA;
  parentObj$$408.registerA = v7198 & 251;
  return;
}
function v484(parentObj$$407) {
  var v3609 = parentObj$$407.memoryWriter;
  var v3610 = parentObj$$407.registersHL;
  var v3611 = parentObj$$407.registersHL;
  var v9116 = parentObj$$407.memoryReader;
  var v9117 = parentObj$$407.registersHL;
  var v9118 = parentObj$$407.registersHL;
  var v7199 = v9116[v9117](parentObj$$407, v9118);
  var v3612 = v7199 & 251;
  v3609[v3610](parentObj$$407, v3611, v3612);
  return;
}
function v483(parentObj$$406) {
  var v7200 = parentObj$$406.registersHL;
  parentObj$$406.registersHL = v7200 & 65531;
  return;
}
function v482(parentObj$$405) {
  var v7201 = parentObj$$405.registersHL;
  parentObj$$405.registersHL = v7201 & 64511;
  return;
}
function v481(parentObj$$404) {
  var v7202 = parentObj$$404.registerE;
  parentObj$$404.registerE = v7202 & 251;
  return;
}
function v480(parentObj$$403) {
  var v7203 = parentObj$$403.registerD;
  parentObj$$403.registerD = v7203 & 251;
  return;
}
function v479(parentObj$$402) {
  var v7204 = parentObj$$402.registerC;
  parentObj$$402.registerC = v7204 & 251;
  return;
}
function v478(parentObj$$401) {
  var v7205 = parentObj$$401.registerB;
  parentObj$$401.registerB = v7205 & 251;
  return;
}
function v477(parentObj$$400) {
  var v7206 = parentObj$$400.registerA;
  parentObj$$400.registerA = v7206 & 253;
  return;
}
function v476(parentObj$$399) {
  var v3613 = parentObj$$399.memoryWriter;
  var v3614 = parentObj$$399.registersHL;
  var v3615 = parentObj$$399.registersHL;
  var v9119 = parentObj$$399.memoryReader;
  var v9120 = parentObj$$399.registersHL;
  var v9121 = parentObj$$399.registersHL;
  var v7207 = v9119[v9120](parentObj$$399, v9121);
  var v3616 = v7207 & 253;
  v3613[v3614](parentObj$$399, v3615, v3616);
  return;
}
function v475(parentObj$$398) {
  var v7208 = parentObj$$398.registersHL;
  parentObj$$398.registersHL = v7208 & 65533;
  return;
}
function v474(parentObj$$397) {
  var v7209 = parentObj$$397.registersHL;
  parentObj$$397.registersHL = v7209 & 65023;
  return;
}
function v473(parentObj$$396) {
  var v7210 = parentObj$$396.registerE;
  parentObj$$396.registerE = v7210 & 253;
  return;
}
function v472(parentObj$$395) {
  var v7211 = parentObj$$395.registerD;
  parentObj$$395.registerD = v7211 & 253;
  return;
}
function v471(parentObj$$394) {
  var v7212 = parentObj$$394.registerC;
  parentObj$$394.registerC = v7212 & 253;
  return;
}
function v470(parentObj$$393) {
  var v7213 = parentObj$$393.registerB;
  parentObj$$393.registerB = v7213 & 253;
  return;
}
function v469(parentObj$$392) {
  var v7214 = parentObj$$392.registerA;
  parentObj$$392.registerA = v7214 & 254;
  return;
}
function v468(parentObj$$391) {
  var v3617 = parentObj$$391.memoryWriter;
  var v3618 = parentObj$$391.registersHL;
  var v3619 = parentObj$$391.registersHL;
  var v9122 = parentObj$$391.memoryReader;
  var v9123 = parentObj$$391.registersHL;
  var v9124 = parentObj$$391.registersHL;
  var v7215 = v9122[v9123](parentObj$$391, v9124);
  var v3620 = v7215 & 254;
  v3617[v3618](parentObj$$391, v3619, v3620);
  return;
}
function v467(parentObj$$390) {
  var v7216 = parentObj$$390.registersHL;
  parentObj$$390.registersHL = v7216 & 65534;
  return;
}
function v466(parentObj$$389) {
  var v7217 = parentObj$$389.registersHL;
  parentObj$$389.registersHL = v7217 & 65279;
  return;
}
function v465(parentObj$$388) {
  var v7218 = parentObj$$388.registerE;
  parentObj$$388.registerE = v7218 & 254;
  return;
}
function v464(parentObj$$387) {
  var v7219 = parentObj$$387.registerD;
  parentObj$$387.registerD = v7219 & 254;
  return;
}
function v463(parentObj$$386) {
  var v7220 = parentObj$$386.registerC;
  parentObj$$386.registerC = v7220 & 254;
  return;
}
function v462(parentObj$$385) {
  var v7221 = parentObj$$385.registerB;
  parentObj$$385.registerB = v7221 & 254;
  return;
}
function v461(parentObj$$384) {
  parentObj$$384.FHalfCarry = true;
  parentObj$$384.FSubtract = false;
  var v7222 = parentObj$$384.registerA;
  var v3621 = v7222 & 128;
  parentObj$$384.FZero = v3621 == 0;
  return;
}
function v460(parentObj$$383) {
  parentObj$$383.FHalfCarry = true;
  parentObj$$383.FSubtract = false;
  var v9125 = parentObj$$383.memoryReader;
  var v9126 = parentObj$$383.registersHL;
  var v9127 = parentObj$$383.registersHL;
  var v7223 = v9125[v9126](parentObj$$383, v9127);
  var v3622 = v7223 & 128;
  parentObj$$383.FZero = v3622 == 0;
  return;
}
function v459(parentObj$$382) {
  parentObj$$382.FHalfCarry = true;
  parentObj$$382.FSubtract = false;
  var v7224 = parentObj$$382.registersHL;
  var v3623 = v7224 & 128;
  parentObj$$382.FZero = v3623 == 0;
  return;
}
function v458(parentObj$$381) {
  parentObj$$381.FHalfCarry = true;
  parentObj$$381.FSubtract = false;
  var v7225 = parentObj$$381.registersHL;
  var v3624 = v7225 & 32768;
  parentObj$$381.FZero = v3624 == 0;
  return;
}
function v457(parentObj$$380) {
  parentObj$$380.FHalfCarry = true;
  parentObj$$380.FSubtract = false;
  var v7226 = parentObj$$380.registerE;
  var v3625 = v7226 & 128;
  parentObj$$380.FZero = v3625 == 0;
  return;
}
function v456(parentObj$$379) {
  parentObj$$379.FHalfCarry = true;
  parentObj$$379.FSubtract = false;
  var v7227 = parentObj$$379.registerD;
  var v3626 = v7227 & 128;
  parentObj$$379.FZero = v3626 == 0;
  return;
}
function v455(parentObj$$378) {
  parentObj$$378.FHalfCarry = true;
  parentObj$$378.FSubtract = false;
  var v7228 = parentObj$$378.registerC;
  var v3627 = v7228 & 128;
  parentObj$$378.FZero = v3627 == 0;
  return;
}
function v454(parentObj$$377) {
  parentObj$$377.FHalfCarry = true;
  parentObj$$377.FSubtract = false;
  var v7229 = parentObj$$377.registerB;
  var v3628 = v7229 & 128;
  parentObj$$377.FZero = v3628 == 0;
  return;
}
function v453(parentObj$$376) {
  parentObj$$376.FHalfCarry = true;
  parentObj$$376.FSubtract = false;
  var v7230 = parentObj$$376.registerA;
  var v3629 = v7230 & 64;
  parentObj$$376.FZero = v3629 == 0;
  return;
}
function v452(parentObj$$375) {
  parentObj$$375.FHalfCarry = true;
  parentObj$$375.FSubtract = false;
  var v9128 = parentObj$$375.memoryReader;
  var v9129 = parentObj$$375.registersHL;
  var v9130 = parentObj$$375.registersHL;
  var v7231 = v9128[v9129](parentObj$$375, v9130);
  var v3630 = v7231 & 64;
  parentObj$$375.FZero = v3630 == 0;
  return;
}
function v451(parentObj$$374) {
  parentObj$$374.FHalfCarry = true;
  parentObj$$374.FSubtract = false;
  var v7232 = parentObj$$374.registersHL;
  var v3631 = v7232 & 64;
  parentObj$$374.FZero = v3631 == 0;
  return;
}
function v450(parentObj$$373) {
  parentObj$$373.FHalfCarry = true;
  parentObj$$373.FSubtract = false;
  var v7233 = parentObj$$373.registersHL;
  var v3632 = v7233 & 16384;
  parentObj$$373.FZero = v3632 == 0;
  return;
}
function v449(parentObj$$372) {
  parentObj$$372.FHalfCarry = true;
  parentObj$$372.FSubtract = false;
  var v7234 = parentObj$$372.registerE;
  var v3633 = v7234 & 64;
  parentObj$$372.FZero = v3633 == 0;
  return;
}
function v448(parentObj$$371) {
  parentObj$$371.FHalfCarry = true;
  parentObj$$371.FSubtract = false;
  var v7235 = parentObj$$371.registerD;
  var v3634 = v7235 & 64;
  parentObj$$371.FZero = v3634 == 0;
  return;
}
function v447(parentObj$$370) {
  parentObj$$370.FHalfCarry = true;
  parentObj$$370.FSubtract = false;
  var v7236 = parentObj$$370.registerC;
  var v3635 = v7236 & 64;
  parentObj$$370.FZero = v3635 == 0;
  return;
}
function v446(parentObj$$369) {
  parentObj$$369.FHalfCarry = true;
  parentObj$$369.FSubtract = false;
  var v7237 = parentObj$$369.registerB;
  var v3636 = v7237 & 64;
  parentObj$$369.FZero = v3636 == 0;
  return;
}
function v445(parentObj$$368) {
  parentObj$$368.FHalfCarry = true;
  parentObj$$368.FSubtract = false;
  var v7238 = parentObj$$368.registerA;
  var v3637 = v7238 & 32;
  parentObj$$368.FZero = v3637 == 0;
  return;
}
function v444(parentObj$$367) {
  parentObj$$367.FHalfCarry = true;
  parentObj$$367.FSubtract = false;
  var v9131 = parentObj$$367.memoryReader;
  var v9132 = parentObj$$367.registersHL;
  var v9133 = parentObj$$367.registersHL;
  var v7239 = v9131[v9132](parentObj$$367, v9133);
  var v3638 = v7239 & 32;
  parentObj$$367.FZero = v3638 == 0;
  return;
}
function v443(parentObj$$366) {
  parentObj$$366.FHalfCarry = true;
  parentObj$$366.FSubtract = false;
  var v7240 = parentObj$$366.registersHL;
  var v3639 = v7240 & 32;
  parentObj$$366.FZero = v3639 == 0;
  return;
}
function v442(parentObj$$365) {
  parentObj$$365.FHalfCarry = true;
  parentObj$$365.FSubtract = false;
  var v7241 = parentObj$$365.registersHL;
  var v3640 = v7241 & 8192;
  parentObj$$365.FZero = v3640 == 0;
  return;
}
function v441(parentObj$$364) {
  parentObj$$364.FHalfCarry = true;
  parentObj$$364.FSubtract = false;
  var v7242 = parentObj$$364.registerE;
  var v3641 = v7242 & 32;
  parentObj$$364.FZero = v3641 == 0;
  return;
}
function v440(parentObj$$363) {
  parentObj$$363.FHalfCarry = true;
  parentObj$$363.FSubtract = false;
  var v7243 = parentObj$$363.registerD;
  var v3642 = v7243 & 32;
  parentObj$$363.FZero = v3642 == 0;
  return;
}
function v439(parentObj$$362) {
  parentObj$$362.FHalfCarry = true;
  parentObj$$362.FSubtract = false;
  var v7244 = parentObj$$362.registerC;
  var v3643 = v7244 & 32;
  parentObj$$362.FZero = v3643 == 0;
  return;
}
function v438(parentObj$$361) {
  parentObj$$361.FHalfCarry = true;
  parentObj$$361.FSubtract = false;
  var v7245 = parentObj$$361.registerB;
  var v3644 = v7245 & 32;
  parentObj$$361.FZero = v3644 == 0;
  return;
}
function v437(parentObj$$360) {
  parentObj$$360.FHalfCarry = true;
  parentObj$$360.FSubtract = false;
  var v7246 = parentObj$$360.registerA;
  var v3645 = v7246 & 16;
  parentObj$$360.FZero = v3645 == 0;
  return;
}
function v436(parentObj$$359) {
  parentObj$$359.FHalfCarry = true;
  parentObj$$359.FSubtract = false;
  var v9134 = parentObj$$359.memoryReader;
  var v9135 = parentObj$$359.registersHL;
  var v9136 = parentObj$$359.registersHL;
  var v7247 = v9134[v9135](parentObj$$359, v9136);
  var v3646 = v7247 & 16;
  parentObj$$359.FZero = v3646 == 0;
  return;
}
function v435(parentObj$$358) {
  parentObj$$358.FHalfCarry = true;
  parentObj$$358.FSubtract = false;
  var v7248 = parentObj$$358.registersHL;
  var v3647 = v7248 & 16;
  parentObj$$358.FZero = v3647 == 0;
  return;
}
function v434(parentObj$$357) {
  parentObj$$357.FHalfCarry = true;
  parentObj$$357.FSubtract = false;
  var v7249 = parentObj$$357.registersHL;
  var v3648 = v7249 & 4096;
  parentObj$$357.FZero = v3648 == 0;
  return;
}
function v433(parentObj$$356) {
  parentObj$$356.FHalfCarry = true;
  parentObj$$356.FSubtract = false;
  var v7250 = parentObj$$356.registerE;
  var v3649 = v7250 & 16;
  parentObj$$356.FZero = v3649 == 0;
  return;
}
function v432(parentObj$$355) {
  parentObj$$355.FHalfCarry = true;
  parentObj$$355.FSubtract = false;
  var v7251 = parentObj$$355.registerD;
  var v3650 = v7251 & 16;
  parentObj$$355.FZero = v3650 == 0;
  return;
}
function v431(parentObj$$354) {
  parentObj$$354.FHalfCarry = true;
  parentObj$$354.FSubtract = false;
  var v7252 = parentObj$$354.registerC;
  var v3651 = v7252 & 16;
  parentObj$$354.FZero = v3651 == 0;
  return;
}
function v430(parentObj$$353) {
  parentObj$$353.FHalfCarry = true;
  parentObj$$353.FSubtract = false;
  var v7253 = parentObj$$353.registerB;
  var v3652 = v7253 & 16;
  parentObj$$353.FZero = v3652 == 0;
  return;
}
function v429(parentObj$$352) {
  parentObj$$352.FHalfCarry = true;
  parentObj$$352.FSubtract = false;
  var v7254 = parentObj$$352.registerA;
  var v3653 = v7254 & 8;
  parentObj$$352.FZero = v3653 == 0;
  return;
}
function v428(parentObj$$351) {
  parentObj$$351.FHalfCarry = true;
  parentObj$$351.FSubtract = false;
  var v9137 = parentObj$$351.memoryReader;
  var v9138 = parentObj$$351.registersHL;
  var v9139 = parentObj$$351.registersHL;
  var v7255 = v9137[v9138](parentObj$$351, v9139);
  var v3654 = v7255 & 8;
  parentObj$$351.FZero = v3654 == 0;
  return;
}
function v427(parentObj$$350) {
  parentObj$$350.FHalfCarry = true;
  parentObj$$350.FSubtract = false;
  var v7256 = parentObj$$350.registersHL;
  var v3655 = v7256 & 8;
  parentObj$$350.FZero = v3655 == 0;
  return;
}
function v426(parentObj$$349) {
  parentObj$$349.FHalfCarry = true;
  parentObj$$349.FSubtract = false;
  var v7257 = parentObj$$349.registersHL;
  var v3656 = v7257 & 2048;
  parentObj$$349.FZero = v3656 == 0;
  return;
}
function v425(parentObj$$348) {
  parentObj$$348.FHalfCarry = true;
  parentObj$$348.FSubtract = false;
  var v7258 = parentObj$$348.registerE;
  var v3657 = v7258 & 8;
  parentObj$$348.FZero = v3657 == 0;
  return;
}
function v424(parentObj$$347) {
  parentObj$$347.FHalfCarry = true;
  parentObj$$347.FSubtract = false;
  var v7259 = parentObj$$347.registerD;
  var v3658 = v7259 & 8;
  parentObj$$347.FZero = v3658 == 0;
  return;
}
function v423(parentObj$$346) {
  parentObj$$346.FHalfCarry = true;
  parentObj$$346.FSubtract = false;
  var v7260 = parentObj$$346.registerC;
  var v3659 = v7260 & 8;
  parentObj$$346.FZero = v3659 == 0;
  return;
}
function v422(parentObj$$345) {
  parentObj$$345.FHalfCarry = true;
  parentObj$$345.FSubtract = false;
  var v7261 = parentObj$$345.registerB;
  var v3660 = v7261 & 8;
  parentObj$$345.FZero = v3660 == 0;
  return;
}
function v421(parentObj$$344) {
  parentObj$$344.FHalfCarry = true;
  parentObj$$344.FSubtract = false;
  var v7262 = parentObj$$344.registerA;
  var v3661 = v7262 & 4;
  parentObj$$344.FZero = v3661 == 0;
  return;
}
function v420(parentObj$$343) {
  parentObj$$343.FHalfCarry = true;
  parentObj$$343.FSubtract = false;
  var v9140 = parentObj$$343.memoryReader;
  var v9141 = parentObj$$343.registersHL;
  var v9142 = parentObj$$343.registersHL;
  var v7263 = v9140[v9141](parentObj$$343, v9142);
  var v3662 = v7263 & 4;
  parentObj$$343.FZero = v3662 == 0;
  return;
}
function v419(parentObj$$342) {
  parentObj$$342.FHalfCarry = true;
  parentObj$$342.FSubtract = false;
  var v7264 = parentObj$$342.registersHL;
  var v3663 = v7264 & 4;
  parentObj$$342.FZero = v3663 == 0;
  return;
}
function v418(parentObj$$341) {
  parentObj$$341.FHalfCarry = true;
  parentObj$$341.FSubtract = false;
  var v7265 = parentObj$$341.registersHL;
  var v3664 = v7265 & 1024;
  parentObj$$341.FZero = v3664 == 0;
  return;
}
function v417(parentObj$$340) {
  parentObj$$340.FHalfCarry = true;
  parentObj$$340.FSubtract = false;
  var v7266 = parentObj$$340.registerE;
  var v3665 = v7266 & 4;
  parentObj$$340.FZero = v3665 == 0;
  return;
}
function v416(parentObj$$339) {
  parentObj$$339.FHalfCarry = true;
  parentObj$$339.FSubtract = false;
  var v7267 = parentObj$$339.registerD;
  var v3666 = v7267 & 4;
  parentObj$$339.FZero = v3666 == 0;
  return;
}
function v415(parentObj$$338) {
  parentObj$$338.FHalfCarry = true;
  parentObj$$338.FSubtract = false;
  var v7268 = parentObj$$338.registerC;
  var v3667 = v7268 & 4;
  parentObj$$338.FZero = v3667 == 0;
  return;
}
function v414(parentObj$$337) {
  parentObj$$337.FHalfCarry = true;
  parentObj$$337.FSubtract = false;
  var v7269 = parentObj$$337.registerB;
  var v3668 = v7269 & 4;
  parentObj$$337.FZero = v3668 == 0;
  return;
}
function v413(parentObj$$336) {
  parentObj$$336.FHalfCarry = true;
  parentObj$$336.FSubtract = false;
  var v7270 = parentObj$$336.registerA;
  var v3669 = v7270 & 2;
  parentObj$$336.FZero = v3669 == 0;
  return;
}
function v412(parentObj$$335) {
  parentObj$$335.FHalfCarry = true;
  parentObj$$335.FSubtract = false;
  var v9143 = parentObj$$335.memoryReader;
  var v9144 = parentObj$$335.registersHL;
  var v9145 = parentObj$$335.registersHL;
  var v7271 = v9143[v9144](parentObj$$335, v9145);
  var v3670 = v7271 & 2;
  parentObj$$335.FZero = v3670 == 0;
  return;
}
function v411(parentObj$$334) {
  parentObj$$334.FHalfCarry = true;
  parentObj$$334.FSubtract = false;
  var v7272 = parentObj$$334.registersHL;
  var v3671 = v7272 & 2;
  parentObj$$334.FZero = v3671 == 0;
  return;
}
function v410(parentObj$$333) {
  parentObj$$333.FHalfCarry = true;
  parentObj$$333.FSubtract = false;
  var v7273 = parentObj$$333.registersHL;
  var v3672 = v7273 & 512;
  parentObj$$333.FZero = v3672 == 0;
  return;
}
function v409(parentObj$$332) {
  parentObj$$332.FHalfCarry = true;
  parentObj$$332.FSubtract = false;
  var v7274 = parentObj$$332.registerE;
  var v3673 = v7274 & 2;
  parentObj$$332.FZero = v3673 == 0;
  return;
}
function v408(parentObj$$331) {
  parentObj$$331.FHalfCarry = true;
  parentObj$$331.FSubtract = false;
  var v7275 = parentObj$$331.registerD;
  var v3674 = v7275 & 2;
  parentObj$$331.FZero = v3674 == 0;
  return;
}
function v407(parentObj$$330) {
  parentObj$$330.FHalfCarry = true;
  parentObj$$330.FSubtract = false;
  var v7276 = parentObj$$330.registerC;
  var v3675 = v7276 & 2;
  parentObj$$330.FZero = v3675 == 0;
  return;
}
function v406(parentObj$$329) {
  parentObj$$329.FHalfCarry = true;
  parentObj$$329.FSubtract = false;
  var v7277 = parentObj$$329.registerB;
  var v3676 = v7277 & 2;
  parentObj$$329.FZero = v3676 == 0;
  return;
}
function v405(parentObj$$328) {
  parentObj$$328.FHalfCarry = true;
  parentObj$$328.FSubtract = false;
  var v7278 = parentObj$$328.registerA;
  var v3677 = v7278 & 1;
  parentObj$$328.FZero = v3677 == 0;
  return;
}
function v404(parentObj$$327) {
  parentObj$$327.FHalfCarry = true;
  parentObj$$327.FSubtract = false;
  var v9146 = parentObj$$327.memoryReader;
  var v9147 = parentObj$$327.registersHL;
  var v9148 = parentObj$$327.registersHL;
  var v7279 = v9146[v9147](parentObj$$327, v9148);
  var v3678 = v7279 & 1;
  parentObj$$327.FZero = v3678 == 0;
  return;
}
function v403(parentObj$$326) {
  parentObj$$326.FHalfCarry = true;
  parentObj$$326.FSubtract = false;
  var v7280 = parentObj$$326.registersHL;
  var v3679 = v7280 & 1;
  parentObj$$326.FZero = v3679 == 0;
  return;
}
function v402(parentObj$$325) {
  parentObj$$325.FHalfCarry = true;
  parentObj$$325.FSubtract = false;
  var v7281 = parentObj$$325.registersHL;
  var v3680 = v7281 & 256;
  parentObj$$325.FZero = v3680 == 0;
  return;
}
function v401(parentObj$$324) {
  parentObj$$324.FHalfCarry = true;
  parentObj$$324.FSubtract = false;
  var v7282 = parentObj$$324.registerE;
  var v3681 = v7282 & 1;
  parentObj$$324.FZero = v3681 == 0;
  return;
}
function v400(parentObj$$323) {
  parentObj$$323.FHalfCarry = true;
  parentObj$$323.FSubtract = false;
  var v7283 = parentObj$$323.registerD;
  var v3682 = v7283 & 1;
  parentObj$$323.FZero = v3682 == 0;
  return;
}
function v399(parentObj$$322) {
  parentObj$$322.FHalfCarry = true;
  parentObj$$322.FSubtract = false;
  var v7284 = parentObj$$322.registerC;
  var v3683 = v7284 & 1;
  parentObj$$322.FZero = v3683 == 0;
  return;
}
function v398(parentObj$$321) {
  parentObj$$321.FHalfCarry = true;
  parentObj$$321.FSubtract = false;
  var v7285 = parentObj$$321.registerB;
  var v3684 = v7285 & 1;
  parentObj$$321.FZero = v3684 == 0;
  return;
}
function v397(parentObj$$320) {
  var v7286 = parentObj$$320.registerA;
  var v3685 = v7286 & 1;
  parentObj$$320.FCarry = v3685 == 1;
  var v7287 = parentObj$$320.registerA;
  parentObj$$320.registerA = v7287 >> 1;
  parentObj$$320.FHalfCarry = parentObj$$320.FSubtract = false;
  var v3686 = parentObj$$320.registerA;
  parentObj$$320.FZero = v3686 == 0;
  return;
}
function v396(parentObj$$319) {
  var v3687 = parentObj$$319.memoryReader;
  var v3688 = parentObj$$319.registersHL;
  var v3689 = parentObj$$319.registersHL;
  var temp_var$$19 = v3687[v3688](parentObj$$319, v3689);
  var v3690 = temp_var$$19 & 1;
  parentObj$$319.FCarry = v3690 == 1;
  var v3691 = parentObj$$319.memoryWriter;
  var v3692 = parentObj$$319.registersHL;
  var v3693 = parentObj$$319.registersHL;
  var v3694 = temp_var$$19 >> 1;
  v3691[v3692](parentObj$$319, v3693, v3694);
  parentObj$$319.FHalfCarry = parentObj$$319.FSubtract = false;
  parentObj$$319.FZero = temp_var$$19 < 2;
  return;
}
function v395(parentObj$$318) {
  var v7288 = parentObj$$318.registersHL;
  var v3695 = v7288 & 1;
  parentObj$$318.FCarry = v3695 == 1;
  var v7289 = parentObj$$318.registersHL;
  var v3696 = v7289 & 65280;
  var v9149 = parentObj$$318.registersHL;
  var v7290 = v9149 & 255;
  var v3697 = v7290 >> 1;
  parentObj$$318.registersHL = v3696 | v3697;
  parentObj$$318.FHalfCarry = parentObj$$318.FSubtract = false;
  var v7291 = parentObj$$318.registersHL;
  var v3698 = v7291 & 255;
  parentObj$$318.FZero = v3698 == 0;
  return;
}
function v394(parentObj$$317) {
  var v7292 = parentObj$$317.registersHL;
  var v3699 = v7292 & 256;
  parentObj$$317.FCarry = v3699 == 256;
  var v9150 = parentObj$$317.registersHL;
  var v7293 = v9150 >> 1;
  var v3700 = v7293 & 65280;
  var v7294 = parentObj$$317.registersHL;
  var v3701 = v7294 & 255;
  parentObj$$317.registersHL = v3700 | v3701;
  parentObj$$317.FHalfCarry = parentObj$$317.FSubtract = false;
  var v3702 = parentObj$$317.registersHL;
  parentObj$$317.FZero = v3702 < 256;
  return;
}
function v393(parentObj$$316) {
  var v7295 = parentObj$$316.registerE;
  var v3703 = v7295 & 1;
  parentObj$$316.FCarry = v3703 == 1;
  var v7296 = parentObj$$316.registerE;
  parentObj$$316.registerE = v7296 >> 1;
  parentObj$$316.FHalfCarry = parentObj$$316.FSubtract = false;
  var v3704 = parentObj$$316.registerE;
  parentObj$$316.FZero = v3704 == 0;
  return;
}
function v392(parentObj$$315) {
  var v7297 = parentObj$$315.registerD;
  var v3705 = v7297 & 1;
  parentObj$$315.FCarry = v3705 == 1;
  var v7298 = parentObj$$315.registerD;
  parentObj$$315.registerD = v7298 >> 1;
  parentObj$$315.FHalfCarry = parentObj$$315.FSubtract = false;
  var v3706 = parentObj$$315.registerD;
  parentObj$$315.FZero = v3706 == 0;
  return;
}
function v391(parentObj$$314) {
  var v7299 = parentObj$$314.registerC;
  var v3707 = v7299 & 1;
  parentObj$$314.FCarry = v3707 == 1;
  var v7300 = parentObj$$314.registerC;
  parentObj$$314.registerC = v7300 >> 1;
  parentObj$$314.FHalfCarry = parentObj$$314.FSubtract = false;
  var v3708 = parentObj$$314.registerC;
  parentObj$$314.FZero = v3708 == 0;
  return;
}
function v390(parentObj$$313) {
  var v7301 = parentObj$$313.registerB;
  var v3709 = v7301 & 1;
  parentObj$$313.FCarry = v3709 == 1;
  var v7302 = parentObj$$313.registerB;
  parentObj$$313.registerB = v7302 >> 1;
  parentObj$$313.FHalfCarry = parentObj$$313.FSubtract = false;
  var v3710 = parentObj$$313.registerB;
  parentObj$$313.FZero = v3710 == 0;
  return;
}
function v389(parentObj$$312) {
  var v9151 = parentObj$$312.registerA;
  var v7303 = v9151 & 15;
  var v3711 = v7303 << 4;
  var v7304 = parentObj$$312.registerA;
  var v3712 = v7304 >> 4;
  parentObj$$312.registerA = v3711 | v3712;
  var v3713 = parentObj$$312.registerA;
  parentObj$$312.FZero = v3713 == 0;
  parentObj$$312.FCarry = parentObj$$312.FHalfCarry = parentObj$$312.FSubtract = false;
  return;
}
function v388(parentObj$$311) {
  var v3714 = parentObj$$311.memoryReader;
  var v3715 = parentObj$$311.registersHL;
  var v3716 = parentObj$$311.registersHL;
  var temp_var$$18 = v3714[v3715](parentObj$$311, v3716);
  var v7305 = temp_var$$18 & 15;
  var v3717 = v7305 << 4;
  var v3718 = temp_var$$18 >> 4;
  temp_var$$18 = v3717 | v3718;
  var v3719 = parentObj$$311.memoryWriter;
  var v3720 = parentObj$$311.registersHL;
  var v3721 = parentObj$$311.registersHL;
  v3719[v3720](parentObj$$311, v3721, temp_var$$18);
  parentObj$$311.FZero = temp_var$$18 == 0;
  parentObj$$311.FCarry = parentObj$$311.FHalfCarry = parentObj$$311.FSubtract = false;
  return;
}
function v387(parentObj$$310) {
  var v9152 = parentObj$$310.registersHL;
  var v7306 = v9152 & 65280;
  var v9997 = parentObj$$310.registersHL;
  var v9153 = v9997 & 15;
  var v7307 = v9153 << 4;
  var v3722 = v7306 | v7307;
  var v9154 = parentObj$$310.registersHL;
  var v7308 = v9154 & 240;
  var v3723 = v7308 >> 4;
  parentObj$$310.registersHL = v3722 | v3723;
  var v7309 = parentObj$$310.registersHL;
  var v3724 = v7309 & 255;
  parentObj$$310.FZero = v3724 == 0;
  parentObj$$310.FCarry = parentObj$$310.FHalfCarry = parentObj$$310.FSubtract = false;
  return;
}
function v386(parentObj$$309) {
  var v9998 = parentObj$$309.registersHL;
  var v9155 = v9998 & 3840;
  var v7310 = v9155 << 4;
  var v9999 = parentObj$$309.registersHL;
  var v9156 = v9999 & 61440;
  var v7311 = v9156 >> 4;
  var v3725 = v7310 | v7311;
  var v7312 = parentObj$$309.registersHL;
  var v3726 = v7312 & 255;
  parentObj$$309.registersHL = v3725 | v3726;
  var v3727 = parentObj$$309.registersHL;
  parentObj$$309.FZero = v3727 < 256;
  parentObj$$309.FCarry = parentObj$$309.FHalfCarry = parentObj$$309.FSubtract = false;
  return;
}
function v385(parentObj$$308) {
  var v9157 = parentObj$$308.registerE;
  var v7313 = v9157 & 15;
  var v3728 = v7313 << 4;
  var v7314 = parentObj$$308.registerE;
  var v3729 = v7314 >> 4;
  parentObj$$308.registerE = v3728 | v3729;
  var v3730 = parentObj$$308.registerE;
  parentObj$$308.FZero = v3730 == 0;
  parentObj$$308.FCarry = parentObj$$308.FHalfCarry = parentObj$$308.FSubtract = false;
  return;
}
function v384(parentObj$$307) {
  var v9158 = parentObj$$307.registerD;
  var v7315 = v9158 & 15;
  var v3731 = v7315 << 4;
  var v7316 = parentObj$$307.registerD;
  var v3732 = v7316 >> 4;
  parentObj$$307.registerD = v3731 | v3732;
  var v3733 = parentObj$$307.registerD;
  parentObj$$307.FZero = v3733 == 0;
  parentObj$$307.FCarry = parentObj$$307.FHalfCarry = parentObj$$307.FSubtract = false;
  return;
}
function v383(parentObj$$306) {
  var v9159 = parentObj$$306.registerC;
  var v7317 = v9159 & 15;
  var v3734 = v7317 << 4;
  var v7318 = parentObj$$306.registerC;
  var v3735 = v7318 >> 4;
  parentObj$$306.registerC = v3734 | v3735;
  var v3736 = parentObj$$306.registerC;
  parentObj$$306.FZero = v3736 == 0;
  parentObj$$306.FCarry = parentObj$$306.FHalfCarry = parentObj$$306.FSubtract = false;
  return;
}
function v382(parentObj$$305) {
  var v9160 = parentObj$$305.registerB;
  var v7319 = v9160 & 15;
  var v3737 = v7319 << 4;
  var v7320 = parentObj$$305.registerB;
  var v3738 = v7320 >> 4;
  parentObj$$305.registerB = v3737 | v3738;
  var v3739 = parentObj$$305.registerB;
  parentObj$$305.FZero = v3739 == 0;
  parentObj$$305.FCarry = parentObj$$305.FHalfCarry = parentObj$$305.FSubtract = false;
  return;
}
function v381(parentObj$$304) {
  var v7321 = parentObj$$304.registerA;
  var v3740 = v7321 & 1;
  parentObj$$304.FCarry = v3740 == 1;
  var v7322 = parentObj$$304.registerA;
  var v3741 = v7322 & 128;
  var v7323 = parentObj$$304.registerA;
  var v3742 = v7323 >> 1;
  parentObj$$304.registerA = v3741 | v3742;
  parentObj$$304.FHalfCarry = parentObj$$304.FSubtract = false;
  var v3743 = parentObj$$304.registerA;
  parentObj$$304.FZero = v3743 == 0;
  return;
}
function v380(parentObj$$303) {
  var v3744 = parentObj$$303.memoryReader;
  var v3745 = parentObj$$303.registersHL;
  var v3746 = parentObj$$303.registersHL;
  var temp_var$$17 = v3744[v3745](parentObj$$303, v3746);
  var v3747 = temp_var$$17 & 1;
  parentObj$$303.FCarry = v3747 == 1;
  var v3748 = temp_var$$17 & 128;
  var v3749 = temp_var$$17 >> 1;
  temp_var$$17 = v3748 | v3749;
  var v3750 = parentObj$$303.memoryWriter;
  var v3751 = parentObj$$303.registersHL;
  var v3752 = parentObj$$303.registersHL;
  v3750[v3751](parentObj$$303, v3752, temp_var$$17);
  parentObj$$303.FHalfCarry = parentObj$$303.FSubtract = false;
  parentObj$$303.FZero = temp_var$$17 == 0;
  return;
}
function v379(parentObj$$302) {
  var v7324 = parentObj$$302.registersHL;
  var v3753 = v7324 & 1;
  parentObj$$302.FCarry = v3753 == 1;
  var v7325 = parentObj$$302.registersHL;
  var v3754 = v7325 & 65408;
  var v9161 = parentObj$$302.registersHL;
  var v7326 = v9161 & 255;
  var v3755 = v7326 >> 1;
  parentObj$$302.registersHL = v3754 | v3755;
  parentObj$$302.FHalfCarry = parentObj$$302.FSubtract = false;
  var v7327 = parentObj$$302.registersHL;
  var v3756 = v7327 & 255;
  parentObj$$302.FZero = v3756 == 0;
  return;
}
function v378(parentObj$$301) {
  var v7328 = parentObj$$301.registersHL;
  var v3757 = v7328 & 256;
  parentObj$$301.FCarry = v3757 == 256;
  var v9162 = parentObj$$301.registersHL;
  var v7329 = v9162 >> 1;
  var v3758 = v7329 & 65280;
  var v7330 = parentObj$$301.registersHL;
  var v3759 = v7330 & 33023;
  parentObj$$301.registersHL = v3758 | v3759;
  parentObj$$301.FHalfCarry = parentObj$$301.FSubtract = false;
  var v3760 = parentObj$$301.registersHL;
  parentObj$$301.FZero = v3760 < 256;
  return;
}
function v377(parentObj$$300) {
  var v7331 = parentObj$$300.registerE;
  var v3761 = v7331 & 1;
  parentObj$$300.FCarry = v3761 == 1;
  var v7332 = parentObj$$300.registerE;
  var v3762 = v7332 & 128;
  var v7333 = parentObj$$300.registerE;
  var v3763 = v7333 >> 1;
  parentObj$$300.registerE = v3762 | v3763;
  parentObj$$300.FHalfCarry = parentObj$$300.FSubtract = false;
  var v3764 = parentObj$$300.registerE;
  parentObj$$300.FZero = v3764 == 0;
  return;
}
function v376(parentObj$$299) {
  var v7334 = parentObj$$299.registerD;
  var v3765 = v7334 & 1;
  parentObj$$299.FCarry = v3765 == 1;
  var v7335 = parentObj$$299.registerD;
  var v3766 = v7335 & 128;
  var v7336 = parentObj$$299.registerD;
  var v3767 = v7336 >> 1;
  parentObj$$299.registerD = v3766 | v3767;
  parentObj$$299.FHalfCarry = parentObj$$299.FSubtract = false;
  var v3768 = parentObj$$299.registerD;
  parentObj$$299.FZero = v3768 == 0;
  return;
}
function v375(parentObj$$298) {
  var v7337 = parentObj$$298.registerC;
  var v3769 = v7337 & 1;
  parentObj$$298.FCarry = v3769 == 1;
  var v7338 = parentObj$$298.registerC;
  var v3770 = v7338 & 128;
  var v7339 = parentObj$$298.registerC;
  var v3771 = v7339 >> 1;
  parentObj$$298.registerC = v3770 | v3771;
  parentObj$$298.FHalfCarry = parentObj$$298.FSubtract = false;
  var v3772 = parentObj$$298.registerC;
  parentObj$$298.FZero = v3772 == 0;
  return;
}
function v374(parentObj$$297) {
  var v7340 = parentObj$$297.registerB;
  var v3773 = v7340 & 1;
  parentObj$$297.FCarry = v3773 == 1;
  var v7341 = parentObj$$297.registerB;
  var v3774 = v7341 & 128;
  var v7342 = parentObj$$297.registerB;
  var v3775 = v7342 >> 1;
  parentObj$$297.registerB = v3774 | v3775;
  parentObj$$297.FHalfCarry = parentObj$$297.FSubtract = false;
  var v3776 = parentObj$$297.registerB;
  parentObj$$297.FZero = v3776 == 0;
  return;
}
function v373(parentObj$$296) {
  var v3777 = parentObj$$296.registerA;
  parentObj$$296.FCarry = v3777 > 127;
  var v7343 = parentObj$$296.registerA;
  var v3778 = v7343 << 1;
  parentObj$$296.registerA = v3778 & 255;
  parentObj$$296.FHalfCarry = parentObj$$296.FSubtract = false;
  var v3779 = parentObj$$296.registerA;
  parentObj$$296.FZero = v3779 == 0;
  return;
}
function v372(parentObj$$295) {
  var v3780 = parentObj$$295.memoryReader;
  var v3781 = parentObj$$295.registersHL;
  var v3782 = parentObj$$295.registersHL;
  var temp_var$$16 = v3780[v3781](parentObj$$295, v3782);
  parentObj$$295.FCarry = temp_var$$16 > 127;
  var v3783 = temp_var$$16 << 1;
  temp_var$$16 = v3783 & 255;
  var v3784 = parentObj$$295.memoryWriter;
  var v3785 = parentObj$$295.registersHL;
  var v3786 = parentObj$$295.registersHL;
  v3784[v3785](parentObj$$295, v3786, temp_var$$16);
  parentObj$$295.FHalfCarry = parentObj$$295.FSubtract = false;
  parentObj$$295.FZero = temp_var$$16 == 0;
  return;
}
function v371(parentObj$$294) {
  var v7344 = parentObj$$294.registersHL;
  var v3787 = v7344 & 128;
  parentObj$$294.FCarry = v3787 == 128;
  var v7345 = parentObj$$294.registersHL;
  var v3788 = v7345 & 65280;
  var v9163 = parentObj$$294.registersHL;
  var v7346 = v9163 << 1;
  var v3789 = v7346 & 255;
  parentObj$$294.registersHL = v3788 | v3789;
  parentObj$$294.FHalfCarry = parentObj$$294.FSubtract = false;
  var v7347 = parentObj$$294.registersHL;
  var v3790 = v7347 & 255;
  parentObj$$294.FZero = v3790 == 0;
  return;
}
function v370(parentObj$$293) {
  var v3791 = parentObj$$293.registersHL;
  parentObj$$293.FCarry = v3791 > 32767;
  var v9164 = parentObj$$293.registersHL;
  var v7348 = v9164 << 1;
  var v3792 = v7348 & 65024;
  var v7349 = parentObj$$293.registersHL;
  var v3793 = v7349 & 255;
  parentObj$$293.registersHL = v3792 | v3793;
  parentObj$$293.FHalfCarry = parentObj$$293.FSubtract = false;
  var v3794 = parentObj$$293.registersHL;
  parentObj$$293.FZero = v3794 < 256;
  return;
}
function v369(parentObj$$292) {
  var v3795 = parentObj$$292.registerE;
  parentObj$$292.FCarry = v3795 > 127;
  var v7350 = parentObj$$292.registerE;
  var v3796 = v7350 << 1;
  parentObj$$292.registerE = v3796 & 255;
  parentObj$$292.FHalfCarry = parentObj$$292.FSubtract = false;
  var v3797 = parentObj$$292.registerE;
  parentObj$$292.FZero = v3797 == 0;
  return;
}
function v368(parentObj$$291) {
  var v3798 = parentObj$$291.registerD;
  parentObj$$291.FCarry = v3798 > 127;
  var v7351 = parentObj$$291.registerD;
  var v3799 = v7351 << 1;
  parentObj$$291.registerD = v3799 & 255;
  parentObj$$291.FHalfCarry = parentObj$$291.FSubtract = false;
  var v3800 = parentObj$$291.registerD;
  parentObj$$291.FZero = v3800 == 0;
  return;
}
function v367(parentObj$$290) {
  var v3801 = parentObj$$290.registerC;
  parentObj$$290.FCarry = v3801 > 127;
  var v7352 = parentObj$$290.registerC;
  var v3802 = v7352 << 1;
  parentObj$$290.registerC = v3802 & 255;
  parentObj$$290.FHalfCarry = parentObj$$290.FSubtract = false;
  var v3803 = parentObj$$290.registerC;
  parentObj$$290.FZero = v3803 == 0;
  return;
}
function v366(parentObj$$289) {
  var v3804 = parentObj$$289.registerB;
  parentObj$$289.FCarry = v3804 > 127;
  var v7353 = parentObj$$289.registerB;
  var v3805 = v7353 << 1;
  parentObj$$289.registerB = v3805 & 255;
  parentObj$$289.FHalfCarry = parentObj$$289.FSubtract = false;
  var v3806 = parentObj$$289.registerB;
  parentObj$$289.FZero = v3806 == 0;
  return;
}
function v365(parentObj$$288) {
  var v7354 = parentObj$$288.registerA;
  var v3807 = v7354 & 1;
  var newFCarry$$15 = v3807 == 1;
  var v7355;
  var v9165 = parentObj$$288.FCarry;
  if (v9165) {
    v7355 = 128;
  } else {
    v7355 = 0;
  }
  var v3808 = v7355;
  var v7356 = parentObj$$288.registerA;
  var v3809 = v7356 >> 1;
  parentObj$$288.registerA = v3808 | v3809;
  parentObj$$288.FCarry = newFCarry$$15;
  parentObj$$288.FHalfCarry = parentObj$$288.FSubtract = false;
  var v3810 = parentObj$$288.registerA;
  parentObj$$288.FZero = v3810 == 0;
  return;
}
function v364(parentObj$$287) {
  var v3811 = parentObj$$287.memoryReader;
  var v3812 = parentObj$$287.registersHL;
  var v3813 = parentObj$$287.registersHL;
  var temp_var$$15 = v3811[v3812](parentObj$$287, v3813);
  var v3814 = temp_var$$15 & 1;
  var newFCarry$$14 = v3814 == 1;
  var v7357;
  var v9166 = parentObj$$287.FCarry;
  if (v9166) {
    v7357 = 128;
  } else {
    v7357 = 0;
  }
  var v3815 = v7357;
  var v3816 = temp_var$$15 >> 1;
  temp_var$$15 = v3815 | v3816;
  parentObj$$287.FCarry = newFCarry$$14;
  var v3817 = parentObj$$287.memoryWriter;
  var v3818 = parentObj$$287.registersHL;
  var v3819 = parentObj$$287.registersHL;
  v3817[v3818](parentObj$$287, v3819, temp_var$$15);
  parentObj$$287.FHalfCarry = parentObj$$287.FSubtract = false;
  parentObj$$287.FZero = temp_var$$15 == 0;
  return;
}
function v363(parentObj$$286) {
  var v7358 = parentObj$$286.registersHL;
  var v3820 = v7358 & 1;
  var newFCarry$$13 = v3820 == 1;
  var v9167 = parentObj$$286.registersHL;
  var v7359 = v9167 & 65280;
  var v9168;
  var v10000 = parentObj$$286.FCarry;
  if (v10000) {
    v9168 = 128;
  } else {
    v9168 = 0;
  }
  var v7360 = v9168;
  var v3821 = v7359 | v7360;
  var v9169 = parentObj$$286.registersHL;
  var v7361 = v9169 & 255;
  var v3822 = v7361 >> 1;
  parentObj$$286.registersHL = v3821 | v3822;
  parentObj$$286.FCarry = newFCarry$$13;
  parentObj$$286.FHalfCarry = parentObj$$286.FSubtract = false;
  var v7362 = parentObj$$286.registersHL;
  var v3823 = v7362 & 255;
  parentObj$$286.FZero = v3823 == 0;
  return;
}
function v362(parentObj$$285) {
  var v7363 = parentObj$$285.registersHL;
  var v3824 = v7363 & 256;
  var newFCarry$$12 = v3824 == 256;
  var v9170;
  var v10001 = parentObj$$285.FCarry;
  if (v10001) {
    v9170 = 32768;
  } else {
    v9170 = 0;
  }
  var v7364 = v9170;
  var v10002 = parentObj$$285.registersHL;
  var v9171 = v10002 >> 1;
  var v7365 = v9171 & 65280;
  var v3825 = v7364 | v7365;
  var v7366 = parentObj$$285.registersHL;
  var v3826 = v7366 & 255;
  parentObj$$285.registersHL = v3825 | v3826;
  parentObj$$285.FCarry = newFCarry$$12;
  parentObj$$285.FHalfCarry = parentObj$$285.FSubtract = false;
  var v3827 = parentObj$$285.registersHL;
  parentObj$$285.FZero = v3827 < 256;
  return;
}
function v361(parentObj$$284) {
  var v7367 = parentObj$$284.registerE;
  var v3828 = v7367 & 1;
  var newFCarry$$11 = v3828 == 1;
  var v7368;
  var v9172 = parentObj$$284.FCarry;
  if (v9172) {
    v7368 = 128;
  } else {
    v7368 = 0;
  }
  var v3829 = v7368;
  var v7369 = parentObj$$284.registerE;
  var v3830 = v7369 >> 1;
  parentObj$$284.registerE = v3829 | v3830;
  parentObj$$284.FCarry = newFCarry$$11;
  parentObj$$284.FHalfCarry = parentObj$$284.FSubtract = false;
  var v3831 = parentObj$$284.registerE;
  parentObj$$284.FZero = v3831 == 0;
  return;
}
function v360(parentObj$$283) {
  var v7370 = parentObj$$283.registerD;
  var v3832 = v7370 & 1;
  var newFCarry$$10 = v3832 == 1;
  var v7371;
  var v9173 = parentObj$$283.FCarry;
  if (v9173) {
    v7371 = 128;
  } else {
    v7371 = 0;
  }
  var v3833 = v7371;
  var v7372 = parentObj$$283.registerD;
  var v3834 = v7372 >> 1;
  parentObj$$283.registerD = v3833 | v3834;
  parentObj$$283.FCarry = newFCarry$$10;
  parentObj$$283.FHalfCarry = parentObj$$283.FSubtract = false;
  var v3835 = parentObj$$283.registerD;
  parentObj$$283.FZero = v3835 == 0;
  return;
}
function v359(parentObj$$282) {
  var v7373 = parentObj$$282.registerC;
  var v3836 = v7373 & 1;
  var newFCarry$$9 = v3836 == 1;
  var v7374;
  var v9174 = parentObj$$282.FCarry;
  if (v9174) {
    v7374 = 128;
  } else {
    v7374 = 0;
  }
  var v3837 = v7374;
  var v7375 = parentObj$$282.registerC;
  var v3838 = v7375 >> 1;
  parentObj$$282.registerC = v3837 | v3838;
  parentObj$$282.FCarry = newFCarry$$9;
  parentObj$$282.FHalfCarry = parentObj$$282.FSubtract = false;
  var v3839 = parentObj$$282.registerC;
  parentObj$$282.FZero = v3839 == 0;
  return;
}
function v358(parentObj$$281) {
  var v7376 = parentObj$$281.registerB;
  var v3840 = v7376 & 1;
  var newFCarry$$8 = v3840 == 1;
  var v7377;
  var v9175 = parentObj$$281.FCarry;
  if (v9175) {
    v7377 = 128;
  } else {
    v7377 = 0;
  }
  var v3841 = v7377;
  var v7378 = parentObj$$281.registerB;
  var v3842 = v7378 >> 1;
  parentObj$$281.registerB = v3841 | v3842;
  parentObj$$281.FCarry = newFCarry$$8;
  parentObj$$281.FHalfCarry = parentObj$$281.FSubtract = false;
  var v3843 = parentObj$$281.registerB;
  parentObj$$281.FZero = v3843 == 0;
  return;
}
function v357(parentObj$$280) {
  var v3844 = parentObj$$280.registerA;
  var newFCarry$$7 = v3844 > 127;
  var v9176 = parentObj$$280.registerA;
  var v7379 = v9176 << 1;
  var v3845 = v7379 & 255;
  var v7380;
  var v9177 = parentObj$$280.FCarry;
  if (v9177) {
    v7380 = 1;
  } else {
    v7380 = 0;
  }
  var v3846 = v7380;
  parentObj$$280.registerA = v3845 | v3846;
  parentObj$$280.FCarry = newFCarry$$7;
  parentObj$$280.FHalfCarry = parentObj$$280.FSubtract = false;
  var v3847 = parentObj$$280.registerA;
  parentObj$$280.FZero = v3847 == 0;
  return;
}
function v356(parentObj$$279) {
  var v3848 = parentObj$$279.memoryReader;
  var v3849 = parentObj$$279.registersHL;
  var v3850 = parentObj$$279.registersHL;
  var temp_var$$14 = v3848[v3849](parentObj$$279, v3850);
  var newFCarry$$6 = temp_var$$14 > 127;
  var v7381 = temp_var$$14 << 1;
  var v3851 = v7381 & 255;
  var v7382;
  var v9178 = parentObj$$279.FCarry;
  if (v9178) {
    v7382 = 1;
  } else {
    v7382 = 0;
  }
  var v3852 = v7382;
  temp_var$$14 = v3851 | v3852;
  parentObj$$279.FCarry = newFCarry$$6;
  var v3853 = parentObj$$279.memoryWriter;
  var v3854 = parentObj$$279.registersHL;
  var v3855 = parentObj$$279.registersHL;
  v3853[v3854](parentObj$$279, v3855, temp_var$$14);
  parentObj$$279.FHalfCarry = parentObj$$279.FSubtract = false;
  parentObj$$279.FZero = temp_var$$14 == 0;
  return;
}
function v355(parentObj$$278) {
  var v7383 = parentObj$$278.registersHL;
  var v3856 = v7383 & 128;
  var newFCarry$$5 = v3856 == 128;
  var v9179 = parentObj$$278.registersHL;
  var v7384 = v9179 & 65280;
  var v10003 = parentObj$$278.registersHL;
  var v9180 = v10003 << 1;
  var v7385 = v9180 & 255;
  var v3857 = v7384 | v7385;
  var v7386;
  var v9181 = parentObj$$278.FCarry;
  if (v9181) {
    v7386 = 1;
  } else {
    v7386 = 0;
  }
  var v3858 = v7386;
  parentObj$$278.registersHL = v3857 | v3858;
  parentObj$$278.FCarry = newFCarry$$5;
  parentObj$$278.FHalfCarry = parentObj$$278.FSubtract = false;
  var v7387 = parentObj$$278.registersHL;
  var v3859 = v7387 & 255;
  parentObj$$278.FZero = v3859 == 0;
  return;
}
function v354(parentObj$$277) {
  var v3860 = parentObj$$277.registersHL;
  var newFCarry$$4 = v3860 > 32767;
  var v10004 = parentObj$$277.registersHL;
  var v9182 = v10004 << 1;
  var v7388 = v9182 & 65024;
  var v9183;
  var v10005 = parentObj$$277.FCarry;
  if (v10005) {
    v9183 = 256;
  } else {
    v9183 = 0;
  }
  var v7389 = v9183;
  var v3861 = v7388 | v7389;
  var v7390 = parentObj$$277.registersHL;
  var v3862 = v7390 & 255;
  parentObj$$277.registersHL = v3861 | v3862;
  parentObj$$277.FCarry = newFCarry$$4;
  parentObj$$277.FHalfCarry = parentObj$$277.FSubtract = false;
  var v3863 = parentObj$$277.registersHL;
  parentObj$$277.FZero = v3863 < 256;
  return;
}
function v353(parentObj$$276) {
  var v3864 = parentObj$$276.registerE;
  var newFCarry$$3 = v3864 > 127;
  var v9184 = parentObj$$276.registerE;
  var v7391 = v9184 << 1;
  var v3865 = v7391 & 255;
  var v7392;
  var v9185 = parentObj$$276.FCarry;
  if (v9185) {
    v7392 = 1;
  } else {
    v7392 = 0;
  }
  var v3866 = v7392;
  parentObj$$276.registerE = v3865 | v3866;
  parentObj$$276.FCarry = newFCarry$$3;
  parentObj$$276.FHalfCarry = parentObj$$276.FSubtract = false;
  var v3867 = parentObj$$276.registerE;
  parentObj$$276.FZero = v3867 == 0;
  return;
}
function v352(parentObj$$275) {
  var v3868 = parentObj$$275.registerD;
  var newFCarry$$2 = v3868 > 127;
  var v9186 = parentObj$$275.registerD;
  var v7393 = v9186 << 1;
  var v3869 = v7393 & 255;
  var v7394;
  var v9187 = parentObj$$275.FCarry;
  if (v9187) {
    v7394 = 1;
  } else {
    v7394 = 0;
  }
  var v3870 = v7394;
  parentObj$$275.registerD = v3869 | v3870;
  parentObj$$275.FCarry = newFCarry$$2;
  parentObj$$275.FHalfCarry = parentObj$$275.FSubtract = false;
  var v3871 = parentObj$$275.registerD;
  parentObj$$275.FZero = v3871 == 0;
  return;
}
function v351(parentObj$$274) {
  var v3872 = parentObj$$274.registerC;
  var newFCarry$$1 = v3872 > 127;
  var v9188 = parentObj$$274.registerC;
  var v7395 = v9188 << 1;
  var v3873 = v7395 & 255;
  var v7396;
  var v9189 = parentObj$$274.FCarry;
  if (v9189) {
    v7396 = 1;
  } else {
    v7396 = 0;
  }
  var v3874 = v7396;
  parentObj$$274.registerC = v3873 | v3874;
  parentObj$$274.FCarry = newFCarry$$1;
  parentObj$$274.FHalfCarry = parentObj$$274.FSubtract = false;
  var v3875 = parentObj$$274.registerC;
  parentObj$$274.FZero = v3875 == 0;
  return;
}
function v350(parentObj$$273) {
  var v3876 = parentObj$$273.registerB;
  var newFCarry = v3876 > 127;
  var v9190 = parentObj$$273.registerB;
  var v7397 = v9190 << 1;
  var v3877 = v7397 & 255;
  var v7398;
  var v9191 = parentObj$$273.FCarry;
  if (v9191) {
    v7398 = 1;
  } else {
    v7398 = 0;
  }
  var v3878 = v7398;
  parentObj$$273.registerB = v3877 | v3878;
  parentObj$$273.FCarry = newFCarry;
  parentObj$$273.FHalfCarry = parentObj$$273.FSubtract = false;
  var v3879 = parentObj$$273.registerB;
  parentObj$$273.FZero = v3879 == 0;
  return;
}
function v349(parentObj$$272) {
  var v7399 = parentObj$$272.registerA;
  var v3880 = v7399 & 1;
  parentObj$$272.FCarry = v3880 == 1;
  var v7400;
  var v9192 = parentObj$$272.FCarry;
  if (v9192) {
    v7400 = 128;
  } else {
    v7400 = 0;
  }
  var v3881 = v7400;
  var v7401 = parentObj$$272.registerA;
  var v3882 = v7401 >> 1;
  parentObj$$272.registerA = v3881 | v3882;
  parentObj$$272.FHalfCarry = parentObj$$272.FSubtract = false;
  var v3883 = parentObj$$272.registerA;
  parentObj$$272.FZero = v3883 == 0;
  return;
}
function v348(parentObj$$271) {
  var v3884 = parentObj$$271.memoryReader;
  var v3885 = parentObj$$271.registersHL;
  var v3886 = parentObj$$271.registersHL;
  var temp_var$$13 = v3884[v3885](parentObj$$271, v3886);
  var v3887 = temp_var$$13 & 1;
  parentObj$$271.FCarry = v3887 == 1;
  var v7402;
  var v9193 = parentObj$$271.FCarry;
  if (v9193) {
    v7402 = 128;
  } else {
    v7402 = 0;
  }
  var v3888 = v7402;
  var v3889 = temp_var$$13 >> 1;
  temp_var$$13 = v3888 | v3889;
  var v3890 = parentObj$$271.memoryWriter;
  var v3891 = parentObj$$271.registersHL;
  var v3892 = parentObj$$271.registersHL;
  v3890[v3891](parentObj$$271, v3892, temp_var$$13);
  parentObj$$271.FHalfCarry = parentObj$$271.FSubtract = false;
  parentObj$$271.FZero = temp_var$$13 == 0;
  return;
}
function v347(parentObj$$270) {
  var v7403 = parentObj$$270.registersHL;
  var v3893 = v7403 & 1;
  parentObj$$270.FCarry = v3893 == 1;
  var v9194 = parentObj$$270.registersHL;
  var v7404 = v9194 & 65280;
  var v9195;
  var v10006 = parentObj$$270.FCarry;
  if (v10006) {
    v9195 = 128;
  } else {
    v9195 = 0;
  }
  var v7405 = v9195;
  var v3894 = v7404 | v7405;
  var v9196 = parentObj$$270.registersHL;
  var v7406 = v9196 & 255;
  var v3895 = v7406 >> 1;
  parentObj$$270.registersHL = v3894 | v3895;
  parentObj$$270.FHalfCarry = parentObj$$270.FSubtract = false;
  var v7407 = parentObj$$270.registersHL;
  var v3896 = v7407 & 255;
  parentObj$$270.FZero = v3896 == 0;
  return;
}
function v346(parentObj$$269) {
  var v7408 = parentObj$$269.registersHL;
  var v3897 = v7408 & 256;
  parentObj$$269.FCarry = v3897 == 256;
  var v9197;
  var v10007 = parentObj$$269.FCarry;
  if (v10007) {
    v9197 = 32768;
  } else {
    v9197 = 0;
  }
  var v7409 = v9197;
  var v10008 = parentObj$$269.registersHL;
  var v9198 = v10008 >> 1;
  var v7410 = v9198 & 65280;
  var v3898 = v7409 | v7410;
  var v7411 = parentObj$$269.registersHL;
  var v3899 = v7411 & 255;
  parentObj$$269.registersHL = v3898 | v3899;
  parentObj$$269.FHalfCarry = parentObj$$269.FSubtract = false;
  var v3900 = parentObj$$269.registersHL;
  parentObj$$269.FZero = v3900 < 256;
  return;
}
function v345(parentObj$$268) {
  var v7412 = parentObj$$268.registerE;
  var v3901 = v7412 & 1;
  parentObj$$268.FCarry = v3901 == 1;
  var v7413;
  var v9199 = parentObj$$268.FCarry;
  if (v9199) {
    v7413 = 128;
  } else {
    v7413 = 0;
  }
  var v3902 = v7413;
  var v7414 = parentObj$$268.registerE;
  var v3903 = v7414 >> 1;
  parentObj$$268.registerE = v3902 | v3903;
  parentObj$$268.FHalfCarry = parentObj$$268.FSubtract = false;
  var v3904 = parentObj$$268.registerE;
  parentObj$$268.FZero = v3904 == 0;
  return;
}
function v344(parentObj$$267) {
  var v7415 = parentObj$$267.registerD;
  var v3905 = v7415 & 1;
  parentObj$$267.FCarry = v3905 == 1;
  var v7416;
  var v9200 = parentObj$$267.FCarry;
  if (v9200) {
    v7416 = 128;
  } else {
    v7416 = 0;
  }
  var v3906 = v7416;
  var v7417 = parentObj$$267.registerD;
  var v3907 = v7417 >> 1;
  parentObj$$267.registerD = v3906 | v3907;
  parentObj$$267.FHalfCarry = parentObj$$267.FSubtract = false;
  var v3908 = parentObj$$267.registerD;
  parentObj$$267.FZero = v3908 == 0;
  return;
}
function v343(parentObj$$266) {
  var v7418 = parentObj$$266.registerC;
  var v3909 = v7418 & 1;
  parentObj$$266.FCarry = v3909 == 1;
  var v7419;
  var v9201 = parentObj$$266.FCarry;
  if (v9201) {
    v7419 = 128;
  } else {
    v7419 = 0;
  }
  var v3910 = v7419;
  var v7420 = parentObj$$266.registerC;
  var v3911 = v7420 >> 1;
  parentObj$$266.registerC = v3910 | v3911;
  parentObj$$266.FHalfCarry = parentObj$$266.FSubtract = false;
  var v3912 = parentObj$$266.registerC;
  parentObj$$266.FZero = v3912 == 0;
  return;
}
function v342(parentObj$$265) {
  var v7421 = parentObj$$265.registerB;
  var v3913 = v7421 & 1;
  parentObj$$265.FCarry = v3913 == 1;
  var v7422;
  var v9202 = parentObj$$265.FCarry;
  if (v9202) {
    v7422 = 128;
  } else {
    v7422 = 0;
  }
  var v3914 = v7422;
  var v7423 = parentObj$$265.registerB;
  var v3915 = v7423 >> 1;
  parentObj$$265.registerB = v3914 | v3915;
  parentObj$$265.FHalfCarry = parentObj$$265.FSubtract = false;
  var v3916 = parentObj$$265.registerB;
  parentObj$$265.FZero = v3916 == 0;
  return;
}
function v341(parentObj$$264) {
  var v3917 = parentObj$$264.registerA;
  parentObj$$264.FCarry = v3917 > 127;
  var v9203 = parentObj$$264.registerA;
  var v7424 = v9203 << 1;
  var v3918 = v7424 & 255;
  var v7425;
  var v9204 = parentObj$$264.FCarry;
  if (v9204) {
    v7425 = 1;
  } else {
    v7425 = 0;
  }
  var v3919 = v7425;
  parentObj$$264.registerA = v3918 | v3919;
  parentObj$$264.FHalfCarry = parentObj$$264.FSubtract = false;
  var v3920 = parentObj$$264.registerA;
  parentObj$$264.FZero = v3920 == 0;
  return;
}
function v340(parentObj$$263) {
  var v3921 = parentObj$$263.memoryReader;
  var v3922 = parentObj$$263.registersHL;
  var v3923 = parentObj$$263.registersHL;
  var temp_var$$12 = v3921[v3922](parentObj$$263, v3923);
  parentObj$$263.FCarry = temp_var$$12 > 127;
  var v7426 = temp_var$$12 << 1;
  var v3924 = v7426 & 255;
  var v7427;
  var v9205 = parentObj$$263.FCarry;
  if (v9205) {
    v7427 = 1;
  } else {
    v7427 = 0;
  }
  var v3925 = v7427;
  temp_var$$12 = v3924 | v3925;
  var v3926 = parentObj$$263.memoryWriter;
  var v3927 = parentObj$$263.registersHL;
  var v3928 = parentObj$$263.registersHL;
  v3926[v3927](parentObj$$263, v3928, temp_var$$12);
  parentObj$$263.FHalfCarry = parentObj$$263.FSubtract = false;
  parentObj$$263.FZero = temp_var$$12 == 0;
  return;
}
function v339(parentObj$$262) {
  var v7428 = parentObj$$262.registersHL;
  var v3929 = v7428 & 128;
  parentObj$$262.FCarry = v3929 == 128;
  var v9206 = parentObj$$262.registersHL;
  var v7429 = v9206 & 65280;
  var v10009 = parentObj$$262.registersHL;
  var v9207 = v10009 << 1;
  var v7430 = v9207 & 255;
  var v3930 = v7429 | v7430;
  var v7431;
  var v9208 = parentObj$$262.FCarry;
  if (v9208) {
    v7431 = 1;
  } else {
    v7431 = 0;
  }
  var v3931 = v7431;
  parentObj$$262.registersHL = v3930 | v3931;
  parentObj$$262.FHalfCarry = parentObj$$262.FSubtract = false;
  var v7432 = parentObj$$262.registersHL;
  var v3932 = v7432 & 255;
  parentObj$$262.FZero = v3932 == 0;
  return;
}
function v338(parentObj$$261) {
  var v3933 = parentObj$$261.registersHL;
  parentObj$$261.FCarry = v3933 > 32767;
  var v10010 = parentObj$$261.registersHL;
  var v9209 = v10010 << 1;
  var v7433 = v9209 & 65024;
  var v9210;
  var v10011 = parentObj$$261.FCarry;
  if (v10011) {
    v9210 = 256;
  } else {
    v9210 = 0;
  }
  var v7434 = v9210;
  var v3934 = v7433 | v7434;
  var v7435 = parentObj$$261.registersHL;
  var v3935 = v7435 & 255;
  parentObj$$261.registersHL = v3934 | v3935;
  parentObj$$261.FHalfCarry = parentObj$$261.FSubtract = false;
  var v3936 = parentObj$$261.registersHL;
  parentObj$$261.FZero = v3936 < 256;
  return;
}
function v337(parentObj$$260) {
  var v3937 = parentObj$$260.registerE;
  parentObj$$260.FCarry = v3937 > 127;
  var v9211 = parentObj$$260.registerE;
  var v7436 = v9211 << 1;
  var v3938 = v7436 & 255;
  var v7437;
  var v9212 = parentObj$$260.FCarry;
  if (v9212) {
    v7437 = 1;
  } else {
    v7437 = 0;
  }
  var v3939 = v7437;
  parentObj$$260.registerE = v3938 | v3939;
  parentObj$$260.FHalfCarry = parentObj$$260.FSubtract = false;
  var v3940 = parentObj$$260.registerE;
  parentObj$$260.FZero = v3940 == 0;
  return;
}
function v336(parentObj$$259) {
  var v3941 = parentObj$$259.registerD;
  parentObj$$259.FCarry = v3941 > 127;
  var v9213 = parentObj$$259.registerD;
  var v7438 = v9213 << 1;
  var v3942 = v7438 & 255;
  var v7439;
  var v9214 = parentObj$$259.FCarry;
  if (v9214) {
    v7439 = 1;
  } else {
    v7439 = 0;
  }
  var v3943 = v7439;
  parentObj$$259.registerD = v3942 | v3943;
  parentObj$$259.FHalfCarry = parentObj$$259.FSubtract = false;
  var v3944 = parentObj$$259.registerD;
  parentObj$$259.FZero = v3944 == 0;
  return;
}
function v335(parentObj$$258) {
  var v3945 = parentObj$$258.registerC;
  parentObj$$258.FCarry = v3945 > 127;
  var v9215 = parentObj$$258.registerC;
  var v7440 = v9215 << 1;
  var v3946 = v7440 & 255;
  var v7441;
  var v9216 = parentObj$$258.FCarry;
  if (v9216) {
    v7441 = 1;
  } else {
    v7441 = 0;
  }
  var v3947 = v7441;
  parentObj$$258.registerC = v3946 | v3947;
  parentObj$$258.FHalfCarry = parentObj$$258.FSubtract = false;
  var v3948 = parentObj$$258.registerC;
  parentObj$$258.FZero = v3948 == 0;
  return;
}
function v334(parentObj$$257) {
  var v3949 = parentObj$$257.registerB;
  parentObj$$257.FCarry = v3949 > 127;
  var v9217 = parentObj$$257.registerB;
  var v7442 = v9217 << 1;
  var v3950 = v7442 & 255;
  var v7443;
  var v9218 = parentObj$$257.FCarry;
  if (v9218) {
    v7443 = 1;
  } else {
    v7443 = 0;
  }
  var v3951 = v7443;
  parentObj$$257.registerB = v3950 | v3951;
  parentObj$$257.FHalfCarry = parentObj$$257.FSubtract = false;
  var v3952 = parentObj$$257.registerB;
  parentObj$$257.FZero = v3952 == 0;
  return;
}
function v333(parentObj$$256) {
  var v7444 = parentObj$$256.stackPointer;
  var v3953 = v7444 - 1;
  parentObj$$256.stackPointer = v3953 & 65535;
  var v3954 = parentObj$$256.memoryWriter;
  var v3955 = parentObj$$256.stackPointer;
  var v3956 = parentObj$$256.stackPointer;
  var v7445 = parentObj$$256.programCounter;
  var v3957 = v7445 >> 8;
  v3954[v3955](parentObj$$256, v3956, v3957);
  var v7446 = parentObj$$256.stackPointer;
  var v3958 = v7446 - 1;
  parentObj$$256.stackPointer = v3958 & 65535;
  var v3959 = parentObj$$256.memoryWriter;
  var v3960 = parentObj$$256.stackPointer;
  var v3961 = parentObj$$256.stackPointer;
  var v7447 = parentObj$$256.programCounter;
  var v3962 = v7447 & 255;
  v3959[v3960](parentObj$$256, v3961, v3962);
  parentObj$$256.programCounter = 56;
  return;
}
function v332(parentObj$$255) {
  var v3963 = parentObj$$255.registerA;
  var v7448 = parentObj$$255.memoryReader;
  var v7449 = parentObj$$255.programCounter;
  var v7450 = parentObj$$255.programCounter;
  var v3964 = v7448[v7449](parentObj$$255, v7450);
  var dirtySum$$43 = v3963 - v3964;
  var v7451 = parentObj$$255.programCounter;
  var v3965 = v7451 + 1;
  parentObj$$255.programCounter = v3965 & 65535;
  var v3966 = dirtySum$$43 & 15;
  var v7452 = parentObj$$255.registerA;
  var v3967 = v7452 & 15;
  parentObj$$255.FHalfCarry = v3966 > v3967;
  parentObj$$255.FCarry = dirtySum$$43 < 0;
  parentObj$$255.FZero = dirtySum$$43 == 0;
  parentObj$$255.FSubtract = true;
  return;
}
function v331(parentObj$$254) {
  cout("Illegal op code 0xFD called, pausing emulation.", 2);
  pause();
  return;
}
function v330(parentObj$$253) {
  cout("Illegal op code 0xFC called, pausing emulation.", 2);
  pause();
  return;
}
function v329(parentObj$$252) {
  var v3968;
  var v10012 = parentObj$$252.IRQEnableDelay;
  var v9219 = v10012 == 2;
  var v10014 = !v9219;
  if (v10014) {
    var v10349 = parentObj$$252.memoryReader;
    var v10350 = parentObj$$252.programCounter;
    var v10351 = parentObj$$252.programCounter;
    var v10013 = v10349[v10350](parentObj$$252, v10351);
    v9219 = v10013 == 118;
  }
  var v7453 = v9219;
  if (v7453) {
    v3968 = 1;
  } else {
    v3968 = 2;
  }
  parentObj$$252.IRQEnableDelay = v3968;
  return;
}
function v328(parentObj$$251) {
  var v10527 = parentObj$$251.programCounter;
  var v10352 = v10527 + 1;
  var v10015 = v10352 & 65535;
  var v9220 = parentObj$$251.memoryRead(v10015);
  var v7454 = v9220 << 8;
  var v9221 = parentObj$$251.memoryReader;
  var v9222 = parentObj$$251.programCounter;
  var v9223 = parentObj$$251.programCounter;
  var v7455 = v9221[v9222](parentObj$$251, v9223);
  var v3969 = v7454 | v7455;
  var v10752 = parentObj$$251.memoryRead(v3969);
  parentObj$$251.registerA = v10752;
  var v7456 = parentObj$$251.programCounter;
  var v3970 = v7456 + 2;
  parentObj$$251.programCounter = v3970 & 65535;
  return;
}
function v327(parentObj$$250) {
  parentObj$$250.stackPointer = parentObj$$250.registersHL;
  return;
}
function v326(parentObj$$249) {
  var v9224 = parentObj$$249.memoryReader;
  var v9225 = parentObj$$249.programCounter;
  var v9226 = parentObj$$249.programCounter;
  var v7457 = v9224[v9225](parentObj$$249, v9226);
  var v3971 = v7457 << 24;
  var temp_var$$11 = v3971 >> 24;
  var v7458 = parentObj$$249.programCounter;
  var v3972 = v7458 + 1;
  parentObj$$249.programCounter = v3972 & 65535;
  var v7459 = parentObj$$249.stackPointer;
  var v3973 = v7459 + temp_var$$11;
  parentObj$$249.registersHL = v3973 & 65535;
  var v7460 = parentObj$$249.stackPointer;
  var v3974 = v7460 ^ temp_var$$11;
  var v3975 = parentObj$$249.registersHL;
  temp_var$$11 = v3974 ^ v3975;
  var v3976 = temp_var$$11 & 256;
  parentObj$$249.FCarry = v3976 == 256;
  var v3977 = temp_var$$11 & 16;
  parentObj$$249.FHalfCarry = v3977 == 16;
  parentObj$$249.FZero = parentObj$$249.FSubtract = false;
  return;
}
function v325(parentObj$$248) {
  var v7461 = parentObj$$248.stackPointer;
  var v3978 = v7461 - 1;
  parentObj$$248.stackPointer = v3978 & 65535;
  var v3979 = parentObj$$248.memoryWriter;
  var v3980 = parentObj$$248.stackPointer;
  var v3981 = parentObj$$248.stackPointer;
  var v7462 = parentObj$$248.programCounter;
  var v3982 = v7462 >> 8;
  v3979[v3980](parentObj$$248, v3981, v3982);
  var v7463 = parentObj$$248.stackPointer;
  var v3983 = v7463 - 1;
  parentObj$$248.stackPointer = v3983 & 65535;
  var v3984 = parentObj$$248.memoryWriter;
  var v3985 = parentObj$$248.stackPointer;
  var v3986 = parentObj$$248.stackPointer;
  var v7464 = parentObj$$248.programCounter;
  var v3987 = v7464 & 255;
  v3984[v3985](parentObj$$248, v3986, v3987);
  parentObj$$248.programCounter = 48;
  return;
}
function v324(parentObj$$247) {
  var v7465 = parentObj$$247.registerA;
  var v9227 = parentObj$$247.memoryReader;
  var v9228 = parentObj$$247.programCounter;
  var v9229 = parentObj$$247.programCounter;
  var v7466 = v9227[v9228](parentObj$$247, v9229);
  parentObj$$247.registerA = v7465 | v7466;
  var v3988 = parentObj$$247.registerA;
  parentObj$$247.FZero = v3988 == 0;
  var v7467 = parentObj$$247.programCounter;
  var v3989 = v7467 + 1;
  parentObj$$247.programCounter = v3989 & 65535;
  parentObj$$247.FSubtract = parentObj$$247.FCarry = parentObj$$247.FHalfCarry = false;
  return;
}
function v323(parentObj$$246) {
  var v7468 = parentObj$$246.stackPointer;
  var v3990 = v7468 - 1;
  parentObj$$246.stackPointer = v3990 & 65535;
  var v3991 = parentObj$$246.memoryWriter;
  var v3992 = parentObj$$246.stackPointer;
  var v3993 = parentObj$$246.stackPointer;
  var v3994 = parentObj$$246.registerA;
  v3991[v3992](parentObj$$246, v3993, v3994);
  var v7469 = parentObj$$246.stackPointer;
  var v3995 = v7469 - 1;
  parentObj$$246.stackPointer = v3995 & 65535;
  var v3996 = parentObj$$246.memoryWriter;
  var v3997 = parentObj$$246.stackPointer;
  var v3998 = parentObj$$246.stackPointer;
  var v10353;
  var v10528 = parentObj$$246.FZero;
  if (v10528) {
    v10353 = 128;
  } else {
    v10353 = 0;
  }
  var v10016 = v10353;
  var v10354;
  var v10529 = parentObj$$246.FSubtract;
  if (v10529) {
    v10354 = 64;
  } else {
    v10354 = 0;
  }
  var v10017 = v10354;
  var v9230 = v10016 | v10017;
  var v10018;
  var v10355 = parentObj$$246.FHalfCarry;
  if (v10355) {
    v10018 = 32;
  } else {
    v10018 = 0;
  }
  var v9231 = v10018;
  var v7470 = v9230 | v9231;
  var v9232;
  var v10019 = parentObj$$246.FCarry;
  if (v10019) {
    v9232 = 16;
  } else {
    v9232 = 0;
  }
  var v7471 = v9232;
  var v3999 = v7470 | v7471;
  v3996[v3997](parentObj$$246, v3998, v3999);
  return;
}
function v322(parentObj$$245) {
  cout("Illegal op code 0xF4 called, pausing emulation.", 2);
  pause();
  return;
}
function v321(parentObj$$244) {
  parentObj$$244.IME = false;
  parentObj$$244.IRQEnableDelay = 0;
  return;
}
function v320(parentObj$$243) {
  var v4000 = parentObj$$243.memoryHighReader;
  var v4001 = parentObj$$243.registerC;
  var v4002 = parentObj$$243.registerC;
  var v10753 = v4000[v4001](parentObj$$243, v4002);
  parentObj$$243.registerA = v10753;
  return;
}
function v319(parentObj$$242) {
  var v4003 = parentObj$$242.memoryReader;
  var v4004 = parentObj$$242.stackPointer;
  var v4005 = parentObj$$242.stackPointer;
  var temp_var$$10 = v4003[v4004](parentObj$$242, v4005);
  parentObj$$242.FZero = temp_var$$10 > 127;
  var v4006 = temp_var$$10 & 64;
  parentObj$$242.FSubtract = v4006 == 64;
  var v4007 = temp_var$$10 & 32;
  parentObj$$242.FHalfCarry = v4007 == 32;
  var v4008 = temp_var$$10 & 16;
  parentObj$$242.FCarry = v4008 == 16;
  var v9233 = parentObj$$242.stackPointer;
  var v7472 = v9233 + 1;
  var v4009 = v7472 & 65535;
  var v10754 = parentObj$$242.memoryRead(v4009);
  parentObj$$242.registerA = v10754;
  var v7473 = parentObj$$242.stackPointer;
  var v4010 = v7473 + 2;
  parentObj$$242.stackPointer = v4010 & 65535;
  return;
}
function v318(parentObj$$241) {
  var v7474 = parentObj$$241.memoryReader;
  var v7475 = parentObj$$241.programCounter;
  var v7476 = parentObj$$241.programCounter;
  var v4011 = v7474[v7475](parentObj$$241, v7476);
  var v10755 = parentObj$$241.memoryHighRead(v4011);
  parentObj$$241.registerA = v10755;
  var v7477 = parentObj$$241.programCounter;
  var v4012 = v7477 + 1;
  parentObj$$241.programCounter = v4012 & 65535;
  return;
}
function v317(parentObj$$240) {
  var v7478 = parentObj$$240.stackPointer;
  var v4013 = v7478 - 1;
  parentObj$$240.stackPointer = v4013 & 65535;
  var v4014 = parentObj$$240.memoryWriter;
  var v4015 = parentObj$$240.stackPointer;
  var v4016 = parentObj$$240.stackPointer;
  var v7479 = parentObj$$240.programCounter;
  var v4017 = v7479 >> 8;
  v4014[v4015](parentObj$$240, v4016, v4017);
  var v7480 = parentObj$$240.stackPointer;
  var v4018 = v7480 - 1;
  parentObj$$240.stackPointer = v4018 & 65535;
  var v4019 = parentObj$$240.memoryWriter;
  var v4020 = parentObj$$240.stackPointer;
  var v4021 = parentObj$$240.stackPointer;
  var v7481 = parentObj$$240.programCounter;
  var v4022 = v7481 & 255;
  v4019[v4020](parentObj$$240, v4021, v4022);
  parentObj$$240.programCounter = 40;
  return;
}
function v316(parentObj$$239) {
  var v7482 = parentObj$$239.registerA;
  var v9234 = parentObj$$239.memoryReader;
  var v9235 = parentObj$$239.programCounter;
  var v9236 = parentObj$$239.programCounter;
  var v7483 = v9234[v9235](parentObj$$239, v9236);
  parentObj$$239.registerA = v7482 ^ v7483;
  var v7484 = parentObj$$239.programCounter;
  var v4023 = v7484 + 1;
  parentObj$$239.programCounter = v4023 & 65535;
  var v4024 = parentObj$$239.registerA;
  parentObj$$239.FZero = v4024 == 0;
  parentObj$$239.FSubtract = parentObj$$239.FHalfCarry = parentObj$$239.FCarry = false;
  return;
}
function v315(parentObj$$238) {
  cout("Illegal op code 0xED called, pausing emulation.", 2);
  pause();
  return;
}
function v314(parentObj$$237) {
  cout("Illegal op code 0xEC called, pausing emulation.", 2);
  pause();
  return;
}
function v313(parentObj$$236) {
  cout("Illegal op code 0xEB called, pausing emulation.", 2);
  pause();
  return;
}
function v312(parentObj$$235) {
  var v10530 = parentObj$$235.programCounter;
  var v10356 = v10530 + 1;
  var v10020 = v10356 & 65535;
  var v9237 = parentObj$$235.memoryRead(v10020);
  var v7485 = v9237 << 8;
  var v9238 = parentObj$$235.memoryReader;
  var v9239 = parentObj$$235.programCounter;
  var v9240 = parentObj$$235.programCounter;
  var v7486 = v9238[v9239](parentObj$$235, v9240);
  var v4025 = v7485 | v7486;
  var v4026 = parentObj$$235.registerA;
  parentObj$$235.memoryWrite(v4025, v4026);
  var v7487 = parentObj$$235.programCounter;
  var v4027 = v7487 + 2;
  parentObj$$235.programCounter = v4027 & 65535;
  return;
}
function v311(parentObj$$234) {
  parentObj$$234.programCounter = parentObj$$234.registersHL;
  return;
}
function v310(parentObj$$233) {
  var v9241 = parentObj$$233.memoryReader;
  var v9242 = parentObj$$233.programCounter;
  var v9243 = parentObj$$233.programCounter;
  var v7488 = v9241[v9242](parentObj$$233, v9243);
  var v4028 = v7488 << 24;
  var temp_value2 = v4028 >> 24;
  var v7489 = parentObj$$233.programCounter;
  var v4029 = v7489 + 1;
  parentObj$$233.programCounter = v4029 & 65535;
  var v7490 = parentObj$$233.stackPointer;
  var v4030 = v7490 + temp_value2;
  var temp_value = v4030 & 65535;
  var v7491 = parentObj$$233.stackPointer;
  var v4031 = v7491 ^ temp_value2;
  temp_value2 = v4031 ^ temp_value;
  parentObj$$233.stackPointer = temp_value;
  var v4032 = temp_value2 & 256;
  parentObj$$233.FCarry = v4032 == 256;
  var v4033 = temp_value2 & 16;
  parentObj$$233.FHalfCarry = v4033 == 16;
  parentObj$$233.FZero = parentObj$$233.FSubtract = false;
  return;
}
function v309(parentObj$$232) {
  var v7492 = parentObj$$232.stackPointer;
  var v4034 = v7492 - 1;
  parentObj$$232.stackPointer = v4034 & 65535;
  var v4035 = parentObj$$232.memoryWriter;
  var v4036 = parentObj$$232.stackPointer;
  var v4037 = parentObj$$232.stackPointer;
  var v7493 = parentObj$$232.programCounter;
  var v4038 = v7493 >> 8;
  v4035[v4036](parentObj$$232, v4037, v4038);
  var v7494 = parentObj$$232.stackPointer;
  var v4039 = v7494 - 1;
  parentObj$$232.stackPointer = v4039 & 65535;
  var v4040 = parentObj$$232.memoryWriter;
  var v4041 = parentObj$$232.stackPointer;
  var v4042 = parentObj$$232.stackPointer;
  var v7495 = parentObj$$232.programCounter;
  var v4043 = v7495 & 255;
  v4040[v4041](parentObj$$232, v4042, v4043);
  parentObj$$232.programCounter = 32;
  return;
}
function v308(parentObj$$231) {
  var v7496 = parentObj$$231.registerA;
  var v9244 = parentObj$$231.memoryReader;
  var v9245 = parentObj$$231.programCounter;
  var v9246 = parentObj$$231.programCounter;
  var v7497 = v9244[v9245](parentObj$$231, v9246);
  parentObj$$231.registerA = v7496 & v7497;
  var v7498 = parentObj$$231.programCounter;
  var v4044 = v7498 + 1;
  parentObj$$231.programCounter = v4044 & 65535;
  var v4045 = parentObj$$231.registerA;
  parentObj$$231.FZero = v4045 == 0;
  parentObj$$231.FHalfCarry = true;
  parentObj$$231.FSubtract = parentObj$$231.FCarry = false;
  return;
}
function v307(parentObj$$230) {
  var v7499 = parentObj$$230.stackPointer;
  var v4046 = v7499 - 1;
  parentObj$$230.stackPointer = v4046 & 65535;
  var v4047 = parentObj$$230.memoryWriter;
  var v4048 = parentObj$$230.stackPointer;
  var v4049 = parentObj$$230.stackPointer;
  var v7500 = parentObj$$230.registersHL;
  var v4050 = v7500 >> 8;
  v4047[v4048](parentObj$$230, v4049, v4050);
  var v7501 = parentObj$$230.stackPointer;
  var v4051 = v7501 - 1;
  parentObj$$230.stackPointer = v4051 & 65535;
  var v4052 = parentObj$$230.memoryWriter;
  var v4053 = parentObj$$230.stackPointer;
  var v4054 = parentObj$$230.stackPointer;
  var v7502 = parentObj$$230.registersHL;
  var v4055 = v7502 & 255;
  v4052[v4053](parentObj$$230, v4054, v4055);
  return;
}
function v306(parentObj$$229) {
  cout("Illegal op code 0xE4 called, pausing emulation.", 2);
  pause();
  return;
}
function v305(parentObj$$228) {
  cout("Illegal op code 0xE3 called, pausing emulation.", 2);
  pause();
  return;
}
function v304(parentObj$$227) {
  var v4056 = parentObj$$227.memoryHighWriter;
  var v4057 = parentObj$$227.registerC;
  var v4058 = parentObj$$227.registerC;
  var v4059 = parentObj$$227.registerA;
  v4056[v4057](parentObj$$227, v4058, v4059);
  return;
}
function v303(parentObj$$226) {
  var v10357 = parentObj$$226.stackPointer;
  var v10021 = v10357 + 1;
  var v9247 = v10021 & 65535;
  var v7503 = parentObj$$226.memoryRead(v9247);
  var v4060 = v7503 << 8;
  var v7504 = parentObj$$226.memoryReader;
  var v7505 = parentObj$$226.stackPointer;
  var v7506 = parentObj$$226.stackPointer;
  var v4061 = v7504[v7505](parentObj$$226, v7506);
  parentObj$$226.registersHL = v4060 | v4061;
  var v7507 = parentObj$$226.stackPointer;
  var v4062 = v7507 + 2;
  parentObj$$226.stackPointer = v4062 & 65535;
  return;
}
function v302(parentObj$$225) {
  var v7508 = parentObj$$225.memoryReader;
  var v7509 = parentObj$$225.programCounter;
  var v7510 = parentObj$$225.programCounter;
  var v4063 = v7508[v7509](parentObj$$225, v7510);
  var v4064 = parentObj$$225.registerA;
  parentObj$$225.memoryHighWrite(v4063, v4064);
  var v7511 = parentObj$$225.programCounter;
  var v4065 = v7511 + 1;
  parentObj$$225.programCounter = v4065 & 65535;
  return;
}
function v301(parentObj$$224) {
  var v7512 = parentObj$$224.stackPointer;
  var v4066 = v7512 - 1;
  parentObj$$224.stackPointer = v4066 & 65535;
  var v4067 = parentObj$$224.memoryWriter;
  var v4068 = parentObj$$224.stackPointer;
  var v4069 = parentObj$$224.stackPointer;
  var v7513 = parentObj$$224.programCounter;
  var v4070 = v7513 >> 8;
  v4067[v4068](parentObj$$224, v4069, v4070);
  var v7514 = parentObj$$224.stackPointer;
  var v4071 = v7514 - 1;
  parentObj$$224.stackPointer = v4071 & 65535;
  var v4072 = parentObj$$224.memoryWriter;
  var v4073 = parentObj$$224.stackPointer;
  var v4074 = parentObj$$224.stackPointer;
  var v7515 = parentObj$$224.programCounter;
  var v4075 = v7515 & 255;
  v4072[v4073](parentObj$$224, v4074, v4075);
  parentObj$$224.programCounter = 24;
  return;
}
function v300(parentObj$$223) {
  var v4076 = parentObj$$223.memoryReader;
  var v4077 = parentObj$$223.programCounter;
  var v4078 = parentObj$$223.programCounter;
  var temp_var$$9 = v4076[v4077](parentObj$$223, v4078);
  var v7516 = parentObj$$223.programCounter;
  var v4079 = v7516 + 1;
  parentObj$$223.programCounter = v4079 & 65535;
  var v7517 = parentObj$$223.registerA;
  var v4080 = v7517 - temp_var$$9;
  var v7518;
  var v9248 = parentObj$$223.FCarry;
  if (v9248) {
    v7518 = 1;
  } else {
    v7518 = 0;
  }
  var v4081 = v7518;
  var dirtySum$$42 = v4080 - v4081;
  var v10022 = parentObj$$223.registerA;
  var v9249 = v10022 & 15;
  var v9250 = temp_var$$9 & 15;
  var v7519 = v9249 - v9250;
  var v9251;
  var v10023 = parentObj$$223.FCarry;
  if (v10023) {
    v9251 = 1;
  } else {
    v9251 = 0;
  }
  var v7520 = v9251;
  var v4082 = v7519 - v7520;
  parentObj$$223.FHalfCarry = v4082 < 0;
  parentObj$$223.FCarry = dirtySum$$42 < 0;
  parentObj$$223.registerA = dirtySum$$42 & 255;
  var v4083 = parentObj$$223.registerA;
  parentObj$$223.FZero = v4083 == 0;
  parentObj$$223.FSubtract = true;
  return;
}
function v299(parentObj$$222) {
  cout("Illegal op code 0xDD called, pausing emulation.", 2);
  pause();
  return;
}
function v298(parentObj$$221) {
  var v4098 = parentObj$$221.FCarry;
  if (v4098) {
    var v10358 = parentObj$$221.programCounter;
    var v10024 = v10358 + 1;
    var v9252 = v10024 & 65535;
    var v7521 = parentObj$$221.memoryRead(v9252);
    var v4084 = v7521 << 8;
    var v7522 = parentObj$$221.memoryReader;
    var v7523 = parentObj$$221.programCounter;
    var v7524 = parentObj$$221.programCounter;
    var v4085 = v7522[v7523](parentObj$$221, v7524);
    var temp_pc$$4 = v4084 | v4085;
    var v7525 = parentObj$$221.programCounter;
    var v4086 = v7525 + 2;
    parentObj$$221.programCounter = v4086 & 65535;
    var v7526 = parentObj$$221.stackPointer;
    var v4087 = v7526 - 1;
    parentObj$$221.stackPointer = v4087 & 65535;
    var v4088 = parentObj$$221.memoryWriter;
    var v4089 = parentObj$$221.stackPointer;
    var v4090 = parentObj$$221.stackPointer;
    var v7527 = parentObj$$221.programCounter;
    var v4091 = v7527 >> 8;
    v4088[v4089](parentObj$$221, v4090, v4091);
    var v7528 = parentObj$$221.stackPointer;
    var v4092 = v7528 - 1;
    parentObj$$221.stackPointer = v4092 & 65535;
    var v4093 = parentObj$$221.memoryWriter;
    var v4094 = parentObj$$221.stackPointer;
    var v4095 = parentObj$$221.stackPointer;
    var v7529 = parentObj$$221.programCounter;
    var v4096 = v7529 & 255;
    v4093[v4094](parentObj$$221, v4095, v4096);
    parentObj$$221.programCounter = temp_pc$$4;
    var v7530 = parentObj$$221.CPUTicks;
    parentObj$$221.CPUTicks = v7530 + 12;
  } else {
    var v7531 = parentObj$$221.programCounter;
    var v4097 = v7531 + 2;
    parentObj$$221.programCounter = v4097 & 65535;
  }
  return;
}
function v297(parentObj$$220) {
  cout("Illegal op code 0xDB called, pausing emulation.", 2);
  pause();
  return;
}
function v296(parentObj$$219) {
  var v4102 = parentObj$$219.FCarry;
  if (v4102) {
    var v10359 = parentObj$$219.programCounter;
    var v10025 = v10359 + 1;
    var v9253 = v10025 & 65535;
    var v7532 = parentObj$$219.memoryRead(v9253);
    var v4099 = v7532 << 8;
    var v7533 = parentObj$$219.memoryReader;
    var v7534 = parentObj$$219.programCounter;
    var v7535 = parentObj$$219.programCounter;
    var v4100 = v7533[v7534](parentObj$$219, v7535);
    parentObj$$219.programCounter = v4099 | v4100;
    var v7536 = parentObj$$219.CPUTicks;
    parentObj$$219.CPUTicks = v7536 + 4;
  } else {
    var v7537 = parentObj$$219.programCounter;
    var v4101 = v7537 + 2;
    parentObj$$219.programCounter = v4101 & 65535;
  }
  return;
}
function v295(parentObj$$218) {
  var v10360 = parentObj$$218.stackPointer;
  var v10026 = v10360 + 1;
  var v9254 = v10026 & 65535;
  var v7538 = parentObj$$218.memoryRead(v9254);
  var v4103 = v7538 << 8;
  var v7539 = parentObj$$218.memoryReader;
  var v7540 = parentObj$$218.stackPointer;
  var v7541 = parentObj$$218.stackPointer;
  var v4104 = v7539[v7540](parentObj$$218, v7541);
  parentObj$$218.programCounter = v4103 | v4104;
  var v7542 = parentObj$$218.stackPointer;
  var v4105 = v7542 + 2;
  parentObj$$218.stackPointer = v4105 & 65535;
  var v4106;
  var v10027 = parentObj$$218.IRQEnableDelay;
  var v9255 = v10027 == 2;
  var v10029 = !v9255;
  if (v10029) {
    var v10361 = parentObj$$218.memoryReader;
    var v10362 = parentObj$$218.programCounter;
    var v10363 = parentObj$$218.programCounter;
    var v10028 = v10361[v10362](parentObj$$218, v10363);
    v9255 = v10028 == 118;
  }
  var v7543 = v9255;
  if (v7543) {
    v4106 = 1;
  } else {
    v4106 = 2;
  }
  parentObj$$218.IRQEnableDelay = v4106;
  return;
}
function v294(parentObj$$217) {
  var v4110 = parentObj$$217.FCarry;
  if (v4110) {
    var v10364 = parentObj$$217.stackPointer;
    var v10030 = v10364 + 1;
    var v9256 = v10030 & 65535;
    var v7544 = parentObj$$217.memoryRead(v9256);
    var v4107 = v7544 << 8;
    var v7545 = parentObj$$217.memoryReader;
    var v7546 = parentObj$$217.stackPointer;
    var v7547 = parentObj$$217.stackPointer;
    var v4108 = v7545[v7546](parentObj$$217, v7547);
    parentObj$$217.programCounter = v4107 | v4108;
    var v7548 = parentObj$$217.stackPointer;
    var v4109 = v7548 + 2;
    parentObj$$217.stackPointer = v4109 & 65535;
    var v7549 = parentObj$$217.CPUTicks;
    parentObj$$217.CPUTicks = v7549 + 12;
  }
  return;
}
function v293(parentObj$$216) {
  var v7550 = parentObj$$216.stackPointer;
  var v4111 = v7550 - 1;
  parentObj$$216.stackPointer = v4111 & 65535;
  var v4112 = parentObj$$216.memoryWriter;
  var v4113 = parentObj$$216.stackPointer;
  var v4114 = parentObj$$216.stackPointer;
  var v7551 = parentObj$$216.programCounter;
  var v4115 = v7551 >> 8;
  v4112[v4113](parentObj$$216, v4114, v4115);
  var v7552 = parentObj$$216.stackPointer;
  var v4116 = v7552 - 1;
  parentObj$$216.stackPointer = v4116 & 65535;
  var v4117 = parentObj$$216.memoryWriter;
  var v4118 = parentObj$$216.stackPointer;
  var v4119 = parentObj$$216.stackPointer;
  var v7553 = parentObj$$216.programCounter;
  var v4120 = v7553 & 255;
  v4117[v4118](parentObj$$216, v4119, v4120);
  parentObj$$216.programCounter = 16;
  return;
}
function v292(parentObj$$215) {
  var v4121 = parentObj$$215.registerA;
  var v7554 = parentObj$$215.memoryReader;
  var v7555 = parentObj$$215.programCounter;
  var v7556 = parentObj$$215.programCounter;
  var v4122 = v7554[v7555](parentObj$$215, v7556);
  var dirtySum$$41 = v4121 - v4122;
  var v7557 = parentObj$$215.programCounter;
  var v4123 = v7557 + 1;
  parentObj$$215.programCounter = v4123 & 65535;
  var v7558 = parentObj$$215.registerA;
  var v4124 = v7558 & 15;
  var v4125 = dirtySum$$41 & 15;
  parentObj$$215.FHalfCarry = v4124 < v4125;
  parentObj$$215.FCarry = dirtySum$$41 < 0;
  parentObj$$215.registerA = dirtySum$$41 & 255;
  parentObj$$215.FZero = dirtySum$$41 == 0;
  parentObj$$215.FSubtract = true;
  return;
}
function v291(parentObj$$214) {
  var v7559 = parentObj$$214.stackPointer;
  var v4126 = v7559 - 1;
  parentObj$$214.stackPointer = v4126 & 65535;
  var v4127 = parentObj$$214.memoryWriter;
  var v4128 = parentObj$$214.stackPointer;
  var v4129 = parentObj$$214.stackPointer;
  var v4130 = parentObj$$214.registerD;
  v4127[v4128](parentObj$$214, v4129, v4130);
  var v7560 = parentObj$$214.stackPointer;
  var v4131 = v7560 - 1;
  parentObj$$214.stackPointer = v4131 & 65535;
  var v4132 = parentObj$$214.memoryWriter;
  var v4133 = parentObj$$214.stackPointer;
  var v4134 = parentObj$$214.stackPointer;
  var v4135 = parentObj$$214.registerE;
  v4132[v4133](parentObj$$214, v4134, v4135);
  return;
}
function v290(parentObj$$213) {
  var v7561 = parentObj$$213.FCarry;
  var v4150 = !v7561;
  if (v4150) {
    var v10365 = parentObj$$213.programCounter;
    var v10031 = v10365 + 1;
    var v9257 = v10031 & 65535;
    var v7562 = parentObj$$213.memoryRead(v9257);
    var v4136 = v7562 << 8;
    var v7563 = parentObj$$213.memoryReader;
    var v7564 = parentObj$$213.programCounter;
    var v7565 = parentObj$$213.programCounter;
    var v4137 = v7563[v7564](parentObj$$213, v7565);
    var temp_pc$$3 = v4136 | v4137;
    var v7566 = parentObj$$213.programCounter;
    var v4138 = v7566 + 2;
    parentObj$$213.programCounter = v4138 & 65535;
    var v7567 = parentObj$$213.stackPointer;
    var v4139 = v7567 - 1;
    parentObj$$213.stackPointer = v4139 & 65535;
    var v4140 = parentObj$$213.memoryWriter;
    var v4141 = parentObj$$213.stackPointer;
    var v4142 = parentObj$$213.stackPointer;
    var v7568 = parentObj$$213.programCounter;
    var v4143 = v7568 >> 8;
    v4140[v4141](parentObj$$213, v4142, v4143);
    var v7569 = parentObj$$213.stackPointer;
    var v4144 = v7569 - 1;
    parentObj$$213.stackPointer = v4144 & 65535;
    var v4145 = parentObj$$213.memoryWriter;
    var v4146 = parentObj$$213.stackPointer;
    var v4147 = parentObj$$213.stackPointer;
    var v7570 = parentObj$$213.programCounter;
    var v4148 = v7570 & 255;
    v4145[v4146](parentObj$$213, v4147, v4148);
    parentObj$$213.programCounter = temp_pc$$3;
    var v7571 = parentObj$$213.CPUTicks;
    parentObj$$213.CPUTicks = v7571 + 12;
  } else {
    var v7572 = parentObj$$213.programCounter;
    var v4149 = v7572 + 2;
    parentObj$$213.programCounter = v4149 & 65535;
  }
  return;
}
function v289(parentObj$$212) {
  cout("Illegal op code 0xD3 called, pausing emulation.", 2);
  pause();
  return;
}
function v288(parentObj$$211) {
  var v7573 = parentObj$$211.FCarry;
  var v4154 = !v7573;
  if (v4154) {
    var v10366 = parentObj$$211.programCounter;
    var v10032 = v10366 + 1;
    var v9258 = v10032 & 65535;
    var v7574 = parentObj$$211.memoryRead(v9258);
    var v4151 = v7574 << 8;
    var v7575 = parentObj$$211.memoryReader;
    var v7576 = parentObj$$211.programCounter;
    var v7577 = parentObj$$211.programCounter;
    var v4152 = v7575[v7576](parentObj$$211, v7577);
    parentObj$$211.programCounter = v4151 | v4152;
    var v7578 = parentObj$$211.CPUTicks;
    parentObj$$211.CPUTicks = v7578 + 4;
  } else {
    var v7579 = parentObj$$211.programCounter;
    var v4153 = v7579 + 2;
    parentObj$$211.programCounter = v4153 & 65535;
  }
  return;
}
function v287(parentObj$$210) {
  var v4155 = parentObj$$210.memoryReader;
  var v4156 = parentObj$$210.stackPointer;
  var v4157 = parentObj$$210.stackPointer;
  var v10756 = v4155[v4156](parentObj$$210, v4157);
  parentObj$$210.registerE = v10756;
  var v9259 = parentObj$$210.stackPointer;
  var v7580 = v9259 + 1;
  var v4158 = v7580 & 65535;
  var v10757 = parentObj$$210.memoryRead(v4158);
  parentObj$$210.registerD = v10757;
  var v7581 = parentObj$$210.stackPointer;
  var v4159 = v7581 + 2;
  parentObj$$210.stackPointer = v4159 & 65535;
  return;
}
function v286(parentObj$$209) {
  var v7582 = parentObj$$209.FCarry;
  var v4163 = !v7582;
  if (v4163) {
    var v10367 = parentObj$$209.stackPointer;
    var v10033 = v10367 + 1;
    var v9260 = v10033 & 65535;
    var v7583 = parentObj$$209.memoryRead(v9260);
    var v4160 = v7583 << 8;
    var v7584 = parentObj$$209.memoryReader;
    var v7585 = parentObj$$209.stackPointer;
    var v7586 = parentObj$$209.stackPointer;
    var v4161 = v7584[v7585](parentObj$$209, v7586);
    parentObj$$209.programCounter = v4160 | v4161;
    var v7587 = parentObj$$209.stackPointer;
    var v4162 = v7587 + 2;
    parentObj$$209.stackPointer = v4162 & 65535;
    var v7588 = parentObj$$209.CPUTicks;
    parentObj$$209.CPUTicks = v7588 + 12;
  }
  return;
}
function v285(parentObj$$208) {
  var v7589 = parentObj$$208.stackPointer;
  var v4164 = v7589 - 1;
  parentObj$$208.stackPointer = v4164 & 65535;
  var v4165 = parentObj$$208.memoryWriter;
  var v4166 = parentObj$$208.stackPointer;
  var v4167 = parentObj$$208.stackPointer;
  var v7590 = parentObj$$208.programCounter;
  var v4168 = v7590 >> 8;
  v4165[v4166](parentObj$$208, v4167, v4168);
  var v7591 = parentObj$$208.stackPointer;
  var v4169 = v7591 - 1;
  parentObj$$208.stackPointer = v4169 & 65535;
  var v4170 = parentObj$$208.memoryWriter;
  var v4171 = parentObj$$208.stackPointer;
  var v4172 = parentObj$$208.stackPointer;
  var v7592 = parentObj$$208.programCounter;
  var v4173 = v7592 & 255;
  v4170[v4171](parentObj$$208, v4172, v4173);
  parentObj$$208.programCounter = 8;
  return;
}
function v284(parentObj$$207) {
  var v4174 = parentObj$$207.memoryReader;
  var v4175 = parentObj$$207.programCounter;
  var v4176 = parentObj$$207.programCounter;
  var tempValue$$3 = v4174[v4175](parentObj$$207, v4176);
  var v7593 = parentObj$$207.programCounter;
  var v4177 = v7593 + 1;
  parentObj$$207.programCounter = v4177 & 65535;
  var v7594 = parentObj$$207.registerA;
  var v4178 = v7594 + tempValue$$3;
  var v7595;
  var v9261 = parentObj$$207.FCarry;
  if (v9261) {
    v7595 = 1;
  } else {
    v7595 = 0;
  }
  var v4179 = v7595;
  var dirtySum$$40 = v4178 + v4179;
  var v10034 = parentObj$$207.registerA;
  var v9262 = v10034 & 15;
  var v9263 = tempValue$$3 & 15;
  var v7596 = v9262 + v9263;
  var v9264;
  var v10035 = parentObj$$207.FCarry;
  if (v10035) {
    v9264 = 1;
  } else {
    v9264 = 0;
  }
  var v7597 = v9264;
  var v4180 = v7596 + v7597;
  parentObj$$207.FHalfCarry = v4180 > 15;
  parentObj$$207.FCarry = dirtySum$$40 > 255;
  parentObj$$207.registerA = dirtySum$$40 & 255;
  var v4181 = parentObj$$207.registerA;
  parentObj$$207.FZero = v4181 == 0;
  parentObj$$207.FSubtract = false;
  return;
}
function v283(parentObj$$206) {
  var v10368 = parentObj$$206.programCounter;
  var v10036 = v10368 + 1;
  var v9265 = v10036 & 65535;
  var v7598 = parentObj$$206.memoryRead(v9265);
  var v4182 = v7598 << 8;
  var v7599 = parentObj$$206.memoryReader;
  var v7600 = parentObj$$206.programCounter;
  var v7601 = parentObj$$206.programCounter;
  var v4183 = v7599[v7600](parentObj$$206, v7601);
  var temp_pc$$2 = v4182 | v4183;
  var v7602 = parentObj$$206.programCounter;
  var v4184 = v7602 + 2;
  parentObj$$206.programCounter = v4184 & 65535;
  var v7603 = parentObj$$206.stackPointer;
  var v4185 = v7603 - 1;
  parentObj$$206.stackPointer = v4185 & 65535;
  var v4186 = parentObj$$206.memoryWriter;
  var v4187 = parentObj$$206.stackPointer;
  var v4188 = parentObj$$206.stackPointer;
  var v7604 = parentObj$$206.programCounter;
  var v4189 = v7604 >> 8;
  v4186[v4187](parentObj$$206, v4188, v4189);
  var v7605 = parentObj$$206.stackPointer;
  var v4190 = v7605 - 1;
  parentObj$$206.stackPointer = v4190 & 65535;
  var v4191 = parentObj$$206.memoryWriter;
  var v4192 = parentObj$$206.stackPointer;
  var v4193 = parentObj$$206.stackPointer;
  var v7606 = parentObj$$206.programCounter;
  var v4194 = v7606 & 255;
  v4191[v4192](parentObj$$206, v4193, v4194);
  parentObj$$206.programCounter = temp_pc$$2;
  return;
}
function v282(parentObj$$205) {
  var v4209 = parentObj$$205.FZero;
  if (v4209) {
    var v10369 = parentObj$$205.programCounter;
    var v10037 = v10369 + 1;
    var v9266 = v10037 & 65535;
    var v7607 = parentObj$$205.memoryRead(v9266);
    var v4195 = v7607 << 8;
    var v7608 = parentObj$$205.memoryReader;
    var v7609 = parentObj$$205.programCounter;
    var v7610 = parentObj$$205.programCounter;
    var v4196 = v7608[v7609](parentObj$$205, v7610);
    var temp_pc$$1 = v4195 | v4196;
    var v7611 = parentObj$$205.programCounter;
    var v4197 = v7611 + 2;
    parentObj$$205.programCounter = v4197 & 65535;
    var v7612 = parentObj$$205.stackPointer;
    var v4198 = v7612 - 1;
    parentObj$$205.stackPointer = v4198 & 65535;
    var v4199 = parentObj$$205.memoryWriter;
    var v4200 = parentObj$$205.stackPointer;
    var v4201 = parentObj$$205.stackPointer;
    var v7613 = parentObj$$205.programCounter;
    var v4202 = v7613 >> 8;
    v4199[v4200](parentObj$$205, v4201, v4202);
    var v7614 = parentObj$$205.stackPointer;
    var v4203 = v7614 - 1;
    parentObj$$205.stackPointer = v4203 & 65535;
    var v4204 = parentObj$$205.memoryWriter;
    var v4205 = parentObj$$205.stackPointer;
    var v4206 = parentObj$$205.stackPointer;
    var v7615 = parentObj$$205.programCounter;
    var v4207 = v7615 & 255;
    v4204[v4205](parentObj$$205, v4206, v4207);
    parentObj$$205.programCounter = temp_pc$$1;
    var v7616 = parentObj$$205.CPUTicks;
    parentObj$$205.CPUTicks = v7616 + 12;
  } else {
    var v7617 = parentObj$$205.programCounter;
    var v4208 = v7617 + 2;
    parentObj$$205.programCounter = v4208 & 65535;
  }
  return;
}
function v281(parentObj$$204) {
  var v4210 = parentObj$$204.memoryReader;
  var v4211 = parentObj$$204.programCounter;
  var v4212 = parentObj$$204.programCounter;
  var opcode = v4210[v4211](parentObj$$204, v4212);
  var v7618 = parentObj$$204.programCounter;
  var v4213 = v7618 + 1;
  parentObj$$204.programCounter = v4213 & 65535;
  var v7619 = parentObj$$204.CPUTicks;
  var v9267 = parentObj$$204.SecondaryTICKTable;
  var v7620 = v9267[opcode];
  parentObj$$204.CPUTicks = v7619 + v7620;
  var v4214 = parentObj$$204.CBOPCODE;
  v4214[opcode](parentObj$$204);
  return;
}
function v280(parentObj$$203) {
  var v4218 = parentObj$$203.FZero;
  if (v4218) {
    var v10370 = parentObj$$203.programCounter;
    var v10038 = v10370 + 1;
    var v9268 = v10038 & 65535;
    var v7621 = parentObj$$203.memoryRead(v9268);
    var v4215 = v7621 << 8;
    var v7622 = parentObj$$203.memoryReader;
    var v7623 = parentObj$$203.programCounter;
    var v7624 = parentObj$$203.programCounter;
    var v4216 = v7622[v7623](parentObj$$203, v7624);
    parentObj$$203.programCounter = v4215 | v4216;
    var v7625 = parentObj$$203.CPUTicks;
    parentObj$$203.CPUTicks = v7625 + 4;
  } else {
    var v7626 = parentObj$$203.programCounter;
    var v4217 = v7626 + 2;
    parentObj$$203.programCounter = v4217 & 65535;
  }
  return;
}
function v279(parentObj$$202) {
  var v10371 = parentObj$$202.stackPointer;
  var v10039 = v10371 + 1;
  var v9269 = v10039 & 65535;
  var v7627 = parentObj$$202.memoryRead(v9269);
  var v4219 = v7627 << 8;
  var v7628 = parentObj$$202.memoryReader;
  var v7629 = parentObj$$202.stackPointer;
  var v7630 = parentObj$$202.stackPointer;
  var v4220 = v7628[v7629](parentObj$$202, v7630);
  parentObj$$202.programCounter = v4219 | v4220;
  var v7631 = parentObj$$202.stackPointer;
  var v4221 = v7631 + 2;
  parentObj$$202.stackPointer = v4221 & 65535;
  return;
}
function v278(parentObj$$201) {
  var v4225 = parentObj$$201.FZero;
  if (v4225) {
    var v10372 = parentObj$$201.stackPointer;
    var v10040 = v10372 + 1;
    var v9270 = v10040 & 65535;
    var v7632 = parentObj$$201.memoryRead(v9270);
    var v4222 = v7632 << 8;
    var v7633 = parentObj$$201.memoryReader;
    var v7634 = parentObj$$201.stackPointer;
    var v7635 = parentObj$$201.stackPointer;
    var v4223 = v7633[v7634](parentObj$$201, v7635);
    parentObj$$201.programCounter = v4222 | v4223;
    var v7636 = parentObj$$201.stackPointer;
    var v4224 = v7636 + 2;
    parentObj$$201.stackPointer = v4224 & 65535;
    var v7637 = parentObj$$201.CPUTicks;
    parentObj$$201.CPUTicks = v7637 + 12;
  }
  return;
}
function v277(parentObj$$200) {
  var v7638 = parentObj$$200.stackPointer;
  var v4226 = v7638 - 1;
  parentObj$$200.stackPointer = v4226 & 65535;
  var v4227 = parentObj$$200.memoryWriter;
  var v4228 = parentObj$$200.stackPointer;
  var v4229 = parentObj$$200.stackPointer;
  var v7639 = parentObj$$200.programCounter;
  var v4230 = v7639 >> 8;
  v4227[v4228](parentObj$$200, v4229, v4230);
  var v7640 = parentObj$$200.stackPointer;
  var v4231 = v7640 - 1;
  parentObj$$200.stackPointer = v4231 & 65535;
  var v4232 = parentObj$$200.memoryWriter;
  var v4233 = parentObj$$200.stackPointer;
  var v4234 = parentObj$$200.stackPointer;
  var v7641 = parentObj$$200.programCounter;
  var v4235 = v7641 & 255;
  v4232[v4233](parentObj$$200, v4234, v4235);
  parentObj$$200.programCounter = 0;
  return;
}
function v276(parentObj$$199) {
  var v4236 = parentObj$$199.registerA;
  var v7642 = parentObj$$199.memoryReader;
  var v7643 = parentObj$$199.programCounter;
  var v7644 = parentObj$$199.programCounter;
  var v4237 = v7642[v7643](parentObj$$199, v7644);
  var dirtySum$$39 = v4236 + v4237;
  var v7645 = parentObj$$199.programCounter;
  var v4238 = v7645 + 1;
  parentObj$$199.programCounter = v4238 & 65535;
  var v4239 = dirtySum$$39 & 15;
  var v7646 = parentObj$$199.registerA;
  var v4240 = v7646 & 15;
  parentObj$$199.FHalfCarry = v4239 < v4240;
  parentObj$$199.FCarry = dirtySum$$39 > 255;
  parentObj$$199.registerA = dirtySum$$39 & 255;
  var v4241 = parentObj$$199.registerA;
  parentObj$$199.FZero = v4241 == 0;
  parentObj$$199.FSubtract = false;
  return;
}
function v275(parentObj$$198) {
  var v7647 = parentObj$$198.stackPointer;
  var v4242 = v7647 - 1;
  parentObj$$198.stackPointer = v4242 & 65535;
  var v4243 = parentObj$$198.memoryWriter;
  var v4244 = parentObj$$198.stackPointer;
  var v4245 = parentObj$$198.stackPointer;
  var v4246 = parentObj$$198.registerB;
  v4243[v4244](parentObj$$198, v4245, v4246);
  var v7648 = parentObj$$198.stackPointer;
  var v4247 = v7648 - 1;
  parentObj$$198.stackPointer = v4247 & 65535;
  var v4248 = parentObj$$198.memoryWriter;
  var v4249 = parentObj$$198.stackPointer;
  var v4250 = parentObj$$198.stackPointer;
  var v4251 = parentObj$$198.registerC;
  v4248[v4249](parentObj$$198, v4250, v4251);
  return;
}
function v274(parentObj$$197) {
  var v7649 = parentObj$$197.FZero;
  var v4266 = !v7649;
  if (v4266) {
    var v10373 = parentObj$$197.programCounter;
    var v10041 = v10373 + 1;
    var v9271 = v10041 & 65535;
    var v7650 = parentObj$$197.memoryRead(v9271);
    var v4252 = v7650 << 8;
    var v7651 = parentObj$$197.memoryReader;
    var v7652 = parentObj$$197.programCounter;
    var v7653 = parentObj$$197.programCounter;
    var v4253 = v7651[v7652](parentObj$$197, v7653);
    var temp_pc = v4252 | v4253;
    var v7654 = parentObj$$197.programCounter;
    var v4254 = v7654 + 2;
    parentObj$$197.programCounter = v4254 & 65535;
    var v7655 = parentObj$$197.stackPointer;
    var v4255 = v7655 - 1;
    parentObj$$197.stackPointer = v4255 & 65535;
    var v4256 = parentObj$$197.memoryWriter;
    var v4257 = parentObj$$197.stackPointer;
    var v4258 = parentObj$$197.stackPointer;
    var v7656 = parentObj$$197.programCounter;
    var v4259 = v7656 >> 8;
    v4256[v4257](parentObj$$197, v4258, v4259);
    var v7657 = parentObj$$197.stackPointer;
    var v4260 = v7657 - 1;
    parentObj$$197.stackPointer = v4260 & 65535;
    var v4261 = parentObj$$197.memoryWriter;
    var v4262 = parentObj$$197.stackPointer;
    var v4263 = parentObj$$197.stackPointer;
    var v7658 = parentObj$$197.programCounter;
    var v4264 = v7658 & 255;
    v4261[v4262](parentObj$$197, v4263, v4264);
    parentObj$$197.programCounter = temp_pc;
    var v7659 = parentObj$$197.CPUTicks;
    parentObj$$197.CPUTicks = v7659 + 12;
  } else {
    var v7660 = parentObj$$197.programCounter;
    var v4265 = v7660 + 2;
    parentObj$$197.programCounter = v4265 & 65535;
  }
  return;
}
function v273(parentObj$$196) {
  var v10374 = parentObj$$196.programCounter;
  var v10042 = v10374 + 1;
  var v9272 = v10042 & 65535;
  var v7661 = parentObj$$196.memoryRead(v9272);
  var v4267 = v7661 << 8;
  var v7662 = parentObj$$196.memoryReader;
  var v7663 = parentObj$$196.programCounter;
  var v7664 = parentObj$$196.programCounter;
  var v4268 = v7662[v7663](parentObj$$196, v7664);
  parentObj$$196.programCounter = v4267 | v4268;
  return;
}
function v272(parentObj$$195) {
  var v7665 = parentObj$$195.FZero;
  var v4272 = !v7665;
  if (v4272) {
    var v10375 = parentObj$$195.programCounter;
    var v10043 = v10375 + 1;
    var v9273 = v10043 & 65535;
    var v7666 = parentObj$$195.memoryRead(v9273);
    var v4269 = v7666 << 8;
    var v7667 = parentObj$$195.memoryReader;
    var v7668 = parentObj$$195.programCounter;
    var v7669 = parentObj$$195.programCounter;
    var v4270 = v7667[v7668](parentObj$$195, v7669);
    parentObj$$195.programCounter = v4269 | v4270;
    var v7670 = parentObj$$195.CPUTicks;
    parentObj$$195.CPUTicks = v7670 + 4;
  } else {
    var v7671 = parentObj$$195.programCounter;
    var v4271 = v7671 + 2;
    parentObj$$195.programCounter = v4271 & 65535;
  }
  return;
}
function v271(parentObj$$194) {
  var v4273 = parentObj$$194.memoryReader;
  var v4274 = parentObj$$194.stackPointer;
  var v4275 = parentObj$$194.stackPointer;
  var v10758 = v4273[v4274](parentObj$$194, v4275);
  parentObj$$194.registerC = v10758;
  var v9274 = parentObj$$194.stackPointer;
  var v7672 = v9274 + 1;
  var v4276 = v7672 & 65535;
  var v10759 = parentObj$$194.memoryRead(v4276);
  parentObj$$194.registerB = v10759;
  var v7673 = parentObj$$194.stackPointer;
  var v4277 = v7673 + 2;
  parentObj$$194.stackPointer = v4277 & 65535;
  return;
}
function v270(parentObj$$193) {
  var v7674 = parentObj$$193.FZero;
  var v4281 = !v7674;
  if (v4281) {
    var v10376 = parentObj$$193.stackPointer;
    var v10044 = v10376 + 1;
    var v9275 = v10044 & 65535;
    var v7675 = parentObj$$193.memoryRead(v9275);
    var v4278 = v7675 << 8;
    var v7676 = parentObj$$193.memoryReader;
    var v7677 = parentObj$$193.stackPointer;
    var v7678 = parentObj$$193.stackPointer;
    var v4279 = v7676[v7677](parentObj$$193, v7678);
    parentObj$$193.programCounter = v4278 | v4279;
    var v7679 = parentObj$$193.stackPointer;
    var v4280 = v7679 + 2;
    parentObj$$193.stackPointer = v4280 & 65535;
    var v7680 = parentObj$$193.CPUTicks;
    parentObj$$193.CPUTicks = v7680 + 12;
  }
  return;
}
function v269(parentObj$$192) {
  parentObj$$192.FHalfCarry = parentObj$$192.FCarry = false;
  parentObj$$192.FZero = parentObj$$192.FSubtract = true;
  return;
}
function v268(parentObj$$191) {
  var v4282 = parentObj$$191.registerA;
  var v7681 = parentObj$$191.memoryReader;
  var v7682 = parentObj$$191.registersHL;
  var v7683 = parentObj$$191.registersHL;
  var v4283 = v7681[v7682](parentObj$$191, v7683);
  var dirtySum$$38 = v4282 - v4283;
  var v4284 = dirtySum$$38 & 15;
  var v7684 = parentObj$$191.registerA;
  var v4285 = v7684 & 15;
  parentObj$$191.FHalfCarry = v4284 > v4285;
  parentObj$$191.FCarry = dirtySum$$38 < 0;
  parentObj$$191.FZero = dirtySum$$38 == 0;
  parentObj$$191.FSubtract = true;
  return;
}
function v267(parentObj$$190) {
  var v4286 = parentObj$$190.registerA;
  var v7685 = parentObj$$190.registersHL;
  var v4287 = v7685 & 255;
  var dirtySum$$37 = v4286 - v4287;
  var v4288 = dirtySum$$37 & 15;
  var v7686 = parentObj$$190.registerA;
  var v4289 = v7686 & 15;
  parentObj$$190.FHalfCarry = v4288 > v4289;
  parentObj$$190.FCarry = dirtySum$$37 < 0;
  parentObj$$190.FZero = dirtySum$$37 == 0;
  parentObj$$190.FSubtract = true;
  return;
}
function v266(parentObj$$189) {
  var v4290 = parentObj$$189.registerA;
  var v7687 = parentObj$$189.registersHL;
  var v4291 = v7687 >> 8;
  var dirtySum$$36 = v4290 - v4291;
  var v4292 = dirtySum$$36 & 15;
  var v7688 = parentObj$$189.registerA;
  var v4293 = v7688 & 15;
  parentObj$$189.FHalfCarry = v4292 > v4293;
  parentObj$$189.FCarry = dirtySum$$36 < 0;
  parentObj$$189.FZero = dirtySum$$36 == 0;
  parentObj$$189.FSubtract = true;
  return;
}
function v265(parentObj$$188) {
  var v4294 = parentObj$$188.registerA;
  var v4295 = parentObj$$188.registerE;
  var dirtySum$$35 = v4294 - v4295;
  var v4296 = dirtySum$$35 & 15;
  var v7689 = parentObj$$188.registerA;
  var v4297 = v7689 & 15;
  parentObj$$188.FHalfCarry = v4296 > v4297;
  parentObj$$188.FCarry = dirtySum$$35 < 0;
  parentObj$$188.FZero = dirtySum$$35 == 0;
  parentObj$$188.FSubtract = true;
  return;
}
function v264(parentObj$$187) {
  var v4298 = parentObj$$187.registerA;
  var v4299 = parentObj$$187.registerD;
  var dirtySum$$34 = v4298 - v4299;
  var v4300 = dirtySum$$34 & 15;
  var v7690 = parentObj$$187.registerA;
  var v4301 = v7690 & 15;
  parentObj$$187.FHalfCarry = v4300 > v4301;
  parentObj$$187.FCarry = dirtySum$$34 < 0;
  parentObj$$187.FZero = dirtySum$$34 == 0;
  parentObj$$187.FSubtract = true;
  return;
}
function v263(parentObj$$186) {
  var v4302 = parentObj$$186.registerA;
  var v4303 = parentObj$$186.registerC;
  var dirtySum$$33 = v4302 - v4303;
  var v4304 = dirtySum$$33 & 15;
  var v7691 = parentObj$$186.registerA;
  var v4305 = v7691 & 15;
  parentObj$$186.FHalfCarry = v4304 > v4305;
  parentObj$$186.FCarry = dirtySum$$33 < 0;
  parentObj$$186.FZero = dirtySum$$33 == 0;
  parentObj$$186.FSubtract = true;
  return;
}
function v262(parentObj$$185) {
  var v4306 = parentObj$$185.registerA;
  var v4307 = parentObj$$185.registerB;
  var dirtySum$$32 = v4306 - v4307;
  var v4308 = dirtySum$$32 & 15;
  var v7692 = parentObj$$185.registerA;
  var v4309 = v7692 & 15;
  parentObj$$185.FHalfCarry = v4308 > v4309;
  parentObj$$185.FCarry = dirtySum$$32 < 0;
  parentObj$$185.FZero = dirtySum$$32 == 0;
  parentObj$$185.FSubtract = true;
  return;
}
function v261(parentObj$$184) {
  var v4310 = parentObj$$184.registerA;
  parentObj$$184.FZero = v4310 == 0;
  parentObj$$184.FSubtract = parentObj$$184.FCarry = parentObj$$184.FHalfCarry = false;
  return;
}
function v260(parentObj$$183) {
  var v7693 = parentObj$$183.registerA;
  var v9276 = parentObj$$183.memoryReader;
  var v9277 = parentObj$$183.registersHL;
  var v9278 = parentObj$$183.registersHL;
  var v7694 = v9276[v9277](parentObj$$183, v9278);
  parentObj$$183.registerA = v7693 | v7694;
  var v4311 = parentObj$$183.registerA;
  parentObj$$183.FZero = v4311 == 0;
  parentObj$$183.FSubtract = parentObj$$183.FCarry = parentObj$$183.FHalfCarry = false;
  return;
}
function v259(parentObj$$182) {
  var v7695 = parentObj$$182.registerA;
  var v9279 = parentObj$$182.registersHL;
  var v7696 = v9279 & 255;
  parentObj$$182.registerA = v7695 | v7696;
  var v4312 = parentObj$$182.registerA;
  parentObj$$182.FZero = v4312 == 0;
  parentObj$$182.FSubtract = parentObj$$182.FCarry = parentObj$$182.FHalfCarry = false;
  return;
}
function v258(parentObj$$181) {
  var v7697 = parentObj$$181.registerA;
  var v9280 = parentObj$$181.registersHL;
  var v7698 = v9280 >> 8;
  parentObj$$181.registerA = v7697 | v7698;
  var v4313 = parentObj$$181.registerA;
  parentObj$$181.FZero = v4313 == 0;
  parentObj$$181.FSubtract = parentObj$$181.FCarry = parentObj$$181.FHalfCarry = false;
  return;
}
function v257(parentObj$$180) {
  var v7699 = parentObj$$180.registerA;
  var v7700 = parentObj$$180.registerE;
  parentObj$$180.registerA = v7699 | v7700;
  var v4314 = parentObj$$180.registerA;
  parentObj$$180.FZero = v4314 == 0;
  parentObj$$180.FSubtract = parentObj$$180.FCarry = parentObj$$180.FHalfCarry = false;
  return;
}
function v256(parentObj$$179) {
  var v7701 = parentObj$$179.registerA;
  var v7702 = parentObj$$179.registerD;
  parentObj$$179.registerA = v7701 | v7702;
  var v4315 = parentObj$$179.registerA;
  parentObj$$179.FZero = v4315 == 0;
  parentObj$$179.FSubtract = parentObj$$179.FCarry = parentObj$$179.FHalfCarry = false;
  return;
}
function v255(parentObj$$178) {
  var v7703 = parentObj$$178.registerA;
  var v7704 = parentObj$$178.registerC;
  parentObj$$178.registerA = v7703 | v7704;
  var v4316 = parentObj$$178.registerA;
  parentObj$$178.FZero = v4316 == 0;
  parentObj$$178.FSubtract = parentObj$$178.FCarry = parentObj$$178.FHalfCarry = false;
  return;
}
function v254(parentObj$$177) {
  var v7705 = parentObj$$177.registerA;
  var v7706 = parentObj$$177.registerB;
  parentObj$$177.registerA = v7705 | v7706;
  var v4317 = parentObj$$177.registerA;
  parentObj$$177.FZero = v4317 == 0;
  parentObj$$177.FSubtract = parentObj$$177.FCarry = parentObj$$177.FHalfCarry = false;
  return;
}
function v253(parentObj$$176) {
  parentObj$$176.registerA = 0;
  parentObj$$176.FZero = true;
  parentObj$$176.FSubtract = parentObj$$176.FHalfCarry = parentObj$$176.FCarry = false;
  return;
}
function v252(parentObj$$175) {
  var v7707 = parentObj$$175.registerA;
  var v9281 = parentObj$$175.memoryReader;
  var v9282 = parentObj$$175.registersHL;
  var v9283 = parentObj$$175.registersHL;
  var v7708 = v9281[v9282](parentObj$$175, v9283);
  parentObj$$175.registerA = v7707 ^ v7708;
  var v4318 = parentObj$$175.registerA;
  parentObj$$175.FZero = v4318 == 0;
  parentObj$$175.FSubtract = parentObj$$175.FHalfCarry = parentObj$$175.FCarry = false;
  return;
}
function v251(parentObj$$174) {
  var v7709 = parentObj$$174.registerA;
  var v9284 = parentObj$$174.registersHL;
  var v7710 = v9284 & 255;
  parentObj$$174.registerA = v7709 ^ v7710;
  var v4319 = parentObj$$174.registerA;
  parentObj$$174.FZero = v4319 == 0;
  parentObj$$174.FSubtract = parentObj$$174.FHalfCarry = parentObj$$174.FCarry = false;
  return;
}
function v250(parentObj$$173) {
  var v7711 = parentObj$$173.registerA;
  var v9285 = parentObj$$173.registersHL;
  var v7712 = v9285 >> 8;
  parentObj$$173.registerA = v7711 ^ v7712;
  var v4320 = parentObj$$173.registerA;
  parentObj$$173.FZero = v4320 == 0;
  parentObj$$173.FSubtract = parentObj$$173.FHalfCarry = parentObj$$173.FCarry = false;
  return;
}
function v249(parentObj$$172) {
  var v7713 = parentObj$$172.registerA;
  var v7714 = parentObj$$172.registerE;
  parentObj$$172.registerA = v7713 ^ v7714;
  var v4321 = parentObj$$172.registerA;
  parentObj$$172.FZero = v4321 == 0;
  parentObj$$172.FSubtract = parentObj$$172.FHalfCarry = parentObj$$172.FCarry = false;
  return;
}
function v248(parentObj$$171) {
  var v7715 = parentObj$$171.registerA;
  var v7716 = parentObj$$171.registerD;
  parentObj$$171.registerA = v7715 ^ v7716;
  var v4322 = parentObj$$171.registerA;
  parentObj$$171.FZero = v4322 == 0;
  parentObj$$171.FSubtract = parentObj$$171.FHalfCarry = parentObj$$171.FCarry = false;
  return;
}
function v247(parentObj$$170) {
  var v7717 = parentObj$$170.registerA;
  var v7718 = parentObj$$170.registerC;
  parentObj$$170.registerA = v7717 ^ v7718;
  var v4323 = parentObj$$170.registerA;
  parentObj$$170.FZero = v4323 == 0;
  parentObj$$170.FSubtract = parentObj$$170.FHalfCarry = parentObj$$170.FCarry = false;
  return;
}
function v246(parentObj$$169) {
  var v7719 = parentObj$$169.registerA;
  var v7720 = parentObj$$169.registerB;
  parentObj$$169.registerA = v7719 ^ v7720;
  var v4324 = parentObj$$169.registerA;
  parentObj$$169.FZero = v4324 == 0;
  parentObj$$169.FSubtract = parentObj$$169.FHalfCarry = parentObj$$169.FCarry = false;
  return;
}
function v245(parentObj$$168) {
  var v4325 = parentObj$$168.registerA;
  parentObj$$168.FZero = v4325 == 0;
  parentObj$$168.FHalfCarry = true;
  parentObj$$168.FSubtract = parentObj$$168.FCarry = false;
  return;
}
function v244(parentObj$$167) {
  var v7721 = parentObj$$167.registerA;
  var v9286 = parentObj$$167.memoryReader;
  var v9287 = parentObj$$167.registersHL;
  var v9288 = parentObj$$167.registersHL;
  var v7722 = v9286[v9287](parentObj$$167, v9288);
  parentObj$$167.registerA = v7721 & v7722;
  var v4326 = parentObj$$167.registerA;
  parentObj$$167.FZero = v4326 == 0;
  parentObj$$167.FHalfCarry = true;
  parentObj$$167.FSubtract = parentObj$$167.FCarry = false;
  return;
}
function v243(parentObj$$166) {
  var v7723 = parentObj$$166.registerA;
  var v7724 = parentObj$$166.registersHL;
  parentObj$$166.registerA = v7723 & v7724;
  var v4327 = parentObj$$166.registerA;
  parentObj$$166.FZero = v4327 == 0;
  parentObj$$166.FHalfCarry = true;
  parentObj$$166.FSubtract = parentObj$$166.FCarry = false;
  return;
}
function v242(parentObj$$165) {
  var v7725 = parentObj$$165.registerA;
  var v9289 = parentObj$$165.registersHL;
  var v7726 = v9289 >> 8;
  parentObj$$165.registerA = v7725 & v7726;
  var v4328 = parentObj$$165.registerA;
  parentObj$$165.FZero = v4328 == 0;
  parentObj$$165.FHalfCarry = true;
  parentObj$$165.FSubtract = parentObj$$165.FCarry = false;
  return;
}
function v241(parentObj$$164) {
  var v7727 = parentObj$$164.registerA;
  var v7728 = parentObj$$164.registerE;
  parentObj$$164.registerA = v7727 & v7728;
  var v4329 = parentObj$$164.registerA;
  parentObj$$164.FZero = v4329 == 0;
  parentObj$$164.FHalfCarry = true;
  parentObj$$164.FSubtract = parentObj$$164.FCarry = false;
  return;
}
function v240(parentObj$$163) {
  var v7729 = parentObj$$163.registerA;
  var v7730 = parentObj$$163.registerD;
  parentObj$$163.registerA = v7729 & v7730;
  var v4330 = parentObj$$163.registerA;
  parentObj$$163.FZero = v4330 == 0;
  parentObj$$163.FHalfCarry = true;
  parentObj$$163.FSubtract = parentObj$$163.FCarry = false;
  return;
}
function v239(parentObj$$162) {
  var v7731 = parentObj$$162.registerA;
  var v7732 = parentObj$$162.registerC;
  parentObj$$162.registerA = v7731 & v7732;
  var v4331 = parentObj$$162.registerA;
  parentObj$$162.FZero = v4331 == 0;
  parentObj$$162.FHalfCarry = true;
  parentObj$$162.FSubtract = parentObj$$162.FCarry = false;
  return;
}
function v238(parentObj$$161) {
  var v7733 = parentObj$$161.registerA;
  var v7734 = parentObj$$161.registerB;
  parentObj$$161.registerA = v7733 & v7734;
  var v4332 = parentObj$$161.registerA;
  parentObj$$161.FZero = v4332 == 0;
  parentObj$$161.FHalfCarry = true;
  parentObj$$161.FSubtract = parentObj$$161.FCarry = false;
  return;
}
function v237(parentObj$$160) {
  var v4333 = parentObj$$160.FCarry;
  if (v4333) {
    parentObj$$160.FZero = false;
    parentObj$$160.FSubtract = parentObj$$160.FHalfCarry = parentObj$$160.FCarry = true;
    parentObj$$160.registerA = 255;
  } else {
    parentObj$$160.FHalfCarry = parentObj$$160.FCarry = false;
    parentObj$$160.FSubtract = parentObj$$160.FZero = true;
    parentObj$$160.registerA = 0;
  }
  return;
}
function v236(parentObj$$159) {
  var v4334 = parentObj$$159.memoryReader;
  var v4335 = parentObj$$159.registersHL;
  var v4336 = parentObj$$159.registersHL;
  var temp_var$$8 = v4334[v4335](parentObj$$159, v4336);
  var v7735 = parentObj$$159.registerA;
  var v4337 = v7735 - temp_var$$8;
  var v7736;
  var v9290 = parentObj$$159.FCarry;
  if (v9290) {
    v7736 = 1;
  } else {
    v7736 = 0;
  }
  var v4338 = v7736;
  var dirtySum$$31 = v4337 - v4338;
  var v10045 = parentObj$$159.registerA;
  var v9291 = v10045 & 15;
  var v9292 = temp_var$$8 & 15;
  var v7737 = v9291 - v9292;
  var v9293;
  var v10046 = parentObj$$159.FCarry;
  if (v10046) {
    v9293 = 1;
  } else {
    v9293 = 0;
  }
  var v7738 = v9293;
  var v4339 = v7737 - v7738;
  parentObj$$159.FHalfCarry = v4339 < 0;
  parentObj$$159.FCarry = dirtySum$$31 < 0;
  parentObj$$159.registerA = dirtySum$$31 & 255;
  var v4340 = parentObj$$159.registerA;
  parentObj$$159.FZero = v4340 == 0;
  parentObj$$159.FSubtract = true;
  return;
}
function v235(parentObj$$158) {
  var v7739 = parentObj$$158.registerA;
  var v9294 = parentObj$$158.registersHL;
  var v7740 = v9294 & 255;
  var v4341 = v7739 - v7740;
  var v7741;
  var v9295 = parentObj$$158.FCarry;
  if (v9295) {
    v7741 = 1;
  } else {
    v7741 = 0;
  }
  var v4342 = v7741;
  var dirtySum$$30 = v4341 - v4342;
  var v10047 = parentObj$$158.registerA;
  var v9296 = v10047 & 15;
  var v10048 = parentObj$$158.registersHL;
  var v9297 = v10048 & 15;
  var v7742 = v9296 - v9297;
  var v9298;
  var v10049 = parentObj$$158.FCarry;
  if (v10049) {
    v9298 = 1;
  } else {
    v9298 = 0;
  }
  var v7743 = v9298;
  var v4343 = v7742 - v7743;
  parentObj$$158.FHalfCarry = v4343 < 0;
  parentObj$$158.FCarry = dirtySum$$30 < 0;
  parentObj$$158.registerA = dirtySum$$30 & 255;
  var v4344 = parentObj$$158.registerA;
  parentObj$$158.FZero = v4344 == 0;
  parentObj$$158.FSubtract = true;
  return;
}
function v234(parentObj$$157) {
  var v4345 = parentObj$$157.registersHL;
  var temp_var$$7 = v4345 >> 8;
  var v7744 = parentObj$$157.registerA;
  var v4346 = v7744 - temp_var$$7;
  var v7745;
  var v9299 = parentObj$$157.FCarry;
  if (v9299) {
    v7745 = 1;
  } else {
    v7745 = 0;
  }
  var v4347 = v7745;
  var dirtySum$$29 = v4346 - v4347;
  var v10050 = parentObj$$157.registerA;
  var v9300 = v10050 & 15;
  var v9301 = temp_var$$7 & 15;
  var v7746 = v9300 - v9301;
  var v9302;
  var v10051 = parentObj$$157.FCarry;
  if (v10051) {
    v9302 = 1;
  } else {
    v9302 = 0;
  }
  var v7747 = v9302;
  var v4348 = v7746 - v7747;
  parentObj$$157.FHalfCarry = v4348 < 0;
  parentObj$$157.FCarry = dirtySum$$29 < 0;
  parentObj$$157.registerA = dirtySum$$29 & 255;
  var v4349 = parentObj$$157.registerA;
  parentObj$$157.FZero = v4349 == 0;
  parentObj$$157.FSubtract = true;
  return;
}
function v233(parentObj$$156) {
  var v7748 = parentObj$$156.registerA;
  var v7749 = parentObj$$156.registerE;
  var v4350 = v7748 - v7749;
  var v7750;
  var v9303 = parentObj$$156.FCarry;
  if (v9303) {
    v7750 = 1;
  } else {
    v7750 = 0;
  }
  var v4351 = v7750;
  var dirtySum$$28 = v4350 - v4351;
  var v10052 = parentObj$$156.registerA;
  var v9304 = v10052 & 15;
  var v10053 = parentObj$$156.registerE;
  var v9305 = v10053 & 15;
  var v7751 = v9304 - v9305;
  var v9306;
  var v10054 = parentObj$$156.FCarry;
  if (v10054) {
    v9306 = 1;
  } else {
    v9306 = 0;
  }
  var v7752 = v9306;
  var v4352 = v7751 - v7752;
  parentObj$$156.FHalfCarry = v4352 < 0;
  parentObj$$156.FCarry = dirtySum$$28 < 0;
  parentObj$$156.registerA = dirtySum$$28 & 255;
  var v4353 = parentObj$$156.registerA;
  parentObj$$156.FZero = v4353 == 0;
  parentObj$$156.FSubtract = true;
  return;
}
function v232(parentObj$$155) {
  var v7753 = parentObj$$155.registerA;
  var v7754 = parentObj$$155.registerD;
  var v4354 = v7753 - v7754;
  var v7755;
  var v9307 = parentObj$$155.FCarry;
  if (v9307) {
    v7755 = 1;
  } else {
    v7755 = 0;
  }
  var v4355 = v7755;
  var dirtySum$$27 = v4354 - v4355;
  var v10055 = parentObj$$155.registerA;
  var v9308 = v10055 & 15;
  var v10056 = parentObj$$155.registerD;
  var v9309 = v10056 & 15;
  var v7756 = v9308 - v9309;
  var v9310;
  var v10057 = parentObj$$155.FCarry;
  if (v10057) {
    v9310 = 1;
  } else {
    v9310 = 0;
  }
  var v7757 = v9310;
  var v4356 = v7756 - v7757;
  parentObj$$155.FHalfCarry = v4356 < 0;
  parentObj$$155.FCarry = dirtySum$$27 < 0;
  parentObj$$155.registerA = dirtySum$$27 & 255;
  var v4357 = parentObj$$155.registerA;
  parentObj$$155.FZero = v4357 == 0;
  parentObj$$155.FSubtract = true;
  return;
}
function v231(parentObj$$154) {
  var v7758 = parentObj$$154.registerA;
  var v7759 = parentObj$$154.registerC;
  var v4358 = v7758 - v7759;
  var v7760;
  var v9311 = parentObj$$154.FCarry;
  if (v9311) {
    v7760 = 1;
  } else {
    v7760 = 0;
  }
  var v4359 = v7760;
  var dirtySum$$26 = v4358 - v4359;
  var v10058 = parentObj$$154.registerA;
  var v9312 = v10058 & 15;
  var v10059 = parentObj$$154.registerC;
  var v9313 = v10059 & 15;
  var v7761 = v9312 - v9313;
  var v9314;
  var v10060 = parentObj$$154.FCarry;
  if (v10060) {
    v9314 = 1;
  } else {
    v9314 = 0;
  }
  var v7762 = v9314;
  var v4360 = v7761 - v7762;
  parentObj$$154.FHalfCarry = v4360 < 0;
  parentObj$$154.FCarry = dirtySum$$26 < 0;
  parentObj$$154.registerA = dirtySum$$26 & 255;
  var v4361 = parentObj$$154.registerA;
  parentObj$$154.FZero = v4361 == 0;
  parentObj$$154.FSubtract = true;
  return;
}
function v230(parentObj$$153) {
  var v7763 = parentObj$$153.registerA;
  var v7764 = parentObj$$153.registerB;
  var v4362 = v7763 - v7764;
  var v7765;
  var v9315 = parentObj$$153.FCarry;
  if (v9315) {
    v7765 = 1;
  } else {
    v7765 = 0;
  }
  var v4363 = v7765;
  var dirtySum$$25 = v4362 - v4363;
  var v10061 = parentObj$$153.registerA;
  var v9316 = v10061 & 15;
  var v10062 = parentObj$$153.registerB;
  var v9317 = v10062 & 15;
  var v7766 = v9316 - v9317;
  var v9318;
  var v10063 = parentObj$$153.FCarry;
  if (v10063) {
    v9318 = 1;
  } else {
    v9318 = 0;
  }
  var v7767 = v9318;
  var v4364 = v7766 - v7767;
  parentObj$$153.FHalfCarry = v4364 < 0;
  parentObj$$153.FCarry = dirtySum$$25 < 0;
  parentObj$$153.registerA = dirtySum$$25 & 255;
  var v4365 = parentObj$$153.registerA;
  parentObj$$153.FZero = v4365 == 0;
  parentObj$$153.FSubtract = true;
  return;
}
function v229(parentObj$$152) {
  parentObj$$152.registerA = 0;
  parentObj$$152.FHalfCarry = parentObj$$152.FCarry = false;
  parentObj$$152.FZero = parentObj$$152.FSubtract = true;
  return;
}
function v228(parentObj$$151) {
  var v4366 = parentObj$$151.registerA;
  var v7768 = parentObj$$151.memoryReader;
  var v7769 = parentObj$$151.registersHL;
  var v7770 = parentObj$$151.registersHL;
  var v4367 = v7768[v7769](parentObj$$151, v7770);
  var dirtySum$$24 = v4366 - v4367;
  var v7771 = parentObj$$151.registerA;
  var v4368 = v7771 & 15;
  var v4369 = dirtySum$$24 & 15;
  parentObj$$151.FHalfCarry = v4368 < v4369;
  parentObj$$151.FCarry = dirtySum$$24 < 0;
  parentObj$$151.registerA = dirtySum$$24 & 255;
  parentObj$$151.FZero = dirtySum$$24 == 0;
  parentObj$$151.FSubtract = true;
  return;
}
function v227(parentObj$$150) {
  var v4370 = parentObj$$150.registerA;
  var v7772 = parentObj$$150.registersHL;
  var v4371 = v7772 & 255;
  var dirtySum$$23 = v4370 - v4371;
  var v7773 = parentObj$$150.registerA;
  var v4372 = v7773 & 15;
  var v4373 = dirtySum$$23 & 15;
  parentObj$$150.FHalfCarry = v4372 < v4373;
  parentObj$$150.FCarry = dirtySum$$23 < 0;
  parentObj$$150.registerA = dirtySum$$23 & 255;
  parentObj$$150.FZero = dirtySum$$23 == 0;
  parentObj$$150.FSubtract = true;
  return;
}
function v226(parentObj$$149) {
  var v4374 = parentObj$$149.registerA;
  var v7774 = parentObj$$149.registersHL;
  var v4375 = v7774 >> 8;
  var dirtySum$$22 = v4374 - v4375;
  var v7775 = parentObj$$149.registerA;
  var v4376 = v7775 & 15;
  var v4377 = dirtySum$$22 & 15;
  parentObj$$149.FHalfCarry = v4376 < v4377;
  parentObj$$149.FCarry = dirtySum$$22 < 0;
  parentObj$$149.registerA = dirtySum$$22 & 255;
  parentObj$$149.FZero = dirtySum$$22 == 0;
  parentObj$$149.FSubtract = true;
  return;
}
function v225(parentObj$$148) {
  var v4378 = parentObj$$148.registerA;
  var v4379 = parentObj$$148.registerE;
  var dirtySum$$21 = v4378 - v4379;
  var v7776 = parentObj$$148.registerA;
  var v4380 = v7776 & 15;
  var v4381 = dirtySum$$21 & 15;
  parentObj$$148.FHalfCarry = v4380 < v4381;
  parentObj$$148.FCarry = dirtySum$$21 < 0;
  parentObj$$148.registerA = dirtySum$$21 & 255;
  parentObj$$148.FZero = dirtySum$$21 == 0;
  parentObj$$148.FSubtract = true;
  return;
}
function v224(parentObj$$147) {
  var v4382 = parentObj$$147.registerA;
  var v4383 = parentObj$$147.registerD;
  var dirtySum$$20 = v4382 - v4383;
  var v7777 = parentObj$$147.registerA;
  var v4384 = v7777 & 15;
  var v4385 = dirtySum$$20 & 15;
  parentObj$$147.FHalfCarry = v4384 < v4385;
  parentObj$$147.FCarry = dirtySum$$20 < 0;
  parentObj$$147.registerA = dirtySum$$20 & 255;
  parentObj$$147.FZero = dirtySum$$20 == 0;
  parentObj$$147.FSubtract = true;
  return;
}
function v223(parentObj$$146) {
  var v4386 = parentObj$$146.registerA;
  var v4387 = parentObj$$146.registerC;
  var dirtySum$$19 = v4386 - v4387;
  var v7778 = parentObj$$146.registerA;
  var v4388 = v7778 & 15;
  var v4389 = dirtySum$$19 & 15;
  parentObj$$146.FHalfCarry = v4388 < v4389;
  parentObj$$146.FCarry = dirtySum$$19 < 0;
  parentObj$$146.registerA = dirtySum$$19 & 255;
  parentObj$$146.FZero = dirtySum$$19 == 0;
  parentObj$$146.FSubtract = true;
  return;
}
function v222(parentObj$$145) {
  var v4390 = parentObj$$145.registerA;
  var v4391 = parentObj$$145.registerB;
  var dirtySum$$18 = v4390 - v4391;
  var v7779 = parentObj$$145.registerA;
  var v4392 = v7779 & 15;
  var v4393 = dirtySum$$18 & 15;
  parentObj$$145.FHalfCarry = v4392 < v4393;
  parentObj$$145.FCarry = dirtySum$$18 < 0;
  parentObj$$145.registerA = dirtySum$$18 & 255;
  parentObj$$145.FZero = dirtySum$$18 == 0;
  parentObj$$145.FSubtract = true;
  return;
}
function v221(parentObj$$144) {
  var v7780 = parentObj$$144.registerA;
  var v4394 = v7780 << 1;
  var v7781;
  var v9319 = parentObj$$144.FCarry;
  if (v9319) {
    v7781 = 1;
  } else {
    v7781 = 0;
  }
  var v4395 = v7781;
  var dirtySum$$17 = v4394 | v4395;
  var v10064 = parentObj$$144.registerA;
  var v9320 = v10064 << 1;
  var v7782 = v9320 & 30;
  var v9321;
  var v10065 = parentObj$$144.FCarry;
  if (v10065) {
    v9321 = 1;
  } else {
    v9321 = 0;
  }
  var v7783 = v9321;
  var v4396 = v7782 | v7783;
  parentObj$$144.FHalfCarry = v4396 > 15;
  parentObj$$144.FCarry = dirtySum$$17 > 255;
  parentObj$$144.registerA = dirtySum$$17 & 255;
  var v4397 = parentObj$$144.registerA;
  parentObj$$144.FZero = v4397 == 0;
  parentObj$$144.FSubtract = false;
  return;
}
function v220(parentObj$$143) {
  var v4398 = parentObj$$143.memoryReader;
  var v4399 = parentObj$$143.registersHL;
  var v4400 = parentObj$$143.registersHL;
  var tempValue$$2 = v4398[v4399](parentObj$$143, v4400);
  var v7784 = parentObj$$143.registerA;
  var v4401 = v7784 + tempValue$$2;
  var v7785;
  var v9322 = parentObj$$143.FCarry;
  if (v9322) {
    v7785 = 1;
  } else {
    v7785 = 0;
  }
  var v4402 = v7785;
  var dirtySum$$16 = v4401 + v4402;
  var v10066 = parentObj$$143.registerA;
  var v9323 = v10066 & 15;
  var v9324 = tempValue$$2 & 15;
  var v7786 = v9323 + v9324;
  var v9325;
  var v10067 = parentObj$$143.FCarry;
  if (v10067) {
    v9325 = 1;
  } else {
    v9325 = 0;
  }
  var v7787 = v9325;
  var v4403 = v7786 + v7787;
  parentObj$$143.FHalfCarry = v4403 > 15;
  parentObj$$143.FCarry = dirtySum$$16 > 255;
  parentObj$$143.registerA = dirtySum$$16 & 255;
  var v4404 = parentObj$$143.registerA;
  parentObj$$143.FZero = v4404 == 0;
  parentObj$$143.FSubtract = false;
  return;
}
function v219(parentObj$$142) {
  var v4405 = parentObj$$142.registersHL;
  var tempValue$$1 = v4405 & 255;
  var v7788 = parentObj$$142.registerA;
  var v4406 = v7788 + tempValue$$1;
  var v7789;
  var v9326 = parentObj$$142.FCarry;
  if (v9326) {
    v7789 = 1;
  } else {
    v7789 = 0;
  }
  var v4407 = v7789;
  var dirtySum$$15 = v4406 + v4407;
  var v10068 = parentObj$$142.registerA;
  var v9327 = v10068 & 15;
  var v9328 = tempValue$$1 & 15;
  var v7790 = v9327 + v9328;
  var v9329;
  var v10069 = parentObj$$142.FCarry;
  if (v10069) {
    v9329 = 1;
  } else {
    v9329 = 0;
  }
  var v7791 = v9329;
  var v4408 = v7790 + v7791;
  parentObj$$142.FHalfCarry = v4408 > 15;
  parentObj$$142.FCarry = dirtySum$$15 > 255;
  parentObj$$142.registerA = dirtySum$$15 & 255;
  var v4409 = parentObj$$142.registerA;
  parentObj$$142.FZero = v4409 == 0;
  parentObj$$142.FSubtract = false;
  return;
}
function v218(parentObj$$141) {
  var v4410 = parentObj$$141.registersHL;
  var tempValue = v4410 >> 8;
  var v7792 = parentObj$$141.registerA;
  var v4411 = v7792 + tempValue;
  var v7793;
  var v9330 = parentObj$$141.FCarry;
  if (v9330) {
    v7793 = 1;
  } else {
    v7793 = 0;
  }
  var v4412 = v7793;
  var dirtySum$$14 = v4411 + v4412;
  var v10070 = parentObj$$141.registerA;
  var v9331 = v10070 & 15;
  var v9332 = tempValue & 15;
  var v7794 = v9331 + v9332;
  var v9333;
  var v10071 = parentObj$$141.FCarry;
  if (v10071) {
    v9333 = 1;
  } else {
    v9333 = 0;
  }
  var v7795 = v9333;
  var v4413 = v7794 + v7795;
  parentObj$$141.FHalfCarry = v4413 > 15;
  parentObj$$141.FCarry = dirtySum$$14 > 255;
  parentObj$$141.registerA = dirtySum$$14 & 255;
  var v4414 = parentObj$$141.registerA;
  parentObj$$141.FZero = v4414 == 0;
  parentObj$$141.FSubtract = false;
  return;
}
function v217(parentObj$$140) {
  var v7796 = parentObj$$140.registerA;
  var v7797 = parentObj$$140.registerE;
  var v4415 = v7796 + v7797;
  var v7798;
  var v9334 = parentObj$$140.FCarry;
  if (v9334) {
    v7798 = 1;
  } else {
    v7798 = 0;
  }
  var v4416 = v7798;
  var dirtySum$$13 = v4415 + v4416;
  var v10072 = parentObj$$140.registerA;
  var v9335 = v10072 & 15;
  var v10073 = parentObj$$140.registerE;
  var v9336 = v10073 & 15;
  var v7799 = v9335 + v9336;
  var v9337;
  var v10074 = parentObj$$140.FCarry;
  if (v10074) {
    v9337 = 1;
  } else {
    v9337 = 0;
  }
  var v7800 = v9337;
  var v4417 = v7799 + v7800;
  parentObj$$140.FHalfCarry = v4417 > 15;
  parentObj$$140.FCarry = dirtySum$$13 > 255;
  parentObj$$140.registerA = dirtySum$$13 & 255;
  var v4418 = parentObj$$140.registerA;
  parentObj$$140.FZero = v4418 == 0;
  parentObj$$140.FSubtract = false;
  return;
}
function v216(parentObj$$139) {
  var v7801 = parentObj$$139.registerA;
  var v7802 = parentObj$$139.registerD;
  var v4419 = v7801 + v7802;
  var v7803;
  var v9338 = parentObj$$139.FCarry;
  if (v9338) {
    v7803 = 1;
  } else {
    v7803 = 0;
  }
  var v4420 = v7803;
  var dirtySum$$12 = v4419 + v4420;
  var v10075 = parentObj$$139.registerA;
  var v9339 = v10075 & 15;
  var v10076 = parentObj$$139.registerD;
  var v9340 = v10076 & 15;
  var v7804 = v9339 + v9340;
  var v9341;
  var v10077 = parentObj$$139.FCarry;
  if (v10077) {
    v9341 = 1;
  } else {
    v9341 = 0;
  }
  var v7805 = v9341;
  var v4421 = v7804 + v7805;
  parentObj$$139.FHalfCarry = v4421 > 15;
  parentObj$$139.FCarry = dirtySum$$12 > 255;
  parentObj$$139.registerA = dirtySum$$12 & 255;
  var v4422 = parentObj$$139.registerA;
  parentObj$$139.FZero = v4422 == 0;
  parentObj$$139.FSubtract = false;
  return;
}
function v215(parentObj$$138) {
  var v7806 = parentObj$$138.registerA;
  var v7807 = parentObj$$138.registerC;
  var v4423 = v7806 + v7807;
  var v7808;
  var v9342 = parentObj$$138.FCarry;
  if (v9342) {
    v7808 = 1;
  } else {
    v7808 = 0;
  }
  var v4424 = v7808;
  var dirtySum$$11 = v4423 + v4424;
  var v10078 = parentObj$$138.registerA;
  var v9343 = v10078 & 15;
  var v10079 = parentObj$$138.registerC;
  var v9344 = v10079 & 15;
  var v7809 = v9343 + v9344;
  var v9345;
  var v10080 = parentObj$$138.FCarry;
  if (v10080) {
    v9345 = 1;
  } else {
    v9345 = 0;
  }
  var v7810 = v9345;
  var v4425 = v7809 + v7810;
  parentObj$$138.FHalfCarry = v4425 > 15;
  parentObj$$138.FCarry = dirtySum$$11 > 255;
  parentObj$$138.registerA = dirtySum$$11 & 255;
  var v4426 = parentObj$$138.registerA;
  parentObj$$138.FZero = v4426 == 0;
  parentObj$$138.FSubtract = false;
  return;
}
function v214(parentObj$$137) {
  var v7811 = parentObj$$137.registerA;
  var v7812 = parentObj$$137.registerB;
  var v4427 = v7811 + v7812;
  var v7813;
  var v9346 = parentObj$$137.FCarry;
  if (v9346) {
    v7813 = 1;
  } else {
    v7813 = 0;
  }
  var v4428 = v7813;
  var dirtySum$$10 = v4427 + v4428;
  var v10081 = parentObj$$137.registerA;
  var v9347 = v10081 & 15;
  var v10082 = parentObj$$137.registerB;
  var v9348 = v10082 & 15;
  var v7814 = v9347 + v9348;
  var v9349;
  var v10083 = parentObj$$137.FCarry;
  if (v10083) {
    v9349 = 1;
  } else {
    v9349 = 0;
  }
  var v7815 = v9349;
  var v4429 = v7814 + v7815;
  parentObj$$137.FHalfCarry = v4429 > 15;
  parentObj$$137.FCarry = dirtySum$$10 > 255;
  parentObj$$137.registerA = dirtySum$$10 & 255;
  var v4430 = parentObj$$137.registerA;
  parentObj$$137.FZero = v4430 == 0;
  parentObj$$137.FSubtract = false;
  return;
}
function v213(parentObj$$136) {
  var v7816 = parentObj$$136.registerA;
  var v4431 = v7816 & 8;
  parentObj$$136.FHalfCarry = v4431 == 8;
  var v4432 = parentObj$$136.registerA;
  parentObj$$136.FCarry = v4432 > 127;
  var v7817 = parentObj$$136.registerA;
  var v4433 = v7817 << 1;
  parentObj$$136.registerA = v4433 & 255;
  var v4434 = parentObj$$136.registerA;
  parentObj$$136.FZero = v4434 == 0;
  parentObj$$136.FSubtract = false;
  return;
}
function v212(parentObj$$135) {
  var v4435 = parentObj$$135.registerA;
  var v7818 = parentObj$$135.memoryReader;
  var v7819 = parentObj$$135.registersHL;
  var v7820 = parentObj$$135.registersHL;
  var v4436 = v7818[v7819](parentObj$$135, v7820);
  var dirtySum$$9 = v4435 + v4436;
  var v4437 = dirtySum$$9 & 15;
  var v7821 = parentObj$$135.registerA;
  var v4438 = v7821 & 15;
  parentObj$$135.FHalfCarry = v4437 < v4438;
  parentObj$$135.FCarry = dirtySum$$9 > 255;
  parentObj$$135.registerA = dirtySum$$9 & 255;
  var v4439 = parentObj$$135.registerA;
  parentObj$$135.FZero = v4439 == 0;
  parentObj$$135.FSubtract = false;
  return;
}
function v211(parentObj$$134) {
  var v4440 = parentObj$$134.registerA;
  var v7822 = parentObj$$134.registersHL;
  var v4441 = v7822 & 255;
  var dirtySum$$8 = v4440 + v4441;
  var v4442 = dirtySum$$8 & 15;
  var v7823 = parentObj$$134.registerA;
  var v4443 = v7823 & 15;
  parentObj$$134.FHalfCarry = v4442 < v4443;
  parentObj$$134.FCarry = dirtySum$$8 > 255;
  parentObj$$134.registerA = dirtySum$$8 & 255;
  var v4444 = parentObj$$134.registerA;
  parentObj$$134.FZero = v4444 == 0;
  parentObj$$134.FSubtract = false;
  return;
}
function v210(parentObj$$133) {
  var v4445 = parentObj$$133.registerA;
  var v7824 = parentObj$$133.registersHL;
  var v4446 = v7824 >> 8;
  var dirtySum$$7 = v4445 + v4446;
  var v4447 = dirtySum$$7 & 15;
  var v7825 = parentObj$$133.registerA;
  var v4448 = v7825 & 15;
  parentObj$$133.FHalfCarry = v4447 < v4448;
  parentObj$$133.FCarry = dirtySum$$7 > 255;
  parentObj$$133.registerA = dirtySum$$7 & 255;
  var v4449 = parentObj$$133.registerA;
  parentObj$$133.FZero = v4449 == 0;
  parentObj$$133.FSubtract = false;
  return;
}
function v209(parentObj$$132) {
  var v4450 = parentObj$$132.registerA;
  var v4451 = parentObj$$132.registerE;
  var dirtySum$$6 = v4450 + v4451;
  var v4452 = dirtySum$$6 & 15;
  var v7826 = parentObj$$132.registerA;
  var v4453 = v7826 & 15;
  parentObj$$132.FHalfCarry = v4452 < v4453;
  parentObj$$132.FCarry = dirtySum$$6 > 255;
  parentObj$$132.registerA = dirtySum$$6 & 255;
  var v4454 = parentObj$$132.registerA;
  parentObj$$132.FZero = v4454 == 0;
  parentObj$$132.FSubtract = false;
  return;
}
function v208(parentObj$$131) {
  var v4455 = parentObj$$131.registerA;
  var v4456 = parentObj$$131.registerD;
  var dirtySum$$5 = v4455 + v4456;
  var v4457 = dirtySum$$5 & 15;
  var v7827 = parentObj$$131.registerA;
  var v4458 = v7827 & 15;
  parentObj$$131.FHalfCarry = v4457 < v4458;
  parentObj$$131.FCarry = dirtySum$$5 > 255;
  parentObj$$131.registerA = dirtySum$$5 & 255;
  var v4459 = parentObj$$131.registerA;
  parentObj$$131.FZero = v4459 == 0;
  parentObj$$131.FSubtract = false;
  return;
}
function v207(parentObj$$130) {
  var v4460 = parentObj$$130.registerA;
  var v4461 = parentObj$$130.registerC;
  var dirtySum$$4 = v4460 + v4461;
  var v4462 = dirtySum$$4 & 15;
  var v7828 = parentObj$$130.registerA;
  var v4463 = v7828 & 15;
  parentObj$$130.FHalfCarry = v4462 < v4463;
  parentObj$$130.FCarry = dirtySum$$4 > 255;
  parentObj$$130.registerA = dirtySum$$4 & 255;
  var v4464 = parentObj$$130.registerA;
  parentObj$$130.FZero = v4464 == 0;
  parentObj$$130.FSubtract = false;
  return;
}
function v206(parentObj$$129) {
  var v4465 = parentObj$$129.registerA;
  var v4466 = parentObj$$129.registerB;
  var dirtySum$$3 = v4465 + v4466;
  var v4467 = dirtySum$$3 & 15;
  var v7829 = parentObj$$129.registerA;
  var v4468 = v7829 & 15;
  parentObj$$129.FHalfCarry = v4467 < v4468;
  parentObj$$129.FCarry = dirtySum$$3 > 255;
  parentObj$$129.registerA = dirtySum$$3 & 255;
  var v4469 = parentObj$$129.registerA;
  parentObj$$129.FZero = v4469 == 0;
  parentObj$$129.FSubtract = false;
  return;
}
function v205(parentObj$$128) {
  return;
}
function v204(parentObj$$127) {
  var v4470 = parentObj$$127.memoryReader;
  var v4471 = parentObj$$127.registersHL;
  var v4472 = parentObj$$127.registersHL;
  var v10760 = v4470[v4471](parentObj$$127, v4472);
  parentObj$$127.registerA = v10760;
  return;
}
function v203(parentObj$$126) {
  var v4473 = parentObj$$126.registersHL;
  parentObj$$126.registerA = v4473 & 255;
  return;
}
function v202(parentObj$$125) {
  var v4474 = parentObj$$125.registersHL;
  parentObj$$125.registerA = v4474 >> 8;
  return;
}
function v201(parentObj$$124) {
  parentObj$$124.registerA = parentObj$$124.registerE;
  return;
}
function v200(parentObj$$123) {
  parentObj$$123.registerA = parentObj$$123.registerD;
  return;
}
function v199(parentObj$$122) {
  parentObj$$122.registerA = parentObj$$122.registerC;
  return;
}
function v198(parentObj$$121) {
  parentObj$$121.registerA = parentObj$$121.registerB;
  return;
}
function v197(parentObj$$120) {
  var v4475 = parentObj$$120.memoryWriter;
  var v4476 = parentObj$$120.registersHL;
  var v4477 = parentObj$$120.registersHL;
  var v4478 = parentObj$$120.registerA;
  v4475[v4476](parentObj$$120, v4477, v4478);
  return;
}
function v196(parentObj$$119) {
  var v10084 = parentObj$$119.interruptsEnabled;
  var v10085 = parentObj$$119.interruptsRequested;
  var v9350 = v10084 & v10085;
  var v7830 = v9350 & 31;
  var v4480 = v7830 > 0;
  if (v4480) {
    var v9351 = parentObj$$119.cGBC;
    var v7831 = !v9351;
    if (v7831) {
      var v9352 = parentObj$$119.usedBootROM;
      v7831 = !v9352;
    }
    var v4479 = v7831;
    if (v4479) {
      parentObj$$119.skipPCIncrement = true;
    } else {
      var v7832 = parentObj$$119.CPUTicks;
      parentObj$$119.CPUTicks = v7832 + 4;
    }
  } else {
    parentObj$$119.calculateHALTPeriod();
  }
  return;
}
function v195(parentObj$$118) {
  var v4481 = parentObj$$118.memoryWriter;
  var v4482 = parentObj$$118.registersHL;
  var v4483 = parentObj$$118.registersHL;
  var v7833 = parentObj$$118.registersHL;
  var v4484 = v7833 & 255;
  v4481[v4482](parentObj$$118, v4483, v4484);
  return;
}
function v194(parentObj$$117) {
  var v4485 = parentObj$$117.memoryWriter;
  var v4486 = parentObj$$117.registersHL;
  var v4487 = parentObj$$117.registersHL;
  var v7834 = parentObj$$117.registersHL;
  var v4488 = v7834 >> 8;
  v4485[v4486](parentObj$$117, v4487, v4488);
  return;
}
function v193(parentObj$$116) {
  var v4489 = parentObj$$116.memoryWriter;
  var v4490 = parentObj$$116.registersHL;
  var v4491 = parentObj$$116.registersHL;
  var v4492 = parentObj$$116.registerE;
  v4489[v4490](parentObj$$116, v4491, v4492);
  return;
}
function v192(parentObj$$115) {
  var v4493 = parentObj$$115.memoryWriter;
  var v4494 = parentObj$$115.registersHL;
  var v4495 = parentObj$$115.registersHL;
  var v4496 = parentObj$$115.registerD;
  v4493[v4494](parentObj$$115, v4495, v4496);
  return;
}
function v191(parentObj$$114) {
  var v4497 = parentObj$$114.memoryWriter;
  var v4498 = parentObj$$114.registersHL;
  var v4499 = parentObj$$114.registersHL;
  var v4500 = parentObj$$114.registerC;
  v4497[v4498](parentObj$$114, v4499, v4500);
  return;
}
function v190(parentObj$$113) {
  var v4501 = parentObj$$113.memoryWriter;
  var v4502 = parentObj$$113.registersHL;
  var v4503 = parentObj$$113.registersHL;
  var v4504 = parentObj$$113.registerB;
  v4501[v4502](parentObj$$113, v4503, v4504);
  return;
}
function v189(parentObj$$112) {
  var v7835 = parentObj$$112.registersHL;
  var v4505 = v7835 & 65280;
  var v4506 = parentObj$$112.registerA;
  parentObj$$112.registersHL = v4505 | v4506;
  return;
}
function v188(parentObj$$111) {
  var v7836 = parentObj$$111.registersHL;
  var v4507 = v7836 & 65280;
  var v7837 = parentObj$$111.memoryReader;
  var v7838 = parentObj$$111.registersHL;
  var v7839 = parentObj$$111.registersHL;
  var v4508 = v7837[v7838](parentObj$$111, v7839);
  parentObj$$111.registersHL = v4507 | v4508;
  return;
}
function v187(parentObj$$110) {
  return;
}
function v186(parentObj$$109) {
  var v7840 = parentObj$$109.registersHL;
  var v4509 = v7840 & 65280;
  var v7841 = parentObj$$109.registersHL;
  var v4510 = v7841 >> 8;
  parentObj$$109.registersHL = v4509 | v4510;
  return;
}
function v185(parentObj$$108) {
  var v7842 = parentObj$$108.registersHL;
  var v4511 = v7842 & 65280;
  var v4512 = parentObj$$108.registerE;
  parentObj$$108.registersHL = v4511 | v4512;
  return;
}
function v184(parentObj$$107) {
  var v7843 = parentObj$$107.registersHL;
  var v4513 = v7843 & 65280;
  var v4514 = parentObj$$107.registerD;
  parentObj$$107.registersHL = v4513 | v4514;
  return;
}
function v183(parentObj$$106) {
  var v7844 = parentObj$$106.registersHL;
  var v4515 = v7844 & 65280;
  var v4516 = parentObj$$106.registerC;
  parentObj$$106.registersHL = v4515 | v4516;
  return;
}
function v182(parentObj$$105) {
  var v7845 = parentObj$$105.registersHL;
  var v4517 = v7845 & 65280;
  var v4518 = parentObj$$105.registerB;
  parentObj$$105.registersHL = v4517 | v4518;
  return;
}
function v181(parentObj$$104) {
  var v7846 = parentObj$$104.registerA;
  var v4519 = v7846 << 8;
  var v7847 = parentObj$$104.registersHL;
  var v4520 = v7847 & 255;
  parentObj$$104.registersHL = v4519 | v4520;
  return;
}
function v180(parentObj$$103) {
  var v9353 = parentObj$$103.memoryReader;
  var v9354 = parentObj$$103.registersHL;
  var v9355 = parentObj$$103.registersHL;
  var v7848 = v9353[v9354](parentObj$$103, v9355);
  var v4521 = v7848 << 8;
  var v7849 = parentObj$$103.registersHL;
  var v4522 = v7849 & 255;
  parentObj$$103.registersHL = v4521 | v4522;
  return;
}
function v179(parentObj$$102) {
  var v7850 = parentObj$$102.registersHL;
  var v4523 = v7850 & 255;
  parentObj$$102.registersHL = v4523 * 257;
  return;
}
function v178(parentObj$$101) {
  return;
}
function v177(parentObj$$100) {
  var v7851 = parentObj$$100.registerE;
  var v4524 = v7851 << 8;
  var v7852 = parentObj$$100.registersHL;
  var v4525 = v7852 & 255;
  parentObj$$100.registersHL = v4524 | v4525;
  return;
}
function v176(parentObj$$99) {
  var v7853 = parentObj$$99.registerD;
  var v4526 = v7853 << 8;
  var v7854 = parentObj$$99.registersHL;
  var v4527 = v7854 & 255;
  parentObj$$99.registersHL = v4526 | v4527;
  return;
}
function v175(parentObj$$98) {
  var v7855 = parentObj$$98.registerC;
  var v4528 = v7855 << 8;
  var v7856 = parentObj$$98.registersHL;
  var v4529 = v7856 & 255;
  parentObj$$98.registersHL = v4528 | v4529;
  return;
}
function v174(parentObj$$97) {
  var v7857 = parentObj$$97.registerB;
  var v4530 = v7857 << 8;
  var v7858 = parentObj$$97.registersHL;
  var v4531 = v7858 & 255;
  parentObj$$97.registersHL = v4530 | v4531;
  return;
}
function v173(parentObj$$96) {
  parentObj$$96.registerE = parentObj$$96.registerA;
  return;
}
function v172(parentObj$$95) {
  var v4532 = parentObj$$95.memoryReader;
  var v4533 = parentObj$$95.registersHL;
  var v4534 = parentObj$$95.registersHL;
  var v10761 = v4532[v4533](parentObj$$95, v4534);
  parentObj$$95.registerE = v10761;
  return;
}
function v171(parentObj$$94) {
  var v4535 = parentObj$$94.registersHL;
  parentObj$$94.registerE = v4535 & 255;
  return;
}
function v170(parentObj$$93) {
  var v4536 = parentObj$$93.registersHL;
  parentObj$$93.registerE = v4536 >> 8;
  return;
}
function v169(parentObj$$92) {
  return;
}
function v168(parentObj$$91) {
  parentObj$$91.registerE = parentObj$$91.registerD;
  return;
}
function v167(parentObj$$90) {
  parentObj$$90.registerE = parentObj$$90.registerC;
  return;
}
function v166(parentObj$$89) {
  parentObj$$89.registerE = parentObj$$89.registerB;
  return;
}
function v165(parentObj$$88) {
  parentObj$$88.registerD = parentObj$$88.registerA;
  return;
}
function v164(parentObj$$87) {
  var v4537 = parentObj$$87.memoryReader;
  var v4538 = parentObj$$87.registersHL;
  var v4539 = parentObj$$87.registersHL;
  var v10762 = v4537[v4538](parentObj$$87, v4539);
  parentObj$$87.registerD = v10762;
  return;
}
function v163(parentObj$$86) {
  var v4540 = parentObj$$86.registersHL;
  parentObj$$86.registerD = v4540 & 255;
  return;
}
function v162(parentObj$$85) {
  var v4541 = parentObj$$85.registersHL;
  parentObj$$85.registerD = v4541 >> 8;
  return;
}
function v161(parentObj$$84) {
  parentObj$$84.registerD = parentObj$$84.registerE;
  return;
}
function v160(parentObj$$83) {
  return;
}
function v159(parentObj$$82) {
  parentObj$$82.registerD = parentObj$$82.registerC;
  return;
}
function v158(parentObj$$81) {
  parentObj$$81.registerD = parentObj$$81.registerB;
  return;
}
function v157(parentObj$$80) {
  parentObj$$80.registerC = parentObj$$80.registerA;
  return;
}
function v156(parentObj$$79) {
  var v4542 = parentObj$$79.memoryReader;
  var v4543 = parentObj$$79.registersHL;
  var v4544 = parentObj$$79.registersHL;
  var v10763 = v4542[v4543](parentObj$$79, v4544);
  parentObj$$79.registerC = v10763;
  return;
}
function v155(parentObj$$78) {
  var v4545 = parentObj$$78.registersHL;
  parentObj$$78.registerC = v4545 & 255;
  return;
}
function v154(parentObj$$77) {
  var v4546 = parentObj$$77.registersHL;
  parentObj$$77.registerC = v4546 >> 8;
  return;
}
function v153(parentObj$$76) {
  parentObj$$76.registerC = parentObj$$76.registerE;
  return;
}
function v152(parentObj$$75) {
  parentObj$$75.registerC = parentObj$$75.registerD;
  return;
}
function v151(parentObj$$74) {
  return;
}
function v150(parentObj$$73) {
  parentObj$$73.registerC = parentObj$$73.registerB;
  return;
}
function v149(parentObj$$72) {
  parentObj$$72.registerB = parentObj$$72.registerA;
  return;
}
function v148(parentObj$$71) {
  var v4547 = parentObj$$71.memoryReader;
  var v4548 = parentObj$$71.registersHL;
  var v4549 = parentObj$$71.registersHL;
  var v10764 = v4547[v4548](parentObj$$71, v4549);
  parentObj$$71.registerB = v10764;
  return;
}
function v147(parentObj$$70) {
  var v4550 = parentObj$$70.registersHL;
  parentObj$$70.registerB = v4550 & 255;
  return;
}
function v146(parentObj$$69) {
  var v4551 = parentObj$$69.registersHL;
  parentObj$$69.registerB = v4551 >> 8;
  return;
}
function v145(parentObj$$68) {
  parentObj$$68.registerB = parentObj$$68.registerE;
  return;
}
function v144(parentObj$$67) {
  parentObj$$67.registerB = parentObj$$67.registerD;
  return;
}
function v143(parentObj$$66) {
  parentObj$$66.registerB = parentObj$$66.registerC;
  return;
}
function v142(parentObj$$65) {
  return;
}
function v141(parentObj$$64) {
  var v4552 = parentObj$$64.FCarry;
  parentObj$$64.FCarry = !v4552;
  parentObj$$64.FSubtract = parentObj$$64.FHalfCarry = false;
  return;
}
function v140(parentObj$$63) {
  var v4553 = parentObj$$63.memoryReader;
  var v4554 = parentObj$$63.programCounter;
  var v4555 = parentObj$$63.programCounter;
  var v10765 = v4553[v4554](parentObj$$63, v4555);
  parentObj$$63.registerA = v10765;
  var v7859 = parentObj$$63.programCounter;
  var v4556 = v7859 + 1;
  parentObj$$63.programCounter = v4556 & 65535;
  return;
}
function v139(parentObj$$62) {
  var v7860 = parentObj$$62.registerA;
  var v4557 = v7860 - 1;
  parentObj$$62.registerA = v4557 & 255;
  var v4558 = parentObj$$62.registerA;
  parentObj$$62.FZero = v4558 == 0;
  var v7861 = parentObj$$62.registerA;
  var v4559 = v7861 & 15;
  parentObj$$62.FHalfCarry = v4559 == 15;
  parentObj$$62.FSubtract = true;
  return;
}
function v138(parentObj$$61) {
  var v7862 = parentObj$$61.registerA;
  var v4560 = v7862 + 1;
  parentObj$$61.registerA = v4560 & 255;
  var v4561 = parentObj$$61.registerA;
  parentObj$$61.FZero = v4561 == 0;
  var v7863 = parentObj$$61.registerA;
  var v4562 = v7863 & 15;
  parentObj$$61.FHalfCarry = v4562 == 0;
  parentObj$$61.FSubtract = false;
  return;
}
function v137(parentObj$$60) {
  var v7864 = parentObj$$60.stackPointer;
  var v4563 = v7864 - 1;
  parentObj$$60.stackPointer = v4563 & 65535;
  return;
}
function v136(parentObj$$59) {
  var v4564 = parentObj$$59.memoryReader;
  var v4565 = parentObj$$59.registersHL;
  var v4566 = parentObj$$59.registersHL;
  var v10766 = v4564[v4565](parentObj$$59, v4566);
  parentObj$$59.registerA = v10766;
  var v7865 = parentObj$$59.registersHL;
  var v4567 = v7865 - 1;
  parentObj$$59.registersHL = v4567 & 65535;
  return;
}
function v135(parentObj$$58) {
  var v4568 = parentObj$$58.registersHL;
  var v4569 = parentObj$$58.stackPointer;
  var dirtySum$$2 = v4568 + v4569;
  var v7866 = parentObj$$58.registersHL;
  var v4570 = v7866 & 4095;
  var v4571 = dirtySum$$2 & 4095;
  parentObj$$58.FHalfCarry = v4570 > v4571;
  parentObj$$58.FCarry = dirtySum$$2 > 65535;
  parentObj$$58.registersHL = dirtySum$$2 & 65535;
  parentObj$$58.FSubtract = false;
  return;
}
function v134(parentObj$$57) {
  var v4574 = parentObj$$57.FCarry;
  if (v4574) {
    var v9356 = parentObj$$57.programCounter;
    var v10531 = parentObj$$57.memoryReader;
    var v10532 = parentObj$$57.programCounter;
    var v10533 = parentObj$$57.programCounter;
    var v10377 = v10531[v10532](parentObj$$57, v10533);
    var v10086 = v10377 << 24;
    var v9357 = v10086 >> 24;
    var v7867 = v9356 + v9357;
    var v4572 = v7867 + 1;
    parentObj$$57.programCounter = v4572 & 65535;
    var v7868 = parentObj$$57.CPUTicks;
    parentObj$$57.CPUTicks = v7868 + 4;
  } else {
    var v7869 = parentObj$$57.programCounter;
    var v4573 = v7869 + 1;
    parentObj$$57.programCounter = v4573 & 65535;
  }
  return;
}
function v133(parentObj$$56) {
  parentObj$$56.FCarry = true;
  parentObj$$56.FSubtract = parentObj$$56.FHalfCarry = false;
  return;
}
function v132(parentObj$$55) {
  var v4575 = parentObj$$55.memoryWriter;
  var v4576 = parentObj$$55.registersHL;
  var v4577 = parentObj$$55.registersHL;
  var v7870 = parentObj$$55.memoryReader;
  var v7871 = parentObj$$55.programCounter;
  var v7872 = parentObj$$55.programCounter;
  var v4578 = v7870[v7871](parentObj$$55, v7872);
  v4575[v4576](parentObj$$55, v4577, v4578);
  var v7873 = parentObj$$55.programCounter;
  var v4579 = v7873 + 1;
  parentObj$$55.programCounter = v4579 & 65535;
  return;
}
function v131(parentObj$$54) {
  var v9358 = parentObj$$54.memoryReader;
  var v9359 = parentObj$$54.registersHL;
  var v9360 = parentObj$$54.registersHL;
  var v7874 = v9358[v9359](parentObj$$54, v9360);
  var v4580 = v7874 - 1;
  var temp_var$$6 = v4580 & 255;
  parentObj$$54.FZero = temp_var$$6 == 0;
  var v4581 = temp_var$$6 & 15;
  parentObj$$54.FHalfCarry = v4581 == 15;
  parentObj$$54.FSubtract = true;
  var v4582 = parentObj$$54.memoryWriter;
  var v4583 = parentObj$$54.registersHL;
  var v4584 = parentObj$$54.registersHL;
  v4582[v4583](parentObj$$54, v4584, temp_var$$6);
  return;
}
function v130(parentObj$$53) {
  var v9361 = parentObj$$53.memoryReader;
  var v9362 = parentObj$$53.registersHL;
  var v9363 = parentObj$$53.registersHL;
  var v7875 = v9361[v9362](parentObj$$53, v9363);
  var v4585 = v7875 + 1;
  var temp_var$$5 = v4585 & 255;
  parentObj$$53.FZero = temp_var$$5 == 0;
  var v4586 = temp_var$$5 & 15;
  parentObj$$53.FHalfCarry = v4586 == 0;
  parentObj$$53.FSubtract = false;
  var v4587 = parentObj$$53.memoryWriter;
  var v4588 = parentObj$$53.registersHL;
  var v4589 = parentObj$$53.registersHL;
  v4587[v4588](parentObj$$53, v4589, temp_var$$5);
  return;
}
function v129(parentObj$$52) {
  var v7876 = parentObj$$52.stackPointer;
  var v4590 = v7876 + 1;
  parentObj$$52.stackPointer = v4590 & 65535;
  return;
}
function v128(parentObj$$51) {
  var v4591 = parentObj$$51.memoryWriter;
  var v4592 = parentObj$$51.registersHL;
  var v4593 = parentObj$$51.registersHL;
  var v4594 = parentObj$$51.registerA;
  v4591[v4592](parentObj$$51, v4593, v4594);
  var v7877 = parentObj$$51.registersHL;
  var v4595 = v7877 - 1;
  parentObj$$51.registersHL = v4595 & 65535;
  return;
}
function v127(parentObj$$50) {
  var v10378 = parentObj$$50.programCounter;
  var v10087 = v10378 + 1;
  var v9364 = v10087 & 65535;
  var v7878 = parentObj$$50.memoryRead(v9364);
  var v4596 = v7878 << 8;
  var v7879 = parentObj$$50.memoryReader;
  var v7880 = parentObj$$50.programCounter;
  var v7881 = parentObj$$50.programCounter;
  var v4597 = v7879[v7880](parentObj$$50, v7881);
  parentObj$$50.stackPointer = v4596 | v4597;
  var v7882 = parentObj$$50.programCounter;
  var v4598 = v7882 + 2;
  parentObj$$50.programCounter = v4598 & 65535;
  return;
}
function v126(parentObj$$49) {
  var v7883 = parentObj$$49.FCarry;
  var v4601 = !v7883;
  if (v4601) {
    var v9365 = parentObj$$49.programCounter;
    var v10534 = parentObj$$49.memoryReader;
    var v10535 = parentObj$$49.programCounter;
    var v10536 = parentObj$$49.programCounter;
    var v10379 = v10534[v10535](parentObj$$49, v10536);
    var v10088 = v10379 << 24;
    var v9366 = v10088 >> 24;
    var v7884 = v9365 + v9366;
    var v4599 = v7884 + 1;
    parentObj$$49.programCounter = v4599 & 65535;
    var v7885 = parentObj$$49.CPUTicks;
    parentObj$$49.CPUTicks = v7885 + 4;
  } else {
    var v7886 = parentObj$$49.programCounter;
    var v4600 = v7886 + 1;
    parentObj$$49.programCounter = v4600 & 65535;
  }
  return;
}
function v125(parentObj$$48) {
  var v7887 = parentObj$$48.registerA;
  parentObj$$48.registerA = v7887 ^ 255;
  parentObj$$48.FSubtract = parentObj$$48.FHalfCarry = true;
  return;
}
function v124(parentObj$$47) {
  var v7888 = parentObj$$47.registersHL;
  var v4602 = v7888 & 65280;
  var v7889 = parentObj$$47.memoryReader;
  var v7890 = parentObj$$47.programCounter;
  var v7891 = parentObj$$47.programCounter;
  var v4603 = v7889[v7890](parentObj$$47, v7891);
  parentObj$$47.registersHL = v4602 | v4603;
  var v7892 = parentObj$$47.programCounter;
  var v4604 = v7892 + 1;
  parentObj$$47.programCounter = v4604 & 65535;
  return;
}
function v123(parentObj$$46) {
  var v7893 = parentObj$$46.registersHL;
  var v4605 = v7893 - 1;
  var L$$1 = v4605 & 255;
  parentObj$$46.FZero = L$$1 == 0;
  var v4606 = L$$1 & 15;
  parentObj$$46.FHalfCarry = v4606 == 15;
  parentObj$$46.FSubtract = true;
  var v7894 = parentObj$$46.registersHL;
  var v4607 = v7894 & 65280;
  parentObj$$46.registersHL = v4607 | L$$1;
  return;
}
function v122(parentObj$$45) {
  var v7895 = parentObj$$45.registersHL;
  var v4608 = v7895 + 1;
  var L = v4608 & 255;
  parentObj$$45.FZero = L == 0;
  var v4609 = L & 15;
  parentObj$$45.FHalfCarry = v4609 == 0;
  parentObj$$45.FSubtract = false;
  var v7896 = parentObj$$45.registersHL;
  var v4610 = v7896 & 65280;
  parentObj$$45.registersHL = v4610 | L;
  return;
}
function v121(parentObj$$44) {
  var v7897 = parentObj$$44.registersHL;
  var v4611 = v7897 - 1;
  parentObj$$44.registersHL = v4611 & 65535;
  return;
}
function v120(parentObj$$43) {
  var v4612 = parentObj$$43.memoryReader;
  var v4613 = parentObj$$43.registersHL;
  var v4614 = parentObj$$43.registersHL;
  var v10767 = v4612[v4613](parentObj$$43, v4614);
  parentObj$$43.registerA = v10767;
  var v7898 = parentObj$$43.registersHL;
  var v4615 = v7898 + 1;
  parentObj$$43.registersHL = v4615 & 65535;
  return;
}
function v119(parentObj$$42) {
  var v7899 = parentObj$$42.registersHL;
  var v4616 = v7899 & 4095;
  parentObj$$42.FHalfCarry = v4616 > 2047;
  var v4617 = parentObj$$42.registersHL;
  parentObj$$42.FCarry = v4617 > 32767;
  var v7900 = parentObj$$42.registersHL;
  var v4618 = v7900 << 1;
  parentObj$$42.registersHL = v4618 & 65535;
  parentObj$$42.FSubtract = false;
  return;
}
function v118(parentObj$$41) {
  var v4621 = parentObj$$41.FZero;
  if (v4621) {
    var v9367 = parentObj$$41.programCounter;
    var v10537 = parentObj$$41.memoryReader;
    var v10538 = parentObj$$41.programCounter;
    var v10539 = parentObj$$41.programCounter;
    var v10380 = v10537[v10538](parentObj$$41, v10539);
    var v10089 = v10380 << 24;
    var v9368 = v10089 >> 24;
    var v7901 = v9367 + v9368;
    var v4619 = v7901 + 1;
    parentObj$$41.programCounter = v4619 & 65535;
    var v7902 = parentObj$$41.CPUTicks;
    parentObj$$41.CPUTicks = v7902 + 4;
  } else {
    var v7903 = parentObj$$41.programCounter;
    var v4620 = v7903 + 1;
    parentObj$$41.programCounter = v4620 & 65535;
  }
  return;
}
function v117(parentObj$$40) {
  var v7904 = parentObj$$40.FSubtract;
  var v4632 = !v7904;
  if (v4632) {
    var v7905 = parentObj$$40.FCarry;
    var v9370 = !v7905;
    if (v9370) {
      var v9369 = parentObj$$40.registerA;
      v7905 = v9369 > 153;
    }
    var v4623 = v7905;
    if (v4623) {
      var v7906 = parentObj$$40.registerA;
      var v4622 = v7906 + 96;
      parentObj$$40.registerA = v4622 & 255;
      parentObj$$40.FCarry = true;
    }
    var v7907 = parentObj$$40.FHalfCarry;
    var v9372 = !v7907;
    if (v9372) {
      var v10090 = parentObj$$40.registerA;
      var v9371 = v10090 & 15;
      v7907 = v9371 > 9;
    }
    var v4625 = v7907;
    if (v4625) {
      var v7908 = parentObj$$40.registerA;
      var v4624 = v7908 + 6;
      parentObj$$40.registerA = v4624 & 255;
      parentObj$$40.FHalfCarry = false;
    }
  } else {
    var v7909 = parentObj$$40.FCarry;
    if (v7909) {
      v7909 = parentObj$$40.FHalfCarry;
    }
    var v4631 = v7909;
    if (v4631) {
      var v7910 = parentObj$$40.registerA;
      var v4626 = v7910 + 154;
      parentObj$$40.registerA = v4626 & 255;
      parentObj$$40.FHalfCarry = false;
    } else {
      var v4630 = parentObj$$40.FCarry;
      if (v4630) {
        var v7911 = parentObj$$40.registerA;
        var v4627 = v7911 + 160;
        parentObj$$40.registerA = v4627 & 255;
      } else {
        var v4629 = parentObj$$40.FHalfCarry;
        if (v4629) {
          var v7912 = parentObj$$40.registerA;
          var v4628 = v7912 + 250;
          parentObj$$40.registerA = v4628 & 255;
          parentObj$$40.FHalfCarry = false;
        }
      }
    }
  }
  var v4633 = parentObj$$40.registerA;
  parentObj$$40.FZero = v4633 == 0;
  return;
}
function v116(parentObj$$39) {
  var v9373 = parentObj$$39.memoryReader;
  var v9374 = parentObj$$39.programCounter;
  var v9375 = parentObj$$39.programCounter;
  var v7913 = v9373[v9374](parentObj$$39, v9375);
  var v4634 = v7913 << 8;
  var v7914 = parentObj$$39.registersHL;
  var v4635 = v7914 & 255;
  parentObj$$39.registersHL = v4634 | v4635;
  var v7915 = parentObj$$39.programCounter;
  var v4636 = v7915 + 1;
  parentObj$$39.programCounter = v4636 & 65535;
  return;
}
function v115(parentObj$$38) {
  var v9376 = parentObj$$38.registersHL;
  var v7916 = v9376 >> 8;
  var v4637 = v7916 - 1;
  var H$$1 = v4637 & 255;
  parentObj$$38.FZero = H$$1 == 0;
  var v4638 = H$$1 & 15;
  parentObj$$38.FHalfCarry = v4638 == 15;
  parentObj$$38.FSubtract = true;
  var v4639 = H$$1 << 8;
  var v7917 = parentObj$$38.registersHL;
  var v4640 = v7917 & 255;
  parentObj$$38.registersHL = v4639 | v4640;
  return;
}
function v114(parentObj$$37) {
  var v9377 = parentObj$$37.registersHL;
  var v7918 = v9377 >> 8;
  var v4641 = v7918 + 1;
  var H = v4641 & 255;
  parentObj$$37.FZero = H == 0;
  var v4642 = H & 15;
  parentObj$$37.FHalfCarry = v4642 == 0;
  parentObj$$37.FSubtract = false;
  var v4643 = H << 8;
  var v7919 = parentObj$$37.registersHL;
  var v4644 = v7919 & 255;
  parentObj$$37.registersHL = v4643 | v4644;
  return;
}
function v113(parentObj$$36) {
  var v7920 = parentObj$$36.registersHL;
  var v4645 = v7920 + 1;
  parentObj$$36.registersHL = v4645 & 65535;
  return;
}
function v112(parentObj$$35) {
  var v4646 = parentObj$$35.memoryWriter;
  var v4647 = parentObj$$35.registersHL;
  var v4648 = parentObj$$35.registersHL;
  var v4649 = parentObj$$35.registerA;
  v4646[v4647](parentObj$$35, v4648, v4649);
  var v7921 = parentObj$$35.registersHL;
  var v4650 = v7921 + 1;
  parentObj$$35.registersHL = v4650 & 65535;
  return;
}
function v111(parentObj$$34) {
  var v10381 = parentObj$$34.programCounter;
  var v10091 = v10381 + 1;
  var v9378 = v10091 & 65535;
  var v7922 = parentObj$$34.memoryRead(v9378);
  var v4651 = v7922 << 8;
  var v7923 = parentObj$$34.memoryReader;
  var v7924 = parentObj$$34.programCounter;
  var v7925 = parentObj$$34.programCounter;
  var v4652 = v7923[v7924](parentObj$$34, v7925);
  parentObj$$34.registersHL = v4651 | v4652;
  var v7926 = parentObj$$34.programCounter;
  var v4653 = v7926 + 2;
  parentObj$$34.programCounter = v4653 & 65535;
  return;
}
function v110(parentObj$$33) {
  var v7927 = parentObj$$33.FZero;
  var v4656 = !v7927;
  if (v4656) {
    var v9379 = parentObj$$33.programCounter;
    var v10540 = parentObj$$33.memoryReader;
    var v10541 = parentObj$$33.programCounter;
    var v10542 = parentObj$$33.programCounter;
    var v10382 = v10540[v10541](parentObj$$33, v10542);
    var v10092 = v10382 << 24;
    var v9380 = v10092 >> 24;
    var v7928 = v9379 + v9380;
    var v4654 = v7928 + 1;
    parentObj$$33.programCounter = v4654 & 65535;
    var v7929 = parentObj$$33.CPUTicks;
    parentObj$$33.CPUTicks = v7929 + 4;
  } else {
    var v7930 = parentObj$$33.programCounter;
    var v4655 = v7930 + 1;
    parentObj$$33.programCounter = v4655 & 65535;
  }
  return;
}
function v109(parentObj$$32) {
  var v4657;
  var v7931 = parentObj$$32.FCarry;
  if (v7931) {
    v4657 = 128;
  } else {
    v4657 = 0;
  }
  var carry_flag$$1 = v4657;
  var v7932 = parentObj$$32.registerA;
  var v4658 = v7932 & 1;
  parentObj$$32.FCarry = v4658 == 1;
  var v7933 = parentObj$$32.registerA;
  var v4659 = v7933 >> 1;
  parentObj$$32.registerA = v4659 | carry_flag$$1;
  parentObj$$32.FZero = parentObj$$32.FSubtract = parentObj$$32.FHalfCarry = false;
  return;
}
function v108(parentObj$$31) {
  var v4660 = parentObj$$31.memoryReader;
  var v4661 = parentObj$$31.programCounter;
  var v4662 = parentObj$$31.programCounter;
  var v10768 = v4660[v4661](parentObj$$31, v4662);
  parentObj$$31.registerE = v10768;
  var v7934 = parentObj$$31.programCounter;
  var v4663 = v7934 + 1;
  parentObj$$31.programCounter = v4663 & 65535;
  return;
}
function v107(parentObj$$30) {
  var v7935 = parentObj$$30.registerE;
  var v4664 = v7935 - 1;
  parentObj$$30.registerE = v4664 & 255;
  var v4665 = parentObj$$30.registerE;
  parentObj$$30.FZero = v4665 == 0;
  var v7936 = parentObj$$30.registerE;
  var v4666 = v7936 & 15;
  parentObj$$30.FHalfCarry = v4666 == 15;
  parentObj$$30.FSubtract = true;
  return;
}
function v106(parentObj$$29) {
  var v7937 = parentObj$$29.registerE;
  var v4667 = v7937 + 1;
  parentObj$$29.registerE = v4667 & 255;
  var v4668 = parentObj$$29.registerE;
  parentObj$$29.FZero = v4668 == 0;
  var v7938 = parentObj$$29.registerE;
  var v4669 = v7938 & 15;
  parentObj$$29.FHalfCarry = v4669 == 0;
  parentObj$$29.FSubtract = false;
  return;
}
function v105(parentObj$$28) {
  var v10093 = parentObj$$28.registerD;
  var v9381 = v10093 << 8;
  var v9382 = parentObj$$28.registerE;
  var v7939 = v9381 | v9382;
  var v4670 = v7939 - 1;
  var temp_var$$4 = v4670 & 65535;
  parentObj$$28.registerD = temp_var$$4 >> 8;
  parentObj$$28.registerE = temp_var$$4 & 255;
  return;
}
function v104(parentObj$$27) {
  var v9383 = parentObj$$27.registerD;
  var v7940 = v9383 << 8;
  var v7941 = parentObj$$27.registerE;
  var v4671 = v7940 | v7941;
  var v10769 = parentObj$$27.memoryRead(v4671);
  parentObj$$27.registerA = v10769;
  return;
}
function v103(parentObj$$26) {
  var v4672 = parentObj$$26.registersHL;
  var v9384 = parentObj$$26.registerD;
  var v7942 = v9384 << 8;
  var v7943 = parentObj$$26.registerE;
  var v4673 = v7942 | v7943;
  var dirtySum$$1 = v4672 + v4673;
  var v7944 = parentObj$$26.registersHL;
  var v4674 = v7944 & 4095;
  var v4675 = dirtySum$$1 & 4095;
  parentObj$$26.FHalfCarry = v4674 > v4675;
  parentObj$$26.FCarry = dirtySum$$1 > 65535;
  parentObj$$26.registersHL = dirtySum$$1 & 65535;
  parentObj$$26.FSubtract = false;
  return;
}
function v102(parentObj$$25) {
  var v9385 = parentObj$$25.programCounter;
  var v10543 = parentObj$$25.memoryReader;
  var v10544 = parentObj$$25.programCounter;
  var v10545 = parentObj$$25.programCounter;
  var v10383 = v10543[v10544](parentObj$$25, v10545);
  var v10094 = v10383 << 24;
  var v9386 = v10094 >> 24;
  var v7945 = v9385 + v9386;
  var v4676 = v7945 + 1;
  parentObj$$25.programCounter = v4676 & 65535;
  return;
}
function v101(parentObj$$24) {
  var v4677;
  var v7946 = parentObj$$24.FCarry;
  if (v7946) {
    v4677 = 1;
  } else {
    v4677 = 0;
  }
  var carry_flag = v4677;
  var v4678 = parentObj$$24.registerA;
  parentObj$$24.FCarry = v4678 > 127;
  var v9387 = parentObj$$24.registerA;
  var v7947 = v9387 << 1;
  var v4679 = v7947 & 255;
  parentObj$$24.registerA = v4679 | carry_flag;
  parentObj$$24.FZero = parentObj$$24.FSubtract = parentObj$$24.FHalfCarry = false;
  return;
}
function v100(parentObj$$23) {
  var v4680 = parentObj$$23.memoryReader;
  var v4681 = parentObj$$23.programCounter;
  var v4682 = parentObj$$23.programCounter;
  var v10770 = v4680[v4681](parentObj$$23, v4682);
  parentObj$$23.registerD = v10770;
  var v7948 = parentObj$$23.programCounter;
  var v4683 = v7948 + 1;
  parentObj$$23.programCounter = v4683 & 65535;
  return;
}
function v99(parentObj$$22) {
  var v7949 = parentObj$$22.registerD;
  var v4684 = v7949 - 1;
  parentObj$$22.registerD = v4684 & 255;
  var v4685 = parentObj$$22.registerD;
  parentObj$$22.FZero = v4685 == 0;
  var v7950 = parentObj$$22.registerD;
  var v4686 = v7950 & 15;
  parentObj$$22.FHalfCarry = v4686 == 15;
  parentObj$$22.FSubtract = true;
  return;
}
function v98(parentObj$$21) {
  var v7951 = parentObj$$21.registerD;
  var v4687 = v7951 + 1;
  parentObj$$21.registerD = v4687 & 255;
  var v4688 = parentObj$$21.registerD;
  parentObj$$21.FZero = v4688 == 0;
  var v7952 = parentObj$$21.registerD;
  var v4689 = v7952 & 15;
  parentObj$$21.FHalfCarry = v4689 == 0;
  parentObj$$21.FSubtract = false;
  return;
}
function v97(parentObj$$20) {
  var v9388 = parentObj$$20.registerD;
  var v7953 = v9388 << 8;
  var v7954 = parentObj$$20.registerE;
  var v4690 = v7953 | v7954;
  var temp_var$$3 = v4690 + 1;
  var v4691 = temp_var$$3 >> 8;
  parentObj$$20.registerD = v4691 & 255;
  parentObj$$20.registerE = temp_var$$3 & 255;
  return;
}
function v96(parentObj$$19) {
  var v9389 = parentObj$$19.registerD;
  var v7955 = v9389 << 8;
  var v7956 = parentObj$$19.registerE;
  var v4692 = v7955 | v7956;
  var v4693 = parentObj$$19.registerA;
  parentObj$$19.memoryWrite(v4692, v4693);
  return;
}
function v95(parentObj$$18) {
  var v4694 = parentObj$$18.memoryReader;
  var v4695 = parentObj$$18.programCounter;
  var v4696 = parentObj$$18.programCounter;
  var v10771 = v4694[v4695](parentObj$$18, v4696);
  parentObj$$18.registerE = v10771;
  var v9390 = parentObj$$18.programCounter;
  var v7957 = v9390 + 1;
  var v4697 = v7957 & 65535;
  var v10772 = parentObj$$18.memoryRead(v4697);
  parentObj$$18.registerD = v10772;
  var v7958 = parentObj$$18.programCounter;
  var v4698 = v7958 + 2;
  parentObj$$18.programCounter = v4698 & 65535;
  return;
}
function v94(parentObj$$17) {
  var v4704 = parentObj$$17.cGBC;
  if (v4704) {
    var v10095 = parentObj$$17.memory;
    var v9391 = v10095[65357];
    var v7959 = v9391 & 1;
    var v4703 = v7959 == 1;
    if (v4703) {
      var v9392 = parentObj$$17.memory;
      var v7960 = v9392[65357];
      var v4701 = v7960 > 127;
      if (v4701) {
        cout("Going into single clock speed mode.", 0);
        parentObj$$17.doubleSpeedShifter = 0;
        var v4699 = parentObj$$17.memory;
        var v9393 = v4699[65357];
        v4699[65357] = v9393 & 127;
      } else {
        cout("Going into double clock speed mode.", 0);
        parentObj$$17.doubleSpeedShifter = 1;
        var v4700 = parentObj$$17.memory;
        var v9394 = v4700[65357];
        v4700[65357] = v9394 | 128;
      }
      var v4702 = parentObj$$17.memory;
      var v9395 = v4702[65357];
      v4702[65357] = v9395 & 254;
    } else {
      parentObj$$17.handleSTOP();
    }
  } else {
    parentObj$$17.handleSTOP();
  }
  return;
}
function v93(parentObj$$16) {
  var v7961 = parentObj$$16.registerA;
  var v4705 = v7961 >> 1;
  var v9396 = parentObj$$16.registerA;
  var v7962 = v9396 & 1;
  var v4706 = v7962 << 7;
  parentObj$$16.registerA = v4705 | v4706;
  var v4707 = parentObj$$16.registerA;
  parentObj$$16.FCarry = v4707 > 127;
  parentObj$$16.FZero = parentObj$$16.FSubtract = parentObj$$16.FHalfCarry = false;
  return;
}
function v92(parentObj$$15) {
  var v4708 = parentObj$$15.memoryReader;
  var v4709 = parentObj$$15.programCounter;
  var v4710 = parentObj$$15.programCounter;
  var v10773 = v4708[v4709](parentObj$$15, v4710);
  parentObj$$15.registerC = v10773;
  var v7963 = parentObj$$15.programCounter;
  var v4711 = v7963 + 1;
  parentObj$$15.programCounter = v4711 & 65535;
  return;
}
function v91(parentObj$$14) {
  var v7964 = parentObj$$14.registerC;
  var v4712 = v7964 - 1;
  parentObj$$14.registerC = v4712 & 255;
  var v4713 = parentObj$$14.registerC;
  parentObj$$14.FZero = v4713 == 0;
  var v7965 = parentObj$$14.registerC;
  var v4714 = v7965 & 15;
  parentObj$$14.FHalfCarry = v4714 == 15;
  parentObj$$14.FSubtract = true;
  return;
}
function v90(parentObj$$13) {
  var v7966 = parentObj$$13.registerC;
  var v4715 = v7966 + 1;
  parentObj$$13.registerC = v4715 & 255;
  var v4716 = parentObj$$13.registerC;
  parentObj$$13.FZero = v4716 == 0;
  var v7967 = parentObj$$13.registerC;
  var v4717 = v7967 & 15;
  parentObj$$13.FHalfCarry = v4717 == 0;
  parentObj$$13.FSubtract = false;
  return;
}
function v89(parentObj$$12) {
  var v10096 = parentObj$$12.registerB;
  var v9397 = v10096 << 8;
  var v9398 = parentObj$$12.registerC;
  var v7968 = v9397 | v9398;
  var v4718 = v7968 - 1;
  var temp_var$$2 = v4718 & 65535;
  parentObj$$12.registerB = temp_var$$2 >> 8;
  parentObj$$12.registerC = temp_var$$2 & 255;
  return;
}
function v88(parentObj$$11) {
  var v9399 = parentObj$$11.registerB;
  var v7969 = v9399 << 8;
  var v7970 = parentObj$$11.registerC;
  var v4719 = v7969 | v7970;
  var v10774 = parentObj$$11.memoryRead(v4719);
  parentObj$$11.registerA = v10774;
  return;
}
function v87(parentObj$$10) {
  var v4720 = parentObj$$10.registersHL;
  var v9400 = parentObj$$10.registerB;
  var v7971 = v9400 << 8;
  var v7972 = parentObj$$10.registerC;
  var v4721 = v7971 | v7972;
  var dirtySum = v4720 + v4721;
  var v7973 = parentObj$$10.registersHL;
  var v4722 = v7973 & 4095;
  var v4723 = dirtySum & 4095;
  parentObj$$10.FHalfCarry = v4722 > v4723;
  parentObj$$10.FCarry = dirtySum > 65535;
  parentObj$$10.registersHL = dirtySum & 65535;
  parentObj$$10.FSubtract = false;
  return;
}
function v86(parentObj$$9) {
  var v10384 = parentObj$$9.programCounter;
  var v10097 = v10384 + 1;
  var v9401 = v10097 & 65535;
  var v7974 = parentObj$$9.memoryRead(v9401);
  var v4724 = v7974 << 8;
  var v7975 = parentObj$$9.memoryReader;
  var v7976 = parentObj$$9.programCounter;
  var v7977 = parentObj$$9.programCounter;
  var v4725 = v7975[v7976](parentObj$$9, v7977);
  var temp_var$$1 = v4724 | v4725;
  var v7978 = parentObj$$9.programCounter;
  var v4726 = v7978 + 2;
  parentObj$$9.programCounter = v4726 & 65535;
  var v7979 = parentObj$$9.stackPointer;
  var v4727 = v7979 & 255;
  parentObj$$9.memoryWrite(temp_var$$1, v4727);
  var v7980 = temp_var$$1 + 1;
  var v4728 = v7980 & 65535;
  var v7981 = parentObj$$9.stackPointer;
  var v4729 = v7981 >> 8;
  parentObj$$9.memoryWrite(v4728, v4729);
  return;
}
function v85(parentObj$$8) {
  var v4730 = parentObj$$8.registerA;
  parentObj$$8.FCarry = v4730 > 127;
  var v9402 = parentObj$$8.registerA;
  var v7982 = v9402 << 1;
  var v4731 = v7982 & 255;
  var v7983 = parentObj$$8.registerA;
  var v4732 = v7983 >> 7;
  parentObj$$8.registerA = v4731 | v4732;
  parentObj$$8.FZero = parentObj$$8.FSubtract = parentObj$$8.FHalfCarry = false;
  return;
}
function v84(parentObj$$7) {
  var v4733 = parentObj$$7.memoryReader;
  var v4734 = parentObj$$7.programCounter;
  var v4735 = parentObj$$7.programCounter;
  var v10775 = v4733[v4734](parentObj$$7, v4735);
  parentObj$$7.registerB = v10775;
  var v7984 = parentObj$$7.programCounter;
  var v4736 = v7984 + 1;
  parentObj$$7.programCounter = v4736 & 65535;
  return;
}
function v83(parentObj$$6) {
  var v7985 = parentObj$$6.registerB;
  var v4737 = v7985 - 1;
  parentObj$$6.registerB = v4737 & 255;
  var v4738 = parentObj$$6.registerB;
  parentObj$$6.FZero = v4738 == 0;
  var v7986 = parentObj$$6.registerB;
  var v4739 = v7986 & 15;
  parentObj$$6.FHalfCarry = v4739 == 15;
  parentObj$$6.FSubtract = true;
  return;
}
function v82(parentObj$$5) {
  var v7987 = parentObj$$5.registerB;
  var v4740 = v7987 + 1;
  parentObj$$5.registerB = v4740 & 255;
  var v4741 = parentObj$$5.registerB;
  parentObj$$5.FZero = v4741 == 0;
  var v7988 = parentObj$$5.registerB;
  var v4742 = v7988 & 15;
  parentObj$$5.FHalfCarry = v4742 == 0;
  parentObj$$5.FSubtract = false;
  return;
}
function v81(parentObj$$4) {
  var v9403 = parentObj$$4.registerB;
  var v7989 = v9403 << 8;
  var v7990 = parentObj$$4.registerC;
  var v4743 = v7989 | v7990;
  var temp_var = v4743 + 1;
  var v4744 = temp_var >> 8;
  parentObj$$4.registerB = v4744 & 255;
  parentObj$$4.registerC = temp_var & 255;
  return;
}
function v80(parentObj$$3) {
  var v9404 = parentObj$$3.registerB;
  var v7991 = v9404 << 8;
  var v7992 = parentObj$$3.registerC;
  var v4745 = v7991 | v7992;
  var v4746 = parentObj$$3.registerA;
  parentObj$$3.memoryWrite(v4745, v4746);
  return;
}
function v79(parentObj$$2) {
  var v4747 = parentObj$$2.memoryReader;
  var v4748 = parentObj$$2.programCounter;
  var v4749 = parentObj$$2.programCounter;
  var v10776 = v4747[v4748](parentObj$$2, v4749);
  parentObj$$2.registerC = v10776;
  var v9405 = parentObj$$2.programCounter;
  var v7993 = v9405 + 1;
  var v4750 = v7993 & 65535;
  var v10777 = parentObj$$2.memoryRead(v4750);
  parentObj$$2.registerB = v10777;
  var v7994 = parentObj$$2.programCounter;
  var v4751 = v7994 + 2;
  parentObj$$2.programCounter = v4751 & 65535;
  return;
}
function v78(parentObj$$1) {
  return;
}
function v77(typedArray) {
  typedArray[0] = -1;
  var v7995 = typedArray[0];
  typedArray[0] = v7995 >> 0;
  var v7996 = typedArray[0];
  var v4752 = v7996 != 255;
  if (v4752) {
    return [];
  } else {
    return typedArray;
  }
  return;
}
function v76(bufferLength$$1) {
  try {
    var v4753 = new Uint8Array(bufferLength$$1);
    return this.checkForOperaMathBug(v4753);
  } catch (error$$18) {
    return [];
  }
  return;
}
function v75(bufferLength) {
  try {
    return new Float32Array(bufferLength);
  } catch (error$$17) {
    return [];
  }
  return;
}
function v74(BILINEARAlgo$$1) {
  var v4754 = this.finalResultSize;
  var v10778 = this.generateUint8Buffer(v4754);
  this.heightBuffer = v10778;
  var v4756 = !BILINEARAlgo$$1;
  if (v4756) {
    var v4755 = this.targetWidthMultipliedByChannels;
    var v10779 = this.generateFloatBuffer(v4755);
    this.outputHeightWorkBench = v10779;
  }
  return;
}
function v73(BILINEARAlgo) {
  var v4757 = this.widthPassResultSize;
  var v10780 = this.generateFloatBuffer(v4757);
  this.widthBuffer = v10780;
  var v4759 = !BILINEARAlgo;
  if (v4759) {
    var v4758 = this.originalHeightMultipliedByChannels;
    var v10781 = this.generateFloatBuffer(v4758);
    this.outputWidthWorkBench = v10781;
  }
  return;
}
function v72(buffer$$26) {
  return buffer$$26;
}
function v71(buffer$$25) {
  var v4760 = this.resizeWidth(buffer$$25);
  return this.resizeHeight(v4760);
}
function v70(buffer$$24) {
  var v7997 = this.heightOriginal;
  var v4761 = v7997 - 1;
  var v4762 = this.targetHeight;
  var ratioWeight$$7 = v4761 / v4762;
  var weight$$7 = 0;
  var finalOffset$$3 = 0;
  var pixelOffset$$7 = 0;
  var outputBuffer$$7 = this.heightBuffer;
  var v7998 = this.finalResultSize;
  var v4769 = pixelOffset$$7 < v7998;
  for (;v4769;) {
    secondWeight = weight$$7 % 1;
    firstWeight = 1 - secondWeight;
    var v4763 = Math.floor(weight$$7);
    pixelOffset$$7 = v4763 * 4;
    var v7999 = this.targetWidthMultipliedByChannels;
    var v4768 = pixelOffset$$7 < v7999;
    for (;v4768;) {
      var v4764 = finalOffset$$3;
      finalOffset$$3 = finalOffset$$3 + 1;
      var v9406 = buffer$$24[pixelOffset$$7];
      var v8000 = v9406 * firstWeight;
      var v10098 = pixelOffset$$7 + 4;
      var v9407 = buffer$$24[v10098];
      var v8001 = v9407 * secondWeight;
      outputBuffer$$7[v4764] = v8000 + v8001;
      var v4765 = finalOffset$$3;
      finalOffset$$3 = finalOffset$$3 + 1;
      var v10099 = pixelOffset$$7 + 1;
      var v9408 = buffer$$24[v10099];
      var v8002 = v9408 * firstWeight;
      var v10100 = pixelOffset$$7 + 5;
      var v9409 = buffer$$24[v10100];
      var v8003 = v9409 * secondWeight;
      outputBuffer$$7[v4765] = v8002 + v8003;
      var v4766 = finalOffset$$3;
      finalOffset$$3 = finalOffset$$3 + 1;
      var v10101 = pixelOffset$$7 + 2;
      var v9410 = buffer$$24[v10101];
      var v8004 = v9410 * firstWeight;
      var v10102 = pixelOffset$$7 + 6;
      var v9411 = buffer$$24[v10102];
      var v8005 = v9411 * secondWeight;
      outputBuffer$$7[v4766] = v8004 + v8005;
      var v4767 = finalOffset$$3;
      finalOffset$$3 = finalOffset$$3 + 1;
      var v10103 = pixelOffset$$7 + 3;
      var v9412 = buffer$$24[v10103];
      var v8006 = v9412 * firstWeight;
      var v10104 = pixelOffset$$7 + 7;
      var v9413 = buffer$$24[v10104];
      var v8007 = v9413 * secondWeight;
      outputBuffer$$7[v4767] = v8006 + v8007;
      pixelOffset$$7 = pixelOffset$$7 + 4;
      var v8008 = this.targetWidthMultipliedByChannels;
      v4768 = pixelOffset$$7 < v8008;
    }
    weight$$7 = weight$$7 + ratioWeight$$7;
    var v8009 = this.finalResultSize;
    v4769 = pixelOffset$$7 < v8009;
  }
  return outputBuffer$$7;
}
function v69(buffer$$23) {
  var ratioWeight$$6 = this.ratioWeightHeightPass;
  var weight$$6 = 0;
  var amountToNext$$3 = 0;
  var actualPosition$$3 = 0;
  var currentPosition$$3 = 0;
  var pixelOffset$$6 = 0;
  var outputOffset$$3 = 0;
  var output$$3 = this.outputHeightWorkBench;
  var outputBuffer$$6 = this.heightBuffer;
  var v8010 = this.finalResultSize;
  var v4793 = outputOffset$$3 < v8010;
  do {
    pixelOffset$$6 = 0;
    var v8011 = this.targetWidthMultipliedByChannels;
    var v4774 = pixelOffset$$6 < v8011;
    for (;v4774;) {
      var v4770 = pixelOffset$$6;
      pixelOffset$$6 = pixelOffset$$6 + 1;
      output$$3[v4770] = 0;
      var v4771 = pixelOffset$$6;
      pixelOffset$$6 = pixelOffset$$6 + 1;
      output$$3[v4771] = 0;
      var v4772 = pixelOffset$$6;
      pixelOffset$$6 = pixelOffset$$6 + 1;
      output$$3[v4772] = 0;
      var v4773 = pixelOffset$$6;
      pixelOffset$$6 = pixelOffset$$6 + 1;
      output$$3[v4773] = 0;
      var v8012 = this.targetWidthMultipliedByChannels;
      v4774 = pixelOffset$$6 < v8012;
    }
    weight$$6 = ratioWeight$$6;
    var v8013 = weight$$6 > 0;
    if (v8013) {
      var v9414 = this.widthPassResultSize;
      v8013 = actualPosition$$3 < v9414;
    }
    var v4787 = v8013;
    do {
      var v4775 = 1 + actualPosition$$3;
      amountToNext$$3 = v4775 - currentPosition$$3;
      var v4786 = weight$$6 >= amountToNext$$3;
      if (v4786) {
        pixelOffset$$6 = 0;
        var v8014 = this.targetWidthMultipliedByChannels;
        var v4780 = pixelOffset$$6 < v8014;
        for (;v4780;) {
          var v4776 = pixelOffset$$6;
          pixelOffset$$6 = pixelOffset$$6 + 1;
          var v9415 = output$$3[v4776];
          var v10385 = actualPosition$$3;
          actualPosition$$3 = actualPosition$$3 + 1;
          var v10105 = buffer$$23[v10385];
          var v9416 = v10105 * amountToNext$$3;
          output$$3[v4776] = v9415 + v9416;
          var v4777 = pixelOffset$$6;
          pixelOffset$$6 = pixelOffset$$6 + 1;
          var v9417 = output$$3[v4777];
          var v10386 = actualPosition$$3;
          actualPosition$$3 = actualPosition$$3 + 1;
          var v10106 = buffer$$23[v10386];
          var v9418 = v10106 * amountToNext$$3;
          output$$3[v4777] = v9417 + v9418;
          var v4778 = pixelOffset$$6;
          pixelOffset$$6 = pixelOffset$$6 + 1;
          var v9419 = output$$3[v4778];
          var v10387 = actualPosition$$3;
          actualPosition$$3 = actualPosition$$3 + 1;
          var v10107 = buffer$$23[v10387];
          var v9420 = v10107 * amountToNext$$3;
          output$$3[v4778] = v9419 + v9420;
          var v4779 = pixelOffset$$6;
          pixelOffset$$6 = pixelOffset$$6 + 1;
          var v9421 = output$$3[v4779];
          var v10388 = actualPosition$$3;
          actualPosition$$3 = actualPosition$$3 + 1;
          var v10108 = buffer$$23[v10388];
          var v9422 = v10108 * amountToNext$$3;
          output$$3[v4779] = v9421 + v9422;
          var v8015 = this.targetWidthMultipliedByChannels;
          v4780 = pixelOffset$$6 < v8015;
        }
        currentPosition$$3 = actualPosition$$3;
        weight$$6 = weight$$6 - amountToNext$$3;
      } else {
        pixelOffset$$6 = 0;
        amountToNext$$3 = actualPosition$$3;
        var v8016 = this.targetWidthMultipliedByChannels;
        var v4785 = pixelOffset$$6 < v8016;
        for (;v4785;) {
          var v4781 = pixelOffset$$6;
          pixelOffset$$6 = pixelOffset$$6 + 1;
          var v9423 = output$$3[v4781];
          var v10389 = amountToNext$$3;
          amountToNext$$3 = amountToNext$$3 + 1;
          var v10109 = buffer$$23[v10389];
          var v9424 = v10109 * weight$$6;
          output$$3[v4781] = v9423 + v9424;
          var v4782 = pixelOffset$$6;
          pixelOffset$$6 = pixelOffset$$6 + 1;
          var v9425 = output$$3[v4782];
          var v10390 = amountToNext$$3;
          amountToNext$$3 = amountToNext$$3 + 1;
          var v10110 = buffer$$23[v10390];
          var v9426 = v10110 * weight$$6;
          output$$3[v4782] = v9425 + v9426;
          var v4783 = pixelOffset$$6;
          pixelOffset$$6 = pixelOffset$$6 + 1;
          var v9427 = output$$3[v4783];
          var v10391 = amountToNext$$3;
          amountToNext$$3 = amountToNext$$3 + 1;
          var v10111 = buffer$$23[v10391];
          var v9428 = v10111 * weight$$6;
          output$$3[v4783] = v9427 + v9428;
          var v4784 = pixelOffset$$6;
          pixelOffset$$6 = pixelOffset$$6 + 1;
          var v9429 = output$$3[v4784];
          var v10392 = amountToNext$$3;
          amountToNext$$3 = amountToNext$$3 + 1;
          var v10112 = buffer$$23[v10392];
          var v9430 = v10112 * weight$$6;
          output$$3[v4784] = v9429 + v9430;
          var v8017 = this.targetWidthMultipliedByChannels;
          v4785 = pixelOffset$$6 < v8017;
        }
        currentPosition$$3 = currentPosition$$3 + weight$$6;
        break;
      }
      var v8018 = weight$$6 > 0;
      if (v8018) {
        var v9431 = this.widthPassResultSize;
        v8018 = actualPosition$$3 < v9431;
      }
      v4787 = v8018;
    } while (v4787);
    pixelOffset$$6 = 0;
    var v8019 = this.targetWidthMultipliedByChannels;
    var v4792 = pixelOffset$$6 < v8019;
    for (;v4792;) {
      var v4788 = outputOffset$$3;
      outputOffset$$3 = outputOffset$$3 + 1;
      var v10113 = pixelOffset$$6;
      pixelOffset$$6 = pixelOffset$$6 + 1;
      var v9432 = output$$3[v10113];
      var v8020 = v9432 / ratioWeight$$6;
      var v10782 = Math.round(v8020);
      outputBuffer$$6[v4788] = v10782;
      var v4789 = outputOffset$$3;
      outputOffset$$3 = outputOffset$$3 + 1;
      var v10114 = pixelOffset$$6;
      pixelOffset$$6 = pixelOffset$$6 + 1;
      var v9433 = output$$3[v10114];
      var v8021 = v9433 / ratioWeight$$6;
      var v10783 = Math.round(v8021);
      outputBuffer$$6[v4789] = v10783;
      var v4790 = outputOffset$$3;
      outputOffset$$3 = outputOffset$$3 + 1;
      var v10115 = pixelOffset$$6;
      pixelOffset$$6 = pixelOffset$$6 + 1;
      var v9434 = output$$3[v10115];
      var v8022 = v9434 / ratioWeight$$6;
      var v10784 = Math.round(v8022);
      outputBuffer$$6[v4790] = v10784;
      var v4791 = outputOffset$$3;
      outputOffset$$3 = outputOffset$$3 + 1;
      var v10116 = pixelOffset$$6;
      pixelOffset$$6 = pixelOffset$$6 + 1;
      var v9435 = output$$3[v10116];
      var v8023 = v9435 / ratioWeight$$6;
      var v10785 = Math.round(v8023);
      outputBuffer$$6[v4791] = v10785;
      var v8024 = this.targetWidthMultipliedByChannels;
      v4792 = pixelOffset$$6 < v8024;
    }
    var v8025 = this.finalResultSize;
    v4793 = outputOffset$$3 < v8025;
  } while (v4793);
  return outputBuffer$$6;
}
function v68(buffer$$22) {
  var v8026 = this.heightOriginal;
  var v4794 = v8026 - 1;
  var v4795 = this.targetHeight;
  var ratioWeight$$5 = v4794 / v4795;
  var weight$$5 = 0;
  var finalOffset$$2 = 0;
  var pixelOffset$$5 = 0;
  var pixelOffsetAccumulated = 0;
  var pixelOffsetAccumulated2 = 0;
  var outputBuffer$$5 = this.heightBuffer;
  var v8027 = this.finalResultSize;
  var v4801 = finalOffset$$2 < v8027;
  do {
    secondWeight = weight$$5 % 1;
    firstWeight = 1 - secondWeight;
    var v4796 = Math.floor(weight$$5);
    var v4797 = this.targetWidthMultipliedByChannels;
    pixelOffsetAccumulated = v4796 * v4797;
    var v4798 = this.targetWidthMultipliedByChannels;
    pixelOffsetAccumulated2 = pixelOffsetAccumulated + v4798;
    pixelOffset$$5 = 0;
    var v8028 = this.targetWidthMultipliedByChannels;
    var v4800 = pixelOffset$$5 < v8028;
    for (;v4800;) {
      var v4799 = finalOffset$$2;
      finalOffset$$2 = finalOffset$$2 + 1;
      var v10117 = pixelOffsetAccumulated + pixelOffset$$5;
      var v9436 = buffer$$22[v10117];
      var v8029 = v9436 * firstWeight;
      var v10118 = pixelOffsetAccumulated2 + pixelOffset$$5;
      var v9437 = buffer$$22[v10118];
      var v8030 = v9437 * secondWeight;
      outputBuffer$$5[v4799] = v8029 + v8030;
      ++pixelOffset$$5;
      var v8031 = this.targetWidthMultipliedByChannels;
      v4800 = pixelOffset$$5 < v8031;
    }
    weight$$5 = weight$$5 + ratioWeight$$5;
    var v8032 = this.finalResultSize;
    v4801 = finalOffset$$2 < v8032;
  } while (v4801);
  return outputBuffer$$5;
}
function v67(buffer$$21) {
  var ratioWeight$$4 = this.ratioWeightHeightPass;
  var weight$$4 = 0;
  var amountToNext$$2 = 0;
  var actualPosition$$2 = 0;
  var currentPosition$$2 = 0;
  var pixelOffset$$4 = 0;
  var outputOffset$$2 = 0;
  var output$$2 = this.outputHeightWorkBench;
  var outputBuffer$$4 = this.heightBuffer;
  var v8033 = this.finalResultSize;
  var v4821 = outputOffset$$2 < v8033;
  do {
    pixelOffset$$4 = 0;
    var v8034 = this.targetWidthMultipliedByChannels;
    var v4805 = pixelOffset$$4 < v8034;
    for (;v4805;) {
      var v4802 = pixelOffset$$4;
      pixelOffset$$4 = pixelOffset$$4 + 1;
      output$$2[v4802] = 0;
      var v4803 = pixelOffset$$4;
      pixelOffset$$4 = pixelOffset$$4 + 1;
      output$$2[v4803] = 0;
      var v4804 = pixelOffset$$4;
      pixelOffset$$4 = pixelOffset$$4 + 1;
      output$$2[v4804] = 0;
      var v8035 = this.targetWidthMultipliedByChannels;
      v4805 = pixelOffset$$4 < v8035;
    }
    weight$$4 = ratioWeight$$4;
    var v8036 = weight$$4 > 0;
    if (v8036) {
      var v9438 = this.widthPassResultSize;
      v8036 = actualPosition$$2 < v9438;
    }
    var v4816 = v8036;
    do {
      var v4806 = 1 + actualPosition$$2;
      amountToNext$$2 = v4806 - currentPosition$$2;
      var v4815 = weight$$4 >= amountToNext$$2;
      if (v4815) {
        pixelOffset$$4 = 0;
        var v8037 = this.targetWidthMultipliedByChannels;
        var v4810 = pixelOffset$$4 < v8037;
        for (;v4810;) {
          var v4807 = pixelOffset$$4;
          pixelOffset$$4 = pixelOffset$$4 + 1;
          var v9439 = output$$2[v4807];
          var v10393 = actualPosition$$2;
          actualPosition$$2 = actualPosition$$2 + 1;
          var v10119 = buffer$$21[v10393];
          var v9440 = v10119 * amountToNext$$2;
          output$$2[v4807] = v9439 + v9440;
          var v4808 = pixelOffset$$4;
          pixelOffset$$4 = pixelOffset$$4 + 1;
          var v9441 = output$$2[v4808];
          var v10394 = actualPosition$$2;
          actualPosition$$2 = actualPosition$$2 + 1;
          var v10120 = buffer$$21[v10394];
          var v9442 = v10120 * amountToNext$$2;
          output$$2[v4808] = v9441 + v9442;
          var v4809 = pixelOffset$$4;
          pixelOffset$$4 = pixelOffset$$4 + 1;
          var v9443 = output$$2[v4809];
          var v10395 = actualPosition$$2;
          actualPosition$$2 = actualPosition$$2 + 1;
          var v10121 = buffer$$21[v10395];
          var v9444 = v10121 * amountToNext$$2;
          output$$2[v4809] = v9443 + v9444;
          var v8038 = this.targetWidthMultipliedByChannels;
          v4810 = pixelOffset$$4 < v8038;
        }
        currentPosition$$2 = actualPosition$$2;
        weight$$4 = weight$$4 - amountToNext$$2;
      } else {
        pixelOffset$$4 = 0;
        amountToNext$$2 = actualPosition$$2;
        var v8039 = this.targetWidthMultipliedByChannels;
        var v4814 = pixelOffset$$4 < v8039;
        for (;v4814;) {
          var v4811 = pixelOffset$$4;
          pixelOffset$$4 = pixelOffset$$4 + 1;
          var v9445 = output$$2[v4811];
          var v10396 = amountToNext$$2;
          amountToNext$$2 = amountToNext$$2 + 1;
          var v10122 = buffer$$21[v10396];
          var v9446 = v10122 * weight$$4;
          output$$2[v4811] = v9445 + v9446;
          var v4812 = pixelOffset$$4;
          pixelOffset$$4 = pixelOffset$$4 + 1;
          var v9447 = output$$2[v4812];
          var v10397 = amountToNext$$2;
          amountToNext$$2 = amountToNext$$2 + 1;
          var v10123 = buffer$$21[v10397];
          var v9448 = v10123 * weight$$4;
          output$$2[v4812] = v9447 + v9448;
          var v4813 = pixelOffset$$4;
          pixelOffset$$4 = pixelOffset$$4 + 1;
          var v9449 = output$$2[v4813];
          var v10398 = amountToNext$$2;
          amountToNext$$2 = amountToNext$$2 + 1;
          var v10124 = buffer$$21[v10398];
          var v9450 = v10124 * weight$$4;
          output$$2[v4813] = v9449 + v9450;
          var v8040 = this.targetWidthMultipliedByChannels;
          v4814 = pixelOffset$$4 < v8040;
        }
        currentPosition$$2 = currentPosition$$2 + weight$$4;
        break;
      }
      var v8041 = weight$$4 > 0;
      if (v8041) {
        var v9451 = this.widthPassResultSize;
        v8041 = actualPosition$$2 < v9451;
      }
      v4816 = v8041;
    } while (v4816);
    pixelOffset$$4 = 0;
    var v8042 = this.targetWidthMultipliedByChannels;
    var v4820 = pixelOffset$$4 < v8042;
    for (;v4820;) {
      var v4817 = outputOffset$$2;
      outputOffset$$2 = outputOffset$$2 + 1;
      var v10125 = pixelOffset$$4;
      pixelOffset$$4 = pixelOffset$$4 + 1;
      var v9452 = output$$2[v10125];
      var v8043 = v9452 / ratioWeight$$4;
      var v10786 = Math.round(v8043);
      outputBuffer$$4[v4817] = v10786;
      var v4818 = outputOffset$$2;
      outputOffset$$2 = outputOffset$$2 + 1;
      var v10126 = pixelOffset$$4;
      pixelOffset$$4 = pixelOffset$$4 + 1;
      var v9453 = output$$2[v10126];
      var v8044 = v9453 / ratioWeight$$4;
      var v10787 = Math.round(v8044);
      outputBuffer$$4[v4818] = v10787;
      var v4819 = outputOffset$$2;
      outputOffset$$2 = outputOffset$$2 + 1;
      var v10127 = pixelOffset$$4;
      pixelOffset$$4 = pixelOffset$$4 + 1;
      var v9454 = output$$2[v10127];
      var v8045 = v9454 / ratioWeight$$4;
      var v10788 = Math.round(v8045);
      outputBuffer$$4[v4819] = v10788;
      var v8046 = this.targetWidthMultipliedByChannels;
      v4820 = pixelOffset$$4 < v8046;
    }
    var v8047 = this.finalResultSize;
    v4821 = outputOffset$$2 < v8047;
  } while (v4821);
  return outputBuffer$$4;
}
function v66(buffer$$20) {
  var v8048 = this.widthOriginal;
  var v4822 = v8048 - 1;
  var v4823 = this.targetWidth;
  var ratioWeight$$3 = v4822 / v4823;
  var weight$$3 = 0;
  var finalOffset$$1 = 0;
  var pixelOffset$$3 = 0;
  var outputBuffer$$3 = this.widthBuffer;
  var targetPosition$$1 = 0;
  var v8049 = this.targetWidthMultipliedByChannels;
  var v4830 = targetPosition$$1 < v8049;
  for (;v4830;) {
    secondWeight = weight$$3 % 1;
    firstWeight = 1 - secondWeight;
    finalOffset$$1 = targetPosition$$1;
    var v8050 = Math.floor(weight$$3);
    pixelOffset$$3 = v8050 * 4;
    var v8051 = this.widthPassResultSize;
    var v4829 = finalOffset$$1 < v8051;
    for (;v4829;) {
      var v8052 = buffer$$20[pixelOffset$$3];
      var v4824 = v8052 * firstWeight;
      var v9455 = pixelOffset$$3 + 4;
      var v8053 = buffer$$20[v9455];
      var v4825 = v8053 * secondWeight;
      outputBuffer$$3[finalOffset$$1] = v4824 + v4825;
      var v4826 = finalOffset$$1 + 1;
      var v10128 = pixelOffset$$3 + 1;
      var v9456 = buffer$$20[v10128];
      var v8054 = v9456 * firstWeight;
      var v10129 = pixelOffset$$3 + 5;
      var v9457 = buffer$$20[v10129];
      var v8055 = v9457 * secondWeight;
      outputBuffer$$3[v4826] = v8054 + v8055;
      var v4827 = finalOffset$$1 + 2;
      var v10130 = pixelOffset$$3 + 2;
      var v9458 = buffer$$20[v10130];
      var v8056 = v9458 * firstWeight;
      var v10131 = pixelOffset$$3 + 6;
      var v9459 = buffer$$20[v10131];
      var v8057 = v9459 * secondWeight;
      outputBuffer$$3[v4827] = v8056 + v8057;
      var v4828 = finalOffset$$1 + 3;
      var v10132 = pixelOffset$$3 + 3;
      var v9460 = buffer$$20[v10132];
      var v8058 = v9460 * firstWeight;
      var v10133 = pixelOffset$$3 + 7;
      var v9461 = buffer$$20[v10133];
      var v8059 = v9461 * secondWeight;
      outputBuffer$$3[v4828] = v8058 + v8059;
      var v10134 = this.originalWidthMultipliedByChannels;
      pixelOffset$$3 = pixelOffset$$3 + v10134;
      var v10135 = this.targetWidthMultipliedByChannels;
      finalOffset$$1 = finalOffset$$1 + v10135;
      var v8060 = this.widthPassResultSize;
      v4829 = finalOffset$$1 < v8060;
    }
    targetPosition$$1 = targetPosition$$1 + 4;
    weight$$3 = weight$$3 + ratioWeight$$3;
    var v8061 = this.targetWidthMultipliedByChannels;
    v4830 = targetPosition$$1 < v8061;
  }
  return outputBuffer$$3;
}
function v65(buffer$$19) {
  var ratioWeight$$2 = this.ratioWeightWidthPass;
  var weight$$2 = 0;
  var amountToNext$$1 = 0;
  var actualPosition$$1 = 0;
  var currentPosition$$1 = 0;
  var line$$1 = 0;
  var pixelOffset$$2 = 0;
  var outputOffset$$1 = 0;
  var v4831 = this.originalWidthMultipliedByChannels;
  var nextLineOffsetOriginalWidth$$1 = v4831 - 3;
  var v4832 = this.targetWidthMultipliedByChannels;
  var nextLineOffsetTargetWidth$$1 = v4832 - 3;
  var output$$1 = this.outputWidthWorkBench;
  var outputBuffer$$2 = this.widthBuffer;
  var v8062 = this.targetWidthMultipliedByChannels;
  var v4856 = outputOffset$$1 < v8062;
  do {
    line$$1 = 0;
    var v8063 = this.originalHeightMultipliedByChannels;
    var v4837 = line$$1 < v8063;
    for (;v4837;) {
      var v4833 = line$$1;
      line$$1 = line$$1 + 1;
      output$$1[v4833] = 0;
      var v4834 = line$$1;
      line$$1 = line$$1 + 1;
      output$$1[v4834] = 0;
      var v4835 = line$$1;
      line$$1 = line$$1 + 1;
      output$$1[v4835] = 0;
      var v4836 = line$$1;
      line$$1 = line$$1 + 1;
      output$$1[v4836] = 0;
      var v8064 = this.originalHeightMultipliedByChannels;
      v4837 = line$$1 < v8064;
    }
    weight$$2 = ratioWeight$$2;
    var v8065 = weight$$2 > 0;
    if (v8065) {
      var v9462 = this.originalWidthMultipliedByChannels;
      v8065 = actualPosition$$1 < v9462;
    }
    var v4850 = v8065;
    do {
      var v4838 = 1 + actualPosition$$1;
      amountToNext$$1 = v4838 - currentPosition$$1;
      var v4849 = weight$$2 >= amountToNext$$1;
      if (v4849) {
        line$$1 = 0;
        pixelOffset$$2 = actualPosition$$1;
        var v8066 = this.originalHeightMultipliedByChannels;
        var v4843 = line$$1 < v8066;
        for (;v4843;) {
          var v4839 = line$$1;
          line$$1 = line$$1 + 1;
          var v9463 = output$$1[v4839];
          var v10399 = pixelOffset$$2;
          pixelOffset$$2 = pixelOffset$$2 + 1;
          var v10136 = buffer$$19[v10399];
          var v9464 = v10136 * amountToNext$$1;
          output$$1[v4839] = v9463 + v9464;
          var v4840 = line$$1;
          line$$1 = line$$1 + 1;
          var v9465 = output$$1[v4840];
          var v10400 = pixelOffset$$2;
          pixelOffset$$2 = pixelOffset$$2 + 1;
          var v10137 = buffer$$19[v10400];
          var v9466 = v10137 * amountToNext$$1;
          output$$1[v4840] = v9465 + v9466;
          var v4841 = line$$1;
          line$$1 = line$$1 + 1;
          var v9467 = output$$1[v4841];
          var v10401 = pixelOffset$$2;
          pixelOffset$$2 = pixelOffset$$2 + 1;
          var v10138 = buffer$$19[v10401];
          var v9468 = v10138 * amountToNext$$1;
          output$$1[v4841] = v9467 + v9468;
          var v4842 = line$$1;
          line$$1 = line$$1 + 1;
          var v9469 = output$$1[v4842];
          var v10139 = buffer$$19[pixelOffset$$2];
          var v9470 = v10139 * amountToNext$$1;
          output$$1[v4842] = v9469 + v9470;
          pixelOffset$$2 = pixelOffset$$2 + nextLineOffsetOriginalWidth$$1;
          var v8067 = this.originalHeightMultipliedByChannels;
          v4843 = line$$1 < v8067;
        }
        currentPosition$$1 = actualPosition$$1 = actualPosition$$1 + 4;
        weight$$2 = weight$$2 - amountToNext$$1;
      } else {
        line$$1 = 0;
        pixelOffset$$2 = actualPosition$$1;
        var v8068 = this.originalHeightMultipliedByChannels;
        var v4848 = line$$1 < v8068;
        for (;v4848;) {
          var v4844 = line$$1;
          line$$1 = line$$1 + 1;
          var v9471 = output$$1[v4844];
          var v10402 = pixelOffset$$2;
          pixelOffset$$2 = pixelOffset$$2 + 1;
          var v10140 = buffer$$19[v10402];
          var v9472 = v10140 * weight$$2;
          output$$1[v4844] = v9471 + v9472;
          var v4845 = line$$1;
          line$$1 = line$$1 + 1;
          var v9473 = output$$1[v4845];
          var v10403 = pixelOffset$$2;
          pixelOffset$$2 = pixelOffset$$2 + 1;
          var v10141 = buffer$$19[v10403];
          var v9474 = v10141 * weight$$2;
          output$$1[v4845] = v9473 + v9474;
          var v4846 = line$$1;
          line$$1 = line$$1 + 1;
          var v9475 = output$$1[v4846];
          var v10404 = pixelOffset$$2;
          pixelOffset$$2 = pixelOffset$$2 + 1;
          var v10142 = buffer$$19[v10404];
          var v9476 = v10142 * weight$$2;
          output$$1[v4846] = v9475 + v9476;
          var v4847 = line$$1;
          line$$1 = line$$1 + 1;
          var v9477 = output$$1[v4847];
          var v10143 = buffer$$19[pixelOffset$$2];
          var v9478 = v10143 * weight$$2;
          output$$1[v4847] = v9477 + v9478;
          pixelOffset$$2 = pixelOffset$$2 + nextLineOffsetOriginalWidth$$1;
          var v8069 = this.originalHeightMultipliedByChannels;
          v4848 = line$$1 < v8069;
        }
        currentPosition$$1 = currentPosition$$1 + weight$$2;
        break;
      }
      var v8070 = weight$$2 > 0;
      if (v8070) {
        var v9479 = this.originalWidthMultipliedByChannels;
        v8070 = actualPosition$$1 < v9479;
      }
      v4850 = v8070;
    } while (v4850);
    line$$1 = 0;
    pixelOffset$$2 = outputOffset$$1;
    var v8071 = this.originalHeightMultipliedByChannels;
    var v4855 = line$$1 < v8071;
    for (;v4855;) {
      var v4851 = pixelOffset$$2;
      pixelOffset$$2 = pixelOffset$$2 + 1;
      var v9480 = line$$1;
      line$$1 = line$$1 + 1;
      var v8072 = output$$1[v9480];
      outputBuffer$$2[v4851] = v8072 / ratioWeight$$2;
      var v4852 = pixelOffset$$2;
      pixelOffset$$2 = pixelOffset$$2 + 1;
      var v9481 = line$$1;
      line$$1 = line$$1 + 1;
      var v8073 = output$$1[v9481];
      outputBuffer$$2[v4852] = v8073 / ratioWeight$$2;
      var v4853 = pixelOffset$$2;
      pixelOffset$$2 = pixelOffset$$2 + 1;
      var v9482 = line$$1;
      line$$1 = line$$1 + 1;
      var v8074 = output$$1[v9482];
      outputBuffer$$2[v4853] = v8074 / ratioWeight$$2;
      var v8075 = line$$1;
      line$$1 = line$$1 + 1;
      var v4854 = output$$1[v8075];
      outputBuffer$$2[pixelOffset$$2] = v4854 / ratioWeight$$2;
      pixelOffset$$2 = pixelOffset$$2 + nextLineOffsetTargetWidth$$1;
      var v8076 = this.originalHeightMultipliedByChannels;
      v4855 = line$$1 < v8076;
    }
    outputOffset$$1 = outputOffset$$1 + 4;
    var v8077 = this.targetWidthMultipliedByChannels;
    v4856 = outputOffset$$1 < v8077;
  } while (v4856);
  return outputBuffer$$2;
}
function v64(buffer$$18) {
  var v8078 = this.widthOriginal;
  var v4857 = v8078 - 1;
  var v4858 = this.targetWidth;
  var ratioWeight$$1 = v4857 / v4858;
  var weight$$1 = 0;
  var finalOffset = 0;
  var pixelOffset$$1 = 0;
  var outputBuffer$$1 = this.widthBuffer;
  var targetPosition = 0;
  var v8079 = this.targetWidthMultipliedByChannels;
  var v4864 = targetPosition < v8079;
  for (;v4864;) {
    secondWeight = weight$$1 % 1;
    firstWeight = 1 - secondWeight;
    finalOffset = targetPosition;
    var v8080 = Math.floor(weight$$1);
    pixelOffset$$1 = v8080 * 3;
    var v8081 = this.widthPassResultSize;
    var v4863 = finalOffset < v8081;
    for (;v4863;) {
      var v8082 = buffer$$18[pixelOffset$$1];
      var v4859 = v8082 * firstWeight;
      var v9483 = pixelOffset$$1 + 3;
      var v8083 = buffer$$18[v9483];
      var v4860 = v8083 * secondWeight;
      outputBuffer$$1[finalOffset] = v4859 + v4860;
      var v4861 = finalOffset + 1;
      var v10144 = pixelOffset$$1 + 1;
      var v9484 = buffer$$18[v10144];
      var v8084 = v9484 * firstWeight;
      var v10145 = pixelOffset$$1 + 4;
      var v9485 = buffer$$18[v10145];
      var v8085 = v9485 * secondWeight;
      outputBuffer$$1[v4861] = v8084 + v8085;
      var v4862 = finalOffset + 2;
      var v10146 = pixelOffset$$1 + 2;
      var v9486 = buffer$$18[v10146];
      var v8086 = v9486 * firstWeight;
      var v10147 = pixelOffset$$1 + 5;
      var v9487 = buffer$$18[v10147];
      var v8087 = v9487 * secondWeight;
      outputBuffer$$1[v4862] = v8086 + v8087;
      var v10148 = this.originalWidthMultipliedByChannels;
      pixelOffset$$1 = pixelOffset$$1 + v10148;
      var v10149 = this.targetWidthMultipliedByChannels;
      finalOffset = finalOffset + v10149;
      var v8088 = this.widthPassResultSize;
      v4863 = finalOffset < v8088;
    }
    targetPosition = targetPosition + 3;
    weight$$1 = weight$$1 + ratioWeight$$1;
    var v8089 = this.targetWidthMultipliedByChannels;
    v4864 = targetPosition < v8089;
  }
  return outputBuffer$$1;
}
function v63(buffer$$17) {
  var ratioWeight = this.ratioWeightWidthPass;
  var weight = 0;
  var amountToNext = 0;
  var actualPosition = 0;
  var currentPosition = 0;
  var line = 0;
  var pixelOffset = 0;
  var outputOffset = 0;
  var v4865 = this.originalWidthMultipliedByChannels;
  var nextLineOffsetOriginalWidth = v4865 - 2;
  var v4866 = this.targetWidthMultipliedByChannels;
  var nextLineOffsetTargetWidth = v4866 - 2;
  var output = this.outputWidthWorkBench;
  var outputBuffer = this.widthBuffer;
  var v8090 = this.targetWidthMultipliedByChannels;
  var v4886 = outputOffset < v8090;
  do {
    line = 0;
    var v8091 = this.originalHeightMultipliedByChannels;
    var v4870 = line < v8091;
    for (;v4870;) {
      var v4867 = line;
      line = line + 1;
      output[v4867] = 0;
      var v4868 = line;
      line = line + 1;
      output[v4868] = 0;
      var v4869 = line;
      line = line + 1;
      output[v4869] = 0;
      var v8092 = this.originalHeightMultipliedByChannels;
      v4870 = line < v8092;
    }
    weight = ratioWeight;
    var v8093 = weight > 0;
    if (v8093) {
      var v9488 = this.originalWidthMultipliedByChannels;
      v8093 = actualPosition < v9488;
    }
    var v4881 = v8093;
    do {
      var v4871 = 1 + actualPosition;
      amountToNext = v4871 - currentPosition;
      var v4880 = weight >= amountToNext;
      if (v4880) {
        line = 0;
        pixelOffset = actualPosition;
        var v8094 = this.originalHeightMultipliedByChannels;
        var v4875 = line < v8094;
        for (;v4875;) {
          var v4872 = line;
          line = line + 1;
          var v9489 = output[v4872];
          var v10405 = pixelOffset;
          pixelOffset = pixelOffset + 1;
          var v10150 = buffer$$17[v10405];
          var v9490 = v10150 * amountToNext;
          output[v4872] = v9489 + v9490;
          var v4873 = line;
          line = line + 1;
          var v9491 = output[v4873];
          var v10406 = pixelOffset;
          pixelOffset = pixelOffset + 1;
          var v10151 = buffer$$17[v10406];
          var v9492 = v10151 * amountToNext;
          output[v4873] = v9491 + v9492;
          var v4874 = line;
          line = line + 1;
          var v9493 = output[v4874];
          var v10152 = buffer$$17[pixelOffset];
          var v9494 = v10152 * amountToNext;
          output[v4874] = v9493 + v9494;
          pixelOffset = pixelOffset + nextLineOffsetOriginalWidth;
          var v8095 = this.originalHeightMultipliedByChannels;
          v4875 = line < v8095;
        }
        currentPosition = actualPosition = actualPosition + 3;
        weight = weight - amountToNext;
      } else {
        line = 0;
        pixelOffset = actualPosition;
        var v8096 = this.originalHeightMultipliedByChannels;
        var v4879 = line < v8096;
        for (;v4879;) {
          var v4876 = line;
          line = line + 1;
          var v9495 = output[v4876];
          var v10407 = pixelOffset;
          pixelOffset = pixelOffset + 1;
          var v10153 = buffer$$17[v10407];
          var v9496 = v10153 * weight;
          output[v4876] = v9495 + v9496;
          var v4877 = line;
          line = line + 1;
          var v9497 = output[v4877];
          var v10408 = pixelOffset;
          pixelOffset = pixelOffset + 1;
          var v10154 = buffer$$17[v10408];
          var v9498 = v10154 * weight;
          output[v4877] = v9497 + v9498;
          var v4878 = line;
          line = line + 1;
          var v9499 = output[v4878];
          var v10155 = buffer$$17[pixelOffset];
          var v9500 = v10155 * weight;
          output[v4878] = v9499 + v9500;
          pixelOffset = pixelOffset + nextLineOffsetOriginalWidth;
          var v8097 = this.originalHeightMultipliedByChannels;
          v4879 = line < v8097;
        }
        currentPosition = currentPosition + weight;
        break;
      }
      var v8098 = weight > 0;
      if (v8098) {
        var v9501 = this.originalWidthMultipliedByChannels;
        v8098 = actualPosition < v9501;
      }
      v4881 = v8098;
    } while (v4881);
    line = 0;
    pixelOffset = outputOffset;
    var v8099 = this.originalHeightMultipliedByChannels;
    var v4885 = line < v8099;
    for (;v4885;) {
      var v4882 = pixelOffset;
      pixelOffset = pixelOffset + 1;
      var v9502 = line;
      line = line + 1;
      var v8100 = output[v9502];
      outputBuffer[v4882] = v8100 / ratioWeight;
      var v4883 = pixelOffset;
      pixelOffset = pixelOffset + 1;
      var v9503 = line;
      line = line + 1;
      var v8101 = output[v9503];
      outputBuffer[v4883] = v8101 / ratioWeight;
      var v8102 = line;
      line = line + 1;
      var v4884 = output[v8102];
      outputBuffer[pixelOffset] = v4884 / ratioWeight;
      pixelOffset = pixelOffset + nextLineOffsetTargetWidth;
      var v8103 = this.originalHeightMultipliedByChannels;
      v4885 = line < v8103;
    }
    outputOffset = outputOffset + 3;
    var v8104 = this.targetWidthMultipliedByChannels;
    v4886 = outputOffset < v8104;
  } while (v4886);
  return outputBuffer;
}
function v62() {
  var v10409 = this.widthOriginal;
  var v10156 = v10409 > 0;
  if (v10156) {
    var v10410 = this.heightOriginal;
    v10156 = v10410 > 0;
  }
  var v9504 = v10156;
  if (v9504) {
    var v10157 = this.targetWidth;
    v9504 = v10157 > 0;
  }
  var v8105 = v9504;
  if (v8105) {
    var v9505 = this.targetHeight;
    v8105 = v9505 > 0;
  }
  var v4898 = v8105;
  if (v4898) {
    var v8106 = this.widthOriginal;
    var v8107 = this.targetWidth;
    var v4892 = v8106 == v8107;
    if (v4892) {
      this.resizeWidth = this.bypassResizer;
    } else {
      var v4887 = this.widthOriginal;
      var v4888 = this.targetWidth;
      this.ratioWeightWidthPass = v4887 / v4888;
      var v9506 = this.ratioWeightWidthPass;
      var v8108 = v9506 < 1;
      if (v8108) {
        v8108 = this.interpolationPass;
      }
      var v4891 = v8108;
      if (v4891) {
        this.initializeFirstPassBuffers(true);
        var v4889;
        var v9507 = this.colorChannels;
        var v8109 = v9507 == 4;
        if (v8109) {
          v4889 = this.resizeWidthInterpolatedRGBA;
        } else {
          v4889 = this.resizeWidthInterpolatedRGB;
        }
        this.resizeWidth = v4889;
      } else {
        this.initializeFirstPassBuffers(false);
        var v4890;
        var v9508 = this.colorChannels;
        var v8110 = v9508 == 4;
        if (v8110) {
          v4890 = this.resizeWidthRGBA;
        } else {
          v4890 = this.resizeWidthRGB;
        }
        this.resizeWidth = v4890;
      }
    }
    var v8111 = this.heightOriginal;
    var v8112 = this.targetHeight;
    var v4897 = v8111 == v8112;
    if (v4897) {
      this.resizeHeight = this.bypassResizer;
    } else {
      var v4893 = this.heightOriginal;
      var v4894 = this.targetHeight;
      this.ratioWeightHeightPass = v4893 / v4894;
      var v9509 = this.ratioWeightHeightPass;
      var v8113 = v9509 < 1;
      if (v8113) {
        v8113 = this.interpolationPass;
      }
      var v4896 = v8113;
      if (v4896) {
        this.initializeSecondPassBuffers(true);
        this.resizeHeight = this.resizeHeightInterpolated;
      } else {
        this.initializeSecondPassBuffers(false);
        var v4895;
        var v9510 = this.colorChannels;
        var v8114 = v9510 == 4;
        if (v8114) {
          v4895 = this.resizeHeightRGBA;
        } else {
          v4895 = this.resizeHeightRGB;
        }
        this.resizeHeight = v4895;
      }
    }
  } else {
    throw new Error("Invalid settings specified for the resizer.");
  }
  return;
}
function v61() {
  var v4900 = !launchedContext;
  if (v4900) {
    try {
      audioContextHandle = new GameBoyAudioContext;
    } catch (error$$14) {
      try {
        audioContextHandle = new AudioContext;
      } catch (error$$15) {
        return;
      }
    }
    try {
      audioSource = audioContextHandle.createBufferSource();
      audioSource.loop = false;
      XAudioJSSampleRate = webAudioActualSampleRate = audioContextHandle.sampleRate;
      var v4899 = audioSource;
      var v10789 = audioContextHandle.createBuffer(1, 1, webAudioActualSampleRate);
      v4899.buffer = v10789;
      audioNode = audioContextHandle.createJavaScriptNode();
      audioNode.onaudioprocess = audioOutputEvent;
    } catch (error$$16) {
      return;
    }
    launchedContext = true;
  }
  return;
}
function v60() {
  var v10158 = this.flashInitialized;
  var v9511 = !v10158;
  if (v9511) {
    v9511 = this.audioHandleFlash;
  }
  var v8115 = v9511;
  if (v8115) {
    var v9512 = this.audioHandleFlash;
    v8115 = v9512.initialize;
  }
  var v4903 = v8115;
  if (v4903) {
    this.flashInitialized = true;
    var v4901 = this.audioHandleFlash;
    var v4902 = this.audioChannels;
    v4901.initialize(v4902, XAudioJSVolume);
    resetCallbackAPIAudioBuffer(44100);
  }
  return this.flashInitialized;
}
function v59(buffer$$16) {
  var v4904 = this.mozAudioTail;
  var length$$16 = v4904.length;
  var v4908 = length$$16 > 0;
  if (v4908) {
    var v4905 = this.audioHandleMoz;
    var v4906 = this.mozAudioTail;
    var samplesAccepted = v4905.mozWriteAudio(v4906);
    var v8116 = this.samplesAlreadyWritten;
    this.samplesAlreadyWritten = v8116 + samplesAccepted;
    var v4907 = this.mozAudioTail;
    v4907.splice(0, samplesAccepted);
  }
  var v4909 = buffer$$16.length;
  var v9513 = this.samplesAlreadyWritten;
  var v8117 = webAudioMaxBufferSize - v9513;
  var v9514 = this.audioHandleMoz;
  var v8118 = v9514.mozCurrentSampleOffset();
  var v4910 = v8117 + v8118;
  length$$16 = Math.min(v4909, v4910);
  var v4911 = this.audioHandleMoz;
  samplesAccepted = v4911.mozWriteAudio(buffer$$16);
  var v8119 = this.samplesAlreadyWritten;
  this.samplesAlreadyWritten = v8119 + samplesAccepted;
  var index$$46 = 0;
  var v4914 = length$$16 > samplesAccepted;
  for (;v4914;) {
    var v4912 = this.mozAudioTail;
    var v8120 = index$$46;
    index$$46 = index$$46 + 1;
    var v4913 = buffer$$16[v8120];
    v4912.push(v4913);
    --length$$16;
    v4914 = length$$16 > samplesAccepted;
  }
  return;
}
function v58(newVolume) {
  var v8121 = newVolume >= 0;
  if (v8121) {
    v8121 = newVolume <= 1;
  }
  var v4919 = v8121;
  if (v4919) {
    XAudioJSVolume = newVolume;
    var v4916 = this.checkFlashInit();
    if (v4916) {
      var v4915 = this.audioHandleFlash;
      v4915.changeVolume(XAudioJSVolume);
    }
    var v4918 = this.mozAudioFound;
    if (v4918) {
      var v4917 = this.audioHandleMoz;
      v4917.volume = XAudioJSVolume;
    }
  }
  return;
}
function v57() {
  function v56(event$$2) {
    var v4920 = event$$2.success;
    if (v4920) {
      thisObj.audioHandleFlash = event$$2.ref;
    } else {
      thisObj.audioType = 1;
    }
    return;
  }
  var existingFlashload = document.getElementById("XAudioJS");
  var v4924 = existingFlashload == null;
  if (v4924) {
    var thisObj = this;
    var mainContainerNode = document.createElement("div");
    mainContainerNode.setAttribute("style", "position: fixed; bottom: 0px; right: 0px; margin: 0px; padding: 0px; border: none; width: 8px; height: 8px; overflow: hidden; z-index: -1000; ");
    var containerNode = document.createElement("div");
    containerNode.setAttribute("style", "position: static; border: none; width: 0px; height: 0px; visibility: hidden; margin: 8px; padding: 0px;");
    containerNode.setAttribute("id", "XAudioJS");
    mainContainerNode.appendChild(containerNode);
    var v8122 = document.getElementsByTagName("body");
    var v4921 = v8122[0];
    v4921.appendChild(mainContainerNode);
    var v4922 = {"allowscriptaccess":"always"};
    var v4923 = {"style":"position: static; visibility: hidden; margin: 8px; padding: 0px; border: none"};
    swfobject.embedSWF("XAudioJS.swf", "XAudioJS", "8", "8", "9.0.0", "", {}, v4922, v4923, v56);
  } else {
    this.audioHandleFlash = existingFlashload;
  }
  this.audioType = 2;
  return;
}
function v55() {
  if (launchedContext) {
    resetCallbackAPIAudioBuffer(webAudioActualSampleRate);
    this.audioType = 1;
  } else {
    throw new Error("");
  }
  return;
}
function v54() {
  var v4925 = getFloat32(webAudioMinBufferSize);
  this.writeMozAudio(v4925);
  this.audioType = 0;
  return;
}
function v53() {
  var v10790 = new Audio;
  this.audioHandleMoz = v10790;
  var v4926 = this.audioHandleMoz;
  var v4927 = this.audioChannels;
  v4926.mozSetup(v4927, XAudioJSSampleRate);
  this.samplesAlreadyWritten = 0;
  var v4928;
  var v9515 = this.audioChannels;
  var v8123 = v9515 == 2;
  if (v8123) {
    v4928 = [0, 0];
  } else {
    v4928 = [0];
  }
  var emptySampleFrame = v4928;
  var prebufferAmount = 0;
  var v9516 = navigator.platform;
  var v8124 = v9516 != "MacIntel";
  if (v8124) {
    var v9517 = navigator.platform;
    v8124 = v9517 != "MacPPC";
  }
  var v4932 = v8124;
  if (v4932) {
    var v9518 = this.audioHandleMoz;
    var v8125 = v9518.mozCurrentSampleOffset();
    var v4929 = v8125 == 0;
    for (;v4929;) {
      var v9519 = this.audioHandleMoz;
      var v8126 = v9519.mozWriteAudio(emptySampleFrame);
      prebufferAmount = prebufferAmount + v8126;
      var v9520 = this.audioHandleMoz;
      var v8127 = v9520.mozCurrentSampleOffset();
      v4929 = v8127 == 0;
    }
    var v4930 = this.audioChannels;
    var samplesToDoubleBuffer = prebufferAmount / v4930;
    var index$$45 = 0;
    var v4931 = index$$45 < samplesToDoubleBuffer;
    for (;v4931;) {
      var v8128 = this.samplesAlreadyWritten;
      var v9521 = this.audioHandleMoz;
      var v8129 = v9521.mozWriteAudio(emptySampleFrame);
      this.samplesAlreadyWritten = v8128 + v8129;
      index$$45++;
      v4931 = index$$45 < samplesToDoubleBuffer;
    }
  }
  var v8130 = this.samplesAlreadyWritten;
  this.samplesAlreadyWritten = v8130 + prebufferAmount;
  var v8131 = this.samplesAlreadyWritten;
  webAudioMinBufferSize = webAudioMinBufferSize + v8131;
  this.mozAudioFound = true;
  return;
}
function v52() {
  try {
    throw new Error("Select initializeWebAudio case");
  } catch (error$$7) {
    try {
      this.initializeWebAudio();
    } catch (error$$8) {
      try {
        this.initializeFlashAudio();
      } catch (error$$9) {
        throw new Error("Browser does not support real time audio output.");
      }
    }
  }
  return;
}
function v51() {
  var v8132 = this.audioType;
  var v4937 = v8132 == 0;
  if (v4937) {
    this.MOZExecuteCallback();
  } else {
    var v8133 = this.audioType;
    var v4936 = v8133 == 1;
    if (v4936) {
      this.callbackBasedExecuteCallback();
    } else {
      var v8134 = this.audioType;
      var v4935 = v8134 == 2;
      if (v4935) {
        var v8135 = this.checkFlashInit();
        var v9522 = !v8135;
        if (v9522) {
          v8135 = launchedContext;
        }
        var v4934 = v8135;
        if (v4934) {
          this.callbackBasedExecuteCallback();
        } else {
          var v4933 = this.mozAudioFound;
          if (v4933) {
            this.MOZExecuteCallback();
          }
        }
      }
    }
  }
  return;
}
function v50() {
  var v4938 = webAudioMinBufferSize;
  var v4939 = this.remainingBuffer();
  var samplesRequested$$1 = v4938 - v4939;
  var v4941 = samplesRequested$$1 > 0;
  if (v4941) {
    var v4940 = this.underRunCallback(samplesRequested$$1);
    this.callbackBasedWriteAudioNoCallback(v4940);
  }
  return;
}
function v49() {
  var v4942 = webAudioMinBufferSize;
  var v4943 = this.remainingBuffer();
  var samplesRequested = v4942 - v4943;
  var v4945 = samplesRequested > 0;
  if (v4945) {
    var v4944 = this.underRunCallback(samplesRequested);
    this.writeMozAudio(v4944);
  }
  return;
}
function v48() {
  var v8136 = this.audioType;
  var v4956 = v8136 == 0;
  if (v4956) {
    var v4946 = this.samplesAlreadyWritten;
    var v8137 = this.audioHandleMoz;
    var v4947 = v8137.mozCurrentSampleOffset();
    return v4946 - v4947;
  } else {
    var v8138 = this.audioType;
    var v4955 = v8138 == 1;
    if (v4955) {
      var v10159 = resampledSamplesLeft();
      var v10160 = resampleControl.ratioWeight;
      var v9523 = v10159 * v10160;
      var v10161 = this.audioChannels;
      var v9524 = v10161 - 1;
      var v8139 = v9523 >> v9524;
      var v9525 = this.audioChannels;
      var v8140 = v9525 - 1;
      var v4948 = v8139 << v8140;
      return v4948 + audioBufferSize;
    } else {
      var v8141 = this.audioType;
      var v4954 = v8141 == 2;
      if (v4954) {
        var v8142 = this.checkFlashInit();
        var v9526 = !v8142;
        if (v9526) {
          v8142 = launchedContext;
        }
        var v4953 = v8142;
        if (v4953) {
          var v10162 = resampledSamplesLeft();
          var v10163 = resampleControl.ratioWeight;
          var v9527 = v10162 * v10163;
          var v10164 = this.audioChannels;
          var v9528 = v10164 - 1;
          var v8143 = v9527 >> v9528;
          var v9529 = this.audioChannels;
          var v8144 = v9529 - 1;
          var v4949 = v8143 << v8144;
          return v4949 + audioBufferSize;
        } else {
          var v4952 = this.mozAudioFound;
          if (v4952) {
            var v4950 = this.samplesAlreadyWritten;
            var v8145 = this.audioHandleMoz;
            var v4951 = v8145.mozCurrentSampleOffset();
            return v4950 - v4951;
          }
        }
      }
    }
  }
  return 0;
}
function v47(buffer$$15) {
  var v8146 = this.audioType;
  var v4961 = v8146 == 0;
  if (v4961) {
    this.MOZWriteAudioNoCallback(buffer$$15);
  } else {
    var v8147 = this.audioType;
    var v4960 = v8147 == 1;
    if (v4960) {
      this.callbackBasedWriteAudioNoCallback(buffer$$15);
    } else {
      var v8148 = this.audioType;
      var v4959 = v8148 == 2;
      if (v4959) {
        var v8149 = this.checkFlashInit();
        var v9530 = !v8149;
        if (v9530) {
          v8149 = launchedContext;
        }
        var v4958 = v8149;
        if (v4958) {
          this.callbackBasedWriteAudioNoCallback(buffer$$15);
        } else {
          var v4957 = this.mozAudioFound;
          if (v4957) {
            this.MOZWriteAudioNoCallback(buffer$$15);
          }
        }
      }
    }
  }
  return;
}
function v46(buffer$$14) {
  var v8150 = this.audioType;
  var v4966 = v8150 == 0;
  if (v4966) {
    this.MOZWriteAudio(buffer$$14);
  } else {
    var v8151 = this.audioType;
    var v4965 = v8151 == 1;
    if (v4965) {
      this.callbackBasedWriteAudio(buffer$$14);
    } else {
      var v8152 = this.audioType;
      var v4964 = v8152 == 2;
      if (v4964) {
        var v8153 = this.checkFlashInit();
        var v9531 = !v8153;
        if (v9531) {
          v8153 = launchedContext;
        }
        var v4963 = v8153;
        if (v4963) {
          this.callbackBasedWriteAudio(buffer$$14);
        } else {
          var v4962 = this.mozAudioFound;
          if (v4962) {
            this.MOZWriteAudio(buffer$$14);
          }
        }
      }
    }
  }
  return;
}
function v45(buffer$$13) {
  var length$$15 = buffer$$13.length;
  var bufferCounter = 0;
  var v8154 = bufferCounter < length$$15;
  if (v8154) {
    v8154 = audioBufferSize < webAudioMaxBufferSize;
  }
  var v4968 = v8154;
  for (;v4968;) {
    var v4967 = audioBufferSize;
    audioBufferSize = audioBufferSize + 1;
    var v8155 = bufferCounter;
    bufferCounter = bufferCounter + 1;
    audioContextSampleBuffer[v4967] = buffer$$13[v8155];
    var v8156 = bufferCounter < length$$15;
    if (v8156) {
      v8156 = audioBufferSize < webAudioMaxBufferSize;
    }
    v4968 = v8156;
  }
  return;
}
function v44(buffer$$12) {
  this.callbackBasedWriteAudioNoCallback(buffer$$12);
  this.callbackBasedExecuteCallback();
  return;
}
function v43(buffer$$11) {
  this.writeMozAudio(buffer$$11);
  return;
}
function v42(buffer$$10) {
  this.MOZWriteAudioNoCallback(buffer$$10);
  this.MOZExecuteCallback();
  return;
}
function v41() {
  try {
    var v4969 = this.outputBufferSize;
    var v10791 = new Float32Array(v4969);
    this.outputBuffer = v10791;
    var v4970 = this.channels;
    var v10792 = new Float32Array(v4970);
    this.lastOutput = v10792;
  } catch (error$$6) {
    this.outputBuffer = [];
    this.lastOutput = [];
  }
  return;
}
function v40(sliceAmount) {
  var v4974 = this.noReturn;
  if (v4974) {
    return sliceAmount;
  } else {
    try {
      var v4971 = this.outputBuffer;
      return v4971.subarray(0, sliceAmount);
    } catch (error$$4) {
      try {
        var v4972 = this.outputBuffer;
        v4972.length = sliceAmount;
        return this.outputBuffer;
      } catch (error$$5) {
        var v4973 = this.outputBuffer;
        return v4973.slice(0, sliceAmount);
      }
    }
  }
  return;
}
function v39(buffer$$9) {
  var v4975 = this.noReturn;
  if (v4975) {
    this.outputBuffer = buffer$$9;
    return buffer$$9.length;
  } else {
    return buffer$$9;
  }
  return;
}
function v38() {
  var v8157 = this.channels;
  var v4976 = "var bufferLength = Math.min(buffer.length, this.outputBufferSize);  if ((bufferLength % " + v8157;
  var toCompile = v4976 + ") == 0) {    if (bufferLength > 0) {      var ratioWeight = this.ratioWeight;      var weight = 0;";
  var channel = 0;
  var v8158 = this.channels;
  var v4977 = channel < v8158;
  for (;v4977;) {
    var v9532 = "var output" + channel;
    var v8159 = v9532 + " = 0;";
    toCompile = toCompile + v8159;
    ++channel;
    var v8160 = this.channels;
    v4977 = channel < v8160;
  }
  toCompile = toCompile + "var actualPosition = 0;      var amountToNext = 0;      var alreadyProcessedTail = !this.tailExists;      this.tailExists = false;      var outputBuffer = this.outputBuffer;      var outputOffset = 0;      var currentPosition = 0;      do {        if (alreadyProcessedTail) {          weight = ratioWeight;";
  channel = 0;
  var v8161 = this.channels;
  var v4978 = channel < v8161;
  for (;v4978;) {
    var v9533 = "output" + channel;
    var v8162 = v9533 + " = 0;";
    toCompile = toCompile + v8162;
    ++channel;
    var v8163 = this.channels;
    v4978 = channel < v8163;
  }
  toCompile = toCompile + "}        else {          weight = this.lastWeight;";
  channel = 0;
  var v8164 = this.channels;
  var v4979 = channel < v8164;
  for (;v4979;) {
    var v10411 = "output" + channel;
    var v10165 = v10411 + " = this.lastOutput[";
    var v9534 = v10165 + channel;
    var v8165 = v9534 + "];";
    toCompile = toCompile + v8165;
    ++channel;
    var v8166 = this.channels;
    v4979 = channel < v8166;
  }
  toCompile = toCompile + "alreadyProcessedTail = true;        }        while (weight > 0 && actualPosition < bufferLength) {          amountToNext = 1 + actualPosition - currentPosition;          if (weight >= amountToNext) {";
  channel = 0;
  var v8167 = this.channels;
  var v4980 = channel < v8167;
  for (;v4980;) {
    var v9535 = "output" + channel;
    var v8168 = v9535 + " += buffer[actualPosition++] * amountToNext;";
    toCompile = toCompile + v8168;
    ++channel;
    var v8169 = this.channels;
    v4980 = channel < v8169;
  }
  toCompile = toCompile + "currentPosition = actualPosition;            weight -= amountToNext;          }          else {";
  channel = 0;
  var v8170 = this.channels;
  var v4981 = channel < v8170;
  for (;v4981;) {
    var v10412 = "output" + channel;
    var v10166 = v10412 + " += buffer[actualPosition";
    var v10413;
    var v10546 = channel > 0;
    if (v10546) {
      v10413 = " + " + channel;
    } else {
      v10413 = "";
    }
    var v10167 = v10413;
    var v9536 = v10166 + v10167;
    var v8171 = v9536 + "] * weight;";
    toCompile = toCompile + v8171;
    ++channel;
    var v8172 = this.channels;
    v4981 = channel < v8172;
  }
  toCompile = toCompile + "currentPosition += weight;            weight = 0;            break;          }        }        if (weight == 0) {";
  channel = 0;
  var v8173 = this.channels;
  var v4982 = channel < v8173;
  for (;v4982;) {
    var v9537 = "outputBuffer[outputOffset++] = output" + channel;
    var v8174 = v9537 + " / ratioWeight;";
    toCompile = toCompile + v8174;
    ++channel;
    var v8175 = this.channels;
    v4982 = channel < v8175;
  }
  toCompile = toCompile + "}        else {          this.lastWeight = weight;";
  channel = 0;
  var v8176 = this.channels;
  var v4983 = channel < v8176;
  for (;v4983;) {
    var v10414 = "this.lastOutput[" + channel;
    var v10168 = v10414 + "] = output";
    var v9538 = v10168 + channel;
    var v8177 = v9538 + ";";
    toCompile = toCompile + v8177;
    ++channel;
    var v8178 = this.channels;
    v4983 = channel < v8178;
  }
  toCompile = toCompile + 'this.tailExists = true;          break;        }      } while (actualPosition < bufferLength);      return this.bufferSlice(outputOffset);    }    else {      return (this.noReturn) ? 0 : [];    }  }  else {    throw(new Error("Buffer was of incorrect sample length."));  }';
  var v10793 = Function("buffer", toCompile);
  this.interpolate = v10793;
  return;
}
function v37() {
  var v10169 = this.fromSampleRate;
  var v9539 = v10169 > 0;
  if (v9539) {
    var v10170 = this.toSampleRate;
    v9539 = v10170 > 0;
  }
  var v8179 = v9539;
  if (v8179) {
    var v9540 = this.channels;
    v8179 = v9540 > 0;
  }
  var v4987 = v8179;
  if (v4987) {
    var v8180 = this.fromSampleRate;
    var v8181 = this.toSampleRate;
    var v4986 = v8180 == v8181;
    if (v4986) {
      this.resampler = this.bypassResampler;
      this.ratioWeight = 1;
    } else {
      this.compileInterpolationFunction();
      this.resampler = this.interpolate;
      var v4984 = this.fromSampleRate;
      var v4985 = this.toSampleRate;
      this.ratioWeight = v4984 / v4985;
      this.tailExists = false;
      this.lastWeight = 0;
      this.initializeBuffers();
    }
  } else {
    throw new Error("Invalid settings specified for the resampler.");
  }
  return;
}
function v36() {
  var v4988 = this.outputBuffer;
  var event$$1 = {outputBuffer:v4988};
  this.onaudioprocess(event$$1);
  return;
}
function v35() {
  return;
}
function v34(runner$$2) {
  function RunNextSetup() {
    var v4990 = index$$40 < length$$12;
    if (v4990) {
      try {
        var v8182 = suite$$1.benchmarks;
        var v4989 = v8182[index$$40];
        v4989.Setup();
      } catch (e$$4) {
        suite$$1.NotifyError(e$$4);
        return null;
      }
      return RunNextBenchmark;
    }
    suite$$1.NotifyResult();
    return null;
  }
  function RunNextBenchmark() {
    try {
      var v8183 = suite$$1.benchmarks;
      var v4991 = v8183[index$$40];
      data$$20 = suite$$1.RunSingleBenchmark(v4991, data$$20);
    } catch (e$$5) {
      suite$$1.NotifyError(e$$5);
      return null;
    }
    var v4992;
    var v8184 = data$$20 == null;
    if (v8184) {
      v4992 = RunNextTearDown;
    } else {
      v4992 = RunNextBenchmark();
    }
    return v4992;
  }
  function RunNextTearDown() {
    try {
      var v8185 = suite$$1.benchmarks;
      var v8186 = index$$40;
      index$$40 = index$$40 + 1;
      var v4993 = v8185[v8186];
      v4993.TearDown();
    } catch (e$$6) {
      suite$$1.NotifyError(e$$6);
      return null;
    }
    return RunNextSetup;
  }
  BenchmarkSuite.ResetRNG();
  this.results = [];
  this.runner = runner$$2;
  var v4994 = this.benchmarks;
  var length$$12 = v4994.length;
  var index$$40 = 0;
  var suite$$1 = this;
  var data$$20;
  return RunNextSetup();
}
function v33(benchmark$$1, data$$18) {
  function Measure(data$$19) {
    var elapsed = 0;
    var start$$5 = new Date;
    var i$$5 = 0;
    var v8187;
    if (doDeterministic$$1) {
      var v9541 = benchmark$$1.deterministicIterations;
      v8187 = i$$5 < v9541;
    } else {
      v8187 = elapsed < 1E3;
    }
    var v4996 = v8187;
    for (;v4996;) {
      benchmark$$1.run();
      var v4995 = new Date;
      elapsed = v4995 - start$$5;
      i$$5++;
      var v8188;
      if (doDeterministic$$1) {
        var v9542 = benchmark$$1.deterministicIterations;
        v8188 = i$$5 < v9542;
      } else {
        v8188 = elapsed < 1E3;
      }
      v4996 = v8188;
    }
    var v4997 = data$$19 != null;
    if (v4997) {
      var v8189 = data$$19.runs;
      data$$19.runs = v8189 + i$$5;
      var v8190 = data$$19.elapsed;
      data$$19.elapsed = v8190 + elapsed;
    }
    return;
  }
  var config = BenchmarkSuite.config;
  var v4998;
  var v9543 = config.doWarmup;
  var v8191 = v9543 !== undefined;
  if (v8191) {
    v4998 = config.doWarmup;
  } else {
    v4998 = benchmark$$1.doWarmup;
  }
  var doWarmup$$1 = v4998;
  var v4999;
  var v9544 = config.doDeterministic;
  var v8192 = v9544 !== undefined;
  if (v8192) {
    v4999 = config.doDeterministic;
  } else {
    v4999 = benchmark$$1.doDeterministic;
  }
  var doDeterministic$$1 = v4999;
  var v8193 = !doWarmup$$1;
  if (v8193) {
    v8193 = data$$18 == null;
  }
  var v5000 = v8193;
  if (v5000) {
    data$$18 = {runs:0, elapsed:0};
  }
  var v5006 = data$$18 == null;
  if (v5006) {
    Measure(null);
    return {runs:0, elapsed:0};
  } else {
    Measure(data$$18);
    var v8194 = data$$18.runs;
    var v8195 = benchmark$$1.minIterations;
    var v5001 = v8194 < v8195;
    if (v5001) {
      return data$$18;
    }
    var v8196 = data$$18.elapsed;
    var v5002 = v8196 * 1E3;
    var v5003 = data$$18.runs;
    var usec = v5002 / v5003;
    var v5004;
    var v9545 = benchmark$$1.rmsResult;
    var v8197 = v9545 != null;
    if (v8197) {
      v5004 = benchmark$$1.rmsResult();
    } else {
      v5004 = 0;
    }
    var rms = v5004;
    var v5005 = new BenchmarkResult(benchmark$$1, usec, rms);
    this.NotifyStep(v5005);
    return null;
  }
  return;
}
function v32(error$$1) {
  var v8198 = this.runner;
  var v5009 = v8198.NotifyError;
  if (v5009) {
    var v5007 = this.runner;
    var v5008 = this.name;
    v5007.NotifyError(v5008, error$$1);
  }
  var v8199 = this.runner;
  var v5012 = v8199.NotifyStep;
  if (v5012) {
    var v5010 = this.runner;
    var v5011 = this.name;
    v5010.NotifyStep(v5011);
  }
  return;
}
function v31(runner$$1) {
  var v5013 = BenchmarkSuite.scores;
  v5013.push(1);
  var v5015 = runner$$1.NotifyResult;
  if (v5015) {
    var v5014 = this.name;
    runner$$1.NotifyResult(v5014, "Skipped");
  }
  return;
}
function v30() {
  var v5016 = this.results;
  var mean = BenchmarkSuite.GeometricMeanTime(v5016);
  var v8200 = this.reference;
  var v5017 = v8200[0];
  var score$$1 = v5017 / mean;
  var v5018 = BenchmarkSuite.scores;
  v5018.push(score$$1);
  var v8201 = this.runner;
  var v5022 = v8201.NotifyResult;
  if (v5022) {
    var v5019 = 100 * score$$1;
    var formatted$$1 = BenchmarkSuite.FormatScore(v5019);
    var v5020 = this.runner;
    var v5021 = this.name;
    v5020.NotifyResult(v5021, formatted$$1);
  }
  var v9546 = this.reference;
  var v8202 = v9546.length;
  var v5031 = v8202 == 2;
  if (v5031) {
    var v5023 = this.results;
    var meanLatency = BenchmarkSuite.GeometricMeanLatency(v5023);
    var v5030 = meanLatency != 0;
    if (v5030) {
      var v8203 = this.reference;
      var v5024 = v8203[1];
      var scoreLatency = v5024 / meanLatency;
      var v5025 = BenchmarkSuite.scores;
      v5025.push(scoreLatency);
      var v8204 = this.runner;
      var v5029 = v8204.NotifyResult;
      if (v5029) {
        var v5026 = 100 * scoreLatency;
        var formattedLatency = BenchmarkSuite.FormatScore(v5026);
        var v5027 = this.runner;
        var v8205 = this.name;
        var v5028 = v8205 + "Latency";
        v5027.NotifyResult(v5028, formattedLatency);
      }
    }
  }
  return;
}
function v29(result$$1) {
  var v5032 = this.results;
  v5032.push(result$$1);
  var v8206 = this.runner;
  var v5035 = v8206.NotifyStep;
  if (v5035) {
    var v5033 = this.runner;
    var v8207 = result$$1.benchmark;
    var v5034 = v8207.name;
    v5033.NotifyStep(v5034);
  }
  return;
}
function v28(value$$27) {
  var v5036 = value$$27 > 100;
  if (v5036) {
    return value$$27.toFixed(0);
  } else {
    return value$$27.toPrecision(3);
  }
  return;
}
function v27(measurements$$1) {
  var log$$2 = 0;
  var hasLatencyResult = false;
  var i$$4 = 0;
  var v8208 = measurements$$1.length;
  var v5038 = i$$4 < v8208;
  for (;v5038;) {
    var v9547 = measurements$$1[i$$4];
    var v8209 = v9547.latency;
    var v5037 = v8209 != 0;
    if (v5037) {
      var v10171 = measurements$$1[i$$4];
      var v9548 = v10171.latency;
      var v8210 = Math.log(v9548);
      log$$2 = log$$2 + v8210;
      hasLatencyResult = true;
    }
    i$$4++;
    var v8211 = measurements$$1.length;
    v5038 = i$$4 < v8211;
  }
  if (hasLatencyResult) {
    var v5039 = Math.E;
    var v8212 = measurements$$1.length;
    var v5040 = log$$2 / v8212;
    return Math.pow(v5039, v5040);
  } else {
    return 0;
  }
  return;
}
function v26(measurements) {
  var log$$1 = 0;
  var i$$3 = 0;
  var v8213 = measurements.length;
  var v5041 = i$$3 < v8213;
  for (;v5041;) {
    var v10172 = measurements[i$$3];
    var v9549 = v10172.time;
    var v8214 = Math.log(v9549);
    log$$1 = log$$1 + v8214;
    i$$3++;
    var v8215 = measurements.length;
    v5041 = i$$3 < v8215;
  }
  var v5042 = Math.E;
  var v8216 = measurements.length;
  var v5043 = log$$1 / v8216;
  return Math.pow(v5042, v5043);
}
function v25() {
  var numbers = BenchmarkSuite.scores;
  var log = 0;
  var i$$2 = 0;
  var v8217 = numbers.length;
  var v5044 = i$$2 < v8217;
  for (;v5044;) {
    var v9550 = numbers[i$$2];
    var v8218 = Math.log(v9550);
    log = log + v8218;
    i$$2++;
    var v8219 = numbers.length;
    v5044 = i$$2 < v8219;
  }
  var v5045 = Math.E;
  var v8220 = numbers.length;
  var v5046 = log / v8220;
  return Math.pow(v5045, v5046);
}
function v24() {
  var result = 0;
  var suites$$1 = BenchmarkSuite.suites;
  var i$$1 = 0;
  var v8221 = suites$$1.length;
  var v5047 = i$$1 < v8221;
  for (;v5047;) {
    var v10173 = suites$$1[i$$1];
    var v9551 = v10173.benchmarks;
    var v8222 = v9551.length;
    result = result + v8222;
    i$$1++;
    var v8223 = suites$$1.length;
    v5047 = i$$1 < v8223;
  }
  return result;
}
function v23() {
  var runner = {NotifyStart:ShowBox, NotifyError:AddError, NotifyResult:AddResult, NotifyScore:AddScore};
  var skipBenchmarks$$1 = skipBenchmarks;
  function RunStep() {
    var v8224 = continuation;
    var v9552 = !v8224;
    if (v9552) {
      v8224 = index$$39 < length$$11;
    }
    var v5053 = v8224;
    for (;v5053;) {
      if (continuation) {
        continuation = continuation();
      } else {
        var v5048 = index$$39;
        index$$39 = index$$39 + 1;
        var suite = suites[v5048];
        var v5050 = runner.NotifyStart;
        if (v5050) {
          var v5049 = suite.name;
          runner.NotifyStart(v5049);
        }
        var v9553 = suite.name;
        var v8225 = skipBenchmarks$$1.indexOf(v9553);
        var v5051 = v8225 > -1;
        if (v5051) {
          suite.NotifySkipped(runner);
        } else {
          continuation = suite.RunStep(runner);
        }
      }
      var v9554 = continuation;
      if (v9554) {
        var v10174 = typeof window;
        v9554 = v10174 != "undefined";
      }
      var v8226 = v9554;
      if (v8226) {
        v8226 = window.setTimeout;
      }
      var v5052 = v8226;
      if (v5052) {
        window.setTimeout(RunStep, 25);
        return;
      }
      var v8227 = continuation;
      var v9555 = !v8227;
      if (v9555) {
        v8227 = index$$39 < length$$11;
      }
      v5053 = v8227;
    }
    var v5055 = runner.NotifyScore;
    if (v5055) {
      var score = BenchmarkSuite.GeometricMean();
      var v5054 = 100 * score;
      var formatted = BenchmarkSuite.FormatScore(v5054);
      runner.NotifyScore(formatted);
    }
    return;
  }
  var v5056;
  var v9556 = typeof skipBenchmarks$$1;
  var v8228 = v9556 === "undefined";
  if (v8228) {
    v5056 = [];
  } else {
    v5056 = skipBenchmarks$$1;
  }
  skipBenchmarks$$1 = v5056;
  var continuation = null;
  var suites = BenchmarkSuite.suites;
  var length$$11 = suites.length;
  BenchmarkSuite.scores = [];
  var index$$39 = 0;
  RunStep();
  return;
}
function v22() {
  function v21() {
    function v20() {
      var v8229 = seed + 2127912214;
      var v8230 = seed << 12;
      var v5057 = v8229 + v8230;
      seed = v5057 & 4294967295;
      var v8231 = seed ^ 3345072700;
      var v8232 = seed >>> 19;
      var v5058 = v8231 ^ v8232;
      seed = v5058 & 4294967295;
      var v8233 = seed + 374761393;
      var v8234 = seed << 5;
      var v5059 = v8233 + v8234;
      seed = v5059 & 4294967295;
      var v8235 = seed + 3550635116;
      var v8236 = seed << 9;
      var v5060 = v8235 ^ v8236;
      seed = v5060 & 4294967295;
      var v8237 = seed + 4251993797;
      var v8238 = seed << 3;
      var v5061 = v8237 + v8238;
      seed = v5061 & 4294967295;
      var v8239 = seed ^ 3042594569;
      var v8240 = seed >>> 16;
      var v5062 = v8239 ^ v8240;
      seed = v5062 & 4294967295;
      var v5063 = seed & 268435455;
      return v5063 / 268435456;
    }
    var seed = 49734321;
    return v20;
  }
  var v5064 = Math;
  var v10794 = v21();
  v5064.random = v10794;
  return;
}
function v19(s$$2) {
  throw "Alert called with argument: " + s$$2;
}
function v18() {
  return this.time;
}
function v17() {
  var v10415 = performance.now;
  var v10547 = !v10415;
  if (v10547) {
    v10415 = performance.mozNow;
  }
  var v10175 = v10415;
  var v10416 = !v10175;
  if (v10416) {
    v10175 = performance.msNow;
  }
  var v9557 = v10175;
  var v10176 = !v9557;
  if (v10176) {
    v9557 = performance.oNow;
  }
  var v8241 = v9557;
  var v9558 = !v8241;
  if (v9558) {
    v8241 = performance.webkitNow;
  }
  var v5065 = v8241;
  var v8242 = !v5065;
  if (v8242) {
    v5065 = Date.now;
  }
  return v5065;
}
function Benchmark() {
  function v1() {
    return;
  }
  function v0() {
    return;
  }
  var name$$30 = "Gameboy";
  var doWarmup = false;
  var doDeterministic = false;
  var deterministicIterations = 20;
  var run$$1 = runGameboy;
  var setup = setupGameboy;
  var tearDown = tearDownGameboy;
  var rmsResult = null;
  var minIterations = 4;
  this.name = name$$30;
  this.doWarmup = doWarmup;
  this.doDeterministic = doDeterministic;
  this.deterministicIterations = deterministicIterations;
  this.run = run$$1;
  var v5066;
  if (setup) {
    v5066 = setup;
  } else {
    v5066 = v0;
  }
  this.Setup = v5066;
  var v5067;
  if (tearDown) {
    v5067 = tearDown;
  } else {
    v5067 = v1;
  }
  this.TearDown = v5067;
  var v5068;
  if (rmsResult) {
    v5068 = rmsResult;
  } else {
    v5068 = null;
  }
  this.rmsResult = v5068;
  var v5069;
  if (minIterations) {
    v5069 = minIterations;
  } else {
    v5069 = 32;
  }
  this.minIterations = v5069;
  return;
}
function BenchmarkResult(benchmark, time, latency) {
  this.benchmark = benchmark;
  this.time = time;
  this.latency = latency;
  return;
}
function BenchmarkSuite(name$$31, reference, benchmarks$$1) {
  this.name = name$$31;
  this.reference = reference;
  this.benchmarks = benchmarks$$1;
  var v5070 = BenchmarkSuite.suites;
  v5070.push(this);
  return;
}
function setupGameboy() {
  var v10548 = typeof Uint8Array;
  var v10417 = v10548 != "undefined";
  if (v10417) {
    var v10549 = typeof Int8Array;
    v10417 = v10549 != "undefined";
  }
  var v10177 = v10417;
  if (v10177) {
    var v10418 = typeof Float32Array;
    v10177 = v10418 != "undefined";
  }
  var v9559 = v10177;
  if (v9559) {
    var v10178 = typeof Int32Array;
    v9559 = v10178 != "undefined";
  }
  var v8243 = v9559;
  var v5071 = !v8243;
  if (v5071) {
    throw "TypedArrayUnsupported";
  }
  decoded_gameboy_rom = base64_decode(gameboy_rom);
  rom = null;
  return;
}
function runGameboy() {
  start();
  gameboy.instructions = 0;
  gameboy.totalInstructions = 25E4;
  var v8244 = gameboy.instructions;
  var v8245 = gameboy.totalInstructions;
  var v5072 = v8244 <= v8245;
  for (;v5072;) {
    gameboy.run();
    GameBoyAudioNode.run();
    var v8246 = gameboy.instructions;
    var v8247 = gameboy.totalInstructions;
    v5072 = v8246 <= v8247;
  }
  resetGlobalVariables();
  return;
}
function tearDownGameboy() {
  decoded_gameboy_rom = null;
  expectedGameboyStateStr = null;
  return;
}
function GameBoyContext() {
  function v5() {
    return;
  }
  function v4(buffer$$8, x$$47, y$$30) {
    var sum = 0;
    var i$$6 = 0;
    var v9560 = buffer$$8.data;
    var v8248 = v9560.length;
    var v5073 = i$$6 < v8248;
    for (;v5073;) {
      var v10179 = buffer$$8.data;
      var v9561 = v10179[i$$6];
      var v8249 = i$$6 * v9561;
      sum = sum + v8249;
      sum = sum % 1E3;
      i$$6++;
      var v9562 = buffer$$8.data;
      var v8250 = v9562.length;
      v5073 = i$$6 < v8250;
    }
    return;
  }
  function v3(w$$5, h$$4) {
    var result$$2 = {};
    var v8251 = w$$5 * h$$4;
    var v5074 = v8251 * 4;
    var v10795 = new Uint8Array(v5074);
    result$$2.data = v10795;
    return result$$2;
  }
  function v2() {
    return new Buffer;
  }
  this.createBuffer = v2;
  this.createImageData = v3;
  this.putImageData = v4;
  this.drawImage = v5;
  return;
}
function GameBoyCanvas() {
  function v6() {
    return new GameBoyContext;
  }
  this.getContext = v6;
  this.width = 160;
  this.height = 144;
  this.style = {visibility:"visibile"};
  return;
}
function cout(message$$9, colorIndex) {
  return;
}
function clear_terminal() {
  return;
}
function GameBoyAudioContext() {
  function v12() {
    function v11(i$$8) {
      var v5075 = this.channelData;
      return v5075[i$$8];
    }
    var bufferSize = samplesPerCallback;
    var inputChannels = 1;
    var outputChannels = 2;
    GameBoyAudioNode.bufferSize = bufferSize;
    GameBoyAudioNode.outputBuffer = {getChannelData:v11, channelData:[]};
    var i$$7 = 0;
    var v5078 = i$$7 < outputChannels;
    for (;v5078;) {
      var v8252 = GameBoyAudioNode.outputBuffer;
      var v5076 = v8252.channelData;
      var v5077 = i$$7;
      var v10796 = new Float32Array(bufferSize);
      v5076[v5077] = v10796;
      i$$7++;
      v5078 = i$$7 < outputChannels;
    }
    return GameBoyAudioNode;
  }
  function v10(channels, len, sampleRate) {
    return {gain:1, numberOfChannels:1, length:1, duration:2.0833333110203966E-5, sampleRate:48E3};
  }
  function v9() {
    function v8() {
      return;
    }
    function v7() {
      return;
    }
    return {noteOn:v7, connect:v8};
  }
  this.createBufferSource = v9;
  this.sampleRate = 48E3;
  this.destination = {};
  this.createBuffer = v10;
  this.createJavaScriptNode = v12;
  return;
}
function new_Date() {
  function v13() {
    mock_date_time_counter = mock_date_time_counter + 16;
    return mock_date_time_counter;
  }
  return {getTime:v13};
}
function checkFinalState() {
  function sum$$1(a) {
    var result$$3 = 0;
    var i$$9 = 0;
    var v8253 = a.length;
    var v5079 = i$$9 < v8253;
    for (;v5079;) {
      var v8254 = a[i$$9];
      result$$3 = result$$3 + v8254;
      i$$9++;
      var v8255 = a.length;
      v5079 = i$$9 < v8255;
    }
    return result$$3;
  }
  var v5080 = gameboy.registerA;
  var v5081 = gameboy.registerB;
  var v5082 = gameboy.registerC;
  var v5083 = gameboy.registerE;
  var v5084 = gameboy.registerF;
  var v5085 = gameboy.registersHL;
  var v5086 = gameboy.programCounter;
  var v5087 = gameboy.stackPointer;
  var v9563 = gameboy.ROM;
  var v8256 = gameboy.fromTypedArray(v9563);
  var v5088 = sum$$1(v8256);
  var v9564 = gameboy.memory;
  var v8257 = gameboy.fromTypedArray(v9564);
  var v5089 = sum$$1(v8257);
  var v9565 = gameboy.MBCRam;
  var v8258 = gameboy.fromTypedArray(v9565);
  var v5090 = sum$$1(v8258);
  var v9566 = gameboy.VRam;
  var v8259 = gameboy.fromTypedArray(v9566);
  var v5091 = sum$$1(v8259);
  var state = {registerA:v5080, registerB:v5081, registerC:v5082, registerE:v5083, registerF:v5084, registersHL:v5085, programCounter:v5086, stackPointer:v5087, sumROM:v5088, sumMemory:v5089, sumMBCRam:v5090, sumVRam:v5091};
  var stateStr = JSON.stringify(state);
  var v8260 = typeof expectedGameboyStateStr;
  var v5094 = v8260 != "undefined";
  if (v5094) {
    var v5093 = stateStr != expectedGameboyStateStr;
    if (v5093) {
      var v10419 = "Incorrect final state of processor:\n" + " actual   ";
      var v10180 = v10419 + stateStr;
      var v9567 = v10180 + "\n";
      var v8261 = v9567 + " expected ";
      var v5092 = v8261 + expectedGameboyStateStr;
      alert(v5092);
    }
  } else {
    alert(stateStr);
  }
  return;
}
function resetGlobalVariables() {
  audioContextHandle = null;
  audioNode = null;
  audioSource = null;
  launchedContext = false;
  audioContextSampleBuffer = [];
  resampled = [];
  webAudioMinBufferSize = 15E3;
  webAudioMaxBufferSize = 25E3;
  webAudioActualSampleRate = 44100;
  XAudioJSSampleRate = 0;
  webAudioMono = false;
  XAudioJSVolume = 1;
  resampleControl = null;
  audioBufferSize = 0;
  resampleBufferStart = 0;
  resampleBufferEnd = 0;
  resampleBufferSize = 2;
  gameboy = null;
  gbRunInterval = null;
  return;
}
function base64(data$$21) {
  try {
    var base64$$1 = GameBoyWindow.btoa(data$$21);
  } catch (error$$2) {
    base64$$1 = "";
    var dataLength = data$$21.length;
    var v5107 = dataLength > 0;
    if (v5107) {
      var bytes = [0, 0, 0];
      var index$$41 = 0;
      var remainder = dataLength % 3;
      var v9568 = data$$21.length;
      var v8262 = v9568 % 3;
      var v5096 = v8262 > 0;
      for (;v5096;) {
        var v5095 = data$$21.length;
        data$$21[v5095] = " ";
        var v9569 = data$$21.length;
        var v8263 = v9569 % 3;
        v5096 = v8263 > 0;
      }
      var v5100 = index$$41 < dataLength;
      for (;v5100;) {
        var v9570 = index$$41;
        index$$41 = index$$41 + 1;
        var v8264 = data$$21.charCodeAt(v9570);
        var v5097 = v8264 & 255;
        var v9571 = index$$41;
        index$$41 = index$$41 + 1;
        var v8265 = data$$21.charCodeAt(v9571);
        var v5098 = v8265 & 255;
        var v9572 = index$$41;
        index$$41 = index$$41 + 1;
        var v8266 = data$$21.charCodeAt(v9572);
        var v5099 = v8266 & 255;
        bytes = [v5097, v5098, v5099];
        var v10574 = bytes[0];
        var v10550 = v10574 >> 2;
        var v10420 = toBase64[v10550];
        var v10596 = bytes[0];
        var v10589 = v10596 & 3;
        var v10575 = v10589 << 4;
        var v10590 = bytes[1];
        var v10576 = v10590 >> 4;
        var v10551 = v10575 | v10576;
        var v10421 = toBase64[v10551];
        var v10181 = v10420 + v10421;
        var v10591 = bytes[1];
        var v10577 = v10591 & 15;
        var v10552 = v10577 << 2;
        var v10578 = bytes[2];
        var v10553 = v10578 >> 6;
        var v10422 = v10552 | v10553;
        var v10182 = toBase64[v10422];
        var v9573 = v10181 + v10182;
        var v10423 = bytes[2];
        var v10183 = v10423 & 63;
        var v9574 = toBase64[v10183];
        var v8267 = v9573 + v9574;
        base64$$1 = base64$$1 + v8267;
        v5100 = index$$41 < dataLength;
      }
      var v5106 = remainder > 0;
      if (v5106) {
        var v8268 = base64$$1.length;
        var v5101 = v8268 - 1;
        base64$$1[v5101] = "=";
        var v5105 = remainder == 2;
        if (v5105) {
          var v8269 = base64$$1.length;
          var v5102 = v8269 - 2;
          base64$$1[v5102] = "=";
          var v8270 = base64$$1.length;
          var v5103 = v8270 - 3;
          var v10184 = bytes[0];
          var v9575 = v10184 & 3;
          var v8271 = v9575 << 4;
          base64$$1[v5103] = toBase64[v8271];
        } else {
          var v8272 = base64$$1.length;
          var v5104 = v8272 - 2;
          var v10185 = bytes[1];
          var v9576 = v10185 & 15;
          var v8273 = v9576 << 2;
          base64$$1[v5104] = toBase64[v8273];
        }
      }
    }
  }
  return base64$$1;
}
function base64_decode(data$$22) {
  try {
    var decode64 = GameBoyWindow.atob(data$$22);
  } catch (error$$3) {
    decode64 = "";
    var dataLength$$1 = data$$22.length;
    var v8274 = dataLength$$1 > 3;
    if (v8274) {
      var v9577 = dataLength$$1 % 4;
      v8274 = v9577 == 0;
    }
    var v5115 = v8274;
    if (v5115) {
      var sixbits = [0, 0, 0, 0];
      var index$$42 = 0;
      var v5112 = index$$42 < dataLength$$1;
      for (;v5112;) {
        var v9578 = index$$42;
        index$$42 = index$$42 + 1;
        var v8275 = data$$22.charAt(v9578);
        var v5108 = fromBase64.indexOf(v8275);
        var v9579 = index$$42;
        index$$42 = index$$42 + 1;
        var v8276 = data$$22.charAt(v9579);
        var v5109 = fromBase64.indexOf(v8276);
        var v9580 = index$$42;
        index$$42 = index$$42 + 1;
        var v8277 = data$$22.charAt(v9580);
        var v5110 = fromBase64.indexOf(v8277);
        var v9581 = index$$42;
        index$$42 = index$$42 + 1;
        var v8278 = data$$22.charAt(v9581);
        var v5111 = fromBase64.indexOf(v8278);
        sixbits = [v5108, v5109, v5110, v5111];
        var v10579 = sixbits[0];
        var v10554 = v10579 << 2;
        var v10580 = sixbits[1];
        var v10555 = v10580 >> 4;
        var v10424 = v10554 | v10555;
        var v10186 = String.fromCharCode(v10424);
        var v10592 = sixbits[1];
        var v10581 = v10592 & 15;
        var v10556 = v10581 << 4;
        var v10582 = sixbits[2];
        var v10557 = v10582 >> 2;
        var v10425 = v10556 | v10557;
        var v10187 = String.fromCharCode(v10425);
        var v9582 = v10186 + v10187;
        var v10583 = sixbits[2];
        var v10558 = v10583 & 3;
        var v10426 = v10558 << 6;
        var v10427 = sixbits[3];
        var v10188 = v10426 | v10427;
        var v9583 = String.fromCharCode(v10188);
        var v8279 = v9582 + v9583;
        decode64 = decode64 + v8279;
        v5112 = index$$42 < dataLength$$1;
      }
      var v8280 = sixbits[3];
      var v5114 = v8280 >= 64;
      if (v5114) {
        var v8281 = decode64.length;
        decode64.length = v8281 - 1;
        var v8282 = sixbits[2];
        var v5113 = v8282 >= 64;
        if (v5113) {
          var v8283 = decode64.length;
          decode64.length = v8283 - 1;
        }
      }
    }
  }
  return decode64;
}
function to_little_endian_dword(str$$6) {
  var v5116 = to_little_endian_word(str$$6);
  var v9584 = str$$6 >> 16;
  var v8284 = v9584 & 255;
  var v9585 = str$$6 >> 24;
  var v8285 = v9585 & 255;
  var v5117 = String.fromCharCode(v8284, v8285);
  return v5116 + v5117;
}
function to_little_endian_word(str$$7) {
  var v5118 = to_byte(str$$7);
  var v9586 = str$$7 >> 8;
  var v8286 = v9586 & 255;
  var v5119 = String.fromCharCode(v8286);
  return v5118 + v5119;
}
function to_byte(str$$8) {
  var v5120 = str$$8 & 255;
  return String.fromCharCode(v5120);
}
function arrayToBase64(arrayIn) {
  var binString = "";
  var length$$13 = arrayIn.length;
  var index$$43 = 0;
  var v5122 = index$$43 < length$$13;
  for (;v5122;) {
    var v9587 = arrayIn[index$$43];
    var v8287 = typeof v9587;
    var v5121 = v8287 == "number";
    if (v5121) {
      var v9588 = arrayIn[index$$43];
      var v8288 = String.fromCharCode(v9588);
      binString = binString + v8288;
    }
    ++index$$43;
    v5122 = index$$43 < length$$13;
  }
  return base64(binString);
}
function base64ToArray(b64String) {
  var binString$$1 = base64_decode(b64String);
  var outArray = [];
  var length$$14 = binString$$1.length;
  var index$$44 = 0;
  var v5124 = index$$44 < length$$14;
  for (;v5124;) {
    var v9589 = index$$44;
    index$$44 = index$$44 + 1;
    var v8289 = binString$$1.charCodeAt(v9589);
    var v5123 = v8289 & 255;
    outArray.push(v5123);
    v5124 = index$$44 < length$$14;
  }
  return outArray;
}
function Resampler(fromSampleRate, toSampleRate, channels$$1, outputBufferSize, noReturn) {
  this.fromSampleRate = fromSampleRate;
  this.toSampleRate = toSampleRate;
  this.channels = channels$$1 | 0;
  this.outputBufferSize = outputBufferSize;
  var v5125 = !noReturn;
  this.noReturn = !v5125;
  this.initialize();
  return;
}
function XAudioServer(channels$$2, sampleRate$$1, minBufferSize, maxBufferSize, underRunCallback, volume) {
  function v14() {
    return;
  }
  var v5126;
  var v8290 = channels$$2 == 2;
  if (v8290) {
    v5126 = 2;
  } else {
    v5126 = 1;
  }
  this.audioChannels = v5126;
  var v5127 = this.audioChannels;
  webAudioMono = v5127 == 1;
  var v5128;
  var v9590 = sampleRate$$1 > 0;
  if (v9590) {
    v9590 = sampleRate$$1 <= 16777215;
  }
  var v8291 = v9590;
  if (v8291) {
    v5128 = sampleRate$$1;
  } else {
    v5128 = 44100;
  }
  XAudioJSSampleRate = v5128;
  var v5129;
  var v10189 = samplesPerCallback << 1;
  var v9591 = minBufferSize >= v10189;
  if (v9591) {
    v9591 = minBufferSize < maxBufferSize;
  }
  var v8293 = v9591;
  if (v8293) {
    var v9592;
    if (webAudioMono) {
      v9592 = 4294967295;
    } else {
      v9592 = 4294967294;
    }
    var v8292 = v9592;
    v5129 = minBufferSize & v8292;
  } else {
    v5129 = samplesPerCallback << 1;
  }
  webAudioMinBufferSize = v5129;
  var v5130;
  var v9593 = Math.floor(maxBufferSize);
  var v10190 = this.audioChannels;
  var v9594 = webAudioMinBufferSize + v10190;
  var v8295 = v9593 > v9594;
  if (v8295) {
    var v9595;
    if (webAudioMono) {
      v9595 = 4294967295;
    } else {
      v9595 = 4294967294;
    }
    var v8294 = v9595;
    v5130 = maxBufferSize & v8294;
  } else {
    v5130 = minBufferSize << 1;
  }
  webAudioMaxBufferSize = v5130;
  var v5131;
  var v9596 = typeof underRunCallback;
  var v8296 = v9596 == "function";
  if (v8296) {
    v5131 = underRunCallback;
  } else {
    v5131 = v14;
  }
  this.underRunCallback = v5131;
  var v5132;
  var v9597 = volume >= 0;
  if (v9597) {
    v9597 = volume <= 1;
  }
  var v8297 = v9597;
  if (v8297) {
    v5132 = volume;
  } else {
    v5132 = 1;
  }
  XAudioJSVolume = v5132;
  this.audioType = -1;
  this.mozAudioTail = [];
  this.audioHandleMoz = null;
  this.audioHandleFlash = null;
  this.flashInitialized = false;
  this.mozAudioFound = false;
  this.initializeAudio();
  return;
}
function getFloat32(size$$4) {
  try {
    return new Float32Array(size$$4);
  } catch (error$$10) {
    return new Array(size$$4);
  }
  return;
}
function getFloat32Flat() {
  var size$$5 = resampleBufferSize;
  try {
    var newBuffer = new Float32Array(size$$5);
  } catch (error$$11) {
    newBuffer = new Array(size$$5);
    var audioSampleIndice = 0;
    var v8298 = audioSampleIndice = audioSampleIndice + 1;
    var v5133 = v8298 < size$$5;
    do {
      newBuffer[audioSampleIndice] = 0;
      var v8299 = audioSampleIndice = audioSampleIndice + 1;
      v5133 = v8299 < size$$5;
    } while (v5133);
  }
  return newBuffer;
}
function audioOutputFlashEvent() {
  resampleRefill();
  return outputConvert();
}
function generateFlashStereoString() {
  var copyBinaryStringLeft = "";
  var copyBinaryStringRight = "";
  var index$$47 = 0;
  var v8300 = index$$47 < samplesPerCallback;
  if (v8300) {
    v8300 = resampleBufferStart != resampleBufferEnd;
  }
  var v5135 = v8300;
  for (;v5135;) {
    var v10600 = resampleBufferStart;
    resampleBufferStart = resampleBufferStart + 1;
    var v10597 = resampled[v10600];
    var v10593 = v10597 + 1;
    var v10584 = Math.max(v10593, 0);
    var v10559 = Math.min(v10584, 2);
    var v10428 = v10559 * 16383;
    var v10191 = v10428 | 0;
    var v9598 = v10191 + 12288;
    var v8301 = String.fromCharCode(v9598);
    copyBinaryStringLeft = copyBinaryStringLeft + v8301;
    var v10601 = resampleBufferStart;
    resampleBufferStart = resampleBufferStart + 1;
    var v10598 = resampled[v10601];
    var v10594 = v10598 + 1;
    var v10585 = Math.max(v10594, 0);
    var v10560 = Math.min(v10585, 2);
    var v10429 = v10560 * 16383;
    var v10192 = v10429 | 0;
    var v9599 = v10192 + 12288;
    var v8302 = String.fromCharCode(v9599);
    copyBinaryStringRight = copyBinaryStringRight + v8302;
    var v5134 = resampleBufferStart == resampleBufferSize;
    if (v5134) {
      resampleBufferStart = 0;
    }
    ++index$$47;
    var v8303 = index$$47 < samplesPerCallback;
    if (v8303) {
      v8303 = resampleBufferStart != resampleBufferEnd;
    }
    v5135 = v8303;
  }
  return copyBinaryStringLeft + copyBinaryStringRight;
}
function generateFlashMonoString() {
  var copyBinaryString = "";
  var index$$48 = 0;
  var v8304 = index$$48 < samplesPerCallback;
  if (v8304) {
    v8304 = resampleBufferStart != resampleBufferEnd;
  }
  var v5137 = v8304;
  for (;v5137;) {
    var v10602 = resampleBufferStart;
    resampleBufferStart = resampleBufferStart + 1;
    var v10599 = resampled[v10602];
    var v10595 = v10599 + 1;
    var v10586 = Math.max(v10595, 0);
    var v10561 = Math.min(v10586, 2);
    var v10430 = v10561 * 16383;
    var v10193 = v10430 | 0;
    var v9600 = v10193 + 12288;
    var v8305 = String.fromCharCode(v9600);
    copyBinaryString = copyBinaryString + v8305;
    var v5136 = resampleBufferStart == resampleBufferSize;
    if (v5136) {
      resampleBufferStart = 0;
    }
    ++index$$48;
    var v8306 = index$$48 < samplesPerCallback;
    if (v8306) {
      v8306 = resampleBufferStart != resampleBufferEnd;
    }
    v5137 = v8306;
  }
  return copyBinaryString;
}
function audioOutputEvent(event$$3) {
  var index$$49 = 0;
  var v5138 = event$$3.outputBuffer;
  var buffer1 = v5138.getChannelData(0);
  var v5139 = event$$3.outputBuffer;
  var buffer2 = v5139.getChannelData(1);
  resampleRefill();
  var v5147 = !webAudioMono;
  if (v5147) {
    var v8307 = index$$49 < samplesPerCallback;
    if (v8307) {
      v8307 = resampleBufferStart != resampleBufferEnd;
    }
    var v5143 = v8307;
    for (;v5143;) {
      var v8308 = resampleBufferStart;
      resampleBufferStart = resampleBufferStart + 1;
      var v5140 = resampled[v8308];
      buffer1[index$$49] = v5140 * XAudioJSVolume;
      var v5141 = index$$49;
      index$$49 = index$$49 + 1;
      var v9601 = resampleBufferStart;
      resampleBufferStart = resampleBufferStart + 1;
      var v8309 = resampled[v9601];
      buffer2[v5141] = v8309 * XAudioJSVolume;
      var v5142 = resampleBufferStart == resampleBufferSize;
      if (v5142) {
        resampleBufferStart = 0;
      }
      var v8310 = index$$49 < samplesPerCallback;
      if (v8310) {
        v8310 = resampleBufferStart != resampleBufferEnd;
      }
      v5143 = v8310;
    }
  } else {
    var v8311 = index$$49 < samplesPerCallback;
    if (v8311) {
      v8311 = resampleBufferStart != resampleBufferEnd;
    }
    var v5146 = v8311;
    for (;v5146;) {
      var v8312 = resampleBufferStart;
      resampleBufferStart = resampleBufferStart + 1;
      var v5144 = resampled[v8312];
      buffer2[index$$49] = buffer1[index$$49] = v5144 * XAudioJSVolume;
      ++index$$49;
      var v5145 = resampleBufferStart == resampleBufferSize;
      if (v5145) {
        resampleBufferStart = 0;
      }
      var v8313 = index$$49 < samplesPerCallback;
      if (v8313) {
        v8313 = resampleBufferStart != resampleBufferEnd;
      }
      v5146 = v8313;
    }
  }
  var v5148 = index$$49 < samplesPerCallback;
  for (;v5148;) {
    buffer2[index$$49] = buffer1[index$$49] = 0;
    ++index$$49;
    v5148 = index$$49 < samplesPerCallback;
  }
  return;
}
function resampleRefill() {
  var v5155 = audioBufferSize > 0;
  if (v5155) {
    var v5149 = getBufferSamples();
    var resampleLength = resampleControl.resampler(v5149);
    var resampledResult = resampleControl.outputBuffer;
    var index2 = 0;
    var v5154 = index2 < resampleLength;
    for (;v5154;) {
      var v5150 = resampleBufferEnd;
      resampleBufferEnd = resampleBufferEnd + 1;
      resampled[v5150] = resampledResult[index2];
      var v5151 = resampleBufferEnd == resampleBufferSize;
      if (v5151) {
        resampleBufferEnd = 0;
      }
      var v5153 = resampleBufferStart == resampleBufferEnd;
      if (v5153) {
        ++resampleBufferStart;
        var v5152 = resampleBufferStart == resampleBufferSize;
        if (v5152) {
          resampleBufferStart = 0;
        }
      }
      ++index2;
      v5154 = index2 < resampleLength;
    }
    audioBufferSize = 0;
  }
  return;
}
function resampledSamplesLeft() {
  var v9602;
  var v10194 = resampleBufferStart <= resampleBufferEnd;
  if (v10194) {
    v9602 = 0;
  } else {
    v9602 = resampleBufferSize;
  }
  var v8314 = v9602;
  var v5156 = v8314 + resampleBufferEnd;
  return v5156 - resampleBufferStart;
}
function getBufferSamples() {
  try {
    return audioContextSampleBuffer.subarray(0, audioBufferSize);
  } catch (error$$12) {
    try {
      audioContextSampleBuffer.length = audioBufferSize;
      return audioContextSampleBuffer;
    } catch (error$$13) {
      return audioContextSampleBuffer.slice(0, audioBufferSize);
    }
  }
  return;
}
function resetCallbackAPIAudioBuffer(APISampleRate) {
  var bufferAlloc = samplesPerCallback;
  audioContextSampleBuffer = getFloat32(webAudioMaxBufferSize);
  audioBufferSize = webAudioMaxBufferSize;
  resampleBufferStart = 0;
  resampleBufferEnd = 0;
  var v9603 = webAudioMaxBufferSize;
  var v10195 = XAudioJSSampleRate / APISampleRate;
  var v9604 = Math.ceil(v10195);
  var v8315 = v9603 * v9604;
  var v5157 = Math.max(v8315, samplesPerCallback);
  resampleBufferSize = v5157 << 1;
  if (webAudioMono) {
    resampled = getFloat32Flat();
    resampleControl = new Resampler(XAudioJSSampleRate, APISampleRate, 1, resampleBufferSize, true);
    outputConvert = generateFlashMonoString;
  } else {
    resampleBufferSize = resampleBufferSize << 1;
    resampled = getFloat32Flat();
    resampleControl = new Resampler(XAudioJSSampleRate, APISampleRate, 2, resampleBufferSize, true);
    outputConvert = generateFlashStereoString;
  }
  return;
}
function Resize(widthOriginal, heightOriginal, targetWidth, targetHeight, blendAlpha, interpolationPass) {
  var v8316 = parseInt(widthOriginal);
  var v9605 = !v8316;
  if (v9605) {
    v8316 = 0;
  }
  var v5158 = v8316;
  var v10797 = Math.abs(v5158);
  this.widthOriginal = v10797;
  var v8317 = parseInt(heightOriginal);
  var v9606 = !v8317;
  if (v9606) {
    v8317 = 0;
  }
  var v5159 = v8317;
  var v10798 = Math.abs(v5159);
  this.heightOriginal = v10798;
  var v8318 = parseInt(targetWidth);
  var v9607 = !v8318;
  if (v9607) {
    v8318 = 0;
  }
  var v5160 = v8318;
  var v10799 = Math.abs(v5160);
  this.targetWidth = v10799;
  var v8319 = parseInt(targetHeight);
  var v9608 = !v8319;
  if (v9608) {
    v8319 = 0;
  }
  var v5161 = v8319;
  var v10800 = Math.abs(v5161);
  this.targetHeight = v10800;
  var v5162;
  var v9609 = !blendAlpha;
  var v8320 = !v9609;
  if (v8320) {
    v5162 = 4;
  } else {
    v5162 = 3;
  }
  this.colorChannels = v5162;
  var v5163 = !interpolationPass;
  this.interpolationPass = !v5163;
  var v5164 = this.targetWidth;
  var v5165 = this.colorChannels;
  this.targetWidthMultipliedByChannels = v5164 * v5165;
  var v5166 = this.widthOriginal;
  var v5167 = this.colorChannels;
  this.originalWidthMultipliedByChannels = v5166 * v5167;
  var v5168 = this.heightOriginal;
  var v5169 = this.colorChannels;
  this.originalHeightMultipliedByChannels = v5168 * v5169;
  var v5170 = this.targetWidthMultipliedByChannels;
  var v5171 = this.heightOriginal;
  this.widthPassResultSize = v5170 * v5171;
  var v5172 = this.targetWidthMultipliedByChannels;
  var v5173 = this.targetHeight;
  this.finalResultSize = v5172 * v5173;
  this.initialize();
  return;
}
function GameBoyCore(canvas, ROMImage) {
  function v15(parentObj) {
    return;
  }
  this.canvas = canvas;
  this.drawContext = null;
  this.ROMImage = ROMImage;
  this.registerA = 1;
  this.FZero = true;
  this.FSubtract = false;
  this.FHalfCarry = true;
  this.FCarry = true;
  this.registerB = 0;
  this.registerC = 19;
  this.registerD = 0;
  this.registerE = 216;
  this.registersHL = 333;
  this.stackPointer = 65534;
  this.programCounter = 256;
  this.CPUCyclesTotal = 0;
  this.CPUCyclesTotalBase = 0;
  this.CPUCyclesTotalCurrent = 0;
  this.CPUCyclesTotalRoundoff = 0;
  this.baseCPUCyclesPerIteration = 0;
  this.remainingClocks = 0;
  this.inBootstrap = true;
  this.usedBootROM = false;
  this.usedGBCBootROM = false;
  this.halt = false;
  this.skipPCIncrement = false;
  this.stopEmulator = 3;
  this.IME = true;
  this.IRQLineMatched = 0;
  this.interruptsRequested = 0;
  this.interruptsEnabled = 0;
  this.hdmaRunning = false;
  this.CPUTicks = 0;
  this.doubleSpeedShifter = 0;
  this.JoyPad = 255;
  this.CPUStopped = false;
  this.memoryReader = [];
  this.memoryWriter = [];
  this.memoryHighReader = [];
  this.memoryHighWriter = [];
  this.ROM = [];
  this.memory = [];
  this.MBCRam = [];
  this.VRAM = [];
  this.GBCMemory = [];
  this.MBC1Mode = false;
  this.MBCRAMBanksEnabled = false;
  this.currMBCRAMBank = 0;
  this.currMBCRAMBankPosition = -40960;
  this.cGBC = false;
  this.gbcRamBank = 1;
  this.gbcRamBankPosition = -53248;
  this.gbcRamBankPositionECHO = -61440;
  this.RAMBanks = [0, 1, 2, 4, 16];
  this.ROMBank1offs = 0;
  this.currentROMBank = 0;
  this.cartridgeType = 0;
  this.name = "";
  this.gameCode = "";
  this.fromSaveState = false;
  this.savedStateFileName = "";
  this.STATTracker = 0;
  this.modeSTAT = 0;
  this.spriteCount = 252;
  this.LYCMatchTriggerSTAT = false;
  this.mode2TriggerSTAT = false;
  this.mode1TriggerSTAT = false;
  this.mode0TriggerSTAT = false;
  this.LCDisOn = false;
  this.LINECONTROL = [];
  this.DISPLAYOFFCONTROL = [v15];
  this.LCDCONTROL = null;
  this.initializeLCDController();
  this.RTCisLatched = false;
  this.latchedSeconds = 0;
  this.latchedMinutes = 0;
  this.latchedHours = 0;
  this.latchedLDays = 0;
  this.latchedHDays = 0;
  this.RTCSeconds = 0;
  this.RTCMinutes = 0;
  this.RTCHours = 0;
  this.RTCDays = 0;
  this.RTCDayOverFlow = false;
  this.RTCHALT = false;
  this.highX = 127;
  this.lowX = 127;
  this.highY = 127;
  this.lowY = 127;
  this.audioHandle = null;
  this.numSamplesTotal = 0;
  this.sampleSize = 0;
  var v5174 = [false, false, false, false, false, false, false, true];
  var v5175 = [true, false, false, false, false, false, false, true];
  var v5176 = [true, false, false, false, false, true, true, true];
  var v5177 = [false, true, true, true, true, true, true, false];
  this.dutyLookup = [v5174, v5175, v5176, v5177];
  this.currentBuffer = [];
  this.bufferContainAmount = 0;
  this.LSFR15Table = null;
  this.LSFR7Table = null;
  this.noiseSampleTable = null;
  this.initializeAudioStartState();
  this.soundMasterEnabled = false;
  this.channel3PCM = null;
  this.VinLeftChannelMasterVolume = 8;
  this.VinRightChannelMasterVolume = 8;
  this.leftChannel1 = false;
  this.leftChannel2 = false;
  this.leftChannel3 = false;
  this.leftChannel4 = false;
  this.rightChannel1 = false;
  this.rightChannel2 = false;
  this.rightChannel3 = false;
  this.rightChannel4 = false;
  this.channel1currentSampleLeft = 0;
  this.channel1currentSampleRight = 0;
  this.channel2currentSampleLeft = 0;
  this.channel2currentSampleRight = 0;
  this.channel3currentSampleLeft = 0;
  this.channel3currentSampleRight = 0;
  this.channel4currentSampleLeft = 0;
  this.channel4currentSampleRight = 0;
  this.channel1currentSampleLeftSecondary = 0;
  this.channel1currentSampleRightSecondary = 0;
  this.channel2currentSampleLeftSecondary = 0;
  this.channel2currentSampleRightSecondary = 0;
  this.channel3currentSampleLeftSecondary = 0;
  this.channel3currentSampleRightSecondary = 0;
  this.channel4currentSampleLeftSecondary = 0;
  this.channel4currentSampleRightSecondary = 0;
  this.channel1currentSampleLeftTrimary = 0;
  this.channel1currentSampleRightTrimary = 0;
  this.channel2currentSampleLeftTrimary = 0;
  this.channel2currentSampleRightTrimary = 0;
  this.mixerOutputCache = 0;
  this.initializeTiming();
  this.machineOut = 0;
  this.audioTicks = 0;
  this.audioIndex = 0;
  this.rollover = 0;
  this.emulatorTicks = 0;
  this.DIVTicks = 56;
  this.LCDTicks = 60;
  this.timerTicks = 0;
  this.TIMAEnabled = false;
  this.TACClocker = 1024;
  this.serialTimer = 0;
  this.serialShiftTimer = 0;
  this.serialShiftTimerAllocated = 0;
  this.IRQEnableDelay = 0;
  var dateVar = new_Date();
  var v10801 = dateVar.getTime();
  this.lastIteration = v10801;
  dateVar = new_Date();
  var v10802 = dateVar.getTime();
  this.firstIteration = v10802;
  this.iterations = 0;
  this.actualScanLine = 0;
  this.lastUnrenderedLine = 0;
  this.queuedScanLines = 0;
  this.totalLinesPassed = 0;
  this.haltPostClocks = 0;
  this.cMBC1 = false;
  this.cMBC2 = false;
  this.cMBC3 = false;
  this.cMBC5 = false;
  this.cMBC7 = false;
  this.cSRAM = false;
  this.cMMMO1 = false;
  this.cRUMBLE = false;
  this.cCamera = false;
  this.cTAMA5 = false;
  this.cHuC3 = false;
  this.cHuC1 = false;
  this.cTIMER = false;
  this.ROMBanks = [2, 4, 8, 16, 32, 64, 128, 256, 512];
  var v5178 = this.ROMBanks;
  v5178[82] = 72;
  var v5179 = this.ROMBanks;
  v5179[83] = 80;
  var v5180 = this.ROMBanks;
  v5180[84] = 96;
  this.numRAMBanks = 0;
  this.currVRAMBank = 0;
  this.backgroundX = 0;
  this.backgroundY = 0;
  this.gfxWindowDisplay = false;
  this.gfxSpriteShow = false;
  this.gfxSpriteNormalHeight = true;
  this.bgEnabled = true;
  this.BGPriorityEnabled = true;
  this.gfxWindowCHRBankPosition = 0;
  this.gfxBackgroundCHRBankPosition = 0;
  this.gfxBackgroundBankOffset = 128;
  this.windowY = 0;
  this.windowX = 0;
  this.drewBlank = 0;
  this.drewFrame = false;
  this.midScanlineOffset = -1;
  this.pixelEnd = 0;
  this.currentX = 0;
  this.BGCHRBank1 = null;
  this.BGCHRBank2 = null;
  this.BGCHRCurrentBank = null;
  this.tileCache = null;
  this.colors = [15728606, 11392916, 5411443, 1586242];
  this.OBJPalette = null;
  this.BGPalette = null;
  this.gbcOBJRawPalette = null;
  this.gbcBGRawPalette = null;
  this.gbOBJPalette = null;
  this.gbBGPalette = null;
  this.gbcOBJPalette = null;
  this.gbcBGPalette = null;
  this.gbBGColorizedPalette = null;
  this.gbOBJColorizedPalette = null;
  this.cachedBGPaletteConversion = null;
  this.cachedOBJPaletteConversion = null;
  this.updateGBBGPalette = this.updateGBRegularBGPalette;
  this.updateGBOBJPalette = this.updateGBRegularOBJPalette;
  this.colorizedGBPalettes = false;
  this.BGLayerRender = null;
  this.WindowLayerRender = null;
  this.SpriteLayerRender = null;
  this.frameBuffer = [];
  this.swizzledFrame = null;
  this.canvasBuffer = null;
  this.pixelStart = 0;
  this.onscreenWidth = this.offscreenWidth = 160;
  this.onscreenHeight = this.offScreenheight = 144;
  var v8321 = this.onscreenWidth;
  var v8322 = this.onscreenHeight;
  var v5181 = v8321 * v8322;
  this.offscreenRGBCount = v5181 * 4;
  this.intializeWhiteNoise();
  return;
}
function start() {
  var canvas$$1 = new GameBoyCanvas;
  var ROM = decoded_gameboy_rom;
  clearLastEmulation();
  autoSave();
  gameboy = new GameBoyCore(canvas$$1, ROM);
  gameboy.openMBC = openSRAM;
  gameboy.openRTC = openRTC;
  gameboy.start();
  run();
  return;
}
function run() {
  var v5184 = GameBoyEmulatorInitialized();
  if (v5184) {
    var v8323 = GameBoyEmulatorPlaying();
    var v5183 = !v8323;
    if (v5183) {
      var v8324 = gameboy.stopEmulator;
      gameboy.stopEmulator = v8324 & 1;
      cout("Starting the iterator.", 0);
      var dateObj$$1 = new_Date();
      var v5182 = gameboy;
      var v10803 = dateObj$$1.getTime();
      v5182.firstIteration = v10803;
      gameboy.iterations = 0;
    } else {
      cout("The GameBoy core is already running.", 1);
    }
  } else {
    cout("GameBoy core cannot run while it has not been initialized.", 1);
  }
  return;
}
function pause() {
  var v5186 = GameBoyEmulatorInitialized();
  if (v5186) {
    var v5185 = GameBoyEmulatorPlaying();
    if (v5185) {
      clearLastEmulation();
    } else {
      cout("GameBoy core has already been paused.", 1);
    }
  } else {
    cout("GameBoy core cannot be paused while it has not been initialized.", 1);
  }
  return;
}
function clearLastEmulation() {
  var v8325 = GameBoyEmulatorInitialized();
  if (v8325) {
    v8325 = GameBoyEmulatorPlaying();
  }
  var v5187 = v8325;
  if (v5187) {
    clearInterval(gbRunInterval);
    var v8326 = gameboy.stopEmulator;
    gameboy.stopEmulator = v8326 | 2;
    cout("The previous emulation has been cleared.", 0);
  } else {
    cout("No previous emulation was found to be cleared.", 0);
  }
  return;
}
function save() {
  var v5193 = GameBoyEmulatorInitialized();
  if (v5193) {
    try {
      var state_suffix = 0;
      var v10562 = gameboy.name;
      var v10431 = "FREEZE_" + v10562;
      var v10196 = v10431 + "_";
      var v9610 = v10196 + state_suffix;
      var v8327 = findValue(v9610);
      var v5188 = v8327 != null;
      for (;v5188;) {
        state_suffix++;
        var v10563 = gameboy.name;
        var v10432 = "FREEZE_" + v10563;
        var v10197 = v10432 + "_";
        var v9611 = v10197 + state_suffix;
        var v8328 = findValue(v9611);
        v5188 = v8328 != null;
      }
      var v10198 = gameboy.name;
      var v9612 = "FREEZE_" + v10198;
      var v8329 = v9612 + "_";
      var v5189 = v8329 + state_suffix;
      var v5190 = gameboy.saveState();
      setValue(v5189, v5190);
      var v10199 = gameboy.name;
      var v9613 = "Saved the current state as: FREEZE_" + v10199;
      var v8330 = v9613 + "_";
      var v5191 = v8330 + state_suffix;
      cout(v5191, 0);
    } catch (error$$27) {
      var v9614 = error$$27.message;
      var v8331 = 'Could not save the current emulation state("' + v9614;
      var v5192 = v8331 + '").';
      cout(v5192, 2);
    }
  } else {
    cout("GameBoy core cannot be saved while it has not been initialized.", 1);
  }
  return;
}
function saveSRAM() {
  var v5201 = GameBoyEmulatorInitialized();
  if (v5201) {
    var v5200 = gameboy.cBATT;
    if (v5200) {
      try {
        var sram = gameboy.saveSRAMState();
        var v8332 = sram.length;
        var v5198 = v8332 > 0;
        if (v5198) {
          cout("Saving the SRAM...", 0);
          var v10200 = gameboy.name;
          var v9615 = "SRAM_" + v10200;
          var v8333 = findValue(v9615);
          var v5195 = v8333 != null;
          if (v5195) {
            cout("Deleting the old SRAM save due to outdated format.", 0);
            var v8334 = gameboy.name;
            var v5194 = "SRAM_" + v8334;
            deleteValue(v5194);
          }
          var v8335 = gameboy.name;
          var v5196 = "B64_SRAM_" + v8335;
          var v5197 = arrayToBase64(sram);
          setValue(v5196, v5197);
        } else {
          cout("SRAM could not be saved because it was empty.", 1);
        }
      } catch (error$$28) {
        var v9616 = error$$28.message;
        var v8336 = 'Could not save the current emulation state("' + v9616;
        var v5199 = v8336 + '").';
        cout(v5199, 2);
      }
    } else {
      cout("Cannot save a game that does not have battery backed SRAM specified.", 1);
    }
    saveRTC();
  } else {
    cout("GameBoy core cannot be saved while it has not been initialized.", 1);
  }
  return;
}
function saveRTC() {
  var v5206 = GameBoyEmulatorInitialized();
  if (v5206) {
    var v5205 = gameboy.cTIMER;
    if (v5205) {
      try {
        cout("Saving the RTC...", 0);
        var v8337 = gameboy.name;
        var v5202 = "RTC_" + v8337;
        var v5203 = gameboy.saveRTCState();
        setValue(v5202, v5203);
      } catch (error$$29) {
        var v9617 = error$$29.message;
        var v8338 = 'Could not save the RTC of the current emulation state("' + v9617;
        var v5204 = v8338 + '").';
        cout(v5204, 2);
      }
    }
  } else {
    cout("GameBoy core cannot be saved while it has not been initialized.", 1);
  }
  return;
}
function autoSave() {
  var v5207 = GameBoyEmulatorInitialized();
  if (v5207) {
    cout("Automatically saving the SRAM.", 0);
    saveSRAM();
    saveRTC();
  }
  return;
}
function openSRAM(filename) {
  try {
    var v9618 = "B64_SRAM_" + filename;
    var v8339 = findValue(v9618);
    var v5211 = v8339 != null;
    if (v5211) {
      cout("Found a previous SRAM state (Will attempt to load).", 0);
      var v8340 = "B64_SRAM_" + filename;
      var v5208 = findValue(v8340);
      return base64ToArray(v5208);
    } else {
      var v9619 = "SRAM_" + filename;
      var v8341 = findValue(v9619);
      var v5210 = v8341 != null;
      if (v5210) {
        cout("Found a previous SRAM state (Will attempt to load).", 0);
        var v5209 = "SRAM_" + filename;
        return findValue(v5209);
      } else {
        cout("Could not find any previous SRAM copy for the current ROM.", 0);
      }
    }
  } catch (error$$30) {
    cout("Could not open the  SRAM of the saved emulation state.", 2);
  }
  return [];
}
function openRTC(filename$$1) {
  try {
    var v9620 = "RTC_" + filename$$1;
    var v8342 = findValue(v9620);
    var v5213 = v8342 != null;
    if (v5213) {
      cout("Found a previous RTC state (Will attempt to load).", 0);
      var v5212 = "RTC_" + filename$$1;
      return findValue(v5212);
    } else {
      cout("Could not find any previous RTC copy for the current ROM.", 0);
    }
  } catch (error$$31) {
    cout("Could not open the RTC data of the saved emulation state.", 2);
  }
  return [];
}
function openState(filename$$2, canvas$$2) {
  try {
    var v8343 = findValue(filename$$2);
    var v5217 = v8343 != null;
    if (v5217) {
      try {
        clearLastEmulation();
        cout("Attempting to run a saved emulation state.", 0);
        gameboy = new GameBoyCore(canvas$$2, "");
        gameboy.savedStateFileName = filename$$2;
        var v5214 = findValue(filename$$2);
        gameboy.returnFromState(v5214);
        run();
      } catch (error$$32) {
        var v10433 = error$$32.message;
        var v10201 = v10433 + " file: ";
        var v10202 = error$$32.fileName;
        var v9621 = v10201 + v10202;
        var v8344 = v9621 + " line: ";
        var v8345 = error$$32.lineNumber;
        var v5215 = v8344 + v8345;
        alert(v5215);
      }
    } else {
      var v8346 = "Could not find the save state " + filename$$2;
      var v5216 = v8346 + '".';
      cout(v5216, 2);
    }
  } catch (error$$33) {
    cout("Could not open the saved emulation state.", 2);
  }
  return;
}
function import_save(blobData) {
  blobData = decodeBlob(blobData);
  var v8347 = blobData;
  if (v8347) {
    v8347 = blobData.blobs;
  }
  var v5229 = v8347;
  if (v5229) {
    var v9622 = blobData.blobs;
    var v8348 = v9622.length;
    var v5228 = v8348 > 0;
    if (v5228) {
      var index$$68 = 0;
      var v9623 = blobData.blobs;
      var v8349 = v9623.length;
      var v5227 = index$$68 < v8349;
      for (;v5227;) {
        var v10434 = blobData.blobs;
        var v10203 = v10434[index$$68];
        var v9624 = v10203.blobID;
        var v8350 = 'Importing blob "' + v9624;
        var v5218 = v8350 + '"';
        cout(v5218, 0);
        var v9625 = blobData.blobs;
        var v8351 = v9625[index$$68];
        var v5226 = v8351.blobContent;
        if (v5226) {
          var v10435 = blobData.blobs;
          var v10204 = v10435[index$$68];
          var v9626 = v10204.blobID;
          var v8352 = v9626.substring(0, 5);
          var v5223 = v8352 == "SRAM_";
          if (v5223) {
            var v10205 = blobData.blobs;
            var v9627 = v10205[index$$68];
            var v8353 = v9627.blobID;
            var v5219 = "B64_" + v8353;
            var v10206 = blobData.blobs;
            var v9628 = v10206[index$$68];
            var v8354 = v9628.blobContent;
            var v5220 = base64(v8354);
            setValue(v5219, v5220);
          } else {
            var v9629 = blobData.blobs;
            var v8355 = v9629[index$$68];
            var v5221 = v8355.blobID;
            var v10207 = blobData.blobs;
            var v9630 = v10207[index$$68];
            var v8356 = v9630.blobContent;
            var v5222 = JSON.parse(v8356);
            setValue(v5221, v5222);
          }
        } else {
          var v9631 = blobData.blobs;
          var v8357 = v9631[index$$68];
          var v5225 = v8357.blobID;
          if (v5225) {
            var v10436 = blobData.blobs;
            var v10208 = v10436[index$$68];
            var v9632 = v10208.blobID;
            var v8358 = 'Save file imported had blob "' + v9632;
            var v5224 = v8358 + '" with no blob data interpretable.';
            cout(v5224, 2);
          } else {
            cout("Blob chunk information missing completely.", 2);
          }
        }
        ++index$$68;
        var v9633 = blobData.blobs;
        var v8359 = v9633.length;
        v5227 = index$$68 < v8359;
      }
    } else {
      cout("Could not decode the imported file.", 2);
    }
  } else {
    cout("Could not decode the imported file.", 2);
  }
  return;
}
function generateBlob(keyName, encodedData$$1) {
  var saveString = "EMULATOR_DATA";
  var consoleID = "GameBoy";
  var v9634 = saveString.length;
  var v8360 = v9634 + 4;
  var v9635 = consoleID.length;
  var v8361 = 1 + v9635;
  var v5230 = v8360 + v8361;
  var v9636 = keyName.length;
  var v8362 = 1 + v9636;
  var v9637 = encodedData$$1.length;
  var v8363 = 4 + v9637;
  var v5231 = v8362 + v8363;
  var totalLength = v5230 + v5231;
  var v8364 = to_little_endian_dword(totalLength);
  saveString = saveString + v8364;
  var v9638 = consoleID.length;
  var v8365 = to_byte(v9638);
  saveString = saveString + v8365;
  saveString = saveString + consoleID;
  var v9639 = keyName.length;
  var v8366 = to_byte(v9639);
  saveString = saveString + v8366;
  saveString = saveString + keyName;
  var v9640 = encodedData$$1.length;
  var v8367 = to_little_endian_dword(v9640);
  saveString = saveString + v8367;
  saveString = saveString + encodedData$$1;
  return saveString;
}
function generateMultiBlob(blobPairs) {
  var consoleID$$1 = "GameBoy";
  var v8368 = 13 + 4;
  var v5232 = v8368 + 1;
  var v5233 = consoleID$$1.length;
  var totalLength$$1 = v5232 + v5233;
  var v5234 = consoleID$$1.length;
  var saveString$$1 = to_byte(v5234);
  saveString$$1 = saveString$$1 + consoleID$$1;
  var keyName$$1 = "";
  var encodedData$$2 = "";
  var index$$69 = 0;
  var v8369 = blobPairs.length;
  var v5237 = index$$69 < v8369;
  for (;v5237;) {
    var v5235 = blobPairs[index$$69];
    keyName$$1 = v5235[0];
    var v5236 = blobPairs[index$$69];
    encodedData$$2 = v5236[1];
    var v9641 = keyName$$1.length;
    var v8370 = to_byte(v9641);
    saveString$$1 = saveString$$1 + v8370;
    saveString$$1 = saveString$$1 + keyName$$1;
    var v9642 = encodedData$$2.length;
    var v8371 = to_little_endian_dword(v9642);
    saveString$$1 = saveString$$1 + v8371;
    saveString$$1 = saveString$$1 + encodedData$$2;
    var v10437 = keyName$$1.length;
    var v10209 = 1 + v10437;
    var v9643 = v10209 + 4;
    var v9644 = encodedData$$2.length;
    var v8372 = v9643 + v9644;
    totalLength$$1 = totalLength$$1 + v8372;
    ++index$$69;
    var v8373 = blobPairs.length;
    v5237 = index$$69 < v8373;
  }
  var v8374 = to_little_endian_dword(totalLength$$1);
  var v5238 = "EMULATOR_DATA" + v8374;
  saveString$$1 = v5238 + saveString$$1;
  return saveString$$1;
}
function decodeBlob(blobData$$1) {
  var length$$21 = blobData$$1.length;
  var blobProperties = {};
  blobProperties.consoleID = null;
  var blobsCount = -1;
  blobProperties.blobs = [];
  var v5255 = length$$21 > 17;
  if (v5255) {
    var v8375 = blobData$$1.substring(0, 13);
    var v5254 = v8375 == "EMULATOR_DATA";
    if (v5254) {
      var v10564 = blobData$$1.charCodeAt(16);
      var v10438 = v10564 & 255;
      var v10210 = v10438 << 24;
      var v10565 = blobData$$1.charCodeAt(15);
      var v10439 = v10565 & 255;
      var v10211 = v10439 << 16;
      var v9645 = v10210 | v10211;
      var v10440 = blobData$$1.charCodeAt(14);
      var v10212 = v10440 & 255;
      var v9646 = v10212 << 8;
      var v8376 = v9645 | v9646;
      var v9647 = blobData$$1.charCodeAt(13);
      var v8377 = v9647 & 255;
      var v5239 = v8376 | v8377;
      length$$21 = Math.min(v5239, length$$21);
      var v5240 = blobData$$1.charCodeAt(17);
      var consoleIDLength = v5240 & 255;
      var v8378 = 17 + consoleIDLength;
      var v5253 = length$$21 > v8378;
      if (v5253) {
        var v5241 = 18 + consoleIDLength;
        var v10804 = blobData$$1.substring(18, v5241);
        blobProperties.consoleID = v10804;
        var blobIDLength = 0;
        var blobLength = 0;
        var index$$70 = 18 + consoleIDLength;
        var v5252 = index$$70 < length$$21;
        for (;v5252;) {
          var v8379 = index$$70;
          index$$70 = index$$70 + 1;
          var v5242 = blobData$$1.charCodeAt(v8379);
          blobIDLength = v5242 & 255;
          var v8380 = index$$70 + blobIDLength;
          var v5251 = v8380 < length$$21;
          if (v5251) {
            var v5243 = blobProperties.blobs;
            var v5244 = blobsCount = blobsCount + 1;
            v5243[v5244] = {};
            var v8381 = blobProperties.blobs;
            var v5245 = v8381[blobsCount];
            var v8382 = index$$70 + blobIDLength;
            var v10805 = blobData$$1.substring(index$$70, v8382);
            v5245.blobID = v10805;
            index$$70 = index$$70 + blobIDLength;
            var v8383 = index$$70 + 4;
            var v5250 = v8383 < length$$21;
            if (v5250) {
              var v10566 = index$$70 + 3;
              var v10441 = blobData$$1.charCodeAt(v10566);
              var v10213 = v10441 & 255;
              var v9648 = v10213 << 24;
              var v10567 = index$$70 + 2;
              var v10442 = blobData$$1.charCodeAt(v10567);
              var v10214 = v10442 & 255;
              var v9649 = v10214 << 16;
              var v8384 = v9648 | v9649;
              var v10443 = index$$70 + 1;
              var v10215 = blobData$$1.charCodeAt(v10443);
              var v9650 = v10215 & 255;
              var v8385 = v9650 << 8;
              var v5246 = v8384 | v8385;
              var v8386 = blobData$$1.charCodeAt(index$$70);
              var v5247 = v8386 & 255;
              blobLength = v5246 | v5247;
              index$$70 = index$$70 + 4;
              var v8387 = index$$70 + blobLength;
              var v5249 = v8387 <= length$$21;
              if (v5249) {
                var v8388 = blobProperties.blobs;
                var v5248 = v8388[blobsCount];
                var v8389 = index$$70 + blobLength;
                var v10806 = blobData$$1.substring(index$$70, v8389);
                v5248.blobContent = v10806;
                index$$70 = index$$70 + blobLength;
              } else {
                cout("Blob length check failed, blob determined to be incomplete.", 2);
                break;
              }
            } else {
              cout("Blob was incomplete, bailing out.", 2);
              break;
            }
          } else {
            cout("Blob was incomplete, bailing out.", 2);
            break;
          }
          v5252 = index$$70 < length$$21;
        }
      }
    }
  }
  return blobProperties;
}
function matchKey(key$$15) {
  var index$$71 = 0;
  var v9651 = settings[3];
  var v8390 = v9651.length;
  var v5257 = index$$71 < v8390;
  for (;v5257;) {
    var v9652 = settings[3];
    var v8391 = v9652[index$$71];
    var v5256 = v8391 == key$$15;
    if (v5256) {
      return index$$71;
    }
    index$$71++;
    var v9653 = settings[3];
    var v8392 = v9653.length;
    v5257 = index$$71 < v8392;
  }
  return -1;
}
function GameBoyEmulatorInitialized() {
  var v8393 = typeof gameboy;
  var v5258 = v8393 == "object";
  if (v5258) {
    v5258 = gameboy != null;
  }
  return v5258;
}
function GameBoyEmulatorPlaying() {
  var v8394 = gameboy.stopEmulator;
  var v5259 = v8394 & 2;
  return v5259 == 0;
}
function GameBoyKeyDown(e$$7) {
  var v8395 = GameBoyEmulatorInitialized();
  if (v8395) {
    v8395 = GameBoyEmulatorPlaying();
  }
  var v5262 = v8395;
  if (v5262) {
    var v5260 = e$$7.keyCode;
    var keycode = matchKey(v5260);
    var v8396 = keycode >= 0;
    if (v8396) {
      v8396 = keycode < 8;
    }
    var v5261 = v8396;
    if (v5261) {
      gameboy.JoyPadEvent(keycode, true);
      try {
        e$$7.preventDefault();
      } catch (error$$34) {
      }
    }
  }
  return;
}
function GameBoyKeyUp(e$$8) {
  var v8397 = GameBoyEmulatorInitialized();
  if (v8397) {
    v8397 = GameBoyEmulatorPlaying();
  }
  var v5265 = v8397;
  if (v5265) {
    var v5263 = e$$8.keyCode;
    var keycode$$1 = matchKey(v5263);
    var v8398 = keycode$$1 >= 0;
    if (v8398) {
      v8398 = keycode$$1 < 8;
    }
    var v5264 = v8398;
    if (v5264) {
      gameboy.JoyPadEvent(keycode$$1, false);
      try {
        e$$8.preventDefault();
      } catch (error$$35) {
      }
    }
  }
  return;
}
function GameBoyGyroSignalHandler(e$$9) {
  var v8399 = GameBoyEmulatorInitialized();
  if (v8399) {
    v8399 = GameBoyEmulatorPlaying();
  }
  var v5271 = v8399;
  if (v5271) {
    var v8400 = e$$9.gamma;
    var v9654 = !v8400;
    if (v9654) {
      v8400 = e$$9.beta;
    }
    var v5270 = v8400;
    if (v5270) {
      var v9655 = e$$9.gamma;
      var v9656 = Math.PI;
      var v8401 = v9655 * v9656;
      var v5266 = v8401 / 180;
      var v9657 = e$$9.beta;
      var v9658 = Math.PI;
      var v8402 = v9657 * v9658;
      var v5267 = v8402 / 180;
      gameboy.GyroEvent(v5266, v5267);
    } else {
      var v5268 = e$$9.x;
      var v5269 = e$$9.y;
      gameboy.GyroEvent(v5268, v5269);
    }
    try {
      e$$9.preventDefault();
    } catch (error$$36) {
    }
  }
  return;
}
function initNewCanvas() {
  var v5274 = GameBoyEmulatorInitialized();
  if (v5274) {
    var v5272 = gameboy.canvas;
    var v8403 = gameboy.canvas;
    v5272.width = v8403.clientWidth;
    var v5273 = gameboy.canvas;
    var v8404 = gameboy.canvas;
    v5273.height = v8404.clientHeight;
  }
  return;
}
function initNewCanvasSize() {
  var v5278 = GameBoyEmulatorInitialized();
  if (v5278) {
    var v8405 = settings[12];
    var v5277 = !v8405;
    if (v5277) {
      var v9659 = gameboy.onscreenWidth;
      var v8406 = v9659 != 160;
      var v9661 = !v8406;
      if (v9661) {
        var v9660 = gameboy.onscreenHeight;
        v8406 = v9660 != 144;
      }
      var v5275 = v8406;
      if (v5275) {
        gameboy.initLCD();
      }
    } else {
      var v9662 = gameboy.onscreenWidth;
      var v10216 = gameboy.canvas;
      var v9663 = v10216.clientWidth;
      var v8407 = v9662 != v9663;
      var v9666 = !v8407;
      if (v9666) {
        var v9664 = gameboy.onscreenHeight;
        var v10217 = gameboy.canvas;
        var v9665 = v10217.clientHeight;
        v8407 = v9664 != v9665;
      }
      var v5276 = v8407;
      if (v5276) {
        gameboy.initLCD();
      }
    }
  }
  return;
}
function ShowBox(name$$32) {
  function v16(entry) {
    var v8408 = name$$32.valueOf();
    var v8409 = entry.valueOf();
    var v5281 = v8408 === v8409;
    if (v5281) {
      var v8410 = "Box-" + name$$32;
      var v5279 = v8410 + "Latency";
      var box1 = document.getElementById(v5279);
      var v5280 = box1.style;
      v5280.visibility = "visible";
    }
    return;
  }
  var v5282 = "Box-" + name$$32;
  var box = document.getElementById(v5282);
  var v5283 = box.style;
  v5283.visibility = "visible";
  var v8411 = document.getElementById("progress-bar");
  var v5284 = v8411.style;
  var v10444 = completed = completed + 1;
  var v10218 = v10444 / benchmarks;
  var v9667 = v10218 * 100;
  var v8412 = "" + v9667;
  var bar = v5284.width = v8412 + "%";
  latencyBenchmarks.forEach(v16);
  return;
}
function AddResult(name$$33, result$$4) {
  var v8413 = name$$33 + ": ";
  var v5285 = v8413 + result$$4;
  console.log(v5285);
  var v5286 = "Result-" + name$$33;
  var box$$1 = document.getElementById(v5286);
  box$$1.innerHTML = result$$4;
  return;
}
function AddError(name$$34, error$$37) {
  var v8414 = name$$34 + ": ";
  var v8415 = error$$37.message;
  var v5287 = v8414 + v8415;
  console.log(v5287);
  var v5289 = error$$37 == "TypedArrayUnsupported";
  if (v5289) {
    AddResult(name$$34, "<b>Unsupported</b>");
  } else {
    var v5288 = error$$37 == "PerformanceNowUnsupported";
    if (v5288) {
      AddResult(name$$34, "<b>Timer error</b>");
    } else {
      AddResult(name$$34, "<b>Error</b>");
    }
  }
  success = false;
  return;
}
function AddScore(score$$2) {
  var status = document.getElementById("main-banner");
  if (success) {
    status.innerHTML = "Octane Score: " + score$$2;
  } else {
    status.innerHTML = "Octane Score (incomplete): " + score$$2;
  }
  var v8416 = document.getElementById("progress-bar-container");
  var v5290 = v8416.style;
  v5290.visibility = "hidden";
  var v8417 = document.getElementById("bottom-text");
  var v5291 = v8417.style;
  v5291.visibility = "visible";
  var v5292 = document.getElementById("inside-anchor");
  var v5293 = document.getElementById("bar-appendix");
  v5292.removeChild(v5293);
  var v8418 = document.getElementById("alertbox");
  var v5294 = v8418.style;
  v5294.visibility = "hidden";
  return;
}
function Run() {
  var v5295 = document.getElementById("main-banner");
  v5295.innerHTML = "Running Octane...";
  var v5296 = document.getElementById("bar-appendix");
  v5296.innerHTML = '<br/><div class="progress progress-striped" id="progress-bar-container" style="visibility:hidden"><div class="bar"style="width: 0%;" id="progress-bar"></div></div>';
  var anchor = document.getElementById("run-octane");
  var parent = document.getElementById("main-container");
  var v5297 = document.getElementById("inside-anchor");
  parent.appendChild(v5297);
  parent.removeChild(anchor);
  var v5298 = document.getElementById("startup-text");
  v5298.innerHTML = "";
  var v8419 = document.getElementById("progress-bar-container");
  var v5299 = v8419.style;
  v5299.visibility = "visible";
  BenchmarkSuite.RunSuites();
  return;
}
function CheckCompatibility() {
  var v9668 = typeof Uint8Array;
  var v8420 = v9668 != "undefined";
  if (v8420) {
    var v9669 = typeof Float64Array;
    v8420 = v9669 != "undefined";
  }
  var v5300 = v8420;
  if (v5300) {
    var v10219 = new Uint8Array(0);
    var v9670 = v10219.subarray;
    var v8421 = typeof v9670;
    v5300 = v8421 != "undefined";
  }
  var hasTypedArrays = v5300;
  var v5302 = !hasTypedArrays;
  if (v5302) {
    console.log("Typed Arrays not supported");
    var v8422 = document.getElementById("alertbox");
    var v5301 = v8422.style;
    v5301.display = "block";
  }
  var v10220 = window.document;
  var v9671 = v10220.URL;
  var v8423 = v9671.indexOf("skip_zlib=1");
  var v5303 = v8423 >= 0;
  if (v5303) {
    skipBenchmarks.push("zlib");
  }
  var v10221 = window.document;
  var v9672 = v10221.URL;
  var v8424 = v9672.indexOf("auto=1");
  var v5304 = v8424 >= 0;
  if (v5304) {
    Run();
  }
  return;
}
function Load() {
  setTimeout(CheckCompatibility, 200);
  return;
}
var performance = performance || {};
var v5305 = performance;
var v10807 = v17();
v5305.now = v10807;
var v5306 = BenchmarkResult.prototype;
v5306.valueOf = v18;
BenchmarkSuite.suites = [];
BenchmarkSuite.version = "9";
BenchmarkSuite.config = {doWarmup:undefined, doDeterministic:undefined};
alert = v19;
BenchmarkSuite.ResetRNG = v22;
BenchmarkSuite.RunSuites = v23;
BenchmarkSuite.CountBenchmarks = v24;
BenchmarkSuite.GeometricMean = v25;
BenchmarkSuite.GeometricMeanTime = v26;
BenchmarkSuite.GeometricMeanLatency = v27;
BenchmarkSuite.FormatScore = v28;
var v5307 = BenchmarkSuite.prototype;
v5307.NotifyStep = v29;
var v5308 = BenchmarkSuite.prototype;
v5308.NotifyResult = v30;
var v5309 = BenchmarkSuite.prototype;
v5309.NotifySkipped = v31;
var v5310 = BenchmarkSuite.prototype;
v5310.NotifyError = v32;
var v5311 = BenchmarkSuite.prototype;
v5311.RunSingleBenchmark = v33;
var v5312 = BenchmarkSuite.prototype;
v5312.RunStep = v34;
var v5313 = [26288412];
var v8425 = new Benchmark;
var v5314 = [v8425];
var GameboyBenchmark = new BenchmarkSuite("Gameboy", v5313, v5314);
var decoded_gameboy_rom = null;
var v5315 = '{"registerA":160,"registerB":255,"registerC":255,"registerE":11,' + '"registersHL":51600,"programCounter":24309,"stackPointer":49706,';
var expectedGameboyStateStr = v5315 + '"sumROM":10171578,"sumMemory":3435856,"sumMBCRam":234598,"sumVRam":0}';
var GameBoyWindow = {};
var GameBoyAudioNode = {bufferSize:0, onaudioprocess:null, connect:v35, run:v36};
var mock_date_time_counter = 0;
var toBase64 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "/", "="];
var fromBase64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
var v5316 = Resampler.prototype;
v5316.initialize = v37;
var v5317 = Resampler.prototype;
v5317.compileInterpolationFunction = v38;
var v5318 = Resampler.prototype;
v5318.bypassResampler = v39;
var v5319 = Resampler.prototype;
v5319.bufferSlice = v40;
var v5320 = Resampler.prototype;
v5320.initializeBuffers = v41;
var v5321 = XAudioServer.prototype;
v5321.MOZWriteAudio = v42;
var v5322 = XAudioServer.prototype;
v5322.MOZWriteAudioNoCallback = v43;
var v5323 = XAudioServer.prototype;
v5323.callbackBasedWriteAudio = v44;
var v5324 = XAudioServer.prototype;
v5324.callbackBasedWriteAudioNoCallback = v45;
var v5325 = XAudioServer.prototype;
v5325.writeAudio = v46;
var v5326 = XAudioServer.prototype;
v5326.writeAudioNoCallback = v47;
var v5327 = XAudioServer.prototype;
v5327.remainingBuffer = v48;
var v5328 = XAudioServer.prototype;
v5328.MOZExecuteCallback = v49;
var v5329 = XAudioServer.prototype;
v5329.callbackBasedExecuteCallback = v50;
var v5330 = XAudioServer.prototype;
v5330.executeCallback = v51;
var v5331 = XAudioServer.prototype;
v5331.initializeAudio = v52;
var v5332 = XAudioServer.prototype;
v5332.preInitializeMozAudio = v53;
var v5333 = XAudioServer.prototype;
v5333.initializeMozAudio = v54;
var v5334 = XAudioServer.prototype;
v5334.initializeWebAudio = v55;
var v5335 = XAudioServer.prototype;
v5335.initializeFlashAudio = v57;
var v5336 = XAudioServer.prototype;
v5336.changeVolume = v58;
var v5337 = XAudioServer.prototype;
v5337.writeMozAudio = v59;
var v5338 = XAudioServer.prototype;
v5338.checkFlashInit = v60;
var samplesPerCallback = 2048;
var outputConvert = null;
var audioContextHandle = null;
var audioNode = null;
var audioSource = null;
var launchedContext = false;
var audioContextSampleBuffer = [];
var resampled = [];
var webAudioMinBufferSize = 15E3;
var webAudioMaxBufferSize = 25E3;
var webAudioActualSampleRate = 44100;
var XAudioJSSampleRate = 0;
var webAudioMono = false;
var XAudioJSVolume = 1;
var resampleControl = null;
var audioBufferSize = 0;
var resampleBufferStart = 0;
var resampleBufferEnd = 0;
var resampleBufferSize = 2;
v61();
var v5339 = Resize.prototype;
v5339.initialize = v62;
var v5340 = Resize.prototype;
v5340.resizeWidthRGB = v63;
var v5341 = Resize.prototype;
v5341.resizeWidthInterpolatedRGB = v64;
var v5342 = Resize.prototype;
v5342.resizeWidthRGBA = v65;
var v5343 = Resize.prototype;
v5343.resizeWidthInterpolatedRGBA = v66;
var v5344 = Resize.prototype;
v5344.resizeHeightRGB = v67;
var v5345 = Resize.prototype;
v5345.resizeHeightInterpolated = v68;
var v5346 = Resize.prototype;
v5346.resizeHeightRGBA = v69;
var v5347 = Resize.prototype;
v5347.resizeHeightInterpolatedRGBA = v70;
var v5348 = Resize.prototype;
v5348.resize = v71;
var v5349 = Resize.prototype;
v5349.bypassResizer = v72;
var v5350 = Resize.prototype;
v5350.initializeFirstPassBuffers = v73;
var v5351 = Resize.prototype;
v5351.initializeSecondPassBuffers = v74;
var v5352 = Resize.prototype;
v5352.generateFloatBuffer = v75;
var v5353 = Resize.prototype;
v5353.generateUint8Buffer = v76;
var v5354 = Resize.prototype;
v5354.checkForOperaMathBug = v77;
var v5355 = GameBoyCore.prototype;
v5355.GBBOOTROM = [];
var v5356 = GameBoyCore.prototype;
v5356.GBCBOOTROM = [];
var v5357 = GameBoyCore.prototype;
v5357.ffxxDump = [15, 0, 124, 255, 0, 0, 0, 248, 255, 255, 255, 255, 255, 255, 255, 1, 128, 191, 243, 255, 191, 255, 63, 0, 255, 191, 127, 255, 159, 255, 191, 255, 255, 0, 0, 191, 119, 243, 241, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 145, 128, 0, 0, 0, 0, 0, 252, 0, 0, 0, 0, 255, 126, 255, 254, 255, 255, 255, 255, 255, 255, 62, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 192, 255, 193, 0, 
254, 255, 255, 255, 248, 255, 0, 0, 0, 143, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 206, 237, 102, 102, 204, 13, 0, 11, 3, 115, 0, 131, 0, 12, 0, 13, 0, 8, 17, 31, 136, 137, 0, 14, 220, 204, 110, 230, 221, 221, 217, 153, 187, 187, 103, 99, 110, 14, 236, 204, 221, 220, 153, 159, 187, 185, 51, 62, 69, 236, 82, 250, 8, 183, 7, 93, 1, 253, 192, 255, 8, 252, 0, 229, 11, 248, 194, 206, 244, 249, 15, 127, 69, 109, 61, 254, 70, 151, 51, 94, 8, 239, 241, 255, 134, 131, 36, 116, 18, 252, 0, 159, 180, 
183, 6, 213, 208, 122, 0, 158, 4, 95, 65, 47, 29, 119, 54, 117, 129, 170, 112, 58, 152, 209, 113, 2, 77, 1, 193, 255, 13, 0, 211, 5, 249, 0, 11, 0];
var v5358 = GameBoyCore.prototype;
v5358.OPCODE = [v78, v79, v80, v81, v82, v83, v84, v85, v86, v87, v88, v89, v90, v91, v92, v93, v94, v95, v96, v97, v98, v99, v100, v101, v102, v103, v104, v105, v106, v107, v108, v109, v110, v111, v112, v113, v114, v115, v116, v117, v118, v119, v120, v121, v122, v123, v124, v125, v126, v127, v128, v129, v130, v131, v132, v133, v134, v135, v136, v137, v138, v139, v140, v141, v142, v143, v144, v145, v146, v147, v148, v149, v150, v151, v152, v153, v154, v155, v156, v157, v158, v159, v160, v161, v162, 
v163, v164, v165, v166, v167, v168, v169, v170, v171, v172, v173, v174, v175, v176, v177, v178, v179, v180, v181, v182, v183, v184, v185, v186, v187, v188, v189, v190, v191, v192, v193, v194, v195, v196, v197, v198, v199, v200, v201, v202, v203, v204, v205, v206, v207, v208, v209, v210, v211, v212, v213, v214, v215, v216, v217, v218, v219, v220, v221, v222, v223, v224, v225, v226, v227, v228, v229, v230, v231, v232, v233, v234, v235, v236, v237, v238, v239, v240, v241, v242, v243, v244, v245, v246, 
v247, v248, v249, v250, v251, v252, v253, v254, v255, v256, v257, v258, v259, v260, v261, v262, v263, v264, v265, v266, v267, v268, v269, v270, v271, v272, v273, v274, v275, v276, v277, v278, v279, v280, v281, v282, v283, v284, v285, v286, v287, v288, v289, v290, v291, v292, v293, v294, v295, v296, v297, v298, v299, v300, v301, v302, v303, v304, v305, v306, v307, v308, v309, v310, v311, v312, v313, v314, v315, v316, v317, v318, v319, v320, v321, v322, v323, v324, v325, v326, v327, v328, v329, v330, 
v331, v332, v333];
var v5359 = GameBoyCore.prototype;
v5359.CBOPCODE = [v334, v335, v336, v337, v338, v339, v340, v341, v342, v343, v344, v345, v346, v347, v348, v349, v350, v351, v352, v353, v354, v355, v356, v357, v358, v359, v360, v361, v362, v363, v364, v365, v366, v367, v368, v369, v370, v371, v372, v373, v374, v375, v376, v377, v378, v379, v380, v381, v382, v383, v384, v385, v386, v387, v388, v389, v390, v391, v392, v393, v394, v395, v396, v397, v398, v399, v400, v401, v402, v403, v404, v405, v406, v407, v408, v409, v410, v411, v412, v413, v414, 
v415, v416, v417, v418, v419, v420, v421, v422, v423, v424, v425, v426, v427, v428, v429, v430, v431, v432, v433, v434, v435, v436, v437, v438, v439, v440, v441, v442, v443, v444, v445, v446, v447, v448, v449, v450, v451, v452, v453, v454, v455, v456, v457, v458, v459, v460, v461, v462, v463, v464, v465, v466, v467, v468, v469, v470, v471, v472, v473, v474, v475, v476, v477, v478, v479, v480, v481, v482, v483, v484, v485, v486, v487, v488, v489, v490, v491, v492, v493, v494, v495, v496, v497, v498, 
v499, v500, v501, v502, v503, v504, v505, v506, v507, v508, v509, v510, v511, v512, v513, v514, v515, v516, v517, v518, v519, v520, v521, v522, v523, v524, v525, v526, v527, v528, v529, v530, v531, v532, v533, v534, v535, v536, v537, v538, v539, v540, v541, v542, v543, v544, v545, v546, v547, v548, v549, v550, v551, v552, v553, v554, v555, v556, v557, v558, v559, v560, v561, v562, v563, v564, v565, v566, v567, v568, v569, v570, v571, v572, v573, v574, v575, v576, v577, v578, v579, v580, v581, v582, 
v583, v584, v585, v586, v587, v588, v589];
var v5360 = GameBoyCore.prototype;
v5360.TICKTable = [4, 12, 8, 8, 4, 4, 8, 4, 20, 8, 8, 8, 4, 4, 8, 4, 4, 12, 8, 8, 4, 4, 8, 4, 12, 8, 8, 8, 4, 4, 8, 4, 8, 12, 8, 8, 4, 4, 8, 4, 8, 8, 8, 8, 4, 4, 8, 4, 8, 12, 8, 8, 12, 12, 12, 4, 8, 8, 8, 8, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 8, 8, 8, 8, 8, 8, 4, 8, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 
8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 8, 12, 12, 16, 12, 16, 8, 16, 8, 16, 12, 0, 12, 24, 8, 16, 8, 12, 12, 4, 12, 16, 8, 16, 8, 16, 12, 4, 12, 4, 8, 16, 12, 12, 8, 4, 4, 16, 8, 16, 16, 4, 16, 4, 4, 4, 8, 16, 12, 12, 8, 4, 4, 16, 8, 16, 12, 8, 16, 4, 0, 4, 8, 16];
var v5361 = GameBoyCore.prototype;
v5361.SecondaryTICKTable = [8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 12, 8, 8, 8, 8, 8, 8, 8, 12, 8, 8, 8, 8, 8, 8, 8, 12, 8, 8, 8, 8, 8, 8, 8, 12, 8, 8, 8, 8, 8, 8, 8, 12, 8, 8, 8, 8, 8, 8, 8, 12, 8, 8, 8, 8, 8, 8, 8, 12, 8, 8, 8, 8, 8, 8, 8, 12, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 
8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8];
var v5362 = GameBoyCore.prototype;
v5362.saveSRAMState = v590;
var v5363 = GameBoyCore.prototype;
v5363.saveRTCState = v591;
var v5364 = GameBoyCore.prototype;
v5364.saveState = v592;
var v5365 = GameBoyCore.prototype;
v5365.returnFromState = v593;
var v5366 = GameBoyCore.prototype;
v5366.returnFromRTCState = v594;
var v5367 = GameBoyCore.prototype;
v5367.start = v595;
var v5368 = GameBoyCore.prototype;
v5368.initMemory = v596;
var v5369 = GameBoyCore.prototype;
v5369.generateCacheArray = v597;
var v5370 = GameBoyCore.prototype;
v5370.initSkipBootstrap = v598;
var v5371 = GameBoyCore.prototype;
v5371.initBootstrap = v599;
var v5372 = GameBoyCore.prototype;
v5372.ROMLoad = v600;
var v5373 = GameBoyCore.prototype;
v5373.getROMImage = v601;
var v5374 = GameBoyCore.prototype;
v5374.interpretCartridge = v602;
var v5375 = GameBoyCore.prototype;
v5375.disableBootROM = v603;
var v5376 = GameBoyCore.prototype;
v5376.initializeTiming = v604;
var v5377 = GameBoyCore.prototype;
v5377.setupRAM = v605;
var v5378 = GameBoyCore.prototype;
v5378.MBCRAMUtilized = v606;
var v5379 = GameBoyCore.prototype;
v5379.recomputeDimension = v607;
var v5380 = GameBoyCore.prototype;
v5380.initLCD = v608;
var v5381 = GameBoyCore.prototype;
v5381.graphicsBlit = v609;
var v5382 = GameBoyCore.prototype;
v5382.JoyPadEvent = v610;
var v5383 = GameBoyCore.prototype;
v5383.GyroEvent = v611;
var v5384 = GameBoyCore.prototype;
v5384.initSound = v612;
var v5385 = GameBoyCore.prototype;
v5385.changeVolume = v613;
var v5386 = GameBoyCore.prototype;
v5386.initAudioBuffer = v614;
var v5387 = GameBoyCore.prototype;
v5387.intializeWhiteNoise = v615;
var v5388 = GameBoyCore.prototype;
v5388.audioUnderrunAdjustment = v616;
var v5389 = GameBoyCore.prototype;
v5389.initializeAudioStartState = v617;
var v5390 = GameBoyCore.prototype;
v5390.outputAudio = v618;
var v5391 = GameBoyCore.prototype;
v5391.generateAudio = v619;
var v5392 = GameBoyCore.prototype;
v5392.generateAudioFake = v620;
var v5393 = GameBoyCore.prototype;
v5393.audioJIT = v621;
var v5394 = GameBoyCore.prototype;
v5394.audioComputeSequencer = v622;
var v5395 = GameBoyCore.prototype;
v5395.clockAudioLength = v623;
var v5396 = GameBoyCore.prototype;
v5396.clockAudioSweep = v624;
var v5397 = GameBoyCore.prototype;
v5397.runAudioSweep = v625;
var v5398 = GameBoyCore.prototype;
v5398.clockAudioEnvelope = v626;
var v5399 = GameBoyCore.prototype;
v5399.computeAudioChannels = v627;
var v5400 = GameBoyCore.prototype;
v5400.channel1EnableCheck = v628;
var v5401 = GameBoyCore.prototype;
v5401.channel1VolumeEnableCheck = v629;
var v5402 = GameBoyCore.prototype;
v5402.channel1OutputLevelCache = v630;
var v5403 = GameBoyCore.prototype;
v5403.channel1OutputLevelSecondaryCache = v631;
var v5404 = GameBoyCore.prototype;
v5404.channel1OutputLevelTrimaryCache = v632;
var v5405 = GameBoyCore.prototype;
v5405.channel2EnableCheck = v633;
var v5406 = GameBoyCore.prototype;
v5406.channel2VolumeEnableCheck = v634;
var v5407 = GameBoyCore.prototype;
v5407.channel2OutputLevelCache = v635;
var v5408 = GameBoyCore.prototype;
v5408.channel2OutputLevelSecondaryCache = v636;
var v5409 = GameBoyCore.prototype;
v5409.channel2OutputLevelTrimaryCache = v637;
var v5410 = GameBoyCore.prototype;
v5410.channel3EnableCheck = v638;
var v5411 = GameBoyCore.prototype;
v5411.channel3OutputLevelCache = v639;
var v5412 = GameBoyCore.prototype;
v5412.channel3OutputLevelSecondaryCache = v640;
var v5413 = GameBoyCore.prototype;
v5413.channel4EnableCheck = v641;
var v5414 = GameBoyCore.prototype;
v5414.channel4VolumeEnableCheck = v642;
var v5415 = GameBoyCore.prototype;
v5415.channel4OutputLevelCache = v643;
var v5416 = GameBoyCore.prototype;
v5416.channel4OutputLevelSecondaryCache = v644;
var v5417 = GameBoyCore.prototype;
v5417.mixerOutputLevelCache = v645;
var v5418 = GameBoyCore.prototype;
v5418.channel3UpdateCache = v646;
var v5419 = GameBoyCore.prototype;
v5419.channel3WriteRAM = v647;
var v5420 = GameBoyCore.prototype;
v5420.channel4UpdateCache = v648;
var v5421 = GameBoyCore.prototype;
v5421.run = v649;
var v5422 = GameBoyCore.prototype;
v5422.executeIteration = v650;
var v5423 = GameBoyCore.prototype;
v5423.iterationEndRoutine = v651;
var v5424 = GameBoyCore.prototype;
v5424.handleSTOP = v652;
var v5425 = GameBoyCore.prototype;
v5425.recalculateIterationClockLimit = v653;
var v5426 = GameBoyCore.prototype;
v5426.scanLineMode2 = v654;
var v5427 = GameBoyCore.prototype;
v5427.scanLineMode3 = v655;
var v5428 = GameBoyCore.prototype;
v5428.scanLineMode0 = v656;
var v5429 = GameBoyCore.prototype;
v5429.clocksUntilLYCMatch = v657;
var v5430 = GameBoyCore.prototype;
v5430.clocksUntilMode0 = v658;
var v5431 = GameBoyCore.prototype;
v5431.updateSpriteCount = v659;
var v5432 = GameBoyCore.prototype;
v5432.matchLYC = v660;
var v5433 = GameBoyCore.prototype;
v5433.updateCore = v661;
var v5434 = GameBoyCore.prototype;
v5434.updateCoreFull = v662;
var v5435 = GameBoyCore.prototype;
v5435.initializeLCDController = v667;
var v5436 = GameBoyCore.prototype;
v5436.DisplayShowOff = v668;
var v5437 = GameBoyCore.prototype;
v5437.executeHDMA = v669;
var v5438 = GameBoyCore.prototype;
v5438.clockUpdate = v670;
var v5439 = GameBoyCore.prototype;
v5439.prepareFrame = v671;
var v5440 = GameBoyCore.prototype;
v5440.requestDraw = v672;
var v5441 = GameBoyCore.prototype;
v5441.dispatchDraw = v673;
var v5442 = GameBoyCore.prototype;
v5442.swizzleFrameBuffer = v674;
var v5443 = GameBoyCore.prototype;
v5443.clearFrameBuffer = v675;
var v5444 = GameBoyCore.prototype;
v5444.resizeFrameBuffer = v676;
var v5445 = GameBoyCore.prototype;
v5445.compileResizeFrameBufferFunction = v677;
var v5446 = GameBoyCore.prototype;
v5446.renderScanLine = v678;
var v5447 = GameBoyCore.prototype;
v5447.renderMidScanLine = v679;
var v5448 = GameBoyCore.prototype;
v5448.initializeModeSpecificArrays = v680;
var v5449 = GameBoyCore.prototype;
v5449.GBCtoGBModeAdjust = v681;
var v5450 = GameBoyCore.prototype;
v5450.renderPathBuild = v682;
var v5451 = GameBoyCore.prototype;
v5451.priorityFlaggingPathRebuild = v683;
var v5452 = GameBoyCore.prototype;
v5452.initializeReferencesFromSaveState = v684;
var v5453 = GameBoyCore.prototype;
v5453.RGBTint = v685;
var v5454 = GameBoyCore.prototype;
v5454.getGBCColor = v686;
var v5455 = GameBoyCore.prototype;
v5455.updateGBRegularBGPalette = v687;
var v5456 = GameBoyCore.prototype;
v5456.updateGBColorizedBGPalette = v688;
var v5457 = GameBoyCore.prototype;
v5457.updateGBRegularOBJPalette = v689;
var v5458 = GameBoyCore.prototype;
v5458.updateGBColorizedOBJPalette = v690;
var v5459 = GameBoyCore.prototype;
v5459.updateGBCBGPalette = v691;
var v5460 = GameBoyCore.prototype;
v5460.updateGBCOBJPalette = v692;
var v5461 = GameBoyCore.prototype;
v5461.BGGBLayerRender = v693;
var v5462 = GameBoyCore.prototype;
v5462.BGGBCLayerRender = v694;
var v5463 = GameBoyCore.prototype;
v5463.BGGBCLayerRenderNoPriorityFlagging = v695;
var v5464 = GameBoyCore.prototype;
v5464.WindowGBLayerRender = v696;
var v5465 = GameBoyCore.prototype;
v5465.WindowGBCLayerRender = v697;
var v5466 = GameBoyCore.prototype;
v5466.WindowGBCLayerRenderNoPriorityFlagging = v698;
var v5467 = GameBoyCore.prototype;
v5467.SpriteGBLayerRender = v699;
var v5468 = GameBoyCore.prototype;
v5468.findLowestSpriteDrawable = v700;
var v5469 = GameBoyCore.prototype;
v5469.SpriteGBCLayerRender = v701;
var v5470 = GameBoyCore.prototype;
v5470.generateGBTileLine = v702;
var v5471 = GameBoyCore.prototype;
v5471.generateGBCTileLineBank1 = v703;
var v5472 = GameBoyCore.prototype;
v5472.generateGBCTileBank1 = v704;
var v5473 = GameBoyCore.prototype;
v5473.generateGBCTileLineBank2 = v705;
var v5474 = GameBoyCore.prototype;
v5474.generateGBCTileBank2 = v706;
var v5475 = GameBoyCore.prototype;
v5475.generateGBOAMTileLine = v707;
var v5476 = GameBoyCore.prototype;
v5476.graphicsJIT = v708;
var v5477 = GameBoyCore.prototype;
v5477.graphicsJITVBlank = v709;
var v5478 = GameBoyCore.prototype;
v5478.graphicsJITScanlineGroup = v710;
var v5479 = GameBoyCore.prototype;
v5479.incrementScanLineQueue = v711;
var v5480 = GameBoyCore.prototype;
v5480.midScanLineJIT = v712;
var v5481 = GameBoyCore.prototype;
v5481.launchIRQ = v713;
var v5482 = GameBoyCore.prototype;
v5482.checkIRQMatching = v714;
var v5483 = GameBoyCore.prototype;
v5483.calculateHALTPeriod = v715;
var v5484 = GameBoyCore.prototype;
v5484.memoryRead = v716;
var v5485 = GameBoyCore.prototype;
v5485.memoryHighRead = v717;
var v5486 = GameBoyCore.prototype;
v5486.memoryReadJumpCompile = v751;
var v5487 = GameBoyCore.prototype;
v5487.memoryReadNormal = v752;
var v5488 = GameBoyCore.prototype;
v5488.memoryHighReadNormal = v753;
var v5489 = GameBoyCore.prototype;
v5489.memoryReadROM = v754;
var v5490 = GameBoyCore.prototype;
v5490.memoryReadMBC = v755;
var v5491 = GameBoyCore.prototype;
v5491.memoryReadMBC7 = v756;
var v5492 = GameBoyCore.prototype;
v5492.memoryReadMBC3 = v757;
var v5493 = GameBoyCore.prototype;
v5493.memoryReadGBCMemory = v758;
var v5494 = GameBoyCore.prototype;
v5494.memoryReadOAM = v759;
var v5495 = GameBoyCore.prototype;
v5495.memoryReadECHOGBCMemory = v760;
var v5496 = GameBoyCore.prototype;
v5496.memoryReadECHONormal = v761;
var v5497 = GameBoyCore.prototype;
v5497.memoryReadBAD = v762;
var v5498 = GameBoyCore.prototype;
v5498.VRAMDATAReadCGBCPU = v763;
var v5499 = GameBoyCore.prototype;
v5499.VRAMDATAReadDMGCPU = v764;
var v5500 = GameBoyCore.prototype;
v5500.VRAMCHRReadCGBCPU = v765;
var v5501 = GameBoyCore.prototype;
v5501.VRAMCHRReadDMGCPU = v766;
var v5502 = GameBoyCore.prototype;
v5502.setCurrentMBC1ROMBank = v767;
var v5503 = GameBoyCore.prototype;
v5503.setCurrentMBC2AND3ROMBank = v768;
var v5504 = GameBoyCore.prototype;
v5504.setCurrentMBC5ROMBank = v769;
var v5505 = GameBoyCore.prototype;
v5505.memoryWrite = v770;
var v5506 = GameBoyCore.prototype;
v5506.memoryHighWrite = v771;
var v5507 = GameBoyCore.prototype;
v5507.memoryWriteJumpCompile = v772;
var v5508 = GameBoyCore.prototype;
v5508.MBCWriteEnable = v773;
var v5509 = GameBoyCore.prototype;
v5509.MBC1WriteROMBank = v774;
var v5510 = GameBoyCore.prototype;
v5510.MBC1WriteRAMBank = v775;
var v5511 = GameBoyCore.prototype;
v5511.MBC1WriteType = v776;
var v5512 = GameBoyCore.prototype;
v5512.MBC2WriteROMBank = v777;
var v5513 = GameBoyCore.prototype;
v5513.MBC3WriteROMBank = v778;
var v5514 = GameBoyCore.prototype;
v5514.MBC3WriteRAMBank = v779;
var v5515 = GameBoyCore.prototype;
v5515.MBC3WriteRTCLatch = v780;
var v5516 = GameBoyCore.prototype;
v5516.MBC5WriteROMBankLow = v781;
var v5517 = GameBoyCore.prototype;
v5517.MBC5WriteROMBankHigh = v782;
var v5518 = GameBoyCore.prototype;
v5518.MBC5WriteRAMBank = v783;
var v5519 = GameBoyCore.prototype;
v5519.RUMBLEWriteRAMBank = v784;
var v5520 = GameBoyCore.prototype;
v5520.HuC3WriteRAMBank = v785;
var v5521 = GameBoyCore.prototype;
v5521.cartIgnoreWrite = v786;
var v5522 = GameBoyCore.prototype;
v5522.memoryWriteNormal = v787;
var v5523 = GameBoyCore.prototype;
v5523.memoryHighWriteNormal = v788;
var v5524 = GameBoyCore.prototype;
v5524.memoryWriteMBCRAM = v789;
var v5525 = GameBoyCore.prototype;
v5525.memoryWriteMBC3RAM = v790;
var v5526 = GameBoyCore.prototype;
v5526.memoryWriteGBCRAM = v791;
var v5527 = GameBoyCore.prototype;
v5527.memoryWriteOAMRAM = v792;
var v5528 = GameBoyCore.prototype;
v5528.memoryWriteECHOGBCRAM = v793;
var v5529 = GameBoyCore.prototype;
v5529.memoryWriteECHONormal = v794;
var v5530 = GameBoyCore.prototype;
v5530.VRAMGBDATAWrite = v795;
var v5531 = GameBoyCore.prototype;
v5531.VRAMGBDATAUpperWrite = v796;
var v5532 = GameBoyCore.prototype;
v5532.VRAMGBCDATAWrite = v797;
var v5533 = GameBoyCore.prototype;
v5533.VRAMGBCHRMAPWrite = v798;
var v5534 = GameBoyCore.prototype;
v5534.VRAMGBCCHRMAPWrite = v799;
var v5535 = GameBoyCore.prototype;
v5535.DMAWrite = v800;
var v5536 = GameBoyCore.prototype;
v5536.registerWriteJumpCompile = v855;
var v5537 = GameBoyCore.prototype;
v5537.recompileModelSpecificIOWriteHandling = v881;
var v5538 = GameBoyCore.prototype;
v5538.recompileBootIOWriteHandling = v884;
var v5539 = GameBoyCore.prototype;
v5539.toTypedArray = v885;
var v5540 = GameBoyCore.prototype;
v5540.fromTypedArray = v886;
var v5541 = GameBoyCore.prototype;
v5541.getTypedArray = v887;
var v5542 = GameBoyCore.prototype;
v5542.checkForOperaMathBug = v888;
var gameboy = null;
var gbRunInterval = null;
var v5543 = [39, 37, 38, 40, 88, 90, 16, 13];
var settings = [true, false, false, v5543, true, false, 4, 15, 30, false, false, false, false, 16, 1];
var v10824 = "r+BPyZiEZwA+AeBPySAobeEq6gAgKlYj5WJv6SRmZjjhKuXqACDJ/////////////////////////////////xgHZwCYhGcA2fX6/3/1xdXlIRPKNgHN9f/h0cHx6gAg+hLKtyAC8cnwgLcoF/CC7hjgUT6Q4FOv4FLgVOCAPv/gVfHZ8IG3IALx2fBA7gjgQA8PD+YB7gHgT/CC4FHuEOCCPojgU6/gUuBU4IE+/uBV4ID6NMs86jTL8dkKCgoKbWFkZSBieSBhZ28uIGVtYWlsOmdvYnV6b3ZAeWFob28uY29tCnVybDogc3BlY2N5LmRhLnJ1CgoKCv///////wDDSgnO7WZmzA0ACwNzAIMADAANAAgRH4iJAA7czG7m3d3Zmbu7Z2NuDuzM3dyZn7u5Mz5BR08nUyBSRUFMVElNRSCAAAAAAgEDADMBSTQeIUD/y37I8P/1y4fg//BE/pEg+su+8eD/yT7A4EY+KD0g/cnF1eWvEQPK1RITEhMGAyEAyuXFTgYAIWAMCQkqEhMqEhPB4SMFIOrhrwYIzYsU4dHByf////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AAgMFBggJCwwOEBETFBYXGBobHR4fISIjJSYnKSorLC0uLzAxMjM0NTY3ODg5Ojo7PDw9PT4+Pj8/Pz9AQEBAQEBAQEBAPz8/Pz4+PT08PDs7Ojk5ODc2NTU0MzIxMC8uLCsqKSgmJSQjISAfHRwaGRcWFRMSEA8NCwoIBwUEAgH//fz6+ff29PPx8O7t6+ro5+Xk4uHg3t3c2tnY19bU09LR0M/OzczLysnJyMfGxsXFxMPDw8LCwcHBwcDAwMDAwMDAwMDBwcHBwsLDw8PExcXGxsfIycnKy8zNzs/Q0dLT1NXX2Nna3N3e4OHi5OXn6Onr7O7v8fL09vf5+vz9AAEECRAZJDFAUWR5kKnE4QAhRGmQueQRQHGk2RBJhMEAQYTJEFmk8UCR5DmQ6UShAGHEKZD5ZNFAsSSZEIkEgQCBBIkQmSSxQNFk+ZApxGEAoUTpkDnkkUDxpFkQyYRBAMGESRDZpHFAEeS5kGlEIQDhxKmQeWRRQDEkGRAJBAEAAQQJEBkkMUBRZHmQqcThACFEaZC55BFAcaTZEEmEwQBBhMkQWaTxQJHkOZDpRKEAYcQpkPlk0UCxJJkQiQSBAIEEiRCZJLFA0WT5kCnEYQChROmQOeSRQPGkWRDJhEEAwYRJENmkcUAR5LmQaUQhAOHEqZB5ZFFAMSQZEAkEAQAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAgICAgIDAwMDBAQEBAUFBQUGBgYHBwcICAkJCQoKCgsLDAwNDQ4ODw8QEBEREhITExQUFRUWFxcYGRkaGhscHB0eHh8gISEiIyQkJSYnJygpKisrLC0uLzAxMTIzNDU2Nzg5Ojs8PT4/QEFCQ0RFRkdISUpLTE1OT1FSU1RVVldZWltcXV9gYWJkZWZnaWprbG5vcHJzdHZ3eXp7fX5/gYKEhYeIiouNjpCRk5SWl5manJ2foKKkpaepqqytr7GytLa3ubu9vsDCxMXHycvMztDS1NXX2dvd3+Hi5Obo6uzu8PL09vj6/P4A//z38Ofcz8CvnIdwVzwfAN+8l3BHHO/Aj1wn8Ld8PwC/fDfwp1wPwG8cx3AXvF8AnzzXcAecL8BP3Gfwd/x/AH/8d/Bn3E/AL5wHcNc8nwBfvBdwxxxvwA9cp/A3fL8AP3y38Cdcj8DvHEdwl7zfAB88V3CHnK/Az9zn8Pf8/wD//Pfw59zPwK+ch3BXPB8A37yXcEcc78CPXCfwt3w/AL98N/CnXA/AbxzHcBe8XwCfPNdwB5wvwE/cZ/B3/H8Af/x38GfcT8AvnAdw1zyfAF+8F3DHHG/AD1yn8Dd8vwA/fLfwJ1yPwO8cR3CXvN8AHzxXcIecr8DP3Ofw9/z/AP/////////////////////+/v7+/v79/f39/fz8/Pz8+/v7+vr6+vn5+fj4+Pf39/b29fX19PTz8/Ly8fHw8PDv7u7t7ezs6+vq6uno6Ofn5uXl5OPj4uHh4N/e3t3c3Nva2djY19bV1NTT0tHQz8/OzczLysnIx8bFxMPCwcDAvr28u7q5uLe2tbSzsrGwr62sq6qpqKalpKOioJ+enZyamZiWlZSTkZCPjYyLiYiHhYSCgYB+fXt6eHd1dHJxcG5sa2loZmVjYmBfXVtaWFdVU1JQTk1LSUhGREJBPz08Ojg2NDMxLy0rKigmJCIgHx0bGRcVExEPDQsJ" + 
"BwUDAf9/Px8PBwMBgEAgEAgEAgEAAQEBAQEBAQEBAQEA//////////////+AEAcAAQABAAEBAAEBAAEA/wD//wD//wD/AP+AKwcBAAEAAQD/AP8A/wD/AP8A/wABAAEAAQCARgcBAQEBAQD//////////////wABAQEBAQGAYQf///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+AwODw+Pz+/xEAwAGxwj4E9cU+BfUKbwMKZ37+gCALI34LAiN+AwILGOsahhIDHBwcHPE9IN7BIRAAGVRdPgX1Cm8DCmcalhIjfAILfQIDAx0dHR3xPSDnIRgAGVRd8T0grskRAcAB6cI+BPUKbwMKZ37+gCALI34LAiN+AwILGOs+CvUahhIcHBwc8T0g9CN8Agt9AgMD8T0g0MkgIEZJTExFRCAgIFBPTFlHT05TIEhFTElDT1BURVJJTiBBQ1RJT04gIQDADgpwLHQsGhPWICI2ACwNIPE+oOoQyngBCQDlYmsJVF3hDMYKR3AsdCwaG9YgIjYALA0g8a/qEcrJ+hDK/jDI1gTqEMpHPqCQ/lA4Aj5QDgAM1ggw+3ghAcARBAB3xggZDSD5+hHKg+oRykf+UDgCPlAOAAzWCDD7eC4td9YIGQ0g+ckh9grzMf/PzVABr+Am4P/gD+BD4EL2SOBFPkDgQT4E4AfN9RM+CuoAAA4HeeBwJqCvIstsKPsNIPIh/v8yy30g+wEKABH1/yFpAc3kE+cCAVYAEQDBIVt2zeQTrwYYIWsOzYsUIYsOzaQUxwGwAxEAgCGhF8XlzeQT4cERAIjN5BMhAJgRAwABYMDHcc9yIwUg+BQdIPHN9RMhuxUGAc2WE82JEz5E4EGv4EU+A+D/+z4B6hLK4E0QAAB4zccTBSD6zZATxwEACFkhAIhzIwt4sSD5IQDHPv9FdyRwJCJ3JXclcCwg8x5/IQCYx3PPNgDL1DYIx3PLlCPLVCjuPoABDxARIAAhIpjF5XfL1HfLlDwZDSD1POEswQUg7D486jPLr+o0yz3qL8s+oOCCPgLqG8vNiRM+ROBBr+BFPgPg/68+ACEXyyI+CiI+IHev6h7L4ITgluodyz4B6h/L6g/D6g3KBlARnAjNxAjNcwsBLAHFzTsLzQAJwQt4sSDzzZATxwEACFkhAIhzIwt4sSD5zfUTeQYQIYMOzYsUPv/qKcsGgBGwCM3ECM2JEwEsAcXNbAzNAAnBC3ixIPOv6hLKzZATPpDgU/PHAbADEQCIIaEXzeQTzfUTIQIWBgHNlhPNiRM+ROBBr+BFPgPg//sY/j4D6gAgzcRGBgMhF8t+gCJ+gDwifoB3zckP+jDLb/oxy2fNtgs+AeCB8IG3IPv6Dcq3KAPNcwHJ+h3LBgARTg2Hb2AZKmZvTgkq4ItfKjzgjD1PKuCNe4eHg0cRAMUqEhwFIPp5h4eBRxEAxCoSHAUg+n3qMMt86jHLyfCL4I7wjOCP8I3gkBEAw9XlzcoQ4dHwpeaAEhwBAwAJ8JA94JAg6CEAxQYPKk+gXxq3IB95yzegXxq3IBYqT6BfGrcgD3nLN6BfGrcgBiwsLBhHLOXNyhDwlrcoKwYB8KXGP0/LfygBBcXwpMY/Vx4AzZMOe8H18KPGP1ceAM2TDsHhJCJwGAzhJPCjxj8i8KTGPyIsJRbDBg/wjj3gjsLiCz4C6gAgw1JhfBjcHwAL7mpIYL9vBgMhF8t+gCJ+gDwifoB3zckPIcsNEQDGzf4MI+U+A+oAICEgy83+DPocy9YIb+ocy82vYAYDESDLIWIOxeXVzcoQ4fCjxhQi8KQiNg8jVF3hIyMjwQUg5M3ERsE+AeoAIAr+/ygiEQDGbyYAKRnlAwoDbyYAKRleI1bhKmZvxc0xHMwAQMEY2T4B4IHwgbcg+8l+PMjl1c3KEAYB8KVPy38oAQXF8KTLf/UoAi88Vx4AzZMO8XsgAi88xn/B9fCjy3/1KAIvPFceAM2TDvF7KAIvPMZ/wdESE3gSE+EjIyMYsFANAgAIDAYCRCgoFANEKAAUE0QAABQSRAAoFAJVKCjsA1UoAOwTVQAA7BJVACjsAAAEBQAAAAEFAAEBAwIGAQEDBwYCAgAHAwICAAcEAwMBAgYDAwEFBgQEAAECBAQAAwIFBQQFBgUFBAcGMgAAzgAAADIAAM4AAAAyAADOKAAAHhEAChEAAAAACu8AHu8AFAAKFAD2FAAPCgAF6AAC4gAQ3gAQ4gD+CgD74g4C3Q4C4QAC4vIC3fIC4AAM4PsM4PsQ4/sJ3fsJ/wABAQICAwMEBAUFAAAGAQYCBgMGBAYFBgAHAQcCBwMHBAcFBwYICQoKCwsMDA0NDgoPDxAQEQoSEhMTERQVFRYVFxUYCBkIGggb/yAAD/AbD/DlD/9//3+XEQAAAGD/f5cRAAAYAP9/lxEAAIB8lxH/f/9/QHz/f18IAADLI8sSeC9HeS9PAyEAAH2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEssoyxkJ0BPJ+hfLJgJvfuCcLzzgnn3GQG9+4Jvgn6/gmOCZ4JrgneChPkDgl/oYy29OfcZAb0bFeOCgeeCizdMQ8KPgpvCk4KnwpeCsr+Cg4KI+QOChzdMQ8KPgp/Ck4KrwpeCtwXkvPOCgr+CheOCizdMQ8KPgmfCk4JzwpeCf8Kbgl/Cp4JrwrOCd8KfgmPCq4JvwreCe+hnLJgJvTn3GQG9GxXjgoHkvPOChr+CizdMQ8KPgpvCk4KnwpeCswXngoHjgoa/gos3TEPCj4KfwpOCq8KXgra/goOChPkDgos3TEPCj4JnwpOCc8KXgn/Cm4JfwqeCa8KzgnfCn4JjwquCb8K3gnskq4KAq4KEq4KLwl1/woCYGV8t6ICDLe3soJy88X3qTMAIvPG96g1YlXiVvfiVuZxl8LzwYH3ovPFfLeyjhey88X5IwAi88b3qDViVeJW9+JW5nGXxH8Jhf8KEmBlfLeiAgy3t7KCcvPF96kzACLzxveoNWJV4lb34lbmcZfC88GB96LzxXy3so4XsvPF+SMAIvPG96g1YlXiVvfiVuZxl8T/CZX/CiJgZXy3ogIMt7eygnLzxfepMwAi88b3qDViVeJW9+JW5nGXwvPBgfei88V8t7KOF7LzxfkjACLzxveoNWJV4lb34lbmcZfICB4KPwml/woCYGV8t6ICDLe3soJy88X3qTMAIvPG96g1YlXiVvfiVuZxl8LzwYH3ovPFfLeyjhey88X5IwAi88b3qDViVeJW9+JW5nGXxH8Jtf8KEmBlfLeiAgy3t7KCcvPF96kzACLzxveoNWJV4lb34lbmcZfC88GB96LzxXy3so4XsvPF+SMAIvPG96g1YlXiVvfiVuZxl8T/CcX/CiJgZXy3ogIMt7eygnLzxfepMwAi88b3qDViVeJW9+JW5nGXwvPBgfei88V8t7KOF7LzxfkjACLzxveoNWJV4lb34lbmcZfICB4KTwnV/woCYGV8t6ICDLe3soJy88X3qTMAIvPG96g1YlXiVvfiVuZxl8LzwYH3ovPFfLeyjhey88X5IwAi88b3qDViVeJW9+JW5nGXxH8J5f8KEmBlfLeiAgy3t7KCcvPF96kzACLzxveoNWJV4lb34lbmcZfC88GB96LzxXy3so4XsvPF+SMAIvPG96g1YlXiVvfiVuZxl8T/CfX/CiJgZXy3ogIMt7eygnLzxfepMwAi88b3qDViVeJW9+JW5nGXwvPBgfei88V8t7KOF7LzxfkjACLzxveoNWJV4lb34lbmcZfICB4KXJ9T6D4EDxyfWv4EDxyfXF1eXHKv7/KFD+FiAaTiMqh4eHVF1vJgApKXgGmAlHelRne11vGNzGYBLPeBIcGNN2ACETyjQ1KPc1yfvFBmR2AAUg+8HJ+3YABSD7yfXF1eUqEhMLeLEg+OHRwfHJxeUBAKAhAMDNAxThwcnF5XEjBSD74cHJxdXlAQCAIZXKzQMU4dHBycXV5a/qFcuwIAwaEyIaEzIEDXjqFcvlxRq+EyAPIxq+IAkTIw0gCMHhGBkrGyMjBSDmecFPBBoTIhoTIiEVyzThDSDS+hXL4dHBydVfzXIUuzD60cnF9cH6FMrLD6mAR/CLkR+AR/AFqOoUysHJ9cXltxcXF/aA4Ggq4GkFIPo+5OBH4cHxyfXF5bcXFxf2gOBqKuBrBSD6PuTgSOBJ4cHxyT4Q4ADwAC/LN+bwRz4g4ADwAC/mD7DqFsvJzyEAgK8GIE8+CCINIPwFIPnHIQCABiBPIg0g/AUg+cnFzQMVSs0eFcHJxc0RFUjNGRVLzSMVwcnFBgHNKxXBycUGABj2xQYDGPHFBgLNKxXByfXlh4eAJsBvceHxyfXlh4cmwG9GI04jXiNW4fHJ9cXV5eCDKjzK8BPWIF/wg835FF95xghPezwY6PXF1eXF1c13FdHBex4FIS3LGNUBKssR8NjNlRURGPzNlRURnP/NlRUR9v/NlRUR//8+LzwZOPwCA3ovV3sv";
var v10823 = v10824 + "XxMZyTAwRlBT/zAwUE5UU/8wMExJTkVT/xYFB1dFTENPTUUgVE8WBQgtUkVBTFRJTUUtFgAJREVNTyBNQURFIEVTUEVDSUFMTFkWAQpGT1IgTENQJzIwMDAgUEFSVFn/FgAAR1JFRVRJTlg6ICAgICAgICAgICAWAAFEU0MsUEFOLFNBQixGQVRBTElUWRYAAkpFRkYgRlJPSFdFSU4sSUNBUlVTFgADRE9YLFFVQU5HLEFCWVNTICAgICAWAAQgICAgICAgICAgICAgICAgICAgIBYABUNSRURJVFM6ICAgICAgICAgICAgFgAGQUxMIEdGWCZDT0RFIEJZIEFHTyAWAAdIRUxJQ09QVEVSIDNEIE1PREVMIBYACENSRUFURUQgQlkgQlVTWSAgICAgFgAJICAgICAgICAgICAgICAgICAgICAWAApVU0VEIFNPRlRXQVJFOiAgICAgIBYAC1JHQkRTLE5PJENBU0gsRkFSICAgFgAMICAgICAgICAgICAgICAgICAgICAWAA1DT05UQUNUOiAgICAgICAgICAgIBYADkdPQlVaT1ZAWUFIT08uQ09NICAgFgAPSFRUUDovL1NQRUNDWS5EQS5SVSAWABAgICAgICAgICAgICAgICAgICAgIBYAEVNFRSBZT1UgT04gR0JERVYyMDAw/wAAAAAAAAAAAAAAAAAAAAAICBwUHBQ4KDgoMDBwUCAgKCh8VHxUKCgAAAAAAAAAABQUPip/QT4qfFT+gnxUKCgICDw0fkL8rP6Cfmr8hHhYJCR+Wn5SPCR4SPyU/LRISBgYPCR+Wjwkflr8tH5KNDQQEDgocFAgIAAAAAAAAAAABAQOChwUOCg4KDgoHBQICBAQOCgcFBwUHBQ4KHBQICAAABQUPio8NH5CPCx8VCgoAAAICBwUPDR+QjwsOCgQEAAAAAAAAAAAEBA4KHBQcFAAAAAAAAB8fP6CfHwAAAAAAAAAAAAAAAAwMHhIeEgwMAQEDgoeEjwkeEjwkOCgQEAYGDwkflr+qv6q/LR4SDAwGBg8JHxUPDQ4KHxs/oJ8fBwcPiJ+Wjw0eEj8vP6CfHwcHD4iflo8NE5K/LR4SDAwJCR+Wn5afFT8tP6CfGwQEBwcPiJ8XPyEfnr8tHhIMDAYGDwkeFj8pP66/LR4SDAwPDx+Qv66XFQ4KHBQcFAgIBwcPiJ+Wjwkflr8tPiIcHAcHD4iflr+sn5KfHT4iHBwAAAAAAgIHBQICBAQOCgQEAAACAgcFAgIEBA4KDgocFAAAAAAHBQ4KHBQcFA4KAAAAAAAADw8fkJ8fPyEeHgAAAAAAAA4KBwUHBQ4KHBQAAAYGDwkflr8tHhoEBA4KBAQHBw+In5a/rL8pPi4+IhwcBwcPiJ+Wv66/oL+uvy0SEg4OHxEflr8pP6a/LT4iHBwHBw+In5a5qbgoP6y/IxwcDAweEh8VH5a7qr+uvyEeHgcHD4ifFx8RHhY/Lz+gnx8HBw+Inxc/IT4uOCg4KBAQBwcPiJ+Wvy8/qL+uvyEeHgkJH5a/rr+gv66/LT8tEhIPDx+QjwsOChwUHhY/IR4eDw8fkI+Og4KXFT8tHhIMDAkJH5afFR+Qv66/LT8tEhIICBwUHBQ4KDkpP66fEQ4OCgofFR+Qv6q/rr8tPy0SEgkJH5a/pr+qv6y7qr8tEhIHBw+In5a7qruqvy0+IhwcBwcPiJ+Wv66/IT4uOCgQEAcHD4iflr+uv6q/LT+inZ2HBw+In5a/LT4iPy0/LRISBwcPiJ8XP6Cfnr8tPiIcHB8fP6CfGw4KHBQcFBwUCAgJCR+Wn5a7qruqvy0eEgwMERE7qruqnxUfFR4SHBQICAkJH5aflr+uv6q/KR8VCgoJCR+WnxUOCg8JH5a/LRISCQkflr8tPy0eEhwUHBQICA8PH5C/LT46Dwsflr8hHh4HBw+IjwsOChwUHhYfEQ4OEBA4KDwkHhIPCQeEg4KBAQ4OHxEPDQcFDgoeGj4iHBwGBg8JH5a7qpERAAAAAAAAAAAAAAAAAAAAAB8fP6CfHx81rdPfJJne5X1MAIvPEevyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxnLEcsXlDABhMsRyxeUMAGEyxHLF5QwAYTLEcsXlDABhMsRyxeUMAGEyxHLF5QwAYTLEcsXlDABhMsRyxeUMAGEeRcvT/F5MAIvPIVvJrcBAAA+t7zLEbrLED6/vcsRu8sQPj+8P8sRuj/LEL0/yxG7P8sQeLHIeKHAebcgB3xiV31rX3jLH9L/HD5AlU97lW96lPUwAi88R6/LGTABgB/LGTABgB/LGTABgB/LGTABgB/LGTABgB/LGTABgB/LGTABgB/LGTABgB/LGcsRyxeVMAGFyxHLF5UwAYXLEcsXlTABhcsRyxeVMAGFyxHLF5UwAYXLEcsXlTABhcsRyxeVMAGFyxHLF5UwAYV5Fy9P8XkwAi88hGcuQMMxHMsf0pcdPkCUT3qUZ3uV9TACLzxHr8sZMAGAH8sZMAGAH8sZMAGAH8sZMAGAH8sZMAGAH8sZMAGAH8sZMAGAH8sZMAGAH8sZyxHLF5QwAYTLEcsXlDABhMsRyxeUMAGEyxHLF5QwAYTLEcsXlDABhMsRyxeUMAGEyxHLF5QwAYTLEcsXlDABhHkXL0/xeTACLzyFbyZAwzEcyx/SoRt91r9PfZNvepT1MAIvPEevyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxnLEcsXlTABhcsRyxeVMAGFyxHLF5UwAYXLEcsXlTABhcsRyxeVMAGFyxHLF5UwAYXLEcsXlTABhcsRyxeVMAGFeRcvT/F5MAIvPIRnLr/DMRz/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////";
var v10822 = v10823 + "////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////";
var v10821 = v10822 + "/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////3q8MAVUZ3tdb3u90pdAfZNPepRfkTA+V3nLPy88g+CDPn+R5YdPbyYARCkpKQkBkVIJweV41kAXb3nWQB8fH+YPZ/CChGd55gcGB/YITwpP8INHLMl5S1+RV3nLPy88g+CDPneR5YdPbyYARCkpKQkBklsJweV41kAXb3nWQB8fH+YPZ/CChGd55gcGB/YITwpP8INHLMmVT3qUX5EwPld5yz8vPIPggz5/keWHT28mAEQpKSkJAR9BCcHleNZAF2951kAfHx/mD2fwgoRneeYHBgf2CE8KT/CDRyzJeUtfkVd5yz8vPIPggz53keWHT28mAEQpKSkJASBKCcHleNZAF2951kAfHx/mD2fwgoRneeYHBgf2CE8KT/CDRyzJfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6";
var v10820 = v10821 + "LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkyX6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEk";
var v10819 = v10820 + "gEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALMl+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASXJfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARyws";
var v10818 = v10819 + "frF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsyf//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////";
var v10817 = v10818 + "////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////";
var v10816 = v10817 + "/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wHRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLR";
var v10815 = v10816 + "e7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6Zf";
var v10814 = v10815 + "eqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyIxDsrh+eEWwxgNIf3Er+oLyuoMyiwsLPCPPcjgj14sGrcqKPDGeeCT+g3Ktygm+gvKPP4DIAI+AeoLyiAH+gzKPOoMyvoMyl8WyvCT1nkSe8bH4JMqTypHKuUmxl+Hh4M8PG8qX1Z5h4eBPDxveE4sh4eARjw8bypmb3y6OAViV31rX3y4OAVgR31pT3q4OAVQR3tZT3iU4JR8h+CV5dXFr+CSzUpifeCS0eHVzUpi0eE+AeCSzUpi8JRfPniTZy5Hr8sdMAGEH8sdMAGEH8sdMAGEH8sdMAGEH8sdMAGEH8sdMAGEH8sdMAGEH8sdMAGEH8sdxkBnCA7KMQDC5fCVb8l7vTBVfZNPepRfkTAkV3nLPy88Rz5/kU3Fh09vJgBEKSkJAfdiCcHlJsLwkm94BoDJeUtfkVd5yz8vPEc+d5FNxYdPbyYARCkpCQH4ZwnB5SbC8JJveAaAyZVPepRfkTAkV3nLPy88Rz5/kU3Fh09vJgBEKSkJAalsCcHlJsLwkm94BoDJeUtfkVd5yz8vPEc+d5FNxYdPbyYARCkpCQGqcQnB5SbC8JJveAaAyYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNyXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOT";
var v10813 = v10814 + "gg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDcmDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDMlxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggzJxg+Hh+oawXovpl96obMiei+mX3qgszIkeRgAInAtJCJwLSQicC0kInAtJCJwLSQicC0kInAtJCJwLSQicC0kInAtJCJwLSQicC0kInAtJCJwLSQW/8n/////////////////////////";
var v10812 = v10813 + "//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+qqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVACEzDDPAABIAEjPAMwwAIQAhMwwzwAASABIzwDMMACEAITMMM8AAEgASM8AzDAAhACEzDDPAABIAEjPAMwwAIQAhMwwzwAASABIzwDMMACEAITMMM8AAEgASM8AzDAAhACEzDDPAABIAEjPAMwwAIQAhMwwzwAASABIzwDMMACEAITMMM8AAEgASM8AzDAAhACEzDDPAABIAEjPAMwwAIQAhMwwzwAASABIzwDMMACEAITMMM8AAEgASM8AzDAAhACEzDDPAABIAEjPAMwwAIQAhMwwzwAASABIzwDMMACEAITMMM8AAEgASM8AzDAAhACEzDDPAABIAEjPAMwwAIQj8GH4y/WT7wO+B50CzINkI/Bh+Mv1k+8DvgedAsyDZCPwYfjL9ZPvA74HnQLMg2Qj8GH4y/WT7wO+B50CzINkI/Bh+Mv1k+8DvgedAsyDZCPwYfjL9ZPvA74HnQLMg2Qj8GH4y/WT7wO+B50CzINkI/Bh+Mv1k+8DvgedAsyDZCPwYfjL9ZPvA74HnQLMg2Qj8GH4y/WT7wO+B50CzINkI/Bh+Mv1k+8DvgedAsyDZCPwYfjL9ZPvA74HnQLMg2Qj8GH4y/WT7wO+B50CzINkI/Bh+Mv1k+8DvgedAsyDZCPwYfjL9ZPvA74HnQLMg2Qj8GH4y/WT7wO+B50CzINnMzMzMMzMzM8zMzMwzMzMzzMzMzDMzMzPMzMzMMzMzM8zMzMwzMzMzzMzMzDMzMzPMzMzMMzMzM8zMzMwzMzMzzMzMzDMzMzPMzMzMMzMzM8zMzMwzMzMzzMzMzDMzMzPMzMzMMzMzM8zMzMwzMzMzzMzMzDMzMzPMzMzMMzMzM8zMzMwzMzMzzMzMzDMzMzPMzMzMMzMzM8zMzMwzMzMzzMzMzDMzMzPMzMzMMzMzM8zMzMwzMzMzzMzMzDMzMzPMzMzMMzMzM8zMzMwzMzMzzMzMzDMzMzPMzMzMMzMzM8zMzMwzMzMzzMzMzDMzMzPMzMzMMzMzM8zMzMwzMzMzwMDAwAwMDAzAwMDADAwMDMDAwMAMDAwMwMDAwAwMDAzAwMDADAwMDMDAwMAMDAwMwMDAwAwMDAzAwMDADAwMDMDAwMAMDAwMwMDAwAwMDAzAwMDADAwMDMDAwMAMDAwMwMDAwAwMDAzAwMDADAwMDMDAwMAMDAwMwMDAwAwMDAzAwMDADAwMDMDAwMAMDAwMwMDAwAwMDAzAwMDADAwMDMDAwMAMDAwMwMDAwAwMDAzAwMDADAwMDMDAwMAMDAwMwMDAwAwMDAzAwMDADAwMDMDAwMAMDAwMwMDAwAwMDAzAwMDADAwMDMDAwMAMDAwMwMDAwAwMDAzAwMDADAwMDPHxAQEBAQEBHx8QEBAQEBDx8QEBAQEBAR8fEBAQEBAQ8fEBAQEBAQEfHxAQEBAQEPHxAQEBAQEBHx8QEBAQEBDx8QEBAQEBAR8fEBAQEBAQ8fEBAQEBAQEfHxAQEBAQEPHxAQEBAQEBHx8QEBAQEBDx8QEBAQEBAR8fEBAQEBAQ8fEBAQEBAQEfHxAQEBAQEPHxAQEBAQEBHx8QEBAQEBDx8QEBAQEBAR8fEBAQEBAQ8fEBAQEBAQEfHxAQEBAQEPHxAQEBAQEBHx8QEBAQEBDx8QEBAQEBAR8fEBAQEBAQ8fEBAQEBAQEfHxAQEBAQEPHxAQEBAQEBHx8QEBAQEBCqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlUC4XIscAl7InAJInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJLCwly2XIJGjJycnJyeEicAlyLHAJeyJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSwsJctlyCRoycnJycnhInAJInAJcixwCXsicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAksLCXLZcgkaMnJycnJ4SJwCSJwCSJwCXIscAl7InAJInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJLCwly2XIJGjJycnJyeEicAkicAkicAkicAlyLHAJeyJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSwsJctlyCRoycnJycnhInAJInAJInAJInAJInAJcixwCXsicAkicAkicAkicAkicAkicAkicAkicAkicAkicAksLCXLZcgkaMnJycnJ4SJwCSJwCSJwCSJwCSJwCSJwCXIscAl7InAJInAJInAJInAJInAJInAJInAJInAJInAJLCwly2XIJGjJycnJyeEicAkicAkicAkicAkicAkicAkicAlyLHAJeyJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSwsJctlyCRoycnJycnhInAJInAJInAJInAJInAJInAJInAJInAJcixwCXsicAkicAkicAkicAkicAkicAkicAksLCXLZcgkaMnJycnJ4SJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCXIscAl7InAJInAJInAJInAJInAJInAJLCwly2XIJGjJycnJyeEicAkicAkicAkicAkicAkicAkicAkicAkicAkicAlyLHAJeyJwCSJwCSJwCSJwCSJwCSwsJctlyCRoycnJycnhInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJcixwCXsicAkicAkicAkicAksLCXLZcgkaMnJycnJ4SJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCXIscAl7InAJInAJInAJLCwly2XIJGjJycnJyeEicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAlyLHAJeyJwCSJwCSwsJctlyCRoycnJycnhInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJcixwCXsicAksLCXLZcgkaMnJycnJ4SJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCXIscAl7LCwly2XIJGjJycnJydE+t5LI4IXmB8RSRPCFHx8focjlzTJE4XkicCwicCwicCwicCwicCwicCwicCwicCzJ+ABUXWhHeZAfyx1nATNZCfCCMQCv/qAoAzEAvwH/AOlHPgeQVF1HDjOvyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxlHIbRXCeViaz7/AQ8Ayfoay2/6G8uFZ/4UIAU+/y0YBtbsIAU8LOoby3zqGsvNr2AhlEbNyhDwpMagV/Cjxn9f1SGXRs3KEPCkxqBn8KPGf2/RzTEcKAsf2hhZH9oYWcPERny6OAViV31rX+XNmkbh1Xu90sxFe9ZA4Ih9k0884Il6lF/ghjzgij2RMGvgh3nLPy88g+CF8IIBDwBvVHzWQBfLN6GFZ3rmBxdvGAjwij3KAETgivCJX/CGV/CFGASCHSgLy38g+Ffwh4LghR3NYkUY2nvgifCIg1/l";
var v10811 = v10812 + "5gf2CG8mB1Z7aB8fHx/LHR/LHeYDxkBnrx7/6XnghpPgh3vLPy88geCF8IIBDwBvVHzWQBfLN6GFZ3rmBxdv8Ilf8IZX8IXLfyAHV/CHgh0YAYLghc1iRfCKPcoAROCKGN171kDgiHuVTzzgiXqUX+CGPOCKPZEwa+CHecs/LzyD4IXwggEPAG9UfNZAF8s3oYVneuYHF28YCPCKPcoAROCK8Ilf8IZX8IUYBIIdKAvLfyD4V/CHguCFHc0qRhjae+CJ8IiTX+XmB/YQbyYHVntoHx8fH8sdH8sd5gPGQGc+/1jpeeCGk+CHe8s/LzyB4IXwggEPAG9UfNZAF8s3oYVneuYHF2/wiV/whlfwhct/IAdX8IeCHRgBguCFzSpG8Io9ygBE4IoY3UYAALoAAHzWQMhPHx8f5h9HeeYHKAsE/gUwBvUhylblBT4PkCHJRoRn5fCCZ69vyfCCZ69vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi";
var v10810 = v10811 + "IiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIsnxAQ8APcqEVz0odj0oOj0idwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwksLCXLZSgCJGgidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwksLCXLZSgCJGgidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwksLCXLZSgCJGgidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkid8kicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAksLCUicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAksLCUicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAksLCUicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAksLCUicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAksLCUicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAksLCUicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAloyfgAVF3wgjEAr/6gKAMxAL8B/wDFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcVia/nJJgJ+4JovPOCYfcZAb37gl+Cbr+CZ4JzgneCePkDgn8n/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////";
var v10809 = v10810 + "////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////";
var v10808 = v10809 + "////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Aw==";
var gameboy_rom = v10808;
var completed = 0;
var benchmarks = BenchmarkSuite.CountBenchmarks();
var success = true;
var latencyBenchmarks = ["Splay", "Mandreel"];
var v5544;
var v9673 = typeof skipBenchmarks;
var v8426 = v9673 === "undefined";
if (v8426) {
  v5544 = [];
} else {
  v5544 = skipBenchmarks;
}
var skipBenchmarks = v5544

}

JAM.stopProfile('load');
