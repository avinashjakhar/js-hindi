// Dates

let myDate = new Date()

// console.log(myDate.toString());

// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toUTCString());


//let myCreatedDate = new Date(2023,0,23)
// let myCreatedDate = new Date(2023,0,23,5,3)
let myCreatedDate = new Date("02-02-24")
console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth());