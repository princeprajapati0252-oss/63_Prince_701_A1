console.log("Current Directory:", __dirname);

console.log("Current File:", __filename);

console.log("Node Version:", process.version);

console.log("Platform:", process.platform);

console.log("Command Line Arguments:");

process.argv.slice(2).forEach((arg, index) => {
    console.log(`Argument ${index + 1}: ${arg}`);
});

// Global function
setTimeout(() => {
    console.log("Executed after 2 seconds");
}, 2000);
