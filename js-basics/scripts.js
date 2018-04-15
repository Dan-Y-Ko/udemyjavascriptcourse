// Coding Challenge #1

/* playerOneAge = 26;
playerTwoAge = 30;
playerThreeAge = 30;

playerOneHeight = 175;
playerTwoHeight = 180;
playerThreeHeight = 185;

scoreOne = playerOneHeight + 5 * playerOneAge;
scoreTwo = playerTwoHeight + 5 * playerTwoAge;
scoreThree = playerThreeHeight + 5 * playerThreeAge;

if (scoreOne > scoreTwo && scoreOne > scoreThree)
{
    alert('player one wins');
}
else if (scoreTwo > scoreOne && scoreTwo > scoreThree)
{
    alert('player two wins');
}
else if (scoreThree > scoreOne && scoreThree > scoreTwo)
{
    alert('player three wins');
}
else
{
    alert('draw');
}
/
*/

// Coding Challenge #2

var arrayOne = [1985, 1990, 1995];

function printFullAge(arrayOne)
{
    var arrayTwo = [];
    var isLegal = [];

    for (i=0; i < arrayOne.length; i++)
    {
        arrayTwo.push(2018-arrayOne[i]);
    }

    for (i=0; i < arrayOne.length; i++)
    {
        if (arrayTwo[i] >= 18)
        {
            console.log('over 18' + ', ' + arrayTwo[i] + ' years old');
            isLegal.push(true);
        }
        else
        {
            console.log('under 18' + ', ' + arrayTwo[i] + ' years old');
            isLegal.push(false);
        }
    }
    
    return isLegal;
}

var full_1 = printFullAge(arrayOne);
var full_2 = printFullAge([1997, 2000, 1960, 1995]);

console.log(full_1);
console.log(full_2);