// === Chapter # 21-25 and Task # 1

// var fname = prompt("Enter your first name");
// var Lname = prompt("Enter Last name");
// document.write("Welcome to Sayani " + fname + " " + Lname);

// === Chapter # 21-25 and Task # 2

// var mobile = prompt("please enter your favorite mobile phone");
// document.write("My favorite mobile phone is:  " + mobile + "<br>");
// document.write(mobile.length);

// === Chapter # 21-25 and Task # 3

// var str = "Pakistan";
// var a = str.indexOf("n");
// document.write("Index of 'n': " + a);

// === Chapter # 21-25 and Task # 4

// var str = "Hello World";
// var a = str.lastIndexOf("l");
// document.write("Last index of 'l': " + a);

// === Chapter # 21-25 and Task # 5

// var str = "Pakistani";
// var a = str.charAt(3);
// document.write("Character at index 3: " + a);

// === Chapter # 21-25 and Task # 6

// var fname = prompt("Enter first name");
// var lname = prompt("Enter second name");
// var result = fname.concat(lname);
// document.write(result);

// === Chapter # 21-25 and Task # 7

// var str = "Hayderabad";
// var result = str.replace("Hayder", "Islam");
// document.write(result);

// === Chapter # 21-25 and Task # 8

// var message = "Ali and Sami are best friends.They play cricket and foorball together";
// var result = message.replace("and", "&");
// document.write(result);

// === Chapter # 21-25 and Task # 9

// var str = "472";
// var res = str.valueOf();
// console.log(res);
// console.log(typeof '472');
// var check = parseInt('472')
// console.log(check);
// console.log(typeof 472);

// === Chapter # 21-25 and Task # 10

// var input = prompt("Enter input letters");
// var result = input.toLocaleUpperCase();
// document.write(result);

// === Chapter # 21-25 and Task # 11

// var input = prompt("Enter input letters");
// var result = input.totitleCase();
// document.write(result);

// === Chapter # 21-25 and Task # 12

// var a = "35";
// var n = a.toString();
// document.write(n);
// var num = 35.36;
// var result = num.toPrecision();
// document.write(result);

// === Chapter # 21-25 and Task # 13

// var user_input = prompt("Enter user name");
// if(user_input == ["@","_","!"]) {
//     document.write(prompt("You enter invalid username"))
// }
// else{
//     document.write("You enter a valid username");
// }

// === Chapter # 21-25 and Task # 14

// var A = ["cake","applepie","cookie","chips","patties"];
// var b = prompt("Enter favorite food");
// for(var i=0; i<A.length; i++) {
//     if(b==A[i]) {
//         document.write("your element are found in list")
//     }
//     else if(b.toLowerCase()==A[i]){
//         document.write("your element are found in list")
//     }
//     else if(b.toUpperCase()==A[i]){
//         document.write("your element are found in list")
//     }
//     else {
//         document.write("element not found");
//     }
// }

// === Chapter # 21-25 and Task # 15

// var password = prompt("Enter your password");
// if(password === ( /^+$/ ) ) {
//     document.write("you enter a valid password");
// }


// === Chapter # 21-25 and Task # 16

// var university = "University of Karachi";
// var arr = university.split(''); 
// console.log( arr );

// === Chapter # 21-25 and Task # 17

// var user = "pakistan"
// var b = user.slice(7);
// document.write("Last cahracter of input: ", b);

// === Chapter # 21-25 and Task # 18

// var temp = "the quick brown fox jumps over the lazy dog";
// var count = (temp.match(/the/g) || []).length;
// console.log(count);

// === Chapter # 26-30 and Task # 1

// var num = prompt("enter a number");
// var check = Math.round(num);
// document.write("round of value: ", + check + "<br>");
// var check1 = Math.floor(num);
// document.write("floor value: ", + check1);
// var check2 = Math.ceil(num);
// document.write("Ceil value: ", + check2);

// === Chapter # 26-30 and Task # 2

// var number = prompt("Enter a number");
// if(number<0) {
//     var check1 = Math.round(number);
//     document.write("round off value ", + check1);
//     var check2 = Math.floor(number);
//     document.write("floor value ", + check2);
//     var check3 = Math.ceil(number);
//     document.write("floor value ", + check3);
// }

// === Chapter # 26-30 and Task # 3

// var num = Math.abs(-4);
// document.write("Absolute value of -4 is ", num);

// === Chapter # 26-30 and Task # 4

// var diceRoll = Math.floor( Math.random() * 6 ) +1;
// alert('radom dice value ' + diceRoll);

// === Chapter # 26-30 and Task # 5

// var randomCoin = Math.floor( Math.random() * 2 ) +1;
// alert('radom Coin value Head');
// alert('radom Coin value Tail');

// === Chapter # 26-30 and Task # 6

// var x = Math.floor(Math.random() * 100);
// document.write("random number between 1 and 100:", +x);

// === Chapter # 26-30 and Task # 7

// var weight = prompt("Enter your weight");
// var res = parseInt(weight);
// document.write("The weight of user is:  ", + res + "kilograms");

// === Chapter # 26-30 and Task # 8

// var num = parseInt(prompt(" enter a number between 1 and 10"));
// if(num ===3){
//     document.write("congratulation");
// }
// if(num ===4){
//     document.write("congratulation");
// }
// if(num ===8){
//     document.write("congratulation");
// }
// else {
//     document.write("Try again!");
// }

// === Chapter # 31-34 and Task # 1

// var d = new Date();
// document.write(d);

// === Chapter # 31-34 and Task # 2

// const monthNames = ["January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"
// ];
// const d = new Date();
// document.write("The current month is " + monthNames[d.getMonth()]);

// === Chapter # 31-34 and Task # 3

// var str = 'Saturday';
// var strFirstThree = str.substring(0,3);
// console.log(strFirstThree);

// === Chapter # 31-34 and Task # 4

// var day1 = "Saturday";
// var day2 = "Sunday"
// if(day1 == "Saturday" || day2 == "Sunday") {
//     document.write("its fun day");
// }

// === Chapter # 31-34 and Task # 5

// var date = 23;
// if(date<=15) {
//     document.write("First fifteen days of the month");
// }
// else {
//     document.write("Last days of the month");
// }

// === Chapter # 31-34 and Task # 6

// var d = new Date();
// document.write(d + "<br>");
// var res = d.getTime("<br>");
// document.write(res);
// res2 = d.getMinutes();
// document.write(res2);

// === Chapter # 31-34 and Task # 7

// var test = 12;
// if(test<12) {
//     alert("its AM");
// }
// else {
//     alert("its PM");
// }

// === Chapter # 31-34 and Task # 8

// var date = new Date(); 
// date. setDate(0);
// document.write(date);

// === Chapter # 31-34 and Task # 9

// var d = new Date();
// var res = d.setDate(d.getDate() - 56);
// document.write(res);
// const firstDate = new Date(2020, 4, 25);
// const secondDate = new Date(2020, 6, 18);

// const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
// document.write(diffDays);

// === Chapter # 31-34 and Task # 10

// var d = new Date();
// d.setDate(d.getDate() - 100);
// document.write(d);
// var res = d.getSeconds();
// document.write(res);

// === Chapter # 31-34 and Task # 11

// var d = new Date();
// document.write(d);
// var res = d.setTime( d.getTime() - new Date().getTimezoneOffset()*60*60 );
// document.write(res);


// === Chapter # 31-34 and Task # 12

// var d = new Date();
// document.write(d);
// var res = d.setFullYear(1920);
// document.write(res);

// === Chapter # 31-34 and Task # 13

// var dib = new Date(prompt("Enter your date of birth","Dec, 26, 1991"));
// var  dobmili = dob.getTime();
// var today = new Date();
// var todaymili = today.getTime();
// var diff = todaymili-dobmili;
// var accurage = Math.floor(diff/(1000*60*60*24*30*12))
// document.write(accurage); 

// === Chapter # 35-38 and Task # 1

// var now = new Date();
// var theHr = now.getHours();
// var theMin = now.getMinutes();
// alert("time: " + theHr + ":" + theMin);

// === Chapter # 35-38 and Task # 2

// function comb(){
//     alert("Firstname, Lastname");
// }
// comb(Firstname = "Wqas", Lastname = "Khan");

// === Chapter # 35-38 and Task # 3

// function sum(a,b) {
//     var s =  a + b;
//     document.write(s);
// }
// sum(3,7);

// === Chapter # 35-38 and Task # 4


// function sum(num1,num2) {
//     var s =  num1 + num2;
//     document.write(s);
// }
// sum(3,7);
// function pro(num1,num2) {
//     var p =  num1 * num2;
//     document.write(p);
// }
// pro(3,7);
// function diff(num1,num2) {
//     var d =  num1 - num2;
//     document.write(d);
// }
// diff(3,7);

// === Chapter # 35-38 and Task # 5

// fucntion factorial(n){

//     if(n==1){
//         return 1;
//     }   
//     else{ 
//         return n * factorial(n-1);
//     {

// }
// n=int(input("Input a number to compute the factiorial : "))
// print(factorial(n));










 

