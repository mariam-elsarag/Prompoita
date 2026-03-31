import { connectDB } from "@utils/database";

import Prompt from "@models/prompt";

export const POST = async (req) => {
  const { prompt, tag, creator } = await req.json();
  try {
    await connectDB();

    const newPrompt = await Prompt.create({ prompt, tag, creator });
    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (err) {
    console.log("Error: ", err.message);
    return new Response(JSON.stringify({ error: "Failed to create prompt" }), {
      status: 500,
    });
  }
};
