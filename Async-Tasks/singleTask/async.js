let fs = require("fs");
console.log("before");

fs.readFile("../f1.txt",function(err,data){
    console.log(data.byteLength);
})

console.log("after");