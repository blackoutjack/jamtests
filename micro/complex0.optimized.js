function runTest() {
  var result=4,a=2,x=[3,4,5,6,7],y=[6,7,8],z=3,currentRow=1,lastRow=3,nextRow=2,result=x[currentRow]=(y[currentRow]+a*(result+x[currentRow+=1]+x[lastRow+=1]+x[nextRow+=1]))*z;

  return result === 153;
}
