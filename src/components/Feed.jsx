import PostCard, { PostCardSkeleton } from "./PostCard";

export default function Feed({ posts, loading, error }) {
  if (error) {
    return (
      <div className="feed-state">
        <span className="feed-state__icon">⚠</span>
        <p className="feed-state__title">Feed unavailable</p>
        <p className="feed-state__body">{error}</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="feed-grid">
        {Array.from({ length: 6 }).map((_, i) => (
          <PostCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (!posts.length) {
    return (
      <div className="feed-state">
        <span className="feed-state__icon">◎</span>
        <p className="feed-state__title">Nothing here yet</p>
        <p className="feed-state__body">Publish your first photo to start the feed.</p>
      </div>
    );
  }

  return (
    <div className="feed-grid">
      {posts.map((post, i) => (
        <PostCard key={post._id || i} post={post} index={i} total={posts.length} />
      ))}
    </div>
  );
}
