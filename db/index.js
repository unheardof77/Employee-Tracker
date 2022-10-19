const db = require(`./connection`).db;
const inquirer = require(`inquirer`);
const questions = require(`../questions`);

const init = () =>{
    inquirer.prompt(questions.mainQuestions).then(whatQuestion);
};

const viewAllDepartments = () => {
    db.query('SELECT * FROM department;', (err, result) => {
        if (err) console.error(err);
        console.table(result);
        init();
    });
};

const viewAllRoles = () => {
    db.query(`SELECT * FROM role;`, (err, result) => {
        if (err) console.error(err);
        console.table(result);
        init();
    });
};

const viewAllEmployees = () => {
    db.query(`SELECT * FROM employee;`, (err, result) => {
        if (err) console.error(err);
        console.table(result);
        init();
    });
};

const viewEmployeesByManager = () =>{

};

const viewEmployeesByDepartment = async () =>{
    db.query(`SELECT * FROM employee JOIN department ON employee.role_id = role.id AND role.department_id = department.id ;`, (err, result) => {
        if (err) console.error(err);
        console.table(result);
        init();
    });
};

const addADepartment = () => {
    inquirer.prompt(questions.addADepartmentQuestions).then(({departmentName})=>{
        db.query(`INSERT INTO department (name) VALUES (?);`,[departmentName], (err) => {
            if (err) console.error(err);
            console.log(`Added new department called ${departmentName}.`)
            init();
        })});
};

const addARole = async () => {
    const answers = await inquirer.prompt(questions.addARoleQuestions);
    db.query(`INSERT INTO role (title, salary, department_id) VALUES(?,?,?);`,[answers.roleName, answers.roleSalary, answers.departmentId], (err) => {
        if (err) console.error(err);
        console.log(`Added new role.`);
        init();
    });
};

const AddAnEmployee = async () => {
    const answers = await inquirer.prompt(questions.addAnEmployeeQuestions);
    if (!answers.roleId) answers.roleId = null;
    if (!answers.managerId) answers.managerId = null;
    db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VAlUES(?,?,?,?);`,[answers.firstName, answers.lastName, answers.roleId, answers.managerId], (err) => {
        if (err) console.error(err);
        console.log(`Added ${answers.firstName} as an employee.`);
        init();
    });
};

const updateAnEmployeeRole = async () => {
    const answers = await inquirer.prompt(questions.updateAnEmployeeRoleQuestions);
    db.query(`UPDATE employee SET role_id = ? WHERE id = ?;`,[answers.newRoleId, answers.employeeId], (err) => {
        if (err) console.error(err);
        console.log(`Employee #${answers.employeeId} now has a role id of #${answers.newRoleId}.`);
        init();
    });
};

const updateAnEmployeeManager = async () =>{
    const answers = await inquirer.prompt(questions.updateAnEmployeeManagerQuestions);
    if (!answers.newManagerId) answers.newManagerId = null;
    db.query(`UPDATE employee SET manager_id = ? WHERE id = ?;`,[answers.newManagerId, answers.employeeId], (err) => {
        if (err) console.error(err);
        console.log(`Employee #${answers.employeeId} is now managed by ${answers.newManagerId}.`);
        init();
    });
};

const whatQuestion = ({ status }) => {
    switch (status) {
        case "View all departments":  viewAllDepartments(); break;
        case "View all roles":  viewAllRoles(); break;
        case "View all employees":  viewAllEmployees(); break;
        case "Add a department":  addADepartment(); break;
        case "Add a role":  addARole(); break;
        case "Add an employee":  AddAnEmployee(); break;
        case "Update an employee role": updateAnEmployeeRole(); break;
        case "Update an employee manager": updateAnEmployeeManager(); break;
        case "Exit":
            process.exit();
        default:
            console.log(`Something went wrong.(SwitchCase)`);
    };
};

module.exports = whatQuestion;