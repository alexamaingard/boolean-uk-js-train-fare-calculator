let age;
let distance;
let ticketPrice;
let kmPrice = 0.21;
let juniorPassenger = false;
const juniorPrice = 0.8;
let seniorPassenger = false;
const seniorPrice = 0.6;
const ageInputStr = "How old are you?";
const distanceInputStr = "How far are you travelling? (km)";
const errorMessageInput = "Input not valid. Please try again."
const ticketStr = "You can buy your ticket for:";
let validInp;
const churZurich = 119.3;
const churBern = 240.8;
const churGeneva = 396.7;
const churLuzern = 141.8; 
let destination;

function askInput (input, str){
    return prompt(str);
}

function validInput(input) {
    if (isNaN(input) || input.length == 0 || input == 0) {
        return false;
    }
    else{
        return true;
    }
}

function priceCalculator (distance) {
    return distance*kmPrice;
}

function checkForDiscounts(age) {
    if (age<18){
        juniorPassenger = true;
    }
    if (age>65) {
        seniorPassenger = true;
    }
}

function juniorDiscount (price) {
    return price*juniorPrice;
}

function seniorDiscount (price) {
    return price*seniorPrice;
}

do {
    age= askInput(age, ageInputStr);
    validInp = validInput(age);
    if (!validInp){
        alert(errorMessageInput);
    }
} while (!validInp);
do {
    distance = askInput(distance, distanceInputStr);
    validInp = validInput(distance);
    if (!validInp){
        alert(errorMessageInput);
    }
} while (!validInp);

checkForDiscounts(age);
if (juniorPassenger) {
    ticketPrice = juniorDiscount(priceCalculator(distance));
}
else if (seniorPassenger){
    ticketPrice = seniorDiscount(priceCalculator(distance));
}
else {
    ticketPrice = priceCalculator(distance);
}
console.log(ticketStr + " " + "£" + ticketPrice);