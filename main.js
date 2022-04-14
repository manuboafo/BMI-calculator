const height = document.getElementById('height');
const weight = document.getElementById('weight');
const calculateButton = document.getElementById('calculate');
const bmiValue = document.getElementById('bmiValue');
const heightUnit = document.getElementById('heightUnit');
const weightUnit = document.getElementById('weightUnit');
const bmiText = document.getElementById('bmiText')
let meters;
let kilo;
calculateButton.addEventListener('click', calculate)

function calculate(){
    let heightValue = height.value;
    let weightValue = weight.value;
    let weightUnitvalue = weightUnit.value;
    let heightUnitvalue = heightUnit.value;

    if(heightValue.length > 0 && weightValue > 0){

        if (heightUnitvalue == "meters") {
          meters = heightValue;
        }else if(heightUnitvalue == "centimeters"){
            meters = heightValue / 100;
        } else if( heightUnitvalue == "foot"){
            meters = heightValue / 3.281;
        }

        if(weightUnitvalue == 'pounds'){
            kilo = weightValue / 2.205;
        } else if (weightUnitvalue == "kilograms"){
            kilo = weightValue;
        }


        let bmi = kilo / Math.pow(meters,2);
        bmiValue.innerText = Math.round(bmi)

        if(bmi <= 18){
            bmiText.innerText = "under weight";
            bmiText.style.color = "blue";
        } else if(bmi > 18 && bmi <= 25){
            bmiText.innerText = "normal weight";
            bmiText.style.color = 'green';
        }else if (bmi > 25 && bmi <= 30){
            bmiText.innerText = "overweight";
            bmiText.style.color = "orange";
        }else if(bmi > 30){
            bmiText.innerText = "obese";
            bmiText.style.color = "red";
        }

    }else alert('input all fields');
}
