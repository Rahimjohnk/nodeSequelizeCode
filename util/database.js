// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'node-complete',
//     password: 'void main',
// });

// module.exports = pool.promise();

// sequelize connect

const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'void main', {
    dialect: 'mysql',
    host: 'localhost',
});

module.exports = sequelize;