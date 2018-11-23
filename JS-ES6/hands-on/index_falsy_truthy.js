// falsy values

var a = false;
var b = 0;
var c = '';
var d = NaN;
var e = null;
var f = undefined;

var x = "ankur";
var y = -123;
var z = Infinity;

if(a){
    console.log('false is true')

}
else {
    console.log('false is false')
}
if(b){
    console.log('0 is true')

}
else {
    console.log('0 is false')
}
if(c){
    console.log('empty string is true')

}
else {
    console.log('empty string is false')
}
if(d){
    console.log('NaN is true')

}
else {
    console.log('NaN is false')
}
if(e){
    console.log('null is true')

}
else {
    console.log('null is false')
}
if(f){
    console.log('undefined is true')

}
else {
    console.log('undefined is false')
}
if(x){
    console.log('any string except empty  is true')

}
else {
    console.log('empty string is false')
}

if(y){
    console.log('any non zero no  is true')

}
else {
    console.log('empty string is false')
}

if(z){
    console.log('Infinity  is true')

}
else {
    console.log('Infinity is false')
}