
// Importamos los módulos necesarios
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser'; //esto no es necesario si usamos express.json()
import dotenv from 'dotenv';

// Importamos las rutas
import productRoutes from './routes/products.routes.js';
import authRoutes from './routes/auth.routes.js';

// Cargamos las variables de entorno desde el archivo .env
dotenv.config();

// Inicializamos la aplicación de Express
const app = express();
const PORT = process.env.PORT || 3000;


// Configuración de CORS para permitir cualquier origen y encabezados personalizados
//const corsOptions = {
//    origin: '*', // Permite cualquier origen
//    methods: ['GET', 'POST', 'PUT', 'DELETE'],
//    allowedHeaders: ['Content-Type', 'Authorization'], // Necesario para JWT
//};
//app.use(cors(corsOptions)); // Habilita CORS para permitir peticiones desde otros orígenes
app.use(cors()); // Habilita CORS para permitir peticiones desde otros orígenes sin opciones específicas
app.use(bodyParser.json()); // Permite recibir datos en formato JSON. tb se puede usar express.json() en lugar de bodyParser.json()

// Rutas principales
app.use('/api/products', productRoutes); // Rutas para productos protegidas con JWT

app.use('/auth', authRoutes); // Ruta pública para login

// Middleware para manejar rutas no encontradas

export const notFoundHandler = (req, res) => {
    res.status(404).json({ error: 'Ruta no encontrada' });
};
app.use(notFoundHandler);

// Iniciamos el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});
