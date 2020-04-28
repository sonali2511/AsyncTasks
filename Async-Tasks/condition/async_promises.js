let fs = require("fs");
let file1WillBeReadPromise  = fs.promises.readFile("../f1.txt");
file1WillBeReadPromise.then(function(data){
    console.log(`file 1 - ${data.byteLength}`);
    if(data.byteLength>20){
        let file2WillBeReadPromise = fs.promises.readFile("../f2.txt");
       file2WillBeReadPromise.then(function(data){
        console.log(`f2 - ${data.byteLength}`);
        if(data.byteLength>40){
            let image1WillBeReadPromise = fs.promises.readFile("../img1.jpg");
            image1WillBeReadPromise.then(function(data){
                console.log(`image1 - ${data.byteLength}`); 
            })
        }
        else{
            let htmlFileWillBeReadPromise = fs.promises.readFile("../abc.html");
            htmlFileWillBeReadPromise.then(function(data){
                console.log(`abc html file - ${data.byteLength}`); 
            }) 
        }
       })
    }
    else{
        let file3WillBeReadPromise = fs.promises.readFile("../f3.txt");
        file3WillBeReadPromise.then(function(data){
         console.log(`f3 - ${data.byteLength}`);
         if(data.byteLength<30){
             let file4WillBeReadPromise = fs.promises.readFile("../f4.txt");
             file4WillBeReadPromise.then(function(data){
                 console.log(`f4 - ${data.byteLength}`); 
             })
         }
         else{
             let file5WillBeReadPromise = fs.promises.readFile("../f5.txt");
             file5WillBeReadPromise.then(function(data){
                 console.log(`f5 - ${data.byteLength}`); 
             }) 
         }
        })
    }
})
