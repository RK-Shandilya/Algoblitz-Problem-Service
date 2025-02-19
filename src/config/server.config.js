process.loadEnvFile()

export default {
    PORT: process.env.PORT || 3000,
    ATLAS_DB_URL : process.env.ATLAS_DB_URL,
    NODE_ENV: process.env.NODE_ENV || 'development'
};