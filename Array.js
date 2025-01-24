const myarray =[1,2,3,4,9,7,8]
const mynew = [2,3,4,5]


// const store = myarray.join() // converts all emements of an array in to string
// console.log(store);

// const narray = myarray.concat(mynew)
// console.log(narray);
// [1, 2, 3, 4, 2, 3, 4, 5]

console.log(myarray.slice(1,3))
console.log(myarray);  //slice() selects the specified number of elements without affecting the original array elements

const arr = myarray.splice(1,3)
console.log(arr);   //whereas splice() removes the selected elements from the original array itself
console.log(myarray);


// str = "Rupak"
// console.log(Array.from(str));  // string to array

// const m1 = "banana"
// const m2 = "apple"
// const m3 = "guave"

// console.log(Array.of(m1,m2,m3));// it makes a array of following contest

// //spread operator
// const an_array = ["hello","how","are","you","hi","welcome"]
// const an1 =  [1,2,3,4,5,6]
// const a = [...an_array,...an1]
// console.log(a);



