//snake , water, gun game
let user = prompt("Enter S, W, G : ");
let cpuI = Math.floor(Math.random() * 3);
let cpu = ["S", "W", "G"][cpuI];

const match = (cpu, user) => {
    if (cpu === user){
        return 0;
    }

    else if(cpu === "S" && user === "W"){
        return "cpu";
    }
    else if (cpu === "G" && user === "W"){
        return "user";
    }
    else if (cpu === "G" && user === "S"){
        return "cpu";
    }

    else if(cpu === "S" && user === "G"){
        return "user";
    }
    else if(cpu === "W" && user === "G"){
        return "cpu";
    }
    else if(cpu === "W" && user === "S"){
        return "user";
    }

};

let res = match(cpu, user);
document.write(`CPU: ${cpu}, User : ${user} "The winner is : ${res}"`);