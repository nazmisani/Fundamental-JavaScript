const pg = require("pg");
const { Pool } = pg;

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "1510Nazmi",
  port: "5432",
  database: "training",
  idleTimeoutMillis: 1000,
});

module.exports = pool;
