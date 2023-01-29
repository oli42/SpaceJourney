const { Sequelize, DataTypes } = require('sequelize')
let UserModel = require('../models/user')
let PicModel = require('../models/pic')

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
const Pic = PicModel(sequelize, DataTypes)

User.hasMany(Pic)
Pic.belongsTo(User)

const initDb = () => {

//    return  sequelize.sync()
   return  sequelize.sync({alter:true})
    .then(_=> console.log('DB synchronized'))
}

module.exports = {
    initDb, User, Pic
}