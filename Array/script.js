// Q1
//  var arr = [];

//  Q2
// var obj = {};

// Q3
// var stringArr = ["Hello", "Bhai", "Kesey", "Ho?"];

// Q4
// var numArr = [2, 4, 6, 8, 10];

// Q5
// var boolean = [true, false, true, false];
// var boolean = [1 != 1];

// Q6
// var mixedArr = [2, 10 < 9, "Hello World!", ["Ali", "Bilal", 10, 7, 10 != 10], 10 > 10, 5];

// Q7
// var qualificationInPakistan = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// for(var i = 0; i < qualificationInPakistan.length; i++){
//     document.write(i+1 + ") " + qualificationInPakistan[i] + "</br>");
// };

// Q8
// var totalMarks = 500;
// var namesArr = ["Micheal", "John", "Tony"];
// var score = [320, 230, 480];

// for (var i = 0; i < namesArr.length; i++) {
//     var percentage = (score[i] / totalMarks) * 100;
//     document.write("Score of " + namesArr[i] + " is " + score[i] + ". " + "Percentage: " + percentage + "%" + "</br>");
//   }

// Q9
// var colors = ["Red", "Green", "Blue", "Purple"];

// function colorPrint(array) {
//   for (var i = 0; i < array.length; i++) {
//     document.write(i + ") " + array[i] + "<br />");
//   }
// }

// function addColorToBeginning(array) {
//   var colorToAddAtBeginning = prompt("Enter a color to add to the beginning of the array:");
//   array.unshift(colorToAddAtBeginning);
// }

// function addColorToEnd(array) {
//   var colorToAddAtEnd = prompt("Enter a color to add to the end of the array:");
//   array.push(colorToAddAtEnd);
// }

// function deleteColor(array) {
//   var colorToDelete = prompt("Enter a color to delete from the array:");
//   var index = array.indexOf(colorToDelete);
//   if (index !== -1) {
//     array.splice(index, 1);
//   }
// }

// addColorToBeginning(colors);

// addColorToEnd(colors);

// deleteColor(colors);

// colorPrint(colors);

// Q10
// var score = [320, 230, 480, 120];
// document.write("Scores of Students: " + score + "</br>");
// document.write("Ordered Scores of Students: " + score.sort());

// Q11
// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// document.write("Cities list:" + "</br>" + cities + "</br>" + "</br>");

// var selectedCities = cities.slice(2, 4);

// document.write("Selected cities list:" + "</br>" + selectedCities);

// Q12
// var arr = ["This ", " is ", " my ", " cat"];
// document.write("Array:" + "</br>" + arr + "</br>" + "</br>");

// var joined = arr.join("");
// document.write("String:" + "</br>" + joined);

// Q13
