const fs = require("fs");

//fs.writeFile("msesage.txt", "Hello from NodeJS!", (err) => {
//if (err) throw err;
//console.log("The flie has been saved!");
//})

fs.readFile("msesage.txt", "utf8", (err, data)=>{ 
    console.log(data);
});
