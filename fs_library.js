const fs = require("fs");
//crate and write in a file
fs.writeFile("hey.txt", "hello! how are you?", function(err){
    if(err) console.error(err);
    else console.log("done");
});
// add text to file
fs.appendFile("hey.txt", "i am fine ", function(err){
    if(err) console.error(err);
    else console.log("done");
})
// rename the file
fs.rename("hey.txt", "hello.txt", function(err){
    if(err) console.error(err);
    else console.log("done");
});
//copy a file text into another one
fs.copyFile("hello.txt", "namaste.txt", function(err){
    if(err) console.error(err);
    else console.log("done");
})