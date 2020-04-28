let fs = require("fs");
(async function promiseFn(){
    try{
        let data1 =  fs.promises.readFile("../../abc.html");
     
        let data2 =  fs.promises.readFile("../../img1.jpg");
        
        let data3 =  fs.promises.readFile("../../f1.txt");
         data1=await data1;
        console.log("file 1",data1.length);
         data2=await data2;
        console.log("image 1",data2.length);
        data3=await data3;
        console.log("file 2",data3.length);
    }
    catch(err){
console.log(err);
    }


})();