// // arrays and methods

// const number = [1,2,3,45,6,7,8,9,32];
// const number2 = new Array(1,2,3,45,6,7,8,9,32);  // another way of creating an array
// const fruits = new Array("apple", "bananana", "orange");  // astoring strings in array
// // const mixed = new Array("apple", "bananana", " orange", 1, 2,3,4,5, true, undefined, null);  // storing multiple types of data's in array
// // // console.log(number2)
// // // console.log(fruits)
// // // console.log(mixed)

// let val;
// // val = number.length; // array length

// // val = Array.isArray(number); // to check its an array or not

// // val = number[3] // to get a single value using indexing

// // // insert or replace
// // number[1] = 100;

// // // find the index value
// // val = number.indexOf(45);

// // //Mutating the array
// // //add a number to the end of an array
// // number.push(2590);

// // // add to the front
// // number.unshift(120);

// // //remove the last number from the array.
// // number.pop(2590);

// // // remove the frst number from the array.
// // number.shift(120)

// // console.log(number);

// // //splicing
// // number.splice(1,1)  // remove an element from pointing the index
// // console.log(number);

// // reverse the number
// // number.reverse();

// // concat the numbers
// // val = number.concat(number2);

// // sort the array
// // val = fruits.sort();

// // // sort the numbers
// // val = number.sort()  // it will sort based on the first digit.

// // // sort ascending order
// // val = number.sort(function(x, y) {
// //     return x-y;
// // });

// // sort decending order
// val = number.sort(function(x, y) {
//     return y - x;
// });

// console.log(val)

// // template literals
// const name = "sachin";
// const age = 25;

// let html;

// // //without using a template literals, ES5, we are going to render HTML to browser with JS

// // html = '<ul><li>Name:' +name + '</li><li>Age:' + age + '</li></ul>';

// // document.body.innerHTML = html;

// // by using template literals
// html = `
// <ul>
// <li>Name:${name}</li>
// <li>Age:${age}</li>
// </ul>
// `;
// document.body.innerHTML = html;  // its easy

// // Object literals
// const person = {
//     firstName: "sach",
//     age:25,
//     email:"sachin@gmail.com",
//     hobbies : ['eat','sleep', 'code'],
//     address: {
//         city: 'skp',
//         state: 'karnataka'
//     },

//     // getBirthYear: function(){
//     //     return 1999;
//     // },  //hardcoded
//     getBirthYear: function(){
//         return 2024 - this.age;  //this keyword is used to get the value of particlar object. It will points to the same object
//     },  //hardcoded

//    };
// //   console.log(person.firstName);
// //   console.log(person.age);
// let val;
// val = person;
// console.log(person)
// // console.log(person.firstName)
// // console.log(person.age)
// // console.log(person.address)
// // console.log(person.address.city)
// // console.log(person.address.state)
// // console.log(person.hobbies)
// // console.log(person.hobbies[2])
// // console.log(person.email)
// console.log(person.getBirthYear()) //calling a function

//Array of objects

// const people = [
//   {
//     FirstName: "Mani",
//     age: 25,
//   },
//   {
//     FirstName: "sachin",
//     age: 25,
//   },
//   {
//     FirstName: "Rakesh",
//     age: 25,
//   },
// ];

// // console.log(people[0].FirstName);

// for (let i = 0; i < people.length; i++) {
//   console.log(people[i].FirstName);
// }
