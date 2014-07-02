function runTest() {

  JAM.startProfile('load');
function v1(){var v2=6>cnt;v2&&(cnt+=1,JAMScript.call(g,null,[]))}function v0(){var v3=3>cnt;v3&&(cnt+=1,JAMScript.call(f,null,[]))}var x=!0,cnt=0,f=v0,g=v1;JAMScript.call(f,null,[]);JAMScript.call(g,null,[]);

  JAM.stopProfile('load');

  return cnt === 6;
}
