import { useEffect, useState, useCallback } from "react";
import Feed from "./components/Feed";
import UploadPanel from "./components/UploadPanel";
import ToastStack from "./components/Toast";
import { fetchPosts, createPost } from "./api/posts";
import { useToast } from "./hooks/useToast";
import "./app.css";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [publishing, setPublishing] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const { toasts, addToast } = useToast();

  const load = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const data = await fetchPosts();
      setPosts([...data].reverse());
    } catch (err) {
      setError(err.message || "Unknown error.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  async function handlePublish({ image, caption }) {
    setPublishing(true);
    try {
      const post = await createPost({ image, caption });
      setPosts((prev) => [post, ...prev]);
      addToast("Photo published.");
    } catch (err) {
      addToast(err.message || "Publish failed.", "error");
      throw err;
    } finally {
      setPublishing(false);
    }
  }

  return (
    <div className="app">
      <header className="site-header">
        <div className="site-header__inner">
          <div className="site-header__brand">
            <span className="site-header__logo" aria-hidden>◉</span>
            <span className="site-header__name">Exposure</span>
          </div>
          <nav className="site-header__nav">
            <span className="site-header__count">
              {loading ? "—" : posts.length} {posts.length === 1 ? "photo" : "photos"}
            </span>
            <button
              className="site-header__upload-btn"
              onClick={() => setPanelOpen(true)}
            >
              + Publish
            </button>
          </nav>
        </div>
      </header>

      <main className="site-main">
        <div className="hero">
          <h1 className="hero__headline">
            <em>Every frame</em><br />you've shot.
          </h1>
          <p className="hero__sub">
            A personal photo feed. Upload, caption, collect.
          </p>
        </div>

        <Feed posts={posts} loading={loading} error={error} />
      </main>

      <footer className="site-footer">
        <span>Exposure © {new Date().getFullYear()}</span>
        <span>Built with React + Express + ImageKit</span>
      </footer>

      {panelOpen && (
        <UploadPanel
          onPublish={handlePublish}
          publishing={publishing}
          onClose={() => setPanelOpen(false)}
        />
      )}

      <ToastStack toasts={toasts} />
    </div>
  );
}
