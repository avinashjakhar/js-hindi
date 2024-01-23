// console.log("h");


function sayMyName(){
    console.log("A");
    console.log("v");
    console.log("i");
    console.log("n");
    console.log("a");
    console.log("s");
    console.log("h");

}
// sayMyName()

// function addTwoNumber(number1,number2){
//     console.log(number1 + number2);
// }
// addTwoNumber(3,"a")
// addTwoNumber(3, null)
function addTwoNumber(number1,number2){
    // let result = number1 + number2
    // console.log("Avinash");
    // return result

    return number1 + number2
    
}
const result = addTwoNumber(3,5)
// console.log("Result:",result);

function loginUserMessage(username= "sam"){
    // if(username === undefined)
    if(!username){
console.log("Please enter s username");
return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Avinash"))

function calculateCartPrice(val1, val2,...num1){
  return num1

}
console.log(calculateCartPrice(200,400,500,2000));

const user ={
    username: "Avinash",
    prices: 200
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

}
// handleObject(user)
handleObject({
    username: "sam,",
    price: 200
})

const myNewArray =[200,400, 100 , 600]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,1000]));