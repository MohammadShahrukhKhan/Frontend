let ob = {
    a : 'letterA',
    b: true,
    c: 114,
    d: ['letterA', true, 114],
    e: function(){
        console.log('Yo!')
    }
}

console.log(ob)
console.log(ob.d)
console.log(ob.d[0])
console.log(ob['d']) // or console.log(ob.d) , either way is right
console.log(ob.e())