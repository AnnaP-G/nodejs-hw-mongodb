import Joi from 'joi';

export const reqResetEmailSchema = Joi.object({
  email: Joi.string().email().required(),
});
