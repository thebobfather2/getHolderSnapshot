const snapshot = require('./output.json');
const exemption = require('./exemption.json');
var fs = require("fs");

let holders = []

for (let i = 0; i < snapshot.length; i++){
    holders.push(snapshot[i].holder)
}


const filtered = holders.filter(val => !exemption.includes(val))

fs.writeFile('wallets.txt', filtered.join('\n'), (err)=>{
    if(err) throw err;
    console.log('Extract saved successful');
});