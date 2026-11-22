import useReveal from "../hooks/useReveal";

/** Fades its content up the first time it scrolls into view. */
export default function Reveal({ as: Tag = "div", className = "", delay = 0, style, children, ...rest }) {
  const [ref, visible] = useReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`.trim()}
      style={{ ...style, transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
