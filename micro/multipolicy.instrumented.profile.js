function runTest() {

  JAM.startProfile('load');
introspect(JAMScript.introspectors.process76F930B34187247043082CAF9881927B310E8F56) {
    var a = document.getElementById("ok")
  }
  introspect(JAMScript.introspectors.processB66E1E6A02EE17375C126A2C8AC7D7F8CC6B0C12) {
    var b = document.cookie
  }
  introspect(JAMScript.introspectors.process425E08A28862414CF7130381FE99A660F52DB811) {
    document.cookie = "other"
  }
  introspect(JAMScript.introspectors.process7A76F4A052B00CB8470C5456FB7E9CD32CA4843C) {
    var c = document.createElement("img")
  }
  introspect(JAMScript.introspectors.processF87540E947B0B5FFDF4D142ACFD250D318FB96BE) {
    c.src = b
  }
  introspect(JAMScript.introspectors.processA08CEDA442E424AE71BF7DCC829F61A509D2BF14) {
    document.write(b)
  }
  ;

  JAM.stopProfile('load');

  return a === null && b instanceof HTMLElement;
}
