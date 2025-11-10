let todo = [];

let req = prompt("enter your request");

while (true) {
    if (req == "quit") {
        console.log("Quitting app!");
        break;
    }

    if (req == "list") {
        console.log("****************");
        for (let i = 0; i<todo.length; i++) {
            console.log(i + ": " + todo[i]);
        }
        console.log("****************");
    } else if (req == "add"){
        let task = prompt("please add a new task you want to add");
        todo.push(task);
        console.log("task added successfully");
    } else if (req == "delete"){
        let idx = prompt("please enter the task index: ");
        todo.splice(idx, 1);
        console.log("task deleted successfully");
    } else {
        console.log("invalid request");
    }

    req = prompt("enter your request");
}