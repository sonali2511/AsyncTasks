let fs=require("fs");
let file1=fs.readFileSync("../../abc.html");
let file2=fs.readFileSync("../../f1.txt");
let file3=fs.readFileSync("../../f2.txt");
console.log(file1.length);
console.log(file2.length);
console.log(file3.length);
