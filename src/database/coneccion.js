import { createPool } from 'mysql2/promise.js';
import { DB_HOST, DB_PASSWORD, DB_USER, DB_PORT, DB_DATA } from '../config.js'

export const pool = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATA,
    port: DB_PORT
});