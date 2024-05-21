const mongoose = require('mongoose');
const faker = require('faker');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const Movie = require('../models/movie');
const Booking = require('../models/booking');

const mongoURI = 'mongodb+srv://wiriyevich:cavuh9UCvo10rbvI@cluster0.nzgsmre.mongodb.net/Bioskop?retryWrites=true&w=majority';

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const seedDatabase = async () => {
    try {
        await mongoose.connection.dropDatabase();

        const users = [];
        for (let i = 0; i < 10; i++) {
            const hashedPassword = await bcrypt.hash('sifra123', 10);
            const user = new User({
                username: faker.internet.userName(),
                email: faker.internet.email(),
                password: hashedPassword,
            });
            users.push(user);
        }
        await User.insertMany(users);

        const movies = [];
        for (let i = 0; i < 5; i++) {
            const movie = new Movie({
                title: faker.lorem.words(3),
                director: faker.name.findName(),
                genre: faker.lorem.word(),
                image_url: faker.image.imageUrl(),
                releaseDate: faker.date.past(),
                actors: [
                    { name: faker.name.firstName(), surname: faker.name.lastName() },
                    { name: faker.name.firstName(), surname: faker.name.lastName() },
                ],
                screenings: [
                    {
                        date: faker.date.future(),
                        time: faker.time.recent(),
                        room: `Room ${faker.random.number({ min: 1, max: 10 })}`,
                        reserved_seats: [
                            { seat: `A${faker.random.number({ min: 1, max: 10 })}` },
                            { seat: `B${faker.random.number({ min: 1, max: 10 })}` },
                        ],
                    },
                ],
            });
            movies.push(movie);
        }
        await Movie.insertMany(movies);

        const bookings = [];
        for (let i = 0; i < 20; i++) {
            const booking = new Booking({
                id_user: users[faker.random.number({ min: 0, max: users.length - 1 })]._id,
                id_movie: movies[faker.random.number({ min: 0, max: movies.length - 1 })]._id,
                id_screening: movies[faker.random.number({ min: 0, max: movies.length - 1 })].screenings[0]._id,
                reserved_seats: [
                    { seat: `A${faker.random.number({ min: 1, max: 10 })}` },
                    { seat: `B${faker.random.number({ min: 1, max: 10 })}` },
                ],
            });
            bookings.push(booking);
        }
        await Booking.insertMany(bookings);

        console.log('Database seeded!');
        mongoose.connection.close();
    } catch (error) {
        console.error('Error seeding database:', error);
        mongoose.connection.close();
    }
};

seedDatabase();