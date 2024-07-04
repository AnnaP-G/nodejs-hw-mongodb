import Joi from 'joi';

export const loginUserSchema = Joi.object({
  email: Joi.string().min(3).email().required(),
  password: Joi.string().min(3).required(),
});
