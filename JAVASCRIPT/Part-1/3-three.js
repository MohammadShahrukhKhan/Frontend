
let age = 17
let above18 = false
let below18 = false
let message = ""

if (age >= 18){
    message = 'eligible to vote'
    above18 = true
}
else{
    message = 'Not eligible to vote yet'
    below18 = true
}

console.log(message)
