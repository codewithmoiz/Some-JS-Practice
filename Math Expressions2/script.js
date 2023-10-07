// Task 1
// var a = 10;
// var heading = document.createElement('h1');
// heading.innerHTML = "Result:";
// document.body.appendChild(heading);

// var paragraph1 = document.createElement('p');
// paragraph1.innerHTML = "The value of a is: 10";
// document.body.appendChild(paragraph1);

// var paragraph2 = document.createElement('p');
// paragraph2.innerHTML = "....................................................";
// document.body.appendChild(paragraph2);

// ++a;
// var paragraph3 = document.createElement('p');
// paragraph3.innerHTML = "The value of ++a is: "+a;
// document.body.appendChild(paragraph3);

// var paragraph4 = document.createElement('p');
// paragraph4.innerHTML = "Now the value of a is: "+a;
// document.body.appendChild(paragraph4);

// var paragraph5 = document.createElement('p');
// paragraph5.innerHTML = "The value of a++ is: "+a;
// document.body.appendChild(paragraph5);

// a++;
// var paragraph6 = document.createElement('p');
// paragraph6.innerHTML = "Now the value of a is: "+a;
// document.body.appendChild(paragraph6);

// --a;
// var paragraph7 = document.createElement('p');
// paragraph7.innerHTML = "The value of --a is: "+a;
// document.body.appendChild(paragraph7);

// var paragraph8 = document.createElement('p');
// paragraph8.innerHTML = "Now the value of a is: "+a;
// document.body.appendChild(paragraph8);

// var paragraph9 = document.createElement('p');
// paragraph9.innerHTML = "The value of a-- is: "+a;
// document.body.appendChild(paragraph9);

// a--;
// var paragraph10 = document.createElement('p');
// paragraph10.innerHTML = "Now the value of a is: "+a;
// document.body.appendChild(paragraph10);

// Task 2
// var a = 2, b = 1;

// document.write("a is "+a)
// var paragraph = document.createElement('p');
// paragraph.innerText = "b is "+b;
// document.body.appendChild(paragraph);

// var result = --a - --b + ++b + b--;
// var paragraph1 = document.createElement('p');
// paragraph1.innerText = "Result is "+result;
// document.body.appendChild(paragraph1);

// Task 3
// var heading = document.createElement('h1');
// heading.innerHTML = "Welcome!";
// document.body.appendChild(heading);

// document.write("Enter Your Name: ")
// input = document.createElement('input');
// document.body.appendChild(input);

// var lineBreak = document.createElement('br');
// document.body.appendChild(lineBreak);

// var lineBreak = document.createElement('br');
// document.body.appendChild(lineBreak);

// document.write("Enter Your Email: ")
// input2 = document.createElement('input');
// document.body.appendChild(input2);

// Task 4
// var userNumber = prompt("Enter a number (default is 5):") || 5;

// userNumber = parseInt(userNumber);

// var container = document.createElement("div");
// document.body.appendChild(container);

// var header = document.createElement("h1");
// header.textContent = "Multiplication Table for " + userNumber;
// container.appendChild(header);

// var ul = document.createElement("ul");
// container.appendChild(ul);

// for (var i = 1; i <= 10; i++) {
//     var result = userNumber * i;
//     var listItem = document.createElement("li");
//     listItem.textContent = userNumber + " x " + i + " = " + result;
//     ul.appendChild(listItem);
// }

// Task 5
// var subject1 = prompt("Enter the name of subject 1:");
// var subject2 = prompt("Enter the name of subject 2:");
// var subject3 = prompt("Enter the name of subject 3:");

// var totalMarks = 100;

// var obtainedMarks1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));
// var obtainedMarks2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
// var obtainedMarks3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));

// var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
// var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

// document.write("<h1>Result</h1>");
// document.write("<table>");
// document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
// document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>");
// document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>");
// document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>");
// document.write("<tr><th>Total</th><td>" + (totalMarks * 3) + "</td><td>" + totalObtainedMarks + "</td></tr>");
// document.write("<tr><th>Percentage</th><td colspan='2'>" + percentage.toFixed(2) + "%</td></tr>");
// document.write("</table>");
