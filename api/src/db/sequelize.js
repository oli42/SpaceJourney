const { Sequelize, DataTypes } = require('sequelize')
let UserModel = require('../models/user')


const sequelize = new Sequelize('nasa','root','',
    {
        host: 'localhost',
        dialect: 'mariadb',
        dialectOptions: {
            timezone: 'Etc/GMT-2'
        },
        logging: true
    }
)

const User = UserModel(sequelize, DataTypes)

const initDb = () => {

   return  sequelize.sync({force:true})
    .then(_=> console.log('DB synchronized'))
}

module.exports = {
    initDb, User
}