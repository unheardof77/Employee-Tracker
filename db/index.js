const inquirer = require(`inquirer`);
const helper = require(`./connections`);
const questions = [
    {
        name: "status",
        type: "list",
        message: "What would you like to do?",
        choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role", "Exit"]
    }
];

const whatQuestion = ({status}) =>{
    switch(status){
        case "View all departments": helper.viewAllDepartments(); 
        case "View all roles": helper.viewAllRoles();
        case "View all employees": helper.viewAllEmployees();
        case "Add a department": helper.addADepartment();
        case "Add a role": helper.addARole();
        case "Add an employee": helper.AddAnEmployee();
        case "Update an employee role": helper.updateAnEmployeeRole();
        case "Exit":
            process.exit();
        default:
            console.log(`Something went wrong.(SwitchCase)`);
    };
};

const init = () =>{
    inquirer.prompt(questions)
    .then((data) => whatQuestion(data))
};

module.exports = init;