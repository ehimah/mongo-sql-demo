import Sequelize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();
const username = process.env.MONGO_USER;
const secret = process.env.MONGO_PSWD;
const dbName = process.env.MONGO_DB_NAME;

const sequelize = new Sequelize(dbName, username, secret, {
  dialect: 'postgres',
  define: {
    underscored: true
  }
});

const models = {
  User: sequelize.import('./user'),
  Team: sequelize.import('./team')
};

Object.keys(models).forEach(name => {
  if ('associate' in models[name]) {
    models[name].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = sequelize;

export default models;
