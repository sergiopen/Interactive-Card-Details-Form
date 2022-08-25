let inputs = document.querySelectorAll(".input");
let btn = document.getElementById("btn");
let btnValid = document.getElementById("btn-valid");

let inputName;
let inputNumber;
let inputMonth;
let inputYear;
let inputCvc;

function actualizeDates(){
    inputName = document.querySelector(".input__card__name").value;
    inputNumber = document.querySelector(".input__card__number").value;
    inputMonth = document.querySelector(".mm").value;
    inputYear = document.querySelector(".yy").value;
    inputCvc = document.querySelector(".input__card__cvc").value;
    
    if(inputName != "") {
        document.querySelector(".error__name").classList.remove("active");
        document.querySelector(".name__card").textContent = inputName.toUpperCase();
    }
    else{
        document.querySelector(".name__card").textContent = "FELICIA LEIRE";
        document.querySelector(".error__name").classList.add("active");
    }
    if(inputNumber != "") {
        document.querySelector(".error__number").classList.remove("active");
        if(inputNumber.length > 16) {
            document.querySelector(".error__number").textContent = "The card number can't be more than 16 numbers";
            document.querySelector(".error__number").classList.add("active");
        }
        else{
            if(inputNumber.length != 16){
                document.querySelector(".error__number").textContent = "The card number must have 16 numbers";
                document.querySelector(".error__number").classList.add("active");    
            }
        }
        document.querySelector(".number__card").textContent = inputNumber;
    }
    else{
        document.querySelector(".error__number").classList.add("active");
        document.querySelector(".number__card").textContent = "0000 0000 0000 0000";
    }
    if(inputCvc != ""){
        document.querySelector(".error__cvc").classList.remove("active");
        document.querySelector(".cvc__card").textContent = inputCvc;
        if(inputCvc.length != 3){
            document.querySelector(".error__cvc").textContent = "CVC number must have only 3 numbers";
            document.querySelector(".error__cvc").classList.add("active");
        }
    }
    else{
        document.querySelector(".error__cvc").classList.add("active");
        document.querySelector(".cvc__card").textContent = "000";
    }
    if(inputMonth != "" && inputYear != ""){
        document.querySelector(".error__date").classList.remove("active");
        document.querySelector(".date__end").textContent = inputMonth + "/" + inputYear;
        if(inputMonth.length != 2 || inputYear.length != 2){
            document.querySelector(".error__date").textContent = "MM/YY must have only 2 numbers";
            document.querySelector(".error__date").classList.add("active");
        }
    }
    else{
        document.querySelector(".error__date").classList.add("active");
        document.querySelector(".date__end").textContent = "09/00";
    }
}

for(let i = 0; i < inputs.length; i++){
    inputs[i].addEventListener("keyup", () =>{
        actualizeDates();
    });
}

btn.addEventListener("click", () =>{
    actualizeDates();
    if(!document.querySelector(".error__name").classList.contains("active") && !document.querySelector(".error__number").classList.contains("active") && !document.querySelector(".error__cvc").classList.contains("active") && !document.querySelector(".error__date").classList.contains("active")){
        document.querySelector(".container__form").classList.add("active");
        document.querySelector(".container__valid").classList.add("active");
    }
});

btnValid.addEventListener("click", () =>{
    location.reload();
});