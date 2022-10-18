const inquirer = require(`inquirer`);






const init = () => {
    inquirer.prompt(questions)
        .then((data) => whatQuestion(data))
};





