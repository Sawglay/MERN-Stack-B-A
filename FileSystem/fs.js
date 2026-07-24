const { log } = require('console');
const fs = require('fs');

//Read
// fs.readFile('./docs/go.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });


//Write
fs.writeFile('./docs/go1.txt', 'I am writing', (err) => {
    if(err){
        console.log(err);
    }
    
})

