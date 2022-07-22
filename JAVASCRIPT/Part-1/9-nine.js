let a = 2
let b = 1

function ab(){
    if (a>b){
        return a>b
    }
    if (b>a){
        return b>a
    }
    if (a===b){
        return a==b
    }
    else{
        return '😊'
    }
}

console.log(ab())