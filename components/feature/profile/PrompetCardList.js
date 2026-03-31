"use client";
import PromptCard from "@components/shared/PromptCard";
import React, { useState } from "react";

const PrompetCardList = ({ data }) => {
  const [posts, setPosts] = useState(data);
  return (
    <div>
      {posts?.map((post, index) => (
        <PromptCard
          key={post?._id}
          post={post}
          setPosts={setPosts}
          handleDelete={() => {
            const filterPost = posts.filter((p) => p._id !== post._id);
            setPosts(filterPost);
          }}
        />
      ))}
    </div>
  );
};

export default PrompetCardList;
