import express from 'express';
import { check, validationResult } from 'express-validator';

var userRouter = express.Router();

userRouter.get('/', (req, res) => {
  res.send('It works!');
});

userRouter.post(
  '/',
  [
    check('username', 'Username must be present')
      .not()
      .isEmpty(),
    check('email', 'Please supply valid email').isEmail()
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }

    return res.json({
      message: 'All good'
    });
  }
);

export default userRouter;
