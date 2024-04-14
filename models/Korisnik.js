const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    bookings: [{
        movie_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Movie',
            required: true
        },
        showtime_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        seats_booked: [{
            type: String,
            required: true
        }]
    }]
});

userSchema.pre('save', async function (next) {
    const user = this;
    if (user.isModified('password')) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
    }
    next();
});

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;