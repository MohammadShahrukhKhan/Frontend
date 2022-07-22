n = 5
string = ''
for (let i = 0; i <= n; i++){
    for ( let j= 0; j < i; j++){
        string += i
    }
    string += '\n'
}

console.log(string)
