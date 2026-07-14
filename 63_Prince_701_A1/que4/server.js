const fs = require("fs");
const archiver = require("archiver");

// Create output zip file
const output = fs.createWriteStream("myFolder.zip");

// Create archive object
const archive = archiver("zip", {
    zlib: { level: 9 }   // Maximum compression
});

// Connect archive to output file
archive.pipe(output);

// Add the folder to the zip
archive.directory("myFolder", false);

// Finish creating the zip
archive.finalize();

// Success message
output.on("close", () => {
    console.log("ZIP file created successfully.");
});


