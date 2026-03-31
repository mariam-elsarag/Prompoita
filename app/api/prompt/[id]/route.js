import Prompt from "@models/prompt";
import { connectDB } from "@utils/database";

export const GET = async (request, context) => {
  try {
    await connectDB();
    const { id } = await context.params;
    const prompt = await Prompt.findById(id);

    if (!prompt) {
      return new Response(JSON.stringify("Prompt Not Found"), { status: 404 });
    }
    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify("Failed to fetch  prompts"), {
      status: 500,
    });
  }
};

// update
export const PATCH = async (request, context) => {
  try {
    const { id } = await context.params;
    const { prompt, tag } = await request.json();
    await connectDB();
    const existingPrompt = await Prompt.findById(id);
    if (!existingPrompt) {
      return new Response(JSON.stringify("Prompt Not Found"), { status: 404 });
    }
    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;
    await existingPrompt.save();
    return new Response(JSON.stringify(existingPrompt), { status: 200 });
  } catch (err) {
    console.log("error updating prompts", err);
    return new Response("Failed to update prompt", { status: 500 });
  }
};

// delete
export const DELETE = async (request, context) => {
  try {
    const { id } = await context.params;
    await connectDB();
    const prompt = await Prompt.findByIdAndDelete(id);
    console.log(prompt);
    if (!prompt) {
      return Response(JSON.stringify("Prompt Not Found"), { status: 404 });
    }
    return Response(JSON.stringify("Prompt deleted"), { status: 204 });
  } catch (err) {
    console.log("Error while deleting prompt", err);
  }
};
