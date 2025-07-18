import {getAllProducts,getProductById,createProduct,deleteProduct} from '../models/product.model.js';

// Obtener todos los productos
export const getAll = async () => {
    return await getAllProducts();
};
// Obtener un producto por ID
export const getById = async (id) => {
    return await getProductById(id);
};
// Crear un nuevo producto
export const create = async (productData) => {
    return await createProduct(productData);
};
// Eliminar un producto por ID
export const remove = async (id) => {
    return await deleteProduct(id);
};
