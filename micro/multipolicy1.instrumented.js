function runTest() {
var b = 1;
  var v0 = document.cookie;
  introspect(JAMScript.introspectors.process3D5BFF5DC7B69AF371F2F5D047B05F9905C5C251) {
    document.cookie = v0 + 1
  }
  var v1 = a[b];
  a[b] = v1 + 1;
  introspect(JAMScript.introspectors.process352B9049850A13D6240C92FA86C9847A77C5E747C51DDFC22C8571C0FE27B1BC0B7671157BDF992D3D5BFF5DC7B69AF371F2F5D047B05F9905C5C251) {
    a[c] = 10
  }
  ;

  return "Expect an exception";
}
