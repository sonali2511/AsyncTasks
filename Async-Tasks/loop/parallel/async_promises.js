let fs = require("fs");
function promiseFn(){
    let files = ["../../f1.txt","../../f2.txt","../../f3.txt","../../abc.html","../../img1.jpg"];
for(let i=0;i<files.length;){
    let pr = fs.promises.readFile(files[i++]);
    pr.then(function(data){
        console.log(`file ${i}`,data.length);
    })
    pr.catch(function(err){
        console.log(err);
    })
}
}
promiseFn();