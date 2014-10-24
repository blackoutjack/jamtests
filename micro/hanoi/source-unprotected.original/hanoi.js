function runTest() {
  function Stack() {
    this.discs = [Infinity];
    this.push = function(disc) {
      if (typeof disc != "number") {
        console.log("Invalid disc type: " + disc);
        return false;
      }
      if (disc === NaN || disc === Infinity || disc === -Infinity) {
        console.log("Invalid disc number: " + disc);
        return false;
      }
      if (disc > this.discs[this.discs.length - 1]) {
        console.log("Invalid disc ordering: " + disc + " > " + this.discs[this.discs.length - 1]);
        return false;
      }
      this.discs.push(disc);
      return true;
    };
    this.pop = function() {
      var ret = this.discs.pop();
      if (ret === Infinity) {
        console.log("Attempting to pop the base");
        this.discs.push(ret);
        return false;
      }
      return ret;
    };
    this.toString = function() {
      var str$$6 = this.discs.join(",");
      return str$$6;
    };
  }
  function move(n$$1, from, to, using) {
    var ok = true;
    if (n$$1 == 0) {
      return ok;
    }
    ok = move(n$$1 - 1, from, using, to);
    if (!ok) {
      return false;
    }
    var d = from.pop();
    if (d === false) {
      return false;
    }
    to.push(d);
    ok = move(n$$1 - 1, using, to, from);
    return ok;
  }
  var initialStack = new Stack;
  var targetStack = new Stack;
  var auxStack = new Stack;
  var num = 20;
  var i = num;
  for (;i > 0;i--) {
    initialStack.push(i);
  }
  var done = move(num, initialStack, targetStack, auxStack);
  alert("Initial: " + initialStack);
  alert("Aux: " + auxStack);
  alert("Target: " + targetStack)

  return "RESULT NOT SPECIFIED";
}
