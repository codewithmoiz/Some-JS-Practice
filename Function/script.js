// Task1
// function dateAndTime(){
//     var now = new Date();
//     document.write(`${now}`);
// }
// dateAndTime();

// Task2
// function greetUser(firtsName,lastName){
//     alert(`Hello! ${firtsName} ${lastName}`);
// }
// greetUser(prompt("Enter First Name"),prompt("Enter Last Name"));

// Task3
// function sum(num1,num2){
//     alert(num1+num2);
// }
// sum(+prompt("Enter num1"), +prompt("Enter num2"));

// Task4
// function calc(num1,operator,num2){
//     if(operator === "+") alert(num1+num2)
//     else if(operator === "-") alert(num1-num2);
//     else if(operator === "*") alert(num1*num2);
//     else if(operator === "/") alert(num1/num2);
//     else alert("Error!");
// }
// calc(+prompt("Enter num1"),prompt("Choose your operator:","+,-,*,/"),+prompt("Enter num2"))

// Task5
// function getSquare(val){
//     alert(val**2);
// }
// getSquare(6);

// Task6

// Task7
// function countingOfNums(start,end) {
//   for(var i = start; i <= end; i++){
//     document.write(`${i} </br>`);
//   }  
// };
// countingOfNums(+prompt("Starting number"),+prompt("Ending number"));

// Task8

// Task9
// function rect(height,width){
//     alert(`The Area of Rectange is: ${height*width}`);
// };
// rect(+prompt("Width"),+prompt("Height"));

// Task10
// function checkPalindrome(word){
//     if(word === word.split("").reverse().join("")) alert("It's Palindrome");
//     else alert("It's NOT Palindrome");
// };
// checkPalindrome(prompt("Type a word"));

// Task11
// function capitalize(sent) {
//     sent = sent.split(" ");
//     var capitalizedWords = [];
  
//     for (var i = 0; i < sent.length; i++) {
//       capitalizedWords.push(sent[i].slice(0, 1).toUpperCase() + sent[i].slice(1).toLowerCase());
//     }
//     var result = capitalizedWords.join(" ");
//     document.write(result);
//   }
//   capitalize("the quick brown fox");

// Task12
// function findLongestWord(inputString) {
//     var words = inputString.split(" ");
  
//     var longestWord = "";
//     var longestLength = 0;
  
//     for (var i = 0; i < words.length; i++) {
//       var currentWord = words[i]
  
//       if (currentWord.length > longestLength) {
//         longestWord = currentWord;
//         longestLength = currentWord.length;
//       }
//     }
  
//     return longestWord;
//   }
//   var exampleString = 'Web Development Tutorial';
//   var result = findLongestWord(exampleString);
//   console.log('EXPECTED OUTPUT:', result);
  
// Task13

// Task14
