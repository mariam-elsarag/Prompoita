import Prompt from "@models/prompt";
import { connectDB } from "@utils/database";

export const GET = async (req, context) => {
  try {
    await connectDB();
    const { id } = await context.params;

    const prompts = await Prompt.find({ creator: id }).populate("creator");

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};
