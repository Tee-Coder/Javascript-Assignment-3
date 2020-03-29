function reverse()
{

var thenumbers = prompt ("enter the numbers to be reversed");

var thestring = thenumbers.toString().split("").reverse().join('');

var thereverse = parseInt(thestring);

document.write ("the reverse is " + thereverse+ thenumbers);



}