let a 
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
        return 'Hey! "a" is not assigned 😊' //the emoji might not be visible in some terminals...
    }
}

console.log(ab())