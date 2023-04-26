//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
function displayFavoriteFoods(person) {
    // iterate through the object
    for (let foodType in person) {
      // check if the value is an array
      if (Array.isArray(person[foodType])) {
        console.log(`${foodType}:`);
        // iterate through the array and log each value
        person[foodType].forEach(food => console.log(`- ${food}`));
      } else if (typeof person[foodType] === 'object') {
        console.log(`${foodType}:`);
        // iterate through the object and log each key-value pair
        for (let place in person[foodType][0]) {
          console.log(`- ${person[foodType][0][place]} at ${place}`);
        }
      } else {
        console.log(`${foodType}: ${person[foodType]}`);
      }
    }  
}
     displayFavoriteFoods(person3)

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/


// Define the Person prototype using a constructor function

     function Person(name, age) {
        this.name = name;
        this.age = age;
     }
     Person.prototype.printInfo = () => {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
      }
      
      // Arrow function to create the addAge method that takes a single parameter
      Person.prototype.addAge = (years) => {
        this.age += years;
      }
      
      // Create two people using the 'new' keyword
      const person1 = new Person("salma", 12);
      const person2 = new Person("adam", 10);
      
      // Print both of their infos
      person1.printInfo(); 
      person2.printInfo(); 
      
      // Increment one person's age by 3 years
      person1.addAge(3);
      person1.printInfo(); 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

function checkStringLength(str) {
    return new Promise((resolve, reject) => {
      if (str.length > 10) {
        resolve("Big word");
      } else {
        reject("Small Number");
      }
    });
  }
  checkStringLength("Hello World!")
  .then((result) => console.log(result))
  .catch((error) => console.log(error)); 

checkStringLength("Hi there")
  .then((result) => console.log(result))
  .catch((error) => console.log(error)); 