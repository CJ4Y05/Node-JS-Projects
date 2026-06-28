const prompt = require("prompt-sync")()

console.log("NOTE: A, B, C, etc...")
var yourGrade = prompt("Enter your grade here: ").toUpperCase();

switch(yourGrade){
    case "A":
        console.log('Amazing Job!');
        break
    case "B":
        console.log('Great Job!');
        break
    case "C":
        console.log('You did okay...');
        break
    case "D":
        console.log('Please do better next time...');
        break
    case "F":
        console.log('See you next year...');
        break
    default:
        console.log('Enter the right input...');
}

