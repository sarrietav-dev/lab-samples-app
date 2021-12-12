import { Schema, model } from 'mongoose';

interface TestType {
  name: string;
  activeTests: number;
}

const TestTypeSchema = new Schema<TestType>({
  name: Schema.Types.String,
  activeTests: Schema.Types.Number,
});

export default model<TestType>('TestType', TestTypeSchema);
