function walkDog(){

    return new Promise((resolve, reject) => {
        setTimeout( () => {

            const dogWalked = false;

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


async function doChores(){

    try{
        const walkDogResult = await walkDog()
        console.log(walkDogResult)

        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult)

        const takeOutTrash = await cleanKitchen();
        console.log(takeOutTrash)

        console.log(`You finished all the chores!`)
    }
    catch(error){
        console.error(error)
    }
}

doChores()
