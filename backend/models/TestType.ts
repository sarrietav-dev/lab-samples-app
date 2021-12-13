import { Schema, model } from 'mongoose';

interface TestType {
  name: string;
  activeTests: number;
}

const TestTypeSchema = new Schema<TestType>({
  name: { type: Schema.Types.String, required: true },
  activeTests: { type: Schema.Types.Number, default: 0 },
});

export default model<TestType>('TestType', TestTypeSchema);
