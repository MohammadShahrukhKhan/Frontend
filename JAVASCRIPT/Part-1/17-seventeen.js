const ball = 12

if (ball > 0){
    console.log('Let\'s play soccer')
}else{
    console.log('You do not have a ball to play')
}

// but ...
// for truthy and falsy value

// #1
if (' '){ //remember space ' ' is not considered as empty
    console.log('It is true')
}
// if the value is not '' or 0 or false or null or undefined or NaN then it is TRUE

//#2
if (''){
    console.log('It is True')
}
else{
    console.log('It is False')
}
// if the value is '' or 0 or false or null or undefined or NaN then it is FALSE