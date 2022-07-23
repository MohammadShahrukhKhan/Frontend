let myLeads = `["apple"]`
myLeads = JSON.parse(myLeads) // convert strings to objects
myLeads.push("tomato")
myLeads.push("mango")
console.table(myLeads)