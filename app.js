

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

var userInput =+prompt("Enter a number to print its multiplication table");

for(i=1; i<=10;  i++) {
    document.write(userInput+" x "+i+" ="+(userInput*i)+"<br>");
}