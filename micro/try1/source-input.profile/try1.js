try {

  JAM.startProfile('load');
  x = 2;
} finally {
  x = 3;

  JAM.stopProfile('load');

}

