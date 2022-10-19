const mainQuestions = [
    {
        name: "status",
        type: "list",
        message: "What would you like to do?",
        choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role", "Update an employee manager", "Exit"]
    }
];

const addADepartmentQuestions = [
    {
        name: "departmentName",
        type: "input",
        message: "What is the name of the department you would like to add?"
    }
];

const addARoleQuestions = [
    {
        name: "roleName",
        type: "input",
        message: "What is the name of the role you would like to add?"
    },
    {
        name: "roleSalary",
        type: "input",
        message: "What is the salary of the role you would like to add?"
    },
    {
        name: "departmentId",
        type: "input",
        message: "What is the department id of the role you would like to add?"
    }
];

const addAnEmployeeQuestions = [
    {
        name: "firstName",
        type: "input",
        message: "What is there first name?"
    },
    {
        name: "lastName",
        type: "input",
        message: "What is there last name?"
    },
    {
        name: "roleId",
        type: "input",
        message: "What is their role id?"
    },
    {
        name: "managerId",
        type: "input",
        message: "What is their managers id?"
    }
];

const updateAnEmployeeRoleQuestions = [
    {
        name: "employeeId",
        type: "input",
        message: "What is the employee id of the employee who's role your trying to change?"
    },
    {
        name: "newRoleId",
        type: "input",
        message: "What is the id of the role you are assigning?"
    }
];

const updateAnEmployeeManagerQuestions = [
    {
        name: "employeeId",
        type: "input",
        message: "What is the employee id of the employee who's manager your trying to change?"
    },
    {
        name: "newManagerId",
        type: "input",
        message: "What is the id of the manager you are assigning?"
    }
];



module.exports = {
    mainQuestions,
    addADepartmentQuestions,
    addARoleQuestions,
    addAnEmployeeQuestions,
    updateAnEmployeeRoleQuestions,
    updateAnEmployeeManagerQuestions
};