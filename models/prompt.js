import { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
  creator: {
    ref: "User",
    type: Schema.Types.ObjectId,
    required: [true, "creator is reqquired"],
  },
  prompt: {
    type: String,
    required: [true, "Prompt is required."],
  },
  tag: {
    type: String,
    required: [true, "Tag is required."],
  },
});

const Prompt = models.Prompt || model("Prompt", PromptSchema);

export default Prompt;
