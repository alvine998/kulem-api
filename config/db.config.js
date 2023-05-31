module.exports = {
    HOST: "localhost",
    USER: "kulem4401",
    PASSWORD: "kulem1234",
    DB: "db_kulem",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};