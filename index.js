const inquirer = require(`inquirer`);
const questions = require(`./questions`);
const whatQuestion = require(`./db`);

inquirer.prompt(questions.mainQuestions).then(whatQuestion);