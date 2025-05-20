import mongoose from 'mongoose';

const productoSchema = new mongoose.Schema({
  titulo: String,
  descripcion: String,
  precio: Number,
  categoria: String
});

export default mongoose.model('Producto', productoSchema);
