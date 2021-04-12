var readlineSync = require("readline-sync");
var chalk = require("chalk");
 
var score = 0;

console.log(chalk.cyanBright.italic("Hi This is Poornima"));
var userName = readlineSync.question(chalk.cyanBright.italic("What's your name ?  "));

console.log(chalk.cyanBright.italic("Welcome " + chalk.magentaBright.bold(userName) + " let's see how well you know me"));

var scoreBoard=[{
  name: "Tanay: ",
  score: 0,
},
{
  name: "Sanjana:",
  score: 4,
}]

function play(question, answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("Correct !");
    score = score + 1;
  }else
  {
    console.log("Wrong Answer");
  }

}

var questions = [{
    question: chalk.yellowBright("Which country is anime from? \n A) China \n B) Japan \n C) USA \n D) India \n "),
    answer: "B"
},{
  question: chalk.redBright("What was the first anime movie to win an oscar\n A) Your Name \n B) Wolf Children \n C)  End of Evangelion \n D) Spirited Away \n "),
  answer: "D"
},{
 question: chalk.green("Is Mosquitoe stronger than Saitama? State Yes or No \n"),
 answer: "Yes"
},{
  question: chalk.blueBright("What is the highest rated anime on MAL? \n A) Gintama \n B) Erased \n C) FMAB \n D) FLCL \n "),
  answer: "C"
  }] ;

for(var i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question,
  currentQuestion.answer);
}

max=0
console.log("--------");
console.log(chalk.bgBlue.yellowBright.italic.bold("You scored: ", score));

  for(var i=0;i<scoreBoard.length; i++){
   
         max =Math.max(scoreBoard[i].score, score);
  }
    if(max<4){
    console.log(chalk.bgWhiteBright.redBright.italic.bold("Currently the highest score on this quiz is " + max));
    console.log(chalk.yellowBright.italic.bold("Please let me know if you score the highest "));
    }
    else{
     console.log(chalk.bgWhiteBright.redBright.italic.bold(" High score!! You're an anime whiz!"));
    }
