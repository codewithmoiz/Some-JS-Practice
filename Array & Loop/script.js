// Task 1
// var arr = [[], [[],[]],[]];

// Task 2
// var arr = [["0123"],["1012"],["2101"]];
// for(var i = 0; i < arr.length; i++){
//     document.write(arr[i] + "</br>");
// }

// Task 3
// for (var i = 1; i <= 10; i++) {
//     document.write(i + "</br>");
// }

// Task 4
// var tableNum = prompt("Enter number for table");
// var endNum = prompt("Enter table length");

// for(var i = 1; i <= endNum; i++){
//     document.write(tableNum + " x " + i + " = " + tableNum*i + "</br>")
// }

// Task 5
// var arr = ["apple", "banana", "mango", "orange", "strawberry"];
// for(var i = 0; i < arr.length; i++){
//     document.write(arr[i] + "</br>");
// }
// for(var i = 0; i < arr.length; i++){
//     document.write("</br>" + "Element at index " + i + " is " + arr[i] + "</br>");
// }

// Task 6
// for(var i = 1; i <= 15; i++){
//     document.write(i + ",");
// }
// for(var i = 10; i >= 1; i--){
//     document.write(i + ",");
// }
// for(var i = 0; i <= 20; i+=2){
//     document.write(i + ",");
// }
// for(var i = 1; i < 20; i+=2){
//     document.write(i + ",");
// }
// for(var i = 2; i <= 20; i+=2){
//     document.write(i + "k,");
// }

// Task 7
// var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// var order = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// var match = "no";

// for(var i = 0; i < arr.length; i++){
//     if(arr[i] == order){
//         match = "yes";
//         break;
//     }
// }
// if(match == "yes"){
//     document.write(order + " is available in our bakery");
// }
// else{
//     document.write(order + " isn't available in our bakery");
// }

// Task 8
// var arr = [24, 53, 78, 91, 12];
// document.write("<h2>" + "Array items: " + arr + "</h2>");

// var smallestNumber = arr[0];

// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] < smallestNumber) {
//     smallestNumber = arr[i];
//   }
// }

// document.write("<h2>" + "The smallest number is: ", smallestNumber + "</h2>");

// Task 9
// var arr = [24, 53, 78, 91, 12];
// document.write("<h2>" + "Array items: " + arr + "</h2>");

// var largestNumber = arr[0];

// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] > largestNumber) {
//     largestNumber = arr[i];
//   }
// }
// document.write("<h2>" + "The largest number is: ", largestNumber + "</h2>");

// Task 10
for(var i = 5; i <= 100; i += 5){
    document.write(i + ", ")
}