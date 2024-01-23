// const tenderUser = new Object() // it is singlton object
const tenderUser ={}  // it is also an non singlton object

tenderUser.id ="123abc"
tenderUser.name = "same"
tenderUser.isLoggedIn = false
// console.log(tenderUser);

const regularUser = {
    email: "soome@gmail.coom",
    fullname: {
        userfullname: {
            fristname : "Avinash",
            lastname: "Jakhar"
        }
    }
}
// console.log(regularUser.fullname.userfullname.fristname);

const obj1= {1: "a", 2: "b"}
const obj2= {3: "a", 4: "b"}
const obj4= {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
// const obj3 =Object.assign({}, obj1,obj2, obj4) 
const obj3 ={...obj1, ...obj2}
// console.log(obj3);



const users =[
    {
       id: 1,
       email: "h@gmail.com"
},
{
    id: 1,
    email: "h@gmail.com"
},
{
    id: 1,
    email: "h@gmail.com"
},

]

users[1].email
console.log(tenderUser);

console.log(Object.keys(tenderUser));
console.log(Object.values(tenderUser));
console.log(Object.entries(tenderUser));
console.log(tenderUser.hasOwnProperty('isLogged'));