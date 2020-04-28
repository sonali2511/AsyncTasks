let fs = require("fs");
(async function promiseFn(){
    try{
let data = await fs.promises.readFile("../f1.txt");
console.log("File 1 data is",data.byteLength);
    }
    catch(err){
        console.log(err);
    }
})();
