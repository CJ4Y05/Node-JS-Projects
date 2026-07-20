
function checkStock(item) {
    return new Promise( (resolve, reject) => {

        setTimeout( () => {
            const inStock = Math.random()

            if (inStock >= 0.5){
                resolve(`${item} is in stock!`)
            }
            else{
                reject(`${item} is out of stock...`)
            }
        }, 1000)
    })
}

checkStock("Laptop")
    .then( value => {
    console.log(value)
    })
    .catch(error => {
        console.log(error)
    })
    .finally(() => {
        console.log("Stock check complete!")
    })
