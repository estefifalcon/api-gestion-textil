import mongoose from 'mongoose';

const pedidoSchema = new mongoose.Schema({
  cliente: String,
  fecha: Date,
  estado: String,
  productos: [{ nombre: String, cantidad: Number }],
  proveedorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Proveedor' }
});

export default mongoose.model('Pedido', pedidoSchema);
