const prompt = require("prompt-sync")()

class Bank{
    constructor(name, balance = 0){
        this.name = name;
        this.balance = balance;
    }

    showBalance(){
        console.log(`\nCurrent Balance: ${this.balance}\n`);
    }

    deposit(){
        
        let amount = prompt("Please enter the amount: ");

        amount = Number(amount);

        this.balance += amount;
        console.log(`\nYou have deposit: ${amount}`);
    }

    withdraw(){

        let amount = prompt("\nPlease enter the amount: ");

        amount = Number(amount);
        this.balance -= amount;

        console.log(`\nYou withdrew: P${amount}\n`);

    }

}

const user = new Bank("Cjay");

while(true){

    console.log(`\nWelcome to BPI ${user.name}\n`);

    const menu = ["1. Show Balance", "2. Deposit", "3. Withdraw", "4. Logout"];
    
    for(i = 0; i < menu.length; i++){
        console.log(menu[i]);
    }
    
    let select = prompt("Please enter your selection: ");

    select = Number(select);

    if (select == 1){
        user.showBalance();
    }
    else if (select == 2){
        user.deposit()
    }
    else if (select == 3){
        user.withdraw();
    }
    else if (select == 4){
        console.log("\nLogged Out!");
        process.exit();
    }
    else{
        console.log("\nPlease enter a valid input, thank you!");
    }
}
