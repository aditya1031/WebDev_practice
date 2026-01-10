// let obj = {
//      name: "love",
//      "full name": "adityakumar",
//      weight: " 85",
//      height:"5'10",
//      greet: function(){
//           console.log("hello evrynyan !!");
//      }

// };

// console.log(obj);
// obj.greet();

// console.log(typeof(obj));

// let arr = [1, 2, 3, 4, 5, 6, "aditya"];
// console.log(typeof (arr));
// console.log(arr);

// let brr = new Array('aditya', 1, true);
// console.log(typeof (brr));
// brr.push(20);
// brr.push(30);
// brr.push(540);
// brr.push(254);

// console.log(brr);


// // brr.push("kumar");

// // brr.shift();

// // brr.pop();

// // brr.unshift("singh");

// // console.log( brr.slice(2,3));

// // brr.splice(1,2,'kumar','singh');


//  let arr = [10,20,30,11,33,22,43,51];


// arr.map((number,index)=>{
//      console.log(number+index);
// })
// let ansArray = arr.map((number) => {
//      return number * number;
// })

// let evenArray=arr.filter((number)=>
// {
//      // if ((number%2)==0) {
//      //      return true;
//      // }
//      // else
//      //      return false;

//      return number%2==0;

// });

// let arr = [1, 2, 'adi', 'tya', null];

// let ans = arr.filter((value) => {
//      if (typeof(value) =='string') {
//           return true;
//      }
//      else {
//           false;
//      }
// });

// console.log(ans);

// let arr=[10,20,30,40];


// let ans =arr.reduce((acc,curr)=>
// {
// return acc+curr;
// },0);

// console.log(ans);

// let arr = [10, 20, 30, 433, 2, 32, 53, 2, 33, 11, 33, 22, 43, 51];

// arr.sort(
//      (a, b) => b-a
// );

// console.log(arr);

// console.log(arr.indexOf(433));

// let arr = [10, 20, 30, 22, 43, 51];


// let length=arr.length;
// console.log(length);

//traditional loop

// for (let index = 0; index < length; index++) {
//  console.log("Number:" ,arr[index], "Index:",index );  
// }

//forEach
// arr.forEach((value,index)=>
// {
//      console.log("Number:" ,value, "Index:",index );

// });


//for In loop
// let object = {
//      name: "love",
//      "full name": "adityakumar",
//      weight: " 85",
//      height:"5'10",
//      greet: function(){
//           console.log("hello evrynyan !!");
//      }

// }  
// for (let key in object) {
//     console.log(key," ",object[key]);

// }


//for of loop

// let arr = [10,  33, 22, 43, 51];


// for (let value of arr) {
//      console.log(value);

// }

// let name="aditya kumar";

// for (const val of name) {
//      console.log(val)
// }


// let arr = [10, 20, 30, 40, 50];

// function getSum(arr) {

//      let sum = 0;
//      // for (let index = 0; index < arr.length; index++) {
//      //      sum = sum + arr[index];

//      // }

//      arr.forEach((value) => {
//           sum = sum + value;
//      });

//      return sum;
// }

// let totalSum = getSum(arr);
// console.log(totalSum);