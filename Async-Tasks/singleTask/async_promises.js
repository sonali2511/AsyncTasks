let fs = require("fs");
let fileWillBeReadPromise = fs.promises.readFile("../f2.txt");
fileWillBeReadPromise.then(function(data){
console.log(`Data is: - ${data.byteLength}`);
})