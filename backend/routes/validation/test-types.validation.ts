import Joi from 'joi';

export const testTypeValidation = Joi.object<{ name: string }>({
  name: Joi.string().required(),
});
