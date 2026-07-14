function task1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Task 1 Completed");
            resolve();
        }, 1000);
    });
}

function task2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Task 2 Completed");
            resolve();
        }, 1000);
    });
}

function task3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Task 3 Completed");
            resolve();
        }, 1000);
    });
}

// Chained Promises
task1()
    .then(() => {
        return task2();
    })
    .then(() => {
        return task3();
    })
    .then(() => {
        console.log("All Tasks Completed Successfully");
    })
    .catch((err) => {
        console.log("Error:", err);
    });





