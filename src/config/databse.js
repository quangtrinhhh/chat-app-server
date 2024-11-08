require('dotenv').config();
const mysql = require('mysql2/promise');

const db = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
    idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0,
});

// Kiểm tra kết nối
const testConnection = async () => {
    try {
        const connection = await db.getConnection();
        console.log('Kết nối đến cơ sở dữ liệu thành công!');
        connection.release(); // Giải phóng kết nối
    } catch (error) {
        console.error('Lỗi kết nối đến cơ sở dữ liệu:', error);
    }
};

// Gọi hàm kiểm tra kết nối
testConnection();

module.exports = db;