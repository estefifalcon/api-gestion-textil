import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();

router.post('/', (req, res) => {
  const { user, pass } = req.body;
  if (user === 'admin' && pass === '1234') {
    const token = jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return res.json({ token });
  }
  res.status(401).json({ msg: 'Credenciales inválidas' });
});

export default router;
