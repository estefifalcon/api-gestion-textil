import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url"; 
import { connectDB } from "./db.js";
import productosRoutes from './routes/productosRoutes.js';
import pedidosRoutes from "./routes/pedidosRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import proveedoresRoutes from "./routes/proveedoresRoutes.js";



dotenv.config();
const app = express();
connectDB();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "views")));
app.use("/css", express.static(path.join(__dirname, "css"))); 

app.use(cors());
app.use(express.json());

app.use('/api/productos', productosRoutes);
app.use("/api/pedidos", pedidosRoutes);
app.use("/api/login", authRoutes);
app.use("/api/proveedores", proveedoresRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
);