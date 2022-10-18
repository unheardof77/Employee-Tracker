const inquirer = require(`inquirer`);
const questions = require(`./questions`);
const whatQuestion = require(`./db/connections`)

inquirer.prompt(questions)
.then(whatQuestion);