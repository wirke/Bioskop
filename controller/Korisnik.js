const User = require('../models/user');

const userController = {
    // Kreiranje novog korisnika
    createUser: async (req, res) => {
        try {
            const user = new User(req.body);
            await user.save();
            res.status(201).send(user);
        } catch (error) {
            res.status(400).send(error);
        }
    },

    // Prijavljivanje korisnika
    loginUser: async (req, res) => {
        // Implementacija funkcije za prijavljivanje korisnika
    },

    // Dohvaćanje informacija o korisniku
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

    // Ažuriranje podataka korisnika
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

    // Brisanje korisnika
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
