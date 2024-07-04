import Joi from 'joi';

export const registerUserSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().min(3).email().required(),
  password: Joi.string().min(3).max(20).required(),
});
