const mysql = require(`mysql2`);

const dbCreate = ()=>{ return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employee_db'
})};

const connect = () =>{
    db.connect((err) => {
        if (err) return console.log(err);
        console.log(`Connected to mysql.`)
        init();
    });
};

module.exports = {
    dbCreate,
    connect
};