

/*

Why: Because Javasvript is single-threaded

Solution 1: Callback

Solution 2: 

Solution 3: Async/await


*/

import { resolve } from "path";

let successMessage = "success"
let errorMessage = "error"
/*
new Promise((resolve, reject) => {
    setTimeout(() => {
        try{
        resolve("yeeee");
    } catch (errorMessage) {
        reject(errorMessage);
    }
    }, 3000);
})
.then(successMessage = console.log("Success message", successMessage))
.catch(errorMessage => console.log("Error message", errorMessage));
*/

function celebrate(name) {
    return new Promise((resolve, reject) => {
        if (name) {
            resolve(`Bajer, ${name}`);
        } else {
            reject("Rejected bajer")
        }
    })
}


celebrate("simon")
.then(celebrationMessage => console.log(celebrationMessage))
.catch(celebrationMessage => console.log(celebrationMessage))


function somethingGoodSomethingBad() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try{
                resolve("something Good");
            } catch {
                reject("something Bad");
            }
        }, 2000)
    })
}

/*
somethingGoodSomethingBad()
.then(console.log)
.catch(console.log);
*/


//if there is no name in below surround with try catch

//IIFE
(async function getGoodOrBadMessage() {
    const somethingGoodSomethingBadMessage = await somethingGoodSomethingBad();
    const celebrationMessage = await celebrate("me");
    console.log(somethingGoodSomethingBadMessage, celebrationMessage);
})()

