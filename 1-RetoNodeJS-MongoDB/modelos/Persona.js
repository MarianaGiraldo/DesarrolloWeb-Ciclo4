const mongoose = require('mongoose');

let PersonaSchema = new mongoose.Schema({
    idPersona: Number,
    tipoDocumentoPersona: String,
    documentoPersona: String,
    nombresPersona: String,
    apellidosPersona: String,
    direccionPersona: String,
    emailPersona: String,
    telFijoPersona: String,
    telCelPersona: String,
    urlSitioWebPersona: String,
    descPerfilPersona: String
});

module.exports = mongoose.model('Persona', PersonaSchema, 'Personas')