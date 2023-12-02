// Q1
// var randNum = prompt("Enter a Number");
// document.write(`Number: ${randNum} </br>`);
// document.write("Round off value: ", Math.round(randNum) + "</br>", "Floor value: ", Math.floor(randNum) + "</br>", "Ceil value: ",  Math.ceil(randNum));

// Q2
// var randNum = prompt("Enter a Negative decimal value");
// document.write(`Number: ${randNum} </br>`);
// document.write("Round off value: ", Math.round(randNum) + "</br>", "Floor value: ", Math.floor(randNum) + "</br>", "Ceil value: ",  Math.ceil(randNum));

// Q3
// document.write(`The absolute value of -4 is ` + Math.abs(-4));

// Q4
// document.write(`Random dice value: ` + Math.ceil(Math.random()*6));

// Q5
// if(Math.round(Math.random()) == 0){
//     alert("It's HEAD");
// }
// else{
//     alert("It's TAIL");
// }

// Q6
// document.write(`Random number between 1 & 100: ` + Math.round(Math.random()*100));

// Q7
// var weight = prompt("Enter your weight:");
// var spl = weight.split("");
// var numericPart = "";
// var stringPart = "";

// for(var i = 0; i < spl.length; i++){
//     if((spl[i] >= '0' && spl[i] <= '9') || spl[i] === '.'){
//         numericPart += spl[i];
//     } else {
//         stringPart = spl.slice(i).join("");
//         break;
//     }
// }
// document.write(`${numericPart}${stringPart}`);

// Q8
// var inp = prompt("Guess the number:")
// if(inp === Math.ceil(Math.random()*10)){
//     alert("Matched");
// }
// else{
//     alert("NOT Match");
// }