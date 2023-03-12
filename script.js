let nickname = prompt("Please enter your nickname:");
let heightInInches = prompt("Please enter your height in inches:");
let weightInKg = prompt("Please enter your weight in kg:");

let heightInFt = Math.floor(heightInInches / 12) + "ft " + heightInInches % 12 + "in";
let weightInLbs = Math.round(weightInKg * 2.20462) + "lbs";

alert("Name: " + nickname + "\nHeight: " + heightInFt + "\nWeight: " + weightInLbs);


let firstName = prompt("Please enter your first name:");
let lastName = prompt("Please enter your last name:");
let birthYear = prompt("Please enter your birth year:");

let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;

document.getElementById("greeting").innerHTML = "Hello " + firstName + " " + lastName + "! How does it feel to be " + age + " years old?";


let agreed = confirm("Do you agree to share your personal information?");
if (agreed) {
console.log("Name: " + nickname + "\nHeight: " + heightInFt + "\nWeight: " + weightInLbs);
} 
else {
console.log("User does not wish to share his/her information.");
}