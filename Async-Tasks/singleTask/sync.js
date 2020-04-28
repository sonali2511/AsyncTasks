let fs = require("fs");
console.log("Start");

let content  = fs.readFileSync("../abc.html");
console.log(content.byteLength);

console.log("after");