var result = 4;
var a = 2;
var x = [3, 4, 5, 6, 7];
var y = [6, 7, 8];
var z = 3;
var currentRow = 1;
var lastRow = 3;
var nextRow = 2;
var v0 = currentRow;
var v2 = y[currentRow];
var v12 = currentRow = currentRow + 1;
var v10 = x[v12];
var v7 = result + v10;
var v11 = lastRow = lastRow + 1;
var v8 = x[v11];
var v5 = v7 + v8;
var v9 = nextRow = nextRow + 1;
var v6 = x[v9];
var v4 = v5 + v6;
var v3 = a * v4;
var v1 = v2 + v3;
result = x[v0] = v1 * z

JAM.log("Result: " + (result === 153));
