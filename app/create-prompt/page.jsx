"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from "@components/shared/Form";
const createPrompt = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({ prompt: "", tag: "" });

  const createPropmt = async (e) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      const response = await fetch(`/api/prompt/new`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
          creator: session.user.id.toString(),
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
        type="Create"
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={createPropmt}
      />
    </div>
  );
};

export default createPrompt;
