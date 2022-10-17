const mysql = require(`mysql2`);
const inquirer = require(`inquirer`);

mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employee_db'
},
(err)=>{
    if(err)throw err;
    console.log(`Connected to mysql.`)
})

const init = () => {

};

init();