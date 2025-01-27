const product_info = [
    {
      "ProductID": 1,
      "ProductName": "Wireless Earbuds",
      "Category": "Electronics",
      "Price": 49.99,
      "StockQuantity": 150,
      "Rating": 4.5
    },
    {
      "ProductID": 2,
      "ProductName": "Yoga Mat",
      "Category": "Fitness",
      "Price": 19.99,
      "StockQuantity": 300,
      "Rating": 4.8
    },
    {
      "ProductID": 3,
      "ProductName": "Stainless Steel Watch",
      "Category": "Accessories",
      "Price": 89.99,
      "StockQuantity": 75,
      "Rating": 4.7
    },
    {
      "ProductID": 4,
      "ProductName": "Electric Kettle",
      "Category": "Home & Kitchen",
      "Price": 29.99,
      "StockQuantity": 120,
      "Rating": 4.6
    },
    {
      "ProductID": 5,
      "ProductName": "Gaming Mouse",
      "Category": "Electronics",
      "Price": 39.99,
      "StockQuantity": 200,
      "Rating": 4.4
    },
    {
      "ProductID": 6,
      "ProductName": "Running Shoes",
      "Category": "Footwear",
      "Price": 59.99,
      "StockQuantity": 80,
      "Rating": 4.7
    },
    {
      "ProductID": 7,
      "ProductName": "Blender",
      "Category": "Home & Kitchen",
      "Price": 49.99,
      "StockQuantity": 90,
      "Rating": 4.5
    },
    {
      "ProductID": 8,
      "ProductName": "Smartphone Case",
      "Category": "Accessories",
      "Price": 12.99,
      "StockQuantity": 500,
      "Rating": 4.3
    },
    {
      "ProductID": 9,
      "ProductName": "LED Desk Lamp",
      "Category": "Electronics",
      "Price": 24.99,
      "StockQuantity": 130,
      "Rating": 4.6
    },
    {
      "ProductID": 10,
      "ProductName": "Cookware Set",
      "Category": "Home & Kitchen",
      "Price": 79.99,
      "StockQuantity": 60,
      "Rating": 4.8
    }
]
    
// for (const key of product_info) {
//     console.log(`${key.ProductName} is ${key.Price}$`)
// }

const filtered_element  =  product_info.filter((val)=>{
    return val.Category === 'Electronics'
} )

// console.log(filtered_element);

const my_nums = [12,23,1,14,13,6,7,8,9]
const set_nums = my_nums.filter( (item)=> item > 10 )
console.log(set_nums);

const num = my_nums.map( (val) => val*10).map((val) => val+2)
console.log(num);


let arr = [2,5,6,9,8,7]
let array = arr.reduce( (acc,curr)=>{ return acc+curr},0)
console.log(array);


