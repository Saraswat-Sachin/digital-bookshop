import bcrypt from 'bcrypt'

const users = [
    {
        name: 'Admin User',
        email: 'admin@gmail.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Sachin',
        email: 'sachin@gmail.com',
        password: bcrypt.hashSync('123456', 10),
    }
    ,
    {
        name: 'Batla',
        email: 'balta@gmail.com',
        password: bcrypt.hashSync('123456', 10),
    }
    ,
    {
        name: 'Blacky',
        email: 'blacky@gmail.com',
        password: bcrypt.hashSync('123456', 10),
    }
]
export default users