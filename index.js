const mysql = require('mysql2/promise');

async function main() {
    const con = await mysql.createConnection({
        host: "192.168.22.121",
        user: "root",
        password: "my-pwd-ss",
        database: "mydb"
    });

    //let create_db_sql = "CREATE DATABASE IF NOT EXISTS mydb";
    const create_table_sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";

    try {
        const err = await con.execute(create_table_sql);
    } catch (error) {
        console.error(error);
    }
}

main();