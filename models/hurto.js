const { Schema, model } = require('mongoose');

const hurtoSchema = Schema({
  direccion: { type: String, required: [true, 'La dirección es obligatoria'] },
  latitud: {type: Number,required: [true, 'La latitud es obligatoria'],min: 6.13,max: 6.217,},
  longitud: {type: Number,required: [true, 'La longitud es obligatoria'],min: -75.567,max: -75.34,},
  descripcion: { type: String, required: [true, 'La descripción es obligatoria'] },
  fecha: { type: Date, default: Date.now },
});

module.exports = model('Hurto', hurtoSchema);
