import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@email.com',
        password: bcrypt.hashSync('998989', 10),
        isAdmin: true,
    },
    {
        name: 'vignesh',
        email: 'vignesh@email.com',
        password: bcrypt.hashSync('998989', 10),
        isAdmin: false,
    },
    {
        name: 'aravind',
        email: 'aravind@email.com',
        password: bcrypt.hashSync('998989', 10),
        isAdmin: false,
    },
    {
        name: 'Rejay',
        email: 'rejay@email.com',
        password: bcrypt.hashSync('998989', 10),
        isAdmin: false,
    },
];

export default users;