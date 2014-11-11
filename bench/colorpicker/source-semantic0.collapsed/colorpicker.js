function v485() {
  var v486 = JAM.call($, null, ["#red, #green, #blue"]);
  JAM.call(v486.slider, v486, [{orientation:"horizontal", range:"min", max:255, value:127, slide:refreshSwatch, change:refreshSwatch}]);
  var v488 = JAM.call($, null, ["#red"]);
  JAM.call(v488.slider, v488, ["value", 255]);
  var v489 = JAM.call($, null, ["#green"]);
  JAM.call(v489.slider, v489, ["value", 140]);
  var v490 = JAM.call($, null, ["#blue"]);
  JAM.call(v490.slider, v490, ["value", 60]);
  return;
}
function v484($$$4, undefined$$5) {
  function v483(event$$35) {
    var v491 = JAM.call($$$4, null, [event$$35.target]);
    var index$$48 = JAM.call(v491.data, v491, ["ui-slider-handle-index"]);
    if (this._keySliding) {
      this._keySliding = false;
      JAM.call(this._stop, this, [event$$35, index$$48]);
      JAM.call(this._change, this, [event$$35, index$$48]);
      var v492 = JAM.call($$$4, null, [event$$35.target]);
      JAM.call(v492.removeClass, v492, ["ui-state-active"]);
    }
    return;
  }
  function v482(event$$34) {
    event$$34.preventDefault();
    return;
  }
  function v481(event$$33) {
    var allowed$$2;
    var curVal;
    var newVal$$1;
    var step$$1;
    var v494 = JAM.call($$$4, null, [event$$33.target]);
    var index$$47 = JAM.call(v494.data, v494, ["ui-slider-handle-index"]);
    switch(event$$33.keyCode) {
      case $$$4.ui.keyCode.HOME:
      ;
      case $$$4.ui.keyCode.END:
      ;
      case $$$4.ui.keyCode.PAGE_UP:
      ;
      case $$$4.ui.keyCode.PAGE_DOWN:
      ;
      case $$$4.ui.keyCode.UP:
      ;
      case $$$4.ui.keyCode.RIGHT:
      ;
      case $$$4.ui.keyCode.DOWN:
      ;
      case $$$4.ui.keyCode.LEFT:
        event$$33.preventDefault();
        if (!this._keySliding) {
          this._keySliding = true;
          var v495 = JAM.call($$$4, null, [event$$33.target]);
          JAM.call(v495.addClass, v495, ["ui-state-active"]);
          allowed$$2 = JAM.call(this._start, this, [event$$33, index$$47]);
          if (allowed$$2 === false) {
            return;
          }
        }
      ;
    }
    step$$1 = this.options.step;
    var v2476 = this.options.values;
    if (v2476) {
      v2476 = this.options.values.length;
    }
    if (v2476) {
      curVal = newVal$$1 = JAM.call(this.values, this, [index$$47]);
    } else {
      curVal = newVal$$1 = this.value();
    }
    switch(event$$33.keyCode) {
      case $$$4.ui.keyCode.HOME:
        newVal$$1 = this.options.min;
        break;
      case $$$4.ui.keyCode.END:
        newVal$$1 = this.options.max;
        break;
      case $$$4.ui.keyCode.PAGE_UP:
        newVal$$1 = JAM.call(this._trimAlignValue, this, [curVal + (this.options.max - this.options.min) / numPages]);
        break;
      case $$$4.ui.keyCode.PAGE_DOWN:
        newVal$$1 = JAM.call(this._trimAlignValue, this, [curVal - (this.options.max - this.options.min) / numPages]);
        break;
      case $$$4.ui.keyCode.UP:
      ;
      case $$$4.ui.keyCode.RIGHT:
        if (curVal === this.options.max) {
          return;
        }
        newVal$$1 = JAM.call(this._trimAlignValue, this, [curVal + step$$1]);
        break;
      case $$$4.ui.keyCode.DOWN:
      ;
      case $$$4.ui.keyCode.LEFT:
        if (curVal === this.options.min) {
          return;
        }
        newVal$$1 = JAM.call(this._trimAlignValue, this, [curVal - step$$1]);
    }
    JAM.call(this._slide, this, [event$$33, index$$47, newVal$$1]);
    return;
  }
  function v480() {
    function v479(i$$110) {
      valPercent = (JAM.call(that$$3.values, that$$3, [i$$110]) - that$$3.options.min) / (that$$3.options.max - that$$3.options.min) * 100;
      var v2483;
      if (that$$3.orientation === "horizontal") {
        v2483 = "left";
      } else {
        v2483 = "bottom";
      }
      JAM.set(_set, v2483, valPercent + "%", JAM.policy.p2);
      var v2484 = JAM.call($$$4, null, [this]);
      var v512 = JAM.call(v2484.stop, v2484, [1, 1]);
      var v2485;
      if (animate) {
        v2485 = "animate";
      } else {
        v2485 = "css";
      }
      JAM.call(JAM.get(v512, v2485, JAM.policy.p3), v512, [_set, o$$2.animate]);
      if (that$$3.options.range === true) {
        if (that$$3.orientation === "horizontal") {
          if (i$$110 === 0) {
            var v2488 = that$$3.range;
            var v515 = JAM.call(v2488.stop, v2488, [1, 1]);
            var v2489;
            if (animate) {
              v2489 = "animate";
            } else {
              v2489 = "css";
            }
            JAM.call(JAM.get(v515, v2489, JAM.policy.p3), v515, [{left:valPercent + "%"}, o$$2.animate]);
          }
          if (i$$110 === 1) {
            var v520 = that$$3.range;
            var v2491;
            if (animate) {
              v2491 = "animate";
            } else {
              v2491 = "css";
            }
            JAM.call(JAM.get(v520, v2491, JAM.policy.p3), v520, [{width:valPercent - lastValPercent + "%"}, {queue:false, duration:o$$2.animate}]);
          }
        } else {
          if (i$$110 === 0) {
            var v2494 = that$$3.range;
            var v525 = JAM.call(v2494.stop, v2494, [1, 1]);
            var v2495;
            if (animate) {
              v2495 = "animate";
            } else {
              v2495 = "css";
            }
            JAM.call(JAM.get(v525, v2495, JAM.policy.p3), v525, [{bottom:valPercent + "%"}, o$$2.animate]);
          }
          if (i$$110 === 1) {
            var v530 = that$$3.range;
            var v2497;
            if (animate) {
              v2497 = "animate";
            } else {
              v2497 = "css";
            }
            JAM.call(JAM.get(v530, v2497, JAM.policy.p3), v530, [{height:valPercent - lastValPercent + "%"}, {queue:false, duration:o$$2.animate}]);
          }
        }
      }
      lastValPercent = valPercent;
      return;
    }
    var lastValPercent;
    var valPercent;
    var value$$51;
    var valueMin;
    var valueMax;
    var oRange = this.options.range;
    var o$$2 = this.options;
    var that$$3 = this;
    var v538;
    if (!this._animateOff) {
      v538 = o$$2.animate;
    } else {
      v538 = false;
    }
    var animate = v538;
    var _set = {};
    var v2501 = this.options.values;
    if (v2501) {
      v2501 = this.options.values.length;
    }
    if (v2501) {
      var v539 = this.handles;
      JAM.call(v539.each, v539, [v479]);
    } else {
      value$$51 = this.value();
      valueMin = this.options.min;
      valueMax = this.options.max;
      var v542;
      if (valueMax !== valueMin) {
        v542 = (value$$51 - valueMin) / (valueMax - valueMin) * 100;
      } else {
        v542 = 0;
      }
      valPercent = v542;
      var v2504;
      if (this.orientation === "horizontal") {
        v2504 = "left";
      } else {
        v2504 = "bottom";
      }
      JAM.set(_set, v2504, valPercent + "%", JAM.policy.p2);
      var v2505 = this.handle;
      var v544 = JAM.call(v2505.stop, v2505, [1, 1]);
      var v2506;
      if (animate) {
        v2506 = "animate";
      } else {
        v2506 = "css";
      }
      JAM.call(JAM.get(v544, v2506, JAM.policy.p3), v544, [_set, o$$2.animate]);
      var v2507 = oRange === "min";
      if (v2507) {
        v2507 = this.orientation === "horizontal";
      }
      if (v2507) {
        var v2508 = this.range;
        var v547 = JAM.call(v2508.stop, v2508, [1, 1]);
        var v2509;
        if (animate) {
          v2509 = "animate";
        } else {
          v2509 = "css";
        }
        JAM.call(JAM.get(v547, v2509, JAM.policy.p3), v547, [{width:valPercent + "%"}, o$$2.animate]);
      }
      var v2511 = oRange === "max";
      if (v2511) {
        v2511 = this.orientation === "horizontal";
      }
      if (v2511) {
        var v552 = this.range;
        var v2512;
        if (animate) {
          v2512 = "animate";
        } else {
          v2512 = "css";
        }
        JAM.call(JAM.get(v552, v2512, JAM.policy.p3), v552, [{width:100 - valPercent + "%"}, {queue:false, duration:o$$2.animate}]);
      }
      var v2515 = oRange === "min";
      if (v2515) {
        v2515 = this.orientation === "vertical";
      }
      if (v2515) {
        var v2516 = this.range;
        var v557 = JAM.call(v2516.stop, v2516, [1, 1]);
        var v2517;
        if (animate) {
          v2517 = "animate";
        } else {
          v2517 = "css";
        }
        JAM.call(JAM.get(v557, v2517, JAM.policy.p3), v557, [{height:valPercent + "%"}, o$$2.animate]);
      }
      var v2519 = oRange === "max";
      if (v2519) {
        v2519 = this.orientation === "vertical";
      }
      if (v2519) {
        var v562 = this.range;
        var v2520;
        if (animate) {
          v2520 = "animate";
        } else {
          v2520 = "css";
        }
        JAM.call(JAM.get(v562, v2520, JAM.policy.p3), v562, [{height:100 - valPercent + "%"}, {queue:false, duration:o$$2.animate}]);
      }
    }
    return;
  }
  function v478() {
    return this.options.max;
  }
  function v477() {
    return this.options.min;
  }
  function v476(val$$10) {
    if (val$$10 <= this.options.min) {
      return this.options.min;
    }
    if (val$$10 >= this.options.max) {
      return this.options.max;
    }
    var v574;
    if (this.options.step > 0) {
      v574 = this.options.step;
    } else {
      v574 = 1;
    }
    var step = v574;
    var valModStep = (val$$10 - this.options.min) % step;
    var alignValue = val$$10 - valModStep;
    if (Math.abs(valModStep) * 2 >= step) {
      var v3818;
      if (valModStep > 0) {
        v3818 = step;
      } else {
        v3818 = -step;
      }
      alignValue = alignValue + v3818;
    }
    return parseFloat(alignValue.toFixed(5));
  }
  function v475(index$$46) {
    var val$$9;
    var vals$$1;
    var i$$109;
    if (arguments.length) {
      var v578 = this.options.values;
      introspect(JAM.policy.p3) {
        val$$9 = v578[index$$46];
      }
      val$$9 = JAM.call(this._trimAlignValue, this, [val$$9]);
      return val$$9;
    } else {
      var v2531 = this.options.values;
      if (v2531) {
        v2531 = this.options.values.length;
      }
      if (v2531) {
        vals$$1 = this.options.values.slice();
        i$$109 = 0;
        var v581 = i$$109 < vals$$1.length;
        for (;v581;) {
          introspect(JAM.policy.p3) {
            var v580 = vals$$1[i$$109]
          }
          var v5499 = JAM.call(this._trimAlignValue, this, [v580]);
          JAM.set(vals$$1, i$$109, v5499, JAM.policy.p2);
          i$$109 = i$$109 + 1;
          v581 = i$$109 < vals$$1.length;
        }
        return vals$$1;
      } else {
        return[];
      }
    }
    return;
  }
  function v474() {
    var val$$8 = this.options.value;
    val$$8 = JAM.call(this._trimAlignValue, this, [val$$8]);
    return val$$8;
  }
  function v473(key$$26, value$$50) {
    var i$$108;
    var valsLength = 0;
    var v2535 = key$$26 === "range";
    if (v2535) {
      v2535 = this.options.range === true;
    }
    if (v2535) {
      if (value$$50 === "min") {
        var v585 = this.options;
        var v5500 = JAM.call(this._values, this, [0]);
        v585.value = v5500;
        this.options.values = null;
      } else {
        if (value$$50 === "max") {
          var v587 = this.options;
          var v5501 = JAM.call(this._values, this, [this.options.values.length - 1]);
          v587.value = v5501;
          this.options.values = null;
        }
      }
    }
    if (JAM.call($$$4.isArray, $$$4, [this.options.values])) {
      valsLength = this.options.values.length;
    }
    var v594 = $$$4.Widget.prototype._setOption;
    JAM.call(v594.apply, v594, [this, arguments]);
    switch(key$$26) {
      case "orientation":
        this._detectOrientation();
        var v2540 = this.element;
        var v595 = JAM.call(v2540.removeClass, v2540, ["ui-slider-horizontal ui-slider-vertical"]);
        JAM.call(v595.addClass, v595, ["ui-slider-" + this.orientation]);
        this._refreshValue();
        break;
      case "value":
        this._animateOff = true;
        this._refreshValue();
        JAM.call(this._change, this, [null, 0]);
        this._animateOff = false;
        break;
      case "values":
        this._animateOff = true;
        this._refreshValue();
        i$$108 = 0;
        var v597 = i$$108 < valsLength;
        for (;v597;) {
          JAM.call(this._change, this, [null, i$$108]);
          i$$108 = i$$108 + 1;
          v597 = i$$108 < valsLength;
        }
        this._animateOff = false;
        break;
      case "min":
      ;
      case "max":
        this._animateOff = true;
        this._refreshValue();
        this._animateOff = false;
        break;
      case "range":
        this._animateOff = true;
        this._refresh();
        this._animateOff = false;
    }
    return;
  }
  function v472(index$$45, newValue$$1) {
    var vals;
    var newValues$$1;
    var i$$107;
    if (arguments.length > 1) {
      var v598 = this.options.values;
      var v5502 = JAM.call(this._trimAlignValue, this, [newValue$$1]);
      JAM.set(v598, index$$45, v5502, JAM.policy.p2);
      this._refreshValue();
      JAM.call(this._change, this, [null, index$$45]);
      return;
    }
    if (arguments.length) {
      if (JAM.call($$$4.isArray, $$$4, [arguments[0]])) {
        vals = this.options.values;
        newValues$$1 = arguments[0];
        i$$107 = 0;
        var v602 = i$$107 < vals.length;
        for (;v602;) {
          introspect(JAM.policy.p3) {
            var v601 = newValues$$1[i$$107]
          }
          var v5503 = JAM.call(this._trimAlignValue, this, [v601]);
          JAM.set(vals, i$$107, v5503, JAM.policy.p2);
          JAM.call(this._change, this, [null, i$$107]);
          i$$107 = i$$107 + 1;
          v602 = i$$107 < vals.length;
        }
        this._refreshValue();
      } else {
        var v2547 = this.options.values;
        if (v2547) {
          v2547 = this.options.values.length;
        }
        if (v2547) {
          return JAM.call(this._values, this, [index$$45]);
        } else {
          return this.value();
        }
      }
    } else {
      return this._values();
    }
    return;
  }
  function v471(newValue) {
    if (arguments.length) {
      var v606 = this.options;
      var v5504 = JAM.call(this._trimAlignValue, this, [newValue]);
      v606.value = v5504;
      this._refreshValue();
      JAM.call(this._change, this, [null, 0]);
      return;
    }
    return this._value();
  }
  function v470(event$$32, index$$44) {
    var v2548 = !this._keySliding;
    if (v2548) {
      v2548 = !this._mouseSliding;
    }
    if (v2548) {
      var v2549 = this.handles;
      introspect(JAM.policy.p3) {
        var v608 = v2549[index$$44]
      }
      var uiHash$$2 = {handle:v608, value:this.value()};
      var v2550 = this.options.values;
      if (v2550) {
        v2550 = this.options.values.length;
      }
      if (v2550) {
        var v5505 = JAM.call(this.values, this, [index$$44]);
        uiHash$$2.value = v5505;
        var v5506 = this.values();
        uiHash$$2.values = v5506;
      }
      this._lastChangedValue = index$$44;
      JAM.call(this._trigger, this, ["change", event$$32, uiHash$$2]);
    }
    return;
  }
  function v469(event$$31, index$$43) {
    var v2551 = this.handles;
    introspect(JAM.policy.p3) {
      var v612 = v2551[index$$43]
    }
    var uiHash$$1 = {handle:v612, value:this.value()};
    var v2552 = this.options.values;
    if (v2552) {
      v2552 = this.options.values.length;
    }
    if (v2552) {
      var v5507 = JAM.call(this.values, this, [index$$43]);
      uiHash$$1.value = v5507;
      var v5508 = this.values();
      uiHash$$1.values = v5508;
    }
    JAM.call(this._trigger, this, ["stop", event$$31, uiHash$$1]);
    return;
  }
  function v468(event$$30, index$$42, newVal) {
    var otherVal;
    var newValues;
    var allowed$$1;
    var v2553 = this.options.values;
    if (v2553) {
      v2553 = this.options.values.length;
    }
    if (v2553) {
      var v2554;
      if (index$$42) {
        v2554 = 0;
      } else {
        v2554 = 1;
      }
      otherVal = JAM.call(this.values, this, [v2554]);
      var v3835 = this.options.values.length === 2;
      if (v3835) {
        v3835 = this.options.range === true;
      }
      var v2555 = v3835;
      if (v2555) {
        var v4686 = index$$42 === 0;
        if (v4686) {
          v4686 = newVal > otherVal;
        }
        var v3836 = v4686;
        if (!v3836) {
          var v4687 = index$$42 === 1;
          if (v4687) {
            v4687 = newVal < otherVal;
          }
          v3836 = v4687;
        }
        v2555 = v3836;
      }
      if (v2555) {
        newVal = otherVal;
      }
      if (newVal !== JAM.call(this.values, this, [index$$42])) {
        newValues = this.values();
        JAM.set(newValues, index$$42, newVal, JAM.policy.p2);
        var v3837 = this.handles;
        introspect(JAM.policy.p3) {
          var v2557 = v3837[index$$42]
        }
        allowed$$1 = JAM.call(this._trigger, this, ["slide", event$$30, {handle:v2557, value:newVal, values:newValues}]);
        var v2558;
        if (index$$42) {
          v2558 = 0;
        } else {
          v2558 = 1;
        }
        otherVal = JAM.call(this.values, this, [v2558]);
        if (allowed$$1 !== false) {
          JAM.call(this.values, this, [index$$42, newVal, true]);
        }
      }
    } else {
      if (newVal !== this.value()) {
        var v3838 = this.handles;
        introspect(JAM.policy.p3) {
          var v2560 = v3838[index$$42]
        }
        allowed$$1 = JAM.call(this._trigger, this, ["slide", event$$30, {handle:v2560, value:newVal}]);
        if (allowed$$1 !== false) {
          JAM.call(this.value, this, [newVal]);
        }
      }
    }
    return;
  }
  function v467(event$$29, index$$41) {
    var v2561 = this.handles;
    introspect(JAM.policy.p3) {
      var v625 = v2561[index$$41]
    }
    var uiHash = {handle:v625, value:this.value()};
    var v2562 = this.options.values;
    if (v2562) {
      v2562 = this.options.values.length;
    }
    if (v2562) {
      var v5509 = JAM.call(this.values, this, [index$$41]);
      uiHash.value = v5509;
      var v5510 = this.values();
      uiHash.values = v5510;
    }
    return JAM.call(this._trigger, this, ["start", event$$29, uiHash]);
  }
  function v466(position$$3) {
    var pixelTotal;
    var pixelMouse;
    var percentMouse;
    var valueTotal;
    var valueMouse;
    if (this.orientation === "horizontal") {
      pixelTotal = this.elementSize.width;
      var v629 = position$$3.x - this.elementOffset.left;
      var v2566;
      if (this._clickOffset) {
        v2566 = this._clickOffset.left;
      } else {
        v2566 = 0;
      }
      pixelMouse = v629 - v2566;
    } else {
      pixelTotal = this.elementSize.height;
      var v632 = position$$3.y - this.elementOffset.top;
      var v2569;
      if (this._clickOffset) {
        v2569 = this._clickOffset.top;
      } else {
        v2569 = 0;
      }
      pixelMouse = v632 - v2569;
    }
    percentMouse = pixelMouse / pixelTotal;
    if (percentMouse > 1) {
      percentMouse = 1;
    }
    if (percentMouse < 0) {
      percentMouse = 0;
    }
    if (this.orientation === "vertical") {
      percentMouse = 1 - percentMouse;
    }
    valueTotal = this.options.max - this.options.min;
    valueMouse = this.options.min + percentMouse * valueTotal;
    return JAM.call(this._trimAlignValue, this, [valueMouse]);
  }
  function v465() {
    var v642;
    if (this.options.orientation === "vertical") {
      v642 = "vertical";
    } else {
      v642 = "horizontal";
    }
    this.orientation = v642;
    return;
  }
  function v464(event$$28) {
    var v643 = this.handles;
    JAM.call(v643.removeClass, v643, ["ui-state-active"]);
    this._mouseSliding = false;
    JAM.call(this._stop, this, [event$$28, this._handleIndex]);
    JAM.call(this._change, this, [event$$28, this._handleIndex]);
    this._handleIndex = null;
    this._clickOffset = null;
    this._animateOff = false;
    return false;
  }
  function v463(event$$27) {
    var position$$2 = {x:event$$27.pageX, y:event$$27.pageY};
    var normValue$$1 = JAM.call(this._normValueFromMouse, this, [position$$2]);
    JAM.call(this._slide, this, [event$$27, this._handleIndex, normValue$$1]);
    return false;
  }
  function v462() {
    return true;
  }
  function v461(event$$26) {
    function v460(i$$106) {
      var thisDistance = Math.abs(normValue - JAM.call(that$$2.values, that$$2, [i$$106]));
      var v2577 = distance > thisDistance;
      if (!v2577) {
        var v3848 = distance === thisDistance;
        if (v3848) {
          var v4691 = i$$106 === that$$2._lastChangedValue;
          if (!v4691) {
            v4691 = JAM.call(that$$2.values, that$$2, [i$$106]) === o$$1.min;
          }
          v3848 = v4691;
        }
        v2577 = v3848;
      }
      if (v2577) {
        distance = thisDistance;
        closestHandle = JAM.call($$$4, null, [this]);
        index$$40 = i$$106;
      }
      return;
    }
    var position$$1;
    var normValue;
    var distance;
    var closestHandle;
    var index$$40;
    var allowed;
    var offset$$9;
    var mouseOverHandle;
    var that$$2 = this;
    var o$$1 = this.options;
    if (o$$1.disabled) {
      return false;
    }
    this.elementSize = {width:this.element.outerWidth(), height:this.element.outerHeight()};
    var v5511 = this.element.offset();
    this.elementOffset = v5511;
    position$$1 = {x:event$$26.pageX, y:event$$26.pageY};
    normValue = JAM.call(this._normValueFromMouse, this, [position$$1]);
    distance = this.options.max - this.options.min + 1;
    var v658 = this.handles;
    JAM.call(v658.each, v658, [v460]);
    allowed = JAM.call(this._start, this, [event$$26, index$$40]);
    if (allowed === false) {
      return false;
    }
    this._mouseSliding = true;
    this._handleIndex = index$$40;
    JAM.call(closestHandle.addClass, closestHandle, ["ui-state-active"]).focus();
    offset$$9 = closestHandle.offset();
    var v2582 = JAM.call($$$4, null, [event$$26.target]).parents().addBack();
    mouseOverHandle = !JAM.call(v2582.is, v2582, [".ui-slider-handle"]);
    var v662;
    if (mouseOverHandle) {
      v662 = {left:0, top:0};
    } else {
      var v2583 = event$$26.pageX - offset$$9.left - closestHandle.width() / 2;
      var v5148 = event$$26.pageY - offset$$9.top - closestHandle.height() / 2;
      var v5365 = parseInt(JAM.call(closestHandle.css, closestHandle, ["borderTopWidth"]), 10);
      if (!v5365) {
        v5365 = 0;
      }
      var v4696 = v5148 - v5365;
      var v5150 = parseInt(JAM.call(closestHandle.css, closestHandle, ["borderBottomWidth"]), 10);
      if (!v5150) {
        v5150 = 0;
      }
      var v3855 = v4696 - v5150;
      var v4698 = parseInt(JAM.call(closestHandle.css, closestHandle, ["marginTop"]), 10);
      if (!v4698) {
        v4698 = 0;
      }
      v662 = {left:v2583, top:v3855 + v4698};
    }
    this._clickOffset = v662;
    var v3857 = this.handles;
    if (!JAM.call(v3857.hasClass, v3857, ["ui-state-hover"])) {
      JAM.call(this._slide, this, [event$$26, index$$40, normValue]);
    }
    this._animateOff = true;
    return true;
  }
  function v459() {
    this.handles.remove();
    this.range.remove();
    var v666 = this.element;
    JAM.call(v666.removeClass, v666, ["ui-slider" + " ui-slider-horizontal" + " ui-slider-vertical" + " ui-widget" + " ui-widget-content" + " ui-corner-all"]);
    this._mouseDestroy();
    return;
  }
  function v458() {
    var v2587 = this.handles;
    var v668 = JAM.call(v2587.add, v2587, [this.range]);
    var elements$$1 = JAM.call(v668.filter, v668, ["a"]);
    JAM.call(this._off, this, [elements$$1]);
    JAM.call(this._on, this, [elements$$1, this._handleEvents]);
    JAM.call(this._hoverable, this, [elements$$1]);
    JAM.call(this._focusable, this, [elements$$1]);
    return;
  }
  function v457() {
    var options$$15 = this.options;
    var classes = "";
    if (options$$15.range) {
      if (options$$15.range === true) {
        if (!options$$15.values) {
          options$$15.values = [this.options.min, this.options.min];
        } else {
          var v2593 = options$$15.values.length;
          if (v2593) {
            v2593 = options$$15.values.length !== 2;
          }
          if (v2593) {
            options$$15.values = [options$$15.values[0], options$$15.values[0]];
          } else {
            if (JAM.call($$$4.isArray, $$$4, [options$$15.values])) {
              var v674 = options$$15.values;
              var v5512 = JAM.call(v674.slice, v674, [0]);
              options$$15.values = v5512;
            }
          }
        }
      }
      var v2597 = !this.range;
      if (!v2597) {
        v2597 = !this.range.length;
      }
      if (v2597) {
        var v679 = JAM.call($$$4, null, ["<div></div>"]);
        var v5513 = JAM.call(v679.appendTo, v679, [this.element]);
        this.range = v5513;
        classes = "ui-slider-range" + " ui-widget-header ui-corner-all";
      } else {
        var v2598 = this.range;
        var v681 = JAM.call(v2598.removeClass, v2598, ["ui-slider-range-min ui-slider-range-max"]);
        JAM.call(v681.css, v681, [{"left":"", "bottom":""}]);
      }
      var v684 = this.range;
      var v3864;
      var v5154 = options$$15.range === "min";
      if (!v5154) {
        v5154 = options$$15.range === "max";
      }
      if (v5154) {
        v3864 = " ui-slider-range-" + options$$15.range;
      } else {
        v3864 = "";
      }
      JAM.call(v684.addClass, v684, [classes + v3864]);
    } else {
      var v5514 = JAM.call($$$4, null, [[]]);
      this.range = v5514;
    }
    return;
  }
  function v456() {
    function v455(i$$105) {
      var v687 = JAM.call($$$4, null, [this]);
      JAM.call(v687.data, v687, ["ui-slider-handle-index", i$$105]);
      return;
    }
    var i$$104;
    var handleCount;
    var options$$14 = this.options;
    var v2600 = this.element;
    var v688 = JAM.call(v2600.find, v2600, [".ui-slider-handle"]);
    var existingHandles = JAM.call(v688.addClass, v688, ["ui-state-default ui-corner-all"]);
    var handle$$16 = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>";
    var handles = [];
    var v2601 = options$$14.values;
    if (v2601) {
      v2601 = options$$14.values.length;
    }
    var v689 = v2601;
    if (!v689) {
      v689 = 1;
    }
    handleCount = v689;
    if (existingHandles.length > handleCount) {
      JAM.call(existingHandles.slice, existingHandles, [handleCount]).remove();
      existingHandles = JAM.call(existingHandles.slice, existingHandles, [0, handleCount]);
    }
    i$$104 = existingHandles.length;
    var v692 = i$$104 < handleCount;
    for (;v692;) {
      JAM.call(handles.push, handles, [handle$$16]);
      i$$104++;
      v692 = i$$104 < handleCount;
    }
    var v2604 = JAM.call($$$4, null, [handles.join("")]);
    var v5515 = JAM.call(existingHandles.add, existingHandles, [JAM.call(v2604.appendTo, v2604, [this.element])]);
    this.handles = v5515;
    var v694 = this.handles;
    var v5516 = JAM.call(v694.eq, v694, [0]);
    this.handle = v5516;
    var v695 = this.handles;
    JAM.call(v695.each, v695, [v455]);
    return;
  }
  function v454() {
    this._createRange();
    this._createHandles();
    this._setupEvents();
    this._refreshValue();
    return;
  }
  function v453() {
    this._keySliding = false;
    this._mouseSliding = false;
    this._animateOff = true;
    this._handleIndex = null;
    this._detectOrientation();
    this._mouseInit();
    var v696 = this.element;
    JAM.call(v696.addClass, v696, ["ui-slider" + " ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all"]);
    this._refresh();
    JAM.call(this._setOption, this, ["disabled", this.options.disabled]);
    this._animateOff = false;
    return;
  }
  var numPages = 5;
  JAM.call($$$4.widget, $$$4, ["ui.slider", $$$4.ui.mouse, {version:"1.10.1", widgetEventPrefix:"slide", options:{animate:false, distance:0, max:100, min:0, orientation:"horizontal", range:false, step:1, value:0, values:null, change:null, slide:null, start:null, stop:null}, _create:v453, _refresh:v454, _createHandles:v456, _createRange:v457, _setupEvents:v458, _destroy:v459, _mouseCapture:v461, _mouseStart:v462, _mouseDrag:v463, _mouseStop:v464, _detectOrientation:v465, _normValueFromMouse:v466, 
  _start:v467, _slide:v468, _stop:v469, _change:v470, value:v471, values:v472, _setOption:v473, _value:v474, _values:v475, _trimAlignValue:v476, _valueMin:v477, _valueMax:v478, _refreshValue:v480, _handleEvents:{keydown:v481, click:v482, keyup:v483}}]);
  return;
}
function v452($$$3, undefined$$4) {
  function v451() {
    return true;
  }
  function v450() {
    return;
  }
  function v449() {
    return;
  }
  function v448() {
    return;
  }
  function v447() {
    return this.mouseDelayMet;
  }
  function v446(event$$25) {
    return JAM.call(Math.max, Math, [Math.abs(this._mouseDownEvent.pageX - event$$25.pageX), Math.abs(this._mouseDownEvent.pageY - event$$25.pageY)]) >= this.options.distance;
  }
  function v445(event$$24) {
    var v2614 = JAM.call($$$3, null, [document]);
    var v703 = JAM.call(v2614.unbind, v2614, ["mousemove." + this.widgetName, this._mouseMoveDelegate]);
    JAM.call(v703.unbind, v703, ["mouseup." + this.widgetName, this._mouseUpDelegate]);
    if (this._mouseStarted) {
      this._mouseStarted = false;
      if (event$$24.target === this._mouseDownEvent.target) {
        JAM.call($$$3.data, $$$3, [event$$24.target, this.widgetName + ".preventClickEvent", true]);
      }
      JAM.call(this._mouseStop, this, [event$$24]);
    }
    return false;
  }
  function v444(event$$23) {
    var v3872 = $$$3.ui.ie;
    if (v3872) {
      var v4710 = !document.documentMode;
      if (!v4710) {
        v4710 = document.documentMode < 9;
      }
      v3872 = v4710;
    }
    var v2621 = v3872;
    if (v2621) {
      v2621 = !event$$23.button;
    }
    if (v2621) {
      return JAM.call(this._mouseUp, this, [event$$23]);
    }
    if (this._mouseStarted) {
      JAM.call(this._mouseDrag, this, [event$$23]);
      return event$$23.preventDefault();
    }
    var v2622 = JAM.call(this._mouseDistanceMet, this, [event$$23]);
    if (v2622) {
      v2622 = this.mouseDelayMet;
    }
    if (v2622) {
      this._mouseStarted = JAM.call(this._mouseStart, this, [this._mouseDownEvent, event$$23]) !== false;
      var v713;
      if (this._mouseStarted) {
        v713 = JAM.call(this._mouseDrag, this, [event$$23]);
      } else {
        v713 = JAM.call(this._mouseUp, this, [event$$23]);
      }
      v713;
    }
    return!this._mouseStarted;
  }
  function v443(event$$20) {
    function v442(event$$22) {
      return JAM.call(that$$1._mouseUp, that$$1, [event$$22]);
    }
    function v441(event$$21) {
      return JAM.call(that$$1._mouseMove, that$$1, [event$$21]);
    }
    function v440() {
      that$$1.mouseDelayMet = true;
      return;
    }
    if (mouseHandled) {
      return;
    }
    var v716 = this._mouseStarted;
    if (v716) {
      JAM.call(this._mouseUp, this, [event$$20]);
    }
    this._mouseDownEvent = event$$20;
    var that$$1 = this;
    var btnIsLeft = event$$20.which === 1;
    var v718;
    var v3874 = typeof this.options.cancel === "string";
    if (v3874) {
      v3874 = event$$20.target.nodeName;
    }
    if (v3874) {
      var v3875 = JAM.call($$$3, null, [event$$20.target]);
      v718 = JAM.call(v3875.closest, v3875, [this.options.cancel]).length;
    } else {
      v718 = false;
    }
    var elIsCancel = v718;
    var v3877 = !btnIsLeft;
    if (!v3877) {
      v3877 = elIsCancel;
    }
    var v2627 = v3877;
    if (!v2627) {
      v2627 = !JAM.call(this._mouseCapture, this, [event$$20]);
    }
    if (v2627) {
      return true;
    }
    this.mouseDelayMet = !this.options.delay;
    if (!this.mouseDelayMet) {
      var v5517 = JAM.call(setTimeout, null, [v440, this.options.delay]);
      this._mouseDelayTimer = v5517;
    }
    var v2631 = JAM.call(this._mouseDistanceMet, this, [event$$20]);
    if (v2631) {
      v2631 = this.mouseDelayMet;
    }
    if (v2631) {
      this._mouseStarted = JAM.call(this._mouseStart, this, [event$$20]) !== false;
      if (!this._mouseStarted) {
        event$$20.preventDefault();
        return true;
      }
    }
    if (true === JAM.call($$$3.data, $$$3, [event$$20.target, this.widgetName + ".preventClickEvent"])) {
      JAM.call($$$3.removeData, $$$3, [event$$20.target, this.widgetName + ".preventClickEvent"]);
    }
    this._mouseMoveDelegate = v441;
    this._mouseUpDelegate = v442;
    var v2635 = JAM.call($$$3, null, [document]);
    var v729 = JAM.call(v2635.bind, v2635, ["mousemove." + this.widgetName, this._mouseMoveDelegate]);
    JAM.call(v729.bind, v729, ["mouseup." + this.widgetName, this._mouseUpDelegate]);
    event$$20.preventDefault();
    mouseHandled = true;
    return true;
  }
  function v439() {
    var v732 = this.element;
    JAM.call(v732.unbind, v732, ["." + this.widgetName]);
    if (this._mouseMoveDelegate) {
      var v2640 = JAM.call($$$3, null, [document]);
      var v734 = JAM.call(v2640.unbind, v2640, ["mousemove." + this.widgetName, this._mouseMoveDelegate]);
      JAM.call(v734.unbind, v734, ["mouseup." + this.widgetName, this._mouseUpDelegate]);
    }
    return;
  }
  function v438() {
    function v437(event$$19) {
      if (true === JAM.call($$$3.data, $$$3, [event$$19.target, that.widgetName + ".preventClickEvent"])) {
        JAM.call($$$3.removeData, $$$3, [event$$19.target, that.widgetName + ".preventClickEvent"]);
        event$$19.stopImmediatePropagation();
        return false;
      }
      return;
    }
    function v436(event$$18) {
      return JAM.call(that._mouseDown, that, [event$$18]);
    }
    var that = this;
    var v2646 = this.element;
    var v741 = JAM.call(v2646.bind, v2646, ["mousedown." + this.widgetName, v436]);
    JAM.call(v741.bind, v741, ["click." + this.widgetName, v437]);
    this.started = false;
    return;
  }
  function v435() {
    mouseHandled = false;
    return;
  }
  var mouseHandled = false;
  var v743 = JAM.call($$$3, null, [document]);
  JAM.call(v743.mouseup, v743, [v435]);
  JAM.call($$$3.widget, $$$3, ["ui.mouse", {version:"1.10.1", options:{cancel:"input,textarea,button,select,option", distance:1, delay:0}, _mouseInit:v438, _mouseDestroy:v439, _mouseDown:v443, _mouseMove:v444, _mouseUp:v445, _mouseDistanceMet:v446, _mouseDelayMet:v447, _mouseStart:v448, _mouseDrag:v449, _mouseStop:v450, _mouseCapture:v451}]);
  return;
}
function v434($$$2, undefined$$3) {
  function v433(method$$2, defaultEffect) {
    function v432(element$$12, options$$13, callback$$43) {
      function v431(next$$1) {
        var v745 = JAM.call($$$2, null, [this]);
        JAM.call(JAM.get(v745, method$$2, JAM.policy.p3), v745, []);
        if (callback$$43) {
          JAM.call(callback$$43.call, callback$$43, [element$$12[0]]);
        }
        next$$1();
        return;
      }
      if (typeof options$$13 === "string") {
        options$$13 = {effect:options$$13};
      }
      var hasOptions;
      var v748;
      if (!options$$13) {
        v748 = method$$2;
      } else {
        var v2651;
        var v4718 = options$$13 === true;
        if (!v4718) {
          v4718 = typeof options$$13 === "number";
        }
        if (v4718) {
          v2651 = defaultEffect;
        } else {
          var v3887 = options$$13.effect;
          if (!v3887) {
            v3887 = defaultEffect;
          }
          v2651 = v3887;
        }
        v748 = v2651;
      }
      var effectName = v748;
      options$$13 = options$$13 || {};
      if (typeof options$$13 === "number") {
        options$$13 = {duration:options$$13};
      }
      hasOptions = !JAM.call($$$2.isEmptyObject, $$$2, [options$$13]);
      options$$13.complete = callback$$43;
      if (options$$13.delay) {
        JAM.call(element$$12.delay, element$$12, [options$$13.delay]);
      }
      var v3889 = hasOptions;
      if (v3889) {
        v3889 = $$$2.effects;
      }
      var v2654 = v3889;
      if (v2654) {
        var v3890 = $$$2.effects.effect;
        introspect(JAM.policy.p3) {
          v2654 = v3890[effectName];
        }
      }
      if (v2654) {
        JAM.call(JAM.get(element$$12, method$$2, JAM.policy.p3), element$$12, [options$$13]);
      } else {
        var v2655 = effectName !== method$$2;
        if (v2655) {
          introspect(JAM.policy.p3) {
            v2655 = element$$12[effectName];
          }
        }
        if (v2655) {
          JAM.call(JAM.get(element$$12, effectName, JAM.policy.p3), element$$12, [options$$13.duration, options$$13.easing, callback$$43]);
        } else {
          JAM.call(element$$12.queue, element$$12, [v431]);
        }
      }
      return;
    }
    JAM.set($$$2.Widget.prototype, "_" + method$$2, v432, JAM.policy.p2);
    return;
  }
  function v430(type$$67, event$$17, data$$44) {
    var prop$$9;
    var orig$$4;
    var v759 = this.options;
    introspect(JAM.policy.p3) {
      var callback$$42 = v759[type$$67]
    }
    data$$44 = data$$44 || {};
    event$$17 = JAM.call($$$2.Event, $$$2, [event$$17]);
    var v2657;
    if (type$$67 === this.widgetEventPrefix) {
      v2657 = type$$67;
    } else {
      v2657 = this.widgetEventPrefix + type$$67;
    }
    var v5518 = v2657.toLowerCase();
    event$$17.type = v5518;
    event$$17.target = this.element[0];
    orig$$4 = event$$17.originalEvent;
    if (orig$$4) {
      for (prop$$9 in orig$$4) {
        if (!(prop$$9 in event$$17)) {
          JAM.set(event$$17, prop$$9, JAM.get(orig$$4, prop$$9, JAM.policy.p4), JAM.policy.p4);
        }
      }
    }
    var v763 = this.element;
    JAM.call(v763.trigger, v763, [event$$17, data$$44]);
    var v3893 = JAM.call($$$2.isFunction, $$$2, [callback$$42]);
    if (v3893) {
      v3893 = JAM.call(callback$$42.apply, callback$$42, [this.element[0], [event$$17].concat(data$$44)]) === false;
    }
    var v2659 = v3893;
    if (!v2659) {
      v2659 = event$$17.isDefaultPrevented();
    }
    return!v2659;
  }
  function v429(element$$11) {
    function v428(event$$16) {
      var v765 = JAM.call($$$2, null, [event$$16.currentTarget]);
      JAM.call(v765.removeClass, v765, ["ui-state-focus"]);
      return;
    }
    function v427(event$$15) {
      var v766 = JAM.call($$$2, null, [event$$15.currentTarget]);
      JAM.call(v766.addClass, v766, ["ui-state-focus"]);
      return;
    }
    var v767 = this.focusable;
    var v5519 = JAM.call(v767.add, v767, [element$$11]);
    this.focusable = v5519;
    JAM.call(this._on, this, [element$$11, {focusin:v427, focusout:v428}]);
    return;
  }
  function v426(element$$10) {
    function v425(event$$14) {
      var v769 = JAM.call($$$2, null, [event$$14.currentTarget]);
      JAM.call(v769.removeClass, v769, ["ui-state-hover"]);
      return;
    }
    function v424(event$$13) {
      var v770 = JAM.call($$$2, null, [event$$13.currentTarget]);
      JAM.call(v770.addClass, v770, ["ui-state-hover"]);
      return;
    }
    var v771 = this.hoverable;
    var v5520 = JAM.call(v771.add, v771, [element$$10]);
    this.hoverable = v5520;
    JAM.call(this._on, this, [element$$10, {mouseenter:v424, mouseleave:v425}]);
    return;
  }
  function v423(handler$$9, delay$$4) {
    function handlerProxy$$1() {
      var v2664;
      if (typeof handler$$9 === "string") {
        introspect(JAM.policy.p3) {
          v2664 = instance$$4[handler$$9];
        }
      } else {
        v2664 = handler$$9;
      }
      var v773 = v2664;
      return JAM.call(v773.apply, v773, [instance$$4, arguments]);
    }
    var instance$$4 = this;
    return JAM.call(setTimeout, null, [handlerProxy$$1, delay$$4 || 0]);
  }
  function v422(element$$9, eventName$$2) {
    eventName$$2 = (eventName$$2 || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
    var v777 = JAM.call(element$$9.unbind, element$$9, [eventName$$2]);
    JAM.call(v777.undelegate, v777, [eventName$$2]);
    return;
  }
  function v421(suppressDisabledCheck, element$$8, handlers$$2) {
    function v420(event$$12, handler$$8) {
      function handlerProxy() {
        var v2667 = !suppressDisabledCheck;
        if (v2667) {
          var v3898 = instance$$3.options.disabled === true;
          if (!v3898) {
            var v4725 = JAM.call($$$2, null, [this]);
            v3898 = JAM.call(v4725.hasClass, v4725, ["ui-state-disabled"]);
          }
          v2667 = v3898;
        }
        if (v2667) {
          return;
        }
        var v2668;
        if (typeof handler$$8 === "string") {
          introspect(JAM.policy.p3) {
            v2668 = instance$$3[handler$$8];
          }
        } else {
          v2668 = handler$$8;
        }
        var v779 = v2668;
        return JAM.call(v779.apply, v779, [instance$$3, arguments]);
      }
      if (typeof handler$$8 !== "string") {
        var v2670 = handler$$8.guid;
        if (!v2670) {
          v2670 = handlerProxy.guid;
        }
        var v780 = v2670;
        if (!v780) {
          v780 = $$$2.guid;
          $$$2.guid = $$$2.guid + 1;
        }
        handlerProxy.guid = handler$$8.guid = v780;
      }
      var match$$38 = JAM.call(event$$12.match, event$$12, [/^(\w+)\s*(.*)$/]);
      var eventName$$1 = match$$38[1] + instance$$3.eventNamespace;
      var selector$$22 = match$$38[2];
      if (selector$$22) {
        JAM.call(delegateElement.delegate, delegateElement, [selector$$22, eventName$$1, handlerProxy]);
      } else {
        JAM.call(element$$8.bind, element$$8, [eventName$$1, handlerProxy]);
      }
      return;
    }
    var delegateElement;
    var instance$$3 = this;
    if (typeof suppressDisabledCheck !== "boolean") {
      handlers$$2 = element$$8;
      element$$8 = suppressDisabledCheck;
      suppressDisabledCheck = false;
    }
    if (!handlers$$2) {
      handlers$$2 = element$$8;
      element$$8 = this.element;
      delegateElement = this.widget();
    } else {
      element$$8 = delegateElement = JAM.call($$$2, null, [element$$8]);
      var v785 = this.bindings;
      var v5521 = JAM.call(v785.add, v785, [element$$8]);
      this.bindings = v5521;
    }
    JAM.call($$$2.each, $$$2, [handlers$$2, v420]);
    return;
  }
  function v419() {
    return JAM.call(this._setOption, this, ["disabled", true]);
  }
  function v418() {
    return JAM.call(this._setOption, this, ["disabled", false]);
  }
  function v417(key$$25, value$$49) {
    JAM.set(this.options, key$$25, value$$49, JAM.policy.p2);
    if (key$$25 === "disabled") {
      var v2673 = this.widget();
      var v788 = JAM.call(v2673.toggleClass, v2673, [this.widgetFullName + "-disabled ui-state-disabled", !!value$$49]);
      JAM.call(v788.attr, v788, ["aria-disabled", value$$49]);
      var v789 = this.hoverable;
      JAM.call(v789.removeClass, v789, ["ui-state-hover"]);
      var v790 = this.focusable;
      JAM.call(v790.removeClass, v790, ["ui-state-focus"]);
    }
    return this;
  }
  function v416(options$$12) {
    var key$$24;
    for (key$$24 in options$$12) {
      introspect(JAM.policy.p3) {
        var v792 = options$$12[key$$24]
      }
      JAM.call(this._setOption, this, [key$$24, v792]);
    }
    return this;
  }
  function v415(key$$23, value$$48) {
    var options$$11 = key$$23;
    var parts$$4;
    var curOption;
    var i$$103;
    if (arguments.length === 0) {
      var v793 = $$$2.widget;
      return JAM.call(v793.extend, v793, [{}, this.options]);
    }
    if (typeof key$$23 === "string") {
      options$$11 = {};
      parts$$4 = key$$23.split(".");
      key$$23 = parts$$4.shift();
      if (parts$$4.length) {
        var v796 = $$$2.widget;
        var v2678 = this.options;
        introspect(JAM.policy.p3) {
          var v797 = v2678[key$$23]
        }
        var v5522 = JAM.call(v796.extend, v796, [{}, v797]);
        curOption = JAM.set(options$$11, key$$23, v5522, JAM.policy.p2);
        i$$103 = 0;
        var v800 = i$$103 < parts$$4.length - 1;
        for (;v800;) {
          introspect(JAM.policy.p3) {
            var v798 = parts$$4[i$$103]
          }
          introspect(JAM.policy.p3) {
            var v3905 = parts$$4[i$$103]
          }
          introspect(JAM.policy.p3) {
            var v2680 = curOption[v3905]
          }
          if (!v2680) {
            v2680 = {};
          }
          JAM.set(curOption, v798, v2680, JAM.policy.p2);
          introspect(JAM.policy.p3) {
            var v799 = parts$$4[i$$103]
          }
          introspect(JAM.policy.p3) {
            curOption = curOption[v799];
          }
          i$$103++;
          v800 = i$$103 < parts$$4.length - 1;
        }
        key$$23 = parts$$4.pop();
        if (value$$48 === undefined$$3) {
          var v801;
          introspect(JAM.policy.p3) {
            var v3908 = curOption[key$$23]
          }
          if (v3908 === undefined$$3) {
            v801 = null;
          } else {
            introspect(JAM.policy.p3) {
              v801 = curOption[key$$23];
            }
          }
          return v801;
        }
        JAM.set(curOption, key$$23, value$$48, JAM.policy.p2);
      } else {
        if (value$$48 === undefined$$3) {
          var v803;
          var v4728 = this.options;
          introspect(JAM.policy.p3) {
            var v3909 = v4728[key$$23]
          }
          if (v3909 === undefined$$3) {
            v803 = null;
          } else {
            var v2683 = this.options;
            introspect(JAM.policy.p3) {
              v803 = v2683[key$$23];
            }
          }
          return v803;
        }
        JAM.set(options$$11, key$$23, value$$48, JAM.policy.p2);
      }
    }
    JAM.call(this._setOptions, this, [options$$11]);
    return this;
  }
  function v414() {
    return this.element;
  }
  function v413() {
    this._destroy();
    var v4729 = this.element;
    var v3910 = JAM.call(v4729.unbind, v4729, [this.eventNamespace]);
    var v2685 = JAM.call(v3910.removeData, v3910, [this.widgetName]);
    var v807 = JAM.call(v2685.removeData, v2685, [this.widgetFullName]);
    JAM.call(v807.removeData, v807, [JAM.call($$$2.camelCase, $$$2, [this.widgetFullName])]);
    var v3912 = this.widget();
    var v2688 = JAM.call(v3912.unbind, v3912, [this.eventNamespace]);
    var v809 = JAM.call(v2688.removeAttr, v2688, ["aria-disabled"]);
    JAM.call(v809.removeClass, v809, [this.widgetFullName + "-disabled " + "ui-state-disabled"]);
    var v811 = this.bindings;
    JAM.call(v811.unbind, v811, [this.eventNamespace]);
    var v813 = this.hoverable;
    JAM.call(v813.removeClass, v813, ["ui-state-hover"]);
    var v814 = this.focusable;
    JAM.call(v814.removeClass, v814, ["ui-state-focus"]);
    return;
  }
  function v412(options$$10, element$$7) {
    function v411(event$$11) {
      if (event$$11.target === element$$7) {
        this.destroy();
      }
      return;
    }
    var v4731 = element$$7;
    if (!v4731) {
      v4731 = this.defaultElement;
    }
    var v3915 = v4731;
    if (!v3915) {
      v3915 = this;
    }
    element$$7 = JAM.call($$$2, null, [v3915])[0];
    var v5523 = JAM.call($$$2, null, [element$$7]);
    this.element = v5523;
    this.uuid = uuid$$2;
    uuid$$2 = uuid$$2 + 1;
    this.eventNamespace = "." + this.widgetName + this.uuid;
    var v819 = $$$2.widget;
    var v5524 = JAM.call(v819.extend, v819, [{}, this.options, this._getCreateOptions(), options$$10]);
    this.options = v5524;
    var v5525 = $$$2();
    this.bindings = v5525;
    var v5526 = $$$2();
    this.hoverable = v5526;
    var v5527 = $$$2();
    this.focusable = v5527;
    if (element$$7 !== this) {
      JAM.call($$$2.data, $$$2, [element$$7, this.widgetFullName, this]);
      JAM.call(this._on, this, [true, this.element, {remove:v411}]);
      var v2693;
      if (element$$7.style) {
        v2693 = element$$7.ownerDocument;
      } else {
        var v3916 = element$$7.document;
        if (!v3916) {
          v3916 = element$$7;
        }
        v2693 = v3916;
      }
      var v5528 = JAM.call($$$2, null, [v2693]);
      this.document = v5528;
      var v2694 = this.document[0].defaultView;
      if (!v2694) {
        v2694 = this.document[0].parentWindow;
      }
      var v5529 = JAM.call($$$2, null, [v2694]);
      this.window = v5529;
    }
    this._create();
    JAM.call(this._trigger, this, ["create", null, this._getCreateEventData()]);
    this._init();
    return;
  }
  function v410() {
    return;
  }
  function v409(name$$63, object$$1) {
    function v408(options$$9) {
      function v407() {
        var instance$$2 = JAM.call($$$2.data, $$$2, [this, fullName$$1]);
        if (instance$$2) {
          JAM.call(instance$$2.option, instance$$2, [options$$9 || {}])._init();
        } else {
          JAM.call($$$2.data, $$$2, [this, fullName$$1, JAM.new(object$$1, [options$$9, this])]);
        }
        return;
      }
      function v406() {
        var methodValue;
        var instance$$1 = JAM.call($$$2.data, $$$2, [this, fullName$$1]);
        if (!instance$$1) {
          return JAM.call($$$2.error, $$$2, ["cannot call methods on " + name$$63 + " prior to initialization; " + "attempted to call method '" + options$$9 + "'"]);
        }
        introspect(JAM.policy.p3) {
          var v4737 = instance$$1[options$$9]
        }
        var v2697 = !JAM.call($$$2.isFunction, $$$2, [v4737]);
        if (!v2697) {
          v2697 = options$$9.charAt(0) === "_";
        }
        if (v2697) {
          return JAM.call($$$2.error, $$$2, ["no such method '" + options$$9 + "' for " + name$$63 + " widget instance"]);
        }
        introspect(JAM.policy.p3) {
          var v835 = instance$$1[options$$9]
        }
        methodValue = JAM.call(v835.apply, v835, [instance$$1, args$$10]);
        var v2699 = methodValue !== instance$$1;
        if (v2699) {
          v2699 = methodValue !== undefined$$3;
        }
        if (v2699) {
          var v836;
          var v3926 = methodValue;
          if (v3926) {
            v3926 = methodValue.jquery;
          }
          if (v3926) {
            v836 = JAM.call(returnValue$$1.pushStack, returnValue$$1, [methodValue.get()]);
          } else {
            v836 = methodValue;
          }
          returnValue$$1 = v836;
          return false;
        }
        return;
      }
      var isMethodCall = typeof options$$9 === "string";
      var args$$10 = JAM.call(slice$$1.call, slice$$1, [arguments, 1]);
      var returnValue$$1 = this;
      var v839;
      var v3927 = !isMethodCall;
      if (v3927) {
        v3927 = args$$10.length;
      }
      if (v3927) {
        var v2702 = $$$2.widget.extend;
        v839 = JAM.call(v2702.apply, v2702, [null, [options$$9].concat(args$$10)]);
      } else {
        v839 = options$$9;
      }
      options$$9 = v839;
      if (isMethodCall) {
        JAM.call(this.each, this, [v406]);
      } else {
        JAM.call(this.each, this, [v407]);
      }
      return returnValue$$1;
    }
    var v840 = object$$1.prototype.widgetFullName;
    if (!v840) {
      v840 = name$$63;
    }
    var fullName$$1 = v840;
    JAM.set($$$2.fn, name$$63, v408, JAM.policy.p2);
    return;
  }
  function v405(target$$29) {
    var input = JAM.call(slice$$1.call, slice$$1, [arguments, 1]);
    var inputIndex = 0;
    var inputLength = input.length;
    var key$$22;
    var value$$47;
    var v847 = inputIndex < inputLength;
    for (;v847;) {
      introspect(JAM.policy.p3) {
        var v846 = input[inputIndex]
      }
      for (key$$22 in v846) {
        introspect(JAM.policy.p3) {
          var v842 = input[inputIndex]
        }
        introspect(JAM.policy.p3) {
          value$$47 = v842[key$$22];
        }
        introspect(JAM.policy.p3) {
          var v3930 = input[inputIndex]
        }
        var v2707 = v3930.hasOwnProperty(key$$22);
        if (v2707) {
          v2707 = value$$47 !== undefined$$3;
        }
        if (v2707) {
          if (JAM.call($$$2.isPlainObject, $$$2, [value$$47])) {
            var v843;
            introspect(JAM.policy.p3) {
              var v3931 = target$$29[key$$22]
            }
            if (JAM.call($$$2.isPlainObject, $$$2, [v3931])) {
              var v2708 = $$$2.widget;
              introspect(JAM.policy.p3) {
                var v2709 = target$$29[key$$22]
              }
              v843 = JAM.call(v2708.extend, v2708, [{}, v2709, value$$47]);
            } else {
              var v2710 = $$$2.widget;
              v843 = JAM.call(v2710.extend, v2710, [{}, value$$47]);
            }
            JAM.set(target$$29, key$$22, v843, JAM.policy.p2);
          } else {
            JAM.set(target$$29, key$$22, value$$47, JAM.policy.p2);
          }
        }
      }
      inputIndex++;
      v847 = inputIndex < inputLength;
    }
    return target$$29;
  }
  function v404(name$$62, base$$1, prototype) {
    function v403(i$$102, child$$1) {
      var childPrototype = child$$1.prototype;
      JAM.call($$$2.widget, $$$2, [childPrototype.namespace + "." + childPrototype.widgetName, constructor, child$$1._proto]);
      return;
    }
    function v402(prop$$8, value$$46) {
      function v401() {
        function v400() {
          var __super = this._super;
          var __superApply = this._superApply;
          var returnValue;
          this._super = _super;
          this._superApply = _superApply;
          returnValue = JAM.call(value$$46.apply, value$$46, [this, arguments]);
          this._super = __super;
          this._superApply = __superApply;
          return returnValue;
        }
        function _superApply(args$$9) {
          var v2714 = base$$1.prototype;
          introspect(JAM.policy.p3) {
            var v850 = v2714[prop$$8]
          }
          return JAM.call(v850.apply, v850, [this, args$$9]);
        }
        function _super() {
          var v2715 = base$$1.prototype;
          introspect(JAM.policy.p3) {
            var v851 = v2715[prop$$8]
          }
          return JAM.call(v851.apply, v851, [this, arguments]);
        }
        return v400;
      }
      if (!JAM.call($$$2.isFunction, $$$2, [value$$46])) {
        JAM.set(proxiedPrototype, prop$$8, value$$46, JAM.policy.p2);
        return;
      }
      var v5530 = v401();
      JAM.set(proxiedPrototype, prop$$8, v5530, JAM.policy.p2);
      return;
    }
    function v399(options$$8, element$$6) {
      if (!this._createWidget) {
        return JAM.new(constructor, [options$$8, element$$6]);
      }
      if (arguments.length) {
        JAM.call(this._createWidget, this, [options$$8, element$$6]);
      }
      return;
    }
    function v398(elem$$129) {
      return!!JAM.call($$$2.data, $$$2, [elem$$129, fullName]);
    }
    var fullName;
    var existingConstructor;
    var constructor;
    var basePrototype;
    var proxiedPrototype = {};
    var namespace$$3 = name$$62.split(".")[0];
    name$$62 = name$$62.split(".")[1];
    fullName = namespace$$3 + "-" + name$$62;
    if (!prototype) {
      prototype = base$$1;
      base$$1 = $$$2.Widget;
    }
    JAM.set($$$2.expr[":"], fullName.toLowerCase(), v398, JAM.policy.p2);
    introspect(JAM.policy.p3) {
      var v862 = $$$2[namespace$$3]
    }
    if (!v862) {
      v862 = {};
    }
    JAM.set($$$2, namespace$$3, v862, JAM.policy.p2);
    introspect(JAM.policy.p3) {
      var v863 = $$$2[namespace$$3]
    }
    introspect(JAM.policy.p3) {
      existingConstructor = v863[name$$62];
    }
    introspect(JAM.policy.p3) {
      var v864 = $$$2[namespace$$3]
    }
    constructor = JAM.set(v864, name$$62, v399, JAM.policy.p2);
    JAM.call($$$2.extend, $$$2, [constructor, existingConstructor, {version:prototype.version, _proto:JAM.call($$$2.extend, $$$2, [{}, prototype]), _childConstructors:[]}]);
    basePrototype = new base$$1;
    var v866 = basePrototype;
    var v2723 = $$$2.widget;
    var v5531 = JAM.call(v2723.extend, v2723, [{}, basePrototype.options]);
    v866.options = v5531;
    JAM.call($$$2.each, $$$2, [prototype, v402]);
    var v867 = constructor;
    var v2725 = $$$2.widget;
    var v4739;
    if (existingConstructor) {
      v4739 = basePrototype.widgetEventPrefix;
    } else {
      v4739 = name$$62;
    }
    var v5532 = JAM.call(v2725.extend, v2725, [basePrototype, {widgetEventPrefix:v4739}, proxiedPrototype, {constructor:constructor, namespace:namespace$$3, widgetName:name$$62, widgetFullName:fullName}]);
    v867.prototype = v5532;
    if (existingConstructor) {
      JAM.call($$$2.each, $$$2, [existingConstructor._childConstructors, v403]);
      delete existingConstructor._childConstructors;
    } else {
      var v869 = base$$1._childConstructors;
      JAM.call(v869.push, v869, [constructor]);
    }
    var v870 = $$$2.widget;
    JAM.call(v870.bridge, v870, [name$$62, constructor]);
    return;
  }
  function v397(elems$$10) {
    var i$$101 = 0;
    var elem$$128;
    introspect(JAM.policy.p3) {
      var v2728 = elem$$128 = elems$$10[i$$101]
    }
    var v872 = v2728 != null;
    for (;v872;) {
      try {
        var v871 = JAM.call($$$2, null, [elem$$128]);
        JAM.call(v871.triggerHandler, v871, ["remove"]);
      } catch (e$$31) {
      }
      i$$101++;
      introspect(JAM.policy.p3) {
        var v2729 = elem$$128 = elems$$10[i$$101]
      }
      v872 = v2729 != null;
    }
    JAM.call(_cleanData, null, [elems$$10]);
    return;
  }
  var uuid$$2 = 0;
  var slice$$1 = Array.prototype.slice;
  var _cleanData = $$$2.cleanData;
  $$$2.cleanData = v397;
  $$$2.widget = v404;
  $$$2.widget.extend = v405;
  $$$2.widget.bridge = v409;
  $$$2.Widget = v410;
  $$$2.Widget._childConstructors = [];
  $$$2.Widget.prototype = {widgetName:"widget", widgetEventPrefix:"", defaultElement:"<div>", options:{disabled:false, create:null}, _createWidget:v412, _getCreateOptions:$$$2.noop, _getCreateEventData:$$$2.noop, _create:$$$2.noop, _init:$$$2.noop, destroy:v413, _destroy:$$$2.noop, widget:v414, option:v415, _setOptions:v416, _setOption:v417, enable:v418, disable:v419, _on:v421, _off:v422, _delay:v423, _hoverable:v426, _focusable:v429, _trigger:v430};
  JAM.call($$$2.each, $$$2, [{show:"fadeIn", hide:"fadeOut"}, v433]);
  return;
}
function v396($$$1, undefined$$2) {
  function v395(el$$1, a$$7) {
    var v3934 = JAM.call($$$1, null, [el$$1]);
    if (JAM.call(v3934.css, v3934, ["overflow"]) === "hidden") {
      return false;
    }
    var v880;
    var v3935 = a$$7;
    if (v3935) {
      v3935 = a$$7 === "left";
    }
    if (v3935) {
      v880 = "scrollLeft";
    } else {
      v880 = "scrollTop";
    }
    var scroll = v880;
    var has = false;
    introspect(JAM.policy.p3) {
      var v2738 = el$$1[scroll]
    }
    if (v2738 > 0) {
      return true;
    }
    JAM.set(el$$1, scroll, 1, JAM.policy.p2);
    introspect(JAM.policy.p3) {
      var v882 = el$$1[scroll]
    }
    has = v882 > 0;
    JAM.set(el$$1, scroll, 0, JAM.policy.p2);
    return has;
  }
  function v394(instance, name$$61, args$$8) {
    var i$$100;
    var v883 = instance.plugins;
    introspect(JAM.policy.p3) {
      var set$$10 = v883[name$$61]
    }
    var v3936 = !set$$10;
    if (!v3936) {
      v3936 = !instance.element[0].parentNode;
    }
    var v2739 = v3936;
    if (!v2739) {
      v2739 = instance.element[0].parentNode.nodeType === 11;
    }
    if (v2739) {
      return;
    }
    i$$100 = 0;
    var v888 = i$$100 < set$$10.length;
    for (;v888;) {
      var v2741 = instance.options;
      introspect(JAM.policy.p3) {
        var v3939 = set$$10[i$$100]
      }
      var v2742 = v3939[0];
      introspect(JAM.policy.p3) {
        var v887 = v2741[v2742]
      }
      if (v887) {
        introspect(JAM.policy.p3) {
          var v2743 = set$$10[i$$100]
        }
        var v885 = v2743[1];
        JAM.call(v885.apply, v885, [instance.element, args$$8]);
      }
      i$$100++;
      v888 = i$$100 < set$$10.length;
    }
    return;
  }
  function v393(module, option$$1, set$$9) {
    var i$$99;
    var v2745 = $$$1.ui;
    introspect(JAM.policy.p3) {
      var v889 = v2745[module]
    }
    var proto$$1 = v889.prototype;
    for (i$$99 in set$$9) {
      var v890 = proto$$1.plugins;
      var v3940 = proto$$1.plugins;
      introspect(JAM.policy.p3) {
        var v2746 = v3940[i$$99]
      }
      if (!v2746) {
        v2746 = [];
      }
      JAM.set(v890, i$$99, v2746, JAM.policy.p2);
      var v2747 = proto$$1.plugins;
      introspect(JAM.policy.p3) {
        var v891 = v2747[i$$99]
      }
      introspect(JAM.policy.p3) {
        var v2748 = set$$9[i$$99]
      }
      JAM.call(v891.push, v891, [[option$$1, v2748]]);
    }
    return;
  }
  function v392() {
    return JAM.call(this.unbind, this, [".ui-disableSelection"]);
  }
  function v391() {
    function v390(event$$10) {
      event$$10.preventDefault();
      return;
    }
    var v3942;
    if ($$$1.support.selectstart) {
      v3942 = "selectstart";
    } else {
      v3942 = "mousedown";
    }
    return JAM.call(this.bind, this, [v3942 + ".ui-disableSelection", v390]);
  }
  function v389(removeData) {
    function v388(key$$21) {
      if (arguments.length) {
        return JAM.call(removeData.call, removeData, [this, JAM.call($$$1.camelCase, $$$1, [key$$21])]);
      } else {
        return JAM.call(removeData.call, removeData, [this]);
      }
      return;
    }
    return v388;
  }
  function v387(selector$$21) {
    var v2750;
    if (selector$$21 == null) {
      v2750 = this.prevObject;
    } else {
      var v3943 = this.prevObject;
      v2750 = JAM.call(v3943.filter, v3943, [selector$$21]);
    }
    return JAM.call(this.add, this, [v2750]);
  }
  function v386(i$$98, name$$60) {
    function v385(size$$7, margin$$2) {
      function v384() {
        var v897 = JAM.call($$$1, null, [this]);
        JAM.call(v897.css, v897, [type$$66, reduce(this, size$$7, true, margin$$2) + "px"]);
        return;
      }
      if (typeof size$$7 !== "number") {
        var v2753 = "outer" + name$$60;
        introspect(JAM.policy.p3) {
          var v899 = orig$$3[v2753]
        }
        return JAM.call(v899.call, v899, [this, size$$7]);
      }
      return JAM.call(this.each, this, [v384]);
    }
    function v383(size$$6) {
      function v382() {
        var v901 = JAM.call($$$1, null, [this]);
        JAM.call(v901.css, v901, [type$$66, reduce(this, size$$6) + "px"]);
        return;
      }
      if (size$$6 === undefined$$2) {
        var v2755 = "inner" + name$$60;
        introspect(JAM.policy.p3) {
          var v903 = orig$$3[v2755]
        }
        return JAM.call(v903.call, v903, [this]);
      }
      return JAM.call(this.each, this, [v382]);
    }
    function reduce(elem$$127, size$$5, border$$2, margin$$1) {
      function v381() {
        var v2756 = size$$5;
        var v3945 = parseFloat(JAM.call($$$1.css, $$$1, [elem$$127, "padding" + this]));
        if (!v3945) {
          v3945 = 0;
        }
        size$$5 = v2756 - v3945;
        if (border$$2) {
          var v2758 = size$$5;
          var v3946 = parseFloat(JAM.call($$$1.css, $$$1, [elem$$127, "border" + this + "Width"]));
          if (!v3946) {
            v3946 = 0;
          }
          size$$5 = v2758 - v3946;
        }
        if (margin$$1) {
          var v2760 = size$$5;
          var v3947 = parseFloat(JAM.call($$$1.css, $$$1, [elem$$127, "margin" + this]));
          if (!v3947) {
            v3947 = 0;
          }
          size$$5 = v2760 - v3947;
        }
        return;
      }
      JAM.call($$$1.each, $$$1, [side, v381]);
      return size$$5;
    }
    var v905;
    if (name$$60 === "Width") {
      v905 = ["Left", "Right"];
    } else {
      v905 = ["Top", "Bottom"];
    }
    var side = v905;
    var type$$66 = name$$60.toLowerCase();
    var orig$$3 = {innerWidth:$$$1.fn.innerWidth, innerHeight:$$$1.fn.innerHeight, outerWidth:$$$1.fn.outerWidth, outerHeight:$$$1.fn.outerHeight};
    JAM.set($$$1.fn, "inner" + name$$60, v383, JAM.policy.p2);
    JAM.set($$$1.fn, "outer" + name$$60, v385, JAM.policy.p2);
    return;
  }
  function v380(element$$5) {
    var tabIndex = JAM.call($$$1.attr, $$$1, [element$$5, "tabindex"]);
    var isTabIndexNaN = isNaN(tabIndex);
    var v2767 = isTabIndexNaN;
    if (!v2767) {
      v2767 = tabIndex >= 0;
    }
    var v914 = v2767;
    if (v914) {
      v914 = focusable(element$$5, !isTabIndexNaN);
    }
    return v914;
  }
  function v379(element$$4) {
    return focusable(element$$4, !isNaN(JAM.call($$$1.attr, $$$1, [element$$4, "tabindex"])));
  }
  function v378(elem$$126, i$$97, match$$37) {
    return!!JAM.call($$$1.data, $$$1, [elem$$126, match$$37[3]]);
  }
  function v377(dataName) {
    function v376(elem$$125) {
      return!!JAM.call($$$1.data, $$$1, [elem$$125, dataName]);
    }
    return v376;
  }
  function v375() {
    function v374() {
      if (runiqueId.test(this.id)) {
        var v918 = JAM.call($$$1, null, [this]);
        JAM.call(v918.removeAttr, v918, ["id"]);
      }
      return;
    }
    return JAM.call(this.each, this, [v374]);
  }
  function v373() {
    function v372() {
      if (!this.id) {
        this.id = "ui-id-" + (uuid$$1 = uuid$$1 + 1);
      }
      return;
    }
    return JAM.call(this.each, this, [v372]);
  }
  function v371(zIndex) {
    if (zIndex !== undefined$$2) {
      return JAM.call(this.css, this, ["zIndex", zIndex]);
    }
    if (this.length) {
      var elem$$124 = JAM.call($$$1, null, [this[0]]);
      var position;
      var value$$45;
      var v2774 = elem$$124.length;
      if (v2774) {
        v2774 = elem$$124[0] !== document;
      }
      var v927 = v2774;
      for (;v927;) {
        position = JAM.call(elem$$124.css, elem$$124, ["position"]);
        var v3952 = position === "absolute";
        if (!v3952) {
          v3952 = position === "relative";
        }
        var v2775 = v3952;
        if (!v2775) {
          v2775 = position === "fixed";
        }
        if (v2775) {
          value$$45 = parseInt(JAM.call(elem$$124.css, elem$$124, ["zIndex"]), 10);
          var v2776 = !isNaN(value$$45);
          if (v2776) {
            v2776 = value$$45 !== 0;
          }
          if (v2776) {
            return value$$45;
          }
        }
        elem$$124 = elem$$124.parent();
        var v2777 = elem$$124.length;
        if (v2777) {
          v2777 = elem$$124[0] !== document;
        }
        v927 = v2777;
      }
    }
    return 0;
  }
  function v370() {
    function v369() {
      return/(auto|scroll)/.test(JAM.call($$$1.css, $$$1, [this, "overflow"]) + JAM.call($$$1.css, $$$1, [this, "overflow-y"]) + JAM.call($$$1.css, $$$1, [this, "overflow-x"]));
    }
    function v368() {
      var v930 = /(relative|absolute|fixed)/.test(JAM.call($$$1.css, $$$1, [this, "position"]));
      if (v930) {
        v930 = /(auto|scroll)/.test(JAM.call($$$1.css, $$$1, [this, "overflow"]) + JAM.call($$$1.css, $$$1, [this, "overflow-y"]) + JAM.call($$$1.css, $$$1, [this, "overflow-x"]));
      }
      return v930;
    }
    var scrollParent;
    var v3960 = $$$1.ui.ie;
    if (v3960) {
      v3960 = /(static|relative)/.test(JAM.call(this.css, this, ["position"]));
    }
    var v2782 = v3960;
    if (!v2782) {
      v2782 = /absolute/.test(JAM.call(this.css, this, ["position"]));
    }
    if (v2782) {
      var v2783 = this.parents();
      var v931 = JAM.call(v2783.filter, v2783, [v368]);
      scrollParent = JAM.call(v931.eq, v931, [0]);
    } else {
      var v2784 = this.parents();
      var v932 = JAM.call(v2784.filter, v2784, [v369]);
      scrollParent = JAM.call(v932.eq, v932, [0]);
    }
    var v934;
    var v3963 = /fixed/.test(JAM.call(this.css, this, ["position"]));
    if (!v3963) {
      v3963 = !scrollParent.length;
    }
    if (v3963) {
      v934 = JAM.call($$$1, null, [document]);
    } else {
      v934 = scrollParent;
    }
    return v934;
  }
  function v367(delay$$3, fn$$18) {
    function v366() {
      function v365() {
        JAM.call($$$1, null, [elem$$123]).focus();
        if (fn$$18) {
          JAM.call(fn$$18.call, fn$$18, [elem$$123]);
        }
        return;
      }
      var elem$$123 = this;
      JAM.call(setTimeout, null, [v365, delay$$3]);
      return;
    }
    var v936;
    if (typeof delay$$3 === "number") {
      v936 = JAM.call(this.each, this, [v366]);
    } else {
      var v2786 = this._focus;
      v936 = JAM.call(v2786.apply, v2786, [this, arguments]);
    }
    return v936;
  }
  function focusable(element$$2, isTabIndexNotNaN) {
    var map;
    var mapName;
    var img$$2;
    var nodeName$$1 = element$$2.nodeName.toLowerCase();
    if ("area" === nodeName$$1) {
      map = element$$2.parentNode;
      mapName = map.name;
      var v3965 = !element$$2.href;
      if (!v3965) {
        v3965 = !mapName;
      }
      var v2788 = v3965;
      if (!v2788) {
        v2788 = map.nodeName.toLowerCase() !== "map";
      }
      if (v2788) {
        return false;
      }
      img$$2 = JAM.call($$$1, null, ["img[usemap=#" + mapName + "]"])[0];
      var v940 = !!img$$2;
      if (v940) {
        v940 = visible(img$$2);
      }
      return v940;
    }
    var v2791;
    if (/input|select|textarea|button|object/.test(nodeName$$1)) {
      v2791 = !element$$2.disabled;
    } else {
      var v3970;
      if ("a" === nodeName$$1) {
        var v4761 = element$$2.href;
        if (!v4761) {
          v4761 = isTabIndexNotNaN;
        }
        v3970 = v4761;
      } else {
        v3970 = isTabIndexNotNaN;
      }
      v2791 = v3970;
    }
    var v942 = v2791;
    if (v942) {
      v942 = visible(element$$2);
    }
    return v942;
  }
  function visible(element$$3) {
    function v364() {
      return JAM.call($$$1.css, $$$1, [this, "visibility"]) === "hidden";
    }
    var v2792 = $$$1.expr.filters;
    var v944 = JAM.call(v2792.visible, v2792, [element$$3]);
    if (v944) {
      var v4763 = JAM.call($$$1, null, [element$$3]).parents().addBack();
      v944 = !JAM.call(v4763.filter, v4763, [v364]).length;
    }
    return v944;
  }
  var uuid$$1 = 0;
  var runiqueId = /^ui-id-\d+$/;
  var v945 = $$$1.ui;
  if (!v945) {
    v945 = {};
  }
  $$$1.ui = v945;
  if ($$$1.ui.version) {
    return;
  }
  JAM.call($$$1.extend, $$$1, [$$$1.ui, {version:"1.10.1", keyCode:{BACKSPACE:8, COMMA:188, DELETE:46, DOWN:40, END:35, ENTER:13, ESCAPE:27, HOME:36, LEFT:37, NUMPAD_ADD:107, NUMPAD_DECIMAL:110, NUMPAD_DIVIDE:111, NUMPAD_ENTER:108, NUMPAD_MULTIPLY:106, NUMPAD_SUBTRACT:109, PAGE_DOWN:34, PAGE_UP:33, PERIOD:190, RIGHT:39, SPACE:32, TAB:9, UP:38}}]);
  var v949 = $$$1.fn;
  JAM.call(v949.extend, v949, [{_focus:$$$1.fn.focus, focus:v367, scrollParent:v370, zIndex:v371, uniqueId:v373, removeUniqueId:v375}]);
  var v951 = $$$1.expr[":"];
  var v3975;
  if ($$$1.expr.createPseudo) {
    var v4764 = $$$1.expr;
    v3975 = JAM.call(v4764.createPseudo, v4764, [v377]);
  } else {
    v3975 = v378;
  }
  JAM.call($$$1.extend, $$$1, [v951, {data:v3975, focusable:v379, tabbable:v380}]);
  var v4766 = JAM.call($$$1, null, ["<a>"]);
  if (!JAM.call(v4766.outerWidth, v4766, [1]).jquery) {
    JAM.call($$$1.each, $$$1, [["Width", "Height"], v386]);
  }
  if (!$$$1.fn.addBack) {
    $$$1.fn.addBack = v387;
  }
  var v4767 = JAM.call($$$1, null, ["<a>"]);
  var v3978 = JAM.call(v4767.data, v4767, ["a-b", "a"]);
  var v2802 = JAM.call(v3978.removeData, v3978, ["a-b"]);
  if (JAM.call(v2802.data, v2802, ["a-b"])) {
    var v957 = $$$1.fn;
    var v5533 = v389($$$1.fn.removeData);
    v957.removeData = v5533;
  }
  $$$1.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
  $$$1.support.selectstart = "onselectstart" in document.createElement("div");
  var v961 = $$$1.fn;
  JAM.call(v961.extend, v961, [{disableSelection:v391, enableSelection:v392}]);
  JAM.call($$$1.extend, $$$1, [$$$1.ui, {plugin:{add:v393, call:v394}, hasScroll:v395}]);
  return;
}
function v363(window$$1, undefined$$1) {
  function v362(i$$95, name$$59) {
    function v361(size$$4) {
      function v360(i$$96) {
        var self$$14 = jQuery$$1(this);
        JAM.call(JAM.get(self$$14, type$$65, JAM.policy.p3), self$$14, [JAM.call(size$$4.call, size$$4, [this, i$$96, JAM.call(JAM.get(self$$14, type$$65, JAM.policy.p3), self$$14, [])])]);
        return;
      }
      var elem$$122 = this[0];
      if (!elem$$122) {
        var v966;
        if (size$$4 == null) {
          v966 = null;
        } else {
          v966 = this;
        }
        return v966;
      }
      if (JAM.call(jQuery$$1.isFunction, jQuery$$1, [size$$4])) {
        return JAM.call(this.each, this, [v360]);
      }
      var v969;
      var v3981 = "scrollTo" in elem$$122;
      if (v3981) {
        v3981 = elem$$122.document;
      }
      if (v3981) {
        var v3982 = elem$$122.document.compatMode === "CSS1Compat";
        if (v3982) {
          var v4770 = elem$$122.document.documentElement;
          var v4771 = "client" + name$$59;
          introspect(JAM.policy.p3) {
            v3982 = v4770[v4771];
          }
        }
        var v2809 = v3982;
        if (!v2809) {
          var v3983 = elem$$122.document.body;
          var v3984 = "client" + name$$59;
          introspect(JAM.policy.p3) {
            v2809 = v3983[v3984];
          }
        }
        v969 = v2809;
      } else {
        var v2810;
        if (elem$$122.nodeType === 9) {
          var v4774 = elem$$122.documentElement;
          var v4775 = "client" + name$$59;
          introspect(JAM.policy.p3) {
            var v3986 = v4774[v4775]
          }
          var v4776 = elem$$122.body;
          var v4777 = "scroll" + name$$59;
          introspect(JAM.policy.p3) {
            var v3987 = v4776[v4777]
          }
          var v4778 = elem$$122.documentElement;
          var v4779 = "scroll" + name$$59;
          introspect(JAM.policy.p3) {
            var v3988 = v4778[v4779]
          }
          var v4780 = elem$$122.body;
          var v4781 = "offset" + name$$59;
          introspect(JAM.policy.p3) {
            var v3989 = v4780[v4781]
          }
          var v4782 = elem$$122.documentElement;
          var v4783 = "offset" + name$$59;
          introspect(JAM.policy.p3) {
            var v3990 = v4782[v4783]
          }
          v2810 = JAM.call(Math.max, Math, [v3986, v3987, v3988, v3989, v3990]);
        } else {
          var v3991;
          if (size$$4 === undefined$$1) {
            v3991 = JAM.call(jQuery$$1.css, jQuery$$1, [elem$$122, type$$65]);
          } else {
            var v5182;
            if (typeof size$$4 === "string") {
              v5182 = size$$4;
            } else {
              v5182 = size$$4 + "px";
            }
            v3991 = JAM.call(this.css, this, [type$$65, v5182]);
          }
          v2810 = v3991;
        }
        v969 = v2810;
      }
      return v969;
    }
    function v359(margin) {
      var v970;
      if (this[0]) {
        var v2812 = this[0];
        var v3993;
        if (margin) {
          v3993 = "margin";
        } else {
          v3993 = "border";
        }
        v970 = JAM.call(jQuery$$1.css, jQuery$$1, [v2812, type$$65, false, v3993]);
      } else {
        v970 = null;
      }
      return v970;
    }
    function v358() {
      var v971;
      if (this[0]) {
        v971 = JAM.call(jQuery$$1.css, jQuery$$1, [this[0], type$$65, false, "padding"]);
      } else {
        v971 = null;
      }
      return v971;
    }
    var type$$65 = name$$59.toLowerCase();
    JAM.set(jQuery$$1.fn, "inner" + name$$59, v358, JAM.policy.p2);
    JAM.set(jQuery$$1.fn, "outer" + name$$59, v359, JAM.policy.p2);
    JAM.set(jQuery$$1.fn, type$$65, v361, JAM.policy.p2);
    return;
  }
  function v357(i$$94, name$$58) {
    function v356(val$$7) {
      function v355() {
        win = getWindow(this);
        if (win) {
          var v2817;
          if (!i$$94) {
            v2817 = val$$7;
          } else {
            v2817 = jQuery$$1(win).scrollLeft();
          }
          var v977 = v2817;
          var v2818;
          if (i$$94) {
            v2818 = val$$7;
          } else {
            v2818 = jQuery$$1(win).scrollTop();
          }
          win.scrollTo(v977, v2818);
        } else {
          JAM.set(this, method$$1, val$$7, JAM.policy.p2);
        }
        return;
      }
      var elem$$121 = this[0];
      var win;
      if (!elem$$121) {
        return null;
      }
      if (val$$7 !== undefined$$1) {
        return JAM.call(this.each, this, [v355]);
      } else {
        win = getWindow(elem$$121);
        var v980;
        if (win) {
          var v2819;
          if ("pageXOffset" in win) {
            var v4786;
            if (i$$94) {
              v4786 = "pageYOffset";
            } else {
              v4786 = "pageXOffset";
            }
            var v3997 = v4786;
            introspect(JAM.policy.p3) {
              v2819 = win[v3997];
            }
          } else {
            var v4787 = jQuery$$1.support.boxModel;
            if (v4787) {
              var v5184 = win.document.documentElement;
              introspect(JAM.policy.p3) {
                v4787 = v5184[method$$1];
              }
            }
            var v3998 = v4787;
            if (!v3998) {
              var v4788 = win.document.body;
              introspect(JAM.policy.p3) {
                v3998 = v4788[method$$1];
              }
            }
            v2819 = v3998;
          }
          v980 = v2819;
        } else {
          introspect(JAM.policy.p3) {
            v980 = elem$$121[method$$1];
          }
        }
        return v980;
      }
      return;
    }
    var method$$1 = "scroll" + name$$58;
    JAM.set(jQuery$$1.fn, method$$1, v356, JAM.policy.p2);
    return;
  }
  function v354() {
    function v353() {
      var v983 = this.offsetParent;
      if (!v983) {
        v983 = document$$1.body;
      }
      var offsetParent$$2 = v983;
      var v2821 = offsetParent$$2;
      if (v2821) {
        var v4000 = !/^body|html$/i.test(offsetParent$$2.nodeName);
        if (v4000) {
          v4000 = JAM.call(jQuery$$1.css, jQuery$$1, [offsetParent$$2, "position"]) === "static";
        }
        v2821 = v4000;
      }
      var v984 = v2821;
      for (;v984;) {
        offsetParent$$2 = offsetParent$$2.offsetParent;
        var v2822 = offsetParent$$2;
        if (v2822) {
          var v4001 = !/^body|html$/i.test(offsetParent$$2.nodeName);
          if (v4001) {
            v4001 = JAM.call(jQuery$$1.css, jQuery$$1, [offsetParent$$2, "position"]) === "static";
          }
          v2822 = v4001;
        }
        v984 = v2822;
      }
      return offsetParent$$2;
    }
    return JAM.call(this.map, this, [v353]);
  }
  function v352() {
    if (!this[0]) {
      return null;
    }
    var elem$$120 = this[0];
    var offsetParent$$1 = this.offsetParent();
    var offset$$8 = this.offset();
    var v986;
    if (/^body|html$/i.test(offsetParent$$1[0].nodeName)) {
      v986 = {top:0, left:0};
    } else {
      v986 = offsetParent$$1.offset();
    }
    var parentOffset = v986;
    var v2825 = offset$$8.top;
    var v4003 = parseFloat(JAM.call(jQuery$$1.curCSS, jQuery$$1, [elem$$120, "marginTop", true]));
    if (!v4003) {
      v4003 = 0;
    }
    offset$$8.top = v2825 - v4003;
    var v2827 = offset$$8.left;
    var v4004 = parseFloat(JAM.call(jQuery$$1.curCSS, jQuery$$1, [elem$$120, "marginLeft", true]));
    if (!v4004) {
      v4004 = 0;
    }
    offset$$8.left = v2827 - v4004;
    var v2829 = parentOffset.top;
    var v4005 = parseFloat(JAM.call(jQuery$$1.curCSS, jQuery$$1, [offsetParent$$1[0], "borderTopWidth", true]));
    if (!v4005) {
      v4005 = 0;
    }
    parentOffset.top = v2829 + v4005;
    var v2831 = parentOffset.left;
    var v4006 = parseFloat(JAM.call(jQuery$$1.curCSS, jQuery$$1, [offsetParent$$1[0], "borderLeftWidth", true]));
    if (!v4006) {
      v4006 = 0;
    }
    parentOffset.left = v2831 + v4006;
    return{top:offset$$8.top - parentOffset.top, left:offset$$8.left - parentOffset.left};
  }
  function v351(elem$$119, options$$7, i$$93) {
    if (/static/.test(JAM.call(jQuery$$1.curCSS, jQuery$$1, [elem$$119, "position"]))) {
      elem$$119.style.position = "relative";
    }
    var curElem = jQuery$$1(elem$$119);
    var curOffset = curElem.offset();
    var v991 = parseInt(JAM.call(jQuery$$1.curCSS, jQuery$$1, [elem$$119, "top", true]), 10);
    if (!v991) {
      v991 = 0;
    }
    var curTop = v991;
    var v992 = parseInt(JAM.call(jQuery$$1.curCSS, jQuery$$1, [elem$$119, "left", true]), 10);
    if (!v992) {
      v992 = 0;
    }
    var curLeft = v992;
    if (JAM.call(jQuery$$1.isFunction, jQuery$$1, [options$$7])) {
      options$$7 = JAM.call(options$$7.call, options$$7, [elem$$119, i$$93, curOffset]);
    }
    var props$$3 = {top:options$$7.top - curOffset.top + curTop, left:options$$7.left - curOffset.left + curLeft};
    if ("using" in options$$7) {
      var v996 = options$$7.using;
      JAM.call(v996.call, v996, [elem$$119, props$$3]);
    } else {
      JAM.call(curElem.css, curElem, [props$$3]);
    }
    return;
  }
  function v350(body$$4) {
    var top$$3 = body$$4.offsetTop;
    var left$$6 = body$$4.offsetLeft;
    jQuery$$1.offset.initialize();
    if (jQuery$$1.offset.doesNotIncludeMarginInBodyOffset) {
      var v4011 = parseFloat(JAM.call(jQuery$$1.curCSS, jQuery$$1, [body$$4, "marginTop", true]));
      if (!v4011) {
        v4011 = 0;
      }
      top$$3 = top$$3 + v4011;
      var v4012 = parseFloat(JAM.call(jQuery$$1.curCSS, jQuery$$1, [body$$4, "marginLeft", true]));
      if (!v4012) {
        v4012 = 0;
      }
      left$$6 = left$$6 + v4012;
    }
    return{top:top$$3, left:left$$6};
  }
  function v349() {
    var body$$3 = document$$1.body;
    var container = document$$1.createElement("div");
    var innerDiv;
    var checkDiv;
    var table$$1;
    var td;
    var v1000 = parseFloat(JAM.call(jQuery$$1.curCSS, jQuery$$1, [body$$3, "marginTop", true]));
    if (!v1000) {
      v1000 = 0;
    }
    var bodyMarginTop = v1000;
    var html$$4 = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
    JAM.call(jQuery$$1.extend, jQuery$$1, [container.style, {position:"absolute", top:0, left:0, margin:0, border:0, width:"1px", height:"1px", visibility:"hidden"}]);
    JAM.set(container, "innerHTML", html$$4);
    JAM.call(body$$3.insertBefore, body$$3, [container, body$$3.firstChild]);
    innerDiv = container.firstChild;
    checkDiv = innerDiv.firstChild;
    td = innerDiv.nextSibling.firstChild.firstChild;
    this.doesNotAddBorder = checkDiv.offsetTop !== 5;
    this.doesAddBorderForTableAndCells = td.offsetTop === 5;
    checkDiv.style.position = "fixed";
    checkDiv.style.top = "20px";
    var v1007 = checkDiv.offsetTop === 20;
    if (!v1007) {
      v1007 = checkDiv.offsetTop === 15;
    }
    this.supportsFixedPosition = v1007;
    checkDiv.style.position = checkDiv.style.top = "";
    innerDiv.style.overflow = "hidden";
    innerDiv.style.position = "relative";
    this.subtractsBorderForOverflowNotVisible = checkDiv.offsetTop === -5;
    this.doesNotIncludeMarginInBodyOffset = body$$3.offsetTop !== bodyMarginTop;
    body$$3.removeChild(container);
    body$$3 = container = innerDiv = checkDiv = table$$1 = td = null;
    jQuery$$1.offset.initialize = jQuery$$1.noop;
    return;
  }
  function v348(options$$6) {
    function v347(i$$92) {
      var v1012 = jQuery$$1.offset;
      JAM.call(v1012.setOffset, v1012, [this, options$$6, i$$92]);
      return;
    }
    var elem$$118 = this[0];
    if (options$$6) {
      return JAM.call(this.each, this, [v347]);
    }
    var v2858 = !elem$$118;
    if (!v2858) {
      v2858 = !elem$$118.ownerDocument;
    }
    if (v2858) {
      return null;
    }
    if (elem$$118 === elem$$118.ownerDocument.body) {
      var v1014 = jQuery$$1.offset;
      return JAM.call(v1014.bodyOffset, v1014, [elem$$118]);
    }
    jQuery$$1.offset.initialize();
    var offsetParent = elem$$118.offsetParent;
    var prevOffsetParent = elem$$118;
    var doc$$4 = elem$$118.ownerDocument;
    var computedStyle$$1;
    var docElem$$1 = doc$$4.documentElement;
    var body$$2 = doc$$4.body;
    var defaultView$$1 = doc$$4.defaultView;
    var v1017;
    if (defaultView$$1) {
      v1017 = defaultView$$1.getComputedStyle(elem$$118, null);
    } else {
      v1017 = elem$$118.currentStyle;
    }
    var prevComputedStyle = v1017;
    var top$$2 = elem$$118.offsetTop;
    var left$$5 = elem$$118.offsetLeft;
    var v4016 = elem$$118 = elem$$118.parentNode;
    if (v4016) {
      v4016 = elem$$118 !== body$$2;
    }
    var v2860 = v4016;
    if (v2860) {
      v2860 = elem$$118 !== docElem$$1;
    }
    var v1023 = v2860;
    for (;v1023;) {
      var v2861 = jQuery$$1.offset.supportsFixedPosition;
      if (v2861) {
        v2861 = prevComputedStyle.position === "fixed";
      }
      if (v2861) {
        break;
      }
      var v1019;
      if (defaultView$$1) {
        v1019 = defaultView$$1.getComputedStyle(elem$$118, null);
      } else {
        v1019 = elem$$118.currentStyle;
      }
      computedStyle$$1 = v1019;
      top$$2 = top$$2 - elem$$118.scrollTop;
      left$$5 = left$$5 - elem$$118.scrollLeft;
      if (elem$$118 === offsetParent) {
        top$$2 = top$$2 + elem$$118.offsetTop;
        left$$5 = left$$5 + elem$$118.offsetLeft;
        var v2866 = jQuery$$1.offset.doesNotAddBorder;
        if (v2866) {
          var v4807 = jQuery$$1.offset.doesAddBorderForTableAndCells;
          if (v4807) {
            v4807 = /^t(able|d|h)$/i.test(elem$$118.nodeName);
          }
          v2866 = !v4807;
        }
        if (v2866) {
          var v2867 = top$$2;
          var v4021 = parseFloat(computedStyle$$1.borderTopWidth);
          if (!v4021) {
            v4021 = 0;
          }
          top$$2 = v2867 + v4021;
          var v2869 = left$$5;
          var v4022 = parseFloat(computedStyle$$1.borderLeftWidth);
          if (!v4022) {
            v4022 = 0;
          }
          left$$5 = v2869 + v4022;
        }
        prevOffsetParent = offsetParent;
        offsetParent = elem$$118.offsetParent;
      }
      var v2871 = jQuery$$1.offset.subtractsBorderForOverflowNotVisible;
      if (v2871) {
        v2871 = computedStyle$$1.overflow !== "visible";
      }
      if (v2871) {
        var v2872 = top$$2;
        var v4025 = parseFloat(computedStyle$$1.borderTopWidth);
        if (!v4025) {
          v4025 = 0;
        }
        top$$2 = v2872 + v4025;
        var v2874 = left$$5;
        var v4026 = parseFloat(computedStyle$$1.borderLeftWidth);
        if (!v4026) {
          v4026 = 0;
        }
        left$$5 = v2874 + v4026;
      }
      prevComputedStyle = computedStyle$$1;
      var v4027 = elem$$118 = elem$$118.parentNode;
      if (v4027) {
        v4027 = elem$$118 !== body$$2;
      }
      var v2876 = v4027;
      if (v2876) {
        v2876 = elem$$118 !== docElem$$1;
      }
      v1023 = v2876;
    }
    var v2877 = prevComputedStyle.position === "relative";
    if (!v2877) {
      v2877 = prevComputedStyle.position === "static";
    }
    if (v2877) {
      top$$2 = top$$2 + body$$2.offsetTop;
      left$$5 = left$$5 + body$$2.offsetLeft;
    }
    var v2880 = jQuery$$1.offset.supportsFixedPosition;
    if (v2880) {
      v2880 = prevComputedStyle.position === "fixed";
    }
    if (v2880) {
      top$$2 = top$$2 + JAM.call(Math.max, Math, [docElem$$1.scrollTop, body$$2.scrollTop]);
      left$$5 = left$$5 + JAM.call(Math.max, Math, [docElem$$1.scrollLeft, body$$2.scrollLeft]);
    }
    return{top:top$$2, left:left$$5};
  }
  function v346(options$$5) {
    function v345(i$$91) {
      var v1026 = jQuery$$1.offset;
      JAM.call(v1026.setOffset, v1026, [this, options$$5, i$$91]);
      return;
    }
    var elem$$117 = this[0];
    if (options$$5) {
      return JAM.call(this.each, this, [v345]);
    }
    var v2885 = !elem$$117;
    if (!v2885) {
      v2885 = !elem$$117.ownerDocument;
    }
    if (v2885) {
      return null;
    }
    if (elem$$117 === elem$$117.ownerDocument.body) {
      var v1028 = jQuery$$1.offset;
      return JAM.call(v1028.bodyOffset, v1028, [elem$$117]);
    }
    var box = elem$$117.getBoundingClientRect();
    var doc$$3 = elem$$117.ownerDocument;
    var body$$1 = doc$$3.body;
    var docElem = doc$$3.documentElement;
    var v2887 = docElem.clientTop;
    if (!v2887) {
      v2887 = body$$1.clientTop;
    }
    var v1030 = v2887;
    if (!v1030) {
      v1030 = 0;
    }
    var clientTop = v1030;
    var v2889 = docElem.clientLeft;
    if (!v2889) {
      v2889 = body$$1.clientLeft;
    }
    var v1031 = v2889;
    if (!v1031) {
      v1031 = 0;
    }
    var clientLeft = v1031;
    var v2891 = box.top;
    var v4816 = self.pageYOffset;
    if (!v4816) {
      var v5192 = jQuery$$1.support.boxModel;
      if (v5192) {
        v5192 = docElem.scrollTop;
      }
      v4816 = v5192;
    }
    var v4042 = v4816;
    if (!v4042) {
      v4042 = body$$1.scrollTop;
    }
    var top$$1 = v2891 + v4042 - clientTop;
    var v2893 = box.left;
    var v4818 = self.pageXOffset;
    if (!v4818) {
      var v5194 = jQuery$$1.support.boxModel;
      if (v5194) {
        v5194 = docElem.scrollLeft;
      }
      v4818 = v5194;
    }
    var v4043 = v4818;
    if (!v4043) {
      v4043 = body$$1.scrollLeft;
    }
    var left$$4 = v2893 + v4043 - clientLeft;
    return{top:top$$1, left:left$$4};
  }
  function v344(elem$$116) {
    function v343(fn$$17) {
      return elem$$116 === fn$$17.elem;
    }
    return JAM.call(jQuery$$1.grep, jQuery$$1, [jQuery$$1.timers, v343]).length;
  }
  function v342(fx$$1) {
    var v2896 = fx$$1.elem.style;
    if (v2896) {
      var v4820 = fx$$1.elem.style;
      var v4821 = fx$$1.prop;
      introspect(JAM.policy.p3) {
        var v4045 = v4820[v4821]
      }
      v2896 = v4045 != null;
    }
    if (v2896) {
      var v1036 = fx$$1.elem.style;
      var v1037 = fx$$1.prop;
      var v4046;
      var v5197 = fx$$1.prop === "width";
      if (!v5197) {
        v5197 = fx$$1.prop === "height";
      }
      if (v5197) {
        v4046 = JAM.call(Math.max, Math, [0, fx$$1.now]);
      } else {
        v4046 = fx$$1.now;
      }
      JAM.set(v1036, v1037, v4046 + fx$$1.unit, JAM.policy.p2);
    } else {
      JAM.set(fx$$1.elem, fx$$1.prop, fx$$1.now, JAM.policy.p2);
    }
    return;
  }
  function v341(fx) {
    JAM.call(jQuery$$1.style, jQuery$$1, [fx.elem, "opacity", fx.now]);
    return;
  }
  function v340() {
    clearInterval(timerId);
    timerId = null;
    return;
  }
  function v339() {
    var timers$$1 = jQuery$$1.timers;
    var i$$90 = 0;
    var v1045 = i$$90 < timers$$1.length;
    for (;v1045;) {
      if (!JAM.call(JAM.get(timers$$1, i$$90, JAM.policy.p3), timers$$1, [])) {
        var v1043 = i$$90;
        i$$90 = i$$90 - 1;
        JAM.call(timers$$1.splice, timers$$1, [v1043, 1]);
      }
      i$$90++;
      v1045 = i$$90 < timers$$1.length;
    }
    if (!timers$$1.length) {
      jQuery$$1.fx.stop();
    }
    return;
  }
  function v338(gotoEnd$$2) {
    var t$$1 = now();
    var done$$2 = true;
    var v2904 = gotoEnd$$2;
    if (!v2904) {
      v2904 = t$$1 >= this.options.duration + this.startTime;
    }
    if (v2904) {
      this.now = this.end;
      this.pos = this.state = 1;
      this.update();
      JAM.set(this.options.curAnim, this.prop, true, JAM.policy.p2);
      var i$$89;
      for (i$$89 in this.options.curAnim) {
        var v4049 = this.options.curAnim;
        introspect(JAM.policy.p3) {
          var v2907 = v4049[i$$89]
        }
        if (v2907 !== true) {
          done$$2 = false;
        }
      }
      if (done$$2) {
        if (this.options.display != null) {
          this.elem.style.overflow = this.options.overflow;
          var old$$7 = JAM.call(jQuery$$1.data, jQuery$$1, [this.elem, "olddisplay"]);
          var v1054 = this.elem.style;
          var v2912;
          if (old$$7) {
            v2912 = old$$7;
          } else {
            v2912 = this.options.display;
          }
          v1054.display = v2912;
          if (JAM.call(jQuery$$1.css, jQuery$$1, [this.elem, "display"]) === "none") {
            this.elem.style.display = "block";
          }
        }
        if (this.options.hide) {
          jQuery$$1(this.elem).hide();
        }
        var v2917 = this.options.hide;
        if (!v2917) {
          v2917 = this.options.show;
        }
        if (v2917) {
          var p$$3;
          for (p$$3 in this.options.curAnim) {
            var v1060 = this.elem;
            var v2919 = this.options.orig;
            introspect(JAM.policy.p3) {
              var v1061 = v2919[p$$3]
            }
            JAM.call(jQuery$$1.style, jQuery$$1, [v1060, p$$3, v1061]);
          }
        }
        var v1064 = this.options.complete;
        JAM.call(v1064.call, v1064, [this.elem]);
      }
      return false;
    } else {
      var n$$5 = t$$1 - this.startTime;
      this.state = n$$5 / this.options.duration;
      var v1068 = this.options.specialEasing;
      if (v1068) {
        var v2923 = this.options.specialEasing;
        var v2924 = this.prop;
        introspect(JAM.policy.p3) {
          v1068 = v2923[v2924];
        }
      }
      var specialEasing = v1068;
      var v1069 = this.options.easing;
      if (!v1069) {
        var v2926;
        if (jQuery$$1.easing.swing) {
          v2926 = "swing";
        } else {
          v2926 = "linear";
        }
        v1069 = v2926;
      }
      var defaultEasing = v1069;
      var v1070 = jQuery$$1.easing;
      var v5534 = JAM.call(JAM.get(v1070, specialEasing || defaultEasing, JAM.policy.p3), v1070, [this.state, n$$5, 0, 1, this.options.duration]);
      this.pos = v5534;
      this.now = this.start + (this.end - this.start) * this.pos;
      this.update();
    }
    return true;
  }
  function v337() {
    var v1077 = this.options.orig;
    var v1078 = this.prop;
    var v5535 = JAM.call(jQuery$$1.style, jQuery$$1, [this.elem, this.prop]);
    JAM.set(v1077, v1078, v5535, JAM.policy.p2);
    this.options.hide = true;
    JAM.call(this.custom, this, [this.cur(), 0]);
    return;
  }
  function v336() {
    var v1081 = this.options.orig;
    var v1082 = this.prop;
    var v5536 = JAM.call(jQuery$$1.style, jQuery$$1, [this.elem, this.prop]);
    JAM.set(v1081, v1082, v5536, JAM.policy.p2);
    this.options.show = true;
    var v2937;
    var v4828 = this.prop === "width";
    if (!v4828) {
      v4828 = this.prop === "height";
    }
    if (v4828) {
      v2937 = 1;
    } else {
      v2937 = 0;
    }
    JAM.call(this.custom, this, [v2937, this.cur()]);
    jQuery$$1(this.elem).show();
    return;
  }
  function v335(from, to$$1, unit$$1) {
    function t(gotoEnd$$1) {
      return JAM.call(self$$13.step, self$$13, [gotoEnd$$1]);
    }
    var v5537 = now();
    this.startTime = v5537;
    this.start = from;
    this.end = to$$1;
    var v2939 = unit$$1;
    if (!v2939) {
      v2939 = this.unit;
    }
    var v1087 = v2939;
    if (!v1087) {
      v1087 = "px";
    }
    this.unit = v1087;
    this.now = this.start;
    this.pos = this.state = 0;
    var self$$13 = this;
    t.elem = this.elem;
    var v4063 = t();
    if (v4063) {
      var v4829 = jQuery$$1.timers;
      v4063 = JAM.call(v4829.push, v4829, [t]);
    }
    var v2941 = v4063;
    if (v2941) {
      v2941 = !timerId;
    }
    if (v2941) {
      timerId = JAM.call(setInterval, null, [jQuery$$1.fx.tick, 13]);
    }
    return;
  }
  function v334(force$$2) {
    var v4830 = this.elem;
    var v4831 = this.prop;
    introspect(JAM.policy.p3) {
      var v4064 = v4830[v4831]
    }
    var v2943 = v4064 != null;
    if (v2943) {
      var v4065 = !this.elem.style;
      if (!v4065) {
        var v5203 = this.elem.style;
        var v5204 = this.prop;
        introspect(JAM.policy.p3) {
          var v4833 = v5203[v5204]
        }
        v4065 = v4833 == null;
      }
      v2943 = v4065;
    }
    if (v2943) {
      var v1090 = this.elem;
      var v1091 = this.prop;
      introspect(JAM.policy.p3) {
        return v1090[v1091];
      }
    }
    var r$$2 = parseFloat(JAM.call(jQuery$$1.css, jQuery$$1, [this.elem, this.prop, force$$2]));
    var v1094;
    var v4066 = r$$2;
    if (v4066) {
      v4066 = r$$2 > -1E4;
    }
    if (v4066) {
      v1094 = r$$2;
    } else {
      var v2946 = parseFloat(JAM.call(jQuery$$1.curCSS, jQuery$$1, [this.elem, this.prop]));
      if (!v2946) {
        v2946 = 0;
      }
      v1094 = v2946;
    }
    return v1094;
  }
  function v333() {
    if (this.options.step) {
      var v1095 = this.options.step;
      JAM.call(v1095.call, v1095, [this.elem, this.now, this]);
    }
    var v4069 = jQuery$$1.fx.step;
    var v4070 = this.prop;
    introspect(JAM.policy.p3) {
      var v2950 = v4069[v4070]
    }
    if (!v2950) {
      v2950 = jQuery$$1.fx.step._default;
    }
    JAM.call(v2950, null, [this]);
    var v4073 = this.prop === "height";
    if (!v4073) {
      v4073 = this.prop === "width";
    }
    var v2951 = v4073;
    if (v2951) {
      v2951 = this.elem.style;
    }
    if (v2951) {
      this.elem.style.display = "block";
    }
    return;
  }
  function v332(elem$$115, options$$4, prop$$7) {
    this.options = options$$4;
    this.elem = elem$$115;
    this.prop = prop$$7;
    if (!options$$4.orig) {
      options$$4.orig = {};
    }
    return;
  }
  function v331(p$$2, n$$4, firstNum$$1, diff$$2) {
    return(-Math.cos(p$$2 * Math.PI) / 2 + .5) * diff$$2 + firstNum$$1;
  }
  function v330(p$$1, n$$3, firstNum, diff$$1) {
    return firstNum + diff$$1 * p$$1;
  }
  function v329(speed$$5, easing$$1, fn$$16) {
    function v328() {
      if (opt$$1.queue !== false) {
        jQuery$$1(this).dequeue();
      }
      if (JAM.call(jQuery$$1.isFunction, jQuery$$1, [opt$$1.old])) {
        var v1107 = opt$$1.old;
        JAM.call(v1107.call, v1107, [this]);
      }
      return;
    }
    var v1109;
    var v4076 = speed$$5;
    if (v4076) {
      v4076 = typeof speed$$5 === "object";
    }
    if (v4076) {
      v1109 = speed$$5;
    } else {
      var v4844 = fn$$16;
      if (!v4844) {
        var v5206 = !fn$$16;
        if (v5206) {
          v5206 = easing$$1;
        }
        v4844 = v5206;
      }
      var v4077 = v4844;
      if (!v4077) {
        var v4845 = JAM.call(jQuery$$1.isFunction, jQuery$$1, [speed$$5]);
        if (v4845) {
          v4845 = speed$$5;
        }
        v4077 = v4845;
      }
      var v2957 = v4077;
      var v4078 = fn$$16 && easing$$1;
      if (!v4078) {
        var v5208 = easing$$1;
        if (v5208) {
          v5208 = !JAM.call(jQuery$$1.isFunction, jQuery$$1, [easing$$1]);
        }
        var v4847 = v5208;
        if (v4847) {
          v4847 = easing$$1;
        }
        v4078 = v4847;
      }
      v1109 = {complete:v2957, duration:speed$$5, easing:v4078};
    }
    var opt$$1 = v1109;
    var v1110;
    if (jQuery$$1.fx.off) {
      v1110 = 0;
    } else {
      var v2960;
      if (typeof opt$$1.duration === "number") {
        v2960 = opt$$1.duration;
      } else {
        var v4850 = jQuery$$1.fx.speeds;
        var v4851 = opt$$1.duration;
        introspect(JAM.policy.p3) {
          var v4080 = v4850[v4851]
        }
        if (!v4080) {
          v4080 = jQuery$$1.fx.speeds._default;
        }
        v2960 = v4080;
      }
      v1110 = v2960;
    }
    opt$$1.duration = v1110;
    opt$$1.old = opt$$1.complete;
    opt$$1.complete = v328;
    return opt$$1;
  }
  function v327(name$$57, props$$2) {
    function v326(speed$$4, callback$$41) {
      return JAM.call(this.animate, this, [props$$2, speed$$4, callback$$41]);
    }
    JAM.set(jQuery$$1.fn, name$$57, v326, JAM.policy.p2);
    return;
  }
  function v325(clearQueue, gotoEnd) {
    function v324() {
      var i$$88 = timers.length - 1;
      var v1114 = i$$88 >= 0;
      for (;v1114;) {
        introspect(JAM.policy.p3) {
          var v4082 = timers[i$$88]
        }
        if (v4082.elem === this) {
          if (gotoEnd) {
            JAM.call(JAM.get(timers, i$$88, JAM.policy.p3), timers, [true]);
          }
          JAM.call(timers.splice, timers, [i$$88, 1]);
        }
        i$$88--;
        v1114 = i$$88 >= 0;
      }
      return;
    }
    var timers = jQuery$$1.timers;
    if (clearQueue) {
      JAM.call(this.queue, this, [[]]);
    }
    JAM.call(this.each, this, [v324]);
    if (!gotoEnd) {
      this.dequeue();
    }
    return this;
  }
  function v323(prop$$6, speed$$3, easing, callback$$40) {
    function v322() {
      function v321(name$$56, val$$6) {
        var e$$30 = JAM.new(jQuery$$1.fx, [self$$12, opt, name$$56]);
        if (rfxtypes.test(val$$6)) {
          var v2963;
          if (val$$6 === "toggle") {
            var v4083;
            if (hidden) {
              v4083 = "show";
            } else {
              v4083 = "hide";
            }
            v2963 = v4083;
          } else {
            v2963 = val$$6;
          }
          JAM.call(JAM.get(e$$30, v2963, JAM.policy.p3), e$$30, [prop$$6]);
        } else {
          var parts$$3 = rfxnum.exec(val$$6);
          var v1118 = JAM.call(e$$30.cur, e$$30, [true]);
          if (!v1118) {
            v1118 = 0;
          }
          var start$$4 = v1118;
          if (parts$$3) {
            var end$$1 = parseFloat(parts$$3[2]);
            var v1120 = parts$$3[3];
            if (!v1120) {
              v1120 = "px";
            }
            var unit = v1120;
            if (unit !== "px") {
              JAM.set(self$$12.style, name$$56, (end$$1 || 1) + unit, JAM.policy.p2);
              start$$4 = (end$$1 || 1) / JAM.call(e$$30.cur, e$$30, [true]) * start$$4;
              JAM.set(self$$12.style, name$$56, start$$4 + unit, JAM.policy.p2);
            }
            if (parts$$3[1]) {
              var v4085;
              if (parts$$3[1] === "-=") {
                v4085 = -1;
              } else {
                v4085 = 1;
              }
              end$$1 = v4085 * end$$1 + start$$4;
            }
            JAM.call(e$$30.custom, e$$30, [start$$4, end$$1, unit]);
          } else {
            JAM.call(e$$30.custom, e$$30, [start$$4, val$$6, ""]);
          }
        }
        return;
      }
      var opt = JAM.call(jQuery$$1.extend, jQuery$$1, [{}, optall]);
      var p;
      var v1128 = this.nodeType === 1;
      if (v1128) {
        var v2971 = jQuery$$1(this);
        v1128 = JAM.call(v2971.is, v2971, [":hidden"]);
      }
      var hidden = v1128;
      var self$$12 = this;
      for (p in prop$$6) {
        var name$$55 = p.replace(rdashAlpha, fcamelCase);
        if (p !== name$$55) {
          JAM.set(prop$$6, name$$55, JAM.get(prop$$6, p, JAM.policy.p4), JAM.policy.p4);
          delete prop$$6[p];
          p = name$$55;
        }
        introspect(JAM.policy.p3) {
          var v4855 = prop$$6[p]
        }
        var v4086 = v4855 === "hide";
        if (v4086) {
          v4086 = hidden;
        }
        var v2972 = v4086;
        if (!v2972) {
          introspect(JAM.policy.p3) {
            var v4856 = prop$$6[p]
          }
          var v4087 = v4856 === "show";
          if (v4087) {
            v4087 = !hidden;
          }
          v2972 = v4087;
        }
        if (v2972) {
          var v1130 = opt.complete;
          return JAM.call(v1130.call, v1130, [this]);
        }
        var v4089 = p === "height";
        if (!v4089) {
          v4089 = p === "width";
        }
        var v2973 = v4089;
        if (v2973) {
          v2973 = this.style;
        }
        if (v2973) {
          var v1132 = opt;
          var v5538 = JAM.call(jQuery$$1.css, jQuery$$1, [this, "display"]);
          v1132.display = v5538;
          opt.overflow = this.style.overflow;
        }
        introspect(JAM.policy.p3) {
          var v2974 = prop$$6[p]
        }
        if (JAM.call(jQuery$$1.isArray, jQuery$$1, [v2974])) {
          var v2975 = opt.specialEasing;
          if (!v2975) {
            v2975 = {};
          }
          var v1135 = opt.specialEasing = v2975;
          introspect(JAM.policy.p3) {
            var v2976 = prop$$6[p]
          }
          JAM.set(v1135, p, v2976[1], JAM.policy.p2);
          introspect(JAM.policy.p3) {
            var v1136 = prop$$6[p]
          }
          JAM.set(prop$$6, p, v1136[0], JAM.policy.p2);
        }
      }
      if (opt.overflow != null) {
        this.style.overflow = "hidden";
      }
      var v1140 = opt;
      var v5539 = JAM.call(jQuery$$1.extend, jQuery$$1, [{}, prop$$6]);
      v1140.curAnim = v5539;
      JAM.call(jQuery$$1.each, jQuery$$1, [prop$$6, v321]);
      return true;
    }
    var optall = JAM.call(jQuery$$1.speed, jQuery$$1, [speed$$3, easing, callback$$40]);
    if (JAM.call(jQuery$$1.isEmptyObject, jQuery$$1, [prop$$6])) {
      return JAM.call(this.each, this, [optall.complete]);
    }
    var v2978;
    if (optall.queue === false) {
      v2978 = "each";
    } else {
      v2978 = "queue";
    }
    return JAM.call(JAM.get(this, v2978, JAM.policy.p3), this, [v322]);
  }
  function v320(speed$$2, to, callback$$39) {
    var v4859 = JAM.call(this.filter, this, [":hidden"]);
    var v1144 = JAM.call(v4859.css, v4859, ["opacity", 0]).show().end();
    return JAM.call(v1144.animate, v1144, [{opacity:to}, speed$$2, callback$$39]);
  }
  function v319(fn$$15, fn2) {
    function v318() {
      var v1146;
      if (bool) {
        v1146 = fn$$15;
      } else {
        var v2980 = jQuery$$1(this);
        v1146 = JAM.call(v2980.is, v2980, [":hidden"]);
      }
      var state$$1 = v1146;
      var v1147 = jQuery$$1(this);
      var v2981;
      if (state$$1) {
        v2981 = "show";
      } else {
        v2981 = "hide";
      }
      JAM.call(JAM.get(v1147, v2981, JAM.policy.p3), v1147, []);
      return;
    }
    var bool = typeof fn$$15 === "boolean";
    var v2982 = JAM.call(jQuery$$1.isFunction, jQuery$$1, [fn$$15]);
    if (v2982) {
      v2982 = JAM.call(jQuery$$1.isFunction, jQuery$$1, [fn2]);
    }
    if (v2982) {
      var v1150 = this._toggle;
      JAM.call(v1150.apply, v1150, [this, arguments]);
    } else {
      var v2983 = fn$$15 == null;
      if (!v2983) {
        v2983 = bool;
      }
      if (v2983) {
        JAM.call(this.each, this, [v318]);
      } else {
        JAM.call(this.animate, this, [genFx("toggle", 3), fn$$15, fn2]);
      }
    }
    return this;
  }
  function v317(speed$$1, callback$$38) {
    var v2984 = speed$$1;
    if (!v2984) {
      v2984 = speed$$1 === 0;
    }
    if (v2984) {
      return JAM.call(this.animate, this, [genFx("hide", 3), speed$$1, callback$$38]);
    } else {
      var i$$87 = 0;
      var l$$24 = this.length;
      var v1159 = i$$87 < l$$24;
      for (;v1159;) {
        introspect(JAM.policy.p3) {
          var v1155 = this[i$$87]
        }
        var old$$6 = JAM.call(jQuery$$1.data, jQuery$$1, [v1155, "olddisplay"]);
        var v2985 = !old$$6;
        if (v2985) {
          v2985 = old$$6 !== "none";
        }
        if (v2985) {
          introspect(JAM.policy.p3) {
            var v1156 = this[i$$87]
          }
          introspect(JAM.policy.p3) {
            var v2986 = this[i$$87]
          }
          JAM.call(jQuery$$1.data, jQuery$$1, [v1156, "olddisplay", JAM.call(jQuery$$1.css, jQuery$$1, [v2986, "display"])]);
        }
        i$$87++;
        v1159 = i$$87 < l$$24;
      }
      var j$$6 = 0;
      var k$$3 = this.length;
      var v1161 = j$$6 < k$$3;
      for (;v1161;) {
        introspect(JAM.policy.p3) {
          var v2987 = this[j$$6]
        }
        v2987.style.display = "none";
        j$$6++;
        v1161 = j$$6 < k$$3;
      }
      return this;
    }
    return;
  }
  function v316(speed, callback$$37) {
    var v2988 = speed;
    if (!v2988) {
      v2988 = speed === 0;
    }
    if (v2988) {
      return JAM.call(this.animate, this, [genFx("show", 3), speed, callback$$37]);
    } else {
      var i$$86 = 0;
      var l$$23 = this.length;
      var v1172 = i$$86 < l$$23;
      for (;v1172;) {
        introspect(JAM.policy.p3) {
          var v1164 = this[i$$86]
        }
        var old$$5 = JAM.call(jQuery$$1.data, jQuery$$1, [v1164, "olddisplay"]);
        introspect(JAM.policy.p3) {
          var v2989 = this[i$$86]
        }
        v2989.style.display = old$$5 || "";
        introspect(JAM.policy.p3) {
          var v4096 = this[i$$86]
        }
        if (JAM.call(jQuery$$1.css, jQuery$$1, [v4096, "display"]) === "none") {
          introspect(JAM.policy.p3) {
            var v1166 = this[i$$86]
          }
          var nodeName = v1166.nodeName;
          var display;
          introspect(JAM.policy.p3) {
            var v1169 = elemdisplay[nodeName]
          }
          if (v1169) {
            introspect(JAM.policy.p3) {
              display = elemdisplay[nodeName];
            }
          } else {
            var v1167 = jQuery$$1("<" + nodeName + " />");
            var elem$$114 = JAM.call(v1167.appendTo, v1167, ["body"]);
            display = JAM.call(elem$$114.css, elem$$114, ["display"]);
            if (display === "none") {
              display = "block";
            }
            elem$$114.remove();
            JAM.set(elemdisplay, nodeName, display, JAM.policy.p2);
          }
          introspect(JAM.policy.p3) {
            var v1170 = this[i$$86]
          }
          JAM.call(jQuery$$1.data, jQuery$$1, [v1170, "olddisplay", display]);
        }
        i$$86++;
        v1172 = i$$86 < l$$23;
      }
      var j$$5 = 0;
      var k$$2 = this.length;
      var v1174 = j$$5 < k$$2;
      for (;v1174;) {
        introspect(JAM.policy.p3) {
          var v2992 = this[j$$5]
        }
        var v1173 = v2992.style;
        introspect(JAM.policy.p3) {
          var v4098 = this[j$$5]
        }
        var v2993 = JAM.call(jQuery$$1.data, jQuery$$1, [v4098, "olddisplay"]);
        if (!v2993) {
          v2993 = "";
        }
        v1173.display = v2993;
        j$$5++;
        v1174 = j$$5 < k$$2;
      }
      return this;
    }
    return;
  }
  function v315(a$$6, traditional) {
    function v314() {
      add(this.name, this.value);
      return;
    }
    function buildParams(prefix$$3, obj$$21) {
      function v313(k$$1, v$$1) {
        buildParams(prefix$$3 + "[" + k$$1 + "]", v$$1);
        return;
      }
      function v312(i$$85, v) {
        var v2995 = traditional;
        if (!v2995) {
          v2995 = /\[\]$/.test(prefix$$3);
        }
        if (v2995) {
          add(prefix$$3, v);
        } else {
          var v4102 = prefix$$3 + "[";
          var v4860;
          var v5388 = typeof v === "object";
          if (!v5388) {
            v5388 = JAM.call(jQuery$$1.isArray, jQuery$$1, [v]);
          }
          if (v5388) {
            v4860 = i$$85;
          } else {
            v4860 = "";
          }
          buildParams(v4102 + v4860 + "]", v);
        }
        return;
      }
      if (JAM.call(jQuery$$1.isArray, jQuery$$1, [obj$$21])) {
        JAM.call(jQuery$$1.each, jQuery$$1, [obj$$21, v312]);
      } else {
        var v4104 = !traditional;
        if (v4104) {
          v4104 = obj$$21 != null;
        }
        var v2997 = v4104;
        if (v2997) {
          v2997 = typeof obj$$21 === "object";
        }
        if (v2997) {
          JAM.call(jQuery$$1.each, jQuery$$1, [obj$$21, v313]);
        } else {
          add(prefix$$3, obj$$21);
        }
      }
      return;
    }
    function add(key$$20, value$$44) {
      var v1183;
      if (JAM.call(jQuery$$1.isFunction, jQuery$$1, [value$$44])) {
        v1183 = value$$44();
      } else {
        v1183 = value$$44;
      }
      value$$44 = v1183;
      var v1184 = s$$5;
      var v1185 = s$$5.length;
      var v2999 = encodeURIComponent(key$$20) + "=";
      var v3000 = encodeURIComponent(value$$44);
      introspect(JAM.policy.p2) {
        v1184[v1185] = v2999 + v3000;
      }
      return;
    }
    var s$$5 = [];
    if (traditional === undefined$$1) {
      traditional = jQuery$$1.ajaxSettings.traditional;
    }
    var v3001 = JAM.call(jQuery$$1.isArray, jQuery$$1, [a$$6]);
    if (!v3001) {
      v3001 = a$$6.jquery;
    }
    if (v3001) {
      JAM.call(jQuery$$1.each, jQuery$$1, [a$$6, v314]);
    } else {
      var prefix$$2;
      for (prefix$$2 in a$$6) {
        introspect(JAM.policy.p3) {
          var v1188 = a$$6[prefix$$2]
        }
        buildParams(prefix$$2, v1188);
      }
    }
    return s$$5.join("&").replace(r20, "+");
  }
  function v311(xhr$$4, type$$64, s$$4) {
    var v1191 = xhr$$4.getResponseHeader("content-type");
    if (!v1191) {
      v1191 = "";
    }
    var ct = v1191;
    var v1192 = type$$64 === "xml";
    if (!v1192) {
      var v3003 = !type$$64;
      if (v3003) {
        v3003 = ct.indexOf("xml") >= 0;
      }
      v1192 = v3003;
    }
    var xml = v1192;
    var v1193;
    if (xml) {
      v1193 = xhr$$4.responseXML;
    } else {
      v1193 = xhr$$4.responseText;
    }
    var data$$43 = v1193;
    var v3005 = xml;
    if (v3005) {
      v3005 = data$$43.documentElement.nodeName === "parsererror";
    }
    if (v3005) {
      JAM.call(jQuery$$1.error, jQuery$$1, ["parsererror"]);
    }
    var v3006 = s$$4;
    if (v3006) {
      v3006 = s$$4.dataFilter;
    }
    if (v3006) {
      data$$43 = JAM.call(s$$4.dataFilter, s$$4, [data$$43, type$$64]);
    }
    if (typeof data$$43 === "string") {
      var v3008 = type$$64 === "json";
      if (!v3008) {
        var v4110 = !type$$64;
        if (v4110) {
          v4110 = ct.indexOf("json") >= 0;
        }
        v3008 = v4110;
      }
      if (v3008) {
        data$$43 = JAM.call(jQuery$$1.parseJSON, jQuery$$1, [data$$43]);
      } else {
        var v3009 = type$$64 === "script";
        if (!v3009) {
          var v4112 = !type$$64;
          if (v4112) {
            v4112 = ct.indexOf("javascript") >= 0;
          }
          v3009 = v4112;
        }
        if (v3009) {
          JAM.call(jQuery$$1.globalEval, jQuery$$1, [data$$43]);
        }
      }
    }
    return data$$43;
  }
  function v310(xhr$$3, url$$7) {
    var lastModified = xhr$$3.getResponseHeader("Last-Modified");
    var etag = xhr$$3.getResponseHeader("Etag");
    if (lastModified) {
      JAM.set(jQuery$$1.lastModified, url$$7, lastModified, JAM.policy.p2);
    }
    if (etag) {
      JAM.set(jQuery$$1.etag, url$$7, etag, JAM.policy.p2);
    }
    var v1201 = xhr$$3.status === 304;
    if (!v1201) {
      v1201 = xhr$$3.status === 0;
    }
    return v1201;
  }
  function v309(xhr$$2) {
    try {
      var v5214 = !xhr$$2.status;
      if (v5214) {
        v5214 = location.protocol === "file:";
      }
      var v4864 = v5214;
      if (!v4864) {
        var v5215 = xhr$$2.status >= 200;
        if (v5215) {
          v5215 = xhr$$2.status < 300;
        }
        v4864 = v5215;
      }
      var v4114 = v4864;
      if (!v4114) {
        v4114 = xhr$$2.status === 304;
      }
      var v3013 = v4114;
      if (!v3013) {
        v3013 = xhr$$2.status === 1223;
      }
      var v1202 = v3013;
      if (!v1202) {
        v1202 = xhr$$2.status === 0;
      }
      return v1202;
    } catch (e$$29) {
    }
    return false;
  }
  function v308(s$$3, xhr$$1, status$$2, e$$28) {
    if (s$$3.error) {
      var v1203 = s$$3.error;
      var v3016 = s$$3.context;
      if (!v3016) {
        v3016 = s$$3;
      }
      JAM.call(v1203.call, v1203, [v3016, xhr$$1, status$$2, e$$28]);
    }
    if (s$$3.global) {
      var v3017;
      if (s$$3.context) {
        v3017 = jQuery$$1(s$$3.context);
      } else {
        v3017 = jQuery$$1.event;
      }
      var v1206 = v3017;
      JAM.call(v1206.trigger, v1206, ["ajaxError", [xhr$$1, s$$3, e$$28]]);
    }
    return;
  }
  function v307(origSettings) {
    function v306() {
      var v3018 = xhr;
      if (v3018) {
        v3018 = !requestDone;
      }
      if (v3018) {
        JAM.call(onreadystatechange, null, ["timeout"]);
      }
      return;
    }
    function v305() {
      if (xhr) {
        JAM.call(oldAbort.call, oldAbort, [xhr]);
      }
      JAM.call(onreadystatechange, null, ["abort"]);
      return;
    }
    function v304(isTimeout) {
      var v4120 = !xhr;
      if (!v4120) {
        v4120 = xhr.readyState === 0;
      }
      var v3019 = v4120;
      if (!v3019) {
        v3019 = isTimeout === "abort";
      }
      if (v3019) {
        if (!requestDone) {
          complete();
        }
        requestDone = true;
        if (xhr) {
          JAM.set(xhr, "onreadystatechange", jQuery$$1.noop);
        }
      } else {
        var v4122 = !requestDone;
        if (v4122) {
          v4122 = xhr;
        }
        var v3020 = v4122;
        if (v3020) {
          var v4123 = xhr.readyState === 4;
          if (!v4123) {
            v4123 = isTimeout === "timeout";
          }
          v3020 = v4123;
        }
        if (v3020) {
          requestDone = true;
          JAM.set(xhr, "onreadystatechange", jQuery$$1.noop);
          var v1211;
          if (isTimeout === "timeout") {
            v1211 = "timeout";
          } else {
            var v3021;
            if (!JAM.call(jQuery$$1.httpSuccess, jQuery$$1, [xhr])) {
              v3021 = "error";
            } else {
              var v4124;
              var v5217 = s$$2.ifModified;
              if (v5217) {
                v5217 = JAM.call(jQuery$$1.httpNotModified, jQuery$$1, [xhr, s$$2.url]);
              }
              if (v5217) {
                v4124 = "notmodified";
              } else {
                v4124 = "success";
              }
              v3021 = v4124;
            }
            v1211 = v3021;
          }
          status$$1 = v1211;
          var errMsg;
          if (status$$1 === "success") {
            try {
              data$$42 = JAM.call(jQuery$$1.httpData, jQuery$$1, [xhr, s$$2.dataType, s$$2]);
            } catch (err) {
              status$$1 = "parsererror";
              errMsg = err;
            }
          }
          var v3023 = status$$1 === "success";
          if (!v3023) {
            v3023 = status$$1 === "notmodified";
          }
          if (v3023) {
            if (!jsonp) {
              success();
            }
          } else {
            JAM.call(jQuery$$1.handleError, jQuery$$1, [s$$2, xhr, status$$1, errMsg]);
          }
          complete();
          if (isTimeout === "timeout") {
            xhr.abort();
          }
          if (s$$2.async) {
            xhr = null;
          }
        }
      }
      return;
    }
    function v303() {
      var v3024 = !done$$1;
      if (v3024) {
        var v4873 = !this.readyState;
        if (!v4873) {
          v4873 = this.readyState === "loaded";
        }
        var v4127 = v4873;
        if (!v4127) {
          v4127 = this.readyState === "complete";
        }
        v3024 = v4127;
      }
      if (v3024) {
        done$$1 = true;
        success();
        complete();
        JAM.set(script$$2, "onload", JAM.set(script$$2, "onreadystatechange", null));
        var v3025 = head$$1;
        if (v3025) {
          v3025 = script$$2.parentNode;
        }
        if (v3025) {
          head$$1.removeChild(script$$2);
        }
      }
      return;
    }
    function v302(tmp$$1) {
      data$$42 = tmp$$1;
      success();
      complete();
      JAM.set(window$$1, jsonp, undefined$$1, JAM.policy.p2);
      try {
        delete window$$1[jsonp];
      } catch (e$$24) {
      }
      if (head$$1) {
        head$$1.removeChild(script$$2);
      }
      return;
    }
    function success() {
      if (s$$2.success) {
        var v1222 = s$$2.success;
        JAM.call(v1222.call, v1222, [callbackContext, data$$42, status$$1, xhr]);
      }
      if (s$$2.global) {
        trigger$$1("ajaxSuccess", [xhr, s$$2]);
      }
      return;
    }
    function complete() {
      if (s$$2.complete) {
        var v1226 = s$$2.complete;
        JAM.call(v1226.call, v1226, [callbackContext, xhr, status$$1]);
      }
      if (s$$2.global) {
        trigger$$1("ajaxComplete", [xhr, s$$2]);
      }
      var v3026 = s$$2.global;
      if (v3026) {
        v3026 = !(jQuery$$1.active = jQuery$$1.active - 1);
      }
      if (v3026) {
        var v1230 = jQuery$$1.event;
        JAM.call(v1230.trigger, v1230, ["ajaxStop"]);
      }
      return;
    }
    function trigger$$1(type$$63, args$$7) {
      var v3027;
      if (s$$2.context) {
        v3027 = jQuery$$1(s$$2.context);
      } else {
        v3027 = jQuery$$1.event;
      }
      var v1232 = v3027;
      JAM.call(v1232.trigger, v1232, [type$$63, args$$7]);
      return;
    }
    var s$$2 = JAM.call(jQuery$$1.extend, jQuery$$1, [true, {}, jQuery$$1.ajaxSettings, origSettings]);
    var jsonp;
    var status$$1;
    var data$$42;
    var v3028 = origSettings;
    if (v3028) {
      v3028 = origSettings.context;
    }
    var v1234 = v3028;
    if (!v1234) {
      v1234 = s$$2;
    }
    var callbackContext = v1234;
    var type$$62 = s$$2.type.toUpperCase();
    var v4131 = s$$2.data;
    if (v4131) {
      v4131 = s$$2.processData;
    }
    var v3030 = v4131;
    if (v3030) {
      v3030 = typeof s$$2.data !== "string";
    }
    if (v3030) {
      var v1236 = s$$2;
      var v5540 = JAM.call(jQuery$$1.param, jQuery$$1, [s$$2.data, s$$2.traditional]);
      v1236.data = v5540;
    }
    if (s$$2.dataType === "jsonp") {
      if (type$$62 === "GET") {
        if (!jsre.test(s$$2.url)) {
          var v1238 = s$$2;
          var v4134 = v1238.url;
          var v5394;
          if (rquery.test(s$$2.url)) {
            v5394 = "&";
          } else {
            v5394 = "?";
          }
          var v5222 = v5394;
          var v5395 = s$$2.jsonp;
          if (!v5395) {
            v5395 = "callback";
          }
          v1238.url = v4134 + (v5222 + v5395 + "=?");
        }
      } else {
        var v3035 = !s$$2.data;
        if (!v3035) {
          v3035 = !jsre.test(s$$2.data);
        }
        if (v3035) {
          var v4139;
          if (s$$2.data) {
            v4139 = s$$2.data + "&";
          } else {
            v4139 = "";
          }
          var v3036 = v4139;
          var v4140 = s$$2.jsonp;
          if (!v4140) {
            v4140 = "callback";
          }
          s$$2.data = v3036 + v4140 + "=?";
        }
      }
      s$$2.dataType = "json";
    }
    var v3038 = s$$2.dataType === "json";
    if (v3038) {
      var v4882 = s$$2.data;
      if (v4882) {
        v4882 = jsre.test(s$$2.data);
      }
      var v4142 = v4882;
      if (!v4142) {
        v4142 = jsre.test(s$$2.url);
      }
      v3038 = v4142;
    }
    if (v3038) {
      var v1244 = s$$2.jsonpCallback;
      if (!v1244) {
        var v3039 = jsc;
        jsc = jsc + 1;
        v1244 = "jsonp" + v3039;
      }
      jsonp = v1244;
      if (s$$2.data) {
        var v1245 = s$$2;
        var v5541 = (s$$2.data + "").replace(jsre, "=" + jsonp + "$1");
        v1245.data = v5541;
      }
      var v1247 = s$$2;
      var v5542 = s$$2.url.replace(jsre, "=" + jsonp + "$1");
      v1247.url = v5542;
      s$$2.dataType = "script";
      introspect(JAM.policy.p3) {
        var v1248 = window$$1[jsonp]
      }
      if (!v1248) {
        v1248 = v302;
      }
      JAM.set(window$$1, jsonp, v1248, JAM.policy.p2);
    }
    var v3046 = s$$2.dataType === "script";
    if (v3046) {
      v3046 = s$$2.cache === null;
    }
    if (v3046) {
      s$$2.cache = false;
    }
    var v3047 = s$$2.cache === false;
    if (v3047) {
      v3047 = type$$62 === "GET";
    }
    if (v3047) {
      var ts = now();
      var ret$$23 = s$$2.url.replace(rts, "$1_=" + ts + "$2");
      var v1253 = s$$2;
      var v3049 = ret$$23;
      var v4149;
      if (ret$$23 === s$$2.url) {
        var v5396;
        if (rquery.test(s$$2.url)) {
          v5396 = "&";
        } else {
          v5396 = "?";
        }
        v4149 = v5396 + "_=" + ts;
      } else {
        v4149 = "";
      }
      v1253.url = v3049 + v4149;
    }
    var v3051 = s$$2.data;
    if (v3051) {
      v3051 = type$$62 === "GET";
    }
    if (v3051) {
      var v1255 = s$$2;
      var v4150 = v1255.url;
      var v5227;
      if (rquery.test(s$$2.url)) {
        v5227 = "&";
      } else {
        v5227 = "?";
      }
      v1255.url = v4150 + (v5227 + s$$2.data);
    }
    var v3052 = s$$2.global;
    if (v3052) {
      var v4152 = jQuery$$1.active;
      jQuery$$1.active = jQuery$$1.active + 1;
      v3052 = !v4152;
    }
    if (v3052) {
      var v1257 = jQuery$$1.event;
      JAM.call(v1257.trigger, v1257, ["ajaxStart"]);
    }
    var parts$$2 = rurl.exec(s$$2.url);
    var v1260 = parts$$2;
    if (v1260) {
      var v4153 = parts$$2[1];
      if (v4153) {
        v4153 = parts$$2[1] !== location.protocol;
      }
      var v3053 = v4153;
      if (!v3053) {
        v3053 = parts$$2[2] !== location.host;
      }
      v1260 = v3053;
    }
    var remote = v1260;
    var v4157 = s$$2.dataType === "script";
    if (v4157) {
      v4157 = type$$62 === "GET";
    }
    var v3054 = v4157;
    if (v3054) {
      v3054 = remote;
    }
    if (v3054) {
      var v1261 = document$$1.getElementsByTagName("head")[0];
      if (!v1261) {
        v1261 = document$$1.documentElement;
      }
      var head$$1 = v1261;
      var script$$2 = document$$1.createElement("script");
      introspect(JAM.policy.p1) {
        script$$2.src = s$$2.url;
      }
      if (s$$2.scriptCharset) {
        script$$2.charset = s$$2.scriptCharset;
      }
      if (!jsonp) {
        var done$$1 = false;
        JAM.set(script$$2, "onload", JAM.set(script$$2, "onreadystatechange", v303));
      }
      JAM.call(head$$1.insertBefore, head$$1, [script$$2, head$$1.firstChild]);
      return undefined$$1;
    }
    var requestDone = false;
    var xhr = s$$2.xhr();
    if (!xhr) {
      return;
    }
    if (s$$2.username) {
      xhr.open(type$$62, s$$2.url, s$$2.async, s$$2.username, s$$2.password);
    } else {
      xhr.open(type$$62, s$$2.url, s$$2.async);
    }
    try {
      var v3057 = s$$2.data;
      if (!v3057) {
        var v4158 = origSettings;
        if (v4158) {
          v4158 = origSettings.contentType;
        }
        v3057 = v4158;
      }
      if (v3057) {
        xhr.setRequestHeader("Content-Type", s$$2.contentType);
      }
      if (s$$2.ifModified) {
        var v3058 = jQuery$$1.lastModified;
        var v3059 = s$$2.url;
        introspect(JAM.policy.p3) {
          var v1277 = v3058[v3059]
        }
        if (v1277) {
          var v3060 = jQuery$$1.lastModified;
          var v3061 = s$$2.url;
          introspect(JAM.policy.p3) {
            var v1276 = v3060[v3061]
          }
          xhr.setRequestHeader("If-Modified-Since", v1276);
        }
        var v3062 = jQuery$$1.etag;
        var v3063 = s$$2.url;
        introspect(JAM.policy.p3) {
          var v1279 = v3062[v3063]
        }
        if (v1279) {
          var v3064 = jQuery$$1.etag;
          var v3065 = s$$2.url;
          introspect(JAM.policy.p3) {
            var v1278 = v3064[v3065]
          }
          xhr.setRequestHeader("If-None-Match", v1278);
        }
      }
      if (!remote) {
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      }
      var v3066;
      var v4892 = s$$2.dataType;
      if (v4892) {
        var v5229 = s$$2.accepts;
        var v5230 = s$$2.dataType;
        introspect(JAM.policy.p3) {
          v4892 = v5229[v5230];
        }
      }
      if (v4892) {
        var v4893 = s$$2.accepts;
        var v4894 = s$$2.dataType;
        introspect(JAM.policy.p3) {
          var v4160 = v4893[v4894]
        }
        v3066 = v4160 + ", */*";
      } else {
        v3066 = s$$2.accepts._default;
      }
      xhr.setRequestHeader("Accept", v3066);
    } catch (e$$25) {
    }
    var v3067 = s$$2.beforeSend;
    if (v3067) {
      var v4895 = s$$2.beforeSend;
      v3067 = JAM.call(v4895.call, v4895, [callbackContext, xhr, s$$2]) === false;
    }
    if (v3067) {
      var v3068 = s$$2.global;
      if (v3068) {
        v3068 = !(jQuery$$1.active = jQuery$$1.active - 1);
      }
      if (v3068) {
        var v1283 = jQuery$$1.event;
        JAM.call(v1283.trigger, v1283, ["ajaxStop"]);
      }
      xhr.abort();
      return false;
    }
    if (s$$2.global) {
      trigger$$1("ajaxSend", [xhr, s$$2]);
    }
    var onreadystatechange = JAM.set(xhr, "onreadystatechange", v304);
    try {
      var oldAbort = xhr.abort;
      xhr.abort = v305;
    } catch (e$$26) {
    }
    var v3069 = s$$2.async;
    if (v3069) {
      v3069 = s$$2.timeout > 0;
    }
    if (v3069) {
      JAM.call(setTimeout, null, [v306, s$$2.timeout]);
    }
    try {
      var v3070;
      var v5232 = type$$62 === "POST";
      if (!v5232) {
        v5232 = type$$62 === "PUT";
      }
      var v4896 = v5232;
      if (!v4896) {
        v4896 = type$$62 === "DELETE";
      }
      if (v4896) {
        v3070 = s$$2.data;
      } else {
        v3070 = null;
      }
      xhr.send(v3070);
    } catch (e$$27) {
      JAM.call(jQuery$$1.handleError, jQuery$$1, [s$$2, xhr, null, e$$27]);
      complete();
    }
    if (!s$$2.async) {
      onreadystatechange();
    }
    return xhr;
  }
  function v301() {
    try {
      return JAM.new(window$$1.ActiveXObject, ["Microsoft.XMLHTTP"]);
    } catch (e$$23) {
    }
    return;
  }
  function v300() {
    return new window$$1.XMLHttpRequest;
  }
  function v299(settings) {
    JAM.call(jQuery$$1.extend, jQuery$$1, [jQuery$$1.ajaxSettings, settings]);
    return;
  }
  function v298(url$$6, data$$41, callback$$36, type$$61) {
    if (JAM.call(jQuery$$1.isFunction, jQuery$$1, [data$$41])) {
      type$$61 = type$$61 || callback$$36;
      callback$$36 = data$$41;
      data$$41 = {};
    }
    return JAM.call(jQuery$$1.ajax, jQuery$$1, [{type:"POST", url:url$$6, data:data$$41, success:callback$$36, dataType:type$$61}]);
  }
  function v297(url$$5, data$$40, callback$$35) {
    return JAM.call(jQuery$$1.get, jQuery$$1, [url$$5, data$$40, callback$$35, "json"]);
  }
  function v296(url$$4, callback$$34) {
    return JAM.call(jQuery$$1.get, jQuery$$1, [url$$4, null, callback$$34, "script"]);
  }
  function v295(url$$3, data$$39, callback$$33, type$$60) {
    if (JAM.call(jQuery$$1.isFunction, jQuery$$1, [data$$39])) {
      type$$60 = type$$60 || callback$$33;
      callback$$33 = data$$39;
      data$$39 = null;
    }
    return JAM.call(jQuery$$1.ajax, jQuery$$1, [{type:"GET", url:url$$3, data:data$$39, success:callback$$33, dataType:type$$60}]);
  }
  function v294(i$$84, o) {
    function v293(f) {
      return JAM.call(this.bind, this, [o, f]);
    }
    JAM.set(jQuery$$1.fn, o, v293, JAM.policy.p2);
    return;
  }
  function v292() {
    function v291(i$$82, elem$$113) {
      function v290(val$$5, i$$83) {
        return{name:elem$$113.name, value:val$$5};
      }
      var val$$4 = jQuery$$1(this).val();
      var v1302;
      if (val$$4 == null) {
        v1302 = null;
      } else {
        var v3072;
        if (JAM.call(jQuery$$1.isArray, jQuery$$1, [val$$4])) {
          v3072 = JAM.call(jQuery$$1.map, jQuery$$1, [val$$4, v290]);
        } else {
          v3072 = {name:elem$$113.name, value:val$$4};
        }
        v1302 = v3072;
      }
      return v1302;
    }
    function v289() {
      var v3074 = this.name;
      if (v3074) {
        v3074 = !this.disabled;
      }
      var v1303 = v3074;
      if (v1303) {
        var v4170 = this.checked;
        if (!v4170) {
          v4170 = rselectTextarea.test(this.nodeName);
        }
        var v3075 = v4170;
        if (!v3075) {
          v3075 = rinput.test(this.type);
        }
        v1303 = v3075;
      }
      return v1303;
    }
    function v288() {
      var v1304;
      if (this.elements) {
        v1304 = JAM.call(jQuery$$1.makeArray, jQuery$$1, [this.elements]);
      } else {
        v1304 = this;
      }
      return v1304;
    }
    var v4173 = JAM.call(this.map, this, [v288]);
    var v3078 = JAM.call(v4173.filter, v4173, [v289]);
    return JAM.call(v3078.map, v3078, [v291]).get();
  }
  function v287() {
    return JAM.call(jQuery$$1.param, jQuery$$1, [this.serializeArray()]);
  }
  function v286(url$$2, params, callback$$32) {
    function v285(res, status) {
      var v3079 = status === "success";
      if (!v3079) {
        v3079 = status === "notmodified";
      }
      if (v3079) {
        var v3080;
        if (selector$$20) {
          var v4899 = jQuery$$1("<div />");
          var v4175 = JAM.call(v4899.append, v4899, [res.responseText.replace(rscript, "")]);
          v3080 = JAM.call(v4175.find, v4175, [selector$$20]);
        } else {
          v3080 = res.responseText;
        }
        JAM.call(self$$11.html, self$$11, [v3080]);
      }
      if (callback$$32) {
        JAM.call(self$$11.each, self$$11, [callback$$32, [res.responseText, status, res]]);
      }
      return;
    }
    if (typeof url$$2 !== "string") {
      return JAM.call(_load.call, _load, [this, url$$2]);
    } else {
      if (!this.length) {
        return this;
      }
    }
    var off = url$$2.indexOf(" ");
    if (off >= 0) {
      var selector$$20 = JAM.call(url$$2.slice, url$$2, [off, url$$2.length]);
      url$$2 = JAM.call(url$$2.slice, url$$2, [0, off]);
    }
    var type$$59 = "GET";
    if (params) {
      if (JAM.call(jQuery$$1.isFunction, jQuery$$1, [params])) {
        callback$$32 = params;
        params = null;
      } else {
        if (typeof params === "object") {
          params = JAM.call(jQuery$$1.param, jQuery$$1, [params, jQuery$$1.ajaxSettings.traditional]);
          type$$59 = "POST";
        }
      }
    }
    var self$$11 = this;
    JAM.call(jQuery$$1.ajax, jQuery$$1, [{url:url$$2, type:type$$59, dataType:"html", data:params, complete:v285}]);
    return this;
  }
  function v284(elem$$112) {
    var v3086 = jQuery$$1.expr.filters;
    return!JAM.call(v3086.hidden, v3086, [elem$$112]);
  }
  function v283(elem$$111) {
    var width$$9 = elem$$111.offsetWidth;
    var height$$8 = elem$$111.offsetHeight;
    var skip = elem$$111.nodeName.toLowerCase() === "tr";
    var v1320;
    var v4901 = width$$9 === 0;
    if (v4901) {
      v4901 = height$$8 === 0;
    }
    var v4177 = v4901;
    if (v4177) {
      v4177 = !skip;
    }
    if (v4177) {
      v1320 = true;
    } else {
      var v3088;
      var v5235 = width$$9 > 0;
      if (v5235) {
        v5235 = height$$8 > 0;
      }
      var v4902 = v5235;
      if (v4902) {
        v4902 = !skip;
      }
      if (v4902) {
        v3088 = false;
      } else {
        v3088 = JAM.call(jQuery$$1.curCSS, jQuery$$1, [elem$$111, "display"]) === "none";
      }
      v1320 = v3088;
    }
    return v1320;
  }
  function v282(elem$$110, options$$3, callback$$31) {
    var old$$4 = {};
    var name$$54;
    for (name$$54 in options$$3) {
      JAM.set(old$$4, name$$54, JAM.get(elem$$110.style, name$$54, JAM.policy.p4), JAM.policy.p4);
      JAM.set(elem$$110.style, name$$54, JAM.get(options$$3, name$$54, JAM.policy.p4), JAM.policy.p4);
    }
    JAM.call(callback$$31.call, callback$$31, [elem$$110]);
    for (name$$54 in options$$3) {
      JAM.set(elem$$110.style, name$$54, JAM.get(old$$4, name$$54, JAM.policy.p4), JAM.policy.p4);
    }
    return;
  }
  function v281(elem$$109, name$$53, force$$1) {
    var ret$$22;
    var style$$1 = elem$$109.style;
    var filter$$4;
    var v4180 = !jQuery$$1.support.opacity;
    if (v4180) {
      v4180 = name$$53 === "opacity";
    }
    var v3090 = v4180;
    if (v3090) {
      v3090 = elem$$109.currentStyle;
    }
    if (v3090) {
      var v1324;
      var v4904 = elem$$109.currentStyle.filter;
      if (!v4904) {
        v4904 = "";
      }
      if (ropacity.test(v4904)) {
        v1324 = parseFloat(RegExp.$1) / 100 + "";
      } else {
        v1324 = "";
      }
      ret$$22 = v1324;
      var v1325;
      if (ret$$22 === "") {
        v1325 = "1";
      } else {
        v1325 = ret$$22;
      }
      return v1325;
    }
    if (rfloat.test(name$$53)) {
      name$$53 = styleFloat;
    }
    var v4183 = !force$$1;
    if (v4183) {
      v4183 = style$$1;
    }
    var v3094 = v4183;
    if (v3094) {
      introspect(JAM.policy.p3) {
        v3094 = style$$1[name$$53];
      }
    }
    if (v3094) {
      introspect(JAM.policy.p3) {
        ret$$22 = style$$1[name$$53];
      }
    } else {
      if (getComputedStyle) {
        if (rfloat.test(name$$53)) {
          name$$53 = "float";
        }
        name$$53 = name$$53.replace(rupper, "-$1").toLowerCase();
        var defaultView = elem$$109.ownerDocument.defaultView;
        if (!defaultView) {
          return null;
        }
        var computedStyle = defaultView.getComputedStyle(elem$$109, null);
        if (computedStyle) {
          ret$$22 = computedStyle.getPropertyValue(name$$53);
        }
        var v3095 = name$$53 === "opacity";
        if (v3095) {
          v3095 = ret$$22 === "";
        }
        if (v3095) {
          ret$$22 = "1";
        }
      } else {
        if (elem$$109.currentStyle) {
          var camelCase = name$$53.replace(rdashAlpha, fcamelCase);
          var v3096 = elem$$109.currentStyle;
          introspect(JAM.policy.p3) {
            var v1333 = v3096[name$$53]
          }
          if (!v1333) {
            var v3097 = elem$$109.currentStyle;
            introspect(JAM.policy.p3) {
              v1333 = v3097[camelCase];
            }
          }
          ret$$22 = v1333;
          var v3099 = !rnumpx.test(ret$$22);
          if (v3099) {
            v3099 = rnum.test(ret$$22);
          }
          if (v3099) {
            var left$$3 = style$$1.left;
            var rsLeft = elem$$109.runtimeStyle.left;
            elem$$109.runtimeStyle.left = elem$$109.currentStyle.left;
            var v1336;
            if (camelCase === "fontSize") {
              v1336 = "1em";
            } else {
              v1336 = ret$$22 || 0;
            }
            style$$1.left = v1336;
            ret$$22 = style$$1.pixelLeft + "px";
            style$$1.left = left$$3;
            elem$$109.runtimeStyle.left = rsLeft;
          }
        }
      }
    }
    return ret$$22;
  }
  function v280(elem$$108, name$$52, force, extra$$2) {
    function v279() {
      function v278() {
        if (!extra$$2) {
          var v3102 = val$$3;
          var v4185 = parseFloat(JAM.call(jQuery$$1.curCSS, jQuery$$1, [elem$$108, "padding" + this, true]));
          if (!v4185) {
            v4185 = 0;
          }
          val$$3 = v3102 - v4185;
        }
        if (extra$$2 === "margin") {
          var v3104 = val$$3;
          var v4186 = parseFloat(JAM.call(jQuery$$1.curCSS, jQuery$$1, [elem$$108, "margin" + this, true]));
          if (!v4186) {
            v4186 = 0;
          }
          val$$3 = v3104 + v4186;
        } else {
          var v3106 = val$$3;
          var v4187 = parseFloat(JAM.call(jQuery$$1.curCSS, jQuery$$1, [elem$$108, "border" + this + "Width", true]));
          if (!v4187) {
            v4187 = 0;
          }
          val$$3 = v3106 - v4187;
        }
        return;
      }
      var v1344;
      if (name$$52 === "width") {
        v1344 = elem$$108.offsetWidth;
      } else {
        v1344 = elem$$108.offsetHeight;
      }
      val$$3 = v1344;
      if (extra$$2 === "border") {
        return;
      }
      JAM.call(jQuery$$1.each, jQuery$$1, [which, v278]);
      return;
    }
    var v3109 = name$$52 === "width";
    if (!v3109) {
      v3109 = name$$52 === "height";
    }
    if (v3109) {
      var getWH = v279;
      var val$$3;
      var props$$1 = cssShow;
      var v1346;
      if (name$$52 === "width") {
        v1346 = cssWidth;
      } else {
        v1346 = cssHeight;
      }
      var which = v1346;
      if (elem$$108.offsetWidth !== 0) {
        getWH();
      } else {
        JAM.call(jQuery$$1.swap, jQuery$$1, [elem$$108, props$$1, getWH]);
      }
      return JAM.call(Math.max, Math, [0, Math.round(val$$3)]);
    }
    return JAM.call(jQuery$$1.curCSS, jQuery$$1, [elem$$108, name$$52, force]);
  }
  function v277(elem$$107, name$$51, value$$43) {
    var v4189 = !elem$$107;
    if (!v4189) {
      v4189 = elem$$107.nodeType === 3;
    }
    var v3112 = v4189;
    if (!v3112) {
      v3112 = elem$$107.nodeType === 8;
    }
    if (v3112) {
      return undefined$$1;
    }
    var v4192 = name$$51 === "width";
    if (!v4192) {
      v4192 = name$$51 === "height";
    }
    var v3113 = v4192;
    if (v3113) {
      v3113 = parseFloat(value$$43) < 0;
    }
    if (v3113) {
      value$$43 = undefined$$1;
    }
    var v1352 = elem$$107.style;
    if (!v1352) {
      v1352 = elem$$107;
    }
    var style = v1352;
    var set$$8 = value$$43 !== undefined$$1;
    var v3115 = !jQuery$$1.support.opacity;
    if (v3115) {
      v3115 = name$$51 === "opacity";
    }
    if (v3115) {
      if (set$$8) {
        style.zoom = 1;
        var v1353;
        if (parseInt(value$$43, 10) + "" === "NaN") {
          v1353 = "";
        } else {
          v1353 = "alpha(opacity=" + value$$43 * 100 + ")";
        }
        var opacity = v1353;
        var v3118 = style.filter;
        if (!v3118) {
          v3118 = JAM.call(jQuery$$1.curCSS, jQuery$$1, [elem$$107, "filter"]);
        }
        var v1354 = v3118;
        if (!v1354) {
          v1354 = "";
        }
        var filter$$3 = v1354;
        var v1355;
        if (ralpha.test(filter$$3)) {
          v1355 = filter$$3.replace(ralpha, opacity);
        } else {
          v1355 = opacity;
        }
        style.filter = v1355;
      }
      var v1356;
      var v4198 = style.filter;
      if (v4198) {
        v4198 = style.filter.indexOf("opacity=") >= 0;
      }
      if (v4198) {
        v1356 = parseFloat(ropacity.exec(style.filter)[1]) / 100 + "";
      } else {
        v1356 = "";
      }
      return v1356;
    }
    if (rfloat.test(name$$51)) {
      name$$51 = styleFloat;
    }
    name$$51 = name$$51.replace(rdashAlpha, fcamelCase);
    if (set$$8) {
      JAM.set(style, name$$51, value$$43, JAM.policy.p2);
    }
    introspect(JAM.policy.p3) {
      return style[name$$51];
    }
  }
  function v276(name$$49, value$$41) {
    function v275(elem$$106, name$$50, value$$42) {
      if (value$$42 === undefined$$1) {
        return JAM.call(jQuery$$1.curCSS, jQuery$$1, [elem$$106, name$$50]);
      }
      var v3123 = typeof value$$42 === "number";
      if (v3123) {
        v3123 = !rexclude.test(name$$50);
      }
      if (v3123) {
        value$$42 = value$$42 + "px";
      }
      JAM.call(jQuery$$1.style, jQuery$$1, [elem$$106, name$$50, value$$42]);
      return;
    }
    return access(this, name$$49, value$$41, true, v275);
  }
  function v274(elems$$9) {
    var data$$38;
    var id$$5;
    var cache$$2 = jQuery$$1.cache;
    var special$$4 = jQuery$$1.event.special;
    var deleteExpando = jQuery$$1.support.deleteExpando;
    var i$$81 = 0;
    var elem$$105;
    introspect(JAM.policy.p3) {
      var v3124 = elem$$105 = elems$$9[i$$81]
    }
    var v1372 = v3124 != null;
    for (;v1372;) {
      var v1363 = jQuery$$1.expando;
      introspect(JAM.policy.p3) {
        id$$5 = elem$$105[v1363];
      }
      if (id$$5) {
        introspect(JAM.policy.p3) {
          data$$38 = cache$$2[id$$5];
        }
        if (data$$38.events) {
          var type$$58;
          for (type$$58 in data$$38.events) {
            introspect(JAM.policy.p3) {
              var v1366 = special$$4[type$$58]
            }
            if (v1366) {
              var v1364 = jQuery$$1.event;
              JAM.call(v1364.remove, v1364, [elem$$105, type$$58]);
            } else {
              JAM.call(removeEvent, null, [elem$$105, type$$58, data$$38.handle]);
            }
          }
        }
        if (deleteExpando) {
          delete elem$$105[jQuery$$1.expando];
        } else {
          if (elem$$105.removeAttribute) {
            elem$$105.removeAttribute(jQuery$$1.expando);
          }
        }
        delete cache$$2[id$$5];
      }
      i$$81++;
      introspect(JAM.policy.p3) {
        var v3125 = elem$$105 = elems$$9[i$$81]
      }
      v1372 = v3125 != null;
    }
    return;
  }
  function v273(elems$$8, context$$15, fragment$$3, scripts$$2) {
    context$$15 = context$$15 || document$$1;
    if (typeof context$$15.createElement === "undefined") {
      var v3127 = context$$15.ownerDocument;
      if (!v3127) {
        var v4203 = context$$15[0];
        if (v4203) {
          v4203 = context$$15[0].ownerDocument;
        }
        v3127 = v4203;
      }
      var v1373 = v3127;
      if (!v1373) {
        v1373 = document$$1;
      }
      context$$15 = v1373;
    }
    var ret$$21 = [];
    var i$$80 = 0;
    var elem$$104;
    introspect(JAM.policy.p3) {
      var v3129 = elem$$104 = elems$$8[i$$80]
    }
    var v1395 = v3129 != null;
    for (;v1395;) {
      if (typeof elem$$104 === "number") {
        elem$$104 = elem$$104 + "";
      }
      if (!elem$$104) {
        i$$80++;
        introspect(JAM.policy.p3) {
          var v3131 = elem$$104 = elems$$8[i$$80]
        }
        v1395 = v3131 != null;
        continue;
      }
      var v3132 = typeof elem$$104 === "string";
      if (v3132) {
        v3132 = !rhtml.test(elem$$104);
      }
      if (v3132) {
        elem$$104 = context$$15.createTextNode(elem$$104);
      } else {
        if (typeof elem$$104 === "string") {
          elem$$104 = elem$$104.replace(rxhtmlTag, fcloseTag);
          var v4207 = rtagName.exec(elem$$104);
          if (!v4207) {
            v4207 = ["", ""];
          }
          var tag$$1 = v4207[1].toLowerCase();
          introspect(JAM.policy.p3) {
            var v1378 = wrapMap[tag$$1]
          }
          if (!v1378) {
            v1378 = wrapMap._default;
          }
          var wrap$$1 = v1378;
          var depth$$1 = wrap$$1[0];
          var div$$6 = context$$15.createElement("div");
          JAM.set(div$$6, "innerHTML", wrap$$1[1] + elem$$104 + wrap$$1[2]);
          var v1381 = depth$$1;
          depth$$1 = depth$$1 - 1;
          for (;v1381;) {
            div$$6 = div$$6.lastChild;
            v1381 = depth$$1;
            depth$$1 = depth$$1 - 1;
          }
          if (!jQuery$$1.support.tbody) {
            var hasBody = rtbody.test(elem$$104);
            var v1382;
            var v4209 = tag$$1 === "table";
            if (v4209) {
              v4209 = !hasBody;
            }
            if (v4209) {
              var v3138 = div$$6.firstChild;
              if (v3138) {
                v3138 = div$$6.firstChild.childNodes;
              }
              v1382 = v3138;
            } else {
              var v3139;
              var v4921 = wrap$$1[1] === "<table>";
              if (v4921) {
                v4921 = !hasBody;
              }
              if (v4921) {
                v3139 = div$$6.childNodes;
              } else {
                v3139 = [];
              }
              v1382 = v3139;
            }
            var tbody = v1382;
            var j$$4 = tbody.length - 1;
            var v1387 = j$$4 >= 0;
            for (;v1387;) {
              introspect(JAM.policy.p3) {
                var v4212 = tbody[j$$4]
              }
              var v3141 = JAM.call(jQuery$$1.nodeName, jQuery$$1, [v4212, "tbody"]);
              if (v3141) {
                introspect(JAM.policy.p3) {
                  var v5245 = tbody[j$$4]
                }
                v3141 = !v5245.childNodes.length;
              }
              if (v3141) {
                introspect(JAM.policy.p3) {
                  var v3142 = tbody[j$$4]
                }
                var v1384 = v3142.parentNode;
                introspect(JAM.policy.p3) {
                  var v1385 = tbody[j$$4]
                }
                v1384.removeChild(v1385);
              }
              --j$$4;
              v1387 = j$$4 >= 0;
            }
          }
          var v3143 = !jQuery$$1.support.leadingWhitespace;
          if (v3143) {
            v3143 = rleadingWhitespace.test(elem$$104);
          }
          if (v3143) {
            JAM.call(div$$6.insertBefore, div$$6, [context$$15.createTextNode(rleadingWhitespace.exec(elem$$104)[0]), div$$6.firstChild]);
          }
          elem$$104 = div$$6.childNodes;
        }
      }
      if (elem$$104.nodeType) {
        JAM.call(ret$$21.push, ret$$21, [elem$$104]);
      } else {
        ret$$21 = JAM.call(jQuery$$1.merge, jQuery$$1, [ret$$21, elem$$104]);
      }
      i$$80++;
      introspect(JAM.policy.p3) {
        var v3145 = elem$$104 = elems$$8[i$$80]
      }
      v1395 = v3145 != null;
    }
    if (fragment$$3) {
      i$$80 = 0;
      introspect(JAM.policy.p3) {
        var v1402 = ret$$21[i$$80]
      }
      for (;v1402;) {
        var v4216 = scripts$$2;
        if (v4216) {
          introspect(JAM.policy.p3) {
            var v4924 = ret$$21[i$$80]
          }
          v4216 = JAM.call(jQuery$$1.nodeName, jQuery$$1, [v4924, "script"]);
        }
        var v3146 = v4216;
        if (v3146) {
          introspect(JAM.policy.p3) {
            var v5246 = ret$$21[i$$80]
          }
          var v4217 = !v5246.type;
          if (!v4217) {
            introspect(JAM.policy.p3) {
              var v5401 = ret$$21[i$$80]
            }
            v4217 = v5401.type.toLowerCase() === "text/javascript";
          }
          v3146 = v4217;
        }
        if (v3146) {
          var v3147;
          introspect(JAM.policy.p3) {
            var v4928 = ret$$21[i$$80]
          }
          if (v4928.parentNode) {
            introspect(JAM.policy.p3) {
              var v4929 = ret$$21[i$$80]
            }
            var v4218 = v4929.parentNode;
            introspect(JAM.policy.p3) {
              var v4219 = ret$$21[i$$80]
            }
            v3147 = v4218.removeChild(v4219);
          } else {
            introspect(JAM.policy.p3) {
              v3147 = ret$$21[i$$80];
            }
          }
          JAM.call(scripts$$2.push, scripts$$2, [v3147]);
        } else {
          introspect(JAM.policy.p3) {
            var v4221 = ret$$21[i$$80]
          }
          if (v4221.nodeType === 1) {
            var v1397 = ret$$21.splice;
            var v3149 = [i$$80 + 1, 0];
            introspect(JAM.policy.p3) {
              var v4930 = ret$$21[i$$80]
            }
            JAM.call(v1397.apply, v1397, [ret$$21, v3149.concat(JAM.call(jQuery$$1.makeArray, jQuery$$1, [v4930.getElementsByTagName("script")]))]);
          }
          introspect(JAM.policy.p3) {
            var v1400 = ret$$21[i$$80]
          }
          JAM.call(fragment$$3.appendChild, fragment$$3, [v1400]);
        }
        i$$80++;
        introspect(JAM.policy.p3) {
          v1402 = ret$$21[i$$80];
        }
      }
    }
    return ret$$21;
  }
  function v272(name$$48, original) {
    function v271(selector$$19) {
      var ret$$20 = [];
      var insert = jQuery$$1(selector$$19);
      var v1403 = this.length === 1;
      if (v1403) {
        v1403 = this[0].parentNode;
      }
      var parent$$8 = v1403;
      var v4931 = parent$$8;
      if (v4931) {
        v4931 = parent$$8.nodeType === 11;
      }
      var v4224 = v4931;
      if (v4224) {
        v4224 = parent$$8.childNodes.length === 1;
      }
      var v3153 = v4224;
      if (v3153) {
        v3153 = insert.length === 1;
      }
      if (v3153) {
        JAM.call(JAM.get(insert, original, JAM.policy.p3), insert, [this[0]]);
        return this;
      } else {
        var i$$79 = 0;
        var l$$22 = insert.length;
        var v1408 = i$$79 < l$$22;
        for (;v1408;) {
          var v3154;
          if (i$$79 > 0) {
            v3154 = JAM.call(this.clone, this, [true]);
          } else {
            v3154 = this;
          }
          var elems$$7 = v3154.get();
          var v3155 = jQuery$$1.fn;
          introspect(JAM.policy.p3) {
            var v1406 = v3155[original]
          }
          introspect(JAM.policy.p3) {
            var v3156 = insert[i$$79]
          }
          JAM.call(v1406.apply, v1406, [jQuery$$1(v3156), elems$$7]);
          ret$$20 = ret$$20.concat(elems$$7);
          i$$79++;
          v1408 = i$$79 < l$$22;
        }
        return JAM.call(this.pushStack, this, [ret$$20, name$$48, insert.selector]);
      }
      return;
    }
    JAM.set(jQuery$$1.fn, name$$48, v271, JAM.policy.p2);
    return;
  }
  function v270(args$$6, table, callback$$30) {
    function v269(i$$78) {
      var self$$10 = jQuery$$1(this);
      var v1412 = args$$6;
      var v4227;
      if (table) {
        v4227 = self$$10.html();
      } else {
        v4227 = undefined$$1;
      }
      var v5543 = JAM.call(value$$40.call, value$$40, [this, i$$78, v4227]);
      v1412[0] = v5543;
      JAM.call(self$$10.domManip, self$$10, [args$$6, table, callback$$30]);
      return;
    }
    function v268() {
      var v1413 = jQuery$$1(this);
      JAM.call(v1413.domManip, v1413, [args$$6, table, callback$$30, true]);
      return;
    }
    function root$$3(elem$$103, cur$$7) {
      var v1414;
      if (JAM.call(jQuery$$1.nodeName, jQuery$$1, [elem$$103, "table"])) {
        var v3158 = elem$$103.getElementsByTagName("tbody")[0];
        if (!v3158) {
          v3158 = JAM.call(elem$$103.appendChild, elem$$103, [elem$$103.ownerDocument.createElement("tbody")]);
        }
        v1414 = v3158;
      } else {
        v1414 = elem$$103;
      }
      return v1414;
    }
    var results$$7;
    var first$$3;
    var value$$40 = args$$6[0];
    var scripts$$1 = [];
    var fragment$$2;
    var parent$$7;
    var v4934 = !jQuery$$1.support.checkClone;
    if (v4934) {
      v4934 = arguments.length === 3;
    }
    var v4231 = v4934;
    if (v4231) {
      v4231 = typeof value$$40 === "string";
    }
    var v3160 = v4231;
    if (v3160) {
      v3160 = rchecked.test(value$$40);
    }
    if (v3160) {
      return JAM.call(this.each, this, [v268]);
    }
    if (JAM.call(jQuery$$1.isFunction, jQuery$$1, [value$$40])) {
      return JAM.call(this.each, this, [v269]);
    }
    if (this[0]) {
      var v1417 = value$$40;
      if (v1417) {
        v1417 = value$$40.parentNode;
      }
      parent$$7 = v1417;
      var v4936 = jQuery$$1.support.parentNode;
      if (v4936) {
        v4936 = parent$$7;
      }
      var v4232 = v4936;
      if (v4232) {
        v4232 = parent$$7.nodeType === 11;
      }
      var v3161 = v4232;
      if (v3161) {
        v3161 = parent$$7.childNodes.length === this.length;
      }
      if (v3161) {
        results$$7 = {fragment:parent$$7};
      } else {
        results$$7 = buildFragment(args$$6, this, scripts$$1);
      }
      fragment$$2 = results$$7.fragment;
      if (fragment$$2.childNodes.length === 1) {
        first$$3 = fragment$$2 = fragment$$2.firstChild;
      } else {
        first$$3 = fragment$$2.firstChild;
      }
      if (first$$3) {
        var v1420 = table;
        if (v1420) {
          v1420 = JAM.call(jQuery$$1.nodeName, jQuery$$1, [first$$3, "tr"]);
        }
        table = v1420;
        var i$$77 = 0;
        var l$$21 = this.length;
        var v1423 = i$$77 < l$$21;
        for (;v1423;) {
          var v3163;
          if (table) {
            introspect(JAM.policy.p3) {
              var v4236 = this[i$$77]
            }
            v3163 = root$$3(v4236, first$$3);
          } else {
            introspect(JAM.policy.p3) {
              v3163 = this[i$$77];
            }
          }
          var v1421 = v3163;
          var v3164;
          var v5253 = i$$77 > 0;
          if (!v5253) {
            v5253 = results$$7.cacheable;
          }
          var v4939 = v5253;
          if (!v4939) {
            v4939 = this.length > 1;
          }
          if (v4939) {
            v3164 = fragment$$2.cloneNode(true);
          } else {
            v3164 = fragment$$2;
          }
          JAM.call(callback$$30.call, callback$$30, [v1421, v3164]);
          i$$77++;
          v1423 = i$$77 < l$$21;
        }
      }
      if (scripts$$1.length) {
        JAM.call(jQuery$$1.each, jQuery$$1, [scripts$$1, evalScript]);
      }
    }
    return this;
  }
  function v267(selector$$18) {
    return JAM.call(this.remove, this, [selector$$18, true]);
  }
  function v266(value$$39) {
    function v265() {
      var next = this.nextSibling;
      var parent$$6 = this.parentNode;
      jQuery$$1(this).remove();
      if (next) {
        var v1427 = jQuery$$1(next);
        JAM.call(v1427.before, v1427, [value$$39]);
      } else {
        var v1428 = jQuery$$1(parent$$6);
        JAM.call(v1428.append, v1428, [value$$39]);
      }
      return;
    }
    function v264(i$$76) {
      var self$$9 = jQuery$$1(this);
      var old$$3 = self$$9.html();
      JAM.call(self$$9.replaceWith, self$$9, [JAM.call(value$$39.call, value$$39, [this, i$$76, old$$3])]);
      return;
    }
    var v3165 = this[0];
    if (v3165) {
      v3165 = this[0].parentNode;
    }
    if (v3165) {
      if (JAM.call(jQuery$$1.isFunction, jQuery$$1, [value$$39])) {
        return JAM.call(this.each, this, [v264]);
      }
      if (typeof value$$39 !== "string") {
        value$$39 = jQuery$$1(value$$39).detach();
      }
      return JAM.call(this.each, this, [v265]);
    } else {
      var v4239;
      if (JAM.call(jQuery$$1.isFunction, jQuery$$1, [value$$39])) {
        v4239 = value$$39();
      } else {
        v4239 = value$$39;
      }
      return JAM.call(this.pushStack, this, [jQuery$$1(v4239), "replaceWith", value$$39]);
    }
    return;
  }
  function v263(value$$38) {
    function v262(i$$75) {
      function v261() {
        return JAM.call(value$$38.call, value$$38, [this, i$$75, old$$2]);
      }
      var self$$8 = jQuery$$1(this);
      var old$$2 = self$$8.html();
      var v1435 = self$$8.empty();
      JAM.call(v1435.append, v1435, [v261]);
      return;
    }
    if (value$$38 === undefined$$1) {
      var v1436;
      var v4240 = this[0];
      if (v4240) {
        v4240 = this[0].nodeType === 1;
      }
      if (v4240) {
        v1436 = this[0].innerHTML.replace(rinlinejQuery, "");
      } else {
        v1436 = null;
      }
      return v1436;
    } else {
      var v4942 = typeof value$$38 === "string";
      if (v4942) {
        v4942 = !rnocache.test(value$$38);
      }
      var v4242 = v4942;
      if (v4242) {
        var v4943 = jQuery$$1.support.leadingWhitespace;
        if (!v4943) {
          v4943 = !rleadingWhitespace.test(value$$38);
        }
        v4242 = v4943;
      }
      var v3170 = v4242;
      if (v3170) {
        var v4944 = wrapMap;
        var v5456 = rtagName.exec(value$$38);
        if (!v5456) {
          v5456 = ["", ""];
        }
        var v4945 = v5456[1].toLowerCase();
        introspect(JAM.policy.p3) {
          var v4243 = v4944[v4945]
        }
        v3170 = !v4243;
      }
      if (v3170) {
        value$$38 = value$$38.replace(rxhtmlTag, fcloseTag);
        try {
          var i$$74 = 0;
          var l$$20 = this.length;
          var v1440 = i$$74 < l$$20;
          for (;v1440;) {
            introspect(JAM.policy.p3) {
              var v4244 = this[i$$74]
            }
            if (v4244.nodeType === 1) {
              introspect(JAM.policy.p3) {
                var v3172 = this[i$$74]
              }
              JAM.call(jQuery$$1.cleanData, jQuery$$1, [v3172.getElementsByTagName("*")]);
              introspect(JAM.policy.p3) {
                var v1438 = this[i$$74]
              }
              JAM.set(v1438, "innerHTML", value$$38);
            }
            i$$74++;
            v1440 = i$$74 < l$$20;
          }
        } catch (e$$22) {
          var v1441 = this.empty();
          JAM.call(v1441.append, v1441, [value$$38]);
        }
      } else {
        if (JAM.call(jQuery$$1.isFunction, jQuery$$1, [value$$38])) {
          JAM.call(this.each, this, [v262]);
        } else {
          var v1442 = this.empty();
          JAM.call(v1442.append, v1442, [value$$38]);
        }
      }
    }
    return this;
  }
  function v260(events$$5) {
    function v259() {
      var v3173 = !jQuery$$1.support.noCloneEvent;
      if (v3173) {
        v3173 = !JAM.call(jQuery$$1.isXMLDoc, jQuery$$1, [this]);
      }
      if (v3173) {
        var html$$3 = this.outerHTML;
        var ownerDocument = this.ownerDocument;
        if (!html$$3) {
          var div$$5 = ownerDocument.createElement("div");
          JAM.call(div$$5.appendChild, div$$5, [this.cloneNode(true)]);
          html$$3 = div$$5.innerHTML;
        }
        return JAM.call(jQuery$$1.clean, jQuery$$1, [[html$$3.replace(rinlinejQuery, "").replace(/=([^="'>\s]+\/)>/g, '="$1">').replace(rleadingWhitespace, "")], ownerDocument])[0];
      } else {
        return this.cloneNode(true);
      }
      return;
    }
    var ret$$19 = JAM.call(this.map, this, [v259]);
    if (events$$5 === true) {
      cloneCopyEvent(this, ret$$19);
      cloneCopyEvent(JAM.call(this.find, this, ["*"]), JAM.call(ret$$19.find, ret$$19, ["*"]));
    }
    return ret$$19;
  }
  function v258() {
    var i$$73 = 0;
    var elem$$102;
    introspect(JAM.policy.p3) {
      var v3175 = elem$$102 = this[i$$73]
    }
    var v1457 = v3175 != null;
    for (;v1457;) {
      if (elem$$102.nodeType === 1) {
        JAM.call(jQuery$$1.cleanData, jQuery$$1, [elem$$102.getElementsByTagName("*")]);
      }
      var v1456 = elem$$102.firstChild;
      for (;v1456;) {
        elem$$102.removeChild(elem$$102.firstChild);
        v1456 = elem$$102.firstChild;
      }
      i$$73++;
      introspect(JAM.policy.p3) {
        var v3177 = elem$$102 = this[i$$73]
      }
      v1457 = v3177 != null;
    }
    return this;
  }
  function v257(selector$$17, keepData) {
    var i$$72 = 0;
    var elem$$101;
    introspect(JAM.policy.p3) {
      var v3178 = elem$$101 = this[i$$72]
    }
    var v1464 = v3178 != null;
    for (;v1464;) {
      var v3179 = !selector$$17;
      if (!v3179) {
        v3179 = JAM.call(jQuery$$1.filter, jQuery$$1, [selector$$17, [elem$$101]]).length;
      }
      if (v3179) {
        var v3180 = !keepData;
        if (v3180) {
          v3180 = elem$$101.nodeType === 1;
        }
        if (v3180) {
          JAM.call(jQuery$$1.cleanData, jQuery$$1, [elem$$101.getElementsByTagName("*")]);
          JAM.call(jQuery$$1.cleanData, jQuery$$1, [[elem$$101]]);
        }
        if (elem$$101.parentNode) {
          elem$$101.parentNode.removeChild(elem$$101);
        }
      }
      i$$72++;
      introspect(JAM.policy.p3) {
        var v3181 = elem$$101 = this[i$$72]
      }
      v1464 = v3181 != null;
    }
    return this;
  }
  function v256() {
    function v255(elem$$100) {
      var v1465 = this.parentNode;
      JAM.call(v1465.insertBefore, v1465, [elem$$100, this.nextSibling]);
      return;
    }
    var v3182 = this[0];
    if (v3182) {
      v3182 = this[0].parentNode;
    }
    if (v3182) {
      return JAM.call(this.domManip, this, [arguments, false, v255]);
    } else {
      if (arguments.length) {
        var set$$7 = JAM.call(this.pushStack, this, [this, "after", arguments]);
        var v1467 = set$$7.push;
        JAM.call(v1467.apply, v1467, [set$$7, jQuery$$1(arguments[0]).toArray()]);
        return set$$7;
      }
    }
    return;
  }
  function v254() {
    function v253(elem$$99) {
      var v1471 = this.parentNode;
      JAM.call(v1471.insertBefore, v1471, [elem$$99, this]);
      return;
    }
    var v3184 = this[0];
    if (v3184) {
      v3184 = this[0].parentNode;
    }
    if (v3184) {
      return JAM.call(this.domManip, this, [arguments, false, v253]);
    } else {
      if (arguments.length) {
        var set$$6 = jQuery$$1(arguments[0]);
        var v1473 = set$$6.push;
        JAM.call(v1473.apply, v1473, [set$$6, this.toArray()]);
        return JAM.call(this.pushStack, this, [set$$6, "before", arguments]);
      }
    }
    return;
  }
  function v252() {
    function v251(elem$$98) {
      if (this.nodeType === 1) {
        JAM.call(this.insertBefore, this, [elem$$98, this.firstChild]);
      }
      return;
    }
    return JAM.call(this.domManip, this, [arguments, true, v251]);
  }
  function v250() {
    function v249(elem$$97) {
      if (this.nodeType === 1) {
        JAM.call(this.appendChild, this, [elem$$97]);
      }
      return;
    }
    return JAM.call(this.domManip, this, [arguments, true, v249]);
  }
  function v248() {
    function v247() {
      if (!JAM.call(jQuery$$1.nodeName, jQuery$$1, [this, "body"])) {
        var v1480 = jQuery$$1(this);
        JAM.call(v1480.replaceWith, v1480, [this.childNodes]);
      }
      return;
    }
    var v3188 = this.parent();
    return JAM.call(v3188.each, v3188, [v247]).end();
  }
  function v246(html$$2) {
    function v245() {
      var v1484 = jQuery$$1(this);
      JAM.call(v1484.wrapAll, v1484, [html$$2]);
      return;
    }
    return JAM.call(this.each, this, [v245]);
  }
  function v244(html$$1) {
    function v243() {
      var self$$7 = jQuery$$1(this);
      var contents = self$$7.contents();
      if (contents.length) {
        JAM.call(contents.wrapAll, contents, [html$$1]);
      } else {
        JAM.call(self$$7.append, self$$7, [html$$1]);
      }
      return;
    }
    function v242(i$$71) {
      var v1486 = jQuery$$1(this);
      JAM.call(v1486.wrapInner, v1486, [JAM.call(html$$1.call, html$$1, [this, i$$71])]);
      return;
    }
    if (JAM.call(jQuery$$1.isFunction, jQuery$$1, [html$$1])) {
      return JAM.call(this.each, this, [v242]);
    }
    return JAM.call(this.each, this, [v243]);
  }
  function v241(html) {
    function v240() {
      var elem$$96 = this;
      var v3189 = elem$$96.firstChild;
      if (v3189) {
        v3189 = elem$$96.firstChild.nodeType === 1;
      }
      var v1489 = v3189;
      for (;v1489;) {
        elem$$96 = elem$$96.firstChild;
        var v3190 = elem$$96.firstChild;
        if (v3190) {
          v3190 = elem$$96.firstChild.nodeType === 1;
        }
        v1489 = v3190;
      }
      return elem$$96;
    }
    function v239(i$$70) {
      var v1490 = jQuery$$1(this);
      JAM.call(v1490.wrapAll, v1490, [JAM.call(html.call, html, [this, i$$70])]);
      return;
    }
    if (JAM.call(jQuery$$1.isFunction, jQuery$$1, [html])) {
      return JAM.call(this.each, this, [v239]);
    }
    if (this[0]) {
      var v3191 = jQuery$$1(html, this[0].ownerDocument);
      var v1493 = JAM.call(v3191.eq, v3191, [0]);
      var wrap = JAM.call(v1493.clone, v1493, [true]);
      if (this[0].parentNode) {
        JAM.call(wrap.insertBefore, wrap, [this[0]]);
      }
      var v1496 = JAM.call(wrap.map, wrap, [v240]);
      JAM.call(v1496.append, v1496, [this]);
    }
    return this;
  }
  function v238(text$$8) {
    function v237(i$$69) {
      var self$$6 = jQuery$$1(this);
      JAM.call(self$$6.text, self$$6, [JAM.call(text$$8.call, text$$8, [this, i$$69, self$$6.text()])]);
      return;
    }
    if (JAM.call(jQuery$$1.isFunction, jQuery$$1, [text$$8])) {
      return JAM.call(this.each, this, [v237]);
    }
    var v3194 = typeof text$$8 !== "object";
    if (v3194) {
      v3194 = text$$8 !== undefined$$1;
    }
    if (v3194) {
      var v1500 = this.empty();
      var v4952 = this[0];
      if (v4952) {
        v4952 = this[0].ownerDocument;
      }
      var v4258 = v4952;
      if (!v4258) {
        v4258 = document$$1;
      }
      return JAM.call(v1500.append, v1500, [v4258.createTextNode(text$$8)]);
    }
    return JAM.call(jQuery$$1.text, jQuery$$1, [this]);
  }
  function v236(n$$2, elem$$95) {
    var r$$1 = [];
    for (;n$$2;) {
      var v3196 = n$$2.nodeType === 1;
      if (v3196) {
        v3196 = n$$2 !== elem$$95;
      }
      if (v3196) {
        JAM.call(r$$1.push, r$$1, [n$$2]);
      }
      n$$2 = n$$2.nextSibling;
    }
    return r$$1;
  }
  function v235(cur$$6, result$$5, dir$$3, elem$$94) {
    result$$5 = result$$5 || 1;
    var num$$7 = 0;
    for (;cur$$6;) {
      var v3197 = cur$$6.nodeType === 1;
      if (v3197) {
        v3197 = (num$$7 = num$$7 + 1) === result$$5;
      }
      if (v3197) {
        break;
      }
      introspect(JAM.policy.p3) {
        cur$$6 = cur$$6[dir$$3];
      }
    }
    return cur$$6;
  }
  function v234(elem$$93, dir$$2, until$$4) {
    var matched = [];
    introspect(JAM.policy.p3) {
      var cur$$5 = elem$$93[dir$$2]
    }
    var v4262 = cur$$5;
    if (v4262) {
      v4262 = cur$$5.nodeType !== 9;
    }
    var v3198 = v4262;
    if (v3198) {
      var v4955 = until$$4 === undefined$$1;
      if (!v4955) {
        v4955 = cur$$5.nodeType !== 1;
      }
      var v4263 = v4955;
      if (!v4263) {
        var v5267 = jQuery$$1(cur$$5);
        v4263 = !JAM.call(v5267.is, v5267, [until$$4]);
      }
      v3198 = v4263;
    }
    var v1506 = v3198;
    for (;v1506;) {
      if (cur$$5.nodeType === 1) {
        JAM.call(matched.push, matched, [cur$$5]);
      }
      introspect(JAM.policy.p3) {
        cur$$5 = cur$$5[dir$$2];
      }
      var v4264 = cur$$5;
      if (v4264) {
        v4264 = cur$$5.nodeType !== 9;
      }
      var v3200 = v4264;
      if (v3200) {
        var v4959 = until$$4 === undefined$$1;
        if (!v4959) {
          v4959 = cur$$5.nodeType !== 1;
        }
        var v4265 = v4959;
        if (!v4265) {
          var v5270 = jQuery$$1(cur$$5);
          v4265 = !JAM.call(v5270.is, v5270, [until$$4]);
        }
        v3200 = v4265;
      }
      v1506 = v3200;
    }
    return matched;
  }
  function v233(expr$$6, elems$$6, not$$5) {
    if (not$$5) {
      expr$$6 = ":not(" + expr$$6 + ")";
    }
    var v1508 = jQuery$$1.find;
    return JAM.call(v1508.matches, v1508, [expr$$6, elems$$6]);
  }
  function v232(name$$47, fn$$14) {
    function v231(until$$3, selector$$16) {
      var ret$$18 = JAM.call(jQuery$$1.map, jQuery$$1, [this, fn$$14, until$$3]);
      if (!runtil.test(name$$47)) {
        selector$$16 = until$$3;
      }
      var v3202 = selector$$16;
      if (v3202) {
        v3202 = typeof selector$$16 === "string";
      }
      if (v3202) {
        ret$$18 = JAM.call(jQuery$$1.filter, jQuery$$1, [selector$$16, ret$$18]);
      }
      var v1511;
      if (this.length > 1) {
        v1511 = JAM.call(jQuery$$1.unique, jQuery$$1, [ret$$18]);
      } else {
        v1511 = ret$$18;
      }
      ret$$18 = v1511;
      var v4268 = this.length > 1;
      if (!v4268) {
        v4268 = rmultiselector.test(selector$$16);
      }
      var v3204 = v4268;
      if (v3204) {
        v3204 = rparentsprev.test(name$$47);
      }
      if (v3204) {
        ret$$18 = ret$$18.reverse();
      }
      return JAM.call(this.pushStack, this, [ret$$18, name$$47, JAM.call(slice.call, slice, [arguments]).join(",")]);
    }
    JAM.set(jQuery$$1.fn, name$$47, v231, JAM.policy.p2);
    return;
  }
  function v230(elem$$92) {
    var v1515;
    if (JAM.call(jQuery$$1.nodeName, jQuery$$1, [elem$$92, "iframe"])) {
      var v3206 = elem$$92.contentDocument;
      if (!v3206) {
        v3206 = elem$$92.contentWindow.document;
      }
      v1515 = v3206;
    } else {
      v1515 = JAM.call(jQuery$$1.makeArray, jQuery$$1, [elem$$92.childNodes]);
    }
    return v1515;
  }
  function v229(elem$$91) {
    return JAM.call(jQuery$$1.sibling, jQuery$$1, [elem$$91.firstChild]);
  }
  function v228(elem$$90) {
    return JAM.call(jQuery$$1.sibling, jQuery$$1, [elem$$90.parentNode.firstChild, elem$$90]);
  }
  function v227(elem$$89, i$$68, until$$2) {
    return JAM.call(jQuery$$1.dir, jQuery$$1, [elem$$89, "previousSibling", until$$2]);
  }
  function v226(elem$$88, i$$67, until$$1) {
    return JAM.call(jQuery$$1.dir, jQuery$$1, [elem$$88, "nextSibling", until$$1]);
  }
  function v225(elem$$87) {
    return JAM.call(jQuery$$1.dir, jQuery$$1, [elem$$87, "previousSibling"]);
  }
  function v224(elem$$86) {
    return JAM.call(jQuery$$1.dir, jQuery$$1, [elem$$86, "nextSibling"]);
  }
  function v223(elem$$85) {
    return JAM.call(jQuery$$1.nth, jQuery$$1, [elem$$85, 2, "previousSibling"]);
  }
  function v222(elem$$84) {
    return JAM.call(jQuery$$1.nth, jQuery$$1, [elem$$84, 2, "nextSibling"]);
  }
  function v221(elem$$83, i$$66, until) {
    return JAM.call(jQuery$$1.dir, jQuery$$1, [elem$$83, "parentNode", until]);
  }
  function v220(elem$$82) {
    return JAM.call(jQuery$$1.dir, jQuery$$1, [elem$$82, "parentNode"]);
  }
  function v219(elem$$81) {
    var parent$$5 = elem$$81.parentNode;
    var v1518;
    var v4271 = parent$$5;
    if (v4271) {
      v4271 = parent$$5.nodeType !== 11;
    }
    if (v4271) {
      v1518 = parent$$5;
    } else {
      v1518 = null;
    }
    return v1518;
  }
  function v218() {
    return JAM.call(this.add, this, [this.prevObject]);
  }
  function v217(selector$$15, context$$14) {
    var v1520;
    if (typeof selector$$15 === "string") {
      var v4273 = context$$14;
      if (!v4273) {
        v4273 = this.context;
      }
      v1520 = jQuery$$1(selector$$15, v4273);
    } else {
      v1520 = JAM.call(jQuery$$1.makeArray, jQuery$$1, [selector$$15]);
    }
    var set$$5 = v1520;
    var all$$4 = JAM.call(jQuery$$1.merge, jQuery$$1, [this.get(), set$$5]);
    var v3213;
    var v4966 = isDisconnected(set$$5[0]);
    if (!v4966) {
      v4966 = isDisconnected(all$$4[0]);
    }
    if (v4966) {
      v3213 = all$$4;
    } else {
      v3213 = JAM.call(jQuery$$1.unique, jQuery$$1, [all$$4]);
    }
    return JAM.call(this.pushStack, this, [v3213]);
  }
  function v216(elem$$80) {
    var v3214 = !elem$$80;
    if (!v3214) {
      v3214 = typeof elem$$80 === "string";
    }
    if (v3214) {
      var v1523 = this[0];
      var v3215;
      if (elem$$80) {
        v3215 = jQuery$$1(elem$$80);
      } else {
        v3215 = this.parent().children();
      }
      return JAM.call(jQuery$$1.inArray, jQuery$$1, [v1523, v3215]);
    }
    var v3216;
    if (elem$$80.jquery) {
      v3216 = elem$$80[0];
    } else {
      v3216 = elem$$80;
    }
    return JAM.call(jQuery$$1.inArray, jQuery$$1, [v3216, this]);
  }
  function v215(selectors$$8, context$$13) {
    function v214(i$$65, cur$$4) {
      var v4279 = cur$$4;
      if (v4279) {
        v4279 = cur$$4.ownerDocument;
      }
      var v3217 = v4279;
      if (v3217) {
        v3217 = cur$$4 !== context$$13;
      }
      var v1528 = v3217;
      for (;v1528;) {
        var v3218;
        if (pos$$1) {
          v3218 = JAM.call(pos$$1.index, pos$$1, [cur$$4]) > -1;
        } else {
          var v4281 = jQuery$$1(cur$$4);
          v3218 = JAM.call(v4281.is, v4281, [selectors$$8]);
        }
        if (v3218) {
          return cur$$4;
        }
        cur$$4 = cur$$4.parentNode;
        var v4282 = cur$$4;
        if (v4282) {
          v4282 = cur$$4.ownerDocument;
        }
        var v3219 = v4282;
        if (v3219) {
          v3219 = cur$$4 !== context$$13;
        }
        v1528 = v3219;
      }
      return null;
    }
    if (JAM.call(jQuery$$1.isArray, jQuery$$1, [selectors$$8])) {
      var ret$$17 = [];
      var cur$$3 = this[0];
      var match$$36;
      var matches = {};
      var selector$$14;
      var v3220 = cur$$3;
      if (v3220) {
        v3220 = selectors$$8.length;
      }
      if (v3220) {
        var i$$64 = 0;
        var l$$19 = selectors$$8.length;
        var v1532 = i$$64 < l$$19;
        for (;v1532;) {
          introspect(JAM.policy.p3) {
            selector$$14 = selectors$$8[i$$64];
          }
          introspect(JAM.policy.p3) {
            var v3221 = matches[selector$$14]
          }
          if (!v3221) {
            var v1529 = matches;
            var v1530 = selector$$14;
            var v3222;
            if (jQuery$$1.expr.match.POS.test(selector$$14)) {
              var v4968 = context$$13;
              if (!v4968) {
                v4968 = this.context;
              }
              v3222 = jQuery$$1(selector$$14, v4968);
            } else {
              v3222 = selector$$14;
            }
            JAM.set(v1529, v1530, v3222, JAM.policy.p2);
          }
          i$$64++;
          v1532 = i$$64 < l$$19;
        }
        var v4285 = cur$$3;
        if (v4285) {
          v4285 = cur$$3.ownerDocument;
        }
        var v3223 = v4285;
        if (v3223) {
          v3223 = cur$$3 !== context$$13;
        }
        var v1535 = v3223;
        for (;v1535;) {
          for (selector$$14 in matches) {
            introspect(JAM.policy.p3) {
              match$$36 = matches[selector$$14];
            }
            var v3224;
            if (match$$36.jquery) {
              v3224 = JAM.call(match$$36.index, match$$36, [cur$$3]) > -1;
            } else {
              var v4287 = jQuery$$1(cur$$3);
              v3224 = JAM.call(v4287.is, v4287, [match$$36]);
            }
            if (v3224) {
              JAM.call(ret$$17.push, ret$$17, [{selector:selector$$14, elem:cur$$3}]);
              delete matches[selector$$14];
            }
          }
          cur$$3 = cur$$3.parentNode;
          var v4289 = cur$$3;
          if (v4289) {
            v4289 = cur$$3.ownerDocument;
          }
          var v3225 = v4289;
          if (v3225) {
            v3225 = cur$$3 !== context$$13;
          }
          v1535 = v3225;
        }
      }
      return ret$$17;
    }
    var v1538;
    if (jQuery$$1.expr.match.POS.test(selectors$$8)) {
      var v4291 = context$$13;
      if (!v4291) {
        v4291 = this.context;
      }
      v1538 = jQuery$$1(selectors$$8, v4291);
    } else {
      v1538 = null;
    }
    var pos$$1 = v1538;
    return JAM.call(this.map, this, [v214]);
  }
  function v213(selector$$13) {
    var v1539 = !!selector$$13;
    if (v1539) {
      v1539 = JAM.call(jQuery$$1.filter, jQuery$$1, [selector$$13, this]).length > 0;
    }
    return v1539;
  }
  function v212(selector$$12) {
    return JAM.call(this.pushStack, this, [winnow(this, selector$$12, true), "filter", selector$$12]);
  }
  function v211(selector$$11) {
    return JAM.call(this.pushStack, this, [winnow(this, selector$$11, false), "not", selector$$11]);
  }
  function v210(target$$28) {
    function v209() {
      var i$$63 = 0;
      var l$$18 = targets.length;
      var v1543 = i$$63 < l$$18;
      for (;v1543;) {
        introspect(JAM.policy.p3) {
          var v3230 = targets[i$$63]
        }
        if (JAM.call(jQuery$$1.contains, jQuery$$1, [this, v3230])) {
          return true;
        }
        i$$63++;
        v1543 = i$$63 < l$$18;
      }
      return;
    }
    var targets = jQuery$$1(target$$28);
    return JAM.call(this.filter, this, [v209]);
  }
  function v208(selector$$10) {
    var ret$$16 = JAM.call(this.pushStack, this, ["", "find", selector$$10]);
    var length$$17 = 0;
    var i$$62 = 0;
    var l$$17 = this.length;
    var v1550 = i$$62 < l$$17;
    for (;v1550;) {
      length$$17 = ret$$16.length;
      introspect(JAM.policy.p3) {
        var v1544 = this[i$$62]
      }
      JAM.call(jQuery$$1.find, jQuery$$1, [selector$$10, v1544, ret$$16]);
      if (i$$62 > 0) {
        var n$$1 = length$$17;
        var v1548 = n$$1 < ret$$16.length;
        for (;v1548;) {
          var r = 0;
          var v1547 = r < length$$17;
          for (;v1547;) {
            introspect(JAM.policy.p3) {
              var v3232 = ret$$16[r]
            }
            introspect(JAM.policy.p3) {
              var v3233 = ret$$16[n$$1]
            }
            if (v3232 === v3233) {
              var v1545 = n$$1;
              n$$1 = n$$1 - 1;
              JAM.call(ret$$16.splice, ret$$16, [v1545, 1]);
              break;
            }
            r++;
            v1547 = r < length$$17;
          }
          n$$1++;
          v1548 = n$$1 < ret$$16.length;
        }
      }
      i$$62++;
      v1550 = i$$62 < l$$17;
    }
    return ret$$16;
  }
  function v207() {
    function v206(a$$5, b$$4) {
      var v1551 = a$$5 !== b$$4;
      if (v1551) {
        var v3235;
        if (a$$5.contains) {
          v3235 = JAM.call(a$$5.contains, a$$5, [b$$4]);
        } else {
          v3235 = true;
        }
        v1551 = v3235;
      }
      return v1551;
    }
    function v205(a$$4, b$$3) {
      return!!(a$$4.compareDocumentPosition(b$$3) & 16);
    }
    function v204() {
      function v203(match$$34, context$$11, isXML$$10) {
        var v3237 = typeof context$$11.getElementsByClassName !== "undefined";
        if (v3237) {
          v3237 = !isXML$$10;
        }
        if (v3237) {
          return context$$11.getElementsByClassName(match$$34[1]);
        }
        return;
      }
      var div$$4 = document$$1.createElement("div");
      JAM.set(div$$4, "innerHTML", "<div class='test e'></div><div class='test'></div>");
      var v3238 = !div$$4.getElementsByClassName;
      if (!v3238) {
        v3238 = div$$4.getElementsByClassName("e").length === 0;
      }
      if (v3238) {
        return;
      }
      div$$4.lastChild.className = "e";
      if (div$$4.getElementsByClassName("e").length === 1) {
        return;
      }
      var v1558 = Expr.order;
      JAM.call(v1558.splice, v1558, [1, 0, "CLASS"]);
      Expr.find.CLASS = v203;
      div$$4 = null;
      return;
    }
    function v202() {
      function v201(query$$2, context$$10, extra$$1, seed$$1) {
        context$$10 = context$$10 || document$$1;
        var v4300 = !seed$$1;
        if (v4300) {
          v4300 = context$$10.nodeType === 9;
        }
        var v3240 = v4300;
        if (v3240) {
          v3240 = !isXML(context$$10);
        }
        if (v3240) {
          try {
            return JAM.call(makeArray, null, [context$$10.querySelectorAll(query$$2), extra$$1]);
          } catch (e$$21) {
          }
        }
        return JAM.call(oldSizzle, null, [query$$2, context$$10, extra$$1, seed$$1]);
      }
      var oldSizzle = Sizzle;
      var div$$3 = document$$1.createElement("div");
      JAM.set(div$$3, "innerHTML", "<p class='TEST'></p>");
      var v3241 = div$$3.querySelectorAll;
      if (v3241) {
        v3241 = div$$3.querySelectorAll(".TEST").length === 0;
      }
      if (v3241) {
        return;
      }
      Sizzle = v201;
      var prop$$5;
      for (prop$$5 in oldSizzle) {
        JAM.set(Sizzle, prop$$5, JAM.get(oldSizzle, prop$$5, JAM.policy.p4), JAM.policy.p4);
      }
      div$$3 = null;
      return;
    }
    function v200() {
      function v199(elem$$74) {
        return elem$$74.getAttribute("href", 2);
      }
      function v198(match$$33, context$$9) {
        var results$$6 = context$$9.getElementsByTagName(match$$33[1]);
        if (match$$33[1] === "*") {
          var tmp = [];
          var i$$57 = 0;
          introspect(JAM.policy.p3) {
            var v1566 = results$$6[i$$57]
          }
          for (;v1566;) {
            introspect(JAM.policy.p3) {
              var v4303 = results$$6[i$$57]
            }
            if (v4303.nodeType === 1) {
              introspect(JAM.policy.p3) {
                var v1564 = results$$6[i$$57]
              }
              JAM.call(tmp.push, tmp, [v1564]);
            }
            i$$57++;
            introspect(JAM.policy.p3) {
              v1566 = results$$6[i$$57];
            }
          }
          results$$6 = tmp;
        }
        return results$$6;
      }
      var div$$2 = document$$1.createElement("div");
      JAM.call(div$$2.appendChild, div$$2, [document$$1.createComment("")]);
      if (div$$2.getElementsByTagName("*").length > 0) {
        Expr.find.TAG = v198;
      }
      JAM.set(div$$2, "innerHTML", "<a href='#'></a>");
      var v4305 = div$$2.firstChild;
      if (v4305) {
        v4305 = typeof div$$2.firstChild.getAttribute !== "undefined";
      }
      var v3245 = v4305;
      if (v3245) {
        v3245 = div$$2.firstChild.getAttribute("href") !== "#";
      }
      if (v3245) {
        Expr.attrHandle.href = v199;
      }
      div$$2 = null;
      return;
    }
    function v197() {
      function v196(elem$$73, match$$32) {
        var v1573 = typeof elem$$73.getAttributeNode !== "undefined";
        if (v1573) {
          v1573 = elem$$73.getAttributeNode("id");
        }
        var node$$4 = v1573;
        var v3247 = elem$$73.nodeType === 1;
        if (v3247) {
          v3247 = node$$4;
        }
        var v1574 = v3247;
        if (v1574) {
          v1574 = node$$4.nodeValue === match$$32;
        }
        return v1574;
      }
      function v195(match$$31, context$$8, isXML$$9) {
        var v3249 = typeof context$$8.getElementById !== "undefined";
        if (v3249) {
          v3249 = !isXML$$9;
        }
        if (v3249) {
          var m$$2 = context$$8.getElementById(match$$31[1]);
          var v1576;
          if (m$$2) {
            var v3250;
            var v4978 = m$$2.id === match$$31[1];
            if (!v4978) {
              var v5280 = typeof m$$2.getAttributeNode !== "undefined";
              if (v5280) {
                v5280 = m$$2.getAttributeNode("id").nodeValue === match$$31[1];
              }
              v4978 = v5280;
            }
            if (v4978) {
              v3250 = [m$$2];
            } else {
              v3250 = undefined$$1;
            }
            v1576 = v3250;
          } else {
            v1576 = [];
          }
          return v1576;
        }
        return;
      }
      var form = document$$1.createElement("div");
      var id$$4 = "script" + (new Date).getTime();
      JAM.set(form, "innerHTML", "<a name='" + id$$4 + "'/>");
      var root$$1 = document$$1.documentElement;
      JAM.call(root$$1.insertBefore, root$$1, [form, root$$1.firstChild]);
      if (document$$1.getElementById(id$$4)) {
        Expr.find.ID = v195;
        Expr.filter.ID = v196;
      }
      root$$1.removeChild(form);
      root$$1 = form = null;
      return;
    }
    function v194(a$$3, b$$2) {
      var v3252 = !a$$3.ownerDocument;
      if (!v3252) {
        v3252 = !b$$2.ownerDocument;
      }
      if (v3252) {
        if (a$$3 == b$$2) {
          hasDuplicate = true;
        }
        var v1585;
        if (a$$3.ownerDocument) {
          v1585 = -1;
        } else {
          v1585 = 1;
        }
        return v1585;
      }
      var aRange = a$$3.ownerDocument.createRange();
      var bRange = b$$2.ownerDocument.createRange();
      aRange.setStart(a$$3, 0);
      aRange.setEnd(a$$3, 0);
      bRange.setStart(b$$2, 0);
      bRange.setEnd(b$$2, 0);
      var ret$$15 = aRange.compareBoundaryPoints(Range.START_TO_END, bRange);
      if (ret$$15 === 0) {
        hasDuplicate = true;
      }
      return ret$$15;
    }
    function v193(a$$2, b$$1) {
      var v3254 = !a$$2.sourceIndex;
      if (!v3254) {
        v3254 = !b$$1.sourceIndex;
      }
      if (v3254) {
        if (a$$2 == b$$1) {
          hasDuplicate = true;
        }
        var v1592;
        if (a$$2.sourceIndex) {
          v1592 = -1;
        } else {
          v1592 = 1;
        }
        return v1592;
      }
      var ret$$14 = a$$2.sourceIndex - b$$1.sourceIndex;
      if (ret$$14 === 0) {
        hasDuplicate = true;
      }
      return ret$$14;
    }
    function v192(a$$1, b) {
      var v3256 = !a$$1.compareDocumentPosition;
      if (!v3256) {
        v3256 = !b.compareDocumentPosition;
      }
      if (v3256) {
        if (a$$1 == b) {
          hasDuplicate = true;
        }
        var v1598;
        if (a$$1.compareDocumentPosition) {
          v1598 = -1;
        } else {
          v1598 = 1;
        }
        return v1598;
      }
      var v1600;
      if (a$$1.compareDocumentPosition(b) & 4) {
        v1600 = -1;
      } else {
        var v3258;
        if (a$$1 === b) {
          v3258 = 0;
        } else {
          v3258 = 1;
        }
        v1600 = v3258;
      }
      var ret$$13 = v1600;
      if (ret$$13 === 0) {
        hasDuplicate = true;
      }
      return ret$$13;
    }
    function v191(array$$16, results$$5) {
      var ret$$12 = results$$5 || [];
      if (JAM.call(toString$$1.call, toString$$1, [array$$16]) === "[object Array]") {
        var v1602 = Array.prototype.push;
        JAM.call(v1602.apply, v1602, [ret$$12, array$$16]);
      } else {
        if (typeof array$$16.length === "number") {
          var i$$56 = 0;
          var l$$15 = array$$16.length;
          var v1604 = i$$56 < l$$15;
          for (;v1604;) {
            introspect(JAM.policy.p3) {
              var v1603 = array$$16[i$$56]
            }
            JAM.call(ret$$12.push, ret$$12, [v1603]);
            i$$56++;
            v1604 = i$$56 < l$$15;
          }
        } else {
          i$$56 = 0;
          introspect(JAM.policy.p3) {
            var v1606 = array$$16[i$$56]
          }
          for (;v1606;) {
            introspect(JAM.policy.p3) {
              var v1605 = array$$16[i$$56]
            }
            JAM.call(ret$$12.push, ret$$12, [v1605]);
            i$$56++;
            introspect(JAM.policy.p3) {
              v1606 = array$$16[i$$56];
            }
          }
        }
      }
      return ret$$12;
    }
    function v190(all$$3, num$$6) {
      return "\\" + (num$$6 - 0 + 1);
    }
    function v189(elem$$72, match$$30, i$$55, array$$14) {
      var name$$46 = match$$30[2];
      var v1610 = Expr.setFilters;
      introspect(JAM.policy.p3) {
        var filter$$2 = v1610[name$$46]
      }
      if (filter$$2) {
        return JAM.call(filter$$2, null, [elem$$72, i$$55, match$$30, array$$14]);
      }
      return;
    }
    function v188(elem$$71, match$$29) {
      var name$$45 = match$$29[1];
      var v1611;
      var v4323 = Expr.attrHandle;
      introspect(JAM.policy.p3) {
        var v3266 = v4323[name$$45]
      }
      if (v3266) {
        var v3264 = Expr.attrHandle;
        v1611 = JAM.call(JAM.get(v3264, name$$45, JAM.policy.p3), v3264, [elem$$71]);
      } else {
        var v3265;
        introspect(JAM.policy.p3) {
          var v4979 = elem$$71[name$$45]
        }
        if (v4979 != null) {
          introspect(JAM.policy.p3) {
            v3265 = elem$$71[name$$45];
          }
        } else {
          v3265 = elem$$71.getAttribute(name$$45);
        }
        v1611 = v3265;
      }
      var result$$4 = v1611;
      var value$$37 = result$$4 + "";
      var type$$57 = match$$29[2];
      var check = match$$29[4];
      var v1612;
      if (result$$4 == null) {
        v1612 = type$$57 === "!=";
      } else {
        var v3267;
        if (type$$57 === "=") {
          v3267 = value$$37 === check;
        } else {
          var v4325;
          if (type$$57 === "*=") {
            v4325 = value$$37.indexOf(check) >= 0;
          } else {
            var v4981;
            if (type$$57 === "~=") {
              v4981 = (" " + value$$37 + " ").indexOf(check) >= 0;
            } else {
              var v5283;
              if (!check) {
                var v5411 = value$$37;
                if (v5411) {
                  v5411 = result$$4 !== false;
                }
                v5283 = v5411;
              } else {
                var v5412;
                if (type$$57 === "!=") {
                  v5412 = value$$37 !== check;
                } else {
                  var v5460;
                  if (type$$57 === "^=") {
                    v5460 = value$$37.indexOf(check) === 0;
                  } else {
                    var v5475;
                    if (type$$57 === "$=") {
                      v5475 = value$$37.substr(value$$37.length - check.length) === check;
                    } else {
                      var v5486;
                      if (type$$57 === "|=") {
                        var v5490 = value$$37 === check;
                        if (!v5490) {
                          v5490 = value$$37.substr(0, check.length + 1) === check + "-";
                        }
                        v5486 = v5490;
                      } else {
                        v5486 = false;
                      }
                      v5475 = v5486;
                    }
                    v5460 = v5475;
                  }
                  v5412 = v5460;
                }
                v5283 = v5412;
              }
              v4981 = v5283;
            }
            v4325 = v4981;
          }
          v3267 = v4325;
        }
        v1612 = v3267;
      }
      return v1612;
    }
    function v187(elem$$70, match$$28) {
      var v5285 = elem$$70.className;
      if (!v5285) {
        v5285 = elem$$70.getAttribute("class");
      }
      return(" " + v5285 + " ").indexOf(match$$28) > -1;
    }
    function v186(elem$$69, match$$27) {
      var v3270 = match$$27 === "*";
      if (v3270) {
        v3270 = elem$$69.nodeType === 1;
      }
      var v1614 = v3270;
      if (!v1614) {
        v1614 = elem$$69.nodeName.toLowerCase() === match$$27;
      }
      return v1614;
    }
    function v185(elem$$68, match$$26) {
      var v1615 = elem$$68.nodeType === 1;
      if (v1615) {
        v1615 = elem$$68.getAttribute("id") === match$$26;
      }
      return v1615;
    }
    function v184(elem$$67, match$$25) {
      var type$$56 = match$$25[1];
      var node$$3 = elem$$67;
      switch(type$$56) {
        case "only":
        ;
        case "first":
          var v1617 = node$$3 = node$$3.previousSibling;
          for (;v1617;) {
            if (node$$3.nodeType === 1) {
              return false;
            }
            v1617 = node$$3 = node$$3.previousSibling;
          }
          if (type$$56 === "first") {
            return true;
          }
          node$$3 = elem$$67;
        case "last":
          var v1620 = node$$3 = node$$3.nextSibling;
          for (;v1620;) {
            if (node$$3.nodeType === 1) {
              return false;
            }
            v1620 = node$$3 = node$$3.nextSibling;
          }
          return true;
        case "nth":
          var first$$2 = match$$25[2];
          var last = match$$25[3];
          var v3277 = first$$2 === 1;
          if (v3277) {
            v3277 = last === 0;
          }
          if (v3277) {
            return true;
          }
          var doneName$$4 = match$$25[0];
          var parent$$4 = elem$$67.parentNode;
          var v3278 = parent$$4;
          if (v3278) {
            var v4330 = parent$$4.sizcache !== doneName$$4;
            if (!v4330) {
              v4330 = !elem$$67.nodeIndex;
            }
            v3278 = v4330;
          }
          if (v3278) {
            var count$$3 = 0;
            node$$3 = parent$$4.firstChild;
            for (;node$$3;) {
              if (node$$3.nodeType === 1) {
                node$$3.nodeIndex = count$$3 = count$$3 + 1;
              }
              node$$3 = node$$3.nextSibling;
            }
            parent$$4.sizcache = doneName$$4;
          }
          var diff = elem$$67.nodeIndex - last;
          if (first$$2 === 0) {
            return diff === 0;
          } else {
            var v1625 = diff % first$$2 === 0;
            if (v1625) {
              v1625 = diff / first$$2 >= 0;
            }
            return v1625;
          }
        ;
      }
      return;
    }
    function v183(elem$$66, match$$24, i$$54, array$$13) {
      var name$$44 = match$$24[1];
      var v1627 = Expr.filters;
      introspect(JAM.policy.p3) {
        var filter$$1 = v1627[name$$44]
      }
      if (filter$$1) {
        return JAM.call(filter$$1, null, [elem$$66, i$$54, match$$24, array$$13]);
      } else {
        if (name$$44 === "contains") {
          var v5286 = elem$$66.textContent;
          if (!v5286) {
            v5286 = elem$$66.innerText;
          }
          var v4987 = v5286;
          if (!v4987) {
            v4987 = getText([elem$$66]);
          }
          var v4331 = v4987;
          if (!v4331) {
            v4331 = "";
          }
          return v4331.indexOf(match$$24[3]) >= 0;
        } else {
          if (name$$44 === "not") {
            var not$$4 = match$$24[3];
            i$$54 = 0;
            var l$$14 = not$$4.length;
            var v1630 = i$$54 < l$$14;
            for (;v1630;) {
              introspect(JAM.policy.p3) {
                var v3284 = not$$4[i$$54]
              }
              if (v3284 === elem$$66) {
                return false;
              }
              i$$54++;
              v1630 = i$$54 < l$$14;
            }
            return true;
          } else {
            JAM.call(Sizzle.error, Sizzle, ["Syntax error, unrecognized expression: " + name$$44]);
          }
        }
      }
      return;
    }
    function v182(elem$$65, i$$53, match$$23) {
      return match$$23[3] - 0 === i$$53;
    }
    function v181(elem$$64, i$$52, match$$22) {
      return match$$22[3] - 0 === i$$52;
    }
    function v180(elem$$63, i$$51, match$$21) {
      return i$$51 > match$$21[3] - 0;
    }
    function v179(elem$$62, i$$50, match$$20) {
      return i$$50 < match$$20[3] - 0;
    }
    function v178(elem$$61, i$$49) {
      return i$$49 % 2 === 1;
    }
    function v177(elem$$60, i$$48) {
      return i$$48 % 2 === 0;
    }
    function v176(elem$$59, i$$47, match$$19, array$$12) {
      return i$$47 === array$$12.length - 1;
    }
    function v175(elem$$58, i$$46) {
      return i$$46 === 0;
    }
    function v174(elem$$57) {
      return/input|select|textarea|button/i.test(elem$$57.nodeName);
    }
    function v173(elem$$56) {
      var v1642 = "button" === elem$$56.type;
      if (!v1642) {
        v1642 = elem$$56.nodeName.toLowerCase() === "button";
      }
      return v1642;
    }
    function v172(elem$$55) {
      return "reset" === elem$$55.type;
    }
    function v171(elem$$54) {
      return "image" === elem$$54.type;
    }
    function v170(elem$$53) {
      return "submit" === elem$$53.type;
    }
    function v169(elem$$52) {
      return "password" === elem$$52.type;
    }
    function v168(elem$$51) {
      return "file" === elem$$51.type;
    }
    function v167(elem$$50) {
      return "checkbox" === elem$$50.type;
    }
    function v166(elem$$49) {
      return "radio" === elem$$49.type;
    }
    function v165(elem$$48) {
      return "text" === elem$$48.type;
    }
    function v164(elem$$47) {
      return/h\d/i.test(elem$$47.nodeName);
    }
    function v163(elem$$46, i$$45, match$$18) {
      return!!JAM.call(Sizzle, null, [match$$18[3], elem$$46]).length;
    }
    function v162(elem$$45) {
      return!elem$$45.firstChild;
    }
    function v161(elem$$44) {
      return!!elem$$44.firstChild;
    }
    function v160(elem$$43) {
      return elem$$43.selected === true;
    }
    function v159(elem$$42) {
      return elem$$42.checked === true;
    }
    function v158(elem$$41) {
      return elem$$41.disabled === true;
    }
    function v157(elem$$40) {
      var v1658 = elem$$40.disabled === false;
      if (v1658) {
        v1658 = elem$$40.type !== "hidden";
      }
      return v1658;
    }
    function v156(match$$17) {
      match$$17.unshift(true);
      return match$$17;
    }
    function v155(match$$16, curLoop$$4, inplace$$3, result$$3, not$$3) {
      if (match$$16[1] === "not") {
        var v5289 = chunker.exec(match$$16[3]);
        if (!v5289) {
          v5289 = "";
        }
        var v3298 = v5289.length > 1;
        if (!v3298) {
          v3298 = /^\w/.test(match$$16[3]);
        }
        if (v3298) {
          var v5544 = JAM.call(Sizzle, null, [match$$16[3], null, null, curLoop$$4]);
          match$$16[3] = v5544;
        } else {
          var ret$$11 = JAM.call(Sizzle.filter, Sizzle, [match$$16[3], curLoop$$4, inplace$$3, true ^ not$$3]);
          if (!inplace$$3) {
            var v1662 = result$$3.push;
            JAM.call(v1662.apply, v1662, [result$$3, ret$$11]);
          }
          return false;
        }
      } else {
        var v3299 = Expr.match.POS.test(match$$16[0]);
        if (!v3299) {
          v3299 = Expr.match.CHILD.test(match$$16[0]);
        }
        if (v3299) {
          return true;
        }
      }
      return match$$16;
    }
    function v154(match$$15, curLoop$$3, inplace$$2, result$$2, not$$2, isXML$$8) {
      var name$$43 = match$$15[1].replace(/\\/g, "");
      var v3300 = !isXML$$8;
      if (v3300) {
        var v4342 = Expr.attrMap;
        introspect(JAM.policy.p3) {
          v3300 = v4342[name$$43];
        }
      }
      if (v3300) {
        var v1668 = Expr.attrMap;
        introspect(JAM.policy.p3) {
          match$$15[1] = v1668[name$$43];
        }
      }
      if (match$$15[2] === "~=") {
        match$$15[4] = " " + match$$15[4] + " ";
      }
      return match$$15;
    }
    function v153(match$$14) {
      if (match$$14[1] === "nth") {
        var v5290 = match$$14[2] === "even";
        if (v5290) {
          v5290 = "2n";
        }
        var v4993 = v5290;
        if (!v4993) {
          var v5291 = match$$14[2] === "odd";
          if (v5291) {
            v5291 = "2n+1";
          }
          v4993 = v5291;
        }
        var v4343 = v4993;
        if (!v4343) {
          var v4994 = !/\D/.test(match$$14[2]);
          if (v4994) {
            v4994 = "0n+" + match$$14[2];
          }
          v4343 = v4994;
        }
        var v3304 = v4343;
        if (!v3304) {
          v3304 = match$$14[2];
        }
        var test = /(-?)(\d*)n((?:\+|-)?\d*)/.exec(v3304);
        var v3305 = test[1];
        var v4345 = test[2];
        if (!v4345) {
          v4345 = 1;
        }
        match$$14[2] = v3305 + v4345 - 0;
        match$$14[3] = test[3] - 0;
      }
      match$$14[0] = done;
      done = done + 1;
      return match$$14;
    }
    function v152(match$$13, curLoop$$2) {
      return match$$13[1].toLowerCase();
    }
    function v151(match$$12) {
      return match$$12[1].replace(/\\/g, "");
    }
    function v150(match$$11, curLoop$$1, inplace$$1, result$$1, not$$1, isXML$$7) {
      match$$11 = " " + match$$11[1].replace(/\\/g, "") + " ";
      if (isXML$$7) {
        return match$$11;
      }
      var i$$44 = 0;
      var elem$$39;
      introspect(JAM.policy.p3) {
        var v3308 = elem$$39 = curLoop$$1[i$$44]
      }
      var v1681 = v3308 != null;
      for (;v1681;) {
        if (elem$$39) {
          var v4347 = elem$$39.className;
          if (v4347) {
            v4347 = (" " + elem$$39.className + " ").replace(/[\t\n]/g, " ").indexOf(match$$11) >= 0;
          }
          if (not$$1 ^ v4347) {
            if (!inplace$$1) {
              JAM.call(result$$1.push, result$$1, [elem$$39]);
            }
          } else {
            if (inplace$$1) {
              introspect(JAM.policy.p2) {
                curLoop$$1[i$$44] = false;
              }
            }
          }
        }
        i$$44++;
        introspect(JAM.policy.p3) {
          var v3310 = elem$$39 = curLoop$$1[i$$44]
        }
        v1681 = v3310 != null;
      }
      return false;
    }
    function v149(match$$10, context$$7) {
      return context$$7.getElementsByTagName(match$$10[1]);
    }
    function v148(match$$9, context$$6) {
      if (typeof context$$6.getElementsByName !== "undefined") {
        var ret$$10 = [];
        var results$$3 = context$$6.getElementsByName(match$$9[1]);
        var i$$43 = 0;
        var l$$13 = results$$3.length;
        var v1686 = i$$43 < l$$13;
        for (;v1686;) {
          introspect(JAM.policy.p3) {
            var v4349 = results$$3[i$$43]
          }
          if (v4349.getAttribute("name") === match$$9[1]) {
            introspect(JAM.policy.p3) {
              var v1684 = results$$3[i$$43]
            }
            JAM.call(ret$$10.push, ret$$10, [v1684]);
          }
          i$$43++;
          v1686 = i$$43 < l$$13;
        }
        var v1687;
        if (ret$$10.length === 0) {
          v1687 = null;
        } else {
          v1687 = ret$$10;
        }
        return v1687;
      }
      return;
    }
    function v147(match$$8, context$$5, isXML$$6) {
      var v3315 = typeof context$$5.getElementById !== "undefined";
      if (v3315) {
        v3315 = !isXML$$6;
      }
      if (v3315) {
        var m$$1 = context$$5.getElementById(match$$8[1]);
        var v1690;
        if (m$$1) {
          v1690 = [m$$1];
        } else {
          v1690 = [];
        }
        return v1690;
      }
      return;
    }
    function v146(checkSet$$6, part$$3, isXML$$5) {
      var doneName$$3 = done;
      done = done + 1;
      var checkFn$$1 = dirCheck;
      var v3316 = typeof part$$3 === "string";
      if (v3316) {
        v3316 = !/\W/.test(part$$3);
      }
      if (v3316) {
        var nodeCheck$$3 = part$$3 = part$$3.toLowerCase();
        checkFn$$1 = dirNodeCheck;
      }
      JAM.call(checkFn$$1, null, ["previousSibling", part$$3, doneName$$3, checkSet$$6, nodeCheck$$3, isXML$$5]);
      return;
    }
    function v145(checkSet$$5, part$$2, isXML$$4) {
      var doneName$$2 = done;
      done = done + 1;
      var checkFn = dirCheck;
      var v3317 = typeof part$$2 === "string";
      if (v3317) {
        v3317 = !/\W/.test(part$$2);
      }
      if (v3317) {
        var nodeCheck$$2 = part$$2 = part$$2.toLowerCase();
        checkFn = dirNodeCheck;
      }
      JAM.call(checkFn, null, ["parentNode", part$$2, doneName$$2, checkSet$$5, nodeCheck$$2, isXML$$4]);
      return;
    }
    function v144(checkSet$$4, part$$1) {
      var isPartStr$$1 = typeof part$$1 === "string";
      var v3318 = isPartStr$$1;
      if (v3318) {
        v3318 = !/\W/.test(part$$1);
      }
      if (v3318) {
        part$$1 = part$$1.toLowerCase();
        var i$$42 = 0;
        var l$$12 = checkSet$$4.length;
        var v1696 = i$$42 < l$$12;
        for (;v1696;) {
          introspect(JAM.policy.p3) {
            var elem$$38 = checkSet$$4[i$$42]
          }
          if (elem$$38) {
            var parent$$3 = elem$$38.parentNode;
            var v1695;
            if (parent$$3.nodeName.toLowerCase() === part$$1) {
              v1695 = parent$$3;
            } else {
              v1695 = false;
            }
            introspect(JAM.policy.p2) {
              checkSet$$4[i$$42] = v1695;
            }
          }
          i$$42++;
          v1696 = i$$42 < l$$12;
        }
      } else {
        i$$42 = 0;
        l$$12 = checkSet$$4.length;
        var v1698 = i$$42 < l$$12;
        for (;v1698;) {
          introspect(JAM.policy.p3) {
            elem$$38 = checkSet$$4[i$$42];
          }
          if (elem$$38) {
            var v1697;
            if (isPartStr$$1) {
              v1697 = elem$$38.parentNode;
            } else {
              v1697 = elem$$38.parentNode === part$$1;
            }
            introspect(JAM.policy.p2) {
              checkSet$$4[i$$42] = v1697;
            }
          }
          i$$42++;
          v1698 = i$$42 < l$$12;
        }
        if (isPartStr$$1) {
          JAM.call(Sizzle.filter, Sizzle, [part$$1, checkSet$$4, true]);
        }
      }
      return;
    }
    function v143(checkSet$$3, part) {
      var isPartStr = typeof part === "string";
      var v1701 = isPartStr;
      if (v1701) {
        v1701 = !/\W/.test(part);
      }
      var isTag = v1701;
      var v1702 = isPartStr;
      if (v1702) {
        v1702 = !isTag;
      }
      var isPartStrNotTag = v1702;
      if (isTag) {
        part = part.toLowerCase();
      }
      var i$$41 = 0;
      var l$$11 = checkSet$$3.length;
      var elem$$37;
      var v1706 = i$$41 < l$$11;
      for (;v1706;) {
        introspect(JAM.policy.p3) {
          var v1705 = elem$$37 = checkSet$$3[i$$41]
        }
        if (v1705) {
          var v3322 = elem$$37 = elem$$37.previousSibling;
          if (v3322) {
            v3322 = elem$$37.nodeType !== 1;
          }
          var v1703 = v3322;
          for (;v1703;) {
            var v3323 = elem$$37 = elem$$37.previousSibling;
            if (v3323) {
              v3323 = elem$$37.nodeType !== 1;
            }
            v1703 = v3323;
          }
          var v1704;
          var v4360 = isPartStrNotTag;
          if (!v4360) {
            var v5000 = elem$$37;
            if (v5000) {
              v5000 = elem$$37.nodeName.toLowerCase() === part;
            }
            v4360 = v5000;
          }
          if (v4360) {
            v1704 = elem$$37 || false;
          } else {
            v1704 = elem$$37 === part;
          }
          introspect(JAM.policy.p2) {
            checkSet$$3[i$$41] = v1704;
          }
        }
        i$$41++;
        v1706 = i$$41 < l$$11;
      }
      if (isPartStrNotTag) {
        JAM.call(Sizzle.filter, Sizzle, [part, checkSet$$3, true]);
      }
      return;
    }
    function v142(elem$$36) {
      return elem$$36.getAttribute("href");
    }
    function v141(msg$$1) {
      throw "Syntax error, unrecognized expression: " + msg$$1;
    }
    function v140(expr$$5, set$$4, inplace, not) {
      var old$$1 = expr$$5;
      var result = [];
      var curLoop = set$$4;
      var match$$7;
      var anyFound;
      var v3325 = set$$4;
      if (v3325) {
        v3325 = set$$4[0];
      }
      var v1707 = v3325;
      if (v1707) {
        v1707 = isXML(set$$4[0]);
      }
      var isXMLFilter = v1707;
      var v3327 = expr$$5;
      if (v3327) {
        v3327 = set$$4.length;
      }
      var v1726 = v3327;
      for (;v1726;) {
        var type$$55;
        for (type$$55 in Expr.filter) {
          var v5297 = Expr.leftMatch;
          introspect(JAM.policy.p3) {
            var v5002 = v5297[type$$55]
          }
          var v3328 = (match$$7 = v5002.exec(expr$$5)) != null;
          if (v3328) {
            v3328 = match$$7[2];
          }
          if (v3328) {
            var v1708 = Expr.filter;
            introspect(JAM.policy.p3) {
              var filter = v1708[type$$55]
            }
            var found;
            var item;
            var left$$2 = match$$7[1];
            anyFound = false;
            JAM.call(match$$7.splice, match$$7, [1, 1]);
            if (left$$2.substr(left$$2.length - 1) === "\\") {
              continue;
            }
            if (curLoop === result) {
              result = [];
            }
            var v3330 = Expr.preFilter;
            introspect(JAM.policy.p3) {
              var v1714 = v3330[type$$55]
            }
            if (v1714) {
              var v1711 = Expr.preFilter;
              match$$7 = JAM.call(JAM.get(v1711, type$$55, JAM.policy.p3), v1711, [match$$7, curLoop, inplace, result, not, isXMLFilter]);
              if (!match$$7) {
                anyFound = found = true;
              } else {
                if (match$$7 === true) {
                  continue;
                }
              }
            }
            if (match$$7) {
              var i$$40 = 0;
              introspect(JAM.policy.p3) {
                var v3331 = item = curLoop[i$$40]
              }
              var v1717 = v3331 != null;
              for (;v1717;) {
                if (item) {
                  found = JAM.call(filter, null, [item, match$$7, i$$40, curLoop]);
                  var pass$$2 = not ^ !!found;
                  var v3333 = inplace;
                  if (v3333) {
                    v3333 = found != null;
                  }
                  if (v3333) {
                    if (pass$$2) {
                      anyFound = true;
                    } else {
                      introspect(JAM.policy.p2) {
                        curLoop[i$$40] = false;
                      }
                    }
                  } else {
                    if (pass$$2) {
                      JAM.call(result.push, result, [item]);
                      anyFound = true;
                    }
                  }
                }
                i$$40++;
                introspect(JAM.policy.p3) {
                  var v3334 = item = curLoop[i$$40]
                }
                v1717 = v3334 != null;
              }
            }
            if (found !== undefined$$1) {
              if (!inplace) {
                curLoop = result;
              }
              var v3335 = Expr.match;
              introspect(JAM.policy.p3) {
                var v1719 = v3335[type$$55]
              }
              expr$$5 = expr$$5.replace(v1719, "");
              if (!anyFound) {
                return[];
              }
              break;
            }
          }
        }
        if (expr$$5 === old$$1) {
          if (anyFound == null) {
            JAM.call(Sizzle.error, Sizzle, [expr$$5]);
          } else {
            break;
          }
        }
        old$$1 = expr$$5;
        var v3336 = expr$$5;
        if (v3336) {
          v3336 = set$$4.length;
        }
        v1726 = v3336;
      }
      return curLoop;
    }
    function v139(expr$$4, context$$4, isXML$$3) {
      var set$$3;
      var match$$6;
      if (!expr$$4) {
        return[];
      }
      var i$$39 = 0;
      var l$$10 = Expr.order.length;
      var v1736 = i$$39 < l$$10;
      for (;v1736;) {
        var v1729 = Expr.order;
        introspect(JAM.policy.p3) {
          var type$$54 = v1729[i$$39]
        }
        var v4363 = Expr.leftMatch;
        introspect(JAM.policy.p3) {
          var v3337 = v4363[type$$54]
        }
        if (match$$6 = v3337.exec(expr$$4)) {
          var left$$1 = match$$6[1];
          JAM.call(match$$6.splice, match$$6, [1, 1]);
          if (left$$1.substr(left$$1.length - 1) !== "\\") {
            var v3339 = match$$6[1];
            if (!v3339) {
              v3339 = "";
            }
            var v5545 = v3339.replace(/\\/g, "");
            match$$6[1] = v5545;
            var v1731 = Expr.find;
            set$$3 = JAM.call(JAM.get(v1731, type$$54, JAM.policy.p3), v1731, [match$$6, context$$4, isXML$$3]);
            if (set$$3 != null) {
              var v3340 = Expr.match;
              introspect(JAM.policy.p3) {
                var v1732 = v3340[type$$54]
              }
              expr$$4 = expr$$4.replace(v1732, "");
              break;
            }
          }
        }
        i$$39++;
        v1736 = i$$39 < l$$10;
      }
      if (!set$$3) {
        set$$3 = context$$4.getElementsByTagName("*");
      }
      return{set:set$$3, expr:expr$$4};
    }
    function v138(expr$$3, set$$2) {
      return JAM.call(Sizzle, null, [expr$$3, null, null, set$$2]);
    }
    function v137(results$$2) {
      if (sortOrder) {
        hasDuplicate = baseHasDuplicate;
        JAM.call(results$$2.sort, results$$2, [sortOrder]);
        if (hasDuplicate) {
          var i$$38 = 1;
          var v1740 = i$$38 < results$$2.length;
          for (;v1740;) {
            introspect(JAM.policy.p3) {
              var v3342 = results$$2[i$$38]
            }
            var v4366 = i$$38 - 1;
            introspect(JAM.policy.p3) {
              var v3343 = results$$2[v4366]
            }
            if (v3342 === v3343) {
              var v1738 = i$$38;
              i$$38 = i$$38 - 1;
              JAM.call(results$$2.splice, results$$2, [v1738, 1]);
            }
            i$$38++;
            v1740 = i$$38 < results$$2.length;
          }
        }
      }
      return results$$2;
    }
    function v136() {
      baseHasDuplicate = false;
      return 0;
    }
    function posProcess(selector$$9, context$$12) {
      var tmpSet = [];
      var later = "";
      var match$$35;
      var v1741;
      if (context$$12.nodeType) {
        v1741 = [context$$12];
      } else {
        v1741 = context$$12;
      }
      var root$$2 = v1741;
      var v1743 = match$$35 = Expr.match.PSEUDO.exec(selector$$9);
      for (;v1743;) {
        later = later + match$$35[0];
        selector$$9 = selector$$9.replace(Expr.match.PSEUDO, "");
        v1743 = match$$35 = Expr.match.PSEUDO.exec(selector$$9);
      }
      var v1744;
      var v4369 = Expr.relative;
      introspect(JAM.policy.p3) {
        var v3350 = v4369[selector$$9]
      }
      if (v3350) {
        v1744 = selector$$9 + "*";
      } else {
        v1744 = selector$$9;
      }
      selector$$9 = v1744;
      var i$$58 = 0;
      var l$$16 = root$$2.length;
      var v1746 = i$$58 < l$$16;
      for (;v1746;) {
        introspect(JAM.policy.p3) {
          var v1745 = root$$2[i$$58]
        }
        JAM.call(Sizzle, null, [selector$$9, v1745, tmpSet]);
        i$$58++;
        v1746 = i$$58 < l$$16;
      }
      return JAM.call(Sizzle.filter, Sizzle, [later, tmpSet]);
    }
    function isXML(elem$$75) {
      var v3351;
      if (elem$$75) {
        var v4370 = elem$$75.ownerDocument;
        if (!v4370) {
          v4370 = elem$$75;
        }
        v3351 = v4370;
      } else {
        v3351 = 0;
      }
      var documentElement = v3351.documentElement;
      var v1748;
      if (documentElement) {
        v1748 = documentElement.nodeName !== "HTML";
      } else {
        v1748 = false;
      }
      return v1748;
    }
    function makeArray(array$$15, results$$4) {
      var v1749 = Array.prototype.slice;
      array$$15 = JAM.call(v1749.call, v1749, [array$$15, 0]);
      if (results$$4) {
        var v1750 = results$$4.push;
        JAM.call(v1750.apply, v1750, [results$$4, array$$15]);
        return results$$4;
      }
      return array$$15;
    }
    function Sizzle(selector$$8, context$$3, results$$1, seed) {
      results$$1 = results$$1 || [];
      var origContext = context$$3 = context$$3 || document$$1;
      var v3354 = context$$3.nodeType !== 1;
      if (v3354) {
        v3354 = context$$3.nodeType !== 9;
      }
      if (v3354) {
        return[];
      }
      var v3355 = !selector$$8;
      if (!v3355) {
        v3355 = typeof selector$$8 !== "string";
      }
      if (v3355) {
        return results$$1;
      }
      var parts$$1 = [];
      var m;
      var set$$1;
      var checkSet$$2;
      var extra;
      var prune = true;
      var contextXML = isXML(context$$3);
      var soFar = selector$$8;
      chunker.exec("");
      var v1755 = (m = chunker.exec(soFar)) !== null;
      for (;v1755;) {
        soFar = m[3];
        JAM.call(parts$$1.push, parts$$1, [m[1]]);
        if (m[2]) {
          extra = m[3];
          break;
        }
        chunker.exec("");
        v1755 = (m = chunker.exec(soFar)) !== null;
      }
      var v3358 = parts$$1.length > 1;
      if (v3358) {
        v3358 = origPOS.exec(selector$$8);
      }
      if (v3358) {
        var v3359 = parts$$1.length === 2;
        if (v3359) {
          var v4377 = Expr.relative;
          var v4378 = parts$$1[0];
          introspect(JAM.policy.p3) {
            v3359 = v4377[v4378];
          }
        }
        if (v3359) {
          set$$1 = posProcess(parts$$1[0] + parts$$1[1], context$$3);
        } else {
          var v1757;
          var v4379 = Expr.relative;
          var v4380 = parts$$1[0];
          introspect(JAM.policy.p3) {
            var v3363 = v4379[v4380]
          }
          if (v3363) {
            v1757 = [context$$3];
          } else {
            v1757 = JAM.call(Sizzle, null, [parts$$1.shift(), context$$3]);
          }
          set$$1 = v1757;
          var v1759 = parts$$1.length;
          for (;v1759;) {
            selector$$8 = parts$$1.shift();
            var v3364 = Expr.relative;
            introspect(JAM.policy.p3) {
              var v1758 = v3364[selector$$8]
            }
            if (v1758) {
              selector$$8 = selector$$8 + parts$$1.shift();
            }
            set$$1 = posProcess(selector$$8, set$$1);
            v1759 = parts$$1.length;
          }
        }
      } else {
        var v5423 = !seed;
        if (v5423) {
          v5423 = parts$$1.length > 1;
        }
        var v5298 = v5423;
        if (v5298) {
          v5298 = context$$3.nodeType === 9;
        }
        var v5006 = v5298;
        if (v5006) {
          v5006 = !contextXML;
        }
        var v4381 = v5006;
        if (v4381) {
          v4381 = Expr.match.ID.test(parts$$1[0]);
        }
        var v3366 = v4381;
        if (v3366) {
          var v5009 = Expr.match.ID;
          var v5301 = parts$$1.length - 1;
          introspect(JAM.policy.p3) {
            var v5010 = parts$$1[v5301]
          }
          v3366 = !v5009.test(v5010);
        }
        if (v3366) {
          var ret$$9 = JAM.call(Sizzle.find, Sizzle, [parts$$1.shift(), context$$3, contextXML]);
          var v1762;
          if (ret$$9.expr) {
            v1762 = JAM.call(Sizzle.filter, Sizzle, [ret$$9.expr, ret$$9.set])[0];
          } else {
            v1762 = ret$$9.set[0];
          }
          context$$3 = v1762;
        }
        if (context$$3) {
          var v1764;
          if (seed) {
            v1764 = {expr:parts$$1.pop(), set:JAM.call(makeArray, null, [seed])};
          } else {
            var v3372 = parts$$1.pop();
            var v4385;
            var v5426 = parts$$1.length === 1;
            if (v5426) {
              var v5465 = parts$$1[0] === "~";
              if (!v5465) {
                v5465 = parts$$1[0] === "+";
              }
              v5426 = v5465;
            }
            var v5302 = v5426;
            if (v5302) {
              v5302 = context$$3.parentNode;
            }
            if (v5302) {
              v4385 = context$$3.parentNode;
            } else {
              v4385 = context$$3;
            }
            v1764 = JAM.call(Sizzle.find, Sizzle, [v3372, v4385, contextXML]);
          }
          ret$$9 = v1764;
          var v1765;
          if (ret$$9.expr) {
            v1765 = JAM.call(Sizzle.filter, Sizzle, [ret$$9.expr, ret$$9.set]);
          } else {
            v1765 = ret$$9.set;
          }
          set$$1 = v1765;
          if (parts$$1.length > 0) {
            checkSet$$2 = JAM.call(makeArray, null, [set$$1]);
          } else {
            prune = false;
          }
          var v1770 = parts$$1.length;
          for (;v1770;) {
            var cur$$2 = parts$$1.pop();
            var pop = cur$$2;
            var v4386 = Expr.relative;
            introspect(JAM.policy.p3) {
              var v3378 = v4386[cur$$2]
            }
            if (!v3378) {
              cur$$2 = "";
            } else {
              pop = parts$$1.pop();
            }
            if (pop == null) {
              pop = context$$3;
            }
            var v1769 = Expr.relative;
            JAM.call(JAM.get(v1769, cur$$2, JAM.policy.p3), v1769, [checkSet$$2, pop, contextXML]);
            v1770 = parts$$1.length;
          }
        } else {
          checkSet$$2 = parts$$1 = [];
        }
      }
      if (!checkSet$$2) {
        checkSet$$2 = set$$1;
      }
      if (!checkSet$$2) {
        JAM.call(Sizzle.error, Sizzle, [cur$$2 || selector$$8]);
      }
      if (JAM.call(toString$$1.call, toString$$1, [checkSet$$2]) === "[object Array]") {
        if (!prune) {
          var v1775 = results$$1.push;
          JAM.call(v1775.apply, v1775, [results$$1, checkSet$$2]);
        } else {
          var v3380 = context$$3;
          if (v3380) {
            v3380 = context$$3.nodeType === 1;
          }
          if (v3380) {
            var i$$37 = 0;
            introspect(JAM.policy.p3) {
              var v3381 = checkSet$$2[i$$37]
            }
            var v1778 = v3381 != null;
            for (;v1778;) {
              introspect(JAM.policy.p3) {
                var v3382 = checkSet$$2[i$$37]
              }
              if (v3382) {
                introspect(JAM.policy.p3) {
                  var v5012 = checkSet$$2[i$$37]
                }
                var v4388 = v5012 === true;
                if (!v4388) {
                  introspect(JAM.policy.p3) {
                    var v5427 = checkSet$$2[i$$37]
                  }
                  var v5013 = v5427.nodeType === 1;
                  if (v5013) {
                    introspect(JAM.policy.p3) {
                      var v5304 = checkSet$$2[i$$37]
                    }
                    v5013 = JAM.call(contains, null, [context$$3, v5304]);
                  }
                  v4388 = v5013;
                }
                v3382 = v4388;
              }
              if (v3382) {
                introspect(JAM.policy.p3) {
                  var v1776 = set$$1[i$$37]
                }
                JAM.call(results$$1.push, results$$1, [v1776]);
              }
              i$$37++;
              introspect(JAM.policy.p3) {
                var v3383 = checkSet$$2[i$$37]
              }
              v1778 = v3383 != null;
            }
          } else {
            i$$37 = 0;
            introspect(JAM.policy.p3) {
              var v3384 = checkSet$$2[i$$37]
            }
            var v1781 = v3384 != null;
            for (;v1781;) {
              introspect(JAM.policy.p3) {
                var v3385 = checkSet$$2[i$$37]
              }
              if (v3385) {
                introspect(JAM.policy.p3) {
                  var v5015 = checkSet$$2[i$$37]
                }
                v3385 = v5015.nodeType === 1;
              }
              if (v3385) {
                introspect(JAM.policy.p3) {
                  var v1779 = set$$1[i$$37]
                }
                JAM.call(results$$1.push, results$$1, [v1779]);
              }
              i$$37++;
              introspect(JAM.policy.p3) {
                var v3386 = checkSet$$2[i$$37]
              }
              v1781 = v3386 != null;
            }
          }
        }
      } else {
        JAM.call(makeArray, null, [checkSet$$2, results$$1]);
      }
      if (extra) {
        JAM.call(Sizzle, null, [extra, origContext, results$$1, seed]);
        JAM.call(Sizzle.uniqueSort, Sizzle, [results$$1]);
      }
      return results$$1;
    }
    function getText(elems$$5) {
      var ret$$8 = "";
      var elem$$33;
      var i$$34 = 0;
      introspect(JAM.policy.p3) {
        var v1787 = elems$$5[i$$34]
      }
      for (;v1787;) {
        introspect(JAM.policy.p3) {
          elem$$33 = elems$$5[i$$34];
        }
        var v3387 = elem$$33.nodeType === 3;
        if (!v3387) {
          v3387 = elem$$33.nodeType === 4;
        }
        if (v3387) {
          ret$$8 = ret$$8 + elem$$33.nodeValue;
        } else {
          if (elem$$33.nodeType !== 8) {
            ret$$8 = ret$$8 + getText(elem$$33.childNodes);
          }
        }
        i$$34++;
        introspect(JAM.policy.p3) {
          v1787 = elems$$5[i$$34];
        }
      }
      return ret$$8;
    }
    function dirNodeCheck(dir, cur, doneName, checkSet, nodeCheck, isXML$$1) {
      var i$$35 = 0;
      var l$$8 = checkSet.length;
      var v1792 = i$$35 < l$$8;
      for (;v1792;) {
        introspect(JAM.policy.p3) {
          var elem$$34 = checkSet[i$$35]
        }
        if (elem$$34) {
          introspect(JAM.policy.p3) {
            elem$$34 = elem$$34[dir];
          }
          var match$$4 = false;
          for (;elem$$34;) {
            if (elem$$34.sizcache === doneName) {
              var v1788 = elem$$34.sizset;
              introspect(JAM.policy.p3) {
                match$$4 = checkSet[v1788];
              }
              break;
            }
            var v3392 = elem$$34.nodeType === 1;
            if (v3392) {
              v3392 = !isXML$$1;
            }
            if (v3392) {
              elem$$34.sizcache = doneName;
              elem$$34.sizset = i$$35;
            }
            if (elem$$34.nodeName.toLowerCase() === cur) {
              match$$4 = elem$$34;
              break;
            }
            introspect(JAM.policy.p3) {
              elem$$34 = elem$$34[dir];
            }
          }
          introspect(JAM.policy.p2) {
            checkSet[i$$35] = match$$4;
          }
        }
        i$$35++;
        v1792 = i$$35 < l$$8;
      }
      return;
    }
    function dirCheck(dir$$1, cur$$1, doneName$$1, checkSet$$1, nodeCheck$$1, isXML$$2) {
      var i$$36 = 0;
      var l$$9 = checkSet$$1.length;
      var v1800 = i$$36 < l$$9;
      for (;v1800;) {
        introspect(JAM.policy.p3) {
          var elem$$35 = checkSet$$1[i$$36]
        }
        if (elem$$35) {
          introspect(JAM.policy.p3) {
            elem$$35 = elem$$35[dir$$1];
          }
          var match$$5 = false;
          for (;elem$$35;) {
            if (elem$$35.sizcache === doneName$$1) {
              var v1793 = elem$$35.sizset;
              introspect(JAM.policy.p3) {
                match$$5 = checkSet$$1[v1793];
              }
              break;
            }
            if (elem$$35.nodeType === 1) {
              if (!isXML$$2) {
                elem$$35.sizcache = doneName$$1;
                elem$$35.sizset = i$$36;
              }
              if (typeof cur$$1 !== "string") {
                if (elem$$35 === cur$$1) {
                  match$$5 = true;
                  break;
                }
              } else {
                if (JAM.call(Sizzle.filter, Sizzle, [cur$$1, [elem$$35]]).length > 0) {
                  match$$5 = elem$$35;
                  break;
                }
              }
            }
            introspect(JAM.policy.p3) {
              elem$$35 = elem$$35[dir$$1];
            }
          }
          introspect(JAM.policy.p2) {
            checkSet$$1[i$$36] = match$$5;
          }
        }
        i$$36++;
        v1800 = i$$36 < l$$9;
      }
      return;
    }
    var chunker = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;
    var done = 0;
    var toString$$1 = Object.prototype.toString;
    var hasDuplicate = false;
    var baseHasDuplicate = true;
    var v1802 = [0, 0];
    JAM.call(v1802.sort, v1802, [v136]);
    Sizzle.uniqueSort = v137;
    Sizzle.matches = v138;
    Sizzle.find = v139;
    Sizzle.filter = v140;
    Sizzle.error = v141;
    var Expr = Sizzle.selectors = {order:["ID", "NAME", "TAG"], match:{ID:/#((?:[\w\u00c0-\uFFFF-]|\\.)+)/, CLASS:/\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/, NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/, ATTR:/\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/, TAG:/^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/, CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/, POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/, PSEUDO:/:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/}, 
    leftMatch:{}, attrMap:{"class":"className", "for":"htmlFor"}, attrHandle:{href:v142}, relative:{"+":v143, ">":v144, "":v145, "~":v146}, find:{ID:v147, NAME:v148, TAG:v149}, preFilter:{CLASS:v150, ID:v151, TAG:v152, CHILD:v153, ATTR:v154, PSEUDO:v155, POS:v156}, filters:{enabled:v157, disabled:v158, checked:v159, selected:v160, parent:v161, empty:v162, has:v163, header:v164, text:v165, radio:v166, checkbox:v167, file:v168, password:v169, submit:v170, image:v171, reset:v172, button:v173, input:v174}, 
    setFilters:{first:v175, last:v176, even:v177, odd:v178, lt:v179, gt:v180, nth:v181, eq:v182}, filter:{PSEUDO:v183, CHILD:v184, ID:v185, TAG:v186, CLASS:v187, ATTR:v188, POS:v189}};
    var origPOS = Expr.match.POS;
    var type$$53;
    for (type$$53 in Expr.match) {
      var v1814 = Expr.match;
      var v1815 = type$$53;
      var v5305 = Expr.match;
      introspect(JAM.policy.p3) {
        var v5017 = v5305[type$$53]
      }
      var v5546 = new RegExp(v5017.source + /(?![^\[]*\])(?![^\(]*\))/.source);
      JAM.set(v1814, v1815, v5546, JAM.policy.p2);
      var v1816 = Expr.leftMatch;
      var v1817 = type$$53;
      var v4399 = /(^(?:.|\r|\n)*?)/.source;
      var v5428 = Expr.match;
      introspect(JAM.policy.p3) {
        var v5306 = v5428[type$$53]
      }
      var v5547 = new RegExp(v4399 + v5306.source.replace(/\\(\d+)/g, v190));
      JAM.set(v1816, v1817, v5547, JAM.policy.p2);
    }
    try {
      var v4401 = Array.prototype.slice;
      JAM.call(v4401.call, v4401, [document$$1.documentElement.childNodes, 0])[0].nodeType;
    } catch (e$$20) {
      makeArray = v191;
    }
    var sortOrder;
    if (document$$1.documentElement.compareDocumentPosition) {
      sortOrder = v192;
    } else {
      if ("sourceIndex" in document$$1.documentElement) {
        sortOrder = v193;
      } else {
        if (document$$1.createRange) {
          sortOrder = v194;
        }
      }
    }
    v197();
    v200();
    if (document$$1.querySelectorAll) {
      v202();
    }
    v204();
    var v1824;
    if (document$$1.compareDocumentPosition) {
      v1824 = v205;
    } else {
      v1824 = v206;
    }
    var contains = v1824;
    jQuery$$1.find = Sizzle;
    jQuery$$1.expr = Sizzle.selectors;
    jQuery$$1.expr[":"] = jQuery$$1.expr.filters;
    jQuery$$1.unique = Sizzle.uniqueSort;
    jQuery$$1.text = getText;
    jQuery$$1.isXMLDoc = isXML;
    jQuery$$1.contains = contains;
    return;
  }
  function v135() {
    var id$$3;
    for (id$$3 in jQuery$$1.cache) {
      var v4403 = jQuery$$1.cache;
      introspect(JAM.policy.p3) {
        var v3405 = v4403[id$$3]
      }
      if (v3405.handle) {
        try {
          var v1826 = jQuery$$1.event;
          var v5021 = jQuery$$1.cache;
          introspect(JAM.policy.p3) {
            var v4404 = v5021[id$$3]
          }
          JAM.call(v1826.remove, v1826, [v4404.handle.elem]);
        } catch (e$$19) {
        }
      }
    }
    return;
  }
  function v134(i$$33, name$$42) {
    function v133(fn$$13) {
      var v1830;
      if (fn$$13) {
        v1830 = JAM.call(this.bind, this, [name$$42, fn$$13]);
      } else {
        v1830 = JAM.call(this.trigger, this, [name$$42]);
      }
      return v1830;
    }
    JAM.set(jQuery$$1.fn, name$$42, v133, JAM.policy.p2);
    if (jQuery$$1.attrFn) {
      JAM.set(jQuery$$1.attrFn, name$$42, true, JAM.policy.p2);
    }
    return;
  }
  function v132(i$$31, name$$41) {
    function v131(types$$4, data$$37, fn$$12, origSelector) {
      function v130() {
        var v1834 = jQuery$$1.event;
        JAM.call(v1834.add, v1834, [this, liveConvert(type$$52, selector$$7), {data:data$$37, selector:selector$$7, handler:fn$$12, origType:type$$52, origHandler:fn$$12, preType:preType}]);
        return;
      }
      var type$$52;
      var i$$32 = 0;
      var match$$3;
      var namespaces$$9;
      var preType;
      var v1837 = origSelector;
      if (!v1837) {
        v1837 = this.selector;
      }
      var selector$$7 = v1837;
      var v1838;
      if (origSelector) {
        v1838 = this;
      } else {
        v1838 = jQuery$$1(this.context);
      }
      var context$$2 = v1838;
      if (JAM.call(jQuery$$1.isFunction, jQuery$$1, [data$$37])) {
        fn$$12 = data$$37;
        data$$37 = undefined$$1;
      }
      types$$4 = (types$$4 || "").split(" ");
      var v4405 = i$$32;
      i$$32 = i$$32 + 1;
      introspect(JAM.policy.p3) {
        var v3409 = type$$52 = types$$4[v4405]
      }
      var v1849 = v3409 != null;
      for (;v1849;) {
        match$$3 = rnamespaces.exec(type$$52);
        namespaces$$9 = "";
        if (match$$3) {
          namespaces$$9 = match$$3[0];
          type$$52 = type$$52.replace(rnamespaces, "");
        }
        if (type$$52 === "hover") {
          JAM.call(types$$4.push, types$$4, ["mouseenter" + namespaces$$9, "mouseleave" + namespaces$$9]);
          var v4406 = i$$32;
          i$$32 = i$$32 + 1;
          introspect(JAM.policy.p3) {
            var v3410 = type$$52 = types$$4[v4406]
          }
          v1849 = v3410 != null;
          continue;
        }
        preType = type$$52;
        var v3411 = type$$52 === "focus";
        if (!v3411) {
          v3411 = type$$52 === "blur";
        }
        if (v3411) {
          introspect(JAM.policy.p3) {
            var v3412 = liveMap[type$$52]
          }
          JAM.call(types$$4.push, types$$4, [v3412 + namespaces$$9]);
          type$$52 = type$$52 + namespaces$$9;
        } else {
          introspect(JAM.policy.p3) {
            var v3413 = liveMap[type$$52]
          }
          if (!v3413) {
            v3413 = type$$52;
          }
          type$$52 = v3413 + namespaces$$9;
        }
        if (name$$41 === "live") {
          JAM.call(context$$2.each, context$$2, [v130]);
        } else {
          JAM.call(context$$2.unbind, context$$2, [liveConvert(type$$52, selector$$7), fn$$12]);
        }
        var v4409 = i$$32;
        i$$32 = i$$32 + 1;
        introspect(JAM.policy.p3) {
          var v3414 = type$$52 = types$$4[v4409]
        }
        v1849 = v3414 != null;
      }
      return this;
    }
    JAM.set(jQuery$$1.fn, name$$41, v131, JAM.policy.p2);
    return;
  }
  function v129(fnOver, fnOut) {
    var v1851 = JAM.call(this.mouseenter, this, [fnOver]);
    return JAM.call(v1851.mouseleave, v1851, [fnOut || fnOver]);
  }
  function v128(fn$$11) {
    function v127(event$$9) {
      var v3415 = JAM.call(jQuery$$1.data, jQuery$$1, [this, "lastToggle" + fn$$11.guid]);
      if (!v3415) {
        v3415 = 0;
      }
      var lastToggle = v3415 % i$$30;
      JAM.call(jQuery$$1.data, jQuery$$1, [this, "lastToggle" + fn$$11.guid, lastToggle + 1]);
      event$$9.preventDefault();
      introspect(JAM.policy.p3) {
        var v3417 = args$$5[lastToggle]
      }
      var v1856 = JAM.call(v3417.apply, v3417, [this, arguments]);
      if (!v1856) {
        v1856 = false;
      }
      return v1856;
    }
    var args$$5 = arguments;
    var i$$30 = 1;
    var v1858 = i$$30 < args$$5.length;
    for (;v1858;) {
      var v3420 = i$$30;
      i$$30 = i$$30 + 1;
      introspect(JAM.policy.p3) {
        var v1857 = args$$5[v3420]
      }
      JAM.call(jQuery$$1.proxy, jQuery$$1, [fn$$11, v1857]);
      v1858 = i$$30 < args$$5.length;
    }
    return JAM.call(this.click, this, [JAM.call(jQuery$$1.proxy, jQuery$$1, [fn$$11, v127])]);
  }
  function v126(type$$51, data$$36) {
    if (this[0]) {
      var event$$8 = JAM.call(jQuery$$1.Event, jQuery$$1, [type$$51]);
      event$$8.preventDefault();
      event$$8.stopPropagation();
      var v1860 = jQuery$$1.event;
      JAM.call(v1860.trigger, v1860, [event$$8, data$$36, this[0]]);
      return event$$8.result;
    }
    return;
  }
  function v125(type$$50, data$$35) {
    function v124() {
      var v1863 = jQuery$$1.event;
      JAM.call(v1863.trigger, v1863, [type$$50, data$$35, this]);
      return;
    }
    return JAM.call(this.each, this, [v124]);
  }
  function v123(selector$$6, types$$3, fn$$10) {
    if (arguments.length === 0) {
      return JAM.call(this.unbind, this, ["live"]);
    } else {
      return JAM.call(this.die, this, [types$$3, null, fn$$10, selector$$6]);
    }
    return;
  }
  function v122(selector$$5, types$$2, data$$34, fn$$9) {
    return JAM.call(this.live, this, [types$$2, data$$34, fn$$9, selector$$5]);
  }
  function v121(type$$49, fn$$8) {
    var v3423 = typeof type$$49 === "object";
    if (v3423) {
      v3423 = !type$$49.preventDefault;
    }
    if (v3423) {
      var key$$19;
      for (key$$19 in type$$49) {
        introspect(JAM.policy.p3) {
          var v1865 = type$$49[key$$19]
        }
        JAM.call(this.unbind, this, [key$$19, v1865]);
      }
    } else {
      var i$$29 = 0;
      var l$$7 = this.length;
      var v1868 = i$$29 < l$$7;
      for (;v1868;) {
        var v1866 = jQuery$$1.event;
        introspect(JAM.policy.p3) {
          var v1867 = this[i$$29]
        }
        JAM.call(v1866.remove, v1866, [v1867, type$$49, fn$$8]);
        i$$29++;
        v1868 = i$$29 < l$$7;
      }
    }
    return this;
  }
  function v120(i$$27, name$$40) {
    function v119(type$$48, data$$33, fn$$7) {
      function v118(event$$7) {
        var v1870 = jQuery$$1(this);
        JAM.call(v1870.unbind, v1870, [event$$7, handler$$7]);
        return JAM.call(fn$$7.apply, fn$$7, [this, arguments]);
      }
      if (typeof type$$48 === "object") {
        var key$$18;
        for (key$$18 in type$$48) {
          introspect(JAM.policy.p3) {
            var v1871 = type$$48[key$$18]
          }
          JAM.call(JAM.get(this, name$$40, JAM.policy.p3), this, [key$$18, data$$33, v1871, fn$$7]);
        }
        return this;
      }
      if (JAM.call(jQuery$$1.isFunction, jQuery$$1, [data$$33])) {
        fn$$7 = data$$33;
        data$$33 = undefined$$1;
      }
      var v1874;
      if (name$$40 === "one") {
        v1874 = JAM.call(jQuery$$1.proxy, jQuery$$1, [fn$$7, v118]);
      } else {
        v1874 = fn$$7;
      }
      var handler$$7 = v1874;
      var v3426 = type$$48 === "unload";
      if (v3426) {
        v3426 = name$$40 !== "one";
      }
      if (v3426) {
        JAM.call(this.one, this, [type$$48, data$$33, fn$$7]);
      } else {
        var i$$28 = 0;
        var l$$6 = this.length;
        var v1877 = i$$28 < l$$6;
        for (;v1877;) {
          var v1875 = jQuery$$1.event;
          introspect(JAM.policy.p3) {
            var v1876 = this[i$$28]
          }
          JAM.call(v1875.add, v1875, [v1876, type$$48, handler$$7, data$$33]);
          i$$28++;
          v1877 = i$$28 < l$$6;
        }
      }
      return this;
    }
    JAM.set(jQuery$$1.fn, name$$40, v119, JAM.policy.p2);
    return;
  }
  function v117(orig$$2, fix$$1) {
    function v116() {
      this.removeEventListener(orig$$2, handler$$6, true);
      return;
    }
    function v115() {
      this.addEventListener(orig$$2, handler$$6, true);
      return;
    }
    function handler$$6(e$$18) {
      var v1880 = jQuery$$1.event;
      e$$18 = JAM.call(v1880.fix, v1880, [e$$18]);
      e$$18.type = fix$$1;
      var v1881 = jQuery$$1.event.handle;
      return JAM.call(v1881.call, v1881, [this, e$$18]);
    }
    JAM.set(jQuery$$1.event.special, fix$$1, {setup:v115, teardown:v116}, JAM.policy.p2);
    return;
  }
  function v114(namespaces$$8) {
    var v1883 = jQuery$$1.event;
    JAM.call(v1883.remove, v1883, [this, ".specialChange"]);
    return formElems.test(this.nodeName);
  }
  function v113(data$$32, namespaces$$7) {
    if (this.type === "file") {
      return false;
    }
    var type$$47;
    for (type$$47 in changeFilters) {
      var v1886 = jQuery$$1.event;
      var v1887 = type$$47 + ".specialChange";
      introspect(JAM.policy.p3) {
        var v1888 = changeFilters[type$$47]
      }
      JAM.call(v1886.add, v1886, [this, v1887, v1888]);
    }
    return formElems.test(this.nodeName);
  }
  function v112(e$$17) {
    var elem$$32 = e$$17.target;
    JAM.call(jQuery$$1.data, jQuery$$1, [elem$$32, "_change_data", JAM.call(getVal, null, [elem$$32])]);
    return;
  }
  function v111(e$$16) {
    var elem$$31 = e$$16.target;
    var type$$46 = elem$$31.type;
    var v5023 = e$$16.keyCode === 13;
    if (v5023) {
      v5023 = elem$$31.nodeName.toLowerCase() !== "textarea";
    }
    var v4414 = v5023;
    if (!v4414) {
      var v5024 = e$$16.keyCode === 32;
      if (v5024) {
        var v5310 = type$$46 === "checkbox";
        if (!v5310) {
          v5310 = type$$46 === "radio";
        }
        v5024 = v5310;
      }
      v4414 = v5024;
    }
    var v3430 = v4414;
    if (!v3430) {
      v3430 = type$$46 === "select-multiple";
    }
    if (v3430) {
      return JAM.call(testChange.call, testChange, [this, e$$16]);
    }
    return;
  }
  function v110(e$$15) {
    var elem$$30 = e$$15.target;
    var type$$45 = elem$$30.type;
    var v4416 = type$$45 === "radio";
    if (!v4416) {
      v4416 = type$$45 === "checkbox";
    }
    var v3431 = v4416;
    if (!v3431) {
      v3431 = elem$$30.nodeName.toLowerCase() === "select";
    }
    if (v3431) {
      return JAM.call(testChange.call, testChange, [this, e$$15]);
    }
    return;
  }
  function testChange$$1(e$$14) {
    var elem$$29 = e$$14.target;
    var data$$31;
    var val$$2;
    var v3432 = !formElems.test(elem$$29.nodeName);
    if (!v3432) {
      v3432 = elem$$29.readOnly;
    }
    if (v3432) {
      return;
    }
    data$$31 = JAM.call(jQuery$$1.data, jQuery$$1, [elem$$29, "_change_data"]);
    val$$2 = JAM.call(getVal, null, [elem$$29]);
    var v3433 = e$$14.type !== "focusout";
    if (!v3433) {
      v3433 = elem$$29.type !== "radio";
    }
    if (v3433) {
      JAM.call(jQuery$$1.data, jQuery$$1, [elem$$29, "_change_data", val$$2]);
    }
    var v3434 = data$$31 === undefined$$1;
    if (!v3434) {
      v3434 = val$$2 === data$$31;
    }
    if (v3434) {
      return;
    }
    var v3435 = data$$31 != null;
    if (!v3435) {
      v3435 = val$$2;
    }
    if (v3435) {
      e$$14.type = "change";
      var v1896 = jQuery$$1.event;
      return JAM.call(v1896.trigger, v1896, [e$$14, arguments[1], elem$$29]);
    }
    return;
  }
  function v109(elem$$27) {
    function v108(elem$$28) {
      return elem$$28.selected;
    }
    var type$$44 = elem$$27.type;
    var val$$1 = elem$$27.value;
    var v3436 = type$$44 === "radio";
    if (!v3436) {
      v3436 = type$$44 === "checkbox";
    }
    if (v3436) {
      val$$1 = elem$$27.checked;
    } else {
      if (type$$44 === "select-multiple") {
        var v1899;
        if (elem$$27.selectedIndex > -1) {
          v1899 = JAM.call(jQuery$$1.map, jQuery$$1, [elem$$27.options, v108]).join("-");
        } else {
          v1899 = "";
        }
        val$$1 = v1899;
      } else {
        if (elem$$27.nodeName.toLowerCase() === "select") {
          val$$1 = elem$$27.selectedIndex;
        }
      }
    }
    return val$$1;
  }
  function v107(namespaces$$6) {
    var v1903 = jQuery$$1.event;
    JAM.call(v1903.remove, v1903, [this, ".specialSubmit"]);
    return;
  }
  function v106(data$$30, namespaces$$5) {
    function v105(e$$13) {
      var elem$$26 = e$$13.target;
      var type$$43 = elem$$26.type;
      var v5029 = type$$43 === "text";
      if (!v5029) {
        v5029 = type$$43 === "password";
      }
      var v4430 = v5029;
      if (v4430) {
        var v5312 = jQuery$$1(elem$$26);
        v4430 = JAM.call(v5312.closest, v5312, ["form"]).length;
      }
      var v3440 = v4430;
      if (v3440) {
        v3440 = e$$13.keyCode === 13;
      }
      if (v3440) {
        return trigger("submit", this, arguments);
      }
      return;
    }
    function v104(e$$12) {
      var elem$$25 = e$$12.target;
      var type$$42 = elem$$25.type;
      var v4432 = type$$42 === "submit";
      if (!v4432) {
        v4432 = type$$42 === "image";
      }
      var v3441 = v4432;
      if (v3441) {
        var v5032 = jQuery$$1(elem$$25);
        v3441 = JAM.call(v5032.closest, v5032, ["form"]).length;
      }
      if (v3441) {
        return trigger("submit", this, arguments);
      }
      return;
    }
    if (this.nodeName.toLowerCase() !== "form") {
      var v1906 = jQuery$$1.event;
      JAM.call(v1906.add, v1906, [this, "click.specialSubmit", v104]);
      var v1907 = jQuery$$1.event;
      JAM.call(v1907.add, v1907, [this, "keypress.specialSubmit", v105]);
    } else {
      return false;
    }
    return;
  }
  function v103(orig$$1, fix) {
    function v102(data$$29) {
      var v1909 = jQuery$$1.event;
      var v3443;
      var v5033 = data$$29;
      if (v5033) {
        v5033 = data$$29.selector;
      }
      if (v5033) {
        v3443 = delegate;
      } else {
        v3443 = withinElement;
      }
      JAM.call(v1909.remove, v1909, [this, fix, v3443]);
      return;
    }
    function v101(data$$28) {
      var v1911 = jQuery$$1.event;
      var v3444;
      var v5034 = data$$28;
      if (v5034) {
        v5034 = data$$28.selector;
      }
      if (v5034) {
        v3444 = delegate;
      } else {
        v3444 = withinElement;
      }
      JAM.call(v1911.add, v1911, [this, fix, v3444, orig$$1]);
      return;
    }
    JAM.set(jQuery$$1.event.special, orig$$1, {setup:v101, teardown:v102}, JAM.policy.p2);
    return;
  }
  function v100() {
    this.isImmediatePropagationStopped = returnTrue;
    this.stopPropagation();
    return;
  }
  function v99() {
    this.isPropagationStopped = returnTrue;
    var e$$10 = this.originalEvent;
    if (!e$$10) {
      return;
    }
    if (e$$10.stopPropagation) {
      e$$10.stopPropagation();
    }
    e$$10.cancelBubble = true;
    return;
  }
  function v98() {
    this.isDefaultPrevented = returnTrue;
    var e$$9 = this.originalEvent;
    if (!e$$9) {
      return;
    }
    if (e$$9.preventDefault) {
      e$$9.preventDefault();
    }
    e$$9.returnValue = false;
    return;
  }
  function v97(src$$2) {
    if (!this.preventDefault) {
      return JAM.new(jQuery$$1.Event, [src$$2]);
    }
    var v3447 = src$$2;
    if (v3447) {
      v3447 = src$$2.type;
    }
    if (v3447) {
      this.originalEvent = src$$2;
      this.type = src$$2.type;
    } else {
      this.type = src$$2;
    }
    var v5548 = now();
    this.timeStamp = v5548;
    JAM.set(this, expando, true, JAM.policy.p2);
    return;
  }
  function v96(elem$$24, type$$41, handle$$15) {
    JAM.call(elem$$24.detachEvent, elem$$24, ["on" + type$$41, handle$$15]);
    return;
  }
  function v95(elem$$23, type$$40, handle$$14) {
    elem$$23.removeEventListener(type$$40, handle$$14, false);
    return;
  }
  function v94(namespaces$$4, eventHandle$$2) {
    if (this.onbeforeunload === eventHandle$$2) {
      JAM.set(this, "onbeforeunload", null);
    }
    return;
  }
  function v93(data$$27, namespaces$$3, eventHandle$$1) {
    if (this.setInterval) {
      JAM.set(this, "onbeforeunload", eventHandle$$1);
    }
    return false;
  }
  function v92(handleObj$$5) {
    function v91() {
      if (type$$39 === this.origType.replace(rnamespaces, "")) {
        remove = false;
        return false;
      }
      return;
    }
    var remove = true;
    var type$$39 = handleObj$$5.origType.replace(rnamespaces, "");
    var v3451 = JAM.call(jQuery$$1.data, jQuery$$1, [this, "events"]).live;
    if (!v3451) {
      v3451 = [];
    }
    JAM.call(jQuery$$1.each, jQuery$$1, [v3451, v91]);
    if (remove) {
      var v1927 = jQuery$$1.event;
      JAM.call(v1927.remove, v1927, [this, handleObj$$5.origType, liveHandler]);
    }
    return;
  }
  function v90(handleObj$$4) {
    var v1929 = jQuery$$1.event;
    JAM.call(v1929.add, v1929, [this, handleObj$$4.origType, JAM.call(jQuery$$1.extend, jQuery$$1, [{}, handleObj$$4, {handler:liveHandler}])]);
    return;
  }
  function v89(event$$4) {
    introspect(JAM.policy.p3) {
      var v1932 = event$$4[expando]
    }
    if (v1932) {
      return event$$4;
    }
    var originalEvent = event$$4;
    event$$4 = JAM.call(jQuery$$1.Event, jQuery$$1, [originalEvent]);
    var i$$26 = this.props.length;
    var prop$$4;
    for (;i$$26;) {
      var v1934 = this.props;
      var v1935 = i$$26 = i$$26 - 1;
      introspect(JAM.policy.p3) {
        prop$$4 = v1934[v1935];
      }
      JAM.set(event$$4, prop$$4, JAM.get(originalEvent, prop$$4, JAM.policy.p4), JAM.policy.p4);
    }
    if (!event$$4.target) {
      var v1936 = event$$4.srcElement;
      if (!v1936) {
        v1936 = document$$1;
      }
      event$$4.target = v1936;
    }
    if (event$$4.target.nodeType === 3) {
      event$$4.target = event$$4.target.parentNode;
    }
    var v3456 = !event$$4.relatedTarget;
    if (v3456) {
      v3456 = event$$4.fromElement;
    }
    if (v3456) {
      var v1940;
      if (event$$4.fromElement === event$$4.target) {
        v1940 = event$$4.toElement;
      } else {
        v1940 = event$$4.fromElement;
      }
      event$$4.relatedTarget = v1940;
    }
    var v3458 = event$$4.pageX == null;
    if (v3458) {
      v3458 = event$$4.clientX != null;
    }
    if (v3458) {
      var doc$$2 = document$$1.documentElement;
      var body = document$$1.body;
      var v3459 = event$$4.clientX;
      var v5313 = doc$$2;
      if (v5313) {
        v5313 = doc$$2.scrollLeft;
      }
      var v5035 = v5313;
      if (!v5035) {
        var v5314 = body;
        if (v5314) {
          v5314 = body.scrollLeft;
        }
        v5035 = v5314;
      }
      var v4446 = v5035;
      if (!v4446) {
        v4446 = 0;
      }
      var v1942 = v3459 + v4446;
      var v5037 = doc$$2;
      if (v5037) {
        v5037 = doc$$2.clientLeft;
      }
      var v4447 = v5037;
      if (!v4447) {
        var v5038 = body;
        if (v5038) {
          v5038 = body.clientLeft;
        }
        v4447 = v5038;
      }
      var v3461 = v4447;
      if (!v3461) {
        v3461 = 0;
      }
      event$$4.pageX = v1942 - v3461;
      var v3462 = event$$4.clientY;
      var v5316 = doc$$2;
      if (v5316) {
        v5316 = doc$$2.scrollTop;
      }
      var v5040 = v5316;
      if (!v5040) {
        var v5317 = body;
        if (v5317) {
          v5317 = body.scrollTop;
        }
        v5040 = v5317;
      }
      var v4449 = v5040;
      if (!v4449) {
        v4449 = 0;
      }
      var v1944 = v3462 + v4449;
      var v5042 = doc$$2;
      if (v5042) {
        v5042 = doc$$2.clientTop;
      }
      var v4450 = v5042;
      if (!v4450) {
        var v5043 = body;
        if (v5043) {
          v5043 = body.clientTop;
        }
        v4450 = v5043;
      }
      var v3464 = v4450;
      if (!v3464) {
        v3464 = 0;
      }
      event$$4.pageY = v1944 - v3464;
    }
    var v3465 = !event$$4.which;
    if (v3465) {
      var v4453;
      var v5319 = event$$4.charCode;
      if (!v5319) {
        v5319 = event$$4.charCode === 0;
      }
      if (v5319) {
        v4453 = event$$4.charCode;
      } else {
        v4453 = event$$4.keyCode;
      }
      v3465 = v4453;
    }
    if (v3465) {
      var v1947 = event$$4.charCode;
      if (!v1947) {
        v1947 = event$$4.keyCode;
      }
      event$$4.which = v1947;
    }
    var v3467 = !event$$4.metaKey;
    if (v3467) {
      v3467 = event$$4.ctrlKey;
    }
    if (v3467) {
      event$$4.metaKey = event$$4.ctrlKey;
    }
    var v3468 = !event$$4.which;
    if (v3468) {
      v3468 = event$$4.button !== undefined$$1;
    }
    if (v3468) {
      var v1950;
      if (event$$4.button & 1) {
        v1950 = 1;
      } else {
        var v3469;
        if (event$$4.button & 2) {
          v3469 = 3;
        } else {
          var v4458;
          if (event$$4.button & 4) {
            v4458 = 2;
          } else {
            v4458 = 0;
          }
          v3469 = v4458;
        }
        v1950 = v3469;
      }
      event$$4.which = v1950;
    }
    return event$$4;
  }
  function v88(event$$3) {
    var all$$2;
    var handlers$$1;
    var namespaces$$2;
    var namespace$$2;
    var events$$4;
    var v1952 = arguments;
    var v3471 = jQuery$$1.event;
    var v4460 = event$$3;
    if (!v4460) {
      v4460 = window$$1.event;
    }
    var v5549 = JAM.call(v3471.fix, v3471, [v4460]);
    event$$3 = v1952[0] = v5549;
    event$$3.currentTarget = this;
    var v1953 = event$$3.type.indexOf(".") < 0;
    if (v1953) {
      v1953 = !event$$3.exclusive;
    }
    all$$2 = v1953;
    if (!all$$2) {
      namespaces$$2 = event$$3.type.split(".");
      var v5550 = namespaces$$2.shift();
      event$$3.type = v5550;
      namespace$$2 = new RegExp("(^|\\.)" + JAM.call(namespaces$$2.slice, namespaces$$2, [0]).sort().join("\\.(?:.*\\.)?") + "(\\.|$)");
    }
    events$$4 = JAM.call(jQuery$$1.data, jQuery$$1, [this, "events"]);
    var v1957 = event$$3.type;
    introspect(JAM.policy.p3) {
      handlers$$1 = events$$4[v1957];
    }
    if (events$$4 && handlers$$1) {
      handlers$$1 = JAM.call(handlers$$1.slice, handlers$$1, [0]);
      var j$$3 = 0;
      var l$$5 = handlers$$1.length;
      var v1963 = j$$3 < l$$5;
      for (;v1963;) {
        introspect(JAM.policy.p3) {
          var handleObj$$3 = handlers$$1[j$$3]
        }
        var v3476 = all$$2;
        if (!v3476) {
          v3476 = namespace$$2.test(handleObj$$3.namespace);
        }
        if (v3476) {
          event$$3.handler = handleObj$$3.handler;
          event$$3.data = handleObj$$3.data;
          event$$3.handleObj = handleObj$$3;
          var v1958 = handleObj$$3.handler;
          var ret$$7 = JAM.call(v1958.apply, v1958, [this, arguments]);
          if (ret$$7 !== undefined$$1) {
            event$$3.result = ret$$7;
            if (ret$$7 === false) {
              event$$3.preventDefault();
              event$$3.stopPropagation();
            }
          }
          if (event$$3.isImmediatePropagationStopped()) {
            break;
          }
        }
        j$$3++;
        v1963 = j$$3 < l$$5;
      }
    }
    return event$$3.result;
  }
  function v87(event$$2, data$$26, elem$$22) {
    function v86() {
      var v3477 = this.events;
      if (v3477) {
        var v4465 = this.events;
        introspect(JAM.policy.p3) {
          v3477 = v4465[type$$38];
        }
      }
      if (v3477) {
        var v1965 = jQuery$$1.event;
        JAM.call(v1965.trigger, v1965, [event$$2, data$$26, this.handle.elem]);
      }
      return;
    }
    var v1968 = event$$2.type;
    if (!v1968) {
      v1968 = event$$2;
    }
    var type$$38 = v1968;
    var bubbling = arguments[3];
    if (!bubbling) {
      var v1969;
      if (typeof event$$2 === "object") {
        var v3480;
        introspect(JAM.policy.p3) {
          var v4468 = event$$2[expando]
        }
        if (v4468) {
          v3480 = event$$2;
        } else {
          v3480 = JAM.call(jQuery$$1.extend, jQuery$$1, [JAM.call(jQuery$$1.Event, jQuery$$1, [type$$38]), event$$2]);
        }
        v1969 = v3480;
      } else {
        v1969 = JAM.call(jQuery$$1.Event, jQuery$$1, [type$$38]);
      }
      event$$2 = v1969;
      if (type$$38.indexOf("!") >= 0) {
        event$$2.type = type$$38 = JAM.call(type$$38.slice, type$$38, [0, -1]);
        event$$2.exclusive = true;
      }
      if (!elem$$22) {
        event$$2.stopPropagation();
        var v3483 = jQuery$$1.event.global;
        introspect(JAM.policy.p3) {
          var v1973 = v3483[type$$38]
        }
        if (v1973) {
          JAM.call(jQuery$$1.each, jQuery$$1, [jQuery$$1.cache, v86]);
        }
      }
      var v4470 = !elem$$22;
      if (!v4470) {
        v4470 = elem$$22.nodeType === 3;
      }
      var v3484 = v4470;
      if (!v3484) {
        v3484 = elem$$22.nodeType === 8;
      }
      if (v3484) {
        return undefined$$1;
      }
      event$$2.result = undefined$$1;
      event$$2.target = elem$$22;
      data$$26 = JAM.call(jQuery$$1.makeArray, jQuery$$1, [data$$26]);
      data$$26.unshift(event$$2);
    }
    event$$2.currentTarget = elem$$22;
    var handle$$13 = JAM.call(jQuery$$1.data, jQuery$$1, [elem$$22, "handle"]);
    if (handle$$13) {
      JAM.call(handle$$13.apply, handle$$13, [elem$$22, data$$26]);
    }
    var v1977 = elem$$22.parentNode;
    if (!v1977) {
      v1977 = elem$$22.ownerDocument;
    }
    var parent$$1 = v1977;
    try {
      var v5052 = elem$$22;
      if (v5052) {
        v5052 = elem$$22.nodeName;
      }
      var v4473 = v5052;
      if (v4473) {
        var v5053 = jQuery$$1.noData;
        var v5054 = elem$$22.nodeName.toLowerCase();
        introspect(JAM.policy.p3) {
          v4473 = v5053[v5054];
        }
      }
      if (!v4473) {
        var v4474 = "on" + type$$38;
        introspect(JAM.policy.p3) {
          var v3487 = elem$$22[v4474]
        }
        if (v3487) {
          var v5323 = "on" + type$$38;
          introspect(JAM.policy.p3) {
            var v5055 = elem$$22[v5323]
          }
          v3487 = JAM.call(v5055.apply, v5055, [elem$$22, data$$26]) === false;
        }
        if (v3487) {
          event$$2.result = false;
        }
      }
    } catch (e$$7) {
    }
    var v3488 = !event$$2.isPropagationStopped();
    if (v3488) {
      v3488 = parent$$1;
    }
    if (v3488) {
      var v1980 = jQuery$$1.event;
      JAM.call(v1980.trigger, v1980, [event$$2, data$$26, parent$$1, true]);
    } else {
      if (!event$$2.isDefaultPrevented()) {
        var target$$27 = event$$2.target;
        var old;
        var v1981 = JAM.call(jQuery$$1.nodeName, jQuery$$1, [target$$27, "a"]);
        if (v1981) {
          v1981 = type$$38 === "click";
        }
        var isClick = v1981;
        var v3490 = jQuery$$1.event.special;
        introspect(JAM.policy.p3) {
          var v1982 = v3490[type$$38]
        }
        if (!v1982) {
          v1982 = {};
        }
        var special$$3 = v1982;
        var v5056 = !special$$3._default;
        if (!v5056) {
          var v5433 = special$$3._default;
          v5056 = JAM.call(v5433.call, v5433, [elem$$22, event$$2]) === false;
        }
        var v4478 = v5056;
        if (v4478) {
          v4478 = !isClick;
        }
        var v3492 = v4478;
        if (v3492) {
          var v5327 = target$$27;
          if (v5327) {
            v5327 = target$$27.nodeName;
          }
          var v5057 = v5327;
          if (v5057) {
            var v5328 = jQuery$$1.noData;
            var v5329 = target$$27.nodeName.toLowerCase();
            introspect(JAM.policy.p3) {
              v5057 = v5328[v5329];
            }
          }
          v3492 = !v5057;
        }
        if (v3492) {
          try {
            introspect(JAM.policy.p3) {
              var v1986 = target$$27[type$$38]
            }
            if (v1986) {
              var v1983 = "on" + type$$38;
              introspect(JAM.policy.p3) {
                old = target$$27[v1983];
              }
              if (old) {
                JAM.set(target$$27, "on" + type$$38, null, JAM.policy.p2);
              }
              jQuery$$1.event.triggered = true;
              JAM.call(JAM.get(target$$27, type$$38, JAM.policy.p3), target$$27, []);
            }
          } catch (e$$8) {
          }
          if (old) {
            JAM.set(target$$27, "on" + type$$38, old, JAM.policy.p2);
          }
          jQuery$$1.event.triggered = false;
        }
      }
    }
    return;
  }
  function v85(elem$$21, types$$1, handler$$5, pos) {
    var v3493 = elem$$21.nodeType === 3;
    if (!v3493) {
      v3493 = elem$$21.nodeType === 8;
    }
    if (v3493) {
      return;
    }
    var ret$$6;
    var type$$37;
    var fn$$6;
    var i$$25 = 0;
    var all$$1;
    var namespaces$$1;
    var namespace$$1;
    var special$$2;
    var eventType$$2;
    var handleObj$$2;
    var origType;
    var elemData$$1 = JAM.call(jQuery$$1.data, jQuery$$1, [elem$$21]);
    var v1993 = elemData$$1;
    if (v1993) {
      v1993 = elemData$$1.events;
    }
    var events$$3 = v1993;
    var v3494 = !elemData$$1;
    if (!v3494) {
      v3494 = !events$$3;
    }
    if (v3494) {
      return;
    }
    var v3495 = types$$1;
    if (v3495) {
      v3495 = types$$1.type;
    }
    if (v3495) {
      handler$$5 = types$$1.handler;
      types$$1 = types$$1.type;
    }
    var v3496 = !types$$1;
    if (!v3496) {
      var v4484 = typeof types$$1 === "string";
      if (v4484) {
        v4484 = types$$1.charAt(0) === ".";
      }
      v3496 = v4484;
    }
    if (v3496) {
      types$$1 = types$$1 || "";
      for (type$$37 in events$$3) {
        var v1996 = jQuery$$1.event;
        JAM.call(v1996.remove, v1996, [elem$$21, type$$37 + types$$1]);
      }
      return;
    }
    types$$1 = types$$1.split(" ");
    var v3497 = i$$25;
    i$$25 = i$$25 + 1;
    introspect(JAM.policy.p3) {
      var v2021 = type$$37 = types$$1[v3497]
    }
    for (;v2021;) {
      origType = type$$37;
      handleObj$$2 = null;
      all$$1 = type$$37.indexOf(".") < 0;
      namespaces$$1 = [];
      if (!all$$1) {
        namespaces$$1 = type$$37.split(".");
        type$$37 = namespaces$$1.shift();
        namespace$$1 = new RegExp("(^|\\.)" + JAM.call(jQuery$$1.map, jQuery$$1, [JAM.call(namespaces$$1.slice, namespaces$$1, [0]).sort(), fcleanup]).join("\\.(?:.*\\.)?") + "(\\.|$)");
      }
      introspect(JAM.policy.p3) {
        eventType$$2 = events$$3[type$$37];
      }
      if (!eventType$$2) {
        var v3499 = i$$25;
        i$$25 = i$$25 + 1;
        introspect(JAM.policy.p3) {
          v2021 = type$$37 = types$$1[v3499];
        }
        continue;
      }
      if (!handler$$5) {
        var j$$2 = 0;
        var v2007 = j$$2 < eventType$$2.length;
        for (;v2007;) {
          introspect(JAM.policy.p3) {
            handleObj$$2 = eventType$$2[j$$2];
          }
          var v3501 = all$$1;
          if (!v3501) {
            v3501 = namespace$$1.test(handleObj$$2.namespace);
          }
          if (v3501) {
            var v2003 = jQuery$$1.event;
            JAM.call(v2003.remove, v2003, [elem$$21, origType, handleObj$$2.handler, j$$2]);
            var v2005 = j$$2;
            j$$2 = j$$2 - 1;
            JAM.call(eventType$$2.splice, eventType$$2, [v2005, 1]);
          }
          j$$2++;
          v2007 = j$$2 < eventType$$2.length;
        }
        var v3503 = i$$25;
        i$$25 = i$$25 + 1;
        introspect(JAM.policy.p3) {
          v2021 = type$$37 = types$$1[v3503];
        }
        continue;
      }
      var v3504 = jQuery$$1.event.special;
      introspect(JAM.policy.p3) {
        var v2009 = v3504[type$$37]
      }
      if (!v2009) {
        v2009 = {};
      }
      special$$2 = v2009;
      j$$2 = pos || 0;
      var v2017 = j$$2 < eventType$$2.length;
      for (;v2017;) {
        introspect(JAM.policy.p3) {
          handleObj$$2 = eventType$$2[j$$2];
        }
        if (handler$$5.guid === handleObj$$2.guid) {
          var v3509 = all$$1;
          if (!v3509) {
            v3509 = namespace$$1.test(handleObj$$2.namespace);
          }
          if (v3509) {
            if (pos == null) {
              var v2010 = j$$2;
              j$$2 = j$$2 - 1;
              JAM.call(eventType$$2.splice, eventType$$2, [v2010, 1]);
            }
            if (special$$2.remove) {
              var v2012 = special$$2.remove;
              JAM.call(v2012.call, v2012, [elem$$21, handleObj$$2]);
            }
          }
          if (pos != null) {
            break;
          }
        }
        j$$2++;
        v2017 = j$$2 < eventType$$2.length;
      }
      var v3511 = eventType$$2.length === 0;
      if (!v3511) {
        var v4493 = pos != null;
        if (v4493) {
          v4493 = eventType$$2.length === 1;
        }
        v3511 = v4493;
      }
      if (v3511) {
        var v3512 = !special$$2.teardown;
        if (!v3512) {
          var v5062 = special$$2.teardown;
          v3512 = JAM.call(v5062.call, v5062, [elem$$21, namespaces$$1]) === false;
        }
        if (v3512) {
          JAM.call(removeEvent, null, [elem$$21, type$$37, elemData$$1.handle]);
        }
        ret$$6 = null;
        delete events$$3[type$$37];
      }
      var v3513 = i$$25;
      i$$25 = i$$25 + 1;
      introspect(JAM.policy.p3) {
        v2021 = type$$37 = types$$1[v3513];
      }
    }
    if (JAM.call(jQuery$$1.isEmptyObject, jQuery$$1, [events$$3])) {
      var handle$$12 = elemData$$1.handle;
      if (handle$$12) {
        handle$$12.elem = null;
      }
      delete elemData$$1.events;
      delete elemData$$1.handle;
      if (JAM.call(jQuery$$1.isEmptyObject, jQuery$$1, [elemData$$1])) {
        JAM.call(jQuery$$1.removeData, jQuery$$1, [elem$$21]);
      }
    }
    return;
  }
  function v84(elem$$20, types, handler$$4, data$$25) {
    function v83() {
      var v2024;
      var v4498 = typeof jQuery$$1 !== "undefined";
      if (v4498) {
        v4498 = !jQuery$$1.event.triggered;
      }
      if (v4498) {
        var v3514 = jQuery$$1.event.handle;
        v2024 = JAM.call(v3514.apply, v3514, [eventHandle.elem, arguments]);
      } else {
        v2024 = undefined$$1;
      }
      return v2024;
    }
    var v3517 = elem$$20.nodeType === 3;
    if (!v3517) {
      v3517 = elem$$20.nodeType === 8;
    }
    if (v3517) {
      return;
    }
    var v3518 = elem$$20.setInterval;
    if (v3518) {
      var v4503 = elem$$20 !== window$$1;
      if (v4503) {
        v4503 = !elem$$20.frameElement;
      }
      v3518 = v4503;
    }
    if (v3518) {
      elem$$20 = window$$1;
    }
    var handleObjIn;
    var handleObj$$1;
    if (handler$$4.handler) {
      handleObjIn = handler$$4;
      handler$$4 = handleObjIn.handler;
    }
    if (!handler$$4.guid) {
      handler$$4.guid = jQuery$$1.guid;
      jQuery$$1.guid = jQuery$$1.guid + 1;
    }
    var elemData = JAM.call(jQuery$$1.data, jQuery$$1, [elem$$20]);
    if (!elemData) {
      return;
    }
    var v2030 = elemData.events;
    if (!v2030) {
      v2030 = {};
    }
    var events$$2 = elemData.events = v2030;
    var eventHandle = elemData.handle;
    if (!eventHandle) {
      elemData.handle = eventHandle = v83;
    }
    eventHandle.elem = elem$$20;
    types = types.split(" ");
    var type$$36;
    var i$$24 = 0;
    var namespaces;
    var v3522 = i$$24;
    i$$24 = i$$24 + 1;
    introspect(JAM.policy.p3) {
      var v2046 = type$$36 = types[v3522]
    }
    for (;v2046;) {
      var v2032;
      if (handleObjIn) {
        v2032 = JAM.call(jQuery$$1.extend, jQuery$$1, [{}, handleObjIn]);
      } else {
        v2032 = {handler:handler$$4, data:data$$25};
      }
      handleObj$$1 = v2032;
      if (type$$36.indexOf(".") > -1) {
        namespaces = type$$36.split(".");
        type$$36 = namespaces.shift();
        var v2033 = handleObj$$1;
        var v5551 = JAM.call(namespaces.slice, namespaces, [0]).sort().join(".");
        v2033.namespace = v5551;
      } else {
        namespaces = [];
        handleObj$$1.namespace = "";
      }
      handleObj$$1.type = type$$36;
      handleObj$$1.guid = handler$$4.guid;
      introspect(JAM.policy.p3) {
        var handlers = events$$2[type$$36]
      }
      var v3525 = jQuery$$1.event.special;
      introspect(JAM.policy.p3) {
        var v2035 = v3525[type$$36]
      }
      if (!v2035) {
        v2035 = {};
      }
      var special$$1 = v2035;
      if (!handlers) {
        handlers = JAM.set(events$$2, type$$36, [], JAM.policy.p2);
        var v3527 = !special$$1.setup;
        if (!v3527) {
          var v5066 = special$$1.setup;
          v3527 = JAM.call(v5066.call, v5066, [elem$$20, data$$25, namespaces, eventHandle]) === false;
        }
        if (v3527) {
          if (elem$$20.addEventListener) {
            elem$$20.addEventListener(type$$36, eventHandle, false);
          } else {
            if (elem$$20.attachEvent) {
              JAM.call(elem$$20.attachEvent, elem$$20, ["on" + type$$36, eventHandle]);
            }
          }
        }
      }
      if (special$$1.add) {
        var v2041 = special$$1.add;
        JAM.call(v2041.call, v2041, [elem$$20, handleObj$$1]);
        if (!handleObj$$1.handler.guid) {
          handleObj$$1.handler.guid = handler$$4.guid;
        }
      }
      JAM.call(handlers.push, handlers, [handleObj$$1]);
      JAM.set(jQuery$$1.event.global, type$$36, true, JAM.policy.p2);
      var v3530 = i$$24;
      i$$24 = i$$24 + 1;
      introspect(JAM.policy.p3) {
        v2046 = type$$36 = types[v3530];
      }
    }
    elem$$20 = null;
    return;
  }
  function v82(elem$$19, name$$39, value$$36, pass$$1) {
    var v4510 = !elem$$19;
    if (!v4510) {
      v4510 = elem$$19.nodeType === 3;
    }
    var v3531 = v4510;
    if (!v3531) {
      v3531 = elem$$19.nodeType === 8;
    }
    if (v3531) {
      return undefined$$1;
    }
    var v3532 = pass$$1;
    if (v3532) {
      v3532 = name$$39 in jQuery$$1.attrFn;
    }
    if (v3532) {
      var v2048 = jQuery$$1(elem$$19);
      return JAM.call(JAM.get(v2048, name$$39, JAM.policy.p3), v2048, [value$$36]);
    }
    var v2050 = elem$$19.nodeType !== 1;
    if (!v2050) {
      v2050 = !JAM.call(jQuery$$1.isXMLDoc, jQuery$$1, [elem$$19]);
    }
    var notxml = v2050;
    var set = value$$36 !== undefined$$1;
    var v3536 = notxml;
    if (v3536) {
      var v4514 = jQuery$$1.props;
      introspect(JAM.policy.p3) {
        v3536 = v4514[name$$39];
      }
    }
    var v2051 = v3536;
    if (!v2051) {
      v2051 = name$$39;
    }
    name$$39 = v2051;
    if (elem$$19.nodeType === 1) {
      var special = rspecialurl.test(name$$39);
      var v3539 = name$$39 === "selected";
      if (v3539) {
        v3539 = !jQuery$$1.support.optSelected;
      }
      if (v3539) {
        var parent = elem$$19.parentNode
      }
      var v4516 = name$$39 in elem$$19;
      if (v4516) {
        v4516 = notxml;
      }
      var v3540 = v4516;
      if (v3540) {
        v3540 = !special;
      }
      if (v3540) {
        if (set) {
          var v4517 = name$$39 === "type";
          if (v4517) {
            v4517 = rtype.test(elem$$19.nodeName);
          }
          var v3541 = v4517;
          if (v3541) {
            v3541 = elem$$19.parentNode;
          }
          if (v3541) {
            JAM.call(jQuery$$1.error, jQuery$$1, ["type property can't be changed"]);
          }
          JAM.set(elem$$19, name$$39, value$$36, JAM.policy.p2);
        }
        var v3542 = JAM.call(jQuery$$1.nodeName, jQuery$$1, [elem$$19, "form"]);
        if (v3542) {
          v3542 = elem$$19.getAttributeNode(name$$39);
        }
        if (v3542) {
          return elem$$19.getAttributeNode(name$$39).nodeValue;
        }
        if (name$$39 === "tabIndex") {
          var attributeNode = elem$$19.getAttributeNode("tabIndex");
          var v2056;
          var v4518 = attributeNode;
          if (v4518) {
            v4518 = attributeNode.specified;
          }
          if (v4518) {
            v2056 = attributeNode.value;
          } else {
            var v3543;
            var v5071 = rfocusable.test(elem$$19.nodeName);
            if (!v5071) {
              var v5333 = rclickable.test(elem$$19.nodeName);
              if (v5333) {
                v5333 = elem$$19.href;
              }
              v5071 = v5333;
            }
            if (v5071) {
              v3543 = 0;
            } else {
              v3543 = undefined$$1;
            }
            v2056 = v3543;
          }
          return v2056;
        }
        introspect(JAM.policy.p3) {
          return elem$$19[name$$39];
        }
      }
      var v4520 = !jQuery$$1.support.style;
      if (v4520) {
        v4520 = notxml;
      }
      var v3545 = v4520;
      if (v3545) {
        v3545 = name$$39 === "style";
      }
      if (v3545) {
        if (set) {
          elem$$19.style.cssText = "" + value$$36;
        }
        return elem$$19.style.cssText;
      }
      if (set) {
        JAM.call(elem$$19.setAttribute, elem$$19, [name$$39, "" + value$$36]);
      }
      var v2063;
      var v5073 = !jQuery$$1.support.hrefNormalized;
      if (v5073) {
        v5073 = notxml;
      }
      var v4521 = v5073;
      if (v4521) {
        v4521 = special;
      }
      if (v4521) {
        v2063 = elem$$19.getAttribute(name$$39, 2);
      } else {
        v2063 = elem$$19.getAttribute(name$$39);
      }
      var attr = v2063;
      var v2064;
      if (attr === null) {
        v2064 = undefined$$1;
      } else {
        v2064 = attr;
      }
      return v2064;
    }
    return JAM.call(jQuery$$1.style, jQuery$$1, [elem$$19, name$$39, value$$36]);
  }
  function v81(value$$35) {
    function v80(i$$23) {
      function v79() {
        this.selected = JAM.call(jQuery$$1.inArray, jQuery$$1, [jQuery$$1(this).val(), values$$5]) >= 0;
        return;
      }
      var self$$5 = jQuery$$1(this);
      var val = value$$35;
      if (this.nodeType !== 1) {
        return;
      }
      if (isFunction) {
        val = JAM.call(value$$35.call, value$$35, [this, i$$23, self$$5.val()]);
      }
      if (typeof val === "number") {
        val = val + "";
      }
      var v3551 = JAM.call(jQuery$$1.isArray, jQuery$$1, [val]);
      if (v3551) {
        v3551 = rradiocheck.test(this.type);
      }
      if (v3551) {
        this.checked = JAM.call(jQuery$$1.inArray, jQuery$$1, [self$$5.val(), val]) >= 0;
      } else {
        if (JAM.call(jQuery$$1.nodeName, jQuery$$1, [this, "select"])) {
          var values$$5 = JAM.call(jQuery$$1.makeArray, jQuery$$1, [val]);
          var v2071 = jQuery$$1("option", this);
          JAM.call(v2071.each, v2071, [v79]);
          if (!values$$5.length) {
            this.selectedIndex = -1;
          }
        } else {
          this.value = val;
        }
      }
      return;
    }
    if (value$$35 === undefined$$1) {
      var elem$$18 = this[0];
      if (elem$$18) {
        if (JAM.call(jQuery$$1.nodeName, jQuery$$1, [elem$$18, "option"])) {
          var v2075;
          var v5074 = elem$$18.attributes.value;
          if (!v5074) {
            v5074 = {};
          }
          if (v5074.specified) {
            v2075 = elem$$18.value;
          } else {
            v2075 = elem$$18.text;
          }
          return v2075;
        }
        if (JAM.call(jQuery$$1.nodeName, jQuery$$1, [elem$$18, "select"])) {
          var index$$39 = elem$$18.selectedIndex;
          var values$$4 = [];
          var options$$2 = elem$$18.options;
          var one = elem$$18.type === "select-one";
          if (index$$39 < 0) {
            return null;
          }
          var v2079;
          if (one) {
            v2079 = index$$39;
          } else {
            v2079 = 0;
          }
          var i$$22 = v2079;
          var v2080;
          if (one) {
            v2080 = index$$39 + 1;
          } else {
            v2080 = options$$2.length;
          }
          var max = v2080;
          var v2083 = i$$22 < max;
          for (;v2083;) {
            introspect(JAM.policy.p3) {
              var option = options$$2[i$$22]
            }
            if (option.selected) {
              value$$35 = jQuery$$1(option).val();
              if (one) {
                return value$$35;
              }
              JAM.call(values$$4.push, values$$4, [value$$35]);
            }
            i$$22++;
            v2083 = i$$22 < max;
          }
          return values$$4;
        }
        var v3555 = rradiocheck.test(elem$$18.type);
        if (v3555) {
          v3555 = !jQuery$$1.support.checkOn;
        }
        if (v3555) {
          var v2085;
          if (elem$$18.getAttribute("value") === null) {
            v2085 = "on";
          } else {
            v2085 = elem$$18.value;
          }
          return v2085;
        }
        var v3557 = elem$$18.value;
        if (!v3557) {
          v3557 = "";
        }
        return v3557.replace(rreturn, "");
      }
      return undefined$$1;
    }
    var isFunction = JAM.call(jQuery$$1.isFunction, jQuery$$1, [value$$35]);
    return JAM.call(this.each, this, [v80]);
  }
  function v78(selector$$4) {
    var className$$3 = " " + selector$$4 + " ";
    var i$$21 = 0;
    var l$$4 = this.length;
    var v2091 = i$$21 < l$$4;
    for (;v2091;) {
      introspect(JAM.policy.p3) {
        var v5466 = this[i$$21]
      }
      if ((" " + v5466.className + " ").replace(rclass, " ").indexOf(className$$3) > -1) {
        return true;
      }
      i$$21++;
      v2091 = i$$21 < l$$4;
    }
    return false;
  }
  function v77(value$$34, stateVal) {
    function v76() {
      if (type$$35 === "string") {
        var className$$2;
        var i$$20 = 0;
        var self$$4 = jQuery$$1(this);
        var state = stateVal;
        var classNames$$3 = value$$34.split(rspace);
        var v3559 = i$$20;
        i$$20 = i$$20 + 1;
        introspect(JAM.policy.p3) {
          var v2094 = className$$2 = classNames$$3[v3559]
        }
        for (;v2094;) {
          var v2092;
          if (isBool) {
            v2092 = state;
          } else {
            v2092 = !JAM.call(self$$4.hasClass, self$$4, [className$$2]);
          }
          state = v2092;
          var v3561;
          if (state) {
            v3561 = "addClass";
          } else {
            v3561 = "removeClass";
          }
          JAM.call(JAM.get(self$$4, v3561, JAM.policy.p3), self$$4, [className$$2]);
          var v3562 = i$$20;
          i$$20 = i$$20 + 1;
          introspect(JAM.policy.p3) {
            v2094 = className$$2 = classNames$$3[v3562];
          }
        }
      } else {
        var v3563 = type$$35 === "undefined";
        if (!v3563) {
          v3563 = type$$35 === "boolean";
        }
        if (v3563) {
          if (this.className) {
            JAM.call(jQuery$$1.data, jQuery$$1, [this, "__className__", this.className]);
          }
          var v2097;
          var v4531 = this.className;
          if (!v4531) {
            v4531 = value$$34 === false;
          }
          if (v4531) {
            v2097 = "";
          } else {
            var v3564 = JAM.call(jQuery$$1.data, jQuery$$1, [this, "__className__"]);
            if (!v3564) {
              v3564 = "";
            }
            v2097 = v3564;
          }
          this.className = v2097;
        }
      }
      return;
    }
    function v75(i$$19) {
      var self$$3 = jQuery$$1(this);
      JAM.call(self$$3.toggleClass, self$$3, [JAM.call(value$$34.call, value$$34, [this, i$$19, JAM.call(self$$3.attr, self$$3, ["class"]), stateVal]), stateVal]);
      return;
    }
    var type$$35 = typeof value$$34;
    var isBool = typeof stateVal === "boolean";
    if (JAM.call(jQuery$$1.isFunction, jQuery$$1, [value$$34])) {
      return JAM.call(this.each, this, [v75]);
    }
    return JAM.call(this.each, this, [v76]);
  }
  function v74(value$$33) {
    function v73(i$$18) {
      var self$$2 = jQuery$$1(this);
      JAM.call(self$$2.removeClass, self$$2, [JAM.call(value$$33.call, value$$33, [this, i$$18, JAM.call(self$$2.attr, self$$2, ["class"])])]);
      return;
    }
    if (JAM.call(jQuery$$1.isFunction, jQuery$$1, [value$$33])) {
      return JAM.call(this.each, this, [v73]);
    }
    var v4533 = value$$33;
    if (v4533) {
      v4533 = typeof value$$33 === "string";
    }
    var v3568 = v4533;
    if (!v3568) {
      v3568 = value$$33 === undefined$$1;
    }
    if (v3568) {
      var classNames$$2 = (value$$33 || "").split(rspace);
      var i$$17 = 0;
      var l$$3 = this.length;
      var v2111 = i$$17 < l$$3;
      for (;v2111;) {
        introspect(JAM.policy.p3) {
          var elem$$17 = this[i$$17]
        }
        var v3569 = elem$$17.nodeType === 1;
        if (v3569) {
          v3569 = elem$$17.className;
        }
        if (v3569) {
          if (value$$33) {
            var className$$1 = (" " + elem$$17.className + " ").replace(rclass, " ");
            var c$$1 = 0;
            var cl$$1 = classNames$$2.length;
            var v2108 = c$$1 < cl$$1;
            for (;v2108;) {
              introspect(JAM.policy.p3) {
                var v4537 = classNames$$2[c$$1]
              }
              className$$1 = className$$1.replace(" " + v4537 + " ", " ");
              c$$1++;
              v2108 = c$$1 < cl$$1;
            }
            var v2109 = elem$$17;
            var v5552 = JAM.call(jQuery$$1.trim, jQuery$$1, [className$$1]);
            v2109.className = v5552;
          } else {
            elem$$17.className = "";
          }
        }
        i$$17++;
        v2111 = i$$17 < l$$3;
      }
    }
    return this;
  }
  function v72(value$$32) {
    function v71(i$$16) {
      var self$$1 = jQuery$$1(this);
      JAM.call(self$$1.addClass, self$$1, [JAM.call(value$$32.call, value$$32, [this, i$$16, JAM.call(self$$1.attr, self$$1, ["class"])])]);
      return;
    }
    if (JAM.call(jQuery$$1.isFunction, jQuery$$1, [value$$32])) {
      return JAM.call(this.each, this, [v71]);
    }
    var v3573 = value$$32;
    if (v3573) {
      v3573 = typeof value$$32 === "string";
    }
    if (v3573) {
      var classNames$$1 = (value$$32 || "").split(rspace);
      var i$$15 = 0;
      var l$$2 = this.length;
      var v2122 = i$$15 < l$$2;
      for (;v2122;) {
        introspect(JAM.policy.p3) {
          var elem$$16 = this[i$$15]
        }
        if (elem$$16.nodeType === 1) {
          if (!elem$$16.className) {
            elem$$16.className = value$$32;
          } else {
            var className = " " + elem$$16.className + " ";
            var setClass = elem$$16.className;
            var c = 0;
            var cl = classNames$$1.length;
            var v2118 = c < cl;
            for (;v2118;) {
              introspect(JAM.policy.p3) {
                var v5340 = classNames$$1[c]
              }
              if (className.indexOf(" " + v5340 + " ") < 0) {
                introspect(JAM.policy.p3) {
                  var v4540 = classNames$$1[c]
                }
                setClass = setClass + (" " + v4540);
              }
              c++;
              v2118 = c < cl;
            }
            var v2119 = elem$$16;
            var v5553 = JAM.call(jQuery$$1.trim, jQuery$$1, [setClass]);
            v2119.className = v5553;
          }
        }
        i$$15++;
        v2122 = i$$15 < l$$2;
      }
    }
    return this;
  }
  function v70(name$$38, fn$$5) {
    function v69() {
      JAM.call(jQuery$$1.attr, jQuery$$1, [this, name$$38, ""]);
      if (this.nodeType === 1) {
        this.removeAttribute(name$$38);
      }
      return;
    }
    return JAM.call(this.each, this, [v69]);
  }
  function v68(name$$37, value$$31) {
    return access(this, name$$37, value$$31, true, jQuery$$1.attr);
  }
  function v67(type$$34) {
    return JAM.call(this.queue, this, [type$$34 || "fx", []]);
  }
  function v66(time, type$$33) {
    function v65() {
      function v64() {
        JAM.call(jQuery$$1.dequeue, jQuery$$1, [elem$$15, type$$33]);
        return;
      }
      var elem$$15 = this;
      JAM.call(setTimeout, null, [v64, time]);
      return;
    }
    var v2127;
    if (jQuery$$1.fx) {
      var v4541 = jQuery$$1.fx.speeds;
      introspect(JAM.policy.p3) {
        var v3580 = v4541[time]
      }
      if (!v3580) {
        v3580 = time;
      }
      v2127 = v3580;
    } else {
      v2127 = time;
    }
    time = v2127;
    type$$33 = type$$33 || "fx";
    return JAM.call(this.queue, this, [type$$33, v65]);
  }
  function v63(type$$32) {
    function v62() {
      JAM.call(jQuery$$1.dequeue, jQuery$$1, [this, type$$32]);
      return;
    }
    return JAM.call(this.each, this, [v62]);
  }
  function v61(type$$31, data$$24) {
    function v60(i$$14, elem$$14) {
      var queue$$1 = JAM.call(jQuery$$1.queue, jQuery$$1, [this, type$$31, data$$24]);
      var v3582 = type$$31 === "fx";
      if (v3582) {
        v3582 = queue$$1[0] !== "inprogress";
      }
      if (v3582) {
        JAM.call(jQuery$$1.dequeue, jQuery$$1, [this, type$$31]);
      }
      return;
    }
    if (typeof type$$31 !== "string") {
      data$$24 = type$$31;
      type$$31 = "fx";
    }
    if (data$$24 === undefined$$1) {
      return JAM.call(jQuery$$1.queue, jQuery$$1, [this[0], type$$31]);
    }
    return JAM.call(this.each, this, [v60]);
  }
  function v59(elem$$13, type$$30) {
    function v58() {
      JAM.call(jQuery$$1.dequeue, jQuery$$1, [elem$$13, type$$30]);
      return;
    }
    type$$30 = type$$30 || "fx";
    var queue = JAM.call(jQuery$$1.queue, jQuery$$1, [elem$$13, type$$30]);
    var fn$$4 = queue.shift();
    if (fn$$4 === "inprogress") {
      fn$$4 = queue.shift();
    }
    if (fn$$4) {
      if (type$$30 === "fx") {
        queue.unshift("inprogress");
      }
      JAM.call(fn$$4.call, fn$$4, [elem$$13, v58]);
    }
    return;
  }
  function v57(elem$$12, type$$29, data$$23) {
    if (!elem$$12) {
      return;
    }
    type$$29 = (type$$29 || "fx") + "queue";
    var q = JAM.call(jQuery$$1.data, jQuery$$1, [elem$$12, type$$29]);
    if (!data$$23) {
      return q || [];
    }
    var v3584 = !q;
    if (!v3584) {
      v3584 = JAM.call(jQuery$$1.isArray, jQuery$$1, [data$$23]);
    }
    if (v3584) {
      q = JAM.call(jQuery$$1.data, jQuery$$1, [elem$$12, type$$29, JAM.call(jQuery$$1.makeArray, jQuery$$1, [data$$23])]);
    } else {
      JAM.call(q.push, q, [data$$23]);
    }
    return q;
  }
  function v56(key$$17) {
    function v55() {
      JAM.call(jQuery$$1.removeData, jQuery$$1, [this, key$$17]);
      return;
    }
    return JAM.call(this.each, this, [v55]);
  }
  function v54(key$$16, value$$30) {
    function v53() {
      JAM.call(jQuery$$1.data, jQuery$$1, [this, key$$16, value$$30]);
      return;
    }
    function v52() {
      JAM.call(jQuery$$1.data, jQuery$$1, [this, key$$16]);
      return;
    }
    var v3585 = typeof key$$16 === "undefined";
    if (v3585) {
      v3585 = this.length;
    }
    if (v3585) {
      return JAM.call(jQuery$$1.data, jQuery$$1, [this[0]]);
    } else {
      if (typeof key$$16 === "object") {
        return JAM.call(this.each, this, [v52]);
      }
    }
    var parts = key$$16.split(".");
    var v2142;
    if (parts[1]) {
      v2142 = "." + parts[1];
    } else {
      v2142 = "";
    }
    parts[1] = v2142;
    if (value$$30 === undefined$$1) {
      var data$$22 = JAM.call(this.triggerHandler, this, ["getData" + parts[1] + "!", [parts[0]]]);
      var v3591 = data$$22 === undefined$$1;
      if (v3591) {
        v3591 = this.length;
      }
      if (v3591) {
        data$$22 = JAM.call(jQuery$$1.data, jQuery$$1, [this[0], key$$16]);
      }
      var v2147;
      var v4547 = data$$22 === undefined$$1;
      if (v4547) {
        v4547 = parts[1];
      }
      if (v4547) {
        v2147 = JAM.call(this.data, this, [parts[0]]);
      } else {
        v2147 = data$$22;
      }
      return v2147;
    } else {
      var v2148 = JAM.call(this.trigger, this, ["setData" + parts[1] + "!", [parts[0], value$$30]]);
      return JAM.call(v2148.each, v2148, [v53]);
    }
    return;
  }
  function v51(elem$$11, name$$36) {
    var v3596 = elem$$11.nodeName;
    if (v3596) {
      var v4550 = jQuery$$1.noData;
      var v4551 = elem$$11.nodeName.toLowerCase();
      introspect(JAM.policy.p3) {
        v3596 = v4550[v4551];
      }
    }
    if (v3596) {
      return;
    }
    var v2151;
    if (elem$$11 == window$$1) {
      v2151 = windowData;
    } else {
      v2151 = elem$$11;
    }
    elem$$11 = v2151;
    introspect(JAM.policy.p3) {
      var id$$2 = elem$$11[expando]
    }
    var cache$$1 = jQuery$$1.cache;
    introspect(JAM.policy.p3) {
      var thisCache$$1 = cache$$1[id$$2]
    }
    if (name$$36) {
      if (thisCache$$1) {
        delete thisCache$$1[name$$36];
        if (JAM.call(jQuery$$1.isEmptyObject, jQuery$$1, [thisCache$$1])) {
          JAM.call(jQuery$$1.removeData, jQuery$$1, [elem$$11]);
        }
      }
    } else {
      if (jQuery$$1.support.deleteExpando) {
        delete elem$$11[jQuery$$1.expando];
      } else {
        if (elem$$11.removeAttribute) {
          elem$$11.removeAttribute(jQuery$$1.expando);
        }
      }
      delete cache$$1[id$$2];
    }
    return;
  }
  function v50(elem$$10, name$$35, data$$21) {
    var v3599 = elem$$10.nodeName;
    if (v3599) {
      var v4552 = jQuery$$1.noData;
      var v4553 = elem$$10.nodeName.toLowerCase();
      introspect(JAM.policy.p3) {
        v3599 = v4552[v4553];
      }
    }
    if (v3599) {
      return;
    }
    var v2158;
    if (elem$$10 == window$$1) {
      v2158 = windowData;
    } else {
      v2158 = elem$$10;
    }
    elem$$10 = v2158;
    introspect(JAM.policy.p3) {
      var id$$1 = elem$$10[expando]
    }
    var cache = jQuery$$1.cache;
    var thisCache;
    var v4554 = !id$$1;
    if (v4554) {
      v4554 = typeof name$$35 === "string";
    }
    var v3601 = v4554;
    if (v3601) {
      v3601 = data$$21 === undefined$$1;
    }
    if (v3601) {
      return null;
    }
    if (!id$$1) {
      id$$1 = uuid = uuid + 1;
    }
    if (typeof name$$35 === "object") {
      JAM.set(elem$$10, expando, id$$1, JAM.policy.p2);
      var v5554 = JAM.call(jQuery$$1.extend, jQuery$$1, [true, {}, name$$35]);
      thisCache = JAM.set(cache, id$$1, v5554, JAM.policy.p2);
    } else {
      introspect(JAM.policy.p3) {
        var v3603 = cache[id$$1]
      }
      if (!v3603) {
        JAM.set(elem$$10, expando, id$$1, JAM.policy.p2);
        JAM.set(cache, id$$1, {}, JAM.policy.p2);
      }
    }
    introspect(JAM.policy.p3) {
      thisCache = cache[id$$1];
    }
    if (data$$21 !== undefined$$1) {
      JAM.set(thisCache, name$$35, data$$21, JAM.policy.p2);
    }
    var v2164;
    if (typeof name$$35 === "string") {
      introspect(JAM.policy.p3) {
        v2164 = thisCache[name$$35];
      }
    } else {
      v2164 = thisCache;
    }
    return v2164;
  }
  function v49() {
    function v48() {
      var div$$1 = document$$1.createElement("div");
      div$$1.style.width = div$$1.style.paddingLeft = "1px";
      var v2166 = document$$1.body;
      JAM.call(v2166.appendChild, v2166, [div$$1]);
      jQuery$$1.boxModel = jQuery$$1.support.boxModel = div$$1.offsetWidth === 2;
      document$$1.body.removeChild(div$$1).style.display = "none";
      div$$1 = null;
      return;
    }
    function click() {
      jQuery$$1.support.noCloneEvent = false;
      JAM.call(div.detachEvent, div, ["onclick", click]);
      return;
    }
    function eventSupported(eventName) {
      var el = document$$1.createElement("div");
      eventName = "on" + eventName;
      var isSupported = eventName in el;
      if (!isSupported) {
        JAM.call(el.setAttribute, el, [eventName, "return;"]);
        introspect(JAM.policy.p3) {
          var v3608 = el[eventName]
        }
        isSupported = typeof v3608 === "function";
      }
      el = null;
      return isSupported;
    }
    jQuery$$1.support = {};
    var root = document$$1.documentElement;
    var script$$1 = document$$1.createElement("script");
    var div = document$$1.createElement("div");
    var id = "script" + now();
    div.style.display = "none";
    JAM.set(div, "innerHTML", "   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>");
    var all = div.getElementsByTagName("*");
    var a = div.getElementsByTagName("a")[0];
    var v4557 = !all;
    if (!v4557) {
      v4557 = !all.length;
    }
    var v3609 = v4557;
    if (!v3609) {
      v3609 = !a;
    }
    if (v3609) {
      return;
    }
    var v2176 = jQuery$$1;
    var v3610 = div.firstChild.nodeType === 3;
    var v3611 = !div.getElementsByTagName("tbody").length;
    var v3612 = !!div.getElementsByTagName("link").length;
    var v3613 = /red/.test(a.getAttribute("style"));
    var v3614 = a.getAttribute("href") === "/a";
    var v3615 = /^0.55$/.test(a.style.opacity);
    var v3616 = !!a.style.cssFloat;
    var v3617 = div.getElementsByTagName("input")[0].value === "on";
    var v5093 = document$$1.createElement("select");
    v2176.support = {leadingWhitespace:v3610, tbody:v3611, htmlSerialize:v3612, style:v3613, hrefNormalized:v3614, opacity:v3615, cssFloat:v3616, checkOn:v3617, optSelected:JAM.call(v5093.appendChild, v5093, [document$$1.createElement("option")]).selected, parentNode:div.removeChild(JAM.call(div.appendChild, div, [document$$1.createElement("div")])).parentNode === null, deleteExpando:true, checkClone:false, scriptEval:false, noCloneEvent:true, boxModel:null};
    script$$1.type = "text/javascript";
    try {
      JAM.call(script$$1.appendChild, script$$1, [document$$1.createTextNode("window." + id + "=1;")]);
    } catch (e$$5) {
    }
    JAM.call(root.insertBefore, root, [script$$1, root.firstChild]);
    introspect(JAM.policy.p3) {
      var v2180 = window$$1[id]
    }
    if (v2180) {
      jQuery$$1.support.scriptEval = true;
      delete window$$1[id];
    }
    try {
      delete script$$1.test;
    } catch (e$$6) {
      jQuery$$1.support.deleteExpando = false;
    }
    root.removeChild(script$$1);
    var v3621 = div.attachEvent;
    if (v3621) {
      v3621 = div.fireEvent;
    }
    if (v3621) {
      JAM.call(div.attachEvent, div, ["onclick", click]);
      var v2182 = div.cloneNode(true);
      JAM.call(v2182.fireEvent, v2182, ["onclick"]);
    }
    div = document$$1.createElement("div");
    JAM.set(div, "innerHTML", "<input type='radio' name='radiotest' checked='checked'/>");
    var fragment$$1 = document$$1.createDocumentFragment();
    JAM.call(fragment$$1.appendChild, fragment$$1, [div.firstChild]);
    jQuery$$1.support.checkClone = fragment$$1.cloneNode(true).cloneNode(true).lastChild.checked;
    jQuery$$1(v48);
    var v2186 = jQuery$$1.support;
    var v5555 = eventSupported("submit");
    v2186.submitBubbles = v5555;
    var v2187 = jQuery$$1.support;
    var v5556 = eventSupported("change");
    v2187.changeBubbles = v5556;
    root = script$$1 = div = all = a = null;
    return;
  }
  function v47() {
    if (document$$1.readyState === "complete") {
      JAM.call(document$$1.detachEvent, document$$1, ["onreadystatechange", DOMContentLoaded]);
      jQuery$$1.ready();
    }
    return;
  }
  function v46() {
    document$$1.removeEventListener("DOMContentLoaded", DOMContentLoaded, false);
    jQuery$$1.ready();
    return;
  }
  function v45(elem$$9, array$$11) {
    return JAM.call(indexOf.call, indexOf, [array$$11, elem$$9]);
  }
  function v44(ua) {
    ua = ua.toLowerCase();
    var v5097 = /(webkit)[ \/]([\w.]+)/.exec(ua);
    if (!v5097) {
      v5097 = /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(ua);
    }
    var v4571 = v5097;
    if (!v4571) {
      v4571 = /(msie) ([\w.]+)/.exec(ua);
    }
    var v3624 = v4571;
    if (!v3624) {
      var v4572 = !/compatible/.test(ua);
      if (v4572) {
        v4572 = /(mozilla)(?:.*? rv:([\w.]+))?/.exec(ua);
      }
      v3624 = v4572;
    }
    var v2189 = v3624;
    if (!v2189) {
      v2189 = [];
    }
    var match$$2 = v2189;
    var v3626 = match$$2[1];
    if (!v3626) {
      v3626 = "";
    }
    var v2190 = v3626;
    var v3627 = match$$2[2];
    if (!v3627) {
      v3627 = "0";
    }
    return{browser:v2190, version:v3627};
  }
  function v43(fn$$3, proxy, thisObject) {
    function v42() {
      return JAM.call(fn$$3.apply, fn$$3, [thisObject || this, arguments]);
    }
    if (arguments.length === 2) {
      if (typeof proxy === "string") {
        thisObject = fn$$3;
        introspect(JAM.policy.p3) {
          fn$$3 = thisObject[proxy];
        }
        proxy = undefined$$1;
      } else {
        var v3630 = proxy;
        if (v3630) {
          v3630 = !JAM.call(jQuery$$1.isFunction, jQuery$$1, [proxy]);
        }
        if (v3630) {
          thisObject = proxy;
          proxy = undefined$$1;
        }
      }
    }
    var v3631 = !proxy;
    if (v3631) {
      v3631 = fn$$3;
    }
    if (v3631) {
      proxy = v42;
    }
    if (fn$$3) {
      var v3632 = fn$$3.guid;
      if (!v3632) {
        v3632 = proxy.guid;
      }
      var v2197 = v3632;
      if (!v2197) {
        v2197 = jQuery$$1.guid;
        jQuery$$1.guid = jQuery$$1.guid + 1;
      }
      proxy.guid = fn$$3.guid = v2197;
    }
    return proxy;
  }
  function v41(elems$$4, callback$$29, arg$$2) {
    var ret$$5 = [];
    var value$$29;
    var i$$13 = 0;
    var length$$16 = elems$$4.length;
    var v2201 = i$$13 < length$$16;
    for (;v2201;) {
      introspect(JAM.policy.p3) {
        var v2198 = elems$$4[i$$13]
      }
      value$$29 = JAM.call(callback$$29, null, [v2198, i$$13, arg$$2]);
      if (value$$29 != null) {
        var v2199 = ret$$5.length;
        introspect(JAM.policy.p2) {
          ret$$5[v2199] = value$$29;
        }
      }
      i$$13++;
      v2201 = i$$13 < length$$16;
    }
    var v2202 = ret$$5.concat;
    return JAM.call(v2202.apply, v2202, [[], ret$$5]);
  }
  function v40(elems$$3, callback$$28, inv) {
    var ret$$4 = [];
    var i$$12 = 0;
    var length$$15 = elems$$3.length;
    var v2205 = i$$12 < length$$15;
    for (;v2205;) {
      var v3634 = !inv;
      introspect(JAM.policy.p3) {
        var v5100 = elems$$3[i$$12]
      }
      if (v3634 !== !JAM.call(callback$$28, null, [v5100, i$$12])) {
        introspect(JAM.policy.p3) {
          var v2203 = elems$$3[i$$12]
        }
        JAM.call(ret$$4.push, ret$$4, [v2203]);
      }
      i$$12++;
      v2205 = i$$12 < length$$15;
    }
    return ret$$4;
  }
  function v39(first$$1, second) {
    var i$$11 = first$$1.length;
    var j$$1 = 0;
    if (typeof second.length === "number") {
      var l$$1 = second.length;
      var v2207 = j$$1 < l$$1;
      for (;v2207;) {
        var v2206 = i$$11;
        i$$11 = i$$11 + 1;
        JAM.set(first$$1, v2206, JAM.get(second, j$$1, JAM.policy.p4), JAM.policy.p4);
        j$$1++;
        v2207 = j$$1 < l$$1;
      }
    } else {
      introspect(JAM.policy.p3) {
        var v3637 = second[j$$1]
      }
      var v2209 = v3637 !== undefined$$1;
      for (;v2209;) {
        var v2208 = i$$11;
        i$$11 = i$$11 + 1;
        var v3638 = j$$1;
        j$$1 = j$$1 + 1;
        JAM.set(first$$1, v2208, JAM.get(second, v3638, JAM.policy.p4), JAM.policy.p4);
        introspect(JAM.policy.p3) {
          var v3639 = second[j$$1]
        }
        v2209 = v3639 !== undefined$$1;
      }
    }
    first$$1.length = i$$11;
    return first$$1;
  }
  function v38(elem$$8, array$$10) {
    if (array$$10.indexOf) {
      return array$$10.indexOf(elem$$8);
    }
    var i$$10 = 0;
    var length$$14 = array$$10.length;
    var v2213 = i$$10 < length$$14;
    for (;v2213;) {
      introspect(JAM.policy.p3) {
        var v3640 = array$$10[i$$10]
      }
      if (v3640 === elem$$8) {
        return i$$10;
      }
      i$$10++;
      v2213 = i$$10 < length$$14;
    }
    return-1;
  }
  function v37(array$$9, results) {
    var ret$$3 = results || [];
    if (array$$9 != null) {
      var v5101 = array$$9.length == null;
      if (!v5101) {
        v5101 = typeof array$$9 === "string";
      }
      var v4581 = v5101;
      if (!v4581) {
        v4581 = JAM.call(jQuery$$1.isFunction, jQuery$$1, [array$$9]);
      }
      var v3641 = v4581;
      if (!v3641) {
        var v4582 = typeof array$$9 !== "function";
        if (v4582) {
          v4582 = array$$9.setInterval;
        }
        v3641 = v4582;
      }
      if (v3641) {
        JAM.call(push.call, push, [ret$$3, array$$9]);
      } else {
        JAM.call(jQuery$$1.merge, jQuery$$1, [ret$$3, array$$9]);
      }
    }
    return ret$$3;
  }
  function v36(text$$7) {
    return(text$$7 || "").replace(rtrim, "");
  }
  function v35(object, callback$$27, args$$4) {
    var name$$34;
    var i$$9 = 0;
    var length$$13 = object.length;
    var v2217 = length$$13 === undefined$$1;
    if (!v2217) {
      v2217 = JAM.call(jQuery$$1.isFunction, jQuery$$1, [object]);
    }
    var isObj = v2217;
    if (args$$4) {
      if (isObj) {
        for (name$$34 in object) {
          introspect(JAM.policy.p3) {
            var v4584 = object[name$$34]
          }
          if (JAM.call(callback$$27.apply, callback$$27, [v4584, args$$4]) === false) {
            break;
          }
        }
      } else {
        var v2220 = i$$9 < length$$13;
        for (;v2220;) {
          var v5104 = i$$9;
          i$$9 = i$$9 + 1;
          introspect(JAM.policy.p3) {
            var v4585 = object[v5104]
          }
          if (JAM.call(callback$$27.apply, callback$$27, [v4585, args$$4]) === false) {
            break;
          }
          v2220 = i$$9 < length$$13;
        }
      }
    } else {
      if (isObj) {
        for (name$$34 in object) {
          introspect(JAM.policy.p3) {
            var v4586 = object[name$$34]
          }
          introspect(JAM.policy.p3) {
            var v4587 = object[name$$34]
          }
          if (JAM.call(callback$$27.call, callback$$27, [v4586, name$$34, v4587]) === false) {
            break;
          }
        }
      } else {
        var value$$28 = object[0];
        var v3646 = i$$9 < length$$13;
        if (v3646) {
          v3646 = JAM.call(callback$$27.call, callback$$27, [value$$28, i$$9, value$$28]) !== false;
        }
        var v2222 = v3646;
        for (;v2222;) {
          var v3647 = i$$9 = i$$9 + 1;
          introspect(JAM.policy.p3) {
            value$$28 = object[v3647];
          }
          var v3648 = i$$9 < length$$13;
          if (v3648) {
            v3648 = JAM.call(callback$$27.call, callback$$27, [value$$28, i$$9, value$$28]) !== false;
          }
          v2222 = v3648;
        }
      }
    }
    return object;
  }
  function v34(elem$$7, name$$33) {
    var v2223 = elem$$7.nodeName;
    if (v2223) {
      v2223 = elem$$7.nodeName.toUpperCase() === name$$33.toUpperCase();
    }
    return v2223;
  }
  function v33(data$$20) {
    var v3651 = data$$20;
    if (v3651) {
      v3651 = rnotwhite.test(data$$20);
    }
    if (v3651) {
      var v2224 = document$$1.getElementsByTagName("head")[0];
      if (!v2224) {
        v2224 = document$$1.documentElement;
      }
      var head = v2224;
      var script = document$$1.createElement("script");
      script.type = "text/javascript";
      if (jQuery$$1.support.scriptEval) {
        JAM.call(script.appendChild, script, [document$$1.createTextNode(data$$20)]);
      } else {
        script.text = data$$20;
      }
      JAM.call(head.insertBefore, head, [script, head.firstChild]);
      head.removeChild(script);
    }
    return;
  }
  function v32() {
    return;
  }
  function v31(data$$19) {
    var v3655 = typeof data$$19 !== "string";
    if (!v3655) {
      v3655 = !data$$19;
    }
    if (v3655) {
      return null;
    }
    data$$19 = JAM.call(jQuery$$1.trim, jQuery$$1, [data$$19]);
    if (/^[\],:{}\s]*$/.test(data$$19.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
      var v2230;
      var v4594 = window$$1.JSON;
      if (v4594) {
        v4594 = window$$1.JSON.parse;
      }
      if (v4594) {
        v2230 = window$$1.JSON.parse(data$$19);
      } else {
        v2230 = JAM.new(Function, ["return " + data$$19])();
      }
      return v2230;
    } else {
      JAM.call(jQuery$$1.error, jQuery$$1, ["Invalid JSON: " + data$$19]);
    }
    return;
  }
  function v30(msg) {
    throw msg;
  }
  function v29(obj$$20) {
    var name$$32;
    for (name$$32 in obj$$20) {
      return false;
    }
    return true;
  }
  function v28(obj$$19) {
    var v5107 = !obj$$19;
    if (!v5107) {
      v5107 = JAM.call(toString.call, toString, [obj$$19]) !== "[object Object]";
    }
    var v4596 = v5107;
    if (!v4596) {
      v4596 = obj$$19.nodeType;
    }
    var v3660 = v4596;
    if (!v3660) {
      v3660 = obj$$19.setInterval;
    }
    if (v3660) {
      return false;
    }
    var v4598 = obj$$19.constructor;
    if (v4598) {
      v4598 = !JAM.call(hasOwnProperty.call, hasOwnProperty, [obj$$19, "constructor"]);
    }
    var v3661 = v4598;
    if (v3661) {
      v3661 = !JAM.call(hasOwnProperty.call, hasOwnProperty, [obj$$19.constructor.prototype, "isPrototypeOf"]);
    }
    if (v3661) {
      return false;
    }
    var key$$15;
    for (key$$15 in obj$$19) {
    }
    var v2235 = key$$15 === undefined$$1;
    if (!v2235) {
      v2235 = JAM.call(hasOwnProperty.call, hasOwnProperty, [obj$$19, key$$15]);
    }
    return v2235;
  }
  function v27(obj$$18) {
    return JAM.call(toString.call, toString, [obj$$18]) === "[object Array]";
  }
  function v26(obj$$17) {
    return JAM.call(toString.call, toString, [obj$$17]) === "[object Function]";
  }
  function v25() {
    if (readyBound) {
      return;
    }
    readyBound = true;
    if (document$$1.readyState === "complete") {
      return jQuery$$1.ready();
    }
    if (document$$1.addEventListener) {
      document$$1.addEventListener("DOMContentLoaded", DOMContentLoaded, false);
      window$$1.addEventListener("load", jQuery$$1.ready, false);
    } else {
      if (document$$1.attachEvent) {
        JAM.call(document$$1.attachEvent, document$$1, ["onreadystatechange", DOMContentLoaded]);
        JAM.call(window$$1.attachEvent, window$$1, ["onload", jQuery$$1.ready]);
        var toplevel = false;
        try {
          toplevel = window$$1.frameElement == null;
        } catch (e$$4) {
        }
        var v3664 = document$$1.documentElement.doScroll;
        if (v3664) {
          v3664 = toplevel;
        }
        if (v3664) {
          doScrollCheck();
        }
      }
    }
    return;
  }
  function v24() {
    if (!jQuery$$1.isReady) {
      if (!document$$1.body) {
        return JAM.call(setTimeout, null, [jQuery$$1.ready, 13]);
      }
      jQuery$$1.isReady = true;
      if (readyList) {
        var fn$$2;
        var i$$8 = 0;
        var v3667 = i$$8;
        i$$8 = i$$8 + 1;
        introspect(JAM.policy.p3) {
          var v2247 = fn$$2 = readyList[v3667]
        }
        for (;v2247;) {
          JAM.call(fn$$2.call, fn$$2, [document$$1, jQuery$$1]);
          var v3668 = i$$8;
          i$$8 = i$$8 + 1;
          introspect(JAM.policy.p3) {
            v2247 = fn$$2 = readyList[v3668];
          }
        }
        readyList = null;
      }
      if (jQuery$$1.fn.triggerHandler) {
        var v2248 = jQuery$$1(document$$1);
        JAM.call(v2248.triggerHandler, v2248, ["ready"]);
      }
    }
    return;
  }
  function v23(deep$$3) {
    window$$1.$ = _$;
    if (deep$$3) {
      window$$1.jQuery = _jQuery;
    }
    return jQuery$$1;
  }
  function v22() {
    var v2251 = arguments[0];
    if (!v2251) {
      v2251 = {};
    }
    var target$$26 = v2251;
    var i$$7 = 1;
    var length$$12 = arguments.length;
    var deep$$2 = false;
    var options$$1;
    var name$$31;
    var src$$1;
    var copy;
    if (typeof target$$26 === "boolean") {
      deep$$2 = target$$26;
      var v2252 = arguments[1];
      if (!v2252) {
        v2252 = {};
      }
      target$$26 = v2252;
      i$$7 = 2;
    }
    var v3673 = typeof target$$26 !== "object";
    if (v3673) {
      v3673 = !JAM.call(jQuery$$1.isFunction, jQuery$$1, [target$$26]);
    }
    if (v3673) {
      target$$26 = {};
    }
    if (length$$12 === i$$7) {
      target$$26 = this;
      --i$$7;
    }
    var v2261 = i$$7 < length$$12;
    for (;v2261;) {
      introspect(JAM.policy.p3) {
        var v3674 = options$$1 = arguments[i$$7]
      }
      if (v3674 != null) {
        for (name$$31 in options$$1) {
          introspect(JAM.policy.p3) {
            src$$1 = target$$26[name$$31];
          }
          introspect(JAM.policy.p3) {
            copy = options$$1[name$$31];
          }
          if (target$$26 === copy) {
            continue;
          }
          var v3675 = deep$$2 && copy;
          if (v3675) {
            var v4603 = JAM.call(jQuery$$1.isPlainObject, jQuery$$1, [copy]);
            if (!v4603) {
              v4603 = JAM.call(jQuery$$1.isArray, jQuery$$1, [copy]);
            }
            v3675 = v4603;
          }
          if (v3675) {
            var v2257;
            var v4604 = src$$1;
            if (v4604) {
              var v5112 = JAM.call(jQuery$$1.isPlainObject, jQuery$$1, [src$$1]);
              if (!v5112) {
                v5112 = JAM.call(jQuery$$1.isArray, jQuery$$1, [src$$1]);
              }
              v4604 = v5112;
            }
            if (v4604) {
              v2257 = src$$1;
            } else {
              var v3676;
              if (JAM.call(jQuery$$1.isArray, jQuery$$1, [copy])) {
                v3676 = [];
              } else {
                v3676 = {};
              }
              v2257 = v3676;
            }
            var clone = v2257;
            var v5557 = JAM.call(jQuery$$1.extend, jQuery$$1, [deep$$2, clone, copy]);
            JAM.set(target$$26, name$$31, v5557, JAM.policy.p2);
          } else {
            if (copy !== undefined$$1) {
              JAM.set(target$$26, name$$31, copy, JAM.policy.p2);
            }
          }
        }
      }
      i$$7++;
      v2261 = i$$7 < length$$12;
    }
    return target$$26;
  }
  function v21() {
    var v2262 = this.prevObject;
    if (!v2262) {
      v2262 = jQuery$$1(null);
    }
    return v2262;
  }
  function v20(callback$$26) {
    function v19(elem$$6, i$$6) {
      return JAM.call(callback$$26.call, callback$$26, [elem$$6, i$$6, elem$$6]);
    }
    return JAM.call(this.pushStack, this, [JAM.call(jQuery$$1.map, jQuery$$1, [this, v19])]);
  }
  function v18() {
    return JAM.call(this.pushStack, this, [JAM.call(slice.apply, slice, [this, arguments]), "slice", JAM.call(slice.call, slice, [arguments]).join(",")]);
  }
  function v17() {
    return JAM.call(this.eq, this, [-1]);
  }
  function v16() {
    return JAM.call(this.eq, this, [0]);
  }
  function v15(i$$5) {
    var v2266;
    if (i$$5 === -1) {
      v2266 = JAM.call(this.slice, this, [i$$5]);
    } else {
      v2266 = JAM.call(this.slice, this, [i$$5, +i$$5 + 1]);
    }
    return v2266;
  }
  function v14(fn$$1) {
    jQuery$$1.bindReady();
    if (jQuery$$1.isReady) {
      JAM.call(fn$$1.call, fn$$1, [document$$1, jQuery$$1]);
    } else {
      if (readyList) {
        JAM.call(readyList.push, readyList, [fn$$1]);
      }
    }
    return this;
  }
  function v13(callback$$25, args$$3) {
    return JAM.call(jQuery$$1.each, jQuery$$1, [this, callback$$25, args$$3]);
  }
  function v12(elems$$2, name$$30, selector$$3) {
    var ret$$2 = jQuery$$1();
    if (JAM.call(jQuery$$1.isArray, jQuery$$1, [elems$$2])) {
      JAM.call(push.apply, push, [ret$$2, elems$$2]);
    } else {
      JAM.call(jQuery$$1.merge, jQuery$$1, [ret$$2, elems$$2]);
    }
    ret$$2.prevObject = this;
    ret$$2.context = this.context;
    if (name$$30 === "find") {
      var v3682 = this.selector;
      var v4607;
      if (this.selector) {
        v4607 = " ";
      } else {
        v4607 = "";
      }
      ret$$2.selector = v3682 + v4607 + selector$$3;
    } else {
      if (name$$30) {
        ret$$2.selector = this.selector + "." + name$$30 + "(" + selector$$3 + ")";
      }
    }
    return ret$$2;
  }
  function v11(num$$5) {
    var v2272;
    if (num$$5 == null) {
      v2272 = this.toArray();
    } else {
      var v3685;
      if (num$$5 < 0) {
        v3685 = JAM.call(this.slice, this, [num$$5])[0];
      } else {
        introspect(JAM.policy.p3) {
          v3685 = this[num$$5];
        }
      }
      v2272 = v3685;
    }
    return v2272;
  }
  function v10() {
    return JAM.call(slice.call, slice, [this, 0]);
  }
  function v9() {
    return this.length;
  }
  function v8(selector$$2, context$$1) {
    var match$$1;
    var elem$$5;
    var ret$$1;
    var doc$$1;
    if (!selector$$2) {
      return this;
    }
    if (selector$$2.nodeType) {
      this.context = this[0] = selector$$2;
      this.length = 1;
      return this;
    }
    var v3687 = selector$$2 === "body";
    if (v3687) {
      v3687 = !context$$1;
    }
    if (v3687) {
      this.context = document$$1;
      this[0] = document$$1.body;
      this.selector = "body";
      this.length = 1;
      return this;
    }
    if (typeof selector$$2 === "string") {
      match$$1 = quickExpr.exec(selector$$2);
      var v3689 = match$$1;
      if (v3689) {
        var v4611 = match$$1[1];
        if (!v4611) {
          v4611 = !context$$1;
        }
        v3689 = v4611;
      }
      if (v3689) {
        if (match$$1[1]) {
          var v2276;
          if (context$$1) {
            var v3690 = context$$1.ownerDocument;
            if (!v3690) {
              v3690 = context$$1;
            }
            v2276 = v3690;
          } else {
            v2276 = document$$1;
          }
          doc$$1 = v2276;
          ret$$1 = rsingleTag.exec(selector$$2);
          if (ret$$1) {
            if (JAM.call(jQuery$$1.isPlainObject, jQuery$$1, [context$$1])) {
              selector$$2 = [document$$1.createElement(ret$$1[1])];
              var v2278 = jQuery$$1.fn.attr;
              JAM.call(v2278.call, v2278, [selector$$2, context$$1, true]);
            } else {
              selector$$2 = [doc$$1.createElement(ret$$1[1])];
            }
          } else {
            ret$$1 = buildFragment([match$$1[1]], [doc$$1]);
            var v3695;
            if (ret$$1.cacheable) {
              v3695 = ret$$1.fragment.cloneNode(true);
            } else {
              v3695 = ret$$1.fragment;
            }
            selector$$2 = v3695.childNodes;
          }
          return JAM.call(jQuery$$1.merge, jQuery$$1, [this, selector$$2]);
        } else {
          elem$$5 = document$$1.getElementById(match$$1[2]);
          if (elem$$5) {
            if (elem$$5.id !== match$$1[2]) {
              return JAM.call(rootjQuery.find, rootjQuery, [selector$$2]);
            }
            this.length = 1;
            this[0] = elem$$5;
          }
          this.context = document$$1;
          this.selector = selector$$2;
          return this;
        }
      } else {
        var v3698 = !context$$1;
        if (v3698) {
          v3698 = /^\w+$/.test(selector$$2);
        }
        if (v3698) {
          this.selector = selector$$2;
          this.context = document$$1;
          selector$$2 = document$$1.getElementsByTagName(selector$$2);
          return JAM.call(jQuery$$1.merge, jQuery$$1, [this, selector$$2]);
        } else {
          var v3699 = !context$$1;
          if (!v3699) {
            v3699 = context$$1.jquery;
          }
          if (v3699) {
            var v2287 = context$$1 || rootjQuery;
            return JAM.call(v2287.find, v2287, [selector$$2]);
          } else {
            var v2288 = jQuery$$1(context$$1);
            return JAM.call(v2288.find, v2288, [selector$$2]);
          }
        }
      }
    } else {
      if (JAM.call(jQuery$$1.isFunction, jQuery$$1, [selector$$2])) {
        return JAM.call(rootjQuery.ready, rootjQuery, [selector$$2]);
      }
    }
    if (selector$$2.selector !== undefined$$1) {
      this.selector = selector$$2.selector;
      this.context = selector$$2.context;
    }
    return JAM.call(jQuery$$1.makeArray, jQuery$$1, [selector$$2, this]);
  }
  function fcamelCase(all$$6, letter) {
    return letter.toUpperCase();
  }
  function fcloseTag(all$$5, front, tag) {
    var v2295;
    if (rselfClosing.test(tag)) {
      v2295 = all$$5;
    } else {
      v2295 = front + "></" + tag + ">";
    }
    return v2295;
  }
  function winnow(elements, qualifier, keep) {
    function v4(elem$$79, i$$61) {
      return JAM.call(jQuery$$1.inArray, jQuery$$1, [elem$$79, qualifier]) >= 0 === keep;
    }
    function v3(elem$$78) {
      return elem$$78.nodeType === 1;
    }
    function v2(elem$$77, i$$60) {
      return elem$$77 === qualifier === keep;
    }
    function v1(elem$$76, i$$59) {
      return!!JAM.call(qualifier.call, qualifier, [elem$$76, i$$59, elem$$76]) === keep;
    }
    if (JAM.call(jQuery$$1.isFunction, jQuery$$1, [qualifier])) {
      return JAM.call(jQuery$$1.grep, jQuery$$1, [elements, v1]);
    } else {
      if (qualifier.nodeType) {
        return JAM.call(jQuery$$1.grep, jQuery$$1, [elements, v2]);
      } else {
        if (typeof qualifier === "string") {
          var filtered = JAM.call(jQuery$$1.grep, jQuery$$1, [elements, v3]);
          if (isSimple.test(qualifier)) {
            return JAM.call(jQuery$$1.filter, jQuery$$1, [qualifier, filtered, !keep]);
          } else {
            qualifier = JAM.call(jQuery$$1.filter, jQuery$$1, [qualifier, filtered]);
          }
        }
      }
    }
    return JAM.call(jQuery$$1.grep, jQuery$$1, [elements, v4]);
  }
  function delegate(event$$6) {
    event$$6.type = event$$6.data;
    var v2305 = jQuery$$1.event.handle;
    JAM.call(v2305.apply, v2305, [this, arguments]);
    return;
  }
  function withinElement(event$$5) {
    var parent$$2 = event$$5.relatedTarget;
    try {
      var v3707 = parent$$2;
      if (v3707) {
        v3707 = parent$$2 !== this;
      }
      var v2306 = v3707;
      for (;v2306;) {
        parent$$2 = parent$$2.parentNode;
        var v3708 = parent$$2;
        if (v3708) {
          v3708 = parent$$2 !== this;
        }
        v2306 = v3708;
      }
      if (parent$$2 !== this) {
        event$$5.type = event$$5.data;
        var v2307 = jQuery$$1.event.handle;
        JAM.call(v2307.apply, v2307, [this, arguments]);
      }
    } catch (e$$11) {
    }
    return;
  }
  function fcleanup(nm) {
    function v5(ch) {
      return "\\" + ch;
    }
    return nm.replace(/[^\w\s\.\|`]/g, v5);
  }
  function jQuery$$1(selector$$1, context) {
    return JAM.new(jQuery$$1.fn.init, [selector$$1, context]);
  }
  function doScrollCheck() {
    if (jQuery$$1.isReady) {
      return;
    }
    try {
      var v2311 = document$$1.documentElement;
      JAM.call(v2311.doScroll, v2311, ["left"]);
    } catch (error$$1) {
      JAM.call(setTimeout, null, [doScrollCheck, 1]);
      return;
    }
    jQuery$$1.ready();
    return;
  }
  function evalScript(i$$1, elem$$1) {
    if (elem$$1.src) {
      JAM.call(jQuery$$1.ajax, jQuery$$1, [{url:elem$$1.src, async:false, dataType:"script"}]);
    } else {
      var v5116 = elem$$1.text;
      if (!v5116) {
        v5116 = elem$$1.textContent;
      }
      var v4618 = v5116;
      if (!v4618) {
        v4618 = elem$$1.innerHTML;
      }
      var v3712 = v4618;
      if (!v3712) {
        v3712 = "";
      }
      JAM.call(jQuery$$1.globalEval, jQuery$$1, [v3712]);
    }
    if (elem$$1.parentNode) {
      elem$$1.parentNode.removeChild(elem$$1);
    }
    return;
  }
  function access(elems, key$$14, value$$27, exec, fn, pass) {
    var length$$11 = elems.length;
    if (typeof key$$14 === "object") {
      var k;
      for (k in key$$14) {
        introspect(JAM.policy.p3) {
          var v2317 = key$$14[k]
        }
        access(elems, k, v2317, exec, fn, value$$27);
      }
      return elems;
    }
    if (value$$27 !== undefined$$1) {
      var v3714 = !pass;
      if (v3714) {
        v3714 = exec;
      }
      var v2319 = v3714;
      if (v2319) {
        v2319 = JAM.call(jQuery$$1.isFunction, jQuery$$1, [value$$27]);
      }
      exec = v2319;
      var i$$2 = 0;
      var v2322 = i$$2 < length$$11;
      for (;v2322;) {
        introspect(JAM.policy.p3) {
          var v2320 = elems[i$$2]
        }
        var v3715;
        if (exec) {
          introspect(JAM.policy.p3) {
            var v4620 = elems[i$$2]
          }
          introspect(JAM.policy.p3) {
            var v5118 = elems[i$$2]
          }
          v3715 = JAM.call(value$$27.call, value$$27, [v4620, i$$2, JAM.call(fn, null, [v5118, key$$14])]);
        } else {
          v3715 = value$$27;
        }
        JAM.call(fn, null, [v2320, key$$14, v3715, pass]);
        i$$2++;
        v2322 = i$$2 < length$$11;
      }
      return elems;
    }
    var v2324;
    if (length$$11) {
      v2324 = JAM.call(fn, null, [elems[0], key$$14]);
    } else {
      v2324 = undefined$$1;
    }
    return v2324;
  }
  function now() {
    return(new Date).getTime();
  }
  function returnFalse() {
    return false;
  }
  function returnTrue() {
    return true;
  }
  function trigger(type$$25, elem$$2, args) {
    args[0].type = type$$25;
    var v2327 = jQuery$$1.event.handle;
    return JAM.call(v2327.apply, v2327, [elem$$2, args]);
  }
  function liveHandler(event$$1) {
    var stop;
    var elems$$1 = [];
    var selectors$$7 = [];
    var args$$1 = arguments;
    var related;
    var match;
    var handleObj;
    var elem$$3;
    var j;
    var i$$3;
    var l;
    var data$$18;
    var events = JAM.call(jQuery$$1.data, jQuery$$1, [this, "events"]);
    var v5119 = event$$1.liveFired === this;
    if (!v5119) {
      v5119 = !events;
    }
    var v4622 = v5119;
    if (!v4622) {
      v4622 = !events.live;
    }
    var v3718 = v4622;
    if (!v3718) {
      var v4623 = event$$1.button;
      if (v4623) {
        v4623 = event$$1.type === "click";
      }
      v3718 = v4623;
    }
    if (v3718) {
      return;
    }
    event$$1.liveFired = this;
    var v2329 = events.live;
    var live = JAM.call(v2329.slice, v2329, [0]);
    j = 0;
    var v2333 = j < live.length;
    for (;v2333;) {
      introspect(JAM.policy.p3) {
        handleObj = live[j];
      }
      if (handleObj.origType.replace(rnamespaces, "") === event$$1.type) {
        JAM.call(selectors$$7.push, selectors$$7, [handleObj.selector]);
      } else {
        var v2331 = j;
        j = j - 1;
        JAM.call(live.splice, live, [v2331, 1]);
      }
      j++;
      v2333 = j < live.length;
    }
    var v2334 = jQuery$$1(event$$1.target);
    match = JAM.call(v2334.closest, v2334, [selectors$$7, event$$1.currentTarget]);
    i$$3 = 0;
    l = match.length;
    var v2343 = i$$3 < l;
    for (;v2343;) {
      j = 0;
      var v2342 = j < live.length;
      for (;v2342;) {
        introspect(JAM.policy.p3) {
          handleObj = live[j];
        }
        introspect(JAM.policy.p3) {
          var v4626 = match[i$$3]
        }
        if (v4626.selector === handleObj.selector) {
          introspect(JAM.policy.p3) {
            var v2336 = match[i$$3]
          }
          elem$$3 = v2336.elem;
          related = null;
          var v3727 = handleObj.preType === "mouseenter";
          if (!v3727) {
            v3727 = handleObj.preType === "mouseleave";
          }
          if (v3727) {
            var v3728 = jQuery$$1(event$$1.relatedTarget);
            related = JAM.call(v3728.closest, v3728, [handleObj.selector])[0];
          }
          var v3730 = !related;
          if (!v3730) {
            v3730 = related !== elem$$3;
          }
          if (v3730) {
            JAM.call(elems$$1.push, elems$$1, [{elem:elem$$3, handleObj:handleObj}]);
          }
        }
        j++;
        v2342 = j < live.length;
      }
      i$$3++;
      v2343 = i$$3 < l;
    }
    i$$3 = 0;
    l = elems$$1.length;
    var v2346 = i$$3 < l;
    for (;v2346;) {
      introspect(JAM.policy.p3) {
        match = elems$$1[i$$3];
      }
      event$$1.currentTarget = match.elem;
      event$$1.data = match.handleObj.data;
      event$$1.handleObj = match.handleObj;
      var v4632 = match.handleObj.origHandler;
      if (JAM.call(v4632.apply, v4632, [match.elem, args$$1]) === false) {
        stop = false;
        break;
      }
      i$$3++;
      v2346 = i$$3 < l;
    }
    return stop;
  }
  function liveConvert(type$$26, selector) {
    var v4634;
    var v5357 = type$$26;
    if (v5357) {
      v5357 = type$$26 !== "*";
    }
    if (v5357) {
      v4634 = type$$26 + ".";
    } else {
      v4634 = "";
    }
    return "live." + v4634 + selector.replace(/\./g, "`").replace(/ /g, "&");
  }
  function isDisconnected(node$$2) {
    var v3735 = !node$$2;
    if (!v3735) {
      v3735 = !node$$2.parentNode;
    }
    var v2349 = v3735;
    if (!v2349) {
      v2349 = node$$2.parentNode.nodeType === 11;
    }
    return v2349;
  }
  function cloneCopyEvent(orig, ret) {
    function v6() {
      var v3738 = this.nodeName;
      introspect(JAM.policy.p3) {
        var v4638 = orig[i$$4]
      }
      if (v4638) {
        introspect(JAM.policy.p3) {
          var v5125 = orig[i$$4]
        }
        v4638 = v5125.nodeName;
      }
      if (v3738 !== v4638) {
        return;
      }
      var v3740 = i$$4;
      i$$4 = i$$4 + 1;
      introspect(JAM.policy.p3) {
        var v2351 = orig[v3740]
      }
      var oldData = JAM.call(jQuery$$1.data, jQuery$$1, [v2351]);
      var curData = JAM.call(jQuery$$1.data, jQuery$$1, [this, oldData]);
      var v2352 = oldData;
      if (v2352) {
        v2352 = oldData.events;
      }
      var events$$1 = v2352;
      if (events$$1) {
        delete curData.handle;
        curData.events = {};
        var type$$27;
        for (type$$27 in events$$1) {
          var handler$$3;
          introspect(JAM.policy.p3) {
            var v2356 = events$$1[type$$27]
          }
          for (handler$$3 in v2356) {
            var v2353 = jQuery$$1.event;
            introspect(JAM.policy.p3) {
              var v3741 = events$$1[type$$27]
            }
            introspect(JAM.policy.p3) {
              var v2354 = v3741[handler$$3]
            }
            introspect(JAM.policy.p3) {
              var v4639 = events$$1[type$$27]
            }
            introspect(JAM.policy.p3) {
              var v3742 = v4639[handler$$3]
            }
            JAM.call(v2353.add, v2353, [this, type$$27, v2354, v3742.data]);
          }
        }
      }
      return;
    }
    var i$$4 = 0;
    JAM.call(ret.each, ret, [v6]);
    return;
  }
  function buildFragment(args$$2, nodes, scripts) {
    var fragment;
    var cacheable;
    var cacheresults;
    var v2357;
    var v4640 = nodes;
    if (v4640) {
      v4640 = nodes[0];
    }
    if (v4640) {
      var v3743 = nodes[0].ownerDocument;
      if (!v3743) {
        v3743 = nodes[0];
      }
      v2357 = v3743;
    } else {
      v2357 = document$$1;
    }
    var doc = v2357;
    var v5440 = args$$2.length === 1;
    if (v5440) {
      v5440 = typeof args$$2[0] === "string";
    }
    var v5358 = v5440;
    if (v5358) {
      v5358 = args$$2[0].length < 512;
    }
    var v5126 = v5358;
    if (v5126) {
      v5126 = doc === document$$1;
    }
    var v4643 = v5126;
    if (v4643) {
      v4643 = !rnocache.test(args$$2[0]);
    }
    var v3745 = v4643;
    if (v3745) {
      var v4644 = jQuery$$1.support.checkClone;
      if (!v4644) {
        v4644 = !rchecked.test(args$$2[0]);
      }
      v3745 = v4644;
    }
    if (v3745) {
      cacheable = true;
      var v2358 = jQuery$$1.fragments;
      var v2359 = args$$2[0];
      introspect(JAM.policy.p3) {
        cacheresults = v2358[v2359];
      }
      if (cacheresults) {
        if (cacheresults !== 1) {
          fragment = cacheresults;
        }
      }
    }
    if (!fragment) {
      fragment = doc.createDocumentFragment();
      JAM.call(jQuery$$1.clean, jQuery$$1, [args$$2, doc, fragment, scripts]);
    }
    if (cacheable) {
      var v2363 = jQuery$$1.fragments;
      var v2364 = args$$2[0];
      var v3746;
      if (cacheresults) {
        v3746 = fragment;
      } else {
        v3746 = 1;
      }
      JAM.set(v2363, v2364, v3746, JAM.policy.p2);
    }
    return{fragment:fragment, cacheable:cacheable};
  }
  function genFx(type$$28, num$$4) {
    function v7() {
      JAM.set(obj$$16, this, type$$28, JAM.policy.p2);
      return;
    }
    var obj$$16 = {};
    var v3747 = fxAttrs.concat;
    JAM.call(jQuery$$1.each, jQuery$$1, [JAM.call(v3747.apply, v3747, [[], JAM.call(fxAttrs.slice, fxAttrs, [0, num$$4])]), v7]);
    return obj$$16;
  }
  function getWindow(elem$$4) {
    var v2366;
    var v4645 = "scrollTo" in elem$$4;
    if (v4645) {
      v4645 = elem$$4.document;
    }
    if (v4645) {
      v2366 = elem$$4;
    } else {
      var v3749;
      if (elem$$4.nodeType === 9) {
        var v4646 = elem$$4.defaultView;
        if (!v4646) {
          v4646 = elem$$4.parentWindow;
        }
        v3749 = v4646;
      } else {
        v3749 = false;
      }
      v2366 = v3749;
    }
    return v2366;
  }
  var _jQuery = window$$1.jQuery;
  var _$ = window$$1.$;
  var document$$1 = window$$1.document;
  var rootjQuery;
  var quickExpr = /^[^<]*(<[\w\W]+>)[^>]*$|^#([\w-]+)$/;
  var isSimple = /^.[^:#\[\.,]*$/;
  var rnotwhite = /\S/;
  var rtrim = /^(\s|\u00A0)+|(\s|\u00A0)+$/g;
  var rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;
  var userAgent = navigator.userAgent;
  var browserMatch;
  var readyBound = false;
  var readyList = [];
  var DOMContentLoaded;
  var toString = Object.prototype.toString;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var push = Array.prototype.push;
  var slice = Array.prototype.slice;
  var indexOf = Array.prototype.indexOf;
  jQuery$$1.fn = jQuery$$1.prototype = {init:v8, selector:"", jquery:"1.4.2", length:0, size:v9, toArray:v10, get:v11, pushStack:v12, each:v13, ready:v14, eq:v15, first:v16, last:v17, slice:v18, map:v20, end:v21, push:push, sort:[].sort, splice:[].splice};
  jQuery$$1.fn.init.prototype = jQuery$$1.fn;
  jQuery$$1.extend = jQuery$$1.fn.extend = v22;
  JAM.call(jQuery$$1.extend, jQuery$$1, [{noConflict:v23, isReady:false, ready:v24, bindReady:v25, isFunction:v26, isArray:v27, isPlainObject:v28, isEmptyObject:v29, error:v30, parseJSON:v31, noop:v32, globalEval:v33, nodeName:v34, each:v35, trim:v36, makeArray:v37, inArray:v38, merge:v39, grep:v40, map:v41, guid:1, proxy:v43, uaMatch:v44, browser:{}}]);
  browserMatch = JAM.call(jQuery$$1.uaMatch, jQuery$$1, [userAgent]);
  if (browserMatch.browser) {
    JAM.set(jQuery$$1.browser, browserMatch.browser, true, JAM.policy.p2);
    jQuery$$1.browser.version = browserMatch.version;
  }
  if (jQuery$$1.browser.webkit) {
    jQuery$$1.browser.safari = true;
  }
  if (indexOf) {
    jQuery$$1.inArray = v45;
  }
  rootjQuery = jQuery$$1(document$$1);
  if (document$$1.addEventListener) {
    DOMContentLoaded = v46;
  } else {
    if (document$$1.attachEvent) {
      DOMContentLoaded = v47;
    }
  }
  v49();
  jQuery$$1.props = {"for":"htmlFor", "class":"className", readonly:"readOnly", maxlength:"maxLength", cellspacing:"cellSpacing", rowspan:"rowSpan", colspan:"colSpan", tabindex:"tabIndex", usemap:"useMap", frameborder:"frameBorder"};
  var expando = "jQuery" + now();
  var uuid = 0;
  var windowData = {};
  JAM.call(jQuery$$1.extend, jQuery$$1, [{cache:{}, expando:expando, noData:{"embed":true, "object":true, "applet":true}, data:v50, removeData:v51}]);
  var v2387 = jQuery$$1.fn;
  JAM.call(v2387.extend, v2387, [{data:v54, removeData:v56}]);
  JAM.call(jQuery$$1.extend, jQuery$$1, [{queue:v57, dequeue:v59}]);
  var v2390 = jQuery$$1.fn;
  JAM.call(v2390.extend, v2390, [{queue:v61, dequeue:v63, delay:v66, clearQueue:v67}]);
  var rclass = /[\n\t]/g;
  var rspace = /\s+/;
  var rreturn = /\r/g;
  var rspecialurl = /href|src|style/;
  var rtype = /(button|input)/i;
  var rfocusable = /(button|input|object|select|textarea)/i;
  var rclickable = /^(a|area)$/i;
  var rradiocheck = /radio|checkbox/;
  var v2392 = jQuery$$1.fn;
  JAM.call(v2392.extend, v2392, [{attr:v68, removeAttr:v70, addClass:v72, removeClass:v74, toggleClass:v77, hasClass:v78, val:v81}]);
  JAM.call(jQuery$$1.extend, jQuery$$1, [{attrFn:{val:true, css:true, html:true, text:true, data:true, width:true, height:true, offset:true}, attr:v82}]);
  var rnamespaces = /\.(.*)$/;
  jQuery$$1.event = {add:v84, global:{}, remove:v85, trigger:v87, handle:v88, props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "), fix:v89, guid:1E8, proxy:jQuery$$1.proxy, special:{ready:{setup:jQuery$$1.bindReady, 
  teardown:jQuery$$1.noop}, live:{add:v90, remove:v92}, beforeunload:{setup:v93, teardown:v94}}};
  var v2396;
  if (document$$1.removeEventListener) {
    v2396 = v95;
  } else {
    v2396 = v96;
  }
  var removeEvent = v2396;
  jQuery$$1.Event = v97;
  jQuery$$1.Event.prototype = {preventDefault:v98, stopPropagation:v99, stopImmediatePropagation:v100, isDefaultPrevented:returnFalse, isPropagationStopped:returnFalse, isImmediatePropagationStopped:returnFalse};
  JAM.call(jQuery$$1.each, jQuery$$1, [{mouseenter:"mouseover", mouseleave:"mouseout"}, v103]);
  if (!jQuery$$1.support.submitBubbles) {
    jQuery$$1.event.special.submit = {setup:v106, teardown:v107};
  }
  if (!jQuery$$1.support.changeBubbles) {
    var formElems = /textarea|input|select/i;
    var changeFilters;
    var getVal = v109;
    var testChange = testChange$$1;
    jQuery$$1.event.special.change = {filters:{focusout:testChange, click:v110, keydown:v111, beforeactivate:v112}, setup:v113, teardown:v114};
    changeFilters = jQuery$$1.event.special.change.filters;
  }
  if (document$$1.addEventListener) {
    JAM.call(jQuery$$1.each, jQuery$$1, [{focus:"focusin", blur:"focusout"}, v117]);
  }
  JAM.call(jQuery$$1.each, jQuery$$1, [["bind", "one"], v120]);
  var v2407 = jQuery$$1.fn;
  JAM.call(v2407.extend, v2407, [{unbind:v121, delegate:v122, undelegate:v123, trigger:v125, triggerHandler:v126, toggle:v128, hover:v129}]);
  var liveMap = {focus:"focusin", blur:"focusout", mouseenter:"mouseover", mouseleave:"mouseout"};
  JAM.call(jQuery$$1.each, jQuery$$1, [["live", "die"], v132]);
  JAM.call(jQuery$$1.each, jQuery$$1, [("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error").split(" "), v134]);
  var v3766 = window$$1.attachEvent;
  if (v3766) {
    v3766 = !window$$1.addEventListener;
  }
  if (v3766) {
    JAM.call(window$$1.attachEvent, window$$1, ["onunload", v135]);
  }
  v207();
  var runtil = /Until$/;
  var rparentsprev = /^(?:parents|prevUntil|prevAll)/;
  var rmultiselector = /,/;
  slice = Array.prototype.slice;
  var v2413 = jQuery$$1.fn;
  JAM.call(v2413.extend, v2413, [{find:v208, has:v210, not:v211, filter:v212, is:v213, closest:v215, index:v216, add:v217, andSelf:v218}]);
  JAM.call(jQuery$$1.each, jQuery$$1, [{parent:v219, parents:v220, parentsUntil:v221, next:v222, prev:v223, nextAll:v224, prevAll:v225, nextUntil:v226, prevUntil:v227, siblings:v228, children:v229, contents:v230}, v232]);
  JAM.call(jQuery$$1.extend, jQuery$$1, [{filter:v233, dir:v234, nth:v235, sibling:v236}]);
  var rinlinejQuery = / jQuery\d+="(?:\d+|null)"/g;
  var rleadingWhitespace = /^\s+/;
  var rxhtmlTag = /(<([\w:]+)[^>]*?)\/>/g;
  var rselfClosing = /^(?:area|br|col|embed|hr|img|input|link|meta|param)$/i;
  var rtagName = /<([\w:]+)/;
  var rtbody = /<tbody/i;
  var rhtml = /<|&#?\w+;/;
  var rnocache = /<script|<object|<embed|<option|<style/i;
  var rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i;
  var wrapMap = {option:[1, "<select multiple='multiple'>", "</select>"], legend:[1, "<fieldset>", "</fieldset>"], thead:[1, "<table>", "</table>"], tr:[2, "<table><tbody>", "</tbody></table>"], td:[3, "<table><tbody><tr>", "</tr></tbody></table>"], col:[2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], area:[1, "<map>", "</map>"], _default:[0, "", ""]};
  wrapMap.optgroup = wrapMap.option;
  wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
  wrapMap.th = wrapMap.td;
  if (!jQuery$$1.support.htmlSerialize) {
    wrapMap._default = [1, "div<div>", "</div>"];
  }
  var v2426 = jQuery$$1.fn;
  JAM.call(v2426.extend, v2426, [{text:v238, wrapAll:v241, wrapInner:v244, wrap:v246, unwrap:v248, append:v250, prepend:v252, before:v254, after:v256, remove:v257, empty:v258, clone:v260, html:v263, replaceWith:v266, detach:v267, domManip:v270}]);
  jQuery$$1.fragments = {};
  JAM.call(jQuery$$1.each, jQuery$$1, [{appendTo:"append", prependTo:"prepend", insertBefore:"before", insertAfter:"after", replaceAll:"replaceWith"}, v272]);
  JAM.call(jQuery$$1.extend, jQuery$$1, [{clean:v273, cleanData:v274}]);
  var rexclude = /z-?index|font-?weight|opacity|zoom|line-?height/i;
  var ralpha = /alpha\([^)]*\)/;
  var ropacity = /opacity=([^)]*)/;
  var rfloat = /float/i;
  var rdashAlpha = /-([a-z])/ig;
  var rupper = /([A-Z])/g;
  var rnumpx = /^-?\d+(?:px)?$/i;
  var rnum = /^-?\d/;
  var cssShow = {position:"absolute", visibility:"hidden", display:"block"};
  var cssWidth = ["Left", "Right"];
  var cssHeight = ["Top", "Bottom"];
  var v2430 = document$$1.defaultView;
  if (v2430) {
    v2430 = document$$1.defaultView.getComputedStyle;
  }
  var getComputedStyle = v2430;
  var v2431;
  if (jQuery$$1.support.cssFloat) {
    v2431 = "cssFloat";
  } else {
    v2431 = "styleFloat";
  }
  var styleFloat = v2431;
  jQuery$$1.fn.css = v276;
  JAM.call(jQuery$$1.extend, jQuery$$1, [{style:v277, css:v280, curCSS:v281, swap:v282}]);
  var v3770 = jQuery$$1.expr;
  if (v3770) {
    v3770 = jQuery$$1.expr.filters;
  }
  if (v3770) {
    jQuery$$1.expr.filters.hidden = v283;
    jQuery$$1.expr.filters.visible = v284;
  }
  var jsc = now();
  var rscript = /<script(.|\s)*?\/script>/gi;
  var rselectTextarea = /select|textarea/i;
  var rinput = /color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week/i;
  var jsre = /=\?(&|$)/;
  var rquery = /\?/;
  var rts = /(\?|&)_=.*?(&|$)/;
  var rurl = /^(\w+:)?\/\/([^\/?#]+)/;
  var r20 = /%20/g;
  var _load = jQuery$$1.fn.load;
  var v2438 = jQuery$$1.fn;
  JAM.call(v2438.extend, v2438, [{load:v286, serialize:v287, serializeArray:v292}]);
  JAM.call(jQuery$$1.each, jQuery$$1, ["ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), v294]);
  var v4659 = location.href;
  var v5135;
  var v5442 = window$$1.XMLHttpRequest;
  if (v5442) {
    var v5470 = window$$1.location.protocol !== "file:";
    if (!v5470) {
      v5470 = !window$$1.ActiveXObject;
    }
    v5442 = v5470;
  }
  if (v5442) {
    v5135 = v300;
  } else {
    v5135 = v301;
  }
  JAM.call(jQuery$$1.extend, jQuery$$1, [{get:v295, getScript:v296, getJSON:v297, post:v298, ajaxSetup:v299, ajaxSettings:{url:v4659, global:true, type:"GET", contentType:"application/x-www-form-urlencoded", processData:true, async:true, xhr:v5135, accepts:{xml:"application/xml, text/xml", html:"text/html", script:"text/javascript, application/javascript", json:"application/json, text/javascript", text:"text/plain", _default:"*/*"}}, lastModified:{}, etag:{}, ajax:v307, handleError:v308, active:0, 
  httpSuccess:v309, httpNotModified:v310, httpData:v311, param:v315}]);
  var elemdisplay = {};
  var rfxtypes = /toggle|show|hide/;
  var rfxnum = /^([+-]=)?([\d+-.]+)(.*)$/;
  var timerId;
  var fxAttrs = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]];
  var v2445 = jQuery$$1.fn;
  JAM.call(v2445.extend, v2445, [{show:v316, hide:v317, _toggle:jQuery$$1.fn.toggle, toggle:v319, fadeTo:v320, animate:v323, stop:v325}]);
  JAM.call(jQuery$$1.each, jQuery$$1, [{slideDown:genFx("show", 1), slideUp:genFx("hide", 1), slideToggle:genFx("toggle", 1), fadeIn:{opacity:"show"}, fadeOut:{opacity:"hide"}}, v327]);
  JAM.call(jQuery$$1.extend, jQuery$$1, [{speed:v329, easing:{linear:v330, swing:v331}, timers:[], fx:v332}]);
  jQuery$$1.fx.prototype = {update:v333, cur:v334, custom:v335, show:v336, hide:v337, step:v338};
  JAM.call(jQuery$$1.extend, jQuery$$1, [jQuery$$1.fx, {tick:v339, stop:v340, speeds:{slow:600, fast:200, _default:400}, step:{opacity:v341, _default:v342}}]);
  var v3783 = jQuery$$1.expr;
  if (v3783) {
    v3783 = jQuery$$1.expr.filters;
  }
  if (v3783) {
    jQuery$$1.expr.filters.animated = v344;
  }
  if ("getBoundingClientRect" in document$$1.documentElement) {
    jQuery$$1.fn.offset = v346;
  } else {
    jQuery$$1.fn.offset = v348;
  }
  jQuery$$1.offset = {initialize:v349, bodyOffset:v350, setOffset:v351};
  var v2457 = jQuery$$1.fn;
  JAM.call(v2457.extend, v2457, [{position:v352, offsetParent:v354}]);
  JAM.call(jQuery$$1.each, jQuery$$1, [["Left", "Top"], v357]);
  JAM.call(jQuery$$1.each, jQuery$$1, [["Height", "Width"], v362]);
  window$$1.jQuery = window$$1.$ = jQuery$$1;
  return;
}
function hexFromRGB(r$$3, g, b$$5) {
  function v0(nr, val$$11) {
    if (val$$11.length == 1) {
      JAM.set(hex, nr, "0" + val$$11, JAM.policy.p2);
    }
    return;
  }
  var hex = [r$$3.toString(16), g.toString(16), b$$5.toString(16)];
  JAM.call($.each, $, [hex, v0]);
  return hex.join("").toUpperCase();
}
function refreshSwatch() {
  var v2466 = JAM.call($, null, ["#red"]);
  var red$$3 = JAM.call(v2466.slider, v2466, ["value"]);
  var v2467 = JAM.call($, null, ["#green"]);
  var green$$3 = JAM.call(v2467.slider, v2467, ["value"]);
  var v2468 = JAM.call($, null, ["#blue"]);
  var blue$$3 = JAM.call(v2468.slider, v2468, ["value"]);
  var hex$$1 = hexFromRGB(red$$3, green$$3, blue$$3);
  var v2469 = JAM.call($, null, ["#swatch"]);
  JAM.call(v2469.css, v2469, ["background-color", "#" + hex$$1]);
  return;
}
v363(window);
v396(jQuery);
v434(jQuery);
v452(jQuery);
v484(jQuery);
$ = window.$;
JAM.call($, null, [v485])
