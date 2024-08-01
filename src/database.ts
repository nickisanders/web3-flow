import { createConnection } from 'typeorm';
import { User } from './models/User';
 
export const connectDB = async () => {
  await createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'user',
    password: 'password',
    database: 'database',
    entities: [User],
    synchronize: true,
  });
};
