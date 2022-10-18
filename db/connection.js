const mysql = require(`mysql2`);

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employee_db'
});


db.connect((err) => {
    if (err) return console.log(err);
    console.log(`Connected to mysql.`)
});


module.exports = {db: db };