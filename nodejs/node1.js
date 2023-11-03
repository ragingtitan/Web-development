//Module is a set of pre-written code 
const fs=require("fs");
const text=fs.readFileSync("read.txt","utf-8");//Synchronously reads the content of a file
console.log(text)
