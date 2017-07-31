var randomNo = Math.floor((Math.random() * 100) + 1);
var guess01 = prompt('Player 1 : What is your guess from 1 to 100?');
var guess02 = prompt('Player 2 : What is your guess from 1 to 100?');
var diffPlayer1 = guess01 - randomNo;
var diffPlayer2 = guess02 - randomNo;

console.log (randomNo);
console.log (diffPlayer1);
console.log (diffPlayer2);


if (diffPlayer1 > diffPlayer2)
    {
        console.log ('Player 1 wins');
    }
else {
        console.log ('Player 2 wins');
}