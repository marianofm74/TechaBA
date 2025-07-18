// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Importamos la función para obtener Firestore
import { getFirestore } from 'firebase/firestore';

// Importamos dotenv para leer variables de entorno
import dotenv from 'dotenv';
dotenv.config(); // Cargamos las variables de entorno

// Configuración de Firebase usando variables de entorno
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};

// Inicializamos la app de Firebase
const app = initializeApp(firebaseConfig);

// Obtenemos la instancia de Firestore
const db = getFirestore(app);

// Exportamos la instancia para usarla en otros archivos
export {db};
