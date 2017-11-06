/*
Exercise #1
Create a variable named "numbers" and assign an empty array to it.
*/
var myNumbers = [];


/*
Exercise #2
Using the loop provided for you below, use the array push method to insert the numbers 1 to 10 into the array.
*/


myNumbers.push('1','2','3','4','5','6','7','8','9','10');


/*
Exercise #3
Test that you used the array push method correctly by console logging the first item in the array. Console log the last item in the array afterwards.
*/

console.log(myNumbers[0]);
console.log(myNumbers[9]);

/* checking again */
console.log(myNumbers);


/*
Exercise #5
Create an empty object and assign it to the variable car below.
Give the car object a property called "colour" and assign it the value of "black". Test that your code works correctly by outputting the "colour" property to the console. You should see the value "black" printed out.
*/

function Car() {}
car1 = new Car();
 
 
car1.colour = 'black';
console.log(car1.colour); 