let fs = require("fs");
(async function promises(){
    try{
     let data1 = await fs.promises.readFile("../f1.txt");
     console.log(`file1 - ${data1.byteLength}`);
     if(data1.byteLength>20){
      let data2 = await fs.promises.readFile("../f2.txt");
      console.log(`f2 - ${data2.byteLength}`);
      if(data2.byteLength>40){
        let data3 = await fs.promises.readFile("../abc.html");
        console.log(`html file- ${data3.byteLength}`);
      }
      else{
        let data4 = await fs.promises.readFile("../img1.jpg");
        console.log(`image 1 - ${data4.byteLength}`);
      }
     }
     else{
        let data3 = await fs.promises.readFile("../f3.txt");
        console.log(`f3 - ${data3.byteLength}`);
     
     if(data3.byteLength<30){
        let data4 = await fs.promises.readFile("../f4.txt");
        console.log(`f4 - ${data4.byteLength}`);
      }
      else{
        let data5 = await fs.promises.readFile("../f5.txt");
        console.log(`f5 - ${data5.byteLength}`);
      }
    }
    }
    catch(err){
        console.log(err);
    }
})();