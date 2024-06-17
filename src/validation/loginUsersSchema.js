import Joi from 'joi';

export const loginUserSchema = Joi.object({
  email: Joi.string().min(3).max(20).email().required(),
  password: Joi.string().min(3).max(20).required(),
});
