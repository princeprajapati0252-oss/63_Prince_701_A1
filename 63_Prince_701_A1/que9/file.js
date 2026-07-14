const fs = require("fs");


fs.writeFileSync("demo.txt", "Hello Node.js");


const data = fs.readFileSync("demo.txt", "utf8");
console.log("File Content:", data);


fs.appendFileSync("demo.txt", "\nWelcome to FS Module");

console.log("\nUpdated Content:");
console.log(fs.readFileSync("demo.txt", "utf8"));


console.log("\nFile Exists:", fs.existsSync("demo.txt"));

fs.renameSync("demo.txt", "sample.txt");
console.log("File Renamed");


fs.copyFileSync("sample.txt", "copy.txt");
console.log("File Copied");

fs.unlinkSync("copy.txt");
console.log("Copied File Deleted");