const input = document.getElementById("input")

function reverseStr(str){
    return str.split("").reverse().join("")
}

function check(){
    const value = input.value
    const reverse = reverseStr(value);

    if (value === reverse){
        alert(`${value} is a Palindrome!`)
    }else {
        alert(`${value} is NOT a Palindrome!`)
    }

    input.value = ""
}

