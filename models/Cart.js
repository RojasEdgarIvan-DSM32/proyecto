const { DataTypes } = require('sequelize');
const sequelize = require('../config/config')

const Cart = sequelize.define('Cart', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    pr_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    price: {
        type: DataTypes.DECIMAL(10,2),
        allowNull:false,
    },
});

module.exports = Cart;