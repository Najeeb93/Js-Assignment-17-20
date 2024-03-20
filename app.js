

/*---ASSIGNMENT # 17-20-----*/

//--Question No: 1

// for(i=0; i<=5; i++){
//     document.write("Hello world" + "<br>")
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

var myBakry = ["cake","apple pie","cookie","chips","patties"];
var userInput = prompt("Welcome to MyBakry.What do you want to order Sir/Ma'am?");
var match = false;

for(var i = 0; i<myBakry.length; i++){
    if(userInput == myBakry[i]){
        match = true
        alert("Yes Available")
    }
    
}
if(match == false){
    alert("No available in our menu")
}