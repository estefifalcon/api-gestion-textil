import Proveedor from '../models/Proveedor.js';

export const getAllProveedores = async (req, res) => {
  try {
    const { nombre, ciudad, rubro } = req.query;

    const filtro = {};
    if (nombre) filtro.nombre = { $regex: nombre, $options: 'i' };
    if (ciudad) filtro.ciudad = ciudad;
    if (rubro) filtro.rubro = rubro;

    const proveedores = await Proveedor.find(filtro);
    res.json(proveedores);
  } catch (error) {
    res.status(500).json({ msg: 'Error al obtener proveedores' });
  }
};

export const getProveedorById = async (req, res) => {
  try {
    const proveedor = await Proveedor.findById(req.params.id);
    if (!proveedor) return res.status(404).json({ msg: 'Proveedor no encontrado' });
    res.json(proveedor);
  } catch (error) {
    res.status(500).json({ msg: 'Error al buscar proveedor' });
  }
};

export const createProveedor = async (req, res) => {
  try {
    const nuevo = new Proveedor(req.body);
    const guardado = await nuevo.save();
    res.status(201).json(guardado);
  } catch (error) {
    res.status(400).json({ msg: 'Error al crear proveedor' });
  }
};

export const updateProveedor = async (req, res) => {
  try {
    const actualizado = await Proveedor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!actualizado) return res.status(404).json({ msg: 'Proveedor no encontrado' });
    res.json(actualizado);
  } catch (error) {
    res.status(500).json({ msg: 'Error al actualizar proveedor' });
  }
};

export const deleteProveedor = async (req, res) => {
  try {
    const eliminado = await Proveedor.findByIdAndDelete(req.params.id);
    if (!eliminado) return res.status(404).json({ msg: 'Proveedor no encontrado' });
    res.json({ msg: 'Proveedor eliminado' });
  } catch (error) {
    res.status(500).json({ msg: 'Error al eliminar proveedor' });
  }
};
