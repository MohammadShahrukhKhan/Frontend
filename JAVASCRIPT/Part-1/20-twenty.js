
// #1
function add(num1, num2){
    return num1 + num2
}
let a = 1
console.log(add(a, 2))


//#2
function func(arr){
    return arr[1]
}
let b = [1, 4, 6, 7]
func(b) // must be console logged because
// the value is only returned
// otherwise won't print the result
//so...
console.log(func(b))