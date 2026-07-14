const fs = require("fs");              // Imports the File System module
const unzipper = require("unzipper");  // Imports the unzipper package

// Reads the ZIP file as a stream
fs.createReadStream("myFolder.zip")

    // Extracts the ZIP contents into the "ExtractedFiles" folder
    .pipe(unzipper.Extract({ path: "ExtractedFiles" }))

    // Runs when extraction is complete
    .on("close", () => {
        console.log("ZIP file extracted successfully.");
    });
