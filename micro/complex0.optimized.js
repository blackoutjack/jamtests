function runTest() {
var result=4,a=2,x=[3,4,5,6,7],y=[6,7,8],z=3,currentRow=1,lastRow=3,nextRow=2,v0=currentRow,v2=y[currentRow],v12=currentRow+=1,v10=x[v12],v7=result+v10,v11=lastRow+=1,v8=x[v11],v5=v7+v8,v9=nextRow+=1,v6=x[v9],v4=v5+v6,v3=a*v4,v1=v2+v3,result=x[v0]=v1*z;

  return result === 153;
}
