//@22-3 JS-VI

//Array Methods

//1.push
const characters = ["Ken the Ninja", "Ben the Baby Ninja", "Master White"];

console.log(characters);

// Add the string "Birdie" to the characters array with the push method
characters.push('Birdie');


// Print the characters array
console.log(characters);

//2.forEach

const characters = ["Ken the Ninja", "Ben the Baby Ninja", "Master White", "Birdie"];

// Print all elements in the characters array by using the forEach method
characters.forEach((character)=>{
  console.log(character);
});

//3.find

const numbers = [1, 3, 5, 7, 9];

// Find the multiples of 3 from the numbers array by using the find method, and assign them to the foundNumber constant
const foundNumber = numbers.find((number)=>{
  return number%3===0;
  
});
  
console.log(foundNumber);
// Print foundNumber



const characters = [
  {id: 1, name: "Ken the Ninja", age: 6},
  {id: 2, name: "Ben the Baby Ninja", age: 2},
  {id: 3, name: "Master White", age: 100},
  {id: 4, name: "Birdie", age: 21}
];

// Find the object which id is 3 from the characters constant, and assign it to the foundCharacter constant
const foundCharacter = characters.find((character)=>{
  return character.id===3;
});
console.log(foundCharacter);
// Output foundCharacter

//filter

const numbers = [1, 2, 3, 4];

// Get all even numbers from numbers with the filter method, and assign them to the evenNumbers constant
const evenNumbers=numbers.filter((number)=>{
  return number%2===0;
});

// Print the value of evenNumbers
console.log(evenNumbers);


const characters = [
  {id: 1, name:"Ken the Ninja", age: 14},
  {id: 2, name:"Ben the Baby Ninja", age: 5},
  {id: 3, name:"Master White", age: 100}
];

// Get characters younger than 20, and assign them to the underTwenty constant

const underTwenty=characters.filter((character)=>{
  return character.age<20;
}) ;
// Print the value of underTwenty
console.log(underTwenty);

//5.map

const numbers = [1, 2, 3, 4];

// Create a new array in the numbers constant by using the map method, and assign it to the doubledNumbers constant

const doubledNumbers=numbers.map((number)=>{
  return number*2;
});
// Print the doubledNumbers constant
console.log(doubledNumbers);


const names = [
  {firstName: "Kate", lastName: "Jones"},
	{firstName: "John", lastName: "Smith"},
	{firstName: "Dennis", lastName: "Williams"},
	{firstName: "David", lastName: "Black"}
];

// Create a new array in the names constant by using the map method, and assign it to the fullNames constant
const fullNames=names.map((name)=>{
  return name.firstName+""+name.lastName;
});

// Print the fullNames constant
console.log(fullNames);



