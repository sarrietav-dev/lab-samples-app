import { Router } from 'express';
import TestType from '../models/TestType';
import { testTypeValidation } from './validation/test-types.validation';

const router = Router();

router.post('/', async (req, res) => {
  const { error } = testTypeValidation.validate(req.body);

  if (error) return res.status(400).json({ message: error.message });

  const { name } = req.body;

  const testTypesWithTheSameName = await TestType.find({
    name: { $regex: name, $options: 'i' },
  });

  if (testTypesWithTheSameName.length !== 0)
    return res.status(409).json({
      message: "There's a test whose name is equal to the given test",
    });

  const testType = new TestType({
    name,
    activeTests: 0,
  });

  await testType.save();

  res.status(201).send();
});

export default router;
