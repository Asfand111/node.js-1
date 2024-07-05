const fs = require("fs");
let text = fs.readFileSync("dele", "utf-8");
text = text.replace("legents", "shahram");

console.log("Thw content of the file is");
console.log(text);

console.log("Ceeating a new file is...") ;
fs.writeFileSync("shahram", text);