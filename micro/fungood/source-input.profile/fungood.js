
JAM.startProfile('load');
x = 3;

function f() {
    return 4;
}

x = f();

JAM.stopProfile('load');
