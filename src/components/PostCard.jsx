import { useState } from "react";

function formatIndex(n) {
  return String(n).padStart(3, "0");
}

export default function PostCard({ post, index, total }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <article className="post-card" style={{ "--delay": `${index * 80}ms` }}>
      <div className="post-card__frame">
        {!loaded && <div className="post-card__skeleton" />}
        <img
          src={post.image}
          alt={post.caption || "Photo"}
          className={`post-card__img ${loaded ? "post-card__img--loaded" : ""}`}
          loading="lazy"
          onLoad={() => setLoaded(true)}
        />
        <div className="post-card__overlay">
          <p className="post-card__caption">{post.caption}</p>
        </div>
        <span className="post-card__index">{formatIndex(total - index)}</span>
      </div>
    </article>
  );
}

export function PostCardSkeleton() {
  return (
    <article className="post-card post-card--skeleton">
      <div className="post-card__frame">
        <div className="post-card__skeleton" />
      </div>
    </article>
  );
}
