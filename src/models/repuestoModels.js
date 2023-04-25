const {Schema, model} = require('mongoose');

const RepuestoSchema = Schema({
    name: {
        type: String,
        require: true 
    },

    lado: {
        type: String,
        enum: ['not', 'derecho', 'izquierdo'],
        default: 'not'
    },

    auto: {
        type: String,
        enum: ['R9', 'R11', 'R12', 'R18', 'R19', 'CLIO', 'LOGAN', 'SANDERO', 'DUSTER'],
        default: 'No definido'
    },

    tipo: {
        type: String,
        enum: ['original', 'alternativo', 'not'],
        default: 'not'
    },

    precio: {
        type: Number,
        require: true
    }
});

const RepuestoModel = model('Repuesto', RepuestoSchema);

module.exports = RepuestoModel;