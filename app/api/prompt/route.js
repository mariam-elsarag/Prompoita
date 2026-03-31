import Prompt from "@models/prompt";
import { connectDB } from "@utils/database";

export const GET = async (request, context, query) => {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const keyword = searchParams.get("keyword");

    let query = keyword
      ? {
          $or: [
            { tag: { $regex: keyword, $options: "i" } },
            { prompt: { $regex: keyword, $options: "i" } },
            { "creator.username": { $regex: keyword, $options: "i" } },
          ],
        }
      : {};
    const prompts = await Prompt.find(query).populate("creator");

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};
