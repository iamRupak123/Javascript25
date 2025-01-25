//singleton

const object = new Object()
object.id = 1
object.name = "Rupak"
object.email = "rupakghosh23d.com"

// console.log(object.email);

const obj1 = {
    id : 1,
    email : "rupak@gmail.com"
}
const obj2 = {
    id1 : 2,
    email1 : "ratan@123.com"
}
const obj3 = {...obj1 ,...obj2}

console.log(obj3);


const obj4 = Object.assign({},obj1,obj2)
console.log(obj4);

console.log(Object.keys(obj4));
console.log(Object.values(obj4));
console.log(Object.entries(obj4));

console.log(obj4.hasOwnProperty("email"));


