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
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nbrPics: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        lastUrl: {
            type: DataTypes.STRING,
            allowNull: true,

        }

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
        updatedAt: false,
        // indexes: [
        //   {unique:true, fields:['firstName']},
        //   {unique:true, fields:['lastName']},
        //   {unique:true, fields:['email']},
        //   {unique:true, fields:['password']}
        // ]
    }); 
    
    
    return User
}