function chatbot(question) {

    question = question.toLowerCase();

    if (question === "hello") {
        return "Hello! Welcome.";
    }

    if (question === "course") {
        return "We offer Node.js, Python and Java courses.";
    }

    if (question === "fees") {
        return "The course fee is Rs. 5000.";
    }

    if (question === "bye") {
        return "Thank you! Have a nice day.";
    }

    return "Sorry, I don't understand your question.";
}

module.exports = chatbot;

