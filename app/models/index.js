const config = require('../config/db');
const sequelize = require('sequelize');

const datatype = new sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect
    }

);