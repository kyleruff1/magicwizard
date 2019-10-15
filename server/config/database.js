require('dotenv').config();

export default {
    client: process.env.DB_CLIENT,
    connection: {
        host: process.env.DB_HOST || 'uc13jynhmkss3nve.cbetxkdyhwsb.us-east-1.rds.amazonaws.com0',
        user: process.env.DB_USER || 'clglgrpexjcx38eb',
        password: process.env.DB_PASSWORD || 'bju3ukes6vvevxl3',        
        database: process.env.DB_NAME, 
        charset: 'utf8',
        socketPath: process.env.SOCKET_PATH,
    },
    migrations: {
        tableName: 'migrations',
        directory: process.cwd() + '/server/migrations',
    },
    debug: true
};