// Q1
// var now = new Date();
// document.write(`${now}`);

// Q2
// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var now = new Date().getMonth();
// document.write("Current month: ", months[now]);

// Q3
// var now = new Date().toString().slice(0,3);
// alert(`Today is ${now}`);

// Q4
// var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var now = new Date().getDay();
// alert(`${days[now]}`);
// if(`${days[now]}` == "Saturday" || `${days[now]}` == "Sunday") alert("It's fun day");

// Q5
// var now = new Date().getDate();
// if(now < 16) alert("First fifteen days of the month");
// else alert("Last days of the month.");

// Q6
// var now = new Date();
// document.write(`Current Date: ${now} </br> Elapsed milliseconds since january 1, 1970: ${now.getTime()} </br> Elapsed minutes since january 1, 1970: ${Math.floor(now.getTime() / (60 * 1000))}`);

// Q7
// var now = new Date().getHours();
// if(now < 12) alert("It's AM");
// else alert("It's PM");

// Q8
// var now = new Date("31 Dec 2020");
// alert(now);

// Q9
// var ramadanStartDate = new Date(2015, 5, 18);
// var today = new Date();
// var daysPassed = Math.floor((today - ramadanStartDate) / (1000 * 60 * 60 * 24));
// alert(`Days passed since 1st Ramadan: ${daysPassed}`);

// Q10
// var now = new Date(2015,0,1);
// var ago = new Date(2015,11,5);
// var passed = ago-now;
// document.write(`On reference date ${ago}, </br> ${passed / 1000} seconds had passed since beginning of 2015`);

// Q11
// var current = new Date();
// var now = new Date();
// var later = now.getHours();
// now.setHours(later + 1);
// document.write(`Current date: ${current} </br> 1 hour ago, it was ${now}`)

// Q12
// var current = new Date();
// var now = new Date();
// var later = now.getFullYear();
// now.setFullYear(later - 100);
// document.write(`Current year: ${current} </br> 100 years back, it was ${now}`)

// Q13
// var age = prompt("Enter your age: ");
// var now = new Date();
// var getAge = now.getFullYear() - age;
// document.write(`Your age is ${age} </br> Your birth year was ${getAge}`);

// Q14
// document.write(`<h1>K-Electric Bill</h1>`);
// var name = prompt("Enter your name:");
// var now = new Date();
// var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// var units = Math.round(Math.random()*600*10);
// var charges = Math.round(Math.random()*40);
// var late = 350;
// document.write(`<b>Customer name: </b> ${name} </br> <b>Month: </b> ${months[now.getMonth()]} </br> <b>Number of units: </b> ${units} </br> <b>Charges per unit: </b> ${charges} </br></br> <b>Net Amount Payable (within Due Date): </b> ${units*charges} </br> <b>Late payment surcharge: </b> ${late} </br> <b>Gross Amount Payable (after Due Date): </b> ${(units*charges)+late}`);