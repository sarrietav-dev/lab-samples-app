import Joi from 'joi';

export const signUpSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const logInSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
