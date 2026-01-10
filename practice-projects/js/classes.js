// class human {
//      age = 23; //public
//      #wt = 22; //private
//      ht = 180;


//      constructor(newAge, newHeight, newWeight) {
//           this.age = newAge;
//           this.ht = newHeight;
//           this.#wt = newWeight;
//      }

//      //behavior
//      #walking() {
//           console.log("i am walking", this.#wt);
//      }

//      running() {
//           console.log(
//                "i am running"
//           )
//      }

//      get fetchWeight() {
//           return this.#wt;
//      }


//      set modifyWeight(val) {
//           this.#wt = val;
//      }

// }

// let obj = new human(50, 190, 332);
// console.log(obj);
// // obj.walking();
// // console.log(obj.#wt);



// function sayName(myName = "piyush", lname = myName.toUpperCase()) {
//      console.log("My name is: ", myName, " ", lname)
// }

// sayName('aditya','kumar');


// function solve (value={
//      age:15,
//      wt:45,
//      ht:23
// })
// {
//      console.log("hello ji",value);
// }

// solve(null); //solve take the value null
// solve(undefined);//but here it will take default value



// function getAge(){
//      return 190;
// }

// function utility(name ="aditya",age=getAge())
// {
//      console.log(name," ", age);
// }

// utility();