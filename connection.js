const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/form');

const objectDB = mongoose.connection
objectDB.on('connected', () => {
    console.log('conectado exitosamente a mongoDB')
})
objectDB.on('error', () => {
    console.log('error en la conexión a mongoDB')
})

module.exports = mongoose