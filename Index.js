const readlineSync = require("readline-sync");
const chalk = require("chalk");
 
let playerScore = 0;

console.log(chalk.cyanBright.italic("Hi This is Poornima"));
const playerName = readlineSync.question(chalk.cyanBright.italic("What's your name ?  "));

console.log(chalk.cyanBright.italic("Welcome " + chalk.magentaBright.bold(playerName) + " let's see how well you know about anime"));

const scoreBoard=[{
  name: "Apoorva: ",
  score: 1,
},
{
  name: "Sanjana:",
  score: 3,
}]

const play = (question,answer) => {
  let userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.green("Correct!"));
    playerScore = playerScore + 1;
  }else
  {
    console.log(chalk.redBright("Wrong Answer!"));
  }

 console.log(chalk.cyanBright.italic("Your current score is " + chalk.magentaBright.bold(playerScore) )); 

}

console.log("-----------------------------");

const questions = [{
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
  },
  {question: chalk.yellowBright("Who is the author of Berserk?") + chalk.blueBright("\n A) Kentaro Miura \n B) Tite Kubo \n C) Keigo Higashina \n D) Togashiro \n"),
    answer: "A"}
  ] ;
questions.forEach( (currentQnA)=> {
      play(currentQnA.question,currentQnA.answer)
})

console.log("-------------");
console.log("You scored: ", playerScore);

let maxScore=0;
scoreBoard.forEach((player,index) => maxScore = player.score>maxScore? player.score: maxScore
)

console.log("Currently the highest score on this quiz is " + maxScore);

if(playerScore>=maxScore){
    console.log("Congratulations! You have achieved new high score 🔥")
    console.log("Please send me a screen shot!")
  }

  else{
    console.log("You missed it by " + (maxScore-playerScore) + " points 😔")
  }

