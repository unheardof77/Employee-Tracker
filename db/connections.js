const {  dbCreate  } = require(`./index`)

const db = dbCreate();
const viewAllDepartments = () => {
    console.log(`ran`);
    db.query('SELECT * FROM department;', (err, result) => {
        console.table(result);
        init();
    });
};
const viewAllRoles = () => {
    db.query(`SELECT * FROM role;`, (err, result) => {
        if (err) throw err;
        console.table(result);
    });
    init();
};
const viewAllEmployees = () => {
    db.query(`SELECT * FROM employee;`, (err, result) => {
        if (err) throw err;
        console.table(result);
    });
    init();
};
const addADepartment = (name) => {
    db.query(`INSERT INTO TABLE department(namee) VALUE(${name})`, (err) => {
        if (err) console.log(err);
        console.log(`Added new department called ${name}.`)
    });
    init();
};
const addARole = () => {
    db.query(``, () => {

    });
    init();
};
const AddAnEmployee = () => {
    db.query(``, () => {

    });
    init();
};
const updateAnEmployeeRole = () => {
    db.query(``, () => {

    });
    init();
};

const whatQuestion = ({ status }) => {
    switch (status) {
        case "View all departments":  viewAllDepartments(); break;
        case "View all roles":  viewAllRoles(); break;
        case "View all employees":  viewAllEmployees(); break;
        case "Add a department":  addADepartment("morgan"); break;
        case "Add a role":  addARole(); break;
        case "Add an employee":  AddAnEmployee(); break;
        case "Update an employee role": updateAnEmployeeRole(); break;
        case "Exit":
            process.exit();
        default:
            console.log(`Something went wrong.(SwitchCase)`);
    };
};

module.exports = {
    whatQuestion
};