function ab(){
    console.log('ab')
}

function cd(){
    console.log('cd')
}


let a = true
let b = true

if (a === true && b === true){
    ab()
}
if (a === false || b===false){
    cd('cd')
}
