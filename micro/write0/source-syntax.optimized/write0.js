function runTest() {
  JAM.call(document.write,document,["<script>document.write("]);JAM.call(document.write,document,["'BOY HOWDY'"]);JAM.call(document.write,document,[");\x3c/script>"]);JAM.call(document.close,document,[])

  return "'BOY HOWDY' should be written on the page";
}
