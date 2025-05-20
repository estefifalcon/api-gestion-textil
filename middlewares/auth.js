import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const verifyToken = (req, res, next) => {
  console.log("Middleware verifyToken activado");

  const token = req.headers['authorization'];
  console.log("Header Authorization recibido:", token);

  if (!token) {
    console.log("No llegó el token");
    return res.status(403).json({ msg: 'Token requerido' });
  }

  try {
    const decoded = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);
    console.log("Token verificado con éxito:", decoded);
    req.user = decoded;
    next();
  } catch (err) {
    console.log("Token inválido:", err.message);
    res.status(401).json({ msg: 'Token inválido' });
  }
};
