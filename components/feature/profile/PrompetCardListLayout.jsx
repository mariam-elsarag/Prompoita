import { deletePost, getUserPosts } from "@app/_lib/data-service";
import PromptCard from "@components/shared/PromptCard";
import PrompetCardList from "./PrompetCardList";

const PrompetCardListLayout = async ({ userId }) => {
  const data = await getUserPosts(userId);

  return (
    <div className=" prompt_layout">
      <PrompetCardList data={data} />
    </div>
  );
};
export default PrompetCardListLayout;
