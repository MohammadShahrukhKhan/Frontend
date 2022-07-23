
//#1 - null/not-null
let a = null
 a = ['jane', 'nick']
 a = null

 if (a){
    console.log('Not null')
 }
 else{
    console.log('null')
 }

 //#2 - undefined
let b 
console.log(b) // because b is not defined so it will be undefined

let c = {}
console.log(c.randomKey) // you can use anything other than randomKey

let d = [12]
console.log(d[1]) // d has only 0 index so it will be undefined