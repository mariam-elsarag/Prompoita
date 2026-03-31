"use client";
import { useState, useEffect, useRef } from "react";
import PromptCard from "./PromptCard";

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [post, setPost] = useState([]);
  const hasReset = useRef(false);

  const fetchAllPosts = async () => {
    const res = await fetch("/api/prompt");
    const data = await res.json();
    setPost(data);
  };

  const handleSearchChange = async () => {
    if (!searchText.trim()) return;

    const res = await fetch(`/api/prompt?keyword=${searchText}`);
    const data = await res.json();
    setPost(data);
    hasReset.current = false;
  };

  useEffect(() => {
    if (searchText === "" && !hasReset.current) {
      fetchAllPosts();
      hasReset.current = true;
    }
  }, [searchText]);

  useEffect(() => {
    fetchAllPosts();
    hasReset.current = true;
  }, []);

  return (
    <section className="feed">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full relative flex-center"
      >
        <input
          type="text"
          placeholder="Search for a tag or a prompt..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearchChange()}
          className="search_input peer"
        />
      </form>

      <PromptCardList data={post} handleTageClick={() => {}} />
    </section>
  );
};

const PromptCardList = ({ data }) => (
  <div className="mt-16 prompt_layout">
    {data?.map((post) => (
      <PromptCard key={post?._id} post={post} />
    ))}
  </div>
);

export default Feed;
