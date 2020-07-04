function calcAmount(){
    let price = 1200;
let amountInput = document.querySelector("input[name='amount-input']");
let showAmount = document.querySelector("span.show-amount");

let amount = parseInt(amountInput.value)*price;
showAmount.innerHTML = amount;

let amountNumber = parseInt(amountInput.value);
 
if(amountNumber > 10){
 
    alert("Maximum 10 terméket vásárolhat! ");
    return;
}else if(amountNumber <1 ){
    alert("A termék mennyisége kevés");
}else{
    let amount = parseInt(amountInput.value)*price;
    showAmount.innerHTML = amount;
}
}

let  toppings = [
    "Csokis süti",
    "Almás pite",
    "Ostoros rétes",
    "Kalács",
    "Kókuszgolyó",
	"Kenyér"
];
let toppingSelect = document.querySelector("#topInput");
let index = 0;
while(index < toppings.length){
	let option = document.createElement("option");
option.value = toppings[index];
option.innerHTML = toppings[index];
toppingSelect.appendChild(option);
index++;


 
}

