# 🧶 API de Gestión Textil

API REST para la gestión de **productos**, **proveedores** y **pedidos** del sector textil. Todas las rutas están protegidas mediante autenticación con **JWT**.

## 🚀 Tecnologías

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Nodemon](https://nodemon.io/)
- [JWT (JSON Web Token)](https://jwt.io/)

## 📁 Estructura del Proyecto

```
/api
  /productos
  /proveedores
  /pedidos
/public
  /css/styles.css
index.html
server.js
```

## 🔧 Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tuusuario/api-gestion-textil.git
   cd api-gestion-textil
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor con Nodemon:
   ```bash
   npx nodemon server.js
   ```

4. El servidor correrá en `http://localhost:3000` (puerto configurable).

## 🔐 Autenticación

Todas las rutas requieren autenticación mediante **JWT**.

- **POST** `/api/login` → Obtener token de autenticación.

## 📦 Endpoints

### 🧵 Productos

- `GET /api/productos` → Listar todos los productos  
- `GET /api/productos/:id` → Obtener un producto específico  
- `POST /api/productos` → Crear un nuevo producto  
- `PUT /api/productos/:id` → Actualizar un producto  
- `DELETE /api/productos/:id` → Eliminar un producto  

### 🏭 Proveedores

- `GET /api/proveedores` → Listar todos los proveedores  
- `GET /api/proveedores/:id` → Obtener un proveedor específico  
- `POST /api/proveedores` → Crear un nuevo proveedor  
- `PUT /api/proveedores/:id` → Actualizar un proveedor  
- `DELETE /api/proveedores/:id` → Eliminar un proveedor  

### 📦 Pedidos

- `GET /api/pedidos` → Listar todos los pedidos  
- `GET /api/pedidos/:id` → Obtener un pedido específico  
- `POST /api/pedidos` → Crear un nuevo pedido  
- `PUT /api/pedidos/:id` → Actualizar un pedido  
- `DELETE /api/pedidos/:id` → Eliminar un pedido  

## 👩‍💻 Autores

- **Falcón Estefanía**
- **Paré Elizabeth**

**Materia:** Aplicaciones Híbridas  
**Docente:** Camila Marcos Galbán  
**Comisión:** DWN4AP
