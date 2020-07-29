const collectAnswers = require("./lib/collectAnswers")

const questions = [
  "What is your name? ",
  "Where do you live? ",
  "What are you going to do with NodeJS? "
];

const answerEvents = collectAnswers(questions, answers => {
  console.log("Thank you for your answers. ")
  console.log(answers);
  process.exit();
}); 

answerEvents.on("answer", answer => 
  console.log(`question answered: ${answer}`)
);

answerEvents.on("complete", answers => {
  console.log("Thank you for your answers. ")
  console.log(answers);
})

answerEvents.on("complete", () => process.exit());