
// sayMyname("aditya");  //goisted funtion here declatrion moved to top og the scope
// function sayMyname(firstname)
// {
//      console.log(firstname);
// };



// let printAge = (age)=>{      //not working hoisting due to funtion expression gives refrence variable error
//      console.log(age)
// } 

// printAge(23)


// console.log(age);  //not full working hoist only declaration of age mouved up not defination
// var age= 23;

// age= 23;
// console.log(age);  
// var age;

// const object1= new human();  //hoisting not possible in class

// class human{

// }

// function greetMe(greet, fullname) {
//      console.log("hello", fullname)
//      greet();
// } function greet() {
//      console.log(" kumar")
// }

// greetMe(greet, "aditya");


// function solve(number){
//      return function(number){
//           return number*number;
//      }
// }
// let ans =solve(5);

// let finlans=ans(10);
// console.log(finlans);


// const arr = [
//      function (a, b) {
//           return a + b;
//      },
//      function (a, b) {
//           return a - b;
//      }, function (a, b) 
//      {
//           return a * b;
//      }
// ]

// let sum = arr[2](5, 3); 
// console.log(sum)



// let obj = {
//      name: "aditya",
//      wt: "85kg",
//      ht: "5'10",
//      age: 23,
//      greet: () => {
//           console.log("hello");
//      }
// }

// console.log(obj.age);
// obj.greet();


