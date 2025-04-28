module.exports = {
    PORT: process.env.PORT || 5500,
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/bloompop',
    JWT_SECRET: process.env.JWT_SECRET || 'your_jwt_secret',
};