const { Schema, model } = require('mongoose');

const HoursScheme = Schema({
    cod_emp: {
        type: String,
        required: [true, 'El Codigo del Empleado es Obligatorio']
    },
    name_user: {
        type: String,
        required: [true, 'El Nombre de Usuario es Obligatorio']
    },
    number_case: {
        type: String,
        required: [true, 'El Numero de Caso es Obligatorio']
    },
    initial_date: {
        type: Date,
        required: [true, 'El Fecha de Inicio es Obligatorio']    
    },
    approval: {
        type: Boolean,
        default: false
    },
}, { timestamps: { createdAt: 'created_at' } })

module.exports = model('HoraExtra', HoursScheme);