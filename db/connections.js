const mysql = require(`mysql2`);
const init = require(`./index`)
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employee_db'
},
(err)=>{
    if(err)throw err;
    console.log(`Connected to mysql.`)
});

const viewAllDepartments = () =>{
db.query(``, () =>{
    
});
init();
};
const viewAllRoles = () =>{
db.query(``, () =>{
    
});
init();
};
const viewAllEmployees = () =>{
db.query(``, () =>{
    
});
init();
};
const addADepartment = () =>{
db.query(``, () =>{
    
});
init();
};
const addARole = () =>{
db.query(``, () =>{
    
});
init();
};
const AddAnEmployee = () =>{
db.query(``, () =>{
    
});
init();
};
const updateAnEmployeeRole = () =>{
db.query(``, () =>{
    
});
init();
};

module.exports = {
    viewAllDepartments,
    viewAllRoles,
    viewAllEmployees,
    addADepartment,
    addARole,
    AddAnEmployee,
    updateAnEmployeeRole
};