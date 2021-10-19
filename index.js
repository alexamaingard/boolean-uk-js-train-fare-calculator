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
const errorMessageInput = "Input not valid."
const ticketStr = "You can buy your ticket for:";

function errorNaN (input) {
    if (isNaN(input)){
        console.log(errorMessageInput);
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

age = prompt(ageInputStr);
errorNaN(age);
distance = prompt(distanceInputStr);
errorNaN(distance);
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