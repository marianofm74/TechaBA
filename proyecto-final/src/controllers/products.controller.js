import {getAll,getById,create,remove} from '../services/products.service.js';

// Obtener todos los productos
export const getAllProducts = async (req, res) => {
    try {
        const products = await getAll();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener productos', error });
    }
};

// Obtener un producto por ID
export const getProductById = async (req, res) => {
    try {
        const product = await getById(req.params.id);
        if (!product) return res.status(404).json({ message: 'Producto no encontrado' });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el producto', error });
    }
};

// Crear un nuevo producto
export const createProduct = async (req, res) => {
    try {
        const newProduct = await create(req.body);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear el producto', error });
    }
};

// Eliminar un producto
export const deleteProduct = async (req, res) => {
    try {
        const deleted = await remove(req.params.id);
        if (!deleted) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.status(200).json({ message: `Producto con ID ${req.params.id} eliminado correctamente` });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el producto', error });
    }
};
