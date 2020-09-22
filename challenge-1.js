//js challenge no.1
// var lines = 4;
// var hashtag = "#";
// for (var i = 0; i < lines+1; i++){
//   document.write(hashtag);
//   hashtag += "#";
//   document.write("<br>");
// }
// for (var i = 0; i < lines; i++){
//   for(var j = 0; j < lines-i; j++){
//     document.write("#");
//   }
//   document.write("<br>");
// }

//js challenge no.2
// for (var i = 1 ; i < 101; i ++){
//    if (i % 3 == 0 && i % 5 == 0) {
//     console.log("FizzBuzz")
//   }
//   else if ( i % 3 == 0){
//     console.log("Fizz");
//   }
//   else if ( i % 5 == 0){
//     console.log("Buzz");
//   }
//   else {
//      console.log(i);
//   }
// }

//js challenge no.3
// var lines = 11;

// for (var j=0; j<lines; j++){
//   for (var i=0; i<lines; i++){
//      if ((i % 2 == 0 && j % 2 == 0) || (i % 2 == 1 && j % 2 ==1)){
//         document.write("#");
//        }
//   else {
//     document.write("&nbsp;");
//   }
//   }
//   document.write("<br>");
// }

//(1)Declaring a function
//A set of instruction, that can be regrouped for reusability;
// function sayHello(){
//   console.log("Hello");
// }
// //Calling or Invoking the function
// sayHello();
// //(2)Function with parameter
// function goodBye(name){
//   console.log("Hello "+name);
// }

// goodBye("Anson");
// goodBye("Wan");
// goodBye("Siva");

//(3) Function with result (calculation, comparison, transform...)
// function sum(a,b){
//   return a+b;
// }
//   console.log(sum(3,2));
//   console.log(sum(123,59));

//Create a function that will return the average of three numbers
// function avg(a,b,c){
//   return (a+b+c)/3
// }
//   console.log(avg(5,8,2));

//Create a function that will return more than 1 answer
// function dimAndVol(a,b,c){
//   return (a*b, a*b*c)
// }
//   console.log(dimAndVol(6,8,2));

//Create a function that will return more than 1 answer
// function dimAndVol(a,b,c){
//   return [a*b, a*b*c];
// }
//   console.log(dimAndVol(6,8,2));

//Create a function that will return min, max, avg
function minMaxAvg(a,b,c){
var min;
var max;
var avg = (a+b+c)/3;

if (a > b && a > c){
  max = a;
  }
else if (b > a && b > c){
  max = b;
  }
else{
  max = c;
  }
  
 if (a < b && a < c){
  min = a;
  }
else if (b < a && b < c){
  min = b;
  }
else{
  min = c;
  }
  return [min,max,avg]
}
console.log(minMaxAvg(10,13,13));

