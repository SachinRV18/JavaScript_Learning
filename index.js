// alert("Hello Sachin!!")
// console.log(123)
// console.log("sachin")

// var my_name = "sachin";
// console.log(my_name)

// console.log([1,2,3,4]) //array

// console.log({a:1,b:2,c:3}) //dict

//variables

// var name = "sachin";
// // console.log(name)
// name = "gowtham";
// console.log(name) //gowtham is the output

// var greeting;  // conditionally rendering some data
// greeting = "hello"
// console.log(greeting) //undefined is the output

// var $name = "sachin";  // $ used more in Jquery
// console.log($name);

// let $name = "sachin";  // $ used more in Jquery
// console.log($name);

// const name = "sachin";
// console.log(name)
// name = "gowtham";
// console.log(name) // error , because we can't reassign a values

// const person = {
//     name : "sachin",
// };
// person.name = "Ganesh"
// console.log(person)
// Note: we cannot change the value of the constant variable, but we can change the "value of the object" of constant variable

// const numbers = [1,2,3,4,5,6]
// numbers.push(7)
// console.log(numbers)

// // string
// let name = "sachin"
// console.log(typeof name)

// // number
// let number = 123
// console.log(typeof number)

// // Boolen
// let bool = true
// console.log(typeof bool)

// // null
// let variable = null
// console.log(typeof variable) // there was one error in JS it will print object instead of null 

// // undefiened
// let word;
// console.log(typeof word)  //if we dont assign any values it will define undefiend

// // symbol
// const sym = Symbol();
// console.log(typeof sym)

// Reference Datatypes 

// //Array
// const hobbies = ['cricket', 'hobbies']
// console.log(typeof hobbies)

// //object Literals
// const person={
//     name : "sachin",
//     age : 22,
// }
// console.log(typeof person)

// // Dates
// const today = new Date()
// console.log(today)
// console.log(typeof today)

// let val;

// // Number to string

// val = 533;

// val= String(val)
// console.log(val)
// console.log(typeof val)
// console.log(val.length)

// let val;

// // Boolean to string

// val = true;

// val= String(val)
// console.log(val)
// console.log(typeof val)
// console.log(val.length)

// let val;

// // Boolean to string

// val = new Date();

// val= String(val)
// console.log(val)
// console.log(typeof val)
// console.log(val.length)

// let val;
// // Array to string
// val = [1,2,3,4,5];  // why 9 because it counts a spaces also
// val= String(val)
// console.log(val)
// console.log(typeof val)
// console.log(val.length)

// the above we can also done by using toString() method

// let val;
// // toString function
// val = 5;
// val= val.toString()
// console.log(val)
// console.log(typeof val)
// console.log(val.length)

// // string to a number
// let val;
// val = 5;
// console.log(val)
// console.log(typeof val)
// console.log(val.toFixed(2))

// let val;
// val = "5";
// val = "5";
// val= Number(val)
// console.log(val)
// console.log(typeof val)
// console.log(val.toFixed(2))

// // boolean value
// let val;
// val1 = Number(true)
// val2 = Number(false)
// val3 = Number(null)

// console.log(val1)
// console.log(val2)
// console.log(val3)
// console.log(typeof val1)
// console.log(typeof val2)
// console.log(typeof val3)
// console.log(val1.toFixed(2))
// console.log(val2.toFixed(2))
// console.log(val3.toFixed(2)) // null is always 0 

// // using parseInt
// let val;
// val = "5";
// val= parseInt(val)
// console.log(val)
// console.log(typeof val)
// console.log(val.toFixed(2))


// // type cohesion
// const val1 = "5";
// const val2 = 6;
// const sum = val1 + val2

// console.log(sum)
// console.log(typeof sum)  //  if frst letter is string means it will convert next one also an string and concatinate its value

// String and string methods