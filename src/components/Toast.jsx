export default function ToastStack({ toasts }) {
  if (!toasts.length) return null;
  return (
    <div className="toast-stack" aria-live="polite">
      {toasts.map((t) => (
        <div key={t.id} className={`toast toast--${t.type}`}>
          {t.message}
        </div>
      ))}
    </div>
  );
}
