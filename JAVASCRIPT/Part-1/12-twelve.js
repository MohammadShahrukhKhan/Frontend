let LargeCountries = ['Tuvalu', 'Tndia', 'USA', 'Indonesia', 'Monaco']

LargeCountries.pop()
LargeCountries.push('Pakistan')
LargeCountries.shift() // removes from index 0
LargeCountries.unshift('China') // adds to index 0
console.table(LargeCountries)