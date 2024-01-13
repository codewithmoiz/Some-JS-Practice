// Task1
// function power(a, b) {
//     var result = Math.pow(a, b);
//     return result;
//   }
  
//   var base = 2;
//   var exponent = 3;
//   var result = power(base, exponent);
  
//   console.log(base + " raised to the power of " + exponent + " is: " + result);

// Task2  
//   function isLeapYear(year) {
//     switch (year % 4 && year % 100) {
//         case 0:
//             alert("It's leap year");
//             break;
    
//         default:
//             alert("It's NOT a leap year");
//     };
//   }
//   isLeapYear(parseInt(prompt("Enter a year")));

// Task3

// Task4
// function calculateAverage(subject1, subject2, subject3) {
//     return (subject1 + subject2 + subject3) / 3;
//   }
  
//   function calculatePercentage(subject1, subject2, subject3) {
//     var totalMarks = subject1 + subject2 + subject3;
//     var maximumMarks = 300;
//     return (totalMarks / maximumMarks) * 100;
//   }
  
//   function mainFunction(subject1, subject2, subject3) {
//     var averageMarks = calculateAverage(subject1, subject2, subject3);
//     var percentage = calculatePercentage(subject1, subject2, subject3);
  
//     console.log("Average Marks: " + averageMarks.toFixed(2));
//     console.log("Percentage: " + percentage.toFixed(2) + "%");
//   }
  
//   var marksSubject1 = parseInt(prompt("Enter Marks"));
//   var marksSubject2 = parseInt(prompt("Enter Marks"));
//   var marksSubject3 = parseInt(prompt("Enter Marks"));
  
//   mainFunction(marksSubject1, marksSubject2, marksSubject3);
  
// Task5
// function customIndexOf(str, character) {
//     var spl = str.split("");
//     var i = 0;
//     while (i < spl.length) {
//       switch (spl[i]) {
//         case character:
//           alert("The index of '" + character + "' in the string is: " + i);
//           return;
//         default:
//           break;
//       }
//       i++;
//     }
//     alert("The character '" + character + "' is not found in the string.");
//   }
  
//   customIndexOf(prompt("Enter a string"), prompt("Enter a character to find")); 

// Task6
// function deletingVowels(str) {
//     var spl = str.toLowerCase().split("");
//     var arr = ["a", "e", "i", "o", "u"];
//     var result = "";
  
//     if (spl.length > 25) {
//       alert("It shouldn't be more than 25 characters");
//     } else {
//       var i = 0;
//       while (i < spl.length) {
//         if (!arr.includes(spl[i])) {
//           result += spl[i];
//         }
//         i++;
//       }
  
//       alert(`Result after deleting the vowels: ${result}`);
//     }
//   }
  
//   deletingVowels(prompt("Enter a string (should be under 25 characters):"));
  
// Task7
// function countSuccessiveVowels(text) {
//     var vowels = ["a", "e", "i", "o", "u"];
//     var count = 0;
//     text = text.toLowerCase();
  
//     var i = 0;
//     while (i < text.length - 1) {
//       var currentChar = text[i];
//       var nextChar = text[i + 1];
  
//       switch (true) {
//         case vowels.includes(currentChar) && vowels.includes(nextChar):
//           count++;
//           break;
//         default:
//           break;
//       }
  
//       i++;
//     }
  
//     return count;
//   }
  
//   var sentence = "in the sentence";
//   var result = countSuccessiveVowels(sentence);
//   console.log("Number of occurrences of any two vowels in succession: " + result);
  
// Task8
// function convertToMeters(kilometers) {
//     return kilometers * 1000;
//   }
  
//   function convertToFeet(kilometers) {
//     return kilometers * 3280.84;
//   }
  
//   function convertToInches(kilometers) {
//     return kilometers * 39370.1;
//   }
  
//   function convertToCentimeters(kilometers) {
//     return kilometers * 100000;
//   }
  
//   function printDistanceConversions(kilometers) {
//     console.log("Distance in Meters: " + convertToMeters(kilometers) + " meters");
//     console.log("Distance in Feet: " + convertToFeet(kilometers) + " feet");
//     console.log("Distance in Inches: " + convertToInches(kilometers) + " inches");
//     console.log("Distance in Centimeters: " + convertToCentimeters(kilometers) + " centimeters");
//   }
  
//   var distanceInKilometers = parseFloat(prompt("Enter the distance between two cities in kilometers:"));
//   printDistanceConversions(distanceInKilometers);
  
// Task9
// function calculateOvertimePay(hoursWorked) {
//     var standardHours = 40;
//     var overtimeRate = 12.00;
  
//     if (hoursWorked > standardHours) {
//       var overtimeHours = hoursWorked - standardHours;
//       var overtimePay = overtimeHours * overtimeRate;
//       return overtimePay;
//     } else {
//       return 0;
//     }
//   }
  
//   var hoursWorked = parseFloat(prompt("Enter the number of hours worked by the employee:"));
//   var overtimePay = calculateOvertimePay(hoursWorked);
  
//   console.log("Overtime Pay: Rs. " + overtimePay);
  
//   Task10
  