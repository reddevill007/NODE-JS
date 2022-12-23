// import fs from "fs";
const fs = require("fs");

let text = fs.readFileSync("dele.txt", "utf-8");
console.log("The content of the file is ");

text = text.replace("learning", "learned");
console.log(text);

console.log("creating a new file");
fs.writeFileSync("rohan.txt", text);
