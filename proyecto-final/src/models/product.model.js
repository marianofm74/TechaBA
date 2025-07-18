// Importamos la instancia de Firestore desde la configuración
import {db} from '../config/firebase.js';

// Importamos funciones necesarias de Firestore
import {collection,getDocs,getDoc,doc,addDoc,deleteDoc} from 'firebase/firestore';

// Creamos una referencia a la colección "products" en Firestore
const productCollection = collection(db, 'products');

// Función para obtener todos los productos
export const getAllProducts = async () => {
    // Obtenemos todos los documentos de la colección
    const snapshot = await getDocs(productCollection);
    // Mapeamos los documentos a un array de objetos con id y datos
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Función para obtener un producto por su ID
export const getProductById = async (id) => {
    // Creamos una referencia al documento con el ID especificado
    const docRef = doc(db, 'products', id);
    // Obtenemos el documento
    const docSnap = await getDoc(docRef);
    // Verificamos si existe y devolvemos los datos
    return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
};

// Función para crear un nuevo producto
export const createProduct = async (data) => {
    // Agregamos un nuevo documento a la colección con los datos recibidos
    const docRef = await addDoc(productCollection, data);
    // Devolvemos el ID generado y los datos
    return { id: docRef.id, ...data };
};

// Función para eliminar un producto por su ID
export const deleteProduct = async (id) => {
    const docRef = doc(db, 'products', id);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) {
        return false; // No existe el producto
    }
    await deleteDoc(docRef);
    return true; // Producto eliminado correctamente
};

