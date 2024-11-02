import { Sequelize } from 'sequelize';
import { config } from './config';

export const sequelize = new Sequelize(config.dbUrl, {
  logging: config.nodeEnv === 'development',
});

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Unable to connect to database:', error);
    throw error;
  }
};