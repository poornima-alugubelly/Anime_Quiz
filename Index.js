var readlineSync = require("readline-sync");
var chalk = require("chalk");
 
var score = 0;

console.log(chalk.cyanBright.italic("Hi This is Poornima"));
var userName = readlineSync.question(chalk.cyanBright.italic("What's your name ?  "));

console.log(chalk.cyanBright.italic("Welcome " + chalk.magentaBright.bold(userName) + " let's see how well you know about anime"));

var scoreBoard=[{
  name: "Apoorva: ",
  score: 1,
},
{
  name: "Sanjana:",
  score: 3,
}]

function play(question, answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.green("Correct!"));
    score = score + 1;
  }else
  {
    console.log(chalk.redBright("Wrong Answer!"));
  }

 console.log(chalk.cyanBright.italic("Your current score is " + chalk.magentaBright.bold(score) )); 

}

console.log("-----------------------------");

var questions = [{
    question: chalk.yellowBright("Which country is anime from?") + chalk.blueBright("\n A) China \n B) Japan \n C) USA \n D) India \n "),
    answer: "B"
},{
  question: chalk.yellowBright("What was the first anime movie to win an oscar?") + chalk.blueBright("\n A) Your Name \n B) Wolf Children \n C) End of Evangelion \n D) Spirited Away \n "),
  answer: "D"
},{
 question: chalk.yellowBright("Is Mosquitoe stronger than Saitama? State Yes or No \n"),
 answer: "Yes"
},{
  question: chalk.yellowBright("What is the highest rated anime on MAL?") + chalk.blueBright("\n A) Gintama \n B) Erased \n C) FMAB \n D) FLCL \n "),
  answer: "C"
  },,
  {question: chalk.yellowBright("Who is the author of Berserk?") + chalk.blueBright("\n A) Kentaro Miura \n B)Tite Kubo \n C) Keigo Higashina \n D)Togashiro \n"),
    answer: "A"}
  ] ;

for(var i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question,
  currentQuestion.answer);
}

console.log("-------------");
console.log("You scored: ", score);

var max=0;

for(var i=0;i<scoreBoard.length-1; i++){
     max = Math.max(scoreBoard[i].score,scoreBoard[i+1].score)
  } 
console.log("Currently the highest score on this quiz is " + max);

if(score>=max){
    console.log("Congratulations! You have achieved the new high score 🔥")
    console.log("Please send me a screen shot!")
  }

  else{
    console.log("You missed it by " + (max-score) + " points 😔")
  }


