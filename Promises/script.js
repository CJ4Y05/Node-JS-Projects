function walkDog(){

    return new Promise((resolve, reject) => {
        setTimeout( () => {

            const dogWalked = true;

            if( dogWalked){
                resolve("You walked the dog... wof wof!")
            }
            else{
                reject("You didn't walked the dog...")
            }
            
    }, 1500)
    })
}

function cleanKitchen(){

    return new Promise((resolve, reject) => {
        setTimeout( () => {

            const kitchenCleaned = true;

            if( kitchenCleaned){
                resolve("You cleaned the kitchen...")
            }
            else{
                reject("You didn't clean the kitchen...")
            }
    }, 2500)
    })
}

function takeOutTrash(){
    
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            
            const tookOutTrash = false;

            if( tookOutTrash ){
                resolve("You took out the trash!")
            }
            else{
                reject("You didn't took out the trash!")
            }
    }, 500)
    })
}


walkDog().then(value => {console.log(value); return cleanKitchen()})
            .then(value => {console.log(value); return takeOutTrash()})
            .then(value => {console.log(value); console.log("You finished all the chores!")})
            .catch(error => console.error(error))



/* Avoid CALLBACK-HELL like this below me and use PROMISES

walkDog(() => {
    cleanKitchen(()=> {
        takeOutTrash(() =>{
            console.log("You finished all the chores...")
        })
    })
})

*/

