import { Schema, model } from "mongoose";

const TestTypeSchema = new Schema({
  name: String,
});

export default model("TestType", TestTypeSchema);
