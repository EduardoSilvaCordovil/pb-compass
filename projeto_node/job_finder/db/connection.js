const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialetic: 'sqlite',
    storage: './db/app.db'
});

module.exports = sequelize;
