import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  loginUserController,
  logoutUserController,
  refreshUserSessionController,
  registerUserController,
} from '../controllers/auth.js';
import { validateBody } from '../middlewares/validateBody.js';
import { registerUserSchema } from '../validation/registerUsersSchema.js';
import { loginUserSchema } from '../validation/loginUsersSchema.js';
import { authenticate } from '../middlewares/authenticate.js';

const authRouter = Router();

authRouter.post(
  '/register',
  validateBody(registerUserSchema),
  ctrlWrapper(registerUserController),
);
authRouter.post(
  '/login',
  validateBody(loginUserSchema),
  ctrlWrapper(loginUserController),
);
authRouter.post(
  '/refresh',
  // authenticate,
  ctrlWrapper(refreshUserSessionController),
);
authRouter.post('/logout', authenticate, ctrlWrapper(logoutUserController));

export default authRouter;
