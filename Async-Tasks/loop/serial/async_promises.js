let fs = require("fs");
function promiseInLoop(){
    let files = ["../../f1.txt","../../f2.txt","../../f3.txt","../../abc.html","../../img1.jpg"];
    let fileWillBeReadPromise = fs.promises.readFile(files[0]);
    for(let i=1;i<files.length;i++){
        fileWillBeReadPromise = fileWillBeReadPromise.then(function(data){
            console.log(`File: ${i}`);
            let nwePr = fs.promises.readFile(files[i]);
            return nwePr;
        })
    }
    return fileWillBeReadPromise;
}
promiseInLoop().then(function(data){
    console.log("File 5");
    console.log(data.length);
})