const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ message: 'Niste autorizirani za pristup ovoj ruti' });
    }
    try {
        const decoded = jwt.verify(token, 'tajni_kljuc');
        req.userId = decoded.userId;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Neispravan ili isteknut token' });
    }
};

module.exports = authMiddleware;