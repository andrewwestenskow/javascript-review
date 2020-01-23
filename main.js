//Javascript Review
//Ask any problems from afternoon projects that students want to go over. 

//List all primitive and complex data types.  What is the difference between primitive and complex data types?
/*

*/
//What is the difference between null and undefined?
//---------------------------------------------------------//

//DECLARING VARIABLES
//What keywords do we know to declare variables.  What are their differences?

//Declare a variable called name and give it a value of your name.

//Declare a variable called age and give it a value of your age.

//Declare a variable called hasBeard and give it a value of a boolean.

//Use these variables to create an object called me, give it name, age, and hasBeard properties.

//What do we call data sets on an object?

//Add a new property to your me object called hobbies.  It should be an array of strings, each one a hobby you enjoy. 

//Console log the first and last items in your hobbies array, use the length property


//--------------------------------------------------------//

//IF STATEMENTS

//Write an if statement that determines if your age is over 25.  If it is, console log 'I am over 25' to the console.

//Write an if statement based on the length of your hobbies array.  Use the following conditions:
//If you have 0 - 2 hobbies, console log `That's reasonable`
//If you ahve 3 - 5 hobbies, console log `That's a lot`
//Otherwise console log `That's excessive`

//--------------------------------------------------------//

//FOR LOOPS
const nums = [0,1,2,3,4,5,6,7,8,9,10]

//What are for loops?  What are they used for?

//Write a for loop that will console log the numbers 0 - 5

//Write a reverse for loop that will loop through your hobbies array and log each of them to the console.

//Write a for loop that will console log every other number between 0 and 10 to the console.


//------------------------------------------------------//

//FUNCTIONS

const people = [
  { name: 'Andrew', age: 27, hobbies: ['film', 'music', 'games'] },
  { name: 'Becca', age: 23, hobbies: ['biking', 'painting'] },
  { name: 'Brandon', age: 42, hobbies: ['running', 'sleeping'] }
]

//Write a function called nameFinder that takes in an object and returns the name property from that object.  Write it as an arrow function.  Invoke it with one of the people in the people array.

//What is a method?

const robot = {
  name: 'Terminator',
  age: 1500,
}

//Add a method to the robot object called boom that will return the string 'BOOM BLAST'

//What is a callback function?
//What is a higher order function?

//Write a function called exectutor that takes in a callback function, its only purpose is to invoke the function passed to it.  Write it as an arrow function.  Use it to invoke nameFinder.

//Add another method to the robot object called robotSays, it should take in a callback function and return the string `Robot says ` and then the result of the callback.

//Write a function called terminate that will take in an object.  Use a for in loop to change all values on the object to 'Terminated'

//------------------------------------------------------------//

//ARRAY METHODS

//What common methods do we know for manipulating arrays?

const things = ['car', 'fox', 'bread', 'pillow', 'jury duty']

//Use array methods to do the following: 
// add something to the the end of the things array, 
// add something to the beginning of the array, 
// remove the last item from the array, 
// remove the first item from the array, 
// remove the second item in the array and replace it with a new thing, 
// make a copy of the array starting at the second item.

//What is a higher order method?  What are some that we know?

var jobs = [
  {receptionist: "James"}, 
  {programmer: "Steve"},
  {designer: "Alicia"}
];

//Using the .filter method, create a variable equal to an array containing the person whose title is programmer.  Use only arrow functions.



const inventors = [
  { id: 0, first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { id: 1, first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { id: 2, first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { id: 3, first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { id: 4, first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { id: 5, first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { id: 6, first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { id: 7, first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { id: 8, first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { id: 9, first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { id: 10, first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { id: 11, first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
]


// 1. Filter the list of inventors for those who were born in the 1500's (.filter)

// 2. Give us an array of the inventors' first and last names (.map)

// 3. How many years did all the inventors live? (.reduce)

// 4. Sort the inventors by birthdate, oldest to youngest (.sort)

// 5. Sort the inventors by years lived (.sort)

// 6. Find the index of Marie Curie (.findIndex)

// 7. Find the information about the inventor with id 7 (.find)

// 8. Sum up the instances of each of these (.reduce)
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];