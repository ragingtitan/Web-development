/*Types of code
1. Synchronous or blocking 
- Provides line by line execution of code is guranteed!   
2. Asynchronous or non-blocking
- Cannot gurantee line by line execution of code
-Callbacks will fire
*/
//Here is a code snippet

const fs=require("fs");
let text=fs.readFile("data.txt","utf-8",(a,b)=>{//first param a is err and second param b is data
    console.log(a,b);//The call back is fired after the file is read completely
});
console.log("This is a message");

/* We see the message, "This is a message" is printed first instead of the content of the file */