// Synchrounous or blocking
// line by line execution

// Asynchrouous or non blocking
// line by line execution not guaranteed
// call back will fire

const fs = require("fs");
let text = fs.readFile("dele.txt", "utf-8", (err, data) => {
  console.log(err, data);
});

console.log("This is message");
