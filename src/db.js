
const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: '12345',
    database: 'productsdb',
    port: '5432',
});

module.exports = pool;