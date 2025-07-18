
import jwt from 'jsonwebtoken';


// Usuario simulado (esto podría venir de una base de datos o Firebase Auth)
const mockUser = {
    username: 'admin',
    password: '123456',
};

export const authenticateUser = (username, password) => {
    if (username === mockUser.username && password === mockUser.password) {
        const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return { token };
    } else {
        return null;
    }
};
