function runTest() {

  JAM.startProfile('load');
  introspect(JAM.policy.p8DB99BF1222CB7BDCA5A549F4993340663A66BAA2CFB7BC756B67B61B77FE6A02E61FD2CA839CC5F) {
    x = 2
  }
  x = 3;
  introspect(JAM.policy.p8DB99BF1222CB7BDCA5A549F4993340663A66BAA2CFB7BC756B67B61B77FE6A02E61FD2CA839CC5F) {
    x = 2
  }
  x = 4;

  JAM.stopProfile('load');

  return x === 4;
}
