import * as dotenv from 'dotenv'
dotenv.config()

import mysql from 'mysql2'



export const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: process.env.LOCAL_PASSWORD,
    database: 'blog'
})

