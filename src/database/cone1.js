
import  {createPool}  from 'mysql2/promise.js';

export const pool = createPool ({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bolsatrabajo2',
    port: '3306'

});

//para produccion instalar =npm i dotenv



