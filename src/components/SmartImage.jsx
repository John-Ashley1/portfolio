import { useEffect, useState } from "react";

/** <img> that falls back to a gradient placeholder with a label when the file is missing. */
export default function SmartImage({ src, alt = "", label, accent = "#ff6a1a", className = "", ...rest }) {
  const [failed, setFailed] = useState(!src);

  useEffect(() => setFailed(!src), [src]);

  if (failed) {
    return (
      <div
        className={`img-placeholder ${className}`.trim()}
        style={{ "--accent-ph": accent }}
        role={alt ? "img" : undefined}
        aria-label={alt || undefined}
      >
        <span>{label}</span>
      </div>
    );
  }

  return <img src={src} alt={alt} className={className} onError={() => setFailed(true)} {...rest} />;
}
