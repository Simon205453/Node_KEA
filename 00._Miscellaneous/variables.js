//Const Rule 1: Have to assign a value when declaring
const me = {
    /* key: value
    === key-value pairs
    */
   name: "Simon"
};

const hobbies = ["Cooking", "balling"];
hobbies.push("Staring");
me.hobbies = hobbies;

//Const Rule 2: Cannot reassign to constant

me.name = "Samson";

console.log(me)

const hobbyOne = "Cooking"
const hobbyTwo = "balling"
const hobbyThree = "Staring"