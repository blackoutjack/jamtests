function cb(tgt, p, res) {
  console.log(tgt + ":" + p + " " + res)
}
var AttackAPI = {version:"0.1", author:"Petko Petkov (architect)", homepage:"http://www.gnucitizen.org"};
AttackAPI.PortScanner = {};
AttackAPI.PortScanner.scanPort = function(callback$$25, target$$37, port, timeout) {
  timeout = timeout == null ? 100 : timeout;
  var img$$2 = new Image;
  img$$2.onerror = function() {
    if(!img$$2) {
      return
    }
    img$$2 = undefined;
    callback$$25(target$$37, port, "open")
  };
  img$$2.onload = img$$2.onerror;
  img$$2.src = "http://" + target$$37 + ":" + port;
  setTimeout(function() {
    if(!img$$2) {
      return
    }
    img$$2 = undefined;
    callback$$25(target$$37, port, "closed")
  }, timeout)
};
AttackAPI.PortScanner.scanTarget = function(callback$$26, target$$38, ports$$1, timeout$$1) {
  index = 0;
  for(;index < ports$$1.length;index++) {
    AttackAPI.PortScanner.scanPort(callback$$26, target$$38, ports$$1[index], timeout$$1)
  }
};
AttackAPI.PortScanner.scanTarget(cb, "localhost", [20, 21, 22, 23, 24, 100, 101, 102, 103], 1E3);

