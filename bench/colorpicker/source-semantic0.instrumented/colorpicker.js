function v485() {
  var v486 = $("#red, #green, #blue");
  var v487 = {orientation:"horizontal", range:"min", max:255, value:127, slide:refreshSwatch, change:refreshSwatch};
  v486.slider(v487);
  var v488 = $("#red");
  v488.slider("value", 255);
  var v489 = $("#green");
  v489.slider("value", 140);
  var v490 = $("#blue");
  v490.slider("value", 60);
  return;
}
function v484($$$4, undefined$$5) {
  function v483(event$$35) {
    var v2492 = event$$35.target;
    var v491 = $$$4(v2492);
    var index$$48 = v491.data("ui-slider-handle-index");
    var v493 = this._keySliding;
    if (v493) {
      this._keySliding = false;
      this._stop(event$$35, index$$48);
      this._change(event$$35, index$$48);
      var v2493 = event$$35.target;
      var v492 = $$$4(v2493);
      v492.removeClass("ui-state-active");
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
    var v2494 = event$$33.target;
    var v494 = $$$4(v2494);
    var index$$47 = v494.data("ui-slider-handle-index");
    var v498 = event$$33.keyCode;
    switch(v498) {
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
        var v2495 = this._keySliding;
        var v497 = !v2495;
        if (v497) {
          this._keySliding = true;
          var v2496 = event$$33.target;
          var v495 = $$$4(v2496);
          v495.addClass("ui-state-active");
          allowed$$2 = this._start(event$$33, index$$47);
          var v496 = allowed$$2 === false;
          if (v496) {
            return;
          }
        }
      ;
    }
    var v499 = this.options;
    step$$1 = v499.step;
    var v3809 = this.options;
    var v2497 = v3809.values;
    if (v2497) {
      var v4694 = this.options;
      var v3810 = v4694.values;
      v2497 = v3810.length;
    }
    var v500 = v2497;
    if (v500) {
      curVal = newVal$$1 = this.values(index$$47);
    } else {
      curVal = newVal$$1 = this.value();
    }
    var v509 = event$$33.keyCode;
    switch(v509) {
      case $$$4.ui.keyCode.HOME:
        var v501 = this.options;
        newVal$$1 = v501.min;
        break;
      case $$$4.ui.keyCode.END:
        var v502 = this.options;
        newVal$$1 = v502.max;
        break;
      case $$$4.ui.keyCode.PAGE_UP:
        var v5164 = this.options;
        var v4695 = v5164.max;
        var v5165 = this.options;
        var v4696 = v5165.min;
        var v3811 = v4695 - v4696;
        var v2498 = v3811 / numPages;
        var v503 = curVal + v2498;
        newVal$$1 = this._trimAlignValue(v503);
        break;
      case $$$4.ui.keyCode.PAGE_DOWN:
        var v5166 = this.options;
        var v4697 = v5166.max;
        var v5167 = this.options;
        var v4698 = v5167.min;
        var v3812 = v4697 - v4698;
        var v2499 = v3812 / numPages;
        var v504 = curVal - v2499;
        newVal$$1 = this._trimAlignValue(v504);
        break;
      case $$$4.ui.keyCode.UP:
      ;
      case $$$4.ui.keyCode.RIGHT:
        var v3813 = this.options;
        var v2500 = v3813.max;
        var v505 = curVal === v2500;
        if (v505) {
          return;
        }
        var v506 = curVal + step$$1;
        newVal$$1 = this._trimAlignValue(v506);
        break;
      case $$$4.ui.keyCode.DOWN:
      ;
      case $$$4.ui.keyCode.LEFT:
        var v3814 = this.options;
        var v2501 = v3814.min;
        var v507 = curVal === v2501;
        if (v507) {
          return;
        }
        var v508 = curVal - step$$1;
        newVal$$1 = this._trimAlignValue(v508);
    }
    this._slide(event$$33, index$$47, newVal$$1);
    return;
  }
  function v480() {
    function v479(i$$110) {
      var v3815 = that$$3.values(i$$110);
      var v4699 = that$$3.options;
      var v3816 = v4699.min;
      var v2502 = v3815 - v3816;
      var v4700 = that$$3.options;
      var v3817 = v4700.max;
      var v4701 = that$$3.options;
      var v3818 = v4701.min;
      var v2503 = v3817 - v3818;
      var v510 = v2502 / v2503;
      valPercent = v510 * 100;
      var v2504;
      var v4702 = that$$3.orientation;
      var v3819 = v4702 === "horizontal";
      if (v3819) {
        v2504 = "left";
      } else {
        v2504 = "bottom";
      }
      var v511 = v2504;
      introspect(JAM.policy.p2) {
        _set[v511] = valPercent + "%";
      }
      var v2505 = $$$4(this);
      var v512 = v2505.stop(1, 1);
      var v2506;
      if (animate) {
        v2506 = "animate";
      } else {
        v2506 = "css";
      }
      var v513 = v2506;
      var v514 = o$$2.animate;
      introspect(JAM.policy.p3) {
        v512[v513](_set, v514);
      }
      var v3820 = that$$3.options;
      var v2507 = v3820.range;
      var v536 = v2507 === true;
      if (v536) {
        var v2508 = that$$3.orientation;
        var v535 = v2508 === "horizontal";
        if (v535) {
          var v519 = i$$110 === 0;
          if (v519) {
            var v2509 = that$$3.range;
            var v515 = v2509.stop(1, 1);
            var v2510;
            if (animate) {
              v2510 = "animate";
            } else {
              v2510 = "css";
            }
            var v516 = v2510;
            var v2511 = valPercent + "%";
            var v517 = {left:v2511};
            var v518 = o$$2.animate;
            introspect(JAM.policy.p3) {
              v515[v516](v517, v518);
            }
          }
          var v524 = i$$110 === 1;
          if (v524) {
            var v520 = that$$3.range;
            var v2512;
            if (animate) {
              v2512 = "animate";
            } else {
              v2512 = "css";
            }
            var v521 = v2512;
            var v3821 = valPercent - lastValPercent;
            var v2513 = v3821 + "%";
            var v522 = {width:v2513};
            var v2514 = o$$2.animate;
            var v523 = {queue:false, duration:v2514};
            introspect(JAM.policy.p3) {
              v520[v521](v522, v523);
            }
          }
        } else {
          var v529 = i$$110 === 0;
          if (v529) {
            var v2515 = that$$3.range;
            var v525 = v2515.stop(1, 1);
            var v2516;
            if (animate) {
              v2516 = "animate";
            } else {
              v2516 = "css";
            }
            var v526 = v2516;
            var v2517 = valPercent + "%";
            var v527 = {bottom:v2517};
            var v528 = o$$2.animate;
            introspect(JAM.policy.p3) {
              v525[v526](v527, v528);
            }
          }
          var v534 = i$$110 === 1;
          if (v534) {
            var v530 = that$$3.range;
            var v2518;
            if (animate) {
              v2518 = "animate";
            } else {
              v2518 = "css";
            }
            var v531 = v2518;
            var v3822 = valPercent - lastValPercent;
            var v2519 = v3822 + "%";
            var v532 = {height:v2519};
            var v2520 = o$$2.animate;
            var v533 = {queue:false, duration:v2520};
            introspect(JAM.policy.p3) {
              v530[v531](v532, v533);
            }
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
    var v537 = this.options;
    var oRange = v537.range;
    var o$$2 = this.options;
    var that$$3 = this;
    var v538;
    var v3823 = this._animateOff;
    var v2521 = !v3823;
    if (v2521) {
      v538 = o$$2.animate;
    } else {
      v538 = false;
    }
    var animate = v538;
    var _set = {};
    var v3824 = this.options;
    var v2522 = v3824.values;
    if (v2522) {
      var v4703 = this.options;
      var v3825 = v4703.values;
      v2522 = v3825.length;
    }
    var v567 = v2522;
    if (v567) {
      var v539 = this.handles;
      v539.each(v479);
    } else {
      value$$51 = this.value();
      var v540 = this.options;
      valueMin = v540.min;
      var v541 = this.options;
      valueMax = v541.max;
      var v542;
      var v2524 = valueMax !== valueMin;
      if (v2524) {
        var v3826 = value$$51 - valueMin;
        var v3827 = valueMax - valueMin;
        var v2523 = v3826 / v3827;
        v542 = v2523 * 100;
      } else {
        v542 = 0;
      }
      valPercent = v542;
      var v2525;
      var v4704 = this.orientation;
      var v3828 = v4704 === "horizontal";
      if (v3828) {
        v2525 = "left";
      } else {
        v2525 = "bottom";
      }
      var v543 = v2525;
      introspect(JAM.policy.p2) {
        _set[v543] = valPercent + "%";
      }
      var v2526 = this.handle;
      var v544 = v2526.stop(1, 1);
      var v2527;
      if (animate) {
        v2527 = "animate";
      } else {
        v2527 = "css";
      }
      var v545 = v2527;
      var v546 = o$$2.animate;
      introspect(JAM.policy.p3) {
        v544[v545](_set, v546);
      }
      var v2528 = oRange === "min";
      if (v2528) {
        var v3829 = this.orientation;
        v2528 = v3829 === "horizontal";
      }
      var v551 = v2528;
      if (v551) {
        var v2529 = this.range;
        var v547 = v2529.stop(1, 1);
        var v2530;
        if (animate) {
          v2530 = "animate";
        } else {
          v2530 = "css";
        }
        var v548 = v2530;
        var v2531 = valPercent + "%";
        var v549 = {width:v2531};
        var v550 = o$$2.animate;
        introspect(JAM.policy.p3) {
          v547[v548](v549, v550);
        }
      }
      var v2532 = oRange === "max";
      if (v2532) {
        var v3830 = this.orientation;
        v2532 = v3830 === "horizontal";
      }
      var v556 = v2532;
      if (v556) {
        var v552 = this.range;
        var v2533;
        if (animate) {
          v2533 = "animate";
        } else {
          v2533 = "css";
        }
        var v553 = v2533;
        var v3831 = 100 - valPercent;
        var v2534 = v3831 + "%";
        var v554 = {width:v2534};
        var v2535 = o$$2.animate;
        var v555 = {queue:false, duration:v2535};
        introspect(JAM.policy.p3) {
          v552[v553](v554, v555);
        }
      }
      var v2536 = oRange === "min";
      if (v2536) {
        var v3832 = this.orientation;
        v2536 = v3832 === "vertical";
      }
      var v561 = v2536;
      if (v561) {
        var v2537 = this.range;
        var v557 = v2537.stop(1, 1);
        var v2538;
        if (animate) {
          v2538 = "animate";
        } else {
          v2538 = "css";
        }
        var v558 = v2538;
        var v2539 = valPercent + "%";
        var v559 = {height:v2539};
        var v560 = o$$2.animate;
        introspect(JAM.policy.p3) {
          v557[v558](v559, v560);
        }
      }
      var v2540 = oRange === "max";
      if (v2540) {
        var v3833 = this.orientation;
        v2540 = v3833 === "vertical";
      }
      var v566 = v2540;
      if (v566) {
        var v562 = this.range;
        var v2541;
        if (animate) {
          v2541 = "animate";
        } else {
          v2541 = "css";
        }
        var v563 = v2541;
        var v3834 = 100 - valPercent;
        var v2542 = v3834 + "%";
        var v564 = {height:v2542};
        var v2543 = o$$2.animate;
        var v565 = {queue:false, duration:v2543};
        introspect(JAM.policy.p3) {
          v562[v563](v564, v565);
        }
      }
    }
    return;
  }
  function v478() {
    var v568 = this.options;
    return v568.max;
  }
  function v477() {
    var v569 = this.options;
    return v569.min;
  }
  function v476(val$$10) {
    var v3835 = this.options;
    var v2544 = v3835.min;
    var v571 = val$$10 <= v2544;
    if (v571) {
      var v570 = this.options;
      return v570.min;
    }
    var v3836 = this.options;
    var v2545 = v3836.max;
    var v573 = val$$10 >= v2545;
    if (v573) {
      var v572 = this.options;
      return v572.max;
    }
    var v574;
    var v4705 = this.options;
    var v3837 = v4705.step;
    var v2547 = v3837 > 0;
    if (v2547) {
      var v2546 = this.options;
      v574 = v2546.step;
    } else {
      v574 = 1;
    }
    var step = v574;
    var v3838 = this.options;
    var v2548 = v3838.min;
    var v575 = val$$10 - v2548;
    var valModStep = v575 % step;
    var alignValue = val$$10 - valModStep;
    var v3839 = Math.abs(valModStep);
    var v2549 = v3839 * 2;
    var v576 = v2549 >= step;
    if (v576) {
      var v3840;
      var v4706 = valModStep > 0;
      if (v4706) {
        v3840 = step;
      } else {
        v3840 = -step;
      }
      var v2550 = v3840;
      alignValue = alignValue + v2550;
    }
    var v577 = alignValue.toFixed(5);
    return parseFloat(v577);
  }
  function v475(index$$46) {
    var val$$9;
    var vals$$1;
    var i$$109;
    var v584 = arguments.length;
    if (v584) {
      var v2551 = this.options;
      var v578 = v2551.values;
      introspect(JAM.policy.p3) {
        val$$9 = v578[index$$46];
      }
      val$$9 = this._trimAlignValue(val$$9);
      return val$$9;
    } else {
      var v3841 = this.options;
      var v2552 = v3841.values;
      if (v2552) {
        var v4707 = this.options;
        var v3842 = v4707.values;
        v2552 = v3842.length;
      }
      var v583 = v2552;
      if (v583) {
        var v2553 = this.options;
        var v579 = v2553.values;
        vals$$1 = v579.slice();
        i$$109 = 0;
        var v2554 = vals$$1.length;
        var v582 = i$$109 < v2554;
        for (;v582;) {
          var v580 = vals$$1;
          var v581 = i$$109;
          introspect(JAM.policy.p3) {
            var v2555 = vals$$1[i$$109]
          }
          var v5539 = this._trimAlignValue(v2555);
          introspect(JAM.policy.p2) {
            v580[v581] = v5539;
          }
          i$$109 = i$$109 + 1;
          var v2556 = vals$$1.length;
          v582 = i$$109 < v2556;
        }
        return vals$$1;
      } else {
        return[];
      }
    }
    return;
  }
  function v474() {
    var v585 = this.options;
    var val$$8 = v585.value;
    val$$8 = this._trimAlignValue(val$$8);
    return val$$8;
  }
  function v473(key$$26, value$$50) {
    var i$$108;
    var valsLength = 0;
    var v2557 = key$$26 === "range";
    if (v2557) {
      var v4708 = this.options;
      var v3843 = v4708.range;
      v2557 = v3843 === true;
    }
    var v592 = v2557;
    if (v592) {
      var v591 = value$$50 === "min";
      if (v591) {
        var v586 = this.options;
        var v5540 = this._values(0);
        v586.value = v5540;
        var v587 = this.options;
        v587.values = null;
      } else {
        var v590 = value$$50 === "max";
        if (v590) {
          var v588 = this.options;
          var v5168 = this.options;
          var v4709 = v5168.values;
          var v3844 = v4709.length;
          var v2558 = v3844 - 1;
          var v5541 = this._values(v2558);
          v588.value = v5541;
          var v589 = this.options;
          v589.values = null;
        }
      }
    }
    var v3845 = this.options;
    var v2559 = v3845.values;
    var v594 = $$$4.isArray(v2559);
    if (v594) {
      var v2560 = this.options;
      var v593 = v2560.values;
      valsLength = v593.length;
    }
    var v3846 = $$$4.Widget;
    var v2561 = v3846.prototype;
    var v595 = v2561._setOption;
    v595.apply(this, arguments);
    switch(key$$26) {
      case "orientation":
        this._detectOrientation();
        var v2562 = this.element;
        var v596 = v2562.removeClass("ui-slider-horizontal ui-slider-vertical");
        var v2563 = this.orientation;
        var v597 = "ui-slider-" + v2563;
        v596.addClass(v597);
        this._refreshValue();
        break;
      case "value":
        this._animateOff = true;
        this._refreshValue();
        this._change(null, 0);
        this._animateOff = false;
        break;
      case "values":
        this._animateOff = true;
        this._refreshValue();
        i$$108 = 0;
        var v598 = i$$108 < valsLength;
        for (;v598;) {
          this._change(null, i$$108);
          i$$108 = i$$108 + 1;
          v598 = i$$108 < valsLength;
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
    var v2564 = arguments.length;
    var v601 = v2564 > 1;
    if (v601) {
      var v2565 = this.options;
      var v599 = v2565.values;
      var v600 = index$$45;
      var v5542 = this._trimAlignValue(newValue$$1);
      introspect(JAM.policy.p2) {
        v599[v600] = v5542;
      }
      this._refreshValue();
      this._change(null, index$$45);
      return;
    }
    var v608 = arguments.length;
    if (v608) {
      var v2566 = arguments[0];
      var v607 = $$$4.isArray(v2566);
      if (v607) {
        var v602 = this.options;
        vals = v602.values;
        newValues$$1 = arguments[0];
        i$$107 = 0;
        var v2567 = vals.length;
        var v605 = i$$107 < v2567;
        for (;v605;) {
          var v603 = vals;
          var v604 = i$$107;
          introspect(JAM.policy.p3) {
            var v2568 = newValues$$1[i$$107]
          }
          var v5543 = this._trimAlignValue(v2568);
          introspect(JAM.policy.p2) {
            v603[v604] = v5543;
          }
          this._change(null, i$$107);
          i$$107 = i$$107 + 1;
          var v2569 = vals.length;
          v605 = i$$107 < v2569;
        }
        this._refreshValue();
      } else {
        var v3847 = this.options;
        var v2570 = v3847.values;
        if (v2570) {
          var v4710 = this.options;
          var v3848 = v4710.values;
          v2570 = v3848.length;
        }
        var v606 = v2570;
        if (v606) {
          return this._values(index$$45);
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
    var v610 = arguments.length;
    if (v610) {
      var v609 = this.options;
      var v5544 = this._trimAlignValue(newValue);
      v609.value = v5544;
      this._refreshValue();
      this._change(null, 0);
      return;
    }
    return this._value();
  }
  function v470(event$$32, index$$44) {
    var v3849 = this._keySliding;
    var v2571 = !v3849;
    if (v2571) {
      var v3850 = this._mouseSliding;
      v2571 = !v3850;
    }
    var v616 = v2571;
    if (v616) {
      var v2572 = this.handles;
      introspect(JAM.policy.p3) {
        var v611 = v2572[index$$44]
      }
      var v612 = this.value();
      var uiHash$$2 = {handle:v611, value:v612};
      var v3851 = this.options;
      var v2573 = v3851.values;
      if (v2573) {
        var v4711 = this.options;
        var v3852 = v4711.values;
        v2573 = v3852.length;
      }
      var v615 = v2573;
      if (v615) {
        var v613 = uiHash$$2;
        var v5545 = this.values(index$$44);
        v613.value = v5545;
        var v614 = uiHash$$2;
        var v5546 = this.values();
        v614.values = v5546;
      }
      this._lastChangedValue = index$$44;
      this._trigger("change", event$$32, uiHash$$2);
    }
    return;
  }
  function v469(event$$31, index$$43) {
    var v2574 = this.handles;
    introspect(JAM.policy.p3) {
      var v617 = v2574[index$$43]
    }
    var v618 = this.value();
    var uiHash$$1 = {handle:v617, value:v618};
    var v3853 = this.options;
    var v2575 = v3853.values;
    if (v2575) {
      var v4712 = this.options;
      var v3854 = v4712.values;
      v2575 = v3854.length;
    }
    var v621 = v2575;
    if (v621) {
      var v619 = uiHash$$1;
      var v5547 = this.values(index$$43);
      v619.value = v5547;
      var v620 = uiHash$$1;
      var v5548 = this.values();
      v620.values = v5548;
    }
    this._trigger("stop", event$$31, uiHash$$1);
    return;
  }
  function v468(event$$30, index$$42, newVal) {
    var otherVal;
    var newValues;
    var allowed$$1;
    var v3855 = this.options;
    var v2576 = v3855.values;
    if (v2576) {
      var v4713 = this.options;
      var v3856 = v4713.values;
      v2576 = v3856.length;
    }
    var v631 = v2576;
    if (v631) {
      var v2577;
      if (index$$42) {
        v2577 = 0;
      } else {
        v2577 = 1;
      }
      var v622 = v2577;
      otherVal = this.values(v622);
      var v5399 = this.options;
      var v5169 = v5399.values;
      var v4714 = v5169.length;
      var v3857 = v4714 === 2;
      if (v3857) {
        var v5170 = this.options;
        var v4715 = v5170.range;
        v3857 = v4715 === true;
      }
      var v2578 = v3857;
      if (v2578) {
        var v4716 = index$$42 === 0;
        if (v4716) {
          v4716 = newVal > otherVal;
        }
        var v3858 = v4716;
        var v4718 = !v3858;
        if (v4718) {
          var v4717 = index$$42 === 1;
          if (v4717) {
            v4717 = newVal < otherVal;
          }
          v3858 = v4717;
        }
        v2578 = v3858;
      }
      var v623 = v2578;
      if (v623) {
        newVal = otherVal;
      }
      var v2579 = newVal;
      var v2580 = this.values(index$$42);
      var v627 = v2579 !== v2580;
      if (v627) {
        newValues = this.values();
        introspect(JAM.policy.p2) {
          newValues[index$$42] = newVal;
        }
        var v3859 = this.handles;
        introspect(JAM.policy.p3) {
          var v2581 = v3859[index$$42]
        }
        var v624 = {handle:v2581, value:newVal, values:newValues};
        allowed$$1 = this._trigger("slide", event$$30, v624);
        var v2582;
        if (index$$42) {
          v2582 = 0;
        } else {
          v2582 = 1;
        }
        var v625 = v2582;
        otherVal = this.values(v625);
        var v626 = allowed$$1 !== false;
        if (v626) {
          this.values(index$$42, newVal, true);
        }
      }
    } else {
      var v2583 = newVal;
      var v2584 = this.value();
      var v630 = v2583 !== v2584;
      if (v630) {
        var v3860 = this.handles;
        introspect(JAM.policy.p3) {
          var v2585 = v3860[index$$42]
        }
        var v628 = {handle:v2585, value:newVal};
        allowed$$1 = this._trigger("slide", event$$30, v628);
        var v629 = allowed$$1 !== false;
        if (v629) {
          this.value(newVal);
        }
      }
    }
    return;
  }
  function v467(event$$29, index$$41) {
    var v2586 = this.handles;
    introspect(JAM.policy.p3) {
      var v632 = v2586[index$$41]
    }
    var v633 = this.value();
    var uiHash = {handle:v632, value:v633};
    var v3861 = this.options;
    var v2587 = v3861.values;
    if (v2587) {
      var v4719 = this.options;
      var v3862 = v4719.values;
      v2587 = v3862.length;
    }
    var v636 = v2587;
    if (v636) {
      var v634 = uiHash;
      var v5549 = this.values(index$$41);
      v634.value = v5549;
      var v635 = uiHash;
      var v5550 = this.values();
      v635.values = v5550;
    }
    return this._trigger("start", event$$29, uiHash);
  }
  function v466(position$$3) {
    var pixelTotal;
    var pixelMouse;
    var percentMouse;
    var valueTotal;
    var valueMouse;
    var v2588 = this.orientation;
    var v643 = v2588 === "horizontal";
    if (v643) {
      var v637 = this.elementSize;
      pixelTotal = v637.width;
      var v2589 = position$$3.x;
      var v3863 = this.elementOffset;
      var v2590 = v3863.left;
      var v638 = v2589 - v2590;
      var v2591;
      var v3865 = this._clickOffset;
      if (v3865) {
        var v3864 = this._clickOffset;
        v2591 = v3864.left;
      } else {
        v2591 = 0;
      }
      var v639 = v2591;
      pixelMouse = v638 - v639;
    } else {
      var v640 = this.elementSize;
      pixelTotal = v640.height;
      var v2592 = position$$3.y;
      var v3866 = this.elementOffset;
      var v2593 = v3866.top;
      var v641 = v2592 - v2593;
      var v2594;
      var v3868 = this._clickOffset;
      if (v3868) {
        var v3867 = this._clickOffset;
        v2594 = v3867.top;
      } else {
        v2594 = 0;
      }
      var v642 = v2594;
      pixelMouse = v641 - v642;
    }
    percentMouse = pixelMouse / pixelTotal;
    var v644 = percentMouse > 1;
    if (v644) {
      percentMouse = 1;
    }
    var v645 = percentMouse < 0;
    if (v645) {
      percentMouse = 0;
    }
    var v2595 = this.orientation;
    var v646 = v2595 === "vertical";
    if (v646) {
      percentMouse = 1 - percentMouse;
    }
    var v2596 = this.options;
    var v647 = v2596.max;
    var v2597 = this.options;
    var v648 = v2597.min;
    valueTotal = v647 - v648;
    var v2598 = this.options;
    var v649 = v2598.min;
    var v650 = percentMouse * valueTotal;
    valueMouse = v649 + v650;
    return this._trimAlignValue(valueMouse);
  }
  function v465() {
    var v651;
    var v4720 = this.options;
    var v3869 = v4720.orientation;
    var v2599 = v3869 === "vertical";
    if (v2599) {
      v651 = "vertical";
    } else {
      v651 = "horizontal";
    }
    this.orientation = v651;
    return;
  }
  function v464(event$$28) {
    var v652 = this.handles;
    v652.removeClass("ui-state-active");
    this._mouseSliding = false;
    var v653 = this._handleIndex;
    this._stop(event$$28, v653);
    var v654 = this._handleIndex;
    this._change(event$$28, v654);
    this._handleIndex = null;
    this._clickOffset = null;
    this._animateOff = false;
    return false;
  }
  function v463(event$$27) {
    var v655 = event$$27.pageX;
    var v656 = event$$27.pageY;
    var position$$2 = {x:v655, y:v656};
    var normValue$$1 = this._normValueFromMouse(position$$2);
    var v657 = this._handleIndex;
    this._slide(event$$27, v657, normValue$$1);
    return false;
  }
  function v462() {
    return true;
  }
  function v461(event$$26) {
    function v460(i$$106) {
      var v2600 = normValue;
      var v2601 = that$$2.values(i$$106);
      var v658 = v2600 - v2601;
      var thisDistance = Math.abs(v658);
      var v2602 = distance > thisDistance;
      var v3871 = !v2602;
      if (v3871) {
        var v3870 = distance === thisDistance;
        if (v3870) {
          var v5171 = that$$2._lastChangedValue;
          var v4721 = i$$106 === v5171;
          var v5174 = !v4721;
          if (v5174) {
            var v5172 = that$$2.values(i$$106);
            var v5173 = o$$1.min;
            v4721 = v5172 === v5173;
          }
          v3870 = v4721;
        }
        v2602 = v3870;
      }
      var v659 = v2602;
      if (v659) {
        distance = thisDistance;
        closestHandle = $$$4(this);
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
    var v660 = o$$1.disabled;
    if (v660) {
      return false;
    }
    var v2603 = this.element;
    var v661 = v2603.outerWidth();
    var v2604 = this.element;
    var v662 = v2604.outerHeight();
    this.elementSize = {width:v661, height:v662};
    var v663 = this.element;
    var v5551 = v663.offset();
    this.elementOffset = v5551;
    var v664 = event$$26.pageX;
    var v665 = event$$26.pageY;
    position$$1 = {x:v664, y:v665};
    normValue = this._normValueFromMouse(position$$1);
    var v3872 = this.options;
    var v2605 = v3872.max;
    var v3873 = this.options;
    var v2606 = v3873.min;
    var v666 = v2605 - v2606;
    distance = v666 + 1;
    var v667 = this.handles;
    v667.each(v460);
    allowed = this._start(event$$26, index$$40);
    var v668 = allowed === false;
    if (v668) {
      return false;
    }
    this._mouseSliding = true;
    this._handleIndex = index$$40;
    var v669 = closestHandle.addClass("ui-state-active");
    v669.focus();
    offset$$9 = closestHandle.offset();
    var v5175 = event$$26.target;
    var v4722 = $$$4(v5175);
    var v3874 = v4722.parents();
    var v2607 = v3874.addBack();
    var v670 = v2607.is(".ui-slider-handle");
    mouseOverHandle = !v670;
    var v671;
    if (mouseOverHandle) {
      v671 = {left:0, top:0};
    } else {
      var v4723 = event$$26.pageX;
      var v4724 = offset$$9.left;
      var v3875 = v4723 - v4724;
      var v4725 = closestHandle.width();
      var v3876 = v4725 / 2;
      var v2608 = v3875 - v3876;
      var v5482 = event$$26.pageY;
      var v5483 = offset$$9.top;
      var v5400 = v5482 - v5483;
      var v5484 = closestHandle.height();
      var v5401 = v5484 / 2;
      var v5176 = v5400 - v5401;
      var v5485 = closestHandle.css("borderTopWidth");
      var v5402 = parseInt(v5485, 10);
      var v5486 = !v5402;
      if (v5486) {
        v5402 = 0;
      }
      var v5177 = v5402;
      var v4726 = v5176 - v5177;
      var v5403 = closestHandle.css("borderBottomWidth");
      var v5178 = parseInt(v5403, 10);
      var v5404 = !v5178;
      if (v5404) {
        v5178 = 0;
      }
      var v4727 = v5178;
      var v3877 = v4726 - v4727;
      var v5179 = closestHandle.css("marginTop");
      var v4728 = parseInt(v5179, 10);
      var v5180 = !v4728;
      if (v5180) {
        v4728 = 0;
      }
      var v3878 = v4728;
      var v2609 = v3877 + v3878;
      v671 = {left:v2608, top:v2609};
    }
    this._clickOffset = v671;
    var v3879 = this.handles;
    var v2610 = v3879.hasClass("ui-state-hover");
    var v672 = !v2610;
    if (v672) {
      this._slide(event$$26, index$$40, normValue);
    }
    this._animateOff = true;
    return true;
  }
  function v459() {
    var v673 = this.handles;
    v673.remove();
    var v674 = this.range;
    v674.remove();
    var v675 = this.element;
    var v5181 = "ui-slider" + " ui-slider-horizontal";
    var v4729 = v5181 + " ui-slider-vertical";
    var v3880 = v4729 + " ui-widget";
    var v2611 = v3880 + " ui-widget-content";
    var v676 = v2611 + " ui-corner-all";
    v675.removeClass(v676);
    this._mouseDestroy();
    return;
  }
  function v458() {
    var v2612 = this.handles;
    var v2613 = this.range;
    var v677 = v2612.add(v2613);
    var elements$$1 = v677.filter("a");
    this._off(elements$$1);
    var v678 = this._handleEvents;
    this._on(elements$$1, v678);
    this._hoverable(elements$$1);
    this._focusable(elements$$1);
    return;
  }
  function v457() {
    var options$$15 = this.options;
    var classes = "";
    var v695 = options$$15.range;
    if (v695) {
      var v2614 = options$$15.range;
      var v687 = v2614 === true;
      if (v687) {
        var v2615 = options$$15.values;
        var v686 = !v2615;
        if (v686) {
          var v2616 = this.options;
          var v679 = v2616.min;
          var v2617 = this.options;
          var v680 = v2617.min;
          options$$15.values = [v679, v680];
        } else {
          var v3881 = options$$15.values;
          var v2618 = v3881.length;
          if (v2618) {
            var v4730 = options$$15.values;
            var v3882 = v4730.length;
            v2618 = v3882 !== 2;
          }
          var v685 = v2618;
          if (v685) {
            var v2619 = options$$15.values;
            var v681 = v2619[0];
            var v2620 = options$$15.values;
            var v682 = v2620[0];
            options$$15.values = [v681, v682];
          } else {
            var v2621 = options$$15.values;
            var v684 = $$$4.isArray(v2621);
            if (v684) {
              var v683 = options$$15;
              var v2622 = options$$15.values;
              var v5552 = v2622.slice(0);
              v683.values = v5552;
            }
          }
        }
      }
      var v3883 = this.range;
      var v2623 = !v3883;
      var v3885 = !v2623;
      if (v3885) {
        var v4731 = this.range;
        var v3884 = v4731.length;
        v2623 = !v3884;
      }
      var v692 = v2623;
      if (v692) {
        var v688 = $$$4("<div></div>");
        var v689 = this.element;
        var v5553 = v688.appendTo(v689);
        this.range = v5553;
        classes = "ui-slider-range" + " ui-widget-header ui-corner-all";
      } else {
        var v2624 = this.range;
        var v690 = v2624.removeClass("ui-slider-range-min ui-slider-range-max");
        var v691 = {"left":"", "bottom":""};
        v690.css(v691);
      }
      var v693 = this.range;
      var v3886;
      var v5405 = options$$15.range;
      var v5182 = v5405 === "min";
      var v5407 = !v5182;
      if (v5407) {
        var v5406 = options$$15.range;
        v5182 = v5406 === "max";
      }
      var v4733 = v5182;
      if (v4733) {
        var v4732 = options$$15.range;
        v3886 = " ui-slider-range-" + v4732;
      } else {
        v3886 = "";
      }
      var v2625 = v3886;
      var v694 = classes + v2625;
      v693.addClass(v694);
    } else {
      var v5554 = $$$4([]);
      this.range = v5554;
    }
    return;
  }
  function v456() {
    function v455(i$$105) {
      var v696 = $$$4(this);
      v696.data("ui-slider-handle-index", i$$105);
      return;
    }
    var i$$104;
    var handleCount;
    var options$$14 = this.options;
    var v2626 = this.element;
    var v697 = v2626.find(".ui-slider-handle");
    var existingHandles = v697.addClass("ui-state-default ui-corner-all");
    var handle$$16 = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>";
    var handles = [];
    var v2627 = options$$14.values;
    if (v2627) {
      var v3887 = options$$14.values;
      v2627 = v3887.length;
    }
    var v698 = v2627;
    var v2628 = !v698;
    if (v2628) {
      v698 = 1;
    }
    handleCount = v698;
    var v2629 = existingHandles.length;
    var v700 = v2629 > handleCount;
    if (v700) {
      var v699 = existingHandles.slice(handleCount);
      v699.remove();
      existingHandles = existingHandles.slice(0, handleCount);
    }
    i$$104 = existingHandles.length;
    var v701 = i$$104 < handleCount;
    for (;v701;) {
      handles.push(handle$$16);
      i$$104 = i$$104 + 1;
      v701 = i$$104 < handleCount;
    }
    var v3888 = handles.join("");
    var v2630 = $$$4(v3888);
    var v2631 = this.element;
    var v702 = v2630.appendTo(v2631);
    var v5555 = existingHandles.add(v702);
    this.handles = v5555;
    var v703 = this.handles;
    var v5556 = v703.eq(0);
    this.handle = v5556;
    var v704 = this.handles;
    v704.each(v455);
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
    var v705 = this.element;
    var v5183 = "ui-slider" + " ui-slider-";
    var v5184 = this.orientation;
    var v4734 = v5183 + v5184;
    var v3889 = v4734 + " ui-widget";
    var v2632 = v3889 + " ui-widget-content";
    var v706 = v2632 + " ui-corner-all";
    v705.addClass(v706);
    this._refresh();
    var v2633 = this.options;
    var v707 = v2633.disabled;
    this._setOption("disabled", v707);
    this._animateOff = false;
    return;
  }
  var numPages = 5;
  var v2634 = $$$4.ui;
  var v708 = v2634.mouse;
  var v2635 = {animate:false, distance:0, max:100, min:0, orientation:"horizontal", range:false, step:1, value:0, values:null, change:null, slide:null, start:null, stop:null};
  var v2636 = {keydown:v481, click:v482, keyup:v483};
  var v709 = {version:"1.10.1", widgetEventPrefix:"slide", options:v2635, _create:v453, _refresh:v454, _createHandles:v456, _createRange:v457, _setupEvents:v458, _destroy:v459, _mouseCapture:v461, _mouseStart:v462, _mouseDrag:v463, _mouseStop:v464, _detectOrientation:v465, _normValueFromMouse:v466, _start:v467, _slide:v468, _stop:v469, _change:v470, value:v471, values:v472, _setOption:v473, _value:v474, _values:v475, _trimAlignValue:v476, _valueMin:v477, _valueMax:v478, _refreshValue:v480, _handleEvents:v2636};
  $$$4.widget("ui.slider", v708, v709);
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
    var v5185 = this._mouseDownEvent;
    var v4735 = v5185.pageX;
    var v4736 = event$$25.pageX;
    var v3890 = v4735 - v4736;
    var v2637 = Math.abs(v3890);
    var v5186 = this._mouseDownEvent;
    var v4737 = v5186.pageY;
    var v4738 = event$$25.pageY;
    var v3891 = v4737 - v4738;
    var v2638 = Math.abs(v3891);
    var v710 = Math.max(v2637, v2638);
    var v2639 = this.options;
    var v711 = v2639.distance;
    return v710 >= v711;
  }
  function v445(event$$24) {
    var v2640 = $$$3(document);
    var v3892 = this.widgetName;
    var v2641 = "mousemove." + v3892;
    var v2642 = this._mouseMoveDelegate;
    var v712 = v2640.unbind(v2641, v2642);
    var v2643 = this.widgetName;
    var v713 = "mouseup." + v2643;
    var v714 = this._mouseUpDelegate;
    v712.unbind(v713, v714);
    var v718 = this._mouseStarted;
    if (v718) {
      this._mouseStarted = false;
      var v2644 = event$$24.target;
      var v3893 = this._mouseDownEvent;
      var v2645 = v3893.target;
      var v717 = v2644 === v2645;
      if (v717) {
        var v715 = event$$24.target;
        var v2646 = this.widgetName;
        var v716 = v2646 + ".preventClickEvent";
        $$$3.data(v715, v716, true);
      }
      this._mouseStop(event$$24);
    }
    return false;
  }
  function v444(event$$23) {
    var v4739 = $$$3.ui;
    var v3894 = v4739.ie;
    if (v3894) {
      var v5187 = document.documentMode;
      var v4740 = !v5187;
      var v5189 = !v4740;
      if (v5189) {
        var v5188 = document.documentMode;
        v4740 = v5188 < 9;
      }
      v3894 = v4740;
    }
    var v2647 = v3894;
    if (v2647) {
      var v3895 = event$$23.button;
      v2647 = !v3895;
    }
    var v719 = v2647;
    if (v719) {
      return this._mouseUp(event$$23);
    }
    var v720 = this._mouseStarted;
    if (v720) {
      this._mouseDrag(event$$23);
      return event$$23.preventDefault();
    }
    var v2648 = this._mouseDistanceMet(event$$23);
    if (v2648) {
      v2648 = this.mouseDelayMet;
    }
    var v723 = v2648;
    if (v723) {
      var v2649 = this._mouseDownEvent;
      var v721 = this._mouseStart(v2649, event$$23);
      this._mouseStarted = v721 !== false;
      var v722;
      var v2650 = this._mouseStarted;
      if (v2650) {
        v722 = this._mouseDrag(event$$23);
      } else {
        v722 = this._mouseUp(event$$23);
      }
      v722;
    }
    var v724 = this._mouseStarted;
    return!v724;
  }
  function v443(event$$20) {
    function v442(event$$22) {
      return that$$1._mouseUp(event$$22);
    }
    function v441(event$$21) {
      return that$$1._mouseMove(event$$21);
    }
    function v440() {
      that$$1.mouseDelayMet = true;
      return;
    }
    if (mouseHandled) {
      return;
    }
    var v725 = this._mouseStarted;
    if (v725) {
      this._mouseUp(event$$20);
    }
    this._mouseDownEvent = event$$20;
    var that$$1 = this;
    var v726 = event$$20.which;
    var btnIsLeft = v726 === 1;
    var v727;
    var v5408 = this.options;
    var v5190 = v5408.cancel;
    var v4741 = typeof v5190;
    var v3896 = v4741 === "string";
    if (v3896) {
      var v4742 = event$$20.target;
      v3896 = v4742.nodeName;
    }
    var v2652 = v3896;
    if (v2652) {
      var v4743 = event$$20.target;
      var v3897 = $$$3(v4743);
      var v4744 = this.options;
      var v3898 = v4744.cancel;
      var v2651 = v3897.closest(v3898);
      v727 = v2651.length;
    } else {
      v727 = false;
    }
    var elIsCancel = v727;
    var v3899 = !btnIsLeft;
    var v4745 = !v3899;
    if (v4745) {
      v3899 = elIsCancel;
    }
    var v2653 = v3899;
    var v3901 = !v2653;
    if (v3901) {
      var v3900 = this._mouseCapture(event$$20);
      v2653 = !v3900;
    }
    var v728 = v2653;
    if (v728) {
      return true;
    }
    var v2654 = this.options;
    var v729 = v2654.delay;
    this.mouseDelayMet = !v729;
    var v2655 = this.mouseDelayMet;
    var v731 = !v2655;
    if (v731) {
      var v2656 = this.options;
      var v730 = v2656.delay;
      var v5557 = setTimeout(v440, v730);
      this._mouseDelayTimer = v5557;
    }
    var v2657 = this._mouseDistanceMet(event$$20);
    if (v2657) {
      v2657 = this.mouseDelayMet;
    }
    var v734 = v2657;
    if (v734) {
      var v732 = this._mouseStart(event$$20);
      this._mouseStarted = v732 !== false;
      var v2658 = this._mouseStarted;
      var v733 = !v2658;
      if (v733) {
        event$$20.preventDefault();
        return true;
      }
    }
    var v3902 = event$$20.target;
    var v4746 = this.widgetName;
    var v3903 = v4746 + ".preventClickEvent";
    var v2659 = $$$3.data(v3902, v3903);
    var v737 = true === v2659;
    if (v737) {
      var v735 = event$$20.target;
      var v2660 = this.widgetName;
      var v736 = v2660 + ".preventClickEvent";
      $$$3.removeData(v735, v736);
    }
    this._mouseMoveDelegate = v441;
    this._mouseUpDelegate = v442;
    var v2661 = $$$3(document);
    var v3904 = this.widgetName;
    var v2662 = "mousemove." + v3904;
    var v2663 = this._mouseMoveDelegate;
    var v738 = v2661.bind(v2662, v2663);
    var v2664 = this.widgetName;
    var v739 = "mouseup." + v2664;
    var v740 = this._mouseUpDelegate;
    v738.bind(v739, v740);
    event$$20.preventDefault();
    mouseHandled = true;
    return true;
  }
  function v439() {
    var v741 = this.element;
    var v2665 = this.widgetName;
    var v742 = "." + v2665;
    v741.unbind(v742);
    var v746 = this._mouseMoveDelegate;
    if (v746) {
      var v2666 = $$$3(document);
      var v3905 = this.widgetName;
      var v2667 = "mousemove." + v3905;
      var v2668 = this._mouseMoveDelegate;
      var v743 = v2666.unbind(v2667, v2668);
      var v2669 = this.widgetName;
      var v744 = "mouseup." + v2669;
      var v745 = this._mouseUpDelegate;
      v743.unbind(v744, v745);
    }
    return;
  }
  function v438() {
    function v437(event$$19) {
      var v3906 = event$$19.target;
      var v4747 = that.widgetName;
      var v3907 = v4747 + ".preventClickEvent";
      var v2670 = $$$3.data(v3906, v3907);
      var v749 = true === v2670;
      if (v749) {
        var v747 = event$$19.target;
        var v2671 = that.widgetName;
        var v748 = v2671 + ".preventClickEvent";
        $$$3.removeData(v747, v748);
        event$$19.stopImmediatePropagation();
        return false;
      }
      return;
    }
    function v436(event$$18) {
      return that._mouseDown(event$$18);
    }
    var that = this;
    var v2672 = this.element;
    var v3908 = this.widgetName;
    var v2673 = "mousedown." + v3908;
    var v750 = v2672.bind(v2673, v436);
    var v2674 = this.widgetName;
    var v751 = "click." + v2674;
    v750.bind(v751, v437);
    this.started = false;
    return;
  }
  function v435() {
    mouseHandled = false;
    return;
  }
  var mouseHandled = false;
  var v752 = $$$3(document);
  v752.mouseup(v435);
  var v2675 = {cancel:"input,textarea,button,select,option", distance:1, delay:0};
  var v753 = {version:"1.10.1", options:v2675, _mouseInit:v438, _mouseDestroy:v439, _mouseDown:v443, _mouseMove:v444, _mouseUp:v445, _mouseDistanceMet:v446, _mouseDelayMet:v447, _mouseStart:v448, _mouseDrag:v449, _mouseStop:v450, _mouseCapture:v451};
  $$$3.widget("ui.mouse", v753);
  return;
}
function v434($$$2, undefined$$3) {
  function v433(method$$2, defaultEffect) {
    function v432(element$$12, options$$13, callback$$43) {
      function v431(next$$1) {
        var v754 = $$$2(this);
        introspect(JAM.policy.p3) {
          v754[method$$2]();
        }
        if (callback$$43) {
          var v755 = element$$12[0];
          callback$$43.call(v755);
        }
        next$$1();
        return;
      }
      var v2676 = typeof options$$13;
      var v756 = v2676 === "string";
      if (v756) {
        options$$13 = {effect:options$$13};
      }
      var hasOptions;
      var v757;
      var v2678 = !options$$13;
      if (v2678) {
        v757 = method$$2;
      } else {
        var v2677;
        var v4748 = options$$13 === true;
        var v5192 = !v4748;
        if (v5192) {
          var v5191 = typeof options$$13;
          v4748 = v5191 === "number";
        }
        var v3910 = v4748;
        if (v3910) {
          v2677 = defaultEffect;
        } else {
          var v3909 = options$$13.effect;
          var v4749 = !v3909;
          if (v4749) {
            v3909 = defaultEffect;
          }
          v2677 = v3909;
        }
        v757 = v2677;
      }
      var effectName = v757;
      options$$13 = options$$13 || {};
      var v2679 = typeof options$$13;
      var v758 = v2679 === "number";
      if (v758) {
        options$$13 = {duration:options$$13};
      }
      var v759 = $$$2.isEmptyObject(options$$13);
      hasOptions = !v759;
      options$$13.complete = callback$$43;
      var v761 = options$$13.delay;
      if (v761) {
        var v760 = options$$13.delay;
        element$$12.delay(v760);
      }
      var v3911 = hasOptions;
      if (v3911) {
        v3911 = $$$2.effects;
      }
      var v2680 = v3911;
      if (v2680) {
        var v4750 = $$$2.effects;
        var v3912 = v4750.effect;
        introspect(JAM.policy.p3) {
          v2680 = v3912[effectName];
        }
      }
      var v765 = v2680;
      if (v765) {
        introspect(JAM.policy.p3) {
          element$$12[method$$2](options$$13);
        }
      } else {
        var v2681 = effectName !== method$$2;
        if (v2681) {
          introspect(JAM.policy.p3) {
            v2681 = element$$12[effectName];
          }
        }
        var v764 = v2681;
        if (v764) {
          var v762 = options$$13.duration;
          var v763 = options$$13.easing;
          introspect(JAM.policy.p3) {
            element$$12[effectName](v762, v763, callback$$43);
          }
        } else {
          element$$12.queue(v431);
        }
      }
      return;
    }
    var v2682 = $$$2.Widget;
    var v766 = v2682.prototype;
    var v767 = "_" + method$$2;
    introspect(JAM.policy.p2) {
      v766[v767] = v432;
    }
    return;
  }
  function v430(type$$67, event$$17, data$$44) {
    var prop$$9;
    var orig$$4;
    var v768 = this.options;
    introspect(JAM.policy.p3) {
      var callback$$42 = v768[type$$67]
    }
    data$$44 = data$$44 || {};
    event$$17 = $$$2.Event(event$$17);
    var v769 = event$$17;
    var v3913;
    var v5193 = this.widgetEventPrefix;
    var v4752 = type$$67 === v5193;
    if (v4752) {
      v3913 = type$$67;
    } else {
      var v4751 = this.widgetEventPrefix;
      v3913 = v4751 + type$$67;
    }
    var v2683 = v3913;
    var v5558 = v2683.toLowerCase();
    v769.type = v5558;
    var v770 = this.element;
    event$$17.target = v770[0];
    orig$$4 = event$$17.originalEvent;
    if (orig$$4) {
      for (prop$$9 in orig$$4) {
        var v2684 = prop$$9 in event$$17;
        var v771 = !v2684;
        if (v771) {
          introspect(JAM.policy.p4) {
            event$$17[prop$$9] = orig$$4[prop$$9];
          }
        }
      }
    }
    var v772 = this.element;
    v772.trigger(event$$17, data$$44);
    var v3914 = $$$2.isFunction(callback$$42);
    if (v3914) {
      var v5409 = this.element;
      var v5194 = v5409[0];
      var v5410 = [event$$17];
      var v5195 = v5410.concat(data$$44);
      var v4753 = callback$$42.apply(v5194, v5195);
      v3914 = v4753 === false;
    }
    var v2685 = v3914;
    var v3915 = !v2685;
    if (v3915) {
      v2685 = event$$17.isDefaultPrevented();
    }
    var v773 = v2685;
    return!v773;
  }
  function v429(element$$11) {
    function v428(event$$16) {
      var v2686 = event$$16.currentTarget;
      var v774 = $$$2(v2686);
      v774.removeClass("ui-state-focus");
      return;
    }
    function v427(event$$15) {
      var v2687 = event$$15.currentTarget;
      var v775 = $$$2(v2687);
      v775.addClass("ui-state-focus");
      return;
    }
    var v776 = this.focusable;
    var v5559 = v776.add(element$$11);
    this.focusable = v5559;
    var v777 = {focusin:v427, focusout:v428};
    this._on(element$$11, v777);
    return;
  }
  function v426(element$$10) {
    function v425(event$$14) {
      var v2688 = event$$14.currentTarget;
      var v778 = $$$2(v2688);
      v778.removeClass("ui-state-hover");
      return;
    }
    function v424(event$$13) {
      var v2689 = event$$13.currentTarget;
      var v779 = $$$2(v2689);
      v779.addClass("ui-state-hover");
      return;
    }
    var v780 = this.hoverable;
    var v5560 = v780.add(element$$10);
    this.hoverable = v5560;
    var v781 = {mouseenter:v424, mouseleave:v425};
    this._on(element$$10, v781);
    return;
  }
  function v423(handler$$9, delay$$4) {
    function handlerProxy$$1() {
      var v2690;
      var v4754 = typeof handler$$9;
      var v3916 = v4754 === "string";
      if (v3916) {
        introspect(JAM.policy.p3) {
          v2690 = instance$$4[handler$$9];
        }
      } else {
        v2690 = handler$$9;
      }
      var v782 = v2690;
      return v782.apply(instance$$4, arguments);
    }
    var instance$$4 = this;
    var v783 = delay$$4 || 0;
    return setTimeout(handlerProxy$$1, v783);
  }
  function v422(element$$9, eventName$$2) {
    var v3917 = eventName$$2 || "";
    var v2691 = v3917.split(" ");
    var v3918 = this.eventNamespace;
    var v2692 = v3918 + " ";
    var v784 = v2691.join(v2692);
    var v785 = this.eventNamespace;
    eventName$$2 = v784 + v785;
    var v786 = element$$9.unbind(eventName$$2);
    v786.undelegate(eventName$$2);
    return;
  }
  function v421(suppressDisabledCheck, element$$8, handlers$$2) {
    function v420(event$$12, handler$$8) {
      function handlerProxy() {
        var v2693 = !suppressDisabledCheck;
        if (v2693) {
          var v5196 = instance$$3.options;
          var v4755 = v5196.disabled;
          var v3919 = v4755 === true;
          var v4757 = !v3919;
          if (v4757) {
            var v4756 = $$$2(this);
            v3919 = v4756.hasClass("ui-state-disabled");
          }
          v2693 = v3919;
        }
        var v787 = v2693;
        if (v787) {
          return;
        }
        var v2694;
        var v4758 = typeof handler$$8;
        var v3920 = v4758 === "string";
        if (v3920) {
          introspect(JAM.policy.p3) {
            v2694 = instance$$3[handler$$8];
          }
        } else {
          v2694 = handler$$8;
        }
        var v788 = v2694;
        return v788.apply(instance$$3, arguments);
      }
      var v2695 = typeof handler$$8;
      var v790 = v2695 !== "string";
      if (v790) {
        var v2696 = handler$$8.guid;
        var v3921 = !v2696;
        if (v3921) {
          v2696 = handlerProxy.guid;
        }
        var v789 = v2696;
        var v2697 = !v789;
        if (v2697) {
          v789 = $$$2.guid;
          var v3922 = $$$2.guid;
          $$$2.guid = v3922 + 1;
        }
        handlerProxy.guid = handler$$8.guid = v789;
      }
      var match$$38 = event$$12.match(/^(\w+)\s*(.*)$/);
      var v791 = match$$38[1];
      var v792 = instance$$3.eventNamespace;
      var eventName$$1 = v791 + v792;
      var selector$$22 = match$$38[2];
      if (selector$$22) {
        delegateElement.delegate(selector$$22, eventName$$1, handlerProxy);
      } else {
        element$$8.bind(eventName$$1, handlerProxy);
      }
      return;
    }
    var delegateElement;
    var instance$$3 = this;
    var v2698 = typeof suppressDisabledCheck;
    var v793 = v2698 !== "boolean";
    if (v793) {
      handlers$$2 = element$$8;
      element$$8 = suppressDisabledCheck;
      suppressDisabledCheck = false;
    }
    var v795 = !handlers$$2;
    if (v795) {
      handlers$$2 = element$$8;
      element$$8 = this.element;
      delegateElement = this.widget();
    } else {
      element$$8 = delegateElement = $$$2(element$$8);
      var v794 = this.bindings;
      var v5561 = v794.add(element$$8);
      this.bindings = v5561;
    }
    $$$2.each(handlers$$2, v420);
    return;
  }
  function v419() {
    return this._setOption("disabled", true);
  }
  function v418() {
    return this._setOption("disabled", false);
  }
  function v417(key$$25, value$$49) {
    var v796 = this.options;
    introspect(JAM.policy.p2) {
      v796[key$$25] = value$$49;
    }
    var v800 = key$$25 === "disabled";
    if (v800) {
      var v2699 = this.widget();
      var v3923 = this.widgetFullName;
      var v2700 = v3923 + "-disabled ui-state-disabled";
      var v3924 = !value$$49;
      var v2701 = !v3924;
      var v797 = v2699.toggleClass(v2700, v2701);
      v797.attr("aria-disabled", value$$49);
      var v798 = this.hoverable;
      v798.removeClass("ui-state-hover");
      var v799 = this.focusable;
      v799.removeClass("ui-state-focus");
    }
    return this;
  }
  function v416(options$$12) {
    var key$$24;
    for (key$$24 in options$$12) {
      introspect(JAM.policy.p3) {
        var v801 = options$$12[key$$24]
      }
      this._setOption(key$$24, v801);
    }
    return this;
  }
  function v415(key$$23, value$$48) {
    var options$$11 = key$$23;
    var parts$$4;
    var curOption;
    var i$$103;
    var v2702 = arguments.length;
    var v804 = v2702 === 0;
    if (v804) {
      var v802 = $$$2.widget;
      var v803 = this.options;
      return v802.extend({}, v803);
    }
    var v2703 = typeof key$$23;
    var v815 = v2703 === "string";
    if (v815) {
      options$$11 = {};
      parts$$4 = key$$23.split(".");
      key$$23 = parts$$4.shift();
      var v814 = parts$$4.length;
      if (v814) {
        var v805 = options$$11;
        var v806 = key$$23;
        var v2704 = $$$2.widget;
        var v3925 = this.options;
        introspect(JAM.policy.p3) {
          var v2705 = v3925[key$$23]
        }
        var v5562 = v2704.extend({}, v2705);
        introspect(JAM.policy.p2) {
          curOption = v805[v806] = v5562;
        }
        i$$103 = 0;
        var v3926 = parts$$4.length;
        var v2706 = v3926 - 1;
        var v809 = i$$103 < v2706;
        for (;v809;) {
          introspect(JAM.policy.p3) {
            var v807 = parts$$4[i$$103]
          }
          introspect(JAM.policy.p3) {
            var v3927 = parts$$4[i$$103]
          }
          introspect(JAM.policy.p3) {
            var v2707 = curOption[v3927]
          }
          var v3928 = !v2707;
          if (v3928) {
            v2707 = {};
          }
          introspect(JAM.policy.p2) {
            curOption[v807] = v2707;
          }
          introspect(JAM.policy.p3) {
            var v808 = parts$$4[i$$103]
          }
          introspect(JAM.policy.p3) {
            curOption = curOption[v808];
          }
          i$$103 = i$$103 + 1;
          var v3929 = parts$$4.length;
          var v2708 = v3929 - 1;
          v809 = i$$103 < v2708;
        }
        key$$23 = parts$$4.pop();
        var v811 = value$$48 === undefined$$3;
        if (v811) {
          var v810;
          introspect(JAM.policy.p3) {
            var v3930 = curOption[key$$23]
          }
          var v2709 = v3930 === undefined$$3;
          if (v2709) {
            v810 = null;
          } else {
            introspect(JAM.policy.p3) {
              v810 = curOption[key$$23];
            }
          }
          return v810;
        }
        introspect(JAM.policy.p2) {
          curOption[key$$23] = value$$48;
        }
      } else {
        var v813 = value$$48 === undefined$$3;
        if (v813) {
          var v812;
          var v4759 = this.options;
          introspect(JAM.policy.p3) {
            var v3931 = v4759[key$$23]
          }
          var v2711 = v3931 === undefined$$3;
          if (v2711) {
            v812 = null;
          } else {
            var v2710 = this.options;
            introspect(JAM.policy.p3) {
              v812 = v2710[key$$23];
            }
          }
          return v812;
        }
        introspect(JAM.policy.p2) {
          options$$11[key$$23] = value$$48;
        }
      }
    }
    this._setOptions(options$$11);
    return this;
  }
  function v414() {
    return this.element;
  }
  function v413() {
    this._destroy();
    var v4760 = this.element;
    var v4761 = this.eventNamespace;
    var v3932 = v4760.unbind(v4761);
    var v3933 = this.widgetName;
    var v2712 = v3932.removeData(v3933);
    var v2713 = this.widgetFullName;
    var v816 = v2712.removeData(v2713);
    var v2714 = this.widgetFullName;
    var v817 = $$$2.camelCase(v2714);
    v816.removeData(v817);
    var v3934 = this.widget();
    var v3935 = this.eventNamespace;
    var v2715 = v3934.unbind(v3935);
    var v818 = v2715.removeAttr("aria-disabled");
    var v3936 = this.widgetFullName;
    var v2716 = v3936 + "-disabled ";
    var v819 = v2716 + "ui-state-disabled";
    v818.removeClass(v819);
    var v820 = this.bindings;
    var v821 = this.eventNamespace;
    v820.unbind(v821);
    var v822 = this.hoverable;
    v822.removeClass("ui-state-hover");
    var v823 = this.focusable;
    v823.removeClass("ui-state-focus");
    return;
  }
  function v412(options$$10, element$$7) {
    function v411(event$$11) {
      var v2717 = event$$11.target;
      var v824 = v2717 === element$$7;
      if (v824) {
        this.destroy();
      }
      return;
    }
    var v4762 = element$$7;
    var v5197 = !v4762;
    if (v5197) {
      v4762 = this.defaultElement;
    }
    var v3937 = v4762;
    var v4763 = !v3937;
    if (v4763) {
      v3937 = this;
    }
    var v2718 = v3937;
    var v825 = $$$2(v2718);
    element$$7 = v825[0];
    var v5563 = $$$2(element$$7);
    this.element = v5563;
    this.uuid = uuid$$2;
    uuid$$2 = uuid$$2 + 1;
    var v2719 = this.widgetName;
    var v826 = "." + v2719;
    var v827 = this.uuid;
    this.eventNamespace = v826 + v827;
    var v828 = $$$2.widget;
    var v829 = this.options;
    var v830 = this._getCreateOptions();
    var v5564 = v828.extend({}, v829, v830, options$$10);
    this.options = v5564;
    var v5565 = $$$2();
    this.bindings = v5565;
    var v5566 = $$$2();
    this.hoverable = v5566;
    var v5567 = $$$2();
    this.focusable = v5567;
    var v836 = element$$7 !== this;
    if (v836) {
      var v831 = this.widgetFullName;
      $$$2.data(element$$7, v831, this);
      var v832 = this.element;
      var v833 = {remove:v411};
      this._on(true, v832, v833);
      var v2720;
      var v3939 = element$$7.style;
      if (v3939) {
        v2720 = element$$7.ownerDocument;
      } else {
        var v3938 = element$$7.document;
        var v4764 = !v3938;
        if (v4764) {
          v3938 = element$$7;
        }
        v2720 = v3938;
      }
      var v834 = v2720;
      var v5568 = $$$2(v834);
      this.document = v5568;
      var v4765 = this.document;
      var v3940 = v4765[0];
      var v2721 = v3940.defaultView;
      var v3942 = !v2721;
      if (v3942) {
        var v4766 = this.document;
        var v3941 = v4766[0];
        v2721 = v3941.parentWindow;
      }
      var v835 = v2721;
      var v5569 = $$$2(v835);
      this.window = v5569;
    }
    this._create();
    var v837 = this._getCreateEventData();
    this._trigger("create", null, v837);
    this._init();
    return;
  }
  function v410() {
    return;
  }
  function v409(name$$63, object$$1) {
    function v408(options$$9) {
      function v407() {
        var instance$$2 = $$$2.data(this, fullName$$1);
        if (instance$$2) {
          var v2722 = options$$9 || {};
          var v838 = instance$$2.option(v2722);
          v838._init();
        } else {
          var v839 = new object$$1(options$$9, this);
          $$$2.data(this, fullName$$1, v839);
        }
        return;
      }
      function v406() {
        var methodValue;
        var instance$$1 = $$$2.data(this, fullName$$1);
        var v841 = !instance$$1;
        if (v841) {
          var v5198 = "cannot call methods on " + name$$63;
          var v4767 = v5198 + " prior to initialization; ";
          var v3943 = v4767 + "attempted to call method '";
          var v2723 = v3943 + options$$9;
          var v840 = v2723 + "'";
          return $$$2.error(v840);
        }
        introspect(JAM.policy.p3) {
          var v4768 = instance$$1[options$$9]
        }
        var v3944 = $$$2.isFunction(v4768);
        var v2724 = !v3944;
        var v3946 = !v2724;
        if (v3946) {
          var v3945 = options$$9.charAt(0);
          v2724 = v3945 === "_";
        }
        var v843 = v2724;
        if (v843) {
          var v4769 = "no such method '" + options$$9;
          var v3947 = v4769 + "' for ";
          var v2725 = v3947 + name$$63;
          var v842 = v2725 + " widget instance";
          return $$$2.error(v842);
        }
        introspect(JAM.policy.p3) {
          var v844 = instance$$1[options$$9]
        }
        methodValue = v844.apply(instance$$1, args$$10);
        var v2726 = methodValue !== instance$$1;
        if (v2726) {
          v2726 = methodValue !== undefined$$3;
        }
        var v846 = v2726;
        if (v846) {
          var v845;
          var v3948 = methodValue;
          if (v3948) {
            v3948 = methodValue.jquery;
          }
          var v2728 = v3948;
          if (v2728) {
            var v2727 = methodValue.get();
            v845 = returnValue$$1.pushStack(v2727);
          } else {
            v845 = methodValue;
          }
          returnValue$$1 = v845;
          return false;
        }
        return;
      }
      var v847 = typeof options$$9;
      var isMethodCall = v847 === "string";
      var args$$10 = slice$$1.call(arguments, 1);
      var returnValue$$1 = this;
      var v848;
      var v3949 = !isMethodCall;
      if (v3949) {
        v3949 = args$$10.length;
      }
      var v2731 = v3949;
      if (v2731) {
        var v3950 = $$$2.widget;
        var v2729 = v3950.extend;
        var v3951 = [options$$9];
        var v2730 = v3951.concat(args$$10);
        v848 = v2729.apply(null, v2730);
      } else {
        v848 = options$$9;
      }
      options$$9 = v848;
      if (isMethodCall) {
        this.each(v406);
      } else {
        this.each(v407);
      }
      return returnValue$$1;
    }
    var v2732 = object$$1.prototype;
    var v849 = v2732.widgetFullName;
    var v2733 = !v849;
    if (v2733) {
      v849 = name$$63;
    }
    var fullName$$1 = v849;
    var v850 = $$$2.fn;
    introspect(JAM.policy.p2) {
      v850[name$$63] = v408;
    }
    return;
  }
  function v405(target$$29) {
    var input = slice$$1.call(arguments, 1);
    var inputIndex = 0;
    var inputLength = input.length;
    var key$$22;
    var value$$47;
    var v857 = inputIndex < inputLength;
    for (;v857;) {
      introspect(JAM.policy.p3) {
        var v856 = input[inputIndex]
      }
      for (key$$22 in v856) {
        introspect(JAM.policy.p3) {
          var v851 = input[inputIndex]
        }
        introspect(JAM.policy.p3) {
          value$$47 = v851[key$$22];
        }
        introspect(JAM.policy.p3) {
          var v3952 = input[inputIndex]
        }
        var v2734 = v3952.hasOwnProperty(key$$22);
        if (v2734) {
          v2734 = value$$47 !== undefined$$3;
        }
        var v855 = v2734;
        if (v855) {
          var v854 = $$$2.isPlainObject(value$$47);
          if (v854) {
            var v852 = target$$29;
            var v853 = key$$22;
            var v2735;
            introspect(JAM.policy.p3) {
              var v4770 = target$$29[key$$22]
            }
            var v3956 = $$$2.isPlainObject(v4770);
            if (v3956) {
              var v3953 = $$$2.widget;
              introspect(JAM.policy.p3) {
                var v3954 = target$$29[key$$22]
              }
              v2735 = v3953.extend({}, v3954, value$$47);
            } else {
              var v3955 = $$$2.widget;
              v2735 = v3955.extend({}, value$$47);
            }
            introspect(JAM.policy.p2) {
              v852[v853] = v2735;
            }
          } else {
            introspect(JAM.policy.p2) {
              target$$29[key$$22] = value$$47;
            }
          }
        }
      }
      inputIndex = inputIndex + 1;
      v857 = inputIndex < inputLength;
    }
    return target$$29;
  }
  function v404(name$$62, base$$1, prototype) {
    function v403(i$$102, child$$1) {
      var childPrototype = child$$1.prototype;
      var v3957 = childPrototype.namespace;
      var v2736 = v3957 + ".";
      var v2737 = childPrototype.widgetName;
      var v858 = v2736 + v2737;
      var v859 = child$$1._proto;
      $$$2.widget(v858, constructor, v859);
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
          returnValue = value$$46.apply(this, arguments);
          this._super = __super;
          this._superApply = __superApply;
          return returnValue;
        }
        function _superApply(args$$9) {
          var v2738 = base$$1.prototype;
          introspect(JAM.policy.p3) {
            var v860 = v2738[prop$$8]
          }
          return v860.apply(this, args$$9);
        }
        function _super() {
          var v2739 = base$$1.prototype;
          introspect(JAM.policy.p3) {
            var v861 = v2739[prop$$8]
          }
          return v861.apply(this, arguments);
        }
        return v400;
      }
      var v2740 = $$$2.isFunction(value$$46);
      var v862 = !v2740;
      if (v862) {
        introspect(JAM.policy.p2) {
          proxiedPrototype[prop$$8] = value$$46;
        }
        return;
      }
      var v5570 = v401();
      introspect(JAM.policy.p2) {
        proxiedPrototype[prop$$8] = v5570;
      }
      return;
    }
    function v399(options$$8, element$$6) {
      var v2741 = this._createWidget;
      var v863 = !v2741;
      if (v863) {
        return new constructor(options$$8, element$$6);
      }
      var v864 = arguments.length;
      if (v864) {
        this._createWidget(options$$8, element$$6);
      }
      return;
    }
    function v398(elem$$129) {
      var v2742 = $$$2.data(elem$$129, fullName);
      var v865 = !v2742;
      return!v865;
    }
    var fullName;
    var existingConstructor;
    var constructor;
    var basePrototype;
    var proxiedPrototype = {};
    var v866 = name$$62.split(".");
    var namespace$$3 = v866[0];
    var v867 = name$$62.split(".");
    name$$62 = v867[1];
    var v868 = namespace$$3 + "-";
    fullName = v868 + name$$62;
    var v869 = !prototype;
    if (v869) {
      prototype = base$$1;
      base$$1 = $$$2.Widget;
    }
    var v2743 = $$$2.expr;
    var v870 = v2743[":"];
    var v871 = fullName.toLowerCase();
    introspect(JAM.policy.p2) {
      v870[v871] = v398;
    }
    introspect(JAM.policy.p3) {
      var v872 = $$$2[namespace$$3]
    }
    var v2744 = !v872;
    if (v2744) {
      v872 = {};
    }
    introspect(JAM.policy.p2) {
      $$$2[namespace$$3] = v872;
    }
    introspect(JAM.policy.p3) {
      var v873 = $$$2[namespace$$3]
    }
    introspect(JAM.policy.p3) {
      existingConstructor = v873[name$$62];
    }
    introspect(JAM.policy.p3) {
      var v874 = $$$2[namespace$$3]
    }
    introspect(JAM.policy.p2) {
      constructor = v874[name$$62] = v399;
    }
    var v2745 = prototype.version;
    var v2746 = $$$2.extend({}, prototype);
    var v875 = {version:v2745, _proto:v2746, _childConstructors:[]};
    $$$2.extend(constructor, existingConstructor, v875);
    basePrototype = new base$$1;
    var v876 = basePrototype;
    var v2747 = $$$2.widget;
    var v2748 = basePrototype.options;
    var v5571 = v2747.extend({}, v2748);
    v876.options = v5571;
    $$$2.each(prototype, v402);
    var v877 = constructor;
    var v2749 = $$$2.widget;
    var v4771;
    if (existingConstructor) {
      v4771 = basePrototype.widgetEventPrefix;
    } else {
      v4771 = name$$62;
    }
    var v3958 = v4771;
    var v2750 = {widgetEventPrefix:v3958};
    var v2751 = {constructor:constructor, namespace:namespace$$3, widgetName:name$$62, widgetFullName:fullName};
    var v5572 = v2749.extend(basePrototype, v2750, proxiedPrototype, v2751);
    v877.prototype = v5572;
    if (existingConstructor) {
      var v878 = existingConstructor._childConstructors;
      $$$2.each(v878, v403);
      delete existingConstructor._childConstructors;
    } else {
      var v879 = base$$1._childConstructors;
      v879.push(constructor);
    }
    var v880 = $$$2.widget;
    v880.bridge(name$$62, constructor);
    return;
  }
  function v397(elems$$10) {
    var i$$101 = 0;
    var elem$$128;
    introspect(JAM.policy.p3) {
      var v2752 = elem$$128 = elems$$10[i$$101]
    }
    var v882 = v2752 != null;
    for (;v882;) {
      try {
        var v881 = $$$2(elem$$128);
        v881.triggerHandler("remove");
      } catch (e$$31) {
      }
      i$$101 = i$$101 + 1;
      introspect(JAM.policy.p3) {
        var v2753 = elem$$128 = elems$$10[i$$101]
      }
      v882 = v2753 != null;
    }
    _cleanData(elems$$10);
    return;
  }
  var uuid$$2 = 0;
  var v883 = Array.prototype;
  var slice$$1 = v883.slice;
  var _cleanData = $$$2.cleanData;
  $$$2.cleanData = v397;
  $$$2.widget = v404;
  var v884 = $$$2.widget;
  v884.extend = v405;
  var v885 = $$$2.widget;
  v885.bridge = v409;
  $$$2.Widget = v410;
  var v886 = $$$2.Widget;
  v886._childConstructors = [];
  var v887 = $$$2.Widget;
  var v2754 = {disabled:false, create:null};
  var v2755 = $$$2.noop;
  var v2756 = $$$2.noop;
  var v2757 = $$$2.noop;
  var v2758 = $$$2.noop;
  var v2759 = $$$2.noop;
  v887.prototype = {widgetName:"widget", widgetEventPrefix:"", defaultElement:"<div>", options:v2754, _createWidget:v412, _getCreateOptions:v2755, _getCreateEventData:v2756, _create:v2757, _init:v2758, destroy:v413, _destroy:v2759, widget:v414, option:v415, _setOptions:v416, _setOption:v417, enable:v418, disable:v419, _on:v421, _off:v422, _delay:v423, _hoverable:v426, _focusable:v429, _trigger:v430};
  var v888 = {show:"fadeIn", hide:"fadeOut"};
  $$$2.each(v888, v433);
  return;
}
function v396($$$1, undefined$$2) {
  function v395(el$$1, a$$7) {
    var v3959 = $$$1(el$$1);
    var v2760 = v3959.css("overflow");
    var v889 = v2760 === "hidden";
    if (v889) {
      return false;
    }
    var v890;
    var v3960 = a$$7;
    if (v3960) {
      v3960 = a$$7 === "left";
    }
    var v2761 = v3960;
    if (v2761) {
      v890 = "scrollLeft";
    } else {
      v890 = "scrollTop";
    }
    var scroll = v890;
    var has = false;
    introspect(JAM.policy.p3) {
      var v2762 = el$$1[scroll]
    }
    var v891 = v2762 > 0;
    if (v891) {
      return true;
    }
    introspect(JAM.policy.p2) {
      el$$1[scroll] = 1;
    }
    introspect(JAM.policy.p3) {
      var v892 = el$$1[scroll]
    }
    has = v892 > 0;
    introspect(JAM.policy.p2) {
      el$$1[scroll] = 0;
    }
    return has;
  }
  function v394(instance, name$$61, args$$8) {
    var i$$100;
    var v893 = instance.plugins;
    introspect(JAM.policy.p3) {
      var set$$10 = v893[name$$61]
    }
    var v3961 = !set$$10;
    var v4773 = !v3961;
    if (v4773) {
      var v5411 = instance.element;
      var v5199 = v5411[0];
      var v4772 = v5199.parentNode;
      v3961 = !v4772;
    }
    var v2763 = v3961;
    var v3963 = !v2763;
    if (v3963) {
      var v5412 = instance.element;
      var v5200 = v5412[0];
      var v4774 = v5200.parentNode;
      var v3962 = v4774.nodeType;
      v2763 = v3962 === 11;
    }
    var v894 = v2763;
    if (v894) {
      return;
    }
    i$$100 = 0;
    var v2764 = set$$10.length;
    var v898 = i$$100 < v2764;
    for (;v898;) {
      var v2765 = instance.options;
      introspect(JAM.policy.p3) {
        var v3964 = set$$10[i$$100]
      }
      var v2766 = v3964[0];
      introspect(JAM.policy.p3) {
        var v897 = v2765[v2766]
      }
      if (v897) {
        introspect(JAM.policy.p3) {
          var v2767 = set$$10[i$$100]
        }
        var v895 = v2767[1];
        var v896 = instance.element;
        v895.apply(v896, args$$8);
      }
      i$$100 = i$$100 + 1;
      var v2768 = set$$10.length;
      v898 = i$$100 < v2768;
    }
    return;
  }
  function v393(module, option$$1, set$$9) {
    var i$$99;
    var v2769 = $$$1.ui;
    introspect(JAM.policy.p3) {
      var v899 = v2769[module]
    }
    var proto$$1 = v899.prototype;
    for (i$$99 in set$$9) {
      var v900 = proto$$1.plugins;
      var v3965 = proto$$1.plugins;
      introspect(JAM.policy.p3) {
        var v2770 = v3965[i$$99]
      }
      var v3966 = !v2770;
      if (v3966) {
        v2770 = [];
      }
      introspect(JAM.policy.p2) {
        v900[i$$99] = v2770;
      }
      var v2771 = proto$$1.plugins;
      introspect(JAM.policy.p3) {
        var v901 = v2771[i$$99]
      }
      introspect(JAM.policy.p3) {
        var v2772 = set$$9[i$$99]
      }
      var v902 = [option$$1, v2772];
      v901.push(v902);
    }
    return;
  }
  function v392() {
    return this.unbind(".ui-disableSelection");
  }
  function v391() {
    function v390(event$$10) {
      event$$10.preventDefault();
      return;
    }
    var v3967;
    var v5201 = $$$1.support;
    var v4775 = v5201.selectstart;
    if (v4775) {
      v3967 = "selectstart";
    } else {
      v3967 = "mousedown";
    }
    var v2773 = v3967;
    var v903 = v2773 + ".ui-disableSelection";
    return this.bind(v903, v390);
  }
  function v389(removeData) {
    function v388(key$$21) {
      var v905 = arguments.length;
      if (v905) {
        var v904 = $$$1.camelCase(key$$21);
        return removeData.call(this, v904);
      } else {
        return removeData.call(this);
      }
      return;
    }
    return v388;
  }
  function v387(selector$$21) {
    var v2774;
    var v3969 = selector$$21 == null;
    if (v3969) {
      v2774 = this.prevObject;
    } else {
      var v3968 = this.prevObject;
      v2774 = v3968.filter(selector$$21);
    }
    var v906 = v2774;
    return this.add(v906);
  }
  function v386(i$$98, name$$60) {
    function v385(size$$7, margin$$2) {
      function v384() {
        var v907 = $$$1(this);
        var v2775 = reduce(this, size$$7, true, margin$$2);
        var v908 = v2775 + "px";
        v907.css(type$$66, v908);
        return;
      }
      var v2776 = typeof size$$7;
      var v910 = v2776 !== "number";
      if (v910) {
        var v2777 = "outer" + name$$60;
        introspect(JAM.policy.p3) {
          var v909 = orig$$3[v2777]
        }
        return v909.call(this, size$$7);
      }
      return this.each(v384);
    }
    function v383(size$$6) {
      function v382() {
        var v911 = $$$1(this);
        var v2778 = reduce(this, size$$6);
        var v912 = v2778 + "px";
        v911.css(type$$66, v912);
        return;
      }
      var v914 = size$$6 === undefined$$2;
      if (v914) {
        var v2779 = "inner" + name$$60;
        introspect(JAM.policy.p3) {
          var v913 = orig$$3[v2779]
        }
        return v913.call(this);
      }
      return this.each(v382);
    }
    function reduce(elem$$127, size$$5, border$$2, margin$$1) {
      function v381() {
        var v2780 = size$$5;
        var v5202 = "padding" + this;
        var v4776 = $$$1.css(elem$$127, v5202);
        var v3970 = parseFloat(v4776);
        var v4777 = !v3970;
        if (v4777) {
          v3970 = 0;
        }
        var v2781 = v3970;
        size$$5 = v2780 - v2781;
        if (border$$2) {
          var v2782 = size$$5;
          var v5413 = "border" + this;
          var v5203 = v5413 + "Width";
          var v4778 = $$$1.css(elem$$127, v5203);
          var v3971 = parseFloat(v4778);
          var v4779 = !v3971;
          if (v4779) {
            v3971 = 0;
          }
          var v2783 = v3971;
          size$$5 = v2782 - v2783;
        }
        if (margin$$1) {
          var v2784 = size$$5;
          var v5204 = "margin" + this;
          var v4780 = $$$1.css(elem$$127, v5204);
          var v3972 = parseFloat(v4780);
          var v4781 = !v3972;
          if (v4781) {
            v3972 = 0;
          }
          var v2785 = v3972;
          size$$5 = v2784 - v2785;
        }
        return;
      }
      $$$1.each(side, v381);
      return size$$5;
    }
    var v915;
    var v2786 = name$$60 === "Width";
    if (v2786) {
      v915 = ["Left", "Right"];
    } else {
      v915 = ["Top", "Bottom"];
    }
    var side = v915;
    var type$$66 = name$$60.toLowerCase();
    var v2787 = $$$1.fn;
    var v916 = v2787.innerWidth;
    var v2788 = $$$1.fn;
    var v917 = v2788.innerHeight;
    var v2789 = $$$1.fn;
    var v918 = v2789.outerWidth;
    var v2790 = $$$1.fn;
    var v919 = v2790.outerHeight;
    var orig$$3 = {innerWidth:v916, innerHeight:v917, outerWidth:v918, outerHeight:v919};
    var v920 = $$$1.fn;
    var v921 = "inner" + name$$60;
    introspect(JAM.policy.p2) {
      v920[v921] = v383;
    }
    var v922 = $$$1.fn;
    var v923 = "outer" + name$$60;
    introspect(JAM.policy.p2) {
      v922[v923] = v385;
    }
    return;
  }
  function v380(element$$5) {
    var tabIndex = $$$1.attr(element$$5, "tabindex");
    var isTabIndexNaN = isNaN(tabIndex);
    var v2791 = isTabIndexNaN;
    var v3973 = !v2791;
    if (v3973) {
      v2791 = tabIndex >= 0;
    }
    var v924 = v2791;
    if (v924) {
      var v2792 = !isTabIndexNaN;
      v924 = focusable(element$$5, v2792);
    }
    return v924;
  }
  function v379(element$$4) {
    var v3974 = $$$1.attr(element$$4, "tabindex");
    var v2793 = isNaN(v3974);
    var v925 = !v2793;
    return focusable(element$$4, v925);
  }
  function v378(elem$$126, i$$97, match$$37) {
    var v3975 = match$$37[3];
    var v2794 = $$$1.data(elem$$126, v3975);
    var v926 = !v2794;
    return!v926;
  }
  function v377(dataName) {
    function v376(elem$$125) {
      var v2795 = $$$1.data(elem$$125, dataName);
      var v927 = !v2795;
      return!v927;
    }
    return v376;
  }
  function v375() {
    function v374() {
      var v2796 = this.id;
      var v929 = runiqueId.test(v2796);
      if (v929) {
        var v928 = $$$1(this);
        v928.removeAttr("id");
      }
      return;
    }
    return this.each(v374);
  }
  function v373() {
    function v372() {
      var v2797 = this.id;
      var v931 = !v2797;
      if (v931) {
        var v930 = uuid$$1 = uuid$$1 + 1;
        this.id = "ui-id-" + v930;
      }
      return;
    }
    return this.each(v372);
  }
  function v371(zIndex) {
    var v932 = zIndex !== undefined$$2;
    if (v932) {
      return this.css("zIndex", zIndex);
    }
    var v938 = this.length;
    if (v938) {
      var v933 = this[0];
      var elem$$124 = $$$1(v933);
      var position;
      var value$$45;
      var v2798 = elem$$124.length;
      if (v2798) {
        var v3976 = elem$$124[0];
        v2798 = v3976 !== document;
      }
      var v937 = v2798;
      for (;v937;) {
        position = elem$$124.css("position");
        var v3977 = position === "absolute";
        var v4782 = !v3977;
        if (v4782) {
          v3977 = position === "relative";
        }
        var v2799 = v3977;
        var v3978 = !v2799;
        if (v3978) {
          v2799 = position === "fixed";
        }
        var v936 = v2799;
        if (v936) {
          var v934 = elem$$124.css("zIndex");
          value$$45 = parseInt(v934, 10);
          var v3979 = isNaN(value$$45);
          var v2800 = !v3979;
          if (v2800) {
            v2800 = value$$45 !== 0;
          }
          var v935 = v2800;
          if (v935) {
            return value$$45;
          }
        }
        elem$$124 = elem$$124.parent();
        var v2801 = elem$$124.length;
        if (v2801) {
          var v3980 = elem$$124[0];
          v2801 = v3980 !== document;
        }
        v937 = v2801;
      }
    }
    return 0;
  }
  function v370() {
    function v369() {
      var v3981 = $$$1.css(this, "overflow");
      var v3982 = $$$1.css(this, "overflow-y");
      var v2802 = v3981 + v3982;
      var v2803 = $$$1.css(this, "overflow-x");
      var v939 = v2802 + v2803;
      return/(auto|scroll)/.test(v939);
    }
    function v368() {
      var v2804 = $$$1.css(this, "position");
      var v940 = /(relative|absolute|fixed)/.test(v2804);
      if (v940) {
        var v4783 = $$$1.css(this, "overflow");
        var v4784 = $$$1.css(this, "overflow-y");
        var v3983 = v4783 + v4784;
        var v3984 = $$$1.css(this, "overflow-x");
        var v2805 = v3983 + v3984;
        v940 = /(auto|scroll)/.test(v2805);
      }
      return v940;
    }
    var scrollParent;
    var v4785 = $$$1.ui;
    var v3985 = v4785.ie;
    if (v3985) {
      var v4786 = this.css("position");
      v3985 = /(static|relative)/.test(v4786);
    }
    var v2806 = v3985;
    var v3987 = !v2806;
    if (v3987) {
      var v3986 = this.css("position");
      v2806 = /absolute/.test(v3986);
    }
    var v943 = v2806;
    if (v943) {
      var v2807 = this.parents();
      var v941 = v2807.filter(v368);
      scrollParent = v941.eq(0);
    } else {
      var v2808 = this.parents();
      var v942 = v2808.filter(v369);
      scrollParent = v942.eq(0);
    }
    var v944;
    var v4787 = this.css("position");
    var v3988 = /fixed/.test(v4787);
    var v4789 = !v3988;
    if (v4789) {
      var v4788 = scrollParent.length;
      v3988 = !v4788;
    }
    var v2809 = v3988;
    if (v2809) {
      v944 = $$$1(document);
    } else {
      v944 = scrollParent;
    }
    return v944;
  }
  function v367(delay$$3, fn$$18) {
    function v366() {
      function v365() {
        var v945 = $$$1(elem$$123);
        v945.focus();
        if (fn$$18) {
          fn$$18.call(elem$$123);
        }
        return;
      }
      var elem$$123 = this;
      setTimeout(v365, delay$$3);
      return;
    }
    var v946;
    var v3989 = typeof delay$$3;
    var v2811 = v3989 === "number";
    if (v2811) {
      v946 = this.each(v366);
    } else {
      var v2810 = this._focus;
      v946 = v2810.apply(this, arguments);
    }
    return v946;
  }
  function focusable(element$$2, isTabIndexNotNaN) {
    var map;
    var mapName;
    var img$$2;
    var v947 = element$$2.nodeName;
    var nodeName$$1 = v947.toLowerCase();
    var v951 = "area" === nodeName$$1;
    if (v951) {
      map = element$$2.parentNode;
      mapName = map.name;
      var v4790 = element$$2.href;
      var v3990 = !v4790;
      var v4791 = !v3990;
      if (v4791) {
        v3990 = !mapName;
      }
      var v2812 = v3990;
      var v3992 = !v2812;
      if (v3992) {
        var v4792 = map.nodeName;
        var v3991 = v4792.toLowerCase();
        v2812 = v3991 !== "map";
      }
      var v948 = v2812;
      if (v948) {
        return false;
      }
      var v3993 = "img[usemap=#" + mapName;
      var v2813 = v3993 + "]";
      var v949 = $$$1(v2813);
      img$$2 = v949[0];
      var v2814 = !img$$2;
      var v950 = !v2814;
      if (v950) {
        v950 = visible(img$$2);
      }
      return v950;
    }
    var v2815;
    var v3996 = /input|select|textarea|button|object/.test(nodeName$$1);
    if (v3996) {
      var v3994 = element$$2.disabled;
      v2815 = !v3994;
    } else {
      var v3995;
      var v4794 = "a" === nodeName$$1;
      if (v4794) {
        var v4793 = element$$2.href;
        var v5205 = !v4793;
        if (v5205) {
          v4793 = isTabIndexNotNaN;
        }
        v3995 = v4793;
      } else {
        v3995 = isTabIndexNotNaN;
      }
      v2815 = v3995;
    }
    var v952 = v2815;
    if (v952) {
      v952 = visible(element$$2);
    }
    return v952;
  }
  function visible(element$$3) {
    function v364() {
      var v953 = $$$1.css(this, "visibility");
      return v953 === "hidden";
    }
    var v3997 = $$$1.expr;
    var v2816 = v3997.filters;
    var v954 = v2816.visible(element$$3);
    if (v954) {
      var v5414 = $$$1(element$$3);
      var v5206 = v5414.parents();
      var v4795 = v5206.addBack();
      var v3998 = v4795.filter(v364);
      var v2817 = v3998.length;
      v954 = !v2817;
    }
    return v954;
  }
  var uuid$$1 = 0;
  var runiqueId = /^ui-id-\d+$/;
  var v955 = $$$1.ui;
  var v2818 = !v955;
  if (v2818) {
    v955 = {};
  }
  $$$1.ui = v955;
  var v2819 = $$$1.ui;
  var v956 = v2819.version;
  if (v956) {
    return;
  }
  var v957 = $$$1.ui;
  var v2820 = {BACKSPACE:8, COMMA:188, DELETE:46, DOWN:40, END:35, ENTER:13, ESCAPE:27, HOME:36, LEFT:37, NUMPAD_ADD:107, NUMPAD_DECIMAL:110, NUMPAD_DIVIDE:111, NUMPAD_ENTER:108, NUMPAD_MULTIPLY:106, NUMPAD_SUBTRACT:109, PAGE_DOWN:34, PAGE_UP:33, PERIOD:190, RIGHT:39, SPACE:32, TAB:9, UP:38};
  var v958 = {version:"1.10.1", keyCode:v2820};
  $$$1.extend(v957, v958);
  var v959 = $$$1.fn;
  var v3999 = $$$1.fn;
  var v2821 = v3999.focus;
  var v960 = {_focus:v2821, focus:v367, scrollParent:v370, zIndex:v371, uniqueId:v373, removeUniqueId:v375};
  v959.extend(v960);
  var v2822 = $$$1.expr;
  var v961 = v2822[":"];
  var v4000;
  var v5207 = $$$1.expr;
  var v4797 = v5207.createPseudo;
  if (v4797) {
    var v4796 = $$$1.expr;
    v4000 = v4796.createPseudo(v377);
  } else {
    v4000 = v378;
  }
  var v2823 = v4000;
  var v962 = {data:v2823, focusable:v379, tabbable:v380};
  $$$1.extend(v961, v962);
  var v4798 = $$$1("<a>");
  var v4001 = v4798.outerWidth(1);
  var v2824 = v4001.jquery;
  var v964 = !v2824;
  if (v964) {
    var v963 = ["Width", "Height"];
    $$$1.each(v963, v386);
  }
  var v4002 = $$$1.fn;
  var v2825 = v4002.addBack;
  var v966 = !v2825;
  if (v966) {
    var v965 = $$$1.fn;
    v965.addBack = v387;
  }
  var v4799 = $$$1("<a>");
  var v4003 = v4799.data("a-b", "a");
  var v2826 = v4003.removeData("a-b");
  var v968 = v2826.data("a-b");
  if (v968) {
    var v967 = $$$1.fn;
    var v4004 = $$$1.fn;
    var v2827 = v4004.removeData;
    var v5573 = v389(v2827);
    v967.removeData = v5573;
  }
  var v969 = $$$1.ui;
  var v5208 = navigator.userAgent;
  var v4800 = v5208.toLowerCase();
  var v4005 = /msie [\w.]+/.exec(v4800);
  var v2828 = !v4005;
  v969.ie = !v2828;
  var v970 = $$$1.support;
  var v2829 = document.createElement("div");
  v970.selectstart = "onselectstart" in v2829;
  var v971 = $$$1.fn;
  var v972 = {disableSelection:v391, enableSelection:v392};
  v971.extend(v972);
  var v973 = $$$1.ui;
  var v2830 = {add:v393, call:v394};
  var v974 = {plugin:v2830, hasScroll:v395};
  $$$1.extend(v973, v974);
  return;
}
function v363(window$$1, undefined$$1) {
  function v362(i$$95, name$$59) {
    function v361(size$$4) {
      function v360(i$$96) {
        var self$$14 = jQuery$$1(this);
        introspect(JAM.policy.p3) {
          var v2831 = self$$14[type$$65]()
        }
        var v975 = size$$4.call(this, i$$96, v2831);
        introspect(JAM.policy.p3) {
          self$$14[type$$65](v975);
        }
        return;
      }
      var elem$$122 = this[0];
      var v977 = !elem$$122;
      if (v977) {
        var v976;
        var v2832 = size$$4 == null;
        if (v2832) {
          v976 = null;
        } else {
          v976 = this;
        }
        return v976;
      }
      var v978 = jQuery$$1.isFunction(size$$4);
      if (v978) {
        return this.each(v360);
      }
      var v979;
      var v4006 = "scrollTo" in elem$$122;
      if (v4006) {
        v4006 = elem$$122.document;
      }
      var v2835 = v4006;
      if (v2835) {
        var v5209 = elem$$122.document;
        var v4801 = v5209.compatMode;
        var v4007 = v4801 === "CSS1Compat";
        if (v4007) {
          var v5210 = elem$$122.document;
          var v4802 = v5210.documentElement;
          var v4803 = "client" + name$$59;
          introspect(JAM.policy.p3) {
            v4007 = v4802[v4803];
          }
        }
        var v2833 = v4007;
        var v4010 = !v2833;
        if (v4010) {
          var v4804 = elem$$122.document;
          var v4008 = v4804.body;
          var v4009 = "client" + name$$59;
          introspect(JAM.policy.p3) {
            v2833 = v4008[v4009];
          }
        }
        v979 = v2833;
      } else {
        var v2834;
        var v4805 = elem$$122.nodeType;
        var v4017 = v4805 === 9;
        if (v4017) {
          var v4806 = elem$$122.documentElement;
          var v4807 = "client" + name$$59;
          introspect(JAM.policy.p3) {
            var v4011 = v4806[v4807]
          }
          var v4808 = elem$$122.body;
          var v4809 = "scroll" + name$$59;
          introspect(JAM.policy.p3) {
            var v4012 = v4808[v4809]
          }
          var v4810 = elem$$122.documentElement;
          var v4811 = "scroll" + name$$59;
          introspect(JAM.policy.p3) {
            var v4013 = v4810[v4811]
          }
          var v4812 = elem$$122.body;
          var v4813 = "offset" + name$$59;
          introspect(JAM.policy.p3) {
            var v4014 = v4812[v4813]
          }
          var v4814 = elem$$122.documentElement;
          var v4815 = "offset" + name$$59;
          introspect(JAM.policy.p3) {
            var v4015 = v4814[v4815]
          }
          v2834 = Math.max(v4011, v4012, v4013, v4014, v4015);
        } else {
          var v4016;
          var v4817 = size$$4 === undefined$$1;
          if (v4817) {
            v4016 = jQuery$$1.css(elem$$122, type$$65);
          } else {
            var v5211;
            var v5487 = typeof size$$4;
            var v5415 = v5487 === "string";
            if (v5415) {
              v5211 = size$$4;
            } else {
              v5211 = size$$4 + "px";
            }
            var v4816 = v5211;
            v4016 = this.css(type$$65, v4816);
          }
          v2834 = v4016;
        }
        v979 = v2834;
      }
      return v979;
    }
    function v359(margin) {
      var v980;
      var v2838 = this[0];
      if (v2838) {
        var v2836 = this[0];
        var v4018;
        if (margin) {
          v4018 = "margin";
        } else {
          v4018 = "border";
        }
        var v2837 = v4018;
        v980 = jQuery$$1.css(v2836, type$$65, false, v2837);
      } else {
        v980 = null;
      }
      return v980;
    }
    function v358() {
      var v981;
      var v2840 = this[0];
      if (v2840) {
        var v2839 = this[0];
        v981 = jQuery$$1.css(v2839, type$$65, false, "padding");
      } else {
        v981 = null;
      }
      return v981;
    }
    var type$$65 = name$$59.toLowerCase();
    var v982 = jQuery$$1.fn;
    var v983 = "inner" + name$$59;
    introspect(JAM.policy.p2) {
      v982[v983] = v358;
    }
    var v984 = jQuery$$1.fn;
    var v985 = "outer" + name$$59;
    introspect(JAM.policy.p2) {
      v984[v985] = v359;
    }
    var v986 = jQuery$$1.fn;
    introspect(JAM.policy.p2) {
      v986[type$$65] = v361;
    }
    return;
  }
  function v357(i$$94, name$$58) {
    function v356(val$$7) {
      function v355() {
        win = getWindow(this);
        if (win) {
          var v2841;
          var v4020 = !i$$94;
          if (v4020) {
            v2841 = val$$7;
          } else {
            var v4019 = jQuery$$1(win);
            v2841 = v4019.scrollLeft();
          }
          var v987 = v2841;
          var v2842;
          if (i$$94) {
            v2842 = val$$7;
          } else {
            var v4021 = jQuery$$1(win);
            v2842 = v4021.scrollTop();
          }
          var v988 = v2842;
          win.scrollTo(v987, v988);
        } else {
          introspect(JAM.policy.p2) {
            this[method$$1] = val$$7;
          }
        }
        return;
      }
      var elem$$121 = this[0];
      var win;
      var v989 = !elem$$121;
      if (v989) {
        return null;
      }
      var v991 = val$$7 !== undefined$$1;
      if (v991) {
        return this.each(v355);
      } else {
        win = getWindow(elem$$121);
        var v990;
        if (win) {
          var v2843;
          var v4024 = "pageXOffset" in win;
          if (v4024) {
            var v4818;
            if (i$$94) {
              v4818 = "pageYOffset";
            } else {
              v4818 = "pageXOffset";
            }
            var v4022 = v4818;
            introspect(JAM.policy.p3) {
              v2843 = win[v4022];
            }
          } else {
            var v5212 = jQuery$$1.support;
            var v4819 = v5212.boxModel;
            if (v4819) {
              var v5416 = win.document;
              var v5213 = v5416.documentElement;
              introspect(JAM.policy.p3) {
                v4819 = v5213[method$$1];
              }
            }
            var v4023 = v4819;
            var v4821 = !v4023;
            if (v4821) {
              var v5214 = win.document;
              var v4820 = v5214.body;
              introspect(JAM.policy.p3) {
                v4023 = v4820[method$$1];
              }
            }
            v2843 = v4023;
          }
          v990 = v2843;
        } else {
          introspect(JAM.policy.p3) {
            v990 = elem$$121[method$$1];
          }
        }
        return v990;
      }
      return;
    }
    var method$$1 = "scroll" + name$$58;
    var v992 = jQuery$$1.fn;
    introspect(JAM.policy.p2) {
      v992[method$$1] = v356;
    }
    return;
  }
  function v354() {
    function v353() {
      var v993 = this.offsetParent;
      var v2844 = !v993;
      if (v2844) {
        v993 = document$$1.body;
      }
      var offsetParent$$2 = v993;
      var v2845 = offsetParent$$2;
      if (v2845) {
        var v5215 = offsetParent$$2.nodeName;
        var v4822 = /^body|html$/i.test(v5215);
        var v4025 = !v4822;
        if (v4025) {
          var v4823 = jQuery$$1.css(offsetParent$$2, "position");
          v4025 = v4823 === "static";
        }
        v2845 = v4025;
      }
      var v994 = v2845;
      for (;v994;) {
        offsetParent$$2 = offsetParent$$2.offsetParent;
        var v2846 = offsetParent$$2;
        if (v2846) {
          var v5216 = offsetParent$$2.nodeName;
          var v4824 = /^body|html$/i.test(v5216);
          var v4026 = !v4824;
          if (v4026) {
            var v4825 = jQuery$$1.css(offsetParent$$2, "position");
            v4026 = v4825 === "static";
          }
          v2846 = v4026;
        }
        v994 = v2846;
      }
      return offsetParent$$2;
    }
    return this.map(v353);
  }
  function v352() {
    var v2847 = this[0];
    var v995 = !v2847;
    if (v995) {
      return null;
    }
    var elem$$120 = this[0];
    var offsetParent$$1 = this.offsetParent();
    var offset$$8 = this.offset();
    var v996;
    var v4826 = offsetParent$$1[0];
    var v4027 = v4826.nodeName;
    var v2848 = /^body|html$/i.test(v4027);
    if (v2848) {
      v996 = {top:0, left:0};
    } else {
      v996 = offsetParent$$1.offset();
    }
    var parentOffset = v996;
    var v997 = offset$$8;
    var v4028 = v997.top;
    var v5217 = jQuery$$1.curCSS(elem$$120, "marginTop", true);
    var v4827 = parseFloat(v5217);
    var v5218 = !v4827;
    if (v5218) {
      v4827 = 0;
    }
    var v4029 = v4827;
    v997.top = v4028 - v4029;
    var v998 = offset$$8;
    var v4030 = v998.left;
    var v5219 = jQuery$$1.curCSS(elem$$120, "marginLeft", true);
    var v4828 = parseFloat(v5219);
    var v5220 = !v4828;
    if (v5220) {
      v4828 = 0;
    }
    var v4031 = v4828;
    v998.left = v4030 - v4031;
    var v999 = parentOffset;
    var v4032 = v999.top;
    var v5417 = offsetParent$$1[0];
    var v5221 = jQuery$$1.curCSS(v5417, "borderTopWidth", true);
    var v4829 = parseFloat(v5221);
    var v5222 = !v4829;
    if (v5222) {
      v4829 = 0;
    }
    var v4033 = v4829;
    v999.top = v4032 + v4033;
    var v1000 = parentOffset;
    var v4034 = v1000.left;
    var v5418 = offsetParent$$1[0];
    var v5223 = jQuery$$1.curCSS(v5418, "borderLeftWidth", true);
    var v4830 = parseFloat(v5223);
    var v5224 = !v4830;
    if (v5224) {
      v4830 = 0;
    }
    var v4035 = v4830;
    v1000.left = v4034 + v4035;
    var v2849 = offset$$8.top;
    var v2850 = parentOffset.top;
    var v1001 = v2849 - v2850;
    var v2851 = offset$$8.left;
    var v2852 = parentOffset.left;
    var v1002 = v2851 - v2852;
    return{top:v1001, left:v1002};
  }
  function v351(elem$$119, options$$7, i$$93) {
    var v2853 = jQuery$$1.curCSS(elem$$119, "position");
    var v1004 = /static/.test(v2853);
    if (v1004) {
      var v1003 = elem$$119.style;
      v1003.position = "relative";
    }
    var curElem = jQuery$$1(elem$$119);
    var curOffset = curElem.offset();
    var v2854 = jQuery$$1.curCSS(elem$$119, "top", true);
    var v1005 = parseInt(v2854, 10);
    var v2855 = !v1005;
    if (v2855) {
      v1005 = 0;
    }
    var curTop = v1005;
    var v2856 = jQuery$$1.curCSS(elem$$119, "left", true);
    var v1006 = parseInt(v2856, 10);
    var v2857 = !v1006;
    if (v2857) {
      v1006 = 0;
    }
    var curLeft = v1006;
    var v1007 = jQuery$$1.isFunction(options$$7);
    if (v1007) {
      options$$7 = options$$7.call(elem$$119, i$$93, curOffset);
    }
    var v4036 = options$$7.top;
    var v4037 = curOffset.top;
    var v2858 = v4036 - v4037;
    var v1008 = v2858 + curTop;
    var v4038 = options$$7.left;
    var v4039 = curOffset.left;
    var v2859 = v4038 - v4039;
    var v1009 = v2859 + curLeft;
    var props$$3 = {top:v1008, left:v1009};
    var v1011 = "using" in options$$7;
    if (v1011) {
      var v1010 = options$$7.using;
      v1010.call(elem$$119, props$$3);
    } else {
      curElem.css(props$$3);
    }
    return;
  }
  function v350(body$$4) {
    var top$$3 = body$$4.offsetTop;
    var left$$6 = body$$4.offsetLeft;
    var v1012 = jQuery$$1.offset;
    v1012.initialize();
    var v2860 = jQuery$$1.offset;
    var v1013 = v2860.doesNotIncludeMarginInBodyOffset;
    if (v1013) {
      var v2861 = top$$3;
      var v4831 = jQuery$$1.curCSS(body$$4, "marginTop", true);
      var v4040 = parseFloat(v4831);
      var v4832 = !v4040;
      if (v4832) {
        v4040 = 0;
      }
      var v2862 = v4040;
      top$$3 = v2861 + v2862;
      var v2863 = left$$6;
      var v4833 = jQuery$$1.curCSS(body$$4, "marginLeft", true);
      var v4041 = parseFloat(v4833);
      var v4834 = !v4041;
      if (v4834) {
        v4041 = 0;
      }
      var v2864 = v4041;
      left$$6 = v2863 + v2864;
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
    var v2865 = jQuery$$1.curCSS(body$$3, "marginTop", true);
    var v1014 = parseFloat(v2865);
    var v2866 = !v1014;
    if (v2866) {
      v1014 = 0;
    }
    var bodyMarginTop = v1014;
    var html$$4 = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
    var v1015 = container.style;
    var v1016 = {position:"absolute", top:0, left:0, margin:0, border:0, width:"1px", height:"1px", visibility:"hidden"};
    jQuery$$1.extend(v1015, v1016);
    container.innerHTML = html$$4;
    var v1017 = body$$3.firstChild;
    body$$3.insertBefore(container, v1017);
    innerDiv = container.firstChild;
    checkDiv = innerDiv.firstChild;
    var v2867 = innerDiv.nextSibling;
    var v1018 = v2867.firstChild;
    td = v1018.firstChild;
    var v1019 = checkDiv.offsetTop;
    this.doesNotAddBorder = v1019 !== 5;
    var v1020 = td.offsetTop;
    this.doesAddBorderForTableAndCells = v1020 === 5;
    var v2868 = checkDiv.style;
    v2868.position = "fixed";
    var v2869 = checkDiv.style;
    v2869.top = "20px";
    var v2870 = checkDiv.offsetTop;
    var v1021 = v2870 === 20;
    var v2872 = !v1021;
    if (v2872) {
      var v2871 = checkDiv.offsetTop;
      v1021 = v2871 === 15;
    }
    this.supportsFixedPosition = v1021;
    var v1022 = checkDiv.style;
    var v2873 = checkDiv.style;
    v1022.position = v2873.top = "";
    var v2874 = innerDiv.style;
    v2874.overflow = "hidden";
    var v2875 = innerDiv.style;
    v2875.position = "relative";
    var v1023 = checkDiv.offsetTop;
    this.subtractsBorderForOverflowNotVisible = v1023 === -5;
    var v1024 = body$$3.offsetTop;
    this.doesNotIncludeMarginInBodyOffset = v1024 !== bodyMarginTop;
    body$$3.removeChild(container);
    body$$3 = container = innerDiv = checkDiv = table$$1 = td = null;
    var v1025 = jQuery$$1.offset;
    v1025.initialize = jQuery$$1.noop;
    return;
  }
  function v348(options$$6) {
    function v347(i$$92) {
      var v1026 = jQuery$$1.offset;
      v1026.setOffset(this, options$$6, i$$92);
      return;
    }
    var elem$$118 = this[0];
    if (options$$6) {
      return this.each(v347);
    }
    var v2876 = !elem$$118;
    var v4043 = !v2876;
    if (v4043) {
      var v4042 = elem$$118.ownerDocument;
      v2876 = !v4042;
    }
    var v1027 = v2876;
    if (v1027) {
      return null;
    }
    var v4044 = elem$$118.ownerDocument;
    var v2877 = v4044.body;
    var v1029 = elem$$118 === v2877;
    if (v1029) {
      var v1028 = jQuery$$1.offset;
      return v1028.bodyOffset(elem$$118);
    }
    var v1030 = jQuery$$1.offset;
    v1030.initialize();
    var offsetParent = elem$$118.offsetParent;
    var prevOffsetParent = elem$$118;
    var doc$$4 = elem$$118.ownerDocument;
    var computedStyle$$1;
    var docElem$$1 = doc$$4.documentElement;
    var body$$2 = doc$$4.body;
    var defaultView$$1 = doc$$4.defaultView;
    var v1031;
    if (defaultView$$1) {
      v1031 = defaultView$$1.getComputedStyle(elem$$118, null);
    } else {
      v1031 = elem$$118.currentStyle;
    }
    var prevComputedStyle = v1031;
    var top$$2 = elem$$118.offsetTop;
    var left$$5 = elem$$118.offsetLeft;
    var v4045 = elem$$118 = elem$$118.parentNode;
    if (v4045) {
      v4045 = elem$$118 !== body$$2;
    }
    var v2878 = v4045;
    if (v2878) {
      v2878 = elem$$118 !== docElem$$1;
    }
    var v1037 = v2878;
    for (;v1037;) {
      var v4046 = jQuery$$1.offset;
      var v2879 = v4046.supportsFixedPosition;
      if (v2879) {
        var v4047 = prevComputedStyle.position;
        v2879 = v4047 === "fixed";
      }
      var v1032 = v2879;
      if (v1032) {
        break;
      }
      var v1033;
      if (defaultView$$1) {
        v1033 = defaultView$$1.getComputedStyle(elem$$118, null);
      } else {
        v1033 = elem$$118.currentStyle;
      }
      computedStyle$$1 = v1033;
      var v2880 = elem$$118.scrollTop;
      top$$2 = top$$2 - v2880;
      var v2881 = elem$$118.scrollLeft;
      left$$5 = left$$5 - v2881;
      var v1035 = elem$$118 === offsetParent;
      if (v1035) {
        var v2882 = elem$$118.offsetTop;
        top$$2 = top$$2 + v2882;
        var v2883 = elem$$118.offsetLeft;
        left$$5 = left$$5 + v2883;
        var v4048 = jQuery$$1.offset;
        var v2884 = v4048.doesNotAddBorder;
        if (v2884) {
          var v5225 = jQuery$$1.offset;
          var v4835 = v5225.doesAddBorderForTableAndCells;
          if (v4835) {
            var v5226 = elem$$118.nodeName;
            v4835 = /^t(able|d|h)$/i.test(v5226);
          }
          var v4049 = v4835;
          v2884 = !v4049;
        }
        var v1034 = v2884;
        if (v1034) {
          var v2885 = top$$2;
          var v4836 = computedStyle$$1.borderTopWidth;
          var v4050 = parseFloat(v4836);
          var v4837 = !v4050;
          if (v4837) {
            v4050 = 0;
          }
          var v2886 = v4050;
          top$$2 = v2885 + v2886;
          var v2887 = left$$5;
          var v4838 = computedStyle$$1.borderLeftWidth;
          var v4051 = parseFloat(v4838);
          var v4839 = !v4051;
          if (v4839) {
            v4051 = 0;
          }
          var v2888 = v4051;
          left$$5 = v2887 + v2888;
        }
        prevOffsetParent = offsetParent;
        offsetParent = elem$$118.offsetParent;
      }
      var v4052 = jQuery$$1.offset;
      var v2889 = v4052.subtractsBorderForOverflowNotVisible;
      if (v2889) {
        var v4053 = computedStyle$$1.overflow;
        v2889 = v4053 !== "visible";
      }
      var v1036 = v2889;
      if (v1036) {
        var v2890 = top$$2;
        var v4840 = computedStyle$$1.borderTopWidth;
        var v4054 = parseFloat(v4840);
        var v4841 = !v4054;
        if (v4841) {
          v4054 = 0;
        }
        var v2891 = v4054;
        top$$2 = v2890 + v2891;
        var v2892 = left$$5;
        var v4842 = computedStyle$$1.borderLeftWidth;
        var v4055 = parseFloat(v4842);
        var v4843 = !v4055;
        if (v4843) {
          v4055 = 0;
        }
        var v2893 = v4055;
        left$$5 = v2892 + v2893;
      }
      prevComputedStyle = computedStyle$$1;
      var v4056 = elem$$118 = elem$$118.parentNode;
      if (v4056) {
        v4056 = elem$$118 !== body$$2;
      }
      var v2894 = v4056;
      if (v2894) {
        v2894 = elem$$118 !== docElem$$1;
      }
      v1037 = v2894;
    }
    var v4057 = prevComputedStyle.position;
    var v2895 = v4057 === "relative";
    var v4059 = !v2895;
    if (v4059) {
      var v4058 = prevComputedStyle.position;
      v2895 = v4058 === "static";
    }
    var v1038 = v2895;
    if (v1038) {
      var v2896 = body$$2.offsetTop;
      top$$2 = top$$2 + v2896;
      var v2897 = body$$2.offsetLeft;
      left$$5 = left$$5 + v2897;
    }
    var v4060 = jQuery$$1.offset;
    var v2898 = v4060.supportsFixedPosition;
    if (v2898) {
      var v4061 = prevComputedStyle.position;
      v2898 = v4061 === "fixed";
    }
    var v1039 = v2898;
    if (v1039) {
      var v2899 = top$$2;
      var v4062 = docElem$$1.scrollTop;
      var v4063 = body$$2.scrollTop;
      var v2900 = Math.max(v4062, v4063);
      top$$2 = v2899 + v2900;
      var v2901 = left$$5;
      var v4064 = docElem$$1.scrollLeft;
      var v4065 = body$$2.scrollLeft;
      var v2902 = Math.max(v4064, v4065);
      left$$5 = v2901 + v2902;
    }
    return{top:top$$2, left:left$$5};
  }
  function v346(options$$5) {
    function v345(i$$91) {
      var v1040 = jQuery$$1.offset;
      v1040.setOffset(this, options$$5, i$$91);
      return;
    }
    var elem$$117 = this[0];
    if (options$$5) {
      return this.each(v345);
    }
    var v2903 = !elem$$117;
    var v4067 = !v2903;
    if (v4067) {
      var v4066 = elem$$117.ownerDocument;
      v2903 = !v4066;
    }
    var v1041 = v2903;
    if (v1041) {
      return null;
    }
    var v4068 = elem$$117.ownerDocument;
    var v2904 = v4068.body;
    var v1043 = elem$$117 === v2904;
    if (v1043) {
      var v1042 = jQuery$$1.offset;
      return v1042.bodyOffset(elem$$117);
    }
    var box = elem$$117.getBoundingClientRect();
    var doc$$3 = elem$$117.ownerDocument;
    var body$$1 = doc$$3.body;
    var docElem = doc$$3.documentElement;
    var v2905 = docElem.clientTop;
    var v4069 = !v2905;
    if (v4069) {
      v2905 = body$$1.clientTop;
    }
    var v1044 = v2905;
    var v2906 = !v1044;
    if (v2906) {
      v1044 = 0;
    }
    var clientTop = v1044;
    var v2907 = docElem.clientLeft;
    var v4070 = !v2907;
    if (v4070) {
      v2907 = body$$1.clientLeft;
    }
    var v1045 = v2907;
    var v2908 = !v1045;
    if (v2908) {
      v1045 = 0;
    }
    var clientLeft = v1045;
    var v2909 = box.top;
    var v4844 = self.pageYOffset;
    var v5228 = !v4844;
    if (v5228) {
      var v5419 = jQuery$$1.support;
      var v5227 = v5419.boxModel;
      if (v5227) {
        v5227 = docElem.scrollTop;
      }
      v4844 = v5227;
    }
    var v4071 = v4844;
    var v4845 = !v4071;
    if (v4845) {
      v4071 = body$$1.scrollTop;
    }
    var v2910 = v4071;
    var v1046 = v2909 + v2910;
    var top$$1 = v1046 - clientTop;
    var v2911 = box.left;
    var v4846 = self.pageXOffset;
    var v5230 = !v4846;
    if (v5230) {
      var v5420 = jQuery$$1.support;
      var v5229 = v5420.boxModel;
      if (v5229) {
        v5229 = docElem.scrollLeft;
      }
      v4846 = v5229;
    }
    var v4072 = v4846;
    var v4847 = !v4072;
    if (v4847) {
      v4072 = body$$1.scrollLeft;
    }
    var v2912 = v4072;
    var v1047 = v2911 + v2912;
    var left$$4 = v1047 - clientLeft;
    return{top:top$$1, left:left$$4};
  }
  function v344(elem$$116) {
    function v343(fn$$17) {
      var v1048 = fn$$17.elem;
      return elem$$116 === v1048;
    }
    var v2913 = jQuery$$1.timers;
    var v1049 = jQuery$$1.grep(v2913, v343);
    return v1049.length;
  }
  function v342(fx$$1) {
    var v4073 = fx$$1.elem;
    var v2914 = v4073.style;
    if (v2914) {
      var v5231 = fx$$1.elem;
      var v4848 = v5231.style;
      var v4849 = fx$$1.prop;
      introspect(JAM.policy.p3) {
        var v4074 = v4848[v4849]
      }
      v2914 = v4074 != null;
    }
    var v1054 = v2914;
    if (v1054) {
      var v2915 = fx$$1.elem;
      var v1050 = v2915.style;
      var v1051 = fx$$1.prop;
      var v4075;
      var v5421 = fx$$1.prop;
      var v5232 = v5421 === "width";
      var v5423 = !v5232;
      if (v5423) {
        var v5422 = fx$$1.prop;
        v5232 = v5422 === "height";
      }
      var v4851 = v5232;
      if (v4851) {
        var v4850 = fx$$1.now;
        v4075 = Math.max(0, v4850);
      } else {
        v4075 = fx$$1.now;
      }
      var v2916 = v4075;
      var v2917 = fx$$1.unit;
      introspect(JAM.policy.p2) {
        v1050[v1051] = v2916 + v2917;
      }
    } else {
      var v1052 = fx$$1.elem;
      var v1053 = fx$$1.prop;
      introspect(JAM.policy.p2) {
        v1052[v1053] = fx$$1.now;
      }
    }
    return;
  }
  function v341(fx) {
    var v1055 = fx.elem;
    var v1056 = fx.now;
    jQuery$$1.style(v1055, "opacity", v1056);
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
    var v2918 = timers$$1.length;
    var v1059 = i$$90 < v2918;
    for (;v1059;) {
      introspect(JAM.policy.p3) {
        var v2919 = timers$$1[i$$90]()
      }
      var v1058 = !v2919;
      if (v1058) {
        var v1057 = i$$90;
        i$$90 = i$$90 - 1;
        timers$$1.splice(v1057, 1);
      }
      i$$90 = i$$90 + 1;
      var v2920 = timers$$1.length;
      v1059 = i$$90 < v2920;
    }
    var v2921 = timers$$1.length;
    var v1061 = !v2921;
    if (v1061) {
      var v1060 = jQuery$$1.fx;
      v1060.stop();
    }
    return;
  }
  function v338(gotoEnd$$2) {
    var t$$1 = now();
    var done$$2 = true;
    var v2922 = gotoEnd$$2;
    var v4077 = !v2922;
    if (v4077) {
      var v5233 = this.options;
      var v4852 = v5233.duration;
      var v4853 = this.startTime;
      var v4076 = v4852 + v4853;
      v2922 = t$$1 >= v4076;
    }
    var v1090 = v2922;
    if (v1090) {
      this.now = this.end;
      this.pos = this.state = 1;
      this.update();
      var v2923 = this.options;
      var v1062 = v2923.curAnim;
      var v1063 = this.prop;
      introspect(JAM.policy.p2) {
        v1062[v1063] = true;
      }
      var i$$89;
      var v2924 = this.options;
      var v1065 = v2924.curAnim;
      for (i$$89 in v1065) {
        var v4854 = this.options;
        var v4078 = v4854.curAnim;
        introspect(JAM.policy.p3) {
          var v2925 = v4078[i$$89]
        }
        var v1064 = v2925 !== true;
        if (v1064) {
          done$$2 = false;
        }
      }
      if (done$$2) {
        var v4079 = this.options;
        var v2926 = v4079.display;
        var v1071 = v2926 != null;
        if (v1071) {
          var v2927 = this.elem;
          var v1066 = v2927.style;
          var v2928 = this.options;
          v1066.overflow = v2928.overflow;
          var v1067 = this.elem;
          var old$$7 = jQuery$$1.data(v1067, "olddisplay");
          var v2929 = this.elem;
          var v1068 = v2929.style;
          var v2930;
          if (old$$7) {
            v2930 = old$$7;
          } else {
            var v4080 = this.options;
            v2930 = v4080.display;
          }
          v1068.display = v2930;
          var v4081 = this.elem;
          var v2931 = jQuery$$1.css(v4081, "display");
          var v1070 = v2931 === "none";
          if (v1070) {
            var v2932 = this.elem;
            var v1069 = v2932.style;
            v1069.display = "block";
          }
        }
        var v2933 = this.options;
        var v1073 = v2933.hide;
        if (v1073) {
          var v2934 = this.elem;
          var v1072 = jQuery$$1(v2934);
          v1072.hide();
        }
        var v4082 = this.options;
        var v2935 = v4082.hide;
        var v4084 = !v2935;
        if (v4084) {
          var v4083 = this.options;
          v2935 = v4083.show;
        }
        var v1077 = v2935;
        if (v1077) {
          var p$$3;
          var v2936 = this.options;
          var v1076 = v2936.curAnim;
          for (p$$3 in v1076) {
            var v1074 = this.elem;
            var v4085 = this.options;
            var v2937 = v4085.orig;
            introspect(JAM.policy.p3) {
              var v1075 = v2937[p$$3]
            }
            jQuery$$1.style(v1074, p$$3, v1075);
          }
        }
        var v2938 = this.options;
        var v1078 = v2938.complete;
        var v1079 = this.elem;
        v1078.call(v1079);
      }
      return false;
    } else {
      var v1080 = this.startTime;
      var n$$5 = t$$1 - v1080;
      var v2939 = this.options;
      var v1081 = v2939.duration;
      this.state = n$$5 / v1081;
      var v2940 = this.options;
      var v1082 = v2940.specialEasing;
      if (v1082) {
        var v4086 = this.options;
        var v2941 = v4086.specialEasing;
        var v2942 = this.prop;
        introspect(JAM.policy.p3) {
          v1082 = v2941[v2942];
        }
      }
      var specialEasing = v1082;
      var v2943 = this.options;
      var v1083 = v2943.easing;
      var v2945 = !v1083;
      if (v2945) {
        var v2944;
        var v4855 = jQuery$$1.easing;
        var v4087 = v4855.swing;
        if (v4087) {
          v2944 = "swing";
        } else {
          v2944 = "linear";
        }
        v1083 = v2944;
      }
      var defaultEasing = v1083;
      var v1084 = jQuery$$1.easing;
      var v1085 = specialEasing || defaultEasing;
      var v1086 = this.state;
      var v2946 = this.options;
      var v1087 = v2946.duration;
      introspect(JAM.policy.p3) {
        var v5574 = v1084[v1085](v1086, n$$5, 0, 1, v1087)
      }
      this.pos = v5574;
      var v1088 = this.start;
      var v4088 = this.end;
      var v4089 = this.start;
      var v2947 = v4088 - v4089;
      var v2948 = this.pos;
      var v1089 = v2947 * v2948;
      this.now = v1088 + v1089;
      this.update();
    }
    return true;
  }
  function v337() {
    var v2949 = this.options;
    var v1091 = v2949.orig;
    var v1092 = this.prop;
    var v2950 = this.elem;
    var v2951 = this.prop;
    var v5575 = jQuery$$1.style(v2950, v2951);
    introspect(JAM.policy.p2) {
      v1091[v1092] = v5575;
    }
    var v1093 = this.options;
    v1093.hide = true;
    var v1094 = this.cur();
    this.custom(v1094, 0);
    return;
  }
  function v336() {
    var v2952 = this.options;
    var v1095 = v2952.orig;
    var v1096 = this.prop;
    var v2953 = this.elem;
    var v2954 = this.prop;
    var v5576 = jQuery$$1.style(v2953, v2954);
    introspect(JAM.policy.p2) {
      v1095[v1096] = v5576;
    }
    var v1097 = this.options;
    v1097.show = true;
    var v2955;
    var v5234 = this.prop;
    var v4856 = v5234 === "width";
    var v5236 = !v4856;
    if (v5236) {
      var v5235 = this.prop;
      v4856 = v5235 === "height";
    }
    var v4090 = v4856;
    if (v4090) {
      v2955 = 1;
    } else {
      v2955 = 0;
    }
    var v1098 = v2955;
    var v1099 = this.cur();
    this.custom(v1098, v1099);
    var v2956 = this.elem;
    var v1100 = jQuery$$1(v2956);
    v1100.show();
    return;
  }
  function v335(from, to$$1, unit$$1) {
    function t(gotoEnd$$1) {
      return self$$13.step(gotoEnd$$1);
    }
    var v5577 = now();
    this.startTime = v5577;
    this.start = from;
    this.end = to$$1;
    var v2957 = unit$$1;
    var v4091 = !v2957;
    if (v4091) {
      v2957 = this.unit;
    }
    var v1101 = v2957;
    var v2958 = !v1101;
    if (v2958) {
      v1101 = "px";
    }
    this.unit = v1101;
    this.now = this.start;
    this.pos = this.state = 0;
    var self$$13 = this;
    t.elem = this.elem;
    var v4092 = t();
    if (v4092) {
      var v4857 = jQuery$$1.timers;
      v4092 = v4857.push(t);
    }
    var v2959 = v4092;
    if (v2959) {
      v2959 = !timerId;
    }
    var v1103 = v2959;
    if (v1103) {
      var v2960 = jQuery$$1.fx;
      var v1102 = v2960.tick;
      timerId = setInterval(v1102, 13);
    }
    return;
  }
  function v334(force$$2) {
    var v4858 = this.elem;
    var v4859 = this.prop;
    introspect(JAM.policy.p3) {
      var v4093 = v4858[v4859]
    }
    var v2961 = v4093 != null;
    if (v2961) {
      var v5237 = this.elem;
      var v4860 = v5237.style;
      var v4094 = !v4860;
      var v4862 = !v4094;
      if (v4862) {
        var v5424 = this.elem;
        var v5238 = v5424.style;
        var v5239 = this.prop;
        introspect(JAM.policy.p3) {
          var v4861 = v5238[v5239]
        }
        v4094 = v4861 == null;
      }
      v2961 = v4094;
    }
    var v1106 = v2961;
    if (v1106) {
      var v1104 = this.elem;
      var v1105 = this.prop;
      introspect(JAM.policy.p3) {
        return v1104[v1105];
      }
    }
    var v2962 = this.elem;
    var v2963 = this.prop;
    var v1107 = jQuery$$1.css(v2962, v2963, force$$2);
    var r$$2 = parseFloat(v1107);
    var v1108;
    var v4095 = r$$2;
    if (v4095) {
      v4095 = r$$2 > -1E4;
    }
    var v2965 = v4095;
    if (v2965) {
      v1108 = r$$2;
    } else {
      var v4863 = this.elem;
      var v4864 = this.prop;
      var v4096 = jQuery$$1.curCSS(v4863, v4864);
      var v2964 = parseFloat(v4096);
      var v4097 = !v2964;
      if (v4097) {
        v2964 = 0;
      }
      v1108 = v2964;
    }
    return v1108;
  }
  function v333() {
    var v2966 = this.options;
    var v1112 = v2966.step;
    if (v1112) {
      var v2967 = this.options;
      var v1109 = v2967.step;
      var v1110 = this.elem;
      var v1111 = this.now;
      v1109.call(v1110, v1111, this);
    }
    var v4865 = jQuery$$1.fx;
    var v4098 = v4865.step;
    var v4099 = this.prop;
    introspect(JAM.policy.p3) {
      var v2968 = v4098[v4099]
    }
    var v4101 = !v2968;
    if (v4101) {
      var v4866 = jQuery$$1.fx;
      var v4100 = v4866.step;
      v2968 = v4100._default;
    }
    var v1113 = v2968;
    v1113(this);
    var v4867 = this.prop;
    var v4102 = v4867 === "height";
    var v4869 = !v4102;
    if (v4869) {
      var v4868 = this.prop;
      v4102 = v4868 === "width";
    }
    var v2969 = v4102;
    if (v2969) {
      var v4103 = this.elem;
      v2969 = v4103.style;
    }
    var v1115 = v2969;
    if (v1115) {
      var v2970 = this.elem;
      var v1114 = v2970.style;
      v1114.display = "block";
    }
    return;
  }
  function v332(elem$$115, options$$4, prop$$7) {
    this.options = options$$4;
    this.elem = elem$$115;
    this.prop = prop$$7;
    var v2971 = options$$4.orig;
    var v1116 = !v2971;
    if (v1116) {
      options$$4.orig = {};
    }
    return;
  }
  function v331(p$$2, n$$4, firstNum$$1, diff$$2) {
    var v5488 = Math.PI;
    var v5425 = p$$2 * v5488;
    var v5240 = Math.cos(v5425);
    var v4870 = -v5240;
    var v4104 = v4870 / 2;
    var v2972 = v4104 + .5;
    var v1117 = v2972 * diff$$2;
    return v1117 + firstNum$$1;
  }
  function v330(p$$1, n$$3, firstNum, diff$$1) {
    var v1118 = diff$$1 * p$$1;
    return firstNum + v1118;
  }
  function v329(speed$$5, easing$$1, fn$$16) {
    function v328() {
      var v2973 = opt$$1.queue;
      var v1120 = v2973 !== false;
      if (v1120) {
        var v1119 = jQuery$$1(this);
        v1119.dequeue();
      }
      var v2974 = opt$$1.old;
      var v1122 = jQuery$$1.isFunction(v2974);
      if (v1122) {
        var v1121 = opt$$1.old;
        v1121.call(this);
      }
      return;
    }
    var v1123;
    var v4105 = speed$$5;
    if (v4105) {
      var v4871 = typeof speed$$5;
      v4105 = v4871 === "object";
    }
    var v2977 = v4105;
    if (v2977) {
      v1123 = speed$$5;
    } else {
      var v4872 = fn$$16;
      var v5242 = !v4872;
      if (v5242) {
        var v5241 = !fn$$16;
        if (v5241) {
          v5241 = easing$$1;
        }
        v4872 = v5241;
      }
      var v4106 = v4872;
      var v4874 = !v4106;
      if (v4874) {
        var v4873 = jQuery$$1.isFunction(speed$$5);
        if (v4873) {
          v4873 = speed$$5;
        }
        v4106 = v4873;
      }
      var v2975 = v4106;
      var v4107 = fn$$16 && easing$$1;
      var v4876 = !v4107;
      if (v4876) {
        var v5243 = easing$$1;
        if (v5243) {
          var v5426 = jQuery$$1.isFunction(easing$$1);
          v5243 = !v5426;
        }
        var v4875 = v5243;
        if (v4875) {
          v4875 = easing$$1;
        }
        v4107 = v4875;
      }
      var v2976 = v4107;
      v1123 = {complete:v2975, duration:speed$$5, easing:v2976};
    }
    var opt$$1 = v1123;
    var v1124;
    var v4108 = jQuery$$1.fx;
    var v2979 = v4108.off;
    if (v2979) {
      v1124 = 0;
    } else {
      var v2978;
      var v5244 = opt$$1.duration;
      var v4877 = typeof v5244;
      var v4110 = v4877 === "number";
      if (v4110) {
        v2978 = opt$$1.duration;
      } else {
        var v5245 = jQuery$$1.fx;
        var v4878 = v5245.speeds;
        var v4879 = opt$$1.duration;
        introspect(JAM.policy.p3) {
          var v4109 = v4878[v4879]
        }
        var v4881 = !v4109;
        if (v4881) {
          var v5246 = jQuery$$1.fx;
          var v4880 = v5246.speeds;
          v4109 = v4880._default;
        }
        v2978 = v4109;
      }
      v1124 = v2978;
    }
    opt$$1.duration = v1124;
    opt$$1.old = opt$$1.complete;
    opt$$1.complete = v328;
    return opt$$1;
  }
  function v327(name$$57, props$$2) {
    function v326(speed$$4, callback$$41) {
      return this.animate(props$$2, speed$$4, callback$$41);
    }
    var v1125 = jQuery$$1.fn;
    introspect(JAM.policy.p2) {
      v1125[name$$57] = v326;
    }
    return;
  }
  function v325(clearQueue, gotoEnd) {
    function v324() {
      var v1126 = timers.length;
      var i$$88 = v1126 - 1;
      var v1128 = i$$88 >= 0;
      for (;v1128;) {
        introspect(JAM.policy.p3) {
          var v4111 = timers[i$$88]
        }
        var v2980 = v4111.elem;
        var v1127 = v2980 === this;
        if (v1127) {
          if (gotoEnd) {
            introspect(JAM.policy.p3) {
              timers[i$$88](true);
            }
          }
          timers.splice(i$$88, 1);
        }
        i$$88 = i$$88 - 1;
        v1128 = i$$88 >= 0;
      }
      return;
    }
    var timers = jQuery$$1.timers;
    if (clearQueue) {
      this.queue([]);
    }
    this.each(v324);
    var v1129 = !gotoEnd;
    if (v1129) {
      this.dequeue();
    }
    return this;
  }
  function v323(prop$$6, speed$$3, easing, callback$$40) {
    function v322() {
      function v321(name$$56, val$$6) {
        var v1130 = jQuery$$1.fx;
        var e$$30 = new v1130(self$$12, opt, name$$56);
        var v1141 = rfxtypes.test(val$$6);
        if (v1141) {
          var v2981;
          var v4113 = val$$6 === "toggle";
          if (v4113) {
            var v4112;
            if (hidden) {
              v4112 = "show";
            } else {
              v4112 = "hide";
            }
            v2981 = v4112;
          } else {
            v2981 = val$$6;
          }
          var v1131 = v2981;
          introspect(JAM.policy.p3) {
            e$$30[v1131](prop$$6);
          }
        } else {
          var parts$$3 = rfxnum.exec(val$$6);
          var v1132 = e$$30.cur(true);
          var v2982 = !v1132;
          if (v2982) {
            v1132 = 0;
          }
          var start$$4 = v1132;
          if (parts$$3) {
            var v1133 = parts$$3[2];
            var end$$1 = parseFloat(v1133);
            var v1134 = parts$$3[3];
            var v2983 = !v1134;
            if (v2983) {
              v1134 = "px";
            }
            var unit = v1134;
            var v1138 = unit !== "px";
            if (v1138) {
              var v1135 = self$$12.style;
              var v2984 = end$$1 || 1;
              introspect(JAM.policy.p2) {
                v1135[name$$56] = v2984 + unit;
              }
              var v2985 = end$$1 || 1;
              var v2986 = e$$30.cur(true);
              var v1136 = v2985 / v2986;
              start$$4 = v1136 * start$$4;
              var v1137 = self$$12.style;
              introspect(JAM.policy.p2) {
                v1137[name$$56] = start$$4 + unit;
              }
            }
            var v1140 = parts$$3[1];
            if (v1140) {
              var v4114;
              var v5247 = parts$$3[1];
              var v4882 = v5247 === "-=";
              if (v4882) {
                v4114 = -1;
              } else {
                v4114 = 1;
              }
              var v2987 = v4114;
              var v1139 = v2987 * end$$1;
              end$$1 = v1139 + start$$4;
            }
            e$$30.custom(start$$4, end$$1, unit);
          } else {
            e$$30.custom(start$$4, val$$6, "");
          }
        }
        return;
      }
      var opt = jQuery$$1.extend({}, optall);
      var p;
      var v2988 = this.nodeType;
      var v1142 = v2988 === 1;
      if (v1142) {
        var v2989 = jQuery$$1(this);
        v1142 = v2989.is(":hidden");
      }
      var hidden = v1142;
      var self$$12 = this;
      for (p in prop$$6) {
        var name$$55 = p.replace(rdashAlpha, fcamelCase);
        var v1143 = p !== name$$55;
        if (v1143) {
          introspect(JAM.policy.p4) {
            prop$$6[name$$55] = prop$$6[p];
          }
          delete prop$$6[p];
          p = name$$55;
        }
        introspect(JAM.policy.p3) {
          var v4883 = prop$$6[p]
        }
        var v4115 = v4883 === "hide";
        if (v4115) {
          v4115 = hidden;
        }
        var v2990 = v4115;
        var v4117 = !v2990;
        if (v4117) {
          introspect(JAM.policy.p3) {
            var v4884 = prop$$6[p]
          }
          var v4116 = v4884 === "show";
          if (v4116) {
            v4116 = !hidden;
          }
          v2990 = v4116;
        }
        var v1145 = v2990;
        if (v1145) {
          var v1144 = opt.complete;
          return v1144.call(this);
        }
        var v4118 = p === "height";
        var v4885 = !v4118;
        if (v4885) {
          v4118 = p === "width";
        }
        var v2991 = v4118;
        if (v2991) {
          v2991 = this.style;
        }
        var v1148 = v2991;
        if (v1148) {
          var v1146 = opt;
          var v5578 = jQuery$$1.css(this, "display");
          v1146.display = v5578;
          var v1147 = this.style;
          opt.overflow = v1147.overflow;
        }
        introspect(JAM.policy.p3) {
          var v2992 = prop$$6[p]
        }
        var v1151 = jQuery$$1.isArray(v2992);
        if (v1151) {
          var v2993 = opt.specialEasing;
          var v4119 = !v2993;
          if (v4119) {
            v2993 = {};
          }
          var v1149 = opt.specialEasing = v2993;
          introspect(JAM.policy.p3) {
            var v2994 = prop$$6[p]
          }
          introspect(JAM.policy.p2) {
            v1149[p] = v2994[1];
          }
          introspect(JAM.policy.p3) {
            var v1150 = prop$$6[p]
          }
          introspect(JAM.policy.p2) {
            prop$$6[p] = v1150[0];
          }
        }
      }
      var v2995 = opt.overflow;
      var v1153 = v2995 != null;
      if (v1153) {
        var v1152 = this.style;
        v1152.overflow = "hidden";
      }
      var v1154 = opt;
      var v5579 = jQuery$$1.extend({}, prop$$6);
      v1154.curAnim = v5579;
      jQuery$$1.each(prop$$6, v321);
      return true;
    }
    var optall = jQuery$$1.speed(speed$$3, easing, callback$$40);
    var v1156 = jQuery$$1.isEmptyObject(prop$$6);
    if (v1156) {
      var v1155 = optall.complete;
      return this.each(v1155);
    }
    var v2996;
    var v4886 = optall.queue;
    var v4120 = v4886 === false;
    if (v4120) {
      v2996 = "each";
    } else {
      v2996 = "queue";
    }
    var v1157 = v2996;
    introspect(JAM.policy.p3) {
      return this[v1157](v322);
    }
  }
  function v320(speed$$2, to, callback$$39) {
    var v4887 = this.filter(":hidden");
    var v4121 = v4887.css("opacity", 0);
    var v2997 = v4121.show();
    var v1158 = v2997.end();
    var v1159 = {opacity:to};
    return v1158.animate(v1159, speed$$2, callback$$39);
  }
  function v319(fn$$15, fn2) {
    function v318() {
      var v1160;
      if (bool) {
        v1160 = fn$$15;
      } else {
        var v2998 = jQuery$$1(this);
        v1160 = v2998.is(":hidden");
      }
      var state$$1 = v1160;
      var v1161 = jQuery$$1(this);
      var v2999;
      if (state$$1) {
        v2999 = "show";
      } else {
        v2999 = "hide";
      }
      var v1162 = v2999;
      introspect(JAM.policy.p3) {
        v1161[v1162]();
      }
      return;
    }
    var v1163 = typeof fn$$15;
    var bool = v1163 === "boolean";
    var v3000 = jQuery$$1.isFunction(fn$$15);
    if (v3000) {
      v3000 = jQuery$$1.isFunction(fn2);
    }
    var v1167 = v3000;
    if (v1167) {
      var v1164 = this._toggle;
      v1164.apply(this, arguments);
    } else {
      var v3001 = fn$$15 == null;
      var v4122 = !v3001;
      if (v4122) {
        v3001 = bool;
      }
      var v1166 = v3001;
      if (v1166) {
        this.each(v318);
      } else {
        var v1165 = genFx("toggle", 3);
        this.animate(v1165, fn$$15, fn2);
      }
    }
    return this;
  }
  function v317(speed$$1, callback$$38) {
    var v3002 = speed$$1;
    var v4123 = !v3002;
    if (v4123) {
      v3002 = speed$$1 === 0;
    }
    var v1176 = v3002;
    if (v1176) {
      var v1168 = genFx("hide", 3);
      return this.animate(v1168, speed$$1, callback$$38);
    } else {
      var i$$87 = 0;
      var l$$24 = this.length;
      var v1173 = i$$87 < l$$24;
      for (;v1173;) {
        introspect(JAM.policy.p3) {
          var v1169 = this[i$$87]
        }
        var old$$6 = jQuery$$1.data(v1169, "olddisplay");
        var v3003 = !old$$6;
        if (v3003) {
          v3003 = old$$6 !== "none";
        }
        var v1172 = v3003;
        if (v1172) {
          introspect(JAM.policy.p3) {
            var v1170 = this[i$$87]
          }
          introspect(JAM.policy.p3) {
            var v3004 = this[i$$87]
          }
          var v1171 = jQuery$$1.css(v3004, "display");
          jQuery$$1.data(v1170, "olddisplay", v1171);
        }
        i$$87 = i$$87 + 1;
        v1173 = i$$87 < l$$24;
      }
      var j$$6 = 0;
      var k$$3 = this.length;
      var v1175 = j$$6 < k$$3;
      for (;v1175;) {
        introspect(JAM.policy.p3) {
          var v3005 = this[j$$6]
        }
        var v1174 = v3005.style;
        v1174.display = "none";
        j$$6 = j$$6 + 1;
        v1175 = j$$6 < k$$3;
      }
      return this;
    }
    return;
  }
  function v316(speed, callback$$37) {
    var v3006 = speed;
    var v4124 = !v3006;
    if (v4124) {
      v3006 = speed === 0;
    }
    var v1189 = v3006;
    if (v1189) {
      var v1177 = genFx("show", 3);
      return this.animate(v1177, speed, callback$$37);
    } else {
      var i$$86 = 0;
      var l$$23 = this.length;
      var v1186 = i$$86 < l$$23;
      for (;v1186;) {
        introspect(JAM.policy.p3) {
          var v1178 = this[i$$86]
        }
        var old$$5 = jQuery$$1.data(v1178, "olddisplay");
        introspect(JAM.policy.p3) {
          var v3007 = this[i$$86]
        }
        var v1179 = v3007.style;
        v1179.display = old$$5 || "";
        introspect(JAM.policy.p3) {
          var v4125 = this[i$$86]
        }
        var v3008 = jQuery$$1.css(v4125, "display");
        var v1185 = v3008 === "none";
        if (v1185) {
          introspect(JAM.policy.p3) {
            var v1180 = this[i$$86]
          }
          var nodeName = v1180.nodeName;
          var display;
          introspect(JAM.policy.p3) {
            var v1183 = elemdisplay[nodeName]
          }
          if (v1183) {
            introspect(JAM.policy.p3) {
              display = elemdisplay[nodeName];
            }
          } else {
            var v4126 = "<" + nodeName;
            var v3009 = v4126 + " />";
            var v1181 = jQuery$$1(v3009);
            var elem$$114 = v1181.appendTo("body");
            display = elem$$114.css("display");
            var v1182 = display === "none";
            if (v1182) {
              display = "block";
            }
            elem$$114.remove();
            introspect(JAM.policy.p2) {
              elemdisplay[nodeName] = display;
            }
          }
          introspect(JAM.policy.p3) {
            var v1184 = this[i$$86]
          }
          jQuery$$1.data(v1184, "olddisplay", display);
        }
        i$$86 = i$$86 + 1;
        v1186 = i$$86 < l$$23;
      }
      var j$$5 = 0;
      var k$$2 = this.length;
      var v1188 = j$$5 < k$$2;
      for (;v1188;) {
        introspect(JAM.policy.p3) {
          var v3010 = this[j$$5]
        }
        var v1187 = v3010.style;
        introspect(JAM.policy.p3) {
          var v4127 = this[j$$5]
        }
        var v3011 = jQuery$$1.data(v4127, "olddisplay");
        var v4128 = !v3011;
        if (v4128) {
          v3011 = "";
        }
        v1187.display = v3011;
        j$$5 = j$$5 + 1;
        v1188 = j$$5 < k$$2;
      }
      return this;
    }
    return;
  }
  function v315(a$$6, traditional) {
    function v314() {
      var v1190 = this.name;
      var v1191 = this.value;
      add(v1190, v1191);
      return;
    }
    function buildParams(prefix$$3, obj$$21) {
      function v313(k$$1, v$$1) {
        var v4129 = prefix$$3 + "[";
        var v3012 = v4129 + k$$1;
        var v1192 = v3012 + "]";
        buildParams(v1192, v$$1);
        return;
      }
      function v312(i$$85, v) {
        var v3013 = traditional;
        var v4130 = !v3013;
        if (v4130) {
          v3013 = /\[\]$/.test(prefix$$3);
        }
        var v1194 = v3013;
        if (v1194) {
          add(prefix$$3, v);
        } else {
          var v4131 = prefix$$3 + "[";
          var v4888;
          var v5489 = typeof v;
          var v5427 = v5489 === "object";
          var v5490 = !v5427;
          if (v5490) {
            v5427 = jQuery$$1.isArray(v);
          }
          var v5248 = v5427;
          if (v5248) {
            v4888 = i$$85;
          } else {
            v4888 = "";
          }
          var v4132 = v4888;
          var v3014 = v4131 + v4132;
          var v1193 = v3014 + "]";
          buildParams(v1193, v);
        }
        return;
      }
      var v1196 = jQuery$$1.isArray(obj$$21);
      if (v1196) {
        jQuery$$1.each(obj$$21, v312);
      } else {
        var v4133 = !traditional;
        if (v4133) {
          v4133 = obj$$21 != null;
        }
        var v3015 = v4133;
        if (v3015) {
          var v4134 = typeof obj$$21;
          v3015 = v4134 === "object";
        }
        var v1195 = v3015;
        if (v1195) {
          jQuery$$1.each(obj$$21, v313);
        } else {
          add(prefix$$3, obj$$21);
        }
      }
      return;
    }
    function add(key$$20, value$$44) {
      var v1197;
      var v3016 = jQuery$$1.isFunction(value$$44);
      if (v3016) {
        v1197 = value$$44();
      } else {
        v1197 = value$$44;
      }
      value$$44 = v1197;
      var v1198 = s$$5;
      var v1199 = s$$5.length;
      var v4135 = encodeURIComponent(key$$20);
      var v3017 = v4135 + "=";
      var v3018 = encodeURIComponent(value$$44);
      introspect(JAM.policy.p2) {
        v1198[v1199] = v3017 + v3018;
      }
      return;
    }
    var s$$5 = [];
    var v1201 = traditional === undefined$$1;
    if (v1201) {
      var v1200 = jQuery$$1.ajaxSettings;
      traditional = v1200.traditional;
    }
    var v3019 = jQuery$$1.isArray(a$$6);
    var v4136 = !v3019;
    if (v4136) {
      v3019 = a$$6.jquery;
    }
    var v1203 = v3019;
    if (v1203) {
      jQuery$$1.each(a$$6, v314);
    } else {
      var prefix$$2;
      for (prefix$$2 in a$$6) {
        introspect(JAM.policy.p3) {
          var v1202 = a$$6[prefix$$2]
        }
        buildParams(prefix$$2, v1202);
      }
    }
    var v1204 = s$$5.join("&");
    return v1204.replace(r20, "+");
  }
  function v311(xhr$$4, type$$64, s$$4) {
    var v1205 = xhr$$4.getResponseHeader("content-type");
    var v3020 = !v1205;
    if (v3020) {
      v1205 = "";
    }
    var ct = v1205;
    var v1206 = type$$64 === "xml";
    var v3022 = !v1206;
    if (v3022) {
      var v3021 = !type$$64;
      if (v3021) {
        var v4137 = ct.indexOf("xml");
        v3021 = v4137 >= 0;
      }
      v1206 = v3021;
    }
    var xml = v1206;
    var v1207;
    if (xml) {
      v1207 = xhr$$4.responseXML;
    } else {
      v1207 = xhr$$4.responseText;
    }
    var data$$43 = v1207;
    var v3023 = xml;
    if (v3023) {
      var v4889 = data$$43.documentElement;
      var v4138 = v4889.nodeName;
      v3023 = v4138 === "parsererror";
    }
    var v1208 = v3023;
    if (v1208) {
      jQuery$$1.error("parsererror");
    }
    var v3024 = s$$4;
    if (v3024) {
      v3024 = s$$4.dataFilter;
    }
    var v1209 = v3024;
    if (v1209) {
      data$$43 = s$$4.dataFilter(data$$43, type$$64);
    }
    var v3025 = typeof data$$43;
    var v1212 = v3025 === "string";
    if (v1212) {
      var v3026 = type$$64 === "json";
      var v4140 = !v3026;
      if (v4140) {
        var v4139 = !type$$64;
        if (v4139) {
          var v4890 = ct.indexOf("json");
          v4139 = v4890 >= 0;
        }
        v3026 = v4139;
      }
      var v1211 = v3026;
      if (v1211) {
        data$$43 = jQuery$$1.parseJSON(data$$43);
      } else {
        var v3027 = type$$64 === "script";
        var v4142 = !v3027;
        if (v4142) {
          var v4141 = !type$$64;
          if (v4141) {
            var v4891 = ct.indexOf("javascript");
            v4141 = v4891 >= 0;
          }
          v3027 = v4141;
        }
        var v1210 = v3027;
        if (v1210) {
          jQuery$$1.globalEval(data$$43);
        }
      }
    }
    return data$$43;
  }
  function v310(xhr$$3, url$$7) {
    var lastModified = xhr$$3.getResponseHeader("Last-Modified");
    var etag = xhr$$3.getResponseHeader("Etag");
    if (lastModified) {
      var v1213 = jQuery$$1.lastModified;
      introspect(JAM.policy.p2) {
        v1213[url$$7] = lastModified;
      }
    }
    if (etag) {
      var v1214 = jQuery$$1.etag;
      introspect(JAM.policy.p2) {
        v1214[url$$7] = etag;
      }
    }
    var v3028 = xhr$$3.status;
    var v1215 = v3028 === 304;
    var v3030 = !v1215;
    if (v3030) {
      var v3029 = xhr$$3.status;
      v1215 = v3029 === 0;
    }
    return v1215;
  }
  function v309(xhr$$2) {
    try {
      var v5428 = xhr$$2.status;
      var v5249 = !v5428;
      if (v5249) {
        var v5429 = location.protocol;
        v5249 = v5429 === "file:";
      }
      var v4892 = v5249;
      var v5251 = !v4892;
      if (v5251) {
        var v5430 = xhr$$2.status;
        var v5250 = v5430 >= 200;
        if (v5250) {
          var v5431 = xhr$$2.status;
          v5250 = v5431 < 300;
        }
        v4892 = v5250;
      }
      var v4143 = v4892;
      var v4894 = !v4143;
      if (v4894) {
        var v4893 = xhr$$2.status;
        v4143 = v4893 === 304;
      }
      var v3031 = v4143;
      var v4145 = !v3031;
      if (v4145) {
        var v4144 = xhr$$2.status;
        v3031 = v4144 === 1223;
      }
      var v1216 = v3031;
      var v3033 = !v1216;
      if (v3033) {
        var v3032 = xhr$$2.status;
        v1216 = v3032 === 0;
      }
      return v1216;
    } catch (e$$29) {
    }
    return false;
  }
  function v308(s$$3, xhr$$1, status$$2, e$$28) {
    var v1219 = s$$3.error;
    if (v1219) {
      var v1217 = s$$3.error;
      var v3034 = s$$3.context;
      var v4146 = !v3034;
      if (v4146) {
        v3034 = s$$3;
      }
      var v1218 = v3034;
      v1217.call(v1218, xhr$$1, status$$2, e$$28);
    }
    var v1222 = s$$3.global;
    if (v1222) {
      var v3035;
      var v4148 = s$$3.context;
      if (v4148) {
        var v4147 = s$$3.context;
        v3035 = jQuery$$1(v4147);
      } else {
        v3035 = jQuery$$1.event;
      }
      var v1220 = v3035;
      var v1221 = [xhr$$1, s$$3, e$$28];
      v1220.trigger("ajaxError", v1221);
    }
    return;
  }
  function v307(origSettings) {
    function v306() {
      var v3036 = xhr;
      if (v3036) {
        v3036 = !requestDone;
      }
      var v1223 = v3036;
      if (v1223) {
        onreadystatechange("timeout");
      }
      return;
    }
    function v305() {
      if (xhr) {
        oldAbort.call(xhr);
      }
      onreadystatechange("abort");
      return;
    }
    function v304(isTimeout) {
      var v4149 = !xhr;
      var v4896 = !v4149;
      if (v4896) {
        var v4895 = xhr.readyState;
        v4149 = v4895 === 0;
      }
      var v3037 = v4149;
      var v4150 = !v3037;
      if (v4150) {
        v3037 = isTimeout === "abort";
      }
      var v1233 = v3037;
      if (v1233) {
        var v1224 = !requestDone;
        if (v1224) {
          complete();
        }
        requestDone = true;
        if (xhr) {
          xhr.onreadystatechange = jQuery$$1.noop;
        }
      } else {
        var v4151 = !requestDone;
        if (v4151) {
          v4151 = xhr;
        }
        var v3038 = v4151;
        if (v3038) {
          var v4897 = xhr.readyState;
          var v4152 = v4897 === 4;
          var v4898 = !v4152;
          if (v4898) {
            v4152 = isTimeout === "timeout";
          }
          v3038 = v4152;
        }
        var v1232 = v3038;
        if (v1232) {
          requestDone = true;
          xhr.onreadystatechange = jQuery$$1.noop;
          var v1225;
          var v3040 = isTimeout === "timeout";
          if (v3040) {
            v1225 = "timeout";
          } else {
            var v3039;
            var v4899 = jQuery$$1.httpSuccess(xhr);
            var v4154 = !v4899;
            if (v4154) {
              v3039 = "error";
            } else {
              var v4153;
              var v5252 = s$$2.ifModified;
              if (v5252) {
                var v5432 = s$$2.url;
                v5252 = jQuery$$1.httpNotModified(xhr, v5432);
              }
              var v4900 = v5252;
              if (v4900) {
                v4153 = "notmodified";
              } else {
                v4153 = "success";
              }
              v3039 = v4153;
            }
            v1225 = v3039;
          }
          status$$1 = v1225;
          var errMsg;
          var v1227 = status$$1 === "success";
          if (v1227) {
            try {
              var v1226 = s$$2.dataType;
              data$$42 = jQuery$$1.httpData(xhr, v1226, s$$2);
            } catch (err) {
              status$$1 = "parsererror";
              errMsg = err;
            }
          }
          var v3041 = status$$1 === "success";
          var v4155 = !v3041;
          if (v4155) {
            v3041 = status$$1 === "notmodified";
          }
          var v1229 = v3041;
          if (v1229) {
            var v1228 = !jsonp;
            if (v1228) {
              success();
            }
          } else {
            jQuery$$1.handleError(s$$2, xhr, status$$1, errMsg);
          }
          complete();
          var v1230 = isTimeout === "timeout";
          if (v1230) {
            xhr.abort();
          }
          var v1231 = s$$2.async;
          if (v1231) {
            xhr = null;
          }
        }
      }
      return;
    }
    function v303() {
      var v3042 = !done$$1;
      if (v3042) {
        var v5253 = this.readyState;
        var v4901 = !v5253;
        var v5255 = !v4901;
        if (v5255) {
          var v5254 = this.readyState;
          v4901 = v5254 === "loaded";
        }
        var v4156 = v4901;
        var v4903 = !v4156;
        if (v4903) {
          var v4902 = this.readyState;
          v4156 = v4902 === "complete";
        }
        v3042 = v4156;
      }
      var v1235 = v3042;
      if (v1235) {
        done$$1 = true;
        success();
        complete();
        script$$2.onload = script$$2.onreadystatechange = null;
        var v3043 = head$$1;
        if (v3043) {
          v3043 = script$$2.parentNode;
        }
        var v1234 = v3043;
        if (v1234) {
          head$$1.removeChild(script$$2);
        }
      }
      return;
    }
    function v302(tmp$$1) {
      data$$42 = tmp$$1;
      success();
      complete();
      introspect(JAM.policy.p2) {
        window$$1[jsonp] = undefined$$1;
      }
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
      var v1237 = s$$2.success;
      if (v1237) {
        var v1236 = s$$2.success;
        v1236.call(callbackContext, data$$42, status$$1, xhr);
      }
      var v1239 = s$$2.global;
      if (v1239) {
        var v1238 = [xhr, s$$2];
        trigger$$1("ajaxSuccess", v1238);
      }
      return;
    }
    function complete() {
      var v1241 = s$$2.complete;
      if (v1241) {
        var v1240 = s$$2.complete;
        v1240.call(callbackContext, xhr, status$$1);
      }
      var v1243 = s$$2.global;
      if (v1243) {
        var v1242 = [xhr, s$$2];
        trigger$$1("ajaxComplete", v1242);
      }
      var v3044 = s$$2.global;
      if (v3044) {
        var v5256 = jQuery$$1.active;
        var v4157 = jQuery$$1.active = v5256 - 1;
        v3044 = !v4157;
      }
      var v1245 = v3044;
      if (v1245) {
        var v1244 = jQuery$$1.event;
        v1244.trigger("ajaxStop");
      }
      return;
    }
    function trigger$$1(type$$63, args$$7) {
      var v3045;
      var v4159 = s$$2.context;
      if (v4159) {
        var v4158 = s$$2.context;
        v3045 = jQuery$$1(v4158);
      } else {
        v3045 = jQuery$$1.event;
      }
      var v1246 = v3045;
      v1246.trigger(type$$63, args$$7);
      return;
    }
    var v1247 = jQuery$$1.ajaxSettings;
    var s$$2 = jQuery$$1.extend(true, {}, v1247, origSettings);
    var jsonp;
    var status$$1;
    var data$$42;
    var v3046 = origSettings;
    if (v3046) {
      v3046 = origSettings.context;
    }
    var v1248 = v3046;
    var v3047 = !v1248;
    if (v3047) {
      v1248 = s$$2;
    }
    var callbackContext = v1248;
    var v1249 = s$$2.type;
    var type$$62 = v1249.toUpperCase();
    var v4160 = s$$2.data;
    if (v4160) {
      v4160 = s$$2.processData;
    }
    var v3048 = v4160;
    if (v3048) {
      var v4904 = s$$2.data;
      var v4161 = typeof v4904;
      v3048 = v4161 !== "string";
    }
    var v1251 = v3048;
    if (v1251) {
      var v1250 = s$$2;
      var v3049 = s$$2.data;
      var v3050 = s$$2.traditional;
      var v5580 = jQuery$$1.param(v3049, v3050);
      v1250.data = v5580;
    }
    var v3051 = s$$2.dataType;
    var v1257 = v3051 === "jsonp";
    if (v1257) {
      var v1256 = type$$62 === "GET";
      if (v1256) {
        var v4162 = s$$2.url;
        var v3052 = jsre.test(v4162);
        var v1253 = !v3052;
        if (v1253) {
          var v1252 = s$$2;
          var v4163 = v1252.url;
          var v5433;
          var v5511 = s$$2.url;
          var v5491 = rquery.test(v5511);
          if (v5491) {
            v5433 = "&";
          } else {
            v5433 = "?";
          }
          var v5257 = v5433;
          var v5434 = s$$2.jsonp;
          var v5492 = !v5434;
          if (v5492) {
            v5434 = "callback";
          }
          var v5258 = v5434;
          var v4905 = v5257 + v5258;
          var v4164 = v4905 + "=?";
          v1252.url = v4163 + v4164;
        }
      } else {
        var v4165 = s$$2.data;
        var v3053 = !v4165;
        var v4167 = !v3053;
        if (v4167) {
          var v4906 = s$$2.data;
          var v4166 = jsre.test(v4906);
          v3053 = !v4166;
        }
        var v1255 = v3053;
        if (v1255) {
          var v4168;
          var v4908 = s$$2.data;
          if (v4908) {
            var v4907 = s$$2.data;
            v4168 = v4907 + "&";
          } else {
            v4168 = "";
          }
          var v3054 = v4168;
          var v4169 = s$$2.jsonp;
          var v4909 = !v4169;
          if (v4909) {
            v4169 = "callback";
          }
          var v3055 = v4169;
          var v1254 = v3054 + v3055;
          s$$2.data = v1254 + "=?";
        }
      }
      s$$2.dataType = "json";
    }
    var v4170 = s$$2.dataType;
    var v3056 = v4170 === "json";
    if (v3056) {
      var v4910 = s$$2.data;
      if (v4910) {
        var v5259 = s$$2.data;
        v4910 = jsre.test(v5259);
      }
      var v4171 = v4910;
      var v4912 = !v4171;
      if (v4912) {
        var v4911 = s$$2.url;
        v4171 = jsre.test(v4911);
      }
      v3056 = v4171;
    }
    var v1263 = v3056;
    if (v1263) {
      var v1258 = s$$2.jsonpCallback;
      var v3058 = !v1258;
      if (v3058) {
        var v3057 = jsc;
        jsc = jsc + 1;
        v1258 = "jsonp" + v3057;
      }
      jsonp = v1258;
      var v1260 = s$$2.data;
      if (v1260) {
        var v1259 = s$$2;
        var v4172 = s$$2.data;
        var v3059 = v4172 + "";
        var v4173 = "=" + jsonp;
        var v3060 = v4173 + "$1";
        var v5581 = v3059.replace(jsre, v3060);
        v1259.data = v5581;
      }
      var v1261 = s$$2;
      var v3061 = s$$2.url;
      var v4174 = "=" + jsonp;
      var v3062 = v4174 + "$1";
      var v5582 = v3061.replace(jsre, v3062);
      v1261.url = v5582;
      s$$2.dataType = "script";
      introspect(JAM.policy.p3) {
        var v1262 = window$$1[jsonp]
      }
      var v3063 = !v1262;
      if (v3063) {
        v1262 = v302;
      }
      introspect(JAM.policy.p2) {
        window$$1[jsonp] = v1262;
      }
    }
    var v4175 = s$$2.dataType;
    var v3064 = v4175 === "script";
    if (v3064) {
      var v4176 = s$$2.cache;
      v3064 = v4176 === null;
    }
    var v1264 = v3064;
    if (v1264) {
      s$$2.cache = false;
    }
    var v4177 = s$$2.cache;
    var v3065 = v4177 === false;
    if (v3065) {
      v3065 = type$$62 === "GET";
    }
    var v1268 = v3065;
    if (v1268) {
      var ts = now();
      var v1265 = s$$2.url;
      var v3066 = "$1_=" + ts;
      var v1266 = v3066 + "$2";
      var ret$$23 = v1265.replace(rts, v1266);
      var v1267 = s$$2;
      var v3067 = ret$$23;
      var v4178;
      var v5260 = s$$2.url;
      var v4914 = ret$$23 === v5260;
      if (v4914) {
        var v5435;
        var v5512 = s$$2.url;
        var v5493 = rquery.test(v5512);
        if (v5493) {
          v5435 = "&";
        } else {
          v5435 = "?";
        }
        var v5261 = v5435;
        var v4913 = v5261 + "_=";
        v4178 = v4913 + ts;
      } else {
        v4178 = "";
      }
      var v3068 = v4178;
      v1267.url = v3067 + v3068;
    }
    var v3069 = s$$2.data;
    if (v3069) {
      v3069 = type$$62 === "GET";
    }
    var v1270 = v3069;
    if (v1270) {
      var v1269 = s$$2;
      var v4179 = v1269.url;
      var v5262;
      var v5494 = s$$2.url;
      var v5436 = rquery.test(v5494);
      if (v5436) {
        v5262 = "&";
      } else {
        v5262 = "?";
      }
      var v4915 = v5262;
      var v4916 = s$$2.data;
      var v4180 = v4915 + v4916;
      v1269.url = v4179 + v4180;
    }
    var v3070 = s$$2.global;
    if (v3070) {
      var v4181 = jQuery$$1.active;
      var v5263 = jQuery$$1.active;
      jQuery$$1.active = v5263 + 1;
      v3070 = !v4181;
    }
    var v1272 = v3070;
    if (v1272) {
      var v1271 = jQuery$$1.event;
      v1271.trigger("ajaxStart");
    }
    var v1273 = s$$2.url;
    var parts$$2 = rurl.exec(v1273);
    var v1274 = parts$$2;
    if (v1274) {
      var v4182 = parts$$2[1];
      if (v4182) {
        var v4917 = parts$$2[1];
        var v4918 = location.protocol;
        v4182 = v4917 !== v4918;
      }
      var v3071 = v4182;
      var v4185 = !v3071;
      if (v4185) {
        var v4183 = parts$$2[2];
        var v4184 = location.host;
        v3071 = v4183 !== v4184;
      }
      v1274 = v3071;
    }
    var remote = v1274;
    var v4919 = s$$2.dataType;
    var v4186 = v4919 === "script";
    if (v4186) {
      v4186 = type$$62 === "GET";
    }
    var v3072 = v4186;
    if (v3072) {
      v3072 = remote;
    }
    var v1279 = v3072;
    if (v1279) {
      var v3073 = document$$1.getElementsByTagName("head");
      var v1275 = v3073[0];
      var v3074 = !v1275;
      if (v3074) {
        v1275 = document$$1.documentElement;
      }
      var head$$1 = v1275;
      var script$$2 = document$$1.createElement("script");
      introspect(JAM.policy.p1) {
        script$$2.src = s$$2.url;
      }
      var v1276 = s$$2.scriptCharset;
      if (v1276) {
        script$$2.charset = s$$2.scriptCharset;
      }
      var v1277 = !jsonp;
      if (v1277) {
        var done$$1 = false;
        script$$2.onload = script$$2.onreadystatechange = v303;
      }
      var v1278 = head$$1.firstChild;
      head$$1.insertBefore(script$$2, v1278);
      return undefined$$1;
    }
    var requestDone = false;
    var xhr = s$$2.xhr();
    var v1280 = !xhr;
    if (v1280) {
      return;
    }
    var v1287 = s$$2.username;
    if (v1287) {
      var v1281 = s$$2.url;
      var v1282 = s$$2.async;
      var v1283 = s$$2.username;
      var v1284 = s$$2.password;
      xhr.open(type$$62, v1281, v1282, v1283, v1284);
    } else {
      var v1285 = s$$2.url;
      var v1286 = s$$2.async;
      xhr.open(type$$62, v1285, v1286);
    }
    try {
      var v3075 = s$$2.data;
      var v4188 = !v3075;
      if (v4188) {
        var v4187 = origSettings;
        if (v4187) {
          v4187 = origSettings.contentType;
        }
        v3075 = v4187;
      }
      var v1289 = v3075;
      if (v1289) {
        var v1288 = s$$2.contentType;
        xhr.setRequestHeader("Content-Type", v1288);
      }
      var v1294 = s$$2.ifModified;
      if (v1294) {
        var v3076 = jQuery$$1.lastModified;
        var v3077 = s$$2.url;
        introspect(JAM.policy.p3) {
          var v1291 = v3076[v3077]
        }
        if (v1291) {
          var v3078 = jQuery$$1.lastModified;
          var v3079 = s$$2.url;
          introspect(JAM.policy.p3) {
            var v1290 = v3078[v3079]
          }
          xhr.setRequestHeader("If-Modified-Since", v1290);
        }
        var v3080 = jQuery$$1.etag;
        var v3081 = s$$2.url;
        introspect(JAM.policy.p3) {
          var v1293 = v3080[v3081]
        }
        if (v1293) {
          var v3082 = jQuery$$1.etag;
          var v3083 = s$$2.url;
          introspect(JAM.policy.p3) {
            var v1292 = v3082[v3083]
          }
          xhr.setRequestHeader("If-None-Match", v1292);
        }
      }
      var v1295 = !remote;
      if (v1295) {
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      }
      var v3084;
      var v4920 = s$$2.dataType;
      if (v4920) {
        var v5264 = s$$2.accepts;
        var v5265 = s$$2.dataType;
        introspect(JAM.policy.p3) {
          v4920 = v5264[v5265];
        }
      }
      var v4191 = v4920;
      if (v4191) {
        var v4921 = s$$2.accepts;
        var v4922 = s$$2.dataType;
        introspect(JAM.policy.p3) {
          var v4189 = v4921[v4922]
        }
        v3084 = v4189 + ", */*";
      } else {
        var v4190 = s$$2.accepts;
        v3084 = v4190._default;
      }
      var v1296 = v3084;
      xhr.setRequestHeader("Accept", v1296);
    } catch (e$$25) {
    }
    var v3085 = s$$2.beforeSend;
    if (v3085) {
      var v4923 = s$$2.beforeSend;
      var v4192 = v4923.call(callbackContext, xhr, s$$2);
      v3085 = v4192 === false;
    }
    var v1299 = v3085;
    if (v1299) {
      var v3086 = s$$2.global;
      if (v3086) {
        var v5266 = jQuery$$1.active;
        var v4193 = jQuery$$1.active = v5266 - 1;
        v3086 = !v4193;
      }
      var v1298 = v3086;
      if (v1298) {
        var v1297 = jQuery$$1.event;
        v1297.trigger("ajaxStop");
      }
      xhr.abort();
      return false;
    }
    var v1301 = s$$2.global;
    if (v1301) {
      var v1300 = [xhr, s$$2];
      trigger$$1("ajaxSend", v1300);
    }
    var onreadystatechange = xhr.onreadystatechange = v304;
    try {
      var oldAbort = xhr.abort;
      xhr.abort = v305;
    } catch (e$$26) {
    }
    var v3087 = s$$2.async;
    if (v3087) {
      var v4194 = s$$2.timeout;
      v3087 = v4194 > 0;
    }
    var v1303 = v3087;
    if (v1303) {
      var v1302 = s$$2.timeout;
      setTimeout(v306, v1302);
    }
    try {
      var v3088;
      var v5267 = type$$62 === "POST";
      var v5437 = !v5267;
      if (v5437) {
        v5267 = type$$62 === "PUT";
      }
      var v4924 = v5267;
      var v5268 = !v4924;
      if (v5268) {
        v4924 = type$$62 === "DELETE";
      }
      var v4195 = v4924;
      if (v4195) {
        v3088 = s$$2.data;
      } else {
        v3088 = null;
      }
      var v1304 = v3088;
      xhr.send(v1304);
    } catch (e$$27) {
      jQuery$$1.handleError(s$$2, xhr, null, e$$27);
      complete();
    }
    var v3089 = s$$2.async;
    var v1305 = !v3089;
    if (v1305) {
      onreadystatechange();
    }
    return xhr;
  }
  function v301() {
    try {
      var v1306 = window$$1.ActiveXObject;
      return new v1306("Microsoft.XMLHTTP");
    } catch (e$$23) {
    }
    return;
  }
  function v300() {
    var v1307 = window$$1.XMLHttpRequest;
    return new v1307;
  }
  function v299(settings) {
    var v1308 = jQuery$$1.ajaxSettings;
    jQuery$$1.extend(v1308, settings);
    return;
  }
  function v298(url$$6, data$$41, callback$$36, type$$61) {
    var v1309 = jQuery$$1.isFunction(data$$41);
    if (v1309) {
      type$$61 = type$$61 || callback$$36;
      callback$$36 = data$$41;
      data$$41 = {};
    }
    var v1310 = {type:"POST", url:url$$6, data:data$$41, success:callback$$36, dataType:type$$61};
    return jQuery$$1.ajax(v1310);
  }
  function v297(url$$5, data$$40, callback$$35) {
    return jQuery$$1.get(url$$5, data$$40, callback$$35, "json");
  }
  function v296(url$$4, callback$$34) {
    return jQuery$$1.get(url$$4, null, callback$$34, "script");
  }
  function v295(url$$3, data$$39, callback$$33, type$$60) {
    var v1311 = jQuery$$1.isFunction(data$$39);
    if (v1311) {
      type$$60 = type$$60 || callback$$33;
      callback$$33 = data$$39;
      data$$39 = null;
    }
    var v1312 = {type:"GET", url:url$$3, data:data$$39, success:callback$$33, dataType:type$$60};
    return jQuery$$1.ajax(v1312);
  }
  function v294(i$$84, o) {
    function v293(f) {
      return this.bind(o, f);
    }
    var v1313 = jQuery$$1.fn;
    introspect(JAM.policy.p2) {
      v1313[o] = v293;
    }
    return;
  }
  function v292() {
    function v291(i$$82, elem$$113) {
      function v290(val$$5, i$$83) {
        var v1314 = elem$$113.name;
        return{name:v1314, value:val$$5};
      }
      var v1315 = jQuery$$1(this);
      var val$$4 = v1315.val();
      var v1316;
      var v3091 = val$$4 == null;
      if (v3091) {
        v1316 = null;
      } else {
        var v3090;
        var v4197 = jQuery$$1.isArray(val$$4);
        if (v4197) {
          v3090 = jQuery$$1.map(val$$4, v290);
        } else {
          var v4196 = elem$$113.name;
          v3090 = {name:v4196, value:val$$4};
        }
        v1316 = v3090;
      }
      return v1316;
    }
    function v289() {
      var v3092 = this.name;
      if (v3092) {
        var v4198 = this.disabled;
        v3092 = !v4198;
      }
      var v1317 = v3092;
      if (v1317) {
        var v4199 = this.checked;
        var v4926 = !v4199;
        if (v4926) {
          var v4925 = this.nodeName;
          v4199 = rselectTextarea.test(v4925);
        }
        var v3093 = v4199;
        var v4201 = !v3093;
        if (v4201) {
          var v4200 = this.type;
          v3093 = rinput.test(v4200);
        }
        v1317 = v3093;
      }
      return v1317;
    }
    function v288() {
      var v1318;
      var v3095 = this.elements;
      if (v3095) {
        var v3094 = this.elements;
        v1318 = jQuery$$1.makeArray(v3094);
      } else {
        v1318 = this;
      }
      return v1318;
    }
    var v4202 = this.map(v288);
    var v3096 = v4202.filter(v289);
    var v1319 = v3096.map(v291);
    return v1319.get();
  }
  function v287() {
    var v1320 = this.serializeArray();
    return jQuery$$1.param(v1320);
  }
  function v286(url$$2, params, callback$$32) {
    function v285(res, status) {
      var v3097 = status === "success";
      var v4203 = !v3097;
      if (v4203) {
        v3097 = status === "notmodified";
      }
      var v1322 = v3097;
      if (v1322) {
        var v3098;
        if (selector$$20) {
          var v4927 = jQuery$$1("<div />");
          var v5269 = res.responseText;
          var v4928 = v5269.replace(rscript, "");
          var v4204 = v4927.append(v4928);
          v3098 = v4204.find(selector$$20);
        } else {
          v3098 = res.responseText;
        }
        var v1321 = v3098;
        self$$11.html(v1321);
      }
      if (callback$$32) {
        var v3099 = res.responseText;
        var v1323 = [v3099, status, res];
        self$$11.each(callback$$32, v1323);
      }
      return;
    }
    var v3100 = typeof url$$2;
    var v1325 = v3100 !== "string";
    if (v1325) {
      return _load.call(this, url$$2);
    } else {
      var v3101 = this.length;
      var v1324 = !v3101;
      if (v1324) {
        return this;
      }
    }
    var off = url$$2.indexOf(" ");
    var v1327 = off >= 0;
    if (v1327) {
      var v1326 = url$$2.length;
      var selector$$20 = url$$2.slice(off, v1326);
      url$$2 = url$$2.slice(0, off);
    }
    var type$$59 = "GET";
    if (params) {
      var v1330 = jQuery$$1.isFunction(params);
      if (v1330) {
        callback$$32 = params;
        params = null;
      } else {
        var v3102 = typeof params;
        var v1329 = v3102 === "object";
        if (v1329) {
          var v3103 = jQuery$$1.ajaxSettings;
          var v1328 = v3103.traditional;
          params = jQuery$$1.param(params, v1328);
          type$$59 = "POST";
        }
      }
    }
    var self$$11 = this;
    var v1331 = {url:url$$2, type:type$$59, dataType:"html", data:params, complete:v285};
    jQuery$$1.ajax(v1331);
    return this;
  }
  function v284(elem$$112) {
    var v4205 = jQuery$$1.expr;
    var v3104 = v4205.filters;
    var v1332 = v3104.hidden(elem$$112);
    return!v1332;
  }
  function v283(elem$$111) {
    var width$$9 = elem$$111.offsetWidth;
    var height$$8 = elem$$111.offsetHeight;
    var v3105 = elem$$111.nodeName;
    var v1333 = v3105.toLowerCase();
    var skip = v1333 === "tr";
    var v1334;
    var v4929 = width$$9 === 0;
    if (v4929) {
      v4929 = height$$8 === 0;
    }
    var v4206 = v4929;
    if (v4206) {
      v4206 = !skip;
    }
    var v3107 = v4206;
    if (v3107) {
      v1334 = true;
    } else {
      var v3106;
      var v5270 = width$$9 > 0;
      if (v5270) {
        v5270 = height$$8 > 0;
      }
      var v4930 = v5270;
      if (v4930) {
        v4930 = !skip;
      }
      var v4208 = v4930;
      if (v4208) {
        v3106 = false;
      } else {
        var v4207 = jQuery$$1.curCSS(elem$$111, "display");
        v3106 = v4207 === "none";
      }
      v1334 = v3106;
    }
    return v1334;
  }
  function v282(elem$$110, options$$3, callback$$31) {
    var old$$4 = {};
    var name$$54;
    for (name$$54 in options$$3) {
      var v1335 = elem$$110.style;
      introspect(JAM.policy.p4) {
        old$$4[name$$54] = v1335[name$$54];
      }
      var v1336 = elem$$110.style;
      introspect(JAM.policy.p4) {
        v1336[name$$54] = options$$3[name$$54];
      }
    }
    callback$$31.call(elem$$110);
    for (name$$54 in options$$3) {
      var v1337 = elem$$110.style;
      introspect(JAM.policy.p4) {
        v1337[name$$54] = old$$4[name$$54];
      }
    }
    return;
  }
  function v281(elem$$109, name$$53, force$$1) {
    var ret$$22;
    var style$$1 = elem$$109.style;
    var filter$$4;
    var v5271 = jQuery$$1.support;
    var v4931 = v5271.opacity;
    var v4209 = !v4931;
    if (v4209) {
      v4209 = name$$53 === "opacity";
    }
    var v3108 = v4209;
    if (v3108) {
      v3108 = elem$$109.currentStyle;
    }
    var v1340 = v3108;
    if (v1340) {
      var v1338;
      var v5272 = elem$$109.currentStyle;
      var v4932 = v5272.filter;
      var v5273 = !v4932;
      if (v5273) {
        v4932 = "";
      }
      var v4210 = v4932;
      var v3110 = ropacity.test(v4210);
      if (v3110) {
        var v4933 = RegExp.$1;
        var v4211 = parseFloat(v4933);
        var v3109 = v4211 / 100;
        v1338 = v3109 + "";
      } else {
        v1338 = "";
      }
      ret$$22 = v1338;
      var v1339;
      var v3111 = ret$$22 === "";
      if (v3111) {
        v1339 = "1";
      } else {
        v1339 = ret$$22;
      }
      return v1339;
    }
    var v1341 = rfloat.test(name$$53);
    if (v1341) {
      name$$53 = styleFloat;
    }
    var v4212 = !force$$1;
    if (v4212) {
      v4212 = style$$1;
    }
    var v3112 = v4212;
    if (v3112) {
      introspect(JAM.policy.p3) {
        v3112 = style$$1[name$$53];
      }
    }
    var v1355 = v3112;
    if (v1355) {
      introspect(JAM.policy.p3) {
        ret$$22 = style$$1[name$$53];
      }
    } else {
      if (getComputedStyle) {
        var v1342 = rfloat.test(name$$53);
        if (v1342) {
          name$$53 = "float";
        }
        var v1343 = name$$53.replace(rupper, "-$1");
        name$$53 = v1343.toLowerCase();
        var v1344 = elem$$109.ownerDocument;
        var defaultView = v1344.defaultView;
        var v1345 = !defaultView;
        if (v1345) {
          return null;
        }
        var computedStyle = defaultView.getComputedStyle(elem$$109, null);
        if (computedStyle) {
          ret$$22 = computedStyle.getPropertyValue(name$$53);
        }
        var v3113 = name$$53 === "opacity";
        if (v3113) {
          v3113 = ret$$22 === "";
        }
        var v1346 = v3113;
        if (v1346) {
          ret$$22 = "1";
        }
      } else {
        var v1354 = elem$$109.currentStyle;
        if (v1354) {
          var camelCase = name$$53.replace(rdashAlpha, fcamelCase);
          var v3114 = elem$$109.currentStyle;
          introspect(JAM.policy.p3) {
            var v1347 = v3114[name$$53]
          }
          var v3116 = !v1347;
          if (v3116) {
            var v3115 = elem$$109.currentStyle;
            introspect(JAM.policy.p3) {
              v1347 = v3115[camelCase];
            }
          }
          ret$$22 = v1347;
          var v4213 = rnumpx.test(ret$$22);
          var v3117 = !v4213;
          if (v3117) {
            v3117 = rnum.test(ret$$22);
          }
          var v1353 = v3117;
          if (v1353) {
            var left$$3 = style$$1.left;
            var v1348 = elem$$109.runtimeStyle;
            var rsLeft = v1348.left;
            var v1349 = elem$$109.runtimeStyle;
            var v3118 = elem$$109.currentStyle;
            v1349.left = v3118.left;
            var v1350;
            var v3119 = camelCase === "fontSize";
            if (v3119) {
              v1350 = "1em";
            } else {
              v1350 = ret$$22 || 0;
            }
            style$$1.left = v1350;
            var v1351 = style$$1.pixelLeft;
            ret$$22 = v1351 + "px";
            style$$1.left = left$$3;
            var v1352 = elem$$109.runtimeStyle;
            v1352.left = rsLeft;
          }
        }
      }
    }
    return ret$$22;
  }
  function v280(elem$$108, name$$52, force, extra$$2) {
    function v279() {
      function v278() {
        var v1356 = !extra$$2;
        if (v1356) {
          var v3120 = val$$3;
          var v5274 = "padding" + this;
          var v4934 = jQuery$$1.curCSS(elem$$108, v5274, true);
          var v4214 = parseFloat(v4934);
          var v4935 = !v4214;
          if (v4935) {
            v4214 = 0;
          }
          var v3121 = v4214;
          val$$3 = v3120 - v3121;
        }
        var v1357 = extra$$2 === "margin";
        if (v1357) {
          var v3122 = val$$3;
          var v5275 = "margin" + this;
          var v4936 = jQuery$$1.curCSS(elem$$108, v5275, true);
          var v4215 = parseFloat(v4936);
          var v4937 = !v4215;
          if (v4937) {
            v4215 = 0;
          }
          var v3123 = v4215;
          val$$3 = v3122 + v3123;
        } else {
          var v3124 = val$$3;
          var v5438 = "border" + this;
          var v5276 = v5438 + "Width";
          var v4938 = jQuery$$1.curCSS(elem$$108, v5276, true);
          var v4216 = parseFloat(v4938);
          var v4939 = !v4216;
          if (v4939) {
            v4216 = 0;
          }
          var v3125 = v4216;
          val$$3 = v3124 - v3125;
        }
        return;
      }
      var v1358;
      var v3126 = name$$52 === "width";
      if (v3126) {
        v1358 = elem$$108.offsetWidth;
      } else {
        v1358 = elem$$108.offsetHeight;
      }
      val$$3 = v1358;
      var v1359 = extra$$2 === "border";
      if (v1359) {
        return;
      }
      jQuery$$1.each(which, v278);
      return;
    }
    var v3127 = name$$52 === "width";
    var v4217 = !v3127;
    if (v4217) {
      v3127 = name$$52 === "height";
    }
    var v1363 = v3127;
    if (v1363) {
      var getWH = v279;
      var val$$3;
      var props$$1 = cssShow;
      var v1360;
      var v3128 = name$$52 === "width";
      if (v3128) {
        v1360 = cssWidth;
      } else {
        v1360 = cssHeight;
      }
      var which = v1360;
      var v3129 = elem$$108.offsetWidth;
      var v1361 = v3129 !== 0;
      if (v1361) {
        getWH();
      } else {
        jQuery$$1.swap(elem$$108, props$$1, getWH);
      }
      var v1362 = Math.round(val$$3);
      return Math.max(0, v1362);
    }
    return jQuery$$1.curCSS(elem$$108, name$$52, force);
  }
  function v277(elem$$107, name$$51, value$$43) {
    var v4218 = !elem$$107;
    var v4941 = !v4218;
    if (v4941) {
      var v4940 = elem$$107.nodeType;
      v4218 = v4940 === 3;
    }
    var v3130 = v4218;
    var v4220 = !v3130;
    if (v4220) {
      var v4219 = elem$$107.nodeType;
      v3130 = v4219 === 8;
    }
    var v1364 = v3130;
    if (v1364) {
      return undefined$$1;
    }
    var v4221 = name$$51 === "width";
    var v4942 = !v4221;
    if (v4942) {
      v4221 = name$$51 === "height";
    }
    var v3131 = v4221;
    if (v3131) {
      var v4222 = parseFloat(value$$43);
      v3131 = v4222 < 0;
    }
    var v1365 = v3131;
    if (v1365) {
      value$$43 = undefined$$1;
    }
    var v1366 = elem$$107.style;
    var v3132 = !v1366;
    if (v3132) {
      v1366 = elem$$107;
    }
    var style = v1366;
    var set$$8 = value$$43 !== undefined$$1;
    var v4943 = jQuery$$1.support;
    var v4223 = v4943.opacity;
    var v3133 = !v4223;
    if (v3133) {
      v3133 = name$$51 === "opacity";
    }
    var v1371 = v3133;
    if (v1371) {
      if (set$$8) {
        style.zoom = 1;
        var v1367;
        var v4944 = parseInt(value$$43, 10);
        var v4224 = v4944 + "";
        var v3135 = v4224 === "NaN";
        if (v3135) {
          v1367 = "";
        } else {
          var v4225 = value$$43 * 100;
          var v3134 = "alpha(opacity=" + v4225;
          v1367 = v3134 + ")";
        }
        var opacity = v1367;
        var v3136 = style.filter;
        var v4226 = !v3136;
        if (v4226) {
          v3136 = jQuery$$1.curCSS(elem$$107, "filter");
        }
        var v1368 = v3136;
        var v3137 = !v1368;
        if (v3137) {
          v1368 = "";
        }
        var filter$$3 = v1368;
        var v1369 = style;
        var v3138;
        var v4227 = ralpha.test(filter$$3);
        if (v4227) {
          v3138 = filter$$3.replace(ralpha, opacity);
        } else {
          v3138 = opacity;
        }
        v1369.filter = v3138;
      }
      var v1370;
      var v4228 = style.filter;
      if (v4228) {
        var v5277 = style.filter;
        var v4945 = v5277.indexOf("opacity=");
        v4228 = v4945 >= 0;
      }
      var v3140 = v4228;
      if (v3140) {
        var v5439 = style.filter;
        var v5278 = ropacity.exec(v5439);
        var v4946 = v5278[1];
        var v4229 = parseFloat(v4946);
        var v3139 = v4229 / 100;
        v1370 = v3139 + "";
      } else {
        v1370 = "";
      }
      return v1370;
    }
    var v1372 = rfloat.test(name$$51);
    if (v1372) {
      name$$51 = styleFloat;
    }
    name$$51 = name$$51.replace(rdashAlpha, fcamelCase);
    if (set$$8) {
      introspect(JAM.policy.p2) {
        style[name$$51] = value$$43;
      }
    }
    introspect(JAM.policy.p3) {
      return style[name$$51];
    }
  }
  function v276(name$$49, value$$41) {
    function v275(elem$$106, name$$50, value$$42) {
      var v1373 = value$$42 === undefined$$1;
      if (v1373) {
        return jQuery$$1.curCSS(elem$$106, name$$50);
      }
      var v4230 = typeof value$$42;
      var v3141 = v4230 === "number";
      if (v3141) {
        var v4231 = rexclude.test(name$$50);
        v3141 = !v4231;
      }
      var v1374 = v3141;
      if (v1374) {
        value$$42 = value$$42 + "px";
      }
      jQuery$$1.style(elem$$106, name$$50, value$$42);
      return;
    }
    return access(this, name$$49, value$$41, true, v275);
  }
  function v274(elems$$9) {
    var data$$38;
    var id$$5;
    var cache$$2 = jQuery$$1.cache;
    var v1375 = jQuery$$1.event;
    var special$$4 = v1375.special;
    var v1376 = jQuery$$1.support;
    var deleteExpando = v1376.deleteExpando;
    var i$$81 = 0;
    var elem$$105;
    introspect(JAM.policy.p3) {
      var v3142 = elem$$105 = elems$$9[i$$81]
    }
    var v1386 = v3142 != null;
    for (;v1386;) {
      var v1377 = jQuery$$1.expando;
      introspect(JAM.policy.p3) {
        id$$5 = elem$$105[v1377];
      }
      if (id$$5) {
        introspect(JAM.policy.p3) {
          data$$38 = cache$$2[id$$5];
        }
        var v1382 = data$$38.events;
        if (v1382) {
          var type$$58;
          var v1381 = data$$38.events;
          for (type$$58 in v1381) {
            introspect(JAM.policy.p3) {
              var v1380 = special$$4[type$$58]
            }
            if (v1380) {
              var v1378 = jQuery$$1.event;
              v1378.remove(elem$$105, type$$58);
            } else {
              var v1379 = data$$38.handle;
              removeEvent(elem$$105, type$$58, v1379);
            }
          }
        }
        if (deleteExpando) {
          var v1383 = jQuery$$1.expando;
          delete elem$$105[v1383];
        } else {
          var v1385 = elem$$105.removeAttribute;
          if (v1385) {
            var v1384 = jQuery$$1.expando;
            elem$$105.removeAttribute(v1384);
          }
        }
        delete cache$$2[id$$5];
      }
      i$$81 = i$$81 + 1;
      introspect(JAM.policy.p3) {
        var v3143 = elem$$105 = elems$$9[i$$81]
      }
      v1386 = v3143 != null;
    }
    return;
  }
  function v273(elems$$8, context$$15, fragment$$3, scripts$$2) {
    context$$15 = context$$15 || document$$1;
    var v4232 = context$$15.createElement;
    var v3144 = typeof v4232;
    var v1388 = v3144 === "undefined";
    if (v1388) {
      var v3145 = context$$15.ownerDocument;
      var v4234 = !v3145;
      if (v4234) {
        var v4233 = context$$15[0];
        if (v4233) {
          var v4947 = context$$15[0];
          v4233 = v4947.ownerDocument;
        }
        v3145 = v4233;
      }
      var v1387 = v3145;
      var v3146 = !v1387;
      if (v3146) {
        v1387 = document$$1;
      }
      context$$15 = v1387;
    }
    var ret$$21 = [];
    var i$$80 = 0;
    var elem$$104;
    introspect(JAM.policy.p3) {
      var v3147 = elem$$104 = elems$$8[i$$80]
    }
    var v1409 = v3147 != null;
    for (;v1409;) {
      var v3148 = typeof elem$$104;
      var v1389 = v3148 === "number";
      if (v1389) {
        elem$$104 = elem$$104 + "";
      }
      var v1390 = !elem$$104;
      if (v1390) {
        i$$80 = i$$80 + 1;
        introspect(JAM.policy.p3) {
          var v3149 = elem$$104 = elems$$8[i$$80]
        }
        v1409 = v3149 != null;
        continue;
      }
      var v4235 = typeof elem$$104;
      var v3150 = v4235 === "string";
      if (v3150) {
        var v4236 = rhtml.test(elem$$104);
        v3150 = !v4236;
      }
      var v1407 = v3150;
      if (v1407) {
        elem$$104 = context$$15.createTextNode(elem$$104);
      } else {
        var v3151 = typeof elem$$104;
        var v1406 = v3151 === "string";
        if (v1406) {
          elem$$104 = elem$$104.replace(rxhtmlTag, fcloseTag);
          var v4237 = rtagName.exec(elem$$104);
          var v4948 = !v4237;
          if (v4948) {
            v4237 = ["", ""];
          }
          var v3152 = v4237;
          var v1391 = v3152[1];
          var tag$$1 = v1391.toLowerCase();
          introspect(JAM.policy.p3) {
            var v1392 = wrapMap[tag$$1]
          }
          var v3153 = !v1392;
          if (v3153) {
            v1392 = wrapMap._default;
          }
          var wrap$$1 = v1392;
          var depth$$1 = wrap$$1[0];
          var div$$6 = context$$15.createElement("div");
          var v3154 = wrap$$1[1];
          var v1393 = v3154 + elem$$104;
          var v1394 = wrap$$1[2];
          div$$6.innerHTML = v1393 + v1394;
          var v1395 = depth$$1;
          depth$$1 = depth$$1 - 1;
          for (;v1395;) {
            div$$6 = div$$6.lastChild;
            v1395 = depth$$1;
            depth$$1 = depth$$1 - 1;
          }
          var v4238 = jQuery$$1.support;
          var v3155 = v4238.tbody;
          var v1402 = !v3155;
          if (v1402) {
            var hasBody = rtbody.test(elem$$104);
            var v1396;
            var v4239 = tag$$1 === "table";
            if (v4239) {
              v4239 = !hasBody;
            }
            var v3158 = v4239;
            if (v3158) {
              var v3156 = div$$6.firstChild;
              if (v3156) {
                var v4240 = div$$6.firstChild;
                v3156 = v4240.childNodes;
              }
              v1396 = v3156;
            } else {
              var v3157;
              var v5279 = wrap$$1[1];
              var v4949 = v5279 === "<table>";
              if (v4949) {
                v4949 = !hasBody;
              }
              var v4241 = v4949;
              if (v4241) {
                v3157 = div$$6.childNodes;
              } else {
                v3157 = [];
              }
              v1396 = v3157;
            }
            var tbody = v1396;
            var v1397 = tbody.length;
            var j$$4 = v1397 - 1;
            var v1401 = j$$4 >= 0;
            for (;v1401;) {
              introspect(JAM.policy.p3) {
                var v4242 = tbody[j$$4]
              }
              var v3159 = jQuery$$1.nodeName(v4242, "tbody");
              if (v3159) {
                introspect(JAM.policy.p3) {
                  var v5280 = tbody[j$$4]
                }
                var v4950 = v5280.childNodes;
                var v4243 = v4950.length;
                v3159 = !v4243;
              }
              var v1400 = v3159;
              if (v1400) {
                introspect(JAM.policy.p3) {
                  var v3160 = tbody[j$$4]
                }
                var v1398 = v3160.parentNode;
                introspect(JAM.policy.p3) {
                  var v1399 = tbody[j$$4]
                }
                v1398.removeChild(v1399);
              }
              j$$4 = j$$4 - 1;
              v1401 = j$$4 >= 0;
            }
          }
          var v4951 = jQuery$$1.support;
          var v4244 = v4951.leadingWhitespace;
          var v3161 = !v4244;
          if (v3161) {
            v3161 = rleadingWhitespace.test(elem$$104);
          }
          var v1405 = v3161;
          if (v1405) {
            var v4245 = rleadingWhitespace.exec(elem$$104);
            var v3162 = v4245[0];
            var v1403 = context$$15.createTextNode(v3162);
            var v1404 = div$$6.firstChild;
            div$$6.insertBefore(v1403, v1404);
          }
          elem$$104 = div$$6.childNodes;
        }
      }
      var v1408 = elem$$104.nodeType;
      if (v1408) {
        ret$$21.push(elem$$104);
      } else {
        ret$$21 = jQuery$$1.merge(ret$$21, elem$$104);
      }
      i$$80 = i$$80 + 1;
      introspect(JAM.policy.p3) {
        var v3163 = elem$$104 = elems$$8[i$$80]
      }
      v1409 = v3163 != null;
    }
    if (fragment$$3) {
      i$$80 = 0;
      introspect(JAM.policy.p3) {
        var v1416 = ret$$21[i$$80]
      }
      for (;v1416;) {
        var v4246 = scripts$$2;
        if (v4246) {
          introspect(JAM.policy.p3) {
            var v4952 = ret$$21[i$$80]
          }
          v4246 = jQuery$$1.nodeName(v4952, "script");
        }
        var v3164 = v4246;
        if (v3164) {
          introspect(JAM.policy.p3) {
            var v5281 = ret$$21[i$$80]
          }
          var v4953 = v5281.type;
          var v4247 = !v4953;
          var v4955 = !v4247;
          if (v4955) {
            introspect(JAM.policy.p3) {
              var v5440 = ret$$21[i$$80]
            }
            var v5282 = v5440.type;
            var v4954 = v5282.toLowerCase();
            v4247 = v4954 === "text/javascript";
          }
          v3164 = v4247;
        }
        var v1415 = v3164;
        if (v1415) {
          var v3165;
          introspect(JAM.policy.p3) {
            var v4956 = ret$$21[i$$80]
          }
          var v4250 = v4956.parentNode;
          if (v4250) {
            introspect(JAM.policy.p3) {
              var v4957 = ret$$21[i$$80]
            }
            var v4248 = v4957.parentNode;
            introspect(JAM.policy.p3) {
              var v4249 = ret$$21[i$$80]
            }
            v3165 = v4248.removeChild(v4249);
          } else {
            introspect(JAM.policy.p3) {
              v3165 = ret$$21[i$$80];
            }
          }
          var v1410 = v3165;
          scripts$$2.push(v1410);
        } else {
          introspect(JAM.policy.p3) {
            var v4251 = ret$$21[i$$80]
          }
          var v3166 = v4251.nodeType;
          var v1413 = v3166 === 1;
          if (v1413) {
            var v1411 = ret$$21.splice;
            var v4252 = i$$80 + 1;
            var v3167 = [v4252, 0];
            introspect(JAM.policy.p3) {
              var v4958 = ret$$21[i$$80]
            }
            var v4253 = v4958.getElementsByTagName("script");
            var v3168 = jQuery$$1.makeArray(v4253);
            var v1412 = v3167.concat(v3168);
            v1411.apply(ret$$21, v1412);
          }
          introspect(JAM.policy.p3) {
            var v1414 = ret$$21[i$$80]
          }
          fragment$$3.appendChild(v1414);
        }
        i$$80 = i$$80 + 1;
        introspect(JAM.policy.p3) {
          v1416 = ret$$21[i$$80];
        }
      }
    }
    return ret$$21;
  }
  function v272(name$$48, original) {
    function v271(selector$$19) {
      var ret$$20 = [];
      var insert = jQuery$$1(selector$$19);
      var v3169 = this.length;
      var v1417 = v3169 === 1;
      if (v1417) {
        var v3170 = this[0];
        v1417 = v3170.parentNode;
      }
      var parent$$8 = v1417;
      var v4959 = parent$$8;
      if (v4959) {
        var v5283 = parent$$8.nodeType;
        v4959 = v5283 === 11;
      }
      var v4254 = v4959;
      if (v4254) {
        var v5284 = parent$$8.childNodes;
        var v4960 = v5284.length;
        v4254 = v4960 === 1;
      }
      var v3171 = v4254;
      if (v3171) {
        var v4255 = insert.length;
        v3171 = v4255 === 1;
      }
      var v1424 = v3171;
      if (v1424) {
        var v1418 = this[0];
        introspect(JAM.policy.p3) {
          insert[original](v1418);
        }
        return this;
      } else {
        var i$$79 = 0;
        var l$$22 = insert.length;
        var v1422 = i$$79 < l$$22;
        for (;v1422;) {
          var v3172;
          var v4256 = i$$79 > 0;
          if (v4256) {
            v3172 = this.clone(true);
          } else {
            v3172 = this;
          }
          var v1419 = v3172;
          var elems$$7 = v1419.get();
          var v3173 = jQuery$$1.fn;
          introspect(JAM.policy.p3) {
            var v1420 = v3173[original]
          }
          introspect(JAM.policy.p3) {
            var v3174 = insert[i$$79]
          }
          var v1421 = jQuery$$1(v3174);
          v1420.apply(v1421, elems$$7);
          ret$$20 = ret$$20.concat(elems$$7);
          i$$79 = i$$79 + 1;
          v1422 = i$$79 < l$$22;
        }
        var v1423 = insert.selector;
        return this.pushStack(ret$$20, name$$48, v1423);
      }
      return;
    }
    var v1425 = jQuery$$1.fn;
    introspect(JAM.policy.p2) {
      v1425[name$$48] = v271;
    }
    return;
  }
  function v270(args$$6, table, callback$$30) {
    function v269(i$$78) {
      var self$$10 = jQuery$$1(this);
      var v1426 = args$$6;
      var v4257;
      if (table) {
        v4257 = self$$10.html();
      } else {
        v4257 = undefined$$1;
      }
      var v3175 = v4257;
      var v5583 = value$$40.call(this, i$$78, v3175);
      v1426[0] = v5583;
      self$$10.domManip(args$$6, table, callback$$30);
      return;
    }
    function v268() {
      var v1427 = jQuery$$1(this);
      v1427.domManip(args$$6, table, callback$$30, true);
      return;
    }
    function root$$3(elem$$103, cur$$7) {
      var v1428;
      var v3177 = jQuery$$1.nodeName(elem$$103, "table");
      if (v3177) {
        var v4258 = elem$$103.getElementsByTagName("tbody");
        var v3176 = v4258[0];
        var v4260 = !v3176;
        if (v4260) {
          var v4961 = elem$$103.ownerDocument;
          var v4259 = v4961.createElement("tbody");
          v3176 = elem$$103.appendChild(v4259);
        }
        v1428 = v3176;
      } else {
        v1428 = elem$$103;
      }
      return v1428;
    }
    var results$$7;
    var first$$3;
    var value$$40 = args$$6[0];
    var scripts$$1 = [];
    var fragment$$2;
    var parent$$7;
    var v5441 = jQuery$$1.support;
    var v5285 = v5441.checkClone;
    var v4962 = !v5285;
    if (v4962) {
      var v5286 = arguments.length;
      v4962 = v5286 === 3;
    }
    var v4261 = v4962;
    if (v4261) {
      var v4963 = typeof value$$40;
      v4261 = v4963 === "string";
    }
    var v3178 = v4261;
    if (v3178) {
      v3178 = rchecked.test(value$$40);
    }
    var v1429 = v3178;
    if (v1429) {
      return this.each(v268);
    }
    var v1430 = jQuery$$1.isFunction(value$$40);
    if (v1430) {
      return this.each(v269);
    }
    var v1439 = this[0];
    if (v1439) {
      var v1431 = value$$40;
      if (v1431) {
        v1431 = value$$40.parentNode;
      }
      parent$$7 = v1431;
      var v5287 = jQuery$$1.support;
      var v4964 = v5287.parentNode;
      if (v4964) {
        v4964 = parent$$7;
      }
      var v4262 = v4964;
      if (v4262) {
        var v4965 = parent$$7.nodeType;
        v4262 = v4965 === 11;
      }
      var v3179 = v4262;
      if (v3179) {
        var v4966 = parent$$7.childNodes;
        var v4263 = v4966.length;
        var v4264 = this.length;
        v3179 = v4263 === v4264;
      }
      var v1432 = v3179;
      if (v1432) {
        results$$7 = {fragment:parent$$7};
      } else {
        results$$7 = buildFragment(args$$6, this, scripts$$1);
      }
      fragment$$2 = results$$7.fragment;
      var v4265 = fragment$$2.childNodes;
      var v3180 = v4265.length;
      var v1433 = v3180 === 1;
      if (v1433) {
        first$$3 = fragment$$2 = fragment$$2.firstChild;
      } else {
        first$$3 = fragment$$2.firstChild;
      }
      if (first$$3) {
        var v1434 = table;
        if (v1434) {
          v1434 = jQuery$$1.nodeName(first$$3, "tr");
        }
        table = v1434;
        var i$$77 = 0;
        var l$$21 = this.length;
        var v1437 = i$$77 < l$$21;
        for (;v1437;) {
          var v3181;
          if (table) {
            introspect(JAM.policy.p3) {
              var v4266 = this[i$$77]
            }
            v3181 = root$$3(v4266, first$$3);
          } else {
            introspect(JAM.policy.p3) {
              v3181 = this[i$$77];
            }
          }
          var v1435 = v3181;
          var v3182;
          var v5288 = i$$77 > 0;
          var v5442 = !v5288;
          if (v5442) {
            v5288 = results$$7.cacheable;
          }
          var v4967 = v5288;
          var v5290 = !v4967;
          if (v5290) {
            var v5289 = this.length;
            v4967 = v5289 > 1;
          }
          var v4267 = v4967;
          if (v4267) {
            v3182 = fragment$$2.cloneNode(true);
          } else {
            v3182 = fragment$$2;
          }
          var v1436 = v3182;
          callback$$30.call(v1435, v1436);
          i$$77 = i$$77 + 1;
          v1437 = i$$77 < l$$21;
        }
      }
      var v1438 = scripts$$1.length;
      if (v1438) {
        jQuery$$1.each(scripts$$1, evalScript);
      }
    }
    return this;
  }
  function v267(selector$$18) {
    return this.remove(selector$$18, true);
  }
  function v266(value$$39) {
    function v265() {
      var next = this.nextSibling;
      var parent$$6 = this.parentNode;
      var v1440 = jQuery$$1(this);
      v1440.remove();
      if (next) {
        var v1441 = jQuery$$1(next);
        v1441.before(value$$39);
      } else {
        var v1442 = jQuery$$1(parent$$6);
        v1442.append(value$$39);
      }
      return;
    }
    function v264(i$$76) {
      var self$$9 = jQuery$$1(this);
      var old$$3 = self$$9.html();
      var v1443 = value$$39.call(this, i$$76, old$$3);
      self$$9.replaceWith(v1443);
      return;
    }
    var v3183 = this[0];
    if (v3183) {
      var v4268 = this[0];
      v3183 = v4268.parentNode;
    }
    var v1448 = v3183;
    if (v1448) {
      var v1444 = jQuery$$1.isFunction(value$$39);
      if (v1444) {
        return this.each(v264);
      }
      var v3184 = typeof value$$39;
      var v1446 = v3184 !== "string";
      if (v1446) {
        var v1445 = jQuery$$1(value$$39);
        value$$39 = v1445.detach();
      }
      return this.each(v265);
    } else {
      var v4269;
      var v4968 = jQuery$$1.isFunction(value$$39);
      if (v4968) {
        v4269 = value$$39();
      } else {
        v4269 = value$$39;
      }
      var v3185 = v4269;
      var v1447 = jQuery$$1(v3185);
      return this.pushStack(v1447, "replaceWith", value$$39);
    }
    return;
  }
  function v263(value$$38) {
    function v262(i$$75) {
      function v261() {
        return value$$38.call(this, i$$75, old$$2);
      }
      var self$$8 = jQuery$$1(this);
      var old$$2 = self$$8.html();
      var v1449 = self$$8.empty();
      v1449.append(v261);
      return;
    }
    var v1459 = value$$38 === undefined$$1;
    if (v1459) {
      var v1450;
      var v4270 = this[0];
      if (v4270) {
        var v5291 = this[0];
        var v4969 = v5291.nodeType;
        v4270 = v4969 === 1;
      }
      var v3187 = v4270;
      if (v3187) {
        var v4271 = this[0];
        var v3186 = v4271.innerHTML;
        v1450 = v3186.replace(rinlinejQuery, "");
      } else {
        v1450 = null;
      }
      return v1450;
    } else {
      var v5292 = typeof value$$38;
      var v4970 = v5292 === "string";
      if (v4970) {
        var v5293 = rnocache.test(value$$38);
        v4970 = !v5293;
      }
      var v4272 = v4970;
      if (v4272) {
        var v5294 = jQuery$$1.support;
        var v4971 = v5294.leadingWhitespace;
        var v5296 = !v4971;
        if (v5296) {
          var v5295 = rleadingWhitespace.test(value$$38);
          v4971 = !v5295;
        }
        v4272 = v4971;
      }
      var v3188 = v4272;
      if (v3188) {
        var v4972 = wrapMap;
        var v5495 = rtagName.exec(value$$38);
        var v5513 = !v5495;
        if (v5513) {
          v5495 = ["", ""];
        }
        var v5443 = v5495;
        var v5297 = v5443[1];
        var v4973 = v5297.toLowerCase();
        introspect(JAM.policy.p3) {
          var v4273 = v4972[v4973]
        }
        v3188 = !v4273;
      }
      var v1458 = v3188;
      if (v1458) {
        value$$38 = value$$38.replace(rxhtmlTag, fcloseTag);
        try {
          var i$$74 = 0;
          var l$$20 = this.length;
          var v1454 = i$$74 < l$$20;
          for (;v1454;) {
            introspect(JAM.policy.p3) {
              var v4274 = this[i$$74]
            }
            var v3189 = v4274.nodeType;
            var v1453 = v3189 === 1;
            if (v1453) {
              introspect(JAM.policy.p3) {
                var v3190 = this[i$$74]
              }
              var v1451 = v3190.getElementsByTagName("*");
              jQuery$$1.cleanData(v1451);
              introspect(JAM.policy.p3) {
                var v1452 = this[i$$74]
              }
              v1452.innerHTML = value$$38;
            }
            i$$74 = i$$74 + 1;
            v1454 = i$$74 < l$$20;
          }
        } catch (e$$22) {
          var v1455 = this.empty();
          v1455.append(value$$38);
        }
      } else {
        var v1457 = jQuery$$1.isFunction(value$$38);
        if (v1457) {
          this.each(v262);
        } else {
          var v1456 = this.empty();
          v1456.append(value$$38);
        }
      }
    }
    return this;
  }
  function v260(events$$5) {
    function v259() {
      var v4974 = jQuery$$1.support;
      var v4275 = v4974.noCloneEvent;
      var v3191 = !v4275;
      if (v3191) {
        var v4276 = jQuery$$1.isXMLDoc(this);
        v3191 = !v4276;
      }
      var v1463 = v3191;
      if (v1463) {
        var html$$3 = this.outerHTML;
        var ownerDocument = this.ownerDocument;
        var v1461 = !html$$3;
        if (v1461) {
          var div$$5 = ownerDocument.createElement("div");
          var v1460 = this.cloneNode(true);
          div$$5.appendChild(v1460);
          html$$3 = div$$5.innerHTML;
        }
        var v5298 = html$$3.replace(rinlinejQuery, "");
        var v4975 = v5298.replace(/=([^="'>\s]+\/)>/g, '="$1">');
        var v4277 = v4975.replace(rleadingWhitespace, "");
        var v3192 = [v4277];
        var v1462 = jQuery$$1.clean(v3192, ownerDocument);
        return v1462[0];
      } else {
        return this.cloneNode(true);
      }
      return;
    }
    var ret$$19 = this.map(v259);
    var v1466 = events$$5 === true;
    if (v1466) {
      cloneCopyEvent(this, ret$$19);
      var v1464 = this.find("*");
      var v1465 = ret$$19.find("*");
      cloneCopyEvent(v1464, v1465);
    }
    return ret$$19;
  }
  function v258() {
    var i$$73 = 0;
    var elem$$102;
    introspect(JAM.policy.p3) {
      var v3193 = elem$$102 = this[i$$73]
    }
    var v1471 = v3193 != null;
    for (;v1471;) {
      var v3194 = elem$$102.nodeType;
      var v1468 = v3194 === 1;
      if (v1468) {
        var v1467 = elem$$102.getElementsByTagName("*");
        jQuery$$1.cleanData(v1467);
      }
      var v1470 = elem$$102.firstChild;
      for (;v1470;) {
        var v1469 = elem$$102.firstChild;
        elem$$102.removeChild(v1469);
        v1470 = elem$$102.firstChild;
      }
      i$$73 = i$$73 + 1;
      introspect(JAM.policy.p3) {
        var v3195 = elem$$102 = this[i$$73]
      }
      v1471 = v3195 != null;
    }
    return this;
  }
  function v257(selector$$17, keepData) {
    var i$$72 = 0;
    var elem$$101;
    introspect(JAM.policy.p3) {
      var v3196 = elem$$101 = this[i$$72]
    }
    var v1478 = v3196 != null;
    for (;v1478;) {
      var v3197 = !selector$$17;
      var v4279 = !v3197;
      if (v4279) {
        var v4976 = [elem$$101];
        var v4278 = jQuery$$1.filter(selector$$17, v4976);
        v3197 = v4278.length;
      }
      var v1477 = v3197;
      if (v1477) {
        var v3198 = !keepData;
        if (v3198) {
          var v4280 = elem$$101.nodeType;
          v3198 = v4280 === 1;
        }
        var v1474 = v3198;
        if (v1474) {
          var v1472 = elem$$101.getElementsByTagName("*");
          jQuery$$1.cleanData(v1472);
          var v1473 = [elem$$101];
          jQuery$$1.cleanData(v1473);
        }
        var v1476 = elem$$101.parentNode;
        if (v1476) {
          var v1475 = elem$$101.parentNode;
          v1475.removeChild(elem$$101);
        }
      }
      i$$72 = i$$72 + 1;
      introspect(JAM.policy.p3) {
        var v3199 = elem$$101 = this[i$$72]
      }
      v1478 = v3199 != null;
    }
    return this;
  }
  function v256() {
    function v255(elem$$100) {
      var v1479 = this.parentNode;
      var v1480 = this.nextSibling;
      v1479.insertBefore(elem$$100, v1480);
      return;
    }
    var v3200 = this[0];
    if (v3200) {
      var v4281 = this[0];
      v3200 = v4281.parentNode;
    }
    var v1484 = v3200;
    if (v1484) {
      return this.domManip(arguments, false, v255);
    } else {
      var v1483 = arguments.length;
      if (v1483) {
        var set$$7 = this.pushStack(this, "after", arguments);
        var v1481 = set$$7.push;
        var v4282 = arguments[0];
        var v3201 = jQuery$$1(v4282);
        var v1482 = v3201.toArray();
        v1481.apply(set$$7, v1482);
        return set$$7;
      }
    }
    return;
  }
  function v254() {
    function v253(elem$$99) {
      var v1485 = this.parentNode;
      v1485.insertBefore(elem$$99, this);
      return;
    }
    var v3202 = this[0];
    if (v3202) {
      var v4283 = this[0];
      v3202 = v4283.parentNode;
    }
    var v1490 = v3202;
    if (v1490) {
      return this.domManip(arguments, false, v253);
    } else {
      var v1489 = arguments.length;
      if (v1489) {
        var v1486 = arguments[0];
        var set$$6 = jQuery$$1(v1486);
        var v1487 = set$$6.push;
        var v1488 = this.toArray();
        v1487.apply(set$$6, v1488);
        return this.pushStack(set$$6, "before", arguments);
      }
    }
    return;
  }
  function v252() {
    function v251(elem$$98) {
      var v3203 = this.nodeType;
      var v1492 = v3203 === 1;
      if (v1492) {
        var v1491 = this.firstChild;
        this.insertBefore(elem$$98, v1491);
      }
      return;
    }
    return this.domManip(arguments, true, v251);
  }
  function v250() {
    function v249(elem$$97) {
      var v3204 = this.nodeType;
      var v1493 = v3204 === 1;
      if (v1493) {
        this.appendChild(elem$$97);
      }
      return;
    }
    return this.domManip(arguments, true, v249);
  }
  function v248() {
    function v247() {
      var v3205 = jQuery$$1.nodeName(this, "body");
      var v1496 = !v3205;
      if (v1496) {
        var v1494 = jQuery$$1(this);
        var v1495 = this.childNodes;
        v1494.replaceWith(v1495);
      }
      return;
    }
    var v3206 = this.parent();
    var v1497 = v3206.each(v247);
    return v1497.end();
  }
  function v246(html$$2) {
    function v245() {
      var v1498 = jQuery$$1(this);
      v1498.wrapAll(html$$2);
      return;
    }
    return this.each(v245);
  }
  function v244(html$$1) {
    function v243() {
      var self$$7 = jQuery$$1(this);
      var contents = self$$7.contents();
      var v1499 = contents.length;
      if (v1499) {
        contents.wrapAll(html$$1);
      } else {
        self$$7.append(html$$1);
      }
      return;
    }
    function v242(i$$71) {
      var v1500 = jQuery$$1(this);
      var v1501 = html$$1.call(this, i$$71);
      v1500.wrapInner(v1501);
      return;
    }
    var v1502 = jQuery$$1.isFunction(html$$1);
    if (v1502) {
      return this.each(v242);
    }
    return this.each(v243);
  }
  function v241(html) {
    function v240() {
      var elem$$96 = this;
      var v3207 = elem$$96.firstChild;
      if (v3207) {
        var v4977 = elem$$96.firstChild;
        var v4284 = v4977.nodeType;
        v3207 = v4284 === 1;
      }
      var v1503 = v3207;
      for (;v1503;) {
        elem$$96 = elem$$96.firstChild;
        var v3208 = elem$$96.firstChild;
        if (v3208) {
          var v4978 = elem$$96.firstChild;
          var v4285 = v4978.nodeType;
          v3208 = v4285 === 1;
        }
        v1503 = v3208;
      }
      return elem$$96;
    }
    function v239(i$$70) {
      var v1504 = jQuery$$1(this);
      var v1505 = html.call(this, i$$70);
      v1504.wrapAll(v1505);
      return;
    }
    var v1506 = jQuery$$1.isFunction(html);
    if (v1506) {
      return this.each(v239);
    }
    var v1511 = this[0];
    if (v1511) {
      var v4979 = this[0];
      var v4286 = v4979.ownerDocument;
      var v3209 = jQuery$$1(html, v4286);
      var v1507 = v3209.eq(0);
      var wrap = v1507.clone(true);
      var v3210 = this[0];
      var v1509 = v3210.parentNode;
      if (v1509) {
        var v1508 = this[0];
        wrap.insertBefore(v1508);
      }
      var v1510 = wrap.map(v240);
      v1510.append(this);
    }
    return this;
  }
  function v238(text$$8) {
    function v237(i$$69) {
      var self$$6 = jQuery$$1(this);
      var v3211 = self$$6.text();
      var v1512 = text$$8.call(this, i$$69, v3211);
      self$$6.text(v1512);
      return;
    }
    var v1513 = jQuery$$1.isFunction(text$$8);
    if (v1513) {
      return this.each(v237);
    }
    var v4287 = typeof text$$8;
    var v3212 = v4287 !== "object";
    if (v3212) {
      v3212 = text$$8 !== undefined$$1;
    }
    var v1516 = v3212;
    if (v1516) {
      var v1514 = this.empty();
      var v4980 = this[0];
      if (v4980) {
        var v5299 = this[0];
        v4980 = v5299.ownerDocument;
      }
      var v4288 = v4980;
      var v4981 = !v4288;
      if (v4981) {
        v4288 = document$$1;
      }
      var v3213 = v4288;
      var v1515 = v3213.createTextNode(text$$8);
      return v1514.append(v1515);
    }
    return jQuery$$1.text(this);
  }
  function v236(n$$2, elem$$95) {
    var r$$1 = [];
    for (;n$$2;) {
      var v4289 = n$$2.nodeType;
      var v3214 = v4289 === 1;
      if (v3214) {
        v3214 = n$$2 !== elem$$95;
      }
      var v1517 = v3214;
      if (v1517) {
        r$$1.push(n$$2);
      }
      n$$2 = n$$2.nextSibling;
    }
    return r$$1;
  }
  function v235(cur$$6, result$$5, dir$$3, elem$$94) {
    result$$5 = result$$5 || 1;
    var num$$7 = 0;
    for (;cur$$6;) {
      var v4290 = cur$$6.nodeType;
      var v3215 = v4290 === 1;
      if (v3215) {
        var v4291 = num$$7 = num$$7 + 1;
        v3215 = v4291 === result$$5;
      }
      var v1518 = v3215;
      if (v1518) {
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
    var v4292 = cur$$5;
    if (v4292) {
      var v4982 = cur$$5.nodeType;
      v4292 = v4982 !== 9;
    }
    var v3216 = v4292;
    if (v3216) {
      var v4983 = until$$4 === undefined$$1;
      var v5301 = !v4983;
      if (v5301) {
        var v5300 = cur$$5.nodeType;
        v4983 = v5300 !== 1;
      }
      var v4293 = v4983;
      var v4985 = !v4293;
      if (v4985) {
        var v5302 = jQuery$$1(cur$$5);
        var v4984 = v5302.is(until$$4);
        v4293 = !v4984;
      }
      v3216 = v4293;
    }
    var v1520 = v3216;
    for (;v1520;) {
      var v3217 = cur$$5.nodeType;
      var v1519 = v3217 === 1;
      if (v1519) {
        matched.push(cur$$5);
      }
      introspect(JAM.policy.p3) {
        cur$$5 = cur$$5[dir$$2];
      }
      var v4294 = cur$$5;
      if (v4294) {
        var v4986 = cur$$5.nodeType;
        v4294 = v4986 !== 9;
      }
      var v3218 = v4294;
      if (v3218) {
        var v4987 = until$$4 === undefined$$1;
        var v5304 = !v4987;
        if (v5304) {
          var v5303 = cur$$5.nodeType;
          v4987 = v5303 !== 1;
        }
        var v4295 = v4987;
        var v4989 = !v4295;
        if (v4989) {
          var v5305 = jQuery$$1(cur$$5);
          var v4988 = v5305.is(until$$4);
          v4295 = !v4988;
        }
        v3218 = v4295;
      }
      v1520 = v3218;
    }
    return matched;
  }
  function v233(expr$$6, elems$$6, not$$5) {
    if (not$$5) {
      var v1521 = ":not(" + expr$$6;
      expr$$6 = v1521 + ")";
    }
    var v1522 = jQuery$$1.find;
    return v1522.matches(expr$$6, elems$$6);
  }
  function v232(name$$47, fn$$14) {
    function v231(until$$3, selector$$16) {
      var ret$$18 = jQuery$$1.map(this, fn$$14, until$$3);
      var v3219 = runtil.test(name$$47);
      var v1523 = !v3219;
      if (v1523) {
        selector$$16 = until$$3;
      }
      var v3220 = selector$$16;
      if (v3220) {
        var v4296 = typeof selector$$16;
        v3220 = v4296 === "string";
      }
      var v1524 = v3220;
      if (v1524) {
        ret$$18 = jQuery$$1.filter(selector$$16, ret$$18);
      }
      var v1525;
      var v4297 = this.length;
      var v3221 = v4297 > 1;
      if (v3221) {
        v1525 = jQuery$$1.unique(ret$$18);
      } else {
        v1525 = ret$$18;
      }
      ret$$18 = v1525;
      var v4990 = this.length;
      var v4298 = v4990 > 1;
      var v4991 = !v4298;
      if (v4991) {
        v4298 = rmultiselector.test(selector$$16);
      }
      var v3222 = v4298;
      if (v3222) {
        v3222 = rparentsprev.test(name$$47);
      }
      var v1526 = v3222;
      if (v1526) {
        ret$$18 = ret$$18.reverse();
      }
      var v3223 = slice.call(arguments);
      var v1527 = v3223.join(",");
      return this.pushStack(ret$$18, name$$47, v1527);
    }
    var v1528 = jQuery$$1.fn;
    introspect(JAM.policy.p2) {
      v1528[name$$47] = v231;
    }
    return;
  }
  function v230(elem$$92) {
    var v1529;
    var v3226 = jQuery$$1.nodeName(elem$$92, "iframe");
    if (v3226) {
      var v3224 = elem$$92.contentDocument;
      var v4300 = !v3224;
      if (v4300) {
        var v4299 = elem$$92.contentWindow;
        v3224 = v4299.document;
      }
      v1529 = v3224;
    } else {
      var v3225 = elem$$92.childNodes;
      v1529 = jQuery$$1.makeArray(v3225);
    }
    return v1529;
  }
  function v229(elem$$91) {
    var v1530 = elem$$91.firstChild;
    return jQuery$$1.sibling(v1530);
  }
  function v228(elem$$90) {
    var v3227 = elem$$90.parentNode;
    var v1531 = v3227.firstChild;
    return jQuery$$1.sibling(v1531, elem$$90);
  }
  function v227(elem$$89, i$$68, until$$2) {
    return jQuery$$1.dir(elem$$89, "previousSibling", until$$2);
  }
  function v226(elem$$88, i$$67, until$$1) {
    return jQuery$$1.dir(elem$$88, "nextSibling", until$$1);
  }
  function v225(elem$$87) {
    return jQuery$$1.dir(elem$$87, "previousSibling");
  }
  function v224(elem$$86) {
    return jQuery$$1.dir(elem$$86, "nextSibling");
  }
  function v223(elem$$85) {
    return jQuery$$1.nth(elem$$85, 2, "previousSibling");
  }
  function v222(elem$$84) {
    return jQuery$$1.nth(elem$$84, 2, "nextSibling");
  }
  function v221(elem$$83, i$$66, until) {
    return jQuery$$1.dir(elem$$83, "parentNode", until);
  }
  function v220(elem$$82) {
    return jQuery$$1.dir(elem$$82, "parentNode");
  }
  function v219(elem$$81) {
    var parent$$5 = elem$$81.parentNode;
    var v1532;
    var v4301 = parent$$5;
    if (v4301) {
      var v4992 = parent$$5.nodeType;
      v4301 = v4992 !== 11;
    }
    var v3228 = v4301;
    if (v3228) {
      v1532 = parent$$5;
    } else {
      v1532 = null;
    }
    return v1532;
  }
  function v218() {
    var v1533 = this.prevObject;
    return this.add(v1533);
  }
  function v217(selector$$15, context$$14) {
    var v1534;
    var v4302 = typeof selector$$15;
    var v3230 = v4302 === "string";
    if (v3230) {
      var v4303 = context$$14;
      var v4993 = !v4303;
      if (v4993) {
        v4303 = this.context;
      }
      var v3229 = v4303;
      v1534 = jQuery$$1(selector$$15, v3229);
    } else {
      v1534 = jQuery$$1.makeArray(selector$$15);
    }
    var set$$5 = v1534;
    var v1535 = this.get();
    var all$$4 = jQuery$$1.merge(v1535, set$$5);
    var v3231;
    var v5306 = set$$5[0];
    var v4994 = isDisconnected(v5306);
    var v5308 = !v4994;
    if (v5308) {
      var v5307 = all$$4[0];
      v4994 = isDisconnected(v5307);
    }
    var v4304 = v4994;
    if (v4304) {
      v3231 = all$$4;
    } else {
      v3231 = jQuery$$1.unique(all$$4);
    }
    var v1536 = v3231;
    return this.pushStack(v1536);
  }
  function v216(elem$$80) {
    var v3232 = !elem$$80;
    var v4306 = !v3232;
    if (v4306) {
      var v4305 = typeof elem$$80;
      v3232 = v4305 === "string";
    }
    var v1539 = v3232;
    if (v1539) {
      var v1537 = this[0];
      var v3233;
      if (elem$$80) {
        v3233 = jQuery$$1(elem$$80);
      } else {
        var v4307 = this.parent();
        v3233 = v4307.children();
      }
      var v1538 = v3233;
      return jQuery$$1.inArray(v1537, v1538);
    }
    var v3234;
    var v4308 = elem$$80.jquery;
    if (v4308) {
      v3234 = elem$$80[0];
    } else {
      v3234 = elem$$80;
    }
    var v1540 = v3234;
    return jQuery$$1.inArray(v1540, this);
  }
  function v215(selectors$$8, context$$13) {
    function v214(i$$65, cur$$4) {
      var v4309 = cur$$4;
      if (v4309) {
        v4309 = cur$$4.ownerDocument;
      }
      var v3235 = v4309;
      if (v3235) {
        v3235 = cur$$4 !== context$$13;
      }
      var v1542 = v3235;
      for (;v1542;) {
        var v3236;
        if (pos$$1) {
          var v4310 = pos$$1.index(cur$$4);
          v3236 = v4310 > -1;
        } else {
          var v4311 = jQuery$$1(cur$$4);
          v3236 = v4311.is(selectors$$8);
        }
        var v1541 = v3236;
        if (v1541) {
          return cur$$4;
        }
        cur$$4 = cur$$4.parentNode;
        var v4312 = cur$$4;
        if (v4312) {
          v4312 = cur$$4.ownerDocument;
        }
        var v3237 = v4312;
        if (v3237) {
          v3237 = cur$$4 !== context$$13;
        }
        v1542 = v3237;
      }
      return null;
    }
    var v1551 = jQuery$$1.isArray(selectors$$8);
    if (v1551) {
      var ret$$17 = [];
      var cur$$3 = this[0];
      var match$$36;
      var matches = {};
      var selector$$14;
      var v3238 = cur$$3;
      if (v3238) {
        v3238 = selectors$$8.length;
      }
      var v1550 = v3238;
      if (v1550) {
        var i$$64 = 0;
        var l$$19 = selectors$$8.length;
        var v1546 = i$$64 < l$$19;
        for (;v1546;) {
          introspect(JAM.policy.p3) {
            selector$$14 = selectors$$8[i$$64];
          }
          introspect(JAM.policy.p3) {
            var v3239 = matches[selector$$14]
          }
          var v1545 = !v3239;
          if (v1545) {
            var v1543 = matches;
            var v1544 = selector$$14;
            var v3240;
            var v5444 = jQuery$$1.expr;
            var v5309 = v5444.match;
            var v4995 = v5309.POS;
            var v4314 = v4995.test(selector$$14);
            if (v4314) {
              var v4996 = context$$13;
              var v5310 = !v4996;
              if (v5310) {
                v4996 = this.context;
              }
              var v4313 = v4996;
              v3240 = jQuery$$1(selector$$14, v4313);
            } else {
              v3240 = selector$$14;
            }
            introspect(JAM.policy.p2) {
              v1543[v1544] = v3240;
            }
          }
          i$$64 = i$$64 + 1;
          v1546 = i$$64 < l$$19;
        }
        var v4315 = cur$$3;
        if (v4315) {
          v4315 = cur$$3.ownerDocument;
        }
        var v3241 = v4315;
        if (v3241) {
          v3241 = cur$$3 !== context$$13;
        }
        var v1549 = v3241;
        for (;v1549;) {
          for (selector$$14 in matches) {
            introspect(JAM.policy.p3) {
              match$$36 = matches[selector$$14];
            }
            var v3242;
            var v4318 = match$$36.jquery;
            if (v4318) {
              var v4316 = match$$36.index(cur$$3);
              v3242 = v4316 > -1;
            } else {
              var v4317 = jQuery$$1(cur$$3);
              v3242 = v4317.is(match$$36);
            }
            var v1548 = v3242;
            if (v1548) {
              var v1547 = {selector:selector$$14, elem:cur$$3};
              ret$$17.push(v1547);
              delete matches[selector$$14];
            }
          }
          cur$$3 = cur$$3.parentNode;
          var v4319 = cur$$3;
          if (v4319) {
            v4319 = cur$$3.ownerDocument;
          }
          var v3243 = v4319;
          if (v3243) {
            v3243 = cur$$3 !== context$$13;
          }
          v1549 = v3243;
        }
      }
      return ret$$17;
    }
    var v1552;
    var v5311 = jQuery$$1.expr;
    var v4997 = v5311.match;
    var v4320 = v4997.POS;
    var v3245 = v4320.test(selectors$$8);
    if (v3245) {
      var v4321 = context$$13;
      var v4998 = !v4321;
      if (v4998) {
        v4321 = this.context;
      }
      var v3244 = v4321;
      v1552 = jQuery$$1(selectors$$8, v3244);
    } else {
      v1552 = null;
    }
    var pos$$1 = v1552;
    return this.map(v214);
  }
  function v213(selector$$13) {
    var v3246 = !selector$$13;
    var v1553 = !v3246;
    if (v1553) {
      var v4322 = jQuery$$1.filter(selector$$13, this);
      var v3247 = v4322.length;
      v1553 = v3247 > 0;
    }
    return v1553;
  }
  function v212(selector$$12) {
    var v1554 = winnow(this, selector$$12, true);
    return this.pushStack(v1554, "filter", selector$$12);
  }
  function v211(selector$$11) {
    var v1555 = winnow(this, selector$$11, false);
    return this.pushStack(v1555, "not", selector$$11);
  }
  function v210(target$$28) {
    function v209() {
      var i$$63 = 0;
      var l$$18 = targets.length;
      var v1557 = i$$63 < l$$18;
      for (;v1557;) {
        introspect(JAM.policy.p3) {
          var v3248 = targets[i$$63]
        }
        var v1556 = jQuery$$1.contains(this, v3248);
        if (v1556) {
          return true;
        }
        i$$63 = i$$63 + 1;
        v1557 = i$$63 < l$$18;
      }
      return;
    }
    var targets = jQuery$$1(target$$28);
    return this.filter(v209);
  }
  function v208(selector$$10) {
    var ret$$16 = this.pushStack("", "find", selector$$10);
    var length$$17 = 0;
    var i$$62 = 0;
    var l$$17 = this.length;
    var v1564 = i$$62 < l$$17;
    for (;v1564;) {
      length$$17 = ret$$16.length;
      introspect(JAM.policy.p3) {
        var v1558 = this[i$$62]
      }
      jQuery$$1.find(selector$$10, v1558, ret$$16);
      var v1563 = i$$62 > 0;
      if (v1563) {
        var n$$1 = length$$17;
        var v3249 = ret$$16.length;
        var v1562 = n$$1 < v3249;
        for (;v1562;) {
          var r = 0;
          var v1561 = r < length$$17;
          for (;v1561;) {
            introspect(JAM.policy.p3) {
              var v3250 = ret$$16[r]
            }
            introspect(JAM.policy.p3) {
              var v3251 = ret$$16[n$$1]
            }
            var v1560 = v3250 === v3251;
            if (v1560) {
              var v1559 = n$$1;
              n$$1 = n$$1 - 1;
              ret$$16.splice(v1559, 1);
              break;
            }
            r = r + 1;
            v1561 = r < length$$17;
          }
          n$$1 = n$$1 + 1;
          var v3252 = ret$$16.length;
          v1562 = n$$1 < v3252;
        }
      }
      i$$62 = i$$62 + 1;
      v1564 = i$$62 < l$$17;
    }
    return ret$$16;
  }
  function v207() {
    function v206(a$$5, b$$4) {
      var v1565 = a$$5 !== b$$4;
      if (v1565) {
        var v3253;
        var v4323 = a$$5.contains;
        if (v4323) {
          v3253 = a$$5.contains(b$$4);
        } else {
          v3253 = true;
        }
        v1565 = v3253;
      }
      return v1565;
    }
    function v205(a$$4, b$$3) {
      var v4324 = a$$4.compareDocumentPosition(b$$3);
      var v3254 = v4324 & 16;
      var v1566 = !v3254;
      return!v1566;
    }
    function v204() {
      function v203(match$$34, context$$11, isXML$$10) {
        var v4999 = context$$11.getElementsByClassName;
        var v4325 = typeof v4999;
        var v3255 = v4325 !== "undefined";
        if (v3255) {
          v3255 = !isXML$$10;
        }
        var v1568 = v3255;
        if (v1568) {
          var v1567 = match$$34[1];
          return context$$11.getElementsByClassName(v1567);
        }
        return;
      }
      var div$$4 = document$$1.createElement("div");
      div$$4.innerHTML = "<div class='test e'></div><div class='test'></div>";
      var v4326 = div$$4.getElementsByClassName;
      var v3256 = !v4326;
      var v4328 = !v3256;
      if (v4328) {
        var v5000 = div$$4.getElementsByClassName("e");
        var v4327 = v5000.length;
        v3256 = v4327 === 0;
      }
      var v1569 = v3256;
      if (v1569) {
        return;
      }
      var v1570 = div$$4.lastChild;
      v1570.className = "e";
      var v4329 = div$$4.getElementsByClassName("e");
      var v3257 = v4329.length;
      var v1571 = v3257 === 1;
      if (v1571) {
        return;
      }
      var v1572 = Expr.order;
      v1572.splice(1, 0, "CLASS");
      var v1573 = Expr.find;
      v1573.CLASS = v203;
      div$$4 = null;
      return;
    }
    function v202() {
      function v201(query$$2, context$$10, extra$$1, seed$$1) {
        context$$10 = context$$10 || document$$1;
        var v4330 = !seed$$1;
        if (v4330) {
          var v5001 = context$$10.nodeType;
          v4330 = v5001 === 9;
        }
        var v3258 = v4330;
        if (v3258) {
          var v4331 = isXML(context$$10);
          v3258 = !v4331;
        }
        var v1575 = v3258;
        if (v1575) {
          try {
            var v1574 = context$$10.querySelectorAll(query$$2);
            return makeArray(v1574, extra$$1);
          } catch (e$$21) {
          }
        }
        return oldSizzle(query$$2, context$$10, extra$$1, seed$$1);
      }
      var oldSizzle = Sizzle;
      var div$$3 = document$$1.createElement("div");
      div$$3.innerHTML = "<p class='TEST'></p>";
      var v3259 = div$$3.querySelectorAll;
      if (v3259) {
        var v5002 = div$$3.querySelectorAll(".TEST");
        var v4332 = v5002.length;
        v3259 = v4332 === 0;
      }
      var v1576 = v3259;
      if (v1576) {
        return;
      }
      Sizzle = v201;
      var prop$$5;
      for (prop$$5 in oldSizzle) {
        introspect(JAM.policy.p4) {
          Sizzle[prop$$5] = oldSizzle[prop$$5];
        }
      }
      div$$3 = null;
      return;
    }
    function v200() {
      function v199(elem$$74) {
        return elem$$74.getAttribute("href", 2);
      }
      function v198(match$$33, context$$9) {
        var v1577 = match$$33[1];
        var results$$6 = context$$9.getElementsByTagName(v1577);
        var v3260 = match$$33[1];
        var v1581 = v3260 === "*";
        if (v1581) {
          var tmp = [];
          var i$$57 = 0;
          introspect(JAM.policy.p3) {
            var v1580 = results$$6[i$$57]
          }
          for (;v1580;) {
            introspect(JAM.policy.p3) {
              var v4333 = results$$6[i$$57]
            }
            var v3261 = v4333.nodeType;
            var v1579 = v3261 === 1;
            if (v1579) {
              introspect(JAM.policy.p3) {
                var v1578 = results$$6[i$$57]
              }
              tmp.push(v1578);
            }
            i$$57 = i$$57 + 1;
            introspect(JAM.policy.p3) {
              v1580 = results$$6[i$$57];
            }
          }
          results$$6 = tmp;
        }
        return results$$6;
      }
      var div$$2 = document$$1.createElement("div");
      var v1582 = document$$1.createComment("");
      div$$2.appendChild(v1582);
      var v4334 = div$$2.getElementsByTagName("*");
      var v3262 = v4334.length;
      var v1584 = v3262 > 0;
      if (v1584) {
        var v1583 = Expr.find;
        v1583.TAG = v198;
      }
      div$$2.innerHTML = "<a href='#'></a>";
      var v4335 = div$$2.firstChild;
      if (v4335) {
        var v5445 = div$$2.firstChild;
        var v5312 = v5445.getAttribute;
        var v5003 = typeof v5312;
        v4335 = v5003 !== "undefined";
      }
      var v3263 = v4335;
      if (v3263) {
        var v5004 = div$$2.firstChild;
        var v4336 = v5004.getAttribute("href");
        v3263 = v4336 !== "#";
      }
      var v1586 = v3263;
      if (v1586) {
        var v1585 = Expr.attrHandle;
        v1585.href = v199;
      }
      div$$2 = null;
      return;
    }
    function v197() {
      function v196(elem$$73, match$$32) {
        var v4337 = elem$$73.getAttributeNode;
        var v3264 = typeof v4337;
        var v1587 = v3264 !== "undefined";
        if (v1587) {
          v1587 = elem$$73.getAttributeNode("id");
        }
        var node$$4 = v1587;
        var v4338 = elem$$73.nodeType;
        var v3265 = v4338 === 1;
        if (v3265) {
          v3265 = node$$4;
        }
        var v1588 = v3265;
        if (v1588) {
          var v3266 = node$$4.nodeValue;
          v1588 = v3266 === match$$32;
        }
        return v1588;
      }
      function v195(match$$31, context$$8, isXML$$9) {
        var v5005 = context$$8.getElementById;
        var v4339 = typeof v5005;
        var v3267 = v4339 !== "undefined";
        if (v3267) {
          v3267 = !isXML$$9;
        }
        var v1591 = v3267;
        if (v1591) {
          var v1589 = match$$31[1];
          var m$$2 = context$$8.getElementById(v1589);
          var v1590;
          if (m$$2) {
            var v3268;
            var v5313 = m$$2.id;
            var v5314 = match$$31[1];
            var v5006 = v5313 === v5314;
            var v5316 = !v5006;
            if (v5316) {
              var v5496 = m$$2.getAttributeNode;
              var v5446 = typeof v5496;
              var v5315 = v5446 !== "undefined";
              if (v5315) {
                var v5497 = m$$2.getAttributeNode("id");
                var v5447 = v5497.nodeValue;
                var v5448 = match$$31[1];
                v5315 = v5447 === v5448;
              }
              v5006 = v5315;
            }
            var v4340 = v5006;
            if (v4340) {
              v3268 = [m$$2];
            } else {
              v3268 = undefined$$1;
            }
            v1590 = v3268;
          } else {
            v1590 = [];
          }
          return v1590;
        }
        return;
      }
      var form = document$$1.createElement("div");
      var v3269 = new Date;
      var v1592 = v3269.getTime();
      var id$$4 = "script" + v1592;
      var v1593 = "<a name='" + id$$4;
      form.innerHTML = v1593 + "'/>";
      var root$$1 = document$$1.documentElement;
      var v1594 = root$$1.firstChild;
      root$$1.insertBefore(form, v1594);
      var v1597 = document$$1.getElementById(id$$4);
      if (v1597) {
        var v1595 = Expr.find;
        v1595.ID = v195;
        var v1596 = Expr.filter;
        v1596.ID = v196;
      }
      root$$1.removeChild(form);
      root$$1 = form = null;
      return;
    }
    function v194(a$$3, b$$2) {
      var v4341 = a$$3.ownerDocument;
      var v3270 = !v4341;
      var v4343 = !v3270;
      if (v4343) {
        var v4342 = b$$2.ownerDocument;
        v3270 = !v4342;
      }
      var v1600 = v3270;
      if (v1600) {
        var v1598 = a$$3 == b$$2;
        if (v1598) {
          hasDuplicate = true;
        }
        var v1599;
        var v3271 = a$$3.ownerDocument;
        if (v3271) {
          v1599 = -1;
        } else {
          v1599 = 1;
        }
        return v1599;
      }
      var v1601 = a$$3.ownerDocument;
      var aRange = v1601.createRange();
      var v1602 = b$$2.ownerDocument;
      var bRange = v1602.createRange();
      aRange.setStart(a$$3, 0);
      aRange.setEnd(a$$3, 0);
      bRange.setStart(b$$2, 0);
      bRange.setEnd(b$$2, 0);
      var v1603 = Range.START_TO_END;
      var ret$$15 = aRange.compareBoundaryPoints(v1603, bRange);
      var v1604 = ret$$15 === 0;
      if (v1604) {
        hasDuplicate = true;
      }
      return ret$$15;
    }
    function v193(a$$2, b$$1) {
      var v4344 = a$$2.sourceIndex;
      var v3272 = !v4344;
      var v4346 = !v3272;
      if (v4346) {
        var v4345 = b$$1.sourceIndex;
        v3272 = !v4345;
      }
      var v1607 = v3272;
      if (v1607) {
        var v1605 = a$$2 == b$$1;
        if (v1605) {
          hasDuplicate = true;
        }
        var v1606;
        var v3273 = a$$2.sourceIndex;
        if (v3273) {
          v1606 = -1;
        } else {
          v1606 = 1;
        }
        return v1606;
      }
      var v1608 = a$$2.sourceIndex;
      var v1609 = b$$1.sourceIndex;
      var ret$$14 = v1608 - v1609;
      var v1610 = ret$$14 === 0;
      if (v1610) {
        hasDuplicate = true;
      }
      return ret$$14;
    }
    function v192(a$$1, b) {
      var v4347 = a$$1.compareDocumentPosition;
      var v3274 = !v4347;
      var v4349 = !v3274;
      if (v4349) {
        var v4348 = b.compareDocumentPosition;
        v3274 = !v4348;
      }
      var v1613 = v3274;
      if (v1613) {
        var v1611 = a$$1 == b;
        if (v1611) {
          hasDuplicate = true;
        }
        var v1612;
        var v3275 = a$$1.compareDocumentPosition;
        if (v3275) {
          v1612 = -1;
        } else {
          v1612 = 1;
        }
        return v1612;
      }
      var v1614;
      var v4350 = a$$1.compareDocumentPosition(b);
      var v3277 = v4350 & 4;
      if (v3277) {
        v1614 = -1;
      } else {
        var v3276;
        var v4351 = a$$1 === b;
        if (v4351) {
          v3276 = 0;
        } else {
          v3276 = 1;
        }
        v1614 = v3276;
      }
      var ret$$13 = v1614;
      var v1615 = ret$$13 === 0;
      if (v1615) {
        hasDuplicate = true;
      }
      return ret$$13;
    }
    function v191(array$$16, results$$5) {
      var ret$$12 = results$$5 || [];
      var v3278 = toString$$1.call(array$$16);
      var v1622 = v3278 === "[object Array]";
      if (v1622) {
        var v3279 = Array.prototype;
        var v1616 = v3279.push;
        v1616.apply(ret$$12, array$$16);
      } else {
        var v4352 = array$$16.length;
        var v3280 = typeof v4352;
        var v1621 = v3280 === "number";
        if (v1621) {
          var i$$56 = 0;
          var l$$15 = array$$16.length;
          var v1618 = i$$56 < l$$15;
          for (;v1618;) {
            introspect(JAM.policy.p3) {
              var v1617 = array$$16[i$$56]
            }
            ret$$12.push(v1617);
            i$$56 = i$$56 + 1;
            v1618 = i$$56 < l$$15;
          }
        } else {
          i$$56 = 0;
          introspect(JAM.policy.p3) {
            var v1620 = array$$16[i$$56]
          }
          for (;v1620;) {
            introspect(JAM.policy.p3) {
              var v1619 = array$$16[i$$56]
            }
            ret$$12.push(v1619);
            i$$56 = i$$56 + 1;
            introspect(JAM.policy.p3) {
              v1620 = array$$16[i$$56];
            }
          }
        }
      }
      return ret$$12;
    }
    function v190(all$$3, num$$6) {
      var v3281 = num$$6 - 0;
      var v1623 = v3281 + 1;
      return "\\" + v1623;
    }
    function v189(elem$$72, match$$30, i$$55, array$$14) {
      var name$$46 = match$$30[2];
      var v1624 = Expr.setFilters;
      introspect(JAM.policy.p3) {
        var filter$$2 = v1624[name$$46]
      }
      if (filter$$2) {
        return filter$$2(elem$$72, i$$55, match$$30, array$$14);
      }
      return;
    }
    function v188(elem$$71, match$$29) {
      var name$$45 = match$$29[1];
      var v1625;
      var v4353 = Expr.attrHandle;
      introspect(JAM.policy.p3) {
        var v3284 = v4353[name$$45]
      }
      if (v3284) {
        var v3282 = Expr.attrHandle;
        introspect(JAM.policy.p3) {
          v1625 = v3282[name$$45](elem$$71);
        }
      } else {
        var v3283;
        introspect(JAM.policy.p3) {
          var v5007 = elem$$71[name$$45]
        }
        var v4354 = v5007 != null;
        if (v4354) {
          introspect(JAM.policy.p3) {
            v3283 = elem$$71[name$$45];
          }
        } else {
          v3283 = elem$$71.getAttribute(name$$45);
        }
        v1625 = v3283;
      }
      var result$$4 = v1625;
      var value$$37 = result$$4 + "";
      var type$$57 = match$$29[2];
      var check = match$$29[4];
      var v1626;
      var v3286 = result$$4 == null;
      if (v3286) {
        v1626 = type$$57 === "!=";
      } else {
        var v3285;
        var v4356 = type$$57 === "=";
        if (v4356) {
          v3285 = value$$37 === check;
        } else {
          var v4355;
          var v5010 = type$$57 === "*=";
          if (v5010) {
            var v5008 = value$$37.indexOf(check);
            v4355 = v5008 >= 0;
          } else {
            var v5009;
            var v5319 = type$$57 === "~=";
            if (v5319) {
              var v5498 = " " + value$$37;
              var v5449 = v5498 + " ";
              var v5317 = v5449.indexOf(check);
              v5009 = v5317 >= 0;
            } else {
              var v5318;
              var v5452 = !check;
              if (v5452) {
                var v5450 = value$$37;
                if (v5450) {
                  v5450 = result$$4 !== false;
                }
                v5318 = v5450;
              } else {
                var v5451;
                var v5500 = type$$57 === "!=";
                if (v5500) {
                  v5451 = value$$37 !== check;
                } else {
                  var v5499;
                  var v5516 = type$$57 === "^=";
                  if (v5516) {
                    var v5514 = value$$37.indexOf(check);
                    v5499 = v5514 === 0;
                  } else {
                    var v5515;
                    var v5527 = type$$57 === "$=";
                    if (v5527) {
                      var v5532 = value$$37.length;
                      var v5533 = check.length;
                      var v5529 = v5532 - v5533;
                      var v5525 = value$$37.substr(v5529);
                      v5515 = v5525 === check;
                    } else {
                      var v5526;
                      var v5531 = type$$57 === "|=";
                      if (v5531) {
                        var v5530 = value$$37 === check;
                        var v5536 = !v5530;
                        if (v5536) {
                          var v5538 = check.length;
                          var v5537 = v5538 + 1;
                          var v5534 = value$$37.substr(0, v5537);
                          var v5535 = check + "-";
                          v5530 = v5534 === v5535;
                        }
                        v5526 = v5530;
                      } else {
                        v5526 = false;
                      }
                      v5515 = v5526;
                    }
                    v5499 = v5515;
                  }
                  v5451 = v5499;
                }
                v5318 = v5451;
              }
              v5009 = v5318;
            }
            v4355 = v5009;
          }
          v3285 = v4355;
        }
        v1626 = v3285;
      }
      return v1626;
    }
    function v187(elem$$70, match$$28) {
      var v5320 = elem$$70.className;
      var v5453 = !v5320;
      if (v5453) {
        v5320 = elem$$70.getAttribute("class");
      }
      var v5011 = v5320;
      var v4357 = " " + v5011;
      var v3287 = v4357 + " ";
      var v1627 = v3287.indexOf(match$$28);
      return v1627 > -1;
    }
    function v186(elem$$69, match$$27) {
      var v3288 = match$$27 === "*";
      if (v3288) {
        var v4358 = elem$$69.nodeType;
        v3288 = v4358 === 1;
      }
      var v1628 = v3288;
      var v3290 = !v1628;
      if (v3290) {
        var v4359 = elem$$69.nodeName;
        var v3289 = v4359.toLowerCase();
        v1628 = v3289 === match$$27;
      }
      return v1628;
    }
    function v185(elem$$68, match$$26) {
      var v3291 = elem$$68.nodeType;
      var v1629 = v3291 === 1;
      if (v1629) {
        var v3292 = elem$$68.getAttribute("id");
        v1629 = v3292 === match$$26;
      }
      return v1629;
    }
    function v184(elem$$67, match$$25) {
      var type$$56 = match$$25[1];
      var node$$3 = elem$$67;
      switch(type$$56) {
        case "only":
        ;
        case "first":
          var v1631 = node$$3 = node$$3.previousSibling;
          for (;v1631;) {
            var v3293 = node$$3.nodeType;
            var v1630 = v3293 === 1;
            if (v1630) {
              return false;
            }
            v1631 = node$$3 = node$$3.previousSibling;
          }
          var v1632 = type$$56 === "first";
          if (v1632) {
            return true;
          }
          node$$3 = elem$$67;
        case "last":
          var v1634 = node$$3 = node$$3.nextSibling;
          for (;v1634;) {
            var v3294 = node$$3.nodeType;
            var v1633 = v3294 === 1;
            if (v1633) {
              return false;
            }
            v1634 = node$$3 = node$$3.nextSibling;
          }
          return true;
        case "nth":
          var first$$2 = match$$25[2];
          var last = match$$25[3];
          var v3295 = first$$2 === 1;
          if (v3295) {
            v3295 = last === 0;
          }
          var v1635 = v3295;
          if (v1635) {
            return true;
          }
          var doneName$$4 = match$$25[0];
          var parent$$4 = elem$$67.parentNode;
          var v3296 = parent$$4;
          if (v3296) {
            var v5012 = parent$$4.sizcache;
            var v4360 = v5012 !== doneName$$4;
            var v5014 = !v4360;
            if (v5014) {
              var v5013 = elem$$67.nodeIndex;
              v4360 = !v5013;
            }
            v3296 = v4360;
          }
          var v1637 = v3296;
          if (v1637) {
            var count$$3 = 0;
            node$$3 = parent$$4.firstChild;
            for (;node$$3;) {
              var v3297 = node$$3.nodeType;
              var v1636 = v3297 === 1;
              if (v1636) {
                node$$3.nodeIndex = count$$3 = count$$3 + 1;
              }
              node$$3 = node$$3.nextSibling;
            }
            parent$$4.sizcache = doneName$$4;
          }
          var v1638 = elem$$67.nodeIndex;
          var diff = v1638 - last;
          var v1640 = first$$2 === 0;
          if (v1640) {
            return diff === 0;
          } else {
            var v3298 = diff % first$$2;
            var v1639 = v3298 === 0;
            if (v1639) {
              var v3299 = diff / first$$2;
              v1639 = v3299 >= 0;
            }
            return v1639;
          }
        ;
      }
      return;
    }
    function v183(elem$$66, match$$24, i$$54, array$$13) {
      var name$$44 = match$$24[1];
      var v1641 = Expr.filters;
      introspect(JAM.policy.p3) {
        var filter$$1 = v1641[name$$44]
      }
      if (filter$$1) {
        return filter$$1(elem$$66, i$$54, match$$24, array$$13);
      } else {
        var v1647 = name$$44 === "contains";
        if (v1647) {
          var v5321 = elem$$66.textContent;
          var v5454 = !v5321;
          if (v5454) {
            v5321 = elem$$66.innerText;
          }
          var v5015 = v5321;
          var v5323 = !v5015;
          if (v5323) {
            var v5322 = [elem$$66];
            v5015 = getText(v5322);
          }
          var v4361 = v5015;
          var v5016 = !v4361;
          if (v5016) {
            v4361 = "";
          }
          var v3300 = v4361;
          var v3301 = match$$24[3];
          var v1642 = v3300.indexOf(v3301);
          return v1642 >= 0;
        } else {
          var v1646 = name$$44 === "not";
          if (v1646) {
            var not$$4 = match$$24[3];
            i$$54 = 0;
            var l$$14 = not$$4.length;
            var v1644 = i$$54 < l$$14;
            for (;v1644;) {
              introspect(JAM.policy.p3) {
                var v3302 = not$$4[i$$54]
              }
              var v1643 = v3302 === elem$$66;
              if (v1643) {
                return false;
              }
              i$$54 = i$$54 + 1;
              v1644 = i$$54 < l$$14;
            }
            return true;
          } else {
            var v1645 = "Syntax error, unrecognized expression: " + name$$44;
            Sizzle.error(v1645);
          }
        }
      }
      return;
    }
    function v182(elem$$65, i$$53, match$$23) {
      var v3303 = match$$23[3];
      var v1648 = v3303 - 0;
      return v1648 === i$$53;
    }
    function v181(elem$$64, i$$52, match$$22) {
      var v3304 = match$$22[3];
      var v1649 = v3304 - 0;
      return v1649 === i$$52;
    }
    function v180(elem$$63, i$$51, match$$21) {
      var v3305 = match$$21[3];
      var v1650 = v3305 - 0;
      return i$$51 > v1650;
    }
    function v179(elem$$62, i$$50, match$$20) {
      var v3306 = match$$20[3];
      var v1651 = v3306 - 0;
      return i$$50 < v1651;
    }
    function v178(elem$$61, i$$49) {
      var v1652 = i$$49 % 2;
      return v1652 === 1;
    }
    function v177(elem$$60, i$$48) {
      var v1653 = i$$48 % 2;
      return v1653 === 0;
    }
    function v176(elem$$59, i$$47, match$$19, array$$12) {
      var v3307 = array$$12.length;
      var v1654 = v3307 - 1;
      return i$$47 === v1654;
    }
    function v175(elem$$58, i$$46) {
      return i$$46 === 0;
    }
    function v174(elem$$57) {
      var v1655 = elem$$57.nodeName;
      return/input|select|textarea|button/i.test(v1655);
    }
    function v173(elem$$56) {
      var v3308 = elem$$56.type;
      var v1656 = "button" === v3308;
      var v3310 = !v1656;
      if (v3310) {
        var v4362 = elem$$56.nodeName;
        var v3309 = v4362.toLowerCase();
        v1656 = v3309 === "button";
      }
      return v1656;
    }
    function v172(elem$$55) {
      var v1657 = elem$$55.type;
      return "reset" === v1657;
    }
    function v171(elem$$54) {
      var v1658 = elem$$54.type;
      return "image" === v1658;
    }
    function v170(elem$$53) {
      var v1659 = elem$$53.type;
      return "submit" === v1659;
    }
    function v169(elem$$52) {
      var v1660 = elem$$52.type;
      return "password" === v1660;
    }
    function v168(elem$$51) {
      var v1661 = elem$$51.type;
      return "file" === v1661;
    }
    function v167(elem$$50) {
      var v1662 = elem$$50.type;
      return "checkbox" === v1662;
    }
    function v166(elem$$49) {
      var v1663 = elem$$49.type;
      return "radio" === v1663;
    }
    function v165(elem$$48) {
      var v1664 = elem$$48.type;
      return "text" === v1664;
    }
    function v164(elem$$47) {
      var v1665 = elem$$47.nodeName;
      return/h\d/i.test(v1665);
    }
    function v163(elem$$46, i$$45, match$$18) {
      var v5017 = match$$18[3];
      var v4363 = Sizzle(v5017, elem$$46);
      var v3311 = v4363.length;
      var v1666 = !v3311;
      return!v1666;
    }
    function v162(elem$$45) {
      var v1667 = elem$$45.firstChild;
      return!v1667;
    }
    function v161(elem$$44) {
      var v3312 = elem$$44.firstChild;
      var v1668 = !v3312;
      return!v1668;
    }
    function v160(elem$$43) {
      var v1669 = elem$$43.selected;
      return v1669 === true;
    }
    function v159(elem$$42) {
      var v1670 = elem$$42.checked;
      return v1670 === true;
    }
    function v158(elem$$41) {
      var v1671 = elem$$41.disabled;
      return v1671 === true;
    }
    function v157(elem$$40) {
      var v3313 = elem$$40.disabled;
      var v1672 = v3313 === false;
      if (v1672) {
        var v3314 = elem$$40.type;
        v1672 = v3314 !== "hidden";
      }
      return v1672;
    }
    function v156(match$$17) {
      match$$17.unshift(true);
      return match$$17;
    }
    function v155(match$$16, curLoop$$4, inplace$$3, result$$3, not$$3) {
      var v3315 = match$$16[1];
      var v1680 = v3315 === "not";
      if (v1680) {
        var v5455 = match$$16[3];
        var v5324 = chunker.exec(v5455);
        var v5456 = !v5324;
        if (v5456) {
          v5324 = "";
        }
        var v5018 = v5324;
        var v4364 = v5018.length;
        var v3316 = v4364 > 1;
        var v4366 = !v3316;
        if (v4366) {
          var v4365 = match$$16[3];
          v3316 = /^\w/.test(v4365);
        }
        var v1678 = v3316;
        if (v1678) {
          var v1673 = match$$16;
          var v3317 = match$$16[3];
          var v5584 = Sizzle(v3317, null, null, curLoop$$4);
          v1673[3] = v5584;
        } else {
          var v1674 = match$$16[3];
          var v1675 = true ^ not$$3;
          var ret$$11 = Sizzle.filter(v1674, curLoop$$4, inplace$$3, v1675);
          var v1677 = !inplace$$3;
          if (v1677) {
            var v1676 = result$$3.push;
            v1676.apply(result$$3, ret$$11);
          }
          return false;
        }
      } else {
        var v5019 = Expr.match;
        var v4367 = v5019.POS;
        var v4368 = match$$16[0];
        var v3318 = v4367.test(v4368);
        var v4371 = !v3318;
        if (v4371) {
          var v5020 = Expr.match;
          var v4369 = v5020.CHILD;
          var v4370 = match$$16[0];
          v3318 = v4369.test(v4370);
        }
        var v1679 = v3318;
        if (v1679) {
          return true;
        }
      }
      return match$$16;
    }
    function v154(match$$15, curLoop$$3, inplace$$2, result$$2, not$$2, isXML$$8) {
      var v1681 = match$$15[1];
      var name$$43 = v1681.replace(/\\/g, "");
      var v3319 = !isXML$$8;
      if (v3319) {
        var v4372 = Expr.attrMap;
        introspect(JAM.policy.p3) {
          v3319 = v4372[name$$43];
        }
      }
      var v1683 = v3319;
      if (v1683) {
        var v1682 = Expr.attrMap;
        introspect(JAM.policy.p3) {
          match$$15[1] = v1682[name$$43];
        }
      }
      var v3320 = match$$15[2];
      var v1685 = v3320 === "~=";
      if (v1685) {
        var v3321 = match$$15[4];
        var v1684 = " " + v3321;
        match$$15[4] = v1684 + " ";
      }
      return match$$15;
    }
    function v153(match$$14) {
      var v3322 = match$$14[1];
      var v1689 = v3322 === "nth";
      if (v1689) {
        var v5457 = match$$14[2];
        var v5325 = v5457 === "even";
        if (v5325) {
          v5325 = "2n";
        }
        var v5021 = v5325;
        var v5327 = !v5021;
        if (v5327) {
          var v5458 = match$$14[2];
          var v5326 = v5458 === "odd";
          if (v5326) {
            v5326 = "2n+1";
          }
          v5021 = v5326;
        }
        var v4373 = v5021;
        var v5023 = !v4373;
        if (v5023) {
          var v5459 = match$$14[2];
          var v5328 = /\D/.test(v5459);
          var v5022 = !v5328;
          if (v5022) {
            var v5329 = match$$14[2];
            v5022 = "0n+" + v5329;
          }
          v4373 = v5022;
        }
        var v3323 = v4373;
        var v4374 = !v3323;
        if (v4374) {
          v3323 = match$$14[2];
        }
        var v1686 = v3323;
        var test = /(-?)(\d*)n((?:\+|-)?\d*)/.exec(v1686);
        var v3324 = test[1];
        var v4375 = test[2];
        var v5024 = !v4375;
        if (v5024) {
          v4375 = 1;
        }
        var v3325 = v4375;
        var v1687 = v3324 + v3325;
        match$$14[2] = v1687 - 0;
        var v1688 = test[3];
        match$$14[3] = v1688 - 0;
      }
      match$$14[0] = done;
      done = done + 1;
      return match$$14;
    }
    function v152(match$$13, curLoop$$2) {
      var v1690 = match$$13[1];
      return v1690.toLowerCase();
    }
    function v151(match$$12) {
      var v1691 = match$$12[1];
      return v1691.replace(/\\/g, "");
    }
    function v150(match$$11, curLoop$$1, inplace$$1, result$$1, not$$1, isXML$$7) {
      var v4376 = match$$11[1];
      var v3326 = v4376.replace(/\\/g, "");
      var v1692 = " " + v3326;
      match$$11 = v1692 + " ";
      if (isXML$$7) {
        return match$$11;
      }
      var i$$44 = 0;
      var elem$$39;
      introspect(JAM.policy.p3) {
        var v3327 = elem$$39 = curLoop$$1[i$$44]
      }
      var v1695 = v3327 != null;
      for (;v1695;) {
        if (elem$$39) {
          var v3328 = not$$1;
          var v4377 = elem$$39.className;
          if (v4377) {
            var v5517 = elem$$39.className;
            var v5501 = " " + v5517;
            var v5460 = v5501 + " ";
            var v5330 = v5460.replace(/[\t\n]/g, " ");
            var v5025 = v5330.indexOf(match$$11);
            v4377 = v5025 >= 0;
          }
          var v3329 = v4377;
          var v1694 = v3328 ^ v3329;
          if (v1694) {
            var v1693 = !inplace$$1;
            if (v1693) {
              result$$1.push(elem$$39);
            }
          } else {
            if (inplace$$1) {
              introspect(JAM.policy.p2) {
                curLoop$$1[i$$44] = false;
              }
            }
          }
        }
        i$$44 = i$$44 + 1;
        introspect(JAM.policy.p3) {
          var v3330 = elem$$39 = curLoop$$1[i$$44]
        }
        v1695 = v3330 != null;
      }
      return false;
    }
    function v149(match$$10, context$$7) {
      var v1696 = match$$10[1];
      return context$$7.getElementsByTagName(v1696);
    }
    function v148(match$$9, context$$6) {
      var v4378 = context$$6.getElementsByName;
      var v3331 = typeof v4378;
      var v1702 = v3331 !== "undefined";
      if (v1702) {
        var ret$$10 = [];
        var v1697 = match$$9[1];
        var results$$3 = context$$6.getElementsByName(v1697);
        var i$$43 = 0;
        var l$$13 = results$$3.length;
        var v1700 = i$$43 < l$$13;
        for (;v1700;) {
          introspect(JAM.policy.p3) {
            var v4379 = results$$3[i$$43]
          }
          var v3332 = v4379.getAttribute("name");
          var v3333 = match$$9[1];
          var v1699 = v3332 === v3333;
          if (v1699) {
            introspect(JAM.policy.p3) {
              var v1698 = results$$3[i$$43]
            }
            ret$$10.push(v1698);
          }
          i$$43 = i$$43 + 1;
          v1700 = i$$43 < l$$13;
        }
        var v1701;
        var v4380 = ret$$10.length;
        var v3334 = v4380 === 0;
        if (v3334) {
          v1701 = null;
        } else {
          v1701 = ret$$10;
        }
        return v1701;
      }
      return;
    }
    function v147(match$$8, context$$5, isXML$$6) {
      var v5026 = context$$5.getElementById;
      var v4381 = typeof v5026;
      var v3335 = v4381 !== "undefined";
      if (v3335) {
        v3335 = !isXML$$6;
      }
      var v1705 = v3335;
      if (v1705) {
        var v1703 = match$$8[1];
        var m$$1 = context$$5.getElementById(v1703);
        var v1704;
        if (m$$1) {
          v1704 = [m$$1];
        } else {
          v1704 = [];
        }
        return v1704;
      }
      return;
    }
    function v146(checkSet$$6, part$$3, isXML$$5) {
      var doneName$$3 = done;
      done = done + 1;
      var checkFn$$1 = dirCheck;
      var v4382 = typeof part$$3;
      var v3336 = v4382 === "string";
      if (v3336) {
        var v4383 = /\W/.test(part$$3);
        v3336 = !v4383;
      }
      var v1706 = v3336;
      if (v1706) {
        var nodeCheck$$3 = part$$3 = part$$3.toLowerCase();
        checkFn$$1 = dirNodeCheck;
      }
      checkFn$$1("previousSibling", part$$3, doneName$$3, checkSet$$6, nodeCheck$$3, isXML$$5);
      return;
    }
    function v145(checkSet$$5, part$$2, isXML$$4) {
      var doneName$$2 = done;
      done = done + 1;
      var checkFn = dirCheck;
      var v4384 = typeof part$$2;
      var v3337 = v4384 === "string";
      if (v3337) {
        var v4385 = /\W/.test(part$$2);
        v3337 = !v4385;
      }
      var v1707 = v3337;
      if (v1707) {
        var nodeCheck$$2 = part$$2 = part$$2.toLowerCase();
        checkFn = dirNodeCheck;
      }
      checkFn("parentNode", part$$2, doneName$$2, checkSet$$5, nodeCheck$$2, isXML$$4);
      return;
    }
    function v144(checkSet$$4, part$$1) {
      var v1708 = typeof part$$1;
      var isPartStr$$1 = v1708 === "string";
      var v3338 = isPartStr$$1;
      if (v3338) {
        var v4386 = /\W/.test(part$$1);
        v3338 = !v4386;
      }
      var v1714 = v3338;
      if (v1714) {
        part$$1 = part$$1.toLowerCase();
        var i$$42 = 0;
        var l$$12 = checkSet$$4.length;
        var v1711 = i$$42 < l$$12;
        for (;v1711;) {
          introspect(JAM.policy.p3) {
            var elem$$38 = checkSet$$4[i$$42]
          }
          if (elem$$38) {
            var parent$$3 = elem$$38.parentNode;
            var v1709 = checkSet$$4;
            var v1710 = i$$42;
            var v3339;
            var v5331 = parent$$3.nodeName;
            var v5027 = v5331.toLowerCase();
            var v4387 = v5027 === part$$1;
            if (v4387) {
              v3339 = parent$$3;
            } else {
              v3339 = false;
            }
            introspect(JAM.policy.p2) {
              v1709[v1710] = v3339;
            }
          }
          i$$42 = i$$42 + 1;
          v1711 = i$$42 < l$$12;
        }
      } else {
        i$$42 = 0;
        l$$12 = checkSet$$4.length;
        var v1713 = i$$42 < l$$12;
        for (;v1713;) {
          introspect(JAM.policy.p3) {
            elem$$38 = checkSet$$4[i$$42];
          }
          if (elem$$38) {
            var v1712;
            if (isPartStr$$1) {
              v1712 = elem$$38.parentNode;
            } else {
              var v3340 = elem$$38.parentNode;
              v1712 = v3340 === part$$1;
            }
            introspect(JAM.policy.p2) {
              checkSet$$4[i$$42] = v1712;
            }
          }
          i$$42 = i$$42 + 1;
          v1713 = i$$42 < l$$12;
        }
        if (isPartStr$$1) {
          Sizzle.filter(part$$1, checkSet$$4, true);
        }
      }
      return;
    }
    function v143(checkSet$$3, part) {
      var v1715 = typeof part;
      var isPartStr = v1715 === "string";
      var v1716 = isPartStr;
      if (v1716) {
        var v3341 = /\W/.test(part);
        v1716 = !v3341;
      }
      var isTag = v1716;
      var v1717 = isPartStr;
      if (v1717) {
        v1717 = !isTag;
      }
      var isPartStrNotTag = v1717;
      if (isTag) {
        part = part.toLowerCase();
      }
      var i$$41 = 0;
      var l$$11 = checkSet$$3.length;
      var elem$$37;
      var v1722 = i$$41 < l$$11;
      for (;v1722;) {
        introspect(JAM.policy.p3) {
          var v1721 = elem$$37 = checkSet$$3[i$$41]
        }
        if (v1721) {
          var v3342 = elem$$37 = elem$$37.previousSibling;
          if (v3342) {
            var v4388 = elem$$37.nodeType;
            v3342 = v4388 !== 1;
          }
          var v1718 = v3342;
          for (;v1718;) {
            var v3343 = elem$$37 = elem$$37.previousSibling;
            if (v3343) {
              var v4389 = elem$$37.nodeType;
              v3343 = v4389 !== 1;
            }
            v1718 = v3343;
          }
          var v1719 = checkSet$$3;
          var v1720 = i$$41;
          var v3344;
          var v5028 = isPartStrNotTag;
          var v5333 = !v5028;
          if (v5333) {
            var v5332 = elem$$37;
            if (v5332) {
              var v5502 = elem$$37.nodeName;
              var v5461 = v5502.toLowerCase();
              v5332 = v5461 === part;
            }
            v5028 = v5332;
          }
          var v4390 = v5028;
          if (v4390) {
            v3344 = elem$$37 || false;
          } else {
            v3344 = elem$$37 === part;
          }
          introspect(JAM.policy.p2) {
            v1719[v1720] = v3344;
          }
        }
        i$$41 = i$$41 + 1;
        v1722 = i$$41 < l$$11;
      }
      if (isPartStrNotTag) {
        Sizzle.filter(part, checkSet$$3, true);
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
      var v3345 = set$$4;
      if (v3345) {
        v3345 = set$$4[0];
      }
      var v1723 = v3345;
      if (v1723) {
        var v3346 = set$$4[0];
        v1723 = isXML(v3346);
      }
      var isXMLFilter = v1723;
      var v3347 = expr$$5;
      if (v3347) {
        v3347 = set$$4.length;
      }
      var v1742 = v3347;
      for (;v1742;) {
        var type$$55;
        var v1739 = Expr.filter;
        for (type$$55 in v1739) {
          var v5334 = Expr.leftMatch;
          introspect(JAM.policy.p3) {
            var v5029 = v5334[type$$55]
          }
          var v4391 = match$$7 = v5029.exec(expr$$5);
          var v3348 = v4391 != null;
          if (v3348) {
            v3348 = match$$7[2];
          }
          var v1738 = v3348;
          if (v1738) {
            var v1724 = Expr.filter;
            introspect(JAM.policy.p3) {
              var filter = v1724[type$$55]
            }
            var found;
            var item;
            var left$$2 = match$$7[1];
            anyFound = false;
            match$$7.splice(1, 1);
            var v5030 = left$$2.length;
            var v4392 = v5030 - 1;
            var v3349 = left$$2.substr(v4392);
            var v1725 = v3349 === "\\";
            if (v1725) {
              continue;
            }
            var v1726 = curLoop === result;
            if (v1726) {
              result = [];
            }
            var v3350 = Expr.preFilter;
            introspect(JAM.policy.p3) {
              var v1730 = v3350[type$$55]
            }
            if (v1730) {
              var v1727 = Expr.preFilter;
              introspect(JAM.policy.p3) {
                match$$7 = v1727[type$$55](match$$7, curLoop, inplace, result, not, isXMLFilter);
              }
              var v1729 = !match$$7;
              if (v1729) {
                anyFound = found = true;
              } else {
                var v1728 = match$$7 === true;
                if (v1728) {
                  continue;
                }
              }
            }
            if (match$$7) {
              var i$$40 = 0;
              introspect(JAM.policy.p3) {
                var v3351 = item = curLoop[i$$40]
              }
              var v1733 = v3351 != null;
              for (;v1733;) {
                if (item) {
                  found = filter(item, match$$7, i$$40, curLoop);
                  var v3352 = !found;
                  var v1731 = !v3352;
                  var pass$$2 = not ^ v1731;
                  var v3353 = inplace;
                  if (v3353) {
                    v3353 = found != null;
                  }
                  var v1732 = v3353;
                  if (v1732) {
                    if (pass$$2) {
                      anyFound = true;
                    } else {
                      introspect(JAM.policy.p2) {
                        curLoop[i$$40] = false;
                      }
                    }
                  } else {
                    if (pass$$2) {
                      result.push(item);
                      anyFound = true;
                    }
                  }
                }
                i$$40 = i$$40 + 1;
                introspect(JAM.policy.p3) {
                  var v3354 = item = curLoop[i$$40]
                }
                v1733 = v3354 != null;
              }
            }
            var v1737 = found !== undefined$$1;
            if (v1737) {
              var v1734 = !inplace;
              if (v1734) {
                curLoop = result;
              }
              var v3355 = Expr.match;
              introspect(JAM.policy.p3) {
                var v1735 = v3355[type$$55]
              }
              expr$$5 = expr$$5.replace(v1735, "");
              var v1736 = !anyFound;
              if (v1736) {
                return[];
              }
              break;
            }
          }
        }
        var v1741 = expr$$5 === old$$1;
        if (v1741) {
          var v1740 = anyFound == null;
          if (v1740) {
            Sizzle.error(expr$$5);
          } else {
            break;
          }
        }
        old$$1 = expr$$5;
        var v3356 = expr$$5;
        if (v3356) {
          v3356 = set$$4.length;
        }
        v1742 = v3356;
      }
      return curLoop;
    }
    function v139(expr$$4, context$$4, isXML$$3) {
      var set$$3;
      var match$$6;
      var v1743 = !expr$$4;
      if (v1743) {
        return[];
      }
      var i$$39 = 0;
      var v1744 = Expr.order;
      var l$$10 = v1744.length;
      var v1752 = i$$39 < l$$10;
      for (;v1752;) {
        var v1745 = Expr.order;
        introspect(JAM.policy.p3) {
          var type$$54 = v1745[i$$39]
        }
        var v4393 = Expr.leftMatch;
        introspect(JAM.policy.p3) {
          var v3357 = v4393[type$$54]
        }
        var v1751 = match$$6 = v3357.exec(expr$$4);
        if (v1751) {
          var left$$1 = match$$6[1];
          match$$6.splice(1, 1);
          var v5031 = left$$1.length;
          var v4394 = v5031 - 1;
          var v3358 = left$$1.substr(v4394);
          var v1750 = v3358 !== "\\";
          if (v1750) {
            var v1746 = match$$6;
            var v4395 = match$$6[1];
            var v5032 = !v4395;
            if (v5032) {
              v4395 = "";
            }
            var v3359 = v4395;
            var v5585 = v3359.replace(/\\/g, "");
            v1746[1] = v5585;
            var v1747 = Expr.find;
            introspect(JAM.policy.p3) {
              set$$3 = v1747[type$$54](match$$6, context$$4, isXML$$3);
            }
            var v1749 = set$$3 != null;
            if (v1749) {
              var v3360 = Expr.match;
              introspect(JAM.policy.p3) {
                var v1748 = v3360[type$$54]
              }
              expr$$4 = expr$$4.replace(v1748, "");
              break;
            }
          }
        }
        i$$39 = i$$39 + 1;
        v1752 = i$$39 < l$$10;
      }
      var v1753 = !set$$3;
      if (v1753) {
        set$$3 = context$$4.getElementsByTagName("*");
      }
      return{set:set$$3, expr:expr$$4};
    }
    function v138(expr$$3, set$$2) {
      return Sizzle(expr$$3, null, null, set$$2);
    }
    function v137(results$$2) {
      if (sortOrder) {
        hasDuplicate = baseHasDuplicate;
        results$$2.sort(sortOrder);
        if (hasDuplicate) {
          var i$$38 = 1;
          var v3361 = results$$2.length;
          var v1756 = i$$38 < v3361;
          for (;v1756;) {
            introspect(JAM.policy.p3) {
              var v3362 = results$$2[i$$38]
            }
            var v4396 = i$$38 - 1;
            introspect(JAM.policy.p3) {
              var v3363 = results$$2[v4396]
            }
            var v1755 = v3362 === v3363;
            if (v1755) {
              var v1754 = i$$38;
              i$$38 = i$$38 - 1;
              results$$2.splice(v1754, 1);
            }
            i$$38 = i$$38 + 1;
            var v3364 = results$$2.length;
            v1756 = i$$38 < v3364;
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
      var v1757;
      var v3365 = context$$12.nodeType;
      if (v3365) {
        v1757 = [context$$12];
      } else {
        v1757 = context$$12;
      }
      var root$$2 = v1757;
      var v4397 = Expr.match;
      var v3366 = v4397.PSEUDO;
      var v1759 = match$$35 = v3366.exec(selector$$9);
      for (;v1759;) {
        var v3367 = match$$35[0];
        later = later + v3367;
        var v3368 = Expr.match;
        var v1758 = v3368.PSEUDO;
        selector$$9 = selector$$9.replace(v1758, "");
        var v4398 = Expr.match;
        var v3369 = v4398.PSEUDO;
        v1759 = match$$35 = v3369.exec(selector$$9);
      }
      var v1760;
      var v4399 = Expr.relative;
      introspect(JAM.policy.p3) {
        var v3370 = v4399[selector$$9]
      }
      if (v3370) {
        v1760 = selector$$9 + "*";
      } else {
        v1760 = selector$$9;
      }
      selector$$9 = v1760;
      var i$$58 = 0;
      var l$$16 = root$$2.length;
      var v1762 = i$$58 < l$$16;
      for (;v1762;) {
        introspect(JAM.policy.p3) {
          var v1761 = root$$2[i$$58]
        }
        Sizzle(selector$$9, v1761, tmpSet);
        i$$58 = i$$58 + 1;
        v1762 = i$$58 < l$$16;
      }
      return Sizzle.filter(later, tmpSet);
    }
    function isXML(elem$$75) {
      var v3371;
      if (elem$$75) {
        var v4400 = elem$$75.ownerDocument;
        var v5033 = !v4400;
        if (v5033) {
          v4400 = elem$$75;
        }
        v3371 = v4400;
      } else {
        v3371 = 0;
      }
      var v1763 = v3371;
      var documentElement = v1763.documentElement;
      var v1764;
      if (documentElement) {
        var v3372 = documentElement.nodeName;
        v1764 = v3372 !== "HTML";
      } else {
        v1764 = false;
      }
      return v1764;
    }
    function makeArray(array$$15, results$$4) {
      var v3373 = Array.prototype;
      var v1765 = v3373.slice;
      array$$15 = v1765.call(array$$15, 0);
      if (results$$4) {
        var v1766 = results$$4.push;
        v1766.apply(results$$4, array$$15);
        return results$$4;
      }
      return array$$15;
    }
    function Sizzle(selector$$8, context$$3, results$$1, seed) {
      results$$1 = results$$1 || [];
      var origContext = context$$3 = context$$3 || document$$1;
      var v4401 = context$$3.nodeType;
      var v3374 = v4401 !== 1;
      if (v3374) {
        var v4402 = context$$3.nodeType;
        v3374 = v4402 !== 9;
      }
      var v1767 = v3374;
      if (v1767) {
        return[];
      }
      var v3375 = !selector$$8;
      var v4404 = !v3375;
      if (v4404) {
        var v4403 = typeof selector$$8;
        v3375 = v4403 !== "string";
      }
      var v1768 = v3375;
      if (v1768) {
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
      var v3376 = m = chunker.exec(soFar);
      var v1771 = v3376 !== null;
      for (;v1771;) {
        soFar = m[3];
        var v1769 = m[1];
        parts$$1.push(v1769);
        var v1770 = m[2];
        if (v1770) {
          extra = m[3];
          break;
        }
        chunker.exec("");
        var v3377 = m = chunker.exec(soFar);
        v1771 = v3377 !== null;
      }
      var v4405 = parts$$1.length;
      var v3378 = v4405 > 1;
      if (v3378) {
        v3378 = origPOS.exec(selector$$8);
      }
      var v1787 = v3378;
      if (v1787) {
        var v4406 = parts$$1.length;
        var v3379 = v4406 === 2;
        if (v3379) {
          var v4407 = Expr.relative;
          var v4408 = parts$$1[0];
          introspect(JAM.policy.p3) {
            v3379 = v4407[v4408];
          }
        }
        var v1776 = v3379;
        if (v1776) {
          var v3380 = parts$$1[0];
          var v3381 = parts$$1[1];
          var v1772 = v3380 + v3381;
          set$$1 = posProcess(v1772, context$$3);
        } else {
          var v1773;
          var v4409 = Expr.relative;
          var v4410 = parts$$1[0];
          introspect(JAM.policy.p3) {
            var v3383 = v4409[v4410]
          }
          if (v3383) {
            v1773 = [context$$3];
          } else {
            var v3382 = parts$$1.shift();
            v1773 = Sizzle(v3382, context$$3);
          }
          set$$1 = v1773;
          var v1775 = parts$$1.length;
          for (;v1775;) {
            selector$$8 = parts$$1.shift();
            var v3384 = Expr.relative;
            introspect(JAM.policy.p3) {
              var v1774 = v3384[selector$$8]
            }
            if (v1774) {
              var v3385 = selector$$8;
              var v3386 = parts$$1.shift();
              selector$$8 = v3385 + v3386;
            }
            set$$1 = posProcess(selector$$8, set$$1);
            v1775 = parts$$1.length;
          }
        }
      } else {
        var v5462 = !seed;
        if (v5462) {
          var v5503 = parts$$1.length;
          v5462 = v5503 > 1;
        }
        var v5335 = v5462;
        if (v5335) {
          var v5463 = context$$3.nodeType;
          v5335 = v5463 === 9;
        }
        var v5034 = v5335;
        if (v5034) {
          v5034 = !contextXML;
        }
        var v4411 = v5034;
        if (v4411) {
          var v5336 = Expr.match;
          var v5035 = v5336.ID;
          var v5036 = parts$$1[0];
          v4411 = v5035.test(v5036);
        }
        var v3387 = v4411;
        if (v3387) {
          var v5337 = Expr.match;
          var v5037 = v5337.ID;
          var v5464 = parts$$1.length;
          var v5338 = v5464 - 1;
          introspect(JAM.policy.p3) {
            var v5038 = parts$$1[v5338]
          }
          var v4412 = v5037.test(v5038);
          v3387 = !v4412;
        }
        var v1779 = v3387;
        if (v1779) {
          var v1777 = parts$$1.shift();
          var ret$$9 = Sizzle.find(v1777, context$$3, contextXML);
          var v1778;
          var v3390 = ret$$9.expr;
          if (v3390) {
            var v4413 = ret$$9.expr;
            var v4414 = ret$$9.set;
            var v3388 = Sizzle.filter(v4413, v4414);
            v1778 = v3388[0];
          } else {
            var v3389 = ret$$9.set;
            v1778 = v3389[0];
          }
          context$$3 = v1778;
        }
        if (context$$3) {
          var v1780;
          if (seed) {
            var v3391 = parts$$1.pop();
            var v3392 = makeArray(seed);
            v1780 = {expr:v3391, set:v3392};
          } else {
            var v3393 = parts$$1.pop();
            var v4415;
            var v5504 = parts$$1.length;
            var v5465 = v5504 === 1;
            if (v5465) {
              var v5518 = parts$$1[0];
              var v5505 = v5518 === "~";
              var v5520 = !v5505;
              if (v5520) {
                var v5519 = parts$$1[0];
                v5505 = v5519 === "+";
              }
              v5465 = v5505;
            }
            var v5339 = v5465;
            if (v5339) {
              v5339 = context$$3.parentNode;
            }
            var v5039 = v5339;
            if (v5039) {
              v4415 = context$$3.parentNode;
            } else {
              v4415 = context$$3;
            }
            var v3394 = v4415;
            v1780 = Sizzle.find(v3393, v3394, contextXML);
          }
          ret$$9 = v1780;
          var v1781;
          var v3397 = ret$$9.expr;
          if (v3397) {
            var v3395 = ret$$9.expr;
            var v3396 = ret$$9.set;
            v1781 = Sizzle.filter(v3395, v3396);
          } else {
            v1781 = ret$$9.set;
          }
          set$$1 = v1781;
          var v3398 = parts$$1.length;
          var v1782 = v3398 > 0;
          if (v1782) {
            checkSet$$2 = makeArray(set$$1);
          } else {
            prune = false;
          }
          var v1786 = parts$$1.length;
          for (;v1786;) {
            var cur$$2 = parts$$1.pop();
            var pop = cur$$2;
            var v4416 = Expr.relative;
            introspect(JAM.policy.p3) {
              var v3399 = v4416[cur$$2]
            }
            var v1783 = !v3399;
            if (v1783) {
              cur$$2 = "";
            } else {
              pop = parts$$1.pop();
            }
            var v1784 = pop == null;
            if (v1784) {
              pop = context$$3;
            }
            var v1785 = Expr.relative;
            introspect(JAM.policy.p3) {
              v1785[cur$$2](checkSet$$2, pop, contextXML);
            }
            v1786 = parts$$1.length;
          }
        } else {
          checkSet$$2 = parts$$1 = [];
        }
      }
      var v1788 = !checkSet$$2;
      if (v1788) {
        checkSet$$2 = set$$1;
      }
      var v1790 = !checkSet$$2;
      if (v1790) {
        var v1789 = cur$$2 || selector$$8;
        Sizzle.error(v1789);
      }
      var v3400 = toString$$1.call(checkSet$$2);
      var v1800 = v3400 === "[object Array]";
      if (v1800) {
        var v1799 = !prune;
        if (v1799) {
          var v1791 = results$$1.push;
          v1791.apply(results$$1, checkSet$$2);
        } else {
          var v3401 = context$$3;
          if (v3401) {
            var v4417 = context$$3.nodeType;
            v3401 = v4417 === 1;
          }
          var v1798 = v3401;
          if (v1798) {
            var i$$37 = 0;
            introspect(JAM.policy.p3) {
              var v3402 = checkSet$$2[i$$37]
            }
            var v1794 = v3402 != null;
            for (;v1794;) {
              introspect(JAM.policy.p3) {
                var v3403 = checkSet$$2[i$$37]
              }
              if (v3403) {
                introspect(JAM.policy.p3) {
                  var v5040 = checkSet$$2[i$$37]
                }
                var v4418 = v5040 === true;
                var v5042 = !v4418;
                if (v5042) {
                  introspect(JAM.policy.p3) {
                    var v5466 = checkSet$$2[i$$37]
                  }
                  var v5340 = v5466.nodeType;
                  var v5041 = v5340 === 1;
                  if (v5041) {
                    introspect(JAM.policy.p3) {
                      var v5341 = checkSet$$2[i$$37]
                    }
                    v5041 = contains(context$$3, v5341);
                  }
                  v4418 = v5041;
                }
                v3403 = v4418;
              }
              var v1793 = v3403;
              if (v1793) {
                introspect(JAM.policy.p3) {
                  var v1792 = set$$1[i$$37]
                }
                results$$1.push(v1792);
              }
              i$$37 = i$$37 + 1;
              introspect(JAM.policy.p3) {
                var v3404 = checkSet$$2[i$$37]
              }
              v1794 = v3404 != null;
            }
          } else {
            i$$37 = 0;
            introspect(JAM.policy.p3) {
              var v3405 = checkSet$$2[i$$37]
            }
            var v1797 = v3405 != null;
            for (;v1797;) {
              introspect(JAM.policy.p3) {
                var v3406 = checkSet$$2[i$$37]
              }
              if (v3406) {
                introspect(JAM.policy.p3) {
                  var v5043 = checkSet$$2[i$$37]
                }
                var v4419 = v5043.nodeType;
                v3406 = v4419 === 1;
              }
              var v1796 = v3406;
              if (v1796) {
                introspect(JAM.policy.p3) {
                  var v1795 = set$$1[i$$37]
                }
                results$$1.push(v1795);
              }
              i$$37 = i$$37 + 1;
              introspect(JAM.policy.p3) {
                var v3407 = checkSet$$2[i$$37]
              }
              v1797 = v3407 != null;
            }
          }
        }
      } else {
        makeArray(checkSet$$2, results$$1);
      }
      if (extra) {
        Sizzle(extra, origContext, results$$1, seed);
        Sizzle.uniqueSort(results$$1);
      }
      return results$$1;
    }
    function getText(elems$$5) {
      var ret$$8 = "";
      var elem$$33;
      var i$$34 = 0;
      introspect(JAM.policy.p3) {
        var v1803 = elems$$5[i$$34]
      }
      for (;v1803;) {
        introspect(JAM.policy.p3) {
          elem$$33 = elems$$5[i$$34];
        }
        var v4420 = elem$$33.nodeType;
        var v3408 = v4420 === 3;
        var v4422 = !v3408;
        if (v4422) {
          var v4421 = elem$$33.nodeType;
          v3408 = v4421 === 4;
        }
        var v1802 = v3408;
        if (v1802) {
          var v3409 = elem$$33.nodeValue;
          ret$$8 = ret$$8 + v3409;
        } else {
          var v3410 = elem$$33.nodeType;
          var v1801 = v3410 !== 8;
          if (v1801) {
            var v3411 = ret$$8;
            var v4423 = elem$$33.childNodes;
            var v3412 = getText(v4423);
            ret$$8 = v3411 + v3412;
          }
        }
        i$$34 = i$$34 + 1;
        introspect(JAM.policy.p3) {
          v1803 = elems$$5[i$$34];
        }
      }
      return ret$$8;
    }
    function dirNodeCheck(dir, cur, doneName, checkSet, nodeCheck, isXML$$1) {
      var i$$35 = 0;
      var l$$8 = checkSet.length;
      var v1808 = i$$35 < l$$8;
      for (;v1808;) {
        introspect(JAM.policy.p3) {
          var elem$$34 = checkSet[i$$35]
        }
        if (elem$$34) {
          introspect(JAM.policy.p3) {
            elem$$34 = elem$$34[dir];
          }
          var match$$4 = false;
          for (;elem$$34;) {
            var v3413 = elem$$34.sizcache;
            var v1805 = v3413 === doneName;
            if (v1805) {
              var v1804 = elem$$34.sizset;
              introspect(JAM.policy.p3) {
                match$$4 = checkSet[v1804];
              }
              break;
            }
            var v4424 = elem$$34.nodeType;
            var v3414 = v4424 === 1;
            if (v3414) {
              v3414 = !isXML$$1;
            }
            var v1806 = v3414;
            if (v1806) {
              elem$$34.sizcache = doneName;
              elem$$34.sizset = i$$35;
            }
            var v4425 = elem$$34.nodeName;
            var v3415 = v4425.toLowerCase();
            var v1807 = v3415 === cur;
            if (v1807) {
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
        i$$35 = i$$35 + 1;
        v1808 = i$$35 < l$$8;
      }
      return;
    }
    function dirCheck(dir$$1, cur$$1, doneName$$1, checkSet$$1, nodeCheck$$1, isXML$$2) {
      var i$$36 = 0;
      var l$$9 = checkSet$$1.length;
      var v1816 = i$$36 < l$$9;
      for (;v1816;) {
        introspect(JAM.policy.p3) {
          var elem$$35 = checkSet$$1[i$$36]
        }
        if (elem$$35) {
          introspect(JAM.policy.p3) {
            elem$$35 = elem$$35[dir$$1];
          }
          var match$$5 = false;
          for (;elem$$35;) {
            var v3416 = elem$$35.sizcache;
            var v1810 = v3416 === doneName$$1;
            if (v1810) {
              var v1809 = elem$$35.sizset;
              introspect(JAM.policy.p3) {
                match$$5 = checkSet$$1[v1809];
              }
              break;
            }
            var v3417 = elem$$35.nodeType;
            var v1815 = v3417 === 1;
            if (v1815) {
              var v1811 = !isXML$$2;
              if (v1811) {
                elem$$35.sizcache = doneName$$1;
                elem$$35.sizset = i$$36;
              }
              var v3418 = typeof cur$$1;
              var v1814 = v3418 !== "string";
              if (v1814) {
                var v1812 = elem$$35 === cur$$1;
                if (v1812) {
                  match$$5 = true;
                  break;
                }
              } else {
                var v5044 = [elem$$35];
                var v4426 = Sizzle.filter(cur$$1, v5044);
                var v3419 = v4426.length;
                var v1813 = v3419 > 0;
                if (v1813) {
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
        i$$36 = i$$36 + 1;
        v1816 = i$$36 < l$$9;
      }
      return;
    }
    var chunker = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;
    var done = 0;
    var v1817 = Object.prototype;
    var toString$$1 = v1817.toString;
    var hasDuplicate = false;
    var baseHasDuplicate = true;
    var v1818 = [0, 0];
    v1818.sort(v136);
    Sizzle.uniqueSort = v137;
    Sizzle.matches = v138;
    Sizzle.find = v139;
    Sizzle.filter = v140;
    Sizzle.error = v141;
    var v1819 = ["ID", "NAME", "TAG"];
    var v1820 = {ID:/#((?:[\w\u00c0-\uFFFF-]|\\.)+)/, CLASS:/\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/, NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/, ATTR:/\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/, TAG:/^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/, CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/, POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/, PSEUDO:/:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/};
    var v1821 = {"class":"className", "for":"htmlFor"};
    var v1822 = {href:v142};
    var v1823 = {"+":v143, ">":v144, "":v145, "~":v146};
    var v1824 = {ID:v147, NAME:v148, TAG:v149};
    var v1825 = {CLASS:v150, ID:v151, TAG:v152, CHILD:v153, ATTR:v154, PSEUDO:v155, POS:v156};
    var v1826 = {enabled:v157, disabled:v158, checked:v159, selected:v160, parent:v161, empty:v162, has:v163, header:v164, text:v165, radio:v166, checkbox:v167, file:v168, password:v169, submit:v170, image:v171, reset:v172, button:v173, input:v174};
    var v1827 = {first:v175, last:v176, even:v177, odd:v178, lt:v179, gt:v180, nth:v181, eq:v182};
    var v1828 = {PSEUDO:v183, CHILD:v184, ID:v185, TAG:v186, CLASS:v187, ATTR:v188, POS:v189};
    var Expr = Sizzle.selectors = {order:v1819, match:v1820, leftMatch:{}, attrMap:v1821, attrHandle:v1822, relative:v1823, find:v1824, preFilter:v1825, filters:v1826, setFilters:v1827, filter:v1828};
    var v1829 = Expr.match;
    var origPOS = v1829.POS;
    var type$$53;
    var v1834 = Expr.match;
    for (type$$53 in v1834) {
      var v1830 = Expr.match;
      var v1831 = type$$53;
      var v5342 = Expr.match;
      introspect(JAM.policy.p3) {
        var v5045 = v5342[type$$53]
      }
      var v4427 = v5045.source;
      var v4428 = /(?![^\[]*\])(?![^\(]*\))/.source;
      var v3420 = v4427 + v4428;
      var v5586 = new RegExp(v3420);
      introspect(JAM.policy.p2) {
        v1830[v1831] = v5586;
      }
      var v1832 = Expr.leftMatch;
      var v1833 = type$$53;
      var v4429 = /(^(?:.|\r|\n)*?)/.source;
      var v5467 = Expr.match;
      introspect(JAM.policy.p3) {
        var v5343 = v5467[type$$53]
      }
      var v5046 = v5343.source;
      var v4430 = v5046.replace(/\\(\d+)/g, v190);
      var v3421 = v4429 + v4430;
      var v5587 = new RegExp(v3421);
      introspect(JAM.policy.p2) {
        v1832[v1833] = v5587;
      }
    }
    try {
      var v5047 = Array.prototype;
      var v4431 = v5047.slice;
      var v5048 = document$$1.documentElement;
      var v4432 = v5048.childNodes;
      var v3422 = v4431.call(v4432, 0);
      var v1835 = v3422[0];
      v1835.nodeType;
    } catch (e$$20) {
      makeArray = v191;
    }
    var sortOrder;
    var v3423 = document$$1.documentElement;
    var v1838 = v3423.compareDocumentPosition;
    if (v1838) {
      sortOrder = v192;
    } else {
      var v3424 = document$$1.documentElement;
      var v1837 = "sourceIndex" in v3424;
      if (v1837) {
        sortOrder = v193;
      } else {
        var v1836 = document$$1.createRange;
        if (v1836) {
          sortOrder = v194;
        }
      }
    }
    v197();
    v200();
    var v1839 = document$$1.querySelectorAll;
    if (v1839) {
      v202();
    }
    v204();
    var v1840;
    var v3425 = document$$1.compareDocumentPosition;
    if (v3425) {
      v1840 = v205;
    } else {
      v1840 = v206;
    }
    var contains = v1840;
    jQuery$$1.find = Sizzle;
    jQuery$$1.expr = Sizzle.selectors;
    var v1841 = jQuery$$1.expr;
    var v3426 = jQuery$$1.expr;
    v1841[":"] = v3426.filters;
    jQuery$$1.unique = Sizzle.uniqueSort;
    jQuery$$1.text = getText;
    jQuery$$1.isXMLDoc = isXML;
    jQuery$$1.contains = contains;
    return;
  }
  function v135() {
    var id$$3;
    var v1845 = jQuery$$1.cache;
    for (id$$3 in v1845) {
      var v4433 = jQuery$$1.cache;
      introspect(JAM.policy.p3) {
        var v3427 = v4433[id$$3]
      }
      var v1844 = v3427.handle;
      if (v1844) {
        try {
          var v1842 = jQuery$$1.event;
          var v5049 = jQuery$$1.cache;
          introspect(JAM.policy.p3) {
            var v4434 = v5049[id$$3]
          }
          var v3428 = v4434.handle;
          var v1843 = v3428.elem;
          v1842.remove(v1843);
        } catch (e$$19) {
        }
      }
    }
    return;
  }
  function v134(i$$33, name$$42) {
    function v133(fn$$13) {
      var v1846;
      if (fn$$13) {
        v1846 = this.bind(name$$42, fn$$13);
      } else {
        v1846 = this.trigger(name$$42);
      }
      return v1846;
    }
    var v1847 = jQuery$$1.fn;
    introspect(JAM.policy.p2) {
      v1847[name$$42] = v133;
    }
    var v1849 = jQuery$$1.attrFn;
    if (v1849) {
      var v1848 = jQuery$$1.attrFn;
      introspect(JAM.policy.p2) {
        v1848[name$$42] = true;
      }
    }
    return;
  }
  function v132(i$$31, name$$41) {
    function v131(types$$4, data$$37, fn$$12, origSelector) {
      function v130() {
        var v1850 = jQuery$$1.event;
        var v1851 = liveConvert(type$$52, selector$$7);
        var v1852 = {data:data$$37, selector:selector$$7, handler:fn$$12, origType:type$$52, origHandler:fn$$12, preType:preType};
        v1850.add(this, v1851, v1852);
        return;
      }
      var type$$52;
      var i$$32 = 0;
      var match$$3;
      var namespaces$$9;
      var preType;
      var v1853 = origSelector;
      var v3429 = !v1853;
      if (v3429) {
        v1853 = this.selector;
      }
      var selector$$7 = v1853;
      var v1854;
      if (origSelector) {
        v1854 = this;
      } else {
        var v3430 = this.context;
        v1854 = jQuery$$1(v3430);
      }
      var context$$2 = v1854;
      var v1855 = jQuery$$1.isFunction(data$$37);
      if (v1855) {
        fn$$12 = data$$37;
        data$$37 = undefined$$1;
      }
      var v1856 = types$$4 || "";
      types$$4 = v1856.split(" ");
      var v4435 = i$$32;
      i$$32 = i$$32 + 1;
      introspect(JAM.policy.p3) {
        var v3431 = type$$52 = types$$4[v4435]
      }
      var v1865 = v3431 != null;
      for (;v1865;) {
        match$$3 = rnamespaces.exec(type$$52);
        namespaces$$9 = "";
        if (match$$3) {
          namespaces$$9 = match$$3[0];
          type$$52 = type$$52.replace(rnamespaces, "");
        }
        var v1859 = type$$52 === "hover";
        if (v1859) {
          var v1857 = "mouseenter" + namespaces$$9;
          var v1858 = "mouseleave" + namespaces$$9;
          types$$4.push(v1857, v1858);
          var v4436 = i$$32;
          i$$32 = i$$32 + 1;
          introspect(JAM.policy.p3) {
            var v3432 = type$$52 = types$$4[v4436]
          }
          v1865 = v3432 != null;
          continue;
        }
        preType = type$$52;
        var v3433 = type$$52 === "focus";
        var v4437 = !v3433;
        if (v4437) {
          v3433 = type$$52 === "blur";
        }
        var v1862 = v3433;
        if (v1862) {
          introspect(JAM.policy.p3) {
            var v3434 = liveMap[type$$52]
          }
          var v1860 = v3434 + namespaces$$9;
          types$$4.push(v1860);
          type$$52 = type$$52 + namespaces$$9;
        } else {
          introspect(JAM.policy.p3) {
            var v3435 = liveMap[type$$52]
          }
          var v4438 = !v3435;
          if (v4438) {
            v3435 = type$$52;
          }
          var v1861 = v3435;
          type$$52 = v1861 + namespaces$$9;
        }
        var v1864 = name$$41 === "live";
        if (v1864) {
          context$$2.each(v130);
        } else {
          var v1863 = liveConvert(type$$52, selector$$7);
          context$$2.unbind(v1863, fn$$12);
        }
        var v4439 = i$$32;
        i$$32 = i$$32 + 1;
        introspect(JAM.policy.p3) {
          var v3436 = type$$52 = types$$4[v4439]
        }
        v1865 = v3436 != null;
      }
      return this;
    }
    var v1866 = jQuery$$1.fn;
    introspect(JAM.policy.p2) {
      v1866[name$$41] = v131;
    }
    return;
  }
  function v129(fnOver, fnOut) {
    var v1867 = this.mouseenter(fnOver);
    var v1868 = fnOut || fnOver;
    return v1867.mouseleave(v1868);
  }
  function v128(fn$$11) {
    function v127(event$$9) {
      var v5050 = fn$$11.guid;
      var v4440 = "lastToggle" + v5050;
      var v3437 = jQuery$$1.data(this, v4440);
      var v4441 = !v3437;
      if (v4441) {
        v3437 = 0;
      }
      var v1869 = v3437;
      var lastToggle = v1869 % i$$30;
      var v3438 = fn$$11.guid;
      var v1870 = "lastToggle" + v3438;
      var v1871 = lastToggle + 1;
      jQuery$$1.data(this, v1870, v1871);
      event$$9.preventDefault();
      introspect(JAM.policy.p3) {
        var v3439 = args$$5[lastToggle]
      }
      var v1872 = v3439.apply(this, arguments);
      var v3440 = !v1872;
      if (v3440) {
        v1872 = false;
      }
      return v1872;
    }
    var args$$5 = arguments;
    var i$$30 = 1;
    var v3441 = args$$5.length;
    var v1874 = i$$30 < v3441;
    for (;v1874;) {
      var v3442 = i$$30;
      i$$30 = i$$30 + 1;
      introspect(JAM.policy.p3) {
        var v1873 = args$$5[v3442]
      }
      jQuery$$1.proxy(fn$$11, v1873);
      var v3443 = args$$5.length;
      v1874 = i$$30 < v3443;
    }
    var v1875 = jQuery$$1.proxy(fn$$11, v127);
    return this.click(v1875);
  }
  function v126(type$$51, data$$36) {
    var v1878 = this[0];
    if (v1878) {
      var event$$8 = jQuery$$1.Event(type$$51);
      event$$8.preventDefault();
      event$$8.stopPropagation();
      var v1876 = jQuery$$1.event;
      var v1877 = this[0];
      v1876.trigger(event$$8, data$$36, v1877);
      return event$$8.result;
    }
    return;
  }
  function v125(type$$50, data$$35) {
    function v124() {
      var v1879 = jQuery$$1.event;
      v1879.trigger(type$$50, data$$35, this);
      return;
    }
    return this.each(v124);
  }
  function v123(selector$$6, types$$3, fn$$10) {
    var v3444 = arguments.length;
    var v1880 = v3444 === 0;
    if (v1880) {
      return this.unbind("live");
    } else {
      return this.die(types$$3, null, fn$$10, selector$$6);
    }
    return;
  }
  function v122(selector$$5, types$$2, data$$34, fn$$9) {
    return this.live(types$$2, data$$34, fn$$9, selector$$5);
  }
  function v121(type$$49, fn$$8) {
    var v4442 = typeof type$$49;
    var v3445 = v4442 === "object";
    if (v3445) {
      var v4443 = type$$49.preventDefault;
      v3445 = !v4443;
    }
    var v1885 = v3445;
    if (v1885) {
      var key$$19;
      for (key$$19 in type$$49) {
        introspect(JAM.policy.p3) {
          var v1881 = type$$49[key$$19]
        }
        this.unbind(key$$19, v1881);
      }
    } else {
      var i$$29 = 0;
      var l$$7 = this.length;
      var v1884 = i$$29 < l$$7;
      for (;v1884;) {
        var v1882 = jQuery$$1.event;
        introspect(JAM.policy.p3) {
          var v1883 = this[i$$29]
        }
        v1882.remove(v1883, type$$49, fn$$8);
        i$$29 = i$$29 + 1;
        v1884 = i$$29 < l$$7;
      }
    }
    return this;
  }
  function v120(i$$27, name$$40) {
    function v119(type$$48, data$$33, fn$$7) {
      function v118(event$$7) {
        var v1886 = jQuery$$1(this);
        v1886.unbind(event$$7, handler$$7);
        return fn$$7.apply(this, arguments);
      }
      var v3446 = typeof type$$48;
      var v1888 = v3446 === "object";
      if (v1888) {
        var key$$18;
        for (key$$18 in type$$48) {
          introspect(JAM.policy.p3) {
            var v1887 = type$$48[key$$18]
          }
          introspect(JAM.policy.p3) {
            this[name$$40](key$$18, data$$33, v1887, fn$$7);
          }
        }
        return this;
      }
      var v1889 = jQuery$$1.isFunction(data$$33);
      if (v1889) {
        fn$$7 = data$$33;
        data$$33 = undefined$$1;
      }
      var v1890;
      var v3447 = name$$40 === "one";
      if (v3447) {
        v1890 = jQuery$$1.proxy(fn$$7, v118);
      } else {
        v1890 = fn$$7;
      }
      var handler$$7 = v1890;
      var v3448 = type$$48 === "unload";
      if (v3448) {
        v3448 = name$$40 !== "one";
      }
      var v1894 = v3448;
      if (v1894) {
        this.one(type$$48, data$$33, fn$$7);
      } else {
        var i$$28 = 0;
        var l$$6 = this.length;
        var v1893 = i$$28 < l$$6;
        for (;v1893;) {
          var v1891 = jQuery$$1.event;
          introspect(JAM.policy.p3) {
            var v1892 = this[i$$28]
          }
          v1891.add(v1892, type$$48, handler$$7, data$$33);
          i$$28 = i$$28 + 1;
          v1893 = i$$28 < l$$6;
        }
      }
      return this;
    }
    var v1895 = jQuery$$1.fn;
    introspect(JAM.policy.p2) {
      v1895[name$$40] = v119;
    }
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
      var v1896 = jQuery$$1.event;
      e$$18 = v1896.fix(e$$18);
      e$$18.type = fix$$1;
      var v3449 = jQuery$$1.event;
      var v1897 = v3449.handle;
      return v1897.call(this, e$$18);
    }
    var v3450 = jQuery$$1.event;
    var v1898 = v3450.special;
    introspect(JAM.policy.p2) {
      v1898[fix$$1] = {setup:v115, teardown:v116};
    }
    return;
  }
  function v114(namespaces$$8) {
    var v1899 = jQuery$$1.event;
    v1899.remove(this, ".specialChange");
    var v1900 = this.nodeName;
    return formElems.test(v1900);
  }
  function v113(data$$32, namespaces$$7) {
    var v3451 = this.type;
    var v1901 = v3451 === "file";
    if (v1901) {
      return false;
    }
    var type$$47;
    for (type$$47 in changeFilters) {
      var v1902 = jQuery$$1.event;
      var v1903 = type$$47 + ".specialChange";
      introspect(JAM.policy.p3) {
        var v1904 = changeFilters[type$$47]
      }
      v1902.add(this, v1903, v1904);
    }
    var v1905 = this.nodeName;
    return formElems.test(v1905);
  }
  function v112(e$$17) {
    var elem$$32 = e$$17.target;
    var v1906 = getVal(elem$$32);
    jQuery$$1.data(elem$$32, "_change_data", v1906);
    return;
  }
  function v111(e$$16) {
    var elem$$31 = e$$16.target;
    var type$$46 = elem$$31.type;
    var v5344 = e$$16.keyCode;
    var v5051 = v5344 === 13;
    if (v5051) {
      var v5468 = elem$$31.nodeName;
      var v5345 = v5468.toLowerCase();
      v5051 = v5345 !== "textarea";
    }
    var v4444 = v5051;
    var v5053 = !v4444;
    if (v5053) {
      var v5346 = e$$16.keyCode;
      var v5052 = v5346 === 32;
      if (v5052) {
        var v5347 = type$$46 === "checkbox";
        var v5469 = !v5347;
        if (v5469) {
          v5347 = type$$46 === "radio";
        }
        v5052 = v5347;
      }
      v4444 = v5052;
    }
    var v3452 = v4444;
    var v4445 = !v3452;
    if (v4445) {
      v3452 = type$$46 === "select-multiple";
    }
    var v1907 = v3452;
    if (v1907) {
      return testChange.call(this, e$$16);
    }
    return;
  }
  function v110(e$$15) {
    var elem$$30 = e$$15.target;
    var type$$45 = elem$$30.type;
    var v4446 = type$$45 === "radio";
    var v5054 = !v4446;
    if (v5054) {
      v4446 = type$$45 === "checkbox";
    }
    var v3453 = v4446;
    var v4448 = !v3453;
    if (v4448) {
      var v5055 = elem$$30.nodeName;
      var v4447 = v5055.toLowerCase();
      v3453 = v4447 === "select";
    }
    var v1908 = v3453;
    if (v1908) {
      return testChange.call(this, e$$15);
    }
    return;
  }
  function testChange$$1(e$$14) {
    var elem$$29 = e$$14.target;
    var data$$31;
    var val$$2;
    var v5056 = elem$$29.nodeName;
    var v4449 = formElems.test(v5056);
    var v3454 = !v4449;
    var v4450 = !v3454;
    if (v4450) {
      v3454 = elem$$29.readOnly;
    }
    var v1909 = v3454;
    if (v1909) {
      return;
    }
    data$$31 = jQuery$$1.data(elem$$29, "_change_data");
    val$$2 = getVal(elem$$29);
    var v4451 = e$$14.type;
    var v3455 = v4451 !== "focusout";
    var v4453 = !v3455;
    if (v4453) {
      var v4452 = elem$$29.type;
      v3455 = v4452 !== "radio";
    }
    var v1910 = v3455;
    if (v1910) {
      jQuery$$1.data(elem$$29, "_change_data", val$$2);
    }
    var v3456 = data$$31 === undefined$$1;
    var v4454 = !v3456;
    if (v4454) {
      v3456 = val$$2 === data$$31;
    }
    var v1911 = v3456;
    if (v1911) {
      return;
    }
    var v3457 = data$$31 != null;
    var v4455 = !v3457;
    if (v4455) {
      v3457 = val$$2;
    }
    var v1914 = v3457;
    if (v1914) {
      e$$14.type = "change";
      var v1912 = jQuery$$1.event;
      var v1913 = arguments[1];
      return v1912.trigger(e$$14, v1913, elem$$29);
    }
    return;
  }
  function v109(elem$$27) {
    function v108(elem$$28) {
      return elem$$28.selected;
    }
    var type$$44 = elem$$27.type;
    var val$$1 = elem$$27.value;
    var v3458 = type$$44 === "radio";
    var v4456 = !v3458;
    if (v4456) {
      v3458 = type$$44 === "checkbox";
    }
    var v1918 = v3458;
    if (v1918) {
      val$$1 = elem$$27.checked;
    } else {
      var v1917 = type$$44 === "select-multiple";
      if (v1917) {
        var v1915;
        var v4457 = elem$$27.selectedIndex;
        var v3460 = v4457 > -1;
        if (v3460) {
          var v4458 = elem$$27.options;
          var v3459 = jQuery$$1.map(v4458, v108);
          v1915 = v3459.join("-");
        } else {
          v1915 = "";
        }
        val$$1 = v1915;
      } else {
        var v4459 = elem$$27.nodeName;
        var v3461 = v4459.toLowerCase();
        var v1916 = v3461 === "select";
        if (v1916) {
          val$$1 = elem$$27.selectedIndex;
        }
      }
    }
    return val$$1;
  }
  function v107(namespaces$$6) {
    var v1919 = jQuery$$1.event;
    v1919.remove(this, ".specialSubmit");
    return;
  }
  function v106(data$$30, namespaces$$5) {
    function v105(e$$13) {
      var elem$$26 = e$$13.target;
      var type$$43 = elem$$26.type;
      var v5057 = type$$43 === "text";
      var v5348 = !v5057;
      if (v5348) {
        v5057 = type$$43 === "password";
      }
      var v4460 = v5057;
      if (v4460) {
        var v5349 = jQuery$$1(elem$$26);
        var v5058 = v5349.closest("form");
        v4460 = v5058.length;
      }
      var v3462 = v4460;
      if (v3462) {
        var v4461 = e$$13.keyCode;
        v3462 = v4461 === 13;
      }
      var v1920 = v3462;
      if (v1920) {
        return trigger("submit", this, arguments);
      }
      return;
    }
    function v104(e$$12) {
      var elem$$25 = e$$12.target;
      var type$$42 = elem$$25.type;
      var v4462 = type$$42 === "submit";
      var v5059 = !v4462;
      if (v5059) {
        v4462 = type$$42 === "image";
      }
      var v3463 = v4462;
      if (v3463) {
        var v5060 = jQuery$$1(elem$$25);
        var v4463 = v5060.closest("form");
        v3463 = v4463.length;
      }
      var v1921 = v3463;
      if (v1921) {
        return trigger("submit", this, arguments);
      }
      return;
    }
    var v4464 = this.nodeName;
    var v3464 = v4464.toLowerCase();
    var v1924 = v3464 !== "form";
    if (v1924) {
      var v1922 = jQuery$$1.event;
      v1922.add(this, "click.specialSubmit", v104);
      var v1923 = jQuery$$1.event;
      v1923.add(this, "keypress.specialSubmit", v105);
    } else {
      return false;
    }
    return;
  }
  function v103(orig$$1, fix) {
    function v102(data$$29) {
      var v1925 = jQuery$$1.event;
      var v3465;
      var v5061 = data$$29;
      if (v5061) {
        v5061 = data$$29.selector;
      }
      var v4465 = v5061;
      if (v4465) {
        v3465 = delegate;
      } else {
        v3465 = withinElement;
      }
      var v1926 = v3465;
      v1925.remove(this, fix, v1926);
      return;
    }
    function v101(data$$28) {
      var v1927 = jQuery$$1.event;
      var v3466;
      var v5062 = data$$28;
      if (v5062) {
        v5062 = data$$28.selector;
      }
      var v4466 = v5062;
      if (v4466) {
        v3466 = delegate;
      } else {
        v3466 = withinElement;
      }
      var v1928 = v3466;
      v1927.add(this, fix, v1928, orig$$1);
      return;
    }
    var v3467 = jQuery$$1.event;
    var v1929 = v3467.special;
    introspect(JAM.policy.p2) {
      v1929[orig$$1] = {setup:v101, teardown:v102};
    }
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
    var v1930 = !e$$10;
    if (v1930) {
      return;
    }
    var v1931 = e$$10.stopPropagation;
    if (v1931) {
      e$$10.stopPropagation();
    }
    e$$10.cancelBubble = true;
    return;
  }
  function v98() {
    this.isDefaultPrevented = returnTrue;
    var e$$9 = this.originalEvent;
    var v1932 = !e$$9;
    if (v1932) {
      return;
    }
    var v1933 = e$$9.preventDefault;
    if (v1933) {
      e$$9.preventDefault();
    }
    e$$9.returnValue = false;
    return;
  }
  function v97(src$$2) {
    var v3468 = this.preventDefault;
    var v1935 = !v3468;
    if (v1935) {
      var v1934 = jQuery$$1.Event;
      return new v1934(src$$2);
    }
    var v3469 = src$$2;
    if (v3469) {
      v3469 = src$$2.type;
    }
    var v1936 = v3469;
    if (v1936) {
      this.originalEvent = src$$2;
      this.type = src$$2.type;
    } else {
      this.type = src$$2;
    }
    var v5588 = now();
    this.timeStamp = v5588;
    introspect(JAM.policy.p2) {
      this[expando] = true;
    }
    return;
  }
  function v96(elem$$24, type$$41, handle$$15) {
    var v1937 = "on" + type$$41;
    elem$$24.detachEvent(v1937, handle$$15);
    return;
  }
  function v95(elem$$23, type$$40, handle$$14) {
    elem$$23.removeEventListener(type$$40, handle$$14, false);
    return;
  }
  function v94(namespaces$$4, eventHandle$$2) {
    var v3470 = this.onbeforeunload;
    var v1938 = v3470 === eventHandle$$2;
    if (v1938) {
      this.onbeforeunload = null;
    }
    return;
  }
  function v93(data$$27, namespaces$$3, eventHandle$$1) {
    var v1939 = this.setInterval;
    if (v1939) {
      this.onbeforeunload = eventHandle$$1;
    }
    return false;
  }
  function v92(handleObj$$5) {
    function v91() {
      var v3471 = type$$39;
      var v4467 = this.origType;
      var v3472 = v4467.replace(rnamespaces, "");
      var v1940 = v3471 === v3472;
      if (v1940) {
        remove = false;
        return false;
      }
      return;
    }
    var remove = true;
    var v1941 = handleObj$$5.origType;
    var type$$39 = v1941.replace(rnamespaces, "");
    var v4468 = jQuery$$1.data(this, "events");
    var v3473 = v4468.live;
    var v4469 = !v3473;
    if (v4469) {
      v3473 = [];
    }
    var v1942 = v3473;
    jQuery$$1.each(v1942, v91);
    if (remove) {
      var v1943 = jQuery$$1.event;
      var v1944 = handleObj$$5.origType;
      v1943.remove(this, v1944, liveHandler);
    }
    return;
  }
  function v90(handleObj$$4) {
    var v1945 = jQuery$$1.event;
    var v1946 = handleObj$$4.origType;
    var v3474 = {handler:liveHandler};
    var v1947 = jQuery$$1.extend({}, handleObj$$4, v3474);
    v1945.add(this, v1946, v1947);
    return;
  }
  function v89(event$$4) {
    introspect(JAM.policy.p3) {
      var v1948 = event$$4[expando]
    }
    if (v1948) {
      return event$$4;
    }
    var originalEvent = event$$4;
    event$$4 = jQuery$$1.Event(originalEvent);
    var v1949 = this.props;
    var i$$26 = v1949.length;
    var prop$$4;
    for (;i$$26;) {
      var v1950 = this.props;
      var v1951 = i$$26 = i$$26 - 1;
      introspect(JAM.policy.p3) {
        prop$$4 = v1950[v1951];
      }
      introspect(JAM.policy.p4) {
        event$$4[prop$$4] = originalEvent[prop$$4];
      }
    }
    var v3475 = event$$4.target;
    var v1953 = !v3475;
    if (v1953) {
      var v1952 = event$$4.srcElement;
      var v3476 = !v1952;
      if (v3476) {
        v1952 = document$$1;
      }
      event$$4.target = v1952;
    }
    var v4470 = event$$4.target;
    var v3477 = v4470.nodeType;
    var v1955 = v3477 === 3;
    if (v1955) {
      var v1954 = event$$4.target;
      event$$4.target = v1954.parentNode;
    }
    var v4471 = event$$4.relatedTarget;
    var v3478 = !v4471;
    if (v3478) {
      v3478 = event$$4.fromElement;
    }
    var v1957 = v3478;
    if (v1957) {
      var v1956;
      var v4472 = event$$4.fromElement;
      var v4473 = event$$4.target;
      var v3479 = v4472 === v4473;
      if (v3479) {
        v1956 = event$$4.toElement;
      } else {
        v1956 = event$$4.fromElement;
      }
      event$$4.relatedTarget = v1956;
    }
    var v4474 = event$$4.pageX;
    var v3480 = v4474 == null;
    if (v3480) {
      var v4475 = event$$4.clientX;
      v3480 = v4475 != null;
    }
    var v1962 = v3480;
    if (v1962) {
      var doc$$2 = document$$1.documentElement;
      var body = document$$1.body;
      var v3481 = event$$4.clientX;
      var v5350 = doc$$2;
      if (v5350) {
        v5350 = doc$$2.scrollLeft;
      }
      var v5063 = v5350;
      var v5352 = !v5063;
      if (v5352) {
        var v5351 = body;
        if (v5351) {
          v5351 = body.scrollLeft;
        }
        v5063 = v5351;
      }
      var v4476 = v5063;
      var v5064 = !v4476;
      if (v5064) {
        v4476 = 0;
      }
      var v3482 = v4476;
      var v1958 = v3481 + v3482;
      var v5065 = doc$$2;
      if (v5065) {
        v5065 = doc$$2.clientLeft;
      }
      var v4477 = v5065;
      var v5067 = !v4477;
      if (v5067) {
        var v5066 = body;
        if (v5066) {
          v5066 = body.clientLeft;
        }
        v4477 = v5066;
      }
      var v3483 = v4477;
      var v4478 = !v3483;
      if (v4478) {
        v3483 = 0;
      }
      var v1959 = v3483;
      event$$4.pageX = v1958 - v1959;
      var v3484 = event$$4.clientY;
      var v5353 = doc$$2;
      if (v5353) {
        v5353 = doc$$2.scrollTop;
      }
      var v5068 = v5353;
      var v5355 = !v5068;
      if (v5355) {
        var v5354 = body;
        if (v5354) {
          v5354 = body.scrollTop;
        }
        v5068 = v5354;
      }
      var v4479 = v5068;
      var v5069 = !v4479;
      if (v5069) {
        v4479 = 0;
      }
      var v3485 = v4479;
      var v1960 = v3484 + v3485;
      var v5070 = doc$$2;
      if (v5070) {
        v5070 = doc$$2.clientTop;
      }
      var v4480 = v5070;
      var v5072 = !v4480;
      if (v5072) {
        var v5071 = body;
        if (v5071) {
          v5071 = body.clientTop;
        }
        v4480 = v5071;
      }
      var v3486 = v4480;
      var v4481 = !v3486;
      if (v4481) {
        v3486 = 0;
      }
      var v1961 = v3486;
      event$$4.pageY = v1960 - v1961;
    }
    var v4482 = event$$4.which;
    var v3487 = !v4482;
    if (v3487) {
      var v4483;
      var v5356 = event$$4.charCode;
      var v5471 = !v5356;
      if (v5471) {
        var v5470 = event$$4.charCode;
        v5356 = v5470 === 0;
      }
      var v5073 = v5356;
      if (v5073) {
        v4483 = event$$4.charCode;
      } else {
        v4483 = event$$4.keyCode;
      }
      v3487 = v4483;
    }
    var v1964 = v3487;
    if (v1964) {
      var v1963 = event$$4.charCode;
      var v3488 = !v1963;
      if (v3488) {
        v1963 = event$$4.keyCode;
      }
      event$$4.which = v1963;
    }
    var v4484 = event$$4.metaKey;
    var v3489 = !v4484;
    if (v3489) {
      v3489 = event$$4.ctrlKey;
    }
    var v1965 = v3489;
    if (v1965) {
      event$$4.metaKey = event$$4.ctrlKey;
    }
    var v4485 = event$$4.which;
    var v3490 = !v4485;
    if (v3490) {
      var v4486 = event$$4.button;
      v3490 = v4486 !== undefined$$1;
    }
    var v1967 = v3490;
    if (v1967) {
      var v1966;
      var v4487 = event$$4.button;
      var v3492 = v4487 & 1;
      if (v3492) {
        v1966 = 1;
      } else {
        var v3491;
        var v5074 = event$$4.button;
        var v4489 = v5074 & 2;
        if (v4489) {
          v3491 = 3;
        } else {
          var v4488;
          var v5357 = event$$4.button;
          var v5075 = v5357 & 4;
          if (v5075) {
            v4488 = 2;
          } else {
            v4488 = 0;
          }
          v3491 = v4488;
        }
        v1966 = v3491;
      }
      event$$4.which = v1966;
    }
    return event$$4;
  }
  function v88(event$$3) {
    var all$$2;
    var handlers$$1;
    var namespaces$$2;
    var namespace$$2;
    var events$$4;
    var v1968 = arguments;
    var v3493 = jQuery$$1.event;
    var v4490 = event$$3;
    var v5076 = !v4490;
    if (v5076) {
      v4490 = window$$1.event;
    }
    var v3494 = v4490;
    var v5589 = v3493.fix(v3494);
    event$$3 = v1968[0] = v5589;
    event$$3.currentTarget = this;
    var v4491 = event$$3.type;
    var v3495 = v4491.indexOf(".");
    var v1969 = v3495 < 0;
    if (v1969) {
      var v3496 = event$$3.exclusive;
      v1969 = !v3496;
    }
    all$$2 = v1969;
    var v1973 = !all$$2;
    if (v1973) {
      var v1970 = event$$3.type;
      namespaces$$2 = v1970.split(".");
      var v1971 = event$$3;
      var v5590 = namespaces$$2.shift();
      v1971.type = v5590;
      var v5358 = namespaces$$2.slice(0);
      var v5077 = v5358.sort();
      var v4492 = v5077.join("\\.(?:.*\\.)?");
      var v3497 = "(^|\\.)" + v4492;
      var v1972 = v3497 + "(\\.|$)";
      namespace$$2 = new RegExp(v1972);
    }
    events$$4 = jQuery$$1.data(this, "events");
    var v1974 = event$$3.type;
    introspect(JAM.policy.p3) {
      handlers$$1 = events$$4[v1974];
    }
    var v1981 = events$$4 && handlers$$1;
    if (v1981) {
      handlers$$1 = handlers$$1.slice(0);
      var j$$3 = 0;
      var l$$5 = handlers$$1.length;
      var v1980 = j$$3 < l$$5;
      for (;v1980;) {
        introspect(JAM.policy.p3) {
          var handleObj$$3 = handlers$$1[j$$3]
        }
        var v3498 = all$$2;
        var v4494 = !v3498;
        if (v4494) {
          var v4493 = handleObj$$3.namespace;
          v3498 = namespace$$2.test(v4493);
        }
        var v1979 = v3498;
        if (v1979) {
          event$$3.handler = handleObj$$3.handler;
          event$$3.data = handleObj$$3.data;
          event$$3.handleObj = handleObj$$3;
          var v1975 = handleObj$$3.handler;
          var ret$$7 = v1975.apply(this, arguments);
          var v1977 = ret$$7 !== undefined$$1;
          if (v1977) {
            event$$3.result = ret$$7;
            var v1976 = ret$$7 === false;
            if (v1976) {
              event$$3.preventDefault();
              event$$3.stopPropagation();
            }
          }
          var v1978 = event$$3.isImmediatePropagationStopped();
          if (v1978) {
            break;
          }
        }
        j$$3 = j$$3 + 1;
        v1980 = j$$3 < l$$5;
      }
    }
    return event$$3.result;
  }
  function v87(event$$2, data$$26, elem$$22) {
    function v86() {
      var v3499 = this.events;
      if (v3499) {
        var v4495 = this.events;
        introspect(JAM.policy.p3) {
          v3499 = v4495[type$$38];
        }
      }
      var v1984 = v3499;
      if (v1984) {
        var v1982 = jQuery$$1.event;
        var v3500 = this.handle;
        var v1983 = v3500.elem;
        v1982.trigger(event$$2, data$$26, v1983);
      }
      return;
    }
    var v1985 = event$$2.type;
    var v3501 = !v1985;
    if (v3501) {
      v1985 = event$$2;
    }
    var type$$38 = v1985;
    var bubbling = arguments[3];
    var v1993 = !bubbling;
    if (v1993) {
      var v1986;
      var v4496 = typeof event$$2;
      var v3503 = v4496 === "object";
      if (v3503) {
        var v3502;
        introspect(JAM.policy.p3) {
          var v4498 = event$$2[expando]
        }
        if (v4498) {
          v3502 = event$$2;
        } else {
          var v4497 = jQuery$$1.Event(type$$38);
          v3502 = jQuery$$1.extend(v4497, event$$2);
        }
        v1986 = v3502;
      } else {
        v1986 = jQuery$$1.Event(type$$38);
      }
      event$$2 = v1986;
      var v3504 = type$$38.indexOf("!");
      var v1988 = v3504 >= 0;
      if (v1988) {
        var v1987 = event$$2;
        v1987.type = type$$38 = type$$38.slice(0, -1);
        event$$2.exclusive = true;
      }
      var v1991 = !elem$$22;
      if (v1991) {
        event$$2.stopPropagation();
        var v4499 = jQuery$$1.event;
        var v3505 = v4499.global;
        introspect(JAM.policy.p3) {
          var v1990 = v3505[type$$38]
        }
        if (v1990) {
          var v1989 = jQuery$$1.cache;
          jQuery$$1.each(v1989, v86);
        }
      }
      var v4500 = !elem$$22;
      var v5079 = !v4500;
      if (v5079) {
        var v5078 = elem$$22.nodeType;
        v4500 = v5078 === 3;
      }
      var v3506 = v4500;
      var v4502 = !v3506;
      if (v4502) {
        var v4501 = elem$$22.nodeType;
        v3506 = v4501 === 8;
      }
      var v1992 = v3506;
      if (v1992) {
        return undefined$$1;
      }
      event$$2.result = undefined$$1;
      event$$2.target = elem$$22;
      data$$26 = jQuery$$1.makeArray(data$$26);
      data$$26.unshift(event$$2);
    }
    event$$2.currentTarget = elem$$22;
    var handle$$13 = jQuery$$1.data(elem$$22, "handle");
    if (handle$$13) {
      handle$$13.apply(elem$$22, data$$26);
    }
    var v1994 = elem$$22.parentNode;
    var v3507 = !v1994;
    if (v3507) {
      v1994 = elem$$22.ownerDocument;
    }
    var parent$$1 = v1994;
    try {
      var v5080 = elem$$22;
      if (v5080) {
        v5080 = elem$$22.nodeName;
      }
      var v4503 = v5080;
      if (v4503) {
        var v5081 = jQuery$$1.noData;
        var v5359 = elem$$22.nodeName;
        var v5082 = v5359.toLowerCase();
        introspect(JAM.policy.p3) {
          v4503 = v5081[v5082];
        }
      }
      var v3508 = v4503;
      var v1996 = !v3508;
      if (v1996) {
        var v4504 = "on" + type$$38;
        introspect(JAM.policy.p3) {
          var v3509 = elem$$22[v4504]
        }
        if (v3509) {
          var v5360 = "on" + type$$38;
          introspect(JAM.policy.p3) {
            var v5083 = elem$$22[v5360]
          }
          var v4505 = v5083.apply(elem$$22, data$$26);
          v3509 = v4505 === false;
        }
        var v1995 = v3509;
        if (v1995) {
          event$$2.result = false;
        }
      }
    } catch (e$$7) {
    }
    var v4506 = event$$2.isPropagationStopped();
    var v3510 = !v4506;
    if (v3510) {
      v3510 = parent$$1;
    }
    var v2008 = v3510;
    if (v2008) {
      var v1997 = jQuery$$1.event;
      v1997.trigger(event$$2, data$$26, parent$$1, true);
    } else {
      var v3511 = event$$2.isDefaultPrevented();
      var v2007 = !v3511;
      if (v2007) {
        var target$$27 = event$$2.target;
        var old;
        var v1998 = jQuery$$1.nodeName(target$$27, "a");
        if (v1998) {
          v1998 = type$$38 === "click";
        }
        var isClick = v1998;
        var v4507 = jQuery$$1.event;
        var v3512 = v4507.special;
        introspect(JAM.policy.p3) {
          var v1999 = v3512[type$$38]
        }
        var v3513 = !v1999;
        if (v3513) {
          v1999 = {};
        }
        var special$$3 = v1999;
        var v5361 = special$$3._default;
        var v5084 = !v5361;
        var v5363 = !v5084;
        if (v5363) {
          var v5472 = special$$3._default;
          var v5362 = v5472.call(elem$$22, event$$2);
          v5084 = v5362 === false;
        }
        var v4508 = v5084;
        if (v4508) {
          v4508 = !isClick;
        }
        var v3514 = v4508;
        if (v3514) {
          var v5364 = target$$27;
          if (v5364) {
            v5364 = target$$27.nodeName;
          }
          var v5085 = v5364;
          if (v5085) {
            var v5365 = jQuery$$1.noData;
            var v5473 = target$$27.nodeName;
            var v5366 = v5473.toLowerCase();
            introspect(JAM.policy.p3) {
              v5085 = v5365[v5366];
            }
          }
          var v4509 = v5085;
          v3514 = !v4509;
        }
        var v2006 = v3514;
        if (v2006) {
          try {
            introspect(JAM.policy.p3) {
              var v2003 = target$$27[type$$38]
            }
            if (v2003) {
              var v2000 = "on" + type$$38;
              introspect(JAM.policy.p3) {
                old = target$$27[v2000];
              }
              if (old) {
                var v2001 = "on" + type$$38;
                introspect(JAM.policy.p2) {
                  target$$27[v2001] = null;
                }
              }
              var v2002 = jQuery$$1.event;
              v2002.triggered = true;
              introspect(JAM.policy.p3) {
                target$$27[type$$38]();
              }
            }
          } catch (e$$8) {
          }
          if (old) {
            var v2004 = "on" + type$$38;
            introspect(JAM.policy.p2) {
              target$$27[v2004] = old;
            }
          }
          var v2005 = jQuery$$1.event;
          v2005.triggered = false;
        }
      }
    }
    return;
  }
  function v85(elem$$21, types$$1, handler$$5, pos) {
    var v4510 = elem$$21.nodeType;
    var v3515 = v4510 === 3;
    var v4512 = !v3515;
    if (v4512) {
      var v4511 = elem$$21.nodeType;
      v3515 = v4511 === 8;
    }
    var v2009 = v3515;
    if (v2009) {
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
    var elemData$$1 = jQuery$$1.data(elem$$21);
    var v2010 = elemData$$1;
    if (v2010) {
      v2010 = elemData$$1.events;
    }
    var events$$3 = v2010;
    var v3516 = !elemData$$1;
    var v4513 = !v3516;
    if (v4513) {
      v3516 = !events$$3;
    }
    var v2011 = v3516;
    if (v2011) {
      return;
    }
    var v3517 = types$$1;
    if (v3517) {
      v3517 = types$$1.type;
    }
    var v2012 = v3517;
    if (v2012) {
      handler$$5 = types$$1.handler;
      types$$1 = types$$1.type;
    }
    var v3518 = !types$$1;
    var v4515 = !v3518;
    if (v4515) {
      var v5086 = typeof types$$1;
      var v4514 = v5086 === "string";
      if (v4514) {
        var v5087 = types$$1.charAt(0);
        v4514 = v5087 === ".";
      }
      v3518 = v4514;
    }
    var v2015 = v3518;
    if (v2015) {
      types$$1 = types$$1 || "";
      for (type$$37 in events$$3) {
        var v2013 = jQuery$$1.event;
        var v2014 = type$$37 + types$$1;
        v2013.remove(elem$$21, v2014);
      }
      return;
    }
    types$$1 = types$$1.split(" ");
    var v3519 = i$$25;
    i$$25 = i$$25 + 1;
    introspect(JAM.policy.p3) {
      var v2038 = type$$37 = types$$1[v3519]
    }
    for (;v2038;) {
      origType = type$$37;
      handleObj$$2 = null;
      var v2016 = type$$37.indexOf(".");
      all$$1 = v2016 < 0;
      namespaces$$1 = [];
      var v2018 = !all$$1;
      if (v2018) {
        namespaces$$1 = type$$37.split(".");
        type$$37 = namespaces$$1.shift();
        var v5474 = namespaces$$1.slice(0);
        var v5367 = v5474.sort();
        var v5088 = jQuery$$1.map(v5367, fcleanup);
        var v4516 = v5088.join("\\.(?:.*\\.)?");
        var v3520 = "(^|\\.)" + v4516;
        var v2017 = v3520 + "(\\.|$)";
        namespace$$1 = new RegExp(v2017);
      }
      introspect(JAM.policy.p3) {
        eventType$$2 = events$$3[type$$37];
      }
      var v2019 = !eventType$$2;
      if (v2019) {
        var v3521 = i$$25;
        i$$25 = i$$25 + 1;
        introspect(JAM.policy.p3) {
          v2038 = type$$37 = types$$1[v3521];
        }
        continue;
      }
      var v2025 = !handler$$5;
      if (v2025) {
        var j$$2 = 0;
        var v3522 = eventType$$2.length;
        var v2024 = j$$2 < v3522;
        for (;v2024;) {
          introspect(JAM.policy.p3) {
            handleObj$$2 = eventType$$2[j$$2];
          }
          var v3523 = all$$1;
          var v4518 = !v3523;
          if (v4518) {
            var v4517 = handleObj$$2.namespace;
            v3523 = namespace$$1.test(v4517);
          }
          var v2023 = v3523;
          if (v2023) {
            var v2020 = jQuery$$1.event;
            var v2021 = handleObj$$2.handler;
            v2020.remove(elem$$21, origType, v2021, j$$2);
            var v2022 = j$$2;
            j$$2 = j$$2 - 1;
            eventType$$2.splice(v2022, 1);
          }
          j$$2 = j$$2 + 1;
          var v3524 = eventType$$2.length;
          v2024 = j$$2 < v3524;
        }
        var v3525 = i$$25;
        i$$25 = i$$25 + 1;
        introspect(JAM.policy.p3) {
          v2038 = type$$37 = types$$1[v3525];
        }
        continue;
      }
      var v4519 = jQuery$$1.event;
      var v3526 = v4519.special;
      introspect(JAM.policy.p3) {
        var v2026 = v3526[type$$37]
      }
      var v3527 = !v2026;
      if (v3527) {
        v2026 = {};
      }
      special$$2 = v2026;
      j$$2 = pos || 0;
      var v3528 = eventType$$2.length;
      var v2034 = j$$2 < v3528;
      for (;v2034;) {
        introspect(JAM.policy.p3) {
          handleObj$$2 = eventType$$2[j$$2];
        }
        var v3529 = handler$$5.guid;
        var v3530 = handleObj$$2.guid;
        var v2033 = v3529 === v3530;
        if (v2033) {
          var v3531 = all$$1;
          var v4521 = !v3531;
          if (v4521) {
            var v4520 = handleObj$$2.namespace;
            v3531 = namespace$$1.test(v4520);
          }
          var v2031 = v3531;
          if (v2031) {
            var v2028 = pos == null;
            if (v2028) {
              var v2027 = j$$2;
              j$$2 = j$$2 - 1;
              eventType$$2.splice(v2027, 1);
            }
            var v2030 = special$$2.remove;
            if (v2030) {
              var v2029 = special$$2.remove;
              v2029.call(elem$$21, handleObj$$2);
            }
          }
          var v2032 = pos != null;
          if (v2032) {
            break;
          }
        }
        j$$2 = j$$2 + 1;
        var v3532 = eventType$$2.length;
        v2034 = j$$2 < v3532;
      }
      var v4522 = eventType$$2.length;
      var v3533 = v4522 === 0;
      var v4524 = !v3533;
      if (v4524) {
        var v4523 = pos != null;
        if (v4523) {
          var v5089 = eventType$$2.length;
          v4523 = v5089 === 1;
        }
        v3533 = v4523;
      }
      var v2037 = v3533;
      if (v2037) {
        var v4525 = special$$2.teardown;
        var v3534 = !v4525;
        var v4527 = !v3534;
        if (v4527) {
          var v5090 = special$$2.teardown;
          var v4526 = v5090.call(elem$$21, namespaces$$1);
          v3534 = v4526 === false;
        }
        var v2036 = v3534;
        if (v2036) {
          var v2035 = elemData$$1.handle;
          removeEvent(elem$$21, type$$37, v2035);
        }
        ret$$6 = null;
        delete events$$3[type$$37];
      }
      var v3535 = i$$25;
      i$$25 = i$$25 + 1;
      introspect(JAM.policy.p3) {
        v2038 = type$$37 = types$$1[v3535];
      }
    }
    var v2040 = jQuery$$1.isEmptyObject(events$$3);
    if (v2040) {
      var handle$$12 = elemData$$1.handle;
      if (handle$$12) {
        handle$$12.elem = null;
      }
      delete elemData$$1.events;
      delete elemData$$1.handle;
      var v2039 = jQuery$$1.isEmptyObject(elemData$$1);
      if (v2039) {
        jQuery$$1.removeData(elem$$21);
      }
    }
    return;
  }
  function v84(elem$$20, types, handler$$4, data$$25) {
    function v83() {
      var v2041;
      var v5091 = typeof jQuery$$1;
      var v4528 = v5091 !== "undefined";
      if (v4528) {
        var v5368 = jQuery$$1.event;
        var v5092 = v5368.triggered;
        v4528 = !v5092;
      }
      var v3538 = v4528;
      if (v3538) {
        var v4529 = jQuery$$1.event;
        var v3536 = v4529.handle;
        var v3537 = eventHandle.elem;
        v2041 = v3536.apply(v3537, arguments);
      } else {
        v2041 = undefined$$1;
      }
      return v2041;
    }
    var v4530 = elem$$20.nodeType;
    var v3539 = v4530 === 3;
    var v4532 = !v3539;
    if (v4532) {
      var v4531 = elem$$20.nodeType;
      v3539 = v4531 === 8;
    }
    var v2042 = v3539;
    if (v2042) {
      return;
    }
    var v3540 = elem$$20.setInterval;
    if (v3540) {
      var v4533 = elem$$20 !== window$$1;
      if (v4533) {
        var v5093 = elem$$20.frameElement;
        v4533 = !v5093;
      }
      v3540 = v4533;
    }
    var v2043 = v3540;
    if (v2043) {
      elem$$20 = window$$1;
    }
    var handleObjIn;
    var handleObj$$1;
    var v2044 = handler$$4.handler;
    if (v2044) {
      handleObjIn = handler$$4;
      handler$$4 = handleObjIn.handler;
    }
    var v3541 = handler$$4.guid;
    var v2045 = !v3541;
    if (v2045) {
      handler$$4.guid = jQuery$$1.guid;
      var v3542 = jQuery$$1.guid;
      jQuery$$1.guid = v3542 + 1;
    }
    var elemData = jQuery$$1.data(elem$$20);
    var v2046 = !elemData;
    if (v2046) {
      return;
    }
    var v2047 = elemData.events;
    var v3543 = !v2047;
    if (v3543) {
      v2047 = {};
    }
    var events$$2 = elemData.events = v2047;
    var eventHandle = elemData.handle;
    var v2048 = !eventHandle;
    if (v2048) {
      elemData.handle = eventHandle = v83;
    }
    eventHandle.elem = elem$$20;
    types = types.split(" ");
    var type$$36;
    var i$$24 = 0;
    var namespaces;
    var v3544 = i$$24;
    i$$24 = i$$24 + 1;
    introspect(JAM.policy.p3) {
      var v2063 = type$$36 = types[v3544]
    }
    for (;v2063;) {
      var v2049;
      if (handleObjIn) {
        v2049 = jQuery$$1.extend({}, handleObjIn);
      } else {
        v2049 = {handler:handler$$4, data:data$$25};
      }
      handleObj$$1 = v2049;
      var v3545 = type$$36.indexOf(".");
      var v2051 = v3545 > -1;
      if (v2051) {
        namespaces = type$$36.split(".");
        type$$36 = namespaces.shift();
        var v2050 = handleObj$$1;
        var v4534 = namespaces.slice(0);
        var v3546 = v4534.sort();
        var v5591 = v3546.join(".");
        v2050.namespace = v5591;
      } else {
        namespaces = [];
        handleObj$$1.namespace = "";
      }
      handleObj$$1.type = type$$36;
      handleObj$$1.guid = handler$$4.guid;
      introspect(JAM.policy.p3) {
        var handlers = events$$2[type$$36]
      }
      var v4535 = jQuery$$1.event;
      var v3547 = v4535.special;
      introspect(JAM.policy.p3) {
        var v2052 = v3547[type$$36]
      }
      var v3548 = !v2052;
      if (v3548) {
        v2052 = {};
      }
      var special$$1 = v2052;
      var v2057 = !handlers;
      if (v2057) {
        introspect(JAM.policy.p2) {
          handlers = events$$2[type$$36] = [];
        }
        var v4536 = special$$1.setup;
        var v3549 = !v4536;
        var v4538 = !v3549;
        if (v4538) {
          var v5094 = special$$1.setup;
          var v4537 = v5094.call(elem$$20, data$$25, namespaces, eventHandle);
          v3549 = v4537 === false;
        }
        var v2056 = v3549;
        if (v2056) {
          var v2055 = elem$$20.addEventListener;
          if (v2055) {
            elem$$20.addEventListener(type$$36, eventHandle, false);
          } else {
            var v2054 = elem$$20.attachEvent;
            if (v2054) {
              var v2053 = "on" + type$$36;
              elem$$20.attachEvent(v2053, eventHandle);
            }
          }
        }
      }
      var v2061 = special$$1.add;
      if (v2061) {
        var v2058 = special$$1.add;
        v2058.call(elem$$20, handleObj$$1);
        var v4539 = handleObj$$1.handler;
        var v3550 = v4539.guid;
        var v2060 = !v3550;
        if (v2060) {
          var v2059 = handleObj$$1.handler;
          v2059.guid = handler$$4.guid;
        }
      }
      handlers.push(handleObj$$1);
      var v3551 = jQuery$$1.event;
      var v2062 = v3551.global;
      introspect(JAM.policy.p2) {
        v2062[type$$36] = true;
      }
      var v3552 = i$$24;
      i$$24 = i$$24 + 1;
      introspect(JAM.policy.p3) {
        v2063 = type$$36 = types[v3552];
      }
    }
    elem$$20 = null;
    return;
  }
  function v82(elem$$19, name$$39, value$$36, pass$$1) {
    var v4540 = !elem$$19;
    var v5096 = !v4540;
    if (v5096) {
      var v5095 = elem$$19.nodeType;
      v4540 = v5095 === 3;
    }
    var v3553 = v4540;
    var v4542 = !v3553;
    if (v4542) {
      var v4541 = elem$$19.nodeType;
      v3553 = v4541 === 8;
    }
    var v2064 = v3553;
    if (v2064) {
      return undefined$$1;
    }
    var v3554 = pass$$1;
    if (v3554) {
      var v4543 = jQuery$$1.attrFn;
      v3554 = name$$39 in v4543;
    }
    var v2066 = v3554;
    if (v2066) {
      var v2065 = jQuery$$1(elem$$19);
      introspect(JAM.policy.p3) {
        return v2065[name$$39](value$$36);
      }
    }
    var v3555 = elem$$19.nodeType;
    var v2067 = v3555 !== 1;
    var v3557 = !v2067;
    if (v3557) {
      var v3556 = jQuery$$1.isXMLDoc(elem$$19);
      v2067 = !v3556;
    }
    var notxml = v2067;
    var set = value$$36 !== undefined$$1;
    var v3558 = notxml;
    if (v3558) {
      var v4544 = jQuery$$1.props;
      introspect(JAM.policy.p3) {
        v3558 = v4544[name$$39];
      }
    }
    var v2068 = v3558;
    var v3559 = !v2068;
    if (v3559) {
      v2068 = name$$39;
    }
    name$$39 = v2068;
    var v3560 = elem$$19.nodeType;
    var v2082 = v3560 === 1;
    if (v2082) {
      var special = rspecialurl.test(name$$39);
      var v3561 = name$$39 === "selected";
      if (v3561) {
        var v5097 = jQuery$$1.support;
        var v4545 = v5097.optSelected;
        v3561 = !v4545;
      }
      var v2069 = v3561;
      if (v2069) {
        var parent = elem$$19.parentNode
      }
      var v4546 = name$$39 in elem$$19;
      if (v4546) {
        v4546 = notxml;
      }
      var v3562 = v4546;
      if (v3562) {
        v3562 = !special;
      }
      var v2075 = v3562;
      if (v2075) {
        if (set) {
          var v4547 = name$$39 === "type";
          if (v4547) {
            var v5098 = elem$$19.nodeName;
            v4547 = rtype.test(v5098);
          }
          var v3563 = v4547;
          if (v3563) {
            v3563 = elem$$19.parentNode;
          }
          var v2070 = v3563;
          if (v2070) {
            jQuery$$1.error("type property can't be changed");
          }
          introspect(JAM.policy.p2) {
            elem$$19[name$$39] = value$$36;
          }
        }
        var v3564 = jQuery$$1.nodeName(elem$$19, "form");
        if (v3564) {
          v3564 = elem$$19.getAttributeNode(name$$39);
        }
        var v2072 = v3564;
        if (v2072) {
          var v2071 = elem$$19.getAttributeNode(name$$39);
          return v2071.nodeValue;
        }
        var v2074 = name$$39 === "tabIndex";
        if (v2074) {
          var attributeNode = elem$$19.getAttributeNode("tabIndex");
          var v2073;
          var v4548 = attributeNode;
          if (v4548) {
            v4548 = attributeNode.specified;
          }
          var v3566 = v4548;
          if (v3566) {
            v2073 = attributeNode.value;
          } else {
            var v3565;
            var v5369 = elem$$19.nodeName;
            var v5099 = rfocusable.test(v5369);
            var v5371 = !v5099;
            if (v5371) {
              var v5475 = elem$$19.nodeName;
              var v5370 = rclickable.test(v5475);
              if (v5370) {
                v5370 = elem$$19.href;
              }
              v5099 = v5370;
            }
            var v4549 = v5099;
            if (v4549) {
              v3565 = 0;
            } else {
              v3565 = undefined$$1;
            }
            v2073 = v3565;
          }
          return v2073;
        }
        introspect(JAM.policy.p3) {
          return elem$$19[name$$39];
        }
      }
      var v5372 = jQuery$$1.support;
      var v5100 = v5372.style;
      var v4550 = !v5100;
      if (v4550) {
        v4550 = notxml;
      }
      var v3567 = v4550;
      if (v3567) {
        v3567 = name$$39 === "style";
      }
      var v2078 = v3567;
      if (v2078) {
        if (set) {
          var v2076 = elem$$19.style;
          v2076.cssText = "" + value$$36;
        }
        var v2077 = elem$$19.style;
        return v2077.cssText;
      }
      if (set) {
        var v2079 = "" + value$$36;
        elem$$19.setAttribute(name$$39, v2079);
      }
      var v2080;
      var v5476 = jQuery$$1.support;
      var v5373 = v5476.hrefNormalized;
      var v5101 = !v5373;
      if (v5101) {
        v5101 = notxml;
      }
      var v4551 = v5101;
      if (v4551) {
        v4551 = special;
      }
      var v3568 = v4551;
      if (v3568) {
        v2080 = elem$$19.getAttribute(name$$39, 2);
      } else {
        v2080 = elem$$19.getAttribute(name$$39);
      }
      var attr = v2080;
      var v2081;
      var v3569 = attr === null;
      if (v3569) {
        v2081 = undefined$$1;
      } else {
        v2081 = attr;
      }
      return v2081;
    }
    return jQuery$$1.style(elem$$19, name$$39, value$$36);
  }
  function v81(value$$35) {
    function v80(i$$23) {
      function v79() {
        var v4552 = jQuery$$1(this);
        var v3570 = v4552.val();
        var v2083 = jQuery$$1.inArray(v3570, values$$5);
        this.selected = v2083 >= 0;
        return;
      }
      var self$$5 = jQuery$$1(this);
      var val = value$$35;
      var v3571 = this.nodeType;
      var v2084 = v3571 !== 1;
      if (v2084) {
        return;
      }
      if (isFunction) {
        var v2085 = self$$5.val();
        val = value$$35.call(this, i$$23, v2085);
      }
      var v3572 = typeof val;
      var v2086 = v3572 === "number";
      if (v2086) {
        val = val + "";
      }
      var v3573 = jQuery$$1.isArray(val);
      if (v3573) {
        var v4553 = this.type;
        v3573 = rradiocheck.test(v4553);
      }
      var v2091 = v3573;
      if (v2091) {
        var v3574 = self$$5.val();
        var v2087 = jQuery$$1.inArray(v3574, val);
        this.checked = v2087 >= 0;
      } else {
        var v2090 = jQuery$$1.nodeName(this, "select");
        if (v2090) {
          var values$$5 = jQuery$$1.makeArray(val);
          var v2088 = jQuery$$1("option", this);
          v2088.each(v79);
          var v3575 = values$$5.length;
          var v2089 = !v3575;
          if (v2089) {
            this.selectedIndex = -1;
          }
        } else {
          this.value = val;
        }
      }
      return;
    }
    var v2105 = value$$35 === undefined$$1;
    if (v2105) {
      var elem$$18 = this[0];
      if (elem$$18) {
        var v2093 = jQuery$$1.nodeName(elem$$18, "option");
        if (v2093) {
          var v2092;
          var v5374 = elem$$18.attributes;
          var v5102 = v5374.value;
          var v5375 = !v5102;
          if (v5375) {
            v5102 = {};
          }
          var v4554 = v5102;
          var v3576 = v4554.specified;
          if (v3576) {
            v2092 = elem$$18.value;
          } else {
            v2092 = elem$$18.text;
          }
          return v2092;
        }
        var v2101 = jQuery$$1.nodeName(elem$$18, "select");
        if (v2101) {
          var index$$39 = elem$$18.selectedIndex;
          var values$$4 = [];
          var options$$2 = elem$$18.options;
          var v2094 = elem$$18.type;
          var one = v2094 === "select-one";
          var v2095 = index$$39 < 0;
          if (v2095) {
            return null;
          }
          var v2096;
          if (one) {
            v2096 = index$$39;
          } else {
            v2096 = 0;
          }
          var i$$22 = v2096;
          var v2097;
          if (one) {
            v2097 = index$$39 + 1;
          } else {
            v2097 = options$$2.length;
          }
          var max = v2097;
          var v2100 = i$$22 < max;
          for (;v2100;) {
            introspect(JAM.policy.p3) {
              var option = options$$2[i$$22]
            }
            var v2099 = option.selected;
            if (v2099) {
              var v2098 = jQuery$$1(option);
              value$$35 = v2098.val();
              if (one) {
                return value$$35;
              }
              values$$4.push(value$$35);
            }
            i$$22 = i$$22 + 1;
            v2100 = i$$22 < max;
          }
          return values$$4;
        }
        var v4555 = elem$$18.type;
        var v3577 = rradiocheck.test(v4555);
        if (v3577) {
          var v5103 = jQuery$$1.support;
          var v4556 = v5103.checkOn;
          v3577 = !v4556;
        }
        var v2103 = v3577;
        if (v2103) {
          var v2102;
          var v4557 = elem$$18.getAttribute("value");
          var v3578 = v4557 === null;
          if (v3578) {
            v2102 = "on";
          } else {
            v2102 = elem$$18.value;
          }
          return v2102;
        }
        var v3579 = elem$$18.value;
        var v4558 = !v3579;
        if (v4558) {
          v3579 = "";
        }
        var v2104 = v3579;
        return v2104.replace(rreturn, "");
      }
      return undefined$$1;
    }
    var isFunction = jQuery$$1.isFunction(value$$35);
    return this.each(v80);
  }
  function v78(selector$$4) {
    var v2106 = " " + selector$$4;
    var className$$3 = v2106 + " ";
    var i$$21 = 0;
    var l$$4 = this.length;
    var v2108 = i$$21 < l$$4;
    for (;v2108;) {
      introspect(JAM.policy.p3) {
        var v5506 = this[i$$21]
      }
      var v5477 = v5506.className;
      var v5376 = " " + v5477;
      var v5104 = v5376 + " ";
      var v4559 = v5104.replace(rclass, " ");
      var v3580 = v4559.indexOf(className$$3);
      var v2107 = v3580 > -1;
      if (v2107) {
        return true;
      }
      i$$21 = i$$21 + 1;
      v2108 = i$$21 < l$$4;
    }
    return false;
  }
  function v77(value$$34, stateVal) {
    function v76() {
      var v2116 = type$$35 === "string";
      if (v2116) {
        var className$$2;
        var i$$20 = 0;
        var self$$4 = jQuery$$1(this);
        var state = stateVal;
        var classNames$$3 = value$$34.split(rspace);
        var v3581 = i$$20;
        i$$20 = i$$20 + 1;
        introspect(JAM.policy.p3) {
          var v2111 = className$$2 = classNames$$3[v3581]
        }
        for (;v2111;) {
          var v2109;
          if (isBool) {
            v2109 = state;
          } else {
            var v3582 = self$$4.hasClass(className$$2);
            v2109 = !v3582;
          }
          state = v2109;
          var v3583;
          if (state) {
            v3583 = "addClass";
          } else {
            v3583 = "removeClass";
          }
          var v2110 = v3583;
          introspect(JAM.policy.p3) {
            self$$4[v2110](className$$2);
          }
          var v3584 = i$$20;
          i$$20 = i$$20 + 1;
          introspect(JAM.policy.p3) {
            v2111 = className$$2 = classNames$$3[v3584];
          }
        }
      } else {
        var v3585 = type$$35 === "undefined";
        var v4560 = !v3585;
        if (v4560) {
          v3585 = type$$35 === "boolean";
        }
        var v2115 = v3585;
        if (v2115) {
          var v2113 = this.className;
          if (v2113) {
            var v2112 = this.className;
            jQuery$$1.data(this, "__className__", v2112);
          }
          var v2114;
          var v4561 = this.className;
          var v5105 = !v4561;
          if (v5105) {
            v4561 = value$$34 === false;
          }
          var v3587 = v4561;
          if (v3587) {
            v2114 = "";
          } else {
            var v3586 = jQuery$$1.data(this, "__className__");
            var v4562 = !v3586;
            if (v4562) {
              v3586 = "";
            }
            v2114 = v3586;
          }
          this.className = v2114;
        }
      }
      return;
    }
    function v75(i$$19) {
      var self$$3 = jQuery$$1(this);
      var v3588 = self$$3.attr("class");
      var v2117 = value$$34.call(this, i$$19, v3588, stateVal);
      self$$3.toggleClass(v2117, stateVal);
      return;
    }
    var type$$35 = typeof value$$34;
    var v2118 = typeof stateVal;
    var isBool = v2118 === "boolean";
    var v2119 = jQuery$$1.isFunction(value$$34);
    if (v2119) {
      return this.each(v75);
    }
    return this.each(v76);
  }
  function v74(value$$33) {
    function v73(i$$18) {
      var self$$2 = jQuery$$1(this);
      var v3589 = self$$2.attr("class");
      var v2120 = value$$33.call(this, i$$18, v3589);
      self$$2.removeClass(v2120);
      return;
    }
    var v2121 = jQuery$$1.isFunction(value$$33);
    if (v2121) {
      return this.each(v73);
    }
    var v4563 = value$$33;
    if (v4563) {
      var v5106 = typeof value$$33;
      v4563 = v5106 === "string";
    }
    var v3590 = v4563;
    var v4564 = !v3590;
    if (v4564) {
      v3590 = value$$33 === undefined$$1;
    }
    var v2129 = v3590;
    if (v2129) {
      var v2122 = value$$33 || "";
      var classNames$$2 = v2122.split(rspace);
      var i$$17 = 0;
      var l$$3 = this.length;
      var v2128 = i$$17 < l$$3;
      for (;v2128;) {
        introspect(JAM.policy.p3) {
          var elem$$17 = this[i$$17]
        }
        var v4565 = elem$$17.nodeType;
        var v3591 = v4565 === 1;
        if (v3591) {
          v3591 = elem$$17.className;
        }
        var v2127 = v3591;
        if (v2127) {
          if (value$$33) {
            var v4566 = elem$$17.className;
            var v3592 = " " + v4566;
            var v2123 = v3592 + " ";
            var className$$1 = v2123.replace(rclass, " ");
            var c$$1 = 0;
            var cl$$1 = classNames$$2.length;
            var v2125 = c$$1 < cl$$1;
            for (;v2125;) {
              introspect(JAM.policy.p3) {
                var v4567 = classNames$$2[c$$1]
              }
              var v3593 = " " + v4567;
              var v2124 = v3593 + " ";
              className$$1 = className$$1.replace(v2124, " ");
              c$$1 = c$$1 + 1;
              v2125 = c$$1 < cl$$1;
            }
            var v2126 = elem$$17;
            var v5592 = jQuery$$1.trim(className$$1);
            v2126.className = v5592;
          } else {
            elem$$17.className = "";
          }
        }
        i$$17 = i$$17 + 1;
        v2128 = i$$17 < l$$3;
      }
    }
    return this;
  }
  function v72(value$$32) {
    function v71(i$$16) {
      var self$$1 = jQuery$$1(this);
      var v3594 = self$$1.attr("class");
      var v2130 = value$$32.call(this, i$$16, v3594);
      self$$1.addClass(v2130);
      return;
    }
    var v2131 = jQuery$$1.isFunction(value$$32);
    if (v2131) {
      return this.each(v71);
    }
    var v3595 = value$$32;
    if (v3595) {
      var v4568 = typeof value$$32;
      v3595 = v4568 === "string";
    }
    var v2140 = v3595;
    if (v2140) {
      var v2132 = value$$32 || "";
      var classNames$$1 = v2132.split(rspace);
      var i$$15 = 0;
      var l$$2 = this.length;
      var v2139 = i$$15 < l$$2;
      for (;v2139;) {
        introspect(JAM.policy.p3) {
          var elem$$16 = this[i$$15]
        }
        var v3596 = elem$$16.nodeType;
        var v2138 = v3596 === 1;
        if (v2138) {
          var v3597 = elem$$16.className;
          var v2137 = !v3597;
          if (v2137) {
            elem$$16.className = value$$32;
          } else {
            var v3598 = elem$$16.className;
            var v2133 = " " + v3598;
            var className = v2133 + " ";
            var setClass = elem$$16.className;
            var c = 0;
            var cl = classNames$$1.length;
            var v2135 = c < cl;
            for (;v2135;) {
              introspect(JAM.policy.p3) {
                var v5377 = classNames$$1[c]
              }
              var v5107 = " " + v5377;
              var v4569 = v5107 + " ";
              var v3599 = className.indexOf(v4569);
              var v2134 = v3599 < 0;
              if (v2134) {
                introspect(JAM.policy.p3) {
                  var v4570 = classNames$$1[c]
                }
                var v3600 = " " + v4570;
                setClass = setClass + v3600;
              }
              c = c + 1;
              v2135 = c < cl;
            }
            var v2136 = elem$$16;
            var v5593 = jQuery$$1.trim(setClass);
            v2136.className = v5593;
          }
        }
        i$$15 = i$$15 + 1;
        v2139 = i$$15 < l$$2;
      }
    }
    return this;
  }
  function v70(name$$38, fn$$5) {
    function v69() {
      jQuery$$1.attr(this, name$$38, "");
      var v3601 = this.nodeType;
      var v2141 = v3601 === 1;
      if (v2141) {
        this.removeAttribute(name$$38);
      }
      return;
    }
    return this.each(v69);
  }
  function v68(name$$37, value$$31) {
    var v2142 = jQuery$$1.attr;
    return access(this, name$$37, value$$31, true, v2142);
  }
  function v67(type$$34) {
    var v2143 = type$$34 || "fx";
    return this.queue(v2143, []);
  }
  function v66(time, type$$33) {
    function v65() {
      function v64() {
        jQuery$$1.dequeue(elem$$15, type$$33);
        return;
      }
      var elem$$15 = this;
      setTimeout(v64, time);
      return;
    }
    var v2144;
    var v3603 = jQuery$$1.fx;
    if (v3603) {
      var v5108 = jQuery$$1.fx;
      var v4571 = v5108.speeds;
      introspect(JAM.policy.p3) {
        var v3602 = v4571[time]
      }
      var v4572 = !v3602;
      if (v4572) {
        v3602 = time;
      }
      v2144 = v3602;
    } else {
      v2144 = time;
    }
    time = v2144;
    type$$33 = type$$33 || "fx";
    return this.queue(type$$33, v65);
  }
  function v63(type$$32) {
    function v62() {
      jQuery$$1.dequeue(this, type$$32);
      return;
    }
    return this.each(v62);
  }
  function v61(type$$31, data$$24) {
    function v60(i$$14, elem$$14) {
      var queue$$1 = jQuery$$1.queue(this, type$$31, data$$24);
      var v3604 = type$$31 === "fx";
      if (v3604) {
        var v4573 = queue$$1[0];
        v3604 = v4573 !== "inprogress";
      }
      var v2145 = v3604;
      if (v2145) {
        jQuery$$1.dequeue(this, type$$31);
      }
      return;
    }
    var v3605 = typeof type$$31;
    var v2146 = v3605 !== "string";
    if (v2146) {
      data$$24 = type$$31;
      type$$31 = "fx";
    }
    var v2148 = data$$24 === undefined$$1;
    if (v2148) {
      var v2147 = this[0];
      return jQuery$$1.queue(v2147, type$$31);
    }
    return this.each(v60);
  }
  function v59(elem$$13, type$$30) {
    function v58() {
      jQuery$$1.dequeue(elem$$13, type$$30);
      return;
    }
    type$$30 = type$$30 || "fx";
    var queue = jQuery$$1.queue(elem$$13, type$$30);
    var fn$$4 = queue.shift();
    var v2149 = fn$$4 === "inprogress";
    if (v2149) {
      fn$$4 = queue.shift();
    }
    if (fn$$4) {
      var v2150 = type$$30 === "fx";
      if (v2150) {
        queue.unshift("inprogress");
      }
      fn$$4.call(elem$$13, v58);
    }
    return;
  }
  function v57(elem$$12, type$$29, data$$23) {
    var v2151 = !elem$$12;
    if (v2151) {
      return;
    }
    var v2152 = type$$29 || "fx";
    type$$29 = v2152 + "queue";
    var q = jQuery$$1.data(elem$$12, type$$29);
    var v2153 = !data$$23;
    if (v2153) {
      return q || [];
    }
    var v3606 = !q;
    var v4574 = !v3606;
    if (v4574) {
      v3606 = jQuery$$1.isArray(data$$23);
    }
    var v2155 = v3606;
    if (v2155) {
      var v2154 = jQuery$$1.makeArray(data$$23);
      q = jQuery$$1.data(elem$$12, type$$29, v2154);
    } else {
      q.push(data$$23);
    }
    return q;
  }
  function v56(key$$17) {
    function v55() {
      jQuery$$1.removeData(this, key$$17);
      return;
    }
    return this.each(v55);
  }
  function v54(key$$16, value$$30) {
    function v53() {
      jQuery$$1.data(this, key$$16, value$$30);
      return;
    }
    function v52() {
      jQuery$$1.data(this, key$$16);
      return;
    }
    var v4575 = typeof key$$16;
    var v3607 = v4575 === "undefined";
    if (v3607) {
      v3607 = this.length;
    }
    var v2158 = v3607;
    if (v2158) {
      var v2156 = this[0];
      return jQuery$$1.data(v2156);
    } else {
      var v3608 = typeof key$$16;
      var v2157 = v3608 === "object";
      if (v2157) {
        return this.each(v52);
      }
    }
    var parts = key$$16.split(".");
    var v2159;
    var v3610 = parts[1];
    if (v3610) {
      var v3609 = parts[1];
      v2159 = "." + v3609;
    } else {
      v2159 = "";
    }
    parts[1] = v2159;
    var v2166 = value$$30 === undefined$$1;
    if (v2166) {
      var v4576 = parts[1];
      var v3611 = "getData" + v4576;
      var v2160 = v3611 + "!";
      var v3612 = parts[0];
      var v2161 = [v3612];
      var data$$22 = this.triggerHandler(v2160, v2161);
      var v3613 = data$$22 === undefined$$1;
      if (v3613) {
        v3613 = this.length;
      }
      var v2163 = v3613;
      if (v2163) {
        var v2162 = this[0];
        data$$22 = jQuery$$1.data(v2162, key$$16);
      }
      var v2164;
      var v4577 = data$$22 === undefined$$1;
      if (v4577) {
        v4577 = parts[1];
      }
      var v3615 = v4577;
      if (v3615) {
        var v3614 = parts[0];
        v2164 = this.data(v3614);
      } else {
        v2164 = data$$22;
      }
      return v2164;
    } else {
      var v5109 = parts[1];
      var v4578 = "setData" + v5109;
      var v3616 = v4578 + "!";
      var v4579 = parts[0];
      var v3617 = [v4579, value$$30];
      var v2165 = this.trigger(v3616, v3617);
      return v2165.each(v53);
    }
    return;
  }
  function v51(elem$$11, name$$36) {
    var v3618 = elem$$11.nodeName;
    if (v3618) {
      var v4580 = jQuery$$1.noData;
      var v5110 = elem$$11.nodeName;
      var v4581 = v5110.toLowerCase();
      introspect(JAM.policy.p3) {
        v3618 = v4580[v4581];
      }
    }
    var v2167 = v3618;
    if (v2167) {
      return;
    }
    var v2168;
    var v3619 = elem$$11 == window$$1;
    if (v3619) {
      v2168 = windowData;
    } else {
      v2168 = elem$$11;
    }
    elem$$11 = v2168;
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
        var v2169 = jQuery$$1.isEmptyObject(thisCache$$1);
        if (v2169) {
          jQuery$$1.removeData(elem$$11);
        }
      }
    } else {
      var v3620 = jQuery$$1.support;
      var v2173 = v3620.deleteExpando;
      if (v2173) {
        var v2170 = jQuery$$1.expando;
        delete elem$$11[v2170];
      } else {
        var v2172 = elem$$11.removeAttribute;
        if (v2172) {
          var v2171 = jQuery$$1.expando;
          elem$$11.removeAttribute(v2171);
        }
      }
      delete cache$$1[id$$2];
    }
    return;
  }
  function v50(elem$$10, name$$35, data$$21) {
    var v3621 = elem$$10.nodeName;
    if (v3621) {
      var v4582 = jQuery$$1.noData;
      var v5111 = elem$$10.nodeName;
      var v4583 = v5111.toLowerCase();
      introspect(JAM.policy.p3) {
        v3621 = v4582[v4583];
      }
    }
    var v2174 = v3621;
    if (v2174) {
      return;
    }
    var v2175;
    var v3622 = elem$$10 == window$$1;
    if (v3622) {
      v2175 = windowData;
    } else {
      v2175 = elem$$10;
    }
    elem$$10 = v2175;
    introspect(JAM.policy.p3) {
      var id$$1 = elem$$10[expando]
    }
    var cache = jQuery$$1.cache;
    var thisCache;
    var v4584 = !id$$1;
    if (v4584) {
      var v5112 = typeof name$$35;
      v4584 = v5112 === "string";
    }
    var v3623 = v4584;
    if (v3623) {
      v3623 = data$$21 === undefined$$1;
    }
    var v2176 = v3623;
    if (v2176) {
      return null;
    }
    var v2177 = !id$$1;
    if (v2177) {
      id$$1 = uuid = uuid + 1;
    }
    var v3624 = typeof name$$35;
    var v2181 = v3624 === "object";
    if (v2181) {
      introspect(JAM.policy.p2) {
        elem$$10[expando] = id$$1;
      }
      var v2178 = cache;
      var v2179 = id$$1;
      var v5594 = jQuery$$1.extend(true, {}, name$$35);
      introspect(JAM.policy.p2) {
        thisCache = v2178[v2179] = v5594;
      }
    } else {
      introspect(JAM.policy.p3) {
        var v3625 = cache[id$$1]
      }
      var v2180 = !v3625;
      if (v2180) {
        introspect(JAM.policy.p2) {
          elem$$10[expando] = id$$1;
        }
        introspect(JAM.policy.p2) {
          cache[id$$1] = {};
        }
      }
    }
    introspect(JAM.policy.p3) {
      thisCache = cache[id$$1];
    }
    var v2182 = data$$21 !== undefined$$1;
    if (v2182) {
      introspect(JAM.policy.p2) {
        thisCache[name$$35] = data$$21;
      }
    }
    var v2183;
    var v4585 = typeof name$$35;
    var v3626 = v4585 === "string";
    if (v3626) {
      introspect(JAM.policy.p3) {
        v2183 = thisCache[name$$35];
      }
    } else {
      v2183 = thisCache;
    }
    return v2183;
  }
  function v49() {
    function v48() {
      var div$$1 = document$$1.createElement("div");
      var v2184 = div$$1.style;
      var v3627 = div$$1.style;
      v2184.width = v3627.paddingLeft = "1px";
      var v2185 = document$$1.body;
      v2185.appendChild(div$$1);
      var v2186 = jQuery$$1.support;
      var v3628 = div$$1.offsetWidth;
      jQuery$$1.boxModel = v2186.boxModel = v3628 === 2;
      var v4586 = document$$1.body;
      var v3629 = v4586.removeChild(div$$1);
      var v2187 = v3629.style;
      v2187.display = "none";
      div$$1 = null;
      return;
    }
    function click() {
      var v2188 = jQuery$$1.support;
      v2188.noCloneEvent = false;
      div.detachEvent("onclick", click);
      return;
    }
    function eventSupported(eventName) {
      var el = document$$1.createElement("div");
      eventName = "on" + eventName;
      var isSupported = eventName in el;
      var v2190 = !isSupported;
      if (v2190) {
        el.setAttribute(eventName, "return;");
        introspect(JAM.policy.p3) {
          var v3630 = el[eventName]
        }
        var v2189 = typeof v3630;
        isSupported = v2189 === "function";
      }
      el = null;
      return isSupported;
    }
    jQuery$$1.support = {};
    var root = document$$1.documentElement;
    var script$$1 = document$$1.createElement("script");
    var div = document$$1.createElement("div");
    var v2191 = now();
    var id = "script" + v2191;
    var v2192 = div.style;
    v2192.display = "none";
    div.innerHTML = "   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
    var all = div.getElementsByTagName("*");
    var v2193 = div.getElementsByTagName("a");
    var a = v2193[0];
    var v4587 = !all;
    var v5114 = !v4587;
    if (v5114) {
      var v5113 = all.length;
      v4587 = !v5113;
    }
    var v3631 = v4587;
    var v4588 = !v3631;
    if (v4588) {
      v3631 = !a;
    }
    var v2194 = v3631;
    if (v2194) {
      return;
    }
    var v2195 = jQuery$$1;
    var v5115 = div.firstChild;
    var v4589 = v5115.nodeType;
    var v3632 = v4589 === 3;
    var v5116 = div.getElementsByTagName("tbody");
    var v4590 = v5116.length;
    var v3633 = !v4590;
    var v5378 = div.getElementsByTagName("link");
    var v5117 = v5378.length;
    var v4591 = !v5117;
    var v3634 = !v4591;
    var v4592 = a.getAttribute("style");
    var v3635 = /red/.test(v4592);
    var v4593 = a.getAttribute("href");
    var v3636 = v4593 === "/a";
    var v5118 = a.style;
    var v4594 = v5118.opacity;
    var v3637 = /^0.55$/.test(v4594);
    var v5379 = a.style;
    var v5119 = v5379.cssFloat;
    var v4595 = !v5119;
    var v3638 = !v4595;
    var v5380 = div.getElementsByTagName("input");
    var v5120 = v5380[0];
    var v4596 = v5120.value;
    var v3639 = v4596 === "on";
    var v5121 = document$$1.createElement("select");
    var v5122 = document$$1.createElement("option");
    var v4597 = v5121.appendChild(v5122);
    var v3640 = v4597.selected;
    var v5478 = document$$1.createElement("div");
    var v5381 = div.appendChild(v5478);
    var v5123 = div.removeChild(v5381);
    var v4598 = v5123.parentNode;
    var v3641 = v4598 === null;
    v2195.support = {leadingWhitespace:v3632, tbody:v3633, htmlSerialize:v3634, style:v3635, hrefNormalized:v3636, opacity:v3637, cssFloat:v3638, checkOn:v3639, optSelected:v3640, parentNode:v3641, deleteExpando:true, checkClone:false, scriptEval:false, noCloneEvent:true, boxModel:null};
    script$$1.type = "text/javascript";
    try {
      var v4599 = "window." + id;
      var v3642 = v4599 + "=1;";
      var v2196 = document$$1.createTextNode(v3642);
      script$$1.appendChild(v2196);
    } catch (e$$5) {
    }
    var v2197 = root.firstChild;
    root.insertBefore(script$$1, v2197);
    introspect(JAM.policy.p3) {
      var v2199 = window$$1[id]
    }
    if (v2199) {
      var v2198 = jQuery$$1.support;
      v2198.scriptEval = true;
      delete window$$1[id];
    }
    try {
      delete script$$1.test;
    } catch (e$$6) {
      var v2200 = jQuery$$1.support;
      v2200.deleteExpando = false;
    }
    root.removeChild(script$$1);
    var v3643 = div.attachEvent;
    if (v3643) {
      v3643 = div.fireEvent;
    }
    var v2202 = v3643;
    if (v2202) {
      div.attachEvent("onclick", click);
      var v2201 = div.cloneNode(true);
      v2201.fireEvent("onclick");
    }
    div = document$$1.createElement("div");
    div.innerHTML = "<input type='radio' name='radiotest' checked='checked'/>";
    var fragment$$1 = document$$1.createDocumentFragment();
    var v2203 = div.firstChild;
    fragment$$1.appendChild(v2203);
    var v2204 = jQuery$$1.support;
    var v5124 = fragment$$1.cloneNode(true);
    var v4600 = v5124.cloneNode(true);
    var v3644 = v4600.lastChild;
    v2204.checkClone = v3644.checked;
    jQuery$$1(v48);
    var v2205 = jQuery$$1.support;
    var v5595 = eventSupported("submit");
    v2205.submitBubbles = v5595;
    var v2206 = jQuery$$1.support;
    var v5596 = eventSupported("change");
    v2206.changeBubbles = v5596;
    root = script$$1 = div = all = a = null;
    return;
  }
  function v47() {
    var v3645 = document$$1.readyState;
    var v2207 = v3645 === "complete";
    if (v2207) {
      document$$1.detachEvent("onreadystatechange", DOMContentLoaded);
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
    return indexOf.call(array$$11, elem$$9);
  }
  function v44(ua) {
    ua = ua.toLowerCase();
    var v5125 = /(webkit)[ \/]([\w.]+)/.exec(ua);
    var v5382 = !v5125;
    if (v5382) {
      v5125 = /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(ua);
    }
    var v4601 = v5125;
    var v5126 = !v4601;
    if (v5126) {
      v4601 = /(msie) ([\w.]+)/.exec(ua);
    }
    var v3646 = v4601;
    var v4603 = !v3646;
    if (v4603) {
      var v5127 = /compatible/.test(ua);
      var v4602 = !v5127;
      if (v4602) {
        v4602 = /(mozilla)(?:.*? rv:([\w.]+))?/.exec(ua);
      }
      v3646 = v4602;
    }
    var v2208 = v3646;
    var v3647 = !v2208;
    if (v3647) {
      v2208 = [];
    }
    var match$$2 = v2208;
    var v3648 = match$$2[1];
    var v4604 = !v3648;
    if (v4604) {
      v3648 = "";
    }
    var v2209 = v3648;
    var v3649 = match$$2[2];
    var v4605 = !v3649;
    if (v4605) {
      v3649 = "0";
    }
    var v2210 = v3649;
    return{browser:v2209, version:v2210};
  }
  function v43(fn$$3, proxy, thisObject) {
    function v42() {
      var v2211 = thisObject || this;
      return fn$$3.apply(v2211, arguments);
    }
    var v3650 = arguments.length;
    var v2214 = v3650 === 2;
    if (v2214) {
      var v3651 = typeof proxy;
      var v2213 = v3651 === "string";
      if (v2213) {
        thisObject = fn$$3;
        introspect(JAM.policy.p3) {
          fn$$3 = thisObject[proxy];
        }
        proxy = undefined$$1;
      } else {
        var v3652 = proxy;
        if (v3652) {
          var v4606 = jQuery$$1.isFunction(proxy);
          v3652 = !v4606;
        }
        var v2212 = v3652;
        if (v2212) {
          thisObject = proxy;
          proxy = undefined$$1;
        }
      }
    }
    var v3653 = !proxy;
    if (v3653) {
      v3653 = fn$$3;
    }
    var v2215 = v3653;
    if (v2215) {
      proxy = v42;
    }
    if (fn$$3) {
      var v3654 = fn$$3.guid;
      var v4607 = !v3654;
      if (v4607) {
        v3654 = proxy.guid;
      }
      var v2216 = v3654;
      var v3655 = !v2216;
      if (v3655) {
        v2216 = jQuery$$1.guid;
        var v4608 = jQuery$$1.guid;
        jQuery$$1.guid = v4608 + 1;
      }
      proxy.guid = fn$$3.guid = v2216;
    }
    return proxy;
  }
  function v41(elems$$4, callback$$29, arg$$2) {
    var ret$$5 = [];
    var value$$29;
    var i$$13 = 0;
    var length$$16 = elems$$4.length;
    var v2220 = i$$13 < length$$16;
    for (;v2220;) {
      introspect(JAM.policy.p3) {
        var v2217 = elems$$4[i$$13]
      }
      value$$29 = callback$$29(v2217, i$$13, arg$$2);
      var v2219 = value$$29 != null;
      if (v2219) {
        var v2218 = ret$$5.length;
        introspect(JAM.policy.p2) {
          ret$$5[v2218] = value$$29;
        }
      }
      i$$13 = i$$13 + 1;
      v2220 = i$$13 < length$$16;
    }
    var v2221 = ret$$5.concat;
    return v2221.apply([], ret$$5);
  }
  function v40(elems$$3, callback$$28, inv) {
    var ret$$4 = [];
    var i$$12 = 0;
    var length$$15 = elems$$3.length;
    var v2224 = i$$12 < length$$15;
    for (;v2224;) {
      var v3656 = !inv;
      introspect(JAM.policy.p3) {
        var v5128 = elems$$3[i$$12]
      }
      var v4609 = callback$$28(v5128, i$$12);
      var v3657 = !v4609;
      var v2223 = v3656 !== v3657;
      if (v2223) {
        introspect(JAM.policy.p3) {
          var v2222 = elems$$3[i$$12]
        }
        ret$$4.push(v2222);
      }
      i$$12 = i$$12 + 1;
      v2224 = i$$12 < length$$15;
    }
    return ret$$4;
  }
  function v39(first$$1, second) {
    var i$$11 = first$$1.length;
    var j$$1 = 0;
    var v4610 = second.length;
    var v3658 = typeof v4610;
    var v2229 = v3658 === "number";
    if (v2229) {
      var l$$1 = second.length;
      var v2226 = j$$1 < l$$1;
      for (;v2226;) {
        var v2225 = i$$11;
        i$$11 = i$$11 + 1;
        introspect(JAM.policy.p4) {
          first$$1[v2225] = second[j$$1];
        }
        j$$1 = j$$1 + 1;
        v2226 = j$$1 < l$$1;
      }
    } else {
      introspect(JAM.policy.p3) {
        var v3659 = second[j$$1]
      }
      var v2228 = v3659 !== undefined$$1;
      for (;v2228;) {
        var v2227 = i$$11;
        i$$11 = i$$11 + 1;
        var v3660 = j$$1;
        j$$1 = j$$1 + 1;
        introspect(JAM.policy.p4) {
          first$$1[v2227] = second[v3660];
        }
        introspect(JAM.policy.p3) {
          var v3661 = second[j$$1]
        }
        v2228 = v3661 !== undefined$$1;
      }
    }
    first$$1.length = i$$11;
    return first$$1;
  }
  function v38(elem$$8, array$$10) {
    var v2230 = array$$10.indexOf;
    if (v2230) {
      return array$$10.indexOf(elem$$8);
    }
    var i$$10 = 0;
    var length$$14 = array$$10.length;
    var v2232 = i$$10 < length$$14;
    for (;v2232;) {
      introspect(JAM.policy.p3) {
        var v3662 = array$$10[i$$10]
      }
      var v2231 = v3662 === elem$$8;
      if (v2231) {
        return i$$10;
      }
      i$$10 = i$$10 + 1;
      v2232 = i$$10 < length$$14;
    }
    return-1;
  }
  function v37(array$$9, results) {
    var ret$$3 = results || [];
    var v2234 = array$$9 != null;
    if (v2234) {
      var v5383 = array$$9.length;
      var v5129 = v5383 == null;
      var v5385 = !v5129;
      if (v5385) {
        var v5384 = typeof array$$9;
        v5129 = v5384 === "string";
      }
      var v4611 = v5129;
      var v5130 = !v4611;
      if (v5130) {
        v4611 = jQuery$$1.isFunction(array$$9);
      }
      var v3663 = v4611;
      var v4613 = !v3663;
      if (v4613) {
        var v5131 = typeof array$$9;
        var v4612 = v5131 !== "function";
        if (v4612) {
          v4612 = array$$9.setInterval;
        }
        v3663 = v4612;
      }
      var v2233 = v3663;
      if (v2233) {
        push.call(ret$$3, array$$9);
      } else {
        jQuery$$1.merge(ret$$3, array$$9);
      }
    }
    return ret$$3;
  }
  function v36(text$$7) {
    var v2235 = text$$7 || "";
    return v2235.replace(rtrim, "");
  }
  function v35(object, callback$$27, args$$4) {
    var name$$34;
    var i$$9 = 0;
    var length$$13 = object.length;
    var v2236 = length$$13 === undefined$$1;
    var v3664 = !v2236;
    if (v3664) {
      v2236 = jQuery$$1.isFunction(object);
    }
    var isObj = v2236;
    if (args$$4) {
      if (isObj) {
        for (name$$34 in object) {
          introspect(JAM.policy.p3) {
            var v4614 = object[name$$34]
          }
          var v3665 = callback$$27.apply(v4614, args$$4);
          var v2237 = v3665 === false;
          if (v2237) {
            break;
          }
        }
      } else {
        var v2239 = i$$9 < length$$13;
        for (;v2239;) {
          var v5132 = i$$9;
          i$$9 = i$$9 + 1;
          introspect(JAM.policy.p3) {
            var v4615 = object[v5132]
          }
          var v3666 = callback$$27.apply(v4615, args$$4);
          var v2238 = v3666 === false;
          if (v2238) {
            break;
          }
          v2239 = i$$9 < length$$13;
        }
      }
    } else {
      if (isObj) {
        for (name$$34 in object) {
          introspect(JAM.policy.p3) {
            var v4616 = object[name$$34]
          }
          introspect(JAM.policy.p3) {
            var v4617 = object[name$$34]
          }
          var v3667 = callback$$27.call(v4616, name$$34, v4617);
          var v2240 = v3667 === false;
          if (v2240) {
            break;
          }
        }
      } else {
        var value$$28 = object[0];
        var v3668 = i$$9 < length$$13;
        if (v3668) {
          var v4618 = callback$$27.call(value$$28, i$$9, value$$28);
          v3668 = v4618 !== false;
        }
        var v2241 = v3668;
        for (;v2241;) {
          var v3669 = i$$9 = i$$9 + 1;
          introspect(JAM.policy.p3) {
            value$$28 = object[v3669];
          }
          var v3670 = i$$9 < length$$13;
          if (v3670) {
            var v4619 = callback$$27.call(value$$28, i$$9, value$$28);
            v3670 = v4619 !== false;
          }
          v2241 = v3670;
        }
      }
    }
    return object;
  }
  function v34(elem$$7, name$$33) {
    var v2242 = elem$$7.nodeName;
    if (v2242) {
      var v4620 = elem$$7.nodeName;
      var v3671 = v4620.toUpperCase();
      var v3672 = name$$33.toUpperCase();
      v2242 = v3671 === v3672;
    }
    return v2242;
  }
  function v33(data$$20) {
    var v3673 = data$$20;
    if (v3673) {
      v3673 = rnotwhite.test(data$$20);
    }
    var v2247 = v3673;
    if (v2247) {
      var v3674 = document$$1.getElementsByTagName("head");
      var v2243 = v3674[0];
      var v3675 = !v2243;
      if (v3675) {
        v2243 = document$$1.documentElement;
      }
      var head = v2243;
      var script = document$$1.createElement("script");
      script.type = "text/javascript";
      var v3676 = jQuery$$1.support;
      var v2245 = v3676.scriptEval;
      if (v2245) {
        var v2244 = document$$1.createTextNode(data$$20);
        script.appendChild(v2244);
      } else {
        script.text = data$$20;
      }
      var v2246 = head.firstChild;
      head.insertBefore(script, v2246);
      head.removeChild(script);
    }
    return;
  }
  function v32() {
    return;
  }
  function v31(data$$19) {
    var v4621 = typeof data$$19;
    var v3677 = v4621 !== "string";
    var v4622 = !v3677;
    if (v4622) {
      v3677 = !data$$19;
    }
    var v2248 = v3677;
    if (v2248) {
      return null;
    }
    data$$19 = jQuery$$1.trim(data$$19);
    var v5133 = data$$19.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@");
    var v4623 = v5133.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]");
    var v3678 = v4623.replace(/(?:^|:|,)(?:\s*\[)+/g, "");
    var v2251 = /^[\],:{}\s]*$/.test(v3678);
    if (v2251) {
      var v2249;
      var v4624 = window$$1.JSON;
      if (v4624) {
        var v5134 = window$$1.JSON;
        v4624 = v5134.parse;
      }
      var v3681 = v4624;
      if (v3681) {
        var v3679 = window$$1.JSON;
        v2249 = v3679.parse(data$$19);
      } else {
        var v4625 = "return " + data$$19;
        var v3680 = new Function(v4625);
        v2249 = v3680();
      }
      return v2249;
    } else {
      var v2250 = "Invalid JSON: " + data$$19;
      jQuery$$1.error(v2250);
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
    var v5135 = !obj$$19;
    var v5387 = !v5135;
    if (v5387) {
      var v5386 = toString.call(obj$$19);
      v5135 = v5386 !== "[object Object]";
    }
    var v4626 = v5135;
    var v5136 = !v4626;
    if (v5136) {
      v4626 = obj$$19.nodeType;
    }
    var v3682 = v4626;
    var v4627 = !v3682;
    if (v4627) {
      v3682 = obj$$19.setInterval;
    }
    var v2252 = v3682;
    if (v2252) {
      return false;
    }
    var v4628 = obj$$19.constructor;
    if (v4628) {
      var v5137 = hasOwnProperty.call(obj$$19, "constructor");
      v4628 = !v5137;
    }
    var v3683 = v4628;
    if (v3683) {
      var v5388 = obj$$19.constructor;
      var v5138 = v5388.prototype;
      var v4629 = hasOwnProperty.call(v5138, "isPrototypeOf");
      v3683 = !v4629;
    }
    var v2253 = v3683;
    if (v2253) {
      return false;
    }
    var key$$15;
    for (key$$15 in obj$$19) {
    }
    var v2254 = key$$15 === undefined$$1;
    var v3684 = !v2254;
    if (v3684) {
      v2254 = hasOwnProperty.call(obj$$19, key$$15);
    }
    return v2254;
  }
  function v27(obj$$18) {
    var v2255 = toString.call(obj$$18);
    return v2255 === "[object Array]";
  }
  function v26(obj$$17) {
    var v2256 = toString.call(obj$$17);
    return v2256 === "[object Function]";
  }
  function v25() {
    if (readyBound) {
      return;
    }
    readyBound = true;
    var v3685 = document$$1.readyState;
    var v2257 = v3685 === "complete";
    if (v2257) {
      return jQuery$$1.ready();
    }
    var v2263 = document$$1.addEventListener;
    if (v2263) {
      document$$1.addEventListener("DOMContentLoaded", DOMContentLoaded, false);
      var v2258 = jQuery$$1.ready;
      window$$1.addEventListener("load", v2258, false);
    } else {
      var v2262 = document$$1.attachEvent;
      if (v2262) {
        document$$1.attachEvent("onreadystatechange", DOMContentLoaded);
        var v2259 = jQuery$$1.ready;
        window$$1.attachEvent("onload", v2259);
        var toplevel = false;
        try {
          var v2260 = window$$1.frameElement;
          toplevel = v2260 == null;
        } catch (e$$4) {
        }
        var v4630 = document$$1.documentElement;
        var v3686 = v4630.doScroll;
        if (v3686) {
          v3686 = toplevel;
        }
        var v2261 = v3686;
        if (v2261) {
          doScrollCheck();
        }
      }
    }
    return;
  }
  function v24() {
    var v3687 = jQuery$$1.isReady;
    var v2269 = !v3687;
    if (v2269) {
      var v3688 = document$$1.body;
      var v2265 = !v3688;
      if (v2265) {
        var v2264 = jQuery$$1.ready;
        return setTimeout(v2264, 13);
      }
      jQuery$$1.isReady = true;
      if (readyList) {
        var fn$$2;
        var i$$8 = 0;
        var v3689 = i$$8;
        i$$8 = i$$8 + 1;
        introspect(JAM.policy.p3) {
          var v2266 = fn$$2 = readyList[v3689]
        }
        for (;v2266;) {
          fn$$2.call(document$$1, jQuery$$1);
          var v3690 = i$$8;
          i$$8 = i$$8 + 1;
          introspect(JAM.policy.p3) {
            v2266 = fn$$2 = readyList[v3690];
          }
        }
        readyList = null;
      }
      var v3691 = jQuery$$1.fn;
      var v2268 = v3691.triggerHandler;
      if (v2268) {
        var v2267 = jQuery$$1(document$$1);
        v2267.triggerHandler("ready");
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
    var v2270 = arguments[0];
    var v3692 = !v2270;
    if (v3692) {
      v2270 = {};
    }
    var target$$26 = v2270;
    var i$$7 = 1;
    var length$$12 = arguments.length;
    var deep$$2 = false;
    var options$$1;
    var name$$31;
    var src$$1;
    var copy;
    var v3693 = typeof target$$26;
    var v2272 = v3693 === "boolean";
    if (v2272) {
      deep$$2 = target$$26;
      var v2271 = arguments[1];
      var v3694 = !v2271;
      if (v3694) {
        v2271 = {};
      }
      target$$26 = v2271;
      i$$7 = 2;
    }
    var v4631 = typeof target$$26;
    var v3695 = v4631 !== "object";
    if (v3695) {
      var v4632 = jQuery$$1.isFunction(target$$26);
      v3695 = !v4632;
    }
    var v2273 = v3695;
    if (v2273) {
      target$$26 = {};
    }
    var v2274 = length$$12 === i$$7;
    if (v2274) {
      target$$26 = this;
      i$$7 = i$$7 - 1;
    }
    var v2282 = i$$7 < length$$12;
    for (;v2282;) {
      introspect(JAM.policy.p3) {
        var v3696 = options$$1 = arguments[i$$7]
      }
      var v2281 = v3696 != null;
      if (v2281) {
        for (name$$31 in options$$1) {
          introspect(JAM.policy.p3) {
            src$$1 = target$$26[name$$31];
          }
          introspect(JAM.policy.p3) {
            copy = options$$1[name$$31];
          }
          var v2275 = target$$26 === copy;
          if (v2275) {
            continue;
          }
          var v3697 = deep$$2 && copy;
          if (v3697) {
            var v4633 = jQuery$$1.isPlainObject(copy);
            var v5139 = !v4633;
            if (v5139) {
              v4633 = jQuery$$1.isArray(copy);
            }
            v3697 = v4633;
          }
          var v2280 = v3697;
          if (v2280) {
            var v2276;
            var v4634 = src$$1;
            if (v4634) {
              var v5140 = jQuery$$1.isPlainObject(src$$1);
              var v5389 = !v5140;
              if (v5389) {
                v5140 = jQuery$$1.isArray(src$$1);
              }
              v4634 = v5140;
            }
            var v3699 = v4634;
            if (v3699) {
              v2276 = src$$1;
            } else {
              var v3698;
              var v4635 = jQuery$$1.isArray(copy);
              if (v4635) {
                v3698 = [];
              } else {
                v3698 = {};
              }
              v2276 = v3698;
            }
            var clone = v2276;
            var v2277 = target$$26;
            var v2278 = name$$31;
            var v5597 = jQuery$$1.extend(deep$$2, clone, copy);
            introspect(JAM.policy.p2) {
              v2277[v2278] = v5597;
            }
          } else {
            var v2279 = copy !== undefined$$1;
            if (v2279) {
              introspect(JAM.policy.p2) {
                target$$26[name$$31] = copy;
              }
            }
          }
        }
      }
      i$$7 = i$$7 + 1;
      v2282 = i$$7 < length$$12;
    }
    return target$$26;
  }
  function v21() {
    var v2283 = this.prevObject;
    var v3700 = !v2283;
    if (v3700) {
      v2283 = jQuery$$1(null);
    }
    return v2283;
  }
  function v20(callback$$26) {
    function v19(elem$$6, i$$6) {
      return callback$$26.call(elem$$6, i$$6, elem$$6);
    }
    var v2284 = jQuery$$1.map(this, v19);
    return this.pushStack(v2284);
  }
  function v18() {
    var v2285 = slice.apply(this, arguments);
    var v3701 = slice.call(arguments);
    var v2286 = v3701.join(",");
    return this.pushStack(v2285, "slice", v2286);
  }
  function v17() {
    return this.eq(-1);
  }
  function v16() {
    return this.eq(0);
  }
  function v15(i$$5) {
    var v2287;
    var v3703 = i$$5 === -1;
    if (v3703) {
      v2287 = this.slice(i$$5);
    } else {
      var v4636 = +i$$5;
      var v3702 = v4636 + 1;
      v2287 = this.slice(i$$5, v3702);
    }
    return v2287;
  }
  function v14(fn$$1) {
    jQuery$$1.bindReady();
    var v2288 = jQuery$$1.isReady;
    if (v2288) {
      fn$$1.call(document$$1, jQuery$$1);
    } else {
      if (readyList) {
        readyList.push(fn$$1);
      }
    }
    return this;
  }
  function v13(callback$$25, args$$3) {
    return jQuery$$1.each(this, callback$$25, args$$3);
  }
  function v12(elems$$2, name$$30, selector$$3) {
    var ret$$2 = jQuery$$1();
    var v2289 = jQuery$$1.isArray(elems$$2);
    if (v2289) {
      push.apply(ret$$2, elems$$2);
    } else {
      jQuery$$1.merge(ret$$2, elems$$2);
    }
    ret$$2.prevObject = this;
    ret$$2.context = this.context;
    var v2292 = name$$30 === "find";
    if (v2292) {
      var v3704 = this.selector;
      var v4637;
      var v5141 = this.selector;
      if (v5141) {
        v4637 = " ";
      } else {
        v4637 = "";
      }
      var v3705 = v4637;
      var v2290 = v3704 + v3705;
      ret$$2.selector = v2290 + selector$$3;
    } else {
      if (name$$30) {
        var v5390 = this.selector;
        var v5142 = v5390 + ".";
        var v4638 = v5142 + name$$30;
        var v3706 = v4638 + "(";
        var v2291 = v3706 + selector$$3;
        ret$$2.selector = v2291 + ")";
      }
    }
    return ret$$2;
  }
  function v11(num$$5) {
    var v2293;
    var v3708 = num$$5 == null;
    if (v3708) {
      v2293 = this.toArray();
    } else {
      var v3707;
      var v4640 = num$$5 < 0;
      if (v4640) {
        var v4639 = this.slice(num$$5);
        v3707 = v4639[0];
      } else {
        introspect(JAM.policy.p3) {
          v3707 = this[num$$5];
        }
      }
      v2293 = v3707;
    }
    return v2293;
  }
  function v10() {
    return slice.call(this, 0);
  }
  function v9() {
    return this.length;
  }
  function v8(selector$$2, context$$1) {
    var match$$1;
    var elem$$5;
    var ret$$1;
    var doc$$1;
    var v2294 = !selector$$2;
    if (v2294) {
      return this;
    }
    var v2295 = selector$$2.nodeType;
    if (v2295) {
      this.context = this[0] = selector$$2;
      this.length = 1;
      return this;
    }
    var v3709 = selector$$2 === "body";
    if (v3709) {
      v3709 = !context$$1;
    }
    var v2296 = v3709;
    if (v2296) {
      this.context = document$$1;
      this[0] = document$$1.body;
      this.selector = "body";
      this.length = 1;
      return this;
    }
    var v3710 = typeof selector$$2;
    var v2314 = v3710 === "string";
    if (v2314) {
      match$$1 = quickExpr.exec(selector$$2);
      var v3711 = match$$1;
      if (v3711) {
        var v4641 = match$$1[1];
        var v5143 = !v4641;
        if (v5143) {
          v4641 = !context$$1;
        }
        v3711 = v4641;
      }
      var v2312 = v3711;
      if (v2312) {
        var v2307 = match$$1[1];
        if (v2307) {
          var v2297;
          if (context$$1) {
            var v3712 = context$$1.ownerDocument;
            var v4642 = !v3712;
            if (v4642) {
              v3712 = context$$1;
            }
            v2297 = v3712;
          } else {
            v2297 = document$$1;
          }
          doc$$1 = v2297;
          ret$$1 = rsingleTag.exec(selector$$2);
          if (ret$$1) {
            var v2301 = jQuery$$1.isPlainObject(context$$1);
            if (v2301) {
              var v3713 = ret$$1[1];
              var v2298 = document$$1.createElement(v3713);
              selector$$2 = [v2298];
              var v3714 = jQuery$$1.fn;
              var v2299 = v3714.attr;
              v2299.call(selector$$2, context$$1, true);
            } else {
              var v3715 = ret$$1[1];
              var v2300 = doc$$1.createElement(v3715);
              selector$$2 = [v2300];
            }
          } else {
            var v3716 = match$$1[1];
            var v2302 = [v3716];
            var v2303 = [doc$$1];
            ret$$1 = buildFragment(v2302, v2303);
            var v3717;
            var v4644 = ret$$1.cacheable;
            if (v4644) {
              var v4643 = ret$$1.fragment;
              v3717 = v4643.cloneNode(true);
            } else {
              v3717 = ret$$1.fragment;
            }
            var v2304 = v3717;
            selector$$2 = v2304.childNodes;
          }
          return jQuery$$1.merge(this, selector$$2);
        } else {
          var v2305 = match$$1[2];
          elem$$5 = document$$1.getElementById(v2305);
          if (elem$$5) {
            var v3718 = elem$$5.id;
            var v3719 = match$$1[2];
            var v2306 = v3718 !== v3719;
            if (v2306) {
              return rootjQuery.find(selector$$2);
            }
            this.length = 1;
            this[0] = elem$$5;
          }
          this.context = document$$1;
          this.selector = selector$$2;
          return this;
        }
      } else {
        var v3720 = !context$$1;
        if (v3720) {
          v3720 = /^\w+$/.test(selector$$2);
        }
        var v2311 = v3720;
        if (v2311) {
          this.selector = selector$$2;
          this.context = document$$1;
          selector$$2 = document$$1.getElementsByTagName(selector$$2);
          return jQuery$$1.merge(this, selector$$2);
        } else {
          var v3721 = !context$$1;
          var v4645 = !v3721;
          if (v4645) {
            v3721 = context$$1.jquery;
          }
          var v2310 = v3721;
          if (v2310) {
            var v2308 = context$$1 || rootjQuery;
            return v2308.find(selector$$2);
          } else {
            var v2309 = jQuery$$1(context$$1);
            return v2309.find(selector$$2);
          }
        }
      }
    } else {
      var v2313 = jQuery$$1.isFunction(selector$$2);
      if (v2313) {
        return rootjQuery.ready(selector$$2);
      }
    }
    var v3722 = selector$$2.selector;
    var v2315 = v3722 !== undefined$$1;
    if (v2315) {
      this.selector = selector$$2.selector;
      this.context = selector$$2.context;
    }
    return jQuery$$1.makeArray(selector$$2, this);
  }
  function fcamelCase(all$$6, letter) {
    return letter.toUpperCase();
  }
  function fcloseTag(all$$5, front, tag) {
    var v2316;
    var v3724 = rselfClosing.test(tag);
    if (v3724) {
      v2316 = all$$5;
    } else {
      var v4646 = front + "></";
      var v3723 = v4646 + tag;
      v2316 = v3723 + ">";
    }
    return v2316;
  }
  function winnow(elements, qualifier, keep) {
    function v4(elem$$79, i$$61) {
      var v3725 = jQuery$$1.inArray(elem$$79, qualifier);
      var v2317 = v3725 >= 0;
      return v2317 === keep;
    }
    function v3(elem$$78) {
      var v2318 = elem$$78.nodeType;
      return v2318 === 1;
    }
    function v2(elem$$77, i$$60) {
      var v2319 = elem$$77 === qualifier;
      return v2319 === keep;
    }
    function v1(elem$$76, i$$59) {
      var v4647 = qualifier.call(elem$$76, i$$59, elem$$76);
      var v3726 = !v4647;
      var v2320 = !v3726;
      return v2320 === keep;
    }
    var v2325 = jQuery$$1.isFunction(qualifier);
    if (v2325) {
      return jQuery$$1.grep(elements, v1);
    } else {
      var v2324 = qualifier.nodeType;
      if (v2324) {
        return jQuery$$1.grep(elements, v2);
      } else {
        var v3727 = typeof qualifier;
        var v2323 = v3727 === "string";
        if (v2323) {
          var filtered = jQuery$$1.grep(elements, v3);
          var v2322 = isSimple.test(qualifier);
          if (v2322) {
            var v2321 = !keep;
            return jQuery$$1.filter(qualifier, filtered, v2321);
          } else {
            qualifier = jQuery$$1.filter(qualifier, filtered);
          }
        }
      }
    }
    return jQuery$$1.grep(elements, v4);
  }
  function delegate(event$$6) {
    event$$6.type = event$$6.data;
    var v3728 = jQuery$$1.event;
    var v2326 = v3728.handle;
    v2326.apply(this, arguments);
    return;
  }
  function withinElement(event$$5) {
    var parent$$2 = event$$5.relatedTarget;
    try {
      var v3729 = parent$$2;
      if (v3729) {
        v3729 = parent$$2 !== this;
      }
      var v2327 = v3729;
      for (;v2327;) {
        parent$$2 = parent$$2.parentNode;
        var v3730 = parent$$2;
        if (v3730) {
          v3730 = parent$$2 !== this;
        }
        v2327 = v3730;
      }
      var v2329 = parent$$2 !== this;
      if (v2329) {
        event$$5.type = event$$5.data;
        var v3731 = jQuery$$1.event;
        var v2328 = v3731.handle;
        v2328.apply(this, arguments);
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
    var v3732 = jQuery$$1.fn;
    var v2330 = v3732.init;
    return new v2330(selector$$1, context);
  }
  function doScrollCheck() {
    var v2331 = jQuery$$1.isReady;
    if (v2331) {
      return;
    }
    try {
      var v2332 = document$$1.documentElement;
      v2332.doScroll("left");
    } catch (error$$1) {
      setTimeout(doScrollCheck, 1);
      return;
    }
    jQuery$$1.ready();
    return;
  }
  function evalScript(i$$1, elem$$1) {
    var v2335 = elem$$1.src;
    if (v2335) {
      var v3733 = elem$$1.src;
      var v2333 = {url:v3733, async:false, dataType:"script"};
      jQuery$$1.ajax(v2333);
    } else {
      var v5144 = elem$$1.text;
      var v5391 = !v5144;
      if (v5391) {
        v5144 = elem$$1.textContent;
      }
      var v4648 = v5144;
      var v5145 = !v4648;
      if (v5145) {
        v4648 = elem$$1.innerHTML;
      }
      var v3734 = v4648;
      var v4649 = !v3734;
      if (v4649) {
        v3734 = "";
      }
      var v2334 = v3734;
      jQuery$$1.globalEval(v2334);
    }
    var v2337 = elem$$1.parentNode;
    if (v2337) {
      var v2336 = elem$$1.parentNode;
      v2336.removeChild(elem$$1);
    }
    return;
  }
  function access(elems, key$$14, value$$27, exec, fn, pass) {
    var length$$11 = elems.length;
    var v3735 = typeof key$$14;
    var v2339 = v3735 === "object";
    if (v2339) {
      var k;
      for (k in key$$14) {
        introspect(JAM.policy.p3) {
          var v2338 = key$$14[k]
        }
        access(elems, k, v2338, exec, fn, value$$27);
      }
      return elems;
    }
    var v2344 = value$$27 !== undefined$$1;
    if (v2344) {
      var v3736 = !pass;
      if (v3736) {
        v3736 = exec;
      }
      var v2340 = v3736;
      if (v2340) {
        v2340 = jQuery$$1.isFunction(value$$27);
      }
      exec = v2340;
      var i$$2 = 0;
      var v2343 = i$$2 < length$$11;
      for (;v2343;) {
        introspect(JAM.policy.p3) {
          var v2341 = elems[i$$2]
        }
        var v3737;
        if (exec) {
          introspect(JAM.policy.p3) {
            var v4650 = elems[i$$2]
          }
          introspect(JAM.policy.p3) {
            var v5146 = elems[i$$2]
          }
          var v4651 = fn(v5146, key$$14);
          v3737 = value$$27.call(v4650, i$$2, v4651);
        } else {
          v3737 = value$$27;
        }
        var v2342 = v3737;
        fn(v2341, key$$14, v2342, pass);
        i$$2 = i$$2 + 1;
        v2343 = i$$2 < length$$11;
      }
      return elems;
    }
    var v2345;
    if (length$$11) {
      var v3738 = elems[0];
      v2345 = fn(v3738, key$$14);
    } else {
      v2345 = undefined$$1;
    }
    return v2345;
  }
  function now() {
    var v2346 = new Date;
    return v2346.getTime();
  }
  function returnFalse() {
    return false;
  }
  function returnTrue() {
    return true;
  }
  function trigger(type$$25, elem$$2, args) {
    var v2347 = args[0];
    v2347.type = type$$25;
    var v3739 = jQuery$$1.event;
    var v2348 = v3739.handle;
    return v2348.apply(elem$$2, args);
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
    var events = jQuery$$1.data(this, "events");
    var v5392 = event$$1.liveFired;
    var v5147 = v5392 === this;
    var v5393 = !v5147;
    if (v5393) {
      v5147 = !events;
    }
    var v4652 = v5147;
    var v5149 = !v4652;
    if (v5149) {
      var v5148 = events.live;
      v4652 = !v5148;
    }
    var v3740 = v4652;
    var v4654 = !v3740;
    if (v4654) {
      var v4653 = event$$1.button;
      if (v4653) {
        var v5150 = event$$1.type;
        v4653 = v5150 === "click";
      }
      v3740 = v4653;
    }
    var v2349 = v3740;
    if (v2349) {
      return;
    }
    event$$1.liveFired = this;
    var v2350 = events.live;
    var live = v2350.slice(0);
    j = 0;
    var v3741 = live.length;
    var v2354 = j < v3741;
    for (;v2354;) {
      introspect(JAM.policy.p3) {
        handleObj = live[j];
      }
      var v4655 = handleObj.origType;
      var v3742 = v4655.replace(rnamespaces, "");
      var v3743 = event$$1.type;
      var v2353 = v3742 === v3743;
      if (v2353) {
        var v2351 = handleObj.selector;
        selectors$$7.push(v2351);
      } else {
        var v2352 = j;
        j = j - 1;
        live.splice(v2352, 1);
      }
      j = j + 1;
      var v3744 = live.length;
      v2354 = j < v3744;
    }
    var v3745 = event$$1.target;
    var v2355 = jQuery$$1(v3745);
    var v2356 = event$$1.currentTarget;
    match = v2355.closest(selectors$$7, v2356);
    i$$3 = 0;
    l = match.length;
    var v2364 = i$$3 < l;
    for (;v2364;) {
      j = 0;
      var v3746 = live.length;
      var v2363 = j < v3746;
      for (;v2363;) {
        introspect(JAM.policy.p3) {
          handleObj = live[j];
        }
        introspect(JAM.policy.p3) {
          var v4656 = match[i$$3]
        }
        var v3747 = v4656.selector;
        var v3748 = handleObj.selector;
        var v2362 = v3747 === v3748;
        if (v2362) {
          introspect(JAM.policy.p3) {
            var v2357 = match[i$$3]
          }
          elem$$3 = v2357.elem;
          related = null;
          var v4657 = handleObj.preType;
          var v3749 = v4657 === "mouseenter";
          var v4659 = !v3749;
          if (v4659) {
            var v4658 = handleObj.preType;
            v3749 = v4658 === "mouseleave";
          }
          var v2359 = v3749;
          if (v2359) {
            var v4660 = event$$1.relatedTarget;
            var v3750 = jQuery$$1(v4660);
            var v3751 = handleObj.selector;
            var v2358 = v3750.closest(v3751);
            related = v2358[0];
          }
          var v3752 = !related;
          var v4661 = !v3752;
          if (v4661) {
            v3752 = related !== elem$$3;
          }
          var v2361 = v3752;
          if (v2361) {
            var v2360 = {elem:elem$$3, handleObj:handleObj};
            elems$$1.push(v2360);
          }
        }
        j = j + 1;
        var v3753 = live.length;
        v2363 = j < v3753;
      }
      i$$3 = i$$3 + 1;
      v2364 = i$$3 < l;
    }
    i$$3 = 0;
    l = elems$$1.length;
    var v2367 = i$$3 < l;
    for (;v2367;) {
      introspect(JAM.policy.p3) {
        match = elems$$1[i$$3];
      }
      event$$1.currentTarget = match.elem;
      var v2365 = match.handleObj;
      event$$1.data = v2365.data;
      event$$1.handleObj = match.handleObj;
      var v5151 = match.handleObj;
      var v4662 = v5151.origHandler;
      var v4663 = match.elem;
      var v3754 = v4662.apply(v4663, args$$1);
      var v2366 = v3754 === false;
      if (v2366) {
        stop = false;
        break;
      }
      i$$3 = i$$3 + 1;
      v2367 = i$$3 < l;
    }
    return stop;
  }
  function liveConvert(type$$26, selector) {
    var v4664;
    var v5394 = type$$26;
    if (v5394) {
      v5394 = type$$26 !== "*";
    }
    var v5152 = v5394;
    if (v5152) {
      v4664 = type$$26 + ".";
    } else {
      v4664 = "";
    }
    var v3755 = v4664;
    var v2368 = "live." + v3755;
    var v3756 = selector.replace(/\./g, "`");
    var v2369 = v3756.replace(/ /g, "&");
    return v2368 + v2369;
  }
  function isDisconnected(node$$2) {
    var v3757 = !node$$2;
    var v4666 = !v3757;
    if (v4666) {
      var v4665 = node$$2.parentNode;
      v3757 = !v4665;
    }
    var v2370 = v3757;
    var v3759 = !v2370;
    if (v3759) {
      var v4667 = node$$2.parentNode;
      var v3758 = v4667.nodeType;
      v2370 = v3758 === 11;
    }
    return v2370;
  }
  function cloneCopyEvent(orig, ret) {
    function v6() {
      var v3760 = this.nodeName;
      introspect(JAM.policy.p3) {
        var v4668 = orig[i$$4]
      }
      if (v4668) {
        introspect(JAM.policy.p3) {
          var v5153 = orig[i$$4]
        }
        v4668 = v5153.nodeName;
      }
      var v3761 = v4668;
      var v2371 = v3760 !== v3761;
      if (v2371) {
        return;
      }
      var v3762 = i$$4;
      i$$4 = i$$4 + 1;
      introspect(JAM.policy.p3) {
        var v2372 = orig[v3762]
      }
      var oldData = jQuery$$1.data(v2372);
      var curData = jQuery$$1.data(this, oldData);
      var v2373 = oldData;
      if (v2373) {
        v2373 = oldData.events;
      }
      var events$$1 = v2373;
      if (events$$1) {
        delete curData.handle;
        curData.events = {};
        var type$$27;
        for (type$$27 in events$$1) {
          var handler$$3;
          introspect(JAM.policy.p3) {
            var v2377 = events$$1[type$$27]
          }
          for (handler$$3 in v2377) {
            var v2374 = jQuery$$1.event;
            introspect(JAM.policy.p3) {
              var v3763 = events$$1[type$$27]
            }
            introspect(JAM.policy.p3) {
              var v2375 = v3763[handler$$3]
            }
            introspect(JAM.policy.p3) {
              var v4669 = events$$1[type$$27]
            }
            introspect(JAM.policy.p3) {
              var v3764 = v4669[handler$$3]
            }
            var v2376 = v3764.data;
            v2374.add(this, type$$27, v2375, v2376);
          }
        }
      }
      return;
    }
    var i$$4 = 0;
    ret.each(v6);
    return;
  }
  function buildFragment(args$$2, nodes, scripts) {
    var fragment;
    var cacheable;
    var cacheresults;
    var v2378;
    var v4670 = nodes;
    if (v4670) {
      v4670 = nodes[0];
    }
    var v3766 = v4670;
    if (v3766) {
      var v4671 = nodes[0];
      var v3765 = v4671.ownerDocument;
      var v4672 = !v3765;
      if (v4672) {
        v3765 = nodes[0];
      }
      v2378 = v3765;
    } else {
      v2378 = document$$1;
    }
    var doc = v2378;
    var v5507 = args$$2.length;
    var v5479 = v5507 === 1;
    if (v5479) {
      var v5521 = args$$2[0];
      var v5508 = typeof v5521;
      v5479 = v5508 === "string";
    }
    var v5395 = v5479;
    if (v5395) {
      var v5509 = args$$2[0];
      var v5480 = v5509.length;
      v5395 = v5480 < 512;
    }
    var v5154 = v5395;
    if (v5154) {
      v5154 = doc === document$$1;
    }
    var v4673 = v5154;
    if (v4673) {
      var v5396 = args$$2[0];
      var v5155 = rnocache.test(v5396);
      v4673 = !v5155;
    }
    var v3767 = v4673;
    if (v3767) {
      var v5156 = jQuery$$1.support;
      var v4674 = v5156.checkClone;
      var v5158 = !v4674;
      if (v5158) {
        var v5397 = args$$2[0];
        var v5157 = rchecked.test(v5397);
        v4674 = !v5157;
      }
      v3767 = v4674;
    }
    var v2382 = v3767;
    if (v2382) {
      cacheable = true;
      var v2379 = jQuery$$1.fragments;
      var v2380 = args$$2[0];
      introspect(JAM.policy.p3) {
        cacheresults = v2379[v2380];
      }
      if (cacheresults) {
        var v2381 = cacheresults !== 1;
        if (v2381) {
          fragment = cacheresults;
        }
      }
    }
    var v2383 = !fragment;
    if (v2383) {
      fragment = doc.createDocumentFragment();
      jQuery$$1.clean(args$$2, doc, fragment, scripts);
    }
    if (cacheable) {
      var v2384 = jQuery$$1.fragments;
      var v2385 = args$$2[0];
      var v3768;
      if (cacheresults) {
        v3768 = fragment;
      } else {
        v3768 = 1;
      }
      introspect(JAM.policy.p2) {
        v2384[v2385] = v3768;
      }
    }
    return{fragment:fragment, cacheable:cacheable};
  }
  function genFx(type$$28, num$$4) {
    function v7() {
      introspect(JAM.policy.p2) {
        obj$$16[this] = type$$28;
      }
      return;
    }
    var obj$$16 = {};
    var v3769 = fxAttrs.concat;
    var v3770 = fxAttrs.slice(0, num$$4);
    var v2386 = v3769.apply([], v3770);
    jQuery$$1.each(v2386, v7);
    return obj$$16;
  }
  function getWindow(elem$$4) {
    var v2387;
    var v4675 = "scrollTo" in elem$$4;
    if (v4675) {
      v4675 = elem$$4.document;
    }
    var v3772 = v4675;
    if (v3772) {
      v2387 = elem$$4;
    } else {
      var v3771;
      var v5159 = elem$$4.nodeType;
      var v4677 = v5159 === 9;
      if (v4677) {
        var v4676 = elem$$4.defaultView;
        var v5160 = !v4676;
        if (v5160) {
          v4676 = elem$$4.parentWindow;
        }
        v3771 = v4676;
      } else {
        v3771 = false;
      }
      v2387 = v3771;
    }
    return v2387;
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
  var v2388 = Object.prototype;
  var toString = v2388.toString;
  var v2389 = Object.prototype;
  var hasOwnProperty = v2389.hasOwnProperty;
  var v2390 = Array.prototype;
  var push = v2390.push;
  var v2391 = Array.prototype;
  var slice = v2391.slice;
  var v2392 = Array.prototype;
  var indexOf = v2392.indexOf;
  var v2393 = [].sort;
  var v2394 = [].splice;
  jQuery$$1.fn = jQuery$$1.prototype = {init:v8, selector:"", jquery:"1.4.2", length:0, size:v9, toArray:v10, get:v11, pushStack:v12, each:v13, ready:v14, eq:v15, first:v16, last:v17, slice:v18, map:v20, end:v21, push:push, sort:v2393, splice:v2394};
  var v3773 = jQuery$$1.fn;
  var v2395 = v3773.init;
  v2395.prototype = jQuery$$1.fn;
  var v2396 = jQuery$$1.fn;
  jQuery$$1.extend = v2396.extend = v22;
  var v2397 = {noConflict:v23, isReady:false, ready:v24, bindReady:v25, isFunction:v26, isArray:v27, isPlainObject:v28, isEmptyObject:v29, error:v30, parseJSON:v31, noop:v32, globalEval:v33, nodeName:v34, each:v35, trim:v36, makeArray:v37, inArray:v38, merge:v39, grep:v40, map:v41, guid:1, proxy:v43, uaMatch:v44, browser:{}};
  jQuery$$1.extend(v2397);
  browserMatch = jQuery$$1.uaMatch(userAgent);
  var v2401 = browserMatch.browser;
  if (v2401) {
    var v2398 = jQuery$$1.browser;
    var v2399 = browserMatch.browser;
    introspect(JAM.policy.p2) {
      v2398[v2399] = true;
    }
    var v2400 = jQuery$$1.browser;
    v2400.version = browserMatch.version;
  }
  var v3774 = jQuery$$1.browser;
  var v2403 = v3774.webkit;
  if (v2403) {
    var v2402 = jQuery$$1.browser;
    v2402.safari = true;
  }
  if (indexOf) {
    jQuery$$1.inArray = v45;
  }
  rootjQuery = jQuery$$1(document$$1);
  var v2405 = document$$1.addEventListener;
  if (v2405) {
    DOMContentLoaded = v46;
  } else {
    var v2404 = document$$1.attachEvent;
    if (v2404) {
      DOMContentLoaded = v47;
    }
  }
  v49();
  jQuery$$1.props = {"for":"htmlFor", "class":"className", readonly:"readOnly", maxlength:"maxLength", cellspacing:"cellSpacing", rowspan:"rowSpan", colspan:"colSpan", tabindex:"tabIndex", usemap:"useMap", frameborder:"frameBorder"};
  var v2406 = now();
  var expando = "jQuery" + v2406;
  var uuid = 0;
  var windowData = {};
  var v3775 = {"embed":true, "object":true, "applet":true};
  var v2407 = {cache:{}, expando:expando, noData:v3775, data:v50, removeData:v51};
  jQuery$$1.extend(v2407);
  var v2408 = jQuery$$1.fn;
  var v2409 = {data:v54, removeData:v56};
  v2408.extend(v2409);
  var v2410 = {queue:v57, dequeue:v59};
  jQuery$$1.extend(v2410);
  var v2411 = jQuery$$1.fn;
  var v2412 = {queue:v61, dequeue:v63, delay:v66, clearQueue:v67};
  v2411.extend(v2412);
  var rclass = /[\n\t]/g;
  var rspace = /\s+/;
  var rreturn = /\r/g;
  var rspecialurl = /href|src|style/;
  var rtype = /(button|input)/i;
  var rfocusable = /(button|input|object|select|textarea)/i;
  var rclickable = /^(a|area)$/i;
  var rradiocheck = /radio|checkbox/;
  var v2413 = jQuery$$1.fn;
  var v2414 = {attr:v68, removeAttr:v70, addClass:v72, removeClass:v74, toggleClass:v77, hasClass:v78, val:v81};
  v2413.extend(v2414);
  var v3776 = {val:true, css:true, html:true, text:true, data:true, width:true, height:true, offset:true};
  var v2415 = {attrFn:v3776, attr:v82};
  jQuery$$1.extend(v2415);
  var rnamespaces = /\.(.*)$/;
  var v2416 = jQuery$$1;
  var v3777 = "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" ");
  var v3778 = jQuery$$1.proxy;
  var v5161 = jQuery$$1.bindReady;
  var v5162 = jQuery$$1.noop;
  var v4678 = {setup:v5161, teardown:v5162};
  var v4679 = {add:v90, remove:v92};
  var v4680 = {setup:v93, teardown:v94};
  var v3779 = {ready:v4678, live:v4679, beforeunload:v4680};
  v2416.event = {add:v84, global:{}, remove:v85, trigger:v87, handle:v88, props:v3777, fix:v89, guid:1E8, proxy:v3778, special:v3779};
  var v2417;
  var v3780 = document$$1.removeEventListener;
  if (v3780) {
    v2417 = v95;
  } else {
    v2417 = v96;
  }
  var removeEvent = v2417;
  jQuery$$1.Event = v97;
  var v2418 = jQuery$$1.Event;
  v2418.prototype = {preventDefault:v98, stopPropagation:v99, stopImmediatePropagation:v100, isDefaultPrevented:returnFalse, isPropagationStopped:returnFalse, isImmediatePropagationStopped:returnFalse};
  var v2419 = {mouseenter:"mouseover", mouseleave:"mouseout"};
  jQuery$$1.each(v2419, v103);
  var v4681 = jQuery$$1.support;
  var v3781 = v4681.submitBubbles;
  var v2421 = !v3781;
  if (v2421) {
    var v3782 = jQuery$$1.event;
    var v2420 = v3782.special;
    v2420.submit = {setup:v106, teardown:v107};
  }
  var v4682 = jQuery$$1.support;
  var v3783 = v4682.changeBubbles;
  var v2424 = !v3783;
  if (v2424) {
    var formElems = /textarea|input|select/i;
    var changeFilters;
    var getVal = v109;
    var testChange = testChange$$1;
    var v3784 = jQuery$$1.event;
    var v2422 = v3784.special;
    var v3785 = {focusout:testChange, click:v110, keydown:v111, beforeactivate:v112};
    v2422.change = {filters:v3785, setup:v113, teardown:v114};
    var v4683 = jQuery$$1.event;
    var v3786 = v4683.special;
    var v2423 = v3786.change;
    changeFilters = v2423.filters;
  }
  var v2426 = document$$1.addEventListener;
  if (v2426) {
    var v2425 = {focus:"focusin", blur:"focusout"};
    jQuery$$1.each(v2425, v117);
  }
  var v2427 = ["bind", "one"];
  jQuery$$1.each(v2427, v120);
  var v2428 = jQuery$$1.fn;
  var v2429 = {unbind:v121, delegate:v122, undelegate:v123, trigger:v125, triggerHandler:v126, toggle:v128, hover:v129};
  v2428.extend(v2429);
  var liveMap = {focus:"focusin", blur:"focusout", mouseenter:"mouseover", mouseleave:"mouseout"};
  var v2430 = ["live", "die"];
  jQuery$$1.each(v2430, v132);
  var v4684 = "blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave ";
  var v3787 = v4684 + "change select submit keydown keypress keyup error";
  var v2431 = v3787.split(" ");
  jQuery$$1.each(v2431, v134);
  var v3788 = window$$1.attachEvent;
  if (v3788) {
    var v4685 = window$$1.addEventListener;
    v3788 = !v4685;
  }
  var v2432 = v3788;
  if (v2432) {
    window$$1.attachEvent("onunload", v135);
  }
  v207();
  var runtil = /Until$/;
  var rparentsprev = /^(?:parents|prevUntil|prevAll)/;
  var rmultiselector = /,/;
  var v2433 = Array.prototype;
  slice = v2433.slice;
  var v2434 = jQuery$$1.fn;
  var v2435 = {find:v208, has:v210, not:v211, filter:v212, is:v213, closest:v215, index:v216, add:v217, andSelf:v218};
  v2434.extend(v2435);
  var v2436 = {parent:v219, parents:v220, parentsUntil:v221, next:v222, prev:v223, nextAll:v224, prevAll:v225, nextUntil:v226, prevUntil:v227, siblings:v228, children:v229, contents:v230};
  jQuery$$1.each(v2436, v232);
  var v2437 = {filter:v233, dir:v234, nth:v235, sibling:v236};
  jQuery$$1.extend(v2437);
  var rinlinejQuery = / jQuery\d+="(?:\d+|null)"/g;
  var rleadingWhitespace = /^\s+/;
  var rxhtmlTag = /(<([\w:]+)[^>]*?)\/>/g;
  var rselfClosing = /^(?:area|br|col|embed|hr|img|input|link|meta|param)$/i;
  var rtagName = /<([\w:]+)/;
  var rtbody = /<tbody/i;
  var rhtml = /<|&#?\w+;/;
  var rnocache = /<script|<object|<embed|<option|<style/i;
  var rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i;
  var v2438 = [1, "<select multiple='multiple'>", "</select>"];
  var v2439 = [1, "<fieldset>", "</fieldset>"];
  var v2440 = [1, "<table>", "</table>"];
  var v2441 = [2, "<table><tbody>", "</tbody></table>"];
  var v2442 = [3, "<table><tbody><tr>", "</tr></tbody></table>"];
  var v2443 = [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"];
  var v2444 = [1, "<map>", "</map>"];
  var v2445 = [0, "", ""];
  var wrapMap = {option:v2438, legend:v2439, thead:v2440, tr:v2441, td:v2442, col:v2443, area:v2444, _default:v2445};
  wrapMap.optgroup = wrapMap.option;
  wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
  wrapMap.th = wrapMap.td;
  var v4686 = jQuery$$1.support;
  var v3789 = v4686.htmlSerialize;
  var v2446 = !v3789;
  if (v2446) {
    wrapMap._default = [1, "div<div>", "</div>"];
  }
  var v2447 = jQuery$$1.fn;
  var v2448 = {text:v238, wrapAll:v241, wrapInner:v244, wrap:v246, unwrap:v248, append:v250, prepend:v252, before:v254, after:v256, remove:v257, empty:v258, clone:v260, html:v263, replaceWith:v266, detach:v267, domManip:v270};
  v2447.extend(v2448);
  jQuery$$1.fragments = {};
  var v2449 = {appendTo:"append", prependTo:"prepend", insertBefore:"before", insertAfter:"after", replaceAll:"replaceWith"};
  jQuery$$1.each(v2449, v272);
  var v2450 = {clean:v273, cleanData:v274};
  jQuery$$1.extend(v2450);
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
  var v2451 = document$$1.defaultView;
  if (v2451) {
    var v3790 = document$$1.defaultView;
    v2451 = v3790.getComputedStyle;
  }
  var getComputedStyle = v2451;
  var v2452;
  var v4687 = jQuery$$1.support;
  var v3791 = v4687.cssFloat;
  if (v3791) {
    v2452 = "cssFloat";
  } else {
    v2452 = "styleFloat";
  }
  var styleFloat = v2452;
  var v2453 = jQuery$$1.fn;
  v2453.css = v276;
  var v2454 = {style:v277, css:v280, curCSS:v281, swap:v282};
  jQuery$$1.extend(v2454);
  var v3792 = jQuery$$1.expr;
  if (v3792) {
    var v4688 = jQuery$$1.expr;
    v3792 = v4688.filters;
  }
  var v2457 = v3792;
  if (v2457) {
    var v3793 = jQuery$$1.expr;
    var v2455 = v3793.filters;
    v2455.hidden = v283;
    var v3794 = jQuery$$1.expr;
    var v2456 = v3794.filters;
    v2456.visible = v284;
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
  var v2458 = jQuery$$1.fn;
  var _load = v2458.load;
  var v2459 = jQuery$$1.fn;
  var v2460 = {load:v286, serialize:v287, serializeArray:v292};
  v2459.extend(v2460);
  var v2461 = "ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" ");
  jQuery$$1.each(v2461, v294);
  var v4689 = location.href;
  var v5163;
  var v5481 = window$$1.XMLHttpRequest;
  if (v5481) {
    var v5528 = window$$1.location;
    var v5522 = v5528.protocol;
    var v5510 = v5522 !== "file:";
    var v5524 = !v5510;
    if (v5524) {
      var v5523 = window$$1.ActiveXObject;
      v5510 = !v5523;
    }
    v5481 = v5510;
  }
  var v5398 = v5481;
  if (v5398) {
    v5163 = v300;
  } else {
    v5163 = v301;
  }
  var v4690 = v5163;
  var v4691 = {xml:"application/xml, text/xml", html:"text/html", script:"text/javascript, application/javascript", json:"application/json, text/javascript", text:"text/plain", _default:"*/*"};
  var v3795 = {url:v4689, global:true, type:"GET", contentType:"application/x-www-form-urlencoded", processData:true, async:true, xhr:v4690, accepts:v4691};
  var v2462 = {get:v295, getScript:v296, getJSON:v297, post:v298, ajaxSetup:v299, ajaxSettings:v3795, lastModified:{}, etag:{}, ajax:v307, handleError:v308, active:0, httpSuccess:v309, httpNotModified:v310, httpData:v311, param:v315};
  jQuery$$1.extend(v2462);
  var elemdisplay = {};
  var rfxtypes = /toggle|show|hide/;
  var rfxnum = /^([+-]=)?([\d+-.]+)(.*)$/;
  var timerId;
  var v2463 = ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"];
  var v2464 = ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"];
  var v2465 = ["opacity"];
  var fxAttrs = [v2463, v2464, v2465];
  var v2466 = jQuery$$1.fn;
  var v4692 = jQuery$$1.fn;
  var v3796 = v4692.toggle;
  var v2467 = {show:v316, hide:v317, _toggle:v3796, toggle:v319, fadeTo:v320, animate:v323, stop:v325};
  v2466.extend(v2467);
  var v3797 = genFx("show", 1);
  var v3798 = genFx("hide", 1);
  var v3799 = genFx("toggle", 1);
  var v3800 = {opacity:"show"};
  var v3801 = {opacity:"hide"};
  var v2468 = {slideDown:v3797, slideUp:v3798, slideToggle:v3799, fadeIn:v3800, fadeOut:v3801};
  jQuery$$1.each(v2468, v327);
  var v3802 = {linear:v330, swing:v331};
  var v2469 = {speed:v329, easing:v3802, timers:[], fx:v332};
  jQuery$$1.extend(v2469);
  var v2470 = jQuery$$1.fx;
  v2470.prototype = {update:v333, cur:v334, custom:v335, show:v336, hide:v337, step:v338};
  var v2471 = jQuery$$1.fx;
  var v3803 = {slow:600, fast:200, _default:400};
  var v3804 = {opacity:v341, _default:v342};
  var v2472 = {tick:v339, stop:v340, speeds:v3803, step:v3804};
  jQuery$$1.extend(v2471, v2472);
  var v3805 = jQuery$$1.expr;
  if (v3805) {
    var v4693 = jQuery$$1.expr;
    v3805 = v4693.filters;
  }
  var v2474 = v3805;
  if (v2474) {
    var v3806 = jQuery$$1.expr;
    var v2473 = v3806.filters;
    v2473.animated = v344;
  }
  var v3807 = document$$1.documentElement;
  var v2477 = "getBoundingClientRect" in v3807;
  if (v2477) {
    var v2475 = jQuery$$1.fn;
    v2475.offset = v346;
  } else {
    var v2476 = jQuery$$1.fn;
    v2476.offset = v348;
  }
  jQuery$$1.offset = {initialize:v349, bodyOffset:v350, setOffset:v351};
  var v2478 = jQuery$$1.fn;
  var v2479 = {position:v352, offsetParent:v354};
  v2478.extend(v2479);
  var v2480 = ["Left", "Top"];
  jQuery$$1.each(v2480, v357);
  var v2481 = ["Height", "Width"];
  jQuery$$1.each(v2481, v362);
  window$$1.jQuery = window$$1.$ = jQuery$$1;
  return;
}
function hexFromRGB(r$$3, g, b$$5) {
  function v0(nr, val$$11) {
    var v3808 = val$$11.length;
    var v2482 = v3808 == 1;
    if (v2482) {
      introspect(JAM.policy.p2) {
        hex[nr] = "0" + val$$11;
      }
    }
    return;
  }
  var v2483 = r$$3.toString(16);
  var v2484 = g.toString(16);
  var v2485 = b$$5.toString(16);
  var hex = [v2483, v2484, v2485];
  $.each(hex, v0);
  var v2486 = hex.join("");
  return v2486.toUpperCase();
}
function refreshSwatch() {
  var v2487 = $("#red");
  var red$$3 = v2487.slider("value");
  var v2488 = $("#green");
  var green$$3 = v2488.slider("value");
  var v2489 = $("#blue");
  var blue$$3 = v2489.slider("value");
  var hex$$1 = hexFromRGB(red$$3, green$$3, blue$$3);
  var v2490 = $("#swatch");
  var v2491 = "#" + hex$$1;
  v2490.css("background-color", v2491);
  return;
}
v363(window);
v396(jQuery);
v434(jQuery);
v452(jQuery);
v484(jQuery);
$ = window.$;
$(v485)
