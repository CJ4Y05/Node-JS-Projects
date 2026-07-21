
try{
    const dividend = Number(prompt("Enter a dividend: "))
    const divisor = Number(prompt("Enter a divisor: "))

    if(divisor == 0){
        throw new Error("You can't divide by 0!")
    }
    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("Values must be a number!")
    }

    const result = dividend / divisor
    console.log(result)
}
catch(error){
    console.error(error)
}
finally{
    console.log("This is for the show ehehehe")
}


console.log("You have reached the end...")
