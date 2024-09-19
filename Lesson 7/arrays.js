//built-in functions
//default with Javascript

//slice

let kpopGroups = ["Seventeen", "Twice", "BTS", "Blackpink", "EXO"]
console.log(kpopGroups)

//parameters - what we pass to the function
// slice(first, second)
// first parameter = starting index of where we want to slice
// second paramter = end index - 1 of where we want to slice
let slicedGroup = kpopGroups.slice(1, 3);
console.log(slicedGroup);

let choose = kpopGroups.slice(1, 6);
console.log(choose);


//push()
//push accepts the added element as an array
//adds an element to the end of an array
//alters an array itself
kpopGroups.push("2NE1");
console.log(kpopGroups);

kpopGroups.push("NCT", "Bigbang");
console.log(kpopGroups);

// unshift()
// adds an element on the start of the array
kpopGroups.unshift("New Jeans");
console.log(kpopGroups);

// Coding Challenge
let gardenPlants =[
    {
        name: 'roses',
        origin: 'china'
    },
    {
        name: 'tulips',
        origin: 'asia'
    },
]

gardenPlants.unshift(
    {
        name:'sampaguita', 
        origin:'Asia'
    }
);

console.log(gardenPlants);

let newFlower ={
    name: 'Cherry Blossom',
    origin: 'Asia'
}

gardenPlants.unshift(newFlower);
console.log(gardenPlants)