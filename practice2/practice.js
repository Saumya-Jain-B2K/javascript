// ques1
// Write a JavaScript function that returns array elements larger than a number.
let arr = [1, 23, 5, 65, 34, 33, 14];
let num = 25;

function large(arr, num) {
    let newArr = [];
    for (let i =0; i< arr.length; i++){
        if (arr[i] > num) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(large(arr, num));

// ques2
// Write a JavaScript function to extract uniquecharacters from a string.
// Example:
// str = “abcdabcdefgggh” ans = “abcdefgh”
function uniqueStr(string){
    let ch = "";
    for (let i = 0; i<string.length; i++){
        if (!ch.includes(string[i])){
            ch +=string[i];
        }
    }
    return ch;
}

let string = "abcdabcdefgggh";
console.log(uniqueStr(string));

// ques3
// Write a JavaScript function that accepts a list of country names as input and returns the longest countryname as output.
// Example : country = ["Australia","Germany","UnitedStatesofAmerica"]
// output : "UnitedStatesofAmerica"
let country = ["Australia", "Germany", "United States of America"]

function largestCountry(country) {
    let largest = 0;
    let countryName = "";
    for (let i = 0; i < country.length; i++){
        if (country[i].length > largest) {
            largest = country[i].length;
            countryName = country[i];
        }
        
    }

    return countryName;
}

console.log(largestCountry(country));

// ques4
// Write a JavaScript function to count the number of vowels in a String argument

let str = "i am a good human being";

function vowel(string) {
    let count = 0;
    for ( let i = 0; i < string.length; i++){
        if (string[i] == 'a' || string[i] == 'e' || string[i] == 'i' || string[i] == 'o' || string[i] == 'u'){
            count += 1;
        }
    }

    return count;
}

console.log(vowel(str));

// ques5
// Write a JavaScript function to generate a random number within a range (start, end)
let start = 1;
let end = 10;

function randomNum(start, end){
    let diff = end - start;
    return Math.floor(Math.random() * diff) + start;
}

console.log(randomNum(start, end));
