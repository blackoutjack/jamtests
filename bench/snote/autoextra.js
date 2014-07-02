function doRead() {
  var divread = document.getElementById("div1");
  var divread1 = divread.children[1];
  var btnread = divread1.children[1];
  btnread.click();
  var pwdinput = document.getElementById("unlock_password");
  pwdinput.value = "test";
  var divunlock = document.getElementById("unlock_dialog");
  var divok = divunlock.children[1];
  var btnok = divok.children[0];
  btnok.click();
}

function doEdit() {
  // %%% Incomplete/untested
  var btnedit = document.getElementById("div1_button_edit");
  btnedit.click();
  var pwdinput = document.getElementById("div1_input_new_password");
  pwdinput.value = "test";
  var divedit = document.getElementById("div1_edit_dialog");
  var divok = divedit.children[1];
  var btnok = divok.children[0];
  btnok.click();
}
