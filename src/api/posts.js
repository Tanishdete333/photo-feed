const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export async function fetchPosts() {
  const res = await fetch(`${BASE_URL}/create-post`);
  if (!res.ok) throw new Error("Could not load the feed.");
  const data = await res.json();
  return data.posts ?? [];
}

export async function createPost({ image, caption }) {
  const form = new FormData();
  form.append("image", image);
  form.append("caption", caption);

  const res = await fetch(`${BASE_URL}/create-post`, {
    method: "POST",
    body: form,
  });
  if (!res.ok) throw new Error("Could not publish that post.");
  const data = await res.json();
  return data.post;
}
