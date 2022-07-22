let ias = ['i', 'am', 'shahrukh khan']

i = ias[0]
am = ias[1]
shark = ias[2]

console.log(ias.length)

setTimeout(() => {
    console.log(i)
}, 1000);

setTimeout(() => {
    console.log(am)
}, 2000);

setTimeout(() => {
    console.log(shark)
}, 3000);

setInterval(() => {
    console.log(`${i} ${am} ${shark}`)
}, 4000);
