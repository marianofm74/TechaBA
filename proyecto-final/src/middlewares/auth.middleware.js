
import jwt from 'jsonwebtoken';

// Middleware para verificar el token JWT
export const verifyToken = (req, res, next) => {
    // Obtenemos el token del encabezado Authorization
    const authHeader = req.headers['authorization'];    
    const token = authHeader && authHeader.split(' ')[1]; // Bearer <token>
    // Si no hay token, respondemos con un error 401
    if (!token) {
        return res.status(401).json({ error: 'Token no proporcionado' });
    }

    try {
        // Verificamos el token usando la clave secreta del entorno JWT_SECRET 
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Guardamos el usuario en la request
        next(); // Continuamos con la siguiente función
    } catch (error) {
        res.status(403).json({ error: 'Token inválido' });
    }
};
