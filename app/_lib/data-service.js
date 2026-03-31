export const getUserPosts = async (userId) => {
  if (userId) {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/users/${userId}/posts`,
        {
          method: "GET",
        }
      );
      const data = await res.json();

      return data;
    } catch (err) {
      console.log("error fetching posts", err);
    }
  }
  return [];
};

export const deletePost = async (post, handleDelete) => {
  const hasConfirmed = confirm("Are you sure you want to delete this prompt?");
  if (hasConfirmed) {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/prompt/${post?._id.toString()}`,
        {
          method: "DELETE",
        }
      );
      if (handleDelete) {
        handleDelete();
      }
    } catch (err) {
      console.log("error deleting", err);
    }
  }
};
