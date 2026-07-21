
function orderFood(dish){
    return new Promise( (resolve, reject) =>{
        setTimeout( () => {
            
            const cooking = Math.random()
            
            if (cooking >= 0.7){
                resolve(`You ${dish} has arrived!`)
            }
            else{
                reject(`Your order "${dish}" was not cooked!`)
            }

        }, 2000)
        
    })
}

console.log("Order placed, waiting for delivery...")

orderFood("Noodles")
    .then( (result) =>{
        console.log(result)
    })
    .catch( error => {
        console.error(error)
    })
    .finally( () => {
        console.log("Eat well!")
    })

orderFood("Orange Chicken")
    .then( (result) =>{
        console.log(result)
    })
    .catch( error => {
        console.error(error)
    })
    .finally( () => {
        console.log("Eat well!")
    })
