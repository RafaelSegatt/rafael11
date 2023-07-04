module.exports = (sequelize, Sequelize) => {
    const services = sequelize.define('services',{
        nameService:{
            type: Sequelize.STRING,
        },
        price: {
            type: Sequelize.STRING
        },
        duration:{
            type:Sequelize.STRING
        },
    })

    return services
}