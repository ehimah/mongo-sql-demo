import express from 'express';

import models from './models';
import userRouter from './routes/users';

const app = express();
const PORT = process.env.PORT || 1234;

app.use(express.json({ extended: false }));

app.use('/api/users', userRouter);

models.sequelize.sync({}).then(() => {
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
});
