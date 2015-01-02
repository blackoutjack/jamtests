
JAM.startProfile('load');
function f() {
  return "exception!";
}
throw f()

JAM.log("Result: " + " + respred ");

JAM.stopProfile('load');
