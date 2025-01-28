const form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const height = parseFloat(document.querySelector("#height").value)
    const weight = parseFloat(document.querySelector("#weight").value)
    const result = document.querySelector("#result")

     

    if(height == '' || isNaN(height) || height < 0){
        result.innerHTML = `Please enter a valid height not ${height}`
        console.log("form submited")
    }
    else if(weight == '' || isNaN(weight) || weight < 0){
        result.innerHTML = `Please enter a valid weight not ${weight}`
        console.log("form submited")
    }
    else{
        const bmi = weight / (height* height);
       
        if(bmi < 18.5){
              
            result.innerHTML = `<span>Result is : ${bmi.toFixed(2)} and You are UnderWeight</span>`
        }
        else if(bmi>=18.5 && bmi < 25){
            
             result.innerHTML = `<span>Result is : ${bmi.toFixed(2)} and You have a healthy weight</span>`
        }
        else if(bmi>=25 && bmi < 30){
            
             result.innerHTML = `<span>Result is : ${bmi.toFixed(2)} and You are overweight</span>`
        }
    }
})