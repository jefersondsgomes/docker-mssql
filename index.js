const sql = require('mssql');

const config = {
    user: 'sa',
    password: 'jfrsn_123',
    server: "localhost",
    database: "msdb",
    options: {
        enableArithBort: true
    }
};

const run = async () => {
    let pool;

    try {
        console.log("Connection Openin...");
        pool = await sql.connect(config)
        await sql.query`CREATE TABLE users (id INT, name NVARCHAR(60), email NVARCHAR(100));`;
        await sql.query`INSERT INTO users VALUES (1, 'Jeferson Gomes', 'jefersondsgomes@gmail.com')`;
        const { recordset } = await sql.query`select * from users;`;
        console.log(recordset);
    } catch (err) {
        console.log(err);
    } finally {
        await pool.close();
        console.log("Connection closed.")
    }
};

run();