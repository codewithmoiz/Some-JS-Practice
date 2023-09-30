// Task 1
// var age = "I am 18 years old";
// alert(age);

// Task 2
// var visitCount = 0;
//         // session share 1 temporary storage hoti Headers, browser ka feature he
//         // getitem se jo visit-count session storage me save he usko get (call) kiya
//         // parseint isliye use kiya qk jo visit count get kiya woh text me tha, parseint ne usko number me convert krdiya
//         // setitem se jo updated visit count tha, number me convert honey aur increment honey k baad wala usko save kiya session storage mein
    

//         // check kar rahey hein k koi visit count session storage me mojood he yaa nahi
//         if (sessionStorage.getItem('visitCount')) {
//             visitCount = parseInt(sessionStorage.getItem('visitCount'));
//         }

//         // Jo bhi visit count he usmein 1 number ka increment kiya
//         visitCount++;

//         // Phir jo updated visit count he (current visit count) usko session storage me save kiya
//         sessionStorage.setItem('visitCount', visitCount);

//         // or phir message k sath visit count ko display (popup) krdiya by using alert
//         alert("You have visited this site " + visitCount + " times.");

// Task 3
// var birthYear = 2005 + " " + "is my birth year";
// alert(birthYear)