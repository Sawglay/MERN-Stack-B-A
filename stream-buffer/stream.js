const fs = require('fs')

const readStream = fs.createReadStream("./stream-buffer/stream.txt")
const writeStream = fs.createWriteStream('./stream-buffer/streamLarge.txt')

readStream.on('data', function(data){
    console.log(data);
    console.log(data.toString());    
})


//pipe method
readStream.pipe(writeStream)
