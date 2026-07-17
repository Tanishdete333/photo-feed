import { useRef, useState } from "react";

export default function UploadPanel({ onPublish, publishing, onClose }) {
  const [preview, setPreview] = useState(null);
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState("");
  const [dragging, setDragging] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef(null);

  function handleFile(f) {
    if (!f || !f.type.startsWith("image/")) {
      setError("Choose an image file.");
      return;
    }
    setError("");
    setFile(f);
    setPreview(URL.createObjectURL(f));
  }

  function handleDrop(e) {
    e.preventDefault();
    setDragging(false);
    handleFile(e.dataTransfer.files?.[0]);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!file) { setError("Choose a photo first."); return; }
    if (!caption.trim()) { setError("Add a caption."); return; }
    setError("");
    try {
      await onPublish({ image: file, caption: caption.trim() });
      setFile(null);
      setPreview(null);
      setCaption("");
      if (inputRef.current) inputRef.current.value = "";
      onClose();
    } catch (err) {
      setError(err.message || "Something went wrong.");
    }
  }

  return (
    <div className="panel-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <aside className="upload-panel">
        <div className="upload-panel__header">
          <span className="upload-panel__eyebrow">new post</span>
          <button className="upload-panel__close" onClick={onClose} aria-label="Close">✕</button>
        </div>

        <form onSubmit={handleSubmit} className="upload-panel__form">
          <div
            className={`dropzone ${dragging ? "dropzone--active" : ""} ${preview ? "dropzone--filled" : ""}`}
            onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
            onDragLeave={() => setDragging(false)}
            onDrop={handleDrop}
            onClick={() => inputRef.current?.click()}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && inputRef.current?.click()}
          >
            {preview ? (
              <img src={preview} alt="Preview" className="dropzone__preview" />
            ) : (
              <div className="dropzone__empty">
                <span className="dropzone__icon">⊕</span>
                <p>Drop a photo here</p>
                <span className="dropzone__sub">or click to browse</span>
              </div>
            )}
            <input
              ref={inputRef}
              type="file"
              accept="image/*"
              className="dropzone__input"
              onChange={(e) => handleFile(e.target.files?.[0])}
            />
          </div>

          {preview && (
            <button
              type="button"
              className="dropzone__change"
              onClick={() => inputRef.current?.click()}
            >
              Change photo
            </button>
          )}

          <div className="caption-wrap">
            <label className="caption-wrap__label">Caption</label>
            <textarea
              className="caption-wrap__input"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="Describe the moment…"
              rows={3}
              maxLength={300}
            />
            <span className="caption-wrap__count">{caption.length}/300</span>
          </div>

          {error && <p className="upload-panel__error">{error}</p>}

          <button className="publish-btn" type="submit" disabled={publishing}>
            {publishing ? (
              <span className="publish-btn__inner">
                <span className="spinner" />
                Publishing…
              </span>
            ) : (
              "Publish"
            )}
          </button>
        </form>
      </aside>
    </div>
  );
}
