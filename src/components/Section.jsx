import GlassPanel from "./GlassPanel";

/** A page section: glass panel with a vertical "/label" on its left edge. */
export default function Section({ id, label, className = "", footer, children }) {
  return (
    <section id={id} className={`section ${className}`.trim()} aria-labelledby={`${id}-title`}>
      <GlassPanel className="section-panel">
        <div className="section-label" aria-hidden="true">
          <span>/{label}</span>
        </div>
        <div className="section-body">{children}</div>
        {footer && <div className="section-footer">{footer}</div>}
      </GlassPanel>
    </section>
  );
}

/** ".. heading" style title with two small orange dots. */
export function SectionTitle({ id, children }) {
  return (
    <h2 id={id} className="section-title">
      <span className="dots" aria-hidden="true">
        <i />
        <i />
      </span>
      {children}
    </h2>
  );
}
