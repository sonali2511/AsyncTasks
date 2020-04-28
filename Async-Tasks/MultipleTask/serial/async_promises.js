let fs = require("fs");
let file1WillBeReadPromise = fs.promises.readFile("../../f1.txt");
file1WillBeReadPromise.then(function(data){
    console.log("file 1",data.length);
  let file2WillBeReadPromise = fs.promises.readFile("../../f2.txt");
  return file2WillBeReadPromise;
})
.then(function(data){
    console.log("file 2",data.length);
let file3WillBeReadPromise = fs.promises.readFile("../../abc.html");
return file3WillBeReadPromise;
})
.then(function(data){
    console.log("file 3",data.length);
})
.catch(function(err){
    console.log("Error occured");
    console.log(err);
})
