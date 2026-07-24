// console.log('Hello World');

// global.setTimeout(function(){
//     console.log('Hi');
    
// }, 3000);

let interval = global.setInterval(function(){
    console.log('Bye');
    
}, 1000);

global.setTimeout(function(){
    clearInterval(interval)
    
}, 5000);


console.log(__dirname);

console.log(__filename);






