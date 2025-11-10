let age = prompt("Enter your age:");
age = Number.parseInt(age);
if (age >= 18) {
    alert("You are eligible for driving");
}
else if (age<18 && age>0) {
    alert("you are not eligible to drive");
}
//alt + shift + down arrow to select multiple lines to copy

else{
    alert("Invalid age");
}

//switch case statements
let day = prompt("Enter the day number (1-7):");
day = Number.parseInt(day);
switch (day) {
    case 1:
        alert("Monday");
        break;
    case 2:
        alert("Tuesday");
        break;
    case 3:
        alert("Wednesday");
        break;
    case 4:
        alert("Thrusday");
        break;
    case 5:
        alert("Friday");
        break;
    case 6:
        alert("Saturday");
        break;
    case 7:
        alert("Sunday");
        break;
    default:
        alert("Invalid day entered");               
}