import express from 'express';
import {
  getAllProductos,
  getProductoById,
  createProducto,
  updateProducto,
  deleteProducto
} from '../controllers/productosController.js';
import { verifyToken } from '../middlewares/auth.js';

const router = express.Router();

router.get('/', verifyToken, getAllProductos);
router.get('/:id', verifyToken, getProductoById);     // 🆕
router.post('/', verifyToken, createProducto);
router.put('/:id', verifyToken, updateProducto);      // 🆕
router.delete('/:id', verifyToken, deleteProducto);

export default router;
