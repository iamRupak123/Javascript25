const boxs = document.querySelectorAll(".box")
const body = document.querySelector(".canvas")
const button = document.querySelector("#btn")
boxs.forEach((e)=>{
e.addEventListener("click",(item)=>{
   // console.log(item.target.id)
   if(item.target.id === 'box1'){
      body.style.backgroundColor = "yellow";
      console.log(item.target.id)
   }
   else if(item.target.id === 'box2'){
      body.style.backgroundColor = "blue";
      console.log(item.target.id)
   }
   else if(item.target.id === 'box3'){
      body.style.backgroundColor = "red";
      console.log(item.target.id)
   }
   else if(item.target.id === 'box4'){
      body.style.backgroundColor = "green";
      console.log(item.target.id)
   }
})
})
button.addEventListener("click",()=>{
    body.style.backgroundColor = "#dadada"
})
// body.addEventListener("click",()=>{
//    body.style.backgroundColor = "grey"
// })
