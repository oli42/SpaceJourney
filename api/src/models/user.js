const { User } = require("../db/sequelize");

module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // myPics: { 
        //     type: DataTypes.STRING, 
        //     get: function() {
        //         return JSON.parse(this.getDataValue('myPics'));
        //     }, 
        //     set: function(val) {
        //         return this.setDataValue('myPics', JSON.stringify(val));
        //     }
        // }
    },
    {
        timestamps: true,
        createdAt: 'created',
        updatedAt: false
    }); 

    return User
}