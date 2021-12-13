import Joi from 'joi';
import TestType from '../../models/TestType';

interface PostSchema {
  date: Date;
  type: String;
}

export const postValidation = async () => {
  const testTypes = await TestType.find();

  return Joi.object<PostSchema>({
    date: Joi.date().required(),
    type: Joi.string()
      .equal(...testTypes.map((type) => type.name))
      .required(),
  });
};

export const resolveValidation = Joi.object({
  details: Joi.string().required(),
});
