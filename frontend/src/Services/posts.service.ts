const postsApi = {
    getAllPosts: async () => {
      const response = await fetch("/api/posts");
      if (!response.ok) throw new Error("Failed to fetch posts");
      return response.json();
    },
  
    getPosts: async (id) => {
      const response = await fetch(`/api/posts/${id}`);
      if (!response.ok) throw new Error("Failed to fetch posts");
      return response.json();
    },
  
    createPosts: async (postsData) => {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postsData),
      });
      if (!response.ok) throw new Error("Failed to create posts");
      return response.json();
    },
  
    updatePosts: async (id, postsData) => {
      const response = await fetch(`/api/posts/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postsData),
      });
      if (!response.ok) throw new Error("Failed to update posts");
      return response.json();
    },
  
    deletePosts: async (id) => {
      const response = await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete posts");
      return response.json();
    },
  };
  
  export default postsApi;