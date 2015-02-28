
JAM.startProfile('load');
function v888() {
  var testTypedArray = new Uint8Array(1);
  testTypedArray[0] = -1;
  testTypedArray[0] = testTypedArray[0] >> 0;
  if (testTypedArray[0] != 255) {
    cout("Detected faulty math by your browser.", 2);
    return true;
  } else {
    return false;
  }
  return;
}
function v887(length$$20, defaultValue, numberType) {
  try {
    if (settings[5]) {
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
    if (v5547) {
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
    if (defaultValue != 0) {
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
    cout("Could not convert an array to a typed array: " + error$$26.message, 1);
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
    if (!v5549) {
      v5549 = !baseArray$$1.length;
    }
    if (v5549) {
      return [];
    }
    var arrayTemp = [];
    var index$$66 = 0;
    var v899 = index$$66 < baseArray$$1.length;
    for (;v899;) {
      arrayTemp[index$$66] = baseArray$$1[index$$66];
      ++index$$66;
      v899 = index$$66 < baseArray$$1.length;
    }
    return arrayTemp;
  } catch (error$$25) {
    cout("Conversion from a typed array failed: " + error$$25.message, 1);
    return baseArray$$1;
  }
  return;
}
function v885(baseArray, memtype) {
  try {
    var v5553 = settings[5];
    if (!v5553) {
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
    if (v5553) {
      return baseArray;
    }
    var v5554 = !baseArray;
    if (!v5554) {
      v5554 = !baseArray.length;
    }
    if (v5554) {
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
    cout("Could not convert an array to a typed array: " + error$$24.message, 1);
    return baseArray;
  }
  return;
}
function v884() {
  function v883(parentObj$$673, address$$167, data$$141) {
    if (parentObj$$673.inBootstrap) {
      parentObj$$673.cGBC = (data$$141 & 1) == 0;
      if (parentObj$$673.name + parentObj$$673.gameCode + parentObj$$673.ROM[323] == "Game and Watch 50") {
        parentObj$$673.cGBC = true;
        cout("Created a boot exception for Game and Watch Gallery 2 (GBC ID byte is wrong on the cartridge).", 1);
      }
      cout("Booted to GBC Mode: " + parentObj$$673.cGBC, 0);
    }
    parentObj$$673.memory[65388] = data$$141;
    return;
  }
  function v882(parentObj$$672, address$$166, data$$140) {
    cout("Boot ROM reads blocked: Bootstrap process has ended.", 0);
    parentObj$$672.inBootstrap = false;
    parentObj$$672.disableBootROM();
    parentObj$$672.memory[65360] = data$$140;
    return;
  }
  if (this.inBootstrap) {
    this.memoryHighWriter[80] = this.memoryWriter[65360] = v882;
    if (this.cGBC) {
      this.memoryHighWriter[108] = this.memoryWriter[65388] = v883;
    }
  } else {
    this.memoryHighWriter[80] = this.memoryWriter[65360] = this.cartIgnoreWrite;
  }
  return;
}
function v881() {
  function v880(parentObj$$671, address$$165, data$$139) {
    parentObj$$671.memory[65357] = data$$139;
    return;
  }
  function v879(parentObj$$670, address$$164, data$$138) {
    if (parentObj$$670.memory[65353] != data$$138) {
      parentObj$$670.midScanLineJIT();
      JAM.call(parentObj$$670.updateGBOBJPalette, parentObj$$670, [4, data$$138], JAM.policy.p1);
      parentObj$$670.memory[65353] = data$$138;
    }
    return;
  }
  function v878(parentObj$$669, address$$163, data$$137) {
    if (parentObj$$669.memory[65352] != data$$137) {
      parentObj$$669.midScanLineJIT();
      JAM.call(parentObj$$669.updateGBOBJPalette, parentObj$$669, [0, data$$137], JAM.policy.p1);
      parentObj$$669.memory[65352] = data$$137;
    }
    return;
  }
  function v877(parentObj$$668, address$$162, data$$136) {
    if (parentObj$$668.memory[65351] != data$$136) {
      parentObj$$668.midScanLineJIT();
      JAM.call(parentObj$$668.updateGBBGPalette, parentObj$$668, [data$$136]);
      parentObj$$668.memory[65351] = data$$136;
    }
    return;
  }
  function v876(parentObj$$667, address$$161, data$$135) {
    parentObj$$667.memory[65350] = data$$135;
    var v5564 = data$$135 > 127;
    if (v5564) {
      v5564 = data$$135 < 224;
    }
    if (v5564) {
      data$$135 = data$$135 << 8;
      address$$161 = 65024;
      var stat$$1 = parentObj$$667.modeSTAT;
      parentObj$$667.modeSTAT = 0;
      var newData$$1 = 0;
      var v929 = (address$$161 = address$$161 + 1) < 65184;
      do {
        var v924 = parentObj$$667.memoryReader;
        var v925 = data$$135;
        data$$135 = data$$135 + 1;
        newData$$1 = JAM.call(v924[data$$135], v924, [parentObj$$667, v925], JAM.policy.p1);
        if (newData$$1 != parentObj$$667.memory[address$$161]) {
          parentObj$$667.modeSTAT = stat$$1;
          parentObj$$667.graphicsJIT();
          parentObj$$667.modeSTAT = 0;
          var v926 = parentObj$$667.memory;
          var v927 = address$$161;
          address$$161 = address$$161 + 1;
          v926[v927] = newData$$1;
          break;
        }
        v929 = (address$$161 = address$$161 + 1) < 65184;
      } while (v929);
      if (address$$161 < 65184) {
        var v938 = address$$161 < 65184;
        do {
          var v930 = parentObj$$667.memory;
          var v931 = address$$161;
          address$$161 = address$$161 + 1;
          var v5568 = parentObj$$667.memoryReader;
          var v5569 = data$$135;
          data$$135 = data$$135 + 1;
          var v10603 = JAM.call(v5568[data$$135], v5568, [parentObj$$667, v5569], JAM.policy.p1);
          v930[v931] = v10603;
          var v932 = parentObj$$667.memory;
          var v933 = address$$161;
          address$$161 = address$$161 + 1;
          var v5570 = parentObj$$667.memoryReader;
          var v5571 = data$$135;
          data$$135 = data$$135 + 1;
          var v10604 = JAM.call(v5570[data$$135], v5570, [parentObj$$667, v5571], JAM.policy.p1);
          v932[v933] = v10604;
          var v934 = parentObj$$667.memory;
          var v935 = address$$161;
          address$$161 = address$$161 + 1;
          var v5572 = parentObj$$667.memoryReader;
          var v5573 = data$$135;
          data$$135 = data$$135 + 1;
          var v10605 = JAM.call(v5572[data$$135], v5572, [parentObj$$667, v5573], JAM.policy.p1);
          v934[v935] = v10605;
          var v936 = parentObj$$667.memory;
          var v937 = address$$161;
          address$$161 = address$$161 + 1;
          var v5574 = parentObj$$667.memoryReader;
          var v5575 = data$$135;
          data$$135 = data$$135 + 1;
          var v10606 = JAM.call(v5574[data$$135], v5574, [parentObj$$667, v5575], JAM.policy.p1);
          v936[v937] = v10606;
          v938 = address$$161 < 65184;
        } while (v938);
      }
      parentObj$$667.modeSTAT = stat$$1;
    }
    return;
  }
  function v875(parentObj$$666, address$$160, data$$134) {
    parentObj$$666.LYCMatchTriggerSTAT = (data$$134 & 64) == 64;
    parentObj$$666.mode2TriggerSTAT = (data$$134 & 32) == 32;
    parentObj$$666.mode1TriggerSTAT = (data$$134 & 16) == 16;
    parentObj$$666.mode0TriggerSTAT = (data$$134 & 8) == 8;
    parentObj$$666.memory[65345] = data$$134 & 120;
    var v9678 = !parentObj$$666.usedBootROM;
    if (!v9678) {
      v9678 = !parentObj$$666.usedGBCBootROM;
    }
    var v8440 = v9678;
    if (v8440) {
      v8440 = parentObj$$666.LCDisOn;
    }
    var v5576 = v8440;
    if (v5576) {
      v5576 = parentObj$$666.modeSTAT < 2;
    }
    if (v5576) {
      parentObj$$666.interruptsRequested = parentObj$$666.interruptsRequested | 2;
      parentObj$$666.checkIRQMatching();
    }
    return;
  }
  function v874(parentObj$$665, address$$159, data$$133) {
    if (parentObj$$665.memory[65344] != data$$133) {
      parentObj$$665.midScanLineJIT();
      var temp_var$$22 = data$$133 > 127;
      if (temp_var$$22 != parentObj$$665.LCDisOn) {
        parentObj$$665.LCDisOn = temp_var$$22;
        var v947 = parentObj$$665.memory;
        v947[65345] = v947[65345] & 120;
        parentObj$$665.midScanlineOffset = -1;
        parentObj$$665.totalLinesPassed = parentObj$$665.currentX = parentObj$$665.queuedScanLines = parentObj$$665.lastUnrenderedLine = parentObj$$665.STATTracker = parentObj$$665.LCDTicks = parentObj$$665.actualScanLine = parentObj$$665.memory[65348] = 0;
        if (parentObj$$665.LCDisOn) {
          parentObj$$665.modeSTAT = 2;
          parentObj$$665.matchLYC();
          parentObj$$665.LCDCONTROL = parentObj$$665.LINECONTROL;
        } else {
          parentObj$$665.modeSTAT = 0;
          parentObj$$665.LCDCONTROL = parentObj$$665.DISPLAYOFFCONTROL;
          parentObj$$665.DisplayShowOff();
        }
        parentObj$$665.interruptsRequested = parentObj$$665.interruptsRequested & 253;
      }
      var v951;
      if ((data$$133 & 64) == 64) {
        v951 = 1024;
      } else {
        v951 = 0;
      }
      parentObj$$665.gfxWindowCHRBankPosition = v951;
      parentObj$$665.gfxWindowDisplay = (data$$133 & 32) == 32;
      var v953;
      if ((data$$133 & 16) == 16) {
        v953 = 0;
      } else {
        v953 = 128;
      }
      parentObj$$665.gfxBackgroundBankOffset = v953;
      var v954;
      if ((data$$133 & 8) == 8) {
        v954 = 1024;
      } else {
        v954 = 0;
      }
      parentObj$$665.gfxBackgroundCHRBankPosition = v954;
      parentObj$$665.gfxSpriteNormalHeight = (data$$133 & 4) == 0;
      parentObj$$665.gfxSpriteShow = (data$$133 & 2) == 2;
      parentObj$$665.bgEnabled = (data$$133 & 1) == 1;
      parentObj$$665.memory[65344] = data$$133;
    }
    return;
  }
  function v873(parentObj$$664, address$$158, data$$132) {
    if ((data$$132 & 1) == 1) {
      parentObj$$664.memory[65282] = data$$132 & 127;
      parentObj$$664.serialTimer = 4096;
      parentObj$$664.serialShiftTimer = parentObj$$664.serialShiftTimerAllocated = 512;
    } else {
      parentObj$$664.memory[65282] = data$$132;
      parentObj$$664.serialShiftTimer = parentObj$$664.serialShiftTimerAllocated = parentObj$$664.serialTimer = 0;
    }
    return;
  }
  function v872(parentObj$$663, address$$157, data$$131) {
    parentObj$$663.memory[65396] = data$$131;
    return;
  }
  function v871(parentObj$$662, address$$156, data$$130) {
    var addressCheck = parentObj$$662.memory[65361] << 8 | parentObj$$662.memory[65362];
    var v8448 = !parentObj$$662.hdmaRunning;
    if (!v8448) {
      v8448 = addressCheck < 53248;
    }
    var v5587 = v8448;
    if (!v5587) {
      v5587 = addressCheck >= 57344;
    }
    if (v5587) {
      var v10607 = JAM.call(Math.max, Math, [data$$130 & 7, 1], JAM.policy.p1);
      parentObj$$662.gbcRamBank = v10607;
      parentObj$$662.gbcRamBankPosition = (parentObj$$662.gbcRamBank - 1 << 12) - 53248;
      parentObj$$662.gbcRamBankPositionECHO = parentObj$$662.gbcRamBankPosition - 8192;
    }
    parentObj$$662.memory[65392] = data$$130;
    return;
  }
  function v870(parentObj$$661, address$$155, data$$129) {
    JAM.call(parentObj$$661.updateGBCOBJPalette, parentObj$$661, [parentObj$$661.memory[65386] & 63, data$$129], JAM.policy.p1);
    if (parentObj$$661.memory[65386] > 127) {
      var next$$1 = parentObj$$661.memory[65386] + 1 & 63;
      parentObj$$661.memory[65386] = next$$1 | 128;
      parentObj$$661.memory[65387] = parentObj$$661.gbcOBJRawPalette[next$$1];
    } else {
      parentObj$$661.memory[65387] = data$$129;
    }
    return;
  }
  function v869(parentObj$$660, address$$154, data$$128) {
    parentObj$$660.memory[65387] = parentObj$$660.gbcOBJRawPalette[data$$128 & 63];
    parentObj$$660.memory[65386] = data$$128;
    return;
  }
  function v868(parentObj$$659, address$$153, data$$127) {
    JAM.call(parentObj$$659.updateGBCBGPalette, parentObj$$659, [parentObj$$659.memory[65384] & 63, data$$127], JAM.policy.p1);
    if (parentObj$$659.memory[65384] > 127) {
      var next = parentObj$$659.memory[65384] + 1 & 63;
      parentObj$$659.memory[65384] = next | 128;
      parentObj$$659.memory[65385] = parentObj$$659.gbcBGRawPalette[next];
    } else {
      parentObj$$659.memory[65385] = data$$127;
    }
    return;
  }
  function v867(parentObj$$658, address$$152, data$$126) {
    parentObj$$658.memory[65385] = parentObj$$658.gbcBGRawPalette[data$$126 & 63];
    parentObj$$658.memory[65384] = data$$126;
    return;
  }
  function v866(parentObj$$657, address$$151, data$$125) {
    if (!parentObj$$657.hdmaRunning) {
      if ((data$$125 & 128) == 0) {
        JAM.call(parentObj$$657.DMAWrite, parentObj$$657, [(data$$125 & 127) + 1]);
        parentObj$$657.memory[65365] = 255;
      } else {
        parentObj$$657.hdmaRunning = true;
        parentObj$$657.memory[65365] = data$$125 & 127;
      }
    } else {
      if ((data$$125 & 128) == 0) {
        parentObj$$657.hdmaRunning = false;
        var v991 = parentObj$$657.memory;
        v991[65365] = v991[65365] | 128;
      } else {
        parentObj$$657.memory[65365] = data$$125 & 127;
      }
    }
    return;
  }
  function v865(parentObj$$656, address$$150, data$$124) {
    if (!parentObj$$656.hdmaRunning) {
      parentObj$$656.memory[65364] = data$$124 & 240;
    }
    return;
  }
  function v864(parentObj$$655, address$$149, data$$123) {
    if (!parentObj$$655.hdmaRunning) {
      parentObj$$655.memory[65363] = data$$123 & 31;
    }
    return;
  }
  function v863(parentObj$$654, address$$148, data$$122) {
    if (!parentObj$$654.hdmaRunning) {
      parentObj$$654.memory[65362] = data$$122 & 240;
    }
    return;
  }
  function v862(parentObj$$653, address$$147, data$$121) {
    if (!parentObj$$653.hdmaRunning) {
      parentObj$$653.memory[65361] = data$$121;
    }
    return;
  }
  function v861(parentObj$$652, address$$146, data$$120) {
    parentObj$$652.currVRAMBank = data$$120 & 1;
    if (parentObj$$652.currVRAMBank > 0) {
      parentObj$$652.BGCHRCurrentBank = parentObj$$652.BGCHRBank2;
    } else {
      parentObj$$652.BGCHRCurrentBank = parentObj$$652.BGCHRBank1;
    }
    return;
  }
  function v860(parentObj$$651, address$$145, data$$119) {
    parentObj$$651.memory[65357] = data$$119 & 127 | parentObj$$651.memory[65357] & 128;
    return;
  }
  function v859(parentObj$$650, address$$144, data$$118) {
    parentObj$$650.memory[65350] = data$$118;
    if (data$$118 < 224) {
      data$$118 = data$$118 << 8;
      address$$144 = 65024;
      var stat = parentObj$$650.modeSTAT;
      parentObj$$650.modeSTAT = 0;
      var newData = 0;
      var v1011 = (address$$144 = address$$144 + 1) < 65184;
      do {
        var v1006 = parentObj$$650.memoryReader;
        var v1007 = data$$118;
        data$$118 = data$$118 + 1;
        newData = JAM.call(v1006[data$$118], v1006, [parentObj$$650, v1007], JAM.policy.p1);
        if (newData != parentObj$$650.memory[address$$144]) {
          parentObj$$650.modeSTAT = stat;
          parentObj$$650.graphicsJIT();
          parentObj$$650.modeSTAT = 0;
          var v1008 = parentObj$$650.memory;
          var v1009 = address$$144;
          address$$144 = address$$144 + 1;
          v1008[v1009] = newData;
          break;
        }
        v1011 = (address$$144 = address$$144 + 1) < 65184;
      } while (v1011);
      if (address$$144 < 65184) {
        var v1020 = address$$144 < 65184;
        do {
          var v1012 = parentObj$$650.memory;
          var v1013 = address$$144;
          address$$144 = address$$144 + 1;
          var v5615 = parentObj$$650.memoryReader;
          var v5616 = data$$118;
          data$$118 = data$$118 + 1;
          var v10608 = JAM.call(v5615[data$$118], v5615, [parentObj$$650, v5616], JAM.policy.p1);
          v1012[v1013] = v10608;
          var v1014 = parentObj$$650.memory;
          var v1015 = address$$144;
          address$$144 = address$$144 + 1;
          var v5617 = parentObj$$650.memoryReader;
          var v5618 = data$$118;
          data$$118 = data$$118 + 1;
          var v10609 = JAM.call(v5617[data$$118], v5617, [parentObj$$650, v5618], JAM.policy.p1);
          v1014[v1015] = v10609;
          var v1016 = parentObj$$650.memory;
          var v1017 = address$$144;
          address$$144 = address$$144 + 1;
          var v5619 = parentObj$$650.memoryReader;
          var v5620 = data$$118;
          data$$118 = data$$118 + 1;
          var v10610 = JAM.call(v5619[data$$118], v5619, [parentObj$$650, v5620], JAM.policy.p1);
          v1016[v1017] = v10610;
          var v1018 = parentObj$$650.memory;
          var v1019 = address$$144;
          address$$144 = address$$144 + 1;
          var v5621 = parentObj$$650.memoryReader;
          var v5622 = data$$118;
          data$$118 = data$$118 + 1;
          var v10611 = JAM.call(v5621[data$$118], v5621, [parentObj$$650, v5622], JAM.policy.p1);
          v1018[v1019] = v10611;
          v1020 = address$$144 < 65184;
        } while (v1020);
      }
      parentObj$$650.modeSTAT = stat;
    }
    return;
  }
  function v858(parentObj$$649, address$$143, data$$117) {
    parentObj$$649.LYCMatchTriggerSTAT = (data$$117 & 64) == 64;
    parentObj$$649.mode2TriggerSTAT = (data$$117 & 32) == 32;
    parentObj$$649.mode1TriggerSTAT = (data$$117 & 16) == 16;
    parentObj$$649.mode0TriggerSTAT = (data$$117 & 8) == 8;
    parentObj$$649.memory[65345] = data$$117 & 120;
    return;
  }
  function v857(parentObj$$648, address$$142, data$$116) {
    if (parentObj$$648.memory[65344] != data$$116) {
      parentObj$$648.midScanLineJIT();
      var temp_var$$21 = data$$116 > 127;
      if (temp_var$$21 != parentObj$$648.LCDisOn) {
        parentObj$$648.LCDisOn = temp_var$$21;
        var v1028 = parentObj$$648.memory;
        v1028[65345] = v1028[65345] & 120;
        parentObj$$648.midScanlineOffset = -1;
        parentObj$$648.totalLinesPassed = parentObj$$648.currentX = parentObj$$648.queuedScanLines = parentObj$$648.lastUnrenderedLine = parentObj$$648.STATTracker = parentObj$$648.LCDTicks = parentObj$$648.actualScanLine = parentObj$$648.memory[65348] = 0;
        if (parentObj$$648.LCDisOn) {
          parentObj$$648.modeSTAT = 2;
          parentObj$$648.matchLYC();
          parentObj$$648.LCDCONTROL = parentObj$$648.LINECONTROL;
        } else {
          parentObj$$648.modeSTAT = 0;
          parentObj$$648.LCDCONTROL = parentObj$$648.DISPLAYOFFCONTROL;
          parentObj$$648.DisplayShowOff();
        }
        parentObj$$648.interruptsRequested = parentObj$$648.interruptsRequested & 253;
      }
      var v1032;
      if ((data$$116 & 64) == 64) {
        v1032 = 1024;
      } else {
        v1032 = 0;
      }
      parentObj$$648.gfxWindowCHRBankPosition = v1032;
      parentObj$$648.gfxWindowDisplay = (data$$116 & 32) == 32;
      var v1034;
      if ((data$$116 & 16) == 16) {
        v1034 = 0;
      } else {
        v1034 = 128;
      }
      parentObj$$648.gfxBackgroundBankOffset = v1034;
      var v1035;
      if ((data$$116 & 8) == 8) {
        v1035 = 1024;
      } else {
        v1035 = 0;
      }
      parentObj$$648.gfxBackgroundCHRBankPosition = v1035;
      parentObj$$648.gfxSpriteNormalHeight = (data$$116 & 4) == 0;
      parentObj$$648.gfxSpriteShow = (data$$116 & 2) == 2;
      parentObj$$648.BGPriorityEnabled = (data$$116 & 1) == 1;
      parentObj$$648.priorityFlaggingPathRebuild();
      parentObj$$648.memory[65344] = data$$116;
    }
    return;
  }
  function v856(parentObj$$647, address$$141, data$$115) {
    if ((data$$115 & 1) == 1) {
      parentObj$$647.memory[65282] = data$$115 & 127;
      var v1042;
      if ((data$$115 & 2) == 0) {
        v1042 = 4096;
      } else {
        v1042 = 128;
      }
      parentObj$$647.serialTimer = v1042;
      var v1043;
      if ((data$$115 & 2) == 0) {
        v1043 = 512;
      } else {
        v1043 = 16;
      }
      parentObj$$647.serialShiftTimer = parentObj$$647.serialShiftTimerAllocated = v1043;
    } else {
      parentObj$$647.memory[65282] = data$$115;
      parentObj$$647.serialShiftTimer = parentObj$$647.serialShiftTimerAllocated = parentObj$$647.serialTimer = 0;
    }
    return;
  }
  if (this.cGBC) {
    this.memoryHighWriter[2] = this.memoryWriter[65282] = v856;
    this.memoryHighWriter[64] = this.memoryWriter[65344] = v857;
    this.memoryHighWriter[65] = this.memoryWriter[65345] = v858;
    this.memoryHighWriter[70] = this.memoryWriter[65350] = v859;
    this.memoryHighWriter[77] = this.memoryWriter[65357] = v860;
    this.memoryHighWriter[79] = this.memoryWriter[65359] = v861;
    this.memoryHighWriter[81] = this.memoryWriter[65361] = v862;
    this.memoryHighWriter[82] = this.memoryWriter[65362] = v863;
    this.memoryHighWriter[83] = this.memoryWriter[65363] = v864;
    this.memoryHighWriter[84] = this.memoryWriter[65364] = v865;
    this.memoryHighWriter[85] = this.memoryWriter[65365] = v866;
    this.memoryHighWriter[104] = this.memoryWriter[65384] = v867;
    this.memoryHighWriter[105] = this.memoryWriter[65385] = v868;
    this.memoryHighWriter[106] = this.memoryWriter[65386] = v869;
    this.memoryHighWriter[107] = this.memoryWriter[65387] = v870;
    this.memoryHighWriter[112] = this.memoryWriter[65392] = v871;
    this.memoryHighWriter[116] = this.memoryWriter[65396] = v872;
  } else {
    this.memoryHighWriter[2] = this.memoryWriter[65282] = v873;
    this.memoryHighWriter[64] = this.memoryWriter[65344] = v874;
    this.memoryHighWriter[65] = this.memoryWriter[65345] = v875;
    this.memoryHighWriter[70] = this.memoryWriter[65350] = v876;
    this.memoryHighWriter[71] = this.memoryWriter[65351] = v877;
    this.memoryHighWriter[72] = this.memoryWriter[65352] = v878;
    this.memoryHighWriter[73] = this.memoryWriter[65353] = v879;
    this.memoryHighWriter[77] = this.memoryWriter[65357] = v880;
    this.memoryHighWriter[79] = this.memoryWriter[65359] = this.cartIgnoreWrite;
    this.memoryHighWriter[85] = this.memoryWriter[65365] = this.cartIgnoreWrite;
    this.memoryHighWriter[104] = this.memoryWriter[65384] = this.cartIgnoreWrite;
    this.memoryHighWriter[105] = this.memoryWriter[65385] = this.cartIgnoreWrite;
    this.memoryHighWriter[106] = this.memoryWriter[65386] = this.cartIgnoreWrite;
    this.memoryHighWriter[107] = this.memoryWriter[65387] = this.cartIgnoreWrite;
    this.memoryHighWriter[108] = this.memoryWriter[65388] = this.cartIgnoreWrite;
    this.memoryHighWriter[112] = this.memoryWriter[65392] = this.cartIgnoreWrite;
    this.memoryHighWriter[116] = this.memoryWriter[65396] = this.cartIgnoreWrite;
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
    parentObj$$645.memory[65397] = data$$113;
    return;
  }
  function v852(parentObj$$644, address$$138, data$$112) {
    parentObj$$644.memory[65395] = data$$112;
    return;
  }
  function v851(parentObj$$643, address$$137, data$$111) {
    parentObj$$643.memory[65394] = data$$111;
    return;
  }
  function v850(parentObj$$642, address$$136, data$$110) {
    if (parentObj$$642.memory[65355] != data$$110) {
      parentObj$$642.midScanLineJIT();
      parentObj$$642.memory[65355] = data$$110;
      parentObj$$642.windowX = data$$110 - 7;
    }
    return;
  }
  function v849(parentObj$$641, address$$135, data$$109) {
    if (parentObj$$641.windowY != data$$109) {
      parentObj$$641.midScanLineJIT();
      parentObj$$641.windowY = data$$109;
    }
    return;
  }
  function v848(parentObj$$640, address$$134, data$$108) {
    if (parentObj$$640.memory[65349] != data$$108) {
      parentObj$$640.memory[65349] = data$$108;
      if (parentObj$$640.LCDisOn) {
        parentObj$$640.matchLYC();
      }
    }
    return;
  }
  function v847(parentObj$$639, address$$133, data$$107) {
    if (parentObj$$639.LCDisOn) {
      parentObj$$639.modeSTAT = 2;
      parentObj$$639.midScanlineOffset = -1;
      parentObj$$639.totalLinesPassed = parentObj$$639.currentX = parentObj$$639.queuedScanLines = parentObj$$639.lastUnrenderedLine = parentObj$$639.LCDTicks = parentObj$$639.STATTracker = parentObj$$639.actualScanLine = parentObj$$639.memory[65348] = 0;
    }
    return;
  }
  function v846(parentObj$$638, address$$132, data$$106) {
    if (parentObj$$638.backgroundX != data$$106) {
      parentObj$$638.midScanLineJIT();
      parentObj$$638.backgroundX = data$$106;
    }
    return;
  }
  function v845(parentObj$$637, address$$131, data$$105) {
    if (parentObj$$637.backgroundY != data$$105) {
      parentObj$$637.midScanLineJIT();
      parentObj$$637.backgroundY = data$$105;
    }
    return;
  }
  function v844(parentObj$$636, address$$130, data$$104) {
    JAM.call(parentObj$$636.channel3WriteRAM, parentObj$$636, [15, data$$104], JAM.policy.p1);
    return;
  }
  function v843(parentObj$$635, address$$129, data$$103) {
    JAM.call(parentObj$$635.channel3WriteRAM, parentObj$$635, [14, data$$103], JAM.policy.p1);
    return;
  }
  function v842(parentObj$$634, address$$128, data$$102) {
    JAM.call(parentObj$$634.channel3WriteRAM, parentObj$$634, [13, data$$102], JAM.policy.p1);
    return;
  }
  function v841(parentObj$$633, address$$127, data$$101) {
    JAM.call(parentObj$$633.channel3WriteRAM, parentObj$$633, [12, data$$101], JAM.policy.p1);
    return;
  }
  function v840(parentObj$$632, address$$126, data$$100) {
    JAM.call(parentObj$$632.channel3WriteRAM, parentObj$$632, [11, data$$100], JAM.policy.p1);
    return;
  }
  function v839(parentObj$$631, address$$125, data$$99) {
    JAM.call(parentObj$$631.channel3WriteRAM, parentObj$$631, [10, data$$99], JAM.policy.p1);
    return;
  }
  function v838(parentObj$$630, address$$124, data$$98) {
    JAM.call(parentObj$$630.channel3WriteRAM, parentObj$$630, [9, data$$98], JAM.policy.p1);
    return;
  }
  function v837(parentObj$$629, address$$123, data$$97) {
    JAM.call(parentObj$$629.channel3WriteRAM, parentObj$$629, [8, data$$97], JAM.policy.p1);
    return;
  }
  function v836(parentObj$$628, address$$122, data$$96) {
    JAM.call(parentObj$$628.channel3WriteRAM, parentObj$$628, [7, data$$96], JAM.policy.p1);
    return;
  }
  function v835(parentObj$$627, address$$121, data$$95) {
    JAM.call(parentObj$$627.channel3WriteRAM, parentObj$$627, [6, data$$95], JAM.policy.p1);
    return;
  }
  function v834(parentObj$$626, address$$120, data$$94) {
    JAM.call(parentObj$$626.channel3WriteRAM, parentObj$$626, [5, data$$94], JAM.policy.p1);
    return;
  }
  function v833(parentObj$$625, address$$119, data$$93) {
    JAM.call(parentObj$$625.channel3WriteRAM, parentObj$$625, [4, data$$93], JAM.policy.p1);
    return;
  }
  function v832(parentObj$$624, address$$118, data$$92) {
    JAM.call(parentObj$$624.channel3WriteRAM, parentObj$$624, [3, data$$92], JAM.policy.p1);
    return;
  }
  function v831(parentObj$$623, address$$117, data$$91) {
    JAM.call(parentObj$$623.channel3WriteRAM, parentObj$$623, [2, data$$91], JAM.policy.p1);
    return;
  }
  function v830(parentObj$$622, address$$116, data$$90) {
    JAM.call(parentObj$$622.channel3WriteRAM, parentObj$$622, [1, data$$90], JAM.policy.p1);
    return;
  }
  function v829(parentObj$$621, address$$115, data$$89) {
    JAM.call(parentObj$$621.channel3WriteRAM, parentObj$$621, [0, data$$89], JAM.policy.p1);
    return;
  }
  function v828(parentObj$$620, address$$114, data$$88) {
    parentObj$$620.audioJIT();
    var v5671 = !parentObj$$620.soundMasterEnabled;
    if (v5671) {
      v5671 = data$$88 > 127;
    }
    if (v5671) {
      parentObj$$620.memory[65318] = 128;
      parentObj$$620.soundMasterEnabled = true;
      parentObj$$620.initializeAudioStartState();
    } else {
      var v5672 = parentObj$$620.soundMasterEnabled;
      if (v5672) {
        v5672 = data$$88 < 128;
      }
      if (v5672) {
        parentObj$$620.memory[65318] = 0;
        parentObj$$620.soundMasterEnabled = false;
        var index$$64 = 65296;
        var v1097 = index$$64 < 65318;
        for (;v1097;) {
          var v1096 = parentObj$$620.memoryWriter;
          JAM.call(v1096[index$$64], v1096, [parentObj$$620, index$$64, 0], JAM.policy.p1);
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
      v5673 = parentObj$$619.memory[65317] != data$$87;
    }
    if (v5673) {
      parentObj$$619.audioJIT();
      parentObj$$619.memory[65317] = data$$87;
      parentObj$$619.rightChannel1 = (data$$87 & 1) == 1;
      parentObj$$619.rightChannel2 = (data$$87 & 2) == 2;
      parentObj$$619.rightChannel3 = (data$$87 & 4) == 4;
      parentObj$$619.rightChannel4 = (data$$87 & 8) == 8;
      parentObj$$619.leftChannel1 = (data$$87 & 16) == 16;
      parentObj$$619.leftChannel2 = (data$$87 & 32) == 32;
      parentObj$$619.leftChannel3 = (data$$87 & 64) == 64;
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
      v5674 = parentObj$$618.memory[65316] != data$$86;
    }
    if (v5674) {
      parentObj$$618.audioJIT();
      parentObj$$618.memory[65316] = data$$86;
      parentObj$$618.VinLeftChannelMasterVolume = (data$$86 >> 4 & 7) + 1;
      parentObj$$618.VinRightChannelMasterVolume = (data$$86 & 7) + 1;
      parentObj$$618.mixerOutputLevelCache();
    }
    return;
  }
  function v825(parentObj$$617, address$$111, data$$85) {
    if (parentObj$$617.soundMasterEnabled) {
      parentObj$$617.audioJIT();
      parentObj$$617.memory[65315] = data$$85;
      parentObj$$617.channel4consecutive = (data$$85 & 64) == 0;
      if (data$$85 > 127) {
        var nr42 = parentObj$$617.memory[65313];
        parentObj$$617.channel4envelopeVolume = nr42 >> 4;
        parentObj$$617.channel4currentVolume = parentObj$$617.channel4envelopeVolume << parentObj$$617.channel4VolumeShifter;
        parentObj$$617.channel4envelopeSweepsLast = (nr42 & 7) - 1;
        if (parentObj$$617.channel4totalLength == 0) {
          parentObj$$617.channel4totalLength = 64;
        }
        if ((data$$85 & 64) == 64) {
          var v1120 = parentObj$$617.memory;
          v1120[65318] = v1120[65318] | 8;
        }
      }
      parentObj$$617.channel4EnableCheck();
    }
    return;
  }
  function v824(parentObj$$616, address$$110, data$$84) {
    if (parentObj$$616.soundMasterEnabled) {
      parentObj$$616.audioJIT();
      parentObj$$616.channel4FrequencyPeriod = JAM.call(Math.max, Math, [(data$$84 & 7) << 4, 8], JAM.policy.p1) << (data$$84 >> 4);
      var bitWidth = data$$84 & 8;
      var v8474 = bitWidth == 8;
      if (v8474) {
        v8474 = parentObj$$616.channel4BitRange == 32767;
      }
      var v5679 = v8474;
      if (!v5679) {
        var v8475 = bitWidth == 0;
        if (v8475) {
          v8475 = parentObj$$616.channel4BitRange == 127;
        }
        v5679 = v8475;
      }
      if (v5679) {
        parentObj$$616.channel4lastSampleLookup = 0;
        var v1126;
        if (bitWidth == 8) {
          v1126 = 127;
        } else {
          v1126 = 32767;
        }
        parentObj$$616.channel4BitRange = v1126;
        var v1127;
        if (bitWidth == 8) {
          v1127 = 7;
        } else {
          v1127 = 15;
        }
        parentObj$$616.channel4VolumeShifter = v1127;
        parentObj$$616.channel4currentVolume = parentObj$$616.channel4envelopeVolume << parentObj$$616.channel4VolumeShifter;
        var v1130;
        if (bitWidth == 8) {
          v1130 = parentObj$$616.LSFR7Table;
        } else {
          v1130 = parentObj$$616.LSFR15Table;
        }
        parentObj$$616.noiseSampleTable = v1130;
      }
      parentObj$$616.memory[65314] = data$$84;
      parentObj$$616.channel4UpdateCache();
    }
    return;
  }
  function v823(parentObj$$615, address$$109, data$$83) {
    if (parentObj$$615.soundMasterEnabled) {
      parentObj$$615.audioJIT();
      var v5683 = parentObj$$615.channel4Enabled;
      if (v5683) {
        v5683 = parentObj$$615.channel4envelopeSweeps == 0;
      }
      if (v5683) {
        if (((parentObj$$615.memory[65313] ^ data$$83) & 8) == 8) {
          if ((parentObj$$615.memory[65313] & 8) == 0) {
            if ((parentObj$$615.memory[65313] & 7) == 7) {
              parentObj$$615.channel4envelopeVolume = parentObj$$615.channel4envelopeVolume + 2;
            } else {
              ++parentObj$$615.channel4envelopeVolume;
            }
          }
          parentObj$$615.channel4envelopeVolume = 16 - parentObj$$615.channel4envelopeVolume & 15;
        } else {
          if ((parentObj$$615.memory[65313] & 15) == 8) {
            parentObj$$615.channel4envelopeVolume = 1 + parentObj$$615.channel4envelopeVolume & 15;
          }
        }
        parentObj$$615.channel4currentVolume = parentObj$$615.channel4envelopeVolume << parentObj$$615.channel4VolumeShifter;
      }
      parentObj$$615.channel4envelopeType = (data$$83 & 8) == 8;
      parentObj$$615.memory[65313] = data$$83;
      parentObj$$615.channel4UpdateCache();
      parentObj$$615.channel4VolumeEnableCheck();
    }
    return;
  }
  function v822(parentObj$$614, address$$108, data$$82) {
    var v5691 = parentObj$$614.soundMasterEnabled;
    if (!v5691) {
      v5691 = !parentObj$$614.cGBC;
    }
    if (v5691) {
      if (parentObj$$614.soundMasterEnabled) {
        parentObj$$614.audioJIT();
      }
      parentObj$$614.channel4totalLength = 64 - (data$$82 & 63);
      parentObj$$614.memory[65312] = data$$82 | 192;
      parentObj$$614.channel4EnableCheck();
    }
    return;
  }
  function v821(parentObj$$613, address$$107, data$$81) {
    if (parentObj$$613.soundMasterEnabled) {
      parentObj$$613.audioJIT();
      if (data$$81 > 127) {
        if (parentObj$$613.channel3totalLength == 0) {
          parentObj$$613.channel3totalLength = 256;
        }
        parentObj$$613.channel3lastSampleLookup = 0;
        if ((data$$81 & 64) == 64) {
          var v1151 = parentObj$$613.memory;
          v1151[65318] = v1151[65318] | 4;
        }
      }
      parentObj$$613.channel3consecutive = (data$$81 & 64) == 0;
      parentObj$$613.channel3frequency = (data$$81 & 7) << 8 | parentObj$$613.channel3frequency & 255;
      parentObj$$613.channel3FrequencyPeriod = 2048 - parentObj$$613.channel3frequency << 1;
      parentObj$$613.memory[65310] = data$$81 & 64;
      parentObj$$613.channel3EnableCheck();
    }
    return;
  }
  function v820(parentObj$$612, address$$106, data$$80) {
    if (parentObj$$612.soundMasterEnabled) {
      parentObj$$612.audioJIT();
      parentObj$$612.channel3frequency = parentObj$$612.channel3frequency & 1792 | data$$80;
      parentObj$$612.channel3FrequencyPeriod = 2048 - parentObj$$612.channel3frequency << 1;
      parentObj$$612.memory[65309] = data$$80;
    }
    return;
  }
  function v819(parentObj$$611, address$$105, data$$79) {
    if (parentObj$$611.soundMasterEnabled) {
      parentObj$$611.audioJIT();
      data$$79 = data$$79 & 96;
      parentObj$$611.memory[65308] = data$$79;
      var v1165;
      if (data$$79 == 0) {
        v1165 = 4;
      } else {
        v1165 = (data$$79 >> 5) - 1;
      }
      parentObj$$611.channel3patternType = v1165;
    }
    return;
  }
  function v818(parentObj$$610, address$$104, data$$78) {
    var v5701 = parentObj$$610.soundMasterEnabled;
    if (!v5701) {
      v5701 = !parentObj$$610.cGBC;
    }
    if (v5701) {
      if (parentObj$$610.soundMasterEnabled) {
        parentObj$$610.audioJIT();
      }
      parentObj$$610.channel3totalLength = 256 - data$$78;
      parentObj$$610.memory[65307] = data$$78;
      parentObj$$610.channel3EnableCheck();
    }
    return;
  }
  function v817(parentObj$$609, address$$103, data$$77) {
    if (parentObj$$609.soundMasterEnabled) {
      parentObj$$609.audioJIT();
      var v5702 = !parentObj$$609.channel3canPlay;
      if (v5702) {
        v5702 = data$$77 >= 128;
      }
      if (v5702) {
        parentObj$$609.channel3lastSampleLookup = 0;
        parentObj$$609.channel3UpdateCache();
      }
      parentObj$$609.channel3canPlay = data$$77 > 127;
      var v8488 = parentObj$$609.channel3canPlay;
      if (v8488) {
        v8488 = parentObj$$609.memory[65306] > 127;
      }
      var v5703 = v8488;
      if (v5703) {
        v5703 = !parentObj$$609.channel3consecutive;
      }
      if (v5703) {
        var v1171 = parentObj$$609.memory;
        v1171[65318] = v1171[65318] | 4;
      }
      parentObj$$609.memory[65306] = data$$77 & 128;
    }
    return;
  }
  function v816(parentObj$$608, address$$102, data$$76) {
    if (parentObj$$608.soundMasterEnabled) {
      parentObj$$608.audioJIT();
      if (data$$76 > 127) {
        var nr22 = parentObj$$608.memory[65303];
        parentObj$$608.channel2envelopeVolume = nr22 >> 4;
        parentObj$$608.channel2OutputLevelCache();
        parentObj$$608.channel2envelopeSweepsLast = (nr22 & 7) - 1;
        if (parentObj$$608.channel2totalLength == 0) {
          parentObj$$608.channel2totalLength = 64;
        }
        if ((data$$76 & 64) == 64) {
          var v1178 = parentObj$$608.memory;
          v1178[65318] = v1178[65318] | 2;
        }
      }
      parentObj$$608.channel2consecutive = (data$$76 & 64) == 0;
      parentObj$$608.channel2frequency = (data$$76 & 7) << 8 | parentObj$$608.channel2frequency & 255;
      parentObj$$608.channel2FrequencyTracker = 2048 - parentObj$$608.channel2frequency << 2;
      parentObj$$608.memory[65305] = data$$76 & 64;
      parentObj$$608.channel2EnableCheck();
    }
    return;
  }
  function v815(parentObj$$607, address$$101, data$$75) {
    if (parentObj$$607.soundMasterEnabled) {
      parentObj$$607.audioJIT();
      parentObj$$607.channel2frequency = parentObj$$607.channel2frequency & 1792 | data$$75;
      parentObj$$607.channel2FrequencyTracker = 2048 - parentObj$$607.channel2frequency << 2;
      parentObj$$607.memory[65304] = data$$75;
    }
    return;
  }
  function v814(parentObj$$606, address$$100, data$$74) {
    if (parentObj$$606.soundMasterEnabled) {
      parentObj$$606.audioJIT();
      var v5711 = parentObj$$606.channel2Enabled;
      if (v5711) {
        v5711 = parentObj$$606.channel2envelopeSweeps == 0;
      }
      if (v5711) {
        if (((parentObj$$606.memory[65303] ^ data$$74) & 8) == 8) {
          if ((parentObj$$606.memory[65303] & 8) == 0) {
            if ((parentObj$$606.memory[65303] & 7) == 7) {
              parentObj$$606.channel2envelopeVolume = parentObj$$606.channel2envelopeVolume + 2;
            } else {
              ++parentObj$$606.channel2envelopeVolume;
            }
          }
          parentObj$$606.channel2envelopeVolume = 16 - parentObj$$606.channel2envelopeVolume & 15;
        } else {
          if ((parentObj$$606.memory[65303] & 15) == 8) {
            parentObj$$606.channel2envelopeVolume = 1 + parentObj$$606.channel2envelopeVolume & 15;
          }
        }
        parentObj$$606.channel2OutputLevelCache();
      }
      parentObj$$606.channel2envelopeType = (data$$74 & 8) == 8;
      parentObj$$606.memory[65303] = data$$74;
      parentObj$$606.channel2VolumeEnableCheck();
    }
    return;
  }
  function v813(parentObj$$605, address$$99, data$$73) {
    var v5719 = parentObj$$605.soundMasterEnabled;
    if (!v5719) {
      v5719 = !parentObj$$605.cGBC;
    }
    if (v5719) {
      if (parentObj$$605.soundMasterEnabled) {
        parentObj$$605.audioJIT();
      } else {
        data$$73 = data$$73 & 63;
      }
      parentObj$$605.channel2CachedDuty = parentObj$$605.dutyLookup[data$$73 >> 6];
      parentObj$$605.channel2totalLength = 64 - (data$$73 & 63);
      parentObj$$605.memory[65302] = data$$73 & 192;
      parentObj$$605.channel2EnableCheck();
    }
    return;
  }
  function v812(parentObj$$604, address$$98, data$$72) {
    if (parentObj$$604.soundMasterEnabled) {
      parentObj$$604.audioJIT();
      parentObj$$604.channel1consecutive = (data$$72 & 64) == 0;
      parentObj$$604.channel1frequency = (data$$72 & 7) << 8 | parentObj$$604.channel1frequency & 255;
      parentObj$$604.channel1FrequencyTracker = 2048 - parentObj$$604.channel1frequency << 2;
      if (data$$72 > 127) {
        parentObj$$604.channel1timeSweep = parentObj$$604.channel1lastTimeSweep;
        parentObj$$604.channel1numSweep = parentObj$$604.channel1frequencySweepDivider;
        var nr12 = parentObj$$604.memory[65298];
        parentObj$$604.channel1envelopeVolume = nr12 >> 4;
        parentObj$$604.channel1OutputLevelCache();
        parentObj$$604.channel1envelopeSweepsLast = (nr12 & 7) - 1;
        if (parentObj$$604.channel1totalLength == 0) {
          parentObj$$604.channel1totalLength = 64;
        }
        var v5724 = parentObj$$604.channel1lastTimeSweep > 0;
        if (!v5724) {
          v5724 = parentObj$$604.channel1frequencySweepDivider > 0;
        }
        if (v5724) {
          var v1214 = parentObj$$604.memory;
          v1214[65318] = v1214[65318] | 1;
        } else {
          var v1215 = parentObj$$604.memory;
          v1215[65318] = v1215[65318] & 254;
        }
        if ((data$$72 & 64) == 64) {
          var v1217 = parentObj$$604.memory;
          v1217[65318] = v1217[65318] | 1;
        }
        parentObj$$604.channel1ShadowFrequency = parentObj$$604.channel1frequency;
        parentObj$$604.channel1SweepFault = false;
        parentObj$$604.runAudioSweep();
      }
      parentObj$$604.channel1EnableCheck();
      parentObj$$604.memory[65300] = data$$72 & 64;
    }
    return;
  }
  function v811(parentObj$$603, address$$97, data$$71) {
    if (parentObj$$603.soundMasterEnabled) {
      parentObj$$603.audioJIT();
      parentObj$$603.channel1frequency = parentObj$$603.channel1frequency & 1792 | data$$71;
      parentObj$$603.channel1FrequencyTracker = 2048 - parentObj$$603.channel1frequency << 2;
      parentObj$$603.memory[65299] = data$$71;
    }
    return;
  }
  function v810(parentObj$$602, address$$96, data$$70) {
    if (parentObj$$602.soundMasterEnabled) {
      parentObj$$602.audioJIT();
      var v5728 = parentObj$$602.channel1Enabled;
      if (v5728) {
        v5728 = parentObj$$602.channel1envelopeSweeps == 0;
      }
      if (v5728) {
        if (((parentObj$$602.memory[65298] ^ data$$70) & 8) == 8) {
          if ((parentObj$$602.memory[65298] & 8) == 0) {
            if ((parentObj$$602.memory[65298] & 7) == 7) {
              parentObj$$602.channel1envelopeVolume = parentObj$$602.channel1envelopeVolume + 2;
            } else {
              ++parentObj$$602.channel1envelopeVolume;
            }
          }
          parentObj$$602.channel1envelopeVolume = 16 - parentObj$$602.channel1envelopeVolume & 15;
        } else {
          if ((parentObj$$602.memory[65298] & 15) == 8) {
            parentObj$$602.channel1envelopeVolume = 1 + parentObj$$602.channel1envelopeVolume & 15;
          }
        }
        parentObj$$602.channel1OutputLevelCache();
      }
      parentObj$$602.channel1envelopeType = (data$$70 & 8) == 8;
      parentObj$$602.memory[65298] = data$$70;
      parentObj$$602.channel1VolumeEnableCheck();
    }
    return;
  }
  function v809(parentObj$$601, address$$95, data$$69) {
    var v5736 = parentObj$$601.soundMasterEnabled;
    if (!v5736) {
      v5736 = !parentObj$$601.cGBC;
    }
    if (v5736) {
      if (parentObj$$601.soundMasterEnabled) {
        parentObj$$601.audioJIT();
      } else {
        data$$69 = data$$69 & 63;
      }
      parentObj$$601.channel1CachedDuty = parentObj$$601.dutyLookup[data$$69 >> 6];
      parentObj$$601.channel1totalLength = 64 - (data$$69 & 63);
      parentObj$$601.memory[65297] = data$$69 & 192;
      parentObj$$601.channel1EnableCheck();
    }
    return;
  }
  function v808(parentObj$$600, address$$94, data$$68) {
    if (parentObj$$600.soundMasterEnabled) {
      parentObj$$600.audioJIT();
      var v5737 = parentObj$$600.channel1decreaseSweep;
      if (v5737) {
        v5737 = (data$$68 & 8) == 0;
      }
      if (v5737) {
        if (parentObj$$600.channel1numSweep != parentObj$$600.channel1frequencySweepDivider) {
          parentObj$$600.channel1SweepFault = true;
        }
      }
      parentObj$$600.channel1lastTimeSweep = (data$$68 & 112) >> 4;
      parentObj$$600.channel1frequencySweepDivider = data$$68 & 7;
      parentObj$$600.channel1decreaseSweep = (data$$68 & 8) == 8;
      parentObj$$600.memory[65296] = data$$68;
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
    parentObj$$598.memory[65287] = data$$66 & 7;
    parentObj$$598.TIMAEnabled = (data$$66 & 4) == 4;
    var v8513;
    if ((data$$66 & 3) != 0) {
      v8513 = data$$66 & 3;
    } else {
      v8513 = 4;
    }
    parentObj$$598.TACClocker = JAM.call(Math.pow, Math, [4, v8513], JAM.policy.p1) << 2;
    return;
  }
  function v805(parentObj$$597, address$$91, data$$65) {
    parentObj$$597.memory[65286] = data$$65;
    return;
  }
  function v804(parentObj$$596, address$$90, data$$64) {
    parentObj$$596.memory[65285] = data$$64;
    return;
  }
  function v803(parentObj$$595, address$$89, data$$63) {
    parentObj$$595.DIVTicks = parentObj$$595.DIVTicks & 255;
    parentObj$$595.memory[65284] = 0;
    return;
  }
  function v802(parentObj$$594, address$$88, data$$62) {
    if (parentObj$$594.memory[65282] < 128) {
      parentObj$$594.memory[65281] = data$$62;
    }
    return;
  }
  function v801(parentObj$$593, address$$87, data$$61) {
    var v1256 = parentObj$$593.memory;
    var v5743 = data$$61 & 48;
    var v9700;
    if ((data$$61 & 32) == 0) {
      v9700 = parentObj$$593.JoyPad >> 4;
    } else {
      v9700 = 15;
    }
    var v8515 = v9700;
    var v9701;
    if ((data$$61 & 16) == 0) {
      v9701 = parentObj$$593.JoyPad & 15;
    } else {
      v9701 = 15;
    }
    v1256[65280] = v5743 | v8515 & v9701;
    return;
  }
  this.memoryHighWriter[0] = this.memoryWriter[65280] = v801;
  this.memoryHighWriter[1] = this.memoryWriter[65281] = v802;
  this.memoryHighWriter[4] = this.memoryWriter[65284] = v803;
  this.memoryHighWriter[5] = this.memoryWriter[65285] = v804;
  this.memoryHighWriter[6] = this.memoryWriter[65286] = v805;
  this.memoryHighWriter[7] = this.memoryWriter[65287] = v806;
  this.memoryHighWriter[15] = this.memoryWriter[65295] = v807;
  this.memoryHighWriter[16] = this.memoryWriter[65296] = v808;
  this.memoryHighWriter[17] = this.memoryWriter[65297] = v809;
  this.memoryHighWriter[18] = this.memoryWriter[65298] = v810;
  this.memoryHighWriter[19] = this.memoryWriter[65299] = v811;
  this.memoryHighWriter[20] = this.memoryWriter[65300] = v812;
  this.memoryHighWriter[22] = this.memoryWriter[65302] = v813;
  this.memoryHighWriter[23] = this.memoryWriter[65303] = v814;
  this.memoryHighWriter[24] = this.memoryWriter[65304] = v815;
  this.memoryHighWriter[25] = this.memoryWriter[65305] = v816;
  this.memoryHighWriter[26] = this.memoryWriter[65306] = v817;
  this.memoryHighWriter[27] = this.memoryWriter[65307] = v818;
  this.memoryHighWriter[28] = this.memoryWriter[65308] = v819;
  this.memoryHighWriter[29] = this.memoryWriter[65309] = v820;
  this.memoryHighWriter[30] = this.memoryWriter[65310] = v821;
  this.memoryHighWriter[32] = this.memoryWriter[65312] = v822;
  this.memoryHighWriter[33] = this.memoryWriter[65313] = v823;
  this.memoryHighWriter[34] = this.memoryWriter[65314] = v824;
  this.memoryHighWriter[35] = this.memoryWriter[65315] = v825;
  this.memoryHighWriter[36] = this.memoryWriter[65316] = v826;
  this.memoryHighWriter[37] = this.memoryWriter[65317] = v827;
  this.memoryHighWriter[38] = this.memoryWriter[65318] = v828;
  this.memoryHighWriter[39] = this.memoryWriter[65319] = this.cartIgnoreWrite;
  this.memoryHighWriter[40] = this.memoryWriter[65320] = this.cartIgnoreWrite;
  this.memoryHighWriter[41] = this.memoryWriter[65321] = this.cartIgnoreWrite;
  this.memoryHighWriter[42] = this.memoryWriter[65322] = this.cartIgnoreWrite;
  this.memoryHighWriter[43] = this.memoryWriter[65323] = this.cartIgnoreWrite;
  this.memoryHighWriter[44] = this.memoryWriter[65324] = this.cartIgnoreWrite;
  this.memoryHighWriter[45] = this.memoryWriter[65325] = this.cartIgnoreWrite;
  this.memoryHighWriter[46] = this.memoryWriter[65326] = this.cartIgnoreWrite;
  this.memoryHighWriter[47] = this.memoryWriter[65327] = this.cartIgnoreWrite;
  this.memoryHighWriter[48] = this.memoryWriter[65328] = v829;
  this.memoryHighWriter[49] = this.memoryWriter[65329] = v830;
  this.memoryHighWriter[50] = this.memoryWriter[65330] = v831;
  this.memoryHighWriter[51] = this.memoryWriter[65331] = v832;
  this.memoryHighWriter[52] = this.memoryWriter[65332] = v833;
  this.memoryHighWriter[53] = this.memoryWriter[65333] = v834;
  this.memoryHighWriter[54] = this.memoryWriter[65334] = v835;
  this.memoryHighWriter[55] = this.memoryWriter[65335] = v836;
  this.memoryHighWriter[56] = this.memoryWriter[65336] = v837;
  this.memoryHighWriter[57] = this.memoryWriter[65337] = v838;
  this.memoryHighWriter[58] = this.memoryWriter[65338] = v839;
  this.memoryHighWriter[59] = this.memoryWriter[65339] = v840;
  this.memoryHighWriter[60] = this.memoryWriter[65340] = v841;
  this.memoryHighWriter[61] = this.memoryWriter[65341] = v842;
  this.memoryHighWriter[62] = this.memoryWriter[65342] = v843;
  this.memoryHighWriter[63] = this.memoryWriter[65343] = v844;
  this.memoryHighWriter[66] = this.memoryWriter[65346] = v845;
  this.memoryHighWriter[67] = this.memoryWriter[65347] = v846;
  this.memoryHighWriter[68] = this.memoryWriter[65348] = v847;
  this.memoryHighWriter[69] = this.memoryWriter[65349] = v848;
  this.memoryHighWriter[74] = this.memoryWriter[65354] = v849;
  this.memoryHighWriter[75] = this.memoryWriter[65355] = v850;
  this.memoryHighWriter[114] = this.memoryWriter[65394] = v851;
  this.memoryHighWriter[115] = this.memoryWriter[65395] = v852;
  this.memoryHighWriter[117] = this.memoryWriter[65397] = v853;
  this.memoryHighWriter[118] = this.memoryWriter[65398] = this.cartIgnoreWrite;
  this.memoryHighWriter[119] = this.memoryWriter[65399] = this.cartIgnoreWrite;
  this.memoryHighWriter[255] = this.memoryWriter[65535] = v854;
  this.recompileModelSpecificIOWriteHandling();
  this.recompileBootIOWriteHandling();
  return;
}
function v800(tilesToTransfer) {
  if (!this.halt) {
    this.CPUTicks = this.CPUTicks + (4 | tilesToTransfer << 5 << this.doubleSpeedShifter);
  }
  var source$$1 = this.memory[65361] << 8 | this.memory[65362];
  var destination = this.memory[65363] << 8 | this.memory[65364];
  var memoryReader = this.memoryReader;
  this.graphicsJIT();
  var memory = this.memory;
  if (this.currVRAMBank == 0) {
    var v1377 = tilesToTransfer > 0;
    do {
      if (destination < 6144) {
        var v1327 = 32768 | destination;
        var v5818 = source$$1;
        source$$1 = source$$1 + 1;
        var v10612 = JAM.call(memoryReader[source$$1], memoryReader, [this, v5818], JAM.policy.p1);
        memory[v1327] = v10612;
        var v1328 = 32769 | destination;
        var v5819 = source$$1;
        source$$1 = source$$1 + 1;
        var v10613 = JAM.call(memoryReader[source$$1], memoryReader, [this, v5819], JAM.policy.p1);
        memory[v1328] = v10613;
        var v1329 = 32770 | destination;
        var v5820 = source$$1;
        source$$1 = source$$1 + 1;
        var v10614 = JAM.call(memoryReader[source$$1], memoryReader, [this, v5820], JAM.policy.p1);
        memory[v1329] = v10614;
        var v1330 = 32771 | destination;
        var v5821 = source$$1;
        source$$1 = source$$1 + 1;
        var v10615 = JAM.call(memoryReader[source$$1], memoryReader, [this, v5821], JAM.policy.p1);
        memory[v1330] = v10615;
        var v1331 = 32772 | destination;
        var v5822 = source$$1;
        source$$1 = source$$1 + 1;
        var v10616 = JAM.call(memoryReader[source$$1], memoryReader, [this, v5822], JAM.policy.p1);
        memory[v1331] = v10616;
        var v1332 = 32773 | destination;
        var v5823 = source$$1;
        source$$1 = source$$1 + 1;
        var v10617 = JAM.call(memoryReader[source$$1], memoryReader, [this, v5823], JAM.policy.p1);
        memory[v1332] = v10617;
        var v1333 = 32774 | destination;
        var v5824 = source$$1;
        source$$1 = source$$1 + 1;
        var v10618 = JAM.call(memoryReader[source$$1], memoryReader, [this, v5824], JAM.policy.p1);
        memory[v1333] = v10618;
        var v1334 = 32775 | destination;
        var v5825 = source$$1;
        source$$1 = source$$1 + 1;
        var v10619 = JAM.call(memoryReader[source$$1], memoryReader, [this, v5825], JAM.policy.p1);
        memory[v1334] = v10619;
        var v1335 = 32776 | destination;
        var v5826 = source$$1;
        source$$1 = source$$1 + 1;
        var v10620 = JAM.call(memoryReader[source$$1], memoryReader, [this, v5826], JAM.policy.p1);
        memory[v1335] = v10620;
        var v1336 = 32777 | destination;
        var v5827 = source$$1;
        source$$1 = source$$1 + 1;
        var v10621 = JAM.call(memoryReader[source$$1], memoryReader, [this, v5827], JAM.policy.p1);
        memory[v1336] = v10621;
        var v1337 = 32778 | destination;
        var v5828 = source$$1;
        source$$1 = source$$1 + 1;
        var v10622 = JAM.call(memoryReader[source$$1], memoryReader, [this, v5828], JAM.policy.p1);
        memory[v1337] = v10622;
        var v1338 = 32779 | destination;
        var v5829 = source$$1;
        source$$1 = source$$1 + 1;
        var v10623 = JAM.call(memoryReader[source$$1], memoryReader, [this, v5829], JAM.policy.p1);
        memory[v1338] = v10623;
        var v1339 = 32780 | destination;
        var v5830 = source$$1;
        source$$1 = source$$1 + 1;
        var v10624 = JAM.call(memoryReader[source$$1], memoryReader, [this, v5830], JAM.policy.p1);
        memory[v1339] = v10624;
        var v1340 = 32781 | destination;
        var v5831 = source$$1;
        source$$1 = source$$1 + 1;
        var v10625 = JAM.call(memoryReader[source$$1], memoryReader, [this, v5831], JAM.policy.p1);
        memory[v1340] = v10625;
        var v1341 = 32782 | destination;
        var v5832 = source$$1;
        source$$1 = source$$1 + 1;
        var v10626 = JAM.call(memoryReader[source$$1], memoryReader, [this, v5832], JAM.policy.p1);
        memory[v1341] = v10626;
        var v1342 = 32783 | destination;
        var v5833 = source$$1;
        source$$1 = source$$1 + 1;
        var v10627 = JAM.call(memoryReader[source$$1], memoryReader, [this, v5833], JAM.policy.p1);
        memory[v1342] = v10627;
        JAM.call(this.generateGBCTileBank1, this, [destination]);
        destination = destination + 16;
      } else {
        destination = destination & 2032;
        var v1343 = this.BGCHRBank1;
        var v1344 = destination;
        destination = destination + 1;
        var v5834 = source$$1;
        source$$1 = source$$1 + 1;
        var v10628 = JAM.call(memoryReader[source$$1], memoryReader, [this, v5834], JAM.policy.p1);
        v1343[v1344] = v10628;
        var v1345 = this.BGCHRBank1;
        var v1346 = destination;
        destination = destination + 1;
        var v5835 = source$$1;
        source$$1 = source$$1 + 1;
        var v10629 = JAM.call(memoryReader[source$$1], memoryReader, [this, v5835], JAM.policy.p1);
        v1345[v1346] = v10629;
        var v1347 = this.BGCHRBank1;
        var v1348 = destination;
        destination = destination + 1;
        var v5836 = source$$1;
        source$$1 = source$$1 + 1;
        var v10630 = JAM.call(memoryReader[source$$1], memoryReader, [this, v5836], JAM.policy.p1);
        v1347[v1348] = v10630;
        var v1349 = this.BGCHRBank1;
        var v1350 = destination;
        destination = destination + 1;
        var v5837 = source$$1;
        source$$1 = source$$1 + 1;
        var v10631 = JAM.call(memoryReader[source$$1], memoryReader, [this, v5837], JAM.policy.p1);
        v1349[v1350] = v10631;
        var v1351 = this.BGCHRBank1;
        var v1352 = destination;
        destination = destination + 1;
        var v5838 = source$$1;
        source$$1 = source$$1 + 1;
        var v10632 = JAM.call(memoryReader[source$$1], memoryReader, [this, v5838], JAM.policy.p1);
        v1351[v1352] = v10632;
        var v1353 = this.BGCHRBank1;
        var v1354 = destination;
        destination = destination + 1;
        var v5839 = source$$1;
        source$$1 = source$$1 + 1;
        var v10633 = JAM.call(memoryReader[source$$1], memoryReader, [this, v5839], JAM.policy.p1);
        v1353[v1354] = v10633;
        var v1355 = this.BGCHRBank1;
        var v1356 = destination;
        destination = destination + 1;
        var v5840 = source$$1;
        source$$1 = source$$1 + 1;
        var v10634 = JAM.call(memoryReader[source$$1], memoryReader, [this, v5840], JAM.policy.p1);
        v1355[v1356] = v10634;
        var v1357 = this.BGCHRBank1;
        var v1358 = destination;
        destination = destination + 1;
        var v5841 = source$$1;
        source$$1 = source$$1 + 1;
        var v10635 = JAM.call(memoryReader[source$$1], memoryReader, [this, v5841], JAM.policy.p1);
        v1357[v1358] = v10635;
        var v1359 = this.BGCHRBank1;
        var v1360 = destination;
        destination = destination + 1;
        var v5842 = source$$1;
        source$$1 = source$$1 + 1;
        var v10636 = JAM.call(memoryReader[source$$1], memoryReader, [this, v5842], JAM.policy.p1);
        v1359[v1360] = v10636;
        var v1361 = this.BGCHRBank1;
        var v1362 = destination;
        destination = destination + 1;
        var v5843 = source$$1;
        source$$1 = source$$1 + 1;
        var v10637 = JAM.call(memoryReader[source$$1], memoryReader, [this, v5843], JAM.policy.p1);
        v1361[v1362] = v10637;
        var v1363 = this.BGCHRBank1;
        var v1364 = destination;
        destination = destination + 1;
        var v5844 = source$$1;
        source$$1 = source$$1 + 1;
        var v10638 = JAM.call(memoryReader[source$$1], memoryReader, [this, v5844], JAM.policy.p1);
        v1363[v1364] = v10638;
        var v1365 = this.BGCHRBank1;
        var v1366 = destination;
        destination = destination + 1;
        var v5845 = source$$1;
        source$$1 = source$$1 + 1;
        var v10639 = JAM.call(memoryReader[source$$1], memoryReader, [this, v5845], JAM.policy.p1);
        v1365[v1366] = v10639;
        var v1367 = this.BGCHRBank1;
        var v1368 = destination;
        destination = destination + 1;
        var v5846 = source$$1;
        source$$1 = source$$1 + 1;
        var v10640 = JAM.call(memoryReader[source$$1], memoryReader, [this, v5846], JAM.policy.p1);
        v1367[v1368] = v10640;
        var v1369 = this.BGCHRBank1;
        var v1370 = destination;
        destination = destination + 1;
        var v5847 = source$$1;
        source$$1 = source$$1 + 1;
        var v10641 = JAM.call(memoryReader[source$$1], memoryReader, [this, v5847], JAM.policy.p1);
        v1369[v1370] = v10641;
        var v1371 = this.BGCHRBank1;
        var v1372 = destination;
        destination = destination + 1;
        var v5848 = source$$1;
        source$$1 = source$$1 + 1;
        var v10642 = JAM.call(memoryReader[source$$1], memoryReader, [this, v5848], JAM.policy.p1);
        v1371[v1372] = v10642;
        var v1373 = this.BGCHRBank1;
        var v1374 = destination;
        destination = destination + 1;
        var v5849 = source$$1;
        source$$1 = source$$1 + 1;
        var v10643 = JAM.call(memoryReader[source$$1], memoryReader, [this, v5849], JAM.policy.p1);
        v1373[v1374] = v10643;
        destination = destination + 6144 & 8176;
      }
      source$$1 = source$$1 & 65520;
      --tilesToTransfer;
      v1377 = tilesToTransfer > 0;
    } while (v1377);
  } else {
    var VRAM = this.VRAM;
    var v1428 = tilesToTransfer > 0;
    do {
      if (destination < 6144) {
        var v1378 = source$$1;
        source$$1 = source$$1 + 1;
        var v10644 = JAM.call(memoryReader[source$$1], memoryReader, [this, v1378], JAM.policy.p1);
        VRAM[destination] = v10644;
        var v1379 = destination | 1;
        var v5850 = source$$1;
        source$$1 = source$$1 + 1;
        var v10645 = JAM.call(memoryReader[source$$1], memoryReader, [this, v5850], JAM.policy.p1);
        VRAM[v1379] = v10645;
        var v1380 = destination | 2;
        var v5851 = source$$1;
        source$$1 = source$$1 + 1;
        var v10646 = JAM.call(memoryReader[source$$1], memoryReader, [this, v5851], JAM.policy.p1);
        VRAM[v1380] = v10646;
        var v1381 = destination | 3;
        var v5852 = source$$1;
        source$$1 = source$$1 + 1;
        var v10647 = JAM.call(memoryReader[source$$1], memoryReader, [this, v5852], JAM.policy.p1);
        VRAM[v1381] = v10647;
        var v1382 = destination | 4;
        var v5853 = source$$1;
        source$$1 = source$$1 + 1;
        var v10648 = JAM.call(memoryReader[source$$1], memoryReader, [this, v5853], JAM.policy.p1);
        VRAM[v1382] = v10648;
        var v1383 = destination | 5;
        var v5854 = source$$1;
        source$$1 = source$$1 + 1;
        var v10649 = JAM.call(memoryReader[source$$1], memoryReader, [this, v5854], JAM.policy.p1);
        VRAM[v1383] = v10649;
        var v1384 = destination | 6;
        var v5855 = source$$1;
        source$$1 = source$$1 + 1;
        var v10650 = JAM.call(memoryReader[source$$1], memoryReader, [this, v5855], JAM.policy.p1);
        VRAM[v1384] = v10650;
        var v1385 = destination | 7;
        var v5856 = source$$1;
        source$$1 = source$$1 + 1;
        var v10651 = JAM.call(memoryReader[source$$1], memoryReader, [this, v5856], JAM.policy.p1);
        VRAM[v1385] = v10651;
        var v1386 = destination | 8;
        var v5857 = source$$1;
        source$$1 = source$$1 + 1;
        var v10652 = JAM.call(memoryReader[source$$1], memoryReader, [this, v5857], JAM.policy.p1);
        VRAM[v1386] = v10652;
        var v1387 = destination | 9;
        var v5858 = source$$1;
        source$$1 = source$$1 + 1;
        var v10653 = JAM.call(memoryReader[source$$1], memoryReader, [this, v5858], JAM.policy.p1);
        VRAM[v1387] = v10653;
        var v1388 = destination | 10;
        var v5859 = source$$1;
        source$$1 = source$$1 + 1;
        var v10654 = JAM.call(memoryReader[source$$1], memoryReader, [this, v5859], JAM.policy.p1);
        VRAM[v1388] = v10654;
        var v1389 = destination | 11;
        var v5860 = source$$1;
        source$$1 = source$$1 + 1;
        var v10655 = JAM.call(memoryReader[source$$1], memoryReader, [this, v5860], JAM.policy.p1);
        VRAM[v1389] = v10655;
        var v1390 = destination | 12;
        var v5861 = source$$1;
        source$$1 = source$$1 + 1;
        var v10656 = JAM.call(memoryReader[source$$1], memoryReader, [this, v5861], JAM.policy.p1);
        VRAM[v1390] = v10656;
        var v1391 = destination | 13;
        var v5862 = source$$1;
        source$$1 = source$$1 + 1;
        var v10657 = JAM.call(memoryReader[source$$1], memoryReader, [this, v5862], JAM.policy.p1);
        VRAM[v1391] = v10657;
        var v1392 = destination | 14;
        var v5863 = source$$1;
        source$$1 = source$$1 + 1;
        var v10658 = JAM.call(memoryReader[source$$1], memoryReader, [this, v5863], JAM.policy.p1);
        VRAM[v1392] = v10658;
        var v1393 = destination | 15;
        var v5864 = source$$1;
        source$$1 = source$$1 + 1;
        var v10659 = JAM.call(memoryReader[source$$1], memoryReader, [this, v5864], JAM.policy.p1);
        VRAM[v1393] = v10659;
        JAM.call(this.generateGBCTileBank2, this, [destination]);
        destination = destination + 16;
      } else {
        destination = destination & 2032;
        var v1394 = this.BGCHRBank2;
        var v1395 = destination;
        destination = destination + 1;
        var v5865 = source$$1;
        source$$1 = source$$1 + 1;
        var v10660 = JAM.call(memoryReader[source$$1], memoryReader, [this, v5865], JAM.policy.p1);
        v1394[v1395] = v10660;
        var v1396 = this.BGCHRBank2;
        var v1397 = destination;
        destination = destination + 1;
        var v5866 = source$$1;
        source$$1 = source$$1 + 1;
        var v10661 = JAM.call(memoryReader[source$$1], memoryReader, [this, v5866], JAM.policy.p1);
        v1396[v1397] = v10661;
        var v1398 = this.BGCHRBank2;
        var v1399 = destination;
        destination = destination + 1;
        var v5867 = source$$1;
        source$$1 = source$$1 + 1;
        var v10662 = JAM.call(memoryReader[source$$1], memoryReader, [this, v5867], JAM.policy.p1);
        v1398[v1399] = v10662;
        var v1400 = this.BGCHRBank2;
        var v1401 = destination;
        destination = destination + 1;
        var v5868 = source$$1;
        source$$1 = source$$1 + 1;
        var v10663 = JAM.call(memoryReader[source$$1], memoryReader, [this, v5868], JAM.policy.p1);
        v1400[v1401] = v10663;
        var v1402 = this.BGCHRBank2;
        var v1403 = destination;
        destination = destination + 1;
        var v5869 = source$$1;
        source$$1 = source$$1 + 1;
        var v10664 = JAM.call(memoryReader[source$$1], memoryReader, [this, v5869], JAM.policy.p1);
        v1402[v1403] = v10664;
        var v1404 = this.BGCHRBank2;
        var v1405 = destination;
        destination = destination + 1;
        var v5870 = source$$1;
        source$$1 = source$$1 + 1;
        var v10665 = JAM.call(memoryReader[source$$1], memoryReader, [this, v5870], JAM.policy.p1);
        v1404[v1405] = v10665;
        var v1406 = this.BGCHRBank2;
        var v1407 = destination;
        destination = destination + 1;
        var v5871 = source$$1;
        source$$1 = source$$1 + 1;
        var v10666 = JAM.call(memoryReader[source$$1], memoryReader, [this, v5871], JAM.policy.p1);
        v1406[v1407] = v10666;
        var v1408 = this.BGCHRBank2;
        var v1409 = destination;
        destination = destination + 1;
        var v5872 = source$$1;
        source$$1 = source$$1 + 1;
        var v10667 = JAM.call(memoryReader[source$$1], memoryReader, [this, v5872], JAM.policy.p1);
        v1408[v1409] = v10667;
        var v1410 = this.BGCHRBank2;
        var v1411 = destination;
        destination = destination + 1;
        var v5873 = source$$1;
        source$$1 = source$$1 + 1;
        var v10668 = JAM.call(memoryReader[source$$1], memoryReader, [this, v5873], JAM.policy.p1);
        v1410[v1411] = v10668;
        var v1412 = this.BGCHRBank2;
        var v1413 = destination;
        destination = destination + 1;
        var v5874 = source$$1;
        source$$1 = source$$1 + 1;
        var v10669 = JAM.call(memoryReader[source$$1], memoryReader, [this, v5874], JAM.policy.p1);
        v1412[v1413] = v10669;
        var v1414 = this.BGCHRBank2;
        var v1415 = destination;
        destination = destination + 1;
        var v5875 = source$$1;
        source$$1 = source$$1 + 1;
        var v10670 = JAM.call(memoryReader[source$$1], memoryReader, [this, v5875], JAM.policy.p1);
        v1414[v1415] = v10670;
        var v1416 = this.BGCHRBank2;
        var v1417 = destination;
        destination = destination + 1;
        var v5876 = source$$1;
        source$$1 = source$$1 + 1;
        var v10671 = JAM.call(memoryReader[source$$1], memoryReader, [this, v5876], JAM.policy.p1);
        v1416[v1417] = v10671;
        var v1418 = this.BGCHRBank2;
        var v1419 = destination;
        destination = destination + 1;
        var v5877 = source$$1;
        source$$1 = source$$1 + 1;
        var v10672 = JAM.call(memoryReader[source$$1], memoryReader, [this, v5877], JAM.policy.p1);
        v1418[v1419] = v10672;
        var v1420 = this.BGCHRBank2;
        var v1421 = destination;
        destination = destination + 1;
        var v5878 = source$$1;
        source$$1 = source$$1 + 1;
        var v10673 = JAM.call(memoryReader[source$$1], memoryReader, [this, v5878], JAM.policy.p1);
        v1420[v1421] = v10673;
        var v1422 = this.BGCHRBank2;
        var v1423 = destination;
        destination = destination + 1;
        var v5879 = source$$1;
        source$$1 = source$$1 + 1;
        var v10674 = JAM.call(memoryReader[source$$1], memoryReader, [this, v5879], JAM.policy.p1);
        v1422[v1423] = v10674;
        var v1424 = this.BGCHRBank2;
        var v1425 = destination;
        destination = destination + 1;
        var v5880 = source$$1;
        source$$1 = source$$1 + 1;
        var v10675 = JAM.call(memoryReader[source$$1], memoryReader, [this, v5880], JAM.policy.p1);
        v1424[v1425] = v10675;
        destination = destination + 6144 & 8176;
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
  if (parentObj$$592.modeSTAT < 3) {
    address$$86 = address$$86 & 2047;
    if (parentObj$$592.BGCHRCurrentBank[address$$86] != data$$60) {
      parentObj$$592.graphicsJIT();
      JAM.set(parentObj$$592.BGCHRCurrentBank, address$$86, data$$60);
    }
  }
  return;
}
function v798(parentObj$$591, address$$85, data$$59) {
  if (parentObj$$591.modeSTAT < 3) {
    address$$85 = address$$85 & 2047;
    if (parentObj$$591.BGCHRBank1[address$$85] != data$$59) {
      parentObj$$591.graphicsJIT();
      JAM.set(parentObj$$591.BGCHRBank1, address$$85, data$$59);
    }
  }
  return;
}
function v797(parentObj$$590, address$$84, data$$58) {
  if (parentObj$$590.modeSTAT < 3) {
    if (parentObj$$590.currVRAMBank == 0) {
      if (parentObj$$590.memory[address$$84] != data$$58) {
        parentObj$$590.graphicsJIT();
        JAM.set(parentObj$$590.memory, address$$84, data$$58);
        JAM.call(parentObj$$590.generateGBCTileLineBank1, parentObj$$590, [address$$84]);
      }
    } else {
      address$$84 = address$$84 & 8191;
      if (parentObj$$590.VRAM[address$$84] != data$$58) {
        parentObj$$590.graphicsJIT();
        JAM.set(parentObj$$590.VRAM, address$$84, data$$58);
        JAM.call(parentObj$$590.generateGBCTileLineBank2, parentObj$$590, [address$$84]);
      }
    }
  }
  return;
}
function v796(parentObj$$589, address$$83, data$$57) {
  if (parentObj$$589.modeSTAT < 3) {
    if (parentObj$$589.memory[address$$83] != data$$57) {
      parentObj$$589.graphicsJIT();
      JAM.set(parentObj$$589.memory, address$$83, data$$57);
      JAM.call(parentObj$$589.generateGBTileLine, parentObj$$589, [address$$83]);
    }
  }
  return;
}
function v795(parentObj$$588, address$$82, data$$56) {
  if (parentObj$$588.modeSTAT < 3) {
    if (parentObj$$588.memory[address$$82] != data$$56) {
      parentObj$$588.graphicsJIT();
      JAM.set(parentObj$$588.memory, address$$82, data$$56);
      JAM.call(parentObj$$588.generateGBOAMTileLine, parentObj$$588, [address$$82]);
    }
  }
  return;
}
function v794(parentObj$$587, address$$81, data$$55) {
  parentObj$$587.memory[address$$81 - 8192] = data$$55;
  return;
}
function v793(parentObj$$586, address$$80, data$$54) {
  JAM.set(parentObj$$586.GBCMemory, address$$80 + parentObj$$586.gbcRamBankPositionECHO, data$$54);
  return;
}
function v792(parentObj$$585, address$$79, data$$53) {
  if (parentObj$$585.modeSTAT < 2) {
    if (parentObj$$585.memory[address$$79] != data$$53) {
      parentObj$$585.graphicsJIT();
      JAM.set(parentObj$$585.memory, address$$79, data$$53);
    }
  }
  return;
}
function v791(parentObj$$584, address$$78, data$$52) {
  JAM.set(parentObj$$584.GBCMemory, address$$78 + parentObj$$584.gbcRamBankPosition, data$$52);
  return;
}
function v790(parentObj$$583, address$$77, data$$51) {
  var v5897 = parentObj$$583.MBCRAMBanksEnabled;
  if (!v5897) {
    v5897 = settings[10];
  }
  if (v5897) {
    switch(parentObj$$583.currMBCRAMBank) {
      case 0:
      ;
      case 1:
      ;
      case 2:
      ;
      case 3:
        JAM.set(parentObj$$583.MBCRam, address$$77 + parentObj$$583.currMBCRAMBankPosition, data$$51);
        break;
      case 8:
        if (data$$51 < 60) {
          parentObj$$583.RTCSeconds = data$$51;
        } else {
          cout("(Bank #" + parentObj$$583.currMBCRAMBank + ") RTC write out of range: " + data$$51, 1);
        }
        break;
      case 9:
        if (data$$51 < 60) {
          parentObj$$583.RTCMinutes = data$$51;
        } else {
          cout("(Bank #" + parentObj$$583.currMBCRAMBank + ") RTC write out of range: " + data$$51, 1);
        }
        break;
      case 10:
        if (data$$51 < 24) {
          parentObj$$583.RTCHours = data$$51;
        } else {
          cout("(Bank #" + parentObj$$583.currMBCRAMBank + ") RTC write out of range: " + data$$51, 1);
        }
        break;
      case 11:
        parentObj$$583.RTCDays = data$$51 & 255 | parentObj$$583.RTCDays & 256;
        break;
      case 12:
        parentObj$$583.RTCDayOverFlow = data$$51 > 127;
        parentObj$$583.RTCHalt = (data$$51 & 64) == 64;
        parentObj$$583.RTCDays = (data$$51 & 1) << 8 | parentObj$$583.RTCDays & 255;
        break;
      default:
        cout("Invalid MBC3 bank address selected: " + parentObj$$583.currMBCRAMBank, 0);
    }
  }
  return;
}
function v789(parentObj$$582, address$$76, data$$50) {
  var v5906 = parentObj$$582.MBCRAMBanksEnabled;
  if (!v5906) {
    v5906 = settings[10];
  }
  if (v5906) {
    JAM.set(parentObj$$582.MBCRam, address$$76 + parentObj$$582.currMBCRAMBankPosition, data$$50);
  }
  return;
}
function v788(parentObj$$581, address$$75, data$$49) {
  parentObj$$581.memory[65280 | address$$75] = data$$49;
  return;
}
function v787(parentObj$$580, address$$74, data$$48) {
  JAM.set(parentObj$$580.memory, address$$74, data$$48);
  return;
}
function v786(parentObj$$579, address$$73, data$$47) {
  return;
}
function v785(parentObj$$578, address$$72, data$$46) {
  parentObj$$578.currMBCRAMBank = data$$46 & 3;
  parentObj$$578.currMBCRAMBankPosition = (parentObj$$578.currMBCRAMBank << 13) - 40960;
  return;
}
function v784(parentObj$$577, address$$71, data$$45) {
  parentObj$$577.currMBCRAMBank = data$$45 & 3;
  parentObj$$577.currMBCRAMBankPosition = (parentObj$$577.currMBCRAMBank << 13) - 40960;
  return;
}
function v783(parentObj$$576, address$$70, data$$44) {
  parentObj$$576.currMBCRAMBank = data$$44 & 15;
  parentObj$$576.currMBCRAMBankPosition = (parentObj$$576.currMBCRAMBank << 13) - 40960;
  return;
}
function v782(parentObj$$575, address$$69, data$$43) {
  parentObj$$575.ROMBank1offs = (data$$43 & 1) << 8 | parentObj$$575.ROMBank1offs & 255;
  parentObj$$575.setCurrentMBC5ROMBank();
  return;
}
function v781(parentObj$$574, address$$68, data$$42) {
  parentObj$$574.ROMBank1offs = parentObj$$574.ROMBank1offs & 256 | data$$42;
  parentObj$$574.setCurrentMBC5ROMBank();
  return;
}
function v780(parentObj$$573, address$$67, data$$41) {
  if (data$$41 == 0) {
    parentObj$$573.RTCisLatched = false;
  } else {
    if (!parentObj$$573.RTCisLatched) {
      parentObj$$573.RTCisLatched = true;
      parentObj$$573.latchedSeconds = parentObj$$573.RTCSeconds | 0;
      parentObj$$573.latchedMinutes = parentObj$$573.RTCMinutes;
      parentObj$$573.latchedHours = parentObj$$573.RTCHours;
      parentObj$$573.latchedLDays = parentObj$$573.RTCDays & 255;
      parentObj$$573.latchedHDays = parentObj$$573.RTCDays >> 8;
    }
  }
  return;
}
function v779(parentObj$$572, address$$66, data$$40) {
  parentObj$$572.currMBCRAMBank = data$$40;
  if (data$$40 < 4) {
    parentObj$$572.currMBCRAMBankPosition = (parentObj$$572.currMBCRAMBank << 13) - 40960;
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
  parentObj$$569.MBC1Mode = (data$$37 & 1) == 1;
  if (parentObj$$569.MBC1Mode) {
    parentObj$$569.ROMBank1offs = parentObj$$569.ROMBank1offs & 31;
    parentObj$$569.setCurrentMBC1ROMBank();
  } else {
    parentObj$$569.currMBCRAMBank = 0;
    parentObj$$569.currMBCRAMBankPosition = -40960;
  }
  return;
}
function v775(parentObj$$568, address$$62, data$$36) {
  if (parentObj$$568.MBC1Mode) {
    parentObj$$568.currMBCRAMBank = data$$36 & 3;
    parentObj$$568.currMBCRAMBankPosition = (parentObj$$568.currMBCRAMBank << 13) - 40960;
  } else {
    parentObj$$568.ROMBank1offs = (data$$36 & 3) << 5 | parentObj$$568.ROMBank1offs & 31;
    parentObj$$568.setCurrentMBC1ROMBank();
  }
  return;
}
function v774(parentObj$$567, address$$61, data$$35) {
  parentObj$$567.ROMBank1offs = parentObj$$567.ROMBank1offs & 96 | data$$35 & 31;
  parentObj$$567.setCurrentMBC1ROMBank();
  return;
}
function v773(parentObj$$566, address$$60, data$$34) {
  parentObj$$566.MBCRAMBanksEnabled = (data$$34 & 15) == 10;
  return;
}
function v772() {
  var index$$63 = 0;
  var v1572 = index$$63 <= 65535;
  for (;v1572;) {
    if (index$$63 < 32768) {
      if (this.cMBC1) {
        if (index$$63 < 8192) {
          this.memoryWriter[index$$63] = this.MBCWriteEnable;
        } else {
          if (index$$63 < 16384) {
            this.memoryWriter[index$$63] = this.MBC1WriteROMBank;
          } else {
            if (index$$63 < 24576) {
              this.memoryWriter[index$$63] = this.MBC1WriteRAMBank;
            } else {
              this.memoryWriter[index$$63] = this.MBC1WriteType;
            }
          }
        }
      } else {
        if (this.cMBC2) {
          if (index$$63 < 4096) {
            this.memoryWriter[index$$63] = this.MBCWriteEnable;
          } else {
            var v5921 = index$$63 >= 8448;
            if (v5921) {
              v5921 = index$$63 < 8704;
            }
            if (v5921) {
              this.memoryWriter[index$$63] = this.MBC2WriteROMBank;
            } else {
              this.memoryWriter[index$$63] = this.cartIgnoreWrite;
            }
          }
        } else {
          if (this.cMBC3) {
            if (index$$63 < 8192) {
              this.memoryWriter[index$$63] = this.MBCWriteEnable;
            } else {
              if (index$$63 < 16384) {
                this.memoryWriter[index$$63] = this.MBC3WriteROMBank;
              } else {
                if (index$$63 < 24576) {
                  this.memoryWriter[index$$63] = this.MBC3WriteRAMBank;
                } else {
                  this.memoryWriter[index$$63] = this.MBC3WriteRTCLatch;
                }
              }
            }
          } else {
            var v8532 = this.cMBC5;
            if (!v8532) {
              v8532 = this.cRUMBLE;
            }
            var v5922 = v8532;
            if (!v5922) {
              v5922 = this.cMBC7;
            }
            if (v5922) {
              if (index$$63 < 8192) {
                this.memoryWriter[index$$63] = this.MBCWriteEnable;
              } else {
                if (index$$63 < 12288) {
                  this.memoryWriter[index$$63] = this.MBC5WriteROMBankLow;
                } else {
                  if (index$$63 < 16384) {
                    this.memoryWriter[index$$63] = this.MBC5WriteROMBankHigh;
                  } else {
                    if (index$$63 < 24576) {
                      var v1523 = this.memoryWriter;
                      var v5923;
                      if (this.cRUMBLE) {
                        v5923 = this.RUMBLEWriteRAMBank;
                      } else {
                        v5923 = this.MBC5WriteRAMBank;
                      }
                      v1523[index$$63] = v5923;
                    } else {
                      this.memoryWriter[index$$63] = this.cartIgnoreWrite;
                    }
                  }
                }
              }
            } else {
              if (this.cHuC3) {
                if (index$$63 < 8192) {
                  this.memoryWriter[index$$63] = this.MBCWriteEnable;
                } else {
                  if (index$$63 < 16384) {
                    this.memoryWriter[index$$63] = this.MBC3WriteROMBank;
                  } else {
                    if (index$$63 < 24576) {
                      this.memoryWriter[index$$63] = this.HuC3WriteRAMBank;
                    } else {
                      this.memoryWriter[index$$63] = this.cartIgnoreWrite;
                    }
                  }
                }
              } else {
                this.memoryWriter[index$$63] = this.cartIgnoreWrite;
              }
            }
          }
        }
      }
    } else {
      if (index$$63 < 36864) {
        var v1542 = this.memoryWriter;
        var v5924;
        if (this.cGBC) {
          v5924 = this.VRAMGBCDATAWrite;
        } else {
          v5924 = this.VRAMGBDATAWrite;
        }
        v1542[index$$63] = v5924;
      } else {
        if (index$$63 < 38912) {
          var v1543 = this.memoryWriter;
          var v5925;
          if (this.cGBC) {
            v5925 = this.VRAMGBCDATAWrite;
          } else {
            v5925 = this.VRAMGBDATAUpperWrite;
          }
          v1543[index$$63] = v5925;
        } else {
          if (index$$63 < 40960) {
            var v1544 = this.memoryWriter;
            var v5926;
            if (this.cGBC) {
              v5926 = this.VRAMGBCCHRMAPWrite;
            } else {
              v5926 = this.VRAMGBCHRMAPWrite;
            }
            v1544[index$$63] = v5926;
          } else {
            if (index$$63 < 49152) {
              var v8538 = this.numRAMBanks == 1 / 16;
              if (v8538) {
                v8538 = index$$63 < 41472;
              }
              var v5927 = v8538;
              if (!v5927) {
                v5927 = this.numRAMBanks >= 1;
              }
              if (v5927) {
                if (!this.cMBC3) {
                  this.memoryWriter[index$$63] = this.memoryWriteMBCRAM;
                } else {
                  this.memoryWriter[index$$63] = this.memoryWriteMBC3RAM;
                }
              } else {
                this.memoryWriter[index$$63] = this.cartIgnoreWrite;
              }
            } else {
              if (index$$63 < 57344) {
                var v5929 = this.cGBC;
                if (v5929) {
                  v5929 = index$$63 >= 53248;
                }
                if (v5929) {
                  this.memoryWriter[index$$63] = this.memoryWriteGBCRAM;
                } else {
                  this.memoryWriter[index$$63] = this.memoryWriteNormal;
                }
              } else {
                if (index$$63 < 65024) {
                  var v5930 = this.cGBC;
                  if (v5930) {
                    v5930 = index$$63 >= 61440;
                  }
                  if (v5930) {
                    this.memoryWriter[index$$63] = this.memoryWriteECHOGBCRAM;
                  } else {
                    this.memoryWriter[index$$63] = this.memoryWriteECHONormal;
                  }
                } else {
                  if (index$$63 <= 65184) {
                    this.memoryWriter[index$$63] = this.memoryWriteOAMRAM;
                  } else {
                    if (index$$63 < 65280) {
                      if (this.cGBC) {
                        this.memoryWriter[index$$63] = this.memoryWriteNormal;
                      } else {
                        this.memoryWriter[index$$63] = this.cartIgnoreWrite;
                      }
                    } else {
                      this.memoryWriter[index$$63] = this.memoryWriteNormal;
                      this.memoryHighWriter[index$$63 & 255] = this.memoryHighWriteNormal;
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
  JAM.call(v1573[address$$59], v1573, [this, address$$59, data$$33], JAM.policy.p1);
  return;
}
function v770(address$$58, data$$32) {
  var v1574 = this.memoryWriter;
  JAM.call(v1574[address$$58], v1574, [this, address$$58, data$$32], JAM.policy.p1);
  return;
}
function v769() {
  this.currentROMBank = this.ROMBank1offs % this.ROMBankEdge - 1 << 14;
  return;
}
function v768() {
  this.currentROMBank = JAM.call(Math.max, Math, [this.ROMBank1offs % this.ROMBankEdge - 1, 0], JAM.policy.p1) << 14;
  return;
}
function v767() {
  switch(this.ROMBank1offs) {
    case 0:
    ;
    case 32:
    ;
    case 64:
    ;
    case 96:
      this.currentROMBank = this.ROMBank1offs % this.ROMBankEdge << 14;
      break;
    default:
      this.currentROMBank = this.ROMBank1offs % this.ROMBankEdge - 1 << 14;
  }
  return;
}
function v766(parentObj$$565, address$$57) {
  var v1580;
  if (parentObj$$565.modeSTAT > 2) {
    v1580 = 255;
  } else {
    v1580 = parentObj$$565.BGCHRBank1[address$$57 & 2047];
  }
  return v1580;
}
function v765(parentObj$$564, address$$56) {
  var v1581;
  if (parentObj$$564.modeSTAT > 2) {
    v1581 = 255;
  } else {
    v1581 = parentObj$$564.BGCHRCurrentBank[address$$56 & 2047];
  }
  return v1581;
}
function v764(parentObj$$563, address$$55) {
  var v1582;
  if (parentObj$$563.modeSTAT > 2) {
    v1582 = 255;
  } else {
    v1582 = parentObj$$563.memory[address$$55];
  }
  return v1582;
}
function v763(parentObj$$562, address$$54) {
  var v1583;
  if (parentObj$$562.modeSTAT > 2) {
    v1583 = 255;
  } else {
    var v5944;
    if (parentObj$$562.currVRAMBank == 0) {
      v5944 = parentObj$$562.memory[address$$54];
    } else {
      v5944 = parentObj$$562.VRAM[address$$54 & 8191];
    }
    v1583 = v5944;
  }
  return v1583;
}
function v762(parentObj$$561, address$$53) {
  return 255;
}
function v761(parentObj$$560, address$$52) {
  return parentObj$$560.memory[address$$52 - 8192];
}
function v760(parentObj$$559, address$$51) {
  return parentObj$$559.GBCMemory[address$$51 + parentObj$$559.gbcRamBankPositionECHO];
}
function v759(parentObj$$558, address$$50) {
  var v1588;
  if (parentObj$$558.modeSTAT > 1) {
    v1588 = 255;
  } else {
    v1588 = parentObj$$558.memory[address$$50];
  }
  return v1588;
}
function v758(parentObj$$557, address$$49) {
  return parentObj$$557.GBCMemory[address$$49 + parentObj$$557.gbcRamBankPosition];
}
function v757(parentObj$$556, address$$48) {
  var v5950 = parentObj$$556.MBCRAMBanksEnabled;
  if (!v5950) {
    v5950 = settings[10];
  }
  if (v5950) {
    switch(parentObj$$556.currMBCRAMBank) {
      case 0:
      ;
      case 1:
      ;
      case 2:
      ;
      case 3:
        return parentObj$$556.MBCRam[address$$48 + parentObj$$556.currMBCRAMBankPosition];
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
        if (parentObj$$556.RTCDayOverFlow) {
          v8556 = 128;
        } else {
          v8556 = 0;
        }
        var v5952 = v8556;
        var v8557;
        if (parentObj$$556.RTCHALT) {
          v8557 = 64;
        } else {
          v8557 = 0;
        }
        return v5952 + v8557 + parentObj$$556.latchedHDays;
    }
  }
  return 255;
}
function v756(parentObj$$555, address$$47) {
  var v5954 = parentObj$$555.MBCRAMBanksEnabled;
  if (!v5954) {
    v5954 = settings[10];
  }
  if (v5954) {
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
        return parentObj$$555.MBCRam[address$$47 + parentObj$$555.currMBCRAMBankPosition];
    }
  }
  return 255;
}
function v755(parentObj$$554, address$$46) {
  var v5956 = parentObj$$554.MBCRAMBanksEnabled;
  if (!v5956) {
    v5956 = settings[10];
  }
  if (v5956) {
    return parentObj$$554.MBCRam[address$$46 + parentObj$$554.currMBCRAMBankPosition];
  }
  return 255;
}
function v754(parentObj$$553, address$$45) {
  return parentObj$$553.ROM[parentObj$$553.currentROMBank + address$$45];
}
function v753(parentObj$$552, address$$44) {
  return parentObj$$552.memory[65280 | address$$44];
}
function v752(parentObj$$551, address$$43) {
  return parentObj$$551.memory[address$$43];
}
function v751() {
  function v750(parentObj$$550, address$$42) {
    return parentObj$$550.interruptsEnabled;
  }
  function v749(parentObj$$549, address$$41) {
    return 0;
  }
  function v748(parentObj$$548, address$$40) {
    return 143 | parentObj$$548.memory[65397];
  }
  function v747(parentObj$$547, address$$39) {
    return 64 | parentObj$$547.memory[65392];
  }
  function v746(parentObj$$546, address$$38) {
    return 254 | parentObj$$546.memory[65388];
  }
  function v745(parentObj$$545, address$$37) {
    var v5962;
    if (parentObj$$545.memory[65366] >= 192) {
      v5962 = 2 | parentObj$$545.memory[65366] & 193;
    } else {
      v5962 = parentObj$$545.memory[65366] & 195;
    }
    return 60 | v5962;
  }
  function v744(parentObj$$544, address$$36) {
    var v5963 = !parentObj$$544.LCDisOn;
    if (v5963) {
      v5963 = parentObj$$544.hdmaRunning;
    }
    if (v5963) {
      JAM.call(parentObj$$544.DMAWrite, parentObj$$544, [(parentObj$$544.memory[65365] & 127) + 1]);
      parentObj$$544.memory[65365] = 255;
      parentObj$$544.hdmaRunning = false;
    }
    return parentObj$$544.memory[65365];
  }
  function v743(parentObj$$543, address$$35) {
    return parentObj$$543.currVRAMBank;
  }
  function v742(parentObj$$542, address$$34) {
    return parentObj$$542.windowY;
  }
  function v741(parentObj$$541, address$$33) {
    var v1616;
    if (parentObj$$541.LCDisOn) {
      v1616 = parentObj$$541.memory[65348];
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
    return 128 | parentObj$$538.memory[65345] | parentObj$$538.modeSTAT;
  }
  function v737(parentObj$$537, address$$29) {
    var v1619;
    if (parentObj$$537.channel3canPlay) {
      v1619 = parentObj$$537.memory[65280 | parentObj$$537.channel3lastSampleLookup >> 1];
    } else {
      v1619 = parentObj$$537.memory[65280 | address$$29];
    }
    return v1619;
  }
  function v736(parentObj$$536, address$$28) {
    var v1620;
    if (parentObj$$536.channel3canPlay) {
      v1620 = parentObj$$536.memory[65280 | parentObj$$536.channel3lastSampleLookup >> 1];
    } else {
      v1620 = parentObj$$536.memory[address$$28];
    }
    return v1620;
  }
  function v735(parentObj$$535, address$$27) {
    parentObj$$535.audioJIT();
    return 112 | parentObj$$535.memory[65318];
  }
  function v734(parentObj$$534, address$$26) {
    return 191 | parentObj$$534.memory[65315];
  }
  function v733(parentObj$$533, address$$25) {
    return 191 | parentObj$$533.memory[65310];
  }
  function v732(parentObj$$532, address$$24) {
    return 255;
  }
  function v731(parentObj$$531, address$$23) {
    return 159 | parentObj$$531.memory[65308];
  }
  function v730(parentObj$$530, address$$22) {
    return 127 | parentObj$$530.memory[65306];
  }
  function v729(parentObj$$529, address$$21) {
    return 191 | parentObj$$529.memory[65305];
  }
  function v728(parentObj$$528, address$$20) {
    return 63 | parentObj$$528.memory[65302];
  }
  function v727(parentObj$$527, address$$19) {
    return 191 | parentObj$$527.memory[65300];
  }
  function v726(parentObj$$526, address$$18) {
    return 63 | parentObj$$526.memory[65297];
  }
  function v725(parentObj$$525, address$$17) {
    return 128 | parentObj$$525.memory[65296];
  }
  function v724(parentObj$$524, address$$16) {
    return 224 | parentObj$$524.interruptsRequested;
  }
  function v723(parentObj$$523, address$$15) {
    return 248 | parentObj$$523.memory[65287];
  }
  function v722(parentObj$$522, address$$14) {
    parentObj$$522.memory[65284] = parentObj$$522.memory[65284] + (parentObj$$522.DIVTicks >> 8) & 255;
    parentObj$$522.DIVTicks = parentObj$$522.DIVTicks & 255;
    return parentObj$$522.memory[65284];
  }
  function v721(parentObj$$521, address$$13) {
    var v5990;
    if (parentObj$$521.serialTimer <= 0) {
      v5990 = 126;
    } else {
      v5990 = 254;
    }
    return v5990 | parentObj$$521.memory[65282];
  }
  function v720(parentObj$$520, address$$12) {
    var v5992;
    if (parentObj$$520.serialTimer <= 0) {
      v5992 = 124;
    } else {
      v5992 = 252;
    }
    return v5992 | parentObj$$520.memory[65282];
  }
  function v719(parentObj$$519, address$$11) {
    var v1639;
    if (parentObj$$519.memory[65282] < 128) {
      v1639 = parentObj$$519.memory[65281];
    } else {
      v1639 = 255;
    }
    return v1639;
  }
  function v718(parentObj$$518, address$$10) {
    return 192 | parentObj$$518.memory[65280];
  }
  var index$$62 = 0;
  var v1727 = index$$62 <= 65535;
  for (;v1727;) {
    if (index$$62 < 16384) {
      this.memoryReader[index$$62] = this.memoryReadNormal;
    } else {
      if (index$$62 < 32768) {
        this.memoryReader[index$$62] = this.memoryReadROM;
      } else {
        if (index$$62 < 38912) {
          var v1643 = this.memoryReader;
          var v5997;
          if (this.cGBC) {
            v5997 = this.VRAMDATAReadCGBCPU;
          } else {
            v5997 = this.VRAMDATAReadDMGCPU;
          }
          v1643[index$$62] = v5997;
        } else {
          if (index$$62 < 40960) {
            var v1644 = this.memoryReader;
            var v5998;
            if (this.cGBC) {
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
            if (v5999) {
              var v8575 = this.numRAMBanks == 1 / 16;
              if (v8575) {
                v8575 = index$$62 < 41472;
              }
              var v6000 = v8575;
              if (!v6000) {
                v6000 = this.numRAMBanks >= 1;
              }
              if (v6000) {
                if (this.cMBC7) {
                  this.memoryReader[index$$62] = this.memoryReadMBC7;
                } else {
                  if (!this.cMBC3) {
                    this.memoryReader[index$$62] = this.memoryReadMBC;
                  } else {
                    this.memoryReader[index$$62] = this.memoryReadMBC3;
                  }
                }
              } else {
                this.memoryReader[index$$62] = this.memoryReadBAD;
              }
            } else {
              var v6002 = index$$62 >= 49152;
              if (v6002) {
                v6002 = index$$62 < 57344;
              }
              if (v6002) {
                var v6003 = !this.cGBC;
                if (!v6003) {
                  v6003 = index$$62 < 53248;
                }
                if (v6003) {
                  this.memoryReader[index$$62] = this.memoryReadNormal;
                } else {
                  this.memoryReader[index$$62] = this.memoryReadGBCMemory;
                }
              } else {
                var v6004 = index$$62 >= 57344;
                if (v6004) {
                  v6004 = index$$62 < 65024;
                }
                if (v6004) {
                  var v6005 = !this.cGBC;
                  if (!v6005) {
                    v6005 = index$$62 < 61440;
                  }
                  if (v6005) {
                    this.memoryReader[index$$62] = this.memoryReadECHONormal;
                  } else {
                    this.memoryReader[index$$62] = this.memoryReadECHOGBCMemory;
                  }
                } else {
                  if (index$$62 < 65184) {
                    this.memoryReader[index$$62] = this.memoryReadOAM;
                  } else {
                    var v8582 = this.cGBC;
                    if (v8582) {
                      v8582 = index$$62 >= 65184;
                    }
                    var v6006 = v8582;
                    if (v6006) {
                      v6006 = index$$62 < 65280;
                    }
                    if (v6006) {
                      this.memoryReader[index$$62] = this.memoryReadNormal;
                    } else {
                      if (index$$62 >= 65280) {
                        switch(index$$62) {
                          case 65280:
                            this.memoryHighReader[0] = this.memoryReader[65280] = v718;
                            break;
                          case 65281:
                            this.memoryHighReader[1] = this.memoryReader[65281] = v719;
                            break;
                          case 65282:
                            if (this.cGBC) {
                              this.memoryHighReader[2] = this.memoryReader[65282] = v720;
                            } else {
                              this.memoryHighReader[2] = this.memoryReader[65282] = v721;
                            }
                            break;
                          case 65284:
                            this.memoryHighReader[4] = this.memoryReader[65284] = v722;
                            break;
                          case 65287:
                            this.memoryHighReader[7] = this.memoryReader[65287] = v723;
                            break;
                          case 65295:
                            this.memoryHighReader[15] = this.memoryReader[65295] = v724;
                            break;
                          case 65296:
                            this.memoryHighReader[16] = this.memoryReader[65296] = v725;
                            break;
                          case 65297:
                            this.memoryHighReader[17] = this.memoryReader[65297] = v726;
                            break;
                          case 65299:
                            this.memoryHighReader[19] = this.memoryReader[65299] = this.memoryReadBAD;
                            break;
                          case 65300:
                            this.memoryHighReader[20] = this.memoryReader[65300] = v727;
                            break;
                          case 65302:
                            this.memoryHighReader[22] = this.memoryReader[65302] = v728;
                            break;
                          case 65304:
                            this.memoryHighReader[24] = this.memoryReader[65304] = this.memoryReadBAD;
                            break;
                          case 65305:
                            this.memoryHighReader[25] = this.memoryReader[65305] = v729;
                            break;
                          case 65306:
                            this.memoryHighReader[26] = this.memoryReader[65306] = v730;
                            break;
                          case 65307:
                            this.memoryHighReader[27] = this.memoryReader[65307] = this.memoryReadBAD;
                            break;
                          case 65308:
                            this.memoryHighReader[28] = this.memoryReader[65308] = v731;
                            break;
                          case 65309:
                            this.memoryHighReader[29] = this.memoryReader[65309] = v732;
                            break;
                          case 65310:
                            this.memoryHighReader[30] = this.memoryReader[65310] = v733;
                            break;
                          case 65311:
                          ;
                          case 65312:
                            this.memoryHighReader[index$$62 & 255] = this.memoryReader[index$$62] = this.memoryReadBAD;
                            break;
                          case 65315:
                            this.memoryHighReader[35] = this.memoryReader[65315] = v734;
                            break;
                          case 65318:
                            this.memoryHighReader[38] = this.memoryReader[65318] = v735;
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
                            this.memoryHighReader[index$$62 & 255] = this.memoryReader[index$$62] = this.memoryReadBAD;
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
                            this.memoryReader[index$$62] = v736;
                            this.memoryHighReader[index$$62 & 255] = v737;
                            break;
                          case 65345:
                            this.memoryHighReader[65] = this.memoryReader[65345] = v738;
                            break;
                          case 65346:
                            this.memoryHighReader[66] = this.memoryReader[65346] = v739;
                            break;
                          case 65347:
                            this.memoryHighReader[67] = this.memoryReader[65347] = v740;
                            break;
                          case 65348:
                            this.memoryHighReader[68] = this.memoryReader[65348] = v741;
                            break;
                          case 65354:
                            this.memoryHighReader[74] = this.memoryReader[65354] = v742;
                            break;
                          case 65359:
                            this.memoryHighReader[79] = this.memoryReader[65359] = v743;
                            break;
                          case 65365:
                            if (this.cGBC) {
                              this.memoryHighReader[85] = this.memoryReader[65365] = v744;
                            } else {
                              this.memoryReader[65365] = this.memoryReadNormal;
                              this.memoryHighReader[85] = this.memoryHighReadNormal;
                            }
                            break;
                          case 65366:
                            if (this.cGBC) {
                              this.memoryHighReader[86] = this.memoryReader[65366] = v745;
                            } else {
                              this.memoryReader[65366] = this.memoryReadNormal;
                              this.memoryHighReader[86] = this.memoryHighReadNormal;
                            }
                            break;
                          case 65388:
                            if (this.cGBC) {
                              this.memoryHighReader[108] = this.memoryReader[65388] = v746;
                            } else {
                              this.memoryHighReader[108] = this.memoryReader[65388] = this.memoryReadBAD;
                            }
                            break;
                          case 65392:
                            if (this.cGBC) {
                              this.memoryHighReader[112] = this.memoryReader[65392] = v747;
                            } else {
                              this.memoryHighReader[112] = this.memoryReader[65392] = this.memoryReadBAD;
                            }
                            break;
                          case 65397:
                            this.memoryHighReader[117] = this.memoryReader[65397] = v748;
                            break;
                          case 65398:
                          ;
                          case 65399:
                            this.memoryHighReader[index$$62 & 255] = this.memoryReader[index$$62] = v749;
                            break;
                          case 65535:
                            this.memoryHighReader[255] = this.memoryReader[65535] = v750;
                            break;
                          default:
                            this.memoryReader[index$$62] = this.memoryReadNormal;
                            this.memoryHighReader[index$$62 & 255] = this.memoryHighReadNormal;
                        }
                      } else {
                        this.memoryReader[index$$62] = this.memoryReadBAD;
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
  return JAM.call(v1728[address$$9], v1728, [this, address$$9], JAM.policy.p1);
}
function v716(address$$8) {
  var v1729 = this.memoryReader;
  return JAM.call(v1729[address$$8], v1729, [this, address$$8], JAM.policy.p1);
}
function v715() {
  if (!this.halt) {
    this.halt = true;
    var currentClocks = -1;
    var temp_var$$20 = 0;
    if (this.LCDisOn) {
      if ((this.interruptsEnabled & 1) == 1) {
        var v10236;
        if (this.modeSTAT == 1) {
          v10236 = 298;
        } else {
          v10236 = 144;
        }
        currentClocks = 456 * (v10236 - this.actualScanLine) - this.LCDTicks << this.doubleSpeedShifter;
      }
      if ((this.interruptsEnabled & 2) == 2) {
        if (this.mode0TriggerSTAT) {
          temp_var$$20 = this.clocksUntilMode0() - this.LCDTicks << this.doubleSpeedShifter;
          var v6052 = temp_var$$20 <= currentClocks;
          if (!v6052) {
            v6052 = currentClocks == -1;
          }
          if (v6052) {
            currentClocks = temp_var$$20;
          }
        }
        var v6053 = this.mode1TriggerSTAT;
        if (v6053) {
          v6053 = (this.interruptsEnabled & 1) == 0;
        }
        if (v6053) {
          var v10237;
          if (this.modeSTAT == 1) {
            v10237 = 298;
          } else {
            v10237 = 144;
          }
          temp_var$$20 = 456 * (v10237 - this.actualScanLine) - this.LCDTicks << this.doubleSpeedShifter;
          var v6056 = temp_var$$20 <= currentClocks;
          if (!v6056) {
            v6056 = currentClocks == -1;
          }
          if (v6056) {
            currentClocks = temp_var$$20;
          }
        }
        if (this.mode2TriggerSTAT) {
          var v8590;
          if (this.actualScanLine >= 143) {
            v8590 = 456 * (154 - this.actualScanLine);
          } else {
            v8590 = 456;
          }
          temp_var$$20 = v8590 - this.LCDTicks << this.doubleSpeedShifter;
          var v6059 = temp_var$$20 <= currentClocks;
          if (!v6059) {
            v6059 = currentClocks == -1;
          }
          if (v6059) {
            currentClocks = temp_var$$20;
          }
        }
        var v6060 = this.LYCMatchTriggerSTAT;
        if (v6060) {
          v6060 = this.memory[65349] <= 153;
        }
        if (v6060) {
          temp_var$$20 = this.clocksUntilLYCMatch() - this.LCDTicks << this.doubleSpeedShifter;
          var v6063 = temp_var$$20 <= currentClocks;
          if (!v6063) {
            v6063 = currentClocks == -1;
          }
          if (v6063) {
            currentClocks = temp_var$$20;
          }
        }
      }
    }
    var v6064 = this.TIMAEnabled;
    if (v6064) {
      v6064 = (this.interruptsEnabled & 4) == 4;
    }
    if (v6064) {
      temp_var$$20 = (256 - this.memory[65285]) * this.TACClocker - this.timerTicks;
      var v6067 = temp_var$$20 <= currentClocks;
      if (!v6067) {
        v6067 = currentClocks == -1;
      }
      if (v6067) {
        currentClocks = temp_var$$20;
      }
    }
    var v6068 = this.serialTimer > 0;
    if (v6068) {
      v6068 = (this.interruptsEnabled & 8) == 8;
    }
    if (v6068) {
      var v6069 = this.serialTimer <= currentClocks;
      if (!v6069) {
        v6069 = currentClocks == -1;
      }
      if (v6069) {
        currentClocks = this.serialTimer;
      }
    }
  } else {
    currentClocks = this.remainingClocks;
  }
  var maxClocks = this.CPUCyclesTotal - this.emulatorTicks << this.doubleSpeedShifter;
  if (currentClocks >= 0) {
    if (currentClocks <= maxClocks) {
      var v10676 = JAM.call(Math.max, Math, [currentClocks, this.CPUTicks], JAM.policy.p1);
      this.CPUTicks = v10676;
      this.updateCoreFull();
      this.halt = false;
      this.CPUTicks = 0;
    } else {
      var v10677 = JAM.call(Math.max, Math, [maxClocks, this.CPUTicks], JAM.policy.p1);
      this.CPUTicks = v10677;
      this.remainingClocks = currentClocks - this.CPUTicks;
    }
  } else {
    this.CPUTicks = this.CPUTicks + maxClocks;
  }
  return;
}
function v714() {
  if (this.IME) {
    this.IRQLineMatched = this.interruptsEnabled & this.interruptsRequested & 31;
  }
  return;
}
function v713() {
  var bitShift = 0;
  var testbit = 1;
  var v1780 = bitShift < 5;
  do {
    if ((testbit & this.IRQLineMatched) == testbit) {
      this.IME = false;
      this.interruptsRequested = this.interruptsRequested - testbit;
      this.IRQLineMatched = 0;
      this.CPUTicks = 20;
      this.stackPointer = this.stackPointer - 1 & 65535;
      var v1768 = this.memoryWriter;
      JAM.call(v1768[this.stackPointer], v1768, [this, this.stackPointer, this.programCounter >> 8], JAM.policy.p1);
      this.stackPointer = this.stackPointer - 1 & 65535;
      var v1773 = this.memoryWriter;
      JAM.call(v1773[this.stackPointer], v1773, [this, this.stackPointer, this.programCounter & 255], JAM.policy.p1);
      this.programCounter = 64 | bitShift << 3;
      this.updateCore();
      return;
    }
    testbit = 1 << (bitShift = bitShift + 1);
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
  if (this.queuedScanLines < 144) {
    ++this.queuedScanLines;
  } else {
    this.currentX = 0;
    this.midScanlineOffset = -1;
    if (this.lastUnrenderedLine < 143) {
      ++this.lastUnrenderedLine;
    } else {
      this.lastUnrenderedLine = 0;
    }
  }
  return;
}
function v710() {
  var v1785 = this.queuedScanLines > 0;
  for (;v1785;) {
    JAM.call(this.renderScanLine, this, [this.lastUnrenderedLine]);
    if (this.lastUnrenderedLine < 143) {
      ++this.lastUnrenderedLine;
    } else {
      this.lastUnrenderedLine = 0;
    }
    --this.queuedScanLines;
    v1785 = this.queuedScanLines > 0;
  }
  return;
}
function v709() {
  this.totalLinesPassed = this.totalLinesPassed + this.queuedScanLines;
  this.graphicsJITScanlineGroup();
  return;
}
function v708() {
  if (this.LCDisOn) {
    this.totalLinesPassed = 0;
    this.graphicsJITScanlineGroup();
  }
  return;
}
function v707(address$$7) {
  var lineCopy$$5 = this.memory[1 | address$$7] << 8 | this.memory[40958 & address$$7];
  address$$7 = address$$7 & 8190;
  var tileBlock1$$4 = this.tileCache[address$$7 >> 4];
  var tileBlock2$$4 = this.tileCache[512 | address$$7 >> 4];
  var tileBlock3$$4 = this.tileCache[1024 | address$$7 >> 4];
  var tileBlock4$$4 = this.tileCache[1536 | address$$7 >> 4];
  address$$7 = (address$$7 & 14) << 2;
  var addressFlipped$$4 = 56 - address$$7;
  tileBlock4$$4[addressFlipped$$4] = JAM.set(tileBlock2$$4, address$$7, tileBlock3$$4[addressFlipped$$4 | 7] = tileBlock1$$4[address$$7 | 7] = (lineCopy$$5 & 256) >> 7 | lineCopy$$5 & 1);
  tileBlock4$$4[addressFlipped$$4 | 1] = tileBlock2$$4[address$$7 | 1] = tileBlock3$$4[addressFlipped$$4 | 6] = tileBlock1$$4[address$$7 | 6] = (lineCopy$$5 & 512) >> 8 | (lineCopy$$5 & 2) >> 1;
  tileBlock4$$4[addressFlipped$$4 | 2] = tileBlock2$$4[address$$7 | 2] = tileBlock3$$4[addressFlipped$$4 | 5] = tileBlock1$$4[address$$7 | 5] = (lineCopy$$5 & 1024) >> 9 | (lineCopy$$5 & 4) >> 2;
  tileBlock4$$4[addressFlipped$$4 | 3] = tileBlock2$$4[address$$7 | 3] = tileBlock3$$4[addressFlipped$$4 | 4] = tileBlock1$$4[address$$7 | 4] = (lineCopy$$5 & 2048) >> 10 | (lineCopy$$5 & 8) >> 3;
  tileBlock4$$4[addressFlipped$$4 | 4] = tileBlock2$$4[address$$7 | 4] = tileBlock3$$4[addressFlipped$$4 | 3] = tileBlock1$$4[address$$7 | 3] = (lineCopy$$5 & 4096) >> 11 | (lineCopy$$5 & 16) >> 4;
  tileBlock4$$4[addressFlipped$$4 | 5] = tileBlock2$$4[address$$7 | 5] = tileBlock3$$4[addressFlipped$$4 | 2] = tileBlock1$$4[address$$7 | 2] = (lineCopy$$5 & 8192) >> 12 | (lineCopy$$5 & 32) >> 5;
  tileBlock4$$4[addressFlipped$$4 | 6] = tileBlock2$$4[address$$7 | 6] = tileBlock3$$4[addressFlipped$$4 | 1] = tileBlock1$$4[address$$7 | 1] = (lineCopy$$5 & 16384) >> 13 | (lineCopy$$5 & 64) >> 6;
  tileBlock4$$4[addressFlipped$$4 | 7] = tileBlock2$$4[address$$7 | 7] = tileBlock3$$4[addressFlipped$$4] = tileBlock1$$4[address$$7] = (lineCopy$$5 & 32768) >> 14 | (lineCopy$$5 & 128) >> 7;
  return;
}
function v706(vramAddress$$1) {
  var address$$6 = vramAddress$$1 >> 4;
  var tileBlock1$$3 = this.tileCache[2048 | address$$6];
  var tileBlock2$$3 = this.tileCache[2560 | address$$6];
  var tileBlock3$$3 = this.tileCache[3072 | address$$6];
  var tileBlock4$$3 = this.tileCache[3584 | address$$6];
  var lineCopy$$4 = 0;
  address$$6 = 0;
  var addressFlipped$$3 = 56;
  var v1824 = addressFlipped$$3 > -1;
  do {
    lineCopy$$4 = this.VRAM[1 | vramAddress$$1] << 8 | this.VRAM[vramAddress$$1];
    tileBlock4$$3[addressFlipped$$3] = tileBlock2$$3[address$$6] = tileBlock3$$3[addressFlipped$$3 | 7] = tileBlock1$$3[address$$6 | 7] = (lineCopy$$4 & 256) >> 7 | lineCopy$$4 & 1;
    tileBlock4$$3[addressFlipped$$3 | 1] = tileBlock2$$3[address$$6 | 1] = tileBlock3$$3[addressFlipped$$3 | 6] = tileBlock1$$3[address$$6 | 6] = (lineCopy$$4 & 512) >> 8 | (lineCopy$$4 & 2) >> 1;
    tileBlock4$$3[addressFlipped$$3 | 2] = tileBlock2$$3[address$$6 | 2] = tileBlock3$$3[addressFlipped$$3 | 5] = tileBlock1$$3[address$$6 | 5] = (lineCopy$$4 & 1024) >> 9 | (lineCopy$$4 & 4) >> 2;
    tileBlock4$$3[addressFlipped$$3 | 3] = tileBlock2$$3[address$$6 | 3] = tileBlock3$$3[addressFlipped$$3 | 4] = tileBlock1$$3[address$$6 | 4] = (lineCopy$$4 & 2048) >> 10 | (lineCopy$$4 & 8) >> 3;
    tileBlock4$$3[addressFlipped$$3 | 4] = tileBlock2$$3[address$$6 | 4] = tileBlock3$$3[addressFlipped$$3 | 3] = tileBlock1$$3[address$$6 | 3] = (lineCopy$$4 & 4096) >> 11 | (lineCopy$$4 & 16) >> 4;
    tileBlock4$$3[addressFlipped$$3 | 5] = tileBlock2$$3[address$$6 | 5] = tileBlock3$$3[addressFlipped$$3 | 2] = tileBlock1$$3[address$$6 | 2] = (lineCopy$$4 & 8192) >> 12 | (lineCopy$$4 & 32) >> 5;
    tileBlock4$$3[addressFlipped$$3 | 6] = tileBlock2$$3[address$$6 | 6] = tileBlock3$$3[addressFlipped$$3 | 1] = tileBlock1$$3[address$$6 | 1] = (lineCopy$$4 & 16384) >> 13 | (lineCopy$$4 & 64) >> 6;
    tileBlock4$$3[addressFlipped$$3 | 7] = tileBlock2$$3[address$$6 | 7] = tileBlock3$$3[addressFlipped$$3] = tileBlock1$$3[address$$6] = (lineCopy$$4 & 32768) >> 14 | (lineCopy$$4 & 128) >> 7;
    address$$6 = address$$6 + 8;
    addressFlipped$$3 = addressFlipped$$3 - 8;
    vramAddress$$1 = vramAddress$$1 + 2;
    v1824 = addressFlipped$$3 > -1;
  } while (v1824);
  return;
}
function v705(address$$5) {
  var lineCopy$$3 = this.VRAM[1 | address$$5] << 8 | this.VRAM[8190 & address$$5];
  var tileBlock1$$2 = this.tileCache[2048 | address$$5 >> 4];
  var tileBlock2$$2 = this.tileCache[2560 | address$$5 >> 4];
  var tileBlock3$$2 = this.tileCache[3072 | address$$5 >> 4];
  var tileBlock4$$2 = this.tileCache[3584 | address$$5 >> 4];
  address$$5 = (address$$5 & 14) << 2;
  var addressFlipped$$2 = 56 - address$$5;
  tileBlock4$$2[addressFlipped$$2] = JAM.set(tileBlock2$$2, address$$5, tileBlock3$$2[addressFlipped$$2 | 7] = tileBlock1$$2[address$$5 | 7] = (lineCopy$$3 & 256) >> 7 | lineCopy$$3 & 1);
  tileBlock4$$2[addressFlipped$$2 | 1] = tileBlock2$$2[address$$5 | 1] = tileBlock3$$2[addressFlipped$$2 | 6] = tileBlock1$$2[address$$5 | 6] = (lineCopy$$3 & 512) >> 8 | (lineCopy$$3 & 2) >> 1;
  tileBlock4$$2[addressFlipped$$2 | 2] = tileBlock2$$2[address$$5 | 2] = tileBlock3$$2[addressFlipped$$2 | 5] = tileBlock1$$2[address$$5 | 5] = (lineCopy$$3 & 1024) >> 9 | (lineCopy$$3 & 4) >> 2;
  tileBlock4$$2[addressFlipped$$2 | 3] = tileBlock2$$2[address$$5 | 3] = tileBlock3$$2[addressFlipped$$2 | 4] = tileBlock1$$2[address$$5 | 4] = (lineCopy$$3 & 2048) >> 10 | (lineCopy$$3 & 8) >> 3;
  tileBlock4$$2[addressFlipped$$2 | 4] = tileBlock2$$2[address$$5 | 4] = tileBlock3$$2[addressFlipped$$2 | 3] = tileBlock1$$2[address$$5 | 3] = (lineCopy$$3 & 4096) >> 11 | (lineCopy$$3 & 16) >> 4;
  tileBlock4$$2[addressFlipped$$2 | 5] = tileBlock2$$2[address$$5 | 5] = tileBlock3$$2[addressFlipped$$2 | 2] = tileBlock1$$2[address$$5 | 2] = (lineCopy$$3 & 8192) >> 12 | (lineCopy$$3 & 32) >> 5;
  tileBlock4$$2[addressFlipped$$2 | 6] = tileBlock2$$2[address$$5 | 6] = tileBlock3$$2[addressFlipped$$2 | 1] = tileBlock1$$2[address$$5 | 1] = (lineCopy$$3 & 16384) >> 13 | (lineCopy$$3 & 64) >> 6;
  tileBlock4$$2[addressFlipped$$2 | 7] = tileBlock2$$2[address$$5 | 7] = tileBlock3$$2[addressFlipped$$2] = tileBlock1$$2[address$$5] = (lineCopy$$3 & 32768) >> 14 | (lineCopy$$3 & 128) >> 7;
  return;
}
function v704(vramAddress) {
  var address$$4 = vramAddress >> 4;
  var tileBlock1$$1 = this.tileCache[address$$4];
  var tileBlock2$$1 = this.tileCache[512 | address$$4];
  var tileBlock3$$1 = this.tileCache[1024 | address$$4];
  var tileBlock4$$1 = this.tileCache[1536 | address$$4];
  var lineCopy$$2 = 0;
  vramAddress = vramAddress | 32768;
  address$$4 = 0;
  var addressFlipped$$1 = 56;
  var v1861 = addressFlipped$$1 > -1;
  do {
    lineCopy$$2 = this.memory[1 | vramAddress] << 8 | this.memory[vramAddress];
    tileBlock4$$1[addressFlipped$$1] = tileBlock2$$1[address$$4] = tileBlock3$$1[addressFlipped$$1 | 7] = tileBlock1$$1[address$$4 | 7] = (lineCopy$$2 & 256) >> 7 | lineCopy$$2 & 1;
    tileBlock4$$1[addressFlipped$$1 | 1] = tileBlock2$$1[address$$4 | 1] = tileBlock3$$1[addressFlipped$$1 | 6] = tileBlock1$$1[address$$4 | 6] = (lineCopy$$2 & 512) >> 8 | (lineCopy$$2 & 2) >> 1;
    tileBlock4$$1[addressFlipped$$1 | 2] = tileBlock2$$1[address$$4 | 2] = tileBlock3$$1[addressFlipped$$1 | 5] = tileBlock1$$1[address$$4 | 5] = (lineCopy$$2 & 1024) >> 9 | (lineCopy$$2 & 4) >> 2;
    tileBlock4$$1[addressFlipped$$1 | 3] = tileBlock2$$1[address$$4 | 3] = tileBlock3$$1[addressFlipped$$1 | 4] = tileBlock1$$1[address$$4 | 4] = (lineCopy$$2 & 2048) >> 10 | (lineCopy$$2 & 8) >> 3;
    tileBlock4$$1[addressFlipped$$1 | 4] = tileBlock2$$1[address$$4 | 4] = tileBlock3$$1[addressFlipped$$1 | 3] = tileBlock1$$1[address$$4 | 3] = (lineCopy$$2 & 4096) >> 11 | (lineCopy$$2 & 16) >> 4;
    tileBlock4$$1[addressFlipped$$1 | 5] = tileBlock2$$1[address$$4 | 5] = tileBlock3$$1[addressFlipped$$1 | 2] = tileBlock1$$1[address$$4 | 2] = (lineCopy$$2 & 8192) >> 12 | (lineCopy$$2 & 32) >> 5;
    tileBlock4$$1[addressFlipped$$1 | 6] = tileBlock2$$1[address$$4 | 6] = tileBlock3$$1[addressFlipped$$1 | 1] = tileBlock1$$1[address$$4 | 1] = (lineCopy$$2 & 16384) >> 13 | (lineCopy$$2 & 64) >> 6;
    tileBlock4$$1[addressFlipped$$1 | 7] = tileBlock2$$1[address$$4 | 7] = tileBlock3$$1[addressFlipped$$1] = tileBlock1$$1[address$$4] = (lineCopy$$2 & 32768) >> 14 | (lineCopy$$2 & 128) >> 7;
    address$$4 = address$$4 + 8;
    addressFlipped$$1 = addressFlipped$$1 - 8;
    vramAddress = vramAddress + 2;
    v1861 = addressFlipped$$1 > -1;
  } while (v1861);
  return;
}
function v703(address$$3) {
  var lineCopy$$1 = this.memory[1 | address$$3] << 8 | this.memory[40958 & address$$3];
  address$$3 = address$$3 & 8190;
  var tileBlock1 = this.tileCache[address$$3 >> 4];
  var tileBlock2 = this.tileCache[512 | address$$3 >> 4];
  var tileBlock3 = this.tileCache[1024 | address$$3 >> 4];
  var tileBlock4 = this.tileCache[1536 | address$$3 >> 4];
  address$$3 = (address$$3 & 14) << 2;
  var addressFlipped = 56 - address$$3;
  tileBlock4[addressFlipped] = JAM.set(tileBlock2, address$$3, tileBlock3[addressFlipped | 7] = tileBlock1[address$$3 | 7] = (lineCopy$$1 & 256) >> 7 | lineCopy$$1 & 1);
  tileBlock4[addressFlipped | 1] = tileBlock2[address$$3 | 1] = tileBlock3[addressFlipped | 6] = tileBlock1[address$$3 | 6] = (lineCopy$$1 & 512) >> 8 | (lineCopy$$1 & 2) >> 1;
  tileBlock4[addressFlipped | 2] = tileBlock2[address$$3 | 2] = tileBlock3[addressFlipped | 5] = tileBlock1[address$$3 | 5] = (lineCopy$$1 & 1024) >> 9 | (lineCopy$$1 & 4) >> 2;
  tileBlock4[addressFlipped | 3] = tileBlock2[address$$3 | 3] = tileBlock3[addressFlipped | 4] = tileBlock1[address$$3 | 4] = (lineCopy$$1 & 2048) >> 10 | (lineCopy$$1 & 8) >> 3;
  tileBlock4[addressFlipped | 4] = tileBlock2[address$$3 | 4] = tileBlock3[addressFlipped | 3] = tileBlock1[address$$3 | 3] = (lineCopy$$1 & 4096) >> 11 | (lineCopy$$1 & 16) >> 4;
  tileBlock4[addressFlipped | 5] = tileBlock2[address$$3 | 5] = tileBlock3[addressFlipped | 2] = tileBlock1[address$$3 | 2] = (lineCopy$$1 & 8192) >> 12 | (lineCopy$$1 & 32) >> 5;
  tileBlock4[addressFlipped | 6] = tileBlock2[address$$3 | 6] = tileBlock3[addressFlipped | 1] = tileBlock1[address$$3 | 1] = (lineCopy$$1 & 16384) >> 13 | (lineCopy$$1 & 64) >> 6;
  tileBlock4[addressFlipped | 7] = tileBlock2[address$$3 | 7] = tileBlock3[addressFlipped] = tileBlock1[address$$3] = (lineCopy$$1 & 32768) >> 14 | (lineCopy$$1 & 128) >> 7;
  return;
}
function v702(address$$2) {
  var lineCopy = this.memory[1 | address$$2] << 8 | this.memory[40958 & address$$2];
  var tileBlock = this.tileCache[(address$$2 & 8176) >> 4];
  address$$2 = (address$$2 & 14) << 2;
  tileBlock[address$$2 | 7] = (lineCopy & 256) >> 7 | lineCopy & 1;
  tileBlock[address$$2 | 6] = (lineCopy & 512) >> 8 | (lineCopy & 2) >> 1;
  tileBlock[address$$2 | 5] = (lineCopy & 1024) >> 9 | (lineCopy & 4) >> 2;
  tileBlock[address$$2 | 4] = (lineCopy & 2048) >> 10 | (lineCopy & 8) >> 3;
  tileBlock[address$$2 | 3] = (lineCopy & 4096) >> 11 | (lineCopy & 16) >> 4;
  tileBlock[address$$2 | 2] = (lineCopy & 8192) >> 12 | (lineCopy & 32) >> 5;
  tileBlock[address$$2 | 1] = (lineCopy & 16384) >> 13 | (lineCopy & 64) >> 6;
  tileBlock[address$$2] = (lineCopy & 32768) >> 14 | (lineCopy & 128) >> 7;
  return;
}
function v701(scanlineToRender$$9) {
  if (this.gfxSpriteShow) {
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
    if (this.gfxSpriteNormalHeight) {
      var v6171 = OAMAddress$$2 < 65184;
      if (v6171) {
        v6171 = spriteCount$$2 < 10;
      }
      var v1915 = v6171;
      for (;v1915;) {
        yoffset$$5 = lineAdjusted$$2 - this.memory[OAMAddress$$2];
        if ((yoffset$$5 & 7) == yoffset$$5) {
          xcoord$$1 = this.memory[OAMAddress$$2 | 1] - 8;
          endX = JAM.call(Math.min, Math, [160, xcoord$$1 + 8], JAM.policy.p1);
          attrCode$$5 = this.memory[OAMAddress$$2 | 3];
          palette$$5 = (attrCode$$5 & 7) << 2;
          tile$$7 = this.tileCache[(attrCode$$5 & 8) << 8 | (attrCode$$5 & 96) << 4 | this.memory[OAMAddress$$2 | 2]];
          var v1903;
          if (xcoord$$1 > 0) {
            v1903 = xcoord$$1;
          } else {
            v1903 = 0;
          }
          xCounter = v1903;
          xcoord$$1 = xcoord$$1 - (yoffset$$5 << 3);
          currentPixel$$1 = this.pixelStart + xCounter;
          var v1913 = xCounter < endX;
          for (;v1913;) {
            if (this.frameBuffer[currentPixel$$1] >= 33554432) {
              data$$31 = tile$$7[xCounter - xcoord$$1];
              if (data$$31 > 0) {
                JAM.set(this.frameBuffer, currentPixel$$1, this.gbcOBJPalette[palette$$5 | data$$31]);
              }
            } else {
              if (this.frameBuffer[currentPixel$$1] < 16777216) {
                data$$31 = tile$$7[xCounter - xcoord$$1];
                var v6184 = data$$31 > 0;
                if (v6184) {
                  v6184 = attrCode$$5 < 128;
                }
                if (v6184) {
                  JAM.set(this.frameBuffer, currentPixel$$1, this.gbcOBJPalette[palette$$5 | data$$31]);
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
        yoffset$$5 = lineAdjusted$$2 - this.memory[OAMAddress$$2];
        if ((yoffset$$5 & 15) == yoffset$$5) {
          xcoord$$1 = this.memory[OAMAddress$$2 | 1] - 8;
          endX = JAM.call(Math.min, Math, [160, xcoord$$1 + 8], JAM.policy.p1);
          attrCode$$5 = this.memory[OAMAddress$$2 | 3];
          palette$$5 = (attrCode$$5 & 7) << 2;
          if ((attrCode$$5 & 64) == (64 & yoffset$$5 << 3)) {
            tile$$7 = this.tileCache[(attrCode$$5 & 8) << 8 | (attrCode$$5 & 96) << 4 | this.memory[OAMAddress$$2 | 2] & 254];
          } else {
            tile$$7 = this.tileCache[(attrCode$$5 & 8) << 8 | (attrCode$$5 & 96) << 4 | this.memory[OAMAddress$$2 | 2] | 1];
          }
          var v1927;
          if (xcoord$$1 > 0) {
            v1927 = xcoord$$1;
          } else {
            v1927 = 0;
          }
          xCounter = v1927;
          xcoord$$1 = xcoord$$1 - ((yoffset$$5 & 7) << 3);
          currentPixel$$1 = this.pixelStart + xCounter;
          var v1937 = xCounter < endX;
          for (;v1937;) {
            if (this.frameBuffer[currentPixel$$1] >= 33554432) {
              data$$31 = tile$$7[xCounter - xcoord$$1];
              if (data$$31 > 0) {
                JAM.set(this.frameBuffer, currentPixel$$1, this.gbcOBJPalette[palette$$5 | data$$31]);
              }
            } else {
              if (this.frameBuffer[currentPixel$$1] < 16777216) {
                data$$31 = tile$$7[xCounter - xcoord$$1];
                var v6204 = data$$31 > 0;
                if (v6204) {
                  v6204 = attrCode$$5 < 128;
                }
                if (v6204) {
                  JAM.set(this.frameBuffer, currentPixel$$1, this.gbcOBJPalette[palette$$5 | data$$31]);
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
    diff = scanlineToRender$$8 - this.memory[address$$1];
    if ((diff & drawableRange) == diff) {
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
  if (this.gfxSpriteShow) {
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
    if (this.gfxSpriteNormalHeight) {
      length$$18 = JAM.call(this.findLowestSpriteDrawable, this, [lineAdjusted$$1, 7], JAM.policy.p1);
      var v1975 = spriteCount < length$$18;
      for (;v1975;) {
        OAMAddress$$1 = this.OAMAddressCache[spriteCount];
        yoffset$$4 = lineAdjusted$$1 - this.memory[OAMAddress$$1] << 3;
        attrCode$$4 = this.memory[OAMAddress$$1 | 3];
        palette$$4 = (attrCode$$4 & 16) >> 2;
        tile$$6 = this.tileCache[(attrCode$$4 & 96) << 4 | this.memory[OAMAddress$$1 | 2]];
        linePixel = xCoordStart = this.memory[OAMAddress$$1 | 1];
        xCoordEnd = JAM.call(Math.min, Math, [168 - linePixel, 8], JAM.policy.p1);
        var v1960;
        if (linePixel > 7) {
          v1960 = 0;
        } else {
          v1960 = 8 - linePixel;
        }
        xcoord = v1960;
        var v1961 = this.pixelStart;
        var v6216;
        if (linePixel > 8) {
          v6216 = linePixel - 8;
        } else {
          v6216 = 0;
        }
        currentPixel = v1961 + v6216;
        var v1974 = xcoord < xCoordEnd;
        for (;v1974;) {
          if (this.sortBuffer[linePixel] > xCoordStart) {
            if (this.frameBuffer[currentPixel] >= 33554432) {
              data$$30 = tile$$6[yoffset$$4 | xcoord];
              if (data$$30 > 0) {
                JAM.set(this.frameBuffer, currentPixel, this.OBJPalette[palette$$4 | data$$30]);
                JAM.set(this.sortBuffer, linePixel, xCoordStart);
              }
            } else {
              if (this.frameBuffer[currentPixel] < 16777216) {
                data$$30 = tile$$6[yoffset$$4 | xcoord];
                var v6222 = data$$30 > 0;
                if (v6222) {
                  v6222 = attrCode$$4 < 128;
                }
                if (v6222) {
                  JAM.set(this.frameBuffer, currentPixel, this.OBJPalette[palette$$4 | data$$30]);
                  JAM.set(this.sortBuffer, linePixel, xCoordStart);
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
      length$$18 = JAM.call(this.findLowestSpriteDrawable, this, [lineAdjusted$$1, 15], JAM.policy.p1);
      var v2004 = spriteCount < length$$18;
      for (;v2004;) {
        OAMAddress$$1 = this.OAMAddressCache[spriteCount];
        yoffset$$4 = lineAdjusted$$1 - this.memory[OAMAddress$$1] << 3;
        attrCode$$4 = this.memory[OAMAddress$$1 | 3];
        palette$$4 = (attrCode$$4 & 16) >> 2;
        if ((attrCode$$4 & 64) == (64 & yoffset$$4)) {
          tile$$6 = this.tileCache[(attrCode$$4 & 96) << 4 | this.memory[OAMAddress$$1 | 2] & 254];
        } else {
          tile$$6 = this.tileCache[(attrCode$$4 & 96) << 4 | this.memory[OAMAddress$$1 | 2] | 1];
        }
        yoffset$$4 = yoffset$$4 & 63;
        linePixel = xCoordStart = this.memory[OAMAddress$$1 | 1];
        xCoordEnd = JAM.call(Math.min, Math, [168 - linePixel, 8], JAM.policy.p1);
        var v1989;
        if (linePixel > 7) {
          v1989 = 0;
        } else {
          v1989 = 8 - linePixel;
        }
        xcoord = v1989;
        var v1990 = this.pixelStart;
        var v6232;
        if (linePixel > 8) {
          v6232 = linePixel - 8;
        } else {
          v6232 = 0;
        }
        currentPixel = v1990 + v6232;
        var v2003 = xcoord < xCoordEnd;
        for (;v2003;) {
          if (this.sortBuffer[linePixel] > xCoordStart) {
            if (this.frameBuffer[currentPixel] >= 33554432) {
              data$$30 = tile$$6[yoffset$$4 | xcoord];
              if (data$$30 > 0) {
                JAM.set(this.frameBuffer, currentPixel, this.OBJPalette[palette$$4 | data$$30]);
                JAM.set(this.sortBuffer, linePixel, xCoordStart);
              }
            } else {
              if (this.frameBuffer[currentPixel] < 16777216) {
                data$$30 = tile$$6[yoffset$$4 | xcoord];
                var v6238 = data$$30 > 0;
                if (v6238) {
                  v6238 = attrCode$$4 < 128;
                }
                if (v6238) {
                  JAM.set(this.frameBuffer, currentPixel, this.OBJPalette[palette$$4 | data$$30]);
                  JAM.set(this.sortBuffer, linePixel, xCoordStart);
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
  if (this.gfxWindowDisplay) {
    var scrollYAdjusted$$5 = scanlineToRender$$6 - this.windowY;
    if (scrollYAdjusted$$5 >= 0) {
      var v2008;
      if (this.windowX > 0) {
        v2008 = this.windowX + this.currentX;
      } else {
        v2008 = this.currentX;
      }
      var scrollXRangeAdjusted$$2 = v2008;
      var pixelPosition$$7 = this.pixelStart + scrollXRangeAdjusted$$2;
      var pixelPositionEnd$$5 = this.pixelStart + this.pixelEnd;
      if (pixelPosition$$7 < pixelPositionEnd$$5) {
        var tileYLine$$5 = (scrollYAdjusted$$5 & 7) << 3;
        var tileNumber$$6 = (this.gfxWindowCHRBankPosition | (scrollYAdjusted$$5 & 248) << 2) + (this.currentX >> 3);
        var chrCode$$5 = this.BGCHRBank1[tileNumber$$6];
        if (chrCode$$5 < this.gfxBackgroundBankOffset) {
          chrCode$$5 = chrCode$$5 | 256;
        }
        var attrCode$$3 = this.BGCHRBank2[tileNumber$$6];
        var tile$$5 = this.tileCache[(attrCode$$3 & 8) << 8 | (attrCode$$3 & 96) << 4 | chrCode$$5];
        var palette$$3 = (attrCode$$3 & 7) << 2;
        var texel$$5 = scrollXRangeAdjusted$$2 - this.windowX & 7;
        scrollXRangeAdjusted$$2 = JAM.call(Math.min, Math, [8, texel$$5 + pixelPositionEnd$$5 - pixelPosition$$7], JAM.policy.p1);
        var v2025 = texel$$5 < scrollXRangeAdjusted$$2;
        for (;v2025;) {
          var v2023 = this.frameBuffer;
          var v2024 = pixelPosition$$7;
          pixelPosition$$7 = pixelPosition$$7 + 1;
          var v6251 = this.gbcBGPalette;
          var v10302 = texel$$5;
          texel$$5 = texel$$5 + 1;
          JAM.set(v2023, v2024, v6251[palette$$3 | tile$$5[tileYLine$$5 | v10302]]);
          v2025 = texel$$5 < scrollXRangeAdjusted$$2;
        }
        scrollXRangeAdjusted$$2 = tileNumber$$6 + (pixelPositionEnd$$5 - pixelPosition$$7 >> 3);
        var v2050 = tileNumber$$6 < scrollXRangeAdjusted$$2;
        for (;v2050;) {
          chrCode$$5 = this.BGCHRBank1[tileNumber$$6 = tileNumber$$6 + 1];
          if (chrCode$$5 < this.gfxBackgroundBankOffset) {
            chrCode$$5 = chrCode$$5 | 256;
          }
          attrCode$$3 = this.BGCHRBank2[tileNumber$$6];
          tile$$5 = this.tileCache[(attrCode$$3 & 8) << 8 | (attrCode$$3 & 96) << 4 | chrCode$$5];
          palette$$3 = (attrCode$$3 & 7) << 2;
          texel$$5 = tileYLine$$5;
          var v2034 = this.frameBuffer;
          var v2035 = pixelPosition$$7;
          pixelPosition$$7 = pixelPosition$$7 + 1;
          var v6256 = this.gbcBGPalette;
          var v9804 = texel$$5;
          texel$$5 = texel$$5 + 1;
          JAM.set(v2034, v2035, v6256[palette$$3 | tile$$5[v9804]]);
          var v2036 = this.frameBuffer;
          var v2037 = pixelPosition$$7;
          pixelPosition$$7 = pixelPosition$$7 + 1;
          var v6258 = this.gbcBGPalette;
          var v9805 = texel$$5;
          texel$$5 = texel$$5 + 1;
          JAM.set(v2036, v2037, v6258[palette$$3 | tile$$5[v9805]]);
          var v2038 = this.frameBuffer;
          var v2039 = pixelPosition$$7;
          pixelPosition$$7 = pixelPosition$$7 + 1;
          var v6260 = this.gbcBGPalette;
          var v9806 = texel$$5;
          texel$$5 = texel$$5 + 1;
          JAM.set(v2038, v2039, v6260[palette$$3 | tile$$5[v9806]]);
          var v2040 = this.frameBuffer;
          var v2041 = pixelPosition$$7;
          pixelPosition$$7 = pixelPosition$$7 + 1;
          var v6262 = this.gbcBGPalette;
          var v9807 = texel$$5;
          texel$$5 = texel$$5 + 1;
          JAM.set(v2040, v2041, v6262[palette$$3 | tile$$5[v9807]]);
          var v2042 = this.frameBuffer;
          var v2043 = pixelPosition$$7;
          pixelPosition$$7 = pixelPosition$$7 + 1;
          var v6264 = this.gbcBGPalette;
          var v9808 = texel$$5;
          texel$$5 = texel$$5 + 1;
          JAM.set(v2042, v2043, v6264[palette$$3 | tile$$5[v9808]]);
          var v2044 = this.frameBuffer;
          var v2045 = pixelPosition$$7;
          pixelPosition$$7 = pixelPosition$$7 + 1;
          var v6266 = this.gbcBGPalette;
          var v9809 = texel$$5;
          texel$$5 = texel$$5 + 1;
          JAM.set(v2044, v2045, v6266[palette$$3 | tile$$5[v9809]]);
          var v2046 = this.frameBuffer;
          var v2047 = pixelPosition$$7;
          pixelPosition$$7 = pixelPosition$$7 + 1;
          var v6268 = this.gbcBGPalette;
          var v9810 = texel$$5;
          texel$$5 = texel$$5 + 1;
          JAM.set(v2046, v2047, v6268[palette$$3 | tile$$5[v9810]]);
          var v2048 = this.frameBuffer;
          var v2049 = pixelPosition$$7;
          pixelPosition$$7 = pixelPosition$$7 + 1;
          JAM.set(v2048, v2049, this.gbcBGPalette[palette$$3 | tile$$5[texel$$5]]);
          v2050 = tileNumber$$6 < scrollXRangeAdjusted$$2;
        }
        if (pixelPosition$$7 < pixelPositionEnd$$5) {
          chrCode$$5 = this.BGCHRBank1[tileNumber$$6 = tileNumber$$6 + 1];
          if (chrCode$$5 < this.gfxBackgroundBankOffset) {
            chrCode$$5 = chrCode$$5 | 256;
          }
          attrCode$$3 = this.BGCHRBank2[tileNumber$$6];
          tile$$5 = this.tileCache[(attrCode$$3 & 8) << 8 | (attrCode$$3 & 96) << 4 | chrCode$$5];
          palette$$3 = (attrCode$$3 & 7) << 2;
          switch(pixelPositionEnd$$5 - pixelPosition$$7) {
            case 7:
              JAM.set(this.frameBuffer, pixelPosition$$7 + 6, this.gbcBGPalette[palette$$3 | tile$$5[tileYLine$$5 | 6]]);
            case 6:
              JAM.set(this.frameBuffer, pixelPosition$$7 + 5, this.gbcBGPalette[palette$$3 | tile$$5[tileYLine$$5 | 5]]);
            case 5:
              JAM.set(this.frameBuffer, pixelPosition$$7 + 4, this.gbcBGPalette[palette$$3 | tile$$5[tileYLine$$5 | 4]]);
            case 4:
              JAM.set(this.frameBuffer, pixelPosition$$7 + 3, this.gbcBGPalette[palette$$3 | tile$$5[tileYLine$$5 | 3]]);
            case 3:
              JAM.set(this.frameBuffer, pixelPosition$$7 + 2, this.gbcBGPalette[palette$$3 | tile$$5[tileYLine$$5 | 2]]);
            case 2:
              JAM.set(this.frameBuffer, pixelPosition$$7 + 1, this.gbcBGPalette[palette$$3 | tile$$5[tileYLine$$5 | 1]]);
            case 1:
              JAM.set(this.frameBuffer, pixelPosition$$7, this.gbcBGPalette[palette$$3 | tile$$5[tileYLine$$5]]);
          }
        }
      }
    }
  }
  return;
}
function v697(scanlineToRender$$5) {
  if (this.gfxWindowDisplay) {
    var scrollYAdjusted$$4 = scanlineToRender$$5 - this.windowY;
    if (scrollYAdjusted$$4 >= 0) {
      var v2077;
      if (this.windowX > 0) {
        v2077 = this.windowX + this.currentX;
      } else {
        v2077 = this.currentX;
      }
      var scrollXRangeAdjusted$$1 = v2077;
      var pixelPosition$$6 = this.pixelStart + scrollXRangeAdjusted$$1;
      var pixelPositionEnd$$4 = this.pixelStart + this.pixelEnd;
      if (pixelPosition$$6 < pixelPositionEnd$$4) {
        var tileYLine$$4 = (scrollYAdjusted$$4 & 7) << 3;
        var tileNumber$$5 = (this.gfxWindowCHRBankPosition | (scrollYAdjusted$$4 & 248) << 2) + (this.currentX >> 3);
        var chrCode$$4 = this.BGCHRBank1[tileNumber$$5];
        if (chrCode$$4 < this.gfxBackgroundBankOffset) {
          chrCode$$4 = chrCode$$4 | 256;
        }
        var attrCode$$2 = this.BGCHRBank2[tileNumber$$5];
        var tile$$4 = this.tileCache[(attrCode$$2 & 8) << 8 | (attrCode$$2 & 96) << 4 | chrCode$$4];
        var palette$$2 = (attrCode$$2 & 7) << 2 | (attrCode$$2 & 128) >> 2;
        var texel$$4 = scrollXRangeAdjusted$$1 - this.windowX & 7;
        scrollXRangeAdjusted$$1 = JAM.call(Math.min, Math, [8, texel$$4 + pixelPositionEnd$$4 - pixelPosition$$6], JAM.policy.p1);
        var v2095 = texel$$4 < scrollXRangeAdjusted$$1;
        for (;v2095;) {
          var v2093 = this.frameBuffer;
          var v2094 = pixelPosition$$6;
          pixelPosition$$6 = pixelPosition$$6 + 1;
          var v6300 = this.gbcBGPalette;
          var v10303 = texel$$4;
          texel$$4 = texel$$4 + 1;
          JAM.set(v2093, v2094, v6300[palette$$2 | tile$$4[tileYLine$$4 | v10303]]);
          v2095 = texel$$4 < scrollXRangeAdjusted$$1;
        }
        scrollXRangeAdjusted$$1 = tileNumber$$5 + (pixelPositionEnd$$4 - pixelPosition$$6 >> 3);
        var v2121 = tileNumber$$5 < scrollXRangeAdjusted$$1;
        for (;v2121;) {
          chrCode$$4 = this.BGCHRBank1[tileNumber$$5 = tileNumber$$5 + 1];
          if (chrCode$$4 < this.gfxBackgroundBankOffset) {
            chrCode$$4 = chrCode$$4 | 256;
          }
          attrCode$$2 = this.BGCHRBank2[tileNumber$$5];
          tile$$4 = this.tileCache[(attrCode$$2 & 8) << 8 | (attrCode$$2 & 96) << 4 | chrCode$$4];
          palette$$2 = (attrCode$$2 & 7) << 2 | (attrCode$$2 & 128) >> 2;
          texel$$4 = tileYLine$$4;
          var v2105 = this.frameBuffer;
          var v2106 = pixelPosition$$6;
          pixelPosition$$6 = pixelPosition$$6 + 1;
          var v6307 = this.gbcBGPalette;
          var v9824 = texel$$4;
          texel$$4 = texel$$4 + 1;
          JAM.set(v2105, v2106, v6307[palette$$2 | tile$$4[v9824]]);
          var v2107 = this.frameBuffer;
          var v2108 = pixelPosition$$6;
          pixelPosition$$6 = pixelPosition$$6 + 1;
          var v6309 = this.gbcBGPalette;
          var v9825 = texel$$4;
          texel$$4 = texel$$4 + 1;
          JAM.set(v2107, v2108, v6309[palette$$2 | tile$$4[v9825]]);
          var v2109 = this.frameBuffer;
          var v2110 = pixelPosition$$6;
          pixelPosition$$6 = pixelPosition$$6 + 1;
          var v6311 = this.gbcBGPalette;
          var v9826 = texel$$4;
          texel$$4 = texel$$4 + 1;
          JAM.set(v2109, v2110, v6311[palette$$2 | tile$$4[v9826]]);
          var v2111 = this.frameBuffer;
          var v2112 = pixelPosition$$6;
          pixelPosition$$6 = pixelPosition$$6 + 1;
          var v6313 = this.gbcBGPalette;
          var v9827 = texel$$4;
          texel$$4 = texel$$4 + 1;
          JAM.set(v2111, v2112, v6313[palette$$2 | tile$$4[v9827]]);
          var v2113 = this.frameBuffer;
          var v2114 = pixelPosition$$6;
          pixelPosition$$6 = pixelPosition$$6 + 1;
          var v6315 = this.gbcBGPalette;
          var v9828 = texel$$4;
          texel$$4 = texel$$4 + 1;
          JAM.set(v2113, v2114, v6315[palette$$2 | tile$$4[v9828]]);
          var v2115 = this.frameBuffer;
          var v2116 = pixelPosition$$6;
          pixelPosition$$6 = pixelPosition$$6 + 1;
          var v6317 = this.gbcBGPalette;
          var v9829 = texel$$4;
          texel$$4 = texel$$4 + 1;
          JAM.set(v2115, v2116, v6317[palette$$2 | tile$$4[v9829]]);
          var v2117 = this.frameBuffer;
          var v2118 = pixelPosition$$6;
          pixelPosition$$6 = pixelPosition$$6 + 1;
          var v6319 = this.gbcBGPalette;
          var v9830 = texel$$4;
          texel$$4 = texel$$4 + 1;
          JAM.set(v2117, v2118, v6319[palette$$2 | tile$$4[v9830]]);
          var v2119 = this.frameBuffer;
          var v2120 = pixelPosition$$6;
          pixelPosition$$6 = pixelPosition$$6 + 1;
          JAM.set(v2119, v2120, this.gbcBGPalette[palette$$2 | tile$$4[texel$$4]]);
          v2121 = tileNumber$$5 < scrollXRangeAdjusted$$1;
        }
        if (pixelPosition$$6 < pixelPositionEnd$$4) {
          chrCode$$4 = this.BGCHRBank1[tileNumber$$5 = tileNumber$$5 + 1];
          if (chrCode$$4 < this.gfxBackgroundBankOffset) {
            chrCode$$4 = chrCode$$4 | 256;
          }
          attrCode$$2 = this.BGCHRBank2[tileNumber$$5];
          tile$$4 = this.tileCache[(attrCode$$2 & 8) << 8 | (attrCode$$2 & 96) << 4 | chrCode$$4];
          palette$$2 = (attrCode$$2 & 7) << 2 | (attrCode$$2 & 128) >> 2;
          switch(pixelPositionEnd$$4 - pixelPosition$$6) {
            case 7:
              JAM.set(this.frameBuffer, pixelPosition$$6 + 6, this.gbcBGPalette[palette$$2 | tile$$4[tileYLine$$4 | 6]]);
            case 6:
              JAM.set(this.frameBuffer, pixelPosition$$6 + 5, this.gbcBGPalette[palette$$2 | tile$$4[tileYLine$$4 | 5]]);
            case 5:
              JAM.set(this.frameBuffer, pixelPosition$$6 + 4, this.gbcBGPalette[palette$$2 | tile$$4[tileYLine$$4 | 4]]);
            case 4:
              JAM.set(this.frameBuffer, pixelPosition$$6 + 3, this.gbcBGPalette[palette$$2 | tile$$4[tileYLine$$4 | 3]]);
            case 3:
              JAM.set(this.frameBuffer, pixelPosition$$6 + 2, this.gbcBGPalette[palette$$2 | tile$$4[tileYLine$$4 | 2]]);
            case 2:
              JAM.set(this.frameBuffer, pixelPosition$$6 + 1, this.gbcBGPalette[palette$$2 | tile$$4[tileYLine$$4 | 1]]);
            case 1:
              JAM.set(this.frameBuffer, pixelPosition$$6, this.gbcBGPalette[palette$$2 | tile$$4[tileYLine$$4]]);
          }
        }
      }
    }
  }
  return;
}
function v696(scanlineToRender$$4) {
  if (this.gfxWindowDisplay) {
    var scrollYAdjusted$$3 = scanlineToRender$$4 - this.windowY;
    if (scrollYAdjusted$$3 >= 0) {
      var v2149;
      if (this.windowX > 0) {
        v2149 = this.windowX + this.currentX;
      } else {
        v2149 = this.currentX;
      }
      var scrollXRangeAdjusted = v2149;
      var pixelPosition$$5 = this.pixelStart + scrollXRangeAdjusted;
      var pixelPositionEnd$$3 = this.pixelStart + this.pixelEnd;
      if (pixelPosition$$5 < pixelPositionEnd$$3) {
        var tileYLine$$3 = (scrollYAdjusted$$3 & 7) << 3;
        var tileNumber$$4 = (this.gfxWindowCHRBankPosition | (scrollYAdjusted$$3 & 248) << 2) + (this.currentX >> 3);
        var chrCode$$3 = this.BGCHRBank1[tileNumber$$4];
        if (chrCode$$3 < this.gfxBackgroundBankOffset) {
          chrCode$$3 = chrCode$$3 | 256;
        }
        var tile$$3 = this.tileCache[chrCode$$3];
        var texel$$3 = scrollXRangeAdjusted - this.windowX & 7;
        scrollXRangeAdjusted = JAM.call(Math.min, Math, [8, texel$$3 + pixelPositionEnd$$3 - pixelPosition$$5], JAM.policy.p1);
        var v2163 = texel$$3 < scrollXRangeAdjusted;
        for (;v2163;) {
          var v2161 = this.frameBuffer;
          var v2162 = pixelPosition$$5;
          pixelPosition$$5 = pixelPosition$$5 + 1;
          var v6350 = this.BGPalette;
          var v9839 = texel$$3;
          texel$$3 = texel$$3 + 1;
          JAM.set(v2161, v2162, v6350[tile$$3[tileYLine$$3 | v9839]]);
          v2163 = texel$$3 < scrollXRangeAdjusted;
        }
        scrollXRangeAdjusted = tileNumber$$4 + (pixelPositionEnd$$3 - pixelPosition$$5 >> 3);
        var v2185 = tileNumber$$4 < scrollXRangeAdjusted;
        for (;v2185;) {
          chrCode$$3 = this.BGCHRBank1[tileNumber$$4 = tileNumber$$4 + 1];
          if (chrCode$$3 < this.gfxBackgroundBankOffset) {
            chrCode$$3 = chrCode$$3 | 256;
          }
          tile$$3 = this.tileCache[chrCode$$3];
          texel$$3 = tileYLine$$3;
          var v2169 = this.frameBuffer;
          var v2170 = pixelPosition$$5;
          pixelPosition$$5 = pixelPosition$$5 + 1;
          var v6354 = this.BGPalette;
          var v8760 = texel$$3;
          texel$$3 = texel$$3 + 1;
          JAM.set(v2169, v2170, v6354[tile$$3[v8760]]);
          var v2171 = this.frameBuffer;
          var v2172 = pixelPosition$$5;
          pixelPosition$$5 = pixelPosition$$5 + 1;
          var v6356 = this.BGPalette;
          var v8761 = texel$$3;
          texel$$3 = texel$$3 + 1;
          JAM.set(v2171, v2172, v6356[tile$$3[v8761]]);
          var v2173 = this.frameBuffer;
          var v2174 = pixelPosition$$5;
          pixelPosition$$5 = pixelPosition$$5 + 1;
          var v6358 = this.BGPalette;
          var v8762 = texel$$3;
          texel$$3 = texel$$3 + 1;
          JAM.set(v2173, v2174, v6358[tile$$3[v8762]]);
          var v2175 = this.frameBuffer;
          var v2176 = pixelPosition$$5;
          pixelPosition$$5 = pixelPosition$$5 + 1;
          var v6360 = this.BGPalette;
          var v8763 = texel$$3;
          texel$$3 = texel$$3 + 1;
          JAM.set(v2175, v2176, v6360[tile$$3[v8763]]);
          var v2177 = this.frameBuffer;
          var v2178 = pixelPosition$$5;
          pixelPosition$$5 = pixelPosition$$5 + 1;
          var v6362 = this.BGPalette;
          var v8764 = texel$$3;
          texel$$3 = texel$$3 + 1;
          JAM.set(v2177, v2178, v6362[tile$$3[v8764]]);
          var v2179 = this.frameBuffer;
          var v2180 = pixelPosition$$5;
          pixelPosition$$5 = pixelPosition$$5 + 1;
          var v6364 = this.BGPalette;
          var v8765 = texel$$3;
          texel$$3 = texel$$3 + 1;
          JAM.set(v2179, v2180, v6364[tile$$3[v8765]]);
          var v2181 = this.frameBuffer;
          var v2182 = pixelPosition$$5;
          pixelPosition$$5 = pixelPosition$$5 + 1;
          var v6366 = this.BGPalette;
          var v8766 = texel$$3;
          texel$$3 = texel$$3 + 1;
          JAM.set(v2181, v2182, v6366[tile$$3[v8766]]);
          var v2183 = this.frameBuffer;
          var v2184 = pixelPosition$$5;
          pixelPosition$$5 = pixelPosition$$5 + 1;
          JAM.set(v2183, v2184, this.BGPalette[tile$$3[texel$$3]]);
          v2185 = tileNumber$$4 < scrollXRangeAdjusted;
        }
        if (pixelPosition$$5 < pixelPositionEnd$$3) {
          chrCode$$3 = this.BGCHRBank1[tileNumber$$4 = tileNumber$$4 + 1];
          if (chrCode$$3 < this.gfxBackgroundBankOffset) {
            chrCode$$3 = chrCode$$3 | 256;
          }
          tile$$3 = this.tileCache[chrCode$$3];
          switch(pixelPositionEnd$$3 - pixelPosition$$5) {
            case 7:
              JAM.set(this.frameBuffer, pixelPosition$$5 + 6, this.BGPalette[tile$$3[tileYLine$$3 | 6]]);
            case 6:
              JAM.set(this.frameBuffer, pixelPosition$$5 + 5, this.BGPalette[tile$$3[tileYLine$$3 | 5]]);
            case 5:
              JAM.set(this.frameBuffer, pixelPosition$$5 + 4, this.BGPalette[tile$$3[tileYLine$$3 | 4]]);
            case 4:
              JAM.set(this.frameBuffer, pixelPosition$$5 + 3, this.BGPalette[tile$$3[tileYLine$$3 | 3]]);
            case 3:
              JAM.set(this.frameBuffer, pixelPosition$$5 + 2, this.BGPalette[tile$$3[tileYLine$$3 | 2]]);
            case 2:
              JAM.set(this.frameBuffer, pixelPosition$$5 + 1, this.BGPalette[tile$$3[tileYLine$$3 | 1]]);
            case 1:
              JAM.set(this.frameBuffer, pixelPosition$$5, this.BGPalette[tile$$3[tileYLine$$3]]);
          }
        }
      }
    }
  }
  return;
}
function v695(scanlineToRender$$3) {
  var scrollYAdjusted$$2 = this.backgroundY + scanlineToRender$$3 & 255;
  var tileYLine$$2 = (scrollYAdjusted$$2 & 7) << 3;
  var tileYDown$$2 = this.gfxBackgroundCHRBankPosition | (scrollYAdjusted$$2 & 248) << 2;
  var scrollXAdjusted$$2 = this.backgroundX + this.currentX & 255;
  var pixelPosition$$4 = this.pixelStart + this.currentX;
  var v2215 = this.pixelStart;
  var v6389;
  var v9840 = this.gfxWindowDisplay;
  if (v9840) {
    v9840 = scanlineToRender$$3 - this.windowY >= 0;
  }
  if (v9840) {
    v6389 = JAM.call(Math.min, Math, [JAM.call(Math.max, Math, [this.windowX, 0], JAM.policy.p1) + this.currentX, this.pixelEnd], JAM.policy.p1);
  } else {
    v6389 = this.pixelEnd;
  }
  var pixelPositionEnd$$2 = v2215 + v6389;
  var tileNumber$$3 = tileYDown$$2 + (scrollXAdjusted$$2 >> 3);
  var chrCode$$2 = this.BGCHRBank1[tileNumber$$3];
  if (chrCode$$2 < this.gfxBackgroundBankOffset) {
    chrCode$$2 = chrCode$$2 | 256;
  }
  var attrCode$$1 = this.BGCHRBank2[tileNumber$$3];
  var tile$$2 = this.tileCache[(attrCode$$1 & 8) << 8 | (attrCode$$1 & 96) << 4 | chrCode$$2];
  var palette$$1 = (attrCode$$1 & 7) << 2;
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
    JAM.set(v2224, v2225, v6393[palette$$1 | tile$$2[tileYLine$$2 | v10306]]);
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
  var scrollXAdjustedAligned$$2 = JAM.call(Math.min, Math, [pixelPositionEnd$$2 - pixelPosition$$4, 256 - scrollXAdjusted$$2], JAM.policy.p1) >> 3;
  scrollXAdjusted$$2 = scrollXAdjusted$$2 + (scrollXAdjustedAligned$$2 << 3);
  scrollXAdjustedAligned$$2 = scrollXAdjustedAligned$$2 + tileNumber$$3;
  var v2251 = tileNumber$$3 < scrollXAdjustedAligned$$2;
  for (;v2251;) {
    chrCode$$2 = this.BGCHRBank1[tileNumber$$3 = tileNumber$$3 + 1];
    if (chrCode$$2 < this.gfxBackgroundBankOffset) {
      chrCode$$2 = chrCode$$2 | 256;
    }
    attrCode$$1 = this.BGCHRBank2[tileNumber$$3];
    tile$$2 = this.tileCache[(attrCode$$1 & 8) << 8 | (attrCode$$1 & 96) << 4 | chrCode$$2];
    palette$$1 = (attrCode$$1 & 7) << 2;
    texel$$2 = tileYLine$$2;
    var v2235 = this.frameBuffer;
    var v2236 = pixelPosition$$4;
    pixelPosition$$4 = pixelPosition$$4 + 1;
    var v6401 = this.gbcBGPalette;
    var v9848 = texel$$2;
    texel$$2 = texel$$2 + 1;
    JAM.set(v2235, v2236, v6401[palette$$1 | tile$$2[v9848]]);
    var v2237 = this.frameBuffer;
    var v2238 = pixelPosition$$4;
    pixelPosition$$4 = pixelPosition$$4 + 1;
    var v6403 = this.gbcBGPalette;
    var v9849 = texel$$2;
    texel$$2 = texel$$2 + 1;
    JAM.set(v2237, v2238, v6403[palette$$1 | tile$$2[v9849]]);
    var v2239 = this.frameBuffer;
    var v2240 = pixelPosition$$4;
    pixelPosition$$4 = pixelPosition$$4 + 1;
    var v6405 = this.gbcBGPalette;
    var v9850 = texel$$2;
    texel$$2 = texel$$2 + 1;
    JAM.set(v2239, v2240, v6405[palette$$1 | tile$$2[v9850]]);
    var v2241 = this.frameBuffer;
    var v2242 = pixelPosition$$4;
    pixelPosition$$4 = pixelPosition$$4 + 1;
    var v6407 = this.gbcBGPalette;
    var v9851 = texel$$2;
    texel$$2 = texel$$2 + 1;
    JAM.set(v2241, v2242, v6407[palette$$1 | tile$$2[v9851]]);
    var v2243 = this.frameBuffer;
    var v2244 = pixelPosition$$4;
    pixelPosition$$4 = pixelPosition$$4 + 1;
    var v6409 = this.gbcBGPalette;
    var v9852 = texel$$2;
    texel$$2 = texel$$2 + 1;
    JAM.set(v2243, v2244, v6409[palette$$1 | tile$$2[v9852]]);
    var v2245 = this.frameBuffer;
    var v2246 = pixelPosition$$4;
    pixelPosition$$4 = pixelPosition$$4 + 1;
    var v6411 = this.gbcBGPalette;
    var v9853 = texel$$2;
    texel$$2 = texel$$2 + 1;
    JAM.set(v2245, v2246, v6411[palette$$1 | tile$$2[v9853]]);
    var v2247 = this.frameBuffer;
    var v2248 = pixelPosition$$4;
    pixelPosition$$4 = pixelPosition$$4 + 1;
    var v6413 = this.gbcBGPalette;
    var v9854 = texel$$2;
    texel$$2 = texel$$2 + 1;
    JAM.set(v2247, v2248, v6413[palette$$1 | tile$$2[v9854]]);
    var v2249 = this.frameBuffer;
    var v2250 = pixelPosition$$4;
    pixelPosition$$4 = pixelPosition$$4 + 1;
    JAM.set(v2249, v2250, this.gbcBGPalette[palette$$1 | tile$$2[texel$$2]]);
    v2251 = tileNumber$$3 < scrollXAdjustedAligned$$2;
  }
  if (pixelPosition$$4 < pixelPositionEnd$$2) {
    if (scrollXAdjusted$$2 < 256) {
      chrCode$$2 = this.BGCHRBank1[tileNumber$$3 = tileNumber$$3 + 1];
      if (chrCode$$2 < this.gfxBackgroundBankOffset) {
        chrCode$$2 = chrCode$$2 | 256;
      }
      attrCode$$1 = this.BGCHRBank2[tileNumber$$3];
      tile$$2 = this.tileCache[(attrCode$$1 & 8) << 8 | (attrCode$$1 & 96) << 4 | chrCode$$2];
      palette$$1 = (attrCode$$1 & 7) << 2;
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
        JAM.set(v2259, v2260, this.gbcBGPalette[palette$$1 | tile$$2[texel$$2 = texel$$2 + 1]]);
        ++scrollXAdjusted$$2;
        var v6422 = pixelPosition$$4 < pixelPositionEnd$$2;
        if (v6422) {
          v6422 = scrollXAdjusted$$2 < 256;
        }
        v2261 = v6422;
      }
    }
    scrollXAdjustedAligned$$2 = (pixelPositionEnd$$2 - pixelPosition$$4 >> 3) + tileYDown$$2;
    var v2287 = tileYDown$$2 < scrollXAdjustedAligned$$2;
    for (;v2287;) {
      chrCode$$2 = this.BGCHRBank1[tileYDown$$2];
      if (chrCode$$2 < this.gfxBackgroundBankOffset) {
        chrCode$$2 = chrCode$$2 | 256;
      }
      var v2266 = this.BGCHRBank2;
      var v2267 = tileYDown$$2;
      tileYDown$$2 = tileYDown$$2 + 1;
      attrCode$$1 = v2266[v2267];
      tile$$2 = this.tileCache[(attrCode$$1 & 8) << 8 | (attrCode$$1 & 96) << 4 | chrCode$$2];
      palette$$1 = (attrCode$$1 & 7) << 2;
      texel$$2 = tileYLine$$2;
      var v2271 = this.frameBuffer;
      var v2272 = pixelPosition$$4;
      pixelPosition$$4 = pixelPosition$$4 + 1;
      var v6426 = this.gbcBGPalette;
      var v9860 = texel$$2;
      texel$$2 = texel$$2 + 1;
      JAM.set(v2271, v2272, v6426[palette$$1 | tile$$2[v9860]]);
      var v2273 = this.frameBuffer;
      var v2274 = pixelPosition$$4;
      pixelPosition$$4 = pixelPosition$$4 + 1;
      var v6428 = this.gbcBGPalette;
      var v9861 = texel$$2;
      texel$$2 = texel$$2 + 1;
      JAM.set(v2273, v2274, v6428[palette$$1 | tile$$2[v9861]]);
      var v2275 = this.frameBuffer;
      var v2276 = pixelPosition$$4;
      pixelPosition$$4 = pixelPosition$$4 + 1;
      var v6430 = this.gbcBGPalette;
      var v9862 = texel$$2;
      texel$$2 = texel$$2 + 1;
      JAM.set(v2275, v2276, v6430[palette$$1 | tile$$2[v9862]]);
      var v2277 = this.frameBuffer;
      var v2278 = pixelPosition$$4;
      pixelPosition$$4 = pixelPosition$$4 + 1;
      var v6432 = this.gbcBGPalette;
      var v9863 = texel$$2;
      texel$$2 = texel$$2 + 1;
      JAM.set(v2277, v2278, v6432[palette$$1 | tile$$2[v9863]]);
      var v2279 = this.frameBuffer;
      var v2280 = pixelPosition$$4;
      pixelPosition$$4 = pixelPosition$$4 + 1;
      var v6434 = this.gbcBGPalette;
      var v9864 = texel$$2;
      texel$$2 = texel$$2 + 1;
      JAM.set(v2279, v2280, v6434[palette$$1 | tile$$2[v9864]]);
      var v2281 = this.frameBuffer;
      var v2282 = pixelPosition$$4;
      pixelPosition$$4 = pixelPosition$$4 + 1;
      var v6436 = this.gbcBGPalette;
      var v9865 = texel$$2;
      texel$$2 = texel$$2 + 1;
      JAM.set(v2281, v2282, v6436[palette$$1 | tile$$2[v9865]]);
      var v2283 = this.frameBuffer;
      var v2284 = pixelPosition$$4;
      pixelPosition$$4 = pixelPosition$$4 + 1;
      var v6438 = this.gbcBGPalette;
      var v9866 = texel$$2;
      texel$$2 = texel$$2 + 1;
      JAM.set(v2283, v2284, v6438[palette$$1 | tile$$2[v9866]]);
      var v2285 = this.frameBuffer;
      var v2286 = pixelPosition$$4;
      pixelPosition$$4 = pixelPosition$$4 + 1;
      JAM.set(v2285, v2286, this.gbcBGPalette[palette$$1 | tile$$2[texel$$2]]);
      v2287 = tileYDown$$2 < scrollXAdjustedAligned$$2;
    }
    if (pixelPosition$$4 < pixelPositionEnd$$2) {
      chrCode$$2 = this.BGCHRBank1[tileYDown$$2];
      if (chrCode$$2 < this.gfxBackgroundBankOffset) {
        chrCode$$2 = chrCode$$2 | 256;
      }
      attrCode$$1 = this.BGCHRBank2[tileYDown$$2];
      tile$$2 = this.tileCache[(attrCode$$1 & 8) << 8 | (attrCode$$1 & 96) << 4 | chrCode$$2];
      palette$$1 = (attrCode$$1 & 7) << 2;
      switch(pixelPositionEnd$$2 - pixelPosition$$4) {
        case 7:
          JAM.set(this.frameBuffer, pixelPosition$$4 + 6, this.gbcBGPalette[palette$$1 | tile$$2[tileYLine$$2 | 6]]);
        case 6:
          JAM.set(this.frameBuffer, pixelPosition$$4 + 5, this.gbcBGPalette[palette$$1 | tile$$2[tileYLine$$2 | 5]]);
        case 5:
          JAM.set(this.frameBuffer, pixelPosition$$4 + 4, this.gbcBGPalette[palette$$1 | tile$$2[tileYLine$$2 | 4]]);
        case 4:
          JAM.set(this.frameBuffer, pixelPosition$$4 + 3, this.gbcBGPalette[palette$$1 | tile$$2[tileYLine$$2 | 3]]);
        case 3:
          JAM.set(this.frameBuffer, pixelPosition$$4 + 2, this.gbcBGPalette[palette$$1 | tile$$2[tileYLine$$2 | 2]]);
        case 2:
          JAM.set(this.frameBuffer, pixelPosition$$4 + 1, this.gbcBGPalette[palette$$1 | tile$$2[tileYLine$$2 | 1]]);
        case 1:
          JAM.set(this.frameBuffer, pixelPosition$$4, this.gbcBGPalette[palette$$1 | tile$$2[tileYLine$$2]]);
      }
    }
  }
  return;
}
function v694(scanlineToRender$$2) {
  var scrollYAdjusted$$1 = this.backgroundY + scanlineToRender$$2 & 255;
  var tileYLine$$1 = (scrollYAdjusted$$1 & 7) << 3;
  var tileYDown$$1 = this.gfxBackgroundCHRBankPosition | (scrollYAdjusted$$1 & 248) << 2;
  var scrollXAdjusted$$1 = this.backgroundX + this.currentX & 255;
  var pixelPosition$$3 = this.pixelStart + this.currentX;
  var v2317 = this.pixelStart;
  var v6462;
  var v9875 = this.gfxWindowDisplay;
  if (v9875) {
    v9875 = scanlineToRender$$2 - this.windowY >= 0;
  }
  if (v9875) {
    v6462 = JAM.call(Math.min, Math, [JAM.call(Math.max, Math, [this.windowX, 0], JAM.policy.p1) + this.currentX, this.pixelEnd], JAM.policy.p1);
  } else {
    v6462 = this.pixelEnd;
  }
  var pixelPositionEnd$$1 = v2317 + v6462;
  var tileNumber$$2 = tileYDown$$1 + (scrollXAdjusted$$1 >> 3);
  var chrCode$$1 = this.BGCHRBank1[tileNumber$$2];
  if (chrCode$$1 < this.gfxBackgroundBankOffset) {
    chrCode$$1 = chrCode$$1 | 256;
  }
  var attrCode = this.BGCHRBank2[tileNumber$$2];
  var tile$$1 = this.tileCache[(attrCode & 8) << 8 | (attrCode & 96) << 4 | chrCode$$1];
  var palette = (attrCode & 7) << 2 | (attrCode & 128) >> 2;
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
    JAM.set(v2327, v2328, v6468[palette | tile$$1[tileYLine$$1 | v10309]]);
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
  var scrollXAdjustedAligned$$1 = JAM.call(Math.min, Math, [pixelPositionEnd$$1 - pixelPosition$$3, 256 - scrollXAdjusted$$1], JAM.policy.p1) >> 3;
  scrollXAdjusted$$1 = scrollXAdjusted$$1 + (scrollXAdjustedAligned$$1 << 3);
  scrollXAdjustedAligned$$1 = scrollXAdjustedAligned$$1 + tileNumber$$2;
  var v2355 = tileNumber$$2 < scrollXAdjustedAligned$$1;
  for (;v2355;) {
    chrCode$$1 = this.BGCHRBank1[tileNumber$$2 = tileNumber$$2 + 1];
    if (chrCode$$1 < this.gfxBackgroundBankOffset) {
      chrCode$$1 = chrCode$$1 | 256;
    }
    attrCode = this.BGCHRBank2[tileNumber$$2];
    tile$$1 = this.tileCache[(attrCode & 8) << 8 | (attrCode & 96) << 4 | chrCode$$1];
    palette = (attrCode & 7) << 2 | (attrCode & 128) >> 2;
    texel$$1 = tileYLine$$1;
    var v2339 = this.frameBuffer;
    var v2340 = pixelPosition$$3;
    pixelPosition$$3 = pixelPosition$$3 + 1;
    var v6478 = this.gbcBGPalette;
    var v9883 = texel$$1;
    texel$$1 = texel$$1 + 1;
    JAM.set(v2339, v2340, v6478[palette | tile$$1[v9883]]);
    var v2341 = this.frameBuffer;
    var v2342 = pixelPosition$$3;
    pixelPosition$$3 = pixelPosition$$3 + 1;
    var v6480 = this.gbcBGPalette;
    var v9884 = texel$$1;
    texel$$1 = texel$$1 + 1;
    JAM.set(v2341, v2342, v6480[palette | tile$$1[v9884]]);
    var v2343 = this.frameBuffer;
    var v2344 = pixelPosition$$3;
    pixelPosition$$3 = pixelPosition$$3 + 1;
    var v6482 = this.gbcBGPalette;
    var v9885 = texel$$1;
    texel$$1 = texel$$1 + 1;
    JAM.set(v2343, v2344, v6482[palette | tile$$1[v9885]]);
    var v2345 = this.frameBuffer;
    var v2346 = pixelPosition$$3;
    pixelPosition$$3 = pixelPosition$$3 + 1;
    var v6484 = this.gbcBGPalette;
    var v9886 = texel$$1;
    texel$$1 = texel$$1 + 1;
    JAM.set(v2345, v2346, v6484[palette | tile$$1[v9886]]);
    var v2347 = this.frameBuffer;
    var v2348 = pixelPosition$$3;
    pixelPosition$$3 = pixelPosition$$3 + 1;
    var v6486 = this.gbcBGPalette;
    var v9887 = texel$$1;
    texel$$1 = texel$$1 + 1;
    JAM.set(v2347, v2348, v6486[palette | tile$$1[v9887]]);
    var v2349 = this.frameBuffer;
    var v2350 = pixelPosition$$3;
    pixelPosition$$3 = pixelPosition$$3 + 1;
    var v6488 = this.gbcBGPalette;
    var v9888 = texel$$1;
    texel$$1 = texel$$1 + 1;
    JAM.set(v2349, v2350, v6488[palette | tile$$1[v9888]]);
    var v2351 = this.frameBuffer;
    var v2352 = pixelPosition$$3;
    pixelPosition$$3 = pixelPosition$$3 + 1;
    var v6490 = this.gbcBGPalette;
    var v9889 = texel$$1;
    texel$$1 = texel$$1 + 1;
    JAM.set(v2351, v2352, v6490[palette | tile$$1[v9889]]);
    var v2353 = this.frameBuffer;
    var v2354 = pixelPosition$$3;
    pixelPosition$$3 = pixelPosition$$3 + 1;
    JAM.set(v2353, v2354, this.gbcBGPalette[palette | tile$$1[texel$$1]]);
    v2355 = tileNumber$$2 < scrollXAdjustedAligned$$1;
  }
  if (pixelPosition$$3 < pixelPositionEnd$$1) {
    if (scrollXAdjusted$$1 < 256) {
      chrCode$$1 = this.BGCHRBank1[tileNumber$$2 = tileNumber$$2 + 1];
      if (chrCode$$1 < this.gfxBackgroundBankOffset) {
        chrCode$$1 = chrCode$$1 | 256;
      }
      attrCode = this.BGCHRBank2[tileNumber$$2];
      tile$$1 = this.tileCache[(attrCode & 8) << 8 | (attrCode & 96) << 4 | chrCode$$1];
      palette = (attrCode & 7) << 2 | (attrCode & 128) >> 2;
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
        JAM.set(v2364, v2365, this.gbcBGPalette[palette | tile$$1[texel$$1 = texel$$1 + 1]]);
        ++scrollXAdjusted$$1;
        var v6501 = pixelPosition$$3 < pixelPositionEnd$$1;
        if (v6501) {
          v6501 = scrollXAdjusted$$1 < 256;
        }
        v2366 = v6501;
      }
    }
    scrollXAdjustedAligned$$1 = (pixelPositionEnd$$1 - pixelPosition$$3 >> 3) + tileYDown$$1;
    var v2393 = tileYDown$$1 < scrollXAdjustedAligned$$1;
    for (;v2393;) {
      chrCode$$1 = this.BGCHRBank1[tileYDown$$1];
      if (chrCode$$1 < this.gfxBackgroundBankOffset) {
        chrCode$$1 = chrCode$$1 | 256;
      }
      var v2371 = this.BGCHRBank2;
      var v2372 = tileYDown$$1;
      tileYDown$$1 = tileYDown$$1 + 1;
      attrCode = v2371[v2372];
      tile$$1 = this.tileCache[(attrCode & 8) << 8 | (attrCode & 96) << 4 | chrCode$$1];
      palette = (attrCode & 7) << 2 | (attrCode & 128) >> 2;
      texel$$1 = tileYLine$$1;
      var v2377 = this.frameBuffer;
      var v2378 = pixelPosition$$3;
      pixelPosition$$3 = pixelPosition$$3 + 1;
      var v6507 = this.gbcBGPalette;
      var v9895 = texel$$1;
      texel$$1 = texel$$1 + 1;
      JAM.set(v2377, v2378, v6507[palette | tile$$1[v9895]]);
      var v2379 = this.frameBuffer;
      var v2380 = pixelPosition$$3;
      pixelPosition$$3 = pixelPosition$$3 + 1;
      var v6509 = this.gbcBGPalette;
      var v9896 = texel$$1;
      texel$$1 = texel$$1 + 1;
      JAM.set(v2379, v2380, v6509[palette | tile$$1[v9896]]);
      var v2381 = this.frameBuffer;
      var v2382 = pixelPosition$$3;
      pixelPosition$$3 = pixelPosition$$3 + 1;
      var v6511 = this.gbcBGPalette;
      var v9897 = texel$$1;
      texel$$1 = texel$$1 + 1;
      JAM.set(v2381, v2382, v6511[palette | tile$$1[v9897]]);
      var v2383 = this.frameBuffer;
      var v2384 = pixelPosition$$3;
      pixelPosition$$3 = pixelPosition$$3 + 1;
      var v6513 = this.gbcBGPalette;
      var v9898 = texel$$1;
      texel$$1 = texel$$1 + 1;
      JAM.set(v2383, v2384, v6513[palette | tile$$1[v9898]]);
      var v2385 = this.frameBuffer;
      var v2386 = pixelPosition$$3;
      pixelPosition$$3 = pixelPosition$$3 + 1;
      var v6515 = this.gbcBGPalette;
      var v9899 = texel$$1;
      texel$$1 = texel$$1 + 1;
      JAM.set(v2385, v2386, v6515[palette | tile$$1[v9899]]);
      var v2387 = this.frameBuffer;
      var v2388 = pixelPosition$$3;
      pixelPosition$$3 = pixelPosition$$3 + 1;
      var v6517 = this.gbcBGPalette;
      var v9900 = texel$$1;
      texel$$1 = texel$$1 + 1;
      JAM.set(v2387, v2388, v6517[palette | tile$$1[v9900]]);
      var v2389 = this.frameBuffer;
      var v2390 = pixelPosition$$3;
      pixelPosition$$3 = pixelPosition$$3 + 1;
      var v6519 = this.gbcBGPalette;
      var v9901 = texel$$1;
      texel$$1 = texel$$1 + 1;
      JAM.set(v2389, v2390, v6519[palette | tile$$1[v9901]]);
      var v2391 = this.frameBuffer;
      var v2392 = pixelPosition$$3;
      pixelPosition$$3 = pixelPosition$$3 + 1;
      JAM.set(v2391, v2392, this.gbcBGPalette[palette | tile$$1[texel$$1]]);
      v2393 = tileYDown$$1 < scrollXAdjustedAligned$$1;
    }
    if (pixelPosition$$3 < pixelPositionEnd$$1) {
      chrCode$$1 = this.BGCHRBank1[tileYDown$$1];
      if (chrCode$$1 < this.gfxBackgroundBankOffset) {
        chrCode$$1 = chrCode$$1 | 256;
      }
      attrCode = this.BGCHRBank2[tileYDown$$1];
      tile$$1 = this.tileCache[(attrCode & 8) << 8 | (attrCode & 96) << 4 | chrCode$$1];
      palette = (attrCode & 7) << 2 | (attrCode & 128) >> 2;
      switch(pixelPositionEnd$$1 - pixelPosition$$3) {
        case 7:
          JAM.set(this.frameBuffer, pixelPosition$$3 + 6, this.gbcBGPalette[palette | tile$$1[tileYLine$$1 | 6]]);
        case 6:
          JAM.set(this.frameBuffer, pixelPosition$$3 + 5, this.gbcBGPalette[palette | tile$$1[tileYLine$$1 | 5]]);
        case 5:
          JAM.set(this.frameBuffer, pixelPosition$$3 + 4, this.gbcBGPalette[palette | tile$$1[tileYLine$$1 | 4]]);
        case 4:
          JAM.set(this.frameBuffer, pixelPosition$$3 + 3, this.gbcBGPalette[palette | tile$$1[tileYLine$$1 | 3]]);
        case 3:
          JAM.set(this.frameBuffer, pixelPosition$$3 + 2, this.gbcBGPalette[palette | tile$$1[tileYLine$$1 | 2]]);
        case 2:
          JAM.set(this.frameBuffer, pixelPosition$$3 + 1, this.gbcBGPalette[palette | tile$$1[tileYLine$$1 | 1]]);
        case 1:
          JAM.set(this.frameBuffer, pixelPosition$$3, this.gbcBGPalette[palette | tile$$1[tileYLine$$1]]);
      }
    }
  }
  return;
}
function v693(scanlineToRender$$1) {
  var scrollYAdjusted = this.backgroundY + scanlineToRender$$1 & 255;
  var tileYLine = (scrollYAdjusted & 7) << 3;
  var tileYDown = this.gfxBackgroundCHRBankPosition | (scrollYAdjusted & 248) << 2;
  var scrollXAdjusted = this.backgroundX + this.currentX & 255;
  var pixelPosition$$2 = this.pixelStart + this.currentX;
  var v2424 = this.pixelStart;
  var v6545;
  var v9910 = this.gfxWindowDisplay;
  if (v9910) {
    v9910 = scanlineToRender$$1 - this.windowY >= 0;
  }
  if (v9910) {
    v6545 = JAM.call(Math.min, Math, [JAM.call(Math.max, Math, [this.windowX, 0], JAM.policy.p1) + this.currentX, this.pixelEnd], JAM.policy.p1);
  } else {
    v6545 = this.pixelEnd;
  }
  var pixelPositionEnd = v2424 + v6545;
  var tileNumber$$1 = tileYDown + (scrollXAdjusted >> 3);
  var chrCode = this.BGCHRBank1[tileNumber$$1];
  if (chrCode < this.gfxBackgroundBankOffset) {
    chrCode = chrCode | 256;
  }
  var tile = this.tileCache[chrCode];
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
    JAM.set(v2430, v2431, v6548[tile[tileYLine | v9913]]);
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
  var scrollXAdjustedAligned = JAM.call(Math.min, Math, [pixelPositionEnd - pixelPosition$$2, 256 - scrollXAdjusted], JAM.policy.p1) >> 3;
  scrollXAdjusted = scrollXAdjusted + (scrollXAdjustedAligned << 3);
  scrollXAdjustedAligned = scrollXAdjustedAligned + tileNumber$$1;
  var v2454 = tileNumber$$1 < scrollXAdjustedAligned;
  for (;v2454;) {
    chrCode = this.BGCHRBank1[tileNumber$$1 = tileNumber$$1 + 1];
    if (chrCode < this.gfxBackgroundBankOffset) {
      chrCode = chrCode | 256;
    }
    tile = this.tileCache[chrCode];
    texel = tileYLine;
    var v2438 = this.frameBuffer;
    var v2439 = pixelPosition$$2;
    pixelPosition$$2 = pixelPosition$$2 + 1;
    var v6555 = this.BGPalette;
    var v8859 = texel;
    texel = texel + 1;
    JAM.set(v2438, v2439, v6555[tile[v8859]]);
    var v2440 = this.frameBuffer;
    var v2441 = pixelPosition$$2;
    pixelPosition$$2 = pixelPosition$$2 + 1;
    var v6557 = this.BGPalette;
    var v8860 = texel;
    texel = texel + 1;
    JAM.set(v2440, v2441, v6557[tile[v8860]]);
    var v2442 = this.frameBuffer;
    var v2443 = pixelPosition$$2;
    pixelPosition$$2 = pixelPosition$$2 + 1;
    var v6559 = this.BGPalette;
    var v8861 = texel;
    texel = texel + 1;
    JAM.set(v2442, v2443, v6559[tile[v8861]]);
    var v2444 = this.frameBuffer;
    var v2445 = pixelPosition$$2;
    pixelPosition$$2 = pixelPosition$$2 + 1;
    var v6561 = this.BGPalette;
    var v8862 = texel;
    texel = texel + 1;
    JAM.set(v2444, v2445, v6561[tile[v8862]]);
    var v2446 = this.frameBuffer;
    var v2447 = pixelPosition$$2;
    pixelPosition$$2 = pixelPosition$$2 + 1;
    var v6563 = this.BGPalette;
    var v8863 = texel;
    texel = texel + 1;
    JAM.set(v2446, v2447, v6563[tile[v8863]]);
    var v2448 = this.frameBuffer;
    var v2449 = pixelPosition$$2;
    pixelPosition$$2 = pixelPosition$$2 + 1;
    var v6565 = this.BGPalette;
    var v8864 = texel;
    texel = texel + 1;
    JAM.set(v2448, v2449, v6565[tile[v8864]]);
    var v2450 = this.frameBuffer;
    var v2451 = pixelPosition$$2;
    pixelPosition$$2 = pixelPosition$$2 + 1;
    var v6567 = this.BGPalette;
    var v8865 = texel;
    texel = texel + 1;
    JAM.set(v2450, v2451, v6567[tile[v8865]]);
    var v2452 = this.frameBuffer;
    var v2453 = pixelPosition$$2;
    pixelPosition$$2 = pixelPosition$$2 + 1;
    JAM.set(v2452, v2453, this.BGPalette[tile[texel]]);
    v2454 = tileNumber$$1 < scrollXAdjustedAligned;
  }
  if (pixelPosition$$2 < pixelPositionEnd) {
    if (scrollXAdjusted < 256) {
      chrCode = this.BGCHRBank1[tileNumber$$1 = tileNumber$$1 + 1];
      if (chrCode < this.gfxBackgroundBankOffset) {
        chrCode = chrCode | 256;
      }
      tile = this.tileCache[chrCode];
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
        JAM.set(v2459, v2460, this.BGPalette[tile[texel = texel + 1]]);
        ++scrollXAdjusted;
        var v6575 = pixelPosition$$2 < pixelPositionEnd;
        if (v6575) {
          v6575 = scrollXAdjusted < 256;
        }
        v2461 = v6575;
      }
    }
    scrollXAdjustedAligned = (pixelPositionEnd - pixelPosition$$2 >> 3) + tileYDown;
    var v2484 = tileYDown < scrollXAdjustedAligned;
    for (;v2484;) {
      var v2464 = this.BGCHRBank1;
      var v2465 = tileYDown;
      tileYDown = tileYDown + 1;
      chrCode = v2464[v2465];
      if (chrCode < this.gfxBackgroundBankOffset) {
        chrCode = chrCode | 256;
      }
      tile = this.tileCache[chrCode];
      texel = tileYLine;
      var v2468 = this.frameBuffer;
      var v2469 = pixelPosition$$2;
      pixelPosition$$2 = pixelPosition$$2 + 1;
      var v6578 = this.BGPalette;
      var v8867 = texel;
      texel = texel + 1;
      JAM.set(v2468, v2469, v6578[tile[v8867]]);
      var v2470 = this.frameBuffer;
      var v2471 = pixelPosition$$2;
      pixelPosition$$2 = pixelPosition$$2 + 1;
      var v6580 = this.BGPalette;
      var v8868 = texel;
      texel = texel + 1;
      JAM.set(v2470, v2471, v6580[tile[v8868]]);
      var v2472 = this.frameBuffer;
      var v2473 = pixelPosition$$2;
      pixelPosition$$2 = pixelPosition$$2 + 1;
      var v6582 = this.BGPalette;
      var v8869 = texel;
      texel = texel + 1;
      JAM.set(v2472, v2473, v6582[tile[v8869]]);
      var v2474 = this.frameBuffer;
      var v2475 = pixelPosition$$2;
      pixelPosition$$2 = pixelPosition$$2 + 1;
      var v6584 = this.BGPalette;
      var v8870 = texel;
      texel = texel + 1;
      JAM.set(v2474, v2475, v6584[tile[v8870]]);
      var v2476 = this.frameBuffer;
      var v2477 = pixelPosition$$2;
      pixelPosition$$2 = pixelPosition$$2 + 1;
      var v6586 = this.BGPalette;
      var v8871 = texel;
      texel = texel + 1;
      JAM.set(v2476, v2477, v6586[tile[v8871]]);
      var v2478 = this.frameBuffer;
      var v2479 = pixelPosition$$2;
      pixelPosition$$2 = pixelPosition$$2 + 1;
      var v6588 = this.BGPalette;
      var v8872 = texel;
      texel = texel + 1;
      JAM.set(v2478, v2479, v6588[tile[v8872]]);
      var v2480 = this.frameBuffer;
      var v2481 = pixelPosition$$2;
      pixelPosition$$2 = pixelPosition$$2 + 1;
      var v6590 = this.BGPalette;
      var v8873 = texel;
      texel = texel + 1;
      JAM.set(v2480, v2481, v6590[tile[v8873]]);
      var v2482 = this.frameBuffer;
      var v2483 = pixelPosition$$2;
      pixelPosition$$2 = pixelPosition$$2 + 1;
      JAM.set(v2482, v2483, this.BGPalette[tile[texel]]);
      v2484 = tileYDown < scrollXAdjustedAligned;
    }
    if (pixelPosition$$2 < pixelPositionEnd) {
      chrCode = this.BGCHRBank1[tileYDown];
      if (chrCode < this.gfxBackgroundBankOffset) {
        chrCode = chrCode | 256;
      }
      tile = this.tileCache[chrCode];
      switch(pixelPositionEnd - pixelPosition$$2) {
        case 7:
          JAM.set(this.frameBuffer, pixelPosition$$2 + 6, this.BGPalette[tile[tileYLine | 6]]);
        case 6:
          JAM.set(this.frameBuffer, pixelPosition$$2 + 5, this.BGPalette[tile[tileYLine | 5]]);
        case 5:
          JAM.set(this.frameBuffer, pixelPosition$$2 + 4, this.BGPalette[tile[tileYLine | 4]]);
        case 4:
          JAM.set(this.frameBuffer, pixelPosition$$2 + 3, this.BGPalette[tile[tileYLine | 3]]);
        case 3:
          JAM.set(this.frameBuffer, pixelPosition$$2 + 2, this.BGPalette[tile[tileYLine | 2]]);
        case 2:
          JAM.set(this.frameBuffer, pixelPosition$$2 + 1, this.BGPalette[tile[tileYLine | 1]]);
        case 1:
          JAM.set(this.frameBuffer, pixelPosition$$2, this.BGPalette[tile[tileYLine]]);
      }
    }
  }
  return;
}
function v692(index$$61, data$$29) {
  if (this.gbcOBJRawPalette[index$$61] != data$$29) {
    JAM.set(this.gbcOBJRawPalette, index$$61, data$$29);
    if ((index$$61 & 6) > 0) {
      this.midScanLineJIT();
      this.gbcOBJPalette[index$$61 >> 1] = 16777216 | JAM.call(this.RGBTint, this, [this.gbcOBJRawPalette[index$$61 | 1] << 8 | this.gbcOBJRawPalette[index$$61 & 62]]);
    }
  }
  return;
}
function v691(index$$60, data$$28) {
  if (this.gbcBGRawPalette[index$$60] != data$$28) {
    this.midScanLineJIT();
    JAM.set(this.gbcBGRawPalette, index$$60, data$$28);
    if ((index$$60 & 6) == 0) {
      data$$28 = 33554432 | JAM.call(this.RGBTint, this, [this.gbcBGRawPalette[index$$60 | 1] << 8 | this.gbcBGRawPalette[index$$60 & 62]]);
      index$$60 = index$$60 >> 1;
      JAM.set(this.gbcBGPalette, index$$60, data$$28);
      this.gbcBGPalette[32 | index$$60] = 16777216 | data$$28;
    } else {
      data$$28 = JAM.call(this.RGBTint, this, [this.gbcBGRawPalette[index$$60 | 1] << 8 | this.gbcBGRawPalette[index$$60 & 62]]);
      index$$60 = index$$60 >> 1;
      JAM.set(this.gbcBGPalette, index$$60, data$$28);
      this.gbcBGPalette[32 | index$$60] = 16777216 | data$$28;
    }
  }
  return;
}
function v690(index$$59, data$$27) {
  this.gbOBJColorizedPalette[index$$59 | 1] = this.cachedOBJPaletteConversion[index$$59 | data$$27 >> 2 & 3];
  this.gbOBJColorizedPalette[index$$59 | 2] = this.cachedOBJPaletteConversion[index$$59 | data$$27 >> 4 & 3];
  this.gbOBJColorizedPalette[index$$59 | 3] = this.cachedOBJPaletteConversion[index$$59 | data$$27 >> 6];
  return;
}
function v689(index$$58, data$$26) {
  this.gbOBJPalette[index$$58 | 1] = this.colors[data$$26 >> 2 & 3];
  this.gbOBJPalette[index$$58 | 2] = this.colors[data$$26 >> 4 & 3];
  this.gbOBJPalette[index$$58 | 3] = this.colors[data$$26 >> 6];
  return;
}
function v688(data$$25) {
  this.gbBGColorizedPalette[0] = this.cachedBGPaletteConversion[data$$25 & 3] | 33554432;
  this.gbBGColorizedPalette[1] = this.cachedBGPaletteConversion[data$$25 >> 2 & 3];
  this.gbBGColorizedPalette[2] = this.cachedBGPaletteConversion[data$$25 >> 4 & 3];
  this.gbBGColorizedPalette[3] = this.cachedBGPaletteConversion[data$$25 >> 6];
  return;
}
function v687(data$$24) {
  this.gbBGPalette[0] = this.colors[data$$24 & 3] | 33554432;
  this.gbBGPalette[1] = this.colors[data$$24 >> 2 & 3];
  this.gbBGPalette[2] = this.colors[data$$24 >> 4 & 3];
  this.gbBGPalette[3] = this.colors[data$$24 >> 6];
  return;
}
function v686() {
  var counter = 0;
  var v2542 = counter < 4;
  for (;v2542;) {
    var adjustedIndex = counter << 1;
    var v2540 = this.cachedBGPaletteConversion;
    var v10678 = JAM.call(this.RGBTint, this, [this.gbcBGRawPalette[adjustedIndex | 1] << 8 | this.gbcBGRawPalette[adjustedIndex]]);
    v2540[counter] = v10678;
    var v2541 = this.cachedOBJPaletteConversion;
    var v10679 = JAM.call(this.RGBTint, this, [this.gbcOBJRawPalette[adjustedIndex | 1] << 8 | this.gbcOBJRawPalette[adjustedIndex]]);
    v2541[counter] = v10679;
    counter++;
    v2542 = counter < 4;
  }
  counter = 4;
  var v2544 = counter < 8;
  for (;v2544;) {
    adjustedIndex = counter << 1;
    var v2543 = this.cachedOBJPaletteConversion;
    var v10680 = JAM.call(this.RGBTint, this, [this.gbcOBJRawPalette[adjustedIndex | 1] << 8 | this.gbcOBJRawPalette[adjustedIndex]]);
    v2543[counter] = v10680;
    counter++;
    v2544 = counter < 8;
  }
  this.updateGBBGPalette = this.updateGBColorizedBGPalette;
  this.updateGBOBJPalette = this.updateGBColorizedOBJPalette;
  JAM.call(this.updateGBBGPalette, this, [this.memory[65351]]);
  JAM.call(this.updateGBOBJPalette, this, [0, this.memory[65352]], JAM.policy.p1);
  JAM.call(this.updateGBOBJPalette, this, [1, this.memory[65353]], JAM.policy.p1);
  this.colorizedGBPalettes = true;
  return;
}
function v685(value$$28) {
  var r = value$$28 & 31;
  var g = value$$28 >> 5 & 31;
  var b = value$$28 >> 10 & 31;
  return r * 13 + g * 2 + b >> 1 << 16 | g * 3 + b << 9 | r * 3 + g * 2 + b * 11 >> 1;
}
function v684() {
  var v2552;
  if (this.LCDisOn) {
    v2552 = this.LINECONTROL;
  } else {
    v2552 = this.DISPLAYOFFCONTROL;
  }
  this.LCDCONTROL = v2552;
  var tileIndex = 0;
  if (!this.cGBC) {
    if (this.colorizedGBPalettes) {
      this.BGPalette = this.gbBGColorizedPalette;
      this.OBJPalette = this.gbOBJColorizedPalette;
      this.updateGBBGPalette = this.updateGBColorizedBGPalette;
      this.updateGBOBJPalette = this.updateGBColorizedOBJPalette;
    } else {
      this.BGPalette = this.gbBGPalette;
      this.OBJPalette = this.gbOBJPalette;
    }
    var v10681 = JAM.call(this.generateCacheArray, this, [1792]);
    this.tileCache = v10681;
    tileIndex = 32768;
    var v2554 = tileIndex < 36864;
    for (;v2554;) {
      JAM.call(this.generateGBOAMTileLine, this, [tileIndex]);
      tileIndex = tileIndex + 2;
      v2554 = tileIndex < 36864;
    }
    tileIndex = 36864;
    var v2555 = tileIndex < 38912;
    for (;v2555;) {
      JAM.call(this.generateGBTileLine, this, [tileIndex]);
      tileIndex = tileIndex + 2;
      v2555 = tileIndex < 38912;
    }
    var v10682 = JAM.call(this.getTypedArray, this, [256, 0, "uint8"], JAM.policy.p1);
    this.sortBuffer = v10682;
    var v10683 = JAM.call(this.getTypedArray, this, [10, 0, "int32"], JAM.policy.p1);
    this.OAMAddressCache = v10683;
  } else {
    var v2556;
    if (this.currVRAMBank > 0) {
      v2556 = this.BGCHRBank2;
    } else {
      v2556 = this.BGCHRBank1;
    }
    this.BGCHRCurrentBank = v2556;
    var v10684 = JAM.call(this.generateCacheArray, this, [3968]);
    this.tileCache = v10684;
    var v2557 = tileIndex < 6144;
    for (;v2557;) {
      JAM.call(this.generateGBCTileBank1, this, [tileIndex]);
      JAM.call(this.generateGBCTileBank2, this, [tileIndex]);
      tileIndex = tileIndex + 16;
      v2557 = tileIndex < 6144;
    }
  }
  this.renderPathBuild();
  return;
}
function v683() {
  if (this.BGPriorityEnabled) {
    this.BGLayerRender = this.BGGBCLayerRender;
    this.WindowLayerRender = this.WindowGBCLayerRender;
  } else {
    this.BGLayerRender = this.BGGBCLayerRenderNoPriorityFlagging;
    this.WindowLayerRender = this.WindowGBCLayerRenderNoPriorityFlagging;
  }
  return;
}
function v682() {
  if (!this.cGBC) {
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
  this.tileCache.length = 1792;
  if (settings[4]) {
    var v10685 = JAM.call(this.getTypedArray, this, [4, 0, "int32"], JAM.policy.p1);
    this.gbBGColorizedPalette = v10685;
    var v10686 = JAM.call(this.getTypedArray, this, [8, 0, "int32"], JAM.policy.p1);
    this.gbOBJColorizedPalette = v10686;
    var v10687 = JAM.call(this.getTypedArray, this, [4, 0, "int32"], JAM.policy.p1);
    this.cachedBGPaletteConversion = v10687;
    var v10688 = JAM.call(this.getTypedArray, this, [8, 0, "int32"], JAM.policy.p1);
    this.cachedOBJPaletteConversion = v10688;
    this.BGPalette = this.gbBGColorizedPalette;
    this.OBJPalette = this.gbOBJColorizedPalette;
    this.gbOBJPalette = this.gbBGPalette = null;
    this.getGBCColor();
  } else {
    var v10689 = JAM.call(this.getTypedArray, this, [8, 0, "int32"], JAM.policy.p1);
    this.gbOBJPalette = v10689;
    var v10690 = JAM.call(this.getTypedArray, this, [4, 0, "int32"], JAM.policy.p1);
    this.gbBGPalette = v10690;
    this.BGPalette = this.gbBGPalette;
    this.OBJPalette = this.gbOBJPalette;
  }
  var v10691 = JAM.call(this.getTypedArray, this, [256, 0, "uint8"], JAM.policy.p1);
  this.sortBuffer = v10691;
  var v10692 = JAM.call(this.getTypedArray, this, [10, 0, "int32"], JAM.policy.p1);
  this.OAMAddressCache = v10692;
  this.renderPathBuild();
  this.memoryReadJumpCompile();
  this.memoryWriteJumpCompile();
  return;
}
function v680() {
  var v2563;
  if (this.LCDisOn) {
    v2563 = this.LINECONTROL;
  } else {
    v2563 = this.DISPLAYOFFCONTROL;
  }
  this.LCDCONTROL = v2563;
  if (this.cGBC) {
    var v10693 = JAM.call(this.getTypedArray, this, [64, 0, "uint8"], JAM.policy.p1);
    this.gbcOBJRawPalette = v10693;
    var v10694 = JAM.call(this.getTypedArray, this, [64, 0, "uint8"], JAM.policy.p1);
    this.gbcBGRawPalette = v10694;
    var v10695 = JAM.call(this.getTypedArray, this, [32, 16777216, "int32"], JAM.policy.p1);
    this.gbcOBJPalette = v10695;
    var v10696 = JAM.call(this.getTypedArray, this, [64, 0, "int32"], JAM.policy.p1);
    this.gbcBGPalette = v10696;
    var v10697 = JAM.call(this.getTypedArray, this, [2048, 0, "uint8"], JAM.policy.p1);
    this.BGCHRBank2 = v10697;
    var v2564;
    if (this.currVRAMBank > 0) {
      v2564 = this.BGCHRBank2;
    } else {
      v2564 = this.BGCHRBank1;
    }
    this.BGCHRCurrentBank = v2564;
    var v10698 = JAM.call(this.generateCacheArray, this, [3968]);
    this.tileCache = v10698;
  } else {
    var v10699 = JAM.call(this.getTypedArray, this, [8, 0, "int32"], JAM.policy.p1);
    this.gbOBJPalette = v10699;
    var v10700 = JAM.call(this.getTypedArray, this, [4, 0, "int32"], JAM.policy.p1);
    this.gbBGPalette = v10700;
    this.BGPalette = this.gbBGPalette;
    this.OBJPalette = this.gbOBJPalette;
    var v10701 = JAM.call(this.generateCacheArray, this, [1792]);
    this.tileCache = v10701;
    var v10702 = JAM.call(this.getTypedArray, this, [256, 0, "uint8"], JAM.policy.p1);
    this.sortBuffer = v10702;
    var v10703 = JAM.call(this.getTypedArray, this, [10, 0, "int32"], JAM.policy.p1);
    this.OAMAddressCache = v10703;
  }
  this.renderPathBuild();
  return;
}
function v679() {
  var v6658 = this.actualScanLine < 144;
  if (v6658) {
    v6658 = this.modeSTAT == 3;
  }
  if (v6658) {
    if (this.midScanlineOffset == -1) {
      this.midScanlineOffset = this.backgroundX & 7;
    }
    if (this.LCDTicks >= 82) {
      this.pixelEnd = this.LCDTicks - 74;
      var v10704 = JAM.call(Math.min, Math, [this.pixelEnd - this.midScanlineOffset - this.pixelEnd % 8, 160], JAM.policy.p1);
      this.pixelEnd = v10704;
      if (this.bgEnabled) {
        this.pixelStart = this.lastUnrenderedLine * 160;
        JAM.call(this.BGLayerRender, this, [this.lastUnrenderedLine]);
        JAM.call(this.WindowLayerRender, this, [this.lastUnrenderedLine]);
      } else {
        var pixelLine$$1 = this.lastUnrenderedLine * 160 + this.pixelEnd;
        var v2575;
        var v8918 = this.cGBC;
        if (!v8918) {
          v8918 = this.colorizedGBPalettes;
        }
        if (v8918) {
          v2575 = 16316664;
        } else {
          v2575 = 15728606;
        }
        var defaultColor$$1 = v2575;
        var pixelPosition$$1 = this.lastUnrenderedLine * 160 + this.currentX;
        var v2579 = pixelPosition$$1 < pixelLine$$1;
        for (;v2579;) {
          this.frameBuffer[pixelPosition$$1] = defaultColor$$1;
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
  if (this.bgEnabled) {
    this.pixelEnd = 160;
    JAM.call(this.BGLayerRender, this, [scanlineToRender]);
    JAM.call(this.WindowLayerRender, this, [scanlineToRender]);
  } else {
    var pixelLine = (scanlineToRender + 1) * 160;
    var v2584;
    var v8919 = this.cGBC;
    if (!v8919) {
      v8919 = this.colorizedGBPalettes;
    }
    if (v8919) {
      v2584 = 16316664;
    } else {
      v2584 = 15728606;
    }
    var defaultColor = v2584;
    var pixelPosition = scanlineToRender * 160 + this.currentX;
    var v2588 = pixelPosition < pixelLine;
    for (;v2588;) {
      this.frameBuffer[pixelPosition] = defaultColor;
      pixelPosition++;
      v2588 = pixelPosition < pixelLine;
    }
  }
  JAM.call(this.SpriteLayerRender, this, [scanlineToRender]);
  this.currentX = 0;
  this.midScanlineOffset = -1;
  return;
}
function v677() {
  if (this.offscreenRGBCount > 0) {
    var v10705 = new Resize(160, 144, this.offscreenWidth, this.offscreenHeight, false, true);
    this.resizer = v10705;
  }
  return;
}
function v676() {
  var v2593 = this.resizer;
  return JAM.call(v2593.resize, v2593, [this.swizzledFrame]);
}
function v675() {
  var bufferIndex$$2 = 0;
  var frameBuffer$$2 = this.swizzledFrame;
  var v6668 = this.cGBC;
  if (!v6668) {
    v6668 = this.colorizedGBPalettes;
  }
  if (v6668) {
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
    swizzledFrame[v2602] = frameBuffer$$1[bufferIndex$$1] >> 16 & 255;
    var v2603 = canvasIndex$$1;
    canvasIndex$$1 = canvasIndex$$1 + 1;
    swizzledFrame[v2603] = frameBuffer$$1[bufferIndex$$1] >> 8 & 255;
    var v2604 = canvasIndex$$1;
    canvasIndex$$1 = canvasIndex$$1 + 1;
    var v8923 = bufferIndex$$1;
    bufferIndex$$1 = bufferIndex$$1 + 1;
    swizzledFrame[v2604] = frameBuffer$$1[v8923] & 255;
    v2605 = canvasIndex$$1 < 69120;
  }
  return;
}
function v673() {
  var canvasRGBALength = this.offscreenRGBCount;
  if (canvasRGBALength > 0) {
    var v2606;
    if (canvasRGBALength == 92160) {
      v2606 = this.swizzledFrame;
    } else {
      v2606 = this.resizeFrameBuffer();
    }
    var frameBuffer = v2606;
    var canvasData = this.canvasBuffer.data;
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
  if (this.drewFrame) {
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
  if (this.cTIMER) {
    var dateObj = new_Date();
    var newTime = dateObj.getTime();
    var timeElapsed = newTime - this.lastIteration;
    this.lastIteration = newTime;
    var v6676 = this.cTIMER;
    if (v6676) {
      v6676 = !this.RTCHALT;
    }
    if (v6676) {
      this.RTCSeconds = this.RTCSeconds + timeElapsed / 1E3;
      var v2618 = this.RTCSeconds >= 60;
      for (;v2618;) {
        this.RTCSeconds = this.RTCSeconds - 60;
        ++this.RTCMinutes;
        if (this.RTCMinutes >= 60) {
          this.RTCMinutes = this.RTCMinutes - 60;
          ++this.RTCHours;
          if (this.RTCHours >= 24) {
            this.RTCHours = this.RTCHours - 24;
            ++this.RTCDays;
            if (this.RTCDays >= 512) {
              this.RTCDays = this.RTCDays - 512;
              this.RTCDayOverFlow = true;
            }
          }
        }
        v2618 = this.RTCSeconds >= 60;
      }
    }
  }
  return;
}
function v669() {
  JAM.call(this.DMAWrite, this, [1]);
  if (this.halt) {
    if (this.LCDTicks - this.spriteCount < (4 >> this.doubleSpeedShifter | 32)) {
      this.CPUTicks = 4 + (32 + this.spriteCount << this.doubleSpeedShifter);
      this.LCDTicks = this.spriteCount + (4 >> this.doubleSpeedShifter | 32);
    }
  } else {
    this.LCDTicks = this.LCDTicks + (4 >> this.doubleSpeedShifter | 32);
  }
  if (this.memory[65365] == 0) {
    this.hdmaRunning = false;
    this.memory[65365] = 255;
  } else {
    --this.memory[65365];
  }
  return;
}
function v668() {
  if (this.drewBlank == 0) {
    this.clearFrameBuffer();
    this.drewFrame = true;
  }
  this.drewBlank = 2;
  return;
}
function v667() {
  function v666(parentObj$$517) {
    if (parentObj$$517.LCDTicks >= 8) {
      var v6698 = parentObj$$517.STATTracker != 4;
      if (v6698) {
        v6698 = parentObj$$517.memory[65348] == 153;
      }
      if (v6698) {
        parentObj$$517.memory[65348] = 0;
        if (parentObj$$517.memory[65349] == 0) {
          var v2630 = parentObj$$517.memory;
          v2630[65345] = v2630[65345] | 4;
          if (parentObj$$517.LYCMatchTriggerSTAT) {
            parentObj$$517.interruptsRequested = parentObj$$517.interruptsRequested | 2;
            parentObj$$517.checkIRQMatching();
          }
        } else {
          var v2632 = parentObj$$517.memory;
          v2632[65345] = v2632[65345] & 123;
        }
        parentObj$$517.STATTracker = 4;
      }
      if (parentObj$$517.LCDTicks >= 456) {
        parentObj$$517.LCDTicks = parentObj$$517.LCDTicks - 456;
        parentObj$$517.STATTracker = parentObj$$517.actualScanLine = 0;
        var v2635 = parentObj$$517.LINECONTROL;
        JAM.call(v2635[0], v2635, [parentObj$$517]);
      }
    }
    return;
  }
  function v665(parentObj$$516) {
    if (parentObj$$516.LCDTicks >= 456) {
      parentObj$$516.LCDTicks = parentObj$$516.LCDTicks - 456;
      parentObj$$516.actualScanLine = parentObj$$516.memory[65348] = parentObj$$516.memory[65348] + 1;
      if (parentObj$$516.actualScanLine == parentObj$$516.memory[65349]) {
        var v2638 = parentObj$$516.memory;
        v2638[65345] = v2638[65345] | 4;
        if (parentObj$$516.LYCMatchTriggerSTAT) {
          parentObj$$516.interruptsRequested = parentObj$$516.interruptsRequested | 2;
          parentObj$$516.checkIRQMatching();
        }
      } else {
        var v2640 = parentObj$$516.memory;
        v2640[65345] = v2640[65345] & 123;
      }
      var v2642 = parentObj$$516.LINECONTROL;
      JAM.call(v2642[parentObj$$516.actualScanLine], v2642, [parentObj$$516]);
    }
    return;
  }
  function v664(parentObj$$515) {
    if (parentObj$$515.LCDTicks < 80) {
      parentObj$$515.scanLineMode2();
    } else {
      if (parentObj$$515.LCDTicks < 252) {
        parentObj$$515.scanLineMode3();
      } else {
        if (parentObj$$515.LCDTicks < 456) {
          parentObj$$515.scanLineMode0();
        } else {
          parentObj$$515.LCDTicks = parentObj$$515.LCDTicks - 456;
          if (parentObj$$515.STATTracker != 3) {
            if (parentObj$$515.STATTracker != 2) {
              var v6715 = parentObj$$515.STATTracker == 0;
              if (v6715) {
                v6715 = parentObj$$515.mode2TriggerSTAT;
              }
              if (v6715) {
                parentObj$$515.interruptsRequested = parentObj$$515.interruptsRequested | 2;
              }
              parentObj$$515.incrementScanLineQueue();
            }
            if (parentObj$$515.hdmaRunning) {
              parentObj$$515.executeHDMA();
            }
            if (parentObj$$515.mode0TriggerSTAT) {
              parentObj$$515.interruptsRequested = parentObj$$515.interruptsRequested | 2;
            }
          }
          parentObj$$515.actualScanLine = parentObj$$515.memory[65348] = 144;
          if (parentObj$$515.memory[65349] == 144) {
            var v2651 = parentObj$$515.memory;
            v2651[65345] = v2651[65345] | 4;
            if (parentObj$$515.LYCMatchTriggerSTAT) {
              parentObj$$515.interruptsRequested = parentObj$$515.interruptsRequested | 2;
            }
          } else {
            var v2653 = parentObj$$515.memory;
            v2653[65345] = v2653[65345] & 123;
          }
          parentObj$$515.STATTracker = 0;
          parentObj$$515.modeSTAT = 1;
          var v6720 = parentObj$$515.interruptsRequested;
          var v8945;
          if (parentObj$$515.mode1TriggerSTAT) {
            v8945 = 3;
          } else {
            v8945 = 1;
          }
          parentObj$$515.interruptsRequested = v6720 | v8945;
          parentObj$$515.checkIRQMatching();
          if (parentObj$$515.drewBlank == 0) {
            var v6723 = parentObj$$515.totalLinesPassed < 144;
            if (!v6723) {
              var v8947 = parentObj$$515.totalLinesPassed == 144;
              if (v8947) {
                v8947 = parentObj$$515.midScanlineOffset > -1;
              }
              v6723 = v8947;
            }
            if (v6723) {
              parentObj$$515.graphicsJITVBlank();
              parentObj$$515.prepareFrame();
            }
          } else {
            --parentObj$$515.drewBlank;
          }
          var v2657 = parentObj$$515.LINECONTROL;
          JAM.call(v2657[144], v2657, [parentObj$$515]);
        }
      }
    }
    return;
  }
  function v663(parentObj$$514) {
    if (parentObj$$514.LCDTicks < 80) {
      parentObj$$514.scanLineMode2();
    } else {
      if (parentObj$$514.LCDTicks < 252) {
        parentObj$$514.scanLineMode3();
      } else {
        if (parentObj$$514.LCDTicks < 456) {
          parentObj$$514.scanLineMode0();
        } else {
          parentObj$$514.LCDTicks = parentObj$$514.LCDTicks - 456;
          if (parentObj$$514.STATTracker != 3) {
            if (parentObj$$514.STATTracker != 2) {
              var v6730 = parentObj$$514.STATTracker == 0;
              if (v6730) {
                v6730 = parentObj$$514.mode2TriggerSTAT;
              }
              if (v6730) {
                parentObj$$514.interruptsRequested = parentObj$$514.interruptsRequested | 2;
              }
              parentObj$$514.incrementScanLineQueue();
            }
            if (parentObj$$514.hdmaRunning) {
              parentObj$$514.executeHDMA();
            }
            if (parentObj$$514.mode0TriggerSTAT) {
              parentObj$$514.interruptsRequested = parentObj$$514.interruptsRequested | 2;
            }
          }
          parentObj$$514.actualScanLine = parentObj$$514.memory[65348] = parentObj$$514.memory[65348] + 1;
          if (parentObj$$514.actualScanLine == parentObj$$514.memory[65349]) {
            var v2666 = parentObj$$514.memory;
            v2666[65345] = v2666[65345] | 4;
            if (parentObj$$514.LYCMatchTriggerSTAT) {
              parentObj$$514.interruptsRequested = parentObj$$514.interruptsRequested | 2;
            }
          } else {
            var v2668 = parentObj$$514.memory;
            v2668[65345] = v2668[65345] & 123;
          }
          parentObj$$514.checkIRQMatching();
          parentObj$$514.STATTracker = 0;
          parentObj$$514.modeSTAT = 2;
          var v2670 = parentObj$$514.LINECONTROL;
          JAM.call(v2670[parentObj$$514.actualScanLine], v2670, [parentObj$$514]);
        }
      }
    }
    return;
  }
  var line$$3 = 0;
  var v2682 = line$$3 < 154;
  for (;v2682;) {
    if (line$$3 < 143) {
      this.LINECONTROL[line$$3] = v663;
    } else {
      if (line$$3 == 143) {
        this.LINECONTROL[143] = v664;
      } else {
        if (line$$3 < 153) {
          this.LINECONTROL[line$$3] = v665;
        } else {
          this.LINECONTROL[153] = v666;
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
  if (this.emulatorTicks >= this.CPUCyclesTotal) {
    this.iterationEndRoutine();
  }
  return;
}
function v661() {
  this.LCDTicks = this.LCDTicks + (this.CPUTicks >> this.doubleSpeedShifter);
  var v2684 = this.LCDCONTROL;
  JAM.call(v2684[this.actualScanLine], v2684, [this]);
  var timedTicks$$1 = this.CPUTicks >> this.doubleSpeedShifter;
  this.audioTicks = this.audioTicks + timedTicks$$1;
  this.emulatorTicks = this.emulatorTicks + timedTicks$$1;
  this.DIVTicks = this.DIVTicks + this.CPUTicks;
  if (this.TIMAEnabled) {
    this.timerTicks = this.timerTicks + this.CPUTicks;
    var v2690 = this.timerTicks >= this.TACClocker;
    for (;v2690;) {
      this.timerTicks = this.timerTicks - this.TACClocker;
      if ((this.memory[65285] = this.memory[65285] + 1) == 256) {
        this.memory[65285] = this.memory[65286];
        this.interruptsRequested = this.interruptsRequested | 4;
        this.checkIRQMatching();
      }
      v2690 = this.timerTicks >= this.TACClocker;
    }
  }
  if (this.serialTimer > 0) {
    this.serialTimer = this.serialTimer - this.CPUTicks;
    if (this.serialTimer <= 0) {
      this.interruptsRequested = this.interruptsRequested | 8;
      this.checkIRQMatching();
    }
    this.serialShiftTimer = this.serialShiftTimer - this.CPUTicks;
    if (this.serialShiftTimer <= 0) {
      this.serialShiftTimer = this.serialShiftTimerAllocated;
      this.memory[65281] = this.memory[65281] << 1 & 254 | 1;
    }
  }
  return;
}
function v660() {
  if (this.memory[65348] == this.memory[65349]) {
    var v2696 = this.memory;
    v2696[65345] = v2696[65345] | 4;
    if (this.LYCMatchTriggerSTAT) {
      this.interruptsRequested = this.interruptsRequested | 2;
      this.checkIRQMatching();
    }
  } else {
    var v2698 = this.memory;
    v2698[65345] = v2698[65345] & 123;
  }
  return;
}
function v659(line$$2) {
  this.spriteCount = 252;
  var v6768 = this.cGBC;
  if (v6768) {
    v6768 = this.gfxSpriteShow;
  }
  if (v6768) {
    var lineAdjusted = line$$2 + 16;
    var yoffset$$3 = 0;
    var v2700;
    if (this.gfxSpriteNormalHeight) {
      v2700 = 8;
    } else {
      v2700 = 16;
    }
    var yCap = v2700;
    var OAMAddress = 65024;
    var v6770 = OAMAddress < 65184;
    if (v6770) {
      v6770 = this.spriteCount < 312;
    }
    var v2703 = v6770;
    for (;v2703;) {
      yoffset$$3 = lineAdjusted - this.memory[OAMAddress];
      var v6772 = yoffset$$3 > -1;
      if (v6772) {
        v6772 = yoffset$$3 < yCap;
      }
      if (v6772) {
        this.spriteCount = this.spriteCount + 6;
      }
      OAMAddress = OAMAddress + 4;
      var v6774 = OAMAddress < 65184;
      if (v6774) {
        v6774 = this.spriteCount < 312;
      }
      v2703 = v6774;
    }
  }
  return;
}
function v658() {
  switch(this.modeSTAT) {
    case 0:
      if (this.actualScanLine == 143) {
        JAM.call(this.updateSpriteCount, this, [0]);
        return this.spriteCount + 5016;
      }
      JAM.call(this.updateSpriteCount, this, [this.actualScanLine + 1]);
      return this.spriteCount + 456;
    case 2:
    ;
    case 3:
      JAM.call(this.updateSpriteCount, this, [this.actualScanLine]);
      return this.spriteCount;
    case 1:
      JAM.call(this.updateSpriteCount, this, [0]);
      return this.spriteCount + 456 * (154 - this.actualScanLine);
  }
  return;
}
function v657() {
  if (this.memory[65349] != 0) {
    if (this.memory[65349] > this.actualScanLine) {
      return 456 * (this.memory[65349] - this.actualScanLine);
    }
    return 456 * (154 - this.actualScanLine + this.memory[65349]);
  }
  var v8969;
  var v10326 = this.actualScanLine == 153;
  if (v10326) {
    v10326 = this.memory[65348] == 0;
  }
  if (v10326) {
    v8969 = 154;
  } else {
    v8969 = 153 - this.actualScanLine;
  }
  return 456 * v8969 + 8;
}
function v656() {
  if (this.modeSTAT != 0) {
    if (this.STATTracker != 2) {
      if (this.STATTracker == 0) {
        if (this.mode2TriggerSTAT) {
          this.interruptsRequested = this.interruptsRequested | 2;
          this.checkIRQMatching();
        }
        this.modeSTAT = 3;
      }
      this.incrementScanLineQueue();
      JAM.call(this.updateSpriteCount, this, [this.actualScanLine]);
      this.STATTracker = 2;
    }
    if (this.LCDTicks >= this.spriteCount) {
      if (this.hdmaRunning) {
        this.executeHDMA();
      }
      if (this.mode0TriggerSTAT) {
        this.interruptsRequested = this.interruptsRequested | 2;
        this.checkIRQMatching();
      }
      this.STATTracker = 3;
      this.modeSTAT = 0;
    }
  }
  return;
}
function v655() {
  if (this.modeSTAT != 3) {
    var v6794 = this.STATTracker == 0;
    if (v6794) {
      v6794 = this.mode2TriggerSTAT;
    }
    if (v6794) {
      this.interruptsRequested = this.interruptsRequested | 2;
      this.checkIRQMatching();
    }
    this.STATTracker = 1;
    this.modeSTAT = 3;
  }
  return;
}
function v654() {
  if (this.STATTracker != 1) {
    if (this.mode2TriggerSTAT) {
      this.interruptsRequested = this.interruptsRequested | 2;
      this.checkIRQMatching();
    }
    this.STATTracker = 1;
    this.modeSTAT = 2;
  }
  return;
}
function v653() {
  var endModulus = this.CPUCyclesTotalCurrent % 4;
  this.CPUCyclesTotal = this.CPUCyclesTotalBase + this.CPUCyclesTotalCurrent - endModulus;
  this.CPUCyclesTotalCurrent = endModulus;
  return;
}
function v652() {
  this.CPUStopped = true;
  this.iterationEndRoutine();
  if (this.emulatorTicks < 0) {
    this.audioTicks = this.audioTicks - this.emulatorTicks;
    this.audioJIT();
  }
  return;
}
function v651() {
  if ((this.stopEmulator & 1) == 0) {
    this.audioJIT();
    this.memory[65284] = this.memory[65284] + (this.DIVTicks >> 8) & 255;
    this.DIVTicks = this.DIVTicks & 255;
    this.stopEmulator = this.stopEmulator | 1;
    this.emulatorTicks = this.emulatorTicks - this.CPUCyclesTotal;
    this.CPUCyclesTotalCurrent = this.CPUCyclesTotalCurrent + this.CPUCyclesTotalRoundoff;
    this.recalculateIterationClockLimit();
  }
  return;
}
function v650() {
  var opcodeToExecute = 0;
  var timedTicks = 0;
  var v2759 = this.stopEmulator == 0;
  for (;v2759;) {
    switch(this.IRQEnableDelay) {
      case 1:
        this.IME = true;
        this.checkIRQMatching();
      case 2:
        --this.IRQEnableDelay;
    }
    if (this.IRQLineMatched > 0) {
      this.launchIRQ();
    }
    var v2737 = this.memoryReader;
    opcodeToExecute = JAM.call(v2737[this.programCounter], v2737, [this, this.programCounter], JAM.policy.p1);
    this.programCounter = this.programCounter + 1 & 65535;
    if (this.skipPCIncrement) {
      this.programCounter = this.programCounter - 1 & 65535;
      this.skipPCIncrement = false;
    }
    this.CPUTicks = this.TICKTable[opcodeToExecute];
    var v2744 = this.OPCODE;
    JAM.call(v2744[opcodeToExecute], v2744, [this]);
    this.LCDTicks = this.LCDTicks + (this.CPUTicks >> this.doubleSpeedShifter);
    var v2745 = this.LCDCONTROL;
    JAM.call(v2745[this.actualScanLine], v2745, [this]);
    timedTicks = this.CPUTicks >> this.doubleSpeedShifter;
    this.audioTicks = this.audioTicks + timedTicks;
    this.emulatorTicks = this.emulatorTicks + timedTicks;
    this.DIVTicks = this.DIVTicks + this.CPUTicks;
    if (this.TIMAEnabled) {
      this.timerTicks = this.timerTicks + this.CPUTicks;
      var v2751 = this.timerTicks >= this.TACClocker;
      for (;v2751;) {
        this.timerTicks = this.timerTicks - this.TACClocker;
        if ((this.memory[65285] = this.memory[65285] + 1) == 256) {
          this.memory[65285] = this.memory[65286];
          this.interruptsRequested = this.interruptsRequested | 4;
          this.checkIRQMatching();
        }
        v2751 = this.timerTicks >= this.TACClocker;
      }
    }
    if (this.serialTimer > 0) {
      this.serialTimer = this.serialTimer - this.CPUTicks;
      if (this.serialTimer <= 0) {
        this.interruptsRequested = this.interruptsRequested | 8;
        this.checkIRQMatching();
      }
      this.serialShiftTimer = this.serialShiftTimer - this.CPUTicks;
      if (this.serialShiftTimer <= 0) {
        this.serialShiftTimer = this.serialShiftTimerAllocated;
        this.memory[65281] = this.memory[65281] << 1 & 254 | 1;
      }
    }
    if (this.emulatorTicks >= this.CPUCyclesTotal) {
      this.iterationEndRoutine();
    }
    this.instructions = this.instructions + 1;
    if (this.instructions > this.totalInstructions) {
      this.iterationEndRoutine();
      this.stopEmulator = this.stopEmulator | 2;
      checkFinalState();
    }
    v2759 = this.stopEmulator == 0;
  }
  return;
}
function v649() {
  if ((this.stopEmulator & 2) == 0) {
    if ((this.stopEmulator & 1) == 1) {
      if (!this.CPUStopped) {
        this.stopEmulator = 0;
        this.drewFrame = false;
        this.audioUnderrunAdjustment();
        this.clockUpdate();
        if (!this.halt) {
          this.executeIteration();
        } else {
          this.CPUTicks = 0;
          this.calculateHALTPeriod();
          if (this.halt) {
            this.updateCoreFull();
          } else {
            this.executeIteration();
          }
        }
        this.requestDraw();
      } else {
        this.audioUnderrunAdjustment();
        this.audioTicks = this.audioTicks + this.CPUCyclesTotal;
        this.audioJIT();
        this.stopEmulator = this.stopEmulator | 1;
      }
    } else {
      cout("Iterator restarted a faulted core.", 2);
      pause();
    }
  }
  return;
}
function v648() {
  this.cachedChannel4Sample = this.noiseSampleTable[this.channel4currentVolume | this.channel4lastSampleLookup];
  this.channel4OutputLevelCache();
  return;
}
function v647(address, data$$23) {
  if (this.channel3canPlay) {
    this.audioJIT();
  }
  this.memory[65328 | address] = data$$23;
  address = address << 1;
  this.channel3PCM[address] = data$$23 >> 4;
  this.channel3PCM[address | 1] = data$$23 & 15;
  return;
}
function v646() {
  this.cachedChannel3Sample = this.channel3PCM[this.channel3lastSampleLookup] >> this.channel3patternType;
  this.channel3OutputLevelCache();
  return;
}
function v645() {
  this.mixerOutputCache = ((this.channel1currentSampleLeftTrimary + this.channel2currentSampleLeftTrimary + this.channel3currentSampleLeftSecondary + this.channel4currentSampleLeftSecondary) * this.VinLeftChannelMasterVolume << 9) + (this.channel1currentSampleRightTrimary + this.channel2currentSampleRightTrimary + this.channel3currentSampleRightSecondary + this.channel4currentSampleRightSecondary) * this.VinRightChannelMasterVolume;
  return;
}
function v644() {
  if (this.channel4Enabled) {
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
  if (this.leftChannel4) {
    v2778 = this.cachedChannel4Sample;
  } else {
    v2778 = 0;
  }
  this.channel4currentSampleLeft = v2778;
  var v2779;
  if (this.rightChannel4) {
    v2779 = this.cachedChannel4Sample;
  } else {
    v2779 = 0;
  }
  this.channel4currentSampleRight = v2779;
  this.channel4OutputLevelSecondaryCache();
  return;
}
function v642() {
  this.channel4canPlay = this.memory[65313] > 7;
  this.channel4EnableCheck();
  this.channel4OutputLevelSecondaryCache();
  return;
}
function v641() {
  var v6865 = this.channel4consecutive;
  if (!v6865) {
    v6865 = this.channel4totalLength > 0;
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
  if (this.channel3Enabled) {
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
  if (this.leftChannel3) {
    v2783 = this.cachedChannel3Sample;
  } else {
    v2783 = 0;
  }
  this.channel3currentSampleLeft = v2783;
  var v2784;
  if (this.rightChannel3) {
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
  if (!v2785) {
    v2785 = this.channel3totalLength > 0;
  }
  this.channel3Enabled = v2785;
  this.channel3OutputLevelSecondaryCache();
  return;
}
function v637() {
  if (this.channel2CachedDuty[this.channel2DutyTracker]) {
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
  if (this.channel2Enabled) {
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
  if (this.leftChannel2) {
    v2788 = this.channel2envelopeVolume;
  } else {
    v2788 = 0;
  }
  this.channel2currentSampleLeft = v2788;
  var v2789;
  if (this.rightChannel2) {
    v2789 = this.channel2envelopeVolume;
  } else {
    v2789 = 0;
  }
  this.channel2currentSampleRight = v2789;
  this.channel2OutputLevelSecondaryCache();
  return;
}
function v634() {
  this.channel2canPlay = this.memory[65303] > 7;
  this.channel2EnableCheck();
  this.channel2OutputLevelSecondaryCache();
  return;
}
function v633() {
  var v6875 = this.channel2consecutive;
  if (!v6875) {
    v6875 = this.channel2totalLength > 0;
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
  if (this.channel1CachedDuty[this.channel1DutyTracker]) {
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
  if (this.channel1Enabled) {
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
  if (this.leftChannel1) {
    v2794 = this.channel1envelopeVolume;
  } else {
    v2794 = 0;
  }
  this.channel1currentSampleLeft = v2794;
  var v2795;
  if (this.rightChannel1) {
    v2795 = this.channel1envelopeVolume;
  } else {
    v2795 = 0;
  }
  this.channel1currentSampleRight = v2795;
  this.channel1OutputLevelSecondaryCache();
  return;
}
function v629() {
  this.channel1canPlay = this.memory[65298] > 7;
  this.channel1EnableCheck();
  this.channel1OutputLevelSecondaryCache();
  return;
}
function v628() {
  var v8987 = this.channel1consecutive;
  if (!v8987) {
    v8987 = this.channel1totalLength > 0;
  }
  var v6881 = v8987;
  if (v6881) {
    v6881 = !this.channel1SweepFault;
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
  if ((this.channel1FrequencyCounter = this.channel1FrequencyCounter - 1) == 0) {
    this.channel1FrequencyCounter = this.channel1FrequencyTracker;
    this.channel1DutyTracker = this.channel1DutyTracker + 1 & 7;
    this.channel1OutputLevelTrimaryCache();
  }
  if ((this.channel2FrequencyCounter = this.channel2FrequencyCounter - 1) == 0) {
    this.channel2FrequencyCounter = this.channel2FrequencyTracker;
    this.channel2DutyTracker = this.channel2DutyTracker + 1 & 7;
    this.channel2OutputLevelTrimaryCache();
  }
  if ((this.channel3Counter = this.channel3Counter - 1) == 0) {
    if (this.channel3canPlay) {
      this.channel3lastSampleLookup = this.channel3lastSampleLookup + 1 & 31;
    }
    this.channel3Counter = this.channel3FrequencyPeriod;
    this.channel3UpdateCache();
  }
  if ((this.channel4Counter = this.channel4Counter - 1) == 0) {
    this.channel4lastSampleLookup = this.channel4lastSampleLookup + 1 & this.channel4BitRange;
    this.channel4Counter = this.channel4FrequencyPeriod;
    this.channel4UpdateCache();
  }
  return;
}
function v626() {
  if (this.channel1envelopeSweepsLast > -1) {
    if (this.channel1envelopeSweeps > 0) {
      --this.channel1envelopeSweeps;
    } else {
      if (!this.channel1envelopeType) {
        if (this.channel1envelopeVolume > 0) {
          --this.channel1envelopeVolume;
          this.channel1envelopeSweeps = this.channel1envelopeSweepsLast;
          this.channel1OutputLevelCache();
        } else {
          this.channel1envelopeSweepsLast = -1;
        }
      } else {
        if (this.channel1envelopeVolume < 15) {
          ++this.channel1envelopeVolume;
          this.channel1envelopeSweeps = this.channel1envelopeSweepsLast;
          this.channel1OutputLevelCache();
        } else {
          this.channel1envelopeSweepsLast = -1;
        }
      }
    }
  }
  if (this.channel2envelopeSweepsLast > -1) {
    if (this.channel2envelopeSweeps > 0) {
      --this.channel2envelopeSweeps;
    } else {
      if (!this.channel2envelopeType) {
        if (this.channel2envelopeVolume > 0) {
          --this.channel2envelopeVolume;
          this.channel2envelopeSweeps = this.channel2envelopeSweepsLast;
          this.channel2OutputLevelCache();
        } else {
          this.channel2envelopeSweepsLast = -1;
        }
      } else {
        if (this.channel2envelopeVolume < 15) {
          ++this.channel2envelopeVolume;
          this.channel2envelopeSweeps = this.channel2envelopeSweepsLast;
          this.channel2OutputLevelCache();
        } else {
          this.channel2envelopeSweepsLast = -1;
        }
      }
    }
  }
  if (this.channel4envelopeSweepsLast > -1) {
    if (this.channel4envelopeSweeps > 0) {
      --this.channel4envelopeSweeps;
    } else {
      if (!this.channel4envelopeType) {
        if (this.channel4envelopeVolume > 0) {
          this.channel4currentVolume = (this.channel4envelopeVolume = this.channel4envelopeVolume - 1) << this.channel4VolumeShifter;
          this.channel4envelopeSweeps = this.channel4envelopeSweepsLast;
          this.channel4UpdateCache();
        } else {
          this.channel4envelopeSweepsLast = -1;
        }
      } else {
        if (this.channel4envelopeVolume < 15) {
          this.channel4currentVolume = (this.channel4envelopeVolume = this.channel4envelopeVolume + 1) << this.channel4VolumeShifter;
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
  if (this.channel1lastTimeSweep > 0) {
    if (this.channel1frequencySweepDivider > 0) {
      if (this.channel1numSweep > 0) {
        --this.channel1numSweep;
        if (this.channel1decreaseSweep) {
          this.channel1ShadowFrequency = this.channel1ShadowFrequency - (this.channel1ShadowFrequency >> this.channel1frequencySweepDivider);
          this.channel1frequency = this.channel1ShadowFrequency & 2047;
          this.channel1FrequencyTracker = 2048 - this.channel1frequency << 2;
        } else {
          this.channel1ShadowFrequency = this.channel1ShadowFrequency + (this.channel1ShadowFrequency >> this.channel1frequencySweepDivider);
          this.channel1frequency = this.channel1ShadowFrequency;
          if (this.channel1ShadowFrequency <= 2047) {
            this.channel1FrequencyTracker = 2048 - this.channel1frequency << 2;
            if (this.channel1ShadowFrequency + (this.channel1ShadowFrequency >> this.channel1frequencySweepDivider) > 2047) {
              this.channel1SweepFault = true;
              this.channel1EnableCheck();
              var v2830 = this.memory;
              v2830[65318] = v2830[65318] & 254;
            }
          } else {
            this.channel1frequency = this.channel1frequency & 2047;
            this.channel1SweepFault = true;
            this.channel1EnableCheck();
            var v2832 = this.memory;
            v2832[65318] = v2832[65318] & 254;
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
  var v6917 = !this.channel1SweepFault;
  if (v6917) {
    v6917 = this.channel1timeSweep > 0;
  }
  if (v6917) {
    if ((this.channel1timeSweep = this.channel1timeSweep - 1) == 0) {
      this.runAudioSweep();
    }
  }
  return;
}
function v623() {
  if (this.channel1totalLength > 1) {
    --this.channel1totalLength;
  } else {
    if (this.channel1totalLength == 1) {
      this.channel1totalLength = 0;
      this.channel1EnableCheck();
      var v2840 = this.memory;
      v2840[65318] = v2840[65318] & 254;
    }
  }
  if (this.channel2totalLength > 1) {
    --this.channel2totalLength;
  } else {
    if (this.channel2totalLength == 1) {
      this.channel2totalLength = 0;
      this.channel2EnableCheck();
      var v2843 = this.memory;
      v2843[65318] = v2843[65318] & 253;
    }
  }
  if (this.channel3totalLength > 1) {
    --this.channel3totalLength;
  } else {
    if (this.channel3totalLength == 1) {
      this.channel3totalLength = 0;
      this.channel3EnableCheck();
      var v2846 = this.memory;
      v2846[65318] = v2846[65318] & 251;
    }
  }
  if (this.channel4totalLength > 1) {
    --this.channel4totalLength;
  } else {
    if (this.channel4totalLength == 1) {
      this.channel4totalLength = 0;
      this.channel4EnableCheck();
      var v2849 = this.memory;
      v2849[65318] = v2849[65318] & 247;
    }
  }
  return;
}
function v622() {
  var v2852 = this.sequencePosition;
  this.sequencePosition = this.sequencePosition + 1;
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
  if (settings[0]) {
    JAM.call(this.generateAudio, this, [this.audioTicks]);
  } else {
    JAM.call(this.generateAudioFake, this, [this.audioTicks]);
  }
  this.audioTicks = 0;
  return;
}
function v620(numSamples$$1) {
  var v6927 = this.soundMasterEnabled;
  if (v6927) {
    v6927 = !this.CPUStopped;
  }
  if (v6927) {
    var v2857 = (numSamples$$1 = numSamples$$1 - 1) > -1;
    for (;v2857;) {
      this.computeAudioChannels();
      if ((this.sequencerClocks = this.sequencerClocks - 1) == 0) {
        this.audioComputeSequencer();
        this.sequencerClocks = 8192;
      }
      v2857 = (numSamples$$1 = numSamples$$1 - 1) > -1;
    }
  }
  return;
}
function v619(numSamples) {
  var v6931 = this.soundMasterEnabled;
  if (v6931) {
    v6931 = !this.CPUStopped;
  }
  if (v6931) {
    var samplesToGenerate = 0;
    var v2865 = numSamples > 0;
    for (;v2865;) {
      var v2859;
      if (numSamples < this.sequencerClocks) {
        v2859 = numSamples;
      } else {
        v2859 = this.sequencerClocks;
      }
      samplesToGenerate = v2859;
      this.sequencerClocks = this.sequencerClocks - samplesToGenerate;
      numSamples = numSamples - samplesToGenerate;
      var v2863 = (samplesToGenerate = samplesToGenerate - 1) > -1;
      for (;v2863;) {
        this.computeAudioChannels();
        var v2860 = this.currentBuffer;
        var v2861 = this.audioIndex;
        this.audioIndex = this.audioIndex + 1;
        JAM.set(v2860, v2861, this.mixerOutputCache);
        if (this.audioIndex == this.numSamplesTotal) {
          this.audioIndex = 0;
          this.outputAudio();
        }
        v2863 = (samplesToGenerate = samplesToGenerate - 1) > -1;
      }
      if (this.sequencerClocks == 0) {
        this.audioComputeSequencer();
        this.sequencerClocks = 8192;
      }
      v2865 = numSamples > 0;
    }
  } else {
    var v2869 = (numSamples = numSamples - 1) > -1;
    for (;v2869;) {
      var v2866 = this.currentBuffer;
      var v2867 = this.audioIndex;
      this.audioIndex = this.audioIndex + 1;
      v2866[v2867] = 61680;
      if (this.audioIndex == this.numSamplesTotal) {
        this.audioIndex = 0;
        this.outputAudio();
      }
      v2869 = (numSamples = numSamples - 1) > -1;
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
  var v2878 = sourcePosition < this.numSamplesTotal;
  for (;v2878;) {
    sampleFactor = averageL = averageR = 0;
    var v2873 = sampleFactor < divisor1;
    for (;v2873;) {
      var v2871 = this.currentBuffer;
      var v2872 = sourcePosition;
      sourcePosition = sourcePosition + 1;
      dirtySample = v2871[v2872];
      averageL = averageL + (dirtySample >> 9);
      averageR = averageR + (dirtySample & 511);
      ++sampleFactor;
      v2873 = sampleFactor < divisor1;
    }
    var v2874 = this.secondaryBuffer;
    var v2875 = destinationPosition;
    destinationPosition = destinationPosition + 1;
    v2874[v2875] = averageL / divisor2 - 1;
    var v2876 = this.secondaryBuffer;
    var v2877 = destinationPosition;
    destinationPosition = destinationPosition + 1;
    v2876[v2877] = averageR / divisor2 - 1;
    v2878 = sourcePosition < this.numSamplesTotal;
  }
  var v2879 = this.audioHandle;
  JAM.call(v2879.writeAudioNoCallback, v2879, [this.secondaryBuffer]);
  return;
}
function v617() {
  this.channel1FrequencyTracker = 8192;
  this.channel1DutyTracker = 0;
  this.channel1CachedDuty = this.dutyLookup[2];
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
  this.channel2CachedDuty = this.dutyLookup[2];
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
  if (settings[0]) {
    var underrunAmount = this.bufferContainAmount - this.audioHandle.remainingBuffer();
    if (underrunAmount > 0) {
      this.CPUCyclesTotalCurrent = this.CPUCyclesTotalCurrent + (underrunAmount >> 1) * this.machineOut;
      this.recalculateIterationClockLimit();
    }
  }
  return;
}
function v615() {
  var randomFactor = 1;
  var v10706 = JAM.call(this.getTypedArray, this, [524288, 0, "int8"], JAM.policy.p1);
  this.LSFR15Table = v10706;
  var LSFR = 32767;
  var LSFRShifted = 16383;
  var index$$57 = 0;
  var v2919 = index$$57 < 32768;
  for (;v2919;) {
    randomFactor = 1 - (LSFR & 1);
    this.LSFR15Table[32768 | index$$57] = randomFactor;
    this.LSFR15Table[65536 | index$$57] = randomFactor * 2;
    this.LSFR15Table[98304 | index$$57] = randomFactor * 3;
    this.LSFR15Table[131072 | index$$57] = randomFactor * 4;
    this.LSFR15Table[163840 | index$$57] = randomFactor * 5;
    this.LSFR15Table[196608 | index$$57] = randomFactor * 6;
    this.LSFR15Table[229376 | index$$57] = randomFactor * 7;
    this.LSFR15Table[262144 | index$$57] = randomFactor * 8;
    this.LSFR15Table[294912 | index$$57] = randomFactor * 9;
    this.LSFR15Table[327680 | index$$57] = randomFactor * 10;
    this.LSFR15Table[360448 | index$$57] = randomFactor * 11;
    this.LSFR15Table[393216 | index$$57] = randomFactor * 12;
    this.LSFR15Table[425984 | index$$57] = randomFactor * 13;
    this.LSFR15Table[458752 | index$$57] = randomFactor * 14;
    this.LSFR15Table[491520 | index$$57] = randomFactor * 15;
    LSFRShifted = LSFR >> 1;
    LSFR = LSFRShifted | ((LSFRShifted ^ LSFR) & 1) << 14;
    ++index$$57;
    v2919 = index$$57 < 32768;
  }
  var v10707 = JAM.call(this.getTypedArray, this, [2048, 0, "int8"], JAM.policy.p1);
  this.LSFR7Table = v10707;
  LSFR = 127;
  index$$57 = 0;
  var v2952 = index$$57 < 128;
  for (;v2952;) {
    randomFactor = 1 - (LSFR & 1);
    this.LSFR7Table[128 | index$$57] = randomFactor;
    this.LSFR7Table[256 | index$$57] = randomFactor * 2;
    this.LSFR7Table[384 | index$$57] = randomFactor * 3;
    this.LSFR7Table[512 | index$$57] = randomFactor * 4;
    this.LSFR7Table[640 | index$$57] = randomFactor * 5;
    this.LSFR7Table[768 | index$$57] = randomFactor * 6;
    this.LSFR7Table[896 | index$$57] = randomFactor * 7;
    this.LSFR7Table[1024 | index$$57] = randomFactor * 8;
    this.LSFR7Table[1152 | index$$57] = randomFactor * 9;
    this.LSFR7Table[1280 | index$$57] = randomFactor * 10;
    this.LSFR7Table[1408 | index$$57] = randomFactor * 11;
    this.LSFR7Table[1536 | index$$57] = randomFactor * 12;
    this.LSFR7Table[1664 | index$$57] = randomFactor * 13;
    this.LSFR7Table[1792 | index$$57] = randomFactor * 14;
    this.LSFR7Table[1920 | index$$57] = randomFactor * 15;
    LSFRShifted = LSFR >> 1;
    LSFR = LSFRShifted | ((LSFRShifted ^ LSFR) & 1) << 6;
    ++index$$57;
    v2952 = index$$57 < 128;
  }
  var v6954 = !this.noiseSampleTable;
  if (v6954) {
    v6954 = this.memory.length == 65536;
  }
  if (v6954) {
    var v2953;
    if ((this.memory[65314] & 8) == 8) {
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
  this.bufferContainAmount = JAM.call(Math.max, Math, [this.sampleSize * settings[7] / settings[13], 4096], JAM.policy.p1) << 1;
  this.numSamplesTotal = this.sampleSize - this.sampleSize % settings[13] | 0;
  var v10708 = JAM.call(this.getTypedArray, this, [this.numSamplesTotal, 61680, "int32"], JAM.policy.p1);
  this.currentBuffer = v10708;
  var v10709 = JAM.call(this.getTypedArray, this, [(this.numSamplesTotal << 1) / settings[13], 0, "float32"], JAM.policy.p1);
  this.secondaryBuffer = v10709;
  return;
}
function v613() {
  var v6961 = settings[0];
  if (v6961) {
    v6961 = this.audioHandle;
  }
  if (v6961) {
    try {
      var v2959 = this.audioHandle;
      JAM.call(v2959.changeVolume, v2959, [settings[14]]);
    } catch (error$$23) {
    }
  }
  return;
}
function v612() {
  this.sampleSize = 4194304 / 1E3 * settings[6];
  this.machineOut = settings[13];
  if (settings[0]) {
    try {
      var parentObj$$513 = this;
      var v10710 = new XAudioServer(2, 4194304 / settings[13], 0, JAM.call(Math.max, Math, [this.sampleSize * settings[8] / settings[13], 8192], JAM.policy.p1) << 1, null, settings[14]);
      this.audioHandle = v10710;
      this.initAudioBuffer();
    } catch (error$$21) {
      cout("Audio system cannot run: " + error$$21.message, 2);
      settings[0] = false;
    }
  } else {
    if (this.audioHandle) {
      try {
        var v2968 = this.audioHandle;
        JAM.call(v2968.changeVolume, v2968, [0]);
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
    this.JoyPad = this.JoyPad & (255 ^ 1 << key$$14);
    var v6967 = !this.cGBC;
    if (v6967) {
      var v9026 = !this.usedBootROM;
      if (!v9026) {
        v9026 = !this.usedGBCBootROM;
      }
      v6967 = v9026;
    }
    if (v6967) {
      this.interruptsRequested = this.interruptsRequested | 16;
      this.remainingClocks = 0;
      this.checkIRQMatching();
    }
  } else {
    this.JoyPad = this.JoyPad | 1 << key$$14;
  }
  var v2972 = this.memory;
  var v6971 = this.memory[65280] & 48;
  var v9975;
  if ((this.memory[65280] & 32) == 0) {
    v9975 = this.JoyPad >> 4;
  } else {
    v9975 = 15;
  }
  var v9028 = v9975;
  var v9976;
  if ((this.memory[65280] & 16) == 0) {
    v9976 = this.JoyPad & 15;
  } else {
    v9976 = 15;
  }
  v2972[65280] = v6971 + (v9028 & v9976);
  this.CPUStopped = false;
  return;
}
function v609() {
  var v6973 = this.offscreenWidth == this.onscreenWidth;
  if (v6973) {
    v6973 = this.offscreenHeight == this.onscreenHeight;
  }
  if (v6973) {
    var v2973 = this.drawContextOnscreen;
    JAM.call(v2973.putImageData, v2973, [this.canvasBuffer, 0, 0], JAM.policy.p1);
  } else {
    var v2975 = this.drawContextOffscreen;
    JAM.call(v2975.putImageData, v2975, [this.canvasBuffer, 0, 0], JAM.policy.p1);
    var v2977 = this.drawContextOnscreen;
    JAM.call(v2977.drawImage, v2977, [this.canvasOffscreen, 0, 0, this.onscreenWidth, this.onscreenHeight], JAM.policy.p1);
  }
  return;
}
function v608() {
  this.recomputeDimension();
  if (this.offscreenRGBCount != 92160) {
    this.compileResizeFrameBufferFunction();
  } else {
    this.resizer = null;
  }
  try {
    var v10711 = new GameBoyCanvas;
    this.canvasOffscreen = v10711;
    this.canvasOffscreen.width = this.offscreenWidth;
    this.canvasOffscreen.height = this.offscreenHeight;
    var v2985 = this.canvasOffscreen;
    var v10712 = JAM.call(v2985.getContext, v2985, ["2d"]);
    this.drawContextOffscreen = v10712;
    var v2986 = this.canvas;
    var v10713 = JAM.call(v2986.getContext, v2986, ["2d"]);
    this.drawContextOnscreen = v10713;
    try {
      var v2987 = this.drawContextOffscreen;
      var v10714 = JAM.call(v2987.createImageData, v2987, [this.offscreenWidth, this.offscreenHeight], JAM.policy.p1);
      this.canvasBuffer = v10714;
    } catch (error$$19) {
      cout('Falling back to the getImageData initialization (Error "' + error$$19.message + '").', 1);
      var v2991 = this.drawContextOffscreen;
      var v10715 = JAM.call(v2991.getImageData, v2991, [0, 0, this.offscreenWidth, this.offscreenHeight], JAM.policy.p1);
      this.canvasBuffer = v10715;
    }
    var index$$56 = this.offscreenRGBCount;
    var v3002 = index$$56 > 0;
    for (;v3002;) {
      this.canvasBuffer.data[index$$56 = index$$56 - 4] = 248;
      this.canvasBuffer.data[index$$56 + 1] = 248;
      this.canvasBuffer.data[index$$56 + 2] = 248;
      this.canvasBuffer.data[index$$56 + 3] = 255;
      v3002 = index$$56 > 0;
    }
    this.graphicsBlit();
    this.canvas.style.visibility = "visible";
    if (this.swizzledFrame == null) {
      var v10716 = JAM.call(this.getTypedArray, this, [69120, 255, "uint8"], JAM.policy.p1);
      this.swizzledFrame = v10716;
    }
    this.drewFrame = true;
    this.requestDraw();
  } catch (error$$20) {
    throw new Error("HTML5 Canvas support required: " + error$$20.message + "file: " + error$$20.fileName + ", line: " + error$$20.lineNumber);
  }
  return;
}
function v607() {
  initNewCanvas();
  this.onscreenWidth = this.canvas.width;
  this.onscreenHeight = this.canvas.height;
  var v6984 = GameBoyWindow;
  if (v6984) {
    v6984 = GameBoyWindow.mozRequestAnimationFrame;
  }
  if (v6984) {
    var v3008 = this.canvas;
    var v6985;
    if (!settings[12]) {
      v6985 = 160;
    } else {
      v6985 = this.canvas.width;
    }
    v3008.width = this.onscreenWidth = v6985;
    var v3009 = this.canvas;
    var v6986;
    if (!settings[12]) {
      v6986 = 144;
    } else {
      v6986 = this.canvas.height;
    }
    v3009.height = this.onscreenHeight = v6986;
  } else {
    this.onscreenWidth = this.canvas.width;
    this.onscreenHeight = this.canvas.height;
  }
  var v3013;
  if (!settings[12]) {
    v3013 = 160;
  } else {
    v3013 = this.canvas.width;
  }
  this.offscreenWidth = v3013;
  var v3014;
  if (!settings[12]) {
    v3014 = 144;
  } else {
    v3014 = this.canvas.height;
  }
  this.offscreenHeight = v3014;
  this.offscreenRGBCount = this.offscreenWidth * this.offscreenHeight * 4;
  return;
}
function v606() {
  var v10341 = this.cMBC1;
  if (!v10341) {
    v10341 = this.cMBC2;
  }
  var v9981 = v10341;
  if (!v9981) {
    v9981 = this.cMBC3;
  }
  var v9042 = v9981;
  if (!v9042) {
    v9042 = this.cMBC5;
  }
  var v6993 = v9042;
  if (!v6993) {
    v6993 = this.cMBC7;
  }
  var v3016 = v6993;
  if (!v3016) {
    v3016 = this.cRUMBLE;
  }
  return v3016;
}
function v605() {
  if (this.cMBC2) {
    this.numRAMBanks = 1 / 16;
  } else {
    var v9983 = this.cMBC1;
    if (!v9983) {
      v9983 = this.cRUMBLE;
    }
    var v9044 = v9983;
    if (!v9044) {
      v9044 = this.cMBC3;
    }
    var v6995 = v9044;
    if (!v6995) {
      v6995 = this.cHuC3;
    }
    if (v6995) {
      this.numRAMBanks = 4;
    } else {
      if (this.cMBC5) {
        this.numRAMBanks = 16;
      } else {
        if (this.cSRAM) {
          this.numRAMBanks = 1;
        }
      }
    }
  }
  if (this.numRAMBanks > 0) {
    if (!this.MBCRAMUtilized()) {
      this.MBCRAMBanksEnabled = true;
    }
    var v3022;
    if (typeof this.openMBC == "function") {
      v3022 = JAM.call(this.openMBC, this, [this.name]);
    } else {
      v3022 = [];
    }
    var MBCRam = v3022;
    if (MBCRam.length > 0) {
      var v10717 = JAM.call(this.toTypedArray, this, [MBCRam, "uint8"], JAM.policy.p1);
      this.MBCRam = v10717;
    } else {
      var v10718 = JAM.call(this.getTypedArray, this, [this.numRAMBanks * 8192, 0, "uint8"], JAM.policy.p1);
      this.MBCRam = v10718;
    }
  }
  cout("Actual bytes of MBC RAM allocated: " + this.numRAMBanks * 8192, 0);
  this.returnFromRTCState();
  if (this.cGBC) {
    var v10719 = JAM.call(this.getTypedArray, this, [8192, 0, "uint8"], JAM.policy.p1);
    this.VRAM = v10719;
    var v10720 = JAM.call(this.getTypedArray, this, [28672, 0, "uint8"], JAM.policy.p1);
    this.GBCMemory = v10720;
  }
  this.memoryReadJumpCompile();
  this.memoryWriteJumpCompile();
  return;
}
function v604() {
  this.baseCPUCyclesPerIteration = 524288 / 125 * settings[6];
  this.CPUCyclesTotalRoundoff = this.baseCPUCyclesPerIteration % 4;
  this.CPUCyclesTotalBase = this.CPUCyclesTotal = this.baseCPUCyclesPerIteration - this.CPUCyclesTotalRoundoff | 0;
  this.CPUCyclesTotalCurrent = 0;
  return;
}
function v603() {
  var index$$55 = 0;
  var v3033 = index$$55 < 256;
  for (;v3033;) {
    this.memory[index$$55] = this.ROM[index$$55];
    ++index$$55;
    v3033 = index$$55 < 256;
  }
  if (this.usedGBCBootROM) {
    index$$55 = 512;
    var v3035 = index$$55 < 2304;
    for (;v3035;) {
      this.memory[index$$55] = this.ROM[index$$55];
      ++index$$55;
      v3035 = index$$55 < 2304;
    }
    if (!this.cGBC) {
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
    if (this.ROMImage.charCodeAt(index$$54) > 0) {
      this.name = this.name + this.ROMImage[index$$54];
    }
    index$$54++;
    v3039 = index$$54 < 319;
  }
  index$$54 = 319;
  var v3041 = index$$54 < 323;
  for (;v3041;) {
    if (this.ROMImage.charCodeAt(index$$54) > 0) {
      this.gameCode = this.gameCode + this.ROMImage[index$$54];
    }
    index$$54++;
    v3041 = index$$54 < 323;
  }
  cout("Game Title: " + this.name + "[" + this.gameCode + "][" + this.ROMImage[323] + "]", 0);
  cout("Game Code: " + this.gameCode, 0);
  this.cartridgeType = this.ROM[327];
  cout("Cartridge type #" + this.cartridgeType, 0);
  var MBCType = "";
  switch(this.cartridgeType) {
    case 0:
      if (!settings[9]) {
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
  cout("Cartridge Type: " + MBCType + ".", 0);
  this.numROMBanks = this.ROMBanks[this.ROM[328]];
  cout(this.numROMBanks + " ROM banks.", 0);
  switch(this.RAMBanks[this.ROM[329]]) {
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
  if (!this.usedBootROM) {
    switch(this.ROM[323]) {
      case 0:
        this.cGBC = false;
        cout("Only GB mode detected.", 0);
        break;
      case 50:
        var v7025 = !settings[2];
        if (v7025) {
          v7025 = this.name + this.gameCode + this.ROM[323] == "Game and Watch 50";
        }
        if (v7025) {
          this.cGBC = true;
          cout("Created a boot exception for Game and Watch Gallery 2 (GBC ID byte is wrong on the cartridge).", 1);
        } else {
          this.cGBC = false;
        }
        break;
      case 128:
        this.cGBC = !settings[2];
        cout("GB and GBC mode detected.", 0);
        break;
      case 192:
        this.cGBC = true;
        cout("Only GBC mode detected.", 0);
        break;
      default:
        this.cGBC = false;
        cout("Unknown GameBoy game type code #" + this.ROM[323] + ", defaulting to GB mode (Old games don't have a type code).", 1);
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
  var cOldLicense = this.ROM[331];
  var cNewLicense = this.ROM[324] & 65280 | this.ROM[325] & 255;
  if (cOldLicense != 51) {
    cout("Old style license code: " + cOldLicense, 0);
  } else {
    cout("New style license code: " + cNewLicense, 0);
  }
  this.ROMImage = "";
  return;
}
function v601() {
  if (this.ROMImage.length > 0) {
    return this.ROMImage.length;
  }
  var length$$17 = this.ROM.length;
  var index$$53 = 0;
  var v3067 = index$$53 < length$$17;
  for (;v3067;) {
    this.ROMImage = this.ROMImage + String.fromCharCode(this.ROM[index$$53]);
    index$$53++;
    v3067 = index$$53 < length$$17;
  }
  return this.ROMImage;
}
function v600() {
  this.ROM = [];
  this.usedBootROM = settings[1];
  var maxLength = this.ROMImage.length;
  if (maxLength < 16384) {
    throw new Error("ROM image size too small.");
  }
  var v10721 = JAM.call(this.getTypedArray, this, [maxLength, 0, "uint8"], JAM.policy.p1);
  this.ROM = v10721;
  var romIndex = 0;
  if (this.usedBootROM) {
    if (!settings[11]) {
      var v3072 = romIndex < 256;
      for (;v3072;) {
        this.memory[romIndex] = this.GBCBOOTROM[romIndex];
        this.ROM[romIndex] = this.ROMImage.charCodeAt(romIndex) & 255;
        ++romIndex;
        v3072 = romIndex < 256;
      }
      var v3074 = romIndex < 512;
      for (;v3074;) {
        this.memory[romIndex] = this.ROM[romIndex] = this.ROMImage.charCodeAt(romIndex) & 255;
        ++romIndex;
        v3074 = romIndex < 512;
      }
      var v3077 = romIndex < 2304;
      for (;v3077;) {
        this.memory[romIndex] = this.GBCBOOTROM[romIndex - 256];
        this.ROM[romIndex] = this.ROMImage.charCodeAt(romIndex) & 255;
        ++romIndex;
        v3077 = romIndex < 2304;
      }
      this.usedGBCBootROM = true;
    } else {
      var v3080 = romIndex < 256;
      for (;v3080;) {
        this.memory[romIndex] = this.GBBOOTROM[romIndex];
        this.ROM[romIndex] = this.ROMImage.charCodeAt(romIndex) & 255;
        ++romIndex;
        v3080 = romIndex < 256;
      }
    }
    var v3083 = romIndex < 16384;
    for (;v3083;) {
      this.memory[romIndex] = this.ROM[romIndex] = this.ROMImage.charCodeAt(romIndex) & 255;
      ++romIndex;
      v3083 = romIndex < 16384;
    }
  } else {
    var v3085 = romIndex < 16384;
    for (;v3085;) {
      this.memory[romIndex] = this.ROM[romIndex] = this.ROMImage.charCodeAt(romIndex) & 255;
      ++romIndex;
      v3085 = romIndex < 16384;
    }
  }
  var v3088 = romIndex < maxLength;
  for (;v3088;) {
    this.ROM[romIndex] = this.ROMImage.charCodeAt(romIndex) & 255;
    ++romIndex;
    v3088 = romIndex < maxLength;
  }
  var v10722 = Math.floor(this.ROM.length / 16384);
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
  this.memory[65280] = 15;
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
    if (v7045) {
      JAM.call(this.memoryWrite, this, [65280 | index$$52, this.ffxxDump[index$$52]], JAM.policy.p1);
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
          JAM.call(this.memoryWrite, this, [65280 | index$$52, this.ffxxDump[index$$52]], JAM.policy.p1);
          break;
        default:
          this.memory[65280 | index$$52] = this.ffxxDump[index$$52];
      }
    }
    --index$$52;
    v3098 = index$$52 >= 0;
  }
  if (this.cGBC) {
    this.memory[65388] = 254;
    this.memory[65396] = 254;
  } else {
    this.memory[65352] = 255;
    this.memory[65353] = 255;
    this.memory[65388] = 255;
    this.memory[65396] = 255;
  }
  cout("Starting without the GBC boot ROM.", 0);
  var v3106;
  if (this.cGBC) {
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
  this.channel1CachedDuty = this.dutyLookup[2];
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
  this.channel2CachedDuty = this.dutyLookup[2];
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
    var v10723 = JAM.call(this.getTypedArray, this, [64, 0, "uint8"], JAM.policy.p1);
    tileArray[v3109] = v10723;
    v3110 = tileNumber < tileAmount;
  }
  return tileArray;
}
function v596() {
  var v10724 = JAM.call(this.getTypedArray, this, [65536, 0, "uint8"], JAM.policy.p1);
  this.memory = v10724;
  var v10725 = JAM.call(this.getTypedArray, this, [23040, 16316664, "int32"], JAM.policy.p1);
  this.frameBuffer = v10725;
  var v10726 = JAM.call(this.getTypedArray, this, [2048, 0, "uint8"], JAM.policy.p1);
  this.BGCHRBank1 = v10726;
  var v10727 = JAM.call(this.toTypedArray, this, [this.TICKTable, "uint8"], JAM.policy.p1);
  this.TICKTable = v10727;
  var v10728 = JAM.call(this.toTypedArray, this, [this.SecondaryTICKTable, "uint8"], JAM.policy.p1);
  this.SecondaryTICKTable = v10728;
  var v10729 = JAM.call(this.getTypedArray, this, [32, 0, "int8"], JAM.policy.p1);
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
  var v7050 = typeof this.openRTC == "function";
  if (v7050) {
    v7050 = this.cTIMER;
  }
  if (v7050) {
    var rtcData = JAM.call(this.openRTC, this, [this.name]);
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
  var v10730 = JAM.call(this.toTypedArray, this, [state$$1[v7051], "uint8"], JAM.policy.p1);
  this.ROM = v10730;
  var v10731 = Math.floor(this.ROM.length / 16384);
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
  var v10732 = JAM.call(this.toTypedArray, this, [state$$1[v7053], "uint8"], JAM.policy.p1);
  this.memory = v10732;
  var v7054 = index$$50;
  index$$50 = index$$50 + 1;
  var v10733 = JAM.call(this.toTypedArray, this, [state$$1[v7054], "uint8"], JAM.policy.p1);
  this.MBCRam = v10733;
  var v7055 = index$$50;
  index$$50 = index$$50 + 1;
  var v10734 = JAM.call(this.toTypedArray, this, [state$$1[v7055], "uint8"], JAM.policy.p1);
  this.VRAM = v10734;
  var v3150 = index$$50;
  index$$50 = index$$50 + 1;
  this.currVRAMBank = state$$1[v3150];
  var v7056 = index$$50;
  index$$50 = index$$50 + 1;
  var v10735 = JAM.call(this.toTypedArray, this, [state$$1[v7056], "uint8"], JAM.policy.p1);
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
  var v10736 = JAM.call(this.toTypedArray, this, [state$$1[v7057], "int32"], JAM.policy.p1);
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
  var v10737 = JAM.call(this.toTypedArray, this, [state$$1[v7058], "int8"], JAM.policy.p1);
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
  var v10738 = JAM.call(this.toTypedArray, this, [state$$1[v7059], "uint8"], JAM.policy.p1);
  this.gbcOBJRawPalette = v10738;
  var v7060 = index$$50;
  index$$50 = index$$50 + 1;
  var v10739 = JAM.call(this.toTypedArray, this, [state$$1[v7060], "uint8"], JAM.policy.p1);
  this.gbcBGRawPalette = v10739;
  var v7061 = index$$50;
  index$$50 = index$$50 + 1;
  var v10740 = JAM.call(this.toTypedArray, this, [state$$1[v7061], "int32"], JAM.policy.p1);
  this.gbOBJPalette = v10740;
  var v7062 = index$$50;
  index$$50 = index$$50 + 1;
  var v10741 = JAM.call(this.toTypedArray, this, [state$$1[v7062], "int32"], JAM.policy.p1);
  this.gbBGPalette = v10741;
  var v7063 = index$$50;
  index$$50 = index$$50 + 1;
  var v10742 = JAM.call(this.toTypedArray, this, [state$$1[v7063], "int32"], JAM.policy.p1);
  this.gbcOBJPalette = v10742;
  var v7064 = index$$50;
  index$$50 = index$$50 + 1;
  var v10743 = JAM.call(this.toTypedArray, this, [state$$1[v7064], "int32"], JAM.policy.p1);
  this.gbcBGPalette = v10743;
  var v7065 = index$$50;
  index$$50 = index$$50 + 1;
  var v10744 = JAM.call(this.toTypedArray, this, [state$$1[v7065], "int32"], JAM.policy.p1);
  this.gbBGColorizedPalette = v10744;
  var v7066 = index$$50;
  index$$50 = index$$50 + 1;
  var v10745 = JAM.call(this.toTypedArray, this, [state$$1[v7066], "int32"], JAM.policy.p1);
  this.gbOBJColorizedPalette = v10745;
  var v7067 = index$$50;
  index$$50 = index$$50 + 1;
  var v10746 = JAM.call(this.toTypedArray, this, [state$$1[v7067], "int32"], JAM.policy.p1);
  this.cachedBGPaletteConversion = v10746;
  var v7068 = index$$50;
  index$$50 = index$$50 + 1;
  var v10747 = JAM.call(this.toTypedArray, this, [state$$1[v7068], "int32"], JAM.policy.p1);
  this.cachedOBJPaletteConversion = v10747;
  var v7069 = index$$50;
  index$$50 = index$$50 + 1;
  var v10748 = JAM.call(this.toTypedArray, this, [state$$1[v7069], "uint8"], JAM.policy.p1);
  this.BGCHRBank1 = v10748;
  var v7070 = index$$50;
  index$$50 = index$$50 + 1;
  var v10749 = JAM.call(this.toTypedArray, this, [state$$1[v7070], "uint8"], JAM.policy.p1);
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
  var v10750 = JAM.call(this.toTypedArray, this, [this.TICKTable, "uint8"], JAM.policy.p1);
  this.TICKTable = v10750;
  var v10751 = JAM.call(this.toTypedArray, this, [this.SecondaryTICKTable, "uint8"], JAM.policy.p1);
  this.SecondaryTICKTable = v10751;
  this.initializeReferencesFromSaveState();
  this.memoryReadJumpCompile();
  this.memoryWriteJumpCompile();
  this.initLCD();
  this.initSound();
  var v3334;
  if (this.channel4BitRange == 32767) {
    v3334 = this.LSFR15Table;
  } else {
    v3334 = this.LSFR7Table;
  }
  this.noiseSampleTable = v3334;
  var v3335;
  if (this.channel4BitRange == 32767) {
    v3335 = 15;
  } else {
    v3335 = 7;
  }
  this.channel4VolumeShifter = v3335;
  return;
}
function v592() {
  return [JAM.call(this.fromTypedArray, this, [this.ROM]), this.inBootstrap, this.registerA, this.FZero, this.FSubtract, this.FHalfCarry, this.FCarry, this.registerB, this.registerC, this.registerD, this.registerE, this.registersHL, this.stackPointer, this.programCounter, this.halt, this.IME, this.hdmaRunning, this.CPUTicks, this.doubleSpeedShifter, JAM.call(this.fromTypedArray, this, [this.memory]), JAM.call(this.fromTypedArray, this, [this.MBCRam]), JAM.call(this.fromTypedArray, this, [this.VRAM]), 
  this.currVRAMBank, JAM.call(this.fromTypedArray, this, [this.GBCMemory]), this.MBC1Mode, this.MBCRAMBanksEnabled, this.currMBCRAMBank, this.currMBCRAMBankPosition, this.cGBC, this.gbcRamBank, this.gbcRamBankPosition, this.ROMBank1offs, this.currentROMBank, this.cartridgeType, this.name, this.gameCode, this.modeSTAT, this.LYCMatchTriggerSTAT, this.mode2TriggerSTAT, this.mode1TriggerSTAT, this.mode0TriggerSTAT, this.LCDisOn, this.gfxWindowCHRBankPosition, this.gfxWindowDisplay, this.gfxSpriteShow, 
  this.gfxSpriteNormalHeight, this.gfxBackgroundCHRBankPosition, this.gfxBackgroundBankOffset, this.TIMAEnabled, this.DIVTicks, this.LCDTicks, this.timerTicks, this.TACClocker, this.serialTimer, this.serialShiftTimer, this.serialShiftTimerAllocated, this.IRQEnableDelay, this.lastIteration, this.cMBC1, this.cMBC2, this.cMBC3, this.cMBC5, this.cMBC7, this.cSRAM, this.cMMMO1, this.cRUMBLE, this.cCamera, this.cTAMA5, this.cHuC3, this.cHuC1, this.drewBlank, JAM.call(this.fromTypedArray, this, [this.frameBuffer]), 
  this.bgEnabled, this.BGPriorityEnabled, this.channel1FrequencyTracker, this.channel1FrequencyCounter, this.channel1totalLength, this.channel1envelopeVolume, this.channel1envelopeType, this.channel1envelopeSweeps, this.channel1envelopeSweepsLast, this.channel1consecutive, this.channel1frequency, this.channel1SweepFault, this.channel1ShadowFrequency, this.channel1timeSweep, this.channel1lastTimeSweep, this.channel1numSweep, this.channel1frequencySweepDivider, this.channel1decreaseSweep, this.channel2FrequencyTracker, 
  this.channel2FrequencyCounter, this.channel2totalLength, this.channel2envelopeVolume, this.channel2envelopeType, this.channel2envelopeSweeps, this.channel2envelopeSweepsLast, this.channel2consecutive, this.channel2frequency, this.channel3canPlay, this.channel3totalLength, this.channel3patternType, this.channel3frequency, this.channel3consecutive, JAM.call(this.fromTypedArray, this, [this.channel3PCM]), this.channel4FrequencyPeriod, this.channel4lastSampleLookup, this.channel4totalLength, this.channel4envelopeVolume, 
  this.channel4currentVolume, this.channel4envelopeType, this.channel4envelopeSweeps, this.channel4envelopeSweepsLast, this.channel4consecutive, this.channel4BitRange, this.soundMasterEnabled, this.VinLeftChannelMasterVolume, this.VinRightChannelMasterVolume, this.leftChannel1, this.leftChannel2, this.leftChannel3, this.leftChannel4, this.rightChannel1, this.rightChannel2, this.rightChannel3, this.rightChannel4, this.channel1currentSampleLeft, this.channel1currentSampleRight, this.channel2currentSampleLeft, 
  this.channel2currentSampleRight, this.channel3currentSampleLeft, this.channel3currentSampleRight, this.channel4currentSampleLeft, this.channel4currentSampleRight, this.channel1currentSampleLeftSecondary, this.channel1currentSampleRightSecondary, this.channel2currentSampleLeftSecondary, this.channel2currentSampleRightSecondary, this.channel3currentSampleLeftSecondary, this.channel3currentSampleRightSecondary, this.channel4currentSampleLeftSecondary, this.channel4currentSampleRightSecondary, this.channel1currentSampleLeftTrimary, 
  this.channel1currentSampleRightTrimary, this.channel2currentSampleLeftTrimary, this.channel2currentSampleRightTrimary, this.mixerOutputCache, this.channel1DutyTracker, this.channel1CachedDuty, this.channel2DutyTracker, this.channel2CachedDuty, this.channel1Enabled, this.channel2Enabled, this.channel3Enabled, this.channel4Enabled, this.sequencerClocks, this.sequencePosition, this.channel3Counter, this.channel4Counter, this.cachedChannel3Sample, this.cachedChannel4Sample, this.channel3FrequencyPeriod, 
  this.channel3lastSampleLookup, this.actualScanLine, this.lastUnrenderedLine, this.queuedScanLines, this.RTCisLatched, this.latchedSeconds, this.latchedMinutes, this.latchedHours, this.latchedLDays, this.latchedHDays, this.RTCSeconds, this.RTCMinutes, this.RTCHours, this.RTCDays, this.RTCDayOverFlow, this.RTCHALT, this.usedBootROM, this.skipPCIncrement, this.STATTracker, this.gbcRamBankPositionECHO, this.numRAMBanks, this.windowY, this.windowX, JAM.call(this.fromTypedArray, this, [this.gbcOBJRawPalette]), 
  JAM.call(this.fromTypedArray, this, [this.gbcBGRawPalette]), JAM.call(this.fromTypedArray, this, [this.gbOBJPalette]), JAM.call(this.fromTypedArray, this, [this.gbBGPalette]), JAM.call(this.fromTypedArray, this, [this.gbcOBJPalette]), JAM.call(this.fromTypedArray, this, [this.gbcBGPalette]), JAM.call(this.fromTypedArray, this, [this.gbBGColorizedPalette]), JAM.call(this.fromTypedArray, this, [this.gbOBJColorizedPalette]), JAM.call(this.fromTypedArray, this, [this.cachedBGPaletteConversion]), JAM.call(this.fromTypedArray, 
  this, [this.cachedOBJPaletteConversion]), JAM.call(this.fromTypedArray, this, [this.BGCHRBank1]), JAM.call(this.fromTypedArray, this, [this.BGCHRBank2]), this.haltPostClocks, this.interruptsRequested, this.interruptsEnabled, this.remainingClocks, this.colorizedGBPalettes, this.backgroundY, this.backgroundX, this.CPUStopped];
}
function v591() {
  if (!this.cTIMER) {
    return [];
  } else {
    return [this.lastIteration, this.RTCisLatched, this.latchedSeconds, this.latchedMinutes, this.latchedHours, this.latchedLDays, this.latchedHDays, this.RTCSeconds, this.RTCMinutes, this.RTCHours, this.RTCDays, this.RTCDayOverFlow, this.RTCHALT];
  }
  return;
}
function v590() {
  var v7093 = !this.cBATT;
  if (!v7093) {
    v7093 = this.MBCRam.length == 0;
  }
  if (v7093) {
    return [];
  } else {
    return JAM.call(this.fromTypedArray, this, [this.MBCRam]);
  }
  return;
}
function v589(parentObj$$512) {
  parentObj$$512.registerA = parentObj$$512.registerA | 128;
  return;
}
function v588(parentObj$$511) {
  var v3557 = parentObj$$511.memoryWriter;
  var v3558 = parentObj$$511.registersHL;
  var v3559 = parentObj$$511.registersHL;
  var v9077 = parentObj$$511.memoryReader;
  JAM.call(v3557[v3558], v3557, [parentObj$$511, v3559, JAM.call(v9077[parentObj$$511.registersHL], v9077, [parentObj$$511, parentObj$$511.registersHL], JAM.policy.p1) | 128], JAM.policy.p1);
  return;
}
function v587(parentObj$$510) {
  parentObj$$510.registersHL = parentObj$$510.registersHL | 128;
  return;
}
function v586(parentObj$$509) {
  parentObj$$509.registersHL = parentObj$$509.registersHL | 32768;
  return;
}
function v585(parentObj$$508) {
  parentObj$$508.registerE = parentObj$$508.registerE | 128;
  return;
}
function v584(parentObj$$507) {
  parentObj$$507.registerD = parentObj$$507.registerD | 128;
  return;
}
function v583(parentObj$$506) {
  parentObj$$506.registerC = parentObj$$506.registerC | 128;
  return;
}
function v582(parentObj$$505) {
  parentObj$$505.registerB = parentObj$$505.registerB | 128;
  return;
}
function v581(parentObj$$504) {
  parentObj$$504.registerA = parentObj$$504.registerA | 64;
  return;
}
function v580(parentObj$$503) {
  var v3561 = parentObj$$503.memoryWriter;
  var v3562 = parentObj$$503.registersHL;
  var v3563 = parentObj$$503.registersHL;
  var v9080 = parentObj$$503.memoryReader;
  JAM.call(v3561[v3562], v3561, [parentObj$$503, v3563, JAM.call(v9080[parentObj$$503.registersHL], v9080, [parentObj$$503, parentObj$$503.registersHL], JAM.policy.p1) | 64], JAM.policy.p1);
  return;
}
function v579(parentObj$$502) {
  parentObj$$502.registersHL = parentObj$$502.registersHL | 64;
  return;
}
function v578(parentObj$$501) {
  parentObj$$501.registersHL = parentObj$$501.registersHL | 16384;
  return;
}
function v577(parentObj$$500) {
  parentObj$$500.registerE = parentObj$$500.registerE | 64;
  return;
}
function v576(parentObj$$499) {
  parentObj$$499.registerD = parentObj$$499.registerD | 64;
  return;
}
function v575(parentObj$$498) {
  parentObj$$498.registerC = parentObj$$498.registerC | 64;
  return;
}
function v574(parentObj$$497) {
  parentObj$$497.registerB = parentObj$$497.registerB | 64;
  return;
}
function v573(parentObj$$496) {
  parentObj$$496.registerA = parentObj$$496.registerA | 32;
  return;
}
function v572(parentObj$$495) {
  var v3565 = parentObj$$495.memoryWriter;
  var v3566 = parentObj$$495.registersHL;
  var v3567 = parentObj$$495.registersHL;
  var v9083 = parentObj$$495.memoryReader;
  JAM.call(v3565[v3566], v3565, [parentObj$$495, v3567, JAM.call(v9083[parentObj$$495.registersHL], v9083, [parentObj$$495, parentObj$$495.registersHL], JAM.policy.p1) | 32], JAM.policy.p1);
  return;
}
function v571(parentObj$$494) {
  parentObj$$494.registersHL = parentObj$$494.registersHL | 32;
  return;
}
function v570(parentObj$$493) {
  parentObj$$493.registersHL = parentObj$$493.registersHL | 8192;
  return;
}
function v569(parentObj$$492) {
  parentObj$$492.registerE = parentObj$$492.registerE | 32;
  return;
}
function v568(parentObj$$491) {
  parentObj$$491.registerD = parentObj$$491.registerD | 32;
  return;
}
function v567(parentObj$$490) {
  parentObj$$490.registerC = parentObj$$490.registerC | 32;
  return;
}
function v566(parentObj$$489) {
  parentObj$$489.registerB = parentObj$$489.registerB | 32;
  return;
}
function v565(parentObj$$488) {
  parentObj$$488.registerA = parentObj$$488.registerA | 16;
  return;
}
function v564(parentObj$$487) {
  var v3569 = parentObj$$487.memoryWriter;
  var v3570 = parentObj$$487.registersHL;
  var v3571 = parentObj$$487.registersHL;
  var v9086 = parentObj$$487.memoryReader;
  JAM.call(v3569[v3570], v3569, [parentObj$$487, v3571, JAM.call(v9086[parentObj$$487.registersHL], v9086, [parentObj$$487, parentObj$$487.registersHL], JAM.policy.p1) | 16], JAM.policy.p1);
  return;
}
function v563(parentObj$$486) {
  parentObj$$486.registersHL = parentObj$$486.registersHL | 16;
  return;
}
function v562(parentObj$$485) {
  parentObj$$485.registersHL = parentObj$$485.registersHL | 4096;
  return;
}
function v561(parentObj$$484) {
  parentObj$$484.registerE = parentObj$$484.registerE | 16;
  return;
}
function v560(parentObj$$483) {
  parentObj$$483.registerD = parentObj$$483.registerD | 16;
  return;
}
function v559(parentObj$$482) {
  parentObj$$482.registerC = parentObj$$482.registerC | 16;
  return;
}
function v558(parentObj$$481) {
  parentObj$$481.registerB = parentObj$$481.registerB | 16;
  return;
}
function v557(parentObj$$480) {
  parentObj$$480.registerA = parentObj$$480.registerA | 8;
  return;
}
function v556(parentObj$$479) {
  var v3573 = parentObj$$479.memoryWriter;
  var v3574 = parentObj$$479.registersHL;
  var v3575 = parentObj$$479.registersHL;
  var v9089 = parentObj$$479.memoryReader;
  JAM.call(v3573[v3574], v3573, [parentObj$$479, v3575, JAM.call(v9089[parentObj$$479.registersHL], v9089, [parentObj$$479, parentObj$$479.registersHL], JAM.policy.p1) | 8], JAM.policy.p1);
  return;
}
function v555(parentObj$$478) {
  parentObj$$478.registersHL = parentObj$$478.registersHL | 8;
  return;
}
function v554(parentObj$$477) {
  parentObj$$477.registersHL = parentObj$$477.registersHL | 2048;
  return;
}
function v553(parentObj$$476) {
  parentObj$$476.registerE = parentObj$$476.registerE | 8;
  return;
}
function v552(parentObj$$475) {
  parentObj$$475.registerD = parentObj$$475.registerD | 8;
  return;
}
function v551(parentObj$$474) {
  parentObj$$474.registerC = parentObj$$474.registerC | 8;
  return;
}
function v550(parentObj$$473) {
  parentObj$$473.registerB = parentObj$$473.registerB | 8;
  return;
}
function v549(parentObj$$472) {
  parentObj$$472.registerA = parentObj$$472.registerA | 4;
  return;
}
function v548(parentObj$$471) {
  var v3577 = parentObj$$471.memoryWriter;
  var v3578 = parentObj$$471.registersHL;
  var v3579 = parentObj$$471.registersHL;
  var v9092 = parentObj$$471.memoryReader;
  JAM.call(v3577[v3578], v3577, [parentObj$$471, v3579, JAM.call(v9092[parentObj$$471.registersHL], v9092, [parentObj$$471, parentObj$$471.registersHL], JAM.policy.p1) | 4], JAM.policy.p1);
  return;
}
function v547(parentObj$$470) {
  parentObj$$470.registersHL = parentObj$$470.registersHL | 4;
  return;
}
function v546(parentObj$$469) {
  parentObj$$469.registersHL = parentObj$$469.registersHL | 1024;
  return;
}
function v545(parentObj$$468) {
  parentObj$$468.registerE = parentObj$$468.registerE | 4;
  return;
}
function v544(parentObj$$467) {
  parentObj$$467.registerD = parentObj$$467.registerD | 4;
  return;
}
function v543(parentObj$$466) {
  parentObj$$466.registerC = parentObj$$466.registerC | 4;
  return;
}
function v542(parentObj$$465) {
  parentObj$$465.registerB = parentObj$$465.registerB | 4;
  return;
}
function v541(parentObj$$464) {
  parentObj$$464.registerA = parentObj$$464.registerA | 2;
  return;
}
function v540(parentObj$$463) {
  var v3581 = parentObj$$463.memoryWriter;
  var v3582 = parentObj$$463.registersHL;
  var v3583 = parentObj$$463.registersHL;
  var v9095 = parentObj$$463.memoryReader;
  JAM.call(v3581[v3582], v3581, [parentObj$$463, v3583, JAM.call(v9095[parentObj$$463.registersHL], v9095, [parentObj$$463, parentObj$$463.registersHL], JAM.policy.p1) | 2], JAM.policy.p1);
  return;
}
function v539(parentObj$$462) {
  parentObj$$462.registersHL = parentObj$$462.registersHL | 2;
  return;
}
function v538(parentObj$$461) {
  parentObj$$461.registersHL = parentObj$$461.registersHL | 512;
  return;
}
function v537(parentObj$$460) {
  parentObj$$460.registerE = parentObj$$460.registerE | 2;
  return;
}
function v536(parentObj$$459) {
  parentObj$$459.registerD = parentObj$$459.registerD | 2;
  return;
}
function v535(parentObj$$458) {
  parentObj$$458.registerC = parentObj$$458.registerC | 2;
  return;
}
function v534(parentObj$$457) {
  parentObj$$457.registerB = parentObj$$457.registerB | 2;
  return;
}
function v533(parentObj$$456) {
  parentObj$$456.registerA = parentObj$$456.registerA | 1;
  return;
}
function v532(parentObj$$455) {
  var v3585 = parentObj$$455.memoryWriter;
  var v3586 = parentObj$$455.registersHL;
  var v3587 = parentObj$$455.registersHL;
  var v9098 = parentObj$$455.memoryReader;
  JAM.call(v3585[v3586], v3585, [parentObj$$455, v3587, JAM.call(v9098[parentObj$$455.registersHL], v9098, [parentObj$$455, parentObj$$455.registersHL], JAM.policy.p1) | 1], JAM.policy.p1);
  return;
}
function v531(parentObj$$454) {
  parentObj$$454.registersHL = parentObj$$454.registersHL | 1;
  return;
}
function v530(parentObj$$453) {
  parentObj$$453.registersHL = parentObj$$453.registersHL | 256;
  return;
}
function v529(parentObj$$452) {
  parentObj$$452.registerE = parentObj$$452.registerE | 1;
  return;
}
function v528(parentObj$$451) {
  parentObj$$451.registerD = parentObj$$451.registerD | 1;
  return;
}
function v527(parentObj$$450) {
  parentObj$$450.registerC = parentObj$$450.registerC | 1;
  return;
}
function v526(parentObj$$449) {
  parentObj$$449.registerB = parentObj$$449.registerB | 1;
  return;
}
function v525(parentObj$$448) {
  parentObj$$448.registerA = parentObj$$448.registerA & 127;
  return;
}
function v524(parentObj$$447) {
  var v3589 = parentObj$$447.memoryWriter;
  var v3590 = parentObj$$447.registersHL;
  var v3591 = parentObj$$447.registersHL;
  var v9101 = parentObj$$447.memoryReader;
  JAM.call(v3589[v3590], v3589, [parentObj$$447, v3591, JAM.call(v9101[parentObj$$447.registersHL], v9101, [parentObj$$447, parentObj$$447.registersHL], JAM.policy.p1) & 127], JAM.policy.p1);
  return;
}
function v523(parentObj$$446) {
  parentObj$$446.registersHL = parentObj$$446.registersHL & 65407;
  return;
}
function v522(parentObj$$445) {
  parentObj$$445.registersHL = parentObj$$445.registersHL & 32767;
  return;
}
function v521(parentObj$$444) {
  parentObj$$444.registerE = parentObj$$444.registerE & 127;
  return;
}
function v520(parentObj$$443) {
  parentObj$$443.registerD = parentObj$$443.registerD & 127;
  return;
}
function v519(parentObj$$442) {
  parentObj$$442.registerC = parentObj$$442.registerC & 127;
  return;
}
function v518(parentObj$$441) {
  parentObj$$441.registerB = parentObj$$441.registerB & 127;
  return;
}
function v517(parentObj$$440) {
  parentObj$$440.registerA = parentObj$$440.registerA & 191;
  return;
}
function v516(parentObj$$439) {
  var v3593 = parentObj$$439.memoryWriter;
  var v3594 = parentObj$$439.registersHL;
  var v3595 = parentObj$$439.registersHL;
  var v9104 = parentObj$$439.memoryReader;
  JAM.call(v3593[v3594], v3593, [parentObj$$439, v3595, JAM.call(v9104[parentObj$$439.registersHL], v9104, [parentObj$$439, parentObj$$439.registersHL], JAM.policy.p1) & 191], JAM.policy.p1);
  return;
}
function v515(parentObj$$438) {
  parentObj$$438.registersHL = parentObj$$438.registersHL & 65471;
  return;
}
function v514(parentObj$$437) {
  parentObj$$437.registersHL = parentObj$$437.registersHL & 49151;
  return;
}
function v513(parentObj$$436) {
  parentObj$$436.registerE = parentObj$$436.registerE & 191;
  return;
}
function v512(parentObj$$435) {
  parentObj$$435.registerD = parentObj$$435.registerD & 191;
  return;
}
function v511(parentObj$$434) {
  parentObj$$434.registerC = parentObj$$434.registerC & 191;
  return;
}
function v510(parentObj$$433) {
  parentObj$$433.registerB = parentObj$$433.registerB & 191;
  return;
}
function v509(parentObj$$432) {
  parentObj$$432.registerA = parentObj$$432.registerA & 223;
  return;
}
function v508(parentObj$$431) {
  var v3597 = parentObj$$431.memoryWriter;
  var v3598 = parentObj$$431.registersHL;
  var v3599 = parentObj$$431.registersHL;
  var v9107 = parentObj$$431.memoryReader;
  JAM.call(v3597[v3598], v3597, [parentObj$$431, v3599, JAM.call(v9107[parentObj$$431.registersHL], v9107, [parentObj$$431, parentObj$$431.registersHL], JAM.policy.p1) & 223], JAM.policy.p1);
  return;
}
function v507(parentObj$$430) {
  parentObj$$430.registersHL = parentObj$$430.registersHL & 65503;
  return;
}
function v506(parentObj$$429) {
  parentObj$$429.registersHL = parentObj$$429.registersHL & 57343;
  return;
}
function v505(parentObj$$428) {
  parentObj$$428.registerE = parentObj$$428.registerE & 223;
  return;
}
function v504(parentObj$$427) {
  parentObj$$427.registerD = parentObj$$427.registerD & 223;
  return;
}
function v503(parentObj$$426) {
  parentObj$$426.registerC = parentObj$$426.registerC & 223;
  return;
}
function v502(parentObj$$425) {
  parentObj$$425.registerB = parentObj$$425.registerB & 223;
  return;
}
function v501(parentObj$$424) {
  parentObj$$424.registerA = parentObj$$424.registerA & 239;
  return;
}
function v500(parentObj$$423) {
  var v3601 = parentObj$$423.memoryWriter;
  var v3602 = parentObj$$423.registersHL;
  var v3603 = parentObj$$423.registersHL;
  var v9110 = parentObj$$423.memoryReader;
  JAM.call(v3601[v3602], v3601, [parentObj$$423, v3603, JAM.call(v9110[parentObj$$423.registersHL], v9110, [parentObj$$423, parentObj$$423.registersHL], JAM.policy.p1) & 239], JAM.policy.p1);
  return;
}
function v499(parentObj$$422) {
  parentObj$$422.registersHL = parentObj$$422.registersHL & 65519;
  return;
}
function v498(parentObj$$421) {
  parentObj$$421.registersHL = parentObj$$421.registersHL & 61439;
  return;
}
function v497(parentObj$$420) {
  parentObj$$420.registerE = parentObj$$420.registerE & 239;
  return;
}
function v496(parentObj$$419) {
  parentObj$$419.registerD = parentObj$$419.registerD & 239;
  return;
}
function v495(parentObj$$418) {
  parentObj$$418.registerC = parentObj$$418.registerC & 239;
  return;
}
function v494(parentObj$$417) {
  parentObj$$417.registerB = parentObj$$417.registerB & 239;
  return;
}
function v493(parentObj$$416) {
  parentObj$$416.registerA = parentObj$$416.registerA & 247;
  return;
}
function v492(parentObj$$415) {
  var v3605 = parentObj$$415.memoryWriter;
  var v3606 = parentObj$$415.registersHL;
  var v3607 = parentObj$$415.registersHL;
  var v9113 = parentObj$$415.memoryReader;
  JAM.call(v3605[v3606], v3605, [parentObj$$415, v3607, JAM.call(v9113[parentObj$$415.registersHL], v9113, [parentObj$$415, parentObj$$415.registersHL], JAM.policy.p1) & 247], JAM.policy.p1);
  return;
}
function v491(parentObj$$414) {
  parentObj$$414.registersHL = parentObj$$414.registersHL & 65527;
  return;
}
function v490(parentObj$$413) {
  parentObj$$413.registersHL = parentObj$$413.registersHL & 63487;
  return;
}
function v489(parentObj$$412) {
  parentObj$$412.registerE = parentObj$$412.registerE & 247;
  return;
}
function v488(parentObj$$411) {
  parentObj$$411.registerD = parentObj$$411.registerD & 247;
  return;
}
function v487(parentObj$$410) {
  parentObj$$410.registerC = parentObj$$410.registerC & 247;
  return;
}
function v486(parentObj$$409) {
  parentObj$$409.registerB = parentObj$$409.registerB & 247;
  return;
}
function v485(parentObj$$408) {
  parentObj$$408.registerA = parentObj$$408.registerA & 251;
  return;
}
function v484(parentObj$$407) {
  var v3609 = parentObj$$407.memoryWriter;
  var v3610 = parentObj$$407.registersHL;
  var v3611 = parentObj$$407.registersHL;
  var v9116 = parentObj$$407.memoryReader;
  JAM.call(v3609[v3610], v3609, [parentObj$$407, v3611, JAM.call(v9116[parentObj$$407.registersHL], v9116, [parentObj$$407, parentObj$$407.registersHL], JAM.policy.p1) & 251], JAM.policy.p1);
  return;
}
function v483(parentObj$$406) {
  parentObj$$406.registersHL = parentObj$$406.registersHL & 65531;
  return;
}
function v482(parentObj$$405) {
  parentObj$$405.registersHL = parentObj$$405.registersHL & 64511;
  return;
}
function v481(parentObj$$404) {
  parentObj$$404.registerE = parentObj$$404.registerE & 251;
  return;
}
function v480(parentObj$$403) {
  parentObj$$403.registerD = parentObj$$403.registerD & 251;
  return;
}
function v479(parentObj$$402) {
  parentObj$$402.registerC = parentObj$$402.registerC & 251;
  return;
}
function v478(parentObj$$401) {
  parentObj$$401.registerB = parentObj$$401.registerB & 251;
  return;
}
function v477(parentObj$$400) {
  parentObj$$400.registerA = parentObj$$400.registerA & 253;
  return;
}
function v476(parentObj$$399) {
  var v3613 = parentObj$$399.memoryWriter;
  var v3614 = parentObj$$399.registersHL;
  var v3615 = parentObj$$399.registersHL;
  var v9119 = parentObj$$399.memoryReader;
  JAM.call(v3613[v3614], v3613, [parentObj$$399, v3615, JAM.call(v9119[parentObj$$399.registersHL], v9119, [parentObj$$399, parentObj$$399.registersHL], JAM.policy.p1) & 253], JAM.policy.p1);
  return;
}
function v475(parentObj$$398) {
  parentObj$$398.registersHL = parentObj$$398.registersHL & 65533;
  return;
}
function v474(parentObj$$397) {
  parentObj$$397.registersHL = parentObj$$397.registersHL & 65023;
  return;
}
function v473(parentObj$$396) {
  parentObj$$396.registerE = parentObj$$396.registerE & 253;
  return;
}
function v472(parentObj$$395) {
  parentObj$$395.registerD = parentObj$$395.registerD & 253;
  return;
}
function v471(parentObj$$394) {
  parentObj$$394.registerC = parentObj$$394.registerC & 253;
  return;
}
function v470(parentObj$$393) {
  parentObj$$393.registerB = parentObj$$393.registerB & 253;
  return;
}
function v469(parentObj$$392) {
  parentObj$$392.registerA = parentObj$$392.registerA & 254;
  return;
}
function v468(parentObj$$391) {
  var v3617 = parentObj$$391.memoryWriter;
  var v3618 = parentObj$$391.registersHL;
  var v3619 = parentObj$$391.registersHL;
  var v9122 = parentObj$$391.memoryReader;
  JAM.call(v3617[v3618], v3617, [parentObj$$391, v3619, JAM.call(v9122[parentObj$$391.registersHL], v9122, [parentObj$$391, parentObj$$391.registersHL], JAM.policy.p1) & 254], JAM.policy.p1);
  return;
}
function v467(parentObj$$390) {
  parentObj$$390.registersHL = parentObj$$390.registersHL & 65534;
  return;
}
function v466(parentObj$$389) {
  parentObj$$389.registersHL = parentObj$$389.registersHL & 65279;
  return;
}
function v465(parentObj$$388) {
  parentObj$$388.registerE = parentObj$$388.registerE & 254;
  return;
}
function v464(parentObj$$387) {
  parentObj$$387.registerD = parentObj$$387.registerD & 254;
  return;
}
function v463(parentObj$$386) {
  parentObj$$386.registerC = parentObj$$386.registerC & 254;
  return;
}
function v462(parentObj$$385) {
  parentObj$$385.registerB = parentObj$$385.registerB & 254;
  return;
}
function v461(parentObj$$384) {
  parentObj$$384.FHalfCarry = true;
  parentObj$$384.FSubtract = false;
  parentObj$$384.FZero = (parentObj$$384.registerA & 128) == 0;
  return;
}
function v460(parentObj$$383) {
  parentObj$$383.FHalfCarry = true;
  parentObj$$383.FSubtract = false;
  var v9125 = parentObj$$383.memoryReader;
  parentObj$$383.FZero = (JAM.call(v9125[parentObj$$383.registersHL], v9125, [parentObj$$383, parentObj$$383.registersHL], JAM.policy.p1) & 128) == 0;
  return;
}
function v459(parentObj$$382) {
  parentObj$$382.FHalfCarry = true;
  parentObj$$382.FSubtract = false;
  parentObj$$382.FZero = (parentObj$$382.registersHL & 128) == 0;
  return;
}
function v458(parentObj$$381) {
  parentObj$$381.FHalfCarry = true;
  parentObj$$381.FSubtract = false;
  parentObj$$381.FZero = (parentObj$$381.registersHL & 32768) == 0;
  return;
}
function v457(parentObj$$380) {
  parentObj$$380.FHalfCarry = true;
  parentObj$$380.FSubtract = false;
  parentObj$$380.FZero = (parentObj$$380.registerE & 128) == 0;
  return;
}
function v456(parentObj$$379) {
  parentObj$$379.FHalfCarry = true;
  parentObj$$379.FSubtract = false;
  parentObj$$379.FZero = (parentObj$$379.registerD & 128) == 0;
  return;
}
function v455(parentObj$$378) {
  parentObj$$378.FHalfCarry = true;
  parentObj$$378.FSubtract = false;
  parentObj$$378.FZero = (parentObj$$378.registerC & 128) == 0;
  return;
}
function v454(parentObj$$377) {
  parentObj$$377.FHalfCarry = true;
  parentObj$$377.FSubtract = false;
  parentObj$$377.FZero = (parentObj$$377.registerB & 128) == 0;
  return;
}
function v453(parentObj$$376) {
  parentObj$$376.FHalfCarry = true;
  parentObj$$376.FSubtract = false;
  parentObj$$376.FZero = (parentObj$$376.registerA & 64) == 0;
  return;
}
function v452(parentObj$$375) {
  parentObj$$375.FHalfCarry = true;
  parentObj$$375.FSubtract = false;
  var v9128 = parentObj$$375.memoryReader;
  parentObj$$375.FZero = (JAM.call(v9128[parentObj$$375.registersHL], v9128, [parentObj$$375, parentObj$$375.registersHL], JAM.policy.p1) & 64) == 0;
  return;
}
function v451(parentObj$$374) {
  parentObj$$374.FHalfCarry = true;
  parentObj$$374.FSubtract = false;
  parentObj$$374.FZero = (parentObj$$374.registersHL & 64) == 0;
  return;
}
function v450(parentObj$$373) {
  parentObj$$373.FHalfCarry = true;
  parentObj$$373.FSubtract = false;
  parentObj$$373.FZero = (parentObj$$373.registersHL & 16384) == 0;
  return;
}
function v449(parentObj$$372) {
  parentObj$$372.FHalfCarry = true;
  parentObj$$372.FSubtract = false;
  parentObj$$372.FZero = (parentObj$$372.registerE & 64) == 0;
  return;
}
function v448(parentObj$$371) {
  parentObj$$371.FHalfCarry = true;
  parentObj$$371.FSubtract = false;
  parentObj$$371.FZero = (parentObj$$371.registerD & 64) == 0;
  return;
}
function v447(parentObj$$370) {
  parentObj$$370.FHalfCarry = true;
  parentObj$$370.FSubtract = false;
  parentObj$$370.FZero = (parentObj$$370.registerC & 64) == 0;
  return;
}
function v446(parentObj$$369) {
  parentObj$$369.FHalfCarry = true;
  parentObj$$369.FSubtract = false;
  parentObj$$369.FZero = (parentObj$$369.registerB & 64) == 0;
  return;
}
function v445(parentObj$$368) {
  parentObj$$368.FHalfCarry = true;
  parentObj$$368.FSubtract = false;
  parentObj$$368.FZero = (parentObj$$368.registerA & 32) == 0;
  return;
}
function v444(parentObj$$367) {
  parentObj$$367.FHalfCarry = true;
  parentObj$$367.FSubtract = false;
  var v9131 = parentObj$$367.memoryReader;
  parentObj$$367.FZero = (JAM.call(v9131[parentObj$$367.registersHL], v9131, [parentObj$$367, parentObj$$367.registersHL], JAM.policy.p1) & 32) == 0;
  return;
}
function v443(parentObj$$366) {
  parentObj$$366.FHalfCarry = true;
  parentObj$$366.FSubtract = false;
  parentObj$$366.FZero = (parentObj$$366.registersHL & 32) == 0;
  return;
}
function v442(parentObj$$365) {
  parentObj$$365.FHalfCarry = true;
  parentObj$$365.FSubtract = false;
  parentObj$$365.FZero = (parentObj$$365.registersHL & 8192) == 0;
  return;
}
function v441(parentObj$$364) {
  parentObj$$364.FHalfCarry = true;
  parentObj$$364.FSubtract = false;
  parentObj$$364.FZero = (parentObj$$364.registerE & 32) == 0;
  return;
}
function v440(parentObj$$363) {
  parentObj$$363.FHalfCarry = true;
  parentObj$$363.FSubtract = false;
  parentObj$$363.FZero = (parentObj$$363.registerD & 32) == 0;
  return;
}
function v439(parentObj$$362) {
  parentObj$$362.FHalfCarry = true;
  parentObj$$362.FSubtract = false;
  parentObj$$362.FZero = (parentObj$$362.registerC & 32) == 0;
  return;
}
function v438(parentObj$$361) {
  parentObj$$361.FHalfCarry = true;
  parentObj$$361.FSubtract = false;
  parentObj$$361.FZero = (parentObj$$361.registerB & 32) == 0;
  return;
}
function v437(parentObj$$360) {
  parentObj$$360.FHalfCarry = true;
  parentObj$$360.FSubtract = false;
  parentObj$$360.FZero = (parentObj$$360.registerA & 16) == 0;
  return;
}
function v436(parentObj$$359) {
  parentObj$$359.FHalfCarry = true;
  parentObj$$359.FSubtract = false;
  var v9134 = parentObj$$359.memoryReader;
  parentObj$$359.FZero = (JAM.call(v9134[parentObj$$359.registersHL], v9134, [parentObj$$359, parentObj$$359.registersHL], JAM.policy.p1) & 16) == 0;
  return;
}
function v435(parentObj$$358) {
  parentObj$$358.FHalfCarry = true;
  parentObj$$358.FSubtract = false;
  parentObj$$358.FZero = (parentObj$$358.registersHL & 16) == 0;
  return;
}
function v434(parentObj$$357) {
  parentObj$$357.FHalfCarry = true;
  parentObj$$357.FSubtract = false;
  parentObj$$357.FZero = (parentObj$$357.registersHL & 4096) == 0;
  return;
}
function v433(parentObj$$356) {
  parentObj$$356.FHalfCarry = true;
  parentObj$$356.FSubtract = false;
  parentObj$$356.FZero = (parentObj$$356.registerE & 16) == 0;
  return;
}
function v432(parentObj$$355) {
  parentObj$$355.FHalfCarry = true;
  parentObj$$355.FSubtract = false;
  parentObj$$355.FZero = (parentObj$$355.registerD & 16) == 0;
  return;
}
function v431(parentObj$$354) {
  parentObj$$354.FHalfCarry = true;
  parentObj$$354.FSubtract = false;
  parentObj$$354.FZero = (parentObj$$354.registerC & 16) == 0;
  return;
}
function v430(parentObj$$353) {
  parentObj$$353.FHalfCarry = true;
  parentObj$$353.FSubtract = false;
  parentObj$$353.FZero = (parentObj$$353.registerB & 16) == 0;
  return;
}
function v429(parentObj$$352) {
  parentObj$$352.FHalfCarry = true;
  parentObj$$352.FSubtract = false;
  parentObj$$352.FZero = (parentObj$$352.registerA & 8) == 0;
  return;
}
function v428(parentObj$$351) {
  parentObj$$351.FHalfCarry = true;
  parentObj$$351.FSubtract = false;
  var v9137 = parentObj$$351.memoryReader;
  parentObj$$351.FZero = (JAM.call(v9137[parentObj$$351.registersHL], v9137, [parentObj$$351, parentObj$$351.registersHL], JAM.policy.p1) & 8) == 0;
  return;
}
function v427(parentObj$$350) {
  parentObj$$350.FHalfCarry = true;
  parentObj$$350.FSubtract = false;
  parentObj$$350.FZero = (parentObj$$350.registersHL & 8) == 0;
  return;
}
function v426(parentObj$$349) {
  parentObj$$349.FHalfCarry = true;
  parentObj$$349.FSubtract = false;
  parentObj$$349.FZero = (parentObj$$349.registersHL & 2048) == 0;
  return;
}
function v425(parentObj$$348) {
  parentObj$$348.FHalfCarry = true;
  parentObj$$348.FSubtract = false;
  parentObj$$348.FZero = (parentObj$$348.registerE & 8) == 0;
  return;
}
function v424(parentObj$$347) {
  parentObj$$347.FHalfCarry = true;
  parentObj$$347.FSubtract = false;
  parentObj$$347.FZero = (parentObj$$347.registerD & 8) == 0;
  return;
}
function v423(parentObj$$346) {
  parentObj$$346.FHalfCarry = true;
  parentObj$$346.FSubtract = false;
  parentObj$$346.FZero = (parentObj$$346.registerC & 8) == 0;
  return;
}
function v422(parentObj$$345) {
  parentObj$$345.FHalfCarry = true;
  parentObj$$345.FSubtract = false;
  parentObj$$345.FZero = (parentObj$$345.registerB & 8) == 0;
  return;
}
function v421(parentObj$$344) {
  parentObj$$344.FHalfCarry = true;
  parentObj$$344.FSubtract = false;
  parentObj$$344.FZero = (parentObj$$344.registerA & 4) == 0;
  return;
}
function v420(parentObj$$343) {
  parentObj$$343.FHalfCarry = true;
  parentObj$$343.FSubtract = false;
  var v9140 = parentObj$$343.memoryReader;
  parentObj$$343.FZero = (JAM.call(v9140[parentObj$$343.registersHL], v9140, [parentObj$$343, parentObj$$343.registersHL], JAM.policy.p1) & 4) == 0;
  return;
}
function v419(parentObj$$342) {
  parentObj$$342.FHalfCarry = true;
  parentObj$$342.FSubtract = false;
  parentObj$$342.FZero = (parentObj$$342.registersHL & 4) == 0;
  return;
}
function v418(parentObj$$341) {
  parentObj$$341.FHalfCarry = true;
  parentObj$$341.FSubtract = false;
  parentObj$$341.FZero = (parentObj$$341.registersHL & 1024) == 0;
  return;
}
function v417(parentObj$$340) {
  parentObj$$340.FHalfCarry = true;
  parentObj$$340.FSubtract = false;
  parentObj$$340.FZero = (parentObj$$340.registerE & 4) == 0;
  return;
}
function v416(parentObj$$339) {
  parentObj$$339.FHalfCarry = true;
  parentObj$$339.FSubtract = false;
  parentObj$$339.FZero = (parentObj$$339.registerD & 4) == 0;
  return;
}
function v415(parentObj$$338) {
  parentObj$$338.FHalfCarry = true;
  parentObj$$338.FSubtract = false;
  parentObj$$338.FZero = (parentObj$$338.registerC & 4) == 0;
  return;
}
function v414(parentObj$$337) {
  parentObj$$337.FHalfCarry = true;
  parentObj$$337.FSubtract = false;
  parentObj$$337.FZero = (parentObj$$337.registerB & 4) == 0;
  return;
}
function v413(parentObj$$336) {
  parentObj$$336.FHalfCarry = true;
  parentObj$$336.FSubtract = false;
  parentObj$$336.FZero = (parentObj$$336.registerA & 2) == 0;
  return;
}
function v412(parentObj$$335) {
  parentObj$$335.FHalfCarry = true;
  parentObj$$335.FSubtract = false;
  var v9143 = parentObj$$335.memoryReader;
  parentObj$$335.FZero = (JAM.call(v9143[parentObj$$335.registersHL], v9143, [parentObj$$335, parentObj$$335.registersHL], JAM.policy.p1) & 2) == 0;
  return;
}
function v411(parentObj$$334) {
  parentObj$$334.FHalfCarry = true;
  parentObj$$334.FSubtract = false;
  parentObj$$334.FZero = (parentObj$$334.registersHL & 2) == 0;
  return;
}
function v410(parentObj$$333) {
  parentObj$$333.FHalfCarry = true;
  parentObj$$333.FSubtract = false;
  parentObj$$333.FZero = (parentObj$$333.registersHL & 512) == 0;
  return;
}
function v409(parentObj$$332) {
  parentObj$$332.FHalfCarry = true;
  parentObj$$332.FSubtract = false;
  parentObj$$332.FZero = (parentObj$$332.registerE & 2) == 0;
  return;
}
function v408(parentObj$$331) {
  parentObj$$331.FHalfCarry = true;
  parentObj$$331.FSubtract = false;
  parentObj$$331.FZero = (parentObj$$331.registerD & 2) == 0;
  return;
}
function v407(parentObj$$330) {
  parentObj$$330.FHalfCarry = true;
  parentObj$$330.FSubtract = false;
  parentObj$$330.FZero = (parentObj$$330.registerC & 2) == 0;
  return;
}
function v406(parentObj$$329) {
  parentObj$$329.FHalfCarry = true;
  parentObj$$329.FSubtract = false;
  parentObj$$329.FZero = (parentObj$$329.registerB & 2) == 0;
  return;
}
function v405(parentObj$$328) {
  parentObj$$328.FHalfCarry = true;
  parentObj$$328.FSubtract = false;
  parentObj$$328.FZero = (parentObj$$328.registerA & 1) == 0;
  return;
}
function v404(parentObj$$327) {
  parentObj$$327.FHalfCarry = true;
  parentObj$$327.FSubtract = false;
  var v9146 = parentObj$$327.memoryReader;
  parentObj$$327.FZero = (JAM.call(v9146[parentObj$$327.registersHL], v9146, [parentObj$$327, parentObj$$327.registersHL], JAM.policy.p1) & 1) == 0;
  return;
}
function v403(parentObj$$326) {
  parentObj$$326.FHalfCarry = true;
  parentObj$$326.FSubtract = false;
  parentObj$$326.FZero = (parentObj$$326.registersHL & 1) == 0;
  return;
}
function v402(parentObj$$325) {
  parentObj$$325.FHalfCarry = true;
  parentObj$$325.FSubtract = false;
  parentObj$$325.FZero = (parentObj$$325.registersHL & 256) == 0;
  return;
}
function v401(parentObj$$324) {
  parentObj$$324.FHalfCarry = true;
  parentObj$$324.FSubtract = false;
  parentObj$$324.FZero = (parentObj$$324.registerE & 1) == 0;
  return;
}
function v400(parentObj$$323) {
  parentObj$$323.FHalfCarry = true;
  parentObj$$323.FSubtract = false;
  parentObj$$323.FZero = (parentObj$$323.registerD & 1) == 0;
  return;
}
function v399(parentObj$$322) {
  parentObj$$322.FHalfCarry = true;
  parentObj$$322.FSubtract = false;
  parentObj$$322.FZero = (parentObj$$322.registerC & 1) == 0;
  return;
}
function v398(parentObj$$321) {
  parentObj$$321.FHalfCarry = true;
  parentObj$$321.FSubtract = false;
  parentObj$$321.FZero = (parentObj$$321.registerB & 1) == 0;
  return;
}
function v397(parentObj$$320) {
  parentObj$$320.FCarry = (parentObj$$320.registerA & 1) == 1;
  parentObj$$320.registerA = parentObj$$320.registerA >> 1;
  parentObj$$320.FHalfCarry = parentObj$$320.FSubtract = false;
  parentObj$$320.FZero = parentObj$$320.registerA == 0;
  return;
}
function v396(parentObj$$319) {
  var v3687 = parentObj$$319.memoryReader;
  var temp_var$$19 = JAM.call(v3687[parentObj$$319.registersHL], v3687, [parentObj$$319, parentObj$$319.registersHL], JAM.policy.p1);
  parentObj$$319.FCarry = (temp_var$$19 & 1) == 1;
  var v3691 = parentObj$$319.memoryWriter;
  JAM.call(v3691[parentObj$$319.registersHL], v3691, [parentObj$$319, parentObj$$319.registersHL, temp_var$$19 >> 1], JAM.policy.p1);
  parentObj$$319.FHalfCarry = parentObj$$319.FSubtract = false;
  parentObj$$319.FZero = temp_var$$19 < 2;
  return;
}
function v395(parentObj$$318) {
  parentObj$$318.FCarry = (parentObj$$318.registersHL & 1) == 1;
  parentObj$$318.registersHL = parentObj$$318.registersHL & 65280 | (parentObj$$318.registersHL & 255) >> 1;
  parentObj$$318.FHalfCarry = parentObj$$318.FSubtract = false;
  parentObj$$318.FZero = (parentObj$$318.registersHL & 255) == 0;
  return;
}
function v394(parentObj$$317) {
  parentObj$$317.FCarry = (parentObj$$317.registersHL & 256) == 256;
  parentObj$$317.registersHL = parentObj$$317.registersHL >> 1 & 65280 | parentObj$$317.registersHL & 255;
  parentObj$$317.FHalfCarry = parentObj$$317.FSubtract = false;
  parentObj$$317.FZero = parentObj$$317.registersHL < 256;
  return;
}
function v393(parentObj$$316) {
  parentObj$$316.FCarry = (parentObj$$316.registerE & 1) == 1;
  parentObj$$316.registerE = parentObj$$316.registerE >> 1;
  parentObj$$316.FHalfCarry = parentObj$$316.FSubtract = false;
  parentObj$$316.FZero = parentObj$$316.registerE == 0;
  return;
}
function v392(parentObj$$315) {
  parentObj$$315.FCarry = (parentObj$$315.registerD & 1) == 1;
  parentObj$$315.registerD = parentObj$$315.registerD >> 1;
  parentObj$$315.FHalfCarry = parentObj$$315.FSubtract = false;
  parentObj$$315.FZero = parentObj$$315.registerD == 0;
  return;
}
function v391(parentObj$$314) {
  parentObj$$314.FCarry = (parentObj$$314.registerC & 1) == 1;
  parentObj$$314.registerC = parentObj$$314.registerC >> 1;
  parentObj$$314.FHalfCarry = parentObj$$314.FSubtract = false;
  parentObj$$314.FZero = parentObj$$314.registerC == 0;
  return;
}
function v390(parentObj$$313) {
  parentObj$$313.FCarry = (parentObj$$313.registerB & 1) == 1;
  parentObj$$313.registerB = parentObj$$313.registerB >> 1;
  parentObj$$313.FHalfCarry = parentObj$$313.FSubtract = false;
  parentObj$$313.FZero = parentObj$$313.registerB == 0;
  return;
}
function v389(parentObj$$312) {
  parentObj$$312.registerA = (parentObj$$312.registerA & 15) << 4 | parentObj$$312.registerA >> 4;
  parentObj$$312.FZero = parentObj$$312.registerA == 0;
  parentObj$$312.FCarry = parentObj$$312.FHalfCarry = parentObj$$312.FSubtract = false;
  return;
}
function v388(parentObj$$311) {
  var v3714 = parentObj$$311.memoryReader;
  var temp_var$$18 = JAM.call(v3714[parentObj$$311.registersHL], v3714, [parentObj$$311, parentObj$$311.registersHL], JAM.policy.p1);
  temp_var$$18 = (temp_var$$18 & 15) << 4 | temp_var$$18 >> 4;
  var v3719 = parentObj$$311.memoryWriter;
  JAM.call(v3719[parentObj$$311.registersHL], v3719, [parentObj$$311, parentObj$$311.registersHL, temp_var$$18], JAM.policy.p1);
  parentObj$$311.FZero = temp_var$$18 == 0;
  parentObj$$311.FCarry = parentObj$$311.FHalfCarry = parentObj$$311.FSubtract = false;
  return;
}
function v387(parentObj$$310) {
  parentObj$$310.registersHL = parentObj$$310.registersHL & 65280 | (parentObj$$310.registersHL & 15) << 4 | (parentObj$$310.registersHL & 240) >> 4;
  parentObj$$310.FZero = (parentObj$$310.registersHL & 255) == 0;
  parentObj$$310.FCarry = parentObj$$310.FHalfCarry = parentObj$$310.FSubtract = false;
  return;
}
function v386(parentObj$$309) {
  parentObj$$309.registersHL = (parentObj$$309.registersHL & 3840) << 4 | (parentObj$$309.registersHL & 61440) >> 4 | parentObj$$309.registersHL & 255;
  parentObj$$309.FZero = parentObj$$309.registersHL < 256;
  parentObj$$309.FCarry = parentObj$$309.FHalfCarry = parentObj$$309.FSubtract = false;
  return;
}
function v385(parentObj$$308) {
  parentObj$$308.registerE = (parentObj$$308.registerE & 15) << 4 | parentObj$$308.registerE >> 4;
  parentObj$$308.FZero = parentObj$$308.registerE == 0;
  parentObj$$308.FCarry = parentObj$$308.FHalfCarry = parentObj$$308.FSubtract = false;
  return;
}
function v384(parentObj$$307) {
  parentObj$$307.registerD = (parentObj$$307.registerD & 15) << 4 | parentObj$$307.registerD >> 4;
  parentObj$$307.FZero = parentObj$$307.registerD == 0;
  parentObj$$307.FCarry = parentObj$$307.FHalfCarry = parentObj$$307.FSubtract = false;
  return;
}
function v383(parentObj$$306) {
  parentObj$$306.registerC = (parentObj$$306.registerC & 15) << 4 | parentObj$$306.registerC >> 4;
  parentObj$$306.FZero = parentObj$$306.registerC == 0;
  parentObj$$306.FCarry = parentObj$$306.FHalfCarry = parentObj$$306.FSubtract = false;
  return;
}
function v382(parentObj$$305) {
  parentObj$$305.registerB = (parentObj$$305.registerB & 15) << 4 | parentObj$$305.registerB >> 4;
  parentObj$$305.FZero = parentObj$$305.registerB == 0;
  parentObj$$305.FCarry = parentObj$$305.FHalfCarry = parentObj$$305.FSubtract = false;
  return;
}
function v381(parentObj$$304) {
  parentObj$$304.FCarry = (parentObj$$304.registerA & 1) == 1;
  parentObj$$304.registerA = parentObj$$304.registerA & 128 | parentObj$$304.registerA >> 1;
  parentObj$$304.FHalfCarry = parentObj$$304.FSubtract = false;
  parentObj$$304.FZero = parentObj$$304.registerA == 0;
  return;
}
function v380(parentObj$$303) {
  var v3744 = parentObj$$303.memoryReader;
  var temp_var$$17 = JAM.call(v3744[parentObj$$303.registersHL], v3744, [parentObj$$303, parentObj$$303.registersHL], JAM.policy.p1);
  parentObj$$303.FCarry = (temp_var$$17 & 1) == 1;
  temp_var$$17 = temp_var$$17 & 128 | temp_var$$17 >> 1;
  var v3750 = parentObj$$303.memoryWriter;
  JAM.call(v3750[parentObj$$303.registersHL], v3750, [parentObj$$303, parentObj$$303.registersHL, temp_var$$17], JAM.policy.p1);
  parentObj$$303.FHalfCarry = parentObj$$303.FSubtract = false;
  parentObj$$303.FZero = temp_var$$17 == 0;
  return;
}
function v379(parentObj$$302) {
  parentObj$$302.FCarry = (parentObj$$302.registersHL & 1) == 1;
  parentObj$$302.registersHL = parentObj$$302.registersHL & 65408 | (parentObj$$302.registersHL & 255) >> 1;
  parentObj$$302.FHalfCarry = parentObj$$302.FSubtract = false;
  parentObj$$302.FZero = (parentObj$$302.registersHL & 255) == 0;
  return;
}
function v378(parentObj$$301) {
  parentObj$$301.FCarry = (parentObj$$301.registersHL & 256) == 256;
  parentObj$$301.registersHL = parentObj$$301.registersHL >> 1 & 65280 | parentObj$$301.registersHL & 33023;
  parentObj$$301.FHalfCarry = parentObj$$301.FSubtract = false;
  parentObj$$301.FZero = parentObj$$301.registersHL < 256;
  return;
}
function v377(parentObj$$300) {
  parentObj$$300.FCarry = (parentObj$$300.registerE & 1) == 1;
  parentObj$$300.registerE = parentObj$$300.registerE & 128 | parentObj$$300.registerE >> 1;
  parentObj$$300.FHalfCarry = parentObj$$300.FSubtract = false;
  parentObj$$300.FZero = parentObj$$300.registerE == 0;
  return;
}
function v376(parentObj$$299) {
  parentObj$$299.FCarry = (parentObj$$299.registerD & 1) == 1;
  parentObj$$299.registerD = parentObj$$299.registerD & 128 | parentObj$$299.registerD >> 1;
  parentObj$$299.FHalfCarry = parentObj$$299.FSubtract = false;
  parentObj$$299.FZero = parentObj$$299.registerD == 0;
  return;
}
function v375(parentObj$$298) {
  parentObj$$298.FCarry = (parentObj$$298.registerC & 1) == 1;
  parentObj$$298.registerC = parentObj$$298.registerC & 128 | parentObj$$298.registerC >> 1;
  parentObj$$298.FHalfCarry = parentObj$$298.FSubtract = false;
  parentObj$$298.FZero = parentObj$$298.registerC == 0;
  return;
}
function v374(parentObj$$297) {
  parentObj$$297.FCarry = (parentObj$$297.registerB & 1) == 1;
  parentObj$$297.registerB = parentObj$$297.registerB & 128 | parentObj$$297.registerB >> 1;
  parentObj$$297.FHalfCarry = parentObj$$297.FSubtract = false;
  parentObj$$297.FZero = parentObj$$297.registerB == 0;
  return;
}
function v373(parentObj$$296) {
  parentObj$$296.FCarry = parentObj$$296.registerA > 127;
  parentObj$$296.registerA = parentObj$$296.registerA << 1 & 255;
  parentObj$$296.FHalfCarry = parentObj$$296.FSubtract = false;
  parentObj$$296.FZero = parentObj$$296.registerA == 0;
  return;
}
function v372(parentObj$$295) {
  var v3780 = parentObj$$295.memoryReader;
  var temp_var$$16 = JAM.call(v3780[parentObj$$295.registersHL], v3780, [parentObj$$295, parentObj$$295.registersHL], JAM.policy.p1);
  parentObj$$295.FCarry = temp_var$$16 > 127;
  temp_var$$16 = temp_var$$16 << 1 & 255;
  var v3784 = parentObj$$295.memoryWriter;
  JAM.call(v3784[parentObj$$295.registersHL], v3784, [parentObj$$295, parentObj$$295.registersHL, temp_var$$16], JAM.policy.p1);
  parentObj$$295.FHalfCarry = parentObj$$295.FSubtract = false;
  parentObj$$295.FZero = temp_var$$16 == 0;
  return;
}
function v371(parentObj$$294) {
  parentObj$$294.FCarry = (parentObj$$294.registersHL & 128) == 128;
  parentObj$$294.registersHL = parentObj$$294.registersHL & 65280 | parentObj$$294.registersHL << 1 & 255;
  parentObj$$294.FHalfCarry = parentObj$$294.FSubtract = false;
  parentObj$$294.FZero = (parentObj$$294.registersHL & 255) == 0;
  return;
}
function v370(parentObj$$293) {
  parentObj$$293.FCarry = parentObj$$293.registersHL > 32767;
  parentObj$$293.registersHL = parentObj$$293.registersHL << 1 & 65024 | parentObj$$293.registersHL & 255;
  parentObj$$293.FHalfCarry = parentObj$$293.FSubtract = false;
  parentObj$$293.FZero = parentObj$$293.registersHL < 256;
  return;
}
function v369(parentObj$$292) {
  parentObj$$292.FCarry = parentObj$$292.registerE > 127;
  parentObj$$292.registerE = parentObj$$292.registerE << 1 & 255;
  parentObj$$292.FHalfCarry = parentObj$$292.FSubtract = false;
  parentObj$$292.FZero = parentObj$$292.registerE == 0;
  return;
}
function v368(parentObj$$291) {
  parentObj$$291.FCarry = parentObj$$291.registerD > 127;
  parentObj$$291.registerD = parentObj$$291.registerD << 1 & 255;
  parentObj$$291.FHalfCarry = parentObj$$291.FSubtract = false;
  parentObj$$291.FZero = parentObj$$291.registerD == 0;
  return;
}
function v367(parentObj$$290) {
  parentObj$$290.FCarry = parentObj$$290.registerC > 127;
  parentObj$$290.registerC = parentObj$$290.registerC << 1 & 255;
  parentObj$$290.FHalfCarry = parentObj$$290.FSubtract = false;
  parentObj$$290.FZero = parentObj$$290.registerC == 0;
  return;
}
function v366(parentObj$$289) {
  parentObj$$289.FCarry = parentObj$$289.registerB > 127;
  parentObj$$289.registerB = parentObj$$289.registerB << 1 & 255;
  parentObj$$289.FHalfCarry = parentObj$$289.FSubtract = false;
  parentObj$$289.FZero = parentObj$$289.registerB == 0;
  return;
}
function v365(parentObj$$288) {
  var newFCarry$$15 = (parentObj$$288.registerA & 1) == 1;
  var v7355;
  if (parentObj$$288.FCarry) {
    v7355 = 128;
  } else {
    v7355 = 0;
  }
  parentObj$$288.registerA = v7355 | parentObj$$288.registerA >> 1;
  parentObj$$288.FCarry = newFCarry$$15;
  parentObj$$288.FHalfCarry = parentObj$$288.FSubtract = false;
  parentObj$$288.FZero = parentObj$$288.registerA == 0;
  return;
}
function v364(parentObj$$287) {
  var v3811 = parentObj$$287.memoryReader;
  var temp_var$$15 = JAM.call(v3811[parentObj$$287.registersHL], v3811, [parentObj$$287, parentObj$$287.registersHL], JAM.policy.p1);
  var newFCarry$$14 = (temp_var$$15 & 1) == 1;
  var v7357;
  if (parentObj$$287.FCarry) {
    v7357 = 128;
  } else {
    v7357 = 0;
  }
  temp_var$$15 = v7357 | temp_var$$15 >> 1;
  parentObj$$287.FCarry = newFCarry$$14;
  var v3817 = parentObj$$287.memoryWriter;
  JAM.call(v3817[parentObj$$287.registersHL], v3817, [parentObj$$287, parentObj$$287.registersHL, temp_var$$15], JAM.policy.p1);
  parentObj$$287.FHalfCarry = parentObj$$287.FSubtract = false;
  parentObj$$287.FZero = temp_var$$15 == 0;
  return;
}
function v363(parentObj$$286) {
  var newFCarry$$13 = (parentObj$$286.registersHL & 1) == 1;
  var v7359 = parentObj$$286.registersHL & 65280;
  var v9168;
  if (parentObj$$286.FCarry) {
    v9168 = 128;
  } else {
    v9168 = 0;
  }
  parentObj$$286.registersHL = v7359 | v9168 | (parentObj$$286.registersHL & 255) >> 1;
  parentObj$$286.FCarry = newFCarry$$13;
  parentObj$$286.FHalfCarry = parentObj$$286.FSubtract = false;
  parentObj$$286.FZero = (parentObj$$286.registersHL & 255) == 0;
  return;
}
function v362(parentObj$$285) {
  var newFCarry$$12 = (parentObj$$285.registersHL & 256) == 256;
  var v9170;
  if (parentObj$$285.FCarry) {
    v9170 = 32768;
  } else {
    v9170 = 0;
  }
  parentObj$$285.registersHL = v9170 | parentObj$$285.registersHL >> 1 & 65280 | parentObj$$285.registersHL & 255;
  parentObj$$285.FCarry = newFCarry$$12;
  parentObj$$285.FHalfCarry = parentObj$$285.FSubtract = false;
  parentObj$$285.FZero = parentObj$$285.registersHL < 256;
  return;
}
function v361(parentObj$$284) {
  var newFCarry$$11 = (parentObj$$284.registerE & 1) == 1;
  var v7368;
  if (parentObj$$284.FCarry) {
    v7368 = 128;
  } else {
    v7368 = 0;
  }
  parentObj$$284.registerE = v7368 | parentObj$$284.registerE >> 1;
  parentObj$$284.FCarry = newFCarry$$11;
  parentObj$$284.FHalfCarry = parentObj$$284.FSubtract = false;
  parentObj$$284.FZero = parentObj$$284.registerE == 0;
  return;
}
function v360(parentObj$$283) {
  var newFCarry$$10 = (parentObj$$283.registerD & 1) == 1;
  var v7371;
  if (parentObj$$283.FCarry) {
    v7371 = 128;
  } else {
    v7371 = 0;
  }
  parentObj$$283.registerD = v7371 | parentObj$$283.registerD >> 1;
  parentObj$$283.FCarry = newFCarry$$10;
  parentObj$$283.FHalfCarry = parentObj$$283.FSubtract = false;
  parentObj$$283.FZero = parentObj$$283.registerD == 0;
  return;
}
function v359(parentObj$$282) {
  var newFCarry$$9 = (parentObj$$282.registerC & 1) == 1;
  var v7374;
  if (parentObj$$282.FCarry) {
    v7374 = 128;
  } else {
    v7374 = 0;
  }
  parentObj$$282.registerC = v7374 | parentObj$$282.registerC >> 1;
  parentObj$$282.FCarry = newFCarry$$9;
  parentObj$$282.FHalfCarry = parentObj$$282.FSubtract = false;
  parentObj$$282.FZero = parentObj$$282.registerC == 0;
  return;
}
function v358(parentObj$$281) {
  var newFCarry$$8 = (parentObj$$281.registerB & 1) == 1;
  var v7377;
  if (parentObj$$281.FCarry) {
    v7377 = 128;
  } else {
    v7377 = 0;
  }
  parentObj$$281.registerB = v7377 | parentObj$$281.registerB >> 1;
  parentObj$$281.FCarry = newFCarry$$8;
  parentObj$$281.FHalfCarry = parentObj$$281.FSubtract = false;
  parentObj$$281.FZero = parentObj$$281.registerB == 0;
  return;
}
function v357(parentObj$$280) {
  var newFCarry$$7 = parentObj$$280.registerA > 127;
  var v3845 = parentObj$$280.registerA << 1 & 255;
  var v7380;
  if (parentObj$$280.FCarry) {
    v7380 = 1;
  } else {
    v7380 = 0;
  }
  parentObj$$280.registerA = v3845 | v7380;
  parentObj$$280.FCarry = newFCarry$$7;
  parentObj$$280.FHalfCarry = parentObj$$280.FSubtract = false;
  parentObj$$280.FZero = parentObj$$280.registerA == 0;
  return;
}
function v356(parentObj$$279) {
  var v3848 = parentObj$$279.memoryReader;
  var temp_var$$14 = JAM.call(v3848[parentObj$$279.registersHL], v3848, [parentObj$$279, parentObj$$279.registersHL], JAM.policy.p1);
  var newFCarry$$6 = temp_var$$14 > 127;
  var v3851 = temp_var$$14 << 1 & 255;
  var v7382;
  if (parentObj$$279.FCarry) {
    v7382 = 1;
  } else {
    v7382 = 0;
  }
  temp_var$$14 = v3851 | v7382;
  parentObj$$279.FCarry = newFCarry$$6;
  var v3853 = parentObj$$279.memoryWriter;
  JAM.call(v3853[parentObj$$279.registersHL], v3853, [parentObj$$279, parentObj$$279.registersHL, temp_var$$14], JAM.policy.p1);
  parentObj$$279.FHalfCarry = parentObj$$279.FSubtract = false;
  parentObj$$279.FZero = temp_var$$14 == 0;
  return;
}
function v355(parentObj$$278) {
  var newFCarry$$5 = (parentObj$$278.registersHL & 128) == 128;
  var v3857 = parentObj$$278.registersHL & 65280 | parentObj$$278.registersHL << 1 & 255;
  var v7386;
  if (parentObj$$278.FCarry) {
    v7386 = 1;
  } else {
    v7386 = 0;
  }
  parentObj$$278.registersHL = v3857 | v7386;
  parentObj$$278.FCarry = newFCarry$$5;
  parentObj$$278.FHalfCarry = parentObj$$278.FSubtract = false;
  parentObj$$278.FZero = (parentObj$$278.registersHL & 255) == 0;
  return;
}
function v354(parentObj$$277) {
  var newFCarry$$4 = parentObj$$277.registersHL > 32767;
  var v7388 = parentObj$$277.registersHL << 1 & 65024;
  var v9183;
  if (parentObj$$277.FCarry) {
    v9183 = 256;
  } else {
    v9183 = 0;
  }
  parentObj$$277.registersHL = v7388 | v9183 | parentObj$$277.registersHL & 255;
  parentObj$$277.FCarry = newFCarry$$4;
  parentObj$$277.FHalfCarry = parentObj$$277.FSubtract = false;
  parentObj$$277.FZero = parentObj$$277.registersHL < 256;
  return;
}
function v353(parentObj$$276) {
  var newFCarry$$3 = parentObj$$276.registerE > 127;
  var v3865 = parentObj$$276.registerE << 1 & 255;
  var v7392;
  if (parentObj$$276.FCarry) {
    v7392 = 1;
  } else {
    v7392 = 0;
  }
  parentObj$$276.registerE = v3865 | v7392;
  parentObj$$276.FCarry = newFCarry$$3;
  parentObj$$276.FHalfCarry = parentObj$$276.FSubtract = false;
  parentObj$$276.FZero = parentObj$$276.registerE == 0;
  return;
}
function v352(parentObj$$275) {
  var newFCarry$$2 = parentObj$$275.registerD > 127;
  var v3869 = parentObj$$275.registerD << 1 & 255;
  var v7394;
  if (parentObj$$275.FCarry) {
    v7394 = 1;
  } else {
    v7394 = 0;
  }
  parentObj$$275.registerD = v3869 | v7394;
  parentObj$$275.FCarry = newFCarry$$2;
  parentObj$$275.FHalfCarry = parentObj$$275.FSubtract = false;
  parentObj$$275.FZero = parentObj$$275.registerD == 0;
  return;
}
function v351(parentObj$$274) {
  var newFCarry$$1 = parentObj$$274.registerC > 127;
  var v3873 = parentObj$$274.registerC << 1 & 255;
  var v7396;
  if (parentObj$$274.FCarry) {
    v7396 = 1;
  } else {
    v7396 = 0;
  }
  parentObj$$274.registerC = v3873 | v7396;
  parentObj$$274.FCarry = newFCarry$$1;
  parentObj$$274.FHalfCarry = parentObj$$274.FSubtract = false;
  parentObj$$274.FZero = parentObj$$274.registerC == 0;
  return;
}
function v350(parentObj$$273) {
  var newFCarry = parentObj$$273.registerB > 127;
  var v3877 = parentObj$$273.registerB << 1 & 255;
  var v7398;
  if (parentObj$$273.FCarry) {
    v7398 = 1;
  } else {
    v7398 = 0;
  }
  parentObj$$273.registerB = v3877 | v7398;
  parentObj$$273.FCarry = newFCarry;
  parentObj$$273.FHalfCarry = parentObj$$273.FSubtract = false;
  parentObj$$273.FZero = parentObj$$273.registerB == 0;
  return;
}
function v349(parentObj$$272) {
  parentObj$$272.FCarry = (parentObj$$272.registerA & 1) == 1;
  var v7400;
  if (parentObj$$272.FCarry) {
    v7400 = 128;
  } else {
    v7400 = 0;
  }
  parentObj$$272.registerA = v7400 | parentObj$$272.registerA >> 1;
  parentObj$$272.FHalfCarry = parentObj$$272.FSubtract = false;
  parentObj$$272.FZero = parentObj$$272.registerA == 0;
  return;
}
function v348(parentObj$$271) {
  var v3884 = parentObj$$271.memoryReader;
  var temp_var$$13 = JAM.call(v3884[parentObj$$271.registersHL], v3884, [parentObj$$271, parentObj$$271.registersHL], JAM.policy.p1);
  parentObj$$271.FCarry = (temp_var$$13 & 1) == 1;
  var v7402;
  if (parentObj$$271.FCarry) {
    v7402 = 128;
  } else {
    v7402 = 0;
  }
  temp_var$$13 = v7402 | temp_var$$13 >> 1;
  var v3890 = parentObj$$271.memoryWriter;
  JAM.call(v3890[parentObj$$271.registersHL], v3890, [parentObj$$271, parentObj$$271.registersHL, temp_var$$13], JAM.policy.p1);
  parentObj$$271.FHalfCarry = parentObj$$271.FSubtract = false;
  parentObj$$271.FZero = temp_var$$13 == 0;
  return;
}
function v347(parentObj$$270) {
  parentObj$$270.FCarry = (parentObj$$270.registersHL & 1) == 1;
  var v7404 = parentObj$$270.registersHL & 65280;
  var v9195;
  if (parentObj$$270.FCarry) {
    v9195 = 128;
  } else {
    v9195 = 0;
  }
  parentObj$$270.registersHL = v7404 | v9195 | (parentObj$$270.registersHL & 255) >> 1;
  parentObj$$270.FHalfCarry = parentObj$$270.FSubtract = false;
  parentObj$$270.FZero = (parentObj$$270.registersHL & 255) == 0;
  return;
}
function v346(parentObj$$269) {
  parentObj$$269.FCarry = (parentObj$$269.registersHL & 256) == 256;
  var v9197;
  if (parentObj$$269.FCarry) {
    v9197 = 32768;
  } else {
    v9197 = 0;
  }
  parentObj$$269.registersHL = v9197 | parentObj$$269.registersHL >> 1 & 65280 | parentObj$$269.registersHL & 255;
  parentObj$$269.FHalfCarry = parentObj$$269.FSubtract = false;
  parentObj$$269.FZero = parentObj$$269.registersHL < 256;
  return;
}
function v345(parentObj$$268) {
  parentObj$$268.FCarry = (parentObj$$268.registerE & 1) == 1;
  var v7413;
  if (parentObj$$268.FCarry) {
    v7413 = 128;
  } else {
    v7413 = 0;
  }
  parentObj$$268.registerE = v7413 | parentObj$$268.registerE >> 1;
  parentObj$$268.FHalfCarry = parentObj$$268.FSubtract = false;
  parentObj$$268.FZero = parentObj$$268.registerE == 0;
  return;
}
function v344(parentObj$$267) {
  parentObj$$267.FCarry = (parentObj$$267.registerD & 1) == 1;
  var v7416;
  if (parentObj$$267.FCarry) {
    v7416 = 128;
  } else {
    v7416 = 0;
  }
  parentObj$$267.registerD = v7416 | parentObj$$267.registerD >> 1;
  parentObj$$267.FHalfCarry = parentObj$$267.FSubtract = false;
  parentObj$$267.FZero = parentObj$$267.registerD == 0;
  return;
}
function v343(parentObj$$266) {
  parentObj$$266.FCarry = (parentObj$$266.registerC & 1) == 1;
  var v7419;
  if (parentObj$$266.FCarry) {
    v7419 = 128;
  } else {
    v7419 = 0;
  }
  parentObj$$266.registerC = v7419 | parentObj$$266.registerC >> 1;
  parentObj$$266.FHalfCarry = parentObj$$266.FSubtract = false;
  parentObj$$266.FZero = parentObj$$266.registerC == 0;
  return;
}
function v342(parentObj$$265) {
  parentObj$$265.FCarry = (parentObj$$265.registerB & 1) == 1;
  var v7422;
  if (parentObj$$265.FCarry) {
    v7422 = 128;
  } else {
    v7422 = 0;
  }
  parentObj$$265.registerB = v7422 | parentObj$$265.registerB >> 1;
  parentObj$$265.FHalfCarry = parentObj$$265.FSubtract = false;
  parentObj$$265.FZero = parentObj$$265.registerB == 0;
  return;
}
function v341(parentObj$$264) {
  parentObj$$264.FCarry = parentObj$$264.registerA > 127;
  var v3918 = parentObj$$264.registerA << 1 & 255;
  var v7425;
  if (parentObj$$264.FCarry) {
    v7425 = 1;
  } else {
    v7425 = 0;
  }
  parentObj$$264.registerA = v3918 | v7425;
  parentObj$$264.FHalfCarry = parentObj$$264.FSubtract = false;
  parentObj$$264.FZero = parentObj$$264.registerA == 0;
  return;
}
function v340(parentObj$$263) {
  var v3921 = parentObj$$263.memoryReader;
  var temp_var$$12 = JAM.call(v3921[parentObj$$263.registersHL], v3921, [parentObj$$263, parentObj$$263.registersHL], JAM.policy.p1);
  parentObj$$263.FCarry = temp_var$$12 > 127;
  var v3924 = temp_var$$12 << 1 & 255;
  var v7427;
  if (parentObj$$263.FCarry) {
    v7427 = 1;
  } else {
    v7427 = 0;
  }
  temp_var$$12 = v3924 | v7427;
  var v3926 = parentObj$$263.memoryWriter;
  JAM.call(v3926[parentObj$$263.registersHL], v3926, [parentObj$$263, parentObj$$263.registersHL, temp_var$$12], JAM.policy.p1);
  parentObj$$263.FHalfCarry = parentObj$$263.FSubtract = false;
  parentObj$$263.FZero = temp_var$$12 == 0;
  return;
}
function v339(parentObj$$262) {
  parentObj$$262.FCarry = (parentObj$$262.registersHL & 128) == 128;
  var v3930 = parentObj$$262.registersHL & 65280 | parentObj$$262.registersHL << 1 & 255;
  var v7431;
  if (parentObj$$262.FCarry) {
    v7431 = 1;
  } else {
    v7431 = 0;
  }
  parentObj$$262.registersHL = v3930 | v7431;
  parentObj$$262.FHalfCarry = parentObj$$262.FSubtract = false;
  parentObj$$262.FZero = (parentObj$$262.registersHL & 255) == 0;
  return;
}
function v338(parentObj$$261) {
  parentObj$$261.FCarry = parentObj$$261.registersHL > 32767;
  var v7433 = parentObj$$261.registersHL << 1 & 65024;
  var v9210;
  if (parentObj$$261.FCarry) {
    v9210 = 256;
  } else {
    v9210 = 0;
  }
  parentObj$$261.registersHL = v7433 | v9210 | parentObj$$261.registersHL & 255;
  parentObj$$261.FHalfCarry = parentObj$$261.FSubtract = false;
  parentObj$$261.FZero = parentObj$$261.registersHL < 256;
  return;
}
function v337(parentObj$$260) {
  parentObj$$260.FCarry = parentObj$$260.registerE > 127;
  var v3938 = parentObj$$260.registerE << 1 & 255;
  var v7437;
  if (parentObj$$260.FCarry) {
    v7437 = 1;
  } else {
    v7437 = 0;
  }
  parentObj$$260.registerE = v3938 | v7437;
  parentObj$$260.FHalfCarry = parentObj$$260.FSubtract = false;
  parentObj$$260.FZero = parentObj$$260.registerE == 0;
  return;
}
function v336(parentObj$$259) {
  parentObj$$259.FCarry = parentObj$$259.registerD > 127;
  var v3942 = parentObj$$259.registerD << 1 & 255;
  var v7439;
  if (parentObj$$259.FCarry) {
    v7439 = 1;
  } else {
    v7439 = 0;
  }
  parentObj$$259.registerD = v3942 | v7439;
  parentObj$$259.FHalfCarry = parentObj$$259.FSubtract = false;
  parentObj$$259.FZero = parentObj$$259.registerD == 0;
  return;
}
function v335(parentObj$$258) {
  parentObj$$258.FCarry = parentObj$$258.registerC > 127;
  var v3946 = parentObj$$258.registerC << 1 & 255;
  var v7441;
  if (parentObj$$258.FCarry) {
    v7441 = 1;
  } else {
    v7441 = 0;
  }
  parentObj$$258.registerC = v3946 | v7441;
  parentObj$$258.FHalfCarry = parentObj$$258.FSubtract = false;
  parentObj$$258.FZero = parentObj$$258.registerC == 0;
  return;
}
function v334(parentObj$$257) {
  parentObj$$257.FCarry = parentObj$$257.registerB > 127;
  var v3950 = parentObj$$257.registerB << 1 & 255;
  var v7443;
  if (parentObj$$257.FCarry) {
    v7443 = 1;
  } else {
    v7443 = 0;
  }
  parentObj$$257.registerB = v3950 | v7443;
  parentObj$$257.FHalfCarry = parentObj$$257.FSubtract = false;
  parentObj$$257.FZero = parentObj$$257.registerB == 0;
  return;
}
function v333(parentObj$$256) {
  parentObj$$256.stackPointer = parentObj$$256.stackPointer - 1 & 65535;
  var v3954 = parentObj$$256.memoryWriter;
  JAM.call(v3954[parentObj$$256.stackPointer], v3954, [parentObj$$256, parentObj$$256.stackPointer, parentObj$$256.programCounter >> 8], JAM.policy.p1);
  parentObj$$256.stackPointer = parentObj$$256.stackPointer - 1 & 65535;
  var v3959 = parentObj$$256.memoryWriter;
  JAM.call(v3959[parentObj$$256.stackPointer], v3959, [parentObj$$256, parentObj$$256.stackPointer, parentObj$$256.programCounter & 255], JAM.policy.p1);
  parentObj$$256.programCounter = 56;
  return;
}
function v332(parentObj$$255) {
  var v3963 = parentObj$$255.registerA;
  var v7448 = parentObj$$255.memoryReader;
  var dirtySum$$43 = v3963 - JAM.call(v7448[parentObj$$255.programCounter], v7448, [parentObj$$255, parentObj$$255.programCounter], JAM.policy.p1);
  parentObj$$255.programCounter = parentObj$$255.programCounter + 1 & 65535;
  parentObj$$255.FHalfCarry = (dirtySum$$43 & 15) > (parentObj$$255.registerA & 15);
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
  var v9219 = parentObj$$252.IRQEnableDelay == 2;
  if (!v9219) {
    var v10349 = parentObj$$252.memoryReader;
    v9219 = JAM.call(v10349[parentObj$$252.programCounter], v10349, [parentObj$$252, parentObj$$252.programCounter], JAM.policy.p1) == 118;
  }
  if (v9219) {
    v3968 = 1;
  } else {
    v3968 = 2;
  }
  parentObj$$252.IRQEnableDelay = v3968;
  return;
}
function v328(parentObj$$251) {
  var v7454 = JAM.call(parentObj$$251.memoryRead, parentObj$$251, [parentObj$$251.programCounter + 1 & 65535]) << 8;
  var v9221 = parentObj$$251.memoryReader;
  var v10752 = JAM.call(parentObj$$251.memoryRead, parentObj$$251, [v7454 | JAM.call(v9221[parentObj$$251.programCounter], v9221, [parentObj$$251, parentObj$$251.programCounter], JAM.policy.p1)]);
  parentObj$$251.registerA = v10752;
  parentObj$$251.programCounter = parentObj$$251.programCounter + 2 & 65535;
  return;
}
function v327(parentObj$$250) {
  parentObj$$250.stackPointer = parentObj$$250.registersHL;
  return;
}
function v326(parentObj$$249) {
  var v9224 = parentObj$$249.memoryReader;
  var temp_var$$11 = JAM.call(v9224[parentObj$$249.programCounter], v9224, [parentObj$$249, parentObj$$249.programCounter], JAM.policy.p1) << 24 >> 24;
  parentObj$$249.programCounter = parentObj$$249.programCounter + 1 & 65535;
  parentObj$$249.registersHL = parentObj$$249.stackPointer + temp_var$$11 & 65535;
  temp_var$$11 = parentObj$$249.stackPointer ^ temp_var$$11 ^ parentObj$$249.registersHL;
  parentObj$$249.FCarry = (temp_var$$11 & 256) == 256;
  parentObj$$249.FHalfCarry = (temp_var$$11 & 16) == 16;
  parentObj$$249.FZero = parentObj$$249.FSubtract = false;
  return;
}
function v325(parentObj$$248) {
  parentObj$$248.stackPointer = parentObj$$248.stackPointer - 1 & 65535;
  var v3979 = parentObj$$248.memoryWriter;
  JAM.call(v3979[parentObj$$248.stackPointer], v3979, [parentObj$$248, parentObj$$248.stackPointer, parentObj$$248.programCounter >> 8], JAM.policy.p1);
  parentObj$$248.stackPointer = parentObj$$248.stackPointer - 1 & 65535;
  var v3984 = parentObj$$248.memoryWriter;
  JAM.call(v3984[parentObj$$248.stackPointer], v3984, [parentObj$$248, parentObj$$248.stackPointer, parentObj$$248.programCounter & 255], JAM.policy.p1);
  parentObj$$248.programCounter = 48;
  return;
}
function v324(parentObj$$247) {
  var v7465 = parentObj$$247.registerA;
  var v9227 = parentObj$$247.memoryReader;
  parentObj$$247.registerA = v7465 | JAM.call(v9227[parentObj$$247.programCounter], v9227, [parentObj$$247, parentObj$$247.programCounter], JAM.policy.p1);
  parentObj$$247.FZero = parentObj$$247.registerA == 0;
  parentObj$$247.programCounter = parentObj$$247.programCounter + 1 & 65535;
  parentObj$$247.FSubtract = parentObj$$247.FCarry = parentObj$$247.FHalfCarry = false;
  return;
}
function v323(parentObj$$246) {
  parentObj$$246.stackPointer = parentObj$$246.stackPointer - 1 & 65535;
  var v3991 = parentObj$$246.memoryWriter;
  JAM.call(v3991[parentObj$$246.stackPointer], v3991, [parentObj$$246, parentObj$$246.stackPointer, parentObj$$246.registerA], JAM.policy.p1);
  parentObj$$246.stackPointer = parentObj$$246.stackPointer - 1 & 65535;
  var v3996 = parentObj$$246.memoryWriter;
  var v3997 = parentObj$$246.stackPointer;
  var v3998 = parentObj$$246.stackPointer;
  var v10353;
  if (parentObj$$246.FZero) {
    v10353 = 128;
  } else {
    v10353 = 0;
  }
  var v10016 = v10353;
  var v10354;
  if (parentObj$$246.FSubtract) {
    v10354 = 64;
  } else {
    v10354 = 0;
  }
  var v9230 = v10016 | v10354;
  var v10018;
  if (parentObj$$246.FHalfCarry) {
    v10018 = 32;
  } else {
    v10018 = 0;
  }
  var v7470 = v9230 | v10018;
  var v9232;
  if (parentObj$$246.FCarry) {
    v9232 = 16;
  } else {
    v9232 = 0;
  }
  JAM.call(v3996[v3997], v3996, [parentObj$$246, v3998, v7470 | v9232], JAM.policy.p1);
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
  var v10753 = JAM.call(v4000[parentObj$$243.registerC], v4000, [parentObj$$243, parentObj$$243.registerC], JAM.policy.p1);
  parentObj$$243.registerA = v10753;
  return;
}
function v319(parentObj$$242) {
  var v4003 = parentObj$$242.memoryReader;
  var temp_var$$10 = JAM.call(v4003[parentObj$$242.stackPointer], v4003, [parentObj$$242, parentObj$$242.stackPointer], JAM.policy.p1);
  parentObj$$242.FZero = temp_var$$10 > 127;
  parentObj$$242.FSubtract = (temp_var$$10 & 64) == 64;
  parentObj$$242.FHalfCarry = (temp_var$$10 & 32) == 32;
  parentObj$$242.FCarry = (temp_var$$10 & 16) == 16;
  var v10754 = JAM.call(parentObj$$242.memoryRead, parentObj$$242, [parentObj$$242.stackPointer + 1 & 65535]);
  parentObj$$242.registerA = v10754;
  parentObj$$242.stackPointer = parentObj$$242.stackPointer + 2 & 65535;
  return;
}
function v318(parentObj$$241) {
  var v7474 = parentObj$$241.memoryReader;
  var v10755 = JAM.call(parentObj$$241.memoryHighRead, parentObj$$241, [JAM.call(v7474[parentObj$$241.programCounter], v7474, [parentObj$$241, parentObj$$241.programCounter], JAM.policy.p1)]);
  parentObj$$241.registerA = v10755;
  parentObj$$241.programCounter = parentObj$$241.programCounter + 1 & 65535;
  return;
}
function v317(parentObj$$240) {
  parentObj$$240.stackPointer = parentObj$$240.stackPointer - 1 & 65535;
  var v4014 = parentObj$$240.memoryWriter;
  JAM.call(v4014[parentObj$$240.stackPointer], v4014, [parentObj$$240, parentObj$$240.stackPointer, parentObj$$240.programCounter >> 8], JAM.policy.p1);
  parentObj$$240.stackPointer = parentObj$$240.stackPointer - 1 & 65535;
  var v4019 = parentObj$$240.memoryWriter;
  JAM.call(v4019[parentObj$$240.stackPointer], v4019, [parentObj$$240, parentObj$$240.stackPointer, parentObj$$240.programCounter & 255], JAM.policy.p1);
  parentObj$$240.programCounter = 40;
  return;
}
function v316(parentObj$$239) {
  var v7482 = parentObj$$239.registerA;
  var v9234 = parentObj$$239.memoryReader;
  parentObj$$239.registerA = v7482 ^ JAM.call(v9234[parentObj$$239.programCounter], v9234, [parentObj$$239, parentObj$$239.programCounter], JAM.policy.p1);
  parentObj$$239.programCounter = parentObj$$239.programCounter + 1 & 65535;
  parentObj$$239.FZero = parentObj$$239.registerA == 0;
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
  var v7485 = JAM.call(parentObj$$235.memoryRead, parentObj$$235, [parentObj$$235.programCounter + 1 & 65535]) << 8;
  var v9238 = parentObj$$235.memoryReader;
  JAM.call(parentObj$$235.memoryWrite, parentObj$$235, [v7485 | JAM.call(v9238[parentObj$$235.programCounter], v9238, [parentObj$$235, parentObj$$235.programCounter], JAM.policy.p1), parentObj$$235.registerA], JAM.policy.p1);
  parentObj$$235.programCounter = parentObj$$235.programCounter + 2 & 65535;
  return;
}
function v311(parentObj$$234) {
  parentObj$$234.programCounter = parentObj$$234.registersHL;
  return;
}
function v310(parentObj$$233) {
  var v9241 = parentObj$$233.memoryReader;
  var temp_value2 = JAM.call(v9241[parentObj$$233.programCounter], v9241, [parentObj$$233, parentObj$$233.programCounter], JAM.policy.p1) << 24 >> 24;
  parentObj$$233.programCounter = parentObj$$233.programCounter + 1 & 65535;
  var temp_value = parentObj$$233.stackPointer + temp_value2 & 65535;
  temp_value2 = parentObj$$233.stackPointer ^ temp_value2 ^ temp_value;
  parentObj$$233.stackPointer = temp_value;
  parentObj$$233.FCarry = (temp_value2 & 256) == 256;
  parentObj$$233.FHalfCarry = (temp_value2 & 16) == 16;
  parentObj$$233.FZero = parentObj$$233.FSubtract = false;
  return;
}
function v309(parentObj$$232) {
  parentObj$$232.stackPointer = parentObj$$232.stackPointer - 1 & 65535;
  var v4035 = parentObj$$232.memoryWriter;
  JAM.call(v4035[parentObj$$232.stackPointer], v4035, [parentObj$$232, parentObj$$232.stackPointer, parentObj$$232.programCounter >> 8], JAM.policy.p1);
  parentObj$$232.stackPointer = parentObj$$232.stackPointer - 1 & 65535;
  var v4040 = parentObj$$232.memoryWriter;
  JAM.call(v4040[parentObj$$232.stackPointer], v4040, [parentObj$$232, parentObj$$232.stackPointer, parentObj$$232.programCounter & 255], JAM.policy.p1);
  parentObj$$232.programCounter = 32;
  return;
}
function v308(parentObj$$231) {
  var v7496 = parentObj$$231.registerA;
  var v9244 = parentObj$$231.memoryReader;
  parentObj$$231.registerA = v7496 & JAM.call(v9244[parentObj$$231.programCounter], v9244, [parentObj$$231, parentObj$$231.programCounter], JAM.policy.p1);
  parentObj$$231.programCounter = parentObj$$231.programCounter + 1 & 65535;
  parentObj$$231.FZero = parentObj$$231.registerA == 0;
  parentObj$$231.FHalfCarry = true;
  parentObj$$231.FSubtract = parentObj$$231.FCarry = false;
  return;
}
function v307(parentObj$$230) {
  parentObj$$230.stackPointer = parentObj$$230.stackPointer - 1 & 65535;
  var v4047 = parentObj$$230.memoryWriter;
  JAM.call(v4047[parentObj$$230.stackPointer], v4047, [parentObj$$230, parentObj$$230.stackPointer, parentObj$$230.registersHL >> 8], JAM.policy.p1);
  parentObj$$230.stackPointer = parentObj$$230.stackPointer - 1 & 65535;
  var v4052 = parentObj$$230.memoryWriter;
  JAM.call(v4052[parentObj$$230.stackPointer], v4052, [parentObj$$230, parentObj$$230.stackPointer, parentObj$$230.registersHL & 255], JAM.policy.p1);
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
  JAM.call(v4056[parentObj$$227.registerC], v4056, [parentObj$$227, parentObj$$227.registerC, parentObj$$227.registerA], JAM.policy.p1);
  return;
}
function v303(parentObj$$226) {
  var v4060 = JAM.call(parentObj$$226.memoryRead, parentObj$$226, [parentObj$$226.stackPointer + 1 & 65535]) << 8;
  var v7504 = parentObj$$226.memoryReader;
  parentObj$$226.registersHL = v4060 | JAM.call(v7504[parentObj$$226.stackPointer], v7504, [parentObj$$226, parentObj$$226.stackPointer], JAM.policy.p1);
  parentObj$$226.stackPointer = parentObj$$226.stackPointer + 2 & 65535;
  return;
}
function v302(parentObj$$225) {
  var v7508 = parentObj$$225.memoryReader;
  JAM.call(parentObj$$225.memoryHighWrite, parentObj$$225, [JAM.call(v7508[parentObj$$225.programCounter], v7508, [parentObj$$225, parentObj$$225.programCounter], JAM.policy.p1), parentObj$$225.registerA], JAM.policy.p1);
  parentObj$$225.programCounter = parentObj$$225.programCounter + 1 & 65535;
  return;
}
function v301(parentObj$$224) {
  parentObj$$224.stackPointer = parentObj$$224.stackPointer - 1 & 65535;
  var v4067 = parentObj$$224.memoryWriter;
  JAM.call(v4067[parentObj$$224.stackPointer], v4067, [parentObj$$224, parentObj$$224.stackPointer, parentObj$$224.programCounter >> 8], JAM.policy.p1);
  parentObj$$224.stackPointer = parentObj$$224.stackPointer - 1 & 65535;
  var v4072 = parentObj$$224.memoryWriter;
  JAM.call(v4072[parentObj$$224.stackPointer], v4072, [parentObj$$224, parentObj$$224.stackPointer, parentObj$$224.programCounter & 255], JAM.policy.p1);
  parentObj$$224.programCounter = 24;
  return;
}
function v300(parentObj$$223) {
  var v4076 = parentObj$$223.memoryReader;
  var temp_var$$9 = JAM.call(v4076[parentObj$$223.programCounter], v4076, [parentObj$$223, parentObj$$223.programCounter], JAM.policy.p1);
  parentObj$$223.programCounter = parentObj$$223.programCounter + 1 & 65535;
  var v4080 = parentObj$$223.registerA - temp_var$$9;
  var v7518;
  if (parentObj$$223.FCarry) {
    v7518 = 1;
  } else {
    v7518 = 0;
  }
  var dirtySum$$42 = v4080 - v7518;
  var v7519 = (parentObj$$223.registerA & 15) - (temp_var$$9 & 15);
  var v9251;
  if (parentObj$$223.FCarry) {
    v9251 = 1;
  } else {
    v9251 = 0;
  }
  parentObj$$223.FHalfCarry = v7519 - v9251 < 0;
  parentObj$$223.FCarry = dirtySum$$42 < 0;
  parentObj$$223.registerA = dirtySum$$42 & 255;
  parentObj$$223.FZero = parentObj$$223.registerA == 0;
  parentObj$$223.FSubtract = true;
  return;
}
function v299(parentObj$$222) {
  cout("Illegal op code 0xDD called, pausing emulation.", 2);
  pause();
  return;
}
function v298(parentObj$$221) {
  if (parentObj$$221.FCarry) {
    var v4084 = JAM.call(parentObj$$221.memoryRead, parentObj$$221, [parentObj$$221.programCounter + 1 & 65535]) << 8;
    var v7522 = parentObj$$221.memoryReader;
    var temp_pc$$4 = v4084 | JAM.call(v7522[parentObj$$221.programCounter], v7522, [parentObj$$221, parentObj$$221.programCounter], JAM.policy.p1);
    parentObj$$221.programCounter = parentObj$$221.programCounter + 2 & 65535;
    parentObj$$221.stackPointer = parentObj$$221.stackPointer - 1 & 65535;
    var v4088 = parentObj$$221.memoryWriter;
    JAM.call(v4088[parentObj$$221.stackPointer], v4088, [parentObj$$221, parentObj$$221.stackPointer, parentObj$$221.programCounter >> 8], JAM.policy.p1);
    parentObj$$221.stackPointer = parentObj$$221.stackPointer - 1 & 65535;
    var v4093 = parentObj$$221.memoryWriter;
    JAM.call(v4093[parentObj$$221.stackPointer], v4093, [parentObj$$221, parentObj$$221.stackPointer, parentObj$$221.programCounter & 255], JAM.policy.p1);
    parentObj$$221.programCounter = temp_pc$$4;
    parentObj$$221.CPUTicks = parentObj$$221.CPUTicks + 12;
  } else {
    parentObj$$221.programCounter = parentObj$$221.programCounter + 2 & 65535;
  }
  return;
}
function v297(parentObj$$220) {
  cout("Illegal op code 0xDB called, pausing emulation.", 2);
  pause();
  return;
}
function v296(parentObj$$219) {
  if (parentObj$$219.FCarry) {
    var v4099 = JAM.call(parentObj$$219.memoryRead, parentObj$$219, [parentObj$$219.programCounter + 1 & 65535]) << 8;
    var v7533 = parentObj$$219.memoryReader;
    parentObj$$219.programCounter = v4099 | JAM.call(v7533[parentObj$$219.programCounter], v7533, [parentObj$$219, parentObj$$219.programCounter], JAM.policy.p1);
    parentObj$$219.CPUTicks = parentObj$$219.CPUTicks + 4;
  } else {
    parentObj$$219.programCounter = parentObj$$219.programCounter + 2 & 65535;
  }
  return;
}
function v295(parentObj$$218) {
  var v4103 = JAM.call(parentObj$$218.memoryRead, parentObj$$218, [parentObj$$218.stackPointer + 1 & 65535]) << 8;
  var v7539 = parentObj$$218.memoryReader;
  parentObj$$218.programCounter = v4103 | JAM.call(v7539[parentObj$$218.stackPointer], v7539, [parentObj$$218, parentObj$$218.stackPointer], JAM.policy.p1);
  parentObj$$218.stackPointer = parentObj$$218.stackPointer + 2 & 65535;
  var v4106;
  var v9255 = parentObj$$218.IRQEnableDelay == 2;
  if (!v9255) {
    var v10361 = parentObj$$218.memoryReader;
    v9255 = JAM.call(v10361[parentObj$$218.programCounter], v10361, [parentObj$$218, parentObj$$218.programCounter], JAM.policy.p1) == 118;
  }
  if (v9255) {
    v4106 = 1;
  } else {
    v4106 = 2;
  }
  parentObj$$218.IRQEnableDelay = v4106;
  return;
}
function v294(parentObj$$217) {
  if (parentObj$$217.FCarry) {
    var v4107 = JAM.call(parentObj$$217.memoryRead, parentObj$$217, [parentObj$$217.stackPointer + 1 & 65535]) << 8;
    var v7545 = parentObj$$217.memoryReader;
    parentObj$$217.programCounter = v4107 | JAM.call(v7545[parentObj$$217.stackPointer], v7545, [parentObj$$217, parentObj$$217.stackPointer], JAM.policy.p1);
    parentObj$$217.stackPointer = parentObj$$217.stackPointer + 2 & 65535;
    parentObj$$217.CPUTicks = parentObj$$217.CPUTicks + 12;
  }
  return;
}
function v293(parentObj$$216) {
  parentObj$$216.stackPointer = parentObj$$216.stackPointer - 1 & 65535;
  var v4112 = parentObj$$216.memoryWriter;
  JAM.call(v4112[parentObj$$216.stackPointer], v4112, [parentObj$$216, parentObj$$216.stackPointer, parentObj$$216.programCounter >> 8], JAM.policy.p1);
  parentObj$$216.stackPointer = parentObj$$216.stackPointer - 1 & 65535;
  var v4117 = parentObj$$216.memoryWriter;
  JAM.call(v4117[parentObj$$216.stackPointer], v4117, [parentObj$$216, parentObj$$216.stackPointer, parentObj$$216.programCounter & 255], JAM.policy.p1);
  parentObj$$216.programCounter = 16;
  return;
}
function v292(parentObj$$215) {
  var v4121 = parentObj$$215.registerA;
  var v7554 = parentObj$$215.memoryReader;
  var dirtySum$$41 = v4121 - JAM.call(v7554[parentObj$$215.programCounter], v7554, [parentObj$$215, parentObj$$215.programCounter], JAM.policy.p1);
  parentObj$$215.programCounter = parentObj$$215.programCounter + 1 & 65535;
  parentObj$$215.FHalfCarry = (parentObj$$215.registerA & 15) < (dirtySum$$41 & 15);
  parentObj$$215.FCarry = dirtySum$$41 < 0;
  parentObj$$215.registerA = dirtySum$$41 & 255;
  parentObj$$215.FZero = dirtySum$$41 == 0;
  parentObj$$215.FSubtract = true;
  return;
}
function v291(parentObj$$214) {
  parentObj$$214.stackPointer = parentObj$$214.stackPointer - 1 & 65535;
  var v4127 = parentObj$$214.memoryWriter;
  JAM.call(v4127[parentObj$$214.stackPointer], v4127, [parentObj$$214, parentObj$$214.stackPointer, parentObj$$214.registerD], JAM.policy.p1);
  parentObj$$214.stackPointer = parentObj$$214.stackPointer - 1 & 65535;
  var v4132 = parentObj$$214.memoryWriter;
  JAM.call(v4132[parentObj$$214.stackPointer], v4132, [parentObj$$214, parentObj$$214.stackPointer, parentObj$$214.registerE], JAM.policy.p1);
  return;
}
function v290(parentObj$$213) {
  if (!parentObj$$213.FCarry) {
    var v4136 = JAM.call(parentObj$$213.memoryRead, parentObj$$213, [parentObj$$213.programCounter + 1 & 65535]) << 8;
    var v7563 = parentObj$$213.memoryReader;
    var temp_pc$$3 = v4136 | JAM.call(v7563[parentObj$$213.programCounter], v7563, [parentObj$$213, parentObj$$213.programCounter], JAM.policy.p1);
    parentObj$$213.programCounter = parentObj$$213.programCounter + 2 & 65535;
    parentObj$$213.stackPointer = parentObj$$213.stackPointer - 1 & 65535;
    var v4140 = parentObj$$213.memoryWriter;
    JAM.call(v4140[parentObj$$213.stackPointer], v4140, [parentObj$$213, parentObj$$213.stackPointer, parentObj$$213.programCounter >> 8], JAM.policy.p1);
    parentObj$$213.stackPointer = parentObj$$213.stackPointer - 1 & 65535;
    var v4145 = parentObj$$213.memoryWriter;
    JAM.call(v4145[parentObj$$213.stackPointer], v4145, [parentObj$$213, parentObj$$213.stackPointer, parentObj$$213.programCounter & 255], JAM.policy.p1);
    parentObj$$213.programCounter = temp_pc$$3;
    parentObj$$213.CPUTicks = parentObj$$213.CPUTicks + 12;
  } else {
    parentObj$$213.programCounter = parentObj$$213.programCounter + 2 & 65535;
  }
  return;
}
function v289(parentObj$$212) {
  cout("Illegal op code 0xD3 called, pausing emulation.", 2);
  pause();
  return;
}
function v288(parentObj$$211) {
  if (!parentObj$$211.FCarry) {
    var v4151 = JAM.call(parentObj$$211.memoryRead, parentObj$$211, [parentObj$$211.programCounter + 1 & 65535]) << 8;
    var v7575 = parentObj$$211.memoryReader;
    parentObj$$211.programCounter = v4151 | JAM.call(v7575[parentObj$$211.programCounter], v7575, [parentObj$$211, parentObj$$211.programCounter], JAM.policy.p1);
    parentObj$$211.CPUTicks = parentObj$$211.CPUTicks + 4;
  } else {
    parentObj$$211.programCounter = parentObj$$211.programCounter + 2 & 65535;
  }
  return;
}
function v287(parentObj$$210) {
  var v4155 = parentObj$$210.memoryReader;
  var v10756 = JAM.call(v4155[parentObj$$210.stackPointer], v4155, [parentObj$$210, parentObj$$210.stackPointer], JAM.policy.p1);
  parentObj$$210.registerE = v10756;
  var v10757 = JAM.call(parentObj$$210.memoryRead, parentObj$$210, [parentObj$$210.stackPointer + 1 & 65535]);
  parentObj$$210.registerD = v10757;
  parentObj$$210.stackPointer = parentObj$$210.stackPointer + 2 & 65535;
  return;
}
function v286(parentObj$$209) {
  if (!parentObj$$209.FCarry) {
    var v4160 = JAM.call(parentObj$$209.memoryRead, parentObj$$209, [parentObj$$209.stackPointer + 1 & 65535]) << 8;
    var v7584 = parentObj$$209.memoryReader;
    parentObj$$209.programCounter = v4160 | JAM.call(v7584[parentObj$$209.stackPointer], v7584, [parentObj$$209, parentObj$$209.stackPointer], JAM.policy.p1);
    parentObj$$209.stackPointer = parentObj$$209.stackPointer + 2 & 65535;
    parentObj$$209.CPUTicks = parentObj$$209.CPUTicks + 12;
  }
  return;
}
function v285(parentObj$$208) {
  parentObj$$208.stackPointer = parentObj$$208.stackPointer - 1 & 65535;
  var v4165 = parentObj$$208.memoryWriter;
  JAM.call(v4165[parentObj$$208.stackPointer], v4165, [parentObj$$208, parentObj$$208.stackPointer, parentObj$$208.programCounter >> 8], JAM.policy.p1);
  parentObj$$208.stackPointer = parentObj$$208.stackPointer - 1 & 65535;
  var v4170 = parentObj$$208.memoryWriter;
  JAM.call(v4170[parentObj$$208.stackPointer], v4170, [parentObj$$208, parentObj$$208.stackPointer, parentObj$$208.programCounter & 255], JAM.policy.p1);
  parentObj$$208.programCounter = 8;
  return;
}
function v284(parentObj$$207) {
  var v4174 = parentObj$$207.memoryReader;
  var tempValue$$3 = JAM.call(v4174[parentObj$$207.programCounter], v4174, [parentObj$$207, parentObj$$207.programCounter], JAM.policy.p1);
  parentObj$$207.programCounter = parentObj$$207.programCounter + 1 & 65535;
  var v4178 = parentObj$$207.registerA + tempValue$$3;
  var v7595;
  if (parentObj$$207.FCarry) {
    v7595 = 1;
  } else {
    v7595 = 0;
  }
  var dirtySum$$40 = v4178 + v7595;
  var v7596 = (parentObj$$207.registerA & 15) + (tempValue$$3 & 15);
  var v9264;
  if (parentObj$$207.FCarry) {
    v9264 = 1;
  } else {
    v9264 = 0;
  }
  parentObj$$207.FHalfCarry = v7596 + v9264 > 15;
  parentObj$$207.FCarry = dirtySum$$40 > 255;
  parentObj$$207.registerA = dirtySum$$40 & 255;
  parentObj$$207.FZero = parentObj$$207.registerA == 0;
  parentObj$$207.FSubtract = false;
  return;
}
function v283(parentObj$$206) {
  var v4182 = JAM.call(parentObj$$206.memoryRead, parentObj$$206, [parentObj$$206.programCounter + 1 & 65535]) << 8;
  var v7599 = parentObj$$206.memoryReader;
  var temp_pc$$2 = v4182 | JAM.call(v7599[parentObj$$206.programCounter], v7599, [parentObj$$206, parentObj$$206.programCounter], JAM.policy.p1);
  parentObj$$206.programCounter = parentObj$$206.programCounter + 2 & 65535;
  parentObj$$206.stackPointer = parentObj$$206.stackPointer - 1 & 65535;
  var v4186 = parentObj$$206.memoryWriter;
  JAM.call(v4186[parentObj$$206.stackPointer], v4186, [parentObj$$206, parentObj$$206.stackPointer, parentObj$$206.programCounter >> 8], JAM.policy.p1);
  parentObj$$206.stackPointer = parentObj$$206.stackPointer - 1 & 65535;
  var v4191 = parentObj$$206.memoryWriter;
  JAM.call(v4191[parentObj$$206.stackPointer], v4191, [parentObj$$206, parentObj$$206.stackPointer, parentObj$$206.programCounter & 255], JAM.policy.p1);
  parentObj$$206.programCounter = temp_pc$$2;
  return;
}
function v282(parentObj$$205) {
  if (parentObj$$205.FZero) {
    var v4195 = JAM.call(parentObj$$205.memoryRead, parentObj$$205, [parentObj$$205.programCounter + 1 & 65535]) << 8;
    var v7608 = parentObj$$205.memoryReader;
    var temp_pc$$1 = v4195 | JAM.call(v7608[parentObj$$205.programCounter], v7608, [parentObj$$205, parentObj$$205.programCounter], JAM.policy.p1);
    parentObj$$205.programCounter = parentObj$$205.programCounter + 2 & 65535;
    parentObj$$205.stackPointer = parentObj$$205.stackPointer - 1 & 65535;
    var v4199 = parentObj$$205.memoryWriter;
    JAM.call(v4199[parentObj$$205.stackPointer], v4199, [parentObj$$205, parentObj$$205.stackPointer, parentObj$$205.programCounter >> 8], JAM.policy.p1);
    parentObj$$205.stackPointer = parentObj$$205.stackPointer - 1 & 65535;
    var v4204 = parentObj$$205.memoryWriter;
    JAM.call(v4204[parentObj$$205.stackPointer], v4204, [parentObj$$205, parentObj$$205.stackPointer, parentObj$$205.programCounter & 255], JAM.policy.p1);
    parentObj$$205.programCounter = temp_pc$$1;
    parentObj$$205.CPUTicks = parentObj$$205.CPUTicks + 12;
  } else {
    parentObj$$205.programCounter = parentObj$$205.programCounter + 2 & 65535;
  }
  return;
}
function v281(parentObj$$204) {
  var v4210 = parentObj$$204.memoryReader;
  var opcode = JAM.call(v4210[parentObj$$204.programCounter], v4210, [parentObj$$204, parentObj$$204.programCounter], JAM.policy.p1);
  parentObj$$204.programCounter = parentObj$$204.programCounter + 1 & 65535;
  parentObj$$204.CPUTicks = parentObj$$204.CPUTicks + parentObj$$204.SecondaryTICKTable[opcode];
  var v4214 = parentObj$$204.CBOPCODE;
  JAM.call(v4214[opcode], v4214, [parentObj$$204]);
  return;
}
function v280(parentObj$$203) {
  if (parentObj$$203.FZero) {
    var v4215 = JAM.call(parentObj$$203.memoryRead, parentObj$$203, [parentObj$$203.programCounter + 1 & 65535]) << 8;
    var v7622 = parentObj$$203.memoryReader;
    parentObj$$203.programCounter = v4215 | JAM.call(v7622[parentObj$$203.programCounter], v7622, [parentObj$$203, parentObj$$203.programCounter], JAM.policy.p1);
    parentObj$$203.CPUTicks = parentObj$$203.CPUTicks + 4;
  } else {
    parentObj$$203.programCounter = parentObj$$203.programCounter + 2 & 65535;
  }
  return;
}
function v279(parentObj$$202) {
  var v4219 = JAM.call(parentObj$$202.memoryRead, parentObj$$202, [parentObj$$202.stackPointer + 1 & 65535]) << 8;
  var v7628 = parentObj$$202.memoryReader;
  parentObj$$202.programCounter = v4219 | JAM.call(v7628[parentObj$$202.stackPointer], v7628, [parentObj$$202, parentObj$$202.stackPointer], JAM.policy.p1);
  parentObj$$202.stackPointer = parentObj$$202.stackPointer + 2 & 65535;
  return;
}
function v278(parentObj$$201) {
  if (parentObj$$201.FZero) {
    var v4222 = JAM.call(parentObj$$201.memoryRead, parentObj$$201, [parentObj$$201.stackPointer + 1 & 65535]) << 8;
    var v7633 = parentObj$$201.memoryReader;
    parentObj$$201.programCounter = v4222 | JAM.call(v7633[parentObj$$201.stackPointer], v7633, [parentObj$$201, parentObj$$201.stackPointer], JAM.policy.p1);
    parentObj$$201.stackPointer = parentObj$$201.stackPointer + 2 & 65535;
    parentObj$$201.CPUTicks = parentObj$$201.CPUTicks + 12;
  }
  return;
}
function v277(parentObj$$200) {
  parentObj$$200.stackPointer = parentObj$$200.stackPointer - 1 & 65535;
  var v4227 = parentObj$$200.memoryWriter;
  JAM.call(v4227[parentObj$$200.stackPointer], v4227, [parentObj$$200, parentObj$$200.stackPointer, parentObj$$200.programCounter >> 8], JAM.policy.p1);
  parentObj$$200.stackPointer = parentObj$$200.stackPointer - 1 & 65535;
  var v4232 = parentObj$$200.memoryWriter;
  JAM.call(v4232[parentObj$$200.stackPointer], v4232, [parentObj$$200, parentObj$$200.stackPointer, parentObj$$200.programCounter & 255], JAM.policy.p1);
  parentObj$$200.programCounter = 0;
  return;
}
function v276(parentObj$$199) {
  var v4236 = parentObj$$199.registerA;
  var v7642 = parentObj$$199.memoryReader;
  var dirtySum$$39 = v4236 + JAM.call(v7642[parentObj$$199.programCounter], v7642, [parentObj$$199, parentObj$$199.programCounter], JAM.policy.p1);
  parentObj$$199.programCounter = parentObj$$199.programCounter + 1 & 65535;
  parentObj$$199.FHalfCarry = (dirtySum$$39 & 15) < (parentObj$$199.registerA & 15);
  parentObj$$199.FCarry = dirtySum$$39 > 255;
  parentObj$$199.registerA = dirtySum$$39 & 255;
  parentObj$$199.FZero = parentObj$$199.registerA == 0;
  parentObj$$199.FSubtract = false;
  return;
}
function v275(parentObj$$198) {
  parentObj$$198.stackPointer = parentObj$$198.stackPointer - 1 & 65535;
  var v4243 = parentObj$$198.memoryWriter;
  JAM.call(v4243[parentObj$$198.stackPointer], v4243, [parentObj$$198, parentObj$$198.stackPointer, parentObj$$198.registerB], JAM.policy.p1);
  parentObj$$198.stackPointer = parentObj$$198.stackPointer - 1 & 65535;
  var v4248 = parentObj$$198.memoryWriter;
  JAM.call(v4248[parentObj$$198.stackPointer], v4248, [parentObj$$198, parentObj$$198.stackPointer, parentObj$$198.registerC], JAM.policy.p1);
  return;
}
function v274(parentObj$$197) {
  if (!parentObj$$197.FZero) {
    var v4252 = JAM.call(parentObj$$197.memoryRead, parentObj$$197, [parentObj$$197.programCounter + 1 & 65535]) << 8;
    var v7651 = parentObj$$197.memoryReader;
    var temp_pc = v4252 | JAM.call(v7651[parentObj$$197.programCounter], v7651, [parentObj$$197, parentObj$$197.programCounter], JAM.policy.p1);
    parentObj$$197.programCounter = parentObj$$197.programCounter + 2 & 65535;
    parentObj$$197.stackPointer = parentObj$$197.stackPointer - 1 & 65535;
    var v4256 = parentObj$$197.memoryWriter;
    JAM.call(v4256[parentObj$$197.stackPointer], v4256, [parentObj$$197, parentObj$$197.stackPointer, parentObj$$197.programCounter >> 8], JAM.policy.p1);
    parentObj$$197.stackPointer = parentObj$$197.stackPointer - 1 & 65535;
    var v4261 = parentObj$$197.memoryWriter;
    JAM.call(v4261[parentObj$$197.stackPointer], v4261, [parentObj$$197, parentObj$$197.stackPointer, parentObj$$197.programCounter & 255], JAM.policy.p1);
    parentObj$$197.programCounter = temp_pc;
    parentObj$$197.CPUTicks = parentObj$$197.CPUTicks + 12;
  } else {
    parentObj$$197.programCounter = parentObj$$197.programCounter + 2 & 65535;
  }
  return;
}
function v273(parentObj$$196) {
  var v4267 = JAM.call(parentObj$$196.memoryRead, parentObj$$196, [parentObj$$196.programCounter + 1 & 65535]) << 8;
  var v7662 = parentObj$$196.memoryReader;
  parentObj$$196.programCounter = v4267 | JAM.call(v7662[parentObj$$196.programCounter], v7662, [parentObj$$196, parentObj$$196.programCounter], JAM.policy.p1);
  return;
}
function v272(parentObj$$195) {
  if (!parentObj$$195.FZero) {
    var v4269 = JAM.call(parentObj$$195.memoryRead, parentObj$$195, [parentObj$$195.programCounter + 1 & 65535]) << 8;
    var v7667 = parentObj$$195.memoryReader;
    parentObj$$195.programCounter = v4269 | JAM.call(v7667[parentObj$$195.programCounter], v7667, [parentObj$$195, parentObj$$195.programCounter], JAM.policy.p1);
    parentObj$$195.CPUTicks = parentObj$$195.CPUTicks + 4;
  } else {
    parentObj$$195.programCounter = parentObj$$195.programCounter + 2 & 65535;
  }
  return;
}
function v271(parentObj$$194) {
  var v4273 = parentObj$$194.memoryReader;
  var v10758 = JAM.call(v4273[parentObj$$194.stackPointer], v4273, [parentObj$$194, parentObj$$194.stackPointer], JAM.policy.p1);
  parentObj$$194.registerC = v10758;
  var v10759 = JAM.call(parentObj$$194.memoryRead, parentObj$$194, [parentObj$$194.stackPointer + 1 & 65535]);
  parentObj$$194.registerB = v10759;
  parentObj$$194.stackPointer = parentObj$$194.stackPointer + 2 & 65535;
  return;
}
function v270(parentObj$$193) {
  if (!parentObj$$193.FZero) {
    var v4278 = JAM.call(parentObj$$193.memoryRead, parentObj$$193, [parentObj$$193.stackPointer + 1 & 65535]) << 8;
    var v7676 = parentObj$$193.memoryReader;
    parentObj$$193.programCounter = v4278 | JAM.call(v7676[parentObj$$193.stackPointer], v7676, [parentObj$$193, parentObj$$193.stackPointer], JAM.policy.p1);
    parentObj$$193.stackPointer = parentObj$$193.stackPointer + 2 & 65535;
    parentObj$$193.CPUTicks = parentObj$$193.CPUTicks + 12;
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
  var dirtySum$$38 = v4282 - JAM.call(v7681[parentObj$$191.registersHL], v7681, [parentObj$$191, parentObj$$191.registersHL], JAM.policy.p1);
  parentObj$$191.FHalfCarry = (dirtySum$$38 & 15) > (parentObj$$191.registerA & 15);
  parentObj$$191.FCarry = dirtySum$$38 < 0;
  parentObj$$191.FZero = dirtySum$$38 == 0;
  parentObj$$191.FSubtract = true;
  return;
}
function v267(parentObj$$190) {
  var dirtySum$$37 = parentObj$$190.registerA - (parentObj$$190.registersHL & 255);
  parentObj$$190.FHalfCarry = (dirtySum$$37 & 15) > (parentObj$$190.registerA & 15);
  parentObj$$190.FCarry = dirtySum$$37 < 0;
  parentObj$$190.FZero = dirtySum$$37 == 0;
  parentObj$$190.FSubtract = true;
  return;
}
function v266(parentObj$$189) {
  var dirtySum$$36 = parentObj$$189.registerA - (parentObj$$189.registersHL >> 8);
  parentObj$$189.FHalfCarry = (dirtySum$$36 & 15) > (parentObj$$189.registerA & 15);
  parentObj$$189.FCarry = dirtySum$$36 < 0;
  parentObj$$189.FZero = dirtySum$$36 == 0;
  parentObj$$189.FSubtract = true;
  return;
}
function v265(parentObj$$188) {
  var dirtySum$$35 = parentObj$$188.registerA - parentObj$$188.registerE;
  parentObj$$188.FHalfCarry = (dirtySum$$35 & 15) > (parentObj$$188.registerA & 15);
  parentObj$$188.FCarry = dirtySum$$35 < 0;
  parentObj$$188.FZero = dirtySum$$35 == 0;
  parentObj$$188.FSubtract = true;
  return;
}
function v264(parentObj$$187) {
  var dirtySum$$34 = parentObj$$187.registerA - parentObj$$187.registerD;
  parentObj$$187.FHalfCarry = (dirtySum$$34 & 15) > (parentObj$$187.registerA & 15);
  parentObj$$187.FCarry = dirtySum$$34 < 0;
  parentObj$$187.FZero = dirtySum$$34 == 0;
  parentObj$$187.FSubtract = true;
  return;
}
function v263(parentObj$$186) {
  var dirtySum$$33 = parentObj$$186.registerA - parentObj$$186.registerC;
  parentObj$$186.FHalfCarry = (dirtySum$$33 & 15) > (parentObj$$186.registerA & 15);
  parentObj$$186.FCarry = dirtySum$$33 < 0;
  parentObj$$186.FZero = dirtySum$$33 == 0;
  parentObj$$186.FSubtract = true;
  return;
}
function v262(parentObj$$185) {
  var dirtySum$$32 = parentObj$$185.registerA - parentObj$$185.registerB;
  parentObj$$185.FHalfCarry = (dirtySum$$32 & 15) > (parentObj$$185.registerA & 15);
  parentObj$$185.FCarry = dirtySum$$32 < 0;
  parentObj$$185.FZero = dirtySum$$32 == 0;
  parentObj$$185.FSubtract = true;
  return;
}
function v261(parentObj$$184) {
  parentObj$$184.FZero = parentObj$$184.registerA == 0;
  parentObj$$184.FSubtract = parentObj$$184.FCarry = parentObj$$184.FHalfCarry = false;
  return;
}
function v260(parentObj$$183) {
  var v7693 = parentObj$$183.registerA;
  var v9276 = parentObj$$183.memoryReader;
  parentObj$$183.registerA = v7693 | JAM.call(v9276[parentObj$$183.registersHL], v9276, [parentObj$$183, parentObj$$183.registersHL], JAM.policy.p1);
  parentObj$$183.FZero = parentObj$$183.registerA == 0;
  parentObj$$183.FSubtract = parentObj$$183.FCarry = parentObj$$183.FHalfCarry = false;
  return;
}
function v259(parentObj$$182) {
  parentObj$$182.registerA = parentObj$$182.registerA | parentObj$$182.registersHL & 255;
  parentObj$$182.FZero = parentObj$$182.registerA == 0;
  parentObj$$182.FSubtract = parentObj$$182.FCarry = parentObj$$182.FHalfCarry = false;
  return;
}
function v258(parentObj$$181) {
  parentObj$$181.registerA = parentObj$$181.registerA | parentObj$$181.registersHL >> 8;
  parentObj$$181.FZero = parentObj$$181.registerA == 0;
  parentObj$$181.FSubtract = parentObj$$181.FCarry = parentObj$$181.FHalfCarry = false;
  return;
}
function v257(parentObj$$180) {
  parentObj$$180.registerA = parentObj$$180.registerA | parentObj$$180.registerE;
  parentObj$$180.FZero = parentObj$$180.registerA == 0;
  parentObj$$180.FSubtract = parentObj$$180.FCarry = parentObj$$180.FHalfCarry = false;
  return;
}
function v256(parentObj$$179) {
  parentObj$$179.registerA = parentObj$$179.registerA | parentObj$$179.registerD;
  parentObj$$179.FZero = parentObj$$179.registerA == 0;
  parentObj$$179.FSubtract = parentObj$$179.FCarry = parentObj$$179.FHalfCarry = false;
  return;
}
function v255(parentObj$$178) {
  parentObj$$178.registerA = parentObj$$178.registerA | parentObj$$178.registerC;
  parentObj$$178.FZero = parentObj$$178.registerA == 0;
  parentObj$$178.FSubtract = parentObj$$178.FCarry = parentObj$$178.FHalfCarry = false;
  return;
}
function v254(parentObj$$177) {
  parentObj$$177.registerA = parentObj$$177.registerA | parentObj$$177.registerB;
  parentObj$$177.FZero = parentObj$$177.registerA == 0;
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
  parentObj$$175.registerA = v7707 ^ JAM.call(v9281[parentObj$$175.registersHL], v9281, [parentObj$$175, parentObj$$175.registersHL], JAM.policy.p1);
  parentObj$$175.FZero = parentObj$$175.registerA == 0;
  parentObj$$175.FSubtract = parentObj$$175.FHalfCarry = parentObj$$175.FCarry = false;
  return;
}
function v251(parentObj$$174) {
  parentObj$$174.registerA = parentObj$$174.registerA ^ parentObj$$174.registersHL & 255;
  parentObj$$174.FZero = parentObj$$174.registerA == 0;
  parentObj$$174.FSubtract = parentObj$$174.FHalfCarry = parentObj$$174.FCarry = false;
  return;
}
function v250(parentObj$$173) {
  parentObj$$173.registerA = parentObj$$173.registerA ^ parentObj$$173.registersHL >> 8;
  parentObj$$173.FZero = parentObj$$173.registerA == 0;
  parentObj$$173.FSubtract = parentObj$$173.FHalfCarry = parentObj$$173.FCarry = false;
  return;
}
function v249(parentObj$$172) {
  parentObj$$172.registerA = parentObj$$172.registerA ^ parentObj$$172.registerE;
  parentObj$$172.FZero = parentObj$$172.registerA == 0;
  parentObj$$172.FSubtract = parentObj$$172.FHalfCarry = parentObj$$172.FCarry = false;
  return;
}
function v248(parentObj$$171) {
  parentObj$$171.registerA = parentObj$$171.registerA ^ parentObj$$171.registerD;
  parentObj$$171.FZero = parentObj$$171.registerA == 0;
  parentObj$$171.FSubtract = parentObj$$171.FHalfCarry = parentObj$$171.FCarry = false;
  return;
}
function v247(parentObj$$170) {
  parentObj$$170.registerA = parentObj$$170.registerA ^ parentObj$$170.registerC;
  parentObj$$170.FZero = parentObj$$170.registerA == 0;
  parentObj$$170.FSubtract = parentObj$$170.FHalfCarry = parentObj$$170.FCarry = false;
  return;
}
function v246(parentObj$$169) {
  parentObj$$169.registerA = parentObj$$169.registerA ^ parentObj$$169.registerB;
  parentObj$$169.FZero = parentObj$$169.registerA == 0;
  parentObj$$169.FSubtract = parentObj$$169.FHalfCarry = parentObj$$169.FCarry = false;
  return;
}
function v245(parentObj$$168) {
  parentObj$$168.FZero = parentObj$$168.registerA == 0;
  parentObj$$168.FHalfCarry = true;
  parentObj$$168.FSubtract = parentObj$$168.FCarry = false;
  return;
}
function v244(parentObj$$167) {
  var v7721 = parentObj$$167.registerA;
  var v9286 = parentObj$$167.memoryReader;
  parentObj$$167.registerA = v7721 & JAM.call(v9286[parentObj$$167.registersHL], v9286, [parentObj$$167, parentObj$$167.registersHL], JAM.policy.p1);
  parentObj$$167.FZero = parentObj$$167.registerA == 0;
  parentObj$$167.FHalfCarry = true;
  parentObj$$167.FSubtract = parentObj$$167.FCarry = false;
  return;
}
function v243(parentObj$$166) {
  parentObj$$166.registerA = parentObj$$166.registerA & parentObj$$166.registersHL;
  parentObj$$166.FZero = parentObj$$166.registerA == 0;
  parentObj$$166.FHalfCarry = true;
  parentObj$$166.FSubtract = parentObj$$166.FCarry = false;
  return;
}
function v242(parentObj$$165) {
  parentObj$$165.registerA = parentObj$$165.registerA & parentObj$$165.registersHL >> 8;
  parentObj$$165.FZero = parentObj$$165.registerA == 0;
  parentObj$$165.FHalfCarry = true;
  parentObj$$165.FSubtract = parentObj$$165.FCarry = false;
  return;
}
function v241(parentObj$$164) {
  parentObj$$164.registerA = parentObj$$164.registerA & parentObj$$164.registerE;
  parentObj$$164.FZero = parentObj$$164.registerA == 0;
  parentObj$$164.FHalfCarry = true;
  parentObj$$164.FSubtract = parentObj$$164.FCarry = false;
  return;
}
function v240(parentObj$$163) {
  parentObj$$163.registerA = parentObj$$163.registerA & parentObj$$163.registerD;
  parentObj$$163.FZero = parentObj$$163.registerA == 0;
  parentObj$$163.FHalfCarry = true;
  parentObj$$163.FSubtract = parentObj$$163.FCarry = false;
  return;
}
function v239(parentObj$$162) {
  parentObj$$162.registerA = parentObj$$162.registerA & parentObj$$162.registerC;
  parentObj$$162.FZero = parentObj$$162.registerA == 0;
  parentObj$$162.FHalfCarry = true;
  parentObj$$162.FSubtract = parentObj$$162.FCarry = false;
  return;
}
function v238(parentObj$$161) {
  parentObj$$161.registerA = parentObj$$161.registerA & parentObj$$161.registerB;
  parentObj$$161.FZero = parentObj$$161.registerA == 0;
  parentObj$$161.FHalfCarry = true;
  parentObj$$161.FSubtract = parentObj$$161.FCarry = false;
  return;
}
function v237(parentObj$$160) {
  if (parentObj$$160.FCarry) {
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
  var temp_var$$8 = JAM.call(v4334[parentObj$$159.registersHL], v4334, [parentObj$$159, parentObj$$159.registersHL], JAM.policy.p1);
  var v4337 = parentObj$$159.registerA - temp_var$$8;
  var v7736;
  if (parentObj$$159.FCarry) {
    v7736 = 1;
  } else {
    v7736 = 0;
  }
  var dirtySum$$31 = v4337 - v7736;
  var v7737 = (parentObj$$159.registerA & 15) - (temp_var$$8 & 15);
  var v9293;
  if (parentObj$$159.FCarry) {
    v9293 = 1;
  } else {
    v9293 = 0;
  }
  parentObj$$159.FHalfCarry = v7737 - v9293 < 0;
  parentObj$$159.FCarry = dirtySum$$31 < 0;
  parentObj$$159.registerA = dirtySum$$31 & 255;
  parentObj$$159.FZero = parentObj$$159.registerA == 0;
  parentObj$$159.FSubtract = true;
  return;
}
function v235(parentObj$$158) {
  var v4341 = parentObj$$158.registerA - (parentObj$$158.registersHL & 255);
  var v7741;
  if (parentObj$$158.FCarry) {
    v7741 = 1;
  } else {
    v7741 = 0;
  }
  var dirtySum$$30 = v4341 - v7741;
  var v7742 = (parentObj$$158.registerA & 15) - (parentObj$$158.registersHL & 15);
  var v9298;
  if (parentObj$$158.FCarry) {
    v9298 = 1;
  } else {
    v9298 = 0;
  }
  parentObj$$158.FHalfCarry = v7742 - v9298 < 0;
  parentObj$$158.FCarry = dirtySum$$30 < 0;
  parentObj$$158.registerA = dirtySum$$30 & 255;
  parentObj$$158.FZero = parentObj$$158.registerA == 0;
  parentObj$$158.FSubtract = true;
  return;
}
function v234(parentObj$$157) {
  var temp_var$$7 = parentObj$$157.registersHL >> 8;
  var v4346 = parentObj$$157.registerA - temp_var$$7;
  var v7745;
  if (parentObj$$157.FCarry) {
    v7745 = 1;
  } else {
    v7745 = 0;
  }
  var dirtySum$$29 = v4346 - v7745;
  var v7746 = (parentObj$$157.registerA & 15) - (temp_var$$7 & 15);
  var v9302;
  if (parentObj$$157.FCarry) {
    v9302 = 1;
  } else {
    v9302 = 0;
  }
  parentObj$$157.FHalfCarry = v7746 - v9302 < 0;
  parentObj$$157.FCarry = dirtySum$$29 < 0;
  parentObj$$157.registerA = dirtySum$$29 & 255;
  parentObj$$157.FZero = parentObj$$157.registerA == 0;
  parentObj$$157.FSubtract = true;
  return;
}
function v233(parentObj$$156) {
  var v4350 = parentObj$$156.registerA - parentObj$$156.registerE;
  var v7750;
  if (parentObj$$156.FCarry) {
    v7750 = 1;
  } else {
    v7750 = 0;
  }
  var dirtySum$$28 = v4350 - v7750;
  var v7751 = (parentObj$$156.registerA & 15) - (parentObj$$156.registerE & 15);
  var v9306;
  if (parentObj$$156.FCarry) {
    v9306 = 1;
  } else {
    v9306 = 0;
  }
  parentObj$$156.FHalfCarry = v7751 - v9306 < 0;
  parentObj$$156.FCarry = dirtySum$$28 < 0;
  parentObj$$156.registerA = dirtySum$$28 & 255;
  parentObj$$156.FZero = parentObj$$156.registerA == 0;
  parentObj$$156.FSubtract = true;
  return;
}
function v232(parentObj$$155) {
  var v4354 = parentObj$$155.registerA - parentObj$$155.registerD;
  var v7755;
  if (parentObj$$155.FCarry) {
    v7755 = 1;
  } else {
    v7755 = 0;
  }
  var dirtySum$$27 = v4354 - v7755;
  var v7756 = (parentObj$$155.registerA & 15) - (parentObj$$155.registerD & 15);
  var v9310;
  if (parentObj$$155.FCarry) {
    v9310 = 1;
  } else {
    v9310 = 0;
  }
  parentObj$$155.FHalfCarry = v7756 - v9310 < 0;
  parentObj$$155.FCarry = dirtySum$$27 < 0;
  parentObj$$155.registerA = dirtySum$$27 & 255;
  parentObj$$155.FZero = parentObj$$155.registerA == 0;
  parentObj$$155.FSubtract = true;
  return;
}
function v231(parentObj$$154) {
  var v4358 = parentObj$$154.registerA - parentObj$$154.registerC;
  var v7760;
  if (parentObj$$154.FCarry) {
    v7760 = 1;
  } else {
    v7760 = 0;
  }
  var dirtySum$$26 = v4358 - v7760;
  var v7761 = (parentObj$$154.registerA & 15) - (parentObj$$154.registerC & 15);
  var v9314;
  if (parentObj$$154.FCarry) {
    v9314 = 1;
  } else {
    v9314 = 0;
  }
  parentObj$$154.FHalfCarry = v7761 - v9314 < 0;
  parentObj$$154.FCarry = dirtySum$$26 < 0;
  parentObj$$154.registerA = dirtySum$$26 & 255;
  parentObj$$154.FZero = parentObj$$154.registerA == 0;
  parentObj$$154.FSubtract = true;
  return;
}
function v230(parentObj$$153) {
  var v4362 = parentObj$$153.registerA - parentObj$$153.registerB;
  var v7765;
  if (parentObj$$153.FCarry) {
    v7765 = 1;
  } else {
    v7765 = 0;
  }
  var dirtySum$$25 = v4362 - v7765;
  var v7766 = (parentObj$$153.registerA & 15) - (parentObj$$153.registerB & 15);
  var v9318;
  if (parentObj$$153.FCarry) {
    v9318 = 1;
  } else {
    v9318 = 0;
  }
  parentObj$$153.FHalfCarry = v7766 - v9318 < 0;
  parentObj$$153.FCarry = dirtySum$$25 < 0;
  parentObj$$153.registerA = dirtySum$$25 & 255;
  parentObj$$153.FZero = parentObj$$153.registerA == 0;
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
  var dirtySum$$24 = v4366 - JAM.call(v7768[parentObj$$151.registersHL], v7768, [parentObj$$151, parentObj$$151.registersHL], JAM.policy.p1);
  parentObj$$151.FHalfCarry = (parentObj$$151.registerA & 15) < (dirtySum$$24 & 15);
  parentObj$$151.FCarry = dirtySum$$24 < 0;
  parentObj$$151.registerA = dirtySum$$24 & 255;
  parentObj$$151.FZero = dirtySum$$24 == 0;
  parentObj$$151.FSubtract = true;
  return;
}
function v227(parentObj$$150) {
  var dirtySum$$23 = parentObj$$150.registerA - (parentObj$$150.registersHL & 255);
  parentObj$$150.FHalfCarry = (parentObj$$150.registerA & 15) < (dirtySum$$23 & 15);
  parentObj$$150.FCarry = dirtySum$$23 < 0;
  parentObj$$150.registerA = dirtySum$$23 & 255;
  parentObj$$150.FZero = dirtySum$$23 == 0;
  parentObj$$150.FSubtract = true;
  return;
}
function v226(parentObj$$149) {
  var dirtySum$$22 = parentObj$$149.registerA - (parentObj$$149.registersHL >> 8);
  parentObj$$149.FHalfCarry = (parentObj$$149.registerA & 15) < (dirtySum$$22 & 15);
  parentObj$$149.FCarry = dirtySum$$22 < 0;
  parentObj$$149.registerA = dirtySum$$22 & 255;
  parentObj$$149.FZero = dirtySum$$22 == 0;
  parentObj$$149.FSubtract = true;
  return;
}
function v225(parentObj$$148) {
  var dirtySum$$21 = parentObj$$148.registerA - parentObj$$148.registerE;
  parentObj$$148.FHalfCarry = (parentObj$$148.registerA & 15) < (dirtySum$$21 & 15);
  parentObj$$148.FCarry = dirtySum$$21 < 0;
  parentObj$$148.registerA = dirtySum$$21 & 255;
  parentObj$$148.FZero = dirtySum$$21 == 0;
  parentObj$$148.FSubtract = true;
  return;
}
function v224(parentObj$$147) {
  var dirtySum$$20 = parentObj$$147.registerA - parentObj$$147.registerD;
  parentObj$$147.FHalfCarry = (parentObj$$147.registerA & 15) < (dirtySum$$20 & 15);
  parentObj$$147.FCarry = dirtySum$$20 < 0;
  parentObj$$147.registerA = dirtySum$$20 & 255;
  parentObj$$147.FZero = dirtySum$$20 == 0;
  parentObj$$147.FSubtract = true;
  return;
}
function v223(parentObj$$146) {
  var dirtySum$$19 = parentObj$$146.registerA - parentObj$$146.registerC;
  parentObj$$146.FHalfCarry = (parentObj$$146.registerA & 15) < (dirtySum$$19 & 15);
  parentObj$$146.FCarry = dirtySum$$19 < 0;
  parentObj$$146.registerA = dirtySum$$19 & 255;
  parentObj$$146.FZero = dirtySum$$19 == 0;
  parentObj$$146.FSubtract = true;
  return;
}
function v222(parentObj$$145) {
  var dirtySum$$18 = parentObj$$145.registerA - parentObj$$145.registerB;
  parentObj$$145.FHalfCarry = (parentObj$$145.registerA & 15) < (dirtySum$$18 & 15);
  parentObj$$145.FCarry = dirtySum$$18 < 0;
  parentObj$$145.registerA = dirtySum$$18 & 255;
  parentObj$$145.FZero = dirtySum$$18 == 0;
  parentObj$$145.FSubtract = true;
  return;
}
function v221(parentObj$$144) {
  var v4394 = parentObj$$144.registerA << 1;
  var v7781;
  if (parentObj$$144.FCarry) {
    v7781 = 1;
  } else {
    v7781 = 0;
  }
  var dirtySum$$17 = v4394 | v7781;
  var v7782 = parentObj$$144.registerA << 1 & 30;
  var v9321;
  if (parentObj$$144.FCarry) {
    v9321 = 1;
  } else {
    v9321 = 0;
  }
  parentObj$$144.FHalfCarry = (v7782 | v9321) > 15;
  parentObj$$144.FCarry = dirtySum$$17 > 255;
  parentObj$$144.registerA = dirtySum$$17 & 255;
  parentObj$$144.FZero = parentObj$$144.registerA == 0;
  parentObj$$144.FSubtract = false;
  return;
}
function v220(parentObj$$143) {
  var v4398 = parentObj$$143.memoryReader;
  var tempValue$$2 = JAM.call(v4398[parentObj$$143.registersHL], v4398, [parentObj$$143, parentObj$$143.registersHL], JAM.policy.p1);
  var v4401 = parentObj$$143.registerA + tempValue$$2;
  var v7785;
  if (parentObj$$143.FCarry) {
    v7785 = 1;
  } else {
    v7785 = 0;
  }
  var dirtySum$$16 = v4401 + v7785;
  var v7786 = (parentObj$$143.registerA & 15) + (tempValue$$2 & 15);
  var v9325;
  if (parentObj$$143.FCarry) {
    v9325 = 1;
  } else {
    v9325 = 0;
  }
  parentObj$$143.FHalfCarry = v7786 + v9325 > 15;
  parentObj$$143.FCarry = dirtySum$$16 > 255;
  parentObj$$143.registerA = dirtySum$$16 & 255;
  parentObj$$143.FZero = parentObj$$143.registerA == 0;
  parentObj$$143.FSubtract = false;
  return;
}
function v219(parentObj$$142) {
  var tempValue$$1 = parentObj$$142.registersHL & 255;
  var v4406 = parentObj$$142.registerA + tempValue$$1;
  var v7789;
  if (parentObj$$142.FCarry) {
    v7789 = 1;
  } else {
    v7789 = 0;
  }
  var dirtySum$$15 = v4406 + v7789;
  var v7790 = (parentObj$$142.registerA & 15) + (tempValue$$1 & 15);
  var v9329;
  if (parentObj$$142.FCarry) {
    v9329 = 1;
  } else {
    v9329 = 0;
  }
  parentObj$$142.FHalfCarry = v7790 + v9329 > 15;
  parentObj$$142.FCarry = dirtySum$$15 > 255;
  parentObj$$142.registerA = dirtySum$$15 & 255;
  parentObj$$142.FZero = parentObj$$142.registerA == 0;
  parentObj$$142.FSubtract = false;
  return;
}
function v218(parentObj$$141) {
  var tempValue = parentObj$$141.registersHL >> 8;
  var v4411 = parentObj$$141.registerA + tempValue;
  var v7793;
  if (parentObj$$141.FCarry) {
    v7793 = 1;
  } else {
    v7793 = 0;
  }
  var dirtySum$$14 = v4411 + v7793;
  var v7794 = (parentObj$$141.registerA & 15) + (tempValue & 15);
  var v9333;
  if (parentObj$$141.FCarry) {
    v9333 = 1;
  } else {
    v9333 = 0;
  }
  parentObj$$141.FHalfCarry = v7794 + v9333 > 15;
  parentObj$$141.FCarry = dirtySum$$14 > 255;
  parentObj$$141.registerA = dirtySum$$14 & 255;
  parentObj$$141.FZero = parentObj$$141.registerA == 0;
  parentObj$$141.FSubtract = false;
  return;
}
function v217(parentObj$$140) {
  var v4415 = parentObj$$140.registerA + parentObj$$140.registerE;
  var v7798;
  if (parentObj$$140.FCarry) {
    v7798 = 1;
  } else {
    v7798 = 0;
  }
  var dirtySum$$13 = v4415 + v7798;
  var v7799 = (parentObj$$140.registerA & 15) + (parentObj$$140.registerE & 15);
  var v9337;
  if (parentObj$$140.FCarry) {
    v9337 = 1;
  } else {
    v9337 = 0;
  }
  parentObj$$140.FHalfCarry = v7799 + v9337 > 15;
  parentObj$$140.FCarry = dirtySum$$13 > 255;
  parentObj$$140.registerA = dirtySum$$13 & 255;
  parentObj$$140.FZero = parentObj$$140.registerA == 0;
  parentObj$$140.FSubtract = false;
  return;
}
function v216(parentObj$$139) {
  var v4419 = parentObj$$139.registerA + parentObj$$139.registerD;
  var v7803;
  if (parentObj$$139.FCarry) {
    v7803 = 1;
  } else {
    v7803 = 0;
  }
  var dirtySum$$12 = v4419 + v7803;
  var v7804 = (parentObj$$139.registerA & 15) + (parentObj$$139.registerD & 15);
  var v9341;
  if (parentObj$$139.FCarry) {
    v9341 = 1;
  } else {
    v9341 = 0;
  }
  parentObj$$139.FHalfCarry = v7804 + v9341 > 15;
  parentObj$$139.FCarry = dirtySum$$12 > 255;
  parentObj$$139.registerA = dirtySum$$12 & 255;
  parentObj$$139.FZero = parentObj$$139.registerA == 0;
  parentObj$$139.FSubtract = false;
  return;
}
function v215(parentObj$$138) {
  var v4423 = parentObj$$138.registerA + parentObj$$138.registerC;
  var v7808;
  if (parentObj$$138.FCarry) {
    v7808 = 1;
  } else {
    v7808 = 0;
  }
  var dirtySum$$11 = v4423 + v7808;
  var v7809 = (parentObj$$138.registerA & 15) + (parentObj$$138.registerC & 15);
  var v9345;
  if (parentObj$$138.FCarry) {
    v9345 = 1;
  } else {
    v9345 = 0;
  }
  parentObj$$138.FHalfCarry = v7809 + v9345 > 15;
  parentObj$$138.FCarry = dirtySum$$11 > 255;
  parentObj$$138.registerA = dirtySum$$11 & 255;
  parentObj$$138.FZero = parentObj$$138.registerA == 0;
  parentObj$$138.FSubtract = false;
  return;
}
function v214(parentObj$$137) {
  var v4427 = parentObj$$137.registerA + parentObj$$137.registerB;
  var v7813;
  if (parentObj$$137.FCarry) {
    v7813 = 1;
  } else {
    v7813 = 0;
  }
  var dirtySum$$10 = v4427 + v7813;
  var v7814 = (parentObj$$137.registerA & 15) + (parentObj$$137.registerB & 15);
  var v9349;
  if (parentObj$$137.FCarry) {
    v9349 = 1;
  } else {
    v9349 = 0;
  }
  parentObj$$137.FHalfCarry = v7814 + v9349 > 15;
  parentObj$$137.FCarry = dirtySum$$10 > 255;
  parentObj$$137.registerA = dirtySum$$10 & 255;
  parentObj$$137.FZero = parentObj$$137.registerA == 0;
  parentObj$$137.FSubtract = false;
  return;
}
function v213(parentObj$$136) {
  parentObj$$136.FHalfCarry = (parentObj$$136.registerA & 8) == 8;
  parentObj$$136.FCarry = parentObj$$136.registerA > 127;
  parentObj$$136.registerA = parentObj$$136.registerA << 1 & 255;
  parentObj$$136.FZero = parentObj$$136.registerA == 0;
  parentObj$$136.FSubtract = false;
  return;
}
function v212(parentObj$$135) {
  var v4435 = parentObj$$135.registerA;
  var v7818 = parentObj$$135.memoryReader;
  var dirtySum$$9 = v4435 + JAM.call(v7818[parentObj$$135.registersHL], v7818, [parentObj$$135, parentObj$$135.registersHL], JAM.policy.p1);
  parentObj$$135.FHalfCarry = (dirtySum$$9 & 15) < (parentObj$$135.registerA & 15);
  parentObj$$135.FCarry = dirtySum$$9 > 255;
  parentObj$$135.registerA = dirtySum$$9 & 255;
  parentObj$$135.FZero = parentObj$$135.registerA == 0;
  parentObj$$135.FSubtract = false;
  return;
}
function v211(parentObj$$134) {
  var dirtySum$$8 = parentObj$$134.registerA + (parentObj$$134.registersHL & 255);
  parentObj$$134.FHalfCarry = (dirtySum$$8 & 15) < (parentObj$$134.registerA & 15);
  parentObj$$134.FCarry = dirtySum$$8 > 255;
  parentObj$$134.registerA = dirtySum$$8 & 255;
  parentObj$$134.FZero = parentObj$$134.registerA == 0;
  parentObj$$134.FSubtract = false;
  return;
}
function v210(parentObj$$133) {
  var dirtySum$$7 = parentObj$$133.registerA + (parentObj$$133.registersHL >> 8);
  parentObj$$133.FHalfCarry = (dirtySum$$7 & 15) < (parentObj$$133.registerA & 15);
  parentObj$$133.FCarry = dirtySum$$7 > 255;
  parentObj$$133.registerA = dirtySum$$7 & 255;
  parentObj$$133.FZero = parentObj$$133.registerA == 0;
  parentObj$$133.FSubtract = false;
  return;
}
function v209(parentObj$$132) {
  var dirtySum$$6 = parentObj$$132.registerA + parentObj$$132.registerE;
  parentObj$$132.FHalfCarry = (dirtySum$$6 & 15) < (parentObj$$132.registerA & 15);
  parentObj$$132.FCarry = dirtySum$$6 > 255;
  parentObj$$132.registerA = dirtySum$$6 & 255;
  parentObj$$132.FZero = parentObj$$132.registerA == 0;
  parentObj$$132.FSubtract = false;
  return;
}
function v208(parentObj$$131) {
  var dirtySum$$5 = parentObj$$131.registerA + parentObj$$131.registerD;
  parentObj$$131.FHalfCarry = (dirtySum$$5 & 15) < (parentObj$$131.registerA & 15);
  parentObj$$131.FCarry = dirtySum$$5 > 255;
  parentObj$$131.registerA = dirtySum$$5 & 255;
  parentObj$$131.FZero = parentObj$$131.registerA == 0;
  parentObj$$131.FSubtract = false;
  return;
}
function v207(parentObj$$130) {
  var dirtySum$$4 = parentObj$$130.registerA + parentObj$$130.registerC;
  parentObj$$130.FHalfCarry = (dirtySum$$4 & 15) < (parentObj$$130.registerA & 15);
  parentObj$$130.FCarry = dirtySum$$4 > 255;
  parentObj$$130.registerA = dirtySum$$4 & 255;
  parentObj$$130.FZero = parentObj$$130.registerA == 0;
  parentObj$$130.FSubtract = false;
  return;
}
function v206(parentObj$$129) {
  var dirtySum$$3 = parentObj$$129.registerA + parentObj$$129.registerB;
  parentObj$$129.FHalfCarry = (dirtySum$$3 & 15) < (parentObj$$129.registerA & 15);
  parentObj$$129.FCarry = dirtySum$$3 > 255;
  parentObj$$129.registerA = dirtySum$$3 & 255;
  parentObj$$129.FZero = parentObj$$129.registerA == 0;
  parentObj$$129.FSubtract = false;
  return;
}
function v205(parentObj$$128) {
  return;
}
function v204(parentObj$$127) {
  var v4470 = parentObj$$127.memoryReader;
  var v10760 = JAM.call(v4470[parentObj$$127.registersHL], v4470, [parentObj$$127, parentObj$$127.registersHL], JAM.policy.p1);
  parentObj$$127.registerA = v10760;
  return;
}
function v203(parentObj$$126) {
  parentObj$$126.registerA = parentObj$$126.registersHL & 255;
  return;
}
function v202(parentObj$$125) {
  parentObj$$125.registerA = parentObj$$125.registersHL >> 8;
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
  JAM.call(v4475[parentObj$$120.registersHL], v4475, [parentObj$$120, parentObj$$120.registersHL, parentObj$$120.registerA], JAM.policy.p1);
  return;
}
function v196(parentObj$$119) {
  if ((parentObj$$119.interruptsEnabled & parentObj$$119.interruptsRequested & 31) > 0) {
    var v7831 = !parentObj$$119.cGBC;
    if (v7831) {
      v7831 = !parentObj$$119.usedBootROM;
    }
    if (v7831) {
      parentObj$$119.skipPCIncrement = true;
    } else {
      parentObj$$119.CPUTicks = parentObj$$119.CPUTicks + 4;
    }
  } else {
    parentObj$$119.calculateHALTPeriod();
  }
  return;
}
function v195(parentObj$$118) {
  var v4481 = parentObj$$118.memoryWriter;
  JAM.call(v4481[parentObj$$118.registersHL], v4481, [parentObj$$118, parentObj$$118.registersHL, parentObj$$118.registersHL & 255], JAM.policy.p1);
  return;
}
function v194(parentObj$$117) {
  var v4485 = parentObj$$117.memoryWriter;
  JAM.call(v4485[parentObj$$117.registersHL], v4485, [parentObj$$117, parentObj$$117.registersHL, parentObj$$117.registersHL >> 8], JAM.policy.p1);
  return;
}
function v193(parentObj$$116) {
  var v4489 = parentObj$$116.memoryWriter;
  JAM.call(v4489[parentObj$$116.registersHL], v4489, [parentObj$$116, parentObj$$116.registersHL, parentObj$$116.registerE], JAM.policy.p1);
  return;
}
function v192(parentObj$$115) {
  var v4493 = parentObj$$115.memoryWriter;
  JAM.call(v4493[parentObj$$115.registersHL], v4493, [parentObj$$115, parentObj$$115.registersHL, parentObj$$115.registerD], JAM.policy.p1);
  return;
}
function v191(parentObj$$114) {
  var v4497 = parentObj$$114.memoryWriter;
  JAM.call(v4497[parentObj$$114.registersHL], v4497, [parentObj$$114, parentObj$$114.registersHL, parentObj$$114.registerC], JAM.policy.p1);
  return;
}
function v190(parentObj$$113) {
  var v4501 = parentObj$$113.memoryWriter;
  JAM.call(v4501[parentObj$$113.registersHL], v4501, [parentObj$$113, parentObj$$113.registersHL, parentObj$$113.registerB], JAM.policy.p1);
  return;
}
function v189(parentObj$$112) {
  parentObj$$112.registersHL = parentObj$$112.registersHL & 65280 | parentObj$$112.registerA;
  return;
}
function v188(parentObj$$111) {
  var v4507 = parentObj$$111.registersHL & 65280;
  var v7837 = parentObj$$111.memoryReader;
  parentObj$$111.registersHL = v4507 | JAM.call(v7837[parentObj$$111.registersHL], v7837, [parentObj$$111, parentObj$$111.registersHL], JAM.policy.p1);
  return;
}
function v187(parentObj$$110) {
  return;
}
function v186(parentObj$$109) {
  parentObj$$109.registersHL = parentObj$$109.registersHL & 65280 | parentObj$$109.registersHL >> 8;
  return;
}
function v185(parentObj$$108) {
  parentObj$$108.registersHL = parentObj$$108.registersHL & 65280 | parentObj$$108.registerE;
  return;
}
function v184(parentObj$$107) {
  parentObj$$107.registersHL = parentObj$$107.registersHL & 65280 | parentObj$$107.registerD;
  return;
}
function v183(parentObj$$106) {
  parentObj$$106.registersHL = parentObj$$106.registersHL & 65280 | parentObj$$106.registerC;
  return;
}
function v182(parentObj$$105) {
  parentObj$$105.registersHL = parentObj$$105.registersHL & 65280 | parentObj$$105.registerB;
  return;
}
function v181(parentObj$$104) {
  parentObj$$104.registersHL = parentObj$$104.registerA << 8 | parentObj$$104.registersHL & 255;
  return;
}
function v180(parentObj$$103) {
  var v9353 = parentObj$$103.memoryReader;
  parentObj$$103.registersHL = JAM.call(v9353[parentObj$$103.registersHL], v9353, [parentObj$$103, parentObj$$103.registersHL], JAM.policy.p1) << 8 | parentObj$$103.registersHL & 255;
  return;
}
function v179(parentObj$$102) {
  parentObj$$102.registersHL = (parentObj$$102.registersHL & 255) * 257;
  return;
}
function v178(parentObj$$101) {
  return;
}
function v177(parentObj$$100) {
  parentObj$$100.registersHL = parentObj$$100.registerE << 8 | parentObj$$100.registersHL & 255;
  return;
}
function v176(parentObj$$99) {
  parentObj$$99.registersHL = parentObj$$99.registerD << 8 | parentObj$$99.registersHL & 255;
  return;
}
function v175(parentObj$$98) {
  parentObj$$98.registersHL = parentObj$$98.registerC << 8 | parentObj$$98.registersHL & 255;
  return;
}
function v174(parentObj$$97) {
  parentObj$$97.registersHL = parentObj$$97.registerB << 8 | parentObj$$97.registersHL & 255;
  return;
}
function v173(parentObj$$96) {
  parentObj$$96.registerE = parentObj$$96.registerA;
  return;
}
function v172(parentObj$$95) {
  var v4532 = parentObj$$95.memoryReader;
  var v10761 = JAM.call(v4532[parentObj$$95.registersHL], v4532, [parentObj$$95, parentObj$$95.registersHL], JAM.policy.p1);
  parentObj$$95.registerE = v10761;
  return;
}
function v171(parentObj$$94) {
  parentObj$$94.registerE = parentObj$$94.registersHL & 255;
  return;
}
function v170(parentObj$$93) {
  parentObj$$93.registerE = parentObj$$93.registersHL >> 8;
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
  var v10762 = JAM.call(v4537[parentObj$$87.registersHL], v4537, [parentObj$$87, parentObj$$87.registersHL], JAM.policy.p1);
  parentObj$$87.registerD = v10762;
  return;
}
function v163(parentObj$$86) {
  parentObj$$86.registerD = parentObj$$86.registersHL & 255;
  return;
}
function v162(parentObj$$85) {
  parentObj$$85.registerD = parentObj$$85.registersHL >> 8;
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
  var v10763 = JAM.call(v4542[parentObj$$79.registersHL], v4542, [parentObj$$79, parentObj$$79.registersHL], JAM.policy.p1);
  parentObj$$79.registerC = v10763;
  return;
}
function v155(parentObj$$78) {
  parentObj$$78.registerC = parentObj$$78.registersHL & 255;
  return;
}
function v154(parentObj$$77) {
  parentObj$$77.registerC = parentObj$$77.registersHL >> 8;
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
  var v10764 = JAM.call(v4547[parentObj$$71.registersHL], v4547, [parentObj$$71, parentObj$$71.registersHL], JAM.policy.p1);
  parentObj$$71.registerB = v10764;
  return;
}
function v147(parentObj$$70) {
  parentObj$$70.registerB = parentObj$$70.registersHL & 255;
  return;
}
function v146(parentObj$$69) {
  parentObj$$69.registerB = parentObj$$69.registersHL >> 8;
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
  parentObj$$64.FCarry = !parentObj$$64.FCarry;
  parentObj$$64.FSubtract = parentObj$$64.FHalfCarry = false;
  return;
}
function v140(parentObj$$63) {
  var v4553 = parentObj$$63.memoryReader;
  var v10765 = JAM.call(v4553[parentObj$$63.programCounter], v4553, [parentObj$$63, parentObj$$63.programCounter], JAM.policy.p1);
  parentObj$$63.registerA = v10765;
  parentObj$$63.programCounter = parentObj$$63.programCounter + 1 & 65535;
  return;
}
function v139(parentObj$$62) {
  parentObj$$62.registerA = parentObj$$62.registerA - 1 & 255;
  parentObj$$62.FZero = parentObj$$62.registerA == 0;
  parentObj$$62.FHalfCarry = (parentObj$$62.registerA & 15) == 15;
  parentObj$$62.FSubtract = true;
  return;
}
function v138(parentObj$$61) {
  parentObj$$61.registerA = parentObj$$61.registerA + 1 & 255;
  parentObj$$61.FZero = parentObj$$61.registerA == 0;
  parentObj$$61.FHalfCarry = (parentObj$$61.registerA & 15) == 0;
  parentObj$$61.FSubtract = false;
  return;
}
function v137(parentObj$$60) {
  parentObj$$60.stackPointer = parentObj$$60.stackPointer - 1 & 65535;
  return;
}
function v136(parentObj$$59) {
  var v4564 = parentObj$$59.memoryReader;
  var v10766 = JAM.call(v4564[parentObj$$59.registersHL], v4564, [parentObj$$59, parentObj$$59.registersHL], JAM.policy.p1);
  parentObj$$59.registerA = v10766;
  parentObj$$59.registersHL = parentObj$$59.registersHL - 1 & 65535;
  return;
}
function v135(parentObj$$58) {
  var dirtySum$$2 = parentObj$$58.registersHL + parentObj$$58.stackPointer;
  parentObj$$58.FHalfCarry = (parentObj$$58.registersHL & 4095) > (dirtySum$$2 & 4095);
  parentObj$$58.FCarry = dirtySum$$2 > 65535;
  parentObj$$58.registersHL = dirtySum$$2 & 65535;
  parentObj$$58.FSubtract = false;
  return;
}
function v134(parentObj$$57) {
  if (parentObj$$57.FCarry) {
    var v9356 = parentObj$$57.programCounter;
    var v10531 = parentObj$$57.memoryReader;
    parentObj$$57.programCounter = v9356 + (JAM.call(v10531[parentObj$$57.programCounter], v10531, [parentObj$$57, parentObj$$57.programCounter], JAM.policy.p1) << 24 >> 24) + 1 & 65535;
    parentObj$$57.CPUTicks = parentObj$$57.CPUTicks + 4;
  } else {
    parentObj$$57.programCounter = parentObj$$57.programCounter + 1 & 65535;
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
  JAM.call(v4575[v4576], v4575, [parentObj$$55, v4577, JAM.call(v7870[parentObj$$55.programCounter], v7870, [parentObj$$55, parentObj$$55.programCounter], JAM.policy.p1)], JAM.policy.p1);
  parentObj$$55.programCounter = parentObj$$55.programCounter + 1 & 65535;
  return;
}
function v131(parentObj$$54) {
  var v9358 = parentObj$$54.memoryReader;
  var temp_var$$6 = JAM.call(v9358[parentObj$$54.registersHL], v9358, [parentObj$$54, parentObj$$54.registersHL], JAM.policy.p1) - 1 & 255;
  parentObj$$54.FZero = temp_var$$6 == 0;
  parentObj$$54.FHalfCarry = (temp_var$$6 & 15) == 15;
  parentObj$$54.FSubtract = true;
  var v4582 = parentObj$$54.memoryWriter;
  JAM.call(v4582[parentObj$$54.registersHL], v4582, [parentObj$$54, parentObj$$54.registersHL, temp_var$$6], JAM.policy.p1);
  return;
}
function v130(parentObj$$53) {
  var v9361 = parentObj$$53.memoryReader;
  var temp_var$$5 = JAM.call(v9361[parentObj$$53.registersHL], v9361, [parentObj$$53, parentObj$$53.registersHL], JAM.policy.p1) + 1 & 255;
  parentObj$$53.FZero = temp_var$$5 == 0;
  parentObj$$53.FHalfCarry = (temp_var$$5 & 15) == 0;
  parentObj$$53.FSubtract = false;
  var v4587 = parentObj$$53.memoryWriter;
  JAM.call(v4587[parentObj$$53.registersHL], v4587, [parentObj$$53, parentObj$$53.registersHL, temp_var$$5], JAM.policy.p1);
  return;
}
function v129(parentObj$$52) {
  parentObj$$52.stackPointer = parentObj$$52.stackPointer + 1 & 65535;
  return;
}
function v128(parentObj$$51) {
  var v4591 = parentObj$$51.memoryWriter;
  JAM.call(v4591[parentObj$$51.registersHL], v4591, [parentObj$$51, parentObj$$51.registersHL, parentObj$$51.registerA], JAM.policy.p1);
  parentObj$$51.registersHL = parentObj$$51.registersHL - 1 & 65535;
  return;
}
function v127(parentObj$$50) {
  var v4596 = JAM.call(parentObj$$50.memoryRead, parentObj$$50, [parentObj$$50.programCounter + 1 & 65535]) << 8;
  var v7879 = parentObj$$50.memoryReader;
  parentObj$$50.stackPointer = v4596 | JAM.call(v7879[parentObj$$50.programCounter], v7879, [parentObj$$50, parentObj$$50.programCounter], JAM.policy.p1);
  parentObj$$50.programCounter = parentObj$$50.programCounter + 2 & 65535;
  return;
}
function v126(parentObj$$49) {
  if (!parentObj$$49.FCarry) {
    var v9365 = parentObj$$49.programCounter;
    var v10534 = parentObj$$49.memoryReader;
    parentObj$$49.programCounter = v9365 + (JAM.call(v10534[parentObj$$49.programCounter], v10534, [parentObj$$49, parentObj$$49.programCounter], JAM.policy.p1) << 24 >> 24) + 1 & 65535;
    parentObj$$49.CPUTicks = parentObj$$49.CPUTicks + 4;
  } else {
    parentObj$$49.programCounter = parentObj$$49.programCounter + 1 & 65535;
  }
  return;
}
function v125(parentObj$$48) {
  parentObj$$48.registerA = parentObj$$48.registerA ^ 255;
  parentObj$$48.FSubtract = parentObj$$48.FHalfCarry = true;
  return;
}
function v124(parentObj$$47) {
  var v4602 = parentObj$$47.registersHL & 65280;
  var v7889 = parentObj$$47.memoryReader;
  parentObj$$47.registersHL = v4602 | JAM.call(v7889[parentObj$$47.programCounter], v7889, [parentObj$$47, parentObj$$47.programCounter], JAM.policy.p1);
  parentObj$$47.programCounter = parentObj$$47.programCounter + 1 & 65535;
  return;
}
function v123(parentObj$$46) {
  var L$$1 = parentObj$$46.registersHL - 1 & 255;
  parentObj$$46.FZero = L$$1 == 0;
  parentObj$$46.FHalfCarry = (L$$1 & 15) == 15;
  parentObj$$46.FSubtract = true;
  parentObj$$46.registersHL = parentObj$$46.registersHL & 65280 | L$$1;
  return;
}
function v122(parentObj$$45) {
  var L = parentObj$$45.registersHL + 1 & 255;
  parentObj$$45.FZero = L == 0;
  parentObj$$45.FHalfCarry = (L & 15) == 0;
  parentObj$$45.FSubtract = false;
  parentObj$$45.registersHL = parentObj$$45.registersHL & 65280 | L;
  return;
}
function v121(parentObj$$44) {
  parentObj$$44.registersHL = parentObj$$44.registersHL - 1 & 65535;
  return;
}
function v120(parentObj$$43) {
  var v4612 = parentObj$$43.memoryReader;
  var v10767 = JAM.call(v4612[parentObj$$43.registersHL], v4612, [parentObj$$43, parentObj$$43.registersHL], JAM.policy.p1);
  parentObj$$43.registerA = v10767;
  parentObj$$43.registersHL = parentObj$$43.registersHL + 1 & 65535;
  return;
}
function v119(parentObj$$42) {
  parentObj$$42.FHalfCarry = (parentObj$$42.registersHL & 4095) > 2047;
  parentObj$$42.FCarry = parentObj$$42.registersHL > 32767;
  parentObj$$42.registersHL = parentObj$$42.registersHL << 1 & 65535;
  parentObj$$42.FSubtract = false;
  return;
}
function v118(parentObj$$41) {
  if (parentObj$$41.FZero) {
    var v9367 = parentObj$$41.programCounter;
    var v10537 = parentObj$$41.memoryReader;
    parentObj$$41.programCounter = v9367 + (JAM.call(v10537[parentObj$$41.programCounter], v10537, [parentObj$$41, parentObj$$41.programCounter], JAM.policy.p1) << 24 >> 24) + 1 & 65535;
    parentObj$$41.CPUTicks = parentObj$$41.CPUTicks + 4;
  } else {
    parentObj$$41.programCounter = parentObj$$41.programCounter + 1 & 65535;
  }
  return;
}
function v117(parentObj$$40) {
  if (!parentObj$$40.FSubtract) {
    var v7905 = parentObj$$40.FCarry;
    if (!v7905) {
      v7905 = parentObj$$40.registerA > 153;
    }
    if (v7905) {
      parentObj$$40.registerA = parentObj$$40.registerA + 96 & 255;
      parentObj$$40.FCarry = true;
    }
    var v7907 = parentObj$$40.FHalfCarry;
    if (!v7907) {
      v7907 = (parentObj$$40.registerA & 15) > 9;
    }
    if (v7907) {
      parentObj$$40.registerA = parentObj$$40.registerA + 6 & 255;
      parentObj$$40.FHalfCarry = false;
    }
  } else {
    var v7909 = parentObj$$40.FCarry;
    if (v7909) {
      v7909 = parentObj$$40.FHalfCarry;
    }
    if (v7909) {
      parentObj$$40.registerA = parentObj$$40.registerA + 154 & 255;
      parentObj$$40.FHalfCarry = false;
    } else {
      if (parentObj$$40.FCarry) {
        parentObj$$40.registerA = parentObj$$40.registerA + 160 & 255;
      } else {
        if (parentObj$$40.FHalfCarry) {
          parentObj$$40.registerA = parentObj$$40.registerA + 250 & 255;
          parentObj$$40.FHalfCarry = false;
        }
      }
    }
  }
  parentObj$$40.FZero = parentObj$$40.registerA == 0;
  return;
}
function v116(parentObj$$39) {
  var v9373 = parentObj$$39.memoryReader;
  parentObj$$39.registersHL = JAM.call(v9373[parentObj$$39.programCounter], v9373, [parentObj$$39, parentObj$$39.programCounter], JAM.policy.p1) << 8 | parentObj$$39.registersHL & 255;
  parentObj$$39.programCounter = parentObj$$39.programCounter + 1 & 65535;
  return;
}
function v115(parentObj$$38) {
  var H$$1 = (parentObj$$38.registersHL >> 8) - 1 & 255;
  parentObj$$38.FZero = H$$1 == 0;
  parentObj$$38.FHalfCarry = (H$$1 & 15) == 15;
  parentObj$$38.FSubtract = true;
  parentObj$$38.registersHL = H$$1 << 8 | parentObj$$38.registersHL & 255;
  return;
}
function v114(parentObj$$37) {
  var H = (parentObj$$37.registersHL >> 8) + 1 & 255;
  parentObj$$37.FZero = H == 0;
  parentObj$$37.FHalfCarry = (H & 15) == 0;
  parentObj$$37.FSubtract = false;
  parentObj$$37.registersHL = H << 8 | parentObj$$37.registersHL & 255;
  return;
}
function v113(parentObj$$36) {
  parentObj$$36.registersHL = parentObj$$36.registersHL + 1 & 65535;
  return;
}
function v112(parentObj$$35) {
  var v4646 = parentObj$$35.memoryWriter;
  JAM.call(v4646[parentObj$$35.registersHL], v4646, [parentObj$$35, parentObj$$35.registersHL, parentObj$$35.registerA], JAM.policy.p1);
  parentObj$$35.registersHL = parentObj$$35.registersHL + 1 & 65535;
  return;
}
function v111(parentObj$$34) {
  var v4651 = JAM.call(parentObj$$34.memoryRead, parentObj$$34, [parentObj$$34.programCounter + 1 & 65535]) << 8;
  var v7923 = parentObj$$34.memoryReader;
  parentObj$$34.registersHL = v4651 | JAM.call(v7923[parentObj$$34.programCounter], v7923, [parentObj$$34, parentObj$$34.programCounter], JAM.policy.p1);
  parentObj$$34.programCounter = parentObj$$34.programCounter + 2 & 65535;
  return;
}
function v110(parentObj$$33) {
  if (!parentObj$$33.FZero) {
    var v9379 = parentObj$$33.programCounter;
    var v10540 = parentObj$$33.memoryReader;
    parentObj$$33.programCounter = v9379 + (JAM.call(v10540[parentObj$$33.programCounter], v10540, [parentObj$$33, parentObj$$33.programCounter], JAM.policy.p1) << 24 >> 24) + 1 & 65535;
    parentObj$$33.CPUTicks = parentObj$$33.CPUTicks + 4;
  } else {
    parentObj$$33.programCounter = parentObj$$33.programCounter + 1 & 65535;
  }
  return;
}
function v109(parentObj$$32) {
  var v4657;
  if (parentObj$$32.FCarry) {
    v4657 = 128;
  } else {
    v4657 = 0;
  }
  var carry_flag$$1 = v4657;
  parentObj$$32.FCarry = (parentObj$$32.registerA & 1) == 1;
  parentObj$$32.registerA = parentObj$$32.registerA >> 1 | carry_flag$$1;
  parentObj$$32.FZero = parentObj$$32.FSubtract = parentObj$$32.FHalfCarry = false;
  return;
}
function v108(parentObj$$31) {
  var v4660 = parentObj$$31.memoryReader;
  var v10768 = JAM.call(v4660[parentObj$$31.programCounter], v4660, [parentObj$$31, parentObj$$31.programCounter], JAM.policy.p1);
  parentObj$$31.registerE = v10768;
  parentObj$$31.programCounter = parentObj$$31.programCounter + 1 & 65535;
  return;
}
function v107(parentObj$$30) {
  parentObj$$30.registerE = parentObj$$30.registerE - 1 & 255;
  parentObj$$30.FZero = parentObj$$30.registerE == 0;
  parentObj$$30.FHalfCarry = (parentObj$$30.registerE & 15) == 15;
  parentObj$$30.FSubtract = true;
  return;
}
function v106(parentObj$$29) {
  parentObj$$29.registerE = parentObj$$29.registerE + 1 & 255;
  parentObj$$29.FZero = parentObj$$29.registerE == 0;
  parentObj$$29.FHalfCarry = (parentObj$$29.registerE & 15) == 0;
  parentObj$$29.FSubtract = false;
  return;
}
function v105(parentObj$$28) {
  var temp_var$$4 = (parentObj$$28.registerD << 8 | parentObj$$28.registerE) - 1 & 65535;
  parentObj$$28.registerD = temp_var$$4 >> 8;
  parentObj$$28.registerE = temp_var$$4 & 255;
  return;
}
function v104(parentObj$$27) {
  var v10769 = JAM.call(parentObj$$27.memoryRead, parentObj$$27, [parentObj$$27.registerD << 8 | parentObj$$27.registerE]);
  parentObj$$27.registerA = v10769;
  return;
}
function v103(parentObj$$26) {
  var dirtySum$$1 = parentObj$$26.registersHL + (parentObj$$26.registerD << 8 | parentObj$$26.registerE);
  parentObj$$26.FHalfCarry = (parentObj$$26.registersHL & 4095) > (dirtySum$$1 & 4095);
  parentObj$$26.FCarry = dirtySum$$1 > 65535;
  parentObj$$26.registersHL = dirtySum$$1 & 65535;
  parentObj$$26.FSubtract = false;
  return;
}
function v102(parentObj$$25) {
  var v9385 = parentObj$$25.programCounter;
  var v10543 = parentObj$$25.memoryReader;
  parentObj$$25.programCounter = v9385 + (JAM.call(v10543[parentObj$$25.programCounter], v10543, [parentObj$$25, parentObj$$25.programCounter], JAM.policy.p1) << 24 >> 24) + 1 & 65535;
  return;
}
function v101(parentObj$$24) {
  var v4677;
  if (parentObj$$24.FCarry) {
    v4677 = 1;
  } else {
    v4677 = 0;
  }
  var carry_flag = v4677;
  parentObj$$24.FCarry = parentObj$$24.registerA > 127;
  parentObj$$24.registerA = parentObj$$24.registerA << 1 & 255 | carry_flag;
  parentObj$$24.FZero = parentObj$$24.FSubtract = parentObj$$24.FHalfCarry = false;
  return;
}
function v100(parentObj$$23) {
  var v4680 = parentObj$$23.memoryReader;
  var v10770 = JAM.call(v4680[parentObj$$23.programCounter], v4680, [parentObj$$23, parentObj$$23.programCounter], JAM.policy.p1);
  parentObj$$23.registerD = v10770;
  parentObj$$23.programCounter = parentObj$$23.programCounter + 1 & 65535;
  return;
}
function v99(parentObj$$22) {
  parentObj$$22.registerD = parentObj$$22.registerD - 1 & 255;
  parentObj$$22.FZero = parentObj$$22.registerD == 0;
  parentObj$$22.FHalfCarry = (parentObj$$22.registerD & 15) == 15;
  parentObj$$22.FSubtract = true;
  return;
}
function v98(parentObj$$21) {
  parentObj$$21.registerD = parentObj$$21.registerD + 1 & 255;
  parentObj$$21.FZero = parentObj$$21.registerD == 0;
  parentObj$$21.FHalfCarry = (parentObj$$21.registerD & 15) == 0;
  parentObj$$21.FSubtract = false;
  return;
}
function v97(parentObj$$20) {
  var temp_var$$3 = (parentObj$$20.registerD << 8 | parentObj$$20.registerE) + 1;
  parentObj$$20.registerD = temp_var$$3 >> 8 & 255;
  parentObj$$20.registerE = temp_var$$3 & 255;
  return;
}
function v96(parentObj$$19) {
  JAM.call(parentObj$$19.memoryWrite, parentObj$$19, [parentObj$$19.registerD << 8 | parentObj$$19.registerE, parentObj$$19.registerA], JAM.policy.p1);
  return;
}
function v95(parentObj$$18) {
  var v4694 = parentObj$$18.memoryReader;
  var v10771 = JAM.call(v4694[parentObj$$18.programCounter], v4694, [parentObj$$18, parentObj$$18.programCounter], JAM.policy.p1);
  parentObj$$18.registerE = v10771;
  var v10772 = JAM.call(parentObj$$18.memoryRead, parentObj$$18, [parentObj$$18.programCounter + 1 & 65535]);
  parentObj$$18.registerD = v10772;
  parentObj$$18.programCounter = parentObj$$18.programCounter + 2 & 65535;
  return;
}
function v94(parentObj$$17) {
  if (parentObj$$17.cGBC) {
    if ((parentObj$$17.memory[65357] & 1) == 1) {
      if (parentObj$$17.memory[65357] > 127) {
        cout("Going into single clock speed mode.", 0);
        parentObj$$17.doubleSpeedShifter = 0;
        var v4699 = parentObj$$17.memory;
        v4699[65357] = v4699[65357] & 127;
      } else {
        cout("Going into double clock speed mode.", 0);
        parentObj$$17.doubleSpeedShifter = 1;
        var v4700 = parentObj$$17.memory;
        v4700[65357] = v4700[65357] | 128;
      }
      var v4702 = parentObj$$17.memory;
      v4702[65357] = v4702[65357] & 254;
    } else {
      parentObj$$17.handleSTOP();
    }
  } else {
    parentObj$$17.handleSTOP();
  }
  return;
}
function v93(parentObj$$16) {
  parentObj$$16.registerA = parentObj$$16.registerA >> 1 | (parentObj$$16.registerA & 1) << 7;
  parentObj$$16.FCarry = parentObj$$16.registerA > 127;
  parentObj$$16.FZero = parentObj$$16.FSubtract = parentObj$$16.FHalfCarry = false;
  return;
}
function v92(parentObj$$15) {
  var v4708 = parentObj$$15.memoryReader;
  var v10773 = JAM.call(v4708[parentObj$$15.programCounter], v4708, [parentObj$$15, parentObj$$15.programCounter], JAM.policy.p1);
  parentObj$$15.registerC = v10773;
  parentObj$$15.programCounter = parentObj$$15.programCounter + 1 & 65535;
  return;
}
function v91(parentObj$$14) {
  parentObj$$14.registerC = parentObj$$14.registerC - 1 & 255;
  parentObj$$14.FZero = parentObj$$14.registerC == 0;
  parentObj$$14.FHalfCarry = (parentObj$$14.registerC & 15) == 15;
  parentObj$$14.FSubtract = true;
  return;
}
function v90(parentObj$$13) {
  parentObj$$13.registerC = parentObj$$13.registerC + 1 & 255;
  parentObj$$13.FZero = parentObj$$13.registerC == 0;
  parentObj$$13.FHalfCarry = (parentObj$$13.registerC & 15) == 0;
  parentObj$$13.FSubtract = false;
  return;
}
function v89(parentObj$$12) {
  var temp_var$$2 = (parentObj$$12.registerB << 8 | parentObj$$12.registerC) - 1 & 65535;
  parentObj$$12.registerB = temp_var$$2 >> 8;
  parentObj$$12.registerC = temp_var$$2 & 255;
  return;
}
function v88(parentObj$$11) {
  var v10774 = JAM.call(parentObj$$11.memoryRead, parentObj$$11, [parentObj$$11.registerB << 8 | parentObj$$11.registerC]);
  parentObj$$11.registerA = v10774;
  return;
}
function v87(parentObj$$10) {
  var dirtySum = parentObj$$10.registersHL + (parentObj$$10.registerB << 8 | parentObj$$10.registerC);
  parentObj$$10.FHalfCarry = (parentObj$$10.registersHL & 4095) > (dirtySum & 4095);
  parentObj$$10.FCarry = dirtySum > 65535;
  parentObj$$10.registersHL = dirtySum & 65535;
  parentObj$$10.FSubtract = false;
  return;
}
function v86(parentObj$$9) {
  var v4724 = JAM.call(parentObj$$9.memoryRead, parentObj$$9, [parentObj$$9.programCounter + 1 & 65535]) << 8;
  var v7975 = parentObj$$9.memoryReader;
  var temp_var$$1 = v4724 | JAM.call(v7975[parentObj$$9.programCounter], v7975, [parentObj$$9, parentObj$$9.programCounter], JAM.policy.p1);
  parentObj$$9.programCounter = parentObj$$9.programCounter + 2 & 65535;
  JAM.call(parentObj$$9.memoryWrite, parentObj$$9, [temp_var$$1, parentObj$$9.stackPointer & 255], JAM.policy.p1);
  JAM.call(parentObj$$9.memoryWrite, parentObj$$9, [temp_var$$1 + 1 & 65535, parentObj$$9.stackPointer >> 8], JAM.policy.p1);
  return;
}
function v85(parentObj$$8) {
  parentObj$$8.FCarry = parentObj$$8.registerA > 127;
  parentObj$$8.registerA = parentObj$$8.registerA << 1 & 255 | parentObj$$8.registerA >> 7;
  parentObj$$8.FZero = parentObj$$8.FSubtract = parentObj$$8.FHalfCarry = false;
  return;
}
function v84(parentObj$$7) {
  var v4733 = parentObj$$7.memoryReader;
  var v10775 = JAM.call(v4733[parentObj$$7.programCounter], v4733, [parentObj$$7, parentObj$$7.programCounter], JAM.policy.p1);
  parentObj$$7.registerB = v10775;
  parentObj$$7.programCounter = parentObj$$7.programCounter + 1 & 65535;
  return;
}
function v83(parentObj$$6) {
  parentObj$$6.registerB = parentObj$$6.registerB - 1 & 255;
  parentObj$$6.FZero = parentObj$$6.registerB == 0;
  parentObj$$6.FHalfCarry = (parentObj$$6.registerB & 15) == 15;
  parentObj$$6.FSubtract = true;
  return;
}
function v82(parentObj$$5) {
  parentObj$$5.registerB = parentObj$$5.registerB + 1 & 255;
  parentObj$$5.FZero = parentObj$$5.registerB == 0;
  parentObj$$5.FHalfCarry = (parentObj$$5.registerB & 15) == 0;
  parentObj$$5.FSubtract = false;
  return;
}
function v81(parentObj$$4) {
  var temp_var = (parentObj$$4.registerB << 8 | parentObj$$4.registerC) + 1;
  parentObj$$4.registerB = temp_var >> 8 & 255;
  parentObj$$4.registerC = temp_var & 255;
  return;
}
function v80(parentObj$$3) {
  JAM.call(parentObj$$3.memoryWrite, parentObj$$3, [parentObj$$3.registerB << 8 | parentObj$$3.registerC, parentObj$$3.registerA], JAM.policy.p1);
  return;
}
function v79(parentObj$$2) {
  var v4747 = parentObj$$2.memoryReader;
  var v10776 = JAM.call(v4747[parentObj$$2.programCounter], v4747, [parentObj$$2, parentObj$$2.programCounter], JAM.policy.p1);
  parentObj$$2.registerC = v10776;
  var v10777 = JAM.call(parentObj$$2.memoryRead, parentObj$$2, [parentObj$$2.programCounter + 1 & 65535]);
  parentObj$$2.registerB = v10777;
  parentObj$$2.programCounter = parentObj$$2.programCounter + 2 & 65535;
  return;
}
function v78(parentObj$$1) {
  return;
}
function v77(typedArray) {
  typedArray[0] = -1;
  typedArray[0] = typedArray[0] >> 0;
  if (typedArray[0] != 255) {
    return [];
  } else {
    return typedArray;
  }
  return;
}
function v76(bufferLength$$1) {
  try {
    return JAM.call(this.checkForOperaMathBug, this, [new Uint8Array(bufferLength$$1)]);
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
  var v10778 = JAM.call(this.generateUint8Buffer, this, [this.finalResultSize]);
  this.heightBuffer = v10778;
  if (!BILINEARAlgo$$1) {
    var v10779 = JAM.call(this.generateFloatBuffer, this, [this.targetWidthMultipliedByChannels]);
    this.outputHeightWorkBench = v10779;
  }
  return;
}
function v73(BILINEARAlgo) {
  var v10780 = JAM.call(this.generateFloatBuffer, this, [this.widthPassResultSize]);
  this.widthBuffer = v10780;
  if (!BILINEARAlgo) {
    var v10781 = JAM.call(this.generateFloatBuffer, this, [this.originalHeightMultipliedByChannels]);
    this.outputWidthWorkBench = v10781;
  }
  return;
}
function v72(buffer$$26) {
  return buffer$$26;
}
function v71(buffer$$25) {
  return JAM.call(this.resizeHeight, this, [JAM.call(this.resizeWidth, this, [buffer$$25])]);
}
function v70(buffer$$24) {
  var ratioWeight$$7 = (this.heightOriginal - 1) / this.targetHeight;
  var weight$$7 = 0;
  var finalOffset$$3 = 0;
  var pixelOffset$$7 = 0;
  var outputBuffer$$7 = this.heightBuffer;
  var v4769 = pixelOffset$$7 < this.finalResultSize;
  for (;v4769;) {
    secondWeight = weight$$7 % 1;
    firstWeight = 1 - secondWeight;
    pixelOffset$$7 = Math.floor(weight$$7) * 4;
    var v4768 = pixelOffset$$7 < this.targetWidthMultipliedByChannels;
    for (;v4768;) {
      var v4764 = finalOffset$$3;
      finalOffset$$3 = finalOffset$$3 + 1;
      outputBuffer$$7[v4764] = buffer$$24[pixelOffset$$7] * firstWeight + buffer$$24[pixelOffset$$7 + 4] * secondWeight;
      var v4765 = finalOffset$$3;
      finalOffset$$3 = finalOffset$$3 + 1;
      outputBuffer$$7[v4765] = buffer$$24[pixelOffset$$7 + 1] * firstWeight + buffer$$24[pixelOffset$$7 + 5] * secondWeight;
      var v4766 = finalOffset$$3;
      finalOffset$$3 = finalOffset$$3 + 1;
      outputBuffer$$7[v4766] = buffer$$24[pixelOffset$$7 + 2] * firstWeight + buffer$$24[pixelOffset$$7 + 6] * secondWeight;
      var v4767 = finalOffset$$3;
      finalOffset$$3 = finalOffset$$3 + 1;
      outputBuffer$$7[v4767] = buffer$$24[pixelOffset$$7 + 3] * firstWeight + buffer$$24[pixelOffset$$7 + 7] * secondWeight;
      pixelOffset$$7 = pixelOffset$$7 + 4;
      v4768 = pixelOffset$$7 < this.targetWidthMultipliedByChannels;
    }
    weight$$7 = weight$$7 + ratioWeight$$7;
    v4769 = pixelOffset$$7 < this.finalResultSize;
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
  var v4793 = outputOffset$$3 < this.finalResultSize;
  do {
    pixelOffset$$6 = 0;
    var v4774 = pixelOffset$$6 < this.targetWidthMultipliedByChannels;
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
      v4774 = pixelOffset$$6 < this.targetWidthMultipliedByChannels;
    }
    weight$$6 = ratioWeight$$6;
    var v8013 = weight$$6 > 0;
    if (v8013) {
      v8013 = actualPosition$$3 < this.widthPassResultSize;
    }
    var v4787 = v8013;
    do {
      amountToNext$$3 = 1 + actualPosition$$3 - currentPosition$$3;
      if (weight$$6 >= amountToNext$$3) {
        pixelOffset$$6 = 0;
        var v4780 = pixelOffset$$6 < this.targetWidthMultipliedByChannels;
        for (;v4780;) {
          var v4776 = pixelOffset$$6;
          pixelOffset$$6 = pixelOffset$$6 + 1;
          var v9415 = output$$3[v4776];
          var v10385 = actualPosition$$3;
          actualPosition$$3 = actualPosition$$3 + 1;
          output$$3[v4776] = v9415 + buffer$$23[v10385] * amountToNext$$3;
          var v4777 = pixelOffset$$6;
          pixelOffset$$6 = pixelOffset$$6 + 1;
          var v9417 = output$$3[v4777];
          var v10386 = actualPosition$$3;
          actualPosition$$3 = actualPosition$$3 + 1;
          output$$3[v4777] = v9417 + buffer$$23[v10386] * amountToNext$$3;
          var v4778 = pixelOffset$$6;
          pixelOffset$$6 = pixelOffset$$6 + 1;
          var v9419 = output$$3[v4778];
          var v10387 = actualPosition$$3;
          actualPosition$$3 = actualPosition$$3 + 1;
          output$$3[v4778] = v9419 + buffer$$23[v10387] * amountToNext$$3;
          var v4779 = pixelOffset$$6;
          pixelOffset$$6 = pixelOffset$$6 + 1;
          var v9421 = output$$3[v4779];
          var v10388 = actualPosition$$3;
          actualPosition$$3 = actualPosition$$3 + 1;
          output$$3[v4779] = v9421 + buffer$$23[v10388] * amountToNext$$3;
          v4780 = pixelOffset$$6 < this.targetWidthMultipliedByChannels;
        }
        currentPosition$$3 = actualPosition$$3;
        weight$$6 = weight$$6 - amountToNext$$3;
      } else {
        pixelOffset$$6 = 0;
        amountToNext$$3 = actualPosition$$3;
        var v4785 = pixelOffset$$6 < this.targetWidthMultipliedByChannels;
        for (;v4785;) {
          var v4781 = pixelOffset$$6;
          pixelOffset$$6 = pixelOffset$$6 + 1;
          var v9423 = output$$3[v4781];
          var v10389 = amountToNext$$3;
          amountToNext$$3 = amountToNext$$3 + 1;
          output$$3[v4781] = v9423 + buffer$$23[v10389] * weight$$6;
          var v4782 = pixelOffset$$6;
          pixelOffset$$6 = pixelOffset$$6 + 1;
          var v9425 = output$$3[v4782];
          var v10390 = amountToNext$$3;
          amountToNext$$3 = amountToNext$$3 + 1;
          output$$3[v4782] = v9425 + buffer$$23[v10390] * weight$$6;
          var v4783 = pixelOffset$$6;
          pixelOffset$$6 = pixelOffset$$6 + 1;
          var v9427 = output$$3[v4783];
          var v10391 = amountToNext$$3;
          amountToNext$$3 = amountToNext$$3 + 1;
          output$$3[v4783] = v9427 + buffer$$23[v10391] * weight$$6;
          var v4784 = pixelOffset$$6;
          pixelOffset$$6 = pixelOffset$$6 + 1;
          var v9429 = output$$3[v4784];
          var v10392 = amountToNext$$3;
          amountToNext$$3 = amountToNext$$3 + 1;
          output$$3[v4784] = v9429 + buffer$$23[v10392] * weight$$6;
          v4785 = pixelOffset$$6 < this.targetWidthMultipliedByChannels;
        }
        currentPosition$$3 = currentPosition$$3 + weight$$6;
        break;
      }
      var v8018 = weight$$6 > 0;
      if (v8018) {
        v8018 = actualPosition$$3 < this.widthPassResultSize;
      }
      v4787 = v8018;
    } while (v4787);
    pixelOffset$$6 = 0;
    var v4792 = pixelOffset$$6 < this.targetWidthMultipliedByChannels;
    for (;v4792;) {
      var v4788 = outputOffset$$3;
      outputOffset$$3 = outputOffset$$3 + 1;
      var v10113 = pixelOffset$$6;
      pixelOffset$$6 = pixelOffset$$6 + 1;
      var v10782 = Math.round(output$$3[v10113] / ratioWeight$$6);
      outputBuffer$$6[v4788] = v10782;
      var v4789 = outputOffset$$3;
      outputOffset$$3 = outputOffset$$3 + 1;
      var v10114 = pixelOffset$$6;
      pixelOffset$$6 = pixelOffset$$6 + 1;
      var v10783 = Math.round(output$$3[v10114] / ratioWeight$$6);
      outputBuffer$$6[v4789] = v10783;
      var v4790 = outputOffset$$3;
      outputOffset$$3 = outputOffset$$3 + 1;
      var v10115 = pixelOffset$$6;
      pixelOffset$$6 = pixelOffset$$6 + 1;
      var v10784 = Math.round(output$$3[v10115] / ratioWeight$$6);
      outputBuffer$$6[v4790] = v10784;
      var v4791 = outputOffset$$3;
      outputOffset$$3 = outputOffset$$3 + 1;
      var v10116 = pixelOffset$$6;
      pixelOffset$$6 = pixelOffset$$6 + 1;
      var v10785 = Math.round(output$$3[v10116] / ratioWeight$$6);
      outputBuffer$$6[v4791] = v10785;
      v4792 = pixelOffset$$6 < this.targetWidthMultipliedByChannels;
    }
    v4793 = outputOffset$$3 < this.finalResultSize;
  } while (v4793);
  return outputBuffer$$6;
}
function v68(buffer$$22) {
  var ratioWeight$$5 = (this.heightOriginal - 1) / this.targetHeight;
  var weight$$5 = 0;
  var finalOffset$$2 = 0;
  var pixelOffset$$5 = 0;
  var pixelOffsetAccumulated = 0;
  var pixelOffsetAccumulated2 = 0;
  var outputBuffer$$5 = this.heightBuffer;
  var v4801 = finalOffset$$2 < this.finalResultSize;
  do {
    secondWeight = weight$$5 % 1;
    firstWeight = 1 - secondWeight;
    pixelOffsetAccumulated = Math.floor(weight$$5) * this.targetWidthMultipliedByChannels;
    pixelOffsetAccumulated2 = pixelOffsetAccumulated + this.targetWidthMultipliedByChannels;
    pixelOffset$$5 = 0;
    var v4800 = pixelOffset$$5 < this.targetWidthMultipliedByChannels;
    for (;v4800;) {
      var v4799 = finalOffset$$2;
      finalOffset$$2 = finalOffset$$2 + 1;
      outputBuffer$$5[v4799] = buffer$$22[pixelOffsetAccumulated + pixelOffset$$5] * firstWeight + buffer$$22[pixelOffsetAccumulated2 + pixelOffset$$5] * secondWeight;
      ++pixelOffset$$5;
      v4800 = pixelOffset$$5 < this.targetWidthMultipliedByChannels;
    }
    weight$$5 = weight$$5 + ratioWeight$$5;
    v4801 = finalOffset$$2 < this.finalResultSize;
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
  var v4821 = outputOffset$$2 < this.finalResultSize;
  do {
    pixelOffset$$4 = 0;
    var v4805 = pixelOffset$$4 < this.targetWidthMultipliedByChannels;
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
      v4805 = pixelOffset$$4 < this.targetWidthMultipliedByChannels;
    }
    weight$$4 = ratioWeight$$4;
    var v8036 = weight$$4 > 0;
    if (v8036) {
      v8036 = actualPosition$$2 < this.widthPassResultSize;
    }
    var v4816 = v8036;
    do {
      amountToNext$$2 = 1 + actualPosition$$2 - currentPosition$$2;
      if (weight$$4 >= amountToNext$$2) {
        pixelOffset$$4 = 0;
        var v4810 = pixelOffset$$4 < this.targetWidthMultipliedByChannels;
        for (;v4810;) {
          var v4807 = pixelOffset$$4;
          pixelOffset$$4 = pixelOffset$$4 + 1;
          var v9439 = output$$2[v4807];
          var v10393 = actualPosition$$2;
          actualPosition$$2 = actualPosition$$2 + 1;
          output$$2[v4807] = v9439 + buffer$$21[v10393] * amountToNext$$2;
          var v4808 = pixelOffset$$4;
          pixelOffset$$4 = pixelOffset$$4 + 1;
          var v9441 = output$$2[v4808];
          var v10394 = actualPosition$$2;
          actualPosition$$2 = actualPosition$$2 + 1;
          output$$2[v4808] = v9441 + buffer$$21[v10394] * amountToNext$$2;
          var v4809 = pixelOffset$$4;
          pixelOffset$$4 = pixelOffset$$4 + 1;
          var v9443 = output$$2[v4809];
          var v10395 = actualPosition$$2;
          actualPosition$$2 = actualPosition$$2 + 1;
          output$$2[v4809] = v9443 + buffer$$21[v10395] * amountToNext$$2;
          v4810 = pixelOffset$$4 < this.targetWidthMultipliedByChannels;
        }
        currentPosition$$2 = actualPosition$$2;
        weight$$4 = weight$$4 - amountToNext$$2;
      } else {
        pixelOffset$$4 = 0;
        amountToNext$$2 = actualPosition$$2;
        var v4814 = pixelOffset$$4 < this.targetWidthMultipliedByChannels;
        for (;v4814;) {
          var v4811 = pixelOffset$$4;
          pixelOffset$$4 = pixelOffset$$4 + 1;
          var v9445 = output$$2[v4811];
          var v10396 = amountToNext$$2;
          amountToNext$$2 = amountToNext$$2 + 1;
          output$$2[v4811] = v9445 + buffer$$21[v10396] * weight$$4;
          var v4812 = pixelOffset$$4;
          pixelOffset$$4 = pixelOffset$$4 + 1;
          var v9447 = output$$2[v4812];
          var v10397 = amountToNext$$2;
          amountToNext$$2 = amountToNext$$2 + 1;
          output$$2[v4812] = v9447 + buffer$$21[v10397] * weight$$4;
          var v4813 = pixelOffset$$4;
          pixelOffset$$4 = pixelOffset$$4 + 1;
          var v9449 = output$$2[v4813];
          var v10398 = amountToNext$$2;
          amountToNext$$2 = amountToNext$$2 + 1;
          output$$2[v4813] = v9449 + buffer$$21[v10398] * weight$$4;
          v4814 = pixelOffset$$4 < this.targetWidthMultipliedByChannels;
        }
        currentPosition$$2 = currentPosition$$2 + weight$$4;
        break;
      }
      var v8041 = weight$$4 > 0;
      if (v8041) {
        v8041 = actualPosition$$2 < this.widthPassResultSize;
      }
      v4816 = v8041;
    } while (v4816);
    pixelOffset$$4 = 0;
    var v4820 = pixelOffset$$4 < this.targetWidthMultipliedByChannels;
    for (;v4820;) {
      var v4817 = outputOffset$$2;
      outputOffset$$2 = outputOffset$$2 + 1;
      var v10125 = pixelOffset$$4;
      pixelOffset$$4 = pixelOffset$$4 + 1;
      var v10786 = Math.round(output$$2[v10125] / ratioWeight$$4);
      outputBuffer$$4[v4817] = v10786;
      var v4818 = outputOffset$$2;
      outputOffset$$2 = outputOffset$$2 + 1;
      var v10126 = pixelOffset$$4;
      pixelOffset$$4 = pixelOffset$$4 + 1;
      var v10787 = Math.round(output$$2[v10126] / ratioWeight$$4);
      outputBuffer$$4[v4818] = v10787;
      var v4819 = outputOffset$$2;
      outputOffset$$2 = outputOffset$$2 + 1;
      var v10127 = pixelOffset$$4;
      pixelOffset$$4 = pixelOffset$$4 + 1;
      var v10788 = Math.round(output$$2[v10127] / ratioWeight$$4);
      outputBuffer$$4[v4819] = v10788;
      v4820 = pixelOffset$$4 < this.targetWidthMultipliedByChannels;
    }
    v4821 = outputOffset$$2 < this.finalResultSize;
  } while (v4821);
  return outputBuffer$$4;
}
function v66(buffer$$20) {
  var ratioWeight$$3 = (this.widthOriginal - 1) / this.targetWidth;
  var weight$$3 = 0;
  var finalOffset$$1 = 0;
  var pixelOffset$$3 = 0;
  var outputBuffer$$3 = this.widthBuffer;
  var targetPosition$$1 = 0;
  var v4830 = targetPosition$$1 < this.targetWidthMultipliedByChannels;
  for (;v4830;) {
    secondWeight = weight$$3 % 1;
    firstWeight = 1 - secondWeight;
    finalOffset$$1 = targetPosition$$1;
    pixelOffset$$3 = Math.floor(weight$$3) * 4;
    var v4829 = finalOffset$$1 < this.widthPassResultSize;
    for (;v4829;) {
      outputBuffer$$3[finalOffset$$1] = buffer$$20[pixelOffset$$3] * firstWeight + buffer$$20[pixelOffset$$3 + 4] * secondWeight;
      outputBuffer$$3[finalOffset$$1 + 1] = buffer$$20[pixelOffset$$3 + 1] * firstWeight + buffer$$20[pixelOffset$$3 + 5] * secondWeight;
      outputBuffer$$3[finalOffset$$1 + 2] = buffer$$20[pixelOffset$$3 + 2] * firstWeight + buffer$$20[pixelOffset$$3 + 6] * secondWeight;
      outputBuffer$$3[finalOffset$$1 + 3] = buffer$$20[pixelOffset$$3 + 3] * firstWeight + buffer$$20[pixelOffset$$3 + 7] * secondWeight;
      pixelOffset$$3 = pixelOffset$$3 + this.originalWidthMultipliedByChannels;
      finalOffset$$1 = finalOffset$$1 + this.targetWidthMultipliedByChannels;
      v4829 = finalOffset$$1 < this.widthPassResultSize;
    }
    targetPosition$$1 = targetPosition$$1 + 4;
    weight$$3 = weight$$3 + ratioWeight$$3;
    v4830 = targetPosition$$1 < this.targetWidthMultipliedByChannels;
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
  var nextLineOffsetOriginalWidth$$1 = this.originalWidthMultipliedByChannels - 3;
  var nextLineOffsetTargetWidth$$1 = this.targetWidthMultipliedByChannels - 3;
  var output$$1 = this.outputWidthWorkBench;
  var outputBuffer$$2 = this.widthBuffer;
  var v4856 = outputOffset$$1 < this.targetWidthMultipliedByChannels;
  do {
    line$$1 = 0;
    var v4837 = line$$1 < this.originalHeightMultipliedByChannels;
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
      v4837 = line$$1 < this.originalHeightMultipliedByChannels;
    }
    weight$$2 = ratioWeight$$2;
    var v8065 = weight$$2 > 0;
    if (v8065) {
      v8065 = actualPosition$$1 < this.originalWidthMultipliedByChannels;
    }
    var v4850 = v8065;
    do {
      amountToNext$$1 = 1 + actualPosition$$1 - currentPosition$$1;
      if (weight$$2 >= amountToNext$$1) {
        line$$1 = 0;
        pixelOffset$$2 = actualPosition$$1;
        var v4843 = line$$1 < this.originalHeightMultipliedByChannels;
        for (;v4843;) {
          var v4839 = line$$1;
          line$$1 = line$$1 + 1;
          var v9463 = output$$1[v4839];
          var v10399 = pixelOffset$$2;
          pixelOffset$$2 = pixelOffset$$2 + 1;
          output$$1[v4839] = v9463 + buffer$$19[v10399] * amountToNext$$1;
          var v4840 = line$$1;
          line$$1 = line$$1 + 1;
          var v9465 = output$$1[v4840];
          var v10400 = pixelOffset$$2;
          pixelOffset$$2 = pixelOffset$$2 + 1;
          output$$1[v4840] = v9465 + buffer$$19[v10400] * amountToNext$$1;
          var v4841 = line$$1;
          line$$1 = line$$1 + 1;
          var v9467 = output$$1[v4841];
          var v10401 = pixelOffset$$2;
          pixelOffset$$2 = pixelOffset$$2 + 1;
          output$$1[v4841] = v9467 + buffer$$19[v10401] * amountToNext$$1;
          var v4842 = line$$1;
          line$$1 = line$$1 + 1;
          output$$1[v4842] = output$$1[v4842] + buffer$$19[pixelOffset$$2] * amountToNext$$1;
          pixelOffset$$2 = pixelOffset$$2 + nextLineOffsetOriginalWidth$$1;
          v4843 = line$$1 < this.originalHeightMultipliedByChannels;
        }
        currentPosition$$1 = actualPosition$$1 = actualPosition$$1 + 4;
        weight$$2 = weight$$2 - amountToNext$$1;
      } else {
        line$$1 = 0;
        pixelOffset$$2 = actualPosition$$1;
        var v4848 = line$$1 < this.originalHeightMultipliedByChannels;
        for (;v4848;) {
          var v4844 = line$$1;
          line$$1 = line$$1 + 1;
          var v9471 = output$$1[v4844];
          var v10402 = pixelOffset$$2;
          pixelOffset$$2 = pixelOffset$$2 + 1;
          output$$1[v4844] = v9471 + buffer$$19[v10402] * weight$$2;
          var v4845 = line$$1;
          line$$1 = line$$1 + 1;
          var v9473 = output$$1[v4845];
          var v10403 = pixelOffset$$2;
          pixelOffset$$2 = pixelOffset$$2 + 1;
          output$$1[v4845] = v9473 + buffer$$19[v10403] * weight$$2;
          var v4846 = line$$1;
          line$$1 = line$$1 + 1;
          var v9475 = output$$1[v4846];
          var v10404 = pixelOffset$$2;
          pixelOffset$$2 = pixelOffset$$2 + 1;
          output$$1[v4846] = v9475 + buffer$$19[v10404] * weight$$2;
          var v4847 = line$$1;
          line$$1 = line$$1 + 1;
          output$$1[v4847] = output$$1[v4847] + buffer$$19[pixelOffset$$2] * weight$$2;
          pixelOffset$$2 = pixelOffset$$2 + nextLineOffsetOriginalWidth$$1;
          v4848 = line$$1 < this.originalHeightMultipliedByChannels;
        }
        currentPosition$$1 = currentPosition$$1 + weight$$2;
        break;
      }
      var v8070 = weight$$2 > 0;
      if (v8070) {
        v8070 = actualPosition$$1 < this.originalWidthMultipliedByChannels;
      }
      v4850 = v8070;
    } while (v4850);
    line$$1 = 0;
    pixelOffset$$2 = outputOffset$$1;
    var v4855 = line$$1 < this.originalHeightMultipliedByChannels;
    for (;v4855;) {
      var v4851 = pixelOffset$$2;
      pixelOffset$$2 = pixelOffset$$2 + 1;
      var v9480 = line$$1;
      line$$1 = line$$1 + 1;
      outputBuffer$$2[v4851] = output$$1[v9480] / ratioWeight$$2;
      var v4852 = pixelOffset$$2;
      pixelOffset$$2 = pixelOffset$$2 + 1;
      var v9481 = line$$1;
      line$$1 = line$$1 + 1;
      outputBuffer$$2[v4852] = output$$1[v9481] / ratioWeight$$2;
      var v4853 = pixelOffset$$2;
      pixelOffset$$2 = pixelOffset$$2 + 1;
      var v9482 = line$$1;
      line$$1 = line$$1 + 1;
      outputBuffer$$2[v4853] = output$$1[v9482] / ratioWeight$$2;
      var v8075 = line$$1;
      line$$1 = line$$1 + 1;
      outputBuffer$$2[pixelOffset$$2] = output$$1[v8075] / ratioWeight$$2;
      pixelOffset$$2 = pixelOffset$$2 + nextLineOffsetTargetWidth$$1;
      v4855 = line$$1 < this.originalHeightMultipliedByChannels;
    }
    outputOffset$$1 = outputOffset$$1 + 4;
    v4856 = outputOffset$$1 < this.targetWidthMultipliedByChannels;
  } while (v4856);
  return outputBuffer$$2;
}
function v64(buffer$$18) {
  var ratioWeight$$1 = (this.widthOriginal - 1) / this.targetWidth;
  var weight$$1 = 0;
  var finalOffset = 0;
  var pixelOffset$$1 = 0;
  var outputBuffer$$1 = this.widthBuffer;
  var targetPosition = 0;
  var v4864 = targetPosition < this.targetWidthMultipliedByChannels;
  for (;v4864;) {
    secondWeight = weight$$1 % 1;
    firstWeight = 1 - secondWeight;
    finalOffset = targetPosition;
    pixelOffset$$1 = Math.floor(weight$$1) * 3;
    var v4863 = finalOffset < this.widthPassResultSize;
    for (;v4863;) {
      outputBuffer$$1[finalOffset] = buffer$$18[pixelOffset$$1] * firstWeight + buffer$$18[pixelOffset$$1 + 3] * secondWeight;
      outputBuffer$$1[finalOffset + 1] = buffer$$18[pixelOffset$$1 + 1] * firstWeight + buffer$$18[pixelOffset$$1 + 4] * secondWeight;
      outputBuffer$$1[finalOffset + 2] = buffer$$18[pixelOffset$$1 + 2] * firstWeight + buffer$$18[pixelOffset$$1 + 5] * secondWeight;
      pixelOffset$$1 = pixelOffset$$1 + this.originalWidthMultipliedByChannels;
      finalOffset = finalOffset + this.targetWidthMultipliedByChannels;
      v4863 = finalOffset < this.widthPassResultSize;
    }
    targetPosition = targetPosition + 3;
    weight$$1 = weight$$1 + ratioWeight$$1;
    v4864 = targetPosition < this.targetWidthMultipliedByChannels;
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
  var nextLineOffsetOriginalWidth = this.originalWidthMultipliedByChannels - 2;
  var nextLineOffsetTargetWidth = this.targetWidthMultipliedByChannels - 2;
  var output = this.outputWidthWorkBench;
  var outputBuffer = this.widthBuffer;
  var v4886 = outputOffset < this.targetWidthMultipliedByChannels;
  do {
    line = 0;
    var v4870 = line < this.originalHeightMultipliedByChannels;
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
      v4870 = line < this.originalHeightMultipliedByChannels;
    }
    weight = ratioWeight;
    var v8093 = weight > 0;
    if (v8093) {
      v8093 = actualPosition < this.originalWidthMultipliedByChannels;
    }
    var v4881 = v8093;
    do {
      amountToNext = 1 + actualPosition - currentPosition;
      if (weight >= amountToNext) {
        line = 0;
        pixelOffset = actualPosition;
        var v4875 = line < this.originalHeightMultipliedByChannels;
        for (;v4875;) {
          var v4872 = line;
          line = line + 1;
          var v9489 = output[v4872];
          var v10405 = pixelOffset;
          pixelOffset = pixelOffset + 1;
          output[v4872] = v9489 + buffer$$17[v10405] * amountToNext;
          var v4873 = line;
          line = line + 1;
          var v9491 = output[v4873];
          var v10406 = pixelOffset;
          pixelOffset = pixelOffset + 1;
          output[v4873] = v9491 + buffer$$17[v10406] * amountToNext;
          var v4874 = line;
          line = line + 1;
          output[v4874] = output[v4874] + buffer$$17[pixelOffset] * amountToNext;
          pixelOffset = pixelOffset + nextLineOffsetOriginalWidth;
          v4875 = line < this.originalHeightMultipliedByChannels;
        }
        currentPosition = actualPosition = actualPosition + 3;
        weight = weight - amountToNext;
      } else {
        line = 0;
        pixelOffset = actualPosition;
        var v4879 = line < this.originalHeightMultipliedByChannels;
        for (;v4879;) {
          var v4876 = line;
          line = line + 1;
          var v9495 = output[v4876];
          var v10407 = pixelOffset;
          pixelOffset = pixelOffset + 1;
          output[v4876] = v9495 + buffer$$17[v10407] * weight;
          var v4877 = line;
          line = line + 1;
          var v9497 = output[v4877];
          var v10408 = pixelOffset;
          pixelOffset = pixelOffset + 1;
          output[v4877] = v9497 + buffer$$17[v10408] * weight;
          var v4878 = line;
          line = line + 1;
          output[v4878] = output[v4878] + buffer$$17[pixelOffset] * weight;
          pixelOffset = pixelOffset + nextLineOffsetOriginalWidth;
          v4879 = line < this.originalHeightMultipliedByChannels;
        }
        currentPosition = currentPosition + weight;
        break;
      }
      var v8098 = weight > 0;
      if (v8098) {
        v8098 = actualPosition < this.originalWidthMultipliedByChannels;
      }
      v4881 = v8098;
    } while (v4881);
    line = 0;
    pixelOffset = outputOffset;
    var v4885 = line < this.originalHeightMultipliedByChannels;
    for (;v4885;) {
      var v4882 = pixelOffset;
      pixelOffset = pixelOffset + 1;
      var v9502 = line;
      line = line + 1;
      outputBuffer[v4882] = output[v9502] / ratioWeight;
      var v4883 = pixelOffset;
      pixelOffset = pixelOffset + 1;
      var v9503 = line;
      line = line + 1;
      outputBuffer[v4883] = output[v9503] / ratioWeight;
      var v8102 = line;
      line = line + 1;
      outputBuffer[pixelOffset] = output[v8102] / ratioWeight;
      pixelOffset = pixelOffset + nextLineOffsetTargetWidth;
      v4885 = line < this.originalHeightMultipliedByChannels;
    }
    outputOffset = outputOffset + 3;
    v4886 = outputOffset < this.targetWidthMultipliedByChannels;
  } while (v4886);
  return outputBuffer;
}
function v62() {
  var v10156 = this.widthOriginal > 0;
  if (v10156) {
    v10156 = this.heightOriginal > 0;
  }
  var v9504 = v10156;
  if (v9504) {
    v9504 = this.targetWidth > 0;
  }
  var v8105 = v9504;
  if (v8105) {
    v8105 = this.targetHeight > 0;
  }
  if (v8105) {
    if (this.widthOriginal == this.targetWidth) {
      this.resizeWidth = this.bypassResizer;
    } else {
      this.ratioWeightWidthPass = this.widthOriginal / this.targetWidth;
      var v8108 = this.ratioWeightWidthPass < 1;
      if (v8108) {
        v8108 = this.interpolationPass;
      }
      if (v8108) {
        JAM.call(this.initializeFirstPassBuffers, this, [true]);
        var v4889;
        if (this.colorChannels == 4) {
          v4889 = this.resizeWidthInterpolatedRGBA;
        } else {
          v4889 = this.resizeWidthInterpolatedRGB;
        }
        this.resizeWidth = v4889;
      } else {
        JAM.call(this.initializeFirstPassBuffers, this, [false]);
        var v4890;
        if (this.colorChannels == 4) {
          v4890 = this.resizeWidthRGBA;
        } else {
          v4890 = this.resizeWidthRGB;
        }
        this.resizeWidth = v4890;
      }
    }
    if (this.heightOriginal == this.targetHeight) {
      this.resizeHeight = this.bypassResizer;
    } else {
      this.ratioWeightHeightPass = this.heightOriginal / this.targetHeight;
      var v8113 = this.ratioWeightHeightPass < 1;
      if (v8113) {
        v8113 = this.interpolationPass;
      }
      if (v8113) {
        JAM.call(this.initializeSecondPassBuffers, this, [true]);
        this.resizeHeight = this.resizeHeightInterpolated;
      } else {
        JAM.call(this.initializeSecondPassBuffers, this, [false]);
        var v4895;
        if (this.colorChannels == 4) {
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
  if (!launchedContext) {
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
      var v10789 = JAM.call(audioContextHandle.createBuffer, audioContextHandle, [1, 1, webAudioActualSampleRate], JAM.policy.p1);
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
  var v9511 = !this.flashInitialized;
  if (v9511) {
    v9511 = this.audioHandleFlash;
  }
  var v8115 = v9511;
  if (v8115) {
    v8115 = this.audioHandleFlash.initialize;
  }
  if (v8115) {
    this.flashInitialized = true;
    var v4901 = this.audioHandleFlash;
    JAM.call(v4901.initialize, v4901, [this.audioChannels, XAudioJSVolume], JAM.policy.p1);
    resetCallbackAPIAudioBuffer(44100);
  }
  return this.flashInitialized;
}
function v59(buffer$$16) {
  var length$$16 = this.mozAudioTail.length;
  if (length$$16 > 0) {
    var v4905 = this.audioHandleMoz;
    var samplesAccepted = JAM.call(v4905.mozWriteAudio, v4905, [this.mozAudioTail]);
    this.samplesAlreadyWritten = this.samplesAlreadyWritten + samplesAccepted;
    var v4907 = this.mozAudioTail;
    JAM.call(v4907.splice, v4907, [0, samplesAccepted], JAM.policy.p1);
  }
  length$$16 = JAM.call(Math.min, Math, [buffer$$16.length, webAudioMaxBufferSize - this.samplesAlreadyWritten + this.audioHandleMoz.mozCurrentSampleOffset()], JAM.policy.p1);
  var v4911 = this.audioHandleMoz;
  samplesAccepted = JAM.call(v4911.mozWriteAudio, v4911, [buffer$$16]);
  this.samplesAlreadyWritten = this.samplesAlreadyWritten + samplesAccepted;
  var index$$46 = 0;
  var v4914 = length$$16 > samplesAccepted;
  for (;v4914;) {
    var v4912 = this.mozAudioTail;
    var v8120 = index$$46;
    index$$46 = index$$46 + 1;
    v4912.push(buffer$$16[v8120]);
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
  if (v8121) {
    XAudioJSVolume = newVolume;
    if (this.checkFlashInit()) {
      var v4915 = this.audioHandleFlash;
      JAM.call(v4915.changeVolume, v4915, [XAudioJSVolume]);
    }
    if (this.mozAudioFound) {
      this.audioHandleMoz.volume = XAudioJSVolume;
    }
  }
  return;
}
function v57() {
  function v56(event$$2) {
    if (event$$2.success) {
      thisObj.audioHandleFlash = event$$2.ref;
    } else {
      thisObj.audioType = 1;
    }
    return;
  }
  var existingFlashload = document.getElementById("XAudioJS");
  if (existingFlashload == null) {
    var thisObj = this;
    var mainContainerNode = document.createElement("div");
    JAM.call(mainContainerNode.setAttribute, mainContainerNode, ["style", "position: fixed; bottom: 0px; right: 0px; margin: 0px; padding: 0px; border: none; width: 8px; height: 8px; overflow: hidden; z-index: -1000; "], JAM.policy.p1);
    var containerNode = document.createElement("div");
    JAM.call(containerNode.setAttribute, containerNode, ["style", "position: static; border: none; width: 0px; height: 0px; visibility: hidden; margin: 8px; padding: 0px;"], JAM.policy.p1);
    JAM.call(containerNode.setAttribute, containerNode, ["id", "XAudioJS"], JAM.policy.p1);
    JAM.call(mainContainerNode.appendChild, mainContainerNode, [containerNode]);
    var v4921 = document.getElementsByTagName("body")[0];
    JAM.call(v4921.appendChild, v4921, [mainContainerNode]);
    JAM.call(swfobject.embedSWF, swfobject, ["XAudioJS.swf", "XAudioJS", "8", "8", "9.0.0", "", {}, {"allowscriptaccess":"always"}, {"style":"position: static; visibility: hidden; margin: 8px; padding: 0px; border: none"}, v56], JAM.policy.p1);
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
  JAM.call(this.writeMozAudio, this, [getFloat32(webAudioMinBufferSize)]);
  this.audioType = 0;
  return;
}
function v53() {
  var v10790 = new Audio;
  this.audioHandleMoz = v10790;
  var v4926 = this.audioHandleMoz;
  JAM.call(v4926.mozSetup, v4926, [this.audioChannels, XAudioJSSampleRate], JAM.policy.p1);
  this.samplesAlreadyWritten = 0;
  var v4928;
  if (this.audioChannels == 2) {
    v4928 = [0, 0];
  } else {
    v4928 = [0];
  }
  var emptySampleFrame = v4928;
  var prebufferAmount = 0;
  var v8124 = navigator.platform != "MacIntel";
  if (v8124) {
    v8124 = navigator.platform != "MacPPC";
  }
  if (v8124) {
    var v4929 = this.audioHandleMoz.mozCurrentSampleOffset() == 0;
    for (;v4929;) {
      var v9519 = this.audioHandleMoz;
      prebufferAmount = prebufferAmount + JAM.call(v9519.mozWriteAudio, v9519, [emptySampleFrame]);
      v4929 = this.audioHandleMoz.mozCurrentSampleOffset() == 0;
    }
    var samplesToDoubleBuffer = prebufferAmount / this.audioChannels;
    var index$$45 = 0;
    var v4931 = index$$45 < samplesToDoubleBuffer;
    for (;v4931;) {
      var v8128 = this.samplesAlreadyWritten;
      var v9521 = this.audioHandleMoz;
      this.samplesAlreadyWritten = v8128 + JAM.call(v9521.mozWriteAudio, v9521, [emptySampleFrame]);
      index$$45++;
      v4931 = index$$45 < samplesToDoubleBuffer;
    }
  }
  this.samplesAlreadyWritten = this.samplesAlreadyWritten + prebufferAmount;
  webAudioMinBufferSize = webAudioMinBufferSize + this.samplesAlreadyWritten;
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
  if (this.audioType == 0) {
    this.MOZExecuteCallback();
  } else {
    if (this.audioType == 1) {
      this.callbackBasedExecuteCallback();
    } else {
      if (this.audioType == 2) {
        var v8135 = this.checkFlashInit();
        if (!v8135) {
          v8135 = launchedContext;
        }
        if (v8135) {
          this.callbackBasedExecuteCallback();
        } else {
          if (this.mozAudioFound) {
            this.MOZExecuteCallback();
          }
        }
      }
    }
  }
  return;
}
function v50() {
  var samplesRequested$$1 = webAudioMinBufferSize - this.remainingBuffer();
  if (samplesRequested$$1 > 0) {
    JAM.call(this.callbackBasedWriteAudioNoCallback, this, [JAM.call(this.underRunCallback, this, [samplesRequested$$1])]);
  }
  return;
}
function v49() {
  var samplesRequested = webAudioMinBufferSize - this.remainingBuffer();
  if (samplesRequested > 0) {
    JAM.call(this.writeMozAudio, this, [JAM.call(this.underRunCallback, this, [samplesRequested])]);
  }
  return;
}
function v48() {
  if (this.audioType == 0) {
    return this.samplesAlreadyWritten - this.audioHandleMoz.mozCurrentSampleOffset();
  } else {
    if (this.audioType == 1) {
      return (resampledSamplesLeft() * resampleControl.ratioWeight >> this.audioChannels - 1 << this.audioChannels - 1) + audioBufferSize;
    } else {
      if (this.audioType == 2) {
        var v8142 = this.checkFlashInit();
        if (!v8142) {
          v8142 = launchedContext;
        }
        if (v8142) {
          return (resampledSamplesLeft() * resampleControl.ratioWeight >> this.audioChannels - 1 << this.audioChannels - 1) + audioBufferSize;
        } else {
          if (this.mozAudioFound) {
            return this.samplesAlreadyWritten - this.audioHandleMoz.mozCurrentSampleOffset();
          }
        }
      }
    }
  }
  return 0;
}
function v47(buffer$$15) {
  if (this.audioType == 0) {
    JAM.call(this.MOZWriteAudioNoCallback, this, [buffer$$15]);
  } else {
    if (this.audioType == 1) {
      JAM.call(this.callbackBasedWriteAudioNoCallback, this, [buffer$$15]);
    } else {
      if (this.audioType == 2) {
        var v8149 = this.checkFlashInit();
        if (!v8149) {
          v8149 = launchedContext;
        }
        if (v8149) {
          JAM.call(this.callbackBasedWriteAudioNoCallback, this, [buffer$$15]);
        } else {
          if (this.mozAudioFound) {
            JAM.call(this.MOZWriteAudioNoCallback, this, [buffer$$15]);
          }
        }
      }
    }
  }
  return;
}
function v46(buffer$$14) {
  if (this.audioType == 0) {
    JAM.call(this.MOZWriteAudio, this, [buffer$$14]);
  } else {
    if (this.audioType == 1) {
      JAM.call(this.callbackBasedWriteAudio, this, [buffer$$14]);
    } else {
      if (this.audioType == 2) {
        var v8153 = this.checkFlashInit();
        if (!v8153) {
          v8153 = launchedContext;
        }
        if (v8153) {
          JAM.call(this.callbackBasedWriteAudio, this, [buffer$$14]);
        } else {
          if (this.mozAudioFound) {
            JAM.call(this.MOZWriteAudio, this, [buffer$$14]);
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
    JAM.set(audioContextSampleBuffer, v4967, buffer$$13[v8155]);
    var v8156 = bufferCounter < length$$15;
    if (v8156) {
      v8156 = audioBufferSize < webAudioMaxBufferSize;
    }
    v4968 = v8156;
  }
  return;
}
function v44(buffer$$12) {
  JAM.call(this.callbackBasedWriteAudioNoCallback, this, [buffer$$12]);
  this.callbackBasedExecuteCallback();
  return;
}
function v43(buffer$$11) {
  JAM.call(this.writeMozAudio, this, [buffer$$11]);
  return;
}
function v42(buffer$$10) {
  JAM.call(this.MOZWriteAudioNoCallback, this, [buffer$$10]);
  this.MOZExecuteCallback();
  return;
}
function v41() {
  try {
    var v10791 = new Float32Array(this.outputBufferSize);
    this.outputBuffer = v10791;
    var v10792 = new Float32Array(this.channels);
    this.lastOutput = v10792;
  } catch (error$$6) {
    this.outputBuffer = [];
    this.lastOutput = [];
  }
  return;
}
function v40(sliceAmount) {
  if (this.noReturn) {
    return sliceAmount;
  } else {
    try {
      var v4971 = this.outputBuffer;
      return JAM.call(v4971.subarray, v4971, [0, sliceAmount], JAM.policy.p1);
    } catch (error$$4) {
      try {
        this.outputBuffer.length = sliceAmount;
        return this.outputBuffer;
      } catch (error$$5) {
        var v4973 = this.outputBuffer;
        return JAM.call(v4973.slice, v4973, [0, sliceAmount], JAM.policy.p1);
      }
    }
  }
  return;
}
function v39(buffer$$9) {
  if (this.noReturn) {
    this.outputBuffer = buffer$$9;
    return buffer$$9.length;
  } else {
    return buffer$$9;
  }
  return;
}
function v38() {
  var toCompile = "var bufferLength = Math.min(buffer.length, this.outputBufferSize);  if ((bufferLength % " + this.channels + ") == 0) {    if (bufferLength > 0) {      var ratioWeight = this.ratioWeight;      var weight = 0;";
  var channel = 0;
  var v4977 = channel < this.channels;
  for (;v4977;) {
    toCompile = toCompile + ("var output" + channel + " = 0;");
    ++channel;
    v4977 = channel < this.channels;
  }
  toCompile = toCompile + "var actualPosition = 0;      var amountToNext = 0;      var alreadyProcessedTail = !this.tailExists;      this.tailExists = false;      var outputBuffer = this.outputBuffer;      var outputOffset = 0;      var currentPosition = 0;      do {        if (alreadyProcessedTail) {          weight = ratioWeight;";
  channel = 0;
  var v4978 = channel < this.channels;
  for (;v4978;) {
    toCompile = toCompile + ("output" + channel + " = 0;");
    ++channel;
    v4978 = channel < this.channels;
  }
  toCompile = toCompile + "}        else {          weight = this.lastWeight;";
  channel = 0;
  var v4979 = channel < this.channels;
  for (;v4979;) {
    toCompile = toCompile + ("output" + channel + " = this.lastOutput[" + channel + "];");
    ++channel;
    v4979 = channel < this.channels;
  }
  toCompile = toCompile + "alreadyProcessedTail = true;        }        while (weight > 0 && actualPosition < bufferLength) {          amountToNext = 1 + actualPosition - currentPosition;          if (weight >= amountToNext) {";
  channel = 0;
  var v4980 = channel < this.channels;
  for (;v4980;) {
    toCompile = toCompile + ("output" + channel + " += buffer[actualPosition++] * amountToNext;");
    ++channel;
    v4980 = channel < this.channels;
  }
  toCompile = toCompile + "currentPosition = actualPosition;            weight -= amountToNext;          }          else {";
  channel = 0;
  var v4981 = channel < this.channels;
  for (;v4981;) {
    var v10166 = "output" + channel + " += buffer[actualPosition";
    var v10413;
    if (channel > 0) {
      v10413 = " + " + channel;
    } else {
      v10413 = "";
    }
    toCompile = toCompile + (v10166 + v10413 + "] * weight;");
    ++channel;
    v4981 = channel < this.channels;
  }
  toCompile = toCompile + "currentPosition += weight;            weight = 0;            break;          }        }        if (weight == 0) {";
  channel = 0;
  var v4982 = channel < this.channels;
  for (;v4982;) {
    toCompile = toCompile + ("outputBuffer[outputOffset++] = output" + channel + " / ratioWeight;");
    ++channel;
    v4982 = channel < this.channels;
  }
  toCompile = toCompile + "}        else {          this.lastWeight = weight;";
  channel = 0;
  var v4983 = channel < this.channels;
  for (;v4983;) {
    toCompile = toCompile + ("this.lastOutput[" + channel + "] = output" + channel + ";");
    ++channel;
    v4983 = channel < this.channels;
  }
  toCompile = toCompile + 'this.tailExists = true;          break;        }      } while (actualPosition < bufferLength);      return this.bufferSlice(outputOffset);    }    else {      return (this.noReturn) ? 0 : [];    }  }  else {    throw(new Error("Buffer was of incorrect sample length."));  }';
  var v10793 = JAM.call(Function, null, ["buffer", toCompile]);
  this.interpolate = v10793;
  return;
}
function v37() {
  var v9539 = this.fromSampleRate > 0;
  if (v9539) {
    v9539 = this.toSampleRate > 0;
  }
  var v8179 = v9539;
  if (v8179) {
    v8179 = this.channels > 0;
  }
  if (v8179) {
    if (this.fromSampleRate == this.toSampleRate) {
      this.resampler = this.bypassResampler;
      this.ratioWeight = 1;
    } else {
      this.compileInterpolationFunction();
      this.resampler = this.interpolate;
      this.ratioWeight = this.fromSampleRate / this.toSampleRate;
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
  var event$$1 = {outputBuffer:this.outputBuffer};
  JAM.call(this.onaudioprocess, this, [event$$1]);
  return;
}
function v35() {
  return;
}
function v34(runner$$2) {
  function RunNextSetup() {
    if (index$$40 < length$$12) {
      try {
        suite$$1.benchmarks[index$$40].Setup();
      } catch (e$$4) {
        JAM.call(suite$$1.NotifyError, suite$$1, [e$$4]);
        return null;
      }
      return RunNextBenchmark;
    }
    suite$$1.NotifyResult();
    return null;
  }
  function RunNextBenchmark() {
    try {
      data$$20 = JAM.call(suite$$1.RunSingleBenchmark, suite$$1, [suite$$1.benchmarks[index$$40], data$$20], JAM.policy.p1);
    } catch (e$$5) {
      JAM.call(suite$$1.NotifyError, suite$$1, [e$$5]);
      return null;
    }
    var v4992;
    if (data$$20 == null) {
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
      v8185[v8186].TearDown();
    } catch (e$$6) {
      JAM.call(suite$$1.NotifyError, suite$$1, [e$$6]);
      return null;
    }
    return RunNextSetup;
  }
  BenchmarkSuite.ResetRNG();
  this.results = [];
  this.runner = runner$$2;
  var length$$12 = this.benchmarks.length;
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
      v8187 = i$$5 < benchmark$$1.deterministicIterations;
    } else {
      v8187 = elapsed < 1E3;
    }
    var v4996 = v8187;
    for (;v4996;) {
      benchmark$$1.run();
      elapsed = new Date - start$$5;
      i$$5++;
      var v8188;
      if (doDeterministic$$1) {
        v8188 = i$$5 < benchmark$$1.deterministicIterations;
      } else {
        v8188 = elapsed < 1E3;
      }
      v4996 = v8188;
    }
    if (data$$19 != null) {
      data$$19.runs = data$$19.runs + i$$5;
      data$$19.elapsed = data$$19.elapsed + elapsed;
    }
    return;
  }
  var config = BenchmarkSuite.config;
  var v4998;
  if (config.doWarmup !== undefined) {
    v4998 = config.doWarmup;
  } else {
    v4998 = benchmark$$1.doWarmup;
  }
  var doWarmup$$1 = v4998;
  var v4999;
  if (config.doDeterministic !== undefined) {
    v4999 = config.doDeterministic;
  } else {
    v4999 = benchmark$$1.doDeterministic;
  }
  var doDeterministic$$1 = v4999;
  var v8193 = !doWarmup$$1;
  if (v8193) {
    v8193 = data$$18 == null;
  }
  if (v8193) {
    data$$18 = {runs:0, elapsed:0};
  }
  if (data$$18 == null) {
    Measure(null);
    return {runs:0, elapsed:0};
  } else {
    Measure(data$$18);
    if (data$$18.runs < benchmark$$1.minIterations) {
      return data$$18;
    }
    var usec = data$$18.elapsed * 1E3 / data$$18.runs;
    var v5004;
    if (benchmark$$1.rmsResult != null) {
      v5004 = benchmark$$1.rmsResult();
    } else {
      v5004 = 0;
    }
    var rms = v5004;
    JAM.call(this.NotifyStep, this, [new BenchmarkResult(benchmark$$1, usec, rms)]);
    return null;
  }
  return;
}
function v32(error$$1) {
  if (this.runner.NotifyError) {
    var v5007 = this.runner;
    JAM.call(v5007.NotifyError, v5007, [this.name, error$$1], JAM.policy.p1);
  }
  if (this.runner.NotifyStep) {
    var v5010 = this.runner;
    JAM.call(v5010.NotifyStep, v5010, [this.name]);
  }
  return;
}
function v31(runner$$1) {
  BenchmarkSuite.scores.push(1);
  if (runner$$1.NotifyResult) {
    JAM.call(runner$$1.NotifyResult, runner$$1, [this.name, "Skipped"], JAM.policy.p1);
  }
  return;
}
function v30() {
  var mean = JAM.call(BenchmarkSuite.GeometricMeanTime, BenchmarkSuite, [this.results]);
  var score$$1 = this.reference[0] / mean;
  BenchmarkSuite.scores.push(score$$1);
  if (this.runner.NotifyResult) {
    var formatted$$1 = JAM.call(BenchmarkSuite.FormatScore, BenchmarkSuite, [100 * score$$1]);
    var v5020 = this.runner;
    JAM.call(v5020.NotifyResult, v5020, [this.name, formatted$$1], JAM.policy.p1);
  }
  if (this.reference.length == 2) {
    var meanLatency = JAM.call(BenchmarkSuite.GeometricMeanLatency, BenchmarkSuite, [this.results]);
    if (meanLatency != 0) {
      var scoreLatency = this.reference[1] / meanLatency;
      BenchmarkSuite.scores.push(scoreLatency);
      if (this.runner.NotifyResult) {
        var formattedLatency = JAM.call(BenchmarkSuite.FormatScore, BenchmarkSuite, [100 * scoreLatency]);
        var v5027 = this.runner;
        JAM.call(v5027.NotifyResult, v5027, [this.name + "Latency", formattedLatency], JAM.policy.p1);
      }
    }
  }
  return;
}
function v29(result$$1) {
  this.results.push(result$$1);
  if (this.runner.NotifyStep) {
    var v5033 = this.runner;
    JAM.call(v5033.NotifyStep, v5033, [result$$1.benchmark.name]);
  }
  return;
}
function v28(value$$27) {
  if (value$$27 > 100) {
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
  var v5038 = i$$4 < measurements$$1.length;
  for (;v5038;) {
    if (measurements$$1[i$$4].latency != 0) {
      log$$2 = log$$2 + Math.log(measurements$$1[i$$4].latency);
      hasLatencyResult = true;
    }
    i$$4++;
    v5038 = i$$4 < measurements$$1.length;
  }
  if (hasLatencyResult) {
    return JAM.call(Math.pow, Math, [Math.E, log$$2 / measurements$$1.length], JAM.policy.p1);
  } else {
    return 0;
  }
  return;
}
function v26(measurements) {
  var log$$1 = 0;
  var i$$3 = 0;
  var v5041 = i$$3 < measurements.length;
  for (;v5041;) {
    log$$1 = log$$1 + Math.log(measurements[i$$3].time);
    i$$3++;
    v5041 = i$$3 < measurements.length;
  }
  return JAM.call(Math.pow, Math, [Math.E, log$$1 / measurements.length], JAM.policy.p1);
}
function v25() {
  var numbers = BenchmarkSuite.scores;
  var log = 0;
  var i$$2 = 0;
  var v5044 = i$$2 < numbers.length;
  for (;v5044;) {
    log = log + Math.log(numbers[i$$2]);
    i$$2++;
    v5044 = i$$2 < numbers.length;
  }
  return JAM.call(Math.pow, Math, [Math.E, log / numbers.length], JAM.policy.p1);
}
function v24() {
  var result = 0;
  var suites$$1 = BenchmarkSuite.suites;
  var i$$1 = 0;
  var v5047 = i$$1 < suites$$1.length;
  for (;v5047;) {
    result = result + suites$$1[i$$1].benchmarks.length;
    i$$1++;
    v5047 = i$$1 < suites$$1.length;
  }
  return result;
}
function v23() {
  function RunStep() {
    var v8224 = continuation;
    if (!v8224) {
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
        if (runner.NotifyStart) {
          JAM.call(runner.NotifyStart, runner, [suite.name]);
        }
        if (skipBenchmarks$$1.indexOf(suite.name) > -1) {
          JAM.call(suite.NotifySkipped, suite, [runner]);
        } else {
          continuation = JAM.call(suite.RunStep, suite, [runner]);
        }
      }
      var v9554 = continuation;
      if (v9554) {
        v9554 = typeof window != "undefined";
      }
      var v8226 = v9554;
      if (v8226) {
        v8226 = window.setTimeout;
      }
      if (v8226) {
        JAM.call(window.setTimeout, window, [RunStep, 25], JAM.policy.p1);
        return;
      }
      var v8227 = continuation;
      if (!v8227) {
        v8227 = index$$39 < length$$11;
      }
      v5053 = v8227;
    }
    if (runner.NotifyScore) {
      var score = BenchmarkSuite.GeometricMean();
      var formatted = JAM.call(BenchmarkSuite.FormatScore, BenchmarkSuite, [100 * score]);
      JAM.call(runner.NotifyScore, runner, [formatted]);
    }
    return;
  }
  var runner = {NotifyStart:ShowBox, NotifyError:AddError, NotifyResult:AddResult, NotifyScore:AddScore};
  var skipBenchmarks$$1 = skipBenchmarks;
  var v5056;
  if (typeof skipBenchmarks$$1 === "undefined") {
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
      seed = seed + 2127912214 + (seed << 12) & 4294967295;
      seed = (seed ^ 3345072700 ^ seed >>> 19) & 4294967295;
      seed = seed + 374761393 + (seed << 5) & 4294967295;
      seed = (seed + 3550635116 ^ seed << 9) & 4294967295;
      seed = seed + 4251993797 + (seed << 3) & 4294967295;
      seed = (seed ^ 3042594569 ^ seed >>> 16) & 4294967295;
      return (seed & 268435455) / 268435456;
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
  if (!v10415) {
    v10415 = performance.mozNow;
  }
  var v10175 = v10415;
  if (!v10175) {
    v10175 = performance.msNow;
  }
  var v9557 = v10175;
  if (!v9557) {
    v9557 = performance.oNow;
  }
  var v8241 = v9557;
  if (!v8241) {
    v8241 = performance.webkitNow;
  }
  var v5065 = v8241;
  if (!v5065) {
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
  BenchmarkSuite.suites.push(this);
  return;
}
function setupGameboy() {
  var v10417 = typeof Uint8Array != "undefined";
  if (v10417) {
    v10417 = typeof Int8Array != "undefined";
  }
  var v10177 = v10417;
  if (v10177) {
    v10177 = typeof Float32Array != "undefined";
  }
  var v9559 = v10177;
  if (v9559) {
    v9559 = typeof Int32Array != "undefined";
  }
  if (!v9559) {
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
  var v5072 = gameboy.instructions <= gameboy.totalInstructions;
  for (;v5072;) {
    gameboy.run();
    GameBoyAudioNode.run();
    v5072 = gameboy.instructions <= gameboy.totalInstructions;
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
    var v5073 = i$$6 < buffer$$8.data.length;
    for (;v5073;) {
      sum = sum + i$$6 * buffer$$8.data[i$$6];
      sum = sum % 1E3;
      i$$6++;
      v5073 = i$$6 < buffer$$8.data.length;
    }
    return;
  }
  function v3(w$$5, h$$4) {
    var result$$2 = {};
    var v10795 = new Uint8Array(w$$5 * h$$4 * 4);
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
      return this.channelData[i$$8];
    }
    var bufferSize = samplesPerCallback;
    var inputChannels = 1;
    var outputChannels = 2;
    GameBoyAudioNode.bufferSize = bufferSize;
    GameBoyAudioNode.outputBuffer = {getChannelData:v11, channelData:[]};
    var i$$7 = 0;
    var v5078 = i$$7 < outputChannels;
    for (;v5078;) {
      var v5076 = GameBoyAudioNode.outputBuffer.channelData;
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
    var v5079 = i$$9 < a.length;
    for (;v5079;) {
      result$$3 = result$$3 + a[i$$9];
      i$$9++;
      v5079 = i$$9 < a.length;
    }
    return result$$3;
  }
  var state = {registerA:gameboy.registerA, registerB:gameboy.registerB, registerC:gameboy.registerC, registerE:gameboy.registerE, registerF:gameboy.registerF, registersHL:gameboy.registersHL, programCounter:gameboy.programCounter, stackPointer:gameboy.stackPointer, sumROM:sum$$1(JAM.call(gameboy.fromTypedArray, gameboy, [gameboy.ROM])), sumMemory:sum$$1(JAM.call(gameboy.fromTypedArray, gameboy, [gameboy.memory])), sumMBCRam:sum$$1(JAM.call(gameboy.fromTypedArray, gameboy, [gameboy.MBCRam])), sumVRam:sum$$1(JAM.call(gameboy.fromTypedArray, 
  gameboy, [gameboy.VRam]))};
  var stateStr = JAM.call(JSON.stringify, JSON, [state]);
  if (typeof expectedGameboyStateStr != "undefined") {
    if (stateStr != expectedGameboyStateStr) {
      JAM.call(alert, null, ["Incorrect final state of processor:\n" + " actual   " + stateStr + "\n" + " expected " + expectedGameboyStateStr]);
    }
  } else {
    JAM.call(alert, null, [stateStr]);
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
    if (dataLength > 0) {
      var bytes = [0, 0, 0];
      var index$$41 = 0;
      var remainder = dataLength % 3;
      var v5096 = data$$21.length % 3 > 0;
      for (;v5096;) {
        JAM.set(data$$21, data$$21.length, " ");
        v5096 = data$$21.length % 3 > 0;
      }
      var v5100 = index$$41 < dataLength;
      for (;v5100;) {
        var v9570 = index$$41;
        index$$41 = index$$41 + 1;
        var v5097 = data$$21.charCodeAt(v9570) & 255;
        var v9571 = index$$41;
        index$$41 = index$$41 + 1;
        var v5098 = data$$21.charCodeAt(v9571) & 255;
        var v9572 = index$$41;
        index$$41 = index$$41 + 1;
        bytes = [v5097, v5098, data$$21.charCodeAt(v9572) & 255];
        base64$$1 = base64$$1 + (toBase64[bytes[0] >> 2] + toBase64[(bytes[0] & 3) << 4 | bytes[1] >> 4] + toBase64[(bytes[1] & 15) << 2 | bytes[2] >> 6] + toBase64[bytes[2] & 63]);
        v5100 = index$$41 < dataLength;
      }
      if (remainder > 0) {
        base64$$1[base64$$1.length - 1] = "=";
        if (remainder == 2) {
          base64$$1[base64$$1.length - 2] = "=";
          base64$$1[base64$$1.length - 3] = toBase64[(bytes[0] & 3) << 4];
        } else {
          base64$$1[base64$$1.length - 2] = toBase64[(bytes[1] & 15) << 2];
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
      v8274 = dataLength$$1 % 4 == 0;
    }
    if (v8274) {
      var sixbits = [0, 0, 0, 0];
      var index$$42 = 0;
      var v5112 = index$$42 < dataLength$$1;
      for (;v5112;) {
        var v9578 = index$$42;
        index$$42 = index$$42 + 1;
        var v5108 = fromBase64.indexOf(data$$22.charAt(v9578));
        var v9579 = index$$42;
        index$$42 = index$$42 + 1;
        var v5109 = fromBase64.indexOf(data$$22.charAt(v9579));
        var v9580 = index$$42;
        index$$42 = index$$42 + 1;
        var v5110 = fromBase64.indexOf(data$$22.charAt(v9580));
        var v9581 = index$$42;
        index$$42 = index$$42 + 1;
        sixbits = [v5108, v5109, v5110, fromBase64.indexOf(data$$22.charAt(v9581))];
        decode64 = decode64 + (String.fromCharCode(sixbits[0] << 2 | sixbits[1] >> 4) + String.fromCharCode((sixbits[1] & 15) << 4 | sixbits[2] >> 2) + String.fromCharCode((sixbits[2] & 3) << 6 | sixbits[3]));
        v5112 = index$$42 < dataLength$$1;
      }
      if (sixbits[3] >= 64) {
        decode64.length = decode64.length - 1;
        if (sixbits[2] >= 64) {
          decode64.length = decode64.length - 1;
        }
      }
    }
  }
  return decode64;
}
function to_little_endian_dword(str$$6) {
  return to_little_endian_word(str$$6) + JAM.call(String.fromCharCode, String, [str$$6 >> 16 & 255, str$$6 >> 24 & 255], JAM.policy.p1);
}
function to_little_endian_word(str$$7) {
  return to_byte(str$$7) + String.fromCharCode(str$$7 >> 8 & 255);
}
function to_byte(str$$8) {
  return String.fromCharCode(str$$8 & 255);
}
function arrayToBase64(arrayIn) {
  var binString = "";
  var length$$13 = arrayIn.length;
  var index$$43 = 0;
  var v5122 = index$$43 < length$$13;
  for (;v5122;) {
    if (typeof arrayIn[index$$43] == "number") {
      binString = binString + String.fromCharCode(arrayIn[index$$43]);
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
    outArray.push(binString$$1.charCodeAt(v9589) & 255);
    v5124 = index$$44 < length$$14;
  }
  return outArray;
}
function Resampler(fromSampleRate, toSampleRate, channels$$1, outputBufferSize, noReturn) {
  this.fromSampleRate = fromSampleRate;
  this.toSampleRate = toSampleRate;
  this.channels = channels$$1 | 0;
  this.outputBufferSize = outputBufferSize;
  this.noReturn = !!noReturn;
  this.initialize();
  return;
}
function XAudioServer(channels$$2, sampleRate$$1, minBufferSize, maxBufferSize, underRunCallback, volume) {
  function v14() {
    return;
  }
  var v5126;
  if (channels$$2 == 2) {
    v5126 = 2;
  } else {
    v5126 = 1;
  }
  this.audioChannels = v5126;
  webAudioMono = this.audioChannels == 1;
  var v5128;
  var v9590 = sampleRate$$1 > 0;
  if (v9590) {
    v9590 = sampleRate$$1 <= 16777215;
  }
  if (v9590) {
    v5128 = sampleRate$$1;
  } else {
    v5128 = 44100;
  }
  XAudioJSSampleRate = v5128;
  var v5129;
  var v9591 = minBufferSize >= samplesPerCallback << 1;
  if (v9591) {
    v9591 = minBufferSize < maxBufferSize;
  }
  if (v9591) {
    var v9592;
    if (webAudioMono) {
      v9592 = 4294967295;
    } else {
      v9592 = 4294967294;
    }
    v5129 = minBufferSize & v9592;
  } else {
    v5129 = samplesPerCallback << 1;
  }
  webAudioMinBufferSize = v5129;
  var v5130;
  if (Math.floor(maxBufferSize) > webAudioMinBufferSize + this.audioChannels) {
    var v9595;
    if (webAudioMono) {
      v9595 = 4294967295;
    } else {
      v9595 = 4294967294;
    }
    v5130 = maxBufferSize & v9595;
  } else {
    v5130 = minBufferSize << 1;
  }
  webAudioMaxBufferSize = v5130;
  var v5131;
  if (typeof underRunCallback == "function") {
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
  if (v9597) {
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
    var v5133 = (audioSampleIndice = audioSampleIndice + 1) < size$$5;
    do {
      newBuffer[audioSampleIndice] = 0;
      v5133 = (audioSampleIndice = audioSampleIndice + 1) < size$$5;
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
    copyBinaryStringLeft = copyBinaryStringLeft + String.fromCharCode((JAM.call(Math.min, Math, [JAM.call(Math.max, Math, [resampled[v10600] + 1, 0], JAM.policy.p1), 2], JAM.policy.p1) * 16383 | 0) + 12288);
    var v10601 = resampleBufferStart;
    resampleBufferStart = resampleBufferStart + 1;
    copyBinaryStringRight = copyBinaryStringRight + String.fromCharCode((JAM.call(Math.min, Math, [JAM.call(Math.max, Math, [resampled[v10601] + 1, 0], JAM.policy.p1), 2], JAM.policy.p1) * 16383 | 0) + 12288);
    if (resampleBufferStart == resampleBufferSize) {
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
    copyBinaryString = copyBinaryString + String.fromCharCode((JAM.call(Math.min, Math, [JAM.call(Math.max, Math, [resampled[v10602] + 1, 0], JAM.policy.p1), 2], JAM.policy.p1) * 16383 | 0) + 12288);
    if (resampleBufferStart == resampleBufferSize) {
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
  var buffer1 = JAM.call(v5138.getChannelData, v5138, [0]);
  var v5139 = event$$3.outputBuffer;
  var buffer2 = JAM.call(v5139.getChannelData, v5139, [1]);
  resampleRefill();
  if (!webAudioMono) {
    var v8307 = index$$49 < samplesPerCallback;
    if (v8307) {
      v8307 = resampleBufferStart != resampleBufferEnd;
    }
    var v5143 = v8307;
    for (;v5143;) {
      var v8308 = resampleBufferStart;
      resampleBufferStart = resampleBufferStart + 1;
      buffer1[index$$49] = resampled[v8308] * XAudioJSVolume;
      var v5141 = index$$49;
      index$$49 = index$$49 + 1;
      var v9601 = resampleBufferStart;
      resampleBufferStart = resampleBufferStart + 1;
      buffer2[v5141] = resampled[v9601] * XAudioJSVolume;
      if (resampleBufferStart == resampleBufferSize) {
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
      buffer2[index$$49] = buffer1[index$$49] = resampled[v8312] * XAudioJSVolume;
      ++index$$49;
      if (resampleBufferStart == resampleBufferSize) {
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
  if (audioBufferSize > 0) {
    var resampleLength = JAM.call(resampleControl.resampler, resampleControl, [getBufferSamples()]);
    var resampledResult = resampleControl.outputBuffer;
    var index2 = 0;
    var v5154 = index2 < resampleLength;
    for (;v5154;) {
      var v5150 = resampleBufferEnd;
      resampleBufferEnd = resampleBufferEnd + 1;
      JAM.set(resampled, v5150, resampledResult[index2]);
      if (resampleBufferEnd == resampleBufferSize) {
        resampleBufferEnd = 0;
      }
      if (resampleBufferStart == resampleBufferEnd) {
        ++resampleBufferStart;
        if (resampleBufferStart == resampleBufferSize) {
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
  if (resampleBufferStart <= resampleBufferEnd) {
    v9602 = 0;
  } else {
    v9602 = resampleBufferSize;
  }
  return v9602 + resampleBufferEnd - resampleBufferStart;
}
function getBufferSamples() {
  try {
    return JAM.call(audioContextSampleBuffer.subarray, audioContextSampleBuffer, [0, audioBufferSize], JAM.policy.p1);
  } catch (error$$12) {
    try {
      audioContextSampleBuffer.length = audioBufferSize;
      return audioContextSampleBuffer;
    } catch (error$$13) {
      return JAM.call(audioContextSampleBuffer.slice, audioContextSampleBuffer, [0, audioBufferSize], JAM.policy.p1);
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
  resampleBufferSize = JAM.call(Math.max, Math, [webAudioMaxBufferSize * Math.ceil(XAudioJSSampleRate / APISampleRate), samplesPerCallback], JAM.policy.p1) << 1;
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
  if (!v8316) {
    v8316 = 0;
  }
  var v10797 = Math.abs(v8316);
  this.widthOriginal = v10797;
  var v8317 = parseInt(heightOriginal);
  if (!v8317) {
    v8317 = 0;
  }
  var v10798 = Math.abs(v8317);
  this.heightOriginal = v10798;
  var v8318 = parseInt(targetWidth);
  if (!v8318) {
    v8318 = 0;
  }
  var v10799 = Math.abs(v8318);
  this.targetWidth = v10799;
  var v8319 = parseInt(targetHeight);
  if (!v8319) {
    v8319 = 0;
  }
  var v10800 = Math.abs(v8319);
  this.targetHeight = v10800;
  var v5162;
  if (!!blendAlpha) {
    v5162 = 4;
  } else {
    v5162 = 3;
  }
  this.colorChannels = v5162;
  this.interpolationPass = !!interpolationPass;
  this.targetWidthMultipliedByChannels = this.targetWidth * this.colorChannels;
  this.originalWidthMultipliedByChannels = this.widthOriginal * this.colorChannels;
  this.originalHeightMultipliedByChannels = this.heightOriginal * this.colorChannels;
  this.widthPassResultSize = this.targetWidthMultipliedByChannels * this.heightOriginal;
  this.finalResultSize = this.targetWidthMultipliedByChannels * this.targetHeight;
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
  this.dutyLookup = [[false, false, false, false, false, false, false, true], [true, false, false, false, false, false, false, true], [true, false, false, false, false, true, true, true], [false, true, true, true, true, true, true, false]];
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
  this.ROMBanks[82] = 72;
  this.ROMBanks[83] = 80;
  this.ROMBanks[84] = 96;
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
  this.offscreenRGBCount = this.onscreenWidth * this.onscreenHeight * 4;
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
  if (GameBoyEmulatorInitialized()) {
    if (!GameBoyEmulatorPlaying()) {
      gameboy.stopEmulator = gameboy.stopEmulator & 1;
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
  if (GameBoyEmulatorInitialized()) {
    if (GameBoyEmulatorPlaying()) {
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
  if (v8325) {
    clearInterval(gbRunInterval);
    gameboy.stopEmulator = gameboy.stopEmulator | 2;
    cout("The previous emulation has been cleared.", 0);
  } else {
    cout("No previous emulation was found to be cleared.", 0);
  }
  return;
}
function save() {
  if (GameBoyEmulatorInitialized()) {
    try {
      var state_suffix = 0;
      var v5188 = findValue("FREEZE_" + gameboy.name + "_" + state_suffix) != null;
      for (;v5188;) {
        state_suffix++;
        v5188 = findValue("FREEZE_" + gameboy.name + "_" + state_suffix) != null;
      }
      JAM.call(setValue, null, ["FREEZE_" + gameboy.name + "_" + state_suffix, gameboy.saveState()], JAM.policy.p1);
      cout("Saved the current state as: FREEZE_" + gameboy.name + "_" + state_suffix, 0);
    } catch (error$$27) {
      cout('Could not save the current emulation state("' + error$$27.message + '").', 2);
    }
  } else {
    cout("GameBoy core cannot be saved while it has not been initialized.", 1);
  }
  return;
}
function saveSRAM() {
  if (GameBoyEmulatorInitialized()) {
    if (gameboy.cBATT) {
      try {
        var sram = gameboy.saveSRAMState();
        if (sram.length > 0) {
          cout("Saving the SRAM...", 0);
          if (findValue("SRAM_" + gameboy.name) != null) {
            cout("Deleting the old SRAM save due to outdated format.", 0);
            deleteValue("SRAM_" + gameboy.name);
          }
          JAM.call(setValue, null, ["B64_SRAM_" + gameboy.name, arrayToBase64(sram)], JAM.policy.p1);
        } else {
          cout("SRAM could not be saved because it was empty.", 1);
        }
      } catch (error$$28) {
        cout('Could not save the current emulation state("' + error$$28.message + '").', 2);
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
  if (GameBoyEmulatorInitialized()) {
    if (gameboy.cTIMER) {
      try {
        cout("Saving the RTC...", 0);
        JAM.call(setValue, null, ["RTC_" + gameboy.name, gameboy.saveRTCState()], JAM.policy.p1);
      } catch (error$$29) {
        cout('Could not save the RTC of the current emulation state("' + error$$29.message + '").', 2);
      }
    }
  } else {
    cout("GameBoy core cannot be saved while it has not been initialized.", 1);
  }
  return;
}
function autoSave() {
  if (GameBoyEmulatorInitialized()) {
    cout("Automatically saving the SRAM.", 0);
    saveSRAM();
    saveRTC();
  }
  return;
}
function openSRAM(filename) {
  try {
    if (findValue("B64_SRAM_" + filename) != null) {
      cout("Found a previous SRAM state (Will attempt to load).", 0);
      return base64ToArray(findValue("B64_SRAM_" + filename));
    } else {
      if (findValue("SRAM_" + filename) != null) {
        cout("Found a previous SRAM state (Will attempt to load).", 0);
        return findValue("SRAM_" + filename);
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
    if (findValue("RTC_" + filename$$1) != null) {
      cout("Found a previous RTC state (Will attempt to load).", 0);
      return findValue("RTC_" + filename$$1);
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
    if (findValue(filename$$2) != null) {
      try {
        clearLastEmulation();
        cout("Attempting to run a saved emulation state.", 0);
        gameboy = new GameBoyCore(canvas$$2, "");
        gameboy.savedStateFileName = filename$$2;
        JAM.call(gameboy.returnFromState, gameboy, [findValue(filename$$2)]);
        run();
      } catch (error$$32) {
        JAM.call(alert, null, [error$$32.message + " file: " + error$$32.fileName + " line: " + error$$32.lineNumber]);
      }
    } else {
      cout("Could not find the save state " + filename$$2 + '".', 2);
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
  if (v8347) {
    if (blobData.blobs.length > 0) {
      var index$$68 = 0;
      var v5227 = index$$68 < blobData.blobs.length;
      for (;v5227;) {
        cout('Importing blob "' + blobData.blobs[index$$68].blobID + '"', 0);
        if (blobData.blobs[index$$68].blobContent) {
          var v9626 = blobData.blobs[index$$68].blobID;
          if (JAM.call(v9626.substring, v9626, [0, 5], JAM.policy.p1) == "SRAM_") {
            JAM.call(setValue, null, ["B64_" + blobData.blobs[index$$68].blobID, base64(blobData.blobs[index$$68].blobContent)], JAM.policy.p1);
          } else {
            JAM.call(setValue, null, [blobData.blobs[index$$68].blobID, JSON.parse(blobData.blobs[index$$68].blobContent)], JAM.policy.p1);
          }
        } else {
          if (blobData.blobs[index$$68].blobID) {
            cout('Save file imported had blob "' + blobData.blobs[index$$68].blobID + '" with no blob data interpretable.', 2);
          } else {
            cout("Blob chunk information missing completely.", 2);
          }
        }
        ++index$$68;
        v5227 = index$$68 < blobData.blobs.length;
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
  var totalLength = saveString.length + 4 + (1 + consoleID.length) + (1 + keyName.length + (4 + encodedData$$1.length));
  saveString = saveString + to_little_endian_dword(totalLength);
  saveString = saveString + to_byte(consoleID.length);
  saveString = saveString + consoleID;
  saveString = saveString + to_byte(keyName.length);
  saveString = saveString + keyName;
  saveString = saveString + to_little_endian_dword(encodedData$$1.length);
  saveString = saveString + encodedData$$1;
  return saveString;
}
function generateMultiBlob(blobPairs) {
  var consoleID$$1 = "GameBoy";
  var totalLength$$1 = 13 + 4 + 1 + consoleID$$1.length;
  var saveString$$1 = to_byte(consoleID$$1.length);
  saveString$$1 = saveString$$1 + consoleID$$1;
  var keyName$$1 = "";
  var encodedData$$2 = "";
  var index$$69 = 0;
  var v5237 = index$$69 < blobPairs.length;
  for (;v5237;) {
    keyName$$1 = blobPairs[index$$69][0];
    encodedData$$2 = blobPairs[index$$69][1];
    saveString$$1 = saveString$$1 + to_byte(keyName$$1.length);
    saveString$$1 = saveString$$1 + keyName$$1;
    saveString$$1 = saveString$$1 + to_little_endian_dword(encodedData$$2.length);
    saveString$$1 = saveString$$1 + encodedData$$2;
    totalLength$$1 = totalLength$$1 + (1 + keyName$$1.length + 4 + encodedData$$2.length);
    ++index$$69;
    v5237 = index$$69 < blobPairs.length;
  }
  saveString$$1 = "EMULATOR_DATA" + to_little_endian_dword(totalLength$$1) + saveString$$1;
  return saveString$$1;
}
function decodeBlob(blobData$$1) {
  var length$$21 = blobData$$1.length;
  var blobProperties = {};
  blobProperties.consoleID = null;
  var blobsCount = -1;
  blobProperties.blobs = [];
  if (length$$21 > 17) {
    if (JAM.call(blobData$$1.substring, blobData$$1, [0, 13], JAM.policy.p1) == "EMULATOR_DATA") {
      length$$21 = JAM.call(Math.min, Math, [(blobData$$1.charCodeAt(16) & 255) << 24 | (blobData$$1.charCodeAt(15) & 255) << 16 | (blobData$$1.charCodeAt(14) & 255) << 8 | blobData$$1.charCodeAt(13) & 255, length$$21], JAM.policy.p1);
      var consoleIDLength = blobData$$1.charCodeAt(17) & 255;
      if (length$$21 > 17 + consoleIDLength) {
        var v10804 = JAM.call(blobData$$1.substring, blobData$$1, [18, 18 + consoleIDLength], JAM.policy.p1);
        blobProperties.consoleID = v10804;
        var blobIDLength = 0;
        var blobLength = 0;
        var index$$70 = 18 + consoleIDLength;
        var v5252 = index$$70 < length$$21;
        for (;v5252;) {
          var v8379 = index$$70;
          index$$70 = index$$70 + 1;
          blobIDLength = blobData$$1.charCodeAt(v8379) & 255;
          if (index$$70 + blobIDLength < length$$21) {
            blobProperties.blobs[blobsCount = blobsCount + 1] = {};
            var v5245 = blobProperties.blobs[blobsCount];
            var v10805 = JAM.call(blobData$$1.substring, blobData$$1, [index$$70, index$$70 + blobIDLength], JAM.policy.p1);
            v5245.blobID = v10805;
            index$$70 = index$$70 + blobIDLength;
            if (index$$70 + 4 < length$$21) {
              blobLength = (blobData$$1.charCodeAt(index$$70 + 3) & 255) << 24 | (blobData$$1.charCodeAt(index$$70 + 2) & 255) << 16 | (blobData$$1.charCodeAt(index$$70 + 1) & 255) << 8 | blobData$$1.charCodeAt(index$$70) & 255;
              index$$70 = index$$70 + 4;
              if (index$$70 + blobLength <= length$$21) {
                var v5248 = blobProperties.blobs[blobsCount];
                var v10806 = JAM.call(blobData$$1.substring, blobData$$1, [index$$70, index$$70 + blobLength], JAM.policy.p1);
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
  var v5257 = index$$71 < settings[3].length;
  for (;v5257;) {
    if (settings[3][index$$71] == key$$15) {
      return index$$71;
    }
    index$$71++;
    v5257 = index$$71 < settings[3].length;
  }
  return -1;
}
function GameBoyEmulatorInitialized() {
  var v5258 = typeof gameboy == "object";
  if (v5258) {
    v5258 = gameboy != null;
  }
  return v5258;
}
function GameBoyEmulatorPlaying() {
  return (gameboy.stopEmulator & 2) == 0;
}
function GameBoyKeyDown(e$$7) {
  var v8395 = GameBoyEmulatorInitialized();
  if (v8395) {
    v8395 = GameBoyEmulatorPlaying();
  }
  if (v8395) {
    var keycode = matchKey(e$$7.keyCode);
    var v8396 = keycode >= 0;
    if (v8396) {
      v8396 = keycode < 8;
    }
    if (v8396) {
      JAM.call(gameboy.JoyPadEvent, gameboy, [keycode, true], JAM.policy.p1);
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
  if (v8397) {
    var keycode$$1 = matchKey(e$$8.keyCode);
    var v8398 = keycode$$1 >= 0;
    if (v8398) {
      v8398 = keycode$$1 < 8;
    }
    if (v8398) {
      JAM.call(gameboy.JoyPadEvent, gameboy, [keycode$$1, false], JAM.policy.p1);
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
  if (v8399) {
    var v8400 = e$$9.gamma;
    if (!v8400) {
      v8400 = e$$9.beta;
    }
    if (v8400) {
      JAM.call(gameboy.GyroEvent, gameboy, [e$$9.gamma * Math.PI / 180, e$$9.beta * Math.PI / 180], JAM.policy.p1);
    } else {
      JAM.call(gameboy.GyroEvent, gameboy, [e$$9.x, e$$9.y], JAM.policy.p1);
    }
    try {
      e$$9.preventDefault();
    } catch (error$$36) {
    }
  }
  return;
}
function initNewCanvas() {
  if (GameBoyEmulatorInitialized()) {
    gameboy.canvas.width = gameboy.canvas.clientWidth;
    gameboy.canvas.height = gameboy.canvas.clientHeight;
  }
  return;
}
function initNewCanvasSize() {
  if (GameBoyEmulatorInitialized()) {
    if (!settings[12]) {
      var v8406 = gameboy.onscreenWidth != 160;
      if (!v8406) {
        v8406 = gameboy.onscreenHeight != 144;
      }
      if (v8406) {
        gameboy.initLCD();
      }
    } else {
      var v8407 = gameboy.onscreenWidth != gameboy.canvas.clientWidth;
      if (!v8407) {
        v8407 = gameboy.onscreenHeight != gameboy.canvas.clientHeight;
      }
      if (v8407) {
        gameboy.initLCD();
      }
    }
  }
  return;
}
function ShowBox(name$$32) {
  function v16(entry) {
    if (name$$32.valueOf() === entry.valueOf()) {
      var box1 = document.getElementById("Box-" + name$$32 + "Latency");
      box1.style.visibility = "visible";
    }
    return;
  }
  var box = document.getElementById("Box-" + name$$32);
  box.style.visibility = "visible";
  var bar = document.getElementById("progress-bar").style.width = "" + (completed = completed + 1) / benchmarks * 100 + "%";
  latencyBenchmarks.forEach(v16);
  return;
}
function AddResult(name$$33, result$$4) {
  console.log(name$$33 + ": " + result$$4);
  var box$$1 = document.getElementById("Result-" + name$$33);
  JAM.set(box$$1, "innerHTML", result$$4);
  return;
}
function AddError(name$$34, error$$37) {
  console.log(name$$34 + ": " + error$$37.message);
  if (error$$37 == "TypedArrayUnsupported") {
    AddResult(name$$34, "<b>Unsupported</b>");
  } else {
    if (error$$37 == "PerformanceNowUnsupported") {
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
    JAM.set(status, "innerHTML", "Octane Score: " + score$$2);
  } else {
    JAM.set(status, "innerHTML", "Octane Score (incomplete): " + score$$2);
  }
  document.getElementById("progress-bar-container").style.visibility = "hidden";
  document.getElementById("bottom-text").style.visibility = "visible";
  document.getElementById("inside-anchor").removeChild(document.getElementById("bar-appendix"));
  document.getElementById("alertbox").style.visibility = "hidden";
  return;
}
function Run() {
  JAM.set(document.getElementById("main-banner"), "innerHTML", "Running Octane...");
  JAM.set(document.getElementById("bar-appendix"), "innerHTML", '<br/><div class="progress progress-striped" id="progress-bar-container" style="visibility:hidden"><div class="bar"style="width: 0%;" id="progress-bar"></div></div>');
  var anchor = document.getElementById("run-octane");
  var parent = document.getElementById("main-container");
  JAM.call(parent.appendChild, parent, [document.getElementById("inside-anchor")]);
  parent.removeChild(anchor);
  JAM.set(document.getElementById("startup-text"), "innerHTML", "");
  document.getElementById("progress-bar-container").style.visibility = "visible";
  BenchmarkSuite.RunSuites();
  return;
}
function CheckCompatibility() {
  var v8420 = typeof Uint8Array != "undefined";
  if (v8420) {
    v8420 = typeof Float64Array != "undefined";
  }
  var v5300 = v8420;
  if (v5300) {
    v5300 = typeof(new Uint8Array(0)).subarray != "undefined";
  }
  var hasTypedArrays = v5300;
  if (!hasTypedArrays) {
    console.log("Typed Arrays not supported");
    document.getElementById("alertbox").style.display = "block";
  }
  if (window.document.URL.indexOf("skip_zlib=1") >= 0) {
    skipBenchmarks.push("zlib");
  }
  if (window.document.URL.indexOf("auto=1") >= 0) {
    Run();
  }
  return;
}
function Load() {
  JAM.call(setTimeout, null, [CheckCompatibility, 200]);
  return;
}
var performance = performance || {};
var v5305 = performance;
var v10807 = v17();
v5305.now = v10807;
BenchmarkResult.prototype.valueOf = v18;
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
BenchmarkSuite.prototype.NotifyStep = v29;
BenchmarkSuite.prototype.NotifyResult = v30;
BenchmarkSuite.prototype.NotifySkipped = v31;
BenchmarkSuite.prototype.NotifyError = v32;
BenchmarkSuite.prototype.RunSingleBenchmark = v33;
BenchmarkSuite.prototype.RunStep = v34;
var GameboyBenchmark = new BenchmarkSuite("Gameboy", [26288412], [new Benchmark]);
var decoded_gameboy_rom = null;
var expectedGameboyStateStr = '{"registerA":160,"registerB":255,"registerC":255,"registerE":11,' + '"registersHL":51600,"programCounter":24309,"stackPointer":49706,' + '"sumROM":10171578,"sumMemory":3435856,"sumMBCRam":234598,"sumVRam":0}';
var GameBoyWindow = {};
var GameBoyAudioNode = {bufferSize:0, onaudioprocess:null, connect:v35, run:v36};
var mock_date_time_counter = 0;
var toBase64 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "/", "="];
var fromBase64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
Resampler.prototype.initialize = v37;
Resampler.prototype.compileInterpolationFunction = v38;
Resampler.prototype.bypassResampler = v39;
Resampler.prototype.bufferSlice = v40;
Resampler.prototype.initializeBuffers = v41;
XAudioServer.prototype.MOZWriteAudio = v42;
XAudioServer.prototype.MOZWriteAudioNoCallback = v43;
XAudioServer.prototype.callbackBasedWriteAudio = v44;
XAudioServer.prototype.callbackBasedWriteAudioNoCallback = v45;
XAudioServer.prototype.writeAudio = v46;
XAudioServer.prototype.writeAudioNoCallback = v47;
XAudioServer.prototype.remainingBuffer = v48;
XAudioServer.prototype.MOZExecuteCallback = v49;
XAudioServer.prototype.callbackBasedExecuteCallback = v50;
XAudioServer.prototype.executeCallback = v51;
XAudioServer.prototype.initializeAudio = v52;
XAudioServer.prototype.preInitializeMozAudio = v53;
XAudioServer.prototype.initializeMozAudio = v54;
XAudioServer.prototype.initializeWebAudio = v55;
XAudioServer.prototype.initializeFlashAudio = v57;
XAudioServer.prototype.changeVolume = v58;
XAudioServer.prototype.writeMozAudio = v59;
XAudioServer.prototype.checkFlashInit = v60;
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
Resize.prototype.initialize = v62;
Resize.prototype.resizeWidthRGB = v63;
Resize.prototype.resizeWidthInterpolatedRGB = v64;
Resize.prototype.resizeWidthRGBA = v65;
Resize.prototype.resizeWidthInterpolatedRGBA = v66;
Resize.prototype.resizeHeightRGB = v67;
Resize.prototype.resizeHeightInterpolated = v68;
Resize.prototype.resizeHeightRGBA = v69;
Resize.prototype.resizeHeightInterpolatedRGBA = v70;
Resize.prototype.resize = v71;
Resize.prototype.bypassResizer = v72;
Resize.prototype.initializeFirstPassBuffers = v73;
Resize.prototype.initializeSecondPassBuffers = v74;
Resize.prototype.generateFloatBuffer = v75;
Resize.prototype.generateUint8Buffer = v76;
Resize.prototype.checkForOperaMathBug = v77;
GameBoyCore.prototype.GBBOOTROM = [];
GameBoyCore.prototype.GBCBOOTROM = [];
GameBoyCore.prototype.ffxxDump = [15, 0, 124, 255, 0, 0, 0, 248, 255, 255, 255, 255, 255, 255, 255, 1, 128, 191, 243, 255, 191, 255, 63, 0, 255, 191, 127, 255, 159, 255, 191, 255, 255, 0, 0, 191, 119, 243, 241, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 145, 128, 0, 0, 0, 0, 0, 252, 0, 0, 0, 0, 255, 126, 255, 254, 255, 255, 255, 255, 255, 255, 62, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 
192, 255, 193, 0, 254, 255, 255, 255, 248, 255, 0, 0, 0, 143, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 206, 237, 102, 102, 204, 13, 0, 11, 3, 115, 0, 131, 0, 12, 0, 13, 0, 8, 17, 31, 136, 137, 0, 14, 220, 204, 110, 230, 221, 221, 217, 153, 187, 187, 103, 99, 110, 14, 236, 204, 221, 220, 153, 159, 187, 185, 51, 62, 69, 236, 82, 250, 8, 183, 7, 93, 1, 253, 192, 255, 8, 252, 0, 229, 11, 248, 194, 206, 244, 249, 15, 127, 69, 109, 61, 254, 70, 151, 51, 94, 8, 239, 241, 255, 134, 131, 36, 116, 18, 
252, 0, 159, 180, 183, 6, 213, 208, 122, 0, 158, 4, 95, 65, 47, 29, 119, 54, 117, 129, 170, 112, 58, 152, 209, 113, 2, 77, 1, 193, 255, 13, 0, 211, 5, 249, 0, 11, 0];
GameBoyCore.prototype.OPCODE = [v78, v79, v80, v81, v82, v83, v84, v85, v86, v87, v88, v89, v90, v91, v92, v93, v94, v95, v96, v97, v98, v99, v100, v101, v102, v103, v104, v105, v106, v107, v108, v109, v110, v111, v112, v113, v114, v115, v116, v117, v118, v119, v120, v121, v122, v123, v124, v125, v126, v127, v128, v129, v130, v131, v132, v133, v134, v135, v136, v137, v138, v139, v140, v141, v142, v143, v144, v145, v146, v147, v148, v149, v150, v151, v152, v153, v154, v155, v156, v157, v158, v159, 
v160, v161, v162, v163, v164, v165, v166, v167, v168, v169, v170, v171, v172, v173, v174, v175, v176, v177, v178, v179, v180, v181, v182, v183, v184, v185, v186, v187, v188, v189, v190, v191, v192, v193, v194, v195, v196, v197, v198, v199, v200, v201, v202, v203, v204, v205, v206, v207, v208, v209, v210, v211, v212, v213, v214, v215, v216, v217, v218, v219, v220, v221, v222, v223, v224, v225, v226, v227, v228, v229, v230, v231, v232, v233, v234, v235, v236, v237, v238, v239, v240, v241, v242, v243, 
v244, v245, v246, v247, v248, v249, v250, v251, v252, v253, v254, v255, v256, v257, v258, v259, v260, v261, v262, v263, v264, v265, v266, v267, v268, v269, v270, v271, v272, v273, v274, v275, v276, v277, v278, v279, v280, v281, v282, v283, v284, v285, v286, v287, v288, v289, v290, v291, v292, v293, v294, v295, v296, v297, v298, v299, v300, v301, v302, v303, v304, v305, v306, v307, v308, v309, v310, v311, v312, v313, v314, v315, v316, v317, v318, v319, v320, v321, v322, v323, v324, v325, v326, v327, 
v328, v329, v330, v331, v332, v333];
GameBoyCore.prototype.CBOPCODE = [v334, v335, v336, v337, v338, v339, v340, v341, v342, v343, v344, v345, v346, v347, v348, v349, v350, v351, v352, v353, v354, v355, v356, v357, v358, v359, v360, v361, v362, v363, v364, v365, v366, v367, v368, v369, v370, v371, v372, v373, v374, v375, v376, v377, v378, v379, v380, v381, v382, v383, v384, v385, v386, v387, v388, v389, v390, v391, v392, v393, v394, v395, v396, v397, v398, v399, v400, v401, v402, v403, v404, v405, v406, v407, v408, v409, v410, v411, 
v412, v413, v414, v415, v416, v417, v418, v419, v420, v421, v422, v423, v424, v425, v426, v427, v428, v429, v430, v431, v432, v433, v434, v435, v436, v437, v438, v439, v440, v441, v442, v443, v444, v445, v446, v447, v448, v449, v450, v451, v452, v453, v454, v455, v456, v457, v458, v459, v460, v461, v462, v463, v464, v465, v466, v467, v468, v469, v470, v471, v472, v473, v474, v475, v476, v477, v478, v479, v480, v481, v482, v483, v484, v485, v486, v487, v488, v489, v490, v491, v492, v493, v494, v495, 
v496, v497, v498, v499, v500, v501, v502, v503, v504, v505, v506, v507, v508, v509, v510, v511, v512, v513, v514, v515, v516, v517, v518, v519, v520, v521, v522, v523, v524, v525, v526, v527, v528, v529, v530, v531, v532, v533, v534, v535, v536, v537, v538, v539, v540, v541, v542, v543, v544, v545, v546, v547, v548, v549, v550, v551, v552, v553, v554, v555, v556, v557, v558, v559, v560, v561, v562, v563, v564, v565, v566, v567, v568, v569, v570, v571, v572, v573, v574, v575, v576, v577, v578, v579, 
v580, v581, v582, v583, v584, v585, v586, v587, v588, v589];
GameBoyCore.prototype.TICKTable = [4, 12, 8, 8, 4, 4, 8, 4, 20, 8, 8, 8, 4, 4, 8, 4, 4, 12, 8, 8, 4, 4, 8, 4, 12, 8, 8, 8, 4, 4, 8, 4, 8, 12, 8, 8, 4, 4, 8, 4, 8, 8, 8, 8, 4, 4, 8, 4, 8, 12, 8, 8, 12, 12, 12, 4, 8, 8, 8, 8, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 8, 8, 8, 8, 8, 8, 4, 8, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 
4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 8, 12, 12, 16, 12, 16, 8, 16, 8, 16, 12, 0, 12, 24, 8, 16, 8, 12, 12, 4, 12, 16, 8, 16, 8, 16, 12, 4, 12, 4, 8, 16, 12, 12, 8, 4, 4, 16, 8, 16, 16, 4, 16, 4, 4, 4, 8, 16, 12, 12, 8, 4, 4, 16, 8, 16, 12, 8, 16, 4, 0, 4, 8, 16];
GameBoyCore.prototype.SecondaryTICKTable = [8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 12, 8, 8, 8, 8, 8, 8, 8, 12, 8, 8, 8, 8, 8, 8, 8, 12, 8, 8, 8, 8, 8, 8, 8, 12, 8, 8, 8, 8, 8, 8, 8, 12, 8, 8, 8, 8, 8, 8, 8, 12, 8, 8, 8, 8, 8, 8, 8, 12, 8, 8, 8, 8, 8, 8, 8, 12, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 
8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8];
GameBoyCore.prototype.saveSRAMState = v590;
GameBoyCore.prototype.saveRTCState = v591;
GameBoyCore.prototype.saveState = v592;
GameBoyCore.prototype.returnFromState = v593;
GameBoyCore.prototype.returnFromRTCState = v594;
GameBoyCore.prototype.start = v595;
GameBoyCore.prototype.initMemory = v596;
GameBoyCore.prototype.generateCacheArray = v597;
GameBoyCore.prototype.initSkipBootstrap = v598;
GameBoyCore.prototype.initBootstrap = v599;
GameBoyCore.prototype.ROMLoad = v600;
GameBoyCore.prototype.getROMImage = v601;
GameBoyCore.prototype.interpretCartridge = v602;
GameBoyCore.prototype.disableBootROM = v603;
GameBoyCore.prototype.initializeTiming = v604;
GameBoyCore.prototype.setupRAM = v605;
GameBoyCore.prototype.MBCRAMUtilized = v606;
GameBoyCore.prototype.recomputeDimension = v607;
GameBoyCore.prototype.initLCD = v608;
GameBoyCore.prototype.graphicsBlit = v609;
GameBoyCore.prototype.JoyPadEvent = v610;
GameBoyCore.prototype.GyroEvent = v611;
GameBoyCore.prototype.initSound = v612;
GameBoyCore.prototype.changeVolume = v613;
GameBoyCore.prototype.initAudioBuffer = v614;
GameBoyCore.prototype.intializeWhiteNoise = v615;
GameBoyCore.prototype.audioUnderrunAdjustment = v616;
GameBoyCore.prototype.initializeAudioStartState = v617;
GameBoyCore.prototype.outputAudio = v618;
GameBoyCore.prototype.generateAudio = v619;
GameBoyCore.prototype.generateAudioFake = v620;
GameBoyCore.prototype.audioJIT = v621;
GameBoyCore.prototype.audioComputeSequencer = v622;
GameBoyCore.prototype.clockAudioLength = v623;
GameBoyCore.prototype.clockAudioSweep = v624;
GameBoyCore.prototype.runAudioSweep = v625;
GameBoyCore.prototype.clockAudioEnvelope = v626;
GameBoyCore.prototype.computeAudioChannels = v627;
GameBoyCore.prototype.channel1EnableCheck = v628;
GameBoyCore.prototype.channel1VolumeEnableCheck = v629;
GameBoyCore.prototype.channel1OutputLevelCache = v630;
GameBoyCore.prototype.channel1OutputLevelSecondaryCache = v631;
GameBoyCore.prototype.channel1OutputLevelTrimaryCache = v632;
GameBoyCore.prototype.channel2EnableCheck = v633;
GameBoyCore.prototype.channel2VolumeEnableCheck = v634;
GameBoyCore.prototype.channel2OutputLevelCache = v635;
GameBoyCore.prototype.channel2OutputLevelSecondaryCache = v636;
GameBoyCore.prototype.channel2OutputLevelTrimaryCache = v637;
GameBoyCore.prototype.channel3EnableCheck = v638;
GameBoyCore.prototype.channel3OutputLevelCache = v639;
GameBoyCore.prototype.channel3OutputLevelSecondaryCache = v640;
GameBoyCore.prototype.channel4EnableCheck = v641;
GameBoyCore.prototype.channel4VolumeEnableCheck = v642;
GameBoyCore.prototype.channel4OutputLevelCache = v643;
GameBoyCore.prototype.channel4OutputLevelSecondaryCache = v644;
GameBoyCore.prototype.mixerOutputLevelCache = v645;
GameBoyCore.prototype.channel3UpdateCache = v646;
GameBoyCore.prototype.channel3WriteRAM = v647;
GameBoyCore.prototype.channel4UpdateCache = v648;
GameBoyCore.prototype.run = v649;
GameBoyCore.prototype.executeIteration = v650;
GameBoyCore.prototype.iterationEndRoutine = v651;
GameBoyCore.prototype.handleSTOP = v652;
GameBoyCore.prototype.recalculateIterationClockLimit = v653;
GameBoyCore.prototype.scanLineMode2 = v654;
GameBoyCore.prototype.scanLineMode3 = v655;
GameBoyCore.prototype.scanLineMode0 = v656;
GameBoyCore.prototype.clocksUntilLYCMatch = v657;
GameBoyCore.prototype.clocksUntilMode0 = v658;
GameBoyCore.prototype.updateSpriteCount = v659;
GameBoyCore.prototype.matchLYC = v660;
GameBoyCore.prototype.updateCore = v661;
GameBoyCore.prototype.updateCoreFull = v662;
GameBoyCore.prototype.initializeLCDController = v667;
GameBoyCore.prototype.DisplayShowOff = v668;
GameBoyCore.prototype.executeHDMA = v669;
GameBoyCore.prototype.clockUpdate = v670;
GameBoyCore.prototype.prepareFrame = v671;
GameBoyCore.prototype.requestDraw = v672;
GameBoyCore.prototype.dispatchDraw = v673;
GameBoyCore.prototype.swizzleFrameBuffer = v674;
GameBoyCore.prototype.clearFrameBuffer = v675;
GameBoyCore.prototype.resizeFrameBuffer = v676;
GameBoyCore.prototype.compileResizeFrameBufferFunction = v677;
GameBoyCore.prototype.renderScanLine = v678;
GameBoyCore.prototype.renderMidScanLine = v679;
GameBoyCore.prototype.initializeModeSpecificArrays = v680;
GameBoyCore.prototype.GBCtoGBModeAdjust = v681;
GameBoyCore.prototype.renderPathBuild = v682;
GameBoyCore.prototype.priorityFlaggingPathRebuild = v683;
GameBoyCore.prototype.initializeReferencesFromSaveState = v684;
GameBoyCore.prototype.RGBTint = v685;
GameBoyCore.prototype.getGBCColor = v686;
GameBoyCore.prototype.updateGBRegularBGPalette = v687;
GameBoyCore.prototype.updateGBColorizedBGPalette = v688;
GameBoyCore.prototype.updateGBRegularOBJPalette = v689;
GameBoyCore.prototype.updateGBColorizedOBJPalette = v690;
GameBoyCore.prototype.updateGBCBGPalette = v691;
GameBoyCore.prototype.updateGBCOBJPalette = v692;
GameBoyCore.prototype.BGGBLayerRender = v693;
GameBoyCore.prototype.BGGBCLayerRender = v694;
GameBoyCore.prototype.BGGBCLayerRenderNoPriorityFlagging = v695;
GameBoyCore.prototype.WindowGBLayerRender = v696;
GameBoyCore.prototype.WindowGBCLayerRender = v697;
GameBoyCore.prototype.WindowGBCLayerRenderNoPriorityFlagging = v698;
GameBoyCore.prototype.SpriteGBLayerRender = v699;
GameBoyCore.prototype.findLowestSpriteDrawable = v700;
GameBoyCore.prototype.SpriteGBCLayerRender = v701;
GameBoyCore.prototype.generateGBTileLine = v702;
GameBoyCore.prototype.generateGBCTileLineBank1 = v703;
GameBoyCore.prototype.generateGBCTileBank1 = v704;
GameBoyCore.prototype.generateGBCTileLineBank2 = v705;
GameBoyCore.prototype.generateGBCTileBank2 = v706;
GameBoyCore.prototype.generateGBOAMTileLine = v707;
GameBoyCore.prototype.graphicsJIT = v708;
GameBoyCore.prototype.graphicsJITVBlank = v709;
GameBoyCore.prototype.graphicsJITScanlineGroup = v710;
GameBoyCore.prototype.incrementScanLineQueue = v711;
GameBoyCore.prototype.midScanLineJIT = v712;
GameBoyCore.prototype.launchIRQ = v713;
GameBoyCore.prototype.checkIRQMatching = v714;
GameBoyCore.prototype.calculateHALTPeriod = v715;
GameBoyCore.prototype.memoryRead = v716;
GameBoyCore.prototype.memoryHighRead = v717;
GameBoyCore.prototype.memoryReadJumpCompile = v751;
GameBoyCore.prototype.memoryReadNormal = v752;
GameBoyCore.prototype.memoryHighReadNormal = v753;
GameBoyCore.prototype.memoryReadROM = v754;
GameBoyCore.prototype.memoryReadMBC = v755;
GameBoyCore.prototype.memoryReadMBC7 = v756;
GameBoyCore.prototype.memoryReadMBC3 = v757;
GameBoyCore.prototype.memoryReadGBCMemory = v758;
GameBoyCore.prototype.memoryReadOAM = v759;
GameBoyCore.prototype.memoryReadECHOGBCMemory = v760;
GameBoyCore.prototype.memoryReadECHONormal = v761;
GameBoyCore.prototype.memoryReadBAD = v762;
GameBoyCore.prototype.VRAMDATAReadCGBCPU = v763;
GameBoyCore.prototype.VRAMDATAReadDMGCPU = v764;
GameBoyCore.prototype.VRAMCHRReadCGBCPU = v765;
GameBoyCore.prototype.VRAMCHRReadDMGCPU = v766;
GameBoyCore.prototype.setCurrentMBC1ROMBank = v767;
GameBoyCore.prototype.setCurrentMBC2AND3ROMBank = v768;
GameBoyCore.prototype.setCurrentMBC5ROMBank = v769;
GameBoyCore.prototype.memoryWrite = v770;
GameBoyCore.prototype.memoryHighWrite = v771;
GameBoyCore.prototype.memoryWriteJumpCompile = v772;
GameBoyCore.prototype.MBCWriteEnable = v773;
GameBoyCore.prototype.MBC1WriteROMBank = v774;
GameBoyCore.prototype.MBC1WriteRAMBank = v775;
GameBoyCore.prototype.MBC1WriteType = v776;
GameBoyCore.prototype.MBC2WriteROMBank = v777;
GameBoyCore.prototype.MBC3WriteROMBank = v778;
GameBoyCore.prototype.MBC3WriteRAMBank = v779;
GameBoyCore.prototype.MBC3WriteRTCLatch = v780;
GameBoyCore.prototype.MBC5WriteROMBankLow = v781;
GameBoyCore.prototype.MBC5WriteROMBankHigh = v782;
GameBoyCore.prototype.MBC5WriteRAMBank = v783;
GameBoyCore.prototype.RUMBLEWriteRAMBank = v784;
GameBoyCore.prototype.HuC3WriteRAMBank = v785;
GameBoyCore.prototype.cartIgnoreWrite = v786;
GameBoyCore.prototype.memoryWriteNormal = v787;
GameBoyCore.prototype.memoryHighWriteNormal = v788;
GameBoyCore.prototype.memoryWriteMBCRAM = v789;
GameBoyCore.prototype.memoryWriteMBC3RAM = v790;
GameBoyCore.prototype.memoryWriteGBCRAM = v791;
GameBoyCore.prototype.memoryWriteOAMRAM = v792;
GameBoyCore.prototype.memoryWriteECHOGBCRAM = v793;
GameBoyCore.prototype.memoryWriteECHONormal = v794;
GameBoyCore.prototype.VRAMGBDATAWrite = v795;
GameBoyCore.prototype.VRAMGBDATAUpperWrite = v796;
GameBoyCore.prototype.VRAMGBCDATAWrite = v797;
GameBoyCore.prototype.VRAMGBCHRMAPWrite = v798;
GameBoyCore.prototype.VRAMGBCCHRMAPWrite = v799;
GameBoyCore.prototype.DMAWrite = v800;
GameBoyCore.prototype.registerWriteJumpCompile = v855;
GameBoyCore.prototype.recompileModelSpecificIOWriteHandling = v881;
GameBoyCore.prototype.recompileBootIOWriteHandling = v884;
GameBoyCore.prototype.toTypedArray = v885;
GameBoyCore.prototype.fromTypedArray = v886;
GameBoyCore.prototype.getTypedArray = v887;
GameBoyCore.prototype.checkForOperaMathBug = v888;
var gameboy = null;
var gbRunInterval = null;
var settings = [true, false, false, [39, 37, 38, 40, 88, 90, 16, 13], true, false, 4, 15, 30, false, false, false, false, 16, 1];
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
if (typeof skipBenchmarks === "undefined") {
  v5544 = [];
} else {
  v5544 = skipBenchmarks;
}
var skipBenchmarks = v5544

JAM.stopProfile('load');
