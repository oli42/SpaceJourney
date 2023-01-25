const { User } = require('../db/sequelize')
const bcrypt = require('bcrypt')


module.exports = (app) => {
    app.post('/createUser', async (req, res)=> {
        
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        
        req.body.password = hashedPassword;
        
        User.create(req.body)
        .then(user => {
            const message = `${req.body.firstName} created`
            res.json({ message, data: user})
        })
    })
}