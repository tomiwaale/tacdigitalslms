export const config = {
  port: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  jwtSecret: process.env.JWT_SECRET || 'your-secret-key',
  dbUrl: process.env.DATABASE_URL || 'sqlite:./data/db.sqlite',
  bcryptRounds: 10,
};