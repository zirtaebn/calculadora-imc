let nameInput = document.getElementById("name");
let weightInput = document.getElementById("weight");
let heightInput = document.getElementById("height");
let calculate_bttn = document.getElementById("calculate_bttn");
let result = document.getElementById("result");
let restart = document.getElementById("restart");
    
calculate_bttn.addEventListener("click", Calculate);
function Calculate(){

    let nameValue = nameInput.value;
    let weightValue = weightInput.value;
    let heightValue = heightInput.value;
    let imc = (weightValue / Math.pow(heightValue,2)).toFixed(2);

    result.innerHTML = `<p>${nameValue}, o seu IMC é ${imc} kg/m² e ${table(imc)}</p>`;

    calculate_bttn.style.display = "none";

    restart.innerHTML = "<div id = 'restart_bttn'>Calcule Novamente</div>";
    let restart_bttn = document.getElementById("restart_bttn");
    restart_bttn.addEventListener("click", ResetInputs);
}

function table(imc){

   if (imc <= 17){

    return "você está <strong>muito</strong> abaixo do peso."
   
   }else if(imc <= 18.5){

    return "você está abaixo do peso."


   }else if(imc <= 25){

    return "seu peso está normal."


   }else if(imc <= 30){

    return "você está acima do peso."


   }else{

    return "você está <strong>muito</strong> acima do peso."

   }
}

function ResetInputs(){

    nameInput.value = "";
    weightInput.value = "";
    heightInput.value = "";
    result.innerHTML = "";

    calculate_bttn.style.display = "";

    restart_bttn.style.display = "none";

}
