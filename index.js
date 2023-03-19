const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");
const lengthConversion = document.getElementById("length-conversion");
const volumeConversion = document.getElementById("volume-conversion");
const massConversion = document.getElementById("mass-conversion");
let conversions = [];

function convert(input) {
  const metersToFeet = Number(input) * 3.281;
  conversions.push(metersToFeet.toFixed(3));
  const feetToMeters = Number(input) / 3.281;
  conversions.push(feetToMeters.toFixed(3));
  const litersToGallons = Number(input) * 0.2604;
  conversions.push(litersToGallons.toFixed(3));
  const gallonsToLiters = Number(input) / 0.264;
  conversions.push(gallonsToLiters.toFixed(3));
  const kilogramsToPounds = Number(input) * 2.204;
  conversions.push(kilogramsToPounds.toFixed(3));
  const poundsToKilograms = Number(input) / 2.204;
  conversions.push(poundsToKilograms.toFixed(3));
}

function render() {
  lengthConversion.textContent = `${inputEl.value} meters = ${conversions[0]} feet | 
    ${inputEl.value} feet = ${conversions[1]} meters
    `;
  volumeConversion.textContent = `${inputEl.value} liters = ${conversions[2]} gallons | 
    ${inputEl.value} gallons = ${conversions[3]} liters
    `;
  massConversion.textContent = `${inputEl.value} kilos = ${conversions[4]} pounds | 
    ${inputEl.value} pounds = ${conversions[5]} kilos
    `;
}

convertBtn.addEventListener("click", function () {
  const inputValue = Number(inputEl.value);
  convert(inputValue);
  render();
  conversions = [];
});
