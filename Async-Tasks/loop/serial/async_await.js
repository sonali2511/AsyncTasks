let fs = require("fs");
(async function promiseFn(){
    try{
        let files = ["../../f1.txt","../../f2.txt","../../f3.txt","../../abc.html","../../img1.jpg"];
        for(let i=0;i<files.length;i++){
        let data = await fs.promises.readFile(files[i]);
        console.log(`File  ${i+1}`,data.byteLength);
        }
    }
    catch(err){
        console.log(err);
    }
})();