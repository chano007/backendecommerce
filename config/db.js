import _mysql from 'mysql2';

const pool = _mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'curso_desarrollo',
    waitForConnections: true,
    connectionLimit:2,
    queueLimit:0
});

export default pool;

