import express from 'express';
import {
  getAllPedidos,
  getPedidoById,
  updatePedido,
  deletePedido,
  createPedido 
} from '../controllers/pedidosControllers.js';
import { verifyToken } from '../middlewares/auth.js';

const router = express.Router();

router.get('/', verifyToken, getAllPedidos);
router.get('/:id', verifyToken, getPedidoById);
router.post('/', verifyToken, createPedido); 
router.put('/:id', verifyToken, updatePedido);
router.delete('/:id', verifyToken, deletePedido);

export default router;