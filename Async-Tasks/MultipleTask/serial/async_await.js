let fs = require("fs");
(async function promisesFn(){
    try{
        let data1 = await fs.promises.readFile("../../f1.txt");
        console.log("file1",data1.byteLength)
        let data2 = await fs.promises.readFile("../../f2.txt");
        console.log("file2",data2.byteLength)
        let data3 = await fs.promises.readFile("../../abc.html");
        console.log("file3",data3.byteLength)
    }
    catch(err){
console.log(err);
    }


})();