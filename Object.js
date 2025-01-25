const my_object ={
    name: "Rupak",
    age : 20,
    dept:"cse-AI",
    st_code : "BWU/BTA/23/380",
    "email":"rupak@gmail.com"
}
// const my_object1 ={
//     name: "Rupam",
//     age : 30,
//     dept:"cse",
//     st_code : "BWU/BTA/23/389"
// }
my_object['email']="rupak2005@huj.nom"
// console.log(my_object);

// console.log(my_object.name);
// console.log(my_object.age);

// console.log(my_object["email"]);

//concate two object using spread operator
// const  obj1 ={...my_object,...my_object1}
// console.log(obj1)



// singleton

const obj = new Object()
obj.id = 123
obj.name = "Rupak"
obj.dept = "cse"

// console.log(obj.dept);


const user =[
    {
        id:123,
        name:"Rupak",
        dept:"cse",
        email:"rupakghosh@22222.com"
    }
    ,{
        id:124,
        name:"rupam",
        dept:"ai",
        email:"rupam@ertt.com"
    }
]

console.log(user[0].email);
