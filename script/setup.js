const pgp = require('pg-promise')();

const connectionParams = {
  host: 'postgres',
  port: 5432,
  user: 'user',
  password: 'test',
};

const db = pgp(connectionParams);

return db.task()