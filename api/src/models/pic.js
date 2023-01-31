const { Pic } = require("../db/sequelize");

module.exports = (sequelize, DataTypes) => {

    const Pic = sequelize.define('Pic', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        explanation: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        likes: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        }
        
    })
 

    return Pic
}
