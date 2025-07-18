
import express from 'express';
import { verifyToken } from '../middlewares/auth.middleware.js';
import {getAllProducts,getProductById,createProduct,deleteProduct} from '../controllers/products.controller.js';

const router = express.Router();

// Ruta protegida: obtener todos los productos
router.get('/', getAllProducts);

// Ruta protegida: obtener un producto por ID
router.get('/:id', getProductById);


// Ruta protegida: crear un nuevo producto
router.post('/create', verifyToken, createProduct);

// Ruta protegida: eliminar un producto
router.delete('/:id', verifyToken, deleteProduct);

// Exportamos el router para usarlo en el archivo principal de la aplicación
export default router;
