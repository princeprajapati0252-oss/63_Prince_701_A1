
const fs = require("fs");
const util = require("util");

// Convert fs.unlink into a Promise-based function
const unlink = util.promisify(fs.unlink);

// Delete the file
unlink("test.txt")
    .then(() => {
        console.log("File deleted successfully.");
    })
    .catch((err) => {
        console.log("Error:", err.message);
    });

