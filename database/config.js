const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        await mongoose.connect( process.env.MONGODB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log("Base de Datos Conectada.");
    } catch (error) {
        console.error(error);
        throw new Error(`Error en la Base de Datos.`);
    }
}

module.exports = {
    dbConnection
}