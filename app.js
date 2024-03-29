

/*---ASSIGNMENT # 17-20-----*/

//--Question No: 1


// for(i=0; i<=5; i++){
    //     document.write("Hello world" + "<br>")
    // }
    
    
    // var arr = [[1,2,3],[4,5,6],[7,8,9]];
    
    // for(var i =0; i < arr.length; i++){
        //     document.write(arr[i].join(" ") + "<br>");
        // }
        
        //--Question No: 2
        
        // for(i=1; i<=10; i++){

//     document.write(i + "<br>")
// }

//--Question No: 3

/*--Multiplication table of any number using for loop.*/

// var userInput =+prompt("Enter a number to print its multiplication table");


// for(i=1; i<=10;  i++) {
//     document.write(userInput+" x "+i+" ="+(userInput*i)+"<br>");
// }

// var userInput = prompt("Enter a number to show its multiplication table"); 
// var userLength = prompt("Enter length multiplication table");

// for(i=1; i <= userLength; i++){
//     document.write(userInput + " x " + i + " = " + userInput*i + "<br>");
// }

//--Question No: 4

// var fruits = ["apple","banana","mango","orange","strawberry"];

// for(i = 0; i <=4; i++){
//     document.write(fruits[i] + "<br>");
// }

//----Question No: 5

//--A--

// for(i=1; i<=15; i++){
//     document.write(i +"<br>")
// }

//--B--

// for(i=10; i>=1; i--){
//     document.write(i + "<br>")
// }

//--c--
//--Oddd:----

// for(i=1; i<50; i=i+2){
//     document.write(i + "<br>")
// }


//--Even:--

// for(i = 0; i < 50; i=i+2 ){
//     document.write(i + "<br>")
// }

//--Series:--

// for(i = 0; i <= 20; i=i+2){
//     document.write(i +"k"+"<br>")
// }

// for (var i = 1; i <= 100; i = i + 20){
//     document.write(i + "<br>")
// }

//--Question No: 6

// var myBakry = ["cake","apple pie","cookie","chips","patties"];
// var userInput = prompt("Welcome to MyBakry.What do you want to order Sir/Ma'am?");
// var match = false;

// for(var i = 0; i<myBakry.length; i++){
//     if(userInput == myBakry[i]){
//         match = true
//         alert("Yes Available")
//         break
//     }
    
// }
// if(match == false){
//     alert("No available in our menu")
// }

// Question No: 7

// var A = [24,53,78,91,12];
// var smallestNumber = A[0];
// for(var i = 1; i < A.length; i++){
//     if(A[i] < smallestNumber){
//         smallestNumber = A[i];
//     }
// }
// document.write("The smallest number in the array is:" + smallestNumber);

//Question No: 8

// var A = [24,53,78,91,12];
// var largestNumber =A[0];
// for(var i = 1; i < A.length; i++){
//     if(A[i] > largestNumber){
//         largestNumber = A[i]
//     }
// }
// document.write("The largest number in the array is: " + largestNumber);

//--Question No: 9

// for(var i = 0; i <= 100; i=i+5){
//     document.write(i + " ")
// }



///----------------------------Extra pratice Question s ----------------------------///


// for(var i = 5; i > 1; i--){
//     for(var j = 5; j>i; j--){
//         document.write(j, " ")
//     }
//     document.write('<br>')
// }

// for(var i = 1; i <= 10; i++){
//     console.log('outer Loop ===> ', i);
//     for(var j = 1; j <= 5; j++){
//         console.log('inner  Loop ==> ', j);
//     }
// }

// for(var i = 1; i <= 100; i++){
//     console.log(i);
//     for(var j = 1; j <= 10; j++){
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
// }

// for(var i = 1; i <= 3; i++){
//     console.log('outer loop ==>', i)
//         for(var j = 1; j <= 2; j++){
//             console.log('inner loop ==> ', j)
//         }
//     }


// for( var i = 1; i <= 2; i++){
//     console.log('outer loop  ==>', i)
//     for( var j = 1; j <= 1; j++){
//         console.log('inner loop ==> ', j)
//     }
// }

// for( var i = 1; i <= 4; i++){
//     console.log('outer loop  ==>', i)
//     for(var j = 1; j <= i; j++){
//         console.log('inner loop ==> ', j)
//     }
// }

// for(let i = 1; i <= 3; i++){
//     // console.log("outer loop ==>",i)
//     for(let j = 1; j <= 2; j++){
//         console.log(i * j)


//     }
// }

// for(var i = 1; i <=5; i++){
//     for(var j=1; j <=i; j++){
//         document.write(j)
//     }
//     document.write("<br>")
// }

// for(var i = 5; i>=1; i--){
//     for(var j = 5;  j>=i; j--) {
//           document.write(j)
//     }
//     document.write("<br>")
    
// }

// for(var i = 1; i <= 5 ; i++){
//     for(var j = 1; j<=5; j++) {
//         document.write(j)
//     }
//     document.write( "<br>" )
// }

// for(var i = 5; i>=1; i--){
//     for(var j = 5;  j>=i; j--) {
//           document.write("*")
//     }
//     document.write("<br>")
    
// }

/* Write a program to check whether the word is palidrome or not.
palidrome words --> civic,madam,,121.
*/

// var userInput = prompt("Enter your word");
// var check = "";
// for(var i = userInput.length-1; i >= 0; i--){
//     check +=  userInput[i];
// }
 
// if(userInput ===  check){
//     alert(userInput + " its a plindrome word")
// }
// else{
//     alert("try again")
// }
/*write a program to calculate factorial by using prompt i.e (5) 5*4*3*2*1

var userInput = prompt("Enter the palindrome word");*/


// for(var i = 1; i <= 5; i++){
//     for(var j = 1; j<=i; j++) {
//         document.write("ineer",j)
//     }
//     document.write("<br>")
// }

// for(var i = 1; i <= 100; i=i+10){
//     for(var j=1; j<i; j++){
//         document.write(j +  " ")
//     }
//     document.write("<br>")
// }

// for(var i = 0; i < 5; i++){
//     for(var j = 0; j < 3; j++){
//         document.write( );
//     }
// }

// var firstName = ["Ghous","Basit","Fahad"]
// var  lastName = ["Ahmed","Khan"]

// for(var i = 0; i < firstName.length; i++){
//     for(var x = 0; x < lastName.length; x++){
//         document.write(firstName[i] + " " + lastName[x])
//     }
// }


// for(var i = 0; i < 10; i++){
//     if(i === 3 )
//     document.write(i)
// }

// for(var i = 0; i < 10; i++){
//     if(i === 3 ){continue}
//     document.write(i)
// }

/* lets Pratice 
Qs.Create an array to store companies->"Bloomberg","Microsoft","Uber","Google","IBM","Netflix"

a. Remove the first company from the array
b. Remove uber & Add Ola in its place
c. Add Amazon at the end*/

// var companies = ["Bloomberg","Microsoft","Uber","Google", "IBM","Netflix"];
// // companies.shift();
// // companies.splice(2,1,"Ola")
// companies.push("Amazon");

// document.write(companies)
