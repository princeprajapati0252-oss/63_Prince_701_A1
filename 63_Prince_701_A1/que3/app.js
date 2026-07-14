const chatbot = require("./chatbot");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ask your question: ", (question) => {

    const answer = chatbot(question);

    console.log("Bot:", answer);

    rl.close();

});
