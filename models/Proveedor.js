import mongoose from 'mongoose';

const proveedorSchema = new mongoose.Schema({
  nombre: String,
  ciudad: String,
  rubro: String,
  email: String,
  telefono: String
});

export default mongoose.model('Proveedor', proveedorSchema);
