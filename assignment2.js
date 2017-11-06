// Exercise #1
// Write your solution below

for (var line = "#"; line.length < 8; line += "#")
console.log(line);

/* 
Write your explanation for Exercise #1 here

Simplest way to console log the triangle. the for function allows us to 
set a limit on length of the line (up to 8 characters) and it will continue
to draw # on a new line up until the line length becomes 8.

*/

// Exercise #2
// Write your solution below

var isEven = function(number) {
    if (number % 2 === 0) {
        return console.log("number is even");
    } else {
        return console.log("number is odd");
    }
};

//testing code

isEven(2);
isEven(5);


/* 
Write your explanation for Exercise #2 here

Using an if else statement is the easiest method to approach this function
since a number can only be even or odd. If a number is divisble by 2 then the
remainder will be zero hence if (number %2 = 0) works to determine if the number
imputted is indeed even. Otherwise if that is untrue then the function will
go down to the else command. 

Not sure how to approach the problem of decimal places and non-intergers in Javascript
and how that would affect this code.
*/