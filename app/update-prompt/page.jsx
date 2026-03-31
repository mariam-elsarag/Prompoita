"use client";
import { useEffect, useState } from "react";

import { useRouter, useSearchParams } from "next/navigation";
import Form from "@components/shared/Form";
const EditPost = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const promptId = searchParams.get("id");

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({ prompt: "", tag: "" });

  useEffect(() => {
    const getPosDetails = async () => {
      try {
        const res = await fetch(`/api/prompt/${promptId}`, {
          method: "GET",
        });
        const data = await res.json();

        setPost({ prompt: data?.prompt, tag: data?.tag });
      } catch (err) {
        console.log("Error fetching post", err);
      }
    };
    if (promptId) {
      getPosDetails();
    }
  }, []);

  const updatePropmt = async (e) => {
    e.preventDefault();
    if (!promptId) alert("Prompt ID not found");
    try {
      setSubmitting(true);
      const response = await fetch(`/api/prompt/${promptId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
        }),
      });
      if (response.ok) {
        router.push("/");
      }
    } catch (err) {
      console.log("error", err);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <div>
      <Form
        type="Edit"
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={updatePropmt}
      />
    </div>
  );
};

export default EditPost;
