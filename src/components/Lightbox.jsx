import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import GlassPanel from "./GlassPanel";
import SmartImage from "./SmartImage";

/**
 * Glass lightbox with an optional image slider.
 * Pass `open={false}` (or no images) to hide it.
 */
export default function Lightbox({
  open,
  title,
  kicker,
  images = [],
  placeholderLabel,
  accent,
  link,
  linkLabel = "Verify",
  onClose,
}) {
  const [index, setIndex] = useState(0);
  const closeRef = useRef(null);
  const count = images.length;

  useEffect(() => {
    if (open) setIndex(0);
  }, [open, title]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % count);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + count) % count);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, count, onClose]);

  if (!open || count === 0) return null;

  const go = (step) => setIndex((i) => (i + step + count) % count);

  // Portal to <body>: a fixed overlay inside a backdrop-filtered panel would be clipped to it.
  return createPortal(
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={title} onClick={onClose}>
      <GlassPanel className="lightbox-panel" onClick={(e) => e.stopPropagation()}>
        <div className="lightbox-head">
          <div>
            {kicker && <p className="label">{kicker}</p>}
            <h3>{title}</h3>
          </div>
          <div className="lightbox-actions">
            {link && (
              <a className="btn-mini btn-mini--accent" href={link} target="_blank" rel="noopener noreferrer">
                {linkLabel}
              </a>
            )}
            <button ref={closeRef} className="btn-mini" onClick={onClose}>
              Close
            </button>
          </div>
        </div>

        <div className="lightbox-stage">
          <SmartImage
            key={images[index]}
            src={images[index]}
            alt={`${title}, image ${index + 1} of ${count}`}
            label={placeholderLabel || title}
            accent={accent}
            className="lightbox-img"
          />
          {count > 1 && (
            <>
              <button className="lightbox-nav lightbox-nav--prev" onClick={() => go(-1)} aria-label="Previous image">
                ←
              </button>
              <button className="lightbox-nav lightbox-nav--next" onClick={() => go(1)} aria-label="Next image">
                →
              </button>
            </>
          )}
        </div>

        {count > 1 && (
          <div className="lightbox-foot">
            <span className="label">
              {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
            </span>
            <div className="lightbox-dots">
              {images.map((src, i) => (
                <button
                  key={src}
                  className={i === index ? "is-active" : ""}
                  onClick={() => setIndex(i)}
                  aria-label={`Show image ${i + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </GlassPanel>
    </div>,
    document.body
  );
}
