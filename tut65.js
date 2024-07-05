// synchronous or blocking
// line by line execution 

// anychronous or non-blocking
// line by line execution not gerented
// will be run 
const fs = require("fs");
fs.readFile("dele", "utf-8", (err, data)=>{
    console.log(data);
});
console.log("Tis is a msg")