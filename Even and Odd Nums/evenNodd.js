let numbers = [4, 11, 15, 20, 7, 30, 13];

function checkNumber(num){
    if(num % 2 === 0 ){
        return "Even";
    }
    else{
        return "Odd";
    }
}

var oddCount = 0;
var evenCount = 0;

for (let i=0 ; i < numbers.length; i++){
    let current = numbers[i];
    let result = checkNumber(current);

    console.log(`${current} is ` + result);

    if (result === "Even"){
        evenCount++;
    }
    else{
        oddCount++;
    }
}

console.log(`Total of Even: ${evenCount}`);
console.log(`Total of Odd: ${oddCount}`);
