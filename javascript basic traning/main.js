// //************** Alert ***************

// alert
// alert('Hello world');


// //************** console ***************

// console.warn('this is warning');
// console.error('this is an error');


// //************** varriables, let, const ***************

// const myage = 21

// let age = 30

// age = 25

// console.log(myage);

// console.log(age);

// //************** Taking Input From user ***************

// var yourname = window.prompt("Enter your name: ");

// console.log("Your name is " + yourname);

// //************** Datatypes (strings, Numbers, null, undefined, symbol) ***************

// const name = 'Saeed';
// const age = 21
// const rating = 5.0
// const isCool = true;
// const x = null;
// const y = undefined;
// let z;
// console.log(x);

// //************** old way to concatenation strings ***************

// const name = 'Saeed';
// const age = 21

// console.log('my name is ' + name + ' and I am ' + age + ' year old');

// //************** new ways to concatenation string ***************

// // 1st way
// console.log(`My name is ${name} and I am ${age} year old`)

// // 2nd way
// const hello = `My name is ${name} and I am ${age} year old`;
// console.log(hello)

// //**************  playing with string ***************

// const s = 'My Name is Saeed shah';
// const myage = 'I, am, 21, year, old';

// console.log(s.length);
// console.log(s.toLowerCase());
// console.log(s.toUpperCase());
// console.log(s.substring(0, 7));
// console.log(s.substring(0, 7).toUpperCase());
// console.log(s.substring(0, 7).toLowerCase());
// console.log(s.split(' '));
// console.log(myage.split(', '));

// //**************  basics of an Array ***************

// // 1 way
// const numbers = new Array(1, 2, 3, 4, 5);
// console.log(numbers);

// // 2nd way
// const fruits = ['apples', 'orranges', 'bananas', 'mellons', 'watermellons', 'grapes'];

// console.log(fruits);

// console.log(fruits[2]);

// // add after making array (general way)

// fruits[6] = 'mango';

// // add value in array in last element 

// fruits.push('peach');

// // add value in first element

// fruits.unshift('strawberry')

// console.log(fruits);

// // Remove last element from an Array

// fruits.pop();

// console.log(fruits);

// // check its Array or not

// console.log(Array.isArray('fruits'));


// //check what is the index of particular value

// console.log(fruits.indexOf('bananas'));


// //**************  basics of Objects Literals ***************

// const person = {
//     firstName: 'Saeed',
//     lastName: 'Shah',
//     age: 21,
//     hoobies: ['"main nh bataon ga"', 'OKay.....!'],
//     address: {
//         streetNo: 'koi nh pata',
//         city: 'Gujrat',
//         country: 'Pakistan'
//     }
// }


// // Access the whole Data
// console.log(person);

// // Access the particular one

// console.log(person.age);

// console.log(person.address.country);

// console.log(person.hoobies[0]);

// // making objects  varriables

// const { firstName, lastName, age, hoobies, address: { streetNo, city, country } } = person;

// // Now you can accesss anything as varriable

// console.log(streetNo)

// // little Bit advance to access

// console.log(`My Name is ${firstName} ${lastName}. I am ${age} year old. I am from ${city}, ${country}. My hobby is ${hoobies}`)

// // Add properties (add something in object after creating)

// person.email = 'saeed@email.com';

// console.log(person);

// //**************  Arrays of Objects and JSON ***************

// const todos = [
//     {
//         id: 1,
//         name_of_task: 'Morning Exercise',
//         iscompleted: true
//     },
//     {
//         id: 2,
//         name_of_task: 'Taking university Classes',
//         iscompleted: true
//     },
//     {
//         id: 3,
//         name_of_task: 'Eating lunch ',
//         iscompleted: false
//     },
//     {
//         id: 4,
//         name_of_task: 'evening walk ',
//         iscompleted: true
//     },

// ];

// // Access Data from an Array

// console.log(todos);
// console.log(todos[1]);
// console.log(todos[1].name_of_task);
// console.log(todos[1].name_of_task, todos[1].iscompleted);

// //JSON

// const todosJSON = JSON.stringify(todos);
// console.log(todosJSON)

// //************** Loops ***************

// // For Loop

// for (let i = 0; i <= 10; i++) {
//     console.log(`For Loop Number: ${i}`);
// }

// // to divide both loops
// console.log('---------------------------------------------------');

// // while Loop

// let j = 0;
// while (j < 10) {
//     console.log(`While Loop Number: ${j}`);
//     j++;

// }


// //************** Loops in Arrays***************

// const todos = [
//     {
//         id: 1,
//         name_of_task: 'Morning Exercise',
//         iscompleted: true
//     },
//     {
//         id: 2,
//         name_of_task: 'Taking university Classes',
//         iscompleted: true
//     },
//     {
//         id: 3,
//         name_of_task: 'Eating lunch ',
//         iscompleted: false
//     },
//     {
//         id: 4,
//         name_of_task: 'evening walk ',
//         iscompleted: true
//     },
//     {
//         id: 5,
//         name_of_task: 'Late night study ',
//         iscompleted: false
//     },

// ];


// // 1st way
// for (let i = 0; i < todos.length; i++) {
//     console.log(todos[i].name_of_task, todos[i].iscompleted);
// }


// // // to divide both loops
// console.log('---------------------------------------------------');

// //2nd Way

// for (let todo of todos) {
//     console.log(todo.name_of_task, todo.iscompleted)

// }




// // // to divide both loops
// console.log('---------------------------------------------------');

// // High order Array method (its also itration)
// // Foreach, map, filter

// // ForEach
// todos.forEach(function (todos) {

//     console.log(todos.name_of_task);
// });


// // // to divide both loops
// console.log('---------------------------------------------------');

// // Map

// const todotext = todos.map(function (todo) {
//     return todo.name_of_task
// })
// console.log(todotext);


// // // to divide both loops
// console.log('---------------------------------------------------');

// // filter

// const todocompleted = todos.filter(function (todo) {

//     return todo.iscompleted === true;
// })
// console.log(todocompleted);

// // Merge Map Filter and ForEach


// const todocompleted = todos.filter(function (todo) {

//     return todo.iscompleted === true;
// }).map(function (todo) {
//     return todo.name_of_task;
// })
// console.log(todocompleted);


// //************** Basic of Conditions***************

// // double equal(==) means only match value 
// // triple equal (===) means also match Datatype
// // you can also use bollean in condiltion
// const x = 130;

// if (x === 100) {
//     console.log('x is 10');
// } else if (x > 10) {
//     console.log('x is greater than 10');
// }
// else {
//     console.log('x is not 10');
// }

// // Conditional (ternary) operator

// const y = 110;

// const color = y > 10 ? 'blue' : 'black';

// console.log(color)

// //************** functions ***************

// // 1 way

// function addNums(num1 = 12, num2 = 11) {
//     console.log(num1 + num2);

// }
// addNums();

// // 2nd way

// function addNumber(num1 = 12, num2 = 11) {
//     return num1 + num2;
// }
// console.log(addNumber());

// // 3rd way

// const addnum = (num1 = 12, num2 = 11) => console.log(num1 + num2);

// addnum();

// // 4th way

// const addnumbers = (num1 = 12, num2 = 11) => num1 + num2;

// console.log(addnumbers());

// // 5th way

// const adddnumbers = (num1 = 12, num2 = 11) => {
//     return num1 + num2
// };

// console.log(adddnumbers());


// //*****************************************************************************
// //*****************************************************************************
// //*****************************************************************************


// // *******************    NOW WE MOVING TO THE  OOP    ************************


// //*****************************************************************************
// //*****************************************************************************
// //*****************************************************************************




// //************** Constructor Function ***************

// //constructor functions

// function Person(firstName, lastName, dob, dobid) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = dob;
//     this.dobid = new Date(dobid);
//     this.getBirthYear = function () {
//         return this.dobid.getFullYear();
//     }

//     this.getFullName = function () {
//         return `${this.firstName} ${this.lastName}`;
//     }

// }

// // instatiate object

// const person1 = new Person('saeed', 'Shah', '12-December-1999', '2-December-1999');
// const person2 = new Person('Ali', 'Shah', '28-january-1998', '28-january-1998');
// const person3 = new Person('Hashim', 'Shah', '32-March-2000', '32-March-2000');

// // 1st way to see Output
// console.log(person1);
// console.log(person2);
// console.log(person3);

// // 2nd way to see Output
// console.log(person1, person2, person3);

// //particular output
// console.log(person1.dobid);

// console.log(person1.getBirthYear());
// console.log(person1.getFullName());



// //************** prototypes ***************

// //constructor functions

// function Person(firstName, lastName, dob, dobid) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = dob;
//     this.dobid = new Date(dobid);

// }


// Person.prototype.getBirthYear = function () {
//     return this.dobid.getFullYear();
// }
// Person.prototype.getFullName = function () {
//     return `${this.firstName} ${this.lastName}`;
// }
// Person.prototype.getDob = function () {
//     return this.dob;
// }
// Person.prototype.dateofbirth = function () {
//     return this.dobid;
// }

// // instatiate object

// const person1 = new Person('saeed', 'Shah', '12-December-1999', '2-December-1999');
// const person2 = new Person('Ali', 'Shah', '28-january-1998', '28-january-1998');
// const person3 = new Person('Hashim', 'Shah', '32-March-2000', '32-March-2000');

// console.log(person1.getFullName());
// console.log(person1.getBirthYear());
// console.log(person1.getDob());
// console.log(person1.dateofbirth());
// console.log(person2);


// //************** ES6 (Classes) ***************

// class Person {
//     constructor(firstName, lastName, dob, dobid) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = dob;
//         this.dobid = new Date(dobid);


//     }

//     getBirthYear() {
//         return this.dobid.getFullYear();
//     }

//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// const person1 = new Person('saeed', 'Shah', '12-December-1999', '2-December-1999');
// const person2 = new Person('Ali', 'Shah', '28-january-1998', '28-january-1998');
// const person3 = new Person('Hashim', 'Shah', '32-March-2000', '32-March-2000');


// console.log(person1.getBirthYear());
// console.log(person2);

