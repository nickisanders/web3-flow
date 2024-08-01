import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/UserRoutes';
import { connectDB } from './database';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use('/api', userRoutes);

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();
