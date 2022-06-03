"use strict"
// alert("Salam Dunya")

// function multiply(a,b=0,c=0,d=0){
//  return a*b*c*d;
// }

// function sum(a, b=0){
//     return a+b;
// }

// function divide(a,b){
//     return a/b;
// }

// function sub(a,b){
//     return a-b;
// }

// function isEven(a){
//     if(a%2==0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// function sumOfDigits(a){
//     let sumofdigits = 0;
//    while (a>0) {
//        sumofdigits+=a%10;
//        a=(a-a%10)/10;
//    }
//    return sumofdigits;
// }

// function isPalindrome (a){
// if(a==reverseNumber(a)){
//     return true;
// }
// else{
//     return false;
// }
// }

// function reverseNumber(a){
//     let newNum = 0;
//     while(a>0){
//        newNum=newNum*10+a%10;
//        a=(a-a%10)/10;
//     }
//     return newNum;
// }
    

// let result1 = sum(10,20);
// console.log(result1);

// let result2 = multiply(1,2,3,4);
// console.log(result2);

// let result3 = divide(6,2);
// console.log(result3);
// ;
// let result4 = sub(5,2);
// console.log(result4);

// let result5 = isEven(25);;
// console.log(result5);

// let result6 = sumOfDigits(65);
// console.log(result6);
 
// let result7 = reverseNumber(253);
// console.log(result7);

// let result8 = isPalindrome(1241)
// console.log(result8);  

// let my_name = 5;
// console.log(my_name);

// const randomNumber = Math.round(Math.random()*10);
// if(randomNumber>5){
// console.log("random Number is greater than 5" + " " + "random Number is:" + randomNumber);
// }

// Tasks 27.07.2021
// const userAge = prompt("Yasinizi daxil edin");
// const result = userAge > 5 ? alert("halaldi") : alert("halal deyil")

// let name1 = "Ilham";
// alert(`Salam ${name1}`)


// Tasks 28.07.2021
// const findEven = (...numbers) =>{
//     for (let i = 0; i < numbers.length; i++) {
//        if(numbers[i]%2===0){
//            console.log(numbers[i]);
//        }
//     }
// }
// findEven(1,2,3,4,5,6,7,8,9,10,12,13)

// const findOdd = (...numbers) =>{
//     for (let i = 0; i < numbers.length; i++) {
//        if(numbers[i]%2===1){
//            console.log(numbers[i]);
//        }
//     }
// }
// findOdd(1,2,3,4,5,6,7,8,9,10,12,13)





// let user = "Ilham"

// function showInfo() {
//     let message = "Salam" + " " + user;
//     alert(message);
// }
// showInfo();

// function checkAge(age) {
//     if (age >= 18) {
//       return true;
//     } else {
//       return false('Do you have permission from your parents?');
//     }
//   }
  
//   let age = prompt('How old are you?');
  
//   if ( checkAge(age) ) {
//     alert( 'Access granted' );
//   } else {
//     alert( 'Access denied' );
//   }
  
const isPrime = (...n) => {
    for (let i = 2; i < n; i++) {
      if ( n % i === 1) {
          
      };
    }
    console.log(n);
  }
  
  isPrime(3,7,11,13,12,16,17)

  