import mysql from 'mysql2'

export const pool = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'root', 
    database: 'estoque_db'
})