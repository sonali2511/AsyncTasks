let fs=require("fs");
console.log("before");
fs.readFile("../../abc.html",function(err,data){
    console.log("first file",data.length);
    fs.readFile("../../f1.txt",function(err,data){
        console.log("second file",data.length);
        
    })
})
console.log("after");