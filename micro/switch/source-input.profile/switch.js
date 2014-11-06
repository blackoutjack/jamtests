x = Math.floor(Math.random() * 4);

  JAM.startProfile('load');
  switch (x) {
  case 0:
    x++;
    break;
  case 1:
    x--;
    break;
  case 2:
    x++;
    break;
  case 3:
    x--;
    break;
  default:
    alert("ERROR");
    break;

  JAM.stopProfile('load');

}

