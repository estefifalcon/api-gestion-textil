import express from 'express';
import {
  getAllProveedores,
  getProveedorById,
  createProveedor,
  updateProveedor,
  deleteProveedor
} from '../controllers/proveedoresController.js';
import { verifyToken } from '../middlewares/auth.js';

const router = express.Router();

router.get('/', verifyToken, getAllProveedores);
router.get('/:id', verifyToken, getProveedorById);
router.post('/', verifyToken, createProveedor);
router.put('/:id', verifyToken, updateProveedor);
router.delete('/:id', verifyToken, deleteProveedor);

export default router;
