const inputEl= document.getElementById("input-el")
const inputBtn= document.getElementById("btn-el")

let inputMeter= document.getElementById("input-meter")
let inputFeet= document.getElementById("input-feet")
let inputLiter= document.getElementById("input-liter")
let inputGallon= document.getElementById("input-gallon")
let inputKilos= document.getElementById("input-kilos")
let inputPounds= document.getElementById("input-pounds")

let outputFeet= document.getElementById("output-feet")
let outputMeter= document.getElementById("output-meter")
let outputGallon= document.getElementById("output-gallon")
let outputLiter= document.getElementById("output-liter")
let outputPound= document.getElementById("output-pound")
let outputKilo= document.getElementById("output-kilo")

inputBtn.addEventListener("click", function(){
    inputMeter.innerHTML=inputEl.value
    inputFeet.innerHTML=inputEl.value
    inputLiter.innerHTML=inputEl.value
    inputGallon.innerHTML=inputEl.value
    inputKilos.innerHTML=inputEl.value
    inputPounds.innerHTML=inputEl.value

    outputFeet.innerHTML = (inputEl.value * 3.28084).toFixed(2)
    outputMeter.innerHTML= (inputEl.value * 0.3048).toFixed(2)
    outputGallon.innerHTML = (inputEl.value * 0.264172).toFixed(2)
    outputLiter.innerHTML = (inputEl.value * 3.78541).toFixed(2)
    outputPound.innerHTML= (inputEl.value * 2.20462).toFixed(2)
    outputKilo.innerHTML = (inputEl.value * 0.453592).toFixed(2)
})

//this code adjusts the input box based on the input text
inputEl.addEventListener("input", function(){
    const value = inputEl.value;
    const width = value.length * 40 + 25 ; // 40px per character
    inputEl.style.width = width + "px";
})