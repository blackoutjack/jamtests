introspect(JAM.policy.pFull) {
function Benchmark(name$$31, doWarmup, doDeterministic, deterministicIterations, run$$1, setup, tearDown, rmsResult, minIterations) {
  this.name = name$$31;
  this.doWarmup = doWarmup;
  this.doDeterministic = doDeterministic;
  this.deterministicIterations = deterministicIterations;
  this.run = run$$1;
  this.Setup = setup ? setup : function() {
  };
  this.TearDown = tearDown ? tearDown : function() {
  };
  this.rmsResult = rmsResult ? rmsResult : null;
  this.minIterations = minIterations ? minIterations : 32
}
function BenchmarkResult(benchmark, time, latency) {
  this.benchmark = benchmark;
  this.time = time;
  this.latency = latency
}
function BenchmarkSuite(name$$32, reference, benchmarks$$1) {
  this.name = name$$32;
  this.reference = reference;
  this.benchmarks = benchmarks$$1;
  BenchmarkSuite.suites.push(this)
}
function setupGameboy() {
  if(!(typeof Uint8Array != "undefined" && typeof Int8Array != "undefined" && typeof Float32Array != "undefined" && typeof Int32Array != "undefined")) {
    throw"TypedArrayUnsupported";
  }
  decoded_gameboy_rom = base64_decode(gameboy_rom);
  rom = null
}
function runGameboy() {
  start(new GameBoyCanvas, decoded_gameboy_rom);
  gameboy.instructions = 0;
  gameboy.totalInstructions = 25E4;
  for(;gameboy.instructions <= gameboy.totalInstructions;) {
    gameboy.run();
    GameBoyAudioNode.run()
  }
  resetGlobalVariables()
}
function tearDownGameboy() {
  decoded_gameboy_rom = null;
  expectedGameboyStateStr = null
}
function GameBoyContext() {
  this.createBuffer = function() {
    return new Buffer
  };
  this.createImageData = function(w$$5, h$$4) {
    var result$$2 = {};
    result$$2.data = new Uint8Array(w$$5 * h$$4 * 4);
    return result$$2
  };
  this.putImageData = function(buffer$$8, x$$48, y$$31) {
    var sum = 0;
    var i$$6 = 0;
    for(;i$$6 < buffer$$8.data.length;i$$6++) {
      sum += i$$6 * buffer$$8.data[i$$6];
      sum = sum % 1E3
    }
  };
  this.drawImage = function() {
  }
}
function GameBoyCanvas() {
  this.getContext = function() {
    return new GameBoyContext
  };
  this.width = 160;
  this.height = 144;
  this.style = {visibility:"visibile"}
}
function cout(message$$10, colorIndex) {
}
function clear_terminal() {
}
function GameBoyAudioContext() {
  this.createBufferSource = function() {
    return{noteOn:function() {
    }, connect:function() {
    }}
  };
  this.sampleRate = 48E3;
  this.destination = {};
  this.createBuffer = function(channels, len, sampleRate) {
    return{gain:1, numberOfChannels:1, length:1, duration:2.0833333110203966E-5, sampleRate:48E3}
  };
  this.createJavaScriptNode = function(bufferSize, inputChannels, outputChannels) {
    GameBoyAudioNode.bufferSize = bufferSize;
    GameBoyAudioNode.outputBuffer = {getChannelData:function(i$$8) {
      return this.channelData[i$$8]
    }, channelData:[]};
    var i$$7 = 0;
    for(;i$$7 < outputChannels;i$$7++) {
      GameBoyAudioNode.outputBuffer.channelData[i$$7] = new Float32Array(bufferSize)
    }
    return GameBoyAudioNode
  }
}
function new_Date() {
  return{getTime:function() {
    mock_date_time_counter += 16;
    return mock_date_time_counter
  }}
}
function checkFinalState() {
  function sum$$1(a) {
    var result$$3 = 0;
    var i$$9 = 0;
    for(;i$$9 < a.length;i$$9++) {
      result$$3 += a[i$$9]
    }
    return result$$3
  }
  var state = {registerA:gameboy.registerA, registerB:gameboy.registerB, registerC:gameboy.registerC, registerE:gameboy.registerE, registerF:gameboy.registerF, registersHL:gameboy.registersHL, programCounter:gameboy.programCounter, stackPointer:gameboy.stackPointer, sumROM:sum$$1(gameboy.fromTypedArray(gameboy.ROM)), sumMemory:sum$$1(gameboy.fromTypedArray(gameboy.memory)), sumMBCRam:sum$$1(gameboy.fromTypedArray(gameboy.MBCRam)), sumVRam:sum$$1(gameboy.fromTypedArray(gameboy.VRam))};
  var stateStr = JSON.stringify(state);
  if(typeof expectedGameboyStateStr != "undefined") {
    if(stateStr != expectedGameboyStateStr) {
      alert("Incorrect final state of processor:\n" + " actual   " + stateStr + "\n" + " expected " + expectedGameboyStateStr)
    }
  }else {
    alert(stateStr)
  }
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
  gbRunInterval = null
}
function base64(data$$21) {
  try {
    var base64$$1 = GameBoyWindow.btoa(data$$21)
  }catch(error$$3) {
    base64$$1 = "";
    var dataLength = data$$21.length;
    if(dataLength > 0) {
      var bytes = [0, 0, 0];
      var index$$41 = 0;
      var remainder = dataLength % 3;
      for(;data$$21.length % 3 > 0;) {
        data$$21[data$$21.length] = " "
      }
      for(;index$$41 < dataLength;) {
        bytes = [data$$21.charCodeAt(index$$41++) & 255, data$$21.charCodeAt(index$$41++) & 255, data$$21.charCodeAt(index$$41++) & 255];
        base64$$1 += toBase64[bytes[0] >> 2] + toBase64[(bytes[0] & 3) << 4 | bytes[1] >> 4] + toBase64[(bytes[1] & 15) << 2 | bytes[2] >> 6] + toBase64[bytes[2] & 63]
      }
      if(remainder > 0) {
        base64$$1[base64$$1.length - 1] = "=";
        if(remainder == 2) {
          base64$$1[base64$$1.length - 2] = "=";
          base64$$1[base64$$1.length - 3] = toBase64[(bytes[0] & 3) << 4]
        }else {
          base64$$1[base64$$1.length - 2] = toBase64[(bytes[1] & 15) << 2]
        }
      }
    }
  }
  return base64$$1
}
function base64_decode(data$$22) {
  try {
    var decode64 = GameBoyWindow.atob(data$$22)
  }catch(error$$4) {
    decode64 = "";
    var dataLength$$1 = data$$22.length;
    if(dataLength$$1 > 3 && dataLength$$1 % 4 == 0) {
      var sixbits = [0, 0, 0, 0];
      var index$$42 = 0;
      for(;index$$42 < dataLength$$1;) {
        sixbits = [fromBase64.indexOf(data$$22.charAt(index$$42++)), fromBase64.indexOf(data$$22.charAt(index$$42++)), fromBase64.indexOf(data$$22.charAt(index$$42++)), fromBase64.indexOf(data$$22.charAt(index$$42++))];
        decode64 += String.fromCharCode(sixbits[0] << 2 | sixbits[1] >> 4) + String.fromCharCode((sixbits[1] & 15) << 4 | sixbits[2] >> 2) + String.fromCharCode((sixbits[2] & 3) << 6 | sixbits[3])
      }
      if(sixbits[3] >= 64) {
        decode64.length -= 1;
        if(sixbits[2] >= 64) {
          decode64.length -= 1
        }
      }
    }
  }
  return decode64
}
function to_little_endian_dword(str$$6) {
  return to_little_endian_word(str$$6) + String.fromCharCode(str$$6 >> 16 & 255, str$$6 >> 24 & 255)
}
function to_little_endian_word(str$$7) {
  return to_byte(str$$7) + String.fromCharCode(str$$7 >> 8 & 255)
}
function to_byte(str$$8) {
  return String.fromCharCode(str$$8 & 255)
}
function arrayToBase64(arrayIn) {
  var binString = "";
  var length$$13 = arrayIn.length;
  var index$$43 = 0;
  for(;index$$43 < length$$13;++index$$43) {
    if(typeof arrayIn[index$$43] == "number") {
      binString += String.fromCharCode(arrayIn[index$$43])
    }
  }
  return base64(binString)
}
function base64ToArray(b64String) {
  var binString$$1 = base64_decode(b64String);
  var outArray = [];
  var length$$14 = binString$$1.length;
  var index$$44 = 0;
  for(;index$$44 < length$$14;) {
    outArray.push(binString$$1.charCodeAt(index$$44++) & 255)
  }
  return outArray
}
function Resampler(fromSampleRate, toSampleRate, channels$$1, outputBufferSize, noReturn) {
  this.fromSampleRate = fromSampleRate;
  this.toSampleRate = toSampleRate;
  this.channels = channels$$1 | 0;
  this.outputBufferSize = outputBufferSize;
  this.noReturn = !!noReturn;
  this.initialize()
}
function XAudioServer(channels$$2, sampleRate$$1, minBufferSize, maxBufferSize, underRunCallback, volume) {
  this.audioChannels = channels$$2 == 2 ? 2 : 1;
  webAudioMono = this.audioChannels == 1;
  XAudioJSSampleRate = sampleRate$$1 > 0 && sampleRate$$1 <= 16777215 ? sampleRate$$1 : 44100;
  webAudioMinBufferSize = minBufferSize >= samplesPerCallback << 1 && minBufferSize < maxBufferSize ? minBufferSize & (webAudioMono ? 4294967295 : 4294967294) : samplesPerCallback << 1;
  webAudioMaxBufferSize = Math.floor(maxBufferSize) > webAudioMinBufferSize + this.audioChannels ? maxBufferSize & (webAudioMono ? 4294967295 : 4294967294) : minBufferSize << 1;
  this.underRunCallback = typeof underRunCallback == "function" ? underRunCallback : function() {
  };
  XAudioJSVolume = volume >= 0 && volume <= 1 ? volume : 1;
  this.audioType = -1;
  this.mozAudioTail = [];
  this.audioHandleMoz = null;
  this.audioHandleFlash = null;
  this.flashInitialized = false;
  this.mozAudioFound = false;
  this.initializeAudio()
}
function getFloat32(size$$4) {
  try {
    return new Float32Array(size$$4)
  }catch(error$$11) {
    return new Array(size$$4)
  }
}
function getFloat32Flat(size$$5) {
  try {
    var newBuffer = new Float32Array(size$$5)
  }catch(error$$12) {
    newBuffer = new Array(size$$5);
    var audioSampleIndice = 0;
    do {
      newBuffer[audioSampleIndice] = 0
    }while(++audioSampleIndice < size$$5)
  }
  return newBuffer
}
function audioOutputFlashEvent() {
  resampleRefill();
  return outputConvert()
}
function generateFlashStereoString() {
  var copyBinaryStringLeft = "";
  var copyBinaryStringRight = "";
  var index$$47 = 0;
  for(;index$$47 < samplesPerCallback && resampleBufferStart != resampleBufferEnd;++index$$47) {
    copyBinaryStringLeft += String.fromCharCode((Math.min(Math.max(resampled[resampleBufferStart++] + 1, 0), 2) * 16383 | 0) + 12288);
    copyBinaryStringRight += String.fromCharCode((Math.min(Math.max(resampled[resampleBufferStart++] + 1, 0), 2) * 16383 | 0) + 12288);
    if(resampleBufferStart == resampleBufferSize) {
      resampleBufferStart = 0
    }
  }
  return copyBinaryStringLeft + copyBinaryStringRight
}
function generateFlashMonoString() {
  var copyBinaryString = "";
  var index$$48 = 0;
  for(;index$$48 < samplesPerCallback && resampleBufferStart != resampleBufferEnd;++index$$48) {
    copyBinaryString += String.fromCharCode((Math.min(Math.max(resampled[resampleBufferStart++] + 1, 0), 2) * 16383 | 0) + 12288);
    if(resampleBufferStart == resampleBufferSize) {
      resampleBufferStart = 0
    }
  }
  return copyBinaryString
}
function audioOutputEvent(event$$3) {
  var index$$49 = 0;
  var buffer1 = event$$3.outputBuffer.getChannelData(0);
  var buffer2 = event$$3.outputBuffer.getChannelData(1);
  resampleRefill();
  if(!webAudioMono) {
    for(;index$$49 < samplesPerCallback && resampleBufferStart != resampleBufferEnd;) {
      buffer1[index$$49] = resampled[resampleBufferStart++] * XAudioJSVolume;
      buffer2[index$$49++] = resampled[resampleBufferStart++] * XAudioJSVolume;
      if(resampleBufferStart == resampleBufferSize) {
        resampleBufferStart = 0
      }
    }
  }else {
    for(;index$$49 < samplesPerCallback && resampleBufferStart != resampleBufferEnd;) {
      buffer2[index$$49] = buffer1[index$$49] = resampled[resampleBufferStart++] * XAudioJSVolume;
      ++index$$49;
      if(resampleBufferStart == resampleBufferSize) {
        resampleBufferStart = 0
      }
    }
  }
  for(;index$$49 < samplesPerCallback;) {
    buffer2[index$$49] = buffer1[index$$49] = 0;
    ++index$$49
  }
}
function resampleRefill() {
  if(audioBufferSize > 0) {
    var resampleLength = resampleControl.resampler(getBufferSamples());
    var resampledResult = resampleControl.outputBuffer;
    var index2 = 0;
    for(;index2 < resampleLength;++index2) {
      resampled[resampleBufferEnd++] = resampledResult[index2];
      if(resampleBufferEnd == resampleBufferSize) {
        resampleBufferEnd = 0
      }
      if(resampleBufferStart == resampleBufferEnd) {
        ++resampleBufferStart;
        if(resampleBufferStart == resampleBufferSize) {
          resampleBufferStart = 0
        }
      }
    }
    audioBufferSize = 0
  }
}
function resampledSamplesLeft() {
  return(resampleBufferStart <= resampleBufferEnd ? 0 : resampleBufferSize) + resampleBufferEnd - resampleBufferStart
}
function getBufferSamples() {
  try {
    return audioContextSampleBuffer.subarray(0, audioBufferSize)
  }catch(error$$13) {
    try {
      audioContextSampleBuffer.length = audioBufferSize;
      return audioContextSampleBuffer
    }catch(error$$14) {
      return audioContextSampleBuffer.slice(0, audioBufferSize)
    }
  }
}
function resetCallbackAPIAudioBuffer(APISampleRate, bufferAlloc) {
  audioContextSampleBuffer = getFloat32(webAudioMaxBufferSize);
  audioBufferSize = webAudioMaxBufferSize;
  resampleBufferStart = 0;
  resampleBufferEnd = 0;
  resampleBufferSize = Math.max(webAudioMaxBufferSize * Math.ceil(XAudioJSSampleRate / APISampleRate), samplesPerCallback) << 1;
  if(webAudioMono) {
    resampled = getFloat32Flat(resampleBufferSize);
    resampleControl = new Resampler(XAudioJSSampleRate, APISampleRate, 1, resampleBufferSize, true);
    outputConvert = generateFlashMonoString
  }else {
    resampleBufferSize <<= 1;
    resampled = getFloat32Flat(resampleBufferSize);
    resampleControl = new Resampler(XAudioJSSampleRate, APISampleRate, 2, resampleBufferSize, true);
    outputConvert = generateFlashStereoString
  }
}
function Resize(widthOriginal, heightOriginal, targetWidth, targetHeight, blendAlpha, interpolationPass) {
  this.widthOriginal = Math.abs(parseInt(widthOriginal) || 0);
  this.heightOriginal = Math.abs(parseInt(heightOriginal) || 0);
  this.targetWidth = Math.abs(parseInt(targetWidth) || 0);
  this.targetHeight = Math.abs(parseInt(targetHeight) || 0);
  this.colorChannels = !!blendAlpha ? 4 : 3;
  this.interpolationPass = !!interpolationPass;
  this.targetWidthMultipliedByChannels = this.targetWidth * this.colorChannels;
  this.originalWidthMultipliedByChannels = this.widthOriginal * this.colorChannels;
  this.originalHeightMultipliedByChannels = this.heightOriginal * this.colorChannels;
  this.widthPassResultSize = this.targetWidthMultipliedByChannels * this.heightOriginal;
  this.finalResultSize = this.targetWidthMultipliedByChannels * this.targetHeight;
  this.initialize()
}
function GameBoyCore(canvas, ROMImage) {
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
  this.DISPLAYOFFCONTROL = [function(parentObj) {
  }];
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
  this.lastIteration = dateVar.getTime();
  dateVar = new_Date();
  this.firstIteration = dateVar.getTime();
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
  this.intializeWhiteNoise()
}
function start(canvas$$1, ROM) {
  clearLastEmulation();
  autoSave();
  gameboy = new GameBoyCore(canvas$$1, ROM);
  gameboy.openMBC = openSRAM;
  gameboy.openRTC = openRTC;
  gameboy.start();
  run()
}
function run() {
  if(GameBoyEmulatorInitialized()) {
    if(!GameBoyEmulatorPlaying()) {
      gameboy.stopEmulator &= 1;
      cout("Starting the iterator.", 0);
      var dateObj$$1 = new_Date();
      gameboy.firstIteration = dateObj$$1.getTime();
      gameboy.iterations = 0
    }else {
      cout("The GameBoy core is already running.", 1)
    }
  }else {
    cout("GameBoy core cannot run while it has not been initialized.", 1)
  }
}
function pause() {
  if(GameBoyEmulatorInitialized()) {
    if(GameBoyEmulatorPlaying()) {
      clearLastEmulation()
    }else {
      cout("GameBoy core has already been paused.", 1)
    }
  }else {
    cout("GameBoy core cannot be paused while it has not been initialized.", 1)
  }
}
function clearLastEmulation() {
  if(GameBoyEmulatorInitialized() && GameBoyEmulatorPlaying()) {
    clearInterval(gbRunInterval);
    gameboy.stopEmulator |= 2;
    cout("The previous emulation has been cleared.", 0)
  }else {
    cout("No previous emulation was found to be cleared.", 0)
  }
}
function save() {
  if(GameBoyEmulatorInitialized()) {
    try {
      var state_suffix = 0;
      for(;findValue("FREEZE_" + gameboy.name + "_" + state_suffix) != null;) {
        state_suffix++
      }
      setValue("FREEZE_" + gameboy.name + "_" + state_suffix, gameboy.saveState());
      cout("Saved the current state as: FREEZE_" + gameboy.name + "_" + state_suffix, 0)
    }catch(error$$28) {
      cout('Could not save the current emulation state("' + error$$28.message + '").', 2)
    }
  }else {
    cout("GameBoy core cannot be saved while it has not been initialized.", 1)
  }
}
function saveSRAM() {
  if(GameBoyEmulatorInitialized()) {
    if(gameboy.cBATT) {
      try {
        var sram = gameboy.saveSRAMState();
        if(sram.length > 0) {
          cout("Saving the SRAM...", 0);
          if(findValue("SRAM_" + gameboy.name) != null) {
            cout("Deleting the old SRAM save due to outdated format.", 0);
            deleteValue("SRAM_" + gameboy.name)
          }
          setValue("B64_SRAM_" + gameboy.name, arrayToBase64(sram))
        }else {
          cout("SRAM could not be saved because it was empty.", 1)
        }
      }catch(error$$29) {
        cout('Could not save the current emulation state("' + error$$29.message + '").', 2)
      }
    }else {
      cout("Cannot save a game that does not have battery backed SRAM specified.", 1)
    }
    saveRTC()
  }else {
    cout("GameBoy core cannot be saved while it has not been initialized.", 1)
  }
}
function saveRTC() {
  if(GameBoyEmulatorInitialized()) {
    if(gameboy.cTIMER) {
      try {
        cout("Saving the RTC...", 0);
        setValue("RTC_" + gameboy.name, gameboy.saveRTCState())
      }catch(error$$30) {
        cout('Could not save the RTC of the current emulation state("' + error$$30.message + '").', 2)
      }
    }
  }else {
    cout("GameBoy core cannot be saved while it has not been initialized.", 1)
  }
}
function autoSave() {
  if(GameBoyEmulatorInitialized()) {
    cout("Automatically saving the SRAM.", 0);
    saveSRAM();
    saveRTC()
  }
}
function openSRAM(filename) {
  try {
    if(findValue("B64_SRAM_" + filename) != null) {
      cout("Found a previous SRAM state (Will attempt to load).", 0);
      return base64ToArray(findValue("B64_SRAM_" + filename))
    }else {
      if(findValue("SRAM_" + filename) != null) {
        cout("Found a previous SRAM state (Will attempt to load).", 0);
        return findValue("SRAM_" + filename)
      }else {
        cout("Could not find any previous SRAM copy for the current ROM.", 0)
      }
    }
  }catch(error$$31) {
    cout("Could not open the  SRAM of the saved emulation state.", 2)
  }
  return[]
}
function openRTC(filename$$1) {
  try {
    if(findValue("RTC_" + filename$$1) != null) {
      cout("Found a previous RTC state (Will attempt to load).", 0);
      return findValue("RTC_" + filename$$1)
    }else {
      cout("Could not find any previous RTC copy for the current ROM.", 0)
    }
  }catch(error$$32) {
    cout("Could not open the RTC data of the saved emulation state.", 2)
  }
  return[]
}
function openState(filename$$2, canvas$$2) {
  try {
    if(findValue(filename$$2) != null) {
      try {
        clearLastEmulation();
        cout("Attempting to run a saved emulation state.", 0);
        gameboy = new GameBoyCore(canvas$$2, "");
        gameboy.savedStateFileName = filename$$2;
        gameboy.returnFromState(findValue(filename$$2));
        run()
      }catch(error$$33) {
        alert(error$$33.message + " file: " + error$$33.fileName + " line: " + error$$33.lineNumber)
      }
    }else {
      cout("Could not find the save state " + filename$$2 + '".', 2)
    }
  }catch(error$$34) {
    cout("Could not open the saved emulation state.", 2)
  }
}
function import_save(blobData) {
  blobData = decodeBlob(blobData);
  if(blobData && blobData.blobs) {
    if(blobData.blobs.length > 0) {
      var index$$68 = 0;
      for(;index$$68 < blobData.blobs.length;++index$$68) {
        cout('Importing blob "' + blobData.blobs[index$$68].blobID + '"', 0);
        if(blobData.blobs[index$$68].blobContent) {
          if(blobData.blobs[index$$68].blobID.substring(0, 5) == "SRAM_") {
            setValue("B64_" + blobData.blobs[index$$68].blobID, base64(blobData.blobs[index$$68].blobContent))
          }else {
            setValue(blobData.blobs[index$$68].blobID, JSON.parse(blobData.blobs[index$$68].blobContent))
          }
        }else {
          if(blobData.blobs[index$$68].blobID) {
            cout('Save file imported had blob "' + blobData.blobs[index$$68].blobID + '" with no blob data interpretable.', 2)
          }else {
            cout("Blob chunk information missing completely.", 2)
          }
        }
      }
    }else {
      cout("Could not decode the imported file.", 2)
    }
  }else {
    cout("Could not decode the imported file.", 2)
  }
}
function generateBlob(keyName, encodedData$$1) {
  var saveString = "EMULATOR_DATA";
  var consoleID = "GameBoy";
  var totalLength = saveString.length + 4 + (1 + consoleID.length) + (1 + keyName.length + (4 + encodedData$$1.length));
  saveString += to_little_endian_dword(totalLength);
  saveString += to_byte(consoleID.length);
  saveString += consoleID;
  saveString += to_byte(keyName.length);
  saveString += keyName;
  saveString += to_little_endian_dword(encodedData$$1.length);
  saveString += encodedData$$1;
  return saveString
}
function generateMultiBlob(blobPairs) {
  var consoleID$$1 = "GameBoy";
  var totalLength$$1 = 13 + 4 + 1 + consoleID$$1.length;
  var saveString$$1 = to_byte(consoleID$$1.length);
  saveString$$1 += consoleID$$1;
  var keyName$$1 = "";
  var encodedData$$2 = "";
  var index$$69 = 0;
  for(;index$$69 < blobPairs.length;++index$$69) {
    keyName$$1 = blobPairs[index$$69][0];
    encodedData$$2 = blobPairs[index$$69][1];
    saveString$$1 += to_byte(keyName$$1.length);
    saveString$$1 += keyName$$1;
    saveString$$1 += to_little_endian_dword(encodedData$$2.length);
    saveString$$1 += encodedData$$2;
    totalLength$$1 += 1 + keyName$$1.length + 4 + encodedData$$2.length
  }
  saveString$$1 = "EMULATOR_DATA" + to_little_endian_dword(totalLength$$1) + saveString$$1;
  return saveString$$1
}
function decodeBlob(blobData$$1) {
  var length$$21 = blobData$$1.length;
  var blobProperties = {};
  blobProperties.consoleID = null;
  var blobsCount = -1;
  blobProperties.blobs = [];
  if(length$$21 > 17) {
    if(blobData$$1.substring(0, 13) == "EMULATOR_DATA") {
      length$$21 = Math.min((blobData$$1.charCodeAt(16) & 255) << 24 | (blobData$$1.charCodeAt(15) & 255) << 16 | (blobData$$1.charCodeAt(14) & 255) << 8 | blobData$$1.charCodeAt(13) & 255, length$$21);
      var consoleIDLength = blobData$$1.charCodeAt(17) & 255;
      if(length$$21 > 17 + consoleIDLength) {
        blobProperties.consoleID = blobData$$1.substring(18, 18 + consoleIDLength);
        var blobIDLength = 0;
        var blobLength = 0;
        var index$$70 = 18 + consoleIDLength;
        for(;index$$70 < length$$21;) {
          blobIDLength = blobData$$1.charCodeAt(index$$70++) & 255;
          if(index$$70 + blobIDLength < length$$21) {
            blobProperties.blobs[++blobsCount] = {};
            blobProperties.blobs[blobsCount].blobID = blobData$$1.substring(index$$70, index$$70 + blobIDLength);
            index$$70 += blobIDLength;
            if(index$$70 + 4 < length$$21) {
              blobLength = (blobData$$1.charCodeAt(index$$70 + 3) & 255) << 24 | (blobData$$1.charCodeAt(index$$70 + 2) & 255) << 16 | (blobData$$1.charCodeAt(index$$70 + 1) & 255) << 8 | blobData$$1.charCodeAt(index$$70) & 255;
              index$$70 += 4;
              if(index$$70 + blobLength <= length$$21) {
                blobProperties.blobs[blobsCount].blobContent = blobData$$1.substring(index$$70, index$$70 + blobLength);
                index$$70 += blobLength
              }else {
                cout("Blob length check failed, blob determined to be incomplete.", 2);
                break
              }
            }else {
              cout("Blob was incomplete, bailing out.", 2);
              break
            }
          }else {
            cout("Blob was incomplete, bailing out.", 2);
            break
          }
        }
      }
    }
  }
  return blobProperties
}
function matchKey(key$$15) {
  var index$$71 = 0;
  for(;index$$71 < settings[3].length;index$$71++) {
    if(settings[3][index$$71] == key$$15) {
      return index$$71
    }
  }
  return-1
}
function GameBoyEmulatorInitialized() {
  return typeof gameboy == "object" && gameboy != null
}
function GameBoyEmulatorPlaying() {
  return(gameboy.stopEmulator & 2) == 0
}
function GameBoyKeyDown(e$$7) {
  if(GameBoyEmulatorInitialized() && GameBoyEmulatorPlaying()) {
    var keycode = matchKey(e$$7.keyCode);
    if(keycode >= 0 && keycode < 8) {
      gameboy.JoyPadEvent(keycode, true);
      try {
        e$$7.preventDefault()
      }catch(error$$35) {
      }
    }
  }
}
function GameBoyKeyUp(e$$8) {
  if(GameBoyEmulatorInitialized() && GameBoyEmulatorPlaying()) {
    var keycode$$1 = matchKey(e$$8.keyCode);
    if(keycode$$1 >= 0 && keycode$$1 < 8) {
      gameboy.JoyPadEvent(keycode$$1, false);
      try {
        e$$8.preventDefault()
      }catch(error$$36) {
      }
    }
  }
}
function GameBoyGyroSignalHandler(e$$9) {
  if(GameBoyEmulatorInitialized() && GameBoyEmulatorPlaying()) {
    if(e$$9.gamma || e$$9.beta) {
      gameboy.GyroEvent(e$$9.gamma * Math.PI / 180, e$$9.beta * Math.PI / 180)
    }else {
      gameboy.GyroEvent(e$$9.x, e$$9.y)
    }
    try {
      e$$9.preventDefault()
    }catch(error$$37) {
    }
  }
}
function initNewCanvas() {
  if(GameBoyEmulatorInitialized()) {
    gameboy.canvas.width = gameboy.canvas.clientWidth;
    gameboy.canvas.height = gameboy.canvas.clientHeight
  }
}
function initNewCanvasSize() {
  if(GameBoyEmulatorInitialized()) {
    if(!settings[12]) {
      if(gameboy.onscreenWidth != 160 || gameboy.onscreenHeight != 144) {
        gameboy.initLCD()
      }
    }else {
      if(gameboy.onscreenWidth != gameboy.canvas.clientWidth || gameboy.onscreenHeight != gameboy.canvas.clientHeight) {
        gameboy.initLCD()
      }
    }
  }
}
function ShowBox(name$$33) {
  var box = document.getElementById("Box-" + name$$33);
  box.style.visibility = "visible";
  var bar = document.getElementById("progress-bar").style.width = "" + ++completed / benchmarks * 100 + "%";
  latencyBenchmarks.forEach(function(entry) {
    if(name$$33.valueOf() === entry.valueOf()) {
      var box1 = document.getElementById("Box-" + name$$33 + "Latency");
      box1.style.visibility = "visible"
    }
  })
}
function AddResult(name$$34, result$$4) {
  console.log(name$$34 + ": " + result$$4);
  var box$$1 = document.getElementById("Result-" + name$$34);
  box$$1.innerHTML = result$$4
}
function AddError(name$$35, error$$38) {
  console.log(name$$35 + ": " + error$$38.message);
  if(error$$38 == "TypedArrayUnsupported") {
    AddResult(name$$35, "<b>Unsupported</b>")
  }else {
    if(error$$38 == "PerformanceNowUnsupported") {
      AddResult(name$$35, "<b>Timer error</b>")
    }else {
      AddResult(name$$35, "<b>Error</b>")
    }
  }
  success = false
}
function AddScore(score$$2) {
  var status = document.getElementById("main-banner");
  if(success) {
    status.innerHTML = "Octane Score: " + score$$2
  }else {
    status.innerHTML = "Octane Score (incomplete): " + score$$2
  }
  document.getElementById("progress-bar-container").style.visibility = "hidden";
  document.getElementById("bottom-text").style.visibility = "visible";
  document.getElementById("inside-anchor").removeChild(document.getElementById("bar-appendix"));
  document.getElementById("alertbox").style.visibility = "hidden"
}
function Run() {
  document.getElementById("main-banner").innerHTML = "Running Octane...";
  document.getElementById("bar-appendix").innerHTML = '<br/><div class="progress progress-striped" id="progress-bar-container" style="visibility:hidden"><div class="bar"style="width: 0%;" id="progress-bar"></div></div>';
  var anchor = document.getElementById("run-octane");
  var parent = document.getElementById("main-container");
  parent.appendChild(document.getElementById("inside-anchor"));
  parent.removeChild(anchor);
  document.getElementById("startup-text").innerHTML = "";
  document.getElementById("progress-bar-container").style.visibility = "visible";
  BenchmarkSuite.RunSuites({NotifyStart:ShowBox, NotifyError:AddError, NotifyResult:AddResult, NotifyScore:AddScore}, skipBenchmarks)
}
function CheckCompatibility() {
  var hasTypedArrays = typeof Uint8Array != "undefined" && typeof Float64Array != "undefined" && typeof(new Uint8Array(0)).subarray != "undefined";
  if(!hasTypedArrays) {
    console.log("Typed Arrays not supported");
    document.getElementById("alertbox").style.display = "block"
  }
  if(window.document.URL.indexOf("skip_zlib=1") >= 0) {
    skipBenchmarks.push("zlib")
  }
  if(window.document.URL.indexOf("auto=1") >= 0) {
    Run()
  }
}
function Load() {
  setTimeout(CheckCompatibility, 200)
}
var performance = performance || {};
performance.now = function() {
  return performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow || Date.now
}();
BenchmarkResult.prototype.valueOf = function() {
  return this.time
};
BenchmarkSuite.suites = [];
BenchmarkSuite.version = "9";
BenchmarkSuite.config = {doWarmup:undefined, doDeterministic:undefined};
alert = function(s$$2) {
  throw"Alert called with argument: " + s$$2;
};
BenchmarkSuite.ResetRNG = function() {
  Math.random = function() {
    var seed = 49734321;
    return function() {
      seed = seed + 2127912214 + (seed << 12) & 4294967295;
      seed = (seed ^ 3345072700 ^ seed >>> 19) & 4294967295;
      seed = seed + 374761393 + (seed << 5) & 4294967295;
      seed = (seed + 3550635116 ^ seed << 9) & 4294967295;
      seed = seed + 4251993797 + (seed << 3) & 4294967295;
      seed = (seed ^ 3042594569 ^ seed >>> 16) & 4294967295;
      return(seed & 268435455) / 268435456
    }
  }()
};
BenchmarkSuite.RunSuites = function(runner, skipBenchmarks$$1) {
  function RunStep() {
    for(;continuation || index$$39 < length$$11;) {
      if(continuation) {
        continuation = continuation()
      }else {
        var suite = suites[index$$39++];
        if(runner.NotifyStart) {
          runner.NotifyStart(suite.name)
        }
        if(skipBenchmarks$$1.indexOf(suite.name) > -1) {
          suite.NotifySkipped(runner)
        }else {
          continuation = suite.RunStep(runner)
        }
      }
      if(continuation && typeof window != "undefined" && window.setTimeout) {
        window.setTimeout(RunStep, 25);
        return
      }
    }
    if(runner.NotifyScore) {
      var score = BenchmarkSuite.GeometricMean(BenchmarkSuite.scores);
      var formatted = BenchmarkSuite.FormatScore(100 * score);
      runner.NotifyScore(formatted)
    }
  }
  skipBenchmarks$$1 = typeof skipBenchmarks$$1 === "undefined" ? [] : skipBenchmarks$$1;
  var continuation = null;
  var suites = BenchmarkSuite.suites;
  var length$$11 = suites.length;
  BenchmarkSuite.scores = [];
  var index$$39 = 0;
  RunStep()
};
BenchmarkSuite.CountBenchmarks = function() {
  var result = 0;
  var suites$$1 = BenchmarkSuite.suites;
  var i$$1 = 0;
  for(;i$$1 < suites$$1.length;i$$1++) {
    result += suites$$1[i$$1].benchmarks.length
  }
  return result
};
BenchmarkSuite.GeometricMean = function(numbers) {
  var log = 0;
  var i$$2 = 0;
  for(;i$$2 < numbers.length;i$$2++) {
    log += Math.log(numbers[i$$2])
  }
  return Math.pow(Math.E, log / numbers.length)
};
BenchmarkSuite.GeometricMeanTime = function(measurements) {
  var log$$1 = 0;
  var i$$3 = 0;
  for(;i$$3 < measurements.length;i$$3++) {
    log$$1 += Math.log(measurements[i$$3].time)
  }
  return Math.pow(Math.E, log$$1 / measurements.length)
};
BenchmarkSuite.GeometricMeanLatency = function(measurements$$1) {
  var log$$2 = 0;
  var hasLatencyResult = false;
  var i$$4 = 0;
  for(;i$$4 < measurements$$1.length;i$$4++) {
    if(measurements$$1[i$$4].latency != 0) {
      log$$2 += Math.log(measurements$$1[i$$4].latency);
      hasLatencyResult = true
    }
  }
  if(hasLatencyResult) {
    return Math.pow(Math.E, log$$2 / measurements$$1.length)
  }else {
    return 0
  }
};
BenchmarkSuite.FormatScore = function(value$$29) {
  if(value$$29 > 100) {
    return value$$29.toFixed(0)
  }else {
    return value$$29.toPrecision(3)
  }
};
BenchmarkSuite.prototype.NotifyStep = function(result$$1) {
  this.results.push(result$$1);
  if(this.runner.NotifyStep) {
    this.runner.NotifyStep(result$$1.benchmark.name)
  }
};
BenchmarkSuite.prototype.NotifyResult = function() {
  var mean = BenchmarkSuite.GeometricMeanTime(this.results);
  var score$$1 = this.reference[0] / mean;
  BenchmarkSuite.scores.push(score$$1);
  if(this.runner.NotifyResult) {
    var formatted$$1 = BenchmarkSuite.FormatScore(100 * score$$1);
    this.runner.NotifyResult(this.name, formatted$$1)
  }
  if(this.reference.length == 2) {
    var meanLatency = BenchmarkSuite.GeometricMeanLatency(this.results);
    if(meanLatency != 0) {
      var scoreLatency = this.reference[1] / meanLatency;
      BenchmarkSuite.scores.push(scoreLatency);
      if(this.runner.NotifyResult) {
        var formattedLatency = BenchmarkSuite.FormatScore(100 * scoreLatency);
        this.runner.NotifyResult(this.name + "Latency", formattedLatency)
      }
    }
  }
};
BenchmarkSuite.prototype.NotifySkipped = function(runner$$1) {
  BenchmarkSuite.scores.push(1);
  if(runner$$1.NotifyResult) {
    runner$$1.NotifyResult(this.name, "Skipped")
  }
};
BenchmarkSuite.prototype.NotifyError = function(error$$2) {
  if(this.runner.NotifyError) {
    this.runner.NotifyError(this.name, error$$2)
  }
  if(this.runner.NotifyStep) {
    this.runner.NotifyStep(this.name)
  }
};
BenchmarkSuite.prototype.RunSingleBenchmark = function(benchmark$$1, data$$18) {
  function Measure(data$$19) {
    var elapsed = 0;
    var start$$5 = new Date;
    var i$$5 = 0;
    for(;doDeterministic$$1 ? i$$5 < benchmark$$1.deterministicIterations : elapsed < 1E3;i$$5++) {
      benchmark$$1.run();
      elapsed = new Date - start$$5
    }
    if(data$$19 != null) {
      data$$19.runs += i$$5;
      data$$19.elapsed += elapsed
    }
  }
  var config = BenchmarkSuite.config;
  var doWarmup$$1 = config.doWarmup !== undefined ? config.doWarmup : benchmark$$1.doWarmup;
  var doDeterministic$$1 = config.doDeterministic !== undefined ? config.doDeterministic : benchmark$$1.doDeterministic;
  if(!doWarmup$$1 && data$$18 == null) {
    data$$18 = {runs:0, elapsed:0}
  }
  if(data$$18 == null) {
    Measure(null);
    return{runs:0, elapsed:0}
  }else {
    Measure(data$$18);
    if(data$$18.runs < benchmark$$1.minIterations) {
      return data$$18
    }
    var usec = data$$18.elapsed * 1E3 / data$$18.runs;
    var rms = benchmark$$1.rmsResult != null ? benchmark$$1.rmsResult() : 0;
    this.NotifyStep(new BenchmarkResult(benchmark$$1, usec, rms));
    return null
  }
};
BenchmarkSuite.prototype.RunStep = function(runner$$2) {
  function RunNextSetup() {
    if(index$$40 < length$$12) {
      try {
        suite$$1.benchmarks[index$$40].Setup()
      }catch(e$$4) {
        suite$$1.NotifyError(e$$4);
        return null
      }
      return RunNextBenchmark
    }
    suite$$1.NotifyResult();
    return null
  }
  function RunNextBenchmark() {
    try {
      data$$20 = suite$$1.RunSingleBenchmark(suite$$1.benchmarks[index$$40], data$$20)
    }catch(e$$5) {
      suite$$1.NotifyError(e$$5);
      return null
    }
    return data$$20 == null ? RunNextTearDown : RunNextBenchmark()
  }
  function RunNextTearDown() {
    try {
      suite$$1.benchmarks[index$$40++].TearDown()
    }catch(e$$6) {
      suite$$1.NotifyError(e$$6);
      return null
    }
    return RunNextSetup
  }
  BenchmarkSuite.ResetRNG();
  this.results = [];
  this.runner = runner$$2;
  var length$$12 = this.benchmarks.length;
  var index$$40 = 0;
  var suite$$1 = this;
  var data$$20;
  return RunNextSetup()
};
var GameboyBenchmark = new BenchmarkSuite("Gameboy", [26288412], [new Benchmark("Gameboy", false, false, 20, runGameboy, setupGameboy, tearDownGameboy, null, 4)]);
var decoded_gameboy_rom = null;
var expectedGameboyStateStr = '{"registerA":160,"registerB":255,"registerC":255,"registerE":11,' + '"registersHL":51600,"programCounter":24309,"stackPointer":49706,' + '"sumROM":10171578,"sumMemory":3435856,"sumMBCRam":234598,"sumVRam":0}';
var GameBoyWindow = {};
var GameBoyAudioNode = {bufferSize:0, onaudioprocess:null, connect:function() {
}, run:function() {
  var event$$1 = {outputBuffer:this.outputBuffer};
  this.onaudioprocess(event$$1)
}};
var mock_date_time_counter = 0;
var toBase64 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "/", "="];
var fromBase64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
Resampler.prototype.initialize = function() {
  if(this.fromSampleRate > 0 && this.toSampleRate > 0 && this.channels > 0) {
    if(this.fromSampleRate == this.toSampleRate) {
      this.resampler = this.bypassResampler;
      this.ratioWeight = 1
    }else {
      this.compileInterpolationFunction();
      this.resampler = this.interpolate;
      this.ratioWeight = this.fromSampleRate / this.toSampleRate;
      this.tailExists = false;
      this.lastWeight = 0;
      this.initializeBuffers()
    }
  }else {
    throw new Error("Invalid settings specified for the resampler.");
  }
};
Resampler.prototype.compileInterpolationFunction = function() {
  var toCompile = "var bufferLength = Math.min(buffer.length, this.outputBufferSize);  if ((bufferLength % " + this.channels + ") == 0) {    if (bufferLength > 0) {      var ratioWeight = this.ratioWeight;      var weight = 0;";
  var channel = 0;
  for(;channel < this.channels;++channel) {
    toCompile += "var output" + channel + " = 0;"
  }
  toCompile += "var actualPosition = 0;      var amountToNext = 0;      var alreadyProcessedTail = !this.tailExists;      this.tailExists = false;      var outputBuffer = this.outputBuffer;      var outputOffset = 0;      var currentPosition = 0;      do {        if (alreadyProcessedTail) {          weight = ratioWeight;";
  channel = 0;
  for(;channel < this.channels;++channel) {
    toCompile += "output" + channel + " = 0;"
  }
  toCompile += "}        else {          weight = this.lastWeight;";
  channel = 0;
  for(;channel < this.channels;++channel) {
    toCompile += "output" + channel + " = this.lastOutput[" + channel + "];"
  }
  toCompile += "alreadyProcessedTail = true;        }        while (weight > 0 && actualPosition < bufferLength) {          amountToNext = 1 + actualPosition - currentPosition;          if (weight >= amountToNext) {";
  channel = 0;
  for(;channel < this.channels;++channel) {
    toCompile += "output" + channel + " += buffer[actualPosition++] * amountToNext;"
  }
  toCompile += "currentPosition = actualPosition;            weight -= amountToNext;          }          else {";
  channel = 0;
  for(;channel < this.channels;++channel) {
    toCompile += "output" + channel + " += buffer[actualPosition" + (channel > 0 ? " + " + channel : "") + "] * weight;"
  }
  toCompile += "currentPosition += weight;            weight = 0;            break;          }        }        if (weight == 0) {";
  channel = 0;
  for(;channel < this.channels;++channel) {
    toCompile += "outputBuffer[outputOffset++] = output" + channel + " / ratioWeight;"
  }
  toCompile += "}        else {          this.lastWeight = weight;";
  channel = 0;
  for(;channel < this.channels;++channel) {
    toCompile += "this.lastOutput[" + channel + "] = output" + channel + ";"
  }
  toCompile += 'this.tailExists = true;          break;        }      } while (actualPosition < bufferLength);      return this.bufferSlice(outputOffset);    }    else {      return (this.noReturn) ? 0 : [];    }  }  else {    throw(new Error("Buffer was of incorrect sample length."));  }';
  this.interpolate = Function("buffer", toCompile)
};
Resampler.prototype.bypassResampler = function(buffer$$9) {
  if(this.noReturn) {
    this.outputBuffer = buffer$$9;
    return buffer$$9.length
  }else {
    return buffer$$9
  }
};
Resampler.prototype.bufferSlice = function(sliceAmount) {
  if(this.noReturn) {
    return sliceAmount
  }else {
    try {
      return this.outputBuffer.subarray(0, sliceAmount)
    }catch(error$$5) {
      try {
        this.outputBuffer.length = sliceAmount;
        return this.outputBuffer
      }catch(error$$6) {
        return this.outputBuffer.slice(0, sliceAmount)
      }
    }
  }
};
Resampler.prototype.initializeBuffers = function() {
  try {
    this.outputBuffer = new Float32Array(this.outputBufferSize);
    this.lastOutput = new Float32Array(this.channels)
  }catch(error$$7) {
    this.outputBuffer = [];
    this.lastOutput = []
  }
};
XAudioServer.prototype.MOZWriteAudio = function(buffer$$10) {
  this.MOZWriteAudioNoCallback(buffer$$10);
  this.MOZExecuteCallback()
};
XAudioServer.prototype.MOZWriteAudioNoCallback = function(buffer$$11) {
  this.writeMozAudio(buffer$$11)
};
XAudioServer.prototype.callbackBasedWriteAudio = function(buffer$$12) {
  this.callbackBasedWriteAudioNoCallback(buffer$$12);
  this.callbackBasedExecuteCallback()
};
XAudioServer.prototype.callbackBasedWriteAudioNoCallback = function(buffer$$13) {
  var length$$15 = buffer$$13.length;
  var bufferCounter = 0;
  for(;bufferCounter < length$$15 && audioBufferSize < webAudioMaxBufferSize;) {
    audioContextSampleBuffer[audioBufferSize++] = buffer$$13[bufferCounter++]
  }
};
XAudioServer.prototype.writeAudio = function(buffer$$14) {
  if(this.audioType == 0) {
    this.MOZWriteAudio(buffer$$14)
  }else {
    if(this.audioType == 1) {
      this.callbackBasedWriteAudio(buffer$$14)
    }else {
      if(this.audioType == 2) {
        if(this.checkFlashInit() || launchedContext) {
          this.callbackBasedWriteAudio(buffer$$14)
        }else {
          if(this.mozAudioFound) {
            this.MOZWriteAudio(buffer$$14)
          }
        }
      }
    }
  }
};
XAudioServer.prototype.writeAudioNoCallback = function(buffer$$15) {
  if(this.audioType == 0) {
    this.MOZWriteAudioNoCallback(buffer$$15)
  }else {
    if(this.audioType == 1) {
      this.callbackBasedWriteAudioNoCallback(buffer$$15)
    }else {
      if(this.audioType == 2) {
        if(this.checkFlashInit() || launchedContext) {
          this.callbackBasedWriteAudioNoCallback(buffer$$15)
        }else {
          if(this.mozAudioFound) {
            this.MOZWriteAudioNoCallback(buffer$$15)
          }
        }
      }
    }
  }
};
XAudioServer.prototype.remainingBuffer = function() {
  if(this.audioType == 0) {
    return this.samplesAlreadyWritten - this.audioHandleMoz.mozCurrentSampleOffset()
  }else {
    if(this.audioType == 1) {
      return(resampledSamplesLeft() * resampleControl.ratioWeight >> this.audioChannels - 1 << this.audioChannels - 1) + audioBufferSize
    }else {
      if(this.audioType == 2) {
        if(this.checkFlashInit() || launchedContext) {
          return(resampledSamplesLeft() * resampleControl.ratioWeight >> this.audioChannels - 1 << this.audioChannels - 1) + audioBufferSize
        }else {
          if(this.mozAudioFound) {
            return this.samplesAlreadyWritten - this.audioHandleMoz.mozCurrentSampleOffset()
          }
        }
      }
    }
  }
  return 0
};
XAudioServer.prototype.MOZExecuteCallback = function() {
  var samplesRequested = webAudioMinBufferSize - this.remainingBuffer();
  if(samplesRequested > 0) {
    this.writeMozAudio(this.underRunCallback(samplesRequested))
  }
};
XAudioServer.prototype.callbackBasedExecuteCallback = function() {
  var samplesRequested$$1 = webAudioMinBufferSize - this.remainingBuffer();
  if(samplesRequested$$1 > 0) {
    this.callbackBasedWriteAudioNoCallback(this.underRunCallback(samplesRequested$$1))
  }
};
XAudioServer.prototype.executeCallback = function() {
  if(this.audioType == 0) {
    this.MOZExecuteCallback()
  }else {
    if(this.audioType == 1) {
      this.callbackBasedExecuteCallback()
    }else {
      if(this.audioType == 2) {
        if(this.checkFlashInit() || launchedContext) {
          this.callbackBasedExecuteCallback()
        }else {
          if(this.mozAudioFound) {
            this.MOZExecuteCallback()
          }
        }
      }
    }
  }
};
XAudioServer.prototype.initializeAudio = function() {
  try {
    throw new Error("Select initializeWebAudio case");
  }catch(error$$8) {
    try {
      this.initializeWebAudio()
    }catch(error$$9) {
      try {
        this.initializeFlashAudio()
      }catch(error$$10) {
        throw new Error("Browser does not support real time audio output.");
      }
    }
  }
};
XAudioServer.prototype.preInitializeMozAudio = function() {
  this.audioHandleMoz = new Audio;
  this.audioHandleMoz.mozSetup(this.audioChannels, XAudioJSSampleRate);
  this.samplesAlreadyWritten = 0;
  var emptySampleFrame = this.audioChannels == 2 ? [0, 0] : [0];
  var prebufferAmount = 0;
  if(navigator.platform != "MacIntel" && navigator.platform != "MacPPC") {
    for(;this.audioHandleMoz.mozCurrentSampleOffset() == 0;) {
      prebufferAmount += this.audioHandleMoz.mozWriteAudio(emptySampleFrame)
    }
    var samplesToDoubleBuffer = prebufferAmount / this.audioChannels;
    var index$$45 = 0;
    for(;index$$45 < samplesToDoubleBuffer;index$$45++) {
      this.samplesAlreadyWritten += this.audioHandleMoz.mozWriteAudio(emptySampleFrame)
    }
  }
  this.samplesAlreadyWritten += prebufferAmount;
  webAudioMinBufferSize += this.samplesAlreadyWritten;
  this.mozAudioFound = true
};
XAudioServer.prototype.initializeMozAudio = function() {
  this.writeMozAudio(getFloat32(webAudioMinBufferSize));
  this.audioType = 0
};
XAudioServer.prototype.initializeWebAudio = function() {
  if(launchedContext) {
    resetCallbackAPIAudioBuffer(webAudioActualSampleRate, samplesPerCallback);
    this.audioType = 1
  }else {
    throw new Error("");
  }
};
XAudioServer.prototype.initializeFlashAudio = function() {
  var existingFlashload = document.getElementById("XAudioJS");
  if(existingFlashload == null) {
    var thisObj = this;
    var mainContainerNode = document.createElement("div");
    mainContainerNode.setAttribute("style", "position: fixed; bottom: 0px; right: 0px; margin: 0px; padding: 0px; border: none; width: 8px; height: 8px; overflow: hidden; z-index: -1000; ");
    var containerNode = document.createElement("div");
    containerNode.setAttribute("style", "position: static; border: none; width: 0px; height: 0px; visibility: hidden; margin: 8px; padding: 0px;");
    containerNode.setAttribute("id", "XAudioJS");
    mainContainerNode.appendChild(containerNode);
    document.getElementsByTagName("body")[0].appendChild(mainContainerNode);
    swfobject.embedSWF("XAudioJS.swf", "XAudioJS", "8", "8", "9.0.0", "", {}, {"allowscriptaccess":"always"}, {"style":"position: static; visibility: hidden; margin: 8px; padding: 0px; border: none"}, function(event$$2) {
      if(event$$2.success) {
        thisObj.audioHandleFlash = event$$2.ref
      }else {
        thisObj.audioType = 1
      }
    })
  }else {
    this.audioHandleFlash = existingFlashload
  }
  this.audioType = 2
};
XAudioServer.prototype.changeVolume = function(newVolume) {
  if(newVolume >= 0 && newVolume <= 1) {
    XAudioJSVolume = newVolume;
    if(this.checkFlashInit()) {
      this.audioHandleFlash.changeVolume(XAudioJSVolume)
    }
    if(this.mozAudioFound) {
      this.audioHandleMoz.volume = XAudioJSVolume
    }
  }
};
XAudioServer.prototype.writeMozAudio = function(buffer$$16) {
  var length$$16 = this.mozAudioTail.length;
  if(length$$16 > 0) {
    var samplesAccepted = this.audioHandleMoz.mozWriteAudio(this.mozAudioTail);
    this.samplesAlreadyWritten += samplesAccepted;
    this.mozAudioTail.splice(0, samplesAccepted)
  }
  length$$16 = Math.min(buffer$$16.length, webAudioMaxBufferSize - this.samplesAlreadyWritten + this.audioHandleMoz.mozCurrentSampleOffset());
  samplesAccepted = this.audioHandleMoz.mozWriteAudio(buffer$$16);
  this.samplesAlreadyWritten += samplesAccepted;
  var index$$46 = 0;
  for(;length$$16 > samplesAccepted;--length$$16) {
    this.mozAudioTail.push(buffer$$16[index$$46++])
  }
};
XAudioServer.prototype.checkFlashInit = function() {
  if(!this.flashInitialized && this.audioHandleFlash && this.audioHandleFlash.initialize) {
    this.flashInitialized = true;
    this.audioHandleFlash.initialize(this.audioChannels, XAudioJSVolume);
    resetCallbackAPIAudioBuffer(44100, samplesPerCallback)
  }
  return this.flashInitialized
};
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
(function() {
  if(!launchedContext) {
    try {
      audioContextHandle = new GameBoyAudioContext
    }catch(error$$15) {
      try {
        audioContextHandle = new AudioContext
      }catch(error$$16) {
        return
      }
    }
    try {
      audioSource = audioContextHandle.createBufferSource();
      audioSource.loop = false;
      XAudioJSSampleRate = webAudioActualSampleRate = audioContextHandle.sampleRate;
      audioSource.buffer = audioContextHandle.createBuffer(1, 1, webAudioActualSampleRate);
      audioNode = audioContextHandle.createJavaScriptNode(samplesPerCallback, 1, 2);
      audioNode.onaudioprocess = audioOutputEvent
    }catch(error$$17) {
      return
    }
    launchedContext = true
  }
})();
Resize.prototype.initialize = function() {
  if(this.widthOriginal > 0 && this.heightOriginal > 0 && this.targetWidth > 0 && this.targetHeight > 0) {
    if(this.widthOriginal == this.targetWidth) {
      this.resizeWidth = this.bypassResizer
    }else {
      this.ratioWeightWidthPass = this.widthOriginal / this.targetWidth;
      if(this.ratioWeightWidthPass < 1 && this.interpolationPass) {
        this.initializeFirstPassBuffers(true);
        this.resizeWidth = this.colorChannels == 4 ? this.resizeWidthInterpolatedRGBA : this.resizeWidthInterpolatedRGB
      }else {
        this.initializeFirstPassBuffers(false);
        this.resizeWidth = this.colorChannels == 4 ? this.resizeWidthRGBA : this.resizeWidthRGB
      }
    }
    if(this.heightOriginal == this.targetHeight) {
      this.resizeHeight = this.bypassResizer
    }else {
      this.ratioWeightHeightPass = this.heightOriginal / this.targetHeight;
      if(this.ratioWeightHeightPass < 1 && this.interpolationPass) {
        this.initializeSecondPassBuffers(true);
        this.resizeHeight = this.resizeHeightInterpolated
      }else {
        this.initializeSecondPassBuffers(false);
        this.resizeHeight = this.colorChannels == 4 ? this.resizeHeightRGBA : this.resizeHeightRGB
      }
    }
  }else {
    throw new Error("Invalid settings specified for the resizer.");
  }
};
Resize.prototype.resizeWidthRGB = function(buffer$$17) {
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
  do {
    line = 0;
    for(;line < this.originalHeightMultipliedByChannels;) {
      output[line++] = 0;
      output[line++] = 0;
      output[line++] = 0
    }
    weight = ratioWeight;
    do {
      amountToNext = 1 + actualPosition - currentPosition;
      if(weight >= amountToNext) {
        line = 0, pixelOffset = actualPosition;
        for(;line < this.originalHeightMultipliedByChannels;pixelOffset += nextLineOffsetOriginalWidth) {
          output[line++] += buffer$$17[pixelOffset++] * amountToNext;
          output[line++] += buffer$$17[pixelOffset++] * amountToNext;
          output[line++] += buffer$$17[pixelOffset] * amountToNext
        }
        currentPosition = actualPosition = actualPosition + 3;
        weight -= amountToNext
      }else {
        line = 0, pixelOffset = actualPosition;
        for(;line < this.originalHeightMultipliedByChannels;pixelOffset += nextLineOffsetOriginalWidth) {
          output[line++] += buffer$$17[pixelOffset++] * weight;
          output[line++] += buffer$$17[pixelOffset++] * weight;
          output[line++] += buffer$$17[pixelOffset] * weight
        }
        currentPosition += weight;
        break
      }
    }while(weight > 0 && actualPosition < this.originalWidthMultipliedByChannels);
    line = 0, pixelOffset = outputOffset;
    for(;line < this.originalHeightMultipliedByChannels;pixelOffset += nextLineOffsetTargetWidth) {
      outputBuffer[pixelOffset++] = output[line++] / ratioWeight;
      outputBuffer[pixelOffset++] = output[line++] / ratioWeight;
      outputBuffer[pixelOffset] = output[line++] / ratioWeight
    }
    outputOffset += 3
  }while(outputOffset < this.targetWidthMultipliedByChannels);
  return outputBuffer
};
Resize.prototype.resizeWidthInterpolatedRGB = function(buffer$$18) {
  var ratioWeight$$1 = (this.widthOriginal - 1) / this.targetWidth;
  var weight$$1 = 0;
  var finalOffset = 0;
  var pixelOffset$$1 = 0;
  var outputBuffer$$1 = this.widthBuffer;
  var targetPosition = 0;
  for(;targetPosition < this.targetWidthMultipliedByChannels;targetPosition += 3, weight$$1 += ratioWeight$$1) {
    secondWeight = weight$$1 % 1;
    firstWeight = 1 - secondWeight;
    finalOffset = targetPosition, pixelOffset$$1 = Math.floor(weight$$1) * 3;
    for(;finalOffset < this.widthPassResultSize;pixelOffset$$1 += this.originalWidthMultipliedByChannels, finalOffset += this.targetWidthMultipliedByChannels) {
      outputBuffer$$1[finalOffset] = buffer$$18[pixelOffset$$1] * firstWeight + buffer$$18[pixelOffset$$1 + 3] * secondWeight;
      outputBuffer$$1[finalOffset + 1] = buffer$$18[pixelOffset$$1 + 1] * firstWeight + buffer$$18[pixelOffset$$1 + 4] * secondWeight;
      outputBuffer$$1[finalOffset + 2] = buffer$$18[pixelOffset$$1 + 2] * firstWeight + buffer$$18[pixelOffset$$1 + 5] * secondWeight
    }
  }
  return outputBuffer$$1
};
Resize.prototype.resizeWidthRGBA = function(buffer$$19) {
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
  do {
    line$$1 = 0;
    for(;line$$1 < this.originalHeightMultipliedByChannels;) {
      output$$1[line$$1++] = 0;
      output$$1[line$$1++] = 0;
      output$$1[line$$1++] = 0;
      output$$1[line$$1++] = 0
    }
    weight$$2 = ratioWeight$$2;
    do {
      amountToNext$$1 = 1 + actualPosition$$1 - currentPosition$$1;
      if(weight$$2 >= amountToNext$$1) {
        line$$1 = 0, pixelOffset$$2 = actualPosition$$1;
        for(;line$$1 < this.originalHeightMultipliedByChannels;pixelOffset$$2 += nextLineOffsetOriginalWidth$$1) {
          output$$1[line$$1++] += buffer$$19[pixelOffset$$2++] * amountToNext$$1;
          output$$1[line$$1++] += buffer$$19[pixelOffset$$2++] * amountToNext$$1;
          output$$1[line$$1++] += buffer$$19[pixelOffset$$2++] * amountToNext$$1;
          output$$1[line$$1++] += buffer$$19[pixelOffset$$2] * amountToNext$$1
        }
        currentPosition$$1 = actualPosition$$1 = actualPosition$$1 + 4;
        weight$$2 -= amountToNext$$1
      }else {
        line$$1 = 0, pixelOffset$$2 = actualPosition$$1;
        for(;line$$1 < this.originalHeightMultipliedByChannels;pixelOffset$$2 += nextLineOffsetOriginalWidth$$1) {
          output$$1[line$$1++] += buffer$$19[pixelOffset$$2++] * weight$$2;
          output$$1[line$$1++] += buffer$$19[pixelOffset$$2++] * weight$$2;
          output$$1[line$$1++] += buffer$$19[pixelOffset$$2++] * weight$$2;
          output$$1[line$$1++] += buffer$$19[pixelOffset$$2] * weight$$2
        }
        currentPosition$$1 += weight$$2;
        break
      }
    }while(weight$$2 > 0 && actualPosition$$1 < this.originalWidthMultipliedByChannels);
    line$$1 = 0, pixelOffset$$2 = outputOffset$$1;
    for(;line$$1 < this.originalHeightMultipliedByChannels;pixelOffset$$2 += nextLineOffsetTargetWidth$$1) {
      outputBuffer$$2[pixelOffset$$2++] = output$$1[line$$1++] / ratioWeight$$2;
      outputBuffer$$2[pixelOffset$$2++] = output$$1[line$$1++] / ratioWeight$$2;
      outputBuffer$$2[pixelOffset$$2++] = output$$1[line$$1++] / ratioWeight$$2;
      outputBuffer$$2[pixelOffset$$2] = output$$1[line$$1++] / ratioWeight$$2
    }
    outputOffset$$1 += 4
  }while(outputOffset$$1 < this.targetWidthMultipliedByChannels);
  return outputBuffer$$2
};
Resize.prototype.resizeWidthInterpolatedRGBA = function(buffer$$20) {
  var ratioWeight$$3 = (this.widthOriginal - 1) / this.targetWidth;
  var weight$$3 = 0;
  var finalOffset$$1 = 0;
  var pixelOffset$$3 = 0;
  var outputBuffer$$3 = this.widthBuffer;
  var targetPosition$$1 = 0;
  for(;targetPosition$$1 < this.targetWidthMultipliedByChannels;targetPosition$$1 += 4, weight$$3 += ratioWeight$$3) {
    secondWeight = weight$$3 % 1;
    firstWeight = 1 - secondWeight;
    finalOffset$$1 = targetPosition$$1, pixelOffset$$3 = Math.floor(weight$$3) * 4;
    for(;finalOffset$$1 < this.widthPassResultSize;pixelOffset$$3 += this.originalWidthMultipliedByChannels, finalOffset$$1 += this.targetWidthMultipliedByChannels) {
      outputBuffer$$3[finalOffset$$1] = buffer$$20[pixelOffset$$3] * firstWeight + buffer$$20[pixelOffset$$3 + 4] * secondWeight;
      outputBuffer$$3[finalOffset$$1 + 1] = buffer$$20[pixelOffset$$3 + 1] * firstWeight + buffer$$20[pixelOffset$$3 + 5] * secondWeight;
      outputBuffer$$3[finalOffset$$1 + 2] = buffer$$20[pixelOffset$$3 + 2] * firstWeight + buffer$$20[pixelOffset$$3 + 6] * secondWeight;
      outputBuffer$$3[finalOffset$$1 + 3] = buffer$$20[pixelOffset$$3 + 3] * firstWeight + buffer$$20[pixelOffset$$3 + 7] * secondWeight
    }
  }
  return outputBuffer$$3
};
Resize.prototype.resizeHeightRGB = function(buffer$$21) {
  var ratioWeight$$4 = this.ratioWeightHeightPass;
  var weight$$4 = 0;
  var amountToNext$$2 = 0;
  var actualPosition$$2 = 0;
  var currentPosition$$2 = 0;
  var pixelOffset$$4 = 0;
  var outputOffset$$2 = 0;
  var output$$2 = this.outputHeightWorkBench;
  var outputBuffer$$4 = this.heightBuffer;
  do {
    pixelOffset$$4 = 0;
    for(;pixelOffset$$4 < this.targetWidthMultipliedByChannels;) {
      output$$2[pixelOffset$$4++] = 0;
      output$$2[pixelOffset$$4++] = 0;
      output$$2[pixelOffset$$4++] = 0
    }
    weight$$4 = ratioWeight$$4;
    do {
      amountToNext$$2 = 1 + actualPosition$$2 - currentPosition$$2;
      if(weight$$4 >= amountToNext$$2) {
        pixelOffset$$4 = 0;
        for(;pixelOffset$$4 < this.targetWidthMultipliedByChannels;) {
          output$$2[pixelOffset$$4++] += buffer$$21[actualPosition$$2++] * amountToNext$$2;
          output$$2[pixelOffset$$4++] += buffer$$21[actualPosition$$2++] * amountToNext$$2;
          output$$2[pixelOffset$$4++] += buffer$$21[actualPosition$$2++] * amountToNext$$2
        }
        currentPosition$$2 = actualPosition$$2;
        weight$$4 -= amountToNext$$2
      }else {
        pixelOffset$$4 = 0, amountToNext$$2 = actualPosition$$2;
        for(;pixelOffset$$4 < this.targetWidthMultipliedByChannels;) {
          output$$2[pixelOffset$$4++] += buffer$$21[amountToNext$$2++] * weight$$4;
          output$$2[pixelOffset$$4++] += buffer$$21[amountToNext$$2++] * weight$$4;
          output$$2[pixelOffset$$4++] += buffer$$21[amountToNext$$2++] * weight$$4
        }
        currentPosition$$2 += weight$$4;
        break
      }
    }while(weight$$4 > 0 && actualPosition$$2 < this.widthPassResultSize);
    pixelOffset$$4 = 0;
    for(;pixelOffset$$4 < this.targetWidthMultipliedByChannels;) {
      outputBuffer$$4[outputOffset$$2++] = Math.round(output$$2[pixelOffset$$4++] / ratioWeight$$4);
      outputBuffer$$4[outputOffset$$2++] = Math.round(output$$2[pixelOffset$$4++] / ratioWeight$$4);
      outputBuffer$$4[outputOffset$$2++] = Math.round(output$$2[pixelOffset$$4++] / ratioWeight$$4)
    }
  }while(outputOffset$$2 < this.finalResultSize);
  return outputBuffer$$4
};
Resize.prototype.resizeHeightInterpolated = function(buffer$$22) {
  var ratioWeight$$5 = (this.heightOriginal - 1) / this.targetHeight;
  var weight$$5 = 0;
  var finalOffset$$2 = 0;
  var pixelOffset$$5 = 0;
  var pixelOffsetAccumulated = 0;
  var pixelOffsetAccumulated2 = 0;
  var outputBuffer$$5 = this.heightBuffer;
  do {
    secondWeight = weight$$5 % 1;
    firstWeight = 1 - secondWeight;
    pixelOffsetAccumulated = Math.floor(weight$$5) * this.targetWidthMultipliedByChannels;
    pixelOffsetAccumulated2 = pixelOffsetAccumulated + this.targetWidthMultipliedByChannels;
    pixelOffset$$5 = 0;
    for(;pixelOffset$$5 < this.targetWidthMultipliedByChannels;++pixelOffset$$5) {
      outputBuffer$$5[finalOffset$$2++] = buffer$$22[pixelOffsetAccumulated + pixelOffset$$5] * firstWeight + buffer$$22[pixelOffsetAccumulated2 + pixelOffset$$5] * secondWeight
    }
    weight$$5 += ratioWeight$$5
  }while(finalOffset$$2 < this.finalResultSize);
  return outputBuffer$$5
};
Resize.prototype.resizeHeightRGBA = function(buffer$$23) {
  var ratioWeight$$6 = this.ratioWeightHeightPass;
  var weight$$6 = 0;
  var amountToNext$$3 = 0;
  var actualPosition$$3 = 0;
  var currentPosition$$3 = 0;
  var pixelOffset$$6 = 0;
  var outputOffset$$3 = 0;
  var output$$3 = this.outputHeightWorkBench;
  var outputBuffer$$6 = this.heightBuffer;
  do {
    pixelOffset$$6 = 0;
    for(;pixelOffset$$6 < this.targetWidthMultipliedByChannels;) {
      output$$3[pixelOffset$$6++] = 0;
      output$$3[pixelOffset$$6++] = 0;
      output$$3[pixelOffset$$6++] = 0;
      output$$3[pixelOffset$$6++] = 0
    }
    weight$$6 = ratioWeight$$6;
    do {
      amountToNext$$3 = 1 + actualPosition$$3 - currentPosition$$3;
      if(weight$$6 >= amountToNext$$3) {
        pixelOffset$$6 = 0;
        for(;pixelOffset$$6 < this.targetWidthMultipliedByChannels;) {
          output$$3[pixelOffset$$6++] += buffer$$23[actualPosition$$3++] * amountToNext$$3;
          output$$3[pixelOffset$$6++] += buffer$$23[actualPosition$$3++] * amountToNext$$3;
          output$$3[pixelOffset$$6++] += buffer$$23[actualPosition$$3++] * amountToNext$$3;
          output$$3[pixelOffset$$6++] += buffer$$23[actualPosition$$3++] * amountToNext$$3
        }
        currentPosition$$3 = actualPosition$$3;
        weight$$6 -= amountToNext$$3
      }else {
        pixelOffset$$6 = 0, amountToNext$$3 = actualPosition$$3;
        for(;pixelOffset$$6 < this.targetWidthMultipliedByChannels;) {
          output$$3[pixelOffset$$6++] += buffer$$23[amountToNext$$3++] * weight$$6;
          output$$3[pixelOffset$$6++] += buffer$$23[amountToNext$$3++] * weight$$6;
          output$$3[pixelOffset$$6++] += buffer$$23[amountToNext$$3++] * weight$$6;
          output$$3[pixelOffset$$6++] += buffer$$23[amountToNext$$3++] * weight$$6
        }
        currentPosition$$3 += weight$$6;
        break
      }
    }while(weight$$6 > 0 && actualPosition$$3 < this.widthPassResultSize);
    pixelOffset$$6 = 0;
    for(;pixelOffset$$6 < this.targetWidthMultipliedByChannels;) {
      outputBuffer$$6[outputOffset$$3++] = Math.round(output$$3[pixelOffset$$6++] / ratioWeight$$6);
      outputBuffer$$6[outputOffset$$3++] = Math.round(output$$3[pixelOffset$$6++] / ratioWeight$$6);
      outputBuffer$$6[outputOffset$$3++] = Math.round(output$$3[pixelOffset$$6++] / ratioWeight$$6);
      outputBuffer$$6[outputOffset$$3++] = Math.round(output$$3[pixelOffset$$6++] / ratioWeight$$6)
    }
  }while(outputOffset$$3 < this.finalResultSize);
  return outputBuffer$$6
};
Resize.prototype.resizeHeightInterpolatedRGBA = function(buffer$$24) {
  var ratioWeight$$7 = (this.heightOriginal - 1) / this.targetHeight;
  var weight$$7 = 0;
  var finalOffset$$3 = 0;
  var pixelOffset$$7 = 0;
  var outputBuffer$$7 = this.heightBuffer;
  for(;pixelOffset$$7 < this.finalResultSize;) {
    secondWeight = weight$$7 % 1;
    firstWeight = 1 - secondWeight;
    pixelOffset$$7 = Math.floor(weight$$7) * 4;
    for(;pixelOffset$$7 < this.targetWidthMultipliedByChannels;pixelOffset$$7 += 4) {
      outputBuffer$$7[finalOffset$$3++] = buffer$$24[pixelOffset$$7] * firstWeight + buffer$$24[pixelOffset$$7 + 4] * secondWeight;
      outputBuffer$$7[finalOffset$$3++] = buffer$$24[pixelOffset$$7 + 1] * firstWeight + buffer$$24[pixelOffset$$7 + 5] * secondWeight;
      outputBuffer$$7[finalOffset$$3++] = buffer$$24[pixelOffset$$7 + 2] * firstWeight + buffer$$24[pixelOffset$$7 + 6] * secondWeight;
      outputBuffer$$7[finalOffset$$3++] = buffer$$24[pixelOffset$$7 + 3] * firstWeight + buffer$$24[pixelOffset$$7 + 7] * secondWeight
    }
    weight$$7 += ratioWeight$$7
  }
  return outputBuffer$$7
};
Resize.prototype.resize = function(buffer$$25) {
  return this.resizeHeight(this.resizeWidth(buffer$$25))
};
Resize.prototype.bypassResizer = function(buffer$$26) {
  return buffer$$26
};
Resize.prototype.initializeFirstPassBuffers = function(BILINEARAlgo) {
  this.widthBuffer = this.generateFloatBuffer(this.widthPassResultSize);
  if(!BILINEARAlgo) {
    this.outputWidthWorkBench = this.generateFloatBuffer(this.originalHeightMultipliedByChannels)
  }
};
Resize.prototype.initializeSecondPassBuffers = function(BILINEARAlgo$$1) {
  this.heightBuffer = this.generateUint8Buffer(this.finalResultSize);
  if(!BILINEARAlgo$$1) {
    this.outputHeightWorkBench = this.generateFloatBuffer(this.targetWidthMultipliedByChannels)
  }
};
Resize.prototype.generateFloatBuffer = function(bufferLength) {
  try {
    return new Float32Array(bufferLength)
  }catch(error$$18) {
    return[]
  }
};
Resize.prototype.generateUint8Buffer = function(bufferLength$$1) {
  try {
    return this.checkForOperaMathBug(new Uint8Array(bufferLength$$1))
  }catch(error$$19) {
    return[]
  }
};
Resize.prototype.checkForOperaMathBug = function(typedArray) {
  typedArray[0] = -1;
  typedArray[0] >>= 0;
  if(typedArray[0] != 255) {
    return[]
  }else {
    return typedArray
  }
};
GameBoyCore.prototype.GBBOOTROM = [];
GameBoyCore.prototype.GBCBOOTROM = [];
GameBoyCore.prototype.ffxxDump = [15, 0, 124, 255, 0, 0, 0, 248, 255, 255, 255, 255, 255, 255, 255, 1, 128, 191, 243, 255, 191, 255, 63, 0, 255, 191, 127, 255, 159, 255, 191, 255, 255, 0, 0, 191, 119, 243, 241, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 145, 128, 0, 0, 0, 0, 0, 252, 0, 0, 0, 0, 255, 126, 255, 254, 255, 255, 255, 255, 255, 255, 62, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 
192, 255, 193, 0, 254, 255, 255, 255, 248, 255, 0, 0, 0, 143, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 206, 237, 102, 102, 204, 13, 0, 11, 3, 115, 0, 131, 0, 12, 0, 13, 0, 8, 17, 31, 136, 137, 0, 14, 220, 204, 110, 230, 221, 221, 217, 153, 187, 187, 103, 99, 110, 14, 236, 204, 221, 220, 153, 159, 187, 185, 51, 62, 69, 236, 82, 250, 8, 183, 7, 93, 1, 253, 192, 255, 8, 252, 0, 229, 11, 248, 194, 206, 244, 249, 15, 127, 69, 109, 61, 254, 70, 151, 51, 94, 8, 239, 241, 255, 134, 131, 36, 116, 18, 
252, 0, 159, 180, 183, 6, 213, 208, 122, 0, 158, 4, 95, 65, 47, 29, 119, 54, 117, 129, 170, 112, 58, 152, 209, 113, 2, 77, 1, 193, 255, 13, 0, 211, 5, 249, 0, 11, 0];
GameBoyCore.prototype.OPCODE = [function(parentObj$$1) {
}, function(parentObj$$2) {
  parentObj$$2.registerC = parentObj$$2.memoryReader[parentObj$$2.programCounter](parentObj$$2, parentObj$$2.programCounter);
  parentObj$$2.registerB = parentObj$$2.memoryRead(parentObj$$2.programCounter + 1 & 65535);
  parentObj$$2.programCounter = parentObj$$2.programCounter + 2 & 65535
}, function(parentObj$$3) {
  parentObj$$3.memoryWrite(parentObj$$3.registerB << 8 | parentObj$$3.registerC, parentObj$$3.registerA)
}, function(parentObj$$4) {
  var temp_var = (parentObj$$4.registerB << 8 | parentObj$$4.registerC) + 1;
  parentObj$$4.registerB = temp_var >> 8 & 255;
  parentObj$$4.registerC = temp_var & 255
}, function(parentObj$$5) {
  parentObj$$5.registerB = parentObj$$5.registerB + 1 & 255;
  parentObj$$5.FZero = parentObj$$5.registerB == 0;
  parentObj$$5.FHalfCarry = (parentObj$$5.registerB & 15) == 0;
  parentObj$$5.FSubtract = false
}, function(parentObj$$6) {
  parentObj$$6.registerB = parentObj$$6.registerB - 1 & 255;
  parentObj$$6.FZero = parentObj$$6.registerB == 0;
  parentObj$$6.FHalfCarry = (parentObj$$6.registerB & 15) == 15;
  parentObj$$6.FSubtract = true
}, function(parentObj$$7) {
  parentObj$$7.registerB = parentObj$$7.memoryReader[parentObj$$7.programCounter](parentObj$$7, parentObj$$7.programCounter);
  parentObj$$7.programCounter = parentObj$$7.programCounter + 1 & 65535
}, function(parentObj$$8) {
  parentObj$$8.FCarry = parentObj$$8.registerA > 127;
  parentObj$$8.registerA = parentObj$$8.registerA << 1 & 255 | parentObj$$8.registerA >> 7;
  parentObj$$8.FZero = parentObj$$8.FSubtract = parentObj$$8.FHalfCarry = false
}, function(parentObj$$9) {
  var temp_var$$1 = parentObj$$9.memoryRead(parentObj$$9.programCounter + 1 & 65535) << 8 | parentObj$$9.memoryReader[parentObj$$9.programCounter](parentObj$$9, parentObj$$9.programCounter);
  parentObj$$9.programCounter = parentObj$$9.programCounter + 2 & 65535;
  parentObj$$9.memoryWrite(temp_var$$1, parentObj$$9.stackPointer & 255);
  parentObj$$9.memoryWrite(temp_var$$1 + 1 & 65535, parentObj$$9.stackPointer >> 8)
}, function(parentObj$$10) {
  var dirtySum = parentObj$$10.registersHL + (parentObj$$10.registerB << 8 | parentObj$$10.registerC);
  parentObj$$10.FHalfCarry = (parentObj$$10.registersHL & 4095) > (dirtySum & 4095);
  parentObj$$10.FCarry = dirtySum > 65535;
  parentObj$$10.registersHL = dirtySum & 65535;
  parentObj$$10.FSubtract = false
}, function(parentObj$$11) {
  parentObj$$11.registerA = parentObj$$11.memoryRead(parentObj$$11.registerB << 8 | parentObj$$11.registerC)
}, function(parentObj$$12) {
  var temp_var$$2 = (parentObj$$12.registerB << 8 | parentObj$$12.registerC) - 1 & 65535;
  parentObj$$12.registerB = temp_var$$2 >> 8;
  parentObj$$12.registerC = temp_var$$2 & 255
}, function(parentObj$$13) {
  parentObj$$13.registerC = parentObj$$13.registerC + 1 & 255;
  parentObj$$13.FZero = parentObj$$13.registerC == 0;
  parentObj$$13.FHalfCarry = (parentObj$$13.registerC & 15) == 0;
  parentObj$$13.FSubtract = false
}, function(parentObj$$14) {
  parentObj$$14.registerC = parentObj$$14.registerC - 1 & 255;
  parentObj$$14.FZero = parentObj$$14.registerC == 0;
  parentObj$$14.FHalfCarry = (parentObj$$14.registerC & 15) == 15;
  parentObj$$14.FSubtract = true
}, function(parentObj$$15) {
  parentObj$$15.registerC = parentObj$$15.memoryReader[parentObj$$15.programCounter](parentObj$$15, parentObj$$15.programCounter);
  parentObj$$15.programCounter = parentObj$$15.programCounter + 1 & 65535
}, function(parentObj$$16) {
  parentObj$$16.registerA = parentObj$$16.registerA >> 1 | (parentObj$$16.registerA & 1) << 7;
  parentObj$$16.FCarry = parentObj$$16.registerA > 127;
  parentObj$$16.FZero = parentObj$$16.FSubtract = parentObj$$16.FHalfCarry = false
}, function(parentObj$$17) {
  if(parentObj$$17.cGBC) {
    if((parentObj$$17.memory[65357] & 1) == 1) {
      if(parentObj$$17.memory[65357] > 127) {
        cout("Going into single clock speed mode.", 0);
        parentObj$$17.doubleSpeedShifter = 0;
        parentObj$$17.memory[65357] &= 127
      }else {
        cout("Going into double clock speed mode.", 0);
        parentObj$$17.doubleSpeedShifter = 1;
        parentObj$$17.memory[65357] |= 128
      }
      parentObj$$17.memory[65357] &= 254
    }else {
      parentObj$$17.handleSTOP()
    }
  }else {
    parentObj$$17.handleSTOP()
  }
}, function(parentObj$$18) {
  parentObj$$18.registerE = parentObj$$18.memoryReader[parentObj$$18.programCounter](parentObj$$18, parentObj$$18.programCounter);
  parentObj$$18.registerD = parentObj$$18.memoryRead(parentObj$$18.programCounter + 1 & 65535);
  parentObj$$18.programCounter = parentObj$$18.programCounter + 2 & 65535
}, function(parentObj$$19) {
  parentObj$$19.memoryWrite(parentObj$$19.registerD << 8 | parentObj$$19.registerE, parentObj$$19.registerA)
}, function(parentObj$$20) {
  var temp_var$$3 = (parentObj$$20.registerD << 8 | parentObj$$20.registerE) + 1;
  parentObj$$20.registerD = temp_var$$3 >> 8 & 255;
  parentObj$$20.registerE = temp_var$$3 & 255
}, function(parentObj$$21) {
  parentObj$$21.registerD = parentObj$$21.registerD + 1 & 255;
  parentObj$$21.FZero = parentObj$$21.registerD == 0;
  parentObj$$21.FHalfCarry = (parentObj$$21.registerD & 15) == 0;
  parentObj$$21.FSubtract = false
}, function(parentObj$$22) {
  parentObj$$22.registerD = parentObj$$22.registerD - 1 & 255;
  parentObj$$22.FZero = parentObj$$22.registerD == 0;
  parentObj$$22.FHalfCarry = (parentObj$$22.registerD & 15) == 15;
  parentObj$$22.FSubtract = true
}, function(parentObj$$23) {
  parentObj$$23.registerD = parentObj$$23.memoryReader[parentObj$$23.programCounter](parentObj$$23, parentObj$$23.programCounter);
  parentObj$$23.programCounter = parentObj$$23.programCounter + 1 & 65535
}, function(parentObj$$24) {
  var carry_flag = parentObj$$24.FCarry ? 1 : 0;
  parentObj$$24.FCarry = parentObj$$24.registerA > 127;
  parentObj$$24.registerA = parentObj$$24.registerA << 1 & 255 | carry_flag;
  parentObj$$24.FZero = parentObj$$24.FSubtract = parentObj$$24.FHalfCarry = false
}, function(parentObj$$25) {
  parentObj$$25.programCounter = parentObj$$25.programCounter + (parentObj$$25.memoryReader[parentObj$$25.programCounter](parentObj$$25, parentObj$$25.programCounter) << 24 >> 24) + 1 & 65535
}, function(parentObj$$26) {
  var dirtySum$$1 = parentObj$$26.registersHL + (parentObj$$26.registerD << 8 | parentObj$$26.registerE);
  parentObj$$26.FHalfCarry = (parentObj$$26.registersHL & 4095) > (dirtySum$$1 & 4095);
  parentObj$$26.FCarry = dirtySum$$1 > 65535;
  parentObj$$26.registersHL = dirtySum$$1 & 65535;
  parentObj$$26.FSubtract = false
}, function(parentObj$$27) {
  parentObj$$27.registerA = parentObj$$27.memoryRead(parentObj$$27.registerD << 8 | parentObj$$27.registerE)
}, function(parentObj$$28) {
  var temp_var$$4 = (parentObj$$28.registerD << 8 | parentObj$$28.registerE) - 1 & 65535;
  parentObj$$28.registerD = temp_var$$4 >> 8;
  parentObj$$28.registerE = temp_var$$4 & 255
}, function(parentObj$$29) {
  parentObj$$29.registerE = parentObj$$29.registerE + 1 & 255;
  parentObj$$29.FZero = parentObj$$29.registerE == 0;
  parentObj$$29.FHalfCarry = (parentObj$$29.registerE & 15) == 0;
  parentObj$$29.FSubtract = false
}, function(parentObj$$30) {
  parentObj$$30.registerE = parentObj$$30.registerE - 1 & 255;
  parentObj$$30.FZero = parentObj$$30.registerE == 0;
  parentObj$$30.FHalfCarry = (parentObj$$30.registerE & 15) == 15;
  parentObj$$30.FSubtract = true
}, function(parentObj$$31) {
  parentObj$$31.registerE = parentObj$$31.memoryReader[parentObj$$31.programCounter](parentObj$$31, parentObj$$31.programCounter);
  parentObj$$31.programCounter = parentObj$$31.programCounter + 1 & 65535
}, function(parentObj$$32) {
  var carry_flag$$1 = parentObj$$32.FCarry ? 128 : 0;
  parentObj$$32.FCarry = (parentObj$$32.registerA & 1) == 1;
  parentObj$$32.registerA = parentObj$$32.registerA >> 1 | carry_flag$$1;
  parentObj$$32.FZero = parentObj$$32.FSubtract = parentObj$$32.FHalfCarry = false
}, function(parentObj$$33) {
  if(!parentObj$$33.FZero) {
    parentObj$$33.programCounter = parentObj$$33.programCounter + (parentObj$$33.memoryReader[parentObj$$33.programCounter](parentObj$$33, parentObj$$33.programCounter) << 24 >> 24) + 1 & 65535;
    parentObj$$33.CPUTicks += 4
  }else {
    parentObj$$33.programCounter = parentObj$$33.programCounter + 1 & 65535
  }
}, function(parentObj$$34) {
  parentObj$$34.registersHL = parentObj$$34.memoryRead(parentObj$$34.programCounter + 1 & 65535) << 8 | parentObj$$34.memoryReader[parentObj$$34.programCounter](parentObj$$34, parentObj$$34.programCounter);
  parentObj$$34.programCounter = parentObj$$34.programCounter + 2 & 65535
}, function(parentObj$$35) {
  parentObj$$35.memoryWriter[parentObj$$35.registersHL](parentObj$$35, parentObj$$35.registersHL, parentObj$$35.registerA);
  parentObj$$35.registersHL = parentObj$$35.registersHL + 1 & 65535
}, function(parentObj$$36) {
  parentObj$$36.registersHL = parentObj$$36.registersHL + 1 & 65535
}, function(parentObj$$37) {
  var H = (parentObj$$37.registersHL >> 8) + 1 & 255;
  parentObj$$37.FZero = H == 0;
  parentObj$$37.FHalfCarry = (H & 15) == 0;
  parentObj$$37.FSubtract = false;
  parentObj$$37.registersHL = H << 8 | parentObj$$37.registersHL & 255
}, function(parentObj$$38) {
  var H$$1 = (parentObj$$38.registersHL >> 8) - 1 & 255;
  parentObj$$38.FZero = H$$1 == 0;
  parentObj$$38.FHalfCarry = (H$$1 & 15) == 15;
  parentObj$$38.FSubtract = true;
  parentObj$$38.registersHL = H$$1 << 8 | parentObj$$38.registersHL & 255
}, function(parentObj$$39) {
  parentObj$$39.registersHL = parentObj$$39.memoryReader[parentObj$$39.programCounter](parentObj$$39, parentObj$$39.programCounter) << 8 | parentObj$$39.registersHL & 255;
  parentObj$$39.programCounter = parentObj$$39.programCounter + 1 & 65535
}, function(parentObj$$40) {
  if(!parentObj$$40.FSubtract) {
    if(parentObj$$40.FCarry || parentObj$$40.registerA > 153) {
      parentObj$$40.registerA = parentObj$$40.registerA + 96 & 255;
      parentObj$$40.FCarry = true
    }
    if(parentObj$$40.FHalfCarry || (parentObj$$40.registerA & 15) > 9) {
      parentObj$$40.registerA = parentObj$$40.registerA + 6 & 255;
      parentObj$$40.FHalfCarry = false
    }
  }else {
    if(parentObj$$40.FCarry && parentObj$$40.FHalfCarry) {
      parentObj$$40.registerA = parentObj$$40.registerA + 154 & 255;
      parentObj$$40.FHalfCarry = false
    }else {
      if(parentObj$$40.FCarry) {
        parentObj$$40.registerA = parentObj$$40.registerA + 160 & 255
      }else {
        if(parentObj$$40.FHalfCarry) {
          parentObj$$40.registerA = parentObj$$40.registerA + 250 & 255;
          parentObj$$40.FHalfCarry = false
        }
      }
    }
  }
  parentObj$$40.FZero = parentObj$$40.registerA == 0
}, function(parentObj$$41) {
  if(parentObj$$41.FZero) {
    parentObj$$41.programCounter = parentObj$$41.programCounter + (parentObj$$41.memoryReader[parentObj$$41.programCounter](parentObj$$41, parentObj$$41.programCounter) << 24 >> 24) + 1 & 65535;
    parentObj$$41.CPUTicks += 4
  }else {
    parentObj$$41.programCounter = parentObj$$41.programCounter + 1 & 65535
  }
}, function(parentObj$$42) {
  parentObj$$42.FHalfCarry = (parentObj$$42.registersHL & 4095) > 2047;
  parentObj$$42.FCarry = parentObj$$42.registersHL > 32767;
  parentObj$$42.registersHL = parentObj$$42.registersHL << 1 & 65535;
  parentObj$$42.FSubtract = false
}, function(parentObj$$43) {
  parentObj$$43.registerA = parentObj$$43.memoryReader[parentObj$$43.registersHL](parentObj$$43, parentObj$$43.registersHL);
  parentObj$$43.registersHL = parentObj$$43.registersHL + 1 & 65535
}, function(parentObj$$44) {
  parentObj$$44.registersHL = parentObj$$44.registersHL - 1 & 65535
}, function(parentObj$$45) {
  var L = parentObj$$45.registersHL + 1 & 255;
  parentObj$$45.FZero = L == 0;
  parentObj$$45.FHalfCarry = (L & 15) == 0;
  parentObj$$45.FSubtract = false;
  parentObj$$45.registersHL = parentObj$$45.registersHL & 65280 | L
}, function(parentObj$$46) {
  var L$$1 = parentObj$$46.registersHL - 1 & 255;
  parentObj$$46.FZero = L$$1 == 0;
  parentObj$$46.FHalfCarry = (L$$1 & 15) == 15;
  parentObj$$46.FSubtract = true;
  parentObj$$46.registersHL = parentObj$$46.registersHL & 65280 | L$$1
}, function(parentObj$$47) {
  parentObj$$47.registersHL = parentObj$$47.registersHL & 65280 | parentObj$$47.memoryReader[parentObj$$47.programCounter](parentObj$$47, parentObj$$47.programCounter);
  parentObj$$47.programCounter = parentObj$$47.programCounter + 1 & 65535
}, function(parentObj$$48) {
  parentObj$$48.registerA ^= 255;
  parentObj$$48.FSubtract = parentObj$$48.FHalfCarry = true
}, function(parentObj$$49) {
  if(!parentObj$$49.FCarry) {
    parentObj$$49.programCounter = parentObj$$49.programCounter + (parentObj$$49.memoryReader[parentObj$$49.programCounter](parentObj$$49, parentObj$$49.programCounter) << 24 >> 24) + 1 & 65535;
    parentObj$$49.CPUTicks += 4
  }else {
    parentObj$$49.programCounter = parentObj$$49.programCounter + 1 & 65535
  }
}, function(parentObj$$50) {
  parentObj$$50.stackPointer = parentObj$$50.memoryRead(parentObj$$50.programCounter + 1 & 65535) << 8 | parentObj$$50.memoryReader[parentObj$$50.programCounter](parentObj$$50, parentObj$$50.programCounter);
  parentObj$$50.programCounter = parentObj$$50.programCounter + 2 & 65535
}, function(parentObj$$51) {
  parentObj$$51.memoryWriter[parentObj$$51.registersHL](parentObj$$51, parentObj$$51.registersHL, parentObj$$51.registerA);
  parentObj$$51.registersHL = parentObj$$51.registersHL - 1 & 65535
}, function(parentObj$$52) {
  parentObj$$52.stackPointer = parentObj$$52.stackPointer + 1 & 65535
}, function(parentObj$$53) {
  var temp_var$$5 = parentObj$$53.memoryReader[parentObj$$53.registersHL](parentObj$$53, parentObj$$53.registersHL) + 1 & 255;
  parentObj$$53.FZero = temp_var$$5 == 0;
  parentObj$$53.FHalfCarry = (temp_var$$5 & 15) == 0;
  parentObj$$53.FSubtract = false;
  parentObj$$53.memoryWriter[parentObj$$53.registersHL](parentObj$$53, parentObj$$53.registersHL, temp_var$$5)
}, function(parentObj$$54) {
  var temp_var$$6 = parentObj$$54.memoryReader[parentObj$$54.registersHL](parentObj$$54, parentObj$$54.registersHL) - 1 & 255;
  parentObj$$54.FZero = temp_var$$6 == 0;
  parentObj$$54.FHalfCarry = (temp_var$$6 & 15) == 15;
  parentObj$$54.FSubtract = true;
  parentObj$$54.memoryWriter[parentObj$$54.registersHL](parentObj$$54, parentObj$$54.registersHL, temp_var$$6)
}, function(parentObj$$55) {
  parentObj$$55.memoryWriter[parentObj$$55.registersHL](parentObj$$55, parentObj$$55.registersHL, parentObj$$55.memoryReader[parentObj$$55.programCounter](parentObj$$55, parentObj$$55.programCounter));
  parentObj$$55.programCounter = parentObj$$55.programCounter + 1 & 65535
}, function(parentObj$$56) {
  parentObj$$56.FCarry = true;
  parentObj$$56.FSubtract = parentObj$$56.FHalfCarry = false
}, function(parentObj$$57) {
  if(parentObj$$57.FCarry) {
    parentObj$$57.programCounter = parentObj$$57.programCounter + (parentObj$$57.memoryReader[parentObj$$57.programCounter](parentObj$$57, parentObj$$57.programCounter) << 24 >> 24) + 1 & 65535;
    parentObj$$57.CPUTicks += 4
  }else {
    parentObj$$57.programCounter = parentObj$$57.programCounter + 1 & 65535
  }
}, function(parentObj$$58) {
  var dirtySum$$2 = parentObj$$58.registersHL + parentObj$$58.stackPointer;
  parentObj$$58.FHalfCarry = (parentObj$$58.registersHL & 4095) > (dirtySum$$2 & 4095);
  parentObj$$58.FCarry = dirtySum$$2 > 65535;
  parentObj$$58.registersHL = dirtySum$$2 & 65535;
  parentObj$$58.FSubtract = false
}, function(parentObj$$59) {
  parentObj$$59.registerA = parentObj$$59.memoryReader[parentObj$$59.registersHL](parentObj$$59, parentObj$$59.registersHL);
  parentObj$$59.registersHL = parentObj$$59.registersHL - 1 & 65535
}, function(parentObj$$60) {
  parentObj$$60.stackPointer = parentObj$$60.stackPointer - 1 & 65535
}, function(parentObj$$61) {
  parentObj$$61.registerA = parentObj$$61.registerA + 1 & 255;
  parentObj$$61.FZero = parentObj$$61.registerA == 0;
  parentObj$$61.FHalfCarry = (parentObj$$61.registerA & 15) == 0;
  parentObj$$61.FSubtract = false
}, function(parentObj$$62) {
  parentObj$$62.registerA = parentObj$$62.registerA - 1 & 255;
  parentObj$$62.FZero = parentObj$$62.registerA == 0;
  parentObj$$62.FHalfCarry = (parentObj$$62.registerA & 15) == 15;
  parentObj$$62.FSubtract = true
}, function(parentObj$$63) {
  parentObj$$63.registerA = parentObj$$63.memoryReader[parentObj$$63.programCounter](parentObj$$63, parentObj$$63.programCounter);
  parentObj$$63.programCounter = parentObj$$63.programCounter + 1 & 65535
}, function(parentObj$$64) {
  parentObj$$64.FCarry = !parentObj$$64.FCarry;
  parentObj$$64.FSubtract = parentObj$$64.FHalfCarry = false
}, function(parentObj$$65) {
}, function(parentObj$$66) {
  parentObj$$66.registerB = parentObj$$66.registerC
}, function(parentObj$$67) {
  parentObj$$67.registerB = parentObj$$67.registerD
}, function(parentObj$$68) {
  parentObj$$68.registerB = parentObj$$68.registerE
}, function(parentObj$$69) {
  parentObj$$69.registerB = parentObj$$69.registersHL >> 8
}, function(parentObj$$70) {
  parentObj$$70.registerB = parentObj$$70.registersHL & 255
}, function(parentObj$$71) {
  parentObj$$71.registerB = parentObj$$71.memoryReader[parentObj$$71.registersHL](parentObj$$71, parentObj$$71.registersHL)
}, function(parentObj$$72) {
  parentObj$$72.registerB = parentObj$$72.registerA
}, function(parentObj$$73) {
  parentObj$$73.registerC = parentObj$$73.registerB
}, function(parentObj$$74) {
}, function(parentObj$$75) {
  parentObj$$75.registerC = parentObj$$75.registerD
}, function(parentObj$$76) {
  parentObj$$76.registerC = parentObj$$76.registerE
}, function(parentObj$$77) {
  parentObj$$77.registerC = parentObj$$77.registersHL >> 8
}, function(parentObj$$78) {
  parentObj$$78.registerC = parentObj$$78.registersHL & 255
}, function(parentObj$$79) {
  parentObj$$79.registerC = parentObj$$79.memoryReader[parentObj$$79.registersHL](parentObj$$79, parentObj$$79.registersHL)
}, function(parentObj$$80) {
  parentObj$$80.registerC = parentObj$$80.registerA
}, function(parentObj$$81) {
  parentObj$$81.registerD = parentObj$$81.registerB
}, function(parentObj$$82) {
  parentObj$$82.registerD = parentObj$$82.registerC
}, function(parentObj$$83) {
}, function(parentObj$$84) {
  parentObj$$84.registerD = parentObj$$84.registerE
}, function(parentObj$$85) {
  parentObj$$85.registerD = parentObj$$85.registersHL >> 8
}, function(parentObj$$86) {
  parentObj$$86.registerD = parentObj$$86.registersHL & 255
}, function(parentObj$$87) {
  parentObj$$87.registerD = parentObj$$87.memoryReader[parentObj$$87.registersHL](parentObj$$87, parentObj$$87.registersHL)
}, function(parentObj$$88) {
  parentObj$$88.registerD = parentObj$$88.registerA
}, function(parentObj$$89) {
  parentObj$$89.registerE = parentObj$$89.registerB
}, function(parentObj$$90) {
  parentObj$$90.registerE = parentObj$$90.registerC
}, function(parentObj$$91) {
  parentObj$$91.registerE = parentObj$$91.registerD
}, function(parentObj$$92) {
}, function(parentObj$$93) {
  parentObj$$93.registerE = parentObj$$93.registersHL >> 8
}, function(parentObj$$94) {
  parentObj$$94.registerE = parentObj$$94.registersHL & 255
}, function(parentObj$$95) {
  parentObj$$95.registerE = parentObj$$95.memoryReader[parentObj$$95.registersHL](parentObj$$95, parentObj$$95.registersHL)
}, function(parentObj$$96) {
  parentObj$$96.registerE = parentObj$$96.registerA
}, function(parentObj$$97) {
  parentObj$$97.registersHL = parentObj$$97.registerB << 8 | parentObj$$97.registersHL & 255
}, function(parentObj$$98) {
  parentObj$$98.registersHL = parentObj$$98.registerC << 8 | parentObj$$98.registersHL & 255
}, function(parentObj$$99) {
  parentObj$$99.registersHL = parentObj$$99.registerD << 8 | parentObj$$99.registersHL & 255
}, function(parentObj$$100) {
  parentObj$$100.registersHL = parentObj$$100.registerE << 8 | parentObj$$100.registersHL & 255
}, function(parentObj$$101) {
}, function(parentObj$$102) {
  parentObj$$102.registersHL = (parentObj$$102.registersHL & 255) * 257
}, function(parentObj$$103) {
  parentObj$$103.registersHL = parentObj$$103.memoryReader[parentObj$$103.registersHL](parentObj$$103, parentObj$$103.registersHL) << 8 | parentObj$$103.registersHL & 255
}, function(parentObj$$104) {
  parentObj$$104.registersHL = parentObj$$104.registerA << 8 | parentObj$$104.registersHL & 255
}, function(parentObj$$105) {
  parentObj$$105.registersHL = parentObj$$105.registersHL & 65280 | parentObj$$105.registerB
}, function(parentObj$$106) {
  parentObj$$106.registersHL = parentObj$$106.registersHL & 65280 | parentObj$$106.registerC
}, function(parentObj$$107) {
  parentObj$$107.registersHL = parentObj$$107.registersHL & 65280 | parentObj$$107.registerD
}, function(parentObj$$108) {
  parentObj$$108.registersHL = parentObj$$108.registersHL & 65280 | parentObj$$108.registerE
}, function(parentObj$$109) {
  parentObj$$109.registersHL = parentObj$$109.registersHL & 65280 | parentObj$$109.registersHL >> 8
}, function(parentObj$$110) {
}, function(parentObj$$111) {
  parentObj$$111.registersHL = parentObj$$111.registersHL & 65280 | parentObj$$111.memoryReader[parentObj$$111.registersHL](parentObj$$111, parentObj$$111.registersHL)
}, function(parentObj$$112) {
  parentObj$$112.registersHL = parentObj$$112.registersHL & 65280 | parentObj$$112.registerA
}, function(parentObj$$113) {
  parentObj$$113.memoryWriter[parentObj$$113.registersHL](parentObj$$113, parentObj$$113.registersHL, parentObj$$113.registerB)
}, function(parentObj$$114) {
  parentObj$$114.memoryWriter[parentObj$$114.registersHL](parentObj$$114, parentObj$$114.registersHL, parentObj$$114.registerC)
}, function(parentObj$$115) {
  parentObj$$115.memoryWriter[parentObj$$115.registersHL](parentObj$$115, parentObj$$115.registersHL, parentObj$$115.registerD)
}, function(parentObj$$116) {
  parentObj$$116.memoryWriter[parentObj$$116.registersHL](parentObj$$116, parentObj$$116.registersHL, parentObj$$116.registerE)
}, function(parentObj$$117) {
  parentObj$$117.memoryWriter[parentObj$$117.registersHL](parentObj$$117, parentObj$$117.registersHL, parentObj$$117.registersHL >> 8)
}, function(parentObj$$118) {
  parentObj$$118.memoryWriter[parentObj$$118.registersHL](parentObj$$118, parentObj$$118.registersHL, parentObj$$118.registersHL & 255)
}, function(parentObj$$119) {
  if((parentObj$$119.interruptsEnabled & parentObj$$119.interruptsRequested & 31) > 0) {
    if(!parentObj$$119.cGBC && !parentObj$$119.usedBootROM) {
      parentObj$$119.skipPCIncrement = true
    }else {
      parentObj$$119.CPUTicks += 4
    }
  }else {
    parentObj$$119.calculateHALTPeriod()
  }
}, function(parentObj$$120) {
  parentObj$$120.memoryWriter[parentObj$$120.registersHL](parentObj$$120, parentObj$$120.registersHL, parentObj$$120.registerA)
}, function(parentObj$$121) {
  parentObj$$121.registerA = parentObj$$121.registerB
}, function(parentObj$$122) {
  parentObj$$122.registerA = parentObj$$122.registerC
}, function(parentObj$$123) {
  parentObj$$123.registerA = parentObj$$123.registerD
}, function(parentObj$$124) {
  parentObj$$124.registerA = parentObj$$124.registerE
}, function(parentObj$$125) {
  parentObj$$125.registerA = parentObj$$125.registersHL >> 8
}, function(parentObj$$126) {
  parentObj$$126.registerA = parentObj$$126.registersHL & 255
}, function(parentObj$$127) {
  parentObj$$127.registerA = parentObj$$127.memoryReader[parentObj$$127.registersHL](parentObj$$127, parentObj$$127.registersHL)
}, function(parentObj$$128) {
}, function(parentObj$$129) {
  var dirtySum$$3 = parentObj$$129.registerA + parentObj$$129.registerB;
  parentObj$$129.FHalfCarry = (dirtySum$$3 & 15) < (parentObj$$129.registerA & 15);
  parentObj$$129.FCarry = dirtySum$$3 > 255;
  parentObj$$129.registerA = dirtySum$$3 & 255;
  parentObj$$129.FZero = parentObj$$129.registerA == 0;
  parentObj$$129.FSubtract = false
}, function(parentObj$$130) {
  var dirtySum$$4 = parentObj$$130.registerA + parentObj$$130.registerC;
  parentObj$$130.FHalfCarry = (dirtySum$$4 & 15) < (parentObj$$130.registerA & 15);
  parentObj$$130.FCarry = dirtySum$$4 > 255;
  parentObj$$130.registerA = dirtySum$$4 & 255;
  parentObj$$130.FZero = parentObj$$130.registerA == 0;
  parentObj$$130.FSubtract = false
}, function(parentObj$$131) {
  var dirtySum$$5 = parentObj$$131.registerA + parentObj$$131.registerD;
  parentObj$$131.FHalfCarry = (dirtySum$$5 & 15) < (parentObj$$131.registerA & 15);
  parentObj$$131.FCarry = dirtySum$$5 > 255;
  parentObj$$131.registerA = dirtySum$$5 & 255;
  parentObj$$131.FZero = parentObj$$131.registerA == 0;
  parentObj$$131.FSubtract = false
}, function(parentObj$$132) {
  var dirtySum$$6 = parentObj$$132.registerA + parentObj$$132.registerE;
  parentObj$$132.FHalfCarry = (dirtySum$$6 & 15) < (parentObj$$132.registerA & 15);
  parentObj$$132.FCarry = dirtySum$$6 > 255;
  parentObj$$132.registerA = dirtySum$$6 & 255;
  parentObj$$132.FZero = parentObj$$132.registerA == 0;
  parentObj$$132.FSubtract = false
}, function(parentObj$$133) {
  var dirtySum$$7 = parentObj$$133.registerA + (parentObj$$133.registersHL >> 8);
  parentObj$$133.FHalfCarry = (dirtySum$$7 & 15) < (parentObj$$133.registerA & 15);
  parentObj$$133.FCarry = dirtySum$$7 > 255;
  parentObj$$133.registerA = dirtySum$$7 & 255;
  parentObj$$133.FZero = parentObj$$133.registerA == 0;
  parentObj$$133.FSubtract = false
}, function(parentObj$$134) {
  var dirtySum$$8 = parentObj$$134.registerA + (parentObj$$134.registersHL & 255);
  parentObj$$134.FHalfCarry = (dirtySum$$8 & 15) < (parentObj$$134.registerA & 15);
  parentObj$$134.FCarry = dirtySum$$8 > 255;
  parentObj$$134.registerA = dirtySum$$8 & 255;
  parentObj$$134.FZero = parentObj$$134.registerA == 0;
  parentObj$$134.FSubtract = false
}, function(parentObj$$135) {
  var dirtySum$$9 = parentObj$$135.registerA + parentObj$$135.memoryReader[parentObj$$135.registersHL](parentObj$$135, parentObj$$135.registersHL);
  parentObj$$135.FHalfCarry = (dirtySum$$9 & 15) < (parentObj$$135.registerA & 15);
  parentObj$$135.FCarry = dirtySum$$9 > 255;
  parentObj$$135.registerA = dirtySum$$9 & 255;
  parentObj$$135.FZero = parentObj$$135.registerA == 0;
  parentObj$$135.FSubtract = false
}, function(parentObj$$136) {
  parentObj$$136.FHalfCarry = (parentObj$$136.registerA & 8) == 8;
  parentObj$$136.FCarry = parentObj$$136.registerA > 127;
  parentObj$$136.registerA = parentObj$$136.registerA << 1 & 255;
  parentObj$$136.FZero = parentObj$$136.registerA == 0;
  parentObj$$136.FSubtract = false
}, function(parentObj$$137) {
  var dirtySum$$10 = parentObj$$137.registerA + parentObj$$137.registerB + (parentObj$$137.FCarry ? 1 : 0);
  parentObj$$137.FHalfCarry = (parentObj$$137.registerA & 15) + (parentObj$$137.registerB & 15) + (parentObj$$137.FCarry ? 1 : 0) > 15;
  parentObj$$137.FCarry = dirtySum$$10 > 255;
  parentObj$$137.registerA = dirtySum$$10 & 255;
  parentObj$$137.FZero = parentObj$$137.registerA == 0;
  parentObj$$137.FSubtract = false
}, function(parentObj$$138) {
  var dirtySum$$11 = parentObj$$138.registerA + parentObj$$138.registerC + (parentObj$$138.FCarry ? 1 : 0);
  parentObj$$138.FHalfCarry = (parentObj$$138.registerA & 15) + (parentObj$$138.registerC & 15) + (parentObj$$138.FCarry ? 1 : 0) > 15;
  parentObj$$138.FCarry = dirtySum$$11 > 255;
  parentObj$$138.registerA = dirtySum$$11 & 255;
  parentObj$$138.FZero = parentObj$$138.registerA == 0;
  parentObj$$138.FSubtract = false
}, function(parentObj$$139) {
  var dirtySum$$12 = parentObj$$139.registerA + parentObj$$139.registerD + (parentObj$$139.FCarry ? 1 : 0);
  parentObj$$139.FHalfCarry = (parentObj$$139.registerA & 15) + (parentObj$$139.registerD & 15) + (parentObj$$139.FCarry ? 1 : 0) > 15;
  parentObj$$139.FCarry = dirtySum$$12 > 255;
  parentObj$$139.registerA = dirtySum$$12 & 255;
  parentObj$$139.FZero = parentObj$$139.registerA == 0;
  parentObj$$139.FSubtract = false
}, function(parentObj$$140) {
  var dirtySum$$13 = parentObj$$140.registerA + parentObj$$140.registerE + (parentObj$$140.FCarry ? 1 : 0);
  parentObj$$140.FHalfCarry = (parentObj$$140.registerA & 15) + (parentObj$$140.registerE & 15) + (parentObj$$140.FCarry ? 1 : 0) > 15;
  parentObj$$140.FCarry = dirtySum$$13 > 255;
  parentObj$$140.registerA = dirtySum$$13 & 255;
  parentObj$$140.FZero = parentObj$$140.registerA == 0;
  parentObj$$140.FSubtract = false
}, function(parentObj$$141) {
  var tempValue = parentObj$$141.registersHL >> 8;
  var dirtySum$$14 = parentObj$$141.registerA + tempValue + (parentObj$$141.FCarry ? 1 : 0);
  parentObj$$141.FHalfCarry = (parentObj$$141.registerA & 15) + (tempValue & 15) + (parentObj$$141.FCarry ? 1 : 0) > 15;
  parentObj$$141.FCarry = dirtySum$$14 > 255;
  parentObj$$141.registerA = dirtySum$$14 & 255;
  parentObj$$141.FZero = parentObj$$141.registerA == 0;
  parentObj$$141.FSubtract = false
}, function(parentObj$$142) {
  var tempValue$$1 = parentObj$$142.registersHL & 255;
  var dirtySum$$15 = parentObj$$142.registerA + tempValue$$1 + (parentObj$$142.FCarry ? 1 : 0);
  parentObj$$142.FHalfCarry = (parentObj$$142.registerA & 15) + (tempValue$$1 & 15) + (parentObj$$142.FCarry ? 1 : 0) > 15;
  parentObj$$142.FCarry = dirtySum$$15 > 255;
  parentObj$$142.registerA = dirtySum$$15 & 255;
  parentObj$$142.FZero = parentObj$$142.registerA == 0;
  parentObj$$142.FSubtract = false
}, function(parentObj$$143) {
  var tempValue$$2 = parentObj$$143.memoryReader[parentObj$$143.registersHL](parentObj$$143, parentObj$$143.registersHL);
  var dirtySum$$16 = parentObj$$143.registerA + tempValue$$2 + (parentObj$$143.FCarry ? 1 : 0);
  parentObj$$143.FHalfCarry = (parentObj$$143.registerA & 15) + (tempValue$$2 & 15) + (parentObj$$143.FCarry ? 1 : 0) > 15;
  parentObj$$143.FCarry = dirtySum$$16 > 255;
  parentObj$$143.registerA = dirtySum$$16 & 255;
  parentObj$$143.FZero = parentObj$$143.registerA == 0;
  parentObj$$143.FSubtract = false
}, function(parentObj$$144) {
  var dirtySum$$17 = parentObj$$144.registerA << 1 | (parentObj$$144.FCarry ? 1 : 0);
  parentObj$$144.FHalfCarry = (parentObj$$144.registerA << 1 & 30 | (parentObj$$144.FCarry ? 1 : 0)) > 15;
  parentObj$$144.FCarry = dirtySum$$17 > 255;
  parentObj$$144.registerA = dirtySum$$17 & 255;
  parentObj$$144.FZero = parentObj$$144.registerA == 0;
  parentObj$$144.FSubtract = false
}, function(parentObj$$145) {
  var dirtySum$$18 = parentObj$$145.registerA - parentObj$$145.registerB;
  parentObj$$145.FHalfCarry = (parentObj$$145.registerA & 15) < (dirtySum$$18 & 15);
  parentObj$$145.FCarry = dirtySum$$18 < 0;
  parentObj$$145.registerA = dirtySum$$18 & 255;
  parentObj$$145.FZero = dirtySum$$18 == 0;
  parentObj$$145.FSubtract = true
}, function(parentObj$$146) {
  var dirtySum$$19 = parentObj$$146.registerA - parentObj$$146.registerC;
  parentObj$$146.FHalfCarry = (parentObj$$146.registerA & 15) < (dirtySum$$19 & 15);
  parentObj$$146.FCarry = dirtySum$$19 < 0;
  parentObj$$146.registerA = dirtySum$$19 & 255;
  parentObj$$146.FZero = dirtySum$$19 == 0;
  parentObj$$146.FSubtract = true
}, function(parentObj$$147) {
  var dirtySum$$20 = parentObj$$147.registerA - parentObj$$147.registerD;
  parentObj$$147.FHalfCarry = (parentObj$$147.registerA & 15) < (dirtySum$$20 & 15);
  parentObj$$147.FCarry = dirtySum$$20 < 0;
  parentObj$$147.registerA = dirtySum$$20 & 255;
  parentObj$$147.FZero = dirtySum$$20 == 0;
  parentObj$$147.FSubtract = true
}, function(parentObj$$148) {
  var dirtySum$$21 = parentObj$$148.registerA - parentObj$$148.registerE;
  parentObj$$148.FHalfCarry = (parentObj$$148.registerA & 15) < (dirtySum$$21 & 15);
  parentObj$$148.FCarry = dirtySum$$21 < 0;
  parentObj$$148.registerA = dirtySum$$21 & 255;
  parentObj$$148.FZero = dirtySum$$21 == 0;
  parentObj$$148.FSubtract = true
}, function(parentObj$$149) {
  var dirtySum$$22 = parentObj$$149.registerA - (parentObj$$149.registersHL >> 8);
  parentObj$$149.FHalfCarry = (parentObj$$149.registerA & 15) < (dirtySum$$22 & 15);
  parentObj$$149.FCarry = dirtySum$$22 < 0;
  parentObj$$149.registerA = dirtySum$$22 & 255;
  parentObj$$149.FZero = dirtySum$$22 == 0;
  parentObj$$149.FSubtract = true
}, function(parentObj$$150) {
  var dirtySum$$23 = parentObj$$150.registerA - (parentObj$$150.registersHL & 255);
  parentObj$$150.FHalfCarry = (parentObj$$150.registerA & 15) < (dirtySum$$23 & 15);
  parentObj$$150.FCarry = dirtySum$$23 < 0;
  parentObj$$150.registerA = dirtySum$$23 & 255;
  parentObj$$150.FZero = dirtySum$$23 == 0;
  parentObj$$150.FSubtract = true
}, function(parentObj$$151) {
  var dirtySum$$24 = parentObj$$151.registerA - parentObj$$151.memoryReader[parentObj$$151.registersHL](parentObj$$151, parentObj$$151.registersHL);
  parentObj$$151.FHalfCarry = (parentObj$$151.registerA & 15) < (dirtySum$$24 & 15);
  parentObj$$151.FCarry = dirtySum$$24 < 0;
  parentObj$$151.registerA = dirtySum$$24 & 255;
  parentObj$$151.FZero = dirtySum$$24 == 0;
  parentObj$$151.FSubtract = true
}, function(parentObj$$152) {
  parentObj$$152.registerA = 0;
  parentObj$$152.FHalfCarry = parentObj$$152.FCarry = false;
  parentObj$$152.FZero = parentObj$$152.FSubtract = true
}, function(parentObj$$153) {
  var dirtySum$$25 = parentObj$$153.registerA - parentObj$$153.registerB - (parentObj$$153.FCarry ? 1 : 0);
  parentObj$$153.FHalfCarry = (parentObj$$153.registerA & 15) - (parentObj$$153.registerB & 15) - (parentObj$$153.FCarry ? 1 : 0) < 0;
  parentObj$$153.FCarry = dirtySum$$25 < 0;
  parentObj$$153.registerA = dirtySum$$25 & 255;
  parentObj$$153.FZero = parentObj$$153.registerA == 0;
  parentObj$$153.FSubtract = true
}, function(parentObj$$154) {
  var dirtySum$$26 = parentObj$$154.registerA - parentObj$$154.registerC - (parentObj$$154.FCarry ? 1 : 0);
  parentObj$$154.FHalfCarry = (parentObj$$154.registerA & 15) - (parentObj$$154.registerC & 15) - (parentObj$$154.FCarry ? 1 : 0) < 0;
  parentObj$$154.FCarry = dirtySum$$26 < 0;
  parentObj$$154.registerA = dirtySum$$26 & 255;
  parentObj$$154.FZero = parentObj$$154.registerA == 0;
  parentObj$$154.FSubtract = true
}, function(parentObj$$155) {
  var dirtySum$$27 = parentObj$$155.registerA - parentObj$$155.registerD - (parentObj$$155.FCarry ? 1 : 0);
  parentObj$$155.FHalfCarry = (parentObj$$155.registerA & 15) - (parentObj$$155.registerD & 15) - (parentObj$$155.FCarry ? 1 : 0) < 0;
  parentObj$$155.FCarry = dirtySum$$27 < 0;
  parentObj$$155.registerA = dirtySum$$27 & 255;
  parentObj$$155.FZero = parentObj$$155.registerA == 0;
  parentObj$$155.FSubtract = true
}, function(parentObj$$156) {
  var dirtySum$$28 = parentObj$$156.registerA - parentObj$$156.registerE - (parentObj$$156.FCarry ? 1 : 0);
  parentObj$$156.FHalfCarry = (parentObj$$156.registerA & 15) - (parentObj$$156.registerE & 15) - (parentObj$$156.FCarry ? 1 : 0) < 0;
  parentObj$$156.FCarry = dirtySum$$28 < 0;
  parentObj$$156.registerA = dirtySum$$28 & 255;
  parentObj$$156.FZero = parentObj$$156.registerA == 0;
  parentObj$$156.FSubtract = true
}, function(parentObj$$157) {
  var temp_var$$7 = parentObj$$157.registersHL >> 8;
  var dirtySum$$29 = parentObj$$157.registerA - temp_var$$7 - (parentObj$$157.FCarry ? 1 : 0);
  parentObj$$157.FHalfCarry = (parentObj$$157.registerA & 15) - (temp_var$$7 & 15) - (parentObj$$157.FCarry ? 1 : 0) < 0;
  parentObj$$157.FCarry = dirtySum$$29 < 0;
  parentObj$$157.registerA = dirtySum$$29 & 255;
  parentObj$$157.FZero = parentObj$$157.registerA == 0;
  parentObj$$157.FSubtract = true
}, function(parentObj$$158) {
  var dirtySum$$30 = parentObj$$158.registerA - (parentObj$$158.registersHL & 255) - (parentObj$$158.FCarry ? 1 : 0);
  parentObj$$158.FHalfCarry = (parentObj$$158.registerA & 15) - (parentObj$$158.registersHL & 15) - (parentObj$$158.FCarry ? 1 : 0) < 0;
  parentObj$$158.FCarry = dirtySum$$30 < 0;
  parentObj$$158.registerA = dirtySum$$30 & 255;
  parentObj$$158.FZero = parentObj$$158.registerA == 0;
  parentObj$$158.FSubtract = true
}, function(parentObj$$159) {
  var temp_var$$8 = parentObj$$159.memoryReader[parentObj$$159.registersHL](parentObj$$159, parentObj$$159.registersHL);
  var dirtySum$$31 = parentObj$$159.registerA - temp_var$$8 - (parentObj$$159.FCarry ? 1 : 0);
  parentObj$$159.FHalfCarry = (parentObj$$159.registerA & 15) - (temp_var$$8 & 15) - (parentObj$$159.FCarry ? 1 : 0) < 0;
  parentObj$$159.FCarry = dirtySum$$31 < 0;
  parentObj$$159.registerA = dirtySum$$31 & 255;
  parentObj$$159.FZero = parentObj$$159.registerA == 0;
  parentObj$$159.FSubtract = true
}, function(parentObj$$160) {
  if(parentObj$$160.FCarry) {
    parentObj$$160.FZero = false;
    parentObj$$160.FSubtract = parentObj$$160.FHalfCarry = parentObj$$160.FCarry = true;
    parentObj$$160.registerA = 255
  }else {
    parentObj$$160.FHalfCarry = parentObj$$160.FCarry = false;
    parentObj$$160.FSubtract = parentObj$$160.FZero = true;
    parentObj$$160.registerA = 0
  }
}, function(parentObj$$161) {
  parentObj$$161.registerA &= parentObj$$161.registerB;
  parentObj$$161.FZero = parentObj$$161.registerA == 0;
  parentObj$$161.FHalfCarry = true;
  parentObj$$161.FSubtract = parentObj$$161.FCarry = false
}, function(parentObj$$162) {
  parentObj$$162.registerA &= parentObj$$162.registerC;
  parentObj$$162.FZero = parentObj$$162.registerA == 0;
  parentObj$$162.FHalfCarry = true;
  parentObj$$162.FSubtract = parentObj$$162.FCarry = false
}, function(parentObj$$163) {
  parentObj$$163.registerA &= parentObj$$163.registerD;
  parentObj$$163.FZero = parentObj$$163.registerA == 0;
  parentObj$$163.FHalfCarry = true;
  parentObj$$163.FSubtract = parentObj$$163.FCarry = false
}, function(parentObj$$164) {
  parentObj$$164.registerA &= parentObj$$164.registerE;
  parentObj$$164.FZero = parentObj$$164.registerA == 0;
  parentObj$$164.FHalfCarry = true;
  parentObj$$164.FSubtract = parentObj$$164.FCarry = false
}, function(parentObj$$165) {
  parentObj$$165.registerA &= parentObj$$165.registersHL >> 8;
  parentObj$$165.FZero = parentObj$$165.registerA == 0;
  parentObj$$165.FHalfCarry = true;
  parentObj$$165.FSubtract = parentObj$$165.FCarry = false
}, function(parentObj$$166) {
  parentObj$$166.registerA &= parentObj$$166.registersHL;
  parentObj$$166.FZero = parentObj$$166.registerA == 0;
  parentObj$$166.FHalfCarry = true;
  parentObj$$166.FSubtract = parentObj$$166.FCarry = false
}, function(parentObj$$167) {
  parentObj$$167.registerA &= parentObj$$167.memoryReader[parentObj$$167.registersHL](parentObj$$167, parentObj$$167.registersHL);
  parentObj$$167.FZero = parentObj$$167.registerA == 0;
  parentObj$$167.FHalfCarry = true;
  parentObj$$167.FSubtract = parentObj$$167.FCarry = false
}, function(parentObj$$168) {
  parentObj$$168.FZero = parentObj$$168.registerA == 0;
  parentObj$$168.FHalfCarry = true;
  parentObj$$168.FSubtract = parentObj$$168.FCarry = false
}, function(parentObj$$169) {
  parentObj$$169.registerA ^= parentObj$$169.registerB;
  parentObj$$169.FZero = parentObj$$169.registerA == 0;
  parentObj$$169.FSubtract = parentObj$$169.FHalfCarry = parentObj$$169.FCarry = false
}, function(parentObj$$170) {
  parentObj$$170.registerA ^= parentObj$$170.registerC;
  parentObj$$170.FZero = parentObj$$170.registerA == 0;
  parentObj$$170.FSubtract = parentObj$$170.FHalfCarry = parentObj$$170.FCarry = false
}, function(parentObj$$171) {
  parentObj$$171.registerA ^= parentObj$$171.registerD;
  parentObj$$171.FZero = parentObj$$171.registerA == 0;
  parentObj$$171.FSubtract = parentObj$$171.FHalfCarry = parentObj$$171.FCarry = false
}, function(parentObj$$172) {
  parentObj$$172.registerA ^= parentObj$$172.registerE;
  parentObj$$172.FZero = parentObj$$172.registerA == 0;
  parentObj$$172.FSubtract = parentObj$$172.FHalfCarry = parentObj$$172.FCarry = false
}, function(parentObj$$173) {
  parentObj$$173.registerA ^= parentObj$$173.registersHL >> 8;
  parentObj$$173.FZero = parentObj$$173.registerA == 0;
  parentObj$$173.FSubtract = parentObj$$173.FHalfCarry = parentObj$$173.FCarry = false
}, function(parentObj$$174) {
  parentObj$$174.registerA ^= parentObj$$174.registersHL & 255;
  parentObj$$174.FZero = parentObj$$174.registerA == 0;
  parentObj$$174.FSubtract = parentObj$$174.FHalfCarry = parentObj$$174.FCarry = false
}, function(parentObj$$175) {
  parentObj$$175.registerA ^= parentObj$$175.memoryReader[parentObj$$175.registersHL](parentObj$$175, parentObj$$175.registersHL);
  parentObj$$175.FZero = parentObj$$175.registerA == 0;
  parentObj$$175.FSubtract = parentObj$$175.FHalfCarry = parentObj$$175.FCarry = false
}, function(parentObj$$176) {
  parentObj$$176.registerA = 0;
  parentObj$$176.FZero = true;
  parentObj$$176.FSubtract = parentObj$$176.FHalfCarry = parentObj$$176.FCarry = false
}, function(parentObj$$177) {
  parentObj$$177.registerA |= parentObj$$177.registerB;
  parentObj$$177.FZero = parentObj$$177.registerA == 0;
  parentObj$$177.FSubtract = parentObj$$177.FCarry = parentObj$$177.FHalfCarry = false
}, function(parentObj$$178) {
  parentObj$$178.registerA |= parentObj$$178.registerC;
  parentObj$$178.FZero = parentObj$$178.registerA == 0;
  parentObj$$178.FSubtract = parentObj$$178.FCarry = parentObj$$178.FHalfCarry = false
}, function(parentObj$$179) {
  parentObj$$179.registerA |= parentObj$$179.registerD;
  parentObj$$179.FZero = parentObj$$179.registerA == 0;
  parentObj$$179.FSubtract = parentObj$$179.FCarry = parentObj$$179.FHalfCarry = false
}, function(parentObj$$180) {
  parentObj$$180.registerA |= parentObj$$180.registerE;
  parentObj$$180.FZero = parentObj$$180.registerA == 0;
  parentObj$$180.FSubtract = parentObj$$180.FCarry = parentObj$$180.FHalfCarry = false
}, function(parentObj$$181) {
  parentObj$$181.registerA |= parentObj$$181.registersHL >> 8;
  parentObj$$181.FZero = parentObj$$181.registerA == 0;
  parentObj$$181.FSubtract = parentObj$$181.FCarry = parentObj$$181.FHalfCarry = false
}, function(parentObj$$182) {
  parentObj$$182.registerA |= parentObj$$182.registersHL & 255;
  parentObj$$182.FZero = parentObj$$182.registerA == 0;
  parentObj$$182.FSubtract = parentObj$$182.FCarry = parentObj$$182.FHalfCarry = false
}, function(parentObj$$183) {
  parentObj$$183.registerA |= parentObj$$183.memoryReader[parentObj$$183.registersHL](parentObj$$183, parentObj$$183.registersHL);
  parentObj$$183.FZero = parentObj$$183.registerA == 0;
  parentObj$$183.FSubtract = parentObj$$183.FCarry = parentObj$$183.FHalfCarry = false
}, function(parentObj$$184) {
  parentObj$$184.FZero = parentObj$$184.registerA == 0;
  parentObj$$184.FSubtract = parentObj$$184.FCarry = parentObj$$184.FHalfCarry = false
}, function(parentObj$$185) {
  var dirtySum$$32 = parentObj$$185.registerA - parentObj$$185.registerB;
  parentObj$$185.FHalfCarry = (dirtySum$$32 & 15) > (parentObj$$185.registerA & 15);
  parentObj$$185.FCarry = dirtySum$$32 < 0;
  parentObj$$185.FZero = dirtySum$$32 == 0;
  parentObj$$185.FSubtract = true
}, function(parentObj$$186) {
  var dirtySum$$33 = parentObj$$186.registerA - parentObj$$186.registerC;
  parentObj$$186.FHalfCarry = (dirtySum$$33 & 15) > (parentObj$$186.registerA & 15);
  parentObj$$186.FCarry = dirtySum$$33 < 0;
  parentObj$$186.FZero = dirtySum$$33 == 0;
  parentObj$$186.FSubtract = true
}, function(parentObj$$187) {
  var dirtySum$$34 = parentObj$$187.registerA - parentObj$$187.registerD;
  parentObj$$187.FHalfCarry = (dirtySum$$34 & 15) > (parentObj$$187.registerA & 15);
  parentObj$$187.FCarry = dirtySum$$34 < 0;
  parentObj$$187.FZero = dirtySum$$34 == 0;
  parentObj$$187.FSubtract = true
}, function(parentObj$$188) {
  var dirtySum$$35 = parentObj$$188.registerA - parentObj$$188.registerE;
  parentObj$$188.FHalfCarry = (dirtySum$$35 & 15) > (parentObj$$188.registerA & 15);
  parentObj$$188.FCarry = dirtySum$$35 < 0;
  parentObj$$188.FZero = dirtySum$$35 == 0;
  parentObj$$188.FSubtract = true
}, function(parentObj$$189) {
  var dirtySum$$36 = parentObj$$189.registerA - (parentObj$$189.registersHL >> 8);
  parentObj$$189.FHalfCarry = (dirtySum$$36 & 15) > (parentObj$$189.registerA & 15);
  parentObj$$189.FCarry = dirtySum$$36 < 0;
  parentObj$$189.FZero = dirtySum$$36 == 0;
  parentObj$$189.FSubtract = true
}, function(parentObj$$190) {
  var dirtySum$$37 = parentObj$$190.registerA - (parentObj$$190.registersHL & 255);
  parentObj$$190.FHalfCarry = (dirtySum$$37 & 15) > (parentObj$$190.registerA & 15);
  parentObj$$190.FCarry = dirtySum$$37 < 0;
  parentObj$$190.FZero = dirtySum$$37 == 0;
  parentObj$$190.FSubtract = true
}, function(parentObj$$191) {
  var dirtySum$$38 = parentObj$$191.registerA - parentObj$$191.memoryReader[parentObj$$191.registersHL](parentObj$$191, parentObj$$191.registersHL);
  parentObj$$191.FHalfCarry = (dirtySum$$38 & 15) > (parentObj$$191.registerA & 15);
  parentObj$$191.FCarry = dirtySum$$38 < 0;
  parentObj$$191.FZero = dirtySum$$38 == 0;
  parentObj$$191.FSubtract = true
}, function(parentObj$$192) {
  parentObj$$192.FHalfCarry = parentObj$$192.FCarry = false;
  parentObj$$192.FZero = parentObj$$192.FSubtract = true
}, function(parentObj$$193) {
  if(!parentObj$$193.FZero) {
    parentObj$$193.programCounter = parentObj$$193.memoryRead(parentObj$$193.stackPointer + 1 & 65535) << 8 | parentObj$$193.memoryReader[parentObj$$193.stackPointer](parentObj$$193, parentObj$$193.stackPointer);
    parentObj$$193.stackPointer = parentObj$$193.stackPointer + 2 & 65535;
    parentObj$$193.CPUTicks += 12
  }
}, function(parentObj$$194) {
  parentObj$$194.registerC = parentObj$$194.memoryReader[parentObj$$194.stackPointer](parentObj$$194, parentObj$$194.stackPointer);
  parentObj$$194.registerB = parentObj$$194.memoryRead(parentObj$$194.stackPointer + 1 & 65535);
  parentObj$$194.stackPointer = parentObj$$194.stackPointer + 2 & 65535
}, function(parentObj$$195) {
  if(!parentObj$$195.FZero) {
    parentObj$$195.programCounter = parentObj$$195.memoryRead(parentObj$$195.programCounter + 1 & 65535) << 8 | parentObj$$195.memoryReader[parentObj$$195.programCounter](parentObj$$195, parentObj$$195.programCounter);
    parentObj$$195.CPUTicks += 4
  }else {
    parentObj$$195.programCounter = parentObj$$195.programCounter + 2 & 65535
  }
}, function(parentObj$$196) {
  parentObj$$196.programCounter = parentObj$$196.memoryRead(parentObj$$196.programCounter + 1 & 65535) << 8 | parentObj$$196.memoryReader[parentObj$$196.programCounter](parentObj$$196, parentObj$$196.programCounter)
}, function(parentObj$$197) {
  if(!parentObj$$197.FZero) {
    var temp_pc = parentObj$$197.memoryRead(parentObj$$197.programCounter + 1 & 65535) << 8 | parentObj$$197.memoryReader[parentObj$$197.programCounter](parentObj$$197, parentObj$$197.programCounter);
    parentObj$$197.programCounter = parentObj$$197.programCounter + 2 & 65535;
    parentObj$$197.stackPointer = parentObj$$197.stackPointer - 1 & 65535;
    parentObj$$197.memoryWriter[parentObj$$197.stackPointer](parentObj$$197, parentObj$$197.stackPointer, parentObj$$197.programCounter >> 8);
    parentObj$$197.stackPointer = parentObj$$197.stackPointer - 1 & 65535;
    parentObj$$197.memoryWriter[parentObj$$197.stackPointer](parentObj$$197, parentObj$$197.stackPointer, parentObj$$197.programCounter & 255);
    parentObj$$197.programCounter = temp_pc;
    parentObj$$197.CPUTicks += 12
  }else {
    parentObj$$197.programCounter = parentObj$$197.programCounter + 2 & 65535
  }
}, function(parentObj$$198) {
  parentObj$$198.stackPointer = parentObj$$198.stackPointer - 1 & 65535;
  parentObj$$198.memoryWriter[parentObj$$198.stackPointer](parentObj$$198, parentObj$$198.stackPointer, parentObj$$198.registerB);
  parentObj$$198.stackPointer = parentObj$$198.stackPointer - 1 & 65535;
  parentObj$$198.memoryWriter[parentObj$$198.stackPointer](parentObj$$198, parentObj$$198.stackPointer, parentObj$$198.registerC)
}, function(parentObj$$199) {
  var dirtySum$$39 = parentObj$$199.registerA + parentObj$$199.memoryReader[parentObj$$199.programCounter](parentObj$$199, parentObj$$199.programCounter);
  parentObj$$199.programCounter = parentObj$$199.programCounter + 1 & 65535;
  parentObj$$199.FHalfCarry = (dirtySum$$39 & 15) < (parentObj$$199.registerA & 15);
  parentObj$$199.FCarry = dirtySum$$39 > 255;
  parentObj$$199.registerA = dirtySum$$39 & 255;
  parentObj$$199.FZero = parentObj$$199.registerA == 0;
  parentObj$$199.FSubtract = false
}, function(parentObj$$200) {
  parentObj$$200.stackPointer = parentObj$$200.stackPointer - 1 & 65535;
  parentObj$$200.memoryWriter[parentObj$$200.stackPointer](parentObj$$200, parentObj$$200.stackPointer, parentObj$$200.programCounter >> 8);
  parentObj$$200.stackPointer = parentObj$$200.stackPointer - 1 & 65535;
  parentObj$$200.memoryWriter[parentObj$$200.stackPointer](parentObj$$200, parentObj$$200.stackPointer, parentObj$$200.programCounter & 255);
  parentObj$$200.programCounter = 0
}, function(parentObj$$201) {
  if(parentObj$$201.FZero) {
    parentObj$$201.programCounter = parentObj$$201.memoryRead(parentObj$$201.stackPointer + 1 & 65535) << 8 | parentObj$$201.memoryReader[parentObj$$201.stackPointer](parentObj$$201, parentObj$$201.stackPointer);
    parentObj$$201.stackPointer = parentObj$$201.stackPointer + 2 & 65535;
    parentObj$$201.CPUTicks += 12
  }
}, function(parentObj$$202) {
  parentObj$$202.programCounter = parentObj$$202.memoryRead(parentObj$$202.stackPointer + 1 & 65535) << 8 | parentObj$$202.memoryReader[parentObj$$202.stackPointer](parentObj$$202, parentObj$$202.stackPointer);
  parentObj$$202.stackPointer = parentObj$$202.stackPointer + 2 & 65535
}, function(parentObj$$203) {
  if(parentObj$$203.FZero) {
    parentObj$$203.programCounter = parentObj$$203.memoryRead(parentObj$$203.programCounter + 1 & 65535) << 8 | parentObj$$203.memoryReader[parentObj$$203.programCounter](parentObj$$203, parentObj$$203.programCounter);
    parentObj$$203.CPUTicks += 4
  }else {
    parentObj$$203.programCounter = parentObj$$203.programCounter + 2 & 65535
  }
}, function(parentObj$$204) {
  var opcode = parentObj$$204.memoryReader[parentObj$$204.programCounter](parentObj$$204, parentObj$$204.programCounter);
  parentObj$$204.programCounter = parentObj$$204.programCounter + 1 & 65535;
  parentObj$$204.CPUTicks += parentObj$$204.SecondaryTICKTable[opcode];
  parentObj$$204.CBOPCODE[opcode](parentObj$$204)
}, function(parentObj$$205) {
  if(parentObj$$205.FZero) {
    var temp_pc$$1 = parentObj$$205.memoryRead(parentObj$$205.programCounter + 1 & 65535) << 8 | parentObj$$205.memoryReader[parentObj$$205.programCounter](parentObj$$205, parentObj$$205.programCounter);
    parentObj$$205.programCounter = parentObj$$205.programCounter + 2 & 65535;
    parentObj$$205.stackPointer = parentObj$$205.stackPointer - 1 & 65535;
    parentObj$$205.memoryWriter[parentObj$$205.stackPointer](parentObj$$205, parentObj$$205.stackPointer, parentObj$$205.programCounter >> 8);
    parentObj$$205.stackPointer = parentObj$$205.stackPointer - 1 & 65535;
    parentObj$$205.memoryWriter[parentObj$$205.stackPointer](parentObj$$205, parentObj$$205.stackPointer, parentObj$$205.programCounter & 255);
    parentObj$$205.programCounter = temp_pc$$1;
    parentObj$$205.CPUTicks += 12
  }else {
    parentObj$$205.programCounter = parentObj$$205.programCounter + 2 & 65535
  }
}, function(parentObj$$206) {
  var temp_pc$$2 = parentObj$$206.memoryRead(parentObj$$206.programCounter + 1 & 65535) << 8 | parentObj$$206.memoryReader[parentObj$$206.programCounter](parentObj$$206, parentObj$$206.programCounter);
  parentObj$$206.programCounter = parentObj$$206.programCounter + 2 & 65535;
  parentObj$$206.stackPointer = parentObj$$206.stackPointer - 1 & 65535;
  parentObj$$206.memoryWriter[parentObj$$206.stackPointer](parentObj$$206, parentObj$$206.stackPointer, parentObj$$206.programCounter >> 8);
  parentObj$$206.stackPointer = parentObj$$206.stackPointer - 1 & 65535;
  parentObj$$206.memoryWriter[parentObj$$206.stackPointer](parentObj$$206, parentObj$$206.stackPointer, parentObj$$206.programCounter & 255);
  parentObj$$206.programCounter = temp_pc$$2
}, function(parentObj$$207) {
  var tempValue$$3 = parentObj$$207.memoryReader[parentObj$$207.programCounter](parentObj$$207, parentObj$$207.programCounter);
  parentObj$$207.programCounter = parentObj$$207.programCounter + 1 & 65535;
  var dirtySum$$40 = parentObj$$207.registerA + tempValue$$3 + (parentObj$$207.FCarry ? 1 : 0);
  parentObj$$207.FHalfCarry = (parentObj$$207.registerA & 15) + (tempValue$$3 & 15) + (parentObj$$207.FCarry ? 1 : 0) > 15;
  parentObj$$207.FCarry = dirtySum$$40 > 255;
  parentObj$$207.registerA = dirtySum$$40 & 255;
  parentObj$$207.FZero = parentObj$$207.registerA == 0;
  parentObj$$207.FSubtract = false
}, function(parentObj$$208) {
  parentObj$$208.stackPointer = parentObj$$208.stackPointer - 1 & 65535;
  parentObj$$208.memoryWriter[parentObj$$208.stackPointer](parentObj$$208, parentObj$$208.stackPointer, parentObj$$208.programCounter >> 8);
  parentObj$$208.stackPointer = parentObj$$208.stackPointer - 1 & 65535;
  parentObj$$208.memoryWriter[parentObj$$208.stackPointer](parentObj$$208, parentObj$$208.stackPointer, parentObj$$208.programCounter & 255);
  parentObj$$208.programCounter = 8
}, function(parentObj$$209) {
  if(!parentObj$$209.FCarry) {
    parentObj$$209.programCounter = parentObj$$209.memoryRead(parentObj$$209.stackPointer + 1 & 65535) << 8 | parentObj$$209.memoryReader[parentObj$$209.stackPointer](parentObj$$209, parentObj$$209.stackPointer);
    parentObj$$209.stackPointer = parentObj$$209.stackPointer + 2 & 65535;
    parentObj$$209.CPUTicks += 12
  }
}, function(parentObj$$210) {
  parentObj$$210.registerE = parentObj$$210.memoryReader[parentObj$$210.stackPointer](parentObj$$210, parentObj$$210.stackPointer);
  parentObj$$210.registerD = parentObj$$210.memoryRead(parentObj$$210.stackPointer + 1 & 65535);
  parentObj$$210.stackPointer = parentObj$$210.stackPointer + 2 & 65535
}, function(parentObj$$211) {
  if(!parentObj$$211.FCarry) {
    parentObj$$211.programCounter = parentObj$$211.memoryRead(parentObj$$211.programCounter + 1 & 65535) << 8 | parentObj$$211.memoryReader[parentObj$$211.programCounter](parentObj$$211, parentObj$$211.programCounter);
    parentObj$$211.CPUTicks += 4
  }else {
    parentObj$$211.programCounter = parentObj$$211.programCounter + 2 & 65535
  }
}, function(parentObj$$212) {
  cout("Illegal op code 0xD3 called, pausing emulation.", 2);
  pause()
}, function(parentObj$$213) {
  if(!parentObj$$213.FCarry) {
    var temp_pc$$3 = parentObj$$213.memoryRead(parentObj$$213.programCounter + 1 & 65535) << 8 | parentObj$$213.memoryReader[parentObj$$213.programCounter](parentObj$$213, parentObj$$213.programCounter);
    parentObj$$213.programCounter = parentObj$$213.programCounter + 2 & 65535;
    parentObj$$213.stackPointer = parentObj$$213.stackPointer - 1 & 65535;
    parentObj$$213.memoryWriter[parentObj$$213.stackPointer](parentObj$$213, parentObj$$213.stackPointer, parentObj$$213.programCounter >> 8);
    parentObj$$213.stackPointer = parentObj$$213.stackPointer - 1 & 65535;
    parentObj$$213.memoryWriter[parentObj$$213.stackPointer](parentObj$$213, parentObj$$213.stackPointer, parentObj$$213.programCounter & 255);
    parentObj$$213.programCounter = temp_pc$$3;
    parentObj$$213.CPUTicks += 12
  }else {
    parentObj$$213.programCounter = parentObj$$213.programCounter + 2 & 65535
  }
}, function(parentObj$$214) {
  parentObj$$214.stackPointer = parentObj$$214.stackPointer - 1 & 65535;
  parentObj$$214.memoryWriter[parentObj$$214.stackPointer](parentObj$$214, parentObj$$214.stackPointer, parentObj$$214.registerD);
  parentObj$$214.stackPointer = parentObj$$214.stackPointer - 1 & 65535;
  parentObj$$214.memoryWriter[parentObj$$214.stackPointer](parentObj$$214, parentObj$$214.stackPointer, parentObj$$214.registerE)
}, function(parentObj$$215) {
  var dirtySum$$41 = parentObj$$215.registerA - parentObj$$215.memoryReader[parentObj$$215.programCounter](parentObj$$215, parentObj$$215.programCounter);
  parentObj$$215.programCounter = parentObj$$215.programCounter + 1 & 65535;
  parentObj$$215.FHalfCarry = (parentObj$$215.registerA & 15) < (dirtySum$$41 & 15);
  parentObj$$215.FCarry = dirtySum$$41 < 0;
  parentObj$$215.registerA = dirtySum$$41 & 255;
  parentObj$$215.FZero = dirtySum$$41 == 0;
  parentObj$$215.FSubtract = true
}, function(parentObj$$216) {
  parentObj$$216.stackPointer = parentObj$$216.stackPointer - 1 & 65535;
  parentObj$$216.memoryWriter[parentObj$$216.stackPointer](parentObj$$216, parentObj$$216.stackPointer, parentObj$$216.programCounter >> 8);
  parentObj$$216.stackPointer = parentObj$$216.stackPointer - 1 & 65535;
  parentObj$$216.memoryWriter[parentObj$$216.stackPointer](parentObj$$216, parentObj$$216.stackPointer, parentObj$$216.programCounter & 255);
  parentObj$$216.programCounter = 16
}, function(parentObj$$217) {
  if(parentObj$$217.FCarry) {
    parentObj$$217.programCounter = parentObj$$217.memoryRead(parentObj$$217.stackPointer + 1 & 65535) << 8 | parentObj$$217.memoryReader[parentObj$$217.stackPointer](parentObj$$217, parentObj$$217.stackPointer);
    parentObj$$217.stackPointer = parentObj$$217.stackPointer + 2 & 65535;
    parentObj$$217.CPUTicks += 12
  }
}, function(parentObj$$218) {
  parentObj$$218.programCounter = parentObj$$218.memoryRead(parentObj$$218.stackPointer + 1 & 65535) << 8 | parentObj$$218.memoryReader[parentObj$$218.stackPointer](parentObj$$218, parentObj$$218.stackPointer);
  parentObj$$218.stackPointer = parentObj$$218.stackPointer + 2 & 65535;
  parentObj$$218.IRQEnableDelay = parentObj$$218.IRQEnableDelay == 2 || parentObj$$218.memoryReader[parentObj$$218.programCounter](parentObj$$218, parentObj$$218.programCounter) == 118 ? 1 : 2
}, function(parentObj$$219) {
  if(parentObj$$219.FCarry) {
    parentObj$$219.programCounter = parentObj$$219.memoryRead(parentObj$$219.programCounter + 1 & 65535) << 8 | parentObj$$219.memoryReader[parentObj$$219.programCounter](parentObj$$219, parentObj$$219.programCounter);
    parentObj$$219.CPUTicks += 4
  }else {
    parentObj$$219.programCounter = parentObj$$219.programCounter + 2 & 65535
  }
}, function(parentObj$$220) {
  cout("Illegal op code 0xDB called, pausing emulation.", 2);
  pause()
}, function(parentObj$$221) {
  if(parentObj$$221.FCarry) {
    var temp_pc$$4 = parentObj$$221.memoryRead(parentObj$$221.programCounter + 1 & 65535) << 8 | parentObj$$221.memoryReader[parentObj$$221.programCounter](parentObj$$221, parentObj$$221.programCounter);
    parentObj$$221.programCounter = parentObj$$221.programCounter + 2 & 65535;
    parentObj$$221.stackPointer = parentObj$$221.stackPointer - 1 & 65535;
    parentObj$$221.memoryWriter[parentObj$$221.stackPointer](parentObj$$221, parentObj$$221.stackPointer, parentObj$$221.programCounter >> 8);
    parentObj$$221.stackPointer = parentObj$$221.stackPointer - 1 & 65535;
    parentObj$$221.memoryWriter[parentObj$$221.stackPointer](parentObj$$221, parentObj$$221.stackPointer, parentObj$$221.programCounter & 255);
    parentObj$$221.programCounter = temp_pc$$4;
    parentObj$$221.CPUTicks += 12
  }else {
    parentObj$$221.programCounter = parentObj$$221.programCounter + 2 & 65535
  }
}, function(parentObj$$222) {
  cout("Illegal op code 0xDD called, pausing emulation.", 2);
  pause()
}, function(parentObj$$223) {
  var temp_var$$9 = parentObj$$223.memoryReader[parentObj$$223.programCounter](parentObj$$223, parentObj$$223.programCounter);
  parentObj$$223.programCounter = parentObj$$223.programCounter + 1 & 65535;
  var dirtySum$$42 = parentObj$$223.registerA - temp_var$$9 - (parentObj$$223.FCarry ? 1 : 0);
  parentObj$$223.FHalfCarry = (parentObj$$223.registerA & 15) - (temp_var$$9 & 15) - (parentObj$$223.FCarry ? 1 : 0) < 0;
  parentObj$$223.FCarry = dirtySum$$42 < 0;
  parentObj$$223.registerA = dirtySum$$42 & 255;
  parentObj$$223.FZero = parentObj$$223.registerA == 0;
  parentObj$$223.FSubtract = true
}, function(parentObj$$224) {
  parentObj$$224.stackPointer = parentObj$$224.stackPointer - 1 & 65535;
  parentObj$$224.memoryWriter[parentObj$$224.stackPointer](parentObj$$224, parentObj$$224.stackPointer, parentObj$$224.programCounter >> 8);
  parentObj$$224.stackPointer = parentObj$$224.stackPointer - 1 & 65535;
  parentObj$$224.memoryWriter[parentObj$$224.stackPointer](parentObj$$224, parentObj$$224.stackPointer, parentObj$$224.programCounter & 255);
  parentObj$$224.programCounter = 24
}, function(parentObj$$225) {
  parentObj$$225.memoryHighWrite(parentObj$$225.memoryReader[parentObj$$225.programCounter](parentObj$$225, parentObj$$225.programCounter), parentObj$$225.registerA);
  parentObj$$225.programCounter = parentObj$$225.programCounter + 1 & 65535
}, function(parentObj$$226) {
  parentObj$$226.registersHL = parentObj$$226.memoryRead(parentObj$$226.stackPointer + 1 & 65535) << 8 | parentObj$$226.memoryReader[parentObj$$226.stackPointer](parentObj$$226, parentObj$$226.stackPointer);
  parentObj$$226.stackPointer = parentObj$$226.stackPointer + 2 & 65535
}, function(parentObj$$227) {
  parentObj$$227.memoryHighWriter[parentObj$$227.registerC](parentObj$$227, parentObj$$227.registerC, parentObj$$227.registerA)
}, function(parentObj$$228) {
  cout("Illegal op code 0xE3 called, pausing emulation.", 2);
  pause()
}, function(parentObj$$229) {
  cout("Illegal op code 0xE4 called, pausing emulation.", 2);
  pause()
}, function(parentObj$$230) {
  parentObj$$230.stackPointer = parentObj$$230.stackPointer - 1 & 65535;
  parentObj$$230.memoryWriter[parentObj$$230.stackPointer](parentObj$$230, parentObj$$230.stackPointer, parentObj$$230.registersHL >> 8);
  parentObj$$230.stackPointer = parentObj$$230.stackPointer - 1 & 65535;
  parentObj$$230.memoryWriter[parentObj$$230.stackPointer](parentObj$$230, parentObj$$230.stackPointer, parentObj$$230.registersHL & 255)
}, function(parentObj$$231) {
  parentObj$$231.registerA &= parentObj$$231.memoryReader[parentObj$$231.programCounter](parentObj$$231, parentObj$$231.programCounter);
  parentObj$$231.programCounter = parentObj$$231.programCounter + 1 & 65535;
  parentObj$$231.FZero = parentObj$$231.registerA == 0;
  parentObj$$231.FHalfCarry = true;
  parentObj$$231.FSubtract = parentObj$$231.FCarry = false
}, function(parentObj$$232) {
  parentObj$$232.stackPointer = parentObj$$232.stackPointer - 1 & 65535;
  parentObj$$232.memoryWriter[parentObj$$232.stackPointer](parentObj$$232, parentObj$$232.stackPointer, parentObj$$232.programCounter >> 8);
  parentObj$$232.stackPointer = parentObj$$232.stackPointer - 1 & 65535;
  parentObj$$232.memoryWriter[parentObj$$232.stackPointer](parentObj$$232, parentObj$$232.stackPointer, parentObj$$232.programCounter & 255);
  parentObj$$232.programCounter = 32
}, function(parentObj$$233) {
  var temp_value2 = parentObj$$233.memoryReader[parentObj$$233.programCounter](parentObj$$233, parentObj$$233.programCounter) << 24 >> 24;
  parentObj$$233.programCounter = parentObj$$233.programCounter + 1 & 65535;
  var temp_value = parentObj$$233.stackPointer + temp_value2 & 65535;
  temp_value2 = parentObj$$233.stackPointer ^ temp_value2 ^ temp_value;
  parentObj$$233.stackPointer = temp_value;
  parentObj$$233.FCarry = (temp_value2 & 256) == 256;
  parentObj$$233.FHalfCarry = (temp_value2 & 16) == 16;
  parentObj$$233.FZero = parentObj$$233.FSubtract = false
}, function(parentObj$$234) {
  parentObj$$234.programCounter = parentObj$$234.registersHL
}, function(parentObj$$235) {
  parentObj$$235.memoryWrite(parentObj$$235.memoryRead(parentObj$$235.programCounter + 1 & 65535) << 8 | parentObj$$235.memoryReader[parentObj$$235.programCounter](parentObj$$235, parentObj$$235.programCounter), parentObj$$235.registerA);
  parentObj$$235.programCounter = parentObj$$235.programCounter + 2 & 65535
}, function(parentObj$$236) {
  cout("Illegal op code 0xEB called, pausing emulation.", 2);
  pause()
}, function(parentObj$$237) {
  cout("Illegal op code 0xEC called, pausing emulation.", 2);
  pause()
}, function(parentObj$$238) {
  cout("Illegal op code 0xED called, pausing emulation.", 2);
  pause()
}, function(parentObj$$239) {
  parentObj$$239.registerA ^= parentObj$$239.memoryReader[parentObj$$239.programCounter](parentObj$$239, parentObj$$239.programCounter);
  parentObj$$239.programCounter = parentObj$$239.programCounter + 1 & 65535;
  parentObj$$239.FZero = parentObj$$239.registerA == 0;
  parentObj$$239.FSubtract = parentObj$$239.FHalfCarry = parentObj$$239.FCarry = false
}, function(parentObj$$240) {
  parentObj$$240.stackPointer = parentObj$$240.stackPointer - 1 & 65535;
  parentObj$$240.memoryWriter[parentObj$$240.stackPointer](parentObj$$240, parentObj$$240.stackPointer, parentObj$$240.programCounter >> 8);
  parentObj$$240.stackPointer = parentObj$$240.stackPointer - 1 & 65535;
  parentObj$$240.memoryWriter[parentObj$$240.stackPointer](parentObj$$240, parentObj$$240.stackPointer, parentObj$$240.programCounter & 255);
  parentObj$$240.programCounter = 40
}, function(parentObj$$241) {
  parentObj$$241.registerA = parentObj$$241.memoryHighRead(parentObj$$241.memoryReader[parentObj$$241.programCounter](parentObj$$241, parentObj$$241.programCounter));
  parentObj$$241.programCounter = parentObj$$241.programCounter + 1 & 65535
}, function(parentObj$$242) {
  var temp_var$$10 = parentObj$$242.memoryReader[parentObj$$242.stackPointer](parentObj$$242, parentObj$$242.stackPointer);
  parentObj$$242.FZero = temp_var$$10 > 127;
  parentObj$$242.FSubtract = (temp_var$$10 & 64) == 64;
  parentObj$$242.FHalfCarry = (temp_var$$10 & 32) == 32;
  parentObj$$242.FCarry = (temp_var$$10 & 16) == 16;
  parentObj$$242.registerA = parentObj$$242.memoryRead(parentObj$$242.stackPointer + 1 & 65535);
  parentObj$$242.stackPointer = parentObj$$242.stackPointer + 2 & 65535
}, function(parentObj$$243) {
  parentObj$$243.registerA = parentObj$$243.memoryHighReader[parentObj$$243.registerC](parentObj$$243, parentObj$$243.registerC)
}, function(parentObj$$244) {
  parentObj$$244.IME = false;
  parentObj$$244.IRQEnableDelay = 0
}, function(parentObj$$245) {
  cout("Illegal op code 0xF4 called, pausing emulation.", 2);
  pause()
}, function(parentObj$$246) {
  parentObj$$246.stackPointer = parentObj$$246.stackPointer - 1 & 65535;
  parentObj$$246.memoryWriter[parentObj$$246.stackPointer](parentObj$$246, parentObj$$246.stackPointer, parentObj$$246.registerA);
  parentObj$$246.stackPointer = parentObj$$246.stackPointer - 1 & 65535;
  parentObj$$246.memoryWriter[parentObj$$246.stackPointer](parentObj$$246, parentObj$$246.stackPointer, (parentObj$$246.FZero ? 128 : 0) | (parentObj$$246.FSubtract ? 64 : 0) | (parentObj$$246.FHalfCarry ? 32 : 0) | (parentObj$$246.FCarry ? 16 : 0))
}, function(parentObj$$247) {
  parentObj$$247.registerA |= parentObj$$247.memoryReader[parentObj$$247.programCounter](parentObj$$247, parentObj$$247.programCounter);
  parentObj$$247.FZero = parentObj$$247.registerA == 0;
  parentObj$$247.programCounter = parentObj$$247.programCounter + 1 & 65535;
  parentObj$$247.FSubtract = parentObj$$247.FCarry = parentObj$$247.FHalfCarry = false
}, function(parentObj$$248) {
  parentObj$$248.stackPointer = parentObj$$248.stackPointer - 1 & 65535;
  parentObj$$248.memoryWriter[parentObj$$248.stackPointer](parentObj$$248, parentObj$$248.stackPointer, parentObj$$248.programCounter >> 8);
  parentObj$$248.stackPointer = parentObj$$248.stackPointer - 1 & 65535;
  parentObj$$248.memoryWriter[parentObj$$248.stackPointer](parentObj$$248, parentObj$$248.stackPointer, parentObj$$248.programCounter & 255);
  parentObj$$248.programCounter = 48
}, function(parentObj$$249) {
  var temp_var$$11 = parentObj$$249.memoryReader[parentObj$$249.programCounter](parentObj$$249, parentObj$$249.programCounter) << 24 >> 24;
  parentObj$$249.programCounter = parentObj$$249.programCounter + 1 & 65535;
  parentObj$$249.registersHL = parentObj$$249.stackPointer + temp_var$$11 & 65535;
  temp_var$$11 = parentObj$$249.stackPointer ^ temp_var$$11 ^ parentObj$$249.registersHL;
  parentObj$$249.FCarry = (temp_var$$11 & 256) == 256;
  parentObj$$249.FHalfCarry = (temp_var$$11 & 16) == 16;
  parentObj$$249.FZero = parentObj$$249.FSubtract = false
}, function(parentObj$$250) {
  parentObj$$250.stackPointer = parentObj$$250.registersHL
}, function(parentObj$$251) {
  parentObj$$251.registerA = parentObj$$251.memoryRead(parentObj$$251.memoryRead(parentObj$$251.programCounter + 1 & 65535) << 8 | parentObj$$251.memoryReader[parentObj$$251.programCounter](parentObj$$251, parentObj$$251.programCounter));
  parentObj$$251.programCounter = parentObj$$251.programCounter + 2 & 65535
}, function(parentObj$$252) {
  parentObj$$252.IRQEnableDelay = parentObj$$252.IRQEnableDelay == 2 || parentObj$$252.memoryReader[parentObj$$252.programCounter](parentObj$$252, parentObj$$252.programCounter) == 118 ? 1 : 2
}, function(parentObj$$253) {
  cout("Illegal op code 0xFC called, pausing emulation.", 2);
  pause()
}, function(parentObj$$254) {
  cout("Illegal op code 0xFD called, pausing emulation.", 2);
  pause()
}, function(parentObj$$255) {
  var dirtySum$$43 = parentObj$$255.registerA - parentObj$$255.memoryReader[parentObj$$255.programCounter](parentObj$$255, parentObj$$255.programCounter);
  parentObj$$255.programCounter = parentObj$$255.programCounter + 1 & 65535;
  parentObj$$255.FHalfCarry = (dirtySum$$43 & 15) > (parentObj$$255.registerA & 15);
  parentObj$$255.FCarry = dirtySum$$43 < 0;
  parentObj$$255.FZero = dirtySum$$43 == 0;
  parentObj$$255.FSubtract = true
}, function(parentObj$$256) {
  parentObj$$256.stackPointer = parentObj$$256.stackPointer - 1 & 65535;
  parentObj$$256.memoryWriter[parentObj$$256.stackPointer](parentObj$$256, parentObj$$256.stackPointer, parentObj$$256.programCounter >> 8);
  parentObj$$256.stackPointer = parentObj$$256.stackPointer - 1 & 65535;
  parentObj$$256.memoryWriter[parentObj$$256.stackPointer](parentObj$$256, parentObj$$256.stackPointer, parentObj$$256.programCounter & 255);
  parentObj$$256.programCounter = 56
}];
GameBoyCore.prototype.CBOPCODE = [function(parentObj$$257) {
  parentObj$$257.FCarry = parentObj$$257.registerB > 127;
  parentObj$$257.registerB = parentObj$$257.registerB << 1 & 255 | (parentObj$$257.FCarry ? 1 : 0);
  parentObj$$257.FHalfCarry = parentObj$$257.FSubtract = false;
  parentObj$$257.FZero = parentObj$$257.registerB == 0
}, function(parentObj$$258) {
  parentObj$$258.FCarry = parentObj$$258.registerC > 127;
  parentObj$$258.registerC = parentObj$$258.registerC << 1 & 255 | (parentObj$$258.FCarry ? 1 : 0);
  parentObj$$258.FHalfCarry = parentObj$$258.FSubtract = false;
  parentObj$$258.FZero = parentObj$$258.registerC == 0
}, function(parentObj$$259) {
  parentObj$$259.FCarry = parentObj$$259.registerD > 127;
  parentObj$$259.registerD = parentObj$$259.registerD << 1 & 255 | (parentObj$$259.FCarry ? 1 : 0);
  parentObj$$259.FHalfCarry = parentObj$$259.FSubtract = false;
  parentObj$$259.FZero = parentObj$$259.registerD == 0
}, function(parentObj$$260) {
  parentObj$$260.FCarry = parentObj$$260.registerE > 127;
  parentObj$$260.registerE = parentObj$$260.registerE << 1 & 255 | (parentObj$$260.FCarry ? 1 : 0);
  parentObj$$260.FHalfCarry = parentObj$$260.FSubtract = false;
  parentObj$$260.FZero = parentObj$$260.registerE == 0
}, function(parentObj$$261) {
  parentObj$$261.FCarry = parentObj$$261.registersHL > 32767;
  parentObj$$261.registersHL = parentObj$$261.registersHL << 1 & 65024 | (parentObj$$261.FCarry ? 256 : 0) | parentObj$$261.registersHL & 255;
  parentObj$$261.FHalfCarry = parentObj$$261.FSubtract = false;
  parentObj$$261.FZero = parentObj$$261.registersHL < 256
}, function(parentObj$$262) {
  parentObj$$262.FCarry = (parentObj$$262.registersHL & 128) == 128;
  parentObj$$262.registersHL = parentObj$$262.registersHL & 65280 | parentObj$$262.registersHL << 1 & 255 | (parentObj$$262.FCarry ? 1 : 0);
  parentObj$$262.FHalfCarry = parentObj$$262.FSubtract = false;
  parentObj$$262.FZero = (parentObj$$262.registersHL & 255) == 0
}, function(parentObj$$263) {
  var temp_var$$12 = parentObj$$263.memoryReader[parentObj$$263.registersHL](parentObj$$263, parentObj$$263.registersHL);
  parentObj$$263.FCarry = temp_var$$12 > 127;
  temp_var$$12 = temp_var$$12 << 1 & 255 | (parentObj$$263.FCarry ? 1 : 0);
  parentObj$$263.memoryWriter[parentObj$$263.registersHL](parentObj$$263, parentObj$$263.registersHL, temp_var$$12);
  parentObj$$263.FHalfCarry = parentObj$$263.FSubtract = false;
  parentObj$$263.FZero = temp_var$$12 == 0
}, function(parentObj$$264) {
  parentObj$$264.FCarry = parentObj$$264.registerA > 127;
  parentObj$$264.registerA = parentObj$$264.registerA << 1 & 255 | (parentObj$$264.FCarry ? 1 : 0);
  parentObj$$264.FHalfCarry = parentObj$$264.FSubtract = false;
  parentObj$$264.FZero = parentObj$$264.registerA == 0
}, function(parentObj$$265) {
  parentObj$$265.FCarry = (parentObj$$265.registerB & 1) == 1;
  parentObj$$265.registerB = (parentObj$$265.FCarry ? 128 : 0) | parentObj$$265.registerB >> 1;
  parentObj$$265.FHalfCarry = parentObj$$265.FSubtract = false;
  parentObj$$265.FZero = parentObj$$265.registerB == 0
}, function(parentObj$$266) {
  parentObj$$266.FCarry = (parentObj$$266.registerC & 1) == 1;
  parentObj$$266.registerC = (parentObj$$266.FCarry ? 128 : 0) | parentObj$$266.registerC >> 1;
  parentObj$$266.FHalfCarry = parentObj$$266.FSubtract = false;
  parentObj$$266.FZero = parentObj$$266.registerC == 0
}, function(parentObj$$267) {
  parentObj$$267.FCarry = (parentObj$$267.registerD & 1) == 1;
  parentObj$$267.registerD = (parentObj$$267.FCarry ? 128 : 0) | parentObj$$267.registerD >> 1;
  parentObj$$267.FHalfCarry = parentObj$$267.FSubtract = false;
  parentObj$$267.FZero = parentObj$$267.registerD == 0
}, function(parentObj$$268) {
  parentObj$$268.FCarry = (parentObj$$268.registerE & 1) == 1;
  parentObj$$268.registerE = (parentObj$$268.FCarry ? 128 : 0) | parentObj$$268.registerE >> 1;
  parentObj$$268.FHalfCarry = parentObj$$268.FSubtract = false;
  parentObj$$268.FZero = parentObj$$268.registerE == 0
}, function(parentObj$$269) {
  parentObj$$269.FCarry = (parentObj$$269.registersHL & 256) == 256;
  parentObj$$269.registersHL = (parentObj$$269.FCarry ? 32768 : 0) | parentObj$$269.registersHL >> 1 & 65280 | parentObj$$269.registersHL & 255;
  parentObj$$269.FHalfCarry = parentObj$$269.FSubtract = false;
  parentObj$$269.FZero = parentObj$$269.registersHL < 256
}, function(parentObj$$270) {
  parentObj$$270.FCarry = (parentObj$$270.registersHL & 1) == 1;
  parentObj$$270.registersHL = parentObj$$270.registersHL & 65280 | (parentObj$$270.FCarry ? 128 : 0) | (parentObj$$270.registersHL & 255) >> 1;
  parentObj$$270.FHalfCarry = parentObj$$270.FSubtract = false;
  parentObj$$270.FZero = (parentObj$$270.registersHL & 255) == 0
}, function(parentObj$$271) {
  var temp_var$$13 = parentObj$$271.memoryReader[parentObj$$271.registersHL](parentObj$$271, parentObj$$271.registersHL);
  parentObj$$271.FCarry = (temp_var$$13 & 1) == 1;
  temp_var$$13 = (parentObj$$271.FCarry ? 128 : 0) | temp_var$$13 >> 1;
  parentObj$$271.memoryWriter[parentObj$$271.registersHL](parentObj$$271, parentObj$$271.registersHL, temp_var$$13);
  parentObj$$271.FHalfCarry = parentObj$$271.FSubtract = false;
  parentObj$$271.FZero = temp_var$$13 == 0
}, function(parentObj$$272) {
  parentObj$$272.FCarry = (parentObj$$272.registerA & 1) == 1;
  parentObj$$272.registerA = (parentObj$$272.FCarry ? 128 : 0) | parentObj$$272.registerA >> 1;
  parentObj$$272.FHalfCarry = parentObj$$272.FSubtract = false;
  parentObj$$272.FZero = parentObj$$272.registerA == 0
}, function(parentObj$$273) {
  var newFCarry = parentObj$$273.registerB > 127;
  parentObj$$273.registerB = parentObj$$273.registerB << 1 & 255 | (parentObj$$273.FCarry ? 1 : 0);
  parentObj$$273.FCarry = newFCarry;
  parentObj$$273.FHalfCarry = parentObj$$273.FSubtract = false;
  parentObj$$273.FZero = parentObj$$273.registerB == 0
}, function(parentObj$$274) {
  var newFCarry$$1 = parentObj$$274.registerC > 127;
  parentObj$$274.registerC = parentObj$$274.registerC << 1 & 255 | (parentObj$$274.FCarry ? 1 : 0);
  parentObj$$274.FCarry = newFCarry$$1;
  parentObj$$274.FHalfCarry = parentObj$$274.FSubtract = false;
  parentObj$$274.FZero = parentObj$$274.registerC == 0
}, function(parentObj$$275) {
  var newFCarry$$2 = parentObj$$275.registerD > 127;
  parentObj$$275.registerD = parentObj$$275.registerD << 1 & 255 | (parentObj$$275.FCarry ? 1 : 0);
  parentObj$$275.FCarry = newFCarry$$2;
  parentObj$$275.FHalfCarry = parentObj$$275.FSubtract = false;
  parentObj$$275.FZero = parentObj$$275.registerD == 0
}, function(parentObj$$276) {
  var newFCarry$$3 = parentObj$$276.registerE > 127;
  parentObj$$276.registerE = parentObj$$276.registerE << 1 & 255 | (parentObj$$276.FCarry ? 1 : 0);
  parentObj$$276.FCarry = newFCarry$$3;
  parentObj$$276.FHalfCarry = parentObj$$276.FSubtract = false;
  parentObj$$276.FZero = parentObj$$276.registerE == 0
}, function(parentObj$$277) {
  var newFCarry$$4 = parentObj$$277.registersHL > 32767;
  parentObj$$277.registersHL = parentObj$$277.registersHL << 1 & 65024 | (parentObj$$277.FCarry ? 256 : 0) | parentObj$$277.registersHL & 255;
  parentObj$$277.FCarry = newFCarry$$4;
  parentObj$$277.FHalfCarry = parentObj$$277.FSubtract = false;
  parentObj$$277.FZero = parentObj$$277.registersHL < 256
}, function(parentObj$$278) {
  var newFCarry$$5 = (parentObj$$278.registersHL & 128) == 128;
  parentObj$$278.registersHL = parentObj$$278.registersHL & 65280 | parentObj$$278.registersHL << 1 & 255 | (parentObj$$278.FCarry ? 1 : 0);
  parentObj$$278.FCarry = newFCarry$$5;
  parentObj$$278.FHalfCarry = parentObj$$278.FSubtract = false;
  parentObj$$278.FZero = (parentObj$$278.registersHL & 255) == 0
}, function(parentObj$$279) {
  var temp_var$$14 = parentObj$$279.memoryReader[parentObj$$279.registersHL](parentObj$$279, parentObj$$279.registersHL);
  var newFCarry$$6 = temp_var$$14 > 127;
  temp_var$$14 = temp_var$$14 << 1 & 255 | (parentObj$$279.FCarry ? 1 : 0);
  parentObj$$279.FCarry = newFCarry$$6;
  parentObj$$279.memoryWriter[parentObj$$279.registersHL](parentObj$$279, parentObj$$279.registersHL, temp_var$$14);
  parentObj$$279.FHalfCarry = parentObj$$279.FSubtract = false;
  parentObj$$279.FZero = temp_var$$14 == 0
}, function(parentObj$$280) {
  var newFCarry$$7 = parentObj$$280.registerA > 127;
  parentObj$$280.registerA = parentObj$$280.registerA << 1 & 255 | (parentObj$$280.FCarry ? 1 : 0);
  parentObj$$280.FCarry = newFCarry$$7;
  parentObj$$280.FHalfCarry = parentObj$$280.FSubtract = false;
  parentObj$$280.FZero = parentObj$$280.registerA == 0
}, function(parentObj$$281) {
  var newFCarry$$8 = (parentObj$$281.registerB & 1) == 1;
  parentObj$$281.registerB = (parentObj$$281.FCarry ? 128 : 0) | parentObj$$281.registerB >> 1;
  parentObj$$281.FCarry = newFCarry$$8;
  parentObj$$281.FHalfCarry = parentObj$$281.FSubtract = false;
  parentObj$$281.FZero = parentObj$$281.registerB == 0
}, function(parentObj$$282) {
  var newFCarry$$9 = (parentObj$$282.registerC & 1) == 1;
  parentObj$$282.registerC = (parentObj$$282.FCarry ? 128 : 0) | parentObj$$282.registerC >> 1;
  parentObj$$282.FCarry = newFCarry$$9;
  parentObj$$282.FHalfCarry = parentObj$$282.FSubtract = false;
  parentObj$$282.FZero = parentObj$$282.registerC == 0
}, function(parentObj$$283) {
  var newFCarry$$10 = (parentObj$$283.registerD & 1) == 1;
  parentObj$$283.registerD = (parentObj$$283.FCarry ? 128 : 0) | parentObj$$283.registerD >> 1;
  parentObj$$283.FCarry = newFCarry$$10;
  parentObj$$283.FHalfCarry = parentObj$$283.FSubtract = false;
  parentObj$$283.FZero = parentObj$$283.registerD == 0
}, function(parentObj$$284) {
  var newFCarry$$11 = (parentObj$$284.registerE & 1) == 1;
  parentObj$$284.registerE = (parentObj$$284.FCarry ? 128 : 0) | parentObj$$284.registerE >> 1;
  parentObj$$284.FCarry = newFCarry$$11;
  parentObj$$284.FHalfCarry = parentObj$$284.FSubtract = false;
  parentObj$$284.FZero = parentObj$$284.registerE == 0
}, function(parentObj$$285) {
  var newFCarry$$12 = (parentObj$$285.registersHL & 256) == 256;
  parentObj$$285.registersHL = (parentObj$$285.FCarry ? 32768 : 0) | parentObj$$285.registersHL >> 1 & 65280 | parentObj$$285.registersHL & 255;
  parentObj$$285.FCarry = newFCarry$$12;
  parentObj$$285.FHalfCarry = parentObj$$285.FSubtract = false;
  parentObj$$285.FZero = parentObj$$285.registersHL < 256
}, function(parentObj$$286) {
  var newFCarry$$13 = (parentObj$$286.registersHL & 1) == 1;
  parentObj$$286.registersHL = parentObj$$286.registersHL & 65280 | (parentObj$$286.FCarry ? 128 : 0) | (parentObj$$286.registersHL & 255) >> 1;
  parentObj$$286.FCarry = newFCarry$$13;
  parentObj$$286.FHalfCarry = parentObj$$286.FSubtract = false;
  parentObj$$286.FZero = (parentObj$$286.registersHL & 255) == 0
}, function(parentObj$$287) {
  var temp_var$$15 = parentObj$$287.memoryReader[parentObj$$287.registersHL](parentObj$$287, parentObj$$287.registersHL);
  var newFCarry$$14 = (temp_var$$15 & 1) == 1;
  temp_var$$15 = (parentObj$$287.FCarry ? 128 : 0) | temp_var$$15 >> 1;
  parentObj$$287.FCarry = newFCarry$$14;
  parentObj$$287.memoryWriter[parentObj$$287.registersHL](parentObj$$287, parentObj$$287.registersHL, temp_var$$15);
  parentObj$$287.FHalfCarry = parentObj$$287.FSubtract = false;
  parentObj$$287.FZero = temp_var$$15 == 0
}, function(parentObj$$288) {
  var newFCarry$$15 = (parentObj$$288.registerA & 1) == 1;
  parentObj$$288.registerA = (parentObj$$288.FCarry ? 128 : 0) | parentObj$$288.registerA >> 1;
  parentObj$$288.FCarry = newFCarry$$15;
  parentObj$$288.FHalfCarry = parentObj$$288.FSubtract = false;
  parentObj$$288.FZero = parentObj$$288.registerA == 0
}, function(parentObj$$289) {
  parentObj$$289.FCarry = parentObj$$289.registerB > 127;
  parentObj$$289.registerB = parentObj$$289.registerB << 1 & 255;
  parentObj$$289.FHalfCarry = parentObj$$289.FSubtract = false;
  parentObj$$289.FZero = parentObj$$289.registerB == 0
}, function(parentObj$$290) {
  parentObj$$290.FCarry = parentObj$$290.registerC > 127;
  parentObj$$290.registerC = parentObj$$290.registerC << 1 & 255;
  parentObj$$290.FHalfCarry = parentObj$$290.FSubtract = false;
  parentObj$$290.FZero = parentObj$$290.registerC == 0
}, function(parentObj$$291) {
  parentObj$$291.FCarry = parentObj$$291.registerD > 127;
  parentObj$$291.registerD = parentObj$$291.registerD << 1 & 255;
  parentObj$$291.FHalfCarry = parentObj$$291.FSubtract = false;
  parentObj$$291.FZero = parentObj$$291.registerD == 0
}, function(parentObj$$292) {
  parentObj$$292.FCarry = parentObj$$292.registerE > 127;
  parentObj$$292.registerE = parentObj$$292.registerE << 1 & 255;
  parentObj$$292.FHalfCarry = parentObj$$292.FSubtract = false;
  parentObj$$292.FZero = parentObj$$292.registerE == 0
}, function(parentObj$$293) {
  parentObj$$293.FCarry = parentObj$$293.registersHL > 32767;
  parentObj$$293.registersHL = parentObj$$293.registersHL << 1 & 65024 | parentObj$$293.registersHL & 255;
  parentObj$$293.FHalfCarry = parentObj$$293.FSubtract = false;
  parentObj$$293.FZero = parentObj$$293.registersHL < 256
}, function(parentObj$$294) {
  parentObj$$294.FCarry = (parentObj$$294.registersHL & 128) == 128;
  parentObj$$294.registersHL = parentObj$$294.registersHL & 65280 | parentObj$$294.registersHL << 1 & 255;
  parentObj$$294.FHalfCarry = parentObj$$294.FSubtract = false;
  parentObj$$294.FZero = (parentObj$$294.registersHL & 255) == 0
}, function(parentObj$$295) {
  var temp_var$$16 = parentObj$$295.memoryReader[parentObj$$295.registersHL](parentObj$$295, parentObj$$295.registersHL);
  parentObj$$295.FCarry = temp_var$$16 > 127;
  temp_var$$16 = temp_var$$16 << 1 & 255;
  parentObj$$295.memoryWriter[parentObj$$295.registersHL](parentObj$$295, parentObj$$295.registersHL, temp_var$$16);
  parentObj$$295.FHalfCarry = parentObj$$295.FSubtract = false;
  parentObj$$295.FZero = temp_var$$16 == 0
}, function(parentObj$$296) {
  parentObj$$296.FCarry = parentObj$$296.registerA > 127;
  parentObj$$296.registerA = parentObj$$296.registerA << 1 & 255;
  parentObj$$296.FHalfCarry = parentObj$$296.FSubtract = false;
  parentObj$$296.FZero = parentObj$$296.registerA == 0
}, function(parentObj$$297) {
  parentObj$$297.FCarry = (parentObj$$297.registerB & 1) == 1;
  parentObj$$297.registerB = parentObj$$297.registerB & 128 | parentObj$$297.registerB >> 1;
  parentObj$$297.FHalfCarry = parentObj$$297.FSubtract = false;
  parentObj$$297.FZero = parentObj$$297.registerB == 0
}, function(parentObj$$298) {
  parentObj$$298.FCarry = (parentObj$$298.registerC & 1) == 1;
  parentObj$$298.registerC = parentObj$$298.registerC & 128 | parentObj$$298.registerC >> 1;
  parentObj$$298.FHalfCarry = parentObj$$298.FSubtract = false;
  parentObj$$298.FZero = parentObj$$298.registerC == 0
}, function(parentObj$$299) {
  parentObj$$299.FCarry = (parentObj$$299.registerD & 1) == 1;
  parentObj$$299.registerD = parentObj$$299.registerD & 128 | parentObj$$299.registerD >> 1;
  parentObj$$299.FHalfCarry = parentObj$$299.FSubtract = false;
  parentObj$$299.FZero = parentObj$$299.registerD == 0
}, function(parentObj$$300) {
  parentObj$$300.FCarry = (parentObj$$300.registerE & 1) == 1;
  parentObj$$300.registerE = parentObj$$300.registerE & 128 | parentObj$$300.registerE >> 1;
  parentObj$$300.FHalfCarry = parentObj$$300.FSubtract = false;
  parentObj$$300.FZero = parentObj$$300.registerE == 0
}, function(parentObj$$301) {
  parentObj$$301.FCarry = (parentObj$$301.registersHL & 256) == 256;
  parentObj$$301.registersHL = parentObj$$301.registersHL >> 1 & 65280 | parentObj$$301.registersHL & 33023;
  parentObj$$301.FHalfCarry = parentObj$$301.FSubtract = false;
  parentObj$$301.FZero = parentObj$$301.registersHL < 256
}, function(parentObj$$302) {
  parentObj$$302.FCarry = (parentObj$$302.registersHL & 1) == 1;
  parentObj$$302.registersHL = parentObj$$302.registersHL & 65408 | (parentObj$$302.registersHL & 255) >> 1;
  parentObj$$302.FHalfCarry = parentObj$$302.FSubtract = false;
  parentObj$$302.FZero = (parentObj$$302.registersHL & 255) == 0
}, function(parentObj$$303) {
  var temp_var$$17 = parentObj$$303.memoryReader[parentObj$$303.registersHL](parentObj$$303, parentObj$$303.registersHL);
  parentObj$$303.FCarry = (temp_var$$17 & 1) == 1;
  temp_var$$17 = temp_var$$17 & 128 | temp_var$$17 >> 1;
  parentObj$$303.memoryWriter[parentObj$$303.registersHL](parentObj$$303, parentObj$$303.registersHL, temp_var$$17);
  parentObj$$303.FHalfCarry = parentObj$$303.FSubtract = false;
  parentObj$$303.FZero = temp_var$$17 == 0
}, function(parentObj$$304) {
  parentObj$$304.FCarry = (parentObj$$304.registerA & 1) == 1;
  parentObj$$304.registerA = parentObj$$304.registerA & 128 | parentObj$$304.registerA >> 1;
  parentObj$$304.FHalfCarry = parentObj$$304.FSubtract = false;
  parentObj$$304.FZero = parentObj$$304.registerA == 0
}, function(parentObj$$305) {
  parentObj$$305.registerB = (parentObj$$305.registerB & 15) << 4 | parentObj$$305.registerB >> 4;
  parentObj$$305.FZero = parentObj$$305.registerB == 0;
  parentObj$$305.FCarry = parentObj$$305.FHalfCarry = parentObj$$305.FSubtract = false
}, function(parentObj$$306) {
  parentObj$$306.registerC = (parentObj$$306.registerC & 15) << 4 | parentObj$$306.registerC >> 4;
  parentObj$$306.FZero = parentObj$$306.registerC == 0;
  parentObj$$306.FCarry = parentObj$$306.FHalfCarry = parentObj$$306.FSubtract = false
}, function(parentObj$$307) {
  parentObj$$307.registerD = (parentObj$$307.registerD & 15) << 4 | parentObj$$307.registerD >> 4;
  parentObj$$307.FZero = parentObj$$307.registerD == 0;
  parentObj$$307.FCarry = parentObj$$307.FHalfCarry = parentObj$$307.FSubtract = false
}, function(parentObj$$308) {
  parentObj$$308.registerE = (parentObj$$308.registerE & 15) << 4 | parentObj$$308.registerE >> 4;
  parentObj$$308.FZero = parentObj$$308.registerE == 0;
  parentObj$$308.FCarry = parentObj$$308.FHalfCarry = parentObj$$308.FSubtract = false
}, function(parentObj$$309) {
  parentObj$$309.registersHL = (parentObj$$309.registersHL & 3840) << 4 | (parentObj$$309.registersHL & 61440) >> 4 | parentObj$$309.registersHL & 255;
  parentObj$$309.FZero = parentObj$$309.registersHL < 256;
  parentObj$$309.FCarry = parentObj$$309.FHalfCarry = parentObj$$309.FSubtract = false
}, function(parentObj$$310) {
  parentObj$$310.registersHL = parentObj$$310.registersHL & 65280 | (parentObj$$310.registersHL & 15) << 4 | (parentObj$$310.registersHL & 240) >> 4;
  parentObj$$310.FZero = (parentObj$$310.registersHL & 255) == 0;
  parentObj$$310.FCarry = parentObj$$310.FHalfCarry = parentObj$$310.FSubtract = false
}, function(parentObj$$311) {
  var temp_var$$18 = parentObj$$311.memoryReader[parentObj$$311.registersHL](parentObj$$311, parentObj$$311.registersHL);
  temp_var$$18 = (temp_var$$18 & 15) << 4 | temp_var$$18 >> 4;
  parentObj$$311.memoryWriter[parentObj$$311.registersHL](parentObj$$311, parentObj$$311.registersHL, temp_var$$18);
  parentObj$$311.FZero = temp_var$$18 == 0;
  parentObj$$311.FCarry = parentObj$$311.FHalfCarry = parentObj$$311.FSubtract = false
}, function(parentObj$$312) {
  parentObj$$312.registerA = (parentObj$$312.registerA & 15) << 4 | parentObj$$312.registerA >> 4;
  parentObj$$312.FZero = parentObj$$312.registerA == 0;
  parentObj$$312.FCarry = parentObj$$312.FHalfCarry = parentObj$$312.FSubtract = false
}, function(parentObj$$313) {
  parentObj$$313.FCarry = (parentObj$$313.registerB & 1) == 1;
  parentObj$$313.registerB >>= 1;
  parentObj$$313.FHalfCarry = parentObj$$313.FSubtract = false;
  parentObj$$313.FZero = parentObj$$313.registerB == 0
}, function(parentObj$$314) {
  parentObj$$314.FCarry = (parentObj$$314.registerC & 1) == 1;
  parentObj$$314.registerC >>= 1;
  parentObj$$314.FHalfCarry = parentObj$$314.FSubtract = false;
  parentObj$$314.FZero = parentObj$$314.registerC == 0
}, function(parentObj$$315) {
  parentObj$$315.FCarry = (parentObj$$315.registerD & 1) == 1;
  parentObj$$315.registerD >>= 1;
  parentObj$$315.FHalfCarry = parentObj$$315.FSubtract = false;
  parentObj$$315.FZero = parentObj$$315.registerD == 0
}, function(parentObj$$316) {
  parentObj$$316.FCarry = (parentObj$$316.registerE & 1) == 1;
  parentObj$$316.registerE >>= 1;
  parentObj$$316.FHalfCarry = parentObj$$316.FSubtract = false;
  parentObj$$316.FZero = parentObj$$316.registerE == 0
}, function(parentObj$$317) {
  parentObj$$317.FCarry = (parentObj$$317.registersHL & 256) == 256;
  parentObj$$317.registersHL = parentObj$$317.registersHL >> 1 & 65280 | parentObj$$317.registersHL & 255;
  parentObj$$317.FHalfCarry = parentObj$$317.FSubtract = false;
  parentObj$$317.FZero = parentObj$$317.registersHL < 256
}, function(parentObj$$318) {
  parentObj$$318.FCarry = (parentObj$$318.registersHL & 1) == 1;
  parentObj$$318.registersHL = parentObj$$318.registersHL & 65280 | (parentObj$$318.registersHL & 255) >> 1;
  parentObj$$318.FHalfCarry = parentObj$$318.FSubtract = false;
  parentObj$$318.FZero = (parentObj$$318.registersHL & 255) == 0
}, function(parentObj$$319) {
  var temp_var$$19 = parentObj$$319.memoryReader[parentObj$$319.registersHL](parentObj$$319, parentObj$$319.registersHL);
  parentObj$$319.FCarry = (temp_var$$19 & 1) == 1;
  parentObj$$319.memoryWriter[parentObj$$319.registersHL](parentObj$$319, parentObj$$319.registersHL, temp_var$$19 >> 1);
  parentObj$$319.FHalfCarry = parentObj$$319.FSubtract = false;
  parentObj$$319.FZero = temp_var$$19 < 2
}, function(parentObj$$320) {
  parentObj$$320.FCarry = (parentObj$$320.registerA & 1) == 1;
  parentObj$$320.registerA >>= 1;
  parentObj$$320.FHalfCarry = parentObj$$320.FSubtract = false;
  parentObj$$320.FZero = parentObj$$320.registerA == 0
}, function(parentObj$$321) {
  parentObj$$321.FHalfCarry = true;
  parentObj$$321.FSubtract = false;
  parentObj$$321.FZero = (parentObj$$321.registerB & 1) == 0
}, function(parentObj$$322) {
  parentObj$$322.FHalfCarry = true;
  parentObj$$322.FSubtract = false;
  parentObj$$322.FZero = (parentObj$$322.registerC & 1) == 0
}, function(parentObj$$323) {
  parentObj$$323.FHalfCarry = true;
  parentObj$$323.FSubtract = false;
  parentObj$$323.FZero = (parentObj$$323.registerD & 1) == 0
}, function(parentObj$$324) {
  parentObj$$324.FHalfCarry = true;
  parentObj$$324.FSubtract = false;
  parentObj$$324.FZero = (parentObj$$324.registerE & 1) == 0
}, function(parentObj$$325) {
  parentObj$$325.FHalfCarry = true;
  parentObj$$325.FSubtract = false;
  parentObj$$325.FZero = (parentObj$$325.registersHL & 256) == 0
}, function(parentObj$$326) {
  parentObj$$326.FHalfCarry = true;
  parentObj$$326.FSubtract = false;
  parentObj$$326.FZero = (parentObj$$326.registersHL & 1) == 0
}, function(parentObj$$327) {
  parentObj$$327.FHalfCarry = true;
  parentObj$$327.FSubtract = false;
  parentObj$$327.FZero = (parentObj$$327.memoryReader[parentObj$$327.registersHL](parentObj$$327, parentObj$$327.registersHL) & 1) == 0
}, function(parentObj$$328) {
  parentObj$$328.FHalfCarry = true;
  parentObj$$328.FSubtract = false;
  parentObj$$328.FZero = (parentObj$$328.registerA & 1) == 0
}, function(parentObj$$329) {
  parentObj$$329.FHalfCarry = true;
  parentObj$$329.FSubtract = false;
  parentObj$$329.FZero = (parentObj$$329.registerB & 2) == 0
}, function(parentObj$$330) {
  parentObj$$330.FHalfCarry = true;
  parentObj$$330.FSubtract = false;
  parentObj$$330.FZero = (parentObj$$330.registerC & 2) == 0
}, function(parentObj$$331) {
  parentObj$$331.FHalfCarry = true;
  parentObj$$331.FSubtract = false;
  parentObj$$331.FZero = (parentObj$$331.registerD & 2) == 0
}, function(parentObj$$332) {
  parentObj$$332.FHalfCarry = true;
  parentObj$$332.FSubtract = false;
  parentObj$$332.FZero = (parentObj$$332.registerE & 2) == 0
}, function(parentObj$$333) {
  parentObj$$333.FHalfCarry = true;
  parentObj$$333.FSubtract = false;
  parentObj$$333.FZero = (parentObj$$333.registersHL & 512) == 0
}, function(parentObj$$334) {
  parentObj$$334.FHalfCarry = true;
  parentObj$$334.FSubtract = false;
  parentObj$$334.FZero = (parentObj$$334.registersHL & 2) == 0
}, function(parentObj$$335) {
  parentObj$$335.FHalfCarry = true;
  parentObj$$335.FSubtract = false;
  parentObj$$335.FZero = (parentObj$$335.memoryReader[parentObj$$335.registersHL](parentObj$$335, parentObj$$335.registersHL) & 2) == 0
}, function(parentObj$$336) {
  parentObj$$336.FHalfCarry = true;
  parentObj$$336.FSubtract = false;
  parentObj$$336.FZero = (parentObj$$336.registerA & 2) == 0
}, function(parentObj$$337) {
  parentObj$$337.FHalfCarry = true;
  parentObj$$337.FSubtract = false;
  parentObj$$337.FZero = (parentObj$$337.registerB & 4) == 0
}, function(parentObj$$338) {
  parentObj$$338.FHalfCarry = true;
  parentObj$$338.FSubtract = false;
  parentObj$$338.FZero = (parentObj$$338.registerC & 4) == 0
}, function(parentObj$$339) {
  parentObj$$339.FHalfCarry = true;
  parentObj$$339.FSubtract = false;
  parentObj$$339.FZero = (parentObj$$339.registerD & 4) == 0
}, function(parentObj$$340) {
  parentObj$$340.FHalfCarry = true;
  parentObj$$340.FSubtract = false;
  parentObj$$340.FZero = (parentObj$$340.registerE & 4) == 0
}, function(parentObj$$341) {
  parentObj$$341.FHalfCarry = true;
  parentObj$$341.FSubtract = false;
  parentObj$$341.FZero = (parentObj$$341.registersHL & 1024) == 0
}, function(parentObj$$342) {
  parentObj$$342.FHalfCarry = true;
  parentObj$$342.FSubtract = false;
  parentObj$$342.FZero = (parentObj$$342.registersHL & 4) == 0
}, function(parentObj$$343) {
  parentObj$$343.FHalfCarry = true;
  parentObj$$343.FSubtract = false;
  parentObj$$343.FZero = (parentObj$$343.memoryReader[parentObj$$343.registersHL](parentObj$$343, parentObj$$343.registersHL) & 4) == 0
}, function(parentObj$$344) {
  parentObj$$344.FHalfCarry = true;
  parentObj$$344.FSubtract = false;
  parentObj$$344.FZero = (parentObj$$344.registerA & 4) == 0
}, function(parentObj$$345) {
  parentObj$$345.FHalfCarry = true;
  parentObj$$345.FSubtract = false;
  parentObj$$345.FZero = (parentObj$$345.registerB & 8) == 0
}, function(parentObj$$346) {
  parentObj$$346.FHalfCarry = true;
  parentObj$$346.FSubtract = false;
  parentObj$$346.FZero = (parentObj$$346.registerC & 8) == 0
}, function(parentObj$$347) {
  parentObj$$347.FHalfCarry = true;
  parentObj$$347.FSubtract = false;
  parentObj$$347.FZero = (parentObj$$347.registerD & 8) == 0
}, function(parentObj$$348) {
  parentObj$$348.FHalfCarry = true;
  parentObj$$348.FSubtract = false;
  parentObj$$348.FZero = (parentObj$$348.registerE & 8) == 0
}, function(parentObj$$349) {
  parentObj$$349.FHalfCarry = true;
  parentObj$$349.FSubtract = false;
  parentObj$$349.FZero = (parentObj$$349.registersHL & 2048) == 0
}, function(parentObj$$350) {
  parentObj$$350.FHalfCarry = true;
  parentObj$$350.FSubtract = false;
  parentObj$$350.FZero = (parentObj$$350.registersHL & 8) == 0
}, function(parentObj$$351) {
  parentObj$$351.FHalfCarry = true;
  parentObj$$351.FSubtract = false;
  parentObj$$351.FZero = (parentObj$$351.memoryReader[parentObj$$351.registersHL](parentObj$$351, parentObj$$351.registersHL) & 8) == 0
}, function(parentObj$$352) {
  parentObj$$352.FHalfCarry = true;
  parentObj$$352.FSubtract = false;
  parentObj$$352.FZero = (parentObj$$352.registerA & 8) == 0
}, function(parentObj$$353) {
  parentObj$$353.FHalfCarry = true;
  parentObj$$353.FSubtract = false;
  parentObj$$353.FZero = (parentObj$$353.registerB & 16) == 0
}, function(parentObj$$354) {
  parentObj$$354.FHalfCarry = true;
  parentObj$$354.FSubtract = false;
  parentObj$$354.FZero = (parentObj$$354.registerC & 16) == 0
}, function(parentObj$$355) {
  parentObj$$355.FHalfCarry = true;
  parentObj$$355.FSubtract = false;
  parentObj$$355.FZero = (parentObj$$355.registerD & 16) == 0
}, function(parentObj$$356) {
  parentObj$$356.FHalfCarry = true;
  parentObj$$356.FSubtract = false;
  parentObj$$356.FZero = (parentObj$$356.registerE & 16) == 0
}, function(parentObj$$357) {
  parentObj$$357.FHalfCarry = true;
  parentObj$$357.FSubtract = false;
  parentObj$$357.FZero = (parentObj$$357.registersHL & 4096) == 0
}, function(parentObj$$358) {
  parentObj$$358.FHalfCarry = true;
  parentObj$$358.FSubtract = false;
  parentObj$$358.FZero = (parentObj$$358.registersHL & 16) == 0
}, function(parentObj$$359) {
  parentObj$$359.FHalfCarry = true;
  parentObj$$359.FSubtract = false;
  parentObj$$359.FZero = (parentObj$$359.memoryReader[parentObj$$359.registersHL](parentObj$$359, parentObj$$359.registersHL) & 16) == 0
}, function(parentObj$$360) {
  parentObj$$360.FHalfCarry = true;
  parentObj$$360.FSubtract = false;
  parentObj$$360.FZero = (parentObj$$360.registerA & 16) == 0
}, function(parentObj$$361) {
  parentObj$$361.FHalfCarry = true;
  parentObj$$361.FSubtract = false;
  parentObj$$361.FZero = (parentObj$$361.registerB & 32) == 0
}, function(parentObj$$362) {
  parentObj$$362.FHalfCarry = true;
  parentObj$$362.FSubtract = false;
  parentObj$$362.FZero = (parentObj$$362.registerC & 32) == 0
}, function(parentObj$$363) {
  parentObj$$363.FHalfCarry = true;
  parentObj$$363.FSubtract = false;
  parentObj$$363.FZero = (parentObj$$363.registerD & 32) == 0
}, function(parentObj$$364) {
  parentObj$$364.FHalfCarry = true;
  parentObj$$364.FSubtract = false;
  parentObj$$364.FZero = (parentObj$$364.registerE & 32) == 0
}, function(parentObj$$365) {
  parentObj$$365.FHalfCarry = true;
  parentObj$$365.FSubtract = false;
  parentObj$$365.FZero = (parentObj$$365.registersHL & 8192) == 0
}, function(parentObj$$366) {
  parentObj$$366.FHalfCarry = true;
  parentObj$$366.FSubtract = false;
  parentObj$$366.FZero = (parentObj$$366.registersHL & 32) == 0
}, function(parentObj$$367) {
  parentObj$$367.FHalfCarry = true;
  parentObj$$367.FSubtract = false;
  parentObj$$367.FZero = (parentObj$$367.memoryReader[parentObj$$367.registersHL](parentObj$$367, parentObj$$367.registersHL) & 32) == 0
}, function(parentObj$$368) {
  parentObj$$368.FHalfCarry = true;
  parentObj$$368.FSubtract = false;
  parentObj$$368.FZero = (parentObj$$368.registerA & 32) == 0
}, function(parentObj$$369) {
  parentObj$$369.FHalfCarry = true;
  parentObj$$369.FSubtract = false;
  parentObj$$369.FZero = (parentObj$$369.registerB & 64) == 0
}, function(parentObj$$370) {
  parentObj$$370.FHalfCarry = true;
  parentObj$$370.FSubtract = false;
  parentObj$$370.FZero = (parentObj$$370.registerC & 64) == 0
}, function(parentObj$$371) {
  parentObj$$371.FHalfCarry = true;
  parentObj$$371.FSubtract = false;
  parentObj$$371.FZero = (parentObj$$371.registerD & 64) == 0
}, function(parentObj$$372) {
  parentObj$$372.FHalfCarry = true;
  parentObj$$372.FSubtract = false;
  parentObj$$372.FZero = (parentObj$$372.registerE & 64) == 0
}, function(parentObj$$373) {
  parentObj$$373.FHalfCarry = true;
  parentObj$$373.FSubtract = false;
  parentObj$$373.FZero = (parentObj$$373.registersHL & 16384) == 0
}, function(parentObj$$374) {
  parentObj$$374.FHalfCarry = true;
  parentObj$$374.FSubtract = false;
  parentObj$$374.FZero = (parentObj$$374.registersHL & 64) == 0
}, function(parentObj$$375) {
  parentObj$$375.FHalfCarry = true;
  parentObj$$375.FSubtract = false;
  parentObj$$375.FZero = (parentObj$$375.memoryReader[parentObj$$375.registersHL](parentObj$$375, parentObj$$375.registersHL) & 64) == 0
}, function(parentObj$$376) {
  parentObj$$376.FHalfCarry = true;
  parentObj$$376.FSubtract = false;
  parentObj$$376.FZero = (parentObj$$376.registerA & 64) == 0
}, function(parentObj$$377) {
  parentObj$$377.FHalfCarry = true;
  parentObj$$377.FSubtract = false;
  parentObj$$377.FZero = (parentObj$$377.registerB & 128) == 0
}, function(parentObj$$378) {
  parentObj$$378.FHalfCarry = true;
  parentObj$$378.FSubtract = false;
  parentObj$$378.FZero = (parentObj$$378.registerC & 128) == 0
}, function(parentObj$$379) {
  parentObj$$379.FHalfCarry = true;
  parentObj$$379.FSubtract = false;
  parentObj$$379.FZero = (parentObj$$379.registerD & 128) == 0
}, function(parentObj$$380) {
  parentObj$$380.FHalfCarry = true;
  parentObj$$380.FSubtract = false;
  parentObj$$380.FZero = (parentObj$$380.registerE & 128) == 0
}, function(parentObj$$381) {
  parentObj$$381.FHalfCarry = true;
  parentObj$$381.FSubtract = false;
  parentObj$$381.FZero = (parentObj$$381.registersHL & 32768) == 0
}, function(parentObj$$382) {
  parentObj$$382.FHalfCarry = true;
  parentObj$$382.FSubtract = false;
  parentObj$$382.FZero = (parentObj$$382.registersHL & 128) == 0
}, function(parentObj$$383) {
  parentObj$$383.FHalfCarry = true;
  parentObj$$383.FSubtract = false;
  parentObj$$383.FZero = (parentObj$$383.memoryReader[parentObj$$383.registersHL](parentObj$$383, parentObj$$383.registersHL) & 128) == 0
}, function(parentObj$$384) {
  parentObj$$384.FHalfCarry = true;
  parentObj$$384.FSubtract = false;
  parentObj$$384.FZero = (parentObj$$384.registerA & 128) == 0
}, function(parentObj$$385) {
  parentObj$$385.registerB &= 254
}, function(parentObj$$386) {
  parentObj$$386.registerC &= 254
}, function(parentObj$$387) {
  parentObj$$387.registerD &= 254
}, function(parentObj$$388) {
  parentObj$$388.registerE &= 254
}, function(parentObj$$389) {
  parentObj$$389.registersHL &= 65279
}, function(parentObj$$390) {
  parentObj$$390.registersHL &= 65534
}, function(parentObj$$391) {
  parentObj$$391.memoryWriter[parentObj$$391.registersHL](parentObj$$391, parentObj$$391.registersHL, parentObj$$391.memoryReader[parentObj$$391.registersHL](parentObj$$391, parentObj$$391.registersHL) & 254)
}, function(parentObj$$392) {
  parentObj$$392.registerA &= 254
}, function(parentObj$$393) {
  parentObj$$393.registerB &= 253
}, function(parentObj$$394) {
  parentObj$$394.registerC &= 253
}, function(parentObj$$395) {
  parentObj$$395.registerD &= 253
}, function(parentObj$$396) {
  parentObj$$396.registerE &= 253
}, function(parentObj$$397) {
  parentObj$$397.registersHL &= 65023
}, function(parentObj$$398) {
  parentObj$$398.registersHL &= 65533
}, function(parentObj$$399) {
  parentObj$$399.memoryWriter[parentObj$$399.registersHL](parentObj$$399, parentObj$$399.registersHL, parentObj$$399.memoryReader[parentObj$$399.registersHL](parentObj$$399, parentObj$$399.registersHL) & 253)
}, function(parentObj$$400) {
  parentObj$$400.registerA &= 253
}, function(parentObj$$401) {
  parentObj$$401.registerB &= 251
}, function(parentObj$$402) {
  parentObj$$402.registerC &= 251
}, function(parentObj$$403) {
  parentObj$$403.registerD &= 251
}, function(parentObj$$404) {
  parentObj$$404.registerE &= 251
}, function(parentObj$$405) {
  parentObj$$405.registersHL &= 64511
}, function(parentObj$$406) {
  parentObj$$406.registersHL &= 65531
}, function(parentObj$$407) {
  parentObj$$407.memoryWriter[parentObj$$407.registersHL](parentObj$$407, parentObj$$407.registersHL, parentObj$$407.memoryReader[parentObj$$407.registersHL](parentObj$$407, parentObj$$407.registersHL) & 251)
}, function(parentObj$$408) {
  parentObj$$408.registerA &= 251
}, function(parentObj$$409) {
  parentObj$$409.registerB &= 247
}, function(parentObj$$410) {
  parentObj$$410.registerC &= 247
}, function(parentObj$$411) {
  parentObj$$411.registerD &= 247
}, function(parentObj$$412) {
  parentObj$$412.registerE &= 247
}, function(parentObj$$413) {
  parentObj$$413.registersHL &= 63487
}, function(parentObj$$414) {
  parentObj$$414.registersHL &= 65527
}, function(parentObj$$415) {
  parentObj$$415.memoryWriter[parentObj$$415.registersHL](parentObj$$415, parentObj$$415.registersHL, parentObj$$415.memoryReader[parentObj$$415.registersHL](parentObj$$415, parentObj$$415.registersHL) & 247)
}, function(parentObj$$416) {
  parentObj$$416.registerA &= 247
}, function(parentObj$$417) {
  parentObj$$417.registerB &= 239
}, function(parentObj$$418) {
  parentObj$$418.registerC &= 239
}, function(parentObj$$419) {
  parentObj$$419.registerD &= 239
}, function(parentObj$$420) {
  parentObj$$420.registerE &= 239
}, function(parentObj$$421) {
  parentObj$$421.registersHL &= 61439
}, function(parentObj$$422) {
  parentObj$$422.registersHL &= 65519
}, function(parentObj$$423) {
  parentObj$$423.memoryWriter[parentObj$$423.registersHL](parentObj$$423, parentObj$$423.registersHL, parentObj$$423.memoryReader[parentObj$$423.registersHL](parentObj$$423, parentObj$$423.registersHL) & 239)
}, function(parentObj$$424) {
  parentObj$$424.registerA &= 239
}, function(parentObj$$425) {
  parentObj$$425.registerB &= 223
}, function(parentObj$$426) {
  parentObj$$426.registerC &= 223
}, function(parentObj$$427) {
  parentObj$$427.registerD &= 223
}, function(parentObj$$428) {
  parentObj$$428.registerE &= 223
}, function(parentObj$$429) {
  parentObj$$429.registersHL &= 57343
}, function(parentObj$$430) {
  parentObj$$430.registersHL &= 65503
}, function(parentObj$$431) {
  parentObj$$431.memoryWriter[parentObj$$431.registersHL](parentObj$$431, parentObj$$431.registersHL, parentObj$$431.memoryReader[parentObj$$431.registersHL](parentObj$$431, parentObj$$431.registersHL) & 223)
}, function(parentObj$$432) {
  parentObj$$432.registerA &= 223
}, function(parentObj$$433) {
  parentObj$$433.registerB &= 191
}, function(parentObj$$434) {
  parentObj$$434.registerC &= 191
}, function(parentObj$$435) {
  parentObj$$435.registerD &= 191
}, function(parentObj$$436) {
  parentObj$$436.registerE &= 191
}, function(parentObj$$437) {
  parentObj$$437.registersHL &= 49151
}, function(parentObj$$438) {
  parentObj$$438.registersHL &= 65471
}, function(parentObj$$439) {
  parentObj$$439.memoryWriter[parentObj$$439.registersHL](parentObj$$439, parentObj$$439.registersHL, parentObj$$439.memoryReader[parentObj$$439.registersHL](parentObj$$439, parentObj$$439.registersHL) & 191)
}, function(parentObj$$440) {
  parentObj$$440.registerA &= 191
}, function(parentObj$$441) {
  parentObj$$441.registerB &= 127
}, function(parentObj$$442) {
  parentObj$$442.registerC &= 127
}, function(parentObj$$443) {
  parentObj$$443.registerD &= 127
}, function(parentObj$$444) {
  parentObj$$444.registerE &= 127
}, function(parentObj$$445) {
  parentObj$$445.registersHL &= 32767
}, function(parentObj$$446) {
  parentObj$$446.registersHL &= 65407
}, function(parentObj$$447) {
  parentObj$$447.memoryWriter[parentObj$$447.registersHL](parentObj$$447, parentObj$$447.registersHL, parentObj$$447.memoryReader[parentObj$$447.registersHL](parentObj$$447, parentObj$$447.registersHL) & 127)
}, function(parentObj$$448) {
  parentObj$$448.registerA &= 127
}, function(parentObj$$449) {
  parentObj$$449.registerB |= 1
}, function(parentObj$$450) {
  parentObj$$450.registerC |= 1
}, function(parentObj$$451) {
  parentObj$$451.registerD |= 1
}, function(parentObj$$452) {
  parentObj$$452.registerE |= 1
}, function(parentObj$$453) {
  parentObj$$453.registersHL |= 256
}, function(parentObj$$454) {
  parentObj$$454.registersHL |= 1
}, function(parentObj$$455) {
  parentObj$$455.memoryWriter[parentObj$$455.registersHL](parentObj$$455, parentObj$$455.registersHL, parentObj$$455.memoryReader[parentObj$$455.registersHL](parentObj$$455, parentObj$$455.registersHL) | 1)
}, function(parentObj$$456) {
  parentObj$$456.registerA |= 1
}, function(parentObj$$457) {
  parentObj$$457.registerB |= 2
}, function(parentObj$$458) {
  parentObj$$458.registerC |= 2
}, function(parentObj$$459) {
  parentObj$$459.registerD |= 2
}, function(parentObj$$460) {
  parentObj$$460.registerE |= 2
}, function(parentObj$$461) {
  parentObj$$461.registersHL |= 512
}, function(parentObj$$462) {
  parentObj$$462.registersHL |= 2
}, function(parentObj$$463) {
  parentObj$$463.memoryWriter[parentObj$$463.registersHL](parentObj$$463, parentObj$$463.registersHL, parentObj$$463.memoryReader[parentObj$$463.registersHL](parentObj$$463, parentObj$$463.registersHL) | 2)
}, function(parentObj$$464) {
  parentObj$$464.registerA |= 2
}, function(parentObj$$465) {
  parentObj$$465.registerB |= 4
}, function(parentObj$$466) {
  parentObj$$466.registerC |= 4
}, function(parentObj$$467) {
  parentObj$$467.registerD |= 4
}, function(parentObj$$468) {
  parentObj$$468.registerE |= 4
}, function(parentObj$$469) {
  parentObj$$469.registersHL |= 1024
}, function(parentObj$$470) {
  parentObj$$470.registersHL |= 4
}, function(parentObj$$471) {
  parentObj$$471.memoryWriter[parentObj$$471.registersHL](parentObj$$471, parentObj$$471.registersHL, parentObj$$471.memoryReader[parentObj$$471.registersHL](parentObj$$471, parentObj$$471.registersHL) | 4)
}, function(parentObj$$472) {
  parentObj$$472.registerA |= 4
}, function(parentObj$$473) {
  parentObj$$473.registerB |= 8
}, function(parentObj$$474) {
  parentObj$$474.registerC |= 8
}, function(parentObj$$475) {
  parentObj$$475.registerD |= 8
}, function(parentObj$$476) {
  parentObj$$476.registerE |= 8
}, function(parentObj$$477) {
  parentObj$$477.registersHL |= 2048
}, function(parentObj$$478) {
  parentObj$$478.registersHL |= 8
}, function(parentObj$$479) {
  parentObj$$479.memoryWriter[parentObj$$479.registersHL](parentObj$$479, parentObj$$479.registersHL, parentObj$$479.memoryReader[parentObj$$479.registersHL](parentObj$$479, parentObj$$479.registersHL) | 8)
}, function(parentObj$$480) {
  parentObj$$480.registerA |= 8
}, function(parentObj$$481) {
  parentObj$$481.registerB |= 16
}, function(parentObj$$482) {
  parentObj$$482.registerC |= 16
}, function(parentObj$$483) {
  parentObj$$483.registerD |= 16
}, function(parentObj$$484) {
  parentObj$$484.registerE |= 16
}, function(parentObj$$485) {
  parentObj$$485.registersHL |= 4096
}, function(parentObj$$486) {
  parentObj$$486.registersHL |= 16
}, function(parentObj$$487) {
  parentObj$$487.memoryWriter[parentObj$$487.registersHL](parentObj$$487, parentObj$$487.registersHL, parentObj$$487.memoryReader[parentObj$$487.registersHL](parentObj$$487, parentObj$$487.registersHL) | 16)
}, function(parentObj$$488) {
  parentObj$$488.registerA |= 16
}, function(parentObj$$489) {
  parentObj$$489.registerB |= 32
}, function(parentObj$$490) {
  parentObj$$490.registerC |= 32
}, function(parentObj$$491) {
  parentObj$$491.registerD |= 32
}, function(parentObj$$492) {
  parentObj$$492.registerE |= 32
}, function(parentObj$$493) {
  parentObj$$493.registersHL |= 8192
}, function(parentObj$$494) {
  parentObj$$494.registersHL |= 32
}, function(parentObj$$495) {
  parentObj$$495.memoryWriter[parentObj$$495.registersHL](parentObj$$495, parentObj$$495.registersHL, parentObj$$495.memoryReader[parentObj$$495.registersHL](parentObj$$495, parentObj$$495.registersHL) | 32)
}, function(parentObj$$496) {
  parentObj$$496.registerA |= 32
}, function(parentObj$$497) {
  parentObj$$497.registerB |= 64
}, function(parentObj$$498) {
  parentObj$$498.registerC |= 64
}, function(parentObj$$499) {
  parentObj$$499.registerD |= 64
}, function(parentObj$$500) {
  parentObj$$500.registerE |= 64
}, function(parentObj$$501) {
  parentObj$$501.registersHL |= 16384
}, function(parentObj$$502) {
  parentObj$$502.registersHL |= 64
}, function(parentObj$$503) {
  parentObj$$503.memoryWriter[parentObj$$503.registersHL](parentObj$$503, parentObj$$503.registersHL, parentObj$$503.memoryReader[parentObj$$503.registersHL](parentObj$$503, parentObj$$503.registersHL) | 64)
}, function(parentObj$$504) {
  parentObj$$504.registerA |= 64
}, function(parentObj$$505) {
  parentObj$$505.registerB |= 128
}, function(parentObj$$506) {
  parentObj$$506.registerC |= 128
}, function(parentObj$$507) {
  parentObj$$507.registerD |= 128
}, function(parentObj$$508) {
  parentObj$$508.registerE |= 128
}, function(parentObj$$509) {
  parentObj$$509.registersHL |= 32768
}, function(parentObj$$510) {
  parentObj$$510.registersHL |= 128
}, function(parentObj$$511) {
  parentObj$$511.memoryWriter[parentObj$$511.registersHL](parentObj$$511, parentObj$$511.registersHL, parentObj$$511.memoryReader[parentObj$$511.registersHL](parentObj$$511, parentObj$$511.registersHL) | 128)
}, function(parentObj$$512) {
  parentObj$$512.registerA |= 128
}];
GameBoyCore.prototype.TICKTable = [4, 12, 8, 8, 4, 4, 8, 4, 20, 8, 8, 8, 4, 4, 8, 4, 4, 12, 8, 8, 4, 4, 8, 4, 12, 8, 8, 8, 4, 4, 8, 4, 8, 12, 8, 8, 4, 4, 8, 4, 8, 8, 8, 8, 4, 4, 8, 4, 8, 12, 8, 8, 12, 12, 12, 4, 8, 8, 8, 8, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 8, 8, 8, 8, 8, 8, 4, 8, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 
4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 8, 12, 12, 16, 12, 16, 8, 16, 8, 16, 12, 0, 12, 24, 8, 16, 8, 12, 12, 4, 12, 16, 8, 16, 8, 16, 12, 4, 12, 4, 8, 16, 12, 12, 8, 4, 4, 16, 8, 16, 16, 4, 16, 4, 4, 4, 8, 16, 12, 12, 8, 4, 4, 16, 8, 16, 12, 8, 16, 4, 0, 4, 8, 16];
GameBoyCore.prototype.SecondaryTICKTable = [8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 12, 8, 8, 8, 8, 8, 8, 8, 12, 8, 8, 8, 8, 8, 8, 8, 12, 8, 8, 8, 8, 8, 8, 8, 12, 8, 8, 8, 8, 8, 8, 8, 12, 8, 8, 8, 8, 8, 8, 8, 12, 8, 8, 8, 8, 8, 8, 8, 12, 8, 8, 8, 8, 8, 8, 8, 12, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 
8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8];
GameBoyCore.prototype.saveSRAMState = function() {
  if(!this.cBATT || this.MBCRam.length == 0) {
    return[]
  }else {
    return this.fromTypedArray(this.MBCRam)
  }
};
GameBoyCore.prototype.saveRTCState = function() {
  if(!this.cTIMER) {
    return[]
  }else {
    return[this.lastIteration, this.RTCisLatched, this.latchedSeconds, this.latchedMinutes, this.latchedHours, this.latchedLDays, this.latchedHDays, this.RTCSeconds, this.RTCMinutes, this.RTCHours, this.RTCDays, this.RTCDayOverFlow, this.RTCHALT]
  }
};
GameBoyCore.prototype.saveState = function() {
  return[this.fromTypedArray(this.ROM), this.inBootstrap, this.registerA, this.FZero, this.FSubtract, this.FHalfCarry, this.FCarry, this.registerB, this.registerC, this.registerD, this.registerE, this.registersHL, this.stackPointer, this.programCounter, this.halt, this.IME, this.hdmaRunning, this.CPUTicks, this.doubleSpeedShifter, this.fromTypedArray(this.memory), this.fromTypedArray(this.MBCRam), this.fromTypedArray(this.VRAM), this.currVRAMBank, this.fromTypedArray(this.GBCMemory), this.MBC1Mode, 
  this.MBCRAMBanksEnabled, this.currMBCRAMBank, this.currMBCRAMBankPosition, this.cGBC, this.gbcRamBank, this.gbcRamBankPosition, this.ROMBank1offs, this.currentROMBank, this.cartridgeType, this.name, this.gameCode, this.modeSTAT, this.LYCMatchTriggerSTAT, this.mode2TriggerSTAT, this.mode1TriggerSTAT, this.mode0TriggerSTAT, this.LCDisOn, this.gfxWindowCHRBankPosition, this.gfxWindowDisplay, this.gfxSpriteShow, this.gfxSpriteNormalHeight, this.gfxBackgroundCHRBankPosition, this.gfxBackgroundBankOffset, 
  this.TIMAEnabled, this.DIVTicks, this.LCDTicks, this.timerTicks, this.TACClocker, this.serialTimer, this.serialShiftTimer, this.serialShiftTimerAllocated, this.IRQEnableDelay, this.lastIteration, this.cMBC1, this.cMBC2, this.cMBC3, this.cMBC5, this.cMBC7, this.cSRAM, this.cMMMO1, this.cRUMBLE, this.cCamera, this.cTAMA5, this.cHuC3, this.cHuC1, this.drewBlank, this.fromTypedArray(this.frameBuffer), this.bgEnabled, this.BGPriorityEnabled, this.channel1FrequencyTracker, this.channel1FrequencyCounter, 
  this.channel1totalLength, this.channel1envelopeVolume, this.channel1envelopeType, this.channel1envelopeSweeps, this.channel1envelopeSweepsLast, this.channel1consecutive, this.channel1frequency, this.channel1SweepFault, this.channel1ShadowFrequency, this.channel1timeSweep, this.channel1lastTimeSweep, this.channel1numSweep, this.channel1frequencySweepDivider, this.channel1decreaseSweep, this.channel2FrequencyTracker, this.channel2FrequencyCounter, this.channel2totalLength, this.channel2envelopeVolume, 
  this.channel2envelopeType, this.channel2envelopeSweeps, this.channel2envelopeSweepsLast, this.channel2consecutive, this.channel2frequency, this.channel3canPlay, this.channel3totalLength, this.channel3patternType, this.channel3frequency, this.channel3consecutive, this.fromTypedArray(this.channel3PCM), this.channel4FrequencyPeriod, this.channel4lastSampleLookup, this.channel4totalLength, this.channel4envelopeVolume, this.channel4currentVolume, this.channel4envelopeType, this.channel4envelopeSweeps, 
  this.channel4envelopeSweepsLast, this.channel4consecutive, this.channel4BitRange, this.soundMasterEnabled, this.VinLeftChannelMasterVolume, this.VinRightChannelMasterVolume, this.leftChannel1, this.leftChannel2, this.leftChannel3, this.leftChannel4, this.rightChannel1, this.rightChannel2, this.rightChannel3, this.rightChannel4, this.channel1currentSampleLeft, this.channel1currentSampleRight, this.channel2currentSampleLeft, this.channel2currentSampleRight, this.channel3currentSampleLeft, this.channel3currentSampleRight, 
  this.channel4currentSampleLeft, this.channel4currentSampleRight, this.channel1currentSampleLeftSecondary, this.channel1currentSampleRightSecondary, this.channel2currentSampleLeftSecondary, this.channel2currentSampleRightSecondary, this.channel3currentSampleLeftSecondary, this.channel3currentSampleRightSecondary, this.channel4currentSampleLeftSecondary, this.channel4currentSampleRightSecondary, this.channel1currentSampleLeftTrimary, this.channel1currentSampleRightTrimary, this.channel2currentSampleLeftTrimary, 
  this.channel2currentSampleRightTrimary, this.mixerOutputCache, this.channel1DutyTracker, this.channel1CachedDuty, this.channel2DutyTracker, this.channel2CachedDuty, this.channel1Enabled, this.channel2Enabled, this.channel3Enabled, this.channel4Enabled, this.sequencerClocks, this.sequencePosition, this.channel3Counter, this.channel4Counter, this.cachedChannel3Sample, this.cachedChannel4Sample, this.channel3FrequencyPeriod, this.channel3lastSampleLookup, this.actualScanLine, this.lastUnrenderedLine, 
  this.queuedScanLines, this.RTCisLatched, this.latchedSeconds, this.latchedMinutes, this.latchedHours, this.latchedLDays, this.latchedHDays, this.RTCSeconds, this.RTCMinutes, this.RTCHours, this.RTCDays, this.RTCDayOverFlow, this.RTCHALT, this.usedBootROM, this.skipPCIncrement, this.STATTracker, this.gbcRamBankPositionECHO, this.numRAMBanks, this.windowY, this.windowX, this.fromTypedArray(this.gbcOBJRawPalette), this.fromTypedArray(this.gbcBGRawPalette), this.fromTypedArray(this.gbOBJPalette), this.fromTypedArray(this.gbBGPalette), 
  this.fromTypedArray(this.gbcOBJPalette), this.fromTypedArray(this.gbcBGPalette), this.fromTypedArray(this.gbBGColorizedPalette), this.fromTypedArray(this.gbOBJColorizedPalette), this.fromTypedArray(this.cachedBGPaletteConversion), this.fromTypedArray(this.cachedOBJPaletteConversion), this.fromTypedArray(this.BGCHRBank1), this.fromTypedArray(this.BGCHRBank2), this.haltPostClocks, this.interruptsRequested, this.interruptsEnabled, this.remainingClocks, this.colorizedGBPalettes, this.backgroundY, this.backgroundX, 
  this.CPUStopped]
};
GameBoyCore.prototype.returnFromState = function(returnedFrom) {
  var index$$50 = 0;
  var state$$1 = returnedFrom.slice(0);
  this.ROM = this.toTypedArray(state$$1[index$$50++], "uint8");
  this.ROMBankEdge = Math.floor(this.ROM.length / 16384);
  this.inBootstrap = state$$1[index$$50++];
  this.registerA = state$$1[index$$50++];
  this.FZero = state$$1[index$$50++];
  this.FSubtract = state$$1[index$$50++];
  this.FHalfCarry = state$$1[index$$50++];
  this.FCarry = state$$1[index$$50++];
  this.registerB = state$$1[index$$50++];
  this.registerC = state$$1[index$$50++];
  this.registerD = state$$1[index$$50++];
  this.registerE = state$$1[index$$50++];
  this.registersHL = state$$1[index$$50++];
  this.stackPointer = state$$1[index$$50++];
  this.programCounter = state$$1[index$$50++];
  this.halt = state$$1[index$$50++];
  this.IME = state$$1[index$$50++];
  this.hdmaRunning = state$$1[index$$50++];
  this.CPUTicks = state$$1[index$$50++];
  this.doubleSpeedShifter = state$$1[index$$50++];
  this.memory = this.toTypedArray(state$$1[index$$50++], "uint8");
  this.MBCRam = this.toTypedArray(state$$1[index$$50++], "uint8");
  this.VRAM = this.toTypedArray(state$$1[index$$50++], "uint8");
  this.currVRAMBank = state$$1[index$$50++];
  this.GBCMemory = this.toTypedArray(state$$1[index$$50++], "uint8");
  this.MBC1Mode = state$$1[index$$50++];
  this.MBCRAMBanksEnabled = state$$1[index$$50++];
  this.currMBCRAMBank = state$$1[index$$50++];
  this.currMBCRAMBankPosition = state$$1[index$$50++];
  this.cGBC = state$$1[index$$50++];
  this.gbcRamBank = state$$1[index$$50++];
  this.gbcRamBankPosition = state$$1[index$$50++];
  this.ROMBank1offs = state$$1[index$$50++];
  this.currentROMBank = state$$1[index$$50++];
  this.cartridgeType = state$$1[index$$50++];
  this.name = state$$1[index$$50++];
  this.gameCode = state$$1[index$$50++];
  this.modeSTAT = state$$1[index$$50++];
  this.LYCMatchTriggerSTAT = state$$1[index$$50++];
  this.mode2TriggerSTAT = state$$1[index$$50++];
  this.mode1TriggerSTAT = state$$1[index$$50++];
  this.mode0TriggerSTAT = state$$1[index$$50++];
  this.LCDisOn = state$$1[index$$50++];
  this.gfxWindowCHRBankPosition = state$$1[index$$50++];
  this.gfxWindowDisplay = state$$1[index$$50++];
  this.gfxSpriteShow = state$$1[index$$50++];
  this.gfxSpriteNormalHeight = state$$1[index$$50++];
  this.gfxBackgroundCHRBankPosition = state$$1[index$$50++];
  this.gfxBackgroundBankOffset = state$$1[index$$50++];
  this.TIMAEnabled = state$$1[index$$50++];
  this.DIVTicks = state$$1[index$$50++];
  this.LCDTicks = state$$1[index$$50++];
  this.timerTicks = state$$1[index$$50++];
  this.TACClocker = state$$1[index$$50++];
  this.serialTimer = state$$1[index$$50++];
  this.serialShiftTimer = state$$1[index$$50++];
  this.serialShiftTimerAllocated = state$$1[index$$50++];
  this.IRQEnableDelay = state$$1[index$$50++];
  this.lastIteration = state$$1[index$$50++];
  this.cMBC1 = state$$1[index$$50++];
  this.cMBC2 = state$$1[index$$50++];
  this.cMBC3 = state$$1[index$$50++];
  this.cMBC5 = state$$1[index$$50++];
  this.cMBC7 = state$$1[index$$50++];
  this.cSRAM = state$$1[index$$50++];
  this.cMMMO1 = state$$1[index$$50++];
  this.cRUMBLE = state$$1[index$$50++];
  this.cCamera = state$$1[index$$50++];
  this.cTAMA5 = state$$1[index$$50++];
  this.cHuC3 = state$$1[index$$50++];
  this.cHuC1 = state$$1[index$$50++];
  this.drewBlank = state$$1[index$$50++];
  this.frameBuffer = this.toTypedArray(state$$1[index$$50++], "int32");
  this.bgEnabled = state$$1[index$$50++];
  this.BGPriorityEnabled = state$$1[index$$50++];
  this.channel1FrequencyTracker = state$$1[index$$50++];
  this.channel1FrequencyCounter = state$$1[index$$50++];
  this.channel1totalLength = state$$1[index$$50++];
  this.channel1envelopeVolume = state$$1[index$$50++];
  this.channel1envelopeType = state$$1[index$$50++];
  this.channel1envelopeSweeps = state$$1[index$$50++];
  this.channel1envelopeSweepsLast = state$$1[index$$50++];
  this.channel1consecutive = state$$1[index$$50++];
  this.channel1frequency = state$$1[index$$50++];
  this.channel1SweepFault = state$$1[index$$50++];
  this.channel1ShadowFrequency = state$$1[index$$50++];
  this.channel1timeSweep = state$$1[index$$50++];
  this.channel1lastTimeSweep = state$$1[index$$50++];
  this.channel1numSweep = state$$1[index$$50++];
  this.channel1frequencySweepDivider = state$$1[index$$50++];
  this.channel1decreaseSweep = state$$1[index$$50++];
  this.channel2FrequencyTracker = state$$1[index$$50++];
  this.channel2FrequencyCounter = state$$1[index$$50++];
  this.channel2totalLength = state$$1[index$$50++];
  this.channel2envelopeVolume = state$$1[index$$50++];
  this.channel2envelopeType = state$$1[index$$50++];
  this.channel2envelopeSweeps = state$$1[index$$50++];
  this.channel2envelopeSweepsLast = state$$1[index$$50++];
  this.channel2consecutive = state$$1[index$$50++];
  this.channel2frequency = state$$1[index$$50++];
  this.channel3canPlay = state$$1[index$$50++];
  this.channel3totalLength = state$$1[index$$50++];
  this.channel3patternType = state$$1[index$$50++];
  this.channel3frequency = state$$1[index$$50++];
  this.channel3consecutive = state$$1[index$$50++];
  this.channel3PCM = this.toTypedArray(state$$1[index$$50++], "int8");
  this.channel4FrequencyPeriod = state$$1[index$$50++];
  this.channel4lastSampleLookup = state$$1[index$$50++];
  this.channel4totalLength = state$$1[index$$50++];
  this.channel4envelopeVolume = state$$1[index$$50++];
  this.channel4currentVolume = state$$1[index$$50++];
  this.channel4envelopeType = state$$1[index$$50++];
  this.channel4envelopeSweeps = state$$1[index$$50++];
  this.channel4envelopeSweepsLast = state$$1[index$$50++];
  this.channel4consecutive = state$$1[index$$50++];
  this.channel4BitRange = state$$1[index$$50++];
  this.soundMasterEnabled = state$$1[index$$50++];
  this.VinLeftChannelMasterVolume = state$$1[index$$50++];
  this.VinRightChannelMasterVolume = state$$1[index$$50++];
  this.leftChannel1 = state$$1[index$$50++];
  this.leftChannel2 = state$$1[index$$50++];
  this.leftChannel3 = state$$1[index$$50++];
  this.leftChannel4 = state$$1[index$$50++];
  this.rightChannel1 = state$$1[index$$50++];
  this.rightChannel2 = state$$1[index$$50++];
  this.rightChannel3 = state$$1[index$$50++];
  this.rightChannel4 = state$$1[index$$50++];
  this.channel1currentSampleLeft = state$$1[index$$50++];
  this.channel1currentSampleRight = state$$1[index$$50++];
  this.channel2currentSampleLeft = state$$1[index$$50++];
  this.channel2currentSampleRight = state$$1[index$$50++];
  this.channel3currentSampleLeft = state$$1[index$$50++];
  this.channel3currentSampleRight = state$$1[index$$50++];
  this.channel4currentSampleLeft = state$$1[index$$50++];
  this.channel4currentSampleRight = state$$1[index$$50++];
  this.channel1currentSampleLeftSecondary = state$$1[index$$50++];
  this.channel1currentSampleRightSecondary = state$$1[index$$50++];
  this.channel2currentSampleLeftSecondary = state$$1[index$$50++];
  this.channel2currentSampleRightSecondary = state$$1[index$$50++];
  this.channel3currentSampleLeftSecondary = state$$1[index$$50++];
  this.channel3currentSampleRightSecondary = state$$1[index$$50++];
  this.channel4currentSampleLeftSecondary = state$$1[index$$50++];
  this.channel4currentSampleRightSecondary = state$$1[index$$50++];
  this.channel1currentSampleLeftTrimary = state$$1[index$$50++];
  this.channel1currentSampleRightTrimary = state$$1[index$$50++];
  this.channel2currentSampleLeftTrimary = state$$1[index$$50++];
  this.channel2currentSampleRightTrimary = state$$1[index$$50++];
  this.mixerOutputCache = state$$1[index$$50++];
  this.channel1DutyTracker = state$$1[index$$50++];
  this.channel1CachedDuty = state$$1[index$$50++];
  this.channel2DutyTracker = state$$1[index$$50++];
  this.channel2CachedDuty = state$$1[index$$50++];
  this.channel1Enabled = state$$1[index$$50++];
  this.channel2Enabled = state$$1[index$$50++];
  this.channel3Enabled = state$$1[index$$50++];
  this.channel4Enabled = state$$1[index$$50++];
  this.sequencerClocks = state$$1[index$$50++];
  this.sequencePosition = state$$1[index$$50++];
  this.channel3Counter = state$$1[index$$50++];
  this.channel4Counter = state$$1[index$$50++];
  this.cachedChannel3Sample = state$$1[index$$50++];
  this.cachedChannel4Sample = state$$1[index$$50++];
  this.channel3FrequencyPeriod = state$$1[index$$50++];
  this.channel3lastSampleLookup = state$$1[index$$50++];
  this.actualScanLine = state$$1[index$$50++];
  this.lastUnrenderedLine = state$$1[index$$50++];
  this.queuedScanLines = state$$1[index$$50++];
  this.RTCisLatched = state$$1[index$$50++];
  this.latchedSeconds = state$$1[index$$50++];
  this.latchedMinutes = state$$1[index$$50++];
  this.latchedHours = state$$1[index$$50++];
  this.latchedLDays = state$$1[index$$50++];
  this.latchedHDays = state$$1[index$$50++];
  this.RTCSeconds = state$$1[index$$50++];
  this.RTCMinutes = state$$1[index$$50++];
  this.RTCHours = state$$1[index$$50++];
  this.RTCDays = state$$1[index$$50++];
  this.RTCDayOverFlow = state$$1[index$$50++];
  this.RTCHALT = state$$1[index$$50++];
  this.usedBootROM = state$$1[index$$50++];
  this.skipPCIncrement = state$$1[index$$50++];
  this.STATTracker = state$$1[index$$50++];
  this.gbcRamBankPositionECHO = state$$1[index$$50++];
  this.numRAMBanks = state$$1[index$$50++];
  this.windowY = state$$1[index$$50++];
  this.windowX = state$$1[index$$50++];
  this.gbcOBJRawPalette = this.toTypedArray(state$$1[index$$50++], "uint8");
  this.gbcBGRawPalette = this.toTypedArray(state$$1[index$$50++], "uint8");
  this.gbOBJPalette = this.toTypedArray(state$$1[index$$50++], "int32");
  this.gbBGPalette = this.toTypedArray(state$$1[index$$50++], "int32");
  this.gbcOBJPalette = this.toTypedArray(state$$1[index$$50++], "int32");
  this.gbcBGPalette = this.toTypedArray(state$$1[index$$50++], "int32");
  this.gbBGColorizedPalette = this.toTypedArray(state$$1[index$$50++], "int32");
  this.gbOBJColorizedPalette = this.toTypedArray(state$$1[index$$50++], "int32");
  this.cachedBGPaletteConversion = this.toTypedArray(state$$1[index$$50++], "int32");
  this.cachedOBJPaletteConversion = this.toTypedArray(state$$1[index$$50++], "int32");
  this.BGCHRBank1 = this.toTypedArray(state$$1[index$$50++], "uint8");
  this.BGCHRBank2 = this.toTypedArray(state$$1[index$$50++], "uint8");
  this.haltPostClocks = state$$1[index$$50++];
  this.interruptsRequested = state$$1[index$$50++];
  this.interruptsEnabled = state$$1[index$$50++];
  this.checkIRQMatching();
  this.remainingClocks = state$$1[index$$50++];
  this.colorizedGBPalettes = state$$1[index$$50++];
  this.backgroundY = state$$1[index$$50++];
  this.backgroundX = state$$1[index$$50++];
  this.CPUStopped = state$$1[index$$50];
  this.fromSaveState = true;
  this.TICKTable = this.toTypedArray(this.TICKTable, "uint8");
  this.SecondaryTICKTable = this.toTypedArray(this.SecondaryTICKTable, "uint8");
  this.initializeReferencesFromSaveState();
  this.memoryReadJumpCompile();
  this.memoryWriteJumpCompile();
  this.initLCD();
  this.initSound();
  this.noiseSampleTable = this.channel4BitRange == 32767 ? this.LSFR15Table : this.LSFR7Table;
  this.channel4VolumeShifter = this.channel4BitRange == 32767 ? 15 : 7
};
GameBoyCore.prototype.returnFromRTCState = function() {
  if(typeof this.openRTC == "function" && this.cTIMER) {
    var rtcData = this.openRTC(this.name);
    var index$$51 = 0;
    this.lastIteration = rtcData[index$$51++];
    this.RTCisLatched = rtcData[index$$51++];
    this.latchedSeconds = rtcData[index$$51++];
    this.latchedMinutes = rtcData[index$$51++];
    this.latchedHours = rtcData[index$$51++];
    this.latchedLDays = rtcData[index$$51++];
    this.latchedHDays = rtcData[index$$51++];
    this.RTCSeconds = rtcData[index$$51++];
    this.RTCMinutes = rtcData[index$$51++];
    this.RTCHours = rtcData[index$$51++];
    this.RTCDays = rtcData[index$$51++];
    this.RTCDayOverFlow = rtcData[index$$51++];
    this.RTCHALT = rtcData[index$$51]
  }
};
GameBoyCore.prototype.start = function() {
  this.initMemory();
  this.ROMLoad();
  this.initLCD();
  this.initSound();
  this.run()
};
GameBoyCore.prototype.initMemory = function() {
  this.memory = this.getTypedArray(65536, 0, "uint8");
  this.frameBuffer = this.getTypedArray(23040, 16316664, "int32");
  this.BGCHRBank1 = this.getTypedArray(2048, 0, "uint8");
  this.TICKTable = this.toTypedArray(this.TICKTable, "uint8");
  this.SecondaryTICKTable = this.toTypedArray(this.SecondaryTICKTable, "uint8");
  this.channel3PCM = this.getTypedArray(32, 0, "int8")
};
GameBoyCore.prototype.generateCacheArray = function(tileAmount) {
  var tileArray = [];
  var tileNumber = 0;
  for(;tileNumber < tileAmount;) {
    tileArray[tileNumber++] = this.getTypedArray(64, 0, "uint8")
  }
  return tileArray
};
GameBoyCore.prototype.initSkipBootstrap = function() {
  var index$$52 = 255;
  for(;index$$52 >= 0;) {
    if(index$$52 >= 48 && index$$52 < 64) {
      this.memoryWrite(65280 | index$$52, this.ffxxDump[index$$52])
    }else {
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
          this.memoryWrite(65280 | index$$52, this.ffxxDump[index$$52]);
          break;
        default:
          this.memory[65280 | index$$52] = this.ffxxDump[index$$52]
      }
    }
    --index$$52
  }
  if(this.cGBC) {
    this.memory[65388] = 254;
    this.memory[65396] = 254
  }else {
    this.memory[65352] = 255;
    this.memory[65353] = 255;
    this.memory[65388] = 255;
    this.memory[65396] = 255
  }
  cout("Starting without the GBC boot ROM.", 0);
  this.registerA = this.cGBC ? 17 : 1;
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
  this.currentX = 0
};
GameBoyCore.prototype.initBootstrap = function() {
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
  this.memory[65280] = 15
};
GameBoyCore.prototype.ROMLoad = function() {
  this.ROM = [];
  this.usedBootROM = settings[1];
  var maxLength = this.ROMImage.length;
  if(maxLength < 16384) {
    throw new Error("ROM image size too small.");
  }
  this.ROM = this.getTypedArray(maxLength, 0, "uint8");
  var romIndex = 0;
  if(this.usedBootROM) {
    if(!settings[11]) {
      for(;romIndex < 256;++romIndex) {
        this.memory[romIndex] = this.GBCBOOTROM[romIndex];
        this.ROM[romIndex] = this.ROMImage.charCodeAt(romIndex) & 255
      }
      for(;romIndex < 512;++romIndex) {
        this.memory[romIndex] = this.ROM[romIndex] = this.ROMImage.charCodeAt(romIndex) & 255
      }
      for(;romIndex < 2304;++romIndex) {
        this.memory[romIndex] = this.GBCBOOTROM[romIndex - 256];
        this.ROM[romIndex] = this.ROMImage.charCodeAt(romIndex) & 255
      }
      this.usedGBCBootROM = true
    }else {
      for(;romIndex < 256;++romIndex) {
        this.memory[romIndex] = this.GBBOOTROM[romIndex];
        this.ROM[romIndex] = this.ROMImage.charCodeAt(romIndex) & 255
      }
    }
    for(;romIndex < 16384;++romIndex) {
      this.memory[romIndex] = this.ROM[romIndex] = this.ROMImage.charCodeAt(romIndex) & 255
    }
  }else {
    for(;romIndex < 16384;++romIndex) {
      this.memory[romIndex] = this.ROM[romIndex] = this.ROMImage.charCodeAt(romIndex) & 255
    }
  }
  for(;romIndex < maxLength;++romIndex) {
    this.ROM[romIndex] = this.ROMImage.charCodeAt(romIndex) & 255
  }
  this.ROMBankEdge = Math.floor(this.ROM.length / 16384);
  this.interpretCartridge();
  this.checkIRQMatching()
};
GameBoyCore.prototype.getROMImage = function() {
  if(this.ROMImage.length > 0) {
    return this.ROMImage.length
  }
  var length$$17 = this.ROM.length;
  var index$$53 = 0;
  for(;index$$53 < length$$17;index$$53++) {
    this.ROMImage += String.fromCharCode(this.ROM[index$$53])
  }
  return this.ROMImage
};
GameBoyCore.prototype.interpretCartridge = function() {
  var index$$54 = 308;
  for(;index$$54 < 319;index$$54++) {
    if(this.ROMImage.charCodeAt(index$$54) > 0) {
      this.name += this.ROMImage[index$$54]
    }
  }
  index$$54 = 319;
  for(;index$$54 < 323;index$$54++) {
    if(this.ROMImage.charCodeAt(index$$54) > 0) {
      this.gameCode += this.ROMImage[index$$54]
    }
  }
  cout("Game Title: " + this.name + "[" + this.gameCode + "][" + this.ROMImage[323] + "]", 0);
  cout("Game Code: " + this.gameCode, 0);
  this.cartridgeType = this.ROM[327];
  cout("Cartridge type #" + this.cartridgeType, 0);
  var MBCType = "";
  switch(this.cartridgeType) {
    case 0:
      if(!settings[9]) {
        MBCType = "ROM";
        break
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
      pause()
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
      cout("RAM bank amount requested is unknown, will use maximum allowed by specified MBC type.", 0)
  }
  if(!this.usedBootROM) {
    switch(this.ROM[323]) {
      case 0:
        this.cGBC = false;
        cout("Only GB mode detected.", 0);
        break;
      case 50:
        if(!settings[2] && this.name + this.gameCode + this.ROM[323] == "Game and Watch 50") {
          this.cGBC = true;
          cout("Created a boot exception for Game and Watch Gallery 2 (GBC ID byte is wrong on the cartridge).", 1)
        }else {
          this.cGBC = false
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
        cout("Unknown GameBoy game type code #" + this.ROM[323] + ", defaulting to GB mode (Old games don't have a type code).", 1)
    }
    this.inBootstrap = false;
    this.setupRAM();
    this.initSkipBootstrap();
    this.initializeAudioStartState()
  }else {
    this.cGBC = this.usedGBCBootROM;
    this.setupRAM();
    this.initBootstrap()
  }
  this.initializeModeSpecificArrays();
  var cOldLicense = this.ROM[331];
  var cNewLicense = this.ROM[324] & 65280 | this.ROM[325] & 255;
  if(cOldLicense != 51) {
    cout("Old style license code: " + cOldLicense, 0)
  }else {
    cout("New style license code: " + cNewLicense, 0)
  }
  this.ROMImage = ""
};
GameBoyCore.prototype.disableBootROM = function() {
  var index$$55 = 0;
  for(;index$$55 < 256;++index$$55) {
    this.memory[index$$55] = this.ROM[index$$55]
  }
  if(this.usedGBCBootROM) {
    index$$55 = 512;
    for(;index$$55 < 2304;++index$$55) {
      this.memory[index$$55] = this.ROM[index$$55]
    }
    if(!this.cGBC) {
      this.GBCtoGBModeAdjust()
    }else {
      this.recompileBootIOWriteHandling()
    }
  }else {
    this.recompileBootIOWriteHandling()
  }
};
GameBoyCore.prototype.initializeTiming = function() {
  this.baseCPUCyclesPerIteration = 524288 / 125 * settings[6];
  this.CPUCyclesTotalRoundoff = this.baseCPUCyclesPerIteration % 4;
  this.CPUCyclesTotalBase = this.CPUCyclesTotal = this.baseCPUCyclesPerIteration - this.CPUCyclesTotalRoundoff | 0;
  this.CPUCyclesTotalCurrent = 0
};
GameBoyCore.prototype.setupRAM = function() {
  if(this.cMBC2) {
    this.numRAMBanks = 1 / 16
  }else {
    if(this.cMBC1 || this.cRUMBLE || this.cMBC3 || this.cHuC3) {
      this.numRAMBanks = 4
    }else {
      if(this.cMBC5) {
        this.numRAMBanks = 16
      }else {
        if(this.cSRAM) {
          this.numRAMBanks = 1
        }
      }
    }
  }
  if(this.numRAMBanks > 0) {
    if(!this.MBCRAMUtilized()) {
      this.MBCRAMBanksEnabled = true
    }
    var MBCRam = typeof this.openMBC == "function" ? this.openMBC(this.name) : [];
    if(MBCRam.length > 0) {
      this.MBCRam = this.toTypedArray(MBCRam, "uint8")
    }else {
      this.MBCRam = this.getTypedArray(this.numRAMBanks * 8192, 0, "uint8")
    }
  }
  cout("Actual bytes of MBC RAM allocated: " + this.numRAMBanks * 8192, 0);
  this.returnFromRTCState();
  if(this.cGBC) {
    this.VRAM = this.getTypedArray(8192, 0, "uint8");
    this.GBCMemory = this.getTypedArray(28672, 0, "uint8")
  }
  this.memoryReadJumpCompile();
  this.memoryWriteJumpCompile()
};
GameBoyCore.prototype.MBCRAMUtilized = function() {
  return this.cMBC1 || this.cMBC2 || this.cMBC3 || this.cMBC5 || this.cMBC7 || this.cRUMBLE
};
GameBoyCore.prototype.recomputeDimension = function() {
  initNewCanvas();
  this.onscreenWidth = this.canvas.width;
  this.onscreenHeight = this.canvas.height;
  if(GameBoyWindow && GameBoyWindow.mozRequestAnimationFrame) {
    this.canvas.width = this.onscreenWidth = !settings[12] ? 160 : this.canvas.width;
    this.canvas.height = this.onscreenHeight = !settings[12] ? 144 : this.canvas.height
  }else {
    this.onscreenWidth = this.canvas.width;
    this.onscreenHeight = this.canvas.height
  }
  this.offscreenWidth = !settings[12] ? 160 : this.canvas.width;
  this.offscreenHeight = !settings[12] ? 144 : this.canvas.height;
  this.offscreenRGBCount = this.offscreenWidth * this.offscreenHeight * 4
};
GameBoyCore.prototype.initLCD = function() {
  this.recomputeDimension();
  if(this.offscreenRGBCount != 92160) {
    this.compileResizeFrameBufferFunction()
  }else {
    this.resizer = null
  }
  try {
    this.canvasOffscreen = new GameBoyCanvas;
    this.canvasOffscreen.width = this.offscreenWidth;
    this.canvasOffscreen.height = this.offscreenHeight;
    this.drawContextOffscreen = this.canvasOffscreen.getContext("2d");
    this.drawContextOnscreen = this.canvas.getContext("2d");
    try {
      this.canvasBuffer = this.drawContextOffscreen.createImageData(this.offscreenWidth, this.offscreenHeight)
    }catch(error$$20) {
      cout('Falling back to the getImageData initialization (Error "' + error$$20.message + '").', 1);
      this.canvasBuffer = this.drawContextOffscreen.getImageData(0, 0, this.offscreenWidth, this.offscreenHeight)
    }
    var index$$56 = this.offscreenRGBCount;
    for(;index$$56 > 0;) {
      this.canvasBuffer.data[index$$56 -= 4] = 248;
      this.canvasBuffer.data[index$$56 + 1] = 248;
      this.canvasBuffer.data[index$$56 + 2] = 248;
      this.canvasBuffer.data[index$$56 + 3] = 255
    }
    this.graphicsBlit();
    this.canvas.style.visibility = "visible";
    if(this.swizzledFrame == null) {
      this.swizzledFrame = this.getTypedArray(69120, 255, "uint8")
    }
    this.drewFrame = true;
    this.requestDraw()
  }catch(error$$21) {
    throw new Error("HTML5 Canvas support required: " + error$$21.message + "file: " + error$$21.fileName + ", line: " + error$$21.lineNumber);
  }
};
GameBoyCore.prototype.graphicsBlit = function() {
  if(this.offscreenWidth == this.onscreenWidth && this.offscreenHeight == this.onscreenHeight) {
    this.drawContextOnscreen.putImageData(this.canvasBuffer, 0, 0)
  }else {
    this.drawContextOffscreen.putImageData(this.canvasBuffer, 0, 0);
    this.drawContextOnscreen.drawImage(this.canvasOffscreen, 0, 0, this.onscreenWidth, this.onscreenHeight)
  }
};
GameBoyCore.prototype.JoyPadEvent = function(key$$14, down) {
  if(down) {
    this.JoyPad &= 255 ^ 1 << key$$14;
    if(!this.cGBC && (!this.usedBootROM || !this.usedGBCBootROM)) {
      this.interruptsRequested |= 16;
      this.remainingClocks = 0;
      this.checkIRQMatching()
    }
  }else {
    this.JoyPad |= 1 << key$$14
  }
  this.memory[65280] = (this.memory[65280] & 48) + (((this.memory[65280] & 32) == 0 ? this.JoyPad >> 4 : 15) & ((this.memory[65280] & 16) == 0 ? this.JoyPad & 15 : 15));
  this.CPUStopped = false
};
GameBoyCore.prototype.GyroEvent = function(x$$49, y$$32) {
  x$$49 *= -100;
  x$$49 += 2047;
  this.highX = x$$49 >> 8;
  this.lowX = x$$49 & 255;
  y$$32 *= -100;
  y$$32 += 2047;
  this.highY = y$$32 >> 8;
  this.lowY = y$$32 & 255
};
GameBoyCore.prototype.initSound = function() {
  this.sampleSize = 4194304 / 1E3 * settings[6];
  this.machineOut = settings[13];
  if(settings[0]) {
    try {
      var parentObj$$513 = this;
      this.audioHandle = new XAudioServer(2, 4194304 / settings[13], 0, Math.max(this.sampleSize * settings[8] / settings[13], 8192) << 1, null, settings[14]);
      this.initAudioBuffer()
    }catch(error$$22) {
      cout("Audio system cannot run: " + error$$22.message, 2);
      settings[0] = false
    }
  }else {
    if(this.audioHandle) {
      try {
        this.audioHandle.changeVolume(0)
      }catch(error$$23) {
      }
    }
  }
};
GameBoyCore.prototype.changeVolume = function() {
  if(settings[0] && this.audioHandle) {
    try {
      this.audioHandle.changeVolume(settings[14])
    }catch(error$$24) {
    }
  }
};
GameBoyCore.prototype.initAudioBuffer = function() {
  this.audioIndex = 0;
  this.bufferContainAmount = Math.max(this.sampleSize * settings[7] / settings[13], 4096) << 1;
  this.numSamplesTotal = this.sampleSize - this.sampleSize % settings[13] | 0;
  this.currentBuffer = this.getTypedArray(this.numSamplesTotal, 61680, "int32");
  this.secondaryBuffer = this.getTypedArray((this.numSamplesTotal << 1) / settings[13], 0, "float32")
};
GameBoyCore.prototype.intializeWhiteNoise = function() {
  var randomFactor = 1;
  this.LSFR15Table = this.getTypedArray(524288, 0, "int8");
  var LSFR = 32767;
  var LSFRShifted = 16383;
  var index$$57 = 0;
  for(;index$$57 < 32768;++index$$57) {
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
    LSFR = LSFRShifted | ((LSFRShifted ^ LSFR) & 1) << 14
  }
  this.LSFR7Table = this.getTypedArray(2048, 0, "int8");
  LSFR = 127;
  index$$57 = 0;
  for(;index$$57 < 128;++index$$57) {
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
    LSFR = LSFRShifted | ((LSFRShifted ^ LSFR) & 1) << 6
  }
  if(!this.noiseSampleTable && this.memory.length == 65536) {
    this.noiseSampleTable = (this.memory[65314] & 8) == 8 ? this.LSFR7Table : this.LSFR15Table
  }
};
GameBoyCore.prototype.audioUnderrunAdjustment = function() {
  if(settings[0]) {
    var underrunAmount = this.bufferContainAmount - this.audioHandle.remainingBuffer();
    if(underrunAmount > 0) {
      this.CPUCyclesTotalCurrent += (underrunAmount >> 1) * this.machineOut;
      this.recalculateIterationClockLimit()
    }
  }
};
GameBoyCore.prototype.initializeAudioStartState = function() {
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
  this.channel4OutputLevelCache()
};
GameBoyCore.prototype.outputAudio = function() {
  var sampleFactor = 0;
  var dirtySample = 0;
  var averageL = 0;
  var averageR = 0;
  var destinationPosition = 0;
  var divisor1 = settings[13];
  var divisor2 = divisor1 * 240;
  var sourcePosition = 0;
  for(;sourcePosition < this.numSamplesTotal;) {
    sampleFactor = averageL = averageR = 0;
    for(;sampleFactor < divisor1;++sampleFactor) {
      dirtySample = this.currentBuffer[sourcePosition++];
      averageL += dirtySample >> 9;
      averageR += dirtySample & 511
    }
    this.secondaryBuffer[destinationPosition++] = averageL / divisor2 - 1;
    this.secondaryBuffer[destinationPosition++] = averageR / divisor2 - 1
  }
  this.audioHandle.writeAudioNoCallback(this.secondaryBuffer)
};
GameBoyCore.prototype.generateAudio = function(numSamples) {
  if(this.soundMasterEnabled && !this.CPUStopped) {
    var samplesToGenerate = 0;
    for(;numSamples > 0;) {
      samplesToGenerate = numSamples < this.sequencerClocks ? numSamples : this.sequencerClocks;
      this.sequencerClocks -= samplesToGenerate;
      numSamples -= samplesToGenerate;
      for(;--samplesToGenerate > -1;) {
        this.computeAudioChannels();
        this.currentBuffer[this.audioIndex++] = this.mixerOutputCache;
        if(this.audioIndex == this.numSamplesTotal) {
          this.audioIndex = 0;
          this.outputAudio()
        }
      }
      if(this.sequencerClocks == 0) {
        this.audioComputeSequencer();
        this.sequencerClocks = 8192
      }
    }
  }else {
    for(;--numSamples > -1;) {
      this.currentBuffer[this.audioIndex++] = 61680;
      if(this.audioIndex == this.numSamplesTotal) {
        this.audioIndex = 0;
        this.outputAudio()
      }
    }
  }
};
GameBoyCore.prototype.generateAudioFake = function(numSamples$$1) {
  if(this.soundMasterEnabled && !this.CPUStopped) {
    for(;--numSamples$$1 > -1;) {
      this.computeAudioChannels();
      if(--this.sequencerClocks == 0) {
        this.audioComputeSequencer();
        this.sequencerClocks = 8192
      }
    }
  }
};
GameBoyCore.prototype.audioJIT = function() {
  if(settings[0]) {
    this.generateAudio(this.audioTicks)
  }else {
    this.generateAudioFake(this.audioTicks)
  }
  this.audioTicks = 0
};
GameBoyCore.prototype.audioComputeSequencer = function() {
  switch(this.sequencePosition++) {
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
      this.sequencePosition = 0
  }
};
GameBoyCore.prototype.clockAudioLength = function() {
  if(this.channel1totalLength > 1) {
    --this.channel1totalLength
  }else {
    if(this.channel1totalLength == 1) {
      this.channel1totalLength = 0;
      this.channel1EnableCheck();
      this.memory[65318] &= 254
    }
  }
  if(this.channel2totalLength > 1) {
    --this.channel2totalLength
  }else {
    if(this.channel2totalLength == 1) {
      this.channel2totalLength = 0;
      this.channel2EnableCheck();
      this.memory[65318] &= 253
    }
  }
  if(this.channel3totalLength > 1) {
    --this.channel3totalLength
  }else {
    if(this.channel3totalLength == 1) {
      this.channel3totalLength = 0;
      this.channel3EnableCheck();
      this.memory[65318] &= 251
    }
  }
  if(this.channel4totalLength > 1) {
    --this.channel4totalLength
  }else {
    if(this.channel4totalLength == 1) {
      this.channel4totalLength = 0;
      this.channel4EnableCheck();
      this.memory[65318] &= 247
    }
  }
};
GameBoyCore.prototype.clockAudioSweep = function() {
  if(!this.channel1SweepFault && this.channel1timeSweep > 0) {
    if(--this.channel1timeSweep == 0) {
      this.runAudioSweep()
    }
  }
};
GameBoyCore.prototype.runAudioSweep = function() {
  if(this.channel1lastTimeSweep > 0) {
    if(this.channel1frequencySweepDivider > 0) {
      if(this.channel1numSweep > 0) {
        --this.channel1numSweep;
        if(this.channel1decreaseSweep) {
          this.channel1ShadowFrequency -= this.channel1ShadowFrequency >> this.channel1frequencySweepDivider;
          this.channel1frequency = this.channel1ShadowFrequency & 2047;
          this.channel1FrequencyTracker = 2048 - this.channel1frequency << 2
        }else {
          this.channel1ShadowFrequency += this.channel1ShadowFrequency >> this.channel1frequencySweepDivider;
          this.channel1frequency = this.channel1ShadowFrequency;
          if(this.channel1ShadowFrequency <= 2047) {
            this.channel1FrequencyTracker = 2048 - this.channel1frequency << 2;
            if(this.channel1ShadowFrequency + (this.channel1ShadowFrequency >> this.channel1frequencySweepDivider) > 2047) {
              this.channel1SweepFault = true;
              this.channel1EnableCheck();
              this.memory[65318] &= 254
            }
          }else {
            this.channel1frequency &= 2047;
            this.channel1SweepFault = true;
            this.channel1EnableCheck();
            this.memory[65318] &= 254
          }
        }
      }
      this.channel1timeSweep = this.channel1lastTimeSweep
    }else {
      this.channel1SweepFault = true;
      this.channel1EnableCheck()
    }
  }
};
GameBoyCore.prototype.clockAudioEnvelope = function() {
  if(this.channel1envelopeSweepsLast > -1) {
    if(this.channel1envelopeSweeps > 0) {
      --this.channel1envelopeSweeps
    }else {
      if(!this.channel1envelopeType) {
        if(this.channel1envelopeVolume > 0) {
          --this.channel1envelopeVolume;
          this.channel1envelopeSweeps = this.channel1envelopeSweepsLast;
          this.channel1OutputLevelCache()
        }else {
          this.channel1envelopeSweepsLast = -1
        }
      }else {
        if(this.channel1envelopeVolume < 15) {
          ++this.channel1envelopeVolume;
          this.channel1envelopeSweeps = this.channel1envelopeSweepsLast;
          this.channel1OutputLevelCache()
        }else {
          this.channel1envelopeSweepsLast = -1
        }
      }
    }
  }
  if(this.channel2envelopeSweepsLast > -1) {
    if(this.channel2envelopeSweeps > 0) {
      --this.channel2envelopeSweeps
    }else {
      if(!this.channel2envelopeType) {
        if(this.channel2envelopeVolume > 0) {
          --this.channel2envelopeVolume;
          this.channel2envelopeSweeps = this.channel2envelopeSweepsLast;
          this.channel2OutputLevelCache()
        }else {
          this.channel2envelopeSweepsLast = -1
        }
      }else {
        if(this.channel2envelopeVolume < 15) {
          ++this.channel2envelopeVolume;
          this.channel2envelopeSweeps = this.channel2envelopeSweepsLast;
          this.channel2OutputLevelCache()
        }else {
          this.channel2envelopeSweepsLast = -1
        }
      }
    }
  }
  if(this.channel4envelopeSweepsLast > -1) {
    if(this.channel4envelopeSweeps > 0) {
      --this.channel4envelopeSweeps
    }else {
      if(!this.channel4envelopeType) {
        if(this.channel4envelopeVolume > 0) {
          this.channel4currentVolume = --this.channel4envelopeVolume << this.channel4VolumeShifter;
          this.channel4envelopeSweeps = this.channel4envelopeSweepsLast;
          this.channel4UpdateCache()
        }else {
          this.channel4envelopeSweepsLast = -1
        }
      }else {
        if(this.channel4envelopeVolume < 15) {
          this.channel4currentVolume = ++this.channel4envelopeVolume << this.channel4VolumeShifter;
          this.channel4envelopeSweeps = this.channel4envelopeSweepsLast;
          this.channel4UpdateCache()
        }else {
          this.channel4envelopeSweepsLast = -1
        }
      }
    }
  }
};
GameBoyCore.prototype.computeAudioChannels = function() {
  if(--this.channel1FrequencyCounter == 0) {
    this.channel1FrequencyCounter = this.channel1FrequencyTracker;
    this.channel1DutyTracker = this.channel1DutyTracker + 1 & 7;
    this.channel1OutputLevelTrimaryCache()
  }
  if(--this.channel2FrequencyCounter == 0) {
    this.channel2FrequencyCounter = this.channel2FrequencyTracker;
    this.channel2DutyTracker = this.channel2DutyTracker + 1 & 7;
    this.channel2OutputLevelTrimaryCache()
  }
  if(--this.channel3Counter == 0) {
    if(this.channel3canPlay) {
      this.channel3lastSampleLookup = this.channel3lastSampleLookup + 1 & 31
    }
    this.channel3Counter = this.channel3FrequencyPeriod;
    this.channel3UpdateCache()
  }
  if(--this.channel4Counter == 0) {
    this.channel4lastSampleLookup = this.channel4lastSampleLookup + 1 & this.channel4BitRange;
    this.channel4Counter = this.channel4FrequencyPeriod;
    this.channel4UpdateCache()
  }
};
GameBoyCore.prototype.channel1EnableCheck = function() {
  this.channel1Enabled = (this.channel1consecutive || this.channel1totalLength > 0) && !this.channel1SweepFault && this.channel1canPlay;
  this.channel1OutputLevelSecondaryCache()
};
GameBoyCore.prototype.channel1VolumeEnableCheck = function() {
  this.channel1canPlay = this.memory[65298] > 7;
  this.channel1EnableCheck();
  this.channel1OutputLevelSecondaryCache()
};
GameBoyCore.prototype.channel1OutputLevelCache = function() {
  this.channel1currentSampleLeft = this.leftChannel1 ? this.channel1envelopeVolume : 0;
  this.channel1currentSampleRight = this.rightChannel1 ? this.channel1envelopeVolume : 0;
  this.channel1OutputLevelSecondaryCache()
};
GameBoyCore.prototype.channel1OutputLevelSecondaryCache = function() {
  if(this.channel1Enabled) {
    this.channel1currentSampleLeftSecondary = this.channel1currentSampleLeft;
    this.channel1currentSampleRightSecondary = this.channel1currentSampleRight
  }else {
    this.channel1currentSampleLeftSecondary = 0;
    this.channel1currentSampleRightSecondary = 0
  }
  this.channel1OutputLevelTrimaryCache()
};
GameBoyCore.prototype.channel1OutputLevelTrimaryCache = function() {
  if(this.channel1CachedDuty[this.channel1DutyTracker]) {
    this.channel1currentSampleLeftTrimary = this.channel1currentSampleLeftSecondary;
    this.channel1currentSampleRightTrimary = this.channel1currentSampleRightSecondary
  }else {
    this.channel1currentSampleLeftTrimary = 0;
    this.channel1currentSampleRightTrimary = 0
  }
  this.mixerOutputLevelCache()
};
GameBoyCore.prototype.channel2EnableCheck = function() {
  this.channel2Enabled = (this.channel2consecutive || this.channel2totalLength > 0) && this.channel2canPlay;
  this.channel2OutputLevelSecondaryCache()
};
GameBoyCore.prototype.channel2VolumeEnableCheck = function() {
  this.channel2canPlay = this.memory[65303] > 7;
  this.channel2EnableCheck();
  this.channel2OutputLevelSecondaryCache()
};
GameBoyCore.prototype.channel2OutputLevelCache = function() {
  this.channel2currentSampleLeft = this.leftChannel2 ? this.channel2envelopeVolume : 0;
  this.channel2currentSampleRight = this.rightChannel2 ? this.channel2envelopeVolume : 0;
  this.channel2OutputLevelSecondaryCache()
};
GameBoyCore.prototype.channel2OutputLevelSecondaryCache = function() {
  if(this.channel2Enabled) {
    this.channel2currentSampleLeftSecondary = this.channel2currentSampleLeft;
    this.channel2currentSampleRightSecondary = this.channel2currentSampleRight
  }else {
    this.channel2currentSampleLeftSecondary = 0;
    this.channel2currentSampleRightSecondary = 0
  }
  this.channel2OutputLevelTrimaryCache()
};
GameBoyCore.prototype.channel2OutputLevelTrimaryCache = function() {
  if(this.channel2CachedDuty[this.channel2DutyTracker]) {
    this.channel2currentSampleLeftTrimary = this.channel2currentSampleLeftSecondary;
    this.channel2currentSampleRightTrimary = this.channel2currentSampleRightSecondary
  }else {
    this.channel2currentSampleLeftTrimary = 0;
    this.channel2currentSampleRightTrimary = 0
  }
  this.mixerOutputLevelCache()
};
GameBoyCore.prototype.channel3EnableCheck = function() {
  this.channel3Enabled = this.channel3consecutive || this.channel3totalLength > 0;
  this.channel3OutputLevelSecondaryCache()
};
GameBoyCore.prototype.channel3OutputLevelCache = function() {
  this.channel3currentSampleLeft = this.leftChannel3 ? this.cachedChannel3Sample : 0;
  this.channel3currentSampleRight = this.rightChannel3 ? this.cachedChannel3Sample : 0;
  this.channel3OutputLevelSecondaryCache()
};
GameBoyCore.prototype.channel3OutputLevelSecondaryCache = function() {
  if(this.channel3Enabled) {
    this.channel3currentSampleLeftSecondary = this.channel3currentSampleLeft;
    this.channel3currentSampleRightSecondary = this.channel3currentSampleRight
  }else {
    this.channel3currentSampleLeftSecondary = 0;
    this.channel3currentSampleRightSecondary = 0
  }
  this.mixerOutputLevelCache()
};
GameBoyCore.prototype.channel4EnableCheck = function() {
  this.channel4Enabled = (this.channel4consecutive || this.channel4totalLength > 0) && this.channel4canPlay;
  this.channel4OutputLevelSecondaryCache()
};
GameBoyCore.prototype.channel4VolumeEnableCheck = function() {
  this.channel4canPlay = this.memory[65313] > 7;
  this.channel4EnableCheck();
  this.channel4OutputLevelSecondaryCache()
};
GameBoyCore.prototype.channel4OutputLevelCache = function() {
  this.channel4currentSampleLeft = this.leftChannel4 ? this.cachedChannel4Sample : 0;
  this.channel4currentSampleRight = this.rightChannel4 ? this.cachedChannel4Sample : 0;
  this.channel4OutputLevelSecondaryCache()
};
GameBoyCore.prototype.channel4OutputLevelSecondaryCache = function() {
  if(this.channel4Enabled) {
    this.channel4currentSampleLeftSecondary = this.channel4currentSampleLeft;
    this.channel4currentSampleRightSecondary = this.channel4currentSampleRight
  }else {
    this.channel4currentSampleLeftSecondary = 0;
    this.channel4currentSampleRightSecondary = 0
  }
  this.mixerOutputLevelCache()
};
GameBoyCore.prototype.mixerOutputLevelCache = function() {
  this.mixerOutputCache = ((this.channel1currentSampleLeftTrimary + this.channel2currentSampleLeftTrimary + this.channel3currentSampleLeftSecondary + this.channel4currentSampleLeftSecondary) * this.VinLeftChannelMasterVolume << 9) + (this.channel1currentSampleRightTrimary + this.channel2currentSampleRightTrimary + this.channel3currentSampleRightSecondary + this.channel4currentSampleRightSecondary) * this.VinRightChannelMasterVolume
};
GameBoyCore.prototype.channel3UpdateCache = function() {
  this.cachedChannel3Sample = this.channel3PCM[this.channel3lastSampleLookup] >> this.channel3patternType;
  this.channel3OutputLevelCache()
};
GameBoyCore.prototype.channel3WriteRAM = function(address, data$$23) {
  if(this.channel3canPlay) {
    this.audioJIT()
  }
  this.memory[65328 | address] = data$$23;
  address <<= 1;
  this.channel3PCM[address] = data$$23 >> 4;
  this.channel3PCM[address | 1] = data$$23 & 15
};
GameBoyCore.prototype.channel4UpdateCache = function() {
  this.cachedChannel4Sample = this.noiseSampleTable[this.channel4currentVolume | this.channel4lastSampleLookup];
  this.channel4OutputLevelCache()
};
GameBoyCore.prototype.run = function() {
  if((this.stopEmulator & 2) == 0) {
    if((this.stopEmulator & 1) == 1) {
      if(!this.CPUStopped) {
        this.stopEmulator = 0;
        this.drewFrame = false;
        this.audioUnderrunAdjustment();
        this.clockUpdate();
        if(!this.halt) {
          this.executeIteration()
        }else {
          this.CPUTicks = 0;
          this.calculateHALTPeriod();
          if(this.halt) {
            this.updateCoreFull()
          }else {
            this.executeIteration()
          }
        }
        this.requestDraw()
      }else {
        this.audioUnderrunAdjustment();
        this.audioTicks += this.CPUCyclesTotal;
        this.audioJIT();
        this.stopEmulator |= 1
      }
    }else {
      cout("Iterator restarted a faulted core.", 2);
      pause()
    }
  }
};
GameBoyCore.prototype.executeIteration = function() {
  var opcodeToExecute = 0;
  var timedTicks = 0;
  for(;this.stopEmulator == 0;) {
    switch(this.IRQEnableDelay) {
      case 1:
        this.IME = true;
        this.checkIRQMatching();
      case 2:
        --this.IRQEnableDelay
    }
    if(this.IRQLineMatched > 0) {
      this.launchIRQ()
    }
    opcodeToExecute = this.memoryReader[this.programCounter](this, this.programCounter);
    this.programCounter = this.programCounter + 1 & 65535;
    if(this.skipPCIncrement) {
      this.programCounter = this.programCounter - 1 & 65535;
      this.skipPCIncrement = false
    }
    this.CPUTicks = this.TICKTable[opcodeToExecute];
    this.OPCODE[opcodeToExecute](this);
    this.LCDTicks += this.CPUTicks >> this.doubleSpeedShifter;
    this.LCDCONTROL[this.actualScanLine](this);
    timedTicks = this.CPUTicks >> this.doubleSpeedShifter;
    this.audioTicks += timedTicks;
    this.emulatorTicks += timedTicks;
    this.DIVTicks += this.CPUTicks;
    if(this.TIMAEnabled) {
      this.timerTicks += this.CPUTicks;
      for(;this.timerTicks >= this.TACClocker;) {
        this.timerTicks -= this.TACClocker;
        if(++this.memory[65285] == 256) {
          this.memory[65285] = this.memory[65286];
          this.interruptsRequested |= 4;
          this.checkIRQMatching()
        }
      }
    }
    if(this.serialTimer > 0) {
      this.serialTimer -= this.CPUTicks;
      if(this.serialTimer <= 0) {
        this.interruptsRequested |= 8;
        this.checkIRQMatching()
      }
      this.serialShiftTimer -= this.CPUTicks;
      if(this.serialShiftTimer <= 0) {
        this.serialShiftTimer = this.serialShiftTimerAllocated;
        this.memory[65281] = this.memory[65281] << 1 & 254 | 1
      }
    }
    if(this.emulatorTicks >= this.CPUCyclesTotal) {
      this.iterationEndRoutine()
    }
    this.instructions += 1;
    if(this.instructions > this.totalInstructions) {
      this.iterationEndRoutine();
      this.stopEmulator |= 2;
      checkFinalState()
    }
  }
};
GameBoyCore.prototype.iterationEndRoutine = function() {
  if((this.stopEmulator & 1) == 0) {
    this.audioJIT();
    this.memory[65284] = this.memory[65284] + (this.DIVTicks >> 8) & 255;
    this.DIVTicks &= 255;
    this.stopEmulator |= 1;
    this.emulatorTicks -= this.CPUCyclesTotal;
    this.CPUCyclesTotalCurrent += this.CPUCyclesTotalRoundoff;
    this.recalculateIterationClockLimit()
  }
};
GameBoyCore.prototype.handleSTOP = function() {
  this.CPUStopped = true;
  this.iterationEndRoutine();
  if(this.emulatorTicks < 0) {
    this.audioTicks -= this.emulatorTicks;
    this.audioJIT()
  }
};
GameBoyCore.prototype.recalculateIterationClockLimit = function() {
  var endModulus = this.CPUCyclesTotalCurrent % 4;
  this.CPUCyclesTotal = this.CPUCyclesTotalBase + this.CPUCyclesTotalCurrent - endModulus;
  this.CPUCyclesTotalCurrent = endModulus
};
GameBoyCore.prototype.scanLineMode2 = function() {
  if(this.STATTracker != 1) {
    if(this.mode2TriggerSTAT) {
      this.interruptsRequested |= 2;
      this.checkIRQMatching()
    }
    this.STATTracker = 1;
    this.modeSTAT = 2
  }
};
GameBoyCore.prototype.scanLineMode3 = function() {
  if(this.modeSTAT != 3) {
    if(this.STATTracker == 0 && this.mode2TriggerSTAT) {
      this.interruptsRequested |= 2;
      this.checkIRQMatching()
    }
    this.STATTracker = 1;
    this.modeSTAT = 3
  }
};
GameBoyCore.prototype.scanLineMode0 = function() {
  if(this.modeSTAT != 0) {
    if(this.STATTracker != 2) {
      if(this.STATTracker == 0) {
        if(this.mode2TriggerSTAT) {
          this.interruptsRequested |= 2;
          this.checkIRQMatching()
        }
        this.modeSTAT = 3
      }
      this.incrementScanLineQueue();
      this.updateSpriteCount(this.actualScanLine);
      this.STATTracker = 2
    }
    if(this.LCDTicks >= this.spriteCount) {
      if(this.hdmaRunning) {
        this.executeHDMA()
      }
      if(this.mode0TriggerSTAT) {
        this.interruptsRequested |= 2;
        this.checkIRQMatching()
      }
      this.STATTracker = 3;
      this.modeSTAT = 0
    }
  }
};
GameBoyCore.prototype.clocksUntilLYCMatch = function() {
  if(this.memory[65349] != 0) {
    if(this.memory[65349] > this.actualScanLine) {
      return 456 * (this.memory[65349] - this.actualScanLine)
    }
    return 456 * (154 - this.actualScanLine + this.memory[65349])
  }
  return 456 * (this.actualScanLine == 153 && this.memory[65348] == 0 ? 154 : 153 - this.actualScanLine) + 8
};
GameBoyCore.prototype.clocksUntilMode0 = function() {
  switch(this.modeSTAT) {
    case 0:
      if(this.actualScanLine == 143) {
        this.updateSpriteCount(0);
        return this.spriteCount + 5016
      }
      this.updateSpriteCount(this.actualScanLine + 1);
      return this.spriteCount + 456;
    case 2:
    ;
    case 3:
      this.updateSpriteCount(this.actualScanLine);
      return this.spriteCount;
    case 1:
      this.updateSpriteCount(0);
      return this.spriteCount + 456 * (154 - this.actualScanLine)
  }
};
GameBoyCore.prototype.updateSpriteCount = function(line$$2) {
  this.spriteCount = 252;
  if(this.cGBC && this.gfxSpriteShow) {
    var lineAdjusted = line$$2 + 16;
    var yoffset$$3 = 0;
    var yCap = this.gfxSpriteNormalHeight ? 8 : 16;
    var OAMAddress = 65024;
    for(;OAMAddress < 65184 && this.spriteCount < 312;OAMAddress += 4) {
      yoffset$$3 = lineAdjusted - this.memory[OAMAddress];
      if(yoffset$$3 > -1 && yoffset$$3 < yCap) {
        this.spriteCount += 6
      }
    }
  }
};
GameBoyCore.prototype.matchLYC = function() {
  if(this.memory[65348] == this.memory[65349]) {
    this.memory[65345] |= 4;
    if(this.LYCMatchTriggerSTAT) {
      this.interruptsRequested |= 2;
      this.checkIRQMatching()
    }
  }else {
    this.memory[65345] &= 123
  }
};
GameBoyCore.prototype.updateCore = function() {
  this.LCDTicks += this.CPUTicks >> this.doubleSpeedShifter;
  this.LCDCONTROL[this.actualScanLine](this);
  var timedTicks$$1 = this.CPUTicks >> this.doubleSpeedShifter;
  this.audioTicks += timedTicks$$1;
  this.emulatorTicks += timedTicks$$1;
  this.DIVTicks += this.CPUTicks;
  if(this.TIMAEnabled) {
    this.timerTicks += this.CPUTicks;
    for(;this.timerTicks >= this.TACClocker;) {
      this.timerTicks -= this.TACClocker;
      if(++this.memory[65285] == 256) {
        this.memory[65285] = this.memory[65286];
        this.interruptsRequested |= 4;
        this.checkIRQMatching()
      }
    }
  }
  if(this.serialTimer > 0) {
    this.serialTimer -= this.CPUTicks;
    if(this.serialTimer <= 0) {
      this.interruptsRequested |= 8;
      this.checkIRQMatching()
    }
    this.serialShiftTimer -= this.CPUTicks;
    if(this.serialShiftTimer <= 0) {
      this.serialShiftTimer = this.serialShiftTimerAllocated;
      this.memory[65281] = this.memory[65281] << 1 & 254 | 1
    }
  }
};
GameBoyCore.prototype.updateCoreFull = function() {
  this.updateCore();
  if(this.emulatorTicks >= this.CPUCyclesTotal) {
    this.iterationEndRoutine()
  }
};
GameBoyCore.prototype.initializeLCDController = function() {
  var line$$3 = 0;
  for(;line$$3 < 154;) {
    if(line$$3 < 143) {
      this.LINECONTROL[line$$3] = function(parentObj$$514) {
        if(parentObj$$514.LCDTicks < 80) {
          parentObj$$514.scanLineMode2()
        }else {
          if(parentObj$$514.LCDTicks < 252) {
            parentObj$$514.scanLineMode3()
          }else {
            if(parentObj$$514.LCDTicks < 456) {
              parentObj$$514.scanLineMode0()
            }else {
              parentObj$$514.LCDTicks -= 456;
              if(parentObj$$514.STATTracker != 3) {
                if(parentObj$$514.STATTracker != 2) {
                  if(parentObj$$514.STATTracker == 0 && parentObj$$514.mode2TriggerSTAT) {
                    parentObj$$514.interruptsRequested |= 2
                  }
                  parentObj$$514.incrementScanLineQueue()
                }
                if(parentObj$$514.hdmaRunning) {
                  parentObj$$514.executeHDMA()
                }
                if(parentObj$$514.mode0TriggerSTAT) {
                  parentObj$$514.interruptsRequested |= 2
                }
              }
              parentObj$$514.actualScanLine = ++parentObj$$514.memory[65348];
              if(parentObj$$514.actualScanLine == parentObj$$514.memory[65349]) {
                parentObj$$514.memory[65345] |= 4;
                if(parentObj$$514.LYCMatchTriggerSTAT) {
                  parentObj$$514.interruptsRequested |= 2
                }
              }else {
                parentObj$$514.memory[65345] &= 123
              }
              parentObj$$514.checkIRQMatching();
              parentObj$$514.STATTracker = 0;
              parentObj$$514.modeSTAT = 2;
              parentObj$$514.LINECONTROL[parentObj$$514.actualScanLine](parentObj$$514)
            }
          }
        }
      }
    }else {
      if(line$$3 == 143) {
        this.LINECONTROL[143] = function(parentObj$$515) {
          if(parentObj$$515.LCDTicks < 80) {
            parentObj$$515.scanLineMode2()
          }else {
            if(parentObj$$515.LCDTicks < 252) {
              parentObj$$515.scanLineMode3()
            }else {
              if(parentObj$$515.LCDTicks < 456) {
                parentObj$$515.scanLineMode0()
              }else {
                parentObj$$515.LCDTicks -= 456;
                if(parentObj$$515.STATTracker != 3) {
                  if(parentObj$$515.STATTracker != 2) {
                    if(parentObj$$515.STATTracker == 0 && parentObj$$515.mode2TriggerSTAT) {
                      parentObj$$515.interruptsRequested |= 2
                    }
                    parentObj$$515.incrementScanLineQueue()
                  }
                  if(parentObj$$515.hdmaRunning) {
                    parentObj$$515.executeHDMA()
                  }
                  if(parentObj$$515.mode0TriggerSTAT) {
                    parentObj$$515.interruptsRequested |= 2
                  }
                }
                parentObj$$515.actualScanLine = parentObj$$515.memory[65348] = 144;
                if(parentObj$$515.memory[65349] == 144) {
                  parentObj$$515.memory[65345] |= 4;
                  if(parentObj$$515.LYCMatchTriggerSTAT) {
                    parentObj$$515.interruptsRequested |= 2
                  }
                }else {
                  parentObj$$515.memory[65345] &= 123
                }
                parentObj$$515.STATTracker = 0;
                parentObj$$515.modeSTAT = 1;
                parentObj$$515.interruptsRequested |= parentObj$$515.mode1TriggerSTAT ? 3 : 1;
                parentObj$$515.checkIRQMatching();
                if(parentObj$$515.drewBlank == 0) {
                  if(parentObj$$515.totalLinesPassed < 144 || parentObj$$515.totalLinesPassed == 144 && parentObj$$515.midScanlineOffset > -1) {
                    parentObj$$515.graphicsJITVBlank();
                    parentObj$$515.prepareFrame()
                  }
                }else {
                  --parentObj$$515.drewBlank
                }
                parentObj$$515.LINECONTROL[144](parentObj$$515)
              }
            }
          }
        }
      }else {
        if(line$$3 < 153) {
          this.LINECONTROL[line$$3] = function(parentObj$$516) {
            if(parentObj$$516.LCDTicks >= 456) {
              parentObj$$516.LCDTicks -= 456;
              parentObj$$516.actualScanLine = ++parentObj$$516.memory[65348];
              if(parentObj$$516.actualScanLine == parentObj$$516.memory[65349]) {
                parentObj$$516.memory[65345] |= 4;
                if(parentObj$$516.LYCMatchTriggerSTAT) {
                  parentObj$$516.interruptsRequested |= 2;
                  parentObj$$516.checkIRQMatching()
                }
              }else {
                parentObj$$516.memory[65345] &= 123
              }
              parentObj$$516.LINECONTROL[parentObj$$516.actualScanLine](parentObj$$516)
            }
          }
        }else {
          this.LINECONTROL[153] = function(parentObj$$517) {
            if(parentObj$$517.LCDTicks >= 8) {
              if(parentObj$$517.STATTracker != 4 && parentObj$$517.memory[65348] == 153) {
                parentObj$$517.memory[65348] = 0;
                if(parentObj$$517.memory[65349] == 0) {
                  parentObj$$517.memory[65345] |= 4;
                  if(parentObj$$517.LYCMatchTriggerSTAT) {
                    parentObj$$517.interruptsRequested |= 2;
                    parentObj$$517.checkIRQMatching()
                  }
                }else {
                  parentObj$$517.memory[65345] &= 123
                }
                parentObj$$517.STATTracker = 4
              }
              if(parentObj$$517.LCDTicks >= 456) {
                parentObj$$517.LCDTicks -= 456;
                parentObj$$517.STATTracker = parentObj$$517.actualScanLine = 0;
                parentObj$$517.LINECONTROL[0](parentObj$$517)
              }
            }
          }
        }
      }
    }
    ++line$$3
  }
};
GameBoyCore.prototype.DisplayShowOff = function() {
  if(this.drewBlank == 0) {
    this.clearFrameBuffer();
    this.drewFrame = true
  }
  this.drewBlank = 2
};
GameBoyCore.prototype.executeHDMA = function() {
  this.DMAWrite(1);
  if(this.halt) {
    if(this.LCDTicks - this.spriteCount < (4 >> this.doubleSpeedShifter | 32)) {
      this.CPUTicks = 4 + (32 + this.spriteCount << this.doubleSpeedShifter);
      this.LCDTicks = this.spriteCount + (4 >> this.doubleSpeedShifter | 32)
    }
  }else {
    this.LCDTicks += 4 >> this.doubleSpeedShifter | 32
  }
  if(this.memory[65365] == 0) {
    this.hdmaRunning = false;
    this.memory[65365] = 255
  }else {
    --this.memory[65365]
  }
};
GameBoyCore.prototype.clockUpdate = function() {
  if(this.cTIMER) {
    var dateObj = new_Date();
    var newTime = dateObj.getTime();
    var timeElapsed = newTime - this.lastIteration;
    this.lastIteration = newTime;
    if(this.cTIMER && !this.RTCHALT) {
      this.RTCSeconds += timeElapsed / 1E3;
      for(;this.RTCSeconds >= 60;) {
        this.RTCSeconds -= 60;
        ++this.RTCMinutes;
        if(this.RTCMinutes >= 60) {
          this.RTCMinutes -= 60;
          ++this.RTCHours;
          if(this.RTCHours >= 24) {
            this.RTCHours -= 24;
            ++this.RTCDays;
            if(this.RTCDays >= 512) {
              this.RTCDays -= 512;
              this.RTCDayOverFlow = true
            }
          }
        }
      }
    }
  }
};
GameBoyCore.prototype.prepareFrame = function() {
  this.swizzleFrameBuffer();
  this.drewFrame = true
};
GameBoyCore.prototype.requestDraw = function() {
  if(this.drewFrame) {
    this.dispatchDraw()
  }
};
GameBoyCore.prototype.dispatchDraw = function() {
  var canvasRGBALength = this.offscreenRGBCount;
  if(canvasRGBALength > 0) {
    var frameBuffer = canvasRGBALength == 92160 ? this.swizzledFrame : this.resizeFrameBuffer();
    var canvasData = this.canvasBuffer.data;
    var bufferIndex = 0;
    var canvasIndex = 0;
    for(;canvasIndex < canvasRGBALength;++canvasIndex) {
      canvasData[canvasIndex++] = frameBuffer[bufferIndex++];
      canvasData[canvasIndex++] = frameBuffer[bufferIndex++];
      canvasData[canvasIndex++] = frameBuffer[bufferIndex++]
    }
    this.graphicsBlit()
  }
};
GameBoyCore.prototype.swizzleFrameBuffer = function() {
  var frameBuffer$$1 = this.frameBuffer;
  var swizzledFrame = this.swizzledFrame;
  var bufferIndex$$1 = 0;
  var canvasIndex$$1 = 0;
  for(;canvasIndex$$1 < 69120;) {
    swizzledFrame[canvasIndex$$1++] = frameBuffer$$1[bufferIndex$$1] >> 16 & 255;
    swizzledFrame[canvasIndex$$1++] = frameBuffer$$1[bufferIndex$$1] >> 8 & 255;
    swizzledFrame[canvasIndex$$1++] = frameBuffer$$1[bufferIndex$$1++] & 255
  }
};
GameBoyCore.prototype.clearFrameBuffer = function() {
  var bufferIndex$$2 = 0;
  var frameBuffer$$2 = this.swizzledFrame;
  if(this.cGBC || this.colorizedGBPalettes) {
    for(;bufferIndex$$2 < 69120;) {
      frameBuffer$$2[bufferIndex$$2++] = 248
    }
  }else {
    for(;bufferIndex$$2 < 69120;) {
      frameBuffer$$2[bufferIndex$$2++] = 239;
      frameBuffer$$2[bufferIndex$$2++] = 255;
      frameBuffer$$2[bufferIndex$$2++] = 222
    }
  }
};
GameBoyCore.prototype.resizeFrameBuffer = function() {
  return this.resizer.resize(this.swizzledFrame)
};
GameBoyCore.prototype.compileResizeFrameBufferFunction = function() {
  if(this.offscreenRGBCount > 0) {
    this.resizer = new Resize(160, 144, this.offscreenWidth, this.offscreenHeight, false, true)
  }
};
GameBoyCore.prototype.renderScanLine = function(scanlineToRender) {
  this.pixelStart = scanlineToRender * 160;
  if(this.bgEnabled) {
    this.pixelEnd = 160;
    this.BGLayerRender(scanlineToRender);
    this.WindowLayerRender(scanlineToRender)
  }else {
    var pixelLine = (scanlineToRender + 1) * 160;
    var defaultColor = this.cGBC || this.colorizedGBPalettes ? 16316664 : 15728606;
    var pixelPosition = scanlineToRender * 160 + this.currentX;
    for(;pixelPosition < pixelLine;pixelPosition++) {
      this.frameBuffer[pixelPosition] = defaultColor
    }
  }
  this.SpriteLayerRender(scanlineToRender);
  this.currentX = 0;
  this.midScanlineOffset = -1
};
GameBoyCore.prototype.renderMidScanLine = function() {
  if(this.actualScanLine < 144 && this.modeSTAT == 3) {
    if(this.midScanlineOffset == -1) {
      this.midScanlineOffset = this.backgroundX & 7
    }
    if(this.LCDTicks >= 82) {
      this.pixelEnd = this.LCDTicks - 74;
      this.pixelEnd = Math.min(this.pixelEnd - this.midScanlineOffset - this.pixelEnd % 8, 160);
      if(this.bgEnabled) {
        this.pixelStart = this.lastUnrenderedLine * 160;
        this.BGLayerRender(this.lastUnrenderedLine);
        this.WindowLayerRender(this.lastUnrenderedLine)
      }else {
        var pixelLine$$1 = this.lastUnrenderedLine * 160 + this.pixelEnd;
        var defaultColor$$1 = this.cGBC || this.colorizedGBPalettes ? 16316664 : 15728606;
        var pixelPosition$$1 = this.lastUnrenderedLine * 160 + this.currentX;
        for(;pixelPosition$$1 < pixelLine$$1;pixelPosition$$1++) {
          this.frameBuffer[pixelPosition$$1] = defaultColor$$1
        }
      }
      this.currentX = this.pixelEnd
    }
  }
};
GameBoyCore.prototype.initializeModeSpecificArrays = function() {
  this.LCDCONTROL = this.LCDisOn ? this.LINECONTROL : this.DISPLAYOFFCONTROL;
  if(this.cGBC) {
    this.gbcOBJRawPalette = this.getTypedArray(64, 0, "uint8");
    this.gbcBGRawPalette = this.getTypedArray(64, 0, "uint8");
    this.gbcOBJPalette = this.getTypedArray(32, 16777216, "int32");
    this.gbcBGPalette = this.getTypedArray(64, 0, "int32");
    this.BGCHRBank2 = this.getTypedArray(2048, 0, "uint8");
    this.BGCHRCurrentBank = this.currVRAMBank > 0 ? this.BGCHRBank2 : this.BGCHRBank1;
    this.tileCache = this.generateCacheArray(3968)
  }else {
    this.gbOBJPalette = this.getTypedArray(8, 0, "int32");
    this.gbBGPalette = this.getTypedArray(4, 0, "int32");
    this.BGPalette = this.gbBGPalette;
    this.OBJPalette = this.gbOBJPalette;
    this.tileCache = this.generateCacheArray(1792);
    this.sortBuffer = this.getTypedArray(256, 0, "uint8");
    this.OAMAddressCache = this.getTypedArray(10, 0, "int32")
  }
  this.renderPathBuild()
};
GameBoyCore.prototype.GBCtoGBModeAdjust = function() {
  cout("Stepping down from GBC mode.", 0);
  this.VRAM = this.GBCMemory = this.BGCHRCurrentBank = this.BGCHRBank2 = null;
  this.tileCache.length = 1792;
  if(settings[4]) {
    this.gbBGColorizedPalette = this.getTypedArray(4, 0, "int32");
    this.gbOBJColorizedPalette = this.getTypedArray(8, 0, "int32");
    this.cachedBGPaletteConversion = this.getTypedArray(4, 0, "int32");
    this.cachedOBJPaletteConversion = this.getTypedArray(8, 0, "int32");
    this.BGPalette = this.gbBGColorizedPalette;
    this.OBJPalette = this.gbOBJColorizedPalette;
    this.gbOBJPalette = this.gbBGPalette = null;
    this.getGBCColor()
  }else {
    this.gbOBJPalette = this.getTypedArray(8, 0, "int32");
    this.gbBGPalette = this.getTypedArray(4, 0, "int32");
    this.BGPalette = this.gbBGPalette;
    this.OBJPalette = this.gbOBJPalette
  }
  this.sortBuffer = this.getTypedArray(256, 0, "uint8");
  this.OAMAddressCache = this.getTypedArray(10, 0, "int32");
  this.renderPathBuild();
  this.memoryReadJumpCompile();
  this.memoryWriteJumpCompile()
};
GameBoyCore.prototype.renderPathBuild = function() {
  if(!this.cGBC) {
    this.BGLayerRender = this.BGGBLayerRender;
    this.WindowLayerRender = this.WindowGBLayerRender;
    this.SpriteLayerRender = this.SpriteGBLayerRender
  }else {
    this.priorityFlaggingPathRebuild();
    this.SpriteLayerRender = this.SpriteGBCLayerRender
  }
};
GameBoyCore.prototype.priorityFlaggingPathRebuild = function() {
  if(this.BGPriorityEnabled) {
    this.BGLayerRender = this.BGGBCLayerRender;
    this.WindowLayerRender = this.WindowGBCLayerRender
  }else {
    this.BGLayerRender = this.BGGBCLayerRenderNoPriorityFlagging;
    this.WindowLayerRender = this.WindowGBCLayerRenderNoPriorityFlagging
  }
};
GameBoyCore.prototype.initializeReferencesFromSaveState = function() {
  this.LCDCONTROL = this.LCDisOn ? this.LINECONTROL : this.DISPLAYOFFCONTROL;
  var tileIndex = 0;
  if(!this.cGBC) {
    if(this.colorizedGBPalettes) {
      this.BGPalette = this.gbBGColorizedPalette;
      this.OBJPalette = this.gbOBJColorizedPalette;
      this.updateGBBGPalette = this.updateGBColorizedBGPalette;
      this.updateGBOBJPalette = this.updateGBColorizedOBJPalette
    }else {
      this.BGPalette = this.gbBGPalette;
      this.OBJPalette = this.gbOBJPalette
    }
    this.tileCache = this.generateCacheArray(1792);
    tileIndex = 32768;
    for(;tileIndex < 36864;tileIndex += 2) {
      this.generateGBOAMTileLine(tileIndex)
    }
    tileIndex = 36864;
    for(;tileIndex < 38912;tileIndex += 2) {
      this.generateGBTileLine(tileIndex)
    }
    this.sortBuffer = this.getTypedArray(256, 0, "uint8");
    this.OAMAddressCache = this.getTypedArray(10, 0, "int32")
  }else {
    this.BGCHRCurrentBank = this.currVRAMBank > 0 ? this.BGCHRBank2 : this.BGCHRBank1;
    this.tileCache = this.generateCacheArray(3968);
    for(;tileIndex < 6144;tileIndex += 16) {
      this.generateGBCTileBank1(tileIndex);
      this.generateGBCTileBank2(tileIndex)
    }
  }
  this.renderPathBuild()
};
GameBoyCore.prototype.RGBTint = function(value$$30) {
  var r = value$$30 & 31;
  var g = value$$30 >> 5 & 31;
  var b = value$$30 >> 10 & 31;
  return r * 13 + g * 2 + b >> 1 << 16 | g * 3 + b << 9 | r * 3 + g * 2 + b * 11 >> 1
};
GameBoyCore.prototype.getGBCColor = function() {
  var counter = 0;
  for(;counter < 4;counter++) {
    var adjustedIndex = counter << 1;
    this.cachedBGPaletteConversion[counter] = this.RGBTint(this.gbcBGRawPalette[adjustedIndex | 1] << 8 | this.gbcBGRawPalette[adjustedIndex]);
    this.cachedOBJPaletteConversion[counter] = this.RGBTint(this.gbcOBJRawPalette[adjustedIndex | 1] << 8 | this.gbcOBJRawPalette[adjustedIndex])
  }
  counter = 4;
  for(;counter < 8;counter++) {
    adjustedIndex = counter << 1;
    this.cachedOBJPaletteConversion[counter] = this.RGBTint(this.gbcOBJRawPalette[adjustedIndex | 1] << 8 | this.gbcOBJRawPalette[adjustedIndex])
  }
  this.updateGBBGPalette = this.updateGBColorizedBGPalette;
  this.updateGBOBJPalette = this.updateGBColorizedOBJPalette;
  this.updateGBBGPalette(this.memory[65351]);
  this.updateGBOBJPalette(0, this.memory[65352]);
  this.updateGBOBJPalette(1, this.memory[65353]);
  this.colorizedGBPalettes = true
};
GameBoyCore.prototype.updateGBRegularBGPalette = function(data$$24) {
  this.gbBGPalette[0] = this.colors[data$$24 & 3] | 33554432;
  this.gbBGPalette[1] = this.colors[data$$24 >> 2 & 3];
  this.gbBGPalette[2] = this.colors[data$$24 >> 4 & 3];
  this.gbBGPalette[3] = this.colors[data$$24 >> 6]
};
GameBoyCore.prototype.updateGBColorizedBGPalette = function(data$$25) {
  this.gbBGColorizedPalette[0] = this.cachedBGPaletteConversion[data$$25 & 3] | 33554432;
  this.gbBGColorizedPalette[1] = this.cachedBGPaletteConversion[data$$25 >> 2 & 3];
  this.gbBGColorizedPalette[2] = this.cachedBGPaletteConversion[data$$25 >> 4 & 3];
  this.gbBGColorizedPalette[3] = this.cachedBGPaletteConversion[data$$25 >> 6]
};
GameBoyCore.prototype.updateGBRegularOBJPalette = function(index$$58, data$$26) {
  this.gbOBJPalette[index$$58 | 1] = this.colors[data$$26 >> 2 & 3];
  this.gbOBJPalette[index$$58 | 2] = this.colors[data$$26 >> 4 & 3];
  this.gbOBJPalette[index$$58 | 3] = this.colors[data$$26 >> 6]
};
GameBoyCore.prototype.updateGBColorizedOBJPalette = function(index$$59, data$$27) {
  this.gbOBJColorizedPalette[index$$59 | 1] = this.cachedOBJPaletteConversion[index$$59 | data$$27 >> 2 & 3];
  this.gbOBJColorizedPalette[index$$59 | 2] = this.cachedOBJPaletteConversion[index$$59 | data$$27 >> 4 & 3];
  this.gbOBJColorizedPalette[index$$59 | 3] = this.cachedOBJPaletteConversion[index$$59 | data$$27 >> 6]
};
GameBoyCore.prototype.updateGBCBGPalette = function(index$$60, data$$28) {
  if(this.gbcBGRawPalette[index$$60] != data$$28) {
    this.midScanLineJIT();
    this.gbcBGRawPalette[index$$60] = data$$28;
    if((index$$60 & 6) == 0) {
      data$$28 = 33554432 | this.RGBTint(this.gbcBGRawPalette[index$$60 | 1] << 8 | this.gbcBGRawPalette[index$$60 & 62]);
      index$$60 >>= 1;
      this.gbcBGPalette[index$$60] = data$$28;
      this.gbcBGPalette[32 | index$$60] = 16777216 | data$$28
    }else {
      data$$28 = this.RGBTint(this.gbcBGRawPalette[index$$60 | 1] << 8 | this.gbcBGRawPalette[index$$60 & 62]);
      index$$60 >>= 1;
      this.gbcBGPalette[index$$60] = data$$28;
      this.gbcBGPalette[32 | index$$60] = 16777216 | data$$28
    }
  }
};
GameBoyCore.prototype.updateGBCOBJPalette = function(index$$61, data$$29) {
  if(this.gbcOBJRawPalette[index$$61] != data$$29) {
    this.gbcOBJRawPalette[index$$61] = data$$29;
    if((index$$61 & 6) > 0) {
      this.midScanLineJIT();
      this.gbcOBJPalette[index$$61 >> 1] = 16777216 | this.RGBTint(this.gbcOBJRawPalette[index$$61 | 1] << 8 | this.gbcOBJRawPalette[index$$61 & 62])
    }
  }
};
GameBoyCore.prototype.BGGBLayerRender = function(scanlineToRender$$1) {
  var scrollYAdjusted = this.backgroundY + scanlineToRender$$1 & 255;
  var tileYLine = (scrollYAdjusted & 7) << 3;
  var tileYDown = this.gfxBackgroundCHRBankPosition | (scrollYAdjusted & 248) << 2;
  var scrollXAdjusted = this.backgroundX + this.currentX & 255;
  var pixelPosition$$2 = this.pixelStart + this.currentX;
  var pixelPositionEnd = this.pixelStart + (this.gfxWindowDisplay && scanlineToRender$$1 - this.windowY >= 0 ? Math.min(Math.max(this.windowX, 0) + this.currentX, this.pixelEnd) : this.pixelEnd);
  var tileNumber$$1 = tileYDown + (scrollXAdjusted >> 3);
  var chrCode = this.BGCHRBank1[tileNumber$$1];
  if(chrCode < this.gfxBackgroundBankOffset) {
    chrCode |= 256
  }
  var tile = this.tileCache[chrCode];
  var texel = scrollXAdjusted & 7;
  for(;texel < 8 && pixelPosition$$2 < pixelPositionEnd && scrollXAdjusted < 256;++scrollXAdjusted) {
    this.frameBuffer[pixelPosition$$2++] = this.BGPalette[tile[tileYLine | texel++]]
  }
  var scrollXAdjustedAligned = Math.min(pixelPositionEnd - pixelPosition$$2, 256 - scrollXAdjusted) >> 3;
  scrollXAdjusted += scrollXAdjustedAligned << 3;
  scrollXAdjustedAligned += tileNumber$$1;
  for(;tileNumber$$1 < scrollXAdjustedAligned;) {
    chrCode = this.BGCHRBank1[++tileNumber$$1];
    if(chrCode < this.gfxBackgroundBankOffset) {
      chrCode |= 256
    }
    tile = this.tileCache[chrCode];
    texel = tileYLine;
    this.frameBuffer[pixelPosition$$2++] = this.BGPalette[tile[texel++]];
    this.frameBuffer[pixelPosition$$2++] = this.BGPalette[tile[texel++]];
    this.frameBuffer[pixelPosition$$2++] = this.BGPalette[tile[texel++]];
    this.frameBuffer[pixelPosition$$2++] = this.BGPalette[tile[texel++]];
    this.frameBuffer[pixelPosition$$2++] = this.BGPalette[tile[texel++]];
    this.frameBuffer[pixelPosition$$2++] = this.BGPalette[tile[texel++]];
    this.frameBuffer[pixelPosition$$2++] = this.BGPalette[tile[texel++]];
    this.frameBuffer[pixelPosition$$2++] = this.BGPalette[tile[texel]]
  }
  if(pixelPosition$$2 < pixelPositionEnd) {
    if(scrollXAdjusted < 256) {
      chrCode = this.BGCHRBank1[++tileNumber$$1];
      if(chrCode < this.gfxBackgroundBankOffset) {
        chrCode |= 256
      }
      tile = this.tileCache[chrCode];
      texel = tileYLine - 1;
      for(;pixelPosition$$2 < pixelPositionEnd && scrollXAdjusted < 256;++scrollXAdjusted) {
        this.frameBuffer[pixelPosition$$2++] = this.BGPalette[tile[++texel]]
      }
    }
    scrollXAdjustedAligned = (pixelPositionEnd - pixelPosition$$2 >> 3) + tileYDown;
    for(;tileYDown < scrollXAdjustedAligned;) {
      chrCode = this.BGCHRBank1[tileYDown++];
      if(chrCode < this.gfxBackgroundBankOffset) {
        chrCode |= 256
      }
      tile = this.tileCache[chrCode];
      texel = tileYLine;
      this.frameBuffer[pixelPosition$$2++] = this.BGPalette[tile[texel++]];
      this.frameBuffer[pixelPosition$$2++] = this.BGPalette[tile[texel++]];
      this.frameBuffer[pixelPosition$$2++] = this.BGPalette[tile[texel++]];
      this.frameBuffer[pixelPosition$$2++] = this.BGPalette[tile[texel++]];
      this.frameBuffer[pixelPosition$$2++] = this.BGPalette[tile[texel++]];
      this.frameBuffer[pixelPosition$$2++] = this.BGPalette[tile[texel++]];
      this.frameBuffer[pixelPosition$$2++] = this.BGPalette[tile[texel++]];
      this.frameBuffer[pixelPosition$$2++] = this.BGPalette[tile[texel]]
    }
    if(pixelPosition$$2 < pixelPositionEnd) {
      chrCode = this.BGCHRBank1[tileYDown];
      if(chrCode < this.gfxBackgroundBankOffset) {
        chrCode |= 256
      }
      tile = this.tileCache[chrCode];
      switch(pixelPositionEnd - pixelPosition$$2) {
        case 7:
          this.frameBuffer[pixelPosition$$2 + 6] = this.BGPalette[tile[tileYLine | 6]];
        case 6:
          this.frameBuffer[pixelPosition$$2 + 5] = this.BGPalette[tile[tileYLine | 5]];
        case 5:
          this.frameBuffer[pixelPosition$$2 + 4] = this.BGPalette[tile[tileYLine | 4]];
        case 4:
          this.frameBuffer[pixelPosition$$2 + 3] = this.BGPalette[tile[tileYLine | 3]];
        case 3:
          this.frameBuffer[pixelPosition$$2 + 2] = this.BGPalette[tile[tileYLine | 2]];
        case 2:
          this.frameBuffer[pixelPosition$$2 + 1] = this.BGPalette[tile[tileYLine | 1]];
        case 1:
          this.frameBuffer[pixelPosition$$2] = this.BGPalette[tile[tileYLine]]
      }
    }
  }
};
GameBoyCore.prototype.BGGBCLayerRender = function(scanlineToRender$$2) {
  var scrollYAdjusted$$1 = this.backgroundY + scanlineToRender$$2 & 255;
  var tileYLine$$1 = (scrollYAdjusted$$1 & 7) << 3;
  var tileYDown$$1 = this.gfxBackgroundCHRBankPosition | (scrollYAdjusted$$1 & 248) << 2;
  var scrollXAdjusted$$1 = this.backgroundX + this.currentX & 255;
  var pixelPosition$$3 = this.pixelStart + this.currentX;
  var pixelPositionEnd$$1 = this.pixelStart + (this.gfxWindowDisplay && scanlineToRender$$2 - this.windowY >= 0 ? Math.min(Math.max(this.windowX, 0) + this.currentX, this.pixelEnd) : this.pixelEnd);
  var tileNumber$$2 = tileYDown$$1 + (scrollXAdjusted$$1 >> 3);
  var chrCode$$1 = this.BGCHRBank1[tileNumber$$2];
  if(chrCode$$1 < this.gfxBackgroundBankOffset) {
    chrCode$$1 |= 256
  }
  var attrCode = this.BGCHRBank2[tileNumber$$2];
  var tile$$1 = this.tileCache[(attrCode & 8) << 8 | (attrCode & 96) << 4 | chrCode$$1];
  var palette = (attrCode & 7) << 2 | (attrCode & 128) >> 2;
  var texel$$1 = scrollXAdjusted$$1 & 7;
  for(;texel$$1 < 8 && pixelPosition$$3 < pixelPositionEnd$$1 && scrollXAdjusted$$1 < 256;++scrollXAdjusted$$1) {
    this.frameBuffer[pixelPosition$$3++] = this.gbcBGPalette[palette | tile$$1[tileYLine$$1 | texel$$1++]]
  }
  var scrollXAdjustedAligned$$1 = Math.min(pixelPositionEnd$$1 - pixelPosition$$3, 256 - scrollXAdjusted$$1) >> 3;
  scrollXAdjusted$$1 += scrollXAdjustedAligned$$1 << 3;
  scrollXAdjustedAligned$$1 += tileNumber$$2;
  for(;tileNumber$$2 < scrollXAdjustedAligned$$1;) {
    chrCode$$1 = this.BGCHRBank1[++tileNumber$$2];
    if(chrCode$$1 < this.gfxBackgroundBankOffset) {
      chrCode$$1 |= 256
    }
    attrCode = this.BGCHRBank2[tileNumber$$2];
    tile$$1 = this.tileCache[(attrCode & 8) << 8 | (attrCode & 96) << 4 | chrCode$$1];
    palette = (attrCode & 7) << 2 | (attrCode & 128) >> 2;
    texel$$1 = tileYLine$$1;
    this.frameBuffer[pixelPosition$$3++] = this.gbcBGPalette[palette | tile$$1[texel$$1++]];
    this.frameBuffer[pixelPosition$$3++] = this.gbcBGPalette[palette | tile$$1[texel$$1++]];
    this.frameBuffer[pixelPosition$$3++] = this.gbcBGPalette[palette | tile$$1[texel$$1++]];
    this.frameBuffer[pixelPosition$$3++] = this.gbcBGPalette[palette | tile$$1[texel$$1++]];
    this.frameBuffer[pixelPosition$$3++] = this.gbcBGPalette[palette | tile$$1[texel$$1++]];
    this.frameBuffer[pixelPosition$$3++] = this.gbcBGPalette[palette | tile$$1[texel$$1++]];
    this.frameBuffer[pixelPosition$$3++] = this.gbcBGPalette[palette | tile$$1[texel$$1++]];
    this.frameBuffer[pixelPosition$$3++] = this.gbcBGPalette[palette | tile$$1[texel$$1]]
  }
  if(pixelPosition$$3 < pixelPositionEnd$$1) {
    if(scrollXAdjusted$$1 < 256) {
      chrCode$$1 = this.BGCHRBank1[++tileNumber$$2];
      if(chrCode$$1 < this.gfxBackgroundBankOffset) {
        chrCode$$1 |= 256
      }
      attrCode = this.BGCHRBank2[tileNumber$$2];
      tile$$1 = this.tileCache[(attrCode & 8) << 8 | (attrCode & 96) << 4 | chrCode$$1];
      palette = (attrCode & 7) << 2 | (attrCode & 128) >> 2;
      texel$$1 = tileYLine$$1 - 1;
      for(;pixelPosition$$3 < pixelPositionEnd$$1 && scrollXAdjusted$$1 < 256;++scrollXAdjusted$$1) {
        this.frameBuffer[pixelPosition$$3++] = this.gbcBGPalette[palette | tile$$1[++texel$$1]]
      }
    }
    scrollXAdjustedAligned$$1 = (pixelPositionEnd$$1 - pixelPosition$$3 >> 3) + tileYDown$$1;
    for(;tileYDown$$1 < scrollXAdjustedAligned$$1;) {
      chrCode$$1 = this.BGCHRBank1[tileYDown$$1];
      if(chrCode$$1 < this.gfxBackgroundBankOffset) {
        chrCode$$1 |= 256
      }
      attrCode = this.BGCHRBank2[tileYDown$$1++];
      tile$$1 = this.tileCache[(attrCode & 8) << 8 | (attrCode & 96) << 4 | chrCode$$1];
      palette = (attrCode & 7) << 2 | (attrCode & 128) >> 2;
      texel$$1 = tileYLine$$1;
      this.frameBuffer[pixelPosition$$3++] = this.gbcBGPalette[palette | tile$$1[texel$$1++]];
      this.frameBuffer[pixelPosition$$3++] = this.gbcBGPalette[palette | tile$$1[texel$$1++]];
      this.frameBuffer[pixelPosition$$3++] = this.gbcBGPalette[palette | tile$$1[texel$$1++]];
      this.frameBuffer[pixelPosition$$3++] = this.gbcBGPalette[palette | tile$$1[texel$$1++]];
      this.frameBuffer[pixelPosition$$3++] = this.gbcBGPalette[palette | tile$$1[texel$$1++]];
      this.frameBuffer[pixelPosition$$3++] = this.gbcBGPalette[palette | tile$$1[texel$$1++]];
      this.frameBuffer[pixelPosition$$3++] = this.gbcBGPalette[palette | tile$$1[texel$$1++]];
      this.frameBuffer[pixelPosition$$3++] = this.gbcBGPalette[palette | tile$$1[texel$$1]]
    }
    if(pixelPosition$$3 < pixelPositionEnd$$1) {
      chrCode$$1 = this.BGCHRBank1[tileYDown$$1];
      if(chrCode$$1 < this.gfxBackgroundBankOffset) {
        chrCode$$1 |= 256
      }
      attrCode = this.BGCHRBank2[tileYDown$$1];
      tile$$1 = this.tileCache[(attrCode & 8) << 8 | (attrCode & 96) << 4 | chrCode$$1];
      palette = (attrCode & 7) << 2 | (attrCode & 128) >> 2;
      switch(pixelPositionEnd$$1 - pixelPosition$$3) {
        case 7:
          this.frameBuffer[pixelPosition$$3 + 6] = this.gbcBGPalette[palette | tile$$1[tileYLine$$1 | 6]];
        case 6:
          this.frameBuffer[pixelPosition$$3 + 5] = this.gbcBGPalette[palette | tile$$1[tileYLine$$1 | 5]];
        case 5:
          this.frameBuffer[pixelPosition$$3 + 4] = this.gbcBGPalette[palette | tile$$1[tileYLine$$1 | 4]];
        case 4:
          this.frameBuffer[pixelPosition$$3 + 3] = this.gbcBGPalette[palette | tile$$1[tileYLine$$1 | 3]];
        case 3:
          this.frameBuffer[pixelPosition$$3 + 2] = this.gbcBGPalette[palette | tile$$1[tileYLine$$1 | 2]];
        case 2:
          this.frameBuffer[pixelPosition$$3 + 1] = this.gbcBGPalette[palette | tile$$1[tileYLine$$1 | 1]];
        case 1:
          this.frameBuffer[pixelPosition$$3] = this.gbcBGPalette[palette | tile$$1[tileYLine$$1]]
      }
    }
  }
};
GameBoyCore.prototype.BGGBCLayerRenderNoPriorityFlagging = function(scanlineToRender$$3) {
  var scrollYAdjusted$$2 = this.backgroundY + scanlineToRender$$3 & 255;
  var tileYLine$$2 = (scrollYAdjusted$$2 & 7) << 3;
  var tileYDown$$2 = this.gfxBackgroundCHRBankPosition | (scrollYAdjusted$$2 & 248) << 2;
  var scrollXAdjusted$$2 = this.backgroundX + this.currentX & 255;
  var pixelPosition$$4 = this.pixelStart + this.currentX;
  var pixelPositionEnd$$2 = this.pixelStart + (this.gfxWindowDisplay && scanlineToRender$$3 - this.windowY >= 0 ? Math.min(Math.max(this.windowX, 0) + this.currentX, this.pixelEnd) : this.pixelEnd);
  var tileNumber$$3 = tileYDown$$2 + (scrollXAdjusted$$2 >> 3);
  var chrCode$$2 = this.BGCHRBank1[tileNumber$$3];
  if(chrCode$$2 < this.gfxBackgroundBankOffset) {
    chrCode$$2 |= 256
  }
  var attrCode$$1 = this.BGCHRBank2[tileNumber$$3];
  var tile$$2 = this.tileCache[(attrCode$$1 & 8) << 8 | (attrCode$$1 & 96) << 4 | chrCode$$2];
  var palette$$1 = (attrCode$$1 & 7) << 2;
  var texel$$2 = scrollXAdjusted$$2 & 7;
  for(;texel$$2 < 8 && pixelPosition$$4 < pixelPositionEnd$$2 && scrollXAdjusted$$2 < 256;++scrollXAdjusted$$2) {
    this.frameBuffer[pixelPosition$$4++] = this.gbcBGPalette[palette$$1 | tile$$2[tileYLine$$2 | texel$$2++]]
  }
  var scrollXAdjustedAligned$$2 = Math.min(pixelPositionEnd$$2 - pixelPosition$$4, 256 - scrollXAdjusted$$2) >> 3;
  scrollXAdjusted$$2 += scrollXAdjustedAligned$$2 << 3;
  scrollXAdjustedAligned$$2 += tileNumber$$3;
  for(;tileNumber$$3 < scrollXAdjustedAligned$$2;) {
    chrCode$$2 = this.BGCHRBank1[++tileNumber$$3];
    if(chrCode$$2 < this.gfxBackgroundBankOffset) {
      chrCode$$2 |= 256
    }
    attrCode$$1 = this.BGCHRBank2[tileNumber$$3];
    tile$$2 = this.tileCache[(attrCode$$1 & 8) << 8 | (attrCode$$1 & 96) << 4 | chrCode$$2];
    palette$$1 = (attrCode$$1 & 7) << 2;
    texel$$2 = tileYLine$$2;
    this.frameBuffer[pixelPosition$$4++] = this.gbcBGPalette[palette$$1 | tile$$2[texel$$2++]];
    this.frameBuffer[pixelPosition$$4++] = this.gbcBGPalette[palette$$1 | tile$$2[texel$$2++]];
    this.frameBuffer[pixelPosition$$4++] = this.gbcBGPalette[palette$$1 | tile$$2[texel$$2++]];
    this.frameBuffer[pixelPosition$$4++] = this.gbcBGPalette[palette$$1 | tile$$2[texel$$2++]];
    this.frameBuffer[pixelPosition$$4++] = this.gbcBGPalette[palette$$1 | tile$$2[texel$$2++]];
    this.frameBuffer[pixelPosition$$4++] = this.gbcBGPalette[palette$$1 | tile$$2[texel$$2++]];
    this.frameBuffer[pixelPosition$$4++] = this.gbcBGPalette[palette$$1 | tile$$2[texel$$2++]];
    this.frameBuffer[pixelPosition$$4++] = this.gbcBGPalette[palette$$1 | tile$$2[texel$$2]]
  }
  if(pixelPosition$$4 < pixelPositionEnd$$2) {
    if(scrollXAdjusted$$2 < 256) {
      chrCode$$2 = this.BGCHRBank1[++tileNumber$$3];
      if(chrCode$$2 < this.gfxBackgroundBankOffset) {
        chrCode$$2 |= 256
      }
      attrCode$$1 = this.BGCHRBank2[tileNumber$$3];
      tile$$2 = this.tileCache[(attrCode$$1 & 8) << 8 | (attrCode$$1 & 96) << 4 | chrCode$$2];
      palette$$1 = (attrCode$$1 & 7) << 2;
      texel$$2 = tileYLine$$2 - 1;
      for(;pixelPosition$$4 < pixelPositionEnd$$2 && scrollXAdjusted$$2 < 256;++scrollXAdjusted$$2) {
        this.frameBuffer[pixelPosition$$4++] = this.gbcBGPalette[palette$$1 | tile$$2[++texel$$2]]
      }
    }
    scrollXAdjustedAligned$$2 = (pixelPositionEnd$$2 - pixelPosition$$4 >> 3) + tileYDown$$2;
    for(;tileYDown$$2 < scrollXAdjustedAligned$$2;) {
      chrCode$$2 = this.BGCHRBank1[tileYDown$$2];
      if(chrCode$$2 < this.gfxBackgroundBankOffset) {
        chrCode$$2 |= 256
      }
      attrCode$$1 = this.BGCHRBank2[tileYDown$$2++];
      tile$$2 = this.tileCache[(attrCode$$1 & 8) << 8 | (attrCode$$1 & 96) << 4 | chrCode$$2];
      palette$$1 = (attrCode$$1 & 7) << 2;
      texel$$2 = tileYLine$$2;
      this.frameBuffer[pixelPosition$$4++] = this.gbcBGPalette[palette$$1 | tile$$2[texel$$2++]];
      this.frameBuffer[pixelPosition$$4++] = this.gbcBGPalette[palette$$1 | tile$$2[texel$$2++]];
      this.frameBuffer[pixelPosition$$4++] = this.gbcBGPalette[palette$$1 | tile$$2[texel$$2++]];
      this.frameBuffer[pixelPosition$$4++] = this.gbcBGPalette[palette$$1 | tile$$2[texel$$2++]];
      this.frameBuffer[pixelPosition$$4++] = this.gbcBGPalette[palette$$1 | tile$$2[texel$$2++]];
      this.frameBuffer[pixelPosition$$4++] = this.gbcBGPalette[palette$$1 | tile$$2[texel$$2++]];
      this.frameBuffer[pixelPosition$$4++] = this.gbcBGPalette[palette$$1 | tile$$2[texel$$2++]];
      this.frameBuffer[pixelPosition$$4++] = this.gbcBGPalette[palette$$1 | tile$$2[texel$$2]]
    }
    if(pixelPosition$$4 < pixelPositionEnd$$2) {
      chrCode$$2 = this.BGCHRBank1[tileYDown$$2];
      if(chrCode$$2 < this.gfxBackgroundBankOffset) {
        chrCode$$2 |= 256
      }
      attrCode$$1 = this.BGCHRBank2[tileYDown$$2];
      tile$$2 = this.tileCache[(attrCode$$1 & 8) << 8 | (attrCode$$1 & 96) << 4 | chrCode$$2];
      palette$$1 = (attrCode$$1 & 7) << 2;
      switch(pixelPositionEnd$$2 - pixelPosition$$4) {
        case 7:
          this.frameBuffer[pixelPosition$$4 + 6] = this.gbcBGPalette[palette$$1 | tile$$2[tileYLine$$2 | 6]];
        case 6:
          this.frameBuffer[pixelPosition$$4 + 5] = this.gbcBGPalette[palette$$1 | tile$$2[tileYLine$$2 | 5]];
        case 5:
          this.frameBuffer[pixelPosition$$4 + 4] = this.gbcBGPalette[palette$$1 | tile$$2[tileYLine$$2 | 4]];
        case 4:
          this.frameBuffer[pixelPosition$$4 + 3] = this.gbcBGPalette[palette$$1 | tile$$2[tileYLine$$2 | 3]];
        case 3:
          this.frameBuffer[pixelPosition$$4 + 2] = this.gbcBGPalette[palette$$1 | tile$$2[tileYLine$$2 | 2]];
        case 2:
          this.frameBuffer[pixelPosition$$4 + 1] = this.gbcBGPalette[palette$$1 | tile$$2[tileYLine$$2 | 1]];
        case 1:
          this.frameBuffer[pixelPosition$$4] = this.gbcBGPalette[palette$$1 | tile$$2[tileYLine$$2]]
      }
    }
  }
};
GameBoyCore.prototype.WindowGBLayerRender = function(scanlineToRender$$4) {
  if(this.gfxWindowDisplay) {
    var scrollYAdjusted$$3 = scanlineToRender$$4 - this.windowY;
    if(scrollYAdjusted$$3 >= 0) {
      var scrollXRangeAdjusted = this.windowX > 0 ? this.windowX + this.currentX : this.currentX;
      var pixelPosition$$5 = this.pixelStart + scrollXRangeAdjusted;
      var pixelPositionEnd$$3 = this.pixelStart + this.pixelEnd;
      if(pixelPosition$$5 < pixelPositionEnd$$3) {
        var tileYLine$$3 = (scrollYAdjusted$$3 & 7) << 3;
        var tileNumber$$4 = (this.gfxWindowCHRBankPosition | (scrollYAdjusted$$3 & 248) << 2) + (this.currentX >> 3);
        var chrCode$$3 = this.BGCHRBank1[tileNumber$$4];
        if(chrCode$$3 < this.gfxBackgroundBankOffset) {
          chrCode$$3 |= 256
        }
        var tile$$3 = this.tileCache[chrCode$$3];
        var texel$$3 = scrollXRangeAdjusted - this.windowX & 7;
        scrollXRangeAdjusted = Math.min(8, texel$$3 + pixelPositionEnd$$3 - pixelPosition$$5);
        for(;texel$$3 < scrollXRangeAdjusted;) {
          this.frameBuffer[pixelPosition$$5++] = this.BGPalette[tile$$3[tileYLine$$3 | texel$$3++]]
        }
        scrollXRangeAdjusted = tileNumber$$4 + (pixelPositionEnd$$3 - pixelPosition$$5 >> 3);
        for(;tileNumber$$4 < scrollXRangeAdjusted;) {
          chrCode$$3 = this.BGCHRBank1[++tileNumber$$4];
          if(chrCode$$3 < this.gfxBackgroundBankOffset) {
            chrCode$$3 |= 256
          }
          tile$$3 = this.tileCache[chrCode$$3];
          texel$$3 = tileYLine$$3;
          this.frameBuffer[pixelPosition$$5++] = this.BGPalette[tile$$3[texel$$3++]];
          this.frameBuffer[pixelPosition$$5++] = this.BGPalette[tile$$3[texel$$3++]];
          this.frameBuffer[pixelPosition$$5++] = this.BGPalette[tile$$3[texel$$3++]];
          this.frameBuffer[pixelPosition$$5++] = this.BGPalette[tile$$3[texel$$3++]];
          this.frameBuffer[pixelPosition$$5++] = this.BGPalette[tile$$3[texel$$3++]];
          this.frameBuffer[pixelPosition$$5++] = this.BGPalette[tile$$3[texel$$3++]];
          this.frameBuffer[pixelPosition$$5++] = this.BGPalette[tile$$3[texel$$3++]];
          this.frameBuffer[pixelPosition$$5++] = this.BGPalette[tile$$3[texel$$3]]
        }
        if(pixelPosition$$5 < pixelPositionEnd$$3) {
          chrCode$$3 = this.BGCHRBank1[++tileNumber$$4];
          if(chrCode$$3 < this.gfxBackgroundBankOffset) {
            chrCode$$3 |= 256
          }
          tile$$3 = this.tileCache[chrCode$$3];
          switch(pixelPositionEnd$$3 - pixelPosition$$5) {
            case 7:
              this.frameBuffer[pixelPosition$$5 + 6] = this.BGPalette[tile$$3[tileYLine$$3 | 6]];
            case 6:
              this.frameBuffer[pixelPosition$$5 + 5] = this.BGPalette[tile$$3[tileYLine$$3 | 5]];
            case 5:
              this.frameBuffer[pixelPosition$$5 + 4] = this.BGPalette[tile$$3[tileYLine$$3 | 4]];
            case 4:
              this.frameBuffer[pixelPosition$$5 + 3] = this.BGPalette[tile$$3[tileYLine$$3 | 3]];
            case 3:
              this.frameBuffer[pixelPosition$$5 + 2] = this.BGPalette[tile$$3[tileYLine$$3 | 2]];
            case 2:
              this.frameBuffer[pixelPosition$$5 + 1] = this.BGPalette[tile$$3[tileYLine$$3 | 1]];
            case 1:
              this.frameBuffer[pixelPosition$$5] = this.BGPalette[tile$$3[tileYLine$$3]]
          }
        }
      }
    }
  }
};
GameBoyCore.prototype.WindowGBCLayerRender = function(scanlineToRender$$5) {
  if(this.gfxWindowDisplay) {
    var scrollYAdjusted$$4 = scanlineToRender$$5 - this.windowY;
    if(scrollYAdjusted$$4 >= 0) {
      var scrollXRangeAdjusted$$1 = this.windowX > 0 ? this.windowX + this.currentX : this.currentX;
      var pixelPosition$$6 = this.pixelStart + scrollXRangeAdjusted$$1;
      var pixelPositionEnd$$4 = this.pixelStart + this.pixelEnd;
      if(pixelPosition$$6 < pixelPositionEnd$$4) {
        var tileYLine$$4 = (scrollYAdjusted$$4 & 7) << 3;
        var tileNumber$$5 = (this.gfxWindowCHRBankPosition | (scrollYAdjusted$$4 & 248) << 2) + (this.currentX >> 3);
        var chrCode$$4 = this.BGCHRBank1[tileNumber$$5];
        if(chrCode$$4 < this.gfxBackgroundBankOffset) {
          chrCode$$4 |= 256
        }
        var attrCode$$2 = this.BGCHRBank2[tileNumber$$5];
        var tile$$4 = this.tileCache[(attrCode$$2 & 8) << 8 | (attrCode$$2 & 96) << 4 | chrCode$$4];
        var palette$$2 = (attrCode$$2 & 7) << 2 | (attrCode$$2 & 128) >> 2;
        var texel$$4 = scrollXRangeAdjusted$$1 - this.windowX & 7;
        scrollXRangeAdjusted$$1 = Math.min(8, texel$$4 + pixelPositionEnd$$4 - pixelPosition$$6);
        for(;texel$$4 < scrollXRangeAdjusted$$1;) {
          this.frameBuffer[pixelPosition$$6++] = this.gbcBGPalette[palette$$2 | tile$$4[tileYLine$$4 | texel$$4++]]
        }
        scrollXRangeAdjusted$$1 = tileNumber$$5 + (pixelPositionEnd$$4 - pixelPosition$$6 >> 3);
        for(;tileNumber$$5 < scrollXRangeAdjusted$$1;) {
          chrCode$$4 = this.BGCHRBank1[++tileNumber$$5];
          if(chrCode$$4 < this.gfxBackgroundBankOffset) {
            chrCode$$4 |= 256
          }
          attrCode$$2 = this.BGCHRBank2[tileNumber$$5];
          tile$$4 = this.tileCache[(attrCode$$2 & 8) << 8 | (attrCode$$2 & 96) << 4 | chrCode$$4];
          palette$$2 = (attrCode$$2 & 7) << 2 | (attrCode$$2 & 128) >> 2;
          texel$$4 = tileYLine$$4;
          this.frameBuffer[pixelPosition$$6++] = this.gbcBGPalette[palette$$2 | tile$$4[texel$$4++]];
          this.frameBuffer[pixelPosition$$6++] = this.gbcBGPalette[palette$$2 | tile$$4[texel$$4++]];
          this.frameBuffer[pixelPosition$$6++] = this.gbcBGPalette[palette$$2 | tile$$4[texel$$4++]];
          this.frameBuffer[pixelPosition$$6++] = this.gbcBGPalette[palette$$2 | tile$$4[texel$$4++]];
          this.frameBuffer[pixelPosition$$6++] = this.gbcBGPalette[palette$$2 | tile$$4[texel$$4++]];
          this.frameBuffer[pixelPosition$$6++] = this.gbcBGPalette[palette$$2 | tile$$4[texel$$4++]];
          this.frameBuffer[pixelPosition$$6++] = this.gbcBGPalette[palette$$2 | tile$$4[texel$$4++]];
          this.frameBuffer[pixelPosition$$6++] = this.gbcBGPalette[palette$$2 | tile$$4[texel$$4]]
        }
        if(pixelPosition$$6 < pixelPositionEnd$$4) {
          chrCode$$4 = this.BGCHRBank1[++tileNumber$$5];
          if(chrCode$$4 < this.gfxBackgroundBankOffset) {
            chrCode$$4 |= 256
          }
          attrCode$$2 = this.BGCHRBank2[tileNumber$$5];
          tile$$4 = this.tileCache[(attrCode$$2 & 8) << 8 | (attrCode$$2 & 96) << 4 | chrCode$$4];
          palette$$2 = (attrCode$$2 & 7) << 2 | (attrCode$$2 & 128) >> 2;
          switch(pixelPositionEnd$$4 - pixelPosition$$6) {
            case 7:
              this.frameBuffer[pixelPosition$$6 + 6] = this.gbcBGPalette[palette$$2 | tile$$4[tileYLine$$4 | 6]];
            case 6:
              this.frameBuffer[pixelPosition$$6 + 5] = this.gbcBGPalette[palette$$2 | tile$$4[tileYLine$$4 | 5]];
            case 5:
              this.frameBuffer[pixelPosition$$6 + 4] = this.gbcBGPalette[palette$$2 | tile$$4[tileYLine$$4 | 4]];
            case 4:
              this.frameBuffer[pixelPosition$$6 + 3] = this.gbcBGPalette[palette$$2 | tile$$4[tileYLine$$4 | 3]];
            case 3:
              this.frameBuffer[pixelPosition$$6 + 2] = this.gbcBGPalette[palette$$2 | tile$$4[tileYLine$$4 | 2]];
            case 2:
              this.frameBuffer[pixelPosition$$6 + 1] = this.gbcBGPalette[palette$$2 | tile$$4[tileYLine$$4 | 1]];
            case 1:
              this.frameBuffer[pixelPosition$$6] = this.gbcBGPalette[palette$$2 | tile$$4[tileYLine$$4]]
          }
        }
      }
    }
  }
};
GameBoyCore.prototype.WindowGBCLayerRenderNoPriorityFlagging = function(scanlineToRender$$6) {
  if(this.gfxWindowDisplay) {
    var scrollYAdjusted$$5 = scanlineToRender$$6 - this.windowY;
    if(scrollYAdjusted$$5 >= 0) {
      var scrollXRangeAdjusted$$2 = this.windowX > 0 ? this.windowX + this.currentX : this.currentX;
      var pixelPosition$$7 = this.pixelStart + scrollXRangeAdjusted$$2;
      var pixelPositionEnd$$5 = this.pixelStart + this.pixelEnd;
      if(pixelPosition$$7 < pixelPositionEnd$$5) {
        var tileYLine$$5 = (scrollYAdjusted$$5 & 7) << 3;
        var tileNumber$$6 = (this.gfxWindowCHRBankPosition | (scrollYAdjusted$$5 & 248) << 2) + (this.currentX >> 3);
        var chrCode$$5 = this.BGCHRBank1[tileNumber$$6];
        if(chrCode$$5 < this.gfxBackgroundBankOffset) {
          chrCode$$5 |= 256
        }
        var attrCode$$3 = this.BGCHRBank2[tileNumber$$6];
        var tile$$5 = this.tileCache[(attrCode$$3 & 8) << 8 | (attrCode$$3 & 96) << 4 | chrCode$$5];
        var palette$$3 = (attrCode$$3 & 7) << 2;
        var texel$$5 = scrollXRangeAdjusted$$2 - this.windowX & 7;
        scrollXRangeAdjusted$$2 = Math.min(8, texel$$5 + pixelPositionEnd$$5 - pixelPosition$$7);
        for(;texel$$5 < scrollXRangeAdjusted$$2;) {
          this.frameBuffer[pixelPosition$$7++] = this.gbcBGPalette[palette$$3 | tile$$5[tileYLine$$5 | texel$$5++]]
        }
        scrollXRangeAdjusted$$2 = tileNumber$$6 + (pixelPositionEnd$$5 - pixelPosition$$7 >> 3);
        for(;tileNumber$$6 < scrollXRangeAdjusted$$2;) {
          chrCode$$5 = this.BGCHRBank1[++tileNumber$$6];
          if(chrCode$$5 < this.gfxBackgroundBankOffset) {
            chrCode$$5 |= 256
          }
          attrCode$$3 = this.BGCHRBank2[tileNumber$$6];
          tile$$5 = this.tileCache[(attrCode$$3 & 8) << 8 | (attrCode$$3 & 96) << 4 | chrCode$$5];
          palette$$3 = (attrCode$$3 & 7) << 2;
          texel$$5 = tileYLine$$5;
          this.frameBuffer[pixelPosition$$7++] = this.gbcBGPalette[palette$$3 | tile$$5[texel$$5++]];
          this.frameBuffer[pixelPosition$$7++] = this.gbcBGPalette[palette$$3 | tile$$5[texel$$5++]];
          this.frameBuffer[pixelPosition$$7++] = this.gbcBGPalette[palette$$3 | tile$$5[texel$$5++]];
          this.frameBuffer[pixelPosition$$7++] = this.gbcBGPalette[palette$$3 | tile$$5[texel$$5++]];
          this.frameBuffer[pixelPosition$$7++] = this.gbcBGPalette[palette$$3 | tile$$5[texel$$5++]];
          this.frameBuffer[pixelPosition$$7++] = this.gbcBGPalette[palette$$3 | tile$$5[texel$$5++]];
          this.frameBuffer[pixelPosition$$7++] = this.gbcBGPalette[palette$$3 | tile$$5[texel$$5++]];
          this.frameBuffer[pixelPosition$$7++] = this.gbcBGPalette[palette$$3 | tile$$5[texel$$5]]
        }
        if(pixelPosition$$7 < pixelPositionEnd$$5) {
          chrCode$$5 = this.BGCHRBank1[++tileNumber$$6];
          if(chrCode$$5 < this.gfxBackgroundBankOffset) {
            chrCode$$5 |= 256
          }
          attrCode$$3 = this.BGCHRBank2[tileNumber$$6];
          tile$$5 = this.tileCache[(attrCode$$3 & 8) << 8 | (attrCode$$3 & 96) << 4 | chrCode$$5];
          palette$$3 = (attrCode$$3 & 7) << 2;
          switch(pixelPositionEnd$$5 - pixelPosition$$7) {
            case 7:
              this.frameBuffer[pixelPosition$$7 + 6] = this.gbcBGPalette[palette$$3 | tile$$5[tileYLine$$5 | 6]];
            case 6:
              this.frameBuffer[pixelPosition$$7 + 5] = this.gbcBGPalette[palette$$3 | tile$$5[tileYLine$$5 | 5]];
            case 5:
              this.frameBuffer[pixelPosition$$7 + 4] = this.gbcBGPalette[palette$$3 | tile$$5[tileYLine$$5 | 4]];
            case 4:
              this.frameBuffer[pixelPosition$$7 + 3] = this.gbcBGPalette[palette$$3 | tile$$5[tileYLine$$5 | 3]];
            case 3:
              this.frameBuffer[pixelPosition$$7 + 2] = this.gbcBGPalette[palette$$3 | tile$$5[tileYLine$$5 | 2]];
            case 2:
              this.frameBuffer[pixelPosition$$7 + 1] = this.gbcBGPalette[palette$$3 | tile$$5[tileYLine$$5 | 1]];
            case 1:
              this.frameBuffer[pixelPosition$$7] = this.gbcBGPalette[palette$$3 | tile$$5[tileYLine$$5]]
          }
        }
      }
    }
  }
};
GameBoyCore.prototype.SpriteGBLayerRender = function(scanlineToRender$$7) {
  if(this.gfxSpriteShow) {
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
    for(;xcoord < 168;) {
      this.sortBuffer[xcoord++] = 255
    }
    if(this.gfxSpriteNormalHeight) {
      length$$18 = this.findLowestSpriteDrawable(lineAdjusted$$1, 7);
      for(;spriteCount < length$$18;++spriteCount) {
        OAMAddress$$1 = this.OAMAddressCache[spriteCount];
        yoffset$$4 = lineAdjusted$$1 - this.memory[OAMAddress$$1] << 3;
        attrCode$$4 = this.memory[OAMAddress$$1 | 3];
        palette$$4 = (attrCode$$4 & 16) >> 2;
        tile$$6 = this.tileCache[(attrCode$$4 & 96) << 4 | this.memory[OAMAddress$$1 | 2]];
        linePixel = xCoordStart = this.memory[OAMAddress$$1 | 1];
        xCoordEnd = Math.min(168 - linePixel, 8);
        xcoord = linePixel > 7 ? 0 : 8 - linePixel;
        currentPixel = this.pixelStart + (linePixel > 8 ? linePixel - 8 : 0);
        for(;xcoord < xCoordEnd;++xcoord, ++currentPixel, ++linePixel) {
          if(this.sortBuffer[linePixel] > xCoordStart) {
            if(this.frameBuffer[currentPixel] >= 33554432) {
              data$$30 = tile$$6[yoffset$$4 | xcoord];
              if(data$$30 > 0) {
                this.frameBuffer[currentPixel] = this.OBJPalette[palette$$4 | data$$30];
                this.sortBuffer[linePixel] = xCoordStart
              }
            }else {
              if(this.frameBuffer[currentPixel] < 16777216) {
                data$$30 = tile$$6[yoffset$$4 | xcoord];
                if(data$$30 > 0 && attrCode$$4 < 128) {
                  this.frameBuffer[currentPixel] = this.OBJPalette[palette$$4 | data$$30];
                  this.sortBuffer[linePixel] = xCoordStart
                }
              }
            }
          }
        }
      }
    }else {
      length$$18 = this.findLowestSpriteDrawable(lineAdjusted$$1, 15);
      for(;spriteCount < length$$18;++spriteCount) {
        OAMAddress$$1 = this.OAMAddressCache[spriteCount];
        yoffset$$4 = lineAdjusted$$1 - this.memory[OAMAddress$$1] << 3;
        attrCode$$4 = this.memory[OAMAddress$$1 | 3];
        palette$$4 = (attrCode$$4 & 16) >> 2;
        if((attrCode$$4 & 64) == (64 & yoffset$$4)) {
          tile$$6 = this.tileCache[(attrCode$$4 & 96) << 4 | this.memory[OAMAddress$$1 | 2] & 254]
        }else {
          tile$$6 = this.tileCache[(attrCode$$4 & 96) << 4 | this.memory[OAMAddress$$1 | 2] | 1]
        }
        yoffset$$4 &= 63;
        linePixel = xCoordStart = this.memory[OAMAddress$$1 | 1];
        xCoordEnd = Math.min(168 - linePixel, 8);
        xcoord = linePixel > 7 ? 0 : 8 - linePixel;
        currentPixel = this.pixelStart + (linePixel > 8 ? linePixel - 8 : 0);
        for(;xcoord < xCoordEnd;++xcoord, ++currentPixel, ++linePixel) {
          if(this.sortBuffer[linePixel] > xCoordStart) {
            if(this.frameBuffer[currentPixel] >= 33554432) {
              data$$30 = tile$$6[yoffset$$4 | xcoord];
              if(data$$30 > 0) {
                this.frameBuffer[currentPixel] = this.OBJPalette[palette$$4 | data$$30];
                this.sortBuffer[linePixel] = xCoordStart
              }
            }else {
              if(this.frameBuffer[currentPixel] < 16777216) {
                data$$30 = tile$$6[yoffset$$4 | xcoord];
                if(data$$30 > 0 && attrCode$$4 < 128) {
                  this.frameBuffer[currentPixel] = this.OBJPalette[palette$$4 | data$$30];
                  this.sortBuffer[linePixel] = xCoordStart
                }
              }
            }
          }
        }
      }
    }
  }
};
GameBoyCore.prototype.findLowestSpriteDrawable = function(scanlineToRender$$8, drawableRange) {
  var address$$1 = 65024;
  var spriteCount$$1 = 0;
  var diff = 0;
  for(;address$$1 < 65184 && spriteCount$$1 < 10;) {
    diff = scanlineToRender$$8 - this.memory[address$$1];
    if((diff & drawableRange) == diff) {
      this.OAMAddressCache[spriteCount$$1++] = address$$1
    }
    address$$1 += 4
  }
  return spriteCount$$1
};
GameBoyCore.prototype.SpriteGBCLayerRender = function(scanlineToRender$$9) {
  if(this.gfxSpriteShow) {
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
    if(this.gfxSpriteNormalHeight) {
      for(;OAMAddress$$2 < 65184 && spriteCount$$2 < 10;OAMAddress$$2 += 4) {
        yoffset$$5 = lineAdjusted$$2 - this.memory[OAMAddress$$2];
        if((yoffset$$5 & 7) == yoffset$$5) {
          xcoord$$1 = this.memory[OAMAddress$$2 | 1] - 8;
          endX = Math.min(160, xcoord$$1 + 8);
          attrCode$$5 = this.memory[OAMAddress$$2 | 3];
          palette$$5 = (attrCode$$5 & 7) << 2;
          tile$$7 = this.tileCache[(attrCode$$5 & 8) << 8 | (attrCode$$5 & 96) << 4 | this.memory[OAMAddress$$2 | 2]];
          xCounter = xcoord$$1 > 0 ? xcoord$$1 : 0;
          xcoord$$1 -= yoffset$$5 << 3;
          currentPixel$$1 = this.pixelStart + xCounter;
          for(;xCounter < endX;++xCounter, ++currentPixel$$1) {
            if(this.frameBuffer[currentPixel$$1] >= 33554432) {
              data$$31 = tile$$7[xCounter - xcoord$$1];
              if(data$$31 > 0) {
                this.frameBuffer[currentPixel$$1] = this.gbcOBJPalette[palette$$5 | data$$31]
              }
            }else {
              if(this.frameBuffer[currentPixel$$1] < 16777216) {
                data$$31 = tile$$7[xCounter - xcoord$$1];
                if(data$$31 > 0 && attrCode$$5 < 128) {
                  this.frameBuffer[currentPixel$$1] = this.gbcOBJPalette[palette$$5 | data$$31]
                }
              }
            }
          }
          ++spriteCount$$2
        }
      }
    }else {
      for(;OAMAddress$$2 < 65184 && spriteCount$$2 < 10;OAMAddress$$2 += 4) {
        yoffset$$5 = lineAdjusted$$2 - this.memory[OAMAddress$$2];
        if((yoffset$$5 & 15) == yoffset$$5) {
          xcoord$$1 = this.memory[OAMAddress$$2 | 1] - 8;
          endX = Math.min(160, xcoord$$1 + 8);
          attrCode$$5 = this.memory[OAMAddress$$2 | 3];
          palette$$5 = (attrCode$$5 & 7) << 2;
          if((attrCode$$5 & 64) == (64 & yoffset$$5 << 3)) {
            tile$$7 = this.tileCache[(attrCode$$5 & 8) << 8 | (attrCode$$5 & 96) << 4 | this.memory[OAMAddress$$2 | 2] & 254]
          }else {
            tile$$7 = this.tileCache[(attrCode$$5 & 8) << 8 | (attrCode$$5 & 96) << 4 | this.memory[OAMAddress$$2 | 2] | 1]
          }
          xCounter = xcoord$$1 > 0 ? xcoord$$1 : 0;
          xcoord$$1 -= (yoffset$$5 & 7) << 3;
          currentPixel$$1 = this.pixelStart + xCounter;
          for(;xCounter < endX;++xCounter, ++currentPixel$$1) {
            if(this.frameBuffer[currentPixel$$1] >= 33554432) {
              data$$31 = tile$$7[xCounter - xcoord$$1];
              if(data$$31 > 0) {
                this.frameBuffer[currentPixel$$1] = this.gbcOBJPalette[palette$$5 | data$$31]
              }
            }else {
              if(this.frameBuffer[currentPixel$$1] < 16777216) {
                data$$31 = tile$$7[xCounter - xcoord$$1];
                if(data$$31 > 0 && attrCode$$5 < 128) {
                  this.frameBuffer[currentPixel$$1] = this.gbcOBJPalette[palette$$5 | data$$31]
                }
              }
            }
          }
          ++spriteCount$$2
        }
      }
    }
  }
};
GameBoyCore.prototype.generateGBTileLine = function(address$$2) {
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
  tileBlock[address$$2] = (lineCopy & 32768) >> 14 | (lineCopy & 128) >> 7
};
GameBoyCore.prototype.generateGBCTileLineBank1 = function(address$$3) {
  var lineCopy$$1 = this.memory[1 | address$$3] << 8 | this.memory[40958 & address$$3];
  address$$3 &= 8190;
  var tileBlock1 = this.tileCache[address$$3 >> 4];
  var tileBlock2 = this.tileCache[512 | address$$3 >> 4];
  var tileBlock3 = this.tileCache[1024 | address$$3 >> 4];
  var tileBlock4 = this.tileCache[1536 | address$$3 >> 4];
  address$$3 = (address$$3 & 14) << 2;
  var addressFlipped = 56 - address$$3;
  tileBlock4[addressFlipped] = tileBlock2[address$$3] = tileBlock3[addressFlipped | 7] = tileBlock1[address$$3 | 7] = (lineCopy$$1 & 256) >> 7 | lineCopy$$1 & 1;
  tileBlock4[addressFlipped | 1] = tileBlock2[address$$3 | 1] = tileBlock3[addressFlipped | 6] = tileBlock1[address$$3 | 6] = (lineCopy$$1 & 512) >> 8 | (lineCopy$$1 & 2) >> 1;
  tileBlock4[addressFlipped | 2] = tileBlock2[address$$3 | 2] = tileBlock3[addressFlipped | 5] = tileBlock1[address$$3 | 5] = (lineCopy$$1 & 1024) >> 9 | (lineCopy$$1 & 4) >> 2;
  tileBlock4[addressFlipped | 3] = tileBlock2[address$$3 | 3] = tileBlock3[addressFlipped | 4] = tileBlock1[address$$3 | 4] = (lineCopy$$1 & 2048) >> 10 | (lineCopy$$1 & 8) >> 3;
  tileBlock4[addressFlipped | 4] = tileBlock2[address$$3 | 4] = tileBlock3[addressFlipped | 3] = tileBlock1[address$$3 | 3] = (lineCopy$$1 & 4096) >> 11 | (lineCopy$$1 & 16) >> 4;
  tileBlock4[addressFlipped | 5] = tileBlock2[address$$3 | 5] = tileBlock3[addressFlipped | 2] = tileBlock1[address$$3 | 2] = (lineCopy$$1 & 8192) >> 12 | (lineCopy$$1 & 32) >> 5;
  tileBlock4[addressFlipped | 6] = tileBlock2[address$$3 | 6] = tileBlock3[addressFlipped | 1] = tileBlock1[address$$3 | 1] = (lineCopy$$1 & 16384) >> 13 | (lineCopy$$1 & 64) >> 6;
  tileBlock4[addressFlipped | 7] = tileBlock2[address$$3 | 7] = tileBlock3[addressFlipped] = tileBlock1[address$$3] = (lineCopy$$1 & 32768) >> 14 | (lineCopy$$1 & 128) >> 7
};
GameBoyCore.prototype.generateGBCTileBank1 = function(vramAddress) {
  var address$$4 = vramAddress >> 4;
  var tileBlock1$$1 = this.tileCache[address$$4];
  var tileBlock2$$1 = this.tileCache[512 | address$$4];
  var tileBlock3$$1 = this.tileCache[1024 | address$$4];
  var tileBlock4$$1 = this.tileCache[1536 | address$$4];
  var lineCopy$$2 = 0;
  vramAddress |= 32768;
  address$$4 = 0;
  var addressFlipped$$1 = 56;
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
    address$$4 += 8;
    addressFlipped$$1 -= 8;
    vramAddress += 2
  }while(addressFlipped$$1 > -1)
};
GameBoyCore.prototype.generateGBCTileLineBank2 = function(address$$5) {
  var lineCopy$$3 = this.VRAM[1 | address$$5] << 8 | this.VRAM[8190 & address$$5];
  var tileBlock1$$2 = this.tileCache[2048 | address$$5 >> 4];
  var tileBlock2$$2 = this.tileCache[2560 | address$$5 >> 4];
  var tileBlock3$$2 = this.tileCache[3072 | address$$5 >> 4];
  var tileBlock4$$2 = this.tileCache[3584 | address$$5 >> 4];
  address$$5 = (address$$5 & 14) << 2;
  var addressFlipped$$2 = 56 - address$$5;
  tileBlock4$$2[addressFlipped$$2] = tileBlock2$$2[address$$5] = tileBlock3$$2[addressFlipped$$2 | 7] = tileBlock1$$2[address$$5 | 7] = (lineCopy$$3 & 256) >> 7 | lineCopy$$3 & 1;
  tileBlock4$$2[addressFlipped$$2 | 1] = tileBlock2$$2[address$$5 | 1] = tileBlock3$$2[addressFlipped$$2 | 6] = tileBlock1$$2[address$$5 | 6] = (lineCopy$$3 & 512) >> 8 | (lineCopy$$3 & 2) >> 1;
  tileBlock4$$2[addressFlipped$$2 | 2] = tileBlock2$$2[address$$5 | 2] = tileBlock3$$2[addressFlipped$$2 | 5] = tileBlock1$$2[address$$5 | 5] = (lineCopy$$3 & 1024) >> 9 | (lineCopy$$3 & 4) >> 2;
  tileBlock4$$2[addressFlipped$$2 | 3] = tileBlock2$$2[address$$5 | 3] = tileBlock3$$2[addressFlipped$$2 | 4] = tileBlock1$$2[address$$5 | 4] = (lineCopy$$3 & 2048) >> 10 | (lineCopy$$3 & 8) >> 3;
  tileBlock4$$2[addressFlipped$$2 | 4] = tileBlock2$$2[address$$5 | 4] = tileBlock3$$2[addressFlipped$$2 | 3] = tileBlock1$$2[address$$5 | 3] = (lineCopy$$3 & 4096) >> 11 | (lineCopy$$3 & 16) >> 4;
  tileBlock4$$2[addressFlipped$$2 | 5] = tileBlock2$$2[address$$5 | 5] = tileBlock3$$2[addressFlipped$$2 | 2] = tileBlock1$$2[address$$5 | 2] = (lineCopy$$3 & 8192) >> 12 | (lineCopy$$3 & 32) >> 5;
  tileBlock4$$2[addressFlipped$$2 | 6] = tileBlock2$$2[address$$5 | 6] = tileBlock3$$2[addressFlipped$$2 | 1] = tileBlock1$$2[address$$5 | 1] = (lineCopy$$3 & 16384) >> 13 | (lineCopy$$3 & 64) >> 6;
  tileBlock4$$2[addressFlipped$$2 | 7] = tileBlock2$$2[address$$5 | 7] = tileBlock3$$2[addressFlipped$$2] = tileBlock1$$2[address$$5] = (lineCopy$$3 & 32768) >> 14 | (lineCopy$$3 & 128) >> 7
};
GameBoyCore.prototype.generateGBCTileBank2 = function(vramAddress$$1) {
  var address$$6 = vramAddress$$1 >> 4;
  var tileBlock1$$3 = this.tileCache[2048 | address$$6];
  var tileBlock2$$3 = this.tileCache[2560 | address$$6];
  var tileBlock3$$3 = this.tileCache[3072 | address$$6];
  var tileBlock4$$3 = this.tileCache[3584 | address$$6];
  var lineCopy$$4 = 0;
  address$$6 = 0;
  var addressFlipped$$3 = 56;
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
    address$$6 += 8;
    addressFlipped$$3 -= 8;
    vramAddress$$1 += 2
  }while(addressFlipped$$3 > -1)
};
GameBoyCore.prototype.generateGBOAMTileLine = function(address$$7) {
  var lineCopy$$5 = this.memory[1 | address$$7] << 8 | this.memory[40958 & address$$7];
  address$$7 &= 8190;
  var tileBlock1$$4 = this.tileCache[address$$7 >> 4];
  var tileBlock2$$4 = this.tileCache[512 | address$$7 >> 4];
  var tileBlock3$$4 = this.tileCache[1024 | address$$7 >> 4];
  var tileBlock4$$4 = this.tileCache[1536 | address$$7 >> 4];
  address$$7 = (address$$7 & 14) << 2;
  var addressFlipped$$4 = 56 - address$$7;
  tileBlock4$$4[addressFlipped$$4] = tileBlock2$$4[address$$7] = tileBlock3$$4[addressFlipped$$4 | 7] = tileBlock1$$4[address$$7 | 7] = (lineCopy$$5 & 256) >> 7 | lineCopy$$5 & 1;
  tileBlock4$$4[addressFlipped$$4 | 1] = tileBlock2$$4[address$$7 | 1] = tileBlock3$$4[addressFlipped$$4 | 6] = tileBlock1$$4[address$$7 | 6] = (lineCopy$$5 & 512) >> 8 | (lineCopy$$5 & 2) >> 1;
  tileBlock4$$4[addressFlipped$$4 | 2] = tileBlock2$$4[address$$7 | 2] = tileBlock3$$4[addressFlipped$$4 | 5] = tileBlock1$$4[address$$7 | 5] = (lineCopy$$5 & 1024) >> 9 | (lineCopy$$5 & 4) >> 2;
  tileBlock4$$4[addressFlipped$$4 | 3] = tileBlock2$$4[address$$7 | 3] = tileBlock3$$4[addressFlipped$$4 | 4] = tileBlock1$$4[address$$7 | 4] = (lineCopy$$5 & 2048) >> 10 | (lineCopy$$5 & 8) >> 3;
  tileBlock4$$4[addressFlipped$$4 | 4] = tileBlock2$$4[address$$7 | 4] = tileBlock3$$4[addressFlipped$$4 | 3] = tileBlock1$$4[address$$7 | 3] = (lineCopy$$5 & 4096) >> 11 | (lineCopy$$5 & 16) >> 4;
  tileBlock4$$4[addressFlipped$$4 | 5] = tileBlock2$$4[address$$7 | 5] = tileBlock3$$4[addressFlipped$$4 | 2] = tileBlock1$$4[address$$7 | 2] = (lineCopy$$5 & 8192) >> 12 | (lineCopy$$5 & 32) >> 5;
  tileBlock4$$4[addressFlipped$$4 | 6] = tileBlock2$$4[address$$7 | 6] = tileBlock3$$4[addressFlipped$$4 | 1] = tileBlock1$$4[address$$7 | 1] = (lineCopy$$5 & 16384) >> 13 | (lineCopy$$5 & 64) >> 6;
  tileBlock4$$4[addressFlipped$$4 | 7] = tileBlock2$$4[address$$7 | 7] = tileBlock3$$4[addressFlipped$$4] = tileBlock1$$4[address$$7] = (lineCopy$$5 & 32768) >> 14 | (lineCopy$$5 & 128) >> 7
};
GameBoyCore.prototype.graphicsJIT = function() {
  if(this.LCDisOn) {
    this.totalLinesPassed = 0;
    this.graphicsJITScanlineGroup()
  }
};
GameBoyCore.prototype.graphicsJITVBlank = function() {
  this.totalLinesPassed += this.queuedScanLines;
  this.graphicsJITScanlineGroup()
};
GameBoyCore.prototype.graphicsJITScanlineGroup = function() {
  for(;this.queuedScanLines > 0;) {
    this.renderScanLine(this.lastUnrenderedLine);
    if(this.lastUnrenderedLine < 143) {
      ++this.lastUnrenderedLine
    }else {
      this.lastUnrenderedLine = 0
    }
    --this.queuedScanLines
  }
};
GameBoyCore.prototype.incrementScanLineQueue = function() {
  if(this.queuedScanLines < 144) {
    ++this.queuedScanLines
  }else {
    this.currentX = 0;
    this.midScanlineOffset = -1;
    if(this.lastUnrenderedLine < 143) {
      ++this.lastUnrenderedLine
    }else {
      this.lastUnrenderedLine = 0
    }
  }
};
GameBoyCore.prototype.midScanLineJIT = function() {
  this.graphicsJIT();
  this.renderMidScanLine()
};
GameBoyCore.prototype.launchIRQ = function() {
  var bitShift = 0;
  var testbit = 1;
  do {
    if((testbit & this.IRQLineMatched) == testbit) {
      this.IME = false;
      this.interruptsRequested -= testbit;
      this.IRQLineMatched = 0;
      this.CPUTicks = 20;
      this.stackPointer = this.stackPointer - 1 & 65535;
      this.memoryWriter[this.stackPointer](this, this.stackPointer, this.programCounter >> 8);
      this.stackPointer = this.stackPointer - 1 & 65535;
      this.memoryWriter[this.stackPointer](this, this.stackPointer, this.programCounter & 255);
      this.programCounter = 64 | bitShift << 3;
      this.updateCore();
      return
    }
    testbit = 1 << ++bitShift
  }while(bitShift < 5)
};
GameBoyCore.prototype.checkIRQMatching = function() {
  if(this.IME) {
    this.IRQLineMatched = this.interruptsEnabled & this.interruptsRequested & 31
  }
};
GameBoyCore.prototype.calculateHALTPeriod = function() {
  if(!this.halt) {
    this.halt = true;
    var currentClocks = -1;
    var temp_var$$20 = 0;
    if(this.LCDisOn) {
      if((this.interruptsEnabled & 1) == 1) {
        currentClocks = 456 * ((this.modeSTAT == 1 ? 298 : 144) - this.actualScanLine) - this.LCDTicks << this.doubleSpeedShifter
      }
      if((this.interruptsEnabled & 2) == 2) {
        if(this.mode0TriggerSTAT) {
          temp_var$$20 = this.clocksUntilMode0() - this.LCDTicks << this.doubleSpeedShifter;
          if(temp_var$$20 <= currentClocks || currentClocks == -1) {
            currentClocks = temp_var$$20
          }
        }
        if(this.mode1TriggerSTAT && (this.interruptsEnabled & 1) == 0) {
          temp_var$$20 = 456 * ((this.modeSTAT == 1 ? 298 : 144) - this.actualScanLine) - this.LCDTicks << this.doubleSpeedShifter;
          if(temp_var$$20 <= currentClocks || currentClocks == -1) {
            currentClocks = temp_var$$20
          }
        }
        if(this.mode2TriggerSTAT) {
          temp_var$$20 = (this.actualScanLine >= 143 ? 456 * (154 - this.actualScanLine) : 456) - this.LCDTicks << this.doubleSpeedShifter;
          if(temp_var$$20 <= currentClocks || currentClocks == -1) {
            currentClocks = temp_var$$20
          }
        }
        if(this.LYCMatchTriggerSTAT && this.memory[65349] <= 153) {
          temp_var$$20 = this.clocksUntilLYCMatch() - this.LCDTicks << this.doubleSpeedShifter;
          if(temp_var$$20 <= currentClocks || currentClocks == -1) {
            currentClocks = temp_var$$20
          }
        }
      }
    }
    if(this.TIMAEnabled && (this.interruptsEnabled & 4) == 4) {
      temp_var$$20 = (256 - this.memory[65285]) * this.TACClocker - this.timerTicks;
      if(temp_var$$20 <= currentClocks || currentClocks == -1) {
        currentClocks = temp_var$$20
      }
    }
    if(this.serialTimer > 0 && (this.interruptsEnabled & 8) == 8) {
      if(this.serialTimer <= currentClocks || currentClocks == -1) {
        currentClocks = this.serialTimer
      }
    }
  }else {
    currentClocks = this.remainingClocks
  }
  var maxClocks = this.CPUCyclesTotal - this.emulatorTicks << this.doubleSpeedShifter;
  if(currentClocks >= 0) {
    if(currentClocks <= maxClocks) {
      this.CPUTicks = Math.max(currentClocks, this.CPUTicks);
      this.updateCoreFull();
      this.halt = false;
      this.CPUTicks = 0
    }else {
      this.CPUTicks = Math.max(maxClocks, this.CPUTicks);
      this.remainingClocks = currentClocks - this.CPUTicks
    }
  }else {
    this.CPUTicks += maxClocks
  }
};
GameBoyCore.prototype.memoryRead = function(address$$8) {
  return this.memoryReader[address$$8](this, address$$8)
};
GameBoyCore.prototype.memoryHighRead = function(address$$9) {
  return this.memoryHighReader[address$$9](this, address$$9)
};
GameBoyCore.prototype.memoryReadJumpCompile = function() {
  var index$$62 = 0;
  for(;index$$62 <= 65535;index$$62++) {
    if(index$$62 < 16384) {
      this.memoryReader[index$$62] = this.memoryReadNormal
    }else {
      if(index$$62 < 32768) {
        this.memoryReader[index$$62] = this.memoryReadROM
      }else {
        if(index$$62 < 38912) {
          this.memoryReader[index$$62] = this.cGBC ? this.VRAMDATAReadCGBCPU : this.VRAMDATAReadDMGCPU
        }else {
          if(index$$62 < 40960) {
            this.memoryReader[index$$62] = this.cGBC ? this.VRAMCHRReadCGBCPU : this.VRAMCHRReadDMGCPU
          }else {
            if(index$$62 >= 40960 && index$$62 < 49152) {
              if(this.numRAMBanks == 1 / 16 && index$$62 < 41472 || this.numRAMBanks >= 1) {
                if(this.cMBC7) {
                  this.memoryReader[index$$62] = this.memoryReadMBC7
                }else {
                  if(!this.cMBC3) {
                    this.memoryReader[index$$62] = this.memoryReadMBC
                  }else {
                    this.memoryReader[index$$62] = this.memoryReadMBC3
                  }
                }
              }else {
                this.memoryReader[index$$62] = this.memoryReadBAD
              }
            }else {
              if(index$$62 >= 49152 && index$$62 < 57344) {
                if(!this.cGBC || index$$62 < 53248) {
                  this.memoryReader[index$$62] = this.memoryReadNormal
                }else {
                  this.memoryReader[index$$62] = this.memoryReadGBCMemory
                }
              }else {
                if(index$$62 >= 57344 && index$$62 < 65024) {
                  if(!this.cGBC || index$$62 < 61440) {
                    this.memoryReader[index$$62] = this.memoryReadECHONormal
                  }else {
                    this.memoryReader[index$$62] = this.memoryReadECHOGBCMemory
                  }
                }else {
                  if(index$$62 < 65184) {
                    this.memoryReader[index$$62] = this.memoryReadOAM
                  }else {
                    if(this.cGBC && index$$62 >= 65184 && index$$62 < 65280) {
                      this.memoryReader[index$$62] = this.memoryReadNormal
                    }else {
                      if(index$$62 >= 65280) {
                        switch(index$$62) {
                          case 65280:
                            this.memoryHighReader[0] = this.memoryReader[65280] = function(parentObj$$518, address$$10) {
                              return 192 | parentObj$$518.memory[65280]
                            };
                            break;
                          case 65281:
                            this.memoryHighReader[1] = this.memoryReader[65281] = function(parentObj$$519, address$$11) {
                              return parentObj$$519.memory[65282] < 128 ? parentObj$$519.memory[65281] : 255
                            };
                            break;
                          case 65282:
                            if(this.cGBC) {
                              this.memoryHighReader[2] = this.memoryReader[65282] = function(parentObj$$520, address$$12) {
                                return(parentObj$$520.serialTimer <= 0 ? 124 : 252) | parentObj$$520.memory[65282]
                              }
                            }else {
                              this.memoryHighReader[2] = this.memoryReader[65282] = function(parentObj$$521, address$$13) {
                                return(parentObj$$521.serialTimer <= 0 ? 126 : 254) | parentObj$$521.memory[65282]
                              }
                            }
                            break;
                          case 65284:
                            this.memoryHighReader[4] = this.memoryReader[65284] = function(parentObj$$522, address$$14) {
                              parentObj$$522.memory[65284] = parentObj$$522.memory[65284] + (parentObj$$522.DIVTicks >> 8) & 255;
                              parentObj$$522.DIVTicks &= 255;
                              return parentObj$$522.memory[65284]
                            };
                            break;
                          case 65287:
                            this.memoryHighReader[7] = this.memoryReader[65287] = function(parentObj$$523, address$$15) {
                              return 248 | parentObj$$523.memory[65287]
                            };
                            break;
                          case 65295:
                            this.memoryHighReader[15] = this.memoryReader[65295] = function(parentObj$$524, address$$16) {
                              return 224 | parentObj$$524.interruptsRequested
                            };
                            break;
                          case 65296:
                            this.memoryHighReader[16] = this.memoryReader[65296] = function(parentObj$$525, address$$17) {
                              return 128 | parentObj$$525.memory[65296]
                            };
                            break;
                          case 65297:
                            this.memoryHighReader[17] = this.memoryReader[65297] = function(parentObj$$526, address$$18) {
                              return 63 | parentObj$$526.memory[65297]
                            };
                            break;
                          case 65299:
                            this.memoryHighReader[19] = this.memoryReader[65299] = this.memoryReadBAD;
                            break;
                          case 65300:
                            this.memoryHighReader[20] = this.memoryReader[65300] = function(parentObj$$527, address$$19) {
                              return 191 | parentObj$$527.memory[65300]
                            };
                            break;
                          case 65302:
                            this.memoryHighReader[22] = this.memoryReader[65302] = function(parentObj$$528, address$$20) {
                              return 63 | parentObj$$528.memory[65302]
                            };
                            break;
                          case 65304:
                            this.memoryHighReader[24] = this.memoryReader[65304] = this.memoryReadBAD;
                            break;
                          case 65305:
                            this.memoryHighReader[25] = this.memoryReader[65305] = function(parentObj$$529, address$$21) {
                              return 191 | parentObj$$529.memory[65305]
                            };
                            break;
                          case 65306:
                            this.memoryHighReader[26] = this.memoryReader[65306] = function(parentObj$$530, address$$22) {
                              return 127 | parentObj$$530.memory[65306]
                            };
                            break;
                          case 65307:
                            this.memoryHighReader[27] = this.memoryReader[65307] = this.memoryReadBAD;
                            break;
                          case 65308:
                            this.memoryHighReader[28] = this.memoryReader[65308] = function(parentObj$$531, address$$23) {
                              return 159 | parentObj$$531.memory[65308]
                            };
                            break;
                          case 65309:
                            this.memoryHighReader[29] = this.memoryReader[65309] = function(parentObj$$532, address$$24) {
                              return 255
                            };
                            break;
                          case 65310:
                            this.memoryHighReader[30] = this.memoryReader[65310] = function(parentObj$$533, address$$25) {
                              return 191 | parentObj$$533.memory[65310]
                            };
                            break;
                          case 65311:
                          ;
                          case 65312:
                            this.memoryHighReader[index$$62 & 255] = this.memoryReader[index$$62] = this.memoryReadBAD;
                            break;
                          case 65315:
                            this.memoryHighReader[35] = this.memoryReader[65315] = function(parentObj$$534, address$$26) {
                              return 191 | parentObj$$534.memory[65315]
                            };
                            break;
                          case 65318:
                            this.memoryHighReader[38] = this.memoryReader[65318] = function(parentObj$$535, address$$27) {
                              parentObj$$535.audioJIT();
                              return 112 | parentObj$$535.memory[65318]
                            };
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
                            this.memoryReader[index$$62] = function(parentObj$$536, address$$28) {
                              return parentObj$$536.channel3canPlay ? parentObj$$536.memory[65280 | parentObj$$536.channel3lastSampleLookup >> 1] : parentObj$$536.memory[address$$28]
                            };
                            this.memoryHighReader[index$$62 & 255] = function(parentObj$$537, address$$29) {
                              return parentObj$$537.channel3canPlay ? parentObj$$537.memory[65280 | parentObj$$537.channel3lastSampleLookup >> 1] : parentObj$$537.memory[65280 | address$$29]
                            };
                            break;
                          case 65345:
                            this.memoryHighReader[65] = this.memoryReader[65345] = function(parentObj$$538, address$$30) {
                              return 128 | parentObj$$538.memory[65345] | parentObj$$538.modeSTAT
                            };
                            break;
                          case 65346:
                            this.memoryHighReader[66] = this.memoryReader[65346] = function(parentObj$$539, address$$31) {
                              return parentObj$$539.backgroundY
                            };
                            break;
                          case 65347:
                            this.memoryHighReader[67] = this.memoryReader[65347] = function(parentObj$$540, address$$32) {
                              return parentObj$$540.backgroundX
                            };
                            break;
                          case 65348:
                            this.memoryHighReader[68] = this.memoryReader[65348] = function(parentObj$$541, address$$33) {
                              return parentObj$$541.LCDisOn ? parentObj$$541.memory[65348] : 0
                            };
                            break;
                          case 65354:
                            this.memoryHighReader[74] = this.memoryReader[65354] = function(parentObj$$542, address$$34) {
                              return parentObj$$542.windowY
                            };
                            break;
                          case 65359:
                            this.memoryHighReader[79] = this.memoryReader[65359] = function(parentObj$$543, address$$35) {
                              return parentObj$$543.currVRAMBank
                            };
                            break;
                          case 65365:
                            if(this.cGBC) {
                              this.memoryHighReader[85] = this.memoryReader[65365] = function(parentObj$$544, address$$36) {
                                if(!parentObj$$544.LCDisOn && parentObj$$544.hdmaRunning) {
                                  parentObj$$544.DMAWrite((parentObj$$544.memory[65365] & 127) + 1);
                                  parentObj$$544.memory[65365] = 255;
                                  parentObj$$544.hdmaRunning = false
                                }
                                return parentObj$$544.memory[65365]
                              }
                            }else {
                              this.memoryReader[65365] = this.memoryReadNormal;
                              this.memoryHighReader[85] = this.memoryHighReadNormal
                            }
                            break;
                          case 65366:
                            if(this.cGBC) {
                              this.memoryHighReader[86] = this.memoryReader[65366] = function(parentObj$$545, address$$37) {
                                return 60 | (parentObj$$545.memory[65366] >= 192 ? 2 | parentObj$$545.memory[65366] & 193 : parentObj$$545.memory[65366] & 195)
                              }
                            }else {
                              this.memoryReader[65366] = this.memoryReadNormal;
                              this.memoryHighReader[86] = this.memoryHighReadNormal
                            }
                            break;
                          case 65388:
                            if(this.cGBC) {
                              this.memoryHighReader[108] = this.memoryReader[65388] = function(parentObj$$546, address$$38) {
                                return 254 | parentObj$$546.memory[65388]
                              }
                            }else {
                              this.memoryHighReader[108] = this.memoryReader[65388] = this.memoryReadBAD
                            }
                            break;
                          case 65392:
                            if(this.cGBC) {
                              this.memoryHighReader[112] = this.memoryReader[65392] = function(parentObj$$547, address$$39) {
                                return 64 | parentObj$$547.memory[65392]
                              }
                            }else {
                              this.memoryHighReader[112] = this.memoryReader[65392] = this.memoryReadBAD
                            }
                            break;
                          case 65397:
                            this.memoryHighReader[117] = this.memoryReader[65397] = function(parentObj$$548, address$$40) {
                              return 143 | parentObj$$548.memory[65397]
                            };
                            break;
                          case 65398:
                          ;
                          case 65399:
                            this.memoryHighReader[index$$62 & 255] = this.memoryReader[index$$62] = function(parentObj$$549, address$$41) {
                              return 0
                            };
                            break;
                          case 65535:
                            this.memoryHighReader[255] = this.memoryReader[65535] = function(parentObj$$550, address$$42) {
                              return parentObj$$550.interruptsEnabled
                            };
                            break;
                          default:
                            this.memoryReader[index$$62] = this.memoryReadNormal;
                            this.memoryHighReader[index$$62 & 255] = this.memoryHighReadNormal
                        }
                      }else {
                        this.memoryReader[index$$62] = this.memoryReadBAD
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
  }
};
GameBoyCore.prototype.memoryReadNormal = function(parentObj$$551, address$$43) {
  return parentObj$$551.memory[address$$43]
};
GameBoyCore.prototype.memoryHighReadNormal = function(parentObj$$552, address$$44) {
  return parentObj$$552.memory[65280 | address$$44]
};
GameBoyCore.prototype.memoryReadROM = function(parentObj$$553, address$$45) {
  return parentObj$$553.ROM[parentObj$$553.currentROMBank + address$$45]
};
GameBoyCore.prototype.memoryReadMBC = function(parentObj$$554, address$$46) {
  if(parentObj$$554.MBCRAMBanksEnabled || settings[10]) {
    return parentObj$$554.MBCRam[address$$46 + parentObj$$554.currMBCRAMBankPosition]
  }
  return 255
};
GameBoyCore.prototype.memoryReadMBC7 = function(parentObj$$555, address$$47) {
  if(parentObj$$555.MBCRAMBanksEnabled || settings[10]) {
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
        return parentObj$$555.MBCRam[address$$47 + parentObj$$555.currMBCRAMBankPosition]
    }
  }
  return 255
};
GameBoyCore.prototype.memoryReadMBC3 = function(parentObj$$556, address$$48) {
  if(parentObj$$556.MBCRAMBanksEnabled || settings[10]) {
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
        return(parentObj$$556.RTCDayOverFlow ? 128 : 0) + (parentObj$$556.RTCHALT ? 64 : 0) + parentObj$$556.latchedHDays
    }
  }
  return 255
};
GameBoyCore.prototype.memoryReadGBCMemory = function(parentObj$$557, address$$49) {
  return parentObj$$557.GBCMemory[address$$49 + parentObj$$557.gbcRamBankPosition]
};
GameBoyCore.prototype.memoryReadOAM = function(parentObj$$558, address$$50) {
  return parentObj$$558.modeSTAT > 1 ? 255 : parentObj$$558.memory[address$$50]
};
GameBoyCore.prototype.memoryReadECHOGBCMemory = function(parentObj$$559, address$$51) {
  return parentObj$$559.GBCMemory[address$$51 + parentObj$$559.gbcRamBankPositionECHO]
};
GameBoyCore.prototype.memoryReadECHONormal = function(parentObj$$560, address$$52) {
  return parentObj$$560.memory[address$$52 - 8192]
};
GameBoyCore.prototype.memoryReadBAD = function(parentObj$$561, address$$53) {
  return 255
};
GameBoyCore.prototype.VRAMDATAReadCGBCPU = function(parentObj$$562, address$$54) {
  return parentObj$$562.modeSTAT > 2 ? 255 : parentObj$$562.currVRAMBank == 0 ? parentObj$$562.memory[address$$54] : parentObj$$562.VRAM[address$$54 & 8191]
};
GameBoyCore.prototype.VRAMDATAReadDMGCPU = function(parentObj$$563, address$$55) {
  return parentObj$$563.modeSTAT > 2 ? 255 : parentObj$$563.memory[address$$55]
};
GameBoyCore.prototype.VRAMCHRReadCGBCPU = function(parentObj$$564, address$$56) {
  return parentObj$$564.modeSTAT > 2 ? 255 : parentObj$$564.BGCHRCurrentBank[address$$56 & 2047]
};
GameBoyCore.prototype.VRAMCHRReadDMGCPU = function(parentObj$$565, address$$57) {
  return parentObj$$565.modeSTAT > 2 ? 255 : parentObj$$565.BGCHRBank1[address$$57 & 2047]
};
GameBoyCore.prototype.setCurrentMBC1ROMBank = function() {
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
      this.currentROMBank = this.ROMBank1offs % this.ROMBankEdge - 1 << 14
  }
};
GameBoyCore.prototype.setCurrentMBC2AND3ROMBank = function() {
  this.currentROMBank = Math.max(this.ROMBank1offs % this.ROMBankEdge - 1, 0) << 14
};
GameBoyCore.prototype.setCurrentMBC5ROMBank = function() {
  this.currentROMBank = this.ROMBank1offs % this.ROMBankEdge - 1 << 14
};
GameBoyCore.prototype.memoryWrite = function(address$$58, data$$32) {
  this.memoryWriter[address$$58](this, address$$58, data$$32)
};
GameBoyCore.prototype.memoryHighWrite = function(address$$59, data$$33) {
  this.memoryHighWriter[address$$59](this, address$$59, data$$33)
};
GameBoyCore.prototype.memoryWriteJumpCompile = function() {
  var index$$63 = 0;
  for(;index$$63 <= 65535;index$$63++) {
    if(index$$63 < 32768) {
      if(this.cMBC1) {
        if(index$$63 < 8192) {
          this.memoryWriter[index$$63] = this.MBCWriteEnable
        }else {
          if(index$$63 < 16384) {
            this.memoryWriter[index$$63] = this.MBC1WriteROMBank
          }else {
            if(index$$63 < 24576) {
              this.memoryWriter[index$$63] = this.MBC1WriteRAMBank
            }else {
              this.memoryWriter[index$$63] = this.MBC1WriteType
            }
          }
        }
      }else {
        if(this.cMBC2) {
          if(index$$63 < 4096) {
            this.memoryWriter[index$$63] = this.MBCWriteEnable
          }else {
            if(index$$63 >= 8448 && index$$63 < 8704) {
              this.memoryWriter[index$$63] = this.MBC2WriteROMBank
            }else {
              this.memoryWriter[index$$63] = this.cartIgnoreWrite
            }
          }
        }else {
          if(this.cMBC3) {
            if(index$$63 < 8192) {
              this.memoryWriter[index$$63] = this.MBCWriteEnable
            }else {
              if(index$$63 < 16384) {
                this.memoryWriter[index$$63] = this.MBC3WriteROMBank
              }else {
                if(index$$63 < 24576) {
                  this.memoryWriter[index$$63] = this.MBC3WriteRAMBank
                }else {
                  this.memoryWriter[index$$63] = this.MBC3WriteRTCLatch
                }
              }
            }
          }else {
            if(this.cMBC5 || this.cRUMBLE || this.cMBC7) {
              if(index$$63 < 8192) {
                this.memoryWriter[index$$63] = this.MBCWriteEnable
              }else {
                if(index$$63 < 12288) {
                  this.memoryWriter[index$$63] = this.MBC5WriteROMBankLow
                }else {
                  if(index$$63 < 16384) {
                    this.memoryWriter[index$$63] = this.MBC5WriteROMBankHigh
                  }else {
                    if(index$$63 < 24576) {
                      this.memoryWriter[index$$63] = this.cRUMBLE ? this.RUMBLEWriteRAMBank : this.MBC5WriteRAMBank
                    }else {
                      this.memoryWriter[index$$63] = this.cartIgnoreWrite
                    }
                  }
                }
              }
            }else {
              if(this.cHuC3) {
                if(index$$63 < 8192) {
                  this.memoryWriter[index$$63] = this.MBCWriteEnable
                }else {
                  if(index$$63 < 16384) {
                    this.memoryWriter[index$$63] = this.MBC3WriteROMBank
                  }else {
                    if(index$$63 < 24576) {
                      this.memoryWriter[index$$63] = this.HuC3WriteRAMBank
                    }else {
                      this.memoryWriter[index$$63] = this.cartIgnoreWrite
                    }
                  }
                }
              }else {
                this.memoryWriter[index$$63] = this.cartIgnoreWrite
              }
            }
          }
        }
      }
    }else {
      if(index$$63 < 36864) {
        this.memoryWriter[index$$63] = this.cGBC ? this.VRAMGBCDATAWrite : this.VRAMGBDATAWrite
      }else {
        if(index$$63 < 38912) {
          this.memoryWriter[index$$63] = this.cGBC ? this.VRAMGBCDATAWrite : this.VRAMGBDATAUpperWrite
        }else {
          if(index$$63 < 40960) {
            this.memoryWriter[index$$63] = this.cGBC ? this.VRAMGBCCHRMAPWrite : this.VRAMGBCHRMAPWrite
          }else {
            if(index$$63 < 49152) {
              if(this.numRAMBanks == 1 / 16 && index$$63 < 41472 || this.numRAMBanks >= 1) {
                if(!this.cMBC3) {
                  this.memoryWriter[index$$63] = this.memoryWriteMBCRAM
                }else {
                  this.memoryWriter[index$$63] = this.memoryWriteMBC3RAM
                }
              }else {
                this.memoryWriter[index$$63] = this.cartIgnoreWrite
              }
            }else {
              if(index$$63 < 57344) {
                if(this.cGBC && index$$63 >= 53248) {
                  this.memoryWriter[index$$63] = this.memoryWriteGBCRAM
                }else {
                  this.memoryWriter[index$$63] = this.memoryWriteNormal
                }
              }else {
                if(index$$63 < 65024) {
                  if(this.cGBC && index$$63 >= 61440) {
                    this.memoryWriter[index$$63] = this.memoryWriteECHOGBCRAM
                  }else {
                    this.memoryWriter[index$$63] = this.memoryWriteECHONormal
                  }
                }else {
                  if(index$$63 <= 65184) {
                    this.memoryWriter[index$$63] = this.memoryWriteOAMRAM
                  }else {
                    if(index$$63 < 65280) {
                      if(this.cGBC) {
                        this.memoryWriter[index$$63] = this.memoryWriteNormal
                      }else {
                        this.memoryWriter[index$$63] = this.cartIgnoreWrite
                      }
                    }else {
                      this.memoryWriter[index$$63] = this.memoryWriteNormal;
                      this.memoryHighWriter[index$$63 & 255] = this.memoryHighWriteNormal
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
  this.registerWriteJumpCompile()
};
GameBoyCore.prototype.MBCWriteEnable = function(parentObj$$566, address$$60, data$$34) {
  parentObj$$566.MBCRAMBanksEnabled = (data$$34 & 15) == 10
};
GameBoyCore.prototype.MBC1WriteROMBank = function(parentObj$$567, address$$61, data$$35) {
  parentObj$$567.ROMBank1offs = parentObj$$567.ROMBank1offs & 96 | data$$35 & 31;
  parentObj$$567.setCurrentMBC1ROMBank()
};
GameBoyCore.prototype.MBC1WriteRAMBank = function(parentObj$$568, address$$62, data$$36) {
  if(parentObj$$568.MBC1Mode) {
    parentObj$$568.currMBCRAMBank = data$$36 & 3;
    parentObj$$568.currMBCRAMBankPosition = (parentObj$$568.currMBCRAMBank << 13) - 40960
  }else {
    parentObj$$568.ROMBank1offs = (data$$36 & 3) << 5 | parentObj$$568.ROMBank1offs & 31;
    parentObj$$568.setCurrentMBC1ROMBank()
  }
};
GameBoyCore.prototype.MBC1WriteType = function(parentObj$$569, address$$63, data$$37) {
  parentObj$$569.MBC1Mode = (data$$37 & 1) == 1;
  if(parentObj$$569.MBC1Mode) {
    parentObj$$569.ROMBank1offs &= 31;
    parentObj$$569.setCurrentMBC1ROMBank()
  }else {
    parentObj$$569.currMBCRAMBank = 0;
    parentObj$$569.currMBCRAMBankPosition = -40960
  }
};
GameBoyCore.prototype.MBC2WriteROMBank = function(parentObj$$570, address$$64, data$$38) {
  parentObj$$570.ROMBank1offs = data$$38 & 15;
  parentObj$$570.setCurrentMBC2AND3ROMBank()
};
GameBoyCore.prototype.MBC3WriteROMBank = function(parentObj$$571, address$$65, data$$39) {
  parentObj$$571.ROMBank1offs = data$$39 & 127;
  parentObj$$571.setCurrentMBC2AND3ROMBank()
};
GameBoyCore.prototype.MBC3WriteRAMBank = function(parentObj$$572, address$$66, data$$40) {
  parentObj$$572.currMBCRAMBank = data$$40;
  if(data$$40 < 4) {
    parentObj$$572.currMBCRAMBankPosition = (parentObj$$572.currMBCRAMBank << 13) - 40960
  }
};
GameBoyCore.prototype.MBC3WriteRTCLatch = function(parentObj$$573, address$$67, data$$41) {
  if(data$$41 == 0) {
    parentObj$$573.RTCisLatched = false
  }else {
    if(!parentObj$$573.RTCisLatched) {
      parentObj$$573.RTCisLatched = true;
      parentObj$$573.latchedSeconds = parentObj$$573.RTCSeconds | 0;
      parentObj$$573.latchedMinutes = parentObj$$573.RTCMinutes;
      parentObj$$573.latchedHours = parentObj$$573.RTCHours;
      parentObj$$573.latchedLDays = parentObj$$573.RTCDays & 255;
      parentObj$$573.latchedHDays = parentObj$$573.RTCDays >> 8
    }
  }
};
GameBoyCore.prototype.MBC5WriteROMBankLow = function(parentObj$$574, address$$68, data$$42) {
  parentObj$$574.ROMBank1offs = parentObj$$574.ROMBank1offs & 256 | data$$42;
  parentObj$$574.setCurrentMBC5ROMBank()
};
GameBoyCore.prototype.MBC5WriteROMBankHigh = function(parentObj$$575, address$$69, data$$43) {
  parentObj$$575.ROMBank1offs = (data$$43 & 1) << 8 | parentObj$$575.ROMBank1offs & 255;
  parentObj$$575.setCurrentMBC5ROMBank()
};
GameBoyCore.prototype.MBC5WriteRAMBank = function(parentObj$$576, address$$70, data$$44) {
  parentObj$$576.currMBCRAMBank = data$$44 & 15;
  parentObj$$576.currMBCRAMBankPosition = (parentObj$$576.currMBCRAMBank << 13) - 40960
};
GameBoyCore.prototype.RUMBLEWriteRAMBank = function(parentObj$$577, address$$71, data$$45) {
  parentObj$$577.currMBCRAMBank = data$$45 & 3;
  parentObj$$577.currMBCRAMBankPosition = (parentObj$$577.currMBCRAMBank << 13) - 40960
};
GameBoyCore.prototype.HuC3WriteRAMBank = function(parentObj$$578, address$$72, data$$46) {
  parentObj$$578.currMBCRAMBank = data$$46 & 3;
  parentObj$$578.currMBCRAMBankPosition = (parentObj$$578.currMBCRAMBank << 13) - 40960
};
GameBoyCore.prototype.cartIgnoreWrite = function(parentObj$$579, address$$73, data$$47) {
};
GameBoyCore.prototype.memoryWriteNormal = function(parentObj$$580, address$$74, data$$48) {
  parentObj$$580.memory[address$$74] = data$$48
};
GameBoyCore.prototype.memoryHighWriteNormal = function(parentObj$$581, address$$75, data$$49) {
  parentObj$$581.memory[65280 | address$$75] = data$$49
};
GameBoyCore.prototype.memoryWriteMBCRAM = function(parentObj$$582, address$$76, data$$50) {
  if(parentObj$$582.MBCRAMBanksEnabled || settings[10]) {
    parentObj$$582.MBCRam[address$$76 + parentObj$$582.currMBCRAMBankPosition] = data$$50
  }
};
GameBoyCore.prototype.memoryWriteMBC3RAM = function(parentObj$$583, address$$77, data$$51) {
  if(parentObj$$583.MBCRAMBanksEnabled || settings[10]) {
    switch(parentObj$$583.currMBCRAMBank) {
      case 0:
      ;
      case 1:
      ;
      case 2:
      ;
      case 3:
        parentObj$$583.MBCRam[address$$77 + parentObj$$583.currMBCRAMBankPosition] = data$$51;
        break;
      case 8:
        if(data$$51 < 60) {
          parentObj$$583.RTCSeconds = data$$51
        }else {
          cout("(Bank #" + parentObj$$583.currMBCRAMBank + ") RTC write out of range: " + data$$51, 1)
        }
        break;
      case 9:
        if(data$$51 < 60) {
          parentObj$$583.RTCMinutes = data$$51
        }else {
          cout("(Bank #" + parentObj$$583.currMBCRAMBank + ") RTC write out of range: " + data$$51, 1)
        }
        break;
      case 10:
        if(data$$51 < 24) {
          parentObj$$583.RTCHours = data$$51
        }else {
          cout("(Bank #" + parentObj$$583.currMBCRAMBank + ") RTC write out of range: " + data$$51, 1)
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
        cout("Invalid MBC3 bank address selected: " + parentObj$$583.currMBCRAMBank, 0)
    }
  }
};
GameBoyCore.prototype.memoryWriteGBCRAM = function(parentObj$$584, address$$78, data$$52) {
  parentObj$$584.GBCMemory[address$$78 + parentObj$$584.gbcRamBankPosition] = data$$52
};
GameBoyCore.prototype.memoryWriteOAMRAM = function(parentObj$$585, address$$79, data$$53) {
  if(parentObj$$585.modeSTAT < 2) {
    if(parentObj$$585.memory[address$$79] != data$$53) {
      parentObj$$585.graphicsJIT();
      parentObj$$585.memory[address$$79] = data$$53
    }
  }
};
GameBoyCore.prototype.memoryWriteECHOGBCRAM = function(parentObj$$586, address$$80, data$$54) {
  parentObj$$586.GBCMemory[address$$80 + parentObj$$586.gbcRamBankPositionECHO] = data$$54
};
GameBoyCore.prototype.memoryWriteECHONormal = function(parentObj$$587, address$$81, data$$55) {
  parentObj$$587.memory[address$$81 - 8192] = data$$55
};
GameBoyCore.prototype.VRAMGBDATAWrite = function(parentObj$$588, address$$82, data$$56) {
  if(parentObj$$588.modeSTAT < 3) {
    if(parentObj$$588.memory[address$$82] != data$$56) {
      parentObj$$588.graphicsJIT();
      parentObj$$588.memory[address$$82] = data$$56;
      parentObj$$588.generateGBOAMTileLine(address$$82)
    }
  }
};
GameBoyCore.prototype.VRAMGBDATAUpperWrite = function(parentObj$$589, address$$83, data$$57) {
  if(parentObj$$589.modeSTAT < 3) {
    if(parentObj$$589.memory[address$$83] != data$$57) {
      parentObj$$589.graphicsJIT();
      parentObj$$589.memory[address$$83] = data$$57;
      parentObj$$589.generateGBTileLine(address$$83)
    }
  }
};
GameBoyCore.prototype.VRAMGBCDATAWrite = function(parentObj$$590, address$$84, data$$58) {
  if(parentObj$$590.modeSTAT < 3) {
    if(parentObj$$590.currVRAMBank == 0) {
      if(parentObj$$590.memory[address$$84] != data$$58) {
        parentObj$$590.graphicsJIT();
        parentObj$$590.memory[address$$84] = data$$58;
        parentObj$$590.generateGBCTileLineBank1(address$$84)
      }
    }else {
      address$$84 &= 8191;
      if(parentObj$$590.VRAM[address$$84] != data$$58) {
        parentObj$$590.graphicsJIT();
        parentObj$$590.VRAM[address$$84] = data$$58;
        parentObj$$590.generateGBCTileLineBank2(address$$84)
      }
    }
  }
};
GameBoyCore.prototype.VRAMGBCHRMAPWrite = function(parentObj$$591, address$$85, data$$59) {
  if(parentObj$$591.modeSTAT < 3) {
    address$$85 &= 2047;
    if(parentObj$$591.BGCHRBank1[address$$85] != data$$59) {
      parentObj$$591.graphicsJIT();
      parentObj$$591.BGCHRBank1[address$$85] = data$$59
    }
  }
};
GameBoyCore.prototype.VRAMGBCCHRMAPWrite = function(parentObj$$592, address$$86, data$$60) {
  if(parentObj$$592.modeSTAT < 3) {
    address$$86 &= 2047;
    if(parentObj$$592.BGCHRCurrentBank[address$$86] != data$$60) {
      parentObj$$592.graphicsJIT();
      parentObj$$592.BGCHRCurrentBank[address$$86] = data$$60
    }
  }
};
GameBoyCore.prototype.DMAWrite = function(tilesToTransfer) {
  if(!this.halt) {
    this.CPUTicks += 4 | tilesToTransfer << 5 << this.doubleSpeedShifter
  }
  var source$$1 = this.memory[65361] << 8 | this.memory[65362];
  var destination = this.memory[65363] << 8 | this.memory[65364];
  var memoryReader = this.memoryReader;
  this.graphicsJIT();
  var memory = this.memory;
  if(this.currVRAMBank == 0) {
    do {
      if(destination < 6144) {
        memory[32768 | destination] = memoryReader[source$$1](this, source$$1++);
        memory[32769 | destination] = memoryReader[source$$1](this, source$$1++);
        memory[32770 | destination] = memoryReader[source$$1](this, source$$1++);
        memory[32771 | destination] = memoryReader[source$$1](this, source$$1++);
        memory[32772 | destination] = memoryReader[source$$1](this, source$$1++);
        memory[32773 | destination] = memoryReader[source$$1](this, source$$1++);
        memory[32774 | destination] = memoryReader[source$$1](this, source$$1++);
        memory[32775 | destination] = memoryReader[source$$1](this, source$$1++);
        memory[32776 | destination] = memoryReader[source$$1](this, source$$1++);
        memory[32777 | destination] = memoryReader[source$$1](this, source$$1++);
        memory[32778 | destination] = memoryReader[source$$1](this, source$$1++);
        memory[32779 | destination] = memoryReader[source$$1](this, source$$1++);
        memory[32780 | destination] = memoryReader[source$$1](this, source$$1++);
        memory[32781 | destination] = memoryReader[source$$1](this, source$$1++);
        memory[32782 | destination] = memoryReader[source$$1](this, source$$1++);
        memory[32783 | destination] = memoryReader[source$$1](this, source$$1++);
        this.generateGBCTileBank1(destination);
        destination += 16
      }else {
        destination &= 2032;
        this.BGCHRBank1[destination++] = memoryReader[source$$1](this, source$$1++);
        this.BGCHRBank1[destination++] = memoryReader[source$$1](this, source$$1++);
        this.BGCHRBank1[destination++] = memoryReader[source$$1](this, source$$1++);
        this.BGCHRBank1[destination++] = memoryReader[source$$1](this, source$$1++);
        this.BGCHRBank1[destination++] = memoryReader[source$$1](this, source$$1++);
        this.BGCHRBank1[destination++] = memoryReader[source$$1](this, source$$1++);
        this.BGCHRBank1[destination++] = memoryReader[source$$1](this, source$$1++);
        this.BGCHRBank1[destination++] = memoryReader[source$$1](this, source$$1++);
        this.BGCHRBank1[destination++] = memoryReader[source$$1](this, source$$1++);
        this.BGCHRBank1[destination++] = memoryReader[source$$1](this, source$$1++);
        this.BGCHRBank1[destination++] = memoryReader[source$$1](this, source$$1++);
        this.BGCHRBank1[destination++] = memoryReader[source$$1](this, source$$1++);
        this.BGCHRBank1[destination++] = memoryReader[source$$1](this, source$$1++);
        this.BGCHRBank1[destination++] = memoryReader[source$$1](this, source$$1++);
        this.BGCHRBank1[destination++] = memoryReader[source$$1](this, source$$1++);
        this.BGCHRBank1[destination++] = memoryReader[source$$1](this, source$$1++);
        destination = destination + 6144 & 8176
      }
      source$$1 &= 65520;
      --tilesToTransfer
    }while(tilesToTransfer > 0)
  }else {
    var VRAM = this.VRAM;
    do {
      if(destination < 6144) {
        VRAM[destination] = memoryReader[source$$1](this, source$$1++);
        VRAM[destination | 1] = memoryReader[source$$1](this, source$$1++);
        VRAM[destination | 2] = memoryReader[source$$1](this, source$$1++);
        VRAM[destination | 3] = memoryReader[source$$1](this, source$$1++);
        VRAM[destination | 4] = memoryReader[source$$1](this, source$$1++);
        VRAM[destination | 5] = memoryReader[source$$1](this, source$$1++);
        VRAM[destination | 6] = memoryReader[source$$1](this, source$$1++);
        VRAM[destination | 7] = memoryReader[source$$1](this, source$$1++);
        VRAM[destination | 8] = memoryReader[source$$1](this, source$$1++);
        VRAM[destination | 9] = memoryReader[source$$1](this, source$$1++);
        VRAM[destination | 10] = memoryReader[source$$1](this, source$$1++);
        VRAM[destination | 11] = memoryReader[source$$1](this, source$$1++);
        VRAM[destination | 12] = memoryReader[source$$1](this, source$$1++);
        VRAM[destination | 13] = memoryReader[source$$1](this, source$$1++);
        VRAM[destination | 14] = memoryReader[source$$1](this, source$$1++);
        VRAM[destination | 15] = memoryReader[source$$1](this, source$$1++);
        this.generateGBCTileBank2(destination);
        destination += 16
      }else {
        destination &= 2032;
        this.BGCHRBank2[destination++] = memoryReader[source$$1](this, source$$1++);
        this.BGCHRBank2[destination++] = memoryReader[source$$1](this, source$$1++);
        this.BGCHRBank2[destination++] = memoryReader[source$$1](this, source$$1++);
        this.BGCHRBank2[destination++] = memoryReader[source$$1](this, source$$1++);
        this.BGCHRBank2[destination++] = memoryReader[source$$1](this, source$$1++);
        this.BGCHRBank2[destination++] = memoryReader[source$$1](this, source$$1++);
        this.BGCHRBank2[destination++] = memoryReader[source$$1](this, source$$1++);
        this.BGCHRBank2[destination++] = memoryReader[source$$1](this, source$$1++);
        this.BGCHRBank2[destination++] = memoryReader[source$$1](this, source$$1++);
        this.BGCHRBank2[destination++] = memoryReader[source$$1](this, source$$1++);
        this.BGCHRBank2[destination++] = memoryReader[source$$1](this, source$$1++);
        this.BGCHRBank2[destination++] = memoryReader[source$$1](this, source$$1++);
        this.BGCHRBank2[destination++] = memoryReader[source$$1](this, source$$1++);
        this.BGCHRBank2[destination++] = memoryReader[source$$1](this, source$$1++);
        this.BGCHRBank2[destination++] = memoryReader[source$$1](this, source$$1++);
        this.BGCHRBank2[destination++] = memoryReader[source$$1](this, source$$1++);
        destination = destination + 6144 & 8176
      }
      source$$1 &= 65520;
      --tilesToTransfer
    }while(tilesToTransfer > 0)
  }
  memory[65361] = source$$1 >> 8;
  memory[65362] = source$$1 & 240;
  memory[65363] = destination >> 8;
  memory[65364] = destination & 240
};
GameBoyCore.prototype.registerWriteJumpCompile = function() {
  this.memoryHighWriter[0] = this.memoryWriter[65280] = function(parentObj$$593, address$$87, data$$61) {
    parentObj$$593.memory[65280] = data$$61 & 48 | ((data$$61 & 32) == 0 ? parentObj$$593.JoyPad >> 4 : 15) & ((data$$61 & 16) == 0 ? parentObj$$593.JoyPad & 15 : 15)
  };
  this.memoryHighWriter[1] = this.memoryWriter[65281] = function(parentObj$$594, address$$88, data$$62) {
    if(parentObj$$594.memory[65282] < 128) {
      parentObj$$594.memory[65281] = data$$62
    }
  };
  this.memoryHighWriter[4] = this.memoryWriter[65284] = function(parentObj$$595, address$$89, data$$63) {
    parentObj$$595.DIVTicks &= 255;
    parentObj$$595.memory[65284] = 0
  };
  this.memoryHighWriter[5] = this.memoryWriter[65285] = function(parentObj$$596, address$$90, data$$64) {
    parentObj$$596.memory[65285] = data$$64
  };
  this.memoryHighWriter[6] = this.memoryWriter[65286] = function(parentObj$$597, address$$91, data$$65) {
    parentObj$$597.memory[65286] = data$$65
  };
  this.memoryHighWriter[7] = this.memoryWriter[65287] = function(parentObj$$598, address$$92, data$$66) {
    parentObj$$598.memory[65287] = data$$66 & 7;
    parentObj$$598.TIMAEnabled = (data$$66 & 4) == 4;
    parentObj$$598.TACClocker = Math.pow(4, (data$$66 & 3) != 0 ? data$$66 & 3 : 4) << 2
  };
  this.memoryHighWriter[15] = this.memoryWriter[65295] = function(parentObj$$599, address$$93, data$$67) {
    parentObj$$599.interruptsRequested = data$$67;
    parentObj$$599.checkIRQMatching()
  };
  this.memoryHighWriter[16] = this.memoryWriter[65296] = function(parentObj$$600, address$$94, data$$68) {
    if(parentObj$$600.soundMasterEnabled) {
      parentObj$$600.audioJIT();
      if(parentObj$$600.channel1decreaseSweep && (data$$68 & 8) == 0) {
        if(parentObj$$600.channel1numSweep != parentObj$$600.channel1frequencySweepDivider) {
          parentObj$$600.channel1SweepFault = true
        }
      }
      parentObj$$600.channel1lastTimeSweep = (data$$68 & 112) >> 4;
      parentObj$$600.channel1frequencySweepDivider = data$$68 & 7;
      parentObj$$600.channel1decreaseSweep = (data$$68 & 8) == 8;
      parentObj$$600.memory[65296] = data$$68;
      parentObj$$600.channel1EnableCheck()
    }
  };
  this.memoryHighWriter[17] = this.memoryWriter[65297] = function(parentObj$$601, address$$95, data$$69) {
    if(parentObj$$601.soundMasterEnabled || !parentObj$$601.cGBC) {
      if(parentObj$$601.soundMasterEnabled) {
        parentObj$$601.audioJIT()
      }else {
        data$$69 &= 63
      }
      parentObj$$601.channel1CachedDuty = parentObj$$601.dutyLookup[data$$69 >> 6];
      parentObj$$601.channel1totalLength = 64 - (data$$69 & 63);
      parentObj$$601.memory[65297] = data$$69 & 192;
      parentObj$$601.channel1EnableCheck()
    }
  };
  this.memoryHighWriter[18] = this.memoryWriter[65298] = function(parentObj$$602, address$$96, data$$70) {
    if(parentObj$$602.soundMasterEnabled) {
      parentObj$$602.audioJIT();
      if(parentObj$$602.channel1Enabled && parentObj$$602.channel1envelopeSweeps == 0) {
        if(((parentObj$$602.memory[65298] ^ data$$70) & 8) == 8) {
          if((parentObj$$602.memory[65298] & 8) == 0) {
            if((parentObj$$602.memory[65298] & 7) == 7) {
              parentObj$$602.channel1envelopeVolume += 2
            }else {
              ++parentObj$$602.channel1envelopeVolume
            }
          }
          parentObj$$602.channel1envelopeVolume = 16 - parentObj$$602.channel1envelopeVolume & 15
        }else {
          if((parentObj$$602.memory[65298] & 15) == 8) {
            parentObj$$602.channel1envelopeVolume = 1 + parentObj$$602.channel1envelopeVolume & 15
          }
        }
        parentObj$$602.channel1OutputLevelCache()
      }
      parentObj$$602.channel1envelopeType = (data$$70 & 8) == 8;
      parentObj$$602.memory[65298] = data$$70;
      parentObj$$602.channel1VolumeEnableCheck()
    }
  };
  this.memoryHighWriter[19] = this.memoryWriter[65299] = function(parentObj$$603, address$$97, data$$71) {
    if(parentObj$$603.soundMasterEnabled) {
      parentObj$$603.audioJIT();
      parentObj$$603.channel1frequency = parentObj$$603.channel1frequency & 1792 | data$$71;
      parentObj$$603.channel1FrequencyTracker = 2048 - parentObj$$603.channel1frequency << 2;
      parentObj$$603.memory[65299] = data$$71
    }
  };
  this.memoryHighWriter[20] = this.memoryWriter[65300] = function(parentObj$$604, address$$98, data$$72) {
    if(parentObj$$604.soundMasterEnabled) {
      parentObj$$604.audioJIT();
      parentObj$$604.channel1consecutive = (data$$72 & 64) == 0;
      parentObj$$604.channel1frequency = (data$$72 & 7) << 8 | parentObj$$604.channel1frequency & 255;
      parentObj$$604.channel1FrequencyTracker = 2048 - parentObj$$604.channel1frequency << 2;
      if(data$$72 > 127) {
        parentObj$$604.channel1timeSweep = parentObj$$604.channel1lastTimeSweep;
        parentObj$$604.channel1numSweep = parentObj$$604.channel1frequencySweepDivider;
        var nr12 = parentObj$$604.memory[65298];
        parentObj$$604.channel1envelopeVolume = nr12 >> 4;
        parentObj$$604.channel1OutputLevelCache();
        parentObj$$604.channel1envelopeSweepsLast = (nr12 & 7) - 1;
        if(parentObj$$604.channel1totalLength == 0) {
          parentObj$$604.channel1totalLength = 64
        }
        if(parentObj$$604.channel1lastTimeSweep > 0 || parentObj$$604.channel1frequencySweepDivider > 0) {
          parentObj$$604.memory[65318] |= 1
        }else {
          parentObj$$604.memory[65318] &= 254
        }
        if((data$$72 & 64) == 64) {
          parentObj$$604.memory[65318] |= 1
        }
        parentObj$$604.channel1ShadowFrequency = parentObj$$604.channel1frequency;
        parentObj$$604.channel1SweepFault = false;
        parentObj$$604.runAudioSweep()
      }
      parentObj$$604.channel1EnableCheck();
      parentObj$$604.memory[65300] = data$$72 & 64
    }
  };
  this.memoryHighWriter[22] = this.memoryWriter[65302] = function(parentObj$$605, address$$99, data$$73) {
    if(parentObj$$605.soundMasterEnabled || !parentObj$$605.cGBC) {
      if(parentObj$$605.soundMasterEnabled) {
        parentObj$$605.audioJIT()
      }else {
        data$$73 &= 63
      }
      parentObj$$605.channel2CachedDuty = parentObj$$605.dutyLookup[data$$73 >> 6];
      parentObj$$605.channel2totalLength = 64 - (data$$73 & 63);
      parentObj$$605.memory[65302] = data$$73 & 192;
      parentObj$$605.channel2EnableCheck()
    }
  };
  this.memoryHighWriter[23] = this.memoryWriter[65303] = function(parentObj$$606, address$$100, data$$74) {
    if(parentObj$$606.soundMasterEnabled) {
      parentObj$$606.audioJIT();
      if(parentObj$$606.channel2Enabled && parentObj$$606.channel2envelopeSweeps == 0) {
        if(((parentObj$$606.memory[65303] ^ data$$74) & 8) == 8) {
          if((parentObj$$606.memory[65303] & 8) == 0) {
            if((parentObj$$606.memory[65303] & 7) == 7) {
              parentObj$$606.channel2envelopeVolume += 2
            }else {
              ++parentObj$$606.channel2envelopeVolume
            }
          }
          parentObj$$606.channel2envelopeVolume = 16 - parentObj$$606.channel2envelopeVolume & 15
        }else {
          if((parentObj$$606.memory[65303] & 15) == 8) {
            parentObj$$606.channel2envelopeVolume = 1 + parentObj$$606.channel2envelopeVolume & 15
          }
        }
        parentObj$$606.channel2OutputLevelCache()
      }
      parentObj$$606.channel2envelopeType = (data$$74 & 8) == 8;
      parentObj$$606.memory[65303] = data$$74;
      parentObj$$606.channel2VolumeEnableCheck()
    }
  };
  this.memoryHighWriter[24] = this.memoryWriter[65304] = function(parentObj$$607, address$$101, data$$75) {
    if(parentObj$$607.soundMasterEnabled) {
      parentObj$$607.audioJIT();
      parentObj$$607.channel2frequency = parentObj$$607.channel2frequency & 1792 | data$$75;
      parentObj$$607.channel2FrequencyTracker = 2048 - parentObj$$607.channel2frequency << 2;
      parentObj$$607.memory[65304] = data$$75
    }
  };
  this.memoryHighWriter[25] = this.memoryWriter[65305] = function(parentObj$$608, address$$102, data$$76) {
    if(parentObj$$608.soundMasterEnabled) {
      parentObj$$608.audioJIT();
      if(data$$76 > 127) {
        var nr22 = parentObj$$608.memory[65303];
        parentObj$$608.channel2envelopeVolume = nr22 >> 4;
        parentObj$$608.channel2OutputLevelCache();
        parentObj$$608.channel2envelopeSweepsLast = (nr22 & 7) - 1;
        if(parentObj$$608.channel2totalLength == 0) {
          parentObj$$608.channel2totalLength = 64
        }
        if((data$$76 & 64) == 64) {
          parentObj$$608.memory[65318] |= 2
        }
      }
      parentObj$$608.channel2consecutive = (data$$76 & 64) == 0;
      parentObj$$608.channel2frequency = (data$$76 & 7) << 8 | parentObj$$608.channel2frequency & 255;
      parentObj$$608.channel2FrequencyTracker = 2048 - parentObj$$608.channel2frequency << 2;
      parentObj$$608.memory[65305] = data$$76 & 64;
      parentObj$$608.channel2EnableCheck()
    }
  };
  this.memoryHighWriter[26] = this.memoryWriter[65306] = function(parentObj$$609, address$$103, data$$77) {
    if(parentObj$$609.soundMasterEnabled) {
      parentObj$$609.audioJIT();
      if(!parentObj$$609.channel3canPlay && data$$77 >= 128) {
        parentObj$$609.channel3lastSampleLookup = 0;
        parentObj$$609.channel3UpdateCache()
      }
      parentObj$$609.channel3canPlay = data$$77 > 127;
      if(parentObj$$609.channel3canPlay && parentObj$$609.memory[65306] > 127 && !parentObj$$609.channel3consecutive) {
        parentObj$$609.memory[65318] |= 4
      }
      parentObj$$609.memory[65306] = data$$77 & 128
    }
  };
  this.memoryHighWriter[27] = this.memoryWriter[65307] = function(parentObj$$610, address$$104, data$$78) {
    if(parentObj$$610.soundMasterEnabled || !parentObj$$610.cGBC) {
      if(parentObj$$610.soundMasterEnabled) {
        parentObj$$610.audioJIT()
      }
      parentObj$$610.channel3totalLength = 256 - data$$78;
      parentObj$$610.memory[65307] = data$$78;
      parentObj$$610.channel3EnableCheck()
    }
  };
  this.memoryHighWriter[28] = this.memoryWriter[65308] = function(parentObj$$611, address$$105, data$$79) {
    if(parentObj$$611.soundMasterEnabled) {
      parentObj$$611.audioJIT();
      data$$79 &= 96;
      parentObj$$611.memory[65308] = data$$79;
      parentObj$$611.channel3patternType = data$$79 == 0 ? 4 : (data$$79 >> 5) - 1
    }
  };
  this.memoryHighWriter[29] = this.memoryWriter[65309] = function(parentObj$$612, address$$106, data$$80) {
    if(parentObj$$612.soundMasterEnabled) {
      parentObj$$612.audioJIT();
      parentObj$$612.channel3frequency = parentObj$$612.channel3frequency & 1792 | data$$80;
      parentObj$$612.channel3FrequencyPeriod = 2048 - parentObj$$612.channel3frequency << 1;
      parentObj$$612.memory[65309] = data$$80
    }
  };
  this.memoryHighWriter[30] = this.memoryWriter[65310] = function(parentObj$$613, address$$107, data$$81) {
    if(parentObj$$613.soundMasterEnabled) {
      parentObj$$613.audioJIT();
      if(data$$81 > 127) {
        if(parentObj$$613.channel3totalLength == 0) {
          parentObj$$613.channel3totalLength = 256
        }
        parentObj$$613.channel3lastSampleLookup = 0;
        if((data$$81 & 64) == 64) {
          parentObj$$613.memory[65318] |= 4
        }
      }
      parentObj$$613.channel3consecutive = (data$$81 & 64) == 0;
      parentObj$$613.channel3frequency = (data$$81 & 7) << 8 | parentObj$$613.channel3frequency & 255;
      parentObj$$613.channel3FrequencyPeriod = 2048 - parentObj$$613.channel3frequency << 1;
      parentObj$$613.memory[65310] = data$$81 & 64;
      parentObj$$613.channel3EnableCheck()
    }
  };
  this.memoryHighWriter[32] = this.memoryWriter[65312] = function(parentObj$$614, address$$108, data$$82) {
    if(parentObj$$614.soundMasterEnabled || !parentObj$$614.cGBC) {
      if(parentObj$$614.soundMasterEnabled) {
        parentObj$$614.audioJIT()
      }
      parentObj$$614.channel4totalLength = 64 - (data$$82 & 63);
      parentObj$$614.memory[65312] = data$$82 | 192;
      parentObj$$614.channel4EnableCheck()
    }
  };
  this.memoryHighWriter[33] = this.memoryWriter[65313] = function(parentObj$$615, address$$109, data$$83) {
    if(parentObj$$615.soundMasterEnabled) {
      parentObj$$615.audioJIT();
      if(parentObj$$615.channel4Enabled && parentObj$$615.channel4envelopeSweeps == 0) {
        if(((parentObj$$615.memory[65313] ^ data$$83) & 8) == 8) {
          if((parentObj$$615.memory[65313] & 8) == 0) {
            if((parentObj$$615.memory[65313] & 7) == 7) {
              parentObj$$615.channel4envelopeVolume += 2
            }else {
              ++parentObj$$615.channel4envelopeVolume
            }
          }
          parentObj$$615.channel4envelopeVolume = 16 - parentObj$$615.channel4envelopeVolume & 15
        }else {
          if((parentObj$$615.memory[65313] & 15) == 8) {
            parentObj$$615.channel4envelopeVolume = 1 + parentObj$$615.channel4envelopeVolume & 15
          }
        }
        parentObj$$615.channel4currentVolume = parentObj$$615.channel4envelopeVolume << parentObj$$615.channel4VolumeShifter
      }
      parentObj$$615.channel4envelopeType = (data$$83 & 8) == 8;
      parentObj$$615.memory[65313] = data$$83;
      parentObj$$615.channel4UpdateCache();
      parentObj$$615.channel4VolumeEnableCheck()
    }
  };
  this.memoryHighWriter[34] = this.memoryWriter[65314] = function(parentObj$$616, address$$110, data$$84) {
    if(parentObj$$616.soundMasterEnabled) {
      parentObj$$616.audioJIT();
      parentObj$$616.channel4FrequencyPeriod = Math.max((data$$84 & 7) << 4, 8) << (data$$84 >> 4);
      var bitWidth = data$$84 & 8;
      if(bitWidth == 8 && parentObj$$616.channel4BitRange == 32767 || bitWidth == 0 && parentObj$$616.channel4BitRange == 127) {
        parentObj$$616.channel4lastSampleLookup = 0;
        parentObj$$616.channel4BitRange = bitWidth == 8 ? 127 : 32767;
        parentObj$$616.channel4VolumeShifter = bitWidth == 8 ? 7 : 15;
        parentObj$$616.channel4currentVolume = parentObj$$616.channel4envelopeVolume << parentObj$$616.channel4VolumeShifter;
        parentObj$$616.noiseSampleTable = bitWidth == 8 ? parentObj$$616.LSFR7Table : parentObj$$616.LSFR15Table
      }
      parentObj$$616.memory[65314] = data$$84;
      parentObj$$616.channel4UpdateCache()
    }
  };
  this.memoryHighWriter[35] = this.memoryWriter[65315] = function(parentObj$$617, address$$111, data$$85) {
    if(parentObj$$617.soundMasterEnabled) {
      parentObj$$617.audioJIT();
      parentObj$$617.memory[65315] = data$$85;
      parentObj$$617.channel4consecutive = (data$$85 & 64) == 0;
      if(data$$85 > 127) {
        var nr42 = parentObj$$617.memory[65313];
        parentObj$$617.channel4envelopeVolume = nr42 >> 4;
        parentObj$$617.channel4currentVolume = parentObj$$617.channel4envelopeVolume << parentObj$$617.channel4VolumeShifter;
        parentObj$$617.channel4envelopeSweepsLast = (nr42 & 7) - 1;
        if(parentObj$$617.channel4totalLength == 0) {
          parentObj$$617.channel4totalLength = 64
        }
        if((data$$85 & 64) == 64) {
          parentObj$$617.memory[65318] |= 8
        }
      }
      parentObj$$617.channel4EnableCheck()
    }
  };
  this.memoryHighWriter[36] = this.memoryWriter[65316] = function(parentObj$$618, address$$112, data$$86) {
    if(parentObj$$618.soundMasterEnabled && parentObj$$618.memory[65316] != data$$86) {
      parentObj$$618.audioJIT();
      parentObj$$618.memory[65316] = data$$86;
      parentObj$$618.VinLeftChannelMasterVolume = (data$$86 >> 4 & 7) + 1;
      parentObj$$618.VinRightChannelMasterVolume = (data$$86 & 7) + 1;
      parentObj$$618.mixerOutputLevelCache()
    }
  };
  this.memoryHighWriter[37] = this.memoryWriter[65317] = function(parentObj$$619, address$$113, data$$87) {
    if(parentObj$$619.soundMasterEnabled && parentObj$$619.memory[65317] != data$$87) {
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
      parentObj$$619.channel4OutputLevelCache()
    }
  };
  this.memoryHighWriter[38] = this.memoryWriter[65318] = function(parentObj$$620, address$$114, data$$88) {
    parentObj$$620.audioJIT();
    if(!parentObj$$620.soundMasterEnabled && data$$88 > 127) {
      parentObj$$620.memory[65318] = 128;
      parentObj$$620.soundMasterEnabled = true;
      parentObj$$620.initializeAudioStartState()
    }else {
      if(parentObj$$620.soundMasterEnabled && data$$88 < 128) {
        parentObj$$620.memory[65318] = 0;
        parentObj$$620.soundMasterEnabled = false;
        var index$$64 = 65296;
        for(;index$$64 < 65318;index$$64++) {
          parentObj$$620.memoryWriter[index$$64](parentObj$$620, index$$64, 0)
        }
      }
    }
  };
  this.memoryHighWriter[39] = this.memoryWriter[65319] = this.cartIgnoreWrite;
  this.memoryHighWriter[40] = this.memoryWriter[65320] = this.cartIgnoreWrite;
  this.memoryHighWriter[41] = this.memoryWriter[65321] = this.cartIgnoreWrite;
  this.memoryHighWriter[42] = this.memoryWriter[65322] = this.cartIgnoreWrite;
  this.memoryHighWriter[43] = this.memoryWriter[65323] = this.cartIgnoreWrite;
  this.memoryHighWriter[44] = this.memoryWriter[65324] = this.cartIgnoreWrite;
  this.memoryHighWriter[45] = this.memoryWriter[65325] = this.cartIgnoreWrite;
  this.memoryHighWriter[46] = this.memoryWriter[65326] = this.cartIgnoreWrite;
  this.memoryHighWriter[47] = this.memoryWriter[65327] = this.cartIgnoreWrite;
  this.memoryHighWriter[48] = this.memoryWriter[65328] = function(parentObj$$621, address$$115, data$$89) {
    parentObj$$621.channel3WriteRAM(0, data$$89)
  };
  this.memoryHighWriter[49] = this.memoryWriter[65329] = function(parentObj$$622, address$$116, data$$90) {
    parentObj$$622.channel3WriteRAM(1, data$$90)
  };
  this.memoryHighWriter[50] = this.memoryWriter[65330] = function(parentObj$$623, address$$117, data$$91) {
    parentObj$$623.channel3WriteRAM(2, data$$91)
  };
  this.memoryHighWriter[51] = this.memoryWriter[65331] = function(parentObj$$624, address$$118, data$$92) {
    parentObj$$624.channel3WriteRAM(3, data$$92)
  };
  this.memoryHighWriter[52] = this.memoryWriter[65332] = function(parentObj$$625, address$$119, data$$93) {
    parentObj$$625.channel3WriteRAM(4, data$$93)
  };
  this.memoryHighWriter[53] = this.memoryWriter[65333] = function(parentObj$$626, address$$120, data$$94) {
    parentObj$$626.channel3WriteRAM(5, data$$94)
  };
  this.memoryHighWriter[54] = this.memoryWriter[65334] = function(parentObj$$627, address$$121, data$$95) {
    parentObj$$627.channel3WriteRAM(6, data$$95)
  };
  this.memoryHighWriter[55] = this.memoryWriter[65335] = function(parentObj$$628, address$$122, data$$96) {
    parentObj$$628.channel3WriteRAM(7, data$$96)
  };
  this.memoryHighWriter[56] = this.memoryWriter[65336] = function(parentObj$$629, address$$123, data$$97) {
    parentObj$$629.channel3WriteRAM(8, data$$97)
  };
  this.memoryHighWriter[57] = this.memoryWriter[65337] = function(parentObj$$630, address$$124, data$$98) {
    parentObj$$630.channel3WriteRAM(9, data$$98)
  };
  this.memoryHighWriter[58] = this.memoryWriter[65338] = function(parentObj$$631, address$$125, data$$99) {
    parentObj$$631.channel3WriteRAM(10, data$$99)
  };
  this.memoryHighWriter[59] = this.memoryWriter[65339] = function(parentObj$$632, address$$126, data$$100) {
    parentObj$$632.channel3WriteRAM(11, data$$100)
  };
  this.memoryHighWriter[60] = this.memoryWriter[65340] = function(parentObj$$633, address$$127, data$$101) {
    parentObj$$633.channel3WriteRAM(12, data$$101)
  };
  this.memoryHighWriter[61] = this.memoryWriter[65341] = function(parentObj$$634, address$$128, data$$102) {
    parentObj$$634.channel3WriteRAM(13, data$$102)
  };
  this.memoryHighWriter[62] = this.memoryWriter[65342] = function(parentObj$$635, address$$129, data$$103) {
    parentObj$$635.channel3WriteRAM(14, data$$103)
  };
  this.memoryHighWriter[63] = this.memoryWriter[65343] = function(parentObj$$636, address$$130, data$$104) {
    parentObj$$636.channel3WriteRAM(15, data$$104)
  };
  this.memoryHighWriter[66] = this.memoryWriter[65346] = function(parentObj$$637, address$$131, data$$105) {
    if(parentObj$$637.backgroundY != data$$105) {
      parentObj$$637.midScanLineJIT();
      parentObj$$637.backgroundY = data$$105
    }
  };
  this.memoryHighWriter[67] = this.memoryWriter[65347] = function(parentObj$$638, address$$132, data$$106) {
    if(parentObj$$638.backgroundX != data$$106) {
      parentObj$$638.midScanLineJIT();
      parentObj$$638.backgroundX = data$$106
    }
  };
  this.memoryHighWriter[68] = this.memoryWriter[65348] = function(parentObj$$639, address$$133, data$$107) {
    if(parentObj$$639.LCDisOn) {
      parentObj$$639.modeSTAT = 2;
      parentObj$$639.midScanlineOffset = -1;
      parentObj$$639.totalLinesPassed = parentObj$$639.currentX = parentObj$$639.queuedScanLines = parentObj$$639.lastUnrenderedLine = parentObj$$639.LCDTicks = parentObj$$639.STATTracker = parentObj$$639.actualScanLine = parentObj$$639.memory[65348] = 0
    }
  };
  this.memoryHighWriter[69] = this.memoryWriter[65349] = function(parentObj$$640, address$$134, data$$108) {
    if(parentObj$$640.memory[65349] != data$$108) {
      parentObj$$640.memory[65349] = data$$108;
      if(parentObj$$640.LCDisOn) {
        parentObj$$640.matchLYC()
      }
    }
  };
  this.memoryHighWriter[74] = this.memoryWriter[65354] = function(parentObj$$641, address$$135, data$$109) {
    if(parentObj$$641.windowY != data$$109) {
      parentObj$$641.midScanLineJIT();
      parentObj$$641.windowY = data$$109
    }
  };
  this.memoryHighWriter[75] = this.memoryWriter[65355] = function(parentObj$$642, address$$136, data$$110) {
    if(parentObj$$642.memory[65355] != data$$110) {
      parentObj$$642.midScanLineJIT();
      parentObj$$642.memory[65355] = data$$110;
      parentObj$$642.windowX = data$$110 - 7
    }
  };
  this.memoryHighWriter[114] = this.memoryWriter[65394] = function(parentObj$$643, address$$137, data$$111) {
    parentObj$$643.memory[65394] = data$$111
  };
  this.memoryHighWriter[115] = this.memoryWriter[65395] = function(parentObj$$644, address$$138, data$$112) {
    parentObj$$644.memory[65395] = data$$112
  };
  this.memoryHighWriter[117] = this.memoryWriter[65397] = function(parentObj$$645, address$$139, data$$113) {
    parentObj$$645.memory[65397] = data$$113
  };
  this.memoryHighWriter[118] = this.memoryWriter[65398] = this.cartIgnoreWrite;
  this.memoryHighWriter[119] = this.memoryWriter[65399] = this.cartIgnoreWrite;
  this.memoryHighWriter[255] = this.memoryWriter[65535] = function(parentObj$$646, address$$140, data$$114) {
    parentObj$$646.interruptsEnabled = data$$114;
    parentObj$$646.checkIRQMatching()
  };
  this.recompileModelSpecificIOWriteHandling();
  this.recompileBootIOWriteHandling()
};
GameBoyCore.prototype.recompileModelSpecificIOWriteHandling = function() {
  if(this.cGBC) {
    this.memoryHighWriter[2] = this.memoryWriter[65282] = function(parentObj$$647, address$$141, data$$115) {
      if((data$$115 & 1) == 1) {
        parentObj$$647.memory[65282] = data$$115 & 127;
        parentObj$$647.serialTimer = (data$$115 & 2) == 0 ? 4096 : 128;
        parentObj$$647.serialShiftTimer = parentObj$$647.serialShiftTimerAllocated = (data$$115 & 2) == 0 ? 512 : 16
      }else {
        parentObj$$647.memory[65282] = data$$115;
        parentObj$$647.serialShiftTimer = parentObj$$647.serialShiftTimerAllocated = parentObj$$647.serialTimer = 0
      }
    };
    this.memoryHighWriter[64] = this.memoryWriter[65344] = function(parentObj$$648, address$$142, data$$116) {
      if(parentObj$$648.memory[65344] != data$$116) {
        parentObj$$648.midScanLineJIT();
        var temp_var$$21 = data$$116 > 127;
        if(temp_var$$21 != parentObj$$648.LCDisOn) {
          parentObj$$648.LCDisOn = temp_var$$21;
          parentObj$$648.memory[65345] &= 120;
          parentObj$$648.midScanlineOffset = -1;
          parentObj$$648.totalLinesPassed = parentObj$$648.currentX = parentObj$$648.queuedScanLines = parentObj$$648.lastUnrenderedLine = parentObj$$648.STATTracker = parentObj$$648.LCDTicks = parentObj$$648.actualScanLine = parentObj$$648.memory[65348] = 0;
          if(parentObj$$648.LCDisOn) {
            parentObj$$648.modeSTAT = 2;
            parentObj$$648.matchLYC();
            parentObj$$648.LCDCONTROL = parentObj$$648.LINECONTROL
          }else {
            parentObj$$648.modeSTAT = 0;
            parentObj$$648.LCDCONTROL = parentObj$$648.DISPLAYOFFCONTROL;
            parentObj$$648.DisplayShowOff()
          }
          parentObj$$648.interruptsRequested &= 253
        }
        parentObj$$648.gfxWindowCHRBankPosition = (data$$116 & 64) == 64 ? 1024 : 0;
        parentObj$$648.gfxWindowDisplay = (data$$116 & 32) == 32;
        parentObj$$648.gfxBackgroundBankOffset = (data$$116 & 16) == 16 ? 0 : 128;
        parentObj$$648.gfxBackgroundCHRBankPosition = (data$$116 & 8) == 8 ? 1024 : 0;
        parentObj$$648.gfxSpriteNormalHeight = (data$$116 & 4) == 0;
        parentObj$$648.gfxSpriteShow = (data$$116 & 2) == 2;
        parentObj$$648.BGPriorityEnabled = (data$$116 & 1) == 1;
        parentObj$$648.priorityFlaggingPathRebuild();
        parentObj$$648.memory[65344] = data$$116
      }
    };
    this.memoryHighWriter[65] = this.memoryWriter[65345] = function(parentObj$$649, address$$143, data$$117) {
      parentObj$$649.LYCMatchTriggerSTAT = (data$$117 & 64) == 64;
      parentObj$$649.mode2TriggerSTAT = (data$$117 & 32) == 32;
      parentObj$$649.mode1TriggerSTAT = (data$$117 & 16) == 16;
      parentObj$$649.mode0TriggerSTAT = (data$$117 & 8) == 8;
      parentObj$$649.memory[65345] = data$$117 & 120
    };
    this.memoryHighWriter[70] = this.memoryWriter[65350] = function(parentObj$$650, address$$144, data$$118) {
      parentObj$$650.memory[65350] = data$$118;
      if(data$$118 < 224) {
        data$$118 <<= 8;
        address$$144 = 65024;
        var stat = parentObj$$650.modeSTAT;
        parentObj$$650.modeSTAT = 0;
        var newData = 0;
        do {
          newData = parentObj$$650.memoryReader[data$$118](parentObj$$650, data$$118++);
          if(newData != parentObj$$650.memory[address$$144]) {
            parentObj$$650.modeSTAT = stat;
            parentObj$$650.graphicsJIT();
            parentObj$$650.modeSTAT = 0;
            parentObj$$650.memory[address$$144++] = newData;
            break
          }
        }while(++address$$144 < 65184);
        if(address$$144 < 65184) {
          do {
            parentObj$$650.memory[address$$144++] = parentObj$$650.memoryReader[data$$118](parentObj$$650, data$$118++);
            parentObj$$650.memory[address$$144++] = parentObj$$650.memoryReader[data$$118](parentObj$$650, data$$118++);
            parentObj$$650.memory[address$$144++] = parentObj$$650.memoryReader[data$$118](parentObj$$650, data$$118++);
            parentObj$$650.memory[address$$144++] = parentObj$$650.memoryReader[data$$118](parentObj$$650, data$$118++)
          }while(address$$144 < 65184)
        }
        parentObj$$650.modeSTAT = stat
      }
    };
    this.memoryHighWriter[77] = this.memoryWriter[65357] = function(parentObj$$651, address$$145, data$$119) {
      parentObj$$651.memory[65357] = data$$119 & 127 | parentObj$$651.memory[65357] & 128
    };
    this.memoryHighWriter[79] = this.memoryWriter[65359] = function(parentObj$$652, address$$146, data$$120) {
      parentObj$$652.currVRAMBank = data$$120 & 1;
      if(parentObj$$652.currVRAMBank > 0) {
        parentObj$$652.BGCHRCurrentBank = parentObj$$652.BGCHRBank2
      }else {
        parentObj$$652.BGCHRCurrentBank = parentObj$$652.BGCHRBank1
      }
    };
    this.memoryHighWriter[81] = this.memoryWriter[65361] = function(parentObj$$653, address$$147, data$$121) {
      if(!parentObj$$653.hdmaRunning) {
        parentObj$$653.memory[65361] = data$$121
      }
    };
    this.memoryHighWriter[82] = this.memoryWriter[65362] = function(parentObj$$654, address$$148, data$$122) {
      if(!parentObj$$654.hdmaRunning) {
        parentObj$$654.memory[65362] = data$$122 & 240
      }
    };
    this.memoryHighWriter[83] = this.memoryWriter[65363] = function(parentObj$$655, address$$149, data$$123) {
      if(!parentObj$$655.hdmaRunning) {
        parentObj$$655.memory[65363] = data$$123 & 31
      }
    };
    this.memoryHighWriter[84] = this.memoryWriter[65364] = function(parentObj$$656, address$$150, data$$124) {
      if(!parentObj$$656.hdmaRunning) {
        parentObj$$656.memory[65364] = data$$124 & 240
      }
    };
    this.memoryHighWriter[85] = this.memoryWriter[65365] = function(parentObj$$657, address$$151, data$$125) {
      if(!parentObj$$657.hdmaRunning) {
        if((data$$125 & 128) == 0) {
          parentObj$$657.DMAWrite((data$$125 & 127) + 1);
          parentObj$$657.memory[65365] = 255
        }else {
          parentObj$$657.hdmaRunning = true;
          parentObj$$657.memory[65365] = data$$125 & 127
        }
      }else {
        if((data$$125 & 128) == 0) {
          parentObj$$657.hdmaRunning = false;
          parentObj$$657.memory[65365] |= 128
        }else {
          parentObj$$657.memory[65365] = data$$125 & 127
        }
      }
    };
    this.memoryHighWriter[104] = this.memoryWriter[65384] = function(parentObj$$658, address$$152, data$$126) {
      parentObj$$658.memory[65385] = parentObj$$658.gbcBGRawPalette[data$$126 & 63];
      parentObj$$658.memory[65384] = data$$126
    };
    this.memoryHighWriter[105] = this.memoryWriter[65385] = function(parentObj$$659, address$$153, data$$127) {
      parentObj$$659.updateGBCBGPalette(parentObj$$659.memory[65384] & 63, data$$127);
      if(parentObj$$659.memory[65384] > 127) {
        var next = parentObj$$659.memory[65384] + 1 & 63;
        parentObj$$659.memory[65384] = next | 128;
        parentObj$$659.memory[65385] = parentObj$$659.gbcBGRawPalette[next]
      }else {
        parentObj$$659.memory[65385] = data$$127
      }
    };
    this.memoryHighWriter[106] = this.memoryWriter[65386] = function(parentObj$$660, address$$154, data$$128) {
      parentObj$$660.memory[65387] = parentObj$$660.gbcOBJRawPalette[data$$128 & 63];
      parentObj$$660.memory[65386] = data$$128
    };
    this.memoryHighWriter[107] = this.memoryWriter[65387] = function(parentObj$$661, address$$155, data$$129) {
      parentObj$$661.updateGBCOBJPalette(parentObj$$661.memory[65386] & 63, data$$129);
      if(parentObj$$661.memory[65386] > 127) {
        var next$$1 = parentObj$$661.memory[65386] + 1 & 63;
        parentObj$$661.memory[65386] = next$$1 | 128;
        parentObj$$661.memory[65387] = parentObj$$661.gbcOBJRawPalette[next$$1]
      }else {
        parentObj$$661.memory[65387] = data$$129
      }
    };
    this.memoryHighWriter[112] = this.memoryWriter[65392] = function(parentObj$$662, address$$156, data$$130) {
      var addressCheck = parentObj$$662.memory[65361] << 8 | parentObj$$662.memory[65362];
      if(!parentObj$$662.hdmaRunning || addressCheck < 53248 || addressCheck >= 57344) {
        parentObj$$662.gbcRamBank = Math.max(data$$130 & 7, 1);
        parentObj$$662.gbcRamBankPosition = (parentObj$$662.gbcRamBank - 1 << 12) - 53248;
        parentObj$$662.gbcRamBankPositionECHO = parentObj$$662.gbcRamBankPosition - 8192
      }
      parentObj$$662.memory[65392] = data$$130
    };
    this.memoryHighWriter[116] = this.memoryWriter[65396] = function(parentObj$$663, address$$157, data$$131) {
      parentObj$$663.memory[65396] = data$$131
    }
  }else {
    this.memoryHighWriter[2] = this.memoryWriter[65282] = function(parentObj$$664, address$$158, data$$132) {
      if((data$$132 & 1) == 1) {
        parentObj$$664.memory[65282] = data$$132 & 127;
        parentObj$$664.serialTimer = 4096;
        parentObj$$664.serialShiftTimer = parentObj$$664.serialShiftTimerAllocated = 512
      }else {
        parentObj$$664.memory[65282] = data$$132;
        parentObj$$664.serialShiftTimer = parentObj$$664.serialShiftTimerAllocated = parentObj$$664.serialTimer = 0
      }
    };
    this.memoryHighWriter[64] = this.memoryWriter[65344] = function(parentObj$$665, address$$159, data$$133) {
      if(parentObj$$665.memory[65344] != data$$133) {
        parentObj$$665.midScanLineJIT();
        var temp_var$$22 = data$$133 > 127;
        if(temp_var$$22 != parentObj$$665.LCDisOn) {
          parentObj$$665.LCDisOn = temp_var$$22;
          parentObj$$665.memory[65345] &= 120;
          parentObj$$665.midScanlineOffset = -1;
          parentObj$$665.totalLinesPassed = parentObj$$665.currentX = parentObj$$665.queuedScanLines = parentObj$$665.lastUnrenderedLine = parentObj$$665.STATTracker = parentObj$$665.LCDTicks = parentObj$$665.actualScanLine = parentObj$$665.memory[65348] = 0;
          if(parentObj$$665.LCDisOn) {
            parentObj$$665.modeSTAT = 2;
            parentObj$$665.matchLYC();
            parentObj$$665.LCDCONTROL = parentObj$$665.LINECONTROL
          }else {
            parentObj$$665.modeSTAT = 0;
            parentObj$$665.LCDCONTROL = parentObj$$665.DISPLAYOFFCONTROL;
            parentObj$$665.DisplayShowOff()
          }
          parentObj$$665.interruptsRequested &= 253
        }
        parentObj$$665.gfxWindowCHRBankPosition = (data$$133 & 64) == 64 ? 1024 : 0;
        parentObj$$665.gfxWindowDisplay = (data$$133 & 32) == 32;
        parentObj$$665.gfxBackgroundBankOffset = (data$$133 & 16) == 16 ? 0 : 128;
        parentObj$$665.gfxBackgroundCHRBankPosition = (data$$133 & 8) == 8 ? 1024 : 0;
        parentObj$$665.gfxSpriteNormalHeight = (data$$133 & 4) == 0;
        parentObj$$665.gfxSpriteShow = (data$$133 & 2) == 2;
        parentObj$$665.bgEnabled = (data$$133 & 1) == 1;
        parentObj$$665.memory[65344] = data$$133
      }
    };
    this.memoryHighWriter[65] = this.memoryWriter[65345] = function(parentObj$$666, address$$160, data$$134) {
      parentObj$$666.LYCMatchTriggerSTAT = (data$$134 & 64) == 64;
      parentObj$$666.mode2TriggerSTAT = (data$$134 & 32) == 32;
      parentObj$$666.mode1TriggerSTAT = (data$$134 & 16) == 16;
      parentObj$$666.mode0TriggerSTAT = (data$$134 & 8) == 8;
      parentObj$$666.memory[65345] = data$$134 & 120;
      if((!parentObj$$666.usedBootROM || !parentObj$$666.usedGBCBootROM) && parentObj$$666.LCDisOn && parentObj$$666.modeSTAT < 2) {
        parentObj$$666.interruptsRequested |= 2;
        parentObj$$666.checkIRQMatching()
      }
    };
    this.memoryHighWriter[70] = this.memoryWriter[65350] = function(parentObj$$667, address$$161, data$$135) {
      parentObj$$667.memory[65350] = data$$135;
      if(data$$135 > 127 && data$$135 < 224) {
        data$$135 <<= 8;
        address$$161 = 65024;
        var stat$$1 = parentObj$$667.modeSTAT;
        parentObj$$667.modeSTAT = 0;
        var newData$$1 = 0;
        do {
          newData$$1 = parentObj$$667.memoryReader[data$$135](parentObj$$667, data$$135++);
          if(newData$$1 != parentObj$$667.memory[address$$161]) {
            parentObj$$667.modeSTAT = stat$$1;
            parentObj$$667.graphicsJIT();
            parentObj$$667.modeSTAT = 0;
            parentObj$$667.memory[address$$161++] = newData$$1;
            break
          }
        }while(++address$$161 < 65184);
        if(address$$161 < 65184) {
          do {
            parentObj$$667.memory[address$$161++] = parentObj$$667.memoryReader[data$$135](parentObj$$667, data$$135++);
            parentObj$$667.memory[address$$161++] = parentObj$$667.memoryReader[data$$135](parentObj$$667, data$$135++);
            parentObj$$667.memory[address$$161++] = parentObj$$667.memoryReader[data$$135](parentObj$$667, data$$135++);
            parentObj$$667.memory[address$$161++] = parentObj$$667.memoryReader[data$$135](parentObj$$667, data$$135++)
          }while(address$$161 < 65184)
        }
        parentObj$$667.modeSTAT = stat$$1
      }
    };
    this.memoryHighWriter[71] = this.memoryWriter[65351] = function(parentObj$$668, address$$162, data$$136) {
      if(parentObj$$668.memory[65351] != data$$136) {
        parentObj$$668.midScanLineJIT();
        parentObj$$668.updateGBBGPalette(data$$136);
        parentObj$$668.memory[65351] = data$$136
      }
    };
    this.memoryHighWriter[72] = this.memoryWriter[65352] = function(parentObj$$669, address$$163, data$$137) {
      if(parentObj$$669.memory[65352] != data$$137) {
        parentObj$$669.midScanLineJIT();
        parentObj$$669.updateGBOBJPalette(0, data$$137);
        parentObj$$669.memory[65352] = data$$137
      }
    };
    this.memoryHighWriter[73] = this.memoryWriter[65353] = function(parentObj$$670, address$$164, data$$138) {
      if(parentObj$$670.memory[65353] != data$$138) {
        parentObj$$670.midScanLineJIT();
        parentObj$$670.updateGBOBJPalette(4, data$$138);
        parentObj$$670.memory[65353] = data$$138
      }
    };
    this.memoryHighWriter[77] = this.memoryWriter[65357] = function(parentObj$$671, address$$165, data$$139) {
      parentObj$$671.memory[65357] = data$$139
    };
    this.memoryHighWriter[79] = this.memoryWriter[65359] = this.cartIgnoreWrite;
    this.memoryHighWriter[85] = this.memoryWriter[65365] = this.cartIgnoreWrite;
    this.memoryHighWriter[104] = this.memoryWriter[65384] = this.cartIgnoreWrite;
    this.memoryHighWriter[105] = this.memoryWriter[65385] = this.cartIgnoreWrite;
    this.memoryHighWriter[106] = this.memoryWriter[65386] = this.cartIgnoreWrite;
    this.memoryHighWriter[107] = this.memoryWriter[65387] = this.cartIgnoreWrite;
    this.memoryHighWriter[108] = this.memoryWriter[65388] = this.cartIgnoreWrite;
    this.memoryHighWriter[112] = this.memoryWriter[65392] = this.cartIgnoreWrite;
    this.memoryHighWriter[116] = this.memoryWriter[65396] = this.cartIgnoreWrite
  }
};
GameBoyCore.prototype.recompileBootIOWriteHandling = function() {
  if(this.inBootstrap) {
    this.memoryHighWriter[80] = this.memoryWriter[65360] = function(parentObj$$672, address$$166, data$$140) {
      cout("Boot ROM reads blocked: Bootstrap process has ended.", 0);
      parentObj$$672.inBootstrap = false;
      parentObj$$672.disableBootROM();
      parentObj$$672.memory[65360] = data$$140
    };
    if(this.cGBC) {
      this.memoryHighWriter[108] = this.memoryWriter[65388] = function(parentObj$$673, address$$167, data$$141) {
        if(parentObj$$673.inBootstrap) {
          parentObj$$673.cGBC = (data$$141 & 1) == 0;
          if(parentObj$$673.name + parentObj$$673.gameCode + parentObj$$673.ROM[323] == "Game and Watch 50") {
            parentObj$$673.cGBC = true;
            cout("Created a boot exception for Game and Watch Gallery 2 (GBC ID byte is wrong on the cartridge).", 1)
          }
          cout("Booted to GBC Mode: " + parentObj$$673.cGBC, 0)
        }
        parentObj$$673.memory[65388] = data$$141
      }
    }
  }else {
    this.memoryHighWriter[80] = this.memoryWriter[65360] = this.cartIgnoreWrite
  }
};
GameBoyCore.prototype.toTypedArray = function(baseArray, memtype) {
  try {
    if(settings[5] || memtype != "float32" && GameBoyWindow.opera && this.checkForOperaMathBug()) {
      return baseArray
    }
    if(!baseArray || !baseArray.length) {
      return[]
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
        typedArrayTemp = new Float32Array(length$$19)
    }
    var index$$65 = 0;
    for(;index$$65 < length$$19;index$$65++) {
      typedArrayTemp[index$$65] = baseArray[index$$65]
    }
    return typedArrayTemp
  }catch(error$$25) {
    cout("Could not convert an array to a typed array: " + error$$25.message, 1);
    return baseArray
  }
};
GameBoyCore.prototype.fromTypedArray = function(baseArray$$1) {
  try {
    if(!baseArray$$1 || !baseArray$$1.length) {
      return[]
    }
    var arrayTemp = [];
    var index$$66 = 0;
    for(;index$$66 < baseArray$$1.length;++index$$66) {
      arrayTemp[index$$66] = baseArray$$1[index$$66]
    }
    return arrayTemp
  }catch(error$$26) {
    cout("Conversion from a typed array failed: " + error$$26.message, 1);
    return baseArray$$1
  }
};
GameBoyCore.prototype.getTypedArray = function(length$$20, defaultValue, numberType) {
  try {
    if(settings[5]) {
      throw new Error("");
    }
    if(numberType != "float32" && GameBoyWindow.opera && this.checkForOperaMathBug()) {
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
        arrayHandle = new Float32Array(length$$20)
    }
    if(defaultValue != 0) {
      var index$$67 = 0;
      for(;index$$67 < length$$20;) {
        arrayHandle[index$$67++] = defaultValue
      }
    }
  }catch(error$$27) {
    cout("Could not convert an array to a typed array: " + error$$27.message, 1);
    arrayHandle = [];
    index$$67 = 0;
    for(;index$$67 < length$$20;) {
      arrayHandle[index$$67++] = defaultValue
    }
  }
  return arrayHandle
};
GameBoyCore.prototype.checkForOperaMathBug = function() {
  var testTypedArray = new Uint8Array(1);
  testTypedArray[0] = -1;
  testTypedArray[0] >>= 0;
  if(testTypedArray[0] != 255) {
    cout("Detected faulty math by your browser.", 2);
    return true
  }else {
    return false
  }
};
var gameboy = null;
var gbRunInterval = null;
var settings = [true, false, false, [39, 37, 38, 40, 88, 90, 16, 13], true, false, 4, 15, 30, false, false, false, false, 16, 1];
var gameboy_rom = "r+BPyZiEZwA+AeBPySAobeEq6gAgKlYj5WJv6SRmZjjhKuXqACDJ/////////////////////////////////xgHZwCYhGcA2fX6/3/1xdXlIRPKNgHN9f/h0cHx6gAg+hLKtyAC8cnwgLcoF/CC7hjgUT6Q4FOv4FLgVOCAPv/gVfHZ8IG3IALx2fBA7gjgQA8PD+YB7gHgT/CC4FHuEOCCPojgU6/gUuBU4IE+/uBV4ID6NMs86jTL8dkKCgoKbWFkZSBieSBhZ28uIGVtYWlsOmdvYnV6b3ZAeWFob28uY29tCnVybDogc3BlY2N5LmRhLnJ1CgoKCv///////wDDSgnO7WZmzA0ACwNzAIMADAANAAgRH4iJAA7czG7m3d3Zmbu7Z2NuDuzM3dyZn7u5Mz5BR08nUyBSRUFMVElNRSCAAAAAAgEDADMBSTQeIUD/y37I8P/1y4fg//BE/pEg+su+8eD/yT7A4EY+KD0g/cnF1eWvEQPK1RITEhMGAyEAyuXFTgYAIWAMCQkqEhMqEhPB4SMFIOrhrwYIzYsU4dHByf////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AAgMFBggJCwwOEBETFBYXGBobHR4fISIjJSYnKSorLC0uLzAxMjM0NTY3ODg5Ojo7PDw9PT4+Pj8/Pz9AQEBAQEBAQEBAPz8/Pz4+PT08PDs7Ojk5ODc2NTU0MzIxMC8uLCsqKSgmJSQjISAfHRwaGRcWFRMSEA8NCwoIBwUEAgH//fz6+ff29PPx8O7t6+ro5+Xk4uHg3t3c2tnY19bU09LR0M/OzczLysnJyMfGxsXFxMPDw8LCwcHBwcDAwMDAwMDAwMDBwcHBwsLDw8PExcXGxsfIycnKy8zNzs/Q0dLT1NXX2Nna3N3e4OHi5OXn6Onr7O7v8fL09vf5+vz9AAEECRAZJDFAUWR5kKnE4QAhRGmQueQRQHGk2RBJhMEAQYTJEFmk8UCR5DmQ6UShAGHEKZD5ZNFAsSSZEIkEgQCBBIkQmSSxQNFk+ZApxGEAoUTpkDnkkUDxpFkQyYRBAMGESRDZpHFAEeS5kGlEIQDhxKmQeWRRQDEkGRAJBAEAAQQJEBkkMUBRZHmQqcThACFEaZC55BFAcaTZEEmEwQBBhMkQWaTxQJHkOZDpRKEAYcQpkPlk0UCxJJkQiQSBAIEEiRCZJLFA0WT5kCnEYQChROmQOeSRQPGkWRDJhEEAwYRJENmkcUAR5LmQaUQhAOHEqZB5ZFFAMSQZEAkEAQAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAgICAgIDAwMDBAQEBAUFBQUGBgYHBwcICAkJCQoKCgsLDAwNDQ4ODw8QEBEREhITExQUFRUWFxcYGRkaGhscHB0eHh8gISEiIyQkJSYnJygpKisrLC0uLzAxMTIzNDU2Nzg5Ojs8PT4/QEFCQ0RFRkdISUpLTE1OT1FSU1RVVldZWltcXV9gYWJkZWZnaWprbG5vcHJzdHZ3eXp7fX5/gYKEhYeIiouNjpCRk5SWl5manJ2foKKkpaepqqytr7GytLa3ubu9vsDCxMXHycvMztDS1NXX2dvd3+Hi5Obo6uzu8PL09vj6/P4A//z38Ofcz8CvnIdwVzwfAN+8l3BHHO/Aj1wn8Ld8PwC/fDfwp1wPwG8cx3AXvF8AnzzXcAecL8BP3Gfwd/x/AH/8d/Bn3E/AL5wHcNc8nwBfvBdwxxxvwA9cp/A3fL8AP3y38Cdcj8DvHEdwl7zfAB88V3CHnK/Az9zn8Pf8/wD//Pfw59zPwK+ch3BXPB8A37yXcEcc78CPXCfwt3w/AL98N/CnXA/AbxzHcBe8XwCfPNdwB5wvwE/cZ/B3/H8Af/x38GfcT8AvnAdw1zyfAF+8F3DHHG/AD1yn8Dd8vwA/fLfwJ1yPwO8cR3CXvN8AHzxXcIecr8DP3Ofw9/z/AP/////////////////////+/v7+/v79/f39/fz8/Pz8+/v7+vr6+vn5+fj4+Pf39/b29fX19PTz8/Ly8fHw8PDv7u7t7ezs6+vq6uno6Ofn5uXl5OPj4uHh4N/e3t3c3Nva2djY19bV1NTT0tHQz8/OzczLysnIx8bFxMPCwcDAvr28u7q5uLe2tbSzsrGwr62sq6qpqKalpKOioJ+enZyamZiWlZSTkZCPjYyLiYiHhYSCgYB+fXt6eHd1dHJxcG5sa2loZmVjYmBfXVtaWFdVU1JQTk1LSUhGREJBPz08Ojg2NDMxLy0rKigmJCIgHx0bGRcVExEPDQsJBwUDAf9/Px8PBwMBgEAgEAgEAgEAAQEBAQEBAQEBAQEA//////////////+AEAcAAQABAAEBAAEBAAEA/wD//wD//wD/AP+AKwcBAAEAAQD/AP8A/wD/AP8A/wABAAEAAQCARgcBAQEBAQD//////////////wABAQEBAQGAYQf///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+AwODw+Pz+/xEAwAGxwj4E9cU+BfUKbwMKZ37+gCALI34LAiN+AwILGOsahhIDHBwcHPE9IN7BIRAAGVRdPgX1Cm8DCmcalhIjfAILfQIDAx0dHR3xPSDnIRgAGVRd8T0grskRAcAB6cI+BPUKbwMKZ37+gCALI34LAiN+AwILGOs+CvUahhIcHBwc8T0g9CN8Agt9AgMD8T0g0MkgIEZJTExFRCAgIFBPTFlHT05TIEhFTElDT1BURVJJTiBBQ1RJT04gIQDADgpwLHQsGhPWICI2ACwNIPE+oOoQyngBCQDlYmsJVF3hDMYKR3AsdCwaG9YgIjYALA0g8a/qEcrJ+hDK/jDI1gTqEMpHPqCQ/lA4Aj5QDgAM1ggw+3ghAcARBAB3xggZDSD5+hHKg+oRykf+UDgCPlAOAAzWCDD7eC4td9YIGQ0g+ckh9grzMf/PzVABr+Am4P/gD+BD4EL2SOBFPkDgQT4E4AfN9RM+CuoAAA4HeeBwJqCvIstsKPsNIPIh/v8yy30g+wEKABH1/yFpAc3kE+cCAVYAEQDBIVt2zeQTrwYYIWsOzYsUIYsOzaQUxwGwAxEAgCGhF8XlzeQT4cERAIjN5BMhAJgRAwABYMDHcc9yIwUg+BQdIPHN9RMhuxUGAc2WE82JEz5E4EGv4EU+A+D/+z4B6hLK4E0QAAB4zccTBSD6zZATxwEACFkhAIhzIwt4sSD5IQDHPv9FdyRwJCJ3JXclcCwg8x5/IQCYx3PPNgDL1DYIx3PLlCPLVCjuPoABDxARIAAhIpjF5XfL1HfLlDwZDSD1POEswQUg7D486jPLr+o0yz3qL8s+oOCCPgLqG8vNiRM+ROBBr+BFPgPg/68+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MAGEeRcvT/F5MAIvPIVvJrcBAAA+t7zLEbrLED6/vcsRu8sQPj+8P8sRuj/LEL0/yxG7P8sQeLHIeKHAebcgB3xiV31rX3jLH9L/HD5AlU97lW96lPUwAi88R6/LGTABgB/LGTABgB/LGTABgB/LGTABgB/LGTABgB/LGTABgB/LGTABgB/LGTABgB/LGcsRyxeVMAGFyxHLF5UwAYXLEcsXlTABhcsRyxeVMAGFyxHLF5UwAYXLEcsXlTABhcsRyxeVMAGFyxHLF5UwAYV5Fy9P8XkwAi88hGcuQMMxHMsf0pcdPkCUT3qUZ3uV9TACLzxHr8sZMAGAH8sZMAGAH8sZMAGAH8sZMAGAH8sZMAGAH8sZMAGAH8sZMAGAH8sZMAGAH8sZyxHLF5QwAYTLEcsXlDABhMsRyxeUMAGEyxHLF5QwAYTLEcsXlDABhMsRyxeUMAGEyxHLF5QwAYTLEcsXlDABhHkXL0/xeTACLzyFbyZAwzEcyx/SoRt91r9PfZNvepT1MAIvPEevyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxnLEcsXlTABhcsRyxeVMAGFyxHLF5UwAYXLEcsXlTABhcsRyxeVMAGFyxHLF5UwAYXLEcsXlTABhcsRyxeVMAGFeRcvT/F5MAIvPIRnLr/DMRz//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////3q8MAVUZ3tdb3u90pdAfZNPepRfkTA+V3nLPy88g+CDPn+R5YdPbyYARCkpKQkBkVIJweV41kAXb3nWQB8fH+YPZ/CChGd55gcGB/YITwpP8INHLMl5S1+RV3nLPy88g+CDPneR5YdPbyYARCkpKQkBklsJweV41kAXb3nWQB8fH+YPZ/CChGd55gcGB/YITwpP8INHLMmVT3qUX5EwPld5yz8vPIPggz5/keWHT28mAEQpKSkJAR9BCcHleNZAF2951kAfHx/mD2fwgoRneeYHBgf2CE8KT/CDRyzJeUtfkVd5yz8vPIPggz53keWHT28mAEQpKSkJASBKCcHleNZAF2951kAfHx/mD2fwgoRneeYHBgf2CE8KT/CDRyzJfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkyX6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALMl+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASXJfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsyf///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wHRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYt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uDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNyXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDcmDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDMlxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggzJxg+Hh+oawXovpl96obMiei+mX3qgszIkeRgAInAtJCJwLSQicC0kInAtJCJwLSQicC0kInAtJCJwLSQicC0kInAtJCJwLSQicC0kInAtJCJwLSQW/8n///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+qqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVACEzDDPAABIAEjPAMwwAIQAhMwwzwAASABIzwDMMACEAITMMM8AAEgASM8AzDAAhACEzDDPAABIAEjPAMwwAIQAhMwwzwAASABIzwDMMACEAITMMM8AAEgASM8AzDAAhACEzDDPAABIAEjPAMwwAIQAhMwwzwAASABIzwDMMACEAITMMM8AAEgASM8AzDAAhACEzDDPAABIAEjPAMwwAIQAhMwwzwAASABIzwDMMACEAITMMM8AAEgASM8AzDAAhACEzDDPAABIAEjPAMwwAIQAhMwwzwAASABIzwDMMACEAITMMM8AAEgASM8AzDAAhACEzDDPAABIAEjPAMwwAIQj8GH4y/WT7wO+B50CzINkI/Bh+Mv1k+8DvgedAsyDZCPwYfjL9ZPvA74HnQLMg2Qj8GH4y/WT7wO+B50CzINkI/Bh+Mv1k+8DvgedAsyDZCPwYfjL9ZPvA74HnQLMg2Qj8GH4y/WT7wO+B50CzINkI/Bh+Mv1k+8DvgedAsyDZCPwYfjL9ZPvA74HnQLMg2Qj8GH4y/WT7wO+B50CzINkI/Bh+Mv1k+8DvgedAsyDZCPwYfjL9ZPvA74HnQLMg2Qj8GH4y/WT7wO+B50CzINkI/Bh+Mv1k+8DvgedAsyDZCPwYfjL9ZPvA74HnQLMg2Qj8GH4y/WT7wO+B50CzINnMzMzMMzMzM8zMzMwzMzMzzMzMzDMzMzPMzMzMMzMzM8zMzMwzMzMzzMzMzDMzMzPMzMzMMzMzM8zMzMwzMzMzzMzMzDMzMzPMzMzMMzMzM8zMzMwzMzMzzMzMzDMzMzPMzMzMMzMzM8zMzMwzMzMzzMzMzDMzMzPMzMzMMzMzM8zMzMwzMzMzzMzMzDMzMzPMzMzMMzMzM8zMzMwzMzMzzMzMzDMzMzPMzMzMMzMzM8zMzMwzMzMzzMzMzDMzMzPMzMzMMzMzM8zMzMwzMzMzzMzMzDMzMzPMzMzMMzMzM8zMzMwzMzMzzMzMzDMzMzPMzMzMMzMzM8zMzMwzMzMzwMDAwAwMDAzAwMDADAwMDMDAwMAMDAwMwMDAwAwMDAzAwMDADAwMDMDAwMAMDAwMwMDAwAwMDAzAwMDADAwMDMDAwMAMDAwMwMDAwAwMDAzAwMDADAwMDMDAwMAMDAwMwMDAwAwMDAzAwMDADAwMDMDAwMAMDAwMwMDAwAwMDAzAwMDADAwMDMDAwMAMDAwMwMDAwAwMDAzAwMDADAwMDMDAwMAMDAwMwMDAwAwMDAzAwMDADAwMDMDAwMAMDAwMwMDAwAwMDAzAwMDADAwMDMDAwMAMDAwMwMDAwAwMDAzAwMDADAwMDMDAwMAMDAwMwMDAwAwMDAzAwMDADAwMDPHxAQEBAQEBHx8QEBAQEBDx8QEBAQEBAR8fEBAQEBAQ8fEBAQEBAQEfHxAQEBAQEPHxAQEBAQEBHx8QEBAQEBDx8QEBAQEBAR8fEBAQEBAQ8fEBAQEBAQEfHxAQEBAQEPHxAQEBAQEBHx8QEBAQEBDx8QEBAQEBAR8fEBAQEBAQ8fEBAQEBAQEfHxAQEBAQEPHxAQEBAQEBHx8QEBAQEBDx8QEBAQEBAR8fEBAQEBAQ8fEBAQEBAQEfHxAQEBAQEPHxAQEBAQEBHx8QEBAQEBDx8QEBAQEBAR8fEBAQEBAQ8fEBAQEBAQEfHxAQEBAQEPHxAQEBAQEBHx8QEBAQEBCqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlUC4XIscAl7InAJInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJLCwly2XIJGjJycnJyeEicAlyLHAJeyJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSwsJctlyCRoycnJycnhInAJInAJcixwCXsicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAksLCXLZcgkaMnJycnJ4SJwCSJwCSJwCXIscAl7InAJInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJLCwly2XIJGjJycnJyeEicAkicAkicAkicAlyLHAJeyJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSwsJctlyCRoycnJycnhInAJInAJInAJInAJInAJcixwCXsicAkicAkicAkicAkicAkicAkicAkicAkicAkicAksLCXLZcgkaMnJycnJ4SJwCSJwCSJwCSJwCSJwCSJwCXIscAl7InAJInAJInAJInAJInAJInAJInAJInAJInAJLCwly2XIJGjJycnJyeEicAkicAkicAkicAkicAkicAkicAlyLHAJeyJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSwsJctlyCRoycnJycnhInAJInAJInAJInAJInAJInAJInAJInAJcixwCXsicAkicAkicAkicAkicAkicAkicAksLCXLZcgkaMnJycnJ4SJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCXIscAl7InAJInAJInAJInAJInAJInAJLCwly2XIJGjJycnJyeEicAkicAkicAkicAkicAkicAkicAkicAkicAkicAlyLHAJeyJwCSJwCSJwCSJwCSJwCSwsJctlyCRoycnJycnhInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJcixwCXsicAkicAkicAkicAksLCXLZcgkaMnJycnJ4SJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCXIscAl7InAJInAJInAJLCwly2XIJGjJycnJyeEicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAlyLHAJeyJwCSJwCSwsJctlyCRoycnJycnhInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJcixwCXsicAksLCXLZcgkaMnJycnJ4SJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCXIscAl7LCwly2XIJGjJycnJydE+t5LI4IXmB8RSRPCFHx8focjlzTJE4XkicCwicCwicCwicCwicCwicCwicCwicCzJ+ABUXWhHeZAfyx1nATNZCfCCMQCv/qAoAzEAvwH/AOlHPgeQVF1HDjOvyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxlHIbRXCeViaz7/AQ8Ayfoay2/6G8uFZ/4UIAU+/y0YBtbsIAU8LOoby3zqGsvNr2AhlEbNyhDwpMagV/Cjxn9f1SGXRs3KEPCkxqBn8KPGf2/RzTEcKAsf2hhZH9oYWcPERny6OAViV31rX+XNmkbh1Xu90sxFe9ZA4Ih9k0884Il6lF/ghjzgij2RMGvgh3nLPy88g+CF8IIBDwBvVHzWQBfLN6GFZ3rmBxdvGAjwij3KAETgivCJX/CGV/CFGASCHSgLy38g+Ffwh4LghR3NYkUY2nvgifCIg1/l5gf2CG8mB1Z7aB8fHx/LHR/LHeYDxkBnrx7/6XnghpPgh3vLPy88geCF8IIBDwBvVHzWQBfLN6GFZ3rmBxdv8Ilf8IZX8IXLfyAHV/CHgh0YAYLghc1iRfCKPcoAROCKGN171kDgiHuVTzzgiXqUX+CGPOCKPZEwa+CHecs/LzyD4IXwggEPAG9UfNZAF8s3oYVneuYHF28YCPCKPcoAROCK8Ilf8IZX8IUYBIIdKAvLfyD4V/CHguCFHc0qRhjae+CJ8IiTX+XmB/YQbyYHVntoHx8fH8sdH8sd5gPGQGc+/1jpeeCGk+CHe8s/LzyB4IXwggEPAG9UfNZAF8s3oYVneuYHF2/wiV/whlfwhct/IAdX8IeCHRgBguCFzSpG8Io9ygBE4IoY3UYAALoAAHzWQMhPHx8f5h9HeeYHKAsE/gUwBvUhylblBT4PkCHJRoRn5fCCZ69vyfCCZ69vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIsnxAQ8APcqEVz0odj0oOj0idwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwksLCXLZSgCJGgidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwksLCXLZSgCJGgidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwksLCXLZSgCJGgidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkid8kicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAksLCUicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAksLCUicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAksLCUicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAksLCUicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAksLCUicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAksLCUicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAloyfgAVF3wgjEAr/6gKAMxAL8B/wDFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcVia/nJJgJ+4JovPOCYfcZAb37gl+Cbr+CZ4JzgneCePkDgn8n/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Aw==";
var completed = 0;
var benchmarks = BenchmarkSuite.CountBenchmarks();
var success = true;
var latencyBenchmarks = ["Splay", "Mandreel"];
var skipBenchmarks = typeof skipBenchmarks === "undefined" ? [] : skipBenchmarks;

}
