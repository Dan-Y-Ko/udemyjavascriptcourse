var Question = function(question, chooseAnswer, correctAnswer)
{
    this.question = question;
    this.chooseAnswer = chooseAnswer;
    this.correctAnswer = correctAnswer;
}

var question1 = new Question('Is Javascript the coolest programming language in the world?','0: yes 1: no', '0');
var question2 = new Question("What is the name of this course's teacher?", '0: John 1: Michael 2: Jonas', '2');
var question3 = new Question('What best describes coding?','0: Boring 1: Fun 2: Tedious', '1');
var repeat = true;
var currentScore = 0;

var questionArray = [question1, question2, question3];

function displayQuestion()
{
    var randomQuestion = questionArray[Math.floor(Math.random() * questionArray.length)];
    console.log(randomQuestion.question);
    console.log(randomQuestion.chooseAnswer);
    console.log('Your current score is: ' + currentScore);
    
    var userAnswer = prompt("Please select the correct answer (just type the number or 'exit')");
    
    if (userAnswer == randomQuestion.correctAnswer)
    {
        console.log('Correct!');
        currentScore++;
    }
    else if (userAnswer == 'exit' || userAnswer == null)
    {
        repeat = false;
    }
    else
    {
        console.log('incorrect');
    }
}

while(repeat)
{
    displayQuestion();
}

