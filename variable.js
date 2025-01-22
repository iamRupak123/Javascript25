//premitive datatype
// 7 primitive datatype 
// 1.string 2.Number 3.boolean 4.null 5.undefined 6.symbol 7.bigInt

const msrks =  "rupak"
console.log(typeof msrks);

const number = 34
console.log(typeof number);

const bool = true
console.log(typeof bool);

const vun = null;
console.log(typeof  vun);

let num1;
console.log(typeof num1);

// Non premitive datatype

//  array , object , function

const arr = ["rupak",12,true,12.2]
console.log(typeof arr);

const obj = {
    name : "Rupak Ghosh",
    age  : 12,
    dept : "Btech cse AIML"
}

console.log(typeof obj);

const func = function(){
    console.log("hello");   
}
console.log(typeof func);
