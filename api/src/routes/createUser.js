const { User } = require('../db/sequelize')
const bcrypt = require('bcrypt')


module.exports = (app) => {
    app.post('/createUser', async (req, res)=> {

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        User.findAll({ where:{
            lastName: req.body.lastName,
            email: req.body.email,
        }})
        .then(user => {
            if (user){
                const message = 'This user already exists';
                return res.json({ message, data: user})
            }
            else{
                
                req.body.password = hashedPassword;
                
                User.create(req.body)
                .then(user => {
                    if (user){
                        const message = `${req.body.firstName} created`
                        return res.json({ message, data: user})
                    }
                })
            }
        
        })
    })
}