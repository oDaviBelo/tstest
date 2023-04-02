
function sum(a:number,b:number):number{
    return a+b;
}


let button = document.querySelector("button") as HTMLButtonElement;

button.addEventListener("click", ()=>{
    let numberone = document.getElementById('number1')as HTMLInputElement;
    let numbertwo = document.getElementById('number2') as HTMLInputElement;

    let num1value = +numberone.value;
    let num2value = +numbertwo.value;


    if(isNaN(num1value) || isNaN(num2value)){
        alert("Error")
    } else{
        console.log(sum(num1value,num2value))
    }


})

