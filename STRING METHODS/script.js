// Q1
// var fName = prompt("Enter your first name");
// var lName = prompt("Enter your last name");
// var fullName = `Hello dear! ${fName} ${lName}`;
// alert(fullName);

// Q2
// var favPhone = prompt("Name your fav phone:");
// document.write("My favorite phone is : ", favPhone + "</br>", "Length of string: ", favPhone.length);

// Q3
// var str = "Pakistani";
// var idx = str.indexOf("n")
// document.write(`String: ${str} </br> Index of 'n': ${idx}`);

// Q4
// var str = "Hello World";
// var idx = str.lastIndexOf("l")
// document.write(`String: ${str} </br> Last Index of 'l': ${idx}`);

// Q5
// var str = "Pakistani";
// var idx = str.charAt(3);
// document.write(`String: ${str} </br> Character at index 3: ${idx}`);

// Q6
// var fName = prompt("Enter your first name");
// var lName = prompt("Enter your last name");
// var fullName = fName.concat(lName);
// alert(fullName);

// Q7
// var city = "Hyderabad";
// document.write(`City: ${city} </br> After replacement: ` + city.replace("Hyder","Islam"));

// Q8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write(message.replaceAll("and","&"));

// Q9
// var num = "472";
// document.write(`Value: ${num} </br> Type: ` + typeof num + `</br>Value : ${num} </br> Type: ` + typeof parseInt(num));

// Q10
// var inp = prompt("Input");
// document.write(`User input: ${inp} </br> Upper case: ` + inp.toUpperCase());

// Q11
// var inp = prompt("Input");
// var conv = inp.slice(0,1).toUpperCase()+inp.slice(1).toLowerCase();
// document.write(`User input: ${inp} </br> Title case: ${conv}`);

// Q12
// var num = 35.36;
// document.write(`Number: ${num} </br> Result: ` + num.toString().replace(".",""))

// Q13
// var userName = prompt("Enter username");
// var syms = ["!",".","@",","];
// var spl = userName.split("");

// for(var i = 0; i < spl.length; i++){
//     if(spl[i] == "@" || spl[i] == "," || spl[i] == "." || spl[i] == "!"){
//         alert("Please enter a valid username");
//     }
// }

// Q14
// var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// var find = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?").toLowerCase();
// var flag = false;

// for(var i = 0; i < arr.length; i++){
//     if(arr[i] == find){
//         // document.write(`${find} is available at index ${i+1} in our bakery`);
//         flag = true;
//         break;
//     }
// }
// if(flag == true){
//     document.write(`${find} is available at index ${i+1} in our bakery`);
// }
// else{
    // document.write(`We are sorry. ${find} isn't available in our bakery`);
// }

// Q15
// var pass = prompt("Set a password");

// Q16
// var arr = "University of Karachi";
// var spl = arr.split("");
// for(var i = 0; i < spl.length; i++){
//     document.write(spl[i] + "</br>")
// }

// Q17
// var userInput = prompt("Enter a string:");

// if (userInput.length > 0) {
//     console.log("Last character:", userInput.charAt(userInput.length - 1));
// } else {
//     console.log("Input is empty.");
// }

// Q18
// var str = "The quick brown fox jumps over the lazy dog."
// var conv = str.toLowerCase().split(" ");
// var counter = 0;
// for(var i = 0; i < conv.length; i++){
//     if(conv[i] === "the"){
//         counter++;
//     }
// }
// document.write(`Text: The quick brown fox jumps over the lazy dog </br> There are ${counter} occurrence(s) of word 'the'`);