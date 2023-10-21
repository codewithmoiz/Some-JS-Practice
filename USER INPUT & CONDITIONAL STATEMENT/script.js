// Task 1
// var cityName = prompt("Enter your city name");

// if(cityName == "Karachi"){
//     alert("Welcome to the city of lights")
// }
// else{
//     alert("Welcome")
// }

// Task 2
// var enterYourGender = prompt("Enter your gender");
// if(enterYourGender == "Male" || enterYourGender == "male"){
//     alert("Good Morning Sir")
// }
// else if(enterYourGender == "Female" || enterYourGender == "female"){
//     alert("Good Morning Ma'am")
// }
// else{
//     alert("Enter a valid gender")
// }

// Task 3
// var trafficLight = prompt("Enter a color of traffic light");
// if(trafficLight == "Red" || trafficLight == "red"){
//     alert("Must Stop")
// }
// else if(trafficLight == "Yellow" || trafficLight == "yellow"){
//     alert("Ready to move")
// }
// else if(trafficLight == "Green" || trafficLight == "green"){
//     alert("Move now")
// }
// else{
//     alert("This isn't a traffic light color")
// }

// Task 4
// var fuel = prompt("Enter remaining fuel in litres");
// if(fuel < 0.25){
//     alert("Please refill the fuel in your car")
// }
// else{
//     alert("Don't need to refill")
// }

// Task 5
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }

// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }

// TAsk 6
// var heading = document.createElement("h1");
// heading.innerHTML = "Mark Sheet";
// document.body.appendChild(heading)

// var totalNumbers = 300;
// var Maths = +prompt("Enter your Maths marks");
// var English = +prompt("Enter your English marks");
// var Urdu = +prompt("Enter your Urdu marks");
// var marks = Maths + English + Urdu;
// var percentage = marks / totalNumbers * 100;

// if(percentage >= 80){
//     var para = document.createElement("p");
//     para.innerHTML = "Total Marks: " + totalNumbers;
//     document.body.appendChild(para)

//     var para2 = document.createElement("p");
//     para2.innerHTML = "Obtained Marks: " + marks;
//     document.body.appendChild(para2)

//     var para3 = document.createElement("p");
//     para3.innerHTML = "Percentage: " + percentage + "%";
//     document.body.appendChild(para3)

//     var para4 = document.createElement("p");
//     para4.innerHTML = "Grade: A-one";
//     document.body.appendChild(para4)

//     var para5 = document.createElement("p");
//     para5.innerHTML = "Remarks: Excellent";
//     document.body.appendChild(para5)
// }

// else if(percentage >= 70){
//     var para = document.createElement("p");
//     para.innerHTML = "Total Marks: " + totalNumbers;
//     document.body.appendChild(para)

//     var para2 = document.createElement("p");
//     para2.innerHTML = "Obtained Marks: " + marks;
//     document.body.appendChild(para2)

//     var para3 = document.createElement("p");
//     para3.innerHTML = "Percentage: " + percentage + "%";
//     document.body.appendChild(para3)

//     var para4 = document.createElement("p");
//     para4.innerHTML = "Grade: A";
//     document.body.appendChild(para4)

//     var para5 = document.createElement("p");
//     para5.innerHTML = "Remarks: Good";
//     document.body.appendChild(para5)
// }

// else if(percentage >= 60){
//     var para = document.createElement("p");
//     para.innerHTML = "Total Marks: " + totalNumbers;
//     document.body.appendChild(para)

//     var para2 = document.createElement("p");
//     para2.innerHTML = "Obtained Marks: " + marks;
//     document.body.appendChild(para2)

//     var para3 = document.createElement("p");
//     para3.innerHTML = "Percentage: " + percentage + "%";
//     document.body.appendChild(para3)

//     var para4 = document.createElement("p");
//     para4.innerHTML = "Grade: B";
//     document.body.appendChild(para4)

//     var para5 = document.createElement("p");
//     para5.innerHTML = "Remarks: You need to improve";
//     document.body.appendChild(para5)
// }

// else if(percentage < 60){
//     var para = document.createElement("p");
//     para.innerHTML = "Total Marks: " + totalNumbers;
//     document.body.appendChild(para)

//     var para2 = document.createElement("p");
//     para2.innerHTML = "Obtained Marks: " + marks;
//     document.body.appendChild(para2)

//     var para3 = document.createElement("p");
//     para3.innerHTML = "Percentage: " + percentage + "%";
//     document.body.appendChild(para3)

//     var para4 = document.createElement("p");
//     para4.innerHTML = "Grade: Fail";
//     document.body.appendChild(para4)

//     var para5 = document.createElement("p");
//     para5.innerHTML = "Remarks: Sorry";
//     document.body.appendChild(para5)
// }

// Task 7
// var number = 7;
// var enterYourNumber = prompt("Guess the correct number between 1 and 10");

// if(enterYourNumber == number){
//     alert("Bingo! Correct answer")
// }
// else if(enterYourNumber == number + 1){
//     alert("Close enough to the correct answer")
// }
// else if(enterYourNumber <= 0 || enterYourNumber > 10){
//     alert("This number isn't between 1 and 10")
// }
// else{
//     alert("That's the wrong number")
// }

// Task 8
// var number = prompt("Enter a number");

// if (number % 3 == 0) {
//   alert('The number ' + number + ' is divisible by 3.');
// } else {
//   alert('The number ' + number + ' is not divisible by 3.');
// }

// Task 9
// var number = prompt("Enter your number");
// if(number % 2 == 0){
//     alert(number + " is even number")
// }
// else{
//     alert(number + " is odd number")
// }

// Task 10
// var temperature = prompt("Enter temperature");

// if (temperature > 40) {
//   alert("It's too hot outside!");
// } else if (temperature > 30) {
//   alert("The weather today is normal.");
// } else if (temperature > 20) {
//   alert("Today's weather is cool.");
// } else if (temperature > 10) {
//   alert("OMG! Today's weather is so cool!");
// } else {
//   alert("It's too much cool!");
// }

// Task 11
// var number1 = +prompt("Enter first value");
// var operator = prompt("Enter opertaor","+, -, *, /")
// var number2 = +prompt("Enter second value");

// if(operator == "+"){
//     alert(number1 + number2)
// }
// else if(operator == "-"){
//     alert(number1 - number2)
// }
// else if(operator == "*"){
//     alert(number1 * number2)
// }
// else if(operator == "/"){
//     alert(number1 / number2)
// }
// else{
//     alert("Something is wrong")
// }