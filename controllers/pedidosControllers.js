import Pedido from '../models/Pedido.js';

export const getAllPedidos = async (req, res) => {
  try {
    const {
      cliente,
      producto,
      estado,
      sort = 'cliente',
      order = 'asc',
      skip = 0,
      limit = 10
    } = req.query;

    const filtro = {};
    if (cliente) filtro.cliente = new RegExp(cliente, 'i');
    if (producto) filtro['productos.nombre'] = new RegExp(producto, 'i');
    if (estado) filtro.estado = estado;

    const pedidos = await Pedido.find(filtro)
      .populate('proveedorId')
      .sort({ [sort]: order === 'asc' ? 1 : -1 })
      .skip(Number(skip))
      .limit(Number(limit));

    res.json(pedidos);
  } catch (error) {
    console.error("Error al obtener pedidos:", error.message);
    res.status(500).json({ msg: 'Error al obtener los pedidos' });
  }
};

export const getPedidoById = async (req, res) => {
  try {
    const pedido = await Pedido.findById(req.params.id).populate('proveedorId');
    if (!pedido) return res.status(404).json({ msg: 'Pedido no encontrado' });
    res.json(pedido);
  } catch (error) {
    res.status(500).json({ msg: 'Error al buscar pedido' });
  }
};

export const createPedido = async (req, res) => {
  try {
    const nuevoPedido = new Pedido(req.body);
    const pedidoGuardado = await nuevoPedido.save();
    res.status(201).json(pedidoGuardado);
  } catch (error) {
    console.error("Error al crear pedido:", error.message);
    res.status(500).json({ msg: 'Error al crear pedido' });
  }
};

export const updatePedido = async (req, res) => {
  try {
    const actualizado = await Pedido.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!actualizado) return res.status(404).json({ msg: 'Pedido no encontrado' });
    res.json(actualizado);
  } catch (error) {
    res.status(500).json({ msg: 'Error al actualizar pedido' });
  }
};

export const deletePedido = async (req, res) => {
  try {
    const eliminado = await Pedido.findByIdAndDelete(req.params.id);
    if (!eliminado) return res.status(404).json({ msg: 'Pedido no encontrado' });
    res.json({ msg: 'Pedido eliminado' });
  } catch (error) {
    res.status(500).json({ msg: 'Error al eliminar pedido' });
  }
};
