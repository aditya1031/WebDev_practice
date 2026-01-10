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