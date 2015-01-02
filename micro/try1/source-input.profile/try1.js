
JAM.startProfile('load');
try {
  x = 2;
} finally {
  x = 3;
}

JAM.stopProfile('load');
