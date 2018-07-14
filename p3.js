//Q3.1

let speed = 60;
let mySpeed = 40;

if(speed > mySpeed) {
    console.log("OverSpeeding");
} else {
    console.log("Not");
}

//Q3.2

let name = "Anabia";
let isLoggedIn = true;

if (isLoggedIn === true) {
    console.log("Welcome, " + name);
} else {
    console.log("Please log in to continue");
}

//Q3.3

const maxTemp = 40; 
let todayTemp = 44; 
if (todayTemp > maxTemp) {
    console.log("IMPORTANT ANNOUNCEMENT!!! UIT is closed tomorrow due to heat wave.");
}


//Q3.4

let myCash = 100001;
if (myCash >= 1000000) {
    console.log("You are a millionaire!!!");
} else {
    console.log("Your are NOT a millionaire :( ");
}

//Q3.5

let isElectric = true;
if (isElectric === true) {
    console.log("The car has been manufactured by Tesla");
}


//Q3.6
let highScore = 100; 
let userScore = 120; 
if (userScore > highScore) {
    console.log("Congratulations!! Your new high score is " + userScore);
} else {
    console.log("Try Again. You just need " + (highScore - userScore + 1) + " points to win!");
}

//Q3.7

let numb = 59;
 if(numb % 2 === 0) {
     console.log("EVEN")
} else {
     console.log("ODD")
}

//Q3.8
let year = 1992; 
    if (year % 4 === 0) {
    if (year % 100 === 0 && year % 400 !== 0) {
        console.log("This is NOT a Leap year");
} else {
        console.log("This is a Leap year!!!");
}
} else {
    console.log("This is NOT a Leap year");
}
//Q3.9

const costPerMinute = 1;
let userCash = 5;
if (userCash < costPerMinute) {
    console.log("Moazziz Sarif, aap ka mojooda balance iss call k lye naa kaafi hai. Please re-charge karain");
} else if (userCash <= 10) {
    console.log("Moazziz sarif, aap ka balance khatam honay wala hai");
    console.log("Ring Ring!!");
} else {
    console.log("Ring Ring!!");
}

//Q3.10
let myAbsents = 2;
if (myAbsents < 0 ) {
    console.log("INVALID NUMBER. No. of absents cannot be negative");
} else if (myAbsents <= 2) {
    console.log("Congrats! You are eligible for the award");
} else {
    console.log("Sorry, but you have been absent too many times. You are ineligible for the awards :( ");
}

//Q3.11

let marks = 67; // can be any positive number
if (marks >= 91) {
    console.log("A+");
} else if (marks >= 86) {
    console.log("A");
} else if (marks >= 80) {
    console.log("A-");
} else if (marks >= 70) {
    console.log("B");
} else if (marks >= 60) {
    console.log("C");
} else if (marks >= 50) {
    console.log("D");
} else if (marks >= 40) {
    console.log("E");
} else {
    console.log("F");
}


//Q3.12
const appleCost = 10;
const mangoCost = 15;
const bananaCost = 8; 
const nihaCash = 100; 
let totalCost;
let noOfApples = 4;
let noOfMangoes = 3;
let noOfBananas = 5;

totalCost = noOfApples*appleCost + noOfMangoes*mangoCost + noOfBananas*bananaCost;
if (totalCost > 100 ) {
    console.log("Sorry, you do not have enough money");
} else {
    console.log("Hurray! You have enough money to buy all fruits");
}


//Q3.13
let num1="Hi";
let num2="Is Uit open today?";
let num3="What are the timings of today's class?";
let num4="Where will the class be conducted?";

if(num1 === num2){
    console.log("Thank you for calling TechKaro Customer Service. How may I help you?");
}
else if (num2 === num2){
    console.log("Yes");
}
else if(ques3 === num4){
    console.log("1:30 - 5:3");
}
else if(num4 === num1){
    console.log("At CL-1, Usman Institute");
}
else{
    console.log("Sorry, I do not understand your question");
}
// Q3.14
let customerCash = 10000; 
let withdrawCash = 6000; 
if (withdrawCash > customerCash) {
    console.log("Withdrawal FAILED! Sorry, you do not have sufficient balance.");
} else {
    console.log("Withdrawal SUCCESS! Your new balance is Rs. " + (customerCash - withdrawCash));
}

// Q3.15
let isRaining = false; 
let isSnowing = false; 
let windSpeed = 22; 
let isCloudy = false;
if (isRaining === false && isSnowing === false && windSpeed > 20 && isCloudy === false) {
    console.log("SUCCESS!! The weather is good for launch!");
} else {
    console.log("FAIL!! The weather is NOT good for launch");
}

// Q3.16

let math = 25; 
let comp = 80; 
let eng = 3; 
if (math > 10 || comp > 70 || eng > 20) {
    console.log("PASSED!");
} else {
    console.log("FAILED");
}

// Q3.17

let maths = 50; 
let computers = 80; 
let englishs = 3; 
if (maths > 10 && computers > 20 && englishs > 8) {
    console.log("PASSED!");
} else {
    console.log("FAILED");
}

// Q3.18
let girls = 4;
let boys = 2;
if (girls > boys) {
    console.log('Girls are in majority');
} else if (girls < boys) {
    console.log('Boys are in majority');    
} else {
    console.log('The class has an equal number of girls and boys');        
}

// Q3.19
let costOfApple = 10;
let costOfMango = 15;
if (costOfApple = costOfMango) {
    console.log('Apple and mango cost the same!');
} else if (costOfMango > costOfApple) {
    console.log("Mango is more expensive");
} else {
    console.log("Apple is more expensive");    
}
 
// Q3.20
let mathS = 100;
let englishS = 15;
let computerSkillS = 60;
if (mathS > 50 && englishS > 50 && computerSkillS > 50) {
    console.log('Congratulations! You have passed the TechKaro Admission Test!');
} else if ((mathS > 50 && englishS > 50) || computerSkillS > 80) {
    console.log("You have also qualified!");
} else {
    console.log("Sorry! Please try again next year!");    
}

// Q3.21
let maThs = 100;
let engLish = 15;
let computerSkillSs = 60;
if (
    (maThs > 50 && engLish > 50 && computerSkillSs > 50) || 
    (maThs === 100 || engLish === 100 || computerSkillSs === 100)
) {
    console.log('Congratulations! You have passed the TechKaro Admission Test!');
} else if ((maThs > 50 && engLish > 50) || computerSkillSs > 80) {
    console.log("You have also qualified!");
} else {
    console.log("Sorry! Please try again next year!");    
}