/*console.log(`aditya`);
console.log(`i like pizza`);

window.alert(`this is an alert`);
window.alert(`i like pizza`);


//this in an comment



thi is an multi line comment
*/



// document.getElementById("myH1").textContent=`Hello`;
// document.getElementById("myP").textContent=`i like pizza`


//variable = a container that stores the value.
//             Behaves as if it were the value it contains.

//1.>     Declaration     let x;
//2.>     Assignment      x = 100;


// let x;
// x=100;

// let y=100;

// let price =10.99;

// let gpa= 3.3;
// let age=25;


// console.log(`you are ${age} yers old`);
// console.log(`the price is ${price}`)
// console.log(`your gpa is:${gpa}`);


// let firstName ="Aditya";
// let food="dahi";
// let email= "aditya@gmail.com";
// console.log(typeof firstName);
// console.log(`your name is : ${firstName}`);
// console.log(`you like : ${food}` );
// console.log(`you email is :${email}`)


// let online =true;
// let forgen =false;

// console.log(`you are online ${online}`);
// console.log(`are you a men: ${online}`);
// console.log(`are you women: ${forgen}`);





// let fullName = "Aditya kumar"
// let age = 25;
// let iStatus = true;

// document.getElementById("P1").textContent = `your name is: ${fullName}`;
// document.getElementById("P2").textContent = `your age is: ${age}`;
// document.getElementById("P3").textContent = ` you ar in your college : ${iStatus}`;




// let students = 10;

// console.log(students);
// // students =students+10;
// // students= students-2;
// // students= students*2;
// // students= students/29;
// // students= students%29;
// // students = students ** 2;


// // augmented assiment opretors

// // students+=4
// // students-=3
// // students*=2;
// // students/=2;
// // students**=2;
// // students %=2;

// // students--;
// // students++;

// console.log(students);



/*

     Operator Precedence
     1. parenthesis ()
     2. exponents
     3. multiplication & division & modulo
     4.addition $ subtraction

*/


// let result = 1 + 2 * 3 + 16;

// let result2 = 12 %5 * 6 + 3;

// let result3 = 6 /2 **(2 + 5);


// console.log(result);
// console.log(result2);
// console.log(result3);


// user input


// 1.> EASY EAY - WINDOW PROMT
// let username;

// username = window.prompt("whats you user name");
// console.log(username);


//2.> PROFESSIONAL WAY = HTML textbox

// let username;
// document.getElementById("mySubmit").onclick = function () {
//      username = document.getElementById("myText").value;
//      document.getElementById("myH1").textContent=`Hello ${username}`;
// }



//type convertion =  change the datatype of a value to another
//                            (strings,number,booleans)

// let age= window.prompt("How old are you");
// console.log(typeof(age));
// age=Number(age);

// age+=1;
// console.log(age);
// console.log(typeof(age));



// let x = "pizza";
// let y = "pizza";
// let z = "pizza";

// // let x = "0";
// // let y = "0";
// // let z = "0";

// // let x ;
// // let y = "";
// // let z = "";

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(typeof (x),x);
// console.log(typeof (y),y);
// console.log(typeof (z),z);



//const = a variable that can't be changed

// const PI =3.14159;  // upper case declaration only for number sna bool not srtring
// let radius;
// // PI=4324;
// let circum;

// radius=window.prompt("what is the radius :");
// radius=Number(radius);
// circum=(2*PI)*radius;
// console.log(`the circumference of circle with ${radius} is :` ,circum);





// const PI = 3.14159
// let radius;
// let circum;

// document.getElementById("myButton").onclick = function () {
//      radius = document.getElementById("myText").value;
//      radius = Number(radius);
//      circum = (2 * PI) * radius;

//      document.getElementById("myH3").textContent = "radius:" + circum;

//      console.log(`the circumference of circle with ${radius} is :`, circum);
// }




// Math  = built in object that provides a collection of properties an methods

// Math.PI
// // console.log(Math.PI)
// let y=2;
// let x=Math.PI;


// // z=Math.round(x);
// // z=Math.floor(x);
// // z=Math.ceil(x);
// // z=Math.pow(x,y);
// // z=Math.sqrt(9);
// // z=Math.log(10);


// // z=Math.sin(45);
// //z=Math.cos(45)
// // z=Math.tan(45);

// // z=Math.abs(-23);

// let max = Math.max(x,y,20);
// let z= max;
// console.log(z);



//RANDOM NUMBER GENTERATOR

// let ran=Math.random();

// const min=50;
// const max=100;

// let ran=Math.floor( Math.random()*(max-min)) +min;

// console.log(ran);






// IF STATEMENTS = IF A CONDITION IS TRUE ,EXECUTE THE FOLLOWING CODE
//   IF NOT , DO SOMETHING ELSE

// let time =23;
//  if (time<12) {
//      console.log("good morning !")
//  }
//  else if(time<16){
//      console.log("good after noon")
//  }
//  else{
//      console.log("good night")
//  }


// let isStudent= false;

// if (isStudent) {
//      console.log("you are a student")
// }
// else{
//      console.log("you  not a student")
// }


// let age = 23;

// let hasLicense = true;

// if (age >= 18) {

//      console.log("you are allowed to have license")
//      if (hasLicense) {
//           console.log("aproved")
//      }
//      else {
//           console.log("fined")
//      }
// }
// else {
//      console.log("you must be above 18 to get a license")
// }


// const myText = document.getElementById("myText");
// const mySubmit = document.getElementById("mySubmit");
// const resultElement = document.getElementById("resultEle");
// let age = 0;


// mySubmit.onclick = function () {
//      age = myText.value;
//      age = Number(age);

//      if (age >= 100) {
//           resultElement.textContent = "you are too OLD to enter this site!!";
//      }
//      else if (age == 0) {
//           resultElement.textContent = "you can't enter too were just born!!";
//      }
//      else if (age >= 18) {
//           resultElement.textContent = "you are old enough to enter!!";
//      }
//      else if (age < 0) {
//           resultElement.textContent = "your age can't be below zero!!";
//      }
//      else {
//           resultElement.textContent = "you must be above 18 to enter this site";
//      }

// }



// const myCheckbox = document.getElementById("myCheckbox");
// const visaBtn = document.getElementById("visaBtn")
// const masterCard = document.getElementById("masterCard");
// const paypalBtn = document.getElementById("paypalBtn");
// const mySubmit = document.getElementById("mySubmit");

// const subResult = document.getElementById("subResult");
// const paymentResult = document.getElementById("paymentResult");

// mySubmit.onclick = function () {
//      if (myCheckbox.checked) {
//           subResult.textContent = 'You are subscribed';
//      }
//      else {
//           subResult.textContent = 'You are not subscribed';
//      }

//      if (visaBtn.checked) {
//           paymentResult.textContent = 'You are paying with VISA';
//      }
//      else if (masterCard.checked) {
//           paymentResult.textContent = 'You are paying with MASTER CARD';
//      }
//      else if (paypalBtn.checked) {
//           paymentResult.textContent = 'You are paying with PAYPAL';
//      }
//      else  {
//           paymentResult.textContent = 'You are need to select an OPTION';
//      }
// }



// ternary oprator = a shortcut to if{} an and else{} statements to assign  a variable based on a condition

//   condition ? CodIfTrue : CodeIfFalse

// let age = 23;

// let message = age >= 18 ? "you are an adult" : "you are nopt an adult"

// console.log(message)


// let isStudent=false;

// let message = isStudent ? "student" : " note a student";
// console.log(message)



// SWITCH = can be an efficient replacement of to many else if statements

// let day = 7;

// switch (day) {


//      case 1:
//           {
//                console.log("it is Monday");
//                break;  //
//           }
//      case 2:
//           {
//                console.log("it is Tuesday");
//                break;
//           }
//      case 3:
//           {
//                console.log("it is Wednesday");
//                break;
//           }
//      case 4:
//           {
//                console.log("it is Thursday");
//                break;
//           }
//      case 5:
//           {
//                console.log("it is Friday");
//                break;
//           }
//      case 6:
//           {
//                console.log("it is Saturday");
//                break;
//           }
//      case 7:
//           {
//                console.log("it is Sunday");
//                break;
//           }
//      default:
//           {
//                console.log("enter valid number");
//                break;
//           }

// }



// let testScore = 92;
// let letterGrade;

// switch (true) {
//      case testScore >= 90:
//           letterGrade = "A";
//           break;
//      case testScore >= 70:
//           letterGrade = "B";
//           break;
//      case testScore >= 60:
//           letterGrade = "B";
//           break;
//      case testScore >= 50:
//           letterGrade = "D";
//           break;
//      case testScore >= 30:
//           letterGrade = "E";
//           break;
//      default:
//           letterGrade = "F";
//           break;
// }

// console.log(letterGrade);





//STRING METHODS = allow you to manipulate and work with text (strings)

// let userName = "    aditya   ";

// console.log(userName.charAt(0));  //to get a letter at that index

// console.log(userName.lastIndexOf("a"));  //to get the last index of the given letter in string

// console.log(userName.indexOf("t"));  // to get the first index of the given string

// console.log(userName.length);   //top get the length of the string also adds the spaces

// console.log(userName.trim());  //to  remove the space at start and end

// console.log(userName.trimEnd());   // to remove the space at end only

// console.log(userName.trimStart());  // to remove the space at the start only


// console.log(userName.toLocaleLowerCase());  //to make lower case

// console.log(userName.toLocaleUpperCase());  // to upper case

// console.log(userName.repeat(4));  // to repeat the string

// let result = userName.startsWith("  ");    //true and false

// if (result) {
//      console.log("your user name can't begin with space ")
// }


// let result = userName.includes("d");

// if (result) {
//      console.log("yes")

// }
// else
// {
//      console.log("no")
// }

// let phoneNumber= "3432-232-232";

// // phoneNumber=phoneNumber.replaceAll("-" ,"");  //to replace the char with anything else
// phoneNumber=phoneNumber.padStart(15,"0");   //to add the values at the start of the string and incr it to desired length
// phoneNumber=phoneNumber.padEnd(20,"0");  // tyo add the the end


// console.log(phoneNumber);



//STRING SLICING = creating a substring from a portion of another string

//                       string.slice(start,end)


// const fullName="aditya kumar";

// let firstName= fullName.slice(0,6);
// console.log(firstName);

// let lastName= fullName.slice(7);
// console.log(lastName);


// let firstChar= fullName.slice(0,1);
// let lastChar=fullName.slice(-1/*or we can use nor mal number but in negative the srting itration start from end and  -1 is the start and as we decrese the char move to left  */);
// console.log(firstChar);
// console.log(lastChar);

// let firstName =fullName.slice(0,fullName.indexOf(" "));  // this way we calculate it by finding the index of " " space.
// console.log(firstName)

// let lastName=fullName.slice(fullName.indexOf(" ")+1);
// console.log(lastName);



// const email="adity122@gmail.com"

// let userName = email.slice(0,email.indexOf("@"));
// let extension = email.slice(email.indexOf("@")+1);
// console.log(userName);
// console.log(extension)



// METHOD CHAINING = Calling one method after another is one continuous line of the code

//      let username=window.prompt("Enter your your username");


// // -------------- NO METHOD CHAINING ----------
//      // username=username.trim();
//      // let letter=username.charAt(0);
//      // letter=letter.toLocaleUpperCase();

//      // let extraChars=username.slice(1);
//      // extraChars=extraChars.toLocaleLowerCase();
//      // username=letter+extraChars;

//      // console.log(username);



// //------------- METHOD CHAINING------------------
// username=username.trim().charAt(0).toLocaleUpperCase()+username.trim().slice(1).toLocaleLowerCase();

// console.log(username);




//  LOGICAL OPERATORS =used to combine oer manipulate boolean values
// (true or false)
//
//                               AND  =   &&
//                               OR   =   ||
//                               NOT  =   !

// const temp=-28;

// if (temp>0 && temp<=30) {
//      console.log("Wether is good");
// }
// else
// {
//      console.log("the wether is not good")
// }

// const isSunny = false;
// if(!isSunny)
// {
//      console.log("it is cloudy")
// }
// else{
//      console.log("it is sunny");
// }


//   =         assignment operator
//   ==        comparison operator (compare if value are equal)
//   ===       strict equality operator (compare if values & datatype are equal)
//   !=        inequality operator
//   !==       strict inequality operator

// const PI="3.14";

// if (PI==="3.14") {
//      console.log("this is a PI");
// }
// else{
//      console.log("this is not PI")
// }






//   WHILE LOOP  = repeat some code WHILE some condition is true


// let username = "";

// while (username === "") {
//      console.log("heloo!");
//      break;
// }
// console.log("aditya")



// let loggedIn = false;
// let username;
// let pass;

// while (!loggedIn) {
//      username = window.prompt(`Enter your user name`);
//      pass = window.prompt(`Enter your password`);

//      if (username === "aditya" && pass === "123") {
//           loggedIn = true;
//           console.log("you are looged In ! ");

//      }
//      else {
//                //    loggedIn = true;
//           console.log(" Invalid entry ! ")
//      }
// }






//    FOR LOOP  = repeat some code a LIMITED amount of times

// for (let i = 1; i <= 10; i+=2) {
//     console.log("aditya "+i) ;
// }

// for (let j = 11; j >=1; j-=2) {
//      console.log("aditya"+j);

// }


// for (let i = 1; i <= 20; i++) {
//      if (i == 13) {
//           continue;
//      }
//      else if(i==15)
//      {
//           break;
//      }
//      else {
//           console.log(i);
//      }

// }











// const minNum = 1;
// const maxNum = 100;

// const answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

// let attempt = 0;
// let guess;
// let running = true;

// while (running) {
//      guess = window.prompt(`Guess a number between ${minNum} to ${maxNum}`);
//      guess = Number(guess);
//      if (isNaN(guess)) {
//           window.alert("please enter a valid number");

//      }
//      else if (guess < minNum || guess > maxNum) {
//           window.alert("please be in the range");
//      }

//      else {
//           attempt++;
//           if (guess < answer) {
//                window.alert("too low try again");
//           }
//           else if (guess > answer) {
//                window.alert("too high try again");
//           }
//           else {
//                window.alert(`CORRECT ! the answer was ${answer} it took you ${attempt} to get right `);
//                running = false;
//           }
//      }
// }






//   FUNCTION  = A section of reusable code .
//             Declare code once , use it whenever you wont .
//             Call the function  to execute that code.


// function happyBirthday(username, age) {

//      console.log("happy birthday to you ");
//      console.log("happy birthday to you  to you ");
//      console.log(`happy birthday to you dear ${username}`);
//      console.log(`you are ${age} years old`)
//      console.log("happy birthday to you ");

// }

// happyBirthday("aditya", 25);

// happyBirthday("spongebob", 35);

// happyBirthday("patrick", 45);




// function add(x,y)
// {
//      let result = x+y;
// return result;
// }

// function sub(x,y)
// {
// return x-y;
// }

// function div(x,y)
// {
// return x/y;
// }

// function mul(x,y)
// {
// return x*y;
// }

// let ans=add(2,3);

// console.log(ans)
// console.log(sub(3,5));
// console.log(div(3,5));
// console.log(mul(3,5));



// function isEven(number)
// {
//      if (number%2===0) {
//           return true;
//      }
//      else{
//           return false;
//      }
// }

// console.log(isEven(4))




// function isVAlidEmail(email) {

//      // if (email.includes("@")) {
//      //      return true;
//      // }
//      // else {
//      //      return false;
//      // }

//      return email.includes("@") ? true : false
// }

// console.log(isVAlidEmail("brogmail.com"));


// console.log(isVAlidEmail("emailmusk@gmail.com"));


// console.log(isVAlidEmail("brog@mail.com"));







//   VARIABLE SCOPE = where a variable is recognized and accessible (local or global)


// function fun1()
// {
//      let x=34;
//      console.log(x);
// }

// function fun2()
// {
//      let x=33424;
//      console.log(x);
// }


// fun1();
// fun2();





//   ARRAY = a variable like structure that can hold more then one value

// let fruits = ["apple", "orange", "banana"];

// fruits[0] = "cocnut";


// fruits.push("pineapple");
// console.log(fruits);
// fruits.push("cocnut");
// console.log(fruits);
// fruits.pop();

// fruits.unshift("mango");
// console.log(fruits)
// fruits.shift();

// console.log(fruits);



// let numOfFruits = fruits.length;

// console.log(numOfFruits)

// let index = fruits.indexOf("orange")

// console.log(index);  //if index is -1 it means elements does not exit


// // for (let i = 0; i < fruits.length; i++) {
// //      console.log(fruits[i]);
// // }

// // for (let i = fruits.length - 1; i >= 0; i--) {
// //      console.log(fruits[i]);
// // }

// fruits.sort().reverse();

// for (let fruit of fruits) {
//      console.log(fruit);
// }








// SPREAD OPERATOR =   ...   allows an iterable such as an array or string to be expanded int separate elements (unpacks the element)


// let numbers=[1,2,3,4];

// // let maxi=Math.max(numbers) //gives NaN can;t use it get max like this

// let maxi = Math.max(...numbers);    // here spread operator spead or separate each elemt in the array in its own variable to use .
// console.log(maxi);
// let mini=Math.min(...numbers);
// console.log(mini);

// console.log(numbers);





// let username ="aditya";
// console.log(...username);

// // let letter =[...username];
// let letters=[...username].join("-");
// console.log(letters);


// let fruits= ["apple","orange","banana"];
// let vegetable=["colliflower","potato","eggplant"]
// let food=[...fruits,...vegetable,"egg","milk"];

// console.log(food);







//   REST PARAMETERV =(...rest) allows a function to work with  a variable number of arguments by bundling them into an array

// spread = expands an array into separate elements
// rest   = bundles separate elements into an array


// function openfridge(...foods){
//      console.log(foods)
//      console.log(...foods);
// }

// function getfood(...foods)
// {
//      return foods
// }

// const food1="pizza";

// const food2="hamburger";

// const food3="cake";

// const food4="donut";

// const food5="maggi";

// const food6="eggroll";


// openfridge(food1,food2,food3,food4,food5,food6);


// const foods=getfood(food1,food2,food3,food4,food5,food6);
// console.log(foods);


// function sum(...numbers)
// {
//      let result=0;
//      for (let number of numbers){
//           result+=number;
//      }
//      return result
// }


// console.log(sum(2,3,4,5,6,1,2,3,4,5,2));

// function Avg(...numbers)
// {
//      let result=0;
//      for (let number of numbers){
//           result+=number;
//      }
//      return result/numbers.length;
// }


// console.log(Avg(10,10,10,10));

// function combineString(...string) {
//      return string.join(" ");
// }

// const fullName = combineString("Mr.", "aditya", "kumar");

// console.log(fullName);






//   CALLBACK = a function that is passed as an argument
//              to another function

//        used to handle asynchronous operations:
//               1.Reading a file
//               2.Network requests
//               3.Interacting with databases


// hello(wait);

// function hello(callbackFunc)
// {
//      console.log("hello");
//      callbackFunc();
// }


// function leave(){
//      console.log("leave!!")
// }

// function wait(){
//      console.log("wait!")
// }


// function goodbye(){
//      console.log("goodbye!!")
// }


// sum(displayPage, 4, 5);


// function sum(callback, x, y) {
//      let result = x + y;
//      callback(result);
// }

// function displayConsole(result) {
//      console.log(result);
// }


// function displayPage(result) {
//      document.getElementById("myH1").textContent = result;
// }








//        FOREACH() =    method used to iterate over the elements of an array and apply a specified function (callback) to each element

//                  array.foreach(callback);
//                  element, index, array are provided in backend


// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];


// numbers.forEach(cube);
// numbers.forEach(display);

// function double(element, index, array) {
//      array[index] = element * 2;

// }

// function triple(element, index, array) {
//      array[index] = element * 3;

// }

// function sqrt(element, index, array) {
//      array[index] = Math.pow(element, 2);
// }

// function cube(element, index, array) {
//      array[index] = Math.pow(element, 3);
// }


// function display(element) {
//      console.log(element);
// }






//        .map() = accepts a callback and applies that function to each
//                  element of an array,then return a new array


// const numbers = [1, 2, 3, 4, 5];

// const squares = numbers.map(square);

// console.log(squares);

// function square(element) {
//      return Math.pow(element, 2);
// }

// const cubes = numbers.map(cube);

// console.log(cubes);
// function cube(element) {
//      return Math.pow(element, 3);
// }

// const dates =["2026-1-10","2023-1-11","2022-1-12"];

// function formatDates(element) {
//      const parts=element.split("-");
//      return `${parts[1]}/${parts[2]}/${parts[0]}/`;
// }

// const formattedDates=dates.map(formatDates);

// console.log(formattedDates);









//   .filter() =  creates a new array by filtering
//                out elements

// let number=[1,2,3,4,5,6,7,8,9,0];

// function isEvens(num){
//      return num%2===0;
// }
// function isOdd(num){
//      return num%2!==0;
// }

// let oddArray=number.filter(isOdd);
// let evenArray=number.filter(isEvens);
// console.log(evenArray);

// console.log(oddArray);

// const age =[12,34,13,54,24,33,13,12,53,73];

// function isAdult(element){
//      return element>=18;
// }

// function isChild(element){
//      return element<18;
// }
// const adults=age.filter(isAdult);
// console.log(adults);

// const child=age.filter(isChild);
// console.log(child);



// const words = ["apple", "orange", "banana", "kiwi",
//      "pomogranate", "coconut"];

// function ShortWords(element) {
//      return element.length <= 6;
// }

// function LongWords(element) {
//      return element.length > 6;
// }


// const short = words.filter(ShortWords);
// console.log(short);

// const long = words.filter(LongWords);
// console.log(long);











//   .reduce() =  reduce the elements of an array
//                to a single value.

// const price=[3,4,5,67,23,6,2];

// function total(acc,element){
//      return acc+element;
// }

// const TotalPrice=price.reduce(total)
// console.log(TotalPrice);

// const grades =[3,45,67,67,98,88,100,78,22]

// function getMax(acc,ele){
//      return Math.max(acc,ele);
// }

// function getMin(acc,ele){
//      return Math.min(acc,ele);
// }


// const min=grades.reduce(getMin);
// const max=grades.reduce(getMax);

// console.log(min+" AND " + max);







//   function declaration = define a reusable block of
//                          code that performs a specific
//                          task.

//   function expression = a way to define function as
//                         values or variables.


// setTimeout(function () {
//      console.log("hello")
// }, 3000);

//  const numbers=[1,2,3,4,5,6,7];

// const square=numbers.map(function(element){
//      return Math.pow(element,2);
// });

// console.log(square);


// const cube=numbers.map(function(element){
//      return Math.pow(element,3);
// });

// console.log(cube);


// const evenNum=numbers.filter(function(element){
//      return element%2===0;
// });

// console.log(evenNum);

// const oddNum=numbers.filter(function(element){
//      return element%2!==0;
// });

// console.log(oddNum);


// const total=numbers.reduce(function(acc,element){
//      return acc+element;
// });

// console.log(total);











// arrow function = a concise way to write a function
//                  expressions good for simple function
//                  that you only use once
//                  (parameters) =>{some code};


// function hello(){
//      console.log("hello");
// }
// hello();

// const hello=function(){
//      console.log("hello word");
// };
// hello();

// const hello=(name)=> console.log(`hello ${name}`);
// hello("aditya");

// const hello = (name, age) => {
//      console.log(`hello ${name}`);
//      console.log(`your age is ${age}`);
// };
// hello("aditya", 23);

// number = [1, 2, 3, 4, 5, 6, 7, 8];

// const square = number.map((Element) =>
//      Math.pow(Element, 2)
// );
// console.log(square);

// const cubes=number.map((element)=>Math.pow(element,3));
// console.log(cubes);

// const evenNum=number.filter((element)=>element%2===0);
// console.log(evenNum);

// const oddNum=number.filter((element)=>element%2!==0);
// console.log(oddNum);

// const total=number.reduce((acc,ele)=>acc+ele);
// console.log(total);









//   objects = A collection of related properties and/or
//             methods.
//   Can represent real world objects (people , products,
//   places)
//   object = {
//             key:value,
//            function()
//              }


// const person1 = {
//      firsName: "Spongebob",
//      lastName: "Squarepants",
//      age: 30,
//      isEmployed: true,
//      sayHello: function () {
//           console.log(`HI! I am Spongebob Squarepants`)
//      },
//      eat: () => { console.log(`I am eating Krabby Patty`); }

// }
// console.log(person1);
// console.log(person1.firsName);
// console.log(person1.lastName);
// console.log(person1.age);
// console.log(person1.isEmployed);
// person1.sayHello();
// person1.eat();

// console.log("\n")

// const person2 = {
//      firsName: "Patrick",
//      lastName: "Star",
//      age: 42,
//      isEmployed: false,
//      sayHello: function () {
//           console.log(`HI! I am ${this.firsName} ${this.lastName}`)
//      },
//      eat: () => { console.log(`I am eating Chiken and Pizza`); }

// }

// console.log(person2);
// console.log(person2.firsName);
// console.log(person2.lastName);
// console.log(person2.age);
// console.log(person2.isEmployed);
// person2.sayHello();
// person2.eat();







//   this = reference to the object where THIS is used
//          (the object depends on the immediate
//            context. )
//        person.name = this.name

// const person1 = {
//      firsName: "Spongebob",
//      lastName: "Squarepants",
//      favFood: "hamburgers",
//      age: 30,
//      isEmployed: true,
//      sayHello: function () {
//           console.log(`HI! I am ${this.firsName} ${this.lastName}`)
//      },
//      eat: function(){
//           console.log(`I love ${this.favFood}`);
//      }
// }


// person1.sayHello();
// person1.eat();







//   constructor = special method for defining the
//                 properties and methods of objects.

// function Car(make,model,year,color)
// {
//      this.make=make,
//      this.model=model,
//      this.year=year,
//      this.color=color
//      this.drive=function(){
//           console.log(`Your drive the ${this.model}`);
//      }
// }


// const car1=new Car("ford","mustang",2024,"black");

// console.log(car1);
// console.log(car1.make);
// console.log(car1.model);
// console.log(car1.year);
// console.log(car1.color);
// console.log("\n")

// const car2= new Car("chevrolet","camaro",1978,"red");

// console.log(car2);
// console.log(car2.make);
// console.log(car2.model);
// console.log(car2.year);
// console.log(car2.color);



// car1.drive();
// car2.drive();




//   class = (ES6 feature) provides a more structured and cleaner
//           way to work with objects compared to traditional
//           constructor function.
//     ex. = static keyword , encapsulation , inheritance

// class product {
//      constructor(name, price) {
//           this.name = name;
//           this.price = price;
//      }

//      displayProducts() {
//           console.log(`\nproduct: ${this.name}`);
//           console.log(`Price: ${this.price.toFixed(2)} $\n`);
//      }

//      calculateTotal(salesTax){
//           return this.price+(this.price*salesTax);
//      }

// }

// const product1=new product("shirt",20.99);
// const product2=new product("jacket",200.00);
// const product3=new product("cap",50.55);

// product2.name="underwear";
// product3.price=30.20;

// product1.displayProducts();
// product2.displayProducts();
// product3.displayProducts();

// const salesTax=0.05;

// const total=product1.calculateTotal(salesTax);
// console.log(`Total price with tax : ${total.toFixed(2)} $ .`);


// const total2=product2.calculateTotal(salesTax);
// console.log(`Total price with tax : ${total2.toFixed(2)} $ .`);

// const total3=product3.calculateTotal(salesTax);
// console.log(`Total price with tax : ${total3.toFixed(2)} $ .`);








//   static = keyword that defines properties or methods that belong
//            to a class itself or the objects created from that
//            class (class owns anything static, not the objects)
//        no need to create a new object to access it can be access by class


// class User {
//      static userCount = 0;

//      constructor(username) {
//           this.username = username;
//           User.userCount++;
//      }

//      static getUserCount(){
//           console.log(`There are ${User.userCount} user online \n`);
//      }

//      sayHello(){
//           console.log(`Hello my user name is ${this.username}\n`)
//      }

// }

// const User1 = new User("aditya");
// // console.log(User1.username);
// //console.log(User.userCount);
// User1.sayHello();

// const User2 = new User("meenakshi");
// // console.log(User2.username);
// // console.log(User.userCount);
// User2.sayHello();

// const User3 = new User("ayush");
// // console.log(User3.username);
// // console.log(User.userCount);
// User3.sayHello();

// const User4 = new User("rohit");
// // console.log(User4.username);
// User4.sayHello();

// User.getUserCount();










//   inheritance = allows a new class to inherit properties and
//                 methods from an existing class (Parent -> child),
//                 Helps with code reusability


// class Animal {
//      alive = true;

//      eat() {
//           console.log(`This ${this.name} is eating.`);
//      }
//      sleep() {
//           console.log(`This ${this.name} is sleeping`);
//      }
// }

// class Rabbit extends Animal {
//      name = "rabbit";
//      run() {
//           console.log(`This ${this.name} is running`);
//      }
// }

// class Fish extends Animal {
//      name = "fish"
//      swim() {
//           console.log(`This ${this.name} swimming`);
//      }
// }

// class Hawk extends Animal {
//      name = "hawk";
//      fly() {
//           console.log(`this ${this.name} fly`)
//      }
// }

// const rabbit = new Rabbit();
// const fish = new Fish();
// const hawk = new Hawk();


// console.log(rabbit.alive);
// rabbit.eat()
// rabbit.sleep();
// rabbit.run();

// console.log(fish.alive);
// fish.eat()
// fish.sleep();
// fish.swim();

// console.log(hawk.alive);
// hawk.eat()
// hawk.sleep();
// hawk.fly();








//   super = keyword is used in classes to call the constructor
//           or access the properties and methods of a parent (superclass)
//   this  = this object
//   super = the parent 



// class Animal {
//      constructor(name, age) {
//           this.name = name;
//           this.age = age;
//      }

//      giveIntro() {
//           console.log(`HI i am ${this.name} , my age is ${this.age}yr old.\n`)
//      }
//      move(speed){
//           console.log(`and he ${this.name} moves at ${speed}kmph.`)
//      }
// }

// class Rabbit extends Animal {
//      constructor(name, age, runSpeed) {
//           super(name,age);
//           this.runSpeed = runSpeed;
//      }
//      run(){
//           console.log(`This rabbit named ${this.name} can run.`)
//          ttteed);
//           super.giveIntro();
//      }
// }

// class Fish extends Animal {
//      constructor(name, age, swimSpeed) {
//           super(name,age);
//           this.swimSpeed = swimSpeed;
//      }
//       swim(){
//           console.log(`This fish named ${this.name} can swim.`)
//           super.move(this.swimSpeed);
//           super.giveIntro();
//      }
// }

// class Hawk extends Animal {
//      constructor(name, age, flySpeed) {
//           super(name,age);
//           this.flySpeed = flySpeed;
//      }
//      fly(){
//           console.log(`This hawk named ${this.name} can fly.`)
//           super.move(this.flySpeed);
//           super.giveIntro();
//      }
// }


// const rabbit = new Rabbit("bunny", 2, 25);
// const fish = new Fish("nemo", 1, 40);
// const hawk = new Hawk("Baaz", 6, 60);


// rabbit.run()
// fish.swim();
// hawk.fly();











//getter = special method that makes a property readable 
//getter = special method that makes a property writable

// validates and modify a value when reading and writing a property



// class Rectangle {
//      constructor(width, height) {
//           this.width = width;
//           this.height = height;
//      }
//      set width(newWidth) {
//           if (newWidth > 0)
//                this._width = newWidth;
//           else
//                console.error("width must be positive number")
//      }
//      set height(newHeight) {
//           if (newHeight > 0)
//                this._height = newHeight;
//           else
//                console.error("height must be positive number")
//      }

//      get width(){
//           return `${this._width.toFixed(3)}cm`;
//      }
//      get height(){
//           return `${this._height.toFixed(3)}cm`;
//      }

//      get area(){
//           return `${this._height*this._width}cm^2`;
//      }

// }

// const rectangle = new Rectangle(4.40,2.30);
// rectangle.width=-86797394;
// rectangle.height="pizz";
// console.log(rectangle.width);
// console.log(rectangle.height);

// console.log(rectangle.area)


// class Person {
//      constructor(firstName, lastName, age) {
//           this.firstName = firstName;
//           this.lastName = lastName;
//           this.age = age;
//      }

//      set firstName(newFirstName) {
//           if (typeof newFirstName === "string" && newFirstName.length > 0) {
//                this._firstName = newFirstName;
//           }
//           else {
//                console.log("input invalid");
//           }
//      }
//      set lastName(newLastName) {
//           if (typeof newLastName === "string" && newLastName.length > 0) {
//                this._lastName = newLastName;
//           } else {
//                console.log("input invalid");
//           }
//      }

//      set age(newAge){
//           if(typeof newAge==="number"&& newAge>0)
//           {
//                this._age=newAge;
//           }
//           else{
//                console.log(`invalid entry`)
//           }
//      }

//      get firstName(){
//           return this._firstName;
//      }
//      get lastName(){
//           return this._lastName;
//      }
//      get fullname(){
//           return this._firstName+" "+this._lastName;
//      }
//      get age(){
//           return this._age;
//      }

// }


// const person1 = new Person("aditya", "kumar", 24);
// // console.log(person1.firstName);
// // console.log(person1.lastName);
// console.log(person1.age);

// console.log(person1.fullname);









//   destructuring = extract values from array and objects,
//                   then assign the to variables in a convenient way
//             [] = to perform array destructuring 
//             {} = to perform object destructuring


// //   EXAMPLE - 1 : Swap the values :-

// let a = 1;
// let b = 3;

// [a,b]=[b,a];
// console.log(a);
// console.log(b);


// //   EXAMPLE  - 2 : Swap two elements in array :-

// const colors=["red","pink","purple","black","white"];

// [colors[0],colors[4]]=[colors[4],colors[0]];
// // [colors[0],colors[2]]=[colors[4],colors[0]];

// console.log(colors);



//   EXAMPLE - 3 : Assign array elements to variables :-

// const colors=["red","pink","purple","black","white"];


// const [firstColor,secondColor,thirdColor, ...extraColor] =colors;

// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);

// console.log(extraColor)


//   EXAMPLE - 4 : Extract values from objects :-

// const person1={
//      firstName: "aditya",
//      lastNAme: "kumar",
//      age: 26,
//      job: "cyberSecurity expert"
// }

// const person2={
//      firstName: "meenakshi",
//      lastNAme: "sharma",
//      age: 26,
// }


// const {firstName,lastNAme,age,job="unknow"}=person2;
// // const {firstName,lastNAme,age,job="unknow"}=person1;
// console.log(firstName);
// console.log(lastNAme);
// console.log(age);
// console.log(job);


//   EXAMPLE - 5 : Destructure in function parameters :-

// function displayPerson({firstName,lastName,age,job="unemployed"})
// {
// console.log(`name : ${firstName} ${lastName}`);
// console.log(`Age : ${age}`);
// console.log(`Job : ${job}`);
// }

// const person1={
//      firstName:"Spongebob",
//      lastName:"Squrepants",
//      age: 30,
//      job:"Fry Cook",
// }

// const person2={
//      firstName:"Patrick",
//      lastName:"Star",
//      age:34,
// }

// displayPerson(person1);
// console.log("\n")
// displayPerson(person2);







//   nested objects = Objects inside other Objects.
//                    Allows you to represent more complex date structures.
//                    Child Object is enclosed by a parent object.

//        person{Address{},ContactInfo{}}
//        ShoppingCart{Keyboard{},Mouse{},Monitor{}}


// const person = {
//      fullname: "aditya kumar",
//      age: 24,
//      isStudent: true,
//      hobbies: ["coding", "reading", "music", "baking"],

//      address: {
//           street: "zakir b,chandighar university",
//           city: "mohali",
//           state: "punjab",
//           country: "india",
//      }

// }

// console.log(person.fullname);
// console.log(person.age);
// console.log(person.isStudent);
// console.log(person.hobbies[3]+" and "+person.hobbies[0]);

// console.log(person.address.city);
// console.log(person.address.country);
//           //OR
// console.log(" \n")
// for(const property in person.address)
// {
//      console.log(person.address[property]);
// }


// class Person {
//      constructor(name, age, ...address) {
//           this.name = name;
//           this.age = age;
//           this.address = new Address(...address);
//      }
// }

// class Address {
//      constructor(street, city, country) {
//           this.street = street;
//           this.city = city;
//           this.country = country;
//      }
// }


// const person1 = new Person("Spongebob", 30, "12324 conc st", "bikini bottoms", "marina trench");

// const person2 =new Person("Patrick",34,"123426 conc st","bikini bottom","marina trench")

// const person3 =new Person("Squidword",45,"123423 conc st","bikini bottom","marina trench")

// console.log(person1);
// console.log("\n");
// console.log(person2);
// console.log("\n");
// console.log(person3);

// console.log(person1.address.country);
// console.log(person3.address.city);
// console.log(person2.address.street);







//   Array of objects =  and array made of objects variables


// const fruits = [
//      { name: "apple", color: "red", calories: 95 },
//      { name: "orange", color: "orange", calories: 45 },
//      { name: "banana", color: "yellow", calories: 105 },
//      { name: "coconut", color: "white", calories: 166 },
//      { name: "pineapple", color: "yellow", calories: 200 },

// ];
// console.log(fruits[4].calories);

// fruits.push({ name: "grapes", color: "purple", calories: 95 },
// );

// console.log(fruits[5]);
// console.log(fruits);

// // fruits.pop();
// // fruits.splice(0,3);

// console.log(fruits)

// // --------------forEach()-----------

// fruits.forEach(function (fruit) {
//      console.log("\n")
//      console.log(fruit);
// });

// fruits.forEach(fruit => {
//      console.log(fruit.name);
// });


// // -------------- Map() -----------

// const fruitsName = fruits.map(fruit => {
//      return fruit.name;
// });
// console.log(fruitsName)

// const fruitsColors = fruits.map(fruit => {
//      return fruit.color;
// });
// console.log(fruitsColors);

// const fruitsCaloriesP = fruits.map(fruits => {
//      return fruits.calories;
// });
// console.log(fruitsCaloriesP);


// // -------------- filter() -----------

// const fruitsCalories = fruits.filter(function (fruit) {
//      return fruit.calories > 100;
// });
// console.log(fruitsCalories);

// const yellowFruits = fruits.filter(fruit => {
//      return fruit.color === "yellow";
// });
// console.log(yellowFruits)


// // -------------- reduce() -----------

// const totalFruitCalorie = fruits.reduce(function (total, fruit) {
//      return total = total + fruit.calories;
// }, 0);
// console.log(totalFruitCalorie);


// // const maxCalorie = fruits.reduce((max, fruit) => {
// //      if (max.calories < fruit.calories) {
// //           max = fruit;
// //      } return max;
// // }, fruits[0]);
// // OR
// const maxCalorie2 = fruits.reduce( (max, fruit) =>
// fruit.calories > max.calories ? fruit : max
// );

// console.log(maxCalorie2);


// const minCalorie = fruits.reduce( (min, fruit) =>
// fruit.calories < min.calories ? fruit : min
// );

// console.log(minCalorie);








//   sort() = method  used to sort elemnts of an array in place.
//            Sort elements as  string in lexicographic order , not alphabetical
//            lexicographic = (alphabet+numbers+symbols) as string


// let number = [1,5,2,6,3,6,4,7,4,5,5,445,23,5,3,56,3]; 

// // number.sort(function(a,b){
// //      return a-b;
// // });
// // number.sort(function(a,b){
// //      return b-a;
// // });

// number.sort((a,b)=>a-b);
// console.log(number);


// const people =[
//      {name: "aditya",age:24,gpa: 7.5},
//      {name: "keshav",age:22,gpa: 6.5},
//      {name: "somya",age:23,gpa: 8.5},
//      {name: "eva",age:23,gpa: 7},
// ]

// // people.sort((a,b)=>a.age-b.age);
// // people.sort((a,b)=>a.gpa-b.gpa);

// people.sort((a,b)=>a.name.localeCompare(b.name));

// console.log(people);






// shuffle the elements of the array - Fisher-Yates algorithm

// const cards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

// shuffle(cards);

// console.log(cards);


// function shuffle(arr) {
//      for (let i = arr.length - 1; i > 0; i--) {

//           const randomIndex = Math.floor(Math.random() * (i + 1));

//           [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];

//      }
// }







//   Date objects = objects that contain values that represent dates and times
//                  These date objects can be changed and formatted


// //Date (year, month, day, hour, minute, second, mili second)
// const date = new Date();

// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDate();
// const hour = date.getHours();
// const minutes = date.getMinutes();
// const seconds = date.getSeconds();
// const miliSecS = date.getMilliseconds();
// const dayOfWeek =date.getDay();
// console.log(year);
// console.log(month);
// console.log(day);
// console.log(hour);
// console.log(minutes);
// console.log(miliSecS);
// console.log(dayOfWeek)
// let today = new Date();
// console.log(today.toDateString());  //to print date in human readable format















//   closure = A function defined inside another function,
//             the inner function has access to the variables and scope of the outer function.
//             Allows for private variables and 
//             sate maintenance Used frequently in
//             JS FrameWork: React ,Vue, Angular 

// function outer()
// {
//      let message="Hello";
//      function inner(){
//           console.log(message);
//      }
//      inner();
// }

// outer();
// function createCounter() {
//      let count = 0;
//      function increment() {
//           count++;
//           console.log(`count is ${count}`);
//      }

//      function getCount(){
//           return count;
//      }

//      return{increment,getCount}  //returning object


// }

// const counter=createCounter();  

// counter.increment();

// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();

// console.log(counter.getCount());


// function createGame() {

//      let score = 0;

//      function increaseScore(points) {
//           score += points;
//           console.log((`+${points}pts`));
//      }
//      function decreaseScore(points) {
//           score -= points;
//           console.log((`-${points}pts`));
//      }
//      function getScore() {
//           return score;
//      }

     
//      return {increaseScore, decreaseScore, getScore};

// }

// const game = createGame();

// game.increaseScore(5);
// game.increaseScore(3);
// game.increaseScore(6);
// game.decreaseScore(10);
// game.increaseScore(1);



// console.log(`The final score is ${game.getScore()}pts`);












//   setTimeout() = function in javaScript that allows you to schedule the execution of a function after an amount of time (milliseconds)
//                  Times are approximates (varies based on the workload of the JavaScript runtime env.)  
//             setTimeout(callback, delay);


// function sayHello(){
//      // Window.alert("hello")
//      console.log("hello");
// }

// setTimeout(sayHello,3000);


// setTimeout(function(){console.log("hello mera yara")},7000);

// const timeoutId= setTimeout(()=>console.log("hellllo"),1000);

// clearTimeout(timeoutId);

