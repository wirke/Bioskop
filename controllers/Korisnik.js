const jwt = require('jsonwebtoken');
const User = require('../models/Korisnik');

const userController = {
    createUser: async (req, res) => {
        try {
            const user = new User(req.body);
            await user.save();
            res.status(201).send(user);
        } catch (error) {
            res.status(400).send(error);
        }
    },

    loginUser: async (req, res) => {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(401).json({ message: 'Pogrešna email adresa ili lozinka' });
            }
            const isMatch = await user.comparePassword(password);
            if (!isMatch) {
                return res.status(401).json({ message: 'Pogrešna email adresa ili lozinka' });
            }
            const token = jwt.sign({ userId: user._id }, 'tajni_kljuc');
            res.json({ token });
        } catch (error) {
            res.status(500).json({ message: 'Došlo je do greške prilikom prijave' });
        }
    },

    getUserById: async (req, res) => {
        try {
            const user = await User.findById(req.params.id);
            if (!user) {
                return res.status(404).send();
            }
            res.send(user);
        } catch (error) {
            res.status(500).send(error);
        }
    },

    updateUser: async (req, res) => {
        const updates = Object.keys(req.body);
        const allowedUpdates = ['username', 'email', 'password'];
        const isValidOperation = updates.every(update => allowedUpdates.includes(update));

        if (!isValidOperation) {
            return res.status(400).send({ error: 'Invalid updates!' });
        }

        try {
            const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
            if (!user) {
                return res.status(404).send();
            }
            res.send(user);
        } catch (error) {
            res.status(400).send(error);
        }
    },

    deleteUser: async (req, res) => {
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            if (!user) {
                return res.status(404).send();
            }
            res.send(user);
        } catch (error) {
            res.status(500).send(error);
        }
    }
};

module.exports = userController;