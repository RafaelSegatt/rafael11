module.exports = (sequelize, Sequelize) => {
    const users = sequelize.define('users',{
        name:{
            type: Sequelize.STRING,
        },
        birth_Date: {
            type: Sequelize.STRING
        },
        email:{
            type:Sequelize.STRING
        },
        cpf:{
            type: Sequelize.STRING
        },
    })

    return users
}