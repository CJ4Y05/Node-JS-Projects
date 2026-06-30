let customers = [
  { name: "Cjay", age: 17 },
  { name: "Ana", age: 65 },
  { name: "Mark", age: 30 },
  { name: "Liza", age: 8 },
  { name: "Don", age: 45 }
];

function getTicketPrice(age){

    if(age >= 60){
        return 150;
    }
    else if (age >= 12){
        return 250;
    }
    else{
        return 100;
    }
}

function getCategory(age){

    if (age >= 60){
        return "Senior";
    }
    else if (age >= 12){
        return "Adult";
    }
    else{
        return "Child";
    }
}

for (let i = 0; i < customers.length; i++){
    let people = customers[i];
    let ticket = getTicketPrice(people.age);
    let category = getCategory(people.age);

    console.log(`${people.name} (${category}) -> ₱${ticket}`);
}
