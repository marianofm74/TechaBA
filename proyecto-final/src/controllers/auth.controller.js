
import { authenticateUser } from '../services/auth.service.js';

export const login = (req, res) => {
    const { username, password } = req.body;
    const result = authenticateUser(username, password);

    if (result) {
        res.json(result);
    } else {
        res.status(401).json({ error: 'Credenciales inválidas' });
    }
};
