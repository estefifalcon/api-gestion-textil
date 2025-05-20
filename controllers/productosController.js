import Producto from '../models/Producto.js';

export const getAllProductos = async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ msg: 'Error al obtener productos' });
  }
};

export const createProducto = async (req, res) => {
  try {
    const nuevo = new Producto(req.body);
    const guardado = await nuevo.save();
    res.status(201).json(guardado);
  } catch (error) {
    res.status(400).json({ msg: 'Error al crear producto' });
  }
};

export const getProductoById = async (req, res) => {
    try {
      const producto = await Producto.findById(req.params.id);
      if (!producto) return res.status(404).json({ msg: 'Producto no encontrado' });
      res.json(producto);
    } catch (error) {
      res.status(500).json({ msg: 'Error al buscar producto' });
    }
  };
  
  export const updateProducto = async (req, res) => {
    try {
      const actualizado = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!actualizado) return res.status(404).json({ msg: 'Producto no encontrado' });
      res.json(actualizado);
    } catch (error) {
      res.status(500).json({ msg: 'Error al actualizar producto' });
    }
  };
  

export const deleteProducto = async (req, res) => {
    try {
      const eliminado = await Producto.findByIdAndDelete(req.params.id);
      if (!eliminado) {
        return res.status(404).json({ msg: 'Producto no encontrado' });
      }
      res.json({ msg: 'Producto eliminado con éxito' });
    } catch (error) {
      res.status(500).json({ msg: 'Error al eliminar el producto' });
    }
  };
  