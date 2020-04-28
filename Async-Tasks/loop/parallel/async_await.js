let fs = require("fs");

(async function promiseFn(){
    let data=[];
    try{
        let files = ["../../f1.txt","../../f2.txt","../../f3.txt","../../abc.html","../../img1.jpg"];
        for(let i=0;i<files.length;i++){
         data[i]= fs.promises.readFile(files[i]);
        }
        for(let i=0;i<data.length;i++){
            data[i]= await data[i];
            console.log("file"+i,data[i].length);
           }
     
    }
    catch(err){
        console.log(err);
    }
})();