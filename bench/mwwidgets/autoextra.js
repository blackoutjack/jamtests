function doRead() {
  var btnread = document.getElementById("div1_button_read");
  btnread.click();
  var pwdinput = document.getElementById("div1_input_password");
  pwdinput.value = "test";
  var divunlock = document.getElementById("div1_unlock_dialog");
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
