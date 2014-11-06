try {

  JAM.startProfile('load');
  x = 1;
} catch(e) {

  JAM.stopProfile('load');

    x = 2;
}
