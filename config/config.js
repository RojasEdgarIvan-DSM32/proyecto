const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'mysql',
    port: process.env.PORT,
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    logging: false,
});

module.exports = sequelize;
