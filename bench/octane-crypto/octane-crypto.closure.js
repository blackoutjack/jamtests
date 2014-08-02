function Benchmark(name$$31, doWarmup, doDeterministic, deterministicIterations, run, setup, tearDown, rmsResult, minIterations) {
  this.name = name$$31;
  this.doWarmup = doWarmup;
  this.doDeterministic = doDeterministic;
  this.deterministicIterations = deterministicIterations;
  this.run = run;
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
function BigInteger(a, b, c) {
  this.array = new Array;
  if(a != null) {
    if("number" == typeof a) {
      this.fromNumber(a, b, c)
    }else {
      if(b == null && "string" != typeof a) {
        this.fromString(a, 256)
      }else {
        this.fromString(a, b)
      }
    }
  }
}
function nbi() {
  return new BigInteger(null)
}
function am1(i$$6, x$$48, w$$5, j, c$$1, n$$1) {
  var this_array$$1 = this.array;
  var w_array = w$$5.array;
  for(;--n$$1 >= 0;) {
    var v = x$$48 * this_array$$1[i$$6++] + w_array[j] + c$$1;
    c$$1 = Math.floor(v / 67108864);
    w_array[j++] = v & 67108863
  }
  return c$$1
}
function am2(i$$7, x$$49, w$$6, j$$1, c$$2, n$$2) {
  var this_array$$2 = this.array;
  var w_array$$1 = w$$6.array;
  var xl = x$$49 & 32767;
  var xh = x$$49 >> 15;
  for(;--n$$2 >= 0;) {
    var l = this_array$$2[i$$7] & 32767;
    var h$$4 = this_array$$2[i$$7++] >> 15;
    var m = xh * l + h$$4 * xl;
    l = xl * l + ((m & 32767) << 15) + w_array$$1[j$$1] + (c$$2 & 1073741823);
    c$$2 = (l >>> 30) + (m >>> 15) + xh * h$$4 + (c$$2 >>> 30);
    w_array$$1[j$$1++] = l & 1073741823
  }
  return c$$2
}
function am3(i$$8, x$$50, w$$7, j$$2, c$$3, n$$3) {
  var this_array$$3 = this.array;
  var w_array$$2 = w$$7.array;
  var xl$$1 = x$$50 & 16383;
  var xh$$1 = x$$50 >> 14;
  for(;--n$$3 >= 0;) {
    var l$$1 = this_array$$3[i$$8] & 16383;
    var h$$5 = this_array$$3[i$$8++] >> 14;
    var m$$1 = xh$$1 * l$$1 + h$$5 * xl$$1;
    l$$1 = xl$$1 * l$$1 + ((m$$1 & 16383) << 14) + w_array$$2[j$$2] + c$$3;
    c$$3 = (l$$1 >> 28) + (m$$1 >> 14) + xh$$1 * h$$5;
    w_array$$2[j$$2++] = l$$1 & 268435455
  }
  return c$$3
}
function am4(i$$9, x$$51, w$$8, j$$3, c$$4, n$$4) {
  var this_array$$4 = this.array;
  var w_array$$3 = w$$8.array;
  var xl$$2 = x$$51 & 8191;
  var xh$$2 = x$$51 >> 13;
  for(;--n$$4 >= 0;) {
    var l$$2 = this_array$$4[i$$9] & 8191;
    var h$$6 = this_array$$4[i$$9++] >> 13;
    var m$$2 = xh$$2 * l$$2 + h$$6 * xl$$2;
    l$$2 = xl$$2 * l$$2 + ((m$$2 & 8191) << 13) + w_array$$3[j$$3] + c$$4;
    c$$4 = (l$$2 >> 26) + (m$$2 >> 13) + xh$$2 * h$$6;
    w_array$$3[j$$3++] = l$$2 & 67108863
  }
  return c$$4
}
function int2char(n$$5) {
  return BI_RM.charAt(n$$5)
}
function intAt(s$$3, i$$10) {
  var c$$5 = BI_RC[s$$3.charCodeAt(i$$10)];
  return c$$5 == null ? -1 : c$$5
}
function bnpCopyTo(r) {
  var this_array$$5 = this.array;
  var r_array = r.array;
  var i$$11 = this.t - 1;
  for(;i$$11 >= 0;--i$$11) {
    r_array[i$$11] = this_array$$5[i$$11]
  }
  r.t = this.t;
  r.s = this.s
}
function bnpFromInt(x$$52) {
  var this_array$$6 = this.array;
  this.t = 1;
  this.s = x$$52 < 0 ? -1 : 0;
  if(x$$52 > 0) {
    this_array$$6[0] = x$$52
  }else {
    if(x$$52 < -1) {
      this_array$$6[0] = x$$52 + DV
    }else {
      this.t = 0
    }
  }
}
function nbv(i$$12) {
  var r$$1 = nbi();
  r$$1.fromInt(i$$12);
  return r$$1
}
function bnpFromString(s$$4, b$$1) {
  var this_array$$7 = this.array;
  var k;
  if(b$$1 == 16) {
    k = 4
  }else {
    if(b$$1 == 8) {
      k = 3
    }else {
      if(b$$1 == 256) {
        k = 8
      }else {
        if(b$$1 == 2) {
          k = 1
        }else {
          if(b$$1 == 32) {
            k = 5
          }else {
            if(b$$1 == 4) {
              k = 2
            }else {
              this.fromRadix(s$$4, b$$1);
              return
            }
          }
        }
      }
    }
  }
  this.t = 0;
  this.s = 0;
  var i$$13 = s$$4.length;
  var mi = false;
  var sh$$2 = 0;
  for(;--i$$13 >= 0;) {
    var x$$53 = k == 8 ? s$$4[i$$13] & 255 : intAt(s$$4, i$$13);
    if(x$$53 < 0) {
      if(s$$4.charAt(i$$13) == "-") {
        mi = true
      }
      continue
    }
    mi = false;
    if(sh$$2 == 0) {
      this_array$$7[this.t++] = x$$53
    }else {
      if(sh$$2 + k > BI_DB) {
        this_array$$7[this.t - 1] |= (x$$53 & (1 << BI_DB - sh$$2) - 1) << sh$$2;
        this_array$$7[this.t++] = x$$53 >> BI_DB - sh$$2
      }else {
        this_array$$7[this.t - 1] |= x$$53 << sh$$2
      }
    }
    sh$$2 += k;
    if(sh$$2 >= BI_DB) {
      sh$$2 -= BI_DB
    }
  }
  if(k == 8 && (s$$4[0] & 128) != 0) {
    this.s = -1;
    if(sh$$2 > 0) {
      this_array$$7[this.t - 1] |= (1 << BI_DB - sh$$2) - 1 << sh$$2
    }
  }
  this.clamp();
  if(mi) {
    BigInteger.ZERO.subTo(this, this)
  }
}
function bnpClamp() {
  var this_array$$8 = this.array;
  var c$$6 = this.s & BI_DM;
  for(;this.t > 0 && this_array$$8[this.t - 1] == c$$6;) {
    --this.t
  }
}
function bnToString(b$$2) {
  var this_array$$9 = this.array;
  if(this.s < 0) {
    return"-" + this.negate().toString(b$$2)
  }
  var k$$1;
  if(b$$2 == 16) {
    k$$1 = 4
  }else {
    if(b$$2 == 8) {
      k$$1 = 3
    }else {
      if(b$$2 == 2) {
        k$$1 = 1
      }else {
        if(b$$2 == 32) {
          k$$1 = 5
        }else {
          if(b$$2 == 4) {
            k$$1 = 2
          }else {
            return this.toRadix(b$$2)
          }
        }
      }
    }
  }
  var km = (1 << k$$1) - 1;
  var d;
  var m$$3 = false;
  var r$$2 = "";
  var i$$14 = this.t;
  var p = BI_DB - i$$14 * BI_DB % k$$1;
  if(i$$14-- > 0) {
    if(p < BI_DB && (d = this_array$$9[i$$14] >> p) > 0) {
      m$$3 = true;
      r$$2 = int2char(d)
    }
    for(;i$$14 >= 0;) {
      if(p < k$$1) {
        d = (this_array$$9[i$$14] & (1 << p) - 1) << k$$1 - p;
        d |= this_array$$9[--i$$14] >> (p += BI_DB - k$$1)
      }else {
        d = this_array$$9[i$$14] >> (p -= k$$1) & km;
        if(p <= 0) {
          p += BI_DB;
          --i$$14
        }
      }
      if(d > 0) {
        m$$3 = true
      }
      if(m$$3) {
        r$$2 += int2char(d)
      }
    }
  }
  return m$$3 ? r$$2 : "0"
}
function bnNegate() {
  var r$$3 = nbi();
  BigInteger.ZERO.subTo(this, r$$3);
  return r$$3
}
function bnAbs() {
  return this.s < 0 ? this.negate() : this
}
function bnCompareTo(a$$1) {
  var this_array$$10 = this.array;
  var a_array = a$$1.array;
  var r$$4 = this.s - a$$1.s;
  if(r$$4 != 0) {
    return r$$4
  }
  var i$$15 = this.t;
  r$$4 = i$$15 - a$$1.t;
  if(r$$4 != 0) {
    return r$$4
  }
  for(;--i$$15 >= 0;) {
    if((r$$4 = this_array$$10[i$$15] - a_array[i$$15]) != 0) {
      return r$$4
    }
  }
  return 0
}
function nbits(x$$54) {
  var r$$5 = 1;
  var t$$1;
  if((t$$1 = x$$54 >>> 16) != 0) {
    x$$54 = t$$1;
    r$$5 += 16
  }
  if((t$$1 = x$$54 >> 8) != 0) {
    x$$54 = t$$1;
    r$$5 += 8
  }
  if((t$$1 = x$$54 >> 4) != 0) {
    x$$54 = t$$1;
    r$$5 += 4
  }
  if((t$$1 = x$$54 >> 2) != 0) {
    x$$54 = t$$1;
    r$$5 += 2
  }
  if((t$$1 = x$$54 >> 1) != 0) {
    x$$54 = t$$1;
    r$$5 += 1
  }
  return r$$5
}
function bnBitLength() {
  var this_array$$11 = this.array;
  if(this.t <= 0) {
    return 0
  }
  return BI_DB * (this.t - 1) + nbits(this_array$$11[this.t - 1] ^ this.s & BI_DM)
}
function bnpDLShiftTo(n$$6, r$$6) {
  var this_array$$12 = this.array;
  var r_array$$1 = r$$6.array;
  var i$$16;
  i$$16 = this.t - 1;
  for(;i$$16 >= 0;--i$$16) {
    r_array$$1[i$$16 + n$$6] = this_array$$12[i$$16]
  }
  i$$16 = n$$6 - 1;
  for(;i$$16 >= 0;--i$$16) {
    r_array$$1[i$$16] = 0
  }
  r$$6.t = this.t + n$$6;
  r$$6.s = this.s
}
function bnpDRShiftTo(n$$7, r$$7) {
  var this_array$$13 = this.array;
  var r_array$$2 = r$$7.array;
  var i$$17 = n$$7;
  for(;i$$17 < this.t;++i$$17) {
    r_array$$2[i$$17 - n$$7] = this_array$$13[i$$17]
  }
  r$$7.t = Math.max(this.t - n$$7, 0);
  r$$7.s = this.s
}
function bnpLShiftTo(n$$8, r$$8) {
  var this_array$$14 = this.array;
  var r_array$$3 = r$$8.array;
  var bs = n$$8 % BI_DB;
  var cbs = BI_DB - bs;
  var bm = (1 << cbs) - 1;
  var ds = Math.floor(n$$8 / BI_DB);
  var c$$7 = this.s << bs & BI_DM;
  var i$$18;
  i$$18 = this.t - 1;
  for(;i$$18 >= 0;--i$$18) {
    r_array$$3[i$$18 + ds + 1] = this_array$$14[i$$18] >> cbs | c$$7;
    c$$7 = (this_array$$14[i$$18] & bm) << bs
  }
  i$$18 = ds - 1;
  for(;i$$18 >= 0;--i$$18) {
    r_array$$3[i$$18] = 0
  }
  r_array$$3[ds] = c$$7;
  r$$8.t = this.t + ds + 1;
  r$$8.s = this.s;
  r$$8.clamp()
}
function bnpRShiftTo(n$$9, r$$9) {
  var this_array$$15 = this.array;
  var r_array$$4 = r$$9.array;
  r$$9.s = this.s;
  var ds$$1 = Math.floor(n$$9 / BI_DB);
  if(ds$$1 >= this.t) {
    r$$9.t = 0;
    return
  }
  var bs$$1 = n$$9 % BI_DB;
  var cbs$$1 = BI_DB - bs$$1;
  var bm$$1 = (1 << bs$$1) - 1;
  r_array$$4[0] = this_array$$15[ds$$1] >> bs$$1;
  var i$$19 = ds$$1 + 1;
  for(;i$$19 < this.t;++i$$19) {
    r_array$$4[i$$19 - ds$$1 - 1] |= (this_array$$15[i$$19] & bm$$1) << cbs$$1;
    r_array$$4[i$$19 - ds$$1] = this_array$$15[i$$19] >> bs$$1
  }
  if(bs$$1 > 0) {
    r_array$$4[this.t - ds$$1 - 1] |= (this.s & bm$$1) << cbs$$1
  }
  r$$9.t = this.t - ds$$1;
  r$$9.clamp()
}
function bnpSubTo(a$$2, r$$10) {
  var this_array$$16 = this.array;
  var r_array$$5 = r$$10.array;
  var a_array$$1 = a$$2.array;
  var i$$20 = 0;
  var c$$8 = 0;
  var m$$4 = Math.min(a$$2.t, this.t);
  for(;i$$20 < m$$4;) {
    c$$8 += this_array$$16[i$$20] - a_array$$1[i$$20];
    r_array$$5[i$$20++] = c$$8 & BI_DM;
    c$$8 >>= BI_DB
  }
  if(a$$2.t < this.t) {
    c$$8 -= a$$2.s;
    for(;i$$20 < this.t;) {
      c$$8 += this_array$$16[i$$20];
      r_array$$5[i$$20++] = c$$8 & BI_DM;
      c$$8 >>= BI_DB
    }
    c$$8 += this.s
  }else {
    c$$8 += this.s;
    for(;i$$20 < a$$2.t;) {
      c$$8 -= a_array$$1[i$$20];
      r_array$$5[i$$20++] = c$$8 & BI_DM;
      c$$8 >>= BI_DB
    }
    c$$8 -= a$$2.s
  }
  r$$10.s = c$$8 < 0 ? -1 : 0;
  if(c$$8 < -1) {
    r_array$$5[i$$20++] = BI_DV + c$$8
  }else {
    if(c$$8 > 0) {
      r_array$$5[i$$20++] = c$$8
    }
  }
  r$$10.t = i$$20;
  r$$10.clamp()
}
function bnpMultiplyTo(a$$3, r$$11) {
  var this_array$$17 = this.array;
  var r_array$$6 = r$$11.array;
  var x$$55 = this.abs();
  var y$$31 = a$$3.abs();
  var y_array = y$$31.array;
  var i$$21 = x$$55.t;
  r$$11.t = i$$21 + y$$31.t;
  for(;--i$$21 >= 0;) {
    r_array$$6[i$$21] = 0
  }
  i$$21 = 0;
  for(;i$$21 < y$$31.t;++i$$21) {
    r_array$$6[i$$21 + x$$55.t] = x$$55.am(0, y_array[i$$21], r$$11, i$$21, 0, x$$55.t)
  }
  r$$11.s = 0;
  r$$11.clamp();
  if(this.s != a$$3.s) {
    BigInteger.ZERO.subTo(r$$11, r$$11)
  }
}
function bnpSquareTo(r$$12) {
  var x$$56 = this.abs();
  var x_array = x$$56.array;
  var r_array$$7 = r$$12.array;
  var i$$22 = r$$12.t = 2 * x$$56.t;
  for(;--i$$22 >= 0;) {
    r_array$$7[i$$22] = 0
  }
  i$$22 = 0;
  for(;i$$22 < x$$56.t - 1;++i$$22) {
    var c$$9 = x$$56.am(i$$22, x_array[i$$22], r$$12, 2 * i$$22, 0, 1);
    if((r_array$$7[i$$22 + x$$56.t] += x$$56.am(i$$22 + 1, 2 * x_array[i$$22], r$$12, 2 * i$$22 + 1, c$$9, x$$56.t - i$$22 - 1)) >= BI_DV) {
      r_array$$7[i$$22 + x$$56.t] -= BI_DV;
      r_array$$7[i$$22 + x$$56.t + 1] = 1
    }
  }
  if(r$$12.t > 0) {
    r_array$$7[r$$12.t - 1] += x$$56.am(i$$22, x_array[i$$22], r$$12, 2 * i$$22, 0, 1)
  }
  r$$12.s = 0;
  r$$12.clamp()
}
function bnpDivRemTo(m$$5, q, r$$13) {
  var pm = m$$5.abs();
  if(pm.t <= 0) {
    return
  }
  var pt = this.abs();
  if(pt.t < pm.t) {
    if(q != null) {
      q.fromInt(0)
    }
    if(r$$13 != null) {
      this.copyTo(r$$13)
    }
    return
  }
  if(r$$13 == null) {
    r$$13 = nbi()
  }
  var y$$32 = nbi();
  var ts = this.s;
  var ms = m$$5.s;
  var pm_array = pm.array;
  var nsh = BI_DB - nbits(pm_array[pm.t - 1]);
  if(nsh > 0) {
    pm.lShiftTo(nsh, y$$32);
    pt.lShiftTo(nsh, r$$13)
  }else {
    pm.copyTo(y$$32);
    pt.copyTo(r$$13)
  }
  var ys = y$$32.t;
  var y_array$$1 = y$$32.array;
  var y0$$2 = y_array$$1[ys - 1];
  if(y0$$2 == 0) {
    return
  }
  var yt = y0$$2 * (1 << BI_F1) + (ys > 1 ? y_array$$1[ys - 2] >> BI_F2 : 0);
  var d1 = BI_FV / yt;
  var d2 = (1 << BI_F1) / yt;
  var e$$7 = 1 << BI_F2;
  var i$$23 = r$$13.t;
  var j$$4 = i$$23 - ys;
  var t$$2 = q == null ? nbi() : q;
  y$$32.dlShiftTo(j$$4, t$$2);
  var r_array$$8 = r$$13.array;
  if(r$$13.compareTo(t$$2) >= 0) {
    r_array$$8[r$$13.t++] = 1;
    r$$13.subTo(t$$2, r$$13)
  }
  BigInteger.ONE.dlShiftTo(ys, t$$2);
  t$$2.subTo(y$$32, y$$32);
  for(;y$$32.t < ys;) {
    y_array$$1[y$$32.t++] = 0
  }
  for(;--j$$4 >= 0;) {
    var qd = r_array$$8[--i$$23] == y0$$2 ? BI_DM : Math.floor(r_array$$8[i$$23] * d1 + (r_array$$8[i$$23 - 1] + e$$7) * d2);
    if((r_array$$8[i$$23] += y$$32.am(0, qd, r$$13, j$$4, 0, ys)) < qd) {
      y$$32.dlShiftTo(j$$4, t$$2);
      r$$13.subTo(t$$2, r$$13);
      for(;r_array$$8[i$$23] < --qd;) {
        r$$13.subTo(t$$2, r$$13)
      }
    }
  }
  if(q != null) {
    r$$13.drShiftTo(ys, q);
    if(ts != ms) {
      BigInteger.ZERO.subTo(q, q)
    }
  }
  r$$13.t = ys;
  r$$13.clamp();
  if(nsh > 0) {
    r$$13.rShiftTo(nsh, r$$13)
  }
  if(ts < 0) {
    BigInteger.ZERO.subTo(r$$13, r$$13)
  }
}
function bnMod(a$$4) {
  var r$$14 = nbi();
  this.abs().divRemTo(a$$4, null, r$$14);
  if(this.s < 0 && r$$14.compareTo(BigInteger.ZERO) > 0) {
    a$$4.subTo(r$$14, r$$14)
  }
  return r$$14
}
function Classic(m$$6) {
  this.m = m$$6
}
function cConvert(x$$57) {
  if(x$$57.s < 0 || x$$57.compareTo(this.m) >= 0) {
    return x$$57.mod(this.m)
  }else {
    return x$$57
  }
}
function cRevert(x$$58) {
  return x$$58
}
function cReduce(x$$59) {
  x$$59.divRemTo(this.m, null, x$$59)
}
function cMulTo(x$$60, y$$33, r$$15) {
  x$$60.multiplyTo(y$$33, r$$15);
  this.reduce(r$$15)
}
function cSqrTo(x$$61, r$$16) {
  x$$61.squareTo(r$$16);
  this.reduce(r$$16)
}
function bnpInvDigit() {
  var this_array$$18 = this.array;
  if(this.t < 1) {
    return 0
  }
  var x$$62 = this_array$$18[0];
  if((x$$62 & 1) == 0) {
    return 0
  }
  var y$$34 = x$$62 & 3;
  y$$34 = y$$34 * (2 - (x$$62 & 15) * y$$34) & 15;
  y$$34 = y$$34 * (2 - (x$$62 & 255) * y$$34) & 255;
  y$$34 = y$$34 * (2 - ((x$$62 & 65535) * y$$34 & 65535)) & 65535;
  y$$34 = y$$34 * (2 - x$$62 * y$$34 % BI_DV) % BI_DV;
  return y$$34 > 0 ? BI_DV - y$$34 : -y$$34
}
function Montgomery(m$$7) {
  this.m = m$$7;
  this.mp = m$$7.invDigit();
  this.mpl = this.mp & 32767;
  this.mph = this.mp >> 15;
  this.um = (1 << BI_DB - 15) - 1;
  this.mt2 = 2 * m$$7.t
}
function montConvert(x$$63) {
  var r$$17 = nbi();
  x$$63.abs().dlShiftTo(this.m.t, r$$17);
  r$$17.divRemTo(this.m, null, r$$17);
  if(x$$63.s < 0 && r$$17.compareTo(BigInteger.ZERO) > 0) {
    this.m.subTo(r$$17, r$$17)
  }
  return r$$17
}
function montRevert(x$$64) {
  var r$$18 = nbi();
  x$$64.copyTo(r$$18);
  this.reduce(r$$18);
  return r$$18
}
function montReduce(x$$65) {
  var x_array$$1 = x$$65.array;
  for(;x$$65.t <= this.mt2;) {
    x_array$$1[x$$65.t++] = 0
  }
  var i$$24 = 0;
  for(;i$$24 < this.m.t;++i$$24) {
    var j$$5 = x_array$$1[i$$24] & 32767;
    var u0 = j$$5 * this.mpl + ((j$$5 * this.mph + (x_array$$1[i$$24] >> 15) * this.mpl & this.um) << 15) & BI_DM;
    j$$5 = i$$24 + this.m.t;
    x_array$$1[j$$5] += this.m.am(0, u0, x$$65, i$$24, 0, this.m.t);
    for(;x_array$$1[j$$5] >= BI_DV;) {
      x_array$$1[j$$5] -= BI_DV;
      x_array$$1[++j$$5]++
    }
  }
  x$$65.clamp();
  x$$65.drShiftTo(this.m.t, x$$65);
  if(x$$65.compareTo(this.m) >= 0) {
    x$$65.subTo(this.m, x$$65)
  }
}
function montSqrTo(x$$66, r$$19) {
  x$$66.squareTo(r$$19);
  this.reduce(r$$19)
}
function montMulTo(x$$67, y$$35, r$$20) {
  x$$67.multiplyTo(y$$35, r$$20);
  this.reduce(r$$20)
}
function bnpIsEven() {
  var this_array$$19 = this.array;
  return(this.t > 0 ? this_array$$19[0] & 1 : this.s) == 0
}
function bnpExp(e$$8, z$$2) {
  if(e$$8 > 4294967295 || e$$8 < 1) {
    return BigInteger.ONE
  }
  var r$$21 = nbi();
  var r2 = nbi();
  var g = z$$2.convert(this);
  var i$$25 = nbits(e$$8) - 1;
  g.copyTo(r$$21);
  for(;--i$$25 >= 0;) {
    z$$2.sqrTo(r$$21, r2);
    if((e$$8 & 1 << i$$25) > 0) {
      z$$2.mulTo(r2, g, r$$21)
    }else {
      var t$$3 = r$$21;
      r$$21 = r2;
      r2 = t$$3
    }
  }
  return z$$2.revert(r$$21)
}
function bnModPowInt(e$$9, m$$8) {
  var z$$3;
  if(e$$9 < 256 || m$$8.isEven()) {
    z$$3 = new Classic(m$$8)
  }else {
    z$$3 = new Montgomery(m$$8)
  }
  return this.exp(e$$9, z$$3)
}
function bnClone() {
  var r$$22 = nbi();
  this.copyTo(r$$22);
  return r$$22
}
function bnIntValue() {
  var this_array$$20 = this.array;
  if(this.s < 0) {
    if(this.t == 1) {
      return this_array$$20[0] - BI_DV
    }else {
      if(this.t == 0) {
        return-1
      }
    }
  }else {
    if(this.t == 1) {
      return this_array$$20[0]
    }else {
      if(this.t == 0) {
        return 0
      }
    }
  }
  return(this_array$$20[1] & (1 << 32 - BI_DB) - 1) << BI_DB | this_array$$20[0]
}
function bnByteValue() {
  var this_array$$21 = this.array;
  return this.t == 0 ? this.s : this_array$$21[0] << 24 >> 24
}
function bnShortValue() {
  var this_array$$22 = this.array;
  return this.t == 0 ? this.s : this_array$$22[0] << 16 >> 16
}
function bnpChunkSize(r$$23) {
  return Math.floor(Math.LN2 * BI_DB / Math.log(r$$23))
}
function bnSigNum() {
  var this_array$$23 = this.array;
  if(this.s < 0) {
    return-1
  }else {
    if(this.t <= 0 || this.t == 1 && this_array$$23[0] <= 0) {
      return 0
    }else {
      return 1
    }
  }
}
function bnpToRadix(b$$3) {
  if(b$$3 == null) {
    b$$3 = 10
  }
  if(this.signum() == 0 || b$$3 < 2 || b$$3 > 36) {
    return"0"
  }
  var cs = this.chunkSize(b$$3);
  var a$$5 = Math.pow(b$$3, cs);
  var d$$1 = nbv(a$$5);
  var y$$36 = nbi();
  var z$$4 = nbi();
  var r$$24 = "";
  this.divRemTo(d$$1, y$$36, z$$4);
  for(;y$$36.signum() > 0;) {
    r$$24 = (a$$5 + z$$4.intValue()).toString(b$$3).substr(1) + r$$24;
    y$$36.divRemTo(d$$1, y$$36, z$$4)
  }
  return z$$4.intValue().toString(b$$3) + r$$24
}
function bnpFromRadix(s$$5, b$$4) {
  this.fromInt(0);
  if(b$$4 == null) {
    b$$4 = 10
  }
  var cs$$1 = this.chunkSize(b$$4);
  var d$$2 = Math.pow(b$$4, cs$$1);
  var mi$$1 = false;
  var j$$6 = 0;
  var w$$9 = 0;
  var i$$26 = 0;
  for(;i$$26 < s$$5.length;++i$$26) {
    var x$$68 = intAt(s$$5, i$$26);
    if(x$$68 < 0) {
      if(s$$5.charAt(i$$26) == "-" && this.signum() == 0) {
        mi$$1 = true
      }
      continue
    }
    w$$9 = b$$4 * w$$9 + x$$68;
    if(++j$$6 >= cs$$1) {
      this.dMultiply(d$$2);
      this.dAddOffset(w$$9, 0);
      j$$6 = 0;
      w$$9 = 0
    }
  }
  if(j$$6 > 0) {
    this.dMultiply(Math.pow(b$$4, j$$6));
    this.dAddOffset(w$$9, 0)
  }
  if(mi$$1) {
    BigInteger.ZERO.subTo(this, this)
  }
}
function bnpFromNumber(a$$6, b$$5, c$$10) {
  if("number" == typeof b$$5) {
    if(a$$6 < 2) {
      this.fromInt(1)
    }else {
      this.fromNumber(a$$6, c$$10);
      if(!this.testBit(a$$6 - 1)) {
        this.bitwiseTo(BigInteger.ONE.shiftLeft(a$$6 - 1), op_or, this)
      }
      if(this.isEven()) {
        this.dAddOffset(1, 0)
      }
      for(;!this.isProbablePrime(b$$5);) {
        this.dAddOffset(2, 0);
        if(this.bitLength() > a$$6) {
          this.subTo(BigInteger.ONE.shiftLeft(a$$6 - 1), this)
        }
      }
    }
  }else {
    var x$$69 = new Array;
    var t$$4 = a$$6 & 7;
    x$$69.length = (a$$6 >> 3) + 1;
    b$$5.nextBytes(x$$69);
    if(t$$4 > 0) {
      x$$69[0] &= (1 << t$$4) - 1
    }else {
      x$$69[0] = 0
    }
    this.fromString(x$$69, 256)
  }
}
function bnToByteArray() {
  var this_array$$24 = this.array;
  var i$$27 = this.t;
  var r$$25 = new Array;
  r$$25[0] = this.s;
  var p$$1 = BI_DB - i$$27 * BI_DB % 8;
  var d$$3;
  var k$$2 = 0;
  if(i$$27-- > 0) {
    if(p$$1 < BI_DB && (d$$3 = this_array$$24[i$$27] >> p$$1) != (this.s & BI_DM) >> p$$1) {
      r$$25[k$$2++] = d$$3 | this.s << BI_DB - p$$1
    }
    for(;i$$27 >= 0;) {
      if(p$$1 < 8) {
        d$$3 = (this_array$$24[i$$27] & (1 << p$$1) - 1) << 8 - p$$1;
        d$$3 |= this_array$$24[--i$$27] >> (p$$1 += BI_DB - 8)
      }else {
        d$$3 = this_array$$24[i$$27] >> (p$$1 -= 8) & 255;
        if(p$$1 <= 0) {
          p$$1 += BI_DB;
          --i$$27
        }
      }
      if((d$$3 & 128) != 0) {
        d$$3 |= -256
      }
      if(k$$2 == 0 && (this.s & 128) != (d$$3 & 128)) {
        ++k$$2
      }
      if(k$$2 > 0 || d$$3 != this.s) {
        r$$25[k$$2++] = d$$3
      }
    }
  }
  return r$$25
}
function bnEquals(a$$7) {
  return this.compareTo(a$$7) == 0
}
function bnMin(a$$8) {
  return this.compareTo(a$$8) < 0 ? this : a$$8
}
function bnMax(a$$9) {
  return this.compareTo(a$$9) > 0 ? this : a$$9
}
function bnpBitwiseTo(a$$10, op, r$$26) {
  var this_array$$25 = this.array;
  var a_array$$2 = a$$10.array;
  var r_array$$9 = r$$26.array;
  var i$$28;
  var f;
  var m$$9 = Math.min(a$$10.t, this.t);
  i$$28 = 0;
  for(;i$$28 < m$$9;++i$$28) {
    r_array$$9[i$$28] = op(this_array$$25[i$$28], a_array$$2[i$$28])
  }
  if(a$$10.t < this.t) {
    f = a$$10.s & BI_DM;
    i$$28 = m$$9;
    for(;i$$28 < this.t;++i$$28) {
      r_array$$9[i$$28] = op(this_array$$25[i$$28], f)
    }
    r$$26.t = this.t
  }else {
    f = this.s & BI_DM;
    i$$28 = m$$9;
    for(;i$$28 < a$$10.t;++i$$28) {
      r_array$$9[i$$28] = op(f, a_array$$2[i$$28])
    }
    r$$26.t = a$$10.t
  }
  r$$26.s = op(this.s, a$$10.s);
  r$$26.clamp()
}
function op_and(x$$70, y$$37) {
  return x$$70 & y$$37
}
function bnAnd(a$$11) {
  var r$$27 = nbi();
  this.bitwiseTo(a$$11, op_and, r$$27);
  return r$$27
}
function op_or(x$$71, y$$38) {
  return x$$71 | y$$38
}
function bnOr(a$$12) {
  var r$$28 = nbi();
  this.bitwiseTo(a$$12, op_or, r$$28);
  return r$$28
}
function op_xor(x$$72, y$$39) {
  return x$$72 ^ y$$39
}
function bnXor(a$$13) {
  var r$$29 = nbi();
  this.bitwiseTo(a$$13, op_xor, r$$29);
  return r$$29
}
function op_andnot(x$$73, y$$40) {
  return x$$73 & ~y$$40
}
function bnAndNot(a$$14) {
  var r$$30 = nbi();
  this.bitwiseTo(a$$14, op_andnot, r$$30);
  return r$$30
}
function bnNot() {
  var this_array$$26 = this.array;
  var r$$31 = nbi();
  var r_array$$10 = r$$31.array;
  var i$$29 = 0;
  for(;i$$29 < this.t;++i$$29) {
    r_array$$10[i$$29] = BI_DM & ~this_array$$26[i$$29]
  }
  r$$31.t = this.t;
  r$$31.s = ~this.s;
  return r$$31
}
function bnShiftLeft(n$$10) {
  var r$$32 = nbi();
  if(n$$10 < 0) {
    this.rShiftTo(-n$$10, r$$32)
  }else {
    this.lShiftTo(n$$10, r$$32)
  }
  return r$$32
}
function bnShiftRight(n$$11) {
  var r$$33 = nbi();
  if(n$$11 < 0) {
    this.lShiftTo(-n$$11, r$$33)
  }else {
    this.rShiftTo(n$$11, r$$33)
  }
  return r$$33
}
function lbit(x$$74) {
  if(x$$74 == 0) {
    return-1
  }
  var r$$34 = 0;
  if((x$$74 & 65535) == 0) {
    x$$74 >>= 16;
    r$$34 += 16
  }
  if((x$$74 & 255) == 0) {
    x$$74 >>= 8;
    r$$34 += 8
  }
  if((x$$74 & 15) == 0) {
    x$$74 >>= 4;
    r$$34 += 4
  }
  if((x$$74 & 3) == 0) {
    x$$74 >>= 2;
    r$$34 += 2
  }
  if((x$$74 & 1) == 0) {
    ++r$$34
  }
  return r$$34
}
function bnGetLowestSetBit() {
  var this_array$$27 = this.array;
  var i$$30 = 0;
  for(;i$$30 < this.t;++i$$30) {
    if(this_array$$27[i$$30] != 0) {
      return i$$30 * BI_DB + lbit(this_array$$27[i$$30])
    }
  }
  if(this.s < 0) {
    return this.t * BI_DB
  }
  return-1
}
function cbit(x$$75) {
  var r$$35 = 0;
  for(;x$$75 != 0;) {
    x$$75 &= x$$75 - 1;
    ++r$$35
  }
  return r$$35
}
function bnBitCount() {
  var r$$36 = 0;
  var x$$76 = this.s & BI_DM;
  var i$$31 = 0;
  for(;i$$31 < this.t;++i$$31) {
    r$$36 += cbit(this_array[i$$31] ^ x$$76)
  }
  return r$$36
}
function bnTestBit(n$$12) {
  var this_array$$28 = this.array;
  var j$$7 = Math.floor(n$$12 / BI_DB);
  if(j$$7 >= this.t) {
    return this.s != 0
  }
  return(this_array$$28[j$$7] & 1 << n$$12 % BI_DB) != 0
}
function bnpChangeBit(n$$13, op$$1) {
  var r$$37 = BigInteger.ONE.shiftLeft(n$$13);
  this.bitwiseTo(r$$37, op$$1, r$$37);
  return r$$37
}
function bnSetBit(n$$14) {
  return this.changeBit(n$$14, op_or)
}
function bnClearBit(n$$15) {
  return this.changeBit(n$$15, op_andnot)
}
function bnFlipBit(n$$16) {
  return this.changeBit(n$$16, op_xor)
}
function bnpAddTo(a$$15, r$$38) {
  var this_array$$29 = this.array;
  var a_array$$3 = a$$15.array;
  var r_array$$11 = r$$38.array;
  var i$$32 = 0;
  var c$$11 = 0;
  var m$$10 = Math.min(a$$15.t, this.t);
  for(;i$$32 < m$$10;) {
    c$$11 += this_array$$29[i$$32] + a_array$$3[i$$32];
    r_array$$11[i$$32++] = c$$11 & BI_DM;
    c$$11 >>= BI_DB
  }
  if(a$$15.t < this.t) {
    c$$11 += a$$15.s;
    for(;i$$32 < this.t;) {
      c$$11 += this_array$$29[i$$32];
      r_array$$11[i$$32++] = c$$11 & BI_DM;
      c$$11 >>= BI_DB
    }
    c$$11 += this.s
  }else {
    c$$11 += this.s;
    for(;i$$32 < a$$15.t;) {
      c$$11 += a_array$$3[i$$32];
      r_array$$11[i$$32++] = c$$11 & BI_DM;
      c$$11 >>= BI_DB
    }
    c$$11 += a$$15.s
  }
  r$$38.s = c$$11 < 0 ? -1 : 0;
  if(c$$11 > 0) {
    r_array$$11[i$$32++] = c$$11
  }else {
    if(c$$11 < -1) {
      r_array$$11[i$$32++] = BI_DV + c$$11
    }
  }
  r$$38.t = i$$32;
  r$$38.clamp()
}
function bnAdd(a$$16) {
  var r$$39 = nbi();
  this.addTo(a$$16, r$$39);
  return r$$39
}
function bnSubtract(a$$17) {
  var r$$40 = nbi();
  this.subTo(a$$17, r$$40);
  return r$$40
}
function bnMultiply(a$$18) {
  var r$$41 = nbi();
  this.multiplyTo(a$$18, r$$41);
  return r$$41
}
function bnDivide(a$$19) {
  var r$$42 = nbi();
  this.divRemTo(a$$19, r$$42, null);
  return r$$42
}
function bnRemainder(a$$20) {
  var r$$43 = nbi();
  this.divRemTo(a$$20, null, r$$43);
  return r$$43
}
function bnDivideAndRemainder(a$$21) {
  var q$$1 = nbi();
  var r$$44 = nbi();
  this.divRemTo(a$$21, q$$1, r$$44);
  return new Array(q$$1, r$$44)
}
function bnpDMultiply(n$$17) {
  var this_array$$30 = this.array;
  this_array$$30[this.t] = this.am(0, n$$17 - 1, this, 0, 0, this.t);
  ++this.t;
  this.clamp()
}
function bnpDAddOffset(n$$18, w$$10) {
  var this_array$$31 = this.array;
  for(;this.t <= w$$10;) {
    this_array$$31[this.t++] = 0
  }
  this_array$$31[w$$10] += n$$18;
  for(;this_array$$31[w$$10] >= BI_DV;) {
    this_array$$31[w$$10] -= BI_DV;
    if(++w$$10 >= this.t) {
      this_array$$31[this.t++] = 0
    }
    ++this_array$$31[w$$10]
  }
}
function NullExp() {
}
function nNop(x$$77) {
  return x$$77
}
function nMulTo(x$$78, y$$41, r$$45) {
  x$$78.multiplyTo(y$$41, r$$45)
}
function nSqrTo(x$$79, r$$46) {
  x$$79.squareTo(r$$46)
}
function bnPow(e$$10) {
  return this.exp(e$$10, new NullExp)
}
function bnpMultiplyLowerTo(a$$22, n$$19, r$$47) {
  var r_array$$12 = r$$47.array;
  var a_array$$4 = a$$22.array;
  var i$$33 = Math.min(this.t + a$$22.t, n$$19);
  r$$47.s = 0;
  r$$47.t = i$$33;
  for(;i$$33 > 0;) {
    r_array$$12[--i$$33] = 0
  }
  var j$$8;
  j$$8 = r$$47.t - this.t;
  for(;i$$33 < j$$8;++i$$33) {
    r_array$$12[i$$33 + this.t] = this.am(0, a_array$$4[i$$33], r$$47, i$$33, 0, this.t)
  }
  j$$8 = Math.min(a$$22.t, n$$19);
  for(;i$$33 < j$$8;++i$$33) {
    this.am(0, a_array$$4[i$$33], r$$47, i$$33, 0, n$$19 - i$$33)
  }
  r$$47.clamp()
}
function bnpMultiplyUpperTo(a$$23, n$$20, r$$48) {
  var r_array$$13 = r$$48.array;
  var a_array$$5 = a$$23.array;
  --n$$20;
  var i$$34 = r$$48.t = this.t + a$$23.t - n$$20;
  r$$48.s = 0;
  for(;--i$$34 >= 0;) {
    r_array$$13[i$$34] = 0
  }
  i$$34 = Math.max(n$$20 - this.t, 0);
  for(;i$$34 < a$$23.t;++i$$34) {
    r_array$$13[this.t + i$$34 - n$$20] = this.am(n$$20 - i$$34, a_array$$5[i$$34], r$$48, 0, 0, this.t + i$$34 - n$$20)
  }
  r$$48.clamp();
  r$$48.drShiftTo(1, r$$48)
}
function Barrett(m$$11) {
  this.r2 = nbi();
  this.q3 = nbi();
  BigInteger.ONE.dlShiftTo(2 * m$$11.t, this.r2);
  this.mu = this.r2.divide(m$$11);
  this.m = m$$11
}
function barrettConvert(x$$80) {
  if(x$$80.s < 0 || x$$80.t > 2 * this.m.t) {
    return x$$80.mod(this.m)
  }else {
    if(x$$80.compareTo(this.m) < 0) {
      return x$$80
    }else {
      var r$$49 = nbi();
      x$$80.copyTo(r$$49);
      this.reduce(r$$49);
      return r$$49
    }
  }
}
function barrettRevert(x$$81) {
  return x$$81
}
function barrettReduce(x$$82) {
  x$$82.drShiftTo(this.m.t - 1, this.r2);
  if(x$$82.t > this.m.t + 1) {
    x$$82.t = this.m.t + 1;
    x$$82.clamp()
  }
  this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3);
  this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);
  for(;x$$82.compareTo(this.r2) < 0;) {
    x$$82.dAddOffset(1, this.m.t + 1)
  }
  x$$82.subTo(this.r2, x$$82);
  for(;x$$82.compareTo(this.m) >= 0;) {
    x$$82.subTo(this.m, x$$82)
  }
}
function barrettSqrTo(x$$83, r$$50) {
  x$$83.squareTo(r$$50);
  this.reduce(r$$50)
}
function barrettMulTo(x$$84, y$$42, r$$51) {
  x$$84.multiplyTo(y$$42, r$$51);
  this.reduce(r$$51)
}
function bnModPow(e$$11, m$$12) {
  var e_array = e$$11.array;
  var i$$35 = e$$11.bitLength();
  var k$$3;
  var r$$52 = nbv(1);
  var z$$5;
  if(i$$35 <= 0) {
    return r$$52
  }else {
    if(i$$35 < 18) {
      k$$3 = 1
    }else {
      if(i$$35 < 48) {
        k$$3 = 3
      }else {
        if(i$$35 < 144) {
          k$$3 = 4
        }else {
          if(i$$35 < 768) {
            k$$3 = 5
          }else {
            k$$3 = 6
          }
        }
      }
    }
  }
  if(i$$35 < 8) {
    z$$5 = new Classic(m$$12)
  }else {
    if(m$$12.isEven()) {
      z$$5 = new Barrett(m$$12)
    }else {
      z$$5 = new Montgomery(m$$12)
    }
  }
  var g$$1 = new Array;
  var n$$21 = 3;
  var k1 = k$$3 - 1;
  var km$$1 = (1 << k$$3) - 1;
  g$$1[1] = z$$5.convert(this);
  if(k$$3 > 1) {
    var g2 = nbi();
    z$$5.sqrTo(g$$1[1], g2);
    for(;n$$21 <= km$$1;) {
      g$$1[n$$21] = nbi();
      z$$5.mulTo(g2, g$$1[n$$21 - 2], g$$1[n$$21]);
      n$$21 += 2
    }
  }
  var j$$9 = e$$11.t - 1;
  var w$$11;
  var is1 = true;
  var r2$$1 = nbi();
  var t$$5;
  i$$35 = nbits(e_array[j$$9]) - 1;
  for(;j$$9 >= 0;) {
    if(i$$35 >= k1) {
      w$$11 = e_array[j$$9] >> i$$35 - k1 & km$$1
    }else {
      w$$11 = (e_array[j$$9] & (1 << i$$35 + 1) - 1) << k1 - i$$35;
      if(j$$9 > 0) {
        w$$11 |= e_array[j$$9 - 1] >> BI_DB + i$$35 - k1
      }
    }
    n$$21 = k$$3;
    for(;(w$$11 & 1) == 0;) {
      w$$11 >>= 1;
      --n$$21
    }
    if((i$$35 -= n$$21) < 0) {
      i$$35 += BI_DB;
      --j$$9
    }
    if(is1) {
      g$$1[w$$11].copyTo(r$$52);
      is1 = false
    }else {
      for(;n$$21 > 1;) {
        z$$5.sqrTo(r$$52, r2$$1);
        z$$5.sqrTo(r2$$1, r$$52);
        n$$21 -= 2
      }
      if(n$$21 > 0) {
        z$$5.sqrTo(r$$52, r2$$1)
      }else {
        t$$5 = r$$52;
        r$$52 = r2$$1;
        r2$$1 = t$$5
      }
      z$$5.mulTo(r2$$1, g$$1[w$$11], r$$52)
    }
    for(;j$$9 >= 0 && (e_array[j$$9] & 1 << i$$35) == 0;) {
      z$$5.sqrTo(r$$52, r2$$1);
      t$$5 = r$$52;
      r$$52 = r2$$1;
      r2$$1 = t$$5;
      if(--i$$35 < 0) {
        i$$35 = BI_DB - 1;
        --j$$9
      }
    }
  }
  return z$$5.revert(r$$52)
}
function bnGCD(a$$24) {
  var x$$85 = this.s < 0 ? this.negate() : this.clone();
  var y$$43 = a$$24.s < 0 ? a$$24.negate() : a$$24.clone();
  if(x$$85.compareTo(y$$43) < 0) {
    var t$$6 = x$$85;
    x$$85 = y$$43;
    y$$43 = t$$6
  }
  var i$$36 = x$$85.getLowestSetBit();
  var g$$2 = y$$43.getLowestSetBit();
  if(g$$2 < 0) {
    return x$$85
  }
  if(i$$36 < g$$2) {
    g$$2 = i$$36
  }
  if(g$$2 > 0) {
    x$$85.rShiftTo(g$$2, x$$85);
    y$$43.rShiftTo(g$$2, y$$43)
  }
  for(;x$$85.signum() > 0;) {
    if((i$$36 = x$$85.getLowestSetBit()) > 0) {
      x$$85.rShiftTo(i$$36, x$$85)
    }
    if((i$$36 = y$$43.getLowestSetBit()) > 0) {
      y$$43.rShiftTo(i$$36, y$$43)
    }
    if(x$$85.compareTo(y$$43) >= 0) {
      x$$85.subTo(y$$43, x$$85);
      x$$85.rShiftTo(1, x$$85)
    }else {
      y$$43.subTo(x$$85, y$$43);
      y$$43.rShiftTo(1, y$$43)
    }
  }
  if(g$$2 > 0) {
    y$$43.lShiftTo(g$$2, y$$43)
  }
  return y$$43
}
function bnpModInt(n$$22) {
  var this_array$$32 = this.array;
  if(n$$22 <= 0) {
    return 0
  }
  var d$$4 = BI_DV % n$$22;
  var r$$53 = this.s < 0 ? n$$22 - 1 : 0;
  if(this.t > 0) {
    if(d$$4 == 0) {
      r$$53 = this_array$$32[0] % n$$22
    }else {
      var i$$37 = this.t - 1;
      for(;i$$37 >= 0;--i$$37) {
        r$$53 = (d$$4 * r$$53 + this_array$$32[i$$37]) % n$$22
      }
    }
  }
  return r$$53
}
function bnModInverse(m$$13) {
  var ac = m$$13.isEven();
  if(this.isEven() && ac || m$$13.signum() == 0) {
    return BigInteger.ZERO
  }
  var u = m$$13.clone();
  var v$$1 = this.clone();
  var a$$25 = nbv(1);
  var b$$6 = nbv(0);
  var c$$12 = nbv(0);
  var d$$5 = nbv(1);
  for(;u.signum() != 0;) {
    for(;u.isEven();) {
      u.rShiftTo(1, u);
      if(ac) {
        if(!a$$25.isEven() || !b$$6.isEven()) {
          a$$25.addTo(this, a$$25);
          b$$6.subTo(m$$13, b$$6)
        }
        a$$25.rShiftTo(1, a$$25)
      }else {
        if(!b$$6.isEven()) {
          b$$6.subTo(m$$13, b$$6)
        }
      }
      b$$6.rShiftTo(1, b$$6)
    }
    for(;v$$1.isEven();) {
      v$$1.rShiftTo(1, v$$1);
      if(ac) {
        if(!c$$12.isEven() || !d$$5.isEven()) {
          c$$12.addTo(this, c$$12);
          d$$5.subTo(m$$13, d$$5)
        }
        c$$12.rShiftTo(1, c$$12)
      }else {
        if(!d$$5.isEven()) {
          d$$5.subTo(m$$13, d$$5)
        }
      }
      d$$5.rShiftTo(1, d$$5)
    }
    if(u.compareTo(v$$1) >= 0) {
      u.subTo(v$$1, u);
      if(ac) {
        a$$25.subTo(c$$12, a$$25)
      }
      b$$6.subTo(d$$5, b$$6)
    }else {
      v$$1.subTo(u, v$$1);
      if(ac) {
        c$$12.subTo(a$$25, c$$12)
      }
      d$$5.subTo(b$$6, d$$5)
    }
  }
  if(v$$1.compareTo(BigInteger.ONE) != 0) {
    return BigInteger.ZERO
  }
  if(d$$5.compareTo(m$$13) >= 0) {
    return d$$5.subtract(m$$13)
  }
  if(d$$5.signum() < 0) {
    d$$5.addTo(m$$13, d$$5)
  }else {
    return d$$5
  }
  if(d$$5.signum() < 0) {
    return d$$5.add(m$$13)
  }else {
    return d$$5
  }
}
function bnIsProbablePrime(t$$7) {
  var i$$38;
  var x$$86 = this.abs();
  var x_array$$2 = x$$86.array;
  if(x$$86.t == 1 && x_array$$2[0] <= lowprimes[lowprimes.length - 1]) {
    i$$38 = 0;
    for(;i$$38 < lowprimes.length;++i$$38) {
      if(x_array$$2[0] == lowprimes[i$$38]) {
        return true
      }
    }
    return false
  }
  if(x$$86.isEven()) {
    return false
  }
  i$$38 = 1;
  for(;i$$38 < lowprimes.length;) {
    var m$$14 = lowprimes[i$$38];
    var j$$10 = i$$38 + 1;
    for(;j$$10 < lowprimes.length && m$$14 < lplim;) {
      m$$14 *= lowprimes[j$$10++]
    }
    m$$14 = x$$86.modInt(m$$14);
    for(;i$$38 < j$$10;) {
      if(m$$14 % lowprimes[i$$38++] == 0) {
        return false
      }
    }
  }
  return x$$86.millerRabin(t$$7)
}
function bnpMillerRabin(t$$8) {
  var n1 = this.subtract(BigInteger.ONE);
  var k$$4 = n1.getLowestSetBit();
  if(k$$4 <= 0) {
    return false
  }
  var r$$54 = n1.shiftRight(k$$4);
  t$$8 = t$$8 + 1 >> 1;
  if(t$$8 > lowprimes.length) {
    t$$8 = lowprimes.length
  }
  var a$$26 = nbi();
  var i$$39 = 0;
  for(;i$$39 < t$$8;++i$$39) {
    a$$26.fromInt(lowprimes[i$$39]);
    var y$$44 = a$$26.modPow(r$$54, this);
    if(y$$44.compareTo(BigInteger.ONE) != 0 && y$$44.compareTo(n1) != 0) {
      var j$$11 = 1;
      for(;j$$11++ < k$$4 && y$$44.compareTo(n1) != 0;) {
        y$$44 = y$$44.modPowInt(2, this);
        if(y$$44.compareTo(BigInteger.ONE) == 0) {
          return false
        }
      }
      if(y$$44.compareTo(n1) != 0) {
        return false
      }
    }
  }
  return true
}
function Arcfour() {
  this.i = 0;
  this.j = 0;
  this.S = new Array
}
function ARC4init(key$$14) {
  var i$$40;
  var j$$12;
  var t$$9;
  i$$40 = 0;
  for(;i$$40 < 256;++i$$40) {
    this.S[i$$40] = i$$40
  }
  j$$12 = 0;
  i$$40 = 0;
  for(;i$$40 < 256;++i$$40) {
    j$$12 = j$$12 + this.S[i$$40] + key$$14[i$$40 % key$$14.length] & 255;
    t$$9 = this.S[i$$40];
    this.S[i$$40] = this.S[j$$12];
    this.S[j$$12] = t$$9
  }
  this.i = 0;
  this.j = 0
}
function ARC4next() {
  var t$$10;
  this.i = this.i + 1 & 255;
  this.j = this.j + this.S[this.i] & 255;
  t$$10 = this.S[this.i];
  this.S[this.i] = this.S[this.j];
  this.S[this.j] = t$$10;
  return this.S[t$$10 + this.S[this.i] & 255]
}
function prng_newstate() {
  return new Arcfour
}
function rng_seed_int(x$$87) {
  rng_pool[rng_pptr++] ^= x$$87 & 255;
  rng_pool[rng_pptr++] ^= x$$87 >> 8 & 255;
  rng_pool[rng_pptr++] ^= x$$87 >> 16 & 255;
  rng_pool[rng_pptr++] ^= x$$87 >> 24 & 255;
  if(rng_pptr >= rng_psize) {
    rng_pptr -= rng_psize
  }
}
function rng_seed_time() {
  rng_seed_int(1122926989487)
}
function rng_get_byte() {
  if(rng_state == null) {
    rng_seed_time();
    rng_state = prng_newstate();
    rng_state.init(rng_pool);
    rng_pptr = 0;
    for(;rng_pptr < rng_pool.length;++rng_pptr) {
      rng_pool[rng_pptr] = 0
    }
    rng_pptr = 0
  }
  return rng_state.next()
}
function rng_get_bytes(ba) {
  var i$$41;
  i$$41 = 0;
  for(;i$$41 < ba.length;++i$$41) {
    ba[i$$41] = rng_get_byte()
  }
}
function SecureRandom() {
}
function parseBigInt(str$$6, r$$55) {
  return new BigInteger(str$$6, r$$55)
}
function linebrk(s$$6, n$$23) {
  var ret = "";
  var i$$42 = 0;
  for(;i$$42 + n$$23 < s$$6.length;) {
    ret += s$$6.substring(i$$42, i$$42 + n$$23) + "\n";
    i$$42 += n$$23
  }
  return ret + s$$6.substring(i$$42, s$$6.length)
}
function byte2Hex(b$$7) {
  if(b$$7 < 16) {
    return"0" + b$$7.toString(16)
  }else {
    return b$$7.toString(16)
  }
}
function pkcs1pad2(s$$7, n$$24) {
  if(n$$24 < s$$7.length + 11) {
    alert("Message too long for RSA");
    return null
  }
  var ba$$1 = new Array;
  var i$$43 = s$$7.length - 1;
  for(;i$$43 >= 0 && n$$24 > 0;) {
    ba$$1[--n$$24] = s$$7.charCodeAt(i$$43--)
  }
  ba$$1[--n$$24] = 0;
  var rng = new SecureRandom;
  var x$$88 = new Array;
  for(;n$$24 > 2;) {
    x$$88[0] = 0;
    for(;x$$88[0] == 0;) {
      rng.nextBytes(x$$88)
    }
    ba$$1[--n$$24] = x$$88[0]
  }
  ba$$1[--n$$24] = 2;
  ba$$1[--n$$24] = 0;
  return new BigInteger(ba$$1)
}
function RSAKey() {
  this.n = null;
  this.e = 0;
  this.d = null;
  this.p = null;
  this.q = null;
  this.dmp1 = null;
  this.dmq1 = null;
  this.coeff = null
}
function RSASetPublic(N, E) {
  if(N != null && E != null && N.length > 0 && E.length > 0) {
    this.n = parseBigInt(N, 16);
    this.e = parseInt(E, 16)
  }else {
    alert("Invalid RSA public key")
  }
}
function RSADoPublic(x$$89) {
  return x$$89.modPowInt(this.e, this.n)
}
function RSAEncrypt(text$$7) {
  var m$$15 = pkcs1pad2(text$$7, this.n.bitLength() + 7 >> 3);
  if(m$$15 == null) {
    return null
  }
  var c$$13 = this.doPublic(m$$15);
  if(c$$13 == null) {
    return null
  }
  var h$$7 = c$$13.toString(16);
  if((h$$7.length & 1) == 0) {
    return h$$7
  }else {
    return"0" + h$$7
  }
}
function pkcs1unpad2(d$$6, n$$25) {
  var b$$8 = d$$6.toByteArray();
  var i$$44 = 0;
  for(;i$$44 < b$$8.length && b$$8[i$$44] == 0;) {
    ++i$$44
  }
  if(b$$8.length - i$$44 != n$$25 - 1 || b$$8[i$$44] != 2) {
    return null
  }
  ++i$$44;
  for(;b$$8[i$$44] != 0;) {
    if(++i$$44 >= b$$8.length) {
      return null
    }
  }
  var ret$$1 = "";
  for(;++i$$44 < b$$8.length;) {
    ret$$1 += String.fromCharCode(b$$8[i$$44])
  }
  return ret$$1
}
function RSASetPrivate(N$$1, E$$1, D) {
  if(N$$1 != null && E$$1 != null && N$$1.length > 0 && E$$1.length > 0) {
    this.n = parseBigInt(N$$1, 16);
    this.e = parseInt(E$$1, 16);
    this.d = parseBigInt(D, 16)
  }else {
    alert("Invalid RSA private key")
  }
}
function RSASetPrivateEx(N$$2, E$$2, D$$1, P, Q, DP, DQ, C) {
  if(N$$2 != null && E$$2 != null && N$$2.length > 0 && E$$2.length > 0) {
    this.n = parseBigInt(N$$2, 16);
    this.e = parseInt(E$$2, 16);
    this.d = parseBigInt(D$$1, 16);
    this.p = parseBigInt(P, 16);
    this.q = parseBigInt(Q, 16);
    this.dmp1 = parseBigInt(DP, 16);
    this.dmq1 = parseBigInt(DQ, 16);
    this.coeff = parseBigInt(C, 16)
  }else {
    alert("Invalid RSA private key")
  }
}
function RSAGenerate(B, E$$3) {
  var rng$$1 = new SecureRandom;
  var qs = B >> 1;
  this.e = parseInt(E$$3, 16);
  var ee = new BigInteger(E$$3, 16);
  for(;;) {
    for(;;) {
      this.p = new BigInteger(B - qs, 1, rng$$1);
      if(this.p.subtract(BigInteger.ONE).gcd(ee).compareTo(BigInteger.ONE) == 0 && this.p.isProbablePrime(10)) {
        break
      }
    }
    for(;;) {
      this.q = new BigInteger(qs, 1, rng$$1);
      if(this.q.subtract(BigInteger.ONE).gcd(ee).compareTo(BigInteger.ONE) == 0 && this.q.isProbablePrime(10)) {
        break
      }
    }
    if(this.p.compareTo(this.q) <= 0) {
      var t$$11 = this.p;
      this.p = this.q;
      this.q = t$$11
    }
    var p1 = this.p.subtract(BigInteger.ONE);
    var q1 = this.q.subtract(BigInteger.ONE);
    var phi = p1.multiply(q1);
    if(phi.gcd(ee).compareTo(BigInteger.ONE) == 0) {
      this.n = this.p.multiply(this.q);
      this.d = ee.modInverse(phi);
      this.dmp1 = this.d.mod(p1);
      this.dmq1 = this.d.mod(q1);
      this.coeff = this.q.modInverse(this.p);
      break
    }
  }
}
function RSADoPrivate(x$$90) {
  if(this.p == null || this.q == null) {
    return x$$90.modPow(this.d, this.n)
  }
  var xp = x$$90.mod(this.p).modPow(this.dmp1, this.p);
  var xq = x$$90.mod(this.q).modPow(this.dmq1, this.q);
  for(;xp.compareTo(xq) < 0;) {
    xp = xp.add(this.p)
  }
  return xp.subtract(xq).multiply(this.coeff).mod(this.p).multiply(this.q).add(xq)
}
function RSADecrypt(ctext) {
  var c$$14 = parseBigInt(ctext, 16);
  var m$$16 = this.doPrivate(c$$14);
  if(m$$16 == null) {
    return null
  }
  return pkcs1unpad2(m$$16, this.n.bitLength() + 7 >> 3)
}
function encrypt() {
  var RSA = new RSAKey;
  RSA.setPublic(nValue, eValue);
  RSA.setPrivateEx(nValue, eValue, dValue, pValue, qValue, dmp1Value, dmq1Value, coeffValue);
  encrypted = RSA.encrypt(TEXT)
}
function decrypt() {
  var RSA$$1 = new RSAKey;
  RSA$$1.setPublic(nValue, eValue);
  RSA$$1.setPrivateEx(nValue, eValue, dValue, pValue, qValue, dmp1Value, dmq1Value, coeffValue);
  var decrypted = RSA$$1.decrypt(encrypted);
  if(decrypted != TEXT) {
    throw new Error("Crypto operation failed");
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
function AddResult(name$$34, result$$2) {
  console.log(name$$34 + ": " + result$$2);
  var box$$1 = document.getElementById("Result-" + name$$34);
  box$$1.innerHTML = result$$2
}
function AddError(name$$35, error$$3) {
  console.log(name$$35 + ": " + error$$3.message);
  if(error$$3 == "TypedArrayUnsupported") {
    AddResult(name$$35, "<b>Unsupported</b>")
  }else {
    if(error$$3 == "PerformanceNowUnsupported") {
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
    var start$$4 = new Date;
    var i$$5 = 0;
    for(;doDeterministic$$1 ? i$$5 < benchmark$$1.deterministicIterations : elapsed < 1E3;i$$5++) {
      benchmark$$1.run();
      elapsed = new Date - start$$4
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
var Crypto = new BenchmarkSuite("Crypto", [266181], [new Benchmark("Encrypt", true, false, 3900, encrypt), new Benchmark("Decrypt", true, false, 220, decrypt)]);
var dbits;
var BI_DB;
var BI_DM;
var BI_DV;
var BI_FP;
var BI_FV;
var BI_F1;
var BI_F2;
var canary = 0xdeadbeefcafe;
var j_lm = (canary & 16777215) == 15715070;
setupEngine = function(fn, bits) {
  BigInteger.prototype.am = fn;
  dbits = bits;
  BI_DB = dbits;
  BI_DM = (1 << dbits) - 1;
  BI_DV = 1 << dbits;
  BI_FP = 52;
  BI_FV = Math.pow(2, BI_FP);
  BI_F1 = BI_FP - dbits;
  BI_F2 = 2 * dbits - BI_FP
};
var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
var BI_RC = new Array;
var rr;
var vv;
rr = "0".charCodeAt(0);
vv = 0;
for(;vv <= 9;++vv) {
  BI_RC[rr++] = vv
}
rr = "a".charCodeAt(0);
vv = 10;
for(;vv < 36;++vv) {
  BI_RC[rr++] = vv
}
rr = "A".charCodeAt(0);
vv = 10;
for(;vv < 36;++vv) {
  BI_RC[rr++] = vv
}
Classic.prototype.convert = cConvert;
Classic.prototype.revert = cRevert;
Classic.prototype.reduce = cReduce;
Classic.prototype.mulTo = cMulTo;
Classic.prototype.sqrTo = cSqrTo;
Montgomery.prototype.convert = montConvert;
Montgomery.prototype.revert = montRevert;
Montgomery.prototype.reduce = montReduce;
Montgomery.prototype.mulTo = montMulTo;
Montgomery.prototype.sqrTo = montSqrTo;
BigInteger.prototype.copyTo = bnpCopyTo;
BigInteger.prototype.fromInt = bnpFromInt;
BigInteger.prototype.fromString = bnpFromString;
BigInteger.prototype.clamp = bnpClamp;
BigInteger.prototype.dlShiftTo = bnpDLShiftTo;
BigInteger.prototype.drShiftTo = bnpDRShiftTo;
BigInteger.prototype.lShiftTo = bnpLShiftTo;
BigInteger.prototype.rShiftTo = bnpRShiftTo;
BigInteger.prototype.subTo = bnpSubTo;
BigInteger.prototype.multiplyTo = bnpMultiplyTo;
BigInteger.prototype.squareTo = bnpSquareTo;
BigInteger.prototype.divRemTo = bnpDivRemTo;
BigInteger.prototype.invDigit = bnpInvDigit;
BigInteger.prototype.isEven = bnpIsEven;
BigInteger.prototype.exp = bnpExp;
BigInteger.prototype.toString = bnToString;
BigInteger.prototype.negate = bnNegate;
BigInteger.prototype.abs = bnAbs;
BigInteger.prototype.compareTo = bnCompareTo;
BigInteger.prototype.bitLength = bnBitLength;
BigInteger.prototype.mod = bnMod;
BigInteger.prototype.modPowInt = bnModPowInt;
BigInteger.ZERO = nbv(0);
BigInteger.ONE = nbv(1);
NullExp.prototype.convert = nNop;
NullExp.prototype.revert = nNop;
NullExp.prototype.mulTo = nMulTo;
NullExp.prototype.sqrTo = nSqrTo;
Barrett.prototype.convert = barrettConvert;
Barrett.prototype.revert = barrettRevert;
Barrett.prototype.reduce = barrettReduce;
Barrett.prototype.mulTo = barrettMulTo;
Barrett.prototype.sqrTo = barrettSqrTo;
var lowprimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509];
var lplim = (1 << 26) / lowprimes[lowprimes.length - 1];
BigInteger.prototype.chunkSize = bnpChunkSize;
BigInteger.prototype.toRadix = bnpToRadix;
BigInteger.prototype.fromRadix = bnpFromRadix;
BigInteger.prototype.fromNumber = bnpFromNumber;
BigInteger.prototype.bitwiseTo = bnpBitwiseTo;
BigInteger.prototype.changeBit = bnpChangeBit;
BigInteger.prototype.addTo = bnpAddTo;
BigInteger.prototype.dMultiply = bnpDMultiply;
BigInteger.prototype.dAddOffset = bnpDAddOffset;
BigInteger.prototype.multiplyLowerTo = bnpMultiplyLowerTo;
BigInteger.prototype.multiplyUpperTo = bnpMultiplyUpperTo;
BigInteger.prototype.modInt = bnpModInt;
BigInteger.prototype.millerRabin = bnpMillerRabin;
BigInteger.prototype.clone = bnClone;
BigInteger.prototype.intValue = bnIntValue;
BigInteger.prototype.byteValue = bnByteValue;
BigInteger.prototype.shortValue = bnShortValue;
BigInteger.prototype.signum = bnSigNum;
BigInteger.prototype.toByteArray = bnToByteArray;
BigInteger.prototype.equals = bnEquals;
BigInteger.prototype.min = bnMin;
BigInteger.prototype.max = bnMax;
BigInteger.prototype.and = bnAnd;
BigInteger.prototype.or = bnOr;
BigInteger.prototype.xor = bnXor;
BigInteger.prototype.andNot = bnAndNot;
BigInteger.prototype.not = bnNot;
BigInteger.prototype.shiftLeft = bnShiftLeft;
BigInteger.prototype.shiftRight = bnShiftRight;
BigInteger.prototype.getLowestSetBit = bnGetLowestSetBit;
BigInteger.prototype.bitCount = bnBitCount;
BigInteger.prototype.testBit = bnTestBit;
BigInteger.prototype.setBit = bnSetBit;
BigInteger.prototype.clearBit = bnClearBit;
BigInteger.prototype.flipBit = bnFlipBit;
BigInteger.prototype.add = bnAdd;
BigInteger.prototype.subtract = bnSubtract;
BigInteger.prototype.multiply = bnMultiply;
BigInteger.prototype.divide = bnDivide;
BigInteger.prototype.remainder = bnRemainder;
BigInteger.prototype.divideAndRemainder = bnDivideAndRemainder;
BigInteger.prototype.modPow = bnModPow;
BigInteger.prototype.modInverse = bnModInverse;
BigInteger.prototype.pow = bnPow;
BigInteger.prototype.gcd = bnGCD;
BigInteger.prototype.isProbablePrime = bnIsProbablePrime;
Arcfour.prototype.init = ARC4init;
Arcfour.prototype.next = ARC4next;
var rng_psize = 256;
var rng_state;
var rng_pool;
var rng_pptr;
if(rng_pool == null) {
  rng_pool = new Array;
  rng_pptr = 0;
  var t;
  for(;rng_pptr < rng_psize;) {
    t = Math.floor(65536 * Math.random());
    rng_pool[rng_pptr++] = t >>> 8;
    rng_pool[rng_pptr++] = t & 255
  }
  rng_pptr = 0;
  rng_seed_time()
}
SecureRandom.prototype.nextBytes = rng_get_bytes;
RSAKey.prototype.doPublic = RSADoPublic;
RSAKey.prototype.setPublic = RSASetPublic;
RSAKey.prototype.encrypt = RSAEncrypt;
RSAKey.prototype.doPrivate = RSADoPrivate;
RSAKey.prototype.setPrivate = RSASetPrivate;
RSAKey.prototype.setPrivateEx = RSASetPrivateEx;
RSAKey.prototype.generate = RSAGenerate;
RSAKey.prototype.decrypt = RSADecrypt;
nValue = "a5261939975948bb7a58dffe5ff54e65f0498f9175f5a09288810b8975871e99af3b5dd94057b0fc07535f5f97444504fa35169d461d0d30cf0192e307727c065168c788771c561a9400fb49175e9e6aa4e23fe11af69e9412dd23b0cb6684c4c2429bce139e848ab26d0829073351f4acd36074eafd036a5eb83359d2a698d3";
eValue = "10001";
dValue = "8e9912f6d3645894e8d38cb58c0db81ff516cf4c7e5a14c7f1eddb1459d2cded4d8d293fc97aee6aefb861859c8b6a3d1dfe710463e1f9ddc72048c09751971c4a580aa51eb523357a3cc48d31cfad1d4a165066ed92d4748fb6571211da5cb14bc11b6e2df7c1a559e6d5ac1cd5c94703a22891464fba23d0d965086277a161";
pValue = "d090ce58a92c75233a6486cb0a9209bf3583b64f540c76f5294bb97d285eed33aec220bde14b2417951178ac152ceab6da7090905b478195498b352048f15e7d";
qValue = "cab575dc652bb66df15a0359609d51d1db184750c00c6698b90ef3465c99655103edbf0d54c56aec0ce3c4d22592338092a126a0cc49f65a4a30d222b411e58f";
dmp1Value = "1a24bca8e273df2f0e47c199bbf678604e7df7215480c77c8db39f49b000ce2cf7500038acfff5433b7d582a01f1826e6f4d42e1c57f5e1fef7b12aabc59fd25";
dmq1Value = "3d06982efbbe47339e1f6d36b1216b8a741d410b0c662f54f7118b27b9a4ec9d914337eb39841d8666f3034408cf94f5b62f11c402fc994fe15a05493150d9fd";
coeffValue = "3a3e731acd8960b7ff9eb81a7ff93bd1cfa74cbd56987db58b4594fb09c09084db1734c8143f98b602b981aaa9243ca28deb69b5b280ee8dcee0fd2625e53250";
setupEngine(am3, 28);
var TEXT = "The quick brown fox jumped over the extremely lazy frog! " + "Now is the time for all good men to come to the party.";
var encrypted;
var completed = 0;
var benchmarks = BenchmarkSuite.CountBenchmarks();
var success = true;
var latencyBenchmarks = ["Splay", "Mandreel"];
var skipBenchmarks = typeof skipBenchmarks === "undefined" ? [] : skipBenchmarks;
